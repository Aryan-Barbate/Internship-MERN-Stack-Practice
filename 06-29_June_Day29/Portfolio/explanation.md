# Technical Explanation of the 3D Portfolio

This document provides a step-by-step explanation of how the 3D portfolio website functions technically.

## 1. Structure & Layout (HTML)
The core structure of the portfolio is built using semantic HTML within a `div.wrapper` that acts as the perspective container. 
- The `.book` container acts as the physical binding of the book.
- `.book-page` elements represent the individual pages, divided into `.page-left` (for the profile) and `.page-right` (for the flippable pages).
- Inside `.page-right` elements, we have `.page-front` and `.page-back` to construct the 3D double-sided pages.

## 2. 3D Styling & Animation (CSS)
The magic of the 3D book effect relies heavily on CSS 3D transforms:
- `perspective`: Applied to the `.wrapper` to give depth to the scene.
- `transform-style: preserve-3d`: Ensures that child elements (`.page-front` and `.page-back`) maintain their 3D positioning relative to their parent (`.book-page`).
- `transform-origin: left`: Allows the `.page-right` pages to rotate along their left edge, mimicking a book spine.
- `rotateY()`: The actual turning effect is achieved by applying a `rotateY(-180deg)` when the `.turn` class is toggled via JavaScript.

## 3. Interaction & Page Turning (JavaScript)
The JavaScript handles user interaction and controls the CSS classes to trigger animations.

### Button Clicks
- `querySelectorAll(".nextprev-btn")`: We grab all next and previous buttons.
- On click, we find the associated page using the `data-page` attribute (e.g., `turn-1`).
- We toggle the `.turn` class. If the page is turning "forward", we add `.turn` and adjust its `z-index` so pages stack correctly visually. If turning "backward", we remove `.turn`.

### Scroll Support
- A `wheel` event listener is attached to the `window`.
- When scrolling down (`e.deltaY > 0`), the script finds the first unturned page (`!pageTurn.classList.contains("turn")`) and programmatically clicks its "Next" button.
- When scrolling up (`e.deltaY < 0`), it finds the last turned page and programmatically clicks its "Previous" button.
- A boolean `isScrolling` flag alongside `setTimeout()` acts as a debounce, preventing multiple rapid page turns from a single scroll action.

### Opening Animation
On initial load, `setTimeout` functions execute sequentially to create an opening sequence. 
1. The right cover opens.
2. The left profile page is revealed.
3. The internal pages quickly flip open to their starting positions.

This combination of HTML structure, CSS 3D capabilities, and event-driven JavaScript creates a highly engaging interactive experience.
