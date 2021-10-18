export default {
  title: "About Him",
  name: "aboutHim",
  type: "document",

  fields: [
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
    },
    {
      name: "bannerTitle",
      title: "Banner Title",
      type: "string",
    },
    {
      name: "bannerDescription",
      title: "Banner Description",
      type: "string",
    },
    {
      name: "mainBio",
      title: "Bio",
      type: "blockContent",
    },
    {
      name: "FooterTitle",
      title: "Home Footer Title",
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
