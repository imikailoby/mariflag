# @imikailoby/mariflag

[International Maritime Signal Flags](https://en.wikipedia.org/wiki/International_maritime_signal_flags) SVG generator.

![example](https://github.com/user-attachments/assets/20b56f3f-658a-4d05-9ab9-cadfae31677f)<svg xmlns="http://www.w3.org/2000/svg" width="496px" height="48px"><svg><g transform="translate(0, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path fill="#002BFD" d="M0 0h48v48H0z"></path><path fill="#fff" d="m-5.108-10.764 63.872 63.872-5.657 5.657-63.872-63.873z"></path><path fill="#fff" d="M58.765-5.108-5.107 58.764l-5.657-5.656 63.872-63.873z"></path><path stroke="#000" d="M.5.5h47v47H.5z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z"></path></clipPath></defs></svg></g></svg><svg><g transform="translate(64, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"></path><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"></path><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"></path></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"></path></svg></g></svg><svg><g transform="translate(128, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FF1000" d="M48 0v48H0V0z"></path><path fill="#FFFC00" d="M18 48V0h12v48z"></path><path fill="#FFFC00" d="M0 18h48v12H0z"></path><path stroke="#000" d="M.5.5h47v47H.5z"></path></svg></g></svg><svg><g transform="translate(192, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFC00" d="M0 0h48v48H0z"></path><path stroke="#000" d="M.5.5h47v47H.5z"></path><circle cx="24" cy="24" r="12" fill="#000"></circle></svg></g></svg><svg><g transform="translate(256, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h48v48H0z"></path><path fill="#FF1000" d="m24 0 24 24-24 24L0 24z"></path><path stroke="#000" d="M.5.5h47v47H.5z"></path></svg></g></svg><svg><g transform="translate(320, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFC00" d="M48 0v48H0V0z"></path><path stroke="#000" d="M.5.5h47v47H.5z"></path><path fill="#000" d="M48 0v24H24V0zM24 24v24H0V24z"></path></svg></g></svg><svg><g transform="translate(384, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h24v48H0z"></path><path d="M24 0h24L36 24l12 24H24V0Z" fill="#002CFF"></path><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0v48h48L36 24 48 0H24Z"></path></mask><path d="M0 0v-1h-1v1h1Zm0 48h-1v1h1v-1Zm48 0v1h1.618l-.724-1.447L48 48ZM36 24l-.894-.447-.224.447.224.447L36 24ZM48 0l.894.447L49.618-1H48v1ZM0 1h24v-2H0v2Zm1 47V0h-2v48h2Zm23-1H0v2h24v-2Zm24 0H24v2h24v-2ZM35.106 24.447l12 24 1.788-.894-12-24-1.788.894Zm12-24.894-12 24 1.788.894 12-24-1.788-.894ZM24 1h24v-2H24v2Z" fill="#000" mask="url(#a)"></path></svg></g></svg><svg><g transform="translate(448, 0)"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFC00" d="M8 0v48H0V0zM24 0v48h-8V0zM40 0v48h-8V0z"></path><path fill="#002BFD" d="M16 0v48H8V0zM32 0v48h-8V0zM48 0v48h-8V0z"></path><path stroke="#000" d="M.5.5h47v47H.5z"></path></svg></g></svg></svg>



## Installation

```zsh
# via yarn
yarn add @imikailoby/mariflag

# via npm
npm install @imikailoby/mariflag
```

## Usage

1. Import the `generateMarineCode` function into your project.
2. Provide the necessary string input **(only A-Z characters are supported)**.
3. ... and you're done!

Example:

```ts
import { generateMarineCode } from '@imikailoby/mariflag'; // Import the main function

const helloSvg = generateMarineCode('Hello'); // Provide the required text

// ... Use the generated SVG as needed.
```
