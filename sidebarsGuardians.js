/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guardiansSidebar: [
    "intro",
    "how-federations-work",
    { type: "doc", id: "founding", label: "Founding a Federation" },
    {
      type: "category",
      label: "Run a Federation",
      items: [
        { type: "doc", id: "Setup/overview", label: "Overview" },
        { type: "doc", id: "Setup/start9", label: "Start9" },
        { type: "doc", id: "Setup/umbrel", label: "Umbrel" },
        { type: "doc", id: "Setup/nodana", label: "Nodana" },
        { type: "doc", id: "Setup/docker", label: "Docker" },
      ],
    },
  ],
};

export default sidebars;
