var _h = Object.defineProperty;
var wh = (e, t, n) =>
  t in e
    ? _h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var wn = (e, t, n) => (wh(e, typeof t != "symbol" ? t + "" : t, n), n);
function Sh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function xh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qc = { exports: {} },
  Fo = {},
  Yc = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for("react.element"),
  Eh = Symbol.for("react.portal"),
  Oh = Symbol.for("react.fragment"),
  kh = Symbol.for("react.strict_mode"),
  Ch = Symbol.for("react.profiler"),
  Ph = Symbol.for("react.provider"),
  Ah = Symbol.for("react.context"),
  Rh = Symbol.for("react.forward_ref"),
  Nh = Symbol.for("react.suspense"),
  jh = Symbol.for("react.memo"),
  Lh = Symbol.for("react.lazy"),
  da = Symbol.iterator;
function Th(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (da && e[da]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Jc = Object.assign,
  Zc = {};
function nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zc),
    (this.updater = n || Xc);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qc() {}
qc.prototype = nr.prototype;
function rs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zc),
    (this.updater = n || Xc);
}
var is = (rs.prototype = new qc());
is.constructor = rs;
Jc(is, nr.prototype);
is.isPureReactComponent = !0;
var pa = Array.isArray,
  ef = Object.prototype.hasOwnProperty,
  os = { current: null },
  tf = { key: !0, ref: !0, __self: !0, __source: !0 };
