import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2f2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c9e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '46f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd10'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd10'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '9ee'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '9b5'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '253'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '021'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'dc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/auth/',
        component: ComponentCreator('/auth/', 'ec0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/audio',
        component: ComponentCreator('/autocall-api/audio', 'feb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/auth',
        component: ComponentCreator('/autocall-api/auth', 'a15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/autocallotp',
        component: ComponentCreator('/autocall-api/autocallotp', '126'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/autocalltts',
        component: ComponentCreator('/autocall-api/autocalltts', 'dae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/campaign',
        component: ComponentCreator('/autocall-api/campaign', '88a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/cdrs',
        component: ComponentCreator('/autocall-api/cdrs', '950'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/runautocall',
        component: ComponentCreator('/autocall-api/runautocall', '717'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/template',
        component: ComponentCreator('/autocall-api/template', '406'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/authentication',
        component: ComponentCreator('/category/authentication', 'f1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/autocall-api',
        component: ComponentCreator('/category/autocall-api', '365'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/tutorial---basics',
        component: ComponentCreator('/category/tutorial---basics', '72e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/intro',
        component: ComponentCreator('/intro', '283'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/congratulations',
        component: ComponentCreator('/tutorial-basics/congratulations', '4b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tutorial-basics/create-a-blog-post', '93c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-document',
        component: ComponentCreator('/tutorial-basics/create-a-document', '58e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-page',
        component: ComponentCreator('/tutorial-basics/create-a-page', 'e6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tutorial-basics/deploy-your-site', '317'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/markdown-features',
        component: ComponentCreator('/tutorial-basics/markdown-features', '04e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
