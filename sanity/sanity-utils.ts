import { Project } from "@/types/project";
import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getProjects(): Promise<Project[]> {
  const query = groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image": image.asset->url,
    url,
  }`;
  const projects = await client.fetch(query);
  return projects;
}

export async function getPage() {
  const query = groq`*[_type == "page" && language == $language]{
    field,
    value,
    language,
  }`;
  const page = await client.fetch(query, { language: "en" });
  return page;
}
