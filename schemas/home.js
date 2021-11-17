export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "carosel",
      title: "Carousel",
      type: "array",
      of: [{ type: "slides" }],
    },

    {
      name: "introTitle",
      title: "Couple Intro",
      type: "string",
    },
    {
      name: "introStory",
      title: "Intro Story",
      type: "blockContent",
    },
    {
      name: "couple",
      title: "The Couple",
      type: "array",
      of: [
        {
          type: "card",
        },
      ],
    },

    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      name: "locationTitle",
      title: "Location Title",
      type: "string",
    },
    {
      name: "locationCaption",
      title: "Location Caption",
      type: "string",
    },
    {
      name: "weddingInfoTitle",
      title: "Wedding Info ",
      type: "string",
    },
    {
      name: "weddingInfoDescription",
      title: "Wedding Info Description ",
      type: "string",
    },
    {
      name: "card",
      title: "Card",
      type: "array",

      of: [{ type: "card" }],
    },

    {
      name: "homeRsvp",
      title: "Rsvp Title",
      type: "string",
    },
    {
      name: "homeRsvpDesc",
      title: "Home Rsvp Description",
      type: "string",
    },
    {
      name: "homeFooterTitle",
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
