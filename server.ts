import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import generateResponse from './src/chatbot/generateResponse';
import { LightningAddress, Invoice } from "alby-tools";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// Serve the correct static HTML file even if the .html extension is not provided
app.get('*', function(req, res, next) {
  if (path.extname(req.path)) {
    next();
  } else {
    res.sendFile(path.join(__dirname, 'build', `${req.path.endsWith('/') ? req.path.slice(0, -1) : req.path}.html`));
  }
});

app.post("/prompt", async (req, res) => {
  const prompt = req.body.prompt;
  const history = req.body.history;

  const pr: string | null | undefined = req.body.pr;
  const verify: string | undefined = req.body.verify;

  if (!pr) {
    res.status(402).send({
      error: "Payment not provided",
      success: false
    });
    return;
  }

  const invoice = new Invoice({ pr, verify });

  if (await invoice.isPaid()) {
    if (typeof prompt === "string" && Array.isArray(history) && history.every(x => typeof x === "string")) {
      const message = await generateResponse({
        prompt,
        history
      });

      res.json({
        message,
        success: true
      });
    } else {
      res.status(400).json({
        error: "Invalid request body",
        success: false
      });
    }
  } else {
    res.status(402).json({
      error: "Payment failed",
      success: false
    });
  }
})

app.post("/invoice", async (req, res) => {
  const ln = new LightningAddress("hello@getalby.com");
  await ln.fetch();

  const invoice = await ln.requestInvoice({ satoshi: 25 });

  res.json(invoice)
})


app.listen(3000, function() {
  console.log('App is listening on port 3000!');
});
