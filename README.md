# Chaptale Editor ✍️

A lightweight, zero-dependency, high-performance WYSIWYG HTML editor component built with Vanilla JavaScript and Web Components (`<chaptale-editor>`).

Designed as a modern, clean, and blazingly fast alternative to bloated legacy editors like TinyMCE and CKEditor.

This editor is used in chaptale.app story platform.

&nbsp;

---

## Highlights

- **Zero Dependencies:** Pure Vanilla JS, no build step required to run.
- **First-Class RTL & LTR Support:** Native bidirectional editing designed from the ground up for Arabic, Hebrew, Persian, Urdu, and all LTR languages.
- **Clean Semantic HTML:** Produces standard, pristine HTML tags (`<p>`, `<h2>`, `<strong>`, `<em>`, `<ul>`, `<blockquote>`) without messy inline styling or bloat.
- **HTML Source Code Mode:** Instantly toggle between visual editing and direct HTML code view.
- **Minimalist UI:** Clean toolbar with headings, text styles, alignment, indentation, lists, links, footnotes, and separators.
- **Web Component Standard:** Reusable anywhere as `<chaptale-editor>` in plain HTML, Angular, Vue, React, or Svelte.
- **MPL 2.0 Licensed:** Weak copyleft license allowing free commercial adoption while ensuring core editor improvements stay open.

&nbsp;

---

## Quick Start

```html
<!-- Icons: FontAwesome 6 for toolbar icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Editor Styles -->
<link rel="stylesheet" href="chaptale-editor.css">

<!-- Load Chaptale Editor -->
<script src="chaptale-editor.js"></script>
```

&nbsp;



### 2. Add the Tag
```html
<!-- LTR Example -->
<chaptale-editor dir="ltr" placeholder="Start typing..."></chaptale-editor>

<!-- RTL Example -->
<chaptale-editor dir="rtl" placeholder="Type here in RTL..."></chaptale-editor>
```

&nbsp;
### 3. JavaScript API
```javascript
const editor = document.querySelector('chaptale-editor');

// Get HTML content
const content = editor.value;

// Set HTML content
editor.value = '<p>Hello <strong>World</strong>!</p>';

// Listen for changes
editor.addEventListener('input', () => {
  console.log('Content changed:', editor.value);
});
```
&nbsp;

---


## License

This project is licensed under the **Mozilla Public License 2.0 (MPL 2.0)**. See the [LICENSE](LICENSE) file for details.