export default {
  name: "entry",
  type: "document",
  title: "Entry",
  fields: [
    {
      name: "date",
      type: "date",
      title: "Date",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    },
    {
      name: "pictures",
      type: "array",
      title: "Pictures",
      of: [{ type: "picture" }],
    },
  ],
  preview: {
    select: {
      title: "date",
    },
  },
};
