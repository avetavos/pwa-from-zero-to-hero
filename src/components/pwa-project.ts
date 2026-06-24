import type { Project } from '@stackblitz/sdk';

export type PwaFiles = Record<string, string>;

const BASE: PwaFiles = {
  'package.json': JSON.stringify(
    { name: 'pwa-demo', private: true, scripts: { start: 'serve . -l 3000' }, dependencies: { serve: '^14.2.4' } },
    null,
    2,
  ),
};

export function buildPwaProject(files: PwaFiles): Project {
  return {
    title: 'PWA demo',
    description: 'A runnable Progressive Web App — service worker + manifest.',
    template: 'node',
    files: { ...BASE, ...files },
  };
}
