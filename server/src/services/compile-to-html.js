import path from "path";
import fs from "fs-extra";
import hbs from "handlebars";

async function compileToHtml(data) {
  const filepath = path.join(process.cwd(), "src", "templates", "pdf.hbs");
  const templateFile = await fs.readFile(filepath, "utf-8");
  return hbs.compile(templateFile)(data);
}

export default compileToHtml;
