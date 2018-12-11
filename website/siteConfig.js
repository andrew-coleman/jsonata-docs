/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  // {
  //   caption: 'User1',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: '/img/docusaurus.svg',
  //   infoLink: 'http://jsonata.org',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'JSONata', // Title for your website.
  tagline: 'JSON query and transformation language',
  //  url: 'https:jsonata-js.github.io/', // Your website URL
    url: 'https://andrew-coleman.github.io',
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  docsUrl: '',

  // Used for publishing and more
  projectName: 'andrew-coleman.github.io',
  //organizationName: 'jsonata-js',
    organizationName: 'andrew-coleman',
    // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'overview', label: 'Docs'},
    { href: "http://try.jsonata.org", label: "Try" },
    { href: "https://github.com/jsonata-js/jsonata", label: "GitHub" },
    { href: "https://www.npmjs.com/package/jsonata", label: "NPM" },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/jsonata-button.png',
  footerIcon: 'img/jsonata-white-167.png',
  favicon: 'img/jsonata-button.png',

  /* Colors for website */
  colors: {
    primaryColor: '#275154',
    secondaryColor: '#275154',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © 2018 JSONata.org`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    '/js/jsonata-examples.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  //editUrl: 'https://github.com/jsonata-js/jsonata/edit/master/docs/docs/'
    editUrl: 'https://github.com/andrew-coleman/jsonata-docs/edit/master/docs/'

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
