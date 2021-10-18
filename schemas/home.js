export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "slideImages",
      title: "Slider Images",
      type: "array",
      of: [
        {
          type: "image",
        },
        {
          title: "Slider Details",
          type: "object",
          fields: [
            {
              name: "weddingDate",
              title: "Wedding Date",
              type: "date",
              options: {
                dateFormat: "YYYY-MM-DD",
                calendarTodayLabel: "Today",
              },
            },
            {
              name: "title",
              title: "Slider Title",
              type: "string",
            },
            {
              name: "description",
              title: "Slider Description",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "coupleIntroTitle",
      title: "Couple Intro",
      type: "string",
    },
    {
      name: "coupleHighlight",
      title: "Couple Highlight Description",
      type: "blockContent",
    },
    {
      name: "coupleIntroImage",
      title: "Couple Image",
      type: "array",
      of: [
        {
          type: "image",
          // name: "coupleImage",
        },
      ],
    },
    {
      name: "coupleIntroDescription",
      type: "array",
      title: "Couple Intro Description",
      of: [
        {
          type: "string",
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
      name: "weddingDetail",
      title: "Wedding Info Card",
      type: "array",

      of: [
        {
          type: "image",
        },
        {
          title: "Card Details",
          type: "object",
          fields: [
            {
              name: "description",
              type: "string",
              title: "Card Description",
            },
            {
              name: "title",
              type: "string",
              title: "Card Title",
            },
          ],
        },
      ],
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
