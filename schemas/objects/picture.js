export default {
  name: "picture",
  type: "object",
  title: "Picture",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "time",
      type: "datetime",
      title: "Time",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "locationUrl",
      type: "url",
      title: "Location URL",
    },
  ],
  preview: {
    select: {
      image: "image",
      caption: "caption",
      location: "location",
    },
    prepare(selection) {
      const { image, caption, location } = selection;
      return {
        media: image,
        title: location + (caption ? " - " + caption : ""),
      };
    },
  },
};
