

const TRANSLATIONS = {
  he: {
    editCode: 'ערוך קוד',
    editVisual: 'ערוך טקסט',
    editSourceTitle: 'עריכת קוד מקור (HTML)',
    save: 'שמירה',
    cancel: 'ביטול',
    saving: 'שומר...',
    autosaving: 'שומר אוטומטית...',
    savedAt: 'נשמר בהצלחה ב-',
    autosavedAt: 'נשמר אוטומטית ב-',
    saveError: 'שגיאה בשמירה!',
    saveSuccessToast: 'השינויים נשמרו בהצלחה!',
    saveErrorToast: 'שגיאה בשמירה! ',
    modalTitle: 'הוספת / עריכת קישור',
    modalUrl: 'כתובת הקישור (URL):',
    modalText: 'טקסט להצגה:',
    modalSave: 'שמור',
    indent: 'הוסף הזחה',
    outdent: 'בטל הזחה',
    toggleIndent: 'הוסף / בטל הזחה',
    superscript: 'כתב עילי / הערת שוליים',
    imageModalTitle: 'הוספת תמונה',
    imageModalSubtitle: 'העלה תמונה מהמכשיר שלך או הזן קישור אינטרנט ישיר.',
    uploadTab: 'העלאת קובץ',
    urlTab: 'קישור אינטרנט',
    galleryTab: 'גלריה',
    dropImageHere: 'גרור תמונה לכאן או לחץ לבחירת קובץ',
    supportsImageTypes: 'תומך ב-PNG, JPG, WebP, GIF, SVG',
    imageUrlLabel: 'כתובת התמונה (URL):',
    imageAltLabel: 'טקסט חלופי (Alt Text - אופציונלי):',
    imageUrlPlaceholder: 'https://example.com/image.jpg',
    imageAltPlaceholder: 'תיאור קצר של התמונה',
    insertImageBtn: 'הכנס תמונה',
    uploadImageBtn: 'העלאת תמונה',
    uploadingImage: 'מעלה תמונה...',
    noImagesYet: 'עדיין לא הועלו תמונות.',
    noImagesSub: 'בחר קובץ להוספת תמונה לעורך.',
    sepBadge: 'מפריד',
    insertImage: 'הכנס לתוכן',
    deleteImage: 'מחק תמונה',
    confirmDeleteImage: 'האם אתה בטוח שברצונך למחוק תמונה זו?',
    imageUploadSuccess: 'התמונה נוספה בהצלחה!',
    imageUploadFailed: 'שגיאה בהעלאת התמונה',
    loadingImages: 'טוען תמונות...',
    imageDeleteFailed: 'שגיאה במחיקת התמונה: ',
    imageLoadError: 'שגיאה בטעינת תמונות',
    imageNetError: 'שגיאת תקשורת בטעינת התמונות',
    imagesCountSuffix: 'תמונות',
    close: 'סגור',
    cancel: 'ביטול',
    menuHeading: 'כותרת',
    menuStyle: 'סגנון',
    menuAlign: 'יישור',
    menuMore: 'עוד',
    bold: 'מודגש',
    italic: 'נטוי',
    underline: 'קו תחתי',
    alignRight: 'יישור לימין',
    alignCenter: 'יישור למרכז',
    alignLeft: 'יישור לשמאל',
    bulletList: 'רשימת תבליטים',
    numberList: 'רשימה ממוספרת',
    dirRtl: 'כיוון ימין-שמאל (RTL)',
    dirLtr: 'כיוון שמאל-ימין (LTR)',
    imagesAndSeps: 'תמונות ומפרידים',
    h1Title: 'כותרת 1',
    h2Title: 'כותרת 2',
    h3Title: 'כותרת 3',
    pTitle: 'פסקה רגילה'
  },
  en: {
    editCode: 'HTML Code',
    editVisual: 'Visual View',
    editSourceTitle: 'Edit source code (HTML)',
    save: 'Save',
    cancel: 'Cancel',
    saving: 'Saving...',
    autosaving: 'Autosaving...',
    savedAt: 'Saved successfully at ',
    autosavedAt: 'Autosaved at ',
    saveError: 'Save error!',
    saveSuccessToast: 'Changes saved successfully!',
    saveErrorToast: 'Save error! ',
    modalTitle: 'Insert / Edit Link',
    modalUrl: 'Link Address (URL):',
    modalText: 'Text to display:',
    modalSave: 'Save',
    indent: 'Add Indent',
    outdent: 'Remove Indent',
    toggleIndent: 'Toggle Indent',
    superscript: 'Superscript / Footnote',
    imageModalTitle: 'Insert Image',
    imageModalSubtitle: 'Upload an image from your device or insert via Web URL.',
    uploadTab: 'Upload File',
    urlTab: 'Web URL',
    galleryTab: 'Gallery',
    dropImageHere: 'Drag & drop image here or click to browse',
    supportsImageTypes: 'Supports PNG, JPG, WebP, GIF, SVG',
    imageUrlLabel: 'Image Address (URL):',
    imageAltLabel: 'Alt Text (Optional):',
    imageUrlPlaceholder: 'https://example.com/image.jpg',
    imageAltPlaceholder: 'Brief description of the image',
    insertImageBtn: 'Insert Image',
    uploadImageBtn: 'Upload Image',
    uploadingImage: 'Uploading image...',
    noImagesYet: 'No images available yet.',
    noImagesSub: 'Upload or insert an image to get started.',
    sepBadge: 'Separator',
    insertImage: 'Insert Image',
    deleteImage: 'Delete Image',
    confirmDeleteImage: 'Are you sure you want to delete this image?',
    imageUploadSuccess: 'Image inserted successfully!',
    imageUploadFailed: 'Failed to upload image',
    loadingImages: 'Loading images...',
    imageDeleteFailed: 'Failed to delete image: ',
    imageLoadError: 'Error loading images',
    imageNetError: 'Network error loading images',
    imagesCountSuffix: 'images',
    close: 'Close',
    cancel: 'Cancel',
    menuHeading: 'Heading',
    menuStyle: 'Style',
    menuAlign: 'Align',
    menuMore: 'More',
    bold: 'Bold',
    italic: 'Italic',
    underline: 'Underline',
    alignRight: 'Align Right',
    alignCenter: 'Align Center',
    alignLeft: 'Align Left',
    bulletList: 'Bullet List',
    numberList: 'Numbered List',
    dirRtl: 'Right to Left (RTL)',
    dirLtr: 'Left to Right (LTR)',
    imagesAndSeps: 'Images & Separators',
    h1Title: 'Heading 1',
    h2Title: 'Heading 2',
    h3Title: 'Heading 3',
    pTitle: 'Paragraph'
  }
};

class HtmlEditor extends HTMLElement {
  static get observedAttributes() {
    return ['content', 'dir', 'name', 'lang', 'height', 'story-id'];
  }

  constructor() {
    super();
    this.isCodeMode = false;
    this._content = '';
    this.lastSavedContent = '';
    this.direction = 'ltr';
    this.nameAttr = '';
    this.storyId = '';
    this.savedRange = null;
    this.storyImages = [];
    this.storyImagesPromise = null;
    this.activeMobileMenu = null;
  }

  get content() {
    if (this.visualEditor) {
      return this.visualEditor.innerHTML;
    }
    return this._content || '';
  }

  set content(val) {
    this._content = val || '';
    if (this.visualEditor && this.visualEditor.innerHTML !== this._content) {
      this.visualEditor.innerHTML = this._content;
    }
    if (this.hiddenInput) {
      this.hiddenInput.value = this._content;
    }
  }

  get value() {
    return this.content;
  }

  set value(val) {
    this.content = val;
  }

  getHTML() {
    return this.content;
  }

  getValue() {
    return this.content;
  }

  connectedCallback() {
    this.nameAttr = this.getAttribute('name') || '';
    this.direction = this.getAttribute('dir') || 'rtl';
    const docLang = (document.documentElement && document.documentElement.lang) || '';
    this.resolvedLang = this.getAttribute('lang') || (docLang === 'en' || docLang === 'he' ? docLang : (this.direction === 'rtl' ? 'he' : 'en'));
    this.t = TRANSLATIONS[this.resolvedLang] || TRANSLATIONS['en'];

    const initEditor = () => {
      let initialText = this.getAttribute('content') || '';
      const childTextarea = this.querySelector('textarea:not(.code-editor)');
      if (!initialText && childTextarea && childTextarea.value) {
        initialText = childTextarea.value;
      } else if (!initialText && this.innerHTML.trim() && !this.querySelector('.html-editor-container')) {
        initialText = this.innerHTML.trim();
      }

      if (initialText && (initialText.includes('&lt;') || initialText.includes('&gt;') || initialText.includes('&quot;') || initialText.includes('&amp;'))) {
        const dec = document.createElement('textarea');
        dec.innerHTML = initialText;
        initialText = dec.value;
      }

      this.content = initialText;
      
      this.render();
      this.initElements();

      const applyContent = () => {
        let txt = this.getAttribute('content') || '';
        const child = this.querySelector('textarea:not(.code-editor)');
        if (child && child.value) {
          txt = child.value;
        }
        if (!txt) txt = this.content;
        if (txt && (txt.includes('&lt;') || txt.includes('&gt;') || txt.includes('&quot;') || txt.includes('&amp;'))) {
          const dec = document.createElement('textarea');
          dec.innerHTML = txt;
          txt = dec.value;
        }
        this.content = txt;
        if (this.visualEditor && txt) {
          const trimmed = txt.trim();
          const targetHTML = (trimmed === '' || trimmed === '<br>') ? '<p class="noindent"><br></p>' : txt;
          if (this.visualEditor.innerHTML !== targetHTML) {
            this.visualEditor.innerHTML = targetHTML;
          }
          this.cleanInternalStyles(this.visualEditor);
          this.normalizeParagraphsIndentation();
        }
        if (this.codeEditor && txt) {
          this.codeEditor.value = txt;
        }
        if (this.hiddenInput && txt) {
          this.hiddenInput.value = txt;
        }
        this.lastSavedContent = txt;
      };

      applyContent();

      this.addEventListeners();
      this.updateDirectionUI();
      this.updateToolbarState();

      this.isDirty = false;

      const form = this.closest('form');
      if (form) {
        this.formSubmitHandler = () => {
          if (!this.isCodeMode && this.visualEditor) {
            this.cleanInternalStyles(this.visualEditor);
            this.normalizeDivsToParagraphs();
            this.normalizeParagraphsIndentation();
            this.content = this.visualEditor.innerHTML;
            if (this.hiddenInput) {
              this.hiddenInput.value = this.content;
            }
          } else if (this.isCodeMode && this.codeEditor) {
            this.content = this.codeEditor.value;
            if (this.hiddenInput) {
              this.hiddenInput.value = this.content;
            }
          }
        };
        form.addEventListener('submit', this.formSubmitHandler);
      }
    };

    if (document.readyState === 'loading' && !this.getAttribute('content') && this.childNodes.length === 0) {
      document.addEventListener('DOMContentLoaded', () => initEditor(), { once: true });
    } else {
      initEditor();
    }
  }

  disconnectedCallback() {
    this.stopAutosaveTimer();
    if (this._scrollRaf) {
      cancelAnimationFrame(this._scrollRaf);
      this._scrollRaf = null;
    }
    const form = this.closest('form');
    if (form && this.formSubmitHandler) {
      form.removeEventListener('submit', this.formSubmitHandler);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === 'content') {
      this.content = newValue || '';
      if (!this.isCodeMode && this.visualEditor) {
        if (document.activeElement !== this.visualEditor) {
          const trimmed = (this.content || '').trim();
          const targetHTML = (trimmed === '' || trimmed === '<br>') ? '<p><br></p>' : this.content;
          if (this.visualEditor.innerHTML !== targetHTML) {
            this.visualEditor.innerHTML = targetHTML;
          }
        }
      } else if (this.codeEditor) {
        this.codeEditor.value = this.content;
      }
    } else if (name === 'dir' || name === 'lang') {
      if (name === 'dir') {
        this.direction = newValue || 'ltr';
        this.updateDirectionUI();
      }
      const docLang = (document.documentElement && document.documentElement.lang) || '';
      this.resolvedLang = this.getAttribute('lang') || (docLang === 'en' || docLang === 'he' ? docLang : (this.direction === 'rtl' ? 'he' : 'en'));
      this.t = TRANSLATIONS[this.resolvedLang] || TRANSLATIONS['en'];
      this.updateLocalizedTexts();
    } else if (name === 'name') {
      this.nameAttr = newValue || '';
      if (this.hiddenInput) {
        this.hiddenInput.name = this.nameAttr;
      }
    } else if (name === 'height') {
      const h = newValue || 'auto';
      if (h === 'auto') {
        if (this.visualEditor) {
          this.visualEditor.style.height = 'auto';
          this.visualEditor.style.minHeight = '480px';
          this.visualEditor.style.overflowY = 'visible';
        }
        if (this.codeEditor) {
          this.codeEditor.style.height = 'auto';
          this.codeEditor.style.minHeight = '480px';
        }
      } else {
        if (this.visualEditor) {
          this.visualEditor.style.height = h;
          this.visualEditor.style.minHeight = h;
          this.visualEditor.style.overflowY = 'auto';
        }
        if (this.codeEditor) {
          this.codeEditor.style.height = h;
          this.codeEditor.style.minHeight = h;
          this.codeEditor.style.overflowY = 'auto';
        }
      }
    } else if (name === 'story-id') {
      this.storyId = newValue || '';
      if (this.storyId) {
        this.fetchStoryImages();
      }
    }
  }

