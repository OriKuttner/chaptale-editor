// Demo Page Interactivity
document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('main-editor');
  const btnLtr = document.getElementById('btn-ltr');
  const btnRtl = document.getElementById('btn-rtl');
  const btnEn = document.getElementById('btn-en');
  const btnHe = document.getElementById('btn-he');
  const liveVisualOutput = document.getElementById('live-visual-output');
  const liveHtmlOutput = document.getElementById('live-html-output');
  const btnShowVisual = document.getElementById('btn-show-visual');
  const btnShowCode = document.getElementById('btn-show-code');

  // Real-time synchronization function
  const updateLivePreview = () => {
    if (!editor) return;
    const content = (typeof editor.getHTML === 'function') ? editor.getHTML() : (editor.value || '');
    const currentDir = editor.getAttribute('dir') || 'ltr';
    if (liveVisualOutput) {
      liveVisualOutput.innerHTML = content;
      liveVisualOutput.setAttribute('dir', currentDir);
      liveVisualOutput.style.direction = currentDir;
      liveVisualOutput.style.textAlign = (currentDir === 'rtl') ? 'right' : 'left';
    }
    if (liveHtmlOutput) {
      liveHtmlOutput.textContent = content;
      liveHtmlOutput.setAttribute('dir', currentDir);
    }
  };

  if (btnLtr && btnRtl && editor) {
    btnLtr.addEventListener('click', () => {
      editor.setAttribute('dir', 'ltr');
      if (typeof editor.updateDirectionUI === 'function') {
        editor.direction = 'ltr';
        editor.updateDirectionUI();
      }
      btnLtr.classList.add('active');
      btnRtl.classList.remove('active');
      updateLivePreview();
    });

    btnRtl.addEventListener('click', () => {
      editor.setAttribute('dir', 'rtl');
      if (typeof editor.updateDirectionUI === 'function') {
        editor.direction = 'rtl';
        editor.updateDirectionUI();
      }
      btnRtl.classList.add('active');
      btnLtr.classList.remove('active');
      updateLivePreview();
    });

    editor.addEventListener('directionchange', (e) => {
      const dir = (typeof e.detail === 'string' ? e.detail : (e.detail && e.detail.direction)) || editor.getAttribute('dir') || 'ltr';
      if (dir === 'rtl') {
        btnRtl.classList.add('active');
        btnLtr.classList.remove('active');
      } else {
        btnLtr.classList.add('active');
        btnRtl.classList.remove('active');
      }
      updateLivePreview();
    });
  }

  if (btnEn && btnHe && editor) {
    btnEn.addEventListener('click', () => {
      editor.setAttribute('lang', 'en');
      btnEn.classList.add('active');
      btnHe.classList.remove('active');
    });

    btnHe.addEventListener('click', () => {
      editor.setAttribute('lang', 'he');
      btnHe.classList.add('active');
      btnEn.classList.remove('active');
    });
  }

  // Toggle preview mode between Visual Render and HTML Code
  if (btnShowVisual && btnShowCode && liveVisualOutput && liveHtmlOutput) {
    btnShowVisual.addEventListener('click', () => {
      btnShowVisual.classList.add('active');
      btnShowCode.classList.remove('active');
      liveVisualOutput.style.display = 'block';
      liveHtmlOutput.style.display = 'none';
    });

    btnShowCode.addEventListener('click', () => {
      btnShowCode.classList.add('active');
      btnShowVisual.classList.remove('active');
      liveVisualOutput.style.display = 'none';
      liveHtmlOutput.style.display = 'block';
    });
  }

  // Listen to real-time events from editor
  if (editor) {
    ['input', 'change', 'contentchange'].forEach(eventType => {
      editor.addEventListener(eventType, updateLivePreview);
    });

    // Initial update after DOM & Custom Element initialization
    setTimeout(updateLivePreview, 100);
  }
});
