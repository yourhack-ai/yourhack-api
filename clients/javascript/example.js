// Example: list every yourhack.ai tool and print a random one.
// Run: node example.js

import { YourHack } from './index.js';

const yh = new YourHack();

const { count, tools } = await yh.tools();
console.log('yourhack.ai has ' + count + ' tools');

const pick = tools[Math.floor(Math.random() * tools.length)];
console.log('\nRandom tool:');
console.log('  ' + pick.name + '  ->  ' + pick.url);
console.log('  ' + pick.description);

const { categories } = await yh.categories();
console.log('\nCategories:');
for (const c of categories) {
  console.log('  ' + c.name.padEnd(14) + c.toolCount + ' tools  ' + c.url);
}
