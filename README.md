# Chaptale Editor (`<chaptale-editor>`)

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](LICENSE)
[![Dependencies: Zero](https://img.shields.io/badge/Dependencies-Zero-brightgreen.svg)]()
[![Standard: Web Components](https://img.shields.io/badge/Standard-Web%20Components-orange.svg)]()
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-yellow.svg)]()
[![Platform: chaptale.app](https://img.shields.io/badge/Platform-chaptale.app%20(in%20dev)-9cf.svg)](https://chaptale.app)

<br>

---

### A Note on Why Chaptale Editor Exists

This editor powers the **[chaptale.app](https://chaptale.app)** story platform *(currently in active development)*.

For modern web applications, rich text editing should be fast, seamless, and predictable. Yet mainstream WYSIWYG editors (TinyMCE, CKEditor, Froala) are notoriously heavy, weigh down bundle sizes, and come with intricate build steps, vendor lock-in, or restrictive commercial pricing.

**Chaptale Editor** was built with a clear philosophy: an ultra-lightweight, high-performance HTML editor packaged as a standard **Custom Element (`<chaptale-editor>`)** using pure Vanilla JavaScript. It delivers crisp typography, first-class bidirectional (RTL & LTR) support, a standalone image modal, and zero dependencies &mdash; powering storytellers and authors directly on [chaptale.app](https://chaptale.app) while remaining ready to drop into any web application or framework.

<br>

---

## Key Features

- **Zero Dependencies:** Pure Vanilla JavaScript Web Component. No npm dependencies, no bundler requirements, zero build lock-in.
- **First-Class RTL & LTR Support:** Native bidirectional editing engineered from the ground up for Hebrew, Arabic, Persian, and all Latin/LTR languages.
- **Pristine Semantic HTML:** Emits clean, well-formed HTML (`<p>`, `<h2>`, `<h3>`, `<strong>`, `<em>`, `<ul>`, `<blockquote>`, `<img>`) without messy inline styling or framework bloat.
- **Tight Typography:** Web-standard paragraph flow with zero margin collapse and strict line-height tuning (`1.25`) for clean, natural reading and writing.
- **Dual Visual & Code Modes:** Instant, flicker-free toggle between visual WYSIWYG editing and direct raw HTML source code view.
- **Standalone Image Modal:** Built-in modal supporting local image files (Base64/Data URL), direct web image URLs, and an active session gallery &mdash; with an optional custom upload handler hook (`editor.onUploadImage`).
- **Framework Agnostic:** Standard Web Component that integrates seamlessly into Vanilla HTML, React, Angular, Vue, Svelte, or backend templates (PHP, Node, Python, Rails).
- **MPL 2.0 Licensed:** Free for commercial and private use while preserving open collaboration on the editor itself.

<br>

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                 <chaptale-editor> Component                 │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                     Toolbar Engine                    │  │
│  │   • Headings (P, H1, H2, H3)                          │  │
│  │   • Inline Formatting (Bold, Italic, Strikethrough)   │  │
│  │   • Paragraph Flow (Alignment, RTL/LTR Direction)     │  │
│  │   • Lists, Blockquotes, Footnotes, Horizontal Rules   │  │
│  │   • Links & Standalone Image Inserter Modal           │  │
│  │   • Direct Visual / HTML Source Code Toggle           │  │
│  └───────────────────────────┬───────────────────────────┘  │
│                              │                              │
│  ┌───────────────────────────┴───────────────────────────┐  │
│  │                 Visual Editing Surface                │  │
│  │   • Native contenteditable Container                  │  │
│  │   • Tight Typography (line-height: 1.25, margin: 0)   │  │
│  │   • Live Selection & Caret Restoration Protection     │  │
│  │   • Bidirectional Inherited Layout (dir="rtl|ltr")    │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

<br>

---

## Quick Start

### 1. Include Resources

Include FontAwesome for toolbar icons, the editor stylesheet, and the JavaScript web component:

```html
<!-- FontAwesome 6 (Icons) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Chaptale Editor Styles -->
<link rel="stylesheet" href="chaptale-editor.css">

<!-- Chaptale Editor Web Component -->
<script src="chaptale-editor.js"></script>
```

<br>

### 2. Add the Custom Element

Place `<chaptale-editor>` directly into your markup:

```html
<!-- LTR English -->
<chaptale-editor dir="ltr" placeholder="Start typing your story..."></chaptale-editor>

<!-- RTL Hebrew / Arabic -->
<chaptale-editor dir="rtl" placeholder="התחילו לכתוב כאן..."></chaptale-editor>
```

<br>

### 3. JavaScript API & Events

Control the editor programmatically via standard DOM properties and events:

```javascript
const editor = document.querySelector('chaptale-editor');

// Read clean HTML content
console.log(editor.value);

// Set HTML content
editor.value = '<p>Welcome to <strong>Chaptale Editor</strong>!</p>';

// Listen for content modifications in real-time
editor.addEventListener('input', () => {
  console.log('Document updated:', editor.value);
});

// Optional: Hook custom image upload handler (e.g. upload to S3 / Backend)
editor.onUploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await fetch('/api/upload', { method: 'POST', body: formData });
  const data = await response.json();
  return data.url; // Returns the public image URL to be inserted
};
```

<br>

---

## Attributes & Properties

| Attribute / Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `""` | The HTML content of the editor. |
| `dir` | `string` | `"ltr"` | Text direction: `"rtl"` for Hebrew/Arabic or `"ltr"` for English. |
| `placeholder` | `string` | `""` | Placeholder text displayed when the editor surface is empty. |
| `onUploadImage` | `function` | `null` | Optional async callback `(file: File) => Promise<string>` for custom image uploads. |

<br>

---

## Framework Integration

Because Chaptale Editor is a standard **W3C Custom Element**, no wrapper libraries are required:

- **React:** Bind with `ref` to assign `editorRef.current.value` and listen to `'input'`.
- **Angular:** Include `CUSTOM_ELEMENTS_SCHEMA` and bind `[dir]="direction"` and `(input)="onContentChange($event)"`.
- **Vue:** Use directly in templates with `<chaptale-editor :dir="dir" @input="onInput" />`.
- **Vanilla HTML / Backend Templates:** Works out-of-the-box with zero build steps.

<br>

---

## Production Use

Chaptale Editor powers the rich text authoring pipeline at [Chaptale](https://chaptale.app) and [Storya](https://storya.co.il).

<br>

---

## License

This project is licensed under the **Mozilla Public License 2.0 (MPL 2.0)**. See the [LICENSE](LICENSE) file for complete details.