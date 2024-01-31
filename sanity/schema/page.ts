import { defineField } from "sanity";

export const page = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "field",
      type: "string",
    },

    defineField({
      name: "value",
      type: "internationalizedArrayString",
    }),
  ],
};
