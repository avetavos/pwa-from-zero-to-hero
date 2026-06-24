import { describe, it, expect } from 'vitest';
import { buildPwaProject } from '../src/components/pwa-project';

describe('buildPwaProject', () => {
  it('merges provided files over the base files', () => {
    const p = buildPwaProject({ 'index.html': '<h1>hi</h1>' });
    expect(p.files['index.html']).toBe('<h1>hi</h1>');
  });
  it('includes a base package.json and a node template', () => {
    const p = buildPwaProject({});
    expect(p.template).toBe('node');
    expect(p.files['package.json']).toContain('"serve"');
  });
});
