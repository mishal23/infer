/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Infer',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/index.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'infer', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Infer',
      logo: {
        alt: 'Infer Logo',
        src: 'img/infer-logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'right'},
        {to: 'blog', label: 'Support', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'http://www.twitter.com/fbinfer',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://www.facebook.com/inferstaticanalyzer/',
          label: 'Facebook',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
