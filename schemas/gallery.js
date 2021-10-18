export default {
  title: "Gallery",
  name: "gallery",
  type: "document",

  fields: [
    {
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      name: "galleryTitle",
      title: "Gallery Title",
      type: "string",
    },
    {
      name: "galleryDescription",
      title: "Gallery Description",
      type: "string",
    },

    {
      name: "FooterTitle",
      title: " Footer Title",
      type: "string",
    },
    {
      name: "footerSubTitle",
      title: " Footer SubTitle",
      type: "string",
    },
    {
      name: "footerImage",
      title: "Footer Image",
      type: "image",
    },
  ],
  options: {
    hotspot: true,
  },
};
