import { buildPwaProject, type PwaFiles } from './pwa-project.ts';

type SdkLike = { openProject: (p: unknown, o?: unknown) => void };
let sdkPromise: Promise<SdkLike> | null = null;
function loadSdk(): Promise<SdkLike> {
  if (!sdkPromise) sdkPromise = import(/* @vite-ignore */ 'https://esm.sh/@stackblitz/sdk').then((m) => (m.default ?? m) as SdkLike);
  return sdkPromise;
}

export default function PwaPlayground({ files, openFile = 'index.html' }: { files: PwaFiles; openFile?: string }) {
  async function open() {
    const sdk = await loadSdk();
    sdk.openProject(buildPwaProject(files), { openFile, newWindow: true });
  }
  return (
    <div class="pwa-play">
      <button class="pwa-play__btn" onClick={open}>Open in StackBlitz ↗</button>
      <span class="pwa-play__hint">Runs a real service worker + manifest in your browser.</span>
    </div>
  );
}
