export const Content = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "Ideate your thoughts here!!" }],
      },
      { type: "text", text: " + " },   
      {
        type: "heading",
        attrs: { level: 3 },
        content: [{ type: "text", text: "Usage" }],
      },
      {
        type: "codeBlock",
        attrs: { language: null },
        content: [
          {
            type: "text",
            text: 'print("Hello World")',
          },
        ],
      },
      {
        type: "heading",
        attrs: { level: 3 },
        content: [{ type: "text", text: "Features" }],
      },
      {
        type: "orderedList",
        attrs: { tight: true, start: 1 },
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Slash menu & bubble menu" }],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "AI autocomplete (type " },
                  { type: "text", marks: [{ type: "code" }], text: "++" },
                  {
                    type: "text",
                    text: " to activate, or select from slash menu)",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Image uploads (drag & drop / copy & paste, or select from slash menu) ",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };