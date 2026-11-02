// Menu toggle for phones, and tap-to-open for the Events dropdown where there is no hover.
(function () {
  var nav = document.querySelector('.topnav');
  if (!nav) return;
  var burger = nav.querySelector('.burger');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('.dd > button').forEach(function (b) {
    b.addEventListener('click', function () {
      var open = b.parentNode.classList.toggle('open');
      b.setAttribute('aria-expanded', open);
    });
  });
  nav.querySelectorAll('.links a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); });
  });
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) nav.querySelectorAll('.dd.open').forEach(function (d) { d.classList.remove('open'); });
  });
})();
