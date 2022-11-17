import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { config } from "../../lib/sanity.config";

const studioConfig = defineConfig(config);

export default function Studio() {
  return <NextStudio config={studioConfig} />;
}
