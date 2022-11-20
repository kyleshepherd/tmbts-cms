import Time from "../../src/Time";

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
      options: {
        metadata: ["exif", "location", "blurhash", "lqip", "palette"],
      },
    },
    {
      name: "time",
      type: "string",
      title: "Time",
      inputComponent: Time,
      placeholder: "HH:MM",
      validation: (Rule) =>
        Rule.regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/gm, "time"),
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
