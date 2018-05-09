"use strict";
! function (e, t) {
  var n = 0,
    i = e.document,
    a = i.documentElement,
    r = i.querySelector('meta[name="viewport"]'),
    o = i.querySelector('meta[name="flexible"]'),
    m = 0,
    l = 0,
    c = t.flexible || (t.flexible = {}),
    d = function () {
      var t = a.getBoundingClientRect().width;
      t / m > 540 && (t = 540 * m);
      var n = t / 10;
      a.style.fontSize = n + "px", c.rem = e.rem = n
    };
  if (r) {
    console.warn("灏嗘牴鎹凡鏈夌殑meta鏍囩鏉ヨ缃缉鏀炬瘮渚�");
    var s = r.getAttribute("content").match(/initial-scale=([\d\.]+)/);
    s && (l = parseFloat(s[1]), m = parseInt(1 / l, 10))
  } else if (o) {
    var u = o.getAttribute("content");
    if (u) {
      var p = u.match(/initial\-dpr=([\d\.]+)/),
        f = u.match(/maximum\-dpr=([\d\.]+)/);
      p && (m = parseFloat(p[1]), l = parseFloat((1 / m).toFixed(2))), f && (m = parseFloat(f[1]), l = parseFloat((1 / m).toFixed(2)))
    }
  }
  if (!l && !m) {
    var h = e.navigator.userAgent,
      v = !!h.match(/android/gi) || !!h.match(/iphone/gi),
      g = !!h.match(/iphone/gi),
      x = v && !!h.match(/OS 9_3/),
      b = e.devicePixelRatio;
    m = v && g && !x ? b >= 3 && (!m || m >= 3) ? 3 : b >= 2 && (!m || m >= 2) ? 2 : 1 : 1, l = 1 / m
  }
  if (a.setAttribute("data-dpr", m) || !r)
    if (r = i.createElement("meta"), r.setAttribute("name", "viewport") || r.setAttribute("content", "initial-scale=" + l + ", maximum-scale=" + l + ", minimum-scale=" + l + ", user-scalable=no") || a.firstElementChild) a.firstElementChild.appendChild(r);
    else {
      var w = i.createElement("div");
      w.appendChild(r), i.write(w.innerHTML)
    }
  e.addEventListener("resize", function () {
    clearTimeout(n), n = setTimeout(d, 300)
  }, !1), e.addEventListener("pageshow", function (e) {
    e.persisted && (clearTimeout(n), n = setTimeout(d, 300))
  }, !1), "complete" === i.readyState ? i.body.style.fontSize = 12 * m + "px" : i.addEventListener("DOMContentLoaded", function () {
    i.body.style.fontSize = 12 * m + "px"
  }, !1), d(), c.dpr = e.dpr = m, c.refreshRem = d, c.rem2px = function (e) {
    var t = parseFloat(e) * this.rem;
    return "string" == typeof e && e.match(/rem$/) ? t + "px" : t
  }, c.px2rem = function (e) {
    var t = parseFloat(e) / this.rem;
    return "string" == typeof e && e.match(/px$/) ? t + "rem" : t
  }, e.navigator.userAgent.match(/iphone/gi) && e.navigator.userAgent.match(/OS 1[0-9]_/) && ! function () {
    document.documentElement.addEventListener("touchstart", function (e) {
      e.touches.length > 1 && e.preventDefault()
    }, !1);
    var e = 0;
    document.documentElement.addEventListener("touchend", function (t) {
      var n = (new Date).getTime();
      n - e <= 300 && t.preventDefault(), e = n
    }, !1)
  }()
}(window, window.lib || (window.lib = {}));
