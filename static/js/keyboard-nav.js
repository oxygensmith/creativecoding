const getSlug = () => {
  const parts = window.location.pathname.replace(/\/$/, '').split('/');
  return parts[parts.length - 1] || 'sketch';
};

const exportCounters = {};
const nextFilename = (slug, ext) => {
  exportCounters[slug] = (exportCounters[slug] || 0) + 1;
  return `${slug}-${String(exportCounters[slug]).padStart(3, '0')}.${ext}`;
};

const triggerDownload = (dataURL, filename) => {
  const a = document.createElement('a');
  a.href = dataURL;
  a.download = filename;
  a.click();
};

const exportScreen = (format) => {
  const canvas = document.querySelector('canvas');
  if (!canvas) return;
  const ext = format === 'image/webp' ? 'webp' : 'png';
  triggerDownload(canvas.toDataURL(format), nextFilename(getSlug(), ext));
};

const PRINT_SCALE = 4;

const exportPrint = () => {
  const [width, height] = settings.dimensions;
  const offscreen = document.createElement('canvas');
  offscreen.width = width * PRINT_SCALE;
  offscreen.height = height * PRINT_SCALE;
  const ctx = offscreen.getContext('2d');
  const render = sketch({ context: ctx, width: width * PRINT_SCALE, height: height * PRINT_SCALE });
  const frame = document.querySelector('canvas')._frame || 0;
  render({ context: ctx, width: width * PRINT_SCALE, height: height * PRINT_SCALE, frame });
  triggerDownload(offscreen.toDataURL('image/png'), nextFilename(getSlug(), 'png'));
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('sketch-info-modal');
  if (!modal) return;

  const backdrop = modal.querySelector('.sketch-modal__backdrop');
  const openModal = () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  };
  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  };

  document.getElementById('sketch-info-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
  document.getElementById('sketch-info-ok')?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('sketch-info-modal')?.classList.remove('is-open');
    return;
  }

  const sketchReady = typeof sketch === 'function' && typeof settings !== 'undefined';

  if (e.key === 'Enter') {
    if (sketchReady) canvasSketch(sketch, settings);
    return;
  }

  if (e.ctrlKey && e.code === 'KeyP') {
    e.preventDefault();
    if (sketchReady) exportPrint();
    return;
  }

  if (e.ctrlKey && e.shiftKey && e.code === 'Slash') {
    e.preventDefault();
    exportScreen('image/webp');
    return;
  }

  if (e.ctrlKey && !e.shiftKey && e.code === 'Slash') {
    e.preventDefault();
    exportScreen('image/png');
    return;
  }

  const prev = document.querySelector('[data-nav="prev"]');
  const next = document.querySelector('[data-nav="next"]');

  if (e.key === 'ArrowLeft' && prev?.tagName === 'A') {
    window.location.href = prev.href;
  } else if (e.key === 'ArrowRight' && next?.tagName === 'A') {
    window.location.href = next.href;
  }
});
