import express from "express";
import cors from "cors";

import htmlToPdf from "./services/html-to-pdf.js";
import compileToHtml from "./services/compile-to-html.js";

const PORT = process.env.PORT || 5001;

class App {
  static async main() {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.post("/convert-pdf", async (req, res) => {
      const htmlResult = await compileToHtml(req.body);
      const pdfResult = await htmlToPdf(htmlResult);
      res.contentType("application/pdf");

      res.send(pdfResult);
    });

    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  }
}

export default App;
