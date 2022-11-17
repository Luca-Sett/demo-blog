import { deskTool } from "sanity/desk";
import { article, author } from "./sanitySchemas";

export const config = {
  projectId: "f0s65vff",
  dataset: "production",
  apiVersion: "2022-11-16",
  title: "Demo Blog",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: [article, author],
  },
};
