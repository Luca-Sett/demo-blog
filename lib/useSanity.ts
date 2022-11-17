import { createClient } from "next-sanity";

export const useSanity = () =>
  createClient({
    projectId: "f0s65vff",
    dataset: "production",
    apiVersion: "2022-11-15",
    useCdn: false,
  });
