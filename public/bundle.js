var __defProp = Object.defineProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b3) => (typeof require !== "undefined" ? require : a)[b3]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// deno:https://esm.sh/react@18
var react_18_exports = {};
__export(react_18_exports, {
  Children: () => ae,
  Component: () => pe,
  Fragment: () => ye,
  Profiler: () => de,
  PureComponent: () => _e,
  StrictMode: () => me,
  Suspense: () => he,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ve,
  cloneElement: () => Se,
  createContext: () => Ee,
  createElement: () => Re,
  createFactory: () => Ce,
  createRef: () => ke,
  default: () => We,
  forwardRef: () => we,
  isValidElement: () => be,
  lazy: () => $e,
  memo: () => xe,
  startTransition: () => Oe,
  unstable_act: () => je,
  useCallback: () => Ie,
  useContext: () => ge,
  useDebugValue: () => Pe,
  useDeferredValue: () => Te,
  useEffect: () => De,
  useId: () => Ve,
  useImperativeHandle: () => Le,
  useInsertionEffect: () => Ne,
  useLayoutEffect: () => Fe,
  useMemo: () => Ue,
  useReducer: () => qe,
  useRef: () => Ae,
  useState: () => Me,
  useSyncExternalStore: () => ze,
  useTransition: () => Be,
  version: () => He
});

// deno:https://esm.sh/stable/react@18.2.0/deno/react.js
var U = Object.create;
var C = Object.defineProperty;
var q = Object.getOwnPropertyDescriptor;
var A = Object.getOwnPropertyNames;
var M = Object.getPrototypeOf;
var z = Object.prototype.hasOwnProperty;
var k = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var B = (e, t, r2, o2) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let u2 of A(t))
      !z.call(e, u2) && u2 !== r2 && C(e, u2, { get: () => t[u2], enumerable: !(o2 = q(t, u2)) || o2.enumerable });
  return e;
};
var H = (e, t, r2) => (r2 = e != null ? U(M(e)) : {}, B(t || !e || !e.__esModule ? C(r2, "default", { value: e, enumerable: true }) : r2, e));
var D = k((n) => {
  "use strict";
  var y2 = Symbol.for("react.element"), W2 = Symbol.for("react.portal"), Y3 = Symbol.for("react.fragment"), G3 = Symbol.for("react.strict_mode"), J3 = Symbol.for("react.profiler"), K4 = Symbol.for("react.provider"), Q3 = Symbol.for("react.context"), X3 = Symbol.for("react.forward_ref"), Z3 = Symbol.for("react.suspense"), ee3 = Symbol.for("react.memo"), te3 = Symbol.for("react.lazy"), w2 = Symbol.iterator;
  function re2(e) {
    return e === null || typeof e != "object" ? null : (e = w2 && e[w2] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var x2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O2 = Object.assign, j2 = {};
  function p(e, t, r2) {
    this.props = e, this.context = t, this.refs = j2, this.updater = r2 || x2;
  }
  p.prototype.isReactComponent = {};
  p.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  p.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function I3() {
  }
  I3.prototype = p.prototype;
  function v2(e, t, r2) {
    this.props = e, this.context = t, this.refs = j2, this.updater = r2 || x2;
  }
  var S3 = v2.prototype = new I3();
  S3.constructor = v2;
  O2(S3, p.prototype);
  S3.isPureReactComponent = true;
  var b3 = Array.isArray, g = Object.prototype.hasOwnProperty, E = { current: null }, P = { key: true, ref: true, __self: true, __source: true };
  function T3(e, t, r2) {
    var o2, u2 = {}, c = null, f2 = null;
    if (t != null)
      for (o2 in t.ref !== void 0 && (f2 = t.ref), t.key !== void 0 && (c = "" + t.key), t)
        g.call(t, o2) && !P.hasOwnProperty(o2) && (u2[o2] = t[o2]);
    var i2 = arguments.length - 2;
    if (i2 === 1)
      u2.children = r2;
    else if (1 < i2) {
      for (var s2 = Array(i2), a = 0; a < i2; a++)
        s2[a] = arguments[a + 2];
      u2.children = s2;
    }
    if (e && e.defaultProps)
      for (o2 in i2 = e.defaultProps, i2)
        u2[o2] === void 0 && (u2[o2] = i2[o2]);
    return { $$typeof: y2, type: e, key: c, ref: f2, props: u2, _owner: E.current };
  }
  function ne3(e, t) {
    return { $$typeof: y2, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function R3(e) {
    return typeof e == "object" && e !== null && e.$$typeof === y2;
  }
  function ue2(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(r2) {
      return t[r2];
    });
  }
  var $4 = /\/+/g;
  function h2(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ue2("" + e.key) : t.toString(36);
  }
  function _2(e, t, r2, o2, u2) {
    var c = typeof e;
    (c === "undefined" || c === "boolean") && (e = null);
    var f2 = false;
    if (e === null)
      f2 = true;
    else
      switch (c) {
        case "string":
        case "number":
          f2 = true;
          break;
        case "object":
          switch (e.$$typeof) {
            case y2:
            case W2:
              f2 = true;
          }
      }
    if (f2)
      return f2 = e, u2 = u2(f2), e = o2 === "" ? "." + h2(f2, 0) : o2, b3(u2) ? (r2 = "", e != null && (r2 = e.replace($4, "$&/") + "/"), _2(u2, t, r2, "", function(a) {
        return a;
      })) : u2 != null && (R3(u2) && (u2 = ne3(u2, r2 + (!u2.key || f2 && f2.key === u2.key ? "" : ("" + u2.key).replace($4, "$&/") + "/") + e)), t.push(u2)), 1;
    if (f2 = 0, o2 = o2 === "" ? "." : o2 + ":", b3(e))
      for (var i2 = 0; i2 < e.length; i2++) {
        c = e[i2];
        var s2 = o2 + h2(c, i2);
        f2 += _2(c, t, r2, s2, u2);
      }
    else if (s2 = re2(e), typeof s2 == "function")
      for (e = s2.call(e), i2 = 0; !(c = e.next()).done; )
        c = c.value, s2 = o2 + h2(c, i2++), f2 += _2(c, t, r2, s2, u2);
    else if (c === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return f2;
  }
  function d3(e, t, r2) {
    if (e == null)
      return e;
    var o2 = [], u2 = 0;
    return _2(e, o2, "", "", function(c) {
      return t.call(r2, c, u2++);
    }), o2;
  }
  function oe3(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(r2) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r2);
      }, function(r2) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r2);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var l = { current: null }, m2 = { transition: null }, se3 = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: m2, ReactCurrentOwner: E };
  n.Children = { map: d3, forEach: function(e, t, r2) {
    d3(e, function() {
      t.apply(this, arguments);
    }, r2);
  }, count: function(e) {
    var t = 0;
    return d3(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return d3(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!R3(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  n.Component = p;
  n.Fragment = Y3;
  n.Profiler = J3;
  n.PureComponent = v2;
  n.StrictMode = G3;
  n.Suspense = Z3;
  n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se3;
  n.cloneElement = function(e, t, r2) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var o2 = O2({}, e.props), u2 = e.key, c = e.ref, f2 = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (c = t.ref, f2 = E.current), t.key !== void 0 && (u2 = "" + t.key), e.type && e.type.defaultProps)
        var i2 = e.type.defaultProps;
      for (s2 in t)
        g.call(t, s2) && !P.hasOwnProperty(s2) && (o2[s2] = t[s2] === void 0 && i2 !== void 0 ? i2[s2] : t[s2]);
    }
    var s2 = arguments.length - 2;
    if (s2 === 1)
      o2.children = r2;
    else if (1 < s2) {
      i2 = Array(s2);
      for (var a = 0; a < s2; a++)
        i2[a] = arguments[a + 2];
      o2.children = i2;
    }
    return { $$typeof: y2, type: e.type, key: u2, ref: c, props: o2, _owner: f2 };
  };
  n.createContext = function(e) {
    return e = { $$typeof: Q3, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: K4, _context: e }, e.Consumer = e;
  };
  n.createElement = T3;
  n.createFactory = function(e) {
    var t = T3.bind(null, e);
    return t.type = e, t;
  };
  n.createRef = function() {
    return { current: null };
  };
  n.forwardRef = function(e) {
    return { $$typeof: X3, render: e };
  };
  n.isValidElement = R3;
  n.lazy = function(e) {
    return { $$typeof: te3, _payload: { _status: -1, _result: e }, _init: oe3 };
  };
  n.memo = function(e, t) {
    return { $$typeof: ee3, type: e, compare: t === void 0 ? null : t };
  };
  n.startTransition = function(e) {
    var t = m2.transition;
    m2.transition = {};
    try {
      e();
    } finally {
      m2.transition = t;
    }
  };
  n.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  n.useCallback = function(e, t) {
    return l.current.useCallback(e, t);
  };
  n.useContext = function(e) {
    return l.current.useContext(e);
  };
  n.useDebugValue = function() {
  };
  n.useDeferredValue = function(e) {
    return l.current.useDeferredValue(e);
  };
  n.useEffect = function(e, t) {
    return l.current.useEffect(e, t);
  };
  n.useId = function() {
    return l.current.useId();
  };
  n.useImperativeHandle = function(e, t, r2) {
    return l.current.useImperativeHandle(e, t, r2);
  };
  n.useInsertionEffect = function(e, t) {
    return l.current.useInsertionEffect(e, t);
  };
  n.useLayoutEffect = function(e, t) {
    return l.current.useLayoutEffect(e, t);
  };
  n.useMemo = function(e, t) {
    return l.current.useMemo(e, t);
  };
  n.useReducer = function(e, t, r2) {
    return l.current.useReducer(e, t, r2);
  };
  n.useRef = function(e) {
    return l.current.useRef(e);
  };
  n.useState = function(e) {
    return l.current.useState(e);
  };
  n.useSyncExternalStore = function(e, t, r2) {
    return l.current.useSyncExternalStore(e, t, r2);
  };
  n.useTransition = function() {
    return l.current.useTransition();
  };
  n.version = "18.2.0";
});
var L = k((le3, V2) => {
  "use strict";
  V2.exports = D();
});
var F = H(L());
var { Children: ae, Component: pe, Fragment: ye, Profiler: de, PureComponent: _e, StrictMode: me, Suspense: he, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ve, cloneElement: Se, createContext: Ee, createElement: Re, createFactory: Ce, createRef: ke, forwardRef: we, isValidElement: be, lazy: $e, memo: xe, startTransition: Oe, unstable_act: je, useCallback: Ie, useContext: ge, useDebugValue: Pe, useDeferredValue: Te, useEffect: De, useId: Ve, useImperativeHandle: Le, useInsertionEffect: Ne, useLayoutEffect: Fe, useMemo: Ue, useReducer: qe, useRef: Ae, useState: Me, useSyncExternalStore: ze, useTransition: Be, version: He } = F;
var { default: N, ...ce } = F;
var We = N !== void 0 ? N : ce;

// deno:https://esm.sh/react-dom@18
var react_dom_18_exports = {};
__export(react_dom_18_exports, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Mf,
  createPortal: () => Df,
  createRoot: () => Of,
  default: () => Wf,
  findDOMNode: () => Rf,
  flushSync: () => Ff,
  hydrate: () => If,
  hydrateRoot: () => Uf,
  render: () => jf,
  unmountComponentAtNode: () => Vf,
  unstable_batchedUpdates: () => Af,
  unstable_renderSubtreeIntoContainer: () => Bf,
  version: () => Hf
});

// deno:https://esm.sh/v99/scheduler@0.23.0/deno/scheduler.js
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);
var U2 = Object.create;
var R = Object.defineProperty;
var X = Object.getOwnPropertyDescriptor;
var Z = Object.getOwnPropertyNames;
var $ = Object.getPrototypeOf;
var ee = Object.prototype.hasOwnProperty;
var B2 = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var ne = (e, n, t, l) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let i2 of Z(n))
      !ee.call(e, i2) && i2 !== t && R(e, i2, { get: () => n[i2], enumerable: !(l = X(n, i2)) || l.enumerable });
  return e;
};
var te = (e, n, t) => (t = e != null ? U2($(e)) : {}, ne(n || !e || !e.__esModule ? R(t, "default", { value: e, enumerable: true }) : t, e));
var J = B2((r2) => {
  "use strict";
  function T3(e, n) {
    var t = e.length;
    e.push(n);
    e:
      for (; 0 < t; ) {
        var l = t - 1 >>> 1, i2 = e[l];
        if (0 < g(i2, n))
          e[l] = n, e[t] = i2, t = l;
        else
          break e;
      }
  }
  function o2(e) {
    return e.length === 0 ? null : e[0];
  }
  function k3(e) {
    if (e.length === 0)
      return null;
    var n = e[0], t = e.pop();
    if (t !== n) {
      e[0] = t;
      e:
        for (var l = 0, i2 = e.length, y2 = i2 >>> 1; l < y2; ) {
          var f2 = 2 * (l + 1) - 1, x2 = e[f2], b3 = f2 + 1, m2 = e[b3];
          if (0 > g(x2, t))
            b3 < i2 && 0 > g(m2, x2) ? (e[l] = m2, e[b3] = t, l = b3) : (e[l] = x2, e[f2] = t, l = f2);
          else if (b3 < i2 && 0 > g(m2, t))
            e[l] = m2, e[b3] = t, l = b3;
          else
            break e;
        }
    }
    return n;
  }
  function g(e, n) {
    var t = e.sortIndex - n.sortIndex;
    return t !== 0 ? t : e.id - n.id;
  }
  typeof performance == "object" && typeof performance.now == "function" ? (D3 = performance, r2.unstable_now = function() {
    return D3.now();
  }) : (I3 = Date, q3 = I3.now(), r2.unstable_now = function() {
    return I3.now() - q3;
  });
  var D3, I3, q3, s2 = [], c = [], re2 = 1, a = null, u2 = 3, P = false, _2 = false, p = false, Y3 = typeof setTimeout == "function" ? setTimeout : null, z2 = typeof clearTimeout == "function" ? clearTimeout : null, O2 = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function L3(e) {
    for (var n = o2(c); n !== null; ) {
      if (n.callback === null)
        k3(c);
      else if (n.startTime <= e)
        k3(c), n.sortIndex = n.expirationTime, T3(s2, n);
      else
        break;
      n = o2(c);
    }
  }
  function N2(e) {
    if (p = false, L3(e), !_2)
      if (o2(s2) !== null)
        _2 = true, M5(F4);
      else {
        var n = o2(c);
        n !== null && j2(N2, n.startTime - e);
      }
  }
  function F4(e, n) {
    _2 = false, p && (p = false, z2(v2), v2 = -1), P = true;
    var t = u2;
    try {
      for (L3(n), a = o2(s2); a !== null && (!(a.expirationTime > n) || e && !H2()); ) {
        var l = a.callback;
        if (typeof l == "function") {
          a.callback = null, u2 = a.priorityLevel;
          var i2 = l(a.expirationTime <= n);
          n = r2.unstable_now(), typeof i2 == "function" ? a.callback = i2 : a === o2(s2) && k3(s2), L3(n);
        } else
          k3(s2);
        a = o2(s2);
      }
      if (a !== null)
        var y2 = true;
      else {
        var f2 = o2(c);
        f2 !== null && j2(N2, f2.startTime - n), y2 = false;
      }
      return y2;
    } finally {
      a = null, u2 = t, P = false;
    }
  }
  var w2 = false, h2 = null, v2 = -1, A2 = 5, G3 = -1;
  function H2() {
    return !(r2.unstable_now() - G3 < A2);
  }
  function C2() {
    if (h2 !== null) {
      var e = r2.unstable_now();
      G3 = e;
      var n = true;
      try {
        n = h2(true, e);
      } finally {
        n ? d3() : (w2 = false, h2 = null);
      }
    } else
      w2 = false;
  }
  var d3;
  typeof O2 == "function" ? d3 = function() {
    O2(C2);
  } : typeof MessageChannel < "u" ? (E = new MessageChannel(), W2 = E.port2, E.port1.onmessage = C2, d3 = function() {
    W2.postMessage(null);
  }) : d3 = function() {
    Y3(C2, 0);
  };
  var E, W2;
  function M5(e) {
    h2 = e, w2 || (w2 = true, d3());
  }
  function j2(e, n) {
    v2 = Y3(function() {
      e(r2.unstable_now());
    }, n);
  }
  r2.unstable_IdlePriority = 5;
  r2.unstable_ImmediatePriority = 1;
  r2.unstable_LowPriority = 4;
  r2.unstable_NormalPriority = 3;
  r2.unstable_Profiling = null;
  r2.unstable_UserBlockingPriority = 2;
  r2.unstable_cancelCallback = function(e) {
    e.callback = null;
  };
  r2.unstable_continueExecution = function() {
    _2 || P || (_2 = true, M5(F4));
  };
  r2.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A2 = 0 < e ? Math.floor(1e3 / e) : 5;
  };
  r2.unstable_getCurrentPriorityLevel = function() {
    return u2;
  };
  r2.unstable_getFirstCallbackNode = function() {
    return o2(s2);
  };
  r2.unstable_next = function(e) {
    switch (u2) {
      case 1:
      case 2:
      case 3:
        var n = 3;
        break;
      default:
        n = u2;
    }
    var t = u2;
    u2 = n;
    try {
      return e();
    } finally {
      u2 = t;
    }
  };
  r2.unstable_pauseExecution = function() {
  };
  r2.unstable_requestPaint = function() {
  };
  r2.unstable_runWithPriority = function(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var t = u2;
    u2 = e;
    try {
      return n();
    } finally {
      u2 = t;
    }
  };
  r2.unstable_scheduleCallback = function(e, n, t) {
    var l = r2.unstable_now();
    switch (typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l + t : l) : t = l, e) {
      case 1:
        var i2 = -1;
        break;
      case 2:
        i2 = 250;
        break;
      case 5:
        i2 = 1073741823;
        break;
      case 4:
        i2 = 1e4;
        break;
      default:
        i2 = 5e3;
    }
    return i2 = t + i2, e = { id: re2++, callback: n, priorityLevel: e, startTime: t, expirationTime: i2, sortIndex: -1 }, t > l ? (e.sortIndex = t, T3(c, e), o2(s2) === null && e === o2(c) && (p ? (z2(v2), v2 = -1) : p = true, j2(N2, t - l))) : (e.sortIndex = i2, T3(s2, e), _2 || P || (_2 = true, M5(F4))), e;
  };
  r2.unstable_shouldYield = H2;
  r2.unstable_wrapCallback = function(e) {
    var n = u2;
    return function() {
      var t = u2;
      u2 = n;
      try {
        return e.apply(this, arguments);
      } finally {
        u2 = t;
      }
    };
  };
});
var Q = B2((ae3, K4) => {
  "use strict";
  K4.exports = J();
});
var V = te(Q());
var { unstable_now: oe, unstable_IdlePriority: se, unstable_ImmediatePriority: ce2, unstable_LowPriority: fe, unstable_NormalPriority: be2, unstable_Profiling: _e2, unstable_UserBlockingPriority: de2, unstable_cancelCallback: pe2, unstable_continueExecution: ve2, unstable_forceFrameRate: ye2, unstable_getCurrentPriorityLevel: me2, unstable_getFirstCallbackNode: ge2, unstable_next: he2, unstable_pauseExecution: ke2, unstable_requestPaint: Pe2, unstable_runWithPriority: we2, unstable_scheduleCallback: xe2, unstable_shouldYield: Ie2, unstable_wrapCallback: Ce2 } = V;
var { default: S, ...le } = V;
var Ee2 = S !== void 0 ? S : le;

// deno:https://esm.sh/v99/react-dom@18.2.0/deno/react-dom.js
var wa = Object.create;
var ru = Object.defineProperty;
var Sa = Object.getOwnPropertyDescriptor;
var ka = Object.getOwnPropertyNames;
var Ea = Object.getPrototypeOf;
var Ca = Object.prototype.hasOwnProperty;
var lu = ((e) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e, { get: (n, t) => (typeof __require < "u" ? __require : n)[t] }) : e)(function(e) {
  if (typeof __require < "u")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var iu = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var xa = (e, n, t, r2) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let l of ka(n))
      !Ca.call(e, l) && l !== t && ru(e, l, { get: () => n[l], enumerable: !(r2 = Sa(n, l)) || r2.enumerable });
  return e;
};
var Na = (e, n, t) => (t = e != null ? wa(Ea(e)) : {}, xa(n || !e || !e.__esModule ? ru(t, "default", { value: e, enumerable: true }) : t, e));
var da = iu((fe3) => {
  "use strict";
  var po = We, ae3 = Ee2;
  function v2(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var mo = /* @__PURE__ */ new Set(), gt = {};
  function Sn(e, n) {
    Hn(e, n), Hn(e + "Capture", n);
  }
  function Hn(e, n) {
    for (gt[e] = n, e = 0; e < n.length; e++)
      mo.add(n[e]);
  }
  var Fe2 = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kl = Object.prototype.hasOwnProperty, _a = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, uu = {}, ou = {};
  function za(e) {
    return kl.call(ou, e) ? true : kl.call(uu, e) ? false : _a.test(e) ? ou[e] = true : (uu[e] = true, false);
  }
  function Pa(e, n, t, r2) {
    if (t !== null && t.type === 0)
      return false;
    switch (typeof n) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r2 ? false : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function La(e, n, t, r2) {
    if (n === null || typeof n > "u" || Pa(e, n, t, r2))
      return true;
    if (r2)
      return false;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === false;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return false;
  }
  function ee3(e, n, t, r2, l, i2, u2) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r2, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i2, this.removeEmptyString = u2;
  }
  var Y3 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Y3[e] = new ee3(e, 0, false, e, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    Y3[n] = new ee3(n, 1, false, e[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Y3[e] = new ee3(e, 2, false, e.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Y3[e] = new ee3(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Y3[e] = new ee3(e, 3, false, e.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Y3[e] = new ee3(e, 3, true, e, null, false, false);
  });
  ["capture", "download"].forEach(function(e) {
    Y3[e] = new ee3(e, 4, false, e, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    Y3[e] = new ee3(e, 6, false, e, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(e) {
    Y3[e] = new ee3(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var pi = /[\-:]([a-z])/g;
  function mi(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(pi, mi);
    Y3[n] = new ee3(n, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(pi, mi);
    Y3[n] = new ee3(n, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(pi, mi);
    Y3[n] = new ee3(n, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    Y3[e] = new ee3(e, 1, false, e.toLowerCase(), null, false, false);
  });
  Y3.xlinkHref = new ee3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    Y3[e] = new ee3(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function hi(e, n, t, r2) {
    var l = Y3.hasOwnProperty(n) ? Y3[n] : null;
    (l !== null ? l.type !== 0 : r2 || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (La(n, t, l, r2) && (t = null), r2 || l === null ? za(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? false : "" : t : (n = l.attributeName, r2 = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === true ? "" : "" + t, r2 ? e.setAttributeNS(r2, n, t) : e.setAttribute(n, t))));
  }
  var Ve3 = po.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vt = Symbol.for("react.element"), xn = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), vi = Symbol.for("react.strict_mode"), El = Symbol.for("react.profiler"), ho = Symbol.for("react.provider"), vo = Symbol.for("react.context"), yi = Symbol.for("react.forward_ref"), Cl = Symbol.for("react.suspense"), xl = Symbol.for("react.suspense_list"), gi = Symbol.for("react.memo"), He2 = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  Symbol.for("react.debug_trace_mode");
  var yo = Symbol.for("react.offscreen");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.cache");
  Symbol.for("react.tracing_marker");
  var su = Symbol.iterator;
  function Jn(e) {
    return e === null || typeof e != "object" ? null : (e = su && e[su] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F4 = Object.assign, br;
  function it(e) {
    if (br === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        br = n && n[1] || "";
      }
    return `
` + br + e;
  }
  var el = false;
  function nl(e, n) {
    if (!e || el)
      return "";
    el = true;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (d3) {
            var r2 = d3;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (d3) {
            r2 = d3;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (d3) {
          r2 = d3;
        }
        e();
      }
    } catch (d3) {
      if (d3 && r2 && typeof d3.stack == "string") {
        for (var l = d3.stack.split(`
`), i2 = r2.stack.split(`
`), u2 = l.length - 1, o2 = i2.length - 1; 1 <= u2 && 0 <= o2 && l[u2] !== i2[o2]; )
          o2--;
        for (; 1 <= u2 && 0 <= o2; u2--, o2--)
          if (l[u2] !== i2[o2]) {
            if (u2 !== 1 || o2 !== 1)
              do
                if (u2--, o2--, 0 > o2 || l[u2] !== i2[o2]) {
                  var s2 = `
` + l[u2].replace(" at new ", " at ");
                  return e.displayName && s2.includes("<anonymous>") && (s2 = s2.replace("<anonymous>", e.displayName)), s2;
                }
              while (1 <= u2 && 0 <= o2);
            break;
          }
      }
    } finally {
      el = false, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? it(e) : "";
  }
  function Ta(e) {
    switch (e.tag) {
      case 5:
        return it(e.type);
      case 16:
        return it("Lazy");
      case 13:
        return it("Suspense");
      case 19:
        return it("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = nl(e.type, false), e;
      case 11:
        return e = nl(e.type.render, false), e;
      case 1:
        return e = nl(e.type, true), e;
      default:
        return "";
    }
  }
  function Nl(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Nn:
        return "Fragment";
      case xn:
        return "Portal";
      case El:
        return "Profiler";
      case vi:
        return "StrictMode";
      case Cl:
        return "Suspense";
      case xl:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case vo:
          return (e.displayName || "Context") + ".Consumer";
        case ho:
          return (e._context.displayName || "Context") + ".Provider";
        case yi:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case gi:
          return n = e.displayName || null, n !== null ? n : Nl(e.type) || "Memo";
        case He2:
          n = e._payload, e = e._init;
          try {
            return Nl(e(n));
          } catch {
          }
      }
    return null;
  }
  function Ma(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Nl(n);
      case 8:
        return n === vi ? "StrictMode" : "Mode";
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
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
    }
    return null;
  }
  function tn(e) {
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
  function go(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Da(e) {
    var n = go(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r2 = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, i2 = t.set;
      return Object.defineProperty(e, n, { configurable: true, get: function() {
        return l.call(this);
      }, set: function(u2) {
        r2 = "" + u2, i2.call(this, u2);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r2;
      }, setValue: function(u2) {
        r2 = "" + u2;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function At(e) {
    e._valueTracker || (e._valueTracker = Da(e));
  }
  function wo(e) {
    if (!e)
      return false;
    var n = e._valueTracker;
    if (!n)
      return true;
    var t = n.getValue(), r2 = "";
    return e && (r2 = go(e) ? e.checked ? "true" : "false" : e.value), e = r2, e !== t ? (n.setValue(e), true) : false;
  }
  function mr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function _l(e, n) {
    var t = n.checked;
    return F4({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function au(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r2 = n.checked != null ? n.checked : n.defaultChecked;
    t = tn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r2, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function So(e, n) {
    n = n.checked, n != null && hi(e, "checked", n, false);
  }
  function zl(e, n) {
    So(e, n);
    var t = tn(n.value), r2 = n.type;
    if (t != null)
      r2 === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r2 === "submit" || r2 === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Pl(e, n.type, t) : n.hasOwnProperty("defaultValue") && Pl(e, n.type, tn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function cu(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r2 = n.type;
      if (!(r2 !== "submit" && r2 !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Pl(e, n, t) {
    (n !== "number" || mr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var ut = Array.isArray;
  function In(e, n, t, r2) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++)
        n["$" + t[l]] = true;
      for (t = 0; t < e.length; t++)
        l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r2 && (e[t].defaultSelected = true);
    } else {
      for (t = "" + tn(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = true, r2 && (e[l].defaultSelected = true);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = true);
    }
  }
  function Ll(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(v2(91));
    return F4({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function fu(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null)
          throw Error(v2(92));
        if (ut(t)) {
          if (1 < t.length)
            throw Error(v2(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: tn(t) };
  }
  function ko(e, n) {
    var t = tn(n.value), r2 = tn(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r2 != null && (e.defaultValue = "" + r2);
  }
  function du(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Eo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Tl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Eo(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Bt, Co = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r2, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r2, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (Bt = Bt || document.createElement("div"), Bt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Bt.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function wt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var at = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Oa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(at).forEach(function(e) {
    Oa.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), at[n] = at[e];
    });
  });
  function xo(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || at.hasOwnProperty(e) && at[e] ? ("" + n).trim() : n + "px";
  }
  function No(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r2 = t.indexOf("--") === 0, l = xo(t, n[t], r2);
        t === "float" && (t = "cssFloat"), r2 ? e.setProperty(t, l) : e[t] = l;
      }
  }
  var Ra = F4({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function Ml(e, n) {
    if (n) {
      if (Ra[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(v2(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(v2(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(v2(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(v2(62));
    }
  }
  function Dl(e, n) {
    if (e.indexOf("-") === -1)
      return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Ol = null;
  function wi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Rl = null, Un = null, jn = null;
  function pu(e) {
    if (e = Ut(e)) {
      if (typeof Rl != "function")
        throw Error(v2(280));
      var n = e.stateNode;
      n && (n = Hr(n), Rl(e.stateNode, e.type, n));
    }
  }
  function _o(e) {
    Un ? jn ? jn.push(e) : jn = [e] : Un = e;
  }
  function zo() {
    if (Un) {
      var e = Un, n = jn;
      if (jn = Un = null, pu(e), n)
        for (e = 0; e < n.length; e++)
          pu(n[e]);
    }
  }
  function Po(e, n) {
    return e(n);
  }
  function Lo() {
  }
  var tl = false;
  function To(e, n, t) {
    if (tl)
      return e(n, t);
    tl = true;
    try {
      return Po(e, n, t);
    } finally {
      tl = false, (Un !== null || jn !== null) && (Lo(), zo());
    }
  }
  function St(e, n) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r2 = Hr(t);
    if (r2 === null)
      return null;
    t = r2[n];
    e:
      switch (n) {
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
          (r2 = !r2.disabled) || (e = e.type, r2 = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r2;
          break e;
        default:
          e = false;
      }
    if (e)
      return null;
    if (t && typeof t != "function")
      throw Error(v2(231, n, typeof t));
    return t;
  }
  var Fl = false;
  if (Fe2)
    try {
      En = {}, Object.defineProperty(En, "passive", { get: function() {
        Fl = true;
      } }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
    } catch {
      Fl = false;
    }
  var En;
  function Fa(e, n, t, r2, l, i2, u2, o2, s2) {
    var d3 = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, d3);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var ct = false, hr = null, vr = false, Il = null, Ia = { onError: function(e) {
    ct = true, hr = e;
  } };
  function Ua(e, n, t, r2, l, i2, u2, o2, s2) {
    ct = false, hr = null, Fa.apply(Ia, arguments);
  }
  function ja(e, n, t, r2, l, i2, u2, o2, s2) {
    if (Ua.apply(this, arguments), ct) {
      if (ct) {
        var d3 = hr;
        ct = false, hr = null;
      } else
        throw Error(v2(198));
      vr || (vr = true, Il = d3);
    }
  }
  function kn(e) {
    var n = e, t = e;
    if (e.alternate)
      for (; n.return; )
        n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Mo(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function mu(e) {
    if (kn(e) !== e)
      throw Error(v2(188));
  }
  function Va(e) {
    var n = e.alternate;
    if (!n) {
      if (n = kn(e), n === null)
        throw Error(v2(188));
      return n !== e ? null : e;
    }
    for (var t = e, r2 = n; ; ) {
      var l = t.return;
      if (l === null)
        break;
      var i2 = l.alternate;
      if (i2 === null) {
        if (r2 = l.return, r2 !== null) {
          t = r2;
          continue;
        }
        break;
      }
      if (l.child === i2.child) {
        for (i2 = l.child; i2; ) {
          if (i2 === t)
            return mu(l), e;
          if (i2 === r2)
            return mu(l), n;
          i2 = i2.sibling;
        }
        throw Error(v2(188));
      }
      if (t.return !== r2.return)
        t = l, r2 = i2;
      else {
        for (var u2 = false, o2 = l.child; o2; ) {
          if (o2 === t) {
            u2 = true, t = l, r2 = i2;
            break;
          }
          if (o2 === r2) {
            u2 = true, r2 = l, t = i2;
            break;
          }
          o2 = o2.sibling;
        }
        if (!u2) {
          for (o2 = i2.child; o2; ) {
            if (o2 === t) {
              u2 = true, t = i2, r2 = l;
              break;
            }
            if (o2 === r2) {
              u2 = true, r2 = i2, t = l;
              break;
            }
            o2 = o2.sibling;
          }
          if (!u2)
            throw Error(v2(189));
        }
      }
      if (t.alternate !== r2)
        throw Error(v2(190));
    }
    if (t.tag !== 3)
      throw Error(v2(188));
    return t.stateNode.current === t ? e : n;
  }
  function Do(e) {
    return e = Va(e), e !== null ? Oo(e) : null;
  }
  function Oo(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = Oo(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var Ro = ae3.unstable_scheduleCallback, hu = ae3.unstable_cancelCallback, Aa = ae3.unstable_shouldYield, Ba = ae3.unstable_requestPaint, j2 = ae3.unstable_now, Ha = ae3.unstable_getCurrentPriorityLevel, Si = ae3.unstable_ImmediatePriority, Fo = ae3.unstable_UserBlockingPriority, yr = ae3.unstable_NormalPriority, Wa = ae3.unstable_LowPriority, Io = ae3.unstable_IdlePriority, jr = null, Pe4 = null;
  function Qa(e) {
    if (Pe4 && typeof Pe4.onCommitFiberRoot == "function")
      try {
        Pe4.onCommitFiberRoot(jr, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ee4 = Math.clz32 ? Math.clz32 : Ya, $a = Math.log, Ka = Math.LN2;
  function Ya(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - ($a(e) / Ka | 0) | 0;
  }
  var Ht = 64, Wt = 4194304;
  function ot(e) {
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
  function gr(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r2 = 0, l = e.suspendedLanes, i2 = e.pingedLanes, u2 = t & 268435455;
    if (u2 !== 0) {
      var o2 = u2 & ~l;
      o2 !== 0 ? r2 = ot(o2) : (i2 &= u2, i2 !== 0 && (r2 = ot(i2)));
    } else
      u2 = t & ~l, u2 !== 0 ? r2 = ot(u2) : i2 !== 0 && (r2 = ot(i2));
    if (r2 === 0)
      return 0;
    if (n !== 0 && n !== r2 && (n & l) === 0 && (l = r2 & -r2, i2 = n & -n, l >= i2 || l === 16 && (i2 & 4194240) !== 0))
      return n;
    if ((r2 & 4) !== 0 && (r2 |= t & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= r2; 0 < n; )
        t = 31 - Ee4(n), l = 1 << t, r2 |= e[t], n &= ~l;
    return r2;
  }
  function Xa(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
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
  function Ga(e, n) {
    for (var t = e.suspendedLanes, r2 = e.pingedLanes, l = e.expirationTimes, i2 = e.pendingLanes; 0 < i2; ) {
      var u2 = 31 - Ee4(i2), o2 = 1 << u2, s2 = l[u2];
      s2 === -1 ? ((o2 & t) === 0 || (o2 & r2) !== 0) && (l[u2] = Xa(o2, n)) : s2 <= n && (e.expiredLanes |= o2), i2 &= ~o2;
    }
  }
  function Ul(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Uo() {
    var e = Ht;
    return Ht <<= 1, (Ht & 4194240) === 0 && (Ht = 64), e;
  }
  function rl(e) {
    for (var n = [], t = 0; 31 > t; t++)
      n.push(e);
    return n;
  }
  function Ft(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Ee4(n), e[n] = t;
  }
  function Za(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r2 = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - Ee4(t), i2 = 1 << l;
      n[l] = 0, r2[l] = -1, e[l] = -1, t &= ~i2;
    }
  }
  function ki(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r2 = 31 - Ee4(t), l = 1 << r2;
      l & n | e[r2] & n && (e[r2] |= n), t &= ~l;
    }
  }
  var P = 0;
  function jo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Vo, Ei, Ao, Bo, Ho, jl = false, Qt = [], Xe = null, Ge = null, Ze = null, kt = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), Qe = [], Ja = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function vu(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xe = null;
        break;
      case "dragenter":
      case "dragleave":
        Ge = null;
        break;
      case "mouseover":
      case "mouseout":
        Ze = null;
        break;
      case "pointerover":
      case "pointerout":
        kt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Et.delete(n.pointerId);
    }
  }
  function qn(e, n, t, r2, l, i2) {
    return e === null || e.nativeEvent !== i2 ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r2, nativeEvent: i2, targetContainers: [l] }, n !== null && (n = Ut(n), n !== null && Ei(n)), e) : (e.eventSystemFlags |= r2, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function qa(e, n, t, r2, l) {
    switch (n) {
      case "focusin":
        return Xe = qn(Xe, e, n, t, r2, l), true;
      case "dragenter":
        return Ge = qn(Ge, e, n, t, r2, l), true;
      case "mouseover":
        return Ze = qn(Ze, e, n, t, r2, l), true;
      case "pointerover":
        var i2 = l.pointerId;
        return kt.set(i2, qn(kt.get(i2) || null, e, n, t, r2, l)), true;
      case "gotpointercapture":
        return i2 = l.pointerId, Et.set(i2, qn(Et.get(i2) || null, e, n, t, r2, l)), true;
    }
    return false;
  }
  function Wo(e) {
    var n = cn(e.target);
    if (n !== null) {
      var t = kn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Mo(t), n !== null) {
            e.blockedOn = n, Ho(e.priority, function() {
              Ao(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function lr(e) {
    if (e.blockedOn !== null)
      return false;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Vl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r2 = new t.constructor(t.type, t);
        Ol = r2, t.target.dispatchEvent(r2), Ol = null;
      } else
        return n = Ut(t), n !== null && Ei(n), e.blockedOn = t, false;
      n.shift();
    }
    return true;
  }
  function yu(e, n, t) {
    lr(e) && t.delete(n);
  }
  function ba() {
    jl = false, Xe !== null && lr(Xe) && (Xe = null), Ge !== null && lr(Ge) && (Ge = null), Ze !== null && lr(Ze) && (Ze = null), kt.forEach(yu), Et.forEach(yu);
  }
  function bn(e, n) {
    e.blockedOn === n && (e.blockedOn = null, jl || (jl = true, ae3.unstable_scheduleCallback(ae3.unstable_NormalPriority, ba)));
  }
  function Ct(e) {
    function n(l) {
      return bn(l, e);
    }
    if (0 < Qt.length) {
      bn(Qt[0], e);
      for (var t = 1; t < Qt.length; t++) {
        var r2 = Qt[t];
        r2.blockedOn === e && (r2.blockedOn = null);
      }
    }
    for (Xe !== null && bn(Xe, e), Ge !== null && bn(Ge, e), Ze !== null && bn(Ze, e), kt.forEach(n), Et.forEach(n), t = 0; t < Qe.length; t++)
      r2 = Qe[t], r2.blockedOn === e && (r2.blockedOn = null);
    for (; 0 < Qe.length && (t = Qe[0], t.blockedOn === null); )
      Wo(t), t.blockedOn === null && Qe.shift();
  }
  var Vn = Ve3.ReactCurrentBatchConfig, wr = true;
  function ec(e, n, t, r2) {
    var l = P, i2 = Vn.transition;
    Vn.transition = null;
    try {
      P = 1, Ci(e, n, t, r2);
    } finally {
      P = l, Vn.transition = i2;
    }
  }
  function nc(e, n, t, r2) {
    var l = P, i2 = Vn.transition;
    Vn.transition = null;
    try {
      P = 4, Ci(e, n, t, r2);
    } finally {
      P = l, Vn.transition = i2;
    }
  }
  function Ci(e, n, t, r2) {
    if (wr) {
      var l = Vl(e, n, t, r2);
      if (l === null)
        cl(e, n, r2, Sr, t), vu(e, r2);
      else if (qa(l, e, n, t, r2))
        r2.stopPropagation();
      else if (vu(e, r2), n & 4 && -1 < Ja.indexOf(e)) {
        for (; l !== null; ) {
          var i2 = Ut(l);
          if (i2 !== null && Vo(i2), i2 = Vl(e, n, t, r2), i2 === null && cl(e, n, r2, Sr, t), i2 === l)
            break;
          l = i2;
        }
        l !== null && r2.stopPropagation();
      } else
        cl(e, n, r2, null, t);
    }
  }
  var Sr = null;
  function Vl(e, n, t, r2) {
    if (Sr = null, e = wi(r2), e = cn(e), e !== null)
      if (n = kn(e), n === null)
        e = null;
      else if (t = n.tag, t === 13) {
        if (e = Mo(n), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return Sr = e, null;
  }
  function Qo(e) {
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
        switch (Ha()) {
          case Si:
            return 1;
          case Fo:
            return 4;
          case yr:
          case Wa:
            return 16;
          case Io:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ke = null, xi = null, ir = null;
  function $o() {
    if (ir)
      return ir;
    var e, n = xi, t = n.length, r2, l = "value" in Ke ? Ke.value : Ke.textContent, i2 = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++)
      ;
    var u2 = t - e;
    for (r2 = 1; r2 <= u2 && n[t - r2] === l[i2 - r2]; r2++)
      ;
    return ir = l.slice(e, 1 < r2 ? 1 - r2 : void 0);
  }
  function ur(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function $t() {
    return true;
  }
  function gu() {
    return false;
  }
  function ce4(e) {
    function n(t, r2, l, i2, u2) {
      this._reactName = t, this._targetInst = l, this.type = r2, this.nativeEvent = i2, this.target = u2, this.currentTarget = null;
      for (var o2 in e)
        e.hasOwnProperty(o2) && (t = e[o2], this[o2] = t ? t(i2) : i2[o2]);
      return this.isDefaultPrevented = (i2.defaultPrevented != null ? i2.defaultPrevented : i2.returnValue === false) ? $t : gu, this.isPropagationStopped = gu, this;
    }
    return F4(n.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = $t);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = $t);
    }, persist: function() {
    }, isPersistent: $t }), n;
  }
  var Gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ni = ce4(Gn), It = F4({}, Gn, { view: 0, detail: 0 }), tc = ce4(It), ll, il, et, Vr = F4({}, It, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _i, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== et && (et && e.type === "mousemove" ? (ll = e.screenX - et.screenX, il = e.screenY - et.screenY) : il = ll = 0, et = e), ll);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : il;
  } }), wu = ce4(Vr), rc = F4({}, Vr, { dataTransfer: 0 }), lc = ce4(rc), ic = F4({}, It, { relatedTarget: 0 }), ul = ce4(ic), uc = F4({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = ce4(uc), sc = F4({}, Gn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ac = ce4(sc), cc = F4({}, Gn, { data: 0 }), Su = ce4(cc), fc = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, dc = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, pc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function mc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = pc[e]) ? !!n[e] : false;
  }
  function _i() {
    return mc;
  }
  var hc = F4({}, It, { key: function(e) {
    if (e.key) {
      var n = fc[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = ur(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _i, charCode: function(e) {
    return e.type === "keypress" ? ur(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), vc = ce4(hc), yc = F4({}, Vr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ku = ce4(yc), gc = F4({}, It, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _i }), wc = ce4(gc), Sc = F4({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), kc = ce4(Sc), Ec = F4({}, Vr, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Cc = ce4(Ec), xc = [9, 13, 27, 32], zi = Fe2 && "CompositionEvent" in window, ft = null;
  Fe2 && "documentMode" in document && (ft = document.documentMode);
  var Nc = Fe2 && "TextEvent" in window && !ft, Ko = Fe2 && (!zi || ft && 8 < ft && 11 >= ft), Eu = String.fromCharCode(32), Cu = false;
  function Yo(e, n) {
    switch (e) {
      case "keyup":
        return xc.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Xo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var _n = false;
  function _c(e, n) {
    switch (e) {
      case "compositionend":
        return Xo(n);
      case "keypress":
        return n.which !== 32 ? null : (Cu = true, Eu);
      case "textInput":
        return e = n.data, e === Eu && Cu ? null : e;
      default:
        return null;
    }
  }
  function zc(e, n) {
    if (_n)
      return e === "compositionend" || !zi && Yo(e, n) ? (e = $o(), ir = xi = Ke = null, _n = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which)
            return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Ko && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Pc = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function xu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Pc[e.type] : n === "textarea";
  }
  function Go(e, n, t, r2) {
    _o(r2), n = kr(n, "onChange"), 0 < n.length && (t = new Ni("onChange", "change", null, t, r2), e.push({ event: t, listeners: n }));
  }
  var dt = null, xt = null;
  function Lc(e) {
    us(e, 0);
  }
  function Ar(e) {
    var n = Ln(e);
    if (wo(n))
      return e;
  }
  function Tc(e, n) {
    if (e === "change")
      return n;
  }
  var Zo = false;
  Fe2 && (Fe2 ? (Yt = "oninput" in document, Yt || (ol = document.createElement("div"), ol.setAttribute("oninput", "return;"), Yt = typeof ol.oninput == "function"), Kt = Yt) : Kt = false, Zo = Kt && (!document.documentMode || 9 < document.documentMode));
  var Kt, Yt, ol;
  function Nu() {
    dt && (dt.detachEvent("onpropertychange", Jo), xt = dt = null);
  }
  function Jo(e) {
    if (e.propertyName === "value" && Ar(xt)) {
      var n = [];
      Go(n, xt, e, wi(e)), To(Lc, n);
    }
  }
  function Mc(e, n, t) {
    e === "focusin" ? (Nu(), dt = n, xt = t, dt.attachEvent("onpropertychange", Jo)) : e === "focusout" && Nu();
  }
  function Dc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ar(xt);
  }
  function Oc(e, n) {
    if (e === "click")
      return Ar(n);
  }
  function Rc(e, n) {
    if (e === "input" || e === "change")
      return Ar(n);
  }
  function Fc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var xe4 = typeof Object.is == "function" ? Object.is : Fc;
  function Nt(e, n) {
    if (xe4(e, n))
      return true;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return false;
    var t = Object.keys(e), r2 = Object.keys(n);
    if (t.length !== r2.length)
      return false;
    for (r2 = 0; r2 < t.length; r2++) {
      var l = t[r2];
      if (!kl.call(n, l) || !xe4(e[l], n[l]))
        return false;
    }
    return true;
  }
  function _u(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function zu(e, n) {
    var t = _u(e);
    e = 0;
    for (var r2; t; ) {
      if (t.nodeType === 3) {
        if (r2 = e + t.textContent.length, e <= n && r2 >= n)
          return { node: t, offset: n - e };
        e = r2;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = _u(t);
    }
  }
  function qo(e, n) {
    return e && n ? e === n ? true : e && e.nodeType === 3 ? false : n && n.nodeType === 3 ? qo(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : false : false;
  }
  function bo() {
    for (var e = window, n = mr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = false;
      }
      if (t)
        e = n.contentWindow;
      else
        break;
      n = mr(e.document);
    }
    return n;
  }
  function Pi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Ic(e) {
    var n = bo(), t = e.focusedElem, r2 = e.selectionRange;
    if (n !== t && t && t.ownerDocument && qo(t.ownerDocument.documentElement, t)) {
      if (r2 !== null && Pi(t)) {
        if (n = r2.start, e = r2.end, e === void 0 && (e = n), "selectionStart" in t)
          t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, i2 = Math.min(r2.start, l);
          r2 = r2.end === void 0 ? i2 : Math.min(r2.end, l), !e.extend && i2 > r2 && (l = r2, r2 = i2, i2 = l), l = zu(t, i2);
          var u2 = zu(t, r2);
          l && u2 && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u2.node || e.focusOffset !== u2.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), i2 > r2 ? (e.addRange(n), e.extend(u2.node, u2.offset)) : (n.setEnd(u2.node, u2.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Uc = Fe2 && "documentMode" in document && 11 >= document.documentMode, zn = null, Al = null, pt = null, Bl = false;
  function Pu(e, n, t) {
    var r2 = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Bl || zn == null || zn !== mr(r2) || (r2 = zn, "selectionStart" in r2 && Pi(r2) ? r2 = { start: r2.selectionStart, end: r2.selectionEnd } : (r2 = (r2.ownerDocument && r2.ownerDocument.defaultView || window).getSelection(), r2 = { anchorNode: r2.anchorNode, anchorOffset: r2.anchorOffset, focusNode: r2.focusNode, focusOffset: r2.focusOffset }), pt && Nt(pt, r2) || (pt = r2, r2 = kr(Al, "onSelect"), 0 < r2.length && (n = new Ni("onSelect", "select", null, n, t), e.push({ event: n, listeners: r2 }), n.target = zn)));
  }
  function Xt(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var Pn = { animationend: Xt("Animation", "AnimationEnd"), animationiteration: Xt("Animation", "AnimationIteration"), animationstart: Xt("Animation", "AnimationStart"), transitionend: Xt("Transition", "TransitionEnd") }, sl = {}, es = {};
  Fe2 && (es = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
  function Br(e) {
    if (sl[e])
      return sl[e];
    if (!Pn[e])
      return e;
    var n = Pn[e], t;
    for (t in n)
      if (n.hasOwnProperty(t) && t in es)
        return sl[e] = n[t];
    return e;
  }
  var ns = Br("animationend"), ts = Br("animationiteration"), rs = Br("animationstart"), ls = Br("transitionend"), is = /* @__PURE__ */ new Map(), Lu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ln(e, n) {
    is.set(e, n), Sn(n, [e]);
  }
  for (Gt = 0; Gt < Lu.length; Gt++)
    Zt = Lu[Gt], Tu = Zt.toLowerCase(), Mu = Zt[0].toUpperCase() + Zt.slice(1), ln(Tu, "on" + Mu);
  var Zt, Tu, Mu, Gt;
  ln(ns, "onAnimationEnd");
  ln(ts, "onAnimationIteration");
  ln(rs, "onAnimationStart");
  ln("dblclick", "onDoubleClick");
  ln("focusin", "onFocus");
  ln("focusout", "onBlur");
  ln(ls, "onTransitionEnd");
  Hn("onMouseEnter", ["mouseout", "mouseover"]);
  Hn("onMouseLeave", ["mouseout", "mouseover"]);
  Hn("onPointerEnter", ["pointerout", "pointerover"]);
  Hn("onPointerLeave", ["pointerout", "pointerover"]);
  Sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var st = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jc = new Set("cancel close invalid load scroll toggle".split(" ").concat(st));
  function Du(e, n, t) {
    var r2 = e.type || "unknown-event";
    e.currentTarget = t, ja(r2, n, void 0, e), e.currentTarget = null;
  }
  function us(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r2 = e[t], l = r2.event;
      r2 = r2.listeners;
      e: {
        var i2 = void 0;
        if (n)
          for (var u2 = r2.length - 1; 0 <= u2; u2--) {
            var o2 = r2[u2], s2 = o2.instance, d3 = o2.currentTarget;
            if (o2 = o2.listener, s2 !== i2 && l.isPropagationStopped())
              break e;
            Du(l, o2, d3), i2 = s2;
          }
        else
          for (u2 = 0; u2 < r2.length; u2++) {
            if (o2 = r2[u2], s2 = o2.instance, d3 = o2.currentTarget, o2 = o2.listener, s2 !== i2 && l.isPropagationStopped())
              break e;
            Du(l, o2, d3), i2 = s2;
          }
      }
    }
    if (vr)
      throw e = Il, vr = false, Il = null, e;
  }
  function T3(e, n) {
    var t = n[Kl];
    t === void 0 && (t = n[Kl] = /* @__PURE__ */ new Set());
    var r2 = e + "__bubble";
    t.has(r2) || (os(n, e, 2, false), t.add(r2));
  }
  function al(e, n, t) {
    var r2 = 0;
    n && (r2 |= 4), os(t, e, r2, n);
  }
  var Jt = "_reactListening" + Math.random().toString(36).slice(2);
  function _t(e) {
    if (!e[Jt]) {
      e[Jt] = true, mo.forEach(function(t) {
        t !== "selectionchange" && (jc.has(t) || al(t, false, e), al(t, true, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Jt] || (n[Jt] = true, al("selectionchange", false, n));
    }
  }
  function os(e, n, t, r2) {
    switch (Qo(n)) {
      case 1:
        var l = ec;
        break;
      case 4:
        l = nc;
        break;
      default:
        l = Ci;
    }
    t = l.bind(null, n, t, e), l = void 0, !Fl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = true), r2 ? l !== void 0 ? e.addEventListener(n, t, { capture: true, passive: l }) : e.addEventListener(n, t, true) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, false);
  }
  function cl(e, n, t, r2, l) {
    var i2 = r2;
    if ((n & 1) === 0 && (n & 2) === 0 && r2 !== null)
      e:
        for (; ; ) {
          if (r2 === null)
            return;
          var u2 = r2.tag;
          if (u2 === 3 || u2 === 4) {
            var o2 = r2.stateNode.containerInfo;
            if (o2 === l || o2.nodeType === 8 && o2.parentNode === l)
              break;
            if (u2 === 4)
              for (u2 = r2.return; u2 !== null; ) {
                var s2 = u2.tag;
                if ((s2 === 3 || s2 === 4) && (s2 = u2.stateNode.containerInfo, s2 === l || s2.nodeType === 8 && s2.parentNode === l))
                  return;
                u2 = u2.return;
              }
            for (; o2 !== null; ) {
              if (u2 = cn(o2), u2 === null)
                return;
              if (s2 = u2.tag, s2 === 5 || s2 === 6) {
                r2 = i2 = u2;
                continue e;
              }
              o2 = o2.parentNode;
            }
          }
          r2 = r2.return;
        }
    To(function() {
      var d3 = i2, m2 = wi(t), h2 = [];
      e: {
        var p = is.get(e);
        if (p !== void 0) {
          var g = Ni, S3 = e;
          switch (e) {
            case "keypress":
              if (ur(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              g = vc;
              break;
            case "focusin":
              S3 = "focus", g = ul;
              break;
            case "focusout":
              S3 = "blur", g = ul;
              break;
            case "beforeblur":
            case "afterblur":
              g = ul;
              break;
            case "click":
              if (t.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = wu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = lc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = wc;
              break;
            case ns:
            case ts:
            case rs:
              g = oc;
              break;
            case ls:
              g = kc;
              break;
            case "scroll":
              g = tc;
              break;
            case "wheel":
              g = Cc;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = ac;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = ku;
          }
          var k3 = (n & 4) !== 0, U4 = !k3 && e === "scroll", c = k3 ? p !== null ? p + "Capture" : null : p;
          k3 = [];
          for (var a = d3, f2; a !== null; ) {
            f2 = a;
            var y2 = f2.stateNode;
            if (f2.tag === 5 && y2 !== null && (f2 = y2, c !== null && (y2 = St(a, c), y2 != null && k3.push(zt(a, y2, f2)))), U4)
              break;
            a = a.return;
          }
          0 < k3.length && (p = new g(p, S3, null, t, m2), h2.push({ event: p, listeners: k3 }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== Ol && (S3 = t.relatedTarget || t.fromElement) && (cn(S3) || S3[Ie3]))
            break e;
          if ((g || p) && (p = m2.window === m2 ? m2 : (p = m2.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (S3 = t.relatedTarget || t.toElement, g = d3, S3 = S3 ? cn(S3) : null, S3 !== null && (U4 = kn(S3), S3 !== U4 || S3.tag !== 5 && S3.tag !== 6) && (S3 = null)) : (g = null, S3 = d3), g !== S3)) {
            if (k3 = wu, y2 = "onMouseLeave", c = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k3 = ku, y2 = "onPointerLeave", c = "onPointerEnter", a = "pointer"), U4 = g == null ? p : Ln(g), f2 = S3 == null ? p : Ln(S3), p = new k3(y2, a + "leave", g, t, m2), p.target = U4, p.relatedTarget = f2, y2 = null, cn(m2) === d3 && (k3 = new k3(c, a + "enter", S3, t, m2), k3.target = f2, k3.relatedTarget = U4, y2 = k3), U4 = y2, g && S3)
              n: {
                for (k3 = g, c = S3, a = 0, f2 = k3; f2; f2 = Cn(f2))
                  a++;
                for (f2 = 0, y2 = c; y2; y2 = Cn(y2))
                  f2++;
                for (; 0 < a - f2; )
                  k3 = Cn(k3), a--;
                for (; 0 < f2 - a; )
                  c = Cn(c), f2--;
                for (; a--; ) {
                  if (k3 === c || c !== null && k3 === c.alternate)
                    break n;
                  k3 = Cn(k3), c = Cn(c);
                }
                k3 = null;
              }
            else
              k3 = null;
            g !== null && Ou(h2, p, g, k3, false), S3 !== null && U4 !== null && Ou(h2, U4, S3, k3, true);
          }
        }
        e: {
          if (p = d3 ? Ln(d3) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
            var E = Tc;
          else if (xu(p))
            if (Zo)
              E = Rc;
            else {
              E = Dc;
              var C2 = Mc;
            }
          else
            (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Oc);
          if (E && (E = E(e, d3))) {
            Go(h2, E, t, m2);
            break e;
          }
          C2 && C2(e, p, d3), e === "focusout" && (C2 = p._wrapperState) && C2.controlled && p.type === "number" && Pl(p, "number", p.value);
        }
        switch (C2 = d3 ? Ln(d3) : window, e) {
          case "focusin":
            (xu(C2) || C2.contentEditable === "true") && (zn = C2, Al = d3, pt = null);
            break;
          case "focusout":
            pt = Al = zn = null;
            break;
          case "mousedown":
            Bl = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Bl = false, Pu(h2, t, m2);
            break;
          case "selectionchange":
            if (Uc)
              break;
          case "keydown":
          case "keyup":
            Pu(h2, t, m2);
        }
        var x2;
        if (zi)
          e: {
            switch (e) {
              case "compositionstart":
                var N2 = "onCompositionStart";
                break e;
              case "compositionend":
                N2 = "onCompositionEnd";
                break e;
              case "compositionupdate":
                N2 = "onCompositionUpdate";
                break e;
            }
            N2 = void 0;
          }
        else
          _n ? Yo(e, t) && (N2 = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (N2 = "onCompositionStart");
        N2 && (Ko && t.locale !== "ko" && (_n || N2 !== "onCompositionStart" ? N2 === "onCompositionEnd" && _n && (x2 = $o()) : (Ke = m2, xi = "value" in Ke ? Ke.value : Ke.textContent, _n = true)), C2 = kr(d3, N2), 0 < C2.length && (N2 = new Su(N2, e, null, t, m2), h2.push({ event: N2, listeners: C2 }), x2 ? N2.data = x2 : (x2 = Xo(t), x2 !== null && (N2.data = x2)))), (x2 = Nc ? _c(e, t) : zc(e, t)) && (d3 = kr(d3, "onBeforeInput"), 0 < d3.length && (m2 = new Su("onBeforeInput", "beforeinput", null, t, m2), h2.push({ event: m2, listeners: d3 }), m2.data = x2));
      }
      us(h2, n);
    });
  }
  function zt(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function kr(e, n) {
    for (var t = n + "Capture", r2 = []; e !== null; ) {
      var l = e, i2 = l.stateNode;
      l.tag === 5 && i2 !== null && (l = i2, i2 = St(e, t), i2 != null && r2.unshift(zt(e, i2, l)), i2 = St(e, n), i2 != null && r2.push(zt(e, i2, l))), e = e.return;
    }
    return r2;
  }
  function Cn(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ou(e, n, t, r2, l) {
    for (var i2 = n._reactName, u2 = []; t !== null && t !== r2; ) {
      var o2 = t, s2 = o2.alternate, d3 = o2.stateNode;
      if (s2 !== null && s2 === r2)
        break;
      o2.tag === 5 && d3 !== null && (o2 = d3, l ? (s2 = St(t, i2), s2 != null && u2.unshift(zt(t, s2, o2))) : l || (s2 = St(t, i2), s2 != null && u2.push(zt(t, s2, o2)))), t = t.return;
    }
    u2.length !== 0 && e.push({ event: n, listeners: u2 });
  }
  var Vc = /\r\n?/g, Ac = /\u0000|\uFFFD/g;
  function Ru(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vc, `
`).replace(Ac, "");
  }
  function qt(e, n, t) {
    if (n = Ru(n), Ru(e) !== n && t)
      throw Error(v2(425));
  }
  function Er() {
  }
  var Hl = null, Wl = null;
  function Ql(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var $l = typeof setTimeout == "function" ? setTimeout : void 0, Bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Fu = typeof Promise == "function" ? Promise : void 0, Hc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fu < "u" ? function(e) {
    return Fu.resolve(null).then(e).catch(Wc);
  } : $l;
  function Wc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function fl(e, n) {
    var t = n, r2 = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8)
        if (t = l.data, t === "/$") {
          if (r2 === 0) {
            e.removeChild(l), Ct(n);
            return;
          }
          r2--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r2++;
      t = l;
    } while (t);
    Ct(n);
  }
  function Je(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3)
        break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?")
          break;
        if (n === "/$")
          return null;
      }
    }
    return e;
  }
  function Iu(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0)
            return e;
          n--;
        } else
          t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Zn = Math.random().toString(36).slice(2), ze2 = "__reactFiber$" + Zn, Pt = "__reactProps$" + Zn, Ie3 = "__reactContainer$" + Zn, Kl = "__reactEvents$" + Zn, Qc = "__reactListeners$" + Zn, $c = "__reactHandles$" + Zn;
  function cn(e) {
    var n = e[ze2];
    if (n)
      return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[Ie3] || t[ze2]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
          for (e = Iu(e); e !== null; ) {
            if (t = e[ze2])
              return t;
            e = Iu(e);
          }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Ut(e) {
    return e = e[ze2] || e[Ie3], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ln(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(v2(33));
  }
  function Hr(e) {
    return e[Pt] || null;
  }
  var Yl = [], Tn = -1;
  function un(e) {
    return { current: e };
  }
  function M5(e) {
    0 > Tn || (e.current = Yl[Tn], Yl[Tn] = null, Tn--);
  }
  function L3(e, n) {
    Tn++, Yl[Tn] = e.current, e.current = n;
  }
  var rn = {}, J3 = un(rn), re2 = un(false), hn = rn;
  function Wn(e, n) {
    var t = e.type.contextTypes;
    if (!t)
      return rn;
    var r2 = e.stateNode;
    if (r2 && r2.__reactInternalMemoizedUnmaskedChildContext === n)
      return r2.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i2;
    for (i2 in t)
      l[i2] = n[i2];
    return r2 && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function le3(e) {
    return e = e.childContextTypes, e != null;
  }
  function Cr() {
    M5(re2), M5(J3);
  }
  function Uu(e, n, t) {
    if (J3.current !== rn)
      throw Error(v2(168));
    L3(J3, n), L3(re2, t);
  }
  function ss(e, n, t) {
    var r2 = e.stateNode;
    if (n = n.childContextTypes, typeof r2.getChildContext != "function")
      return t;
    r2 = r2.getChildContext();
    for (var l in r2)
      if (!(l in n))
        throw Error(v2(108, Ma(e) || "Unknown", l));
    return F4({}, t, r2);
  }
  function xr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rn, hn = J3.current, L3(J3, e), L3(re2, re2.current), true;
  }
  function ju(e, n, t) {
    var r2 = e.stateNode;
    if (!r2)
      throw Error(v2(169));
    t ? (e = ss(e, n, hn), r2.__reactInternalMemoizedMergedChildContext = e, M5(re2), M5(J3), L3(J3, e)) : M5(re2), L3(re2, t);
  }
  var Me2 = null, Wr = false, dl = false;
  function as(e) {
    Me2 === null ? Me2 = [e] : Me2.push(e);
  }
  function Kc(e) {
    Wr = true, as(e);
  }
  function on() {
    if (!dl && Me2 !== null) {
      dl = true;
      var e = 0, n = P;
      try {
        var t = Me2;
        for (P = 1; e < t.length; e++) {
          var r2 = t[e];
          do
            r2 = r2(true);
          while (r2 !== null);
        }
        Me2 = null, Wr = false;
      } catch (l) {
        throw Me2 !== null && (Me2 = Me2.slice(e + 1)), Ro(Si, on), l;
      } finally {
        P = n, dl = false;
      }
    }
    return null;
  }
  var Mn = [], Dn = 0, Nr = null, _r = 0, de4 = [], pe4 = 0, vn = null, De2 = 1, Oe3 = "";
  function sn(e, n) {
    Mn[Dn++] = _r, Mn[Dn++] = Nr, Nr = e, _r = n;
  }
  function cs(e, n, t) {
    de4[pe4++] = De2, de4[pe4++] = Oe3, de4[pe4++] = vn, vn = e;
    var r2 = De2;
    e = Oe3;
    var l = 32 - Ee4(r2) - 1;
    r2 &= ~(1 << l), t += 1;
    var i2 = 32 - Ee4(n) + l;
    if (30 < i2) {
      var u2 = l - l % 5;
      i2 = (r2 & (1 << u2) - 1).toString(32), r2 >>= u2, l -= u2, De2 = 1 << 32 - Ee4(n) + l | t << l | r2, Oe3 = i2 + e;
    } else
      De2 = 1 << i2 | t << l | r2, Oe3 = e;
  }
  function Li(e) {
    e.return !== null && (sn(e, 1), cs(e, 1, 0));
  }
  function Ti(e) {
    for (; e === Nr; )
      Nr = Mn[--Dn], Mn[Dn] = null, _r = Mn[--Dn], Mn[Dn] = null;
    for (; e === vn; )
      vn = de4[--pe4], de4[pe4] = null, Oe3 = de4[--pe4], de4[pe4] = null, De2 = de4[--pe4], de4[pe4] = null;
  }
  var se3 = null, oe3 = null, D3 = false, ke3 = null;
  function fs(e, n) {
    var t = me4(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Vu(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, se3 = e, oe3 = Je(n.firstChild), true) : false;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, se3 = e, oe3 = null, true) : false;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = vn !== null ? { id: De2, overflow: Oe3 } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = me4(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, se3 = e, oe3 = null, true) : false;
      default:
        return false;
    }
  }
  function Xl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Gl(e) {
    if (D3) {
      var n = oe3;
      if (n) {
        var t = n;
        if (!Vu(e, n)) {
          if (Xl(e))
            throw Error(v2(418));
          n = Je(t.nextSibling);
          var r2 = se3;
          n && Vu(e, n) ? fs(r2, t) : (e.flags = e.flags & -4097 | 2, D3 = false, se3 = e);
        }
      } else {
        if (Xl(e))
          throw Error(v2(418));
        e.flags = e.flags & -4097 | 2, D3 = false, se3 = e;
      }
    }
  }
  function Au(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    se3 = e;
  }
  function bt(e) {
    if (e !== se3)
      return false;
    if (!D3)
      return Au(e), D3 = true, false;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Ql(e.type, e.memoizedProps)), n && (n = oe3)) {
      if (Xl(e))
        throw ds(), Error(v2(418));
      for (; n; )
        fs(e, n), n = Je(n.nextSibling);
    }
    if (Au(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(v2(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                oe3 = Je(e.nextSibling);
                break e;
              }
              n--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        oe3 = null;
      }
    } else
      oe3 = se3 ? Je(e.stateNode.nextSibling) : null;
    return true;
  }
  function ds() {
    for (var e = oe3; e; )
      e = Je(e.nextSibling);
  }
  function Qn() {
    oe3 = se3 = null, D3 = false;
  }
  function Mi(e) {
    ke3 === null ? ke3 = [e] : ke3.push(e);
  }
  var Yc = Ve3.ReactCurrentBatchConfig;
  function we4(e, n) {
    if (e && e.defaultProps) {
      n = F4({}, n), e = e.defaultProps;
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  var zr = un(null), Pr = null, On = null, Di = null;
  function Oi() {
    Di = On = Pr = null;
  }
  function Ri(e) {
    var n = zr.current;
    M5(zr), e._currentValue = n;
  }
  function Zl(e, n, t) {
    for (; e !== null; ) {
      var r2 = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r2 !== null && (r2.childLanes |= n)) : r2 !== null && (r2.childLanes & n) !== n && (r2.childLanes |= n), e === t)
        break;
      e = e.return;
    }
  }
  function An(e, n) {
    Pr = e, Di = On = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (te3 = true), e.firstContext = null);
  }
  function ve4(e) {
    var n = e._currentValue;
    if (Di !== e)
      if (e = { context: e, memoizedValue: n, next: null }, On === null) {
        if (Pr === null)
          throw Error(v2(308));
        On = e, Pr.dependencies = { lanes: 0, firstContext: e };
      } else
        On = On.next = e;
    return n;
  }
  var fn = null;
  function Fi(e) {
    fn === null ? fn = [e] : fn.push(e);
  }
  function ps(e, n, t, r2) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Fi(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ue2(e, r2);
  }
  function Ue2(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var We2 = false;
  function Ii(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ms(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Re3(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function qe2(e, n, t) {
    var r2 = e.updateQueue;
    if (r2 === null)
      return null;
    if (r2 = r2.shared, (_2 & 2) !== 0) {
      var l = r2.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r2.pending = n, Ue2(e, t);
    }
    return l = r2.interleaved, l === null ? (n.next = n, Fi(r2)) : (n.next = l.next, l.next = n), r2.interleaved = n, Ue2(e, t);
  }
  function or(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r2 = n.lanes;
      r2 &= e.pendingLanes, t |= r2, n.lanes = t, ki(e, t);
    }
  }
  function Bu(e, n) {
    var t = e.updateQueue, r2 = e.alternate;
    if (r2 !== null && (r2 = r2.updateQueue, t === r2)) {
      var l = null, i2 = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var u2 = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          i2 === null ? l = i2 = u2 : i2 = i2.next = u2, t = t.next;
        } while (t !== null);
        i2 === null ? l = i2 = n : i2 = i2.next = n;
      } else
        l = i2 = n;
      t = { baseState: r2.baseState, firstBaseUpdate: l, lastBaseUpdate: i2, shared: r2.shared, effects: r2.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function Lr(e, n, t, r2) {
    var l = e.updateQueue;
    We2 = false;
    var i2 = l.firstBaseUpdate, u2 = l.lastBaseUpdate, o2 = l.shared.pending;
    if (o2 !== null) {
      l.shared.pending = null;
      var s2 = o2, d3 = s2.next;
      s2.next = null, u2 === null ? i2 = d3 : u2.next = d3, u2 = s2;
      var m2 = e.alternate;
      m2 !== null && (m2 = m2.updateQueue, o2 = m2.lastBaseUpdate, o2 !== u2 && (o2 === null ? m2.firstBaseUpdate = d3 : o2.next = d3, m2.lastBaseUpdate = s2));
    }
    if (i2 !== null) {
      var h2 = l.baseState;
      u2 = 0, m2 = d3 = s2 = null, o2 = i2;
      do {
        var p = o2.lane, g = o2.eventTime;
        if ((r2 & p) === p) {
          m2 !== null && (m2 = m2.next = { eventTime: g, lane: 0, tag: o2.tag, payload: o2.payload, callback: o2.callback, next: null });
          e: {
            var S3 = e, k3 = o2;
            switch (p = n, g = t, k3.tag) {
              case 1:
                if (S3 = k3.payload, typeof S3 == "function") {
                  h2 = S3.call(g, h2, p);
                  break e;
                }
                h2 = S3;
                break e;
              case 3:
                S3.flags = S3.flags & -65537 | 128;
              case 0:
                if (S3 = k3.payload, p = typeof S3 == "function" ? S3.call(g, h2, p) : S3, p == null)
                  break e;
                h2 = F4({}, h2, p);
                break e;
              case 2:
                We2 = true;
            }
          }
          o2.callback !== null && o2.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [o2] : p.push(o2));
        } else
          g = { eventTime: g, lane: p, tag: o2.tag, payload: o2.payload, callback: o2.callback, next: null }, m2 === null ? (d3 = m2 = g, s2 = h2) : m2 = m2.next = g, u2 |= p;
        if (o2 = o2.next, o2 === null) {
          if (o2 = l.shared.pending, o2 === null)
            break;
          p = o2, o2 = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
        }
      } while (1);
      if (m2 === null && (s2 = h2), l.baseState = s2, l.firstBaseUpdate = d3, l.lastBaseUpdate = m2, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          u2 |= l.lane, l = l.next;
        while (l !== n);
      } else
        i2 === null && (l.shared.lanes = 0);
      gn |= u2, e.lanes = u2, e.memoizedState = h2;
    }
  }
  function Hu(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
      for (n = 0; n < e.length; n++) {
        var r2 = e[n], l = r2.callback;
        if (l !== null) {
          if (r2.callback = null, r2 = t, typeof l != "function")
            throw Error(v2(191, l));
          l.call(r2);
        }
      }
  }
  var hs = new po.Component().refs;
  function Jl(e, n, t, r2) {
    n = e.memoizedState, t = t(r2, n), t = t == null ? n : F4({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Qr = { isMounted: function(e) {
    return (e = e._reactInternals) ? kn(e) === e : false;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r2 = b3(), l = en(e), i2 = Re3(r2, l);
    i2.payload = n, t != null && (i2.callback = t), n = qe2(e, i2, l), n !== null && (Ce3(n, e, l, r2), or(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r2 = b3(), l = en(e), i2 = Re3(r2, l);
    i2.tag = 1, i2.payload = n, t != null && (i2.callback = t), n = qe2(e, i2, l), n !== null && (Ce3(n, e, l, r2), or(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = b3(), r2 = en(e), l = Re3(t, r2);
    l.tag = 2, n != null && (l.callback = n), n = qe2(e, l, r2), n !== null && (Ce3(n, e, r2, t), or(n, e, r2));
  } };
  function Wu(e, n, t, r2, l, i2, u2) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r2, i2, u2) : n.prototype && n.prototype.isPureReactComponent ? !Nt(t, r2) || !Nt(l, i2) : true;
  }
  function vs(e, n, t) {
    var r2 = false, l = rn, i2 = n.contextType;
    return typeof i2 == "object" && i2 !== null ? i2 = ve4(i2) : (l = le3(n) ? hn : J3.current, r2 = n.contextTypes, i2 = (r2 = r2 != null) ? Wn(e, l) : rn), n = new n(t, i2), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Qr, e.stateNode = n, n._reactInternals = e, r2 && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i2), n;
  }
  function Qu(e, n, t, r2) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r2), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r2), n.state !== e && Qr.enqueueReplaceState(n, n.state, null);
  }
  function ql(e, n, t, r2) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = hs, Ii(e);
    var i2 = n.contextType;
    typeof i2 == "object" && i2 !== null ? l.context = ve4(i2) : (i2 = le3(n) ? hn : J3.current, l.context = Wn(e, i2)), l.state = e.memoizedState, i2 = n.getDerivedStateFromProps, typeof i2 == "function" && (Jl(e, n, i2, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && Qr.enqueueReplaceState(l, l.state, null), Lr(e, t, l, r2), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function nt(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(v2(309));
          var r2 = t.stateNode;
        }
        if (!r2)
          throw Error(v2(147, e));
        var l = r2, i2 = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === i2 ? n.ref : (n = function(u2) {
          var o2 = l.refs;
          o2 === hs && (o2 = l.refs = {}), u2 === null ? delete o2[i2] : o2[i2] = u2;
        }, n._stringRef = i2, n);
      }
      if (typeof e != "string")
        throw Error(v2(284));
      if (!t._owner)
        throw Error(v2(290, e));
    }
    return e;
  }
  function er(e, n) {
    throw e = Object.prototype.toString.call(n), Error(v2(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function $u(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ys(e) {
    function n(c, a) {
      if (e) {
        var f2 = c.deletions;
        f2 === null ? (c.deletions = [a], c.flags |= 16) : f2.push(a);
      }
    }
    function t(c, a) {
      if (!e)
        return null;
      for (; a !== null; )
        n(c, a), a = a.sibling;
      return null;
    }
    function r2(c, a) {
      for (c = /* @__PURE__ */ new Map(); a !== null; )
        a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
      return c;
    }
    function l(c, a) {
      return c = nn(c, a), c.index = 0, c.sibling = null, c;
    }
    function i2(c, a, f2) {
      return c.index = f2, e ? (f2 = c.alternate, f2 !== null ? (f2 = f2.index, f2 < a ? (c.flags |= 2, a) : f2) : (c.flags |= 2, a)) : (c.flags |= 1048576, a);
    }
    function u2(c) {
      return e && c.alternate === null && (c.flags |= 2), c;
    }
    function o2(c, a, f2, y2) {
      return a === null || a.tag !== 6 ? (a = wl(f2, c.mode, y2), a.return = c, a) : (a = l(a, f2), a.return = c, a);
    }
    function s2(c, a, f2, y2) {
      var E = f2.type;
      return E === Nn ? m2(c, a, f2.props.children, y2, f2.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === He2 && $u(E) === a.type) ? (y2 = l(a, f2.props), y2.ref = nt(c, a, f2), y2.return = c, y2) : (y2 = pr(f2.type, f2.key, f2.props, null, c.mode, y2), y2.ref = nt(c, a, f2), y2.return = c, y2);
    }
    function d3(c, a, f2, y2) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f2.containerInfo || a.stateNode.implementation !== f2.implementation ? (a = Sl(f2, c.mode, y2), a.return = c, a) : (a = l(a, f2.children || []), a.return = c, a);
    }
    function m2(c, a, f2, y2, E) {
      return a === null || a.tag !== 7 ? (a = mn(f2, c.mode, y2, E), a.return = c, a) : (a = l(a, f2), a.return = c, a);
    }
    function h2(c, a, f2) {
      if (typeof a == "string" && a !== "" || typeof a == "number")
        return a = wl("" + a, c.mode, f2), a.return = c, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Vt:
            return f2 = pr(a.type, a.key, a.props, null, c.mode, f2), f2.ref = nt(c, null, a), f2.return = c, f2;
          case xn:
            return a = Sl(a, c.mode, f2), a.return = c, a;
          case He2:
            var y2 = a._init;
            return h2(c, y2(a._payload), f2);
        }
        if (ut(a) || Jn(a))
          return a = mn(a, c.mode, f2, null), a.return = c, a;
        er(c, a);
      }
      return null;
    }
    function p(c, a, f2, y2) {
      var E = a !== null ? a.key : null;
      if (typeof f2 == "string" && f2 !== "" || typeof f2 == "number")
        return E !== null ? null : o2(c, a, "" + f2, y2);
      if (typeof f2 == "object" && f2 !== null) {
        switch (f2.$$typeof) {
          case Vt:
            return f2.key === E ? s2(c, a, f2, y2) : null;
          case xn:
            return f2.key === E ? d3(c, a, f2, y2) : null;
          case He2:
            return E = f2._init, p(c, a, E(f2._payload), y2);
        }
        if (ut(f2) || Jn(f2))
          return E !== null ? null : m2(c, a, f2, y2, null);
        er(c, f2);
      }
      return null;
    }
    function g(c, a, f2, y2, E) {
      if (typeof y2 == "string" && y2 !== "" || typeof y2 == "number")
        return c = c.get(f2) || null, o2(a, c, "" + y2, E);
      if (typeof y2 == "object" && y2 !== null) {
        switch (y2.$$typeof) {
          case Vt:
            return c = c.get(y2.key === null ? f2 : y2.key) || null, s2(a, c, y2, E);
          case xn:
            return c = c.get(y2.key === null ? f2 : y2.key) || null, d3(a, c, y2, E);
          case He2:
            var C2 = y2._init;
            return g(c, a, f2, C2(y2._payload), E);
        }
        if (ut(y2) || Jn(y2))
          return c = c.get(f2) || null, m2(a, c, y2, E, null);
        er(a, y2);
      }
      return null;
    }
    function S3(c, a, f2, y2) {
      for (var E = null, C2 = null, x2 = a, N2 = a = 0, H2 = null; x2 !== null && N2 < f2.length; N2++) {
        x2.index > N2 ? (H2 = x2, x2 = null) : H2 = x2.sibling;
        var z2 = p(c, x2, f2[N2], y2);
        if (z2 === null) {
          x2 === null && (x2 = H2);
          break;
        }
        e && x2 && z2.alternate === null && n(c, x2), a = i2(z2, a, N2), C2 === null ? E = z2 : C2.sibling = z2, C2 = z2, x2 = H2;
      }
      if (N2 === f2.length)
        return t(c, x2), D3 && sn(c, N2), E;
      if (x2 === null) {
        for (; N2 < f2.length; N2++)
          x2 = h2(c, f2[N2], y2), x2 !== null && (a = i2(x2, a, N2), C2 === null ? E = x2 : C2.sibling = x2, C2 = x2);
        return D3 && sn(c, N2), E;
      }
      for (x2 = r2(c, x2); N2 < f2.length; N2++)
        H2 = g(x2, c, N2, f2[N2], y2), H2 !== null && (e && H2.alternate !== null && x2.delete(H2.key === null ? N2 : H2.key), a = i2(H2, a, N2), C2 === null ? E = H2 : C2.sibling = H2, C2 = H2);
      return e && x2.forEach(function(Ae2) {
        return n(c, Ae2);
      }), D3 && sn(c, N2), E;
    }
    function k3(c, a, f2, y2) {
      var E = Jn(f2);
      if (typeof E != "function")
        throw Error(v2(150));
      if (f2 = E.call(f2), f2 == null)
        throw Error(v2(151));
      for (var C2 = E = null, x2 = a, N2 = a = 0, H2 = null, z2 = f2.next(); x2 !== null && !z2.done; N2++, z2 = f2.next()) {
        x2.index > N2 ? (H2 = x2, x2 = null) : H2 = x2.sibling;
        var Ae2 = p(c, x2, z2.value, y2);
        if (Ae2 === null) {
          x2 === null && (x2 = H2);
          break;
        }
        e && x2 && Ae2.alternate === null && n(c, x2), a = i2(Ae2, a, N2), C2 === null ? E = Ae2 : C2.sibling = Ae2, C2 = Ae2, x2 = H2;
      }
      if (z2.done)
        return t(c, x2), D3 && sn(c, N2), E;
      if (x2 === null) {
        for (; !z2.done; N2++, z2 = f2.next())
          z2 = h2(c, z2.value, y2), z2 !== null && (a = i2(z2, a, N2), C2 === null ? E = z2 : C2.sibling = z2, C2 = z2);
        return D3 && sn(c, N2), E;
      }
      for (x2 = r2(c, x2); !z2.done; N2++, z2 = f2.next())
        z2 = g(x2, c, N2, z2.value, y2), z2 !== null && (e && z2.alternate !== null && x2.delete(z2.key === null ? N2 : z2.key), a = i2(z2, a, N2), C2 === null ? E = z2 : C2.sibling = z2, C2 = z2);
      return e && x2.forEach(function(ga) {
        return n(c, ga);
      }), D3 && sn(c, N2), E;
    }
    function U4(c, a, f2, y2) {
      if (typeof f2 == "object" && f2 !== null && f2.type === Nn && f2.key === null && (f2 = f2.props.children), typeof f2 == "object" && f2 !== null) {
        switch (f2.$$typeof) {
          case Vt:
            e: {
              for (var E = f2.key, C2 = a; C2 !== null; ) {
                if (C2.key === E) {
                  if (E = f2.type, E === Nn) {
                    if (C2.tag === 7) {
                      t(c, C2.sibling), a = l(C2, f2.props.children), a.return = c, c = a;
                      break e;
                    }
                  } else if (C2.elementType === E || typeof E == "object" && E !== null && E.$$typeof === He2 && $u(E) === C2.type) {
                    t(c, C2.sibling), a = l(C2, f2.props), a.ref = nt(c, C2, f2), a.return = c, c = a;
                    break e;
                  }
                  t(c, C2);
                  break;
                } else
                  n(c, C2);
                C2 = C2.sibling;
              }
              f2.type === Nn ? (a = mn(f2.props.children, c.mode, y2, f2.key), a.return = c, c = a) : (y2 = pr(f2.type, f2.key, f2.props, null, c.mode, y2), y2.ref = nt(c, a, f2), y2.return = c, c = y2);
            }
            return u2(c);
          case xn:
            e: {
              for (C2 = f2.key; a !== null; ) {
                if (a.key === C2)
                  if (a.tag === 4 && a.stateNode.containerInfo === f2.containerInfo && a.stateNode.implementation === f2.implementation) {
                    t(c, a.sibling), a = l(a, f2.children || []), a.return = c, c = a;
                    break e;
                  } else {
                    t(c, a);
                    break;
                  }
                else
                  n(c, a);
                a = a.sibling;
              }
              a = Sl(f2, c.mode, y2), a.return = c, c = a;
            }
            return u2(c);
          case He2:
            return C2 = f2._init, U4(c, a, C2(f2._payload), y2);
        }
        if (ut(f2))
          return S3(c, a, f2, y2);
        if (Jn(f2))
          return k3(c, a, f2, y2);
        er(c, f2);
      }
      return typeof f2 == "string" && f2 !== "" || typeof f2 == "number" ? (f2 = "" + f2, a !== null && a.tag === 6 ? (t(c, a.sibling), a = l(a, f2), a.return = c, c = a) : (t(c, a), a = wl(f2, c.mode, y2), a.return = c, c = a), u2(c)) : t(c, a);
    }
    return U4;
  }
  var $n = ys(true), gs = ys(false), jt = {}, Le2 = un(jt), Lt = un(jt), Tt = un(jt);
  function dn(e) {
    if (e === jt)
      throw Error(v2(174));
    return e;
  }
  function Ui(e, n) {
    switch (L3(Tt, n), L3(Lt, e), L3(Le2, jt), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Tl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Tl(n, e);
    }
    M5(Le2), L3(Le2, n);
  }
  function Kn() {
    M5(Le2), M5(Lt), M5(Tt);
  }
  function ws(e) {
    dn(Tt.current);
    var n = dn(Le2.current), t = Tl(n, e.type);
    n !== t && (L3(Lt, e), L3(Le2, t));
  }
  function ji(e) {
    Lt.current === e && (M5(Le2), M5(Lt));
  }
  var O2 = un(0);
  function Tr(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0)
          return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var pl = [];
  function Vi() {
    for (var e = 0; e < pl.length; e++)
      pl[e]._workInProgressVersionPrimary = null;
    pl.length = 0;
  }
  var sr = Ve3.ReactCurrentDispatcher, ml = Ve3.ReactCurrentBatchConfig, yn = 0, R3 = null, A2 = null, W2 = null, Mr = false, mt = false, Mt = 0, Xc = 0;
  function X3() {
    throw Error(v2(321));
  }
  function Ai(e, n) {
    if (n === null)
      return false;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!xe4(e[t], n[t]))
        return false;
    return true;
  }
  function Bi(e, n, t, r2, l, i2) {
    if (yn = i2, R3 = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, sr.current = e === null || e.memoizedState === null ? qc : bc, e = t(r2, l), mt) {
      i2 = 0;
      do {
        if (mt = false, Mt = 0, 25 <= i2)
          throw Error(v2(301));
        i2 += 1, W2 = A2 = null, n.updateQueue = null, sr.current = ef, e = t(r2, l);
      } while (mt);
    }
    if (sr.current = Dr, n = A2 !== null && A2.next !== null, yn = 0, W2 = A2 = R3 = null, Mr = false, n)
      throw Error(v2(300));
    return e;
  }
  function Hi() {
    var e = Mt !== 0;
    return Mt = 0, e;
  }
  function _e4() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return W2 === null ? R3.memoizedState = W2 = e : W2 = W2.next = e, W2;
  }
  function ye4() {
    if (A2 === null) {
      var e = R3.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = A2.next;
    var n = W2 === null ? R3.memoizedState : W2.next;
    if (n !== null)
      W2 = n, A2 = e;
    else {
      if (e === null)
        throw Error(v2(310));
      A2 = e, e = { memoizedState: A2.memoizedState, baseState: A2.baseState, baseQueue: A2.baseQueue, queue: A2.queue, next: null }, W2 === null ? R3.memoizedState = W2 = e : W2 = W2.next = e;
    }
    return W2;
  }
  function Dt(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function hl(e) {
    var n = ye4(), t = n.queue;
    if (t === null)
      throw Error(v2(311));
    t.lastRenderedReducer = e;
    var r2 = A2, l = r2.baseQueue, i2 = t.pending;
    if (i2 !== null) {
      if (l !== null) {
        var u2 = l.next;
        l.next = i2.next, i2.next = u2;
      }
      r2.baseQueue = l = i2, t.pending = null;
    }
    if (l !== null) {
      i2 = l.next, r2 = r2.baseState;
      var o2 = u2 = null, s2 = null, d3 = i2;
      do {
        var m2 = d3.lane;
        if ((yn & m2) === m2)
          s2 !== null && (s2 = s2.next = { lane: 0, action: d3.action, hasEagerState: d3.hasEagerState, eagerState: d3.eagerState, next: null }), r2 = d3.hasEagerState ? d3.eagerState : e(r2, d3.action);
        else {
          var h2 = { lane: m2, action: d3.action, hasEagerState: d3.hasEagerState, eagerState: d3.eagerState, next: null };
          s2 === null ? (o2 = s2 = h2, u2 = r2) : s2 = s2.next = h2, R3.lanes |= m2, gn |= m2;
        }
        d3 = d3.next;
      } while (d3 !== null && d3 !== i2);
      s2 === null ? u2 = r2 : s2.next = o2, xe4(r2, n.memoizedState) || (te3 = true), n.memoizedState = r2, n.baseState = u2, n.baseQueue = s2, t.lastRenderedState = r2;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        i2 = l.lane, R3.lanes |= i2, gn |= i2, l = l.next;
      while (l !== e);
    } else
      l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function vl(e) {
    var n = ye4(), t = n.queue;
    if (t === null)
      throw Error(v2(311));
    t.lastRenderedReducer = e;
    var r2 = t.dispatch, l = t.pending, i2 = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var u2 = l = l.next;
      do
        i2 = e(i2, u2.action), u2 = u2.next;
      while (u2 !== l);
      xe4(i2, n.memoizedState) || (te3 = true), n.memoizedState = i2, n.baseQueue === null && (n.baseState = i2), t.lastRenderedState = i2;
    }
    return [i2, r2];
  }
  function Ss() {
  }
  function ks(e, n) {
    var t = R3, r2 = ye4(), l = n(), i2 = !xe4(r2.memoizedState, l);
    if (i2 && (r2.memoizedState = l, te3 = true), r2 = r2.queue, Wi(xs.bind(null, t, r2, e), [e]), r2.getSnapshot !== n || i2 || W2 !== null && W2.memoizedState.tag & 1) {
      if (t.flags |= 2048, Ot(9, Cs.bind(null, t, r2, l, n), void 0, null), Q3 === null)
        throw Error(v2(349));
      (yn & 30) !== 0 || Es(t, n, l);
    }
    return l;
  }
  function Es(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = R3.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, R3.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function Cs(e, n, t, r2) {
    n.value = t, n.getSnapshot = r2, Ns(n) && _s(e);
  }
  function xs(e, n, t) {
    return t(function() {
      Ns(n) && _s(e);
    });
  }
  function Ns(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !xe4(e, t);
    } catch {
      return true;
    }
  }
  function _s(e) {
    var n = Ue2(e, 1);
    n !== null && Ce3(n, e, 1, -1);
  }
  function Ku(e) {
    var n = _e4();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dt, lastRenderedState: e }, n.queue = e, e = e.dispatch = Jc.bind(null, R3, e), [n.memoizedState, e];
  }
  function Ot(e, n, t, r2) {
    return e = { tag: e, create: n, destroy: t, deps: r2, next: null }, n = R3.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, R3.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r2 = t.next, t.next = e, e.next = r2, n.lastEffect = e)), e;
  }
  function zs() {
    return ye4().memoizedState;
  }
  function ar(e, n, t, r2) {
    var l = _e4();
    R3.flags |= e, l.memoizedState = Ot(1 | n, t, void 0, r2 === void 0 ? null : r2);
  }
  function $r(e, n, t, r2) {
    var l = ye4();
    r2 = r2 === void 0 ? null : r2;
    var i2 = void 0;
    if (A2 !== null) {
      var u2 = A2.memoizedState;
      if (i2 = u2.destroy, r2 !== null && Ai(r2, u2.deps)) {
        l.memoizedState = Ot(n, t, i2, r2);
        return;
      }
    }
    R3.flags |= e, l.memoizedState = Ot(1 | n, t, i2, r2);
  }
  function Yu(e, n) {
    return ar(8390656, 8, e, n);
  }
  function Wi(e, n) {
    return $r(2048, 8, e, n);
  }
  function Ps(e, n) {
    return $r(4, 2, e, n);
  }
  function Ls(e, n) {
    return $r(4, 4, e, n);
  }
  function Ts(e, n) {
    if (typeof n == "function")
      return e = e(), n(e), function() {
        n(null);
      };
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Ms(e, n, t) {
    return t = t != null ? t.concat([e]) : null, $r(4, 4, Ts.bind(null, n, e), t);
  }
  function Qi() {
  }
  function Ds(e, n) {
    var t = ye4();
    n = n === void 0 ? null : n;
    var r2 = t.memoizedState;
    return r2 !== null && n !== null && Ai(n, r2[1]) ? r2[0] : (t.memoizedState = [e, n], e);
  }
  function Os(e, n) {
    var t = ye4();
    n = n === void 0 ? null : n;
    var r2 = t.memoizedState;
    return r2 !== null && n !== null && Ai(n, r2[1]) ? r2[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Rs(e, n, t) {
    return (yn & 21) === 0 ? (e.baseState && (e.baseState = false, te3 = true), e.memoizedState = t) : (xe4(t, n) || (t = Uo(), R3.lanes |= t, gn |= t, e.baseState = true), n);
  }
  function Gc(e, n) {
    var t = P;
    P = t !== 0 && 4 > t ? t : 4, e(true);
    var r2 = ml.transition;
    ml.transition = {};
    try {
      e(false), n();
    } finally {
      P = t, ml.transition = r2;
    }
  }
  function Fs() {
    return ye4().memoizedState;
  }
  function Zc(e, n, t) {
    var r2 = en(e);
    if (t = { lane: r2, action: t, hasEagerState: false, eagerState: null, next: null }, Is(e))
      Us(n, t);
    else if (t = ps(e, n, t, r2), t !== null) {
      var l = b3();
      Ce3(t, e, r2, l), js(t, n, r2);
    }
  }
  function Jc(e, n, t) {
    var r2 = en(e), l = { lane: r2, action: t, hasEagerState: false, eagerState: null, next: null };
    if (Is(e))
      Us(n, l);
    else {
      var i2 = e.alternate;
      if (e.lanes === 0 && (i2 === null || i2.lanes === 0) && (i2 = n.lastRenderedReducer, i2 !== null))
        try {
          var u2 = n.lastRenderedState, o2 = i2(u2, t);
          if (l.hasEagerState = true, l.eagerState = o2, xe4(o2, u2)) {
            var s2 = n.interleaved;
            s2 === null ? (l.next = l, Fi(n)) : (l.next = s2.next, s2.next = l), n.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      t = ps(e, n, l, r2), t !== null && (l = b3(), Ce3(t, e, r2, l), js(t, n, r2));
    }
  }
  function Is(e) {
    var n = e.alternate;
    return e === R3 || n !== null && n === R3;
  }
  function Us(e, n) {
    mt = Mr = true;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function js(e, n, t) {
    if ((t & 4194240) !== 0) {
      var r2 = n.lanes;
      r2 &= e.pendingLanes, t |= r2, n.lanes = t, ki(e, t);
    }
  }
  var Dr = { readContext: ve4, useCallback: X3, useContext: X3, useEffect: X3, useImperativeHandle: X3, useInsertionEffect: X3, useLayoutEffect: X3, useMemo: X3, useReducer: X3, useRef: X3, useState: X3, useDebugValue: X3, useDeferredValue: X3, useTransition: X3, useMutableSource: X3, useSyncExternalStore: X3, useId: X3, unstable_isNewReconciler: false }, qc = { readContext: ve4, useCallback: function(e, n) {
    return _e4().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: ve4, useEffect: Yu, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ar(4194308, 4, Ts.bind(null, n, e), t);
  }, useLayoutEffect: function(e, n) {
    return ar(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ar(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = _e4();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r2 = _e4();
    return n = t !== void 0 ? t(n) : n, r2.memoizedState = r2.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r2.queue = e, e = e.dispatch = Zc.bind(null, R3, e), [r2.memoizedState, e];
  }, useRef: function(e) {
    var n = _e4();
    return e = { current: e }, n.memoizedState = e;
  }, useState: Ku, useDebugValue: Qi, useDeferredValue: function(e) {
    return _e4().memoizedState = e;
  }, useTransition: function() {
    var e = Ku(false), n = e[0];
    return e = Gc.bind(null, e[1]), _e4().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r2 = R3, l = _e4();
    if (D3) {
      if (t === void 0)
        throw Error(v2(407));
      t = t();
    } else {
      if (t = n(), Q3 === null)
        throw Error(v2(349));
      (yn & 30) !== 0 || Es(r2, n, t);
    }
    l.memoizedState = t;
    var i2 = { value: t, getSnapshot: n };
    return l.queue = i2, Yu(xs.bind(null, r2, i2, e), [e]), r2.flags |= 2048, Ot(9, Cs.bind(null, r2, i2, t, n), void 0, null), t;
  }, useId: function() {
    var e = _e4(), n = Q3.identifierPrefix;
    if (D3) {
      var t = Oe3, r2 = De2;
      t = (r2 & ~(1 << 32 - Ee4(r2) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Mt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else
      t = Xc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: false }, bc = { readContext: ve4, useCallback: Ds, useContext: ve4, useEffect: Wi, useImperativeHandle: Ms, useInsertionEffect: Ps, useLayoutEffect: Ls, useMemo: Os, useReducer: hl, useRef: zs, useState: function() {
    return hl(Dt);
  }, useDebugValue: Qi, useDeferredValue: function(e) {
    var n = ye4();
    return Rs(n, A2.memoizedState, e);
  }, useTransition: function() {
    var e = hl(Dt)[0], n = ye4().memoizedState;
    return [e, n];
  }, useMutableSource: Ss, useSyncExternalStore: ks, useId: Fs, unstable_isNewReconciler: false }, ef = { readContext: ve4, useCallback: Ds, useContext: ve4, useEffect: Wi, useImperativeHandle: Ms, useInsertionEffect: Ps, useLayoutEffect: Ls, useMemo: Os, useReducer: vl, useRef: zs, useState: function() {
    return vl(Dt);
  }, useDebugValue: Qi, useDeferredValue: function(e) {
    var n = ye4();
    return A2 === null ? n.memoizedState = e : Rs(n, A2.memoizedState, e);
  }, useTransition: function() {
    var e = vl(Dt)[0], n = ye4().memoizedState;
    return [e, n];
  }, useMutableSource: Ss, useSyncExternalStore: ks, useId: Fs, unstable_isNewReconciler: false };
  function Yn(e, n) {
    try {
      var t = "", r2 = n;
      do
        t += Ta(r2), r2 = r2.return;
      while (r2);
      var l = t;
    } catch (i2) {
      l = `
Error generating stack: ` + i2.message + `
` + i2.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function yl(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function bl(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var nf = typeof WeakMap == "function" ? WeakMap : Map;
  function Vs(e, n, t) {
    t = Re3(-1, t), t.tag = 3, t.payload = { element: null };
    var r2 = n.value;
    return t.callback = function() {
      Rr || (Rr = true, ai = r2), bl(e, n);
    }, t;
  }
  function As(e, n, t) {
    t = Re3(-1, t), t.tag = 3;
    var r2 = e.type.getDerivedStateFromError;
    if (typeof r2 == "function") {
      var l = n.value;
      t.payload = function() {
        return r2(l);
      }, t.callback = function() {
        bl(e, n);
      };
    }
    var i2 = e.stateNode;
    return i2 !== null && typeof i2.componentDidCatch == "function" && (t.callback = function() {
      bl(e, n), typeof r2 != "function" && (be4 === null ? be4 = /* @__PURE__ */ new Set([this]) : be4.add(this));
      var u2 = n.stack;
      this.componentDidCatch(n.value, { componentStack: u2 !== null ? u2 : "" });
    }), t;
  }
  function Xu(e, n, t) {
    var r2 = e.pingCache;
    if (r2 === null) {
      r2 = e.pingCache = new nf();
      var l = /* @__PURE__ */ new Set();
      r2.set(n, l);
    } else
      l = r2.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r2.set(n, l));
    l.has(t) || (l.add(t), e = vf.bind(null, e, n, t), n.then(e, e));
  }
  function Gu(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : true), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Zu(e, n, t, r2, l) {
    return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Re3(-1, 1), n.tag = 2, qe2(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var tf = Ve3.ReactCurrentOwner, te3 = false;
  function q3(e, n, t, r2) {
    n.child = e === null ? gs(n, null, t, r2) : $n(n, e.child, t, r2);
  }
  function Ju(e, n, t, r2, l) {
    t = t.render;
    var i2 = n.ref;
    return An(n, l), r2 = Bi(e, n, t, r2, i2, l), t = Hi(), e !== null && !te3 ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, je2(e, n, l)) : (D3 && t && Li(n), n.flags |= 1, q3(e, n, r2, l), n.child);
  }
  function qu(e, n, t, r2, l) {
    if (e === null) {
      var i2 = t.type;
      return typeof i2 == "function" && !qi(i2) && i2.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = i2, Bs(e, n, i2, r2, l)) : (e = pr(t.type, null, r2, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (i2 = e.child, (e.lanes & l) === 0) {
      var u2 = i2.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Nt, t(u2, r2) && e.ref === n.ref)
        return je2(e, n, l);
    }
    return n.flags |= 1, e = nn(i2, r2), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Bs(e, n, t, r2, l) {
    if (e !== null) {
      var i2 = e.memoizedProps;
      if (Nt(i2, r2) && e.ref === n.ref)
        if (te3 = false, n.pendingProps = r2 = i2, (e.lanes & l) !== 0)
          (e.flags & 131072) !== 0 && (te3 = true);
        else
          return n.lanes = e.lanes, je2(e, n, l);
    }
    return ei(e, n, t, r2, l);
  }
  function Hs(e, n, t) {
    var r2 = n.pendingProps, l = r2.children, i2 = e !== null ? e.memoizedState : null;
    if (r2.mode === "hidden")
      if ((n.mode & 1) === 0)
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, L3(Fn, ue2), ue2 |= t;
      else {
        if ((t & 1073741824) === 0)
          return e = i2 !== null ? i2.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, L3(Fn, ue2), ue2 |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r2 = i2 !== null ? i2.baseLanes : t, L3(Fn, ue2), ue2 |= r2;
      }
    else
      i2 !== null ? (r2 = i2.baseLanes | t, n.memoizedState = null) : r2 = t, L3(Fn, ue2), ue2 |= r2;
    return q3(e, n, l, t), n.child;
  }
  function Ws(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function ei(e, n, t, r2, l) {
    var i2 = le3(t) ? hn : J3.current;
    return i2 = Wn(n, i2), An(n, l), t = Bi(e, n, t, r2, i2, l), r2 = Hi(), e !== null && !te3 ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, je2(e, n, l)) : (D3 && r2 && Li(n), n.flags |= 1, q3(e, n, t, l), n.child);
  }
  function bu(e, n, t, r2, l) {
    if (le3(t)) {
      var i2 = true;
      xr(n);
    } else
      i2 = false;
    if (An(n, l), n.stateNode === null)
      cr(e, n), vs(n, t, r2), ql(n, t, r2, l), r2 = true;
    else if (e === null) {
      var u2 = n.stateNode, o2 = n.memoizedProps;
      u2.props = o2;
      var s2 = u2.context, d3 = t.contextType;
      typeof d3 == "object" && d3 !== null ? d3 = ve4(d3) : (d3 = le3(t) ? hn : J3.current, d3 = Wn(n, d3));
      var m2 = t.getDerivedStateFromProps, h2 = typeof m2 == "function" || typeof u2.getSnapshotBeforeUpdate == "function";
      h2 || typeof u2.UNSAFE_componentWillReceiveProps != "function" && typeof u2.componentWillReceiveProps != "function" || (o2 !== r2 || s2 !== d3) && Qu(n, u2, r2, d3), We2 = false;
      var p = n.memoizedState;
      u2.state = p, Lr(n, r2, u2, l), s2 = n.memoizedState, o2 !== r2 || p !== s2 || re2.current || We2 ? (typeof m2 == "function" && (Jl(n, t, m2, r2), s2 = n.memoizedState), (o2 = We2 || Wu(n, t, o2, r2, p, s2, d3)) ? (h2 || typeof u2.UNSAFE_componentWillMount != "function" && typeof u2.componentWillMount != "function" || (typeof u2.componentWillMount == "function" && u2.componentWillMount(), typeof u2.UNSAFE_componentWillMount == "function" && u2.UNSAFE_componentWillMount()), typeof u2.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u2.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r2, n.memoizedState = s2), u2.props = r2, u2.state = s2, u2.context = d3, r2 = o2) : (typeof u2.componentDidMount == "function" && (n.flags |= 4194308), r2 = false);
    } else {
      u2 = n.stateNode, ms(e, n), o2 = n.memoizedProps, d3 = n.type === n.elementType ? o2 : we4(n.type, o2), u2.props = d3, h2 = n.pendingProps, p = u2.context, s2 = t.contextType, typeof s2 == "object" && s2 !== null ? s2 = ve4(s2) : (s2 = le3(t) ? hn : J3.current, s2 = Wn(n, s2));
      var g = t.getDerivedStateFromProps;
      (m2 = typeof g == "function" || typeof u2.getSnapshotBeforeUpdate == "function") || typeof u2.UNSAFE_componentWillReceiveProps != "function" && typeof u2.componentWillReceiveProps != "function" || (o2 !== h2 || p !== s2) && Qu(n, u2, r2, s2), We2 = false, p = n.memoizedState, u2.state = p, Lr(n, r2, u2, l);
      var S3 = n.memoizedState;
      o2 !== h2 || p !== S3 || re2.current || We2 ? (typeof g == "function" && (Jl(n, t, g, r2), S3 = n.memoizedState), (d3 = We2 || Wu(n, t, d3, r2, p, S3, s2) || false) ? (m2 || typeof u2.UNSAFE_componentWillUpdate != "function" && typeof u2.componentWillUpdate != "function" || (typeof u2.componentWillUpdate == "function" && u2.componentWillUpdate(r2, S3, s2), typeof u2.UNSAFE_componentWillUpdate == "function" && u2.UNSAFE_componentWillUpdate(r2, S3, s2)), typeof u2.componentDidUpdate == "function" && (n.flags |= 4), typeof u2.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u2.componentDidUpdate != "function" || o2 === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u2.getSnapshotBeforeUpdate != "function" || o2 === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r2, n.memoizedState = S3), u2.props = r2, u2.state = S3, u2.context = s2, r2 = d3) : (typeof u2.componentDidUpdate != "function" || o2 === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u2.getSnapshotBeforeUpdate != "function" || o2 === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r2 = false);
    }
    return ni(e, n, t, r2, i2, l);
  }
  function ni(e, n, t, r2, l, i2) {
    Ws(e, n);
    var u2 = (n.flags & 128) !== 0;
    if (!r2 && !u2)
      return l && ju(n, t, false), je2(e, n, i2);
    r2 = n.stateNode, tf.current = n;
    var o2 = u2 && typeof t.getDerivedStateFromError != "function" ? null : r2.render();
    return n.flags |= 1, e !== null && u2 ? (n.child = $n(n, e.child, null, i2), n.child = $n(n, null, o2, i2)) : q3(e, n, o2, i2), n.memoizedState = r2.state, l && ju(n, t, true), n.child;
  }
  function Qs(e) {
    var n = e.stateNode;
    n.pendingContext ? Uu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Uu(e, n.context, false), Ui(e, n.containerInfo);
  }
  function eo(e, n, t, r2, l) {
    return Qn(), Mi(l), n.flags |= 256, q3(e, n, t, r2), n.child;
  }
  var ti = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ri(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function $s(e, n, t) {
    var r2 = n.pendingProps, l = O2.current, i2 = false, u2 = (n.flags & 128) !== 0, o2;
    if ((o2 = u2) || (o2 = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), o2 ? (i2 = true, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), L3(O2, l & 1), e === null)
      return Gl(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (u2 = r2.children, e = r2.fallback, i2 ? (r2 = n.mode, i2 = n.child, u2 = { mode: "hidden", children: u2 }, (r2 & 1) === 0 && i2 !== null ? (i2.childLanes = 0, i2.pendingProps = u2) : i2 = Xr(u2, r2, 0, null), e = mn(e, r2, t, null), i2.return = n, e.return = n, i2.sibling = e, n.child = i2, n.child.memoizedState = ri(t), n.memoizedState = ti, e) : $i(n, u2));
    if (l = e.memoizedState, l !== null && (o2 = l.dehydrated, o2 !== null))
      return rf(e, n, u2, r2, o2, l, t);
    if (i2) {
      i2 = r2.fallback, u2 = n.mode, l = e.child, o2 = l.sibling;
      var s2 = { mode: "hidden", children: r2.children };
      return (u2 & 1) === 0 && n.child !== l ? (r2 = n.child, r2.childLanes = 0, r2.pendingProps = s2, n.deletions = null) : (r2 = nn(l, s2), r2.subtreeFlags = l.subtreeFlags & 14680064), o2 !== null ? i2 = nn(o2, i2) : (i2 = mn(i2, u2, t, null), i2.flags |= 2), i2.return = n, r2.return = n, r2.sibling = i2, n.child = r2, r2 = i2, i2 = n.child, u2 = e.child.memoizedState, u2 = u2 === null ? ri(t) : { baseLanes: u2.baseLanes | t, cachePool: null, transitions: u2.transitions }, i2.memoizedState = u2, i2.childLanes = e.childLanes & ~t, n.memoizedState = ti, r2;
    }
    return i2 = e.child, e = i2.sibling, r2 = nn(i2, { mode: "visible", children: r2.children }), (n.mode & 1) === 0 && (r2.lanes = t), r2.return = n, r2.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r2, n.memoizedState = null, r2;
  }
  function $i(e, n) {
    return n = Xr({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function nr(e, n, t, r2) {
    return r2 !== null && Mi(r2), $n(n, e.child, null, t), e = $i(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function rf(e, n, t, r2, l, i2, u2) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r2 = yl(Error(v2(422))), nr(e, n, u2, r2)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (i2 = r2.fallback, l = n.mode, r2 = Xr({ mode: "visible", children: r2.children }, l, 0, null), i2 = mn(i2, l, u2, null), i2.flags |= 2, r2.return = n, i2.return = n, r2.sibling = i2, n.child = r2, (n.mode & 1) !== 0 && $n(n, e.child, null, u2), n.child.memoizedState = ri(u2), n.memoizedState = ti, i2);
    if ((n.mode & 1) === 0)
      return nr(e, n, u2, null);
    if (l.data === "$!") {
      if (r2 = l.nextSibling && l.nextSibling.dataset, r2)
        var o2 = r2.dgst;
      return r2 = o2, i2 = Error(v2(419)), r2 = yl(i2, r2, void 0), nr(e, n, u2, r2);
    }
    if (o2 = (u2 & e.childLanes) !== 0, te3 || o2) {
      if (r2 = Q3, r2 !== null) {
        switch (u2 & -u2) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r2.suspendedLanes | u2)) !== 0 ? 0 : l, l !== 0 && l !== i2.retryLane && (i2.retryLane = l, Ue2(e, l), Ce3(r2, e, l, -1));
      }
      return Ji(), r2 = yl(Error(v2(421))), nr(e, n, u2, r2);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = yf.bind(null, e), l._reactRetry = n, null) : (e = i2.treeContext, oe3 = Je(l.nextSibling), se3 = n, D3 = true, ke3 = null, e !== null && (de4[pe4++] = De2, de4[pe4++] = Oe3, de4[pe4++] = vn, De2 = e.id, Oe3 = e.overflow, vn = n), n = $i(n, r2.children), n.flags |= 4096, n);
  }
  function no(e, n, t) {
    e.lanes |= n;
    var r2 = e.alternate;
    r2 !== null && (r2.lanes |= n), Zl(e.return, n, t);
  }
  function gl(e, n, t, r2, l) {
    var i2 = e.memoizedState;
    i2 === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r2, tail: t, tailMode: l } : (i2.isBackwards = n, i2.rendering = null, i2.renderingStartTime = 0, i2.last = r2, i2.tail = t, i2.tailMode = l);
  }
  function Ks(e, n, t) {
    var r2 = n.pendingProps, l = r2.revealOrder, i2 = r2.tail;
    if (q3(e, n, r2.children, t), r2 = O2.current, (r2 & 2) !== 0)
      r2 = r2 & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && no(e, t, n);
            else if (e.tag === 19)
              no(e, t, n);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === n)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === n)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r2 &= 1;
    }
    if (L3(O2, r2), (n.mode & 1) === 0)
      n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            e = t.alternate, e !== null && Tr(e) === null && (l = t), t = t.sibling;
          t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), gl(n, false, l, t, i2);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && Tr(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling, l.sibling = t, t = l, l = e;
          }
          gl(n, true, t, null, i2);
          break;
        case "together":
          gl(n, false, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function cr(e, n) {
    (n.mode & 1) === 0 && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function je2(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), gn |= n.lanes, (t & n.childLanes) === 0)
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(v2(153));
    if (n.child !== null) {
      for (e = n.child, t = nn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        e = e.sibling, t = t.sibling = nn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function lf(e, n, t) {
    switch (n.tag) {
      case 3:
        Qs(n), Qn();
        break;
      case 5:
        ws(n);
        break;
      case 1:
        le3(n.type) && xr(n);
        break;
      case 4:
        Ui(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r2 = n.type._context, l = n.memoizedProps.value;
        L3(zr, r2._currentValue), r2._currentValue = l;
        break;
      case 13:
        if (r2 = n.memoizedState, r2 !== null)
          return r2.dehydrated !== null ? (L3(O2, O2.current & 1), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? $s(e, n, t) : (L3(O2, O2.current & 1), e = je2(e, n, t), e !== null ? e.sibling : null);
        L3(O2, O2.current & 1);
        break;
      case 19:
        if (r2 = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r2)
            return Ks(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), L3(O2, O2.current), r2)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Hs(e, n, t);
    }
    return je2(e, n, t);
  }
  var Ys, li, Xs, Gs;
  Ys = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6)
        e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n)
          return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  };
  li = function() {
  };
  Xs = function(e, n, t, r2) {
    var l = e.memoizedProps;
    if (l !== r2) {
      e = n.stateNode, dn(Le2.current);
      var i2 = null;
      switch (t) {
        case "input":
          l = _l(e, l), r2 = _l(e, r2), i2 = [];
          break;
        case "select":
          l = F4({}, l, { value: void 0 }), r2 = F4({}, r2, { value: void 0 }), i2 = [];
          break;
        case "textarea":
          l = Ll(e, l), r2 = Ll(e, r2), i2 = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r2.onClick == "function" && (e.onclick = Er);
      }
      Ml(t, r2);
      var u2;
      t = null;
      for (d3 in l)
        if (!r2.hasOwnProperty(d3) && l.hasOwnProperty(d3) && l[d3] != null)
          if (d3 === "style") {
            var o2 = l[d3];
            for (u2 in o2)
              o2.hasOwnProperty(u2) && (t || (t = {}), t[u2] = "");
          } else
            d3 !== "dangerouslySetInnerHTML" && d3 !== "children" && d3 !== "suppressContentEditableWarning" && d3 !== "suppressHydrationWarning" && d3 !== "autoFocus" && (gt.hasOwnProperty(d3) ? i2 || (i2 = []) : (i2 = i2 || []).push(d3, null));
      for (d3 in r2) {
        var s2 = r2[d3];
        if (o2 = l?.[d3], r2.hasOwnProperty(d3) && s2 !== o2 && (s2 != null || o2 != null))
          if (d3 === "style")
            if (o2) {
              for (u2 in o2)
                !o2.hasOwnProperty(u2) || s2 && s2.hasOwnProperty(u2) || (t || (t = {}), t[u2] = "");
              for (u2 in s2)
                s2.hasOwnProperty(u2) && o2[u2] !== s2[u2] && (t || (t = {}), t[u2] = s2[u2]);
            } else
              t || (i2 || (i2 = []), i2.push(d3, t)), t = s2;
          else
            d3 === "dangerouslySetInnerHTML" ? (s2 = s2 ? s2.__html : void 0, o2 = o2 ? o2.__html : void 0, s2 != null && o2 !== s2 && (i2 = i2 || []).push(d3, s2)) : d3 === "children" ? typeof s2 != "string" && typeof s2 != "number" || (i2 = i2 || []).push(d3, "" + s2) : d3 !== "suppressContentEditableWarning" && d3 !== "suppressHydrationWarning" && (gt.hasOwnProperty(d3) ? (s2 != null && d3 === "onScroll" && T3("scroll", e), i2 || o2 === s2 || (i2 = [])) : (i2 = i2 || []).push(d3, s2));
      }
      t && (i2 = i2 || []).push("style", t);
      var d3 = i2;
      (n.updateQueue = d3) && (n.flags |= 4);
    }
  };
  Gs = function(e, n, t, r2) {
    t !== r2 && (n.flags |= 4);
  };
  function tt(e, n) {
    if (!D3)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), n = n.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var r2 = null; t !== null; )
            t.alternate !== null && (r2 = t), t = t.sibling;
          r2 === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r2.sibling = null;
      }
  }
  function G3(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r2 = 0;
    if (n)
      for (var l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r2 |= l.subtreeFlags & 14680064, r2 |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r2 |= l.subtreeFlags, r2 |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r2, e.childLanes = t, n;
  }
  function uf(e, n, t) {
    var r2 = n.pendingProps;
    switch (Ti(n), n.tag) {
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
        return G3(n), null;
      case 1:
        return le3(n.type) && Cr(), G3(n), null;
      case 3:
        return r2 = n.stateNode, Kn(), M5(re2), M5(J3), Vi(), r2.pendingContext && (r2.context = r2.pendingContext, r2.pendingContext = null), (e === null || e.child === null) && (bt(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ke3 !== null && (di(ke3), ke3 = null))), li(e, n), G3(n), null;
      case 5:
        ji(n);
        var l = dn(Tt.current);
        if (t = n.type, e !== null && n.stateNode != null)
          Xs(e, n, t, r2, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r2) {
            if (n.stateNode === null)
              throw Error(v2(166));
            return G3(n), null;
          }
          if (e = dn(Le2.current), bt(n)) {
            r2 = n.stateNode, t = n.type;
            var i2 = n.memoizedProps;
            switch (r2[ze2] = n, r2[Pt] = i2, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                T3("cancel", r2), T3("close", r2);
                break;
              case "iframe":
              case "object":
              case "embed":
                T3("load", r2);
                break;
              case "video":
              case "audio":
                for (l = 0; l < st.length; l++)
                  T3(st[l], r2);
                break;
              case "source":
                T3("error", r2);
                break;
              case "img":
              case "image":
              case "link":
                T3("error", r2), T3("load", r2);
                break;
              case "details":
                T3("toggle", r2);
                break;
              case "input":
                au(r2, i2), T3("invalid", r2);
                break;
              case "select":
                r2._wrapperState = { wasMultiple: !!i2.multiple }, T3("invalid", r2);
                break;
              case "textarea":
                fu(r2, i2), T3("invalid", r2);
            }
            Ml(t, i2), l = null;
            for (var u2 in i2)
              if (i2.hasOwnProperty(u2)) {
                var o2 = i2[u2];
                u2 === "children" ? typeof o2 == "string" ? r2.textContent !== o2 && (i2.suppressHydrationWarning !== true && qt(r2.textContent, o2, e), l = ["children", o2]) : typeof o2 == "number" && r2.textContent !== "" + o2 && (i2.suppressHydrationWarning !== true && qt(r2.textContent, o2, e), l = ["children", "" + o2]) : gt.hasOwnProperty(u2) && o2 != null && u2 === "onScroll" && T3("scroll", r2);
              }
            switch (t) {
              case "input":
                At(r2), cu(r2, i2, true);
                break;
              case "textarea":
                At(r2), du(r2);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i2.onClick == "function" && (r2.onclick = Er);
            }
            r2 = l, n.updateQueue = r2, r2 !== null && (n.flags |= 4);
          } else {
            u2 = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Eo(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u2.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r2.is == "string" ? e = u2.createElement(t, { is: r2.is }) : (e = u2.createElement(t), t === "select" && (u2 = e, r2.multiple ? u2.multiple = true : r2.size && (u2.size = r2.size))) : e = u2.createElementNS(e, t), e[ze2] = n, e[Pt] = r2, Ys(e, n, false, false), n.stateNode = e;
            e: {
              switch (u2 = Dl(t, r2), t) {
                case "dialog":
                  T3("cancel", e), T3("close", e), l = r2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  T3("load", e), l = r2;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < st.length; l++)
                    T3(st[l], e);
                  l = r2;
                  break;
                case "source":
                  T3("error", e), l = r2;
                  break;
                case "img":
                case "image":
                case "link":
                  T3("error", e), T3("load", e), l = r2;
                  break;
                case "details":
                  T3("toggle", e), l = r2;
                  break;
                case "input":
                  au(e, r2), l = _l(e, r2), T3("invalid", e);
                  break;
                case "option":
                  l = r2;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r2.multiple }, l = F4({}, r2, { value: void 0 }), T3("invalid", e);
                  break;
                case "textarea":
                  fu(e, r2), l = Ll(e, r2), T3("invalid", e);
                  break;
                default:
                  l = r2;
              }
              Ml(t, l), o2 = l;
              for (i2 in o2)
                if (o2.hasOwnProperty(i2)) {
                  var s2 = o2[i2];
                  i2 === "style" ? No(e, s2) : i2 === "dangerouslySetInnerHTML" ? (s2 = s2 ? s2.__html : void 0, s2 != null && Co(e, s2)) : i2 === "children" ? typeof s2 == "string" ? (t !== "textarea" || s2 !== "") && wt(e, s2) : typeof s2 == "number" && wt(e, "" + s2) : i2 !== "suppressContentEditableWarning" && i2 !== "suppressHydrationWarning" && i2 !== "autoFocus" && (gt.hasOwnProperty(i2) ? s2 != null && i2 === "onScroll" && T3("scroll", e) : s2 != null && hi(e, i2, s2, u2));
                }
              switch (t) {
                case "input":
                  At(e), cu(e, r2, false);
                  break;
                case "textarea":
                  At(e), du(e);
                  break;
                case "option":
                  r2.value != null && e.setAttribute("value", "" + tn(r2.value));
                  break;
                case "select":
                  e.multiple = !!r2.multiple, i2 = r2.value, i2 != null ? In(e, !!r2.multiple, i2, false) : r2.defaultValue != null && In(e, !!r2.multiple, r2.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Er);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r2 = !!r2.autoFocus;
                  break e;
                case "img":
                  r2 = true;
                  break e;
                default:
                  r2 = false;
              }
            }
            r2 && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return G3(n), null;
      case 6:
        if (e && n.stateNode != null)
          Gs(e, n, e.memoizedProps, r2);
        else {
          if (typeof r2 != "string" && n.stateNode === null)
            throw Error(v2(166));
          if (t = dn(Tt.current), dn(Le2.current), bt(n)) {
            if (r2 = n.stateNode, t = n.memoizedProps, r2[ze2] = n, (i2 = r2.nodeValue !== t) && (e = se3, e !== null))
              switch (e.tag) {
                case 3:
                  qt(r2.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true && qt(r2.nodeValue, t, (e.mode & 1) !== 0);
              }
            i2 && (n.flags |= 4);
          } else
            r2 = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r2), r2[ze2] = n, n.stateNode = r2;
        }
        return G3(n), null;
      case 13:
        if (M5(O2), r2 = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (D3 && oe3 !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
            ds(), Qn(), n.flags |= 98560, i2 = false;
          else if (i2 = bt(n), r2 !== null && r2.dehydrated !== null) {
            if (e === null) {
              if (!i2)
                throw Error(v2(318));
              if (i2 = n.memoizedState, i2 = i2 !== null ? i2.dehydrated : null, !i2)
                throw Error(v2(317));
              i2[ze2] = n;
            } else
              Qn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            G3(n), i2 = false;
          } else
            ke3 !== null && (di(ke3), ke3 = null), i2 = true;
          if (!i2)
            return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0 ? (n.lanes = t, n) : (r2 = r2 !== null, r2 !== (e !== null && e.memoizedState !== null) && r2 && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (O2.current & 1) !== 0 ? B5 === 0 && (B5 = 3) : Ji())), n.updateQueue !== null && (n.flags |= 4), G3(n), null);
      case 4:
        return Kn(), li(e, n), e === null && _t(n.stateNode.containerInfo), G3(n), null;
      case 10:
        return Ri(n.type._context), G3(n), null;
      case 17:
        return le3(n.type) && Cr(), G3(n), null;
      case 19:
        if (M5(O2), i2 = n.memoizedState, i2 === null)
          return G3(n), null;
        if (r2 = (n.flags & 128) !== 0, u2 = i2.rendering, u2 === null)
          if (r2)
            tt(i2, false);
          else {
            if (B5 !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (u2 = Tr(e), u2 !== null) {
                  for (n.flags |= 128, tt(i2, false), r2 = u2.updateQueue, r2 !== null && (n.updateQueue = r2, n.flags |= 4), n.subtreeFlags = 0, r2 = t, t = n.child; t !== null; )
                    i2 = t, e = r2, i2.flags &= 14680066, u2 = i2.alternate, u2 === null ? (i2.childLanes = 0, i2.lanes = e, i2.child = null, i2.subtreeFlags = 0, i2.memoizedProps = null, i2.memoizedState = null, i2.updateQueue = null, i2.dependencies = null, i2.stateNode = null) : (i2.childLanes = u2.childLanes, i2.lanes = u2.lanes, i2.child = u2.child, i2.subtreeFlags = 0, i2.deletions = null, i2.memoizedProps = u2.memoizedProps, i2.memoizedState = u2.memoizedState, i2.updateQueue = u2.updateQueue, i2.type = u2.type, e = u2.dependencies, i2.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return L3(O2, O2.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            i2.tail !== null && j2() > Xn && (n.flags |= 128, r2 = true, tt(i2, false), n.lanes = 4194304);
          }
        else {
          if (!r2)
            if (e = Tr(u2), e !== null) {
              if (n.flags |= 128, r2 = true, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), tt(i2, true), i2.tail === null && i2.tailMode === "hidden" && !u2.alternate && !D3)
                return G3(n), null;
            } else
              2 * j2() - i2.renderingStartTime > Xn && t !== 1073741824 && (n.flags |= 128, r2 = true, tt(i2, false), n.lanes = 4194304);
          i2.isBackwards ? (u2.sibling = n.child, n.child = u2) : (t = i2.last, t !== null ? t.sibling = u2 : n.child = u2, i2.last = u2);
        }
        return i2.tail !== null ? (n = i2.tail, i2.rendering = n, i2.tail = n.sibling, i2.renderingStartTime = j2(), n.sibling = null, t = O2.current, L3(O2, r2 ? t & 1 | 2 : t & 1), n) : (G3(n), null);
      case 22:
      case 23:
        return Zi(), r2 = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r2 && (n.flags |= 8192), r2 && (n.mode & 1) !== 0 ? (ue2 & 1073741824) !== 0 && (G3(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : G3(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v2(156, n.tag));
  }
  function of(e, n) {
    switch (Ti(n), n.tag) {
      case 1:
        return le3(n.type) && Cr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Kn(), M5(re2), M5(J3), Vi(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return ji(n), null;
      case 13:
        if (M5(O2), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(v2(340));
          Qn();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return M5(O2), null;
      case 4:
        return Kn(), null;
      case 10:
        return Ri(n.type._context), null;
      case 22:
      case 23:
        return Zi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var tr = false, Z3 = false, sf = typeof WeakSet == "function" ? WeakSet : Set, w2 = null;
  function Rn(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r2) {
          I3(e, n, r2);
        }
      else
        t.current = null;
  }
  function ii(e, n, t) {
    try {
      t();
    } catch (r2) {
      I3(e, n, r2);
    }
  }
  var to = false;
  function af(e, n) {
    if (Hl = wr, e = bo(), Pi(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r2 = t.getSelection && t.getSelection();
          if (r2 && r2.rangeCount !== 0) {
            t = r2.anchorNode;
            var l = r2.anchorOffset, i2 = r2.focusNode;
            r2 = r2.focusOffset;
            try {
              t.nodeType, i2.nodeType;
            } catch {
              t = null;
              break e;
            }
            var u2 = 0, o2 = -1, s2 = -1, d3 = 0, m2 = 0, h2 = e, p = null;
            n:
              for (; ; ) {
                for (var g; h2 !== t || l !== 0 && h2.nodeType !== 3 || (o2 = u2 + l), h2 !== i2 || r2 !== 0 && h2.nodeType !== 3 || (s2 = u2 + r2), h2.nodeType === 3 && (u2 += h2.nodeValue.length), (g = h2.firstChild) !== null; )
                  p = h2, h2 = g;
                for (; ; ) {
                  if (h2 === e)
                    break n;
                  if (p === t && ++d3 === l && (o2 = u2), p === i2 && ++m2 === r2 && (s2 = u2), (g = h2.nextSibling) !== null)
                    break;
                  h2 = p, p = h2.parentNode;
                }
                h2 = g;
              }
            t = o2 === -1 || s2 === -1 ? null : { start: o2, end: s2 };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (Wl = { focusedElem: e, selectionRange: t }, wr = false, w2 = n; w2 !== null; )
      if (n = w2, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, w2 = e;
      else
        for (; w2 !== null; ) {
          n = w2;
          try {
            var S3 = n.alternate;
            if ((n.flags & 1024) !== 0)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (S3 !== null) {
                    var k3 = S3.memoizedProps, U4 = S3.memoizedState, c = n.stateNode, a = c.getSnapshotBeforeUpdate(n.elementType === n.type ? k3 : we4(n.type, k3), U4);
                    c.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var f2 = n.stateNode.containerInfo;
                  f2.nodeType === 1 ? f2.textContent = "" : f2.nodeType === 9 && f2.documentElement && f2.removeChild(f2.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(v2(163));
              }
          } catch (y2) {
            I3(n, n.return, y2);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, w2 = e;
            break;
          }
          w2 = n.return;
        }
    return S3 = to, to = false, S3;
  }
  function ht(e, n, t) {
    var r2 = n.updateQueue;
    if (r2 = r2 !== null ? r2.lastEffect : null, r2 !== null) {
      var l = r2 = r2.next;
      do {
        if ((l.tag & e) === e) {
          var i2 = l.destroy;
          l.destroy = void 0, i2 !== void 0 && ii(n, t, i2);
        }
        l = l.next;
      } while (l !== r2);
    }
  }
  function Kr(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r2 = t.create;
          t.destroy = r2();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ui(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Zs(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Zs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[ze2], delete n[Pt], delete n[Kl], delete n[Qc], delete n[$c])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Js(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ro(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Js(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function oi(e, n, t) {
    var r2 = e.tag;
    if (r2 === 5 || r2 === 6)
      e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Er));
    else if (r2 !== 4 && (e = e.child, e !== null))
      for (oi(e, n, t), e = e.sibling; e !== null; )
        oi(e, n, t), e = e.sibling;
  }
  function si(e, n, t) {
    var r2 = e.tag;
    if (r2 === 5 || r2 === 6)
      e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r2 !== 4 && (e = e.child, e !== null))
      for (si(e, n, t), e = e.sibling; e !== null; )
        si(e, n, t), e = e.sibling;
  }
  var $4 = null, Se3 = false;
  function Be2(e, n, t) {
    for (t = t.child; t !== null; )
      qs(e, n, t), t = t.sibling;
  }
  function qs(e, n, t) {
    if (Pe4 && typeof Pe4.onCommitFiberUnmount == "function")
      try {
        Pe4.onCommitFiberUnmount(jr, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        Z3 || Rn(t, n);
      case 6:
        var r2 = $4, l = Se3;
        $4 = null, Be2(e, n, t), $4 = r2, Se3 = l, $4 !== null && (Se3 ? (e = $4, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : $4.removeChild(t.stateNode));
        break;
      case 18:
        $4 !== null && (Se3 ? (e = $4, t = t.stateNode, e.nodeType === 8 ? fl(e.parentNode, t) : e.nodeType === 1 && fl(e, t), Ct(e)) : fl($4, t.stateNode));
        break;
      case 4:
        r2 = $4, l = Se3, $4 = t.stateNode.containerInfo, Se3 = true, Be2(e, n, t), $4 = r2, Se3 = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Z3 && (r2 = t.updateQueue, r2 !== null && (r2 = r2.lastEffect, r2 !== null))) {
          l = r2 = r2.next;
          do {
            var i2 = l, u2 = i2.destroy;
            i2 = i2.tag, u2 !== void 0 && ((i2 & 2) !== 0 || (i2 & 4) !== 0) && ii(t, n, u2), l = l.next;
          } while (l !== r2);
        }
        Be2(e, n, t);
        break;
      case 1:
        if (!Z3 && (Rn(t, n), r2 = t.stateNode, typeof r2.componentWillUnmount == "function"))
          try {
            r2.props = t.memoizedProps, r2.state = t.memoizedState, r2.componentWillUnmount();
          } catch (o2) {
            I3(t, n, o2);
          }
        Be2(e, n, t);
        break;
      case 21:
        Be2(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Z3 = (r2 = Z3) || t.memoizedState !== null, Be2(e, n, t), Z3 = r2) : Be2(e, n, t);
        break;
      default:
        Be2(e, n, t);
    }
  }
  function lo(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new sf()), n.forEach(function(r2) {
        var l = gf.bind(null, e, r2);
        t.has(r2) || (t.add(r2), r2.then(l, l));
      });
    }
  }
  function ge3(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r2 = 0; r2 < t.length; r2++) {
        var l = t[r2];
        try {
          var i2 = e, u2 = n, o2 = u2;
          e:
            for (; o2 !== null; ) {
              switch (o2.tag) {
                case 5:
                  $4 = o2.stateNode, Se3 = false;
                  break e;
                case 3:
                  $4 = o2.stateNode.containerInfo, Se3 = true;
                  break e;
                case 4:
                  $4 = o2.stateNode.containerInfo, Se3 = true;
                  break e;
              }
              o2 = o2.return;
            }
          if ($4 === null)
            throw Error(v2(160));
          qs(i2, u2, l), $4 = null, Se3 = false;
          var s2 = l.alternate;
          s2 !== null && (s2.return = null), l.return = null;
        } catch (d3) {
          I3(l, n, d3);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        bs(n, e), n = n.sibling;
  }
  function bs(e, n) {
    var t = e.alternate, r2 = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ge3(n, e), Ne2(e), r2 & 4) {
          try {
            ht(3, e, e.return), Kr(3, e);
          } catch (k3) {
            I3(e, e.return, k3);
          }
          try {
            ht(5, e, e.return);
          } catch (k3) {
            I3(e, e.return, k3);
          }
        }
        break;
      case 1:
        ge3(n, e), Ne2(e), r2 & 512 && t !== null && Rn(t, t.return);
        break;
      case 5:
        if (ge3(n, e), Ne2(e), r2 & 512 && t !== null && Rn(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            wt(l, "");
          } catch (k3) {
            I3(e, e.return, k3);
          }
        }
        if (r2 & 4 && (l = e.stateNode, l != null)) {
          var i2 = e.memoizedProps, u2 = t !== null ? t.memoizedProps : i2, o2 = e.type, s2 = e.updateQueue;
          if (e.updateQueue = null, s2 !== null)
            try {
              o2 === "input" && i2.type === "radio" && i2.name != null && So(l, i2), Dl(o2, u2);
              var d3 = Dl(o2, i2);
              for (u2 = 0; u2 < s2.length; u2 += 2) {
                var m2 = s2[u2], h2 = s2[u2 + 1];
                m2 === "style" ? No(l, h2) : m2 === "dangerouslySetInnerHTML" ? Co(l, h2) : m2 === "children" ? wt(l, h2) : hi(l, m2, h2, d3);
              }
              switch (o2) {
                case "input":
                  zl(l, i2);
                  break;
                case "textarea":
                  ko(l, i2);
                  break;
                case "select":
                  var p = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i2.multiple;
                  var g = i2.value;
                  g != null ? In(l, !!i2.multiple, g, false) : p !== !!i2.multiple && (i2.defaultValue != null ? In(l, !!i2.multiple, i2.defaultValue, true) : In(l, !!i2.multiple, i2.multiple ? [] : "", false));
              }
              l[Pt] = i2;
            } catch (k3) {
              I3(e, e.return, k3);
            }
        }
        break;
      case 6:
        if (ge3(n, e), Ne2(e), r2 & 4) {
          if (e.stateNode === null)
            throw Error(v2(162));
          l = e.stateNode, i2 = e.memoizedProps;
          try {
            l.nodeValue = i2;
          } catch (k3) {
            I3(e, e.return, k3);
          }
        }
        break;
      case 3:
        if (ge3(n, e), Ne2(e), r2 & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Ct(n.containerInfo);
          } catch (k3) {
            I3(e, e.return, k3);
          }
        break;
      case 4:
        ge3(n, e), Ne2(e);
        break;
      case 13:
        ge3(n, e), Ne2(e), l = e.child, l.flags & 8192 && (i2 = l.memoizedState !== null, l.stateNode.isHidden = i2, !i2 || l.alternate !== null && l.alternate.memoizedState !== null || (Xi = j2())), r2 & 4 && lo(e);
        break;
      case 22:
        if (m2 = t !== null && t.memoizedState !== null, e.mode & 1 ? (Z3 = (d3 = Z3) || m2, ge3(n, e), Z3 = d3) : ge3(n, e), Ne2(e), r2 & 8192) {
          if (d3 = e.memoizedState !== null, (e.stateNode.isHidden = d3) && !m2 && (e.mode & 1) !== 0)
            for (w2 = e, m2 = e.child; m2 !== null; ) {
              for (h2 = w2 = m2; w2 !== null; ) {
                switch (p = w2, g = p.child, p.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ht(4, p, p.return);
                    break;
                  case 1:
                    Rn(p, p.return);
                    var S3 = p.stateNode;
                    if (typeof S3.componentWillUnmount == "function") {
                      r2 = p, t = p.return;
                      try {
                        n = r2, S3.props = n.memoizedProps, S3.state = n.memoizedState, S3.componentWillUnmount();
                      } catch (k3) {
                        I3(r2, t, k3);
                      }
                    }
                    break;
                  case 5:
                    Rn(p, p.return);
                    break;
                  case 22:
                    if (p.memoizedState !== null) {
                      uo(h2);
                      continue;
                    }
                }
                g !== null ? (g.return = p, w2 = g) : uo(h2);
              }
              m2 = m2.sibling;
            }
          e:
            for (m2 = null, h2 = e; ; ) {
              if (h2.tag === 5) {
                if (m2 === null) {
                  m2 = h2;
                  try {
                    l = h2.stateNode, d3 ? (i2 = l.style, typeof i2.setProperty == "function" ? i2.setProperty("display", "none", "important") : i2.display = "none") : (o2 = h2.stateNode, s2 = h2.memoizedProps.style, u2 = s2 != null && s2.hasOwnProperty("display") ? s2.display : null, o2.style.display = xo("display", u2));
                  } catch (k3) {
                    I3(e, e.return, k3);
                  }
                }
              } else if (h2.tag === 6) {
                if (m2 === null)
                  try {
                    h2.stateNode.nodeValue = d3 ? "" : h2.memoizedProps;
                  } catch (k3) {
                    I3(e, e.return, k3);
                  }
              } else if ((h2.tag !== 22 && h2.tag !== 23 || h2.memoizedState === null || h2 === e) && h2.child !== null) {
                h2.child.return = h2, h2 = h2.child;
                continue;
              }
              if (h2 === e)
                break e;
              for (; h2.sibling === null; ) {
                if (h2.return === null || h2.return === e)
                  break e;
                m2 === h2 && (m2 = null), h2 = h2.return;
              }
              m2 === h2 && (m2 = null), h2.sibling.return = h2.return, h2 = h2.sibling;
            }
        }
        break;
      case 19:
        ge3(n, e), Ne2(e), r2 & 4 && lo(e);
        break;
      case 21:
        break;
      default:
        ge3(n, e), Ne2(e);
    }
  }
  function Ne2(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Js(t)) {
              var r2 = t;
              break e;
            }
            t = t.return;
          }
          throw Error(v2(160));
        }
        switch (r2.tag) {
          case 5:
            var l = r2.stateNode;
            r2.flags & 32 && (wt(l, ""), r2.flags &= -33);
            var i2 = ro(e);
            si(e, i2, l);
            break;
          case 3:
          case 4:
            var u2 = r2.stateNode.containerInfo, o2 = ro(e);
            oi(e, o2, u2);
            break;
          default:
            throw Error(v2(161));
        }
      } catch (s2) {
        I3(e, e.return, s2);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function cf(e, n, t) {
    w2 = e, ea(e, n, t);
  }
  function ea(e, n, t) {
    for (var r2 = (e.mode & 1) !== 0; w2 !== null; ) {
      var l = w2, i2 = l.child;
      if (l.tag === 22 && r2) {
        var u2 = l.memoizedState !== null || tr;
        if (!u2) {
          var o2 = l.alternate, s2 = o2 !== null && o2.memoizedState !== null || Z3;
          o2 = tr;
          var d3 = Z3;
          if (tr = u2, (Z3 = s2) && !d3)
            for (w2 = l; w2 !== null; )
              u2 = w2, s2 = u2.child, u2.tag === 22 && u2.memoizedState !== null ? oo(l) : s2 !== null ? (s2.return = u2, w2 = s2) : oo(l);
          for (; i2 !== null; )
            w2 = i2, ea(i2, n, t), i2 = i2.sibling;
          w2 = l, tr = o2, Z3 = d3;
        }
        io(e, n, t);
      } else
        (l.subtreeFlags & 8772) !== 0 && i2 !== null ? (i2.return = l, w2 = i2) : io(e, n, t);
    }
  }
  function io(e) {
    for (; w2 !== null; ) {
      var n = w2;
      if ((n.flags & 8772) !== 0) {
        var t = n.alternate;
        try {
          if ((n.flags & 8772) !== 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Z3 || Kr(5, n);
                break;
              case 1:
                var r2 = n.stateNode;
                if (n.flags & 4 && !Z3)
                  if (t === null)
                    r2.componentDidMount();
                  else {
                    var l = n.elementType === n.type ? t.memoizedProps : we4(n.type, t.memoizedProps);
                    r2.componentDidUpdate(l, t.memoizedState, r2.__reactInternalSnapshotBeforeUpdate);
                  }
                var i2 = n.updateQueue;
                i2 !== null && Hu(n, i2, r2);
                break;
              case 3:
                var u2 = n.updateQueue;
                if (u2 !== null) {
                  if (t = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  Hu(n, u2, t);
                }
                break;
              case 5:
                var o2 = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = o2;
                  var s2 = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s2.autoFocus && t.focus();
                      break;
                    case "img":
                      s2.src && (t.src = s2.src);
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
                if (n.memoizedState === null) {
                  var d3 = n.alternate;
                  if (d3 !== null) {
                    var m2 = d3.memoizedState;
                    if (m2 !== null) {
                      var h2 = m2.dehydrated;
                      h2 !== null && Ct(h2);
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
                throw Error(v2(163));
            }
          Z3 || n.flags & 512 && ui(n);
        } catch (p) {
          I3(n, n.return, p);
        }
      }
      if (n === e) {
        w2 = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, w2 = t;
        break;
      }
      w2 = n.return;
    }
  }
  function uo(e) {
    for (; w2 !== null; ) {
      var n = w2;
      if (n === e) {
        w2 = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, w2 = t;
        break;
      }
      w2 = n.return;
    }
  }
  function oo(e) {
    for (; w2 !== null; ) {
      var n = w2;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              Kr(4, n);
            } catch (s2) {
              I3(n, t, s2);
            }
            break;
          case 1:
            var r2 = n.stateNode;
            if (typeof r2.componentDidMount == "function") {
              var l = n.return;
              try {
                r2.componentDidMount();
              } catch (s2) {
                I3(n, l, s2);
              }
            }
            var i2 = n.return;
            try {
              ui(n);
            } catch (s2) {
              I3(n, i2, s2);
            }
            break;
          case 5:
            var u2 = n.return;
            try {
              ui(n);
            } catch (s2) {
              I3(n, u2, s2);
            }
        }
      } catch (s2) {
        I3(n, n.return, s2);
      }
      if (n === e) {
        w2 = null;
        break;
      }
      var o2 = n.sibling;
      if (o2 !== null) {
        o2.return = n.return, w2 = o2;
        break;
      }
      w2 = n.return;
    }
  }
  var ff = Math.ceil, Or = Ve3.ReactCurrentDispatcher, Ki = Ve3.ReactCurrentOwner, he4 = Ve3.ReactCurrentBatchConfig, _2 = 0, Q3 = null, V2 = null, K4 = 0, ue2 = 0, Fn = un(0), B5 = 0, Rt = null, gn = 0, Yr = 0, Yi = 0, vt = null, ne3 = null, Xi = 0, Xn = 1 / 0, Te2 = null, Rr = false, ai = null, be4 = null, rr = false, Ye = null, Fr = 0, yt = 0, ci = null, fr = -1, dr = 0;
  function b3() {
    return (_2 & 6) !== 0 ? j2() : fr !== -1 ? fr : fr = j2();
  }
  function en(e) {
    return (e.mode & 1) === 0 ? 1 : (_2 & 2) !== 0 && K4 !== 0 ? K4 & -K4 : Yc.transition !== null ? (dr === 0 && (dr = Uo()), dr) : (e = P, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qo(e.type)), e);
  }
  function Ce3(e, n, t, r2) {
    if (50 < yt)
      throw yt = 0, ci = null, Error(v2(185));
    Ft(e, t, r2), ((_2 & 2) === 0 || e !== Q3) && (e === Q3 && ((_2 & 2) === 0 && (Yr |= t), B5 === 4 && $e2(e, K4)), ie2(e, r2), t === 1 && _2 === 0 && (n.mode & 1) === 0 && (Xn = j2() + 500, Wr && on()));
  }
  function ie2(e, n) {
    var t = e.callbackNode;
    Ga(e, n);
    var r2 = gr(e, e === Q3 ? K4 : 0);
    if (r2 === 0)
      t !== null && hu(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r2 & -r2, e.callbackPriority !== n) {
      if (t != null && hu(t), n === 1)
        e.tag === 0 ? Kc(so.bind(null, e)) : as(so.bind(null, e)), Hc(function() {
          (_2 & 6) === 0 && on();
        }), t = null;
      else {
        switch (jo(r2)) {
          case 1:
            t = Si;
            break;
          case 4:
            t = Fo;
            break;
          case 16:
            t = yr;
            break;
          case 536870912:
            t = Io;
            break;
          default:
            t = yr;
        }
        t = sa(t, na.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function na(e, n) {
    if (fr = -1, dr = 0, (_2 & 6) !== 0)
      throw Error(v2(327));
    var t = e.callbackNode;
    if (Bn() && e.callbackNode !== t)
      return null;
    var r2 = gr(e, e === Q3 ? K4 : 0);
    if (r2 === 0)
      return null;
    if ((r2 & 30) !== 0 || (r2 & e.expiredLanes) !== 0 || n)
      n = Ir(e, r2);
    else {
      n = r2;
      var l = _2;
      _2 |= 2;
      var i2 = ra();
      (Q3 !== e || K4 !== n) && (Te2 = null, Xn = j2() + 500, pn(e, n));
      do
        try {
          mf();
          break;
        } catch (o2) {
          ta(e, o2);
        }
      while (1);
      Oi(), Or.current = i2, _2 = l, V2 !== null ? n = 0 : (Q3 = null, K4 = 0, n = B5);
    }
    if (n !== 0) {
      if (n === 2 && (l = Ul(e), l !== 0 && (r2 = l, n = fi(e, l))), n === 1)
        throw t = Rt, pn(e, 0), $e2(e, r2), ie2(e, j2()), t;
      if (n === 6)
        $e2(e, r2);
      else {
        if (l = e.current.alternate, (r2 & 30) === 0 && !df(l) && (n = Ir(e, r2), n === 2 && (i2 = Ul(e), i2 !== 0 && (r2 = i2, n = fi(e, i2))), n === 1))
          throw t = Rt, pn(e, 0), $e2(e, r2), ie2(e, j2()), t;
        switch (e.finishedWork = l, e.finishedLanes = r2, n) {
          case 0:
          case 1:
            throw Error(v2(345));
          case 2:
            an(e, ne3, Te2);
            break;
          case 3:
            if ($e2(e, r2), (r2 & 130023424) === r2 && (n = Xi + 500 - j2(), 10 < n)) {
              if (gr(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r2) !== r2) {
                b3(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = $l(an.bind(null, e, ne3, Te2), n);
              break;
            }
            an(e, ne3, Te2);
            break;
          case 4:
            if ($e2(e, r2), (r2 & 4194240) === r2)
              break;
            for (n = e.eventTimes, l = -1; 0 < r2; ) {
              var u2 = 31 - Ee4(r2);
              i2 = 1 << u2, u2 = n[u2], u2 > l && (l = u2), r2 &= ~i2;
            }
            if (r2 = l, r2 = j2() - r2, r2 = (120 > r2 ? 120 : 480 > r2 ? 480 : 1080 > r2 ? 1080 : 1920 > r2 ? 1920 : 3e3 > r2 ? 3e3 : 4320 > r2 ? 4320 : 1960 * ff(r2 / 1960)) - r2, 10 < r2) {
              e.timeoutHandle = $l(an.bind(null, e, ne3, Te2), r2);
              break;
            }
            an(e, ne3, Te2);
            break;
          case 5:
            an(e, ne3, Te2);
            break;
          default:
            throw Error(v2(329));
        }
      }
    }
    return ie2(e, j2()), e.callbackNode === t ? na.bind(null, e) : null;
  }
  function fi(e, n) {
    var t = vt;
    return e.current.memoizedState.isDehydrated && (pn(e, n).flags |= 256), e = Ir(e, n), e !== 2 && (n = ne3, ne3 = t, n !== null && di(n)), e;
  }
  function di(e) {
    ne3 === null ? ne3 = e : ne3.push.apply(ne3, e);
  }
  function df(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r2 = 0; r2 < t.length; r2++) {
            var l = t[r2], i2 = l.getSnapshot;
            l = l.value;
            try {
              if (!xe4(i2(), l))
                return false;
            } catch {
              return false;
            }
          }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null)
        t.return = n, n = t;
      else {
        if (n === e)
          break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return true;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return true;
  }
  function $e2(e, n) {
    for (n &= ~Yi, n &= ~Yr, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - Ee4(n), r2 = 1 << t;
      e[t] = -1, n &= ~r2;
    }
  }
  function so(e) {
    if ((_2 & 6) !== 0)
      throw Error(v2(327));
    Bn();
    var n = gr(e, 0);
    if ((n & 1) === 0)
      return ie2(e, j2()), null;
    var t = Ir(e, n);
    if (e.tag !== 0 && t === 2) {
      var r2 = Ul(e);
      r2 !== 0 && (n = r2, t = fi(e, r2));
    }
    if (t === 1)
      throw t = Rt, pn(e, 0), $e2(e, n), ie2(e, j2()), t;
    if (t === 6)
      throw Error(v2(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, an(e, ne3, Te2), ie2(e, j2()), null;
  }
  function Gi(e, n) {
    var t = _2;
    _2 |= 1;
    try {
      return e(n);
    } finally {
      _2 = t, _2 === 0 && (Xn = j2() + 500, Wr && on());
    }
  }
  function wn(e) {
    Ye !== null && Ye.tag === 0 && (_2 & 6) === 0 && Bn();
    var n = _2;
    _2 |= 1;
    var t = he4.transition, r2 = P;
    try {
      if (he4.transition = null, P = 1, e)
        return e();
    } finally {
      P = r2, he4.transition = t, _2 = n, (_2 & 6) === 0 && on();
    }
  }
  function Zi() {
    ue2 = Fn.current, M5(Fn);
  }
  function pn(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Bc(t)), V2 !== null)
      for (t = V2.return; t !== null; ) {
        var r2 = t;
        switch (Ti(r2), r2.tag) {
          case 1:
            r2 = r2.type.childContextTypes, r2 != null && Cr();
            break;
          case 3:
            Kn(), M5(re2), M5(J3), Vi();
            break;
          case 5:
            ji(r2);
            break;
          case 4:
            Kn();
            break;
          case 13:
            M5(O2);
            break;
          case 19:
            M5(O2);
            break;
          case 10:
            Ri(r2.type._context);
            break;
          case 22:
          case 23:
            Zi();
        }
        t = t.return;
      }
    if (Q3 = e, V2 = e = nn(e.current, null), K4 = ue2 = n, B5 = 0, Rt = null, Yi = Yr = gn = 0, ne3 = vt = null, fn !== null) {
      for (n = 0; n < fn.length; n++)
        if (t = fn[n], r2 = t.interleaved, r2 !== null) {
          t.interleaved = null;
          var l = r2.next, i2 = t.pending;
          if (i2 !== null) {
            var u2 = i2.next;
            i2.next = l, r2.next = u2;
          }
          t.pending = r2;
        }
      fn = null;
    }
    return e;
  }
  function ta(e, n) {
    do {
      var t = V2;
      try {
        if (Oi(), sr.current = Dr, Mr) {
          for (var r2 = R3.memoizedState; r2 !== null; ) {
            var l = r2.queue;
            l !== null && (l.pending = null), r2 = r2.next;
          }
          Mr = false;
        }
        if (yn = 0, W2 = A2 = R3 = null, mt = false, Mt = 0, Ki.current = null, t === null || t.return === null) {
          B5 = 1, Rt = n, V2 = null;
          break;
        }
        e: {
          var i2 = e, u2 = t.return, o2 = t, s2 = n;
          if (n = K4, o2.flags |= 32768, s2 !== null && typeof s2 == "object" && typeof s2.then == "function") {
            var d3 = s2, m2 = o2, h2 = m2.tag;
            if ((m2.mode & 1) === 0 && (h2 === 0 || h2 === 11 || h2 === 15)) {
              var p = m2.alternate;
              p ? (m2.updateQueue = p.updateQueue, m2.memoizedState = p.memoizedState, m2.lanes = p.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var g = Gu(u2);
            if (g !== null) {
              g.flags &= -257, Zu(g, u2, o2, i2, n), g.mode & 1 && Xu(i2, d3, n), n = g, s2 = d3;
              var S3 = n.updateQueue;
              if (S3 === null) {
                var k3 = /* @__PURE__ */ new Set();
                k3.add(s2), n.updateQueue = k3;
              } else
                S3.add(s2);
              break e;
            } else {
              if ((n & 1) === 0) {
                Xu(i2, d3, n), Ji();
                break e;
              }
              s2 = Error(v2(426));
            }
          } else if (D3 && o2.mode & 1) {
            var U4 = Gu(u2);
            if (U4 !== null) {
              (U4.flags & 65536) === 0 && (U4.flags |= 256), Zu(U4, u2, o2, i2, n), Mi(Yn(s2, o2));
              break e;
            }
          }
          i2 = s2 = Yn(s2, o2), B5 !== 4 && (B5 = 2), vt === null ? vt = [i2] : vt.push(i2), i2 = u2;
          do {
            switch (i2.tag) {
              case 3:
                i2.flags |= 65536, n &= -n, i2.lanes |= n;
                var c = Vs(i2, s2, n);
                Bu(i2, c);
                break e;
              case 1:
                o2 = s2;
                var a = i2.type, f2 = i2.stateNode;
                if ((i2.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || f2 !== null && typeof f2.componentDidCatch == "function" && (be4 === null || !be4.has(f2)))) {
                  i2.flags |= 65536, n &= -n, i2.lanes |= n;
                  var y2 = As(i2, o2, n);
                  Bu(i2, y2);
                  break e;
                }
            }
            i2 = i2.return;
          } while (i2 !== null);
        }
        ia(t);
      } catch (E) {
        n = E, V2 === t && t !== null && (V2 = t = t.return);
        continue;
      }
      break;
    } while (1);
  }
  function ra() {
    var e = Or.current;
    return Or.current = Dr, e === null ? Dr : e;
  }
  function Ji() {
    (B5 === 0 || B5 === 3 || B5 === 2) && (B5 = 4), Q3 === null || (gn & 268435455) === 0 && (Yr & 268435455) === 0 || $e2(Q3, K4);
  }
  function Ir(e, n) {
    var t = _2;
    _2 |= 2;
    var r2 = ra();
    (Q3 !== e || K4 !== n) && (Te2 = null, pn(e, n));
    do
      try {
        pf();
        break;
      } catch (l) {
        ta(e, l);
      }
    while (1);
    if (Oi(), _2 = t, Or.current = r2, V2 !== null)
      throw Error(v2(261));
    return Q3 = null, K4 = 0, B5;
  }
  function pf() {
    for (; V2 !== null; )
      la(V2);
  }
  function mf() {
    for (; V2 !== null && !Aa(); )
      la(V2);
  }
  function la(e) {
    var n = oa(e.alternate, e, ue2);
    e.memoizedProps = e.pendingProps, n === null ? ia(e) : V2 = n, Ki.current = null;
  }
  function ia(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, (n.flags & 32768) === 0) {
        if (t = uf(t, n, ue2), t !== null) {
          V2 = t;
          return;
        }
      } else {
        if (t = of(t, n), t !== null) {
          t.flags &= 32767, V2 = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          B5 = 6, V2 = null;
          return;
        }
      }
      if (n = n.sibling, n !== null) {
        V2 = n;
        return;
      }
      V2 = n = e;
    } while (n !== null);
    B5 === 0 && (B5 = 5);
  }
  function an(e, n, t) {
    var r2 = P, l = he4.transition;
    try {
      he4.transition = null, P = 1, hf(e, n, t, r2);
    } finally {
      he4.transition = l, P = r2;
    }
    return null;
  }
  function hf(e, n, t, r2) {
    do
      Bn();
    while (Ye !== null);
    if ((_2 & 6) !== 0)
      throw Error(v2(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(v2(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i2 = t.lanes | t.childLanes;
    if (Za(e, i2), e === Q3 && (V2 = Q3 = null, K4 = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || rr || (rr = true, sa(yr, function() {
      return Bn(), null;
    })), i2 = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || i2) {
      i2 = he4.transition, he4.transition = null;
      var u2 = P;
      P = 1;
      var o2 = _2;
      _2 |= 4, Ki.current = null, af(e, t), bs(t, e), Ic(Wl), wr = !!Hl, Wl = Hl = null, e.current = t, cf(t, e, l), Ba(), _2 = o2, P = u2, he4.transition = i2;
    } else
      e.current = t;
    if (rr && (rr = false, Ye = e, Fr = l), i2 = e.pendingLanes, i2 === 0 && (be4 = null), Qa(t.stateNode, r2), ie2(e, j2()), n !== null)
      for (r2 = e.onRecoverableError, t = 0; t < n.length; t++)
        l = n[t], r2(l.value, { componentStack: l.stack, digest: l.digest });
    if (Rr)
      throw Rr = false, e = ai, ai = null, e;
    return (Fr & 1) !== 0 && e.tag !== 0 && Bn(), i2 = e.pendingLanes, (i2 & 1) !== 0 ? e === ci ? yt++ : (yt = 0, ci = e) : yt = 0, on(), null;
  }
  function Bn() {
    if (Ye !== null) {
      var e = jo(Fr), n = he4.transition, t = P;
      try {
        if (he4.transition = null, P = 16 > e ? 16 : e, Ye === null)
          var r2 = false;
        else {
          if (e = Ye, Ye = null, Fr = 0, (_2 & 6) !== 0)
            throw Error(v2(331));
          var l = _2;
          for (_2 |= 4, w2 = e.current; w2 !== null; ) {
            var i2 = w2, u2 = i2.child;
            if ((w2.flags & 16) !== 0) {
              var o2 = i2.deletions;
              if (o2 !== null) {
                for (var s2 = 0; s2 < o2.length; s2++) {
                  var d3 = o2[s2];
                  for (w2 = d3; w2 !== null; ) {
                    var m2 = w2;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ht(8, m2, i2);
                    }
                    var h2 = m2.child;
                    if (h2 !== null)
                      h2.return = m2, w2 = h2;
                    else
                      for (; w2 !== null; ) {
                        m2 = w2;
                        var p = m2.sibling, g = m2.return;
                        if (Zs(m2), m2 === d3) {
                          w2 = null;
                          break;
                        }
                        if (p !== null) {
                          p.return = g, w2 = p;
                          break;
                        }
                        w2 = g;
                      }
                  }
                }
                var S3 = i2.alternate;
                if (S3 !== null) {
                  var k3 = S3.child;
                  if (k3 !== null) {
                    S3.child = null;
                    do {
                      var U4 = k3.sibling;
                      k3.sibling = null, k3 = U4;
                    } while (k3 !== null);
                  }
                }
                w2 = i2;
              }
            }
            if ((i2.subtreeFlags & 2064) !== 0 && u2 !== null)
              u2.return = i2, w2 = u2;
            else
              e:
                for (; w2 !== null; ) {
                  if (i2 = w2, (i2.flags & 2048) !== 0)
                    switch (i2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ht(9, i2, i2.return);
                    }
                  var c = i2.sibling;
                  if (c !== null) {
                    c.return = i2.return, w2 = c;
                    break e;
                  }
                  w2 = i2.return;
                }
          }
          var a = e.current;
          for (w2 = a; w2 !== null; ) {
            u2 = w2;
            var f2 = u2.child;
            if ((u2.subtreeFlags & 2064) !== 0 && f2 !== null)
              f2.return = u2, w2 = f2;
            else
              e:
                for (u2 = a; w2 !== null; ) {
                  if (o2 = w2, (o2.flags & 2048) !== 0)
                    try {
                      switch (o2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Kr(9, o2);
                      }
                    } catch (E) {
                      I3(o2, o2.return, E);
                    }
                  if (o2 === u2) {
                    w2 = null;
                    break e;
                  }
                  var y2 = o2.sibling;
                  if (y2 !== null) {
                    y2.return = o2.return, w2 = y2;
                    break e;
                  }
                  w2 = o2.return;
                }
          }
          if (_2 = l, on(), Pe4 && typeof Pe4.onPostCommitFiberRoot == "function")
            try {
              Pe4.onPostCommitFiberRoot(jr, e);
            } catch {
            }
          r2 = true;
        }
        return r2;
      } finally {
        P = t, he4.transition = n;
      }
    }
    return false;
  }
  function ao(e, n, t) {
    n = Yn(t, n), n = Vs(e, n, 1), e = qe2(e, n, 1), n = b3(), e !== null && (Ft(e, 1, n), ie2(e, n));
  }
  function I3(e, n, t) {
    if (e.tag === 3)
      ao(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ao(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r2 = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof r2.componentDidCatch == "function" && (be4 === null || !be4.has(r2))) {
            e = Yn(t, e), e = As(n, e, 1), n = qe2(n, e, 1), e = b3(), n !== null && (Ft(n, 1, e), ie2(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function vf(e, n, t) {
    var r2 = e.pingCache;
    r2 !== null && r2.delete(n), n = b3(), e.pingedLanes |= e.suspendedLanes & t, Q3 === e && (K4 & t) === t && (B5 === 4 || B5 === 3 && (K4 & 130023424) === K4 && 500 > j2() - Xi ? pn(e, 0) : Yi |= t), ie2(e, n);
  }
  function ua(e, n) {
    n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = Wt, Wt <<= 1, (Wt & 130023424) === 0 && (Wt = 4194304)));
    var t = b3();
    e = Ue2(e, n), e !== null && (Ft(e, n, t), ie2(e, t));
  }
  function yf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), ua(e, t);
  }
  function gf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r2 = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r2 = e.stateNode;
        break;
      default:
        throw Error(v2(314));
    }
    r2 !== null && r2.delete(n), ua(e, t);
  }
  var oa;
  oa = function(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || re2.current)
        te3 = true;
      else {
        if ((e.lanes & t) === 0 && (n.flags & 128) === 0)
          return te3 = false, lf(e, n, t);
        te3 = (e.flags & 131072) !== 0;
      }
    else
      te3 = false, D3 && (n.flags & 1048576) !== 0 && cs(n, _r, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r2 = n.type;
        cr(e, n), e = n.pendingProps;
        var l = Wn(n, J3.current);
        An(n, t), l = Bi(null, n, r2, e, l, t);
        var i2 = Hi();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, le3(r2) ? (i2 = true, xr(n)) : i2 = false, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ii(n), l.updater = Qr, n.stateNode = l, l._reactInternals = n, ql(n, r2, e, t), n = ni(null, n, r2, true, i2, t)) : (n.tag = 0, D3 && i2 && Li(n), q3(null, n, l, t), n = n.child), n;
      case 16:
        r2 = n.elementType;
        e: {
          switch (cr(e, n), e = n.pendingProps, l = r2._init, r2 = l(r2._payload), n.type = r2, l = n.tag = Sf(r2), e = we4(r2, e), l) {
            case 0:
              n = ei(null, n, r2, e, t);
              break e;
            case 1:
              n = bu(null, n, r2, e, t);
              break e;
            case 11:
              n = Ju(null, n, r2, e, t);
              break e;
            case 14:
              n = qu(null, n, r2, we4(r2.type, e), t);
              break e;
          }
          throw Error(v2(306, r2, ""));
        }
        return n;
      case 0:
        return r2 = n.type, l = n.pendingProps, l = n.elementType === r2 ? l : we4(r2, l), ei(e, n, r2, l, t);
      case 1:
        return r2 = n.type, l = n.pendingProps, l = n.elementType === r2 ? l : we4(r2, l), bu(e, n, r2, l, t);
      case 3:
        e: {
          if (Qs(n), e === null)
            throw Error(v2(387));
          r2 = n.pendingProps, i2 = n.memoizedState, l = i2.element, ms(e, n), Lr(n, r2, null, t);
          var u2 = n.memoizedState;
          if (r2 = u2.element, i2.isDehydrated)
            if (i2 = { element: r2, isDehydrated: false, cache: u2.cache, pendingSuspenseBoundaries: u2.pendingSuspenseBoundaries, transitions: u2.transitions }, n.updateQueue.baseState = i2, n.memoizedState = i2, n.flags & 256) {
              l = Yn(Error(v2(423)), n), n = eo(e, n, r2, t, l);
              break e;
            } else if (r2 !== l) {
              l = Yn(Error(v2(424)), n), n = eo(e, n, r2, t, l);
              break e;
            } else
              for (oe3 = Je(n.stateNode.containerInfo.firstChild), se3 = n, D3 = true, ke3 = null, t = gs(n, null, r2, t), n.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Qn(), r2 === l) {
              n = je2(e, n, t);
              break e;
            }
            q3(e, n, r2, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ws(n), e === null && Gl(n), r2 = n.type, l = n.pendingProps, i2 = e !== null ? e.memoizedProps : null, u2 = l.children, Ql(r2, l) ? u2 = null : i2 !== null && Ql(r2, i2) && (n.flags |= 32), Ws(e, n), q3(e, n, u2, t), n.child;
      case 6:
        return e === null && Gl(n), null;
      case 13:
        return $s(e, n, t);
      case 4:
        return Ui(n, n.stateNode.containerInfo), r2 = n.pendingProps, e === null ? n.child = $n(n, null, r2, t) : q3(e, n, r2, t), n.child;
      case 11:
        return r2 = n.type, l = n.pendingProps, l = n.elementType === r2 ? l : we4(r2, l), Ju(e, n, r2, l, t);
      case 7:
        return q3(e, n, n.pendingProps, t), n.child;
      case 8:
        return q3(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return q3(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r2 = n.type._context, l = n.pendingProps, i2 = n.memoizedProps, u2 = l.value, L3(zr, r2._currentValue), r2._currentValue = u2, i2 !== null)
            if (xe4(i2.value, u2)) {
              if (i2.children === l.children && !re2.current) {
                n = je2(e, n, t);
                break e;
              }
            } else
              for (i2 = n.child, i2 !== null && (i2.return = n); i2 !== null; ) {
                var o2 = i2.dependencies;
                if (o2 !== null) {
                  u2 = i2.child;
                  for (var s2 = o2.firstContext; s2 !== null; ) {
                    if (s2.context === r2) {
                      if (i2.tag === 1) {
                        s2 = Re3(-1, t & -t), s2.tag = 2;
                        var d3 = i2.updateQueue;
                        if (d3 !== null) {
                          d3 = d3.shared;
                          var m2 = d3.pending;
                          m2 === null ? s2.next = s2 : (s2.next = m2.next, m2.next = s2), d3.pending = s2;
                        }
                      }
                      i2.lanes |= t, s2 = i2.alternate, s2 !== null && (s2.lanes |= t), Zl(i2.return, t, n), o2.lanes |= t;
                      break;
                    }
                    s2 = s2.next;
                  }
                } else if (i2.tag === 10)
                  u2 = i2.type === n.type ? null : i2.child;
                else if (i2.tag === 18) {
                  if (u2 = i2.return, u2 === null)
                    throw Error(v2(341));
                  u2.lanes |= t, o2 = u2.alternate, o2 !== null && (o2.lanes |= t), Zl(u2, t, n), u2 = i2.sibling;
                } else
                  u2 = i2.child;
                if (u2 !== null)
                  u2.return = i2;
                else
                  for (u2 = i2; u2 !== null; ) {
                    if (u2 === n) {
                      u2 = null;
                      break;
                    }
                    if (i2 = u2.sibling, i2 !== null) {
                      i2.return = u2.return, u2 = i2;
                      break;
                    }
                    u2 = u2.return;
                  }
                i2 = u2;
              }
          q3(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r2 = n.pendingProps.children, An(n, t), l = ve4(l), r2 = r2(l), n.flags |= 1, q3(e, n, r2, t), n.child;
      case 14:
        return r2 = n.type, l = we4(r2, n.pendingProps), l = we4(r2.type, l), qu(e, n, r2, l, t);
      case 15:
        return Bs(e, n, n.type, n.pendingProps, t);
      case 17:
        return r2 = n.type, l = n.pendingProps, l = n.elementType === r2 ? l : we4(r2, l), cr(e, n), n.tag = 1, le3(r2) ? (e = true, xr(n)) : e = false, An(n, t), vs(n, r2, l), ql(n, r2, l, t), ni(null, n, r2, true, e, t);
      case 19:
        return Ks(e, n, t);
      case 22:
        return Hs(e, n, t);
    }
    throw Error(v2(156, n.tag));
  };
  function sa(e, n) {
    return Ro(e, n);
  }
  function wf(e, n, t, r2) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r2, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function me4(e, n, t, r2) {
    return new wf(e, n, t, r2);
  }
  function qi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Sf(e) {
    if (typeof e == "function")
      return qi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === yi)
        return 11;
      if (e === gi)
        return 14;
    }
    return 2;
  }
  function nn(e, n) {
    var t = e.alternate;
    return t === null ? (t = me4(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function pr(e, n, t, r2, l, i2) {
    var u2 = 2;
    if (r2 = e, typeof e == "function")
      qi(e) && (u2 = 1);
    else if (typeof e == "string")
      u2 = 5;
    else
      e:
        switch (e) {
          case Nn:
            return mn(t.children, l, i2, n);
          case vi:
            u2 = 8, l |= 8;
            break;
          case El:
            return e = me4(12, t, n, l | 2), e.elementType = El, e.lanes = i2, e;
          case Cl:
            return e = me4(13, t, n, l), e.elementType = Cl, e.lanes = i2, e;
          case xl:
            return e = me4(19, t, n, l), e.elementType = xl, e.lanes = i2, e;
          case yo:
            return Xr(t, l, i2, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ho:
                  u2 = 10;
                  break e;
                case vo:
                  u2 = 9;
                  break e;
                case yi:
                  u2 = 11;
                  break e;
                case gi:
                  u2 = 14;
                  break e;
                case He2:
                  u2 = 16, r2 = null;
                  break e;
              }
            throw Error(v2(130, e == null ? e : typeof e, ""));
        }
    return n = me4(u2, t, n, l), n.elementType = e, n.type = r2, n.lanes = i2, n;
  }
  function mn(e, n, t, r2) {
    return e = me4(7, e, r2, n), e.lanes = t, e;
  }
  function Xr(e, n, t, r2) {
    return e = me4(22, e, r2, n), e.elementType = yo, e.lanes = t, e.stateNode = { isHidden: false }, e;
  }
  function wl(e, n, t) {
    return e = me4(6, e, null, n), e.lanes = t, e;
  }
  function Sl(e, n, t) {
    return n = me4(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function kf(e, n, t, r2, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = rl(0), this.expirationTimes = rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rl(0), this.identifierPrefix = r2, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function bi(e, n, t, r2, l, i2, u2, o2, s2) {
    return e = new kf(e, n, t, o2, s2), n === 1 ? (n = 1, i2 === true && (n |= 8)) : n = 0, i2 = me4(3, null, null, n), e.current = i2, i2.stateNode = e, i2.memoizedState = { element: r2, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ii(i2), e;
  }
  function Ef(e, n, t) {
    var r2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: xn, key: r2 == null ? null : "" + r2, children: e, containerInfo: n, implementation: t };
  }
  function aa(e) {
    if (!e)
      return rn;
    e = e._reactInternals;
    e: {
      if (kn(e) !== e || e.tag !== 1)
        throw Error(v2(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (le3(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(v2(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (le3(t))
        return ss(e, t, n);
    }
    return n;
  }
  function ca(e, n, t, r2, l, i2, u2, o2, s2) {
    return e = bi(t, r2, true, e, l, i2, u2, o2, s2), e.context = aa(null), t = e.current, r2 = b3(), l = en(t), i2 = Re3(r2, l), i2.callback = n ?? null, qe2(t, i2, l), e.current.lanes = l, Ft(e, l, r2), ie2(e, r2), e;
  }
  function Gr(e, n, t, r2) {
    var l = n.current, i2 = b3(), u2 = en(l);
    return t = aa(t), n.context === null ? n.context = t : n.pendingContext = t, n = Re3(i2, u2), n.payload = { element: e }, r2 = r2 === void 0 ? null : r2, r2 !== null && (n.callback = r2), e = qe2(l, n, u2), e !== null && (Ce3(e, l, u2, i2), or(e, l, u2)), u2;
  }
  function Ur(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function co(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function eu(e, n) {
    co(e, n), (e = e.alternate) && co(e, n);
  }
  function Cf() {
    return null;
  }
  var fa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function nu(e) {
    this._internalRoot = e;
  }
  Zr.prototype.render = nu.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(v2(409));
    Gr(e, n, null, null);
  };
  Zr.prototype.unmount = nu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      wn(function() {
        Gr(null, e, null, null);
      }), n[Ie3] = null;
    }
  };
  function Zr(e) {
    this._internalRoot = e;
  }
  Zr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Bo();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Qe.length && n !== 0 && n < Qe[t].priority; t++)
        ;
      Qe.splice(t, 0, e), t === 0 && Wo(e);
    }
  };
  function tu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Jr(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fo() {
  }
  function xf(e, n, t, r2, l) {
    if (l) {
      if (typeof r2 == "function") {
        var i2 = r2;
        r2 = function() {
          var d3 = Ur(u2);
          i2.call(d3);
        };
      }
      var u2 = ca(n, r2, e, 0, null, false, false, "", fo);
      return e._reactRootContainer = u2, e[Ie3] = u2.current, _t(e.nodeType === 8 ? e.parentNode : e), wn(), u2;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r2 == "function") {
      var o2 = r2;
      r2 = function() {
        var d3 = Ur(s2);
        o2.call(d3);
      };
    }
    var s2 = bi(e, 0, false, null, null, false, false, "", fo);
    return e._reactRootContainer = s2, e[Ie3] = s2.current, _t(e.nodeType === 8 ? e.parentNode : e), wn(function() {
      Gr(n, s2, t, r2);
    }), s2;
  }
  function qr(e, n, t, r2, l) {
    var i2 = t._reactRootContainer;
    if (i2) {
      var u2 = i2;
      if (typeof l == "function") {
        var o2 = l;
        l = function() {
          var s2 = Ur(u2);
          o2.call(s2);
        };
      }
      Gr(n, u2, e, l);
    } else
      u2 = xf(t, n, e, l, r2);
    return Ur(u2);
  }
  Vo = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = ot(n.pendingLanes);
          t !== 0 && (ki(n, t | 1), ie2(n, j2()), (_2 & 6) === 0 && (Xn = j2() + 500, on()));
        }
        break;
      case 13:
        wn(function() {
          var r2 = Ue2(e, 1);
          if (r2 !== null) {
            var l = b3();
            Ce3(r2, e, 1, l);
          }
        }), eu(e, 1);
    }
  };
  Ei = function(e) {
    if (e.tag === 13) {
      var n = Ue2(e, 134217728);
      if (n !== null) {
        var t = b3();
        Ce3(n, e, 134217728, t);
      }
      eu(e, 134217728);
    }
  };
  Ao = function(e) {
    if (e.tag === 13) {
      var n = en(e), t = Ue2(e, n);
      if (t !== null) {
        var r2 = b3();
        Ce3(t, e, n, r2);
      }
      eu(e, n);
    }
  };
  Bo = function() {
    return P;
  };
  Ho = function(e, n) {
    var t = P;
    try {
      return P = e, n();
    } finally {
      P = t;
    }
  };
  Rl = function(e, n, t) {
    switch (n) {
      case "input":
        if (zl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r2 = t[n];
            if (r2 !== e && r2.form === e.form) {
              var l = Hr(r2);
              if (!l)
                throw Error(v2(90));
              wo(r2), zl(r2, l);
            }
          }
        }
        break;
      case "textarea":
        ko(e, t);
        break;
      case "select":
        n = t.value, n != null && In(e, !!t.multiple, n, false);
    }
  };
  Po = Gi;
  Lo = wn;
  var Nf = { usingClientEntryPoint: false, Events: [Ut, Ln, Hr, _o, zo, Gi] }, rt = { findFiberByHostInstance: cn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, _f = { bundleType: rt.bundleType, version: rt.version, rendererPackageName: rt.rendererPackageName, rendererConfig: rt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ve3.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Do(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: rt.findFiberByHostInstance || Cf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (lt = __REACT_DEVTOOLS_GLOBAL_HOOK__, !lt.isDisabled && lt.supportsFiber))
    try {
      jr = lt.inject(_f), Pe4 = lt;
    } catch {
    }
  var lt;
  fe3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf;
  fe3.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tu(n))
      throw Error(v2(200));
    return Ef(e, n, null, t);
  };
  fe3.createRoot = function(e, n) {
    if (!tu(e))
      throw Error(v2(299));
    var t = false, r2 = "", l = fa;
    return n != null && (n.unstable_strictMode === true && (t = true), n.identifierPrefix !== void 0 && (r2 = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = bi(e, 1, false, null, null, t, false, r2, l), e[Ie3] = n.current, _t(e.nodeType === 8 ? e.parentNode : e), new nu(n);
  };
  fe3.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(v2(188)) : (e = Object.keys(e).join(","), Error(v2(268, e)));
    return e = Do(n), e = e === null ? null : e.stateNode, e;
  };
  fe3.flushSync = function(e) {
    return wn(e);
  };
  fe3.hydrate = function(e, n, t) {
    if (!Jr(n))
      throw Error(v2(200));
    return qr(null, e, n, true, t);
  };
  fe3.hydrateRoot = function(e, n, t) {
    if (!tu(e))
      throw Error(v2(405));
    var r2 = t != null && t.hydratedSources || null, l = false, i2 = "", u2 = fa;
    if (t != null && (t.unstable_strictMode === true && (l = true), t.identifierPrefix !== void 0 && (i2 = t.identifierPrefix), t.onRecoverableError !== void 0 && (u2 = t.onRecoverableError)), n = ca(n, null, e, 1, t ?? null, l, false, i2, u2), e[Ie3] = n.current, _t(e), r2)
      for (e = 0; e < r2.length; e++)
        t = r2[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(t, l);
    return new Zr(n);
  };
  fe3.render = function(e, n, t) {
    if (!Jr(n))
      throw Error(v2(200));
    return qr(null, e, n, false, t);
  };
  fe3.unmountComponentAtNode = function(e) {
    if (!Jr(e))
      throw Error(v2(40));
    return e._reactRootContainer ? (wn(function() {
      qr(null, null, e, false, function() {
        e._reactRootContainer = null, e[Ie3] = null;
      });
    }), true) : false;
  };
  fe3.unstable_batchedUpdates = Gi;
  fe3.unstable_renderSubtreeIntoContainer = function(e, n, t, r2) {
    if (!Jr(t))
      throw Error(v2(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(v2(38));
    return qr(e, n, t, false, r2);
  };
  fe3.version = "18.2.0-next-9e3b772b8-20220608";
});
var ha = iu((Tf, ma) => {
  "use strict";
  function pa() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pa);
      } catch (e) {
        console.error(e);
      }
  }
  pa(), ma.exports = da();
});
var ya = Na(ha());
var { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mf, createPortal: Df, createRoot: Of, findDOMNode: Rf, flushSync: Ff, hydrate: If, hydrateRoot: Uf, render: jf, unmountComponentAtNode: Vf, unstable_batchedUpdates: Af, unstable_renderSubtreeIntoContainer: Bf, version: Hf } = ya;
var { default: va, ...zf } = ya;
var Wf = va !== void 0 ? va : zf;

// deno:https://esm.sh/stable/react@18.2.0/deno/react.development.js
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_react_development = __commonJS({
  "esm-build-b4e7507faab2939dd0ebb9ec440ec09c0e57d5e8-8e01755e/node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component2(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component2.prototype.isReactComponent = {};
        Component2.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component2.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component2.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component2.prototype;
        function PureComponent2(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent2.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent2;
        assign(pureComponentPrototype, Component2.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef2() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement2(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i2 = 0; i2 < childrenLength; i2++) {
              childArray[i2] = arguments[i2 + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement2(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i2 = 0; i2 < childrenLength; i2++) {
              childArray[i2] = arguments[i2 + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement2(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i2 = 0; i2 < children.length; i2++) {
              child = children[i2];
              nextName = nextNamePrefix + getElementKey(child, i2);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement2(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext2(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy2(ctor) {
          var payload = {
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef2(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo2(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext2(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState2(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer2(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef2(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback2(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle2(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue2(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition2() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue2(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId2() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
                c--;
              }
              for (; s2 >= 1 && c >= 0; s2--, c--) {
                if (sampleLines[s2] !== controlLines[c]) {
                  if (s2 !== 1 || c !== 1) {
                    do {
                      s2--;
                      c--;
                      if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component3) {
          var prototype = Component3.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i2 = 0; i2 < node.length; i2++) {
              var child = node[i2];
              if (isValidElement2(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement2(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement2(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement2.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i2 = 2; i2 < arguments.length; i2++) {
              validateChildKeys(arguments[i2], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement2.apply(this, arguments);
          for (var i2 = 2; i2 < arguments.length; i2++) {
            validateChildKeys(arguments[i2], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition2(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i2 = 0;
              try {
                for (; i2 < queue.length; i2++) {
                  var callback = queue[i2];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i2 + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory2 = createFactoryWithValidation;
        var Children2 = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children2;
        exports.Component = Component2;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent2;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext2;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory2;
        exports.createRef = createRef2;
        exports.forwardRef = forwardRef2;
        exports.isValidElement = isValidElement2;
        exports.lazy = lazy2;
        exports.memo = memo2;
        exports.startTransition = startTransition2;
        exports.unstable_act = act;
        exports.useCallback = useCallback2;
        exports.useContext = useContext2;
        exports.useDebugValue = useDebugValue2;
        exports.useDeferredValue = useDeferredValue2;
        exports.useEffect = useEffect2;
        exports.useId = useId2;
        exports.useImperativeHandle = useImperativeHandle2;
        exports.useInsertionEffect = useInsertionEffect2;
        exports.useLayoutEffect = useLayoutEffect2;
        exports.useMemo = useMemo2;
        exports.useReducer = useReducer2;
        exports.useRef = useRef2;
        exports.useState = useState2;
        exports.useSyncExternalStore = useSyncExternalStore2;
        exports.useTransition = useTransition2;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});
var require_react = __commonJS({
  "esm-build-b4e7507faab2939dd0ebb9ec440ec09c0e57d5e8-8e01755e/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});
var __module = __toESM(require_react());
var { Children, Component, Fragment, Profiler, PureComponent, StrictMode, Suspense, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cloneElement, createContext, createElement, createFactory, createRef, forwardRef, isValidElement, lazy, memo, startTransition, unstable_act, useCallback, useContext, useDebugValue, useDeferredValue, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useReducer, useRef, useState, useSyncExternalStore, useTransition, version } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;

// deno:https://esm.sh/v99/react-dom@18.2.0/deno/server.development.js
var __create2 = Object.create;
var __defProp3 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_react_dom_server_legacy_browser_development = __commonJS2({
  "esm-build-0303abb25fcb426f29cf2c89bdb3c18934571244-68859692/node_modules/react-dom/cjs/react-dom-server-legacy.browser.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = mod_default;
        var ReactVersion = "18.2.0";
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function scheduleWork(callback) {
          callback();
        }
        function beginWriting(destination) {
        }
        function writeChunk(destination, chunk) {
          writeChunkAndReturn(destination, chunk);
        }
        function writeChunkAndReturn(destination, chunk) {
          return destination.push(chunk);
        }
        function completeWriting(destination) {
        }
        function close(destination) {
          destination.push(null);
        }
        function stringToChunk(content) {
          return content;
        }
        function stringToPrecomputedChunk(content) {
          return content;
        }
        function closeWithError(destination, error2) {
          destination.destroy(error2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkAttributeStringCoercion(value, attributeName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkHtmlStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            RESERVED,
            false,
            name,
            null,
            false,
            false
          );
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name = _ref[0], attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            attributeName,
            null,
            false,
            false
          );
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEANISH_STRING,
            false,
            name.toLowerCase(),
            null,
            false,
            false
          );
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEANISH_STRING,
            false,
            name,
            null,
            false,
            false
          );
        });
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            false,
            name.toLowerCase(),
            null,
            false,
            false
          );
        });
        [
          "checked",
          "multiple",
          "muted",
          "selected"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            true,
            name,
            null,
            false,
            false
          );
        });
        [
          "capture",
          "download"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            OVERLOADED_BOOLEAN,
            false,
            name,
            null,
            false,
            false
          );
        });
        [
          "cols",
          "rows",
          "size",
          "span"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            POSITIVE_NUMERIC,
            false,
            name,
            null,
            false,
            false
          );
        });
        ["rowSpan", "start"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            NUMERIC,
            false,
            name.toLowerCase(),
            null,
            false,
            false
          );
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            attributeName,
            null,
            false,
            false
          );
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            attributeName,
            "http://www.w3.org/1999/xlink",
            false,
            false
          );
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            attributeName,
            "http://www.w3.org/XML/1998/namespace",
            false,
            false
          );
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            false,
            attributeName.toLowerCase(),
            null,
            false,
            false
          );
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord(
          "xlinkHref",
          STRING,
          false,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          true,
          false
        );
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            false,
            attributeName.toLowerCase(),
            null,
            true,
            true
          );
        });
        var isUnitlessNumber = {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var ariaProperties = {
          "aria-current": 0,
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        function validateProperty(tagName, name) {
          {
            if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
              return true;
            }
            if (rARIACamel.test(name)) {
              var ariaName = "aria-" + name.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                warnedProperties[name] = true;
                return true;
              }
              if (name !== correctName) {
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                warnedProperties[name] = true;
                return true;
              }
            }
            if (rARIA.test(name)) {
              var lowerCasedName = name.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name] = true;
                return false;
              }
              if (name !== standardName) {
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties[name] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var possibleStandardNames = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                error("Unknown event handler property `%s`. It will be ignored.", name);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
              } else {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
              warnedProperties$1[name] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_2, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error(
              "Unsupported style property %s. Did you mean %s?",
              name,
              camelize(name.replace(msPattern, "ms-"))
            );
          };
          var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error("`NaN` is an invalid value for the `%s` css style property.", name);
          };
          var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error("`Infinity` is an invalid value for the `%s` css style property.", name);
          };
          warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
          {
            checkHtmlStringCoercion(string);
          }
          var str = "" + string;
          var match = matchHtmlRegExp.exec(str);
          if (!match) {
            return str;
          }
          var escape;
          var html = "";
          var index;
          var lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escape = "&quot;";
                break;
              case 38:
                escape = "&amp;";
                break;
              case 39:
                escape = "&#x27;";
                break;
              case 60:
                escape = "&lt;";
                break;
              case 62:
                escape = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escape;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
          if (typeof text === "boolean" || typeof text === "number") {
            return "" + text;
          }
          return escapeHtml(text);
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern$1 = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
        }
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        var startInlineScript = stringToPrecomputedChunk("<script>");
        var endInlineScript = stringToPrecomputedChunk("<\/script>");
        var startScriptSrc = stringToPrecomputedChunk('<script src="');
        var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
        var endAsyncScript = stringToPrecomputedChunk('" async=""><\/script>');
        function escapeBootstrapScriptContent(scriptText) {
          {
            checkHtmlStringCoercion(scriptText);
          }
          return ("" + scriptText).replace(scriptRegex, scriptReplacer);
        }
        var scriptRegex = /(<\/|<)(s)(cript)/gi;
        var scriptReplacer = function(match, prefix2, s2, suffix) {
          return "" + prefix2 + (s2 === "s" ? "\\u0073" : "\\u0053") + suffix;
        };
        function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
          var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
          var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
          var bootstrapChunks = [];
          if (bootstrapScriptContent !== void 0) {
            bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
          }
          if (bootstrapScripts !== void 0) {
            for (var i2 = 0; i2 < bootstrapScripts.length; i2++) {
              bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i2])), endAsyncScript);
            }
          }
          if (bootstrapModules !== void 0) {
            for (var _i = 0; _i < bootstrapModules.length; _i++) {
              bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
            }
          }
          return {
            bootstrapChunks,
            startInlineScript: inlineScriptWithNonce,
            placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
            segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
            boundaryPrefix: idPrefix + "B:",
            idPrefix,
            nextSuspenseID: 0,
            sentCompleteSegmentFunction: false,
            sentCompleteBoundaryFunction: false,
            sentClientRenderFunction: false
          };
        }
        var ROOT_HTML_MODE = 0;
        var HTML_MODE = 1;
        var SVG_MODE = 2;
        var MATHML_MODE = 3;
        var HTML_TABLE_MODE = 4;
        var HTML_TABLE_BODY_MODE = 5;
        var HTML_TABLE_ROW_MODE = 6;
        var HTML_COLGROUP_MODE = 7;
        function createFormatContext(insertionMode, selectedValue) {
          return {
            insertionMode,
            selectedValue
          };
        }
        function getChildFormatContext(parentContext, type, props) {
          switch (type) {
            case "select":
              return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
            case "svg":
              return createFormatContext(SVG_MODE, null);
            case "math":
              return createFormatContext(MATHML_MODE, null);
            case "foreignObject":
              return createFormatContext(HTML_MODE, null);
            case "table":
              return createFormatContext(HTML_TABLE_MODE, null);
            case "thead":
            case "tbody":
            case "tfoot":
              return createFormatContext(HTML_TABLE_BODY_MODE, null);
            case "colgroup":
              return createFormatContext(HTML_COLGROUP_MODE, null);
            case "tr":
              return createFormatContext(HTML_TABLE_ROW_MODE, null);
          }
          if (parentContext.insertionMode >= HTML_TABLE_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          if (parentContext.insertionMode === ROOT_HTML_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          return parentContext;
        }
        var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
        function assignSuspenseBoundaryID(responseState) {
          var generatedID = responseState.nextSuspenseID++;
          return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
        }
        function makeId(responseState, treeId, localId) {
          var idPrefix = responseState.idPrefix;
          var id = ":" + idPrefix + "R" + treeId;
          if (localId > 0) {
            id += "H" + localId.toString(32);
          }
          return id + ":";
        }
        function encodeHTMLTextNode(text) {
          return escapeTextForBrowser(text);
        }
        var textSeparator = stringToPrecomputedChunk("<!-- -->");
        function pushTextInstance(target, text, responseState, textEmbedded) {
          if (text === "") {
            return textEmbedded;
          }
          if (textEmbedded) {
            target.push(textSeparator);
          }
          target.push(stringToChunk(encodeHTMLTextNode(text)));
          return true;
        }
        function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
          if (lastPushedText && textEmbedded) {
            target.push(textSeparator);
          }
        }
        var styleNameCache = /* @__PURE__ */ new Map();
        function processStyleName(styleName) {
          var chunk = styleNameCache.get(styleName);
          if (chunk !== void 0) {
            return chunk;
          }
          var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
          styleNameCache.set(styleName, result);
          return result;
        }
        var styleAttributeStart = stringToPrecomputedChunk(' style="');
        var styleAssign = stringToPrecomputedChunk(":");
        var styleSeparator = stringToPrecomputedChunk(";");
        function pushStyle(target, responseState, style) {
          if (typeof style !== "object") {
            throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
          }
          var isFirst = true;
          for (var styleName in style) {
            if (!hasOwnProperty.call(style, styleName)) {
              continue;
            }
            var styleValue = style[styleName];
            if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
              continue;
            }
            var nameChunk = void 0;
            var valueChunk = void 0;
            var isCustomProperty = styleName.indexOf("--") === 0;
            if (isCustomProperty) {
              nameChunk = stringToChunk(escapeTextForBrowser(styleName));
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            } else {
              {
                warnValidStyle$1(styleName, styleValue);
              }
              nameChunk = processStyleName(styleName);
              if (typeof styleValue === "number") {
                if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                  valueChunk = stringToChunk(styleValue + "px");
                } else {
                  valueChunk = stringToChunk("" + styleValue);
                }
              } else {
                {
                  checkCSSPropertyStringCoercion(styleValue, styleName);
                }
                valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
              }
            }
            if (isFirst) {
              isFirst = false;
              target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
            } else {
              target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
            }
          }
          if (!isFirst) {
            target.push(attributeEnd);
          }
        }
        var attributeSeparator = stringToPrecomputedChunk(" ");
        var attributeAssign = stringToPrecomputedChunk('="');
        var attributeEnd = stringToPrecomputedChunk('"');
        var attributeEmptyString = stringToPrecomputedChunk('=""');
        function pushAttribute(target, responseState, name, value) {
          switch (name) {
            case "style": {
              pushStyle(target, responseState, value);
              return;
            }
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              return;
          }
          if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
            return;
          }
          var propertyInfo = getPropertyInfo(name);
          if (propertyInfo !== null) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                if (!propertyInfo.acceptsBooleans) {
                  return;
                }
              }
            }
            var attributeName = propertyInfo.attributeName;
            var attributeNameChunk = stringToChunk(attributeName);
            switch (propertyInfo.type) {
              case BOOLEAN:
                if (value) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                }
                return;
              case OVERLOADED_BOOLEAN:
                if (value === true) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                } else if (value === false)
                  ;
                else {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                return;
              case NUMERIC:
                if (!isNaN(value)) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              case POSITIVE_NUMERIC:
                if (!isNaN(value) && value >= 1) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              default:
                if (propertyInfo.sanitizeURL) {
                  {
                    checkAttributeStringCoercion(value, attributeName);
                  }
                  value = "" + value;
                  sanitizeURL(value);
                }
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
            }
          } else if (isAttributeNameSafe(name)) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                var prefix2 = name.toLowerCase().slice(0, 5);
                if (prefix2 !== "data-" && prefix2 !== "aria-") {
                  return;
                }
              }
            }
            target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        }
        var endOfStartTag = stringToPrecomputedChunk(">");
        var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
        function pushInnerHTML(target, innerHTML, children) {
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              {
                checkHtmlStringCoercion(html);
              }
              target.push(stringToChunk("" + html));
            }
          }
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnInvalidOptionInnerHTML = false;
        var didWarnSelectedSetOnOption = false;
        function checkSelectProp(props, propName) {
          {
            var value = props[propName];
            if (value != null) {
              var array = isArray(value);
              if (props.multiple && !array) {
                error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
              } else if (!props.multiple && array) {
                error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
              }
            }
          }
        }
        function pushStartSelect(target, props, responseState) {
          {
            checkControlledValueProps("select", props);
            checkSelectProp(props, "value");
            checkSelectProp(props, "defaultValue");
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
              error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultSelectValue = true;
            }
          }
          target.push(startChunkForTag("select"));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function flattenOptionChildren(children) {
          var content = "";
          React.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
            {
              if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
                didWarnInvalidOptionChildren = true;
                error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
              }
            }
          });
          return content;
        }
        var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
        function pushStartOption(target, props, responseState, formatContext) {
          var selectedValue = formatContext.selectedValue;
          target.push(startChunkForTag("option"));
          var children = null;
          var value = null;
          var selected = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "selected":
                  selected = propValue;
                  {
                    if (!didWarnSelectedSetOnOption) {
                      error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                      didWarnSelectedSetOnOption = true;
                    }
                  }
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "value":
                  value = propValue;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (selectedValue != null) {
            var stringValue;
            if (value !== null) {
              {
                checkAttributeStringCoercion(value, "value");
              }
              stringValue = "" + value;
            } else {
              {
                if (innerHTML !== null) {
                  if (!didWarnInvalidOptionInnerHTML) {
                    didWarnInvalidOptionInnerHTML = true;
                    error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                  }
                }
              }
              stringValue = flattenOptionChildren(children);
            }
            if (isArray(selectedValue)) {
              for (var i2 = 0; i2 < selectedValue.length; i2++) {
                {
                  checkAttributeStringCoercion(selectedValue[i2], "value");
                }
                var v2 = "" + selectedValue[i2];
                if (v2 === stringValue) {
                  target.push(selectedMarkerAttribute);
                  break;
                }
              }
            } else {
              {
                checkAttributeStringCoercion(selectedValue, "select.value");
              }
              if ("" + selectedValue === stringValue) {
                target.push(selectedMarkerAttribute);
              }
            }
          } else if (selected) {
            target.push(selectedMarkerAttribute);
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function pushInput(target, props, responseState) {
          {
            checkControlledValueProps("input", props);
            if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
              error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultChecked = true;
            }
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
              error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultInputValue = true;
            }
          }
          target.push(startChunkForTag("input"));
          var value = null;
          var defaultValue = null;
          var checked = null;
          var defaultChecked = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                case "defaultChecked":
                  defaultChecked = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "checked":
                  checked = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (checked !== null) {
            pushAttribute(target, responseState, "checked", checked);
          } else if (defaultChecked !== null) {
            pushAttribute(target, responseState, "checked", defaultChecked);
          }
          if (value !== null) {
            pushAttribute(target, responseState, "value", value);
          } else if (defaultValue !== null) {
            pushAttribute(target, responseState, "value", defaultValue);
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartTextArea(target, props, responseState) {
          {
            checkControlledValueProps("textarea", props);
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
              error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultTextareaValue = true;
            }
          }
          target.push(startChunkForTag("textarea"));
          var value = null;
          var defaultValue = null;
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (value === null && defaultValue !== null) {
            value = defaultValue;
          }
          target.push(endOfStartTag);
          if (children != null) {
            {
              error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            }
            if (value != null) {
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            }
            if (isArray(children)) {
              if (children.length > 1) {
                throw new Error("<textarea> can only have at most one child.");
              }
              {
                checkHtmlStringCoercion(children[0]);
              }
              value = "" + children[0];
            }
            {
              checkHtmlStringCoercion(children);
            }
            value = "" + children;
          }
          if (typeof value === "string" && value[0] === "\n") {
            target.push(leadingNewline);
          }
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            target.push(stringToChunk(encodeHTMLTextNode("" + value)));
          }
          return null;
        }
        function pushSelfClosing(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartMenuItem(target, props, responseState) {
          target.push(startChunkForTag("menuitem"));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          return null;
        }
        function pushStartTitle(target, props, responseState) {
          target.push(startChunkForTag("title"));
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          {
            var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
            if (Array.isArray(children) && children.length > 1) {
              error("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            } else if (child != null && child.$$typeof != null) {
              error("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            } else if (child != null && typeof child !== "string" && typeof child !== "number") {
              error("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            }
          }
          return children;
        }
        function pushStartGenericElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          if (typeof children === "string") {
            target.push(stringToChunk(encodeHTMLTextNode(children)));
            return null;
          }
          return children;
        }
        function pushStartCustomElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "style":
                  pushStyle(target, responseState, propValue);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                    target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                  }
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        var leadingNewline = stringToPrecomputedChunk("\n");
        function pushStartPreformattedElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              if (typeof html === "string" && html.length > 0 && html[0] === "\n") {
                target.push(leadingNewline, stringToChunk(html));
              } else {
                {
                  checkHtmlStringCoercion(html);
                }
                target.push(stringToChunk("" + html));
              }
            }
          }
          if (typeof children === "string" && children[0] === "\n") {
            target.push(leadingNewline);
          }
          return children;
        }
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = /* @__PURE__ */ new Map();
        function startChunkForTag(tag) {
          var tagStartChunk = validatedTagCache.get(tag);
          if (tagStartChunk === void 0) {
            if (!VALID_TAG_REGEX.test(tag)) {
              throw new Error("Invalid tag: " + tag);
            }
            tagStartChunk = stringToPrecomputedChunk("<" + tag);
            validatedTagCache.set(tag, tagStartChunk);
          }
          return tagStartChunk;
        }
        var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
        function pushStartInstance(target, type, props, responseState, formatContext) {
          {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, null);
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
            if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
              if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
                error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
              }
            }
          }
          switch (type) {
            case "select":
              return pushStartSelect(target, props, responseState);
            case "option":
              return pushStartOption(target, props, responseState, formatContext);
            case "textarea":
              return pushStartTextArea(target, props, responseState);
            case "input":
              return pushInput(target, props, responseState);
            case "menuitem":
              return pushStartMenuItem(target, props, responseState);
            case "title":
              return pushStartTitle(target, props, responseState);
            case "listing":
            case "pre": {
              return pushStartPreformattedElement(target, props, type, responseState);
            }
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              return pushSelfClosing(target, props, type, responseState);
            }
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": {
              return pushStartGenericElement(target, props, type, responseState);
            }
            case "html": {
              if (formatContext.insertionMode === ROOT_HTML_MODE) {
                target.push(DOCTYPE);
              }
              return pushStartGenericElement(target, props, type, responseState);
            }
            default: {
              if (type.indexOf("-") === -1 && typeof props.is !== "string") {
                return pushStartGenericElement(target, props, type, responseState);
              } else {
                return pushStartCustomElement(target, props, type, responseState);
              }
            }
          }
        }
        var endTag1 = stringToPrecomputedChunk("</");
        var endTag2 = stringToPrecomputedChunk(">");
        function pushEndInstance(target, type, props) {
          switch (type) {
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              break;
            }
            default: {
              target.push(endTag1, stringToChunk(type), endTag2);
            }
          }
        }
        function writeCompletedRoot(destination, responseState) {
          var bootstrapChunks = responseState.bootstrapChunks;
          var i2 = 0;
          for (; i2 < bootstrapChunks.length - 1; i2++) {
            writeChunk(destination, bootstrapChunks[i2]);
          }
          if (i2 < bootstrapChunks.length) {
            return writeChunkAndReturn(destination, bootstrapChunks[i2]);
          }
          return true;
        }
        var placeholder1 = stringToPrecomputedChunk('<template id="');
        var placeholder2 = stringToPrecomputedChunk('"></template>');
        function writePlaceholder(destination, responseState, id) {
          writeChunk(destination, placeholder1);
          writeChunk(destination, responseState.placeholderPrefix);
          var formattedID = stringToChunk(id.toString(16));
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, placeholder2);
        }
        var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
        var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
        var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
        var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
        var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
        var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
        var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
        var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
        var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
        var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
        var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
        function writeStartCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        }
        function writeStartPendingSuspenseBoundary(destination, responseState, id) {
          writeChunk(destination, startPendingSuspenseBoundary1);
          if (id === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, id);
          return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
        }
        function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
          var result;
          result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
          writeChunk(destination, clientRenderedSuspenseBoundaryError1);
          if (errorDigest) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
          {
            if (errorMesssage) {
              writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
              writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
              writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
            if (errorComponentStack) {
              writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
              writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
              writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
          }
          result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
          return result;
        }
        function writeEndCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndPendingSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
        var startSegmentHTML2 = stringToPrecomputedChunk('">');
        var endSegmentHTML = stringToPrecomputedChunk("</div>");
        var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
        var startSegmentSVG2 = stringToPrecomputedChunk('">');
        var endSegmentSVG = stringToPrecomputedChunk("</svg>");
        var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
        var startSegmentMathML2 = stringToPrecomputedChunk('">');
        var endSegmentMathML = stringToPrecomputedChunk("</math>");
        var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
        var startSegmentTable2 = stringToPrecomputedChunk('">');
        var endSegmentTable = stringToPrecomputedChunk("</table>");
        var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
        var startSegmentTableBody2 = stringToPrecomputedChunk('">');
        var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
        var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
        var startSegmentTableRow2 = stringToPrecomputedChunk('">');
        var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
        var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
        var startSegmentColGroup2 = stringToPrecomputedChunk('">');
        var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
        function writeStartSegment(destination, responseState, formatContext, id) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              writeChunk(destination, startSegmentHTML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentHTML2);
            }
            case SVG_MODE: {
              writeChunk(destination, startSegmentSVG);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentSVG2);
            }
            case MATHML_MODE: {
              writeChunk(destination, startSegmentMathML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentMathML2);
            }
            case HTML_TABLE_MODE: {
              writeChunk(destination, startSegmentTable);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTable2);
            }
            case HTML_TABLE_BODY_MODE: {
              writeChunk(destination, startSegmentTableBody);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableBody2);
            }
            case HTML_TABLE_ROW_MODE: {
              writeChunk(destination, startSegmentTableRow);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableRow2);
            }
            case HTML_COLGROUP_MODE: {
              writeChunk(destination, startSegmentColGroup);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentColGroup2);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        function writeEndSegment(destination, formatContext) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              return writeChunkAndReturn(destination, endSegmentHTML);
            }
            case SVG_MODE: {
              return writeChunkAndReturn(destination, endSegmentSVG);
            }
            case MATHML_MODE: {
              return writeChunkAndReturn(destination, endSegmentMathML);
            }
            case HTML_TABLE_MODE: {
              return writeChunkAndReturn(destination, endSegmentTable);
            }
            case HTML_TABLE_BODY_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableBody);
            }
            case HTML_TABLE_ROW_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableRow);
            }
            case HTML_COLGROUP_MODE: {
              return writeChunkAndReturn(destination, endSegmentColGroup);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
        var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
        var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
        var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
        var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
        var completeSegmentScript2 = stringToPrecomputedChunk('","');
        var completeSegmentScript3 = stringToPrecomputedChunk('")<\/script>');
        function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteSegmentFunction) {
            responseState.sentCompleteSegmentFunction = true;
            writeChunk(destination, completeSegmentScript1Full);
          } else {
            writeChunk(destination, completeSegmentScript1Partial);
          }
          writeChunk(destination, responseState.segmentPrefix);
          var formattedID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, formattedID);
          writeChunk(destination, completeSegmentScript2);
          writeChunk(destination, responseState.placeholderPrefix);
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, completeSegmentScript3);
        }
        var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
        var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
        var completeBoundaryScript2 = stringToPrecomputedChunk('","');
        var completeBoundaryScript3 = stringToPrecomputedChunk('")<\/script>');
        function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteBoundaryFunction) {
            responseState.sentCompleteBoundaryFunction = true;
            writeChunk(destination, completeBoundaryScript1Full);
          } else {
            writeChunk(destination, completeBoundaryScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          var formattedContentID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, boundaryID);
          writeChunk(destination, completeBoundaryScript2);
          writeChunk(destination, responseState.segmentPrefix);
          writeChunk(destination, formattedContentID);
          return writeChunkAndReturn(destination, completeBoundaryScript3);
        }
        var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
        var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
        var clientRenderScript1A = stringToPrecomputedChunk('"');
        var clientRenderScript2 = stringToPrecomputedChunk(")<\/script>");
        var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
        function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentClientRenderFunction) {
            responseState.sentClientRenderFunction = true;
            writeChunk(destination, clientRenderScript1Full);
          } else {
            writeChunk(destination, clientRenderScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, boundaryID);
          writeChunk(destination, clientRenderScript1A);
          if (errorDigest || errorMessage || errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
          }
          if (errorMessage || errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
          }
          if (errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
          }
          return writeChunkAndReturn(destination, clientRenderScript2);
        }
        var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
        function escapeJSStringsForInstructionScripts(input) {
          var escaped = JSON.stringify(input);
          return escaped.replace(regexForJSStringsInScripts, function(match) {
            switch (match) {
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default: {
                throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
              }
            }
          });
        }
        function createResponseState$1(generateStaticMarkup, identifierPrefix) {
          var responseState = createResponseState(identifierPrefix, void 0);
          return {
            bootstrapChunks: responseState.bootstrapChunks,
            startInlineScript: responseState.startInlineScript,
            placeholderPrefix: responseState.placeholderPrefix,
            segmentPrefix: responseState.segmentPrefix,
            boundaryPrefix: responseState.boundaryPrefix,
            idPrefix: responseState.idPrefix,
            nextSuspenseID: responseState.nextSuspenseID,
            sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
            sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
            sentClientRenderFunction: responseState.sentClientRenderFunction,
            generateStaticMarkup
          };
        }
        function createRootFormatContext() {
          return {
            insertionMode: HTML_MODE,
            selectedValue: null
          };
        }
        function pushTextInstance$1(target, text, responseState, textEmbedded) {
          if (responseState.generateStaticMarkup) {
            target.push(stringToChunk(escapeTextForBrowser(text)));
            return false;
          } else {
            return pushTextInstance(target, text, responseState, textEmbedded);
          }
        }
        function pushSegmentFinale$1(target, responseState, lastPushedText, textEmbedded) {
          if (responseState.generateStaticMarkup) {
            return;
          } else {
            return pushSegmentFinale(target, responseState, lastPushedText, textEmbedded);
          }
        }
        function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeStartCompletedSuspenseBoundary(destination);
        }
        function writeStartClientRenderedSuspenseBoundary$1(destination, responseState, errorDigest, errorMessage, errorComponentStack) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMessage, errorComponentStack);
        }
        function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeEndCompletedSuspenseBoundary(destination);
        }
        function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeEndClientRenderedSuspenseBoundary(destination);
        }
        var assign = Object.assign;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_SCOPE_TYPE = Symbol.for("react.scope");
        var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
        var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
                c--;
              }
              for (; s2 >= 1 && c >= 0; s2--, c--) {
                if (sampleLines[s2] !== controlLines[c]) {
                  if (s2 !== 1 || c !== 1) {
                    do {
                      s2--;
                      c--;
                      if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, source, ownerFn) {
          {
            return describeNativeComponentFrame(ctor, true);
          }
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var warnedAboutMissingGetChildContext;
        {
          warnedAboutMissingGetChildContext = {};
        }
        var emptyContextObject = {};
        {
          Object.freeze(emptyContextObject);
        }
        function getMaskedContext(type, unmaskedContext) {
          {
            var contextTypes = type.contextTypes;
            if (!contextTypes) {
              return emptyContextObject;
            }
            var context = {};
            for (var key in contextTypes) {
              context[key] = unmaskedContext[key];
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(contextTypes, context, "context", name);
            }
            return context;
          }
        }
        function processChildContext(instance, type, parentContext, childContextTypes) {
          {
            if (typeof instance.getChildContext !== "function") {
              {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!warnedAboutMissingGetChildContext[componentName]) {
                  warnedAboutMissingGetChildContext[componentName] = true;
                  error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
                }
              }
              return parentContext;
            }
            var childContext = instance.getChildContext();
            for (var contextKey in childContext) {
              if (!(contextKey in childContextTypes)) {
                throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
              }
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(childContextTypes, childContext, "child context", name);
            }
            return assign({}, parentContext, childContext);
          }
        }
        var rendererSigil;
        {
          rendererSigil = {};
        }
        var rootContextSnapshot = null;
        var currentActiveSnapshot = null;
        function popNode(prev) {
          {
            prev.context._currentValue2 = prev.parentValue;
          }
        }
        function pushNode(next) {
          {
            next.context._currentValue2 = next.value;
          }
        }
        function popToNearestCommonAncestor(prev, next) {
          if (prev === next)
            ;
          else {
            popNode(prev);
            var parentPrev = prev.parent;
            var parentNext = next.parent;
            if (parentPrev === null) {
              if (parentNext !== null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
            } else {
              if (parentNext === null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
              popToNearestCommonAncestor(parentPrev, parentNext);
            }
            pushNode(next);
          }
        }
        function popAllPrevious(prev) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev !== null) {
            popAllPrevious(parentPrev);
          }
        }
        function pushAllNext(next) {
          var parentNext = next.parent;
          if (parentNext !== null) {
            pushAllNext(parentNext);
          }
          pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (parentPrev.depth === next.depth) {
            popToNearestCommonAncestor(parentPrev, next);
          } else {
            popPreviousToCommonLevel(parentPrev, next);
          }
        }
        function popNextToCommonLevel(prev, next) {
          var parentNext = next.parent;
          if (parentNext === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (prev.depth === parentNext.depth) {
            popToNearestCommonAncestor(prev, parentNext);
          } else {
            popNextToCommonLevel(prev, parentNext);
          }
          pushNode(next);
        }
        function switchContext(newSnapshot) {
          var prev = currentActiveSnapshot;
          var next = newSnapshot;
          if (prev !== next) {
            if (prev === null) {
              pushAllNext(next);
            } else if (next === null) {
              popAllPrevious(prev);
            } else if (prev.depth === next.depth) {
              popToNearestCommonAncestor(prev, next);
            } else if (prev.depth > next.depth) {
              popPreviousToCommonLevel(prev, next);
            } else {
              popNextToCommonLevel(prev, next);
            }
            currentActiveSnapshot = next;
          }
        }
        function pushProvider(context, nextValue) {
          var prevValue;
          {
            prevValue = context._currentValue2;
            context._currentValue2 = nextValue;
            {
              if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer2 = rendererSigil;
            }
          }
          var prevNode = currentActiveSnapshot;
          var newNode = {
            parent: prevNode,
            depth: prevNode === null ? 0 : prevNode.depth + 1,
            context,
            parentValue: prevValue,
            value: nextValue
          };
          currentActiveSnapshot = newNode;
          return newNode;
        }
        function popProvider(context) {
          var prevSnapshot = currentActiveSnapshot;
          if (prevSnapshot === null) {
            throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          }
          {
            if (prevSnapshot.context !== context) {
              error("The parent context is not the expected context. This is probably a bug in React.");
            }
          }
          {
            var _value = prevSnapshot.parentValue;
            if (_value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
              prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue;
            } else {
              prevSnapshot.context._currentValue2 = _value;
            }
            {
              if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer2 = rendererSigil;
            }
          }
          return currentActiveSnapshot = prevSnapshot.parent;
        }
        function getActiveContext() {
          return currentActiveSnapshot;
        }
        function readContext(context) {
          var value = context._currentValue2;
          return value;
        }
        function get(key) {
          return key._reactInternals;
        }
        function set(key, value) {
          key._reactInternals = value;
        }
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUninitializedState;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
        var didWarnAboutLegacyLifecyclesAndDerivedState;
        var didWarnAboutUndefinedDerivedState;
        var warnOnUndefinedDerivedState;
        var warnOnInvalidCallback;
        var didWarnAboutDirectlyAssigningPropsToState;
        var didWarnAboutContextTypeAndContextTypes;
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
          didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
          didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
          didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
          var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
          warnOnInvalidCallback = function(callback, callerName) {
            if (callback === null || typeof callback === "function") {
              return;
            }
            var key = callerName + "_" + callback;
            if (!didWarnOnInvalidCallback.has(key)) {
              didWarnOnInvalidCallback.add(key);
              error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
            }
          };
          warnOnUndefinedDerivedState = function(type, partialState) {
            if (partialState === void 0) {
              var componentName = getComponentNameFromType(type) || "Component";
              if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                didWarnAboutUndefinedDerivedState.add(componentName);
                error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
              }
            }
          };
        }
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnAboutNoopUpdateForComponent[warningKey]) {
              return;
            }
            error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
            didWarnAboutNoopUpdateForComponent[warningKey] = true;
          }
        }
        var classComponentUpdater = {
          isMounted: function(inst) {
            return false;
          },
          enqueueSetState: function(inst, payload, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "setState");
            } else {
              internals.queue.push(payload);
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          },
          enqueueReplaceState: function(inst, payload, callback) {
            var internals = get(inst);
            internals.replace = true;
            internals.queue = [payload];
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          },
          enqueueForceUpdate: function(inst, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "forceUpdate");
            } else {
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          }
        };
        function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
          var partialState = getDerivedStateFromProps(nextProps, prevState);
          {
            warnOnUndefinedDerivedState(ctor, partialState);
          }
          var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
          return newState;
        }
        function constructClassInstance(ctor, props, maskedLegacyContext) {
          var context = emptyContextObject;
          var contextType = ctor.contextType;
          {
            if ("contextType" in ctor) {
              var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
              if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                didWarnAboutInvalidateContextType.add(ctor);
                var addendum = "";
                if (contextType === void 0) {
                  addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                } else if (typeof contextType !== "object") {
                  addendum = " However, it is set to a " + typeof contextType + ".";
                } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                  addendum = " Did you accidentally pass the Context.Provider instead?";
                } else if (contextType._context !== void 0) {
                  addendum = " Did you accidentally pass the Context.Consumer instead?";
                } else {
                  addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                }
                error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
              }
            }
          }
          if (typeof contextType === "object" && contextType !== null) {
            context = readContext(contextType);
          } else {
            context = maskedLegacyContext;
          }
          var instance = new ctor(props, context);
          {
            if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutUninitializedState.has(componentName)) {
                didWarnAboutUninitializedState.add(componentName);
                error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
              }
            }
            if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
              var foundWillMountName = null;
              var foundWillReceivePropsName = null;
              var foundWillUpdateName = null;
              if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                foundWillMountName = "componentWillMount";
              } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                foundWillMountName = "UNSAFE_componentWillMount";
              }
              if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                foundWillReceivePropsName = "componentWillReceiveProps";
              } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
              }
              if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                foundWillUpdateName = "componentWillUpdate";
              } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                foundWillUpdateName = "UNSAFE_componentWillUpdate";
              }
              if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                var _componentName = getComponentNameFromType(ctor) || "Component";
                var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                  didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                  error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                }
              }
            }
          }
          return instance;
        }
        function checkClassInstance(instance, ctor, newProps) {
          {
            var name = getComponentNameFromType(ctor) || "Component";
            var renderPresent = instance.render;
            if (!renderPresent) {
              if (ctor.prototype && typeof ctor.prototype.render === "function") {
                error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
              } else {
                error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
              }
            }
            if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
              error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
            }
            if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
            }
            if (instance.propTypes) {
              error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
            }
            if (instance.contextType) {
              error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
            }
            {
              if (instance.contextTypes) {
                error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
              }
              if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                didWarnAboutContextTypeAndContextTypes.add(ctor);
                error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
              }
            }
            if (typeof instance.componentShouldUpdate === "function") {
              error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
              error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
            }
            if (typeof instance.componentDidUnmount === "function") {
              error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
            }
            if (typeof instance.componentDidReceiveProps === "function") {
              error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            }
            if (typeof instance.componentWillRecieveProps === "function") {
              error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            }
            if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
              error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            }
            var hasMutatedProps = instance.props !== newProps;
            if (instance.props !== void 0 && hasMutatedProps) {
              error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
            }
            if (instance.defaultProps) {
              error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
              didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
              error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
            }
            if (typeof instance.getDerivedStateFromProps === "function") {
              error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof instance.getDerivedStateFromError === "function") {
              error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof ctor.getSnapshotBeforeUpdate === "function") {
              error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
            }
            var _state = instance.state;
            if (_state && (typeof _state !== "object" || isArray(_state))) {
              error("%s.state: must be set to an object or null", name);
            }
            if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
              error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
            }
          }
        }
        function callComponentWillMount(type, instance) {
          var oldState = instance.state;
          if (typeof instance.componentWillMount === "function") {
            {
              if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!didWarnAboutDeprecatedWillMount[componentName]) {
                  warn(
                    "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s",
                    componentName
                  );
                  didWarnAboutDeprecatedWillMount[componentName] = true;
                }
              }
            }
            instance.componentWillMount();
          }
          if (typeof instance.UNSAFE_componentWillMount === "function") {
            instance.UNSAFE_componentWillMount();
          }
          if (oldState !== instance.state) {
            {
              error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
          if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
            var oldQueue = internalInstance.queue;
            var oldReplace = internalInstance.replace;
            internalInstance.queue = null;
            internalInstance.replace = false;
            if (oldReplace && oldQueue.length === 1) {
              inst.state = oldQueue[0];
            } else {
              var nextState = oldReplace ? oldQueue[0] : inst.state;
              var dontMutate = true;
              for (var i2 = oldReplace ? 1 : 0; i2 < oldQueue.length; i2++) {
                var partial = oldQueue[i2];
                var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
                if (partialState != null) {
                  if (dontMutate) {
                    dontMutate = false;
                    nextState = assign({}, nextState, partialState);
                  } else {
                    assign(nextState, partialState);
                  }
                }
              }
              inst.state = nextState;
            }
          } else {
            internalInstance.queue = null;
          }
        }
        function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
          {
            checkClassInstance(instance, ctor, newProps);
          }
          var initialState = instance.state !== void 0 ? instance.state : null;
          instance.updater = classComponentUpdater;
          instance.props = newProps;
          instance.state = initialState;
          var internalInstance = {
            queue: [],
            replace: false
          };
          set(instance, internalInstance);
          var contextType = ctor.contextType;
          if (typeof contextType === "object" && contextType !== null) {
            instance.context = readContext(contextType);
          } else {
            instance.context = maskedLegacyContext;
          }
          {
            if (instance.state === newProps) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
              }
            }
          }
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === "function") {
            instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
          }
          if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            callComponentWillMount(ctor, instance);
            processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
          }
        }
        var emptyTreeContext = {
          id: 1,
          overflow: ""
        };
        function getTreeId(context) {
          var overflow = context.overflow;
          var idWithLeadingBit = context.id;
          var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
          return id.toString(32) + overflow;
        }
        function pushTreeContext(baseContext, totalChildren, index) {
          var baseIdWithLeadingBit = baseContext.id;
          var baseOverflow = baseContext.overflow;
          var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
          var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
          var slot = index + 1;
          var length = getBitLength(totalChildren) + baseLength;
          if (length > 30) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            var newOverflowBits = (1 << numberOfOverflowBits) - 1;
            var newOverflow = (baseId & newOverflowBits).toString(32);
            var restOfBaseId = baseId >> numberOfOverflowBits;
            var restOfBaseLength = baseLength - numberOfOverflowBits;
            var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
            var restOfNewBits = slot << restOfBaseLength;
            var id = restOfNewBits | restOfBaseId;
            var overflow = newOverflow + baseOverflow;
            return {
              id: 1 << restOfLength | id,
              overflow
            };
          } else {
            var newBits = slot << baseLength;
            var _id = newBits | baseId;
            var _overflow = baseOverflow;
            return {
              id: 1 << length | _id,
              overflow: _overflow
            };
          }
        }
        function getBitLength(number) {
          return 32 - clz32(number);
        }
        function getLeadingBit(id) {
          return 1 << getBitLength(id) - 1;
        }
        var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
        var log = Math.log;
        var LN2 = Math.LN2;
        function clz32Fallback(x2) {
          var asUint = x2 >>> 0;
          if (asUint === 0) {
            return 32;
          }
          return 31 - (log(asUint) / LN2 | 0) | 0;
        }
        function is(x2, y2) {
          return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var currentlyRenderingComponent = null;
        var currentlyRenderingTask = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var localIdCounter = 0;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
          if (currentlyRenderingComponent === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
          }
          {
            if (isInHookUserCodeInDev) {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            }
          }
          return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          if (prevDeps === null) {
            {
              error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
            }
          }
          for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
            if (objectIs(nextDeps[i2], prevDeps[i2])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function createHook() {
          if (numberOfReRenders > 0) {
            throw new Error("Rendered more hooks than during the previous render");
          }
          return {
            memoizedState: null,
            queue: null,
            next: null
          };
        }
        function createWorkInProgressHook() {
          if (workInProgressHook === null) {
            if (firstWorkInProgressHook === null) {
              isReRender = false;
              firstWorkInProgressHook = workInProgressHook = createHook();
            } else {
              isReRender = true;
              workInProgressHook = firstWorkInProgressHook;
            }
          } else {
            if (workInProgressHook.next === null) {
              isReRender = false;
              workInProgressHook = workInProgressHook.next = createHook();
            } else {
              isReRender = true;
              workInProgressHook = workInProgressHook.next;
            }
          }
          return workInProgressHook;
        }
        function prepareToUseHooks(task, componentIdentity) {
          currentlyRenderingComponent = componentIdentity;
          currentlyRenderingTask = task;
          {
            isInHookUserCodeInDev = false;
          }
          localIdCounter = 0;
        }
        function finishHooks(Component2, props, children, refOrContext) {
          while (didScheduleRenderPhaseUpdate) {
            didScheduleRenderPhaseUpdate = false;
            localIdCounter = 0;
            numberOfReRenders += 1;
            workInProgressHook = null;
            children = Component2(props, refOrContext);
          }
          resetHooksState();
          return children;
        }
        function checkDidRenderIdHook() {
          var didRenderIdHook = localIdCounter !== 0;
          return didRenderIdHook;
        }
        function resetHooksState() {
          {
            isInHookUserCodeInDev = false;
          }
          currentlyRenderingComponent = null;
          currentlyRenderingTask = null;
          didScheduleRenderPhaseUpdate = false;
          firstWorkInProgressHook = null;
          numberOfReRenders = 0;
          renderPhaseUpdates = null;
          workInProgressHook = null;
        }
        function readContext$1(context) {
          {
            if (isInHookUserCodeInDev) {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          return readContext(context);
        }
        function useContext2(context) {
          {
            currentHookNameInDev = "useContext";
          }
          resolveCurrentlyRenderingComponent();
          return readContext(context);
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function useState2(initialState) {
          {
            currentHookNameInDev = "useState";
          }
          return useReducer2(
            basicStateReducer,
            initialState
          );
        }
        function useReducer2(reducer, initialArg, init) {
          {
            if (reducer !== basicStateReducer) {
              currentHookNameInDev = "useReducer";
            }
          }
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          if (isReRender) {
            var queue = workInProgressHook.queue;
            var dispatch = queue.dispatch;
            if (renderPhaseUpdates !== null) {
              var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
              if (firstRenderPhaseUpdate !== void 0) {
                renderPhaseUpdates.delete(queue);
                var newState = workInProgressHook.memoizedState;
                var update = firstRenderPhaseUpdate;
                do {
                  var action = update.action;
                  {
                    isInHookUserCodeInDev = true;
                  }
                  newState = reducer(newState, action);
                  {
                    isInHookUserCodeInDev = false;
                  }
                  update = update.next;
                } while (update !== null);
                workInProgressHook.memoizedState = newState;
                return [newState, dispatch];
              }
            }
            return [workInProgressHook.memoizedState, dispatch];
          } else {
            {
              isInHookUserCodeInDev = true;
            }
            var initialState;
            if (reducer === basicStateReducer) {
              initialState = typeof initialArg === "function" ? initialArg() : initialArg;
            } else {
              initialState = init !== void 0 ? init(initialArg) : initialArg;
            }
            {
              isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = initialState;
            var _queue = workInProgressHook.queue = {
              last: null,
              dispatch: null
            };
            var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
            return [workInProgressHook.memoizedState, _dispatch];
          }
        }
        function useMemo2(nextCreate, deps) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          if (workInProgressHook !== null) {
            var prevState = workInProgressHook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
          }
          {
            isInHookUserCodeInDev = true;
          }
          var nextValue = nextCreate();
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function useRef2(initialValue) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var previousRef = workInProgressHook.memoizedState;
          if (previousRef === null) {
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            workInProgressHook.memoizedState = ref;
            return ref;
          } else {
            return previousRef;
          }
        }
        function useLayoutEffect2(create, inputs) {
          {
            currentHookNameInDev = "useLayoutEffect";
            error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
          }
        }
        function dispatchAction(componentIdentity, queue, action) {
          if (numberOfReRenders >= RE_RENDER_LIMIT) {
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          }
          if (componentIdentity === currentlyRenderingComponent) {
            didScheduleRenderPhaseUpdate = true;
            var update = {
              action,
              next: null
            };
            if (renderPhaseUpdates === null) {
              renderPhaseUpdates = /* @__PURE__ */ new Map();
            }
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate === void 0) {
              renderPhaseUpdates.set(queue, update);
            } else {
              var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
              while (lastRenderPhaseUpdate.next !== null) {
                lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              }
              lastRenderPhaseUpdate.next = update;
            }
          }
        }
        function useCallback2(callback, deps) {
          return useMemo2(function() {
            return callback;
          }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
          resolveCurrentlyRenderingComponent();
          return getSnapshot(source._source);
        }
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          if (getServerSnapshot === void 0) {
            throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
          }
          return getServerSnapshot();
        }
        function useDeferredValue2(value) {
          resolveCurrentlyRenderingComponent();
          return value;
        }
        function unsupportedStartTransition() {
          throw new Error("startTransition cannot be called during server rendering.");
        }
        function useTransition2() {
          resolveCurrentlyRenderingComponent();
          return [false, unsupportedStartTransition];
        }
        function useId2() {
          var task = currentlyRenderingTask;
          var treeId = getTreeId(task.treeContext);
          var responseState = currentResponseState;
          if (responseState === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
          }
          var localId = localIdCounter++;
          return makeId(responseState, treeId, localId);
        }
        function noop() {
        }
        var Dispatcher = {
          readContext: readContext$1,
          useContext: useContext2,
          useMemo: useMemo2,
          useReducer: useReducer2,
          useRef: useRef2,
          useState: useState2,
          useInsertionEffect: noop,
          useLayoutEffect: useLayoutEffect2,
          useCallback: useCallback2,
          useImperativeHandle: noop,
          useEffect: noop,
          useDebugValue: noop,
          useDeferredValue: useDeferredValue2,
          useTransition: useTransition2,
          useId: useId2,
          useMutableSource,
          useSyncExternalStore: useSyncExternalStore2
        };
        var currentResponseState = null;
        function setCurrentResponseState(responseState) {
          currentResponseState = responseState;
        }
        function getStackByComponentStackNode(componentStack) {
          try {
            var info = "";
            var node = componentStack;
            do {
              switch (node.tag) {
                case 0:
                  info += describeBuiltInComponentFrame(node.type, null, null);
                  break;
                case 1:
                  info += describeFunctionComponentFrame(node.type, null, null);
                  break;
                case 2:
                  info += describeClassComponentFrame(node.type, null, null);
                  break;
              }
              node = node.parent;
            } while (node);
            return info;
          } catch (x2) {
            return "\nError generating stack: " + x2.message + "\n" + x2.stack;
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        var PENDING = 0;
        var COMPLETED = 1;
        var FLUSHED = 2;
        var ABORTED = 3;
        var ERRORED = 4;
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
        function defaultErrorHandler(error2) {
          console["error"](error2);
          return null;
        }
        function noop$1() {
        }
        function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError) {
          var pingedTasks = [];
          var abortSet = /* @__PURE__ */ new Set();
          var request = {
            destination: null,
            responseState,
            progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
            status: OPEN,
            fatalError: null,
            nextSegmentId: 0,
            allPendingTasks: 0,
            pendingRootTasks: 0,
            completedRootSegment: null,
            abortableTasks: abortSet,
            pingedTasks,
            clientRenderedBoundaries: [],
            completedBoundaries: [],
            partialBoundaries: [],
            onError: onError2 === void 0 ? defaultErrorHandler : onError2,
            onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
            onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
            onShellError: onShellError === void 0 ? noop$1 : onShellError,
            onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
          };
          var rootSegment = createPendingSegment(
            request,
            0,
            null,
            rootFormatContext,
            false,
            false
          );
          rootSegment.parentFlushed = true;
          var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
          pingedTasks.push(rootTask);
          return request;
        }
        function pingTask(request, task) {
          var pingedTasks = request.pingedTasks;
          pingedTasks.push(task);
          if (pingedTasks.length === 1) {
            scheduleWork(function() {
              return performWork(request);
            });
          }
        }
        function createSuspenseBoundary(request, fallbackAbortableTasks) {
          return {
            id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
            rootSegmentID: -1,
            parentFlushed: false,
            pendingTasks: 0,
            forceClientRender: false,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks,
            errorDigest: null
          };
        }
        function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
          request.allPendingTasks++;
          if (blockedBoundary === null) {
            request.pendingRootTasks++;
          } else {
            blockedBoundary.pendingTasks++;
          }
          var task = {
            node,
            ping: function() {
              return pingTask(request, task);
            },
            blockedBoundary,
            blockedSegment,
            abortSet,
            legacyContext,
            context,
            treeContext
          };
          {
            task.componentStack = null;
          }
          abortSet.add(task);
          return task;
        }
        function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
          return {
            status: PENDING,
            id: -1,
            index,
            parentFlushed: false,
            chunks: [],
            children: [],
            formatContext,
            boundary,
            lastPushedText,
            textEmbedded
          };
        }
        var currentTaskInDEV = null;
        function getCurrentStackInDEV() {
          {
            if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
              return "";
            }
            return getStackByComponentStackNode(currentTaskInDEV.componentStack);
          }
        }
        function pushBuiltInComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 0,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushFunctionComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 1,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushClassComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 2,
              parent: task.componentStack,
              type
            };
          }
        }
        function popComponentStackInDEV(task) {
          {
            if (task.componentStack === null) {
              error("Unexpectedly popped too many stack frames. This is a bug in React.");
            } else {
              task.componentStack = task.componentStack.parent;
            }
          }
        }
        var lastBoundaryErrorComponentStackDev = null;
        function captureBoundaryErrorDetailsDev(boundary, error2) {
          {
            var errorMessage;
            if (typeof error2 === "string") {
              errorMessage = error2;
            } else if (error2 && typeof error2.message === "string") {
              errorMessage = error2.message;
            } else {
              errorMessage = String(error2);
            }
            var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
            lastBoundaryErrorComponentStackDev = null;
            boundary.errorMessage = errorMessage;
            boundary.errorComponentStack = errorComponentStack;
          }
        }
        function logRecoverableError(request, error2) {
          var errorDigest = request.onError(error2);
          if (errorDigest != null && typeof errorDigest !== "string") {
            throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
          }
          return errorDigest;
        }
        function fatalError(request, error2) {
          var onShellError = request.onShellError;
          onShellError(error2);
          var onFatalError = request.onFatalError;
          onFatalError(error2);
          if (request.destination !== null) {
            request.status = CLOSED;
            closeWithError(request.destination, error2);
          } else {
            request.status = CLOSING;
            request.fatalError = error2;
          }
        }
        function renderSuspenseBoundary(request, task, props) {
          pushBuiltInComponentStackInDEV(task, "Suspense");
          var parentBoundary = task.blockedBoundary;
          var parentSegment = task.blockedSegment;
          var fallback = props.fallback;
          var content = props.children;
          var fallbackAbortSet = /* @__PURE__ */ new Set();
          var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
          var insertionIndex = parentSegment.chunks.length;
          var boundarySegment = createPendingSegment(
            request,
            insertionIndex,
            newBoundary,
            parentSegment.formatContext,
            false,
            false
          );
          parentSegment.children.push(boundarySegment);
          parentSegment.lastPushedText = false;
          var contentRootSegment = createPendingSegment(
            request,
            0,
            null,
            parentSegment.formatContext,
            false,
            false
          );
          contentRootSegment.parentFlushed = true;
          task.blockedBoundary = newBoundary;
          task.blockedSegment = contentRootSegment;
          try {
            renderNode(request, task, content);
            pushSegmentFinale$1(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
            contentRootSegment.status = COMPLETED;
            queueCompletedSegment(newBoundary, contentRootSegment);
            if (newBoundary.pendingTasks === 0) {
              popComponentStackInDEV(task);
              return;
            }
          } catch (error2) {
            contentRootSegment.status = ERRORED;
            newBoundary.forceClientRender = true;
            newBoundary.errorDigest = logRecoverableError(request, error2);
            {
              captureBoundaryErrorDetailsDev(newBoundary, error2);
            }
          } finally {
            task.blockedBoundary = parentBoundary;
            task.blockedSegment = parentSegment;
          }
          var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
          {
            suspendedFallbackTask.componentStack = task.componentStack;
          }
          request.pingedTasks.push(suspendedFallbackTask);
          popComponentStackInDEV(task);
        }
        function renderHostElement(request, task, type, props) {
          pushBuiltInComponentStackInDEV(task, type);
          var segment = task.blockedSegment;
          var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
          segment.lastPushedText = false;
          var prevContext = segment.formatContext;
          segment.formatContext = getChildFormatContext(prevContext, type, props);
          renderNode(request, task, children);
          segment.formatContext = prevContext;
          pushEndInstance(segment.chunks, type);
          segment.lastPushedText = false;
          popComponentStackInDEV(task);
        }
        function shouldConstruct$1(Component2) {
          return Component2.prototype && Component2.prototype.isReactComponent;
        }
        function renderWithHooks(request, task, Component2, props, secondArg) {
          var componentIdentity = {};
          prepareToUseHooks(task, componentIdentity);
          var result = Component2(props, secondArg);
          return finishHooks(Component2, props, result, secondArg);
        }
        function finishClassComponent(request, task, instance, Component2, props) {
          var nextChildren = instance.render();
          {
            if (instance.props !== props) {
              if (!didWarnAboutReassigningProps) {
                error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component2) || "a component");
              }
              didWarnAboutReassigningProps = true;
            }
          }
          {
            var childContextTypes = Component2.childContextTypes;
            if (childContextTypes !== null && childContextTypes !== void 0) {
              var previousContext = task.legacyContext;
              var mergedContext = processChildContext(instance, Component2, previousContext, childContextTypes);
              task.legacyContext = mergedContext;
              renderNodeDestructive(request, task, nextChildren);
              task.legacyContext = previousContext;
              return;
            }
          }
          renderNodeDestructive(request, task, nextChildren);
        }
        function renderClassComponent(request, task, Component2, props) {
          pushClassComponentStackInDEV(task, Component2);
          var maskedContext = getMaskedContext(Component2, task.legacyContext);
          var instance = constructClassInstance(Component2, props, maskedContext);
          mountClassInstance(instance, Component2, props, maskedContext);
          finishClassComponent(request, task, instance, Component2, props);
          popComponentStackInDEV(task);
        }
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutContextTypeOnFunctionComponent = {};
        var didWarnAboutGetDerivedStateOnFunctionComponent = {};
        var didWarnAboutReassigningProps = false;
        var didWarnAboutGenerators = false;
        var didWarnAboutMaps = false;
        var hasWarnedAboutUsingContextAsConsumer = false;
        function renderIndeterminateComponent(request, task, Component2, props) {
          var legacyContext;
          {
            legacyContext = getMaskedContext(Component2, task.legacyContext);
          }
          pushFunctionComponentStackInDEV(task, Component2);
          {
            if (Component2.prototype && typeof Component2.prototype.render === "function") {
              var componentName = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutBadClass[componentName]) {
                error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                didWarnAboutBadClass[componentName] = true;
              }
            }
          }
          var value = renderWithHooks(request, task, Component2, props, legacyContext);
          var hasId = checkDidRenderIdHook();
          {
            if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
              var _componentName = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                didWarnAboutModulePatternComponent[_componentName] = true;
              }
            }
          }
          if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
            {
              var _componentName2 = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName2]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                didWarnAboutModulePatternComponent[_componentName2] = true;
              }
            }
            mountClassInstance(value, Component2, props, legacyContext);
            finishClassComponent(request, task, value, Component2, props);
          } else {
            {
              validateFunctionComponentInDev(Component2);
            }
            if (hasId) {
              var prevTreeContext = task.treeContext;
              var totalChildren = 1;
              var index = 0;
              task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
              try {
                renderNodeDestructive(request, task, value);
              } finally {
                task.treeContext = prevTreeContext;
              }
            } else {
              renderNodeDestructive(request, task, value);
            }
          }
          popComponentStackInDEV(task);
        }
        function validateFunctionComponentInDev(Component2) {
          {
            if (Component2) {
              if (Component2.childContextTypes) {
                error("%s(...): childContextTypes cannot be defined on a function component.", Component2.displayName || Component2.name || "Component");
              }
            }
            if (typeof Component2.getDerivedStateFromProps === "function") {
              var _componentName3 = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
              }
            }
            if (typeof Component2.contextType === "object" && Component2.contextType !== null) {
              var _componentName4 = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                error("%s: Function components do not support contextType.", _componentName4);
                didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
              }
            }
          }
        }
        function resolveDefaultProps(Component2, baseProps) {
          if (Component2 && Component2.defaultProps) {
            var props = assign({}, baseProps);
            var defaultProps = Component2.defaultProps;
            for (var propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
            return props;
          }
          return baseProps;
        }
        function renderForwardRef(request, task, type, props, ref) {
          pushFunctionComponentStackInDEV(task, type.render);
          var children = renderWithHooks(request, task, type.render, props, ref);
          var hasId = checkDidRenderIdHook();
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, children);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, children);
          }
          popComponentStackInDEV(task);
        }
        function renderMemo(request, task, type, props, ref) {
          var innerType = type.type;
          var resolvedProps = resolveDefaultProps(innerType, props);
          renderElement(request, task, innerType, resolvedProps, ref);
        }
        function renderContextConsumer(request, task, context, props) {
          {
            if (context._context === void 0) {
              if (context !== context.Consumer) {
                if (!hasWarnedAboutUsingContextAsConsumer) {
                  hasWarnedAboutUsingContextAsConsumer = true;
                  error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                }
              }
            } else {
              context = context._context;
            }
          }
          var render = props.children;
          {
            if (typeof render !== "function") {
              error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
            }
          }
          var newValue = readContext(context);
          var newChildren = render(newValue);
          renderNodeDestructive(request, task, newChildren);
        }
        function renderContextProvider(request, task, type, props) {
          var context = type._context;
          var value = props.value;
          var children = props.children;
          var prevSnapshot;
          {
            prevSnapshot = task.context;
          }
          task.context = pushProvider(context, value);
          renderNodeDestructive(request, task, children);
          task.context = popProvider(context);
          {
            if (prevSnapshot !== task.context) {
              error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
            }
          }
        }
        function renderLazyComponent(request, task, lazyComponent, props, ref) {
          pushBuiltInComponentStackInDEV(task, "Lazy");
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;
          var Component2 = init(payload);
          var resolvedProps = resolveDefaultProps(Component2, props);
          renderElement(request, task, Component2, resolvedProps, ref);
          popComponentStackInDEV(task);
        }
        function renderElement(request, task, type, props, ref) {
          if (typeof type === "function") {
            if (shouldConstruct$1(type)) {
              renderClassComponent(request, task, type, props);
              return;
            } else {
              renderIndeterminateComponent(request, task, type, props);
              return;
            }
          }
          if (typeof type === "string") {
            renderHostElement(request, task, type, props);
            return;
          }
          switch (type) {
            case REACT_LEGACY_HIDDEN_TYPE:
            case REACT_DEBUG_TRACING_MODE_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_FRAGMENT_TYPE: {
              renderNodeDestructive(request, task, props.children);
              return;
            }
            case REACT_SUSPENSE_LIST_TYPE: {
              pushBuiltInComponentStackInDEV(task, "SuspenseList");
              renderNodeDestructive(request, task, props.children);
              popComponentStackInDEV(task);
              return;
            }
            case REACT_SCOPE_TYPE: {
              throw new Error("ReactDOMServer does not yet support scope components.");
            }
            case REACT_SUSPENSE_TYPE: {
              {
                renderSuspenseBoundary(request, task, props);
              }
              return;
            }
          }
          if (typeof type === "object" && type !== null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE: {
                renderForwardRef(request, task, type, props, ref);
                return;
              }
              case REACT_MEMO_TYPE: {
                renderMemo(request, task, type, props, ref);
                return;
              }
              case REACT_PROVIDER_TYPE: {
                renderContextProvider(request, task, type, props);
                return;
              }
              case REACT_CONTEXT_TYPE: {
                renderContextConsumer(request, task, type, props);
                return;
              }
              case REACT_LAZY_TYPE: {
                renderLazyComponent(request, task, type, props);
                return;
              }
            }
          }
          var info = "";
          {
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
        }
        function validateIterable(iterable, iteratorFn) {
          {
            if (typeof Symbol === "function" && iterable[Symbol.toStringTag] === "Generator") {
              if (!didWarnAboutGenerators) {
                error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
              }
              didWarnAboutGenerators = true;
            }
            if (iterable.entries === iteratorFn) {
              if (!didWarnAboutMaps) {
                error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
              }
              didWarnAboutMaps = true;
            }
          }
        }
        function renderNodeDestructive(request, task, node) {
          {
            try {
              return renderNodeDestructiveImpl(request, task, node);
            } catch (x2) {
              if (typeof x2 === "object" && x2 !== null && typeof x2.then === "function")
                ;
              else {
                lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
              }
              throw x2;
            }
          }
        }
        function renderNodeDestructiveImpl(request, task, node) {
          task.node = node;
          if (typeof node === "object" && node !== null) {
            switch (node.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var element = node;
                var type = element.type;
                var props = element.props;
                var ref = element.ref;
                renderElement(request, task, type, props, ref);
                return;
              }
              case REACT_PORTAL_TYPE:
                throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
              case REACT_LAZY_TYPE: {
                var lazyNode = node;
                var payload = lazyNode._payload;
                var init = lazyNode._init;
                var resolvedNode;
                {
                  try {
                    resolvedNode = init(payload);
                  } catch (x2) {
                    if (typeof x2 === "object" && x2 !== null && typeof x2.then === "function") {
                      pushBuiltInComponentStackInDEV(task, "Lazy");
                    }
                    throw x2;
                  }
                }
                renderNodeDestructive(request, task, resolvedNode);
                return;
              }
            }
            if (isArray(node)) {
              renderChildrenArray(request, task, node);
              return;
            }
            var iteratorFn = getIteratorFn(node);
            if (iteratorFn) {
              {
                validateIterable(node, iteratorFn);
              }
              var iterator = iteratorFn.call(node);
              if (iterator) {
                var step = iterator.next();
                if (!step.done) {
                  var children = [];
                  do {
                    children.push(step.value);
                    step = iterator.next();
                  } while (!step.done);
                  renderChildrenArray(request, task, children);
                  return;
                }
                return;
              }
            }
            var childString = Object.prototype.toString.call(node);
            throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
          }
          if (typeof node === "string") {
            var segment = task.blockedSegment;
            segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
            return;
          }
          if (typeof node === "number") {
            var _segment = task.blockedSegment;
            _segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
            return;
          }
          {
            if (typeof node === "function") {
              error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
            }
          }
        }
        function renderChildrenArray(request, task, children) {
          var totalChildren = children.length;
          for (var i2 = 0; i2 < totalChildren; i2++) {
            var prevTreeContext = task.treeContext;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i2);
            try {
              renderNode(request, task, children[i2]);
            } finally {
              task.treeContext = prevTreeContext;
            }
          }
        }
        function spawnNewSuspendedTask(request, task, x2) {
          var segment = task.blockedSegment;
          var insertionIndex = segment.chunks.length;
          var newSegment = createPendingSegment(
            request,
            insertionIndex,
            null,
            segment.formatContext,
            segment.lastPushedText,
            true
          );
          segment.children.push(newSegment);
          segment.lastPushedText = false;
          var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
          {
            if (task.componentStack !== null) {
              newTask.componentStack = task.componentStack.parent;
            }
          }
          var ping = newTask.ping;
          x2.then(ping, ping);
        }
        function renderNode(request, task, node) {
          var previousFormatContext = task.blockedSegment.formatContext;
          var previousLegacyContext = task.legacyContext;
          var previousContext = task.context;
          var previousComponentStack = null;
          {
            previousComponentStack = task.componentStack;
          }
          try {
            return renderNodeDestructive(request, task, node);
          } catch (x2) {
            resetHooksState();
            if (typeof x2 === "object" && x2 !== null && typeof x2.then === "function") {
              spawnNewSuspendedTask(request, task, x2);
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              return;
            } else {
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              throw x2;
            }
          }
        }
        function erroredTask(request, boundary, segment, error2) {
          var errorDigest = logRecoverableError(request, error2);
          if (boundary === null) {
            fatalError(request, error2);
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              boundary.errorDigest = errorDigest;
              {
                captureBoundaryErrorDetailsDev(boundary, error2);
              }
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function abortTaskSoft(task) {
          var request = this;
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          finishedTask(request, boundary, segment);
        }
        function abortTask(task, request, reason) {
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          if (boundary === null) {
            request.allPendingTasks--;
            if (request.status !== CLOSED) {
              request.status = CLOSED;
              if (request.destination !== null) {
                close(request.destination);
              }
            }
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
              boundary.errorDigest = request.onError(_error);
              {
                var errorPrefix = "The server did not finish this Suspense boundary: ";
                if (_error && typeof _error.message === "string") {
                  _error = errorPrefix + _error.message;
                } else {
                  _error = errorPrefix + String(_error);
                }
                var previousTaskInDev = currentTaskInDEV;
                currentTaskInDEV = task;
                try {
                  captureBoundaryErrorDetailsDev(boundary, _error);
                } finally {
                  currentTaskInDEV = previousTaskInDev;
                }
              }
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
            boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
              return abortTask(fallbackTask, request, reason);
            });
            boundary.fallbackAbortableTasks.clear();
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
              var onAllReady = request.onAllReady;
              onAllReady();
            }
          }
        }
        function queueCompletedSegment(boundary, segment) {
          if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = true;
            if (childSegment.status === COMPLETED) {
              queueCompletedSegment(boundary, childSegment);
            }
          } else {
            var completedSegments = boundary.completedSegments;
            completedSegments.push(segment);
          }
        }
        function finishedTask(request, boundary, segment) {
          if (boundary === null) {
            if (segment.parentFlushed) {
              if (request.completedRootSegment !== null) {
                throw new Error("There can only be one root segment. This is a bug in React.");
              }
              request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            if (request.pendingRootTasks === 0) {
              request.onShellError = noop$1;
              var onShellReady = request.onShellReady;
              onShellReady();
            }
          } else {
            boundary.pendingTasks--;
            if (boundary.forceClientRender)
              ;
            else if (boundary.pendingTasks === 0) {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                }
              }
              if (boundary.parentFlushed) {
                request.completedBoundaries.push(boundary);
              }
              boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
              boundary.fallbackAbortableTasks.clear();
            } else {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                  var completedSegments = boundary.completedSegments;
                  if (completedSegments.length === 1) {
                    if (boundary.parentFlushed) {
                      request.partialBoundaries.push(boundary);
                    }
                  }
                }
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function retryTask(request, task) {
          var segment = task.blockedSegment;
          if (segment.status !== PENDING) {
            return;
          }
          switchContext(task.context);
          var prevTaskInDEV = null;
          {
            prevTaskInDEV = currentTaskInDEV;
            currentTaskInDEV = task;
          }
          try {
            renderNodeDestructive(request, task, task.node);
            pushSegmentFinale$1(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
            task.abortSet.delete(task);
            segment.status = COMPLETED;
            finishedTask(request, task.blockedBoundary, segment);
          } catch (x2) {
            resetHooksState();
            if (typeof x2 === "object" && x2 !== null && typeof x2.then === "function") {
              var ping = task.ping;
              x2.then(ping, ping);
            } else {
              task.abortSet.delete(task);
              segment.status = ERRORED;
              erroredTask(request, task.blockedBoundary, segment, x2);
            }
          } finally {
            {
              currentTaskInDEV = prevTaskInDEV;
            }
          }
        }
        function performWork(request) {
          if (request.status === CLOSED) {
            return;
          }
          var prevContext = getActiveContext();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = Dispatcher;
          var prevGetCurrentStackImpl;
          {
            prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
            ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
          }
          var prevResponseState = currentResponseState;
          setCurrentResponseState(request.responseState);
          try {
            var pingedTasks = request.pingedTasks;
            var i2;
            for (i2 = 0; i2 < pingedTasks.length; i2++) {
              var task = pingedTasks[i2];
              retryTask(request, task);
            }
            pingedTasks.splice(0, i2);
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          } finally {
            setCurrentResponseState(prevResponseState);
            ReactCurrentDispatcher$1.current = prevDispatcher;
            {
              ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
            }
            if (prevDispatcher === Dispatcher) {
              switchContext(prevContext);
            }
          }
        }
        function flushSubtree(request, destination, segment) {
          segment.parentFlushed = true;
          switch (segment.status) {
            case PENDING: {
              var segmentID = segment.id = request.nextSegmentId++;
              segment.lastPushedText = false;
              segment.textEmbedded = false;
              return writePlaceholder(destination, request.responseState, segmentID);
            }
            case COMPLETED: {
              segment.status = FLUSHED;
              var r2 = true;
              var chunks = segment.chunks;
              var chunkIdx = 0;
              var children = segment.children;
              for (var childIdx = 0; childIdx < children.length; childIdx++) {
                var nextChild = children[childIdx];
                for (; chunkIdx < nextChild.index; chunkIdx++) {
                  writeChunk(destination, chunks[chunkIdx]);
                }
                r2 = flushSegment(request, destination, nextChild);
              }
              for (; chunkIdx < chunks.length - 1; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              if (chunkIdx < chunks.length) {
                r2 = writeChunkAndReturn(destination, chunks[chunkIdx]);
              }
              return r2;
            }
            default: {
              throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
            }
          }
        }
        function flushSegment(request, destination, segment) {
          var boundary = segment.boundary;
          if (boundary === null) {
            return flushSubtree(request, destination, segment);
          }
          boundary.parentFlushed = true;
          if (boundary.forceClientRender) {
            writeStartClientRenderedSuspenseBoundary$1(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
            flushSubtree(request, destination, segment);
            return writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
          } else if (boundary.pendingTasks > 0) {
            boundary.rootSegmentID = request.nextSegmentId++;
            if (boundary.completedSegments.length > 0) {
              request.partialBoundaries.push(boundary);
            }
            var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
            writeStartPendingSuspenseBoundary(destination, request.responseState, id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else if (boundary.byteSize > request.progressiveChunkSize) {
            boundary.rootSegmentID = request.nextSegmentId++;
            request.completedBoundaries.push(boundary);
            writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else {
            writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
            var completedSegments = boundary.completedSegments;
            if (completedSegments.length !== 1) {
              throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
            }
            var contentSegment = completedSegments[0];
            flushSegment(request, destination, contentSegment);
            return writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
          }
        }
        function flushClientRenderedBoundary(request, destination, boundary) {
          return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
        }
        function flushSegmentContainer(request, destination, segment) {
          writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
          flushSegment(request, destination, segment);
          return writeEndSegment(destination, segment.formatContext);
        }
        function flushCompletedBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i2 = 0;
          for (; i2 < completedSegments.length; i2++) {
            var segment = completedSegments[i2];
            flushPartiallyCompletedSegment(request, destination, boundary, segment);
          }
          completedSegments.length = 0;
          return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
        }
        function flushPartialBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i2 = 0;
          for (; i2 < completedSegments.length; i2++) {
            var segment = completedSegments[i2];
            if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
              i2++;
              completedSegments.splice(0, i2);
              return false;
            }
          }
          completedSegments.splice(0, i2);
          return true;
        }
        function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
          if (segment.status === FLUSHED) {
            return true;
          }
          var segmentID = segment.id;
          if (segmentID === -1) {
            var rootSegmentID = segment.id = boundary.rootSegmentID;
            if (rootSegmentID === -1) {
              throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
            }
            return flushSegmentContainer(request, destination, segment);
          } else {
            flushSegmentContainer(request, destination, segment);
            return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
          }
        }
        function flushCompletedQueues(request, destination) {
          try {
            var completedRootSegment = request.completedRootSegment;
            if (completedRootSegment !== null && request.pendingRootTasks === 0) {
              flushSegment(request, destination, completedRootSegment);
              request.completedRootSegment = null;
              writeCompletedRoot(destination, request.responseState);
            }
            var clientRenderedBoundaries = request.clientRenderedBoundaries;
            var i2;
            for (i2 = 0; i2 < clientRenderedBoundaries.length; i2++) {
              var boundary = clientRenderedBoundaries[i2];
              if (!flushClientRenderedBoundary(request, destination, boundary)) {
                request.destination = null;
                i2++;
                clientRenderedBoundaries.splice(0, i2);
                return;
              }
            }
            clientRenderedBoundaries.splice(0, i2);
            var completedBoundaries = request.completedBoundaries;
            for (i2 = 0; i2 < completedBoundaries.length; i2++) {
              var _boundary = completedBoundaries[i2];
              if (!flushCompletedBoundary(request, destination, _boundary)) {
                request.destination = null;
                i2++;
                completedBoundaries.splice(0, i2);
                return;
              }
            }
            completedBoundaries.splice(0, i2);
            completeWriting(destination);
            beginWriting(destination);
            var partialBoundaries = request.partialBoundaries;
            for (i2 = 0; i2 < partialBoundaries.length; i2++) {
              var _boundary2 = partialBoundaries[i2];
              if (!flushPartialBoundary(request, destination, _boundary2)) {
                request.destination = null;
                i2++;
                partialBoundaries.splice(0, i2);
                return;
              }
            }
            partialBoundaries.splice(0, i2);
            var largeBoundaries = request.completedBoundaries;
            for (i2 = 0; i2 < largeBoundaries.length; i2++) {
              var _boundary3 = largeBoundaries[i2];
              if (!flushCompletedBoundary(request, destination, _boundary3)) {
                request.destination = null;
                i2++;
                largeBoundaries.splice(0, i2);
                return;
              }
            }
            largeBoundaries.splice(0, i2);
          } finally {
            if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
              {
                if (request.abortableTasks.size !== 0) {
                  error("There was still abortable task at the root when we closed. This is a bug in React.");
                }
              }
              close(destination);
            }
          }
        }
        function startWork(request) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
        function startFlowing(request, destination) {
          if (request.status === CLOSING) {
            request.status = CLOSED;
            closeWithError(destination, request.fatalError);
            return;
          }
          if (request.status === CLOSED) {
            return;
          }
          if (request.destination !== null) {
            return;
          }
          request.destination = destination;
          try {
            flushCompletedQueues(request, destination);
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function abort(request, reason) {
          try {
            var abortableTasks = request.abortableTasks;
            abortableTasks.forEach(function(task) {
              return abortTask(task, request, reason);
            });
            abortableTasks.clear();
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function onError() {
        }
        function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
          var didFatal = false;
          var fatalError2 = null;
          var result = "";
          var destination = {
            push: function(chunk) {
              if (chunk !== null) {
                result += chunk;
              }
              return true;
            },
            destroy: function(error2) {
              didFatal = true;
              fatalError2 = error2;
            }
          };
          var readyToStream = false;
          function onShellReady() {
            readyToStream = true;
          }
          var request = createRequest(children, createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : void 0), createRootFormatContext(), Infinity, onError, void 0, onShellReady, void 0, void 0);
          startWork(request);
          abort(request, abortReason);
          startFlowing(request, destination);
          if (didFatal) {
            throw fatalError2;
          }
          if (!readyToStream) {
            throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          }
          return result;
        }
        function renderToString2(children, options) {
          return renderToStringImpl(children, options, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
        }
        function renderToStaticMarkup2(children, options) {
          return renderToStringImpl(children, options, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
        }
        function renderToNodeStream2() {
          throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
        }
        function renderToStaticNodeStream2() {
          throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
        }
        exports.renderToNodeStream = renderToNodeStream2;
        exports.renderToStaticMarkup = renderToStaticMarkup2;
        exports.renderToStaticNodeStream = renderToStaticNodeStream2;
        exports.renderToString = renderToString2;
        exports.version = ReactVersion;
      })();
    }
  }
});
var require_react_dom_server_browser_development = __commonJS2({
  "esm-build-0303abb25fcb426f29cf2c89bdb3c18934571244-68859692/node_modules/react-dom/cjs/react-dom-server.browser.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = mod_default;
        var ReactVersion = "18.2.0";
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function scheduleWork(callback) {
          callback();
        }
        var VIEW_SIZE = 512;
        var currentView = null;
        var writtenBytes = 0;
        function beginWriting(destination) {
          currentView = new Uint8Array(VIEW_SIZE);
          writtenBytes = 0;
        }
        function writeChunk(destination, chunk) {
          if (chunk.length === 0) {
            return;
          }
          if (chunk.length > VIEW_SIZE) {
            if (writtenBytes > 0) {
              destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
              currentView = new Uint8Array(VIEW_SIZE);
              writtenBytes = 0;
            }
            destination.enqueue(chunk);
            return;
          }
          var bytesToWrite = chunk;
          var allowableBytes = currentView.length - writtenBytes;
          if (allowableBytes < bytesToWrite.length) {
            if (allowableBytes === 0) {
              destination.enqueue(currentView);
            } else {
              currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
              destination.enqueue(currentView);
              bytesToWrite = bytesToWrite.subarray(allowableBytes);
            }
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
          }
          currentView.set(bytesToWrite, writtenBytes);
          writtenBytes += bytesToWrite.length;
        }
        function writeChunkAndReturn(destination, chunk) {
          writeChunk(destination, chunk);
          return true;
        }
        function completeWriting(destination) {
          if (currentView && writtenBytes > 0) {
            destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
            currentView = null;
            writtenBytes = 0;
          }
        }
        function close(destination) {
          destination.close();
        }
        var textEncoder = new TextEncoder();
        function stringToChunk(content) {
          return textEncoder.encode(content);
        }
        function stringToPrecomputedChunk(content) {
          return textEncoder.encode(content);
        }
        function closeWithError(destination, error2) {
          if (typeof destination.error === "function") {
            destination.error(error2);
          } else {
            destination.close();
          }
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkAttributeStringCoercion(value, attributeName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkHtmlStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            RESERVED,
            false,
            name,
            null,
            false,
            false
          );
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name = _ref[0], attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            attributeName,
            null,
            false,
            false
          );
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEANISH_STRING,
            false,
            name.toLowerCase(),
            null,
            false,
            false
          );
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEANISH_STRING,
            false,
            name,
            null,
            false,
            false
          );
        });
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            false,
            name.toLowerCase(),
            null,
            false,
            false
          );
        });
        [
          "checked",
          "multiple",
          "muted",
          "selected"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            true,
            name,
            null,
            false,
            false
          );
        });
        [
          "capture",
          "download"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            OVERLOADED_BOOLEAN,
            false,
            name,
            null,
            false,
            false
          );
        });
        [
          "cols",
          "rows",
          "size",
          "span"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            POSITIVE_NUMERIC,
            false,
            name,
            null,
            false,
            false
          );
        });
        ["rowSpan", "start"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(
            name,
            NUMERIC,
            false,
            name.toLowerCase(),
            null,
            false,
            false
          );
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            attributeName,
            null,
            false,
            false
          );
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            attributeName,
            "http://www.w3.org/1999/xlink",
            false,
            false
          );
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            false,
            attributeName,
            "http://www.w3.org/XML/1998/namespace",
            false,
            false
          );
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            false,
            attributeName.toLowerCase(),
            null,
            false,
            false
          );
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord(
          "xlinkHref",
          STRING,
          false,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          true,
          false
        );
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            false,
            attributeName.toLowerCase(),
            null,
            true,
            true
          );
        });
        var isUnitlessNumber = {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var ariaProperties = {
          "aria-current": 0,
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        function validateProperty(tagName, name) {
          {
            if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
              return true;
            }
            if (rARIACamel.test(name)) {
              var ariaName = "aria-" + name.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                warnedProperties[name] = true;
                return true;
              }
              if (name !== correctName) {
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                warnedProperties[name] = true;
                return true;
              }
            }
            if (rARIA.test(name)) {
              var lowerCasedName = name.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name] = true;
                return false;
              }
              if (name !== standardName) {
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties[name] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var possibleStandardNames = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                error("Unknown event handler property `%s`. It will be ignored.", name);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
              } else {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
              warnedProperties$1[name] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_2, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error(
              "Unsupported style property %s. Did you mean %s?",
              name,
              camelize(name.replace(msPattern, "ms-"))
            );
          };
          var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error("`NaN` is an invalid value for the `%s` css style property.", name);
          };
          var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error("`Infinity` is an invalid value for the `%s` css style property.", name);
          };
          warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
          {
            checkHtmlStringCoercion(string);
          }
          var str = "" + string;
          var match = matchHtmlRegExp.exec(str);
          if (!match) {
            return str;
          }
          var escape;
          var html = "";
          var index;
          var lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escape = "&quot;";
                break;
              case 38:
                escape = "&amp;";
                break;
              case 39:
                escape = "&#x27;";
                break;
              case 60:
                escape = "&lt;";
                break;
              case 62:
                escape = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escape;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
          if (typeof text === "boolean" || typeof text === "number") {
            return "" + text;
          }
          return escapeHtml(text);
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern$1 = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
        }
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        var startInlineScript = stringToPrecomputedChunk("<script>");
        var endInlineScript = stringToPrecomputedChunk("<\/script>");
        var startScriptSrc = stringToPrecomputedChunk('<script src="');
        var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
        var endAsyncScript = stringToPrecomputedChunk('" async=""><\/script>');
        function escapeBootstrapScriptContent(scriptText) {
          {
            checkHtmlStringCoercion(scriptText);
          }
          return ("" + scriptText).replace(scriptRegex, scriptReplacer);
        }
        var scriptRegex = /(<\/|<)(s)(cript)/gi;
        var scriptReplacer = function(match, prefix2, s2, suffix) {
          return "" + prefix2 + (s2 === "s" ? "\\u0073" : "\\u0053") + suffix;
        };
        function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
          var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
          var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
          var bootstrapChunks = [];
          if (bootstrapScriptContent !== void 0) {
            bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
          }
          if (bootstrapScripts !== void 0) {
            for (var i2 = 0; i2 < bootstrapScripts.length; i2++) {
              bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i2])), endAsyncScript);
            }
          }
          if (bootstrapModules !== void 0) {
            for (var _i = 0; _i < bootstrapModules.length; _i++) {
              bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
            }
          }
          return {
            bootstrapChunks,
            startInlineScript: inlineScriptWithNonce,
            placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
            segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
            boundaryPrefix: idPrefix + "B:",
            idPrefix,
            nextSuspenseID: 0,
            sentCompleteSegmentFunction: false,
            sentCompleteBoundaryFunction: false,
            sentClientRenderFunction: false
          };
        }
        var ROOT_HTML_MODE = 0;
        var HTML_MODE = 1;
        var SVG_MODE = 2;
        var MATHML_MODE = 3;
        var HTML_TABLE_MODE = 4;
        var HTML_TABLE_BODY_MODE = 5;
        var HTML_TABLE_ROW_MODE = 6;
        var HTML_COLGROUP_MODE = 7;
        function createFormatContext(insertionMode, selectedValue) {
          return {
            insertionMode,
            selectedValue
          };
        }
        function createRootFormatContext(namespaceURI) {
          var insertionMode = namespaceURI === "http://www.w3.org/2000/svg" ? SVG_MODE : namespaceURI === "http://www.w3.org/1998/Math/MathML" ? MATHML_MODE : ROOT_HTML_MODE;
          return createFormatContext(insertionMode, null);
        }
        function getChildFormatContext(parentContext, type, props) {
          switch (type) {
            case "select":
              return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
            case "svg":
              return createFormatContext(SVG_MODE, null);
            case "math":
              return createFormatContext(MATHML_MODE, null);
            case "foreignObject":
              return createFormatContext(HTML_MODE, null);
            case "table":
              return createFormatContext(HTML_TABLE_MODE, null);
            case "thead":
            case "tbody":
            case "tfoot":
              return createFormatContext(HTML_TABLE_BODY_MODE, null);
            case "colgroup":
              return createFormatContext(HTML_COLGROUP_MODE, null);
            case "tr":
              return createFormatContext(HTML_TABLE_ROW_MODE, null);
          }
          if (parentContext.insertionMode >= HTML_TABLE_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          if (parentContext.insertionMode === ROOT_HTML_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          return parentContext;
        }
        var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
        function assignSuspenseBoundaryID(responseState) {
          var generatedID = responseState.nextSuspenseID++;
          return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
        }
        function makeId(responseState, treeId, localId) {
          var idPrefix = responseState.idPrefix;
          var id = ":" + idPrefix + "R" + treeId;
          if (localId > 0) {
            id += "H" + localId.toString(32);
          }
          return id + ":";
        }
        function encodeHTMLTextNode(text) {
          return escapeTextForBrowser(text);
        }
        var textSeparator = stringToPrecomputedChunk("<!-- -->");
        function pushTextInstance(target, text, responseState, textEmbedded) {
          if (text === "") {
            return textEmbedded;
          }
          if (textEmbedded) {
            target.push(textSeparator);
          }
          target.push(stringToChunk(encodeHTMLTextNode(text)));
          return true;
        }
        function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
          if (lastPushedText && textEmbedded) {
            target.push(textSeparator);
          }
        }
        var styleNameCache = /* @__PURE__ */ new Map();
        function processStyleName(styleName) {
          var chunk = styleNameCache.get(styleName);
          if (chunk !== void 0) {
            return chunk;
          }
          var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
          styleNameCache.set(styleName, result);
          return result;
        }
        var styleAttributeStart = stringToPrecomputedChunk(' style="');
        var styleAssign = stringToPrecomputedChunk(":");
        var styleSeparator = stringToPrecomputedChunk(";");
        function pushStyle(target, responseState, style) {
          if (typeof style !== "object") {
            throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
          }
          var isFirst = true;
          for (var styleName in style) {
            if (!hasOwnProperty.call(style, styleName)) {
              continue;
            }
            var styleValue = style[styleName];
            if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
              continue;
            }
            var nameChunk = void 0;
            var valueChunk = void 0;
            var isCustomProperty = styleName.indexOf("--") === 0;
            if (isCustomProperty) {
              nameChunk = stringToChunk(escapeTextForBrowser(styleName));
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            } else {
              {
                warnValidStyle$1(styleName, styleValue);
              }
              nameChunk = processStyleName(styleName);
              if (typeof styleValue === "number") {
                if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                  valueChunk = stringToChunk(styleValue + "px");
                } else {
                  valueChunk = stringToChunk("" + styleValue);
                }
              } else {
                {
                  checkCSSPropertyStringCoercion(styleValue, styleName);
                }
                valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
              }
            }
            if (isFirst) {
              isFirst = false;
              target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
            } else {
              target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
            }
          }
          if (!isFirst) {
            target.push(attributeEnd);
          }
        }
        var attributeSeparator = stringToPrecomputedChunk(" ");
        var attributeAssign = stringToPrecomputedChunk('="');
        var attributeEnd = stringToPrecomputedChunk('"');
        var attributeEmptyString = stringToPrecomputedChunk('=""');
        function pushAttribute(target, responseState, name, value) {
          switch (name) {
            case "style": {
              pushStyle(target, responseState, value);
              return;
            }
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              return;
          }
          if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
            return;
          }
          var propertyInfo = getPropertyInfo(name);
          if (propertyInfo !== null) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                if (!propertyInfo.acceptsBooleans) {
                  return;
                }
              }
            }
            var attributeName = propertyInfo.attributeName;
            var attributeNameChunk = stringToChunk(attributeName);
            switch (propertyInfo.type) {
              case BOOLEAN:
                if (value) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                }
                return;
              case OVERLOADED_BOOLEAN:
                if (value === true) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                } else if (value === false)
                  ;
                else {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                return;
              case NUMERIC:
                if (!isNaN(value)) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              case POSITIVE_NUMERIC:
                if (!isNaN(value) && value >= 1) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              default:
                if (propertyInfo.sanitizeURL) {
                  {
                    checkAttributeStringCoercion(value, attributeName);
                  }
                  value = "" + value;
                  sanitizeURL(value);
                }
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
            }
          } else if (isAttributeNameSafe(name)) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                var prefix2 = name.toLowerCase().slice(0, 5);
                if (prefix2 !== "data-" && prefix2 !== "aria-") {
                  return;
                }
              }
            }
            target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        }
        var endOfStartTag = stringToPrecomputedChunk(">");
        var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
        function pushInnerHTML(target, innerHTML, children) {
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              {
                checkHtmlStringCoercion(html);
              }
              target.push(stringToChunk("" + html));
            }
          }
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnInvalidOptionInnerHTML = false;
        var didWarnSelectedSetOnOption = false;
        function checkSelectProp(props, propName) {
          {
            var value = props[propName];
            if (value != null) {
              var array = isArray(value);
              if (props.multiple && !array) {
                error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
              } else if (!props.multiple && array) {
                error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
              }
            }
          }
        }
        function pushStartSelect(target, props, responseState) {
          {
            checkControlledValueProps("select", props);
            checkSelectProp(props, "value");
            checkSelectProp(props, "defaultValue");
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
              error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultSelectValue = true;
            }
          }
          target.push(startChunkForTag("select"));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function flattenOptionChildren(children) {
          var content = "";
          React.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
            {
              if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
                didWarnInvalidOptionChildren = true;
                error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
              }
            }
          });
          return content;
        }
        var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
        function pushStartOption(target, props, responseState, formatContext) {
          var selectedValue = formatContext.selectedValue;
          target.push(startChunkForTag("option"));
          var children = null;
          var value = null;
          var selected = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "selected":
                  selected = propValue;
                  {
                    if (!didWarnSelectedSetOnOption) {
                      error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                      didWarnSelectedSetOnOption = true;
                    }
                  }
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "value":
                  value = propValue;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (selectedValue != null) {
            var stringValue;
            if (value !== null) {
              {
                checkAttributeStringCoercion(value, "value");
              }
              stringValue = "" + value;
            } else {
              {
                if (innerHTML !== null) {
                  if (!didWarnInvalidOptionInnerHTML) {
                    didWarnInvalidOptionInnerHTML = true;
                    error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                  }
                }
              }
              stringValue = flattenOptionChildren(children);
            }
            if (isArray(selectedValue)) {
              for (var i2 = 0; i2 < selectedValue.length; i2++) {
                {
                  checkAttributeStringCoercion(selectedValue[i2], "value");
                }
                var v2 = "" + selectedValue[i2];
                if (v2 === stringValue) {
                  target.push(selectedMarkerAttribute);
                  break;
                }
              }
            } else {
              {
                checkAttributeStringCoercion(selectedValue, "select.value");
              }
              if ("" + selectedValue === stringValue) {
                target.push(selectedMarkerAttribute);
              }
            }
          } else if (selected) {
            target.push(selectedMarkerAttribute);
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function pushInput(target, props, responseState) {
          {
            checkControlledValueProps("input", props);
            if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
              error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultChecked = true;
            }
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
              error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultInputValue = true;
            }
          }
          target.push(startChunkForTag("input"));
          var value = null;
          var defaultValue = null;
          var checked = null;
          var defaultChecked = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                case "defaultChecked":
                  defaultChecked = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "checked":
                  checked = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (checked !== null) {
            pushAttribute(target, responseState, "checked", checked);
          } else if (defaultChecked !== null) {
            pushAttribute(target, responseState, "checked", defaultChecked);
          }
          if (value !== null) {
            pushAttribute(target, responseState, "value", value);
          } else if (defaultValue !== null) {
            pushAttribute(target, responseState, "value", defaultValue);
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartTextArea(target, props, responseState) {
          {
            checkControlledValueProps("textarea", props);
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
              error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultTextareaValue = true;
            }
          }
          target.push(startChunkForTag("textarea"));
          var value = null;
          var defaultValue = null;
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (value === null && defaultValue !== null) {
            value = defaultValue;
          }
          target.push(endOfStartTag);
          if (children != null) {
            {
              error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            }
            if (value != null) {
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            }
            if (isArray(children)) {
              if (children.length > 1) {
                throw new Error("<textarea> can only have at most one child.");
              }
              {
                checkHtmlStringCoercion(children[0]);
              }
              value = "" + children[0];
            }
            {
              checkHtmlStringCoercion(children);
            }
            value = "" + children;
          }
          if (typeof value === "string" && value[0] === "\n") {
            target.push(leadingNewline);
          }
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            target.push(stringToChunk(encodeHTMLTextNode("" + value)));
          }
          return null;
        }
        function pushSelfClosing(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartMenuItem(target, props, responseState) {
          target.push(startChunkForTag("menuitem"));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          return null;
        }
        function pushStartTitle(target, props, responseState) {
          target.push(startChunkForTag("title"));
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          {
            var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
            if (Array.isArray(children) && children.length > 1) {
              error("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            } else if (child != null && child.$$typeof != null) {
              error("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            } else if (child != null && typeof child !== "string" && typeof child !== "number") {
              error("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
            }
          }
          return children;
        }
        function pushStartGenericElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          if (typeof children === "string") {
            target.push(stringToChunk(encodeHTMLTextNode(children)));
            return null;
          }
          return children;
        }
        function pushStartCustomElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "style":
                  pushStyle(target, responseState, propValue);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                    target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                  }
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        var leadingNewline = stringToPrecomputedChunk("\n");
        function pushStartPreformattedElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              if (typeof html === "string" && html.length > 0 && html[0] === "\n") {
                target.push(leadingNewline, stringToChunk(html));
              } else {
                {
                  checkHtmlStringCoercion(html);
                }
                target.push(stringToChunk("" + html));
              }
            }
          }
          if (typeof children === "string" && children[0] === "\n") {
            target.push(leadingNewline);
          }
          return children;
        }
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = /* @__PURE__ */ new Map();
        function startChunkForTag(tag) {
          var tagStartChunk = validatedTagCache.get(tag);
          if (tagStartChunk === void 0) {
            if (!VALID_TAG_REGEX.test(tag)) {
              throw new Error("Invalid tag: " + tag);
            }
            tagStartChunk = stringToPrecomputedChunk("<" + tag);
            validatedTagCache.set(tag, tagStartChunk);
          }
          return tagStartChunk;
        }
        var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
        function pushStartInstance(target, type, props, responseState, formatContext) {
          {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, null);
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
            if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
              if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
                error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
              }
            }
          }
          switch (type) {
            case "select":
              return pushStartSelect(target, props, responseState);
            case "option":
              return pushStartOption(target, props, responseState, formatContext);
            case "textarea":
              return pushStartTextArea(target, props, responseState);
            case "input":
              return pushInput(target, props, responseState);
            case "menuitem":
              return pushStartMenuItem(target, props, responseState);
            case "title":
              return pushStartTitle(target, props, responseState);
            case "listing":
            case "pre": {
              return pushStartPreformattedElement(target, props, type, responseState);
            }
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              return pushSelfClosing(target, props, type, responseState);
            }
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": {
              return pushStartGenericElement(target, props, type, responseState);
            }
            case "html": {
              if (formatContext.insertionMode === ROOT_HTML_MODE) {
                target.push(DOCTYPE);
              }
              return pushStartGenericElement(target, props, type, responseState);
            }
            default: {
              if (type.indexOf("-") === -1 && typeof props.is !== "string") {
                return pushStartGenericElement(target, props, type, responseState);
              } else {
                return pushStartCustomElement(target, props, type, responseState);
              }
            }
          }
        }
        var endTag1 = stringToPrecomputedChunk("</");
        var endTag2 = stringToPrecomputedChunk(">");
        function pushEndInstance(target, type, props) {
          switch (type) {
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              break;
            }
            default: {
              target.push(endTag1, stringToChunk(type), endTag2);
            }
          }
        }
        function writeCompletedRoot(destination, responseState) {
          var bootstrapChunks = responseState.bootstrapChunks;
          var i2 = 0;
          for (; i2 < bootstrapChunks.length - 1; i2++) {
            writeChunk(destination, bootstrapChunks[i2]);
          }
          if (i2 < bootstrapChunks.length) {
            return writeChunkAndReturn(destination, bootstrapChunks[i2]);
          }
          return true;
        }
        var placeholder1 = stringToPrecomputedChunk('<template id="');
        var placeholder2 = stringToPrecomputedChunk('"></template>');
        function writePlaceholder(destination, responseState, id) {
          writeChunk(destination, placeholder1);
          writeChunk(destination, responseState.placeholderPrefix);
          var formattedID = stringToChunk(id.toString(16));
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, placeholder2);
        }
        var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
        var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
        var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
        var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
        var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
        var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
        var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
        var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
        var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
        var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
        var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
        function writeStartCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        }
        function writeStartPendingSuspenseBoundary(destination, responseState, id) {
          writeChunk(destination, startPendingSuspenseBoundary1);
          if (id === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, id);
          return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
        }
        function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
          var result;
          result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
          writeChunk(destination, clientRenderedSuspenseBoundaryError1);
          if (errorDigest) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
          {
            if (errorMesssage) {
              writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
              writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
              writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
            if (errorComponentStack) {
              writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
              writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
              writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
          }
          result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
          return result;
        }
        function writeEndCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndPendingSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
        var startSegmentHTML2 = stringToPrecomputedChunk('">');
        var endSegmentHTML = stringToPrecomputedChunk("</div>");
        var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
        var startSegmentSVG2 = stringToPrecomputedChunk('">');
        var endSegmentSVG = stringToPrecomputedChunk("</svg>");
        var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
        var startSegmentMathML2 = stringToPrecomputedChunk('">');
        var endSegmentMathML = stringToPrecomputedChunk("</math>");
        var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
        var startSegmentTable2 = stringToPrecomputedChunk('">');
        var endSegmentTable = stringToPrecomputedChunk("</table>");
        var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
        var startSegmentTableBody2 = stringToPrecomputedChunk('">');
        var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
        var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
        var startSegmentTableRow2 = stringToPrecomputedChunk('">');
        var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
        var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
        var startSegmentColGroup2 = stringToPrecomputedChunk('">');
        var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
        function writeStartSegment(destination, responseState, formatContext, id) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              writeChunk(destination, startSegmentHTML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentHTML2);
            }
            case SVG_MODE: {
              writeChunk(destination, startSegmentSVG);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentSVG2);
            }
            case MATHML_MODE: {
              writeChunk(destination, startSegmentMathML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentMathML2);
            }
            case HTML_TABLE_MODE: {
              writeChunk(destination, startSegmentTable);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTable2);
            }
            case HTML_TABLE_BODY_MODE: {
              writeChunk(destination, startSegmentTableBody);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableBody2);
            }
            case HTML_TABLE_ROW_MODE: {
              writeChunk(destination, startSegmentTableRow);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableRow2);
            }
            case HTML_COLGROUP_MODE: {
              writeChunk(destination, startSegmentColGroup);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentColGroup2);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        function writeEndSegment(destination, formatContext) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              return writeChunkAndReturn(destination, endSegmentHTML);
            }
            case SVG_MODE: {
              return writeChunkAndReturn(destination, endSegmentSVG);
            }
            case MATHML_MODE: {
              return writeChunkAndReturn(destination, endSegmentMathML);
            }
            case HTML_TABLE_MODE: {
              return writeChunkAndReturn(destination, endSegmentTable);
            }
            case HTML_TABLE_BODY_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableBody);
            }
            case HTML_TABLE_ROW_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableRow);
            }
            case HTML_COLGROUP_MODE: {
              return writeChunkAndReturn(destination, endSegmentColGroup);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
        var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
        var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
        var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
        var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
        var completeSegmentScript2 = stringToPrecomputedChunk('","');
        var completeSegmentScript3 = stringToPrecomputedChunk('")<\/script>');
        function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteSegmentFunction) {
            responseState.sentCompleteSegmentFunction = true;
            writeChunk(destination, completeSegmentScript1Full);
          } else {
            writeChunk(destination, completeSegmentScript1Partial);
          }
          writeChunk(destination, responseState.segmentPrefix);
          var formattedID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, formattedID);
          writeChunk(destination, completeSegmentScript2);
          writeChunk(destination, responseState.placeholderPrefix);
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, completeSegmentScript3);
        }
        var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
        var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
        var completeBoundaryScript2 = stringToPrecomputedChunk('","');
        var completeBoundaryScript3 = stringToPrecomputedChunk('")<\/script>');
        function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteBoundaryFunction) {
            responseState.sentCompleteBoundaryFunction = true;
            writeChunk(destination, completeBoundaryScript1Full);
          } else {
            writeChunk(destination, completeBoundaryScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          var formattedContentID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, boundaryID);
          writeChunk(destination, completeBoundaryScript2);
          writeChunk(destination, responseState.segmentPrefix);
          writeChunk(destination, formattedContentID);
          return writeChunkAndReturn(destination, completeBoundaryScript3);
        }
        var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
        var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
        var clientRenderScript1A = stringToPrecomputedChunk('"');
        var clientRenderScript2 = stringToPrecomputedChunk(")<\/script>");
        var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
        function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentClientRenderFunction) {
            responseState.sentClientRenderFunction = true;
            writeChunk(destination, clientRenderScript1Full);
          } else {
            writeChunk(destination, clientRenderScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, boundaryID);
          writeChunk(destination, clientRenderScript1A);
          if (errorDigest || errorMessage || errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
          }
          if (errorMessage || errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
          }
          if (errorComponentStack) {
            writeChunk(destination, clientRenderErrorScriptArgInterstitial);
            writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
          }
          return writeChunkAndReturn(destination, clientRenderScript2);
        }
        var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
        function escapeJSStringsForInstructionScripts(input) {
          var escaped = JSON.stringify(input);
          return escaped.replace(regexForJSStringsInScripts, function(match) {
            switch (match) {
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default: {
                throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
              }
            }
          });
        }
        var assign = Object.assign;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_SCOPE_TYPE = Symbol.for("react.scope");
        var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
        var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
                c--;
              }
              for (; s2 >= 1 && c >= 0; s2--, c--) {
                if (sampleLines[s2] !== controlLines[c]) {
                  if (s2 !== 1 || c !== 1) {
                    do {
                      s2--;
                      c--;
                      if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, source, ownerFn) {
          {
            return describeNativeComponentFrame(ctor, true);
          }
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var warnedAboutMissingGetChildContext;
        {
          warnedAboutMissingGetChildContext = {};
        }
        var emptyContextObject = {};
        {
          Object.freeze(emptyContextObject);
        }
        function getMaskedContext(type, unmaskedContext) {
          {
            var contextTypes = type.contextTypes;
            if (!contextTypes) {
              return emptyContextObject;
            }
            var context = {};
            for (var key in contextTypes) {
              context[key] = unmaskedContext[key];
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(contextTypes, context, "context", name);
            }
            return context;
          }
        }
        function processChildContext(instance, type, parentContext, childContextTypes) {
          {
            if (typeof instance.getChildContext !== "function") {
              {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!warnedAboutMissingGetChildContext[componentName]) {
                  warnedAboutMissingGetChildContext[componentName] = true;
                  error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
                }
              }
              return parentContext;
            }
            var childContext = instance.getChildContext();
            for (var contextKey in childContext) {
              if (!(contextKey in childContextTypes)) {
                throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
              }
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(childContextTypes, childContext, "child context", name);
            }
            return assign({}, parentContext, childContext);
          }
        }
        var rendererSigil;
        {
          rendererSigil = {};
        }
        var rootContextSnapshot = null;
        var currentActiveSnapshot = null;
        function popNode(prev) {
          {
            prev.context._currentValue = prev.parentValue;
          }
        }
        function pushNode(next) {
          {
            next.context._currentValue = next.value;
          }
        }
        function popToNearestCommonAncestor(prev, next) {
          if (prev === next)
            ;
          else {
            popNode(prev);
            var parentPrev = prev.parent;
            var parentNext = next.parent;
            if (parentPrev === null) {
              if (parentNext !== null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
            } else {
              if (parentNext === null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
              popToNearestCommonAncestor(parentPrev, parentNext);
            }
            pushNode(next);
          }
        }
        function popAllPrevious(prev) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev !== null) {
            popAllPrevious(parentPrev);
          }
        }
        function pushAllNext(next) {
          var parentNext = next.parent;
          if (parentNext !== null) {
            pushAllNext(parentNext);
          }
          pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (parentPrev.depth === next.depth) {
            popToNearestCommonAncestor(parentPrev, next);
          } else {
            popPreviousToCommonLevel(parentPrev, next);
          }
        }
        function popNextToCommonLevel(prev, next) {
          var parentNext = next.parent;
          if (parentNext === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (prev.depth === parentNext.depth) {
            popToNearestCommonAncestor(prev, parentNext);
          } else {
            popNextToCommonLevel(prev, parentNext);
          }
          pushNode(next);
        }
        function switchContext(newSnapshot) {
          var prev = currentActiveSnapshot;
          var next = newSnapshot;
          if (prev !== next) {
            if (prev === null) {
              pushAllNext(next);
            } else if (next === null) {
              popAllPrevious(prev);
            } else if (prev.depth === next.depth) {
              popToNearestCommonAncestor(prev, next);
            } else if (prev.depth > next.depth) {
              popPreviousToCommonLevel(prev, next);
            } else {
              popNextToCommonLevel(prev, next);
            }
            currentActiveSnapshot = next;
          }
        }
        function pushProvider(context, nextValue) {
          var prevValue;
          {
            prevValue = context._currentValue;
            context._currentValue = nextValue;
            {
              if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer = rendererSigil;
            }
          }
          var prevNode = currentActiveSnapshot;
          var newNode = {
            parent: prevNode,
            depth: prevNode === null ? 0 : prevNode.depth + 1,
            context,
            parentValue: prevValue,
            value: nextValue
          };
          currentActiveSnapshot = newNode;
          return newNode;
        }
        function popProvider(context) {
          var prevSnapshot = currentActiveSnapshot;
          if (prevSnapshot === null) {
            throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          }
          {
            if (prevSnapshot.context !== context) {
              error("The parent context is not the expected context. This is probably a bug in React.");
            }
          }
          {
            var value = prevSnapshot.parentValue;
            if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
              prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
            } else {
              prevSnapshot.context._currentValue = value;
            }
            {
              if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer = rendererSigil;
            }
          }
          return currentActiveSnapshot = prevSnapshot.parent;
        }
        function getActiveContext() {
          return currentActiveSnapshot;
        }
        function readContext(context) {
          var value = context._currentValue;
          return value;
        }
        function get(key) {
          return key._reactInternals;
        }
        function set(key, value) {
          key._reactInternals = value;
        }
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUninitializedState;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
        var didWarnAboutLegacyLifecyclesAndDerivedState;
        var didWarnAboutUndefinedDerivedState;
        var warnOnUndefinedDerivedState;
        var warnOnInvalidCallback;
        var didWarnAboutDirectlyAssigningPropsToState;
        var didWarnAboutContextTypeAndContextTypes;
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
          didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
          didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
          didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
          var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
          warnOnInvalidCallback = function(callback, callerName) {
            if (callback === null || typeof callback === "function") {
              return;
            }
            var key = callerName + "_" + callback;
            if (!didWarnOnInvalidCallback.has(key)) {
              didWarnOnInvalidCallback.add(key);
              error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
            }
          };
          warnOnUndefinedDerivedState = function(type, partialState) {
            if (partialState === void 0) {
              var componentName = getComponentNameFromType(type) || "Component";
              if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                didWarnAboutUndefinedDerivedState.add(componentName);
                error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
              }
            }
          };
        }
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnAboutNoopUpdateForComponent[warningKey]) {
              return;
            }
            error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
            didWarnAboutNoopUpdateForComponent[warningKey] = true;
          }
        }
        var classComponentUpdater = {
          isMounted: function(inst) {
            return false;
          },
          enqueueSetState: function(inst, payload, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "setState");
            } else {
              internals.queue.push(payload);
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          },
          enqueueReplaceState: function(inst, payload, callback) {
            var internals = get(inst);
            internals.replace = true;
            internals.queue = [payload];
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          },
          enqueueForceUpdate: function(inst, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "forceUpdate");
            } else {
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          }
        };
        function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
          var partialState = getDerivedStateFromProps(nextProps, prevState);
          {
            warnOnUndefinedDerivedState(ctor, partialState);
          }
          var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
          return newState;
        }
        function constructClassInstance(ctor, props, maskedLegacyContext) {
          var context = emptyContextObject;
          var contextType = ctor.contextType;
          {
            if ("contextType" in ctor) {
              var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
              if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                didWarnAboutInvalidateContextType.add(ctor);
                var addendum = "";
                if (contextType === void 0) {
                  addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                } else if (typeof contextType !== "object") {
                  addendum = " However, it is set to a " + typeof contextType + ".";
                } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                  addendum = " Did you accidentally pass the Context.Provider instead?";
                } else if (contextType._context !== void 0) {
                  addendum = " Did you accidentally pass the Context.Consumer instead?";
                } else {
                  addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                }
                error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
              }
            }
          }
          if (typeof contextType === "object" && contextType !== null) {
            context = readContext(contextType);
          } else {
            context = maskedLegacyContext;
          }
          var instance = new ctor(props, context);
          {
            if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutUninitializedState.has(componentName)) {
                didWarnAboutUninitializedState.add(componentName);
                error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
              }
            }
            if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
              var foundWillMountName = null;
              var foundWillReceivePropsName = null;
              var foundWillUpdateName = null;
              if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                foundWillMountName = "componentWillMount";
              } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                foundWillMountName = "UNSAFE_componentWillMount";
              }
              if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                foundWillReceivePropsName = "componentWillReceiveProps";
              } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
              }
              if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                foundWillUpdateName = "componentWillUpdate";
              } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                foundWillUpdateName = "UNSAFE_componentWillUpdate";
              }
              if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                var _componentName = getComponentNameFromType(ctor) || "Component";
                var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                  didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                  error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                }
              }
            }
          }
          return instance;
        }
        function checkClassInstance(instance, ctor, newProps) {
          {
            var name = getComponentNameFromType(ctor) || "Component";
            var renderPresent = instance.render;
            if (!renderPresent) {
              if (ctor.prototype && typeof ctor.prototype.render === "function") {
                error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
              } else {
                error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
              }
            }
            if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
              error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
            }
            if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
            }
            if (instance.propTypes) {
              error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
            }
            if (instance.contextType) {
              error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
            }
            {
              if (instance.contextTypes) {
                error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
              }
              if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                didWarnAboutContextTypeAndContextTypes.add(ctor);
                error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
              }
            }
            if (typeof instance.componentShouldUpdate === "function") {
              error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
              error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
            }
            if (typeof instance.componentDidUnmount === "function") {
              error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
            }
            if (typeof instance.componentDidReceiveProps === "function") {
              error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            }
            if (typeof instance.componentWillRecieveProps === "function") {
              error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            }
            if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
              error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            }
            var hasMutatedProps = instance.props !== newProps;
            if (instance.props !== void 0 && hasMutatedProps) {
              error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
            }
            if (instance.defaultProps) {
              error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
              didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
              error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
            }
            if (typeof instance.getDerivedStateFromProps === "function") {
              error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof instance.getDerivedStateFromError === "function") {
              error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof ctor.getSnapshotBeforeUpdate === "function") {
              error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
            }
            var _state = instance.state;
            if (_state && (typeof _state !== "object" || isArray(_state))) {
              error("%s.state: must be set to an object or null", name);
            }
            if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
              error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
            }
          }
        }
        function callComponentWillMount(type, instance) {
          var oldState = instance.state;
          if (typeof instance.componentWillMount === "function") {
            {
              if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!didWarnAboutDeprecatedWillMount[componentName]) {
                  warn(
                    "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s",
                    componentName
                  );
                  didWarnAboutDeprecatedWillMount[componentName] = true;
                }
              }
            }
            instance.componentWillMount();
          }
          if (typeof instance.UNSAFE_componentWillMount === "function") {
            instance.UNSAFE_componentWillMount();
          }
          if (oldState !== instance.state) {
            {
              error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
          if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
            var oldQueue = internalInstance.queue;
            var oldReplace = internalInstance.replace;
            internalInstance.queue = null;
            internalInstance.replace = false;
            if (oldReplace && oldQueue.length === 1) {
              inst.state = oldQueue[0];
            } else {
              var nextState = oldReplace ? oldQueue[0] : inst.state;
              var dontMutate = true;
              for (var i2 = oldReplace ? 1 : 0; i2 < oldQueue.length; i2++) {
                var partial = oldQueue[i2];
                var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
                if (partialState != null) {
                  if (dontMutate) {
                    dontMutate = false;
                    nextState = assign({}, nextState, partialState);
                  } else {
                    assign(nextState, partialState);
                  }
                }
              }
              inst.state = nextState;
            }
          } else {
            internalInstance.queue = null;
          }
        }
        function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
          {
            checkClassInstance(instance, ctor, newProps);
          }
          var initialState = instance.state !== void 0 ? instance.state : null;
          instance.updater = classComponentUpdater;
          instance.props = newProps;
          instance.state = initialState;
          var internalInstance = {
            queue: [],
            replace: false
          };
          set(instance, internalInstance);
          var contextType = ctor.contextType;
          if (typeof contextType === "object" && contextType !== null) {
            instance.context = readContext(contextType);
          } else {
            instance.context = maskedLegacyContext;
          }
          {
            if (instance.state === newProps) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
              }
            }
          }
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === "function") {
            instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
          }
          if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            callComponentWillMount(ctor, instance);
            processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
          }
        }
        var emptyTreeContext = {
          id: 1,
          overflow: ""
        };
        function getTreeId(context) {
          var overflow = context.overflow;
          var idWithLeadingBit = context.id;
          var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
          return id.toString(32) + overflow;
        }
        function pushTreeContext(baseContext, totalChildren, index) {
          var baseIdWithLeadingBit = baseContext.id;
          var baseOverflow = baseContext.overflow;
          var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
          var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
          var slot = index + 1;
          var length = getBitLength(totalChildren) + baseLength;
          if (length > 30) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            var newOverflowBits = (1 << numberOfOverflowBits) - 1;
            var newOverflow = (baseId & newOverflowBits).toString(32);
            var restOfBaseId = baseId >> numberOfOverflowBits;
            var restOfBaseLength = baseLength - numberOfOverflowBits;
            var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
            var restOfNewBits = slot << restOfBaseLength;
            var id = restOfNewBits | restOfBaseId;
            var overflow = newOverflow + baseOverflow;
            return {
              id: 1 << restOfLength | id,
              overflow
            };
          } else {
            var newBits = slot << baseLength;
            var _id = newBits | baseId;
            var _overflow = baseOverflow;
            return {
              id: 1 << length | _id,
              overflow: _overflow
            };
          }
        }
        function getBitLength(number) {
          return 32 - clz32(number);
        }
        function getLeadingBit(id) {
          return 1 << getBitLength(id) - 1;
        }
        var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
        var log = Math.log;
        var LN2 = Math.LN2;
        function clz32Fallback(x2) {
          var asUint = x2 >>> 0;
          if (asUint === 0) {
            return 32;
          }
          return 31 - (log(asUint) / LN2 | 0) | 0;
        }
        function is(x2, y2) {
          return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var currentlyRenderingComponent = null;
        var currentlyRenderingTask = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var localIdCounter = 0;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
          if (currentlyRenderingComponent === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
          }
          {
            if (isInHookUserCodeInDev) {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            }
          }
          return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          if (prevDeps === null) {
            {
              error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
            }
          }
          for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
            if (objectIs(nextDeps[i2], prevDeps[i2])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function createHook() {
          if (numberOfReRenders > 0) {
            throw new Error("Rendered more hooks than during the previous render");
          }
          return {
            memoizedState: null,
            queue: null,
            next: null
          };
        }
        function createWorkInProgressHook() {
          if (workInProgressHook === null) {
            if (firstWorkInProgressHook === null) {
              isReRender = false;
              firstWorkInProgressHook = workInProgressHook = createHook();
            } else {
              isReRender = true;
              workInProgressHook = firstWorkInProgressHook;
            }
          } else {
            if (workInProgressHook.next === null) {
              isReRender = false;
              workInProgressHook = workInProgressHook.next = createHook();
            } else {
              isReRender = true;
              workInProgressHook = workInProgressHook.next;
            }
          }
          return workInProgressHook;
        }
        function prepareToUseHooks(task, componentIdentity) {
          currentlyRenderingComponent = componentIdentity;
          currentlyRenderingTask = task;
          {
            isInHookUserCodeInDev = false;
          }
          localIdCounter = 0;
        }
        function finishHooks(Component2, props, children, refOrContext) {
          while (didScheduleRenderPhaseUpdate) {
            didScheduleRenderPhaseUpdate = false;
            localIdCounter = 0;
            numberOfReRenders += 1;
            workInProgressHook = null;
            children = Component2(props, refOrContext);
          }
          resetHooksState();
          return children;
        }
        function checkDidRenderIdHook() {
          var didRenderIdHook = localIdCounter !== 0;
          return didRenderIdHook;
        }
        function resetHooksState() {
          {
            isInHookUserCodeInDev = false;
          }
          currentlyRenderingComponent = null;
          currentlyRenderingTask = null;
          didScheduleRenderPhaseUpdate = false;
          firstWorkInProgressHook = null;
          numberOfReRenders = 0;
          renderPhaseUpdates = null;
          workInProgressHook = null;
        }
        function readContext$1(context) {
          {
            if (isInHookUserCodeInDev) {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          return readContext(context);
        }
        function useContext2(context) {
          {
            currentHookNameInDev = "useContext";
          }
          resolveCurrentlyRenderingComponent();
          return readContext(context);
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function useState2(initialState) {
          {
            currentHookNameInDev = "useState";
          }
          return useReducer2(
            basicStateReducer,
            initialState
          );
        }
        function useReducer2(reducer, initialArg, init) {
          {
            if (reducer !== basicStateReducer) {
              currentHookNameInDev = "useReducer";
            }
          }
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          if (isReRender) {
            var queue = workInProgressHook.queue;
            var dispatch = queue.dispatch;
            if (renderPhaseUpdates !== null) {
              var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
              if (firstRenderPhaseUpdate !== void 0) {
                renderPhaseUpdates.delete(queue);
                var newState = workInProgressHook.memoizedState;
                var update = firstRenderPhaseUpdate;
                do {
                  var action = update.action;
                  {
                    isInHookUserCodeInDev = true;
                  }
                  newState = reducer(newState, action);
                  {
                    isInHookUserCodeInDev = false;
                  }
                  update = update.next;
                } while (update !== null);
                workInProgressHook.memoizedState = newState;
                return [newState, dispatch];
              }
            }
            return [workInProgressHook.memoizedState, dispatch];
          } else {
            {
              isInHookUserCodeInDev = true;
            }
            var initialState;
            if (reducer === basicStateReducer) {
              initialState = typeof initialArg === "function" ? initialArg() : initialArg;
            } else {
              initialState = init !== void 0 ? init(initialArg) : initialArg;
            }
            {
              isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = initialState;
            var _queue = workInProgressHook.queue = {
              last: null,
              dispatch: null
            };
            var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
            return [workInProgressHook.memoizedState, _dispatch];
          }
        }
        function useMemo2(nextCreate, deps) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          if (workInProgressHook !== null) {
            var prevState = workInProgressHook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
          }
          {
            isInHookUserCodeInDev = true;
          }
          var nextValue = nextCreate();
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function useRef2(initialValue) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var previousRef = workInProgressHook.memoizedState;
          if (previousRef === null) {
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            workInProgressHook.memoizedState = ref;
            return ref;
          } else {
            return previousRef;
          }
        }
        function useLayoutEffect2(create, inputs) {
          {
            currentHookNameInDev = "useLayoutEffect";
            error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
          }
        }
        function dispatchAction(componentIdentity, queue, action) {
          if (numberOfReRenders >= RE_RENDER_LIMIT) {
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          }
          if (componentIdentity === currentlyRenderingComponent) {
            didScheduleRenderPhaseUpdate = true;
            var update = {
              action,
              next: null
            };
            if (renderPhaseUpdates === null) {
              renderPhaseUpdates = /* @__PURE__ */ new Map();
            }
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate === void 0) {
              renderPhaseUpdates.set(queue, update);
            } else {
              var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
              while (lastRenderPhaseUpdate.next !== null) {
                lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              }
              lastRenderPhaseUpdate.next = update;
            }
          }
        }
        function useCallback2(callback, deps) {
          return useMemo2(function() {
            return callback;
          }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
          resolveCurrentlyRenderingComponent();
          return getSnapshot(source._source);
        }
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          if (getServerSnapshot === void 0) {
            throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
          }
          return getServerSnapshot();
        }
        function useDeferredValue2(value) {
          resolveCurrentlyRenderingComponent();
          return value;
        }
        function unsupportedStartTransition() {
          throw new Error("startTransition cannot be called during server rendering.");
        }
        function useTransition2() {
          resolveCurrentlyRenderingComponent();
          return [false, unsupportedStartTransition];
        }
        function useId2() {
          var task = currentlyRenderingTask;
          var treeId = getTreeId(task.treeContext);
          var responseState = currentResponseState;
          if (responseState === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
          }
          var localId = localIdCounter++;
          return makeId(responseState, treeId, localId);
        }
        function noop() {
        }
        var Dispatcher = {
          readContext: readContext$1,
          useContext: useContext2,
          useMemo: useMemo2,
          useReducer: useReducer2,
          useRef: useRef2,
          useState: useState2,
          useInsertionEffect: noop,
          useLayoutEffect: useLayoutEffect2,
          useCallback: useCallback2,
          useImperativeHandle: noop,
          useEffect: noop,
          useDebugValue: noop,
          useDeferredValue: useDeferredValue2,
          useTransition: useTransition2,
          useId: useId2,
          useMutableSource,
          useSyncExternalStore: useSyncExternalStore2
        };
        var currentResponseState = null;
        function setCurrentResponseState(responseState) {
          currentResponseState = responseState;
        }
        function getStackByComponentStackNode(componentStack) {
          try {
            var info = "";
            var node = componentStack;
            do {
              switch (node.tag) {
                case 0:
                  info += describeBuiltInComponentFrame(node.type, null, null);
                  break;
                case 1:
                  info += describeFunctionComponentFrame(node.type, null, null);
                  break;
                case 2:
                  info += describeClassComponentFrame(node.type, null, null);
                  break;
              }
              node = node.parent;
            } while (node);
            return info;
          } catch (x2) {
            return "\nError generating stack: " + x2.message + "\n" + x2.stack;
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        var PENDING = 0;
        var COMPLETED = 1;
        var FLUSHED = 2;
        var ABORTED = 3;
        var ERRORED = 4;
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
        function defaultErrorHandler(error2) {
          console["error"](error2);
          return null;
        }
        function noop$1() {
        }
        function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
          var pingedTasks = [];
          var abortSet = /* @__PURE__ */ new Set();
          var request = {
            destination: null,
            responseState,
            progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
            status: OPEN,
            fatalError: null,
            nextSegmentId: 0,
            allPendingTasks: 0,
            pendingRootTasks: 0,
            completedRootSegment: null,
            abortableTasks: abortSet,
            pingedTasks,
            clientRenderedBoundaries: [],
            completedBoundaries: [],
            partialBoundaries: [],
            onError: onError === void 0 ? defaultErrorHandler : onError,
            onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
            onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
            onShellError: onShellError === void 0 ? noop$1 : onShellError,
            onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
          };
          var rootSegment = createPendingSegment(
            request,
            0,
            null,
            rootFormatContext,
            false,
            false
          );
          rootSegment.parentFlushed = true;
          var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
          pingedTasks.push(rootTask);
          return request;
        }
        function pingTask(request, task) {
          var pingedTasks = request.pingedTasks;
          pingedTasks.push(task);
          if (pingedTasks.length === 1) {
            scheduleWork(function() {
              return performWork(request);
            });
          }
        }
        function createSuspenseBoundary(request, fallbackAbortableTasks) {
          return {
            id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
            rootSegmentID: -1,
            parentFlushed: false,
            pendingTasks: 0,
            forceClientRender: false,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks,
            errorDigest: null
          };
        }
        function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
          request.allPendingTasks++;
          if (blockedBoundary === null) {
            request.pendingRootTasks++;
          } else {
            blockedBoundary.pendingTasks++;
          }
          var task = {
            node,
            ping: function() {
              return pingTask(request, task);
            },
            blockedBoundary,
            blockedSegment,
            abortSet,
            legacyContext,
            context,
            treeContext
          };
          {
            task.componentStack = null;
          }
          abortSet.add(task);
          return task;
        }
        function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
          return {
            status: PENDING,
            id: -1,
            index,
            parentFlushed: false,
            chunks: [],
            children: [],
            formatContext,
            boundary,
            lastPushedText,
            textEmbedded
          };
        }
        var currentTaskInDEV = null;
        function getCurrentStackInDEV() {
          {
            if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
              return "";
            }
            return getStackByComponentStackNode(currentTaskInDEV.componentStack);
          }
        }
        function pushBuiltInComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 0,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushFunctionComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 1,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushClassComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 2,
              parent: task.componentStack,
              type
            };
          }
        }
        function popComponentStackInDEV(task) {
          {
            if (task.componentStack === null) {
              error("Unexpectedly popped too many stack frames. This is a bug in React.");
            } else {
              task.componentStack = task.componentStack.parent;
            }
          }
        }
        var lastBoundaryErrorComponentStackDev = null;
        function captureBoundaryErrorDetailsDev(boundary, error2) {
          {
            var errorMessage;
            if (typeof error2 === "string") {
              errorMessage = error2;
            } else if (error2 && typeof error2.message === "string") {
              errorMessage = error2.message;
            } else {
              errorMessage = String(error2);
            }
            var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
            lastBoundaryErrorComponentStackDev = null;
            boundary.errorMessage = errorMessage;
            boundary.errorComponentStack = errorComponentStack;
          }
        }
        function logRecoverableError(request, error2) {
          var errorDigest = request.onError(error2);
          if (errorDigest != null && typeof errorDigest !== "string") {
            throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
          }
          return errorDigest;
        }
        function fatalError(request, error2) {
          var onShellError = request.onShellError;
          onShellError(error2);
          var onFatalError = request.onFatalError;
          onFatalError(error2);
          if (request.destination !== null) {
            request.status = CLOSED;
            closeWithError(request.destination, error2);
          } else {
            request.status = CLOSING;
            request.fatalError = error2;
          }
        }
        function renderSuspenseBoundary(request, task, props) {
          pushBuiltInComponentStackInDEV(task, "Suspense");
          var parentBoundary = task.blockedBoundary;
          var parentSegment = task.blockedSegment;
          var fallback = props.fallback;
          var content = props.children;
          var fallbackAbortSet = /* @__PURE__ */ new Set();
          var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
          var insertionIndex = parentSegment.chunks.length;
          var boundarySegment = createPendingSegment(
            request,
            insertionIndex,
            newBoundary,
            parentSegment.formatContext,
            false,
            false
          );
          parentSegment.children.push(boundarySegment);
          parentSegment.lastPushedText = false;
          var contentRootSegment = createPendingSegment(
            request,
            0,
            null,
            parentSegment.formatContext,
            false,
            false
          );
          contentRootSegment.parentFlushed = true;
          task.blockedBoundary = newBoundary;
          task.blockedSegment = contentRootSegment;
          try {
            renderNode(request, task, content);
            pushSegmentFinale(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
            contentRootSegment.status = COMPLETED;
            queueCompletedSegment(newBoundary, contentRootSegment);
            if (newBoundary.pendingTasks === 0) {
              popComponentStackInDEV(task);
              return;
            }
          } catch (error2) {
            contentRootSegment.status = ERRORED;
            newBoundary.forceClientRender = true;
            newBoundary.errorDigest = logRecoverableError(request, error2);
            {
              captureBoundaryErrorDetailsDev(newBoundary, error2);
            }
          } finally {
            task.blockedBoundary = parentBoundary;
            task.blockedSegment = parentSegment;
          }
          var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
          {
            suspendedFallbackTask.componentStack = task.componentStack;
          }
          request.pingedTasks.push(suspendedFallbackTask);
          popComponentStackInDEV(task);
        }
        function renderHostElement(request, task, type, props) {
          pushBuiltInComponentStackInDEV(task, type);
          var segment = task.blockedSegment;
          var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
          segment.lastPushedText = false;
          var prevContext = segment.formatContext;
          segment.formatContext = getChildFormatContext(prevContext, type, props);
          renderNode(request, task, children);
          segment.formatContext = prevContext;
          pushEndInstance(segment.chunks, type);
          segment.lastPushedText = false;
          popComponentStackInDEV(task);
        }
        function shouldConstruct$1(Component2) {
          return Component2.prototype && Component2.prototype.isReactComponent;
        }
        function renderWithHooks(request, task, Component2, props, secondArg) {
          var componentIdentity = {};
          prepareToUseHooks(task, componentIdentity);
          var result = Component2(props, secondArg);
          return finishHooks(Component2, props, result, secondArg);
        }
        function finishClassComponent(request, task, instance, Component2, props) {
          var nextChildren = instance.render();
          {
            if (instance.props !== props) {
              if (!didWarnAboutReassigningProps) {
                error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component2) || "a component");
              }
              didWarnAboutReassigningProps = true;
            }
          }
          {
            var childContextTypes = Component2.childContextTypes;
            if (childContextTypes !== null && childContextTypes !== void 0) {
              var previousContext = task.legacyContext;
              var mergedContext = processChildContext(instance, Component2, previousContext, childContextTypes);
              task.legacyContext = mergedContext;
              renderNodeDestructive(request, task, nextChildren);
              task.legacyContext = previousContext;
              return;
            }
          }
          renderNodeDestructive(request, task, nextChildren);
        }
        function renderClassComponent(request, task, Component2, props) {
          pushClassComponentStackInDEV(task, Component2);
          var maskedContext = getMaskedContext(Component2, task.legacyContext);
          var instance = constructClassInstance(Component2, props, maskedContext);
          mountClassInstance(instance, Component2, props, maskedContext);
          finishClassComponent(request, task, instance, Component2, props);
          popComponentStackInDEV(task);
        }
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutContextTypeOnFunctionComponent = {};
        var didWarnAboutGetDerivedStateOnFunctionComponent = {};
        var didWarnAboutReassigningProps = false;
        var didWarnAboutGenerators = false;
        var didWarnAboutMaps = false;
        var hasWarnedAboutUsingContextAsConsumer = false;
        function renderIndeterminateComponent(request, task, Component2, props) {
          var legacyContext;
          {
            legacyContext = getMaskedContext(Component2, task.legacyContext);
          }
          pushFunctionComponentStackInDEV(task, Component2);
          {
            if (Component2.prototype && typeof Component2.prototype.render === "function") {
              var componentName = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutBadClass[componentName]) {
                error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                didWarnAboutBadClass[componentName] = true;
              }
            }
          }
          var value = renderWithHooks(request, task, Component2, props, legacyContext);
          var hasId = checkDidRenderIdHook();
          {
            if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
              var _componentName = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                didWarnAboutModulePatternComponent[_componentName] = true;
              }
            }
          }
          if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
            {
              var _componentName2 = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName2]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                didWarnAboutModulePatternComponent[_componentName2] = true;
              }
            }
            mountClassInstance(value, Component2, props, legacyContext);
            finishClassComponent(request, task, value, Component2, props);
          } else {
            {
              validateFunctionComponentInDev(Component2);
            }
            if (hasId) {
              var prevTreeContext = task.treeContext;
              var totalChildren = 1;
              var index = 0;
              task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
              try {
                renderNodeDestructive(request, task, value);
              } finally {
                task.treeContext = prevTreeContext;
              }
            } else {
              renderNodeDestructive(request, task, value);
            }
          }
          popComponentStackInDEV(task);
        }
        function validateFunctionComponentInDev(Component2) {
          {
            if (Component2) {
              if (Component2.childContextTypes) {
                error("%s(...): childContextTypes cannot be defined on a function component.", Component2.displayName || Component2.name || "Component");
              }
            }
            if (typeof Component2.getDerivedStateFromProps === "function") {
              var _componentName3 = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
              }
            }
            if (typeof Component2.contextType === "object" && Component2.contextType !== null) {
              var _componentName4 = getComponentNameFromType(Component2) || "Unknown";
              if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                error("%s: Function components do not support contextType.", _componentName4);
                didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
              }
            }
          }
        }
        function resolveDefaultProps(Component2, baseProps) {
          if (Component2 && Component2.defaultProps) {
            var props = assign({}, baseProps);
            var defaultProps = Component2.defaultProps;
            for (var propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
            return props;
          }
          return baseProps;
        }
        function renderForwardRef(request, task, type, props, ref) {
          pushFunctionComponentStackInDEV(task, type.render);
          var children = renderWithHooks(request, task, type.render, props, ref);
          var hasId = checkDidRenderIdHook();
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, children);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, children);
          }
          popComponentStackInDEV(task);
        }
        function renderMemo(request, task, type, props, ref) {
          var innerType = type.type;
          var resolvedProps = resolveDefaultProps(innerType, props);
          renderElement(request, task, innerType, resolvedProps, ref);
        }
        function renderContextConsumer(request, task, context, props) {
          {
            if (context._context === void 0) {
              if (context !== context.Consumer) {
                if (!hasWarnedAboutUsingContextAsConsumer) {
                  hasWarnedAboutUsingContextAsConsumer = true;
                  error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                }
              }
            } else {
              context = context._context;
            }
          }
          var render = props.children;
          {
            if (typeof render !== "function") {
              error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
            }
          }
          var newValue = readContext(context);
          var newChildren = render(newValue);
          renderNodeDestructive(request, task, newChildren);
        }
        function renderContextProvider(request, task, type, props) {
          var context = type._context;
          var value = props.value;
          var children = props.children;
          var prevSnapshot;
          {
            prevSnapshot = task.context;
          }
          task.context = pushProvider(context, value);
          renderNodeDestructive(request, task, children);
          task.context = popProvider(context);
          {
            if (prevSnapshot !== task.context) {
              error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
            }
          }
        }
        function renderLazyComponent(request, task, lazyComponent, props, ref) {
          pushBuiltInComponentStackInDEV(task, "Lazy");
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;
          var Component2 = init(payload);
          var resolvedProps = resolveDefaultProps(Component2, props);
          renderElement(request, task, Component2, resolvedProps, ref);
          popComponentStackInDEV(task);
        }
        function renderElement(request, task, type, props, ref) {
          if (typeof type === "function") {
            if (shouldConstruct$1(type)) {
              renderClassComponent(request, task, type, props);
              return;
            } else {
              renderIndeterminateComponent(request, task, type, props);
              return;
            }
          }
          if (typeof type === "string") {
            renderHostElement(request, task, type, props);
            return;
          }
          switch (type) {
            case REACT_LEGACY_HIDDEN_TYPE:
            case REACT_DEBUG_TRACING_MODE_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_FRAGMENT_TYPE: {
              renderNodeDestructive(request, task, props.children);
              return;
            }
            case REACT_SUSPENSE_LIST_TYPE: {
              pushBuiltInComponentStackInDEV(task, "SuspenseList");
              renderNodeDestructive(request, task, props.children);
              popComponentStackInDEV(task);
              return;
            }
            case REACT_SCOPE_TYPE: {
              throw new Error("ReactDOMServer does not yet support scope components.");
            }
            case REACT_SUSPENSE_TYPE: {
              {
                renderSuspenseBoundary(request, task, props);
              }
              return;
            }
          }
          if (typeof type === "object" && type !== null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE: {
                renderForwardRef(request, task, type, props, ref);
                return;
              }
              case REACT_MEMO_TYPE: {
                renderMemo(request, task, type, props, ref);
                return;
              }
              case REACT_PROVIDER_TYPE: {
                renderContextProvider(request, task, type, props);
                return;
              }
              case REACT_CONTEXT_TYPE: {
                renderContextConsumer(request, task, type, props);
                return;
              }
              case REACT_LAZY_TYPE: {
                renderLazyComponent(request, task, type, props);
                return;
              }
            }
          }
          var info = "";
          {
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
        }
        function validateIterable(iterable, iteratorFn) {
          {
            if (typeof Symbol === "function" && iterable[Symbol.toStringTag] === "Generator") {
              if (!didWarnAboutGenerators) {
                error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
              }
              didWarnAboutGenerators = true;
            }
            if (iterable.entries === iteratorFn) {
              if (!didWarnAboutMaps) {
                error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
              }
              didWarnAboutMaps = true;
            }
          }
        }
        function renderNodeDestructive(request, task, node) {
          {
            try {
              return renderNodeDestructiveImpl(request, task, node);
            } catch (x2) {
              if (typeof x2 === "object" && x2 !== null && typeof x2.then === "function")
                ;
              else {
                lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
              }
              throw x2;
            }
          }
        }
        function renderNodeDestructiveImpl(request, task, node) {
          task.node = node;
          if (typeof node === "object" && node !== null) {
            switch (node.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var element = node;
                var type = element.type;
                var props = element.props;
                var ref = element.ref;
                renderElement(request, task, type, props, ref);
                return;
              }
              case REACT_PORTAL_TYPE:
                throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
              case REACT_LAZY_TYPE: {
                var lazyNode = node;
                var payload = lazyNode._payload;
                var init = lazyNode._init;
                var resolvedNode;
                {
                  try {
                    resolvedNode = init(payload);
                  } catch (x2) {
                    if (typeof x2 === "object" && x2 !== null && typeof x2.then === "function") {
                      pushBuiltInComponentStackInDEV(task, "Lazy");
                    }
                    throw x2;
                  }
                }
                renderNodeDestructive(request, task, resolvedNode);
                return;
              }
            }
            if (isArray(node)) {
              renderChildrenArray(request, task, node);
              return;
            }
            var iteratorFn = getIteratorFn(node);
            if (iteratorFn) {
              {
                validateIterable(node, iteratorFn);
              }
              var iterator = iteratorFn.call(node);
              if (iterator) {
                var step = iterator.next();
                if (!step.done) {
                  var children = [];
                  do {
                    children.push(step.value);
                    step = iterator.next();
                  } while (!step.done);
                  renderChildrenArray(request, task, children);
                  return;
                }
                return;
              }
            }
            var childString = Object.prototype.toString.call(node);
            throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
          }
          if (typeof node === "string") {
            var segment = task.blockedSegment;
            segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
            return;
          }
          if (typeof node === "number") {
            var _segment = task.blockedSegment;
            _segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
            return;
          }
          {
            if (typeof node === "function") {
              error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
            }
          }
        }
        function renderChildrenArray(request, task, children) {
          var totalChildren = children.length;
          for (var i2 = 0; i2 < totalChildren; i2++) {
            var prevTreeContext = task.treeContext;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i2);
            try {
              renderNode(request, task, children[i2]);
            } finally {
              task.treeContext = prevTreeContext;
            }
          }
        }
        function spawnNewSuspendedTask(request, task, x2) {
          var segment = task.blockedSegment;
          var insertionIndex = segment.chunks.length;
          var newSegment = createPendingSegment(
            request,
            insertionIndex,
            null,
            segment.formatContext,
            segment.lastPushedText,
            true
          );
          segment.children.push(newSegment);
          segment.lastPushedText = false;
          var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
          {
            if (task.componentStack !== null) {
              newTask.componentStack = task.componentStack.parent;
            }
          }
          var ping = newTask.ping;
          x2.then(ping, ping);
        }
        function renderNode(request, task, node) {
          var previousFormatContext = task.blockedSegment.formatContext;
          var previousLegacyContext = task.legacyContext;
          var previousContext = task.context;
          var previousComponentStack = null;
          {
            previousComponentStack = task.componentStack;
          }
          try {
            return renderNodeDestructive(request, task, node);
          } catch (x2) {
            resetHooksState();
            if (typeof x2 === "object" && x2 !== null && typeof x2.then === "function") {
              spawnNewSuspendedTask(request, task, x2);
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              return;
            } else {
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              throw x2;
            }
          }
        }
        function erroredTask(request, boundary, segment, error2) {
          var errorDigest = logRecoverableError(request, error2);
          if (boundary === null) {
            fatalError(request, error2);
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              boundary.errorDigest = errorDigest;
              {
                captureBoundaryErrorDetailsDev(boundary, error2);
              }
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function abortTaskSoft(task) {
          var request = this;
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          finishedTask(request, boundary, segment);
        }
        function abortTask(task, request, reason) {
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          if (boundary === null) {
            request.allPendingTasks--;
            if (request.status !== CLOSED) {
              request.status = CLOSED;
              if (request.destination !== null) {
                close(request.destination);
              }
            }
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
              boundary.errorDigest = request.onError(_error);
              {
                var errorPrefix = "The server did not finish this Suspense boundary: ";
                if (_error && typeof _error.message === "string") {
                  _error = errorPrefix + _error.message;
                } else {
                  _error = errorPrefix + String(_error);
                }
                var previousTaskInDev = currentTaskInDEV;
                currentTaskInDEV = task;
                try {
                  captureBoundaryErrorDetailsDev(boundary, _error);
                } finally {
                  currentTaskInDEV = previousTaskInDev;
                }
              }
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
            boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
              return abortTask(fallbackTask, request, reason);
            });
            boundary.fallbackAbortableTasks.clear();
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
              var onAllReady = request.onAllReady;
              onAllReady();
            }
          }
        }
        function queueCompletedSegment(boundary, segment) {
          if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = true;
            if (childSegment.status === COMPLETED) {
              queueCompletedSegment(boundary, childSegment);
            }
          } else {
            var completedSegments = boundary.completedSegments;
            completedSegments.push(segment);
          }
        }
        function finishedTask(request, boundary, segment) {
          if (boundary === null) {
            if (segment.parentFlushed) {
              if (request.completedRootSegment !== null) {
                throw new Error("There can only be one root segment. This is a bug in React.");
              }
              request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            if (request.pendingRootTasks === 0) {
              request.onShellError = noop$1;
              var onShellReady = request.onShellReady;
              onShellReady();
            }
          } else {
            boundary.pendingTasks--;
            if (boundary.forceClientRender)
              ;
            else if (boundary.pendingTasks === 0) {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                }
              }
              if (boundary.parentFlushed) {
                request.completedBoundaries.push(boundary);
              }
              boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
              boundary.fallbackAbortableTasks.clear();
            } else {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                  var completedSegments = boundary.completedSegments;
                  if (completedSegments.length === 1) {
                    if (boundary.parentFlushed) {
                      request.partialBoundaries.push(boundary);
                    }
                  }
                }
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function retryTask(request, task) {
          var segment = task.blockedSegment;
          if (segment.status !== PENDING) {
            return;
          }
          switchContext(task.context);
          var prevTaskInDEV = null;
          {
            prevTaskInDEV = currentTaskInDEV;
            currentTaskInDEV = task;
          }
          try {
            renderNodeDestructive(request, task, task.node);
            pushSegmentFinale(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
            task.abortSet.delete(task);
            segment.status = COMPLETED;
            finishedTask(request, task.blockedBoundary, segment);
          } catch (x2) {
            resetHooksState();
            if (typeof x2 === "object" && x2 !== null && typeof x2.then === "function") {
              var ping = task.ping;
              x2.then(ping, ping);
            } else {
              task.abortSet.delete(task);
              segment.status = ERRORED;
              erroredTask(request, task.blockedBoundary, segment, x2);
            }
          } finally {
            {
              currentTaskInDEV = prevTaskInDEV;
            }
          }
        }
        function performWork(request) {
          if (request.status === CLOSED) {
            return;
          }
          var prevContext = getActiveContext();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = Dispatcher;
          var prevGetCurrentStackImpl;
          {
            prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
            ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
          }
          var prevResponseState = currentResponseState;
          setCurrentResponseState(request.responseState);
          try {
            var pingedTasks = request.pingedTasks;
            var i2;
            for (i2 = 0; i2 < pingedTasks.length; i2++) {
              var task = pingedTasks[i2];
              retryTask(request, task);
            }
            pingedTasks.splice(0, i2);
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          } finally {
            setCurrentResponseState(prevResponseState);
            ReactCurrentDispatcher$1.current = prevDispatcher;
            {
              ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
            }
            if (prevDispatcher === Dispatcher) {
              switchContext(prevContext);
            }
          }
        }
        function flushSubtree(request, destination, segment) {
          segment.parentFlushed = true;
          switch (segment.status) {
            case PENDING: {
              var segmentID = segment.id = request.nextSegmentId++;
              segment.lastPushedText = false;
              segment.textEmbedded = false;
              return writePlaceholder(destination, request.responseState, segmentID);
            }
            case COMPLETED: {
              segment.status = FLUSHED;
              var r2 = true;
              var chunks = segment.chunks;
              var chunkIdx = 0;
              var children = segment.children;
              for (var childIdx = 0; childIdx < children.length; childIdx++) {
                var nextChild = children[childIdx];
                for (; chunkIdx < nextChild.index; chunkIdx++) {
                  writeChunk(destination, chunks[chunkIdx]);
                }
                r2 = flushSegment(request, destination, nextChild);
              }
              for (; chunkIdx < chunks.length - 1; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              if (chunkIdx < chunks.length) {
                r2 = writeChunkAndReturn(destination, chunks[chunkIdx]);
              }
              return r2;
            }
            default: {
              throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
            }
          }
        }
        function flushSegment(request, destination, segment) {
          var boundary = segment.boundary;
          if (boundary === null) {
            return flushSubtree(request, destination, segment);
          }
          boundary.parentFlushed = true;
          if (boundary.forceClientRender) {
            writeStartClientRenderedSuspenseBoundary(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
            flushSubtree(request, destination, segment);
            return writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
          } else if (boundary.pendingTasks > 0) {
            boundary.rootSegmentID = request.nextSegmentId++;
            if (boundary.completedSegments.length > 0) {
              request.partialBoundaries.push(boundary);
            }
            var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
            writeStartPendingSuspenseBoundary(destination, request.responseState, id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else if (boundary.byteSize > request.progressiveChunkSize) {
            boundary.rootSegmentID = request.nextSegmentId++;
            request.completedBoundaries.push(boundary);
            writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else {
            writeStartCompletedSuspenseBoundary(destination, request.responseState);
            var completedSegments = boundary.completedSegments;
            if (completedSegments.length !== 1) {
              throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
            }
            var contentSegment = completedSegments[0];
            flushSegment(request, destination, contentSegment);
            return writeEndCompletedSuspenseBoundary(destination, request.responseState);
          }
        }
        function flushClientRenderedBoundary(request, destination, boundary) {
          return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
        }
        function flushSegmentContainer(request, destination, segment) {
          writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
          flushSegment(request, destination, segment);
          return writeEndSegment(destination, segment.formatContext);
        }
        function flushCompletedBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i2 = 0;
          for (; i2 < completedSegments.length; i2++) {
            var segment = completedSegments[i2];
            flushPartiallyCompletedSegment(request, destination, boundary, segment);
          }
          completedSegments.length = 0;
          return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
        }
        function flushPartialBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i2 = 0;
          for (; i2 < completedSegments.length; i2++) {
            var segment = completedSegments[i2];
            if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
              i2++;
              completedSegments.splice(0, i2);
              return false;
            }
          }
          completedSegments.splice(0, i2);
          return true;
        }
        function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
          if (segment.status === FLUSHED) {
            return true;
          }
          var segmentID = segment.id;
          if (segmentID === -1) {
            var rootSegmentID = segment.id = boundary.rootSegmentID;
            if (rootSegmentID === -1) {
              throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
            }
            return flushSegmentContainer(request, destination, segment);
          } else {
            flushSegmentContainer(request, destination, segment);
            return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
          }
        }
        function flushCompletedQueues(request, destination) {
          beginWriting();
          try {
            var completedRootSegment = request.completedRootSegment;
            if (completedRootSegment !== null && request.pendingRootTasks === 0) {
              flushSegment(request, destination, completedRootSegment);
              request.completedRootSegment = null;
              writeCompletedRoot(destination, request.responseState);
            }
            var clientRenderedBoundaries = request.clientRenderedBoundaries;
            var i2;
            for (i2 = 0; i2 < clientRenderedBoundaries.length; i2++) {
              var boundary = clientRenderedBoundaries[i2];
              if (!flushClientRenderedBoundary(request, destination, boundary)) {
                request.destination = null;
                i2++;
                clientRenderedBoundaries.splice(0, i2);
                return;
              }
            }
            clientRenderedBoundaries.splice(0, i2);
            var completedBoundaries = request.completedBoundaries;
            for (i2 = 0; i2 < completedBoundaries.length; i2++) {
              var _boundary = completedBoundaries[i2];
              if (!flushCompletedBoundary(request, destination, _boundary)) {
                request.destination = null;
                i2++;
                completedBoundaries.splice(0, i2);
                return;
              }
            }
            completedBoundaries.splice(0, i2);
            completeWriting(destination);
            beginWriting(destination);
            var partialBoundaries = request.partialBoundaries;
            for (i2 = 0; i2 < partialBoundaries.length; i2++) {
              var _boundary2 = partialBoundaries[i2];
              if (!flushPartialBoundary(request, destination, _boundary2)) {
                request.destination = null;
                i2++;
                partialBoundaries.splice(0, i2);
                return;
              }
            }
            partialBoundaries.splice(0, i2);
            var largeBoundaries = request.completedBoundaries;
            for (i2 = 0; i2 < largeBoundaries.length; i2++) {
              var _boundary3 = largeBoundaries[i2];
              if (!flushCompletedBoundary(request, destination, _boundary3)) {
                request.destination = null;
                i2++;
                largeBoundaries.splice(0, i2);
                return;
              }
            }
            largeBoundaries.splice(0, i2);
          } finally {
            completeWriting(destination);
            if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
              {
                if (request.abortableTasks.size !== 0) {
                  error("There was still abortable task at the root when we closed. This is a bug in React.");
                }
              }
              close(destination);
            }
          }
        }
        function startWork(request) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
        function startFlowing(request, destination) {
          if (request.status === CLOSING) {
            request.status = CLOSED;
            closeWithError(destination, request.fatalError);
            return;
          }
          if (request.status === CLOSED) {
            return;
          }
          if (request.destination !== null) {
            return;
          }
          request.destination = destination;
          try {
            flushCompletedQueues(request, destination);
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function abort(request, reason) {
          try {
            var abortableTasks = request.abortableTasks;
            abortableTasks.forEach(function(task) {
              return abortTask(task, request, reason);
            });
            abortableTasks.clear();
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function renderToReadableStream2(children, options) {
          return new Promise(function(resolve, reject) {
            var onFatalError;
            var onAllReady;
            var allReady = new Promise(function(res, rej) {
              onAllReady = res;
              onFatalError = rej;
            });
            function onShellReady() {
              var stream = new ReadableStream(
                {
                  type: "bytes",
                  pull: function(controller) {
                    startFlowing(request, controller);
                  },
                  cancel: function(reason) {
                    abort(request);
                  }
                },
                {
                  highWaterMark: 0
                }
              );
              stream.allReady = allReady;
              resolve(stream);
            }
            function onShellError(error2) {
              allReady.catch(function() {
              });
              reject(error2);
            }
            var request = createRequest(children, createResponseState(options ? options.identifierPrefix : void 0, options ? options.nonce : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, onAllReady, onShellReady, onShellError, onFatalError);
            if (options && options.signal) {
              var signal = options.signal;
              var listener = function() {
                abort(request, signal.reason);
                signal.removeEventListener("abort", listener);
              };
              signal.addEventListener("abort", listener);
            }
            startWork(request);
          });
        }
        exports.renderToReadableStream = renderToReadableStream2;
        exports.version = ReactVersion;
      })();
    }
  }
});
var require_server_browser = __commonJS2({
  "esm-build-0303abb25fcb426f29cf2c89bdb3c18934571244-68859692/node_modules/react-dom/server.browser.js"(exports) {
    "use strict";
    var l;
    var s2;
    if (false) {
      l = null;
      s2 = null;
    } else {
      l = require_react_dom_server_legacy_browser_development();
      s2 = require_react_dom_server_browser_development();
    }
    exports.version = l.version;
    exports.renderToString = l.renderToString;
    exports.renderToStaticMarkup = l.renderToStaticMarkup;
    exports.renderToNodeStream = l.renderToNodeStream;
    exports.renderToStaticNodeStream = l.renderToStaticNodeStream;
    exports.renderToReadableStream = s2.renderToReadableStream;
  }
});
var __module2 = __toESM2(require_server_browser());
var { version: version2, renderToString, renderToStaticMarkup, renderToNodeStream, renderToStaticNodeStream, renderToReadableStream } = __module2;
var { default: __default2, ...__rest2 } = __module2;

// deno:https://esm.sh/v99/@babel/runtime@7.20.1/X-ZC9yZWFjdEAxOC4yLjA/deno/helpers/esm/extends.js
var s = Object.defineProperty;
var u = (e, t) => {
  for (var n in t)
    s(e, n, { get: t[n], enumerable: true });
};
var f = {};
u(f, { default: () => r });
function r() {
  return r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, r.apply(this, arguments);
}
var { default: o, ...d } = f;
var i = o !== void 0 ? o : d;

// deno:https://esm.sh/v99/history@5.3.0/X-ZC9yZWFjdEAxOC4yLjA/deno/history.js
var b;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(b || (b = {}));
var R2 = function(e) {
  return e;
};
var M2 = "beforeunload";
var Y = "popstate";
function K(e) {
  e === void 0 && (e = {});
  var y2 = e, s2 = y2.window, i2 = s2 === void 0 ? document.defaultView : s2, h2 = i2.history;
  function f2() {
    var r2 = i2.location, n = r2.pathname, t = r2.search, c = r2.hash, l = h2.state || {};
    return [l.idx, R2({ pathname: n, search: t, hash: c, state: l.usr || null, key: l.key || "default" })];
  }
  var u2 = null;
  function L3() {
    if (u2)
      v2.call(u2), u2 = null;
    else {
      var r2 = b.Pop, n = f2(), t = n[0], c = n[1];
      if (v2.length) {
        if (t != null) {
          var l = p - t;
          l && (u2 = { action: r2, location: c, retry: function() {
            d3(l * -1);
          } }, d3(l));
        }
      } else
        T3(r2);
    }
  }
  i2.addEventListener(Y, L3);
  var x2 = b.Pop, O2 = f2(), p = O2[0], k3 = O2[1], _2 = $2(), v2 = $2();
  p == null && (p = 0, h2.replaceState(i({}, h2.state, { idx: p }), ""));
  function A2(r2) {
    return typeof r2 == "string" ? r2 : D2(r2);
  }
  function S3(r2, n) {
    return n === void 0 && (n = null), R2(i({ pathname: k3.pathname, hash: "", search: "" }, typeof r2 == "string" ? J2(r2) : r2, { state: n, key: j() }));
  }
  function H2(r2, n) {
    return [{ usr: r2.state, key: r2.key, idx: n }, A2(r2)];
  }
  function E(r2, n, t) {
    return !v2.length || (v2.call({ action: r2, location: n, retry: t }), false);
  }
  function T3(r2) {
    x2 = r2;
    var n = f2();
    p = n[0], k3 = n[1], _2.call({ action: x2, location: k3 });
  }
  function a(r2, n) {
    var t = b.Push, c = S3(r2, n);
    function l() {
      a(r2, n);
    }
    if (E(t, c, l)) {
      var w2 = H2(c, p + 1), m2 = w2[0], P = w2[1];
      try {
        h2.pushState(m2, "", P);
      } catch {
        i2.location.assign(P);
      }
      T3(t);
    }
  }
  function o2(r2, n) {
    var t = b.Replace, c = S3(r2, n);
    function l() {
      o2(r2, n);
    }
    if (E(t, c, l)) {
      var w2 = H2(c, p), m2 = w2[0], P = w2[1];
      h2.replaceState(m2, "", P), T3(t);
    }
  }
  function d3(r2) {
    h2.go(r2);
  }
  var g = { get action() {
    return x2;
  }, get location() {
    return k3;
  }, createHref: A2, push: a, replace: o2, go: d3, back: function() {
    d3(-1);
  }, forward: function() {
    d3(1);
  }, listen: function(n) {
    return _2.push(n);
  }, block: function(n) {
    var t = v2.push(n);
    return v2.length === 1 && i2.addEventListener(M2, B3), function() {
      t(), v2.length || i2.removeEventListener(M2, B3);
    };
  } };
  return g;
}
function B3(e) {
  e.preventDefault(), e.returnValue = "";
}
function $2() {
  var e = [];
  return { get length() {
    return e.length;
  }, push: function(s2) {
    return e.push(s2), function() {
      e = e.filter(function(i2) {
        return i2 !== s2;
      });
    };
  }, call: function(s2) {
    e.forEach(function(i2) {
      return i2 && i2(s2);
    });
  } };
}
function j() {
  return Math.random().toString(36).substr(2, 8);
}
function D2(e) {
  var y2 = e.pathname, s2 = y2 === void 0 ? "/" : y2, i2 = e.search, h2 = i2 === void 0 ? "" : i2, f2 = e.hash, u2 = f2 === void 0 ? "" : f2;
  return h2 && h2 !== "?" && (s2 += h2.charAt(0) === "?" ? h2 : "?" + h2), u2 && u2 !== "#" && (s2 += u2.charAt(0) === "#" ? u2 : "#" + u2), s2;
}
function J2(e) {
  var y2 = {};
  if (e) {
    var s2 = e.indexOf("#");
    s2 >= 0 && (y2.hash = e.substr(s2), e = e.substr(0, s2));
    var i2 = e.indexOf("?");
    i2 >= 0 && (y2.search = e.substr(i2), e = e.substr(0, i2)), e && (y2.pathname = e);
  }
  return y2;
}

// deno:https://esm.sh/v99/react-router@6.3.0/X-ZC9yZWFjdEAxOC4yLjA/deno/react-router.js
var _ = Ee(null);
var w = Ee(null);
var y = Ee({ outlet: null, matches: [] });
function h(e, t) {
  if (!e)
    throw new Error(t);
}
function k2(e, t, n) {
  n === void 0 && (n = "/");
  let a = typeof t == "string" ? J2(t) : t, o2 = L2(a.pathname || "/", n);
  if (o2 == null)
    return null;
  let s2 = W(e);
  G(s2);
  let r2 = null;
  for (let i2 = 0; r2 == null && i2 < s2.length; ++i2)
    r2 = ae2(s2[i2], o2);
  return r2;
}
function W(e, t, n, a) {
  return t === void 0 && (t = []), n === void 0 && (n = []), a === void 0 && (a = ""), e.forEach((o2, s2) => {
    let r2 = { relativePath: o2.path || "", caseSensitive: o2.caseSensitive === true, childrenIndex: s2, route: o2 };
    r2.relativePath.startsWith("/") && (r2.relativePath.startsWith(a) || h(false), r2.relativePath = r2.relativePath.slice(a.length));
    let i2 = m([a, r2.relativePath]), l = n.concat(r2);
    o2.children && o2.children.length > 0 && (o2.index === true && h(false), W(o2.children, t, l, i2)), !(o2.path == null && !o2.index) && t.push({ path: i2, score: te2(i2, o2.index), routesMeta: l });
  }), t;
}
function G(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : ne2(t.routesMeta.map((a) => a.childrenIndex), n.routesMeta.map((a) => a.childrenIndex)));
}
var q2 = /^:\w+$/;
var K2 = 3;
var Q2 = 2;
var X2 = 1;
var Z2 = 10;
var ee2 = -2;
var S2 = (e) => e === "*";
function te2(e, t) {
  let n = e.split("/"), a = n.length;
  return n.some(S2) && (a += ee2), t && (a += Q2), n.filter((o2) => !S2(o2)).reduce((o2, s2) => o2 + (q2.test(s2) ? K2 : s2 === "" ? X2 : Z2), a);
}
function ne2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, o2) => a === t[o2]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function ae2(e, t) {
  let { routesMeta: n } = e, a = {}, o2 = "/", s2 = [];
  for (let r2 = 0; r2 < n.length; ++r2) {
    let i2 = n[r2], l = r2 === n.length - 1, c = o2 === "/" ? t : t.slice(o2.length) || "/", u2 = B4({ path: i2.relativePath, caseSensitive: i2.caseSensitive, end: l }, c);
    if (!u2)
      return null;
    Object.assign(a, u2.params);
    let f2 = i2.route;
    s2.push({ params: a, pathname: m([o2, u2.pathname]), pathnameBase: T(m([o2, u2.pathnameBase])), route: f2 }), u2.pathnameBase !== "/" && (o2 = m([o2, u2.pathnameBase]));
  }
  return s2;
}
function B4(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: false, end: true });
  let [n, a] = oe2(e.path, e.caseSensitive, e.end), o2 = t.match(n);
  if (!o2)
    return null;
  let s2 = o2[0], r2 = s2.replace(/(.)\/+$/, "$1"), i2 = o2.slice(1);
  return { params: a.reduce((c, u2, f2) => {
    if (u2 === "*") {
      let g = i2[f2] || "";
      r2 = s2.slice(0, s2.length - g.length).replace(/(.)\/+$/, "$1");
    }
    return c[u2] = re(i2[f2] || "", u2), c;
  }, {}), pathname: s2, pathnameBase: r2, pattern: e };
}
function oe2(e, t, n) {
  t === void 0 && (t = false), n === void 0 && (n = true);
  let a = [], o2 = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (r2, i2) => (a.push(i2), "([^\\/]+)"));
  return e.endsWith("*") ? (a.push("*"), o2 += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o2 += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)", [new RegExp(o2, t ? void 0 : "i"), a];
}
function re(e, t) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function ie(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: a = "", hash: o2 = "" } = typeof e == "string" ? J2(e) : e;
  return { pathname: n ? n.startsWith("/") ? n : se2(n, t) : t, search: ue(a), hash: ce3(o2) };
}
function se2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o2) => {
    o2 === ".." ? n.length > 1 && n.pop() : o2 !== "." && n.push(o2);
  }), n.length > 1 ? n.join("/") : "/";
}
function $3(e, t, n) {
  let a = typeof e == "string" ? J2(e) : e, o2 = e === "" || a.pathname === "" ? "/" : a.pathname, s2;
  if (o2 == null)
    s2 = n;
  else {
    let i2 = t.length - 1;
    if (o2.startsWith("..")) {
      let l = o2.split("/");
      for (; l[0] === ".."; )
        l.shift(), i2 -= 1;
      a.pathname = l.join("/");
    }
    s2 = i2 >= 0 ? t[i2] : "/";
  }
  let r2 = ie(a, s2);
  return o2 && o2 !== "/" && o2.endsWith("/") && !r2.pathname.endsWith("/") && (r2.pathname += "/"), r2;
}
function le2(e) {
  return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? J2(e).pathname : e.pathname;
}
function L2(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = e.charAt(t.length);
  return n && n !== "/" ? null : e.slice(t.length) || "/";
}
var m = (e) => e.join("/").replace(/\/\/+/g, "/");
var T = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
var ue = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e;
var ce3 = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Ee3(e) {
  v() || h(false);
  let { basename: t, navigator: n } = ge(_), { hash: a, pathname: o2, search: s2 } = de3(e), r2 = o2;
  if (t !== "/") {
    let i2 = le2(e), l = i2 != null && i2.endsWith("/");
    r2 = o2 === "/" ? t + (l ? "/" : "") : m([t, o2]);
  }
  return n.createHref({ pathname: r2, search: s2, hash: a });
}
function v() {
  return ge(w) != null;
}
function O() {
  return v() || h(false), ge(w).location;
}
function he3() {
  v() || h(false);
  let { basename: e, navigator: t } = ge(_), { matches: n } = ge(y), { pathname: a } = O(), o2 = JSON.stringify(n.map((i2) => i2.pathnameBase)), s2 = Ae(false);
  return De(() => {
    s2.current = true;
  }), Ie(function(i2, l) {
    if (l === void 0 && (l = {}), !s2.current)
      return;
    if (typeof i2 == "number") {
      t.go(i2);
      return;
    }
    let c = $3(i2, JSON.parse(o2), a);
    e !== "/" && (c.pathname = m([e, c.pathname])), (l.replace ? t.replace : t.push)(c, l.state);
  }, [e, t, o2, a]);
}
var M3 = Ee(null);
function we3() {
  let { matches: e } = ge(y), t = e[e.length - 1];
  return t ? t.params : {};
}
function de3(e) {
  let { matches: t } = ge(y), { pathname: n } = O(), a = JSON.stringify(t.map((o2) => o2.pathnameBase));
  return Ue(() => $3(e, JSON.parse(a), n), [e, a, n]);
}
function fe2(e, t) {
  v() || h(false);
  let { matches: n } = ge(y), a = n[n.length - 1], o2 = a ? a.params : {}, s2 = a ? a.pathname : "/", r2 = a ? a.pathnameBase : "/", i2 = a && a.route, l = O(), c;
  if (t) {
    var u2;
    let p = typeof t == "string" ? J2(t) : t;
    r2 === "/" || ((u2 = p.pathname) == null ? void 0 : u2.startsWith(r2)) || h(false), c = p;
  } else
    c = l;
  let f2 = c.pathname || "/", g = r2 === "/" ? f2 : f2.slice(r2.length) || "/", E = k2(e, { pathname: g });
  return I(E && E.map((p) => Object.assign({}, p, { params: Object.assign({}, o2, p.params), pathname: m([r2, p.pathname]), pathnameBase: p.pathnameBase === "/" ? r2 : m([r2, p.pathnameBase]) })), n);
}
function I(e, t) {
  return t === void 0 && (t = []), e == null ? null : e.reduceRight((n, a, o2) => Re(y.Provider, { children: a.route.element !== void 0 ? a.route.element : n, value: { outlet: n, matches: t.concat(e.slice(0, o2 + 1)) } }), null);
}
function be3(e) {
  let { to: t, replace: n, state: a } = e;
  v() || h(false);
  let o2 = he3();
  return De(() => {
    o2(t, { replace: n, state: a });
  }), null;
}
function me3(e) {
  h(false);
}
function ve3(e) {
  let { basename: t = "/", children: n = null, location: a, navigationType: o2 = b.Pop, navigator: s2, static: r2 = false } = e;
  v() && h(false);
  let i2 = T(t), l = Ue(() => ({ basename: i2, navigator: s2, static: r2 }), [i2, s2, r2]);
  typeof a == "string" && (a = J2(a));
  let { pathname: c = "/", search: u2 = "", hash: f2 = "", state: g = null, key: E = "default" } = a, p = Ue(() => {
    let V2 = L2(c, i2);
    return V2 == null ? null : { pathname: V2, search: u2, hash: f2, state: g, key: E };
  }, [i2, c, u2, f2, g, E]);
  return p == null ? null : Re(_.Provider, { value: l }, Re(w.Provider, { children: n, value: { location: p, navigationType: o2 } }));
}
function Ve2(e) {
  let { children: t, location: n } = e;
  return fe2(b2(t), n);
}
function b2(e) {
  let t = [];
  return ae.forEach(e, (n) => {
    if (!be(n))
      return;
    if (n.type === ye) {
      t.push.apply(t, b2(n.props.children));
      return;
    }
    n.type !== me3 && h(false);
    let a = { caseSensitive: n.props.caseSensitive, element: n.props.element, index: n.props.index, path: n.props.path };
    n.props.children && (a.children = b2(n.props.children)), t.push(a);
  }), t;
}

// deno:https://esm.sh/v99/react-router-dom@6.3.0/X-ZC9yZWFjdEAxOC4yLjA/deno/react-router-dom.js
function d2() {
  return d2 = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r2 = arguments[n];
      for (var t in r2)
        Object.prototype.hasOwnProperty.call(r2, t) && (e[t] = r2[t]);
    }
    return e;
  }, d2.apply(this, arguments);
}
function x(e, n) {
  if (e == null)
    return {};
  var r2 = {}, t = Object.keys(e), o2, a;
  for (a = 0; a < t.length; a++)
    o2 = t[a], !(n.indexOf(o2) >= 0) && (r2[o2] = e[o2]);
  return r2;
}
var I2 = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
var K3 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function Y2(e) {
  let { basename: n, children: r2, window: t } = e, o2 = Ae();
  o2.current == null && (o2.current = K({ window: t }));
  let a = o2.current, [i2, s2] = Me({ action: a.action, location: a.location });
  return Fe(() => a.listen(s2), [a]), Re(ve3, { basename: n, children: r2, location: i2.location, navigationType: i2.action, navigator: a });
}
function M4(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var T2 = we(function(n, r2) {
  let { onClick: t, reloadDocument: o2, replace: a = false, state: i2, target: s2, to: l } = n, u2 = x(n, I2), m2 = Ee3(l), y2 = F3(l, { replace: a, state: i2, target: s2 });
  function v2(c) {
    t && t(c), !c.defaultPrevented && !o2 && y2(c);
  }
  return Re("a", d2({}, u2, { href: m2, onClick: v2, ref: r2, target: s2 }));
});
var G2 = we(function(n, r2) {
  let { "aria-current": t = "page", caseSensitive: o2 = false, className: a = "", end: i2 = false, style: s2, to: l, children: u2 } = n, m2 = x(n, K3), y2 = O(), v2 = de3(l), c = y2.pathname, f2 = v2.pathname;
  o2 || (c = c.toLowerCase(), f2 = f2.toLowerCase());
  let h2 = c === f2 || !i2 && c.startsWith(f2) && c.charAt(f2.length) === "/", A2 = h2 ? t : void 0, g;
  typeof a == "function" ? g = a({ isActive: h2 }) : g = [a, h2 ? "active" : null].filter(Boolean).join(" ");
  let H2 = typeof s2 == "function" ? s2({ isActive: h2 }) : s2;
  return Re(T2, d2({}, m2, { "aria-current": A2, className: g, ref: r2, style: H2, to: l }), typeof u2 == "function" ? u2({ isActive: h2 }) : u2);
});
function F3(e, n) {
  let { target: r2, replace: t, state: o2 } = n === void 0 ? {} : n, a = he3(), i2 = O(), s2 = de3(e);
  return Ie((l) => {
    if (l.button === 0 && (!r2 || r2 === "_self") && !M4(l)) {
      l.preventDefault();
      let u2 = !!t || D2(i2) === D2(s2);
      a(e, { replace: u2, state: o2 });
    }
  }, [i2, a, s2, t, o2, r2, e]);
}

// deno:file:///home/aaron/react18-with-deno/src/components/NavBar.tsx
function NavBar() {
  return /* @__PURE__ */ react_18_exports.createElement("ul", null, /* @__PURE__ */ react_18_exports.createElement(T2, {
    to: "/"
  }, "Home"), " | ", /* @__PURE__ */ react_18_exports.createElement(T2, {
    to: "/getting-started"
  }, "Getting Started"), " |", " ", /* @__PURE__ */ react_18_exports.createElement(T2, {
    to: "/users/lambtron"
  }, "Dynamic Routes"));
}

// deno:file:///home/aaron/react18-with-deno/src/pages/HomePage.tsx
function HomePage() {
  return /* @__PURE__ */ react_18_exports.createElement("div", null, /* @__PURE__ */ react_18_exports.createElement("h1", null, "Deno x React"), /* @__PURE__ */ react_18_exports.createElement("p", null, "This is a starter React app running on", " ", /* @__PURE__ */ react_18_exports.createElement("a", {
    href: "https://deno.land/",
    target: "_blank"
  }, "Deno"), "."), /* @__PURE__ */ react_18_exports.createElement("h2", null, "Install"), /* @__PURE__ */ react_18_exports.createElement("p", null, "You can scaffold this sample app on your local machine with the following command:", /* @__PURE__ */ react_18_exports.createElement("pre", null, "$ deno run --allow-write --allow-net https://raw.githubusercontent.com/denoland/examples/main/init.ts with-react ./path/to/directory")), /* @__PURE__ */ react_18_exports.createElement("h2", null, "Other Resources"), /* @__PURE__ */ react_18_exports.createElement("ul", null, /* @__PURE__ */ react_18_exports.createElement("li", null, /* @__PURE__ */ react_18_exports.createElement("a", {
    href: "/getting-started",
    target: "_blank"
  }, "Quickstart Guide")), /* @__PURE__ */ react_18_exports.createElement("li", null, /* @__PURE__ */ react_18_exports.createElement("a", {
    href: "https://github.com/denoland/examples/tree/main/with-react",
    target: "_blank"
  }, "Source on GitHub"))));
}

// deno:file:///home/aaron/react18-with-deno/src/pages/GettingStartedPage.tsx
function GettingStartedPage() {
  return /* @__PURE__ */ react_18_exports.createElement("div", null, /* @__PURE__ */ react_18_exports.createElement("h1", null, "Getting Started"), /* @__PURE__ */ react_18_exports.createElement("p", null, "Getting started with React and Deno."));
}

// deno:file:///home/aaron/react18-with-deno/src/pages/UserPage.tsx
function UserPage() {
  const { username } = we3();
  return /* @__PURE__ */ react_18_exports.createElement("div", null, /* @__PURE__ */ react_18_exports.createElement("h1", null, "Hi, ", username, "!"), /* @__PURE__ */ react_18_exports.createElement("p", null, "This page grabs the `username` from the route `/users/:username`."), /* @__PURE__ */ react_18_exports.createElement("p", null, "Try updating the route with your own name!"));
}

// deno:file:///home/aaron/react18-with-deno/src/components/Footer.tsx
function Footer() {
  return /* @__PURE__ */ react_18_exports.createElement("div", null, /* @__PURE__ */ react_18_exports.createElement("hr", null), /* @__PURE__ */ react_18_exports.createElement("p", null, "This app is part of a larger set of", " ", /* @__PURE__ */ react_18_exports.createElement(T2, {
    to: "https://github.com/denoland/examples"
  }, "sample starter apps"), " ", "that can help you get started with Deno and Deno Deploy."), /* @__PURE__ */ react_18_exports.createElement("ul", null, /* @__PURE__ */ react_18_exports.createElement("a", {
    href: "https://deno.land",
    target: "_blank"
  }, "Deno"), " |", " ", /* @__PURE__ */ react_18_exports.createElement("a", {
    href: "https://deno.com/deploy",
    target: "_blank"
  }, "Deno Deploy"), " |", " ", /* @__PURE__ */ react_18_exports.createElement("a", {
    href: "https://github.com/denoland/examples",
    target: "_blank"
  }, "Example Starter Apps"), " ", "|", " ", /* @__PURE__ */ react_18_exports.createElement("a", {
    href: "https://github.com/denoland/examples/tree/main/with-react",
    target: "_blank"
  }, "View Source")));
}

// deno:file:///home/aaron/react18-with-deno/src/App.tsx
function App(props) {
  return /* @__PURE__ */ react_18_exports.createElement("div", null, /* @__PURE__ */ react_18_exports.createElement(NavBar, null), /* @__PURE__ */ react_18_exports.createElement(Ve2, null, /* @__PURE__ */ react_18_exports.createElement(me3, {
    exact: true,
    path: "/",
    element: /* @__PURE__ */ react_18_exports.createElement(HomePage, null)
  }), /* @__PURE__ */ react_18_exports.createElement(me3, {
    exact: true,
    path: "/getting-started",
    element: /* @__PURE__ */ react_18_exports.createElement(GettingStartedPage, null)
  }), /* @__PURE__ */ react_18_exports.createElement(me3, {
    path: "/users/:username",
    element: /* @__PURE__ */ react_18_exports.createElement(UserPage, null)
  }), /* @__PURE__ */ react_18_exports.createElement(me3, {
    path: "*",
    element: /* @__PURE__ */ react_18_exports.createElement(be3, {
      to: "/"
    })
  })), /* @__PURE__ */ react_18_exports.createElement(Footer, null));
}

// deno:file:///home/aaron/react18-with-deno/src/index.tsx
var root = react_dom_18_exports.createRoot(document.getElementById("app"));
root.render(
  /* @__PURE__ */ react_18_exports.createElement(Y2, null, /* @__PURE__ */ react_18_exports.createElement(App, null))
);
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
