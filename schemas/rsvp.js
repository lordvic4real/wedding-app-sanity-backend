export default {
  name: "person",
  type: "document",
  title: "Rsvp Form",
  //   readOnly: true,

  fields: [
    {
      name: "banner",
      title: "title",
      type: "array",
      of: [{ type: "banner" }],
    },

    {
      name: "email",
      type: "email",
      title: "Email",
    },
    {
      name: "firstName",
      type: "string",
      title: "First Name",
    },
    {
      name: "lastName",
      type: "string",
      title: "Last Name",
    },
    {
      name: "message",
      type: "blockContent",
      title: "Message",
    },
    {
      name: "attend",
      type: "object",
      title: "I Will Attend",
      fields: [
        {
          name: "trad",
          type: "boolean",
          title: "Traditional",
        },
        {
          name: "church",
          type: "boolean",
          title: "Church",
        },
        {
          name: "reception",
          type: "boolean",
          title: "Reception",
        },
      ],
    },
  ],
};