  render() {
    const cancelUrl = this.getAttribute('cancel-url') || '';
    const editorHeight = this.getAttribute('height') || 'auto';
    const isAuto = editorHeight === 'auto';
    const visualHeightStyle = isAuto ? 'height: auto; min-height: 30rem; overflow-y: visible;' : `height: ${editorHeight}; min-height: ${editorHeight}; overflow-y: auto;`;
    const codeHeightStyle = isAuto ? 'height: auto; min-height: 30rem;' : `height: ${editorHeight}; min-height: ${editorHeight}; overflow-y: auto;`;
    this.innerHTML = `
      <div class="html-editor-container" style="font-family: inherit;">
        <!-- Desktop Toolbar -->
        <div class="editor-toolbar editor-toolbar-desktop" style="background-color: #f8fafc; padding: 0.65rem 0.85rem; border: none; border-bottom: 1px solid #e2e8f0; border-radius: 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: nowrap; overflow-x: auto; gap: 6px; margin-bottom: 0;">
          <!-- Formatting buttons -->
          <div class="toolbar-formatting" style="display: flex; gap: 3px; flex-wrap: nowrap; align-items: center; flex-shrink: 0;">
            <button type="button" class="btn btn-sm btn-default btn-bold" style="padding: 4px 9px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Bold (Ctrl+B)"><b>B</b></button>
            <button type="button" class="btn btn-sm btn-default btn-italic" style="padding: 4px 9px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Italic (Ctrl+I)"><i>I</i></button>
            <button type="button" class="btn btn-sm btn-default btn-underline" style="padding: 4px 9px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Underline (Ctrl+U)"><u>U</u></button>
            <button type="button" class="btn btn-sm btn-default btn-superscript" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="${this.t.superscript || 'Superscript / Footnote'} (Ctrl+6 / ^1^)"><i class="fa-solid fa-superscript"></i></button>
            <div style="border-left: 1px solid #cbd5e1; height: 20px; margin: 0 3px; display: inline-block; vertical-align: middle;"></div>
            <button type="button" class="btn btn-sm btn-default btn-h1" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Heading 1">H1</button>
            <button type="button" class="btn btn-sm btn-default btn-h2" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Heading 2">H2</button>
            <button type="button" class="btn btn-sm btn-default btn-h3" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Heading 3">H3</button>
            <button type="button" class="btn btn-sm btn-default btn-p" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Paragraph">P</button>
            <button type="button" class="btn btn-sm btn-default btn-indent" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="${this.t.toggleIndent || 'Toggle Indent'}"><i class="fa-solid fa-indent"></i></button>
            <div style="border-left: 1px solid #cbd5e1; height: 20px; margin: 0 3px; display: inline-block; vertical-align: middle;"></div>
            <button type="button" class="btn btn-sm btn-default btn-align-right" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Align Right"><i class="fa-solid fa-align-right"></i></button>
            <button type="button" class="btn btn-sm btn-default btn-align-center" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Align Center"><i class="fa-solid fa-align-center"></i></button>
            <button type="button" class="btn btn-sm btn-default btn-align-left" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Align Left"><i class="fa-solid fa-align-left"></i></button>
            <div style="border-left: 1px solid #cbd5e1; height: 20px; margin: 0 3px; display: inline-block; vertical-align: middle;"></div>
            <button type="button" class="btn btn-sm btn-default btn-ul" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Unordered List"><i class="fa-solid fa-list-ul"></i></button>
            <button type="button" class="btn btn-sm btn-default btn-ol" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Ordered List"><i class="fa-solid fa-list-ol"></i></button>
            <div style="border-left: 1px solid #cbd5e1; height: 20px; margin: 0 3px; display: inline-block; vertical-align: middle;"></div>
            <button type="button" class="btn btn-sm btn-default btn-insert-link" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Insert Link"><i class="fa-solid fa-link"></i></button>
            <button type="button" class="btn btn-sm btn-default btn-image" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Insert Image"><i class="fa-solid fa-image"></i></button>
            <div style="border-left: 1px solid #cbd5e1; height: 20px; margin: 0 3px; display: inline-block; vertical-align: middle;"></div>
            <button type="button" class="btn btn-sm btn-default btn-rtl" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Right to Left (RTL)">
              <span style="display: inline-flex; align-items: center; gap: 3px;">
                <i class="fa-solid fa-paragraph" style="font-size: 10px;"></i>
                <i class="fa-solid fa-arrow-left" style="font-size: 9px; color: #3b82f6;"></i>
              </span>
            </button>
            <button type="button" class="btn btn-sm btn-default btn-ltr" style="padding: 4px 7px; border-radius: 4px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; cursor: pointer;" title="Left to Right (LTR)">
              <span style="display: inline-flex; align-items: center; gap: 3px;">
                <i class="fa-solid fa-paragraph" style="font-size: 10px;"></i>
                <i class="fa-solid fa-arrow-right" style="font-size: 9px; color: #3b82f6;"></i>
              </span>
            </button>
          </div>
          <div class="code-mode-title" style="display: none; font-weight: bold; padding: 0 8px; color: #64748b;">${this.t.editSourceTitle}</div>
          
          <!-- Actions -->
          <div style="display: flex; gap: 6px; align-items: center; flex-shrink: 0; margin-inline-start: auto;">
            <span class="save-status" style="font-size: 0.85em; color: #64748b; margin: 0 8px; transition: opacity 0.3s; opacity: 0; pointer-events: none;"></span>
            <button type="button" class="btn btn-sm btn-primary btn-toggle" style="padding: 5px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; color: #0f172a; cursor: pointer; white-space: nowrap;">
              <i class="fa fa-code btn-toggle-icon" style="margin-inline-end: 4px;"></i>
              <span class="btn-toggle-text">${this.t.editCode}</span>
            </button>
          </div>
        </div>

        <!-- Mobile Rich Text Editor Toolbar (Vector Pattern: 4 Grouped Dropdowns) -->
        <div class="editor-toolbar-mobile mb-2 position-relative" dir="${this.direction}">
          <!-- Backdrop for mobile dropdowns -->
          <div class="mobile-dropdown-backdrop" style="display: none;"></div>

          <!-- 1. Headings Dropdown -->
          <div class="mobile-dropdown-wrap position-relative">
            <button type="button" class="btn btn-sm btn-mobile-dropdown-toggle d-flex align-items-center justify-content-center gap-1" data-menu="heading">
              <i class="fa-solid fa-heading" style="font-size: 0.8rem;"></i>
              <span>${this.t.menuHeading || 'Heading'}</span>
              <i class="fa-solid fa-chevron-down" style="font-size: 0.65rem; opacity: 0.75;"></i>
            </button>
            <div class="mobile-dropdown-menu align-screen-right shadow-lg" data-menu="heading" style="display: none;">
              <button type="button" class="dropdown-item d-flex align-items-center justify-content-between btn-m-h1">
                <span style="font-weight: bold; font-size: 0.95rem;">${this.t.h1Title || 'Heading 1'}</span>
                <span class="badge bg-light text-secondary border">H1</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center justify-content-between btn-m-h2">
                <span style="font-weight: bold; font-size: 0.9rem;">${this.t.h2Title || 'Heading 2'}</span>
                <span class="badge bg-light text-secondary border">H2</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center justify-content-between btn-m-h3">
                <span style="font-weight: 600; font-size: 0.85rem;">${this.t.h3Title || 'Heading 3'}</span>
                <span class="badge bg-light text-secondary border">H3</span>
              </button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item d-flex align-items-center justify-content-between btn-m-p">
                <span style="font-size: 0.85rem;">${this.t.pTitle || 'Paragraph'}</span>
                <i class="fa-solid fa-paragraph text-muted" style="font-size: 0.8rem;"></i>
              </button>
            </div>
          </div>

          <!-- 2. Style Dropdown -->
          <div class="mobile-dropdown-wrap position-relative">
            <button type="button" class="btn btn-sm btn-mobile-dropdown-toggle d-flex align-items-center justify-content-center gap-1" data-menu="style">
              <i class="fa-solid fa-font" style="font-size: 0.8rem;"></i>
              <span>${this.t.menuStyle || 'Style'}</span>
              <i class="fa-solid fa-chevron-down" style="font-size: 0.65rem; opacity: 0.75;"></i>
            </button>
            <div class="mobile-dropdown-menu align-screen-right shadow-lg" data-menu="style" style="display: none;">
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-bold">
                <i class="fa-solid fa-bold text-center" style="width: 18px;"></i>
                <span style="font-weight: bold;">${this.t.bold || 'Bold'}</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-italic">
                <i class="fa-solid fa-italic text-center" style="width: 18px;"></i>
                <span style="font-style: italic;">${this.t.italic || 'Italic'}</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-underline">
                <i class="fa-solid fa-underline text-center" style="width: 18px;"></i>
                <span style="text-decoration: underline;">${this.t.underline || 'Underline'}</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-superscript">
                <i class="fa-solid fa-superscript text-center" style="width: 18px;"></i>
                <span>${this.t.superscript || 'Superscript / Footnote'}</span>
              </button>
            </div>
          </div>

          <!-- 3. Alignment Dropdown -->
          <div class="mobile-dropdown-wrap position-relative">
            <button type="button" class="btn btn-sm btn-mobile-dropdown-toggle d-flex align-items-center justify-content-center gap-1" data-menu="align">
              <i class="fa-solid fa-align-right" style="font-size: 0.8rem;"></i>
              <span>${this.t.menuAlign || 'Align'}</span>
              <i class="fa-solid fa-chevron-down" style="font-size: 0.65rem; opacity: 0.75;"></i>
            </button>
            <div class="mobile-dropdown-menu align-screen-left shadow-lg" data-menu="align" style="display: none;">
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-align-right">
                <i class="fa-solid fa-align-right text-center" style="width: 18px;"></i>
                <span>${this.t.alignRight || 'Align Right'}</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-align-center">
                <i class="fa-solid fa-align-center text-center" style="width: 18px;"></i>
                <span>${this.t.alignCenter || 'Align Center'}</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-align-left">
                <i class="fa-solid fa-align-left text-center" style="width: 18px;"></i>
                <span>${this.t.alignLeft || 'Align Left'}</span>
              </button>
            </div>
          </div>

          <!-- 4. Extra Tools -->
          <div class="mobile-dropdown-wrap position-relative">
            <button type="button" class="btn btn-sm btn-mobile-dropdown-toggle d-flex align-items-center justify-content-center gap-1" data-menu="more">
              <i class="fa-solid fa-ellipsis" style="font-size: 0.9rem;"></i>
              <i class="fa-solid fa-chevron-down" style="font-size: 0.65rem; opacity: 0.75;"></i>
            </button>
            <div class="mobile-dropdown-menu align-screen-left shadow-lg" data-menu="more" style="display: none;">
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-image">
                <i class="fa-regular fa-image text-primary text-center" style="width: 18px;"></i>
                <span>${this.t.imagesAndSeps || 'Images & Separators'}</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-link">
                <i class="fa-solid fa-link text-center" style="width: 18px;"></i>
                <span>${this.t.modalTitle || 'Insert / Edit Link'}</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-indent">
                <i class="fa-solid fa-indent text-center" style="width: 18px;"></i>
                <span>${this.t.toggleIndent || 'Toggle Indent'}</span>
              </button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-ul">
                <i class="fa-solid fa-list-ul text-center" style="width: 18px;"></i>
                <span>${this.t.bulletList || 'Bullet List'}</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-ol">
                <i class="fa-solid fa-list-ol text-center" style="width: 18px;"></i>
                <span>${this.t.numberList || 'Numbered List'}</span>
              </button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-rtl">
                <i class="fa-solid fa-paragraph text-center" style="width: 18px;"></i>
                <span>${this.t.dirRtl || 'Right to Left (RTL)'}</span>
              </button>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 btn-m-ltr">
                <i class="fa-solid fa-paragraph text-center fa-flip-horizontal" style="width: 18px;"></i>
                <span>${this.t.dirLtr || 'Left to Right (LTR)'}</span>
              </button>
              <div class="dropdown-divider"></div>
              <button type="button" class="dropdown-item d-flex align-items-center gap-2 text-primary btn-m-toggle-code">
                <i class="fa-solid fa-code text-center" style="width: 18px;"></i>
                <span style="font-weight: 600;">${this.t.editCode || 'HTML Code'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Code Mode Bar -->
        <div class="mobile-code-mode-bar mb-2 align-items-center justify-content-between p-2 rounded-3 border bg-light" style="display: none;">
          <div class="fw-bold small text-secondary d-flex align-items-center gap-2">
            <i class="fa-solid fa-code text-primary"></i>
            <span>${this.t.editSourceTitle}</span>
          </div>
          <button type="button" class="btn btn-sm btn-primary rounded-pill px-3 py-1 btn-m-exit-code d-flex align-items-center gap-1 shadow-sm">
            <i class="fa-solid fa-eye fs-7"></i>
            <span class="small fw-semibold">${this.t.editVisual}</span>
          </button>
        </div>

        <!-- Visual Editor -->
        <div class="form-group visual-editor-wrapper" style="margin: 0; padding: 0;">
          <div class="editor-content form-control visual-editor" contenteditable="true" style="border: none; border-radius: 0; box-shadow: none; outline: none; padding: 1.25rem 1.5rem; background-color: #ffffff; color: #0f172a; line-height: 1.8; ${visualHeightStyle}"></div>
        </div>

        <!-- HTML Code Editor -->
        <div class="form-group code-editor-wrapper" style="display: none; margin: 0; padding: 0;">
          <textarea class="form-control code-editor" rows="18" style="direction: ltr; font-family: var(--storya-font-ui), sans-serif; resize: vertical; border: none; border-radius: 0; box-shadow: none; outline: none; padding: 1.25rem 1.5rem; background-color: #f8fafc; color: #0f172a; font-size: 0.95rem; width: 100%; box-sizing: border-box; ${codeHeightStyle}"></textarea>
        </div>

        <!-- Custom Link Modal -->
        <div class="link-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); z-index: 10000; justify-content: center; align-items: center; backdrop-filter: blur(2px);">
          <div class="link-modal-content" style="background: white; border-radius: 8px; padding: 20px; width: 90%; max-width: 400px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); direction: ${this.resolvedLang === 'he' ? 'rtl' : 'ltr'}; text-align: ${this.resolvedLang === 'he' ? 'right' : 'left'}; font-family: sans-serif; border: 1px solid #ddd;">
            <h4 style="margin-top: 0; margin-bottom: 15px; font-weight: bold; color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">${this.t.modalTitle}</h4>
            <div class="form-group mb-3">
              <label style="display: block; margin-bottom: 5px; font-weight: 500; font-size: 13px; color: #555;">${this.t.modalUrl}</label>
              <input type="text" class="link-url-input form-control" style="width: 100%; direction: ltr; text-align: left;">
            </div>
            <div class="form-group mb-3 link-text-group">
              <label style="display: block; margin-bottom: 5px; font-weight: 500; font-size: 13px; color: #555;">${this.t.modalText}</label>
              <input type="text" class="link-text-input form-control" style="width: 100%;">
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 20px;">
              <button type="button" class="btn btn-default btn-sm link-cancel-btn">${this.t.cancel}</button>
              <button type="button" class="btn btn-primary btn-sm link-save-btn">${this.t.modalSave}</button>
            </div>
          </div>
        </div>

        <!-- Insert Image Modal -->
        <div class="image-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 10001; justify-content: center; align-items: center; backdrop-filter: blur(3px);">
          <div class="image-modal-content" style="background: #ffffff; border-radius: 12px; width: 92%; max-width: 600px; max-height: 85vh; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.3); direction: ${this.resolvedLang === 'he' ? 'rtl' : 'ltr'}; text-align: ${this.resolvedLang === 'he' ? 'right' : 'left'}; font-family: inherit; border: 1px solid #e2e8f0; overflow: hidden;">
            <!-- Modal Header -->
            <div style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
              <div>
                <h4 style="margin: 0; font-size: 1.15rem; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 8px;">
                  <i class="fa-solid fa-images" style="color: #3b82f6;"></i>
                  <span>${this.t.imageModalTitle || 'Insert Image'}</span>
                </h4>
                <div class="image-modal-subtitle" style="font-size: 0.8rem; color: #64748b; margin-top: 2px;">
                  ${this.t.imageModalSubtitle || 'Upload an image from your device or insert via Web URL.'}
                </div>
              </div>
              <button type="button" class="image-modal-close-btn" style="background: none; border: none; font-size: 1.4rem; color: #94a3b8; cursor: pointer; padding: 4px 8px; line-height: 1;" title="${this.t.close || 'Close'}">&times;</button>
            </div>

            <!-- Modal Tabs -->
            <div class="image-modal-tabs" style="display: flex; gap: 4px; padding: 8px 16px 0; background: #f1f5f9; border-bottom: 1px solid #e2e8f0;">
              <button type="button" class="image-tab-btn active" data-tab="upload" style="padding: 8px 16px; border: none; background: #fff; font-weight: 600; font-size: 0.85rem; color: #1e293b; border-radius: 6px 6px 0 0; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0; border-bottom-color: #fff; margin-bottom: -1px;">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <span>${this.t.uploadTab || 'Upload File'}</span>
              </button>
              <button type="button" class="image-tab-btn" data-tab="url" style="padding: 8px 16px; border: none; background: transparent; font-weight: 500; font-size: 0.85rem; color: #64748b; border-radius: 6px 6px 0 0; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                <i class="fa-solid fa-link"></i>
                <span>${this.t.urlTab || 'Web URL'}</span>
              </button>
              <button type="button" class="image-tab-btn" data-tab="gallery" style="padding: 8px 16px; border: none; background: transparent; font-weight: 500; font-size: 0.85rem; color: #64748b; border-radius: 6px 6px 0 0; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                <i class="fa-solid fa-photo-film"></i>
                <span>${this.t.galleryTab || 'Gallery'}</span>
              </button>
            </div>

            <!-- Tab 1: Upload Panel -->
            <div class="image-tab-panel image-panel-upload" style="padding: 20px; overflow-y: auto; flex-grow: 1; background: #ffffff;">
              <input type="file" class="story-image-file-input" accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml" style="display: none;">
              
              <div class="image-dropzone" style="border: 2px dashed #cbd5e1; border-radius: 10px; padding: 30px 20px; text-align: center; cursor: pointer; transition: all 0.2s; background: #f8fafc;">
                <div style="font-size: 2.5rem; color: #3b82f6; margin-bottom: 10px;">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                </div>
                <div style="font-weight: 600; color: #1e293b; font-size: 0.95rem; margin-bottom: 4px;">
                  ${this.t.dropImageHere || 'Drag & drop image here or click to browse'}
                </div>
                <div style="font-size: 0.78rem; color: #94a3b8;">
                  ${this.t.supportsImageTypes || 'Supports PNG, JPG, WebP, GIF, SVG'}
                </div>
              </div>

              <!-- Selected Image Preview & Alt -->
              <div class="upload-preview-container" style="display: none; margin-top: 16px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; background: #f8fafc;">
                <div style="display: flex; gap: 14px; align-items: center;">
                  <img class="upload-preview-img" src="" alt="preview" style="width: 70px; height: 70px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
                  <div style="flex-grow: 1; min-width: 0;">
                    <div class="upload-preview-name" style="font-weight: 600; font-size: 0.85rem; color: #0f172a; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"></div>
                    <div class="upload-preview-size" style="font-size: 0.75rem; color: #64748b;"></div>
                  </div>
                  <button type="button" class="upload-remove-file-btn" style="background: none; border: none; color: #ef4444; font-size: 1.1rem; cursor: pointer; padding: 4px;" title="Remove">&times;</button>
                </div>
              </div>

              <div class="form-group" style="margin-top: 14px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500; font-size: 0.82rem; color: #475569;">${this.t.imageAltLabel || 'Alt Text (Optional):'}</label>
                <input type="text" class="upload-alt-input form-control" placeholder="${this.t.imageAltPlaceholder || 'Brief description of the image'}" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; box-sizing: border-box;">
              </div>
            </div>

            <!-- Tab 2: Web URL Panel -->
            <div class="image-tab-panel image-panel-url" style="display: none; padding: 20px; overflow-y: auto; flex-grow: 1; background: #ffffff;">
              <div class="form-group" style="margin-bottom: 14px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500; font-size: 0.82rem; color: #475569;">${this.t.imageUrlLabel || 'Image Address (URL):'}</label>
                <input type="url" class="image-url-input form-control" placeholder="${this.t.imageUrlPlaceholder || 'https://example.com/image.jpg'}" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; box-sizing: border-box; direction: ltr; text-align: left;">
              </div>

              <div class="form-group" style="margin-bottom: 14px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500; font-size: 0.82rem; color: #475569;">${this.t.imageAltLabel || 'Alt Text (Optional):'}</label>
                <input type="text" class="image-url-alt-input form-control" placeholder="${this.t.imageAltPlaceholder || 'Brief description of the image'}" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; box-sizing: border-box;">
              </div>

              <!-- URL Image Preview Box -->
              <div class="url-preview-box" style="display: none; margin-top: 10px; padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px; text-align: center; background: #f8fafc;">
                <img class="url-preview-img" src="" alt="" style="max-width: 100%; max-height: 180px; object-fit: contain; border-radius: 4px;">
              </div>
            </div>

            <!-- Tab 3: Gallery Panel -->
            <div class="image-tab-panel image-panel-gallery" style="display: none; padding: 20px; overflow-y: auto; flex-grow: 1; background: #f8fafc; min-height: 240px; max-height: 50vh;">
              <div class="story-image-gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 14px;">
                <!-- Dynamically populated cards -->
              </div>
            </div>

            <!-- Modal Footer -->
            <div style="padding: 12px 20px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #ffffff;">
              <span class="story-image-upload-status" style="font-size: 0.85rem; color: #3b82f6; display: none; align-items: center; gap: 6px;">
                <i class="fa-solid fa-spinner fa-spin"></i> ${this.t.uploadingImage || 'Uploading image...'}
              </span>
              <div class="story-images-count" style="font-size: 0.85rem; color: #64748b;"></div>
              <div style="display: flex; gap: 8px; margin-left: auto;">
                <button type="button" class="btn btn-default btn-sm image-modal-cancel-btn" style="padding: 7px 16px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; cursor: pointer; font-size: 0.85rem;">${this.t.cancel || 'Cancel'}</button>
                <button type="button" class="btn btn-primary btn-sm image-modal-insert-btn" style="padding: 7px 18px; border-radius: 6px; background: #3b82f6; color: #fff; border: none; font-weight: 600; cursor: pointer; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;">
                  <i class="fa-solid fa-check"></i>
                  <span>${this.t.insertImageBtn || 'Insert Image'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Hidden input for standard form integration -->
        ${this.nameAttr ? `<textarea class="hidden-form-input" name="${this.nameAttr}" style="display: none;"></textarea>` : ''}
      </div>
    `;
  }

