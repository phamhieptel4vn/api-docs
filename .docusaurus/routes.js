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
    component: ComponentCreator('/', '347'),
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
        path: '/autocall-api/campaign',
        component: ComponentCreator('/autocall-api/campaign', '88a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/carrier',
        component: ComponentCreator('/autocall-api/carrier', '141'),
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
        path: '/autocall-api/list',
        component: ComponentCreator('/autocall-api/list', '93e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autocall-api/report',
        component: ComponentCreator('/autocall-api/report', '023'),
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
        path: '/callcenter-api/agent',
        component: ComponentCreator('/callcenter-api/agent', '49c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/auth',
        component: ComponentCreator('/callcenter-api/auth', 'd3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/autocall',
        component: ComponentCreator('/callcenter-api/autocall', '04b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/autodial',
        component: ComponentCreator('/callcenter-api/autodial', '546'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/call',
        component: ComponentCreator('/callcenter-api/call', '035'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/carrier',
        component: ComponentCreator('/callcenter-api/carrier', '9cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/cdr',
        component: ComponentCreator('/callcenter-api/cdr', 'fff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/click2call',
        component: ComponentCreator('/callcenter-api/click2call', '421'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/customer',
        component: ComponentCreator('/callcenter-api/customer', '214'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/event',
        component: ComponentCreator('/callcenter-api/event', '60e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/group',
        component: ComponentCreator('/callcenter-api/group', '374'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/lead',
        component: ComponentCreator('/callcenter-api/lead', 'b3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/list',
        component: ComponentCreator('/callcenter-api/list', '704'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/report',
        component: ComponentCreator('/callcenter-api/report', 'f50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/statistic',
        component: ComponentCreator('/callcenter-api/statistic', '161'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/template',
        component: ComponentCreator('/callcenter-api/template', 'a33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-api/user',
        component: ComponentCreator('/callcenter-api/user', 'fd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/add-user-to-group',
        component: ComponentCreator('/callcenter-portal-admin-guide/add-user-to-group', '3f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/blacklist',
        component: ComponentCreator('/callcenter-portal-admin-guide/blacklist', '384'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/cdrs',
        component: ComponentCreator('/callcenter-portal-admin-guide/cdrs', 'f81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/create-campaign',
        component: ComponentCreator('/callcenter-portal-admin-guide/create-campaign', '51d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/create-category',
        component: ComponentCreator('/callcenter-portal-admin-guide/create-category', '351'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/create-customfield',
        component: ComponentCreator('/callcenter-portal-admin-guide/create-customfield', '2eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/create-department',
        component: ComponentCreator('/callcenter-portal-admin-guide/create-department', '134'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/create-disposition',
        component: ComponentCreator('/callcenter-portal-admin-guide/create-disposition', '1a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/create-group',
        component: ComponentCreator('/callcenter-portal-admin-guide/create-group', 'd83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/create-list',
        component: ComponentCreator('/callcenter-portal-admin-guide/create-list', '734'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/create-role',
        component: ComponentCreator('/callcenter-portal-admin-guide/create-role', '36f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/create-user',
        component: ComponentCreator('/callcenter-portal-admin-guide/create-user', 'fb9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/dashboard',
        component: ComponentCreator('/callcenter-portal-admin-guide/dashboard', '394'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/import-lead',
        component: ComponentCreator('/callcenter-portal-admin-guide/import-lead', '285'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/login-account',
        component: ComponentCreator('/callcenter-portal-admin-guide/login-account', '144'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/manager-lead',
        component: ComponentCreator('/callcenter-portal-admin-guide/manager-lead', '226'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/manager-user',
        component: ComponentCreator('/callcenter-portal-admin-guide/manager-user', '03d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/monitor-agent',
        component: ComponentCreator('/callcenter-portal-admin-guide/monitor-agent', 'cba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/monitor-callcenter',
        component: ComponentCreator('/callcenter-portal-admin-guide/monitor-callcenter', 'c2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/monitor-campaign',
        component: ComponentCreator('/callcenter-portal-admin-guide/monitor-campaign', '3b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/monitor-queue',
        component: ComponentCreator('/callcenter-portal-admin-guide/monitor-queue', '28f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/qc',
        component: ComponentCreator('/callcenter-portal-admin-guide/qc', '950'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/recordings',
        component: ComponentCreator('/callcenter-portal-admin-guide/recordings', '1ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/report',
        component: ComponentCreator('/callcenter-portal-admin-guide/report', 'b06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/speech-to-text',
        component: ComponentCreator('/callcenter-portal-admin-guide/speech-to-text', 'b2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/callcenter-portal-admin-guide/voicemail',
        component: ComponentCreator('/callcenter-portal-admin-guide/voicemail', 'c08'),
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
        path: '/category/callcenter-api',
        component: ComponentCreator('/category/callcenter-api', '58f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/callcenter-portal-admin-guide',
        component: ComponentCreator('/category/callcenter-portal-admin-guide', '92a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/pbx-api',
        component: ComponentCreator('/category/pbx-api', '3b7'),
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
        path: '/pbx-api/auth',
        component: ComponentCreator('/pbx-api/auth', 'a95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/autodial',
        component: ComponentCreator('/pbx-api/autodial', 'b5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/blacklist',
        component: ComponentCreator('/pbx-api/blacklist', 'de3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/call',
        component: ComponentCreator('/pbx-api/call', '28c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/callcenter',
        component: ComponentCreator('/pbx-api/callcenter', 'e49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/campaign',
        component: ComponentCreator('/pbx-api/campaign', 'd81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/cdr',
        component: ComponentCreator('/pbx-api/cdr', '349'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/click2call',
        component: ComponentCreator('/pbx-api/click2call', '46c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/event',
        component: ComponentCreator('/pbx-api/event', '7b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/extension',
        component: ComponentCreator('/pbx-api/extension', 'b87'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/monitor',
        component: ComponentCreator('/pbx-api/monitor', '41d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/report',
        component: ComponentCreator('/pbx-api/report', '742'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/smartrouting',
        component: ComponentCreator('/pbx-api/smartrouting', 'b74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/tenant',
        component: ComponentCreator('/pbx-api/tenant', '74b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pbx-api/voicemail',
        component: ComponentCreator('/pbx-api/voicemail', '793'),
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
