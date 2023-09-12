import { OpenAIChat } from "langchain/llms/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import basePrompt from "./basePrompt";

let store: HNSWLib;

// OpenAI Configuration
const model = new OpenAIChat({
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo'
});

// Parse and initialize the Prompt
const prompt = new PromptTemplate({
  template: basePrompt,
  inputVariables: ["history", "context", "prompt"]
});

// Create the LLM Chain
const llmChain = new LLMChain({
  llm: model,
  prompt
});

const generateResponse = async ({
  history,
  prompt
}: {
  history: Array<string>;
  prompt: string;
}) => {
  if (!store) {
    store = await HNSWLib.load("vectorStore", new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY
    }));
  }

  const data = await store.similaritySearch(prompt, 1);
  const context: Array<string> = [];
  data.forEach((item, i) => {
    context.push(`Context:\n${item.pageContent}`)
  });

  return await llmChain.predict({
    prompt,
    context: context.join('\n\n'),
    history
  })
}

export default generateResponse;