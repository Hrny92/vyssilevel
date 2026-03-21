import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { projectId, dataset, apiVersion } from "./lib/sanity";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  title: "Vyssilevel CMS",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
