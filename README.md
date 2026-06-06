# @imikailoby/mariflag

Mariflag is a versatile SVG generator that converts text sequences into a series of icons. While originally inspired by
[maritime signal flags](https://en.wikipedia.org/wiki/International_maritime_signal_flags), this package also allows you
to provide your own custom SVG icons for each letter, enabling you to encode text into various visual forms, limited only
by your imagination (and the available SVG icons of course).

For example, you can create visualizations inspired by [semaphore signals](https://en.wikipedia.org/wiki/Optical_telegraph),
encode text into designs similar to [Morse code](https://en.wikipedia.org/wiki/Morse_code)
or [Braille](https://en.wikipedia.org/wiki/Braille), and more.

![example](https://github.com/user-attachments/assets/20b56f3f-658a-4d05-9ab9-cadfae31677f)

**[▶ Try the live demo](https://imikailoby.github.io/mariflag/)**

## Installation

```zsh
# via yarn
yarn add @imikailoby/mariflag

# via npm
npm install @imikailoby/mariflag
```

## Usage

1. Import the `generateSvg` function into your project.
2. Provide the necessary string input **(only A-Z characters are supported)** and configuration _(optional)_.
3. ... and you're done!

Example:

```ts
import { generateSvg } from '@imikailoby/mariflag'; // Import the main function

const helloSvg = generateSvg('Hello'); // Provide the required text

// ... Use the generated SVG as needed.
```

The package ships both ESM and CommonJS builds with bundled TypeScript types, so `import` and `require` both work out of the box.

## Configuration

Provide a custom configuration as a second argument to override the default parameters. The configuration object is typed as `MariflagConfig`, which is exported for convenience. Example:

```ts
import { generateSvg, type MariflagConfig } from '@imikailoby/mariflag';

const config: MariflagConfig = {
  orientation: 'horizontal',
  offset: 16,
  customIcons: {
    M: '<svg width="60" height="120">...</svg>',
  },
};

generateSvg('string', config);
```

Supported parameters:

| Parameter              | Values                                 | Default          | Description                      |
| ---------------------- | -------------------------------------- | ---------------- | -------------------------------- |
| `orientation` (string) | 'horizontal'\|'vertical'               | **'horizontal'** | Specifies the flag's orientation |
| `offset` (number)      | non-negative integers (including zero) | **16**           | Specifies the offset in pixels   |
| `customIcons` (object) | _\*Check description below_            | N/A              | Provide custom icons per letter  |

## Custom icons

You can provide the custom icons associated with each letter according to your preferences. To do this, pass a
`customIcons` object in the configuration, where each key is **a letter from A-Z** and the corresponding value is an
SVG string. You can replace all default icons or just specific letters.

#### Custom icon requirements

The SVG must include both `width` and `height` attributes with **values greater than 0**. These dimensions are used to
calculate the overall size of the output SVG, as well as the spacing between icons, etc. If any of these attributes are
missing or have invalid values, the default icon for that letter will be used instead.

Example:

```ts
{
  A: '<svg width="60" height="120">...</svg>', // valid custom icon
  B: '<svg width="60">...</svg>', // invalid (no height)
  C: '<svg>...</svg>', // invalid (no width and height)
  D: '<svg width="60" height="0">...</svg>', // invalid (height is 0)
  ...
}
```

You can view examples of the default icons [here](https://github.com/imikailoby/mariflag/blob/main/src/constants/defaultIcons.ts).
