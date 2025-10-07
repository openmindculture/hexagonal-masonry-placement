# Hexagonal Masonry Placement

## Description

Use the [hexagonal-masonry-placement](https://www.npmjs.com/package/hexagonal-masonry-placement) frontend web layout utility to move DOM item positions to make hexagonal shapes fit more closely in a masonry-like grid layout, like honeycomb tiling, arranging items in a hexagonal pattern, minimizing gaps.

- `npm install hexagonal-masonry-placement`

The utility requires HTML markup and CSS styles similar to the example code. You can use the provided base styles in `index.css` or provide your own.

The default usage works on all DOM items with a class name `custom-grid-has-row-behavior` after `DOMContentLoaded` and after each window resize. These event handlers are initialized by `initMasonryLayouts` and removed by `removeMasonryEventListeners`.

You can also call `refineAllMasonryLayouts` directly or use the optional `refineMasonryLayout` function to pass a DOM element object reference or its ID string.

## Usage

Default use case:

```javascript
  import { initMasonryLayouts } from 'hexagonal-masonry-placement';
  initMasonryLayouts();
```

```html
<ul class="custom-grid-has-row-behavior relative flex flex-wrap">
    <li>
        <div class="custom-hex-tile"></div>
    </li>
    <li>
        <div class="custom-hex-tile"></div>
    </li>
</ul>
```

See examples at https://github.com/openmindculture/hexagonal-masonry-placement/examples/index.html

### Public methods

#### refineMasonryLayout

* refine masonry layout element
  * add `.custom-shifted` class to list items where necessary
* @param {string} gridId (optional)
* @param {HTMLElement} grid (optional)
* @returns {void}

#### refineAllMasonryLayouts

* refine all masonry layouts with `.custom-grid-has-row-behavior`
* @returns {void}

#### initMasonryLayouts

* initialize event listeners:
  * refineAllMasonryLayouts on DOMContentLoaded
  * refineAllMasonryLayouts on window resize
* @returns {void}

#### removeMasonryEventListeners

* remove event listeners
* @returns {void}


## Development

You can contribute to [hexagonal-masonry-placement on GitHub](https://github.com/openmindculture/hexagonal-masonry-placement/).

Write TypeScript, CSS, and package definition in `src`, adjust this `README` and run

 - `npm run build`

to compile and copy all necessary files to the `lib` folder.

### Local Validation

Use linting and static code analysis in your IDE or run `eslint` and `stylelint` on the command line.

You can use `npm link` to use the package in another project within the same local file system, because the `"main"` entry in the top-level `package.json` points to `lib/index.js` (redundantly).

Run
- `npm link` in this repository's root directory
- `npm link hexagonal-masonry-placment` in the project that wants to use it.

After fixing or modification, run
- `npm run build` in this repository, and
- `npm link hexagonal-masonry-placment` again in the project that wants to use it.

When it works, proceed with the official recommeneded validation steps like
- `cd lib`
- `npm publish --dry-run`
- `npm pack --dry-run`

and make sure to
- `npm login` etc. as described in the official publishing documentation.

Then publish to the npmjs repository.
