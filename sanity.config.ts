import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./app/sanity/schemas";

const config = defineConfig({
  projectId: "klxdqeze",
  dataset: "production",
  title: "Next Sanity",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
