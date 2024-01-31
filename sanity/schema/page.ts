import { defineField } from "sanity";

export const page = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "field", // field name is required and must be unique
      type: "string", // field type is required
    },

    {
      name: "value",
      type: "string",
    },
  ],
};

defineField({
  // should match 'languageField' plugin configuration setting, if customized
  name: "language",
  type: "string",
  readOnly: true,
  hidden: true,
});
