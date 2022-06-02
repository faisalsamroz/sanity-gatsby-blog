export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6298bff815b117256354f400",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-7uwbhg37",
                  apiId: "16cd736b-d4bf-43d8-a969-94e364aa774f",
                },
                {
                  buildHookId: "6298bff915b11724aa54f7ac",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-b26uqeoa",
                  apiId: "53c530ab-dfb0-4278-81ce-d9dde8b6f6c2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/faisalsamroz/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-b26uqeoa.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