  initElements() {
    this.visualEditor = this.querySelector('.visual-editor');
    this.codeEditor = this.querySelector('.code-editor');
    this.visualWrapper = this.querySelector('.visual-editor-wrapper');
    this.codeWrapper = this.querySelector('.code-editor-wrapper');
    
    this.btnBold = this.querySelector('.btn-bold');
    this.btnItalic = this.querySelector('.btn-italic');
    this.btnUnderline = this.querySelector('.btn-underline');
    this.btnSuperscript = this.querySelector('.btn-superscript');
    this.btnH1 = this.querySelector('.btn-h1');
    this.btnH2 = this.querySelector('.btn-h2');
    this.btnH3 = this.querySelector('.btn-h3');
    this.btnP = this.querySelector('.btn-p');
    this.btnIndent = this.querySelector('.btn-indent');
    this.btnAlignRight = this.querySelector('.btn-align-right');
    this.btnAlignCenter = this.querySelector('.btn-align-center');
    this.btnAlignLeft = this.querySelector('.btn-align-left');
    this.btnUl = this.querySelector('.btn-ul');
    this.btnOl = this.querySelector('.btn-ol');
    this.btnImage = this.querySelector('.btn-image');
    this.btnLink = this.querySelector('.btn-insert-link');
    this.btnLtr = this.querySelector('.btn-ltr');
    this.btnRtl = this.querySelector('.btn-rtl');
    
    this.btnSave = this.querySelector('.btn-save');
    this.btnToggle = this.querySelector('.btn-toggle');
    this.btnToggleIcon = this.querySelector('.btn-toggle-icon');
    this.btnToggleText = this.querySelector('.btn-toggle-text');
    this.toolbarFormatting = this.querySelector('.toolbar-formatting');
    this.codeModeTitle = this.querySelector('.code-mode-title');

    this.linkModal = this.querySelector('.link-modal');
    this.modalUrlInput = this.querySelector('.link-url-input');
    this.modalTextInput = this.querySelector('.link-text-input');
    this.modalTextGroup = this.querySelector('.link-text-group');
    this.modalCancelBtn = this.querySelector('.link-cancel-btn');
    this.modalSaveBtn = this.querySelector('.link-save-btn');

    this.imageModal = this.querySelector('.image-modal');
    this.imageModalCloseBtn = this.querySelector('.image-modal-close-btn');
    this.imageModalCancelBtn = this.querySelector('.image-modal-cancel-btn');
    this.imageModalInsertBtn = this.querySelector('.image-modal-insert-btn');
    this.imageTabBtns = this.querySelectorAll('.image-tab-btn');
    this.imageTabPanels = this.querySelectorAll('.image-tab-panel');
    this.imageDropzone = this.querySelector('.image-dropzone');
    this.storyImageFileInput = this.querySelector('.story-image-file-input');
    this.uploadPreviewContainer = this.querySelector('.upload-preview-container');
    this.uploadPreviewImg = this.querySelector('.upload-preview-img');
    this.uploadPreviewName = this.querySelector('.upload-preview-name');
    this.uploadPreviewSize = this.querySelector('.upload-preview-size');
    this.uploadRemoveFileBtn = this.querySelector('.upload-remove-file-btn');
    this.uploadAltInput = this.querySelector('.upload-alt-input');
    this.imageUrlInput = this.querySelector('.image-url-input');
    this.imageUrlAltInput = this.querySelector('.image-url-alt-input');
    this.urlPreviewBox = this.querySelector('.url-preview-box');
    this.urlPreviewImg = this.querySelector('.url-preview-img');
    this.storyImageUploadStatus = this.querySelector('.story-image-upload-status');
    this.storyImageGalleryGrid = this.querySelector('.story-image-gallery-grid');
    this.storyImagesCount = this.querySelector('.story-images-count');
    this.activeImageTab = 'upload';
    this.selectedImageFile = null;

    this.desktopToolbar = this.querySelector('.editor-toolbar-desktop');
    this.mobileToolbar = this.querySelector('.editor-toolbar-mobile');
    this.mobileCodeModeBar = this.querySelector('.mobile-code-mode-bar');
    this.mobileBackdrop = this.querySelector('.mobile-dropdown-backdrop');

    this.btnMobileH1 = this.querySelector('.btn-m-h1');
    this.btnMobileH2 = this.querySelector('.btn-m-h2');
    this.btnMobileH3 = this.querySelector('.btn-m-h3');
    this.btnMobileP = this.querySelector('.btn-m-p');

    this.btnMobileBold = this.querySelector('.btn-m-bold');
    this.btnMobileItalic = this.querySelector('.btn-m-italic');
    this.btnMobileUnderline = this.querySelector('.btn-m-underline');
    this.btnMobileSuperscript = this.querySelector('.btn-m-superscript');

    this.btnMobileAlignRight = this.querySelector('.btn-m-align-right');
    this.btnMobileAlignCenter = this.querySelector('.btn-m-align-center');
    this.btnMobileAlignLeft = this.querySelector('.btn-m-align-left');

    this.btnMobileImage = this.querySelector('.btn-m-image');
    this.btnMobileLink = this.querySelector('.btn-m-link');
    this.btnMobileIndent = this.querySelector('.btn-m-indent');
    this.btnMobileUl = this.querySelector('.btn-m-ul');
    this.btnMobileOl = this.querySelector('.btn-m-ol');
    this.btnMobileRtl = this.querySelector('.btn-m-rtl');
    this.btnMobileLtr = this.querySelector('.btn-m-ltr');
    this.btnMobileToggleCode = this.querySelector('.btn-m-toggle-code');
    this.btnMobileExitCode = this.querySelector('.btn-m-exit-code');

    if (this.nameAttr) {
      this.hiddenInput = this.querySelector('.hidden-form-input');
      if (this.hiddenInput) {
        this.hiddenInput.value = this.content;
      }
    }

    const trimmed = (this.content || '').trim();
    this.visualEditor.innerHTML = (trimmed === '' || trimmed === '<br>') ? '<p><br></p>' : this.content;
    this.codeEditor.value = this.formatHTML(this.visualEditor.innerHTML);
    this.lastSavedContent = this.visualEditor.innerHTML;
  }

  addEventListeners() {
    const exec = (e, cmd, val = '') => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      document.execCommand(cmd, false, val);
      this.updateContentFromVisual();
      this.updateToolbarState();
      this.isDirty = true;
      this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
    };

    const formatButtons = this.querySelectorAll('.toolbar-formatting .btn');
    formatButtons.forEach(btn => {
      btn.addEventListener('mousedown', (e) => e.preventDefault());
    });

