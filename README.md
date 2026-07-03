# yourhack.ai — Free Online Tools API & Catalog

**680 free, fast, privacy-friendly web tools. No sign-up, no ads, nothing uploaded.** Every tool runs 100% in your browser. This repo is the public, machine-readable catalog and API for [yourhack.ai](https://yourhack.ai).

- 🌐 **Site:** https://yourhack.ai
- 📚 **All tools:** https://yourhack.ai/all
- 🤖 **For AI assistants:** https://yourhack.ai/llms.txt
- 🔌 **API base:** `https://yourhack.ai`
- �spec **OpenAPI:** [`openapi.json`](./openapi.json) · live at https://yourhack.ai/openapi.json
- 🗂️ **Catalog snapshot:** [`catalog.json`](./catalog.json)

Every tool is client-side, so there is nothing to install, no key to manage, and nothing you enter is ever sent to a server.

## API

Free, no auth, CORS-open. Metadata only (the tools themselves live and run on the site).

| Method | Endpoint | Returns |
| ------ | -------- | ------- |
| `GET` | `/api/tools` | Every tool: `{ count, tools: [{ id, name, category, url, description, keywords }] }` |
| `GET` | `/api/tools/{id}` | One tool's metadata, or `404` |
| `GET` | `/api/categories` | Every category with a tool count |
| `GET` | `/openapi.json` | OpenAPI 3.1 spec |
| `GET` | `/api/tools.json` | Flat search index (id, name, category, description, keywords) |

### curl

```bash
# List every tool
curl -s https://yourhack.ai/api/tools | head

# One tool
curl -s https://yourhack.ai/api/tools/json-formatter

# Categories with counts
curl -s https://yourhack.ai/api/categories
```

### JavaScript (zero dependencies, Node 18+ or browser)

```js
import { YourHack } from 'yourhack';

const yh = new YourHack();
const { count, tools } = await yh.tools();
console.log(`${count} tools`);
const meta = await yh.tool('json-formatter');
```

See [`clients/javascript`](./clients/javascript).

### Python (standard library only)

```python
from yourhack import YourHack

yh = YourHack()
tools = yh.tools()["tools"]
meta = yh.tool("json-formatter")
```

See [`clients/python`](./clients/python).

## Categories

| Category | Tools | Browse |
| -------- | ----- | ------ |
| Text | 50 | [text](https://yourhack.ai/c/text) |
| Developer | 57 | [developer](https://yourhack.ai/c/developer) |
| Calculators | 68 | [calculators](https://yourhack.ai/c/calculators) |
| Random & Fun | 39 | [random](https://yourhack.ai/c/random) |
| Converters | 79 | [converters](https://yourhack.ai/c/converters) |
| Color | 15 | [color](https://yourhack.ai/c/color) |
| Generators | 22 | [generators](https://yourhack.ai/c/generators) |
| Productivity | 20 | [productivity](https://yourhack.ai/c/productivity) |
| Image | 10 | [image](https://yourhack.ai/c/image) |
| PDF | 10 | [pdf](https://yourhack.ai/c/pdf) |
| Crypto | 27 | [crypto](https://yourhack.ai/c/crypto) |
| Date & Time | 27 | [datetime](https://yourhack.ai/c/datetime) |
| Data | 27 | [data](https://yourhack.ai/c/data) |
| SEO | 23 | [seo](https://yourhack.ai/c/seo) |
| Social | 22 | [social](https://yourhack.ai/c/social) |
| Network | 22 | [network](https://yourhack.ai/c/network) |
| Science | 24 | [science](https://yourhack.ai/c/science) |
| Math | 26 | [math](https://yourhack.ai/c/math) |
| Finance | 24 | [finance](https://yourhack.ai/c/finance) |
| Health & Fitness | 24 | [health](https://yourhack.ai/c/health) |
| Education | 22 | [education](https://yourhack.ai/c/education) |
| Business | 22 | [business](https://yourhack.ai/c/business) |
| Cooking | 20 | [cooking](https://yourhack.ai/c/cooking) |

## All tools

Every tool below is free and runs entirely in your browser.

### Text

- [Add Line Numbers](https://yourhack.ai/add-line-numbers): Free tool to add line numbers to text. Number every line with custom start, separator and zero padding. Great for code, lists and logs. Fully private.
- [Binary to Text](https://yourhack.ai/binary-to-text-decoder): Free binary to text converter. Decode 8-bit binary code back into readable words and sentences. Handles spaces between bytes automatically. Runs privately.
- [Bold Unicode Text Generator](https://yourhack.ai/bold-unicode-text): Free bold Unicode text generator for bios. Make bold, bold italic and sans-serif bold text that pastes into Instagram, LinkedIn and Twitter. Private.
- [Caesar Cipher](https://yourhack.ai/caesar-cipher): Free Caesar cipher tool. Encrypt or decrypt text by shifting letters a chosen number of places. Adjustable shift from 1 to 25 with instant preview. Private.
- [camelCase, snake_case and kebab Converter](https://yourhack.ai/case-style-converter): Free code case converter. Convert identifiers between camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE and dot.case for programming. Private.
- [Case Converter](https://yourhack.ai/case-converter): Free case converter online. Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more instantly.
- [Character and Special Symbol Picker](https://yourhack.ai/special-symbol-picker): Free special symbol picker. Browse and copy arrows, currency, math, stars, punctuation, emoji-style and other Unicode symbols with one click. Private.
- [Duplicate Word Remover](https://yourhack.ai/duplicate-word-remover): Free duplicate word remover. Delete repeated words from text and keep only the first occurrence of each, with optional case-insensitive matching. Private.
- [Extract Email Addresses](https://yourhack.ai/extract-emails): Free tool to extract email addresses from text. Pull every email out of pasted content, dedupe and list one per line with a count. Fully private in your browser.
- [Extract Numbers from Text](https://yourhack.ai/extract-numbers): Free tool to extract numbers from text. Pull every number out of pasted content, list one per line, and see the total sum and count instantly. Runs in your browser.
- [Extract URLs from Text](https://yourhack.ai/extract-urls): Free tool to extract URLs from text. Pull every http and https link out of pasted content, dedupe and list one per line with a count. Private in your browser.
- [Fancy Unicode Text Generator](https://yourhack.ai/fancy-text-generator): Free fancy text generator. Turn plain text into cursive, bold, italic, monospace, bubble and other Unicode styles for social media bios and posts. Private.
- [Find and Replace](https://yourhack.ai/find-and-replace): Free find and replace tool. Replace all occurrences of a word or pattern in text, with case-insensitive and regex options. Bulk edit text privately.
- [JSON Formatter & Validator](https://yourhack.ai/json-formatter): Free online JSON formatter and validator. Beautify, minify and validate JSON instantly in your browser. No data leaves your device.
- [Leetspeak Converter](https://yourhack.ai/leetspeak-converter): Free leetspeak converter. Turn text into 1337 5p34k by swapping letters for numbers and symbols, or decode it back to plain text. Live and private in your browser.
- [Line Counter](https://yourhack.ai/line-counter): Free online line counter. Count total lines, non-empty lines, blank lines and words in any text or code as you type. Live results, fully private in browser.
- [Lorem Ipsum Generator](https://yourhack.ai/lorem-ipsum-generator): Free Lorem Ipsum generator. Create placeholder text by paragraphs, sentences or words for mockups and layouts, with a classic or random start. Private.
- [Markdown Table Generator](https://yourhack.ai/markdown-table-generator): Free Markdown table generator. Enter rows and columns, edit cells in a grid, and get clean aligned Markdown table syntax to paste into docs. Private.
- [Markdown to HTML Converter](https://yourhack.ai/markdown-to-html): Free Markdown to HTML converter. Turn Markdown into clean HTML with a live preview. Supports headings, lists, links, bold, code and more. Runs privately.
- [Mirror Text Generator](https://yourhack.ai/mirror-text): Free mirror text generator. Reverse the characters in your text to create mirrored, backwards strings, per line or all at once. Live and private in your browser.
- [Morse Code Translator](https://yourhack.ai/morse-code-translator): Free Morse code translator. Convert text to Morse code and Morse back to text, with support for letters, numbers and common punctuation. Runs in your browser.
- [NATO Phonetic Alphabet Converter](https://yourhack.ai/nato-phonetic-alphabet): Free NATO phonetic alphabet converter. Spell out any text as Alpha Bravo Charlie for clear communication over phone and radio. Reverse decode too. Private.
- [Palindrome and Anagram Checker](https://yourhack.ai/palindrome-anagram-checker): Free palindrome and anagram checker. Test if a word or phrase is a palindrome, and check whether two texts are anagrams of each other. Runs privately.
- [Pig Latin Translator](https://yourhack.ai/pig-latin): Free Pig Latin translator. Convert English text to Pig Latin instantly, moving leading consonants to the end and adding ay or way. Live and private in your browser.
- [Random Paragraph Generator](https://yourhack.ai/random-paragraph-generator): Free random paragraph generator. Produce readable random English paragraphs for testing layouts, writing prompts and placeholder content. Runs privately.
- [README Generator](https://yourhack.ai/readme-generator): Free README generator. Fill in a short form and get a clean, structured README.md with badges, install, usage and license sections ready to copy. Private.
- [Remove Duplicate Lines](https://yourhack.ai/remove-duplicate-lines): Free tool to remove duplicate lines from text. Delete repeated lines, keep unique lines only, with optional case-insensitive and trim matching. Private.
- [Remove Emojis from Text](https://yourhack.ai/remove-emojis): Free tool to remove emojis from text. Strip emoji, pictographs, symbols and hidden variation selectors instantly, leaving clean plain text. Runs in your browser.
- [Remove Extra Spaces](https://yourhack.ai/remove-extra-spaces): Free tool to remove extra spaces from text. Collapse repeated spaces and tabs to a single space and trim each line for clean, tidy text. Runs in your browser.
- [Remove Line Breaks](https://yourhack.ai/remove-line-breaks): Free tool to remove line breaks from text. Join broken lines into one paragraph or replace newlines with spaces or commas instantly. Runs in your browser.
- [Reverse Text](https://yourhack.ai/reverse-text): Free reverse text tool. Flip text backwards by characters, words or lines instantly. Create mirror-style strings and reversed messages, fully private.
- [Reverse Word Order](https://yourhack.ai/reverse-words): Free tool to reverse the order of words in text. Flip a sentence back to front while keeping each word intact, per line or all at once. Private in your browser.
- [ROT13 Encoder and Decoder](https://yourhack.ai/rot13-encoder): Free ROT13 encoder and decoder. Shift letters 13 places to hide or reveal text. ROT13 is its own inverse, so one button both encodes and decodes. Private.
- [Sentence Case Converter](https://yourhack.ai/sentence-case-converter): Free sentence case converter. Fix text that is in all caps or random casing by capitalizing the first letter of each sentence and lowercasing the rest. Private.
- [Sentence Counter](https://yourhack.ai/sentence-counter): Free online sentence counter. Count sentences, words and characters in any text as you type, with live results. Fully private and processed in your browser.
- [Slug Generator](https://yourhack.ai/slug-generator): Free URL slug generator. Turn any title into a clean, lowercase, hyphenated slug for SEO-friendly URLs. Handles accents and symbols. Runs privately.
- [Small Caps Text Generator](https://yourhack.ai/small-caps-text): Free small caps text generator. Turn lowercase letters into small capital Unicode characters for stylish bios, headings and posts. Copy and paste anywhere.
- [Sort Lines](https://yourhack.ai/sort-lines): Free online line sorter. Sort text lines alphabetically or numerically, ascending or descending, with reverse and shuffle options. Runs privately in browser.
- [Strikethrough Text Generator](https://yourhack.ai/strikethrough-text): Free strikethrough text generator. Add a line through your text using Unicode so it stays struck through when pasted into chats, bios and posts. Copy and paste.
- [Text Repeater](https://yourhack.ai/text-repeater): Free text repeater tool. Repeat any word, sentence or block of text as many times as you want, with a custom separator between copies. Runs privately.
- [Text Statistics and Readability](https://yourhack.ai/text-statistics): Free text statistics tool. Get word and sentence counts, average word length, reading time and a readability score for any passage. Fully private in browser.
- [Text to ASCII Art Generator](https://yourhack.ai/ascii-art-generator): Free text to ASCII art generator. Turn words into big figlet-style banner text made of characters for terminals, README files and comments. Private.
- [Text to Binary](https://yourhack.ai/text-to-binary): Free text to binary converter. Turn any words into 8-bit binary code, with a space between each byte for readability. Encode messages privately in browser.
- [Text to Handwriting](https://yourhack.ai/text-to-handwriting): Free text to handwriting tool. Turn typed text into a handwritten-style note on lined paper and download it as a PNG image. Adjustable ink and size. Private.
- [Title Case Converter](https://yourhack.ai/title-case-converter): Free title case converter. Capitalize headlines correctly by keeping minor words like a, an, the and of lowercase unless they start or end the title. Private.
- [Upside-Down Text Generator](https://yourhack.ai/upside-down-text): Free upside-down text generator. Flip your text so it reads inverted and reversed for fun social posts, usernames and messages. Copy and paste, private.
- [Whitespace and Trim Remover](https://yourhack.ai/whitespace-remover): Free whitespace remover. Trim leading and trailing spaces, collapse extra spaces, and strip blank lines from text in one click. Clean text privately.
- [Word & Character Counter](https://yourhack.ai/word-counter): Free word counter and character counter. Count words, characters, sentences, paragraphs and reading time as you type. 100% private.
- [Word Frequency Counter](https://yourhack.ai/word-frequency-counter): Free word frequency counter. Paste text and see which words appear most often, ranked by count, with optional stop-word filtering. Fully private.
- [Zalgo and Glitch Text Generator](https://yourhack.ai/zalgo-glitch-text): Free Zalgo glitch text generator. Add creepy, distorted combining marks to text at adjustable intensity for spooky posts and usernames. Copy and paste.

### Developer

- [.env to JSON](https://yourhack.ai/env-to-json): Free .env to JSON converter. Paste your dotenv KEY=VALUE lines and get a clean, pretty-printed JSON object. Comments and blank lines are ignored. Runs privately.
- [ASCII Table Reference](https://yourhack.ai/ascii-table): Free ASCII table reference. Browse all 128 ASCII characters with their decimal, hexadecimal, octal and binary values plus names for control characters.
- [Base32 Encode / Decode](https://yourhack.ai/base32-encoder): Free Base32 encoder and decoder. Convert text to standard RFC 4648 Base32 and decode it back. Handy for TOTP secrets, identifiers and case-insensitive tokens.
- [Base64 Encode / Decode](https://yourhack.ai/base64): Free Base64 encoder and decoder. Convert text to Base64 and decode Base64 back to text instantly in your browser. UTF-8 safe.
- [Binary to Text](https://yourhack.ai/binary-to-text): Free binary to text converter. Decode 8-bit binary into readable text and encode text back to binary. UTF-8 safe, tolerant of spaces between bytes.
- [Chmod Calculator](https://yourhack.ai/chmod-calculator): Free chmod calculator. Toggle read, write and execute permissions for owner, group and others to get the octal chmod number and symbolic notation instantly.
- [Color Hex to RGB](https://yourhack.ai/color-hex-rgb-dev): Free hex to RGB color converter for developers. Convert hex color codes to rgb() and back, with a live swatch preview and support for shorthand hex.
- [Cron Builder](https://yourhack.ai/cron-builder): Free visual cron builder. Pick minute, hour, day, month and weekday from dropdowns to generate a valid crontab expression with a live plain-English preview.
- [Cron Expression Parser](https://yourhack.ai/cron-parser): Free cron expression parser. Paste a cron schedule to get a plain-English explanation and the next upcoming run times, all computed in your browser.
- [CSS Box Shadow Generator](https://yourhack.ai/box-shadow-generator): Free CSS box-shadow generator. Adjust offset, blur, spread, color and inset with live sliders and preview, then copy the ready-to-use box-shadow rule. Private.
- [CSS Formatter](https://yourhack.ai/css-formatter): Free CSS formatter and beautifier. Expand minified CSS into clean, indented rules with one declaration per line so stylesheets are easy to read and edit.
- [CSS Minifier](https://yourhack.ai/css-minifier): Free CSS minifier. Strip comments, whitespace and newlines to shrink stylesheets for faster page loads. Shows how many bytes you saved. Runs in your browser.
- [CSS px to rem / em Converter](https://yourhack.ai/css-unit-converter): Free CSS unit converter. Convert px to rem and em, or rem and em back to px, with an adjustable root font size. Instant results, computed in your browser.
- [CSV to JSON](https://yourhack.ai/csv-to-json): Free CSV to JSON converter. Parse CSV with a header row into a clean array of JSON objects, handling quoted fields and embedded commas correctly.
- [gitignore Generator](https://yourhack.ai/gitignore-generator): Free gitignore generator. Select your languages, frameworks and tools to build a solid .gitignore file with sensible defaults, ready to copy into your repo.
- [Hash Generator (SHA-1 / SHA-256 / SHA-512)](https://yourhack.ai/hash-generator): Free hash generator. Create SHA-1, SHA-256 and SHA-512 hashes from any text instantly in your browser using the Web Crypto API.
- [Hex to Text](https://yourhack.ai/hex-to-text): Free hex to text converter. Decode hexadecimal byte sequences into readable text and encode text back to hex. UTF-8 safe, handles spaces and 0x prefixes.
- [HMAC Generator](https://yourhack.ai/hmac-generator): Free HMAC generator. Compute a keyed HMAC over any message with SHA-256, SHA-384 or SHA-512 using the Web Crypto API. Hex output, computed in your browser.
- [HTML Entity Encode / Decode](https://yourhack.ai/html-entity-encoder): Free HTML entity encoder and decoder. Convert characters like < > & " to safe HTML entities and back, so text renders literally instead of as markup.
- [HTML Formatter / Beautifier](https://yourhack.ai/html-formatter): Free HTML formatter and beautifier. Indent messy or minified HTML into clean, readable markup with proper nesting so you can scan structure at a glance.
- [HTML Table Generator](https://yourhack.ai/html-table-generator): Free HTML table generator. Choose rows and columns, toggle a header row, and get clean, ready-to-paste HTML table markup with a live preview. Runs privately.
- [HTML to Text](https://yourhack.ai/html-to-text): Free HTML to text converter. Strip tags and markup from HTML and get the clean plain text content, decoded and readable. All processing stays in your browser.
- [HTTP Status Codes Reference](https://yourhack.ai/http-status-codes): Free HTTP status codes reference. Search all standard HTTP response codes from 1xx to 5xx with their names and meanings. Filter instantly as you type.
- [JavaScript Minifier](https://yourhack.ai/js-minifier): Free lightweight JavaScript minifier. Remove comments and collapse whitespace to shrink JS for quick inline use. Preserves strings and reports bytes saved.
- [JS Formatter / Beautifier](https://yourhack.ai/js-formatter): Free JavaScript formatter and beautifier. Expand minified or one-line JS into readable, indented code with proper brace and block structure.
- [JSON Diff](https://yourhack.ai/json-diff): Free JSON diff tool. Compare two JSON objects and see added, removed and changed keys with their old and new values, computed entirely in your browser.
- [JSON Minifier](https://yourhack.ai/json-minifier): Free JSON minifier. Strip whitespace and newlines to compress JSON into the smallest valid payload for APIs, configs and bundles. Validates as it minifies.
- [JSON String Escape / Unescape](https://yourhack.ai/json-escape): Free JSON string escaper. Escape text into a safe JSON string literal, or unescape a JSON string back to raw text. Handles quotes, newlines and unicode. Private.
- [JSON to CSV](https://yourhack.ai/json-to-csv): Free JSON to CSV converter. Turn an array of JSON objects into a clean CSV file with headers, ready for Excel, Sheets or a database import.
- [JSON to YAML](https://yourhack.ai/json-to-yaml): Free JSON to YAML converter. Turn JSON config or API data into clean, readable YAML for Kubernetes, CI pipelines, Docker Compose and app config files.
- [JSON Validator](https://yourhack.ai/json-validator): Free JSON validator. Check if your JSON is valid, get the exact error location on failure, and see a pretty-printed version when it parses cleanly.
- [JWT Decoder](https://yourhack.ai/jwt-decoder): Free JWT decoder. Decode a JSON Web Token to inspect its header and payload claims instantly in your browser. Shows expiry in human-readable time.
- [JWT Generator (HS256)](https://yourhack.ai/jwt-generator): Free JWT generator. Build and sign a JSON Web Token from your payload and a secret using HS256 via the Web Crypto API. Pairs with the JWT decoder. Runs privately.
- [Meta Tags Generator](https://yourhack.ai/meta-tags-generator): Free meta tags generator. Enter your title, description and image to produce SEO, Open Graph and Twitter Card meta tags ready to paste into your page head. Private.
- [MIME Types Reference](https://yourhack.ai/mime-types): Free MIME types reference. Search common file extensions and their content-type values for setting HTTP headers, uploads and downloads. Filter instantly.
- [Number Base Converter](https://yourhack.ai/number-base-converter): Free number base converter. Convert between binary, octal, decimal and hexadecimal instantly. Type in any base and see all four representations update live.
- [Placeholder Photo URL Builder](https://yourhack.ai/picsum-url-builder): Free Lorem Picsum URL builder. Configure width, height, grayscale, blur and a seed to generate ready-to-use random placeholder photo URLs for mockups. Private.
- [Query String Parser](https://yourhack.ai/query-string-parser): Free query string parser. Paste a URL or query string and see every parameter and value in a clean table, with URL decoding and repeated keys handled. Private.
- [Regex Tester](https://yourhack.ai/regex-tester): Free regex tester. Test JavaScript regular expressions against sample text with live match highlighting, capture groups and flag toggles in your browser.
- [Robots.txt Generator](https://yourhack.ai/robots-txt-generator): Free robots.txt generator. Pick which crawlers to allow or block, add disallow paths, crawl delay and a sitemap URL, then copy a valid robots.txt file. Private.
- [ROT47 Encoder and Decoder](https://yourhack.ai/rot47-encoder): Free ROT47 encoder and decoder. Rotate printable ASCII by 47 positions to scramble text, including symbols and digits. Its own inverse, so one button does both.
- [Slugify (URL Slug Generator)](https://yourhack.ai/slugify): Free slugify tool. Turn any title or phrase into a clean URL-safe slug: lowercase, accents stripped, spaces and symbols collapsed into hyphens. Runs privately.
- [SQL Formatter](https://yourhack.ai/sql-formatter): Free SQL formatter and beautifier. Turn long, cramped queries into clean, indented SQL with keywords on their own lines so complex statements are readable.
- [SQL Minifier](https://yourhack.ai/sql-minifier): Free SQL minifier. Collapse a multi-line SQL query into a single compact line by stripping comments and extra whitespace. Great for logs and embedding. Private.
- [String Case Converter](https://yourhack.ai/string-case-converter): Free string case converter for code. Turn any text into camelCase, snake_case, kebab-case, PascalCase or CONSTANT_CASE at once. Live, private, in your browser.
- [String Length Calculator](https://yourhack.ai/string-length-calculator): Free string length calculator. Count characters, bytes in UTF-8, words and lines in any string, with and without spaces. Useful for limits and encoding. Private.
- [Subnet / CIDR Calculator](https://yourhack.ai/subnet-calculator): Free subnet and CIDR calculator. Enter an IP with a CIDR prefix to get the network address, broadcast, usable host range, subnet mask and total hosts.
- [Text Diff Checker](https://yourhack.ai/text-diff): Free text diff checker. Compare two blocks of text line by line and see exactly which lines were added, removed or unchanged, computed in your browser.
- [Unicode Escape / Unescape](https://yourhack.ai/unicode-escape): Free Unicode escape and unescape tool. Convert text to backslash-u escape sequences and back, ideal for embedding non-ASCII characters in JSON and source code.
- [Unix Timestamp Converter](https://yourhack.ai/timestamp-converter): Free Unix timestamp converter. Convert epoch timestamps to human-readable dates and dates back to Unix time. Supports seconds and milliseconds.
- [URL Encoder / Decoder](https://yourhack.ai/url-encoder): Free URL encoder and decoder. Percent-encode text for URLs or decode encoded URLs instantly. Handles query strings and special characters.
- [UUID Generator](https://yourhack.ai/uuid-generator): Free UUID generator. Instantly generate random v4 UUIDs (GUIDs), one or in bulk. Cryptographically random, copy with one click.
- [UUID v7 Generator](https://yourhack.ai/uuid-v7-generator): Free UUID v7 generator. Create time-ordered, sortable version-7 UUIDs in bulk. Great for database keys where insertion order and index locality matter. Private.
- [UUID Validator](https://yourhack.ai/uuid-validator): Free UUID validator. Paste a string to check whether it is a valid UUID and see which version (1 through 8) and variant it uses. Instant, private, in your browser.
- [XML Formatter](https://yourhack.ai/xml-formatter): Free XML formatter and beautifier. Pretty-print messy or minified XML with clean indentation so nested elements and attributes are easy to read.
- [YAML Formatter](https://yourhack.ai/yaml-formatter): Free YAML formatter. Normalize indentation and re-serialize your YAML into clean two-space output by round-tripping it through a parser. Catches errors too.
- [YAML to JSON](https://yourhack.ai/yaml-to-json): Free YAML to JSON converter. Parse YAML config into clean JSON for APIs, tooling and validation. Handles nested maps, lists, comments and scalars.

### Calculators

- [401k Calculator](https://yourhack.ai/401k-calculator): Free 401k calculator. Project your retirement balance from your salary, contribution percent, employer match and expected return over the years to retirement.
- [Age Calculator](https://yourhack.ai/age-calculator): Free age calculator. Find your exact age in years, months and days from your date of birth, plus total days, hours and your next birthday.
- [APR Calculator](https://yourhack.ai/apr-calculator): Free APR calculator. Include upfront fees in a loan to find the true annual percentage rate, so you can compare offers on an equal, honest basis.
- [Average / Mean Calculator](https://yourhack.ai/average-calculator): Free average calculator. Enter a list of numbers to get the mean, median, mode, range, sum and count instantly, separated by commas or spaces.
- [BMI Calculator](https://yourhack.ai/bmi-calculator): Free BMI calculator. Calculate your Body Mass Index in metric or imperial units and see your weight category instantly. Private, no sign-up.
- [BMR Calculator](https://yourhack.ai/bmr-calculator): Free BMR calculator. Estimate your basal metabolic rate, the calories your body burns at complete rest, using the accurate Mifflin-St Jeor equation.
- [Body Fat Percentage Calculator](https://yourhack.ai/body-fat-calculator): Free body fat calculator using the US Navy method. Estimate body fat percentage from simple tape measurements of neck, waist and hips instantly.
- [Break-Even Calculator](https://yourhack.ai/break-even-calculator): Free break-even calculator. Enter fixed costs, price per unit and variable cost per unit to find the break-even units and the revenue needed to cover costs.
- [CAGR Calculator](https://yourhack.ai/cagr-calculator): Free CAGR calculator. Enter a start value, end value and number of years to get the compound annual growth rate as a clean percentage instantly.
- [Calorie / TDEE Calculator](https://yourhack.ai/tdee-calculator): Free TDEE and calorie calculator. Estimate your daily calorie needs from BMR and activity level, plus targets for cutting, maintaining or bulking.
- [Calories Burned Calculator](https://yourhack.ai/calories-burned-calculator): Free calories burned calculator. Estimate calories burned during an activity from your body weight, duration and the activity MET value, computed instantly.
- [Car / Auto Loan Calculator](https://yourhack.ai/auto-loan-calculator): Free car loan calculator. Estimate your monthly auto payment from the vehicle price, down payment, trade-in, interest rate and loan term instantly.
- [Car Affordability Calculator](https://yourhack.ai/car-affordability-calculator): Free car affordability calculator. Enter a monthly payment budget, loan rate, term and down payment to find the maximum car price you can afford.
- [Compound Interest Calculator](https://yourhack.ai/compound-interest-calculator): Free compound interest calculator. See how savings grow with regular contributions, compounding frequency, rate and time, plus interest earned instantly.
- [Countdown Timer to a Date](https://yourhack.ai/countdown-timer): Free live countdown timer. Count down to any future date and time and watch the days, hours, minutes and seconds tick down in real time in your browser.
- [Credit Card Payoff Calculator](https://yourhack.ai/credit-card-payoff-calculator): Free credit card payoff calculator. See how long a card takes to clear at a fixed payment, the interest cost, and how a bigger payment saves you money.
- [Cumulative GPA Calculator](https://yourhack.ai/cumulative-gpa-calculator): Free cumulative GPA calculator. Combine your previous GPA and total credits with this term to find your new overall cumulative grade point average.
- [Date Difference Calculator](https://yourhack.ai/date-difference-calculator): Free date difference calculator. Count the days, weeks, months and years between two dates, with or without including the end date, instantly.
- [Debt Payoff Calculator](https://yourhack.ai/debt-payoff-calculator): Free debt payoff calculator. See how many months to clear a balance at a fixed monthly payment, the total interest paid and the true payoff time.
- [Debt-to-Income (DTI) Calculator](https://yourhack.ai/debt-to-income-calculator): Free debt-to-income ratio calculator. Enter your monthly debt payments and gross monthly income to get your DTI percent and a lender-style rating.
- [Discount / Sale Price Calculator](https://yourhack.ai/discount-calculator): Free discount calculator. Enter an original price and a percent off to see the sale price and exactly how much money you save. Supports stacked discounts.
- [Dividend Yield Calculator](https://yourhack.ai/dividend-yield-calculator): Free dividend yield calculator. Enter the annual dividend per share and share price to get the yield percent, plus optional shares for annual income.
- [Down Payment Calculator](https://yourhack.ai/down-payment-calculator): Free down payment calculator. Find your down payment amount and loan needed from a home price and percent down, or work backwards from savings you have.
- [Electricity Cost Calculator](https://yourhack.ai/electricity-cost-calculator): Free electricity cost calculator. Work out what an appliance costs to run per hour, day, month and year from its wattage, usage and your price per kWh.
- [Emergency Fund Calculator](https://yourhack.ai/emergency-fund-calculator): Free emergency fund calculator. Enter your monthly essential expenses, months of coverage and current savings to get your target fund and remaining gap.
- [Final Grade Calculator](https://yourhack.ai/final-grade-calculator): Free final grade calculator. Find out exactly what score you need on your final exam to reach the overall course grade you are aiming for.
- [Fraction Calculator](https://yourhack.ai/fraction-calculator): Free fraction calculator. Add, subtract, multiply or divide two fractions and get the answer reduced to lowest terms plus a decimal value instantly.
- [Freelance Hourly Rate Calculator](https://yourhack.ai/freelance-rate-calculator): Free freelance rate calculator. Turn your target income, billable hours, expenses and tax rate into the hourly rate you need to charge to hit your goal.
- [Gas / Fuel Cost Calculator](https://yourhack.ai/gas-cost-calculator): Free gas cost calculator. Estimate the fuel cost of a trip from distance, your vehicle fuel economy and the price you pay, plus cost per person.
- [GCD / LCM Calculator](https://yourhack.ai/gcd-lcm-calculator): Free GCD and LCM calculator. Find the greatest common divisor and least common multiple of two or more integers using the Euclidean algorithm instantly.
- [GPA Calculator](https://yourhack.ai/gpa-calculator): Free GPA calculator. Enter each course grade and its credit hours to compute your grade point average on the standard 4.0 scale, with total credits shown.
- [Ideal Weight Calculator](https://yourhack.ai/ideal-weight-calculator): Free ideal weight calculator. Estimate a healthy target weight from your height and sex using the Devine, Robinson and Hamwi formulas plus a BMI range.
- [Investment / Savings Calculator](https://yourhack.ai/investment-calculator): Free investment and savings calculator. Project the future value of an initial deposit plus recurring contributions at a given annual return over time.
- [Loan / EMI Calculator](https://yourhack.ai/loan-calculator): Free loan and EMI calculator. Calculate your monthly payment, total interest and total repayment for any loan amount, rate and term instantly.
- [Macro Calculator](https://yourhack.ai/macro-calculator): Free macro calculator. Split your daily calories into grams of protein, carbs and fat for cutting, maintenance or bulking using your chosen ratio.
- [Markup / Margin Calculator](https://yourhack.ai/margin-calculator): Free markup and margin calculator. From cost and price get profit, markup percent and gross margin percent, and see how the two differ clearly.
- [Mortgage Calculator](https://yourhack.ai/mortgage-calculator): Free mortgage calculator with amortization schedule. Estimate your monthly home loan payment, total interest and payoff over the full term in seconds.
- [Mortgage Payoff Calculator](https://yourhack.ai/mortgage-payoff-calculator): Free mortgage payoff calculator. See how many months to clear your balance with extra payments, the total interest, and interest saved versus no extra.
- [Net Worth Calculator](https://yourhack.ai/net-worth-calculator): Free net worth calculator. Add up your assets and subtract your liabilities to see your total net worth, with a clear assets versus debts breakdown.
- [One Rep Max Calculator](https://yourhack.ai/one-rep-max-calculator): Free one rep max calculator. Estimate your 1RM from a weight and reps using the Epley and Brzycki formulas, plus a full percentage training chart.
- [Overtime Pay Calculator](https://yourhack.ai/overtime-pay-calculator): Free overtime pay calculator. Work out your total pay from regular and overtime hours at any overtime multiplier such as time-and-a-half or double time.
- [Paycheck / Take-Home Pay Calculator](https://yourhack.ai/paycheck-calculator): Free take-home pay calculator. Estimate net pay per period after taxes and deductions using your own editable tax rate. No live tax lookup, fully private.
- [Percentage Calculator](https://yourhack.ai/percentage-calculator): Free percentage calculator. Work out what X% of Y is, what percent one number is of another, and percentage increase or decrease instantly.
- [Percentage Change Calculator](https://yourhack.ai/percentage-change-calculator): Free percentage change calculator. Find the percent increase or decrease between two numbers and the absolute difference, with the direction shown.
- [Pregnancy Due Date Calculator](https://yourhack.ai/pregnancy-due-date-calculator): Free pregnancy due date calculator. Estimate your due date from your last menstrual period using Naegele rule, plus current week and trimester.
- [Profit Margin Calculator](https://yourhack.ai/profit-margin-calculator): Free profit margin calculator. Enter your cost and selling price to get profit, gross margin percent and markup percent, with the difference made clear.
- [Quadratic Equation Solver](https://yourhack.ai/quadratic-equation-solver): Free quadratic equation solver. Enter a, b and c to solve ax squared plus bx plus c equals zero, with real or complex roots and the discriminant.
- [Ratio Calculator](https://yourhack.ai/ratio-calculator): Free ratio calculator. Simplify a ratio to its lowest terms and solve proportions by finding the missing value in an equivalent ratio instantly.
- [Refinance Calculator](https://yourhack.ai/refinance-calculator): Free refinance calculator. Compare your current loan payment against a new rate and term to see monthly savings, break-even point and lifetime interest.
- [Rent vs Buy Calculator](https://yourhack.ai/rent-vs-buy-calculator): Free rent vs buy calculator. Compare the total cost of renting against buying a home over a set number of years to see which comes out cheaper.
- [Retirement Calculator](https://yourhack.ai/retirement-calculator): Free retirement calculator. Estimate your nest egg at retirement from your current savings, monthly contributions, expected return and years remaining.
- [ROI Calculator](https://yourhack.ai/roi-calculator): Free ROI calculator. Measure return on investment as a percentage and net profit from an initial cost and final value, with optional annualized ROI.
- [Rule of 72 Calculator](https://yourhack.ai/rule-of-72-calculator): Free Rule of 72 calculator. Enter an annual return rate to estimate how many years it takes your money to double, or find the rate to double by a target.
- [Running Pace Calculator](https://yourhack.ai/running-pace-calculator): Free running pace calculator. Enter any two of distance, time and pace and it solves the third, for miles or kilometers, with a finish time projection.
- [Salary Calculator](https://yourhack.ai/salary-calculator): Free salary calculator. Convert an hourly wage into weekly, monthly and annual pay, or go from a yearly salary back to an hourly rate instantly.
- [Sales Tax Calculator](https://yourhack.ai/sales-tax-calculator): Free sales tax calculator. Add sales tax to a price or work backwards from a tax-inclusive total to find the net amount and the tax portion.
- [Savings Goal Calculator](https://yourhack.ai/savings-goal-calculator): Free savings goal calculator. Enter your target, current savings, monthly contribution and optional return to find how many months to reach your goal.
- [Scientific Calculator](https://yourhack.ai/scientific-calculator): Free online scientific calculator. Evaluate expressions with trig, logarithms, exponents, square roots, pi and e, plus parentheses, all in your browser.
- [Simple Interest Calculator](https://yourhack.ai/simple-interest-calculator): Free simple interest calculator. Compute interest and final balance from principal, annual rate and time using the classic I = P x r x t formula.
- [Square Root Calculator](https://yourhack.ai/square-root-calculator): Free square root calculator. Find the square root of any number to high precision, plus the cube root, square and whether it is a perfect square.
- [Standard Deviation Calculator](https://yourhack.ai/standard-deviation-calculator): Free standard deviation calculator. Get population and sample standard deviation, variance, mean and count from a list of numbers, computed instantly.
- [Test Grade / Percentage Calculator](https://yourhack.ai/test-grade-calculator): Free test grade calculator. Enter the number of questions and how many were wrong or right to get your percentage score and letter grade instantly.
- [Time Card Calculator](https://yourhack.ai/time-card-calculator): Free time card calculator. Add up daily clock-in and clock-out times minus breaks to get total hours worked for the week, plus estimated gross pay.
- [Time Zone Converter](https://yourhack.ai/timezone-converter): Free time zone converter. Convert a date and time from one time zone to another using your browser, with common cities and live daylight saving handling.
- [Tip Calculator](https://yourhack.ai/tip-calculator): Free tip calculator. Calculate the tip and split the bill between any number of people. Choose a tip percentage and see per-person totals instantly.
- [VAT Calculator](https://yourhack.ai/vat-calculator): Free VAT calculator. Add VAT to a net price or remove VAT from a gross price to find the net amount and the VAT portion at any rate you enter.
- [Water Intake Calculator](https://yourhack.ai/water-intake-calculator): Free water intake calculator. Estimate how much water to drink per day based on your body weight and exercise, shown in liters, ounces and cups.
- [Weighted Grade Calculator](https://yourhack.ai/weighted-grade-calculator): Free weighted grade calculator. Combine assignments, quizzes and exams with their own weights to find your overall course grade, computed instantly.

### Random & Fun

- [Bingo Card Generator](https://yourhack.ai/bingo-card-generator): Free bingo card generator. Create a random 5x5 bingo card with a free center space, ready to print or play on screen. Classic B-I-N-G-O number layout.
- [Cat Age Calculator](https://yourhack.ai/cat-age-calculator): Free cat age calculator. Convert your cat age into human years with a realistic feline formula. Discover how old your cat really is in human terms.
- [Coin Flip](https://yourhack.ai/coin-flip): Free online coin flip. Flip a virtual coin for a fair heads or tails result. Great for quick decisions, games and settling disputes.
- [Decision Maker](https://yourhack.ai/decision-maker): Free decision maker tool. List your options and let it pick one at random to break analysis paralysis. Fast, fair and private for any tough choice.
- [Dice Roller](https://yourhack.ai/dice-roller): Free online dice roller. Roll one or many dice (d4, d6, d8, d10, d12, d20 and more) with fair, random results for games and D&D.
- [DnD Dice Roller](https://yourhack.ai/dnd-dice-roller): Free polyhedral DnD dice roller for d4, d6, d8, d10, d12, d20 and d100. Roll multiple dice with a modifier and see each result plus the total.
- [Dog Age Calculator](https://yourhack.ai/dog-age-calculator): Free dog age calculator. Convert your dog age into human years using a realistic size-based formula. Find out how old your pup really is in human terms.
- [Love Calculator](https://yourhack.ai/love-calculator): Free fun love compatibility calculator. Enter two names for a playful match percentage. Just for laughs, not real science. A lighthearted crush test.
- [Magic 8-Ball](https://yourhack.ai/magic-8-ball): Free online Magic 8-Ball. Ask a yes or no question, shake the ball, and get one of the classic fortune-telling answers. A fun way to make a decision.
- [Multiple Coin Flip](https://yourhack.ai/coin-flip-multiple): Free multiple coin flip tool. Flip many coins at once and see the full results plus heads and tails totals. Perfect for probability demos and experiments.
- [Never Have I Ever](https://yourhack.ai/never-have-i-ever): Free Never Have I Ever prompt generator. Get random, party-friendly statements to play the classic game with friends. Clean and fun for groups of any size. Private.
- [Password Generator](https://yourhack.ai/password-generator): Free secure password generator. Create strong, random passwords with custom length, symbols, numbers and cases. Cryptographically random, private.
- [Random Band Name Generator](https://yourhack.ai/random-band-name-generator): Free random band name generator. Spin up quirky, memorable band names by combining random adjectives and nouns across genres. Great for musicians and fun. Private.
- [Random Color Palette Generator](https://yourhack.ai/random-color-palette): Free random color palette generator. Spin up a fresh set of harmonious colors with hex codes you can copy. Perfect for design inspiration and mood boards. Private.
- [Random Country Picker](https://yourhack.ai/random-country-picker): Free random country picker. Get a random country from around the world with its flag. Great for travel inspiration, geography quizzes and trivia games.
- [Random Date Generator](https://yourhack.ai/random-date-generator): Free random date generator. Pick a random calendar date between any two dates you set. Useful for testing, sampling, writing prompts and games.
- [Random Drawing Prompt Generator](https://yourhack.ai/random-drawing-prompt): Free random drawing prompt generator. Get a creative subject to sketch or paint, combining a character, action and setting to beat artist block. Fun and private.
- [Random Emoji Picker](https://yourhack.ai/random-emoji-picker): Free random emoji picker. Generate a random emoji or a batch of them with one click, then copy to your clipboard. Fun for messages, games and prompts.
- [Random Fact Generator](https://yourhack.ai/random-fact-generator): Free random fact generator. Tap for a surprising, bite-sized fact to spark curiosity or start a conversation. A fun grab bag of trivia from a curated list. Private.
- [Random Group Generator](https://yourhack.ai/random-group-generator): Free random group generator. Split a list of names into groups of a chosen size, shuffled fairly. Ideal for breakout rooms, pairs and study groups.
- [Random Letter Generator](https://yourhack.ai/random-letter-generator): Free random letter generator. Get one or more random letters of the alphabet, in upper or lower case. Great for word games, drills and quick challenges.
- [Random Movie Picker](https://yourhack.ai/random-movie-picker): Free random movie picker. Add the films on your watchlist and let the tool choose one for you, ending the endless scroll and the what-should-we-watch debate. Private.
- [Random Name Picker](https://yourhack.ai/random-name-picker): Free animated random name picker. Paste a list of names and let the picker shuffle and land on one lucky winner. Great for giveaways, draws and classrooms.
- [Random Number & Name Picker](https://yourhack.ai/random-picker): Free random picker. Generate a random number in any range, or pick a random winner from a list of names. Fair, unbiased, and private.
- [Random Passphrase Generator](https://yourhack.ai/random-passphrase-generator): Free random passphrase generator. Build memorable, strong passphrases from random common words, with adjustable word count and separators. Cryptographically random.
- [Random Recipe Idea Generator](https://yourhack.ai/random-recipe-idea): Free random recipe idea generator. Get a spontaneous meal concept combining a cooking style, protein and flavor to beat dinner indecision. Fun and private in browser.
- [Random Scenario Generator](https://yourhack.ai/random-scenario-generator): Free random scenario generator. Get imaginative what-if situations for writing prompts, role play, improv and conversation. Sparks creativity instantly. Private.
- [Random Trivia Question](https://yourhack.ai/trivia-question-generator): Free random trivia question generator. Get a quiz question, reveal the answer when ready, and test your general knowledge solo or with friends. Runs privately.
- [Random US State Picker](https://yourhack.ai/random-us-state-picker): Free random US state picker. Get a random American state with its capital and abbreviation. Handy for road trip ideas, geography quizzes and trivia.
- [Rock Paper Scissors](https://yourhack.ai/rock-paper-scissors): Play rock paper scissors against the computer online. Pick your throw, see the random computer choice, and track your wins, losses and draws.
- [Sleep Cycle Calculator](https://yourhack.ai/sleep-cycle-calculator): Free sleep cycle calculator. Find the best times to go to bed or wake up based on 90-minute sleep cycles so you wake up refreshed, not groggy.
- [Spinner Wheel](https://yourhack.ai/spinner-wheel): Free spinner wheel and wheel of names. Add your own entries, hit spin, and watch the animated wheel land on a random winner. Perfect for raffles and picks.
- [Team Generator](https://yourhack.ai/team-generator): Free random team generator. Paste a list of names and split them into balanced teams instantly. Great for sports, classrooms, group projects and games.
- [This or That](https://yourhack.ai/this-or-that): Free This or That prompt generator. Get random either-or preference questions to spark conversation and get to know people. Fun for icebreakers and parties.
- [Truth or Dare](https://yourhack.ai/truth-or-dare): Free online Truth or Dare generator. Get random truth questions and fun dares for parties and game nights. Clean, playful prompts for friends and groups.
- [Two Truths and a Lie Prompt](https://yourhack.ai/two-truths-and-a-lie): Free Two Truths and a Lie idea generator. Get random themes and starter prompts to help you invent statements for this classic icebreaker game. Fun for groups. Private.
- [Would You Rather](https://yourhack.ai/would-you-rather): Free Would You Rather generator. Get random, thought-provoking either-or questions for parties, road trips and icebreakers. Fun for groups of any size.
- [Yes or No Wheel](https://yourhack.ai/yes-or-no-wheel): Free yes or no wheel. Spin for an instant random yes or no answer to settle any question. Simple, fair and fun for quick decisions and dares.
- [Zodiac Sign Calculator](https://yourhack.ai/zodiac-sign-calculator): Free zodiac sign calculator. Enter your birth date to find your astrological star sign, its element and date range. Quick, simple and private.

### Converters

- [Acres to Hectares Converter](https://yourhack.ai/acres-to-hectares): Free acres to hectares converter. Convert acres to hectares instantly (1 acre = 0.404686 hectares). Live result as you type, no sign-up, private.
- [Angle Converter](https://yourhack.ai/angle-converter): Free angle converter. Convert between degrees, radians, gradians, arcminutes, arcseconds, and full turns instantly with exact factors, live as you type.
- [Area Converter](https://yourhack.ai/area-converter): Free area converter. Convert between square meters, square feet, square kilometers, acres, hectares, square miles, and more instantly as you type.
- [Bar to PSI Converter](https://yourhack.ai/bar-to-psi): Free bar to psi converter. Convert bar to pounds per square inch instantly (1 bar = 14.5038 psi). Live result as you type, no sign-up, private.
- [Binary to Decimal Converter](https://yourhack.ai/binary-to-decimal): Free binary to decimal converter. Convert binary numbers to decimal instantly with input validation, updating live as you type. No sign-up, private.
- [Bits to Bytes Converter](https://yourhack.ai/bits-to-bytes): Free bits to bytes converter. Convert bits to bytes instantly using the exact ratio (1 byte = 8 bits). Live result in your browser as you type.
- [Bytes to KB Converter](https://yourhack.ai/bytes-to-kb): Free bytes to KB converter. Convert bytes to kilobytes instantly using decimal units (1 KB = 1000 bytes). Live result as you type, no sign-up, private.
- [Celsius to Fahrenheit Converter](https://yourhack.ai/celsius-to-fahrenheit): Free Celsius to Fahrenheit converter. Convert C to F instantly using the correct formula (F = C x 9/5 + 32). Live result as you type, no sign-up.
- [Celsius to Kelvin Converter](https://yourhack.ai/celsius-to-kelvin): Free Celsius to Kelvin converter. Convert C to K instantly using the exact offset (K = C + 273.15). Live result as you type, no sign-up, private.
- [Celsius to Rankine Converter](https://yourhack.ai/celsius-to-rankine): Free Celsius to Rankine converter. Convert C to Rankine instantly using the correct formula (R = C x 1.8 + 491.67). Live result in your browser as you type.
- [CM to Inches Converter](https://yourhack.ai/cm-to-inches): Free cm to inches converter. Convert centimeters to inches instantly using the exact factor (1 inch = 2.54 cm). Live result as you type, no sign-up.
- [Cooking / Recipe Converter](https://yourhack.ai/cooking-converter): Free cooking measurement converter. Convert between cups, tablespoons, teaspoons, fluid ounces, and milliliters for recipes instantly as you type.
- [Cups to ML Converter](https://yourhack.ai/cups-to-ml): Free cups to ml converter. Convert US cups to milliliters instantly using the exact factor (1 cup = 236.5882365 mL). Live result as you type, private.
- [Data Storage Converter](https://yourhack.ai/data-storage-converter): Free digital storage converter. Convert between bytes, KB, MB, GB, TB, and PB using decimal (1000) or binary (1024) units, live as you type.
- [Decimal to Binary Converter](https://yourhack.ai/decimal-to-binary): Free decimal to binary converter. Convert decimal numbers to binary instantly with input validation, updating live as you type. No sign-up, private.
- [Degrees to Radians Converter](https://yourhack.ai/degrees-to-radians): Free degrees to radians converter. Convert degrees to radians instantly using the exact factor (pi/180). Live result in your browser as you type.
- [Energy Converter](https://yourhack.ai/energy-converter): Free energy converter. Convert between joules, kilojoules, calories, kilocalories, watt-hours, kilowatt-hours, and BTU instantly as you type.
- [Fahrenheit to Celsius Converter](https://yourhack.ai/fahrenheit-to-celsius): Free Fahrenheit to Celsius converter. Convert F to C instantly using the correct formula (C = (F - 32) x 5/9). Live result as you type, private.
- [Fahrenheit to Kelvin Converter](https://yourhack.ai/fahrenheit-to-kelvin): Free Fahrenheit to Kelvin converter. Convert F to K instantly using the correct formula (K = (F - 32) x 5/9 + 273.15). Live result in your browser as you type.
- [Feet to CM Converter](https://yourhack.ai/feet-to-cm): Free feet to cm converter. Convert feet to centimeters instantly using the exact factor (1 ft = 30.48 cm). Live result as you type, no sign-up.
- [Fluid Ounces to ML Converter](https://yourhack.ai/fl-oz-to-ml): Free fl oz to ml converter. Convert US fluid ounces to milliliters instantly (1 fl oz = 29.5735 mL). Live result as you type, no sign-up, private.
- [Frequency Converter](https://yourhack.ai/frequency-converter): Free frequency converter. Convert between hertz, kilohertz, megahertz, gigahertz, and RPM instantly with exact factors, updating live as you type.
- [Fuel Economy Converter](https://yourhack.ai/fuel-economy-converter): Free fuel economy converter. Convert between miles per gallon (US and UK) and liters per 100 km using the correct reciprocal formula, live as you type.
- [Gallons to Cups Converter](https://yourhack.ai/gallons-to-cups): Free gallons to cups converter. Convert US gallons to cups instantly using the exact ratio (1 gallon = 16 cups). Live result in your browser as you type.
- [Gallons to Liters Converter](https://yourhack.ai/gallons-to-liters): Free gallons to liters converter. Convert US gallons to liters instantly (1 US gallon = 3.785411784 L). Live result as you type, no sign-up, private.
- [GB to MB Converter](https://yourhack.ai/gb-to-mb): Free GB to MB converter. Convert gigabytes to megabytes instantly using decimal units (1 GB = 1000 MB). Live result as you type, no sign-up, private.
- [GB to TB Converter](https://yourhack.ai/gb-to-tb): Free GB to TB converter. Convert gigabytes to terabytes instantly using decimal units (1 TB = 1000 GB). Live result as you type, no sign-up, private.
- [Grams to Ounces Converter](https://yourhack.ai/grams-to-ounces): Free grams to ounces converter. Convert grams to ounces instantly using the exact factor (1 oz = 28.3495 g). Live result as you type, no sign-up.
- [Hectares to Acres Converter](https://yourhack.ai/hectares-to-acres): Free hectares to acres converter. Convert hectares to acres instantly (1 hectare = 2.47105 acres). Live result as you type, no sign-up, private.
- [Hex to Decimal Converter](https://yourhack.ai/hex-to-decimal): Free hex to decimal converter. Convert hexadecimal numbers to decimal instantly with input validation, updating live as you type. No sign-up, private.
- [Horsepower to Watts Converter](https://yourhack.ai/horsepower-to-watts): Free horsepower to watts converter. Convert mechanical horsepower to watts instantly (1 hp = 745.7 W). Live result as you type, no sign-up, private.
- [Inches to CM Converter](https://yourhack.ai/inches-to-cm): Free inches to cm converter. Convert inches to centimeters instantly using the exact factor (1 inch = 2.54 cm). Live result as you type, private.
- [KB to MB Converter](https://yourhack.ai/kb-to-mb): Free KB to MB converter. Convert kilobytes to megabytes instantly using decimal units (1 MB = 1000 KB). Live result as you type, no sign-up, private.
- [KG to LBS Converter](https://yourhack.ai/kg-to-lbs): Free kg to lbs converter. Convert kilograms to pounds instantly using the exact factor (1 kg = 2.2046226218 lb). Live result as you type, no sign-up.
- [KG to Stone Converter](https://yourhack.ai/kg-to-stone): Free kg to stone converter. Convert kilograms to stone instantly using the exact factor (1 stone = 6.35029318 kg). Live result in your browser as you type.
- [KM to Miles Converter](https://yourhack.ai/km-to-miles): Free km to miles converter. Convert kilometers to miles instantly using the exact factor (1 km = 0.6213711922 mi). Live result as you type, private.
- [Knots to MPH Converter](https://yourhack.ai/knots-to-mph): Free knots to mph converter. Convert knots to miles per hour instantly (1 knot = 1.15078 mph). Live result as you type, no sign-up, private.
- [KPH to MPH Converter](https://yourhack.ai/kph-to-mph): Free kph to mph converter. Convert kilometers per hour to miles per hour instantly (1 mph = 1.609344 km/h). Live result as you type, no sign-up.
- [LBS to KG Converter](https://yourhack.ai/lbs-to-kg): Free lbs to kg converter. Convert pounds to kilograms instantly using the exact factor (1 lb = 0.45359237 kg). Live result as you type, private.
- [LBS to Stone Converter](https://yourhack.ai/lbs-to-stone): Free lbs to stone converter. Convert pounds to stone instantly using the exact factor (1 stone = 14 lb). Live result as you type, no sign-up, private.
- [Length Converter](https://yourhack.ai/length-converter): Free length and distance converter. Convert between millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles instantly as you type.
- [Liters to Gallons Converter](https://yourhack.ai/liters-to-gallons): Free liters to gallons converter. Convert liters to US gallons instantly (1 US gallon = 3.785411784 L). Live result as you type, no sign-up, private.
- [MB to GB Converter](https://yourhack.ai/mb-to-gb): Free MB to GB converter. Convert megabytes to gigabytes instantly using decimal units (1 GB = 1000 MB). Live result as you type, no sign-up, private.
- [Megabits to Megabytes Converter](https://yourhack.ai/megabits-to-megabytes): Free megabits to megabytes converter. Convert Mbps to MB per second instantly (8 bits = 1 byte). Live result in your browser as you type.
- [Meters to Feet Converter](https://yourhack.ai/meters-to-feet): Free meters to feet converter. Convert meters to feet instantly using the exact factor (1 m = 3.280839895 ft). Live result as you type, private.
- [Miles to Feet Converter](https://yourhack.ai/miles-to-feet): Free miles to feet converter. Convert miles to feet instantly using the exact ratio (1 mile = 5280 feet). Live result in your browser as you type.
- [Miles to KM Converter](https://yourhack.ai/miles-to-km): Free miles to km converter. Convert miles to kilometers instantly using the exact factor (1 mile = 1.609344 km). Live result as you type, no sign-up.
- [ML to Cups Converter](https://yourhack.ai/ml-to-cups): Free ml to cups converter. Convert milliliters to US cups instantly using the exact factor (1 cup = 236.5882365 mL). Live result as you type, no sign-up.
- [ML to OZ Converter](https://yourhack.ai/ml-to-oz): Free ml to oz converter. Convert milliliters to US fluid ounces instantly (1 fl oz = 29.5735 mL). Live result as you type, no sign-up, private.
- [MM to Inches Converter](https://yourhack.ai/mm-to-inches): Free mm to inches converter. Convert millimeters to inches instantly using the exact factor (1 inch = 25.4 mm). Live result as you type, private.
- [MPH to KPH Converter](https://yourhack.ai/mph-to-kph): Free mph to kph converter. Convert miles per hour to kilometers per hour instantly (1 mph = 1.609344 km/h). Live result as you type, private.
- [Ounces to Grams Converter](https://yourhack.ai/ounces-to-grams): Free ounces to grams converter. Convert ounces to grams instantly using the exact factor (1 oz = 28.349523125 g). Live result in your browser as you type.
- [OZ to Grams Converter](https://yourhack.ai/oz-to-grams): Free oz to grams converter. Convert ounces to grams instantly using the exact factor (1 oz = 28.349523125 g). Live result as you type, no sign-up.
- [Pascal to PSI Converter](https://yourhack.ai/pascal-to-psi): Free pascal to psi converter. Convert pascals to pounds per square inch instantly (1 psi = 6894.76 Pa). Live result as you type, no sign-up, private.
- [Pints to Milliliters Converter](https://yourhack.ai/pints-to-milliliters): Free pints to milliliters converter. Convert US pints to mL instantly using the exact factor (1 pint = 473.176473 mL). Live result in your browser as you type.
- [Pounds to KG Converter](https://yourhack.ai/pounds-to-kg): Free pounds to kg converter. Convert pounds to kilograms instantly using the exact factor (1 lb = 0.45359237 kg). Live result as you type, no sign-up.
- [Pounds to Tons Converter](https://yourhack.ai/pounds-to-tons): Free pounds to tons converter. Convert pounds to US short tons instantly using the exact factor (1 ton = 2000 lb). Live result in your browser as you type.
- [Power Converter](https://yourhack.ai/power-converter): Free power converter. Convert between watts, kilowatts, megawatts, horsepower (metric and mechanical), and BTU per hour instantly as you type.
- [Pressure Converter](https://yourhack.ai/pressure-converter): Free pressure converter. Convert between pascals, kilopascals, bar, psi, atmospheres, mmHg, and torr instantly with exact factors, live as you type.
- [PSI to Bar Converter](https://yourhack.ai/psi-to-bar): Free psi to bar converter. Convert pounds per square inch to bar instantly (1 bar = 14.5038 psi). Live result as you type, no sign-up, private.
- [Quarts to Liters Converter](https://yourhack.ai/quarts-to-liters): Free quarts to liters converter. Convert US quarts to liters instantly using the exact factor (1 quart = 0.946352946 L). Live result in your browser as you type.
- [Radians to Degrees Converter](https://yourhack.ai/radians-to-degrees): Free radians to degrees converter. Convert radians to degrees instantly using the exact factor (180/pi). Live result in your browser as you type.
- [Roman Numeral Converter](https://yourhack.ai/roman-numeral-converter): Free Roman numeral converter. Convert numbers to Roman numerals and Roman numerals back to numbers instantly, both directions, live as you type.
- [Shoe Size Converter](https://yourhack.ai/shoe-size-converter): Free shoe size converter. Convert US, UK, EU, and centimeter shoe sizes for men and women using standard sizing tables, updating live as you type.
- [Speed Converter](https://yourhack.ai/speed-converter): Free speed converter. Convert between meters per second, km/h, mph, knots, and feet per second instantly with exact factors, updating live as you type.
- [Square Feet to Square Meters Converter](https://yourhack.ai/sq-feet-to-sq-meters): Free square feet to square meters converter. Convert ft2 to m2 instantly (1 ft2 = 0.092903 m2). Live result as you type, no sign-up, private.
- [Square Meters to Square Feet Converter](https://yourhack.ai/sq-meters-to-sq-feet): Free square meters to square feet converter. Convert m2 to ft2 instantly (1 m2 = 10.7639 ft2). Live result as you type, no sign-up, private.
- [Stone to KG Converter](https://yourhack.ai/stone-to-kg): Free stone to kg converter. Convert stone to kilograms instantly using the exact factor (1 stone = 6.35029318 kg). Live result as you type, private.
- [Stone to LBS Converter](https://yourhack.ai/stone-to-lbs): Free stone to lbs converter. Convert stone to pounds instantly using the exact factor (1 stone = 14 lb). Live result as you type, no sign-up, private.
- [Tablespoons to ML Converter](https://yourhack.ai/tbsp-to-ml): Free tbsp to ml converter. Convert US tablespoons to milliliters instantly (1 tbsp = 14.7868 mL). Live result as you type, no sign-up, private.
- [Teaspoons to ML Converter](https://yourhack.ai/tsp-to-ml): Free tsp to ml converter. Convert US teaspoons to milliliters instantly (1 tsp = 4.9289 mL). Live result as you type, no sign-up, private.
- [Teaspoons to Tablespoons Converter](https://yourhack.ai/teaspoons-to-tablespoons): Free teaspoons to tablespoons converter. Convert tsp to tbsp instantly using the exact ratio (1 tbsp = 3 tsp). Live result in your browser as you type.
- [Temperature Converter](https://yourhack.ai/temperature-converter): Free temperature converter. Convert between Celsius, Fahrenheit, and Kelvin instantly with correct offset formulas, updating live as you type a value.
- [Time Converter](https://yourhack.ai/time-converter): Free time unit converter. Convert between seconds, minutes, hours, days, weeks, months, and years instantly with exact factors, updating live as you type.
- [Tons to Pounds Converter](https://yourhack.ai/tons-to-pounds): Free tons to pounds converter. Convert US short tons to pounds instantly using the exact factor (1 ton = 2000 lb). Live result in your browser as you type.
- [Volume Converter](https://yourhack.ai/volume-converter): Free volume converter. Convert between milliliters, liters, US and imperial gallons, quarts, pints, cups, and fluid ounces instantly as you type.
- [Watts to Horsepower Converter](https://yourhack.ai/watts-to-horsepower): Free watts to horsepower converter. Convert watts to mechanical horsepower instantly (1 hp = 745.7 W). Live result as you type, no sign-up, private.
- [Weight / Mass Converter](https://yourhack.ai/weight-converter): Free weight and mass converter. Convert between grams, kilograms, metric tonnes, ounces, pounds, and stones instantly with exact factors as you type.
- [Yards to Feet Converter](https://yourhack.ai/yards-to-feet): Free yards to feet converter. Convert yards to feet instantly using the exact ratio (1 yard = 3 feet). Live result in your browser as you type.

### Color

- [Color Blindness Simulator](https://yourhack.ai/color-blindness-simulator): Free color blindness simulator. Enter a color to see how it appears under protanopia, deuteranopia and tritanopia to test your palette accessibility.
- [Color Mixer and Blender](https://yourhack.ai/color-mixer): Free color mixer and blender. Pick two colors and a blend amount to see the mixed result in HEX and RGB, with a live swatch and one-click copy.
- [Color Palette Generator](https://yourhack.ai/color-palette-generator): Free color palette generator. Pick a base color and instantly build harmonious palettes (complementary, analogous, triadic) with copyable hex codes.
- [Color Picker](https://yourhack.ai/color-picker): Free visual color picker. Pick any color with the eyedropper wheel and instantly read its HEX, RGB and HSL values, then copy them with one click.
- [Color Shades and Tints Generator](https://yourhack.ai/color-shades-tints): Free shades and tints generator. Enter a base color and instantly get a full scale of darker shades and lighter tints with copyable hex codes.
- [CSS Gradient Generator](https://yourhack.ai/css-gradient-generator): Free CSS gradient generator. Blend two colors, set the angle and type (linear or radial), preview live and copy the ready-to-paste background CSS.
- [HEX to HSL Converter](https://yourhack.ai/hex-to-hsl): Free HEX to HSL converter. Paste a hex color code and instantly get hue, saturation and lightness as a copyable CSS hsl() string with a live swatch.
- [HEX to RGB Converter](https://yourhack.ai/hex-to-rgb): Free HEX to RGB converter. Paste any hex color code and instantly get its red, green and blue values as an rgb() string ready for CSS.
- [HEX to RGBA Converter](https://yourhack.ai/hex-to-rgba): Free HEX to RGBA converter. Turn a hex color and an opacity slider into a copyable CSS rgba() string, with a live checkerboard transparency preview.
- [Named CSS Colors Chart](https://yourhack.ai/named-css-colors): Free named CSS colors chart. Browse and search all standard CSS color names with their hex codes and swatches, and copy any name or hex instantly.
- [Random Color Generator](https://yourhack.ai/random-color-generator): Free random color generator. Generate a random color or a batch of them with one click, each shown as a swatch with copyable HEX and RGB values.
- [RGB to CMYK Converter](https://yourhack.ai/rgb-to-cmyk): Free RGB to CMYK converter. Enter red, green and blue values and instantly get cyan, magenta, yellow and key (black) percentages for print work.
- [RGB to HEX Converter](https://yourhack.ai/rgb-to-hex): Free RGB to HEX converter. Enter red, green and blue values and instantly get the matching hex color code, ready to copy into CSS or design tools.
- [RGB to HSL Converter](https://yourhack.ai/rgb-to-hsl): Free RGB to HSL converter. Enter red, green and blue values and instantly get hue, saturation and lightness as a copyable CSS hsl() string.
- [WCAG Contrast Checker](https://yourhack.ai/contrast-checker): Free WCAG contrast checker. Compare a text and background color, see the exact contrast ratio and whether it passes AA and AAA accessibility levels.

### Generators

- [API Key Generator](https://yourhack.ai/api-key-generator): Free API key generator. Create random, high-entropy API keys and secret tokens with a custom prefix and length using the browser secure random source.
- [Barcode Generator (Code 128)](https://yourhack.ai/barcode-generator): Free Code 128 barcode generator. Turn any text or number into a real, scannable Code 128 barcode in your browser and download it as a PNG image.
- [Business and Brand Name Generator](https://yourhack.ai/business-name-generator): Free business name generator. Enter a keyword and instantly get brandable company and product name ideas using prefixes, suffixes and blends. Copy any idea.
- [Color Hex Generator](https://yourhack.ai/color-hex-generator): Free color hex generator. Generate random hex color codes one at a time or in bulk, each shown with a live swatch and copyable with a single click.
- [Credit Card Test Number Generator](https://yourhack.ai/credit-card-test-number-generator): Free Luhn-valid card test number generator. Create fake numbers that pass the Luhn check for testing payment forms. For testing only, not real cards.
- [Excuse Generator](https://yourhack.ai/excuse-generator): Free excuse generator. Get a random, lighthearted excuse for being late, skipping an event or missing a deadline. Pick a category and copy the result.
- [Fake Data Generator](https://yourhack.ai/fake-data-generator): Free fake data generator. Create dummy user profiles with names, emails, addresses and phone numbers for testing and mockups, exportable as text or JSON.
- [Gift Idea Generator](https://yourhack.ai/gift-idea-generator): Free gift idea generator. Stuck on what to give? Pick a recipient and interest and get random gift suggestions to spark ideas, with one-click copy.
- [Hashtag Generator](https://yourhack.ai/hashtag-generator): Free hashtag generator. Enter a topic or keywords and instantly get a set of relevant, ready-to-use hashtags for Instagram, TikTok and other social posts.
- [MAC Address Generator](https://yourhack.ai/mac-address-generator): Free MAC address generator. Create random, valid-format MAC addresses with your choice of separator and case, one or many at a time, for testing and labs.
- [Pickup Line Generator](https://yourhack.ai/pickup-line-generator): Free pickup line generator. Get a random cheesy, punny or nerdy pickup line to break the ice or share a laugh. Pick a style and copy your favourite.
- [PIN Generator](https://yourhack.ai/pin-generator): Free PIN generator. Instantly create random numeric PIN codes of any length (4, 6 or custom) using a secure random source, one or many at a time.
- [QR Code Generator](https://yourhack.ai/qr-code-generator): Free QR code generator. Turn any URL or text into a real, scannable QR code entirely in your browser, then download it as a PNG. No sign-up, nothing uploaded.
- [Random Emoji Generator](https://yourhack.ai/random-emoji-generator): Free random emoji generator. Get one or a batch of random emojis to spice up messages, usernames and posts. Click any emoji to copy it instantly.
- [Random Name Generator](https://yourhack.ai/random-name-generator): Free random name generator. Generate realistic first and last names in bulk for characters, test data or placeholders, with one-click copy of the whole list.
- [Random Number Generator](https://yourhack.ai/random-number-generator): Free random number generator. Pick a min and max range and generate one number or a bulk list, with an option for unique values. Copy the results instantly.
- [Random Password Generator (Advanced)](https://yourhack.ai/random-password-generator): Free advanced password generator. Build strong random passwords with fine control over length and character sets, plus a live strength meter.
- [Random Quote Generator](https://yourhack.ai/random-quote-generator): Free random quote generator. Get an inspiring or thoughtful quote at the click of a button from a built-in local collection, ready to copy and share.
- [Random Word Generator](https://yourhack.ai/random-word-generator): Free random word generator. Get one or many random English words for brainstorming, games, writing prompts and creative exercises, with copyable output.
- [Slogan and Tagline Generator](https://yourhack.ai/slogan-generator): Free slogan generator. Enter your brand or product and instantly get catchy tagline ideas to inspire your marketing, with one-click copy for any line.
- [Strong Passphrase Generator](https://yourhack.ai/passphrase-generator): Free passphrase generator. Build memorable, high-entropy passphrases from random words with your choice of separator, capitalization and numbers.
- [Username Generator](https://yourhack.ai/username-generator): Free username generator. Instantly create catchy, available-looking usernames by mixing adjectives, nouns and numbers for gaming, social media and sign-ups.

### Productivity

- [Aspect Ratio Calculator](https://yourhack.ai/aspect-ratio-calculator): Free aspect ratio calculator. Enter a width or height and get the matching dimension for any ratio like 16:9 or 4:3. Keep images in proportion.
- [Break Reminder Timer](https://yourhack.ai/break-timer): Free break reminder timer. Set an interval and get a gentle on-screen and audio nudge to stand up, stretch and rest your eyes on repeat.
- [Emoji & Symbol Picker](https://yourhack.ai/emoji-picker): Free emoji and symbol picker. Browse categories, search, and click any emoji or special character to copy it to your clipboard instantly.
- [Keyboard Tester](https://yourhack.ai/keyboard-tester): Free online keyboard tester. Press any key to see its name, key code and status light up. Check that every key on your keyboard works.
- [Live Word Counter](https://yourhack.ai/word-counter-live): Free live word counter. Type or paste text and see words, characters, sentences, paragraphs and reading time update instantly as you write.
- [Meeting Cost Calculator](https://yourhack.ai/meeting-cost-calculator): Free meeting cost calculator. Enter number of people, average hourly rate and duration to see what a meeting really costs, ticking up live.
- [Microphone Test](https://yourhack.ai/mic-test): Free online microphone test. See a live level meter react to your voice to confirm your mic works. No recording, audio stays in your browser.
- [Minute Timer](https://yourhack.ai/minute-timer): Free online minute timer. Set minutes and seconds, start the count and get an alarm when time is up. Simple, private, works with no install.
- [Online Notepad](https://yourhack.ai/online-notepad): Free online notepad with autosave. Jot notes in your browser and they are saved locally as you type. No account, works offline, fully private.
- [Online Ruler](https://yourhack.ai/online-ruler): Free on-screen ruler in cm and inches. Measure small objects against your display. Includes a calibration slider so your DPI matches real size.
- [Pomodoro Timer](https://yourhack.ai/pomodoro-timer): Free Pomodoro timer. Focus for 25 minutes, then take a 5 minute break, on repeat. Track completed sessions and stay in flow, all in browser.
- [Reaction Time Test](https://yourhack.ai/reaction-time-test): Free reaction time test. Click as soon as the box turns green and see your reaction time in milliseconds. Track your best over several tries.
- [Screen Resolution Checker](https://yourhack.ai/screen-resolution-checker): Free screen resolution checker. See your screen size, browser viewport, pixel ratio and color depth instantly. Live updates as you resize.
- [Stopwatch](https://yourhack.ai/stopwatch): Free online stopwatch with lap times. Start, stop and record splits with millisecond precision. No download, runs right in your browser.
- [Tally Counter](https://yourhack.ai/tally-counter): Free online tally counter. Count anything with plus and minus buttons, run several counters at once and rename them. Saved in your browser.
- [Team Shuffler](https://yourhack.ai/team-shuffler): Free team shuffler. Paste a list of names and split them into a set number of teams or groups of a chosen size, fairly and instantly in browser.
- [Text to Speech](https://yourhack.ai/text-to-speech): Free text to speech in your browser. Type or paste text, pick a voice, and hear it read aloud. Adjust speed and pitch, nothing uploaded.
- [To-Do List](https://yourhack.ai/to-do-list): Free online to-do list. Add tasks, check them off and delete when done. Saved in your browser automatically, no sign-up, works offline.
- [Typing Speed Test](https://yourhack.ai/typing-speed-test): Free typing speed test. Type the sample sentence and get your words per minute and accuracy instantly. Fun way to measure your typing skill.
- [Webcam Test](https://yourhack.ai/webcam-test): Free online webcam test. See a live preview of your camera in the browser to check it works before a call. No recording, nothing uploaded.

### Image

- [Add Text to Image](https://yourhack.ai/watermark-image): Free online tool to add text or a watermark to an image. Set the words, size, color, opacity and position, then download the labeled picture.
- [Image Color Extractor](https://yourhack.ai/image-color-extractor): Free image color extractor. Upload a photo and get its dominant color palette with HEX codes you can click to copy. Runs in your browser.
- [Image Compressor](https://yourhack.ai/image-compressor): Free online image compressor. Re-encode JPG and PNG photos at a quality you choose to shrink file size, and see how much you saved. Private.
- [Image Cropper](https://yourhack.ai/image-cropper): Free online image cropper. Drag a crop box over your photo to keep only the part you want, then download the cropped image. Nothing uploaded.
- [Image Format Converter](https://yourhack.ai/image-format-converter): Free online image format converter. Change a picture between PNG, JPG and WebP right in your browser and download the converted file. Private.
- [Image Resizer](https://yourhack.ai/image-resizer): Free online image resizer. Change an image to exact pixel dimensions or by percentage, lock the aspect ratio, and download the result. Private.
- [Image to Base64](https://yourhack.ai/image-to-base64): Free image to Base64 converter. Turn a picture into a Base64 data URI you can paste into HTML or CSS. Copy the string, all done in your browser.
- [Meme Generator](https://yourhack.ai/meme-generator): Free online meme generator. Upload any image, add classic bold top and bottom text, and download your meme. All in your browser, nothing uploaded.
- [Placeholder Image Generator](https://yourhack.ai/placeholder-image-generator): Free placeholder image generator. Create a dummy image at any size with custom colors and label text, then download it. No upload, no server.
- [Rotate & Flip Image](https://yourhack.ai/rotate-flip-image): Free online image rotator and flipper. Turn a photo left or right in 90 degree steps or mirror it horizontally and vertically, then download.

### PDF

- [Compress PDF](https://yourhack.ai/compress-pdf): Free online PDF compressor. Re-save a PDF to trim its file size in your browser and see the before and after numbers. Private, nothing uploaded.
- [Delete PDF Pages](https://yourhack.ai/delete-pdf-pages): Free online tool to delete pages from a PDF. Remove the pages you do not want and download the trimmed document. Runs privately in your browser.
- [Extract PDF Text](https://yourhack.ai/extract-pdf-text): Free online PDF text extractor. Pull the plain text out of a PDF in your browser, then copy it or download a TXT file. Nothing is uploaded anywhere.
- [JPG / PNG to PDF](https://yourhack.ai/image-to-pdf): Free online image to PDF converter. Combine JPG and PNG pictures into a single PDF, reorder them, and download. All in your browser, nothing uploaded.
- [Merge PDF](https://yourhack.ai/merge-pdf): Free online PDF merger. Combine several PDF files into one document, drag the files to reorder them, then download the merged PDF. Nothing uploaded.
- [PDF Page Count & Info](https://yourhack.ai/pdf-info): Free online PDF info viewer. See a PDF page count, file size, page dimensions and metadata like title, author and producer, all in your browser.
- [PDF to JPG / PNG](https://yourhack.ai/pdf-to-image): Free online PDF to image converter. Render each page of a PDF to a JPG or PNG picture in your browser and download them. Nothing uploaded.
- [Reorder PDF Pages](https://yourhack.ai/reorder-pdf-pages): Free online tool to reorder PDF pages. Drag page thumbnails into a new order and download the rearranged PDF. All in your browser, nothing uploaded.
- [Rotate PDF](https://yourhack.ai/rotate-pdf): Free online PDF rotator. Turn every page or selected pages of a PDF by 90, 180 or 270 degrees and download the fixed file. Private, nothing uploaded.
- [Split PDF](https://yourhack.ai/split-pdf): Free online PDF splitter. Pull out a page range from a PDF into a new smaller document and download it, all done privately in your browser.

### Crypto

- [Airdrop Value Calculator](https://yourhack.ai/airdrop-value-calculator): Free crypto airdrop value calculator. Enter tokens received and token price to see your airdrop value, plus per wallet value across multiple wallets.
- [APY to APR Converter (Crypto)](https://yourhack.ai/crypto-apy-apr-converter): Free crypto APY to APR converter. Convert between annual percentage rate and yield for any compounding frequency used in DeFi staking and lending.
- [BIP39 Seed Phrase Word Count Checker](https://yourhack.ai/bip39-word-count-checker): Free BIP39 seed phrase word count checker. Paste a recovery phrase to verify it has a valid 12, 15, 18, 21 or 24 word length before importing.
- [Crypto Average Buy Price Calculator](https://yourhack.ai/crypto-average-buy-price): Free crypto average buy price calculator. Enter each purchase price and coin quantity to find your weighted average cost basis and total holdings.
- [Crypto DCA Calculator](https://yourhack.ai/crypto-dca-calculator): Free crypto dollar cost averaging calculator. Enter your buy prices and amounts to find your average cost basis, total coins and blended entry.
- [Crypto Leverage Calculator](https://yourhack.ai/leverage-calculator): Free crypto leverage calculator. Enter margin and position size to find your leverage, or enter leverage and margin to find the position you can open.
- [Crypto Portfolio Allocation Calculator](https://yourhack.ai/crypto-portfolio-allocation-calculator): Free crypto portfolio allocation calculator. Enter each holding value to see percentage weights and how far each is from a target allocation to rebalance.
- [Crypto Position Size Calculator](https://yourhack.ai/position-size-calculator): Free crypto position size calculator. Enter account size, risk percent, entry and stop loss to find the position size that caps your loss per trade.
- [Crypto Profit Calculator](https://yourhack.ai/crypto-profit-calculator): Free crypto profit calculator. Enter entry price, exit price, amount and fees to see net profit or loss, return percentage and total value instantly.
- [Crypto Staking Rewards Calculator](https://yourhack.ai/staking-rewards-calculator): Free crypto staking rewards calculator. Enter staked amount, APR and duration to project your staking income with and without compounding.
- [Ethereum Address Checksum Tool](https://yourhack.ai/ethereum-address-checksum): Free EIP-55 Ethereum address checksum tool. Convert a 0x address to its checksummed form and validate the mixed case checksum entirely in your browser.
- [Ethereum Gas Fee Calculator](https://yourhack.ai/gas-fee-calculator): Free Ethereum gas fee calculator. Enter gas price in gwei and gas limit to compute transaction cost in ETH and in dollars at any ETH price.
- [Ethereum Unit Converter](https://yourhack.ai/ethereum-unit-converter): Free Ethereum unit converter for wei, gwei and ether. Convert between all Ethereum denominations at once with exact 18 decimal precision in your browser.
- [Funding Rate Calculator](https://yourhack.ai/funding-rate-calculator): Free perpetual funding rate calculator. Enter position size, funding rate and time to see the funding cost or income you pay or earn over a period.
- [Gwei to ETH Converter](https://yourhack.ai/gwei-to-eth): Free Gwei to ETH and ETH to Gwei converter. Convert Ethereum gas price units instantly in your browser with full precision and no rounding errors.
- [Impermanent Loss Calculator](https://yourhack.ai/impermanent-loss-calculator): Free impermanent loss calculator for liquidity pools. Enter the price ratio change to see impermanent loss percent versus simply holding the tokens.
- [Liquidation Price Calculator](https://yourhack.ai/liquidation-price-calculator): Free crypto liquidation price calculator for long and short leverage positions. Enter entry price, leverage and side to find your liquidation price.
- [Percentage To Recover Calculator](https://yourhack.ai/percentage-to-recover-calculator): Free break even recovery calculator. Enter a drawdown percent to see the exact gain needed to get back to even, a key rule for crypto losses.
- [Risk Reward Ratio Calculator](https://yourhack.ai/crypto-risk-reward-ratio-calculator): Free risk reward ratio calculator for crypto trades. Enter entry, stop loss and target prices to get your risk to reward ratio and break even win rate.
- [ROI Multiple Calculator (Crypto)](https://yourhack.ai/roi-multiple-calculator): Free crypto ROI multiple calculator. Convert between a return multiple like 10x and a percentage gain, and find your profit from an investment amount.
- [Rule of 72 Crypto Calculator](https://yourhack.ai/crypto-rule-of-72-calculator): Free rule of 72 calculator for crypto. Enter an annual return to estimate how long it takes your holdings to double, or the return needed to double in a time.
- [Satoshi to BTC Converter](https://yourhack.ai/satoshi-to-btc): Free Satoshi to BTC and BTC to Satoshi converter. Convert Bitcoin satoshis to whole BTC and back with exact 8 decimal precision in your browser.
- [Sats Per Dollar Calculator](https://yourhack.ai/sats-per-dollar-calculator): Free sats per dollar calculator. Enter the Bitcoin price to see how many satoshis one US dollar buys and what any dollar amount is worth in sats.
- [Stop Loss & Take Profit Calculator](https://yourhack.ai/crypto-stop-loss-take-profit-calculator): Free crypto stop loss and take profit calculator. Enter entry price and percentages to get exact stop and target prices for long or short trades.
- [Token Market Cap Calculator](https://yourhack.ai/token-market-cap-calculator): Free token market cap and FDV calculator. Enter price, circulating supply and total supply to compute market capitalization and fully diluted valuation.
- [Trading Fee Breakeven Calculator](https://yourhack.ai/crypto-breakeven-fee-calculator): Free crypto trading fee breakeven calculator. Enter maker and taker fees to find the minimum price move needed to cover round trip trading costs.
- [Wei to ETH Converter](https://yourhack.ai/wei-to-eth): Free Wei to ETH and ETH to Wei converter. Convert the smallest Ethereum unit to ether and back with exact 18 decimal precision in your browser.

### Date & Time

- [Add Business Days to Date](https://yourhack.ai/workdays-from-date): Add a number of working days to a start date, skipping weekends, to find the resulting business date and the day of the week it lands on.
- [Add Days to Date](https://yourhack.ai/add-days-to-date): Add a number of days, weeks, months or years to any date and get the exact resulting calendar date, including the day of the week.
- [Business Days Calculator](https://yourhack.ai/business-days-calculator): Count the working days between two dates, excluding weekends. See business days, total days, weekend days and full weeks in the range.
- [Countdown to Date and Time](https://yourhack.ai/countdown-to-datetime): A live countdown to any date and time. Watch the days, hours, minutes and seconds tick down to a launch, event or deadline in real time.
- [Date Difference Calculator](https://yourhack.ai/date-difference-finder): Find the exact difference between two dates in years, months and days, plus the total number of days, weeks, hours and minutes between them.
- [Date to Ordinal and Long Format](https://yourhack.ai/date-to-ordinal): Convert a date into ordinal and long written formats. See the 1st, 2nd, 3rd style day, the full spelled out date and other common formats.
- [Day of the Week Finder](https://yourhack.ai/day-of-week-finder): Find out what day of the week any date falls on, past or future. Enter a birthday or historic date and see the exact weekday instantly.
- [Day of the Year Calculator](https://yourhack.ai/day-of-year-calculator): Find which numbered day of the year any date is, from 1 to 365 or 366, plus how many days are left in the year and the percentage elapsed.
- [Days in Month Calculator](https://yourhack.ai/days-in-month): See how many days are in any month of any year, including February in leap years, plus the first and last weekday of that month.
- [Days Until Date](https://yourhack.ai/days-until-date): Count how many days are left until any future date. A live countdown showing days, weeks, hours and minutes remaining until your target day.
- [Duration Between Two Times](https://yourhack.ai/duration-between-times): Work out how long is between two clock times on the same day or overnight. Get the gap in hours and minutes and in decimal hours.
- [Hours Worked Calculator](https://yourhack.ai/hours-worked-calculator): Calculate total hours worked from a clock in and clock out time, minus break minutes. Shows hours and minutes plus decimal hours for pay.
- [ISO Week Number Calculator](https://yourhack.ai/week-number-calculator): Find the ISO 8601 week number for any date, plus the week year, the day of the week and the range of dates that week covers.
- [Leap Year Checker](https://yourhack.ai/leap-year-checker): Check whether any year is a leap year and see why. Lists the next several leap years and shows how many days that year has.
- [Live Unix Time Clock](https://yourhack.ai/unix-time-clock): A live clock showing the current Unix epoch time in seconds and milliseconds, plus the matching UTC and local date and time, updating each second.
- [Moon Phase Calculator](https://yourhack.ai/moon-phase-calculator): Find the moon phase for any date. See the phase name, illumination percent and the moon age in days, computed from the lunar cycle.
- [Next Birthday Countdown](https://yourhack.ai/next-birthday-countdown): Count down to your next birthday. Enter your birth date to see the days until it, the weekday it falls on, and the age you will turn.
- [Quarter of the Year Finder](https://yourhack.ai/quarter-of-year-finder): Find which fiscal quarter a date falls in. See the quarter number, its start and end dates, and how many days are left in that quarter.
- [Sleep Bedtime Calculator](https://yourhack.ai/sleep-cycle-bedtime-calculator): Find the best times to go to sleep or wake up based on 90 minute sleep cycles, so you wake between cycles feeling more refreshed.
- [Subtract Days from Date](https://yourhack.ai/subtract-days-from-date): Subtract days, weeks, months or years from any date to find a past calendar date, complete with the exact day of the week it falls on.
- [Time Ago Calculator](https://yourhack.ai/time-ago-calculator): Turn a past date and time into a plain time ago phrase like 3 days ago or 5 months ago, plus the exact elapsed days, hours and minutes.
- [Time Duration Calculator](https://yourhack.ai/time-duration-calculator): Add or subtract times in hours, minutes and seconds. Combine multiple durations and get the total in HH:MM:SS and in decimal hours.
- [Time Lived Calculator](https://yourhack.ai/time-lived-calculator): See how long you have been alive in total days, hours, minutes and seconds from your birth date, updated live down to the second.
- [Week of the Month Finder](https://yourhack.ai/week-of-month-finder): Find which week of the month a date falls in and which occurrence of that weekday it is, like the second Tuesday or the last Friday.
- [Weekday Occurrence Counter](https://yourhack.ai/weekday-occurrence-counter): Count how many times each weekday occurs between two dates. See exactly how many Mondays, Fridays or any weekday fall in your date range.
- [Weekly Timesheet Calculator](https://yourhack.ai/weekly-timesheet-calculator): Add up hours across a full week from daily clock in and clock out times with breaks. See each day and the weekly total in decimal hours.
- [World Time Zone Converter](https://yourhack.ai/world-clock-timezone-converter): Convert a time from one time zone to another using real IANA zones. Pick a date and time, choose two cities, and see the matching local time.

### Data

- [CSV Column Extractor](https://yourhack.ai/csv-column-extractor): Free CSV column extractor. Pull a single column out of a CSV file by name or number, with a real parser that respects quoted fields and commas.
- [CSV to Markdown Table](https://yourhack.ai/csv-to-markdown-table): Free CSV to Markdown table converter. Turn CSV data into a clean GitHub flavored Markdown table with aligned columns for READMEs, docs and issues.
- [CSV to SQL Insert](https://yourhack.ai/csv-to-sql-insert): Free CSV to SQL insert generator. Turn CSV rows into ready to run INSERT statements with a header derived column list and safely quoted values.
- [CSV to TSV](https://yourhack.ai/csv-to-tsv): Free CSV to TSV converter. Turn comma separated values into tab separated text you can paste straight into spreadsheets, respecting quoted fields.
- [CSV Transpose](https://yourhack.ai/csv-transpose): Free CSV transpose tool. Flip rows and columns of a CSV so headers become the first column, using a real parser that respects quoted fields.
- [Fixed Width to CSV](https://yourhack.ai/fixed-width-to-csv): Free fixed width to CSV converter. Split fixed column mainframe or report text into CSV by specifying column widths, trimming padding from each field.
- [JSON Array to NDJSON](https://yourhack.ai/json-array-to-ndjson): Free JSON array to NDJSON converter. Turn a JSON array into newline delimited JSON, one compact record per line, ready for streaming and log tools.
- [JSON Flatten](https://yourhack.ai/json-flatten): Free JSON flatten tool. Collapse a nested JSON object into flat dot notation keys, turning deep structures into a single level map for easy diffing.
- [JSON Keys Extractor](https://yourhack.ai/json-keys-extractor): Free JSON keys extractor. List every unique key path in a JSON document, including nested objects and arrays, so you can map or document a payload.
- [JSON Path Extractor](https://yourhack.ai/json-path-extractor): Free JSON path extractor. Pull a value from deep inside JSON using a dot and bracket path like user.tags[0], with clear errors when a path is missing.
- [JSON Sort Keys](https://yourhack.ai/json-sort-keys): Free JSON key sorter. Sort every object key alphabetically at all nesting levels for deterministic diffs, cleaner configs and reproducible output.
- [JSON Stringify Viewer](https://yourhack.ai/json-stringify-viewer): Free JSON stringify tool. Parse and re serialize JSON with a chosen indent, or produce an escaped single string value ready to embed in code.
- [JSON to ENV](https://yourhack.ai/json-to-env): Free JSON to env file converter. Turn a flat JSON object into dotenv KEY=value lines, upper casing keys and quoting values that contain spaces.
- [JSON to Go Struct](https://yourhack.ai/json-to-go-struct): Free JSON to Go struct converter. Generate typed Go structs with json tags from a JSON sample, inferring nested types, slices and field names.
- [JSON to HTML Table](https://yourhack.ai/json-to-html-table): Free JSON to HTML table converter. Turn an array of JSON objects into a clean HTML table with a header row and escaped cells, ready to paste anywhere.
- [JSON to PHP Array](https://yourhack.ai/json-to-php-array): Free JSON to PHP array converter. Turn JSON into a valid PHP array literal using short bracket syntax, ready to paste into a config or fixture file.
- [JSON to Query String](https://yourhack.ai/json-to-query-string): Free JSON to query string converter. Turn a JSON object into a URL encoded query string, flattening nested objects and arrays with bracket notation.
- [JSON to TOML](https://yourhack.ai/json-to-toml): Free JSON to TOML converter. Turn JSON config into TOML tables and key value pairs for Rust, Python and other tools that read TOML config files.
- [JSON to TypeScript](https://yourhack.ai/json-to-typescript): Free JSON to TypeScript converter. Generate a typed interface from a JSON sample, inferring nested objects, arrays and optional fields automatically.
- [JSON to XML](https://yourhack.ai/json-to-xml): Free JSON to XML converter. Turn JSON objects and arrays into clean, indented XML for legacy APIs, SOAP services, config files and data feeds.
- [JSON Unescape](https://yourhack.ai/json-unescape): Free JSON unescape tool. Turn an escaped JSON string back into readable text, decoding backslash escapes, quotes, newlines and unicode sequences.
- [JSON Unflatten](https://yourhack.ai/json-unflatten): Free JSON unflatten tool. Rebuild a nested JSON object from flat dot notation keys, expanding paths and array indices back into real structure.
- [List to JSON Array](https://yourhack.ai/list-to-json-array): Free list to JSON array converter. Turn a plain list of lines into a JSON array of strings or numbers, trimming blanks and optionally deduplicating.
- [NDJSON to JSON Array](https://yourhack.ai/ndjson-to-json-array): Free NDJSON to JSON array converter. Turn newline delimited JSON into a single JSON array, parsing each line and reporting any bad rows clearly.
- [Query String to JSON](https://yourhack.ai/query-string-to-json): Free query string to JSON converter. Parse a URL query string into a clean JSON object, decoding values and grouping repeated keys into arrays.
- [TSV to CSV](https://yourhack.ai/tsv-to-csv): Free TSV to CSV converter. Turn tab separated values into proper comma separated CSV, quoting fields that contain commas, quotes or line breaks.
- [XML to JSON](https://yourhack.ai/xml-to-json): Free XML to JSON converter. Parse XML documents into clean, readable JSON with attributes and repeated elements handled correctly in your browser.

### SEO

- [Anchor Text Suggester](https://yourhack.ai/anchor-text-suggester): Free anchor text suggester. Enter a keyword and target URL to get varied, natural anchor text ideas across exact, partial, branded and generic types.
- [Article Schema (JSON-LD) Generator](https://yourhack.ai/article-schema-generator): Free Article schema generator. Enter headline, author, dates and image to build valid Article JSON-LD structured data for richer news and blog results.
- [Breadcrumb Schema (JSON-LD) Generator](https://yourhack.ai/breadcrumb-schema-generator): Free breadcrumb schema generator. Enter your page path steps to build valid BreadcrumbList JSON-LD structured data for cleaner breadcrumb search results.
- [Canonical Tag Generator](https://yourhack.ai/canonical-tag-generator): Free canonical tag generator. Enter your preferred page URL to create a valid rel canonical link tag and stop duplicate content from splitting your rankings.
- [CTR & Ad Metrics Calculator](https://yourhack.ai/ctr-calculator): Free CTR calculator. Enter impressions, clicks, conversions and spend to compute click through rate, conversion rate, CPC, CPA and ROAS instantly.
- [FAQ Schema (JSON-LD) Generator](https://yourhack.ai/faq-schema-generator): Free FAQ schema generator. Add questions and answers to build valid FAQPage JSON-LD structured data that can earn rich results in Google search.
- [Google SERP Snippet Preview](https://yourhack.ai/serp-snippet-preview): Free Google SERP snippet preview. Type your title, URL and meta description to see a live desktop and mobile search result with pixel-width truncation.
- [Hreflang Tag Generator](https://yourhack.ai/hreflang-tag-generator): Free hreflang tag generator. Map languages and regions to URLs to build valid hreflang link tags with x-default for correct international SEO targeting.
- [Keyword Combiner & Mixer](https://yourhack.ai/keyword-mixer): Free keyword mixer. Combine two or three lists of words into every keyword phrase permutation for PPC and SEO, with optional match type brackets.
- [Keyword Density Checker](https://yourhack.ai/keyword-density-checker): Free keyword density checker. Paste your content to see word and phrase frequency, density percentages and total word count. Spot keyword stuffing fast.
- [Meta Description Length Checker](https://yourhack.ai/meta-description-length-checker): Free meta description length checker. Count characters and pixel width and see if Google will truncate your description on desktop and mobile. Private.
- [Noindex Meta Tag Generator](https://yourhack.ai/noindex-tag-generator): Free noindex tag generator. Build a robots meta tag with noindex, nofollow, noarchive and other directives to keep pages out of search results. Private.
- [Open Graph Tag Generator](https://yourhack.ai/open-graph-generator): Free Open Graph generator. Enter title, description, image and type to build valid og meta tags for rich link previews on Facebook, LinkedIn and Slack.
- [Organization Schema (JSON-LD) Generator](https://yourhack.ai/json-ld-organization-generator): Free Organization schema generator. Build valid JSON-LD structured data with your name, logo, URL and social profiles to boost brand knowledge panels.
- [Page Weight Budget Calculator](https://yourhack.ai/website-speed-score-estimator): Free page weight calculator. Add HTML, CSS, JS, image and font sizes to see total page weight and estimated load time across 3G, 4G and broadband speeds.
- [Product Schema (JSON-LD) Generator](https://yourhack.ai/product-schema-generator): Free Product schema generator. Enter name, price, currency, availability and rating to build valid Product JSON-LD structured data for rich shopping results.
- [Reading Time Calculator](https://yourhack.ai/reading-time-calculator): Free reading time calculator. Paste text to estimate how long it takes to read, with word count, sentence count and separate speaking time for scripts.
- [SEO Content Score Checker](https://yourhack.ai/seo-content-word-counter): Free SEO content checker. Paste your article and target keyword to score word count, keyword usage, headings and readability against on-page best practices.
- [Sitemap XML Generator](https://yourhack.ai/sitemap-xml-generator): Free sitemap XML generator. Paste a list of URLs to build a valid XML sitemap with lastmod, changefreq and priority, ready to submit to search engines.
- [Title Tag Length Checker](https://yourhack.ai/title-tag-length-checker): Free title tag length checker. Measure your SEO title in characters and pixels and see if Google will truncate it on desktop and mobile. Instant, private.
- [Twitter Card Meta Tag Generator](https://yourhack.ai/twitter-card-generator): Free Twitter card generator. Enter title, description, image and handles to build valid twitter card meta tags for rich link previews on X and Twitter.
- [UTM Campaign Link Builder](https://yourhack.ai/utm-link-builder): Free UTM link builder. Add source, medium, campaign, term and content parameters to any URL and copy a clean, trackable campaign link for analytics.
- [YouTube Tag & Description Builder](https://yourhack.ai/youtube-tag-description-builder): Free YouTube tag builder. Turn your video topic keywords into comma separated tags and a description with timestamps and hashtags for better discovery.

### Social

- [Best Time to Post Reference](https://yourhack.ai/post-best-time-reference): Reference of generally recommended best times to post on Instagram, X, Facebook, TikTok, LinkedIn and Pinterest, adjusted to your local timezone.
- [Call to Action Generator](https://yourhack.ai/cta-generator): Generate call to action ideas for social posts by goal: get comments, saves, shares, follows, clicks or sign ups. Copy a fresh CTA in one click.
- [Discord Timestamp Generator](https://yourhack.ai/discord-timestamp-generator): Generate Discord timestamp codes that show the right local time for everyone. Pick a date, time and style to get the <t:unix:style> code.
- [Emoji Copy Picker](https://yourhack.ai/emoji-copy-picker): Browse a categorized emoji grid and click any emoji to copy it. Search by name, filter by category, and build a string of emoji for your posts.
- [Engagement Rate Calculator](https://yourhack.ai/engagement-rate-calculator): Calculate social media engagement rate from likes, comments, shares and saves. Get rate by followers and by reach with a quality benchmark.
- [Follower to Following Ratio Calculator](https://yourhack.ai/follower-ratio-calculator): Work out your followers to following ratio and see what it signals. Enter both counts to get the ratio, a percentage and a quick read.
- [Hashtag Counter](https://yourhack.ai/hashtag-counter): Count the hashtags in a caption and check against Instagram, TikTok and X limits. Lists each unique tag and flags duplicates instantly.
- [Hashtag Set From Keywords](https://yourhack.ai/keyword-hashtag-generator): Turn keywords or a caption into a ready to paste hashtag set. Generates camel case and lowercase tags and dedupes them automatically.
- [Instagram Bio Generator](https://yourhack.ai/instagram-bio-generator): Create a punchy Instagram bio from your name, role and interests. Builds a stacked bio with emoji and a call to action under 150 characters.
- [Instagram Caption Generator](https://yourhack.ai/instagram-caption-generator): Generate Instagram caption ideas from your topic with a hook, body, emoji and a call to action. Pick a tone and copy the caption instantly.
- [Instagram Line Break Generator](https://yourhack.ai/instagram-line-break-generator): Add real line breaks and spacing to Instagram captions and bios that survive posting. Inserts invisible characters so gaps do not collapse.
- [Multi Platform Character Counter](https://yourhack.ai/character-counter-multi): Count your text against every social media limit at once: X, Instagram, TikTok, LinkedIn, Facebook, YouTube, Threads and Bluesky.
- [Reels Hashtag Set Generator](https://yourhack.ai/reels-hashtag-set-generator): Build a balanced Instagram Reels hashtag set that mixes broad, medium and niche tags around your topic, sized to stay under the 30 tag cap.
- [Social Media Image Size Reference](https://yourhack.ai/social-media-image-sizes): Reference table of current image and video dimensions for Instagram, X, Facebook, TikTok, YouTube, LinkedIn and Pinterest. Search and copy sizes.
- [TikTok Money Calculator](https://yourhack.ai/tiktok-money-calculator): Estimate TikTok earnings from views using a per thousand view rate. See low, average and high estimates for a video and a monthly total.
- [Tweet Character Counter](https://yourhack.ai/tweet-character-counter): Free tweet character counter that respects X limits, counts each URL as 23 characters, and shows how many tweets long text needs.
- [Twitter Bio Generator](https://yourhack.ai/twitter-bio-generator): Generate a tight X bio from your role, focus and vibe. Builds a bio under the 160 character limit with separators and an optional link cue.
- [Twitter Thread Splitter](https://yourhack.ai/twitter-thread-splitter): Split long text into a numbered X thread with each tweet kept under 280 characters. Breaks on word boundaries and adds 1/n numbering.
- [YouTube Money Calculator](https://yourhack.ai/youtube-money-calculator): Estimate YouTube ad revenue from views and RPM. Enter monthly views and a realistic RPM to see daily, monthly and yearly income ranges.
- [YouTube Tag Extractor](https://yourhack.ai/youtube-tag-extractor): Extract clean comma separated YouTube tags from a block of text or keywords. Dedupes, trims, and counts against the 500 character tag budget.
- [YouTube Timestamp Link Generator](https://yourhack.ai/youtube-timestamp-link-generator): Turn a YouTube URL and a time into a link that jumps to that moment. Also builds chapter timestamp lists for your video description.
- [YouTube Title Length Checker](https://yourhack.ai/youtube-title-length-checker): Check YouTube title length so it does not get cut off. See character count against the 100 cap and the roughly 60 char display truncation point.

### Network

- [CIDR Calculator](https://yourhack.ai/cidr-calculator): Free CIDR calculator. Enter an IPv4 CIDR block and get the network address, broadcast, usable host range, subnet mask and total host count instantly.
- [CIDR to Netmask Converter](https://yourhack.ai/cidr-to-netmask): Free CIDR to netmask converter. Turn a CIDR prefix like /26 into its dotted decimal subnet mask and back again instantly, all in your browser.
- [DNS Record Types Reference](https://yourhack.ai/dns-record-types-reference): Free DNS record types reference. Search common DNS record types like A, AAAA, MX and TXT and read what each one does, offline in your browser.
- [HTTP Header Reference](https://yourhack.ai/http-header-reference): Free HTTP header reference. Search common request and response headers and read what each one does, whether offline in your browser, no lookups needed.
- [HTTP Status Code Lookup](https://yourhack.ai/http-status-code-lookup): Free HTTP status code reference. Search every standard HTTP status code by number or name and read its meaning and category, all offline in your browser.
- [IP to Binary Converter](https://yourhack.ai/ip-to-binary): Free IP to binary converter. See any IPv4 address as its 32-bit binary form, octet by octet, plus hex and integer, all computed instantly in your browser.
- [IP to Integer Converter](https://yourhack.ai/ip-to-integer): Free IP to integer converter. Turn a dotted decimal IPv4 address into its single 32-bit unsigned integer, and convert an integer back to an IP, in your browser.
- [IPv4 and IPv6 Validator](https://yourhack.ai/ipv4-validator): Free IP address validator. Check whether a string is a valid IPv4 or IPv6 address and see its type, class and whether it is private, all in your browser.
- [IPv4 Range Calculator](https://yourhack.ai/ipv4-range-calculator): Free IPv4 range calculator. Enter a start and end IPv4 address and get the exact number of addresses in the inclusive range, all computed in your browser.
- [IPv6 Expander and Compressor](https://yourhack.ai/ipv6-expander): Free IPv6 expander and compressor. Expand a shortened IPv6 address to its full form or compress a long one to the shortest valid form, in your browser.
- [MAC Address Formatter](https://yourhack.ai/mac-address-formatter): Free MAC address formatter. Normalize a MAC address and convert it between colon, hyphen, dot and bare hex separators, uppercase or lowercase, in your browser.
- [MIME Type Lookup](https://yourhack.ai/mime-type-lookup): Free MIME type lookup. Find the correct Content-Type for any file extension, or search by type, instantly and offline in your browser, no server needed.
- [Netmask to CIDR Converter](https://yourhack.ai/netmask-to-cidr): Free netmask to CIDR converter. Paste a dotted decimal subnet mask and get its CIDR prefix length, with validation for contiguous masks, in your browser.
- [Punycode Domain Converter](https://yourhack.ai/punycode-converter): Free punycode converter. Turn an international domain name into its ASCII punycode form and back, using the browser URL engine, all offline in your browser.
- [Query String Builder](https://yourhack.ai/query-string-builder): Free query string builder. Enter key and value pairs and get a correctly URL encoded query string ready to append to any link, built in your browser.
- [Query String to Table](https://yourhack.ai/query-string-to-table): Free query string parser. Paste a URL query string and see every parameter listed as clean key and value rows, decoded and easy to read, in your browser.
- [Subnet Mask Calculator](https://yourhack.ai/subnet-mask-calculator): Free subnet mask calculator. Pick a CIDR prefix and see the matching dotted decimal mask, wildcard mask, binary form and host count, all in your browser.
- [URL Parser](https://yourhack.ai/url-parser): Free online URL parser. Break any URL into protocol, host, port, path, query string and hash instantly in your browser using the native URL API.
- [URL Query Value Encoder](https://yourhack.ai/url-query-encoder): Free URL query value encoder and decoder. Percent encode a single value for safe use in a query string, or decode one back, all in your browser.
- [User Agent Parser](https://yourhack.ai/user-agent-parser): Free user agent parser. Paste any browser user agent string and read the likely browser, engine, operating system and device type, all parsed in your browser.
- [Well Known Ports Lookup](https://yourhack.ai/well-known-ports-lookup): Free port number lookup. Search common TCP and UDP ports by number or service name and see what each one is used for, offline in your browser.
- [WHOIS Lookup Link Builder](https://yourhack.ai/whois-lookup-link-builder): Free WHOIS lookup link builder. Enter a domain and get ready to open WHOIS and DNS lookup links for several services, built entirely in your browser.

### Science

- [Acceleration Calculator](https://yourhack.ai/acceleration-calculator): Free acceleration calculator. Find acceleration from the change in velocity over time using a equals delta v over t, or solve for velocity or time.
- [Capacitor Code Calculator](https://yourhack.ai/capacitor-code-calculator): Free capacitor code calculator. Enter a 3 digit ceramic capacitor code like 104 and get the capacitance in picofarads, nanofarads and microfarads.
- [Decibel (dB) Calculator](https://yourhack.ai/decibel-calculator): Free decibel calculator. Convert a power or amplitude ratio to decibels and back, using 10 log for power and 20 log for voltage or amplitude ratios.
- [Density Calculator](https://yourhack.ai/density-calculator): Free density calculator. Solve for density, mass, or volume using density equals mass over volume. Enter any two values and get the third instantly.
- [Force Calculator (F = ma)](https://yourhack.ai/force-calculator): Free force calculator using Newton's second law. Solve for force, mass, or acceleration with F equals m times a. Enter any two and get the third.
- [Gravitational Potential Energy Calculator](https://yourhack.ai/potential-energy-calculator): Free gravitational potential energy calculator. Compute PE from mass, gravity and height using PE equals m g h, or solve for any missing value.
- [Half-Life Calculator](https://yourhack.ai/half-life-calculator): Free half-life calculator. Find the remaining amount of a decaying substance after a given time, or work out its half-life from an amount and elapsed time.
- [Ideal Gas Law Calculator](https://yourhack.ai/ideal-gas-law-calculator): Free ideal gas law calculator. Solve PV equals nRT for pressure, volume, moles or temperature. Enter any three values using SI units and get the fourth.
- [Kinetic Energy Calculator](https://yourhack.ai/kinetic-energy-calculator): Free kinetic energy calculator. Compute kinetic energy from mass and velocity, or solve for mass or speed, using KE equals one half m v squared.
- [Molar Mass Calculator](https://yourhack.ai/molar-mass-calculator): Free molar mass calculator. Type a chemical formula like H2O or Ca(OH)2 and get its molar mass in grams per mole with a per element breakdown.
- [Molarity Calculator](https://yourhack.ai/molarity-calculator): Free molarity calculator. Solve for molar concentration, moles of solute, or solution volume using M equals moles divided by liters. Enter any two.
- [Ohm's Law Calculator](https://yourhack.ai/ohms-law-calculator): Free Ohm's law calculator. Enter any two of voltage, current, resistance or power and instantly solve for the other two using V=IR and P=VI.
- [Percent Error Calculator](https://yourhack.ai/percent-error-calculator): Free percent error calculator. Compare a measured value against the true value and get the absolute error and percent error for lab reports instantly.
- [pH Calculator](https://yourhack.ai/ph-calculator): Free pH calculator. Convert between hydrogen ion concentration and pH, find pOH and hydroxide concentration, and classify a solution as acid or base.
- [Projectile Range Calculator](https://yourhack.ai/projectile-range-calculator): Free projectile motion calculator. Enter launch speed and angle to find range, maximum height and flight time for a projectile on level ground.
- [Resistor Color Code Calculator](https://yourhack.ai/resistor-color-code-calculator): Free resistor color code calculator. Pick the bands on a 4, 5 or 6 band resistor and read the resistance value, tolerance and temperature coefficient.
- [Scientific Notation Converter](https://yourhack.ai/scientific-notation-converter): Free scientific notation converter. Convert any decimal number to scientific and E notation, or expand scientific notation back to a plain decimal.
- [Significant Figures Counter](https://yourhack.ai/significant-figures-counter): Free significant figures counter and rounder. Count the sig figs in any number and round it to a chosen number of significant figures instantly.
- [Specific Heat Calculator](https://yourhack.ai/specific-heat-calculator): Free specific heat calculator. Solve the heat equation Q equals m c delta T for heat energy, mass, specific heat or temperature change. Enter any three.
- [Speed Distance Time Calculator](https://yourhack.ai/speed-distance-time-calculator): Free speed distance time calculator. Solve for speed, distance or time using speed equals distance over time. Enter any two values and get the third.
- [Torque Calculator](https://yourhack.ai/torque-calculator): Free torque calculator. Compute torque from force, lever arm length and angle using tau equals force times radius times the sine of the angle.
- [Voltage Divider Calculator](https://yourhack.ai/voltage-divider-calculator): Free voltage divider calculator. Enter the input voltage and two resistor values to find the output voltage using Vout equals Vin times R2 over R1 plus R2.
- [Wavelength Frequency Converter](https://yourhack.ai/wavelength-frequency-converter): Free wavelength to frequency converter. Convert between wavelength and frequency for light or any wave using c equals lambda times f. Set the wave speed.
- [Weight on Other Planets Calculator](https://yourhack.ai/gravity-weight-on-planets): Free weight on planets calculator. Enter your weight on Earth to see what you would weigh on the Moon, Mars, Jupiter and every planet in the solar system.

### Math

- [Arithmetic Series Sum Calculator](https://yourhack.ai/arithmetic-series-calculator): Free arithmetic series calculator. Sum an arithmetic sequence from its first term, common difference and length, or find the nth term instantly.
- [Base Converter (Any Base 2 to 36)](https://yourhack.ai/base-converter-any): Free base converter for any radix from 2 to 36. Convert a number between binary, octal, decimal, hex and any custom base with one entry.
- [Decimal to Fraction Converter](https://yourhack.ai/decimal-to-fraction): Free decimal to fraction converter. Turn any decimal into its exact simplified fraction, including repeating decimals, plus a mixed number form.
- [Distance Between Two Points Calculator](https://yourhack.ai/distance-between-two-points): Free distance between two points calculator. Use the distance formula to find the straight-line length between two coordinates, with the steps shown.
- [Exponent Calculator](https://yourhack.ai/exponent-calculator): Free exponent calculator. Raise any base to any power, including negative and fractional exponents, and see the exact or precise decimal result.
- [Factorial Calculator](https://yourhack.ai/factorial-calculator): Free factorial calculator. Compute n factorial for any non-negative integer, with exact big-integer results and no rounding for large inputs.
- [Fibonacci Sequence Generator](https://yourhack.ai/fibonacci-generator): Free Fibonacci sequence generator. Produce the first N Fibonacci numbers with exact big-integer values, plus the nth term and running sum.
- [Fraction to Decimal Converter](https://yourhack.ai/fraction-to-decimal): Free fraction to decimal converter. Turn any fraction into its decimal value and percentage, and see repeating digits marked clearly.
- [GCF of a List Calculator](https://yourhack.ai/gcf-of-list): Free greatest common factor calculator. Find the GCF of many numbers at once using the Euclidean algorithm, exact for very large values.
- [LCM of a List Calculator](https://yourhack.ai/lcm-of-list): Free LCM of a list calculator. Find the least common multiple of many numbers at once, using exact big-integer math so large results stay precise.
- [Logarithm Calculator](https://yourhack.ai/logarithm-calculator): Free logarithm calculator. Compute the log of any positive number in any base, including natural log and log base 10, with the exponent check shown.
- [Mean, Median, Mode and Range Calculator](https://yourhack.ai/mean-median-mode-calculator): Free mean, median, mode and range calculator. Paste a list of numbers and get all four measures of center and spread instantly, with the count and sum.
- [Midpoint Calculator](https://yourhack.ai/midpoint-calculator): Free midpoint calculator. Find the exact midpoint between two coordinates using the midpoint formula, averaging the x and y values.
- [Modulo Calculator](https://yourhack.ai/modulo-calculator): Free modulo calculator. Find the remainder of a division, plus the quotient and the true mathematical modulo, for any two numbers instantly.
- [Number to Words Converter](https://yourhack.ai/number-to-words): Free number to words converter. Spell any whole number in plain English, from zero up into the trillions, for checks, contracts and homework.
- [Percentage Increase and Decrease Calculator](https://yourhack.ai/percentage-increase-decrease-calculator): Free percentage increase and decrease calculator. Find the percent change between two numbers and the new value after applying a percentage.
- [Permutation and Combination Calculator](https://yourhack.ai/permutation-combination-calculator): Free permutation and combination calculator. Compute nPr and nCr for any n and r using exact big-integer math, with the factorial formulas shown.
- [Prime Factorization Calculator](https://yourhack.ai/prime-factorization): Free prime factorization calculator. Break any whole number into its prime factors and see the result in expanded and exponent form instantly.
- [Prime Number Checker](https://yourhack.ai/prime-number-checker): Free prime number checker. Enter any whole number and instantly see whether it is prime or composite, with its smallest factor when it is not.
- [Probability Calculator](https://yourhack.ai/probability-calculator): Free probability calculator. Find the probability of single and combined events, including AND, OR, and NOT, as a fraction, decimal and percentage.
- [Proportion Solver (Solve for X)](https://yourhack.ai/proportion-solver): Free proportion solver. Cross multiply to solve for the missing value in a proportion a over b equals c over x, with the work shown.
- [Ratio Simplifier](https://yourhack.ai/ratio-simplifier): Free ratio simplifier. Reduce any ratio to its simplest whole-number form and see the decimal equivalent, using the greatest common divisor.
- [Rounding Calculator (Decimals and Sig Figs)](https://yourhack.ai/rounding-calculator): Free rounding calculator. Round any number to a set number of decimal places, significant figures, or the nearest ten, hundred or thousand.
- [Scientific Notation to Decimal](https://yourhack.ai/scientific-notation-to-decimal): Free scientific notation converter. Switch between standard decimal numbers and scientific notation both ways, with the E-notation form shown too.
- [Slope Calculator (Two Points)](https://yourhack.ai/slope-calculator): Free slope calculator. Enter two points and get the slope, the line equation, the angle in degrees, and the y-intercept instantly.
- [Triangle Area Calculator (Heron Formula)](https://yourhack.ai/triangle-area-calculator): Free triangle area calculator. Find the area of any triangle from its three sides using Heron formula, or from a base and height, instantly.

### Finance

- [50/30/20 Budget Calculator](https://yourhack.ai/budget-50-30-20-calculator): Free 50/30/20 budget calculator. Split your monthly take home pay into needs, wants, and savings using the popular 50/30/20 budgeting rule.
- [Annuity Payment Calculator](https://yourhack.ai/annuity-payment-calculator): Free annuity payment calculator. Find the fixed periodic payment a lump sum can provide, or the payout from a present value over a set term.
- [Coast FIRE Calculator](https://yourhack.ai/coast-fire-calculator): Free Coast FIRE calculator. Find the amount you need invested today so compound growth alone funds retirement without adding another dollar.
- [Cost of Living Difference Calculator](https://yourhack.ai/cost-of-living-difference): Free cost of living calculator. Compare two cities by index and find the salary you need to keep the same standard of living after moving.
- [Debt Avalanche Calculator](https://yourhack.ai/debt-avalanche-calculator): Free debt avalanche calculator. Target the highest interest rate debt first to minimize total interest, and see your months to payoff and interest saved.
- [Debt Snowball Calculator](https://yourhack.ai/debt-snowball-calculator): Free debt snowball calculator. Order your debts smallest balance first, apply a monthly extra payment, and see your payoff order and months to debt free.
- [Discount and Tax Calculator](https://yourhack.ai/discount-and-tax-calculator): Free discount and tax calculator. Apply a percent discount then add sales tax to get the final checkout price, the amount saved, and the tax charged.
- [Dollar Cost Averaging Calculator](https://yourhack.ai/dollar-cost-averaging-calculator): Free dollar cost averaging calculator. Project a recurring investment growing at a steady return and see contributions versus interest earned.
- [Effective Hourly Rate Calculator](https://yourhack.ai/hourly-rate-from-monthly-salary): Free effective hourly rate calculator. Reveal what you truly earn per hour once commute and unpaid work hours are added to your paid time.
- [FIRE Number Calculator](https://yourhack.ai/fire-number-calculator): Free FIRE number calculator. Find how much you need invested to retire early using the 4 percent rule, plus years to reach financial independence.
- [Future Value Calculator](https://yourhack.ai/future-value-calculator): Free future value calculator. Find what a lump sum plus regular contributions grows to with compound interest over a set number of years.
- [Hourly to Salary Calculator](https://yourhack.ai/hourly-to-salary-calculator): Free hourly to salary calculator. Convert an hourly wage into an annual salary using your weekly hours and weeks worked per year.
- [Inflation Calculator](https://yourhack.ai/inflation-calculator): Free inflation calculator. See how much future buying power your money loses over time, or what an amount will be worth after years of inflation.
- [Lump Sum vs Payments Calculator](https://yourhack.ai/lump-sum-vs-payments-calculator): Free lump sum vs payments calculator. Compare taking a cash lump sum now against a stream of future payments using present value and a discount rate.
- [Present Value Calculator](https://yourhack.ai/present-value-calculator): Free present value calculator. Discount a future amount back to what it is worth today using a discount rate and a number of periods.
- [Raise Percentage Calculator](https://yourhack.ai/raise-percentage-calculator): Free raise calculator. Find your pay raise as a percentage and dollar amount, or work out your new salary from a given raise percentage.
- [Real Rate of Return Calculator](https://yourhack.ai/real-rate-of-return-calculator): Free real rate of return calculator. Convert a nominal investment return into the inflation adjusted real return using the exact Fisher equation.
- [Rule of 114 Calculator](https://yourhack.ai/rule-of-114-calculator): Free rule of 114 calculator. Estimate the years to triple your money at a given annual return, plus the rate needed to triple in a set time.
- [Salary to Hourly Calculator](https://yourhack.ai/salary-to-hourly-calculator): Free salary to hourly calculator. Convert an annual salary into an hourly wage based on your weekly hours and weeks worked per year.
- [Savings Rate Calculator](https://yourhack.ai/savings-rate-calculator): Free savings rate calculator. Find the percentage of your income you save each month and see how it compares to common financial independence targets.
- [Sinking Fund Calculator](https://yourhack.ai/sinking-fund-calculator): Free sinking fund calculator. Work out the monthly amount to set aside to reach a savings target by a deadline, with or without interest.
- [Take Home Pay Estimator](https://yourhack.ai/take-home-pay-estimator): Free take home pay estimator. Enter gross salary and deduction percentages to estimate net pay per year, month, and paycheck instantly.
- [Time to Reach Savings Goal Calculator](https://yourhack.ai/time-to-reach-savings-goal): Free savings timeline calculator. Find how many months and years it takes to reach a savings goal given your deposits and interest rate.
- [Tip and Split Calculator](https://yourhack.ai/tip-and-split-calculator): Free tip and split calculator. Add a tip, optionally round the total, and split the bill evenly across any number of people for a clean per person amount.

### Health & Fitness

- [Blood Alcohol Content Calculator](https://yourhack.ai/blood-alcohol-content-calculator): Free blood alcohol content estimator. Approximate BAC from drinks, weight, sex, and time using the Widmark formula, all in your browser.
- [BMI Prime Calculator](https://yourhack.ai/bmi-prime-calculator): Free BMI Prime calculator. See your BMI as a ratio to the upper healthy limit of 25, with category, computed instantly in your browser.
- [Body Surface Area Calculator](https://yourhack.ai/body-surface-area-calculator): Free body surface area calculator. Estimate BSA in square metres using the Mosteller and Du Bois formulas, side by side, in your browser.
- [Calorie Deficit Calculator](https://yourhack.ai/calorie-deficit-calculator): Free calorie deficit calculator. Enter maintenance calories and a target loss rate to see your daily deficit and adjusted intake, computed in your browser.
- [Calories to Kilojoules Converter](https://yourhack.ai/calories-to-kilojoules-converter): Free calories to kilojoules converter. Switch between food calories and kilojoules instantly, both directions, all in your browser.
- [Daily Water Intake in Ounces Calculator](https://yourhack.ai/daily-water-intake-oz-calculator): Free water intake calculator in ounces. Estimate daily fluid needs from body weight and activity, shown in ounces, cups, and litres, in your browser.
- [Lean Body Mass Calculator](https://yourhack.ai/lean-body-mass-calculator): Free lean body mass calculator. Estimate lean mass and fat mass from weight and body fat, or the Boer formula, all in your browser.
- [Macro Split Calculator](https://yourhack.ai/macro-split-calculator): Free macro split calculator. Turn your daily calorie target into protein, carb, and fat grams using a percentage split you choose, all in your browser.
- [Max Heart Rate Calculator](https://yourhack.ai/max-heart-rate-calculator): Free max heart rate calculator. Estimate your maximum heart rate from age using two proven formulas, side by side, all in your browser.
- [One Rep Max Multi Formula Calculator](https://yourhack.ai/one-rep-max-multi-formula-calculator): Free one rep max calculator with four formulas. Estimate your 1RM from weight and reps using Epley, Brzycki, Lombardi, and Lander in your browser.
- [Ovulation Window Calculator](https://yourhack.ai/ovulation-window-calculator): Free ovulation window calculator. Estimate your fertile window and likely ovulation day from your last period and cycle length, in your browser.
- [Ponderal Index Calculator](https://yourhack.ai/ponderal-index-calculator): Free ponderal index calculator. Compute the corpulence index using weight divided by height cubed, worked out instantly in your browser.
- [Pregnancy Week Calculator](https://yourhack.ai/pregnancy-week-calculator): Free pregnancy week calculator. Find your current gestational week, trimester, and days remaining from your last period, in your browser.
- [Protein Intake Calculator](https://yourhack.ai/protein-intake-calculator): Free daily protein intake calculator. Estimate grams of protein per day from your body weight and activity goal, worked out instantly in your browser.
- [Race Finish Time Predictor](https://yourhack.ai/race-finish-time-predictor): Free race time predictor. Estimate your finish time at a new distance from a recent race using the Riegel formula, computed in your browser.
- [Reps Per Minute Pace Calculator](https://yourhack.ai/pushup-pace-calculator): Free reps per minute calculator. Turn a total rep goal and time limit into a pace, sets, and rest plan for pushups or any exercise, in your browser.
- [Running Pace to Speed Converter](https://yourhack.ai/running-pace-to-speed-converter): Free running pace to speed converter. Turn minutes per kilometre or mile into km/h and mph, and back again, instantly in your browser.
- [Sleep Debt Calculator](https://yourhack.ai/sleep-debt-calculator): Free sleep debt calculator. Compare your recent sleep against a nightly goal to see your accumulated sleep debt for the week, in your browser.
- [Smoking Cost Calculator](https://yourhack.ai/smoking-cost-calculator): Free smoking cost calculator. See how much cigarettes cost you per week, month, year, and decade based on packs and price, in your browser.
- [Steps to Distance Calculator](https://yourhack.ai/steps-to-distance-calculator): Free steps to distance calculator. Convert your step count into kilometres and miles using your height or a custom stride, in your browser.
- [Target Heart Rate Zone Calculator](https://yourhack.ai/target-heart-rate-zone-calculator): Free target heart rate zone calculator. Get Karvonen training zones from your age and resting heart rate, calculated instantly in your browser.
- [VO2 Max Estimator](https://yourhack.ai/vo2-max-estimator): Free VO2 max estimator. Approximate your aerobic fitness from a one mile walk test or resting heart rate, calculated in your browser.
- [Waist to Height Ratio Calculator](https://yourhack.ai/waist-to-height-ratio-calculator): Free waist to height ratio calculator. Divide waist by height and see the healthy range guideline, worked out instantly in your browser.
- [Waist to Hip Ratio Calculator](https://yourhack.ai/waist-to-hip-ratio-calculator): Free waist to hip ratio calculator. Divide waist by hip measurement and see the WHO health category by sex, computed instantly in your browser.

### Education

- [Attendance Percentage Calculator](https://yourhack.ai/attendance-percentage-calculator): Calculate your attendance percentage from classes attended and total held, and see how many you can still miss to stay above a required minimum.
- [Class Rank Percentile Calculator](https://yourhack.ai/class-rank-percentile-calculator): Convert your class rank and class size into a percentile and top percent. Free class rank percentile calculator for high school and college.
- [College GPA Calculator](https://yourhack.ai/college-gpa-calculator): Free college GPA calculator with credit hours. Enter each course grade and credits to compute your college GPA on the standard 4.0 university scale.
- [Credit Hours to Study Time Calculator](https://yourhack.ai/credit-hours-calculator): Estimate weekly study hours and total workload from your enrolled credit hours using the standard two hours of study per credit guideline.
- [Exam Countdown Calculator](https://yourhack.ai/exam-countdown-calculator): Count down to your exam date and see days, weeks and study days left, plus suggested daily study time to cover your material in time.
- [Final Exam Grade Needed Calculator](https://yourhack.ai/final-exam-grade-calculator): Find the score you need on your final exam to hit your target grade. Enter your current grade, the target and the final worth to get the answer.
- [Grade Calculator](https://yourhack.ai/grade-calculator): Free weighted grade calculator by category. Enter your scores and the weight of each category to compute your overall course grade and letter.
- [Grade Curve Calculator](https://yourhack.ai/grade-curve-calculator): Apply a class curve to a raw score. Free grade curve calculator supporting flat point boost, square root curve and top score scaling methods.
- [Grade Impact Planner](https://yourhack.ai/effort-to-grade-planner): See how a future assignment score changes your overall grade before you submit it. Free grade impact planner using current grade and item weight.
- [High School GPA Calculator](https://yourhack.ai/high-school-gpa-calculator): Free high school GPA calculator on the 4.0 unweighted scale. Enter your class grades to instantly find your high school grade point average.
- [IB Diploma Points Calculator](https://yourhack.ai/ib-diploma-points-calculator): Add up your IB subject grades plus the extended essay and theory of knowledge bonus to get your total out of 45 and check if you pass the diploma.
- [Letter Grade Calculator](https://yourhack.ai/letter-grade-calculator): Convert a percentage score into a letter grade and 4.0 grade point instantly. Free percentage to letter grade calculator with a full scale table.
- [Pass or Fail Grade Calculator](https://yourhack.ai/pass-fail-calculator): Check if your score passes and how far you are from the passing mark. Free pass or fail calculator with a custom passing threshold for any test.
- [Percentage to 4.0 GPA Converter](https://yourhack.ai/ects-grade-converter): Convert a percentage grade into a 4.0 scale GPA value and letter grade. Free percentage to GPA converter for transcripts and study abroad applications.
- [Points Needed to Pass Calculator](https://yourhack.ai/points-needed-calculator): Work out how many more points you need to reach your target grade. Free points needed calculator using points earned out of total points possible.
- [Reading Assignment Time Estimator](https://yourhack.ai/reading-time-estimator): Estimate how long a reading assignment will take from page or word count, difficulty and your reading speed. Free study planner for students.
- [Semester GPA Calculator](https://yourhack.ai/semester-gpa-calculator): Free semester GPA calculator. Enter each class letter grade and credit hours for one term to get your semester grade point average on a 4.0 scale.
- [Spaced Repetition Interval Calculator](https://yourhack.ai/flashcard-interval-calculator): Generate spaced repetition review dates for a flashcard using a Leitner style schedule. Free spaced repetition interval calculator for studying.
- [Study Time Planner](https://yourhack.ai/study-time-planner): Split your available study hours across subjects by priority weight. Free study time planner that shows how many hours to give each subject per week.
- [Test Score Percentage Calculator](https://yourhack.ai/test-score-percentage-calculator): Convert correct answers out of total questions into a percentage and letter grade. Free instant test and quiz score calculator for students.
- [Weighted Average Grade Calculator](https://yourhack.ai/grade-average-by-weight): Average several grades where each has a different weight. Free weighted average grade calculator for combining tests, projects and homework fairly.
- [Weighted GPA Calculator](https://yourhack.ai/weighted-gpa-calculator): Free weighted GPA calculator for high school. Add course grades, credit hours and class level (regular, honors, AP or IB) to get your weighted GPA.

### Business

- [Average Order Value Calculator](https://yourhack.ai/average-order-value-calculator): Free average order value calculator. Divide total revenue by number of orders to find AOV instantly, right in your browser. No signup needed.
- [Break Even Units Calculator](https://yourhack.ai/break-even-units-calculator): Free break even units calculator. Enter fixed costs, price and variable cost per unit to find the units and revenue needed to break even.
- [Burn Rate and Runway Calculator](https://yourhack.ai/burn-rate-runway-calculator): Free burn rate and runway calculator. Enter cash, monthly spend and income to find net burn and how many months of runway remain.
- [CAC Payback Period Calculator](https://yourhack.ai/cac-payback-period-calculator): Free CAC payback period calculator. Find how many months it takes to recover acquisition cost from customer gross profit, right in your browser.
- [Churn Rate Calculator](https://yourhack.ai/churn-rate-calculator): Free churn rate calculator. Enter customers lost and starting customers to get churn rate and retention rate percent instantly in your browser.
- [Conversion Rate Calculator](https://yourhack.ai/conversion-rate-calculator): Free conversion rate calculator. Divide conversions by visitors to get your conversion rate percent, plus visitors needed per goal, in your browser.
- [Cost Plus Pricing Calculator](https://yourhack.ai/cost-plus-pricing-calculator): Free cost plus pricing calculator. Add material, labor and overhead, apply a markup, and get your selling price and profit per unit instantly.
- [Customer Acquisition Cost Calculator](https://yourhack.ai/customer-acquisition-cost-calculator): Free CAC calculator. Divide your sales and marketing spend by new customers to find customer acquisition cost instantly in your browser.
- [Customer Lifetime Value Calculator](https://yourhack.ai/customer-lifetime-value-calculator): Free LTV calculator. Enter average order value, purchase frequency, lifespan and margin to estimate customer lifetime value in your browser.
- [EBITDA Margin Calculator](https://yourhack.ai/ebitda-margin-calculator): Free EBITDA margin calculator. Enter revenue, expenses, depreciation and amortization to get EBITDA and EBITDA margin percent in your browser.
- [Employee Cost Calculator](https://yourhack.ai/employee-cost-calculator): Free employee cost calculator. Add salary, payroll taxes, benefits and overhead to find the true annual and hourly cost of an employee.
- [Freelance Hourly Rate Calculator](https://yourhack.ai/freelance-hourly-rate-calculator): Free freelance hourly rate calculator. Turn a target salary, expenses and billable hours into the hourly rate you must charge, in your browser.
- [Gross Profit Calculator](https://yourhack.ai/gross-profit-calculator): Free gross profit calculator. Enter revenue and cost of goods sold to get gross profit and gross margin percent instantly in your browser.
- [Invoice Total Calculator](https://yourhack.ai/invoice-total-calculator): Free invoice total calculator. Add line items, apply a discount and tax, and get the subtotal, tax and grand total instantly in your browser.
- [LTV to CAC Ratio Calculator](https://yourhack.ai/ltv-to-cac-ratio-calculator): Free LTV to CAC ratio calculator. Compare lifetime value against acquisition cost to judge if your unit economics are healthy, all in your browser.
- [Margin vs Markup Calculator](https://yourhack.ai/margin-vs-markup-calculator): Convert between margin and markup. Enter one percentage to see the other, plus the price built from your cost. Fast, browser side, no signup.
- [Markup Calculator](https://yourhack.ai/markup-calculator): Free markup calculator. Enter cost and markup percent to get the selling price, profit and resulting margin instantly in your browser.
- [MRR and ARR Calculator](https://yourhack.ai/mrr-arr-calculator): Free MRR and ARR calculator. Turn subscribers and average price into monthly and annual recurring revenue instantly, all in your browser.
- [Net Profit Margin Calculator](https://yourhack.ai/net-profit-margin-calculator): Free net profit margin calculator. Enter revenue and total expenses to get net profit and net margin percent instantly, all in your browser.
- [Net Revenue Retention Calculator](https://yourhack.ai/net-revenue-retention-calculator): Free net revenue retention calculator. Enter starting MRR, expansion, contraction and churn to get NRR and GRR percent in your browser.
- [Operating Margin Calculator](https://yourhack.ai/operating-margin-calculator): Free operating margin calculator. Enter revenue, cost of goods and operating expenses to get operating income and margin percent in your browser.
- [Revenue Growth Rate Calculator](https://yourhack.ai/revenue-growth-rate-calculator): Free revenue growth rate calculator. Compare two periods to get percent growth and the absolute change in revenue instantly in your browser.

### Cooking

- [Air Fryer Conversion Calculator](https://yourhack.ai/air-fryer-conversion-calculator): Free air fryer conversion calculator. Convert conventional oven temperature and time to air fryer settings by lowering the temp and shortening the time.
- [Baker Hydration Percentage Calculator](https://yourhack.ai/baker-hydration-calculator): Free baker hydration calculator. Compute dough hydration percentage from flour and water weights, or solve for the water needed to hit a target.
- [Baking Pan Size Converter](https://yourhack.ai/baking-pan-size-converter): Free baking pan size converter. Adjust a recipe for a different pan by comparing pan area and volume, so you scale batter to avoid over or underfilling.
- [Bread Water Temperature Calculator](https://yourhack.ai/bread-water-temperature-calculator): Free bread water temperature calculator. Find the water temperature to hit a target dough temperature using flour temp, room temp, and friction.
- [Brine Ratio Calculator](https://yourhack.ai/brine-ratio-calculator): Free brine ratio calculator. Get the salt and water for a wet brine at a chosen concentration, so poultry and pork come out juicy and seasoned.
- [Butter Converter](https://yourhack.ai/butter-converter): Free butter converter. Convert butter between US sticks, tablespoons, cups, grams, and ounces instantly, using standard stick weights for recipes.
- [Calories Per Serving Calculator](https://yourhack.ai/calorie-per-serving-calculator): Free calories per serving calculator. Add up the calories of every recipe ingredient and divide by servings to get calories per portion instantly.
- [Cocktail Ratio Calculator](https://yourhack.ai/cocktail-ratio-calculator): Free cocktail ratio calculator. Scale a spirit to sweet to sour ratio to any drink volume or number of servings, in ounces or milliliters.
- [Coffee to Water Ratio Calculator](https://yourhack.ai/coffee-to-water-ratio-calculator): Free coffee to water ratio calculator. Enter your brew ratio and cups to get exact grams of coffee and water for pour over, French press, and drip.
- [Cups to Grams Converter](https://yourhack.ai/cups-to-grams-converter): Free cups to grams converter. Convert cups to grams by ingredient using common baking densities for flour, sugar, butter, and more, live as you type.
- [Egg Size Substitution Calculator](https://yourhack.ai/egg-size-substitution): Free egg size substitution calculator. Convert a recipe between small, medium, large, and extra-large eggs by liquid volume so ratios stay correct.
- [Grill Temperature Doneness Guide](https://yourhack.ai/grill-temperature-guide): Free grill doneness guide. Look up safe and target internal temperatures for beef, chicken, pork, fish, and burgers in Celsius and Fahrenheit.
- [Ingredient Substitution Finder](https://yourhack.ai/ingredient-substitution-finder): Free ingredient substitution finder. Search a common ingredient and get proven kitchen substitutes with the right amounts for baking and cooking.
- [Meat Roasting Time Calculator](https://yourhack.ai/meat-cooking-time-calculator): Free meat roasting time calculator. Estimate oven roasting time by weight and doneness for beef, pork, and lamb, with target internal temperatures.
- [Oven Temperature Converter](https://yourhack.ai/oven-temperature-converter): Free oven temperature converter. Convert between Celsius, Fahrenheit, gas mark, and fan (convection) oven settings instantly as you type.
- [Recipe Scaler](https://yourhack.ai/recipe-scaler): Free recipe scaler. Multiply or divide any recipe by a factor or by target servings and it rescales every ingredient line automatically.
- [Slow Cooker Time Converter](https://yourhack.ai/slow-cooker-converter): Free slow cooker time converter. Convert conventional oven or stovetop cooking time to slow cooker low and high settings for stews, roasts, and soups.
- [Sourdough Starter Feeding Calculator](https://yourhack.ai/sourdough-starter-calculator): Free sourdough starter calculator. Work out feeding amounts from a ratio like 1:2:2 and starter weight, giving grams of starter, flour, and water.
- [Turkey Cooking Time Calculator](https://yourhack.ai/turkey-cooking-time-calculator): Free turkey cooking time calculator. Get roasting time and thaw time by turkey weight for a stuffed or unstuffed bird, with a safe internal temperature.
- [Yeast Converter](https://yourhack.ai/yeast-converter): Free yeast converter. Convert between active dry, instant, and fresh (cake) yeast by weight using standard baking ratios, updating live as you type.

## Why yourhack.ai

- **Private by design.** Client-side only. Your text, files, keys and payloads never leave your device.
- **No friction.** No sign-up, no paywall, no ads, no cookie wall.
- **Fast.** Static, cached, instant. Each tool is its own page.
- **Linkable.** Every tool has a clean URL you can bookmark, share, or cite.

## Contributing / feedback

Found a bug or want a tool added? Open an issue. This repo tracks the public catalog; the tools are served from yourhack.ai.

## License

[MIT](./LICENSE). The catalog and clients in this repo are free to use.
