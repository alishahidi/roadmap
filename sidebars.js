// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  roadmapSidebar: [
    {
      type: 'category',
      label: 'Senior Developer Roadmap',
      collapsible: false,
      items: [
        '01-foundations',
        '02-api-design',
        '03-system-architecture',
        '04-data-and-persistence',
        '05-deployment-and-operations',
        '06-observability-and-performance',
      ],
    },
  ],
};

export default sidebars;