    if (this.btnBold) this.btnBold.addEventListener('click', (e) => exec(e, 'bold'));
    if (this.btnItalic) this.btnItalic.addEventListener('click', (e) => exec(e, 'italic'));
    if (this.btnUnderline) this.btnUnderline.addEventListener('click', (e) => exec(e, 'underline'));
    if (this.btnSuperscript) this.btnSuperscript.addEventListener('click', (e) => exec(e, 'superscript'));
    if (this.btnH1) this.btnH1.addEventListener('click', (e) => exec(e, 'formatBlock', 'H1'));
    if (this.btnH2) this.btnH2.addEventListener('click', (e) => exec(e, 'formatBlock', 'H2'));
    if (this.btnH3) this.btnH3.addEventListener('click', (e) => exec(e, 'formatBlock', 'H3'));
    if (this.btnP) this.btnP.addEventListener('click', (e) => exec(e, 'formatBlock', 'P'));
    if (this.btnIndent) {
      this.btnIndent.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.toggleParagraphIndent();
      });
    }
    if (this.btnAlignRight) this.btnAlignRight.addEventListener('click', (e) => exec(e, 'justifyRight'));
    if (this.btnAlignCenter) this.btnAlignCenter.addEventListener('click', (e) => exec(e, 'justifyCenter'));
    if (this.btnAlignLeft) this.btnAlignLeft.addEventListener('click', (e) => exec(e, 'justifyLeft'));
    if (this.btnUl) this.btnUl.addEventListener('click', (e) => exec(e, 'insertUnorderedList'));
    if (this.btnOl) this.btnOl.addEventListener('click', (e) => exec(e, 'insertOrderedList'));

    // Mobile toolbar dropdown toggles & backdrop (Vector pattern)
    const mobileDropdownToggles = this.querySelectorAll('.btn-mobile-dropdown-toggle');
    mobileDropdownToggles.forEach(btn => {
      btn.addEventListener('mousedown', (e) => e.preventDefault());
      btn.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        const menuName = btn.getAttribute('data-menu');
        this.toggleMobileMenu(menuName);
      });
    });

    const mobileDropdownItems = this.querySelectorAll('.mobile-dropdown-menu .dropdown-item');
    mobileDropdownItems.forEach(item => {
      item.addEventListener('mousedown', (e) => e.preventDefault());
    });

    if (this.mobileBackdrop) {
      this.mobileBackdrop.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.closeAllMobileMenus();
      });
    }

    if (this.btnMobileH1) this.btnMobileH1.addEventListener('click', (e) => { exec(e, 'formatBlock', 'H1'); this.closeAllMobileMenus(); });
    if (this.btnMobileH2) this.btnMobileH2.addEventListener('click', (e) => { exec(e, 'formatBlock', 'H2'); this.closeAllMobileMenus(); });
    if (this.btnMobileH3) this.btnMobileH3.addEventListener('click', (e) => { exec(e, 'formatBlock', 'H3'); this.closeAllMobileMenus(); });
    if (this.btnMobileP) this.btnMobileP.addEventListener('click', (e) => { exec(e, 'formatBlock', 'P'); this.closeAllMobileMenus(); });

    if (this.btnMobileBold) this.btnMobileBold.addEventListener('click', (e) => { exec(e, 'bold'); this.closeAllMobileMenus(); });
    if (this.btnMobileItalic) this.btnMobileItalic.addEventListener('click', (e) => { exec(e, 'italic'); this.closeAllMobileMenus(); });
    if (this.btnMobileUnderline) this.btnMobileUnderline.addEventListener('click', (e) => { exec(e, 'underline'); this.closeAllMobileMenus(); });
    if (this.btnMobileSuperscript) this.btnMobileSuperscript.addEventListener('click', (e) => { exec(e, 'superscript'); this.closeAllMobileMenus(); });

    if (this.btnMobileAlignRight) this.btnMobileAlignRight.addEventListener('click', (e) => { exec(e, 'justifyRight'); this.closeAllMobileMenus(); });
    if (this.btnMobileAlignCenter) this.btnMobileAlignCenter.addEventListener('click', (e) => { exec(e, 'justifyCenter'); this.closeAllMobileMenus(); });
    if (this.btnMobileAlignLeft) this.btnMobileAlignLeft.addEventListener('click', (e) => { exec(e, 'justifyLeft'); this.closeAllMobileMenus(); });

    if (this.btnMobileImage) {
      this.btnMobileImage.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.closeAllMobileMenus();
        if (this.isCodeMode) return;
        this.openImageModal();
      });
    }

    if (this.btnMobileLink) {
      this.btnMobileLink.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.closeAllMobileMenus();
        if (this.isCodeMode) return;
        this.showLinkModal();
      });
    }

    if (this.btnMobileIndent) {
      this.btnMobileIndent.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.closeAllMobileMenus();
        this.toggleParagraphIndent();
      });
    }

    if (this.btnMobileUl) this.btnMobileUl.addEventListener('click', (e) => { exec(e, 'insertUnorderedList'); this.closeAllMobileMenus(); });
    if (this.btnMobileOl) this.btnMobileOl.addEventListener('click', (e) => { exec(e, 'insertOrderedList'); this.closeAllMobileMenus(); });

    if (this.btnMobileRtl) {
      this.btnMobileRtl.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.closeAllMobileMenus();
        this.setAttribute('dir', 'rtl');
      });
    }

    if (this.btnMobileLtr) {
      this.btnMobileLtr.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.closeAllMobileMenus();
        this.setAttribute('dir', 'ltr');
      });
    }

    if (this.btnMobileToggleCode) {
      this.btnMobileToggleCode.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.closeAllMobileMenus();
        this.toggleCodeMode();
      });
    }

    if (this.btnMobileExitCode) {
      this.btnMobileExitCode.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.toggleCodeMode();
      });
    }
    
    if (this.btnImage) {
      this.btnImage.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (this.isCodeMode) return;
        this.openImageModal();
      });
    }

    if (this.imageModalCloseBtn) {
      this.imageModalCloseBtn.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.closeImageModal();
      });
    }

    if (this.imageModalCancelBtn) {
      this.imageModalCancelBtn.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.closeImageModal();
      });
    }

    if (this.imageModal) {
      this.imageModal.addEventListener('click', (e) => {
        if (e.target === this.imageModal) {
          this.closeImageModal();
        }
      });
    }

    // Tabs switching
    if (this.imageTabBtns) {
      this.imageTabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          if (e) { e.preventDefault(); e.stopPropagation(); }
          const tab = btn.getAttribute('data-tab');
          this.switchImageTab(tab);
        });
      });
    }

    // Dropzone click & drag-and-drop
    if (this.imageDropzone && this.storyImageFileInput) {
      this.imageDropzone.addEventListener('click', () => {
        this.storyImageFileInput.click();
      });

      this.imageDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.imageDropzone.style.borderColor = '#3b82f6';
        this.imageDropzone.style.background = '#eff6ff';
      });

      ['dragleave', 'dragend'].forEach(type => {
        this.imageDropzone.addEventListener(type, () => {
          this.imageDropzone.style.borderColor = '#cbd5e1';
          this.imageDropzone.style.background = '#f8fafc';
        });
      });

      this.imageDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        this.imageDropzone.style.borderColor = '#cbd5e1';
        this.imageDropzone.style.background = '#f8fafc';
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          this.handleImageFileSelected(e.dataTransfer.files[0]);
        }
      });

      this.storyImageFileInput.addEventListener('change', () => {
        if (this.storyImageFileInput.files && this.storyImageFileInput.files.length > 0) {
          this.handleImageFileSelected(this.storyImageFileInput.files[0]);
        }
      });
    }

    // Remove selected file button
    if (this.uploadRemoveFileBtn) {
      this.uploadRemoveFileBtn.addEventListener('click', (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.clearSelectedImageFile();
      });
    }

    // URL input live preview
    if (this.imageUrlInput) {
      this.imageUrlInput.addEventListener('input', () => {
        const url = (this.imageUrlInput.value || '').trim();
        if (url && this.urlPreviewBox && this.urlPreviewImg) {
          this.urlPreviewImg.src = url;
          this.urlPreviewBox.style.display = 'block';
        } else if (this.urlPreviewBox) {
          this.urlPreviewBox.style.display = 'none';
        }
      });
    }

    // Main Insert Image button in modal footer
    if (this.imageModalInsertBtn) {
      this.imageModalInsertBtn.addEventListener('click', async (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        await this.handleImageModalSubmit();
      });
    }

    if (this.btnLink) {
      this.btnLink.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (this.isCodeMode) return;
        this.showLinkModal();
      });
    }

    if (this.modalCancelBtn) {
      this.modalCancelBtn.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.closeLinkModal();
      });
    }
    if (this.modalSaveBtn) {
      this.modalSaveBtn.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.saveLink();
      });
    }

    if (this.linkModal) {
      this.linkModal.addEventListener('click', (e) => {
        if (e.target === this.linkModal) {
          this.closeLinkModal();
        }
      });
    }

    const handleKey = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.saveLink();
      } else if (e.key === 'Escape') {
        this.closeLinkModal();
      }
    };
    if (this.modalUrlInput) this.modalUrlInput.addEventListener('keydown', handleKey);
    if (this.modalTextInput) this.modalTextInput.addEventListener('keydown', handleKey);

    if (this.btnLtr) {
      this.btnLtr.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.direction = 'ltr';
        this.setAttribute('dir', 'ltr');
        this.updateDirectionUI();
      });
    }
    if (this.btnRtl) {
      this.btnRtl.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.direction = 'rtl';
        this.setAttribute('dir', 'rtl');
        this.updateDirectionUI();
      });
    }

    if (this.btnToggle) {
      this.btnToggle.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.toggleCodeMode();
      });
    }

    if (this.btnSave) {
      this.btnSave.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.saveInBackground(false);
      });
    }

    if (this.visualEditor) {
      this.visualEditor.addEventListener('input', () => {
        this.updateContentFromVisual();
        this.isDirty = true;
        this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
        this.scrollCursorIntoView();
      });
      this.visualEditor.addEventListener('paste', (e) => {
        e.preventDefault();
        const clipboard = e.clipboardData || window.clipboardData;
        const html = clipboard ? clipboard.getData('text/html') : '';
        const text = clipboard ? clipboard.getData('text/plain') : '';

        if (html) {
          const temp = document.createElement('div');
          temp.innerHTML = html;
          this.cleanInternalStyles(temp);
          document.execCommand('insertHTML', false, temp.innerHTML);
        } else if (text) {
          document.execCommand('insertText', false, text);
        }

        setTimeout(() => {
          this.updateContentFromVisual();
          this.isDirty = true;
          this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
          this.scrollCursorIntoView();
        }, 10);
      });
      this.visualEditor.addEventListener('cut', () => {
        setTimeout(() => {
          this.updateContentFromVisual();
          this.isDirty = true;
          this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
        }, 10);
      });
      this.visualEditor.addEventListener('drop', () => {
        setTimeout(() => {
          this.updateContentFromVisual();
          this.isDirty = true;
          this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
          this.scrollCursorIntoView();
        }, 10);
      });
      this.visualEditor.addEventListener('keydown', (e) => {
        try {
          document.execCommand('defaultParagraphSeparator', false, 'p');
        } catch (err) {}

        // Keyboard shortcut for superscript: Ctrl+6 (or Cmd+6 / Ctrl+^)
        if ((e.ctrlKey || e.metaKey) && !e.altKey && (e.key === '6' || e.key === '^' || e.code === 'Digit6')) {
          e.preventDefault();
          e.stopPropagation();
          document.execCommand('superscript', false, '');
          this.updateContentFromVisual();
          this.updateToolbarState();
          this.isDirty = true;
          this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
          return;
        }

        if (e.key === ' ' || e.code === 'Space') {
          if (this.handleSpaceMarkdownShortcuts(e)) {
            return;
          }
        } else if (e.key === 'Enter') {
          if (this.handleEnterMarkdownShortcuts(e)) {
            this.scrollCursorIntoView();
            return;
          }
        }
      });
      this.visualEditor.addEventListener('keyup', (e) => {
        if (e && e.key === 'Enter') {
          const sel = window.getSelection();
          if (sel && sel.rangeCount > 0) {
            let node = sel.getRangeAt(0).startContainer;
            while (node && node !== this.visualEditor) {
              if (node.nodeName === 'P') {
                const text = node.textContent.replace(/[\s\u200B\u00A0]/g, '');
                if (text === '') {
                  delete node.dataset.manualIndent;
                  node.classList.remove('indent');
                  node.classList.remove('noindent');
                  if (node.getAttribute('class') === '') {
                    node.removeAttribute('class');
                  }
                }
                break;
              }
              node = node.parentNode;
            }
          }
        }
        if (e && (e.key === 'Enter' || e.key === 'Backspace' || e.key === 'Delete')) {
          this.normalizeParagraphsIndentation();
        }
        this.updateToolbarState();
        if (e && (e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
          this.scrollCursorIntoView();
        }
      });
      this.visualEditor.addEventListener('mouseup', () => this.updateToolbarState());
      this.visualEditor.addEventListener('click', () => {
        try {
          document.execCommand('defaultParagraphSeparator', false, 'p');
        } catch (err) {}
        this.updateToolbarState();
      });
      this.visualEditor.addEventListener('focus', () => {
        try {
          document.execCommand('defaultParagraphSeparator', false, 'p');
        } catch (err) {}
        this.updateToolbarState();
      });
      this.visualEditor.addEventListener('blur', (e) => this.handleBlur(e));
    }
    
    if (this.codeEditor) {
      this.codeEditor.addEventListener('input', () => {
        this.content = this.codeEditor.value;
        this.isDirty = true;
        this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
      });
      this.codeEditor.addEventListener('blur', (e) => this.handleBlur(e));
    }
  }

  scrollCursorIntoView() {
    if (this._scrollRaf) {
      cancelAnimationFrame(this._scrollRaf);
    }
    this._scrollRaf = requestAnimationFrame(() => {
      this._scrollRaf = null;
      if (this.isCodeMode || !this.visualEditor) return;

      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const range = sel.getRangeAt(0);
      if (!this.visualEditor.contains(range.startContainer)) return;

      let rect = null;
      const rects = range.getClientRects();
      if (rects && rects.length > 0) {
        rect = rects[rects.length - 1];
      } else {
        rect = range.getBoundingClientRect();
      }

      let activeNode = range.startContainer;
      if (activeNode.nodeType === Node.TEXT_NODE) {
        activeNode = activeNode.parentElement;
      }

      if (!rect || (rect.top === 0 && rect.bottom === 0) || (rect.width === 0 && rect.height === 0)) {
        if (activeNode && activeNode !== this.visualEditor) {
          rect = activeNode.getBoundingClientRect();
        }
      }

      if (!rect || (rect.top === 0 && rect.bottom === 0)) return;

      // Calculate relative typography metrics (em and line-height)
      const targetElement = (activeNode && activeNode !== this.visualEditor) ? activeNode : this.visualEditor;
      const computedStyle = window.getComputedStyle(targetElement);
      const em = parseFloat(computedStyle.fontSize) || 16;
      const parsedLineHeight = parseFloat(computedStyle.lineHeight);
      const lineH = (!isNaN(parsedLineHeight) && parsedLineHeight > 0)
        ? parsedLineHeight
        : (rect.height > 0 ? rect.height : em * 1.8);

      const triggerBuffer = 0.3 * em;      // Small buffer threshold before bottom collision
      const targetClearance = 1.8 * lineH;   // Comfortable breathing room (~1.8 lines) below cursor

      // Handle internal scroll container if height is fixed
      const isInternalScroll = this.visualEditor.scrollHeight > this.visualEditor.clientHeight &&
        window.getComputedStyle(this.visualEditor).overflowY !== 'visible';

      if (isInternalScroll) {
        const editorRect = this.visualEditor.getBoundingClientRect();
        if (rect.bottom > editorRect.bottom - triggerBuffer) {
          const target = editorRect.bottom - targetClearance;
          this.visualEditor.scrollTop += (rect.bottom - target);
        } else if (rect.top < editorRect.top + triggerBuffer) {
          const targetTop = editorRect.top + targetClearance;
          this.visualEditor.scrollTop -= (targetTop - rect.top);
        }
        return;
      }

      // Page / window scrolling:
      const viewportHeight = (window.visualViewport && window.visualViewport.height)
        ? window.visualViewport.height
        : window.innerHeight;

      let bottomObstruction = 0;
      const statusbar = document.querySelector('.tinymce-statusbar') || this.parentElement?.querySelector('.tinymce-statusbar');
      if (statusbar) {
        const sbRect = statusbar.getBoundingClientRect();
        const sbHeight = statusbar.offsetHeight || (1.75 * em);
        // Only treat as obstruction if actively docked at the viewport bottom
        if (sbRect.bottom >= viewportHeight - (0.5 * em) && sbRect.top < viewportHeight) {
          bottomObstruction = Math.max(0, Math.min(viewportHeight - sbRect.top, sbHeight + (1.5 * em)));
        }
      }

      const triggerThreshold = viewportHeight - bottomObstruction - triggerBuffer;
      if (rect.bottom > triggerThreshold) {
        const targetBottom = viewportHeight - bottomObstruction - targetClearance;
        const scrollAmount = rect.bottom - targetBottom;
        if (scrollAmount > 0) {
          window.scrollBy({ top: scrollAmount, behavior: 'auto' });
        }
      }
    });
  }

  toggleMobileMenu(menuName) {
    if (this.activeMobileMenu === menuName) {
      this.closeAllMobileMenus();
    } else {
      this.openMobileMenu(menuName);
    }
  }

  openMobileMenu(menuName) {
    this.closeAllMobileMenus();
    this.activeMobileMenu = menuName;
    const menu = this.querySelector(`.mobile-dropdown-menu[data-menu="${menuName}"]`);
    const toggleBtn = this.querySelector(`.btn-mobile-dropdown-toggle[data-menu="${menuName}"]`);
    if (menu) menu.style.display = 'block';
    if (toggleBtn) toggleBtn.classList.add('active');
    if (this.mobileBackdrop) this.mobileBackdrop.style.display = 'block';
  }

  closeAllMobileMenus() {
    this.activeMobileMenu = null;
    const menus = this.querySelectorAll('.mobile-dropdown-menu');
    menus.forEach(m => m.style.display = 'none');
    const toggleBtns = this.querySelectorAll('.btn-mobile-dropdown-toggle');
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    if (this.mobileBackdrop) this.mobileBackdrop.style.display = 'none';
  }

  toggleCodeMode() {
    try {
      this.isCodeMode = !this.isCodeMode;
      
      if (this.isCodeMode) {
        this.classList.add('is-code-mode');
        if (this.visualEditor) {
          this.cleanInternalStyles(this.visualEditor);
          this.content = this.visualEditor.innerHTML;
        }
        try {
          this.normalizeDivsToParagraphs();
        } catch (e) {}
        
        if (this.codeEditor) {
          this.codeEditor.value = this.formatHTML ? this.formatHTML(this.content) : this.content;
        }
        if (this.visualWrapper) {
          this.visualWrapper.style.setProperty('display', 'none', 'important');
          this.visualWrapper.style.setProperty('visibility', 'hidden', 'important');
        }
        if (this.codeWrapper) {
          this.codeWrapper.style.setProperty('display', 'block', 'important');
          this.codeWrapper.style.setProperty('visibility', 'visible', 'important');
          this.codeWrapper.style.setProperty('opacity', '1', 'important');
        }
        if (this.toolbarFormatting) {
          this.toolbarFormatting.style.setProperty('display', 'none', 'important');
        }
        if (this.codeModeTitle) {
          this.codeModeTitle.style.setProperty('display', 'inline-block', 'important');
          this.codeModeTitle.style.setProperty('visibility', 'visible', 'important');
        }
        if (this.mobileToolbar) {
          this.mobileToolbar.style.setProperty('display', 'none', 'important');
        }
        if (this.mobileCodeModeBar) {
          this.mobileCodeModeBar.style.setProperty('display', 'none', 'important');
        }
        if (this.btnToggle) {
          this.btnToggle.style.backgroundColor = '#2563eb';
          this.btnToggle.style.color = '#ffffff';
          this.btnToggle.style.borderColor = '#2563eb';
        }
        if (this.btnToggleIcon) this.btnToggleIcon.className = 'fa-solid fa-eye btn-toggle-icon';
        if (this.btnToggleText) this.btnToggleText.textContent = (this.t && this.t.editVisual) ? this.t.editVisual : 'Visual View';
      } else {
        this.classList.remove('is-code-mode');
        if (this.codeEditor) {
          this.content = this.codeEditor.value;
        }
        if (this.visualEditor) {
          this.visualEditor.innerHTML = this.content;
          this.cleanInternalStyles(this.visualEditor);
          this.normalizeParagraphsIndentation();
        }
        if (this.visualWrapper) {
          this.visualWrapper.style.setProperty('display', 'block', 'important');
          this.visualWrapper.style.setProperty('visibility', 'visible', 'important');
          this.visualWrapper.style.setProperty('opacity', '1', 'important');
        }
        if (this.codeWrapper) {
          this.codeWrapper.style.setProperty('display', 'none', 'important');
          this.codeWrapper.style.setProperty('visibility', 'hidden', 'important');
        }
        if (this.toolbarFormatting) {
          this.toolbarFormatting.style.setProperty('display', 'flex', 'important');
          this.toolbarFormatting.style.setProperty('visibility', 'visible', 'important');
        }
        if (this.codeModeTitle) {
          this.codeModeTitle.style.setProperty('display', 'none', 'important');
        }
        if (this.btnToggle) {
          this.btnToggle.style.backgroundColor = '';
          this.btnToggle.style.color = '';
          this.btnToggle.style.borderColor = '';
        }
        if (this.mobileToolbar) {
          this.mobileToolbar.style.removeProperty('display');
        }
        if (this.mobileCodeModeBar) {
          this.mobileCodeModeBar.style.setProperty('display', 'none', 'important');
        }
        if (this.btnToggleIcon) this.btnToggleIcon.className = 'fa-solid fa-code btn-toggle-icon';
        if (this.btnToggleText) this.btnToggleText.textContent = (this.t && this.t.editCode) ? this.t.editCode : 'HTML Code';
        setTimeout(() => this.updateToolbarState());
      }

      if (this.hiddenInput) {
        this.hiddenInput.value = this.content;
      }
    } catch (err) {
      console.error('[HtmlEditor] toggleCodeMode error:', err);
    }
  }

  updateContentFromVisual(cleanDom = false) {
    if (this.isCodeMode) {
      if (this.codeEditor) {
        this._content = this.codeEditor.value;
        if (this.visualEditor && this.visualEditor.innerHTML !== this._content) {
          this.visualEditor.innerHTML = this._content;
        }
        if (this.hiddenInput) {
          this.hiddenInput.value = this._content;
        }
      }
      return;
    }
    const trimmed = this.visualEditor.innerHTML.trim();
    if (trimmed === '' || trimmed === '<br>') {
      const firstP = this.visualEditor.querySelector('p');
      if (!firstP) {
        this.visualEditor.innerHTML = '<p class="noindent"><br></p>';
      }
    }
    if (cleanDom) {
      this.cleanInternalStyles(this.visualEditor);
      this.normalizeParagraphsIndentation();
    }
    this._content = this.visualEditor.innerHTML;
    if (this.hiddenInput) {
      this.hiddenInput.value = this._content;
    }
    this.dispatchEvent(new CustomEvent('contentchange', { detail: this._content }));
  }

  cleanInternalStyles(container) {
    if (!container) return;

    // 1. Remove style, meta, link, script, xml, o:p tags if pasted
    container.querySelectorAll('style, meta, link, script, xml, o\\:p').forEach(el => el.remove());
    Array.from(container.querySelectorAll('*')).forEach(el => {
      if (el.tagName && (el.tagName.toLowerCase() === 'o:p' || el.tagName.includes(':'))) {
        el.remove();
      }
    });

    // 2. Convert bold/italic/underline styles to semantic tags before stripping styles
    const allStyled = Array.from(container.querySelectorAll('[style]'));
    allStyled.forEach(el => {
      const fw = el.style.fontWeight;
      const fs = el.style.fontStyle;
      const td = el.style.textDecoration;

      const isBold = (fw === 'bold' || fw === '700' || fw === '800' || fw === '900');
      const isItalic = (fs === 'italic' || fs === 'oblique');
      const isUnderline = (td && td.includes('underline'));

      if (isBold && el.tagName !== 'STRONG' && el.tagName !== 'B') {
        const strong = document.createElement('strong');
        while (el.firstChild) strong.appendChild(el.firstChild);
        el.appendChild(strong);
      }
      if (isItalic && el.tagName !== 'EM' && el.tagName !== 'I') {
        const em = document.createElement('em');
        while (el.firstChild) em.appendChild(el.firstChild);
        el.appendChild(em);
      }
      if (isUnderline && el.tagName !== 'U') {
        const u = document.createElement('u');
        while (el.firstChild) u.appendChild(el.firstChild);
        el.appendChild(u);
      }
    });

    // 3. Remove all data-* attributes
    const allElements = container.querySelectorAll('*');
    allElements.forEach(el => {
      const attrsToRemove = [];
      for (let i = 0; i < el.attributes.length; i++) {
        const attr = el.attributes[i];
        if (attr.name.startsWith('data-')) {
          attrsToRemove.push(attr.name);
        }
      }
      attrsToRemove.forEach(name => el.removeAttribute(name));
    });

    // 4. Strip prohibited styling properties from any element
    const styledEls = container.querySelectorAll('[style]');
    styledEls.forEach(el => {
      el.style.removeProperty('font-size');
      el.style.removeProperty('letter-spacing');
      el.style.removeProperty('font-family');
      el.style.removeProperty('line-height');
      el.style.removeProperty('font-weight');
      el.style.removeProperty('font-style');
      el.style.removeProperty('text-decoration');
      el.style.removeProperty('background');
      el.style.removeProperty('background-color');
      el.style.removeProperty('color');
      el.style.removeProperty('text-indent');
      el.style.removeProperty('margin');
      el.style.removeProperty('margin-top');
      el.style.removeProperty('margin-bottom');
      el.style.removeProperty('margin-left');
      el.style.removeProperty('margin-right');
      el.style.removeProperty('padding');
      el.style.removeProperty('padding-top');
      el.style.removeProperty('padding-bottom');
      el.style.removeProperty('padding-left');
      el.style.removeProperty('padding-right');

      let s = el.getAttribute('style') || '';
      if (/mso-/i.test(s)) {
        s = s.replace(/mso-[^;:]+:[^;]+;?/gi, '').trim();
        if (s) el.setAttribute('style', s);
        else el.removeAttribute('style');
      }

      const rem = el.getAttribute('style');
      if (!rem || rem.trim() === '') {
        el.removeAttribute('style');
      }
    });

    // 5. Clean Word/Mso classes and redundant Word attributes (lang, dir="rtl", align)
    Array.from(container.querySelectorAll('*')).forEach(el => {
      if (el.classList && el.classList.length > 0) {
        const msoClasses = [];
        el.classList.forEach(cls => {
          if (/^mso/i.test(cls)) {
            msoClasses.push(cls);
          }
        });
        msoClasses.forEach(cls => el.classList.remove(cls));
        if (el.getAttribute('class') === '') {
          el.removeAttribute('class');
        }
      }
      el.removeAttribute('lang');
      if (el.getAttribute('dir') && el.getAttribute('dir').toUpperCase() === 'RTL') {
        el.removeAttribute('dir');
      }
      if (el.getAttribute('align')) {
        el.removeAttribute('align');
      }
    });

    // 6. Unwrap font tags and useless span tags
    const spansAndFonts = Array.from(container.querySelectorAll('font, span'));
    spansAndFonts.forEach(el => {
      if (el.nodeName === 'FONT') {
        el.replaceWith(...el.childNodes);
      } else if (el.nodeName === 'SPAN') {
        if (el.classList.contains('footnote-marker') || el.classList.contains('footnote-ref')) {
          return;
        }
        const hasClass = el.getAttribute('class') && el.getAttribute('class').trim() !== '';
        const hasStyle = el.getAttribute('style') && el.getAttribute('style').trim() !== '';
        const hasId = el.getAttribute('id') && el.getAttribute('id').trim() !== '';
        if (!hasClass && !hasStyle && !hasId) {
          el.replaceWith(...el.childNodes);
        }
      }
    });
  }

  normalizeDivsToParagraphs() {
    if (!this.visualEditor) return;
    let changed = false;
    const divs = Array.from(this.visualEditor.querySelectorAll('div'));
    divs.forEach(div => {
      let parent = div.parentNode;
      while (parent && parent !== this.visualEditor) {
        parent = parent.parentNode;
      }
      if (parent !== this.visualEditor) return;

      const p = document.createElement('p');
      for (let i = 0; i < div.attributes.length; i++) {
        const attr = div.attributes[i];
        p.setAttribute(attr.name, attr.value);
      }
      while (div.firstChild) {
        p.appendChild(div.firstChild);
      }
      div.parentNode.replaceChild(p, div);
      changed = true;
    });
    
    const indentChanged = this.normalizeParagraphsIndentation();
    if (changed || indentChanged) {
      this.content = this.visualEditor.innerHTML;
    }
  }

  getCurrentParagraph() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;
    let node = selection.getRangeAt(0).startContainer;
    while (node && node !== this.visualEditor) {
      if (node.nodeName === 'P') {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  }

  isParagraphBlank(p) {
    if (!p) return false;
    const text = p.textContent.replace(/[\s\u200B\u00A0]/g, '');
    const inner = p.innerHTML.trim();
    return text === '' && (inner === '' || inner === '<br>' || inner === '<br/>' || inner === '&nbsp;');
  }

  normalizeParagraphsIndentationLocal() {
    return this.normalizeParagraphsIndentation();
  }

  normalizeParagraphsIndentation() {
    if (!this.visualEditor) return false;
    
    let changed = false;
    const paragraphs = Array.from(this.visualEditor.querySelectorAll('p'));
    
    paragraphs.forEach((p, index) => {
      // Respect manual indentation overrides
      if (p.dataset.manualIndent === 'yes' || p.classList.contains('indent')) {
        if (p.classList.contains('noindent')) {
          p.classList.remove('noindent');
          changed = true;
        }
        if (!p.classList.contains('indent')) {
          p.classList.add('indent');
          changed = true;
        }
        return;
      }
      if (p.dataset.manualIndent === 'no') {
        if (p.classList.contains('indent')) {
          p.classList.remove('indent');
          changed = true;
        }
        if (!p.classList.contains('noindent')) {
          p.classList.add('noindent');
          changed = true;
        }
        return;
      }

      const prev = p.previousElementSibling;
      const isFirst = (index === 0 || !prev || prev.nodeName !== 'P');
      const isAfterBlank = (prev && prev.nodeName === 'P' && this.isParagraphBlank(prev));
      const isAfterSep = (prev && prev.classList && prev.classList.contains('scene-separator'));
      const isSep = p.classList && p.classList.contains('scene-separator');
      const shouldBeNoIndent = (isFirst || isAfterBlank || isAfterSep || isSep);
      
      if (shouldBeNoIndent) {
        if (!p.classList.contains('noindent')) {
          p.classList.add('noindent');
          changed = true;
        }
      } else {
        if (p.classList.contains('noindent')) {
          p.classList.remove('noindent');
          changed = true;
        }
      }

      // Clean up any legacy inline text-indent styles
      const styleAttr = p.getAttribute('style') || '';
      if (/text-indent/i.test(styleAttr)) {
        let newStyle = styleAttr.replace(/text-indent\s*:\s*[^;]+;?/gi, '').trim();
        if (newStyle === '') {
          p.removeAttribute('style');
        } else {
          p.setAttribute('style', newStyle);
        }
        changed = true;
      }
      if (p.getAttribute('class') === '') {
        p.removeAttribute('class');
      }
    });
    
    return changed;
  }

  getSelectedParagraphs() {
    if (!this.visualEditor) return [];
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return [];
    
    const range = selection.getRangeAt(0);
    if (!this.visualEditor.contains(range.commonAncestorContainer)) {
      return [];
    }
    
    if (range.collapsed) {
      const curP = this.getCurrentParagraph();
      return curP ? [curP] : [];
    }
    
    const allP = Array.from(this.visualEditor.querySelectorAll('p'));
    const selected = allP.filter(p => {
      try {
        return selection.containsNode(p, true);
      } catch (e) {
        return false;
      }
    });
    
    if (selected.length === 0) {
      const curP = this.getCurrentParagraph();
      if (curP) return [curP];
    }
    return selected;
  }

  isParagraphIndented(p) {
    if (!p) return false;
    if (p.classList.contains('indent')) return true;
    if (p.classList.contains('noindent')) return false;
    
    const prev = p.previousElementSibling;
    const isFirst = (!prev || prev.nodeName !== 'P');
    if (isFirst) return false;
    if (this.isParagraphBlank(prev)) return false;
    return true;
  }

  toggleParagraphIndent() {
    if (this.isCodeMode || !this.visualEditor) return;
    
    const paragraphs = this.getSelectedParagraphs();
    if (paragraphs.length === 0) return;
    
    const allIndented = paragraphs.every(p => this.isParagraphIndented(p));
    const makeIndented = !allIndented;
    
    paragraphs.forEach(p => {
      if (makeIndented) {
        p.classList.remove('noindent');
        p.classList.add('indent');
        p.dataset.manualIndent = 'yes';
      } else {
        p.classList.remove('indent');
        p.classList.add('noindent');
        p.dataset.manualIndent = 'no';
      }
      if (p.getAttribute('class') === '') {
        p.removeAttribute('class');
      }
    });
    
    this.updateContentFromVisual();
    this.updateToolbarState();
    this.isDirty = true;
    this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
  }

  formatHTML(html) {
    if (!html) return '';
    let formatted = html;
    
    // Add newline after closing tags and self-closing tags
    formatted = formatted.replace(/(<\/(p|div|h1|h2|h3|h4|h5|h6|ul|ol|li|section|article|form|table|tr|thead|tbody)>)/gi, '$1\n');
    formatted = formatted.replace(/(<br\s*\/?>)/gi, '$1\n');
    
    // Add newline before opening tags if there isn't one already
    formatted = formatted.replace(/([^\n])(<(p|div|h1|h2|h3|h4|h5|h6|ul|ol|li|section|article|form|table|tr|thead|tbody)(?:\s+[^>]*)?>)/gi, '$1\n$2');
    
    // Trim extra spaces from lines and join
    return formatted.split('\n').map(line => line.trim()).filter(line => line !== '').join('\n');
  }

  updateDirectionUI() {
    if (!this.visualEditor || this._isUpdatingDir) return;
    this._isUpdatingDir = true;

    const dir = (this.direction === 'rtl') ? 'rtl' : 'ltr';
    if (this.getAttribute('dir') !== dir) {
      this.setAttribute('dir', dir);
    }
    this.visualEditor.setAttribute('dir', dir);
    this.visualEditor.style.direction = dir;
    this.visualEditor.style.textAlign = (dir === 'rtl') ? 'right' : 'left';

    if (this.codeEditor) {
      this.codeEditor.setAttribute('dir', dir);
      this.codeEditor.style.direction = dir;
      this.codeEditor.style.textAlign = (dir === 'rtl') ? 'right' : 'left';
    }

    if (this.btnLtr && this.btnRtl) {
      this.toggleButtonActive(this.btnLtr, dir === 'ltr');
      this.toggleButtonActive(this.btnRtl, dir === 'rtl');
    }

    this.dispatchEvent(new CustomEvent('directionchange', {
      detail: { direction: dir },
      bubbles: true,
      composed: true
    }));

    this._isUpdatingDir = false;
  }

  updateLocalizedTexts() {
    if (!this.t) return;
    
    // Update code mode title
    if (this.codeModeTitle) {
      this.codeModeTitle.textContent = this.t.editSourceTitle;
    }
    
    // Update Save button text
    const btnSave = this.querySelector('.btn-save');
    if (btnSave) {
      btnSave.innerHTML = `<i class="fa fa-save" style="margin-inline-end: 4px;"></i>${this.t.save}`;
    }
    
    // Update Cancel button text
    const btnCancel = this.querySelector('.btn-cancel');
    if (btnCancel) {
      btnCancel.innerHTML = `<i class="fa fa-times" style="margin-inline-end: 4px; color: #d9534f;"></i>${this.t.cancel}`;
    }
    
    // Update Toggle button text
    if (this.btnToggleText) {
      this.btnToggleText.textContent = this.isCodeMode ? this.t.editVisual : this.t.editCode;
    }
    
    // Update Link Modal texts if present
    const modalTitle = this.querySelector('.link-modal h4');
    if (modalTitle) {
      modalTitle.textContent = this.t.modalTitle;
    }
    const modalUrlLabel = this.querySelector('.link-modal .form-group:nth-child(2) label');
    if (modalUrlLabel) {
      modalUrlLabel.textContent = this.t.modalUrl;
    }
    const modalTextLabel = this.querySelector('.link-modal .link-text-group label');
    if (modalTextLabel) {
      modalTextLabel.textContent = this.t.modalText;
    }
    const modalCancelBtn = this.querySelector('.link-modal .link-cancel-btn');
    if (modalCancelBtn) {
      modalCancelBtn.textContent = this.t.cancel;
    }
    const modalSaveBtn = this.querySelector('.link-modal .link-save-btn');
    if (modalSaveBtn) {
      modalSaveBtn.textContent = this.t.modalSave;
    }

    const imgModalTitle = this.querySelector('.image-modal h4 span');
    if (imgModalTitle) {
      imgModalTitle.textContent = this.t.imageModalTitle || 'Image Manager';
    }
    const imgModalSub = this.querySelector('.image-modal .image-modal-subtitle');
    if (imgModalSub) {
      imgModalSub.textContent = this.t.imageModalSubtitle || 'Images available in gallery. Click an image to insert into document.';
    }
    const imgUploadBtnSpan = this.querySelector('.story-image-upload-btn span');
    if (imgUploadBtnSpan) {
      imgUploadBtnSpan.textContent = this.t.uploadImageBtn || 'Upload Image';
    }
    const imgCancelBtn = this.querySelector('.image-modal-cancel-btn');
    if (imgCancelBtn) {
      imgCancelBtn.textContent = this.t.close || 'Close';
    }

    const isRtl = this.resolvedLang === 'he';
    const linkModalContent = this.querySelector('.link-modal-content');
    if (linkModalContent) {
      linkModalContent.style.direction = isRtl ? 'rtl' : 'ltr';
      linkModalContent.style.textAlign = isRtl ? 'right' : 'left';
    }
    const imgModalContent = this.querySelector('.image-modal-content');
    if (imgModalContent) {
      imgModalContent.style.direction = isRtl ? 'rtl' : 'ltr';
      imgModalContent.style.textAlign = isRtl ? 'right' : 'left';
    }
  }

  isSelectionInEditor() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return false;
    try {
      let node = selection.getRangeAt(0).startContainer;
      while (node) {
        if (node === this.visualEditor) {
          return true;
        }
        node = node.parentNode;
      }
    } catch (e) {}
    return false;
  }

  updateToolbarState() {
    if (this.isCodeMode) return;
    
    const inEditor = this.isSelectionInEditor();

    const isBold = inEditor ? document.queryCommandState('bold') : false;
    const isItalic = inEditor ? document.queryCommandState('italic') : false;
    const isUnderline = inEditor ? document.queryCommandState('underline') : false;
    const isSuperscript = inEditor ? document.queryCommandState('superscript') : false;
    const isAlignRight = inEditor ? document.queryCommandState('justifyRight') : false;
    const isAlignCenter = inEditor ? document.queryCommandState('justifyCenter') : false;
    const isAlignLeft = inEditor ? document.queryCommandState('justifyLeft') : false;
    const isUl = inEditor ? document.queryCommandState('insertUnorderedList') : false;
    const isOl = inEditor ? document.queryCommandState('insertOrderedList') : false;

    let formatBlock = '';
    if (inEditor) {
      let format = '';
      try {
        format = document.queryCommandValue('formatBlock');
      } catch (e) {}
      formatBlock = format ? format.toLowerCase().replace(/[<>]/g, '').trim() : '';
    }

    this.toggleButtonActive(this.btnBold, isBold);
    this.toggleButtonActive(this.btnItalic, isItalic);
    this.toggleButtonActive(this.btnUnderline, isUnderline);
    this.toggleButtonActive(this.btnSuperscript, isSuperscript);
    this.toggleButtonActive(this.btnAlignRight, isAlignRight);
    this.toggleButtonActive(this.btnAlignCenter, isAlignCenter);
    this.toggleButtonActive(this.btnAlignLeft, isAlignLeft);
    this.toggleButtonActive(this.btnUl, isUl);
    this.toggleButtonActive(this.btnOl, isOl);

    this.toggleButtonActive(this.btnH1, formatBlock === 'h1');
    this.toggleButtonActive(this.btnH2, formatBlock === 'h2');
    this.toggleButtonActive(this.btnH3, formatBlock === 'h3');
    this.toggleButtonActive(this.btnP, ['p', 'normal', 'div'].includes(formatBlock));

    const curP = inEditor ? this.getCurrentParagraph() : null;
    const isIndented = curP ? this.isParagraphIndented(curP) : false;
    this.toggleButtonActive(this.btnIndent, isIndented);
    if (this.btnIndent) {
      this.btnIndent.title = isIndented ? (this.t.outdent || 'Remove Indent') : (this.t.indent || 'Add Indent');
    }

    const dir = this.direction || 'ltr';
    this.toggleButtonActive(this.btnLtr, dir === 'ltr');
    this.toggleButtonActive(this.btnRtl, dir === 'rtl');

    const hasLink = inEditor && this.getClosestAnchor() !== null;
    this.toggleButtonActive(this.btnLink, hasLink);

    // Update Mobile Dropdown Items active state
    this.toggleButtonActive(this.btnMobileH1, formatBlock === 'h1');
    this.toggleButtonActive(this.btnMobileH2, formatBlock === 'h2');
    this.toggleButtonActive(this.btnMobileH3, formatBlock === 'h3');
    this.toggleButtonActive(this.btnMobileP, ['p', 'normal', 'div'].includes(formatBlock));

    this.toggleButtonActive(this.btnMobileBold, isBold);
    this.toggleButtonActive(this.btnMobileItalic, isItalic);
    this.toggleButtonActive(this.btnMobileUnderline, isUnderline);
    this.toggleButtonActive(this.btnMobileSuperscript, isSuperscript);

    this.toggleButtonActive(this.btnMobileAlignRight, isAlignRight);
    this.toggleButtonActive(this.btnMobileAlignCenter, isAlignCenter);
    this.toggleButtonActive(this.btnMobileAlignLeft, isAlignLeft);

    this.toggleButtonActive(this.btnMobileUl, isUl);
    this.toggleButtonActive(this.btnMobileOl, isOl);
    this.toggleButtonActive(this.btnMobileIndent, isIndented);
    this.toggleButtonActive(this.btnMobileLtr, dir === 'ltr');
    this.toggleButtonActive(this.btnMobileRtl, dir === 'rtl');
    this.toggleButtonActive(this.btnMobileLink, hasLink);
  }

  toggleButtonActive(btn, isActive) {
    if (!btn) return;
    if (isActive) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  }

  triggerSave(force = false) {
    if (force || this.content !== this.lastSavedContent) {
      this.lastSavedContent = this.content;
      this.dispatchEvent(new CustomEvent('save', { detail: this.content }));
    }
  }

  handleBlur(event) {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) {
        this.normalizeDivsToParagraphs();
        this.triggerSave();
      }
    }, 150);
  }

  startAutosaveTimer() {
    // Autosave disabled
  }

  stopAutosaveTimer() {
    // Autosave disabled
  }

  async checkAndAutosave() {
    // Autosave disabled
  }

  async saveInBackground(isAutosave = false) {
    const parentForm = this.closest('form');
    if (!parentForm) {
      console.error('[HtmlEditor] Cannot save: parent form not found.');
      return;
    }

    // Check validity on manual save too
    if (!isAutosave && !parentForm.checkValidity()) {
      parentForm.reportValidity();
      return;
    }

    if (!this.isCodeMode) {
      this.normalizeDivsToParagraphs();
      this.content = this.visualEditor.innerHTML;
    } else {
      this.content = this.codeEditor.value;
    }

    if (this.hiddenInput) {
      this.hiddenInput.value = this.content;
    }

    const statusEl = this.querySelector('.save-status');
    if (statusEl) {
      statusEl.style.color = '#0275d8';
      statusEl.style.opacity = '1';
      statusEl.textContent = isAutosave ? this.t.autosaving : this.t.saving;
    }

    const url = parentForm.getAttribute('action') || window.location.href;
    const method = (parentForm.getAttribute('method') || 'POST').toUpperCase();
    const isNew = url.includes('/new') || url.includes('/create') || window.location.pathname.includes('/new') || window.location.pathname.includes('/create');
    
    // Create FormData from parent form
    const formData = new FormData(parentForm);

    console.log(`[HtmlEditor] Sending save request to ${url} (method: ${method})...`);

    try {
      const response = await fetch(url, {
        method: method,
        body: formData
      });

      if (response.ok) {
        this.lastSavedContent = this.content;
        console.log('[HtmlEditor] Save successful.');

        if (isNew && response.redirected) {
          console.log(`[HtmlEditor] Redirecting to new page: ${response.url}`);
          window.location.href = response.url;
          return;
        }

        if (!isAutosave) {
          this.showToast(this.t.saveSuccessToast, 'success');
        }

        if (statusEl) {
          statusEl.style.color = '#5cb85c';
          statusEl.style.opacity = '1';
          const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          statusEl.textContent = isAutosave ? `${this.t.autosavedAt}${now}` : `${this.t.savedAt}${now}`;
          setTimeout(() => {
            if (this.content === this.lastSavedContent && statusEl.textContent.includes(now)) {
              statusEl.style.opacity = '0';
            }
          }, 5000);
        }
        this.dispatchEvent(new CustomEvent('save-success', { detail: { content: this.content, isAutosave } }));
      } else {
        const text = await response.text();
        console.error('[HtmlEditor] Server returned error response:', response.status, text);
        throw new Error(`Server returned status ${response.status}`);
      }
    } catch (e) {
      console.error('[HtmlEditor] Save request failed:', e);
      if (statusEl) {
        statusEl.style.color = '#d9534f';
        statusEl.style.opacity = '1';
        statusEl.textContent = this.t.saveError;
      }
      this.showToast(this.t.saveErrorToast + e.message, 'error');
      this.dispatchEvent(new CustomEvent('save-error', { detail: { error: e.message, isAutosave } }));
    }
  }

  showToast(message, type = 'success') {
    let container = document.getElementById('html-editor-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'html-editor-toast-container';
      container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none;';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.style.cssText = `
      padding: 12px 24px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      direction: rtl;
      font-family: sans-serif;
      pointer-events: auto;
    `;

    if (type === 'success') {
      toast.style.backgroundColor = '#5cb85c';
    } else if (type === 'error') {
      toast.style.backgroundColor = '#d9534f';
    } else {
      toast.style.backgroundColor = '#0275d8';
    }

    toast.textContent = message;
    container.appendChild(toast);

    toast.offsetHeight; // trigger reflow
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => {
        toast.remove();
        if (container.children.length === 0) {
          container.remove();
        }
      }, 300);
    }, 4000);
  }

  getClosestAnchor() {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return null;
    let node = selection.getRangeAt(0).startContainer;
    while (node && node !== this.visualEditor) {
      if (node.nodeName === 'A') {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  }

  showLinkModal() {
    const anchor = this.getClosestAnchor();
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    this.savedRange = selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;

    if (anchor) {
      if (this.modalUrlInput) this.modalUrlInput.value = anchor.getAttribute('href') || '';
      if (this.modalTextInput) this.modalTextInput.value = anchor.innerText;
    } else {
      if (this.modalUrlInput) this.modalUrlInput.value = 'https://';
      if (this.modalTextInput) this.modalTextInput.value = selectedText;
    }

    if (this.linkModal) {
      this.linkModal.style.setProperty('display', 'flex', 'important');
      this.linkModal.style.setProperty('visibility', 'visible', 'important');
      this.linkModal.style.setProperty('opacity', '1', 'important');
      this.linkModal.style.setProperty('z-index', '999999', 'important');
    }
    if (this.modalUrlInput) {
      this.modalUrlInput.focus();
      this.modalUrlInput.select();
    }
  }

  closeLinkModal() {
    if (this.linkModal) {
      this.linkModal.style.setProperty('display', 'none', 'important');
      this.linkModal.style.setProperty('visibility', 'hidden', 'important');
    }
    if (this.savedRange) {
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(this.savedRange);
    }
    if (this.visualEditor) {
      this.visualEditor.focus();
    }
    this.savedRange = null;
    this.updateToolbarState();
  }

  saveLink() {
    const url = this.modalUrlInput.value.trim();
    const text = this.modalTextInput.value.trim();

    // Restore selection first so DOM edits apply to the correct cursor location
    const selection = window.getSelection();
    selection.removeAllRanges();
    if (this.savedRange) {
      selection.addRange(this.savedRange);
    }

    const anchor = this.getClosestAnchor();
    if (anchor) {
      if (!url || url === 'https://') {
        const parent = anchor.parentNode;
        while (anchor.firstChild) {
          parent.insertBefore(anchor.firstChild, anchor);
        }
        parent.removeChild(anchor);
        this.savedRange = null;
      } else {
        anchor.href = url;
        if (text) {
          anchor.innerText = text;
        }
        this.savedRange = document.createRange();
        this.savedRange.selectNodeContents(anchor);
      }
    } else {
      if (!url || url === 'https://') {
        this.closeLinkModal();
        return;
      }

      const newAnchor = document.createElement('a');
      newAnchor.href = url;
      
      if (this.savedRange && !this.savedRange.collapsed) {
        newAnchor.appendChild(this.savedRange.extractContents());
      } else {
        newAnchor.innerText = text || url;
      }

      if (this.savedRange) {
        this.savedRange.insertNode(newAnchor);
        const newRange = document.createRange();
        newRange.setStartAfter(newAnchor);
        newRange.setEndAfter(newAnchor);
        this.savedRange = newRange;
      } else {
        this.visualEditor.appendChild(newAnchor);
        this.savedRange = null;
      }
    }

    this.updateContentFromVisual();
    this.closeLinkModal();
  }

  openImageModal() {
    this.savedRange = null;
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      if (this.visualEditor && this.visualEditor.contains(range.commonAncestorContainer)) {
        this.savedRange = range.cloneRange();
      }
    }

    if (this.imageModal) {
      this.imageModal.style.setProperty('display', 'flex', 'important');
      this.imageModal.style.setProperty('visibility', 'visible', 'important');
      this.imageModal.style.setProperty('opacity', '1', 'important');
      this.imageModal.style.setProperty('z-index', '999999', 'important');

      this.switchImageTab(this.activeImageTab || 'upload');
      this.loadImageGallery();
    }
  }

  closeImageModal() {
    if (this.imageModal) {
      this.imageModal.style.setProperty('display', 'none', 'important');
      this.imageModal.style.removeProperty('visibility');
      this.imageModal.style.removeProperty('opacity');
      this.imageModal.style.removeProperty('z-index');
    }
    this.clearSelectedImageFile();
    if (this.imageUrlInput) this.imageUrlInput.value = '';
    if (this.imageUrlAltInput) this.imageUrlAltInput.value = '';
    if (this.urlPreviewBox) this.urlPreviewBox.style.display = 'none';
    if (this.storyImageUploadStatus) {
      this.storyImageUploadStatus.style.display = 'none';
      this.storyImageUploadStatus.innerHTML = '';
    }
    this.selectedGalleryImage = null;

    if (this.visualEditor) {
      this.visualEditor.focus();
    }
  }

  switchImageTab(tabName) {
    this.activeImageTab = tabName || 'upload';

    if (this.imageTabBtns) {
      this.imageTabBtns.forEach(btn => {
        const matches = btn.getAttribute('data-tab') === this.activeImageTab;
        btn.classList.toggle('active', matches);
      });
    }

    if (this.imageTabPanels) {
      this.imageTabPanels.forEach(panel => {
        const matches = panel.getAttribute('data-pane') === this.activeImageTab;
        panel.classList.toggle('active', matches);
      });
    }

    if (this.activeImageTab === 'gallery') {
      this.loadImageGallery();
    }
  }

  handleImageFileSelected(file) {
    if (!file || !file.type.startsWith('image/')) {
      alert(this.t.selectValidImage || 'Please select a valid image file.');
      return;
    }

    this.selectedImageFile = file;

    if (this.uploadPreviewName) {
      this.uploadPreviewName.textContent = file.name;
    }
    if (this.uploadPreviewSize) {
      const sizeKB = Math.round(file.size / 1024);
      this.uploadPreviewSize.textContent = sizeKB > 1024 ? `${(sizeKB / 1024).toFixed(1)} MB` : `${sizeKB} KB`;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (this.uploadPreviewImg) {
        this.uploadPreviewImg.src = e.target.result;
      }
      if (this.uploadPreviewContainer) {
        this.uploadPreviewContainer.style.display = 'block';
      }
      if (this.imageDropzone) {
        this.imageDropzone.style.display = 'none';
      }
    };
    reader.readAsDataURL(file);
  }

  clearSelectedImageFile() {
    this.selectedImageFile = null;
    if (this.storyImageFileInput) {
      this.storyImageFileInput.value = '';
    }
    if (this.uploadPreviewContainer) {
      this.uploadPreviewContainer.style.display = 'none';
    }
    if (this.uploadPreviewImg) {
      this.uploadPreviewImg.src = '';
    }
    if (this.imageDropzone) {
      this.imageDropzone.style.display = 'block';
    }
    if (this.uploadAltInput) {
      this.uploadAltInput.value = '';
    }
  }

  async handleImageModalSubmit() {
    const activeTab = this.activeImageTab || 'upload';

    if (activeTab === 'upload') {
      if (!this.selectedImageFile) {
        alert(this.t.selectImageFirst || 'Please select an image file to upload.');
        return;
      }

      const altText = this.uploadAltInput ? this.uploadAltInput.value.trim() : '';
      let imageUrl = '';

      if (this.storyImageUploadStatus) {
        this.storyImageUploadStatus.style.display = 'block';
        this.storyImageUploadStatus.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: center; gap: 8px; color: #2563eb; font-size: 14px; padding: 10px;">
            <i class="fa-solid fa-spinner fa-spin"></i>
            <span>${this.t.uploadingImage || 'Processing image...'}</span>
          </div>
        `;
      }

      try {
        if (typeof this.onUploadImage === 'function') {
          imageUrl = await this.onUploadImage(this.selectedImageFile);
        } else {
          imageUrl = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (err) => reject(err);
            reader.readAsDataURL(this.selectedImageFile);
          });
        }

        if (imageUrl) {
          this.sessionImages = this.sessionImages || [];
          this.sessionImages.unshift({
            url: imageUrl,
            alt: altText || this.selectedImageFile.name,
            name: this.selectedImageFile.name,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });

          this.insertImageIntoContent(imageUrl, altText);
          this.closeImageModal();
        }
      } catch (err) {
        console.error('Error processing image:', err);
        if (this.storyImageUploadStatus) {
          this.storyImageUploadStatus.innerHTML = `
            <div style="color: #dc2626; font-size: 13px; text-align: center; padding: 10px;">
              ${this.t.uploadFailed || 'Failed to process image.'}
            </div>
          `;
        }
      }
    } else if (activeTab === 'url') {
      const url = this.imageUrlInput ? this.imageUrlInput.value.trim() : '';
      const altText = this.imageUrlAltInput ? this.imageUrlAltInput.value.trim() : '';

      if (!url) {
        alert(this.t.enterImageUrl || 'Please enter a valid image URL.');
        return;
      }

      this.sessionImages = this.sessionImages || [];
      this.sessionImages.unshift({
        url: url,
        alt: altText || 'Web Image',
        name: 'Web Image',
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      this.insertImageIntoContent(url, altText);
      this.closeImageModal();
    } else if (activeTab === 'gallery') {
      if (!this.selectedGalleryImage) {
        alert(this.t.selectGalleryImage || 'Please select an image from the gallery.');
        return;
      }

      this.insertImageIntoContent(this.selectedGalleryImage.url, this.selectedGalleryImage.alt);
      this.closeImageModal();
    }
  }

  async loadImageGallery() {
    if (!this.storyImageGalleryGrid) return;

    this.sessionImages = this.sessionImages || [];

    if (typeof this.onFetchGallery === 'function') {
      try {
        const remoteImages = await this.onFetchGallery();
        if (Array.isArray(remoteImages)) {
          remoteImages.forEach(rImg => {
            const url = typeof rImg === 'string' ? rImg : rImg.url;
            if (url && !this.sessionImages.some(img => img.url === url)) {
              this.sessionImages.push({
                url: url,
                alt: rImg.alt || '',
                name: rImg.name || 'Image',
                date: rImg.date || ''
              });
            }
          });
        }
      } catch (e) {
        console.warn('Error fetching custom gallery:', e);
      }
    }

    if (this.storyImagesCount) {
      this.storyImagesCount.textContent = `(${this.sessionImages.length})`;
    }

    if (this.sessionImages.length === 0) {
      this.storyImageGalleryGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: #64748b;">
          <i class="fa-regular fa-images" style="font-size: 38px; color: #94a3b8; margin-bottom: 12px; display: block;"></i>
          <span style="font-size: 14px; font-weight: 500;">${this.t.noImagesYet || 'No images yet. Upload an image or enter a URL to start.'}</span>
        </div>
      `;
      return;
    }

    this.storyImageGalleryGrid.innerHTML = '';
    this.sessionImages.forEach((imgObj, idx) => {
      const card = document.createElement('div');
      card.className = 'gallery-image-card';
      card.style.cssText = `
        position: relative;
        border: 2px solid ${this.selectedGalleryImage && this.selectedGalleryImage.url === imgObj.url ? '#2563eb' : '#e2e8f0'};
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        background: #f8fafc;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
      `;

      card.innerHTML = `
        <img src="${imgObj.url}" alt="${imgObj.alt || ''}" style="width: 100%; height: 100%; object-fit: cover;">
        <button type="button" class="btn-remove-gallery-img" title="Remove" style="
          position: absolute;
          top: 6px;
          inset-inline-end: 6px;
          background: rgba(15, 23, 42, 0.7);
          color: #ffffff;
          border: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        "><i class="fa-solid fa-times"></i></button>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove-gallery-img')) {
          e.stopPropagation();
          this.sessionImages.splice(idx, 1);
          if (this.selectedGalleryImage && this.selectedGalleryImage.url === imgObj.url) {
            this.selectedGalleryImage = null;
          }
          this.loadImageGallery();
          return;
        }

        this.selectedGalleryImage = imgObj;
        this.storyImageGalleryGrid.querySelectorAll('.gallery-image-card').forEach(c => {
          c.style.borderColor = '#e2e8f0';
        });
        card.style.borderColor = '#2563eb';
      });

      card.addEventListener('dblclick', () => {
        this.insertImageIntoContent(imgObj.url, imgObj.alt);
        this.closeImageModal();
      });

      this.storyImageGalleryGrid.appendChild(card);
    });
  }

  insertImageIntoContent(url, alt = '') {
    if (!url) return;

    if (this.visualEditor) {
      this.visualEditor.focus();
    }

    const img = document.createElement('img');
    img.src = url;
    img.alt = alt || '';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '4px';
    img.style.display = 'inline-block';
    img.style.margin = '8px 0';

    let inserted = false;
    if (this.savedRange) {
      try {
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(this.savedRange);
        this.savedRange.deleteContents();
        this.savedRange.insertNode(img);

        const newRange = document.createRange();
        newRange.setStartAfter(img);
        newRange.collapse(true);
        sel.removeAllRanges();
        sel.addRange(newRange);
        this.savedRange = newRange.cloneRange();
        inserted = true;
      } catch (e) {
        console.warn('Could not insert at savedRange:', e);
      }
    }

    if (!inserted && this.visualEditor) {
      this.visualEditor.appendChild(img);
    }

    this.normalizeParagraphsIndentation();
    this.updateContentFromVisual();
    this.updateToolbarState();
    this.isDirty = true;
    this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
    this.dispatchEvent(new CustomEvent('input', { bubbles: true, composed: true }));
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
  }

  findSeparatorImage(num) {
    const targetName = 'sep' + num + '.png';
    return (this.storyImages || []).find(img => {
      return img && img.name && img.name.toLowerCase() === targetName;
    });
  }

  getDeepestLastTextNode(node) {
    if (!node) return null;
    if (node.nodeType === Node.TEXT_NODE) return node;
    for (let i = node.childNodes.length - 1; i >= 0; i--) {
      const res = this.getDeepestLastTextNode(node.childNodes[i]);
      if (res) return res;
    }
    return null;
  }

  getRangeForPrecedingText(block, endNode, endOffset, charCount) {
    const r = document.createRange();

    let targetNode = endNode;
    let targetOffset = endOffset;

    if (targetNode.nodeType !== Node.TEXT_NODE) {
      const child = (targetOffset > 0 && targetNode.childNodes) ? targetNode.childNodes[targetOffset - 1] : targetNode.lastChild;
      const deepest = this.getDeepestLastTextNode(child);
      if (deepest) {
        targetNode = deepest;
        targetOffset = deepest.textContent.length;
      }
    }

    r.setEnd(targetNode, targetOffset);

    const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let cur;
    while ((cur = walker.nextNode())) {
      textNodes.push(cur);
    }

    let remaining = charCount;
    let startIndex = textNodes.indexOf(targetNode);

    if (startIndex === -1) {
      for (let i = textNodes.length - 1; i >= 0; i--) {
        if (textNodes[i] === targetNode) {
          startIndex = i;
          break;
        }
      }
    }

    if (startIndex === -1 && textNodes.length > 0) {
      startIndex = textNodes.length - 1;
    }

    for (let i = startIndex; i >= 0; i--) {
      const node = textNodes[i];
      const len = (node === targetNode) ? targetOffset : node.textContent.length;
      if (len >= remaining) {
        r.setStart(node, len - remaining);
        return r;
      } else {
        remaining -= len;
      }
    }

    r.setStart(block, 0);
    return r;
  }

  handleSpaceMarkdownShortcuts(e) {
    if (this.isCodeMode) return false;

    const sel = window.getSelection();
    if (!sel || !sel.rangeCount || !sel.isCollapsed) return false;

    const range = sel.getRangeAt(0);

    // 1. Find the current block element (P, H1-H6, DIV, LI, etc.)
    let block = range.startContainer;
    while (block && block !== this.visualEditor && !/^(P|H[1-6]|DIV|LI|BLOCKQUOTE)$/i.test(block.nodeName)) {
      block = block.parentNode;
    }
    if (!block || block === this.visualEditor) {
      block = range.startContainer;
      while (block && block.parentNode && block.parentNode !== this.visualEditor) {
        block = block.parentNode;
      }
    }
    if (!block) return false;

    // 2. Get text from the beginning of this block up to the cursor
    const preRange = document.createRange();
    try {
      preRange.selectNodeContents(block);
      preRange.setEnd(range.startContainer, range.startOffset);
    } catch (err) {
      return false;
    }

    const textBefore = preRange.toString();
    if (!textBefore) return false;

    const boundary = '(?:^|[\\s\\u200B\\u00A0])';

    // ----------------------------------------------------
    // Shortcut 1: Headings (#, ##, ###, #### at start of line)
    // ----------------------------------------------------
    const headingMatch = textBefore.match(/^[\s\u200B\u00A0]*(#{1,4})$/);
    if (headingMatch) {
      e.preventDefault();
      const level = headingMatch[1].length;

      // Delete the typed hashes
      preRange.deleteContents();

      // Convert block to H1-H4
      const headingEl = document.createElement(`h${level}`);
      while (block.firstChild) {
        headingEl.appendChild(block.firstChild);
      }
      if (!headingEl.textContent.trim() && !headingEl.querySelector('img')) {
        headingEl.innerHTML = '<br>';
      }

      if (block.parentNode) {
        block.parentNode.replaceChild(headingEl, block);
      } else {
        this.visualEditor.appendChild(headingEl);
      }

      // Position cursor at the beginning of the heading
      const newRange = document.createRange();
      newRange.setStart(headingEl, 0);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);

      this.normalizeParagraphsIndentation();
      this.updateContentFromVisual();
      this.updateToolbarState();
      this.isDirty = true;
      this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
      return true;
    }

    // ----------------------------------------------------
    // Shortcut: Horizontal Rule (---)
    // ----------------------------------------------------
    const tripleDashRegex = new RegExp(boundary + '[-—–\\u05BE]{3,}$');
    const tripleDashMatch = textBefore.match(tripleDashRegex);

    if (tripleDashMatch) {
      e.preventDefault();

      const hrEl = document.createElement('hr');
      const nextP = document.createElement('p');
      nextP.innerHTML = '<br>';

      const cleanBlockText = block.textContent.replace(/[\s\u200B\u00A0]/g, '');
      if (/^[-—–\u05BE]{3,}$/.test(cleanBlockText)) {
        if (block.parentNode) {
          block.parentNode.replaceChild(hrEl, block);
        } else {
          this.visualEditor.appendChild(hrEl);
        }
        if (hrEl.nextSibling) {
          hrEl.parentNode.insertBefore(nextP, hrEl.nextSibling);
        } else {
          hrEl.parentNode.appendChild(nextP);
        }
      } else {
        const matchedDashes = tripleDashMatch[0].replace(/^[\s\u200B\u00A0]/, '');
        const replaceRange = this.getRangeForPrecedingText(block, range.startContainer, range.startOffset, matchedDashes.length);
        replaceRange.deleteContents();

        if (block.nextSibling) {
          block.parentNode.insertBefore(hrEl, block.nextSibling);
        } else {
          block.parentNode.appendChild(hrEl);
        }
        hrEl.parentNode.insertBefore(nextP, hrEl.nextSibling);
      }

      const newRange = document.createRange();
      newRange.setStart(nextP, 0);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);

      this.normalizeParagraphsIndentation();
      this.updateContentFromVisual();
      this.updateToolbarState();
      this.isDirty = true;
      this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
      return true;
    }

    // ----------------------------------------------------
    // Shortcut: Dinkus / Asterisk Separator (***)
    // ----------------------------------------------------
    const tripleAsteriskRegex = new RegExp(boundary + '\\*\\*\\*$');
    const tripleMatch = textBefore.match(tripleAsteriskRegex);

    if (tripleMatch) {
      e.preventDefault();

      const h4El = document.createElement('h4');
      h4El.className = 'text-center';
      const strongEl = document.createElement('strong');
      strongEl.innerHTML = '*&nbsp;*&nbsp;*';
      h4El.appendChild(strongEl);

      const nextP = document.createElement('p');
      nextP.innerHTML = '<br>';

      const cleanBlockText = block.textContent.replace(/[\s\u200B\u00A0]/g, '');
      if (cleanBlockText === '***') {
        if (block.parentNode) {
          block.parentNode.replaceChild(h4El, block);
        } else {
          this.visualEditor.appendChild(h4El);
        }
        if (h4El.nextSibling) {
          h4El.parentNode.insertBefore(nextP, h4El.nextSibling);
        } else {
          h4El.parentNode.appendChild(nextP);
        }
      } else {
        const replaceRange = this.getRangeForPrecedingText(block, range.startContainer, range.startOffset, 3);
        replaceRange.deleteContents();

        if (block.nextSibling) {
          block.parentNode.insertBefore(h4El, block.nextSibling);
        } else {
          block.parentNode.appendChild(h4El);
        }
        h4El.parentNode.insertBefore(nextP, h4El.nextSibling);
      }

      const newRange = document.createRange();
      newRange.setStart(nextP, 0);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);

      this.normalizeParagraphsIndentation();
      this.updateContentFromVisual();
      this.updateToolbarState();
      this.isDirty = true;
      this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
      return true;
    }

    // ----------------------------------------------------
    // Shortcut 2: Bold (**text**)
    // ----------------------------------------------------
    const boldRegex = new RegExp(boundary + '\\*\\*([^\\*\\s\\n](?:[^\\*\\n]*[^\\*\\s\\n])?)\\*\\*$');
    const boldMatch = textBefore.match(boldRegex);

    if (boldMatch) {
      e.preventDefault();
      const innerText = boldMatch[1];
      const tokenLen = innerText.length + 4; // "**" + text + "**"

      const replaceRange = this.getRangeForPrecedingText(block, range.startContainer, range.startOffset, tokenLen);
      replaceRange.deleteContents();

      const strongEl = document.createElement('strong');
      strongEl.textContent = innerText;

      const spaceNode = document.createTextNode('\u00A0');

      const frag = document.createDocumentFragment();
      frag.appendChild(strongEl);
      frag.appendChild(spaceNode);

      replaceRange.insertNode(frag);

      // Place cursor right after the space, outside the strong tag
      const afterRange = document.createRange();
      afterRange.setStart(spaceNode, 1);
      afterRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(afterRange);

      this.updateContentFromVisual();
      this.updateToolbarState();
      this.isDirty = true;
      this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
      return true;
    }

    // ----------------------------------------------------
    // Shortcut 3 & 4: Separators (*1*, *2*, *3*, *4*) & Italic (*text*)
    // ----------------------------------------------------
    const italicRegex = new RegExp(boundary + '\\*([^\\*\\s\\n](?:[^\\*\\n]*[^\\*\\s\\n])?)\\*$');
    const italicMatch = textBefore.match(italicRegex);

    if (italicMatch) {
      const innerText = italicMatch[1];
      const trimmedInner = innerText.trim();
      const isSepNum = ['1', '2', '3', '4'].includes(trimmedInner);
      let sepImg = null;

      if (isSepNum) {
        sepImg = this.findSeparatorImage(trimmedInner);
      }

      if (sepImg) {
        // SCENE SEPARATOR
        e.preventDefault();
        const tokenLen = innerText.length + 2; // "*" + text + "*"

        const sepP = document.createElement('p');
        sepP.className = 'noindent text-center scene-separator';
        const imgEl = document.createElement('img');
        imgEl.src = sepImg.url;
        imgEl.alt = sepImg.name;
        sepP.appendChild(imgEl);

        const nextP = document.createElement('p');
        nextP.innerHTML = '<br>';

        const cleanBlockText = block.textContent.replace(/[\s\u200B\u00A0]/g, '');
        if (cleanBlockText === '*' + trimmedInner + '*') {
          // The block only contained the separator shortcut
          if (block.parentNode) {
            block.parentNode.replaceChild(sepP, block);
          } else {
            this.visualEditor.appendChild(sepP);
          }
          if (sepP.nextSibling) {
            sepP.parentNode.insertBefore(nextP, sepP.nextSibling);
          } else {
            sepP.parentNode.appendChild(nextP);
          }
        } else {
          // Block contained other text prior to *num*
          const replaceRange = this.getRangeForPrecedingText(block, range.startContainer, range.startOffset, tokenLen);
          replaceRange.deleteContents();

          if (block.nextSibling) {
            block.parentNode.insertBefore(sepP, block.nextSibling);
          } else {
            block.parentNode.appendChild(sepP);
          }
          sepP.parentNode.insertBefore(nextP, sepP.nextSibling);
        }

        const newRange = document.createRange();
        newRange.setStart(nextP, 0);
        newRange.collapse(true);
        sel.removeAllRanges();
        sel.addRange(newRange);

        this.normalizeParagraphsIndentation();
        this.updateContentFromVisual();
        this.updateToolbarState();
        this.isDirty = true;
        this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
        return true;
      } else {
        // ITALIC
        e.preventDefault();
        const tokenLen = innerText.length + 2; // "*" + text + "*"

        const replaceRange = this.getRangeForPrecedingText(block, range.startContainer, range.startOffset, tokenLen);
        replaceRange.deleteContents();

        const emEl = document.createElement('em');
        emEl.textContent = innerText;

        const spaceNode = document.createTextNode('\u00A0');

        const frag = document.createDocumentFragment();
        frag.appendChild(emEl);
        frag.appendChild(spaceNode);

        replaceRange.insertNode(frag);

        // Place cursor right after the space, outside the em tag
        const afterRange = document.createRange();
        afterRange.setStart(spaceNode, 1);
        afterRange.collapse(true);
        sel.removeAllRanges();
        sel.addRange(afterRange);

        this.updateContentFromVisual();
        this.updateToolbarState();
        this.isDirty = true;
        this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
        return true;
      }
    }

    // ----------------------------------------------------
    // Shortcut 5: Superscript / Footnote (^1^ or ^text^)
    // Works both attached to a word (word^1^) and standalone ( ^1^)
    // ----------------------------------------------------
    const supRegex = /\^([^\^\s\n](?:[^\^\n]*[^\^\s\n])?)\^$/;
    const supMatch = textBefore.match(supRegex);

    if (supMatch) {
      e.preventDefault();
      const innerText = supMatch[1];
      const tokenLen = innerText.length + 2; // "^" + text + "^"

      const replaceRange = this.getRangeForPrecedingText(block, range.startContainer, range.startOffset, tokenLen);
      replaceRange.deleteContents();

      const supEl = document.createElement('sup');
      supEl.textContent = innerText;

      const spaceNode = document.createTextNode('\u00A0');

      const frag = document.createDocumentFragment();
      frag.appendChild(supEl);
      frag.appendChild(spaceNode);

      replaceRange.insertNode(frag);

      // Place cursor right after the space, outside the sup tag
      const afterRange = document.createRange();
      afterRange.setStart(spaceNode, 1);
      afterRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(afterRange);

      this.updateContentFromVisual();
      this.updateToolbarState();
      this.isDirty = true;
      this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
      return true;
    }

    return false;
  }

  handleEnterMarkdownShortcuts(e) {
    if (this.isCodeMode) return false;

    const sel = window.getSelection();
    if (!sel || !sel.rangeCount || !sel.isCollapsed) return false;

    const range = sel.getRangeAt(0);

    let block = range.startContainer;
    while (block && block !== this.visualEditor && !/^(P|H[1-6]|DIV|LI|BLOCKQUOTE)$/i.test(block.nodeName)) {
      block = block.parentNode;
    }
    if (!block || block === this.visualEditor) return false;

    const cleanBlockText = block.textContent.replace(/[\s\u200B\u00A0]/g, '');

    // 0. Check --- on Enter
    if (/^[-—–\u05BE]{3,}$/.test(cleanBlockText)) {
      e.preventDefault();

      const hrEl = document.createElement('hr');
      const nextP = document.createElement('p');
      nextP.innerHTML = '<br>';

      if (block.parentNode) {
        block.parentNode.replaceChild(hrEl, block);
      } else {
        this.visualEditor.appendChild(hrEl);
      }
      if (hrEl.nextSibling) {
        hrEl.parentNode.insertBefore(nextP, hrEl.nextSibling);
      } else {
        hrEl.parentNode.appendChild(nextP);
      }

      const newRange = document.createRange();
      newRange.setStart(nextP, 0);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);

      this.normalizeParagraphsIndentation();
      this.updateContentFromVisual();
      this.updateToolbarState();
      this.isDirty = true;
      this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
      return true;
    }

    // 1. Check *** on Enter
    if (cleanBlockText === '***') {
      e.preventDefault();

      const h4El = document.createElement('h4');
      h4El.className = 'text-center';
      const strongEl = document.createElement('strong');
      strongEl.innerHTML = '*&nbsp;*&nbsp;*';
      h4El.appendChild(strongEl);

      const nextP = document.createElement('p');
      nextP.innerHTML = '<br>';

      if (block.parentNode) {
        block.parentNode.replaceChild(h4El, block);
      } else {
        this.visualEditor.appendChild(h4El);
      }
      if (h4El.nextSibling) {
        h4El.parentNode.insertBefore(nextP, h4El.nextSibling);
      } else {
        h4El.parentNode.appendChild(nextP);
      }

      const newRange = document.createRange();
      newRange.setStart(nextP, 0);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);

      this.normalizeParagraphsIndentation();
      this.updateContentFromVisual();
      this.updateToolbarState();
      this.isDirty = true;
      this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
      return true;
    }

    // 2. Check *1*, *2*, *3*, *4* on Enter
    const sepMatch = cleanBlockText.match(/^\*([1-4])\*$/);
    if (sepMatch) {
      const num = sepMatch[1];
      const sepImg = this.findSeparatorImage(num);
      if (sepImg) {
        e.preventDefault();

        const sepP = document.createElement('p');
        sepP.className = 'noindent text-center scene-separator';
        const imgEl = document.createElement('img');
        imgEl.src = sepImg.url;
        imgEl.alt = sepImg.name;
        sepP.appendChild(imgEl);

        const nextP = document.createElement('p');
        nextP.innerHTML = '<br>';

        if (block.parentNode) {
          block.parentNode.replaceChild(sepP, block);
        } else {
          this.visualEditor.appendChild(sepP);
        }
        if (sepP.nextSibling) {
          sepP.parentNode.insertBefore(nextP, sepP.nextSibling);
        } else {
          sepP.parentNode.appendChild(nextP);
        }

        const newRange = document.createRange();
        newRange.setStart(nextP, 0);
        newRange.collapse(true);
        sel.removeAllRanges();
        sel.addRange(newRange);

        this.normalizeParagraphsIndentation();
        this.updateContentFromVisual();
        this.updateToolbarState();
        this.isDirty = true;
        this.dispatchEvent(new CustomEvent('contentchange', { detail: this.content }));
        return true;
      }
    }

    return false;
  }
}

if (!customElements.get('chaptale-editor')) {
  customElements.define('chaptale-editor', HtmlEditor);
}
if (!customElements.get('html-editor')) {
  customElements.define('html-editor', HtmlEditor);
}
window.ChaptaleEditor = HtmlEditor;