function nf(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ef.call(t, r) && !tf.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
  return {
    $$typeof: ni,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: os.current,
  };
}
function Mh(e, t) {
  return {
    $$typeof: ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ls(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function zh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ha = /\/+/g;
function hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zh("" + e.key)
    : t.toString(36);
}
function Ui(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ni:
          case Eh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + hl(l, 0) : r),
      pa(i)
        ? ((n = ""),
          e != null && (n = e.replace(ha, "$&/") + "/"),
          Ui(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (ls(i) &&
            (i = Mh(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ha, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), pa(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + hl(o, u);
      l += Ui(o, t, n, s, i);
    }
  else if (((s = Th(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + hl(o, u++)), (l += Ui(o, t, n, s, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function wi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ui(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Dh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var me = { current: null },
  Vi = { transition: null },
  Ih = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: Vi,
    ReactCurrentOwner: os,
  };
function rf() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = {
  map: wi,
  forEach: function (e, t, n) {
    wi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ls(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = nr;
M.Fragment = Oh;
M.Profiler = Ch;
M.PureComponent = rs;
M.StrictMode = kh;
M.Suspense = Nh;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ih;
M.act = rf;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Jc({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = os.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ef.call(t, s) &&
        !tf.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: ni, type: e.type, key: i, ref: o, props: r, _owner: l };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ah,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ph, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = nf;
M.createFactory = function (e) {
  var t = nf.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: Rh, render: e };
};
M.isValidElement = ls;
M.lazy = function (e) {
  return { $$typeof: Lh, _payload: { _status: -1, _result: e }, _init: Dh };
};
M.memo = function (e, t) {
  return { $$typeof: jh, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Vi.transition;
  Vi.transition = {};
  try {
    e();
  } finally {
    Vi.transition = t;
  }
};
M.unstable_act = rf;
M.useCallback = function (e, t) {
  return me.current.useCallback(e, t);
};
M.useContext = function (e) {
  return me.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return me.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return me.current.useEffect(e, t);
};
M.useId = function () {
  return me.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return me.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return me.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return me.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return me.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return me.current.useRef(e);
};
M.useState = function (e) {
  return me.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return me.current.useTransition();
};
M.version = "18.3.1";
Yc.exports = M;
var C = Yc.exports;
const ro = xh(C),
  Bh = Sh({ __proto__: null, default: ro }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $h = C,
  Fh = Symbol.for("react.element"),
  Uh = Symbol.for("react.fragment"),
  Vh = Object.prototype.hasOwnProperty,
  bh = $h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wh = { key: !0, ref: !0, __self: !0, __source: !0 };
function of(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Vh.call(t, r) && !Wh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Fh,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: bh.current,
  };
}
Fo.Fragment = Uh;
Fo.jsx = of;
Fo.jsxs = of;
Qc.exports = Fo;
var R = Qc.exports,
  Yl = {},
  lf = { exports: {} },
  Pe = {},
  uf = { exports: {} },
  sf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, L) {
    var T = P.length;
    P.push(L);
    e: for (; 0 < T; ) {
      var X = (T - 1) >>> 1,
        ne = P[X];
      if (0 < i(ne, L)) (P[X] = L), (P[T] = ne), (T = X);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0],
      T = P.pop();
    if (T !== L) {
      P[0] = T;
      e: for (var X = 0, ne = P.length, yi = ne >>> 1; X < yi; ) {
        var Qt = 2 * (X + 1) - 1,
          pl = P[Qt],
          Yt = Qt + 1,
          _i = P[Yt];
        if (0 > i(pl, T))
          Yt < ne && 0 > i(_i, pl)
            ? ((P[X] = _i), (P[Yt] = T), (X = Yt))
            : ((P[X] = pl), (P[Qt] = T), (X = Qt));
        else if (Yt < ne && 0 > i(_i, T)) (P[X] = _i), (P[Yt] = T), (X = Yt);
        else break e;
      }
    }
    return L;
  }
  function i(P, L) {
    var T = P.sortIndex - L.sortIndex;
    return T !== 0 ? T : P.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var s = [],
    a = [],
    c = 1,
    d = null,
    v = 3,
    g = !1,
    _ = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(P) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= P)
        r(a), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(a);
    }
  }
  function m(P) {
    if (((y = !1), h(P), !_))
      if (n(s) !== null) (_ = !0), fl(E);
      else {
        var L = n(a);
        L !== null && dl(m, L.startTime - P);
      }
  }
  function E(P, L) {
    (_ = !1), y && ((y = !1), p(N), (N = -1)), (g = !0);
    var T = v;
    try {
      for (
        h(L), d = n(s);
        d !== null && (!(d.expirationTime > L) || (P && !Fe()));

      ) {
        var X = d.callback;
        if (typeof X == "function") {
          (d.callback = null), (v = d.priorityLevel);
          var ne = X(d.expirationTime <= L);
          (L = e.unstable_now()),
            typeof ne == "function" ? (d.callback = ne) : d === n(s) && r(s),
            h(L);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var yi = !0;
      else {
        var Qt = n(a);
        Qt !== null && dl(m, Qt.startTime - L), (yi = !1);
      }
      return yi;
    } finally {
      (d = null), (v = T), (g = !1);
    }
  }
  var k = !1,
    A = null,
    N = -1,
    Y = 5,
    z = -1;
  function Fe() {
    return !(e.unstable_now() - z < Y);
  }
  function sr() {
    if (A !== null) {
      var P = e.unstable_now();
      z = P;
      var L = !0;
      try {
        L = A(!0, P);
      } finally {
        L ? ar() : ((k = !1), (A = null));
      }
    } else k = !1;
  }
  var ar;
  if (typeof f == "function")
    ar = function () {
      f(sr);
    };
  else if (typeof MessageChannel < "u") {
    var fa = new MessageChannel(),
      yh = fa.port2;
    (fa.port1.onmessage = sr),
      (ar = function () {
        yh.postMessage(null);
      });
  } else
    ar = function () {
      S(sr, 0);
    };
  function fl(P) {
    (A = P), k || ((k = !0), ar());
  }
  function dl(P, L) {
    N = S(function () {
      P(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || g || ((_ = !0), fl(E));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Y = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (P) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var T = v;
      v = L;
      try {
        return P();
      } finally {
        v = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, L) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var T = v;
      v = P;
      try {
        return L();
      } finally {
        v = T;
      }
    }),
    (e.unstable_scheduleCallback = function (P, L, T) {
      var X = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? X + T : X))
          : (T = X),
        P)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = T + ne),
        (P = {
          id: c++,
          callback: L,
          priorityLevel: P,
          startTime: T,
          expirationTime: ne,
          sortIndex: -1,
        }),
        T > X
          ? ((P.sortIndex = T),
            t(a, P),
            n(s) === null &&
              P === n(a) &&
              (y ? (p(N), (N = -1)) : (y = !0), dl(m, T - X)))
          : ((P.sortIndex = ne), t(s, P), _ || g || ((_ = !0), fl(E))),
        P
      );
    }),
    (e.unstable_shouldYield = Fe),
    (e.unstable_wrapCallback = function (P) {
      var L = v;
      return function () {
        var T = v;
        v = L;
        try {
          return P.apply(this, arguments);
        } finally {
          v = T;
        }
      };
    });
})(sf);
uf.exports = sf;
var Hh = uf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kh = C,
  Ce = Hh;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var af = new Set(),
  Mr = {};
function hn(e, t) {
  Hn(e, t), Hn(e + "Capture", t);
}
function Hn(e, t) {
  for (Mr[e] = t, e = 0; e < t.length; e++) af.add(t[e]);
}
var vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xl = Object.prototype.hasOwnProperty,
  Gh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  va = {},
  ma = {};
function Qh(e) {
  return Xl.call(ma, e)
    ? !0
    : Xl.call(va, e)
    ? !1
    : Gh.test(e)
    ? (ma[e] = !0)
    : ((va[e] = !0), !1);
}
function Yh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Xh(e, t, n, r) {
  if (t === null || typeof t > "u" || Yh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ge(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var us = /[\-:]([a-z])/g;
function ss(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(us, ss);
    ae[t] = new ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(us, ss);
    ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(us, ss);
  ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function as(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xh(t, n, i, r) && (n = null),
    r || i === null
      ? Qh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Si = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  kn = Symbol.for("react.fragment"),
  cs = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  cf = Symbol.for("react.provider"),
  ff = Symbol.for("react.context"),
  fs = Symbol.for("react.forward_ref"),
  Zl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  ds = Symbol.for("react.memo"),
  xt = Symbol.for("react.lazy"),
  df = Symbol.for("react.offscreen"),
  ga = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ga && e[ga]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  vl;
function yr(e) {
  if (vl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vl = (t && t[1]) || "";
    }
  return (
    `
` +
    vl +
    e
  );
}
var ml = !1;
function gl(e, t) {
  if (!e || ml) return "";
  ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          u = o.length - 1;
        1 <= l && 0 <= u && i[l] !== o[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (i[l] !== o[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || i[l] !== o[u])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (ml = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function Jh(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = gl(e.type, !1)), e;
    case 11:
      return (e = gl(e.type.render, !1)), e;
    case 1:
      return (e = gl(e.type, !0)), e;
    default:
      return "";
  }
}
function eu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case On:
      return "Portal";
    case Jl:
      return "Profiler";
    case cs:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ff:
        return (e.displayName || "Context") + ".Consumer";
      case cf:
        return (e._context.displayName || "Context") + ".Provider";
      case fs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ds:
        return (
          (t = e.displayName || null), t !== null ? t : eu(e.type) || "Memo"
        );
      case xt:
        (t = e._payload), (e = e._init);
        try {
          return eu(e(t));
        } catch {}
    }
  return null;
}
function Zh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return eu(t);
    case 8:
      return t === cs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function pf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function qh(e) {
  var t = pf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xi(e) {
  e._valueTracker || (e._valueTracker = qh(e));
}
function hf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = pf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function io(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tu(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ya(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function vf(e, t) {
  (t = t.checked), t != null && as(e, "checked", t, !1);
}
function nu(e, t) {
  vf(e, t);
  var n = $t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ru(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ru(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ru(e, t, n) {
  (t !== "number" || io(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;
function $n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function iu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (_r(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function mf(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Sa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ou(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ei,
  yf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ei = Ei || document.createElement("div"),
          Ei.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ei.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Er = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ev = ["Webkit", "ms", "Moz", "O"];
Object.keys(Er).forEach(function (e) {
  ev.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Er[t] = Er[e]);
  });
});
function _f(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Er.hasOwnProperty(e) && Er[e])
    ? ("" + t).trim()
    : t + "px";
}
function wf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = _f(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var tv = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function lu(e, t) {
  if (t) {
    if (tv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function uu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var su = null;
function ps(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var au = null,
  Fn = null,
  Un = null;
function xa(e) {
  if ((e = oi(e))) {
    if (typeof au != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Ho(t)), au(e.stateNode, e.type, t));
  }
}
function Sf(e) {
  Fn ? (Un ? Un.push(e) : (Un = [e])) : (Fn = e);
}
function xf() {
  if (Fn) {
    var e = Fn,
      t = Un;
    if (((Un = Fn = null), xa(e), t)) for (e = 0; e < t.length; e++) xa(t[e]);
  }
}
function Ef(e, t) {
  return e(t);
}
function Of() {}
var yl = !1;
function kf(e, t, n) {
  if (yl) return e(t, n);
  yl = !0;
  try {
    return Ef(e, t, n);
  } finally {
    (yl = !1), (Fn !== null || Un !== null) && (Of(), xf());
  }
}
function Dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ho(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var cu = !1;
if (vt)
  try {
    var fr = {};
    Object.defineProperty(fr, "passive", {
      get: function () {
        cu = !0;
      },
    }),
      window.addEventListener("test", fr, fr),
      window.removeEventListener("test", fr, fr);
  } catch {
    cu = !1;
  }
function nv(e, t, n, r, i, o, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Or = !1,
  oo = null,
  lo = !1,
  fu = null,
  rv = {
    onError: function (e) {
      (Or = !0), (oo = e);
    },
  };
function iv(e, t, n, r, i, o, l, u, s) {
  (Or = !1), (oo = null), nv.apply(rv, arguments);
}
function ov(e, t, n, r, i, o, l, u, s) {
  if ((iv.apply(this, arguments), Or)) {
    if (Or) {
      var a = oo;
      (Or = !1), (oo = null);
    } else throw Error(w(198));
    lo || ((lo = !0), (fu = a));
  }
}
function vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Cf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ea(e) {
  if (vn(e) !== e) throw Error(w(188));
}
function lv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Ea(i), e;
        if (o === r) return Ea(i), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, u = i.child; u; ) {
        if (u === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (u === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = o.child; u; ) {
          if (u === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (u === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Pf(e) {
  return (e = lv(e)), e !== null ? Af(e) : null;
}
function Af(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Af(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rf = Ce.unstable_scheduleCallback,
  Oa = Ce.unstable_cancelCallback,
  uv = Ce.unstable_shouldYield,
  sv = Ce.unstable_requestPaint,
  J = Ce.unstable_now,
  av = Ce.unstable_getCurrentPriorityLevel,
  hs = Ce.unstable_ImmediatePriority,
  Nf = Ce.unstable_UserBlockingPriority,
  uo = Ce.unstable_NormalPriority,
  cv = Ce.unstable_LowPriority,
  jf = Ce.unstable_IdlePriority,
  Uo = null,
  nt = null;
function fv(e) {
  if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
      nt.onCommitFiberRoot(Uo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : hv,
  dv = Math.log,
  pv = Math.LN2;
function hv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((dv(e) / pv) | 0)) | 0;
}
var Oi = 64,
  ki = 4194304;
function wr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function so(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? (r = wr(u)) : ((o &= l), o !== 0 && (r = wr(o)));
  } else (l = n & ~i), l !== 0 ? (r = wr(l)) : o !== 0 && (r = wr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - He(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function vv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function mv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - He(o),
      u = 1 << l,
      s = i[l];
    s === -1
      ? (!(u & n) || u & r) && (i[l] = vv(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function du(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Lf() {
  var e = Oi;
  return (Oi <<= 1), !(Oi & 4194240) && (Oi = 64), e;
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - He(t)),
    (e[t] = n);
}
function gv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - He(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function vs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var $ = 0;
function Tf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Mf,
  ms,
  zf,
  Df,
  If,
  pu = !1,
  Ci = [],
  Nt = null,
  jt = null,
  Lt = null,
  Ir = new Map(),
  Br = new Map(),
  Ot = [],
  yv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ka(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      jt = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Br.delete(t.pointerId);
  }
}
function dr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = oi(t)), t !== null && ms(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function _v(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Nt = dr(Nt, e, t, n, r, i)), !0;
    case "dragenter":
      return (jt = dr(jt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Lt = dr(Lt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ir.set(o, dr(Ir.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Br.set(o, dr(Br.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Bf(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Cf(n)), t !== null)) {
          (e.blockedOn = t),
            If(e.priority, function () {
              zf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function bi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (su = r), n.target.dispatchEvent(r), (su = null);
    } else return (t = oi(n)), t !== null && ms(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ca(e, t, n) {
  bi(e) && n.delete(t);
}
function wv() {
  (pu = !1),
    Nt !== null && bi(Nt) && (Nt = null),
    jt !== null && bi(jt) && (jt = null),
    Lt !== null && bi(Lt) && (Lt = null),
    Ir.forEach(Ca),
    Br.forEach(Ca);
}
function pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pu ||
      ((pu = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, wv)));
}
function $r(e) {
  function t(i) {
    return pr(i, e);
  }
  if (0 < Ci.length) {
    pr(Ci[0], e);
    for (var n = 1; n < Ci.length; n++) {
      var r = Ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nt !== null && pr(Nt, e),
      jt !== null && pr(jt, e),
      Lt !== null && pr(Lt, e),
      Ir.forEach(t),
      Br.forEach(t),
      n = 0;
    n < Ot.length;
    n++
  )
    (r = Ot[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
    Bf(n), n.blockedOn === null && Ot.shift();
}
var Vn = wt.ReactCurrentBatchConfig,
  ao = !0;
function Sv(e, t, n, r) {
  var i = $,
    o = Vn.transition;
  Vn.transition = null;
  try {
    ($ = 1), gs(e, t, n, r);
  } finally {
    ($ = i), (Vn.transition = o);
  }
}
function xv(e, t, n, r) {
  var i = $,
    o = Vn.transition;
  Vn.transition = null;
  try {
    ($ = 4), gs(e, t, n, r);
  } finally {
    ($ = i), (Vn.transition = o);
  }
}
function gs(e, t, n, r) {
  if (ao) {
    var i = hu(e, t, n, r);
    if (i === null) Rl(e, t, r, co, n), ka(e, r);
    else if (_v(i, e, t, n, r)) r.stopPropagation();
    else if ((ka(e, r), t & 4 && -1 < yv.indexOf(e))) {
      for (; i !== null; ) {
        var o = oi(i);
        if (
          (o !== null && Mf(o),
          (o = hu(e, t, n, r)),
          o === null && Rl(e, t, r, co, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Rl(e, t, r, null, n);
  }
}
var co = null;
function hu(e, t, n, r) {
  if (((co = null), (e = ps(r)), (e = Zt(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Cf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (co = e), null;
}
function $f(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (av()) {
        case hs:
          return 1;
        case Nf:
          return 4;
        case uo:
        case cv:
          return 16;
        case jf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null,
  ys = null,
  Wi = null;
function Ff() {
  if (Wi) return Wi;
  var e,
    t = ys,
    n = t.length,
    r,
    i = "value" in Ct ? Ct.value : Ct.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Wi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Hi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pi() {
  return !0;
}
function Pa() {
  return !1;
}
function Ae(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Pi
        : Pa),
      (this.isPropagationStopped = Pa),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pi));
      },
      persist: function () {},
      isPersistent: Pi,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _s = Ae(rr),
  ii = G({}, rr, { view: 0, detail: 0 }),
  Ev = Ae(ii),
  wl,
  Sl,
  hr,
  Vo = G({}, ii, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ws,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hr &&
            (hr && e.type === "mousemove"
              ? ((wl = e.screenX - hr.screenX), (Sl = e.screenY - hr.screenY))
              : (Sl = wl = 0),
            (hr = e)),
          wl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Sl;
    },
  }),
  Aa = Ae(Vo),
  Ov = G({}, Vo, { dataTransfer: 0 }),
  kv = Ae(Ov),
  Cv = G({}, ii, { relatedTarget: 0 }),
  xl = Ae(Cv),
  Pv = G({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Av = Ae(Pv),
  Rv = G({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Nv = Ae(Rv),
  jv = G({}, rr, { data: 0 }),
  Ra = Ae(jv),
  Lv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Tv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Mv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Mv[e]) ? !!t[e] : !1;
}
function ws() {
  return zv;
}
var Dv = G({}, ii, {
    key: function (e) {
      if (e.key) {
        var t = Lv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Hi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ws,
    charCode: function (e) {
      return e.type === "keypress" ? Hi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Hi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Iv = Ae(Dv),
  Bv = G({}, Vo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Na = Ae(Bv),
  $v = G({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ws,
  }),
  Fv = Ae($v),
  Uv = G({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vv = Ae(Uv),
  bv = G({}, Vo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Wv = Ae(bv),
  Hv = [9, 13, 27, 32],
  Ss = vt && "CompositionEvent" in window,
  kr = null;
vt && "documentMode" in document && (kr = document.documentMode);
var Kv = vt && "TextEvent" in window && !kr,
  Uf = vt && (!Ss || (kr && 8 < kr && 11 >= kr)),
  ja = " ",
  La = !1;
function Vf(e, t) {
  switch (e) {
    case "keyup":
      return Hv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function bf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function Gv(e, t) {
  switch (e) {
    case "compositionend":
      return bf(t);
    case "keypress":
      return t.which !== 32 ? null : ((La = !0), ja);
    case "textInput":
      return (e = t.data), e === ja && La ? null : e;
    default:
      return null;
  }
}
function Qv(e, t) {
  if (Cn)
    return e === "compositionend" || (!Ss && Vf(e, t))
      ? ((e = Ff()), (Wi = ys = Ct = null), (Cn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Uf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yv[e.type] : t === "textarea";
}
function Wf(e, t, n, r) {
  Sf(r),
    (t = fo(t, "onChange")),
    0 < t.length &&
      ((n = new _s("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cr = null,
  Fr = null;
function Xv(e) {
  td(e, 0);
}
function bo(e) {
  var t = Rn(e);
  if (hf(t)) return e;
}
function Jv(e, t) {
  if (e === "change") return t;
}
var Hf = !1;
if (vt) {
  var El;
  if (vt) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var Ma = document.createElement("div");
      Ma.setAttribute("oninput", "return;"),
        (Ol = typeof Ma.oninput == "function");
    }
    El = Ol;
  } else El = !1;
  Hf = El && (!document.documentMode || 9 < document.documentMode);
}
function za() {
  Cr && (Cr.detachEvent("onpropertychange", Kf), (Fr = Cr = null));
}
function Kf(e) {
  if (e.propertyName === "value" && bo(Fr)) {
    var t = [];
    Wf(t, Fr, e, ps(e)), kf(Xv, t);
  }
}
function Zv(e, t, n) {
  e === "focusin"
    ? (za(), (Cr = t), (Fr = n), Cr.attachEvent("onpropertychange", Kf))
    : e === "focusout" && za();
}
function qv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return bo(Fr);
}
function e0(e, t) {
  if (e === "click") return bo(t);
}
function t0(e, t) {
  if (e === "input" || e === "change") return bo(t);
}
function n0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : n0;
function Ur(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Xl.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function Da(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ia(e, t) {
  var n = Da(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Da(n);
  }
}
function Gf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qf() {
  for (var e = window, t = io(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = io(e.document);
  }
  return t;
}
function xs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function r0(e) {
  var t = Qf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && xs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ia(n, o));
        var l = Ia(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var i0 = vt && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  vu = null,
  Pr = null,
  mu = !1;
function Ba(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mu ||
    Pn == null ||
    Pn !== io(r) ||
    ((r = Pn),
    "selectionStart" in r && xs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pr && Ur(Pr, r)) ||
      ((Pr = r),
      (r = fo(vu, "onSelect")),
      0 < r.length &&
        ((t = new _s("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function Ai(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var An = {
    animationend: Ai("Animation", "AnimationEnd"),
    animationiteration: Ai("Animation", "AnimationIteration"),
    animationstart: Ai("Animation", "AnimationStart"),
    transitionend: Ai("Transition", "TransitionEnd"),
  },
  kl = {},
  Yf = {};
vt &&
  ((Yf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function Wo(e) {
  if (kl[e]) return kl[e];
  if (!An[e]) return e;
  var t = An[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yf) return (kl[e] = t[n]);
  return e;
}
var Xf = Wo("animationend"),
  Jf = Wo("animationiteration"),
  Zf = Wo("animationstart"),
  qf = Wo("transitionend"),
  ed = new Map(),
  $a =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Vt(e, t) {
  ed.set(e, t), hn(t, [e]);
}
for (var Cl = 0; Cl < $a.length; Cl++) {
  var Pl = $a[Cl],
    o0 = Pl.toLowerCase(),
    l0 = Pl[0].toUpperCase() + Pl.slice(1);
  Vt(o0, "on" + l0);
}
Vt(Xf, "onAnimationEnd");
Vt(Jf, "onAnimationIteration");
Vt(Zf, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(qf, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Sr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  u0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
function Fa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ov(r, t, void 0, e), (e.currentTarget = null);
}
function td(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && i.isPropagationStopped())) break e;
          Fa(i, u, a), (o = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          Fa(i, u, a), (o = s);
        }
    }
  }
  if (lo) throw ((e = fu), (lo = !1), (fu = null), e);
}
function V(e, t) {
  var n = t[Su];
  n === void 0 && (n = t[Su] = new Set());
  var r = e + "__bubble";
  n.has(r) || (nd(t, e, 2, !1), n.add(r));
}
function Al(e, t, n) {
  var r = 0;
  t && (r |= 4), nd(n, e, r, t);
}
var Ri = "_reactListening" + Math.random().toString(36).slice(2);
function Vr(e) {
  if (!e[Ri]) {
    (e[Ri] = !0),
      af.forEach(function (n) {
        n !== "selectionchange" && (u0.has(n) || Al(n, !1, e), Al(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ri] || ((t[Ri] = !0), Al("selectionchange", !1, t));
  }
}
function nd(e, t, n, r) {
  switch ($f(t)) {
    case 1:
      var i = Sv;
      break;
    case 4:
      i = xv;
      break;
    default:
      i = gs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !cu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Rl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = Zt(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  kf(function () {
    var a = o,
      c = ps(n),
      d = [];
    e: {
      var v = ed.get(e);
      if (v !== void 0) {
        var g = _s,
          _ = e;
        switch (e) {
          case "keypress":
            if (Hi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Iv;
            break;
          case "focusin":
            (_ = "focus"), (g = xl);
            break;
          case "focusout":
            (_ = "blur"), (g = xl);
            break;
          case "beforeblur":
          case "afterblur":
            g = xl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Aa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = kv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Fv;
            break;
          case Xf:
          case Jf:
          case Zf:
            g = Av;
            break;
          case qf:
            g = Vv;
            break;
          case "scroll":
            g = Ev;
            break;
          case "wheel":
            g = Wv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Nv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Na;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          p = y ? (v !== null ? v + "Capture" : null) : v;
        y = [];
        for (var f = a, h; f !== null; ) {
          h = f;
          var m = h.stateNode;
          if (
            (h.tag === 5 &&
              m !== null &&
              ((h = m),
              p !== null && ((m = Dr(f, p)), m != null && y.push(br(f, m, h)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((v = new g(v, _, null, n, c)), d.push({ event: v, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== su &&
            (_ = n.relatedTarget || n.fromElement) &&
            (Zt(_) || _[mt]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            c.window === c
              ? c
              : (v = c.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          g
            ? ((_ = n.relatedTarget || n.toElement),
              (g = a),
              (_ = _ ? Zt(_) : null),
              _ !== null &&
                ((S = vn(_)), _ !== S || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((g = null), (_ = a)),
          g !== _)
        ) {
          if (
            ((y = Aa),
            (m = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Na),
              (m = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (S = g == null ? v : Rn(g)),
            (h = _ == null ? v : Rn(_)),
            (v = new y(m, f + "leave", g, n, c)),
            (v.target = S),
            (v.relatedTarget = h),
            (m = null),
            Zt(c) === a &&
              ((y = new y(p, f + "enter", _, n, c)),
              (y.target = h),
              (y.relatedTarget = S),
              (m = y)),
            (S = m),
            g && _)
          )
            t: {
              for (y = g, p = _, f = 0, h = y; h; h = Sn(h)) f++;
              for (h = 0, m = p; m; m = Sn(m)) h++;
              for (; 0 < f - h; ) (y = Sn(y)), f--;
              for (; 0 < h - f; ) (p = Sn(p)), h--;
              for (; f--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = Sn(y)), (p = Sn(p));
              }
              y = null;
            }
          else y = null;
          g !== null && Ua(d, v, g, y, !1),
            _ !== null && S !== null && Ua(d, S, _, y, !0);
        }
      }
      e: {
        if (
          ((v = a ? Rn(a) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var E = Jv;
        else if (Ta(v))
          if (Hf) E = t0;
          else {
            E = qv;
            var k = Zv;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (E = e0);
        if (E && (E = E(e, a))) {
          Wf(d, E, n, c);
          break e;
        }
        k && k(e, v, a),
          e === "focusout" &&
            (k = v._wrapperState) &&
            k.controlled &&
            v.type === "number" &&
            ru(v, "number", v.value);
      }
      switch (((k = a ? Rn(a) : window), e)) {
        case "focusin":
          (Ta(k) || k.contentEditable === "true") &&
            ((Pn = k), (vu = a), (Pr = null));
          break;
        case "focusout":
          Pr = vu = Pn = null;
          break;
        case "mousedown":
          mu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mu = !1), Ba(d, n, c);
          break;
        case "selectionchange":
          if (i0) break;
        case "keydown":
        case "keyup":
          Ba(d, n, c);
      }
      var A;
      if (Ss)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Cn
          ? Vf(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Uf &&
          n.locale !== "ko" &&
          (Cn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Cn && (A = Ff())
            : ((Ct = c),
              (ys = "value" in Ct ? Ct.value : Ct.textContent),
              (Cn = !0))),
        (k = fo(a, N)),
        0 < k.length &&
          ((N = new Ra(N, e, null, n, c)),
          d.push({ event: N, listeners: k }),
          A ? (N.data = A) : ((A = bf(n)), A !== null && (N.data = A)))),
        (A = Kv ? Gv(e, n) : Qv(e, n)) &&
          ((a = fo(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new Ra("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: a }),
            (c.data = A)));
    }
    td(d, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Dr(e, n)),
      o != null && r.unshift(br(e, o, i)),
      (o = Dr(e, t)),
      o != null && r.push(br(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ua(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      i
        ? ((s = Dr(n, o)), s != null && l.unshift(br(n, s, u)))
        : i || ((s = Dr(n, o)), s != null && l.push(br(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var s0 = /\r\n?/g,
  a0 = /\u0000|\uFFFD/g;
function Va(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      s0,
      `
`
    )
    .replace(a0, "");
}
function Ni(e, t, n) {
  if (((t = Va(t)), Va(e) !== t && n)) throw Error(w(425));
}
function po() {}
var gu = null,
  yu = null;
function _u(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wu = typeof setTimeout == "function" ? setTimeout : void 0,
  c0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ba = typeof Promise == "function" ? Promise : void 0,
  f0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ba < "u"
      ? function (e) {
          return ba.resolve(null).then(e).catch(d0);
        }
      : wu;
function d0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Nl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), $r(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  $r(t);
}
function Tt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  et = "__reactFiber$" + ir,
  Wr = "__reactProps$" + ir,
  mt = "__reactContainer$" + ir,
  Su = "__reactEvents$" + ir,
  p0 = "__reactListeners$" + ir,
  h0 = "__reactHandles$" + ir;
function Zt(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wa(e); e !== null; ) {
          if ((n = e[et])) return n;
          e = Wa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function oi(e) {
  return (
    (e = e[et] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Ho(e) {
  return e[Wr] || null;
}
var xu = [],
  Nn = -1;
function bt(e) {
  return { current: e };
}
function b(e) {
  0 > Nn || ((e.current = xu[Nn]), (xu[Nn] = null), Nn--);
}
function F(e, t) {
  Nn++, (xu[Nn] = e.current), (e.current = t);
}
var Ft = {},
  pe = bt(Ft),
  we = bt(!1),
  on = Ft;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function ho() {
  b(we), b(pe);
}
function Ha(e, t, n) {
  if (pe.current !== Ft) throw Error(w(168));
  F(pe, t), F(we, n);
}
function rd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(w(108, Zh(e) || "Unknown", i));
  return G({}, n, r);
}
function vo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (on = pe.current),
    F(pe, e),
    F(we, we.current),
    !0
  );
}
function Ka(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = rd(e, t, on)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      b(we),
      b(pe),
      F(pe, e))
    : b(we),
    F(we, n);
}
var st = null,
  Ko = !1,
  jl = !1;
function id(e) {
  st === null ? (st = [e]) : st.push(e);
}
function v0(e) {
  (Ko = !0), id(e);
}
function Wt() {
  if (!jl && st !== null) {
    jl = !0;
    var e = 0,
      t = $;
    try {
      var n = st;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (Ko = !1);
    } catch (i) {
      throw (st !== null && (st = st.slice(e + 1)), Rf(hs, Wt), i);
    } finally {
      ($ = t), (jl = !1);
    }
  }
  return null;
}
var jn = [],
  Ln = 0,
  mo = null,
  go = 0,
  Ne = [],
  je = 0,
  ln = null,
  ct = 1,
  ft = "";
function Xt(e, t) {
  (jn[Ln++] = go), (jn[Ln++] = mo), (mo = e), (go = t);
}
function od(e, t, n) {
  (Ne[je++] = ct), (Ne[je++] = ft), (Ne[je++] = ln), (ln = e);
  var r = ct;
  e = ft;
  var i = 32 - He(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - He(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (ct = (1 << (32 - He(t) + i)) | (n << i) | r),
      (ft = o + e);
  } else (ct = (1 << o) | (n << i) | r), (ft = e);
}
function Es(e) {
  e.return !== null && (Xt(e, 1), od(e, 1, 0));
}
function Os(e) {
  for (; e === mo; )
    (mo = jn[--Ln]), (jn[Ln] = null), (go = jn[--Ln]), (jn[Ln] = null);
  for (; e === ln; )
    (ln = Ne[--je]),
      (Ne[je] = null),
      (ft = Ne[--je]),
      (Ne[je] = null),
      (ct = Ne[--je]),
      (Ne[je] = null);
}
var ke = null,
  Oe = null,
  W = !1,
  We = null;
function ld(e, t) {
  var n = Me(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ga(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Oe = Tt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Oe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ln !== null ? { id: ct, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Me(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Oe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Eu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ou(e) {
  if (W) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!Ga(e, t)) {
        if (Eu(e)) throw Error(w(418));
        t = Tt(n.nextSibling);
        var r = ke;
        t && Ga(e, t)
          ? ld(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (ke = e));
      }
    } else {
      if (Eu(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (ke = e);
    }
  }
}
function Qa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function ji(e) {
  if (e !== ke) return !1;
  if (!W) return Qa(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !_u(e.type, e.memoizedProps))),
    t && (t = Oe))
  ) {
    if (Eu(e)) throw (ud(), Error(w(418)));
    for (; t; ) ld(e, t), (t = Tt(t.nextSibling));
  }
  if ((Qa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = ke ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function ud() {
  for (var e = Oe; e; ) e = Tt(e.nextSibling);
}
function Gn() {
  (Oe = ke = null), (W = !1);
}
function ks(e) {
  We === null ? (We = [e]) : We.push(e);
}
var m0 = wt.ReactCurrentBatchConfig;
function vr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var u = i.refs;
            l === null ? delete u[o] : (u[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Li(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ya(e) {
  var t = e._init;
  return t(e._payload);
}
function sd(e) {
  function t(p, f) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [f]), (p.flags |= 16)) : h.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = It(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, f, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((p.flags |= 2), f) : h)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, f, h, m) {
    return f === null || f.tag !== 6
      ? ((f = Bl(h, p.mode, m)), (f.return = p), f)
      : ((f = i(f, h)), (f.return = p), f);
  }
  function s(p, f, h, m) {
    var E = h.type;
    return E === kn
      ? c(p, f, h.props.children, m, h.key)
      : f !== null &&
        (f.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === xt &&
            Ya(E) === f.type))
      ? ((m = i(f, h.props)), (m.ref = vr(p, f, h)), (m.return = p), m)
      : ((m = Zi(h.type, h.key, h.props, null, p.mode, m)),
        (m.ref = vr(p, f, h)),
        (m.return = p),
        m);
  }
  function a(p, f, h, m) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = $l(h, p.mode, m)), (f.return = p), f)
      : ((f = i(f, h.children || [])), (f.return = p), f);
  }
  function c(p, f, h, m, E) {
    return f === null || f.tag !== 7
      ? ((f = nn(h, p.mode, m, E)), (f.return = p), f)
      : ((f = i(f, h)), (f.return = p), f);
  }
  function d(p, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Bl("" + f, p.mode, h)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Si:
          return (
            (h = Zi(f.type, f.key, f.props, null, p.mode, h)),
            (h.ref = vr(p, null, f)),
            (h.return = p),
            h
          );
        case On:
          return (f = $l(f, p.mode, h)), (f.return = p), f;
        case xt:
          var m = f._init;
          return d(p, m(f._payload), h);
      }
      if (_r(f) || cr(f))
        return (f = nn(f, p.mode, h, null)), (f.return = p), f;
      Li(p, f);
    }
    return null;
  }
  function v(p, f, h, m) {
    var E = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return E !== null ? null : u(p, f, "" + h, m);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Si:
          return h.key === E ? s(p, f, h, m) : null;
        case On:
          return h.key === E ? a(p, f, h, m) : null;
        case xt:
          return (E = h._init), v(p, f, E(h._payload), m);
      }
      if (_r(h) || cr(h)) return E !== null ? null : c(p, f, h, m, null);
      Li(p, h);
    }
    return null;
  }
  function g(p, f, h, m, E) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (p = p.get(h) || null), u(f, p, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Si:
          return (p = p.get(m.key === null ? h : m.key) || null), s(f, p, m, E);
        case On:
          return (p = p.get(m.key === null ? h : m.key) || null), a(f, p, m, E);
        case xt:
          var k = m._init;
          return g(p, f, h, k(m._payload), E);
      }
      if (_r(m) || cr(m)) return (p = p.get(h) || null), c(f, p, m, E, null);
      Li(f, m);
    }
    return null;
  }
  function _(p, f, h, m) {
    for (
      var E = null, k = null, A = f, N = (f = 0), Y = null;
      A !== null && N < h.length;
      N++
    ) {
      A.index > N ? ((Y = A), (A = null)) : (Y = A.sibling);
      var z = v(p, A, h[N], m);
      if (z === null) {
        A === null && (A = Y);
        break;
      }
      e && A && z.alternate === null && t(p, A),
        (f = o(z, f, N)),
        k === null ? (E = z) : (k.sibling = z),
        (k = z),
        (A = Y);
    }
    if (N === h.length) return n(p, A), W && Xt(p, N), E;
    if (A === null) {
      for (; N < h.length; N++)
        (A = d(p, h[N], m)),
          A !== null &&
            ((f = o(A, f, N)), k === null ? (E = A) : (k.sibling = A), (k = A));
      return W && Xt(p, N), E;
    }
    for (A = r(p, A); N < h.length; N++)
      (Y = g(A, p, N, h[N], m)),
        Y !== null &&
          (e && Y.alternate !== null && A.delete(Y.key === null ? N : Y.key),
          (f = o(Y, f, N)),
          k === null ? (E = Y) : (k.sibling = Y),
          (k = Y));
    return (
      e &&
        A.forEach(function (Fe) {
          return t(p, Fe);
        }),
      W && Xt(p, N),
      E
    );
  }
  function y(p, f, h, m) {
    var E = cr(h);
    if (typeof E != "function") throw Error(w(150));
    if (((h = E.call(h)), h == null)) throw Error(w(151));
    for (
      var k = (E = null), A = f, N = (f = 0), Y = null, z = h.next();
      A !== null && !z.done;
      N++, z = h.next()
    ) {
      A.index > N ? ((Y = A), (A = null)) : (Y = A.sibling);
      var Fe = v(p, A, z.value, m);
      if (Fe === null) {
        A === null && (A = Y);
        break;
      }
      e && A && Fe.alternate === null && t(p, A),
        (f = o(Fe, f, N)),
        k === null ? (E = Fe) : (k.sibling = Fe),
        (k = Fe),
        (A = Y);
    }
    if (z.done) return n(p, A), W && Xt(p, N), E;
    if (A === null) {
      for (; !z.done; N++, z = h.next())
        (z = d(p, z.value, m)),
          z !== null &&
            ((f = o(z, f, N)), k === null ? (E = z) : (k.sibling = z), (k = z));
      return W && Xt(p, N), E;
    }
    for (A = r(p, A); !z.done; N++, z = h.next())
      (z = g(A, p, N, z.value, m)),
        z !== null &&
          (e && z.alternate !== null && A.delete(z.key === null ? N : z.key),
          (f = o(z, f, N)),
          k === null ? (E = z) : (k.sibling = z),
          (k = z));
    return (
      e &&
        A.forEach(function (sr) {
          return t(p, sr);
        }),
      W && Xt(p, N),
      E
    );
  }
  function S(p, f, h, m) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === kn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Si:
          e: {
            for (var E = h.key, k = f; k !== null; ) {
              if (k.key === E) {
                if (((E = h.type), E === kn)) {
                  if (k.tag === 7) {
                    n(p, k.sibling),
                      (f = i(k, h.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  k.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === xt &&
                    Ya(E) === k.type)
                ) {
                  n(p, k.sibling),
                    (f = i(k, h.props)),
                    (f.ref = vr(p, k, h)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            h.type === kn
              ? ((f = nn(h.props.children, p.mode, m, h.key)),
                (f.return = p),
                (p = f))
              : ((m = Zi(h.type, h.key, h.props, null, p.mode, m)),
                (m.ref = vr(p, f, h)),
                (m.return = p),
                (p = m));
          }
          return l(p);
        case On:
          e: {
            for (k = h.key; f !== null; ) {
              if (f.key === k)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(p, f.sibling),
                    (f = i(f, h.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = $l(h, p.mode, m)), (f.return = p), (p = f);
          }
          return l(p);
        case xt:
          return (k = h._init), S(p, f, k(h._payload), m);
      }
      if (_r(h)) return _(p, f, h, m);
      if (cr(h)) return y(p, f, h, m);
      Li(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, h)), (f.return = p), (p = f))
          : (n(p, f), (f = Bl(h, p.mode, m)), (f.return = p), (p = f)),
        l(p))
      : n(p, f);
  }
  return S;
}
var Qn = sd(!0),
  ad = sd(!1),
  yo = bt(null),
  _o = null,
  Tn = null,
  Cs = null;
function Ps() {
  Cs = Tn = _o = null;
}
function As(e) {
  var t = yo.current;
  b(yo), (e._currentValue = t);
}
function ku(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bn(e, t) {
  (_o = e),
    (Cs = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_e = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Cs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (_o === null) throw Error(w(308));
      (Tn = e), (_o.dependencies = { lanes: 0, firstContext: e });
    } else Tn = Tn.next = e;
  return t;
}
var qt = null;
function Rs(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function cd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Rs(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Et = !1;
function Ns(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Rs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function Ki(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vs(e, n);
  }
}
function Xa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function wo(e, t, n, r) {
  var i = e.updateQueue;
  Et = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), l === null ? (o = a) : (l.next = a), (l = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== l &&
        (u === null ? (c.firstBaseUpdate = a) : (u.next = a),
        (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var d = i.baseState;
    (l = 0), (c = a = s = null), (u = o);
    do {
      var v = u.lane,
        g = u.eventTime;
      if ((r & v) === v) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var _ = e,
            y = u;
          switch (((v = t), (g = n), y.tag)) {
            case 1:
              if (((_ = y.payload), typeof _ == "function")) {
                d = _.call(g, d, v);
                break e;
              }
              d = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = y.payload),
                (v = typeof _ == "function" ? _.call(g, d, v) : _),
                v == null)
              )
                break e;
              d = G({}, d, v);
              break e;
            case 2:
              Et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [u]) : v.push(u));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((a = c = g), (s = d)) : (c = c.next = g),
          (l |= v);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (v = u),
          (u = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = d),
      (i.baseState = s),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (sn |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function Ja(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(w(191, i));
        i.call(r);
      }
    }
}
var li = {},
  rt = bt(li),
  Hr = bt(li),
  Kr = bt(li);
function en(e) {
  if (e === li) throw Error(w(174));
  return e;
}
function js(e, t) {
  switch ((F(Kr, t), F(Hr, e), F(rt, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ou(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ou(t, e));
  }
  b(rt), F(rt, t);
}
function Yn() {
  b(rt), b(Hr), b(Kr);
}
function dd(e) {
  en(Kr.current);
  var t = en(rt.current),
    n = ou(t, e.type);
  t !== n && (F(Hr, e), F(rt, n));
}
function Ls(e) {
  Hr.current === e && (b(rt), b(Hr));
}
var H = bt(0);
function So(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ll = [];
function Ts() {
  for (var e = 0; e < Ll.length; e++)
    Ll[e]._workInProgressVersionPrimary = null;
  Ll.length = 0;
}
var Gi = wt.ReactCurrentDispatcher,
  Tl = wt.ReactCurrentBatchConfig,
  un = 0,
  K = null,
  q = null,
  re = null,
  xo = !1,
  Ar = !1,
  Gr = 0,
  g0 = 0;
function ce() {
  throw Error(w(321));
}
function Ms(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function zs(e, t, n, r, i, o) {
  if (
    ((un = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gi.current = e === null || e.memoizedState === null ? S0 : x0),
    (e = n(r, i)),
    Ar)
  ) {
    o = 0;
    do {
      if (((Ar = !1), (Gr = 0), 25 <= o)) throw Error(w(301));
      (o += 1),
        (re = q = null),
        (t.updateQueue = null),
        (Gi.current = E0),
        (e = n(r, i));
    } while (Ar);
  }
  if (
    ((Gi.current = Eo),
    (t = q !== null && q.next !== null),
    (un = 0),
    (re = q = K = null),
    (xo = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Ds() {
  var e = Gr !== 0;
  return (Gr = 0), e;
}
function qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (K.memoizedState = re = e) : (re = re.next = e), re;
}
function $e() {
  if (q === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = re === null ? K.memoizedState : re.next;
  if (t !== null) (re = t), (q = e);
  else {
    if (e === null) throw Error(w(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      re === null ? (K.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ml(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = q,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var u = (l = null),
      s = null,
      a = o;
    do {
      var c = a.lane;
      if ((un & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = d), (l = r)) : (s = s.next = d),
          (K.lanes |= c),
          (sn |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (l = r) : (s.next = u),
      Ye(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (K.lanes |= o), (sn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zl(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Ye(o, t.memoizedState) || (_e = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function pd() {}
function hd(e, t) {
  var n = K,
    r = $e(),
    i = t(),
    o = !Ye(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (_e = !0)),
    (r = r.queue),
    Is(gd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yr(9, md.bind(null, n, r, i, t), void 0, null),
      ie === null)
    )
      throw Error(w(349));
    un & 30 || vd(n, t, i);
  }
  return i;
}
function vd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function md(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yd(t) && _d(e);
}
function gd(e, t, n) {
  return n(function () {
    yd(t) && _d(e);
  });
}
function yd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function _d(e) {
  var t = gt(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function Za(e) {
  var t = qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = w0.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wd() {
  return $e().memoizedState;
}
function Qi(e, t, n, r) {
  var i = qe();
  (K.flags |= e),
    (i.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Go(e, t, n, r) {
  var i = $e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (q !== null) {
    var l = q.memoizedState;
    if (((o = l.destroy), r !== null && Ms(r, l.deps))) {
      i.memoizedState = Yr(t, n, o, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = Yr(1 | t, n, o, r));
}
function qa(e, t) {
  return Qi(8390656, 8, e, t);
}
function Is(e, t) {
  return Go(2048, 8, e, t);
}
function Sd(e, t) {
  return Go(4, 2, e, t);
}
function xd(e, t) {
  return Go(4, 4, e, t);
}
function Ed(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Od(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Go(4, 4, Ed.bind(null, t, e), n)
  );
}
function Bs() {}
function kd(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ms(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Cd(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ms(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pd(e, t, n) {
  return un & 21
    ? (Ye(n, t) || ((n = Lf()), (K.lanes |= n), (sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_e = !0)), (e.memoizedState = n));
}
function y0(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Tl.transition;
  Tl.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (Tl.transition = r);
  }
}
function Ad() {
  return $e().memoizedState;
}
function _0(e, t, n) {
  var r = Dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rd(e))
  )
    Nd(t, n);
  else if (((n = cd(e, t, n, r)), n !== null)) {
    var i = ve();
    Ke(n, e, r, i), jd(n, t, r);
  }
}
function w0(e, t, n) {
  var r = Dt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rd(e)) Nd(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = u), Ye(u, l))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), Rs(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = cd(e, t, i, r)),
      n !== null && ((i = ve()), Ke(n, e, r, i), jd(n, t, r));
  }
}
function Rd(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Nd(e, t) {
  Ar = xo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vs(e, n);
  }
}
var Eo = {
    readContext: Be,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  S0 = {
    readContext: Be,
    useCallback: function (e, t) {
      return (qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: qa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qi(4194308, 4, Ed.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = qe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _0.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Za,
    useDebugValue: Bs,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Za(!1),
        t = e[0];
      return (e = y0.bind(null, e[1])), (qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = qe();
      if (W) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(w(349));
        un & 30 || vd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        qa(gd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Yr(9, md.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qe(),
        t = ie.identifierPrefix;
      if (W) {
        var n = ft,
          r = ct;
        (n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = g0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  x0 = {
    readContext: Be,
    useCallback: kd,
    useContext: Be,
    useEffect: Is,
    useImperativeHandle: Od,
    useInsertionEffect: Sd,
    useLayoutEffect: xd,
    useMemo: Cd,
    useReducer: Ml,
    useRef: wd,
    useState: function () {
      return Ml(Qr);
    },
    useDebugValue: Bs,
    useDeferredValue: function (e) {
      var t = $e();
      return Pd(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Ml(Qr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: pd,
    useSyncExternalStore: hd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  },
  E0 = {
    readContext: Be,
    useCallback: kd,
    useContext: Be,
    useEffect: Is,
    useImperativeHandle: Od,
    useInsertionEffect: Sd,
    useLayoutEffect: xd,
    useMemo: Cd,
    useReducer: zl,
    useRef: wd,
    useState: function () {
      return zl(Qr);
    },
    useDebugValue: Bs,
    useDeferredValue: function (e) {
      var t = $e();
      return q === null ? (t.memoizedState = e) : Pd(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = zl(Qr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: pd,
    useSyncExternalStore: hd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  };
function Ve(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Cu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = Dt(e),
      o = dt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Mt(e, o, i)),
      t !== null && (Ke(t, e, i, r), Ki(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = Dt(e),
      o = dt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Mt(e, o, i)),
      t !== null && (Ke(t, e, i, r), Ki(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = Dt(e),
      i = dt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Mt(e, i, r)),
      t !== null && (Ke(t, e, r, n), Ki(t, e, r));
  },
};
function ec(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ur(n, r) || !Ur(i, o)
      : !0
  );
}
function Ld(e, t, n) {
  var r = !1,
    i = Ft,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Be(o))
      : ((i = Se(t) ? on : pe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Kn(e, i) : Ft)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Qo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function tc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Qo.enqueueReplaceState(t, t.state, null);
}
function Pu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ns(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Be(o))
    : ((o = Se(t) ? on : pe.current), (i.context = Kn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Cu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Qo.enqueueReplaceState(i, i.state, null),
      wo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Jh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Dl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Au(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var O0 = typeof WeakMap == "function" ? WeakMap : Map;
function Td(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ko || ((ko = !0), (Bu = r)), Au(e, t);
    }),
    n
  );
}
function Md(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Au(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Au(e, t),
          typeof r != "function" &&
            (zt === null ? (zt = new Set([this])) : zt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function nc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new O0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = B0.bind(null, e, t, n)), t.then(e, e));
}
function rc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ic(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dt(-1, 1)), (t.tag = 2), Mt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var k0 = wt.ReactCurrentOwner,
  _e = !1;
function he(e, t, n, r) {
  t.child = e === null ? ad(t, null, n, r) : Qn(t, e.child, n, r);
}
function oc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    bn(t, i),
    (r = zs(e, t, n, r, o, i)),
    (n = Ds()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (W && n && Es(t), (t.flags |= 1), he(e, t, r, i), t.child)
  );
}
function lc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ks(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), zd(e, t, o, r, i))
      : ((e = Zi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(l, r) && e.ref === t.ref)
    )
      return yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = It(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ur(o, r) && e.ref === t.ref)
      if (((_e = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (_e = !0);
      else return (t.lanes = e.lanes), yt(e, t, i);
  }
  return Ru(e, t, n, r, i);
}
function Dd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(zn, Ee),
        (Ee |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(zn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(zn, Ee),
        (Ee |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(zn, Ee),
      (Ee |= r);
  return he(e, t, i, n), t.child;
}
function Id(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ru(e, t, n, r, i) {
  var o = Se(n) ? on : pe.current;
  return (
    (o = Kn(t, o)),
    bn(t, i),
    (n = zs(e, t, n, r, o, i)),
    (r = Ds()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (W && r && Es(t), (t.flags |= 1), he(e, t, n, i), t.child)
  );
}
function uc(e, t, n, r, i) {
  if (Se(n)) {
    var o = !0;
    vo(t);
  } else o = !1;
  if ((bn(t, i), t.stateNode === null))
    Yi(e, t), Ld(t, n, r), Pu(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Be(a))
      : ((a = Se(n) ? on : pe.current), (a = Kn(t, a)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && tc(t, l, r, a)),
      (Et = !1);
    var v = t.memoizedState;
    (l.state = v),
      wo(t, r, l, i),
      (s = t.memoizedState),
      u !== r || v !== s || we.current || Et
        ? (typeof c == "function" && (Cu(t, n, c, r), (s = t.memoizedState)),
          (u = Et || ec(t, n, u, r, v, s, a))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      fd(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Ve(t.type, u)),
      (l.props = a),
      (d = t.pendingProps),
      (v = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Be(s))
        : ((s = Se(n) ? on : pe.current), (s = Kn(t, s)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== d || v !== s) && tc(t, l, r, s)),
      (Et = !1),
      (v = t.memoizedState),
      (l.state = v),
      wo(t, r, l, i);
    var _ = t.memoizedState;
    u !== d || v !== _ || we.current || Et
      ? (typeof g == "function" && (Cu(t, n, g, r), (_ = t.memoizedState)),
        (a = Et || ec(t, n, a, r, v, _, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, _, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, _, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (l.props = r),
        (l.state = _),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Nu(e, t, n, r, o, i);
}
function Nu(e, t, n, r, i, o) {
  Id(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Ka(t, n, !1), yt(e, t, o);
  (r = t.stateNode), (k0.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Qn(t, e.child, null, o)), (t.child = Qn(t, null, u, o)))
      : he(e, t, u, o),
    (t.memoizedState = r.state),
    i && Ka(t, n, !0),
    t.child
  );
}
function Bd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ha(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ha(e, t.context, !1),
    js(e, t.containerInfo);
}
function sc(e, t, n, r, i) {
  return Gn(), ks(i), (t.flags |= 256), he(e, t, n, r), t.child;
}
var ju = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $d(e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    F(H, i & 1),
    e === null)
  )
    return (
      Ou(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Jo(l, r, 0, null)),
              (e = nn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Lu(n)),
              (t.memoizedState = ju),
              e)
            : $s(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
    return C0(e, t, l, r, u, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (u = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = It(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (o = It(u, o)) : ((o = nn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Lu(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ju),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = It(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function $s(e, t) {
  return (
    (t = Jo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ti(e, t, n, r) {
  return (
    r !== null && ks(r),
    Qn(t, e.child, null, n),
    (e = $s(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function C0(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Dl(Error(w(422)))), Ti(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Jo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = nn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Qn(t, e.child, null, l),
        (t.child.memoizedState = Lu(l)),
        (t.memoizedState = ju),
        o);
  if (!(t.mode & 1)) return Ti(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(w(419))), (r = Dl(o, r, void 0)), Ti(e, t, l, r);
  }
  if (((u = (l & e.childLanes) !== 0), _e || u)) {
    if (((r = ie), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), gt(e, i), Ke(r, e, i, -1));
    }
    return Hs(), (r = Dl(Error(w(421)))), Ti(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Oe = Tt(i.nextSibling)),
      (ke = t),
      (W = !0),
      (We = null),
      e !== null &&
        ((Ne[je++] = ct),
        (Ne[je++] = ft),
        (Ne[je++] = ln),
        (ct = e.id),
        (ft = e.overflow),
        (ln = t)),
      (t = $s(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ac(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ku(e.return, t, n);
}
function Il(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Fd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((he(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
        else if (e.tag === 19) ac(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && So(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Il(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && So(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Il(t, !0, n, null, o);
        break;
      case "together":
        Il(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function P0(e, t, n) {
  switch (t.tag) {
    case 3:
      Bd(t), Gn();
      break;
    case 5:
      dd(t);
      break;
    case 1:
      Se(t.type) && vo(t);
      break;
    case 4:
      js(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      F(yo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $d(e, t, n)
          : (F(H, H.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      F(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        F(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Dd(e, t, n);
  }
  return yt(e, t, n);
}
var Ud, Tu, Vd, bd;
Ud = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Tu = function () {};
Vd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), en(rt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = tu(e, i)), (r = tu(e, r)), (o = []);
        break;
      case "select":
        (i = G({}, i, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = iu(e, i)), (r = iu(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = po);
    }
    lu(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var u = i[a];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Mr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                u[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Mr.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && V("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
bd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function A0(e, t, n) {
  var r = t.pendingProps;
  switch ((Os(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return fe(t), null;
    case 1:
      return Se(t.type) && ho(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Yn(),
        b(we),
        b(pe),
        Ts(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ji(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (Uu(We), (We = null)))),
        Tu(e, t),
        fe(t),
        null
      );
    case 5:
      Ls(t);
      var i = en(Kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return fe(t), null;
        }
        if (((e = en(rt.current)), ji(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[et] = t), (r[Wr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Sr.length; i++) V(Sr[i], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              ya(r, o), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              wa(r, o), V("invalid", r);
          }
          lu(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var u = o[l];
              l === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ni(r.textContent, u, e),
                    (i = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ni(r.textContent, u, e),
                    (i = ["children", "" + u]))
                : Mr.hasOwnProperty(l) &&
                  u != null &&
                  l === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              xi(r), _a(r, o, !0);
              break;
            case "textarea":
              xi(r), Sa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = po);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[et] = t),
            (e[Wr] = r),
            Ud(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = uu(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Sr.length; i++) V(Sr[i], e);
                i = r;
                break;
              case "source":
                V("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (i = r);
                break;
              case "details":
                V("toggle", e), (i = r);
                break;
              case "input":
                ya(e, r), (i = tu(e, r)), V("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = G({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                wa(e, r), (i = iu(e, r)), V("invalid", e);
                break;
              default:
                i = r;
            }
            lu(n, i), (u = i);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? wf(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && yf(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && zr(e, s)
                    : typeof s == "number" && zr(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Mr.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && V("scroll", e)
                      : s != null && as(e, o, s, l));
              }
            switch (n) {
              case "input":
                xi(e), _a(e, r, !1);
                break;
              case "textarea":
                xi(e), Sa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? $n(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      $n(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = po);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) bd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = en(Kr.current)), en(rt.current), ji(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (o = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ni(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ni(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        (b(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Oe !== null && t.mode & 1 && !(t.flags & 128))
          ud(), Gn(), (t.flags |= 98560), (o = !1);
        else if (((o = ji(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(w(317));
            o[et] = t;
          } else
            Gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (o = !1);
        } else We !== null && (Uu(We), (We = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? ee === 0 && (ee = 3) : Hs())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        Yn(), Tu(e, t), e === null && Vr(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return As(t.type._context), fe(t), null;
    case 17:
      return Se(t.type) && ho(), fe(t), null;
    case 19:
      if ((b(H), (o = t.memoizedState), o === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) mr(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = So(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    mr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > Jn &&
            ((t.flags |= 128), (r = !0), mr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = So(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !W)
            )
              return fe(t), null;
          } else
            2 * J() - o.renderingStartTime > Jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = H.current),
          F(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        Ws(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function R0(e, t) {
  switch ((Os(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && ho(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Yn(),
        b(we),
        b(pe),
        Ts(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ls(t), null;
    case 13:
      if ((b(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        Gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return b(H), null;
    case 4:
      return Yn(), null;
    case 10:
      return As(t.type._context), null;
    case 22:
    case 23:
      return Ws(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mi = !1,
  de = !1,
  N0 = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function Mu(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var cc = !1;
function j0(e, t) {
  if (((gu = ao), (e = Qf()), xs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            u = -1,
            s = -1,
            a = 0,
            c = 0,
            d = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (u = l + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (s = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (v = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (v === n && ++a === i && (u = l),
                v === o && ++c === r && (s = l),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = v), (v = d.parentNode);
            }
            d = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yu = { focusedElem: e, selectionRange: n }, ao = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var y = _.memoizedProps,
                    S = _.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ve(t.type, y),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (m) {
          Q(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (_ = cc), (cc = !1), _;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Mu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Yo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function zu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Wd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[Wr], delete t[Su], delete t[p0], delete t[h0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = po));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Du(e, t, n), e = e.sibling; e !== null; ) Du(e, t, n), (e = e.sibling);
}
function Iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Iu(e, t, n), e = e.sibling; e !== null; ) Iu(e, t, n), (e = e.sibling);
}
var oe = null,
  be = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; ) Kd(e, t, n), (n = n.sibling);
}
function Kd(e, t, n) {
  if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
      nt.onCommitFiberUnmount(Uo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || Mn(n, t);
    case 6:
      var r = oe,
        i = be;
      (oe = null),
        St(e, t, n),
        (oe = r),
        (be = i),
        oe !== null &&
          (be
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (be
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Nl(e.parentNode, n)
              : e.nodeType === 1 && Nl(e, n),
            $r(e))
          : Nl(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (i = be),
        (oe = n.stateNode.containerInfo),
        (be = !0),
        St(e, t, n),
        (oe = r),
        (be = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Mu(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (
        !de &&
        (Mn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Q(n, t, u);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), St(e, t, n), (de = r))
        : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new N0()),
      t.forEach(function (r) {
        var i = F0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (oe = u.stateNode), (be = !1);
              break e;
            case 3:
              (oe = u.stateNode.containerInfo), (be = !0);
              break e;
            case 4:
              (oe = u.stateNode.containerInfo), (be = !0);
              break e;
          }
          u = u.return;
        }
        if (oe === null) throw Error(w(160));
        Kd(o, l, i), (oe = null), (be = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (a) {
        Q(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gd(t, e), (t = t.sibling);
}
function Gd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ze(e), r & 4)) {
        try {
          Rr(3, e, e.return), Yo(3, e);
        } catch (y) {
          Q(e, e.return, y);
        }
        try {
          Rr(5, e, e.return);
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 1:
      Ue(t, e), Ze(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Ze(e),
        r & 512 && n !== null && Mn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          zr(i, "");
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && vf(i, o),
              uu(u, l);
            var a = uu(u, o);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                d = s[l + 1];
              c === "style"
                ? wf(i, d)
                : c === "dangerouslySetInnerHTML"
                ? yf(i, d)
                : c === "children"
                ? zr(i, d)
                : as(i, c, d, a);
            }
            switch (u) {
              case "input":
                nu(i, o);
                break;
              case "textarea":
                mf(i, o);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? $n(i, !!o.multiple, g, !1)
                  : v !== !!o.multiple &&
                    (o.defaultValue != null
                      ? $n(i, !!o.multiple, o.defaultValue, !0)
                      : $n(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Wr] = o;
          } catch (y) {
            Q(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $r(t.containerInfo);
        } catch (y) {
          Q(e, e.return, y);
        }
      break;
    case 4:
      Ue(t, e), Ze(e);
      break;
    case 13:
      Ue(t, e),
        Ze(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Vs = J())),
        r & 4 && dc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (a = de) || c), Ue(t, e), (de = a)) : Ue(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (d = O = c; O !== null; ) {
              switch (((v = O), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rr(4, v, v.return);
                  break;
                case 1:
                  Mn(v, v.return);
                  var _ = v.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (_.props = t.memoizedProps),
                        (_.state = t.memoizedState),
                        _.componentWillUnmount();
                    } catch (y) {
                      Q(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Mn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    hc(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (O = g)) : hc(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = d.stateNode),
                      (s = d.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = _f("display", l)));
              } catch (y) {
                Q(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (y) {
                Q(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Ze(e), r & 4 && dc(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (zr(i, ""), (r.flags &= -33));
          var o = fc(e);
          Iu(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = fc(e);
          Du(e, u, l);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function L0(e, t, n) {
  (O = e), Qd(e);
}
function Qd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Mi;
      if (!l) {
        var u = i.alternate,
          s = (u !== null && u.memoizedState !== null) || de;
        u = Mi;
        var a = de;
        if (((Mi = l), (de = s) && !a))
          for (O = i; O !== null; )
            (l = O),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? vc(i)
                : s !== null
                ? ((s.return = l), (O = s))
                : vc(i);
        for (; o !== null; ) (O = o), Qd(o), (o = o.sibling);
        (O = i), (Mi = u), (de = a);
      }
      pc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (O = o)) : pc(e);
  }
}
function pc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || Yo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ja(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ja(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && $r(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        de || (t.flags & 512 && zu(t));
      } catch (v) {
        Q(t, t.return, v);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function hc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function vc(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yo(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, i, s);
            }
          }
          var o = t.return;
          try {
            zu(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            zu(t);
          } catch (s) {
            Q(t, l, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      O = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (O = u);
      break;
    }
    O = t.return;
  }
}
var T0 = Math.ceil,
  Oo = wt.ReactCurrentDispatcher,
  Fs = wt.ReactCurrentOwner,
  Ie = wt.ReactCurrentBatchConfig,
  I = 0,
  ie = null,
  Z = null,
  se = 0,
  Ee = 0,
  zn = bt(0),
  ee = 0,
  Xr = null,
  sn = 0,
  Xo = 0,
  Us = 0,
  Nr = null,
  ye = null,
  Vs = 0,
  Jn = 1 / 0,
  ut = null,
  ko = !1,
  Bu = null,
  zt = null,
  zi = !1,
  Pt = null,
  Co = 0,
  jr = 0,
  $u = null,
  Xi = -1,
  Ji = 0;
function ve() {
  return I & 6 ? J() : Xi !== -1 ? Xi : (Xi = J());
}
function Dt(e) {
  return e.mode & 1
    ? I & 2 && se !== 0
      ? se & -se
      : m0.transition !== null
      ? (Ji === 0 && (Ji = Lf()), Ji)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $f(e.type))),
        e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < jr) throw ((jr = 0), ($u = null), Error(w(185)));
  ri(e, n, r),
    (!(I & 2) || e !== ie) &&
      (e === ie && (!(I & 2) && (Xo |= n), ee === 4 && kt(e, se)),
      xe(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Jn = J() + 500), Ko && Wt()));
}
function xe(e, t) {
  var n = e.callbackNode;
  mv(e, t);
  var r = so(e, e === ie ? se : 0);
  if (r === 0)
    n !== null && Oa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Oa(n), t === 1))
      e.tag === 0 ? v0(mc.bind(null, e)) : id(mc.bind(null, e)),
        f0(function () {
          !(I & 6) && Wt();
        }),
        (n = null);
    else {
      switch (Tf(r)) {
        case 1:
          n = hs;
          break;
        case 4:
          n = Nf;
          break;
        case 16:
          n = uo;
          break;
        case 536870912:
          n = jf;
          break;
        default:
          n = uo;
      }
      n = np(n, Yd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yd(e, t) {
  if (((Xi = -1), (Ji = 0), I & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = so(e, e === ie ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Po(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = Jd();
    (ie !== e || se !== t) && ((ut = null), (Jn = J() + 500), tn(e, t));
    do
      try {
        D0();
        break;
      } catch (u) {
        Xd(e, u);
      }
    while (!0);
    Ps(),
      (Oo.current = o),
      (I = i),
      Z !== null ? (t = 0) : ((ie = null), (se = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = du(e)), i !== 0 && ((r = i), (t = Fu(e, i)))), t === 1)
    )
      throw ((n = Xr), tn(e, 0), kt(e, r), xe(e, J()), n);
    if (t === 6) kt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !M0(i) &&
          ((t = Po(e, r)),
          t === 2 && ((o = du(e)), o !== 0 && ((r = o), (t = Fu(e, o)))),
          t === 1))
      )
        throw ((n = Xr), tn(e, 0), kt(e, r), xe(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Jt(e, ye, ut);
          break;
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = Vs + 500 - J()), 10 < t))
          ) {
            if (so(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = wu(Jt.bind(null, e, ye, ut), t);
            break;
          }
          Jt(e, ye, ut);
          break;
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - He(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * T0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wu(Jt.bind(null, e, ye, ut), r);
            break;
          }
          Jt(e, ye, ut);
          break;
        case 5:
          Jt(e, ye, ut);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return xe(e, J()), e.callbackNode === n ? Yd.bind(null, e) : null;
}
function Fu(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256),
    (e = Po(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && Uu(t)),
    e
  );
}
function Uu(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function M0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ye(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function kt(e, t) {
  for (
    t &= ~Us,
      t &= ~Xo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - He(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function mc(e) {
  if (I & 6) throw Error(w(327));
  Wn();
  var t = so(e, 0);
  if (!(t & 1)) return xe(e, J()), null;
  var n = Po(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = du(e);
    r !== 0 && ((t = r), (n = Fu(e, r)));
  }
  if (n === 1) throw ((n = Xr), tn(e, 0), kt(e, t), xe(e, J()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, ye, ut),
    xe(e, J()),
    null
  );
}
function bs(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Jn = J() + 500), Ko && Wt());
  }
}
function an(e) {
  Pt !== null && Pt.tag === 0 && !(I & 6) && Wn();
  var t = I;
  I |= 1;
  var n = Ie.transition,
    r = $;
  try {
    if (((Ie.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (Ie.transition = n), (I = t), !(I & 6) && Wt();
  }
}
function Ws() {
  (Ee = zn.current), b(zn);
}
function tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), c0(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((Os(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ho();
          break;
        case 3:
          Yn(), b(we), b(pe), Ts();
          break;
        case 5:
          Ls(r);
          break;
        case 4:
          Yn();
          break;
        case 13:
          b(H);
          break;
        case 19:
          b(H);
          break;
        case 10:
          As(r.type._context);
          break;
        case 22:
        case 23:
          Ws();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (Z = e = It(e.current, null)),
    (se = Ee = t),
    (ee = 0),
    (Xr = null),
    (Us = Xo = sn = 0),
    (ye = Nr = null),
    qt !== null)
  ) {
    for (t = 0; t < qt.length; t++)
      if (((n = qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    qt = null;
  }
  return e;
}
function Xd(e, t) {
  do {
    var n = Z;
    try {
      if ((Ps(), (Gi.current = Eo), xo)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        xo = !1;
      }
      if (
        ((un = 0),
        (re = q = K = null),
        (Ar = !1),
        (Gr = 0),
        (Fs.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (Xr = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          u = n,
          s = t;
        if (
          ((t = se),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            c = u,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var v = c.alternate;
            v
              ? ((c.updateQueue = v.updateQueue),
                (c.memoizedState = v.memoizedState),
                (c.lanes = v.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = rc(l);
          if (g !== null) {
            (g.flags &= -257),
              ic(g, l, u, o, t),
              g.mode & 1 && nc(o, a, t),
              (t = g),
              (s = a);
            var _ = t.updateQueue;
            if (_ === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else _.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              nc(o, a, t), Hs();
              break e;
            }
            s = Error(w(426));
          }
        } else if (W && u.mode & 1) {
          var S = rc(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              ic(S, l, u, o, t),
              ks(Xn(s, u));
            break e;
          }
        }
        (o = s = Xn(s, u)),
          ee !== 4 && (ee = 2),
          Nr === null ? (Nr = [o]) : Nr.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = Td(o, s, t);
              Xa(o, p);
              break e;
            case 1:
              u = s;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (zt === null || !zt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var m = Md(o, u, t);
                Xa(o, m);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qd(n);
    } catch (E) {
      (t = E), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Jd() {
  var e = Oo.current;
  return (Oo.current = Eo), e === null ? Eo : e;
}
function Hs() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ie === null || (!(sn & 268435455) && !(Xo & 268435455)) || kt(ie, se);
}
function Po(e, t) {
  var n = I;
  I |= 2;
  var r = Jd();
  (ie !== e || se !== t) && ((ut = null), tn(e, t));
  do
    try {
      z0();
      break;
    } catch (i) {
      Xd(e, i);
    }
  while (!0);
  if ((Ps(), (I = n), (Oo.current = r), Z !== null)) throw Error(w(261));
  return (ie = null), (se = 0), ee;
}
function z0() {
  for (; Z !== null; ) Zd(Z);
}
function D0() {
  for (; Z !== null && !uv(); ) Zd(Z);
}
function Zd(e) {
  var t = tp(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? qd(e) : (Z = t),
    (Fs.current = null);
}
function qd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = R0(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (Z = null);
        return;
      }
    } else if (((n = A0(n, t, Ee)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Jt(e, t, n) {
  var r = $,
    i = Ie.transition;
  try {
    (Ie.transition = null), ($ = 1), I0(e, t, n, r);
  } finally {
    (Ie.transition = i), ($ = r);
  }
  return null;
}
function I0(e, t, n, r) {
  do Wn();
  while (Pt !== null);
  if (I & 6) throw Error(w(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (gv(e, o),
    e === ie && ((Z = ie = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zi ||
      ((zi = !0),
      np(uo, function () {
        return Wn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ie.transition), (Ie.transition = null);
    var l = $;
    $ = 1;
    var u = I;
    (I |= 4),
      (Fs.current = null),
      j0(e, n),
      Gd(n, e),
      r0(yu),
      (ao = !!gu),
      (yu = gu = null),
      (e.current = n),
      L0(n),
      sv(),
      (I = u),
      ($ = l),
      (Ie.transition = o);
  } else e.current = n;
  if (
    (zi && ((zi = !1), (Pt = e), (Co = i)),
    (o = e.pendingLanes),
    o === 0 && (zt = null),
    fv(n.stateNode),
    xe(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ko) throw ((ko = !1), (e = Bu), (Bu = null), e);
  return (
    Co & 1 && e.tag !== 0 && Wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === $u ? jr++ : ((jr = 0), ($u = e))) : (jr = 0),
    Wt(),
    null
  );
}
function Wn() {
  if (Pt !== null) {
    var e = Tf(Co),
      t = Ie.transition,
      n = $;
    try {
      if (((Ie.transition = null), ($ = 16 > e ? 16 : e), Pt === null))
        var r = !1;
      else {
        if (((e = Pt), (Pt = null), (Co = 0), I & 6)) throw Error(w(331));
        var i = I;
        for (I |= 4, O = e.current; O !== null; ) {
          var o = O,
            l = o.child;
          if (O.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (O = a; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (O = d);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var v = c.sibling,
                        g = c.return;
                      if ((Wd(c), c === a)) {
                        O = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (O = v);
                        break;
                      }
                      O = g;
                    }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var y = _.child;
                if (y !== null) {
                  _.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (O = l);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (O = p);
                break e;
              }
              O = o.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          l = O;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (O = h);
          else
            e: for (l = f; O !== null; ) {
              if (((u = O), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(9, u);
                  }
                } catch (E) {
                  Q(u, u.return, E);
                }
              if (u === l) {
                O = null;
                break e;
              }
              var m = u.sibling;
              if (m !== null) {
                (m.return = u.return), (O = m);
                break e;
              }
              O = u.return;
            }
        }
        if (
          ((I = i), Wt(), nt && typeof nt.onPostCommitFiberRoot == "function")
        )
          try {
            nt.onPostCommitFiberRoot(Uo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (Ie.transition = t);
    }
  }
  return !1;
}
function gc(e, t, n) {
  (t = Xn(n, t)),
    (t = Td(e, t, 1)),
    (e = Mt(e, t, 1)),
    (t = ve()),
    e !== null && (ri(e, 1, t), xe(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) gc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zt === null || !zt.has(r)))
        ) {
          (e = Xn(n, e)),
            (e = Md(t, e, 1)),
            (t = Mt(t, e, 1)),
            (e = ve()),
            t !== null && (ri(t, 1, e), xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function B0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (se & n) === n &&
      (ee === 4 || (ee === 3 && (se & 130023424) === se && 500 > J() - Vs)
        ? tn(e, 0)
        : (Us |= n)),
    xe(e, t);
}
function ep(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ki), (ki <<= 1), !(ki & 130023424) && (ki = 4194304))
      : (t = 1));
  var n = ve();
  (e = gt(e, t)), e !== null && (ri(e, t, n), xe(e, n));
}
function $0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ep(e, n);
}
function F0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), ep(e, n);
}
var tp;
tp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (_e = !1), P0(e, t, n);
      _e = !!(e.flags & 131072);
    }
  else (_e = !1), W && t.flags & 1048576 && od(t, go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yi(e, t), (e = t.pendingProps);
      var i = Kn(t, pe.current);
      bn(t, n), (i = zs(null, t, r, e, i, n));
      var o = Ds();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((o = !0), vo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ns(t),
            (i.updater = Qo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Pu(t, r, e, n),
            (t = Nu(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && Es(t), he(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = V0(r)),
          (e = Ve(r, e)),
          i)
        ) {
          case 0:
            t = Ru(null, t, r, e, n);
            break e;
          case 1:
            t = uc(null, t, r, e, n);
            break e;
          case 11:
            t = oc(null, t, r, e, n);
            break e;
          case 14:
            t = lc(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        Ru(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        uc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Bd(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          fd(e, t),
          wo(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Xn(Error(w(423)), t)), (t = sc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Xn(Error(w(424)), t)), (t = sc(e, t, r, n, i));
            break e;
          } else
            for (
              Oe = Tt(t.stateNode.containerInfo.firstChild),
                ke = t,
                W = !0,
                We = null,
                n = ad(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gn(), r === i)) {
            t = yt(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dd(t),
        e === null && Ou(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        _u(r, i) ? (l = null) : o !== null && _u(r, o) && (t.flags |= 32),
        Id(e, t),
        he(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ou(t), null;
    case 13:
      return $d(e, t, n);
    case 4:
      return (
        js(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qn(t, null, r, n)) : he(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        oc(e, t, r, i, n)
      );
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          F(yo, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Ye(o.value, l)) {
            if (o.children === i.children && !we.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                l = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = dt(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      ku(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(w(341));
                (l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  ku(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        he(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        bn(t, n),
        (i = Be(i)),
        (r = r(i)),
        (t.flags |= 1),
        he(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ve(r, t.pendingProps)),
        (i = Ve(r.type, i)),
        lc(e, t, r, i, n)
      );
    case 15:
      return zd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        Yi(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), vo(t)) : (e = !1),
        bn(t, n),
        Ld(t, r, i),
        Pu(t, r, i, n),
        Nu(null, t, r, !0, e, n)
      );
    case 19:
      return Fd(e, t, n);
    case 22:
      return Dd(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function np(e, t) {
  return Rf(e, t);
}
function U0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Me(e, t, n, r) {
  return new U0(e, t, n, r);
}
function Ks(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function V0(e) {
  if (typeof e == "function") return Ks(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fs)) return 11;
    if (e === ds) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Me(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zi(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ks(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case kn:
        return nn(n.children, i, o, t);
      case cs:
        (l = 8), (i |= 8);
        break;
      case Jl:
        return (
          (e = Me(12, n, t, i | 2)), (e.elementType = Jl), (e.lanes = o), e
        );
      case Zl:
        return (e = Me(13, n, t, i)), (e.elementType = Zl), (e.lanes = o), e;
      case ql:
        return (e = Me(19, n, t, i)), (e.elementType = ql), (e.lanes = o), e;
      case df:
        return Jo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cf:
              l = 10;
              break e;
            case ff:
              l = 9;
              break e;
            case fs:
              l = 11;
              break e;
            case ds:
              l = 14;
              break e;
            case xt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Me(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function nn(e, t, n, r) {
  return (e = Me(7, e, r, t)), (e.lanes = n), e;
}
function Jo(e, t, n, r) {
  return (
    (e = Me(22, e, r, t)),
    (e.elementType = df),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bl(e, t, n) {
  return (e = Me(6, e, null, t)), (e.lanes = n), e;
}
function $l(e, t, n) {
  return (
    (t = Me(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function b0(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Gs(e, t, n, r, i, o, l, u, s) {
  return (
    (e = new b0(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Me(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ns(o),
    e
  );
}
function W0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rp(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return rd(e, n, t);
  }
  return t;
}
function ip(e, t, n, r, i, o, l, u, s) {
  return (
    (e = Gs(n, r, !0, e, i, o, l, u, s)),
    (e.context = rp(null)),
    (n = e.current),
    (r = ve()),
    (i = Dt(n)),
    (o = dt(r, i)),
    (o.callback = t ?? null),
    Mt(n, o, i),
    (e.current.lanes = i),
    ri(e, i, r),
    xe(e, r),
    e
  );
}
function Zo(e, t, n, r) {
  var i = t.current,
    o = ve(),
    l = Dt(i);
  return (
    (n = rp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mt(i, t, l)),
    e !== null && (Ke(e, i, l, o), Ki(e, i, l)),
    l
  );
}
function Ao(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qs(e, t) {
  yc(e, t), (e = e.alternate) && yc(e, t);
}
function H0() {
  return null;
}
var op =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ys(e) {
  this._internalRoot = e;
}
qo.prototype.render = Ys.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Zo(e, t, null, null);
};
qo.prototype.unmount = Ys.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function () {
      Zo(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function qo(e) {
  this._internalRoot = e;
}
qo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Df();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
    Ot.splice(n, 0, e), n === 0 && Bf(e);
  }
};
function Xs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function el(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _c() {}
function K0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Ao(l);
        o.call(a);
      };
    }
    var l = ip(t, r, e, 0, null, !1, !1, "", _c);
    return (
      (e._reactRootContainer = l),
      (e[mt] = l.current),
      Vr(e.nodeType === 8 ? e.parentNode : e),
      an(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Ao(s);
      u.call(a);
    };
  }
  var s = Gs(e, 0, !1, null, null, !1, !1, "", _c);
  return (
    (e._reactRootContainer = s),
    (e[mt] = s.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    an(function () {
      Zo(t, s, n, r);
    }),
    s
  );
}
function tl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var s = Ao(l);
        u.call(s);
      };
    }
    Zo(t, l, e, i);
  } else l = K0(n, t, e, i, r);
  return Ao(l);
}
Mf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 &&
          (vs(t, n | 1), xe(t, J()), !(I & 6) && ((Jn = J() + 500), Wt()));
      }
      break;
    case 13:
      an(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = ve();
          Ke(r, e, 1, i);
        }
      }),
        Qs(e, 1);
  }
};
ms = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = ve();
      Ke(t, e, 134217728, n);
    }
    Qs(e, 134217728);
  }
};
zf = function (e) {
  if (e.tag === 13) {
    var t = Dt(e),
      n = gt(e, t);
    if (n !== null) {
      var r = ve();
      Ke(n, e, t, r);
    }
    Qs(e, t);
  }
};
Df = function () {
  return $;
};
If = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
au = function (e, t, n) {
  switch (t) {
    case "input":
      if ((nu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ho(r);
            if (!i) throw Error(w(90));
            hf(r), nu(r, i);
          }
        }
      }
      break;
    case "textarea":
      mf(e, n);
      break;
    case "select":
      (t = n.value), t != null && $n(e, !!n.multiple, t, !1);
  }
};
Ef = bs;
Of = an;
var G0 = { usingClientEntryPoint: !1, Events: [oi, Rn, Ho, Sf, xf, bs] },
  gr = {
    findFiberByHostInstance: Zt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Q0 = {
    bundleType: gr.bundleType,
    version: gr.version,
    rendererPackageName: gr.rendererPackageName,
    rendererConfig: gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Pf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gr.findFiberByHostInstance || H0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Di.isDisabled && Di.supportsFiber)
    try {
      (Uo = Di.inject(Q0)), (nt = Di);
    } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G0;
Pe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xs(t)) throw Error(w(200));
  return W0(e, t, null, n);
};
Pe.createRoot = function (e, t) {
  if (!Xs(e)) throw Error(w(299));
  var n = !1,
    r = "",
    i = op;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Gs(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    new Ys(t)
  );
};
Pe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = Pf(t)), (e = e === null ? null : e.stateNode), e;
};
Pe.flushSync = function (e) {
  return an(e);
};
Pe.hydrate = function (e, t, n) {
  if (!el(t)) throw Error(w(200));
  return tl(null, e, t, !0, n);
};
Pe.hydrateRoot = function (e, t, n) {
  if (!Xs(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = op;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = ip(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[mt] = t.current),
    Vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new qo(t);
};
Pe.render = function (e, t, n) {
  if (!el(t)) throw Error(w(200));
  return tl(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function (e) {
  if (!el(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (an(function () {
        tl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
Pe.unstable_batchedUpdates = bs;
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!el(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return tl(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function lp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lp);
    } catch (e) {
      console.error(e);
    }
}
lp(), (lf.exports = Pe);
var up = lf.exports,
  wc = up;
(Yl.createRoot = wc.createRoot), (Yl.hydrateRoot = wc.hydrateRoot);
function Y0() {
  return R.jsx("main", {
    children: R.jsx("h1", { children: "Такой страницы нет :(" }),
  });
}
const X0 = "_main_1hsg5_1",
  J0 = "_button_exit_1hsg5_19",
  Sc = { main: X0, button_exit: J0 };
function D(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
        e +
        (n.length ? " " + n.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e
  );
}
var Z0 = {};
function Js() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : Z0;
}
var sp = Object.assign,
  Ro = Object.getOwnPropertyDescriptor,
  it = Object.defineProperty,
  ui = Object.prototype,
  Vu = [];
Object.freeze(Vu);
var ap = {};
Object.freeze(ap);
var q0 = typeof Proxy < "u",
  em = Object.toString();
function cp() {
  q0 || D("Proxy not available");
}
function fp(e) {
  var t = !1;
  return function () {
    if (!t) return (t = !0), e.apply(this, arguments);
  };
}
var Dn = function () {};
function Xe(e) {
  return typeof e == "function";
}
function cn(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function nl(e) {
  return e !== null && typeof e == "object";
}
function _t(e) {
  if (!nl(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n.toString() === em;
}
function dp(e) {
  var t = e == null ? void 0 : e.constructor;
  return t
    ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction"
    : !1;
}
function si(e, t, n) {
  it(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function pp(e, t, n) {
  it(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function Ht(e, t) {
  var n = "isMobX" + e;
  return (
    (t.prototype[n] = !0),
    function (r) {
      return nl(r) && r[n] === !0;
    }
  );
}
function or(e) {
  return e instanceof Map;
}
function ai(e) {
  return e instanceof Set;
}
var hp = typeof Object.getOwnPropertySymbols < "u";
function tm(e) {
  var t = Object.keys(e);
  if (!hp) return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length
    ? [].concat(
        t,
        n.filter(function (r) {
          return ui.propertyIsEnumerable.call(e, r);
        })
      )
    : t;
}
var Zn =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : hp
    ? function (e) {
        return Object.getOwnPropertyNames(e).concat(
          Object.getOwnPropertySymbols(e)
        );
      }
    : Object.getOwnPropertyNames;
function vp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function pt(e, t) {
  return ui.hasOwnProperty.call(e, t);
}
var nm =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var n = {};
    return (
      Zn(t).forEach(function (r) {
        n[r] = Ro(t, r);
      }),
      n
    );
  };
function rm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, lm(r.key), r);
  }
}
function Zs(e, t, n) {
  return (
    t && rm(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function fn() {
  return (
    (fn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fn.apply(this, arguments)
  );
}
function mp(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    bu(e, t);
}
function bu(e, t) {
  return (
    (bu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    bu(e, t)
  );
}
function Fl(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function im(e, t) {
  if (e) {
    if (typeof e == "string") return xc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return xc(e, t);
  }
}
function xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function In(e, t) {
  var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = im(e)) || t) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function om(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function lm(e) {
  var t = om(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var tt = Symbol("mobx-stored-annotations");
function ot(e) {
  function t(n, r) {
    if (ci(r)) return e.decorate_20223_(n, r);
    lr(n, r, e);
  }
  return Object.assign(t, e);
}
function lr(e, t, n) {
  pt(e, tt) || si(e, tt, fn({}, e[tt])), vm(n) || (e[tt][t] = n);
}
function um(e) {
  return pt(e, tt) || si(e, tt, fn({}, e[tt])), e[tt];
}
function ci(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var j = Symbol("mobx administration"),
  fi = (function () {
    function e(n) {
      n === void 0 && (n = "Atom"),
        (this.name_ = void 0),
        (this.isPendingUnobservation_ = !1),
        (this.isBeingObserved_ = !1),
        (this.observers_ = new Set()),
        (this.diffValue_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = B.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = n);
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.reportObserved = function () {
        return Mp(this);
      }),
      (t.reportChanged = function () {
        ze(), zp(this), De();
      }),
      (t.toString = function () {
        return this.name_;
      }),
      e
    );
  })(),
  qs = Ht("Atom", fi);
function gp(e, t, n) {
  t === void 0 && (t = Dn), n === void 0 && (n = Dn);
  var r = new fi(e);
  return t !== Dn && wg(r, t), n !== Dn && Fp(r, n), r;
}
function sm(e, t) {
  return e === t;
}
function am(e, t) {
  return ua(e, t);
}
function cm(e, t) {
  return ua(e, t, 1);
}
function fm(e, t) {
  return Object.is
    ? Object.is(e, t)
    : e === t
    ? e !== 0 || 1 / e === 1 / t
    : e !== e && t !== t;
}
var No = { identity: sm, structural: am, default: fm, shallow: cm };
function dn(e, t, n) {
  return ia(e)
    ? e
    : Array.isArray(e)
    ? le.array(e, { name: n })
    : _t(e)
    ? le.object(e, void 0, { name: n })
    : or(e)
    ? le.map(e, { name: n })
    : ai(e)
    ? le.set(e, { name: n })
    : typeof e == "function" && !ll(e) && !Zr(e)
    ? dp(e)
      ? er(e)
      : Jr(n, e)
    : e;
}
function dm(e, t, n) {
  if (e == null || gi(e) || mi(e) || Kt(e) || gn(e)) return e;
  if (Array.isArray(e)) return le.array(e, { name: n, deep: !1 });
  if (_t(e)) return le.object(e, void 0, { name: n, deep: !1 });
  if (or(e)) return le.map(e, { name: n, deep: !1 });
  if (ai(e)) return le.set(e, { name: n, deep: !1 });
}
function rl(e) {
  return e;
}
function pm(e, t) {
  return ua(e, t) ? t : e;
}
var hm = "override";
function vm(e) {
  return e.annotationType_ === hm;
}
function di(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: mm,
    extend_: gm,
    decorate_20223_: ym,
  };
}
function mm(e, t, n, r) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, n, !1) === null ? 0 : 1;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (ll(n.value)) return 1;
  var o = yp(e, this, t, n, !1);
  return it(r, t, o), 2;
}
function gm(e, t, n, r) {
  var i = yp(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function ym(e, t) {
  var n = t.kind,
    r = t.name,
    i = t.addInitializer,
    o = this,
    l = function (a) {
      var c, d, v, g;
      return pn(
        (c = (d = o.options_) == null ? void 0 : d.name) != null
          ? c
          : r.toString(),
        a,
        (v = (g = o.options_) == null ? void 0 : g.autoAction) != null ? v : !1
      );
    };
  if (n == "field") {
    i(function () {
      lr(this, r, o);
    });
    return;
  }
  if (n == "method") {
    var u;
    return (
      ll(e) || (e = l(e)),
      (u = this.options_) != null &&
        u.bound &&
        i(function () {
          var s = this,
            a = s[r].bind(s);
          (a.isMobxAction = !0), (s[r] = a);
        }),
      e
    );
  }
  D(
    "Cannot apply '" +
      o.annotationType_ +
      "' to '" +
      String(r) +
      "' (kind: " +
      n +
      "):" +
      (`
'` +
        o.annotationType_ +
        "' can only be used on properties with a function value.")
  );
}
function _m(e, t, n, r) {
  t.annotationType_, r.value;
}
function yp(e, t, n, r, i) {
  var o, l, u, s, a, c, d;
  i === void 0 && (i = x.safeDescriptors), _m(e, t, n, r);
  var v = r.value;
  if ((o = t.options_) != null && o.bound) {
    var g;
    v = v.bind((g = e.proxy_) != null ? g : e.target_);
  }
  return {
    value: pn(
      (l = (u = t.options_) == null ? void 0 : u.name) != null
        ? l
        : n.toString(),
      v,
      (s = (a = t.options_) == null ? void 0 : a.autoAction) != null ? s : !1,
      (c = t.options_) != null && c.bound
        ? (d = e.proxy_) != null
          ? d
          : e.target_
        : void 0
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function _p(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: wm,
    extend_: Sm,
    decorate_20223_: xm,
  };
}
function wm(e, t, n, r) {
  var i;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!pt(e.target_, t) || !Zr(e.target_[t])) &&
    this.extend_(e, t, n, !1) === null
  )
    return 0;
  if (Zr(n.value)) return 1;
  var o = wp(e, this, t, n, !1, !1);
  return it(r, t, o), 2;
}
function Sm(e, t, n, r) {
  var i,
    o = wp(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, r);
}
function xm(e, t) {
  var n,
    r = t.name,
    i = t.addInitializer;
  return (
    Zr(e) || (e = er(e)),
    (n = this.options_) != null &&
      n.bound &&
      i(function () {
        var o = this,
          l = o[r].bind(o);
        (l.isMobXFlow = !0), (o[r] = l);
      }),
    e
  );
}
function Em(e, t, n, r) {
  t.annotationType_, r.value;
}
function wp(e, t, n, r, i, o) {
  o === void 0 && (o = x.safeDescriptors), Em(e, t, n, r);
  var l = r.value;
  if ((Zr(l) || (l = er(l)), i)) {
    var u;
    (l = l.bind((u = e.proxy_) != null ? u : e.target_)), (l.isMobXFlow = !0);
  }
  return {
    value: l,
    configurable: o ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !o,
  };
}
function ea(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Om,
    extend_: km,
    decorate_20223_: Cm,
  };
}
function Om(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function km(e, t, n, r) {
  return (
    Pm(e, this, t, n),
    e.defineComputedProperty_(
      t,
      fn({}, this.options_, { get: n.get, set: n.set }),
      r
    )
  );
}
function Cm(e, t) {
  var n = this,
    r = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var o = yn(this)[j],
        l = fn({}, n.options_, { get: e, context: this });
      l.name || (l.name = "ObservableObject." + r.toString()),
        o.values_.set(r, new qn(l));
    }),
    function () {
      return this[j].getObservablePropValue_(r);
    }
  );
}
function Pm(e, t, n, r) {
  t.annotationType_, r.get;
}
function il(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Am,
    extend_: Rm,
    decorate_20223_: Nm,
  };
}
function Am(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function Rm(e, t, n, r) {
  var i, o;
  return (
    jm(e, this),
    e.defineObservableProperty_(
      t,
      n.value,
      (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : dn,
      r
    )
  );
}
function Nm(e, t) {
  var n = this,
    r = t.kind,
    i = t.name,
    o = new WeakSet();
  function l(u, s) {
    var a,
      c,
      d = yn(u)[j],
      v = new Bt(
        s,
        (a = (c = n.options_) == null ? void 0 : c.enhancer) != null ? a : dn,
        "ObservableObject." + i.toString(),
        !1
      );
    d.values_.set(i, v), o.add(u);
  }
  if (r == "accessor")
    return {
      get: function () {
        return (
          o.has(this) || l(this, e.get.call(this)),
          this[j].getObservablePropValue_(i)
        );
      },
      set: function (s) {
        return o.has(this) || l(this, s), this[j].setObservablePropValue_(i, s);
      },
      init: function (s) {
        return o.has(this) || l(this, s), s;
      },
    };
}
function jm(e, t, n, r) {
  t.annotationType_;
}
var Lm = "true",
  Tm = Sp();
function Sp(e) {
  return {
    annotationType_: Lm,
    options_: e,
    make_: Mm,
    extend_: zm,
    decorate_20223_: Dm,
  };
}
function Mm(e, t, n, r) {
  var i, o;
  if (n.get) return ol.make_(e, t, n, r);
  if (n.set) {
    var l = pn(t.toString(), n.set);
    return r === e.target_
      ? e.defineProperty_(t, {
          configurable: x.safeDescriptors ? e.isPlainObject_ : !0,
          set: l,
        }) === null
        ? 0
        : 2
      : (it(r, t, { configurable: !0, set: l }), 2);
  }
  if (r !== e.target_ && typeof n.value == "function") {
    var u;
    if (dp(n.value)) {
      var s,
        a = (s = this.options_) != null && s.autoBind ? er.bound : er;
      return a.make_(e, t, n, r);
    }
    var c = (u = this.options_) != null && u.autoBind ? Jr.bound : Jr;
    return c.make_(e, t, n, r);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? le.ref : le;
  if (
    typeof n.value == "function" &&
    (o = this.options_) != null &&
    o.autoBind
  ) {
    var v;
    n.value = n.value.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return d.make_(e, t, n, r);
}
function zm(e, t, n, r) {
  var i, o;
  if (n.get) return ol.extend_(e, t, n, r);
  if (n.set)
    return e.defineProperty_(
      t,
      {
        configurable: x.safeDescriptors ? e.isPlainObject_ : !0,
        set: pn(t.toString(), n.set),
      },
      r
    );
  if (
    typeof n.value == "function" &&
    (i = this.options_) != null &&
    i.autoBind
  ) {
    var l;
    n.value = n.value.bind((l = e.proxy_) != null ? l : e.target_);
  }
  var u = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? le.ref : le;
  return u.extend_(e, t, n, r);
}
function Dm(e, t) {
  D("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Im = "observable",
  Bm = "observable.ref",
  $m = "observable.shallow",
  Fm = "observable.struct",
  xp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(xp);
function Ii(e) {
  return e || xp;
}
var Wu = il(Im),
  Um = il(Bm, { enhancer: rl }),
  Vm = il($m, { enhancer: dm }),
  bm = il(Fm, { enhancer: pm }),
  Ep = ot(Wu);
function Bi(e) {
  return e.deep === !0 ? dn : e.deep === !1 ? rl : Hm(e.defaultDecorator);
}
function Wm(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Sp(e)) : void 0;
}
function Hm(e) {
  var t, n;
  return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null
    ? t
    : dn;
}
function Op(e, t, n) {
  if (ci(t)) return Wu.decorate_20223_(e, t);
  if (cn(t)) {
    lr(e, t, Wu);
    return;
  }
  return ia(e)
    ? e
    : _t(e)
    ? le.object(e, t, n)
    : Array.isArray(e)
    ? le.array(e, t)
    : or(e)
    ? le.map(e, t)
    : ai(e)
    ? le.set(e, t)
    : typeof e == "object" && e !== null
    ? e
    : le.box(e, t);
}
sp(Op, Ep);
var Km = {
    box: function (t, n) {
      var r = Ii(n);
      return new Bt(t, Bi(r), r.name, !0, r.equals);
    },
    array: function (t, n) {
      var r = Ii(n);
      return (x.useProxies === !1 || r.proxy === !1 ? Kg : Dg)(
        t,
        Bi(r),
        r.name
      );
    },
    map: function (t, n) {
      var r = Ii(n);
      return new Qp(t, Bi(r), r.name);
    },
    set: function (t, n) {
      var r = Ii(n);
      return new Jp(t, Bi(r), r.name);
    },
    object: function (t, n, r) {
      return Gt(function () {
        return Vp(
          x.useProxies === !1 || (r == null ? void 0 : r.proxy) === !1
            ? yn({}, r)
            : jg({}, r),
          t,
          n
        );
      });
    },
    ref: ot(Um),
    shallow: ot(Vm),
    deep: Ep,
    struct: ot(bm),
  },
  le = sp(Op, Km),
  kp = "computed",
  Gm = "computed.struct",
  Hu = ea(kp),
  Qm = ea(Gm, { equals: No.structural }),
  ol = function (t, n) {
    if (ci(n)) return Hu.decorate_20223_(t, n);
    if (cn(n)) return lr(t, n, Hu);
    if (_t(t)) return ot(ea(kp, t));
    var r = _t(n) ? n : {};
    return (r.get = t), r.name || (r.name = t.name || ""), new qn(r);
  };
Object.assign(ol, Hu);
ol.struct = ot(Qm);
var Ec,
  Oc,
  jo = 0,
  Ym = 1,
  Xm =
    (Ec =
      (Oc = Ro(function () {}, "name")) == null ? void 0 : Oc.configurable) !=
    null
      ? Ec
      : !1,
  kc = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function pn(e, t, n, r) {
  n === void 0 && (n = !1);
  function i() {
    return Jm(e, n, t, r || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    Xm && ((kc.value = e), it(i, "name", kc)),
    i
  );
}
function Jm(e, t, n, r, i) {
  var o = Zm(e, t);
  try {
    return n.apply(r, i);
  } catch (l) {
    throw ((o.error_ = l), l);
  } finally {
    qm(o);
  }
}
function Zm(e, t, n, r) {
  var i = !1,
    o = 0,
    l = x.trackingDerivation,
    u = !t || !l;
  ze();
  var s = x.allowStateChanges;
  u && (mn(), (s = ta(!0)));
  var a = ra(!0),
    c = {
      runAsAction_: u,
      prevDerivation_: l,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: a,
      notifySpy_: i,
      startTime_: o,
      actionId_: Ym++,
      parentActionId_: jo,
    };
  return (jo = c.actionId_), c;
}
function qm(e) {
  jo !== e.actionId_ && D(30),
    (jo = e.parentActionId_),
    e.error_ !== void 0 && (x.suppressReactionErrors = !0),
    na(e.prevAllowStateChanges_),
    Lr(e.prevAllowStateReads_),
    De(),
    e.runAsAction_ && ht(e.prevDerivation_),
    (x.suppressReactionErrors = !1);
}
function ta(e) {
  var t = x.allowStateChanges;
  return (x.allowStateChanges = e), t;
}
function na(e) {
  x.allowStateChanges = e;
}
var Cp;
Cp = Symbol.toPrimitive;
var Bt = (function (e) {
    mp(t, e);
    function t(r, i, o, l, u) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        u === void 0 && (u = No.default),
        (s = e.call(this, o) || this),
        (s.enhancer = void 0),
        (s.name_ = void 0),
        (s.equals = void 0),
        (s.hasUnreportedChange_ = !1),
        (s.interceptors_ = void 0),
        (s.changeListeners_ = void 0),
        (s.value_ = void 0),
        (s.dehancer = void 0),
        (s.enhancer = i),
        (s.name_ = o),
        (s.equals = u),
        (s.value_ = i(r, void 0, o)),
        s
      );
    }
    var n = t.prototype;
    return (
      (n.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (n.set = function (i) {
        this.value_,
          (i = this.prepareNewValue_(i)),
          i !== x.UNCHANGED && this.setNewValue_(i);
      }),
      (n.prepareNewValue_ = function (i) {
        if (Le(this)) {
          var o = Te(this, { object: this, type: lt, newValue: i });
          if (!o) return x.UNCHANGED;
          i = o.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? x.UNCHANGED : i
        );
      }),
      (n.setNewValue_ = function (i) {
        var o = this.value_;
        (this.value_ = i),
          this.reportChanged(),
          Ge(this) &&
            Qe(this, { type: lt, object: this, newValue: i, oldValue: o });
      }),
      (n.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
      }),
      (n.intercept_ = function (i) {
        return hi(this, i);
      }),
      (n.observe_ = function (i, o) {
        return (
          o &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: lt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          vi(this, i)
        );
      }),
      (n.raw = function () {
        return this.value_;
      }),
      (n.toJSON = function () {
        return this.get();
      }),
      (n.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (n.valueOf = function () {
        return vp(this.get());
      }),
      (n[Cp] = function () {
        return this.valueOf();
      }),
      t
    );
  })(fi),
  eg = Ht("ObservableValue", Bt),
  Pp;
Pp = Symbol.toPrimitive;
var qn = (function () {
    function e(n) {
      (this.dependenciesState_ = B.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.isBeingObserved_ = !1),
        (this.isPendingUnobservation_ = !1),
        (this.observers_ = new Set()),
        (this.diffValue_ = 0),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = B.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new To(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.isComputing_ = !1),
        (this.isRunningSetter_ = !1),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Lo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        n.get || D(31),
        (this.derivation = n.get),
        (this.name_ = n.name || "ComputedValue"),
        n.set && (this.setter_ = pn("ComputedValue-setter", n.set)),
        (this.equals_ =
          n.equals ||
          (n.compareStructural || n.struct ? No.structural : No.default)),
        (this.scope_ = n.context),
        (this.requiresReaction_ = n.requiresReaction),
        (this.keepAlive_ = !!n.keepAlive);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        og(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing_ && D(32, this.name_, this.derivation),
          x.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Ku(this) &&
            (this.warnAboutUntrackedRead_(),
            ze(),
            (this.value_ = this.computeValue_(!1)),
            De());
        else if ((Mp(this), Ku(this))) {
          var r = x.trackingContext;
          this.keepAlive_ && !r && (x.trackingContext = this),
            this.trackAndCompute() && ig(this),
            (x.trackingContext = r);
        }
        var i = this.value_;
        if (qi(i)) throw i.cause;
        return i;
      }),
      (t.set = function (r) {
        if (this.setter_) {
          this.isRunningSetter_ && D(33, this.name_),
            (this.isRunningSetter_ = !0);
          try {
            this.setter_.call(this.scope_, r);
          } finally {
            this.isRunningSetter_ = !1;
          }
        } else D(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var r = this.value_,
          i = this.dependenciesState_ === B.NOT_TRACKING_,
          o = this.computeValue_(!0),
          l = i || qi(r) || qi(o) || !this.equals_(r, o);
        return l && (this.value_ = o), l;
      }),
      (t.computeValue_ = function (r) {
        this.isComputing_ = !0;
        var i = ta(!1),
          o;
        if (r) o = Ap(this, this.derivation, this.scope_);
        else if (x.disableErrorBoundaries === !0)
          o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (l) {
            o = new To(l);
          }
        return na(i), (this.isComputing_ = !1), o;
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Gu(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (r, i) {
        var o = this,
          l = !0,
          u = void 0;
        return vg(function () {
          var s = o.get();
          if (!l || i) {
            var a = mn();
            r({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: lt,
              object: o,
              newValue: s,
              oldValue: u,
            }),
              ht(a);
          }
          (l = !1), (u = s);
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return vp(this.get());
      }),
      (t[Pp] = function () {
        return this.valueOf();
      }),
      e
    );
  })(),
  pi = Ht("ComputedValue", qn),
  B;
(function (e) {
  (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_");
})(B || (B = {}));
var Lo;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"),
    (e[(e.LOG = 1)] = "LOG"),
    (e[(e.BREAK = 2)] = "BREAK");
})(Lo || (Lo = {}));
var To = function (t) {
  (this.cause = void 0), (this.cause = t);
};
function qi(e) {
  return e instanceof To;
}
function Ku(e) {
  switch (e.dependenciesState_) {
    case B.UP_TO_DATE_:
      return !1;
    case B.NOT_TRACKING_:
    case B.STALE_:
      return !0;
    case B.POSSIBLY_STALE_: {
      for (
        var t = ra(!0), n = mn(), r = e.observing_, i = r.length, o = 0;
        o < i;
        o++
      ) {
        var l = r[o];
        if (pi(l)) {
          if (x.disableErrorBoundaries) l.get();
          else
            try {
              l.get();
            } catch {
              return ht(n), Lr(t), !0;
            }
          if (e.dependenciesState_ === B.STALE_) return ht(n), Lr(t), !0;
        }
      }
      return Np(e), ht(n), Lr(t), !1;
    }
  }
}
function Ap(e, t, n) {
  var r = ra(!0);
  Np(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++x.runId);
  var i = x.trackingDerivation;
  (x.trackingDerivation = e), x.inBatch++;
  var o;
  if (x.disableErrorBoundaries === !0) o = t.call(n);
  else
    try {
      o = t.call(n);
    } catch (l) {
      o = new To(l);
    }
  return x.inBatch--, (x.trackingDerivation = i), tg(e), Lr(r), o;
}
function tg(e) {
  for (
    var t = e.observing_,
      n = (e.observing_ = e.newObserving_),
      r = B.UP_TO_DATE_,
      i = 0,
      o = e.unboundDepsCount_,
      l = 0;
    l < o;
    l++
  ) {
    var u = n[l];
    u.diffValue_ === 0 && ((u.diffValue_ = 1), i !== l && (n[i] = u), i++),
      u.dependenciesState_ > r && (r = u.dependenciesState_);
  }
  for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var s = t[o];
    s.diffValue_ === 0 && Lp(s, e), (s.diffValue_ = 0);
  }
  for (; i--; ) {
    var a = n[i];
    a.diffValue_ === 1 && ((a.diffValue_ = 0), rg(a, e));
  }
  r !== B.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function Gu(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; ) Lp(t[n], e);
  e.dependenciesState_ = B.NOT_TRACKING_;
}
function Rp(e) {
  var t = mn();
  try {
    return e();
  } finally {
    ht(t);
  }
}
function mn() {
  var e = x.trackingDerivation;
  return (x.trackingDerivation = null), e;
}
function ht(e) {
  x.trackingDerivation = e;
}
function ra(e) {
  var t = x.allowStateReads;
  return (x.allowStateReads = e), t;
}
function Lr(e) {
  x.allowStateReads = e;
}
function Np(e) {
  if (e.dependenciesState_ !== B.UP_TO_DATE_) {
    e.dependenciesState_ = B.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; )
      t[n].lowestObserverState_ = B.UP_TO_DATE_;
  }
}
var eo = function () {
    (this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0);
  },
  to = !0,
  jp = !1,
  x = (function () {
    var e = Js();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (to = !1),
      e.__mobxGlobals &&
        e.__mobxGlobals.version !== new eo().version &&
        (to = !1),
      to
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new eo()))
        : (setTimeout(function () {
            jp || D(35);
          }, 1),
          new eo())
    );
  })();
function ng() {
  if (
    ((x.pendingReactions.length || x.inBatch || x.isRunningReactions) && D(36),
    (jp = !0),
    to)
  ) {
    var e = Js();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (x = new eo());
  }
}
function rg(e, t) {
  e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_);
}
function Lp(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Tp(e);
}
function Tp(e) {
  e.isPendingUnobservation_ === !1 &&
    ((e.isPendingUnobservation_ = !0), x.pendingUnobservations.push(e));
}
function ze() {
  x.inBatch++;
}
function De() {
  if (--x.inBatch === 0) {
    Dp();
    for (var e = x.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      (n.isPendingUnobservation_ = !1),
        n.observers_.size === 0 &&
          (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
          n instanceof qn && n.suspend_());
    }
    x.pendingUnobservations = [];
  }
}
function Mp(e) {
  var t = x.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved_ &&
          x.trackingContext &&
          ((e.isBeingObserved_ = !0), e.onBO())),
      e.isBeingObserved_)
    : (e.observers_.size === 0 && x.inBatch > 0 && Tp(e), !1);
}
function zp(e) {
  e.lowestObserverState_ !== B.STALE_ &&
    ((e.lowestObserverState_ = B.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === B.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = B.STALE_);
    }));
}
function ig(e) {
  e.lowestObserverState_ !== B.STALE_ &&
    ((e.lowestObserverState_ = B.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === B.POSSIBLY_STALE_
        ? (t.dependenciesState_ = B.STALE_)
        : t.dependenciesState_ === B.UP_TO_DATE_ &&
          (e.lowestObserverState_ = B.UP_TO_DATE_);
    }));
}
function og(e) {
  e.lowestObserverState_ === B.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = B.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === B.UP_TO_DATE_ &&
        ((t.dependenciesState_ = B.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Mo = (function () {
    function e(n, r, i, o) {
      n === void 0 && (n = "Reaction"),
        (this.name_ = void 0),
        (this.onInvalidate_ = void 0),
        (this.errorHandler_ = void 0),
        (this.requiresObservable_ = void 0),
        (this.observing_ = []),
        (this.newObserving_ = []),
        (this.dependenciesState_ = B.NOT_TRACKING_),
        (this.diffValue_ = 0),
        (this.runId_ = 0),
        (this.unboundDepsCount_ = 0),
        (this.isDisposed_ = !1),
        (this.isScheduled_ = !1),
        (this.isTrackPending_ = !1),
        (this.isRunning_ = !1),
        (this.isTracing_ = Lo.NONE),
        (this.name_ = n),
        (this.onInvalidate_ = r),
        (this.errorHandler_ = i),
        (this.requiresObservable_ = o);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        this.schedule_();
      }),
      (t.schedule_ = function () {
        this.isScheduled_ ||
          ((this.isScheduled_ = !0), x.pendingReactions.push(this), Dp());
      }),
      (t.isScheduled = function () {
        return this.isScheduled_;
      }),
      (t.runReaction_ = function () {
        if (!this.isDisposed_) {
          ze(), (this.isScheduled_ = !1);
          var r = x.trackingContext;
          if (((x.trackingContext = this), Ku(this))) {
            this.isTrackPending_ = !0;
            try {
              this.onInvalidate_();
            } catch (i) {
              this.reportExceptionInDerivation_(i);
            }
          }
          (x.trackingContext = r), De();
        }
      }),
      (t.track = function (r) {
        if (!this.isDisposed_) {
          ze(), (this.isRunning_ = !0);
          var i = x.trackingContext;
          x.trackingContext = this;
          var o = Ap(this, r, void 0);
          (x.trackingContext = i),
            (this.isRunning_ = !1),
            (this.isTrackPending_ = !1),
            this.isDisposed_ && Gu(this),
            qi(o) && this.reportExceptionInDerivation_(o.cause),
            De();
        }
      }),
      (t.reportExceptionInDerivation_ = function (r) {
        var i = this;
        if (this.errorHandler_) {
          this.errorHandler_(r, this);
          return;
        }
        if (x.disableErrorBoundaries) throw r;
        var o = "[mobx] uncaught error in '" + this + "'";
        x.suppressReactionErrors || console.error(o, r),
          x.globalReactionErrorHandlers.forEach(function (l) {
            return l(r, i);
          });
      }),
      (t.dispose = function () {
        this.isDisposed_ ||
          ((this.isDisposed_ = !0), this.isRunning_ || (ze(), Gu(this), De()));
      }),
      (t.getDisposer_ = function (r) {
        var i = this,
          o = function l() {
            i.dispose(),
              r == null ||
                r.removeEventListener == null ||
                r.removeEventListener("abort", l);
          };
        return (
          r == null ||
            r.addEventListener == null ||
            r.addEventListener("abort", o),
          (o[j] = this),
          o
        );
      }),
      (t.toString = function () {
        return "Reaction[" + this.name_ + "]";
      }),
      (t.trace = function (r) {}),
      e
    );
  })(),
  lg = 100,
  Qu = function (t) {
    return t();
  };
function Dp() {
  x.inBatch > 0 || x.isRunningReactions || Qu(ug);
}
function ug() {
  x.isRunningReactions = !0;
  for (var e = x.pendingReactions, t = 0; e.length > 0; ) {
    ++t === lg &&
      (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
      n[r].runReaction_();
  }
  x.isRunningReactions = !1;
}
var zo = Ht("Reaction", Mo);
function sg(e) {
  var t = Qu;
  Qu = function (r) {
    return e(function () {
      return t(r);
    });
  };
}
function Tr() {
  return !1;
}
function ag(e) {
  return (
    console.warn("[mobx.spy] Is a no-op in production builds"), function () {}
  );
}
var Ip = "action",
  cg = "action.bound",
  Bp = "autoAction",
  fg = "autoAction.bound",
  dg = "<unnamed action>",
  Yu = di(Ip),
  pg = di(cg, { bound: !0 }),
  Xu = di(Bp, { autoAction: !0 }),
  hg = di(fg, { autoAction: !0, bound: !0 });
function $p(e) {
  var t = function (r, i) {
    if (Xe(r)) return pn(r.name || dg, r, e);
    if (Xe(i)) return pn(r, i, e);
    if (ci(i)) return (e ? Xu : Yu).decorate_20223_(r, i);
    if (cn(i)) return lr(r, i, e ? Xu : Yu);
    if (cn(r)) return ot(di(e ? Bp : Ip, { name: r, autoAction: e }));
  };
  return t;
}
var Bn = $p(!1);
Object.assign(Bn, Yu);
var Jr = $p(!0);
Object.assign(Jr, Xu);
Bn.bound = ot(pg);
Jr.bound = ot(hg);
function ll(e) {
  return Xe(e) && e.isMobxAction === !0;
}
function vg(e, t) {
  var n, r, i, o, l;
  t === void 0 && (t = ap);
  var u = (n = (r = t) == null ? void 0 : r.name) != null ? n : "Autorun",
    s = !t.scheduler && !t.delay,
    a;
  if (s)
    a = new Mo(
      u,
      function () {
        this.track(v);
      },
      t.onError,
      t.requiresObservable
    );
  else {
    var c = gg(t),
      d = !1;
    a = new Mo(
      u,
      function () {
        d ||
          ((d = !0),
          c(function () {
            (d = !1), a.isDisposed_ || a.track(v);
          }));
      },
      t.onError,
      t.requiresObservable
    );
  }
  function v() {
    e(a);
  }
  return (
    ((i = t) != null && (o = i.signal) != null && o.aborted) || a.schedule_(),
    a.getDisposer_((l = t) == null ? void 0 : l.signal)
  );
}
var mg = function (t) {
  return t();
};
function gg(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
    ? function (t) {
        return setTimeout(t, e.delay);
      }
    : mg;
}
var yg = "onBO",
  _g = "onBUO";
function wg(e, t, n) {
  return Up(yg, e, t, n);
}
function Fp(e, t, n) {
  return Up(_g, e, t, n);
}
function Up(e, t, n, r) {
  var i = Bo(t),
    o = Xe(r) ? r : n,
    l = e + "L";
  return (
    i[l] ? i[l].add(o) : (i[l] = new Set([o])),
    function () {
      var u = i[l];
      u && (u.delete(o), u.size === 0 && delete i[l]);
    }
  );
}
var Sg = "never",
  $i = "always",
  xg = "observed";
function Eg(e) {
  e.isolateGlobalState === !0 && ng();
  var t = e.useProxies,
    n = e.enforceActions;
  if (
    (t !== void 0 &&
      (x.useProxies = t === $i ? !0 : t === Sg ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (x.verifyProxies = !0),
    n !== void 0)
  ) {
    var r = n === $i ? $i : n === xg;
    (x.enforceActions = r), (x.allowStateChanges = !(r === !0 || r === $i));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (x[i] = !!e[i]);
  }),
    (x.allowStateReads = !x.observableRequiresReaction),
    e.reactionScheduler && sg(e.reactionScheduler);
}
function Vp(e, t, n, r) {
  var i = nm(t);
  return (
    Gt(function () {
      var o = yn(e, r)[j];
      Zn(i).forEach(function (l) {
        o.extend_(l, i[l], n && l in n ? n[l] : !0);
      });
    }),
    e
  );
}
function Og(e, t) {
  return bp(Bo(e, t));
}
function bp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ &&
      e.observing_.length > 0 &&
      (t.dependencies = kg(e.observing_).map(bp)),
    t
  );
}
function kg(e) {
  return Array.from(new Set(e));
}
var Cg = 0;
function Wp() {
  this.message = "FLOW_CANCELLED";
}
Wp.prototype = Object.create(Error.prototype);
var Ul = _p("flow"),
  Pg = _p("flow.bound", { bound: !0 }),
  er = Object.assign(function (t, n) {
    if (ci(n)) return Ul.decorate_20223_(t, n);
    if (cn(n)) return lr(t, n, Ul);
    var r = t,
      i = r.name || "<unnamed flow>",
      o = function () {
        var u = this,
          s = arguments,
          a = ++Cg,
          c = Bn(i + " - runid: " + a + " - init", r).apply(u, s),
          d,
          v = void 0,
          g = new Promise(function (_, y) {
            var S = 0;
            d = y;
            function p(m) {
              v = void 0;
              var E;
              try {
                E = Bn(i + " - runid: " + a + " - yield " + S++, c.next).call(
                  c,
                  m
                );
              } catch (k) {
                return y(k);
              }
              h(E);
            }
            function f(m) {
              v = void 0;
              var E;
              try {
                E = Bn(i + " - runid: " + a + " - yield " + S++, c.throw).call(
                  c,
                  m
                );
              } catch (k) {
                return y(k);
              }
              h(E);
            }
            function h(m) {
              if (Xe(m == null ? void 0 : m.then)) {
                m.then(h, y);
                return;
              }
              return m.done
                ? _(m.value)
                : ((v = Promise.resolve(m.value)), v.then(p, f));
            }
            p(void 0);
          });
        return (
          (g.cancel = Bn(i + " - runid: " + a + " - cancel", function () {
            try {
              v && Cc(v);
              var _ = c.return(void 0),
                y = Promise.resolve(_.value);
              y.then(Dn, Dn), Cc(y), d(new Wp());
            } catch (S) {
              d(S);
            }
          })),
          g
        );
      };
    return (o.isMobXFlow = !0), o;
  }, Ul);
er.bound = ot(Pg);
function Cc(e) {
  Xe(e.cancel) && e.cancel();
}
function Zr(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function Ag(e, t) {
  return e ? gi(e) || !!e[j] || qs(e) || zo(e) || pi(e) : !1;
}
function ia(e) {
  return Ag(e);
}
function Rg(e) {
  if (gi(e)) return e[j].ownKeys_();
  D(38);
}
function Fi(e, t, n) {
  return e.set(t, n), n;
}
function En(e, t) {
  if (e == null || typeof e != "object" || e instanceof Date || !ia(e))
    return e;
  if (eg(e) || pi(e)) return En(e.get(), t);
  if (t.has(e)) return t.get(e);
  if (mi(e)) {
    var n = Fi(t, e, new Array(e.length));
    return (
      e.forEach(function (l, u) {
        n[u] = En(l, t);
      }),
      n
    );
  }
  if (gn(e)) {
    var r = Fi(t, e, new Set());
    return (
      e.forEach(function (l) {
        r.add(En(l, t));
      }),
      r
    );
  }
  if (Kt(e)) {
    var i = Fi(t, e, new Map());
    return (
      e.forEach(function (l, u) {
        i.set(u, En(l, t));
      }),
      i
    );
  } else {
    var o = Fi(t, e, {});
    return (
      Rg(e).forEach(function (l) {
        ui.propertyIsEnumerable.call(e, l) && (o[l] = En(e[l], t));
      }),
      o
    );
  }
}
function Ju(e, t) {
  return En(e, new Map());
}
function at(e, t) {
  t === void 0 && (t = void 0), ze();
  try {
    return e.apply(t);
  } finally {
    De();
  }
}
function xn(e) {
  return e[j];
}
var Ng = {
  has: function (t, n) {
    return xn(t).has_(n);
  },
  get: function (t, n) {
    return xn(t).get_(n);
  },
  set: function (t, n, r) {
    var i;
    return cn(n) ? ((i = xn(t).set_(n, r, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, n) {
    var r;
    return cn(n) ? ((r = xn(t).delete_(n, !0)) != null ? r : !0) : !1;
  },
  defineProperty: function (t, n, r) {
    var i;
    return (i = xn(t).defineProperty_(n, r)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return xn(t).ownKeys_();
  },
  preventExtensions: function (t) {
    D(13);
  },
};
function jg(e, t) {
  var n, r;
  return (
    cp(),
    (e = yn(e, t)),
    (r = (n = e[j]).proxy_) != null ? r : (n.proxy_ = new Proxy(e, Ng))
  );
}
function Le(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function hi(e, t) {
  var n = e.interceptors_ || (e.interceptors_ = []);
  return (
    n.push(t),
    fp(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function Te(e, t) {
  var n = mn();
  try {
    for (
      var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
      i < o && ((t = r[i](t)), t && !t.type && D(14), !!t);
      i++
    );
    return t;
  } finally {
    ht(n);
  }
}
function Ge(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function vi(e, t) {
  var n = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    n.push(t),
    fp(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function Qe(e, t) {
  var n = mn(),
    r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, o = r.length; i < o; i++) r[i](t);
    ht(n);
  }
}
function Lg(e, t, n) {
  return (
    Gt(function () {
      var r,
        i = yn(e, n)[j];
      (r = t) != null || (t = um(e)),
        Zn(t).forEach(function (o) {
          return i.make_(o, t[o]);
        });
    }),
    e
  );
}
var Vl = Symbol("mobx-keys");
function Tg(e, t, n) {
  return _t(e)
    ? Vp(e, e, t, n)
    : (Gt(function () {
        var r = yn(e, n)[j];
        if (!e[Vl]) {
          var i = Object.getPrototypeOf(e),
            o = new Set([].concat(Zn(e), Zn(i)));
          o.delete("constructor"), o.delete(j), si(i, Vl, o);
        }
        e[Vl].forEach(function (l) {
          return r.make_(l, t && l in t ? t[l] : !0);
        });
      }),
      e);
}
var Pc = "splice",
  lt = "update",
  Mg = 1e4,
  zg = {
    get: function (t, n) {
      var r = t[j];
      return n === j
        ? r
        : n === "length"
        ? r.getArrayLength_()
        : typeof n == "string" && !isNaN(n)
        ? r.get_(parseInt(n))
        : pt(Do, n)
        ? Do[n]
        : t[n];
    },
    set: function (t, n, r) {
      var i = t[j];
      return (
        n === "length" && i.setArrayLength_(r),
        typeof n == "symbol" || isNaN(n) ? (t[n] = r) : i.set_(parseInt(n), r),
        !0
      );
    },
    preventExtensions: function () {
      D(15);
    },
  },
  oa = (function () {
    function e(n, r, i, o) {
      n === void 0 && (n = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = i),
        (this.legacyMode_ = o),
        (this.atom_ = new fi(n)),
        (this.enhancer_ = function (l, u) {
          return r(l, u, "ObservableArray[..]");
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.dehanceValues_ = function (r) {
        return this.dehancer !== void 0 && r.length > 0
          ? r.map(this.dehancer)
          : r;
      }),
      (t.intercept_ = function (r) {
        return hi(this, r);
      }),
      (t.observe_ = function (r, i) {
        return (
          i === void 0 && (i = !1),
          i &&
            r({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          vi(this, r)
        );
      }),
      (t.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (t.setArrayLength_ = function (r) {
        (typeof r != "number" || isNaN(r) || r < 0) && D("Out of range: " + r);
        var i = this.values_.length;
        if (r !== i)
          if (r > i) {
            for (var o = new Array(r - i), l = 0; l < r - i; l++) o[l] = void 0;
            this.spliceWithArray_(i, 0, o);
          } else this.spliceWithArray_(r, i - r);
      }),
      (t.updateArrayLength_ = function (r, i) {
        r !== this.lastKnownLength_ && D(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && th(r + i + 1);
      }),
      (t.spliceWithArray_ = function (r, i, o) {
        var l = this;
        this.atom_;
        var u = this.values_.length;
        if (
          (r === void 0
            ? (r = 0)
            : r > u
            ? (r = u)
            : r < 0 && (r = Math.max(0, u + r)),
          arguments.length === 1
            ? (i = u - r)
            : i == null
            ? (i = 0)
            : (i = Math.max(0, Math.min(i, u - r))),
          o === void 0 && (o = Vu),
          Le(this))
        ) {
          var s = Te(this, {
            object: this.proxy_,
            type: Pc,
            index: r,
            removedCount: i,
            added: o,
          });
          if (!s) return Vu;
          (i = s.removedCount), (o = s.added);
        }
        if (
          ((o =
            o.length === 0
              ? o
              : o.map(function (d) {
                  return l.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var a = o.length - i;
          this.updateArrayLength_(u, a);
        }
        var c = this.spliceItemsIntoValues_(r, i, o);
        return (
          (i !== 0 || o.length !== 0) && this.notifyArraySplice_(r, o, c),
          this.dehanceValues_(c)
        );
      }),
      (t.spliceItemsIntoValues_ = function (r, i, o) {
        if (o.length < Mg) {
          var l;
          return (l = this.values_).splice.apply(l, [r, i].concat(o));
        } else {
          var u = this.values_.slice(r, r + i),
            s = this.values_.slice(r + i);
          this.values_.length += o.length - i;
          for (var a = 0; a < o.length; a++) this.values_[r + a] = o[a];
          for (var c = 0; c < s.length; c++)
            this.values_[r + o.length + c] = s[c];
          return u;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (r, i, o) {
        var l = !this.owned_ && Tr(),
          u = Ge(this),
          s =
            u || l
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: lt,
                  debugObjectName: this.atom_.name_,
                  index: r,
                  newValue: i,
                  oldValue: o,
                }
              : null;
        this.atom_.reportChanged(), u && Qe(this, s);
      }),
      (t.notifyArraySplice_ = function (r, i, o) {
        var l = !this.owned_ && Tr(),
          u = Ge(this),
          s =
            u || l
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Pc,
                  index: r,
                  removed: o,
                  added: i,
                  removedCount: o.length,
                  addedCount: i.length,
                }
              : null;
        this.atom_.reportChanged(), u && Qe(this, s);
      }),
      (t.get_ = function (r) {
        if (this.legacyMode_ && r >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + r);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
      }),
      (t.set_ = function (r, i) {
        var o = this.values_;
        if (
          (this.legacyMode_ && r > o.length && D(17, r, o.length), r < o.length)
        ) {
          this.atom_;
          var l = o[r];
          if (Le(this)) {
            var u = Te(this, {
              type: lt,
              object: this.proxy_,
              index: r,
              newValue: i,
            });
            if (!u) return;
            i = u.newValue;
          }
          i = this.enhancer_(i, l);
          var s = i !== l;
          s && ((o[r] = i), this.notifyArrayChildUpdate_(r, i, l));
        } else {
          for (
            var a = new Array(r + 1 - o.length), c = 0;
            c < a.length - 1;
            c++
          )
            a[c] = void 0;
          (a[a.length - 1] = i), this.spliceWithArray_(o.length, 0, a);
        }
      }),
      e
    );
  })();
function Dg(e, t, n, r) {
  return (
    n === void 0 && (n = "ObservableArray"),
    r === void 0 && (r = !1),
    cp(),
    Gt(function () {
      var i = new oa(n, t, r, !1);
      pp(i.values_, j, i);
      var o = new Proxy(i.values_, zg);
      return (i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o;
    })
  );
}
var Do = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var n = this[j];
    return n.spliceWithArray_(0, n.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, n) {
    for (
      var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2;
      o < r;
      o++
    )
      i[o - 2] = arguments[o];
    var l = this[j];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return l.spliceWithArray_(t);
      case 2:
        return l.spliceWithArray_(t, n);
    }
    return l.spliceWithArray_(t, n, i);
  },
  spliceWithArray: function (t, n, r) {
    return this[j].spliceWithArray_(t, n, r);
  },
  push: function () {
    for (
      var t = this[j], n = arguments.length, r = new Array(n), i = 0;
      i < n;
      i++
    )
      r[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[j].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (
      var t = this[j], n = arguments.length, r = new Array(n), i = 0;
      i < n;
      i++
    )
      r[i] = arguments[i];
    return t.spliceWithArray_(0, 0, r), t.values_.length;
  },
  reverse: function () {
    return (
      x.trackingDerivation && D(37, "reverse"),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    x.trackingDerivation && D(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function (t) {
    var n = this[j],
      r = n.dehanceValues_(n.values_).indexOf(t);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  },
};
U("at", Re);
U("concat", Re);
U("flat", Re);
U("includes", Re);
U("indexOf", Re);
U("join", Re);
U("lastIndexOf", Re);
U("slice", Re);
U("toString", Re);
U("toLocaleString", Re);
U("toSorted", Re);
U("toSpliced", Re);
U("with", Re);
U("every", Je);
U("filter", Je);
U("find", Je);
U("findIndex", Je);
U("findLast", Je);
U("findLastIndex", Je);
U("flatMap", Je);
U("forEach", Je);
U("map", Je);
U("some", Je);
U("toReversed", Je);
U("reduce", Hp);
U("reduceRight", Hp);
function U(e, t) {
  typeof Array.prototype[e] == "function" && (Do[e] = t(e));
}
function Re(e) {
  return function () {
    var t = this[j];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function Je(e) {
  return function (t, n) {
    var r = this,
      i = this[j];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function (l, u) {
      return t.call(n, l, u, r);
    });
  };
}
function Hp(e) {
  return function () {
    var t = this,
      n = this[j];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (o, l, u) {
        return i(o, l, u, t);
      }),
      r[e].apply(r, arguments)
    );
  };
}
var Ig = Ht("ObservableArrayAdministration", oa);
function mi(e) {
  return nl(e) && Ig(e[j]);
}
var Kp,
  Gp,
  Bg = {},
  At = "add",
  Io = "delete";
Kp = Symbol.iterator;
Gp = Symbol.toStringTag;
var Qp = (function () {
    function e(n, r, i) {
      var o = this;
      r === void 0 && (r = dn),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[j] = Bg),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = r),
        (this.name_ = i),
        Xe(Map) || D(18),
        Gt(function () {
          (o.keysAtom_ = gp("ObservableMap.keys()")),
            (o.data_ = new Map()),
            (o.hasMap_ = new Map()),
            n && o.merge(n);
        });
    }
    var t = e.prototype;
    return (
      (t.has_ = function (r) {
        return this.data_.has(r);
      }),
      (t.has = function (r) {
        var i = this;
        if (!x.trackingDerivation) return this.has_(r);
        var o = this.hasMap_.get(r);
        if (!o) {
          var l = (o = new Bt(this.has_(r), rl, "ObservableMap.key?", !1));
          this.hasMap_.set(r, l),
            Fp(l, function () {
              return i.hasMap_.delete(r);
            });
        }
        return o.get();
      }),
      (t.set = function (r, i) {
        var o = this.has_(r);
        if (Le(this)) {
          var l = Te(this, {
            type: o ? lt : At,
            object: this,
            newValue: i,
            name: r,
          });
          if (!l) return this;
          i = l.newValue;
        }
        return o ? this.updateValue_(r, i) : this.addValue_(r, i), this;
      }),
      (t.delete = function (r) {
        var i = this;
        if ((this.keysAtom_, Le(this))) {
          var o = Te(this, { type: Io, object: this, name: r });
          if (!o) return !1;
        }
        if (this.has_(r)) {
          var l = Tr(),
            u = Ge(this),
            s =
              u || l
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Io,
                    object: this,
                    oldValue: this.data_.get(r).value_,
                    name: r,
                  }
                : null;
          return (
            at(function () {
              var a;
              i.keysAtom_.reportChanged(),
                (a = i.hasMap_.get(r)) == null || a.setNewValue_(!1);
              var c = i.data_.get(r);
              c.setNewValue_(void 0), i.data_.delete(r);
            }),
            u && Qe(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (r, i) {
        var o = this.data_.get(r);
        if (((i = o.prepareNewValue_(i)), i !== x.UNCHANGED)) {
          var l = Tr(),
            u = Ge(this),
            s =
              u || l
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: lt,
                    object: this,
                    oldValue: o.value_,
                    name: r,
                    newValue: i,
                  }
                : null;
          o.setNewValue_(i), u && Qe(this, s);
        }
      }),
      (t.addValue_ = function (r, i) {
        var o = this;
        this.keysAtom_,
          at(function () {
            var a,
              c = new Bt(i, o.enhancer_, "ObservableMap.key", !1);
            o.data_.set(r, c),
              (i = c.value_),
              (a = o.hasMap_.get(r)) == null || a.setNewValue_(!0),
              o.keysAtom_.reportChanged();
          });
        var l = Tr(),
          u = Ge(this),
          s =
            u || l
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: At,
                  object: this,
                  name: r,
                  newValue: i,
                }
              : null;
        u && Qe(this, s);
      }),
      (t.get = function (r) {
        return this.has(r)
          ? this.dehanceValue_(this.data_.get(r).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.keys = function () {
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (t.values = function () {
        var r = this,
          i = this.keys();
        return qr({
          next: function () {
            var l = i.next(),
              u = l.done,
              s = l.value;
            return { done: u, value: u ? void 0 : r.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var r = this,
          i = this.keys();
        return qr({
          next: function () {
            var l = i.next(),
              u = l.done,
              s = l.value;
            return { done: u, value: u ? void 0 : [s, r.get(s)] };
          },
        });
      }),
      (t[Kp] = function () {
        return this.entries();
      }),
      (t.forEach = function (r, i) {
        for (var o = In(this), l; !(l = o()).done; ) {
          var u = l.value,
            s = u[0],
            a = u[1];
          r.call(i, a, s, this);
        }
      }),
      (t.merge = function (r) {
        var i = this;
        return (
          Kt(r) && (r = new Map(r)),
          at(function () {
            _t(r)
              ? tm(r).forEach(function (o) {
                  return i.set(o, r[o]);
                })
              : Array.isArray(r)
              ? r.forEach(function (o) {
                  var l = o[0],
                    u = o[1];
                  return i.set(l, u);
                })
              : or(r)
              ? (r.constructor !== Map && D(19, r),
                r.forEach(function (o, l) {
                  return i.set(l, o);
                }))
              : r != null && D(20, r);
          }),
          this
        );
      }),
      (t.clear = function () {
        var r = this;
        at(function () {
          Rp(function () {
            for (var i = In(r.keys()), o; !(o = i()).done; ) {
              var l = o.value;
              r.delete(l);
            }
          });
        });
      }),
      (t.replace = function (r) {
        var i = this;
        return (
          at(function () {
            for (
              var o = $g(r), l = new Map(), u = !1, s = In(i.data_.keys()), a;
              !(a = s()).done;

            ) {
              var c = a.value;
              if (!o.has(c)) {
                var d = i.delete(c);
                if (d) u = !0;
                else {
                  var v = i.data_.get(c);
                  l.set(c, v);
                }
              }
            }
            for (var g = In(o.entries()), _; !(_ = g()).done; ) {
              var y = _.value,
                S = y[0],
                p = y[1],
                f = i.data_.has(S);
              if ((i.set(S, p), i.data_.has(S))) {
                var h = i.data_.get(S);
                l.set(S, h), f || (u = !0);
              }
            }
            if (!u)
              if (i.data_.size !== l.size) i.keysAtom_.reportChanged();
              else
                for (
                  var m = i.data_.keys(),
                    E = l.keys(),
                    k = m.next(),
                    A = E.next();
                  !k.done;

                ) {
                  if (k.value !== A.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  (k = m.next()), (A = E.next());
                }
            i.data_ = l;
          }),
          this
        );
      }),
      (t.toString = function () {
        return "[object ObservableMap]";
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.observe_ = function (r, i) {
        return vi(this, r);
      }),
      (t.intercept_ = function (r) {
        return hi(this, r);
      }),
      Zs(e, [
        {
          key: "size",
          get: function () {
            return this.keysAtom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Gp,
          get: function () {
            return "Map";
          },
        },
      ]),
      e
    );
  })(),
  Kt = Ht("ObservableMap", Qp);
function $g(e) {
  if (or(e) || Kt(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (_t(e)) {
    var t = new Map();
    for (var n in e) t.set(n, e[n]);
    return t;
  } else return D(21, e);
}
var Yp,
  Xp,
  Fg = {};
Yp = Symbol.iterator;
Xp = Symbol.toStringTag;
var Jp = (function () {
    function e(n, r, i) {
      var o = this;
      r === void 0 && (r = dn),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[j] = Fg),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        Xe(Set) || D(22),
        (this.enhancer_ = function (l, u) {
          return r(l, u, i);
        }),
        Gt(function () {
          (o.atom_ = gp(o.name_)), n && o.replace(n);
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.clear = function () {
        var r = this;
        at(function () {
          Rp(function () {
            for (var i = In(r.data_.values()), o; !(o = i()).done; ) {
              var l = o.value;
              r.delete(l);
            }
          });
        });
      }),
      (t.forEach = function (r, i) {
        for (var o = In(this), l; !(l = o()).done; ) {
          var u = l.value;
          r.call(i, u, u, this);
        }
      }),
      (t.add = function (r) {
        var i = this;
        if ((this.atom_, Le(this))) {
          var o = Te(this, { type: At, object: this, newValue: r });
          if (!o) return this;
        }
        if (!this.has(r)) {
          at(function () {
            i.data_.add(i.enhancer_(r, void 0)), i.atom_.reportChanged();
          });
          var l = !1,
            u = Ge(this),
            s =
              u || l
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: At,
                    object: this,
                    newValue: r,
                  }
                : null;
          u && Qe(this, s);
        }
        return this;
      }),
      (t.delete = function (r) {
        var i = this;
        if (Le(this)) {
          var o = Te(this, { type: Io, object: this, oldValue: r });
          if (!o) return !1;
        }
        if (this.has(r)) {
          var l = !1,
            u = Ge(this),
            s =
              u || l
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Io,
                    object: this,
                    oldValue: r,
                  }
                : null;
          return (
            at(function () {
              i.atom_.reportChanged(), i.data_.delete(r);
            }),
            u && Qe(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (r) {
        return (
          this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r))
        );
      }),
      (t.entries = function () {
        var r = 0,
          i = Array.from(this.keys()),
          o = Array.from(this.values());
        return qr({
          next: function () {
            var u = r;
            return (
              (r += 1),
              u < o.length ? { value: [i[u], o[u]], done: !1 } : { done: !0 }
            );
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var r = this,
          i = 0,
          o = Array.from(this.data_.values());
        return qr({
          next: function () {
            return i < o.length
              ? { value: r.dehanceValue_(o[i++]), done: !1 }
              : { done: !0 };
          },
        });
      }),
      (t.replace = function (r) {
        var i = this;
        return (
          gn(r) && (r = new Set(r)),
          at(function () {
            Array.isArray(r)
              ? (i.clear(),
                r.forEach(function (o) {
                  return i.add(o);
                }))
              : ai(r)
              ? (i.clear(),
                r.forEach(function (o) {
                  return i.add(o);
                }))
              : r != null && D("Cannot initialize set from " + r);
          }),
          this
        );
      }),
      (t.observe_ = function (r, i) {
        return vi(this, r);
      }),
      (t.intercept_ = function (r) {
        return hi(this, r);
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.toString = function () {
        return "[object ObservableSet]";
      }),
      (t[Yp] = function () {
        return this.values();
      }),
      Zs(e, [
        {
          key: "size",
          get: function () {
            return this.atom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Xp,
          get: function () {
            return "Set";
          },
        },
      ]),
      e
    );
  })(),
  gn = Ht("ObservableSet", Jp),
  Ac = Object.create(null),
  Rc = "remove",
  Zp = (function () {
    function e(n, r, i, o) {
      r === void 0 && (r = new Map()),
        o === void 0 && (o = Tm),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = n),
        (this.values_ = r),
        (this.name_ = i),
        (this.defaultAnnotation_ = o),
        (this.keysAtom_ = new fi("ObservableObject.keys")),
        (this.isPlainObject_ = _t(this.target_));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (r) {
        return this.values_.get(r).get();
      }),
      (t.setObservablePropValue_ = function (r, i) {
        var o = this.values_.get(r);
        if (o instanceof qn) return o.set(i), !0;
        if (Le(this)) {
          var l = Te(this, {
            type: lt,
            object: this.proxy_ || this.target_,
            name: r,
            newValue: i,
          });
          if (!l) return null;
          i = l.newValue;
        }
        if (((i = o.prepareNewValue_(i)), i !== x.UNCHANGED)) {
          var u = Ge(this),
            s = !1,
            a =
              u || s
                ? {
                    type: lt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: r,
                    newValue: i,
                  }
                : null;
          o.setNewValue_(i), u && Qe(this, a);
        }
        return !0;
      }),
      (t.get_ = function (r) {
        return (
          x.trackingDerivation && !pt(this.target_, r) && this.has_(r),
          this.target_[r]
        );
      }),
      (t.set_ = function (r, i, o) {
        return (
          o === void 0 && (o = !1),
          pt(this.target_, r)
            ? this.values_.has(r)
              ? this.setObservablePropValue_(r, i)
              : o
              ? Reflect.set(this.target_, r, i)
              : ((this.target_[r] = i), !0)
            : this.extend_(
                r,
                { value: i, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                o
              )
        );
      }),
      (t.has_ = function (r) {
        if (!x.trackingDerivation) return r in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(r);
        return (
          i ||
            ((i = new Bt(r in this.target_, rl, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(r, i)),
          i.get()
        );
      }),
      (t.make_ = function (r, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(r in this.target_)) {
            var o;
            if ((o = this.target_[tt]) != null && o[r]) return;
            D(1, i.annotationType_, this.name_ + "." + r.toString());
          }
          for (var l = this.target_; l && l !== ui; ) {
            var u = Ro(l, r);
            if (u) {
              var s = i.make_(this, r, u, l);
              if (s === 0) return;
              if (s === 1) break;
            }
            l = Object.getPrototypeOf(l);
          }
          jc(this, i, r);
        }
      }),
      (t.extend_ = function (r, i, o, l) {
        if (
          (l === void 0 && (l = !1),
          o === !0 && (o = this.defaultAnnotation_),
          o === !1)
        )
          return this.defineProperty_(r, i, l);
        var u = o.extend_(this, r, i, l);
        return u && jc(this, o, r), u;
      }),
      (t.defineProperty_ = function (r, i, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          ze();
          var l = this.delete_(r);
          if (!l) return l;
          if (Le(this)) {
            var u = Te(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: At,
              newValue: i.value,
            });
            if (!u) return null;
            var s = u.newValue;
            i.value !== s && (i = fn({}, i, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, r, i)) return !1;
          } else it(this.target_, r, i);
          this.notifyPropertyAddition_(r, i.value);
        } finally {
          De();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (r, i, o, l) {
        l === void 0 && (l = !1), this.keysAtom_;
        try {
          ze();
          var u = this.delete_(r);
          if (!u) return u;
          if (Le(this)) {
            var s = Te(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: At,
              newValue: i,
            });
            if (!s) return null;
            i = s.newValue;
          }
          var a = Nc(r),
            c = {
              configurable: x.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: a.get,
              set: a.set,
            };
          if (l) {
            if (!Reflect.defineProperty(this.target_, r, c)) return !1;
          } else it(this.target_, r, c);
          var d = new Bt(i, o, "ObservableObject.key", !1);
          this.values_.set(r, d), this.notifyPropertyAddition_(r, d.value_);
        } finally {
          De();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (r, i, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          ze();
          var l = this.delete_(r);
          if (!l) return l;
          if (Le(this)) {
            var u = Te(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: At,
              newValue: void 0,
            });
            if (!u) return null;
          }
          i.name || (i.name = "ObservableObject.key"),
            (i.context = this.proxy_ || this.target_);
          var s = Nc(r),
            a = {
              configurable: x.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, r, a)) return !1;
          } else it(this.target_, r, a);
          this.values_.set(r, new qn(i)),
            this.notifyPropertyAddition_(r, void 0);
        } finally {
          De();
        }
        return !0;
      }),
      (t.delete_ = function (r, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !pt(this.target_, r)))
          return !0;
        if (Le(this)) {
          var o = Te(this, {
            object: this.proxy_ || this.target_,
            name: r,
            type: Rc,
          });
          if (!o) return null;
        }
        try {
          var l, u;
          ze();
          var s = Ge(this),
            a = !1,
            c = this.values_.get(r),
            d = void 0;
          if (!c && (s || a)) {
            var v;
            d = (v = Ro(this.target_, r)) == null ? void 0 : v.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, r)) return !1;
          } else delete this.target_[r];
          if (
            (c &&
              (this.values_.delete(r),
              c instanceof Bt && (d = c.value_),
              zp(c)),
            this.keysAtom_.reportChanged(),
            (l = this.pendingKeys_) == null ||
              (u = l.get(r)) == null ||
              u.set(r in this.target_),
            s || a)
          ) {
            var g = {
              type: Rc,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: d,
              name: r,
            };
            s && Qe(this, g);
          }
        } finally {
          De();
        }
        return !0;
      }),
      (t.observe_ = function (r, i) {
        return vi(this, r);
      }),
      (t.intercept_ = function (r) {
        return hi(this, r);
      }),
      (t.notifyPropertyAddition_ = function (r, i) {
        var o,
          l,
          u = Ge(this),
          s = !1;
        if (u || s) {
          var a =
            u || s
              ? {
                  type: At,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: r,
                  newValue: i,
                }
              : null;
          u && Qe(this, a);
        }
        (o = this.pendingKeys_) == null || (l = o.get(r)) == null || l.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (t.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), Zn(this.target_);
      }),
      (t.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      e
    );
  })();
function yn(e, t) {
  var n;
  if (pt(e, j)) return e;
  var r = (n = t == null ? void 0 : t.name) != null ? n : "ObservableObject",
    i = new Zp(e, new Map(), String(r), Wm(t));
  return si(e, j, i), e;
}
var Ug = Ht("ObservableObjectAdministration", Zp);
function Nc(e) {
  return (
    Ac[e] ||
    (Ac[e] = {
      get: function () {
        return this[j].getObservablePropValue_(e);
      },
      set: function (n) {
        return this[j].setObservablePropValue_(e, n);
      },
    })
  );
}
function gi(e) {
  return nl(e) ? Ug(e[j]) : !1;
}
function jc(e, t, n) {
  var r;
  (r = e.target_[tt]) == null || delete r[n];
}
var Vg = eh(0),
  bg = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, "0", {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  bl = 0,
  qp = function () {};
function Wg(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
    ? (e.prototype.__proto__ = t)
    : (e.prototype = t);
}
Wg(qp, Array.prototype);
var la = (function (e, t, n) {
  mp(r, e);
  function r(o, l, u, s) {
    var a;
    return (
      u === void 0 && (u = "ObservableArray"),
      s === void 0 && (s = !1),
      (a = e.call(this) || this),
      Gt(function () {
        var c = new oa(u, l, s, !0);
        (c.proxy_ = Fl(a)),
          pp(Fl(a), j, c),
          o && o.length && a.spliceWithArray(0, 0, o),
          bg && Object.defineProperty(Fl(a), "0", Vg);
      }),
      a
    );
  }
  var i = r.prototype;
  return (
    (i.concat = function () {
      this[j].atom_.reportObserved();
      for (var l = arguments.length, u = new Array(l), s = 0; s < l; s++)
        u[s] = arguments[s];
      return Array.prototype.concat.apply(
        this.slice(),
        u.map(function (a) {
          return mi(a) ? a.slice() : a;
        })
      );
    }),
    (i[n] = function () {
      var o = this,
        l = 0;
      return qr({
        next: function () {
          return l < o.length
            ? { value: o[l++], done: !1 }
            : { done: !0, value: void 0 };
        },
      });
    }),
    Zs(r, [
      {
        key: "length",
        get: function () {
          return this[j].getArrayLength_();
        },
        set: function (l) {
          this[j].setArrayLength_(l);
        },
      },
      {
        key: t,
        get: function () {
          return "Array";
        },
      },
    ]),
    r
  );
})(qp, Symbol.toStringTag, Symbol.iterator);
Object.entries(Do).forEach(function (e) {
  var t = e[0],
    n = e[1];
  t !== "concat" && si(la.prototype, t, n);
});
function eh(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[j].get_(e);
    },
    set: function (n) {
      this[j].set_(e, n);
    },
  };
}
function Hg(e) {
  it(la.prototype, "" + e, eh(e));
}
function th(e) {
  if (e > bl) {
    for (var t = bl; t < e + 100; t++) Hg(t);
    bl = e;
  }
}
th(1e3);
function Kg(e, t, n) {
  return new la(e, t, n);
}
function Bo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (mi(e)) return t !== void 0 && D(23), e[j].atom_;
    if (gn(e)) return e.atom_;
    if (Kt(e)) {
      if (t === void 0) return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return n || D(25, t, Zu(e)), n;
    }
    if (gi(e)) {
      if (!t) return D(26);
      var r = e[j].values_.get(t);
      return r || D(27, t, Zu(e)), r;
    }
    if (qs(e) || pi(e) || zo(e)) return e;
  } else if (Xe(e) && zo(e[j])) return e[j];
  D(28);
}
function Gg(e, t) {
  if ((e || D(29), qs(e) || pi(e) || zo(e) || Kt(e) || gn(e))) return e;
  if (e[j]) return e[j];
  D(24, e);
}
function Zu(e, t) {
  var n;
  if (t !== void 0) n = Bo(e, t);
  else {
    if (ll(e)) return e.name;
    gi(e) || Kt(e) || gn(e) ? (n = Gg(e)) : (n = Bo(e));
  }
  return n.name_;
}
function Gt(e) {
  var t = mn(),
    n = ta(!0);
  ze();
  try {
    return e();
  } finally {
    De(), na(n), ht(t);
  }
}
var Lc = ui.toString;
function ua(e, t, n) {
  return n === void 0 && (n = -1), qu(e, t, n);
}
function qu(e, t, n, r, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var l = Lc.call(e);
  if (l !== Lc.call(t)) return !1;
  switch (l) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return (
        typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
      );
    case "[object Map]":
    case "[object Set]":
      n >= 0 && n++;
      break;
  }
  (e = Tc(e)), (t = Tc(t));
  var u = l === "[object Array]";
  if (!u) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      a = t.constructor;
    if (
      s !== a &&
      !(Xe(s) && s instanceof s && Xe(a) && a instanceof a) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (n === 0) return !1;
  n < 0 && (n = -1), (r = r || []), (i = i || []);
  for (var c = r.length; c--; ) if (r[c] === e) return i[c] === t;
  if ((r.push(e), i.push(t), u)) {
    if (((c = e.length), c !== t.length)) return !1;
    for (; c--; ) if (!qu(e[c], t[c], n - 1, r, i)) return !1;
  } else {
    var d = Object.keys(e),
      v;
    if (((c = d.length), Object.keys(t).length !== c)) return !1;
    for (; c--; )
      if (((v = d[c]), !(pt(t, v) && qu(e[v], t[v], n - 1, r, i)))) return !1;
  }
  return r.pop(), i.pop(), !0;
}
function Tc(e) {
  return mi(e)
    ? e.slice()
    : or(e) || Kt(e) || ai(e) || gn(e)
    ? Array.from(e.entries())
    : e;
}
function qr(e) {
  return (e[Symbol.iterator] = Qg), e;
}
function Qg() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Js();
  typeof t[e] > "u" &&
    D("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: ag,
    extras: { getDebugName: Zu },
    $mobx: j,
  });
class Yg {
  constructor() {
    wn(this, "isModalShown", !1);
    wn(this, "roleList", [
      { id: 1, title: "Мафия", img: "./cards/Мафия.png" },
      { id: 2, title: "Мирный", img: "./cards/Мирный.png" },
      { id: 3, title: "Коммисар", img: "./cards/Коммисар.png" },
      { id: 4, title: "Врач", img: "./cards/Врач.png" },
      { id: 5, title: "Красотка", img: "./cards/Красотка.png" },
    ]);
    wn(this, "randomizeRoleList", []);
    wn(this, "indexRole", 0);
    wn(this, "currentCard", { title: "", img: "", id: 0 });
    Tg(this, {}, { deep: !0 });
  }
  nextCard() {
    this.indexRole < this.randomizeRoleList.length - 1 && this.indexRole++,
      (this.currentCard = this.randomizeRoleList[this.indexRole]);
  }
  prevCard() {
    this.indexRole > 0 && this.indexRole--,
      (this.currentCard = this.randomizeRoleList[this.indexRole]);
  }
  setIsmodalShown() {
    this.isModalShown = !this.isModalShown;
  }
  addRoleList(t) {
    this.roleList.push(t);
  }
  deleteRoleList(t) {
    this.roleList = this.roleList.filter((n) => n.id !== t);
  }
  editRoleList(t, n) {
    let r = "./cards/" + t + ".png";
    (this.roleList = this.roleList.map((i) =>
      i.id === n ? { ...i, image: r, title: t } : i
    )),
      console.log("value", t, "id", n, Ju(this.roleList));
  }
  randomizeRoles() {
    (this.randomizeRoleList = [...this.roleList].sort(
      () => Math.random() - 0.5
    )),
      console.log(Ju(this.randomizeRoleList)),
      (this.currentCard = this.randomizeRoleList[this.indexRole]);
  }
}
const ue = new Yg(),
  Xg = "_button_primary_xgjwf_1",
  Jg = "_anim_icon_xgjwf_23",
  no = { button_primary: Xg, anim_icon: Jg };
function nh({ width: e, height: t, text: n, handleClick: r }) {
  return R.jsx("button", {
    style: { width: e + "px", height: t + "px" },
    onClick: r,
    className: no.button_primary,
    children: n,
  });
}
function Ut({ image: e, handleClick: t, isAnimate: n = !0 }) {
  return R.jsx("button", {
    onClick: t,
    className: n ? no.button_icon + " " + no.anim_icon : no.button_icon,
    children: R.jsx("img", { src: e, alt: "" }),
  });
}
if (!C.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!Lg)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available"
  );
function Zg(e) {
  e();
}
function qg(e) {
  e || (e = Zg), Eg({ reactionScheduler: e });
}
function ey(e) {
  return Og(e);
}
var ty = 1e4,
  ny = 1e4,
  ry = (function () {
    function e(t) {
      var n = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (r) {
            r === void 0 && (r = ty),
              clearTimeout(n.sweepTimeout),
              (n.sweepTimeout = void 0);
            var i = Date.now();
            n.registrations.forEach(function (o, l) {
              i - o.registeredAt >= r &&
                (n.finalize(o.value), n.registrations.delete(l));
            }),
              n.registrations.size > 0 && n.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            n.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, n, r) {
          this.registrations.set(r, { value: n, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, ny));
        },
      }),
      e
    );
  })(),
  iy = typeof FinalizationRegistry < "u" ? FinalizationRegistry : ry,
  es = new iy(function (e) {
    var t;
    (t = e.reaction) === null || t === void 0 || t.dispose(),
      (e.reaction = null);
  }),
  rh = { exports: {} },
  ih = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr = C;
function oy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ly = typeof Object.is == "function" ? Object.is : oy,
  uy = tr.useState,
  sy = tr.useEffect,
  ay = tr.useLayoutEffect,
  cy = tr.useDebugValue;
function fy(e, t) {
  var n = t(),
    r = uy({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    ay(
      function () {
        (i.value = n), (i.getSnapshot = t), Wl(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    sy(
      function () {
        return (
          Wl(i) && o({ inst: i }),
          e(function () {
            Wl(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    cy(n),
    n
  );
}
function Wl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ly(e, n);
  } catch {
    return !0;
  }
}
function dy(e, t) {
  return t();
}
var py =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? dy
    : fy;
ih.useSyncExternalStore =
  tr.useSyncExternalStore !== void 0 ? tr.useSyncExternalStore : py;
rh.exports = ih;
var hy = rh.exports;
function Mc(e) {
  e.reaction = new Mo("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()),
      (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function vy(e, t) {
  t === void 0 && (t = "observed");
  var n = ro.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (u) {
        return (
          es.unregister(r),
          (r.onStoreChange = u),
          r.reaction || (Mc(r), (r.stateVersion = Symbol())),
          function () {
            var s;
            (r.onStoreChange = null),
              (s = r.reaction) === null || s === void 0 || s.dispose(),
              (r.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return r.stateVersion;
      },
    };
    n.current = r;
  }
  var i = n.current;
  i.reaction || (Mc(i), es.register(n, i, i)),
    ro.useDebugValue(i.reaction, ey),
    hy.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot);
  var o, l;
  if (
    (i.reaction.track(function () {
      try {
        o = e();
      } catch (u) {
        l = u;
      }
    }),
    l)
  )
    throw l;
  return o;
}
var Hl,
  Kl,
  oh = typeof Symbol == "function" && Symbol.for,
  my =
    (Kl =
      (Hl = Object.getOwnPropertyDescriptor(function () {}, "name")) === null ||
      Hl === void 0
        ? void 0
        : Hl.configurable) !== null && Kl !== void 0
      ? Kl
      : !1,
  zc = oh
    ? Symbol.for("react.forward_ref")
    : typeof C.forwardRef == "function" &&
      C.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Dc = oh
    ? Symbol.for("react.memo")
    : typeof C.memo == "function" &&
      C.memo(function (e) {
        return null;
      }).$$typeof;
function ul(e, t) {
  var n;
  if (Dc && e.$$typeof === Dc)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you."
    );
  var r = (n = void 0) !== null && n !== void 0 ? n : !1,
    i = e,
    o = e.displayName || e.name;
  if (
    zc &&
    e.$$typeof === zc &&
    ((r = !0), (i = e.render), typeof i != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function"
    );
  var l = function (u, s) {
    return vy(function () {
      return i(u, s);
    }, o);
  };
  return (
    (l.displayName = e.displayName),
    my &&
      Object.defineProperty(l, "name", {
        value: e.name,
        writable: !0,
        configurable: !0,
      }),
    e.contextTypes && (l.contextTypes = e.contextTypes),
    r && (l = C.forwardRef(l)),
    (l = C.memo(l)),
    yy(e, l),
    l
  );
}
var gy = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function yy(e, t) {
  Object.keys(e).forEach(function (n) {
    gy[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
var Gl;
qg(up.unstable_batchedUpdates);
Gl = es.finalizeAllImmediately;
const _y = "_footer_nzbus_1",
  wy = "_footer_info_nzbus_27",
  Ic = { footer: _y, footer_info: wy },
  Sy =
    "data:image/svg+xml,%3csvg%20width='41'%20height='79'%20viewBox='0%200%2041%2079'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_109_169)'%3e%3cpath%20d='M36.853%2035.5C36.853%2055.1061%2035.9592%2071%2016.353%2071C-3.25306%2071%206.35303%2055.1061%206.35303%2035.5C6.35303%2015.8939%20-3.25306%200%2016.353%200C35.9592%200%2036.853%2015.8939%2036.853%2035.5Z'%20fill='%23D9D9D9'/%3e%3c/g%3e%3cline%20x1='13.7442'%20y1='17.9612'%20x2='31.9574'%20y2='36.1745'%20stroke='black'%20stroke-width='2'/%3e%3cline%20x1='12.7853'%20y1='53.9324'%20x2='30.9986'%20y2='35.7192'%20stroke='black'%20stroke-width='2'/%3e%3cdefs%3e%3cfilter%20id='filter0_d_109_169'%20x='0'%20y='0'%20width='40.853'%20height='79'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_109_169'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_109_169'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",
  xy =
    "data:image/svg+xml,%3csvg%20width='41'%20height='79'%20viewBox='0%200%2041%2079'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_109_174)'%3e%3cpath%20d='M4%2035.5C4%2055.1061%204.89388%2071%2024.5%2071C44.1061%2071%2034.5%2055.1061%2034.5%2035.5C34.5%2015.8939%2044.1061%200%2024.5%200C4.89388%200%204%2015.8939%204%2035.5Z'%20fill='%23D9D9D9'/%3e%3c/g%3e%3cline%20y1='-1'%20x2='25.7574'%20y2='-1'%20transform='matrix(-0.707107%200.707107%200.707107%200.707107%2027.8159%2018.6683)'%20stroke='black'%20stroke-width='2'/%3e%3cline%20y1='-1'%20x2='25.7574'%20y2='-1'%20transform='matrix(-0.707107%20-0.707107%20-0.707107%200.707107%2027.3606%2054.6395)'%20stroke='black'%20stroke-width='2'/%3e%3cdefs%3e%3cfilter%20id='filter0_d_109_174'%20x='0'%20y='0'%20width='40.853'%20height='79'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_109_174'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_109_174'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",
  lh = ul(() =>
    R.jsxs("footer", {
      className: Ic.footer,
      children: [
        R.jsx(Ut, {
          handleClick: () => ue.prevCard(),
          image: xy,
          isAnimate: !1,
        }),
        " ",
        R.jsx("div", {
          className: Ic.footer_info,
          children:
            ue.roleList.length > 0 &&
            R.jsxs(R.Fragment, {
              children: [ue.indexRole + 1, " / ", ue.roleList.length],
            }),
        }),
        "  ",
        R.jsx(Ut, {
          handleClick: () => ue.nextCard(),
          image: Sy,
          isAnimate: !1,
        }),
      ],
    })
  ),
  Ey = "_modal_1eint_1",
  Oy = "_close_button_1eint_35",
  Bc = { modal: Ey, close_button: Oy },
  ky =
    "data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='10.5668'%20y1='10.6464'%20x2='31.78'%20y2='31.8596'%20stroke='white'%20stroke-width='3'/%3e%3cline%20x1='10.5459'%20y1='31.7591'%20x2='31.7591'%20y2='10.5459'%20stroke='white'%20stroke-width='3'/%3e%3c/svg%3e",
  Cy =
    "data:image/svg+xml,%3csvg%20width='30px'%20height='30px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M4%2012H20M12%204V20'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",
  Py =
    "data:image/svg+xml,%3csvg%20width='20'%20height='3'%20viewBox='0%200%2020%203'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20y1='1.5'%20x2='20'%20y2='1.5'%20stroke='white'%20stroke-width='3'/%3e%3c/svg%3e",
  Ay = "_input_wrapper_57mts_1",
  Ry = { input_wrapper: Ay },
  Ny = ["Маньяк", "Мафия", "Мирный", "Коммисар", "Красотка", "Врач"],
  jy = ul(({ title: e, id: t }) =>
    R.jsxs("div", {
      className: Ry.input_wrapper,
      children: [
        R.jsx("select", {
          onChange: (n) => ue.editRoleList(n.target.value, t),
          defaultValue: e,
          children: Ny.map((n) =>
            R.jsx("option", { value: n, children: n }, n)
          ),
        }),
        R.jsx(Ut, {
          handleClick: () => {
            ue.deleteRoleList(t);
          },
          image: Py,
          isAnimate: !1,
        }),
      ],
    })
  );
function Ly(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function Ty(e, t) {
  return (
    e.forEach((n) => {
      if (n.id === t) return !0;
    }),
    !1
  );
}
function My(e) {
  let t = Ly(1, 1e3);
  if (!Ty(e, t)) return t;
}
const uh = ul(() =>
    ue.isModalShown
      ? R.jsxs("div", {
          className: Bc.modal,
          children: [
            R.jsx("div", {
              className: Bc.close_button,
              children: R.jsx(Ut, {
                image: ky,
                isAnimate: !0,
                handleClick: () => {
                  ue.setIsmodalShown();
                },
              }),
            }),
            ue.roleList.map((e) =>
              R.jsx(
                C.Fragment,
                { children: R.jsx(jy, { id: e.id, title: e.title }) },
                e.id
              )
            ),
            R.jsx(Ut, {
              handleClick: () => {
                const e = My(Ju(ue.roleList));
                ue.addRoleList({
                  id: e,
                  title: "Мирный",
                  img: "./cards/Мирный.png",
                });
              },
              image: Cy,
              isAnimate: !1,
            }),
          ],
        })
      : R.jsx(R.Fragment, {})
  ),
  zy = "_cards_list_560hg_1",
  Dy = "_card_item_560hg_19",
  $c = { cards_list: zy, card_item: Dy },
  Iy =
    "data:image/svg+xml,%3csvg%20width='56'%20height='37'%20viewBox='0%200%2086%2067'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2043.3333C4%2043.3333%2011.8%2018.75%2043%2018.75M43%2018.75C74.2%2018.75%2082%2043.3333%2082%2043.3333M43%2018.75V4M72.25%208.91667L62.5%2021.2083M13.75%208.91667L23.5%2021.2083M57.625%2048.25C57.625%2056.3964%2051.0774%2063%2043%2063C34.9226%2063%2028.375%2056.3964%2028.375%2048.25C28.375%2040.1036%2034.9226%2033.5%2043%2033.5C51.0774%2033.5%2057.625%2040.1036%2057.625%2048.25Z'%20stroke='black'%20stroke-opacity='0.7'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  By =
    "data:image/svg+xml,%3csvg%20width='56'%20height='37'%20viewBox='0%200%20140%2074'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.66675%204.33325C4.66675%204.33325%2017.8001%2045.3749%2070.3334%2045.3749M70.3334%2045.3749C122.867%2045.3749%20136%204.33325%20136%204.33325M70.3334%2045.3749V69.9999M119.583%2061.7915L103.167%2041.2707M21.0834%2061.7915L37.5001%2041.2707'%20stroke='black'%20stroke-opacity='0.7'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  $y = ul(() => {
    const [e, t] = C.useState(!0);
    return R.jsxs("section", {
      className: $c.cards_list,
      children: [
        R.jsx(Ut, {
          handleClick: () => t(!e),
          image: e ? Iy : By,
          isAnimate: !1,
        }),
        e &&
          R.jsx("div", {
            className: $c.card_item,
            children: R.jsx("img", {
              src: ue.currentCard.img,
              alt: ue.currentCard.title,
            }),
          }),
      ],
    });
  }),
  Fy =
    "data:image/svg+xml,%3csvg%20width='44px'%20height='44px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20clip-path='url(%23clip0_429_11067)'%3e%3cpath%20d='M15%204.00098H5V18.001C5%2019.1055%205.89543%2020.001%207%2020.001H15'%20stroke='%23ffffff'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M16%2015.001L19%2012.001M19%2012.001L16%209.00098M19%2012.001H9'%20stroke='%23ffffff'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_429_11067'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0%200.000976562)'%3e%3c/rect%3e%3c/clipPath%3e%3c/defs%3e%3c/g%3e%3c/svg%3e";
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ei() {
  return (
    (ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ei.apply(this, arguments)
  );
}
var Rt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Rt || (Rt = {}));
const Fc = "popstate";
function Uy(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: l = "/",
      search: u = "",
      hash: s = "",
    } = _n(i.location.hash.substr(1));
    return (
      !l.startsWith("/") && !l.startsWith(".") && (l = "/" + l),
      ts(
        "",
        { pathname: l, search: u, hash: s },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function n(i, o) {
    let l = i.document.querySelector("base"),
      u = "";
    if (l && l.getAttribute("href")) {
      let s = i.location.href,
        a = s.indexOf("#");
      u = a === -1 ? s : s.slice(0, a);
    }
    return u + "#" + (typeof o == "string" ? o : sh(o));
  }
  function r(i, o) {
    sa(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return by(t, n, r, e);
}
function te(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function sa(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Vy() {
  return Math.random().toString(36).substr(2, 8);
}
function Uc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ts(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ei(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? _n(t) : t,
      { state: n, key: (t && t.key) || r || Vy() }
    )
  );
}
function sh(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function _n(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function by(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    u = Rt.Pop,
    s = null,
    a = c();
  a == null && ((a = 0), l.replaceState(ei({}, l.state, { idx: a }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    u = Rt.Pop;
    let S = c(),
      p = S == null ? null : S - a;
    (a = S), s && s({ action: u, location: y.location, delta: p });
  }
  function v(S, p) {
    u = Rt.Push;
    let f = ts(y.location, S, p);
    n && n(f, S), (a = c() + 1);
    let h = Uc(f, a),
      m = y.createHref(f);
    try {
      l.pushState(h, "", m);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      i.location.assign(m);
    }
    o && s && s({ action: u, location: y.location, delta: 1 });
  }
  function g(S, p) {
    u = Rt.Replace;
    let f = ts(y.location, S, p);
    n && n(f, S), (a = c());
    let h = Uc(f, a),
      m = y.createHref(f);
    l.replaceState(h, "", m),
      o && s && s({ action: u, location: y.location, delta: 0 });
  }
  function _(S) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof S == "string" ? S : sh(S);
    return (
      (f = f.replace(/ $/, "%20")),
      te(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(i, l);
    },
    listen(S) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Fc, d),
        (s = S),
        () => {
          i.removeEventListener(Fc, d), (s = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: _,
    encodeLocation(S) {
      let p = _(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: v,
    replace: g,
    go(S) {
      return l.go(S);
    },
  };
  return y;
}
var Vc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Vc || (Vc = {}));
function Wy(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? _n(t) : t,
    i = fh(r.pathname || "/", n);
  if (i == null) return null;
  let o = ah(e);
  Hy(o);
  let l = null;
  for (let u = 0; l == null && u < o.length; ++u) {
    let s = r_(i);
    l = e_(o[u], s);
  }
  return l;
}
function ah(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (te(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = rn([r, s.relativePath]),
      c = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (te(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      ah(o.children, t, c, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Zy(a, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, l) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) i(o, l);
      else for (let s of ch(o.path)) i(o, l, s);
    }),
    t
  );
}
function ch(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = ch(r.join("/")),
    u = [];
  return (
    u.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && u.push(...l),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Hy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : qy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Ky = /^:[\w-]+$/,
  Gy = 3,
  Qy = 2,
  Yy = 1,
  Xy = 10,
  Jy = -2,
  bc = (e) => e === "*";
function Zy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bc) && (r += Jy),
    t && (r += Qy),
    n
      .filter((i) => !bc(i))
      .reduce((i, o) => i + (Ky.test(o) ? Gy : o === "" ? Yy : Xy), r)
  );
}
function qy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function e_(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      s = l === n.length - 1,
      a = i === "/" ? t : t.slice(i.length) || "/",
      c = t_(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = u.route;
    o.push({
      params: r,
      pathname: rn([i, c.pathname]),
      pathnameBase: a_(rn([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = rn([i, c.pathnameBase]));
  }
  return o;
}
function t_(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = n_(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    u = i.slice(1);
  return {
    params: r.reduce((a, c, d) => {
      let { paramName: v, isOptional: g } = c;
      if (v === "*") {
        let y = u[d] || "";
        l = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const _ = u[d];
      return (
        g && !_ ? (a[v] = void 0) : (a[v] = (_ || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function n_(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    sa(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function r_(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      sa(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function fh(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function i_(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? _n(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : o_(n, t)) : t,
    search: c_(r),
    hash: f_(i),
  };
}
function o_(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ql(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function l_(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function u_(e, t) {
  let n = l_(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function s_(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = _n(e))
    : ((i = ei({}, e)),
      te(
        !i.pathname || !i.pathname.includes("?"),
        Ql("?", "pathname", "search", i)
      ),
      te(
        !i.pathname || !i.pathname.includes("#"),
        Ql("#", "pathname", "hash", i)
      ),
      te(!i.search || !i.search.includes("#"), Ql("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    u;
  if (l == null) u = n;
  else {
    let d = t.length - 1;
    if (!r && l.startsWith("..")) {
      let v = l.split("/");
      for (; v[0] === ".."; ) v.shift(), (d -= 1);
      i.pathname = v.join("/");
    }
    u = d >= 0 ? t[d] : "/";
  }
  let s = i_(i, u),
    a = l && l !== "/" && l.endsWith("/"),
    c = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || c) && (s.pathname += "/"), s;
}
const rn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  a_ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  c_ = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  f_ = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function d_(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const dh = ["post", "put", "patch", "delete"];
new Set(dh);
const p_ = ["get", ...dh];
new Set(p_);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ti() {
  return (
    (ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ti.apply(this, arguments)
  );
}
const aa = C.createContext(null),
  h_ = C.createContext(null),
  sl = C.createContext(null),
  al = C.createContext(null),
  ur = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ph = C.createContext(null);
function cl() {
  return C.useContext(al) != null;
}
function hh() {
  return cl() || te(!1), C.useContext(al).location;
}
function vh(e) {
  C.useContext(sl).static || C.useLayoutEffect(e);
}
function ca() {
  let { isDataRoute: e } = C.useContext(ur);
  return e ? P_() : v_();
}
function v_() {
  cl() || te(!1);
  let e = C.useContext(aa),
    { basename: t, future: n, navigator: r } = C.useContext(sl),
    { matches: i } = C.useContext(ur),
    { pathname: o } = hh(),
    l = JSON.stringify(u_(i, n.v7_relativeSplatPath)),
    u = C.useRef(!1);
  return (
    vh(() => {
      u.current = !0;
    }),
    C.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !u.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let d = s_(a, JSON.parse(l), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : rn([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, l, o, e]
    )
  );
}
function m_(e, t) {
  return g_(e, t);
}
function g_(e, t, n, r) {
  cl() || te(!1);
  let { navigator: i } = C.useContext(sl),
    { matches: o } = C.useContext(ur),
    l = o[o.length - 1],
    u = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let a = hh(),
    c;
  if (t) {
    var d;
    let S = typeof t == "string" ? _n(t) : t;
    s === "/" || ((d = S.pathname) != null && d.startsWith(s)) || te(!1),
      (c = S);
  } else c = a;
  let v = c.pathname || "/",
    g = v;
  if (s !== "/") {
    let S = s.replace(/^\//, "").split("/");
    g = "/" + v.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let _ = Wy(e, { pathname: g }),
    y = x_(
      _ &&
        _.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, u, S.params),
            pathname: rn([
              s,
              i.encodeLocation
                ? i.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? s
                : rn([
                    s,
                    i.encodeLocation
                      ? i.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && y
    ? C.createElement(
        al.Provider,
        {
          value: {
            location: ti(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Rt.Pop,
          },
        },
        y
      )
    : y;
}
function y_() {
  let e = C_(),
    t = d_(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    null
  );
}
const __ = C.createElement(y_, null);
class w_ extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          ur.Provider,
          { value: this.props.routeContext },
          C.createElement(ph.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function S_(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(aa);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(ur.Provider, { value: t }, r)
  );
}
function x_(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    u = (i = n) == null ? void 0 : i.errors;
  if (u != null) {
    let c = l.findIndex(
      (d) => d.route.id && (u == null ? void 0 : u[d.route.id]) !== void 0
    );
    c >= 0 || te(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let d = l[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (a = c),
        d.route.id)
      ) {
        let { loaderData: v, errors: g } = n,
          _ =
            d.route.loader &&
            v[d.route.id] === void 0 &&
            (!g || g[d.route.id] === void 0);
        if (d.route.lazy || _) {
          (s = !0), a >= 0 ? (l = l.slice(0, a + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, d, v) => {
    let g,
      _ = !1,
      y = null,
      S = null;
    n &&
      ((g = u && d.route.id ? u[d.route.id] : void 0),
      (y = d.route.errorElement || __),
      s &&
        (a < 0 && v === 0
          ? ((_ = !0), (S = null))
          : a === v &&
            ((_ = !0), (S = d.route.hydrateFallbackElement || null))));
    let p = t.concat(l.slice(0, v + 1)),
      f = () => {
        let h;
        return (
          g
            ? (h = y)
            : _
            ? (h = S)
            : d.route.Component
            ? (h = C.createElement(d.route.Component, null))
            : d.route.element
            ? (h = d.route.element)
            : (h = c),
          C.createElement(S_, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || v === 0)
      ? C.createElement(w_, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: g,
          children: f(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var mh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(mh || {}),
  $o = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })($o || {});
function E_(e) {
  let t = C.useContext(aa);
  return t || te(!1), t;
}
function O_(e) {
  let t = C.useContext(h_);
  return t || te(!1), t;
}
function k_(e) {
  let t = C.useContext(ur);
  return t || te(!1), t;
}
function gh(e) {
  let t = k_(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || te(!1), n.route.id;
}
function C_() {
  var e;
  let t = C.useContext(ph),
    n = O_($o.UseRouteError),
    r = gh($o.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function P_() {
  let { router: e } = E_(mh.UseNavigateStable),
    t = gh($o.UseNavigateStable),
    n = C.useRef(!1);
  return (
    vh(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ti({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function xr(e) {
  te(!1);
}
function A_(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Rt.Pop,
    navigator: o,
    static: l = !1,
    future: u,
  } = e;
  cl() && te(!1);
  let s = t.replace(/^\/*/, "/"),
    a = C.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: l,
        future: ti({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, o, l]
    );
  typeof r == "string" && (r = _n(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: v = "",
      state: g = null,
      key: _ = "default",
    } = r,
    y = C.useMemo(() => {
      let S = fh(c, s);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: v, state: g, key: _ },
            navigationType: i,
          };
    }, [s, c, d, v, g, _, i]);
  return y == null
    ? null
    : C.createElement(
        sl.Provider,
        { value: a },
        C.createElement(al.Provider, { children: n, value: y })
      );
}
function R_(e) {
  let { children: t, location: n } = e;
  return m_(ns(t), n);
}
new Promise(() => {});
function ns(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, ns(r.props.children, o));
        return;
      }
      r.type !== xr && te(!1), !r.props.index || !r.props.children || te(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = ns(r.props.children, o)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const N_ = "6";
try {
  window.__reactRouterVersion = N_;
} catch {}
const j_ = "startTransition",
  Wc = Bh[j_];
function L_(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = C.useRef();
  o.current == null && (o.current = Uy({ window: i, v5Compat: !0 }));
  let l = o.current,
    [u, s] = C.useState({ action: l.action, location: l.location }),
    { v7_startTransition: a } = r || {},
    c = C.useCallback(
      (d) => {
        a && Wc ? Wc(() => s(d)) : s(d);
      },
      [s, a]
    );
  return (
    C.useLayoutEffect(() => l.listen(c), [l, c]),
    C.createElement(A_, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: l,
      future: r,
    })
  );
}
var Hc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Hc || (Hc = {}));
var Kc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Kc || (Kc = {}));
function T_() {
  const e = ca(),
    t = () => {
      e("/");
    };
  return R.jsxs("div", {
    className: Sc.main,
    children: [
      R.jsx("div", {
        className: Sc.button_exit,
        children: R.jsx(Ut, { handleClick: t, isAnimate: !1, image: Fy }),
      }),
      R.jsx($y, {}),
      R.jsx(uh, {}),
      R.jsx(lh, {}),
    ],
  });
}
const M_ = "_main_z6wnk_1",
  z_ = { main: M_ },
  D_ = () => {
    const e = ca(),
      t = () => {
        ue.roleList.length > 0 && (ue.randomizeRoles(), e("/game"));
      };
    return R.jsx("main", {
      className: z_.main,
      children: R.jsx(nh, {
        handleClick: t,
        isAnimate: !1,
        width: 339,
        height: 71,
        text: "Начать",
      }),
    });
  },
  I_ = "_main_usiqs_1",
  B_ = { main: I_ },
  $_ = "_header_qfoh2_1",
  F_ = "_empty_qfoh2_13",
  Gc = { header: $_, empty: F_ },
  U_ = "" + new URL("settings-BaqLODpS.svg", import.meta.url).href;
function V_() {
  const e = ca(),
    t = () => {
      ue.setIsmodalShown();
    },
    n = () => {
      e("/rules");
    };
  return R.jsxs("header", {
    className: Gc.header,
    children: [
      R.jsx("div", { className: Gc.empty }),
      R.jsx(nh, { handleClick: n, width: 187, height: 39, text: "правила" }),
      R.jsx(Ut, { isAnimate: !0, handleClick: t, image: U_ }),
    ],
  });
}
function b_() {
  return R.jsxs("div", {
    className: B_.main,
    children: [R.jsx(V_, {}), R.jsx(D_, {}), R.jsx(uh, {}), R.jsx(lh, {})],
  });
}
function W_() {
  return R.jsx("main", { children: R.jsx("h1", { children: "Правила" }) });
}
function H_() {
  return R.jsx(R.Fragment, {
    children: R.jsx(L_, {
      children: R.jsxs(R_, {
        children: [
          R.jsx(xr, { element: R.jsx(b_, {}), path: "/" }),
          R.jsx(xr, { path: "/rules", element: R.jsx(W_, {}) }),
          R.jsx(xr, { path: "/game", element: R.jsx(T_, {}) }),
          R.jsx(xr, { path: "*", element: R.jsx(Y0, {}) }),
        ],
      }),
    }),
  });
}
Yl.createRoot(document.getElementById("root")).render(
  R.jsx(ro.StrictMode, { children: R.jsx(H_, {}) })
);
