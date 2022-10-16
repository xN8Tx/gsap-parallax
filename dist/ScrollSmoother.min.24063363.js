// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"d5Hc":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * ScrollSmoother 3.10.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
}(this, function (e) {
  "use strict";

  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  function p() {
    return "undefined" != typeof window;
  }

  function q() {
    return P || p() && (P = window.gsap) && P.registerPlugin && P;
  }

  var P,
      k,
      R,
      _,
      C,
      H,
      M,
      A,
      F,
      B,
      I,
      U,
      t = (ScrollSmoother.register = function register(e) {
    return k || (P = e || q(), p() && window.document && (R = window, _ = document, C = _.documentElement, H = _.body), P && (M = P.utils.toArray, A = P.utils.clamp, I = P.parseEase("expo"), F = P.core.globals().ScrollTrigger, P.core.globals("ScrollSmoother", ScrollSmoother), H && F && (U = F.core._getVelocityProp, k = 1))), k;
  }, function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
  }(ScrollSmoother, [{
    key: "progress",
    get: function get() {
      return this.scrollTrigger.animation._time / 100;
    }
  }]), ScrollSmoother);

  function ScrollSmoother(e) {
    var o = this;
    k || ScrollSmoother.register(P) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, B && B.kill(), B = this;

    function ja() {
      return T.update(-g);
    }

    function la() {
      return r.style.overflow = "visible";
    }

    function na(e) {
      var t = e.getTween();
      t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), u = !1, e.animation.progress(e.progress, !0);
    }

    function oa(e, t) {
      (e !== g && !l || t) && (d && (r.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"), w = e - g, g = e, F.isUpdating || F.update());
    }

    function pa(e) {
      return arguments.length ? (l && (g = -e), x.y = -e, u = !0, h(e), this) : -g;
    }

    function ra(e) {
      v.scrollTop = 0, F.isInViewport(e.target) || e.target === f || o.scrollTo(e.target, !1, "center center"), f = e.target;
    }

    function sa(e) {
      var r, n, o, i;
      b.forEach(function (t) {
        r = t.pins, i = t.markers, e.forEach(function (e) {
          e.trigger !== t.trigger && e.pinnedContainer !== t.trigger || t === e || (n = e.start, o = (n - t.start - t.offset) / t.ratio - (n - t.start), r.forEach(function (e) {
            return o -= e.distance / t.ratio - e.distance;
          }), e.setPositions(n + o, e.end + o), e.markerStart && i.push(P.quickSetter([e.markerStart, e.markerEnd], "y", "px")), e.pin && 0 < e.end && (o = e.end - e.start, r.push({
            start: e.start,
            end: e.end,
            distance: o,
            trig: e
          }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)));
        });
      });
    }

    function ta() {
      la(), requestAnimationFrame(la), b && (b.forEach(function (e) {
        var t = e.start,
            r = e.auto ? Math.min(F.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
            n = (r - e.end) / 2;
        t -= n, r -= n, e.offset = n || 1e-4, e.pins.length = 0, e.setPositions(Math.min(t, r), Math.max(t, r)), e.vars.onRefresh(e);
      }), sa(F.sort())), T.reset();
    }

    function ua() {
      return b && b.forEach(function (e) {
        return e.vars.onRefresh(e);
      });
    }

    function va() {
      return b && b.forEach(function (e) {
        return e.vars.onRefreshInit(e);
      }), ua;
    }

    function wa(t, r, n, o) {
      return function () {
        var e = "function" == typeof r ? r(n, o) : r;
        return e || 0 === e || (e = o.getAttribute("data-" + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + t, e), "auto" === e ? e : parseFloat(e);
      };
    }

    function xa(r, e, t, n) {
      function lb() {
        e = a(), t = f(), o = parseFloat(e) || 1, c = (s = "auto" === e) ? 0 : .5, l && l.kill(), l = t && P.to(r, {
          ease: I,
          overwrite: !1,
          y: "+=0",
          duration: t
        }), i && (i.ratio = o, i.autoSpeed = s);
      }

      function mb() {
        d.y = h + "px", d.renderTransform(1), lb();
      }

      function qb(e) {
        if (s) {
          mb();

          var t = function _autoDistance(e, t) {
            var r,
                n,
                o = e.parentNode || C,
                i = e.getBoundingClientRect(),
                a = o.getBoundingClientRect(),
                s = a.top - i.top,
                l = a.bottom - i.bottom,
                c = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t),
                u = -c * t;
            return 0 < c && (u += -(n = .5 == (r = a.height / (R.innerHeight + a.height)) ? 2 * a.height : 2 * Math.min(a.height, -c * r / (2 * r - 1))) / 2, c += n), {
              change: c,
              offset: u
            };
          }(r, A(0, 1, -e.start / (e.end - e.start)));

          m = t.change, u = t.offset;
        } else m = (e.end - e.start) * (1 - o), u = 0;

        g.forEach(function (e) {
          return m -= e.distance * (1 - o);
        }), e.vars.onUpdate(e), l && l.progress(1);
      }

      var o,
          i,
          s,
          l,
          c,
          u,
          a = wa("speed", e, n, r),
          f = wa("lag", t, n, r),
          h = P.getProperty(r, "y"),
          d = r._gsap,
          g = [],
          p = [],
          m = 0;
      return lb(), (1 !== o || s || l) && (qb(i = F.create({
        trigger: s ? r.parentNode : r,
        scroller: v,
        scrub: !0,
        refreshPriority: -999,
        onRefreshInit: mb,
        onRefresh: qb,
        onKill: function onKill(e) {
          var t = b.indexOf(e);
          0 <= t && b.splice(t, 1);
        },
        onUpdate: function onUpdate(e) {
          var t,
              r,
              n,
              o = h + m * (e.progress - c),
              i = g.length,
              a = 0;

          if (e.offset) {
            if (i) {
              for (r = -x.y, n = e.end; i--;) {
                if ((t = g[i]).trig.isActive || r >= t.start && r <= t.end) return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(d.y), -w, !0), S && l.progress(1)));
                r > t.end && (a += t.distance), n -= t.distance;
              }

              o = h + a + m * ((P.utils.clamp(e.start, e.end, r) - e.start - a) / (n - e.start) - c);
            }

            o = function _round(e) {
              return Math.round(1e5 * e) / 1e5 || 0;
            }(o + u), p.length && !s && p.forEach(function (e) {
              return e(o - a);
            }), l ? (l.resetTo("y", o, -w, !0), S && l.progress(1)) : (d.y = o + "px", d.renderTransform(1));
          }
        }
      })), P.core.getCache(i.trigger).stRevert = va, i.startY = h, i.pins = g, i.markers = p, i.ratio = o, i.autoSpeed = s, r.style.willChange = "transform"), i;
    }

    var r,
        v,
        t,
        n,
        b,
        i,
        a,
        s,
        l,
        c,
        u,
        f,
        h = F.getScrollFunc(R),
        d = 1 === F.isTouch ? !0 === e.smoothTouch ? .8 : parseFloat(e.smoothTouch) || 0 : 0 === e.smooth || !1 === e.smooth ? 0 : parseFloat(e.smooth) || .8,
        g = 0,
        w = 0,
        S = 1,
        p = e.onUpdate,
        m = e.onStop,
        T = U(0),
        x = {
      y: 0
    };

    function refreshHeight() {
      return t = r.clientHeight, r.style.overflow = "visible", H.style.height = t + "px", t - R.innerHeight;
    }

    F.addEventListener("refresh", ta), P.delayedCall(.5, function () {
      return S = 0;
    }), this.scrollTop = pa, this.scrollTo = function (e, t, r) {
      var n = P.utils.clamp(0, F.maxScroll(R), isNaN(e) ? o.offset(e, r) : +e);
      t ? l ? P.to(o, {
        duration: d,
        scrollTop: n,
        overwrite: "auto",
        ease: I
      }) : h(n) : pa(n);
    }, this.offset = function (e, t) {
      e = M(e)[0];
      var r,
          n = P.getProperty(e, "y"),
          o = F.create({
        trigger: e,
        start: t || "top top"
      });
      return b && sa([o]), r = o.start, o.kill(!1), P.set(e, {
        y: n
      }), r;
    }, this.content = function (e) {
      return arguments.length ? (r = M(e || "#smooth-content")[0] || H.children[0], s = r.getAttribute("style") || "", P.set(r, {
        overflow: "visible",
        width: "100%"
      }), this) : r;
    }, this.wrapper = function (e) {
      return arguments.length ? (v = M(e || "#smooth-wrapper")[0] || function _wrap(e) {
        var t = _.createElement("div");

        return t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e), t;
      }(r), a = v.getAttribute("style") || "", refreshHeight(), P.set(v, d ? {
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      } : {
        overflow: "visible",
        position: "relative",
        width: "100%",
        height: "auto",
        top: "auto",
        bottom: "auto",
        left: "auto",
        right: "auto"
      }), this) : v;
    }, this.effects = function (e, t) {
      if (b = b || [], !e) return b.slice(0);
      (e = M(e)).forEach(function (e) {
        for (var t = b.length; t--;) {
          b[t].trigger === e && (b[t].kill(), b.splice(t, 1));
        }
      });
      t = t || {};
      var r,
          n,
          o = t.speed,
          i = t.lag,
          a = [];

      for (r = 0; r < e.length; r++) {
        (n = xa(e[r], o, i, r)) && a.push(n);
      }

      return b.push.apply(b, a), a;
    }, this.content(e.content), this.wrapper(e.wrapper), this.render = function (e) {
      return oa(e || 0 === e ? e : g);
    }, this.getVelocity = function () {
      return T.getVelocity(-g);
    }, F.scrollerProxy(v, {
      scrollTop: pa,
      scrollHeight: function scrollHeight() {
        return H.scrollHeight;
      },
      fixedMarkers: !1 !== e.fixedMarkers && !!d,
      content: r,
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: R.innerWidth,
          height: R.innerHeight
        };
      }
    }), F.defaults({
      scroller: v
    });
    var E = F.getAll().filter(function (e) {
      return e.scroller === R || e.scroller === v;
    });
    E.forEach(function (e) {
      return e.revert(!0);
    }), n = F.create({
      animation: P.to(x, {
        y: function y() {
          return R.innerHeight - t;
        },
        ease: "none",
        data: "ScrollSmoother",
        duration: 100,
        onUpdate: function onUpdate() {
          var e = u;
          e && (x.y = g, na(n)), oa(x.y, e), ja(), p && !l && p(o);
        }
      }),
      onRefreshInit: function onRefreshInit() {
        return x.y = 0;
      },
      id: "ScrollSmoother",
      scroller: R,
      invalidateOnRefresh: !0,
      start: 0,
      refreshPriority: -9999,
      end: refreshHeight,
      onScrubComplete: function onScrubComplete() {
        T.reset(), m && m(o);
      },
      scrub: d || !0,
      onRefresh: function onRefresh(e) {
        na(e), oa(x.y);
      }
    }), this.smooth = function (e) {
      return d = e, arguments.length ? n.scrubDuration(e) : n.getTween() ? n.getTween().duration() : 0;
    }, n.getTween() && (n.getTween().vars.ease = e.ease || I), this.scrollTrigger = n, e.effects && this.effects(!0 === e.effects ? "[data-speed], [data-lag]" : e.effects, {}), E.forEach(function (e) {
      e.vars.scroller = v, e.init(e.vars, e.animation);
    }), this.paused = function (e) {
      return arguments.length ? (!!l !== e && (e ? (n.getTween() && n.getTween().pause(), h(-g), T.reset(), (c = F.normalizeScroll()) && c.disable(), l = F.observe({
        preventDefault: !0,
        type: "wheel,touch,scroll",
        debounce: !1,
        onChangeY: function onChangeY() {
          return pa(-g);
        }
      })) : (l.kill(), l = 0, c && c.enable(), n.progress = (-g - n.start) / (n.end - n.start), na(n))), this) : !!l;
    }, this.kill = function () {
      o.paused(!1), na(n), n.kill();

      for (var e = b ? b.length : 0; e--;) {
        b[e].kill();
      }

      F.scrollerProxy(v), F.removeEventListener("refresh", ta), v.style.cssText = a, r.style.cssText = s;
      var t = F.defaults({});
      t && t.scroller === v && F.defaults({
        scroller: R
      }), o.observer && F.normalizeScroll(!1), clearInterval(i), B = null, R.removeEventListener("focusin", ra);
    }, e.normalizeScroll && (this.observer = F.normalizeScroll({
      debounce: !0
    })), F.config(e), "overscrollBehavior" in R.getComputedStyle(H) && P.set(H, {
      overscrollBehavior: "none"
    }), R.addEventListener("focusin", ra), i = setInterval(ja, 250), "loading" === _.readyState || requestAnimationFrame(function () {
      return F.refresh();
    });
  }

  t.version = "3.10.2", t.create = function (e) {
    return B && e && B.content() === M(e.content)[0] ? B : new t(e);
  }, t.get = function () {
    return B;
  }, q() && P.registerPlugin(t), e.ScrollSmoother = t, e.default = t;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});
},{}]},{},["d5Hc"], null)
//# sourceMappingURL=ScrollSmoother.min.24063363.js.map