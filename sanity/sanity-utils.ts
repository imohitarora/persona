import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "j1ok0828",
    dataset: "production",
    apiVersion: "2023-04-29",
  });

  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}
