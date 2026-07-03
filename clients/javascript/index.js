// yourhack.ai tools API - tiny zero-dependency JavaScript client.
// Works in Node 18+ and the browser (uses global fetch).
//
//   import { YourHack } from './index.js';
//   const yh = new YourHack();
//   const { tools } = await yh.tools();
//   const meta = await yh.tool('json-formatter');
//   const { categories } = await yh.categories();

const DEFAULT_BASE = 'https://yourhack.ai';

export class YourHack {
  constructor(baseUrl = DEFAULT_BASE) {
    this.base = baseUrl.replace(/\/$/, '');
  }

  async _get(path) {
    const res = await fetch(this.base + path, { headers: { accept: 'application/json' } });
    if (!res.ok) throw new Error('yourhack API ' + res.status + ' for ' + path);
    return res.json();
  }

  // All tools with metadata + canonical url.
  tools() {
    return this._get('/api/tools');
  }

  // One tool by id (url slug), or throws on 404.
  tool(id) {
    return this._get('/api/tools/' + encodeURIComponent(id));
  }

  // All categories with tool counts.
  categories() {
    return this._get('/api/categories');
  }
}

export default YourHack;
