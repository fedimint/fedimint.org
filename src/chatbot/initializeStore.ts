import { CharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { globSync } from 'glob';
import * as fs from 'fs';

/** 
 * Reads the files in the `context` folder located at root level
 * and creates a vector store with HNSWLib.
 *
 * The vector store is saved to a directory `vectorStore`.
 */

// Get all files in the `context` folder located at root level
const files = globSync("docs/**/*.{md,mdx,txt}");

// File contents packed into an Array of strings
const data: Array<string> = [];

// Iterate through all files and add their contents to the data array
for (const file of files) {
  data.push(fs.readFileSync(file, 'utf-8'));
}

console.log(`Added ${files.length} files to data.  Splitting text into chunks...`);

// Splits files into chunks of 2000 characters or less
const textSplitter = new CharacterTextSplitter({
  chunkSize: 2000,
  separator: "\n"
});

let docs: Array<string> = [];

(async () => {
  // Add text chunks to the docs array, awaiting each iteration
  for await (const d of data) {
    let texts = await textSplitter.splitText(d);

    docs.push(...texts);
  }

  // Creates a Vector Store from the `docs` array
  const vectorStore = await HNSWLib.fromTexts(
    docs,
    docs.map((_, i) => ({ id: i })),
    new OpenAIEmbeddings()
  );

  await vectorStore.save('vectorStore');

  console.log("Vector Store saved")
})();