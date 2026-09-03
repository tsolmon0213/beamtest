(function () {
  function currentLang() {
    try { return localStorage.getItem('beam-lang') || 'en'; } catch (e) { return 'en'; }
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var val = lang === 'mn' ? el.getAttribute('data-mn') : el.getAttribute('data-en');
      if (val != null) el.innerHTML = val;
    });
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'mn' ? 'EN' : 'MN';
    try { localStorage.setItem('beam-lang', lang); } catch (e) {}
  }

  window.beamI18n = { apply: apply, current: currentLang };

  document.addEventListener('DOMContentLoaded', function () {
    apply(currentLang());
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        apply(currentLang() === 'mn' ? 'en' : 'mn');
      });
    }
  });
})();
