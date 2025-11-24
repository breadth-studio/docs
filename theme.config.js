import { Callout, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Logo from "./public/logo-domain.svg";

export default {
  project: {
    link: 'https://github.com/breadth-studio',
  },
  logoLink: 'https://breadth.app',
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  primaryHue: { dark: 278, light: 265 },
  docsRepositoryBase: 'https://github.com/breadth-studio/docs/tree/master',
  components: {  Callout },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '简体中文' },
    { locale: 'zh-TW', text: '繁體中文' },
  ],
  logo: (
    <img
      src={Logo.src}
      style={{ height: 35, objectFit: 'contain' }}
      alt="BreadthApp"
    />
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BreadthApp',
    }
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://breadth.app" target="_blank">
          Breadth Software, Inc. {" "}
        </a>
        All rights reserved.
      </span>
    ),
  },
}
