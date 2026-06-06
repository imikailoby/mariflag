// Wires the demo form to the library's global build (window.mariflag, loaded by
// vendor/index.global.js). Output is generated live as you type; the assistive-tech
// announcement is debounced so it doesn't fire on every keystroke.
(function () {
  'use strict';

  var form = document.getElementById('generator');
  var textInput = document.getElementById('text');
  var offsetInput = document.getElementById('offset');
  var preview = document.getElementById('preview');
  var status = document.getElementById('status');
  var download = document.getElementById('download');
  var announceTimer;

  function selectedOrientation() {
    var checked = form.querySelector('input[name="orientation"]:checked');
    return checked ? checked.value : 'horizontal';
  }

  function currentOffset() {
    var value = Number(offsetInput.value);
    return Number.isFinite(value) && value >= 0 ? value : 16;
  }

  function toSvgDataUri(svg) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function fileName(text) {
    var letters = text.replace(/[^a-zA-Z]/g, '').toUpperCase();
    return (letters || 'mariflag') + '.svg';
  }

  function announce(message) {
    clearTimeout(announceTimer);
    announceTimer = setTimeout(function () {
      status.textContent = message;
    }, 600);
  }

  function render() {
    var text = textInput.value;
    var svg = window.mariflag.generateSvg(text, {
      orientation: selectedOrientation(),
      offset: currentOffset(),
    });

    if (!svg) {
      var empty = document.createElement('p');
      empty.className = 'empty';
      empty.textContent = 'Enter at least one A–Z letter to see the flags.';
      preview.replaceChildren(empty);
      download.hidden = true;
      announce('No A–Z letters to encode.');
      return;
    }

    var uri = toSvgDataUri(svg);

    var img = new Image();
    img.src = uri;
    img.alt = 'Signal flags for “' + text + '”';
    preview.replaceChildren(img);

    download.href = uri;
    download.setAttribute('download', fileName(text));
    download.hidden = false;

    announce('Signal-flag SVG ready for “' + text + '”.');
  }

  // Regenerate on any control change (typing, orientation, offset).
  form.addEventListener('input', render);

  // There is no submit button; stop Enter from attempting to submit/reload.
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  render();
})();
