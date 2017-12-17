## Simple Rating Stars

A display-only React component to render basic star-ratings.

Install via NPM:

`npm install simple-rating-stars`

Usage:

```
import Stars from 'simple-rating-stars';

const SomeStars = () => (
  <Stars
    stars={4}
    outOf={5}
    full={'#d00'}
    empty={'#E1F1FF'}
    stroke={'#369'}
  />
);
```

* `stars` (required): A number from 0 to `outOf`. The component does not currently handle fractional stars.
* `outOf` (required): A number, 2 or greater. The component does not currently handle fractional stars.
* `full`: A hexadecimal color<sup>1</sup> used as an active/colored star.<sup>2</sup> If omitted, the component throws an Error in the console but the "full" star will render with a default orange color.
* `empty`: A hexadecimal color<sup>1</sup> used as an inactive/empty star.<sup>2</sup> If omitted, the component throws an Error in the console but the "empty" star will render with a default, white.
* `stroke`: A hexadecimal color<sup>1</sup>; the outline color of the star<sup>3</sup>. If omitted, the component throws an Error in the console but the star's "stroke" will render in black.

Most errors are caught by the component's propTypes. Certain logical errors (requesting "5 stars out of 3"; setting the maximum `outOf` to a number less than 2) will return a string message in the app. Incorrect hexadecimal color values will throw Errors in the browser console and the component's defaultProps colors (orange, black, white) will be substituted as explained above.

1. CSS hex colors must be text strings beginning with an octothorpe; see example usage above. They may be 3- or 6-characters, and are case-insensitive.
1. The stars are SVG elements; depending on the numbers passed, the color indicated in either `full` or `empty` is passed to the SVG element's "fill" property.
1. See fn 2. The `stroke` prop is simply passed through to the SVG element's "stroke" property.
