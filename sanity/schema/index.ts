import { type SchemaTypeDefinition } from "sanity";
import { page } from "./page";
import { project } from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, page],
};
