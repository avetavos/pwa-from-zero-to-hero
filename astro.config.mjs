// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://pwa-from-zero-to-hero.avetavos.com',
  base: '/',
  output: 'static',
  integrations: [starlight({
      title: 'PWA — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#5A0FC8' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "PWA" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js',{scope:'/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/pwa-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro: What is a PWA?', items: [{ autogenerate: { directory: 'intro-what-is-pwa' } }] },
        { label: 'Web App Manifest', items: [{ autogenerate: { directory: 'web-app-manifest' } }] },
        { label: 'Service Workers', items: [{ autogenerate: { directory: 'service-workers' } }] },
        { label: 'Caching Strategies', items: [{ autogenerate: { directory: 'caching-strategies' } }] },
        { label: 'Offline & App Shell', items: [{ autogenerate: { directory: 'offline-app-shell' } }] },
        { label: 'Push & Advanced', items: [{ autogenerate: { directory: 'push-advanced' } }] },
        { label: 'PWA with React', items: [{ autogenerate: { directory: 'pwa-with-react' } }] },
        { label: 'PWA with Astro', items: [{ autogenerate: { directory: 'pwa-with-astro' } }] },
        { label: 'PWA with Svelte', items: [{ autogenerate: { directory: 'pwa-with-svelte' } }] },
      ],
      }), preact()],
});