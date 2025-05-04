(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  var __privateWrapper = (obj, member, setter, getter) => ({
    set _(value) {
      __privateSet(obj, member, value, setter);
    },
    get _() {
      return __privateGet(obj, member, getter);
    }
  });

  // node_modules/ms/index.js
  var require_ms = __commonJS({
    "node_modules/ms/index.js"(exports, module) {
      var s4 = 1e3;
      var m2 = s4 * 60;
      var h3 = m2 * 60;
      var d3 = h3 * 24;
      var w2 = d3 * 7;
      var y3 = d3 * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
        );
      };
      function parse(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          str
        );
        if (!match) {
          return;
        }
        var n5 = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n5 * y3;
          case "weeks":
          case "week":
          case "w":
            return n5 * w2;
          case "days":
          case "day":
          case "d":
            return n5 * d3;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n5 * h3;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n5 * m2;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n5 * s4;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n5;
          default:
            return void 0;
        }
      }
      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d3) {
          return Math.round(ms / d3) + "d";
        }
        if (msAbs >= h3) {
          return Math.round(ms / h3) + "h";
        }
        if (msAbs >= m2) {
          return Math.round(ms / m2) + "m";
        }
        if (msAbs >= s4) {
          return Math.round(ms / s4) + "s";
        }
        return ms + "ms";
      }
      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d3) {
          return plural(ms, msAbs, d3, "day");
        }
        if (msAbs >= h3) {
          return plural(ms, msAbs, h3, "hour");
        }
        if (msAbs >= m2) {
          return plural(ms, msAbs, m2, "minute");
        }
        if (msAbs >= s4) {
          return plural(ms, msAbs, s4, "second");
        }
        return ms + " ms";
      }
      function plural(ms, msAbs, n5, name) {
        var isPlural = msAbs >= n5 * 1.5;
        return Math.round(ms / n5) + " " + name + (isPlural ? "s" : "");
      }
    }
  });

  // node_modules/debug/src/common.js
  var require_common = __commonJS({
    "node_modules/debug/src/common.js"(exports, module) {
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = require_ms();
        createDebug.destroy = destroy;
        Object.keys(env).forEach((key) => {
          createDebug[key] = env[key];
        });
        createDebug.names = [];
        createDebug.skips = [];
        createDebug.formatters = {};
        function selectColor(namespace) {
          let hash2 = 0;
          for (let i5 = 0; i5 < namespace.length; i5++) {
            hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i5);
            hash2 |= 0;
          }
          return createDebug.colors[Math.abs(hash2) % createDebug.colors.length];
        }
        createDebug.selectColor = selectColor;
        function createDebug(namespace) {
          let prevTime;
          let enableOverride = null;
          let namespacesCache;
          let enabledCache;
          function debug3(...args) {
            if (!debug3.enabled) {
              return;
            }
            const self2 = debug3;
            const curr = Number(/* @__PURE__ */ new Date());
            const ms = curr - (prevTime || curr);
            self2.diff = ms;
            self2.prev = prevTime;
            self2.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
              args.unshift("%O");
            }
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
              if (match === "%%") {
                return "%";
              }
              index++;
              const formatter = createDebug.formatters[format];
              if (typeof formatter === "function") {
                const val = args[index];
                match = formatter.call(self2, val);
                args.splice(index, 1);
                index--;
              }
              return match;
            });
            createDebug.formatArgs.call(self2, args);
            const logFn = self2.log || createDebug.log;
            logFn.apply(self2, args);
          }
          debug3.namespace = namespace;
          debug3.useColors = createDebug.useColors();
          debug3.color = createDebug.selectColor(namespace);
          debug3.extend = extend;
          debug3.destroy = createDebug.destroy;
          Object.defineProperty(debug3, "enabled", {
            enumerable: true,
            configurable: false,
            get: () => {
              if (enableOverride !== null) {
                return enableOverride;
              }
              if (namespacesCache !== createDebug.namespaces) {
                namespacesCache = createDebug.namespaces;
                enabledCache = createDebug.enabled(namespace);
              }
              return enabledCache;
            },
            set: (v2) => {
              enableOverride = v2;
            }
          });
          if (typeof createDebug.init === "function") {
            createDebug.init(debug3);
          }
          return debug3;
        }
        function extend(namespace, delimiter) {
          const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.namespaces = namespaces;
          createDebug.names = [];
          createDebug.skips = [];
          const split3 = (typeof namespaces === "string" ? namespaces : "").trim().replace(" ", ",").split(",").filter(Boolean);
          for (const ns of split3) {
            if (ns[0] === "-") {
              createDebug.skips.push(ns.slice(1));
            } else {
              createDebug.names.push(ns);
            }
          }
        }
        function matchesTemplate(search, template) {
          let searchIndex = 0;
          let templateIndex = 0;
          let starIndex = -1;
          let matchIndex = 0;
          while (searchIndex < search.length) {
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
              if (template[templateIndex] === "*") {
                starIndex = templateIndex;
                matchIndex = searchIndex;
                templateIndex++;
              } else {
                searchIndex++;
                templateIndex++;
              }
            } else if (starIndex !== -1) {
              templateIndex = starIndex + 1;
              matchIndex++;
              searchIndex = matchIndex;
            } else {
              return false;
            }
          }
          while (templateIndex < template.length && template[templateIndex] === "*") {
            templateIndex++;
          }
          return templateIndex === template.length;
        }
        function disable() {
          const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace) => "-" + namespace)
          ].join(",");
          createDebug.enable("");
          return namespaces;
        }
        function enabled(name) {
          for (const skip of createDebug.skips) {
            if (matchesTemplate(name, skip)) {
              return false;
            }
          }
          for (const ns of createDebug.names) {
            if (matchesTemplate(name, ns)) {
              return true;
            }
          }
          return false;
        }
        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }
          return val;
        }
        function destroy() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        createDebug.enable(createDebug.load());
        return createDebug;
      }
      module.exports = setup;
    }
  });

  // node_modules/debug/src/browser.js
  var require_browser = __commonJS({
    "node_modules/debug/src/browser.js"(exports, module) {
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      exports.destroy = /* @__PURE__ */ (() => {
        let warned = false;
        return () => {
          if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      exports.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function useColors() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let m2;
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
        typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        typeof navigator !== "undefined" && navigator.userAgent && (m2 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m2[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
        typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function formatArgs(args) {
        args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const c4 = "color: " + this.color;
        args.splice(1, 0, c4, "color: inherit");
        let index = 0;
        let lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, (match) => {
          if (match === "%%") {
            return;
          }
          index++;
          if (match === "%c") {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c4);
      }
      exports.log = console.debug || console.log || (() => {
      });
      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem("debug", namespaces);
          } else {
            exports.storage.removeItem("debug");
          }
        } catch (error) {
        }
      }
      function load() {
        let r4;
        try {
          r4 = exports.storage.getItem("debug");
        } catch (error) {
        }
        if (!r4 && typeof process !== "undefined" && "env" in process) {
          r4 = process.env.DEBUG;
        }
        return r4;
      }
      function localstorage() {
        try {
          return localStorage;
        } catch (error) {
        }
      }
      module.exports = require_common()(exports);
      var { formatters } = module.exports;
      formatters.j = function(v2) {
        try {
          return JSON.stringify(v2);
        } catch (error) {
          return "[UnexpectedJSONParseError]: " + error.message;
        }
      };
    }
  });

  // node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS({
    "node_modules/eventemitter3/index.js"(exports, module) {
      "use strict";
      var has = Object.prototype.hasOwnProperty;
      var prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__) prefix = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
        else emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0) emitter._events = new Events();
        else delete emitter._events[evt];
      }
      function EventEmitter2() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter2.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0) return names;
        for (name in events = this._events) {
          if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter2.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers) return [];
        if (handlers.fn) return [handlers.fn];
        for (var i5 = 0, l3 = handlers.length, ee = new Array(l3); i5 < l3; i5++) {
          ee[i5] = handlers[i5].fn;
        }
        return ee;
      };
      EventEmitter2.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners) return 0;
        if (listeners.fn) return 1;
        return listeners.length;
      };
      EventEmitter2.prototype.emit = function emit2(event, a1, a22, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return false;
        var listeners = this._events[evt], len = arguments.length, args, i5;
        if (listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a22), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a22, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a22, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a22, a3, a4, a5), true;
          }
          for (i5 = 1, args = new Array(len - 1); i5 < len; i5++) {
            args[i5 - 1] = arguments[i5];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j2;
          for (i5 = 0; i5 < length; i5++) {
            if (listeners[i5].once) this.removeListener(event, listeners[i5].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i5].fn.call(listeners[i5].context);
                break;
              case 2:
                listeners[i5].fn.call(listeners[i5].context, a1);
                break;
              case 3:
                listeners[i5].fn.call(listeners[i5].context, a1, a22);
                break;
              case 4:
                listeners[i5].fn.call(listeners[i5].context, a1, a22, a3);
                break;
              default:
                if (!args) for (j2 = 1, args = new Array(len - 1); j2 < len; j2++) {
                  args[j2 - 1] = arguments[j2];
                }
                listeners[i5].fn.apply(listeners[i5].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter2.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter2.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i5 = 0, events = [], length = listeners.length; i5 < length; i5++) {
            if (listeners[i5].fn !== fn || once && !listeners[i5].once || context && listeners[i5].context !== context) {
              events.push(listeners[i5]);
            }
          }
          if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
          else clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt]) clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
      EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
      EventEmitter2.prefixed = prefix;
      EventEmitter2.EventEmitter = EventEmitter2;
      if ("undefined" !== typeof module) {
        module.exports = EventEmitter2;
      }
    }
  });

  // node_modules/json-rpc-2.0/dist/models.js
  var require_models = __commonJS({
    "node_modules/json-rpc-2.0/dist/models.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics = function(d3, b4) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b5) {
            d4.__proto__ = b5;
          } || function(d4, b5) {
            for (var p3 in b5) if (Object.prototype.hasOwnProperty.call(b5, p3)) d4[p3] = b5[p3];
          };
          return extendStatics(d3, b4);
        };
        return function(d3, b4) {
          if (typeof b4 !== "function" && b4 !== null)
            throw new TypeError("Class extends value " + String(b4) + " is not a constructor or null");
          extendStatics(d3, b4);
          function __() {
            this.constructor = d3;
          }
          d3.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createJSONRPCNotification = exports.createJSONRPCRequest = exports.createJSONRPCSuccessResponse = exports.createJSONRPCErrorResponse = exports.JSONRPCErrorCode = exports.JSONRPCErrorException = exports.isJSONRPCResponses = exports.isJSONRPCResponse = exports.isJSONRPCRequests = exports.isJSONRPCRequest = exports.isJSONRPCID = exports.JSONRPC = void 0;
      exports.JSONRPC = "2.0";
      var isJSONRPCID = function(id2) {
        return typeof id2 === "string" || typeof id2 === "number" || id2 === null;
      };
      exports.isJSONRPCID = isJSONRPCID;
      var isJSONRPCRequest = function(payload) {
        return payload.jsonrpc === exports.JSONRPC && payload.method !== void 0 && payload.result === void 0 && payload.error === void 0;
      };
      exports.isJSONRPCRequest = isJSONRPCRequest;
      var isJSONRPCRequests = function(payload) {
        return Array.isArray(payload) && payload.every(exports.isJSONRPCRequest);
      };
      exports.isJSONRPCRequests = isJSONRPCRequests;
      var isJSONRPCResponse = function(payload) {
        return payload.jsonrpc === exports.JSONRPC && payload.id !== void 0 && (payload.result !== void 0 || payload.error !== void 0);
      };
      exports.isJSONRPCResponse = isJSONRPCResponse;
      var isJSONRPCResponses = function(payload) {
        return Array.isArray(payload) && payload.every(exports.isJSONRPCResponse);
      };
      exports.isJSONRPCResponses = isJSONRPCResponses;
      var createJSONRPCError = function(code, message, data) {
        var error = { code, message };
        if (data != null) {
          error.data = data;
        }
        return error;
      };
      var JSONRPCErrorException = (
        /** @class */
        function(_super) {
          __extends(JSONRPCErrorException2, _super);
          function JSONRPCErrorException2(message, code, data) {
            var _this = _super.call(this, message) || this;
            Object.setPrototypeOf(_this, JSONRPCErrorException2.prototype);
            _this.code = code;
            _this.data = data;
            return _this;
          }
          JSONRPCErrorException2.prototype.toObject = function() {
            return createJSONRPCError(this.code, this.message, this.data);
          };
          return JSONRPCErrorException2;
        }(Error)
      );
      exports.JSONRPCErrorException = JSONRPCErrorException;
      var JSONRPCErrorCode;
      (function(JSONRPCErrorCode2) {
        JSONRPCErrorCode2[JSONRPCErrorCode2["ParseError"] = -32700] = "ParseError";
        JSONRPCErrorCode2[JSONRPCErrorCode2["InvalidRequest"] = -32600] = "InvalidRequest";
        JSONRPCErrorCode2[JSONRPCErrorCode2["MethodNotFound"] = -32601] = "MethodNotFound";
        JSONRPCErrorCode2[JSONRPCErrorCode2["InvalidParams"] = -32602] = "InvalidParams";
        JSONRPCErrorCode2[JSONRPCErrorCode2["InternalError"] = -32603] = "InternalError";
      })(JSONRPCErrorCode = exports.JSONRPCErrorCode || (exports.JSONRPCErrorCode = {}));
      var createJSONRPCErrorResponse = function(id2, code, message, data) {
        return {
          jsonrpc: exports.JSONRPC,
          id: id2,
          error: createJSONRPCError(code, message, data)
        };
      };
      exports.createJSONRPCErrorResponse = createJSONRPCErrorResponse;
      var createJSONRPCSuccessResponse = function(id2, result) {
        return {
          jsonrpc: exports.JSONRPC,
          id: id2,
          result: result !== null && result !== void 0 ? result : null
        };
      };
      exports.createJSONRPCSuccessResponse = createJSONRPCSuccessResponse;
      var createJSONRPCRequest = function(id2, method, params) {
        return {
          jsonrpc: exports.JSONRPC,
          id: id2,
          method,
          params
        };
      };
      exports.createJSONRPCRequest = createJSONRPCRequest;
      var createJSONRPCNotification = function(method, params) {
        return {
          jsonrpc: exports.JSONRPC,
          method,
          params
        };
      };
      exports.createJSONRPCNotification = createJSONRPCNotification;
    }
  });

  // node_modules/json-rpc-2.0/dist/internal.js
  var require_internal = __commonJS({
    "node_modules/json-rpc-2.0/dist/internal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DefaultErrorCode = void 0;
      exports.DefaultErrorCode = 0;
    }
  });

  // node_modules/json-rpc-2.0/dist/client.js
  var require_client = __commonJS({
    "node_modules/json-rpc-2.0/dist/client.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e4) {
              reject(e4);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e4) {
              reject(e4);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _2 = { label: 0, sent: function() {
          if (t3[0] & 1) throw t3[1];
          return t3[1];
        }, trys: [], ops: [] }, f3, y3, t3, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n5) {
          return function(v2) {
            return step([n5, v2]);
          };
        }
        function step(op) {
          if (f3) throw new TypeError("Generator is already executing.");
          while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2) try {
            if (f3 = 1, y3 && (t3 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t3 = y3["return"]) && t3.call(y3), 0) : y3.next) && !(t3 = t3.call(y3, op[1])).done) return t3;
            if (y3 = 0, t3) op = [op[0] & 2, t3.value];
            switch (op[0]) {
              case 0:
              case 1:
                t3 = op;
                break;
              case 4:
                _2.label++;
                return { value: op[1], done: false };
              case 5:
                _2.label++;
                y3 = op[1];
                op = [0];
                continue;
              case 7:
                op = _2.ops.pop();
                _2.trys.pop();
                continue;
              default:
                if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _2 = 0;
                  continue;
                }
                if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
                  _2.label = op[1];
                  break;
                }
                if (op[0] === 6 && _2.label < t3[1]) {
                  _2.label = t3[1];
                  t3 = op;
                  break;
                }
                if (t3 && _2.label < t3[2]) {
                  _2.label = t3[2];
                  _2.ops.push(op);
                  break;
                }
                if (t3[2]) _2.ops.pop();
                _2.trys.pop();
                continue;
            }
            op = body.call(thisArg, _2);
          } catch (e4) {
            op = [6, e4];
            y3 = 0;
          } finally {
            f3 = t3 = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.JSONRPCClient = void 0;
      var models_1 = require_models();
      var internal_1 = require_internal();
      var JSONRPCClient2 = (
        /** @class */
        function() {
          function JSONRPCClient3(_send, createID) {
            this._send = _send;
            this.createID = createID;
            this.idToResolveMap = /* @__PURE__ */ new Map();
            this.id = 0;
          }
          JSONRPCClient3.prototype._createID = function() {
            if (this.createID) {
              return this.createID();
            } else {
              return ++this.id;
            }
          };
          JSONRPCClient3.prototype.timeout = function(delay, overrideCreateJSONRPCErrorResponse) {
            var _this = this;
            if (overrideCreateJSONRPCErrorResponse === void 0) {
              overrideCreateJSONRPCErrorResponse = function(id2) {
                return (0, models_1.createJSONRPCErrorResponse)(id2, internal_1.DefaultErrorCode, "Request timeout");
              };
            }
            var timeoutRequest = function(ids, request) {
              var timeoutID = setTimeout(function() {
                ids.forEach(function(id2) {
                  var resolve = _this.idToResolveMap.get(id2);
                  if (resolve) {
                    _this.idToResolveMap.delete(id2);
                    resolve(overrideCreateJSONRPCErrorResponse(id2));
                  }
                });
              }, delay);
              return request().then(function(result) {
                clearTimeout(timeoutID);
                return result;
              }, function(error) {
                clearTimeout(timeoutID);
                return Promise.reject(error);
              });
            };
            var requestAdvanced = function(request, clientParams) {
              var ids = (!Array.isArray(request) ? [request] : request).map(function(request2) {
                return request2.id;
              }).filter(isDefinedAndNonNull);
              return timeoutRequest(ids, function() {
                return _this.requestAdvanced(request, clientParams);
              });
            };
            return {
              request: function(method, params, clientParams) {
                var id2 = _this._createID();
                return timeoutRequest([id2], function() {
                  return _this.requestWithID(method, params, clientParams, id2);
                });
              },
              requestAdvanced: function(request, clientParams) {
                return requestAdvanced(request, clientParams);
              }
            };
          };
          JSONRPCClient3.prototype.request = function(method, params, clientParams) {
            return this.requestWithID(method, params, clientParams, this._createID());
          };
          JSONRPCClient3.prototype.requestWithID = function(method, params, clientParams, id2) {
            return __awaiter(this, void 0, void 0, function() {
              var request, response;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    request = (0, models_1.createJSONRPCRequest)(id2, method, params);
                    return [4, this.requestAdvanced(request, clientParams)];
                  case 1:
                    response = _a2.sent();
                    if (response.result !== void 0 && !response.error) {
                      return [2, response.result];
                    } else if (response.result === void 0 && response.error) {
                      return [2, Promise.reject(new models_1.JSONRPCErrorException(response.error.message, response.error.code, response.error.data))];
                    } else {
                      return [2, Promise.reject(new Error("An unexpected error occurred"))];
                    }
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          JSONRPCClient3.prototype.requestAdvanced = function(requests, clientParams) {
            var _this = this;
            var areRequestsOriginallyArray = Array.isArray(requests);
            if (!Array.isArray(requests)) {
              requests = [requests];
            }
            var requestsWithID = requests.filter(function(request) {
              return isDefinedAndNonNull(request.id);
            });
            var promises = requestsWithID.map(function(request) {
              return new Promise(function(resolve) {
                return _this.idToResolveMap.set(request.id, resolve);
              });
            });
            var promise = Promise.all(promises).then(function(responses) {
              if (areRequestsOriginallyArray || !responses.length) {
                return responses;
              } else {
                return responses[0];
              }
            });
            return this.send(areRequestsOriginallyArray ? requests : requests[0], clientParams).then(function() {
              return promise;
            }, function(error) {
              requestsWithID.forEach(function(request) {
                _this.receive((0, models_1.createJSONRPCErrorResponse)(request.id, internal_1.DefaultErrorCode, error && error.message || "Failed to send a request"));
              });
              return promise;
            });
          };
          JSONRPCClient3.prototype.notify = function(method, params, clientParams) {
            var request = (0, models_1.createJSONRPCNotification)(method, params);
            this.send(request, clientParams).then(void 0, function() {
              return void 0;
            });
          };
          JSONRPCClient3.prototype.send = function(payload, clientParams) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                return [2, this._send(payload, clientParams)];
              });
            });
          };
          JSONRPCClient3.prototype.rejectAllPendingRequests = function(message) {
            this.idToResolveMap.forEach(function(resolve, id2) {
              return resolve((0, models_1.createJSONRPCErrorResponse)(id2, internal_1.DefaultErrorCode, message));
            });
            this.idToResolveMap.clear();
          };
          JSONRPCClient3.prototype.receive = function(responses) {
            var _this = this;
            if (!Array.isArray(responses)) {
              responses = [responses];
            }
            responses.forEach(function(response) {
              var resolve = _this.idToResolveMap.get(response.id);
              if (resolve) {
                _this.idToResolveMap.delete(response.id);
                resolve(response);
              }
            });
          };
          return JSONRPCClient3;
        }()
      );
      exports.JSONRPCClient = JSONRPCClient2;
      var isDefinedAndNonNull = function(value) {
        return value !== void 0 && value !== null;
      };
    }
  });

  // node_modules/json-rpc-2.0/dist/interfaces.js
  var require_interfaces = __commonJS({
    "node_modules/json-rpc-2.0/dist/interfaces.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/json-rpc-2.0/dist/server.js
  var require_server = __commonJS({
    "node_modules/json-rpc-2.0/dist/server.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t3) {
          for (var s4, i5 = 1, n5 = arguments.length; i5 < n5; i5++) {
            s4 = arguments[i5];
            for (var p3 in s4) if (Object.prototype.hasOwnProperty.call(s4, p3))
              t3[p3] = s4[p3];
          }
          return t3;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e4) {
              reject(e4);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e4) {
              reject(e4);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _2 = { label: 0, sent: function() {
          if (t3[0] & 1) throw t3[1];
          return t3[1];
        }, trys: [], ops: [] }, f3, y3, t3, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n5) {
          return function(v2) {
            return step([n5, v2]);
          };
        }
        function step(op) {
          if (f3) throw new TypeError("Generator is already executing.");
          while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2) try {
            if (f3 = 1, y3 && (t3 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t3 = y3["return"]) && t3.call(y3), 0) : y3.next) && !(t3 = t3.call(y3, op[1])).done) return t3;
            if (y3 = 0, t3) op = [op[0] & 2, t3.value];
            switch (op[0]) {
              case 0:
              case 1:
                t3 = op;
                break;
              case 4:
                _2.label++;
                return { value: op[1], done: false };
              case 5:
                _2.label++;
                y3 = op[1];
                op = [0];
                continue;
              case 7:
                op = _2.ops.pop();
                _2.trys.pop();
                continue;
              default:
                if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _2 = 0;
                  continue;
                }
                if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
                  _2.label = op[1];
                  break;
                }
                if (op[0] === 6 && _2.label < t3[1]) {
                  _2.label = t3[1];
                  t3 = op;
                  break;
                }
                if (t3 && _2.label < t3[2]) {
                  _2.label = t3[2];
                  _2.ops.push(op);
                  break;
                }
                if (t3[2]) _2.ops.pop();
                _2.trys.pop();
                continue;
            }
            op = body.call(thisArg, _2);
          } catch (e4) {
            op = [6, e4];
            y3 = 0;
          } finally {
            f3 = t3 = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack2) {
        if (pack2 || arguments.length === 2) for (var i5 = 0, l3 = from.length, ar; i5 < l3; i5++) {
          if (ar || !(i5 in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i5);
            ar[i5] = from[i5];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.JSONRPCServer = void 0;
      var models_1 = require_models();
      var internal_1 = require_internal();
      var createParseErrorResponse = function() {
        return (0, models_1.createJSONRPCErrorResponse)(null, models_1.JSONRPCErrorCode.ParseError, "Parse error");
      };
      var createInvalidRequestResponse = function(request) {
        return (0, models_1.createJSONRPCErrorResponse)((0, models_1.isJSONRPCID)(request.id) ? request.id : null, models_1.JSONRPCErrorCode.InvalidRequest, "Invalid Request");
      };
      var createMethodNotFoundResponse = function(id2) {
        return (0, models_1.createJSONRPCErrorResponse)(id2, models_1.JSONRPCErrorCode.MethodNotFound, "Method not found");
      };
      var JSONRPCServer2 = (
        /** @class */
        function() {
          function JSONRPCServer3(options) {
            if (options === void 0) {
              options = {};
            }
            var _a2;
            this.mapErrorToJSONRPCErrorResponse = defaultMapErrorToJSONRPCErrorResponse;
            this.nameToMethodDictionary = {};
            this.middleware = null;
            this.errorListener = (_a2 = options.errorListener) !== null && _a2 !== void 0 ? _a2 : console.warn;
          }
          JSONRPCServer3.prototype.hasMethod = function(name) {
            return !!this.nameToMethodDictionary[name];
          };
          JSONRPCServer3.prototype.addMethod = function(name, method) {
            this.addMethodAdvanced(name, this.toJSONRPCMethod(method));
          };
          JSONRPCServer3.prototype.removeMethod = function(name) {
            delete this.nameToMethodDictionary[name];
          };
          JSONRPCServer3.prototype.toJSONRPCMethod = function(method) {
            return function(request, serverParams) {
              var response = method(request.params, serverParams);
              return Promise.resolve(response).then(function(result) {
                return mapResultToJSONRPCResponse(request.id, result);
              });
            };
          };
          JSONRPCServer3.prototype.addMethodAdvanced = function(name, method) {
            var _a2;
            this.nameToMethodDictionary = __assign(__assign({}, this.nameToMethodDictionary), (_a2 = {}, _a2[name] = method, _a2));
          };
          JSONRPCServer3.prototype.receiveJSON = function(json, serverParams) {
            var request = this.tryParseRequestJSON(json);
            if (request) {
              return this.receive(request, serverParams);
            } else {
              return Promise.resolve(createParseErrorResponse());
            }
          };
          JSONRPCServer3.prototype.tryParseRequestJSON = function(json) {
            try {
              return JSON.parse(json);
            } catch (_a2) {
              return null;
            }
          };
          JSONRPCServer3.prototype.receive = function(request, serverParams) {
            if (Array.isArray(request)) {
              return this.receiveMultiple(request, serverParams);
            } else {
              return this.receiveSingle(request, serverParams);
            }
          };
          JSONRPCServer3.prototype.receiveMultiple = function(requests, serverParams) {
            return __awaiter(this, void 0, void 0, function() {
              var responses;
              var _this = this;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, Promise.all(requests.map(function(request) {
                      return _this.receiveSingle(request, serverParams);
                    }))];
                  case 1:
                    responses = _a2.sent().filter(isNonNull);
                    if (responses.length === 1) {
                      return [2, responses[0]];
                    } else if (responses.length) {
                      return [2, responses];
                    } else {
                      return [2, null];
                    }
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          JSONRPCServer3.prototype.receiveSingle = function(request, serverParams) {
            return __awaiter(this, void 0, void 0, function() {
              var method, response;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    method = this.nameToMethodDictionary[request.method];
                    if (!!(0, models_1.isJSONRPCRequest)(request)) return [3, 1];
                    return [2, createInvalidRequestResponse(request)];
                  case 1:
                    return [4, this.callMethod(method, request, serverParams)];
                  case 2:
                    response = _a2.sent();
                    return [2, mapResponse(request, response)];
                }
              });
            });
          };
          JSONRPCServer3.prototype.applyMiddleware = function() {
            var middlewares = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              middlewares[_i] = arguments[_i];
            }
            if (this.middleware) {
              this.middleware = this.combineMiddlewares(__spreadArray([
                this.middleware
              ], middlewares, true));
            } else {
              this.middleware = this.combineMiddlewares(middlewares);
            }
          };
          JSONRPCServer3.prototype.combineMiddlewares = function(middlewares) {
            if (!middlewares.length) {
              return null;
            } else {
              return middlewares.reduce(this.middlewareReducer);
            }
          };
          JSONRPCServer3.prototype.middlewareReducer = function(prevMiddleware, nextMiddleware) {
            return function(next, request, serverParams) {
              return prevMiddleware(function(request2, serverParams2) {
                return nextMiddleware(next, request2, serverParams2);
              }, request, serverParams);
            };
          };
          JSONRPCServer3.prototype.callMethod = function(method, request, serverParams) {
            var _this = this;
            var callMethod = function(request2, serverParams2) {
              if (method) {
                return method(request2, serverParams2);
              } else if (request2.id !== void 0) {
                return Promise.resolve(createMethodNotFoundResponse(request2.id));
              } else {
                return Promise.resolve(null);
              }
            };
            var onError = function(error) {
              _this.errorListener('An unexpected error occurred while executing "'.concat(request.method, '" JSON-RPC method:'), error);
              return Promise.resolve(_this.mapErrorToJSONRPCErrorResponseIfNecessary(request.id, error));
            };
            try {
              return (this.middleware || noopMiddleware)(callMethod, request, serverParams).then(void 0, onError);
            } catch (error) {
              return onError(error);
            }
          };
          JSONRPCServer3.prototype.mapErrorToJSONRPCErrorResponseIfNecessary = function(id2, error) {
            if (id2 !== void 0) {
              return this.mapErrorToJSONRPCErrorResponse(id2, error);
            } else {
              return null;
            }
          };
          return JSONRPCServer3;
        }()
      );
      exports.JSONRPCServer = JSONRPCServer2;
      var isNonNull = function(value) {
        return value !== null;
      };
      var noopMiddleware = function(next, request, serverParams) {
        return next(request, serverParams);
      };
      var mapResultToJSONRPCResponse = function(id2, result) {
        if (id2 !== void 0) {
          return (0, models_1.createJSONRPCSuccessResponse)(id2, result);
        } else {
          return null;
        }
      };
      var defaultMapErrorToJSONRPCErrorResponse = function(id2, error) {
        var _a2;
        var message = (_a2 = error === null || error === void 0 ? void 0 : error.message) !== null && _a2 !== void 0 ? _a2 : "An unexpected error occurred";
        var code = internal_1.DefaultErrorCode;
        var data;
        if (error instanceof models_1.JSONRPCErrorException) {
          code = error.code;
          data = error.data;
        }
        return (0, models_1.createJSONRPCErrorResponse)(id2, code, message, data);
      };
      var mapResponse = function(request, response) {
        if (response) {
          return response;
        } else if (request.id !== void 0) {
          return (0, models_1.createJSONRPCErrorResponse)(request.id, models_1.JSONRPCErrorCode.InternalError, "Internal error");
        } else {
          return null;
        }
      };
    }
  });

  // node_modules/json-rpc-2.0/dist/server-and-client.js
  var require_server_and_client = __commonJS({
    "node_modules/json-rpc-2.0/dist/server-and-client.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e4) {
              reject(e4);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e4) {
              reject(e4);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _2 = { label: 0, sent: function() {
          if (t3[0] & 1) throw t3[1];
          return t3[1];
        }, trys: [], ops: [] }, f3, y3, t3, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n5) {
          return function(v2) {
            return step([n5, v2]);
          };
        }
        function step(op) {
          if (f3) throw new TypeError("Generator is already executing.");
          while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2) try {
            if (f3 = 1, y3 && (t3 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t3 = y3["return"]) && t3.call(y3), 0) : y3.next) && !(t3 = t3.call(y3, op[1])).done) return t3;
            if (y3 = 0, t3) op = [op[0] & 2, t3.value];
            switch (op[0]) {
              case 0:
              case 1:
                t3 = op;
                break;
              case 4:
                _2.label++;
                return { value: op[1], done: false };
              case 5:
                _2.label++;
                y3 = op[1];
                op = [0];
                continue;
              case 7:
                op = _2.ops.pop();
                _2.trys.pop();
                continue;
              default:
                if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _2 = 0;
                  continue;
                }
                if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
                  _2.label = op[1];
                  break;
                }
                if (op[0] === 6 && _2.label < t3[1]) {
                  _2.label = t3[1];
                  t3 = op;
                  break;
                }
                if (t3 && _2.label < t3[2]) {
                  _2.label = t3[2];
                  _2.ops.push(op);
                  break;
                }
                if (t3[2]) _2.ops.pop();
                _2.trys.pop();
                continue;
            }
            op = body.call(thisArg, _2);
          } catch (e4) {
            op = [6, e4];
            y3 = 0;
          } finally {
            f3 = t3 = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.JSONRPCServerAndClient = void 0;
      var models_1 = require_models();
      var JSONRPCServerAndClient = (
        /** @class */
        function() {
          function JSONRPCServerAndClient2(server, client, options) {
            if (options === void 0) {
              options = {};
            }
            var _a2;
            this.server = server;
            this.client = client;
            this.errorListener = (_a2 = options.errorListener) !== null && _a2 !== void 0 ? _a2 : console.warn;
          }
          JSONRPCServerAndClient2.prototype.applyServerMiddleware = function() {
            var _a2;
            var middlewares = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              middlewares[_i] = arguments[_i];
            }
            (_a2 = this.server).applyMiddleware.apply(_a2, middlewares);
          };
          JSONRPCServerAndClient2.prototype.hasMethod = function(name) {
            return this.server.hasMethod(name);
          };
          JSONRPCServerAndClient2.prototype.addMethod = function(name, method) {
            this.server.addMethod(name, method);
          };
          JSONRPCServerAndClient2.prototype.addMethodAdvanced = function(name, method) {
            this.server.addMethodAdvanced(name, method);
          };
          JSONRPCServerAndClient2.prototype.removeMethod = function(name) {
            this.server.removeMethod(name);
          };
          JSONRPCServerAndClient2.prototype.timeout = function(delay) {
            return this.client.timeout(delay);
          };
          JSONRPCServerAndClient2.prototype.request = function(method, params, clientParams) {
            return this.client.request(method, params, clientParams);
          };
          JSONRPCServerAndClient2.prototype.requestAdvanced = function(jsonRPCRequest, clientParams) {
            return this.client.requestAdvanced(jsonRPCRequest, clientParams);
          };
          JSONRPCServerAndClient2.prototype.notify = function(method, params, clientParams) {
            this.client.notify(method, params, clientParams);
          };
          JSONRPCServerAndClient2.prototype.rejectAllPendingRequests = function(message) {
            this.client.rejectAllPendingRequests(message);
          };
          JSONRPCServerAndClient2.prototype.receiveAndSend = function(payload, serverParams, clientParams) {
            return __awaiter(this, void 0, void 0, function() {
              var response, message;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    if (!((0, models_1.isJSONRPCResponse)(payload) || (0, models_1.isJSONRPCResponses)(payload))) return [3, 1];
                    this.client.receive(payload);
                    return [3, 4];
                  case 1:
                    if (!((0, models_1.isJSONRPCRequest)(payload) || (0, models_1.isJSONRPCRequests)(payload))) return [3, 3];
                    return [4, this.server.receive(payload, serverParams)];
                  case 2:
                    response = _a2.sent();
                    if (response) {
                      return [2, this.client.send(response, clientParams)];
                    }
                    return [3, 4];
                  case 3:
                    message = "Received an invalid JSON-RPC message";
                    this.errorListener(message, payload);
                    return [2, Promise.reject(new Error(message))];
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          return JSONRPCServerAndClient2;
        }()
      );
      exports.JSONRPCServerAndClient = JSONRPCServerAndClient;
    }
  });

  // node_modules/json-rpc-2.0/dist/index.js
  var require_dist = __commonJS({
    "node_modules/json-rpc-2.0/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o5, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        var desc = Object.getOwnPropertyDescriptor(m2, k2);
        if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m2[k2];
          } };
        }
        Object.defineProperty(o5, k22, desc);
      } : function(o5, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        o5[k22] = m2[k2];
      });
      var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
        for (var p3 in m2) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3)) __createBinding(exports2, m2, p3);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_client(), exports);
      __exportStar(require_interfaces(), exports);
      __exportStar(require_models(), exports);
      __exportStar(require_server(), exports);
      __exportStar(require_server_and_client(), exports);
    }
  });

  // node_modules/@lukso/up-provider/dist/index.mjs
  var import_debug = __toESM(require_browser(), 1);

  // node_modules/eventemitter3/index.mjs
  var import_index = __toESM(require_eventemitter3(), 1);
  var eventemitter3_default = import_index.default;

  // node_modules/@lukso/up-provider/dist/index.mjs
  var import_json_rpc_2 = __toESM(require_dist(), 1);

  // node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i5 = 0; i5 < 256; ++i5) {
    byteToHex.push((i5 + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  }

  // node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      if (typeof crypto === "undefined" || !crypto.getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
      getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = { randomUUID };

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
      throw new Error("Random bytes length must be >= 16");
    }
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      if (offset < 0 || offset + 16 > buf.length) {
        throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
      }
      for (let i5 = 0; i5 < 16; ++i5) {
        buf[offset + i5] = rnds[i5];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t3, e4, o5) {
      if (this._$cssResult$ = true, o5 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e4;
    }
    get styleSheet() {
      let t3 = this.o;
      const s4 = this.t;
      if (e && void 0 === t3) {
        const e4 = void 0 !== s4 && 1 === s4.length;
        e4 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e4) => {
    const o5 = 1 === t3.length ? t3[0] : e4.reduce((e5, s4, o6) => e5 + ((t4) => {
      if (true === t4._$cssResult$) return t4.cssText;
      if ("number" == typeof t4) return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t3[o6 + 1], t3[0]);
    return new n(o5, t3, s);
  };
  var S = (s4, o5) => {
    if (e) s4.adoptedStyleSheets = o5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
    else for (const e4 of o5) {
      const o6 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o6.setAttribute("nonce", n5), o6.textContent = e4.cssText, s4.appendChild(o6);
    }
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e4 = "";
    for (const s4 of t4.cssRules) e4 += s4.cssText;
    return r(e4);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t3, s4) => t3;
  var u = { toAttribute(t3, s4) {
    switch (s4) {
      case Boolean:
        t3 = t3 ? l : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, s4) {
    let i5 = t3;
    switch (s4) {
      case Boolean:
        i5 = null !== t3;
        break;
      case Number:
        i5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t3);
        } catch (t4) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f = (t3, s4) => !i2(t3, s4);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  var y = class extends HTMLElement {
    static addInitializer(t3) {
      this._$Ei(), (this.l ?? (this.l = [])).push(t3);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t3, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
        const i5 = Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
        void 0 !== h3 && e2(this.prototype, t3, h3);
      }
    }
    static getPropertyDescriptor(t3, s4, i5) {
      const { get: e4, set: r4 } = h(this.prototype, t3) ?? { get() {
        return this[s4];
      }, set(t4) {
        this[s4] = t4;
      } };
      return { get: e4, set(s5) {
        const h3 = e4?.call(this);
        r4?.call(this, s5), this.requestUpdate(t3, h3, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t3 = n2(this);
      t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
        for (const i5 of s4) this.createProperty(i5, t4[i5]);
      }
      const t3 = this[Symbol.metadata];
      if (null !== t3) {
        const s4 = litPropertyMetadata.get(t3);
        if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t4, s4] of this.elementProperties) {
        const i5 = this._$Eu(t4, s4);
        void 0 !== i5 && this._$Eh.set(i5, t4);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i5 = [];
      if (Array.isArray(s4)) {
        const e4 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e4) i5.unshift(c(s5));
      } else void 0 !== s4 && i5.push(c(s4));
      return i5;
    }
    static _$Eu(t3, s4) {
      const i5 = s4.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
    }
    addController(t3) {
      (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
    }
    removeController(t3) {
      this._$EO?.delete(t3);
    }
    _$E_() {
      const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
      t3.size > 0 && (this._$Ep = t3);
    }
    createRenderRoot() {
      const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t3, this.constructor.elementStyles), t3;
    }
    connectedCallback() {
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t3) => t3.hostDisconnected?.());
    }
    attributeChangedCallback(t3, s4, i5) {
      this._$AK(t3, i5);
    }
    _$ET(t3, s4) {
      const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
      if (void 0 !== e4 && true === i5.reflect) {
        const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
        this._$Em = t3, null == h3 ? this.removeAttribute(e4) : this.setAttribute(e4, h3), this._$Em = null;
      }
    }
    _$AK(t3, s4) {
      const i5 = this.constructor, e4 = i5._$Eh.get(t3);
      if (void 0 !== e4 && this._$Em !== e4) {
        const t4 = i5.getPropertyOptions(e4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
        this._$Em = e4, this[e4] = h3.fromAttribute(s4, t4.type) ?? this._$Ej?.get(e4) ?? null, this._$Em = null;
      }
    }
    requestUpdate(t3, s4, i5) {
      if (void 0 !== t3) {
        const e4 = this.constructor, h3 = this[t3];
        if (i5 ?? (i5 = e4.getPropertyOptions(t3)), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(e4._$Eu(t3, i5)))) return;
        this.C(t3, s4, i5);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t3, s4, { useDefault: i5, reflect: e4, wrapped: h3 }, r4) {
      i5 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t3) && (this._$Ej.set(t3, r4 ?? s4 ?? this[t3]), true !== h3 || void 0 !== r4) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e4 && this._$Em !== t3 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t3));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (const [t5, s5] of this._$Ep) this[t5] = s5;
          this._$Ep = void 0;
        }
        const t4 = this.constructor.elementProperties;
        if (t4.size > 0) for (const [s5, i5] of t4) {
          const { wrapped: t5 } = i5, e4 = this[s5];
          true !== t5 || this._$AL.has(s5) || void 0 === e4 || this.C(s5, void 0, i5, e4);
        }
      }
      let t3 = false;
      const s4 = this._$AL;
      try {
        t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t3 = false, this._$EM(), s5;
      }
      t3 && this._$AE(s4);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$Eq && (this._$Eq = this._$Eq.forEach((t4) => this._$ET(t4, this[t4]))), this._$EM();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.0");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
  var a2 = Array.isArray;
  var u2 = (t3) => a2(t3) || "function" == typeof t3?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t3, i5) {
    if (!a2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  var V = (t3, i5) => {
    const s4 = t3.length - 1, o5 = [];
    let r4, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = f2;
    for (let i6 = 0; i6 < s4; i6++) {
      const s5 = t3[i6];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); ) y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r4 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r4 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r4 = void 0);
      const x2 = c4 === m && t3[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o5.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i6 : x2);
    }
    return [P(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), o5];
  };
  var N = class _N {
    constructor({ strings: t3, _$litType$: s4 }, n5) {
      let r4;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = V(t3, s4);
      if (this.el = _N.createElement(f3, n5), C.currentNode = this.el.content, 2 === s4 || 3 === s4) {
        const t4 = this.el.content.firstChild;
        t4.replaceWith(...t4.childNodes);
      }
      for (; null !== (r4 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r4.nodeType) {
          if (r4.hasAttributes()) for (const t4 of r4.getAttributeNames()) if (t4.endsWith(e3)) {
            const i5 = v2[a3++], s5 = r4.getAttribute(t4).split(h2), e4 = /([.?@])?(.*)/.exec(i5);
            d3.push({ type: 1, index: c4, name: e4[2], strings: s5, ctor: "." === e4[1] ? H : "?" === e4[1] ? I : "@" === e4[1] ? L : k }), r4.removeAttribute(t4);
          } else t4.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r4.removeAttribute(t4));
          if ($.test(r4.tagName)) {
            const t4 = r4.textContent.split(h2), s5 = t4.length - 1;
            if (s5 > 0) {
              r4.textContent = i3 ? i3.emptyScript : "";
              for (let i5 = 0; i5 < s5; i5++) r4.append(t4[i5], l2()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
              r4.append(t4[s5], l2());
            }
          }
        } else if (8 === r4.nodeType) if (r4.data === o3) d3.push({ type: 2, index: c4 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = r4.data.indexOf(h2, t4 + 1)); ) d3.push({ type: 7, index: c4 }), t4 += h2.length - 1;
        }
        c4++;
      }
    }
    static createElement(t3, i5) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t3, s4;
    }
  };
  function S2(t3, i5, s4 = t3, e4) {
    if (i5 === T) return i5;
    let h3 = void 0 !== e4 ? s4._$Co?.[e4] : s4._$Cl;
    const o5 = c3(i5) ? void 0 : i5._$litDirective$;
    return h3?.constructor !== o5 && (h3?._$AO?.(false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t3), h3._$AT(t3, s4, e4)), void 0 !== e4 ? (s4._$Co ?? (s4._$Co = []))[e4] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = S2(t3, h3._$AS(t3, i5.values), h3, e4)), i5;
  }
  var M = class {
    constructor(t3, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t3) {
      const { el: { content: i5 }, parts: s4 } = this._$AD, e4 = (t3?.creationScope ?? r3).importNode(i5, true);
      C.currentNode = e4;
      let h3 = C.nextNode(), o5 = 0, n5 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o5 === l3.index) {
          let i6;
          2 === l3.type ? i6 = new R(h3, h3.nextSibling, this, t3) : 1 === l3.type ? i6 = new l3.ctor(h3, l3.name, l3.strings, this, t3) : 6 === l3.type && (i6 = new z(h3, this, t3)), this._$AV.push(i6), l3 = s4[++n5];
        }
        o5 !== l3?.index && (h3 = C.nextNode(), o5++);
      }
      return C.currentNode = r3, e4;
    }
    p(t3) {
      let i5 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
    }
  };
  var R = class _R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t3, i5, s4, e4) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e4, this._$Cv = e4?.isConnected ?? true;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i5 = this) {
      t3 = S2(this, t3, i5), c3(t3) ? t3 === E || null == t3 || "" === t3 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t3 !== this._$AH && t3 !== T && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : u2(t3) ? this.k(t3) : this._(t3);
    }
    O(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    T(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
    }
    _(t3) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(r3.createTextNode(t3)), this._$AH = t3;
    }
    $(t3) {
      const { values: i5, _$litType$: s4 } = t3, e4 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = N.createElement(P(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e4) this._$AH.p(i5);
      else {
        const t4 = new M(e4, this), s5 = t4.u(this.options);
        t4.p(i5), this.T(s5), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i5 = A.get(t3.strings);
      return void 0 === i5 && A.set(t3.strings, i5 = new N(t3)), i5;
    }
    k(t3) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s4, e4 = 0;
      for (const h3 of t3) e4 === i5.length ? i5.push(s4 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s4 = i5[e4], s4._$AI(h3), e4++;
      e4 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i5.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i5) {
      for (this._$AP?.(false, true, i5); t3 && t3 !== this._$AB; ) {
        const i6 = t3.nextSibling;
        t3.remove(), t3 = i6;
      }
    }
    setConnected(t3) {
      void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t3, i5, s4, e4, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = E;
    }
    _$AI(t3, i5 = this, s4, e4) {
      const h3 = this.strings;
      let o5 = false;
      if (void 0 === h3) t3 = S2(this, t3, i5, 0), o5 = !c3(t3) || t3 !== this._$AH && t3 !== T, o5 && (this._$AH = t3);
      else {
        const e5 = t3;
        let n5, r4;
        for (t3 = h3[0], n5 = 0; n5 < h3.length - 1; n5++) r4 = S2(this, e5[s4 + n5], i5, n5), r4 === T && (r4 = this._$AH[n5]), o5 || (o5 = !c3(r4) || r4 !== this._$AH[n5]), r4 === E ? t3 = E : t3 !== E && (t3 += (r4 ?? "") + h3[n5 + 1]), this._$AH[n5] = r4;
      }
      o5 && !e4 && this.j(t3);
    }
    j(t3) {
      t3 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === E ? void 0 : t3;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      this.element.toggleAttribute(this.name, !!t3 && t3 !== E);
    }
  };
  var L = class extends k {
    constructor(t3, i5, s4, e4, h3) {
      super(t3, i5, s4, e4, h3), this.type = 5;
    }
    _$AI(t3, i5 = this) {
      if ((t3 = S2(this, t3, i5, 0) ?? E) === T) return;
      const s4 = this._$AH, e4 = t3 === E && s4 !== E || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== E && (s4 === E || e4);
      e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var z = class {
    constructor(t3, i5, s4) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      S2(this, t3);
    }
  };
  var j = t2.litHtmlPolyfillSupport;
  j?.(N, R), (t2.litHtmlVersions ?? (t2.litHtmlVersions = [])).push("3.3.0");
  var B = (t3, i5, s4) => {
    const e4 = s4?.renderBefore ?? i5;
    let h3 = e4._$litPart$;
    if (void 0 === h3) {
      const t4 = s4?.renderBefore ?? null;
      e4._$litPart$ = h3 = new R(i5.insertBefore(l2(), t4), t4, void 0, s4 ?? {});
    }
    return h3._$AI(t3), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a2;
      const t3 = super.createRenderRoot();
      return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = t3.firstChild), t3;
    }
    update(t3) {
      const r4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = B(r4, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4?.({ LitElement: i4 });
  (s3.litElementVersions ?? (s3.litElementVersions = [])).push("4.2.0");

  // node_modules/@lukso/up-provider/dist/index.mjs
  var import_debug2 = __toESM(require_browser(), 1);
  var import_json_rpc_22 = __toESM(require_dist(), 1);
  var __typeError2 = (msg) => {
    throw TypeError(msg);
  };
  var __accessCheck2 = (obj, member, msg) => member.has(obj) || __typeError2("Cannot " + msg);
  var __privateGet2 = (obj, member, getter) => (__accessCheck2(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd2 = (obj, member, value) => member.has(obj) ? __typeError2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet2 = (obj, member, value, setter) => (__accessCheck2(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var image = `<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 205 205" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
	.st0{fill:none;stroke:url(#a);stroke-width:5;stroke-miterlimit:10;}
	.st1{fill:none;stroke:url(#SVGID_00000056389333576465390850000010798922027916692147_);stroke-width:5;stroke-miterlimit:10;}
	.st2{fill:none;stroke:url(#SVGID_00000051380137365445111330000009167280533949070741_);stroke-width:5;stroke-miterlimit:10;}
	.st3{fill:none;stroke:url(#SVGID_00000047778497278181544540000005454496077506244747_);stroke-width:5;stroke-miterlimit:10;}
	.st4{fill:none;stroke:url(#SVGID_00000158713292131007947860000004514829925534755714_);stroke-width:5;stroke-miterlimit:10;}
	.st5{fill:none;stroke:url(#SVGID_00000176752301671797505420000008656037770344976573_);stroke-width:5;stroke-miterlimit:10;}
	.st6{fill:none;stroke:url(#SVGID_00000019668949540468568120000000864275969910642319_);stroke-width:5;stroke-miterlimit:10;}
	.st7{fill:none;stroke:url(#SVGID_00000047054428014998274810000000046417757098061213_);stroke-width:5;stroke-miterlimit:10;}
	.st8{fill:none;stroke:url(#SVGID_00000022549651360086842380000007881063083396207791_);stroke-width:5;stroke-miterlimit:10;}
	.st9{fill:none;stroke:url(#SVGID_00000130631511062807885040000011931776790515364762_);stroke-width:5;stroke-miterlimit:10;}
	.st10{fill:none;stroke:url(#SVGID_00000014605678686996040940000017393520465879767969_);stroke-width:5;stroke-miterlimit:10;}
	.st11{fill:none;stroke:url(#SVGID_00000163756482267622025550000014979451267598818966_);stroke-width:5;stroke-miterlimit:10;}
	.st12{fill:none;stroke:url(#SVGID_00000124141954871206116560000005273572469214934666_);stroke-width:5;stroke-miterlimit:10;}
	.st13{fill:none;stroke:url(#SVGID_00000105408899360936988710000010273703361233894794_);stroke-width:5;stroke-miterlimit:10;}
	.st14{fill:none;stroke:url(#SVGID_00000105426278926465751030000016934798543375658152_);stroke-width:5;stroke-miterlimit:10;}
	.st15{fill:none;stroke:url(#SVGID_00000123402864351232224400000005626520335657750453_);stroke-width:5;stroke-miterlimit:10;}
	.st16{fill:none;stroke:url(#SVGID_00000054240225344145864930000004454693569321605311_);stroke-width:5;stroke-miterlimit:10;}
	.st17{fill:none;stroke:url(#SVGID_00000165198640681901127460000012866876033927105466_);stroke-width:5;stroke-miterlimit:10;}
	.st18{fill:none;stroke:url(#SVGID_00000010296938220999196390000009217749098280550545_);stroke-width:5;stroke-miterlimit:10;}
	.st19{fill:none;stroke:url(#SVGID_00000034073387945625344930000006656368762102967742_);stroke-width:5;stroke-miterlimit:10;}
	.st20{fill:none;stroke:url(#SVGID_00000176743270661283872710000018309169195545041059_);stroke-width:5;stroke-miterlimit:10;}
	.st21{fill:none;stroke:url(#SVGID_00000015315768876778818720000011431544963531332520_);stroke-width:5;stroke-miterlimit:10;}
	.st22{fill:none;stroke:url(#SVGID_00000027562111282714744500000005490249511516742272_);stroke-width:5;stroke-miterlimit:10;}
	.st23{fill:none;stroke:url(#SVGID_00000127742865247414638530000010753077084961061270_);stroke-width:5;stroke-miterlimit:10;}
	.st24{fill:none;stroke:url(#SVGID_00000101789324830174438290000009297370073624241576_);stroke-width:5;stroke-miterlimit:10;}
	.st25{fill:none;stroke:url(#SVGID_00000017500845606749358970000015230857459735047856_);stroke-width:5;stroke-miterlimit:10;}
	.st26{fill:none;stroke:url(#SVGID_00000091015942850621393280000009022728536804063160_);stroke-width:5;stroke-miterlimit:10;}
	.st27{fill:none;stroke:url(#SVGID_00000090989720155308621060000010240571899488221826_);stroke-width:5;stroke-miterlimit:10;}
	.st28{fill:none;stroke:url(#SVGID_00000129902600288722924760000008573063894180376961_);stroke-width:5;stroke-miterlimit:10;}
	.st29{fill:none;stroke:url(#SVGID_00000058583537738930683450000015023544084554769294_);stroke-width:5;stroke-miterlimit:10;}
	.st30{fill:none;stroke:url(#SVGID_00000003804661720899413000000008401752229313256105_);stroke-width:5;stroke-miterlimit:10;}
	.st31{fill:none;stroke:url(#SVGID_00000085963063803388969600000003208953804493595038_);stroke-width:5;stroke-miterlimit:10;}
	.st32{fill:none;stroke:url(#SVGID_00000072966978096607921080000017898876817739748490_);stroke-width:5;stroke-miterlimit:10;}
	.st33{fill:none;stroke:url(#SVGID_00000044868694292747046660000008821631534945180843_);stroke-width:5;stroke-miterlimit:10;}
	.st34{fill:none;stroke:url(#SVGID_00000137112799151377606860000014693891205085347256_);stroke-width:5;stroke-miterlimit:10;}
	.st35{fill:none;stroke:url(#SVGID_00000002382026647477974920000016183252234771263910_);stroke-width:5;stroke-miterlimit:10;}
	.st36{fill:none;stroke:url(#SVGID_00000084525857658817268560000010083959727551026334_);stroke-width:5;stroke-miterlimit:10;}
	.st37{fill:none;stroke:url(#SVGID_00000070111086173007299860000009434208121563659443_);stroke-width:5;stroke-miterlimit:10;}
	.st38{fill:none;stroke:url(#SVGID_00000102505790783277835730000000964811951744520072_);stroke-width:5;stroke-miterlimit:10;}
	.st39{fill:none;stroke:url(#SVGID_00000165915544478628760480000016922512963244969366_);stroke-width:5;stroke-miterlimit:10;}
	.st40{fill:none;stroke:url(#SVGID_00000089546558642276323190000005391279568885040006_);stroke-width:5;stroke-miterlimit:10;}
	.st41{fill:none;stroke:url(#SVGID_00000167378843446581152770000011707843822981528194_);stroke-width:5;stroke-miterlimit:10;}
	.st42{fill:none;stroke:url(#SVGID_00000168119232016106846570000013419701087766081454_);stroke-width:5;stroke-miterlimit:10;}
	.st43{fill:none;stroke:url(#SVGID_00000167394825817402548920000002075089606777446556_);stroke-width:5;stroke-miterlimit:10;}
	.st44{fill:none;stroke:url(#SVGID_00000084510851761702941550000009477386628738193292_);stroke-width:5;stroke-miterlimit:10;}
	.st45{fill:none;stroke:url(#SVGID_00000056408517440310375340000010264108419479253922_);stroke-width:5;stroke-miterlimit:10;}
	.st46{fill:none;stroke:url(#SVGID_00000052089677177323945810000003568789998996187573_);stroke-width:5;stroke-miterlimit:10;}
	.st47{fill:none;stroke:url(#SVGID_00000014623913530728028500000013543833695712392346_);stroke-width:5;stroke-miterlimit:10;}
	.st48{fill:none;stroke:url(#SVGID_00000013154695334869467910000006421302680227263405_);stroke-width:5;stroke-miterlimit:10;}
	.st49{fill:none;stroke:url(#SVGID_00000050623051460253816960000007532467332512672433_);stroke-width:5;stroke-miterlimit:10;}
	.st50{fill:none;stroke:url(#SVGID_00000134218795595679531370000003351303235943955639_);stroke-width:5;stroke-miterlimit:10;}
	.st51{fill:none;stroke:url(#SVGID_00000181057842005773389870000005696612509835399060_);stroke-width:5;stroke-miterlimit:10;}
	.st52{fill:none;stroke:url(#SVGID_00000078742114689626592490000017020225732925789618_);stroke-width:5;stroke-miterlimit:10;}
	.st53{fill:none;stroke:url(#SVGID_00000028290209729755355380000012203081210844865168_);stroke-width:5;stroke-miterlimit:10;}
	.st54{fill:none;stroke:url(#SVGID_00000079455762041076334420000005898854641888466571_);stroke-width:5;stroke-miterlimit:10;}
	.st55{fill:none;stroke:url(#SVGID_00000091734002111818624060000017394333686986493568_);stroke-width:5;stroke-miterlimit:10;}
	.st56{fill:none;stroke:url(#SVGID_00000111182052283944150350000017412150973607273876_);stroke-width:5;stroke-miterlimit:10;}
	.st57{fill:none;stroke:url(#SVGID_00000101065227870351957860000010885497696594366378_);stroke-width:5;stroke-miterlimit:10;}
	.st58{fill:none;stroke:url(#SVGID_00000133511354585973938690000010310522060030073753_);stroke-width:5;stroke-miterlimit:10;}
	.st59{fill:none;stroke:url(#SVGID_00000165233680036648094120000006698224943178494357_);stroke-width:5;stroke-miterlimit:10;}
	.st60{fill:none;stroke:url(#SVGID_00000098904833180917867920000017049053739982670468_);stroke-width:5;stroke-miterlimit:10;}
	.st61{fill:none;stroke:url(#SVGID_00000167366533717241253010000012344196281903811732_);stroke-width:5;stroke-miterlimit:10;}
	.st62{fill:none;stroke:url(#SVGID_00000142889411660844436240000005312836201473624710_);stroke-width:5;stroke-miterlimit:10;}
	.st63{fill:none;stroke:url(#SVGID_00000139269393346137155550000011716049963213405095_);stroke-width:5;stroke-miterlimit:10;}
	.st64{fill:none;stroke:url(#SVGID_00000093876980850354128010000014534565552025921462_);stroke-width:5;stroke-miterlimit:10;}
	.st65{fill:none;stroke:url(#SVGID_00000136373109140918354470000006171493265636621979_);stroke-width:5;stroke-miterlimit:10;}
	.st66{fill:none;stroke:url(#SVGID_00000150077671619754085120000016153201097528477579_);stroke-width:5;stroke-miterlimit:10;}
	.st67{fill:none;stroke:url(#SVGID_00000029017252934418598770000000823255553040305052_);stroke-width:5;stroke-miterlimit:10;}
	.st68{fill:none;stroke:url(#SVGID_00000112604373331140592300000014777117207542942640_);stroke-width:5;stroke-miterlimit:10;}
	.st69{fill:none;stroke:url(#SVGID_00000116946114276402661480000004378529819849870774_);stroke-width:5;stroke-miterlimit:10;}
	.st70{fill:none;stroke:url(#SVGID_00000102506886172947022540000017343173005075878812_);stroke-width:5;stroke-miterlimit:10;}
	.st71{fill:none;stroke:url(#SVGID_00000124840978928821080400000002281832406117525145_);stroke-width:5;stroke-miterlimit:10;}
	.st72{fill:none;stroke:url(#SVGID_00000170245617588902170720000006912587284346141320_);stroke-width:5;stroke-miterlimit:10;}
	.st73{fill:none;stroke:url(#SVGID_00000083776943110666405990000011471330538153760389_);stroke-width:5;stroke-miterlimit:10;}
	.st74{fill:none;stroke:url(#SVGID_00000146502060470899465010000001250791755231580862_);stroke-width:5;stroke-miterlimit:10;}
	.st75{fill:none;stroke:url(#SVGID_00000088819347351791242500000013107193007155670658_);stroke-width:5;stroke-miterlimit:10;}
	.st76{fill:none;stroke:url(#SVGID_00000098192921558647243650000011278677112161862294_);stroke-width:5;stroke-miterlimit:10;}
	.st77{fill:none;stroke:url(#SVGID_00000042007395515809536850000003183848658102735764_);stroke-width:5;stroke-miterlimit:10;}
	.st78{fill:none;stroke:url(#SVGID_00000097490746738385962170000002570786228642433967_);stroke-width:5;stroke-miterlimit:10;}
	.st79{fill:none;stroke:url(#SVGID_00000069365943264275782720000017179113781878133889_);stroke-width:5;stroke-miterlimit:10;}
	.st80{fill:none;stroke:url(#SVGID_00000034055757277602214150000003488284017013618311_);stroke-width:5;stroke-miterlimit:10;}
	.st81{fill:none;stroke:url(#SVGID_00000034777787907783757330000016252589249423194299_);stroke-width:5;stroke-miterlimit:10;}
	.st82{fill:none;stroke:url(#SVGID_00000106135745597918267070000000004239942053515183_);stroke-width:5;stroke-miterlimit:10;}
	.st83{fill:none;stroke:url(#SVGID_00000145772689669218015590000007105130906213875112_);stroke-width:5;stroke-miterlimit:10;}
	.st84{fill:none;stroke:url(#SVGID_00000013891897453760358770000017670402668518874778_);stroke-width:5;stroke-miterlimit:10;}
	.st85{fill:none;stroke:url(#SVGID_00000109732427888582968050000015066209310374742680_);stroke-width:5;stroke-miterlimit:10;}
	.st86{fill:none;stroke:url(#SVGID_00000047741154486080417310000014664027673370821766_);stroke-width:5;stroke-miterlimit:10;}
	.st87{fill:none;stroke:url(#SVGID_00000068635049878208944190000000533216387174909059_);stroke-width:5;stroke-miterlimit:10;}
	.st88{fill:none;stroke:url(#SVGID_00000013153300998308834300000001513174756982371207_);stroke-width:5;stroke-miterlimit:10;}
	.st89{fill:none;stroke:url(#SVGID_00000106124814921120210160000014679919063178231999_);stroke-width:5;stroke-miterlimit:10;}
	.st90{fill:none;stroke:url(#SVGID_00000161619652674751969170000001829736489751934088_);stroke-width:5;stroke-miterlimit:10;}
	.st91{fill:none;stroke:url(#SVGID_00000109007922325232383460000003552756348063800755_);stroke-width:5;stroke-miterlimit:10;}
	.st92{fill:none;stroke:url(#SVGID_00000111183555827063523980000013185562189890078375_);stroke-width:5;stroke-miterlimit:10;}
	.st93{fill:none;stroke:url(#SVGID_00000031165850742261718760000004777964438470868656_);stroke-width:5;stroke-miterlimit:10;}
	.st94{fill:none;stroke:url(#SVGID_00000090274996417041406300000004039395265917733272_);stroke-width:5;stroke-miterlimit:10;}
	.st95{fill:none;stroke:url(#SVGID_00000065768075922874117940000017538962735675953081_);stroke-width:5;stroke-miterlimit:10;}
	.st96{fill:none;stroke:url(#SVGID_00000148646919575503628150000007519633719793660573_);stroke-width:5;stroke-miterlimit:10;}
	.st97{fill:none;stroke:url(#SVGID_00000065790763276290639510000000201118417240643772_);stroke-width:5;stroke-miterlimit:10;}
	.st98{fill:none;stroke:url(#SVGID_00000075164235789427125460000000104372776398630326_);stroke-width:5;stroke-miterlimit:10;}
	.st99{fill:none;stroke:url(#SVGID_00000057864297585687382250000018210493985566754213_);stroke-width:5;stroke-miterlimit:10;}
	.st100{fill:none;stroke:url(#SVGID_00000045595445976607013190000008611366245250715571_);stroke-width:5;stroke-miterlimit:10;}
	.st101{fill:none;stroke:url(#SVGID_00000182523556723523056900000003483506746862807217_);stroke-width:5;stroke-miterlimit:10;}
	.st102{fill:none;stroke:#757EB4;stroke-width:5;stroke-miterlimit:10;}
	.st103{fill:none;stroke:url(#SVGID_00000128453970100024162880000006547400476427467172_);stroke-width:5;stroke-miterlimit:10;}
	.st104{fill:none;stroke:url(#SVGID_00000125577602961606391520000010114338921627474585_);stroke-width:5;stroke-miterlimit:10;}
	.st105{fill:none;stroke:url(#SVGID_00000043456621670713235080000002553250403372169349_);stroke-width:5;stroke-miterlimit:10;}
	.st106{fill:none;stroke:url(#SVGID_00000127733790326717246900000007594342496987171232_);stroke-width:5;stroke-miterlimit:10;}
	.st107{fill:none;stroke:url(#SVGID_00000134231686295055524420000015061697689259460504_);stroke-width:5;stroke-miterlimit:10;}
	.st108{fill:none;stroke:url(#SVGID_00000108995926887150032590000005303979745435875213_);stroke-width:5;stroke-miterlimit:10;}
	.st109{fill:none;stroke:url(#SVGID_00000081642644150793862560000002022914590133615540_);stroke-width:5;stroke-miterlimit:10;}
	.st110{fill:none;stroke:url(#SVGID_00000041991226162332262860000001184417984240518041_);stroke-width:5;stroke-miterlimit:10;}
	.st111{fill:none;stroke:url(#SVGID_00000093893608351242965810000000487807601985913227_);stroke-width:5;stroke-miterlimit:10;}
	.st112{fill:none;stroke:url(#SVGID_00000034770163552112952210000007871950429685271683_);stroke-width:5;stroke-miterlimit:10;}
	.st113{fill:none;stroke:url(#SVGID_00000059989381983490265650000002034466747055463810_);stroke-width:5;stroke-miterlimit:10;}
	.st114{fill:none;stroke:url(#SVGID_00000125583506688367613870000018154196008315070119_);stroke-width:5;stroke-miterlimit:10;}
	.st115{fill:none;stroke:url(#SVGID_00000117646387355380661340000009334399988584140206_);stroke-width:5;stroke-miterlimit:10;}
	.st116{fill:none;stroke:url(#SVGID_00000013156276316353635230000016654269340791251641_);stroke-width:5;stroke-miterlimit:10;}
	.st117{fill:none;stroke:url(#SVGID_00000088845125758224684120000011621715175913805477_);stroke-width:5;stroke-miterlimit:10;}
	.st118{fill:none;stroke:url(#SVGID_00000062915054326126352380000010623612336048119957_);stroke-width:5;stroke-miterlimit:10;}
	.st119{fill:none;stroke:url(#SVGID_00000003806561593149220910000013267903521237113258_);stroke-width:5;stroke-miterlimit:10;}
	.st120{fill:none;stroke:url(#SVGID_00000134214034514871549610000003118520003330203270_);stroke-width:5;stroke-miterlimit:10;}
	.st121{fill:none;stroke:url(#SVGID_00000093167656965168574160000012240056245346630052_);stroke-width:5;stroke-miterlimit:10;}
	.st122{fill:none;stroke:url(#SVGID_00000174562443250177689320000005287945487715485063_);stroke-width:5;stroke-miterlimit:10;}
	.st123{fill:none;stroke:url(#SVGID_00000052817053787295771590000006134066193763166905_);stroke-width:5;stroke-miterlimit:10;}
	.st124{fill:none;stroke:url(#SVGID_00000036946792550920911210000007255713389976622504_);stroke-width:5;stroke-miterlimit:10;}
	.st125{fill:none;stroke:url(#SVGID_00000122686371442761706510000010773293858743901092_);stroke-width:5;stroke-miterlimit:10;}
	.st126{fill:none;stroke:url(#SVGID_00000183249709875249145880000016011354232562626727_);stroke-width:5;stroke-miterlimit:10;}
	.st127{fill:none;stroke:url(#SVGID_00000100358747981352865260000010977000215790911415_);stroke-width:5;stroke-miterlimit:10;}
	.st128{fill:none;stroke:url(#SVGID_00000160186203872389779700000007114474660579329686_);stroke-width:5;stroke-miterlimit:10;}
	.st129{fill:none;stroke:url(#SVGID_00000013160889052283306520000003996384242507041700_);stroke-width:5;stroke-miterlimit:10;}
	.st130{fill:none;stroke:url(#SVGID_00000127015761217743178200000016662411473063658123_);stroke-width:5;stroke-miterlimit:10;}
	.st131{fill:none;stroke:url(#SVGID_00000052802537056054924190000005603056556094689201_);stroke-width:5;stroke-miterlimit:10;}
	.st132{fill:none;stroke:url(#SVGID_00000114071916312341561010000005455098366248001423_);stroke-width:5;stroke-miterlimit:10;}
	.st133{fill:none;stroke:url(#SVGID_00000171714174242819446000000009744124901989503914_);stroke-width:5;stroke-miterlimit:10;}
	.st134{fill:none;stroke:url(#SVGID_00000043417465350265472470000017938710855653009580_);stroke-width:5;stroke-miterlimit:10;}
	.st135{fill:none;stroke:url(#SVGID_00000011018780746824428810000004261442624854604185_);stroke-width:5;stroke-miterlimit:10;}
	.st136{fill:none;stroke:url(#SVGID_00000134957448699195559800000006934429449926047130_);stroke-width:5;stroke-miterlimit:10;}
	.st137{fill:none;stroke:url(#SVGID_00000055677743805044780280000016506373066881847960_);stroke-width:5;stroke-miterlimit:10;}
	.st138{fill:none;stroke:url(#SVGID_00000038410718236291877190000018440957628807735961_);stroke-width:5;stroke-miterlimit:10;}
	.st139{fill:none;stroke:url(#SVGID_00000100352911268009459830000001175268917907061157_);stroke-width:5;stroke-miterlimit:10;}
	.st140{fill:none;stroke:url(#SVGID_00000010284569549211818030000000679282970688672900_);stroke-width:5;stroke-miterlimit:10;}
	.st141{fill:none;stroke:url(#SVGID_00000084492680296000541010000000530088054040073856_);stroke-width:5;stroke-miterlimit:10;}
	.st142{fill:none;stroke:url(#SVGID_00000029754489504380711860000009440471718934714813_);stroke-width:5;stroke-miterlimit:10;}
	.st143{fill:none;stroke:url(#SVGID_00000139252841737307596300000002431117634795570068_);stroke-width:5;stroke-miterlimit:10;}
	.st144{fill:none;stroke:url(#SVGID_00000054239915491683840770000005430746058649738664_);stroke-width:5;stroke-miterlimit:10;}
	.st145{fill:none;stroke:url(#SVGID_00000132070142119578294570000010307998783161211285_);stroke-width:5;stroke-miterlimit:10;}
	.st146{fill:none;stroke:url(#SVGID_00000029017975496332145100000010423097961941432458_);stroke-width:5;stroke-miterlimit:10;}
	.st147{fill:none;stroke:url(#SVGID_00000160171018853486708930000017245322569085794967_);stroke-width:5;stroke-miterlimit:10;}
	.st148{fill:none;stroke:url(#SVGID_00000115514444799447629560000006038347170468476858_);stroke-width:5;stroke-miterlimit:10;}
	.st149{fill:none;stroke:url(#SVGID_00000073681575907552194520000004453507388697710253_);stroke-width:5;stroke-miterlimit:10;}
	.st150{fill:none;stroke:url(#SVGID_00000008131888057925507410000014135654435796038547_);stroke-width:5;stroke-miterlimit:10;}
	.st151{fill:none;stroke:url(#SVGID_00000114766854745708244490000003491137928265155742_);stroke-width:5;stroke-miterlimit:10;}
	.st152{fill:none;stroke:url(#SVGID_00000137822457993682600630000008116636510510267270_);stroke-width:5;stroke-miterlimit:10;}
	.st153{fill:none;stroke:url(#SVGID_00000065787355192961699780000002216316436222616741_);stroke-width:5;stroke-miterlimit:10;}
	.st154{fill:none;stroke:url(#SVGID_00000158751041575611506820000000021107695557966012_);stroke-width:5;stroke-miterlimit:10;}
	.st155{fill:none;stroke:url(#SVGID_00000080919362883751060930000016023686073584905866_);stroke-width:5;stroke-miterlimit:10;}
	.st156{fill:none;stroke:url(#SVGID_00000135680139157801466770000009616510136904981171_);stroke-width:5;stroke-miterlimit:10;}
	.st157{fill:none;stroke:url(#SVGID_00000139295392992611807310000002273691859038170785_);stroke-width:5;stroke-miterlimit:10;}
	.st158{fill:none;stroke:url(#SVGID_00000124854444813742982250000016827023168389575316_);stroke-width:5;stroke-miterlimit:10;}
	.st159{fill:none;stroke:url(#SVGID_00000051362107904549324810000013420088189427568015_);stroke-width:5;stroke-miterlimit:10;}
	.st160{fill:none;stroke:url(#SVGID_00000069400308146107686460000011750810831821115063_);stroke-width:5;stroke-miterlimit:10;}
	.st161{fill:none;stroke:url(#SVGID_00000060709860605794185320000003429035099515703985_);stroke-width:5;stroke-miterlimit:10;}
	.st162{fill:none;stroke:url(#SVGID_00000107578078134441303370000007124048552455332515_);stroke-width:5;stroke-miterlimit:10;}
	.st163{fill:none;stroke:url(#SVGID_00000134221215268321318030000013626773960072020394_);stroke-width:5;stroke-miterlimit:10;}
	.st164{fill:none;stroke:url(#SVGID_00000102543157236958984970000012940659604655003539_);stroke-width:5;stroke-miterlimit:10;}
	.st165{fill:none;stroke:url(#SVGID_00000111157975911645384150000011796497375106214280_);stroke-width:5;stroke-miterlimit:10;}
	.st166{fill:none;stroke:url(#SVGID_00000095329415028924284430000008428684107072686505_);stroke-width:5;stroke-miterlimit:10;}
	.st167{fill:none;stroke:url(#SVGID_00000014621035806541151170000000467916282088546743_);stroke-width:5;stroke-miterlimit:10;}
	.st168{fill:none;stroke:url(#SVGID_00000172411910706464202030000007880271469304968856_);stroke-width:5;stroke-miterlimit:10;}
	.st169{fill:none;stroke:url(#SVGID_00000097467632177454747130000015920272161035589532_);stroke-width:5;stroke-miterlimit:10;}
	.st170{fill:none;stroke:url(#SVGID_00000018224847520583304110000010375332986654869179_);stroke-width:5;stroke-miterlimit:10;}
	.st171{fill:none;stroke:url(#SVGID_00000153683488792605754090000013964904151400417215_);stroke-width:5;stroke-miterlimit:10;}
	.st172{fill:none;stroke:url(#SVGID_00000096742079297961558140000013113367150666350734_);stroke-width:5;stroke-miterlimit:10;}
	.st173{fill:none;stroke:url(#SVGID_00000109026582917991442220000015325860948827979400_);stroke-width:5;stroke-miterlimit:10;}
	.st174{fill:none;stroke:url(#SVGID_00000072269672573927719180000006184419712149187749_);stroke-width:5;stroke-miterlimit:10;}
	.st175{fill:none;stroke:url(#SVGID_00000031913224269419552560000001186399608601714059_);stroke-width:5;stroke-miterlimit:10;}
	.st176{fill:none;stroke:url(#SVGID_00000090275425151096046310000009247821072575841430_);stroke-width:5;stroke-miterlimit:10;}
	.st177{fill:none;stroke:url(#SVGID_00000157281797883690809350000001707011766559905155_);stroke-width:5;stroke-miterlimit:10;}
	.st178{fill:none;stroke:url(#SVGID_00000001626050341965524590000014181443492502809737_);stroke-width:5;stroke-miterlimit:10;}
	.st179{fill:none;stroke:url(#SVGID_00000085235159434903551850000001914556320944674439_);stroke-width:5;stroke-miterlimit:10;}
	.st180{fill:none;stroke:url(#SVGID_00000096758145765871038250000011271958903353428378_);stroke-width:5;stroke-miterlimit:10;}
	.st181{fill:none;stroke:url(#SVGID_00000114782939256225768450000008730694137816860303_);stroke-width:5;stroke-miterlimit:10;}
	.st182{fill:none;stroke:url(#SVGID_00000107554747513931422210000002541858802449964945_);stroke-width:5;stroke-miterlimit:10;}
	.st183{fill:none;stroke:url(#SVGID_00000116931614747529790790000010855112819507358875_);stroke-width:5;stroke-miterlimit:10;}
	.st184{fill:none;stroke:url(#SVGID_00000105427415909295254790000000185738707286971008_);stroke-width:5;stroke-miterlimit:10;}
	.st185{fill:none;stroke:url(#SVGID_00000093894616006804096910000000639750542531299007_);stroke-width:5;stroke-miterlimit:10;}
	.st186{fill:none;stroke:url(#SVGID_00000063606025823076849130000009664112137161458359_);stroke-width:5;stroke-miterlimit:10;}
	.st187{fill:none;stroke:url(#SVGID_00000070799235951359580930000001361700777049503385_);stroke-width:5;stroke-miterlimit:10;}
	.st188{fill:none;stroke:url(#SVGID_00000163781170011613723670000004132486132229631162_);stroke-width:5;stroke-miterlimit:10;}
	.st189{fill:none;stroke:url(#SVGID_00000067951913084904503850000003097681837288707201_);stroke-width:5;stroke-miterlimit:10;}
	.st190{fill:none;stroke:url(#SVGID_00000059268952404469204420000010043136548961333149_);stroke-width:5;stroke-miterlimit:10;}
	.st191{fill:none;stroke:url(#SVGID_00000098937868177210759360000008850743351685897379_);stroke-width:5;stroke-miterlimit:10;}
	.st192{fill:none;stroke:url(#SVGID_00000124148318205264145110000011011237420395773848_);stroke-width:5;stroke-miterlimit:10;}
	.st193{fill:none;stroke:url(#SVGID_00000166647236732747623210000003974681264039691157_);stroke-width:5;stroke-miterlimit:10;}
	.st194{fill:none;stroke:url(#SVGID_00000004527251796857997850000017231720107554392742_);stroke-width:5;stroke-miterlimit:10;}
	.st195{fill:none;stroke:url(#SVGID_00000156548031804148300400000004347254282148332674_);stroke-width:5;stroke-miterlimit:10;}
	.st196{fill:none;stroke:url(#SVGID_00000111160500733791294190000016105503294234803387_);stroke-width:5;stroke-miterlimit:10;}
	.st197{fill:none;stroke:url(#SVGID_00000008107883777863030950000006104525450370205858_);stroke-width:5;stroke-miterlimit:10;}
	.st198{fill:none;stroke:url(#SVGID_00000144324191436601783660000015887365208115143040_);stroke-width:5;stroke-miterlimit:10;}
	.st199{fill:none;stroke:url(#SVGID_00000066517959197972028490000009881444364898800569_);stroke-width:5;stroke-miterlimit:10;}
	.st200{fill:none;stroke:url(#SVGID_00000113345733670153472110000003330974647446081666_);stroke-width:5;stroke-miterlimit:10;}
	.st201{fill:none;stroke:url(#SVGID_00000151512322988953826230000000068956367469679745_);stroke-width:5;stroke-miterlimit:10;}
	.st202{fill:none;stroke:url(#SVGID_00000088828810278578599610000007670743873603350939_);stroke-width:5;stroke-miterlimit:10;}
	.st203{fill:none;stroke:url(#SVGID_00000001653351069891019140000013659089616142036138_);stroke-width:5;stroke-miterlimit:10;}
	.st204{clip-path:url(#SVGID_00000063600701861291676710000014449124631234970538_);}
	.st205{fill:#989898;}
	.st206{fill:#A2A1A1;}
	.st207{fill:#ACABAA;}
	.st208{fill:#B6B4B4;}
	.st209{fill:#C0BFBE;}
	.st210{fill:#CCCACA;}
	.st211{fill:#D7D5D5;}
	.st212{fill:#E3E1E1;}
	.st213{fill:#EFEEED;}
	.st214{fill:#FFFFFF;}
	.st215{fill:#F6F5F5;}
	.st216{fill:#F0EFEF;}
	.st217{fill:#EBEAE9;}
	.st218{fill:#E5E4E4;}
	.st219{fill:#E0DFDF;}
	.st220{fill:#DBDADA;}
	.st221{fill:#D5D5D5;}
	.st222{fill:#D1D1D1;}
	.st223{fill:#CCCBCB;}
</style><g transform="translate(-25.5,-25.5)"><linearGradient id="a" x1="66.676" x2="189.32" y1="21.784" y2="234.22" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#414A73" offset="1"/></linearGradient><path class="st0" d="m183.14 228h-110.28c-24.67 0-44.86-20.19-44.86-44.86v-110.28c0-24.67 20.19-44.86 44.86-44.86h110.28c24.67 0 44.86 20.19 44.86 44.86v110.28c0 24.67-20.19 44.86-44.86 44.86z" stroke="url(#a)"/><linearGradient id="bn" x1="66.795" x2="189.21" y1="21.989" y2="234.01" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#414A73" offset="1"/></linearGradient><path d="m183.03 227.8h-110.06c-24.62 0-44.77-20.15-44.77-44.77v-110.06c0-24.62 20.15-44.77 44.77-44.77h110.06c24.62 0 44.77 20.15 44.77 44.77v110.06c0 24.63-20.14 44.77-44.77 44.77z" fill="none" stroke="url(#bn)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cz" x1="66.914" x2="189.09" y1="22.195" y2="233.8" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#414A73" offset="1"/></linearGradient><path d="m182.92 227.6h-109.84c-24.58 0-44.68-20.11-44.68-44.68v-109.84c0-24.58 20.1-44.68 44.68-44.68h109.84c24.58 0 44.68 20.11 44.68 44.68v109.84c0 24.58-20.1 44.68-44.68 44.68z" fill="none" stroke="url(#cz)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fj" x1="67.033" x2="188.97" y1="22.401" y2="233.6" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#424A74" offset="1"/></linearGradient><path d="m182.81 227.41h-109.62c-24.53 0-44.59-20.07-44.59-44.59v-109.63c0-24.53 20.07-44.59 44.59-44.59h109.63c24.53 0 44.59 20.07 44.59 44.59v109.63c0 24.52-20.07 44.59-44.6 44.59z" fill="none" stroke="url(#fj)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ey" x1="67.151" x2="188.85" y1="22.607" y2="233.39" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#424A74" offset="1"/></linearGradient><path d="m182.7 227.21h-109.4c-24.48 0-44.5-20.03-44.5-44.5v-109.41c0-24.48 20.03-44.5 44.5-44.5h109.4c24.48 0 44.5 20.03 44.5 44.5v109.4c0.01 24.48-20.02 44.51-44.5 44.51z" fill="none" stroke="url(#ey)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ep" x1="67.27" x2="188.73" y1="22.813" y2="233.19" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#424B74" offset="1"/></linearGradient><path d="m182.59 227.01h-109.18c-24.43 0-44.42-19.99-44.42-44.42v-109.18c0-24.43 19.99-44.42 44.42-44.42h109.19c24.43 0 44.42 19.99 44.42 44.42v109.19c-0.01 24.42-20 44.41-44.43 44.41z" fill="none" stroke="url(#ep)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="j" x1="67.389" x2="188.61" y1="23.019" y2="232.98" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#424B74" offset="1"/></linearGradient><path d="m182.49 226.81h-108.98c-24.38 0-44.33-19.95-44.33-44.33v-108.97c0-24.38 19.95-44.33 44.33-44.33h108.97c24.38 0 44.33 19.95 44.33 44.33v108.97c0 24.39-19.94 44.33-44.32 44.33z" fill="none" stroke="url(#j)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cw" x1="67.508" x2="188.49" y1="23.225" y2="232.78" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#424B75" offset="1"/></linearGradient><path d="m182.38 226.61h-108.76c-24.33 0-44.24-19.91-44.24-44.24v-108.75c0-24.33 19.91-44.24 44.24-44.24h108.75c24.33 0 44.24 19.91 44.24 44.24v108.75c0 24.34-19.9 44.24-44.23 44.24z" fill="none" stroke="url(#cw)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="eq" x1="67.627" x2="188.37" y1="23.431" y2="232.57" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#424B75" offset="1"/></linearGradient><path d="m182.27 226.42h-108.54c-24.28 0-44.15-19.87-44.15-44.15v-108.54c0-24.28 19.87-44.15 44.15-44.15h108.54c24.28 0 44.15 19.87 44.15 44.15v108.54c0 24.28-19.87 44.15-44.15 44.15z" fill="none" stroke="url(#eq)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="eg" x1="67.746" x2="188.25" y1="23.637" y2="232.36" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#434B75" offset="1"/></linearGradient><path d="m182.16 226.22h-108.32c-24.23 0-44.06-19.83-44.06-44.06v-108.32c0-24.23 19.83-44.06 44.06-44.06h108.32c24.23 0 44.06 19.83 44.06 44.06v108.32c0 24.23-19.83 44.06-44.06 44.06z" fill="none" stroke="url(#eg)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ag" x1="67.865" x2="188.14" y1="23.843" y2="232.16" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#434C76" offset="1"/></linearGradient><path d="m182.05 226.02h-108.1c-24.18 0-43.97-19.79-43.97-43.97v-108.1c0-24.18 19.79-43.97 43.97-43.97h108.1c24.18 0 43.97 19.79 43.97 43.97v108.1c0 24.18-19.79 43.97-43.97 43.97z" fill="none" stroke="url(#ag)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="i" x1="67.983" x2="188.02" y1="24.048" y2="231.95" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#434C76" offset="1"/></linearGradient><path d="m181.94 225.82h-107.88c-24.14 0-43.88-19.75-43.88-43.88v-107.88c0-24.14 19.75-43.88 43.88-43.88h107.88c24.14 0 43.88 19.75 43.88 43.88v107.88c0 24.14-19.74 43.88-43.88 43.88z" fill="none" stroke="url(#i)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gp" x1="68.102" x2="187.9" y1="24.254" y2="231.75" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#434C76" offset="1"/></linearGradient><path d="m181.83 225.63h-107.66c-24.09 0-43.79-19.71-43.79-43.79v-107.67c0-24.09 19.71-43.79 43.79-43.79h107.66c24.09 0 43.79 19.71 43.79 43.79v107.66c0.01 24.09-19.7 43.8-43.79 43.8z" fill="none" stroke="url(#gp)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="e" x1="68.221" x2="187.78" y1="24.46" y2="231.54" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#434C76" offset="1"/></linearGradient><path d="m181.72 225.43h-107.44c-24.04 0-43.71-19.67-43.71-43.71v-107.44c0-24.04 19.67-43.71 43.71-43.71h107.44c24.04 0 43.71 19.67 43.71 43.71v107.44c0 24.04-19.67 43.71-43.71 43.71z" fill="none" stroke="url(#e)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="eo" x1="68.34" x2="187.66" y1="24.666" y2="231.33" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#444C76" offset="1"/></linearGradient><path d="m181.61 225.23h-107.22c-23.99 0-43.62-19.63-43.62-43.62v-107.22c0-23.99 19.63-43.62 43.62-43.62h107.23c23.99 0 43.62 19.63 43.62 43.62v107.23c-0.01 23.98-19.64 43.61-43.63 43.61z" fill="none" stroke="url(#eo)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ea" x1="68.459" x2="187.54" y1="24.872" y2="231.13" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#444C77" offset="1"/></linearGradient><path d="m181.5 225.03h-107c-23.94 0-43.53-19.59-43.53-43.53v-107c0-23.94 19.59-43.53 43.53-43.53h107c23.94 0 43.53 19.59 43.53 43.53v107c0 23.94-19.59 43.53-43.53 43.53z" fill="none" stroke="url(#ea)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cp" x1="68.578" x2="187.42" y1="25.078" y2="230.92" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#444C77" offset="1"/></linearGradient><path d="m181.39 224.83h-106.78c-23.89 0-43.44-19.55-43.44-43.44v-106.78c0-23.89 19.55-43.44 43.44-43.44h106.79c23.89 0 43.44 19.55 43.44 43.44v106.79c-0.01 23.89-19.55 43.43-43.45 43.43z" fill="none" stroke="url(#cp)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gm" x1="68.697" x2="187.3" y1="25.284" y2="230.72" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#444C77" offset="1"/></linearGradient><path d="m181.29 224.64h-106.58c-23.84 0-43.35-19.51-43.35-43.35v-106.58c0-23.84 19.51-43.35 43.35-43.35h106.57c23.84 0 43.35 19.51 43.35 43.35v106.57c0.01 23.85-19.5 43.36-43.34 43.36z" fill="none" stroke="url(#gm)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fy" x1="68.816" x2="187.18" y1="25.49" y2="230.51" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#444D77" offset="1"/></linearGradient><path d="m181.18 224.44h-106.36c-23.79 0-43.26-19.47-43.26-43.26v-106.36c0-23.79 19.47-43.26 43.26-43.26h106.35c23.79 0 43.26 19.47 43.26 43.26v106.35c0.01 23.8-19.46 43.27-43.25 43.27z" fill="none" stroke="url(#fy)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dn" x1="68.935" x2="187.07" y1="25.696" y2="230.3" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#444D78" offset="1"/></linearGradient><path d="m181.07 224.24h-106.14c-23.75 0-43.17-19.43-43.17-43.17v-106.14c0-23.75 19.43-43.17 43.17-43.17h106.13c23.75 0 43.17 19.43 43.17 43.17v106.13c0.01 23.75-19.42 43.18-43.16 43.18z" fill="none" stroke="url(#dn)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fi" x1="69.053" x2="186.95" y1="25.902" y2="230.1" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#454D78" offset="1"/></linearGradient><path d="m180.96 224.04h-105.92c-23.7 0-43.08-19.39-43.08-43.08v-105.92c0-23.7 19.39-43.08 43.08-43.08h105.92c23.7 0 43.08 19.39 43.08 43.08v105.92c0 23.69-19.39 43.08-43.08 43.08z" fill="none" stroke="url(#fi)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dc" x1="69.172" x2="186.83" y1="26.107" y2="229.89" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#454D78" offset="1"/></linearGradient><path d="m180.85 223.84h-105.7c-23.65 0-43-19.35-43-43v-105.69c0-23.65 19.35-43 43-43h105.7c23.65 0 43 19.35 43 43v105.7c-0.01 23.65-19.35 42.99-43 42.99z" fill="none" stroke="url(#dc)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="di" x1="69.291" x2="186.71" y1="26.313" y2="229.69" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#454D79" offset="1"/></linearGradient><path d="m180.74 223.65h-105.48c-23.6 0-42.91-19.31-42.91-42.91v-105.48c0-23.6 19.31-42.91 42.91-42.91h105.48c23.6 0 42.91 19.31 42.91 42.91v105.48c0 23.6-19.31 42.91-42.91 42.91z" fill="none" stroke="url(#di)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="by" x1="69.41" x2="186.59" y1="26.519" y2="229.48" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#454D79" offset="1"/></linearGradient><path d="m180.63 223.45h-105.26c-23.55 0-42.82-19.27-42.82-42.82v-105.26c0-23.55 19.27-42.82 42.82-42.82h105.26c23.55 0 42.82 19.27 42.82 42.82v105.26c0 23.55-19.27 42.82-42.82 42.82z" fill="none" stroke="url(#by)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gn" x1="69.529" x2="186.47" y1="26.725" y2="229.27" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#454D79" offset="1"/></linearGradient><path d="m180.52 223.25h-105.04c-23.5 0-42.73-19.23-42.73-42.73v-105.04c0-23.5 19.23-42.73 42.73-42.73h105.04c23.5 0 42.73 19.23 42.73 42.73v105.04c0 23.5-19.23 42.73-42.73 42.73z" fill="none" stroke="url(#gn)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bu" x1="69.648" x2="186.35" y1="26.931" y2="229.07" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#454E79" offset="1"/></linearGradient><path d="m180.41 223.05h-104.82c-23.45 0-42.64-19.19-42.64-42.64v-104.82c0-23.45 19.19-42.64 42.64-42.64h104.83c23.45 0 42.64 19.19 42.64 42.64v104.83c-0.01 23.44-19.2 42.63-42.65 42.63z" fill="none" stroke="url(#bu)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gb" x1="69.767" x2="186.23" y1="27.137" y2="228.86" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#464E7A" offset="1"/></linearGradient><path d="m180.3 222.86h-104.6c-23.4 0-42.55-19.15-42.55-42.55v-104.61c0-23.4 19.15-42.55 42.55-42.55h104.6c23.4 0 42.55 19.15 42.55 42.55v104.6c0.01 23.41-19.14 42.56-42.55 42.56z" fill="none" stroke="url(#gb)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cl" x1="69.886" x2="186.11" y1="27.343" y2="228.66" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#464E7A" offset="1"/></linearGradient><path d="m180.19 222.66h-104.38c-23.35 0-42.46-19.11-42.46-42.46v-104.39c0-23.35 19.11-42.46 42.46-42.46h104.39c23.35 0 42.46 19.11 42.46 42.46v104.39c0 23.35-19.11 42.46-42.47 42.46z" fill="none" stroke="url(#cl)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fx" x1="70.004" x2="186" y1="27.549" y2="228.45" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#464E7A" offset="1"/></linearGradient><path d="m180.09 222.46h-104.18c-23.31 0-42.37-19.07-42.37-42.37v-104.18c0-23.31 19.07-42.37 42.37-42.37h104.17c23.31 0 42.37 19.07 42.37 42.37v104.17c0.01 23.31-19.06 42.38-42.36 42.38z" fill="none" stroke="url(#fx)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bd" x1="70.123" x2="185.88" y1="27.755" y2="228.25" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#464F7A" offset="1"/></linearGradient><path d="m179.98 222.26h-103.96c-23.26 0-42.29-19.03-42.29-42.29v-103.95c0-23.26 19.03-42.29 42.29-42.29h103.95c23.26 0 42.29 19.03 42.29 42.29v103.95c0 23.26-19.03 42.29-42.28 42.29z" fill="none" stroke="url(#bd)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ei" x1="70.242" x2="185.76" y1="27.961" y2="228.04" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#464F7B" offset="1"/></linearGradient><path d="m179.87 222.06h-103.74c-23.21 0-42.2-18.99-42.2-42.2v-103.73c0-23.21 18.99-42.2 42.2-42.2h103.73c23.21 0 42.2 18.99 42.2 42.2v103.73c0 23.22-18.98 42.2-42.19 42.2z" fill="none" stroke="url(#ei)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bt" x1="70.361" x2="185.64" y1="28.166" y2="227.83" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#464F7B" offset="1"/></linearGradient><path d="m179.76 221.87h-103.52c-23.16 0-42.11-18.95-42.11-42.11v-103.52c0-23.16 18.95-42.11 42.11-42.11h103.52c23.16 0 42.11 18.95 42.11 42.11v103.52c0 23.16-18.95 42.11-42.11 42.11z" fill="none" stroke="url(#bt)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ap" x1="70.48" x2="185.52" y1="28.372" y2="227.63" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#474F7B" offset="1"/></linearGradient><path d="m179.65 221.67h-103.3c-23.11 0-42.02-18.91-42.02-42.02v-103.3c0-23.11 18.91-42.02 42.02-42.02h103.3c23.11 0 42.02 18.91 42.02 42.02v103.3c0 23.11-18.91 42.02-42.02 42.02z" fill="none" stroke="url(#ap)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cu" x1="70.599" x2="185.4" y1="28.578" y2="227.42" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#474F7B" offset="1"/></linearGradient><path d="m179.54 221.47h-103.08c-23.06 0-41.93-18.87-41.93-41.93v-103.08c0-23.06 18.87-41.93 41.93-41.93h103.08c23.06 0 41.93 18.87 41.93 41.93v103.08c0 23.06-18.87 41.93-41.93 41.93z" fill="none" stroke="url(#cu)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bm" x1="70.718" x2="185.28" y1="28.784" y2="227.22" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#47507C" offset="1"/></linearGradient><path d="m179.43 221.27h-102.86c-23.01 0-41.84-18.83-41.84-41.84v-102.86c0-23.01 18.83-41.84 41.84-41.84h102.86c23.01 0 41.84 18.83 41.84 41.84v102.86c0 23.01-18.83 41.84-41.84 41.84z" fill="none" stroke="url(#bm)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cd" x1="70.837" x2="185.16" y1="28.99" y2="227.01" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#47507C" offset="1"/></linearGradient><path d="m179.32 221.07h-102.64c-22.96 0-41.75-18.79-41.75-41.75v-102.64c0-22.96 18.79-41.75 41.75-41.75h102.64c22.96 0 41.75 18.79 41.75 41.75v102.64c0 22.97-18.78 41.75-41.75 41.75z" fill="none" stroke="url(#cd)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="az" x1="70.955" x2="185.04" y1="29.196" y2="226.8" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#47507C" offset="1"/></linearGradient><path d="m179.21 220.88h-102.42c-22.92 0-41.66-18.75-41.66-41.66v-102.43c0-22.92 18.75-41.66 41.66-41.66h102.42c22.92 0 41.66 18.75 41.66 41.66v102.42c0.01 22.92-18.74 41.67-41.66 41.67z" fill="none" stroke="url(#az)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gf" x1="71.074" x2="184.93" y1="29.402" y2="226.6" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#48507C" offset="1"/></linearGradient><path d="m179.1 220.68h-102.2c-22.87 0-41.58-18.71-41.58-41.58v-102.2c0-22.87 18.71-41.58 41.58-41.58h102.2c22.87 0 41.58 18.71 41.58 41.58v102.2c0 22.87-18.71 41.58-41.58 41.58z" fill="none" stroke="url(#gf)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gk" x1="71.193" x2="184.81" y1="29.608" y2="226.39" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#48507C" offset="1"/></linearGradient><path d="m178.99 220.48h-101.98c-22.82 0-41.49-18.67-41.49-41.49v-101.98c0-22.82 18.67-41.49 41.49-41.49h101.99c22.82 0 41.49 18.67 41.49 41.49v101.99c-0.01 22.81-18.68 41.48-41.5 41.48z" fill="none" stroke="url(#gk)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ca" x1="71.312" x2="184.69" y1="29.814" y2="226.19" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#48507D" offset="1"/></linearGradient><path d="m178.89 220.28h-101.78c-22.77 0-41.4-18.63-41.4-41.4v-101.77c0-22.77 18.63-41.4 41.4-41.4h101.77c22.77 0 41.4 18.63 41.4 41.4v101.77c0 22.77-18.63 41.4-41.39 41.4z" fill="none" stroke="url(#ca)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="x" x1="71.431" x2="184.57" y1="30.02" y2="225.98" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#48517D" offset="1"/></linearGradient><path d="m178.78 220.08h-101.56c-22.72 0-41.31-18.59-41.31-41.31v-101.55c0-22.72 18.59-41.31 41.31-41.31h101.55c22.72 0 41.31 18.59 41.31 41.31v101.55c0 22.73-18.58 41.31-41.3 41.31z" fill="none" stroke="url(#x)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dv" x1="71.55" x2="184.45" y1="30.225" y2="225.77" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#48517D" offset="1"/></linearGradient><path d="m178.67 219.89h-101.34c-22.67 0-41.22-18.55-41.22-41.22v-101.34c0-22.67 18.55-41.22 41.22-41.22h101.33c22.67 0 41.22 18.55 41.22 41.22v101.33c0.01 22.68-18.54 41.23-41.21 41.23z" fill="none" stroke="url(#dv)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dh" x1="71.669" x2="184.33" y1="30.431" y2="225.57" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#48517D" offset="1"/></linearGradient><path d="m178.56 219.69h-101.12c-22.62 0-41.13-18.51-41.13-41.13v-101.12c0-22.62 18.51-41.13 41.13-41.13h101.12c22.62 0 41.13 18.51 41.13 41.13v101.12c0 22.62-18.51 41.13-41.13 41.13z" fill="none" stroke="url(#dh)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bf" x1="71.788" x2="184.21" y1="30.637" y2="225.36" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#49517E" offset="1"/></linearGradient><path d="m178.45 219.49h-100.9c-22.57 0-41.04-18.47-41.04-41.04v-100.9c0-22.57 18.47-41.04 41.04-41.04h100.9c22.57 0 41.04 18.47 41.04 41.04v100.9c0 22.57-18.47 41.04-41.04 41.04z" fill="none" stroke="url(#bf)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="o" x1="71.907" x2="184.09" y1="30.843" y2="225.16" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#49527E" offset="1"/></linearGradient><path d="m178.34 219.29h-100.68c-22.52 0-40.95-18.43-40.95-40.95v-100.68c0-22.52 18.43-40.95 40.95-40.95h100.68c22.52 0 40.95 18.43 40.95 40.95v100.68c0 22.52-18.43 40.95-40.95 40.95z" fill="none" stroke="url(#o)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cb" x1="72.025" x2="183.97" y1="31.049" y2="224.95" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#49527E" offset="1"/></linearGradient><path d="m178.23 219.1h-100.46c-22.48 0-40.86-18.39-40.86-40.86v-100.47c0-22.48 18.39-40.86 40.86-40.86h100.46c22.48 0 40.86 18.39 40.86 40.86v100.46c0.01 22.48-18.38 40.87-40.86 40.87z" fill="none" stroke="url(#cb)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ba" x1="72.144" x2="183.86" y1="31.255" y2="224.75" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#49527E" offset="1"/></linearGradient><path d="m178.12 218.9h-100.24c-22.43 0-40.78-18.35-40.78-40.78v-100.24c0-22.43 18.35-40.78 40.78-40.78h100.24c22.43 0 40.78 18.35 40.78 40.78v100.24c0 22.43-18.35 40.78-40.78 40.78z" fill="none" stroke="url(#ba)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gr" x1="72.263" x2="183.74" y1="31.461" y2="224.54" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#49527F" offset="1"/></linearGradient><path d="m178.01 218.7h-100.02c-22.38 0-40.69-18.31-40.69-40.69v-100.02c0-22.38 18.31-40.69 40.69-40.69h100.02c22.38 0 40.69 18.31 40.69 40.69v100.02c0 22.38-18.31 40.69-40.69 40.69z" fill="none" stroke="url(#gr)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ai" x1="72.382" x2="183.62" y1="31.667" y2="224.33" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#49527F" offset="1"/></linearGradient><path d="m177.9 218.5h-99.8c-22.33 0-40.6-18.27-40.6-40.6v-99.8c0-22.33 18.27-40.6 40.6-40.6h99.81c22.33 0 40.6 18.27 40.6 40.6v99.81c-0.01 22.32-18.28 40.59-40.61 40.59z" fill="none" stroke="url(#ai)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="w" x1="72.501" x2="183.5" y1="31.873" y2="224.13" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4A527F" offset="1"/></linearGradient><path d="m177.79 218.3h-99.58c-22.28 0-40.51-18.23-40.51-40.51v-99.58c0-22.28 18.23-40.51 40.51-40.51h99.59c22.28 0 40.51 18.23 40.51 40.51v99.59c-0.01 22.27-18.24 40.5-40.52 40.5z" fill="none" stroke="url(#w)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gd" x1="72.62" x2="183.38" y1="32.078" y2="223.92" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4A527F" offset="1"/></linearGradient><path d="m177.68 218.11h-99.36c-22.23 0-40.42-18.19-40.42-40.42v-99.37c0-22.23 18.19-40.42 40.42-40.42h99.37c22.23 0 40.42 18.19 40.42 40.42v99.37c0 22.23-18.19 40.42-40.43 40.42z" fill="none" stroke="url(#gd)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cg" x1="72.739" x2="183.26" y1="32.284" y2="223.72" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4A5380" offset="1"/></linearGradient><path d="m177.58 217.91h-99.16c-22.18 0-40.33-18.15-40.33-40.33v-99.16c0-22.18 18.15-40.33 40.33-40.33h99.15c22.18 0 40.33 18.15 40.33 40.33v99.15c0.01 22.19-18.14 40.34-40.32 40.34z" fill="none" stroke="url(#cg)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="b" x1="72.857" x2="183.14" y1="32.49" y2="223.51" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4A5380" offset="1"/></linearGradient><path d="m177.47 217.71h-98.94c-22.13 0-40.24-18.11-40.24-40.24v-98.94c0-22.13 18.11-40.24 40.24-40.24h98.93c22.13 0 40.24 18.11 40.24 40.24v98.93c0.01 22.14-18.1 40.25-40.23 40.25z" fill="none" stroke="url(#b)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gs" x1="72.976" x2="183.02" y1="32.696" y2="223.3" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4A5380" offset="1"/></linearGradient><path d="m177.36 217.51h-98.72c-22.09 0-40.15-18.07-40.15-40.15v-98.72c0-22.09 18.07-40.15 40.15-40.15h98.71c22.09 0 40.15 18.07 40.15 40.15v98.71c0.01 22.09-18.06 40.16-40.14 40.16z" fill="none" stroke="url(#gs)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ec" x1="73.095" x2="182.9" y1="32.902" y2="223.1" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4A5380" offset="1"/></linearGradient><path d="m177.25 217.31h-98.5c-22.04 0-40.07-18.03-40.07-40.07v-98.5c0-22.04 18.03-40.07 40.07-40.07h98.5c22.04 0 40.07 18.03 40.07 40.07v98.5c-0.01 22.04-18.04 40.07-40.07 40.07z" fill="none" stroke="url(#ec)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ef" x1="73.214" x2="182.79" y1="33.108" y2="222.89" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4B5380" offset="1"/></linearGradient><path d="m177.14 217.12h-98.28c-21.99 0-39.98-17.99-39.98-39.98v-98.28c0-21.99 17.99-39.98 39.98-39.98h98.28c21.99 0 39.98 17.99 39.98 39.98v98.28c0 21.99-17.99 39.98-39.98 39.98z" fill="none" stroke="url(#ef)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ct" x1="73.333" x2="182.67" y1="33.314" y2="222.69" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4B5380" offset="1"/></linearGradient><path d="m177.03 216.92h-98.06c-21.94 0-39.89-17.95-39.89-39.89v-98.06c0-21.94 17.95-39.89 39.89-39.89h98.06c21.94 0 39.89 17.95 39.89 39.89v98.06c0 21.94-17.95 39.89-39.89 39.89z" fill="none" stroke="url(#ct)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="be" x1="73.452" x2="182.55" y1="33.52" y2="222.48" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4B5380" offset="1"/></linearGradient><path d="m176.92 216.72h-97.84c-21.89 0-39.8-17.91-39.8-39.8v-97.84c0-21.89 17.91-39.8 39.8-39.8h97.84c21.89 0 39.8 17.91 39.8 39.8v97.84c0 21.89-17.91 39.8-39.8 39.8z" fill="none" stroke="url(#be)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="v" x1="73.571" x2="182.43" y1="33.726" y2="222.27" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4B5481" offset="1"/></linearGradient><path d="m176.81 216.52h-97.62c-21.84 0-39.71-17.87-39.71-39.71v-97.62c0-21.84 17.87-39.71 39.71-39.71h97.62c21.84 0 39.71 17.87 39.71 39.71v97.62c0 21.84-17.87 39.71-39.71 39.71z" fill="none" stroke="url(#v)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="p" x1="73.69" x2="182.31" y1="33.932" y2="222.07" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4B5481" offset="1"/></linearGradient><path d="m176.7 216.32h-97.4c-21.79 0-39.62-17.83-39.62-39.62v-97.4c0-21.79 17.83-39.62 39.62-39.62h97.41c21.79 0 39.62 17.83 39.62 39.62v97.41c-0.01 21.78-17.84 39.61-39.63 39.61z" fill="none" stroke="url(#p)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cy" x1="73.809" x2="182.19" y1="34.138" y2="221.86" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4B5481" offset="1"/></linearGradient><path d="m176.59 216.13h-97.18c-21.74 0-39.53-17.79-39.53-39.53v-97.19c0-21.74 17.79-39.53 39.53-39.53h97.19c21.74 0 39.53 17.79 39.53 39.53v97.19c0 21.74-17.79 39.53-39.54 39.53z" fill="none" stroke="url(#cy)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cm" x1="73.927" x2="182.07" y1="34.343" y2="221.66" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4C5482" offset="1"/></linearGradient><path d="m176.48 215.93h-96.96c-21.69 0-39.44-17.75-39.44-39.44v-96.97c0-21.69 17.75-39.44 39.44-39.44h96.97c21.69 0 39.44 17.75 39.44 39.44v96.97c0 21.69-17.75 39.44-39.45 39.44z" fill="none" stroke="url(#cm)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gv" x1="74.046" x2="181.95" y1="34.549" y2="221.45" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4C5482" offset="1"/></linearGradient><path d="m176.38 215.73h-96.76c-21.65 0-39.36-17.71-39.36-39.36v-96.75c0-21.65 17.71-39.36 39.36-39.36h96.75c21.65 0 39.36 17.71 39.36 39.36v96.75c0 21.65-17.71 39.36-39.35 39.36z" fill="none" stroke="url(#gv)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="db" x1="74.165" x2="181.83" y1="34.755" y2="221.24" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4C5482" offset="1"/></linearGradient><path d="m176.27 215.53h-96.54c-21.6 0-39.27-17.67-39.27-39.27v-96.53c0-21.6 17.67-39.27 39.27-39.27h96.53c21.6 0 39.27 17.67 39.27 39.27v96.53c0 21.6-17.67 39.27-39.26 39.27z" fill="none" stroke="url(#db)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cv" x1="74.284" x2="181.72" y1="34.961" y2="221.04" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4C5582" offset="1"/></linearGradient><path d="m176.16 215.34h-96.32c-21.55 0-39.18-17.63-39.18-39.18v-96.32c0-21.55 17.63-39.18 39.18-39.18h96.31c21.55 0 39.18 17.63 39.18 39.18v96.31c0.01 21.56-17.62 39.19-39.17 39.19z" fill="none" stroke="url(#cv)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cc" x1="74.403" x2="181.6" y1="35.167" y2="220.83" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4C5583" offset="1"/></linearGradient><path d="m176.05 215.14h-96.1c-21.5 0-39.09-17.59-39.09-39.09v-96.1c0-21.5 17.59-39.09 39.09-39.09h96.1c21.5 0 39.09 17.59 39.09 39.09v96.1c0 21.5-17.59 39.09-39.09 39.09z" fill="none" stroke="url(#cc)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cx" x1="74.522" x2="181.48" y1="35.373" y2="220.63" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4C5583" offset="1"/></linearGradient><path d="m175.94 214.94h-95.88c-21.45 0-39-17.55-39-39v-95.88c0-21.45 17.55-39 39-39h95.88c21.45 0 39 17.55 39 39v95.88c0 21.45-17.55 39-39 39z" fill="none" stroke="url(#cx)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="an" x1="74.641" x2="181.36" y1="35.579" y2="220.42" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4C5583" offset="1"/></linearGradient><path d="m175.83 214.74h-95.66c-21.4 0-38.91-17.51-38.91-38.91v-95.66c0-21.4 17.51-38.91 38.91-38.91h95.66c21.4 0 38.91 17.51 38.91 38.91v95.66c0 21.4-17.51 38.91-38.91 38.91z" fill="none" stroke="url(#an)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dq" x1="74.759" x2="181.24" y1="35.785" y2="220.22" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4C5583" offset="1"/></linearGradient><path d="m175.72 214.54h-95.44c-21.35 0-38.82-17.47-38.82-38.82v-95.44c0-21.35 17.47-38.82 38.82-38.82h95.44c21.35 0 38.82 17.47 38.82 38.82v95.44c0 21.35-17.47 38.82-38.82 38.82z" fill="none" stroke="url(#dq)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="t" x1="74.878" x2="181.12" y1="35.991" y2="220.01" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4D5684" offset="1"/></linearGradient><path d="m175.61 214.35h-95.22c-21.3 0-38.73-17.43-38.73-38.73v-95.23c0-21.3 17.43-38.73 38.73-38.73h95.22c21.3 0 38.73 17.43 38.73 38.73v95.22c0.01 21.31-17.42 38.74-38.73 38.74z" fill="none" stroke="url(#t)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ak" x1="74.997" x2="181" y1="36.196" y2="219.8" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4D5684" offset="1"/></linearGradient><path d="m175.5 214.15h-95c-21.26 0-38.65-17.39-38.65-38.65v-95c0-21.26 17.39-38.65 38.65-38.65h95.01c21.26 0 38.65 17.39 38.65 38.65v95.01c-0.01 21.25-17.4 38.64-38.66 38.64z" fill="none" stroke="url(#ak)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ab" x1="75.116" x2="180.88" y1="36.402" y2="219.6" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4D5684" offset="1"/></linearGradient><path d="m175.39 213.95h-94.78c-21.21 0-38.56-17.35-38.56-38.56v-94.78c0-21.21 17.35-38.56 38.56-38.56h94.79c21.21 0 38.56 17.35 38.56 38.56v94.79c-0.01 21.2-17.36 38.55-38.57 38.55z" fill="none" stroke="url(#ab)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ac" x1="75.235" x2="180.76" y1="36.608" y2="219.39" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4D5684" offset="1"/></linearGradient><path d="m175.28 213.75h-94.56c-21.16 0-38.47-17.31-38.47-38.47v-94.56c0-21.16 17.31-38.47 38.47-38.47h94.57c21.16 0 38.47 17.31 38.47 38.47v94.57c-0.01 21.15-17.32 38.46-38.48 38.46z" fill="none" stroke="url(#ac)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bi" x1="75.354" x2="180.65" y1="36.814" y2="219.19" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4D5684" offset="1"/></linearGradient><path d="m175.18 213.55h-94.36c-21.11 0-38.38-17.27-38.38-38.38v-94.35c0-21.11 17.27-38.38 38.38-38.38h94.35c21.11 0 38.38 17.27 38.38 38.38v94.35c0 21.11-17.27 38.38-38.37 38.38z" fill="none" stroke="url(#bi)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bx" x1="75.473" x2="180.53" y1="37.02" y2="218.98" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4D5785" offset="1"/></linearGradient><path d="m175.07 213.36h-94.14c-21.06 0-38.29-17.23-38.29-38.29v-94.14c0-21.06 17.23-38.29 38.29-38.29h94.13c21.06 0 38.29 17.23 38.29 38.29v94.13c0.01 21.07-17.22 38.3-38.28 38.3z" fill="none" stroke="url(#bx)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="er" x1="75.592" x2="180.41" y1="37.226" y2="218.77" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4D5785" offset="1"/></linearGradient><path d="m174.96 213.16h-93.92c-21.01 0-38.2-17.19-38.2-38.2v-93.92c0-21.01 17.19-38.2 38.2-38.2h93.91c21.01 0 38.2 17.19 38.2 38.2v93.91c0.01 21.02-17.18 38.21-38.19 38.21z" fill="none" stroke="url(#er)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ee" x1="75.711" x2="180.29" y1="37.432" y2="218.57" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4E5786" offset="1"/></linearGradient><path d="m174.85 212.96h-93.7c-20.96 0-38.11-17.15-38.11-38.11v-93.7c0-20.96 17.15-38.11 38.11-38.11h93.7c20.96 0 38.11 17.15 38.11 38.11v93.7c0 20.96-17.15 38.11-38.11 38.11z" fill="none" stroke="url(#ee)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fv" x1="75.829" x2="180.17" y1="37.638" y2="218.36" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4E5786" offset="1"/></linearGradient><path d="m174.74 212.76h-93.48c-20.91 0-38.02-17.11-38.02-38.02v-93.48c0-20.91 17.11-38.02 38.02-38.02h93.48c20.91 0 38.02 17.11 38.02 38.02v93.48c0 20.91-17.11 38.02-38.02 38.02z" fill="none" stroke="url(#fv)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cj" x1="75.948" x2="180.05" y1="37.844" y2="218.16" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4E5786" offset="1"/></linearGradient><path d="m174.63 212.57h-93.26c-20.86 0-37.94-17.07-37.94-37.94v-93.26c0-20.86 17.07-37.94 37.94-37.94h93.26c20.86 0 37.94 17.07 37.94 37.94v93.26c0 20.86-17.08 37.94-37.94 37.94z" fill="none" stroke="url(#cj)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ax" x1="76.067" x2="179.93" y1="38.05" y2="217.95" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4E5886" offset="1"/></linearGradient><path d="m174.52 212.37h-93.04c-20.82 0-37.85-17.03-37.85-37.85v-93.04c0-20.82 17.03-37.85 37.85-37.85h93.04c20.82 0 37.85 17.03 37.85 37.85v93.04c0 20.82-17.03 37.85-37.85 37.85z" fill="none" stroke="url(#ax)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ft" x1="76.186" x2="179.81" y1="38.256" y2="217.74" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4E5887" offset="1"/></linearGradient><path d="m174.41 212.17h-92.82c-20.77 0-37.76-16.99-37.76-37.76v-92.82c0-20.77 16.99-37.76 37.76-37.76h92.82c20.77 0 37.76 16.99 37.76 37.76v92.82c0 20.77-16.99 37.76-37.76 37.76z" fill="none" stroke="url(#ft)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fd" x1="76.305" x2="179.7" y1="38.461" y2="217.54" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4E5887" offset="1"/></linearGradient><path d="m174.3 211.97h-92.6c-20.72 0-37.67-16.95-37.67-37.67v-92.6c0-20.72 16.95-37.67 37.67-37.67h92.6c20.72 0 37.67 16.95 37.67 37.67v92.6c0 20.72-16.95 37.67-37.67 37.67z" fill="none" stroke="url(#fd)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dr" x1="76.424" x2="179.58" y1="38.667" y2="217.33" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4E5887" offset="1"/></linearGradient><path d="m174.19 211.77h-92.38c-20.67 0-37.58-16.91-37.58-37.58v-92.38c0-20.67 16.91-37.58 37.58-37.58h92.39c20.67 0 37.58 16.91 37.58 37.58v92.39c-0.01 20.66-16.92 37.57-37.59 37.57z" fill="none" stroke="url(#dr)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dg" x1="76.543" x2="179.46" y1="38.873" y2="217.13" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4F5988" offset="1"/></linearGradient><path d="m174.08 211.58h-92.16c-20.62 0-37.49-16.87-37.49-37.49v-92.17c0-20.62 16.87-37.49 37.49-37.49h92.17c20.62 0 37.49 16.87 37.49 37.49v92.17c0 20.61-16.88 37.49-37.5 37.49z" fill="none" stroke="url(#dg)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="r" x1="76.661" x2="179.34" y1="39.079" y2="216.92" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4F5988" offset="1"/></linearGradient><path d="m173.97 211.38h-91.94c-20.57 0-37.4-16.83-37.4-37.4v-91.95c0-20.57 16.83-37.4 37.4-37.4h91.95c20.57 0 37.4 16.83 37.4 37.4v91.95c0 20.57-16.83 37.4-37.41 37.4z" fill="none" stroke="url(#r)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="l" x1="76.78" x2="179.22" y1="39.285" y2="216.72" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4F5988" offset="1"/></linearGradient><path d="m173.87 211.18h-91.74c-20.52 0-37.31-16.79-37.31-37.31v-91.74c0-20.52 16.79-37.31 37.31-37.31h91.73c20.52 0 37.31 16.79 37.31 37.31v91.73c0.01 20.53-16.78 37.32-37.3 37.32z" fill="none" stroke="url(#l)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cf" x1="76.899" x2="179.1" y1="39.491" y2="216.51" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4F5988" offset="1"/></linearGradient><path d="m173.76 210.98h-91.52c-20.47 0-37.23-16.75-37.23-37.23v-91.51c0-20.47 16.75-37.23 37.23-37.23h91.51c20.47 0 37.23 16.75 37.23 37.23v91.51c0 20.48-16.75 37.23-37.22 37.23z" fill="none" stroke="url(#cf)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="aj" x1="77.018" x2="178.98" y1="39.697" y2="216.3" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4F5988" offset="1"/></linearGradient><path d="m173.65 210.78h-91.3c-20.43 0-37.14-16.71-37.14-37.14v-91.3c0-20.43 16.71-37.14 37.14-37.14h91.3c20.43 0 37.14 16.71 37.14 37.14v91.3c-0.01 20.43-16.72 37.14-37.14 37.14z" fill="none" stroke="url(#aj)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bg" x1="77.137" x2="178.86" y1="39.903" y2="216.1" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#4F5989" offset="1"/></linearGradient><path d="m173.54 210.59h-91.08c-20.38 0-37.05-16.67-37.05-37.05v-91.08c0-20.38 16.67-37.05 37.05-37.05h91.08c20.38 0 37.05 16.67 37.05 37.05v91.08c0 20.37-16.68 37.05-37.05 37.05z" fill="none" stroke="url(#bg)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bq" x1="77.256" x2="178.74" y1="40.109" y2="215.89" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#505A89" offset="1"/></linearGradient><path d="m173.43 210.39h-90.86c-20.33 0-36.96-16.63-36.96-36.96v-90.86c0-20.33 16.63-36.96 36.96-36.96h90.86c20.33 0 36.96 16.63 36.96 36.96v90.86c0 20.33-16.63 36.96-36.96 36.96z" fill="none" stroke="url(#bq)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fe" x1="77.375" x2="178.63" y1="40.314" y2="215.69" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#505A89" offset="1"/></linearGradient><path d="m173.32 210.19h-90.64c-20.28 0-36.87-16.59-36.87-36.87v-90.64c0-20.28 16.59-36.87 36.87-36.87h90.64c20.28 0 36.87 16.59 36.87 36.87v90.64c0 20.28-16.59 36.87-36.87 36.87z" fill="none" stroke="url(#fe)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gj" x1="77.494" x2="178.51" y1="40.52" y2="215.48" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#505A8A" offset="1"/></linearGradient><path d="m173.21 209.99h-90.42c-20.23 0-36.78-16.55-36.78-36.78v-90.42c0-20.23 16.55-36.78 36.78-36.78h90.42c20.23 0 36.78 16.55 36.78 36.78v90.42c0 20.23-16.55 36.78-36.78 36.78z" fill="none" stroke="url(#gj)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="aa" x1="77.613" x2="178.39" y1="40.726" y2="215.27" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#505A8A" offset="1"/></linearGradient><path d="m173.1 209.79h-90.2c-20.18 0-36.69-16.51-36.69-36.69v-90.2c0-20.18 16.51-36.69 36.69-36.69h90.2c20.18 0 36.69 16.51 36.69 36.69v90.2c0 20.18-16.51 36.69-36.69 36.69z" fill="none" stroke="url(#aa)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dy" x1="77.731" x2="178.27" y1="40.932" y2="215.07" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#505A8A" offset="1"/></linearGradient><path d="m172.99 209.6h-89.98c-20.13 0-36.6-16.47-36.6-36.6v-89.99c0-20.13 16.47-36.6 36.6-36.6h89.99c20.13 0 36.6 16.47 36.6 36.6v89.99c0 20.13-16.47 36.6-36.61 36.6z" fill="none" stroke="url(#dy)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="au" x1="77.85" x2="178.15" y1="41.138" y2="214.86" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#515B8B" offset="1"/></linearGradient><path d="m172.88 209.4h-89.76c-20.08 0-36.52-16.43-36.52-36.52v-89.76c0-20.08 16.43-36.52 36.52-36.52h89.77c20.08 0 36.52 16.43 36.52 36.52v89.77c-0.01 20.08-16.44 36.51-36.53 36.51z" fill="none" stroke="url(#au)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="da" x1="77.969" x2="178.03" y1="41.344" y2="214.66" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#515B8B" offset="1"/></linearGradient><path d="m172.77 209.2h-89.54c-20.03 0-36.43-16.39-36.43-36.43v-89.54c0-20.03 16.39-36.43 36.43-36.43h89.55c20.03 0 36.43 16.39 36.43 36.43v89.55c-0.01 20.03-16.4 36.42-36.44 36.42z" fill="none" stroke="url(#da)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ci" x1="78.088" x2="177.91" y1="41.55" y2="214.45" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#515B8B" offset="1"/></linearGradient><path d="m172.67 209h-89.34c-19.98 0-36.33-16.35-36.33-36.33v-89.34c0-19.98 16.35-36.33 36.33-36.33h89.33c19.99 0 36.34 16.35 36.34 36.33v89.33c0 19.99-16.35 36.34-36.33 36.34z" fill="none" stroke="url(#ci)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fc" x1="78.207" x2="177.79" y1="41.756" y2="214.24" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#515B8B" offset="1"/></linearGradient><path d="m172.56 208.81h-89.12c-19.94 0-36.25-16.31-36.25-36.25v-89.12c0-19.94 16.31-36.25 36.25-36.25h89.11c19.94 0 36.25 16.31 36.25 36.25v89.11c0.01 19.94-16.31 36.26-36.24 36.26z" fill="none" stroke="url(#fc)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dm" x1="78.326" x2="177.67" y1="41.962" y2="214.04" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#515B8C" offset="1"/></linearGradient><path d="m172.45 208.61h-88.9c-19.89 0-36.16-16.27-36.16-36.16v-88.9c0-19.89 16.27-36.16 36.16-36.16h88.89c19.89 0 36.16 16.27 36.16 36.16v88.89c0.01 19.9-16.26 36.17-36.15 36.17z" fill="none" stroke="url(#dm)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="go" x1="78.445" x2="177.56" y1="42.168" y2="213.83" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#515B8C" offset="1"/></linearGradient><path d="m172.34 208.41h-88.68c-19.84 0-36.07-16.23-36.07-36.07v-88.68c0-19.84 16.23-36.07 36.07-36.07h88.68c19.84 0 36.07 16.23 36.07 36.07v88.68c0 19.84-16.23 36.07-36.07 36.07z" fill="none" stroke="url(#go)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ds" x1="78.563" x2="177.44" y1="42.374" y2="213.63" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#515B8C" offset="1"/></linearGradient><path d="m172.23 208.21h-88.46c-19.79 0-35.98-16.19-35.98-35.98v-88.46c0-19.79 16.19-35.98 35.98-35.98h88.46c19.79 0 35.98 16.19 35.98 35.98v88.46c0 19.79-16.19 35.98-35.98 35.98z" fill="none" stroke="url(#ds)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fz" x1="78.682" x2="177.32" y1="42.579" y2="213.42" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#525B8C" offset="1"/></linearGradient><path d="m172.12 208.01h-88.24c-19.74 0-35.89-16.15-35.89-35.89v-88.24c0-19.74 16.15-35.89 35.89-35.89h88.24c19.74 0 35.89 16.15 35.89 35.89v88.24c0 19.74-16.15 35.89-35.89 35.89z" fill="none" stroke="url(#fz)" stroke-miterlimit="10" stroke-width="5"/><path class="st102" d="m128.21 128.38h-0.42c-0.09 0-0.17-0.08-0.17-0.17v-0.42c0-0.09 0.08-0.17 0.17-0.17h0.42c0.09 0 0.17 0.08 0.17 0.17v0.42c0 0.09-0.08 0.17-0.17 0.17z"/><linearGradient id="do" x1="126.05" x2="129.95" y1="124.62" y2="131.38" gradientUnits="userSpaceOnUse"><stop stop-color="#757EB5" offset="0"/><stop stop-color="#757EB4" offset="1"/></linearGradient><path d="m128.64 129.17h-1.29c-0.29 0-0.52-0.24-0.52-0.52v-1.29c0-0.29 0.24-0.52 0.52-0.52h1.29c0.29 0 0.52 0.24 0.52 0.52v1.29c0.01 0.28-0.23 0.52-0.52 0.52z" fill="none" stroke="url(#do)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bk" x1="125.57" x2="130.43" y1="123.8" y2="132.2" gradientUnits="userSpaceOnUse"><stop stop-color="#757EB5" offset="0"/><stop stop-color="#757DB3" offset="1"/></linearGradient><path d="m129.08 129.96h-2.16c-0.48 0-0.88-0.39-0.88-0.88v-2.16c0-0.48 0.39-0.88 0.88-0.88h2.16c0.48 0 0.88 0.39 0.88 0.88v2.16c0 0.48-0.4 0.88-0.88 0.88z" fill="none" stroke="url(#bk)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ch" x1="125.1" x2="130.9" y1="122.98" y2="133.02" gradientUnits="userSpaceOnUse"><stop stop-color="#767FB5" offset="0"/><stop stop-color="#747DB3" offset="1"/></linearGradient><path d="m129.51 130.74h-3.03c-0.68 0-1.23-0.55-1.23-1.23v-3.03c0-0.68 0.55-1.23 1.23-1.23h3.03c0.68 0 1.23 0.55 1.23 1.23v3.03c0 0.68-0.55 1.23-1.23 1.23z" fill="none" stroke="url(#ch)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="c" x1="124.63" x2="131.37" y1="122.16" y2="133.84" gradientUnits="userSpaceOnUse"><stop stop-color="#767FB5" offset="0"/><stop stop-color="#747DB2" offset="1"/></linearGradient><path d="m129.95 131.53h-3.9c-0.87 0-1.58-0.71-1.58-1.58v-3.9c0-0.87 0.71-1.58 1.58-1.58h3.9c0.87 0 1.58 0.71 1.58 1.58v3.9c0 0.87-0.71 1.58-1.58 1.58z" fill="none" stroke="url(#c)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="df" x1="124.15" x2="131.85" y1="121.34" y2="134.66" gradientUnits="userSpaceOnUse"><stop stop-color="#767FB5" offset="0"/><stop stop-color="#737CB2" offset="1"/></linearGradient><path d="m130.38 132.32h-4.77c-1.07 0-1.94-0.87-1.94-1.94v-4.77c0-1.07 0.87-1.94 1.94-1.94h4.77c1.07 0 1.94 0.87 1.94 1.94v4.77c0 1.07-0.87 1.94-1.94 1.94z" fill="none" stroke="url(#df)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gw" x1="123.68" x2="132.32" y1="120.52" y2="135.48" gradientUnits="userSpaceOnUse"><stop stop-color="#777FB5" offset="0"/><stop stop-color="#737CB2" offset="1"/></linearGradient><path d="m130.82 133.11h-5.64c-1.26 0-2.29-1.03-2.29-2.29v-5.64c0-1.26 1.03-2.29 2.29-2.29h5.64c1.26 0 2.29 1.03 2.29 2.29v5.64c0 1.26-1.03 2.29-2.29 2.29z" fill="none" stroke="url(#gw)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fa" x1="123.21" x2="132.79" y1="119.7" y2="136.3" gradientUnits="userSpaceOnUse"><stop stop-color="#777FB5" offset="0"/><stop stop-color="#737CB2" offset="1"/></linearGradient><path d="m131.25 133.9h-6.51c-1.46 0-2.65-1.19-2.65-2.65v-6.51c0-1.46 1.19-2.65 2.65-2.65h6.51c1.46 0 2.65 1.19 2.65 2.65v6.51c0 1.46-1.19 2.65-2.65 2.65z" fill="none" stroke="url(#fa)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ew" x1="122.73" x2="133.27" y1="118.88" y2="137.12" gradientUnits="userSpaceOnUse"><stop stop-color="#777FB5" offset="0"/><stop stop-color="#737BB1" offset="1"/></linearGradient><path d="m131.69 134.69h-7.37c-1.65 0-3-1.35-3-3v-7.37c0-1.65 1.35-3 3-3h7.37c1.65 0 3 1.35 3 3v7.37c0 1.65-1.35 3-3 3z" fill="none" stroke="url(#ew)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="h" x1="122.26" x2="133.74" y1="118.06" y2="137.94" gradientUnits="userSpaceOnUse"><stop stop-color="#7780B5" offset="0"/><stop stop-color="#727BB1" offset="1"/></linearGradient><path d="m132.12 135.48h-8.24c-1.84 0-3.35-1.51-3.35-3.35v-8.24c0-1.84 1.51-3.35 3.35-3.35h8.24c1.84 0 3.35 1.51 3.35 3.35v8.24c0.01 1.84-1.5 3.35-3.35 3.35z" fill="none" stroke="url(#h)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ck" x1="121.79" x2="134.21" y1="117.24" y2="138.76" gradientUnits="userSpaceOnUse"><stop stop-color="#7780B5" offset="0"/><stop stop-color="#727BB0" offset="1"/></linearGradient><path d="m132.56 136.26h-9.11c-2.04 0-3.71-1.67-3.71-3.71v-9.11c0-2.04 1.67-3.71 3.71-3.71h9.11c2.04 0 3.71 1.67 3.71 3.71v9.11c-0.01 2.05-1.67 3.71-3.71 3.71z" fill="none" stroke="url(#ck)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="br" x1="121.31" x2="134.69" y1="116.42" y2="139.58" gradientUnits="userSpaceOnUse"><stop stop-color="#7780B5" offset="0"/><stop stop-color="#717AB0" offset="1"/></linearGradient><path d="m132.99 137.05h-9.98c-2.23 0-4.06-1.83-4.06-4.06v-9.98c0-2.23 1.83-4.06 4.06-4.06h9.98c2.23 0 4.06 1.83 4.06 4.06v9.98c0 2.24-1.82 4.06-4.06 4.06z" fill="none" stroke="url(#br)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="eh" x1="120.84" x2="135.16" y1="115.6" y2="140.4" gradientUnits="userSpaceOnUse"><stop stop-color="#7780B6" offset="0"/><stop stop-color="#717AAF" offset="1"/></linearGradient><path d="m133.43 137.84h-10.85c-2.43 0-4.41-1.99-4.41-4.41v-10.85c0-2.43 1.99-4.41 4.41-4.41h10.85c2.43 0 4.41 1.99 4.41 4.41v10.85c0 2.42-1.99 4.41-4.41 4.41z" fill="none" stroke="url(#eh)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="aq" x1="120.36" x2="135.64" y1="114.78" y2="141.23" gradientUnits="userSpaceOnUse"><stop stop-color="#7880B6" offset="0"/><stop stop-color="#7079AE" offset="1"/></linearGradient><path d="m133.86 138.63h-11.72c-2.62 0-4.77-2.15-4.77-4.77v-11.72c0-2.62 2.15-4.77 4.77-4.77h11.72c2.62 0 4.77 2.15 4.77 4.77v11.72c0 2.62-2.15 4.77-4.77 4.77z" fill="none" stroke="url(#aq)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fs" x1="119.89" x2="136.11" y1="113.95" y2="142.05" gradientUnits="userSpaceOnUse"><stop stop-color="#7880B6" offset="0"/><stop stop-color="#7079AE" offset="1"/></linearGradient><path d="m134.3 139.42h-12.6c-2.82 0-5.12-2.3-5.12-5.12v-12.6c0-2.82 2.3-5.12 5.12-5.12h12.59c2.82 0 5.12 2.3 5.12 5.12v12.59c0.01 2.82-2.3 5.13-5.11 5.13z" fill="none" stroke="url(#fs)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dd" x1="119.42" x2="136.58" y1="113.13" y2="142.87" gradientUnits="userSpaceOnUse"><stop stop-color="#7880B6" offset="0"/><stop stop-color="#7078AD" offset="1"/></linearGradient><path d="m134.73 140.21h-13.46c-3.01 0-5.48-2.46-5.48-5.48v-13.46c0-3.01 2.46-5.48 5.48-5.48h13.46c3.01 0 5.48 2.46 5.48 5.48v13.46c0 3.01-2.47 5.48-5.48 5.48z" fill="none" stroke="url(#dd)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gu" x1="118.94" x2="137.06" y1="112.31" y2="143.69" gradientUnits="userSpaceOnUse"><stop stop-color="#7980B7" offset="0"/><stop stop-color="#7078AD" offset="1"/></linearGradient><path d="m135.17 140.99h-14.33c-3.21 0-5.83-2.62-5.83-5.83v-14.33c0-3.21 2.62-5.83 5.83-5.83h14.33c3.21 0 5.83 2.62 5.83 5.83v14.33c-0.01 3.21-2.63 5.83-5.83 5.83z" fill="none" stroke="url(#gu)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ej" x1="118.47" x2="137.53" y1="111.49" y2="144.51" gradientUnits="userSpaceOnUse"><stop stop-color="#7980B7" offset="0"/><stop stop-color="#6F78AD" offset="1"/></linearGradient><path d="m135.6 141.78h-15.2c-3.4 0-6.18-2.78-6.18-6.18v-15.2c0-3.4 2.78-6.18 6.18-6.18h15.2c3.4 0 6.18 2.78 6.18 6.18v15.2c0 3.4-2.78 6.18-6.18 6.18z" fill="none" stroke="url(#ej)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="av" x1="118" x2="138" y1="110.67" y2="145.33" gradientUnits="userSpaceOnUse"><stop stop-color="#7980B7" offset="0"/><stop stop-color="#6F77AC" offset="1"/></linearGradient><path d="m136.03 142.57h-16.07c-3.6 0-6.54-2.94-6.54-6.54v-16.07c0-3.6 2.94-6.54 6.54-6.54h16.07c3.6 0 6.54 2.94 6.54 6.54v16.07c0 3.6-2.94 6.54-6.54 6.54z" fill="none" stroke="url(#av)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gg" x1="117.52" x2="138.48" y1="109.85" y2="146.15" gradientUnits="userSpaceOnUse"><stop stop-color="#7980B7" offset="0"/><stop stop-color="#6E77AC" offset="1"/></linearGradient><path d="m136.47 143.36h-16.94c-3.79 0-6.89-3.1-6.89-6.89v-16.94c0-3.79 3.1-6.89 6.89-6.89h16.94c3.79 0 6.89 3.1 6.89 6.89v16.94c0 3.79-3.1 6.89-6.89 6.89z" fill="none" stroke="url(#gg)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="n" x1="117.05" x2="138.95" y1="109.03" y2="146.97" gradientUnits="userSpaceOnUse"><stop stop-color="#7981B7" offset="0"/><stop stop-color="#6E77AB" offset="1"/></linearGradient><path d="m136.9 144.15h-17.8c-3.98 0-7.24-3.26-7.24-7.24v-17.81c0-3.98 3.26-7.24 7.24-7.24h17.81c3.98 0 7.24 3.26 7.24 7.24v17.81c0 3.98-3.26 7.24-7.25 7.24z" fill="none" stroke="url(#n)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="de" x1="116.58" x2="139.42" y1="108.21" y2="147.79" gradientUnits="userSpaceOnUse"><stop stop-color="#7981B7" offset="0"/><stop stop-color="#6E77AB" offset="1"/></linearGradient><path d="m137.34 144.94h-18.68c-4.18 0-7.6-3.42-7.6-7.6v-18.68c0-4.18 3.42-7.6 7.6-7.6h18.68c4.18 0 7.6 3.42 7.6 7.6v18.68c0 4.18-3.42 7.6-7.6 7.6z" fill="none" stroke="url(#de)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="eb" x1="116.1" x2="139.9" y1="107.39" y2="148.61" gradientUnits="userSpaceOnUse"><stop stop-color="#7981B7" offset="0"/><stop stop-color="#6E76AB" offset="1"/></linearGradient><path d="m137.77 145.73h-19.55c-4.37 0-7.95-3.58-7.95-7.95v-19.55c0-4.37 3.58-7.95 7.95-7.95h19.55c4.37 0 7.95 3.58 7.95 7.95v19.55c0.01 4.37-3.57 7.95-7.95 7.95z" fill="none" stroke="url(#eb)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="eu" x1="115.63" x2="140.37" y1="106.57" y2="149.43" gradientUnits="userSpaceOnUse"><stop stop-color="#7A81B7" offset="0"/><stop stop-color="#6D76AA" offset="1"/></linearGradient><path d="m138.21 146.51h-20.42c-4.57 0-8.31-3.74-8.31-8.31v-20.42c0-4.57 3.74-8.31 8.31-8.31h20.42c4.57 0 8.31 3.74 8.31 8.31v20.42c-0.01 4.58-3.74 8.31-8.31 8.31z" fill="none" stroke="url(#eu)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bb" x1="115.15" x2="140.85" y1="105.75" y2="150.25" gradientUnits="userSpaceOnUse"><stop stop-color="#7A82B8" offset="0"/><stop stop-color="#6D75AA" offset="1"/></linearGradient><path d="m138.64 147.3h-21.29c-4.76 0-8.66-3.9-8.66-8.66v-21.29c0-4.76 3.9-8.66 8.66-8.66h21.29c4.76 0 8.66 3.9 8.66 8.66v21.29c0 4.77-3.89 8.66-8.66 8.66z" fill="none" stroke="url(#bb)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="es" x1="114.68" x2="141.32" y1="104.93" y2="151.07" gradientUnits="userSpaceOnUse"><stop stop-color="#7A82B8" offset="0"/><stop stop-color="#6C74A8" offset="1"/></linearGradient><path d="m139.08 148.09h-22.16c-4.96 0-9.01-4.06-9.01-9.01v-22.16c0-4.96 4.06-9.01 9.01-9.01h22.16c4.96 0 9.01 4.06 9.01 9.01v22.16c0 4.96-4.05 9.01-9.01 9.01z" fill="none" stroke="url(#es)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="m" x1="114.21" x2="141.79" y1="104.11" y2="151.89" gradientUnits="userSpaceOnUse"><stop stop-color="#7B82B8" offset="0"/><stop stop-color="#6C74A8" offset="1"/></linearGradient><path d="m139.51 148.88h-23.03c-5.15 0-9.37-4.21-9.37-9.37v-23.03c0-5.15 4.21-9.37 9.37-9.37h23.03c5.15 0 9.37 4.21 9.37 9.37v23.03c0 5.15-4.22 9.37-9.37 9.37z" fill="none" stroke="url(#m)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fr" x1="113.73" x2="142.27" y1="103.29" y2="152.71" gradientUnits="userSpaceOnUse"><stop stop-color="#7B82B8" offset="0"/><stop stop-color="#6B74A8" offset="1"/></linearGradient><path d="m139.95 149.67h-23.9c-5.35 0-9.72-4.37-9.72-9.72v-23.9c0-5.35 4.37-9.72 9.72-9.72h23.9c5.35 0 9.72 4.37 9.72 9.72v23.9c0 5.34-4.38 9.72-9.72 9.72z" fill="none" stroke="url(#fr)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="d" x1="113.26" x2="142.74" y1="102.47" y2="153.53" gradientUnits="userSpaceOnUse"><stop stop-color="#7B82B9" offset="0"/><stop stop-color="#6B74A7" offset="1"/></linearGradient><path d="m140.38 150.46h-24.76c-5.54 0-10.07-4.53-10.07-10.07v-24.76c0-5.54 4.53-10.07 10.07-10.07h24.76c5.54 0 10.07 4.53 10.07 10.07v24.76c0.01 5.53-4.53 10.07-10.07 10.07z" fill="none" stroke="url(#d)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dj" x1="112.79" x2="143.21" y1="101.65" y2="154.35" gradientUnits="userSpaceOnUse"><stop stop-color="#7B82B9" offset="0"/><stop stop-color="#6B73A7" offset="1"/></linearGradient><path d="m140.82 151.24h-25.63c-5.74 0-10.43-4.69-10.43-10.43v-25.63c0-5.74 4.69-10.43 10.43-10.43h25.63c5.74 0 10.43 4.69 10.43 10.43v25.63c-0.01 5.74-4.7 10.43-10.43 10.43z" fill="none" stroke="url(#dj)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="co" x1="112.31" x2="143.69" y1="100.83" y2="155.17" gradientUnits="userSpaceOnUse"><stop stop-color="#7B83B9" offset="0"/><stop stop-color="#6B73A7" offset="1"/></linearGradient><path d="m141.25 152.03h-26.5c-5.93 0-10.78-4.85-10.78-10.78v-26.5c0-5.93 4.85-10.78 10.78-10.78h26.5c5.93 0 10.78 4.85 10.78 10.78v26.5c0 5.93-4.85 10.78-10.78 10.78z" fill="none" stroke="url(#co)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bc" x1="111.84" x2="144.16" y1="100.01" y2="155.99" gradientUnits="userSpaceOnUse"><stop stop-color="#7B83B9" offset="0"/><stop stop-color="#6A72A6" offset="1"/></linearGradient><path d="m141.69 152.82h-27.37c-6.12 0-11.13-5.01-11.13-11.13v-27.37c0-6.12 5.01-11.13 11.13-11.13h27.37c6.12 0 11.13 5.01 11.13 11.13v27.37c0 6.12-5.01 11.13-11.13 11.13z" fill="none" stroke="url(#bc)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="q" x1="111.36" x2="144.63" y1="99.187" y2="156.81" gradientUnits="userSpaceOnUse"><stop stop-color="#7B83B9" offset="0"/><stop stop-color="#6972A6" offset="1"/></linearGradient><path d="m142.12 153.61h-28.24c-6.32 0-11.49-5.17-11.49-11.49v-28.24c0-6.32 5.17-11.49 11.49-11.49h28.24c6.32 0 11.49 5.17 11.49 11.49v28.24c0 6.32-5.17 11.49-11.49 11.49z" fill="none" stroke="url(#q)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ez" x1="110.89" x2="145.11" y1="98.367" y2="157.63" gradientUnits="userSpaceOnUse"><stop stop-color="#7C83B9" offset="0"/><stop stop-color="#6972A5" offset="1"/></linearGradient><path d="m142.56 154.4h-29.11c-6.51 0-11.84-5.33-11.84-11.84v-29.11c0-6.51 5.33-11.84 11.84-11.84h29.11c6.51 0 11.84 5.33 11.84 11.84v29.11c0 6.51-5.33 11.84-11.84 11.84z" fill="none" stroke="url(#ez)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dz" x1="110.42" x2="145.58" y1="97.547" y2="158.45" gradientUnits="userSpaceOnUse"><stop stop-color="#7C83B9" offset="0"/><stop stop-color="#6972A5" offset="1"/></linearGradient><path d="m142.99 155.19h-29.98c-6.71 0-12.2-5.49-12.2-12.2v-29.98c0-6.71 5.49-12.2 12.2-12.2h29.98c6.71 0 12.2 5.49 12.2 12.2v29.98c0 6.71-5.49 12.2-12.2 12.2z" fill="none" stroke="url(#dz)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fh" x1="109.94" x2="146.06" y1="96.726" y2="159.27" gradientUnits="userSpaceOnUse"><stop stop-color="#7C84BA" offset="0"/><stop stop-color="#6971A5" offset="1"/></linearGradient><path d="m143.43 155.98h-30.85c-6.9 0-12.55-5.65-12.55-12.55v-30.85c0-6.9 5.65-12.55 12.55-12.55h30.85c6.9 0 12.55 5.65 12.55 12.55v30.85c0 6.9-5.65 12.55-12.55 12.55z" fill="none" stroke="url(#fh)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ao" x1="109.47" x2="146.53" y1="95.906" y2="160.09" gradientUnits="userSpaceOnUse"><stop stop-color="#7D84BA" offset="0"/><stop stop-color="#6871A5" offset="1"/></linearGradient><path d="m143.86 156.76h-31.72c-7.1 0-12.9-5.81-12.9-12.9v-31.72c0-7.1 5.81-12.9 12.9-12.9h31.72c7.1 0 12.9 5.81 12.9 12.9v31.72c0 7.1-5.8 12.9-12.9 12.9z" fill="none" stroke="url(#ao)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ae" x1="109" x2="147" y1="95.085" y2="160.91" gradientUnits="userSpaceOnUse"><stop stop-color="#7D84BA" offset="0"/><stop stop-color="#6870A3" offset="1"/></linearGradient><path d="m144.3 157.55h-32.6c-7.29 0-13.26-5.97-13.26-13.26v-32.59c0-7.29 5.97-13.26 13.26-13.26h32.59c7.29 0 13.26 5.97 13.26 13.26v32.59c0 7.3-5.96 13.26-13.25 13.26z" fill="none" stroke="url(#ae)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gh" x1="108.52" x2="147.48" y1="94.265" y2="161.74" gradientUnits="userSpaceOnUse"><stop stop-color="#7D84BA" offset="0"/><stop stop-color="#6770A3" offset="1"/></linearGradient><path d="m144.73 158.34h-33.46c-7.49 0-13.61-6.12-13.61-13.61v-33.46c0-7.49 6.12-13.61 13.61-13.61h33.46c7.49 0 13.61 6.12 13.61 13.61v33.46c0 7.49-6.12 13.61-13.61 13.61z" fill="none" stroke="url(#gh)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cq" x1="108.05" x2="147.95" y1="93.445" y2="162.56" gradientUnits="userSpaceOnUse"><stop stop-color="#7D84BB" offset="0"/><stop stop-color="#676FA3" offset="1"/></linearGradient><path d="m145.16 159.13h-34.33c-7.68 0-13.96-6.28-13.96-13.96v-34.33c0-7.68 6.28-13.96 13.96-13.96h34.33c7.68 0 13.96 6.28 13.96 13.96v34.33c0.01 7.68-6.27 13.96-13.96 13.96z" fill="none" stroke="url(#cq)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cs" x1="107.58" x2="148.42" y1="92.624" y2="163.38" gradientUnits="userSpaceOnUse"><stop stop-color="#7D85BB" offset="0"/><stop stop-color="#666FA2" offset="1"/></linearGradient><path d="m145.6 159.92h-35.2c-7.87 0-14.32-6.44-14.32-14.32v-35.2c0-7.87 6.44-14.32 14.32-14.32h35.2c7.87 0 14.32 6.44 14.32 14.32v35.2c0 7.87-6.45 14.32-14.32 14.32z" fill="none" stroke="url(#cs)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bs" x1="107.1" x2="148.9" y1="91.804" y2="164.2" gradientUnits="userSpaceOnUse"><stop stop-color="#7D85BB" offset="0"/><stop stop-color="#666FA2" offset="1"/></linearGradient><path d="m146.03 160.71h-36.07c-8.07 0-14.67-6.6-14.67-14.67v-36.07c0-8.07 6.6-14.67 14.67-14.67h36.07c8.07 0 14.67 6.6 14.67 14.67v36.07c0.01 8.06-6.6 14.67-14.67 14.67z" fill="none" stroke="url(#bs)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bz" x1="106.63" x2="149.37" y1="90.983" y2="165.02" gradientUnits="userSpaceOnUse"><stop stop-color="#7D85BB" offset="0"/><stop stop-color="#666FA2" offset="1"/></linearGradient><path d="m146.47 161.49h-36.94c-8.26 0-15.03-6.76-15.03-15.03v-36.94c0-8.26 6.76-15.03 15.03-15.03h36.94c8.26 0 15.03 6.76 15.03 15.03v36.94c-0.01 8.27-6.77 15.03-15.03 15.03z" fill="none" stroke="url(#bz)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ev" x1="106.15" x2="149.85" y1="90.163" y2="165.84" gradientUnits="userSpaceOnUse"><stop stop-color="#7E85BB" offset="0"/><stop stop-color="#666EA1" offset="1"/></linearGradient><path d="m146.9 162.28h-37.8c-8.46 0-15.38-6.92-15.38-15.38v-37.8c0-8.46 6.92-15.38 15.38-15.38h37.81c8.46 0 15.38 6.92 15.38 15.38v37.81c-0.01 8.45-6.93 15.37-15.39 15.37z" fill="none" stroke="url(#ev)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="du" x1="105.68" x2="150.32" y1="89.342" y2="166.66" gradientUnits="userSpaceOnUse"><stop stop-color="#7E85BB" offset="0"/><stop stop-color="#656EA1" offset="1"/></linearGradient><path d="m147.34 163.07h-38.68c-8.65 0-15.73-7.08-15.73-15.73v-38.68c0-8.65 7.08-15.73 15.73-15.73h38.68c8.65 0 15.73 7.08 15.73 15.73v38.68c0 8.65-7.08 15.73-15.73 15.73z" fill="none" stroke="url(#du)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bl" x1="105.21" x2="150.79" y1="88.522" y2="167.48" gradientUnits="userSpaceOnUse"><stop stop-color="#7E85BB" offset="0"/><stop stop-color="#656EA0" offset="1"/></linearGradient><path d="m147.77 163.86h-39.55c-8.85 0-16.09-7.24-16.09-16.09v-39.55c0-8.85 7.24-16.09 16.09-16.09h39.55c8.85 0 16.09 7.24 16.09 16.09v39.55c0 8.85-7.24 16.09-16.09 16.09z" fill="none" stroke="url(#bl)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ay" x1="104.73" x2="151.27" y1="87.702" y2="168.3" gradientUnits="userSpaceOnUse"><stop stop-color="#7F86BC" offset="0"/><stop stop-color="#646DA0" offset="1"/></linearGradient><path d="m148.21 164.65h-40.42c-9.04 0-16.44-7.4-16.44-16.44v-40.42c0-9.04 7.4-16.44 16.44-16.44h40.42c9.04 0 16.44 7.4 16.44 16.44v40.42c0 9.04-7.4 16.44-16.44 16.44z" fill="none" stroke="url(#ay)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gq" x1="104.26" x2="151.74" y1="86.881" y2="169.12" gradientUnits="userSpaceOnUse"><stop stop-color="#7F86BC" offset="0"/><stop stop-color="#646DA0" offset="1"/></linearGradient><path d="m148.64 165.44h-41.29c-9.24 0-16.79-7.56-16.79-16.79v-41.29c0-9.24 7.56-16.79 16.79-16.79h41.29c9.24 0 16.79 7.56 16.79 16.79v41.29c0.01 9.23-7.55 16.79-16.79 16.79z" fill="none" stroke="url(#gq)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ah" x1="103.79" x2="152.21" y1="86.061" y2="169.94" gradientUnits="userSpaceOnUse"><stop stop-color="#7F86BC" offset="0"/><stop stop-color="#646D9F" offset="1"/></linearGradient><path d="m149.08 166.23h-42.16c-9.43 0-17.15-7.72-17.15-17.15v-42.16c0-9.43 7.72-17.15 17.15-17.15h42.16c9.43 0 17.15 7.72 17.15 17.15v42.16c0 9.43-7.72 17.15-17.15 17.15z" fill="none" stroke="url(#ah)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gl" x1="103.31" x2="152.69" y1="85.24" y2="170.76" gradientUnits="userSpaceOnUse"><stop stop-color="#7F86BC" offset="0"/><stop stop-color="#636C9E" offset="1"/></linearGradient><path d="m149.51 167.01h-43.02c-9.63 0-17.5-7.88-17.5-17.5v-43.02c0-9.63 7.88-17.5 17.5-17.5h43.02c9.63 0 17.5 7.88 17.5 17.5v43.02c0 9.63-7.87 17.5-17.5 17.5z" fill="none" stroke="url(#gl)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ce" x1="102.84" x2="153.16" y1="84.42" y2="171.58" gradientUnits="userSpaceOnUse"><stop stop-color="#8087BC" offset="0"/><stop stop-color="#636C9E" offset="1"/></linearGradient><path d="m149.95 167.8h-43.89c-9.82 0-17.86-8.03-17.86-17.86v-43.89c0-9.82 8.03-17.86 17.86-17.86h43.89c9.82 0 17.86 8.03 17.86 17.86v43.89c-0.01 9.83-8.04 17.86-17.86 17.86z" fill="none" stroke="url(#ce)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fu" x1="102.37" x2="153.63" y1="83.6" y2="172.4" gradientUnits="userSpaceOnUse"><stop stop-color="#7F87BD" offset="0"/><stop stop-color="#636B9E" offset="1"/></linearGradient><path d="m150.38 168.59h-44.76c-10.01 0-18.21-8.19-18.21-18.21v-44.76c0-10.01 8.19-18.21 18.21-18.21h44.76c10.01 0 18.21 8.19 18.21 18.21v44.76c0 10.02-8.19 18.21-18.21 18.21z" fill="none" stroke="url(#fu)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="el" x1="101.89" x2="154.11" y1="82.779" y2="173.22" gradientUnits="userSpaceOnUse"><stop stop-color="#7F87BD" offset="0"/><stop stop-color="#626B9E" offset="1"/></linearGradient><path d="m150.82 169.38h-45.63c-10.21 0-18.56-8.35-18.56-18.56v-45.63c0-10.21 8.35-18.56 18.56-18.56h45.63c10.21 0 18.56 8.35 18.56 18.56v45.63c0 10.21-8.35 18.56-18.56 18.56z" fill="none" stroke="url(#el)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="af" x1="101.42" x2="154.58" y1="81.959" y2="174.04" gradientUnits="userSpaceOnUse"><stop stop-color="#8087BD" offset="0"/><stop stop-color="#626B9D" offset="1"/></linearGradient><path d="m151.25 170.17h-46.5c-10.4 0-18.92-8.51-18.92-18.92v-46.5c0-10.4 8.51-18.92 18.92-18.92h46.5c10.4 0 18.92 8.51 18.92 18.92v46.5c0 10.41-8.51 18.92-18.92 18.92z" fill="none" stroke="url(#af)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="aw" x1="100.94" x2="155.06" y1="81.138" y2="174.86" gradientUnits="userSpaceOnUse"><stop stop-color="#8088BD" offset="0"/><stop stop-color="#626B9D" offset="1"/></linearGradient><path d="m151.69 170.96h-47.37c-10.6 0-19.27-8.67-19.27-19.27v-47.37c0-10.6 8.67-19.27 19.27-19.27h47.37c10.6 0 19.27 8.67 19.27 19.27v47.37c0 10.59-8.68 19.27-19.27 19.27z" fill="none" stroke="url(#aw)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bj" x1="100.47" x2="155.53" y1="80.318" y2="175.68" gradientUnits="userSpaceOnUse"><stop stop-color="#8088BD" offset="0"/><stop stop-color="#626A9C" offset="1"/></linearGradient><path d="m152.12 171.74h-48.24c-10.79 0-19.62-8.83-19.62-19.62v-48.24c0-10.79 8.83-19.62 19.62-19.62h48.24c10.79 0 19.62 8.83 19.62 19.62v48.24c0 10.79-8.83 19.62-19.62 19.62z" fill="none" stroke="url(#bj)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gt" x1="99.997" x2="156" y1="79.498" y2="176.5" gradientUnits="userSpaceOnUse"><stop stop-color="#8088BD" offset="0"/><stop stop-color="#616A9C" offset="1"/></linearGradient><path d="m152.56 172.53h-49.11c-10.99 0-19.98-8.99-19.98-19.98v-49.11c0-10.99 8.99-19.98 19.98-19.98h49.11c10.99 0 19.98 8.99 19.98 19.98v49.11c-0.01 10.99-9 19.98-19.98 19.98z" fill="none" stroke="url(#gt)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fo" x1="99.523" x2="156.48" y1="78.677" y2="177.32" gradientUnits="userSpaceOnUse"><stop stop-color="#8088BD" offset="0"/><stop stop-color="#616A9C" offset="1"/></linearGradient><path d="m152.99 173.32h-49.98c-11.18 0-20.33-9.15-20.33-20.33v-49.98c0-11.18 9.15-20.33 20.33-20.33h49.98c11.18 0 20.33 9.15 20.33 20.33v49.98c0 11.18-9.15 20.33-20.33 20.33z" fill="none" stroke="url(#fo)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fl" x1="99.05" x2="156.95" y1="77.857" y2="178.14" gradientUnits="userSpaceOnUse"><stop stop-color="#8088BE" offset="0"/><stop stop-color="#60699B" offset="1"/></linearGradient><path d="m153.43 174.11h-50.85c-11.38 0-20.68-9.31-20.68-20.68v-50.85c0-11.38 9.31-20.68 20.68-20.68h50.85c11.38 0 20.68 9.31 20.68 20.68v50.85c0 11.37-9.31 20.68-20.68 20.68z" fill="none" stroke="url(#fl)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="at" x1="98.576" x2="157.42" y1="77.036" y2="178.96" gradientUnits="userSpaceOnUse"><stop stop-color="#8088BE" offset="0"/><stop stop-color="#60699B" offset="1"/></linearGradient><path d="m153.86 174.9h-51.72c-11.57 0-21.04-9.47-21.04-21.04v-51.72c0-11.57 9.47-21.04 21.04-21.04h51.72c11.57 0 21.04 9.47 21.04 21.04v51.72c0 11.57-9.47 21.04-21.04 21.04z" fill="none" stroke="url(#at)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ed" x1="98.103" x2="157.9" y1="76.216" y2="179.78" gradientUnits="userSpaceOnUse"><stop stop-color="#8188BE" offset="0"/><stop stop-color="#60689A" offset="1"/></linearGradient><path d="m154.29 175.69h-52.59c-11.77 0-21.39-9.63-21.39-21.39v-52.59c0-11.77 9.63-21.39 21.39-21.39h52.59c11.77 0 21.39 9.63 21.39 21.39v52.59c0.01 11.76-9.62 21.39-21.39 21.39z" fill="none" stroke="url(#ed)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gc" x1="97.629" x2="158.37" y1="75.396" y2="180.6" gradientUnits="userSpaceOnUse"><stop stop-color="#8189BE" offset="0"/><stop stop-color="#5F689A" offset="1"/></linearGradient><path d="m154.73 176.48h-53.46c-11.96 0-21.75-9.79-21.75-21.75v-53.46c0-11.96 9.79-21.75 21.75-21.75h53.46c11.96 0 21.75 9.79 21.75 21.75v53.46c0 11.96-9.79 21.75-21.75 21.75z" fill="none" stroke="url(#gc)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fw" x1="97.155" x2="158.84" y1="74.575" y2="181.42" gradientUnits="userSpaceOnUse"><stop stop-color="#8189BE" offset="0"/><stop stop-color="#5F6799" offset="1"/></linearGradient><path d="m155.16 177.26h-54.33c-12.15 0-22.1-9.94-22.1-22.1v-54.33c0-12.15 9.94-22.1 22.1-22.1h54.33c12.15 0 22.1 9.94 22.1 22.1v54.33c0 12.16-9.94 22.1-22.1 22.1z" fill="none" stroke="url(#fw)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bv" x1="96.682" x2="159.32" y1="73.755" y2="182.25" gradientUnits="userSpaceOnUse"><stop stop-color="#8189BE" offset="0"/><stop stop-color="#5F6799" offset="1"/></linearGradient><path d="m155.6 178.05h-55.2c-12.35 0-22.45-10.1-22.45-22.45v-55.2c0-12.35 10.1-22.45 22.45-22.45h55.2c12.35 0 22.45 10.1 22.45 22.45v55.2c0 12.35-10.1 22.45-22.45 22.45z" fill="none" stroke="url(#bv)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="s" x1="96.208" x2="159.79" y1="72.934" y2="183.07" gradientUnits="userSpaceOnUse"><stop stop-color="#8189BF" offset="0"/><stop stop-color="#5E6799" offset="1"/></linearGradient><path d="m156.03 178.84h-56.06c-12.54 0-22.81-10.26-22.81-22.81v-56.06c0-12.54 10.26-22.81 22.81-22.81h56.07c12.54 0 22.81 10.26 22.81 22.81v56.07c-0.01 12.54-10.27 22.8-22.82 22.8z" fill="none" stroke="url(#s)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="gi" x1="95.734" x2="160.27" y1="72.114" y2="183.89" gradientUnits="userSpaceOnUse"><stop stop-color="#818ABF" offset="0"/><stop stop-color="#5E6798" offset="1"/></linearGradient><path d="m156.47 179.63h-56.94c-12.74 0-23.16-10.42-23.16-23.16v-56.94c0-12.74 10.42-23.16 23.16-23.16h56.94c12.74 0 23.16 10.42 23.16 23.16v56.94c0 12.74-10.42 23.16-23.16 23.16z" fill="none" stroke="url(#gi)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fb" x1="95.26" x2="160.74" y1="71.294" y2="184.71" gradientUnits="userSpaceOnUse"><stop stop-color="#828ABF" offset="0"/><stop stop-color="#5D6698" offset="1"/></linearGradient><path d="m156.9 180.42h-57.8c-12.93 0-23.51-10.58-23.51-23.51v-57.81c0-12.93 10.58-23.51 23.51-23.51h57.81c12.93 0 23.51 10.58 23.51 23.51v57.81c0 12.93-10.58 23.51-23.52 23.51z" fill="none" stroke="url(#fb)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="g" x1="94.787" x2="161.21" y1="70.473" y2="185.53" gradientUnits="userSpaceOnUse"><stop stop-color="#828ABF" offset="0"/><stop stop-color="#5D6698" offset="1"/></linearGradient><path d="m157.34 181.21h-58.68c-13.13 0-23.87-10.74-23.87-23.87v-58.68c0-13.13 10.74-23.87 23.87-23.87h58.68c13.13 0 23.87 10.74 23.87 23.87v58.68c0 13.13-10.74 23.87-23.87 23.87z" fill="none" stroke="url(#g)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="et" x1="94.313" x2="161.69" y1="69.653" y2="186.35" gradientUnits="userSpaceOnUse"><stop stop-color="#828ABF" offset="0"/><stop stop-color="#5D6697" offset="1"/></linearGradient><path d="m157.77 181.99h-59.54c-13.32 0-24.22-10.9-24.22-24.22v-59.54c0-13.32 10.9-24.22 24.22-24.22h59.55c13.32 0 24.22 10.9 24.22 24.22v59.55c-0.01 13.31-10.91 24.21-24.23 24.21z" fill="none" stroke="url(#et)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dp" x1="93.84" x2="162.16" y1="68.832" y2="187.17" gradientUnits="userSpaceOnUse"><stop stop-color="#828BC0" offset="0"/><stop stop-color="#5D6697" offset="1"/></linearGradient><path d="m158.21 182.78h-60.42c-13.52 0-24.58-11.06-24.58-24.58v-60.41c0-13.52 11.06-24.58 24.58-24.58h60.42c13.52 0 24.58 11.06 24.58 24.58v60.42c-0.01 13.51-11.07 24.57-24.58 24.57z" fill="none" stroke="url(#dp)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fp" x1="93.366" x2="162.63" y1="68.012" y2="187.99" gradientUnits="userSpaceOnUse"><stop stop-color="#838BC0" offset="0"/><stop stop-color="#5C6597" offset="1"/></linearGradient><path d="m158.64 183.57h-61.28c-13.71 0-24.93-11.22-24.93-24.93v-61.28c0-13.71 11.22-24.93 24.93-24.93h61.28c13.71 0 24.93 11.22 24.93 24.93v61.28c0 13.71-11.22 24.93-24.93 24.93z" fill="none" stroke="url(#fp)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cn" x1="92.892" x2="163.11" y1="67.192" y2="188.81" gradientUnits="userSpaceOnUse"><stop stop-color="#838BC0" offset="0"/><stop stop-color="#5C6597" offset="1"/></linearGradient><path d="m159.08 184.36h-62.16c-13.91 0-25.28-11.38-25.28-25.28v-62.16c0-13.91 11.38-25.28 25.28-25.28h62.15c13.91 0 25.28 11.38 25.28 25.28v62.15c0.01 13.91-11.37 25.29-25.27 25.29z" fill="none" stroke="url(#cn)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bo" x1="92.419" x2="163.58" y1="66.371" y2="189.63" gradientUnits="userSpaceOnUse"><stop stop-color="#838BC0" offset="0"/><stop stop-color="#5B6596" offset="1"/></linearGradient><path d="m159.51 185.15h-63.02c-14.1 0-25.64-11.54-25.64-25.64v-63.02c0-14.1 11.54-25.64 25.64-25.64h63.02c14.1 0 25.64 11.54 25.64 25.64v63.02c0 14.1-11.54 25.64-25.64 25.64z" fill="none" stroke="url(#bo)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ge" x1="91.945" x2="164.06" y1="65.551" y2="190.45" gradientUnits="userSpaceOnUse"><stop stop-color="#838BC0" offset="0"/><stop stop-color="#5C6596" offset="1"/></linearGradient><path d="m159.95 185.94h-63.9c-14.29 0-25.99-11.7-25.99-25.99v-63.9c0-14.29 11.7-25.99 25.99-25.99h63.89c14.29 0 25.99 11.7 25.99 25.99v63.89c0.01 14.3-11.69 26-25.98 26z" fill="none" stroke="url(#ge)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fg" x1="91.471" x2="164.53" y1="64.73" y2="191.27" gradientUnits="userSpaceOnUse"><stop stop-color="#838BC0" offset="0"/><stop stop-color="#5B6495" offset="1"/></linearGradient><path d="m160.38 186.73h-64.76c-14.49 0-26.34-11.85-26.34-26.34v-64.77c0-14.49 11.85-26.34 26.34-26.34h64.76c14.49 0 26.34 11.85 26.34 26.34v64.76c0.01 14.49-11.85 26.35-26.34 26.35z" fill="none" stroke="url(#fg)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dw" x1="90.998" x2="165" y1="63.91" y2="192.09" gradientUnits="userSpaceOnUse"><stop stop-color="#838BC0" offset="0"/><stop stop-color="#5B6495" offset="1"/></linearGradient><path d="m160.82 187.51h-65.64c-14.68 0-26.7-12.01-26.7-26.7v-65.63c0-14.68 12.01-26.7 26.7-26.7h65.63c14.68 0 26.7 12.01 26.7 26.7v65.63c0 14.69-12.01 26.7-26.69 26.7z" fill="none" stroke="url(#dw)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fq" x1="90.524" x2="165.48" y1="63.09" y2="192.91" gradientUnits="userSpaceOnUse"><stop stop-color="#838CC1" offset="0"/><stop stop-color="#5A6394" offset="1"/></linearGradient><path d="m161.25 188.3h-66.5c-14.88 0-27.05-12.17-27.05-27.05v-66.5c0-14.88 12.17-27.05 27.05-27.05h66.5c14.88 0 27.05 12.17 27.05 27.05v66.5c0 14.88-12.17 27.05-27.05 27.05z" fill="none" stroke="url(#fq)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="z" x1="90.05" x2="165.95" y1="62.269" y2="193.73" gradientUnits="userSpaceOnUse"><stop stop-color="#848CC2" offset="0"/><stop stop-color="#596394" offset="1"/></linearGradient><path d="m161.69 189.09h-67.38c-15.07 0-27.41-12.33-27.41-27.41v-67.37c0-15.07 12.33-27.41 27.41-27.41h67.37c15.07 0 27.41 12.33 27.41 27.41v67.37c0 15.08-12.33 27.41-27.4 27.41z" fill="none" stroke="url(#z)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bp" x1="89.577" x2="166.42" y1="61.449" y2="194.55" gradientUnits="userSpaceOnUse"><stop stop-color="#848CC2" offset="0"/><stop stop-color="#596394" offset="1"/></linearGradient><path d="m162.12 189.88h-68.24c-15.27 0-27.76-12.49-27.76-27.76v-68.24c0-15.27 12.49-27.76 27.76-27.76h68.24c15.27 0 27.76 12.49 27.76 27.76v68.24c0 15.27-12.49 27.76-27.76 27.76z" fill="none" stroke="url(#bp)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="am" x1="89.103" x2="166.9" y1="60.628" y2="195.37" gradientUnits="userSpaceOnUse"><stop stop-color="#848CC2" offset="0"/><stop stop-color="#596394" offset="1"/></linearGradient><path d="m162.56 190.67h-69.12c-15.46 0-28.11-12.65-28.11-28.11v-69.12c0-15.46 12.65-28.11 28.11-28.11h69.11c15.46 0 28.11 12.65 28.11 28.11v69.11c0.01 15.47-12.64 28.12-28.1 28.12z" fill="none" stroke="url(#am)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="cr" x1="88.629" x2="167.37" y1="59.808" y2="196.19" gradientUnits="userSpaceOnUse"><stop stop-color="#858DC2" offset="0"/><stop stop-color="#596293" offset="1"/></linearGradient><path d="m162.99 191.46h-69.98c-15.66 0-28.47-12.81-28.47-28.47v-69.98c0-15.66 12.81-28.47 28.47-28.47h69.98c15.66 0 28.47 12.81 28.47 28.47v69.98c0 15.66-12.81 28.47-28.47 28.47z" fill="none" stroke="url(#cr)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="al" x1="88.156" x2="167.84" y1="58.987" y2="197.01" gradientUnits="userSpaceOnUse"><stop stop-color="#858DC2" offset="0"/><stop stop-color="#586293" offset="1"/></linearGradient><path d="m163.42 192.24h-70.84c-15.85 0-28.82-12.97-28.82-28.82v-70.84c0-15.85 12.97-28.82 28.82-28.82h70.85c15.85 0 28.82 12.97 28.82 28.82v70.85c-0.01 15.85-12.97 28.81-28.83 28.81z" fill="none" stroke="url(#al)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fk" x1="87.682" x2="168.32" y1="58.167" y2="197.83" gradientUnits="userSpaceOnUse"><stop stop-color="#858DC2" offset="0"/><stop stop-color="#586293" offset="1"/></linearGradient><path d="m163.86 193.03h-71.72c-16.05 0-29.17-13.13-29.17-29.17v-71.72c0-16.05 13.13-29.17 29.17-29.17h71.72c16.05 0 29.17 13.13 29.17 29.17v71.72c0 16.04-13.13 29.17-29.17 29.17z" fill="none" stroke="url(#fk)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dk" x1="87.208" x2="168.79" y1="57.347" y2="198.65" gradientUnits="userSpaceOnUse"><stop stop-color="#858DC2" offset="0"/><stop stop-color="#586192" offset="1"/></linearGradient><path d="m164.29 193.82h-72.58c-16.24 0-29.53-13.29-29.53-29.53v-72.58c0-16.24 13.29-29.53 29.53-29.53h72.59c16.24 0 29.53 13.29 29.53 29.53v72.59c-0.01 16.23-13.3 29.52-29.54 29.52z" fill="none" stroke="url(#dk)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ad" x1="86.735" x2="169.27" y1="56.526" y2="199.47" gradientUnits="userSpaceOnUse"><stop stop-color="#858EC3" offset="0"/><stop stop-color="#586192" offset="1"/></linearGradient><path d="m164.73 194.61h-73.46c-16.43 0-29.88-13.45-29.88-29.88v-73.46c0-16.43 13.45-29.88 29.88-29.88h73.46c16.43 0 29.88 13.45 29.88 29.88v73.46c0 16.43-13.45 29.88-29.88 29.88z" fill="none" stroke="url(#ad)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dx" x1="86.261" x2="169.74" y1="55.706" y2="200.29" gradientUnits="userSpaceOnUse"><stop stop-color="#858EC3" offset="0"/><stop stop-color="#576192" offset="1"/></linearGradient><path d="m165.16 195.4h-74.32c-16.63 0-30.23-13.61-30.23-30.23v-74.33c0-16.63 13.61-30.23 30.23-30.23h74.33c16.63 0 30.23 13.61 30.23 30.23v74.33c0 16.62-13.61 30.23-30.24 30.23z" fill="none" stroke="url(#dx)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fm" x1="85.787" x2="170.21" y1="54.886" y2="201.11" gradientUnits="userSpaceOnUse"><stop stop-color="#858EC3" offset="0"/><stop stop-color="#576091" offset="1"/></linearGradient><path d="m165.6 196.19h-75.2c-16.82 0-30.59-13.76-30.59-30.59v-75.2c0-16.82 13.76-30.59 30.59-30.59h75.2c16.82 0 30.59 13.76 30.59 30.59v75.2c0 16.82-13.77 30.59-30.59 30.59z" fill="none" stroke="url(#fm)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="f" x1="85.314" x2="170.69" y1="54.065" y2="201.93" gradientUnits="userSpaceOnUse"><stop stop-color="#868EC3" offset="0"/><stop stop-color="#566091" offset="1"/></linearGradient><path d="m166.03 196.98h-76.06c-17.02 0-30.94-13.92-30.94-30.94v-76.07c0-17.02 13.92-30.94 30.94-30.94h76.07c17.02 0 30.94 13.92 30.94 30.94v76.07c0 17.01-13.93 30.94-30.95 30.94z" fill="none" stroke="url(#f)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="k" x1="84.84" x2="171.16" y1="53.245" y2="202.76" gradientUnits="userSpaceOnUse"><stop stop-color="#868FC3" offset="0"/><stop stop-color="#566090" offset="1"/></linearGradient><path d="m166.47 197.76h-76.94c-17.21 0-31.3-14.08-31.3-31.3v-76.93c0-17.21 14.08-31.3 31.3-31.3h76.94c17.21 0 31.3 14.08 31.3 31.3v76.94c-0.01 17.21-14.09 31.29-31.3 31.29z" fill="none" stroke="url(#k)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bh" x1="84.366" x2="171.63" y1="52.424" y2="203.58" gradientUnits="userSpaceOnUse"><stop stop-color="#868FC4" offset="0"/><stop stop-color="#555F90" offset="1"/></linearGradient><path d="m166.9 198.55h-77.8c-17.41 0-31.65-14.24-31.65-31.65v-77.8c0-17.41 14.24-31.65 31.65-31.65h77.81c17.41 0 31.65 14.24 31.65 31.65v77.81c-0.01 17.4-14.25 31.64-31.66 31.64z" fill="none" stroke="url(#bh)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="en" x1="83.893" x2="172.11" y1="51.604" y2="204.4" gradientUnits="userSpaceOnUse"><stop stop-color="#878FC4" offset="0"/><stop stop-color="#555F8F" offset="1"/></linearGradient><path d="m167.34 199.34h-78.68c-17.6 0-32-14.4-32-32v-78.68c0-17.6 14.4-32 32-32h78.68c17.6 0 32 14.4 32 32v78.68c0 17.6-14.4 32-32 32z" fill="none" stroke="url(#en)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ex" x1="83.419" x2="172.58" y1="50.784" y2="205.22" gradientUnits="userSpaceOnUse"><stop stop-color="#878FC4" offset="0"/><stop stop-color="#555F8F" offset="1"/></linearGradient><path d="m167.77 200.13h-79.54c-17.8 0-32.36-14.56-32.36-32.36v-79.54c0-17.8 14.56-32.36 32.36-32.36h79.54c17.8 0 32.36 14.56 32.36 32.36v79.54c0 17.8-14.56 32.36-32.36 32.36z" fill="none" stroke="url(#ex)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="u" x1="82.945" x2="173.05" y1="49.963" y2="206.04" gradientUnits="userSpaceOnUse"><stop stop-color="#878FC5" offset="0"/><stop stop-color="#555E8F" offset="1"/></linearGradient><path d="m168.21 200.92h-80.42c-17.99 0-32.71-14.72-32.71-32.71v-80.42c0-17.99 14.72-32.71 32.71-32.71h80.41c17.99 0 32.71 14.72 32.71 32.71v80.41c0.01 18-14.71 32.72-32.7 32.72z" fill="none" stroke="url(#u)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="bw" x1="82.472" x2="173.53" y1="49.143" y2="206.86" gradientUnits="userSpaceOnUse"><stop stop-color="#8790C5" offset="0"/><stop stop-color="#545E8F" offset="1"/></linearGradient><path d="m168.64 201.71h-81.28c-18.19 0-33.06-14.88-33.06-33.06v-81.29c0-18.19 14.88-33.06 33.06-33.06h81.28c18.19 0 33.06 14.88 33.06 33.06v81.28c0.01 18.19-14.87 33.07-33.06 33.07z" fill="none" stroke="url(#bw)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="em" x1="81.998" x2="174" y1="48.322" y2="207.68" gradientUnits="userSpaceOnUse"><stop stop-color="#8790C5" offset="0"/><stop stop-color="#545E8F" offset="1"/></linearGradient><path d="m169.08 202.49h-82.16c-18.38 0-33.42-15.04-33.42-33.42v-82.15c0-18.38 15.04-33.42 33.42-33.42h82.15c18.38 0 33.42 15.04 33.42 33.42v82.15c0 18.39-15.03 33.42-33.41 33.42z" fill="none" stroke="url(#em)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ff" x1="81.524" x2="174.48" y1="47.502" y2="208.5" gradientUnits="userSpaceOnUse"><stop stop-color="#8790C5" offset="0"/><stop stop-color="#545D8E" offset="1"/></linearGradient><path d="m169.51 203.28h-83.02c-18.57 0-33.77-15.2-33.77-33.77v-83.02c0-18.57 15.2-33.77 33.77-33.77h83.02c18.57 0 33.77 15.2 33.77 33.77v83.02c0 18.58-15.19 33.77-33.77 33.77z" fill="none" stroke="url(#ff)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ga" x1="81.051" x2="174.95" y1="46.681" y2="209.32" gradientUnits="userSpaceOnUse"><stop stop-color="#8790C5" offset="0"/><stop stop-color="#545D8E" offset="1"/></linearGradient><path d="m169.95 204.07h-83.9c-18.77 0-34.13-15.36-34.13-34.13v-83.89c0-18.77 15.36-34.13 34.13-34.13h83.89c18.77 0 34.13 15.36 34.13 34.13v83.89c0 18.78-15.35 34.13-34.12 34.13z" fill="none" stroke="url(#ga)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dl" x1="80.577" x2="175.42" y1="45.861" y2="210.14" gradientUnits="userSpaceOnUse"><stop stop-color="#8890C5" offset="0"/><stop stop-color="#535D8E" offset="1"/></linearGradient><path d="m170.38 204.86h-84.76c-18.96 0-34.48-15.52-34.48-34.48v-84.76c0-18.96 15.52-34.48 34.48-34.48h84.76c18.96 0 34.48 15.52 34.48 34.48v84.76c0 18.96-15.52 34.48-34.48 34.48z" fill="none" stroke="url(#dl)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ek" x1="80.103" x2="175.9" y1="45.041" y2="210.96" gradientUnits="userSpaceOnUse"><stop stop-color="#8890C5" offset="0"/><stop stop-color="#535D8D" offset="1"/></linearGradient><path d="m170.82 205.65h-85.64c-19.16 0-34.83-15.67-34.83-34.83v-85.64c0-19.16 15.67-34.83 34.83-34.83h85.63c19.16 0 34.83 15.67 34.83 34.83v85.63c0.01 19.16-15.67 34.84-34.82 34.84z" fill="none" stroke="url(#ek)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="ar" x1="79.63" x2="176.37" y1="44.22" y2="211.78" gradientUnits="userSpaceOnUse"><stop stop-color="#8891C5" offset="0"/><stop stop-color="#525C8C" offset="1"/></linearGradient><path d="m171.25 206.44h-86.5c-19.35 0-35.19-15.83-35.19-35.19v-86.5c0-19.35 15.83-35.19 35.19-35.19h86.5c19.35 0 35.19 15.83 35.19 35.19v86.5c0 19.35-15.84 35.19-35.19 35.19z" fill="none" stroke="url(#ar)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="fn" x1="79.156" x2="176.84" y1="43.4" y2="212.6" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#525C8C" offset="1"/></linearGradient><path d="m171.69 207.23h-87.38c-19.55 0-35.54-15.99-35.54-35.54v-87.38c0-19.55 15.99-35.54 35.54-35.54h87.37c19.55 0 35.54 15.99 35.54 35.54v87.37c0.01 19.55-15.99 35.55-35.53 35.55z" fill="none" stroke="url(#fn)" stroke-miterlimit="10" stroke-width="5"/><linearGradient id="dt" x1="78.682" x2="177.32" y1="42.579" y2="213.42" gradientUnits="userSpaceOnUse"><stop stop-color="#8991C5" offset="0"/><stop stop-color="#515B8C" offset="1"/></linearGradient><path d="m172.12 208.01h-88.24c-19.74 0-35.89-16.15-35.89-35.89v-88.24c0-19.74 16.15-35.89 35.89-35.89h88.24c19.74 0 35.89 16.15 35.89 35.89v88.24c0 19.74-16.15 35.89-35.89 35.89z" fill="none" stroke="url(#dt)" stroke-miterlimit="10" stroke-width="5"/><defs><path id="y" d="m112.25 140.03s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1zm-28.4 24.14h-0.14-0.03 0.34-0.03-0.14zm90.55-46.51c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.83s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0.01-0.01 22.02-0.01 22.02 20.78zm-17.92 1.15c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.03 8.17-8.17 8.17-8.17zm31.05 20.85h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c-0.01 3.49 3.29 3.3 3.29 3.3zm3.84 7.5c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68 5.31 0 9.01-3.79 9.01-8.68 0.01-5.05-3.7-8.76-9.01-8.76z"/></defs><clipPath id="as"><use xlink:href="#y"/></clipPath><g clip-path="url(#as)"><path class="st205" d="m112.25 140.15s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st205" d="m83.85 164.29h-0.14-0.03 0.34-0.03-0.14z"/><path class="st206" d="m112.6 140.5s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st206" d="m84.2 164.64h-0.14-0.03 0.34-0.03-0.14z"/><path class="st207" d="m112.95 140.85s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st207" d="m84.56 164.99h-0.14-0.03 0.34-0.03-0.14z"/><path class="st208" d="m113.3 141.2s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st208" d="m84.91 165.35h-0.14-0.03 0.34-0.03-0.14z"/><path class="st209" d="m113.66 141.56s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st209" d="m85.26 165.7h-0.14-0.03 0.34-0.03-0.14z"/><path class="st210" d="m114.01 141.91s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st210" d="m85.61 166.05h-0.14-0.03 0.34-0.03-0.14z"/><path class="st211" d="m114.36 142.26s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st211" d="m85.96 166.4h-0.14-0.03 0.34-0.03-0.14z"/><path class="st212" d="m114.71 142.61s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st212" d="m86.32 166.76h-0.14-0.03 0.34-0.03-0.14z"/><path class="st213" d="m115.07 142.97s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st213" d="m86.67 167.11h-0.14-0.03 0.34-0.03-0.14z"/><path class="st214" d="m115.42 143.32s0.18 24.02-28.26 24.14l-0.14-0.01-0.14 0.01c-28.44-0.12-28.26-24.14-28.26-24.14v-38.1s-0.61-4.94 3.96-4.94h10.94s2.72-0.12 2.72 4.63v37.31s-0.12 10.67 10.73 10.67h0.09c10.85 0 10.73-10.67 10.73-10.67v-37.31c0-4.76 2.72-4.63 2.72-4.63h10.94c4.57 0 3.96 4.94 3.96 4.94v38.1z"/><path class="st214" d="m87.02 167.46h-0.14-0.03 0.34-0.03-0.14z"/><path class="st205" d="m174.4 117.77c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.83s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0.01-0.01 22.02-0.01 22.02 20.78z"/><path class="st206" d="m174.75 118.13c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.83s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0.01-0.01 22.02-0.01 22.02 20.78z"/><path class="st207" d="m175.11 118.48c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.83s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0.01-0.01 22.02-0.01 22.02 20.78z"/><path class="st208" d="m175.46 118.83c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.83s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0.01-0.01 22.02-0.01 22.02 20.78z"/><path class="st209" d="m175.81 119.18c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.81s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c-0.01-0.01 22-0.01 22 20.78z"/><path class="st210" d="m176.16 119.53c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.83s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0.01-0.01 22.02-0.01 22.02 20.78z"/><path class="st211" d="m176.52 119.89c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.82s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0-0.01 22.01-0.01 22.01 20.78z"/><path class="st212" d="m176.87 120.24c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.83s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0.01-0.01 22.02-0.01 22.02 20.78z"/><path class="st213" d="m177.22 120.59c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.82s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0-0.01 22.01-0.01 22.01 20.78z"/><path class="st214" d="m177.57 120.94c0 20.79-16.46 22.86-23.9 23.29h-3.54s-2.99-0.12-2.99 3.41v15.61s0.18 2.87-2.87 2.87h-11.83s-2.77-0.06-2.77-2.77-0.03-59.23-0.03-59.11c0 0-0.49-4.08 4.08-4.08h21.83c0.01-0.01 22.02-0.01 22.02 20.78z"/><path class="st205" d="m187.53 139.78h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c-0.01 3.49 3.29 3.3 3.29 3.3z"/><path class="st205" d="m191.37 147.28c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68 5.31 0 9.01-3.79 9.01-8.68 0.01-5.05-3.7-8.76-9.01-8.76z"/><path class="st206" d="m187.88 140.13h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c0 3.49 3.29 3.3 3.29 3.3z"/><path class="st206" d="m191.73 147.63c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68s9.01-3.79 9.01-8.68c0-5.05-3.71-8.76-9.01-8.76z"/><path class="st207" d="m188.23 140.49h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c0 3.48 3.29 3.3 3.29 3.3z"/><path class="st207" d="m192.08 147.99c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68 5.31 0 9.01-3.79 9.01-8.68 0-5.06-3.71-8.76-9.01-8.76z"/><path class="st208" d="m188.58 140.84h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c0 3.48 3.29 3.3 3.29 3.3z"/><path class="st208" d="m192.43 148.34c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68s9.01-3.79 9.01-8.68c0-5.06-3.7-8.76-9.01-8.76z"/><path class="st209" d="m188.93 141.19h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c0 3.48 3.29 3.3 3.29 3.3z"/><path class="st209" d="m192.78 148.69c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68 5.31 0 9.01-3.79 9.01-8.68 0.01-5.05-3.7-8.76-9.01-8.76z"/><path class="st210" d="m189.29 141.54h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c-0.01 3.49 3.29 3.3 3.29 3.3z"/><path class="st210" d="m193.13 149.04c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68 5.31 0 9.01-3.79 9.01-8.68 0.01-5.05-3.7-8.76-9.01-8.76z"/><path class="st211" d="m189.64 141.9h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c0 3.48 3.29 3.3 3.29 3.3z"/><path class="st211" d="m193.49 149.39c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68s9.01-3.79 9.01-8.68c0-5.05-3.71-8.76-9.01-8.76z"/><path class="st212" d="m189.99 142.25h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c0 3.48 3.29 3.3 3.29 3.3z"/><path class="st212" d="m193.84 149.75c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68 5.31 0 9.01-3.79 9.01-8.68 0-5.06-3.7-8.76-9.01-8.76z"/><path class="st213" d="m190.34 142.6h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c0 3.48 3.29 3.3 3.29 3.3z"/><path class="st213" d="m194.19 150.1c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68s9.01-3.79 9.01-8.68c0-5.05-3.7-8.76-9.01-8.76z"/><path class="st214" d="m190.7 142.95h7.62c4.08 0 3.72-3.72 3.72-3.72l1.71-34.93c0-4.63-4.21-4.21-4.21-4.21h-9.45c-5.87 0-4.63 4.63-4.63 4.63l1.95 34.93c-0.01 3.49 3.29 3.3 3.29 3.3z"/><path class="st214" d="m194.54 150.45c-5.31 0-9.01 3.71-9.01 8.76 0 4.89 3.71 8.68 9.01 8.68 5.31 0 9.01-3.79 9.01-8.68 0.01-5.05-3.7-8.76-9.01-8.76z"/><path class="st214" d="m159.65 122.1c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.04 8.17-8.17 8.17-8.17z"/><path class="st215" d="m159.3 121.75c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.04 8.17-8.17 8.17-8.17z"/><path class="st216" d="m158.94 121.4c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.04 8.17-8.17 8.17-8.17z"/><path class="st217" d="m158.59 121.04c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.03 8.17-8.17 8.17-8.17z"/><path class="st218" d="m158.24 120.69c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.03 8.17-8.17 8.17-8.17z"/><path class="st219" d="m157.89 120.34c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.04 8.17-8.17 8.17-8.17z"/><path class="st220" d="m157.53 119.99c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.04 8.17-8.17 8.17-8.17z"/><path class="st221" d="m157.18 119.64c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.04 8.17-8.17 8.17-8.17z"/><path class="st222" d="m156.83 119.28c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.03 8.17-8.17 8.17-8.17z"/><path class="st223" d="m156.48 118.93c0-7.62-5.73-7.74-5.73-7.74h-6.77l0.06 15.91h4.27c8.78-1.04 8.17-8.17 8.17-8.17z"/></g></g></svg>`;
  var UniversalProfiles_Apps_Logo_96px_svg_default = image;
  var ModalPopup = class extends i4 {
    constructor() {
      super(...arguments);
      this.isOpen = false;
      this.iframeSrc = "";
      this.handleIframeLoad = () => {
        const { contentWindow } = this.iframeElement || {};
        this.resolve?.(contentWindow);
      };
      this.handleIframeError = (e4) => {
        this.reject?.(e4.error);
        this.closeModal();
      };
    }
    render() {
      return x`
      <div class="modal ${this.isOpen ? "show" : ""}">
        <div class="modal-content">
          <span class="close-button" @click="${this.closeModal}">&times;</span>
          <iframe src="about:blank"></iframe>
        </div>
      </div>
    `;
    }
    async openModal(url) {
      const defer = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      this.iframeSrc = url;
      this.isOpen = true;
      if (this.iframeElement) {
        this.iframeElement.src = url;
      }
      return defer;
    }
    firstUpdated() {
      this.iframeElement = this.renderRoot.querySelector("iframe");
      if (this.iframeElement) {
        this.iframeElement.addEventListener("load", this.handleIframeLoad);
        this.iframeElement.addEventListener("error", this.handleIframeError);
        if (this.iframeSrc) {
          this.iframeElement.src = this.iframeSrc;
        }
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      if (this.iframeElement) {
        this.iframeElement.removeEventListener("load", this.handleIframeLoad);
        this.iframeElement.removeEventListener("error", this.handleIframeError);
        this.iframeElement = null;
      }
    }
    closeModal() {
      this.isOpen = false;
      this.iframeSrc = "";
    }
  };
  ModalPopup.styles = i`
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
    }
    .modal.show {
      display: flex;
    }
    .modal-content {
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      /* Default size for larger screens */
      width: 480px;
      height: 640px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    /* Fullscreen iframe for mobile devices */
    @media (max-width: 768px) {
      .modal-content {
        width: 100%;
        height: 100%;
        border-radius: 0; /* Remove rounded corners on mobile */
      }
    }
    .close-button {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 24px;
      cursor: pointer;
      z-index: 10;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  `;
  ModalPopup.properties = {
    isOpen: { type: Boolean },
    iframeSrc: { type: String }
  };
  function createWalletPopup() {
    if (typeof window === "undefined" || typeof document === "undefined" || typeof customElements === "undefined") {
      return null;
    }
    if (!customElements.get("up-wallet-popup")) {
      customElements.define("up-wallet-popup", ModalPopup);
    }
    const existingPopup = document.querySelector("up-wallet-popup") || null;
    if (existingPopup) {
      return existingPopup;
    }
    const popup = document.createElement("up-wallet-popup");
    document.body.appendChild(popup);
    return popup;
  }
  var clientLog = (0, import_debug.default)("upProvider:client");
  var pendingRequests = /* @__PURE__ */ new Map();
  var _options;
  var _buffered;
  var _UPClientProvider = class extends eventemitter3_default {
    constructor(options) {
      super();
      __privateAdd2(this, _options);
      __privateAdd2(this, _buffered, []);
      this._getOptions = () => {
        return __privateGet2(this, _options);
      };
      __privateSet2(this, _options, options);
    }
    emit(event, ...args) {
      if (__privateGet2(this, _buffered)) {
        __privateGet2(this, _buffered).push([event, args]);
        return false;
      }
      return super.emit(event, ...args);
    }
    resume(delay = 0) {
      const buffered = __privateGet2(this, _buffered);
      if (!buffered) {
        return;
      }
      __privateSet2(this, _buffered, void 0);
      setTimeout(() => {
        while (buffered.length > 0) {
          const val = buffered.shift();
          if (val) {
            const [event, args] = val;
            super.emit(event, ...args);
          }
        }
      }, delay);
    }
    on(event, fn, context) {
      this.resume(100);
      return super.on(event, fn, context);
    }
    addListener(event, fn, context) {
      this.resume(100);
      return super.addListener(event, fn, context);
    }
    get isUPClientProvider() {
      return true;
    }
    get isConnected() {
      return this._getOptions().allowedAccounts().length > 0;
    }
    get isMiniApp() {
      return this._getOptions()?.startupPromise.catch(() => false).then(() => true);
    }
    async request(_method2, _params, _clientParams) {
      await this._getOptions()?.startupPromise;
      const method = typeof _method2 === "string" ? _method2 : _method2.method;
      const params = typeof _method2 === "string" ? _params : _method2.params;
      const clientParams = typeof _method2 === "string" ? _clientParams : _params;
      if (method === "up_contextAccounts") {
        return this._getOptions().contextAccounts();
      }
      return this._getOptions()?.client?.request(method, params, clientParams) || null;
    }
    get chainId() {
      return this._getOptions()?.chainId() || 0;
    }
    get accounts() {
      return this._getOptions()?.allowedAccounts() || [];
    }
    get contextAccounts() {
      return this._getOptions()?.contextAccounts() || [];
    }
  };
  _options = /* @__PURE__ */ new WeakMap();
  _buffered = /* @__PURE__ */ new WeakMap();
  async function testWindow(up, remote, options) {
    const _up = up || (typeof window !== "undefined" ? window : void 0);
    if (!_up) {
      throw new Error("No UP found");
    }
    return new Promise((resolve, reject) => {
      let timeout = 0;
      const channel = new MessageChannel();
      const testFn = (event) => {
        if (event.data?.type === "upProvider:windowInitialize") {
          const { chainId, allowedAccounts, contextAccounts, rpcUrls } = event.data;
          clientLog("client init", event.data, _up);
          window.removeEventListener("message", testFn);
          if (timeout) {
            clearTimeout(timeout);
            timeout = 0;
          }
          options.clientChannel = channel.port1;
          options.window = _up;
          try {
            _up.addEventListener("close", () => {
              options.restart();
              remote.emit("windowClosed");
            });
          } catch {
          }
          options.init = { chainId, allowedAccounts, contextAccounts, rpcUrls };
          clientLog("client connected", event.data.type, event.data);
          options.clientChannel.postMessage({
            type: "upProvider:windowInitialized",
            chainId,
            allowedAccounts,
            contextAccounts,
            rpcUrls
          });
          resolve(remote);
        }
      };
      channel.port1.addEventListener("message", testFn);
      channel.port1.start();
      window.addEventListener("message", testFn);
      clientLog("client", "send find wallet", _up);
      _up.postMessage("upProvider:hasProvider", "*", [channel.port2]);
      timeout = setTimeout(() => {
        timeout = 0;
        window.removeEventListener("message", testFn);
        channel.port1.removeEventListener("message", testFn);
        clientLog("client", "No UP found", _up);
        reject(new Error("No UP found"));
      }, 1e3);
    });
  }
  async function findUP(authURL, remote, options) {
    if (typeof authURL === "object" && !(authURL instanceof Window) && authURL?.url) {
      const info = localStorage.getItem(`upProvider:info:${authURL}`);
      if (info) {
        const { chainId, allowedAccounts, contextAccounts, rpcUrls } = JSON.parse(info);
        options.init = { chainId, allowedAccounts, contextAccounts, rpcUrls };
      }
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        if (authURL.mode === "popup") {
          const childWindow = window.open(authURL.url, "UE Wallet", "width=400,height=600");
          if (childWindow) {
            const up = await testWindow(childWindow, remote, options);
            if (up) {
              return up;
            }
          }
        }
        if (authURL.mode === "iframe") {
          const popup = createWalletPopup();
          if (popup) {
            const current2 = await popup.openModal(authURL.url);
            if (current2) {
              current2.addEventListener("close", () => {
                options.restart();
                remote.emit("windowClosed");
              });
              const up = await testWindow(current2, remote, options);
              if (up) {
                return up;
              }
              throw new Error("No UP found");
            }
          }
        }
      }
      return;
    }
    const current = typeof window !== "undefined" && window instanceof Window ? window.opener || window.parent : null;
    if (current) {
      const up = await testWindow(current, remote, options);
      if (up) {
        return up;
      }
    }
    if (authURL == null) {
      throw new Error("No UP found");
    }
    if (typeof authURL === "object" && authURL instanceof Window) {
      throw new Error("No UP found");
    }
    throw new Error("No UP found");
  }
  async function findDestination(authURL, remote, options, search = false) {
    let up = typeof authURL === "object" && authURL instanceof Window || authURL == null ? await testWindow(authURL, remote, options).catch((error) => {
      if (search) {
        return void 0;
      }
      throw error;
    }) : await findUP(authURL, remote, options);
    if (search && !up) {
      let retry = 3;
      while (retry > 0) {
        let current = window.opener && window.opener !== window ? window.opener : window.parent && window.parent !== window ? window.parent : void 0;
        clientLog("search", current);
        while (current) {
          up = await testWindow(current, remote, options).catch(() => void 0);
          if (up) {
            break;
          }
          if (current === window.top) {
            break;
          }
          clientLog("current", current);
          current = current.opener && current.opener !== current ? current.opener : current.parent && current.parent !== current ? current.parent : null;
          clientLog("next", current);
        }
        if (up) {
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        retry--;
      }
    }
    if (!up) {
      throw new Error("No UP found");
    }
    return up;
  }
  function createClientUPProvider(authURL, search = true) {
    let chainId = 0;
    let allowedAccounts = [];
    let contextAccounts = [];
    let rpcUrls = [];
    let startupResolve;
    let startupPromise = new Promise((resolve) => {
      startupResolve = resolve;
    }).then(() => {
      remote.emit("initialized");
    });
    const options = {
      chainId: () => chainId,
      restart: () => {
      },
      allowedAccounts: () => allowedAccounts,
      contextAccounts: () => contextAccounts,
      startupPromise
    };
    options.restart = function restart() {
      options.startupPromise = startupPromise = new Promise((resolve) => {
        startupResolve = resolve;
      }).then(() => {
        remote.emit("initialized");
      });
    };
    const remote = new _UPClientProvider(options);
    let searchPromise;
    const providerInfo = {
      uuid: v4_default(),
      name: "UE Universal Profile",
      icon: `data:image/svg+xml,${encodeURIComponent(UniversalProfiles_Apps_Logo_96px_svg_default)}`,
      rdns: "dev.lukso.auth"
    };
    const announceEvent = new CustomEvent("eip6963:announceProvider", {
      detail: Object.freeze({ info: providerInfo, provider: remote })
    });
    window.dispatchEvent(announceEvent);
    window.addEventListener("eip6963:requestProvider", () => {
      window.dispatchEvent(announceEvent);
    });
    const doSearch = async (client, force = false) => {
      if (searchPromise) {
        return searchPromise;
      }
      const activeSearchPromise = findDestination(authURL, remote, options, search).then((up) => {
        up?.addListener("windowClosed", () => {
          searchPromise = null;
        });
        const init3 = options.init;
        if (init3) {
          ;
          ({ chainId, allowedAccounts, contextAccounts, rpcUrls } = init3 || {});
        }
        options.clientChannel?.addEventListener("message", (event) => {
          const fn = startupResolve;
          if (fn) {
            fn();
          }
          startupResolve = () => {
          };
          try {
            const response = event.data;
            clientLog("client", response);
            switch (response.method) {
              case "chainChanged":
                chainId = response.params[0];
                up.emit("chainChanged", chainId);
                return;
              case "contextAccountsChanged":
                contextAccounts = response.params;
                up.emit(
                  "contextAccountsChanged",
                  // Cleanup wrong null or undefined.
                  cleanupAccounts(contextAccounts)
                );
                return;
              case "accountsChanged":
                allowedAccounts = response.params;
                up.emit(
                  "accountsChanged",
                  // Cleanup wrong null or undefined.
                  cleanupAccounts(allowedAccounts)
                );
                return;
              case "rpcUrlsChanged":
                rpcUrls = response.params;
                up.emit("rpcUrls", rpcUrls);
                return;
            }
            const item = pendingRequests.get(response.id);
            if (response.id && item) {
              const { resolve, reject } = item;
              if (response.result) {
                client.receive({ ...response, id: item.id });
                resolve();
              } else if (response.error) {
                const { error: _error2, jsonrpc } = response;
                const { method, params, id: id2 } = item;
                const error = {
                  ..._error2,
                  message: `${_error2.message} ${JSON.stringify(method)}(${JSON.stringify(params)})`
                };
                console.error("error", { error, method, params, id: id2, jsonrpc });
                client.receive({ ...response, id: item.id });
                reject(error);
              }
              pendingRequests.delete(response.id);
            }
          } catch (error) {
            console.error("Error parsing JSON RPC response", error, event);
          }
        });
        options.clientChannel?.start();
        options.client = client;
        return up;
      }).catch((error) => {
        options.client = client;
        startupResolve();
        searchPromise = null;
        throw error;
      }).then((up) => {
        if (!up) {
          searchPromise = null;
        }
        return up;
      });
      searchPromise = activeSearchPromise;
      return activeSearchPromise;
    };
    const allocateConnection = async () => {
      const client = new import_json_rpc_2.JSONRPCClient(async (jsonRPCRequest) => {
        await doSearch(client).then((up) => {
          options.client = client;
          return up;
        });
        return new Promise((resolve, reject) => {
          const { id: id2, method, params } = jsonRPCRequest;
          pendingRequests.set(id2, {
            resolve,
            reject,
            sent: false,
            id: id2,
            method,
            params
          });
          options.clientChannel?.postMessage(jsonRPCRequest);
        });
      });
      const request_ = client.request.bind(client);
      const wrapper = async (method, params) => {
        switch (method) {
          case "eth_call":
            if (rpcUrls.length > 0 && Object.keys(params?.[0] ?? {}).every((key) => !/^gasPrice|maxFeePerGas|maxPriorityFeePerGas|value$/.test(key))) {
              clientLog("client direct rpc", rpcUrls, method, params);
              const urls = [...rpcUrls];
              const errors = [];
              while (urls.length > 0) {
                const url = urls.shift();
                try {
                  if (!url) {
                    throw new Error("No RPC URL found");
                  }
                  const result = fetch(url, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      jsonrpc: "2.0",
                      id: v4_default(),
                      method,
                      params
                    })
                  }).then((response) => {
                    if (response.ok) {
                      return response.json();
                    }
                    throw new Error("Network response was not ok");
                  });
                  return result;
                } catch (error) {
                  console.error("error", error);
                  errors.push(error);
                }
              }
              const err = new Error(`All RPC URLs failed: ${errors.map((e4) => e4.message).join(", ")}`);
              err.errors = errors;
              throw err;
            }
        }
        return request_(method, params);
      };
      client.request = async (method, params) => {
        await doSearch(client);
        await startupPromise;
        if (typeof method === "string") {
          return await wrapper(method, params);
        }
        const { method: _method2, params: _params } = method;
        return await wrapper(_method2, _params);
      };
      await doSearch(client);
    };
    if (!authURL || !authURL?.url) {
      allocateConnection();
    }
    return remote;
  }
  var serverLog = (0, import_debug2.default)("upProvider:server");
  var _accounts;
  var _contextAccounts;
  var _chainId;
  var _rpcUrls;
  var _buffered2;
  var _serverChannel;
  var _server;
  var _getter;
  var _setter;
  _accounts = /* @__PURE__ */ new WeakMap();
  _contextAccounts = /* @__PURE__ */ new WeakMap();
  _chainId = /* @__PURE__ */ new WeakMap();
  _rpcUrls = /* @__PURE__ */ new WeakMap();
  _buffered2 = /* @__PURE__ */ new WeakMap();
  _serverChannel = /* @__PURE__ */ new WeakMap();
  _server = /* @__PURE__ */ new WeakMap();
  _getter = /* @__PURE__ */ new WeakMap();
  _setter = /* @__PURE__ */ new WeakMap();
  var _options2;
  var _channels;
  _options2 = /* @__PURE__ */ new WeakMap();
  _channels = /* @__PURE__ */ new WeakMap();
  var cleanupAccounts = (values) => {
    const output2 = [];
    for (const value of values) {
      if (!value || /^0x0+$/.test(value)) {
        break;
      }
      output2.push(value);
    }
    return output2;
  };

  // node_modules/ethers/lib.esm/_version.js
  var version = "6.13.7";

  // node_modules/ethers/lib.esm/utils/properties.js
  function checkType(value, type, name) {
    const types = type.split("|").map((t3) => t3.trim());
    for (let i5 = 0; i5 < types.length; i5++) {
      switch (type) {
        case "any":
          return;
        case "bigint":
        case "boolean":
        case "number":
        case "string":
          if (typeof value === type) {
            return;
          }
      }
    }
    const error = new Error(`invalid value for type ${type}`);
    error.code = "INVALID_ARGUMENT";
    error.argument = `value.${name}`;
    error.value = value;
    throw error;
  }
  async function resolveProperties(value) {
    const keys = Object.keys(value);
    const results = await Promise.all(keys.map((k2) => Promise.resolve(value[k2])));
    return results.reduce((accum, v2, index) => {
      accum[keys[index]] = v2;
      return accum;
    }, {});
  }
  function defineProperties(target, values, types) {
    for (let key in values) {
      let value = values[key];
      const type = types ? types[key] : null;
      if (type) {
        checkType(value, type, key);
      }
      Object.defineProperty(target, key, { enumerable: true, value, writable: false });
    }
  }

  // node_modules/ethers/lib.esm/utils/errors.js
  function stringify(value) {
    if (value == null) {
      return "null";
    }
    if (Array.isArray(value)) {
      return "[ " + value.map(stringify).join(", ") + " ]";
    }
    if (value instanceof Uint8Array) {
      const HEX = "0123456789abcdef";
      let result = "0x";
      for (let i5 = 0; i5 < value.length; i5++) {
        result += HEX[value[i5] >> 4];
        result += HEX[value[i5] & 15];
      }
      return result;
    }
    if (typeof value === "object" && typeof value.toJSON === "function") {
      return stringify(value.toJSON());
    }
    switch (typeof value) {
      case "boolean":
      case "symbol":
        return value.toString();
      case "bigint":
        return BigInt(value).toString();
      case "number":
        return value.toString();
      case "string":
        return JSON.stringify(value);
      case "object": {
        const keys = Object.keys(value);
        keys.sort();
        return "{ " + keys.map((k2) => `${stringify(k2)}: ${stringify(value[k2])}`).join(", ") + " }";
      }
    }
    return `[ COULD NOT SERIALIZE ]`;
  }
  function isError(error, code) {
    return error && error.code === code;
  }
  function isCallException(error) {
    return isError(error, "CALL_EXCEPTION");
  }
  function makeError(message, code, info) {
    let shortMessage = message;
    {
      const details = [];
      if (info) {
        if ("message" in info || "code" in info || "name" in info) {
          throw new Error(`value will overwrite populated values: ${stringify(info)}`);
        }
        for (const key in info) {
          if (key === "shortMessage") {
            continue;
          }
          const value = info[key];
          details.push(key + "=" + stringify(value));
        }
      }
      details.push(`code=${code}`);
      details.push(`version=${version}`);
      if (details.length) {
        message += " (" + details.join(", ") + ")";
      }
    }
    let error;
    switch (code) {
      case "INVALID_ARGUMENT":
        error = new TypeError(message);
        break;
      case "NUMERIC_FAULT":
      case "BUFFER_OVERRUN":
        error = new RangeError(message);
        break;
      default:
        error = new Error(message);
    }
    defineProperties(error, { code });
    if (info) {
      Object.assign(error, info);
    }
    if (error.shortMessage == null) {
      defineProperties(error, { shortMessage });
    }
    return error;
  }
  function assert(check, message, code, info) {
    if (!check) {
      throw makeError(message, code, info);
    }
  }
  function assertArgument(check, message, name, value) {
    assert(check, message, "INVALID_ARGUMENT", { argument: name, value });
  }
  function assertArgumentCount(count, expectedCount, message) {
    if (message == null) {
      message = "";
    }
    if (message) {
      message = ": " + message;
    }
    assert(count >= expectedCount, "missing argument" + message, "MISSING_ARGUMENT", {
      count,
      expectedCount
    });
    assert(count <= expectedCount, "too many arguments" + message, "UNEXPECTED_ARGUMENT", {
      count,
      expectedCount
    });
  }
  var _normalizeForms = ["NFD", "NFC", "NFKD", "NFKC"].reduce((accum, form) => {
    try {
      if ("test".normalize(form) !== "test") {
        throw new Error("bad");
      }
      ;
      if (form === "NFD") {
        const check = String.fromCharCode(233).normalize("NFD");
        const expected = String.fromCharCode(101, 769);
        if (check !== expected) {
          throw new Error("broken");
        }
      }
      accum.push(form);
    } catch (error) {
    }
    return accum;
  }, []);
  function assertNormalize(form) {
    assert(_normalizeForms.indexOf(form) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
      operation: "String.prototype.normalize",
      info: { form }
    });
  }
  function assertPrivate(givenGuard, guard, className) {
    if (className == null) {
      className = "";
    }
    if (givenGuard !== guard) {
      let method = className, operation = "new";
      if (className) {
        method += ".";
        operation += " " + className;
      }
      assert(false, `private constructor; use ${method}from* methods`, "UNSUPPORTED_OPERATION", {
        operation
      });
    }
  }

  // node_modules/ethers/lib.esm/utils/data.js
  function _getBytes(value, name, copy4) {
    if (value instanceof Uint8Array) {
      if (copy4) {
        return new Uint8Array(value);
      }
      return value;
    }
    if (typeof value === "string" && value.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
      const result = new Uint8Array((value.length - 2) / 2);
      let offset = 2;
      for (let i5 = 0; i5 < result.length; i5++) {
        result[i5] = parseInt(value.substring(offset, offset + 2), 16);
        offset += 2;
      }
      return result;
    }
    assertArgument(false, "invalid BytesLike value", name || "value", value);
  }
  function getBytes(value, name) {
    return _getBytes(value, name, false);
  }
  function getBytesCopy(value, name) {
    return _getBytes(value, name, true);
  }
  function isHexString(value, length) {
    if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
      return false;
    }
    if (typeof length === "number" && value.length !== 2 + 2 * length) {
      return false;
    }
    if (length === true && value.length % 2 !== 0) {
      return false;
    }
    return true;
  }
  function isBytesLike(value) {
    return isHexString(value, true) || value instanceof Uint8Array;
  }
  var HexCharacters = "0123456789abcdef";
  function hexlify(data) {
    const bytes2 = getBytes(data);
    let result = "0x";
    for (let i5 = 0; i5 < bytes2.length; i5++) {
      const v2 = bytes2[i5];
      result += HexCharacters[(v2 & 240) >> 4] + HexCharacters[v2 & 15];
    }
    return result;
  }
  function concat(datas) {
    return "0x" + datas.map((d3) => hexlify(d3).substring(2)).join("");
  }
  function dataLength(data) {
    if (isHexString(data, true)) {
      return (data.length - 2) / 2;
    }
    return getBytes(data).length;
  }
  function dataSlice(data, start, end) {
    const bytes2 = getBytes(data);
    if (end != null && end > bytes2.length) {
      assert(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
        buffer: bytes2,
        length: bytes2.length,
        offset: end
      });
    }
    return hexlify(bytes2.slice(start == null ? 0 : start, end == null ? bytes2.length : end));
  }
  function zeroPad(data, length, left) {
    const bytes2 = getBytes(data);
    assert(length >= bytes2.length, "padding exceeds data length", "BUFFER_OVERRUN", {
      buffer: new Uint8Array(bytes2),
      length,
      offset: length + 1
    });
    const result = new Uint8Array(length);
    result.fill(0);
    if (left) {
      result.set(bytes2, length - bytes2.length);
    } else {
      result.set(bytes2, 0);
    }
    return hexlify(result);
  }
  function zeroPadValue(data, length) {
    return zeroPad(data, length, true);
  }
  function zeroPadBytes(data, length) {
    return zeroPad(data, length, false);
  }

  // node_modules/ethers/lib.esm/utils/maths.js
  var BN_0 = BigInt(0);
  var BN_1 = BigInt(1);
  var maxValue = 9007199254740991;
  function fromTwos(_value2, _width) {
    const value = getUint(_value2, "value");
    const width = BigInt(getNumber(_width, "width"));
    assert(value >> width === BN_0, "overflow", "NUMERIC_FAULT", {
      operation: "fromTwos",
      fault: "overflow",
      value: _value2
    });
    if (value >> width - BN_1) {
      const mask2 = (BN_1 << width) - BN_1;
      return -((~value & mask2) + BN_1);
    }
    return value;
  }
  function toTwos(_value2, _width) {
    let value = getBigInt(_value2, "value");
    const width = BigInt(getNumber(_width, "width"));
    const limit = BN_1 << width - BN_1;
    if (value < BN_0) {
      value = -value;
      assert(value <= limit, "too low", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: _value2
      });
      const mask2 = (BN_1 << width) - BN_1;
      return (~value & mask2) + BN_1;
    } else {
      assert(value < limit, "too high", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: _value2
      });
    }
    return value;
  }
  function mask(_value2, _bits) {
    const value = getUint(_value2, "value");
    const bits = BigInt(getNumber(_bits, "bits"));
    return value & (BN_1 << bits) - BN_1;
  }
  function getBigInt(value, name) {
    switch (typeof value) {
      case "bigint":
        return value;
      case "number":
        assertArgument(Number.isInteger(value), "underflow", name || "value", value);
        assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
        return BigInt(value);
      case "string":
        try {
          if (value === "") {
            throw new Error("empty string");
          }
          if (value[0] === "-" && value[1] !== "-") {
            return -BigInt(value.substring(1));
          }
          return BigInt(value);
        } catch (e4) {
          assertArgument(false, `invalid BigNumberish string: ${e4.message}`, name || "value", value);
        }
    }
    assertArgument(false, "invalid BigNumberish value", name || "value", value);
  }
  function getUint(value, name) {
    const result = getBigInt(value, name);
    assert(result >= BN_0, "unsigned value cannot be negative", "NUMERIC_FAULT", {
      fault: "overflow",
      operation: "getUint",
      value
    });
    return result;
  }
  var Nibbles = "0123456789abcdef";
  function toBigInt(value) {
    if (value instanceof Uint8Array) {
      let result = "0x0";
      for (const v2 of value) {
        result += Nibbles[v2 >> 4];
        result += Nibbles[v2 & 15];
      }
      return BigInt(result);
    }
    return getBigInt(value);
  }
  function getNumber(value, name) {
    switch (typeof value) {
      case "bigint":
        assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
        return Number(value);
      case "number":
        assertArgument(Number.isInteger(value), "underflow", name || "value", value);
        assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
        return value;
      case "string":
        try {
          if (value === "") {
            throw new Error("empty string");
          }
          return getNumber(BigInt(value), name);
        } catch (e4) {
          assertArgument(false, `invalid numeric string: ${e4.message}`, name || "value", value);
        }
    }
    assertArgument(false, "invalid numeric value", name || "value", value);
  }
  function toNumber(value) {
    return getNumber(toBigInt(value));
  }
  function toBeHex(_value2, _width) {
    const value = getUint(_value2, "value");
    let result = value.toString(16);
    if (_width == null) {
      if (result.length % 2) {
        result = "0" + result;
      }
    } else {
      const width = getNumber(_width, "width");
      assert(width * 2 >= result.length, `value exceeds width (${width} bytes)`, "NUMERIC_FAULT", {
        operation: "toBeHex",
        fault: "overflow",
        value: _value2
      });
      while (result.length < width * 2) {
        result = "0" + result;
      }
    }
    return "0x" + result;
  }
  function toBeArray(_value2) {
    const value = getUint(_value2, "value");
    if (value === BN_0) {
      return new Uint8Array([]);
    }
    let hex = value.toString(16);
    if (hex.length % 2) {
      hex = "0" + hex;
    }
    const result = new Uint8Array(hex.length / 2);
    for (let i5 = 0; i5 < result.length; i5++) {
      const offset = i5 * 2;
      result[i5] = parseInt(hex.substring(offset, offset + 2), 16);
    }
    return result;
  }
  function toQuantity(value) {
    let result = hexlify(isBytesLike(value) ? value : toBeArray(value)).substring(2);
    while (result.startsWith("0")) {
      result = result.substring(1);
    }
    if (result === "") {
      result = "0";
    }
    return "0x" + result;
  }

  // node_modules/ethers/lib.esm/utils/base58.js
  var Alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var BN_02 = BigInt(0);
  var BN_58 = BigInt(58);
  function encodeBase58(_value2) {
    const bytes2 = getBytes(_value2);
    let value = toBigInt(bytes2);
    let result = "";
    while (value) {
      result = Alphabet[Number(value % BN_58)] + result;
      value /= BN_58;
    }
    for (let i5 = 0; i5 < bytes2.length; i5++) {
      if (bytes2[i5]) {
        break;
      }
      result = Alphabet[0] + result;
    }
    return result;
  }

  // node_modules/ethers/lib.esm/utils/base64-browser.js
  function decodeBase64(textData) {
    textData = atob(textData);
    const data = new Uint8Array(textData.length);
    for (let i5 = 0; i5 < textData.length; i5++) {
      data[i5] = textData.charCodeAt(i5);
    }
    return getBytes(data);
  }
  function encodeBase64(_data4) {
    const data = getBytes(_data4);
    let textData = "";
    for (let i5 = 0; i5 < data.length; i5++) {
      textData += String.fromCharCode(data[i5]);
    }
    return btoa(textData);
  }

  // node_modules/ethers/lib.esm/utils/events.js
  var _listener;
  var EventPayload = class {
    /**
     *  Create a new **EventPayload** for %%emitter%% with
     *  the %%listener%% and for %%filter%%.
     */
    constructor(emitter, listener, filter) {
      /**
       *  The event filter.
       */
      __publicField(this, "filter");
      /**
       *  The **EventEmitterable**.
       */
      __publicField(this, "emitter");
      __privateAdd(this, _listener);
      __privateSet(this, _listener, listener);
      defineProperties(this, { emitter, filter });
    }
    /**
     *  Unregister the triggered listener for future events.
     */
    async removeListener() {
      if (__privateGet(this, _listener) == null) {
        return;
      }
      await this.emitter.off(this.filter, __privateGet(this, _listener));
    }
  };
  _listener = new WeakMap();

  // node_modules/ethers/lib.esm/utils/utf8.js
  function errorFunc(reason, offset, bytes2, output2, badCodepoint) {
    assertArgument(false, `invalid codepoint at offset ${offset}; ${reason}`, "bytes", bytes2);
  }
  function ignoreFunc(reason, offset, bytes2, output2, badCodepoint) {
    if (reason === "BAD_PREFIX" || reason === "UNEXPECTED_CONTINUE") {
      let i5 = 0;
      for (let o5 = offset + 1; o5 < bytes2.length; o5++) {
        if (bytes2[o5] >> 6 !== 2) {
          break;
        }
        i5++;
      }
      return i5;
    }
    if (reason === "OVERRUN") {
      return bytes2.length - offset - 1;
    }
    return 0;
  }
  function replaceFunc(reason, offset, bytes2, output2, badCodepoint) {
    if (reason === "OVERLONG") {
      assertArgument(typeof badCodepoint === "number", "invalid bad code point for replacement", "badCodepoint", badCodepoint);
      output2.push(badCodepoint);
      return 0;
    }
    output2.push(65533);
    return ignoreFunc(reason, offset, bytes2, output2, badCodepoint);
  }
  var Utf8ErrorFuncs = Object.freeze({
    error: errorFunc,
    ignore: ignoreFunc,
    replace: replaceFunc
  });
  function getUtf8CodePoints(_bytes, onError) {
    if (onError == null) {
      onError = Utf8ErrorFuncs.error;
    }
    const bytes2 = getBytes(_bytes, "bytes");
    const result = [];
    let i5 = 0;
    while (i5 < bytes2.length) {
      const c4 = bytes2[i5++];
      if (c4 >> 7 === 0) {
        result.push(c4);
        continue;
      }
      let extraLength = null;
      let overlongMask = null;
      if ((c4 & 224) === 192) {
        extraLength = 1;
        overlongMask = 127;
      } else if ((c4 & 240) === 224) {
        extraLength = 2;
        overlongMask = 2047;
      } else if ((c4 & 248) === 240) {
        extraLength = 3;
        overlongMask = 65535;
      } else {
        if ((c4 & 192) === 128) {
          i5 += onError("UNEXPECTED_CONTINUE", i5 - 1, bytes2, result);
        } else {
          i5 += onError("BAD_PREFIX", i5 - 1, bytes2, result);
        }
        continue;
      }
      if (i5 - 1 + extraLength >= bytes2.length) {
        i5 += onError("OVERRUN", i5 - 1, bytes2, result);
        continue;
      }
      let res = c4 & (1 << 8 - extraLength - 1) - 1;
      for (let j2 = 0; j2 < extraLength; j2++) {
        let nextChar = bytes2[i5];
        if ((nextChar & 192) != 128) {
          i5 += onError("MISSING_CONTINUE", i5, bytes2, result);
          res = null;
          break;
        }
        ;
        res = res << 6 | nextChar & 63;
        i5++;
      }
      if (res === null) {
        continue;
      }
      if (res > 1114111) {
        i5 += onError("OUT_OF_RANGE", i5 - 1 - extraLength, bytes2, result, res);
        continue;
      }
      if (res >= 55296 && res <= 57343) {
        i5 += onError("UTF16_SURROGATE", i5 - 1 - extraLength, bytes2, result, res);
        continue;
      }
      if (res <= overlongMask) {
        i5 += onError("OVERLONG", i5 - 1 - extraLength, bytes2, result, res);
        continue;
      }
      result.push(res);
    }
    return result;
  }
  function toUtf8Bytes(str, form) {
    assertArgument(typeof str === "string", "invalid string value", "str", str);
    if (form != null) {
      assertNormalize(form);
      str = str.normalize(form);
    }
    let result = [];
    for (let i5 = 0; i5 < str.length; i5++) {
      const c4 = str.charCodeAt(i5);
      if (c4 < 128) {
        result.push(c4);
      } else if (c4 < 2048) {
        result.push(c4 >> 6 | 192);
        result.push(c4 & 63 | 128);
      } else if ((c4 & 64512) == 55296) {
        i5++;
        const c22 = str.charCodeAt(i5);
        assertArgument(i5 < str.length && (c22 & 64512) === 56320, "invalid surrogate pair", "str", str);
        const pair = 65536 + ((c4 & 1023) << 10) + (c22 & 1023);
        result.push(pair >> 18 | 240);
        result.push(pair >> 12 & 63 | 128);
        result.push(pair >> 6 & 63 | 128);
        result.push(pair & 63 | 128);
      } else {
        result.push(c4 >> 12 | 224);
        result.push(c4 >> 6 & 63 | 128);
        result.push(c4 & 63 | 128);
      }
    }
    return new Uint8Array(result);
  }
  function _toUtf8String(codePoints) {
    return codePoints.map((codePoint) => {
      if (codePoint <= 65535) {
        return String.fromCharCode(codePoint);
      }
      codePoint -= 65536;
      return String.fromCharCode((codePoint >> 10 & 1023) + 55296, (codePoint & 1023) + 56320);
    }).join("");
  }
  function toUtf8String(bytes2, onError) {
    return _toUtf8String(getUtf8CodePoints(bytes2, onError));
  }

  // node_modules/ethers/lib.esm/utils/geturl-browser.js
  function createGetUrl(options) {
    async function getUrl(req, _signal2) {
      assert(_signal2 == null || !_signal2.cancelled, "request cancelled before sending", "CANCELLED");
      const protocol = req.url.split(":")[0].toLowerCase();
      assert(protocol === "http" || protocol === "https", `unsupported protocol ${protocol}`, "UNSUPPORTED_OPERATION", {
        info: { protocol },
        operation: "request"
      });
      assert(protocol === "https" || !req.credentials || req.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
        operation: "request"
      });
      let error = null;
      const controller = new AbortController();
      const timer = setTimeout(() => {
        error = makeError("request timeout", "TIMEOUT");
        controller.abort();
      }, req.timeout);
      if (_signal2) {
        _signal2.addListener(() => {
          error = makeError("request cancelled", "CANCELLED");
          controller.abort();
        });
      }
      const init3 = {
        method: req.method,
        headers: new Headers(Array.from(req)),
        body: req.body || void 0,
        signal: controller.signal
      };
      let resp;
      try {
        resp = await fetch(req.url, init3);
      } catch (_error2) {
        clearTimeout(timer);
        if (error) {
          throw error;
        }
        throw _error2;
      }
      clearTimeout(timer);
      const headers = {};
      resp.headers.forEach((value, key) => {
        headers[key.toLowerCase()] = value;
      });
      const respBody = await resp.arrayBuffer();
      const body = respBody == null ? null : new Uint8Array(respBody);
      return {
        statusCode: resp.status,
        statusMessage: resp.statusText,
        headers,
        body
      };
    }
    return getUrl;
  }
  var defaultGetUrl = createGetUrl({});

  // node_modules/ethers/lib.esm/utils/fetch.js
  var MAX_ATTEMPTS = 12;
  var SLOT_INTERVAL = 250;
  var defaultGetUrlFunc = createGetUrl();
  var reData = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i");
  var reIpfs = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
  var locked = false;
  async function dataGatewayFunc(url, signal) {
    try {
      const match = url.match(reData);
      if (!match) {
        throw new Error("invalid data");
      }
      return new FetchResponse(200, "OK", {
        "content-type": match[1] || "text/plain"
      }, match[2] ? decodeBase64(match[3]) : unpercent(match[3]));
    } catch (error) {
      return new FetchResponse(599, "BAD REQUEST (invalid data: URI)", {}, null, new FetchRequest(url));
    }
  }
  function getIpfsGatewayFunc(baseUrl) {
    async function gatewayIpfs(url, signal) {
      try {
        const match = url.match(reIpfs);
        if (!match) {
          throw new Error("invalid link");
        }
        return new FetchRequest(`${baseUrl}${match[2]}`);
      } catch (error) {
        return new FetchResponse(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new FetchRequest(url));
      }
    }
    return gatewayIpfs;
  }
  var Gateways = {
    "data": dataGatewayFunc,
    "ipfs": getIpfsGatewayFunc("https://gateway.ipfs.io/ipfs/")
  };
  var fetchSignals = /* @__PURE__ */ new WeakMap();
  var _listeners, _cancelled;
  var FetchCancelSignal = class {
    constructor(request) {
      __privateAdd(this, _listeners);
      __privateAdd(this, _cancelled);
      __privateSet(this, _listeners, []);
      __privateSet(this, _cancelled, false);
      fetchSignals.set(request, () => {
        if (__privateGet(this, _cancelled)) {
          return;
        }
        __privateSet(this, _cancelled, true);
        for (const listener of __privateGet(this, _listeners)) {
          setTimeout(() => {
            listener();
          }, 0);
        }
        __privateSet(this, _listeners, []);
      });
    }
    addListener(listener) {
      assert(!__privateGet(this, _cancelled), "singal already cancelled", "UNSUPPORTED_OPERATION", {
        operation: "fetchCancelSignal.addCancelListener"
      });
      __privateGet(this, _listeners).push(listener);
    }
    get cancelled() {
      return __privateGet(this, _cancelled);
    }
    checkSignal() {
      assert(!this.cancelled, "cancelled", "CANCELLED", {});
    }
  };
  _listeners = new WeakMap();
  _cancelled = new WeakMap();
  function checkSignal(signal) {
    if (signal == null) {
      throw new Error("missing signal; should not happen");
    }
    signal.checkSignal();
    return signal;
  }
  var _allowInsecure, _gzip, _headers, _method, _timeout, _url, _body, _bodyType, _creds, _preflight, _process, _retry, _signal, _throttle, _getUrlFunc, _FetchRequest_instances, send_fn;
  var _FetchRequest = class _FetchRequest {
    /**
     *  Create a new FetchRequest instance with default values.
     *
     *  Once created, each property may be set before issuing a
     *  ``.send()`` to make the request.
     */
    constructor(url) {
      __privateAdd(this, _FetchRequest_instances);
      __privateAdd(this, _allowInsecure);
      __privateAdd(this, _gzip);
      __privateAdd(this, _headers);
      __privateAdd(this, _method);
      __privateAdd(this, _timeout);
      __privateAdd(this, _url);
      __privateAdd(this, _body);
      __privateAdd(this, _bodyType);
      __privateAdd(this, _creds);
      // Hooks
      __privateAdd(this, _preflight);
      __privateAdd(this, _process);
      __privateAdd(this, _retry);
      __privateAdd(this, _signal);
      __privateAdd(this, _throttle);
      __privateAdd(this, _getUrlFunc);
      __privateSet(this, _url, String(url));
      __privateSet(this, _allowInsecure, false);
      __privateSet(this, _gzip, true);
      __privateSet(this, _headers, {});
      __privateSet(this, _method, "");
      __privateSet(this, _timeout, 3e5);
      __privateSet(this, _throttle, {
        slotInterval: SLOT_INTERVAL,
        maxAttempts: MAX_ATTEMPTS
      });
      __privateSet(this, _getUrlFunc, null);
    }
    /**
     *  The fetch URL to request.
     */
    get url() {
      return __privateGet(this, _url);
    }
    set url(url) {
      __privateSet(this, _url, String(url));
    }
    /**
     *  The fetch body, if any, to send as the request body. //(default: null)//
     *
     *  When setting a body, the intrinsic ``Content-Type`` is automatically
     *  set and will be used if **not overridden** by setting a custom
     *  header.
     *
     *  If %%body%% is null, the body is cleared (along with the
     *  intrinsic ``Content-Type``).
     *
     *  If %%body%% is a string, the intrinsic ``Content-Type`` is set to
     *  ``text/plain``.
     *
     *  If %%body%% is a Uint8Array, the intrinsic ``Content-Type`` is set to
     *  ``application/octet-stream``.
     *
     *  If %%body%% is any other object, the intrinsic ``Content-Type`` is
     *  set to ``application/json``.
     */
    get body() {
      if (__privateGet(this, _body) == null) {
        return null;
      }
      return new Uint8Array(__privateGet(this, _body));
    }
    set body(body) {
      if (body == null) {
        __privateSet(this, _body, void 0);
        __privateSet(this, _bodyType, void 0);
      } else if (typeof body === "string") {
        __privateSet(this, _body, toUtf8Bytes(body));
        __privateSet(this, _bodyType, "text/plain");
      } else if (body instanceof Uint8Array) {
        __privateSet(this, _body, body);
        __privateSet(this, _bodyType, "application/octet-stream");
      } else if (typeof body === "object") {
        __privateSet(this, _body, toUtf8Bytes(JSON.stringify(body)));
        __privateSet(this, _bodyType, "application/json");
      } else {
        throw new Error("invalid body");
      }
    }
    /**
     *  Returns true if the request has a body.
     */
    hasBody() {
      return __privateGet(this, _body) != null;
    }
    /**
     *  The HTTP method to use when requesting the URI. If no method
     *  has been explicitly set, then ``GET`` is used if the body is
     *  null and ``POST`` otherwise.
     */
    get method() {
      if (__privateGet(this, _method)) {
        return __privateGet(this, _method);
      }
      if (this.hasBody()) {
        return "POST";
      }
      return "GET";
    }
    set method(method) {
      if (method == null) {
        method = "";
      }
      __privateSet(this, _method, String(method).toUpperCase());
    }
    /**
     *  The headers that will be used when requesting the URI. All
     *  keys are lower-case.
     *
     *  This object is a copy, so any changes will **NOT** be reflected
     *  in the ``FetchRequest``.
     *
     *  To set a header entry, use the ``setHeader`` method.
     */
    get headers() {
      const headers = Object.assign({}, __privateGet(this, _headers));
      if (__privateGet(this, _creds)) {
        headers["authorization"] = `Basic ${encodeBase64(toUtf8Bytes(__privateGet(this, _creds)))}`;
      }
      ;
      if (this.allowGzip) {
        headers["accept-encoding"] = "gzip";
      }
      if (headers["content-type"] == null && __privateGet(this, _bodyType)) {
        headers["content-type"] = __privateGet(this, _bodyType);
      }
      if (this.body) {
        headers["content-length"] = String(this.body.length);
      }
      return headers;
    }
    /**
     *  Get the header for %%key%%, ignoring case.
     */
    getHeader(key) {
      return this.headers[key.toLowerCase()];
    }
    /**
     *  Set the header for %%key%% to %%value%%. All values are coerced
     *  to a string.
     */
    setHeader(key, value) {
      __privateGet(this, _headers)[String(key).toLowerCase()] = String(value);
    }
    /**
     *  Clear all headers, resetting all intrinsic headers.
     */
    clearHeaders() {
      __privateSet(this, _headers, {});
    }
    [Symbol.iterator]() {
      const headers = this.headers;
      const keys = Object.keys(headers);
      let index = 0;
      return {
        next: () => {
          if (index < keys.length) {
            const key = keys[index++];
            return {
              value: [key, headers[key]],
              done: false
            };
          }
          return { value: void 0, done: true };
        }
      };
    }
    /**
     *  The value that will be sent for the ``Authorization`` header.
     *
     *  To set the credentials, use the ``setCredentials`` method.
     */
    get credentials() {
      return __privateGet(this, _creds) || null;
    }
    /**
     *  Sets an ``Authorization`` for %%username%% with %%password%%.
     */
    setCredentials(username, password) {
      assertArgument(!username.match(/:/), "invalid basic authentication username", "username", "[REDACTED]");
      __privateSet(this, _creds, `${username}:${password}`);
    }
    /**
     *  Enable and request gzip-encoded responses. The response will
     *  automatically be decompressed. //(default: true)//
     */
    get allowGzip() {
      return __privateGet(this, _gzip);
    }
    set allowGzip(value) {
      __privateSet(this, _gzip, !!value);
    }
    /**
     *  Allow ``Authentication`` credentials to be sent over insecure
     *  channels. //(default: false)//
     */
    get allowInsecureAuthentication() {
      return !!__privateGet(this, _allowInsecure);
    }
    set allowInsecureAuthentication(value) {
      __privateSet(this, _allowInsecure, !!value);
    }
    /**
     *  The timeout (in milliseconds) to wait for a complete response.
     *  //(default: 5 minutes)//
     */
    get timeout() {
      return __privateGet(this, _timeout);
    }
    set timeout(timeout) {
      assertArgument(timeout >= 0, "timeout must be non-zero", "timeout", timeout);
      __privateSet(this, _timeout, timeout);
    }
    /**
     *  This function is called prior to each request, for example
     *  during a redirection or retry in case of server throttling.
     *
     *  This offers an opportunity to populate headers or update
     *  content before sending a request.
     */
    get preflightFunc() {
      return __privateGet(this, _preflight) || null;
    }
    set preflightFunc(preflight) {
      __privateSet(this, _preflight, preflight);
    }
    /**
     *  This function is called after each response, offering an
     *  opportunity to provide client-level throttling or updating
     *  response data.
     *
     *  Any error thrown in this causes the ``send()`` to throw.
     *
     *  To schedule a retry attempt (assuming the maximum retry limit
     *  has not been reached), use [[response.throwThrottleError]].
     */
    get processFunc() {
      return __privateGet(this, _process) || null;
    }
    set processFunc(process2) {
      __privateSet(this, _process, process2);
    }
    /**
     *  This function is called on each retry attempt.
     */
    get retryFunc() {
      return __privateGet(this, _retry) || null;
    }
    set retryFunc(retry) {
      __privateSet(this, _retry, retry);
    }
    /**
     *  This function is called to fetch content from HTTP and
     *  HTTPS URLs and is platform specific (e.g. nodejs vs
     *  browsers).
     *
     *  This is by default the currently registered global getUrl
     *  function, which can be changed using [[registerGetUrl]].
     *  If this has been set, setting is to ``null`` will cause
     *  this FetchRequest (and any future clones) to revert back to
     *  using the currently registered global getUrl function.
     *
     *  Setting this is generally not necessary, but may be useful
     *  for developers that wish to intercept requests or to
     *  configurege a proxy or other agent.
     */
    get getUrlFunc() {
      return __privateGet(this, _getUrlFunc) || defaultGetUrlFunc;
    }
    set getUrlFunc(value) {
      __privateSet(this, _getUrlFunc, value);
    }
    toString() {
      return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${__privateGet(this, _body) ? hexlify(__privateGet(this, _body)) : "null"}>`;
    }
    /**
     *  Update the throttle parameters used to determine maximum
     *  attempts and exponential-backoff properties.
     */
    setThrottleParams(params) {
      if (params.slotInterval != null) {
        __privateGet(this, _throttle).slotInterval = params.slotInterval;
      }
      if (params.maxAttempts != null) {
        __privateGet(this, _throttle).maxAttempts = params.maxAttempts;
      }
    }
    /**
     *  Resolves to the response by sending the request.
     */
    send() {
      assert(__privateGet(this, _signal) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" });
      __privateSet(this, _signal, new FetchCancelSignal(this));
      return __privateMethod(this, _FetchRequest_instances, send_fn).call(this, 0, getTime() + this.timeout, 0, this, new FetchResponse(0, "", {}, null, this));
    }
    /**
     *  Cancels the inflight response, causing a ``CANCELLED``
     *  error to be rejected from the [[send]].
     */
    cancel() {
      assert(__privateGet(this, _signal) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
      const signal = fetchSignals.get(this);
      if (!signal) {
        throw new Error("missing signal; should not happen");
      }
      signal();
    }
    /**
     *  Returns a new [[FetchRequest]] that represents the redirection
     *  to %%location%%.
     */
    redirect(location) {
      const current = this.url.split(":")[0].toLowerCase();
      const target = location.split(":")[0].toLowerCase();
      assert(this.method === "GET" && (current !== "https" || target !== "http") && location.match(/^https?:/), `unsupported redirect`, "UNSUPPORTED_OPERATION", {
        operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(location)})`
      });
      const req = new _FetchRequest(location);
      req.method = "GET";
      req.allowGzip = this.allowGzip;
      req.timeout = this.timeout;
      __privateSet(req, _headers, Object.assign({}, __privateGet(this, _headers)));
      if (__privateGet(this, _body)) {
        __privateSet(req, _body, new Uint8Array(__privateGet(this, _body)));
      }
      __privateSet(req, _bodyType, __privateGet(this, _bodyType));
      return req;
    }
    /**
     *  Create a new copy of this request.
     */
    clone() {
      const clone = new _FetchRequest(this.url);
      __privateSet(clone, _method, __privateGet(this, _method));
      if (__privateGet(this, _body)) {
        __privateSet(clone, _body, __privateGet(this, _body));
      }
      __privateSet(clone, _bodyType, __privateGet(this, _bodyType));
      __privateSet(clone, _headers, Object.assign({}, __privateGet(this, _headers)));
      __privateSet(clone, _creds, __privateGet(this, _creds));
      if (this.allowGzip) {
        clone.allowGzip = true;
      }
      clone.timeout = this.timeout;
      if (this.allowInsecureAuthentication) {
        clone.allowInsecureAuthentication = true;
      }
      __privateSet(clone, _preflight, __privateGet(this, _preflight));
      __privateSet(clone, _process, __privateGet(this, _process));
      __privateSet(clone, _retry, __privateGet(this, _retry));
      __privateSet(clone, _throttle, Object.assign({}, __privateGet(this, _throttle)));
      __privateSet(clone, _getUrlFunc, __privateGet(this, _getUrlFunc));
      return clone;
    }
    /**
     *  Locks all static configuration for gateways and FetchGetUrlFunc
     *  registration.
     */
    static lockConfig() {
      locked = true;
    }
    /**
     *  Get the current Gateway function for %%scheme%%.
     */
    static getGateway(scheme) {
      return Gateways[scheme.toLowerCase()] || null;
    }
    /**
     *  Use the %%func%% when fetching URIs using %%scheme%%.
     *
     *  This method affects all requests globally.
     *
     *  If [[lockConfig]] has been called, no change is made and this
     *  throws.
     */
    static registerGateway(scheme, func) {
      scheme = scheme.toLowerCase();
      if (scheme === "http" || scheme === "https") {
        throw new Error(`cannot intercept ${scheme}; use registerGetUrl`);
      }
      if (locked) {
        throw new Error("gateways locked");
      }
      Gateways[scheme] = func;
    }
    /**
     *  Use %%getUrl%% when fetching URIs over HTTP and HTTPS requests.
     *
     *  This method affects all requests globally.
     *
     *  If [[lockConfig]] has been called, no change is made and this
     *  throws.
     */
    static registerGetUrl(getUrl) {
      if (locked) {
        throw new Error("gateways locked");
      }
      defaultGetUrlFunc = getUrl;
    }
    /**
     *  Creates a getUrl function that fetches content from HTTP and
     *  HTTPS URLs.
     *
     *  The available %%options%% are dependent on the platform
     *  implementation of the default getUrl function.
     *
     *  This is not generally something that is needed, but is useful
     *  when trying to customize simple behaviour when fetching HTTP
     *  content.
     */
    static createGetUrlFunc(options) {
      return createGetUrl(options);
    }
    /**
     *  Creates a function that can "fetch" data URIs.
     *
     *  Note that this is automatically done internally to support
     *  data URIs, so it is not necessary to register it.
     *
     *  This is not generally something that is needed, but may
     *  be useful in a wrapper to perfom custom data URI functionality.
     */
    static createDataGateway() {
      return dataGatewayFunc;
    }
    /**
     *  Creates a function that will fetch IPFS (unvalidated) from
     *  a custom gateway baseUrl.
     *
     *  The default IPFS gateway used internally is
     *  ``"https:/\/gateway.ipfs.io/ipfs/"``.
     */
    static createIpfsGatewayFunc(baseUrl) {
      return getIpfsGatewayFunc(baseUrl);
    }
  };
  _allowInsecure = new WeakMap();
  _gzip = new WeakMap();
  _headers = new WeakMap();
  _method = new WeakMap();
  _timeout = new WeakMap();
  _url = new WeakMap();
  _body = new WeakMap();
  _bodyType = new WeakMap();
  _creds = new WeakMap();
  _preflight = new WeakMap();
  _process = new WeakMap();
  _retry = new WeakMap();
  _signal = new WeakMap();
  _throttle = new WeakMap();
  _getUrlFunc = new WeakMap();
  _FetchRequest_instances = new WeakSet();
  send_fn = async function(attempt, expires, delay, _request3, _response) {
    var _a2, _b, _c;
    if (attempt >= __privateGet(this, _throttle).maxAttempts) {
      return _response.makeServerError("exceeded maximum retry limit");
    }
    assert(getTime() <= expires, "timeout", "TIMEOUT", {
      operation: "request.send",
      reason: "timeout",
      request: _request3
    });
    if (delay > 0) {
      await wait(delay);
    }
    let req = this.clone();
    const scheme = (req.url.split(":")[0] || "").toLowerCase();
    if (scheme in Gateways) {
      const result = await Gateways[scheme](req.url, checkSignal(__privateGet(_request3, _signal)));
      if (result instanceof FetchResponse) {
        let response2 = result;
        if (this.processFunc) {
          checkSignal(__privateGet(_request3, _signal));
          try {
            response2 = await this.processFunc(req, response2);
          } catch (error) {
            if (error.throttle == null || typeof error.stall !== "number") {
              response2.makeServerError("error in post-processing function", error).assertOk();
            }
          }
        }
        return response2;
      }
      req = result;
    }
    if (this.preflightFunc) {
      req = await this.preflightFunc(req);
    }
    const resp = await this.getUrlFunc(req, checkSignal(__privateGet(_request3, _signal)));
    let response = new FetchResponse(resp.statusCode, resp.statusMessage, resp.headers, resp.body, _request3);
    if (response.statusCode === 301 || response.statusCode === 302) {
      try {
        const location = response.headers.location || "";
        return __privateMethod(_a2 = req.redirect(location), _FetchRequest_instances, send_fn).call(_a2, attempt + 1, expires, 0, _request3, response);
      } catch (error) {
      }
      return response;
    } else if (response.statusCode === 429) {
      if (this.retryFunc == null || await this.retryFunc(req, response, attempt)) {
        const retryAfter = response.headers["retry-after"];
        let delay2 = __privateGet(this, _throttle).slotInterval * Math.trunc(Math.random() * Math.pow(2, attempt));
        if (typeof retryAfter === "string" && retryAfter.match(/^[1-9][0-9]*$/)) {
          delay2 = parseInt(retryAfter);
        }
        return __privateMethod(_b = req.clone(), _FetchRequest_instances, send_fn).call(_b, attempt + 1, expires, delay2, _request3, response);
      }
    }
    if (this.processFunc) {
      checkSignal(__privateGet(_request3, _signal));
      try {
        response = await this.processFunc(req, response);
      } catch (error) {
        if (error.throttle == null || typeof error.stall !== "number") {
          response.makeServerError("error in post-processing function", error).assertOk();
        }
        let delay2 = __privateGet(this, _throttle).slotInterval * Math.trunc(Math.random() * Math.pow(2, attempt));
        ;
        if (error.stall >= 0) {
          delay2 = error.stall;
        }
        return __privateMethod(_c = req.clone(), _FetchRequest_instances, send_fn).call(_c, attempt + 1, expires, delay2, _request3, response);
      }
    }
    return response;
  };
  var FetchRequest = _FetchRequest;
  var _statusCode, _statusMessage, _headers2, _body2, _request, _error;
  var _FetchResponse = class _FetchResponse {
    constructor(statusCode, statusMessage, headers, body, request) {
      __privateAdd(this, _statusCode);
      __privateAdd(this, _statusMessage);
      __privateAdd(this, _headers2);
      __privateAdd(this, _body2);
      __privateAdd(this, _request);
      __privateAdd(this, _error);
      __privateSet(this, _statusCode, statusCode);
      __privateSet(this, _statusMessage, statusMessage);
      __privateSet(this, _headers2, Object.keys(headers).reduce((accum, k2) => {
        accum[k2.toLowerCase()] = String(headers[k2]);
        return accum;
      }, {}));
      __privateSet(this, _body2, body == null ? null : new Uint8Array(body));
      __privateSet(this, _request, request || null);
      __privateSet(this, _error, { message: "" });
    }
    toString() {
      return `<FetchResponse status=${this.statusCode} body=${__privateGet(this, _body2) ? hexlify(__privateGet(this, _body2)) : "null"}>`;
    }
    /**
     *  The response status code.
     */
    get statusCode() {
      return __privateGet(this, _statusCode);
    }
    /**
     *  The response status message.
     */
    get statusMessage() {
      return __privateGet(this, _statusMessage);
    }
    /**
     *  The response headers. All keys are lower-case.
     */
    get headers() {
      return Object.assign({}, __privateGet(this, _headers2));
    }
    /**
     *  The response body, or ``null`` if there was no body.
     */
    get body() {
      return __privateGet(this, _body2) == null ? null : new Uint8Array(__privateGet(this, _body2));
    }
    /**
     *  The response body as a UTF-8 encoded string, or the empty
     *  string (i.e. ``""``) if there was no body.
     *
     *  An error is thrown if the body is invalid UTF-8 data.
     */
    get bodyText() {
      try {
        return __privateGet(this, _body2) == null ? "" : toUtf8String(__privateGet(this, _body2));
      } catch (error) {
        assert(false, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
          operation: "bodyText",
          info: { response: this }
        });
      }
    }
    /**
     *  The response body, decoded as JSON.
     *
     *  An error is thrown if the body is invalid JSON-encoded data
     *  or if there was no body.
     */
    get bodyJson() {
      try {
        return JSON.parse(this.bodyText);
      } catch (error) {
        assert(false, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
          operation: "bodyJson",
          info: { response: this }
        });
      }
    }
    [Symbol.iterator]() {
      const headers = this.headers;
      const keys = Object.keys(headers);
      let index = 0;
      return {
        next: () => {
          if (index < keys.length) {
            const key = keys[index++];
            return {
              value: [key, headers[key]],
              done: false
            };
          }
          return { value: void 0, done: true };
        }
      };
    }
    /**
     *  Return a Response with matching headers and body, but with
     *  an error status code (i.e. 599) and %%message%% with an
     *  optional %%error%%.
     */
    makeServerError(message, error) {
      let statusMessage;
      if (!message) {
        message = `${this.statusCode} ${this.statusMessage}`;
        statusMessage = `CLIENT ESCALATED SERVER ERROR (${message})`;
      } else {
        statusMessage = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${message})`;
      }
      const response = new _FetchResponse(599, statusMessage, this.headers, this.body, __privateGet(this, _request) || void 0);
      __privateSet(response, _error, { message, error });
      return response;
    }
    /**
     *  If called within a [request.processFunc](FetchRequest-processFunc)
     *  call, causes the request to retry as if throttled for %%stall%%
     *  milliseconds.
     */
    throwThrottleError(message, stall2) {
      if (stall2 == null) {
        stall2 = -1;
      } else {
        assertArgument(Number.isInteger(stall2) && stall2 >= 0, "invalid stall timeout", "stall", stall2);
      }
      const error = new Error(message || "throttling requests");
      defineProperties(error, { stall: stall2, throttle: true });
      throw error;
    }
    /**
     *  Get the header value for %%key%%, ignoring case.
     */
    getHeader(key) {
      return this.headers[key.toLowerCase()];
    }
    /**
     *  Returns true if the response has a body.
     */
    hasBody() {
      return __privateGet(this, _body2) != null;
    }
    /**
     *  The request made for this response.
     */
    get request() {
      return __privateGet(this, _request);
    }
    /**
     *  Returns true if this response was a success statusCode.
     */
    ok() {
      return __privateGet(this, _error).message === "" && this.statusCode >= 200 && this.statusCode < 300;
    }
    /**
     *  Throws a ``SERVER_ERROR`` if this response is not ok.
     */
    assertOk() {
      if (this.ok()) {
        return;
      }
      let { message, error } = __privateGet(this, _error);
      if (message === "") {
        message = `server response ${this.statusCode} ${this.statusMessage}`;
      }
      let requestUrl = null;
      if (this.request) {
        requestUrl = this.request.url;
      }
      let responseBody = null;
      try {
        if (__privateGet(this, _body2)) {
          responseBody = toUtf8String(__privateGet(this, _body2));
        }
      } catch (e4) {
      }
      assert(false, message, "SERVER_ERROR", {
        request: this.request || "unknown request",
        response: this,
        error,
        info: {
          requestUrl,
          responseBody,
          responseStatus: `${this.statusCode} ${this.statusMessage}`
        }
      });
    }
  };
  _statusCode = new WeakMap();
  _statusMessage = new WeakMap();
  _headers2 = new WeakMap();
  _body2 = new WeakMap();
  _request = new WeakMap();
  _error = new WeakMap();
  var FetchResponse = _FetchResponse;
  function getTime() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  function unpercent(value) {
    return toUtf8Bytes(value.replace(/%([0-9a-f][0-9a-f])/gi, (all, code) => {
      return String.fromCharCode(parseInt(code, 16));
    }));
  }
  function wait(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  // node_modules/ethers/lib.esm/utils/rlp-decode.js
  function hexlifyByte(value) {
    let result = value.toString(16);
    while (result.length < 2) {
      result = "0" + result;
    }
    return "0x" + result;
  }
  function unarrayifyInteger(data, offset, length) {
    let result = 0;
    for (let i5 = 0; i5 < length; i5++) {
      result = result * 256 + data[offset + i5];
    }
    return result;
  }
  function _decodeChildren(data, offset, childOffset, length) {
    const result = [];
    while (childOffset < offset + 1 + length) {
      const decoded = _decode(data, childOffset);
      result.push(decoded.result);
      childOffset += decoded.consumed;
      assert(childOffset <= offset + 1 + length, "child data too short", "BUFFER_OVERRUN", {
        buffer: data,
        length,
        offset
      });
    }
    return { consumed: 1 + length, result };
  }
  function _decode(data, offset) {
    assert(data.length !== 0, "data too short", "BUFFER_OVERRUN", {
      buffer: data,
      length: 0,
      offset: 1
    });
    const checkOffset = (offset2) => {
      assert(offset2 <= data.length, "data short segment too short", "BUFFER_OVERRUN", {
        buffer: data,
        length: data.length,
        offset: offset2
      });
    };
    if (data[offset] >= 248) {
      const lengthLength = data[offset] - 247;
      checkOffset(offset + 1 + lengthLength);
      const length = unarrayifyInteger(data, offset + 1, lengthLength);
      checkOffset(offset + 1 + lengthLength + length);
      return _decodeChildren(data, offset, offset + 1 + lengthLength, lengthLength + length);
    } else if (data[offset] >= 192) {
      const length = data[offset] - 192;
      checkOffset(offset + 1 + length);
      return _decodeChildren(data, offset, offset + 1, length);
    } else if (data[offset] >= 184) {
      const lengthLength = data[offset] - 183;
      checkOffset(offset + 1 + lengthLength);
      const length = unarrayifyInteger(data, offset + 1, lengthLength);
      checkOffset(offset + 1 + lengthLength + length);
      const result = hexlify(data.slice(offset + 1 + lengthLength, offset + 1 + lengthLength + length));
      return { consumed: 1 + lengthLength + length, result };
    } else if (data[offset] >= 128) {
      const length = data[offset] - 128;
      checkOffset(offset + 1 + length);
      const result = hexlify(data.slice(offset + 1, offset + 1 + length));
      return { consumed: 1 + length, result };
    }
    return { consumed: 1, result: hexlifyByte(data[offset]) };
  }
  function decodeRlp(_data4) {
    const data = getBytes(_data4, "data");
    const decoded = _decode(data, 0);
    assertArgument(decoded.consumed === data.length, "unexpected junk after rlp payload", "data", _data4);
    return decoded.result;
  }

  // node_modules/ethers/lib.esm/utils/rlp-encode.js
  function arrayifyInteger(value) {
    const result = [];
    while (value) {
      result.unshift(value & 255);
      value >>= 8;
    }
    return result;
  }
  function _encode(object2) {
    if (Array.isArray(object2)) {
      let payload = [];
      object2.forEach(function(child) {
        payload = payload.concat(_encode(child));
      });
      if (payload.length <= 55) {
        payload.unshift(192 + payload.length);
        return payload;
      }
      const length2 = arrayifyInteger(payload.length);
      length2.unshift(247 + length2.length);
      return length2.concat(payload);
    }
    const data = Array.prototype.slice.call(getBytes(object2, "object"));
    if (data.length === 1 && data[0] <= 127) {
      return data;
    } else if (data.length <= 55) {
      data.unshift(128 + data.length);
      return data;
    }
    const length = arrayifyInteger(data.length);
    length.unshift(183 + length.length);
    return length.concat(data);
  }
  var nibbles = "0123456789abcdef";
  function encodeRlp(object2) {
    let result = "0x";
    for (const v2 of _encode(object2)) {
      result += nibbles[v2 >> 4];
      result += nibbles[v2 & 15];
    }
    return result;
  }

  // node_modules/ethers/lib.esm/abi/coders/abstract-coder.js
  var WordSize = 32;
  var Padding = new Uint8Array(WordSize);
  var passProperties = ["then"];
  var _guard = {};
  var resultNames = /* @__PURE__ */ new WeakMap();
  function getNames(result) {
    return resultNames.get(result);
  }
  function setNames(result, names) {
    resultNames.set(result, names);
  }
  function throwError(name, error) {
    const wrapped = new Error(`deferred error during ABI decoding triggered accessing ${name}`);
    wrapped.error = error;
    throw wrapped;
  }
  function toObject(names, items, deep) {
    if (names.indexOf(null) >= 0) {
      return items.map((item, index) => {
        if (item instanceof Result) {
          return toObject(getNames(item), item, deep);
        }
        return item;
      });
    }
    return names.reduce((accum, name, index) => {
      let item = items.getValue(name);
      if (!(name in accum)) {
        if (deep && item instanceof Result) {
          item = toObject(getNames(item), item, deep);
        }
        accum[name] = item;
      }
      return accum;
    }, {});
  }
  var _names;
  var _Result = class _Result extends Array {
    /**
     *  @private
     */
    constructor(...args) {
      const guard = args[0];
      let items = args[1];
      let names = (args[2] || []).slice();
      let wrap = true;
      if (guard !== _guard) {
        items = args;
        names = [];
        wrap = false;
      }
      super(items.length);
      // No longer used; but cannot be removed as it will remove the
      // #private field from the .d.ts which may break backwards
      // compatibility
      __privateAdd(this, _names);
      items.forEach((item, index) => {
        this[index] = item;
      });
      const nameCounts = names.reduce((accum, name) => {
        if (typeof name === "string") {
          accum.set(name, (accum.get(name) || 0) + 1);
        }
        return accum;
      }, /* @__PURE__ */ new Map());
      setNames(this, Object.freeze(items.map((item, index) => {
        const name = names[index];
        if (name != null && nameCounts.get(name) === 1) {
          return name;
        }
        return null;
      })));
      __privateSet(this, _names, []);
      if (__privateGet(this, _names) == null) {
        void __privateGet(this, _names);
      }
      if (!wrap) {
        return;
      }
      Object.freeze(this);
      const proxy = new Proxy(this, {
        get: (target, prop, receiver) => {
          if (typeof prop === "string") {
            if (prop.match(/^[0-9]+$/)) {
              const index = getNumber(prop, "%index");
              if (index < 0 || index >= this.length) {
                throw new RangeError("out of result range");
              }
              const item = target[index];
              if (item instanceof Error) {
                throwError(`index ${index}`, item);
              }
              return item;
            }
            if (passProperties.indexOf(prop) >= 0) {
              return Reflect.get(target, prop, receiver);
            }
            const value = target[prop];
            if (value instanceof Function) {
              return function(...args2) {
                return value.apply(this === receiver ? target : this, args2);
              };
            } else if (!(prop in target)) {
              return target.getValue.apply(this === receiver ? target : this, [prop]);
            }
          }
          return Reflect.get(target, prop, receiver);
        }
      });
      setNames(proxy, getNames(this));
      return proxy;
    }
    /**
     *  Returns the Result as a normal Array. If %%deep%%, any children
     *  which are Result objects are also converted to a normal Array.
     *
     *  This will throw if there are any outstanding deferred
     *  errors.
     */
    toArray(deep) {
      const result = [];
      this.forEach((item, index) => {
        if (item instanceof Error) {
          throwError(`index ${index}`, item);
        }
        if (deep && item instanceof _Result) {
          item = item.toArray(deep);
        }
        result.push(item);
      });
      return result;
    }
    /**
     *  Returns the Result as an Object with each name-value pair. If
     *  %%deep%%, any children which are Result objects are also
     *  converted to an Object.
     *
     *  This will throw if any value is unnamed, or if there are
     *  any outstanding deferred errors.
     */
    toObject(deep) {
      const names = getNames(this);
      return names.reduce((accum, name, index) => {
        assert(name != null, `value at index ${index} unnamed`, "UNSUPPORTED_OPERATION", {
          operation: "toObject()"
        });
        return toObject(names, this, deep);
      }, {});
    }
    /**
     *  @_ignore
     */
    slice(start, end) {
      if (start == null) {
        start = 0;
      }
      if (start < 0) {
        start += this.length;
        if (start < 0) {
          start = 0;
        }
      }
      if (end == null) {
        end = this.length;
      }
      if (end < 0) {
        end += this.length;
        if (end < 0) {
          end = 0;
        }
      }
      if (end > this.length) {
        end = this.length;
      }
      const _names2 = getNames(this);
      const result = [], names = [];
      for (let i5 = start; i5 < end; i5++) {
        result.push(this[i5]);
        names.push(_names2[i5]);
      }
      return new _Result(_guard, result, names);
    }
    /**
     *  @_ignore
     */
    filter(callback, thisArg) {
      const _names2 = getNames(this);
      const result = [], names = [];
      for (let i5 = 0; i5 < this.length; i5++) {
        const item = this[i5];
        if (item instanceof Error) {
          throwError(`index ${i5}`, item);
        }
        if (callback.call(thisArg, item, i5, this)) {
          result.push(item);
          names.push(_names2[i5]);
        }
      }
      return new _Result(_guard, result, names);
    }
    /**
     *  @_ignore
     */
    map(callback, thisArg) {
      const result = [];
      for (let i5 = 0; i5 < this.length; i5++) {
        const item = this[i5];
        if (item instanceof Error) {
          throwError(`index ${i5}`, item);
        }
        result.push(callback.call(thisArg, item, i5, this));
      }
      return result;
    }
    /**
     *  Returns the value for %%name%%.
     *
     *  Since it is possible to have a key whose name conflicts with
     *  a method on a [[Result]] or its superclass Array, or any
     *  JavaScript keyword, this ensures all named values are still
     *  accessible by name.
     */
    getValue(name) {
      const index = getNames(this).indexOf(name);
      if (index === -1) {
        return void 0;
      }
      const value = this[index];
      if (value instanceof Error) {
        throwError(`property ${JSON.stringify(name)}`, value.error);
      }
      return value;
    }
    /**
     *  Creates a new [[Result]] for %%items%% with each entry
     *  also accessible by its corresponding name in %%keys%%.
     */
    static fromItems(items, keys) {
      return new _Result(_guard, items, keys);
    }
  };
  _names = new WeakMap();
  var Result = _Result;
  function getValue(value) {
    let bytes2 = toBeArray(value);
    assert(bytes2.length <= WordSize, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: bytes2, length: WordSize, offset: bytes2.length });
    if (bytes2.length !== WordSize) {
      bytes2 = getBytesCopy(concat([Padding.slice(bytes2.length % WordSize), bytes2]));
    }
    return bytes2;
  }
  var Coder = class {
    constructor(name, type, localName, dynamic) {
      // The coder name:
      //   - address, uint256, tuple, array, etc.
      __publicField(this, "name");
      // The fully expanded type, including composite types:
      //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
      __publicField(this, "type");
      // The localName bound in the signature, in this example it is "baz":
      //   - tuple(address foo, uint bar) baz
      __publicField(this, "localName");
      // Whether this type is dynamic:
      //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
      //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
      __publicField(this, "dynamic");
      defineProperties(this, { name, type, localName, dynamic }, {
        name: "string",
        type: "string",
        localName: "string",
        dynamic: "boolean"
      });
    }
    _throwError(message, value) {
      assertArgument(false, message, this.localName, value);
    }
  };
  var _data, _dataLength, _Writer_instances, writeData_fn;
  var Writer = class {
    constructor() {
      __privateAdd(this, _Writer_instances);
      // An array of WordSize lengthed objects to concatenation
      __privateAdd(this, _data);
      __privateAdd(this, _dataLength);
      __privateSet(this, _data, []);
      __privateSet(this, _dataLength, 0);
    }
    get data() {
      return concat(__privateGet(this, _data));
    }
    get length() {
      return __privateGet(this, _dataLength);
    }
    appendWriter(writer) {
      return __privateMethod(this, _Writer_instances, writeData_fn).call(this, getBytesCopy(writer.data));
    }
    // Arrayish item; pad on the right to *nearest* WordSize
    writeBytes(value) {
      let bytes2 = getBytesCopy(value);
      const paddingOffset = bytes2.length % WordSize;
      if (paddingOffset) {
        bytes2 = getBytesCopy(concat([bytes2, Padding.slice(paddingOffset)]));
      }
      return __privateMethod(this, _Writer_instances, writeData_fn).call(this, bytes2);
    }
    // Numeric item; pad on the left *to* WordSize
    writeValue(value) {
      return __privateMethod(this, _Writer_instances, writeData_fn).call(this, getValue(value));
    }
    // Inserts a numeric place-holder, returning a callback that can
    // be used to asjust the value later
    writeUpdatableValue() {
      const offset = __privateGet(this, _data).length;
      __privateGet(this, _data).push(Padding);
      __privateSet(this, _dataLength, __privateGet(this, _dataLength) + WordSize);
      return (value) => {
        __privateGet(this, _data)[offset] = getValue(value);
      };
    }
  };
  _data = new WeakMap();
  _dataLength = new WeakMap();
  _Writer_instances = new WeakSet();
  writeData_fn = function(data) {
    __privateGet(this, _data).push(data);
    __privateSet(this, _dataLength, __privateGet(this, _dataLength) + data.length);
    return data.length;
  };
  var _data2, _offset, _bytesRead, _parent, _maxInflation, _Reader_instances, incrementBytesRead_fn, peekBytes_fn;
  var _Reader = class _Reader {
    constructor(data, allowLoose, maxInflation) {
      __privateAdd(this, _Reader_instances);
      // Allows incomplete unpadded data to be read; otherwise an error
      // is raised if attempting to overrun the buffer. This is required
      // to deal with an old Solidity bug, in which event data for
      // external (not public thoguh) was tightly packed.
      __publicField(this, "allowLoose");
      __privateAdd(this, _data2);
      __privateAdd(this, _offset);
      __privateAdd(this, _bytesRead);
      __privateAdd(this, _parent);
      __privateAdd(this, _maxInflation);
      defineProperties(this, { allowLoose: !!allowLoose });
      __privateSet(this, _data2, getBytesCopy(data));
      __privateSet(this, _bytesRead, 0);
      __privateSet(this, _parent, null);
      __privateSet(this, _maxInflation, maxInflation != null ? maxInflation : 1024);
      __privateSet(this, _offset, 0);
    }
    get data() {
      return hexlify(__privateGet(this, _data2));
    }
    get dataLength() {
      return __privateGet(this, _data2).length;
    }
    get consumed() {
      return __privateGet(this, _offset);
    }
    get bytes() {
      return new Uint8Array(__privateGet(this, _data2));
    }
    // Create a sub-reader with the same underlying data, but offset
    subReader(offset) {
      const reader = new _Reader(__privateGet(this, _data2).slice(__privateGet(this, _offset) + offset), this.allowLoose, __privateGet(this, _maxInflation));
      __privateSet(reader, _parent, this);
      return reader;
    }
    // Read bytes
    readBytes(length, loose) {
      let bytes2 = __privateMethod(this, _Reader_instances, peekBytes_fn).call(this, 0, length, !!loose);
      __privateMethod(this, _Reader_instances, incrementBytesRead_fn).call(this, length);
      __privateSet(this, _offset, __privateGet(this, _offset) + bytes2.length);
      return bytes2.slice(0, length);
    }
    // Read a numeric values
    readValue() {
      return toBigInt(this.readBytes(WordSize));
    }
    readIndex() {
      return toNumber(this.readBytes(WordSize));
    }
  };
  _data2 = new WeakMap();
  _offset = new WeakMap();
  _bytesRead = new WeakMap();
  _parent = new WeakMap();
  _maxInflation = new WeakMap();
  _Reader_instances = new WeakSet();
  incrementBytesRead_fn = function(count) {
    var _a2;
    if (__privateGet(this, _parent)) {
      return __privateMethod(_a2 = __privateGet(this, _parent), _Reader_instances, incrementBytesRead_fn).call(_a2, count);
    }
    __privateSet(this, _bytesRead, __privateGet(this, _bytesRead) + count);
    assert(__privateGet(this, _maxInflation) < 1 || __privateGet(this, _bytesRead) <= __privateGet(this, _maxInflation) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${__privateGet(this, _maxInflation)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
      buffer: getBytesCopy(__privateGet(this, _data2)),
      offset: __privateGet(this, _offset),
      length: count,
      info: {
        bytesRead: __privateGet(this, _bytesRead),
        dataLength: this.dataLength
      }
    });
  };
  peekBytes_fn = function(offset, length, loose) {
    let alignedLength = Math.ceil(length / WordSize) * WordSize;
    if (__privateGet(this, _offset) + alignedLength > __privateGet(this, _data2).length) {
      if (this.allowLoose && loose && __privateGet(this, _offset) + length <= __privateGet(this, _data2).length) {
        alignedLength = length;
      } else {
        assert(false, "data out-of-bounds", "BUFFER_OVERRUN", {
          buffer: getBytesCopy(__privateGet(this, _data2)),
          length: __privateGet(this, _data2).length,
          offset: __privateGet(this, _offset) + alignedLength
        });
      }
    }
    return __privateGet(this, _data2).slice(__privateGet(this, _offset), __privateGet(this, _offset) + alignedLength);
  };
  var Reader = _Reader;

  // node_modules/@noble/hashes/esm/_assert.js
  function number(n5) {
    if (!Number.isSafeInteger(n5) || n5 < 0)
      throw new Error(`Wrong positive integer: ${n5}`);
  }
  function bytes(b4, ...lengths) {
    if (!(b4 instanceof Uint8Array))
      throw new Error("Expected Uint8Array");
    if (lengths.length > 0 && !lengths.includes(b4.length))
      throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b4.length}`);
  }
  function hash(hash2) {
    if (typeof hash2 !== "function" || typeof hash2.create !== "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(hash2.outputLen);
    number(hash2.blockLen);
  }
  function exists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
  }

  // node_modules/@noble/hashes/esm/crypto.js
  var crypto2 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

  // node_modules/@noble/hashes/esm/utils.js
  var u8a = (a3) => a3 instanceof Uint8Array;
  var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  var rotr = (word, shift) => word << 32 - shift | word >>> shift;
  var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  if (!isLE)
    throw new Error("Non little-endian hardware is not supported");
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    if (!u8a(data))
      throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
  }
  function concatBytes(...arrays) {
    const r4 = new Uint8Array(arrays.reduce((sum, a3) => sum + a3.length, 0));
    let pad = 0;
    arrays.forEach((a3) => {
      if (!u8a(a3))
        throw new Error("Uint8Array expected");
      r4.set(a3, pad);
      pad += a3.length;
    });
    return r4;
  }
  var Hash = class {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  };
  var toStr = {}.toString;
  function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  function randomBytes(bytesLength = 32) {
    if (crypto2 && typeof crypto2.getRandomValues === "function") {
      return crypto2.getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }

  // node_modules/@noble/hashes/esm/hmac.js
  var HMAC = class extends Hash {
    constructor(hash2, _key) {
      super();
      this.finished = false;
      this.destroyed = false;
      hash(hash2);
      const key = toBytes(_key);
      this.iHash = hash2.create();
      if (typeof this.iHash.update !== "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const blockLen = this.blockLen;
      const pad = new Uint8Array(blockLen);
      pad.set(key.length > blockLen ? hash2.create().update(key).digest() : key);
      for (let i5 = 0; i5 < pad.length; i5++)
        pad[i5] ^= 54;
      this.iHash.update(pad);
      this.oHash = hash2.create();
      for (let i5 = 0; i5 < pad.length; i5++)
        pad[i5] ^= 54 ^ 92;
      this.oHash.update(pad);
      pad.fill(0);
    }
    update(buf) {
      exists(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      exists(this);
      bytes(out, this.outputLen);
      this.finished = true;
      this.iHash.digestInto(out);
      this.oHash.update(out);
      this.oHash.digestInto(out);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to) {
      to || (to = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
      to = to;
      to.finished = finished;
      to.destroyed = destroyed;
      to.blockLen = blockLen;
      to.outputLen = outputLen;
      to.oHash = oHash._cloneInto(to.oHash);
      to.iHash = iHash._cloneInto(to.iHash);
      return to;
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  };
  var hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
  hmac.create = (hash2, key) => new HMAC(hash2, key);

  // node_modules/@noble/hashes/esm/_sha2.js
  function setBigUint64(view, byteOffset, value, isLE2) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE2);
    const _32n2 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n2 & _u32_max);
    const wl = Number(value & _u32_max);
    const h3 = isLE2 ? 4 : 0;
    const l3 = isLE2 ? 0 : 4;
    view.setUint32(byteOffset + h3, wh, isLE2);
    view.setUint32(byteOffset + l3, wl, isLE2);
  }
  var SHA2 = class extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE2) {
      super();
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE2;
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      exists(this);
      const { view, buffer, blockLen } = this;
      data = toBytes(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      exists(this);
      output(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE2 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      this.buffer.subarray(pos).fill(0);
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i5 = pos; i5 < blockLen; i5++)
        buffer[i5] = 0;
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
      this.process(view, 0);
      const oview = createView(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i5 = 0; i5 < outLen; i5++)
        oview.setUint32(4 * i5, state[i5], isLE2);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to || (to = new this.constructor());
      to.set(...this.get());
      const { blockLen, buffer, length, finished, destroyed, pos } = this;
      to.length = length;
      to.pos = pos;
      to.finished = finished;
      to.destroyed = destroyed;
      if (length % blockLen)
        to.buffer.set(buffer);
      return to;
    }
  };

  // node_modules/@noble/hashes/esm/sha256.js
  var Chi = (a3, b4, c4) => a3 & b4 ^ ~a3 & c4;
  var Maj = (a3, b4, c4) => a3 & b4 ^ a3 & c4 ^ b4 & c4;
  var SHA256_K = /* @__PURE__ */ new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var IV = /* @__PURE__ */ new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  var SHA256 = class extends SHA2 {
    constructor() {
      super(64, 32, 8, false);
      this.A = IV[0] | 0;
      this.B = IV[1] | 0;
      this.C = IV[2] | 0;
      this.D = IV[3] | 0;
      this.E = IV[4] | 0;
      this.F = IV[5] | 0;
      this.G = IV[6] | 0;
      this.H = IV[7] | 0;
    }
    get() {
      const { A: A2, B: B2, C: C2, D, E: E2, F, G, H: H2 } = this;
      return [A2, B2, C2, D, E2, F, G, H2];
    }
    // prettier-ignore
    set(A2, B2, C2, D, E2, F, G, H2) {
      this.A = A2 | 0;
      this.B = B2 | 0;
      this.C = C2 | 0;
      this.D = D | 0;
      this.E = E2 | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H2 | 0;
    }
    process(view, offset) {
      for (let i5 = 0; i5 < 16; i5++, offset += 4)
        SHA256_W[i5] = view.getUint32(offset, false);
      for (let i5 = 16; i5 < 64; i5++) {
        const W15 = SHA256_W[i5 - 15];
        const W2 = SHA256_W[i5 - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[i5] = s1 + SHA256_W[i5 - 7] + s0 + SHA256_W[i5 - 16] | 0;
      }
      let { A: A2, B: B2, C: C2, D, E: E2, F, G, H: H2 } = this;
      for (let i5 = 0; i5 < 64; i5++) {
        const sigma1 = rotr(E2, 6) ^ rotr(E2, 11) ^ rotr(E2, 25);
        const T12 = H2 + sigma1 + Chi(E2, F, G) + SHA256_K[i5] + SHA256_W[i5] | 0;
        const sigma0 = rotr(A2, 2) ^ rotr(A2, 13) ^ rotr(A2, 22);
        const T2 = sigma0 + Maj(A2, B2, C2) | 0;
        H2 = G;
        G = F;
        F = E2;
        E2 = D + T12 | 0;
        D = C2;
        C2 = B2;
        B2 = A2;
        A2 = T12 + T2 | 0;
      }
      A2 = A2 + this.A | 0;
      B2 = B2 + this.B | 0;
      C2 = C2 + this.C | 0;
      D = D + this.D | 0;
      E2 = E2 + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H2 = H2 + this.H | 0;
      this.set(A2, B2, C2, D, E2, F, G, H2);
    }
    roundClean() {
      SHA256_W.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      this.buffer.fill(0);
    }
  };
  var sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());

  // node_modules/@noble/hashes/esm/_u64.js
  var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  var _32n = /* @__PURE__ */ BigInt(32);
  function fromBig(n5, le = false) {
    if (le)
      return { h: Number(n5 & U32_MASK64), l: Number(n5 >> _32n & U32_MASK64) };
    return { h: Number(n5 >> _32n & U32_MASK64) | 0, l: Number(n5 & U32_MASK64) | 0 };
  }
  function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i5 = 0; i5 < lst.length; i5++) {
      const { h: h3, l: l3 } = fromBig(lst[i5], le);
      [Ah[i5], Al[i5]] = [h3, l3];
    }
    return [Ah, Al];
  }
  var toBig = (h3, l3) => BigInt(h3 >>> 0) << _32n | BigInt(l3 >>> 0);
  var shrSH = (h3, _l, s4) => h3 >>> s4;
  var shrSL = (h3, l3, s4) => h3 << 32 - s4 | l3 >>> s4;
  var rotrSH = (h3, l3, s4) => h3 >>> s4 | l3 << 32 - s4;
  var rotrSL = (h3, l3, s4) => h3 << 32 - s4 | l3 >>> s4;
  var rotrBH = (h3, l3, s4) => h3 << 64 - s4 | l3 >>> s4 - 32;
  var rotrBL = (h3, l3, s4) => h3 >>> s4 - 32 | l3 << 64 - s4;
  var rotr32H = (_h, l3) => l3;
  var rotr32L = (h3, _l) => h3;
  var rotlSH = (h3, l3, s4) => h3 << s4 | l3 >>> 32 - s4;
  var rotlSL = (h3, l3, s4) => l3 << s4 | h3 >>> 32 - s4;
  var rotlBH = (h3, l3, s4) => l3 << s4 - 32 | h3 >>> 64 - s4;
  var rotlBL = (h3, l3, s4) => h3 << s4 - 32 | l3 >>> 64 - s4;
  function add(Ah, Al, Bh, Bl) {
    const l3 = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l3 / 2 ** 32 | 0) | 0, l: l3 | 0 };
  }
  var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
  var u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
  };
  var u64_default = u64;

  // node_modules/@noble/hashes/esm/sha512.js
  var [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => u64_default.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((n5) => BigInt(n5))))();
  var SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
  var SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
  var SHA512 = class extends SHA2 {
    constructor() {
      super(128, 64, 16, false);
      this.Ah = 1779033703 | 0;
      this.Al = 4089235720 | 0;
      this.Bh = 3144134277 | 0;
      this.Bl = 2227873595 | 0;
      this.Ch = 1013904242 | 0;
      this.Cl = 4271175723 | 0;
      this.Dh = 2773480762 | 0;
      this.Dl = 1595750129 | 0;
      this.Eh = 1359893119 | 0;
      this.El = 2917565137 | 0;
      this.Fh = 2600822924 | 0;
      this.Fl = 725511199 | 0;
      this.Gh = 528734635 | 0;
      this.Gl = 4215389547 | 0;
      this.Hh = 1541459225 | 0;
      this.Hl = 327033209 | 0;
    }
    // prettier-ignore
    get() {
      const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
      this.Ah = Ah | 0;
      this.Al = Al | 0;
      this.Bh = Bh | 0;
      this.Bl = Bl | 0;
      this.Ch = Ch | 0;
      this.Cl = Cl | 0;
      this.Dh = Dh | 0;
      this.Dl = Dl | 0;
      this.Eh = Eh | 0;
      this.El = El | 0;
      this.Fh = Fh | 0;
      this.Fl = Fl | 0;
      this.Gh = Gh | 0;
      this.Gl = Gl | 0;
      this.Hh = Hh | 0;
      this.Hl = Hl | 0;
    }
    process(view, offset) {
      for (let i5 = 0; i5 < 16; i5++, offset += 4) {
        SHA512_W_H[i5] = view.getUint32(offset);
        SHA512_W_L[i5] = view.getUint32(offset += 4);
      }
      for (let i5 = 16; i5 < 80; i5++) {
        const W15h = SHA512_W_H[i5 - 15] | 0;
        const W15l = SHA512_W_L[i5 - 15] | 0;
        const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
        const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
        const W2h = SHA512_W_H[i5 - 2] | 0;
        const W2l = SHA512_W_L[i5 - 2] | 0;
        const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
        const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
        const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i5 - 7], SHA512_W_L[i5 - 16]);
        const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i5 - 7], SHA512_W_H[i5 - 16]);
        SHA512_W_H[i5] = SUMh | 0;
        SHA512_W_L[i5] = SUMl | 0;
      }
      let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      for (let i5 = 0; i5 < 80; i5++) {
        const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
        const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
        const CHIh = Eh & Fh ^ ~Eh & Gh;
        const CHIl = El & Fl ^ ~El & Gl;
        const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i5], SHA512_W_L[i5]);
        const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i5], SHA512_W_H[i5]);
        const T1l = T1ll | 0;
        const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
        const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
        const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
        const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
        Hh = Gh | 0;
        Hl = Gl | 0;
        Gh = Fh | 0;
        Gl = Fl | 0;
        Fh = Eh | 0;
        Fl = El | 0;
        ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
        Dh = Ch | 0;
        Dl = Cl | 0;
        Ch = Bh | 0;
        Cl = Bl | 0;
        Bh = Ah | 0;
        Bl = Al | 0;
        const All = u64_default.add3L(T1l, sigma0l, MAJl);
        Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
        Al = All | 0;
      }
      ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
      ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
      ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
      ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
      ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
      ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
      ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
      ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
      this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
      SHA512_W_H.fill(0);
      SHA512_W_L.fill(0);
    }
    destroy() {
      this.buffer.fill(0);
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  var sha512 = /* @__PURE__ */ wrapConstructor(() => new SHA512());

  // node_modules/ethers/lib.esm/crypto/crypto-browser.js
  function getGlobal() {
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    throw new Error("unable to locate global object");
  }
  var anyGlobal = getGlobal();
  var crypto3 = anyGlobal.crypto || anyGlobal.msCrypto;
  function createHash(algo) {
    switch (algo) {
      case "sha256":
        return sha256.create();
      case "sha512":
        return sha512.create();
    }
    assertArgument(false, "invalid hashing algorithm name", "algorithm", algo);
  }

  // node_modules/@noble/hashes/esm/sha3.js
  var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
  var _0n = /* @__PURE__ */ BigInt(0);
  var _1n = /* @__PURE__ */ BigInt(1);
  var _2n = /* @__PURE__ */ BigInt(2);
  var _7n = /* @__PURE__ */ BigInt(7);
  var _256n = /* @__PURE__ */ BigInt(256);
  var _0x71n = /* @__PURE__ */ BigInt(113);
  for (let round = 0, R2 = _1n, x2 = 1, y3 = 0; round < 24; round++) {
    [x2, y3] = [y3, (2 * x2 + 3 * y3) % 5];
    SHA3_PI.push(2 * (5 * y3 + x2));
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    let t3 = _0n;
    for (let j2 = 0; j2 < 7; j2++) {
      R2 = (R2 << _1n ^ (R2 >> _7n) * _0x71n) % _256n;
      if (R2 & _2n)
        t3 ^= _1n << (_1n << /* @__PURE__ */ BigInt(j2)) - _1n;
    }
    _SHA3_IOTA.push(t3);
  }
  var [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
  var rotlH = (h3, l3, s4) => s4 > 32 ? rotlBH(h3, l3, s4) : rotlSH(h3, l3, s4);
  var rotlL = (h3, l3, s4) => s4 > 32 ? rotlBL(h3, l3, s4) : rotlSL(h3, l3, s4);
  function keccakP(s4, rounds = 24) {
    const B2 = new Uint32Array(5 * 2);
    for (let round = 24 - rounds; round < 24; round++) {
      for (let x2 = 0; x2 < 10; x2++)
        B2[x2] = s4[x2] ^ s4[x2 + 10] ^ s4[x2 + 20] ^ s4[x2 + 30] ^ s4[x2 + 40];
      for (let x2 = 0; x2 < 10; x2 += 2) {
        const idx1 = (x2 + 8) % 10;
        const idx0 = (x2 + 2) % 10;
        const B0 = B2[idx0];
        const B1 = B2[idx0 + 1];
        const Th = rotlH(B0, B1, 1) ^ B2[idx1];
        const Tl = rotlL(B0, B1, 1) ^ B2[idx1 + 1];
        for (let y3 = 0; y3 < 50; y3 += 10) {
          s4[x2 + y3] ^= Th;
          s4[x2 + y3 + 1] ^= Tl;
        }
      }
      let curH = s4[2];
      let curL = s4[3];
      for (let t3 = 0; t3 < 24; t3++) {
        const shift = SHA3_ROTL[t3];
        const Th = rotlH(curH, curL, shift);
        const Tl = rotlL(curH, curL, shift);
        const PI = SHA3_PI[t3];
        curH = s4[PI];
        curL = s4[PI + 1];
        s4[PI] = Th;
        s4[PI + 1] = Tl;
      }
      for (let y3 = 0; y3 < 50; y3 += 10) {
        for (let x2 = 0; x2 < 10; x2++)
          B2[x2] = s4[y3 + x2];
        for (let x2 = 0; x2 < 10; x2++)
          s4[y3 + x2] ^= ~B2[(x2 + 2) % 10] & B2[(x2 + 4) % 10];
      }
      s4[0] ^= SHA3_IOTA_H[round];
      s4[1] ^= SHA3_IOTA_L[round];
    }
    B2.fill(0);
  }
  var Keccak = class _Keccak extends Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
      super();
      this.blockLen = blockLen;
      this.suffix = suffix;
      this.outputLen = outputLen;
      this.enableXOF = enableXOF;
      this.rounds = rounds;
      this.pos = 0;
      this.posOut = 0;
      this.finished = false;
      this.destroyed = false;
      number(outputLen);
      if (0 >= this.blockLen || this.blockLen >= 200)
        throw new Error("Sha3 supports only keccak-f1600 function");
      this.state = new Uint8Array(200);
      this.state32 = u32(this.state);
    }
    keccak() {
      keccakP(this.state32, this.rounds);
      this.posOut = 0;
      this.pos = 0;
    }
    update(data) {
      exists(this);
      const { blockLen, state } = this;
      data = toBytes(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        for (let i5 = 0; i5 < take; i5++)
          state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen)
          this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished)
        return;
      this.finished = true;
      const { state, suffix, pos, blockLen } = this;
      state[pos] ^= suffix;
      if ((suffix & 128) !== 0 && pos === blockLen - 1)
        this.keccak();
      state[blockLen - 1] ^= 128;
      this.keccak();
    }
    writeInto(out) {
      exists(this, false);
      bytes(out);
      this.finish();
      const bufferOut = this.state;
      const { blockLen } = this;
      for (let pos = 0, len = out.length; pos < len; ) {
        if (this.posOut >= blockLen)
          this.keccak();
        const take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
    xofInto(out) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(out);
    }
    xof(bytes2) {
      number(bytes2);
      return this.xofInto(new Uint8Array(bytes2));
    }
    digestInto(out) {
      output(out, this);
      if (this.finished)
        throw new Error("digest() was already called");
      this.writeInto(out);
      this.destroy();
      return out;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true;
      this.state.fill(0);
    }
    _cloneInto(to) {
      const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
      to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
      to.state32.set(this.state32);
      to.pos = this.pos;
      to.posOut = this.posOut;
      to.finished = this.finished;
      to.rounds = rounds;
      to.suffix = suffix;
      to.outputLen = outputLen;
      to.enableXOF = enableXOF;
      to.destroyed = this.destroyed;
      return to;
    }
  };
  var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
  var sha3_224 = /* @__PURE__ */ gen(6, 144, 224 / 8);
  var sha3_256 = /* @__PURE__ */ gen(6, 136, 256 / 8);
  var sha3_384 = /* @__PURE__ */ gen(6, 104, 384 / 8);
  var sha3_512 = /* @__PURE__ */ gen(6, 72, 512 / 8);
  var keccak_224 = /* @__PURE__ */ gen(1, 144, 224 / 8);
  var keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
  var keccak_384 = /* @__PURE__ */ gen(1, 104, 384 / 8);
  var keccak_512 = /* @__PURE__ */ gen(1, 72, 512 / 8);
  var genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
  var shake128 = /* @__PURE__ */ genShake(31, 168, 128 / 8);
  var shake256 = /* @__PURE__ */ genShake(31, 136, 256 / 8);

  // node_modules/ethers/lib.esm/crypto/keccak.js
  var locked2 = false;
  var _keccak256 = function(data) {
    return keccak_256(data);
  };
  var __keccak256 = _keccak256;
  function keccak256(_data4) {
    const data = getBytes(_data4, "data");
    return hexlify(__keccak256(data));
  }
  keccak256._ = _keccak256;
  keccak256.lock = function() {
    locked2 = true;
  };
  keccak256.register = function(func) {
    if (locked2) {
      throw new TypeError("keccak256 is locked");
    }
    __keccak256 = func;
  };
  Object.freeze(keccak256);

  // node_modules/ethers/lib.esm/crypto/sha2.js
  var _sha256 = function(data) {
    return createHash("sha256").update(data).digest();
  };
  var _sha512 = function(data) {
    return createHash("sha512").update(data).digest();
  };
  var __sha256 = _sha256;
  var __sha512 = _sha512;
  var locked256 = false;
  var locked512 = false;
  function sha2562(_data4) {
    const data = getBytes(_data4, "data");
    return hexlify(__sha256(data));
  }
  sha2562._ = _sha256;
  sha2562.lock = function() {
    locked256 = true;
  };
  sha2562.register = function(func) {
    if (locked256) {
      throw new Error("sha256 is locked");
    }
    __sha256 = func;
  };
  Object.freeze(sha2562);
  function sha5122(_data4) {
    const data = getBytes(_data4, "data");
    return hexlify(__sha512(data));
  }
  sha5122._ = _sha512;
  sha5122.lock = function() {
    locked512 = true;
  };
  sha5122.register = function(func) {
    if (locked512) {
      throw new Error("sha512 is locked");
    }
    __sha512 = func;
  };
  Object.freeze(sha2562);

  // node_modules/@noble/curves/esm/abstract/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    bitGet: () => bitGet,
    bitLen: () => bitLen,
    bitMask: () => bitMask,
    bitSet: () => bitSet,
    bytesToHex: () => bytesToHex,
    bytesToNumberBE: () => bytesToNumberBE,
    bytesToNumberLE: () => bytesToNumberLE,
    concatBytes: () => concatBytes2,
    createHmacDrbg: () => createHmacDrbg,
    ensureBytes: () => ensureBytes,
    equalBytes: () => equalBytes,
    hexToBytes: () => hexToBytes,
    hexToNumber: () => hexToNumber,
    numberToBytesBE: () => numberToBytesBE,
    numberToBytesLE: () => numberToBytesLE,
    numberToHexUnpadded: () => numberToHexUnpadded,
    numberToVarBytesBE: () => numberToVarBytesBE,
    utf8ToBytes: () => utf8ToBytes2,
    validateObject: () => validateObject
  });
  var _0n2 = BigInt(0);
  var _1n2 = BigInt(1);
  var _2n2 = BigInt(2);
  var u8a2 = (a3) => a3 instanceof Uint8Array;
  var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i5) => i5.toString(16).padStart(2, "0"));
  function bytesToHex(bytes2) {
    if (!u8a2(bytes2))
      throw new Error("Uint8Array expected");
    let hex = "";
    for (let i5 = 0; i5 < bytes2.length; i5++) {
      hex += hexes[bytes2[i5]];
    }
    return hex;
  }
  function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
  }
  function hexToNumber(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    return BigInt(hex === "" ? "0" : `0x${hex}`);
  }
  function hexToBytes(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    const len = hex.length;
    if (len % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + len);
    const array = new Uint8Array(len / 2);
    for (let i5 = 0; i5 < array.length; i5++) {
      const j2 = i5 * 2;
      const hexByte = hex.slice(j2, j2 + 2);
      const byte = Number.parseInt(hexByte, 16);
      if (Number.isNaN(byte) || byte < 0)
        throw new Error("Invalid byte sequence");
      array[i5] = byte;
    }
    return array;
  }
  function bytesToNumberBE(bytes2) {
    return hexToNumber(bytesToHex(bytes2));
  }
  function bytesToNumberLE(bytes2) {
    if (!u8a2(bytes2))
      throw new Error("Uint8Array expected");
    return hexToNumber(bytesToHex(Uint8Array.from(bytes2).reverse()));
  }
  function numberToBytesBE(n5, len) {
    return hexToBytes(n5.toString(16).padStart(len * 2, "0"));
  }
  function numberToBytesLE(n5, len) {
    return numberToBytesBE(n5, len).reverse();
  }
  function numberToVarBytesBE(n5) {
    return hexToBytes(numberToHexUnpadded(n5));
  }
  function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === "string") {
      try {
        res = hexToBytes(hex);
      } catch (e4) {
        throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e4}`);
      }
    } else if (u8a2(hex)) {
      res = Uint8Array.from(hex);
    } else {
      throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === "number" && len !== expectedLength)
      throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
  }
  function concatBytes2(...arrays) {
    const r4 = new Uint8Array(arrays.reduce((sum, a3) => sum + a3.length, 0));
    let pad = 0;
    arrays.forEach((a3) => {
      if (!u8a2(a3))
        throw new Error("Uint8Array expected");
      r4.set(a3, pad);
      pad += a3.length;
    });
    return r4;
  }
  function equalBytes(b1, b22) {
    if (b1.length !== b22.length)
      return false;
    for (let i5 = 0; i5 < b1.length; i5++)
      if (b1[i5] !== b22[i5])
        return false;
    return true;
  }
  function utf8ToBytes2(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function bitLen(n5) {
    let len;
    for (len = 0; n5 > _0n2; n5 >>= _1n2, len += 1)
      ;
    return len;
  }
  function bitGet(n5, pos) {
    return n5 >> BigInt(pos) & _1n2;
  }
  var bitSet = (n5, pos, value) => {
    return n5 | (value ? _1n2 : _0n2) << BigInt(pos);
  };
  var bitMask = (n5) => (_2n2 << BigInt(n5 - 1)) - _1n2;
  var u8n = (data) => new Uint8Array(data);
  var u8fr = (arr) => Uint8Array.from(arr);
  function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== "number" || hashLen < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    if (typeof hmacFn !== "function")
      throw new Error("hmacFn must be a function");
    let v2 = u8n(hashLen);
    let k2 = u8n(hashLen);
    let i5 = 0;
    const reset = () => {
      v2.fill(1);
      k2.fill(0);
      i5 = 0;
    };
    const h3 = (...b4) => hmacFn(k2, v2, ...b4);
    const reseed = (seed = u8n()) => {
      k2 = h3(u8fr([0]), seed);
      v2 = h3();
      if (seed.length === 0)
        return;
      k2 = h3(u8fr([1]), seed);
      v2 = h3();
    };
    const gen2 = () => {
      if (i5++ >= 1e3)
        throw new Error("drbg: tried 1000 values");
      let len = 0;
      const out = [];
      while (len < qByteLen) {
        v2 = h3();
        const sl = v2.slice();
        out.push(sl);
        len += v2.length;
      }
      return concatBytes2(...out);
    };
    const genUntil = (seed, pred) => {
      reset();
      reseed(seed);
      let res = void 0;
      while (!(res = pred(gen2())))
        reseed();
      reset();
      return res;
    };
    return genUntil;
  }
  var validatorFns = {
    bigint: (val) => typeof val === "bigint",
    function: (val) => typeof val === "function",
    boolean: (val) => typeof val === "boolean",
    string: (val) => typeof val === "string",
    stringOrUint8Array: (val) => typeof val === "string" || val instanceof Uint8Array,
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object2) => object2.Fp.isValid(val),
    hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
  };
  function validateObject(object2, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
      const checkVal = validatorFns[type];
      if (typeof checkVal !== "function")
        throw new Error(`Invalid validator "${type}", expected function`);
      const val = object2[fieldName];
      if (isOptional && val === void 0)
        return;
      if (!checkVal(val, object2)) {
        throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
      }
    };
    for (const [fieldName, type] of Object.entries(validators))
      checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
      checkField(fieldName, type, true);
    return object2;
  }

  // node_modules/@noble/curves/esm/abstract/modular.js
  var _0n3 = BigInt(0);
  var _1n3 = BigInt(1);
  var _2n3 = BigInt(2);
  var _3n = BigInt(3);
  var _4n = BigInt(4);
  var _5n = BigInt(5);
  var _8n = BigInt(8);
  var _9n = BigInt(9);
  var _16n = BigInt(16);
  function mod(a3, b4) {
    const result = a3 % b4;
    return result >= _0n3 ? result : b4 + result;
  }
  function pow(num, power, modulo) {
    if (modulo <= _0n3 || power < _0n3)
      throw new Error("Expected power/modulo > 0");
    if (modulo === _1n3)
      return _0n3;
    let res = _1n3;
    while (power > _0n3) {
      if (power & _1n3)
        res = res * num % modulo;
      num = num * num % modulo;
      power >>= _1n3;
    }
    return res;
  }
  function pow2(x2, power, modulo) {
    let res = x2;
    while (power-- > _0n3) {
      res *= res;
      res %= modulo;
    }
    return res;
  }
  function invert(number2, modulo) {
    if (number2 === _0n3 || modulo <= _0n3) {
      throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
    }
    let a3 = mod(number2, modulo);
    let b4 = modulo;
    let x2 = _0n3, y3 = _1n3, u3 = _1n3, v2 = _0n3;
    while (a3 !== _0n3) {
      const q = b4 / a3;
      const r4 = b4 % a3;
      const m2 = x2 - u3 * q;
      const n5 = y3 - v2 * q;
      b4 = a3, a3 = r4, x2 = u3, y3 = v2, u3 = m2, v2 = n5;
    }
    const gcd = b4;
    if (gcd !== _1n3)
      throw new Error("invert: does not exist");
    return mod(x2, modulo);
  }
  function tonelliShanks(P2) {
    const legendreC = (P2 - _1n3) / _2n3;
    let Q, S3, Z;
    for (Q = P2 - _1n3, S3 = 0; Q % _2n3 === _0n3; Q /= _2n3, S3++)
      ;
    for (Z = _2n3; Z < P2 && pow(Z, legendreC, P2) !== P2 - _1n3; Z++)
      ;
    if (S3 === 1) {
      const p1div4 = (P2 + _1n3) / _4n;
      return function tonelliFast(Fp2, n5) {
        const root = Fp2.pow(n5, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n5))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    const Q1div2 = (Q + _1n3) / _2n3;
    return function tonelliSlow(Fp2, n5) {
      if (Fp2.pow(n5, legendreC) === Fp2.neg(Fp2.ONE))
        throw new Error("Cannot find square root");
      let r4 = S3;
      let g2 = Fp2.pow(Fp2.mul(Fp2.ONE, Z), Q);
      let x2 = Fp2.pow(n5, Q1div2);
      let b4 = Fp2.pow(n5, Q);
      while (!Fp2.eql(b4, Fp2.ONE)) {
        if (Fp2.eql(b4, Fp2.ZERO))
          return Fp2.ZERO;
        let m2 = 1;
        for (let t22 = Fp2.sqr(b4); m2 < r4; m2++) {
          if (Fp2.eql(t22, Fp2.ONE))
            break;
          t22 = Fp2.sqr(t22);
        }
        const ge = Fp2.pow(g2, _1n3 << BigInt(r4 - m2 - 1));
        g2 = Fp2.sqr(ge);
        x2 = Fp2.mul(x2, ge);
        b4 = Fp2.mul(b4, g2);
        r4 = m2;
      }
      return x2;
    };
  }
  function FpSqrt(P2) {
    if (P2 % _4n === _3n) {
      const p1div4 = (P2 + _1n3) / _4n;
      return function sqrt3mod4(Fp2, n5) {
        const root = Fp2.pow(n5, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n5))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P2 % _8n === _5n) {
      const c1 = (P2 - _5n) / _8n;
      return function sqrt5mod8(Fp2, n5) {
        const n22 = Fp2.mul(n5, _2n3);
        const v2 = Fp2.pow(n22, c1);
        const nv = Fp2.mul(n5, v2);
        const i5 = Fp2.mul(Fp2.mul(nv, _2n3), v2);
        const root = Fp2.mul(nv, Fp2.sub(i5, Fp2.ONE));
        if (!Fp2.eql(Fp2.sqr(root), n5))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P2 % _16n === _9n) {
    }
    return tonelliShanks(P2);
  }
  var FIELD_FIELDS = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function validateField(field) {
    const initial = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
      map[val] = "function";
      return map;
    }, initial);
    return validateObject(field, opts);
  }
  function FpPow(f3, num, power) {
    if (power < _0n3)
      throw new Error("Expected power > 0");
    if (power === _0n3)
      return f3.ONE;
    if (power === _1n3)
      return num;
    let p3 = f3.ONE;
    let d3 = num;
    while (power > _0n3) {
      if (power & _1n3)
        p3 = f3.mul(p3, d3);
      d3 = f3.sqr(d3);
      power >>= _1n3;
    }
    return p3;
  }
  function FpInvertBatch(f3, nums) {
    const tmp = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i5) => {
      if (f3.is0(num))
        return acc;
      tmp[i5] = acc;
      return f3.mul(acc, num);
    }, f3.ONE);
    const inverted = f3.inv(lastMultiplied);
    nums.reduceRight((acc, num, i5) => {
      if (f3.is0(num))
        return acc;
      tmp[i5] = f3.mul(acc, tmp[i5]);
      return f3.mul(acc, num);
    }, inverted);
    return tmp;
  }
  function nLength(n5, nBitLength) {
    const _nBitLength = nBitLength !== void 0 ? nBitLength : n5.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
  }
  function Field(ORDER, bitLen2, isLE2 = false, redef = {}) {
    if (ORDER <= _0n3)
      throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
    if (BYTES > 2048)
      throw new Error("Field lengths over 2048 bytes are not supported");
    const sqrtP = FpSqrt(ORDER);
    const f3 = Object.freeze({
      ORDER,
      BITS,
      BYTES,
      MASK: bitMask(BITS),
      ZERO: _0n3,
      ONE: _1n3,
      create: (num) => mod(num, ORDER),
      isValid: (num) => {
        if (typeof num !== "bigint")
          throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
        return _0n3 <= num && num < ORDER;
      },
      is0: (num) => num === _0n3,
      isOdd: (num) => (num & _1n3) === _1n3,
      neg: (num) => mod(-num, ORDER),
      eql: (lhs, rhs) => lhs === rhs,
      sqr: (num) => mod(num * num, ORDER),
      add: (lhs, rhs) => mod(lhs + rhs, ORDER),
      sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
      mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
      pow: (num, power) => FpPow(f3, num, power),
      div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
      // Same as above, but doesn't normalize
      sqrN: (num) => num * num,
      addN: (lhs, rhs) => lhs + rhs,
      subN: (lhs, rhs) => lhs - rhs,
      mulN: (lhs, rhs) => lhs * rhs,
      inv: (num) => invert(num, ORDER),
      sqrt: redef.sqrt || ((n5) => sqrtP(f3, n5)),
      invertBatch: (lst) => FpInvertBatch(f3, lst),
      // TODO: do we really need constant cmov?
      // We don't have const-time bigints anyway, so probably will be not very useful
      cmov: (a3, b4, c4) => c4 ? b4 : a3,
      toBytes: (num) => isLE2 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
      fromBytes: (bytes2) => {
        if (bytes2.length !== BYTES)
          throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes2.length}`);
        return isLE2 ? bytesToNumberLE(bytes2) : bytesToNumberBE(bytes2);
      }
    });
    return Object.freeze(f3);
  }
  function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== "bigint")
      throw new Error("field order must be bigint");
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
  }
  function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
  }
  function mapHashToField(key, fieldOrder, isLE2 = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    if (len < 16 || len < minLen || len > 1024)
      throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num = isLE2 ? bytesToNumberBE(key) : bytesToNumberLE(key);
    const reduced = mod(num, fieldOrder - _1n3) + _1n3;
    return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
  }

  // node_modules/@noble/curves/esm/abstract/curve.js
  var _0n4 = BigInt(0);
  var _1n4 = BigInt(1);
  function wNAF(c4, bits) {
    const constTimeNegate = (condition, item) => {
      const neg = item.negate();
      return condition ? neg : item;
    };
    const opts = (W) => {
      const windows = Math.ceil(bits / W) + 1;
      const windowSize = 2 ** (W - 1);
      return { windows, windowSize };
    };
    return {
      constTimeNegate,
      // non-const time multiplication ladder
      unsafeLadder(elm, n5) {
        let p3 = c4.ZERO;
        let d3 = elm;
        while (n5 > _0n4) {
          if (n5 & _1n4)
            p3 = p3.add(d3);
          d3 = d3.double();
          n5 >>= _1n4;
        }
        return p3;
      },
      /**
       * Creates a wNAF precomputation window. Used for caching.
       * Default window size is set by `utils.precompute()` and is equal to 8.
       * Number of precomputed points depends on the curve size:
       * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
       * - 𝑊 is the window size
       * - 𝑛 is the bitlength of the curve order.
       * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
       * @returns precomputed point tables flattened to a single array
       */
      precomputeWindow(elm, W) {
        const { windows, windowSize } = opts(W);
        const points = [];
        let p3 = elm;
        let base = p3;
        for (let window2 = 0; window2 < windows; window2++) {
          base = p3;
          points.push(base);
          for (let i5 = 1; i5 < windowSize; i5++) {
            base = base.add(p3);
            points.push(base);
          }
          p3 = base.double();
        }
        return points;
      },
      /**
       * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @returns real and fake (for const-time) points
       */
      wNAF(W, precomputes, n5) {
        const { windows, windowSize } = opts(W);
        let p3 = c4.ZERO;
        let f3 = c4.BASE;
        const mask2 = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for (let window2 = 0; window2 < windows; window2++) {
          const offset = window2 * windowSize;
          let wbits = Number(n5 & mask2);
          n5 >>= shiftBy;
          if (wbits > windowSize) {
            wbits -= maxNumber;
            n5 += _1n4;
          }
          const offset1 = offset;
          const offset2 = offset + Math.abs(wbits) - 1;
          const cond1 = window2 % 2 !== 0;
          const cond2 = wbits < 0;
          if (wbits === 0) {
            f3 = f3.add(constTimeNegate(cond1, precomputes[offset1]));
          } else {
            p3 = p3.add(constTimeNegate(cond2, precomputes[offset2]));
          }
        }
        return { p: p3, f: f3 };
      },
      wNAFCached(P2, precomputesMap, n5, transform) {
        const W = P2._WINDOW_SIZE || 1;
        let comp = precomputesMap.get(P2);
        if (!comp) {
          comp = this.precomputeWindow(P2, W);
          if (W !== 1) {
            precomputesMap.set(P2, transform(comp));
          }
        }
        return this.wNAF(W, comp, n5);
      }
    };
  }
  function validateBasic(curve) {
    validateField(curve.Fp);
    validateObject(curve, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    });
    return Object.freeze({
      ...nLength(curve.n, curve.nBitLength),
      ...curve,
      ...{ p: curve.Fp.ORDER }
    });
  }

  // node_modules/@noble/curves/esm/abstract/weierstrass.js
  function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      a: "field",
      b: "field"
    }, {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function"
    });
    const { endo, Fp: Fp2, a: a3 } = opts;
    if (endo) {
      if (!Fp2.eql(a3, Fp2.ZERO)) {
        throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
      }
      if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
        throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
      }
    }
    return Object.freeze({ ...opts });
  }
  var { bytesToNumberBE: b2n, hexToBytes: h2b } = utils_exports;
  var DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
      constructor(m2 = "") {
        super(m2);
      }
    },
    _parseInt(data) {
      const { Err: E2 } = DER;
      if (data.length < 2 || data[0] !== 2)
        throw new E2("Invalid signature integer tag");
      const len = data[1];
      const res = data.subarray(2, len + 2);
      if (!len || res.length !== len)
        throw new E2("Invalid signature integer: wrong length");
      if (res[0] & 128)
        throw new E2("Invalid signature integer: negative");
      if (res[0] === 0 && !(res[1] & 128))
        throw new E2("Invalid signature integer: unnecessary leading zero");
      return { d: b2n(res), l: data.subarray(len + 2) };
    },
    toSig(hex) {
      const { Err: E2 } = DER;
      const data = typeof hex === "string" ? h2b(hex) : hex;
      if (!(data instanceof Uint8Array))
        throw new Error("ui8a expected");
      let l3 = data.length;
      if (l3 < 2 || data[0] != 48)
        throw new E2("Invalid signature tag");
      if (data[1] !== l3 - 2)
        throw new E2("Invalid signature: incorrect length");
      const { d: r4, l: sBytes } = DER._parseInt(data.subarray(2));
      const { d: s4, l: rBytesLeft } = DER._parseInt(sBytes);
      if (rBytesLeft.length)
        throw new E2("Invalid signature: left bytes after parsing");
      return { r: r4, s: s4 };
    },
    hexFromSig(sig) {
      const slice = (s5) => Number.parseInt(s5[0], 16) & 8 ? "00" + s5 : s5;
      const h3 = (num) => {
        const hex = num.toString(16);
        return hex.length & 1 ? `0${hex}` : hex;
      };
      const s4 = slice(h3(sig.s));
      const r4 = slice(h3(sig.r));
      const shl = s4.length / 2;
      const rhl = r4.length / 2;
      const sl = h3(shl);
      const rl = h3(rhl);
      return `30${h3(rhl + shl + 4)}02${rl}${r4}02${sl}${s4}`;
    }
  };
  var _0n5 = BigInt(0);
  var _1n5 = BigInt(1);
  var _2n4 = BigInt(2);
  var _3n2 = BigInt(3);
  var _4n2 = BigInt(4);
  function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp: Fp2 } = CURVE;
    const toBytes2 = CURVE.toBytes || ((_c, point, _isCompressed) => {
      const a3 = point.toAffine();
      return concatBytes2(Uint8Array.from([4]), Fp2.toBytes(a3.x), Fp2.toBytes(a3.y));
    });
    const fromBytes = CURVE.fromBytes || ((bytes2) => {
      const tail = bytes2.subarray(1);
      const x2 = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
      const y3 = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
      return { x: x2, y: y3 };
    });
    function weierstrassEquation(x2) {
      const { a: a3, b: b4 } = CURVE;
      const x22 = Fp2.sqr(x2);
      const x3 = Fp2.mul(x22, x2);
      return Fp2.add(Fp2.add(x3, Fp2.mul(x2, a3)), b4);
    }
    if (!Fp2.eql(Fp2.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
      throw new Error("bad generator point: equation left != right");
    function isWithinCurveOrder(num) {
      return typeof num === "bigint" && _0n5 < num && num < CURVE.n;
    }
    function assertGE(num) {
      if (!isWithinCurveOrder(num))
        throw new Error("Expected valid bigint: 0 < bigint < curve.n");
    }
    function normPrivateKeyToScalar(key) {
      const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: n5 } = CURVE;
      if (lengths && typeof key !== "bigint") {
        if (key instanceof Uint8Array)
          key = bytesToHex(key);
        if (typeof key !== "string" || !lengths.includes(key.length))
          throw new Error("Invalid key");
        key = key.padStart(nByteLength * 2, "0");
      }
      let num;
      try {
        num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
      } catch (error) {
        throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
      }
      if (wrapPrivateKey)
        num = mod(num, n5);
      assertGE(num);
      return num;
    }
    const pointPrecomputes = /* @__PURE__ */ new Map();
    function assertPrjPoint(other) {
      if (!(other instanceof Point2))
        throw new Error("ProjectivePoint expected");
    }
    class Point2 {
      constructor(px, py, pz) {
        this.px = px;
        this.py = py;
        this.pz = pz;
        if (px == null || !Fp2.isValid(px))
          throw new Error("x required");
        if (py == null || !Fp2.isValid(py))
          throw new Error("y required");
        if (pz == null || !Fp2.isValid(pz))
          throw new Error("z required");
      }
      // Does not validate if the point is on-curve.
      // Use fromHex instead, or call assertValidity() later.
      static fromAffine(p3) {
        const { x: x2, y: y3 } = p3 || {};
        if (!p3 || !Fp2.isValid(x2) || !Fp2.isValid(y3))
          throw new Error("invalid affine point");
        if (p3 instanceof Point2)
          throw new Error("projective point not allowed");
        const is0 = (i5) => Fp2.eql(i5, Fp2.ZERO);
        if (is0(x2) && is0(y3))
          return Point2.ZERO;
        return new Point2(x2, y3, Fp2.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       * Takes a bunch of Projective Points but executes only one
       * inversion on all of them. Inversion is very slow operation,
       * so this improves performance massively.
       * Optimization: converts a list of projective points to a list of identical points with Z=1.
       */
      static normalizeZ(points) {
        const toInv = Fp2.invertBatch(points.map((p3) => p3.pz));
        return points.map((p3, i5) => p3.toAffine(toInv[i5])).map(Point2.fromAffine);
      }
      /**
       * Converts hash string or Uint8Array to Point.
       * @param hex short/long ECDSA hex
       */
      static fromHex(hex) {
        const P2 = Point2.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
        P2.assertValidity();
        return P2;
      }
      // Multiplies generator point by privateKey.
      static fromPrivateKey(privateKey) {
        return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
      }
      // "Private method", don't use it directly
      _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes.delete(this);
      }
      // A point on curve is valid if it conforms to equation.
      assertValidity() {
        if (this.is0()) {
          if (CURVE.allowInfinityPoint && !Fp2.is0(this.py))
            return;
          throw new Error("bad point: ZERO");
        }
        const { x: x2, y: y3 } = this.toAffine();
        if (!Fp2.isValid(x2) || !Fp2.isValid(y3))
          throw new Error("bad point: x or y not FE");
        const left = Fp2.sqr(y3);
        const right = weierstrassEquation(x2);
        if (!Fp2.eql(left, right))
          throw new Error("bad point: equation left != right");
        if (!this.isTorsionFree())
          throw new Error("bad point: not in prime-order subgroup");
      }
      hasEvenY() {
        const { y: y3 } = this.toAffine();
        if (Fp2.isOdd)
          return !Fp2.isOdd(y3);
        throw new Error("Field doesn't support isOdd");
      }
      /**
       * Compare one point to another.
       */
      equals(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        const U1 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
        const U2 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
        return U1 && U2;
      }
      /**
       * Flips point to one corresponding to (x, -y) in Affine coordinates.
       */
      negate() {
        return new Point2(this.px, Fp2.neg(this.py), this.pz);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a: a3, b: b4 } = CURVE;
        const b32 = Fp2.mul(b4, _3n2);
        const { px: X1, py: Y1, pz: Z1 } = this;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        let t0 = Fp2.mul(X1, X1);
        let t1 = Fp2.mul(Y1, Y1);
        let t22 = Fp2.mul(Z1, Z1);
        let t3 = Fp2.mul(X1, Y1);
        t3 = Fp2.add(t3, t3);
        Z3 = Fp2.mul(X1, Z1);
        Z3 = Fp2.add(Z3, Z3);
        X3 = Fp2.mul(a3, Z3);
        Y3 = Fp2.mul(b32, t22);
        Y3 = Fp2.add(X3, Y3);
        X3 = Fp2.sub(t1, Y3);
        Y3 = Fp2.add(t1, Y3);
        Y3 = Fp2.mul(X3, Y3);
        X3 = Fp2.mul(t3, X3);
        Z3 = Fp2.mul(b32, Z3);
        t22 = Fp2.mul(a3, t22);
        t3 = Fp2.sub(t0, t22);
        t3 = Fp2.mul(a3, t3);
        t3 = Fp2.add(t3, Z3);
        Z3 = Fp2.add(t0, t0);
        t0 = Fp2.add(Z3, t0);
        t0 = Fp2.add(t0, t22);
        t0 = Fp2.mul(t0, t3);
        Y3 = Fp2.add(Y3, t0);
        t22 = Fp2.mul(Y1, Z1);
        t22 = Fp2.add(t22, t22);
        t0 = Fp2.mul(t22, t3);
        X3 = Fp2.sub(X3, t0);
        Z3 = Fp2.mul(t22, t1);
        Z3 = Fp2.add(Z3, Z3);
        Z3 = Fp2.add(Z3, Z3);
        return new Point2(X3, Y3, Z3);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        const a3 = CURVE.a;
        const b32 = Fp2.mul(CURVE.b, _3n2);
        let t0 = Fp2.mul(X1, X2);
        let t1 = Fp2.mul(Y1, Y2);
        let t22 = Fp2.mul(Z1, Z2);
        let t3 = Fp2.add(X1, Y1);
        let t4 = Fp2.add(X2, Y2);
        t3 = Fp2.mul(t3, t4);
        t4 = Fp2.add(t0, t1);
        t3 = Fp2.sub(t3, t4);
        t4 = Fp2.add(X1, Z1);
        let t5 = Fp2.add(X2, Z2);
        t4 = Fp2.mul(t4, t5);
        t5 = Fp2.add(t0, t22);
        t4 = Fp2.sub(t4, t5);
        t5 = Fp2.add(Y1, Z1);
        X3 = Fp2.add(Y2, Z2);
        t5 = Fp2.mul(t5, X3);
        X3 = Fp2.add(t1, t22);
        t5 = Fp2.sub(t5, X3);
        Z3 = Fp2.mul(a3, t4);
        X3 = Fp2.mul(b32, t22);
        Z3 = Fp2.add(X3, Z3);
        X3 = Fp2.sub(t1, Z3);
        Z3 = Fp2.add(t1, Z3);
        Y3 = Fp2.mul(X3, Z3);
        t1 = Fp2.add(t0, t0);
        t1 = Fp2.add(t1, t0);
        t22 = Fp2.mul(a3, t22);
        t4 = Fp2.mul(b32, t4);
        t1 = Fp2.add(t1, t22);
        t22 = Fp2.sub(t0, t22);
        t22 = Fp2.mul(a3, t22);
        t4 = Fp2.add(t4, t22);
        t0 = Fp2.mul(t1, t4);
        Y3 = Fp2.add(Y3, t0);
        t0 = Fp2.mul(t5, t4);
        X3 = Fp2.mul(t3, X3);
        X3 = Fp2.sub(X3, t0);
        t0 = Fp2.mul(t3, t1);
        Z3 = Fp2.mul(t5, Z3);
        Z3 = Fp2.add(Z3, t0);
        return new Point2(X3, Y3, Z3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      is0() {
        return this.equals(Point2.ZERO);
      }
      wNAF(n5) {
        return wnaf.wNAFCached(this, pointPrecomputes, n5, (comp) => {
          const toInv = Fp2.invertBatch(comp.map((p3) => p3.pz));
          return comp.map((p3, i5) => p3.toAffine(toInv[i5])).map(Point2.fromAffine);
        });
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed private key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(n5) {
        const I2 = Point2.ZERO;
        if (n5 === _0n5)
          return I2;
        assertGE(n5);
        if (n5 === _1n5)
          return this;
        const { endo } = CURVE;
        if (!endo)
          return wnaf.unsafeLadder(this, n5);
        let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n5);
        let k1p = I2;
        let k2p = I2;
        let d3 = this;
        while (k1 > _0n5 || k2 > _0n5) {
          if (k1 & _1n5)
            k1p = k1p.add(d3);
          if (k2 & _1n5)
            k2p = k2p.add(d3);
          d3 = d3.double();
          k1 >>= _1n5;
          k2 >>= _1n5;
        }
        if (k1neg)
          k1p = k1p.negate();
        if (k2neg)
          k2p = k2p.negate();
        k2p = new Point2(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        return k1p.add(k2p);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar by which the point would be multiplied
       * @returns New point
       */
      multiply(scalar) {
        assertGE(scalar);
        let n5 = scalar;
        let point, fake;
        const { endo } = CURVE;
        if (endo) {
          const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n5);
          let { p: k1p, f: f1p } = this.wNAF(k1);
          let { p: k2p, f: f2p } = this.wNAF(k2);
          k1p = wnaf.constTimeNegate(k1neg, k1p);
          k2p = wnaf.constTimeNegate(k2neg, k2p);
          k2p = new Point2(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          point = k1p.add(k2p);
          fake = f1p.add(f2p);
        } else {
          const { p: p3, f: f3 } = this.wNAF(n5);
          point = p3;
          fake = f3;
        }
        return Point2.normalizeZ([point, fake])[0];
      }
      /**
       * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
       * Not using Strauss-Shamir trick: precomputation tables are faster.
       * The trick could be useful if both P and Q are not G (not in our case).
       * @returns non-zero affine point
       */
      multiplyAndAddUnsafe(Q, a3, b4) {
        const G = Point2.BASE;
        const mul = (P2, a4) => a4 === _0n5 || a4 === _1n5 || !P2.equals(G) ? P2.multiplyUnsafe(a4) : P2.multiply(a4);
        const sum = mul(this, a3).add(mul(Q, b4));
        return sum.is0() ? void 0 : sum;
      }
      // Converts Projective point to affine (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      // (x, y, z) ∋ (x=x/z, y=y/z)
      toAffine(iz) {
        const { px: x2, py: y3, pz: z2 } = this;
        const is0 = this.is0();
        if (iz == null)
          iz = is0 ? Fp2.ONE : Fp2.inv(z2);
        const ax = Fp2.mul(x2, iz);
        const ay = Fp2.mul(y3, iz);
        const zz = Fp2.mul(z2, iz);
        if (is0)
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        if (!Fp2.eql(zz, Fp2.ONE))
          throw new Error("invZ was invalid");
        return { x: ax, y: ay };
      }
      isTorsionFree() {
        const { h: cofactor, isTorsionFree } = CURVE;
        if (cofactor === _1n5)
          return true;
        if (isTorsionFree)
          return isTorsionFree(Point2, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: cofactor, clearCofactor } = CURVE;
        if (cofactor === _1n5)
          return this;
        if (clearCofactor)
          return clearCofactor(Point2, this);
        return this.multiplyUnsafe(CURVE.h);
      }
      toRawBytes(isCompressed = true) {
        this.assertValidity();
        return toBytes2(Point2, this, isCompressed);
      }
      toHex(isCompressed = true) {
        return bytesToHex(this.toRawBytes(isCompressed));
      }
    }
    Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp2.ONE);
    Point2.ZERO = new Point2(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = wNAF(Point2, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    return {
      CURVE,
      ProjectivePoint: Point2,
      normPrivateKeyToScalar,
      weierstrassEquation,
      isWithinCurveOrder
    };
  }
  function validateOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    });
    return Object.freeze({ lowS: true, ...opts });
  }
  function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp: Fp2, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp2.BYTES + 1;
    const uncompressedLen = 2 * Fp2.BYTES + 1;
    function isValidFieldElement(num) {
      return _0n5 < num && num < Fp2.ORDER;
    }
    function modN(a3) {
      return mod(a3, CURVE_ORDER);
    }
    function invN(a3) {
      return invert(a3, CURVE_ORDER);
    }
    const { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
      ...CURVE,
      toBytes(_c, point, isCompressed) {
        const a3 = point.toAffine();
        const x2 = Fp2.toBytes(a3.x);
        const cat = concatBytes2;
        if (isCompressed) {
          return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x2);
        } else {
          return cat(Uint8Array.from([4]), x2, Fp2.toBytes(a3.y));
        }
      },
      fromBytes(bytes2) {
        const len = bytes2.length;
        const head = bytes2[0];
        const tail = bytes2.subarray(1);
        if (len === compressedLen && (head === 2 || head === 3)) {
          const x2 = bytesToNumberBE(tail);
          if (!isValidFieldElement(x2))
            throw new Error("Point is not on curve");
          const y22 = weierstrassEquation(x2);
          let y3 = Fp2.sqrt(y22);
          const isYOdd = (y3 & _1n5) === _1n5;
          const isHeadOdd = (head & 1) === 1;
          if (isHeadOdd !== isYOdd)
            y3 = Fp2.neg(y3);
          return { x: x2, y: y3 };
        } else if (len === uncompressedLen && head === 4) {
          const x2 = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
          const y3 = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
          return { x: x2, y: y3 };
        } else {
          throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
        }
      }
    });
    const numToNByteStr = (num) => bytesToHex(numberToBytesBE(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number2) {
      const HALF = CURVE_ORDER >> _1n5;
      return number2 > HALF;
    }
    function normalizeS(s4) {
      return isBiggerThanHalfOrder(s4) ? modN(-s4) : s4;
    }
    const slcNum = (b4, from, to) => bytesToNumberBE(b4.slice(from, to));
    class Signature2 {
      constructor(r4, s4, recovery) {
        this.r = r4;
        this.s = s4;
        this.recovery = recovery;
        this.assertValidity();
      }
      // pair (bytes of r, bytes of s)
      static fromCompact(hex) {
        const l3 = CURVE.nByteLength;
        hex = ensureBytes("compactSignature", hex, l3 * 2);
        return new Signature2(slcNum(hex, 0, l3), slcNum(hex, l3, 2 * l3));
      }
      // DER encoded ECDSA signature
      // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
      static fromDER(hex) {
        const { r: r4, s: s4 } = DER.toSig(ensureBytes("DER", hex));
        return new Signature2(r4, s4);
      }
      assertValidity() {
        if (!isWithinCurveOrder(this.r))
          throw new Error("r must be 0 < r < CURVE.n");
        if (!isWithinCurveOrder(this.s))
          throw new Error("s must be 0 < s < CURVE.n");
      }
      addRecoveryBit(recovery) {
        return new Signature2(this.r, this.s, recovery);
      }
      recoverPublicKey(msgHash) {
        const { r: r4, s: s4, recovery: rec } = this;
        const h3 = bits2int_modN(ensureBytes("msgHash", msgHash));
        if (rec == null || ![0, 1, 2, 3].includes(rec))
          throw new Error("recovery id invalid");
        const radj = rec === 2 || rec === 3 ? r4 + CURVE.n : r4;
        if (radj >= Fp2.ORDER)
          throw new Error("recovery id 2 or 3 invalid");
        const prefix = (rec & 1) === 0 ? "02" : "03";
        const R2 = Point2.fromHex(prefix + numToNByteStr(radj));
        const ir = invN(radj);
        const u1 = modN(-h3 * ir);
        const u22 = modN(s4 * ir);
        const Q = Point2.BASE.multiplyAndAddUnsafe(R2, u1, u22);
        if (!Q)
          throw new Error("point at infinify");
        Q.assertValidity();
        return Q;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return isBiggerThanHalfOrder(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new Signature2(this.r, modN(-this.s), this.recovery) : this;
      }
      // DER-encoded
      toDERRawBytes() {
        return hexToBytes(this.toDERHex());
      }
      toDERHex() {
        return DER.hexFromSig({ r: this.r, s: this.s });
      }
      // padded bytes of r, then padded bytes of s
      toCompactRawBytes() {
        return hexToBytes(this.toCompactHex());
      }
      toCompactHex() {
        return numToNByteStr(this.r) + numToNByteStr(this.s);
      }
    }
    const utils = {
      isValidPrivateKey(privateKey) {
        try {
          normPrivateKeyToScalar(privateKey);
          return true;
        } catch (error) {
          return false;
        }
      },
      normPrivateKeyToScalar,
      /**
       * Produces cryptographically secure private key from random of size
       * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
       */
      randomPrivateKey: () => {
        const length = getMinHashLength(CURVE.n);
        return mapHashToField(CURVE.randomBytes(length), CURVE.n);
      },
      /**
       * Creates precompute table for an arbitrary EC point. Makes point "cached".
       * Allows to massively speed-up `point.multiply(scalar)`.
       * @returns cached point
       * @example
       * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
       * fast.multiply(privKey); // much faster ECDH now
       */
      precompute(windowSize = 8, point = Point2.BASE) {
        point._setWindowSize(windowSize);
        point.multiply(BigInt(3));
        return point;
      }
    };
    function getPublicKey(privateKey, isCompressed = true) {
      return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    function isProbPub(item) {
      const arr = item instanceof Uint8Array;
      const str = typeof item === "string";
      const len = (arr || str) && item.length;
      if (arr)
        return len === compressedLen || len === uncompressedLen;
      if (str)
        return len === 2 * compressedLen || len === 2 * uncompressedLen;
      if (item instanceof Point2)
        return true;
      return false;
    }
    function getSharedSecret(privateA, publicB, isCompressed = true) {
      if (isProbPub(privateA))
        throw new Error("first arg must be private key");
      if (!isProbPub(publicB))
        throw new Error("second arg must be public key");
      const b4 = Point2.fromHex(publicB);
      return b4.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    const bits2int = CURVE.bits2int || function(bytes2) {
      const num = bytesToNumberBE(bytes2);
      const delta = bytes2.length * 8 - CURVE.nBitLength;
      return delta > 0 ? num >> BigInt(delta) : num;
    };
    const bits2int_modN = CURVE.bits2int_modN || function(bytes2) {
      return modN(bits2int(bytes2));
    };
    const ORDER_MASK = bitMask(CURVE.nBitLength);
    function int2octets(num) {
      if (typeof num !== "bigint")
        throw new Error("bigint expected");
      if (!(_0n5 <= num && num < ORDER_MASK))
        throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
      return numberToBytesBE(num, CURVE.nByteLength);
    }
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
      if (["recovered", "canonical"].some((k2) => k2 in opts))
        throw new Error("sign() legacy options not supported");
      const { hash: hash2, randomBytes: randomBytes2 } = CURVE;
      let { lowS, prehash, extraEntropy: ent } = opts;
      if (lowS == null)
        lowS = true;
      msgHash = ensureBytes("msgHash", msgHash);
      if (prehash)
        msgHash = ensureBytes("prehashed msgHash", hash2(msgHash));
      const h1int = bits2int_modN(msgHash);
      const d3 = normPrivateKeyToScalar(privateKey);
      const seedArgs = [int2octets(d3), int2octets(h1int)];
      if (ent != null) {
        const e4 = ent === true ? randomBytes2(Fp2.BYTES) : ent;
        seedArgs.push(ensureBytes("extraEntropy", e4));
      }
      const seed = concatBytes2(...seedArgs);
      const m2 = h1int;
      function k2sig(kBytes) {
        const k2 = bits2int(kBytes);
        if (!isWithinCurveOrder(k2))
          return;
        const ik = invN(k2);
        const q = Point2.BASE.multiply(k2).toAffine();
        const r4 = modN(q.x);
        if (r4 === _0n5)
          return;
        const s4 = modN(ik * modN(m2 + r4 * d3));
        if (s4 === _0n5)
          return;
        let recovery = (q.x === r4 ? 0 : 2) | Number(q.y & _1n5);
        let normS = s4;
        if (lowS && isBiggerThanHalfOrder(s4)) {
          normS = normalizeS(s4);
          recovery ^= 1;
        }
        return new Signature2(r4, normS, recovery);
      }
      return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    function sign(msgHash, privKey, opts = defaultSigOpts) {
      const { seed, k2sig } = prepSig(msgHash, privKey, opts);
      const C2 = CURVE;
      const drbg = createHmacDrbg(C2.hash.outputLen, C2.nByteLength, C2.hmac);
      return drbg(seed, k2sig);
    }
    Point2.BASE._setWindowSize(8);
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
      const sg = signature;
      msgHash = ensureBytes("msgHash", msgHash);
      publicKey = ensureBytes("publicKey", publicKey);
      if ("strict" in opts)
        throw new Error("options.strict was renamed to lowS");
      const { lowS, prehash } = opts;
      let _sig2 = void 0;
      let P2;
      try {
        if (typeof sg === "string" || sg instanceof Uint8Array) {
          try {
            _sig2 = Signature2.fromDER(sg);
          } catch (derError) {
            if (!(derError instanceof DER.Err))
              throw derError;
            _sig2 = Signature2.fromCompact(sg);
          }
        } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
          const { r: r5, s: s5 } = sg;
          _sig2 = new Signature2(r5, s5);
        } else {
          throw new Error("PARSE");
        }
        P2 = Point2.fromHex(publicKey);
      } catch (error) {
        if (error.message === "PARSE")
          throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
        return false;
      }
      if (lowS && _sig2.hasHighS())
        return false;
      if (prehash)
        msgHash = CURVE.hash(msgHash);
      const { r: r4, s: s4 } = _sig2;
      const h3 = bits2int_modN(msgHash);
      const is = invN(s4);
      const u1 = modN(h3 * is);
      const u22 = modN(r4 * is);
      const R2 = Point2.BASE.multiplyAndAddUnsafe(P2, u1, u22)?.toAffine();
      if (!R2)
        return false;
      const v2 = modN(R2.x);
      return v2 === r4;
    }
    return {
      CURVE,
      getPublicKey,
      getSharedSecret,
      sign,
      verify,
      ProjectivePoint: Point2,
      Signature: Signature2,
      utils
    };
  }

  // node_modules/@noble/curves/esm/_shortw_utils.js
  function getHash(hash2) {
    return {
      hash: hash2,
      hmac: (key, ...msgs) => hmac(hash2, key, concatBytes(...msgs)),
      randomBytes
    };
  }
  function createCurve(curveDef, defHash) {
    const create = (hash2) => weierstrass({ ...curveDef, ...getHash(hash2) });
    return Object.freeze({ ...create(defHash), create });
  }

  // node_modules/@noble/curves/esm/secp256k1.js
  var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
  var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  var _1n6 = BigInt(1);
  var _2n5 = BigInt(2);
  var divNearest = (a3, b4) => (a3 + b4 / _2n5) / b4;
  function sqrtMod(y3) {
    const P2 = secp256k1P;
    const _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b22 = y3 * y3 * y3 % P2;
    const b32 = b22 * b22 * y3 % P2;
    const b6 = pow2(b32, _3n3, P2) * b32 % P2;
    const b9 = pow2(b6, _3n3, P2) * b32 % P2;
    const b11 = pow2(b9, _2n5, P2) * b22 % P2;
    const b222 = pow2(b11, _11n, P2) * b11 % P2;
    const b44 = pow2(b222, _22n, P2) * b222 % P2;
    const b88 = pow2(b44, _44n, P2) * b44 % P2;
    const b176 = pow2(b88, _88n, P2) * b88 % P2;
    const b220 = pow2(b176, _44n, P2) * b44 % P2;
    const b223 = pow2(b220, _3n3, P2) * b32 % P2;
    const t1 = pow2(b223, _23n, P2) * b222 % P2;
    const t22 = pow2(t1, _6n, P2) * b22 % P2;
    const root = pow2(t22, _2n5, P2);
    if (!Fp.eql(Fp.sqr(root), y3))
      throw new Error("Cannot find square root");
    return root;
  }
  var Fp = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
  var secp256k1 = createCurve({
    a: BigInt(0),
    b: BigInt(7),
    Fp,
    n: secp256k1N,
    // Base point (x, y) aka generator point
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (k2) => {
        const n5 = secp256k1N;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n6 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a22 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b22 = a1;
        const POW_2_128 = BigInt("0x100000000000000000000000000000000");
        const c1 = divNearest(b22 * k2, n5);
        const c22 = divNearest(-b1 * k2, n5);
        let k1 = mod(k2 - c1 * a1 - c22 * a22, n5);
        let k22 = mod(-c1 * b1 - c22 * b22, n5);
        const k1neg = k1 > POW_2_128;
        const k2neg = k22 > POW_2_128;
        if (k1neg)
          k1 = n5 - k1;
        if (k2neg)
          k22 = n5 - k22;
        if (k1 > POW_2_128 || k22 > POW_2_128) {
          throw new Error("splitScalar: Endomorphism failed, k=" + k2);
        }
        return { k1neg, k1, k2neg, k2: k22 };
      }
    }
  }, sha256);
  var _0n6 = BigInt(0);
  var Point = secp256k1.ProjectivePoint;

  // node_modules/ethers/lib.esm/constants/addresses.js
  var ZeroAddress = "0x0000000000000000000000000000000000000000";

  // node_modules/ethers/lib.esm/constants/hashes.js
  var ZeroHash = "0x0000000000000000000000000000000000000000000000000000000000000000";

  // node_modules/ethers/lib.esm/crypto/signature.js
  var BN_03 = BigInt(0);
  var BN_12 = BigInt(1);
  var BN_2 = BigInt(2);
  var BN_27 = BigInt(27);
  var BN_28 = BigInt(28);
  var BN_35 = BigInt(35);
  var _guard2 = {};
  function toUint256(value) {
    return zeroPadValue(toBeArray(value), 32);
  }
  var _r, _s, _v, _networkV;
  var _Signature = class _Signature {
    /**
     *  @private
     */
    constructor(guard, r4, s4, v2) {
      __privateAdd(this, _r);
      __privateAdd(this, _s);
      __privateAdd(this, _v);
      __privateAdd(this, _networkV);
      assertPrivate(guard, _guard2, "Signature");
      __privateSet(this, _r, r4);
      __privateSet(this, _s, s4);
      __privateSet(this, _v, v2);
      __privateSet(this, _networkV, null);
    }
    /**
     *  The ``r`` value for a signature.
     *
     *  This represents the ``x`` coordinate of a "reference" or
     *  challenge point, from which the ``y`` can be computed.
     */
    get r() {
      return __privateGet(this, _r);
    }
    set r(value) {
      assertArgument(dataLength(value) === 32, "invalid r", "value", value);
      __privateSet(this, _r, hexlify(value));
    }
    /**
     *  The ``s`` value for a signature.
     */
    get s() {
      return __privateGet(this, _s);
    }
    set s(_value2) {
      assertArgument(dataLength(_value2) === 32, "invalid s", "value", _value2);
      const value = hexlify(_value2);
      assertArgument(parseInt(value.substring(0, 3)) < 8, "non-canonical s", "value", value);
      __privateSet(this, _s, value);
    }
    /**
     *  The ``v`` value for a signature.
     *
     *  Since a given ``x`` value for ``r`` has two possible values for
     *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
     *  values to use.
     *
     *  It is normalized to the values ``27`` or ``28`` for legacy
     *  purposes.
     */
    get v() {
      return __privateGet(this, _v);
    }
    set v(value) {
      const v2 = getNumber(value, "value");
      assertArgument(v2 === 27 || v2 === 28, "invalid v", "v", value);
      __privateSet(this, _v, v2);
    }
    /**
     *  The EIP-155 ``v`` for legacy transactions. For non-legacy
     *  transactions, this value is ``null``.
     */
    get networkV() {
      return __privateGet(this, _networkV);
    }
    /**
     *  The chain ID for EIP-155 legacy transactions. For non-legacy
     *  transactions, this value is ``null``.
     */
    get legacyChainId() {
      const v2 = this.networkV;
      if (v2 == null) {
        return null;
      }
      return _Signature.getChainId(v2);
    }
    /**
     *  The ``yParity`` for the signature.
     *
     *  See ``v`` for more details on how this value is used.
     */
    get yParity() {
      return this.v === 27 ? 0 : 1;
    }
    /**
     *  The [[link-eip-2098]] compact representation of the ``yParity``
     *  and ``s`` compacted into a single ``bytes32``.
     */
    get yParityAndS() {
      const yParityAndS = getBytes(this.s);
      if (this.yParity) {
        yParityAndS[0] |= 128;
      }
      return hexlify(yParityAndS);
    }
    /**
     *  The [[link-eip-2098]] compact representation.
     */
    get compactSerialized() {
      return concat([this.r, this.yParityAndS]);
    }
    /**
     *  The serialized representation.
     */
    get serialized() {
      return concat([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
    }
    /**
     *  Returns a new identical [[Signature]].
     */
    clone() {
      const clone = new _Signature(_guard2, this.r, this.s, this.v);
      if (this.networkV) {
        __privateSet(clone, _networkV, this.networkV);
      }
      return clone;
    }
    /**
     *  Returns a representation that is compatible with ``JSON.stringify``.
     */
    toJSON() {
      const networkV = this.networkV;
      return {
        _type: "signature",
        networkV: networkV != null ? networkV.toString() : null,
        r: this.r,
        s: this.s,
        v: this.v
      };
    }
    /**
     *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
     *
     *  @example:
     *    Signature.getChainId(45)
     *    //_result:
     *
     *    Signature.getChainId(46)
     *    //_result:
     */
    static getChainId(v2) {
      const bv = getBigInt(v2, "v");
      if (bv == BN_27 || bv == BN_28) {
        return BN_03;
      }
      assertArgument(bv >= BN_35, "invalid EIP-155 v", "v", v2);
      return (bv - BN_35) / BN_2;
    }
    /**
     *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
     *
     *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
     *  property to include the chain ID.
     *
     *  @example:
     *    Signature.getChainIdV(5, 27)
     *    //_result:
     *
     *    Signature.getChainIdV(5, 28)
     *    //_result:
     *
     */
    static getChainIdV(chainId, v2) {
      return getBigInt(chainId) * BN_2 + BigInt(35 + v2 - 27);
    }
    /**
     *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
     *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
     *
     *  @example:
     *    // The values 0 and 1 imply v is actually yParity
     *    Signature.getNormalizedV(0)
     *    //_result:
     *
     *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
     *    Signature.getNormalizedV(27)
     *    //_result:
     *
     *    // Legacy EIP-155 transaction (i.e. >= 35)
     *    Signature.getNormalizedV(46)
     *    //_result:
     *
     *    // Invalid values throw
     *    Signature.getNormalizedV(5)
     *    //_error:
     */
    static getNormalizedV(v2) {
      const bv = getBigInt(v2);
      if (bv === BN_03 || bv === BN_27) {
        return 27;
      }
      if (bv === BN_12 || bv === BN_28) {
        return 28;
      }
      assertArgument(bv >= BN_35, "invalid v", "v", v2);
      return bv & BN_12 ? 27 : 28;
    }
    /**
     *  Creates a new [[Signature]].
     *
     *  If no %%sig%% is provided, a new [[Signature]] is created
     *  with default values.
     *
     *  If %%sig%% is a string, it is parsed.
     */
    static from(sig) {
      function assertError(check, message) {
        assertArgument(check, message, "signature", sig);
      }
      ;
      if (sig == null) {
        return new _Signature(_guard2, ZeroHash, ZeroHash, 27);
      }
      if (typeof sig === "string") {
        const bytes2 = getBytes(sig, "signature");
        if (bytes2.length === 64) {
          const r5 = hexlify(bytes2.slice(0, 32));
          const s5 = bytes2.slice(32, 64);
          const v3 = s5[0] & 128 ? 28 : 27;
          s5[0] &= 127;
          return new _Signature(_guard2, r5, hexlify(s5), v3);
        }
        if (bytes2.length === 65) {
          const r5 = hexlify(bytes2.slice(0, 32));
          const s5 = bytes2.slice(32, 64);
          assertError((s5[0] & 128) === 0, "non-canonical s");
          const v3 = _Signature.getNormalizedV(bytes2[64]);
          return new _Signature(_guard2, r5, hexlify(s5), v3);
        }
        assertError(false, "invalid raw signature length");
      }
      if (sig instanceof _Signature) {
        return sig.clone();
      }
      const _r2 = sig.r;
      assertError(_r2 != null, "missing r");
      const r4 = toUint256(_r2);
      const s4 = function(s5, yParityAndS) {
        if (s5 != null) {
          return toUint256(s5);
        }
        if (yParityAndS != null) {
          assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
          const bytes2 = getBytes(yParityAndS);
          bytes2[0] &= 127;
          return hexlify(bytes2);
        }
        assertError(false, "missing s");
      }(sig.s, sig.yParityAndS);
      assertError((getBytes(s4)[0] & 128) == 0, "non-canonical s");
      const { networkV, v: v2 } = function(_v2, yParityAndS, yParity) {
        if (_v2 != null) {
          const v3 = getBigInt(_v2);
          return {
            networkV: v3 >= BN_35 ? v3 : void 0,
            v: _Signature.getNormalizedV(v3)
          };
        }
        if (yParityAndS != null) {
          assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
          return { v: getBytes(yParityAndS)[0] & 128 ? 28 : 27 };
        }
        if (yParity != null) {
          switch (getNumber(yParity, "sig.yParity")) {
            case 0:
              return { v: 27 };
            case 1:
              return { v: 28 };
          }
          assertError(false, "invalid yParity");
        }
        assertError(false, "missing v");
      }(sig.v, sig.yParityAndS, sig.yParity);
      const result = new _Signature(_guard2, r4, s4, v2);
      if (networkV) {
        __privateSet(result, _networkV, networkV);
      }
      assertError(sig.yParity == null || getNumber(sig.yParity, "sig.yParity") === result.yParity, "yParity mismatch");
      assertError(sig.yParityAndS == null || sig.yParityAndS === result.yParityAndS, "yParityAndS mismatch");
      return result;
    }
  };
  _r = new WeakMap();
  _s = new WeakMap();
  _v = new WeakMap();
  _networkV = new WeakMap();
  var Signature = _Signature;

  // node_modules/ethers/lib.esm/crypto/signing-key.js
  var _privateKey;
  var _SigningKey = class _SigningKey {
    /**
     *  Creates a new **SigningKey** for %%privateKey%%.
     */
    constructor(privateKey) {
      __privateAdd(this, _privateKey);
      assertArgument(dataLength(privateKey) === 32, "invalid private key", "privateKey", "[REDACTED]");
      __privateSet(this, _privateKey, hexlify(privateKey));
    }
    /**
     *  The private key.
     */
    get privateKey() {
      return __privateGet(this, _privateKey);
    }
    /**
     *  The uncompressed public key.
     *
     * This will always begin with the prefix ``0x04`` and be 132
     * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
     */
    get publicKey() {
      return _SigningKey.computePublicKey(__privateGet(this, _privateKey));
    }
    /**
     *  The compressed public key.
     *
     *  This will always begin with either the prefix ``0x02`` or ``0x03``
     *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
     *  nibbles)
     */
    get compressedPublicKey() {
      return _SigningKey.computePublicKey(__privateGet(this, _privateKey), true);
    }
    /**
     *  Return the signature of the signed %%digest%%.
     */
    sign(digest) {
      assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
      const sig = secp256k1.sign(getBytesCopy(digest), getBytesCopy(__privateGet(this, _privateKey)), {
        lowS: true
      });
      return Signature.from({
        r: toBeHex(sig.r, 32),
        s: toBeHex(sig.s, 32),
        v: sig.recovery ? 28 : 27
      });
    }
    /**
     *  Returns the [[link-wiki-ecdh]] shared secret between this
     *  private key and the %%other%% key.
     *
     *  The %%other%% key may be any type of key, a raw public key,
     *  a compressed/uncompressed pubic key or aprivate key.
     *
     *  Best practice is usually to use a cryptographic hash on the
     *  returned value before using it as a symetric secret.
     *
     *  @example:
     *    sign1 = new SigningKey(id("some-secret-1"))
     *    sign2 = new SigningKey(id("some-secret-2"))
     *
     *    // Notice that privA.computeSharedSecret(pubB)...
     *    sign1.computeSharedSecret(sign2.publicKey)
     *    //_result:
     *
     *    // ...is equal to privB.computeSharedSecret(pubA).
     *    sign2.computeSharedSecret(sign1.publicKey)
     *    //_result:
     */
    computeSharedSecret(other) {
      const pubKey = _SigningKey.computePublicKey(other);
      return hexlify(secp256k1.getSharedSecret(getBytesCopy(__privateGet(this, _privateKey)), getBytes(pubKey), false));
    }
    /**
     *  Compute the public key for %%key%%, optionally %%compressed%%.
     *
     *  The %%key%% may be any type of key, a raw public key, a
     *  compressed/uncompressed public key or private key.
     *
     *  @example:
     *    sign = new SigningKey(id("some-secret"));
     *
     *    // Compute the uncompressed public key for a private key
     *    SigningKey.computePublicKey(sign.privateKey)
     *    //_result:
     *
     *    // Compute the compressed public key for a private key
     *    SigningKey.computePublicKey(sign.privateKey, true)
     *    //_result:
     *
     *    // Compute the uncompressed public key
     *    SigningKey.computePublicKey(sign.publicKey, false);
     *    //_result:
     *
     *    // Compute the Compressed a public key
     *    SigningKey.computePublicKey(sign.publicKey, true);
     *    //_result:
     */
    static computePublicKey(key, compressed) {
      let bytes2 = getBytes(key, "key");
      if (bytes2.length === 32) {
        const pubKey = secp256k1.getPublicKey(bytes2, !!compressed);
        return hexlify(pubKey);
      }
      if (bytes2.length === 64) {
        const pub = new Uint8Array(65);
        pub[0] = 4;
        pub.set(bytes2, 1);
        bytes2 = pub;
      }
      const point = secp256k1.ProjectivePoint.fromHex(bytes2);
      return hexlify(point.toRawBytes(compressed));
    }
    /**
     *  Returns the public key for the private key which produced the
     *  %%signature%% for the given %%digest%%.
     *
     *  @example:
     *    key = new SigningKey(id("some-secret"))
     *    digest = id("hello world")
     *    sig = key.sign(digest)
     *
     *    // Notice the signer public key...
     *    key.publicKey
     *    //_result:
     *
     *    // ...is equal to the recovered public key
     *    SigningKey.recoverPublicKey(digest, sig)
     *    //_result:
     *
     */
    static recoverPublicKey(digest, signature) {
      assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
      const sig = Signature.from(signature);
      let secpSig = secp256k1.Signature.fromCompact(getBytesCopy(concat([sig.r, sig.s])));
      secpSig = secpSig.addRecoveryBit(sig.yParity);
      const pubKey = secpSig.recoverPublicKey(getBytesCopy(digest));
      assertArgument(pubKey != null, "invalid signature for digest", "signature", signature);
      return "0x" + pubKey.toHex(false);
    }
    /**
     *  Returns the point resulting from adding the ellipic curve points
     *  %%p0%% and %%p1%%.
     *
     *  This is not a common function most developers should require, but
     *  can be useful for certain privacy-specific techniques.
     *
     *  For example, it is used by [[HDNodeWallet]] to compute child
     *  addresses from parent public keys and chain codes.
     */
    static addPoints(p0, p1, compressed) {
      const pub0 = secp256k1.ProjectivePoint.fromHex(_SigningKey.computePublicKey(p0).substring(2));
      const pub1 = secp256k1.ProjectivePoint.fromHex(_SigningKey.computePublicKey(p1).substring(2));
      return "0x" + pub0.add(pub1).toHex(!!compressed);
    }
  };
  _privateKey = new WeakMap();
  var SigningKey = _SigningKey;

  // node_modules/ethers/lib.esm/address/address.js
  var BN_04 = BigInt(0);
  var BN_36 = BigInt(36);
  function getChecksumAddress(address) {
    address = address.toLowerCase();
    const chars = address.substring(2).split("");
    const expanded = new Uint8Array(40);
    for (let i5 = 0; i5 < 40; i5++) {
      expanded[i5] = chars[i5].charCodeAt(0);
    }
    const hashed = getBytes(keccak256(expanded));
    for (let i5 = 0; i5 < 40; i5 += 2) {
      if (hashed[i5 >> 1] >> 4 >= 8) {
        chars[i5] = chars[i5].toUpperCase();
      }
      if ((hashed[i5 >> 1] & 15) >= 8) {
        chars[i5 + 1] = chars[i5 + 1].toUpperCase();
      }
    }
    return "0x" + chars.join("");
  }
  var ibanLookup = {};
  for (let i5 = 0; i5 < 10; i5++) {
    ibanLookup[String(i5)] = String(i5);
  }
  for (let i5 = 0; i5 < 26; i5++) {
    ibanLookup[String.fromCharCode(65 + i5)] = String(10 + i5);
  }
  var safeDigits = 15;
  function ibanChecksum(address) {
    address = address.toUpperCase();
    address = address.substring(4) + address.substring(0, 2) + "00";
    let expanded = address.split("").map((c4) => {
      return ibanLookup[c4];
    }).join("");
    while (expanded.length >= safeDigits) {
      let block = expanded.substring(0, safeDigits);
      expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
    }
    let checksum = String(98 - parseInt(expanded, 10) % 97);
    while (checksum.length < 2) {
      checksum = "0" + checksum;
    }
    return checksum;
  }
  var Base36 = function() {
    ;
    const result = {};
    for (let i5 = 0; i5 < 36; i5++) {
      const key = "0123456789abcdefghijklmnopqrstuvwxyz"[i5];
      result[key] = BigInt(i5);
    }
    return result;
  }();
  function fromBase36(value) {
    value = value.toLowerCase();
    let result = BN_04;
    for (let i5 = 0; i5 < value.length; i5++) {
      result = result * BN_36 + Base36[value[i5]];
    }
    return result;
  }
  function getAddress(address) {
    assertArgument(typeof address === "string", "invalid address", "address", address);
    if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
      if (!address.startsWith("0x")) {
        address = "0x" + address;
      }
      const result = getChecksumAddress(address);
      assertArgument(!address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || result === address, "bad address checksum", "address", address);
      return result;
    }
    if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
      assertArgument(address.substring(2, 4) === ibanChecksum(address), "bad icap checksum", "address", address);
      let result = fromBase36(address.substring(4)).toString(16);
      while (result.length < 40) {
        result = "0" + result;
      }
      return getChecksumAddress("0x" + result);
    }
    assertArgument(false, "invalid address", "address", address);
  }

  // node_modules/ethers/lib.esm/address/contract-address.js
  function getCreateAddress(tx) {
    const from = getAddress(tx.from);
    const nonce = getBigInt(tx.nonce, "tx.nonce");
    let nonceHex = nonce.toString(16);
    if (nonceHex === "0") {
      nonceHex = "0x";
    } else if (nonceHex.length % 2) {
      nonceHex = "0x0" + nonceHex;
    } else {
      nonceHex = "0x" + nonceHex;
    }
    return getAddress(dataSlice(keccak256(encodeRlp([from, nonceHex])), 12));
  }

  // node_modules/ethers/lib.esm/address/checks.js
  function isAddressable(value) {
    return value && typeof value.getAddress === "function";
  }
  async function checkAddress(target, promise) {
    const result = await promise;
    if (result == null || result === "0x0000000000000000000000000000000000000000") {
      assert(typeof target !== "string", "unconfigured name", "UNCONFIGURED_NAME", { value: target });
      assertArgument(false, "invalid AddressLike value; did not resolve to a value address", "target", target);
    }
    return getAddress(result);
  }
  function resolveAddress(target, resolver) {
    if (typeof target === "string") {
      if (target.match(/^0x[0-9a-f]{40}$/i)) {
        return getAddress(target);
      }
      assert(resolver != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" });
      return checkAddress(target, resolver.resolveName(target));
    } else if (isAddressable(target)) {
      return checkAddress(target, target.getAddress());
    } else if (target && typeof target.then === "function") {
      return checkAddress(target, target);
    }
    assertArgument(false, "unsupported addressable value", "target", target);
  }

  // node_modules/ethers/lib.esm/abi/typed.js
  var _gaurd = {};
  function n4(value, width) {
    let signed2 = false;
    if (width < 0) {
      signed2 = true;
      width *= -1;
    }
    return new Typed(_gaurd, `${signed2 ? "" : "u"}int${width}`, value, { signed: signed2, width });
  }
  function b3(value, size) {
    return new Typed(_gaurd, `bytes${size ? size : ""}`, value, { size });
  }
  var _typedSymbol = Symbol.for("_ethers_typed");
  var _options3;
  var _Typed = class _Typed {
    /**
     *  @_ignore:
     */
    constructor(gaurd, type, value, options) {
      /**
       *  The type, as a Solidity-compatible type.
       */
      __publicField(this, "type");
      /**
       *  The actual value.
       */
      __publicField(this, "value");
      __privateAdd(this, _options3);
      /**
       *  @_ignore:
       */
      __publicField(this, "_typedSymbol");
      if (options == null) {
        options = null;
      }
      assertPrivate(_gaurd, gaurd, "Typed");
      defineProperties(this, { _typedSymbol, type, value });
      __privateSet(this, _options3, options);
      this.format();
    }
    /**
     *  Format the type as a Human-Readable type.
     */
    format() {
      if (this.type === "array") {
        throw new Error("");
      } else if (this.type === "dynamicArray") {
        throw new Error("");
      } else if (this.type === "tuple") {
        return `tuple(${this.value.map((v2) => v2.format()).join(",")})`;
      }
      return this.type;
    }
    /**
     *  The default value returned by this type.
     */
    defaultValue() {
      return 0;
    }
    /**
     *  The minimum value for numeric types.
     */
    minValue() {
      return 0;
    }
    /**
     *  The maximum value for numeric types.
     */
    maxValue() {
      return 0;
    }
    /**
     *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
     */
    isBigInt() {
      return !!this.type.match(/^u?int[0-9]+$/);
    }
    /**
     *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
     */
    isData() {
      return this.type.startsWith("bytes");
    }
    /**
     *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
     */
    isString() {
      return this.type === "string";
    }
    /**
     *  Returns the tuple name, if this is a tuple. Throws otherwise.
     */
    get tupleName() {
      if (this.type !== "tuple") {
        throw TypeError("not a tuple");
      }
      return __privateGet(this, _options3);
    }
    // Returns the length of this type as an array
    // - `null` indicates the length is unforced, it could be dynamic
    // - `-1` indicates the length is dynamic
    // - any other value indicates it is a static array and is its length
    /**
     *  Returns the length of the array type or ``-1`` if it is dynamic.
     *
     *  Throws if the type is not an array.
     */
    get arrayLength() {
      if (this.type !== "array") {
        throw TypeError("not an array");
      }
      if (__privateGet(this, _options3) === true) {
        return -1;
      }
      if (__privateGet(this, _options3) === false) {
        return this.value.length;
      }
      return null;
    }
    /**
     *  Returns a new **Typed** of %%type%% with the %%value%%.
     */
    static from(type, value) {
      return new _Typed(_gaurd, type, value);
    }
    /**
     *  Return a new ``uint8`` type for %%v%%.
     */
    static uint8(v2) {
      return n4(v2, 8);
    }
    /**
     *  Return a new ``uint16`` type for %%v%%.
     */
    static uint16(v2) {
      return n4(v2, 16);
    }
    /**
     *  Return a new ``uint24`` type for %%v%%.
     */
    static uint24(v2) {
      return n4(v2, 24);
    }
    /**
     *  Return a new ``uint32`` type for %%v%%.
     */
    static uint32(v2) {
      return n4(v2, 32);
    }
    /**
     *  Return a new ``uint40`` type for %%v%%.
     */
    static uint40(v2) {
      return n4(v2, 40);
    }
    /**
     *  Return a new ``uint48`` type for %%v%%.
     */
    static uint48(v2) {
      return n4(v2, 48);
    }
    /**
     *  Return a new ``uint56`` type for %%v%%.
     */
    static uint56(v2) {
      return n4(v2, 56);
    }
    /**
     *  Return a new ``uint64`` type for %%v%%.
     */
    static uint64(v2) {
      return n4(v2, 64);
    }
    /**
     *  Return a new ``uint72`` type for %%v%%.
     */
    static uint72(v2) {
      return n4(v2, 72);
    }
    /**
     *  Return a new ``uint80`` type for %%v%%.
     */
    static uint80(v2) {
      return n4(v2, 80);
    }
    /**
     *  Return a new ``uint88`` type for %%v%%.
     */
    static uint88(v2) {
      return n4(v2, 88);
    }
    /**
     *  Return a new ``uint96`` type for %%v%%.
     */
    static uint96(v2) {
      return n4(v2, 96);
    }
    /**
     *  Return a new ``uint104`` type for %%v%%.
     */
    static uint104(v2) {
      return n4(v2, 104);
    }
    /**
     *  Return a new ``uint112`` type for %%v%%.
     */
    static uint112(v2) {
      return n4(v2, 112);
    }
    /**
     *  Return a new ``uint120`` type for %%v%%.
     */
    static uint120(v2) {
      return n4(v2, 120);
    }
    /**
     *  Return a new ``uint128`` type for %%v%%.
     */
    static uint128(v2) {
      return n4(v2, 128);
    }
    /**
     *  Return a new ``uint136`` type for %%v%%.
     */
    static uint136(v2) {
      return n4(v2, 136);
    }
    /**
     *  Return a new ``uint144`` type for %%v%%.
     */
    static uint144(v2) {
      return n4(v2, 144);
    }
    /**
     *  Return a new ``uint152`` type for %%v%%.
     */
    static uint152(v2) {
      return n4(v2, 152);
    }
    /**
     *  Return a new ``uint160`` type for %%v%%.
     */
    static uint160(v2) {
      return n4(v2, 160);
    }
    /**
     *  Return a new ``uint168`` type for %%v%%.
     */
    static uint168(v2) {
      return n4(v2, 168);
    }
    /**
     *  Return a new ``uint176`` type for %%v%%.
     */
    static uint176(v2) {
      return n4(v2, 176);
    }
    /**
     *  Return a new ``uint184`` type for %%v%%.
     */
    static uint184(v2) {
      return n4(v2, 184);
    }
    /**
     *  Return a new ``uint192`` type for %%v%%.
     */
    static uint192(v2) {
      return n4(v2, 192);
    }
    /**
     *  Return a new ``uint200`` type for %%v%%.
     */
    static uint200(v2) {
      return n4(v2, 200);
    }
    /**
     *  Return a new ``uint208`` type for %%v%%.
     */
    static uint208(v2) {
      return n4(v2, 208);
    }
    /**
     *  Return a new ``uint216`` type for %%v%%.
     */
    static uint216(v2) {
      return n4(v2, 216);
    }
    /**
     *  Return a new ``uint224`` type for %%v%%.
     */
    static uint224(v2) {
      return n4(v2, 224);
    }
    /**
     *  Return a new ``uint232`` type for %%v%%.
     */
    static uint232(v2) {
      return n4(v2, 232);
    }
    /**
     *  Return a new ``uint240`` type for %%v%%.
     */
    static uint240(v2) {
      return n4(v2, 240);
    }
    /**
     *  Return a new ``uint248`` type for %%v%%.
     */
    static uint248(v2) {
      return n4(v2, 248);
    }
    /**
     *  Return a new ``uint256`` type for %%v%%.
     */
    static uint256(v2) {
      return n4(v2, 256);
    }
    /**
     *  Return a new ``uint256`` type for %%v%%.
     */
    static uint(v2) {
      return n4(v2, 256);
    }
    /**
     *  Return a new ``int8`` type for %%v%%.
     */
    static int8(v2) {
      return n4(v2, -8);
    }
    /**
     *  Return a new ``int16`` type for %%v%%.
     */
    static int16(v2) {
      return n4(v2, -16);
    }
    /**
     *  Return a new ``int24`` type for %%v%%.
     */
    static int24(v2) {
      return n4(v2, -24);
    }
    /**
     *  Return a new ``int32`` type for %%v%%.
     */
    static int32(v2) {
      return n4(v2, -32);
    }
    /**
     *  Return a new ``int40`` type for %%v%%.
     */
    static int40(v2) {
      return n4(v2, -40);
    }
    /**
     *  Return a new ``int48`` type for %%v%%.
     */
    static int48(v2) {
      return n4(v2, -48);
    }
    /**
     *  Return a new ``int56`` type for %%v%%.
     */
    static int56(v2) {
      return n4(v2, -56);
    }
    /**
     *  Return a new ``int64`` type for %%v%%.
     */
    static int64(v2) {
      return n4(v2, -64);
    }
    /**
     *  Return a new ``int72`` type for %%v%%.
     */
    static int72(v2) {
      return n4(v2, -72);
    }
    /**
     *  Return a new ``int80`` type for %%v%%.
     */
    static int80(v2) {
      return n4(v2, -80);
    }
    /**
     *  Return a new ``int88`` type for %%v%%.
     */
    static int88(v2) {
      return n4(v2, -88);
    }
    /**
     *  Return a new ``int96`` type for %%v%%.
     */
    static int96(v2) {
      return n4(v2, -96);
    }
    /**
     *  Return a new ``int104`` type for %%v%%.
     */
    static int104(v2) {
      return n4(v2, -104);
    }
    /**
     *  Return a new ``int112`` type for %%v%%.
     */
    static int112(v2) {
      return n4(v2, -112);
    }
    /**
     *  Return a new ``int120`` type for %%v%%.
     */
    static int120(v2) {
      return n4(v2, -120);
    }
    /**
     *  Return a new ``int128`` type for %%v%%.
     */
    static int128(v2) {
      return n4(v2, -128);
    }
    /**
     *  Return a new ``int136`` type for %%v%%.
     */
    static int136(v2) {
      return n4(v2, -136);
    }
    /**
     *  Return a new ``int144`` type for %%v%%.
     */
    static int144(v2) {
      return n4(v2, -144);
    }
    /**
     *  Return a new ``int52`` type for %%v%%.
     */
    static int152(v2) {
      return n4(v2, -152);
    }
    /**
     *  Return a new ``int160`` type for %%v%%.
     */
    static int160(v2) {
      return n4(v2, -160);
    }
    /**
     *  Return a new ``int168`` type for %%v%%.
     */
    static int168(v2) {
      return n4(v2, -168);
    }
    /**
     *  Return a new ``int176`` type for %%v%%.
     */
    static int176(v2) {
      return n4(v2, -176);
    }
    /**
     *  Return a new ``int184`` type for %%v%%.
     */
    static int184(v2) {
      return n4(v2, -184);
    }
    /**
     *  Return a new ``int92`` type for %%v%%.
     */
    static int192(v2) {
      return n4(v2, -192);
    }
    /**
     *  Return a new ``int200`` type for %%v%%.
     */
    static int200(v2) {
      return n4(v2, -200);
    }
    /**
     *  Return a new ``int208`` type for %%v%%.
     */
    static int208(v2) {
      return n4(v2, -208);
    }
    /**
     *  Return a new ``int216`` type for %%v%%.
     */
    static int216(v2) {
      return n4(v2, -216);
    }
    /**
     *  Return a new ``int224`` type for %%v%%.
     */
    static int224(v2) {
      return n4(v2, -224);
    }
    /**
     *  Return a new ``int232`` type for %%v%%.
     */
    static int232(v2) {
      return n4(v2, -232);
    }
    /**
     *  Return a new ``int240`` type for %%v%%.
     */
    static int240(v2) {
      return n4(v2, -240);
    }
    /**
     *  Return a new ``int248`` type for %%v%%.
     */
    static int248(v2) {
      return n4(v2, -248);
    }
    /**
     *  Return a new ``int256`` type for %%v%%.
     */
    static int256(v2) {
      return n4(v2, -256);
    }
    /**
     *  Return a new ``int256`` type for %%v%%.
     */
    static int(v2) {
      return n4(v2, -256);
    }
    /**
     *  Return a new ``bytes1`` type for %%v%%.
     */
    static bytes1(v2) {
      return b3(v2, 1);
    }
    /**
     *  Return a new ``bytes2`` type for %%v%%.
     */
    static bytes2(v2) {
      return b3(v2, 2);
    }
    /**
     *  Return a new ``bytes3`` type for %%v%%.
     */
    static bytes3(v2) {
      return b3(v2, 3);
    }
    /**
     *  Return a new ``bytes4`` type for %%v%%.
     */
    static bytes4(v2) {
      return b3(v2, 4);
    }
    /**
     *  Return a new ``bytes5`` type for %%v%%.
     */
    static bytes5(v2) {
      return b3(v2, 5);
    }
    /**
     *  Return a new ``bytes6`` type for %%v%%.
     */
    static bytes6(v2) {
      return b3(v2, 6);
    }
    /**
     *  Return a new ``bytes7`` type for %%v%%.
     */
    static bytes7(v2) {
      return b3(v2, 7);
    }
    /**
     *  Return a new ``bytes8`` type for %%v%%.
     */
    static bytes8(v2) {
      return b3(v2, 8);
    }
    /**
     *  Return a new ``bytes9`` type for %%v%%.
     */
    static bytes9(v2) {
      return b3(v2, 9);
    }
    /**
     *  Return a new ``bytes10`` type for %%v%%.
     */
    static bytes10(v2) {
      return b3(v2, 10);
    }
    /**
     *  Return a new ``bytes11`` type for %%v%%.
     */
    static bytes11(v2) {
      return b3(v2, 11);
    }
    /**
     *  Return a new ``bytes12`` type for %%v%%.
     */
    static bytes12(v2) {
      return b3(v2, 12);
    }
    /**
     *  Return a new ``bytes13`` type for %%v%%.
     */
    static bytes13(v2) {
      return b3(v2, 13);
    }
    /**
     *  Return a new ``bytes14`` type for %%v%%.
     */
    static bytes14(v2) {
      return b3(v2, 14);
    }
    /**
     *  Return a new ``bytes15`` type for %%v%%.
     */
    static bytes15(v2) {
      return b3(v2, 15);
    }
    /**
     *  Return a new ``bytes16`` type for %%v%%.
     */
    static bytes16(v2) {
      return b3(v2, 16);
    }
    /**
     *  Return a new ``bytes17`` type for %%v%%.
     */
    static bytes17(v2) {
      return b3(v2, 17);
    }
    /**
     *  Return a new ``bytes18`` type for %%v%%.
     */
    static bytes18(v2) {
      return b3(v2, 18);
    }
    /**
     *  Return a new ``bytes19`` type for %%v%%.
     */
    static bytes19(v2) {
      return b3(v2, 19);
    }
    /**
     *  Return a new ``bytes20`` type for %%v%%.
     */
    static bytes20(v2) {
      return b3(v2, 20);
    }
    /**
     *  Return a new ``bytes21`` type for %%v%%.
     */
    static bytes21(v2) {
      return b3(v2, 21);
    }
    /**
     *  Return a new ``bytes22`` type for %%v%%.
     */
    static bytes22(v2) {
      return b3(v2, 22);
    }
    /**
     *  Return a new ``bytes23`` type for %%v%%.
     */
    static bytes23(v2) {
      return b3(v2, 23);
    }
    /**
     *  Return a new ``bytes24`` type for %%v%%.
     */
    static bytes24(v2) {
      return b3(v2, 24);
    }
    /**
     *  Return a new ``bytes25`` type for %%v%%.
     */
    static bytes25(v2) {
      return b3(v2, 25);
    }
    /**
     *  Return a new ``bytes26`` type for %%v%%.
     */
    static bytes26(v2) {
      return b3(v2, 26);
    }
    /**
     *  Return a new ``bytes27`` type for %%v%%.
     */
    static bytes27(v2) {
      return b3(v2, 27);
    }
    /**
     *  Return a new ``bytes28`` type for %%v%%.
     */
    static bytes28(v2) {
      return b3(v2, 28);
    }
    /**
     *  Return a new ``bytes29`` type for %%v%%.
     */
    static bytes29(v2) {
      return b3(v2, 29);
    }
    /**
     *  Return a new ``bytes30`` type for %%v%%.
     */
    static bytes30(v2) {
      return b3(v2, 30);
    }
    /**
     *  Return a new ``bytes31`` type for %%v%%.
     */
    static bytes31(v2) {
      return b3(v2, 31);
    }
    /**
     *  Return a new ``bytes32`` type for %%v%%.
     */
    static bytes32(v2) {
      return b3(v2, 32);
    }
    /**
     *  Return a new ``address`` type for %%v%%.
     */
    static address(v2) {
      return new _Typed(_gaurd, "address", v2);
    }
    /**
     *  Return a new ``bool`` type for %%v%%.
     */
    static bool(v2) {
      return new _Typed(_gaurd, "bool", !!v2);
    }
    /**
     *  Return a new ``bytes`` type for %%v%%.
     */
    static bytes(v2) {
      return new _Typed(_gaurd, "bytes", v2);
    }
    /**
     *  Return a new ``string`` type for %%v%%.
     */
    static string(v2) {
      return new _Typed(_gaurd, "string", v2);
    }
    /**
     *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
     */
    static array(v2, dynamic) {
      throw new Error("not implemented yet");
      return new _Typed(_gaurd, "array", v2, dynamic);
    }
    /**
     *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
     */
    static tuple(v2, name) {
      throw new Error("not implemented yet");
      return new _Typed(_gaurd, "tuple", v2, name);
    }
    /**
     *  Return a new ``uint8`` type for %%v%%.
     */
    static overrides(v2) {
      return new _Typed(_gaurd, "overrides", Object.assign({}, v2));
    }
    /**
     *  Returns true only if %%value%% is a [[Typed]] instance.
     */
    static isTyped(value) {
      return value && typeof value === "object" && "_typedSymbol" in value && value._typedSymbol === _typedSymbol;
    }
    /**
     *  If the value is a [[Typed]] instance, validates the underlying value
     *  and returns it, otherwise returns value directly.
     *
     *  This is useful for functions that with to accept either a [[Typed]]
     *  object or values.
     */
    static dereference(value, type) {
      if (_Typed.isTyped(value)) {
        if (value.type !== type) {
          throw new Error(`invalid type: expecetd ${type}, got ${value.type}`);
        }
        return value.value;
      }
      return value;
    }
  };
  _options3 = new WeakMap();
  var Typed = _Typed;

  // node_modules/ethers/lib.esm/abi/coders/address.js
  var AddressCoder = class extends Coder {
    constructor(localName) {
      super("address", "address", localName, false);
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000";
    }
    encode(writer, _value2) {
      let value = Typed.dereference(_value2, "string");
      try {
        value = getAddress(value);
      } catch (error) {
        return this._throwError(error.message, _value2);
      }
      return writer.writeValue(value);
    }
    decode(reader) {
      return getAddress(toBeHex(reader.readValue(), 20));
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/anonymous.js
  var AnonymousCoder = class extends Coder {
    constructor(coder) {
      super(coder.name, coder.type, "_", coder.dynamic);
      __publicField(this, "coder");
      this.coder = coder;
    }
    defaultValue() {
      return this.coder.defaultValue();
    }
    encode(writer, value) {
      return this.coder.encode(writer, value);
    }
    decode(reader) {
      return this.coder.decode(reader);
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/array.js
  function pack(writer, coders, values) {
    let arrayValues = [];
    if (Array.isArray(values)) {
      arrayValues = values;
    } else if (values && typeof values === "object") {
      let unique = {};
      arrayValues = coders.map((coder) => {
        const name = coder.localName;
        assert(name, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
        assert(!unique[name], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
        unique[name] = true;
        return values[name];
      });
    } else {
      assertArgument(false, "invalid tuple value", "tuple", values);
    }
    assertArgument(coders.length === arrayValues.length, "types/value length mismatch", "tuple", values);
    let staticWriter = new Writer();
    let dynamicWriter = new Writer();
    let updateFuncs = [];
    coders.forEach((coder, index) => {
      let value = arrayValues[index];
      if (coder.dynamic) {
        let dynamicOffset = dynamicWriter.length;
        coder.encode(dynamicWriter, value);
        let updateFunc = staticWriter.writeUpdatableValue();
        updateFuncs.push((baseOffset) => {
          updateFunc(baseOffset + dynamicOffset);
        });
      } else {
        coder.encode(staticWriter, value);
      }
    });
    updateFuncs.forEach((func) => {
      func(staticWriter.length);
    });
    let length = writer.appendWriter(staticWriter);
    length += writer.appendWriter(dynamicWriter);
    return length;
  }
  function unpack(reader, coders) {
    let values = [];
    let keys = [];
    let baseReader = reader.subReader(0);
    coders.forEach((coder) => {
      let value = null;
      if (coder.dynamic) {
        let offset = reader.readIndex();
        let offsetReader = baseReader.subReader(offset);
        try {
          value = coder.decode(offsetReader);
        } catch (error) {
          if (isError(error, "BUFFER_OVERRUN")) {
            throw error;
          }
          value = error;
          value.baseType = coder.name;
          value.name = coder.localName;
          value.type = coder.type;
        }
      } else {
        try {
          value = coder.decode(reader);
        } catch (error) {
          if (isError(error, "BUFFER_OVERRUN")) {
            throw error;
          }
          value = error;
          value.baseType = coder.name;
          value.name = coder.localName;
          value.type = coder.type;
        }
      }
      if (value == void 0) {
        throw new Error("investigate");
      }
      values.push(value);
      keys.push(coder.localName || null);
    });
    return Result.fromItems(values, keys);
  }
  var ArrayCoder = class extends Coder {
    constructor(coder, length, localName) {
      const type = coder.type + "[" + (length >= 0 ? length : "") + "]";
      const dynamic = length === -1 || coder.dynamic;
      super("array", type, localName, dynamic);
      __publicField(this, "coder");
      __publicField(this, "length");
      defineProperties(this, { coder, length });
    }
    defaultValue() {
      const defaultChild = this.coder.defaultValue();
      const result = [];
      for (let i5 = 0; i5 < this.length; i5++) {
        result.push(defaultChild);
      }
      return result;
    }
    encode(writer, _value2) {
      const value = Typed.dereference(_value2, "array");
      if (!Array.isArray(value)) {
        this._throwError("expected array value", value);
      }
      let count = this.length;
      if (count === -1) {
        count = value.length;
        writer.writeValue(value.length);
      }
      assertArgumentCount(value.length, count, "coder array" + (this.localName ? " " + this.localName : ""));
      let coders = [];
      for (let i5 = 0; i5 < value.length; i5++) {
        coders.push(this.coder);
      }
      return pack(writer, coders, value);
    }
    decode(reader) {
      let count = this.length;
      if (count === -1) {
        count = reader.readIndex();
        assert(count * WordSize <= reader.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: reader.bytes, offset: count * WordSize, length: reader.dataLength });
      }
      let coders = [];
      for (let i5 = 0; i5 < count; i5++) {
        coders.push(new AnonymousCoder(this.coder));
      }
      return unpack(reader, coders);
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/boolean.js
  var BooleanCoder = class extends Coder {
    constructor(localName) {
      super("bool", "bool", localName, false);
    }
    defaultValue() {
      return false;
    }
    encode(writer, _value2) {
      const value = Typed.dereference(_value2, "bool");
      return writer.writeValue(value ? 1 : 0);
    }
    decode(reader) {
      return !!reader.readValue();
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/bytes.js
  var DynamicBytesCoder = class extends Coder {
    constructor(type, localName) {
      super(type, type, localName, true);
    }
    defaultValue() {
      return "0x";
    }
    encode(writer, value) {
      value = getBytesCopy(value);
      let length = writer.writeValue(value.length);
      length += writer.writeBytes(value);
      return length;
    }
    decode(reader) {
      return reader.readBytes(reader.readIndex(), true);
    }
  };
  var BytesCoder = class extends DynamicBytesCoder {
    constructor(localName) {
      super("bytes", localName);
    }
    decode(reader) {
      return hexlify(super.decode(reader));
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/fixed-bytes.js
  var FixedBytesCoder = class extends Coder {
    constructor(size, localName) {
      let name = "bytes" + String(size);
      super(name, name, localName, false);
      __publicField(this, "size");
      defineProperties(this, { size }, { size: "number" });
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
    }
    encode(writer, _value2) {
      let data = getBytesCopy(Typed.dereference(_value2, this.type));
      if (data.length !== this.size) {
        this._throwError("incorrect data length", _value2);
      }
      return writer.writeBytes(data);
    }
    decode(reader) {
      return hexlify(reader.readBytes(this.size));
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/null.js
  var Empty = new Uint8Array([]);
  var NullCoder = class extends Coder {
    constructor(localName) {
      super("null", "", localName, false);
    }
    defaultValue() {
      return null;
    }
    encode(writer, value) {
      if (value != null) {
        this._throwError("not null", value);
      }
      return writer.writeBytes(Empty);
    }
    decode(reader) {
      reader.readBytes(0);
      return null;
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/number.js
  var BN_05 = BigInt(0);
  var BN_13 = BigInt(1);
  var BN_MAX_UINT256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  var NumberCoder = class extends Coder {
    constructor(size, signed2, localName) {
      const name = (signed2 ? "int" : "uint") + size * 8;
      super(name, name, localName, false);
      __publicField(this, "size");
      __publicField(this, "signed");
      defineProperties(this, { size, signed: signed2 }, { size: "number", signed: "boolean" });
    }
    defaultValue() {
      return 0;
    }
    encode(writer, _value2) {
      let value = getBigInt(Typed.dereference(_value2, this.type));
      let maxUintValue = mask(BN_MAX_UINT256, WordSize * 8);
      if (this.signed) {
        let bounds = mask(maxUintValue, this.size * 8 - 1);
        if (value > bounds || value < -(bounds + BN_13)) {
          this._throwError("value out-of-bounds", _value2);
        }
        value = toTwos(value, 8 * WordSize);
      } else if (value < BN_05 || value > mask(maxUintValue, this.size * 8)) {
        this._throwError("value out-of-bounds", _value2);
      }
      return writer.writeValue(value);
    }
    decode(reader) {
      let value = mask(reader.readValue(), this.size * 8);
      if (this.signed) {
        value = fromTwos(value, this.size * 8);
      }
      return value;
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/string.js
  var StringCoder = class extends DynamicBytesCoder {
    constructor(localName) {
      super("string", localName);
    }
    defaultValue() {
      return "";
    }
    encode(writer, _value2) {
      return super.encode(writer, toUtf8Bytes(Typed.dereference(_value2, "string")));
    }
    decode(reader) {
      return toUtf8String(super.decode(reader));
    }
  };

  // node_modules/ethers/lib.esm/abi/coders/tuple.js
  var TupleCoder = class extends Coder {
    constructor(coders, localName) {
      let dynamic = false;
      const types = [];
      coders.forEach((coder) => {
        if (coder.dynamic) {
          dynamic = true;
        }
        types.push(coder.type);
      });
      const type = "tuple(" + types.join(",") + ")";
      super("tuple", type, localName, dynamic);
      __publicField(this, "coders");
      defineProperties(this, { coders: Object.freeze(coders.slice()) });
    }
    defaultValue() {
      const values = [];
      this.coders.forEach((coder) => {
        values.push(coder.defaultValue());
      });
      const uniqueNames = this.coders.reduce((accum, coder) => {
        const name = coder.localName;
        if (name) {
          if (!accum[name]) {
            accum[name] = 0;
          }
          accum[name]++;
        }
        return accum;
      }, {});
      this.coders.forEach((coder, index) => {
        let name = coder.localName;
        if (!name || uniqueNames[name] !== 1) {
          return;
        }
        if (name === "length") {
          name = "_length";
        }
        if (values[name] != null) {
          return;
        }
        values[name] = values[index];
      });
      return Object.freeze(values);
    }
    encode(writer, _value2) {
      const value = Typed.dereference(_value2, "tuple");
      return pack(writer, this.coders, value);
    }
    decode(reader) {
      return unpack(reader, this.coders);
    }
  };

  // node_modules/ethers/lib.esm/hash/id.js
  function id(value) {
    return keccak256(toUtf8Bytes(value));
  }

  // node_modules/@adraffy/ens-normalize/dist/index.mjs
  var COMPRESSED$1 = "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";
  var FENCED = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]);
  var NSM_MAX = 4;
  function decode_arithmetic(bytes2) {
    let pos = 0;
    function u16() {
      return bytes2[pos++] << 8 | bytes2[pos++];
    }
    let symbol_count = u16();
    let total = 1;
    let acc = [0, 1];
    for (let i5 = 1; i5 < symbol_count; i5++) {
      acc.push(total += u16());
    }
    let skip = u16();
    let pos_payload = pos;
    pos += skip;
    let read_width = 0;
    let read_buffer = 0;
    function read_bit() {
      if (read_width == 0) {
        read_buffer = read_buffer << 8 | bytes2[pos++];
        read_width = 8;
      }
      return read_buffer >> --read_width & 1;
    }
    const N2 = 31;
    const FULL = 2 ** N2;
    const HALF = FULL >>> 1;
    const QRTR = HALF >> 1;
    const MASK = FULL - 1;
    let register = 0;
    for (let i5 = 0; i5 < N2; i5++) register = register << 1 | read_bit();
    let symbols = [];
    let low = 0;
    let range = FULL;
    while (true) {
      let value = Math.floor(((register - low + 1) * total - 1) / range);
      let start = 0;
      let end = symbol_count;
      while (end - start > 1) {
        let mid = start + end >>> 1;
        if (value < acc[mid]) {
          end = mid;
        } else {
          start = mid;
        }
      }
      if (start == 0) break;
      symbols.push(start);
      let a3 = low + Math.floor(range * acc[start] / total);
      let b4 = low + Math.floor(range * acc[start + 1] / total) - 1;
      while (((a3 ^ b4) & HALF) == 0) {
        register = register << 1 & MASK | read_bit();
        a3 = a3 << 1 & MASK;
        b4 = b4 << 1 & MASK | 1;
      }
      while (a3 & ~b4 & QRTR) {
        register = register & HALF | register << 1 & MASK >>> 1 | read_bit();
        a3 = a3 << 1 ^ HALF;
        b4 = (b4 ^ HALF) << 1 | HALF | 1;
      }
      low = a3;
      range = 1 + b4 - a3;
    }
    let offset = symbol_count - 4;
    return symbols.map((x2) => {
      switch (x2 - offset) {
        case 3:
          return offset + 65792 + (bytes2[pos_payload++] << 16 | bytes2[pos_payload++] << 8 | bytes2[pos_payload++]);
        case 2:
          return offset + 256 + (bytes2[pos_payload++] << 8 | bytes2[pos_payload++]);
        case 1:
          return offset + bytes2[pos_payload++];
        default:
          return x2 - 1;
      }
    });
  }
  function read_payload(v2) {
    let pos = 0;
    return () => v2[pos++];
  }
  function read_compressed_payload(s4) {
    return read_payload(decode_arithmetic(unsafe_atob(s4)));
  }
  function unsafe_atob(s4) {
    let lookup = [];
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((c4, i5) => lookup[c4.charCodeAt(0)] = i5);
    let n5 = s4.length;
    let ret = new Uint8Array(6 * n5 >> 3);
    for (let i5 = 0, pos = 0, width = 0, carry = 0; i5 < n5; i5++) {
      carry = carry << 6 | lookup[s4.charCodeAt(i5)];
      width += 6;
      if (width >= 8) {
        ret[pos++] = carry >> (width -= 8);
      }
    }
    return ret;
  }
  function signed(i5) {
    return i5 & 1 ? ~i5 >> 1 : i5 >> 1;
  }
  function read_deltas(n5, next) {
    let v2 = Array(n5);
    for (let i5 = 0, x2 = 0; i5 < n5; i5++) v2[i5] = x2 += signed(next());
    return v2;
  }
  function read_sorted(next, prev = 0) {
    let ret = [];
    while (true) {
      let x2 = next();
      let n5 = next();
      if (!n5) break;
      prev += x2;
      for (let i5 = 0; i5 < n5; i5++) {
        ret.push(prev + i5);
      }
      prev += n5 + 1;
    }
    return ret;
  }
  function read_sorted_arrays(next) {
    return read_array_while(() => {
      let v2 = read_sorted(next);
      if (v2.length) return v2;
    });
  }
  function read_mapped(next) {
    let ret = [];
    while (true) {
      let w2 = next();
      if (w2 == 0) break;
      ret.push(read_linear_table(w2, next));
    }
    while (true) {
      let w2 = next() - 1;
      if (w2 < 0) break;
      ret.push(read_replacement_table(w2, next));
    }
    return ret.flat();
  }
  function read_array_while(next) {
    let v2 = [];
    while (true) {
      let x2 = next(v2.length);
      if (!x2) break;
      v2.push(x2);
    }
    return v2;
  }
  function read_transposed(n5, w2, next) {
    let m2 = Array(n5).fill().map(() => []);
    for (let i5 = 0; i5 < w2; i5++) {
      read_deltas(n5, next).forEach((x2, j2) => m2[j2].push(x2));
    }
    return m2;
  }
  function read_linear_table(w2, next) {
    let dx = 1 + next();
    let dy = next();
    let vN = read_array_while(next);
    let m2 = read_transposed(vN.length, 1 + w2, next);
    return m2.flatMap((v2, i5) => {
      let [x2, ...ys] = v2;
      return Array(vN[i5]).fill().map((_2, j2) => {
        let j_dy = j2 * dy;
        return [x2 + j2 * dx, ys.map((y3) => y3 + j_dy)];
      });
    });
  }
  function read_replacement_table(w2, next) {
    let n5 = 1 + next();
    let m2 = read_transposed(n5, 1 + w2, next);
    return m2.map((v2) => [v2[0], v2.slice(1)]);
  }
  function read_trie(next) {
    let ret = [];
    let sorted = read_sorted(next);
    expand(decode([]), []);
    return ret;
    function decode(Q) {
      let S3 = next();
      let B2 = read_array_while(() => {
        let cps = read_sorted(next).map((i5) => sorted[i5]);
        if (cps.length) return decode(cps);
      });
      return { S: S3, B: B2, Q };
    }
    function expand({ S: S3, B: B2 }, cps, saved) {
      if (S3 & 4 && saved === cps[cps.length - 1]) return;
      if (S3 & 2) saved = cps[cps.length - 1];
      if (S3 & 1) ret.push(cps);
      for (let br of B2) {
        for (let cp of br.Q) {
          expand(br, [...cps, cp], saved);
        }
      }
    }
  }
  function hex_cp(cp) {
    return cp.toString(16).toUpperCase().padStart(2, "0");
  }
  function quote_cp(cp) {
    return `{${hex_cp(cp)}}`;
  }
  function explode_cp(s4) {
    let cps = [];
    for (let pos = 0, len = s4.length; pos < len; ) {
      let cp = s4.codePointAt(pos);
      pos += cp < 65536 ? 1 : 2;
      cps.push(cp);
    }
    return cps;
  }
  function str_from_cps(cps) {
    const chunk = 4096;
    let len = cps.length;
    if (len < chunk) return String.fromCodePoint(...cps);
    let buf = [];
    for (let i5 = 0; i5 < len; ) {
      buf.push(String.fromCodePoint(...cps.slice(i5, i5 += chunk)));
    }
    return buf.join("");
  }
  function compare_arrays(a3, b4) {
    let n5 = a3.length;
    let c4 = n5 - b4.length;
    for (let i5 = 0; c4 == 0 && i5 < n5; i5++) c4 = a3[i5] - b4[i5];
    return c4;
  }
  var COMPRESSED = "AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";
  var S0 = 44032;
  var L0 = 4352;
  var V0 = 4449;
  var T0 = 4519;
  var L_COUNT = 19;
  var V_COUNT = 21;
  var T_COUNT = 28;
  var N_COUNT = V_COUNT * T_COUNT;
  var S_COUNT = L_COUNT * N_COUNT;
  var S1 = S0 + S_COUNT;
  var L1 = L0 + L_COUNT;
  var V1 = V0 + V_COUNT;
  var T1 = T0 + T_COUNT;
  function unpack_cc(packed) {
    return packed >> 24 & 255;
  }
  function unpack_cp(packed) {
    return packed & 16777215;
  }
  var SHIFTED_RANK;
  var EXCLUSIONS;
  var DECOMP;
  var RECOMP;
  function init$1() {
    let r4 = read_compressed_payload(COMPRESSED);
    SHIFTED_RANK = new Map(read_sorted_arrays(r4).flatMap((v2, i5) => v2.map((x2) => [x2, i5 + 1 << 24])));
    EXCLUSIONS = new Set(read_sorted(r4));
    DECOMP = /* @__PURE__ */ new Map();
    RECOMP = /* @__PURE__ */ new Map();
    for (let [cp, cps] of read_mapped(r4)) {
      if (!EXCLUSIONS.has(cp) && cps.length == 2) {
        let [a3, b4] = cps;
        let bucket = RECOMP.get(a3);
        if (!bucket) {
          bucket = /* @__PURE__ */ new Map();
          RECOMP.set(a3, bucket);
        }
        bucket.set(b4, cp);
      }
      DECOMP.set(cp, cps.reverse());
    }
  }
  function is_hangul(cp) {
    return cp >= S0 && cp < S1;
  }
  function compose_pair(a3, b4) {
    if (a3 >= L0 && a3 < L1 && b4 >= V0 && b4 < V1) {
      return S0 + (a3 - L0) * N_COUNT + (b4 - V0) * T_COUNT;
    } else if (is_hangul(a3) && b4 > T0 && b4 < T1 && (a3 - S0) % T_COUNT == 0) {
      return a3 + (b4 - T0);
    } else {
      let recomp = RECOMP.get(a3);
      if (recomp) {
        recomp = recomp.get(b4);
        if (recomp) {
          return recomp;
        }
      }
      return -1;
    }
  }
  function decomposed(cps) {
    if (!SHIFTED_RANK) init$1();
    let ret = [];
    let buf = [];
    let check_order = false;
    function add2(cp) {
      let cc = SHIFTED_RANK.get(cp);
      if (cc) {
        check_order = true;
        cp |= cc;
      }
      ret.push(cp);
    }
    for (let cp of cps) {
      while (true) {
        if (cp < 128) {
          ret.push(cp);
        } else if (is_hangul(cp)) {
          let s_index = cp - S0;
          let l_index = s_index / N_COUNT | 0;
          let v_index = s_index % N_COUNT / T_COUNT | 0;
          let t_index = s_index % T_COUNT;
          add2(L0 + l_index);
          add2(V0 + v_index);
          if (t_index > 0) add2(T0 + t_index);
        } else {
          let mapped = DECOMP.get(cp);
          if (mapped) {
            buf.push(...mapped);
          } else {
            add2(cp);
          }
        }
        if (!buf.length) break;
        cp = buf.pop();
      }
    }
    if (check_order && ret.length > 1) {
      let prev_cc = unpack_cc(ret[0]);
      for (let i5 = 1; i5 < ret.length; i5++) {
        let cc = unpack_cc(ret[i5]);
        if (cc == 0 || prev_cc <= cc) {
          prev_cc = cc;
          continue;
        }
        let j2 = i5 - 1;
        while (true) {
          let tmp = ret[j2 + 1];
          ret[j2 + 1] = ret[j2];
          ret[j2] = tmp;
          if (!j2) break;
          prev_cc = unpack_cc(ret[--j2]);
          if (prev_cc <= cc) break;
        }
        prev_cc = unpack_cc(ret[i5]);
      }
    }
    return ret;
  }
  function composed_from_decomposed(v2) {
    let ret = [];
    let stack = [];
    let prev_cp = -1;
    let prev_cc = 0;
    for (let packed of v2) {
      let cc = unpack_cc(packed);
      let cp = unpack_cp(packed);
      if (prev_cp == -1) {
        if (cc == 0) {
          prev_cp = cp;
        } else {
          ret.push(cp);
        }
      } else if (prev_cc > 0 && prev_cc >= cc) {
        if (cc == 0) {
          ret.push(prev_cp, ...stack);
          stack.length = 0;
          prev_cp = cp;
        } else {
          stack.push(cp);
        }
        prev_cc = cc;
      } else {
        let composed = compose_pair(prev_cp, cp);
        if (composed >= 0) {
          prev_cp = composed;
        } else if (prev_cc == 0 && cc == 0) {
          ret.push(prev_cp);
          prev_cp = cp;
        } else {
          stack.push(cp);
          prev_cc = cc;
        }
      }
    }
    if (prev_cp >= 0) {
      ret.push(prev_cp, ...stack);
    }
    return ret;
  }
  function nfd(cps) {
    return decomposed(cps).map(unpack_cp);
  }
  function nfc(cps) {
    return composed_from_decomposed(decomposed(cps));
  }
  var HYPHEN = 45;
  var STOP_CH = ".";
  var FE0F = 65039;
  var UNIQUE_PH = 1;
  var Array_from = (x2) => Array.from(x2);
  function group_has_cp(g2, cp) {
    return g2.P.has(cp) || g2.Q.has(cp);
  }
  var Emoji = class extends Array {
    get is_emoji() {
      return true;
    }
    // free tagging system
  };
  var MAPPED;
  var IGNORED;
  var CM;
  var NSM;
  var ESCAPE;
  var NFC_CHECK;
  var GROUPS;
  var WHOLE_VALID;
  var WHOLE_MAP;
  var VALID;
  var EMOJI_LIST;
  var EMOJI_ROOT;
  function init() {
    if (MAPPED) return;
    let r4 = read_compressed_payload(COMPRESSED$1);
    const read_sorted_array = () => read_sorted(r4);
    const read_sorted_set = () => new Set(read_sorted_array());
    const set_add_many = (set, v2) => v2.forEach((x2) => set.add(x2));
    MAPPED = new Map(read_mapped(r4));
    IGNORED = read_sorted_set();
    CM = read_sorted_array();
    NSM = new Set(read_sorted_array().map((i5) => CM[i5]));
    CM = new Set(CM);
    ESCAPE = read_sorted_set();
    NFC_CHECK = read_sorted_set();
    let chunks = read_sorted_arrays(r4);
    let unrestricted = r4();
    const read_chunked = () => {
      let set = /* @__PURE__ */ new Set();
      read_sorted_array().forEach((i5) => set_add_many(set, chunks[i5]));
      set_add_many(set, read_sorted_array());
      return set;
    };
    GROUPS = read_array_while((i5) => {
      let N2 = read_array_while(r4).map((x2) => x2 + 96);
      if (N2.length) {
        let R2 = i5 >= unrestricted;
        N2[0] -= 32;
        N2 = str_from_cps(N2);
        if (R2) N2 = `Restricted[${N2}]`;
        let P2 = read_chunked();
        let Q = read_chunked();
        let M2 = !r4();
        return { N: N2, P: P2, Q, M: M2, R: R2 };
      }
    });
    WHOLE_VALID = read_sorted_set();
    WHOLE_MAP = /* @__PURE__ */ new Map();
    let wholes = read_sorted_array().concat(Array_from(WHOLE_VALID)).sort((a3, b4) => a3 - b4);
    wholes.forEach((cp, i5) => {
      let d3 = r4();
      let w2 = wholes[i5] = d3 ? wholes[i5 - d3] : { V: [], M: /* @__PURE__ */ new Map() };
      w2.V.push(cp);
      if (!WHOLE_VALID.has(cp)) {
        WHOLE_MAP.set(cp, w2);
      }
    });
    for (let { V: V2, M: M2 } of new Set(WHOLE_MAP.values())) {
      let recs = [];
      for (let cp of V2) {
        let gs = GROUPS.filter((g2) => group_has_cp(g2, cp));
        let rec = recs.find(({ G }) => gs.some((g2) => G.has(g2)));
        if (!rec) {
          rec = { G: /* @__PURE__ */ new Set(), V: [] };
          recs.push(rec);
        }
        rec.V.push(cp);
        set_add_many(rec.G, gs);
      }
      let union = recs.flatMap((x2) => Array_from(x2.G));
      for (let { G, V: V3 } of recs) {
        let complement = new Set(union.filter((g2) => !G.has(g2)));
        for (let cp of V3) {
          M2.set(cp, complement);
        }
      }
    }
    VALID = /* @__PURE__ */ new Set();
    let multi = /* @__PURE__ */ new Set();
    const add_to_union = (cp) => VALID.has(cp) ? multi.add(cp) : VALID.add(cp);
    for (let g2 of GROUPS) {
      for (let cp of g2.P) add_to_union(cp);
      for (let cp of g2.Q) add_to_union(cp);
    }
    for (let cp of VALID) {
      if (!WHOLE_MAP.has(cp) && !multi.has(cp)) {
        WHOLE_MAP.set(cp, UNIQUE_PH);
      }
    }
    set_add_many(VALID, nfd(VALID));
    EMOJI_LIST = read_trie(r4).map((v2) => Emoji.from(v2)).sort(compare_arrays);
    EMOJI_ROOT = /* @__PURE__ */ new Map();
    for (let cps of EMOJI_LIST) {
      let prev = [EMOJI_ROOT];
      for (let cp of cps) {
        let next = prev.map((node) => {
          let child = node.get(cp);
          if (!child) {
            child = /* @__PURE__ */ new Map();
            node.set(cp, child);
          }
          return child;
        });
        if (cp === FE0F) {
          prev.push(...next);
        } else {
          prev = next;
        }
      }
      for (let x2 of prev) {
        x2.V = cps;
      }
    }
  }
  function quoted_cp(cp) {
    return (should_escape(cp) ? "" : `${bidi_qq(safe_str_from_cps([cp]))} `) + quote_cp(cp);
  }
  function bidi_qq(s4) {
    return `"${s4}"\u200E`;
  }
  function check_label_extension(cps) {
    if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) {
      throw new Error(`invalid label extension: "${str_from_cps(cps.slice(0, 4))}"`);
    }
  }
  function check_leading_underscore(cps) {
    const UNDERSCORE = 95;
    for (let i5 = cps.lastIndexOf(UNDERSCORE); i5 > 0; ) {
      if (cps[--i5] !== UNDERSCORE) {
        throw new Error("underscore allowed only at start");
      }
    }
  }
  function check_fenced(cps) {
    let cp = cps[0];
    let prev = FENCED.get(cp);
    if (prev) throw error_placement(`leading ${prev}`);
    let n5 = cps.length;
    let last = -1;
    for (let i5 = 1; i5 < n5; i5++) {
      cp = cps[i5];
      let match = FENCED.get(cp);
      if (match) {
        if (last == i5) throw error_placement(`${prev} + ${match}`);
        last = i5 + 1;
        prev = match;
      }
    }
    if (last == n5) throw error_placement(`trailing ${prev}`);
  }
  function safe_str_from_cps(cps, max = Infinity, quoter = quote_cp) {
    let buf = [];
    if (is_combining_mark(cps[0])) buf.push("\u25CC");
    if (cps.length > max) {
      max >>= 1;
      cps = [...cps.slice(0, max), 8230, ...cps.slice(-max)];
    }
    let prev = 0;
    let n5 = cps.length;
    for (let i5 = 0; i5 < n5; i5++) {
      let cp = cps[i5];
      if (should_escape(cp)) {
        buf.push(str_from_cps(cps.slice(prev, i5)));
        buf.push(quoter(cp));
        prev = i5 + 1;
      }
    }
    buf.push(str_from_cps(cps.slice(prev, n5)));
    return buf.join("");
  }
  function is_combining_mark(cp) {
    init();
    return CM.has(cp);
  }
  function should_escape(cp) {
    init();
    return ESCAPE.has(cp);
  }
  function ens_normalize(name) {
    return flatten(split2(name, nfc, filter_fe0f));
  }
  function split2(name, nf, ef) {
    if (!name) return [];
    init();
    let offset = 0;
    return name.split(STOP_CH).map((label) => {
      let input = explode_cp(label);
      let info = {
        input,
        offset
        // codepoint, not substring!
      };
      offset += input.length + 1;
      try {
        let tokens = info.tokens = tokens_from_str(input, nf, ef);
        let token_count = tokens.length;
        let type;
        if (!token_count) {
          throw new Error(`empty label`);
        }
        let norm = info.output = tokens.flat();
        check_leading_underscore(norm);
        let emoji = info.emoji = token_count > 1 || tokens[0].is_emoji;
        if (!emoji && norm.every((cp) => cp < 128)) {
          check_label_extension(norm);
          type = "ASCII";
        } else {
          let chars = tokens.flatMap((x2) => x2.is_emoji ? [] : x2);
          if (!chars.length) {
            type = "Emoji";
          } else {
            if (CM.has(norm[0])) throw error_placement("leading combining mark");
            for (let i5 = 1; i5 < token_count; i5++) {
              let cps = tokens[i5];
              if (!cps.is_emoji && CM.has(cps[0])) {
                throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i5 - 1])} + ${safe_str_from_cps([cps[0]])}"`);
              }
            }
            check_fenced(norm);
            let unique = Array_from(new Set(chars));
            let [g2] = determine_group(unique);
            check_group(g2, chars);
            check_whole(g2, unique);
            type = g2.N;
          }
        }
        info.type = type;
      } catch (err) {
        info.error = err;
      }
      return info;
    });
  }
  function check_whole(group, unique) {
    let maker;
    let shared = [];
    for (let cp of unique) {
      let whole = WHOLE_MAP.get(cp);
      if (whole === UNIQUE_PH) return;
      if (whole) {
        let set = whole.M.get(cp);
        maker = maker ? maker.filter((g2) => set.has(g2)) : Array_from(set);
        if (!maker.length) return;
      } else {
        shared.push(cp);
      }
    }
    if (maker) {
      for (let g2 of maker) {
        if (shared.every((cp) => group_has_cp(g2, cp))) {
          throw new Error(`whole-script confusable: ${group.N}/${g2.N}`);
        }
      }
    }
  }
  function determine_group(unique) {
    let groups = GROUPS;
    for (let cp of unique) {
      let gs = groups.filter((g2) => group_has_cp(g2, cp));
      if (!gs.length) {
        if (!GROUPS.some((g2) => group_has_cp(g2, cp))) {
          throw error_disallowed(cp);
        } else {
          throw error_group_member(groups[0], cp);
        }
      }
      groups = gs;
      if (gs.length == 1) break;
    }
    return groups;
  }
  function flatten(split3) {
    return split3.map(({ input, error, output: output2 }) => {
      if (error) {
        let msg = error.message;
        throw new Error(split3.length == 1 ? msg : `Invalid label ${bidi_qq(safe_str_from_cps(input, 63))}: ${msg}`);
      }
      return str_from_cps(output2);
    }).join(STOP_CH);
  }
  function error_disallowed(cp) {
    return new Error(`disallowed character: ${quoted_cp(cp)}`);
  }
  function error_group_member(g2, cp) {
    let quoted = quoted_cp(cp);
    let gg = GROUPS.find((g3) => g3.P.has(cp));
    if (gg) {
      quoted = `${gg.N} ${quoted}`;
    }
    return new Error(`illegal mixture: ${g2.N} + ${quoted}`);
  }
  function error_placement(where) {
    return new Error(`illegal placement: ${where}`);
  }
  function check_group(g2, cps) {
    for (let cp of cps) {
      if (!group_has_cp(g2, cp)) {
        throw error_group_member(g2, cp);
      }
    }
    if (g2.M) {
      let decomposed2 = nfd(cps);
      for (let i5 = 1, e4 = decomposed2.length; i5 < e4; i5++) {
        if (NSM.has(decomposed2[i5])) {
          let j2 = i5 + 1;
          for (let cp; j2 < e4 && NSM.has(cp = decomposed2[j2]); j2++) {
            for (let k2 = i5; k2 < j2; k2++) {
              if (decomposed2[k2] == cp) {
                throw new Error(`duplicate non-spacing marks: ${quoted_cp(cp)}`);
              }
            }
          }
          if (j2 - i5 > NSM_MAX) {
            throw new Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(decomposed2.slice(i5 - 1, j2)))} (${j2 - i5}/${NSM_MAX})`);
          }
          i5 = j2;
        }
      }
    }
  }
  function tokens_from_str(input, nf, ef) {
    let ret = [];
    let chars = [];
    input = input.slice().reverse();
    while (input.length) {
      let emoji = consume_emoji_reversed(input);
      if (emoji) {
        if (chars.length) {
          ret.push(nf(chars));
          chars = [];
        }
        ret.push(ef(emoji));
      } else {
        let cp = input.pop();
        if (VALID.has(cp)) {
          chars.push(cp);
        } else {
          let cps = MAPPED.get(cp);
          if (cps) {
            chars.push(...cps);
          } else if (!IGNORED.has(cp)) {
            throw error_disallowed(cp);
          }
        }
      }
    }
    if (chars.length) {
      ret.push(nf(chars));
    }
    return ret;
  }
  function filter_fe0f(cps) {
    return cps.filter((cp) => cp != FE0F);
  }
  function consume_emoji_reversed(cps, eaten) {
    let node = EMOJI_ROOT;
    let emoji;
    let pos = cps.length;
    while (pos) {
      node = node.get(cps[--pos]);
      if (!node) break;
      let { V: V2 } = node;
      if (V2) {
        emoji = V2;
        if (eaten) eaten.push(...cps.slice(pos).reverse());
        cps.length = pos;
      }
    }
    return emoji;
  }

  // node_modules/ethers/lib.esm/hash/namehash.js
  var Zeros = new Uint8Array(32);
  Zeros.fill(0);
  function checkComponent(comp) {
    assertArgument(comp.length !== 0, "invalid ENS name; empty component", "comp", comp);
    return comp;
  }
  function ensNameSplit(name) {
    const bytes2 = toUtf8Bytes(ensNormalize(name));
    const comps = [];
    if (name.length === 0) {
      return comps;
    }
    let last = 0;
    for (let i5 = 0; i5 < bytes2.length; i5++) {
      const d3 = bytes2[i5];
      if (d3 === 46) {
        comps.push(checkComponent(bytes2.slice(last, i5)));
        last = i5 + 1;
      }
    }
    assertArgument(last < bytes2.length, "invalid ENS name; empty component", "name", name);
    comps.push(checkComponent(bytes2.slice(last)));
    return comps;
  }
  function ensNormalize(name) {
    try {
      if (name.length === 0) {
        throw new Error("empty label");
      }
      return ens_normalize(name);
    } catch (error) {
      assertArgument(false, `invalid ENS name (${error.message})`, "name", name);
    }
  }
  function namehash(name) {
    assertArgument(typeof name === "string", "invalid ENS name; not a string", "name", name);
    assertArgument(name.length, `invalid ENS name (empty label)`, "name", name);
    let result = Zeros;
    const comps = ensNameSplit(name);
    while (comps.length) {
      result = keccak256(concat([result, keccak256(comps.pop())]));
    }
    return hexlify(result);
  }
  function dnsEncode(name, _maxLength) {
    const length = _maxLength != null ? _maxLength : 63;
    assertArgument(length <= 255, "DNS encoded label cannot exceed 255", "length", length);
    return hexlify(concat(ensNameSplit(name).map((comp) => {
      assertArgument(comp.length <= length, `label ${JSON.stringify(name)} exceeds ${length} bytes`, "name", name);
      const bytes2 = new Uint8Array(comp.length + 1);
      bytes2.set(comp, 1);
      bytes2[0] = bytes2.length - 1;
      return bytes2;
    }))) + "00";
  }

  // node_modules/ethers/lib.esm/transaction/accesslist.js
  function accessSetify(addr, storageKeys) {
    return {
      address: getAddress(addr),
      storageKeys: storageKeys.map((storageKey, index) => {
        assertArgument(isHexString(storageKey, 32), "invalid slot", `storageKeys[${index}]`, storageKey);
        return storageKey.toLowerCase();
      })
    };
  }
  function accessListify(value) {
    if (Array.isArray(value)) {
      return value.map((set, index) => {
        if (Array.isArray(set)) {
          assertArgument(set.length === 2, "invalid slot set", `value[${index}]`, set);
          return accessSetify(set[0], set[1]);
        }
        assertArgument(set != null && typeof set === "object", "invalid address-slot set", "value", value);
        return accessSetify(set.address, set.storageKeys);
      });
    }
    assertArgument(value != null && typeof value === "object", "invalid access list", "value", value);
    const result = Object.keys(value).map((addr) => {
      const storageKeys = value[addr].reduce((accum, storageKey) => {
        accum[storageKey] = true;
        return accum;
      }, {});
      return accessSetify(addr, Object.keys(storageKeys).sort());
    });
    result.sort((a3, b4) => a3.address.localeCompare(b4.address));
    return result;
  }

  // node_modules/ethers/lib.esm/transaction/address.js
  function computeAddress(key) {
    let pubkey;
    if (typeof key === "string") {
      pubkey = SigningKey.computePublicKey(key, false);
    } else {
      pubkey = key.publicKey;
    }
    return getAddress(keccak256("0x" + pubkey.substring(4)).substring(26));
  }
  function recoverAddress(digest, signature) {
    return computeAddress(SigningKey.recoverPublicKey(digest, signature));
  }

  // node_modules/ethers/lib.esm/transaction/transaction.js
  var BN_06 = BigInt(0);
  var BN_22 = BigInt(2);
  var BN_272 = BigInt(27);
  var BN_282 = BigInt(28);
  var BN_352 = BigInt(35);
  var BN_MAX_UINT = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  var BLOB_SIZE = 4096 * 32;
  function getVersionedHash(version2, hash2) {
    let versioned = version2.toString(16);
    while (versioned.length < 2) {
      versioned = "0" + versioned;
    }
    versioned += sha2562(hash2).substring(4);
    return "0x" + versioned;
  }
  function handleAddress(value) {
    if (value === "0x") {
      return null;
    }
    return getAddress(value);
  }
  function handleAccessList(value, param) {
    try {
      return accessListify(value);
    } catch (error) {
      assertArgument(false, error.message, param, value);
    }
  }
  function handleNumber(_value2, param) {
    if (_value2 === "0x") {
      return 0;
    }
    return getNumber(_value2, param);
  }
  function handleUint(_value2, param) {
    if (_value2 === "0x") {
      return BN_06;
    }
    const value = getBigInt(_value2, param);
    assertArgument(value <= BN_MAX_UINT, "value exceeds uint size", param, value);
    return value;
  }
  function formatNumber(_value2, name) {
    const value = getBigInt(_value2, "value");
    const result = toBeArray(value);
    assertArgument(result.length <= 32, `value too large`, `tx.${name}`, value);
    return result;
  }
  function formatAccessList(value) {
    return accessListify(value).map((set) => [set.address, set.storageKeys]);
  }
  function formatHashes(value, param) {
    assertArgument(Array.isArray(value), `invalid ${param}`, "value", value);
    for (let i5 = 0; i5 < value.length; i5++) {
      assertArgument(isHexString(value[i5], 32), "invalid ${ param } hash", `value[${i5}]`, value[i5]);
    }
    return value;
  }
  function _parseLegacy(data) {
    const fields = decodeRlp(data);
    assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 6), "invalid field count for legacy transaction", "data", data);
    const tx = {
      type: 0,
      nonce: handleNumber(fields[0], "nonce"),
      gasPrice: handleUint(fields[1], "gasPrice"),
      gasLimit: handleUint(fields[2], "gasLimit"),
      to: handleAddress(fields[3]),
      value: handleUint(fields[4], "value"),
      data: hexlify(fields[5]),
      chainId: BN_06
    };
    if (fields.length === 6) {
      return tx;
    }
    const v2 = handleUint(fields[6], "v");
    const r4 = handleUint(fields[7], "r");
    const s4 = handleUint(fields[8], "s");
    if (r4 === BN_06 && s4 === BN_06) {
      tx.chainId = v2;
    } else {
      let chainId = (v2 - BN_352) / BN_22;
      if (chainId < BN_06) {
        chainId = BN_06;
      }
      tx.chainId = chainId;
      assertArgument(chainId !== BN_06 || (v2 === BN_272 || v2 === BN_282), "non-canonical legacy v", "v", fields[6]);
      tx.signature = Signature.from({
        r: zeroPadValue(fields[7], 32),
        s: zeroPadValue(fields[8], 32),
        v: v2
      });
    }
    return tx;
  }
  function _serializeLegacy(tx, sig) {
    const fields = [
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.gasPrice || 0, "gasPrice"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data
    ];
    let chainId = BN_06;
    if (tx.chainId != BN_06) {
      chainId = getBigInt(tx.chainId, "tx.chainId");
      assertArgument(!sig || sig.networkV == null || sig.legacyChainId === chainId, "tx.chainId/sig.v mismatch", "sig", sig);
    } else if (tx.signature) {
      const legacy = tx.signature.legacyChainId;
      if (legacy != null) {
        chainId = legacy;
      }
    }
    if (!sig) {
      if (chainId !== BN_06) {
        fields.push(toBeArray(chainId));
        fields.push("0x");
        fields.push("0x");
      }
      return encodeRlp(fields);
    }
    let v2 = BigInt(27 + sig.yParity);
    if (chainId !== BN_06) {
      v2 = Signature.getChainIdV(chainId, sig.v);
    } else if (BigInt(sig.v) !== v2) {
      assertArgument(false, "tx.chainId/sig.v mismatch", "sig", sig);
    }
    fields.push(toBeArray(v2));
    fields.push(toBeArray(sig.r));
    fields.push(toBeArray(sig.s));
    return encodeRlp(fields);
  }
  function _parseEipSignature(tx, fields) {
    let yParity;
    try {
      yParity = handleNumber(fields[0], "yParity");
      if (yParity !== 0 && yParity !== 1) {
        throw new Error("bad yParity");
      }
    } catch (error) {
      assertArgument(false, "invalid yParity", "yParity", fields[0]);
    }
    const r4 = zeroPadValue(fields[1], 32);
    const s4 = zeroPadValue(fields[2], 32);
    const signature = Signature.from({ r: r4, s: s4, yParity });
    tx.signature = signature;
  }
  function _parseEip1559(data) {
    const fields = decodeRlp(getBytes(data).slice(1));
    assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 12), "invalid field count for transaction type: 2", "data", hexlify(data));
    const tx = {
      type: 2,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
      maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: handleUint(fields[4], "gasLimit"),
      to: handleAddress(fields[5]),
      value: handleUint(fields[6], "value"),
      data: hexlify(fields[7]),
      accessList: handleAccessList(fields[8], "accessList")
    };
    if (fields.length === 9) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(9));
    return tx;
  }
  function _serializeEip1559(tx, sig) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || [])
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "yParity"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
    }
    return concat(["0x02", encodeRlp(fields)]);
  }
  function _parseEip2930(data) {
    const fields = decodeRlp(getBytes(data).slice(1));
    assertArgument(Array.isArray(fields) && (fields.length === 8 || fields.length === 11), "invalid field count for transaction type: 1", "data", hexlify(data));
    const tx = {
      type: 1,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      gasPrice: handleUint(fields[2], "gasPrice"),
      gasLimit: handleUint(fields[3], "gasLimit"),
      to: handleAddress(fields[4]),
      value: handleUint(fields[5], "value"),
      data: hexlify(fields[6]),
      accessList: handleAccessList(fields[7], "accessList")
    };
    if (fields.length === 8) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(8));
    return tx;
  }
  function _serializeEip2930(tx, sig) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.gasPrice || 0, "gasPrice"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || [])
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "recoveryParam"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
    }
    return concat(["0x01", encodeRlp(fields)]);
  }
  function _parseEip4844(data) {
    let fields = decodeRlp(getBytes(data).slice(1));
    let typeName = "3";
    let blobs = null;
    if (fields.length === 4 && Array.isArray(fields[0])) {
      typeName = "3 (network format)";
      const fBlobs = fields[1], fCommits = fields[2], fProofs = fields[3];
      assertArgument(Array.isArray(fBlobs), "invalid network format: blobs not an array", "fields[1]", fBlobs);
      assertArgument(Array.isArray(fCommits), "invalid network format: commitments not an array", "fields[2]", fCommits);
      assertArgument(Array.isArray(fProofs), "invalid network format: proofs not an array", "fields[3]", fProofs);
      assertArgument(fBlobs.length === fCommits.length, "invalid network format: blobs/commitments length mismatch", "fields", fields);
      assertArgument(fBlobs.length === fProofs.length, "invalid network format: blobs/proofs length mismatch", "fields", fields);
      blobs = [];
      for (let i5 = 0; i5 < fields[1].length; i5++) {
        blobs.push({
          data: fBlobs[i5],
          commitment: fCommits[i5],
          proof: fProofs[i5]
        });
      }
      fields = fields[0];
    }
    assertArgument(Array.isArray(fields) && (fields.length === 11 || fields.length === 14), `invalid field count for transaction type: ${typeName}`, "data", hexlify(data));
    const tx = {
      type: 3,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
      maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: handleUint(fields[4], "gasLimit"),
      to: handleAddress(fields[5]),
      value: handleUint(fields[6], "value"),
      data: hexlify(fields[7]),
      accessList: handleAccessList(fields[8], "accessList"),
      maxFeePerBlobGas: handleUint(fields[9], "maxFeePerBlobGas"),
      blobVersionedHashes: fields[10]
    };
    if (blobs) {
      tx.blobs = blobs;
    }
    assertArgument(tx.to != null, `invalid address for transaction type: ${typeName}`, "data", data);
    assertArgument(Array.isArray(tx.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", data);
    for (let i5 = 0; i5 < tx.blobVersionedHashes.length; i5++) {
      assertArgument(isHexString(tx.blobVersionedHashes[i5], 32), `invalid blobVersionedHash at index ${i5}: must be length 32`, "data", data);
    }
    if (fields.length === 11) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(11));
    return tx;
  }
  function _serializeEip4844(tx, sig, blobs) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || ZeroAddress,
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || []),
      formatNumber(tx.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
      formatHashes(tx.blobVersionedHashes || [], "blobVersionedHashes")
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "yParity"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
      if (blobs) {
        return concat([
          "0x03",
          encodeRlp([
            fields,
            blobs.map((b4) => b4.data),
            blobs.map((b4) => b4.commitment),
            blobs.map((b4) => b4.proof)
          ])
        ]);
      }
    }
    return concat(["0x03", encodeRlp(fields)]);
  }
  var _type, _to, _data3, _nonce, _gasLimit, _gasPrice, _maxPriorityFeePerGas, _maxFeePerGas, _value, _chainId2, _sig, _accessList, _maxFeePerBlobGas, _blobVersionedHashes, _kzg, _blobs, _Transaction_instances, getSerialized_fn;
  var _Transaction = class _Transaction {
    /**
     *  Creates a new Transaction with default values.
     */
    constructor() {
      __privateAdd(this, _Transaction_instances);
      __privateAdd(this, _type);
      __privateAdd(this, _to);
      __privateAdd(this, _data3);
      __privateAdd(this, _nonce);
      __privateAdd(this, _gasLimit);
      __privateAdd(this, _gasPrice);
      __privateAdd(this, _maxPriorityFeePerGas);
      __privateAdd(this, _maxFeePerGas);
      __privateAdd(this, _value);
      __privateAdd(this, _chainId2);
      __privateAdd(this, _sig);
      __privateAdd(this, _accessList);
      __privateAdd(this, _maxFeePerBlobGas);
      __privateAdd(this, _blobVersionedHashes);
      __privateAdd(this, _kzg);
      __privateAdd(this, _blobs);
      __privateSet(this, _type, null);
      __privateSet(this, _to, null);
      __privateSet(this, _nonce, 0);
      __privateSet(this, _gasLimit, BN_06);
      __privateSet(this, _gasPrice, null);
      __privateSet(this, _maxPriorityFeePerGas, null);
      __privateSet(this, _maxFeePerGas, null);
      __privateSet(this, _data3, "0x");
      __privateSet(this, _value, BN_06);
      __privateSet(this, _chainId2, BN_06);
      __privateSet(this, _sig, null);
      __privateSet(this, _accessList, null);
      __privateSet(this, _maxFeePerBlobGas, null);
      __privateSet(this, _blobVersionedHashes, null);
      __privateSet(this, _blobs, null);
      __privateSet(this, _kzg, null);
    }
    /**
     *  The transaction type.
     *
     *  If null, the type will be automatically inferred based on
     *  explicit properties.
     */
    get type() {
      return __privateGet(this, _type);
    }
    set type(value) {
      switch (value) {
        case null:
          __privateSet(this, _type, null);
          break;
        case 0:
        case "legacy":
          __privateSet(this, _type, 0);
          break;
        case 1:
        case "berlin":
        case "eip-2930":
          __privateSet(this, _type, 1);
          break;
        case 2:
        case "london":
        case "eip-1559":
          __privateSet(this, _type, 2);
          break;
        case 3:
        case "cancun":
        case "eip-4844":
          __privateSet(this, _type, 3);
          break;
        default:
          assertArgument(false, "unsupported transaction type", "type", value);
      }
    }
    /**
     *  The name of the transaction type.
     */
    get typeName() {
      switch (this.type) {
        case 0:
          return "legacy";
        case 1:
          return "eip-2930";
        case 2:
          return "eip-1559";
        case 3:
          return "eip-4844";
      }
      return null;
    }
    /**
     *  The ``to`` address for the transaction or ``null`` if the
     *  transaction is an ``init`` transaction.
     */
    get to() {
      const value = __privateGet(this, _to);
      if (value == null && this.type === 3) {
        return ZeroAddress;
      }
      return value;
    }
    set to(value) {
      __privateSet(this, _to, value == null ? null : getAddress(value));
    }
    /**
     *  The transaction nonce.
     */
    get nonce() {
      return __privateGet(this, _nonce);
    }
    set nonce(value) {
      __privateSet(this, _nonce, getNumber(value, "value"));
    }
    /**
     *  The gas limit.
     */
    get gasLimit() {
      return __privateGet(this, _gasLimit);
    }
    set gasLimit(value) {
      __privateSet(this, _gasLimit, getBigInt(value));
    }
    /**
     *  The gas price.
     *
     *  On legacy networks this defines the fee that will be paid. On
     *  EIP-1559 networks, this should be ``null``.
     */
    get gasPrice() {
      const value = __privateGet(this, _gasPrice);
      if (value == null && (this.type === 0 || this.type === 1)) {
        return BN_06;
      }
      return value;
    }
    set gasPrice(value) {
      __privateSet(this, _gasPrice, value == null ? null : getBigInt(value, "gasPrice"));
    }
    /**
     *  The maximum priority fee per unit of gas to pay. On legacy
     *  networks this should be ``null``.
     */
    get maxPriorityFeePerGas() {
      const value = __privateGet(this, _maxPriorityFeePerGas);
      if (value == null) {
        if (this.type === 2 || this.type === 3) {
          return BN_06;
        }
        return null;
      }
      return value;
    }
    set maxPriorityFeePerGas(value) {
      __privateSet(this, _maxPriorityFeePerGas, value == null ? null : getBigInt(value, "maxPriorityFeePerGas"));
    }
    /**
     *  The maximum total fee per unit of gas to pay. On legacy
     *  networks this should be ``null``.
     */
    get maxFeePerGas() {
      const value = __privateGet(this, _maxFeePerGas);
      if (value == null) {
        if (this.type === 2 || this.type === 3) {
          return BN_06;
        }
        return null;
      }
      return value;
    }
    set maxFeePerGas(value) {
      __privateSet(this, _maxFeePerGas, value == null ? null : getBigInt(value, "maxFeePerGas"));
    }
    /**
     *  The transaction data. For ``init`` transactions this is the
     *  deployment code.
     */
    get data() {
      return __privateGet(this, _data3);
    }
    set data(value) {
      __privateSet(this, _data3, hexlify(value));
    }
    /**
     *  The amount of ether (in wei) to send in this transactions.
     */
    get value() {
      return __privateGet(this, _value);
    }
    set value(value) {
      __privateSet(this, _value, getBigInt(value, "value"));
    }
    /**
     *  The chain ID this transaction is valid on.
     */
    get chainId() {
      return __privateGet(this, _chainId2);
    }
    set chainId(value) {
      __privateSet(this, _chainId2, getBigInt(value));
    }
    /**
     *  If signed, the signature for this transaction.
     */
    get signature() {
      return __privateGet(this, _sig) || null;
    }
    set signature(value) {
      __privateSet(this, _sig, value == null ? null : Signature.from(value));
    }
    /**
     *  The access list.
     *
     *  An access list permits discounted (but pre-paid) access to
     *  bytecode and state variable access within contract execution.
     */
    get accessList() {
      const value = __privateGet(this, _accessList) || null;
      if (value == null) {
        if (this.type === 1 || this.type === 2 || this.type === 3) {
          return [];
        }
        return null;
      }
      return value;
    }
    set accessList(value) {
      __privateSet(this, _accessList, value == null ? null : accessListify(value));
    }
    /**
     *  The max fee per blob gas for Cancun transactions.
     */
    get maxFeePerBlobGas() {
      const value = __privateGet(this, _maxFeePerBlobGas);
      if (value == null && this.type === 3) {
        return BN_06;
      }
      return value;
    }
    set maxFeePerBlobGas(value) {
      __privateSet(this, _maxFeePerBlobGas, value == null ? null : getBigInt(value, "maxFeePerBlobGas"));
    }
    /**
     *  The BLOb versioned hashes for Cancun transactions.
     */
    get blobVersionedHashes() {
      let value = __privateGet(this, _blobVersionedHashes);
      if (value == null && this.type === 3) {
        return [];
      }
      return value;
    }
    set blobVersionedHashes(value) {
      if (value != null) {
        assertArgument(Array.isArray(value), "blobVersionedHashes must be an Array", "value", value);
        value = value.slice();
        for (let i5 = 0; i5 < value.length; i5++) {
          assertArgument(isHexString(value[i5], 32), "invalid blobVersionedHash", `value[${i5}]`, value[i5]);
        }
      }
      __privateSet(this, _blobVersionedHashes, value);
    }
    /**
     *  The BLObs for the Transaction, if any.
     *
     *  If ``blobs`` is non-``null``, then the [[seriailized]]
     *  will return the network formatted sidecar, otherwise it
     *  will return the standard [[link-eip-2718]] payload. The
     *  [[unsignedSerialized]] is unaffected regardless.
     *
     *  When setting ``blobs``, either fully valid [[Blob]] objects
     *  may be specified (i.e. correctly padded, with correct
     *  committments and proofs) or a raw [[BytesLike]] may
     *  be provided.
     *
     *  If raw [[BytesLike]] are provided, the [[kzg]] property **must**
     *  be already set. The blob will be correctly padded and the
     *  [[KzgLibrary]] will be used to compute the committment and
     *  proof for the blob.
     *
     *  A BLOb is a sequence of field elements, each of which must
     *  be within the BLS field modulo, so some additional processing
     *  may be required to encode arbitrary data to ensure each 32 byte
     *  field is within the valid range.
     *
     *  Setting this automatically populates [[blobVersionedHashes]],
     *  overwriting any existing values. Setting this to ``null``
     *  does **not** remove the [[blobVersionedHashes]], leaving them
     *  present.
     */
    get blobs() {
      if (__privateGet(this, _blobs) == null) {
        return null;
      }
      return __privateGet(this, _blobs).map((b4) => Object.assign({}, b4));
    }
    set blobs(_blobs2) {
      if (_blobs2 == null) {
        __privateSet(this, _blobs, null);
        return;
      }
      const blobs = [];
      const versionedHashes = [];
      for (let i5 = 0; i5 < _blobs2.length; i5++) {
        const blob = _blobs2[i5];
        if (isBytesLike(blob)) {
          assert(__privateGet(this, _kzg), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
            operation: "set blobs()"
          });
          let data = getBytes(blob);
          assertArgument(data.length <= BLOB_SIZE, "blob is too large", `blobs[${i5}]`, blob);
          if (data.length !== BLOB_SIZE) {
            const padded = new Uint8Array(BLOB_SIZE);
            padded.set(data);
            data = padded;
          }
          const commit = __privateGet(this, _kzg).blobToKzgCommitment(data);
          const proof = hexlify(__privateGet(this, _kzg).computeBlobKzgProof(data, commit));
          blobs.push({
            data: hexlify(data),
            commitment: hexlify(commit),
            proof
          });
          versionedHashes.push(getVersionedHash(1, commit));
        } else {
          const commit = hexlify(blob.commitment);
          blobs.push({
            data: hexlify(blob.data),
            commitment: commit,
            proof: hexlify(blob.proof)
          });
          versionedHashes.push(getVersionedHash(1, commit));
        }
      }
      __privateSet(this, _blobs, blobs);
      __privateSet(this, _blobVersionedHashes, versionedHashes);
    }
    get kzg() {
      return __privateGet(this, _kzg);
    }
    set kzg(kzg) {
      __privateSet(this, _kzg, kzg);
    }
    /**
     *  The transaction hash, if signed. Otherwise, ``null``.
     */
    get hash() {
      if (this.signature == null) {
        return null;
      }
      return keccak256(__privateMethod(this, _Transaction_instances, getSerialized_fn).call(this, true, false));
    }
    /**
     *  The pre-image hash of this transaction.
     *
     *  This is the digest that a [[Signer]] must sign to authorize
     *  this transaction.
     */
    get unsignedHash() {
      return keccak256(this.unsignedSerialized);
    }
    /**
     *  The sending address, if signed. Otherwise, ``null``.
     */
    get from() {
      if (this.signature == null) {
        return null;
      }
      return recoverAddress(this.unsignedHash, this.signature);
    }
    /**
     *  The public key of the sender, if signed. Otherwise, ``null``.
     */
    get fromPublicKey() {
      if (this.signature == null) {
        return null;
      }
      return SigningKey.recoverPublicKey(this.unsignedHash, this.signature);
    }
    /**
     *  Returns true if signed.
     *
     *  This provides a Type Guard that properties requiring a signed
     *  transaction are non-null.
     */
    isSigned() {
      return this.signature != null;
    }
    /**
     *  The serialized transaction.
     *
     *  This throws if the transaction is unsigned. For the pre-image,
     *  use [[unsignedSerialized]].
     */
    get serialized() {
      return __privateMethod(this, _Transaction_instances, getSerialized_fn).call(this, true, true);
    }
    /**
     *  The transaction pre-image.
     *
     *  The hash of this is the digest which needs to be signed to
     *  authorize this transaction.
     */
    get unsignedSerialized() {
      return __privateMethod(this, _Transaction_instances, getSerialized_fn).call(this, false, false);
    }
    /**
     *  Return the most "likely" type; currently the highest
     *  supported transaction type.
     */
    inferType() {
      const types = this.inferTypes();
      if (types.indexOf(2) >= 0) {
        return 2;
      }
      return types.pop();
    }
    /**
     *  Validates the explicit properties and returns a list of compatible
     *  transaction types.
     */
    inferTypes() {
      const hasGasPrice = this.gasPrice != null;
      const hasFee = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null;
      const hasAccessList = this.accessList != null;
      const hasBlob = __privateGet(this, _maxFeePerBlobGas) != null || __privateGet(this, _blobVersionedHashes);
      if (this.maxFeePerGas != null && this.maxPriorityFeePerGas != null) {
        assert(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this });
      }
      assert(!hasFee || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this });
      assert(this.type !== 0 || !hasAccessList, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
      const types = [];
      if (this.type != null) {
        types.push(this.type);
      } else {
        if (hasFee) {
          types.push(2);
        } else if (hasGasPrice) {
          types.push(1);
          if (!hasAccessList) {
            types.push(0);
          }
        } else if (hasAccessList) {
          types.push(1);
          types.push(2);
        } else if (hasBlob && this.to) {
          types.push(3);
        } else {
          types.push(0);
          types.push(1);
          types.push(2);
          types.push(3);
        }
      }
      types.sort();
      return types;
    }
    /**
     *  Returns true if this transaction is a legacy transaction (i.e.
     *  ``type === 0``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isLegacy() {
      return this.type === 0;
    }
    /**
     *  Returns true if this transaction is berlin hardform transaction (i.e.
     *  ``type === 1``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isBerlin() {
      return this.type === 1;
    }
    /**
     *  Returns true if this transaction is london hardform transaction (i.e.
     *  ``type === 2``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isLondon() {
      return this.type === 2;
    }
    /**
     *  Returns true if this transaction is an [[link-eip-4844]] BLOB
     *  transaction.
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isCancun() {
      return this.type === 3;
    }
    /**
     *  Create a copy of this transaciton.
     */
    clone() {
      return _Transaction.from(this);
    }
    /**
     *  Return a JSON-friendly object.
     */
    toJSON() {
      const s4 = (v2) => {
        if (v2 == null) {
          return null;
        }
        return v2.toString();
      };
      return {
        type: this.type,
        to: this.to,
        //            from: this.from,
        data: this.data,
        nonce: this.nonce,
        gasLimit: s4(this.gasLimit),
        gasPrice: s4(this.gasPrice),
        maxPriorityFeePerGas: s4(this.maxPriorityFeePerGas),
        maxFeePerGas: s4(this.maxFeePerGas),
        value: s4(this.value),
        chainId: s4(this.chainId),
        sig: this.signature ? this.signature.toJSON() : null,
        accessList: this.accessList
      };
    }
    /**
     *  Create a **Transaction** from a serialized transaction or a
     *  Transaction-like object.
     */
    static from(tx) {
      if (tx == null) {
        return new _Transaction();
      }
      if (typeof tx === "string") {
        const payload = getBytes(tx);
        if (payload[0] >= 127) {
          return _Transaction.from(_parseLegacy(payload));
        }
        switch (payload[0]) {
          case 1:
            return _Transaction.from(_parseEip2930(payload));
          case 2:
            return _Transaction.from(_parseEip1559(payload));
          case 3:
            return _Transaction.from(_parseEip4844(payload));
        }
        assert(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
      }
      const result = new _Transaction();
      if (tx.type != null) {
        result.type = tx.type;
      }
      if (tx.to != null) {
        result.to = tx.to;
      }
      if (tx.nonce != null) {
        result.nonce = tx.nonce;
      }
      if (tx.gasLimit != null) {
        result.gasLimit = tx.gasLimit;
      }
      if (tx.gasPrice != null) {
        result.gasPrice = tx.gasPrice;
      }
      if (tx.maxPriorityFeePerGas != null) {
        result.maxPriorityFeePerGas = tx.maxPriorityFeePerGas;
      }
      if (tx.maxFeePerGas != null) {
        result.maxFeePerGas = tx.maxFeePerGas;
      }
      if (tx.maxFeePerBlobGas != null) {
        result.maxFeePerBlobGas = tx.maxFeePerBlobGas;
      }
      if (tx.data != null) {
        result.data = tx.data;
      }
      if (tx.value != null) {
        result.value = tx.value;
      }
      if (tx.chainId != null) {
        result.chainId = tx.chainId;
      }
      if (tx.signature != null) {
        result.signature = Signature.from(tx.signature);
      }
      if (tx.accessList != null) {
        result.accessList = tx.accessList;
      }
      if (tx.blobVersionedHashes != null) {
        result.blobVersionedHashes = tx.blobVersionedHashes;
      }
      if (tx.kzg != null) {
        result.kzg = tx.kzg;
      }
      if (tx.blobs != null) {
        result.blobs = tx.blobs;
      }
      if (tx.hash != null) {
        assertArgument(result.isSigned(), "unsigned transaction cannot define '.hash'", "tx", tx);
        assertArgument(result.hash === tx.hash, "hash mismatch", "tx", tx);
      }
      if (tx.from != null) {
        assertArgument(result.isSigned(), "unsigned transaction cannot define '.from'", "tx", tx);
        assertArgument(result.from.toLowerCase() === (tx.from || "").toLowerCase(), "from mismatch", "tx", tx);
      }
      return result;
    }
  };
  _type = new WeakMap();
  _to = new WeakMap();
  _data3 = new WeakMap();
  _nonce = new WeakMap();
  _gasLimit = new WeakMap();
  _gasPrice = new WeakMap();
  _maxPriorityFeePerGas = new WeakMap();
  _maxFeePerGas = new WeakMap();
  _value = new WeakMap();
  _chainId2 = new WeakMap();
  _sig = new WeakMap();
  _accessList = new WeakMap();
  _maxFeePerBlobGas = new WeakMap();
  _blobVersionedHashes = new WeakMap();
  _kzg = new WeakMap();
  _blobs = new WeakMap();
  _Transaction_instances = new WeakSet();
  getSerialized_fn = function(signed2, sidecar) {
    assert(!signed2 || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
    const sig = signed2 ? this.signature : null;
    switch (this.inferType()) {
      case 0:
        return _serializeLegacy(this, sig);
      case 1:
        return _serializeEip2930(this, sig);
      case 2:
        return _serializeEip1559(this, sig);
      case 3:
        return _serializeEip4844(this, sig, sidecar ? this.blobs : null);
    }
    assert(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  };
  var Transaction = _Transaction;

  // node_modules/ethers/lib.esm/hash/typed-data.js
  var padding = new Uint8Array(32);
  padding.fill(0);
  var BN__1 = BigInt(-1);
  var BN_07 = BigInt(0);
  var BN_14 = BigInt(1);
  var BN_MAX_UINT2562 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  function hexPadRight(value) {
    const bytes2 = getBytes(value);
    const padOffset = bytes2.length % 32;
    if (padOffset) {
      return concat([bytes2, padding.slice(padOffset)]);
    }
    return hexlify(bytes2);
  }
  var hexTrue = toBeHex(BN_14, 32);
  var hexFalse = toBeHex(BN_07, 32);
  var domainFieldTypes = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32"
  };
  var domainFieldNames = [
    "name",
    "version",
    "chainId",
    "verifyingContract",
    "salt"
  ];
  function checkString(key) {
    return function(value) {
      assertArgument(typeof value === "string", `invalid domain value for ${JSON.stringify(key)}`, `domain.${key}`, value);
      return value;
    };
  }
  var domainChecks = {
    name: checkString("name"),
    version: checkString("version"),
    chainId: function(_value2) {
      const value = getBigInt(_value2, "domain.chainId");
      assertArgument(value >= 0, "invalid chain ID", "domain.chainId", _value2);
      if (Number.isSafeInteger(value)) {
        return Number(value);
      }
      return toQuantity(value);
    },
    verifyingContract: function(value) {
      try {
        return getAddress(value).toLowerCase();
      } catch (error) {
      }
      assertArgument(false, `invalid domain value "verifyingContract"`, "domain.verifyingContract", value);
    },
    salt: function(value) {
      const bytes2 = getBytes(value, "domain.salt");
      assertArgument(bytes2.length === 32, `invalid domain value "salt"`, "domain.salt", value);
      return hexlify(bytes2);
    }
  };
  function getBaseEncoder(type) {
    {
      const match = type.match(/^(u?)int(\d+)$/);
      if (match) {
        const signed2 = match[1] === "";
        const width = parseInt(match[2]);
        assertArgument(width % 8 === 0 && width !== 0 && width <= 256 && match[2] === String(width), "invalid numeric width", "type", type);
        const boundsUpper = mask(BN_MAX_UINT2562, signed2 ? width - 1 : width);
        const boundsLower = signed2 ? (boundsUpper + BN_14) * BN__1 : BN_07;
        return function(_value2) {
          const value = getBigInt(_value2, "value");
          assertArgument(value >= boundsLower && value <= boundsUpper, `value out-of-bounds for ${type}`, "value", value);
          return toBeHex(signed2 ? toTwos(value, 256) : value, 32);
        };
      }
    }
    {
      const match = type.match(/^bytes(\d+)$/);
      if (match) {
        const width = parseInt(match[1]);
        assertArgument(width !== 0 && width <= 32 && match[1] === String(width), "invalid bytes width", "type", type);
        return function(value) {
          const bytes2 = getBytes(value);
          assertArgument(bytes2.length === width, `invalid length for ${type}`, "value", value);
          return hexPadRight(value);
        };
      }
    }
    switch (type) {
      case "address":
        return function(value) {
          return zeroPadValue(getAddress(value), 32);
        };
      case "bool":
        return function(value) {
          return !value ? hexFalse : hexTrue;
        };
      case "bytes":
        return function(value) {
          return keccak256(value);
        };
      case "string":
        return function(value) {
          return id(value);
        };
    }
    return null;
  }
  function encodeType(name, fields) {
    return `${name}(${fields.map(({ name: name2, type }) => type + " " + name2).join(",")})`;
  }
  function splitArray(type) {
    const match = type.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
    if (match) {
      return {
        base: match[1],
        index: match[2] + match[4],
        array: {
          base: match[1],
          prefix: match[1] + match[2],
          count: match[5] ? parseInt(match[5]) : -1
        }
      };
    }
    return { base: type };
  }
  var _types, _fullTypes, _encoderCache, _TypedDataEncoder_instances, getEncoder_fn;
  var _TypedDataEncoder = class _TypedDataEncoder {
    /**
     *  Create a new **TypedDataEncoder** for %%types%%.
     *
     *  This performs all necessary checking that types are valid and
     *  do not violate the [[link-eip-712]] structural constraints as
     *  well as computes the [[primaryType]].
     */
    constructor(_types2) {
      __privateAdd(this, _TypedDataEncoder_instances);
      /**
       *  The primary type for the structured [[types]].
       *
       *  This is derived automatically from the [[types]], since no
       *  recursion is possible, once the DAG for the types is consturcted
       *  internally, the primary type must be the only remaining type with
       *  no parent nodes.
       */
      __publicField(this, "primaryType");
      __privateAdd(this, _types);
      __privateAdd(this, _fullTypes);
      __privateAdd(this, _encoderCache);
      __privateSet(this, _fullTypes, /* @__PURE__ */ new Map());
      __privateSet(this, _encoderCache, /* @__PURE__ */ new Map());
      const links = /* @__PURE__ */ new Map();
      const parents = /* @__PURE__ */ new Map();
      const subtypes = /* @__PURE__ */ new Map();
      const types = {};
      Object.keys(_types2).forEach((type) => {
        types[type] = _types2[type].map(({ name, type: type2 }) => {
          let { base, index } = splitArray(type2);
          if (base === "int" && !_types2["int"]) {
            base = "int256";
          }
          if (base === "uint" && !_types2["uint"]) {
            base = "uint256";
          }
          return { name, type: base + (index || "") };
        });
        links.set(type, /* @__PURE__ */ new Set());
        parents.set(type, []);
        subtypes.set(type, /* @__PURE__ */ new Set());
      });
      __privateSet(this, _types, JSON.stringify(types));
      for (const name in types) {
        const uniqueNames = /* @__PURE__ */ new Set();
        for (const field of types[name]) {
          assertArgument(!uniqueNames.has(field.name), `duplicate variable name ${JSON.stringify(field.name)} in ${JSON.stringify(name)}`, "types", _types2);
          uniqueNames.add(field.name);
          const baseType = splitArray(field.type).base;
          assertArgument(baseType !== name, `circular type reference to ${JSON.stringify(baseType)}`, "types", _types2);
          const encoder = getBaseEncoder(baseType);
          if (encoder) {
            continue;
          }
          assertArgument(parents.has(baseType), `unknown type ${JSON.stringify(baseType)}`, "types", _types2);
          parents.get(baseType).push(name);
          links.get(name).add(baseType);
        }
      }
      const primaryTypes = Array.from(parents.keys()).filter((n5) => parents.get(n5).length === 0);
      assertArgument(primaryTypes.length !== 0, "missing primary type", "types", _types2);
      assertArgument(primaryTypes.length === 1, `ambiguous primary types or unused types: ${primaryTypes.map((t3) => JSON.stringify(t3)).join(", ")}`, "types", _types2);
      defineProperties(this, { primaryType: primaryTypes[0] });
      function checkCircular(type, found) {
        assertArgument(!found.has(type), `circular type reference to ${JSON.stringify(type)}`, "types", _types2);
        found.add(type);
        for (const child of links.get(type)) {
          if (!parents.has(child)) {
            continue;
          }
          checkCircular(child, found);
          for (const subtype of found) {
            subtypes.get(subtype).add(child);
          }
        }
        found.delete(type);
      }
      checkCircular(this.primaryType, /* @__PURE__ */ new Set());
      for (const [name, set] of subtypes) {
        const st = Array.from(set);
        st.sort();
        __privateGet(this, _fullTypes).set(name, encodeType(name, types[name]) + st.map((t3) => encodeType(t3, types[t3])).join(""));
      }
    }
    /**
     *  The types.
     */
    get types() {
      return JSON.parse(__privateGet(this, _types));
    }
    /**
     *  Returnthe encoder for the specific %%type%%.
     */
    getEncoder(type) {
      let encoder = __privateGet(this, _encoderCache).get(type);
      if (!encoder) {
        encoder = __privateMethod(this, _TypedDataEncoder_instances, getEncoder_fn).call(this, type);
        __privateGet(this, _encoderCache).set(type, encoder);
      }
      return encoder;
    }
    /**
     *  Return the full type for %%name%%.
     */
    encodeType(name) {
      const result = __privateGet(this, _fullTypes).get(name);
      assertArgument(result, `unknown type: ${JSON.stringify(name)}`, "name", name);
      return result;
    }
    /**
     *  Return the encoded %%value%% for the %%type%%.
     */
    encodeData(type, value) {
      return this.getEncoder(type)(value);
    }
    /**
     *  Returns the hash of %%value%% for the type of %%name%%.
     */
    hashStruct(name, value) {
      return keccak256(this.encodeData(name, value));
    }
    /**
     *  Return the fulled encoded %%value%% for the [[types]].
     */
    encode(value) {
      return this.encodeData(this.primaryType, value);
    }
    /**
     *  Return the hash of the fully encoded %%value%% for the [[types]].
     */
    hash(value) {
      return this.hashStruct(this.primaryType, value);
    }
    /**
     *  @_ignore:
     */
    _visit(type, value, callback) {
      {
        const encoder = getBaseEncoder(type);
        if (encoder) {
          return callback(type, value);
        }
      }
      const array = splitArray(type).array;
      if (array) {
        assertArgument(array.count === -1 || array.count === value.length, `array length mismatch; expected length ${array.count}`, "value", value);
        return value.map((v2) => this._visit(array.prefix, v2, callback));
      }
      const fields = this.types[type];
      if (fields) {
        return fields.reduce((accum, { name, type: type2 }) => {
          accum[name] = this._visit(type2, value[name], callback);
          return accum;
        }, {});
      }
      assertArgument(false, `unknown type: ${type}`, "type", type);
    }
    /**
     *  Call %%calback%% for each value in %%value%%, passing the type and
     *  component within %%value%%.
     *
     *  This is useful for replacing addresses or other transformation that
     *  may be desired on each component, based on its type.
     */
    visit(value, callback) {
      return this._visit(this.primaryType, value, callback);
    }
    /**
     *  Create a new **TypedDataEncoder** for %%types%%.
     */
    static from(types) {
      return new _TypedDataEncoder(types);
    }
    /**
     *  Return the primary type for %%types%%.
     */
    static getPrimaryType(types) {
      return _TypedDataEncoder.from(types).primaryType;
    }
    /**
     *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
     */
    static hashStruct(name, types, value) {
      return _TypedDataEncoder.from(types).hashStruct(name, value);
    }
    /**
     *  Return the domain hash for %%domain%%.
     */
    static hashDomain(domain) {
      const domainFields = [];
      for (const name in domain) {
        if (domain[name] == null) {
          continue;
        }
        const type = domainFieldTypes[name];
        assertArgument(type, `invalid typed-data domain key: ${JSON.stringify(name)}`, "domain", domain);
        domainFields.push({ name, type });
      }
      domainFields.sort((a3, b4) => {
        return domainFieldNames.indexOf(a3.name) - domainFieldNames.indexOf(b4.name);
      });
      return _TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: domainFields }, domain);
    }
    /**
     *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
     */
    static encode(domain, types, value) {
      return concat([
        "0x1901",
        _TypedDataEncoder.hashDomain(domain),
        _TypedDataEncoder.from(types).hash(value)
      ]);
    }
    /**
     *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
     */
    static hash(domain, types, value) {
      return keccak256(_TypedDataEncoder.encode(domain, types, value));
    }
    // Replaces all address types with ENS names with their looked up address
    /**
     * Resolves to the value from resolving all addresses in %%value%% for
     * %%types%% and the %%domain%%.
     */
    static async resolveNames(domain, types, value, resolveName) {
      domain = Object.assign({}, domain);
      for (const key in domain) {
        if (domain[key] == null) {
          delete domain[key];
        }
      }
      const ensCache = {};
      if (domain.verifyingContract && !isHexString(domain.verifyingContract, 20)) {
        ensCache[domain.verifyingContract] = "0x";
      }
      const encoder = _TypedDataEncoder.from(types);
      encoder.visit(value, (type, value2) => {
        if (type === "address" && !isHexString(value2, 20)) {
          ensCache[value2] = "0x";
        }
        return value2;
      });
      for (const name in ensCache) {
        ensCache[name] = await resolveName(name);
      }
      if (domain.verifyingContract && ensCache[domain.verifyingContract]) {
        domain.verifyingContract = ensCache[domain.verifyingContract];
      }
      value = encoder.visit(value, (type, value2) => {
        if (type === "address" && ensCache[value2]) {
          return ensCache[value2];
        }
        return value2;
      });
      return { domain, value };
    }
    /**
     *  Returns the JSON-encoded payload expected by nodes which implement
     *  the JSON-RPC [[link-eip-712]] method.
     */
    static getPayload(domain, types, value) {
      _TypedDataEncoder.hashDomain(domain);
      const domainValues = {};
      const domainTypes = [];
      domainFieldNames.forEach((name) => {
        const value2 = domain[name];
        if (value2 == null) {
          return;
        }
        domainValues[name] = domainChecks[name](value2);
        domainTypes.push({ name, type: domainFieldTypes[name] });
      });
      const encoder = _TypedDataEncoder.from(types);
      types = encoder.types;
      const typesWithDomain = Object.assign({}, types);
      assertArgument(typesWithDomain.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", types);
      typesWithDomain.EIP712Domain = domainTypes;
      encoder.encode(value);
      return {
        types: typesWithDomain,
        domain: domainValues,
        primaryType: encoder.primaryType,
        message: encoder.visit(value, (type, value2) => {
          if (type.match(/^bytes(\d*)/)) {
            return hexlify(getBytes(value2));
          }
          if (type.match(/^u?int/)) {
            return getBigInt(value2).toString();
          }
          switch (type) {
            case "address":
              return value2.toLowerCase();
            case "bool":
              return !!value2;
            case "string":
              assertArgument(typeof value2 === "string", "invalid string", "value", value2);
              return value2;
          }
          assertArgument(false, "unsupported type", "type", type);
        })
      };
    }
  };
  _types = new WeakMap();
  _fullTypes = new WeakMap();
  _encoderCache = new WeakMap();
  _TypedDataEncoder_instances = new WeakSet();
  getEncoder_fn = function(type) {
    {
      const encoder = getBaseEncoder(type);
      if (encoder) {
        return encoder;
      }
    }
    const array = splitArray(type).array;
    if (array) {
      const subtype = array.prefix;
      const subEncoder = this.getEncoder(subtype);
      return (value) => {
        assertArgument(array.count === -1 || array.count === value.length, `array length mismatch; expected length ${array.count}`, "value", value);
        let result = value.map(subEncoder);
        if (__privateGet(this, _fullTypes).has(subtype)) {
          result = result.map(keccak256);
        }
        return keccak256(concat(result));
      };
    }
    const fields = this.types[type];
    if (fields) {
      const encodedType = id(__privateGet(this, _fullTypes).get(type));
      return (value) => {
        const values = fields.map(({ name, type: type2 }) => {
          const result = this.getEncoder(type2)(value[name]);
          if (__privateGet(this, _fullTypes).has(type2)) {
            return keccak256(result);
          }
          return result;
        });
        values.unshift(encodedType);
        return concat(values);
      };
    }
    assertArgument(false, `unknown type: ${type}`, "type", type);
  };
  var TypedDataEncoder = _TypedDataEncoder;

  // node_modules/ethers/lib.esm/abi/fragments.js
  function setify(items) {
    const result = /* @__PURE__ */ new Set();
    items.forEach((k2) => result.add(k2));
    return Object.freeze(result);
  }
  var _kwVisibDeploy = "external public payable override";
  var KwVisibDeploy = setify(_kwVisibDeploy.split(" "));
  var _kwVisib = "constant external internal payable private public pure view override";
  var KwVisib = setify(_kwVisib.split(" "));
  var _kwTypes = "constructor error event fallback function receive struct";
  var KwTypes = setify(_kwTypes.split(" "));
  var _kwModifiers = "calldata memory storage payable indexed";
  var KwModifiers = setify(_kwModifiers.split(" "));
  var _kwOther = "tuple returns";
  var _keywords = [_kwTypes, _kwModifiers, _kwOther, _kwVisib].join(" ");
  var Keywords = setify(_keywords.split(" "));
  var SimpleTokens = {
    "(": "OPEN_PAREN",
    ")": "CLOSE_PAREN",
    "[": "OPEN_BRACKET",
    "]": "CLOSE_BRACKET",
    ",": "COMMA",
    "@": "AT"
  };
  var regexWhitespacePrefix = new RegExp("^(\\s*)");
  var regexNumberPrefix = new RegExp("^([0-9]+)");
  var regexIdPrefix = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)");
  var regexId = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$");
  var regexType = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
  var _offset2, _tokens, _TokenString_instances, subTokenString_fn;
  var _TokenString = class _TokenString {
    constructor(tokens) {
      __privateAdd(this, _TokenString_instances);
      __privateAdd(this, _offset2);
      __privateAdd(this, _tokens);
      __privateSet(this, _offset2, 0);
      __privateSet(this, _tokens, tokens.slice());
    }
    get offset() {
      return __privateGet(this, _offset2);
    }
    get length() {
      return __privateGet(this, _tokens).length - __privateGet(this, _offset2);
    }
    clone() {
      return new _TokenString(__privateGet(this, _tokens));
    }
    reset() {
      __privateSet(this, _offset2, 0);
    }
    // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
    popKeyword(allowed) {
      const top = this.peek();
      if (top.type !== "KEYWORD" || !allowed.has(top.text)) {
        throw new Error(`expected keyword ${top.text}`);
      }
      return this.pop().text;
    }
    // Pops and returns the value of the next token if it is `type`; throws if out of tokens
    popType(type) {
      if (this.peek().type !== type) {
        const top = this.peek();
        throw new Error(`expected ${type}; got ${top.type} ${JSON.stringify(top.text)}`);
      }
      return this.pop().text;
    }
    // Pops and returns a "(" TOKENS ")"
    popParen() {
      const top = this.peek();
      if (top.type !== "OPEN_PAREN") {
        throw new Error("bad start");
      }
      const result = __privateMethod(this, _TokenString_instances, subTokenString_fn).call(this, __privateGet(this, _offset2) + 1, top.match + 1);
      __privateSet(this, _offset2, top.match + 1);
      return result;
    }
    // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
    popParams() {
      const top = this.peek();
      if (top.type !== "OPEN_PAREN") {
        throw new Error("bad start");
      }
      const result = [];
      while (__privateGet(this, _offset2) < top.match - 1) {
        const link = this.peek().linkNext;
        result.push(__privateMethod(this, _TokenString_instances, subTokenString_fn).call(this, __privateGet(this, _offset2) + 1, link));
        __privateSet(this, _offset2, link);
      }
      __privateSet(this, _offset2, top.match + 1);
      return result;
    }
    // Returns the top Token, throwing if out of tokens
    peek() {
      if (__privateGet(this, _offset2) >= __privateGet(this, _tokens).length) {
        throw new Error("out-of-bounds");
      }
      return __privateGet(this, _tokens)[__privateGet(this, _offset2)];
    }
    // Returns the next value, if it is a keyword in `allowed`
    peekKeyword(allowed) {
      const top = this.peekType("KEYWORD");
      return top != null && allowed.has(top) ? top : null;
    }
    // Returns the value of the next token if it is `type`
    peekType(type) {
      if (this.length === 0) {
        return null;
      }
      const top = this.peek();
      return top.type === type ? top.text : null;
    }
    // Returns the next token; throws if out of tokens
    pop() {
      const result = this.peek();
      __privateWrapper(this, _offset2)._++;
      return result;
    }
    toString() {
      const tokens = [];
      for (let i5 = __privateGet(this, _offset2); i5 < __privateGet(this, _tokens).length; i5++) {
        const token = __privateGet(this, _tokens)[i5];
        tokens.push(`${token.type}:${token.text}`);
      }
      return `<TokenString ${tokens.join(" ")}>`;
    }
  };
  _offset2 = new WeakMap();
  _tokens = new WeakMap();
  _TokenString_instances = new WeakSet();
  subTokenString_fn = function(from = 0, to = 0) {
    return new _TokenString(__privateGet(this, _tokens).slice(from, to).map((t3) => {
      return Object.freeze(Object.assign({}, t3, {
        match: t3.match - from,
        linkBack: t3.linkBack - from,
        linkNext: t3.linkNext - from
      }));
    }));
  };
  var TokenString = _TokenString;
  function lex(text) {
    const tokens = [];
    const throwError2 = (message) => {
      const token = offset < text.length ? JSON.stringify(text[offset]) : "$EOI";
      throw new Error(`invalid token ${token} at ${offset}: ${message}`);
    };
    let brackets = [];
    let commas = [];
    let offset = 0;
    while (offset < text.length) {
      let cur = text.substring(offset);
      let match = cur.match(regexWhitespacePrefix);
      if (match) {
        offset += match[1].length;
        cur = text.substring(offset);
      }
      const token = { depth: brackets.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset, value: -1 };
      tokens.push(token);
      let type = SimpleTokens[cur[0]] || "";
      if (type) {
        token.type = type;
        token.text = cur[0];
        offset++;
        if (type === "OPEN_PAREN") {
          brackets.push(tokens.length - 1);
          commas.push(tokens.length - 1);
        } else if (type == "CLOSE_PAREN") {
          if (brackets.length === 0) {
            throwError2("no matching open bracket");
          }
          token.match = brackets.pop();
          tokens[token.match].match = tokens.length - 1;
          token.depth--;
          token.linkBack = commas.pop();
          tokens[token.linkBack].linkNext = tokens.length - 1;
        } else if (type === "COMMA") {
          token.linkBack = commas.pop();
          tokens[token.linkBack].linkNext = tokens.length - 1;
          commas.push(tokens.length - 1);
        } else if (type === "OPEN_BRACKET") {
          token.type = "BRACKET";
        } else if (type === "CLOSE_BRACKET") {
          let suffix = tokens.pop().text;
          if (tokens.length > 0 && tokens[tokens.length - 1].type === "NUMBER") {
            const value = tokens.pop().text;
            suffix = value + suffix;
            tokens[tokens.length - 1].value = getNumber(value);
          }
          if (tokens.length === 0 || tokens[tokens.length - 1].type !== "BRACKET") {
            throw new Error("missing opening bracket");
          }
          tokens[tokens.length - 1].text += suffix;
        }
        continue;
      }
      match = cur.match(regexIdPrefix);
      if (match) {
        token.text = match[1];
        offset += token.text.length;
        if (Keywords.has(token.text)) {
          token.type = "KEYWORD";
          continue;
        }
        if (token.text.match(regexType)) {
          token.type = "TYPE";
          continue;
        }
        token.type = "ID";
        continue;
      }
      match = cur.match(regexNumberPrefix);
      if (match) {
        token.text = match[1];
        token.type = "NUMBER";
        offset += token.text.length;
        continue;
      }
      throw new Error(`unexpected token ${JSON.stringify(cur[0])} at position ${offset}`);
    }
    return new TokenString(tokens.map((t3) => Object.freeze(t3)));
  }
  function allowSingle(set, allowed) {
    let included = [];
    for (const key in allowed.keys()) {
      if (set.has(key)) {
        included.push(key);
      }
    }
    if (included.length > 1) {
      throw new Error(`conflicting types: ${included.join(", ")}`);
    }
  }
  function consumeName(type, tokens) {
    if (tokens.peekKeyword(KwTypes)) {
      const keyword = tokens.pop().text;
      if (keyword !== type) {
        throw new Error(`expected ${type}, got ${keyword}`);
      }
    }
    return tokens.popType("ID");
  }
  function consumeKeywords(tokens, allowed) {
    const keywords = /* @__PURE__ */ new Set();
    while (true) {
      const keyword = tokens.peekType("KEYWORD");
      if (keyword == null || allowed && !allowed.has(keyword)) {
        break;
      }
      tokens.pop();
      if (keywords.has(keyword)) {
        throw new Error(`duplicate keywords: ${JSON.stringify(keyword)}`);
      }
      keywords.add(keyword);
    }
    return Object.freeze(keywords);
  }
  function consumeMutability(tokens) {
    let modifiers = consumeKeywords(tokens, KwVisib);
    allowSingle(modifiers, setify("constant payable nonpayable".split(" ")));
    allowSingle(modifiers, setify("pure view payable nonpayable".split(" ")));
    if (modifiers.has("view")) {
      return "view";
    }
    if (modifiers.has("pure")) {
      return "pure";
    }
    if (modifiers.has("payable")) {
      return "payable";
    }
    if (modifiers.has("nonpayable")) {
      return "nonpayable";
    }
    if (modifiers.has("constant")) {
      return "view";
    }
    return "nonpayable";
  }
  function consumeParams(tokens, allowIndexed) {
    return tokens.popParams().map((t3) => ParamType.from(t3, allowIndexed));
  }
  function consumeGas(tokens) {
    if (tokens.peekType("AT")) {
      tokens.pop();
      if (tokens.peekType("NUMBER")) {
        return getBigInt(tokens.pop().text);
      }
      throw new Error("invalid gas");
    }
    return null;
  }
  function consumeEoi(tokens) {
    if (tokens.length) {
      throw new Error(`unexpected tokens at offset ${tokens.offset}: ${tokens.toString()}`);
    }
  }
  var regexArrayType = new RegExp(/^(.*)\[([0-9]*)\]$/);
  function verifyBasicType(type) {
    const match = type.match(regexType);
    assertArgument(match, "invalid type", "type", type);
    if (type === "uint") {
      return "uint256";
    }
    if (type === "int") {
      return "int256";
    }
    if (match[2]) {
      const length = parseInt(match[2]);
      assertArgument(length !== 0 && length <= 32, "invalid bytes length", "type", type);
    } else if (match[3]) {
      const size = parseInt(match[3]);
      assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid numeric width", "type", type);
    }
    return type;
  }
  var _guard3 = {};
  var internal = Symbol.for("_ethers_internal");
  var ParamTypeInternal = "_ParamTypeInternal";
  var ErrorFragmentInternal = "_ErrorInternal";
  var EventFragmentInternal = "_EventInternal";
  var ConstructorFragmentInternal = "_ConstructorInternal";
  var FallbackFragmentInternal = "_FallbackInternal";
  var FunctionFragmentInternal = "_FunctionInternal";
  var StructFragmentInternal = "_StructInternal";
  var _ParamType_instances, walkAsync_fn;
  var _ParamType = class _ParamType {
    /**
     *  @private
     */
    constructor(guard, name, type, baseType, indexed, components, arrayLength, arrayChildren) {
      __privateAdd(this, _ParamType_instances);
      /**
       *  The local name of the parameter (or ``""`` if unbound)
       */
      __publicField(this, "name");
      /**
       *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
       *  ``"uint256[3][]"``)
       */
      __publicField(this, "type");
      /**
       *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
       */
      __publicField(this, "baseType");
      /**
       *  True if the parameters is indexed.
       *
       *  For non-indexable types this is ``null``.
       */
      __publicField(this, "indexed");
      /**
       *  The components for the tuple.
       *
       *  For non-tuple types this is ``null``.
       */
      __publicField(this, "components");
      /**
       *  The array length, or ``-1`` for dynamic-lengthed arrays.
       *
       *  For non-array types this is ``null``.
       */
      __publicField(this, "arrayLength");
      /**
       *  The type of each child in the array.
       *
       *  For non-array types this is ``null``.
       */
      __publicField(this, "arrayChildren");
      assertPrivate(guard, _guard3, "ParamType");
      Object.defineProperty(this, internal, { value: ParamTypeInternal });
      if (components) {
        components = Object.freeze(components.slice());
      }
      if (baseType === "array") {
        if (arrayLength == null || arrayChildren == null) {
          throw new Error("");
        }
      } else if (arrayLength != null || arrayChildren != null) {
        throw new Error("");
      }
      if (baseType === "tuple") {
        if (components == null) {
          throw new Error("");
        }
      } else if (components != null) {
        throw new Error("");
      }
      defineProperties(this, {
        name,
        type,
        baseType,
        indexed,
        components,
        arrayLength,
        arrayChildren
      });
    }
    /**
     *  Return a string representation of this type.
     *
     *  For example,
     *
     *  ``sighash" => "(uint256,address)"``
     *
     *  ``"minimal" => "tuple(uint256,address) indexed"``
     *
     *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        const name = this.name || "";
        if (this.isArray()) {
          const result3 = JSON.parse(this.arrayChildren.format("json"));
          result3.name = name;
          result3.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
          return JSON.stringify(result3);
        }
        const result2 = {
          type: this.baseType === "tuple" ? "tuple" : this.type,
          name
        };
        if (typeof this.indexed === "boolean") {
          result2.indexed = this.indexed;
        }
        if (this.isTuple()) {
          result2.components = this.components.map((c4) => JSON.parse(c4.format(format)));
        }
        return JSON.stringify(result2);
      }
      let result = "";
      if (this.isArray()) {
        result += this.arrayChildren.format(format);
        result += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
      } else {
        if (this.isTuple()) {
          result += "(" + this.components.map((comp) => comp.format(format)).join(format === "full" ? ", " : ",") + ")";
        } else {
          result += this.type;
        }
      }
      if (format !== "sighash") {
        if (this.indexed === true) {
          result += " indexed";
        }
        if (format === "full" && this.name) {
          result += " " + this.name;
        }
      }
      return result;
    }
    /**
     *  Returns true if %%this%% is an Array type.
     *
     *  This provides a type gaurd ensuring that [[arrayChildren]]
     *  and [[arrayLength]] are non-null.
     */
    isArray() {
      return this.baseType === "array";
    }
    /**
     *  Returns true if %%this%% is a Tuple type.
     *
     *  This provides a type gaurd ensuring that [[components]]
     *  is non-null.
     */
    isTuple() {
      return this.baseType === "tuple";
    }
    /**
     *  Returns true if %%this%% is an Indexable type.
     *
     *  This provides a type gaurd ensuring that [[indexed]]
     *  is non-null.
     */
    isIndexable() {
      return this.indexed != null;
    }
    /**
     *  Walks the **ParamType** with %%value%%, calling %%process%%
     *  on each type, destructing the %%value%% recursively.
     */
    walk(value, process2) {
      if (this.isArray()) {
        if (!Array.isArray(value)) {
          throw new Error("invalid array value");
        }
        if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
          throw new Error("array is wrong length");
        }
        const _this = this;
        return value.map((v2) => _this.arrayChildren.walk(v2, process2));
      }
      if (this.isTuple()) {
        if (!Array.isArray(value)) {
          throw new Error("invalid tuple value");
        }
        if (value.length !== this.components.length) {
          throw new Error("array is wrong length");
        }
        const _this = this;
        return value.map((v2, i5) => _this.components[i5].walk(v2, process2));
      }
      return process2(this.type, value);
    }
    /**
     *  Walks the **ParamType** with %%value%%, asynchronously calling
     *  %%process%% on each type, destructing the %%value%% recursively.
     *
     *  This can be used to resolve ENS names by walking and resolving each
     *  ``"address"`` type.
     */
    async walkAsync(value, process2) {
      const promises = [];
      const result = [value];
      __privateMethod(this, _ParamType_instances, walkAsync_fn).call(this, promises, value, process2, (value2) => {
        result[0] = value2;
      });
      if (promises.length) {
        await Promise.all(promises);
      }
      return result[0];
    }
    /**
     *  Creates a new **ParamType** for %%obj%%.
     *
     *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
     *  otherwise the ``indexed`` keyword will throw an error.
     */
    static from(obj, allowIndexed) {
      if (_ParamType.isParamType(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _ParamType.from(lex(obj), allowIndexed);
        } catch (error) {
          assertArgument(false, "invalid param type", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        let type2 = "", baseType = "";
        let comps = null;
        if (consumeKeywords(obj, setify(["tuple"])).has("tuple") || obj.peekType("OPEN_PAREN")) {
          baseType = "tuple";
          comps = obj.popParams().map((t3) => _ParamType.from(t3));
          type2 = `tuple(${comps.map((c4) => c4.format()).join(",")})`;
        } else {
          type2 = verifyBasicType(obj.popType("TYPE"));
          baseType = type2;
        }
        let arrayChildren = null;
        let arrayLength = null;
        while (obj.length && obj.peekType("BRACKET")) {
          const bracket = obj.pop();
          arrayChildren = new _ParamType(_guard3, "", type2, baseType, null, comps, arrayLength, arrayChildren);
          arrayLength = bracket.value;
          type2 += bracket.text;
          baseType = "array";
          comps = null;
        }
        let indexed2 = null;
        const keywords = consumeKeywords(obj, KwModifiers);
        if (keywords.has("indexed")) {
          if (!allowIndexed) {
            throw new Error("");
          }
          indexed2 = true;
        }
        const name2 = obj.peekType("ID") ? obj.pop().text : "";
        if (obj.length) {
          throw new Error("leftover tokens");
        }
        return new _ParamType(_guard3, name2, type2, baseType, indexed2, comps, arrayLength, arrayChildren);
      }
      const name = obj.name;
      assertArgument(!name || typeof name === "string" && name.match(regexId), "invalid name", "obj.name", name);
      let indexed = obj.indexed;
      if (indexed != null) {
        assertArgument(allowIndexed, "parameter cannot be indexed", "obj.indexed", obj.indexed);
        indexed = !!indexed;
      }
      let type = obj.type;
      let arrayMatch = type.match(regexArrayType);
      if (arrayMatch) {
        const arrayLength = parseInt(arrayMatch[2] || "-1");
        const arrayChildren = _ParamType.from({
          type: arrayMatch[1],
          components: obj.components
        });
        return new _ParamType(_guard3, name || "", type, "array", indexed, null, arrayLength, arrayChildren);
      }
      if (type === "tuple" || type.startsWith(
        "tuple("
        /* fix: ) */
      ) || type.startsWith(
        "("
        /* fix: ) */
      )) {
        const comps = obj.components != null ? obj.components.map((c4) => _ParamType.from(c4)) : null;
        const tuple = new _ParamType(_guard3, name || "", type, "tuple", indexed, comps, null, null);
        return tuple;
      }
      type = verifyBasicType(obj.type);
      return new _ParamType(_guard3, name || "", type, type, indexed, null, null, null);
    }
    /**
     *  Returns true if %%value%% is a **ParamType**.
     */
    static isParamType(value) {
      return value && value[internal] === ParamTypeInternal;
    }
  };
  _ParamType_instances = new WeakSet();
  walkAsync_fn = function(promises, value, process2, setValue) {
    if (this.isArray()) {
      if (!Array.isArray(value)) {
        throw new Error("invalid array value");
      }
      if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
        throw new Error("array is wrong length");
      }
      const childType = this.arrayChildren;
      const result2 = value.slice();
      result2.forEach((value2, index) => {
        var _a2;
        __privateMethod(_a2 = childType, _ParamType_instances, walkAsync_fn).call(_a2, promises, value2, process2, (value3) => {
          result2[index] = value3;
        });
      });
      setValue(result2);
      return;
    }
    if (this.isTuple()) {
      const components = this.components;
      let result2;
      if (Array.isArray(value)) {
        result2 = value.slice();
      } else {
        if (value == null || typeof value !== "object") {
          throw new Error("invalid tuple value");
        }
        result2 = components.map((param) => {
          if (!param.name) {
            throw new Error("cannot use object value with unnamed components");
          }
          if (!(param.name in value)) {
            throw new Error(`missing value for component ${param.name}`);
          }
          return value[param.name];
        });
      }
      if (result2.length !== this.components.length) {
        throw new Error("array is wrong length");
      }
      result2.forEach((value2, index) => {
        var _a2;
        __privateMethod(_a2 = components[index], _ParamType_instances, walkAsync_fn).call(_a2, promises, value2, process2, (value3) => {
          result2[index] = value3;
        });
      });
      setValue(result2);
      return;
    }
    const result = process2(this.type, value);
    if (result.then) {
      promises.push(async function() {
        setValue(await result);
      }());
    } else {
      setValue(result);
    }
  };
  var ParamType = _ParamType;
  var Fragment = class _Fragment {
    /**
     *  @private
     */
    constructor(guard, type, inputs) {
      /**
       *  The type of the fragment.
       */
      __publicField(this, "type");
      /**
       *  The inputs for the fragment.
       */
      __publicField(this, "inputs");
      assertPrivate(guard, _guard3, "Fragment");
      inputs = Object.freeze(inputs.slice());
      defineProperties(this, { type, inputs });
    }
    /**
     *  Creates a new **Fragment** for %%obj%%, wich can be any supported
     *  ABI frgament type.
     */
    static from(obj) {
      if (typeof obj === "string") {
        try {
          _Fragment.from(JSON.parse(obj));
        } catch (e4) {
        }
        return _Fragment.from(lex(obj));
      }
      if (obj instanceof TokenString) {
        const type = obj.peekKeyword(KwTypes);
        switch (type) {
          case "constructor":
            return ConstructorFragment.from(obj);
          case "error":
            return ErrorFragment.from(obj);
          case "event":
            return EventFragment.from(obj);
          case "fallback":
          case "receive":
            return FallbackFragment.from(obj);
          case "function":
            return FunctionFragment.from(obj);
          case "struct":
            return StructFragment.from(obj);
        }
      } else if (typeof obj === "object") {
        switch (obj.type) {
          case "constructor":
            return ConstructorFragment.from(obj);
          case "error":
            return ErrorFragment.from(obj);
          case "event":
            return EventFragment.from(obj);
          case "fallback":
          case "receive":
            return FallbackFragment.from(obj);
          case "function":
            return FunctionFragment.from(obj);
          case "struct":
            return StructFragment.from(obj);
        }
        assert(false, `unsupported type: ${obj.type}`, "UNSUPPORTED_OPERATION", {
          operation: "Fragment.from"
        });
      }
      assertArgument(false, "unsupported frgament object", "obj", obj);
    }
    /**
     *  Returns true if %%value%% is a [[ConstructorFragment]].
     */
    static isConstructor(value) {
      return ConstructorFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is an [[ErrorFragment]].
     */
    static isError(value) {
      return ErrorFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is an [[EventFragment]].
     */
    static isEvent(value) {
      return EventFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is a [[FunctionFragment]].
     */
    static isFunction(value) {
      return FunctionFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is a [[StructFragment]].
     */
    static isStruct(value) {
      return StructFragment.isFragment(value);
    }
  };
  var NamedFragment = class extends Fragment {
    /**
     *  @private
     */
    constructor(guard, type, name, inputs) {
      super(guard, type, inputs);
      /**
       *  The name of the fragment.
       */
      __publicField(this, "name");
      assertArgument(typeof name === "string" && name.match(regexId), "invalid identifier", "name", name);
      inputs = Object.freeze(inputs.slice());
      defineProperties(this, { name });
    }
  };
  function joinParams(format, params) {
    return "(" + params.map((p3) => p3.format(format)).join(format === "full" ? ", " : ",") + ")";
  }
  var ErrorFragment = class _ErrorFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, inputs) {
      super(guard, "error", name, inputs);
      Object.defineProperty(this, internal, { value: ErrorFragmentInternal });
    }
    /**
     *  The Custom Error selector.
     */
    get selector() {
      return id(this.format("sighash")).substring(0, 10);
    }
    /**
     *  Returns a string representation of this fragment as %%format%%.
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        return JSON.stringify({
          type: "error",
          name: this.name,
          inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
        });
      }
      const result = [];
      if (format !== "sighash") {
        result.push("error");
      }
      result.push(this.name + joinParams(format, this.inputs));
      return result.join(" ");
    }
    /**
     *  Returns a new **ErrorFragment** for %%obj%%.
     */
    static from(obj) {
      if (_ErrorFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        return _ErrorFragment.from(lex(obj));
      } else if (obj instanceof TokenString) {
        const name = consumeName("error", obj);
        const inputs = consumeParams(obj);
        consumeEoi(obj);
        return new _ErrorFragment(_guard3, name, inputs);
      }
      return new _ErrorFragment(_guard3, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is an
     *  **ErrorFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === ErrorFragmentInternal;
    }
  };
  var EventFragment = class _EventFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, inputs, anonymous) {
      super(guard, "event", name, inputs);
      /**
       *  Whether this event is anonymous.
       */
      __publicField(this, "anonymous");
      Object.defineProperty(this, internal, { value: EventFragmentInternal });
      defineProperties(this, { anonymous });
    }
    /**
     *  The Event topic hash.
     */
    get topicHash() {
      return id(this.format("sighash"));
    }
    /**
     *  Returns a string representation of this event as %%format%%.
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        return JSON.stringify({
          type: "event",
          anonymous: this.anonymous,
          name: this.name,
          inputs: this.inputs.map((i5) => JSON.parse(i5.format(format)))
        });
      }
      const result = [];
      if (format !== "sighash") {
        result.push("event");
      }
      result.push(this.name + joinParams(format, this.inputs));
      if (format !== "sighash" && this.anonymous) {
        result.push("anonymous");
      }
      return result.join(" ");
    }
    /**
     *  Return the topic hash for an event with %%name%% and %%params%%.
     */
    static getTopicHash(name, params) {
      params = (params || []).map((p3) => ParamType.from(p3));
      const fragment = new _EventFragment(_guard3, name, params, false);
      return fragment.topicHash;
    }
    /**
     *  Returns a new **EventFragment** for %%obj%%.
     */
    static from(obj) {
      if (_EventFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _EventFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid event fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const name = consumeName("event", obj);
        const inputs = consumeParams(obj, true);
        const anonymous = !!consumeKeywords(obj, setify(["anonymous"])).has("anonymous");
        consumeEoi(obj);
        return new _EventFragment(_guard3, name, inputs, anonymous);
      }
      return new _EventFragment(_guard3, obj.name, obj.inputs ? obj.inputs.map((p3) => ParamType.from(p3, true)) : [], !!obj.anonymous);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is an
     *  **EventFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === EventFragmentInternal;
    }
  };
  var ConstructorFragment = class _ConstructorFragment extends Fragment {
    /**
     *  @private
     */
    constructor(guard, type, inputs, payable, gas) {
      super(guard, type, inputs);
      /**
       *  Whether the constructor can receive an endowment.
       */
      __publicField(this, "payable");
      /**
       *  The recommended gas limit for deployment or ``null``.
       */
      __publicField(this, "gas");
      Object.defineProperty(this, internal, { value: ConstructorFragmentInternal });
      defineProperties(this, { payable, gas });
    }
    /**
     *  Returns a string representation of this constructor as %%format%%.
     */
    format(format) {
      assert(format != null && format !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" });
      if (format === "json") {
        return JSON.stringify({
          type: "constructor",
          stateMutability: this.payable ? "payable" : "undefined",
          payable: this.payable,
          gas: this.gas != null ? this.gas : void 0,
          inputs: this.inputs.map((i5) => JSON.parse(i5.format(format)))
        });
      }
      const result = [`constructor${joinParams(format, this.inputs)}`];
      if (this.payable) {
        result.push("payable");
      }
      if (this.gas != null) {
        result.push(`@${this.gas.toString()}`);
      }
      return result.join(" ");
    }
    /**
     *  Returns a new **ConstructorFragment** for %%obj%%.
     */
    static from(obj) {
      if (_ConstructorFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _ConstructorFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid constuctor fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        consumeKeywords(obj, setify(["constructor"]));
        const inputs = consumeParams(obj);
        const payable = !!consumeKeywords(obj, KwVisibDeploy).has("payable");
        const gas = consumeGas(obj);
        consumeEoi(obj);
        return new _ConstructorFragment(_guard3, "constructor", inputs, payable, gas);
      }
      return new _ConstructorFragment(_guard3, "constructor", obj.inputs ? obj.inputs.map(ParamType.from) : [], !!obj.payable, obj.gas != null ? obj.gas : null);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **ConstructorFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === ConstructorFragmentInternal;
    }
  };
  var FallbackFragment = class _FallbackFragment extends Fragment {
    constructor(guard, inputs, payable) {
      super(guard, "fallback", inputs);
      /**
       *  If the function can be sent value during invocation.
       */
      __publicField(this, "payable");
      Object.defineProperty(this, internal, { value: FallbackFragmentInternal });
      defineProperties(this, { payable });
    }
    /**
     *  Returns a string representation of this fallback as %%format%%.
     */
    format(format) {
      const type = this.inputs.length === 0 ? "receive" : "fallback";
      if (format === "json") {
        const stateMutability = this.payable ? "payable" : "nonpayable";
        return JSON.stringify({ type, stateMutability });
      }
      return `${type}()${this.payable ? " payable" : ""}`;
    }
    /**
     *  Returns a new **FallbackFragment** for %%obj%%.
     */
    static from(obj) {
      if (_FallbackFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _FallbackFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid fallback fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const errorObj = obj.toString();
        const topIsValid = obj.peekKeyword(setify(["fallback", "receive"]));
        assertArgument(topIsValid, "type must be fallback or receive", "obj", errorObj);
        const type = obj.popKeyword(setify(["fallback", "receive"]));
        if (type === "receive") {
          const inputs2 = consumeParams(obj);
          assertArgument(inputs2.length === 0, `receive cannot have arguments`, "obj.inputs", inputs2);
          consumeKeywords(obj, setify(["payable"]));
          consumeEoi(obj);
          return new _FallbackFragment(_guard3, [], true);
        }
        let inputs = consumeParams(obj);
        if (inputs.length) {
          assertArgument(inputs.length === 1 && inputs[0].type === "bytes", "invalid fallback inputs", "obj.inputs", inputs.map((i5) => i5.format("minimal")).join(", "));
        } else {
          inputs = [ParamType.from("bytes")];
        }
        const mutability = consumeMutability(obj);
        assertArgument(mutability === "nonpayable" || mutability === "payable", "fallback cannot be constants", "obj.stateMutability", mutability);
        if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
          const outputs = consumeParams(obj);
          assertArgument(outputs.length === 1 && outputs[0].type === "bytes", "invalid fallback outputs", "obj.outputs", outputs.map((i5) => i5.format("minimal")).join(", "));
        }
        consumeEoi(obj);
        return new _FallbackFragment(_guard3, inputs, mutability === "payable");
      }
      if (obj.type === "receive") {
        return new _FallbackFragment(_guard3, [], true);
      }
      if (obj.type === "fallback") {
        const inputs = [ParamType.from("bytes")];
        const payable = obj.stateMutability === "payable";
        return new _FallbackFragment(_guard3, inputs, payable);
      }
      assertArgument(false, "invalid fallback description", "obj", obj);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **FallbackFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === FallbackFragmentInternal;
    }
  };
  var FunctionFragment = class _FunctionFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, stateMutability, inputs, outputs, gas) {
      super(guard, "function", name, inputs);
      /**
       *  If the function is constant (e.g. ``pure`` or ``view`` functions).
       */
      __publicField(this, "constant");
      /**
       *  The returned types for the result of calling this function.
       */
      __publicField(this, "outputs");
      /**
       *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
       *  or ``pure``)
       */
      __publicField(this, "stateMutability");
      /**
       *  If the function can be sent value during invocation.
       */
      __publicField(this, "payable");
      /**
       *  The recommended gas limit to send when calling this function.
       */
      __publicField(this, "gas");
      Object.defineProperty(this, internal, { value: FunctionFragmentInternal });
      outputs = Object.freeze(outputs.slice());
      const constant = stateMutability === "view" || stateMutability === "pure";
      const payable = stateMutability === "payable";
      defineProperties(this, { constant, gas, outputs, payable, stateMutability });
    }
    /**
     *  The Function selector.
     */
    get selector() {
      return id(this.format("sighash")).substring(0, 10);
    }
    /**
     *  Returns a string representation of this function as %%format%%.
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        return JSON.stringify({
          type: "function",
          name: this.name,
          constant: this.constant,
          stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
          payable: this.payable,
          gas: this.gas != null ? this.gas : void 0,
          inputs: this.inputs.map((i5) => JSON.parse(i5.format(format))),
          outputs: this.outputs.map((o5) => JSON.parse(o5.format(format)))
        });
      }
      const result = [];
      if (format !== "sighash") {
        result.push("function");
      }
      result.push(this.name + joinParams(format, this.inputs));
      if (format !== "sighash") {
        if (this.stateMutability !== "nonpayable") {
          result.push(this.stateMutability);
        }
        if (this.outputs && this.outputs.length) {
          result.push("returns");
          result.push(joinParams(format, this.outputs));
        }
        if (this.gas != null) {
          result.push(`@${this.gas.toString()}`);
        }
      }
      return result.join(" ");
    }
    /**
     *  Return the selector for a function with %%name%% and %%params%%.
     */
    static getSelector(name, params) {
      params = (params || []).map((p3) => ParamType.from(p3));
      const fragment = new _FunctionFragment(_guard3, name, "view", params, [], null);
      return fragment.selector;
    }
    /**
     *  Returns a new **FunctionFragment** for %%obj%%.
     */
    static from(obj) {
      if (_FunctionFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _FunctionFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid function fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const name = consumeName("function", obj);
        const inputs = consumeParams(obj);
        const mutability = consumeMutability(obj);
        let outputs = [];
        if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
          outputs = consumeParams(obj);
        }
        const gas = consumeGas(obj);
        consumeEoi(obj);
        return new _FunctionFragment(_guard3, name, mutability, inputs, outputs, gas);
      }
      let stateMutability = obj.stateMutability;
      if (stateMutability == null) {
        stateMutability = "payable";
        if (typeof obj.constant === "boolean") {
          stateMutability = "view";
          if (!obj.constant) {
            stateMutability = "payable";
            if (typeof obj.payable === "boolean" && !obj.payable) {
              stateMutability = "nonpayable";
            }
          }
        } else if (typeof obj.payable === "boolean" && !obj.payable) {
          stateMutability = "nonpayable";
        }
      }
      return new _FunctionFragment(_guard3, obj.name, stateMutability, obj.inputs ? obj.inputs.map(ParamType.from) : [], obj.outputs ? obj.outputs.map(ParamType.from) : [], obj.gas != null ? obj.gas : null);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **FunctionFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === FunctionFragmentInternal;
    }
  };
  var StructFragment = class _StructFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, inputs) {
      super(guard, "struct", name, inputs);
      Object.defineProperty(this, internal, { value: StructFragmentInternal });
    }
    /**
     *  Returns a string representation of this struct as %%format%%.
     */
    format() {
      throw new Error("@TODO");
    }
    /**
     *  Returns a new **StructFragment** for %%obj%%.
     */
    static from(obj) {
      if (typeof obj === "string") {
        try {
          return _StructFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid struct fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const name = consumeName("struct", obj);
        const inputs = consumeParams(obj);
        consumeEoi(obj);
        return new _StructFragment(_guard3, name, inputs);
      }
      return new _StructFragment(_guard3, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
    }
    // @TODO: fix this return type
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **StructFragment**.
     */
    static isFragment(value) {
      return value && value[internal] === StructFragmentInternal;
    }
  };

  // node_modules/ethers/lib.esm/abi/abi-coder.js
  var PanicReasons = /* @__PURE__ */ new Map();
  PanicReasons.set(0, "GENERIC_PANIC");
  PanicReasons.set(1, "ASSERT_FALSE");
  PanicReasons.set(17, "OVERFLOW");
  PanicReasons.set(18, "DIVIDE_BY_ZERO");
  PanicReasons.set(33, "ENUM_RANGE_ERROR");
  PanicReasons.set(34, "BAD_STORAGE_DATA");
  PanicReasons.set(49, "STACK_UNDERFLOW");
  PanicReasons.set(50, "ARRAY_RANGE_ERROR");
  PanicReasons.set(65, "OUT_OF_MEMORY");
  PanicReasons.set(81, "UNINITIALIZED_FUNCTION_CALL");
  var paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
  var paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
  var defaultCoder = null;
  var defaultMaxInflation = 1024;
  function getBuiltinCallException(action, tx, data, abiCoder) {
    let message = "missing revert data";
    let reason = null;
    const invocation = null;
    let revert = null;
    if (data) {
      message = "execution reverted";
      const bytes2 = getBytes(data);
      data = hexlify(data);
      if (bytes2.length === 0) {
        message += " (no data present; likely require(false) occurred";
        reason = "require(false)";
      } else if (bytes2.length % 32 !== 4) {
        message += " (could not decode reason; invalid data length)";
      } else if (hexlify(bytes2.slice(0, 4)) === "0x08c379a0") {
        try {
          reason = abiCoder.decode(["string"], bytes2.slice(4))[0];
          revert = {
            signature: "Error(string)",
            name: "Error",
            args: [reason]
          };
          message += `: ${JSON.stringify(reason)}`;
        } catch (error) {
          message += " (could not decode reason; invalid string data)";
        }
      } else if (hexlify(bytes2.slice(0, 4)) === "0x4e487b71") {
        try {
          const code = Number(abiCoder.decode(["uint256"], bytes2.slice(4))[0]);
          revert = {
            signature: "Panic(uint256)",
            name: "Panic",
            args: [code]
          };
          reason = `Panic due to ${PanicReasons.get(code) || "UNKNOWN"}(${code})`;
          message += `: ${reason}`;
        } catch (error) {
          message += " (could not decode panic code)";
        }
      } else {
        message += " (unknown custom error)";
      }
    }
    const transaction = {
      to: tx.to ? getAddress(tx.to) : null,
      data: tx.data || "0x"
    };
    if (tx.from) {
      transaction.from = getAddress(tx.from);
    }
    return makeError(message, "CALL_EXCEPTION", {
      action,
      data,
      reason,
      transaction,
      invocation,
      revert
    });
  }
  var _AbiCoder_instances, getCoder_fn;
  var _AbiCoder = class _AbiCoder {
    constructor() {
      __privateAdd(this, _AbiCoder_instances);
    }
    /**
     *  Get the default values for the given %%types%%.
     *
     *  For example, a ``uint`` is by default ``0`` and ``bool``
     *  is by default ``false``.
     */
    getDefaultValue(types) {
      const coders = types.map((type) => __privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, ParamType.from(type)));
      const coder = new TupleCoder(coders, "_");
      return coder.defaultValue();
    }
    /**
     *  Encode the %%values%% as the %%types%% into ABI data.
     *
     *  @returns DataHexstring
     */
    encode(types, values) {
      assertArgumentCount(values.length, types.length, "types/values length mismatch");
      const coders = types.map((type) => __privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, ParamType.from(type)));
      const coder = new TupleCoder(coders, "_");
      const writer = new Writer();
      coder.encode(writer, values);
      return writer.data;
    }
    /**
     *  Decode the ABI %%data%% as the %%types%% into values.
     *
     *  If %%loose%% decoding is enabled, then strict padding is
     *  not enforced. Some older versions of Solidity incorrectly
     *  padded event data emitted from ``external`` functions.
     */
    decode(types, data, loose) {
      const coders = types.map((type) => __privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, ParamType.from(type)));
      const coder = new TupleCoder(coders, "_");
      return coder.decode(new Reader(data, loose, defaultMaxInflation));
    }
    static _setDefaultMaxInflation(value) {
      assertArgument(typeof value === "number" && Number.isInteger(value), "invalid defaultMaxInflation factor", "value", value);
      defaultMaxInflation = value;
    }
    /**
     *  Returns the shared singleton instance of a default [[AbiCoder]].
     *
     *  On the first call, the instance is created internally.
     */
    static defaultAbiCoder() {
      if (defaultCoder == null) {
        defaultCoder = new _AbiCoder();
      }
      return defaultCoder;
    }
    /**
     *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
     *  result %%data%% for the [[CallExceptionAction]] %%action%% against
     *  the Transaction %%tx%%.
     */
    static getBuiltinCallException(action, tx, data) {
      return getBuiltinCallException(action, tx, data, _AbiCoder.defaultAbiCoder());
    }
  };
  _AbiCoder_instances = new WeakSet();
  getCoder_fn = function(param) {
    if (param.isArray()) {
      return new ArrayCoder(__privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, param.arrayChildren), param.arrayLength, param.name);
    }
    if (param.isTuple()) {
      return new TupleCoder(param.components.map((c4) => __privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, c4)), param.name);
    }
    switch (param.baseType) {
      case "address":
        return new AddressCoder(param.name);
      case "bool":
        return new BooleanCoder(param.name);
      case "string":
        return new StringCoder(param.name);
      case "bytes":
        return new BytesCoder(param.name);
      case "":
        return new NullCoder(param.name);
    }
    let match = param.type.match(paramTypeNumber);
    if (match) {
      let size = parseInt(match[2] || "256");
      assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid " + match[1] + " bit length", "param", param);
      return new NumberCoder(size / 8, match[1] === "int", param.name);
    }
    match = param.type.match(paramTypeBytes);
    if (match) {
      let size = parseInt(match[1]);
      assertArgument(size !== 0 && size <= 32, "invalid bytes length", "param", param);
      return new FixedBytesCoder(size, param.name);
    }
    assertArgument(false, "invalid type", "type", param.type);
  };
  var AbiCoder = _AbiCoder;

  // node_modules/ethers/lib.esm/abi/interface.js
  var LogDescription = class {
    /**
     *  @_ignore:
     */
    constructor(fragment, topic, args) {
      /**
       *  The matching fragment for the ``topic0``.
       */
      __publicField(this, "fragment");
      /**
       *  The name of the Event.
       */
      __publicField(this, "name");
      /**
       *  The full Event signature.
       */
      __publicField(this, "signature");
      /**
       *  The topic hash for the Event.
       */
      __publicField(this, "topic");
      /**
       *  The arguments passed into the Event with ``emit``.
       */
      __publicField(this, "args");
      const name = fragment.name, signature = fragment.format();
      defineProperties(this, {
        fragment,
        name,
        signature,
        topic,
        args
      });
    }
  };
  var TransactionDescription = class {
    /**
     *  @_ignore:
     */
    constructor(fragment, selector, args, value) {
      /**
       *  The matching fragment from the transaction ``data``.
       */
      __publicField(this, "fragment");
      /**
       *  The name of the Function from the transaction ``data``.
       */
      __publicField(this, "name");
      /**
       *  The arguments passed to the Function from the transaction ``data``.
       */
      __publicField(this, "args");
      /**
       *  The full Function signature from the transaction ``data``.
       */
      __publicField(this, "signature");
      /**
       *  The selector for the Function from the transaction ``data``.
       */
      __publicField(this, "selector");
      /**
       *  The ``value`` (in wei) from the transaction.
       */
      __publicField(this, "value");
      const name = fragment.name, signature = fragment.format();
      defineProperties(this, {
        fragment,
        name,
        args,
        signature,
        selector,
        value
      });
    }
  };
  var ErrorDescription = class {
    /**
     *  @_ignore:
     */
    constructor(fragment, selector, args) {
      /**
       *  The matching fragment.
       */
      __publicField(this, "fragment");
      /**
       *  The name of the Error.
       */
      __publicField(this, "name");
      /**
       *  The arguments passed to the Error with ``revert``.
       */
      __publicField(this, "args");
      /**
       *  The full Error signature.
       */
      __publicField(this, "signature");
      /**
       *  The selector for the Error.
       */
      __publicField(this, "selector");
      const name = fragment.name, signature = fragment.format();
      defineProperties(this, {
        fragment,
        name,
        args,
        signature,
        selector
      });
    }
  };
  var Indexed = class {
    /**
     *  @_ignore:
     */
    constructor(hash2) {
      /**
       *  The ``keccak256`` of the value logged.
       */
      __publicField(this, "hash");
      /**
       *  @_ignore:
       */
      __publicField(this, "_isIndexed");
      defineProperties(this, { hash: hash2, _isIndexed: true });
    }
    /**
     *  Returns ``true`` if %%value%% is an **Indexed**.
     *
     *  This provides a Type Guard for property access.
     */
    static isIndexed(value) {
      return !!(value && value._isIndexed);
    }
  };
  var PanicReasons2 = {
    "0": "generic panic",
    "1": "assert(false)",
    "17": "arithmetic overflow",
    "18": "division or modulo by zero",
    "33": "enum overflow",
    "34": "invalid encoded storage byte array accessed",
    "49": "out-of-bounds array access; popping on an empty array",
    "50": "out-of-bounds access of an array or bytesN",
    "65": "out of memory",
    "81": "uninitialized function"
  };
  var BuiltinErrors = {
    "0x08c379a0": {
      signature: "Error(string)",
      name: "Error",
      inputs: ["string"],
      reason: (message) => {
        return `reverted with reason string ${JSON.stringify(message)}`;
      }
    },
    "0x4e487b71": {
      signature: "Panic(uint256)",
      name: "Panic",
      inputs: ["uint256"],
      reason: (code) => {
        let reason = "unknown panic code";
        if (code >= 0 && code <= 255 && PanicReasons2[code.toString()]) {
          reason = PanicReasons2[code.toString()];
        }
        return `reverted with panic code 0x${code.toString(16)} (${reason})`;
      }
    }
  };
  var _errors, _events, _functions, _abiCoder, _Interface_instances, getFunction_fn, getEvent_fn;
  var _Interface = class _Interface {
    /**
     *  Create a new Interface for the %%fragments%%.
     */
    constructor(fragments) {
      __privateAdd(this, _Interface_instances);
      /**
       *  All the Contract ABI members (i.e. methods, events, errors, etc).
       */
      __publicField(this, "fragments");
      /**
       *  The Contract constructor.
       */
      __publicField(this, "deploy");
      /**
       *  The Fallback method, if any.
       */
      __publicField(this, "fallback");
      /**
       *  If receiving ether is supported.
       */
      __publicField(this, "receive");
      __privateAdd(this, _errors);
      __privateAdd(this, _events);
      __privateAdd(this, _functions);
      //    #structs: Map<string, StructFragment>;
      __privateAdd(this, _abiCoder);
      let abi = [];
      if (typeof fragments === "string") {
        abi = JSON.parse(fragments);
      } else {
        abi = fragments;
      }
      __privateSet(this, _functions, /* @__PURE__ */ new Map());
      __privateSet(this, _errors, /* @__PURE__ */ new Map());
      __privateSet(this, _events, /* @__PURE__ */ new Map());
      const frags = [];
      for (const a3 of abi) {
        try {
          frags.push(Fragment.from(a3));
        } catch (error) {
          console.log(`[Warning] Invalid Fragment ${JSON.stringify(a3)}:`, error.message);
        }
      }
      defineProperties(this, {
        fragments: Object.freeze(frags)
      });
      let fallback = null;
      let receive = false;
      __privateSet(this, _abiCoder, this.getAbiCoder());
      this.fragments.forEach((fragment, index) => {
        let bucket;
        switch (fragment.type) {
          case "constructor":
            if (this.deploy) {
              console.log("duplicate definition - constructor");
              return;
            }
            defineProperties(this, { deploy: fragment });
            return;
          case "fallback":
            if (fragment.inputs.length === 0) {
              receive = true;
            } else {
              assertArgument(!fallback || fragment.payable !== fallback.payable, "conflicting fallback fragments", `fragments[${index}]`, fragment);
              fallback = fragment;
              receive = fallback.payable;
            }
            return;
          case "function":
            bucket = __privateGet(this, _functions);
            break;
          case "event":
            bucket = __privateGet(this, _events);
            break;
          case "error":
            bucket = __privateGet(this, _errors);
            break;
          default:
            return;
        }
        const signature = fragment.format();
        if (bucket.has(signature)) {
          return;
        }
        bucket.set(signature, fragment);
      });
      if (!this.deploy) {
        defineProperties(this, {
          deploy: ConstructorFragment.from("constructor()")
        });
      }
      defineProperties(this, { fallback, receive });
    }
    /**
     *  Returns the entire Human-Readable ABI, as an array of
     *  signatures, optionally as %%minimal%% strings, which
     *  removes parameter names and unneceesary spaces.
     */
    format(minimal) {
      const format = minimal ? "minimal" : "full";
      const abi = this.fragments.map((f3) => f3.format(format));
      return abi;
    }
    /**
     *  Return the JSON-encoded ABI. This is the format Solidiy
     *  returns.
     */
    formatJson() {
      const abi = this.fragments.map((f3) => f3.format("json"));
      return JSON.stringify(abi.map((j2) => JSON.parse(j2)));
    }
    /**
     *  The ABI coder that will be used to encode and decode binary
     *  data.
     */
    getAbiCoder() {
      return AbiCoder.defaultAbiCoder();
    }
    /**
     *  Get the function name for %%key%%, which may be a function selector,
     *  function name or function signature that belongs to the ABI.
     */
    getFunctionName(key) {
      const fragment = __privateMethod(this, _Interface_instances, getFunction_fn).call(this, key, null, false);
      assertArgument(fragment, "no matching function", "key", key);
      return fragment.name;
    }
    /**
     *  Returns true if %%key%% (a function selector, function name or
     *  function signature) is present in the ABI.
     *
     *  In the case of a function name, the name may be ambiguous, so
     *  accessing the [[FunctionFragment]] may require refinement.
     */
    hasFunction(key) {
      return !!__privateMethod(this, _Interface_instances, getFunction_fn).call(this, key, null, false);
    }
    /**
     *  Get the [[FunctionFragment]] for %%key%%, which may be a function
     *  selector, function name or function signature that belongs to the ABI.
     *
     *  If %%values%% is provided, it will use the Typed API to handle
     *  ambiguous cases where multiple functions match by name.
     *
     *  If the %%key%% and %%values%% do not refine to a single function in
     *  the ABI, this will throw.
     */
    getFunction(key, values) {
      return __privateMethod(this, _Interface_instances, getFunction_fn).call(this, key, values || null, true);
    }
    /**
     *  Iterate over all functions, calling %%callback%%, sorted by their name.
     */
    forEachFunction(callback) {
      const names = Array.from(__privateGet(this, _functions).keys());
      names.sort((a3, b4) => a3.localeCompare(b4));
      for (let i5 = 0; i5 < names.length; i5++) {
        const name = names[i5];
        callback(__privateGet(this, _functions).get(name), i5);
      }
    }
    /**
     *  Get the event name for %%key%%, which may be a topic hash,
     *  event name or event signature that belongs to the ABI.
     */
    getEventName(key) {
      const fragment = __privateMethod(this, _Interface_instances, getEvent_fn).call(this, key, null, false);
      assertArgument(fragment, "no matching event", "key", key);
      return fragment.name;
    }
    /**
     *  Returns true if %%key%% (an event topic hash, event name or
     *  event signature) is present in the ABI.
     *
     *  In the case of an event name, the name may be ambiguous, so
     *  accessing the [[EventFragment]] may require refinement.
     */
    hasEvent(key) {
      return !!__privateMethod(this, _Interface_instances, getEvent_fn).call(this, key, null, false);
    }
    /**
     *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
     *  event name or event signature that belongs to the ABI.
     *
     *  If %%values%% is provided, it will use the Typed API to handle
     *  ambiguous cases where multiple events match by name.
     *
     *  If the %%key%% and %%values%% do not refine to a single event in
     *  the ABI, this will throw.
     */
    getEvent(key, values) {
      return __privateMethod(this, _Interface_instances, getEvent_fn).call(this, key, values || null, true);
    }
    /**
     *  Iterate over all events, calling %%callback%%, sorted by their name.
     */
    forEachEvent(callback) {
      const names = Array.from(__privateGet(this, _events).keys());
      names.sort((a3, b4) => a3.localeCompare(b4));
      for (let i5 = 0; i5 < names.length; i5++) {
        const name = names[i5];
        callback(__privateGet(this, _events).get(name), i5);
      }
    }
    /**
     *  Get the [[ErrorFragment]] for %%key%%, which may be an error
     *  selector, error name or error signature that belongs to the ABI.
     *
     *  If %%values%% is provided, it will use the Typed API to handle
     *  ambiguous cases where multiple errors match by name.
     *
     *  If the %%key%% and %%values%% do not refine to a single error in
     *  the ABI, this will throw.
     */
    getError(key, values) {
      if (isHexString(key)) {
        const selector = key.toLowerCase();
        if (BuiltinErrors[selector]) {
          return ErrorFragment.from(BuiltinErrors[selector].signature);
        }
        for (const fragment of __privateGet(this, _errors).values()) {
          if (selector === fragment.selector) {
            return fragment;
          }
        }
        return null;
      }
      if (key.indexOf("(") === -1) {
        const matching = [];
        for (const [name, fragment] of __privateGet(this, _errors)) {
          if (name.split(
            "("
            /* fix:) */
          )[0] === key) {
            matching.push(fragment);
          }
        }
        if (matching.length === 0) {
          if (key === "Error") {
            return ErrorFragment.from("error Error(string)");
          }
          if (key === "Panic") {
            return ErrorFragment.from("error Panic(uint256)");
          }
          return null;
        } else if (matching.length > 1) {
          const matchStr = matching.map((m2) => JSON.stringify(m2.format())).join(", ");
          assertArgument(false, `ambiguous error description (i.e. ${matchStr})`, "name", key);
        }
        return matching[0];
      }
      key = ErrorFragment.from(key).format();
      if (key === "Error(string)") {
        return ErrorFragment.from("error Error(string)");
      }
      if (key === "Panic(uint256)") {
        return ErrorFragment.from("error Panic(uint256)");
      }
      const result = __privateGet(this, _errors).get(key);
      if (result) {
        return result;
      }
      return null;
    }
    /**
     *  Iterate over all errors, calling %%callback%%, sorted by their name.
     */
    forEachError(callback) {
      const names = Array.from(__privateGet(this, _errors).keys());
      names.sort((a3, b4) => a3.localeCompare(b4));
      for (let i5 = 0; i5 < names.length; i5++) {
        const name = names[i5];
        callback(__privateGet(this, _errors).get(name), i5);
      }
    }
    // Get the 4-byte selector used by Solidity to identify a function
    /*
    getSelector(fragment: ErrorFragment | FunctionFragment): string {
        if (typeof(fragment) === "string") {
            const matches: Array<Fragment> = [ ];
    
            try { matches.push(this.getFunction(fragment)); } catch (error) { }
            try { matches.push(this.getError(<string>fragment)); } catch (_) { }
    
            if (matches.length === 0) {
                logger.throwArgumentError("unknown fragment", "key", fragment);
            } else if (matches.length > 1) {
                logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
            }
    
            fragment = matches[0];
        }
    
        return dataSlice(id(fragment.format()), 0, 4);
    }
        */
    // Get the 32-byte topic hash used by Solidity to identify an event
    /*
    getEventTopic(fragment: EventFragment): string {
        //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
        return id(fragment.format());
    }
    */
    _decodeParams(params, data) {
      return __privateGet(this, _abiCoder).decode(params, data);
    }
    _encodeParams(params, values) {
      return __privateGet(this, _abiCoder).encode(params, values);
    }
    /**
     *  Encodes a ``tx.data`` object for deploying the Contract with
     *  the %%values%% as the constructor arguments.
     */
    encodeDeploy(values) {
      return this._encodeParams(this.deploy.inputs, values || []);
    }
    /**
     *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
     *  specified error (see [[getError]] for valid values for
     *  %%key%%).
     *
     *  Most developers should prefer the [[parseCallResult]] method instead,
     *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
     *  corresponding error.
     */
    decodeErrorResult(fragment, data) {
      if (typeof fragment === "string") {
        const f3 = this.getError(fragment);
        assertArgument(f3, "unknown error", "fragment", fragment);
        fragment = f3;
      }
      assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match error ${fragment.name}.`, "data", data);
      return this._decodeParams(fragment.inputs, dataSlice(data, 4));
    }
    /**
     *  Encodes the transaction revert data for a call result that
     *  reverted from the the Contract with the sepcified %%error%%
     *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
     *
     *  This is generally not used by most developers, unless trying to mock
     *  a result from a Contract.
     */
    encodeErrorResult(fragment, values) {
      if (typeof fragment === "string") {
        const f3 = this.getError(fragment);
        assertArgument(f3, "unknown error", "fragment", fragment);
        fragment = f3;
      }
      return concat([
        fragment.selector,
        this._encodeParams(fragment.inputs, values || [])
      ]);
    }
    /**
     *  Decodes the %%data%% from a transaction ``tx.data`` for
     *  the function specified (see [[getFunction]] for valid values
     *  for %%fragment%%).
     *
     *  Most developers should prefer the [[parseTransaction]] method
     *  instead, which will automatically detect the fragment.
     */
    decodeFunctionData(fragment, data) {
      if (typeof fragment === "string") {
        const f3 = this.getFunction(fragment);
        assertArgument(f3, "unknown function", "fragment", fragment);
        fragment = f3;
      }
      assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match function ${fragment.name}.`, "data", data);
      return this._decodeParams(fragment.inputs, dataSlice(data, 4));
    }
    /**
     *  Encodes the ``tx.data`` for a transaction that calls the function
     *  specified (see [[getFunction]] for valid values for %%fragment%%) with
     *  the %%values%%.
     */
    encodeFunctionData(fragment, values) {
      if (typeof fragment === "string") {
        const f3 = this.getFunction(fragment);
        assertArgument(f3, "unknown function", "fragment", fragment);
        fragment = f3;
      }
      return concat([
        fragment.selector,
        this._encodeParams(fragment.inputs, values || [])
      ]);
    }
    /**
     *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
     *  specified function (see [[getFunction]] for valid values for
     *  %%key%%).
     *
     *  Most developers should prefer the [[parseCallResult]] method instead,
     *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
     *  corresponding error.
     */
    decodeFunctionResult(fragment, data) {
      if (typeof fragment === "string") {
        const f3 = this.getFunction(fragment);
        assertArgument(f3, "unknown function", "fragment", fragment);
        fragment = f3;
      }
      let message = "invalid length for result data";
      const bytes2 = getBytesCopy(data);
      if (bytes2.length % 32 === 0) {
        try {
          return __privateGet(this, _abiCoder).decode(fragment.outputs, bytes2);
        } catch (error) {
          message = "could not decode result data";
        }
      }
      assert(false, message, "BAD_DATA", {
        value: hexlify(bytes2),
        info: { method: fragment.name, signature: fragment.format() }
      });
    }
    makeError(_data4, tx) {
      const data = getBytes(_data4, "data");
      const error = AbiCoder.getBuiltinCallException("call", tx, data);
      const customPrefix = "execution reverted (unknown custom error)";
      if (error.message.startsWith(customPrefix)) {
        const selector = hexlify(data.slice(0, 4));
        const ef = this.getError(selector);
        if (ef) {
          try {
            const args = __privateGet(this, _abiCoder).decode(ef.inputs, data.slice(4));
            error.revert = {
              name: ef.name,
              signature: ef.format(),
              args
            };
            error.reason = error.revert.signature;
            error.message = `execution reverted: ${error.reason}`;
          } catch (e4) {
            error.message = `execution reverted (coult not decode custom error)`;
          }
        }
      }
      const parsed = this.parseTransaction(tx);
      if (parsed) {
        error.invocation = {
          method: parsed.name,
          signature: parsed.signature,
          args: parsed.args
        };
      }
      return error;
    }
    /**
     *  Encodes the result data (e.g. from an ``eth_call``) for the
     *  specified function (see [[getFunction]] for valid values
     *  for %%fragment%%) with %%values%%.
     *
     *  This is generally not used by most developers, unless trying to mock
     *  a result from a Contract.
     */
    encodeFunctionResult(fragment, values) {
      if (typeof fragment === "string") {
        const f3 = this.getFunction(fragment);
        assertArgument(f3, "unknown function", "fragment", fragment);
        fragment = f3;
      }
      return hexlify(__privateGet(this, _abiCoder).encode(fragment.outputs, values || []));
    }
    /*
        spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
            const promises: Array<Promise<>> = [ ];
            const process = function(type: ParamType, value: any): any {
                if (type.baseType === "array") {
                    return descend(type.child
                }
                if (type. === "address") {
                }
            };
    
            const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
                if (inputs.length !== values.length) { throw new Error("length mismatch"); }
                
            };
    
            const result: Array<any> = [ ];
            values.forEach((value, index) => {
                if (value == null) {
                    topics.push(null);
                } else if (param.baseType === "array" || param.baseType === "tuple") {
                    logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
                } else if (Array.isArray(value)) {
                    topics.push(value.map((value) => encodeTopic(param, value)));
                } else {
                    topics.push(encodeTopic(param, value));
                }
            });
        }
    */
    // Create the filter for the event with search criteria (e.g. for eth_filterLog)
    encodeFilterTopics(fragment, values) {
      if (typeof fragment === "string") {
        const f3 = this.getEvent(fragment);
        assertArgument(f3, "unknown event", "eventFragment", fragment);
        fragment = f3;
      }
      assert(values.length <= fragment.inputs.length, `too many arguments for ${fragment.format()}`, "UNEXPECTED_ARGUMENT", { count: values.length, expectedCount: fragment.inputs.length });
      const topics = [];
      if (!fragment.anonymous) {
        topics.push(fragment.topicHash);
      }
      const encodeTopic = (param, value) => {
        if (param.type === "string") {
          return id(value);
        } else if (param.type === "bytes") {
          return keccak256(hexlify(value));
        }
        if (param.type === "bool" && typeof value === "boolean") {
          value = value ? "0x01" : "0x00";
        } else if (param.type.match(/^u?int/)) {
          value = toBeHex(value);
        } else if (param.type.match(/^bytes/)) {
          value = zeroPadBytes(value, 32);
        } else if (param.type === "address") {
          __privateGet(this, _abiCoder).encode(["address"], [value]);
        }
        return zeroPadValue(hexlify(value), 32);
      };
      values.forEach((value, index) => {
        const param = fragment.inputs[index];
        if (!param.indexed) {
          assertArgument(value == null, "cannot filter non-indexed parameters; must be null", "contract." + param.name, value);
          return;
        }
        if (value == null) {
          topics.push(null);
        } else if (param.baseType === "array" || param.baseType === "tuple") {
          assertArgument(false, "filtering with tuples or arrays not supported", "contract." + param.name, value);
        } else if (Array.isArray(value)) {
          topics.push(value.map((value2) => encodeTopic(param, value2)));
        } else {
          topics.push(encodeTopic(param, value));
        }
      });
      while (topics.length && topics[topics.length - 1] === null) {
        topics.pop();
      }
      return topics;
    }
    encodeEventLog(fragment, values) {
      if (typeof fragment === "string") {
        const f3 = this.getEvent(fragment);
        assertArgument(f3, "unknown event", "eventFragment", fragment);
        fragment = f3;
      }
      const topics = [];
      const dataTypes = [];
      const dataValues = [];
      if (!fragment.anonymous) {
        topics.push(fragment.topicHash);
      }
      assertArgument(values.length === fragment.inputs.length, "event arguments/values mismatch", "values", values);
      fragment.inputs.forEach((param, index) => {
        const value = values[index];
        if (param.indexed) {
          if (param.type === "string") {
            topics.push(id(value));
          } else if (param.type === "bytes") {
            topics.push(keccak256(value));
          } else if (param.baseType === "tuple" || param.baseType === "array") {
            throw new Error("not implemented");
          } else {
            topics.push(__privateGet(this, _abiCoder).encode([param.type], [value]));
          }
        } else {
          dataTypes.push(param);
          dataValues.push(value);
        }
      });
      return {
        data: __privateGet(this, _abiCoder).encode(dataTypes, dataValues),
        topics
      };
    }
    // Decode a filter for the event and the search criteria
    decodeEventLog(fragment, data, topics) {
      if (typeof fragment === "string") {
        const f3 = this.getEvent(fragment);
        assertArgument(f3, "unknown event", "eventFragment", fragment);
        fragment = f3;
      }
      if (topics != null && !fragment.anonymous) {
        const eventTopic = fragment.topicHash;
        assertArgument(isHexString(topics[0], 32) && topics[0].toLowerCase() === eventTopic, "fragment/topic mismatch", "topics[0]", topics[0]);
        topics = topics.slice(1);
      }
      const indexed = [];
      const nonIndexed = [];
      const dynamic = [];
      fragment.inputs.forEach((param, index) => {
        if (param.indexed) {
          if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
            indexed.push(ParamType.from({ type: "bytes32", name: param.name }));
            dynamic.push(true);
          } else {
            indexed.push(param);
            dynamic.push(false);
          }
        } else {
          nonIndexed.push(param);
          dynamic.push(false);
        }
      });
      const resultIndexed = topics != null ? __privateGet(this, _abiCoder).decode(indexed, concat(topics)) : null;
      const resultNonIndexed = __privateGet(this, _abiCoder).decode(nonIndexed, data, true);
      const values = [];
      const keys = [];
      let nonIndexedIndex = 0, indexedIndex = 0;
      fragment.inputs.forEach((param, index) => {
        let value = null;
        if (param.indexed) {
          if (resultIndexed == null) {
            value = new Indexed(null);
          } else if (dynamic[index]) {
            value = new Indexed(resultIndexed[indexedIndex++]);
          } else {
            try {
              value = resultIndexed[indexedIndex++];
            } catch (error) {
              value = error;
            }
          }
        } else {
          try {
            value = resultNonIndexed[nonIndexedIndex++];
          } catch (error) {
            value = error;
          }
        }
        values.push(value);
        keys.push(param.name || null);
      });
      return Result.fromItems(values, keys);
    }
    /**
     *  Parses a transaction, finding the matching function and extracts
     *  the parameter values along with other useful function details.
     *
     *  If the matching function cannot be found, return null.
     */
    parseTransaction(tx) {
      const data = getBytes(tx.data, "tx.data");
      const value = getBigInt(tx.value != null ? tx.value : 0, "tx.value");
      const fragment = this.getFunction(hexlify(data.slice(0, 4)));
      if (!fragment) {
        return null;
      }
      const args = __privateGet(this, _abiCoder).decode(fragment.inputs, data.slice(4));
      return new TransactionDescription(fragment, fragment.selector, args, value);
    }
    parseCallResult(data) {
      throw new Error("@TODO");
    }
    /**
     *  Parses a receipt log, finding the matching event and extracts
     *  the parameter values along with other useful event details.
     *
     *  If the matching event cannot be found, returns null.
     */
    parseLog(log) {
      const fragment = this.getEvent(log.topics[0]);
      if (!fragment || fragment.anonymous) {
        return null;
      }
      return new LogDescription(fragment, fragment.topicHash, this.decodeEventLog(fragment, log.data, log.topics));
    }
    /**
     *  Parses a revert data, finding the matching error and extracts
     *  the parameter values along with other useful error details.
     *
     *  If the matching error cannot be found, returns null.
     */
    parseError(data) {
      const hexData = hexlify(data);
      const fragment = this.getError(dataSlice(hexData, 0, 4));
      if (!fragment) {
        return null;
      }
      const args = __privateGet(this, _abiCoder).decode(fragment.inputs, dataSlice(hexData, 4));
      return new ErrorDescription(fragment, fragment.selector, args);
    }
    /**
     *  Creates a new [[Interface]] from the ABI %%value%%.
     *
     *  The %%value%% may be provided as an existing [[Interface]] object,
     *  a JSON-encoded ABI or any Human-Readable ABI format.
     */
    static from(value) {
      if (value instanceof _Interface) {
        return value;
      }
      if (typeof value === "string") {
        return new _Interface(JSON.parse(value));
      }
      if (typeof value.formatJson === "function") {
        return new _Interface(value.formatJson());
      }
      if (typeof value.format === "function") {
        return new _Interface(value.format("json"));
      }
      return new _Interface(value);
    }
  };
  _errors = new WeakMap();
  _events = new WeakMap();
  _functions = new WeakMap();
  _abiCoder = new WeakMap();
  _Interface_instances = new WeakSet();
  // Find a function definition by any means necessary (unless it is ambiguous)
  getFunction_fn = function(key, values, forceUnique) {
    if (isHexString(key)) {
      const selector = key.toLowerCase();
      for (const fragment of __privateGet(this, _functions).values()) {
        if (selector === fragment.selector) {
          return fragment;
        }
      }
      return null;
    }
    if (key.indexOf("(") === -1) {
      const matching = [];
      for (const [name, fragment] of __privateGet(this, _functions)) {
        if (name.split(
          "("
          /* fix:) */
        )[0] === key) {
          matching.push(fragment);
        }
      }
      if (values) {
        const lastValue = values.length > 0 ? values[values.length - 1] : null;
        let valueLength = values.length;
        let allowOptions = true;
        if (Typed.isTyped(lastValue) && lastValue.type === "overrides") {
          allowOptions = false;
          valueLength--;
        }
        for (let i5 = matching.length - 1; i5 >= 0; i5--) {
          const inputs = matching[i5].inputs.length;
          if (inputs !== valueLength && (!allowOptions || inputs !== valueLength - 1)) {
            matching.splice(i5, 1);
          }
        }
        for (let i5 = matching.length - 1; i5 >= 0; i5--) {
          const inputs = matching[i5].inputs;
          for (let j2 = 0; j2 < values.length; j2++) {
            if (!Typed.isTyped(values[j2])) {
              continue;
            }
            if (j2 >= inputs.length) {
              if (values[j2].type === "overrides") {
                continue;
              }
              matching.splice(i5, 1);
              break;
            }
            if (values[j2].type !== inputs[j2].baseType) {
              matching.splice(i5, 1);
              break;
            }
          }
        }
      }
      if (matching.length === 1 && values && values.length !== matching[0].inputs.length) {
        const lastArg = values[values.length - 1];
        if (lastArg == null || Array.isArray(lastArg) || typeof lastArg !== "object") {
          matching.splice(0, 1);
        }
      }
      if (matching.length === 0) {
        return null;
      }
      if (matching.length > 1 && forceUnique) {
        const matchStr = matching.map((m2) => JSON.stringify(m2.format())).join(", ");
        assertArgument(false, `ambiguous function description (i.e. matches ${matchStr})`, "key", key);
      }
      return matching[0];
    }
    const result = __privateGet(this, _functions).get(FunctionFragment.from(key).format());
    if (result) {
      return result;
    }
    return null;
  };
  // Find an event definition by any means necessary (unless it is ambiguous)
  getEvent_fn = function(key, values, forceUnique) {
    if (isHexString(key)) {
      const eventTopic = key.toLowerCase();
      for (const fragment of __privateGet(this, _events).values()) {
        if (eventTopic === fragment.topicHash) {
          return fragment;
        }
      }
      return null;
    }
    if (key.indexOf("(") === -1) {
      const matching = [];
      for (const [name, fragment] of __privateGet(this, _events)) {
        if (name.split(
          "("
          /* fix:) */
        )[0] === key) {
          matching.push(fragment);
        }
      }
      if (values) {
        for (let i5 = matching.length - 1; i5 >= 0; i5--) {
          if (matching[i5].inputs.length < values.length) {
            matching.splice(i5, 1);
          }
        }
        for (let i5 = matching.length - 1; i5 >= 0; i5--) {
          const inputs = matching[i5].inputs;
          for (let j2 = 0; j2 < values.length; j2++) {
            if (!Typed.isTyped(values[j2])) {
              continue;
            }
            if (values[j2].type !== inputs[j2].baseType) {
              matching.splice(i5, 1);
              break;
            }
          }
        }
      }
      if (matching.length === 0) {
        return null;
      }
      if (matching.length > 1 && forceUnique) {
        const matchStr = matching.map((m2) => JSON.stringify(m2.format())).join(", ");
        assertArgument(false, `ambiguous event description (i.e. matches ${matchStr})`, "key", key);
      }
      return matching[0];
    }
    const result = __privateGet(this, _events).get(EventFragment.from(key).format());
    if (result) {
      return result;
    }
    return null;
  };
  var Interface = _Interface;

  // node_modules/ethers/lib.esm/providers/provider.js
  var BN_08 = BigInt(0);
  function getValue2(value) {
    if (value == null) {
      return null;
    }
    return value;
  }
  function toJson(value) {
    if (value == null) {
      return null;
    }
    return value.toString();
  }
  var FeeData = class {
    /**
     *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
     *  %%maxPriorityFeePerGas%%.
     */
    constructor(gasPrice, maxFeePerGas, maxPriorityFeePerGas) {
      /**
       *  The gas price for legacy networks.
       */
      __publicField(this, "gasPrice");
      /**
       *  The maximum fee to pay per gas.
       *
       *  The base fee per gas is defined by the network and based on
       *  congestion, increasing the cost during times of heavy load
       *  and lowering when less busy.
       *
       *  The actual fee per gas will be the base fee for the block
       *  and the priority fee, up to the max fee per gas.
       *
       *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
       */
      __publicField(this, "maxFeePerGas");
      /**
       *  The additional amout to pay per gas to encourage a validator
       *  to include the transaction.
       *
       *  The purpose of this is to compensate the validator for the
       *  adjusted risk for including a given transaction.
       *
       *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
       */
      __publicField(this, "maxPriorityFeePerGas");
      defineProperties(this, {
        gasPrice: getValue2(gasPrice),
        maxFeePerGas: getValue2(maxFeePerGas),
        maxPriorityFeePerGas: getValue2(maxPriorityFeePerGas)
      });
    }
    /**
     *  Returns a JSON-friendly value.
     */
    toJSON() {
      const { gasPrice, maxFeePerGas, maxPriorityFeePerGas } = this;
      return {
        _type: "FeeData",
        gasPrice: toJson(gasPrice),
        maxFeePerGas: toJson(maxFeePerGas),
        maxPriorityFeePerGas: toJson(maxPriorityFeePerGas)
      };
    }
  };
  function copyRequest(req) {
    const result = {};
    if (req.to) {
      result.to = req.to;
    }
    if (req.from) {
      result.from = req.from;
    }
    if (req.data) {
      result.data = hexlify(req.data);
    }
    const bigIntKeys = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const key of bigIntKeys) {
      if (!(key in req) || req[key] == null) {
        continue;
      }
      result[key] = getBigInt(req[key], `request.${key}`);
    }
    const numberKeys = "type,nonce".split(/,/);
    for (const key of numberKeys) {
      if (!(key in req) || req[key] == null) {
        continue;
      }
      result[key] = getNumber(req[key], `request.${key}`);
    }
    if (req.accessList) {
      result.accessList = accessListify(req.accessList);
    }
    if ("blockTag" in req) {
      result.blockTag = req.blockTag;
    }
    if ("enableCcipRead" in req) {
      result.enableCcipRead = !!req.enableCcipRead;
    }
    if ("customData" in req) {
      result.customData = req.customData;
    }
    if ("blobVersionedHashes" in req && req.blobVersionedHashes) {
      result.blobVersionedHashes = req.blobVersionedHashes.slice();
    }
    if ("kzg" in req) {
      result.kzg = req.kzg;
    }
    if ("blobs" in req && req.blobs) {
      result.blobs = req.blobs.map((b4) => {
        if (isBytesLike(b4)) {
          return hexlify(b4);
        }
        return Object.assign({}, b4);
      });
    }
    return result;
  }
  var _transactions;
  var Block = class {
    /**
     *  Create a new **Block** object.
     *
     *  This should generally not be necessary as the unless implementing a
     *  low-level library.
     */
    constructor(block, provider) {
      /**
       *  The provider connected to the block used to fetch additional details
       *  if necessary.
       */
      __publicField(this, "provider");
      /**
       *  The block number, sometimes called the block height. This is a
       *  sequential number that is one higher than the parent block.
       */
      __publicField(this, "number");
      /**
       *  The block hash.
       *
       *  This hash includes all properties, so can be safely used to identify
       *  an exact set of block properties.
       */
      __publicField(this, "hash");
      /**
       *  The timestamp for this block, which is the number of seconds since
       *  epoch that this block was included.
       */
      __publicField(this, "timestamp");
      /**
       *  The block hash of the parent block.
       */
      __publicField(this, "parentHash");
      /**
       *  The hash tree root of the parent beacon block for the given
       *  execution block. See [[link-eip-4788]].
       */
      __publicField(this, "parentBeaconBlockRoot");
      /**
       *  The nonce.
       *
       *  On legacy networks, this is the random number inserted which
       *  permitted the difficulty target to be reached.
       */
      __publicField(this, "nonce");
      /**
       *  The difficulty target.
       *
       *  On legacy networks, this is the proof-of-work target required
       *  for a block to meet the protocol rules to be included.
       *
       *  On modern networks, this is a random number arrived at using
       *  randao.  @TODO: Find links?
       */
      __publicField(this, "difficulty");
      /**
       *  The total gas limit for this block.
       */
      __publicField(this, "gasLimit");
      /**
       *  The total gas used in this block.
       */
      __publicField(this, "gasUsed");
      /**
       *  The root hash for the global state after applying changes
       *  in this block.
       */
      __publicField(this, "stateRoot");
      /**
       *  The hash of the transaction receipts trie.
       */
      __publicField(this, "receiptsRoot");
      /**
       *  The total amount of blob gas consumed by the transactions
       *  within the block. See [[link-eip-4844]].
       */
      __publicField(this, "blobGasUsed");
      /**
       *  The running total of blob gas consumed in excess of the
       *  target, prior to the block. See [[link-eip-4844]].
       */
      __publicField(this, "excessBlobGas");
      /**
       *  The miner coinbase address, wihch receives any subsidies for
       *  including this block.
       */
      __publicField(this, "miner");
      /**
       *  The latest RANDAO mix of the post beacon state of
       *  the previous block.
       */
      __publicField(this, "prevRandao");
      /**
       *  Any extra data the validator wished to include.
       */
      __publicField(this, "extraData");
      /**
       *  The base fee per gas that all transactions in this block were
       *  charged.
       *
       *  This adjusts after each block, depending on how congested the network
       *  is.
       */
      __publicField(this, "baseFeePerGas");
      __privateAdd(this, _transactions);
      __privateSet(this, _transactions, block.transactions.map((tx) => {
        if (typeof tx !== "string") {
          return new TransactionResponse(tx, provider);
        }
        return tx;
      }));
      defineProperties(this, {
        provider,
        hash: getValue2(block.hash),
        number: block.number,
        timestamp: block.timestamp,
        parentHash: block.parentHash,
        parentBeaconBlockRoot: block.parentBeaconBlockRoot,
        nonce: block.nonce,
        difficulty: block.difficulty,
        gasLimit: block.gasLimit,
        gasUsed: block.gasUsed,
        blobGasUsed: block.blobGasUsed,
        excessBlobGas: block.excessBlobGas,
        miner: block.miner,
        prevRandao: getValue2(block.prevRandao),
        extraData: block.extraData,
        baseFeePerGas: getValue2(block.baseFeePerGas),
        stateRoot: block.stateRoot,
        receiptsRoot: block.receiptsRoot
      });
    }
    /**
     *  Returns the list of transaction hashes, in the order
     *  they were executed within the block.
     */
    get transactions() {
      return __privateGet(this, _transactions).map((tx) => {
        if (typeof tx === "string") {
          return tx;
        }
        return tx.hash;
      });
    }
    /**
     *  Returns the complete transactions, in the order they
     *  were executed within the block.
     *
     *  This is only available for blocks which prefetched
     *  transactions, by passing ``true`` to %%prefetchTxs%%
     *  into [[Provider-getBlock]].
     */
    get prefetchedTransactions() {
      const txs = __privateGet(this, _transactions).slice();
      if (txs.length === 0) {
        return [];
      }
      assert(typeof txs[0] === "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
        operation: "transactionResponses()"
      });
      return txs;
    }
    /**
     *  Returns a JSON-friendly value.
     */
    toJSON() {
      const { baseFeePerGas, difficulty, extraData, gasLimit, gasUsed, hash: hash2, miner, prevRandao, nonce, number: number2, parentHash, parentBeaconBlockRoot, stateRoot, receiptsRoot, timestamp, transactions } = this;
      return {
        _type: "Block",
        baseFeePerGas: toJson(baseFeePerGas),
        difficulty: toJson(difficulty),
        extraData,
        gasLimit: toJson(gasLimit),
        gasUsed: toJson(gasUsed),
        blobGasUsed: toJson(this.blobGasUsed),
        excessBlobGas: toJson(this.excessBlobGas),
        hash: hash2,
        miner,
        prevRandao,
        nonce,
        number: number2,
        parentHash,
        timestamp,
        parentBeaconBlockRoot,
        stateRoot,
        receiptsRoot,
        transactions
      };
    }
    [Symbol.iterator]() {
      let index = 0;
      const txs = this.transactions;
      return {
        next: () => {
          if (index < this.length) {
            return {
              value: txs[index++],
              done: false
            };
          }
          return { value: void 0, done: true };
        }
      };
    }
    /**
     *  The number of transactions in this block.
     */
    get length() {
      return __privateGet(this, _transactions).length;
    }
    /**
     *  The [[link-js-date]] this block was included at.
     */
    get date() {
      if (this.timestamp == null) {
        return null;
      }
      return new Date(this.timestamp * 1e3);
    }
    /**
     *  Get the transaction at %%indexe%% within this block.
     */
    async getTransaction(indexOrHash) {
      let tx = void 0;
      if (typeof indexOrHash === "number") {
        tx = __privateGet(this, _transactions)[indexOrHash];
      } else {
        const hash2 = indexOrHash.toLowerCase();
        for (const v2 of __privateGet(this, _transactions)) {
          if (typeof v2 === "string") {
            if (v2 !== hash2) {
              continue;
            }
            tx = v2;
            break;
          } else {
            if (v2.hash !== hash2) {
              continue;
            }
            tx = v2;
            break;
          }
        }
      }
      if (tx == null) {
        throw new Error("no such tx");
      }
      if (typeof tx === "string") {
        return await this.provider.getTransaction(tx);
      } else {
        return tx;
      }
    }
    /**
     *  If a **Block** was fetched with a request to include the transactions
     *  this will allow synchronous access to those transactions.
     *
     *  If the transactions were not prefetched, this will throw.
     */
    getPrefetchedTransaction(indexOrHash) {
      const txs = this.prefetchedTransactions;
      if (typeof indexOrHash === "number") {
        return txs[indexOrHash];
      }
      indexOrHash = indexOrHash.toLowerCase();
      for (const tx of txs) {
        if (tx.hash === indexOrHash) {
          return tx;
        }
      }
      assertArgument(false, "no matching transaction", "indexOrHash", indexOrHash);
    }
    /**
     *  Returns true if this block been mined. This provides a type guard
     *  for all properties on a [[MinedBlock]].
     */
    isMined() {
      return !!this.hash;
    }
    /**
     *  Returns true if this block is an [[link-eip-2930]] block.
     */
    isLondon() {
      return !!this.baseFeePerGas;
    }
    /**
     *  @_ignore:
     */
    orphanedEvent() {
      if (!this.isMined()) {
        throw new Error("");
      }
      return createOrphanedBlockFilter(this);
    }
  };
  _transactions = new WeakMap();
  var Log = class {
    /**
     *  @_ignore:
     */
    constructor(log, provider) {
      /**
       *  The provider connected to the log used to fetch additional details
       *  if necessary.
       */
      __publicField(this, "provider");
      /**
       *  The transaction hash of the transaction this log occurred in. Use the
       *  [[Log-getTransaction]] to get the [[TransactionResponse]].
       */
      __publicField(this, "transactionHash");
      /**
       *  The block hash of the block this log occurred in. Use the
       *  [[Log-getBlock]] to get the [[Block]].
       */
      __publicField(this, "blockHash");
      /**
       *  The block number of the block this log occurred in. It is preferred
       *  to use the [[Block-hash]] when fetching the related [[Block]],
       *  since in the case of an orphaned block, the block at that height may
       *  have changed.
       */
      __publicField(this, "blockNumber");
      /**
       *  If the **Log** represents a block that was removed due to an orphaned
       *  block, this will be true.
       *
       *  This can only happen within an orphan event listener.
       */
      __publicField(this, "removed");
      /**
       *  The address of the contract that emitted this log.
       */
      __publicField(this, "address");
      /**
       *  The data included in this log when it was emitted.
       */
      __publicField(this, "data");
      /**
       *  The indexed topics included in this log when it was emitted.
       *
       *  All topics are included in the bloom filters, so they can be
       *  efficiently filtered using the [[Provider-getLogs]] method.
       */
      __publicField(this, "topics");
      /**
       *  The index within the block this log occurred at. This is generally
       *  not useful to developers, but can be used with the various roots
       *  to proof inclusion within a block.
       */
      __publicField(this, "index");
      /**
       *  The index within the transaction of this log.
       */
      __publicField(this, "transactionIndex");
      this.provider = provider;
      const topics = Object.freeze(log.topics.slice());
      defineProperties(this, {
        transactionHash: log.transactionHash,
        blockHash: log.blockHash,
        blockNumber: log.blockNumber,
        removed: log.removed,
        address: log.address,
        data: log.data,
        topics,
        index: log.index,
        transactionIndex: log.transactionIndex
      });
    }
    /**
     *  Returns a JSON-compatible object.
     */
    toJSON() {
      const { address, blockHash, blockNumber, data, index, removed, topics, transactionHash, transactionIndex } = this;
      return {
        _type: "log",
        address,
        blockHash,
        blockNumber,
        data,
        index,
        removed,
        topics,
        transactionHash,
        transactionIndex
      };
    }
    /**
     *  Returns the block that this log occurred in.
     */
    async getBlock() {
      const block = await this.provider.getBlock(this.blockHash);
      assert(!!block, "failed to find transaction", "UNKNOWN_ERROR", {});
      return block;
    }
    /**
     *  Returns the transaction that this log occurred in.
     */
    async getTransaction() {
      const tx = await this.provider.getTransaction(this.transactionHash);
      assert(!!tx, "failed to find transaction", "UNKNOWN_ERROR", {});
      return tx;
    }
    /**
     *  Returns the transaction receipt fot the transaction that this
     *  log occurred in.
     */
    async getTransactionReceipt() {
      const receipt = await this.provider.getTransactionReceipt(this.transactionHash);
      assert(!!receipt, "failed to find transaction receipt", "UNKNOWN_ERROR", {});
      return receipt;
    }
    /**
     *  @_ignore:
     */
    removedEvent() {
      return createRemovedLogFilter(this);
    }
  };
  var _logs;
  var TransactionReceipt = class {
    /**
     *  @_ignore:
     */
    constructor(tx, provider) {
      /**
       *  The provider connected to the log used to fetch additional details
       *  if necessary.
       */
      __publicField(this, "provider");
      /**
       *  The address the transaction was sent to.
       */
      __publicField(this, "to");
      /**
       *  The sender of the transaction.
       */
      __publicField(this, "from");
      /**
       *  The address of the contract if the transaction was directly
       *  responsible for deploying one.
       *
       *  This is non-null **only** if the ``to`` is empty and the ``data``
       *  was successfully executed as initcode.
       */
      __publicField(this, "contractAddress");
      /**
       *  The transaction hash.
       */
      __publicField(this, "hash");
      /**
       *  The index of this transaction within the block transactions.
       */
      __publicField(this, "index");
      /**
       *  The block hash of the [[Block]] this transaction was included in.
       */
      __publicField(this, "blockHash");
      /**
       *  The block number of the [[Block]] this transaction was included in.
       */
      __publicField(this, "blockNumber");
      /**
       *  The bloom filter bytes that represent all logs that occurred within
       *  this transaction. This is generally not useful for most developers,
       *  but can be used to validate the included logs.
       */
      __publicField(this, "logsBloom");
      /**
       *  The actual amount of gas used by this transaction.
       *
       *  When creating a transaction, the amount of gas that will be used can
       *  only be approximated, but the sender must pay the gas fee for the
       *  entire gas limit. After the transaction, the difference is refunded.
       */
      __publicField(this, "gasUsed");
      /**
       *  The gas used for BLObs. See [[link-eip-4844]].
       */
      __publicField(this, "blobGasUsed");
      /**
       *  The amount of gas used by all transactions within the block for this
       *  and all transactions with a lower ``index``.
       *
       *  This is generally not useful for developers but can be used to
       *  validate certain aspects of execution.
       */
      __publicField(this, "cumulativeGasUsed");
      /**
       *  The actual gas price used during execution.
       *
       *  Due to the complexity of [[link-eip-1559]] this value can only
       *  be caluclated after the transaction has been mined, snce the base
       *  fee is protocol-enforced.
       */
      __publicField(this, "gasPrice");
      /**
       *  The price paid per BLOB in gas. See [[link-eip-4844]].
       */
      __publicField(this, "blobGasPrice");
      /**
       *  The [[link-eip-2718]] transaction type.
       */
      __publicField(this, "type");
      //readonly byzantium!: boolean;
      /**
       *  The status of this transaction, indicating success (i.e. ``1``) or
       *  a revert (i.e. ``0``).
       *
       *  This is available in post-byzantium blocks, but some backends may
       *  backfill this value.
       */
      __publicField(this, "status");
      /**
       *  The root hash of this transaction.
       *
       *  This is no present and was only included in pre-byzantium blocks, but
       *  could be used to validate certain parts of the receipt.
       */
      __publicField(this, "root");
      __privateAdd(this, _logs);
      __privateSet(this, _logs, Object.freeze(tx.logs.map((log) => {
        return new Log(log, provider);
      })));
      let gasPrice = BN_08;
      if (tx.effectiveGasPrice != null) {
        gasPrice = tx.effectiveGasPrice;
      } else if (tx.gasPrice != null) {
        gasPrice = tx.gasPrice;
      }
      defineProperties(this, {
        provider,
        to: tx.to,
        from: tx.from,
        contractAddress: tx.contractAddress,
        hash: tx.hash,
        index: tx.index,
        blockHash: tx.blockHash,
        blockNumber: tx.blockNumber,
        logsBloom: tx.logsBloom,
        gasUsed: tx.gasUsed,
        cumulativeGasUsed: tx.cumulativeGasUsed,
        blobGasUsed: tx.blobGasUsed,
        gasPrice,
        blobGasPrice: tx.blobGasPrice,
        type: tx.type,
        //byzantium: tx.byzantium,
        status: tx.status,
        root: tx.root
      });
    }
    /**
     *  The logs for this transaction.
     */
    get logs() {
      return __privateGet(this, _logs);
    }
    /**
     *  Returns a JSON-compatible representation.
     */
    toJSON() {
      const {
        to,
        from,
        contractAddress,
        hash: hash2,
        index,
        blockHash,
        blockNumber,
        logsBloom,
        logs,
        //byzantium, 
        status,
        root
      } = this;
      return {
        _type: "TransactionReceipt",
        blockHash,
        blockNumber,
        //byzantium, 
        contractAddress,
        cumulativeGasUsed: toJson(this.cumulativeGasUsed),
        from,
        gasPrice: toJson(this.gasPrice),
        blobGasUsed: toJson(this.blobGasUsed),
        blobGasPrice: toJson(this.blobGasPrice),
        gasUsed: toJson(this.gasUsed),
        hash: hash2,
        index,
        logs,
        logsBloom,
        root,
        status,
        to
      };
    }
    /**
     *  @_ignore:
     */
    get length() {
      return this.logs.length;
    }
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.length) {
            return { value: this.logs[index++], done: false };
          }
          return { value: void 0, done: true };
        }
      };
    }
    /**
     *  The total fee for this transaction, in wei.
     */
    get fee() {
      return this.gasUsed * this.gasPrice;
    }
    /**
     *  Resolves to the block this transaction occurred in.
     */
    async getBlock() {
      const block = await this.provider.getBlock(this.blockHash);
      if (block == null) {
        throw new Error("TODO");
      }
      return block;
    }
    /**
     *  Resolves to the transaction this transaction occurred in.
     */
    async getTransaction() {
      const tx = await this.provider.getTransaction(this.hash);
      if (tx == null) {
        throw new Error("TODO");
      }
      return tx;
    }
    /**
     *  Resolves to the return value of the execution of this transaction.
     *
     *  Support for this feature is limited, as it requires an archive node
     *  with the ``debug_`` or ``trace_`` API enabled.
     */
    async getResult() {
      return await this.provider.getTransactionResult(this.hash);
    }
    /**
     *  Resolves to the number of confirmations this transaction has.
     */
    async confirmations() {
      return await this.provider.getBlockNumber() - this.blockNumber + 1;
    }
    /**
     *  @_ignore:
     */
    removedEvent() {
      return createRemovedTransactionFilter(this);
    }
    /**
     *  @_ignore:
     */
    reorderedEvent(other) {
      assert(!other || other.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" });
      return createReorderedTransactionFilter(this, other);
    }
  };
  _logs = new WeakMap();
  var _startBlock;
  var _TransactionResponse = class _TransactionResponse {
    /**
     *  @_ignore:
     */
    constructor(tx, provider) {
      /**
       *  The provider this is connected to, which will influence how its
       *  methods will resolve its async inspection methods.
       */
      __publicField(this, "provider");
      /**
       *  The block number of the block that this transaction was included in.
       *
       *  This is ``null`` for pending transactions.
       */
      __publicField(this, "blockNumber");
      /**
       *  The blockHash of the block that this transaction was included in.
       *
       *  This is ``null`` for pending transactions.
       */
      __publicField(this, "blockHash");
      /**
       *  The index within the block that this transaction resides at.
       */
      __publicField(this, "index");
      /**
       *  The transaction hash.
       */
      __publicField(this, "hash");
      /**
       *  The [[link-eip-2718]] transaction envelope type. This is
       *  ``0`` for legacy transactions types.
       */
      __publicField(this, "type");
      /**
       *  The receiver of this transaction.
       *
       *  If ``null``, then the transaction is an initcode transaction.
       *  This means the result of executing the [[data]] will be deployed
       *  as a new contract on chain (assuming it does not revert) and the
       *  address may be computed using [[getCreateAddress]].
       */
      __publicField(this, "to");
      /**
       *  The sender of this transaction. It is implicitly computed
       *  from the transaction pre-image hash (as the digest) and the
       *  [[signature]] using ecrecover.
       */
      __publicField(this, "from");
      /**
       *  The nonce, which is used to prevent replay attacks and offer
       *  a method to ensure transactions from a given sender are explicitly
       *  ordered.
       *
       *  When sending a transaction, this must be equal to the number of
       *  transactions ever sent by [[from]].
       */
      __publicField(this, "nonce");
      /**
       *  The maximum units of gas this transaction can consume. If execution
       *  exceeds this, the entries transaction is reverted and the sender
       *  is charged for the full amount, despite not state changes being made.
       */
      __publicField(this, "gasLimit");
      /**
       *  The gas price can have various values, depending on the network.
       *
       *  In modern networks, for transactions that are included this is
       *  the //effective gas price// (the fee per gas that was actually
       *  charged), while for transactions that have not been included yet
       *  is the [[maxFeePerGas]].
       *
       *  For legacy transactions, or transactions on legacy networks, this
       *  is the fee that will be charged per unit of gas the transaction
       *  consumes.
       */
      __publicField(this, "gasPrice");
      /**
       *  The maximum priority fee (per unit of gas) to allow a
       *  validator to charge the sender. This is inclusive of the
       *  [[maxFeeFeePerGas]].
       */
      __publicField(this, "maxPriorityFeePerGas");
      /**
       *  The maximum fee (per unit of gas) to allow this transaction
       *  to charge the sender.
       */
      __publicField(this, "maxFeePerGas");
      /**
       *  The [[link-eip-4844]] max fee per BLOb gas.
       */
      __publicField(this, "maxFeePerBlobGas");
      /**
       *  The data.
       */
      __publicField(this, "data");
      /**
       *  The value, in wei. Use [[formatEther]] to format this value
       *  as ether.
       */
      __publicField(this, "value");
      /**
       *  The chain ID.
       */
      __publicField(this, "chainId");
      /**
       *  The signature.
       */
      __publicField(this, "signature");
      /**
       *  The [[link-eip-2930]] access list for transaction types that
       *  support it, otherwise ``null``.
       */
      __publicField(this, "accessList");
      /**
       *  The [[link-eip-4844]] BLOb versioned hashes.
       */
      __publicField(this, "blobVersionedHashes");
      __privateAdd(this, _startBlock);
      this.provider = provider;
      this.blockNumber = tx.blockNumber != null ? tx.blockNumber : null;
      this.blockHash = tx.blockHash != null ? tx.blockHash : null;
      this.hash = tx.hash;
      this.index = tx.index;
      this.type = tx.type;
      this.from = tx.from;
      this.to = tx.to || null;
      this.gasLimit = tx.gasLimit;
      this.nonce = tx.nonce;
      this.data = tx.data;
      this.value = tx.value;
      this.gasPrice = tx.gasPrice;
      this.maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? tx.maxPriorityFeePerGas : null;
      this.maxFeePerGas = tx.maxFeePerGas != null ? tx.maxFeePerGas : null;
      this.maxFeePerBlobGas = tx.maxFeePerBlobGas != null ? tx.maxFeePerBlobGas : null;
      this.chainId = tx.chainId;
      this.signature = tx.signature;
      this.accessList = tx.accessList != null ? tx.accessList : null;
      this.blobVersionedHashes = tx.blobVersionedHashes != null ? tx.blobVersionedHashes : null;
      __privateSet(this, _startBlock, -1);
    }
    /**
     *  Returns a JSON-compatible representation of this transaction.
     */
    toJSON() {
      const { blockNumber, blockHash, index, hash: hash2, type, to, from, nonce, data, signature, accessList, blobVersionedHashes } = this;
      return {
        _type: "TransactionResponse",
        accessList,
        blockNumber,
        blockHash,
        blobVersionedHashes,
        chainId: toJson(this.chainId),
        data,
        from,
        gasLimit: toJson(this.gasLimit),
        gasPrice: toJson(this.gasPrice),
        hash: hash2,
        maxFeePerGas: toJson(this.maxFeePerGas),
        maxPriorityFeePerGas: toJson(this.maxPriorityFeePerGas),
        maxFeePerBlobGas: toJson(this.maxFeePerBlobGas),
        nonce,
        signature,
        to,
        index,
        type,
        value: toJson(this.value)
      };
    }
    /**
     *  Resolves to the Block that this transaction was included in.
     *
     *  This will return null if the transaction has not been included yet.
     */
    async getBlock() {
      let blockNumber = this.blockNumber;
      if (blockNumber == null) {
        const tx = await this.getTransaction();
        if (tx) {
          blockNumber = tx.blockNumber;
        }
      }
      if (blockNumber == null) {
        return null;
      }
      const block = this.provider.getBlock(blockNumber);
      if (block == null) {
        throw new Error("TODO");
      }
      return block;
    }
    /**
     *  Resolves to this transaction being re-requested from the
     *  provider. This can be used if you have an unmined transaction
     *  and wish to get an up-to-date populated instance.
     */
    async getTransaction() {
      return this.provider.getTransaction(this.hash);
    }
    /**
     *  Resolve to the number of confirmations this transaction has.
     */
    async confirmations() {
      if (this.blockNumber == null) {
        const { tx, blockNumber: blockNumber2 } = await resolveProperties({
          tx: this.getTransaction(),
          blockNumber: this.provider.getBlockNumber()
        });
        if (tx == null || tx.blockNumber == null) {
          return 0;
        }
        return blockNumber2 - tx.blockNumber + 1;
      }
      const blockNumber = await this.provider.getBlockNumber();
      return blockNumber - this.blockNumber + 1;
    }
    /**
     *  Resolves once this transaction has been mined and has
     *  %%confirms%% blocks including it (default: ``1``) with an
     *  optional %%timeout%%.
     *
     *  This can resolve to ``null`` only if %%confirms%% is ``0``
     *  and the transaction has not been mined, otherwise this will
     *  wait until enough confirmations have completed.
     */
    async wait(_confirms, _timeout2) {
      const confirms = _confirms == null ? 1 : _confirms;
      const timeout = _timeout2 == null ? 0 : _timeout2;
      let startBlock = __privateGet(this, _startBlock);
      let nextScan = -1;
      let stopScanning = startBlock === -1 ? true : false;
      const checkReplacement = async () => {
        if (stopScanning) {
          return null;
        }
        const { blockNumber, nonce } = await resolveProperties({
          blockNumber: this.provider.getBlockNumber(),
          nonce: this.provider.getTransactionCount(this.from)
        });
        if (nonce < this.nonce) {
          startBlock = blockNumber;
          return;
        }
        if (stopScanning) {
          return null;
        }
        const mined = await this.getTransaction();
        if (mined && mined.blockNumber != null) {
          return;
        }
        if (nextScan === -1) {
          nextScan = startBlock - 3;
          if (nextScan < __privateGet(this, _startBlock)) {
            nextScan = __privateGet(this, _startBlock);
          }
        }
        while (nextScan <= blockNumber) {
          if (stopScanning) {
            return null;
          }
          const block = await this.provider.getBlock(nextScan, true);
          if (block == null) {
            return;
          }
          for (const hash2 of block) {
            if (hash2 === this.hash) {
              return;
            }
          }
          for (let i5 = 0; i5 < block.length; i5++) {
            const tx = await block.getTransaction(i5);
            if (tx.from === this.from && tx.nonce === this.nonce) {
              if (stopScanning) {
                return null;
              }
              const receipt2 = await this.provider.getTransactionReceipt(tx.hash);
              if (receipt2 == null) {
                return;
              }
              if (blockNumber - receipt2.blockNumber + 1 < confirms) {
                return;
              }
              let reason = "replaced";
              if (tx.data === this.data && tx.to === this.to && tx.value === this.value) {
                reason = "repriced";
              } else if (tx.data === "0x" && tx.from === tx.to && tx.value === BN_08) {
                reason = "cancelled";
              }
              assert(false, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: reason === "replaced" || reason === "cancelled",
                reason,
                replacement: tx.replaceableTransaction(startBlock),
                hash: tx.hash,
                receipt: receipt2
              });
            }
          }
          nextScan++;
        }
        return;
      };
      const checkReceipt = (receipt2) => {
        if (receipt2 == null || receipt2.status !== 0) {
          return receipt2;
        }
        assert(false, "transaction execution reverted", "CALL_EXCEPTION", {
          action: "sendTransaction",
          data: null,
          reason: null,
          invocation: null,
          revert: null,
          transaction: {
            to: receipt2.to,
            from: receipt2.from,
            data: ""
            // @TODO: in v7, split out sendTransaction properties
          },
          receipt: receipt2
        });
      };
      const receipt = await this.provider.getTransactionReceipt(this.hash);
      if (confirms === 0) {
        return checkReceipt(receipt);
      }
      if (receipt) {
        if (await receipt.confirmations() >= confirms) {
          return checkReceipt(receipt);
        }
      } else {
        await checkReplacement();
        if (confirms === 0) {
          return null;
        }
      }
      const waiter = new Promise((resolve, reject) => {
        const cancellers = [];
        const cancel = () => {
          cancellers.forEach((c4) => c4());
        };
        cancellers.push(() => {
          stopScanning = true;
        });
        if (timeout > 0) {
          const timer = setTimeout(() => {
            cancel();
            reject(makeError("wait for transaction timeout", "TIMEOUT"));
          }, timeout);
          cancellers.push(() => {
            clearTimeout(timer);
          });
        }
        const txListener = async (receipt2) => {
          if (await receipt2.confirmations() >= confirms) {
            cancel();
            try {
              resolve(checkReceipt(receipt2));
            } catch (error) {
              reject(error);
            }
          }
        };
        cancellers.push(() => {
          this.provider.off(this.hash, txListener);
        });
        this.provider.on(this.hash, txListener);
        if (startBlock >= 0) {
          const replaceListener = async () => {
            try {
              await checkReplacement();
            } catch (error) {
              if (isError(error, "TRANSACTION_REPLACED")) {
                cancel();
                reject(error);
                return;
              }
            }
            if (!stopScanning) {
              this.provider.once("block", replaceListener);
            }
          };
          cancellers.push(() => {
            this.provider.off("block", replaceListener);
          });
          this.provider.once("block", replaceListener);
        }
      });
      return await waiter;
    }
    /**
     *  Returns ``true`` if this transaction has been included.
     *
     *  This is effective only as of the time the TransactionResponse
     *  was instantiated. To get up-to-date information, use
     *  [[getTransaction]].
     *
     *  This provides a Type Guard that this transaction will have
     *  non-null property values for properties that are null for
     *  unmined transactions.
     */
    isMined() {
      return this.blockHash != null;
    }
    /**
     *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
     *  transaction.
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */
    isLegacy() {
      return this.type === 0;
    }
    /**
     *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
     *  transaction. See [[link-eip-2070]].
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */
    isBerlin() {
      return this.type === 1;
    }
    /**
     *  Returns true if the transaction is a London (i.e. ``type == 2``)
     *  transaction. See [[link-eip-1559]].
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */
    isLondon() {
      return this.type === 2;
    }
    /**
     *  Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
     *  transaction. See [[link-eip-4844]].
     */
    isCancun() {
      return this.type === 3;
    }
    /**
     *  Returns a filter which can be used to listen for orphan events
     *  that evict this transaction.
     */
    removedEvent() {
      assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
      return createRemovedTransactionFilter(this);
    }
    /**
     *  Returns a filter which can be used to listen for orphan events
     *  that re-order this event against %%other%%.
     */
    reorderedEvent(other) {
      assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
      assert(!other || other.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
      return createReorderedTransactionFilter(this, other);
    }
    /**
     *  Returns a new TransactionResponse instance which has the ability to
     *  detect (and throw an error) if the transaction is replaced, which
     *  will begin scanning at %%startBlock%%.
     *
     *  This should generally not be used by developers and is intended
     *  primarily for internal use. Setting an incorrect %%startBlock%% can
     *  have devastating performance consequences if used incorrectly.
     */
    replaceableTransaction(startBlock) {
      assertArgument(Number.isInteger(startBlock) && startBlock >= 0, "invalid startBlock", "startBlock", startBlock);
      const tx = new _TransactionResponse(this, this.provider);
      __privateSet(tx, _startBlock, startBlock);
      return tx;
    }
  };
  _startBlock = new WeakMap();
  var TransactionResponse = _TransactionResponse;
  function createOrphanedBlockFilter(block) {
    return { orphan: "drop-block", hash: block.hash, number: block.number };
  }
  function createReorderedTransactionFilter(tx, other) {
    return { orphan: "reorder-transaction", tx, other };
  }
  function createRemovedTransactionFilter(tx) {
    return { orphan: "drop-transaction", tx };
  }
  function createRemovedLogFilter(log) {
    return { orphan: "drop-log", log: {
      transactionHash: log.transactionHash,
      blockHash: log.blockHash,
      blockNumber: log.blockNumber,
      address: log.address,
      data: log.data,
      topics: Object.freeze(log.topics.slice()),
      index: log.index
    } };
  }

  // node_modules/ethers/lib.esm/contract/wrappers.js
  var EventLog = class extends Log {
    /**
     * @_ignore:
     */
    constructor(log, iface, fragment) {
      super(log, log.provider);
      /**
       *  The Contract Interface.
       */
      __publicField(this, "interface");
      /**
       *  The matching event.
       */
      __publicField(this, "fragment");
      /**
       *  The parsed arguments passed to the event by ``emit``.
       */
      __publicField(this, "args");
      const args = iface.decodeEventLog(fragment, log.data, log.topics);
      defineProperties(this, { args, fragment, interface: iface });
    }
    /**
     *  The name of the event.
     */
    get eventName() {
      return this.fragment.name;
    }
    /**
     *  The signature of the event.
     */
    get eventSignature() {
      return this.fragment.format();
    }
  };
  var UndecodedEventLog = class extends Log {
    /**
     * @_ignore:
     */
    constructor(log, error) {
      super(log, log.provider);
      /**
       *  The error encounted when trying to decode the log.
       */
      __publicField(this, "error");
      defineProperties(this, { error });
    }
  };
  var _iface;
  var ContractTransactionReceipt = class extends TransactionReceipt {
    /**
     *  @_ignore:
     */
    constructor(iface, provider, tx) {
      super(tx, provider);
      __privateAdd(this, _iface);
      __privateSet(this, _iface, iface);
    }
    /**
     *  The parsed logs for any [[Log]] which has a matching event in the
     *  Contract ABI.
     */
    get logs() {
      return super.logs.map((log) => {
        const fragment = log.topics.length ? __privateGet(this, _iface).getEvent(log.topics[0]) : null;
        if (fragment) {
          try {
            return new EventLog(log, __privateGet(this, _iface), fragment);
          } catch (error) {
            return new UndecodedEventLog(log, error);
          }
        }
        return log;
      });
    }
  };
  _iface = new WeakMap();
  var _iface2;
  var ContractTransactionResponse = class extends TransactionResponse {
    /**
     *  @_ignore:
     */
    constructor(iface, provider, tx) {
      super(tx, provider);
      __privateAdd(this, _iface2);
      __privateSet(this, _iface2, iface);
    }
    /**
     *  Resolves once this transaction has been mined and has
     *  %%confirms%% blocks including it (default: ``1``) with an
     *  optional %%timeout%%.
     *
     *  This can resolve to ``null`` only if %%confirms%% is ``0``
     *  and the transaction has not been mined, otherwise this will
     *  wait until enough confirmations have completed.
     */
    async wait(confirms, timeout) {
      const receipt = await super.wait(confirms, timeout);
      if (receipt == null) {
        return null;
      }
      return new ContractTransactionReceipt(__privateGet(this, _iface2), this.provider, receipt);
    }
  };
  _iface2 = new WeakMap();
  var ContractUnknownEventPayload = class extends EventPayload {
    /**
     *  @_event:
     */
    constructor(contract, listener, filter, log) {
      super(contract, listener, filter);
      /**
       *  The log with no matching events.
       */
      __publicField(this, "log");
      defineProperties(this, { log });
    }
    /**
     *  Resolves to the block the event occured in.
     */
    async getBlock() {
      return await this.log.getBlock();
    }
    /**
     *  Resolves to the transaction the event occured in.
     */
    async getTransaction() {
      return await this.log.getTransaction();
    }
    /**
     *  Resolves to the transaction receipt the event occured in.
     */
    async getTransactionReceipt() {
      return await this.log.getTransactionReceipt();
    }
  };
  var ContractEventPayload = class extends ContractUnknownEventPayload {
    /**
     *  @_ignore:
     */
    constructor(contract, listener, filter, fragment, _log) {
      super(contract, listener, filter, new EventLog(_log, contract.interface, fragment));
      const args = contract.interface.decodeEventLog(fragment, this.log.data, this.log.topics);
      defineProperties(this, { args, fragment });
    }
    /**
     *  The event name.
     */
    get eventName() {
      return this.fragment.name;
    }
    /**
     *  The event signature.
     */
    get eventSignature() {
      return this.fragment.format();
    }
  };

  // node_modules/ethers/lib.esm/contract/contract.js
  var BN_09 = BigInt(0);
  function canCall(value) {
    return value && typeof value.call === "function";
  }
  function canEstimate(value) {
    return value && typeof value.estimateGas === "function";
  }
  function canResolve(value) {
    return value && typeof value.resolveName === "function";
  }
  function canSend(value) {
    return value && typeof value.sendTransaction === "function";
  }
  function getResolver(value) {
    if (value != null) {
      if (canResolve(value)) {
        return value;
      }
      if (value.provider) {
        return value.provider;
      }
    }
    return void 0;
  }
  var _filter;
  var PreparedTopicFilter = class {
    constructor(contract, fragment, args) {
      __privateAdd(this, _filter);
      __publicField(this, "fragment");
      defineProperties(this, { fragment });
      if (fragment.inputs.length < args.length) {
        throw new Error("too many arguments");
      }
      const runner = getRunner(contract.runner, "resolveName");
      const resolver = canResolve(runner) ? runner : null;
      __privateSet(this, _filter, async function() {
        const resolvedArgs = await Promise.all(fragment.inputs.map((param, index) => {
          const arg = args[index];
          if (arg == null) {
            return null;
          }
          return param.walkAsync(args[index], (type, value) => {
            if (type === "address") {
              if (Array.isArray(value)) {
                return Promise.all(value.map((v2) => resolveAddress(v2, resolver)));
              }
              return resolveAddress(value, resolver);
            }
            return value;
          });
        }));
        return contract.interface.encodeFilterTopics(fragment, resolvedArgs);
      }());
    }
    getTopicFilter() {
      return __privateGet(this, _filter);
    }
  };
  _filter = new WeakMap();
  function getRunner(value, feature) {
    if (value == null) {
      return null;
    }
    if (typeof value[feature] === "function") {
      return value;
    }
    if (value.provider && typeof value.provider[feature] === "function") {
      return value.provider;
    }
    return null;
  }
  function getProvider(value) {
    if (value == null) {
      return null;
    }
    return value.provider || null;
  }
  async function copyOverrides(arg, allowed) {
    const _overrides = Typed.dereference(arg, "overrides");
    assertArgument(typeof _overrides === "object", "invalid overrides parameter", "overrides", arg);
    const overrides = copyRequest(_overrides);
    assertArgument(overrides.to == null || (allowed || []).indexOf("to") >= 0, "cannot override to", "overrides.to", overrides.to);
    assertArgument(overrides.data == null || (allowed || []).indexOf("data") >= 0, "cannot override data", "overrides.data", overrides.data);
    if (overrides.from) {
      overrides.from = overrides.from;
    }
    return overrides;
  }
  async function resolveArgs(_runner, inputs, args) {
    const runner = getRunner(_runner, "resolveName");
    const resolver = canResolve(runner) ? runner : null;
    return await Promise.all(inputs.map((param, index) => {
      return param.walkAsync(args[index], (type, value) => {
        value = Typed.dereference(value, type);
        if (type === "address") {
          return resolveAddress(value, resolver);
        }
        return value;
      });
    }));
  }
  function buildWrappedFallback(contract) {
    const populateTransaction = async function(overrides) {
      const tx = await copyOverrides(overrides, ["data"]);
      tx.to = await contract.getAddress();
      if (tx.from) {
        tx.from = await resolveAddress(tx.from, getResolver(contract.runner));
      }
      const iface = contract.interface;
      const noValue = getBigInt(tx.value || BN_09, "overrides.value") === BN_09;
      const noData = (tx.data || "0x") === "0x";
      if (iface.fallback && !iface.fallback.payable && iface.receive && !noData && !noValue) {
        assertArgument(false, "cannot send data to receive or send value to non-payable fallback", "overrides", overrides);
      }
      assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
      const payable = iface.receive || iface.fallback && iface.fallback.payable;
      assertArgument(payable || noValue, "cannot send value to non-payable fallback", "overrides.value", tx.value);
      assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
      return tx;
    };
    const staticCall = async function(overrides) {
      const runner = getRunner(contract.runner, "call");
      assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
      const tx = await populateTransaction(overrides);
      try {
        return await runner.call(tx);
      } catch (error) {
        if (isCallException(error) && error.data) {
          throw contract.interface.makeError(error.data, tx);
        }
        throw error;
      }
    };
    const send = async function(overrides) {
      const runner = contract.runner;
      assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
      const tx = await runner.sendTransaction(await populateTransaction(overrides));
      const provider = getProvider(contract.runner);
      return new ContractTransactionResponse(contract.interface, provider, tx);
    };
    const estimateGas = async function(overrides) {
      const runner = getRunner(contract.runner, "estimateGas");
      assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
      return await runner.estimateGas(await populateTransaction(overrides));
    };
    const method = async (overrides) => {
      return await send(overrides);
    };
    defineProperties(method, {
      _contract: contract,
      estimateGas,
      populateTransaction,
      send,
      staticCall
    });
    return method;
  }
  function buildWrappedMethod(contract, key) {
    const getFragment = function(...args) {
      const fragment = contract.interface.getFunction(key, args);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key, args }
      });
      return fragment;
    };
    const populateTransaction = async function(...args) {
      const fragment = getFragment(...args);
      let overrides = {};
      if (fragment.inputs.length + 1 === args.length) {
        overrides = await copyOverrides(args.pop());
        if (overrides.from) {
          overrides.from = await resolveAddress(overrides.from, getResolver(contract.runner));
        }
      }
      if (fragment.inputs.length !== args.length) {
        throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
      }
      const resolvedArgs = await resolveArgs(contract.runner, fragment.inputs, args);
      return Object.assign({}, overrides, await resolveProperties({
        to: contract.getAddress(),
        data: contract.interface.encodeFunctionData(fragment, resolvedArgs)
      }));
    };
    const staticCall = async function(...args) {
      const result = await staticCallResult(...args);
      if (result.length === 1) {
        return result[0];
      }
      return result;
    };
    const send = async function(...args) {
      const runner = contract.runner;
      assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
      const tx = await runner.sendTransaction(await populateTransaction(...args));
      const provider = getProvider(contract.runner);
      return new ContractTransactionResponse(contract.interface, provider, tx);
    };
    const estimateGas = async function(...args) {
      const runner = getRunner(contract.runner, "estimateGas");
      assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
      return await runner.estimateGas(await populateTransaction(...args));
    };
    const staticCallResult = async function(...args) {
      const runner = getRunner(contract.runner, "call");
      assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
      const tx = await populateTransaction(...args);
      let result = "0x";
      try {
        result = await runner.call(tx);
      } catch (error) {
        if (isCallException(error) && error.data) {
          throw contract.interface.makeError(error.data, tx);
        }
        throw error;
      }
      const fragment = getFragment(...args);
      return contract.interface.decodeFunctionResult(fragment, result);
    };
    const method = async (...args) => {
      const fragment = getFragment(...args);
      if (fragment.constant) {
        return await staticCall(...args);
      }
      return await send(...args);
    };
    defineProperties(method, {
      name: contract.interface.getFunctionName(key),
      _contract: contract,
      _key: key,
      getFragment,
      estimateGas,
      populateTransaction,
      send,
      staticCall,
      staticCallResult
    });
    Object.defineProperty(method, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const fragment = contract.interface.getFunction(key);
        assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: { key }
        });
        return fragment;
      }
    });
    return method;
  }
  function buildWrappedEvent(contract, key) {
    const getFragment = function(...args) {
      const fragment = contract.interface.getEvent(key, args);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key, args }
      });
      return fragment;
    };
    const method = function(...args) {
      return new PreparedTopicFilter(contract, getFragment(...args), args);
    };
    defineProperties(method, {
      name: contract.interface.getEventName(key),
      _contract: contract,
      _key: key,
      getFragment
    });
    Object.defineProperty(method, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const fragment = contract.interface.getEvent(key);
        assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: { key }
        });
        return fragment;
      }
    });
    return method;
  }
  var internal2 = Symbol.for("_ethersInternal_contract");
  var internalValues = /* @__PURE__ */ new WeakMap();
  function setInternal(contract, values) {
    internalValues.set(contract[internal2], values);
  }
  function getInternal(contract) {
    return internalValues.get(contract[internal2]);
  }
  function isDeferred(value) {
    return value && typeof value === "object" && "getTopicFilter" in value && typeof value.getTopicFilter === "function" && value.fragment;
  }
  async function getSubInfo(contract, event) {
    let topics;
    let fragment = null;
    if (Array.isArray(event)) {
      const topicHashify = function(name) {
        if (isHexString(name, 32)) {
          return name;
        }
        const fragment2 = contract.interface.getEvent(name);
        assertArgument(fragment2, "unknown fragment", "name", name);
        return fragment2.topicHash;
      };
      topics = event.map((e4) => {
        if (e4 == null) {
          return null;
        }
        if (Array.isArray(e4)) {
          return e4.map(topicHashify);
        }
        return topicHashify(e4);
      });
    } else if (event === "*") {
      topics = [null];
    } else if (typeof event === "string") {
      if (isHexString(event, 32)) {
        topics = [event];
      } else {
        fragment = contract.interface.getEvent(event);
        assertArgument(fragment, "unknown fragment", "event", event);
        topics = [fragment.topicHash];
      }
    } else if (isDeferred(event)) {
      topics = await event.getTopicFilter();
    } else if ("fragment" in event) {
      fragment = event.fragment;
      topics = [fragment.topicHash];
    } else {
      assertArgument(false, "unknown event name", "event", event);
    }
    topics = topics.map((t3) => {
      if (t3 == null) {
        return null;
      }
      if (Array.isArray(t3)) {
        const items = Array.from(new Set(t3.map((t4) => t4.toLowerCase())).values());
        if (items.length === 1) {
          return items[0];
        }
        items.sort();
        return items;
      }
      return t3.toLowerCase();
    });
    const tag = topics.map((t3) => {
      if (t3 == null) {
        return "null";
      }
      if (Array.isArray(t3)) {
        return t3.join("|");
      }
      return t3;
    }).join("&");
    return { fragment, tag, topics };
  }
  async function hasSub(contract, event) {
    const { subs } = getInternal(contract);
    return subs.get((await getSubInfo(contract, event)).tag) || null;
  }
  async function getSub(contract, operation, event) {
    const provider = getProvider(contract.runner);
    assert(provider, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation });
    const { fragment, tag, topics } = await getSubInfo(contract, event);
    const { addr, subs } = getInternal(contract);
    let sub = subs.get(tag);
    if (!sub) {
      const address = addr ? addr : contract;
      const filter = { address, topics };
      const listener = (log) => {
        let foundFragment = fragment;
        if (foundFragment == null) {
          try {
            foundFragment = contract.interface.getEvent(log.topics[0]);
          } catch (error) {
          }
        }
        if (foundFragment) {
          const _foundFragment = foundFragment;
          const args = fragment ? contract.interface.decodeEventLog(fragment, log.data, log.topics) : [];
          emit(contract, event, args, (listener2) => {
            return new ContractEventPayload(contract, listener2, event, _foundFragment, log);
          });
        } else {
          emit(contract, event, [], (listener2) => {
            return new ContractUnknownEventPayload(contract, listener2, event, log);
          });
        }
      };
      let starting = [];
      const start = () => {
        if (starting.length) {
          return;
        }
        starting.push(provider.on(filter, listener));
      };
      const stop = async () => {
        if (starting.length == 0) {
          return;
        }
        let started = starting;
        starting = [];
        await Promise.all(started);
        provider.off(filter, listener);
      };
      sub = { tag, listeners: [], start, stop };
      subs.set(tag, sub);
    }
    return sub;
  }
  var lastEmit = Promise.resolve();
  async function _emit(contract, event, args, payloadFunc) {
    await lastEmit;
    const sub = await hasSub(contract, event);
    if (!sub) {
      return false;
    }
    const count = sub.listeners.length;
    sub.listeners = sub.listeners.filter(({ listener, once }) => {
      const passArgs = Array.from(args);
      if (payloadFunc) {
        passArgs.push(payloadFunc(once ? null : listener));
      }
      try {
        listener.call(contract, ...passArgs);
      } catch (error) {
      }
      return !once;
    });
    if (sub.listeners.length === 0) {
      sub.stop();
      getInternal(contract).subs.delete(sub.tag);
    }
    return count > 0;
  }
  async function emit(contract, event, args, payloadFunc) {
    try {
      await lastEmit;
    } catch (error) {
    }
    const resultPromise = _emit(contract, event, args, payloadFunc);
    lastEmit = resultPromise;
    return await resultPromise;
  }
  var passProperties2 = ["then"];
  var _a;
  _a = internal2;
  var _BaseContract = class _BaseContract {
    /**
     *  Creates a new contract connected to %%target%% with the %%abi%% and
     *  optionally connected to a %%runner%% to perform operations on behalf
     *  of.
     */
    constructor(target, abi, runner, _deployTx) {
      /**
       *  The target to connect to.
       *
       *  This can be an address, ENS name or any [[Addressable]], such as
       *  another contract. To get the resovled address, use the ``getAddress``
       *  method.
       */
      __publicField(this, "target");
      /**
       *  The contract Interface.
       */
      __publicField(this, "interface");
      /**
       *  The connected runner. This is generally a [[Provider]] or a
       *  [[Signer]], which dictates what operations are supported.
       *
       *  For example, a **Contract** connected to a [[Provider]] may
       *  only execute read-only operations.
       */
      __publicField(this, "runner");
      /**
       *  All the Events available on this contract.
       */
      __publicField(this, "filters");
      /**
       *  @_ignore:
       */
      __publicField(this, _a);
      /**
       *  The fallback or receive function if any.
       */
      __publicField(this, "fallback");
      assertArgument(typeof target === "string" || isAddressable(target), "invalid value for Contract target", "target", target);
      if (runner == null) {
        runner = null;
      }
      const iface = Interface.from(abi);
      defineProperties(this, { target, runner, interface: iface });
      Object.defineProperty(this, internal2, { value: {} });
      let addrPromise;
      let addr = null;
      let deployTx = null;
      if (_deployTx) {
        const provider = getProvider(runner);
        deployTx = new ContractTransactionResponse(this.interface, provider, _deployTx);
      }
      let subs = /* @__PURE__ */ new Map();
      if (typeof target === "string") {
        if (isHexString(target)) {
          addr = target;
          addrPromise = Promise.resolve(target);
        } else {
          const resolver = getRunner(runner, "resolveName");
          if (!canResolve(resolver)) {
            throw makeError("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
              operation: "resolveName"
            });
          }
          addrPromise = resolver.resolveName(target).then((addr2) => {
            if (addr2 == null) {
              throw makeError("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
                value: target
              });
            }
            getInternal(this).addr = addr2;
            return addr2;
          });
        }
      } else {
        addrPromise = target.getAddress().then((addr2) => {
          if (addr2 == null) {
            throw new Error("TODO");
          }
          getInternal(this).addr = addr2;
          return addr2;
        });
      }
      setInternal(this, { addrPromise, addr, deployTx, subs });
      const filters = new Proxy({}, {
        get: (target2, prop, receiver) => {
          if (typeof prop === "symbol" || passProperties2.indexOf(prop) >= 0) {
            return Reflect.get(target2, prop, receiver);
          }
          try {
            return this.getEvent(prop);
          } catch (error) {
            if (!isError(error, "INVALID_ARGUMENT") || error.argument !== "key") {
              throw error;
            }
          }
          return void 0;
        },
        has: (target2, prop) => {
          if (passProperties2.indexOf(prop) >= 0) {
            return Reflect.has(target2, prop);
          }
          return Reflect.has(target2, prop) || this.interface.hasEvent(String(prop));
        }
      });
      defineProperties(this, { filters });
      defineProperties(this, {
        fallback: iface.receive || iface.fallback ? buildWrappedFallback(this) : null
      });
      return new Proxy(this, {
        get: (target2, prop, receiver) => {
          if (typeof prop === "symbol" || prop in target2 || passProperties2.indexOf(prop) >= 0) {
            return Reflect.get(target2, prop, receiver);
          }
          try {
            return target2.getFunction(prop);
          } catch (error) {
            if (!isError(error, "INVALID_ARGUMENT") || error.argument !== "key") {
              throw error;
            }
          }
          return void 0;
        },
        has: (target2, prop) => {
          if (typeof prop === "symbol" || prop in target2 || passProperties2.indexOf(prop) >= 0) {
            return Reflect.has(target2, prop);
          }
          return target2.interface.hasFunction(prop);
        }
      });
    }
    /**
     *  Return a new Contract instance with the same target and ABI, but
     *  a different %%runner%%.
     */
    connect(runner) {
      return new _BaseContract(this.target, this.interface, runner);
    }
    /**
     *  Return a new Contract instance with the same ABI and runner, but
     *  a different %%target%%.
     */
    attach(target) {
      return new _BaseContract(target, this.interface, this.runner);
    }
    /**
     *  Return the resolved address of this Contract.
     */
    async getAddress() {
      return await getInternal(this).addrPromise;
    }
    /**
     *  Return the deployed bytecode or null if no bytecode is found.
     */
    async getDeployedCode() {
      const provider = getProvider(this.runner);
      assert(provider, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
      const code = await provider.getCode(await this.getAddress());
      if (code === "0x") {
        return null;
      }
      return code;
    }
    /**
     *  Resolve to this Contract once the bytecode has been deployed, or
     *  resolve immediately if already deployed.
     */
    async waitForDeployment() {
      const deployTx = this.deploymentTransaction();
      if (deployTx) {
        await deployTx.wait();
        return this;
      }
      const code = await this.getDeployedCode();
      if (code != null) {
        return this;
      }
      const provider = getProvider(this.runner);
      assert(provider != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" });
      return new Promise((resolve, reject) => {
        const checkCode = async () => {
          try {
            const code2 = await this.getDeployedCode();
            if (code2 != null) {
              return resolve(this);
            }
            provider.once("block", checkCode);
          } catch (error) {
            reject(error);
          }
        };
        checkCode();
      });
    }
    /**
     *  Return the transaction used to deploy this contract.
     *
     *  This is only available if this instance was returned from a
     *  [[ContractFactory]].
     */
    deploymentTransaction() {
      return getInternal(this).deployTx;
    }
    /**
     *  Return the function for a given name. This is useful when a contract
     *  method name conflicts with a JavaScript name such as ``prototype`` or
     *  when using a Contract programatically.
     */
    getFunction(key) {
      if (typeof key !== "string") {
        key = key.format();
      }
      const func = buildWrappedMethod(this, key);
      return func;
    }
    /**
     *  Return the event for a given name. This is useful when a contract
     *  event name conflicts with a JavaScript name such as ``prototype`` or
     *  when using a Contract programatically.
     */
    getEvent(key) {
      if (typeof key !== "string") {
        key = key.format();
      }
      return buildWrappedEvent(this, key);
    }
    /**
     *  @_ignore:
     */
    async queryTransaction(hash2) {
      throw new Error("@TODO");
    }
    /*
        // @TODO: this is a non-backwards compatible change, but will be added
        //        in v7 and in a potential SmartContract class in an upcoming
        //        v6 release
        async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
            const provider = getProvider(this.runner);
            assert(provider, "contract runner does not have a provider",
                "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
    
            const receipt = await provider.getTransactionReceipt(hash);
            if (receipt == null) { return null; }
    
            return new ContractTransactionReceipt(this.interface, provider, receipt);
        }
        */
    /**
     *  Provide historic access to event data for %%event%% in the range
     *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
     *  inclusive.
     */
    async queryFilter(event, fromBlock, toBlock) {
      if (fromBlock == null) {
        fromBlock = 0;
      }
      if (toBlock == null) {
        toBlock = "latest";
      }
      const { addr, addrPromise } = getInternal(this);
      const address = addr ? addr : await addrPromise;
      const { fragment, topics } = await getSubInfo(this, event);
      const filter = { address, topics, fromBlock, toBlock };
      const provider = getProvider(this.runner);
      assert(provider, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" });
      return (await provider.getLogs(filter)).map((log) => {
        let foundFragment = fragment;
        if (foundFragment == null) {
          try {
            foundFragment = this.interface.getEvent(log.topics[0]);
          } catch (error) {
          }
        }
        if (foundFragment) {
          try {
            return new EventLog(log, this.interface, foundFragment);
          } catch (error) {
            return new UndecodedEventLog(log, error);
          }
        }
        return new Log(log, provider);
      });
    }
    /**
     *  Add an event %%listener%% for the %%event%%.
     */
    async on(event, listener) {
      const sub = await getSub(this, "on", event);
      sub.listeners.push({ listener, once: false });
      sub.start();
      return this;
    }
    /**
     *  Add an event %%listener%% for the %%event%%, but remove the listener
     *  after it is fired once.
     */
    async once(event, listener) {
      const sub = await getSub(this, "once", event);
      sub.listeners.push({ listener, once: true });
      sub.start();
      return this;
    }
    /**
     *  Emit an %%event%% calling all listeners with %%args%%.
     *
     *  Resolves to ``true`` if any listeners were called.
     */
    async emit(event, ...args) {
      return await emit(this, event, args, null);
    }
    /**
     *  Resolves to the number of listeners of %%event%% or the total number
     *  of listeners if unspecified.
     */
    async listenerCount(event) {
      if (event) {
        const sub = await hasSub(this, event);
        if (!sub) {
          return 0;
        }
        return sub.listeners.length;
      }
      const { subs } = getInternal(this);
      let total = 0;
      for (const { listeners } of subs.values()) {
        total += listeners.length;
      }
      return total;
    }
    /**
     *  Resolves to the listeners subscribed to %%event%% or all listeners
     *  if unspecified.
     */
    async listeners(event) {
      if (event) {
        const sub = await hasSub(this, event);
        if (!sub) {
          return [];
        }
        return sub.listeners.map(({ listener }) => listener);
      }
      const { subs } = getInternal(this);
      let result = [];
      for (const { listeners } of subs.values()) {
        result = result.concat(listeners.map(({ listener }) => listener));
      }
      return result;
    }
    /**
     *  Remove the %%listener%% from the listeners for %%event%% or remove
     *  all listeners if unspecified.
     */
    async off(event, listener) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return this;
      }
      if (listener) {
        const index = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
        if (index >= 0) {
          sub.listeners.splice(index, 1);
        }
      }
      if (listener == null || sub.listeners.length === 0) {
        sub.stop();
        getInternal(this).subs.delete(sub.tag);
      }
      return this;
    }
    /**
     *  Remove all the listeners for %%event%% or remove all listeners if
     *  unspecified.
     */
    async removeAllListeners(event) {
      if (event) {
        const sub = await hasSub(this, event);
        if (!sub) {
          return this;
        }
        sub.stop();
        getInternal(this).subs.delete(sub.tag);
      } else {
        const { subs } = getInternal(this);
        for (const { tag, stop } of subs.values()) {
          stop();
          subs.delete(tag);
        }
      }
      return this;
    }
    /**
     *  Alias for [on].
     */
    async addListener(event, listener) {
      return await this.on(event, listener);
    }
    /**
     *  Alias for [off].
     */
    async removeListener(event, listener) {
      return await this.off(event, listener);
    }
    /**
     *  Create a new Class for the %%abi%%.
     */
    static buildClass(abi) {
      class CustomContract extends _BaseContract {
        constructor(address, runner = null) {
          super(address, abi, runner);
        }
      }
      return CustomContract;
    }
    /**
     *  Create a new BaseContract with a specified Interface.
     */
    static from(target, abi, runner) {
      if (runner == null) {
        runner = null;
      }
      const contract = new this(target, abi, runner);
      return contract;
    }
  };
  var BaseContract = _BaseContract;
  function _ContractBase() {
    return BaseContract;
  }
  var Contract = class extends _ContractBase() {
  };

  // node_modules/ethers/lib.esm/providers/ens-resolver.js
  function getIpfsLink(link) {
    if (link.match(/^ipfs:\/\/ipfs\//i)) {
      link = link.substring(12);
    } else if (link.match(/^ipfs:\/\//i)) {
      link = link.substring(7);
    } else {
      assertArgument(false, "unsupported IPFS format", "link", link);
    }
    return `https://gateway.ipfs.io/ipfs/${link}`;
  }
  var MulticoinProviderPlugin = class {
    /**
     *  Creates a new **MulticoinProviderPluing** for %%name%%.
     */
    constructor(name) {
      /**
       *  The name.
       */
      __publicField(this, "name");
      defineProperties(this, { name });
    }
    connect(proivder) {
      return this;
    }
    /**
     *  Returns ``true`` if %%coinType%% is supported by this plugin.
     */
    supportsCoinType(coinType) {
      return false;
    }
    /**
     *  Resolves to the encoded %%address%% for %%coinType%%.
     */
    async encodeAddress(coinType, address) {
      throw new Error("unsupported coin");
    }
    /**
     *  Resolves to the decoded %%data%% for %%coinType%%.
     */
    async decodeAddress(coinType, data) {
      throw new Error("unsupported coin");
    }
  };
  var matcherIpfs = new RegExp("^(ipfs)://(.*)$", "i");
  var matchers = [
    new RegExp("^(https)://(.*)$", "i"),
    new RegExp("^(data):(.*)$", "i"),
    matcherIpfs,
    new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
  ];
  var _supports2544, _resolver, _EnsResolver_instances, fetch_fn, _EnsResolver_static, getResolver_fn;
  var _EnsResolver = class _EnsResolver {
    constructor(provider, address, name) {
      __privateAdd(this, _EnsResolver_instances);
      /**
       *  The connected provider.
       */
      __publicField(this, "provider");
      /**
       *  The address of the resolver.
       */
      __publicField(this, "address");
      /**
       *  The name this resolver was resolved against.
       */
      __publicField(this, "name");
      // For EIP-2544 names, the ancestor that provided the resolver
      __privateAdd(this, _supports2544);
      __privateAdd(this, _resolver);
      defineProperties(this, { provider, address, name });
      __privateSet(this, _supports2544, null);
      __privateSet(this, _resolver, new Contract(address, [
        "function supportsInterface(bytes4) view returns (bool)",
        "function resolve(bytes, bytes) view returns (bytes)",
        "function addr(bytes32) view returns (address)",
        "function addr(bytes32, uint) view returns (bytes)",
        "function text(bytes32, string) view returns (string)",
        "function contenthash(bytes32) view returns (bytes)"
      ], provider));
    }
    /**
     *  Resolves to true if the resolver supports wildcard resolution.
     */
    async supportsWildcard() {
      if (__privateGet(this, _supports2544) == null) {
        __privateSet(this, _supports2544, (async () => {
          try {
            return await __privateGet(this, _resolver).supportsInterface("0x9061b923");
          } catch (error) {
            if (isError(error, "CALL_EXCEPTION")) {
              return false;
            }
            __privateSet(this, _supports2544, null);
            throw error;
          }
        })());
      }
      return await __privateGet(this, _supports2544);
    }
    /**
     *  Resolves to the address for %%coinType%% or null if the
     *  provided %%coinType%% has not been configured.
     */
    async getAddress(coinType) {
      if (coinType == null) {
        coinType = 60;
      }
      if (coinType === 60) {
        try {
          const result = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "addr(bytes32)");
          if (result == null || result === ZeroAddress) {
            return null;
          }
          return result;
        } catch (error) {
          if (isError(error, "CALL_EXCEPTION")) {
            return null;
          }
          throw error;
        }
      }
      if (coinType >= 0 && coinType < 2147483648) {
        let ethCoinType = coinType + 2147483648;
        const data2 = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "addr(bytes32,uint)", [ethCoinType]);
        if (isHexString(data2, 20)) {
          return getAddress(data2);
        }
      }
      let coinPlugin = null;
      for (const plugin of this.provider.plugins) {
        if (!(plugin instanceof MulticoinProviderPlugin)) {
          continue;
        }
        if (plugin.supportsCoinType(coinType)) {
          coinPlugin = plugin;
          break;
        }
      }
      if (coinPlugin == null) {
        return null;
      }
      const data = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "addr(bytes32,uint)", [coinType]);
      if (data == null || data === "0x") {
        return null;
      }
      const address = await coinPlugin.decodeAddress(coinType, data);
      if (address != null) {
        return address;
      }
      assert(false, `invalid coin data`, "UNSUPPORTED_OPERATION", {
        operation: `getAddress(${coinType})`,
        info: { coinType, data }
      });
    }
    /**
     *  Resolves to the EIP-634 text record for %%key%%, or ``null``
     *  if unconfigured.
     */
    async getText(key) {
      const data = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "text(bytes32,string)", [key]);
      if (data == null || data === "0x") {
        return null;
      }
      return data;
    }
    /**
     *  Rsolves to the content-hash or ``null`` if unconfigured.
     */
    async getContentHash() {
      const data = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "contenthash(bytes32)");
      if (data == null || data === "0x") {
        return null;
      }
      const ipfs = data.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (ipfs) {
        const scheme = ipfs[1] === "e3010170" ? "ipfs" : "ipns";
        const length = parseInt(ipfs[4], 16);
        if (ipfs[5].length === length * 2) {
          return `${scheme}://${encodeBase58("0x" + ipfs[2])}`;
        }
      }
      const swarm = data.match(/^0xe40101fa011b20([0-9a-f]*)$/);
      if (swarm && swarm[1].length === 64) {
        return `bzz://${swarm[1]}`;
      }
      assert(false, `invalid or unsupported content hash data`, "UNSUPPORTED_OPERATION", {
        operation: "getContentHash()",
        info: { data }
      });
    }
    /**
     *  Resolves to the avatar url or ``null`` if the avatar is either
     *  unconfigured or incorrectly configured (e.g. references an NFT
     *  not owned by the address).
     *
     *  If diagnosing issues with configurations, the [[_getAvatar]]
     *  method may be useful.
     */
    async getAvatar() {
      const avatar = await this._getAvatar();
      return avatar.url;
    }
    /**
     *  When resolving an avatar, there are many steps involved, such
     *  fetching metadata and possibly validating ownership of an
     *  NFT.
     *
     *  This method can be used to examine each step and the value it
     *  was working from.
     */
    async _getAvatar() {
      const linkage = [{ type: "name", value: this.name }];
      try {
        const avatar = await this.getText("avatar");
        if (avatar == null) {
          linkage.push({ type: "!avatar", value: "" });
          return { url: null, linkage };
        }
        linkage.push({ type: "avatar", value: avatar });
        for (let i5 = 0; i5 < matchers.length; i5++) {
          const match = avatar.match(matchers[i5]);
          if (match == null) {
            continue;
          }
          const scheme = match[1].toLowerCase();
          switch (scheme) {
            case "https":
            case "data":
              linkage.push({ type: "url", value: avatar });
              return { linkage, url: avatar };
            case "ipfs": {
              const url = getIpfsLink(avatar);
              linkage.push({ type: "ipfs", value: avatar });
              linkage.push({ type: "url", value: url });
              return { linkage, url };
            }
            case "erc721":
            case "erc1155": {
              const selector = scheme === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
              linkage.push({ type: scheme, value: avatar });
              const owner = await this.getAddress();
              if (owner == null) {
                linkage.push({ type: "!owner", value: "" });
                return { url: null, linkage };
              }
              const comps = (match[2] || "").split("/");
              if (comps.length !== 2) {
                linkage.push({ type: `!${scheme}caip`, value: match[2] || "" });
                return { url: null, linkage };
              }
              const tokenId = comps[1];
              const contract = new Contract(comps[0], [
                // ERC-721
                "function tokenURI(uint) view returns (string)",
                "function ownerOf(uint) view returns (address)",
                // ERC-1155
                "function uri(uint) view returns (string)",
                "function balanceOf(address, uint256) view returns (uint)"
              ], this.provider);
              if (scheme === "erc721") {
                const tokenOwner = await contract.ownerOf(tokenId);
                if (owner !== tokenOwner) {
                  linkage.push({ type: "!owner", value: tokenOwner });
                  return { url: null, linkage };
                }
                linkage.push({ type: "owner", value: tokenOwner });
              } else if (scheme === "erc1155") {
                const balance = await contract.balanceOf(owner, tokenId);
                if (!balance) {
                  linkage.push({ type: "!balance", value: "0" });
                  return { url: null, linkage };
                }
                linkage.push({ type: "balance", value: balance.toString() });
              }
              let metadataUrl = await contract[selector](tokenId);
              if (metadataUrl == null || metadataUrl === "0x") {
                linkage.push({ type: "!metadata-url", value: "" });
                return { url: null, linkage };
              }
              linkage.push({ type: "metadata-url-base", value: metadataUrl });
              if (scheme === "erc1155") {
                metadataUrl = metadataUrl.replace("{id}", toBeHex(tokenId, 32).substring(2));
                linkage.push({ type: "metadata-url-expanded", value: metadataUrl });
              }
              if (metadataUrl.match(/^ipfs:/i)) {
                metadataUrl = getIpfsLink(metadataUrl);
              }
              linkage.push({ type: "metadata-url", value: metadataUrl });
              let metadata = {};
              const response = await new FetchRequest(metadataUrl).send();
              response.assertOk();
              try {
                metadata = response.bodyJson;
              } catch (error) {
                try {
                  linkage.push({ type: "!metadata", value: response.bodyText });
                } catch (error2) {
                  const bytes2 = response.body;
                  if (bytes2) {
                    linkage.push({ type: "!metadata", value: hexlify(bytes2) });
                  }
                  return { url: null, linkage };
                }
                return { url: null, linkage };
              }
              if (!metadata) {
                linkage.push({ type: "!metadata", value: "" });
                return { url: null, linkage };
              }
              linkage.push({ type: "metadata", value: JSON.stringify(metadata) });
              let imageUrl = metadata.image;
              if (typeof imageUrl !== "string") {
                linkage.push({ type: "!imageUrl", value: "" });
                return { url: null, linkage };
              }
              if (imageUrl.match(/^(https:\/\/|data:)/i)) {
              } else {
                const ipfs = imageUrl.match(matcherIpfs);
                if (ipfs == null) {
                  linkage.push({ type: "!imageUrl-ipfs", value: imageUrl });
                  return { url: null, linkage };
                }
                linkage.push({ type: "imageUrl-ipfs", value: imageUrl });
                imageUrl = getIpfsLink(imageUrl);
              }
              linkage.push({ type: "url", value: imageUrl });
              return { linkage, url: imageUrl };
            }
          }
        }
      } catch (error) {
      }
      return { linkage, url: null };
    }
    static async getEnsAddress(provider) {
      const network = await provider.getNetwork();
      const ensPlugin = network.getPlugin("org.ethers.plugins.network.Ens");
      assert(ensPlugin, "network does not support ENS", "UNSUPPORTED_OPERATION", {
        operation: "getEnsAddress",
        info: { network }
      });
      return ensPlugin.address;
    }
    /**
     *  Resolve to the ENS resolver for %%name%% using %%provider%% or
     *  ``null`` if unconfigured.
     */
    static async fromName(provider, name) {
      var _a2;
      let currentName = name;
      while (true) {
        if (currentName === "" || currentName === ".") {
          return null;
        }
        if (name !== "eth" && currentName === "eth") {
          return null;
        }
        const addr = await __privateMethod(_a2 = _EnsResolver, _EnsResolver_static, getResolver_fn).call(_a2, provider, currentName);
        if (addr != null) {
          const resolver = new _EnsResolver(provider, addr, name);
          if (currentName !== name && !await resolver.supportsWildcard()) {
            return null;
          }
          return resolver;
        }
        currentName = currentName.split(".").slice(1).join(".");
      }
    }
  };
  _supports2544 = new WeakMap();
  _resolver = new WeakMap();
  _EnsResolver_instances = new WeakSet();
  fetch_fn = async function(funcName, params) {
    params = (params || []).slice();
    const iface = __privateGet(this, _resolver).interface;
    params.unshift(namehash(this.name));
    let fragment = null;
    if (await this.supportsWildcard()) {
      fragment = iface.getFunction(funcName);
      assert(fragment, "missing fragment", "UNKNOWN_ERROR", {
        info: { funcName }
      });
      params = [
        dnsEncode(this.name, 255),
        iface.encodeFunctionData(fragment, params)
      ];
      funcName = "resolve(bytes,bytes)";
    }
    params.push({
      enableCcipRead: true
    });
    try {
      const result = await __privateGet(this, _resolver)[funcName](...params);
      if (fragment) {
        return iface.decodeFunctionResult(fragment, result)[0];
      }
      return result;
    } catch (error) {
      if (!isError(error, "CALL_EXCEPTION")) {
        throw error;
      }
    }
    return null;
  };
  _EnsResolver_static = new WeakSet();
  getResolver_fn = async function(provider, name) {
    const ensAddr = await _EnsResolver.getEnsAddress(provider);
    try {
      const contract = new Contract(ensAddr, [
        "function resolver(bytes32) view returns (address)"
      ], provider);
      const addr = await contract.resolver(namehash(name), {
        enableCcipRead: true
      });
      if (addr === ZeroAddress) {
        return null;
      }
      return addr;
    } catch (error) {
      throw error;
    }
    return null;
  };
  __privateAdd(_EnsResolver, _EnsResolver_static);
  var EnsResolver = _EnsResolver;

  // node_modules/ethers/lib.esm/providers/format.js
  var BN_010 = BigInt(0);
  function allowNull(format, nullValue) {
    return function(value) {
      if (value == null) {
        return nullValue;
      }
      return format(value);
    };
  }
  function arrayOf(format, allowNull2) {
    return (array) => {
      if (allowNull2 && array == null) {
        return null;
      }
      if (!Array.isArray(array)) {
        throw new Error("not an array");
      }
      return array.map((i5) => format(i5));
    };
  }
  function object(format, altNames) {
    return (value) => {
      const result = {};
      for (const key in format) {
        let srcKey = key;
        if (altNames && key in altNames && !(srcKey in value)) {
          for (const altKey of altNames[key]) {
            if (altKey in value) {
              srcKey = altKey;
              break;
            }
          }
        }
        try {
          const nv = format[key](value[srcKey]);
          if (nv !== void 0) {
            result[key] = nv;
          }
        } catch (error) {
          const message = error instanceof Error ? error.message : "not-an-error";
          assert(false, `invalid value for value.${key} (${message})`, "BAD_DATA", { value });
        }
      }
      return result;
    };
  }
  function formatBoolean(value) {
    switch (value) {
      case true:
      case "true":
        return true;
      case false:
      case "false":
        return false;
    }
    assertArgument(false, `invalid boolean; ${JSON.stringify(value)}`, "value", value);
  }
  function formatData(value) {
    assertArgument(isHexString(value, true), "invalid data", "value", value);
    return value;
  }
  function formatHash(value) {
    assertArgument(isHexString(value, 32), "invalid hash", "value", value);
    return value;
  }
  var _formatLog = object({
    address: getAddress,
    blockHash: formatHash,
    blockNumber: getNumber,
    data: formatData,
    index: getNumber,
    removed: allowNull(formatBoolean, false),
    topics: arrayOf(formatHash),
    transactionHash: formatHash,
    transactionIndex: getNumber
  }, {
    index: ["logIndex"]
  });
  function formatLog(value) {
    return _formatLog(value);
  }
  var _formatBlock = object({
    hash: allowNull(formatHash),
    parentHash: formatHash,
    parentBeaconBlockRoot: allowNull(formatHash, null),
    number: getNumber,
    timestamp: getNumber,
    nonce: allowNull(formatData),
    difficulty: getBigInt,
    gasLimit: getBigInt,
    gasUsed: getBigInt,
    stateRoot: allowNull(formatHash, null),
    receiptsRoot: allowNull(formatHash, null),
    blobGasUsed: allowNull(getBigInt, null),
    excessBlobGas: allowNull(getBigInt, null),
    miner: allowNull(getAddress),
    prevRandao: allowNull(formatHash, null),
    extraData: formatData,
    baseFeePerGas: allowNull(getBigInt)
  }, {
    prevRandao: ["mixHash"]
  });
  function formatBlock(value) {
    const result = _formatBlock(value);
    result.transactions = value.transactions.map((tx) => {
      if (typeof tx === "string") {
        return tx;
      }
      return formatTransactionResponse(tx);
    });
    return result;
  }
  var _formatReceiptLog = object({
    transactionIndex: getNumber,
    blockNumber: getNumber,
    transactionHash: formatHash,
    address: getAddress,
    topics: arrayOf(formatHash),
    data: formatData,
    index: getNumber,
    blockHash: formatHash
  }, {
    index: ["logIndex"]
  });
  function formatReceiptLog(value) {
    return _formatReceiptLog(value);
  }
  var _formatTransactionReceipt = object({
    to: allowNull(getAddress, null),
    from: allowNull(getAddress, null),
    contractAddress: allowNull(getAddress, null),
    // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
    index: getNumber,
    root: allowNull(hexlify),
    gasUsed: getBigInt,
    blobGasUsed: allowNull(getBigInt, null),
    logsBloom: allowNull(formatData),
    blockHash: formatHash,
    hash: formatHash,
    logs: arrayOf(formatReceiptLog),
    blockNumber: getNumber,
    //confirmations: allowNull(getNumber, null),
    cumulativeGasUsed: getBigInt,
    effectiveGasPrice: allowNull(getBigInt),
    blobGasPrice: allowNull(getBigInt, null),
    status: allowNull(getNumber),
    type: allowNull(getNumber, 0)
  }, {
    effectiveGasPrice: ["gasPrice"],
    hash: ["transactionHash"],
    index: ["transactionIndex"]
  });
  function formatTransactionReceipt(value) {
    return _formatTransactionReceipt(value);
  }
  function formatTransactionResponse(value) {
    if (value.to && getBigInt(value.to) === BN_010) {
      value.to = "0x0000000000000000000000000000000000000000";
    }
    const result = object({
      hash: formatHash,
      // Some nodes do not return this, usually test nodes (like Ganache)
      index: allowNull(getNumber, void 0),
      type: (value2) => {
        if (value2 === "0x" || value2 == null) {
          return 0;
        }
        return getNumber(value2);
      },
      accessList: allowNull(accessListify, null),
      blobVersionedHashes: allowNull(arrayOf(formatHash, true), null),
      blockHash: allowNull(formatHash, null),
      blockNumber: allowNull(getNumber, null),
      transactionIndex: allowNull(getNumber, null),
      from: getAddress,
      // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
      gasPrice: allowNull(getBigInt),
      maxPriorityFeePerGas: allowNull(getBigInt),
      maxFeePerGas: allowNull(getBigInt),
      maxFeePerBlobGas: allowNull(getBigInt, null),
      gasLimit: getBigInt,
      to: allowNull(getAddress, null),
      value: getBigInt,
      nonce: getNumber,
      data: formatData,
      creates: allowNull(getAddress, null),
      chainId: allowNull(getBigInt, null)
    }, {
      data: ["input"],
      gasLimit: ["gas"],
      index: ["transactionIndex"]
    })(value);
    if (result.to == null && result.creates == null) {
      result.creates = getCreateAddress(result);
    }
    if ((value.type === 1 || value.type === 2) && value.accessList == null) {
      result.accessList = [];
    }
    if (value.signature) {
      result.signature = Signature.from(value.signature);
    } else {
      result.signature = Signature.from(value);
    }
    if (result.chainId == null) {
      const chainId = result.signature.legacyChainId;
      if (chainId != null) {
        result.chainId = chainId;
      }
    }
    if (result.blockHash && getBigInt(result.blockHash) === BN_010) {
      result.blockHash = null;
    }
    return result;
  }

  // node_modules/ethers/lib.esm/providers/plugins-network.js
  var EnsAddress = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
  var NetworkPlugin = class _NetworkPlugin {
    /**
     *  Creates a new **NetworkPlugin**.
     */
    constructor(name) {
      /**
       *  The name of the plugin.
       *
       *  It is recommended to use reverse-domain-notation, which permits
       *  unique names with a known authority as well as hierarchal entries.
       */
      __publicField(this, "name");
      defineProperties(this, { name });
    }
    /**
     *  Creates a copy of this plugin.
     */
    clone() {
      return new _NetworkPlugin(this.name);
    }
  };
  var GasCostPlugin = class _GasCostPlugin extends NetworkPlugin {
    /**
     *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
     *  latest block or another GasCostPlugin supercedes that block number,
     *  with the associated %%costs%%.
     */
    constructor(effectiveBlock, costs) {
      if (effectiveBlock == null) {
        effectiveBlock = 0;
      }
      super(`org.ethers.network.plugins.GasCost#${effectiveBlock || 0}`);
      /**
       *  The block number to treat these values as valid from.
       *
       *  This allows a hardfork to have updated values included as well as
       *  mulutiple hardforks to be supported.
       */
      __publicField(this, "effectiveBlock");
      /**
       *  The transactions base fee.
       */
      __publicField(this, "txBase");
      /**
       *  The fee for creating a new account.
       */
      __publicField(this, "txCreate");
      /**
       *  The fee per zero-byte in the data.
       */
      __publicField(this, "txDataZero");
      /**
       *  The fee per non-zero-byte in the data.
       */
      __publicField(this, "txDataNonzero");
      /**
       *  The fee per storage key in the [[link-eip-2930]] access list.
       */
      __publicField(this, "txAccessListStorageKey");
      /**
       *  The fee per address in the [[link-eip-2930]] access list.
       */
      __publicField(this, "txAccessListAddress");
      const props = { effectiveBlock };
      function set(name, nullish) {
        let value = (costs || {})[name];
        if (value == null) {
          value = nullish;
        }
        assertArgument(typeof value === "number", `invalud value for ${name}`, "costs", costs);
        props[name] = value;
      }
      set("txBase", 21e3);
      set("txCreate", 32e3);
      set("txDataZero", 4);
      set("txDataNonzero", 16);
      set("txAccessListStorageKey", 1900);
      set("txAccessListAddress", 2400);
      defineProperties(this, props);
    }
    clone() {
      return new _GasCostPlugin(this.effectiveBlock, this);
    }
  };
  var EnsPlugin = class _EnsPlugin extends NetworkPlugin {
    /**
     *  Creates a new **EnsPlugin** connected to %%address%% on the
     *  %%targetNetwork%%. The default ENS address and mainnet is used
     *  if unspecified.
     */
    constructor(address, targetNetwork) {
      super("org.ethers.plugins.network.Ens");
      /**
       *  The ENS Registrty Contract address.
       */
      __publicField(this, "address");
      /**
       *  The chain ID that the ENS contract lives on.
       */
      __publicField(this, "targetNetwork");
      defineProperties(this, {
        address: address || EnsAddress,
        targetNetwork: targetNetwork == null ? 1 : targetNetwork
      });
    }
    clone() {
      return new _EnsPlugin(this.address, this.targetNetwork);
    }
  };
  var _url2, _processFunc;
  var FetchUrlFeeDataNetworkPlugin = class extends NetworkPlugin {
    /**
     *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
     *  be used when computing the fee data for the network.
     */
    constructor(url, processFunc) {
      super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
      __privateAdd(this, _url2);
      __privateAdd(this, _processFunc);
      __privateSet(this, _url2, url);
      __privateSet(this, _processFunc, processFunc);
    }
    /**
     *  The URL to initialize the FetchRequest with in %%processFunc%%.
     */
    get url() {
      return __privateGet(this, _url2);
    }
    /**
     *  The callback to use when computing the FeeData.
     */
    get processFunc() {
      return __privateGet(this, _processFunc);
    }
    // We are immutable, so we can serve as our own clone
    clone() {
      return this;
    }
  };
  _url2 = new WeakMap();
  _processFunc = new WeakMap();

  // node_modules/ethers/lib.esm/providers/network.js
  var Networks = /* @__PURE__ */ new Map();
  var _name, _chainId3, _plugins;
  var _Network = class _Network {
    /**
     *  Creates a new **Network** for %%name%% and %%chainId%%.
     */
    constructor(name, chainId) {
      __privateAdd(this, _name);
      __privateAdd(this, _chainId3);
      __privateAdd(this, _plugins);
      __privateSet(this, _name, name);
      __privateSet(this, _chainId3, getBigInt(chainId));
      __privateSet(this, _plugins, /* @__PURE__ */ new Map());
    }
    /**
     *  Returns a JSON-compatible representation of a Network.
     */
    toJSON() {
      return { name: this.name, chainId: String(this.chainId) };
    }
    /**
     *  The network common name.
     *
     *  This is the canonical name, as networks migh have multiple
     *  names.
     */
    get name() {
      return __privateGet(this, _name);
    }
    set name(value) {
      __privateSet(this, _name, value);
    }
    /**
     *  The network chain ID.
     */
    get chainId() {
      return __privateGet(this, _chainId3);
    }
    set chainId(value) {
      __privateSet(this, _chainId3, getBigInt(value, "chainId"));
    }
    /**
     *  Returns true if %%other%% matches this network. Any chain ID
     *  must match, and if no chain ID is present, the name must match.
     *
     *  This method does not currently check for additional properties,
     *  such as ENS address or plug-in compatibility.
     */
    matches(other) {
      if (other == null) {
        return false;
      }
      if (typeof other === "string") {
        try {
          return this.chainId === getBigInt(other);
        } catch (error) {
        }
        return this.name === other;
      }
      if (typeof other === "number" || typeof other === "bigint") {
        try {
          return this.chainId === getBigInt(other);
        } catch (error) {
        }
        return false;
      }
      if (typeof other === "object") {
        if (other.chainId != null) {
          try {
            return this.chainId === getBigInt(other.chainId);
          } catch (error) {
          }
          return false;
        }
        if (other.name != null) {
          return this.name === other.name;
        }
        return false;
      }
      return false;
    }
    /**
     *  Returns the list of plugins currently attached to this Network.
     */
    get plugins() {
      return Array.from(__privateGet(this, _plugins).values());
    }
    /**
     *  Attach a new %%plugin%% to this Network. The network name
     *  must be unique, excluding any fragment.
     */
    attachPlugin(plugin) {
      if (__privateGet(this, _plugins).get(plugin.name)) {
        throw new Error(`cannot replace existing plugin: ${plugin.name} `);
      }
      __privateGet(this, _plugins).set(plugin.name, plugin.clone());
      return this;
    }
    /**
     *  Return the plugin, if any, matching %%name%% exactly. Plugins
     *  with fragments will not be returned unless %%name%% includes
     *  a fragment.
     */
    getPlugin(name) {
      return __privateGet(this, _plugins).get(name) || null;
    }
    /**
     *  Gets a list of all plugins that match %%name%%, with otr without
     *  a fragment.
     */
    getPlugins(basename) {
      return this.plugins.filter((p3) => p3.name.split("#")[0] === basename);
    }
    /**
     *  Create a copy of this Network.
     */
    clone() {
      const clone = new _Network(this.name, this.chainId);
      this.plugins.forEach((plugin) => {
        clone.attachPlugin(plugin.clone());
      });
      return clone;
    }
    /**
     *  Compute the intrinsic gas required for a transaction.
     *
     *  A GasCostPlugin can be attached to override the default
     *  values.
     */
    computeIntrinsicGas(tx) {
      const costs = this.getPlugin("org.ethers.plugins.network.GasCost") || new GasCostPlugin();
      let gas = costs.txBase;
      if (tx.to == null) {
        gas += costs.txCreate;
      }
      if (tx.data) {
        for (let i5 = 2; i5 < tx.data.length; i5 += 2) {
          if (tx.data.substring(i5, i5 + 2) === "00") {
            gas += costs.txDataZero;
          } else {
            gas += costs.txDataNonzero;
          }
        }
      }
      if (tx.accessList) {
        const accessList = accessListify(tx.accessList);
        for (const addr in accessList) {
          gas += costs.txAccessListAddress + costs.txAccessListStorageKey * accessList[addr].storageKeys.length;
        }
      }
      return gas;
    }
    /**
     *  Returns a new Network for the %%network%% name or chainId.
     */
    static from(network) {
      injectCommonNetworks();
      if (network == null) {
        return _Network.from("mainnet");
      }
      if (typeof network === "number") {
        network = BigInt(network);
      }
      if (typeof network === "string" || typeof network === "bigint") {
        const networkFunc = Networks.get(network);
        if (networkFunc) {
          return networkFunc();
        }
        if (typeof network === "bigint") {
          return new _Network("unknown", network);
        }
        assertArgument(false, "unknown network", "network", network);
      }
      if (typeof network.clone === "function") {
        const clone = network.clone();
        return clone;
      }
      if (typeof network === "object") {
        assertArgument(typeof network.name === "string" && typeof network.chainId === "number", "invalid network object name or chainId", "network", network);
        const custom = new _Network(network.name, network.chainId);
        if (network.ensAddress || network.ensNetwork != null) {
          custom.attachPlugin(new EnsPlugin(network.ensAddress, network.ensNetwork));
        }
        return custom;
      }
      assertArgument(false, "invalid network", "network", network);
    }
    /**
     *  Register %%nameOrChainId%% with a function which returns
     *  an instance of a Network representing that chain.
     */
    static register(nameOrChainId, networkFunc) {
      if (typeof nameOrChainId === "number") {
        nameOrChainId = BigInt(nameOrChainId);
      }
      const existing = Networks.get(nameOrChainId);
      if (existing) {
        assertArgument(false, `conflicting network for ${JSON.stringify(existing.name)}`, "nameOrChainId", nameOrChainId);
      }
      Networks.set(nameOrChainId, networkFunc);
    }
  };
  _name = new WeakMap();
  _chainId3 = new WeakMap();
  _plugins = new WeakMap();
  var Network = _Network;
  function parseUnits(_value2, decimals) {
    const value = String(_value2);
    if (!value.match(/^[0-9.]+$/)) {
      throw new Error(`invalid gwei value: ${_value2}`);
    }
    const comps = value.split(".");
    if (comps.length === 1) {
      comps.push("");
    }
    if (comps.length !== 2) {
      throw new Error(`invalid gwei value: ${_value2}`);
    }
    while (comps[1].length < decimals) {
      comps[1] += "0";
    }
    if (comps[1].length > 9) {
      let frac = BigInt(comps[1].substring(0, 9));
      if (!comps[1].substring(9).match(/^0+$/)) {
        frac++;
      }
      comps[1] = frac.toString();
    }
    return BigInt(comps[0] + comps[1]);
  }
  function getGasStationPlugin(url) {
    return new FetchUrlFeeDataNetworkPlugin(url, async (fetchFeeData, provider, request) => {
      request.setHeader("User-Agent", "ethers");
      let response;
      try {
        const [_response, _feeData] = await Promise.all([
          request.send(),
          fetchFeeData()
        ]);
        response = _response;
        const payload = response.bodyJson.standard;
        const feeData = {
          gasPrice: _feeData.gasPrice,
          maxFeePerGas: parseUnits(payload.maxFee, 9),
          maxPriorityFeePerGas: parseUnits(payload.maxPriorityFee, 9)
        };
        return feeData;
      } catch (error) {
        assert(false, `error encountered with polygon gas station (${JSON.stringify(request.url)})`, "SERVER_ERROR", { request, response, error });
      }
    });
  }
  var injected = false;
  function injectCommonNetworks() {
    if (injected) {
      return;
    }
    injected = true;
    function registerEth(name, chainId, options) {
      const func = function() {
        const network = new Network(name, chainId);
        if (options.ensNetwork != null) {
          network.attachPlugin(new EnsPlugin(null, options.ensNetwork));
        }
        network.attachPlugin(new GasCostPlugin());
        (options.plugins || []).forEach((plugin) => {
          network.attachPlugin(plugin);
        });
        return network;
      };
      Network.register(name, func);
      Network.register(chainId, func);
      if (options.altNames) {
        options.altNames.forEach((name2) => {
          Network.register(name2, func);
        });
      }
    }
    registerEth("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] });
    registerEth("ropsten", 3, { ensNetwork: 3 });
    registerEth("rinkeby", 4, { ensNetwork: 4 });
    registerEth("goerli", 5, { ensNetwork: 5 });
    registerEth("kovan", 42, { ensNetwork: 42 });
    registerEth("sepolia", 11155111, { ensNetwork: 11155111 });
    registerEth("holesky", 17e3, { ensNetwork: 17e3 });
    registerEth("classic", 61, {});
    registerEth("classicKotti", 6, {});
    registerEth("arbitrum", 42161, {
      ensNetwork: 1
    });
    registerEth("arbitrum-goerli", 421613, {});
    registerEth("arbitrum-sepolia", 421614, {});
    registerEth("base", 8453, { ensNetwork: 1 });
    registerEth("base-goerli", 84531, {});
    registerEth("base-sepolia", 84532, {});
    registerEth("bnb", 56, { ensNetwork: 1 });
    registerEth("bnbt", 97, {});
    registerEth("linea", 59144, { ensNetwork: 1 });
    registerEth("linea-goerli", 59140, {});
    registerEth("linea-sepolia", 59141, {});
    registerEth("matic", 137, {
      ensNetwork: 1,
      plugins: [
        getGasStationPlugin("https://gasstation.polygon.technology/v2")
      ]
    });
    registerEth("matic-amoy", 80002, {});
    registerEth("matic-mumbai", 80001, {
      altNames: ["maticMumbai", "maticmum"],
      plugins: [
        getGasStationPlugin("https://gasstation-testnet.polygon.technology/v2")
      ]
    });
    registerEth("optimism", 10, {
      ensNetwork: 1,
      plugins: []
    });
    registerEth("optimism-goerli", 420, {});
    registerEth("optimism-sepolia", 11155420, {});
    registerEth("xdai", 100, { ensNetwork: 1 });
  }

  // node_modules/ethers/lib.esm/providers/subscriber-polling.js
  function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  var _provider, _poller, _interval, _blockNumber, _PollingBlockSubscriber_instances, poll_fn;
  var PollingBlockSubscriber = class {
    /**
     *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
     */
    constructor(provider) {
      __privateAdd(this, _PollingBlockSubscriber_instances);
      __privateAdd(this, _provider);
      __privateAdd(this, _poller);
      __privateAdd(this, _interval);
      // The most recent block we have scanned for events. The value -2
      // indicates we still need to fetch an initial block number
      __privateAdd(this, _blockNumber);
      __privateSet(this, _provider, provider);
      __privateSet(this, _poller, null);
      __privateSet(this, _interval, 4e3);
      __privateSet(this, _blockNumber, -2);
    }
    /**
     *  The polling interval.
     */
    get pollingInterval() {
      return __privateGet(this, _interval);
    }
    set pollingInterval(value) {
      __privateSet(this, _interval, value);
    }
    start() {
      if (__privateGet(this, _poller)) {
        return;
      }
      __privateSet(this, _poller, __privateGet(this, _provider)._setTimeout(__privateMethod(this, _PollingBlockSubscriber_instances, poll_fn).bind(this), __privateGet(this, _interval)));
      __privateMethod(this, _PollingBlockSubscriber_instances, poll_fn).call(this);
    }
    stop() {
      if (!__privateGet(this, _poller)) {
        return;
      }
      __privateGet(this, _provider)._clearTimeout(__privateGet(this, _poller));
      __privateSet(this, _poller, null);
    }
    pause(dropWhilePaused) {
      this.stop();
      if (dropWhilePaused) {
        __privateSet(this, _blockNumber, -2);
      }
    }
    resume() {
      this.start();
    }
  };
  _provider = new WeakMap();
  _poller = new WeakMap();
  _interval = new WeakMap();
  _blockNumber = new WeakMap();
  _PollingBlockSubscriber_instances = new WeakSet();
  poll_fn = async function() {
    try {
      const blockNumber = await __privateGet(this, _provider).getBlockNumber();
      if (__privateGet(this, _blockNumber) === -2) {
        __privateSet(this, _blockNumber, blockNumber);
        return;
      }
      if (blockNumber !== __privateGet(this, _blockNumber)) {
        for (let b4 = __privateGet(this, _blockNumber) + 1; b4 <= blockNumber; b4++) {
          if (__privateGet(this, _poller) == null) {
            return;
          }
          await __privateGet(this, _provider).emit("block", b4);
        }
        __privateSet(this, _blockNumber, blockNumber);
      }
    } catch (error) {
    }
    if (__privateGet(this, _poller) == null) {
      return;
    }
    __privateSet(this, _poller, __privateGet(this, _provider)._setTimeout(__privateMethod(this, _PollingBlockSubscriber_instances, poll_fn).bind(this), __privateGet(this, _interval)));
  };
  var _provider2, _poll, _running;
  var OnBlockSubscriber = class {
    /**
     *  Create a new **OnBlockSubscriber** attached to %%provider%%.
     */
    constructor(provider) {
      __privateAdd(this, _provider2);
      __privateAdd(this, _poll);
      __privateAdd(this, _running);
      __privateSet(this, _provider2, provider);
      __privateSet(this, _running, false);
      __privateSet(this, _poll, (blockNumber) => {
        this._poll(blockNumber, __privateGet(this, _provider2));
      });
    }
    /**
     *  Called on every new block.
     */
    async _poll(blockNumber, provider) {
      throw new Error("sub-classes must override this");
    }
    start() {
      if (__privateGet(this, _running)) {
        return;
      }
      __privateSet(this, _running, true);
      __privateGet(this, _poll).call(this, -2);
      __privateGet(this, _provider2).on("block", __privateGet(this, _poll));
    }
    stop() {
      if (!__privateGet(this, _running)) {
        return;
      }
      __privateSet(this, _running, false);
      __privateGet(this, _provider2).off("block", __privateGet(this, _poll));
    }
    pause(dropWhilePaused) {
      this.stop();
    }
    resume() {
      this.start();
    }
  };
  _provider2 = new WeakMap();
  _poll = new WeakMap();
  _running = new WeakMap();
  var _tag, _lastBlock;
  var PollingBlockTagSubscriber = class extends OnBlockSubscriber {
    constructor(provider, tag) {
      super(provider);
      __privateAdd(this, _tag);
      __privateAdd(this, _lastBlock);
      __privateSet(this, _tag, tag);
      __privateSet(this, _lastBlock, -2);
    }
    pause(dropWhilePaused) {
      if (dropWhilePaused) {
        __privateSet(this, _lastBlock, -2);
      }
      super.pause(dropWhilePaused);
    }
    async _poll(blockNumber, provider) {
      const block = await provider.getBlock(__privateGet(this, _tag));
      if (block == null) {
        return;
      }
      if (__privateGet(this, _lastBlock) === -2) {
        __privateSet(this, _lastBlock, block.number);
      } else if (block.number > __privateGet(this, _lastBlock)) {
        provider.emit(__privateGet(this, _tag), block.number);
        __privateSet(this, _lastBlock, block.number);
      }
    }
  };
  _tag = new WeakMap();
  _lastBlock = new WeakMap();
  var _filter2;
  var PollingOrphanSubscriber = class extends OnBlockSubscriber {
    constructor(provider, filter) {
      super(provider);
      __privateAdd(this, _filter2);
      __privateSet(this, _filter2, copy(filter));
    }
    async _poll(blockNumber, provider) {
      throw new Error("@TODO");
      console.log(__privateGet(this, _filter2));
    }
  };
  _filter2 = new WeakMap();
  var _hash;
  var PollingTransactionSubscriber = class extends OnBlockSubscriber {
    /**
     *  Create a new **PollingTransactionSubscriber** attached to
     *  %%provider%%, listening for %%hash%%.
     */
    constructor(provider, hash2) {
      super(provider);
      __privateAdd(this, _hash);
      __privateSet(this, _hash, hash2);
    }
    async _poll(blockNumber, provider) {
      const tx = await provider.getTransactionReceipt(__privateGet(this, _hash));
      if (tx) {
        provider.emit(__privateGet(this, _hash), tx);
      }
    }
  };
  _hash = new WeakMap();
  var _provider3, _filter3, _poller2, _running2, _blockNumber2, _PollingEventSubscriber_instances, poll_fn2;
  var PollingEventSubscriber = class {
    /**
     *  Create a new **PollingTransactionSubscriber** attached to
     *  %%provider%%, listening for %%filter%%.
     */
    constructor(provider, filter) {
      __privateAdd(this, _PollingEventSubscriber_instances);
      __privateAdd(this, _provider3);
      __privateAdd(this, _filter3);
      __privateAdd(this, _poller2);
      __privateAdd(this, _running2);
      // The most recent block we have scanned for events. The value -2
      // indicates we still need to fetch an initial block number
      __privateAdd(this, _blockNumber2);
      __privateSet(this, _provider3, provider);
      __privateSet(this, _filter3, copy(filter));
      __privateSet(this, _poller2, __privateMethod(this, _PollingEventSubscriber_instances, poll_fn2).bind(this));
      __privateSet(this, _running2, false);
      __privateSet(this, _blockNumber2, -2);
    }
    start() {
      if (__privateGet(this, _running2)) {
        return;
      }
      __privateSet(this, _running2, true);
      if (__privateGet(this, _blockNumber2) === -2) {
        __privateGet(this, _provider3).getBlockNumber().then((blockNumber) => {
          __privateSet(this, _blockNumber2, blockNumber);
        });
      }
      __privateGet(this, _provider3).on("block", __privateGet(this, _poller2));
    }
    stop() {
      if (!__privateGet(this, _running2)) {
        return;
      }
      __privateSet(this, _running2, false);
      __privateGet(this, _provider3).off("block", __privateGet(this, _poller2));
    }
    pause(dropWhilePaused) {
      this.stop();
      if (dropWhilePaused) {
        __privateSet(this, _blockNumber2, -2);
      }
    }
    resume() {
      this.start();
    }
  };
  _provider3 = new WeakMap();
  _filter3 = new WeakMap();
  _poller2 = new WeakMap();
  _running2 = new WeakMap();
  _blockNumber2 = new WeakMap();
  _PollingEventSubscriber_instances = new WeakSet();
  poll_fn2 = async function(blockNumber) {
    if (__privateGet(this, _blockNumber2) === -2) {
      return;
    }
    const filter = copy(__privateGet(this, _filter3));
    filter.fromBlock = __privateGet(this, _blockNumber2) + 1;
    filter.toBlock = blockNumber;
    const logs = await __privateGet(this, _provider3).getLogs(filter);
    if (logs.length === 0) {
      if (__privateGet(this, _blockNumber2) < blockNumber - 60) {
        __privateSet(this, _blockNumber2, blockNumber - 60);
      }
      return;
    }
    for (const log of logs) {
      __privateGet(this, _provider3).emit(__privateGet(this, _filter3), log);
      __privateSet(this, _blockNumber2, log.blockNumber);
    }
  };

  // node_modules/ethers/lib.esm/providers/abstract-provider.js
  var BN_23 = BigInt(2);
  var MAX_CCIP_REDIRECTS = 10;
  function isPromise(value) {
    return value && typeof value.then === "function";
  }
  function getTag(prefix, value) {
    return prefix + ":" + JSON.stringify(value, (k2, v2) => {
      if (v2 == null) {
        return "null";
      }
      if (typeof v2 === "bigint") {
        return `bigint:${v2.toString()}`;
      }
      if (typeof v2 === "string") {
        return v2.toLowerCase();
      }
      if (typeof v2 === "object" && !Array.isArray(v2)) {
        const keys = Object.keys(v2);
        keys.sort();
        return keys.reduce((accum, key) => {
          accum[key] = v2[key];
          return accum;
        }, {});
      }
      return v2;
    });
  }
  var UnmanagedSubscriber = class {
    /**
     *  Create a new UnmanagedSubscriber with %%name%%.
     */
    constructor(name) {
      /**
       *  The name fof the event.
       */
      __publicField(this, "name");
      defineProperties(this, { name });
    }
    start() {
    }
    stop() {
    }
    pause(dropWhilePaused) {
    }
    resume() {
    }
  };
  function copy2(value) {
    return JSON.parse(JSON.stringify(value));
  }
  function concisify(items) {
    items = Array.from(new Set(items).values());
    items.sort();
    return items;
  }
  async function getSubscription(_event2, provider) {
    if (_event2 == null) {
      throw new Error("invalid event");
    }
    if (Array.isArray(_event2)) {
      _event2 = { topics: _event2 };
    }
    if (typeof _event2 === "string") {
      switch (_event2) {
        case "block":
        case "debug":
        case "error":
        case "finalized":
        case "network":
        case "pending":
        case "safe": {
          return { type: _event2, tag: _event2 };
        }
      }
    }
    if (isHexString(_event2, 32)) {
      const hash2 = _event2.toLowerCase();
      return { type: "transaction", tag: getTag("tx", { hash: hash2 }), hash: hash2 };
    }
    if (_event2.orphan) {
      const event = _event2;
      return { type: "orphan", tag: getTag("orphan", event), filter: copy2(event) };
    }
    if (_event2.address || _event2.topics) {
      const event = _event2;
      const filter = {
        topics: (event.topics || []).map((t3) => {
          if (t3 == null) {
            return null;
          }
          if (Array.isArray(t3)) {
            return concisify(t3.map((t4) => t4.toLowerCase()));
          }
          return t3.toLowerCase();
        })
      };
      if (event.address) {
        const addresses = [];
        const promises = [];
        const addAddress = (addr) => {
          if (isHexString(addr)) {
            addresses.push(addr);
          } else {
            promises.push((async () => {
              addresses.push(await resolveAddress(addr, provider));
            })());
          }
        };
        if (Array.isArray(event.address)) {
          event.address.forEach(addAddress);
        } else {
          addAddress(event.address);
        }
        if (promises.length) {
          await Promise.all(promises);
        }
        filter.address = concisify(addresses.map((a3) => a3.toLowerCase()));
      }
      return { filter, tag: getTag("event", filter), type: "event" };
    }
    assertArgument(false, "unknown ProviderEvent", "event", _event2);
  }
  function getTime2() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  var defaultOptions = {
    cacheTimeout: 250,
    pollingInterval: 4e3
  };
  var _subs, _plugins2, _pausedState, _destroyed, _networkPromise, _anyNetwork, _performCache, _lastBlockNumber, _nextTimer, _timers, _disableCcipRead, _options4, _AbstractProvider_instances, perform_fn, call_fn, checkNetwork_fn, getAccountValue_fn, getBlock_fn, hasSub_fn, getSub_fn;
  var AbstractProvider = class {
    /**
     *  Create a new **AbstractProvider** connected to %%network%%, or
     *  use the various network detection capabilities to discover the
     *  [[Network]] if necessary.
     */
    constructor(_network3, options) {
      __privateAdd(this, _AbstractProvider_instances);
      __privateAdd(this, _subs);
      __privateAdd(this, _plugins2);
      // null=unpaused, true=paused+dropWhilePaused, false=paused
      __privateAdd(this, _pausedState);
      __privateAdd(this, _destroyed);
      __privateAdd(this, _networkPromise);
      __privateAdd(this, _anyNetwork);
      __privateAdd(this, _performCache);
      // The most recent block number if running an event or -1 if no "block" event
      __privateAdd(this, _lastBlockNumber);
      __privateAdd(this, _nextTimer);
      __privateAdd(this, _timers);
      __privateAdd(this, _disableCcipRead);
      __privateAdd(this, _options4);
      __privateSet(this, _options4, Object.assign({}, defaultOptions, options || {}));
      if (_network3 === "any") {
        __privateSet(this, _anyNetwork, true);
        __privateSet(this, _networkPromise, null);
      } else if (_network3) {
        const network = Network.from(_network3);
        __privateSet(this, _anyNetwork, false);
        __privateSet(this, _networkPromise, Promise.resolve(network));
        setTimeout(() => {
          this.emit("network", network, null);
        }, 0);
      } else {
        __privateSet(this, _anyNetwork, false);
        __privateSet(this, _networkPromise, null);
      }
      __privateSet(this, _lastBlockNumber, -1);
      __privateSet(this, _performCache, /* @__PURE__ */ new Map());
      __privateSet(this, _subs, /* @__PURE__ */ new Map());
      __privateSet(this, _plugins2, /* @__PURE__ */ new Map());
      __privateSet(this, _pausedState, null);
      __privateSet(this, _destroyed, false);
      __privateSet(this, _nextTimer, 1);
      __privateSet(this, _timers, /* @__PURE__ */ new Map());
      __privateSet(this, _disableCcipRead, false);
    }
    get pollingInterval() {
      return __privateGet(this, _options4).pollingInterval;
    }
    /**
     *  Returns ``this``, to allow an **AbstractProvider** to implement
     *  the [[ContractRunner]] interface.
     */
    get provider() {
      return this;
    }
    /**
     *  Returns all the registered plug-ins.
     */
    get plugins() {
      return Array.from(__privateGet(this, _plugins2).values());
    }
    /**
     *  Attach a new plug-in.
     */
    attachPlugin(plugin) {
      if (__privateGet(this, _plugins2).get(plugin.name)) {
        throw new Error(`cannot replace existing plugin: ${plugin.name} `);
      }
      __privateGet(this, _plugins2).set(plugin.name, plugin.connect(this));
      return this;
    }
    /**
     *  Get a plugin by name.
     */
    getPlugin(name) {
      return __privateGet(this, _plugins2).get(name) || null;
    }
    /**
     *  Prevent any CCIP-read operation, regardless of whether requested
     *  in a [[call]] using ``enableCcipRead``.
     */
    get disableCcipRead() {
      return __privateGet(this, _disableCcipRead);
    }
    set disableCcipRead(value) {
      __privateSet(this, _disableCcipRead, !!value);
    }
    /**
     *  Resolves to the data for executing the CCIP-read operations.
     */
    async ccipReadFetch(tx, calldata, urls) {
      if (this.disableCcipRead || urls.length === 0 || tx.to == null) {
        return null;
      }
      const sender = tx.to.toLowerCase();
      const data = calldata.toLowerCase();
      const errorMessages = [];
      for (let i5 = 0; i5 < urls.length; i5++) {
        const url = urls[i5];
        const href = url.replace("{sender}", sender).replace("{data}", data);
        const request = new FetchRequest(href);
        if (url.indexOf("{data}") === -1) {
          request.body = { data, sender };
        }
        this.emit("debug", { action: "sendCcipReadFetchRequest", request, index: i5, urls });
        let errorMessage = "unknown error";
        let resp;
        try {
          resp = await request.send();
        } catch (error) {
          errorMessages.push(error.message);
          this.emit("debug", { action: "receiveCcipReadFetchError", request, result: { error } });
          continue;
        }
        try {
          const result = resp.bodyJson;
          if (result.data) {
            this.emit("debug", { action: "receiveCcipReadFetchResult", request, result });
            return result.data;
          }
          if (result.message) {
            errorMessage = result.message;
          }
          this.emit("debug", { action: "receiveCcipReadFetchError", request, result });
        } catch (error) {
        }
        assert(resp.statusCode < 400 || resp.statusCode >= 500, `response not found during CCIP fetch: ${errorMessage}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: tx, info: { url, errorMessage } });
        errorMessages.push(errorMessage);
      }
      assert(false, `error encountered during CCIP fetch: ${errorMessages.map((m2) => JSON.stringify(m2)).join(", ")}`, "OFFCHAIN_FAULT", {
        reason: "500_SERVER_ERROR",
        transaction: tx,
        info: { urls, errorMessages }
      });
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a block before
     *  returning it, to add additional properties or an alternate
     *  sub-class of [[Block]].
     */
    _wrapBlock(value, network) {
      return new Block(formatBlock(value), this);
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a log before
     *  returning it, to add additional properties or an alternate
     *  sub-class of [[Log]].
     */
    _wrapLog(value, network) {
      return new Log(formatLog(value), this);
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a transaction
     *  receipt before returning it, to add additional properties or an
     *  alternate sub-class of [[TransactionReceipt]].
     */
    _wrapTransactionReceipt(value, network) {
      return new TransactionReceipt(formatTransactionReceipt(value), this);
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a transaction
     *  response before returning it, to add additional properties or an
     *  alternate sub-class of [[TransactionResponse]].
     */
    _wrapTransactionResponse(tx, network) {
      return new TransactionResponse(formatTransactionResponse(tx), this);
    }
    /**
     *  Resolves to the Network, forcing a network detection using whatever
     *  technique the sub-class requires.
     *
     *  Sub-classes **must** override this.
     */
    _detectNetwork() {
      assert(false, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
        operation: "_detectNetwork"
      });
    }
    /**
     *  Sub-classes should use this to perform all built-in operations. All
     *  methods sanitizes and normalizes the values passed into this.
     *
     *  Sub-classes **must** override this.
     */
    async _perform(req) {
      assert(false, `unsupported method: ${req.method}`, "UNSUPPORTED_OPERATION", {
        operation: req.method,
        info: req
      });
    }
    // State
    async getBlockNumber() {
      const blockNumber = getNumber(await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getBlockNumber" }), "%response");
      if (__privateGet(this, _lastBlockNumber) >= 0) {
        __privateSet(this, _lastBlockNumber, blockNumber);
      }
      return blockNumber;
    }
    /**
     *  Returns or resolves to the address for %%address%%, resolving ENS
     *  names and [[Addressable]] objects and returning if already an
     *  address.
     */
    _getAddress(address) {
      return resolveAddress(address, this);
    }
    /**
     *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
     *  negative values and returning if already a valid block tag.
     */
    _getBlockTag(blockTag) {
      if (blockTag == null) {
        return "latest";
      }
      switch (blockTag) {
        case "earliest":
          return "0x0";
        case "finalized":
        case "latest":
        case "pending":
        case "safe":
          return blockTag;
      }
      if (isHexString(blockTag)) {
        if (isHexString(blockTag, 32)) {
          return blockTag;
        }
        return toQuantity(blockTag);
      }
      if (typeof blockTag === "bigint") {
        blockTag = getNumber(blockTag, "blockTag");
      }
      if (typeof blockTag === "number") {
        if (blockTag >= 0) {
          return toQuantity(blockTag);
        }
        if (__privateGet(this, _lastBlockNumber) >= 0) {
          return toQuantity(__privateGet(this, _lastBlockNumber) + blockTag);
        }
        return this.getBlockNumber().then((b4) => toQuantity(b4 + blockTag));
      }
      assertArgument(false, "invalid blockTag", "blockTag", blockTag);
    }
    /**
     *  Returns or resolves to a filter for %%filter%%, resolving any ENS
     *  names or [[Addressable]] object and returning if already a valid
     *  filter.
     */
    _getFilter(filter) {
      const topics = (filter.topics || []).map((t3) => {
        if (t3 == null) {
          return null;
        }
        if (Array.isArray(t3)) {
          return concisify(t3.map((t4) => t4.toLowerCase()));
        }
        return t3.toLowerCase();
      });
      const blockHash = "blockHash" in filter ? filter.blockHash : void 0;
      const resolve = (_address, fromBlock2, toBlock2) => {
        let address2 = void 0;
        switch (_address.length) {
          case 0:
            break;
          case 1:
            address2 = _address[0];
            break;
          default:
            _address.sort();
            address2 = _address;
        }
        if (blockHash) {
          if (fromBlock2 != null || toBlock2 != null) {
            throw new Error("invalid filter");
          }
        }
        const filter2 = {};
        if (address2) {
          filter2.address = address2;
        }
        if (topics.length) {
          filter2.topics = topics;
        }
        if (fromBlock2) {
          filter2.fromBlock = fromBlock2;
        }
        if (toBlock2) {
          filter2.toBlock = toBlock2;
        }
        if (blockHash) {
          filter2.blockHash = blockHash;
        }
        return filter2;
      };
      let address = [];
      if (filter.address) {
        if (Array.isArray(filter.address)) {
          for (const addr of filter.address) {
            address.push(this._getAddress(addr));
          }
        } else {
          address.push(this._getAddress(filter.address));
        }
      }
      let fromBlock = void 0;
      if ("fromBlock" in filter) {
        fromBlock = this._getBlockTag(filter.fromBlock);
      }
      let toBlock = void 0;
      if ("toBlock" in filter) {
        toBlock = this._getBlockTag(filter.toBlock);
      }
      if (address.filter((a3) => typeof a3 !== "string").length || fromBlock != null && typeof fromBlock !== "string" || toBlock != null && typeof toBlock !== "string") {
        return Promise.all([Promise.all(address), fromBlock, toBlock]).then((result) => {
          return resolve(result[0], result[1], result[2]);
        });
      }
      return resolve(address, fromBlock, toBlock);
    }
    /**
     *  Returns or resolves to a transaction for %%request%%, resolving
     *  any ENS names or [[Addressable]] and returning if already a valid
     *  transaction.
     */
    _getTransactionRequest(_request3) {
      const request = copyRequest(_request3);
      const promises = [];
      ["to", "from"].forEach((key) => {
        if (request[key] == null) {
          return;
        }
        const addr = resolveAddress(request[key], this);
        if (isPromise(addr)) {
          promises.push(async function() {
            request[key] = await addr;
          }());
        } else {
          request[key] = addr;
        }
      });
      if (request.blockTag != null) {
        const blockTag = this._getBlockTag(request.blockTag);
        if (isPromise(blockTag)) {
          promises.push(async function() {
            request.blockTag = await blockTag;
          }());
        } else {
          request.blockTag = blockTag;
        }
      }
      if (promises.length) {
        return async function() {
          await Promise.all(promises);
          return request;
        }();
      }
      return request;
    }
    async getNetwork() {
      if (__privateGet(this, _networkPromise) == null) {
        const detectNetwork = (async () => {
          try {
            const network = await this._detectNetwork();
            this.emit("network", network, null);
            return network;
          } catch (error) {
            if (__privateGet(this, _networkPromise) === detectNetwork) {
              __privateSet(this, _networkPromise, null);
            }
            throw error;
          }
        })();
        __privateSet(this, _networkPromise, detectNetwork);
        return (await detectNetwork).clone();
      }
      const networkPromise = __privateGet(this, _networkPromise);
      const [expected, actual] = await Promise.all([
        networkPromise,
        this._detectNetwork()
        // The actual connected network
      ]);
      if (expected.chainId !== actual.chainId) {
        if (__privateGet(this, _anyNetwork)) {
          this.emit("network", actual, expected);
          if (__privateGet(this, _networkPromise) === networkPromise) {
            __privateSet(this, _networkPromise, Promise.resolve(actual));
          }
        } else {
          assert(false, `network changed: ${expected.chainId} => ${actual.chainId} `, "NETWORK_ERROR", {
            event: "changed"
          });
        }
      }
      return expected.clone();
    }
    async getFeeData() {
      const network = await this.getNetwork();
      const getFeeDataFunc = async () => {
        const { _block, gasPrice, priorityFee } = await resolveProperties({
          _block: __privateMethod(this, _AbstractProvider_instances, getBlock_fn).call(this, "latest", false),
          gasPrice: (async () => {
            try {
              const value = await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getGasPrice" });
              return getBigInt(value, "%response");
            } catch (error) {
            }
            return null;
          })(),
          priorityFee: (async () => {
            try {
              const value = await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getPriorityFee" });
              return getBigInt(value, "%response");
            } catch (error) {
            }
            return null;
          })()
        });
        let maxFeePerGas = null;
        let maxPriorityFeePerGas = null;
        const block = this._wrapBlock(_block, network);
        if (block && block.baseFeePerGas) {
          maxPriorityFeePerGas = priorityFee != null ? priorityFee : BigInt("1000000000");
          maxFeePerGas = block.baseFeePerGas * BN_23 + maxPriorityFeePerGas;
        }
        return new FeeData(gasPrice, maxFeePerGas, maxPriorityFeePerGas);
      };
      const plugin = network.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
      if (plugin) {
        const req = new FetchRequest(plugin.url);
        const feeData = await plugin.processFunc(getFeeDataFunc, this, req);
        return new FeeData(feeData.gasPrice, feeData.maxFeePerGas, feeData.maxPriorityFeePerGas);
      }
      return await getFeeDataFunc();
    }
    async estimateGas(_tx) {
      let tx = this._getTransactionRequest(_tx);
      if (isPromise(tx)) {
        tx = await tx;
      }
      return getBigInt(await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, {
        method: "estimateGas",
        transaction: tx
      }), "%response");
    }
    async call(_tx) {
      const { tx, blockTag } = await resolveProperties({
        tx: this._getTransactionRequest(_tx),
        blockTag: this._getBlockTag(_tx.blockTag)
      });
      return await __privateMethod(this, _AbstractProvider_instances, checkNetwork_fn).call(this, __privateMethod(this, _AbstractProvider_instances, call_fn).call(this, tx, blockTag, _tx.enableCcipRead ? 0 : -1));
    }
    async getBalance(address, blockTag) {
      return getBigInt(await __privateMethod(this, _AbstractProvider_instances, getAccountValue_fn).call(this, { method: "getBalance" }, address, blockTag), "%response");
    }
    async getTransactionCount(address, blockTag) {
      return getNumber(await __privateMethod(this, _AbstractProvider_instances, getAccountValue_fn).call(this, { method: "getTransactionCount" }, address, blockTag), "%response");
    }
    async getCode(address, blockTag) {
      return hexlify(await __privateMethod(this, _AbstractProvider_instances, getAccountValue_fn).call(this, { method: "getCode" }, address, blockTag));
    }
    async getStorage(address, _position, blockTag) {
      const position = getBigInt(_position, "position");
      return hexlify(await __privateMethod(this, _AbstractProvider_instances, getAccountValue_fn).call(this, { method: "getStorage", position }, address, blockTag));
    }
    // Write
    async broadcastTransaction(signedTx) {
      const { blockNumber, hash: hash2, network } = await resolveProperties({
        blockNumber: this.getBlockNumber(),
        hash: this._perform({
          method: "broadcastTransaction",
          signedTransaction: signedTx
        }),
        network: this.getNetwork()
      });
      const tx = Transaction.from(signedTx);
      if (tx.hash !== hash2) {
        throw new Error("@TODO: the returned hash did not match");
      }
      return this._wrapTransactionResponse(tx, network).replaceableTransaction(blockNumber);
    }
    // Queries
    async getBlock(block, prefetchTxs) {
      const { network, params } = await resolveProperties({
        network: this.getNetwork(),
        params: __privateMethod(this, _AbstractProvider_instances, getBlock_fn).call(this, block, !!prefetchTxs)
      });
      if (params == null) {
        return null;
      }
      return this._wrapBlock(params, network);
    }
    async getTransaction(hash2) {
      const { network, params } = await resolveProperties({
        network: this.getNetwork(),
        params: __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getTransaction", hash: hash2 })
      });
      if (params == null) {
        return null;
      }
      return this._wrapTransactionResponse(params, network);
    }
    async getTransactionReceipt(hash2) {
      const { network, params } = await resolveProperties({
        network: this.getNetwork(),
        params: __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getTransactionReceipt", hash: hash2 })
      });
      if (params == null) {
        return null;
      }
      if (params.gasPrice == null && params.effectiveGasPrice == null) {
        const tx = await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getTransaction", hash: hash2 });
        if (tx == null) {
          throw new Error("report this; could not find tx or effectiveGasPrice");
        }
        params.effectiveGasPrice = tx.gasPrice;
      }
      return this._wrapTransactionReceipt(params, network);
    }
    async getTransactionResult(hash2) {
      const { result } = await resolveProperties({
        network: this.getNetwork(),
        result: __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getTransactionResult", hash: hash2 })
      });
      if (result == null) {
        return null;
      }
      return hexlify(result);
    }
    // Bloom-filter Queries
    async getLogs(_filter4) {
      let filter = this._getFilter(_filter4);
      if (isPromise(filter)) {
        filter = await filter;
      }
      const { network, params } = await resolveProperties({
        network: this.getNetwork(),
        params: __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getLogs", filter })
      });
      return params.map((p3) => this._wrapLog(p3, network));
    }
    // ENS
    _getProvider(chainId) {
      assert(false, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
        operation: "_getProvider()"
      });
    }
    async getResolver(name) {
      return await EnsResolver.fromName(this, name);
    }
    async getAvatar(name) {
      const resolver = await this.getResolver(name);
      if (resolver) {
        return await resolver.getAvatar();
      }
      return null;
    }
    async resolveName(name) {
      const resolver = await this.getResolver(name);
      if (resolver) {
        return await resolver.getAddress();
      }
      return null;
    }
    async lookupAddress(address) {
      address = getAddress(address);
      const node = namehash(address.substring(2).toLowerCase() + ".addr.reverse");
      try {
        const ensAddr = await EnsResolver.getEnsAddress(this);
        const ensContract = new Contract(ensAddr, [
          "function resolver(bytes32) view returns (address)"
        ], this);
        const resolver = await ensContract.resolver(node);
        if (resolver == null || resolver === ZeroAddress) {
          return null;
        }
        const resolverContract = new Contract(resolver, [
          "function name(bytes32) view returns (string)"
        ], this);
        const name = await resolverContract.name(node);
        const check = await this.resolveName(name);
        if (check !== address) {
          return null;
        }
        return name;
      } catch (error) {
        if (isError(error, "BAD_DATA") && error.value === "0x") {
          return null;
        }
        if (isError(error, "CALL_EXCEPTION")) {
          return null;
        }
        throw error;
      }
      return null;
    }
    async waitForTransaction(hash2, _confirms, timeout) {
      const confirms = _confirms != null ? _confirms : 1;
      if (confirms === 0) {
        return this.getTransactionReceipt(hash2);
      }
      return new Promise(async (resolve, reject) => {
        let timer = null;
        const listener = async (blockNumber) => {
          try {
            const receipt = await this.getTransactionReceipt(hash2);
            if (receipt != null) {
              if (blockNumber - receipt.blockNumber + 1 >= confirms) {
                resolve(receipt);
                if (timer) {
                  clearTimeout(timer);
                  timer = null;
                }
                return;
              }
            }
          } catch (error) {
            console.log("EEE", error);
          }
          this.once("block", listener);
        };
        if (timeout != null) {
          timer = setTimeout(() => {
            if (timer == null) {
              return;
            }
            timer = null;
            this.off("block", listener);
            reject(makeError("timeout", "TIMEOUT", { reason: "timeout" }));
          }, timeout);
        }
        listener(await this.getBlockNumber());
      });
    }
    async waitForBlock(blockTag) {
      assert(false, "not implemented yet", "NOT_IMPLEMENTED", {
        operation: "waitForBlock"
      });
    }
    /**
     *  Clear a timer created using the [[_setTimeout]] method.
     */
    _clearTimeout(timerId) {
      const timer = __privateGet(this, _timers).get(timerId);
      if (!timer) {
        return;
      }
      if (timer.timer) {
        clearTimeout(timer.timer);
      }
      __privateGet(this, _timers).delete(timerId);
    }
    /**
     *  Create a timer that will execute %%func%% after at least %%timeout%%
     *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
     *  in the next event loop.
     *
     *  [Pausing](AbstractProvider-paused) the provider will pause any
     *  associated timers.
     */
    _setTimeout(_func, timeout) {
      if (timeout == null) {
        timeout = 0;
      }
      const timerId = __privateWrapper(this, _nextTimer)._++;
      const func = () => {
        __privateGet(this, _timers).delete(timerId);
        _func();
      };
      if (this.paused) {
        __privateGet(this, _timers).set(timerId, { timer: null, func, time: timeout });
      } else {
        const timer = setTimeout(func, timeout);
        __privateGet(this, _timers).set(timerId, { timer, func, time: getTime2() });
      }
      return timerId;
    }
    /**
     *  Perform %%func%% on each subscriber.
     */
    _forEachSubscriber(func) {
      for (const sub of __privateGet(this, _subs).values()) {
        func(sub.subscriber);
      }
    }
    /**
     *  Sub-classes may override this to customize subscription
     *  implementations.
     */
    _getSubscriber(sub) {
      switch (sub.type) {
        case "debug":
        case "error":
        case "network":
          return new UnmanagedSubscriber(sub.type);
        case "block": {
          const subscriber = new PollingBlockSubscriber(this);
          subscriber.pollingInterval = this.pollingInterval;
          return subscriber;
        }
        case "safe":
        case "finalized":
          return new PollingBlockTagSubscriber(this, sub.type);
        case "event":
          return new PollingEventSubscriber(this, sub.filter);
        case "transaction":
          return new PollingTransactionSubscriber(this, sub.hash);
        case "orphan":
          return new PollingOrphanSubscriber(this, sub.filter);
      }
      throw new Error(`unsupported event: ${sub.type}`);
    }
    /**
     *  If a [[Subscriber]] fails and needs to replace itself, this
     *  method may be used.
     *
     *  For example, this is used for providers when using the
     *  ``eth_getFilterChanges`` method, which can return null if state
     *  filters are not supported by the backend, allowing the Subscriber
     *  to swap in a [[PollingEventSubscriber]].
     */
    _recoverSubscriber(oldSub, newSub) {
      for (const sub of __privateGet(this, _subs).values()) {
        if (sub.subscriber === oldSub) {
          if (sub.started) {
            sub.subscriber.stop();
          }
          sub.subscriber = newSub;
          if (sub.started) {
            newSub.start();
          }
          if (__privateGet(this, _pausedState) != null) {
            newSub.pause(__privateGet(this, _pausedState));
          }
          break;
        }
      }
    }
    async on(event, listener) {
      const sub = await __privateMethod(this, _AbstractProvider_instances, getSub_fn).call(this, event);
      sub.listeners.push({ listener, once: false });
      if (!sub.started) {
        sub.subscriber.start();
        sub.started = true;
        if (__privateGet(this, _pausedState) != null) {
          sub.subscriber.pause(__privateGet(this, _pausedState));
        }
      }
      return this;
    }
    async once(event, listener) {
      const sub = await __privateMethod(this, _AbstractProvider_instances, getSub_fn).call(this, event);
      sub.listeners.push({ listener, once: true });
      if (!sub.started) {
        sub.subscriber.start();
        sub.started = true;
        if (__privateGet(this, _pausedState) != null) {
          sub.subscriber.pause(__privateGet(this, _pausedState));
        }
      }
      return this;
    }
    async emit(event, ...args) {
      const sub = await __privateMethod(this, _AbstractProvider_instances, hasSub_fn).call(this, event, args);
      if (!sub || sub.listeners.length === 0) {
        return false;
      }
      ;
      const count = sub.listeners.length;
      sub.listeners = sub.listeners.filter(({ listener, once }) => {
        const payload = new EventPayload(this, once ? null : listener, event);
        try {
          listener.call(this, ...args, payload);
        } catch (error) {
        }
        return !once;
      });
      if (sub.listeners.length === 0) {
        if (sub.started) {
          sub.subscriber.stop();
        }
        __privateGet(this, _subs).delete(sub.tag);
      }
      return count > 0;
    }
    async listenerCount(event) {
      if (event) {
        const sub = await __privateMethod(this, _AbstractProvider_instances, hasSub_fn).call(this, event);
        if (!sub) {
          return 0;
        }
        return sub.listeners.length;
      }
      let total = 0;
      for (const { listeners } of __privateGet(this, _subs).values()) {
        total += listeners.length;
      }
      return total;
    }
    async listeners(event) {
      if (event) {
        const sub = await __privateMethod(this, _AbstractProvider_instances, hasSub_fn).call(this, event);
        if (!sub) {
          return [];
        }
        return sub.listeners.map(({ listener }) => listener);
      }
      let result = [];
      for (const { listeners } of __privateGet(this, _subs).values()) {
        result = result.concat(listeners.map(({ listener }) => listener));
      }
      return result;
    }
    async off(event, listener) {
      const sub = await __privateMethod(this, _AbstractProvider_instances, hasSub_fn).call(this, event);
      if (!sub) {
        return this;
      }
      if (listener) {
        const index = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
        if (index >= 0) {
          sub.listeners.splice(index, 1);
        }
      }
      if (!listener || sub.listeners.length === 0) {
        if (sub.started) {
          sub.subscriber.stop();
        }
        __privateGet(this, _subs).delete(sub.tag);
      }
      return this;
    }
    async removeAllListeners(event) {
      if (event) {
        const { tag, started, subscriber } = await __privateMethod(this, _AbstractProvider_instances, getSub_fn).call(this, event);
        if (started) {
          subscriber.stop();
        }
        __privateGet(this, _subs).delete(tag);
      } else {
        for (const [tag, { started, subscriber }] of __privateGet(this, _subs)) {
          if (started) {
            subscriber.stop();
          }
          __privateGet(this, _subs).delete(tag);
        }
      }
      return this;
    }
    // Alias for "on"
    async addListener(event, listener) {
      return await this.on(event, listener);
    }
    // Alias for "off"
    async removeListener(event, listener) {
      return this.off(event, listener);
    }
    /**
     *  If this provider has been destroyed using the [[destroy]] method.
     *
     *  Once destroyed, all resources are reclaimed, internal event loops
     *  and timers are cleaned up and no further requests may be sent to
     *  the provider.
     */
    get destroyed() {
      return __privateGet(this, _destroyed);
    }
    /**
     *  Sub-classes may use this to shutdown any sockets or release their
     *  resources and reject any pending requests.
     *
     *  Sub-classes **must** call ``super.destroy()``.
     */
    destroy() {
      this.removeAllListeners();
      for (const timerId of __privateGet(this, _timers).keys()) {
        this._clearTimeout(timerId);
      }
      __privateSet(this, _destroyed, true);
    }
    /**
     *  Whether the provider is currently paused.
     *
     *  A paused provider will not emit any events, and generally should
     *  not make any requests to the network, but that is up to sub-classes
     *  to manage.
     *
     *  Setting ``paused = true`` is identical to calling ``.pause(false)``,
     *  which will buffer any events that occur while paused until the
     *  provider is unpaused.
     */
    get paused() {
      return __privateGet(this, _pausedState) != null;
    }
    set paused(pause) {
      if (!!pause === this.paused) {
        return;
      }
      if (this.paused) {
        this.resume();
      } else {
        this.pause(false);
      }
    }
    /**
     *  Pause the provider. If %%dropWhilePaused%%, any events that occur
     *  while paused are dropped, otherwise all events will be emitted once
     *  the provider is unpaused.
     */
    pause(dropWhilePaused) {
      __privateSet(this, _lastBlockNumber, -1);
      if (__privateGet(this, _pausedState) != null) {
        if (__privateGet(this, _pausedState) == !!dropWhilePaused) {
          return;
        }
        assert(false, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
          operation: "pause"
        });
      }
      this._forEachSubscriber((s4) => s4.pause(dropWhilePaused));
      __privateSet(this, _pausedState, !!dropWhilePaused);
      for (const timer of __privateGet(this, _timers).values()) {
        if (timer.timer) {
          clearTimeout(timer.timer);
        }
        timer.time = getTime2() - timer.time;
      }
    }
    /**
     *  Resume the provider.
     */
    resume() {
      if (__privateGet(this, _pausedState) == null) {
        return;
      }
      this._forEachSubscriber((s4) => s4.resume());
      __privateSet(this, _pausedState, null);
      for (const timer of __privateGet(this, _timers).values()) {
        let timeout = timer.time;
        if (timeout < 0) {
          timeout = 0;
        }
        timer.time = getTime2();
        setTimeout(timer.func, timeout);
      }
    }
  };
  _subs = new WeakMap();
  _plugins2 = new WeakMap();
  _pausedState = new WeakMap();
  _destroyed = new WeakMap();
  _networkPromise = new WeakMap();
  _anyNetwork = new WeakMap();
  _performCache = new WeakMap();
  _lastBlockNumber = new WeakMap();
  _nextTimer = new WeakMap();
  _timers = new WeakMap();
  _disableCcipRead = new WeakMap();
  _options4 = new WeakMap();
  _AbstractProvider_instances = new WeakSet();
  perform_fn = async function(req) {
    const timeout = __privateGet(this, _options4).cacheTimeout;
    if (timeout < 0) {
      return await this._perform(req);
    }
    const tag = getTag(req.method, req);
    let perform = __privateGet(this, _performCache).get(tag);
    if (!perform) {
      perform = this._perform(req);
      __privateGet(this, _performCache).set(tag, perform);
      setTimeout(() => {
        if (__privateGet(this, _performCache).get(tag) === perform) {
          __privateGet(this, _performCache).delete(tag);
        }
      }, timeout);
    }
    return await perform;
  };
  call_fn = async function(tx, blockTag, attempt) {
    assert(attempt < MAX_CCIP_REDIRECTS, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
      reason: "TOO_MANY_REDIRECTS",
      transaction: Object.assign({}, tx, { blockTag, enableCcipRead: true })
    });
    const transaction = copyRequest(tx);
    try {
      return hexlify(await this._perform({ method: "call", transaction, blockTag }));
    } catch (error) {
      if (!this.disableCcipRead && isCallException(error) && error.data && attempt >= 0 && blockTag === "latest" && transaction.to != null && dataSlice(error.data, 0, 4) === "0x556f1830") {
        const data = error.data;
        const txSender = await resolveAddress(transaction.to, this);
        let ccipArgs;
        try {
          ccipArgs = parseOffchainLookup(dataSlice(error.data, 4));
        } catch (error2) {
          assert(false, error2.message, "OFFCHAIN_FAULT", {
            reason: "BAD_DATA",
            transaction,
            info: { data }
          });
        }
        assert(ccipArgs.sender.toLowerCase() === txSender.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
          action: "call",
          data,
          reason: "OffchainLookup",
          transaction,
          invocation: null,
          revert: {
            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
            name: "OffchainLookup",
            args: ccipArgs.errorArgs
          }
        });
        const ccipResult = await this.ccipReadFetch(transaction, ccipArgs.calldata, ccipArgs.urls);
        assert(ccipResult != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
          reason: "FETCH_FAILED",
          transaction,
          info: { data: error.data, errorArgs: ccipArgs.errorArgs }
        });
        const tx2 = {
          to: txSender,
          data: concat([ccipArgs.selector, encodeBytes([ccipResult, ccipArgs.extraData])])
        };
        this.emit("debug", { action: "sendCcipReadCall", transaction: tx2 });
        try {
          const result = await __privateMethod(this, _AbstractProvider_instances, call_fn).call(this, tx2, blockTag, attempt + 1);
          this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, tx2), result });
          return result;
        } catch (error2) {
          this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, tx2), error: error2 });
          throw error2;
        }
      }
      throw error;
    }
  };
  checkNetwork_fn = async function(promise) {
    const { value } = await resolveProperties({
      network: this.getNetwork(),
      value: promise
    });
    return value;
  };
  getAccountValue_fn = async function(request, _address, _blockTag) {
    let address = this._getAddress(_address);
    let blockTag = this._getBlockTag(_blockTag);
    if (typeof address !== "string" || typeof blockTag !== "string") {
      [address, blockTag] = await Promise.all([address, blockTag]);
    }
    return await __privateMethod(this, _AbstractProvider_instances, checkNetwork_fn).call(this, __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, Object.assign(request, { address, blockTag })));
  };
  getBlock_fn = async function(block, includeTransactions) {
    if (isHexString(block, 32)) {
      return await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, {
        method: "getBlock",
        blockHash: block,
        includeTransactions
      });
    }
    let blockTag = this._getBlockTag(block);
    if (typeof blockTag !== "string") {
      blockTag = await blockTag;
    }
    return await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, {
      method: "getBlock",
      blockTag,
      includeTransactions
    });
  };
  hasSub_fn = async function(event, emitArgs) {
    let sub = await getSubscription(event, this);
    if (sub.type === "event" && emitArgs && emitArgs.length > 0 && emitArgs[0].removed === true) {
      sub = await getSubscription({ orphan: "drop-log", log: emitArgs[0] }, this);
    }
    return __privateGet(this, _subs).get(sub.tag) || null;
  };
  getSub_fn = async function(event) {
    const subscription = await getSubscription(event, this);
    const tag = subscription.tag;
    let sub = __privateGet(this, _subs).get(tag);
    if (!sub) {
      const subscriber = this._getSubscriber(subscription);
      const addressableMap = /* @__PURE__ */ new WeakMap();
      const nameMap = /* @__PURE__ */ new Map();
      sub = { subscriber, tag, addressableMap, nameMap, started: false, listeners: [] };
      __privateGet(this, _subs).set(tag, sub);
    }
    return sub;
  };
  function _parseString(result, start) {
    try {
      const bytes2 = _parseBytes(result, start);
      if (bytes2) {
        return toUtf8String(bytes2);
      }
    } catch (error) {
    }
    return null;
  }
  function _parseBytes(result, start) {
    if (result === "0x") {
      return null;
    }
    try {
      const offset = getNumber(dataSlice(result, start, start + 32));
      const length = getNumber(dataSlice(result, offset, offset + 32));
      return dataSlice(result, offset + 32, offset + 32 + length);
    } catch (error) {
    }
    return null;
  }
  function numPad(value) {
    const result = toBeArray(value);
    if (result.length > 32) {
      throw new Error("internal; should not happen");
    }
    const padded = new Uint8Array(32);
    padded.set(result, 32 - result.length);
    return padded;
  }
  function bytesPad(value) {
    if (value.length % 32 === 0) {
      return value;
    }
    const result = new Uint8Array(Math.ceil(value.length / 32) * 32);
    result.set(value);
    return result;
  }
  var empty = new Uint8Array([]);
  function encodeBytes(datas) {
    const result = [];
    let byteCount = 0;
    for (let i5 = 0; i5 < datas.length; i5++) {
      result.push(empty);
      byteCount += 32;
    }
    for (let i5 = 0; i5 < datas.length; i5++) {
      const data = getBytes(datas[i5]);
      result[i5] = numPad(byteCount);
      result.push(numPad(data.length));
      result.push(bytesPad(data));
      byteCount += 32 + Math.ceil(data.length / 32) * 32;
    }
    return concat(result);
  }
  var zeros = "0x0000000000000000000000000000000000000000000000000000000000000000";
  function parseOffchainLookup(data) {
    const result = {
      sender: "",
      urls: [],
      calldata: "",
      selector: "",
      extraData: "",
      errorArgs: []
    };
    assert(dataLength(data) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
      reason: "insufficient OffchainLookup data"
    });
    const sender = dataSlice(data, 0, 32);
    assert(dataSlice(sender, 0, 12) === dataSlice(zeros, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup sender"
    });
    result.sender = dataSlice(sender, 12);
    try {
      const urls = [];
      const urlsOffset = getNumber(dataSlice(data, 32, 64));
      const urlsLength = getNumber(dataSlice(data, urlsOffset, urlsOffset + 32));
      const urlsData = dataSlice(data, urlsOffset + 32);
      for (let u3 = 0; u3 < urlsLength; u3++) {
        const url = _parseString(urlsData, u3 * 32);
        if (url == null) {
          throw new Error("abort");
        }
        urls.push(url);
      }
      result.urls = urls;
    } catch (error) {
      assert(false, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup urls"
      });
    }
    try {
      const calldata = _parseBytes(data, 64);
      if (calldata == null) {
        throw new Error("abort");
      }
      result.calldata = calldata;
    } catch (error) {
      assert(false, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup calldata"
      });
    }
    assert(dataSlice(data, 100, 128) === dataSlice(zeros, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup callbaackSelector"
    });
    result.selector = dataSlice(data, 96, 100);
    try {
      const extraData = _parseBytes(data, 128);
      if (extraData == null) {
        throw new Error("abort");
      }
      result.extraData = extraData;
    } catch (error) {
      assert(false, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup extraData"
      });
    }
    result.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((k2) => result[k2]);
    return result;
  }

  // node_modules/ethers/lib.esm/providers/abstract-signer.js
  function checkProvider(signer, operation) {
    if (signer.provider) {
      return signer.provider;
    }
    assert(false, "missing provider", "UNSUPPORTED_OPERATION", { operation });
  }
  async function populate(signer, tx) {
    let pop = copyRequest(tx);
    if (pop.to != null) {
      pop.to = resolveAddress(pop.to, signer);
    }
    if (pop.from != null) {
      const from = pop.from;
      pop.from = Promise.all([
        signer.getAddress(),
        resolveAddress(from, signer)
      ]).then(([address, from2]) => {
        assertArgument(address.toLowerCase() === from2.toLowerCase(), "transaction from mismatch", "tx.from", from2);
        return address;
      });
    } else {
      pop.from = signer.getAddress();
    }
    return await resolveProperties(pop);
  }
  var AbstractSigner = class {
    /**
     *  Creates a new Signer connected to %%provider%%.
     */
    constructor(provider) {
      /**
       *  The provider this signer is connected to.
       */
      __publicField(this, "provider");
      defineProperties(this, { provider: provider || null });
    }
    async getNonce(blockTag) {
      return checkProvider(this, "getTransactionCount").getTransactionCount(await this.getAddress(), blockTag);
    }
    async populateCall(tx) {
      const pop = await populate(this, tx);
      return pop;
    }
    async populateTransaction(tx) {
      const provider = checkProvider(this, "populateTransaction");
      const pop = await populate(this, tx);
      if (pop.nonce == null) {
        pop.nonce = await this.getNonce("pending");
      }
      if (pop.gasLimit == null) {
        pop.gasLimit = await this.estimateGas(pop);
      }
      const network = await this.provider.getNetwork();
      if (pop.chainId != null) {
        const chainId = getBigInt(pop.chainId);
        assertArgument(chainId === network.chainId, "transaction chainId mismatch", "tx.chainId", tx.chainId);
      } else {
        pop.chainId = network.chainId;
      }
      const hasEip1559 = pop.maxFeePerGas != null || pop.maxPriorityFeePerGas != null;
      if (pop.gasPrice != null && (pop.type === 2 || hasEip1559)) {
        assertArgument(false, "eip-1559 transaction do not support gasPrice", "tx", tx);
      } else if ((pop.type === 0 || pop.type === 1) && hasEip1559) {
        assertArgument(false, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", tx);
      }
      if ((pop.type === 2 || pop.type == null) && (pop.maxFeePerGas != null && pop.maxPriorityFeePerGas != null)) {
        pop.type = 2;
      } else if (pop.type === 0 || pop.type === 1) {
        const feeData = await provider.getFeeData();
        assert(feeData.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
          operation: "getGasPrice"
        });
        if (pop.gasPrice == null) {
          pop.gasPrice = feeData.gasPrice;
        }
      } else {
        const feeData = await provider.getFeeData();
        if (pop.type == null) {
          if (feeData.maxFeePerGas != null && feeData.maxPriorityFeePerGas != null) {
            pop.type = 2;
            if (pop.gasPrice != null) {
              const gasPrice = pop.gasPrice;
              delete pop.gasPrice;
              pop.maxFeePerGas = gasPrice;
              pop.maxPriorityFeePerGas = gasPrice;
            } else {
              if (pop.maxFeePerGas == null) {
                pop.maxFeePerGas = feeData.maxFeePerGas;
              }
              if (pop.maxPriorityFeePerGas == null) {
                pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
              }
            }
          } else if (feeData.gasPrice != null) {
            assert(!hasEip1559, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
              operation: "populateTransaction"
            });
            if (pop.gasPrice == null) {
              pop.gasPrice = feeData.gasPrice;
            }
            pop.type = 0;
          } else {
            assert(false, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
              operation: "signer.getFeeData"
            });
          }
        } else if (pop.type === 2 || pop.type === 3) {
          if (pop.maxFeePerGas == null) {
            pop.maxFeePerGas = feeData.maxFeePerGas;
          }
          if (pop.maxPriorityFeePerGas == null) {
            pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
          }
        }
      }
      return await resolveProperties(pop);
    }
    async estimateGas(tx) {
      return checkProvider(this, "estimateGas").estimateGas(await this.populateCall(tx));
    }
    async call(tx) {
      return checkProvider(this, "call").call(await this.populateCall(tx));
    }
    async resolveName(name) {
      const provider = checkProvider(this, "resolveName");
      return await provider.resolveName(name);
    }
    async sendTransaction(tx) {
      const provider = checkProvider(this, "sendTransaction");
      const pop = await this.populateTransaction(tx);
      delete pop.from;
      const txObj = Transaction.from(pop);
      return await provider.broadcastTransaction(await this.signTransaction(txObj));
    }
  };

  // node_modules/ethers/lib.esm/providers/subscriber-filterid.js
  function copy3(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  var _provider4, _filterIdPromise, _poller3, _running3, _network, _hault, _FilterIdSubscriber_instances, poll_fn3, teardown_fn;
  var FilterIdSubscriber = class {
    /**
     *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
     *  and [[_emitResults]] to setup the subscription and provide the event
     *  to the %%provider%%.
     */
    constructor(provider) {
      __privateAdd(this, _FilterIdSubscriber_instances);
      __privateAdd(this, _provider4);
      __privateAdd(this, _filterIdPromise);
      __privateAdd(this, _poller3);
      __privateAdd(this, _running3);
      __privateAdd(this, _network);
      __privateAdd(this, _hault);
      __privateSet(this, _provider4, provider);
      __privateSet(this, _filterIdPromise, null);
      __privateSet(this, _poller3, __privateMethod(this, _FilterIdSubscriber_instances, poll_fn3).bind(this));
      __privateSet(this, _running3, false);
      __privateSet(this, _network, null);
      __privateSet(this, _hault, false);
    }
    /**
     *  Sub-classes **must** override this to begin the subscription.
     */
    _subscribe(provider) {
      throw new Error("subclasses must override this");
    }
    /**
     *  Sub-classes **must** override this handle the events.
     */
    _emitResults(provider, result) {
      throw new Error("subclasses must override this");
    }
    /**
     *  Sub-classes **must** override this handle recovery on errors.
     */
    _recover(provider) {
      throw new Error("subclasses must override this");
    }
    start() {
      if (__privateGet(this, _running3)) {
        return;
      }
      __privateSet(this, _running3, true);
      __privateMethod(this, _FilterIdSubscriber_instances, poll_fn3).call(this, -2);
    }
    stop() {
      if (!__privateGet(this, _running3)) {
        return;
      }
      __privateSet(this, _running3, false);
      __privateSet(this, _hault, true);
      __privateMethod(this, _FilterIdSubscriber_instances, teardown_fn).call(this);
      __privateGet(this, _provider4).off("block", __privateGet(this, _poller3));
    }
    pause(dropWhilePaused) {
      if (dropWhilePaused) {
        __privateMethod(this, _FilterIdSubscriber_instances, teardown_fn).call(this);
      }
      __privateGet(this, _provider4).off("block", __privateGet(this, _poller3));
    }
    resume() {
      this.start();
    }
  };
  _provider4 = new WeakMap();
  _filterIdPromise = new WeakMap();
  _poller3 = new WeakMap();
  _running3 = new WeakMap();
  _network = new WeakMap();
  _hault = new WeakMap();
  _FilterIdSubscriber_instances = new WeakSet();
  poll_fn3 = async function(blockNumber) {
    try {
      if (__privateGet(this, _filterIdPromise) == null) {
        __privateSet(this, _filterIdPromise, this._subscribe(__privateGet(this, _provider4)));
      }
      let filterId = null;
      try {
        filterId = await __privateGet(this, _filterIdPromise);
      } catch (error) {
        if (!isError(error, "UNSUPPORTED_OPERATION") || error.operation !== "eth_newFilter") {
          throw error;
        }
      }
      if (filterId == null) {
        __privateSet(this, _filterIdPromise, null);
        __privateGet(this, _provider4)._recoverSubscriber(this, this._recover(__privateGet(this, _provider4)));
        return;
      }
      const network = await __privateGet(this, _provider4).getNetwork();
      if (!__privateGet(this, _network)) {
        __privateSet(this, _network, network);
      }
      if (__privateGet(this, _network).chainId !== network.chainId) {
        throw new Error("chaid changed");
      }
      if (__privateGet(this, _hault)) {
        return;
      }
      const result = await __privateGet(this, _provider4).send("eth_getFilterChanges", [filterId]);
      await this._emitResults(__privateGet(this, _provider4), result);
    } catch (error) {
      console.log("@TODO", error);
    }
    __privateGet(this, _provider4).once("block", __privateGet(this, _poller3));
  };
  teardown_fn = function() {
    const filterIdPromise = __privateGet(this, _filterIdPromise);
    if (filterIdPromise) {
      __privateSet(this, _filterIdPromise, null);
      filterIdPromise.then((filterId) => {
        if (__privateGet(this, _provider4).destroyed) {
          return;
        }
        __privateGet(this, _provider4).send("eth_uninstallFilter", [filterId]);
      });
    }
  };
  var _event;
  var FilterIdEventSubscriber = class extends FilterIdSubscriber {
    /**
     *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
     *  listening for %%filter%%.
     */
    constructor(provider, filter) {
      super(provider);
      __privateAdd(this, _event);
      __privateSet(this, _event, copy3(filter));
    }
    _recover(provider) {
      return new PollingEventSubscriber(provider, __privateGet(this, _event));
    }
    async _subscribe(provider) {
      const filterId = await provider.send("eth_newFilter", [__privateGet(this, _event)]);
      return filterId;
    }
    async _emitResults(provider, results) {
      for (const result of results) {
        provider.emit(__privateGet(this, _event), provider._wrapLog(result, provider._network));
      }
    }
  };
  _event = new WeakMap();
  var FilterIdPendingSubscriber = class extends FilterIdSubscriber {
    async _subscribe(provider) {
      return await provider.send("eth_newPendingTransactionFilter", []);
    }
    async _emitResults(provider, results) {
      for (const result of results) {
        provider.emit("pending", result);
      }
    }
  };

  // node_modules/ethers/lib.esm/providers/provider-jsonrpc.js
  var Primitive = "bigint,boolean,function,number,string,symbol".split(/,/g);
  function deepCopy(value) {
    if (value == null || Primitive.indexOf(typeof value) >= 0) {
      return value;
    }
    if (typeof value.getAddress === "function") {
      return value;
    }
    if (Array.isArray(value)) {
      return value.map(deepCopy);
    }
    if (typeof value === "object") {
      return Object.keys(value).reduce((accum, key) => {
        accum[key] = value[key];
        return accum;
      }, {});
    }
    throw new Error(`should not happen: ${value} (${typeof value})`);
  }
  function stall(duration) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }
  function getLowerCase(value) {
    if (value) {
      return value.toLowerCase();
    }
    return value;
  }
  function isPollable(value) {
    return value && typeof value.pollingInterval === "number";
  }
  var defaultOptions2 = {
    polling: false,
    staticNetwork: null,
    batchStallTime: 10,
    batchMaxSize: 1 << 20,
    batchMaxCount: 100,
    cacheTimeout: 250,
    pollingInterval: 4e3
  };
  var JsonRpcSigner = class extends AbstractSigner {
    constructor(provider, address) {
      super(provider);
      __publicField(this, "address");
      address = getAddress(address);
      defineProperties(this, { address });
    }
    connect(provider) {
      assert(false, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
        operation: "signer.connect"
      });
    }
    async getAddress() {
      return this.address;
    }
    // JSON-RPC will automatially fill in nonce, etc. so we just check from
    async populateTransaction(tx) {
      return await this.populateCall(tx);
    }
    // Returns just the hash of the transaction after sent, which is what
    // the bare JSON-RPC API does;
    async sendUncheckedTransaction(_tx) {
      const tx = deepCopy(_tx);
      const promises = [];
      if (tx.from) {
        const _from = tx.from;
        promises.push((async () => {
          const from = await resolveAddress(_from, this.provider);
          assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
          tx.from = from;
        })());
      } else {
        tx.from = this.address;
      }
      if (tx.gasLimit == null) {
        promises.push((async () => {
          tx.gasLimit = await this.provider.estimateGas({ ...tx, from: this.address });
        })());
      }
      if (tx.to != null) {
        const _to2 = tx.to;
        promises.push((async () => {
          tx.to = await resolveAddress(_to2, this.provider);
        })());
      }
      if (promises.length) {
        await Promise.all(promises);
      }
      const hexTx = this.provider.getRpcTransaction(tx);
      return this.provider.send("eth_sendTransaction", [hexTx]);
    }
    async sendTransaction(tx) {
      const blockNumber = await this.provider.getBlockNumber();
      const hash2 = await this.sendUncheckedTransaction(tx);
      return await new Promise((resolve, reject) => {
        const timeouts = [1e3, 100];
        let invalids = 0;
        const checkTx = async () => {
          try {
            const tx2 = await this.provider.getTransaction(hash2);
            if (tx2 != null) {
              resolve(tx2.replaceableTransaction(blockNumber));
              return;
            }
          } catch (error) {
            if (isError(error, "CANCELLED") || isError(error, "BAD_DATA") || isError(error, "NETWORK_ERROR") || isError(error, "UNSUPPORTED_OPERATION")) {
              if (error.info == null) {
                error.info = {};
              }
              error.info.sendTransactionHash = hash2;
              reject(error);
              return;
            }
            if (isError(error, "INVALID_ARGUMENT")) {
              invalids++;
              if (error.info == null) {
                error.info = {};
              }
              error.info.sendTransactionHash = hash2;
              if (invalids > 10) {
                reject(error);
                return;
              }
            }
            this.provider.emit("error", makeError("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", { error }));
          }
          this.provider._setTimeout(() => {
            checkTx();
          }, timeouts.pop() || 4e3);
        };
        checkTx();
      });
    }
    async signTransaction(_tx) {
      const tx = deepCopy(_tx);
      if (tx.from) {
        const from = await resolveAddress(tx.from, this.provider);
        assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
        tx.from = from;
      } else {
        tx.from = this.address;
      }
      const hexTx = this.provider.getRpcTransaction(tx);
      return await this.provider.send("eth_signTransaction", [hexTx]);
    }
    async signMessage(_message) {
      const message = typeof _message === "string" ? toUtf8Bytes(_message) : _message;
      return await this.provider.send("personal_sign", [
        hexlify(message),
        this.address.toLowerCase()
      ]);
    }
    async signTypedData(domain, types, _value2) {
      const value = deepCopy(_value2);
      const populated = await TypedDataEncoder.resolveNames(domain, types, value, async (value2) => {
        const address = await resolveAddress(value2);
        assertArgument(address != null, "TypedData does not support null address", "value", value2);
        return address;
      });
      return await this.provider.send("eth_signTypedData_v4", [
        this.address.toLowerCase(),
        JSON.stringify(TypedDataEncoder.getPayload(populated.domain, types, populated.value))
      ]);
    }
    async unlock(password) {
      return this.provider.send("personal_unlockAccount", [
        this.address.toLowerCase(),
        password,
        null
      ]);
    }
    // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
    async _legacySignMessage(_message) {
      const message = typeof _message === "string" ? toUtf8Bytes(_message) : _message;
      return await this.provider.send("eth_sign", [
        this.address.toLowerCase(),
        hexlify(message)
      ]);
    }
  };
  var _options5, _nextId, _payloads, _drainTimer, _notReady, _network2, _pendingDetectNetwork, _JsonRpcApiProvider_instances, scheduleDrain_fn;
  var JsonRpcApiProvider = class extends AbstractProvider {
    constructor(network, options) {
      super(network, options);
      __privateAdd(this, _JsonRpcApiProvider_instances);
      __privateAdd(this, _options5);
      // The next ID to use for the JSON-RPC ID field
      __privateAdd(this, _nextId);
      // Payloads are queued and triggered in batches using the drainTimer
      __privateAdd(this, _payloads);
      __privateAdd(this, _drainTimer);
      __privateAdd(this, _notReady);
      __privateAdd(this, _network2);
      __privateAdd(this, _pendingDetectNetwork);
      __privateSet(this, _nextId, 1);
      __privateSet(this, _options5, Object.assign({}, defaultOptions2, options || {}));
      __privateSet(this, _payloads, []);
      __privateSet(this, _drainTimer, null);
      __privateSet(this, _network2, null);
      __privateSet(this, _pendingDetectNetwork, null);
      {
        let resolve = null;
        const promise = new Promise((_resolve) => {
          resolve = _resolve;
        });
        __privateSet(this, _notReady, { promise, resolve });
      }
      const staticNetwork = this._getOption("staticNetwork");
      if (typeof staticNetwork === "boolean") {
        assertArgument(!staticNetwork || network !== "any", "staticNetwork cannot be used on special network 'any'", "options", options);
        if (staticNetwork && network != null) {
          __privateSet(this, _network2, Network.from(network));
        }
      } else if (staticNetwork) {
        assertArgument(network == null || staticNetwork.matches(network), "staticNetwork MUST match network object", "options", options);
        __privateSet(this, _network2, staticNetwork);
      }
    }
    /**
     *  Returns the value associated with the option %%key%%.
     *
     *  Sub-classes can use this to inquire about configuration options.
     */
    _getOption(key) {
      return __privateGet(this, _options5)[key];
    }
    /**
     *  Gets the [[Network]] this provider has committed to. On each call, the network
     *  is detected, and if it has changed, the call will reject.
     */
    get _network() {
      assert(__privateGet(this, _network2), "network is not available yet", "NETWORK_ERROR");
      return __privateGet(this, _network2);
    }
    /**
     *  Resolves to the non-normalized value by performing %%req%%.
     *
     *  Sub-classes may override this to modify behavior of actions,
     *  and should generally call ``super._perform`` as a fallback.
     */
    async _perform(req) {
      if (req.method === "call" || req.method === "estimateGas") {
        let tx = req.transaction;
        if (tx && tx.type != null && getBigInt(tx.type)) {
          if (tx.maxFeePerGas == null && tx.maxPriorityFeePerGas == null) {
            const feeData = await this.getFeeData();
            if (feeData.maxFeePerGas == null && feeData.maxPriorityFeePerGas == null) {
              req = Object.assign({}, req, {
                transaction: Object.assign({}, tx, { type: void 0 })
              });
            }
          }
        }
      }
      const request = this.getRpcRequest(req);
      if (request != null) {
        return await this.send(request.method, request.args);
      }
      return super._perform(req);
    }
    /**
     *  Sub-classes may override this; it detects the *actual* network that
     *  we are **currently** connected to.
     *
     *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
     *  _send primitive must be used instead.
     */
    async _detectNetwork() {
      const network = this._getOption("staticNetwork");
      if (network) {
        if (network === true) {
          if (__privateGet(this, _network2)) {
            return __privateGet(this, _network2);
          }
        } else {
          return network;
        }
      }
      if (__privateGet(this, _pendingDetectNetwork)) {
        return await __privateGet(this, _pendingDetectNetwork);
      }
      if (this.ready) {
        __privateSet(this, _pendingDetectNetwork, (async () => {
          try {
            const result = Network.from(getBigInt(await this.send("eth_chainId", [])));
            __privateSet(this, _pendingDetectNetwork, null);
            return result;
          } catch (error) {
            __privateSet(this, _pendingDetectNetwork, null);
            throw error;
          }
        })());
        return await __privateGet(this, _pendingDetectNetwork);
      }
      __privateSet(this, _pendingDetectNetwork, (async () => {
        const payload = {
          id: __privateWrapper(this, _nextId)._++,
          method: "eth_chainId",
          params: [],
          jsonrpc: "2.0"
        };
        this.emit("debug", { action: "sendRpcPayload", payload });
        let result;
        try {
          result = (await this._send(payload))[0];
          __privateSet(this, _pendingDetectNetwork, null);
        } catch (error) {
          __privateSet(this, _pendingDetectNetwork, null);
          this.emit("debug", { action: "receiveRpcError", error });
          throw error;
        }
        this.emit("debug", { action: "receiveRpcResult", result });
        if ("result" in result) {
          return Network.from(getBigInt(result.result));
        }
        throw this.getRpcError(payload, result);
      })());
      return await __privateGet(this, _pendingDetectNetwork);
    }
    /**
     *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
     *  will be passed to [[_send]] from [[send]]. If it is overridden, then
     *  ``super._start()`` **MUST** be called.
     *
     *  Calling it multiple times is safe and has no effect.
     */
    _start() {
      if (__privateGet(this, _notReady) == null || __privateGet(this, _notReady).resolve == null) {
        return;
      }
      __privateGet(this, _notReady).resolve();
      __privateSet(this, _notReady, null);
      (async () => {
        while (__privateGet(this, _network2) == null && !this.destroyed) {
          try {
            __privateSet(this, _network2, await this._detectNetwork());
          } catch (error) {
            if (this.destroyed) {
              break;
            }
            console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)");
            this.emit("error", makeError("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error } }));
            await stall(1e3);
          }
        }
        __privateMethod(this, _JsonRpcApiProvider_instances, scheduleDrain_fn).call(this);
      })();
    }
    /**
     *  Resolves once the [[_start]] has been called. This can be used in
     *  sub-classes to defer sending data until the connection has been
     *  established.
     */
    async _waitUntilReady() {
      if (__privateGet(this, _notReady) == null) {
        return;
      }
      return await __privateGet(this, _notReady).promise;
    }
    /**
     *  Return a Subscriber that will manage the %%sub%%.
     *
     *  Sub-classes may override this to modify the behavior of
     *  subscription management.
     */
    _getSubscriber(sub) {
      if (sub.type === "pending") {
        return new FilterIdPendingSubscriber(this);
      }
      if (sub.type === "event") {
        if (this._getOption("polling")) {
          return new PollingEventSubscriber(this, sub.filter);
        }
        return new FilterIdEventSubscriber(this, sub.filter);
      }
      if (sub.type === "orphan" && sub.filter.orphan === "drop-log") {
        return new UnmanagedSubscriber("orphan");
      }
      return super._getSubscriber(sub);
    }
    /**
     *  Returns true only if the [[_start]] has been called.
     */
    get ready() {
      return __privateGet(this, _notReady) == null;
    }
    /**
     *  Returns %%tx%% as a normalized JSON-RPC transaction request,
     *  which has all values hexlified and any numeric values converted
     *  to Quantity values.
     */
    getRpcTransaction(tx) {
      const result = {};
      ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((key) => {
        if (tx[key] == null) {
          return;
        }
        let dstKey = key;
        if (key === "gasLimit") {
          dstKey = "gas";
        }
        result[dstKey] = toQuantity(getBigInt(tx[key], `tx.${key}`));
      });
      ["from", "to", "data"].forEach((key) => {
        if (tx[key] == null) {
          return;
        }
        result[key] = hexlify(tx[key]);
      });
      if (tx.accessList) {
        result["accessList"] = accessListify(tx.accessList);
      }
      if (tx.blobVersionedHashes) {
        result["blobVersionedHashes"] = tx.blobVersionedHashes.map((h3) => h3.toLowerCase());
      }
      return result;
    }
    /**
     *  Returns the request method and arguments required to perform
     *  %%req%%.
     */
    getRpcRequest(req) {
      switch (req.method) {
        case "chainId":
          return { method: "eth_chainId", args: [] };
        case "getBlockNumber":
          return { method: "eth_blockNumber", args: [] };
        case "getGasPrice":
          return { method: "eth_gasPrice", args: [] };
        case "getPriorityFee":
          return { method: "eth_maxPriorityFeePerGas", args: [] };
        case "getBalance":
          return {
            method: "eth_getBalance",
            args: [getLowerCase(req.address), req.blockTag]
          };
        case "getTransactionCount":
          return {
            method: "eth_getTransactionCount",
            args: [getLowerCase(req.address), req.blockTag]
          };
        case "getCode":
          return {
            method: "eth_getCode",
            args: [getLowerCase(req.address), req.blockTag]
          };
        case "getStorage":
          return {
            method: "eth_getStorageAt",
            args: [
              getLowerCase(req.address),
              "0x" + req.position.toString(16),
              req.blockTag
            ]
          };
        case "broadcastTransaction":
          return {
            method: "eth_sendRawTransaction",
            args: [req.signedTransaction]
          };
        case "getBlock":
          if ("blockTag" in req) {
            return {
              method: "eth_getBlockByNumber",
              args: [req.blockTag, !!req.includeTransactions]
            };
          } else if ("blockHash" in req) {
            return {
              method: "eth_getBlockByHash",
              args: [req.blockHash, !!req.includeTransactions]
            };
          }
          break;
        case "getTransaction":
          return {
            method: "eth_getTransactionByHash",
            args: [req.hash]
          };
        case "getTransactionReceipt":
          return {
            method: "eth_getTransactionReceipt",
            args: [req.hash]
          };
        case "call":
          return {
            method: "eth_call",
            args: [this.getRpcTransaction(req.transaction), req.blockTag]
          };
        case "estimateGas": {
          return {
            method: "eth_estimateGas",
            args: [this.getRpcTransaction(req.transaction)]
          };
        }
        case "getLogs":
          if (req.filter && req.filter.address != null) {
            if (Array.isArray(req.filter.address)) {
              req.filter.address = req.filter.address.map(getLowerCase);
            } else {
              req.filter.address = getLowerCase(req.filter.address);
            }
          }
          return { method: "eth_getLogs", args: [req.filter] };
      }
      return null;
    }
    /**
     *  Returns an ethers-style Error for the given JSON-RPC error
     *  %%payload%%, coalescing the various strings and error shapes
     *  that different nodes return, coercing them into a machine-readable
     *  standardized error.
     */
    getRpcError(payload, _error2) {
      const { method } = payload;
      const { error } = _error2;
      if (method === "eth_estimateGas" && error.message) {
        const msg = error.message;
        if (!msg.match(/revert/i) && msg.match(/insufficient funds/i)) {
          return makeError("insufficient funds", "INSUFFICIENT_FUNDS", {
            transaction: payload.params[0],
            info: { payload, error }
          });
        }
      }
      if (method === "eth_call" || method === "eth_estimateGas") {
        const result = spelunkData(error);
        const e4 = AbiCoder.getBuiltinCallException(method === "eth_call" ? "call" : "estimateGas", payload.params[0], result ? result.data : null);
        e4.info = { error, payload };
        return e4;
      }
      const message = JSON.stringify(spelunkMessage(error));
      if (typeof error.message === "string" && error.message.match(/user denied|ethers-user-denied/i)) {
        const actionMap = {
          eth_sign: "signMessage",
          personal_sign: "signMessage",
          eth_signTypedData_v4: "signTypedData",
          eth_signTransaction: "signTransaction",
          eth_sendTransaction: "sendTransaction",
          eth_requestAccounts: "requestAccess",
          wallet_requestAccounts: "requestAccess"
        };
        return makeError(`user rejected action`, "ACTION_REJECTED", {
          action: actionMap[method] || "unknown",
          reason: "rejected",
          info: { payload, error }
        });
      }
      if (method === "eth_sendRawTransaction" || method === "eth_sendTransaction") {
        const transaction = payload.params[0];
        if (message.match(/insufficient funds|base fee exceeds gas limit/i)) {
          return makeError("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
            transaction,
            info: { error }
          });
        }
        if (message.match(/nonce/i) && message.match(/too low/i)) {
          return makeError("nonce has already been used", "NONCE_EXPIRED", { transaction, info: { error } });
        }
        if (message.match(/replacement transaction/i) && message.match(/underpriced/i)) {
          return makeError("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction, info: { error } });
        }
        if (message.match(/only replay-protected/i)) {
          return makeError("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
            operation: method,
            info: { transaction, info: { error } }
          });
        }
      }
      let unsupported = !!message.match(/the method .* does not exist/i);
      if (!unsupported) {
        if (error && error.details && error.details.startsWith("Unauthorized method:")) {
          unsupported = true;
        }
      }
      if (unsupported) {
        return makeError("unsupported operation", "UNSUPPORTED_OPERATION", {
          operation: payload.method,
          info: { error, payload }
        });
      }
      return makeError("could not coalesce error", "UNKNOWN_ERROR", { error, payload });
    }
    /**
     *  Requests the %%method%% with %%params%% via the JSON-RPC protocol
     *  over the underlying channel. This can be used to call methods
     *  on the backend that do not have a high-level API within the Provider
     *  API.
     *
     *  This method queues requests according to the batch constraints
     *  in the options, assigns the request a unique ID.
     *
     *  **Do NOT override** this method in sub-classes; instead
     *  override [[_send]] or force the options values in the
     *  call to the constructor to modify this method's behavior.
     */
    send(method, params) {
      if (this.destroyed) {
        return Promise.reject(makeError("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: method }));
      }
      const id2 = __privateWrapper(this, _nextId)._++;
      const promise = new Promise((resolve, reject) => {
        __privateGet(this, _payloads).push({
          resolve,
          reject,
          payload: { method, params, id: id2, jsonrpc: "2.0" }
        });
      });
      __privateMethod(this, _JsonRpcApiProvider_instances, scheduleDrain_fn).call(this);
      return promise;
    }
    /**
     *  Resolves to the [[Signer]] account for  %%address%% managed by
     *  the client.
     *
     *  If the %%address%% is a number, it is used as an index in the
     *  the accounts from [[listAccounts]].
     *
     *  This can only be used on clients which manage accounts (such as
     *  Geth with imported account or MetaMask).
     *
     *  Throws if the account doesn't exist.
     */
    async getSigner(address) {
      if (address == null) {
        address = 0;
      }
      const accountsPromise = this.send("eth_accounts", []);
      if (typeof address === "number") {
        const accounts2 = await accountsPromise;
        if (address >= accounts2.length) {
          throw new Error("no such account");
        }
        return new JsonRpcSigner(this, accounts2[address]);
      }
      const { accounts } = await resolveProperties({
        network: this.getNetwork(),
        accounts: accountsPromise
      });
      address = getAddress(address);
      for (const account of accounts) {
        if (getAddress(account) === address) {
          return new JsonRpcSigner(this, address);
        }
      }
      throw new Error("invalid account");
    }
    async listAccounts() {
      const accounts = await this.send("eth_accounts", []);
      return accounts.map((a3) => new JsonRpcSigner(this, a3));
    }
    destroy() {
      if (__privateGet(this, _drainTimer)) {
        clearTimeout(__privateGet(this, _drainTimer));
        __privateSet(this, _drainTimer, null);
      }
      for (const { payload, reject } of __privateGet(this, _payloads)) {
        reject(makeError("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: payload.method }));
      }
      __privateSet(this, _payloads, []);
      super.destroy();
    }
  };
  _options5 = new WeakMap();
  _nextId = new WeakMap();
  _payloads = new WeakMap();
  _drainTimer = new WeakMap();
  _notReady = new WeakMap();
  _network2 = new WeakMap();
  _pendingDetectNetwork = new WeakMap();
  _JsonRpcApiProvider_instances = new WeakSet();
  scheduleDrain_fn = function() {
    if (__privateGet(this, _drainTimer)) {
      return;
    }
    const stallTime = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
    __privateSet(this, _drainTimer, setTimeout(() => {
      __privateSet(this, _drainTimer, null);
      const payloads = __privateGet(this, _payloads);
      __privateSet(this, _payloads, []);
      while (payloads.length) {
        const batch = [payloads.shift()];
        while (payloads.length) {
          if (batch.length === __privateGet(this, _options5).batchMaxCount) {
            break;
          }
          batch.push(payloads.shift());
          const bytes2 = JSON.stringify(batch.map((p3) => p3.payload));
          if (bytes2.length > __privateGet(this, _options5).batchMaxSize) {
            payloads.unshift(batch.pop());
            break;
          }
        }
        (async () => {
          const payload = batch.length === 1 ? batch[0].payload : batch.map((p3) => p3.payload);
          this.emit("debug", { action: "sendRpcPayload", payload });
          try {
            const result = await this._send(payload);
            this.emit("debug", { action: "receiveRpcResult", result });
            for (const { resolve, reject, payload: payload2 } of batch) {
              if (this.destroyed) {
                reject(makeError("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: payload2.method }));
                continue;
              }
              const resp = result.filter((r4) => r4.id === payload2.id)[0];
              if (resp == null) {
                const error = makeError("missing response for request", "BAD_DATA", {
                  value: result,
                  info: { payload: payload2 }
                });
                this.emit("error", error);
                reject(error);
                continue;
              }
              if ("error" in resp) {
                reject(this.getRpcError(payload2, resp));
                continue;
              }
              resolve(resp.result);
            }
          } catch (error) {
            this.emit("debug", { action: "receiveRpcError", error });
            for (const { reject } of batch) {
              reject(error);
            }
          }
        })();
      }
    }, stallTime));
  };
  var _pollingInterval;
  var JsonRpcApiPollingProvider = class extends JsonRpcApiProvider {
    constructor(network, options) {
      super(network, options);
      __privateAdd(this, _pollingInterval);
      let pollingInterval = this._getOption("pollingInterval");
      if (pollingInterval == null) {
        pollingInterval = defaultOptions2.pollingInterval;
      }
      __privateSet(this, _pollingInterval, pollingInterval);
    }
    _getSubscriber(sub) {
      const subscriber = super._getSubscriber(sub);
      if (isPollable(subscriber)) {
        subscriber.pollingInterval = __privateGet(this, _pollingInterval);
      }
      return subscriber;
    }
    /**
     *  The polling interval (default: 4000 ms)
     */
    get pollingInterval() {
      return __privateGet(this, _pollingInterval);
    }
    set pollingInterval(value) {
      if (!Number.isInteger(value) || value < 0) {
        throw new Error("invalid interval");
      }
      __privateSet(this, _pollingInterval, value);
      this._forEachSubscriber((sub) => {
        if (isPollable(sub)) {
          sub.pollingInterval = __privateGet(this, _pollingInterval);
        }
      });
    }
  };
  _pollingInterval = new WeakMap();
  function spelunkData(value) {
    if (value == null) {
      return null;
    }
    if (typeof value.message === "string" && value.message.match(/revert/i) && isHexString(value.data)) {
      return { message: value.message, data: value.data };
    }
    if (typeof value === "object") {
      for (const key in value) {
        const result = spelunkData(value[key]);
        if (result) {
          return result;
        }
      }
      return null;
    }
    if (typeof value === "string") {
      try {
        return spelunkData(JSON.parse(value));
      } catch (error) {
      }
    }
    return null;
  }
  function _spelunkMessage(value, result) {
    if (value == null) {
      return;
    }
    if (typeof value.message === "string") {
      result.push(value.message);
    }
    if (typeof value === "object") {
      for (const key in value) {
        _spelunkMessage(value[key], result);
      }
    }
    if (typeof value === "string") {
      try {
        return _spelunkMessage(JSON.parse(value), result);
      } catch (error) {
      }
    }
  }
  function spelunkMessage(value) {
    const result = [];
    _spelunkMessage(value, result);
    return result;
  }

  // node_modules/ethers/lib.esm/providers/provider-browser.js
  var _request2;
  var BrowserProvider = class extends JsonRpcApiPollingProvider {
    /**
     *  Connect to the %%ethereum%% provider, optionally forcing the
     *  %%network%%.
     */
    constructor(ethereum, network, _options6) {
      const options = Object.assign({}, _options6 != null ? _options6 : {}, { batchMaxCount: 1 });
      assertArgument(ethereum && ethereum.request, "invalid EIP-1193 provider", "ethereum", ethereum);
      super(network, options);
      __privateAdd(this, _request2);
      __privateSet(this, _request2, async (method, params) => {
        const payload = { method, params };
        this.emit("debug", { action: "sendEip1193Request", payload });
        try {
          const result = await ethereum.request(payload);
          this.emit("debug", { action: "receiveEip1193Result", result });
          return result;
        } catch (e4) {
          const error = new Error(e4.message);
          error.code = e4.code;
          error.data = e4.data;
          error.payload = payload;
          this.emit("debug", { action: "receiveEip1193Error", error });
          throw error;
        }
      });
    }
    async send(method, params) {
      await this._start();
      return await super.send(method, params);
    }
    async _send(payload) {
      assertArgument(!Array.isArray(payload), "EIP-1193 does not support batch request", "payload", payload);
      try {
        const result = await __privateGet(this, _request2).call(this, payload.method, payload.params || []);
        return [{ id: payload.id, result }];
      } catch (e4) {
        return [{
          id: payload.id,
          error: { code: e4.code, data: e4.data, message: e4.message }
        }];
      }
    }
    getRpcError(payload, error) {
      error = JSON.parse(JSON.stringify(error));
      switch (error.error.code || -1) {
        case 4001:
          error.error.message = `ethers-user-denied: ${error.error.message}`;
          break;
        case 4200:
          error.error.message = `ethers-unsupported: ${error.error.message}`;
          break;
      }
      return super.getRpcError(payload, error);
    }
    /**
     *  Resolves to ``true`` if the provider manages the %%address%%.
     */
    async hasSigner(address) {
      if (address == null) {
        address = 0;
      }
      const accounts = await this.send("eth_accounts", []);
      if (typeof address === "number") {
        return accounts.length > address;
      }
      address = address.toLowerCase();
      return accounts.filter((a3) => a3.toLowerCase() === address).length !== 0;
    }
    async getSigner(address) {
      if (address == null) {
        address = 0;
      }
      if (!await this.hasSigner(address)) {
        try {
          await __privateGet(this, _request2).call(this, "eth_requestAccounts", []);
        } catch (error) {
          const payload = error.payload;
          throw this.getRpcError(payload, { id: payload.id, error });
        }
      }
      return await super.getSigner(address);
    }
  };
  _request2 = new WeakMap();

  // ../abi/FutureGallery.json
  var FutureGallery_default = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address"
        }
      ],
      name: "GalleryBulkUpdated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "tokenContract",
          type: "address"
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newLikeCount",
          type: "uint256"
        }
      ],
      name: "ItemLiked",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "tokenContract",
          type: "address"
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newLikeCount",
          type: "uint256"
        }
      ],
      name: "ItemUnliked",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "getGallery",
      outputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "address",
                  name: "tokenContract",
                  type: "address"
                },
                {
                  internalType: "bytes32",
                  name: "tokenId",
                  type: "bytes32"
                }
              ],
              internalType: "struct FutureGallery.GalleryItem[]",
              name: "items",
              type: "tuple[]"
            },
            {
              internalType: "uint256[]",
              name: "likeCounts",
              type: "uint256[]"
            },
            {
              internalType: "bool[]",
              name: "likedByCaller",
              type: "bool[]"
            }
          ],
          internalType: "struct FutureGallery.GalleryData",
          name: "",
          type: "tuple"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        },
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      name: "hasLiked",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "address",
          name: "tokenContract",
          type: "address"
        },
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32"
        }
      ],
      name: "likeItem",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        },
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      name: "likes",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "address",
          name: "tokenContract",
          type: "address"
        },
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32"
        }
      ],
      name: "unlikeItem",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "tokenContract",
              type: "address"
            },
            {
              internalType: "bytes32",
              name: "tokenId",
              type: "bytes32"
            }
          ],
          internalType: "struct FutureGallery.GalleryItem[]",
          name: "items",
          type: "tuple[]"
        }
      ],
      name: "updateGalleryBulk",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ];

  // web3Interop.js
  (function init2() {
    window.initF030Lukso = async function() {
      if (typeof window.f030Lukso !== "undefined") {
        console.warn("\u26A0\uFE0F initF030Lukso already called. Skipping.");
        return;
      }
      function fallbackF030Lukso(isHostedMiniApp) {
        return {
          isHostedMiniApp,
          getVisitorUP: () => null,
          getHostUP: () => null,
          isConnected: () => false,
          registerBlazorInterop: () => {
          },
          getGallery: async () => null,
          saveGallery: async () => false,
          loadMockGalleryItems: async () => []
        };
      }
      try {
        window.addEventListener("unhandledrejection", function(event) {
          const message = event.reason?.message || event.reason;
          if (typeof message === "string" && message.includes("No UP found")) {
            console.warn("\u26A0\uFE0F Suppressed known benign UP Provider error: 'No UP found'");
            event.preventDefault();
          }
        });
        const upProvider = await createClientUPProvider();
        const hosted = upProvider.isMiniApp;
        if (!hosted) {
          console.warn("\u26A0\uFE0F Not running as hosted mini-app \u2014 skipping UP provider init.");
          window.f030Lukso = fallbackF030Lukso(false);
          return;
        }
        const getBrowserProvider = () => new BrowserProvider(upProvider);
        window.f030Lukso = {
          isHostedMiniApp: true,
          getVisitorUP: () => upProvider.accounts?.[0] || null,
          getHostUP: () => upProvider.contextAccounts?.[0] || null,
          isConnected: () => upProvider.profileConnected || false,
          registerBlazorInterop: (dotNetRef, onVisitorUPChangedCallbackName, onHostUPChangedCallbackName) => {
            if (!dotNetRef) return;
            upProvider.on("accountsChanged", (accounts) => {
              console.log("\u{1F504} VisitorUP changed:", accounts);
              dotNetRef.invokeMethodAsync(onVisitorUPChangedCallbackName);
            });
            upProvider.on("contextAccountsChanged", (contextAccounts) => {
              console.log("\u{1F504} HostUP changed:", contextAccounts);
              dotNetRef.invokeMethodAsync(onHostUPChangedCallbackName);
            });
          },
          getGallery: async (contractAddress, ownerAddress) => {
            try {
              const provider = getBrowserProvider();
              const contract = new Contract(contractAddress, FutureGallery_default, provider);
              const data = await contract.getGallery(ownerAddress);
              return {
                items: data.items,
                likeCounts: data.likeCounts.map((x2) => x2.toString()),
                likedByCaller: data.likedByCaller
              };
            } catch (err) {
              console.error("\u274C Failed to fetch gallery:", err);
              return null;
            }
          },
          saveGallery: async (contractAddress, galleryItems) => {
            try {
              console.log("\u{1F9EA} Contract Address before signer usage:", contractAddress);
              const provider = getBrowserProvider();
              const signer = await provider.getSigner();
              console.log("\u{1F9EA} Signer address:", await signer.getAddress());
              const contract = new Contract(contractAddress, FutureGallery_default, signer);
              const tx = await contract.updateGalleryBulk(galleryItems, {
                value: 0n
                // Required for LUKSO Grid
              });
              console.log("\u{1F4E8} Tx submitted:", tx.hash);
              await tx.wait();
              console.log("\u2705 Tx confirmed:", tx.hash);
              return true;
            } catch (err) {
              console.error("\u274C Failed to save gallery:", err);
              return false;
            }
          },
          debugWriteTx: async () => {
            try {
              const provider = new BrowserProvider(await createClientUPProvider());
              const signer = await provider.getSigner();
              const contract = new Contract("0x863382cD5B07e9Cd70f198Dec5D04e4cB90f035c", FutureGallery_default, signer);
              const tx = await contract.updateGalleryBulk([], { value: 0n });
              console.log("TX Hash:", tx.hash);
              const receipt = await tx.wait();
              console.log("TX Confirmed:", receipt);
            } catch (err) {
              console.error("\u274C debugWriteTx failed:", err);
            }
          },
          loadMockGalleryItems: async () => {
            return [
              { tokenContract: "0xfe256d0fed8cdd0a4d345a90382b414c2867e5f3", tokenId: "" },
              { tokenContract: "0x287de81261a7c1bc5580cc0e56c41ac2e006e649", tokenId: "0x0000000000000000000000006834737ae1ee538c0e207f4bf7412ec2d9862473" },
              { tokenContract: "0x5013027d3c266c705f631303e1846f7fb855b290", tokenId: "" },
              { tokenContract: "0x586b927400b5cc7ecf8cae708fbc22e4ae499527", tokenId: "0x0000000000000000000000000000000000000000000000000000000000000001" }
            ];
          }
        };
        console.log("\u{1F9D1} VisitorUP:", window.f030Lukso.getVisitorUP());
        console.log("\u{1F3E0} HostUP:", window.f030Lukso.getHostUP());
        console.log("\u{1F50C} Connected:", window.f030Lukso.isConnected());
      } catch (err) {
        console.warn("\u26A0\uFE0F Failed to initialize UP provider or not running as mini-app:", err);
        window.f030Lukso = fallbackF030Lukso(false);
      }
    };
  })();
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
@noble/curves/esm/abstract/modular.js:
@noble/curves/esm/abstract/curve.js:
@noble/curves/esm/abstract/weierstrass.js:
@noble/curves/esm/_shortw_utils.js:
@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
