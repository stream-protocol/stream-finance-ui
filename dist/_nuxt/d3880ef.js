/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
            [21],
            [, function(t, e, n) { "use strict";

                    function r(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

                    function o(object, t) { var e = Object.keys(object); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(object);
                            t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, n) } return e }

                    function c(t) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? o(Object(source), !0).forEach((function(e) { r(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : o(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) })) } return t }

                    function l(t) { return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

                    function f(t, p) { return (f = Object.setPrototypeOf || function(t, p) { return t.__proto__ = p, t })(t, p) }

                    function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }

                    function h(t, e, n) { return (h = d() ? Reflect.construct : function(t, e, n) { var a = [null];
                            a.push.apply(a, e); var r = new(Function.bind.apply(t, a)); return n && f(r, n.prototype), r }).apply(null, arguments) }

                    function m(t) { var e = "function" == typeof Map ? new Map : void 0; return (m = function(t) { if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t; var n; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== e) { if (e.has(t)) return e.get(t);
                                e.set(t, r) }

                            function r() { return h(t, arguments, l(this).constructor) } return r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), f(r, t) })(t) }

                    function y(t, e) {
                        (null == e || e > t.length) && (e = t.length); for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]; return n }

                    function v(t, e) { var n; if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) { if (Array.isArray(t) || (n = function(t, e) { if (t) { if ("string" == typeof t) return y(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0 } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var i = 0; return function() { return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } return (n = t[Symbol.iterator]()).next.bind(n) }
                    n.d(e, "a", (function() { return T })); var w = Object.prototype.toString,
                        k = function(t) { if (void 0 === t) return "undefined"; if (null === t) return "null"; var e = typeof t; if ("boolean" === e) return "boolean"; if ("string" === e) return "string"; if ("number" === e) return "number"; if ("symbol" === e) return "symbol"; if ("function" === e) return "GeneratorFunction" === x(t) ? "generatorfunction" : "function"; if (function(t) { return Array.isArray ? Array.isArray(t) : t instanceof Array }(t)) return "array"; if (function(t) { if (t.constructor && "function" == typeof t.constructor.isBuffer) return t.constructor.isBuffer(t); return !1 }(t)) return "buffer"; if (function(t) { try { if ("number" == typeof t.length && "function" == typeof t.callee) return !0 } catch (t) { if (-1 !== t.message.indexOf("callee")) return !0 } return !1 }(t)) return "arguments"; if (function(t) { return t instanceof Date || "function" == typeof t.toDateString && "function" == typeof t.getDate && "function" == typeof t.setDate }(t)) return "date"; if (function(t) { return t instanceof Error || "string" == typeof t.message && t.constructor && "number" == typeof t.constructor.stackTraceLimit }(t)) return "error"; if (function(t) { return t instanceof RegExp || "string" == typeof t.flags && "boolean" == typeof t.ignoreCase && "boolean" == typeof t.multiline && "boolean" == typeof t.global }(t)) return "regexp"; switch (x(t)) {
                                case "Symbol":
                                    return "symbol";
                                case "Promise":
                                    return "promise";
                                case "WeakMap":
                                    return "weakmap";
                                case "WeakSet":
                                    return "weakset";
                                case "Map":
                                    return "map";
                                case "Set":
                                    return "set";
                                case "Int8Array":
                                    return "int8array";
                                case "Uint8Array":
                                    return "uint8array";
                                case "Uint8ClampedArray":
                                    return "uint8clampedarray";
                                case "Int16Array":
                                    return "int16array";
                                case "Uint16Array":
                                    return "uint16array";
                                case "Int32Array":
                                    return "int32array";
                                case "Uint32Array":
                                    return "uint32array";
                                case "Float32Array":
                                    return "float32array";
                                case "Float64Array":
                                    return "float64array" } if (function(t) { return "function" == typeof t.throw && "function" == typeof t.return && "function" == typeof t.next }(t)) return "generator"; switch (e = w.call(t)) {
                                case "[object Object]":
                                    return "object";
                                case "[object Map Iterator]":
                                    return "mapiterator";
                                case "[object Set Iterator]":
                                    return "setiterator";
                                case "[object String Iterator]":
                                    return "stringiterator";
                                case "[object Array Iterator]":
                                    return "arrayiterator" } return e.slice(8, -1).toLowerCase().replace(/\s/g, "") };

                    function x(t) { return "function" == typeof t.constructor ? t.constructor.name : null } var S = { any: function(t) { return void 0 !== t }, arguments: function(t) { return "arguments" === k(t) }, array: function(t) { return "array" === k(t) }, boolean: function(t) { return "boolean" === k(t) }, buffer: function(t) { return "buffer" === k(t) }, date: function(t) { return "date" === k(t) && !isNaN(t) }, error: function(t) { return "error" === k(t) }, float32array: function(t) { return "float32array" === k(t) }, float64array: function(t) { return "float64array" === k(t) }, function: function(t) { return "function" === k(t) }, generatorfunction: function(t) { return "generatorfunction" === k(t) }, int16array: function(t) { return "int16array" === k(t) }, int32array: function(t) { return "int32array" === k(t) }, int8array: function(t) { return "int8array" === k(t) }, map: function(t) { return "map" === k(t) }, null: function(t) { return "null" === k(t) }, number: function(t) { return "number" === k(t) }, object: function(t) { return "object" === k(t) }, promise: function(t) { return "promise" === k(t) }, regexp: function(t) { return "regexp" === k(t) }, set: function(t) { return "set" === k(t) }, string: function(t) { return "string" === k(t) }, symbol: function(t) { return "symbol" === k(t) }, uint16array: function(t) { return "uint16array" === k(t) }, uint32array: function(t) { return "uint32array" === k(t) }, uint8array: function(t) { return "uint8array" === k(t) }, uint8clampedarray: function(t) { return "uint8clampedarray" === k(t) }, undefined: function(t) { return "undefined" === k(t) }, weakmap: function(t) { return "weakmap" === k(t) }, weakset: function(t) { return "weakset" === k(t) } },
                        _ = "Invariant failed";

                    function E(t, e) { if (!t) throw new Error(_) } var A = function(t) { var e, n;

                            function r(e) { var n;
                                E(e.length > 0); var o = e[0],
                                    path = o.path,
                                    c = o.value,
                                    l = o.type,
                                    f = o.branch,
                                    d = function(source, t) { if (null == source) return {}; var e, i, n = {},
                                            r = Object.keys(source); for (i = 0; i < r.length; i++) e = r[i], t.indexOf(e) >= 0 || (n[e] = source[e]); return n }(o, ["path", "value", "type", "branch"]),
                                    h = "Expected a value of type `" + l + "`" + (path.length ? " for `" + path.join(".") + "`" : "") + " but received `" + JSON.stringify(c) + "`."; return (n = t.call(this, h) || this).type = l, n.value = c, Object.assign(function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(n), d), n.path = path, n.branch = f, n.failures = e, n.stack = (new Error).stack, n.__proto__ = r.prototype, n } return n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, r }(m(TypeError)),
                        O = Symbol("STRUCT"),
                        M = function(t) { var e = t.struct.Error,
                                n = function t(e) { return t.assert(e) }; return Object.defineProperty(n, O, { value: !0 }), n.kind = t.kind, n.type = t.type, n.default = function() { return "function" == typeof t.defaults ? t.defaults() : t.defaults }, n.test = function(t) { return !n.check(t, [t], [])[0] }, n.assert = function(t) { var r = n.check(t, [t], []),
                                    o = r[0],
                                    c = r[1]; if (o) throw new e(o); return c }, n.validate = function(t) { var r = n.check(t, [t], []),
                                    o = r[0],
                                    c = r[1]; return o ? [new e(o)] : [void 0, c] }, n.check = function(t, e, path) { return void 0 === t && (t = n.default()), [
                                    [n.fail({ value: t, branch: e, path: path })]
                                ] }, n.fail = function(t) { return c(c({}, t), {}, { type: "type" in t ? t.type : n.type }) }, n },
                        I = function(t, e, n) { if ("function" == typeof(r = t) && r[O]) return t; var r; if (Array.isArray(t)) { if (1 === t.length) { var o = t[0]; return n.array([o], e) } if (t.length > 1) return n.tuple(t, e) } if ("function" == typeof t) return n.function(t, e); if ("object" == typeof t) return n.object(t, e); if ("string" == typeof t) { var c, l = !1; if (t.endsWith("?") && (l = !0, t = t.slice(0, -1)), t.includes("|")) { var f = t.split(/\s*\|\s*/g);
                                    c = n.union(f, e) } else if (t.includes("&")) { var d = t.split(/\s*&\s*/g);
                                    c = n.intersection(d, e) } else c = n.scalar(t, e); return l && (c = n.union([c, "undefined"], void 0)), c } throw new Error("A schema definition must be an object, array, string or function, but you passed: " + t) },
                        P = function(t, e, n) { E(Array.isArray(t) && 0 !== t.length); var r = t.map((function(t) { return n(t) })),
                                o = r.map((function(s) { return s.type })).join(" | "),
                                c = M({ kind: "union", type: o, defaults: e, struct: n }); return c.check = function(t, e, path) { void 0 === t && (t = c.default()); for (var n, o = v(r); !(n = o()).done;) { var l = n.value.check(t, e, path),
                                        f = l[0],
                                        d = l[1]; if (!f) return [void 0, d] } return [
                                    [c.fail({ value: t, branch: e, path: path })]
                                ] }, c },
                        T = function(t) { void 0 === t && (t = {}); var e = function t(e, n) { return I(e, n, t) }; return e.array = function(t, n) { return function(t, e, n) { E(Array.isArray(t) && 1 === t.length); var r = n(t[0], void 0),
                                        o = M({ kind: "array", type: r.type + "[]", defaults: e, struct: n }); return o.check = function(t, e, path) { if (void 0 === t && (t = o.default()), !Array.isArray(t)) return [
                                            [o.fail({ value: t, branch: e, path: path })]
                                        ]; for (var n = [], c = [], i = 0; i < t.length; i++) { var l = t[i],
                                                f = r.check(l, e.concat(l), path.concat(i)),
                                                d = f[0],
                                                h = f[1];
                                            d ? c.push.apply(c, d) : n[i] = h } return c.length ? [c] : [void 0, n] }, o }(t, n, e) }, e.dynamic = function(t, n) { return function(t, e, n) { E("function" == typeof t); var r = M({ kind: "dynamic", type: "dynamic<…>", defaults: e, struct: n }); return r.check = function(e, n, path) { return void 0 === e && (e = r.default()), t(e, n, path).check(e, n, path) }, r }(t, n, e) }, e.enum = function(t, n) { return function(t, e, n) { E(Array.isArray(t)); var r = n((function(e) { return t.includes(e) }), e); return r.kind = "enum", r.type = t.map((function(s) { return "string" == typeof s ? '"' + s + '"' : "" + s })).join(" | "), r }(t, n, e) }, e.function = function(t, n) { return function(t, e, n) { var r = M({ kind: "function", type: "function<…>", defaults: e, struct: n }); return r.check = function(e, n, path) { void 0 === e && (e = r.default()); var o = t(e, n, path); if (!0 === o) return [void 0, e]; var l = []; if (!1 === o) l.push(r.fail({ value: e, branch: n, path: path }));
                                        else if (Array.isArray(o) && o.length > 0)
                                            for (var f, d = v(o); !(f = d()).done;) { var h = f.value;
                                                l.push(r.fail(c({ value: e, branch: n, path: path }, h))) } else "object" == typeof o ? l.push(r.fail(c({ value: e, branch: n, path: path }, o))) : E(!1); return [l] }, r }(t, n, e) }, e.instance = function(t, n) { return function(t, e, n) { E("function" == typeof t); var r = n((function(e) { return e instanceof t }), e); return r.kind = "instance", r.type = "instance<" + t.name + ">", r }(t, n, e) }, e.interface = function(t, n) { return function(t, e, n) { E("object" == typeof t); var r = {}; for (var o in t) r[o] = n(t[o]); var c = M({ kind: "interface", type: "interface<{" + Object.keys(t).join() + "}>", defaults: e, struct: n }); return c.check = function(t, e, path) { if (void 0 === t && (t = c.default()), "object" != typeof t && "function" != typeof t) return [
                                            [c.fail({ value: t, branch: e, path: path })]
                                        ]; var n = []; for (var o in r) { var l = r[o],
                                                f = t[o],
                                                d = l.check(f, e.concat(f), path.concat(o))[0];
                                            d && n.push.apply(n, d) } return n.length ? [n] : [void 0, t] }, c }(t, n, e) }, e.intersection = function(t, n) { return function(t, e, n) { E(Array.isArray(t) && 0 !== t.length); var r = t.map((function(t) { return n(t) })),
                                        o = r.map((function(s) { return s.type })).join(" & "),
                                        c = M({ kind: "intersection", type: o, defaults: e, struct: n }); return c.check = function(t, e, path) { void 0 === t && (t = c.default()); for (var n, o = t, l = v(r); !(n = l()).done;) { var f = n.value.check(t, e, path),
                                                d = f[0],
                                                h = f[1]; if (d) return [
                                                [c.fail({ value: t, branch: e, path: path })]
                                            ];
                                            o = h } return [void 0, o] }, c }(t, n, e) }, e.lazy = function(t, n) { return function(t, e, n) { E("function" == typeof t); var r = M({ kind: "lazy", type: "lazy<…>", defaults: e, struct: n }); return r.check = function() { return Object.assign(r, t()), r.check.apply(r, arguments) }, r }(t, n, e) }, e.literal = function(t, n) { return function(t, e, n) { var r = n((function(e) { return e === t }), e); return r.kind = "literal", r.type = "string" == typeof t ? '"' + t + '"' : "" + t, r }(t, n, e) }, e.object = function(t, n) { return function(t, e, n) { E("object" == typeof t); var r = {}; for (var o in t) r[o] = n(t[o]); var c = M({ kind: "object", type: "{" + Object.keys(t).join() + "}", defaults: e, struct: n }); return c.check = function(t, e, path) { void 0 === t && (t = c.default()); var n = c.default(); if (void 0 === t && (t = n), "object" !== k(t)) return [
                                            [c.fail({ value: t, branch: e, path: path })]
                                        ]; for (var o, l = {}, f = [], d = v(new Set(Object.keys(r).concat(Object.keys(t)))); !(o = d()).done;) { var h = o.value,
                                                m = t[h],
                                                p = path.concat(h),
                                                b = e.concat(m),
                                                y = r[h]; if (void 0 === m && null != n && h in n && (m = "function" == typeof n[h] ? n[h](t, e, path) : n[h]), h in r) { var w = y.check(m, b, p),
                                                    x = w[0],
                                                    S = w[1];
                                                x ? f.push.apply(f, x) : void 0 !== S && h in r && (l[h] = S) } else f.push(c.fail({ type: void 0, value: m, path: p, branch: t })) } return f.length ? [f] : [void 0, l] }, c }(t, n, e) }, e.optional = function(t, n) { return P([t, "undefined"], n, e) }, e.partial = function(t, n) { return function(t, e, n) { E("object" == typeof t); var r = {}; for (var o in t) r[o] = n.union([t[o], "undefined"]); var c = M({ kind: "object", type: "{" + Object.keys(t).join() + "}", defaults: e, struct: n }); return c.check = function(t, e, path) { void 0 === t && (t = c.default()); var n = c.default(); if (void 0 === t && (t = n), "object" !== k(t)) return [
                                            [c.fail({ value: t, branch: e, path: path })]
                                        ]; for (var o, l = {}, f = [], d = v(t); !(o = d()).done;) { var h = o.value,
                                                m = t[h],
                                                p = path.concat(h),
                                                b = e.concat(m),
                                                y = r[h]; if (void 0 === m && null != n && h in n && (m = "function" == typeof n[h] ? n[h](t, e, path) : n[h]), h in r) { var w = y.check(m, b, p),
                                                    x = w[0],
                                                    S = w[1];
                                                x ? f.push.apply(f, x) : void 0 !== S && h in r && (l[h] = S) } else f.push(c.fail({ type: void 0, value: m, path: p, branch: t })) } return f.length ? [f] : [void 0, l] }, c }(t, n, e) }, e.pick = function(t, n) { return function(t, e, n) { E("object" == typeof t); var r = {}; for (var o in t) r[o] = n(t[o]); var c = M({ kind: "pick", type: "pick<{" + Object.keys(t).join() + "}>", defaults: e, struct: n }); return c.check = function(t, e, path) { void 0 === t && (t = c.default()); var n = c.default(); if (void 0 === t && (t = n), "object" !== k(t)) return [
                                            [c.fail({ value: t, branch: e, path: path })]
                                        ]; var o = {},
                                            l = []; for (var f in r) { var d = t[f],
                                                p = path.concat(f),
                                                b = e.concat(d),
                                                h = r[f];
                                            void 0 === d && null != n && f in n && (d = "function" == typeof n[f] ? n[f](t, e, path) : n[f]); var m = h.check(d, b, p),
                                                y = m[0],
                                                v = m[1];
                                            y ? l.push.apply(l, y) : void 0 !== v && f in r && (o[f] = v) } return l.length ? [l] : [void 0, o] }, c }(t, n, e) }, e.record = function(t, n) { return function(t, e, n) { E(Array.isArray(t) && 2 === t.length); var r = n(t[0]),
                                        o = n(t[1]),
                                        l = M({ kind: "record", type: "record<" + r.type + "," + o.type + ">", defaults: e, struct: n }); return l.check = function(t, e, path) { var defs = l.default(); if (t = defs ? c(c({}, defs), t) : t, "object" !== k(t)) return [
                                            [l.fail({ value: t, branch: e, path: path })]
                                        ]; var n = {},
                                            f = []; for (var d in t) { var h = t[d],
                                                p = path.concat(d),
                                                b = e.concat(h),
                                                m = r.check(d, b, p),
                                                y = m[0],
                                                v = m[1]; if (y) f.push.apply(f, y);
                                            else { var w = o.check(h, b, p),
                                                    x = w[0],
                                                    S = w[1];
                                                x ? f.push.apply(f, x) : n[v] = S } } return f.length ? [f] : [void 0, n] }, l }(t, n, e) }, e.scalar = function(t, n) { return function(t, e, n) { E("string" == typeof t); var r = n.Types;
                                    E(t in r); var o = n(r[t], e); return o.kind = "scalar", o.type = t, o }(t, n, e) }, e.size = function(t, n) { return function(t, e, n) { E(Array.isArray(t) && 2 === t.length && t.every((function(t) { return "number" == typeof t }))); var r = t[0],
                                        o = t[1],
                                        c = n((function(t) { return null != t && "number" == typeof t.length && t.length >= r && t.length <= o }), e); return c.kind = "size", c.type = "size<" + r + "," + o + ">", c }(t, n, e) }, e.tuple = function(t, n) { return function(t, e, n) { E(Array.isArray(t)); var r = t.map((function(s) { return n(s) })),
                                        o = M({ kind: "tuple", type: "[" + r.map((function(t) { return t.type })).join() + "]", defaults: e, struct: n }); return o.check = function(t, e, path) { if (void 0 === t && (t = o.default()), !Array.isArray(t)) return [
                                            [o.fail({ value: t, branch: e, path: path })]
                                        ]; for (var n = [], c = [], l = Math.max(t.length, r.length), i = 0; i < l; i++) { var f = r[i],
                                                d = t[i],
                                                p = path.concat(i),
                                                b = e.concat(d); if (f) { var h = f.check(d, b, p),
                                                    m = h[0],
                                                    y = h[1];
                                                m ? c.push.apply(c, m) : n[i] = y } else c.push(o.fail({ type: void 0, value: d, path: p, branch: b })) } return c.length ? [c] : [void 0, n] }, o }(t, n, e) }, e.union = function(t, n) { return P(t, n, e) }, e.Error = t.error || A, e.Types = c(c({}, S), t.types), e }() }, function(t, e, n) { "use strict";
                    (function(t) { var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
                        Object.defineProperty(e, "__esModule", { value: !0 }), e.rustEnum = e.str = e.vecU8 = e.tagged = e.vec = e.bool = e.option = e.publicKey = e.i128 = e.u128 = e.i64 = e.u64 = e.struct = e.u32 = e.u8 = void 0; const o = n(5),
                            c = n(3),
                            l = r(n(70)); var f = n(5);
                        Object.defineProperty(e, "u8", { enumerable: !0, get: function() { return f.u8 } }), Object.defineProperty(e, "u32", { enumerable: !0, get: function() { return f.u32 } }), Object.defineProperty(e, "struct", { enumerable: !0, get: function() { return f.struct } });
                        class d extends o.Layout { constructor(span, t, e) { super(span, e), this.blob = o.blob(span), this.signed = t }
                            decode(b, t = 0) { const e = new l.default(this.blob.decode(b, t), 10, "le"); return this.signed ? e.fromTwos(8 * this.span).clone() : e }
                            encode(e, b, n = 0) { return this.signed && (e = e.toTwos(8 * this.span)), this.blob.encode(e.toArrayLike(t, "le", this.span), b, n) } }

                        function h(t) { return new d(8, !1, t) }
                        e.u64 = h, e.i64 = function(t) { return new d(8, !0, t) }, e.u128 = function(t) { return new d(16, !1, t) }, e.i128 = function(t) { return new d(16, !0, t) };
                        class m extends o.Layout { constructor(t, e, n, r) { super(t.span, r), this.layout = t, this.decoder = e, this.encoder = n }
                            decode(b, t) { return this.decoder(this.layout.decode(b, t)) }
                            encode(t, b, e) { return this.layout.encode(this.encoder(t), b, e) }
                            getSpan(b, t) { return this.layout.getSpan(b, t) } }
                        e.publicKey = function(t) { return new m(o.blob(32), (b => new c.PublicKey(b)), (t => t.toBuffer()), t) };
                        class y extends o.Layout { constructor(t, e) { super(-1, e), this.layout = t, this.discriminator = o.u8() }
                            encode(t, b, e = 0) { return null == t ? this.discriminator.encode(0, b, e) : (this.discriminator.encode(1, b, e), this.layout.encode(t, b, e + 1) + 1) }
                            decode(b, t = 0) { const e = this.discriminator.decode(b, t); if (0 === e) return null; if (1 === e) return this.layout.decode(b, t + 1); throw new Error("Invalid option " + this.property) }
                            getSpan(b, t = 0) { const e = this.discriminator.decode(b, t); if (0 === e) return 1; if (1 === e) return this.layout.getSpan(b, t + 1) + 1; throw new Error("Invalid option " + this.property) } }

                        function v(t) { if (0 === t) return !1; if (1 === t) return !0; throw new Error("Invalid bool: " + t) }

                        function w(t) { return t ? 1 : 0 }

                        function k(t) { const e = o.u32("length"),
                                n = o.struct([e, o.blob(o.offset(e, -e.span), "data")]); return new m(n, (({ data: data }) => data), (data => ({ data: data })), t) }
                        e.option = function(t, e) { return new y(t, e) }, e.bool = function(t) { return new m(o.u8(), v, w, t) }, e.vec = function(t, e) { const n = o.u32("length"),
                                r = o.struct([n, o.seq(t, o.offset(n, -n.span), "values")]); return new m(r, (({ values: t }) => t), (t => ({ values: t })), e) }, e.tagged = function(t, e, n) { const r = o.struct([h("tag"), e.replicate("data")]); return new m(r, (function({ tag: e, data: data }) { if (!e.eq(t)) throw new Error("Invalid tag, expected: " + t.toString("hex") + ", got: " + e.toString("hex")); return data }), (data => ({ tag: t, data: data })), n) }, e.vecU8 = k, e.str = function(e) { return new m(k(), (data => data.toString("utf-8")), (s => t.from(s, "utf-8")), e) }, e.rustEnum = function(t, e) { const n = o.union(o.u8(), e); return t.forEach(((t, e) => n.addVariant(e, t, t.property))), n } }).call(this, n(12).Buffer) }, function(t, e, n) { "use strict";
                    n.r(e),
                        function(t) { n.d(e, "Account", (function() { return Q })), n.d(e, "Authorized", (function() { return Lr })), n.d(e, "BPF_LOADER_DEPRECATED_PROGRAM_ID", (function() { return J })), n.d(e, "BPF_LOADER_PROGRAM_ID", (function() { return zr })), n.d(e, "BpfLoader", (function() { return Br })), n.d(e, "Connection", (function() { return Or })), n.d(e, "LAMPORTS_PER_SOL", (function() { return ro })), n.d(e, "Loader", (function() { return Rr })), n.d(e, "Lockup", (function() { return Ur })), n.d(e, "MAX_SEED_LENGTH", (function() { return H })), n.d(e, "Message", (function() { return Oe })), n.d(e, "NONCE_ACCOUNT_LENGTH", (function() { return ln })), n.d(e, "NonceAccount", (function() { return fn })), n.d(e, "PublicKey", (function() { return Z })), n.d(e, "STAKE_CONFIG_ID", (function() { return Nr })), n.d(e, "STAKE_INSTRUCTION_LAYOUTS", (function() { return Wr })), n.d(e, "SYSTEM_INSTRUCTION_LAYOUTS", (function() { return Cr })), n.d(e, "SYSVAR_CLOCK_PUBKEY", (function() { return Ce })), n.d(e, "SYSVAR_INSTRUCTIONS_PUBKEY", (function() { return Ne })), n.d(e, "SYSVAR_RENT_PUBKEY", (function() { return Re })), n.d(e, "SYSVAR_REWARDS_PUBKEY", (function() { return ze })), n.d(e, "SYSVAR_STAKE_HISTORY_PUBKEY", (function() { return Be })), n.d(e, "Secp256k1Program", (function() { return Hr })), n.d(e, "StakeAuthorizationLayout", (function() { return Fr })), n.d(e, "StakeInstruction", (function() { return Dr })), n.d(e, "StakeProgram", (function() { return $r })), n.d(e, "SystemInstruction", (function() { return Tr })), n.d(e, "SystemProgram", (function() { return jr })), n.d(e, "Transaction", (function() { return Te })), n.d(e, "TransactionInstruction", (function() { return Pe })), n.d(e, "VALIDATOR_INFO_KEY", (function() { return Zr })), n.d(e, "VOTE_PROGRAM_ID", (function() { return Xr })), n.d(e, "ValidatorInfo", (function() { return Yr })), n.d(e, "VoteAccount", (function() { return Jr })), n.d(e, "clusterApiUrl", (function() { return no })), n.d(e, "sendAndConfirmRawTransaction", (function() { return to })), n.d(e, "sendAndConfirmTransaction", (function() { return Mr })); var r = n(8),
                                o = n.n(r),
                                c = n(47),
                                l = n.n(c),
                                f = n(70),
                                d = n.n(f),
                                h = n(135),
                                m = n(287),
                                y = n.n(m),
                                v = n(194),
                                w = n.n(v),
                                k = n(1),
                                x = n(195),
                                S = n(171),
                                _ = n.n(S),
                                E = n(199),
                                A = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

                            function O(t) { if (t.__esModule) return t; var a = Object.defineProperty({}, "__esModule", { value: !0 }); return Object.keys(t).forEach((function(e) { var n = Object.getOwnPropertyDescriptor(t, e);
                                    Object.defineProperty(a, e, n.get ? n : { enumerable: !0, get: function() { return t[e] } }) })), a }

                            function M(t) { var e = { exports: {} }; return t(e, e.exports), e.exports } for (var I = function(t) { var e = B(t),
                                        n = e[0],
                                        r = e[1]; return 3 * (n + r) / 4 - r }, P = function(t) { var e, i, n = B(t),
                                        r = n[0],
                                        o = n[1],
                                        c = new R(function(t, e, n) { return 3 * (e + n) / 4 - n }(0, r, o)),
                                        l = 0,
                                        f = o > 0 ? r - 4 : r; for (i = 0; i < f; i += 4) e = j[t.charCodeAt(i)] << 18 | j[t.charCodeAt(i + 1)] << 12 | j[t.charCodeAt(i + 2)] << 6 | j[t.charCodeAt(i + 3)], c[l++] = e >> 16 & 255, c[l++] = e >> 8 & 255, c[l++] = 255 & e;
                                    2 === o && (e = j[t.charCodeAt(i)] << 2 | j[t.charCodeAt(i + 1)] >> 4, c[l++] = 255 & e);
                                    1 === o && (e = j[t.charCodeAt(i)] << 10 | j[t.charCodeAt(i + 1)] << 4 | j[t.charCodeAt(i + 2)] >> 2, c[l++] = e >> 8 & 255, c[l++] = 255 & e); return c }, T = function(t) { for (var e, n = t.length, r = n % 3, o = [], c = 16383, i = 0, l = n - r; i < l; i += c) o.push(N(t, i, i + c > l ? l : i + c));
                                    1 === r ? (e = t[n - 1], o.push(C[e >> 2] + C[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], o.push(C[e >> 10] + C[e >> 4 & 63] + C[e << 2 & 63] + "=")); return o.join("") }, C = [], j = [], R = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, z = code.length; i < z; ++i) C[i] = code[i], j[code.charCodeAt(i)] = i;

                            function B(t) { var e = t.length; if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var n = t.indexOf("="); return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4] }

                            function N(t, e, n) { for (var r, o, output = [], i = e; i < n; i += 3) r = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), output.push(C[(o = r) >> 18 & 63] + C[o >> 12 & 63] + C[o >> 6 & 63] + C[63 & o]); return output.join("") }
                            j["-".charCodeAt(0)] = 62, j["_".charCodeAt(0)] = 63; var L = { byteLength: I, toByteArray: P, fromByteArray: T },
                                U = function(t, e, n, r, o) { var c, l, f = 8 * o - r - 1,
                                        d = (1 << f) - 1,
                                        h = d >> 1,
                                        m = -7,
                                        i = n ? o - 1 : 0,
                                        y = n ? -1 : 1,
                                        s = t[e + i]; for (i += y, c = s & (1 << -m) - 1, s >>= -m, m += f; m > 0; c = 256 * c + t[e + i], i += y, m -= 8); for (l = c & (1 << -m) - 1, c >>= -m, m += r; m > 0; l = 256 * l + t[e + i], i += y, m -= 8); if (0 === c) c = 1 - h;
                                    else { if (c === d) return l ? NaN : 1 / 0 * (s ? -1 : 1);
                                        l += Math.pow(2, r), c -= h } return (s ? -1 : 1) * l * Math.pow(2, c - r) },
                                D = function(t, e, n, r, o, c) { var l, f, d, h = 8 * c - o - 1,
                                        m = (1 << h) - 1,
                                        y = m >> 1,
                                        rt = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                        i = r ? 0 : c - 1,
                                        v = r ? 1 : -1,
                                        s = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, l = m) : (l = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -l)) < 1 && (l--, d *= 2), (e += l + y >= 1 ? rt / d : rt * Math.pow(2, 1 - y)) * d >= 2 && (l++, d /= 2), l + y >= m ? (f = 0, l = m) : l + y >= 1 ? (f = (e * d - 1) * Math.pow(2, o), l += y) : (f = e * Math.pow(2, y - 1) * Math.pow(2, o), l = 0)); o >= 8; t[n + i] = 255 & f, i += v, f /= 256, o -= 8); for (l = l << o | f, h += o; h > 0; t[n + i] = 255 & l, i += v, l /= 256, h -= 8);
                                    t[n + i - v] |= 128 * s },
                                W = M((function(t, e) { const n = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                                    e.Buffer = c, e.SlowBuffer = function(t) {+t != t && (t = 0); return c.alloc(+t) }, e.INSPECT_MAX_BYTES = 50; const r = 2147483647;

                                    function o(t) { if (t > r) throw new RangeError('The value "' + t + '" is invalid for option "size"'); const e = new Uint8Array(t); return Object.setPrototypeOf(e, c.prototype), e }

                                    function c(t, e, n) { if ("number" == typeof t) { if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number'); return d(t) } return l(t, e, n) }

                                    function l(t, e, n) { if ("string" == typeof t) return function(t, e) { "string" == typeof e && "" !== e || (e = "utf8"); if (!c.isEncoding(e)) throw new TypeError("Unknown encoding: " + e); const n = 0 | v(t, e); let r = o(n); const l = r.write(t, e);
                                            l !== n && (r = r.slice(0, l)); return r }(t, e); if (ArrayBuffer.isView(t)) return function(t) { if (ot(t, Uint8Array)) { const e = new Uint8Array(t); return m(e.buffer, e.byteOffset, e.byteLength) } return h(t) }(t); if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t); if (ot(t, ArrayBuffer) || t && ot(t.buffer, ArrayBuffer)) return m(t, e, n); if ("undefined" != typeof SharedArrayBuffer && (ot(t, SharedArrayBuffer) || t && ot(t.buffer, SharedArrayBuffer))) return m(t, e, n); if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number'); const r = t.valueOf && t.valueOf(); if (null != r && r !== t) return c.from(r, e, n); const b = function(t) { if (c.isBuffer(t)) { const e = 0 | y(t.length),
                                                    n = o(e); return 0 === n.length || t.copy(n, 0, 0, e), n } if (void 0 !== t.length) return "number" != typeof t.length || it(t.length) ? o(0) : h(t); if ("Buffer" === t.type && Array.isArray(t.data)) return h(t.data) }(t); if (b) return b; if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return c.from(t[Symbol.toPrimitive]("string"), e, n); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t) }

                                    function f(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be of type number'); if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"') }

                                    function d(t) { return f(t), o(t < 0 ? 0 : 0 | y(t)) }

                                    function h(t) { const e = t.length < 0 ? 0 : 0 | y(t.length),
                                            n = o(e); for (let i = 0; i < e; i += 1) n[i] = 255 & t[i]; return n }

                                    function m(t, e, n) { if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds'); if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds'); let r; return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n), Object.setPrototypeOf(r, c.prototype), r }

                                    function y(t) { if (t >= r) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes"); return 0 | t }

                                    function v(t, e) { if (c.isBuffer(t)) return t.length; if (ArrayBuffer.isView(t) || ot(t, ArrayBuffer)) return t.byteLength; if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t); const n = t.length,
                                            r = arguments.length > 2 && !0 === arguments[2]; if (!r && 0 === n) return 0; let o = !1; for (;;) switch (e) {
                                            case "ascii":
                                            case "latin1":
                                            case "binary":
                                                return n;
                                            case "utf8":
                                            case "utf-8":
                                                return tt(t).length;
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return 2 * n;
                                            case "hex":
                                                return n >>> 1;
                                            case "base64":
                                                return et(t).length;
                                            default:
                                                if (o) return r ? -1 : tt(t).length;
                                                e = ("" + e).toLowerCase(), o = !0 } }

                                    function w(t, e, n) { let r = !1; if ((void 0 === e || e < 0) && (e = 0), e > this.length) return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return ""; if ((n >>>= 0) <= (e >>>= 0)) return ""; for (t || (t = "utf8");;) switch (t) {
                                            case "hex":
                                                return R(this, e, n);
                                            case "utf8":
                                            case "utf-8":
                                                return P(this, e, n);
                                            case "ascii":
                                                return C(this, e, n);
                                            case "latin1":
                                            case "binary":
                                                return j(this, e, n);
                                            case "base64":
                                                return I(this, e, n);
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return z(this, e, n);
                                            default:
                                                if (r) throw new TypeError("Unknown encoding: " + t);
                                                t = (t + "").toLowerCase(), r = !0 } }

                                    function k(b, t, e) { const i = b[t];
                                        b[t] = b[e], b[e] = i }

                                    function x(t, e, n, r, o) { if (0 === t.length) return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), it(n = +n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) { if (o) return -1;
                                            n = t.length - 1 } else if (n < 0) { if (!o) return -1;
                                            n = 0 } if ("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e)) return 0 === e.length ? -1 : S(t, e, n, r, o); if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : S(t, [e], n, r, o); throw new TypeError("val must be string, number or Buffer") }

                                    function S(t, e, n, r, o) { let i, c = 1,
                                            l = t.length,
                                            f = e.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) { if (t.length < 2 || e.length < 2) return -1;
                                            c = 2, l /= 2, f /= 2, n /= 2 }

                                        function d(t, i) { return 1 === c ? t[i] : t.readUInt16BE(i * c) } if (o) { let r = -1; for (i = n; i < l; i++)
                                                if (d(t, i) === d(e, -1 === r ? 0 : i - r)) { if (-1 === r && (r = i), i - r + 1 === f) return r * c } else -1 !== r && (i -= i - r), r = -1 } else
                                            for (n + f > l && (n = l - f), i = n; i >= 0; i--) { let n = !0; for (let r = 0; r < f; r++)
                                                    if (d(t, i + r) !== d(e, r)) { n = !1; break }
                                                if (n) return i }
                                        return -1 }

                                    function _(t, e, n, r) { n = Number(n) || 0; const o = t.length - n;
                                        r ? (r = Number(r)) > o && (r = o) : r = o; const c = e.length; let i; for (r > c / 2 && (r = c / 2), i = 0; i < r; ++i) { const r = parseInt(e.substr(2 * i, 2), 16); if (it(r)) return i;
                                            t[n + i] = r } return i }

                                    function E(t, e, n, r) { return nt(tt(e, t.length - n), t, n, r) }

                                    function A(t, e, n, r) { return nt(function(t) { const e = []; for (let i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i)); return e }(e), t, n, r) }

                                    function O(t, e, n, r) { return nt(et(e), t, n, r) }

                                    function M(t, e, n, r) { return nt(function(t, e) { let n, r, o; const c = []; for (let i = 0; i < t.length && !((e -= 2) < 0); ++i) n = t.charCodeAt(i), r = n >> 8, o = n % 256, c.push(o), c.push(r); return c }(e, t.length - n), t, n, r) }

                                    function I(t, e, n) { return 0 === e && n === t.length ? L.fromByteArray(t) : L.fromByteArray(t.slice(e, n)) }

                                    function P(t, e, n) { n = Math.min(t.length, n); const r = []; let i = e; for (; i < n;) { const e = t[i]; let o = null,
                                                c = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1; if (i + c <= n) { let n, r, l, f; switch (c) {
                                                    case 1:
                                                        e < 128 && (o = e); break;
                                                    case 2:
                                                        n = t[i + 1], 128 == (192 & n) && (f = (31 & e) << 6 | 63 & n, f > 127 && (o = f)); break;
                                                    case 3:
                                                        n = t[i + 1], r = t[i + 2], 128 == (192 & n) && 128 == (192 & r) && (f = (15 & e) << 12 | (63 & n) << 6 | 63 & r, f > 2047 && (f < 55296 || f > 57343) && (o = f)); break;
                                                    case 4:
                                                        n = t[i + 1], r = t[i + 2], l = t[i + 3], 128 == (192 & n) && 128 == (192 & r) && 128 == (192 & l) && (f = (15 & e) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & l, f > 65535 && f < 1114112 && (o = f)) } }
                                            null === o ? (o = 65533, c = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), i += c } return function(t) { const e = t.length; if (e <= T) return String.fromCharCode.apply(String, t); let n = "",
                                                i = 0; for (; i < e;) n += String.fromCharCode.apply(String, t.slice(i, i += T)); return n }(r) }
                                    e.kMaxLength = r, c.TYPED_ARRAY_SUPPORT = function() { try { const t = new Uint8Array(1),
                                                e = { foo: function() { return 42 } }; return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo() } catch (t) { return !1 } }(), c.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", { enumerable: !0, get: function() { if (c.isBuffer(this)) return this.buffer } }), Object.defineProperty(c.prototype, "offset", { enumerable: !0, get: function() { if (c.isBuffer(this)) return this.byteOffset } }), c.poolSize = 8192, c.from = function(t, e, n) { return l(t, e, n) }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(t, e, n) { return function(t, e, n) { return f(t), t <= 0 ? o(t) : void 0 !== e ? "string" == typeof n ? o(t).fill(e, n) : o(t).fill(e) : o(t) }(t, e, n) }, c.allocUnsafe = function(t) { return d(t) }, c.allocUnsafeSlow = function(t) { return d(t) }, c.isBuffer = function(b) { return null != b && !0 === b._isBuffer && b !== c.prototype }, c.compare = function(a, b) { if (ot(a, Uint8Array) && (a = c.from(a, a.offset, a.byteLength)), ot(b, Uint8Array) && (b = c.from(b, b.offset, b.byteLength)), !c.isBuffer(a) || !c.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (a === b) return 0; let t = a.length,
                                            e = b.length; for (let i = 0, n = Math.min(t, e); i < n; ++i)
                                            if (a[i] !== b[i]) { t = a[i], e = b[i]; break }
                                        return t < e ? -1 : e < t ? 1 : 0 }, c.isEncoding = function(t) { switch (String(t).toLowerCase()) {
                                            case "hex":
                                            case "utf8":
                                            case "utf-8":
                                            case "ascii":
                                            case "latin1":
                                            case "binary":
                                            case "base64":
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return !0;
                                            default:
                                                return !1 } }, c.concat = function(t, e) { if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length) return c.alloc(0); let i; if (void 0 === e)
                                            for (e = 0, i = 0; i < t.length; ++i) e += t[i].length; const n = c.allocUnsafe(e); let r = 0; for (i = 0; i < t.length; ++i) { let e = t[i]; if (ot(e, Uint8Array)) r + e.length > n.length ? (c.isBuffer(e) || (e = c.from(e)), e.copy(n, r)) : Uint8Array.prototype.set.call(n, e, r);
                                            else { if (!c.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                                                e.copy(n, r) }
                                            r += e.length } return n }, c.byteLength = v, c.prototype._isBuffer = !0, c.prototype.swap16 = function() { const t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (let i = 0; i < t; i += 2) k(this, i, i + 1); return this }, c.prototype.swap32 = function() { const t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (let i = 0; i < t; i += 4) k(this, i, i + 3), k(this, i + 1, i + 2); return this }, c.prototype.swap64 = function() { const t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (let i = 0; i < t; i += 8) k(this, i, i + 7), k(this, i + 1, i + 6), k(this, i + 2, i + 5), k(this, i + 3, i + 4); return this }, c.prototype.toString = function() { const t = this.length; return 0 === t ? "" : 0 === arguments.length ? P(this, 0, t) : w.apply(this, arguments) }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(b) { if (!c.isBuffer(b)) throw new TypeError("Argument must be a Buffer"); return this === b || 0 === c.compare(this, b) }, c.prototype.inspect = function() { let t = ""; const n = e.INSPECT_MAX_BYTES; return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">" }, n && (c.prototype[n] = c.prototype.inspect), c.prototype.compare = function(t, e, n, r, o) { if (ot(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t); if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index"); if (r >= o && e >= n) return 0; if (r >= o) return -1; if (e >= n) return 1; if (this === t) return 0; let l = (o >>>= 0) - (r >>>= 0),
                                            f = (n >>>= 0) - (e >>>= 0); const d = Math.min(l, f),
                                            h = this.slice(r, o),
                                            m = t.slice(e, n); for (let i = 0; i < d; ++i)
                                            if (h[i] !== m[i]) { l = h[i], f = m[i]; break }
                                        return l < f ? -1 : f < l ? 1 : 0 }, c.prototype.includes = function(t, e, n) { return -1 !== this.indexOf(t, e, n) }, c.prototype.indexOf = function(t, e, n) { return x(this, t, e, n, !0) }, c.prototype.lastIndexOf = function(t, e, n) { return x(this, t, e, n, !1) }, c.prototype.write = function(t, e, n, r) { if (void 0 === e) r = "utf8", n = this.length, e = 0;
                                        else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                                        else { if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                            e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0) } const o = this.length - e; if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                                        r || (r = "utf8"); let c = !1; for (;;) switch (r) {
                                            case "hex":
                                                return _(this, t, e, n);
                                            case "utf8":
                                            case "utf-8":
                                                return E(this, t, e, n);
                                            case "ascii":
                                            case "latin1":
                                            case "binary":
                                                return A(this, t, e, n);
                                            case "base64":
                                                return O(this, t, e, n);
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return M(this, t, e, n);
                                            default:
                                                if (c) throw new TypeError("Unknown encoding: " + r);
                                                r = ("" + r).toLowerCase(), c = !0 } }, c.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; const T = 4096;

                                    function C(t, e, n) { let r = "";
                                        n = Math.min(t.length, n); for (let i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]); return r }

                                    function j(t, e, n) { let r = "";
                                        n = Math.min(t.length, n); for (let i = e; i < n; ++i) r += String.fromCharCode(t[i]); return r }

                                    function R(t, e, n) { const r = t.length;
                                        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r); let o = ""; for (let i = e; i < n; ++i) o += at[t[i]]; return o }

                                    function z(t, e, n) { const r = t.slice(e, n); let o = ""; for (let i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o }

                                    function B(t, e, n) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + e > n) throw new RangeError("Trying to access beyond buffer length") }

                                    function N(t, e, n, r, o, l) { if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > o || e < l) throw new RangeError('"value" argument is out of bounds'); if (n + r > t.length) throw new RangeError("Index out of range") }

                                    function W(t, e, n, r, o) { Y(e, r, o, t, n, 7); let c = Number(e & BigInt(4294967295));
                                        t[n++] = c, c >>= 8, t[n++] = c, c >>= 8, t[n++] = c, c >>= 8, t[n++] = c; let l = Number(e >> BigInt(32) & BigInt(4294967295)); return t[n++] = l, l >>= 8, t[n++] = l, l >>= 8, t[n++] = l, l >>= 8, t[n++] = l, n }

                                    function F(t, e, n, r, o) { Y(e, r, o, t, n, 7); let c = Number(e & BigInt(4294967295));
                                        t[n + 7] = c, c >>= 8, t[n + 6] = c, c >>= 8, t[n + 5] = c, c >>= 8, t[n + 4] = c; let l = Number(e >> BigInt(32) & BigInt(4294967295)); return t[n + 3] = l, l >>= 8, t[n + 2] = l, l >>= 8, t[n + 1] = l, l >>= 8, t[n] = l, n + 8 }

                                    function $(t, e, n, r, o, c) { if (n + r > t.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

                                    function K(t, e, n, r, o) { return e = +e, n >>>= 0, o || $(t, 0, n, 4), D(t, e, n, r, 23, 4), n + 4 }

                                    function V(t, e, n, r, o) { return e = +e, n >>>= 0, o || $(t, 0, n, 8), D(t, e, n, r, 52, 8), n + 8 }
                                    c.prototype.slice = function(t, e) { const n = this.length;
                                        (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t); const r = this.subarray(t, e); return Object.setPrototypeOf(r, c.prototype), r }, c.prototype.readUintLE = c.prototype.readUIntLE = function(t, e, n) { t >>>= 0, e >>>= 0, n || B(t, e, this.length); let r = this[t],
                                            o = 1,
                                            i = 0; for (; ++i < e && (o *= 256);) r += this[t + i] * o; return r }, c.prototype.readUintBE = c.prototype.readUIntBE = function(t, e, n) { t >>>= 0, e >>>= 0, n || B(t, e, this.length); let r = this[t + --e],
                                            o = 1; for (; e > 0 && (o *= 256);) r += this[t + --e] * o; return r }, c.prototype.readUint8 = c.prototype.readUInt8 = function(t, e) { return t >>>= 0, e || B(t, 1, this.length), this[t] }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(t, e) { return t >>>= 0, e || B(t, 2, this.length), this[t] | this[t + 1] << 8 }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(t, e) { return t >>>= 0, e || B(t, 2, this.length), this[t] << 8 | this[t + 1] }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(t, e) { return t >>>= 0, e || B(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(t, e) { return t >>>= 0, e || B(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, c.prototype.readBigUInt64LE = st((function(t) { X(t >>>= 0, "offset"); const e = this[t],
                                            n = this[t + 7];
                                        void 0 !== e && void 0 !== n || Q(t, this.length - 8); const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                                            o = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24; return BigInt(r) + (BigInt(o) << BigInt(32)) })), c.prototype.readBigUInt64BE = st((function(t) { X(t >>>= 0, "offset"); const e = this[t],
                                            n = this[t + 7];
                                        void 0 !== e && void 0 !== n || Q(t, this.length - 8); const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                                            o = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n; return (BigInt(r) << BigInt(32)) + BigInt(o) })), c.prototype.readIntLE = function(t, e, n) { t >>>= 0, e >>>= 0, n || B(t, e, this.length); let r = this[t],
                                            o = 1,
                                            i = 0; for (; ++i < e && (o *= 256);) r += this[t + i] * o; return o *= 128, r >= o && (r -= Math.pow(2, 8 * e)), r }, c.prototype.readIntBE = function(t, e, n) { t >>>= 0, e >>>= 0, n || B(t, e, this.length); let i = e,
                                            r = 1,
                                            o = this[t + --i]; for (; i > 0 && (r *= 256);) o += this[t + --i] * r; return r *= 128, o >= r && (o -= Math.pow(2, 8 * e)), o }, c.prototype.readInt8 = function(t, e) { return t >>>= 0, e || B(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, c.prototype.readInt16LE = function(t, e) { t >>>= 0, e || B(t, 2, this.length); const n = this[t] | this[t + 1] << 8; return 32768 & n ? 4294901760 | n : n }, c.prototype.readInt16BE = function(t, e) { t >>>= 0, e || B(t, 2, this.length); const n = this[t + 1] | this[t] << 8; return 32768 & n ? 4294901760 | n : n }, c.prototype.readInt32LE = function(t, e) { return t >>>= 0, e || B(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, c.prototype.readInt32BE = function(t, e) { return t >>>= 0, e || B(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, c.prototype.readBigInt64LE = st((function(t) { X(t >>>= 0, "offset"); const e = this[t],
                                            n = this[t + 7];
                                        void 0 !== e && void 0 !== n || Q(t, this.length - 8); const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24); return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24) })), c.prototype.readBigInt64BE = st((function(t) { X(t >>>= 0, "offset"); const e = this[t],
                                            n = this[t + 7];
                                        void 0 !== e && void 0 !== n || Q(t, this.length - 8); const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]; return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n) })), c.prototype.readFloatLE = function(t, e) { return t >>>= 0, e || B(t, 4, this.length), U(this, t, !0, 23, 4) }, c.prototype.readFloatBE = function(t, e) { return t >>>= 0, e || B(t, 4, this.length), U(this, t, !1, 23, 4) }, c.prototype.readDoubleLE = function(t, e) { return t >>>= 0, e || B(t, 8, this.length), U(this, t, !0, 52, 8) }, c.prototype.readDoubleBE = function(t, e) { return t >>>= 0, e || B(t, 8, this.length), U(this, t, !1, 52, 8) }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(t, e, n, r) { if (t = +t, e >>>= 0, n >>>= 0, !r) { N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0) } let o = 1,
                                            i = 0; for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255; return e + n }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(t, e, n, r) { if (t = +t, e >>>= 0, n >>>= 0, !r) { N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0) } let i = n - 1,
                                            o = 1; for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255; return e + n }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1 }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2 }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2 }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4 }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4 }, c.prototype.writeBigUInt64LE = st((function(t, e = 0) { return W(this, t, e, BigInt(0), BigInt("0xffffffffffffffff")) })), c.prototype.writeBigUInt64BE = st((function(t, e = 0) { return F(this, t, e, BigInt(0), BigInt("0xffffffffffffffff")) })), c.prototype.writeIntLE = function(t, e, n, r) { if (t = +t, e >>>= 0, !r) { const r = Math.pow(2, 8 * n - 1);
                                            N(this, t, e, n, r - 1, -r) } let i = 0,
                                            o = 1,
                                            sub = 0; for (this[e] = 255 & t; ++i < n && (o *= 256);) t < 0 && 0 === sub && 0 !== this[e + i - 1] && (sub = 1), this[e + i] = (t / o >> 0) - sub & 255; return e + n }, c.prototype.writeIntBE = function(t, e, n, r) { if (t = +t, e >>>= 0, !r) { const r = Math.pow(2, 8 * n - 1);
                                            N(this, t, e, n, r - 1, -r) } let i = n - 1,
                                            o = 1,
                                            sub = 0; for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === sub && 0 !== this[e + i + 1] && (sub = 1), this[e + i] = (t / o >> 0) - sub & 255; return e + n }, c.prototype.writeInt8 = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1 }, c.prototype.writeInt16LE = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2 }, c.prototype.writeInt16BE = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2 }, c.prototype.writeInt32LE = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4 }, c.prototype.writeInt32BE = function(t, e, n) { return t = +t, e >>>= 0, n || N(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4 }, c.prototype.writeBigInt64LE = st((function(t, e = 0) { return W(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff")) })), c.prototype.writeBigInt64BE = st((function(t, e = 0) { return F(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff")) })), c.prototype.writeFloatLE = function(t, e, n) { return K(this, t, e, !0, n) }, c.prototype.writeFloatBE = function(t, e, n) { return K(this, t, e, !1, n) }, c.prototype.writeDoubleLE = function(t, e, n) { return V(this, t, e, !0, n) }, c.prototype.writeDoubleBE = function(t, e, n) { return V(this, t, e, !1, n) }, c.prototype.copy = function(t, e, n, r) { if (!c.isBuffer(t)) throw new TypeError("argument should be a Buffer"); if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0; if (0 === t.length || 0 === this.length) return 0; if (e < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("Index out of range"); if (r < 0) throw new RangeError("sourceEnd out of bounds");
                                        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n); const o = r - n; return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e), o }, c.prototype.fill = function(t, e, n, r) { if ("string" == typeof t) { if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string"); if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r); if (1 === t.length) { const code = t.charCodeAt(0);
                                                ("utf8" === r && code < 128 || "latin1" === r) && (t = code) } } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t)); if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index"); if (n <= e) return this; let i; if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                                            for (i = e; i < n; ++i) this[i] = t;
                                        else { const o = c.isBuffer(t) ? t : c.from(t, r),
                                                l = o.length; if (0 === l) throw new TypeError('The value "' + t + '" is invalid for argument "value"'); for (i = 0; i < n - e; ++i) this[i + e] = o[i % l] } return this }; const H = {};

                                    function Z(t, e, n) { H[t] = class extends n { constructor() { super(), Object.defineProperty(this, "message", { value: e.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${t}]`, this.stack, delete this.name }
                                            get code() { return t }
                                            set code(t) { Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: t, writable: !0 }) }
                                            toString() { return `${this.name} [${t}]: ${this.message}` } } }

                                    function G(t) { let e = "",
                                            i = t.length; const n = "-" === t[0] ? 1 : 0; for (; i >= n + 4; i -= 3) e = `_${t.slice(i-3,i)}${e}`; return `${t.slice(0,i)}${e}` }

                                    function Y(t, e, n, r, o, c) { if (t > n || t < e) { const r = "bigint" == typeof e ? "n" : ""; let o; throw o = c > 3 ? 0 === e || e === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(c+1)}${r}` : `>= -(2${r} ** ${8*(c+1)-1}${r}) and < 2 ** ${8*(c+1)-1}${r}` : `>= ${e}${r} and <= ${n}${r}`, new H.ERR_OUT_OF_RANGE("value", o, t) }! function(t, e, n) { X(e, "offset"), void 0 !== t[e] && void 0 !== t[e + n] || Q(e, t.length - (n + 1)) }(r, o, c) }

                                    function X(t, e) { if ("number" != typeof t) throw new H.ERR_INVALID_ARG_TYPE(e, "number", t) }

                                    function Q(t, e, n) { if (Math.floor(t) !== t) throw X(t, n), new H.ERR_OUT_OF_RANGE(n || "offset", "an integer", t); if (e < 0) throw new H.ERR_BUFFER_OUT_OF_BOUNDS; throw new H.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${e}`, t) }
                                    Z("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) { return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds" }), RangeError), Z("ERR_INVALID_ARG_TYPE", (function(t, e) { return `The "${t}" argument must be of type number. Received type ${typeof e}` }), TypeError), Z("ERR_OUT_OF_RANGE", (function(t, e, input) { let n = `The value of "${t}" is out of range.`,
                                            r = input; return Number.isInteger(input) && Math.abs(input) > 2 ** 32 ? r = G(String(input)) : "bigint" == typeof input && (r = String(input), (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) && (r = G(r)), r += "n"), n += ` It must be ${e}. Received ${r}`, n }), RangeError); const J = /[^+/0-9A-Za-z-_]/g;

                                    function tt(t, e) { let n;
                                        e = e || 1 / 0; const r = t.length; let o = null; const c = []; for (let i = 0; i < r; ++i) { if (n = t.charCodeAt(i), n > 55295 && n < 57344) { if (!o) { if (n > 56319) {
                                                        (e -= 3) > -1 && c.push(239, 191, 189); continue } if (i + 1 === r) {
                                                        (e -= 3) > -1 && c.push(239, 191, 189); continue }
                                                    o = n; continue } if (n < 56320) {
                                                    (e -= 3) > -1 && c.push(239, 191, 189), o = n; continue }
                                                n = 65536 + (o - 55296 << 10 | n - 56320) } else o && (e -= 3) > -1 && c.push(239, 191, 189); if (o = null, n < 128) { if ((e -= 1) < 0) break;
                                                c.push(n) } else if (n < 2048) { if ((e -= 2) < 0) break;
                                                c.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((e -= 3) < 0) break;
                                                c.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((e -= 4) < 0) break;
                                                c.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return c }

                                    function et(t) { return L.toByteArray(function(t) { if ((t = (t = t.split("=")[0]).trim().replace(J, "")).length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }(t)) }

                                    function nt(t, e, n, r) { let i; for (i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i]; return i }

                                    function ot(t, e) { return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name }

                                    function it(t) { return t != t } const at = function() { const t = "0123456789abcdef",
                                            table = new Array(256); for (let i = 0; i < 16; ++i) { const e = 16 * i; for (let n = 0; n < 16; ++n) table[e + n] = t[i] + t[n] } return table }();

                                    function st(t) { return "undefined" == typeof BigInt ? ut : t }

                                    function ut() { throw new Error("BigInt not supported") } })); const F = t => t instanceof W.Buffer ? t : t instanceof Uint8Array ? W.Buffer.from(t.buffer, t.byteOffset, t.byteLength) : W.Buffer.from(t); var $ = M((function(t, e) { var n = W.Buffer;

                                    function r(t, e) { for (var n in t) e[n] = t[n] }

                                    function o(t, e, r) { return n(t, e, r) }
                                    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = W : (r(W, e), e.Buffer = o), r(n, o), o.from = function(t, e, r) { if ("number" == typeof t) throw new TypeError("Argument must not be a number"); return n(t, e, r) }, o.alloc = function(t, e, r) { if ("number" != typeof t) throw new TypeError("Argument must be a number"); var o = n(t); return void 0 !== e ? "string" == typeof r ? o.fill(e, r) : o.fill(e) : o.fill(0), o }, o.allocUnsafe = function(t) { if ("number" != typeof t) throw new TypeError("Argument must be a number"); return n(t) }, o.allocUnsafeSlow = function(t) { if ("number" != typeof t) throw new TypeError("Argument must be a number"); return W.SlowBuffer(t) } })).Buffer,
                                K = function(t) { for (var e = {}, n = t.length, r = t.charAt(0), o = 0; o < t.length; o++) { var c = t.charAt(o); if (void 0 !== e[c]) throw new TypeError(c + " is ambiguous");
                                        e[c] = o }

                                    function l(t) { if ("string" != typeof t) throw new TypeError("Expected String"); if (0 === t.length) return $.allocUnsafe(0); for (var o = [0], i = 0; i < t.length; i++) { var c = e[t[i]]; if (void 0 === c) return; for (var l = 0, f = c; l < o.length; ++l) f += o[l] * n, o[l] = 255 & f, f >>= 8; for (; f > 0;) o.push(255 & f), f >>= 8 } for (var d = 0; t[d] === r && d < t.length - 1; ++d) o.push(0); return $.from(o.reverse()) } return { encode: function(source) { if (0 === source.length) return ""; for (var e = [0], i = 0; i < source.length; ++i) { for (var o = 0, c = source[i]; o < e.length; ++o) c += e[o] << 8, e[o] = c % n, c = c / n | 0; for (; c > 0;) e.push(c % n), c = c / n | 0 } for (var l = "", f = 0; 0 === source[f] && f < source.length - 1; ++f) l += r; for (var q = e.length - 1; q >= 0; --q) l += t[e[q]]; return l }, decodeUnsafe: l, decode: function(t) { var e = l(t); if (e) return e; throw new Error("Non-base" + n + " character") } } }("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"); let V = l.a.lowlevel; const H = 32;
                            class Z { constructor(t) { if (o()(this, "_bn", void 0), "string" == typeof t) { const e = K.decode(t); if (32 != e.length) throw new Error("Invalid public key input");
                                        this._bn = new d.a(e) } else this._bn = new d.a(t); if (this._bn.byteLength() > 32) throw new Error("Invalid public key input") }
                                equals(t) { return this._bn.eq(t._bn) }
                                toBase58() { return K.encode(this.toBuffer()) }
                                toBuffer() { const b = this._bn.toArrayLike(W.Buffer); if (32 === b.length) return b; const t = W.Buffer.alloc(32); return b.copy(t, 32 - b.length), t }
                                toString() { return this.toBase58() }
                                static async createWithSeed(t, e, n) { const r = W.Buffer.concat([t.toBuffer(), W.Buffer.from(e), n.toBuffer()]),
                                        o = await Object(h.sha256)(new Uint8Array(r)); return new Z(W.Buffer.from(o, "hex")) }
                                static async createProgramAddress(t, e) { let n = W.Buffer.alloc(0);
                                    t.forEach((function(t) { if (t.length > H) throw new Error("Max seed length exceeded");
                                        n = W.Buffer.concat([n, W.Buffer.from(t)]) })), n = W.Buffer.concat([n, e.toBuffer(), W.Buffer.from("ProgramDerivedAddress")]); let r = await Object(h.sha256)(new Uint8Array(n)),
                                        o = new d.a(r, 16).toArray(null, 32); if (function(p) { var t = [V.gf(), V.gf(), V.gf(), V.gf()],
                                                e = V.gf(),
                                                n = V.gf(),
                                                r = V.gf(),
                                                o = V.gf(),
                                                c = V.gf(),
                                                l = V.gf(),
                                                f = V.gf();
                                            V.set25519(t[2], G), V.unpack25519(t[1], p), V.S(r, t[1]), V.M(o, r, V.D), V.Z(r, r, t[2]), V.A(o, t[2], o), V.S(c, o), V.S(l, c), V.M(f, l, c), V.M(e, f, r), V.M(e, e, o), V.pow2523(e, e), V.M(e, e, r), V.M(e, e, o), V.M(e, e, o), V.M(t[0], e, o), V.S(n, t[0]), V.M(n, n, o), X(n, r) && V.M(t[0], t[0], Y); return V.S(n, t[0]), V.M(n, n, o), X(n, r) ? 0 : 1 }(o)) throw new Error("Invalid seeds, address must fall off the curve"); return new Z(o) }
                                static async findProgramAddress(t, e) { let address, n = 255; for (; 0 != n;) { try { const r = t.concat(W.Buffer.from([n]));
                                            address = await this.createProgramAddress(r, e) } catch (t) { n--; continue } return [address, n] } throw new Error("Unable to find a viable program address nonce") } } let G = V.gf([1]),
                                Y = V.gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                            function X(a, b) { var t = new Uint8Array(32),
                                    e = new Uint8Array(32); return V.pack25519(t, a), V.pack25519(e, b), V.crypto_verify_32(t, 0, e, 0) }
                            class Q { constructor(t) { o()(this, "_keypair", void 0), this._keypair = t ? l.a.sign.keyPair.fromSecretKey(F(t)) : l.a.sign.keyPair() }
                                get publicKey() { return new Z(this._keypair.publicKey) }
                                get secretKey() { return this._keypair.secretKey } } const J = new Z("BPFLoader1111111111111111111111111111111111"); var tt = void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                                et = "function" == typeof Object.create ? function(t, e) { t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }) } : function(t, e) { t.super_ = e; var n = function() {};
                                    n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t };

                            function nt(t, e) { var n = { seen: [], stylize: it }; return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), ct(e) ? n.showHidden = e : e && kt(n, e), ht(n.showHidden) && (n.showHidden = !1), ht(n.depth) && (n.depth = 2), ht(n.colors) && (n.colors = !1), ht(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = ot), at(n, t, n.depth) }

                            function ot(t, e) { var style = nt.styles[e]; return style ? "[" + nt.colors[style][0] + "m" + t + "[" + nt.colors[style][1] + "m" : t }

                            function it(t, e) { return t }

                            function at(t, e, n) { if (t.customInspect && e && yt(e.inspect) && e.inspect !== nt && (!e.constructor || e.constructor.prototype !== e)) { var r = e.inspect(n, t); return ft(r) || (r = at(t, r, n)), r } var o = function(t, e) { if (ht(e)) return t.stylize("undefined", "undefined"); if (ft(e)) { var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'"; return t.stylize(n, "string") } if (r = e, "number" == typeof r) return t.stylize("" + e, "number"); var r; if (ct(e)) return t.stylize("" + e, "boolean"); if (lt(e)) return t.stylize("null", "null") }(t, e); if (o) return o; var c = Object.keys(e),
                                    l = function(t) { var e = {}; return t.forEach((function(t, n) { e[t] = !0 })), e }(c); if (t.showHidden && (c = Object.getOwnPropertyNames(e)), gt(e) && (c.indexOf("message") >= 0 || c.indexOf("description") >= 0)) return st(e); if (0 === c.length) { if (yt(e)) { var f = e.name ? ": " + e.name : ""; return t.stylize("[Function" + f + "]", "special") } if (pt(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp"); if (mt(e)) return t.stylize(Date.prototype.toString.call(e), "date"); if (gt(e)) return st(e) } var d, output, base = "",
                                    h = !1,
                                    m = ["{", "}"];
                                (d = e, Array.isArray(d) && (h = !0, m = ["[", "]"]), yt(e)) && (base = " [Function" + (e.name ? ": " + e.name : "") + "]"); return pt(e) && (base = " " + RegExp.prototype.toString.call(e)), mt(e) && (base = " " + Date.prototype.toUTCString.call(e)), gt(e) && (base = " " + st(e)), 0 !== c.length || h && 0 != e.length ? n < 0 ? pt(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(e), output = h ? function(t, e, n, r, o) { for (var output = [], i = 0, c = e.length; i < c; ++i) xt(e, String(i)) ? output.push(ut(t, e, n, r, String(i), !0)) : output.push(""); return o.forEach((function(o) { o.match(/^\d+$/) || output.push(ut(t, e, n, r, o, !0)) })), output }(t, e, n, l, c) : c.map((function(r) { return ut(t, e, n, l, r, h) })), t.seen.pop(), function(output, base, t) { if (output.reduce((function(t, e) { return e.indexOf("\n"), t + e.replace(/\u001b\[\d\d?m/g, "").length + 1 }), 0) > 60) return t[0] + ("" === base ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + t[1]; return t[0] + base + " " + output.join(", ") + " " + t[1] }(output, base, m)) : m[0] + base + m[1] }

                            function st(t) { return "[" + Error.prototype.toString.call(t) + "]" }

                            function ut(t, e, n, r, o, c) { var l, f, desc; if ((desc = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }).get ? f = desc.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : desc.set && (f = t.stylize("[Setter]", "special")), xt(r, o) || (l = "[" + o + "]"), f || (t.seen.indexOf(desc.value) < 0 ? (f = lt(n) ? at(t, desc.value, null) : at(t, desc.value, n - 1)).indexOf("\n") > -1 && (f = c ? f.split("\n").map((function(line) { return "  " + line })).join("\n").substr(2) : "\n" + f.split("\n").map((function(line) { return "   " + line })).join("\n")) : f = t.stylize("[Circular]", "special")), ht(l)) { if (c && o.match(/^\d+$/)) return f;
                                    (l = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (l = l.substr(1, l.length - 2), l = t.stylize(l, "name")) : (l = l.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), l = t.stylize(l, "string")) } return l + ": " + f }

                            function ct(t) { return "boolean" == typeof t }

                            function lt(t) { return null === t }

                            function ft(t) { return "string" == typeof t }

                            function ht(t) { return void 0 === t }

                            function pt(t) { return bt(t) && "[object RegExp]" === wt(t) }

                            function bt(t) { return "object" == typeof t && null !== t }

                            function mt(t) { return bt(t) && "[object Date]" === wt(t) }

                            function gt(t) { return bt(t) && ("[object Error]" === wt(t) || t instanceof Error) }

                            function yt(t) { return "function" == typeof t }

                            function vt(t) { return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t }

                            function wt(t) { return Object.prototype.toString.call(t) }

                            function kt(t, e) { if (!e || !bt(e)) return t; for (var n = Object.keys(e), i = n.length; i--;) t[n[i]] = e[n[i]]; return t }

                            function xt(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

                            function St(a, b) { if (a === b) return 0; for (var t = a.length, e = b.length, i = 0, n = Math.min(t, e); i < n; ++i)
                                    if (a[i] !== b[i]) { t = a[i], e = b[i]; break }
                                return t < e ? -1 : e < t ? 1 : 0 }
                            nt.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, nt.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }; var _t, Et = Object.prototype.hasOwnProperty,
                                At = Object.keys || function(t) { var e = []; for (var n in t) Et.call(t, n) && e.push(n); return e },
                                Ot = Array.prototype.slice;

                            function Mt() { return void 0 !== _t ? _t : _t = "foo" === function() {}.name }

                            function It(t) { return Object.prototype.toString.call(t) }

                            function Pt(t) { return !W.isBuffer(t) && ("function" == typeof tt.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer)))) }

                            function Tt(t, e) { t || Nt(t, !0, e, "==", Lt) } var Ct = /\s*function\s+([^\(\s]*)\s*/;

                            function jt(t) { if (yt(t)) { if (Mt()) return t.name; var e = t.toString().match(Ct); return e && e[1] } }

                            function Rt(t) { this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = function(t) { return zt(Bt(t.actual), 128) + " " + t.operator + " " + zt(Bt(t.expected), 128) }(this), this.generatedMessage = !0); var e = t.stackStartFunction || Nt; if (Error.captureStackTrace) Error.captureStackTrace(this, e);
                                else { var n = new Error; if (n.stack) { var r = n.stack,
                                            o = jt(e),
                                            c = r.indexOf("\n" + o); if (c >= 0) { var l = r.indexOf("\n", c + 1);
                                            r = r.substring(l + 1) }
                                        this.stack = r } } }

                            function zt(s, t) { return "string" == typeof s ? s.length < t ? s : s.slice(0, t) : s }

                            function Bt(t) { if (Mt() || !yt(t)) return nt(t); var e = jt(t); return "[Function" + (e ? ": " + e : "") + "]" }

                            function Nt(t, e, n, r, o) { throw new Rt({ message: n, actual: t, expected: e, operator: r, stackStartFunction: o }) }

                            function Lt(t, e) { t || Nt(t, !0, e, "==", Lt) }

                            function Ut(t, e, n) { t != e && Nt(t, e, n, "==", Ut) }

                            function Dt(t, e, n) { t == e && Nt(t, e, n, "!=", Dt) }

                            function Wt(t, e, n) { $t(t, e, !1) || Nt(t, e, n, "deepEqual", Wt) }

                            function Ft(t, e, n) { $t(t, e, !0) || Nt(t, e, n, "deepStrictEqual", Ft) }

                            function $t(t, e, n, r) { if (t === e) return !0; if (W.isBuffer(t) && W.isBuffer(e)) return 0 === St(t, e); if (mt(t) && mt(e)) return t.getTime() === e.getTime(); if (pt(t) && pt(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase; if (null !== t && "object" == typeof t || null !== e && "object" == typeof e) { if (Pt(t) && Pt(e) && It(t) === It(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === St(new Uint8Array(t.buffer), new Uint8Array(e.buffer)); if (W.isBuffer(t) !== W.isBuffer(e)) return !1; var o = (r = r || { actual: [], expected: [] }).actual.indexOf(t); return -1 !== o && o === r.expected.indexOf(e) || (r.actual.push(t), r.expected.push(e), function(a, b, t, e) { if (null == a || null == b) return !1; if (vt(a) || vt(b)) return a === b; if (t && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return !1; var n = qt(a),
                                            r = qt(b); if (n && !r || !n && r) return !1; if (n) return $t(a = Ot.call(a), b = Ot.call(b), t); var o, i, c = At(a),
                                            l = At(b); if (c.length !== l.length) return !1; for (c.sort(), l.sort(), i = c.length - 1; i >= 0; i--)
                                            if (c[i] !== l[i]) return !1;
                                        for (i = c.length - 1; i >= 0; i--)
                                            if (!$t(a[o = c[i]], b[o], t, e)) return !1;
                                        return !0 }(t, e, n, r)) } return n ? t === e : t == e }

                            function qt(object) { return "[object Arguments]" == Object.prototype.toString.call(object) }

                            function Kt(t, e, n) { $t(t, e, !1) && Nt(t, e, n, "notDeepEqual", Kt) }

                            function Vt(t, e, n) { $t(t, e, !0) && Nt(t, e, n, "notDeepStrictEqual", Vt) }

                            function Ht(t, e, n) { t !== e && Nt(t, e, n, "===", Ht) }

                            function Zt(t, e, n) { t === e && Nt(t, e, n, "!==", Zt) }

                            function Gt(t, e) { if (!t || !e) return !1; if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t); try { if (t instanceof e) return !0 } catch (t) {} return !Error.isPrototypeOf(e) && !0 === e.call({}, t) }

                            function Yt(t, e, n, r) { var o; if ("function" != typeof e) throw new TypeError('"block" argument must be a function'); "string" == typeof n && (r = n, n = null), o = function(t) { var e; try { t() } catch (t) { e = t } return e }(e), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), t && !o && Nt(o, n, "Missing expected exception" + r); var c = "string" == typeof r,
                                    l = !t && o && !n; if ((!t && gt(o) && c && Gt(o, n) || l) && Nt(o, n, "Got unwanted exception" + r), t && o && n && !Gt(o, n) || !t && o) throw o }

                            function Xt(t, e, n) { Yt(!0, t, e, n) }

                            function Qt(t, e, n) { Yt(!1, t, e, n) }

                            function Jt(t) { if (t) throw t }
                            Tt.AssertionError = Rt, et(Rt, Error), Tt.fail = Nt, Tt.ok = Lt, Tt.equal = Ut, Tt.notEqual = Dt, Tt.deepEqual = Wt, Tt.deepStrictEqual = Ft, Tt.notDeepEqual = Kt, Tt.notDeepStrictEqual = Vt, Tt.strictEqual = Ht, Tt.notStrictEqual = Zt, Tt.throws = Xt, Tt.doesNotThrow = Qt, Tt.ifError = Jt; var te = O(Object.freeze({ __proto__: null, default: Tt, AssertionError: Rt, fail: Nt, ok: Lt, assert: Lt, equal: Ut, notEqual: Dt, deepEqual: Wt, deepStrictEqual: Ft, notDeepEqual: Kt, notDeepStrictEqual: Vt, strictEqual: Ht, notStrictEqual: Zt, throws: Xt, doesNotThrow: Qt, ifError: Jt }));
                            class ee { constructor(span, t) { if (!Number.isInteger(span)) throw new TypeError("span must be an integer");
                                    this.span = span, this.property = t }
                                makeDestinationObject() { return {} }
                                decode(b, t) { throw new Error("Layout is abstract") }
                                encode(t, b, e) { throw new Error("Layout is abstract") }
                                getSpan(b, t) { if (0 > this.span) throw new RangeError("indeterminate span"); return this.span }
                                replicate(t) { const e = Object.create(this.constructor.prototype); return Object.assign(e, this), e.property = t, e }
                                fromArray(t) {} }
                            class ne extends ee { isCount() { throw new Error("ExternalLayout is abstract") } }
                            class re extends ne { constructor(t, e, n) { if (!(t instanceof ee)) throw new TypeError("layout must be a Layout"); if (void 0 === e) e = 0;
                                    else if (!Number.isInteger(e)) throw new TypeError("offset must be integer or undefined");
                                    super(t.span, n || t.property), this.layout = t, this.offset = e }
                                isCount() { return this.layout instanceof oe || this.layout instanceof ie }
                                decode(b, t) { return void 0 === t && (t = 0), this.layout.decode(b, t + this.offset) }
                                encode(t, b, e) { return void 0 === e && (e = 0), this.layout.encode(t, b, e + this.offset) } }
                            class oe extends ee { constructor(span, t) { if (super(span, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes") }
                                decode(b, t) { return void 0 === t && (t = 0), b.readUIntLE(t, this.span) }
                                encode(t, b, e) { return void 0 === e && (e = 0), b.writeUIntLE(t, e, this.span), this.span } }
                            class ie extends ee { constructor(span, t) { if (super(span, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes") }
                                decode(b, t) { return void 0 === t && (t = 0), b.readUIntBE(t, this.span) }
                                encode(t, b, e) { return void 0 === e && (e = 0), b.writeUIntBE(t, e, this.span), this.span } } const ae = Math.pow(2, 32);

                            function se(t) { const e = Math.floor(t / ae); return { hi32: e, lo32: t - e * ae } }

                            function ue(t, e) { return t * ae + e }
                            class ce extends ee { constructor(t) { super(8, t) }
                                decode(b, t) { void 0 === t && (t = 0); const e = b.readUInt32LE(t); return ue(b.readUInt32LE(t + 4), e) }
                                encode(t, b, e) { void 0 === e && (e = 0); const n = se(t); return b.writeUInt32LE(n.lo32, e), b.writeUInt32LE(n.hi32, e + 4), 8 } }
                            class le extends ee { constructor(t) { super(8, t) }
                                decode(b, t) { void 0 === t && (t = 0); const e = b.readUInt32LE(t); return ue(b.readInt32LE(t + 4), e) }
                                encode(t, b, e) { void 0 === e && (e = 0); const n = se(t); return b.writeUInt32LE(n.lo32, e), b.writeInt32LE(n.hi32, e + 4), 8 } }
                            class fe extends ee { constructor(t, e, n) { if (!(t instanceof ee)) throw new TypeError("elementLayout must be a Layout"); if (!(e instanceof ne && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout"); let span = -1;!(e instanceof ne) && 0 < t.span && (span = e * t.span), super(span, n), this.elementLayout = t, this.count = e }
                                getSpan(b, t) { if (0 <= this.span) return this.span;
                                    void 0 === t && (t = 0); let span = 0,
                                        e = this.count; if (e instanceof ne && (e = e.decode(b, t)), 0 < this.elementLayout.span) span = e * this.elementLayout.span;
                                    else { let n = 0; for (; n < e;) span += this.elementLayout.getSpan(b, t + span), ++n } return span }
                                decode(b, t) { void 0 === t && (t = 0); const e = []; let i = 0,
                                        n = this.count; for (n instanceof ne && (n = n.decode(b, t)); i < n;) e.push(this.elementLayout.decode(b, t)), t += this.elementLayout.getSpan(b, t), i += 1; return e }
                                encode(t, b, e) { void 0 === e && (e = 0); const n = this.elementLayout,
                                        span = t.reduce(((span, t) => span + n.encode(t, b, e + span)), 0); return this.count instanceof ne && this.count.encode(t.length, b, e), span } }
                            class de extends ee { constructor(t, e, n) { if (!Array.isArray(t) || !t.reduce(((t, e) => t && e instanceof ee), !0)) throw new TypeError("fields must be array of Layout instances"); "boolean" == typeof e && void 0 === n && (n = e, e = void 0); for (const e of t)
                                        if (0 > e.span && void 0 === e.property) throw new Error("fields cannot contain unnamed variable-length layout");
                                    let span = -1; try { span = t.reduce(((span, t) => span + t.getSpan()), 0) } catch (t) {}
                                    super(span, e), this.fields = t, this.decodePrefixes = !!n }
                                getSpan(b, t) { if (0 <= this.span) return this.span;
                                    void 0 === t && (t = 0); let span = 0; try { span = this.fields.reduce(((span, e) => { const n = e.getSpan(b, t); return t += n, span + n }), 0) } catch (t) { throw new RangeError("indeterminate span") } return span }
                                decode(b, t) { void 0 === t && (t = 0); const e = this.makeDestinationObject(); for (const n of this.fields)
                                        if (void 0 !== n.property && (e[n.property] = n.decode(b, t)), t += n.getSpan(b, t), this.decodePrefixes && b.length === t) break;
                                    return e }
                                encode(t, b, e) { void 0 === e && (e = 0); const n = e; let r = 0,
                                        o = 0; for (const n of this.fields) { let span = n.span; if (o = 0 < span ? span : 0, void 0 === n.property) te(0 < span);
                                        else { const r = t[n.property];
                                            void 0 !== r && (o = n.encode(r, b, e), 0 > span && (span = n.getSpan(b, e))) }
                                        r = e, e += span } return r + o - n }
                                fromArray(t) { const e = this.makeDestinationObject(); for (const n of this.fields) void 0 !== n.property && 0 < t.length && (e[n.property] = t.shift()); return e }
                                layoutFor(t) { if ("string" != typeof t) throw new TypeError("property must be string"); for (const e of this.fields)
                                        if (e.property === t) return e }
                                offsetOf(t) { if ("string" != typeof t) throw new TypeError("property must be string"); let e = 0; for (const n of this.fields) { if (n.property === t) return e;
                                        0 > n.span ? e = -1 : 0 <= e && (e += n.span) } } }
                            class he extends ee { constructor(t, e) { if (!(t instanceof ne && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout"); let span = -1;
                                    t instanceof ne || (span = t), super(span, e), this.length = t }
                                getSpan(b, t) { let span = this.span; return 0 > span && (span = this.length.decode(b, t)), span }
                                decode(b, t) { void 0 === t && (t = 0); let span = this.span; return 0 > span && (span = this.length.decode(b, t)), b.slice(t, t + span) }
                                encode(t, b, e) { let span = this.length; if (this.length instanceof ne && (span = t.length), !(t instanceof W.Buffer && span === t.length)) throw new TypeError((n = "Blob.encode", ((r = this).property ? n + "[" + r.property + "]" : n) + " requires (length " + span + ") Buffer as src")); var n, r; if (e + span > b.length) throw new RangeError("encoding overruns Buffer"); return b.write(t.toString("hex"), e, span, "hex"), this.length instanceof ne && this.length.encode(span, b, e), span } } var pe = (t, e, n) => new re(t, e, n),
                                be = t => new oe(1, t),
                                me = t => new oe(2, t),
                                ge = t => new oe(4, t),
                                ye = t => new ce(t),
                                ve = t => new le(t),
                                we = (t, e, n) => new de(t, e, n),
                                ke = (t, e, n) => new fe(t, e, n),
                                xe = (t, e) => new he(t, e); const Se = (t = "publicKey") => xe(32, t),
                                _e = (t = "string") => { const e = we([ge("length"), ge("lengthPadding"), xe(pe(ge(), -8), "chars")], t),
                                        n = e.decode.bind(e),
                                        r = e.encode.bind(e); return e.decode = (t, e) => n(t, e).chars.toString("utf8"), e.encode = (t, e, n) => { const data = { chars: W.Buffer.from(t, "utf8") }; return r(data, e, n) }, e.alloc = t => ge().span + ge().span + W.Buffer.from(t, "utf8").length, e };

                            function Ee(t) { let e = 0,
                                    n = 0; for (;;) { let r = t.shift(); if (e |= (127 & r) << 7 * n, n += 1, 0 == (128 & r)) break } return e }

                            function Ae(t, e) { let n = e; for (;;) { let e = 127 & n; if (n >>= 7, 0 == n) { t.push(e); break }
                                    e |= 128, t.push(e) } }
                            class Oe { constructor(t) { o()(this, "header", void 0), o()(this, "accountKeys", void 0), o()(this, "recentBlockhash", void 0), o()(this, "instructions", void 0), this.header = t.header, this.accountKeys = t.accountKeys.map((t => new Z(t))), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions }
                                isAccountWritable(t) { return t < this.header.numRequiredSignatures - this.header.numReadonlySignedAccounts || t >= this.header.numRequiredSignatures && t < this.accountKeys.length - this.header.numReadonlyUnsignedAccounts }
                                serialize() { const t = this.accountKeys.length; let e = [];
                                    Ae(e, t); const n = this.instructions.map((t => { const { accounts: e, programIdIndex: n } = t, data = K.decode(t.data); let r = [];
                                        Ae(r, e.length); let o = []; return Ae(o, data.length), { programIdIndex: n, keyIndicesCount: W.Buffer.from(r), keyIndices: W.Buffer.from(e), dataLength: W.Buffer.from(o), data: data } })); let r = [];
                                    Ae(r, n.length); let o = W.Buffer.alloc(Ie);
                                    W.Buffer.from(r).copy(o); let c = r.length;
                                    n.forEach((t => { const e = we([be("programIdIndex"), xe(t.keyIndicesCount.length, "keyIndicesCount"), ke(be("keyIndex"), t.keyIndices.length, "keyIndices"), xe(t.dataLength.length, "dataLength"), ke(be("userdatum"), t.data.length, "data")]).encode(t, o, c);
                                        c += e })), o = o.slice(0, c); const l = we([xe(1, "numRequiredSignatures"), xe(1, "numReadonlySignedAccounts"), xe(1, "numReadonlyUnsignedAccounts"), xe(e.length, "keyCount"), ke(Se("key"), t, "keys"), Se("recentBlockhash")]),
                                        f = { numRequiredSignatures: W.Buffer.from([this.header.numRequiredSignatures]), numReadonlySignedAccounts: W.Buffer.from([this.header.numReadonlySignedAccounts]), numReadonlyUnsignedAccounts: W.Buffer.from([this.header.numReadonlyUnsignedAccounts]), keyCount: W.Buffer.from(e), keys: this.accountKeys.map((t => t.toBuffer())), recentBlockhash: K.decode(this.recentBlockhash) }; let d = W.Buffer.alloc(2048); const h = l.encode(f, d); return o.copy(d, h), d.slice(0, h + o.length) }
                                static from(t) { let e = [...t]; const n = e.shift(),
                                        r = e.shift(),
                                        o = e.shift(),
                                        c = Ee(e); let l = []; for (let i = 0; i < c; i++) { const t = e.slice(0, 32);
                                        e = e.slice(32), l.push(K.encode(W.Buffer.from(t))) } const f = e.slice(0, 32);
                                    e = e.slice(32); const d = Ee(e); let h = []; for (let i = 0; i < d; i++) { let t = {};
                                        t.programIdIndex = e.shift(); const n = Ee(e);
                                        t.accounts = e.slice(0, n), e = e.slice(n); const r = Ee(e),
                                            data = e.slice(0, r);
                                        t.data = K.encode(W.Buffer.from(data)), e = e.slice(r), h.push(t) } const m = { header: { numRequiredSignatures: n, numReadonlySignedAccounts: r, numReadonlyUnsignedAccounts: o }, recentBlockhash: K.encode(W.Buffer.from(f)), accountKeys: l, instructions: h }; return new Oe(m) } } const Me = W.Buffer.alloc(64).fill(0),
                                Ie = 1232;
                            class Pe { constructor(t) { o()(this, "keys", []), o()(this, "programId", void 0), o()(this, "data", W.Buffer.alloc(0)), t && Object.assign(this, t) } }
                            class Te { get signature() { return this.signatures.length > 0 ? this.signatures[0].signature : null }
                                constructor(t) { o()(this, "signatures", []), o()(this, "feePayer", void 0), o()(this, "instructions", []), o()(this, "recentBlockhash", void 0), o()(this, "nonceInfo", void 0), t && Object.assign(this, t) }
                                add(...t) { if (0 === t.length) throw new Error("No instructions"); return t.forEach((t => { "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new Pe(t)) })), this }
                                compileMessage() { const { nonceInfo: t } = this;
                                    t && this.instructions[0] != t.nonceInstruction && (this.recentBlockhash = t.nonce, this.instructions.unshift(t.nonceInstruction)); const { recentBlockhash: e } = this; if (!e) throw new Error("Transaction recentBlockhash required"); if (this.instructions.length < 1) throw new Error("No instructions provided"); let n; if (this.feePayer) n = this.feePayer;
                                    else { if (!(this.signatures.length > 0 && this.signatures[0].publicKey)) throw new Error("Transaction fee payer required");
                                        n = this.signatures[0].publicKey } const r = [],
                                        o = [];
                                    this.instructions.forEach((t => { t.keys.forEach((t => { o.push({...t }) })); const e = t.programId.toString();
                                        r.includes(e) || r.push(e) })), r.forEach((t => { o.push({ pubkey: new Z(t), isSigner: !1, isWritable: !1 }) })), o.sort((function(t, e) { const n = t.isSigner === e.isSigner ? 0 : t.isSigner ? -1 : 1,
                                            r = t.isWritable === e.isWritable ? 0 : t.isWritable ? -1 : 1; return n || r })); const c = [];
                                    o.forEach((t => { const e = t.pubkey.toString(),
                                            n = c.findIndex((t => t.pubkey.toString() === e));
                                        n > -1 ? c[n].isWritable = c[n].isWritable || t.isWritable : c.push(t) })); const l = c.findIndex((t => t.pubkey.equals(n))); if (l > -1) { const [t] = c.splice(l, 1);
                                        t.isSigner = !0, t.isWritable = !0, c.unshift(t) } else c.unshift({ pubkey: n, isSigner: !0, isWritable: !0 }); for (const t of this.signatures) { const e = c.findIndex((e => e.pubkey.equals(t.publicKey))); if (!(e > -1)) throw new Error(`unknown signer: ${t.publicKey.toString()}`);
                                        c[e].isSigner || (c[e].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.")) } let f = 0,
                                        d = 0,
                                        h = 0; const m = [],
                                        y = [];
                                    c.forEach((({ pubkey: t, isSigner: e, isWritable: n }) => { e ? (m.push(t.toString()), f += 1, n || (d += 1)) : (y.push(t.toString()), n || (h += 1)) })); const v = m.concat(y),
                                        w = this.instructions.map((t => { const { data: data, programId: e } = t; return { programIdIndex: v.indexOf(e.toString()), accounts: t.keys.map((meta => v.indexOf(meta.pubkey.toString()))), data: K.encode(data) } })); return w.forEach((t => { Tt(t.programIdIndex >= 0), t.accounts.forEach((t => Tt(t >= 0))) })), new Oe({ header: { numRequiredSignatures: f, numReadonlySignedAccounts: d, numReadonlyUnsignedAccounts: h }, accountKeys: v, recentBlockhash: e, instructions: w }) }
                                _compile() { const t = this.compileMessage(),
                                        e = t.accountKeys.slice(0, t.header.numRequiredSignatures); if (this.signatures.length === e.length) { if (this.signatures.every(((t, n) => e[n].equals(t.publicKey)))) return t } return this.signatures = e.map((t => ({ signature: null, publicKey: t }))), t }
                                serializeMessage() { return this._compile().serialize() }
                                setSigners(...t) { if (0 === t.length) throw new Error("No signers"); const e = new Set;
                                    this.signatures = t.filter((t => { const n = t.toString(); return !e.has(n) && (e.add(n), !0) })).map((t => ({ signature: null, publicKey: t }))) }
                                sign(...t) { if (0 === t.length) throw new Error("No signers"); const e = new Set,
                                        n = []; for (const r of t) { const t = r.publicKey.toString();
                                        e.has(t) || (e.add(t), n.push(r)) }
                                    this.signatures = n.map((t => ({ signature: null, publicKey: t.publicKey }))); const r = this._compile();
                                    this._partialSign(r, ...n), this._verifySignatures(r.serialize(), !0) }
                                partialSign(...t) { if (0 === t.length) throw new Error("No signers"); const e = new Set,
                                        n = []; for (const r of t) { const t = r.publicKey.toString();
                                        e.has(t) || (e.add(t), n.push(r)) } const r = this._compile();
                                    this._partialSign(r, ...n) }
                                _partialSign(t, ...e) { const n = t.serialize();
                                    e.forEach((t => { const e = l.a.sign.detached(n, t.secretKey);
                                        this._addSignature(t.publicKey, e) })) }
                                addSignature(t, e) { this._compile(), this._addSignature(t, e) }
                                _addSignature(t, e) { Tt(64 === e.length); const n = this.signatures.findIndex((e => t.equals(e.publicKey))); if (n < 0) throw new Error(`unknown signer: ${t.toString()}`);
                                    this.signatures[n].signature = W.Buffer.from(e) }
                                verifySignatures() { return this._verifySignatures(this.serializeMessage(), !0) }
                                _verifySignatures(t, e) { for (const { signature: n, publicKey: r }
                                        of this.signatures)
                                        if (null === n) { if (e) return !1 } else if (!l.a.sign.detached.verify(t, n, r.toBuffer())) return !1; return !0 }
                                serialize(t) { const { requireAllSignatures: e, verifySignatures: n } = Object.assign({ requireAllSignatures: !0, verifySignatures: !0 }, t), r = this.serializeMessage(); if (n && !this._verifySignatures(r, e)) throw new Error("Signature verification failed"); return this._serialize(r) }
                                _serialize(t) { const { signatures: e } = this, n = [];
                                    Ae(n, e.length); const r = n.length + 64 * e.length + t.length,
                                        o = W.Buffer.alloc(r); return Tt(e.length < 256), W.Buffer.from(n).copy(o, 0), e.forEach((({ signature: t }, e) => { null !== t && (Tt(64 === t.length, "signature has invalid length"), W.Buffer.from(t).copy(o, n.length + 64 * e)) })), t.copy(o, n.length + 64 * e.length), Tt(o.length <= Ie, `Transaction too large: ${o.length} > ${Ie}`), o }
                                get keys() { return Tt(1 === this.instructions.length), this.instructions[0].keys.map((t => t.pubkey)) }
                                get programId() { return Tt(1 === this.instructions.length), this.instructions[0].programId }
                                get data() { return Tt(1 === this.instructions.length), this.instructions[0].data }
                                static from(t) { let e = [...t]; const n = Ee(e); let r = []; for (let i = 0; i < n; i++) { const t = e.slice(0, 64);
                                        e = e.slice(64), r.push(K.encode(W.Buffer.from(t))) } return Te.populate(Oe.from(e), r) }
                                static populate(t, e) { const n = new Te; return n.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (n.feePayer = t.accountKeys[0]), e.forEach(((e, r) => { const o = { signature: e == K.encode(Me) ? null : K.decode(e), publicKey: t.accountKeys[r] };
                                        n.signatures.push(o) })), t.instructions.forEach((e => { const r = e.accounts.map((e => { const r = t.accountKeys[e]; return { pubkey: r, isSigner: n.signatures.some((t => t.publicKey.toString() === r.toString())), isWritable: t.isAccountWritable(e) } }));
                                        n.instructions.push(new Pe({ keys: r, programId: t.accountKeys[e.programIdIndex], data: K.decode(e.data) })) })), n } } const Ce = new Z("SysvarC1ock11111111111111111111111111111111"),
                                je = new Z("SysvarRecentB1ockHashes11111111111111111111"),
                                Re = new Z("SysvarRent111111111111111111111111111111111"),
                                ze = new Z("SysvarRewards111111111111111111111111111111"),
                                Be = new Z("SysvarStakeHistory1111111111111111111111111"),
                                Ne = new Z("Sysvar1nstructions1111111111111111111111111"); var Le = M((function(t, e) {! function(n) { var r = e && !e.nodeType && e,
                                        o = t && !t.nodeType && t,
                                        c = "object" == typeof A && A;
                                    c.global !== c && c.window !== c && c.self !== c || (n = c); var l, f, d = 2147483647,
                                        base = 36,
                                        h = /^xn--/,
                                        m = /[^\x20-\x7E]/,
                                        y = /[\x2E\u3002\uFF0E\uFF61]/g,
                                        v = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                                        w = Math.floor,
                                        k = String.fromCharCode;

                                    function x(t) { throw new RangeError(v[t]) }

                                    function map(t, e) { for (var n = t.length, r = []; n--;) r[n] = e(t[n]); return r }

                                    function S(t, e) { var n = t.split("@"),
                                            r = ""; return n.length > 1 && (r = n[0] + "@", t = n[1]), r + map((t = t.replace(y, ".")).split("."), e).join(".") }

                                    function _(t) { for (var e, n, output = [], r = 0, o = t.length; r < o;)(e = t.charCodeAt(r++)) >= 55296 && e <= 56319 && r < o ? 56320 == (64512 & (n = t.charCodeAt(r++))) ? output.push(((1023 & e) << 10) + (1023 & n) + 65536) : (output.push(e), r--) : output.push(e); return output }

                                    function E(t) { return map(t, (function(t) { var output = ""; return t > 65535 && (output += k((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), output += k(t) })).join("") }

                                    function O(t, e) { return t + 22 + 75 * (t < 26) - ((0 != e) << 5) }

                                    function M(t, e, n) { var r = 0; for (t = n ? w(t / 700) : t >> 1, t += w(t / e); t > 455; r += base) t = w(t / 35); return w(r + 36 * t / (t + 38)) }

                                    function I(input) { var t, e, n, r, o, c, l, f, h, m, y, output = [],
                                            v = input.length,
                                            i = 0,
                                            k = 128,
                                            S = 72; for ((e = input.lastIndexOf("-")) < 0 && (e = 0), n = 0; n < e; ++n) input.charCodeAt(n) >= 128 && x("not-basic"), output.push(input.charCodeAt(n)); for (r = e > 0 ? e + 1 : 0; r < v;) { for (o = i, c = 1, l = base; r >= v && x("invalid-input"), ((f = (y = input.charCodeAt(r++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : base) >= base || f > w((d - i) / c)) && x("overflow"), i += f * c, !(f < (h = l <= S ? 1 : l >= S + 26 ? 26 : l - S)); l += base) c > w(d / (m = base - h)) && x("overflow"), c *= m;
                                            S = M(i - o, t = output.length + 1, 0 == o), w(i / t) > d - k && x("overflow"), k += w(i / t), i %= t, output.splice(i++, 0, k) } return E(output) }

                                    function P(input) { var t, e, n, r, o, c, l, q, f, h, m, y, v, S, E, output = []; for (y = (input = _(input)).length, t = 128, e = 0, o = 72, c = 0; c < y; ++c)(m = input[c]) < 128 && output.push(k(m)); for (n = r = output.length, r && output.push("-"); n < y;) { for (l = d, c = 0; c < y; ++c)(m = input[c]) >= t && m < l && (l = m); for (l - t > w((d - e) / (v = n + 1)) && x("overflow"), e += (l - t) * v, t = l, c = 0; c < y; ++c)
                                                if ((m = input[c]) < t && ++e > d && x("overflow"), m == t) { for (q = e, f = base; !(q < (h = f <= o ? 1 : f >= o + 26 ? 26 : f - o)); f += base) E = q - h, S = base - h, output.push(k(O(h + E % S, 0))), q = w(E / S);
                                                    output.push(k(O(q, 0))), o = M(e, v, n == r), e = 0, ++n }++e, ++t } return output.join("") } if (l = { version: "1.4.1", ucs2: { decode: _, encode: E }, decode: I, encode: P, toASCII: function(input) { return S(input, (function(t) { return m.test(t) ? "xn--" + P(t) : t })) }, toUnicode: function(input) { return S(input, (function(t) { return h.test(t) ? I(t.slice(4).toLowerCase()) : t })) } }, r && o)
                                        if (t.exports == r) o.exports = l;
                                        else
                                            for (f in l) l.hasOwnProperty(f) && (r[f] = l[f]);
                                    else n.punycode = l }(A) }));

                            function Ue(t, e) { return Object.prototype.hasOwnProperty.call(t, e) } var De = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) };

                            function We(t) { switch (typeof t) {
                                    case "string":
                                        return t;
                                    case "boolean":
                                        return t ? "true" : "false";
                                    case "number":
                                        return isFinite(t) ? t : "";
                                    default:
                                        return "" } }

                            function map(t, e) { if (t.map) return t.map(e); for (var n = [], i = 0; i < t.length; i++) n.push(e(t[i], i)); return n } var Fe = Object.keys || function(t) { var e = []; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n); return e };

                            function $e(t, e, n, r) { e = e || "&", n = n || "="; var o = {}; if ("string" != typeof t || 0 === t.length) return o; var c = /\+/g;
                                t = t.split(e); var l = 1e3;
                                r && "number" == typeof r.maxKeys && (l = r.maxKeys); var f = t.length;
                                l > 0 && f > l && (f = l); for (var i = 0; i < f; ++i) { var d, h, m, y, v = t[i].replace(c, "%20"),
                                        w = v.indexOf(n);
                                    w >= 0 ? (d = v.substr(0, w), h = v.substr(w + 1)) : (d = v, h = ""), m = decodeURIComponent(d), y = decodeURIComponent(h), Ue(o, m) ? De(o[m]) ? o[m].push(y) : o[m] = [o[m], y] : o[m] = y } return o }

                            function qe() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null } var Ke = /^([a-z0-9.+-]+:)/i,
                                Ve = /:[0-9]*$/,
                                He = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                                Ze = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                                Ge = ["'"].concat(Ze),
                                Ye = ["%", "/", "?", ";", "#"].concat(Ge),
                                Xe = ["/", "?", "#"],
                                Qe = /^[+a-z0-9A-Z_-]{0,63}$/,
                                Je = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                                tn = { javascript: !0, "javascript:": !0 },
                                en = { javascript: !0, "javascript:": !0 },
                                nn = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 };

                            function rn(t, e, n) { if (t && bt(t) && t instanceof qe) return t; var u = new qe; return u.parse(t, e, n), u }

                            function on(t, e, n, r) { if (!ft(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e); var o = e.indexOf("?"),
                                    c = -1 !== o && o < e.indexOf("#") ? "?" : "#",
                                    l = e.split(c);
                                l[0] = l[0].replace(/\\/g, "/"); var f = e = l.join(c); if (f = f.trim(), !r && 1 === e.split("#").length) { var d = He.exec(f); if (d) return t.path = f, t.href = f, t.pathname = d[1], d[2] ? (t.search = d[2], t.query = n ? $e(t.search.substr(1)) : t.search.substr(1)) : n && (t.search = "", t.query = {}), t } var i, h, m, p, y = Ke.exec(f); if (y) { var v = (y = y[0]).toLowerCase();
                                    t.protocol = v, f = f.substr(y.length) } if (r || y || f.match(/^\/\/[^@\/]+@[^@\/]+/)) { var w = "//" === f.substr(0, 2);!w || y && en[y] || (f = f.substr(2), t.slashes = !0) } if (!en[y] && (w || y && !nn[y])) { var k, x, S = -1; for (i = 0; i < Xe.length; i++) - 1 !== (h = f.indexOf(Xe[i])) && (-1 === S || h < S) && (S = h); for (-1 !== (x = -1 === S ? f.lastIndexOf("@") : f.lastIndexOf("@", S)) && (k = f.slice(0, x), f = f.slice(x + 1), t.auth = decodeURIComponent(k)), S = -1, i = 0; i < Ye.length; i++) - 1 !== (h = f.indexOf(Ye[i])) && (-1 === S || h < S) && (S = h); - 1 === S && (S = f.length), t.host = f.slice(0, S), f = f.slice(S), sn(t), t.hostname = t.hostname || ""; var _ = "[" === t.hostname[0] && "]" === t.hostname[t.hostname.length - 1]; if (!_) { var E = t.hostname.split(/\./); for (i = 0, m = E.length; i < m; i++) { var A = E[i]; if (A && !A.match(Qe)) { for (var O = "", M = 0, I = A.length; M < I; M++) A.charCodeAt(M) > 127 ? O += "x" : O += A[M]; if (!O.match(Qe)) { var P = E.slice(0, i),
                                                        T = E.slice(i + 1),
                                                        C = A.match(Je);
                                                    C && (P.push(C[1]), T.unshift(C[2])), T.length && (f = "/" + T.join(".") + f), t.hostname = P.join("."); break } } } }
                                    t.hostname.length > 255 ? t.hostname = "" : t.hostname = t.hostname.toLowerCase(), _ || (t.hostname = Le.toASCII(t.hostname)), p = t.port ? ":" + t.port : ""; var j = t.hostname || "";
                                    t.host = j + p, t.href += t.host, _ && (t.hostname = t.hostname.substr(1, t.hostname.length - 2), "/" !== f[0] && (f = "/" + f)) } if (!tn[v])
                                    for (i = 0, m = Ge.length; i < m; i++) { var R = Ge[i]; if (-1 !== f.indexOf(R)) { var z = encodeURIComponent(R);
                                            z === R && (z = escape(R)), f = f.split(R).join(z) } }
                                var B = f.indexOf("#"); - 1 !== B && (t.hash = f.substr(B), f = f.slice(0, B)); var N = f.indexOf("?"); if (-1 !== N ? (t.search = f.substr(N), t.query = f.substr(N + 1), n && (t.query = $e(t.query)), f = f.slice(0, N)) : n && (t.search = "", t.query = {}), f && (t.pathname = f), nn[v] && t.hostname && !t.pathname && (t.pathname = "/"), t.pathname || t.search) { p = t.pathname || ""; var s = t.search || "";
                                    t.path = p + s } return t.href = an(t), t }

                            function an(t) { var e = t.auth || "";
                                e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@"); var n, r, o, c, l = t.protocol || "",
                                    f = t.pathname || "",
                                    d = t.hash || "",
                                    h = !1,
                                    m = "";
                                t.host ? h = e + t.host : t.hostname && (h = e + (-1 === t.hostname.indexOf(":") ? t.hostname : "[" + this.hostname + "]"), t.port && (h += ":" + t.port)), t.query && bt(t.query) && Object.keys(t.query).length && (n = t.query, r = r || "&", o = o || "=", null === n && (n = void 0), m = "object" == typeof n ? map(Fe(n), (function(t) { var e = encodeURIComponent(We(t)) + o; return De(n[t]) ? map(n[t], (function(t) { return e + encodeURIComponent(We(t)) })).join(r) : e + encodeURIComponent(We(n[t])) })).join(r) : c ? encodeURIComponent(We(c)) + o + encodeURIComponent(We(n)) : ""); var y = t.search || m && "?" + m || ""; return l && ":" !== l.substr(-1) && (l += ":"), t.slashes || (!l || nn[l]) && !1 !== h ? (h = "//" + (h || ""), f && "/" !== f.charAt(0) && (f = "/" + f)) : h || (h = ""), d && "#" !== d.charAt(0) && (d = "#" + d), y && "?" !== y.charAt(0) && (y = "?" + y), l + h + (f = f.replace(/[?#]/g, (function(t) { return encodeURIComponent(t) }))) + (y = y.replace("#", "%23")) + d }

                            function sn(t) { var e = t.host,
                                    n = Ve.exec(e);
                                n && (":" !== (n = n[0]) && (t.port = n.substr(1)), e = e.substr(0, e.length - n.length)), e && (t.hostname = e) }
                            qe.prototype.parse = function(t, e, n) { return on(this, t, e, n) }, qe.prototype.format = function() { return an(this) }, qe.prototype.resolve = function(t) { return this.resolveObject(rn(t, !1, !0)).format() }, qe.prototype.resolveObject = function(t) { if (ft(t)) { var e = new qe;
                                    e.parse(t, !1, !0), t = e } for (var n, r = new qe, o = Object.keys(this), c = 0; c < o.length; c++) { var l = o[c];
                                    r[l] = this[l] } if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r; if (t.slashes && !t.protocol) { for (var f = Object.keys(t), d = 0; d < f.length; d++) { var h = f[d]; "protocol" !== h && (r[h] = t[h]) } return nn[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r } if (t.protocol && t.protocol !== r.protocol) { if (!nn[t.protocol]) { for (var m = Object.keys(t), y = 0; y < m.length; y++) { var v = m[y];
                                            r[v] = t[v] } return r.href = r.format(), r } if (r.protocol = t.protocol, t.host || en[t.protocol]) r.pathname = t.pathname;
                                    else { for (n = (t.pathname || "").split("/"); n.length && !(t.host = n.shift()););
                                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== n[0] && n.unshift(""), n.length < 2 && n.unshift(""), r.pathname = n.join("/") } if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) { var p = r.pathname || "",
                                            s = r.search || "";
                                        r.path = p + s } return r.slashes = r.slashes || t.slashes, r.href = r.format(), r } var w, k = r.pathname && "/" === r.pathname.charAt(0),
                                    x = t.host || t.pathname && "/" === t.pathname.charAt(0),
                                    S = x || k || r.host && t.pathname,
                                    _ = S,
                                    E = r.pathname && r.pathname.split("/") || [],
                                    A = r.protocol && !nn[r.protocol]; if (n = t.pathname && t.pathname.split("/") || [], A && (r.hostname = "", r.port = null, r.host && ("" === E[0] ? E[0] = r.host : E.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === n[0] ? n[0] = t.host : n.unshift(t.host)), t.host = null), S = S && ("" === n[0] || "" === E[0])), x) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, E = n;
                                else if (n.length) E || (E = []), E.pop(), E = E.concat(n), r.search = t.search, r.query = t.query;
                                else if (null != t.search) return A && (r.hostname = r.host = E.shift(), (w = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = w.shift(), r.host = r.hostname = w.shift())), r.search = t.search, r.query = t.query, lt(r.pathname) && lt(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r; if (!E.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r; for (var O = E.slice(-1)[0], M = (r.host || t.host || E.length > 1) && ("." === O || ".." === O) || "" === O, I = 0, i = E.length; i >= 0; i--) "." === (O = E[i]) ? E.splice(i, 1) : ".." === O ? (E.splice(i, 1), I++) : I && (E.splice(i, 1), I--); if (!S && !_)
                                    for (; I--; I) E.unshift("..");!S || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), M && "/" !== E.join("/").substr(-1) && E.push(""); var P = "" === E[0] || E[0] && "/" === E[0].charAt(0); return A && (r.hostname = r.host = P ? "" : E.length ? E.shift() : "", (w = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = w.shift(), r.host = r.hostname = w.shift())), (S = S || r.host && E.length) && !P && E.unshift(""), E.length ? r.pathname = E.join("/") : (r.pathname = null, r.path = null), lt(r.pathname) && lt(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r }, qe.prototype.parseHost = function() { return sn(this) }; const un = ye("lamportsPerSignature"),
                                cn = we([ge("version"), ge("state"), Se("authorizedPubkey"), Se("nonce"), we([un], "feeCalculator")]),
                                ln = cn.span;
                            class fn { constructor() { o()(this, "authorizedPubkey", void 0), o()(this, "nonce", void 0), o()(this, "feeCalculator", void 0) }
                                static fromAccountData(t) { const e = cn.decode(F(t), 0); return e.authorizedPubkey = new Z(e.authorizedPubkey), e.nonce = new Z(e.nonce).toString(), e } }

                            function dn(t) { return new Promise((e => setTimeout(e, t))) }

                            function hn(t) { return pn({ context: Object(k.a)({ slot: "number" }), value: t }) }

                            function pn(t) { const e = k.a.literal("2.0"); return k.a.union([Object(k.a)({ jsonrpc: e, id: "string", error: "any" }), Object(k.a)({ jsonrpc: e, id: "string", error: "null?", result: t })]) }

                            function bn(t) { return Object(k.a)({ context: Object(k.a)({ slot: "number" }), value: t }) } const mn = Object(k.a)({ foundation: "number", foundationTerm: "number", initial: "number", taper: "number", terminal: "number" }),
                                gn = Object(k.a)({ epoch: "number", slotIndex: "number", slotsInEpoch: "number", absoluteSlot: "number", blockHeight: "number?", transactionCount: "number?" }),
                                yn = Object(k.a)({ slotsPerEpoch: "number", leaderScheduleSlotOffset: "number", warmup: "boolean", firstNormalEpoch: "number", firstNormalSlot: "number" }),
                                vn = k.a.record(["string", "any"]),
                                wn = k.a.union(["null", "object"]),
                                kn = Object(k.a)({ err: wn }),
                                xn = k.a.pick({ "solana-core": "string", "feature-set": "number?" }),
                                Sn = hn(k.a.pick({ err: k.a.union(["null", "object", "string"]), logs: k.a.union(["null", k.a.array(["string"])]) })); const _n = Object(k.a)({ jsonrpc: k.a.literal("2.0"), id: "string", error: "any?", result: mn }),
                                En = Object(k.a)({ jsonrpc: k.a.literal("2.0"), id: "string", error: "any?", result: gn }),
                                An = Object(k.a)({ jsonrpc: k.a.literal("2.0"), id: "string", error: "any?", result: yn }),
                                On = pn(vn),
                                Mn = hn("number?"),
                                In = Object(k.a)({ jsonrpc: k.a.literal("2.0"), id: "string", error: "any?", result: k.a.union(["null", "number", "undefined"]) }),
                                Pn = Object(k.a)({ jsonrpc: k.a.literal("2.0"), id: "string", error: "any?", result: "number" }),
                                Tn = hn(Object(k.a)({ total: "number", circulating: "number", nonCirculating: "number", nonCirculatingAccounts: k.a.array(["string"]) })),
                                Cn = k.a.object({ amount: "string", uiAmount: "number", decimals: "number" }),
                                jn = hn(k.a.array([k.a.pick({ address: "string", amount: "string", uiAmount: "number", decimals: "number" })])),
                                Rn = hn(Cn),
                                zn = hn(Cn),
                                Bn = hn(k.a.array([k.a.object({ pubkey: "string", account: k.a.object({ executable: "boolean", owner: "string", lamports: "number", data: ["string", k.a.literal("base64")], rentEpoch: "number?" }) })])),
                                Nn = hn(k.a.array([k.a.object({ pubkey: "string", account: k.a.object({ executable: "boolean", owner: "string", lamports: "number", data: k.a.pick({ program: "string", parsed: "any", space: "number" }), rentEpoch: "number?" }) })])),
                                Ln = hn(k.a.array([Object(k.a)({ lamports: "number", address: "string" })])),
                                Un = Object(k.a)({ jsonrpc: k.a.literal("2.0"), id: "string", error: "any?", result: xn }),
                                Dn = Object(k.a)({ executable: "boolean", owner: "string", lamports: "number", data: "any", rentEpoch: "number?" }),
                                Wn = k.a.object({ executable: "boolean", owner: "string", lamports: "number", data: k.a.union([
                                        ["string", k.a.literal("base64")], k.a.pick({ program: "string", parsed: "any", space: "number" })
                                    ]), rentEpoch: "number?" }),
                                Fn = k.a.object({ state: k.a.union([k.a.literal("active"), k.a.literal("inactive"), k.a.literal("activating"), k.a.literal("deactivating")]), active: "number", inactive: "number" }),
                                $n = hn(k.a.union(["null", Dn])),
                                qn = hn(k.a.union(["null", Wn])),
                                Kn = pn(Fn),
                                Vn = pn(k.a.array(["string"])),
                                Hn = pn(k.a.array([k.a.pick({ signature: "string", slot: "number", err: wn, memo: k.a.union(["null", "string"]), blockTime: k.a.union(["undefined", "null", "number"]) })])),
                                Zn = Object(k.a)({ subscription: "number", result: bn(Dn) }),
                                Gn = Object(k.a)({ pubkey: "string", account: Dn }),
                                Yn = Object(k.a)({ pubkey: "string", account: Wn }),
                                Xn = Object(k.a)({ subscription: "number", result: bn(Gn) }),
                                Qn = Object(k.a)({ parent: "number", slot: "number", root: "number" }),
                                Jn = Object(k.a)({ subscription: "number", result: Qn }),
                                er = Object(k.a)({ subscription: "number", result: bn(kn) }),
                                nr = Object(k.a)({ subscription: "number", result: "number" }),
                                rr = pn(k.a.array([Gn])),
                                or = pn(k.a.array([Yn])),
                                ir = pn("number"),
                                ar = pn("string"),
                                sr = pn(k.a.array([k.a.pick({ pubkey: "string", gossip: k.a.union(["null", "string"]), tpu: k.a.union(["null", "string"]), rpc: k.a.union(["null", "string"]), version: k.a.union(["null", "string"]) })])),
                                ur = pn(Object(k.a)({ current: k.a.array([k.a.pick({ votePubkey: "string", nodePubkey: "string", activatedStake: "number", epochVoteAccount: "boolean", epochCredits: k.a.array([k.a.tuple(["number", "number", "number"])]), commission: "number", lastVote: "number", rootSlot: "number?" })]), delinquent: k.a.array([k.a.pick({ votePubkey: "string", nodePubkey: "string", activatedStake: "number", epochVoteAccount: "boolean", epochCredits: k.a.array([k.a.tuple(["number", "number", "number"])]), commission: "number", lastVote: "number", rootSlot: "number?" })]) })),
                                cr = hn(k.a.array([k.a.union(["null", k.a.pick({ slot: "number", confirmations: k.a.union(["number", "null"]), err: wn, confirmationStatus: "string?" })])])),
                                lr = pn("number"),
                                fr = pn("number"),
                                dr = pn("number"),
                                pr = Object(k.a)({ signatures: k.a.array(["string"]), message: Object(k.a)({ accountKeys: k.a.array(["string"]), header: Object(k.a)({ numRequiredSignatures: "number", numReadonlySignedAccounts: "number", numReadonlyUnsignedAccounts: "number" }), instructions: k.a.array([Object(k.a)({ accounts: k.a.array(["number"]), data: "string", programIdIndex: "number" })]), recentBlockhash: "string" }) }),
                                mr = Object(k.a)({ signatures: k.a.array(["string"]), message: Object(k.a)({ accountKeys: k.a.array([Object(k.a)({ pubkey: "string", signer: "boolean", writable: "boolean" })]), instructions: k.a.array([k.a.union([Object(k.a)({ accounts: k.a.array(["string"]), data: "string", programId: "string" }), Object(k.a)({ parsed: "any", program: "string", programId: "string" })])]), recentBlockhash: "string" }) }),
                                gr = k.a.union(["null", k.a.pick({ err: wn, fee: "number", innerInstructions: k.a.union([k.a.array([Object(k.a)({ index: "number", instructions: k.a.array([Object(k.a)({ accounts: k.a.array(["number"]), data: "string", programIdIndex: "number" })]) })]), "null", "undefined"]), preBalances: k.a.array(["number"]), postBalances: k.a.array(["number"]), logMessages: k.a.union([k.a.array(["string"]), "null", "undefined"]), preTokenBalances: k.a.union([k.a.array([k.a.pick({ accountIndex: "number", mint: "string", uiTokenAmount: k.a.pick({ amount: "string", decimals: "number", uiAmount: "number" }) })]), "null", "undefined"]), postTokenBalances: k.a.union([k.a.array([k.a.pick({ accountIndex: "number", mint: "string", uiTokenAmount: k.a.pick({ amount: "string", decimals: "number", uiAmount: "number" }) })]), "null", "undefined"]) })]),
                                yr = k.a.union(["null", k.a.pick({ err: wn, fee: "number", innerInstructions: k.a.union([k.a.array([Object(k.a)({ index: "number", instructions: k.a.array([k.a.union([Object(k.a)({ accounts: k.a.array(["string"]), data: "string", programId: "string" }), Object(k.a)({ parsed: "any", program: "string", programId: "string" })])]) })]), "null", "undefined"]), preBalances: k.a.array(["number"]), postBalances: k.a.array(["number"]), logMessages: k.a.union([k.a.array(["string"]), "null", "undefined"]), preTokenBalances: k.a.union([k.a.array([k.a.pick({ accountIndex: "number", mint: "string", uiTokenAmount: k.a.pick({ amount: "string", decimals: "number", uiAmount: "number" }) })]), "null", "undefined"]), postTokenBalances: k.a.union([k.a.array([k.a.pick({ accountIndex: "number", mint: "string", uiTokenAmount: k.a.pick({ amount: "string", decimals: "number", uiAmount: "number" }) })]), "null", "undefined"]) })]),
                                vr = pn(k.a.union(["null", k.a.pick({ blockhash: "string", previousBlockhash: "string", parentSlot: "number", transactions: k.a.array([Object(k.a)({ transaction: pr, meta: gr })]), rewards: k.a.union(["undefined", k.a.array([Object(k.a)({ pubkey: "string", lamports: "number", postBalance: k.a.union(["number", "undefined"]), rewardType: k.a.union(["string", "undefined"]) })])]) })])),
                                wr = pn(k.a.union(["null", k.a.pick({ slot: "number", transaction: pr, meta: gr, blockTime: k.a.union(["number", "null", "undefined"]) })])),
                                kr = pn(k.a.union(["null", k.a.pick({ slot: "number", transaction: mr, meta: yr, blockTime: k.a.union(["number", "null", "undefined"]) })])),
                                xr = hn(Object(k.a)({ blockhash: "string", feeCalculator: Object(k.a)({ lamportsPerSignature: "number" }) })),
                                Sr = pn(k.a.array([k.a.pick({ slot: "number", numTransactions: "number", numSlots: "number", samplePeriodSecs: "number" })])),
                                _r = hn(k.a.union(["null", Object(k.a)({ feeCalculator: Object(k.a)({ lamportsPerSignature: "number" }) })])),
                                Er = pn("string"),
                                Ar = pn("string");
                            class Or { constructor(t, e) { o()(this, "_rpcEndpoint", void 0), o()(this, "_rpcRequest", void 0), o()(this, "_rpcWebSocket", void 0), o()(this, "_rpcWebSocketConnected", !1), o()(this, "_rpcWebSocketHeartbeat", null), o()(this, "_rpcWebSocketIdleTimeout", null), o()(this, "_commitment", void 0), o()(this, "_blockhashInfo", void 0), o()(this, "_disableBlockhashCaching", !1), o()(this, "_pollingBlockhash", !1), o()(this, "_accountChangeSubscriptions", {}), o()(this, "_accountChangeSubscriptionCounter", 0), o()(this, "_programAccountChangeSubscriptions", {}), o()(this, "_programAccountChangeSubscriptionCounter", 0), o()(this, "_slotSubscriptions", {}), o()(this, "_slotSubscriptionCounter", 0), o()(this, "_signatureSubscriptions", {}), o()(this, "_signatureSubscriptionCounter", 0), o()(this, "_rootSubscriptions", {}), o()(this, "_rootSubscriptionCounter", 0), this._rpcEndpoint = t; let n = rn(t); const r = "https:" === n.protocol; var c;
                                    this._rpcRequest = function(t, e) { const n = w()((async(e, n) => { const r = { method: "POST", body: e, agent: void 0, headers: { "Content-Type": "application/json" } }; try { let e = 5,
                                                    o = {},
                                                    c = 500; for (; o = await y()(t, r), 429 === o.status && (e -= 1, 0 !== e);) console.log(`Server responded with ${o.status} ${o.statusText}.  Retrying after ${c}ms delay...`), await dn(c), c *= 2; const text = await o.text();
                                                o.ok ? n(null, text) : n(new Error(`${o.status} ${o.statusText}: ${text}`)) } catch (t) { n(t) } })); return (t, e) => new Promise(((r, o) => { n.request(t, e, ((t, e) => { t ? o(t) : r(e) })) })) }(n.href), this._commitment = e, this._blockhashInfo = { recentBlockhash: null, lastFetch: new Date(0), transactionSignatures: [], simulatedSignatures: [] }, n.protocol = r ? "wss:" : "ws:", n.host = "", null !== n.port && (n.port = String(Number(n.port) + 1)), this._rpcWebSocket = new x.Client((ft(c = n) && (c = on({}, c)), an(c)), { autoconnect: !1, max_reconnects: 1 / 0 }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)) }
                                get commitment() { return this._commitment }
                                async getBalanceAndContext(t, e) { const n = this._buildArgs([t.toBase58()], e),
                                        r = await this._rpcRequest("getBalance", n),
                                        o = Mn(r); if (o.error) throw new Error("failed to get balance for " + t.toBase58() + ": " + o.error.message); return Tt(void 0 !== o.result), o.result }
                                async getBalance(t, e) { return await this.getBalanceAndContext(t, e).then((t => t.value)).catch((e => { throw new Error("failed to get balance of account " + t.toBase58() + ": " + e) })) }
                                async getBlockTime(slot) { const t = await this._rpcRequest("getBlockTime", [slot]),
                                        e = In(t); if (e.error) throw new Error("failed to get block time for slot " + slot + ": " + e.error.message); return Tt(void 0 !== e.result), e.result }
                                async getMinimumLedgerSlot() { const t = await this._rpcRequest("minimumLedgerSlot", []),
                                        e = Pn(t); if (e.error) throw new Error("failed to get minimum ledger slot: " + e.error.message); return Tt(void 0 !== e.result), e.result }
                                async getFirstAvailableBlock() { const t = await this._rpcRequest("getFirstAvailableBlock", []),
                                        e = Pn(t); if (e.error) throw new Error("failed to get first available block: " + e.error.message); return Tt(void 0 !== e.result), e.result }
                                async getSupply(t) { const e = this._buildArgs([], t),
                                        n = await this._rpcRequest("getSupply", e),
                                        r = Tn(n); if (r.error) throw new Error("failed to get supply: " + r.error.message); return Tt(void 0 !== r.result), r.result.value.nonCirculatingAccounts = r.result.value.nonCirculatingAccounts.map((t => new Z(t))), r.result }
                                async getTokenSupply(t, e) { const n = this._buildArgs([t.toBase58()], e),
                                        r = await this._rpcRequest("getTokenSupply", n),
                                        o = zn(r); if (o.error) throw new Error("failed to get token supply: " + o.error.message); return Tt(void 0 !== o.result), o.result }
                                async getTokenAccountBalance(t, e) { const n = this._buildArgs([t.toBase58()], e),
                                        r = await this._rpcRequest("getTokenAccountBalance", n),
                                        o = Rn(r); if (o.error) throw new Error("failed to get token account balance: " + o.error.message); return Tt(void 0 !== o.result), o.result }
                                async getTokenAccountsByOwner(t, filter, e) { let n = [t.toBase58()];
                                    filter.mint ? n.push({ mint: filter.mint.toBase58() }) : n.push({ programId: filter.programId.toBase58() }); const r = this._buildArgs(n, e, "base64"),
                                        o = await this._rpcRequest("getTokenAccountsByOwner", r),
                                        c = Bn(o); if (c.error) throw new Error("failed to get token accounts owned by account " + t.toBase58() + ": " + c.error.message); const { result: l } = c, { context: f, value: d } = l; return Tt(void 0 !== l), { context: f, value: d.map((t => (Tt("base64" === t.account.data[1]), { pubkey: new Z(t.pubkey), account: { executable: t.account.executable, owner: new Z(t.account.owner), lamports: t.account.lamports, data: W.Buffer.from(t.account.data[0], "base64") } }))) } }
                                async getParsedTokenAccountsByOwner(t, filter, e) { let n = [t.toBase58()];
                                    filter.mint ? n.push({ mint: filter.mint.toBase58() }) : n.push({ programId: filter.programId.toBase58() }); const r = this._buildArgs(n, e, "jsonParsed"),
                                        o = await this._rpcRequest("getTokenAccountsByOwner", r),
                                        c = Nn(o); if (c.error) throw new Error("failed to get token accounts owned by account " + t.toBase58() + ": " + c.error.message); const { result: l } = c, { context: f, value: d } = l; return Tt(void 0 !== l), { context: f, value: d.map((t => ({ pubkey: new Z(t.pubkey), account: { executable: t.account.executable, owner: new Z(t.account.owner), lamports: t.account.lamports, data: t.account.data } }))) } }
                                async getLargestAccounts(t) { const e = {...t, commitment: t && t.commitment || this.commitment },
                                        n = e.filter || e.commitment ? [e] : [],
                                        r = await this._rpcRequest("getLargestAccounts", n),
                                        o = Ln(r); if (o.error) throw new Error("failed to get largest accounts: " + o.error.message); return Tt(void 0 !== o.result), o.result.value = o.result.value.map((({ address: address, lamports: t }) => ({ address: new Z(address), lamports: t }))), o.result }
                                async getTokenLargestAccounts(t, e) { const n = this._buildArgs([t.toBase58()], e),
                                        r = await this._rpcRequest("getTokenLargestAccounts", n),
                                        o = jn(r); if (o.error) throw new Error("failed to get token largest accounts: " + o.error.message); return Tt(void 0 !== o.result), o.result.value = o.result.value.map((t => ({...t, address: new Z(t.address) }))), o.result }
                                async getAccountInfoAndContext(t, e) { const n = this._buildArgs([t.toBase58()], e, "base64"),
                                        r = await this._rpcRequest("getAccountInfo", n),
                                        o = $n(r); if (o.error) throw new Error("failed to get info about account " + t.toBase58() + ": " + o.error.message);
                                    Tt(void 0 !== o.result); let c = null; if (o.result.value) { const { executable: t, owner: e, lamports: n, data: data } = o.result.value;
                                        Tt("base64" === data[1]), c = { executable: t, owner: new Z(e), lamports: n, data: W.Buffer.from(data[0], "base64") } } return { context: { slot: o.result.context.slot }, value: c } }
                                async getParsedAccountInfo(t, e) { const n = this._buildArgs([t.toBase58()], e, "jsonParsed"),
                                        r = await this._rpcRequest("getAccountInfo", n),
                                        o = qn(r); if (o.error) throw new Error("failed to get info about account " + t.toBase58() + ": " + o.error.message);
                                    Tt(void 0 !== o.result); let c = null; if (o.result.value) { const { executable: t, owner: e, lamports: n, data: r } = o.result.value; let data = r;
                                        data.program || (Tt("base64" === data[1]), data = W.Buffer.from(data[0], "base64")), c = { executable: t, owner: new Z(e), lamports: n, data: data } } return { context: { slot: o.result.context.slot }, value: c } }
                                async getAccountInfo(t, e) { return await this.getAccountInfoAndContext(t, e).then((t => t.value)).catch((e => { throw new Error("failed to get info about account " + t.toBase58() + ": " + e) })) }
                                async getStakeActivation(t, e, n) { const r = this._buildArgs([t.toBase58()], e, void 0, void 0 !== n ? { epoch: n } : void 0),
                                        o = await this._rpcRequest("getStakeActivation", r),
                                        c = Kn(o); if (c.error) throw new Error(`failed to get Stake Activation ${t.toBase58()}: ${c.error.message}`);
                                    Tt(void 0 !== c.result); const { state: l, active: f, inactive: d } = c.result; return { state: l, active: f, inactive: d } }
                                async getProgramAccounts(t, e) { const n = this._buildArgs([t.toBase58()], e, "base64"),
                                        r = await this._rpcRequest("getProgramAccounts", n),
                                        o = rr(r); if (o.error) throw new Error("failed to get accounts owned by program " + t.toBase58() + ": " + o.error.message); const { result: c } = o; return Tt(void 0 !== c), c.map((t => (Tt("base64" === t.account.data[1]), { pubkey: new Z(t.pubkey), account: { executable: t.account.executable, owner: new Z(t.account.owner), lamports: t.account.lamports, data: W.Buffer.from(t.account.data[0], "base64") } }))) }
                                async getParsedProgramAccounts(t, e) { const n = this._buildArgs([t.toBase58()], e, "jsonParsed"),
                                        r = await this._rpcRequest("getProgramAccounts", n),
                                        o = or(r); if (o.error) throw new Error("failed to get accounts owned by program " + t.toBase58() + ": " + o.error.message); const { result: c } = o; return Tt(void 0 !== c), c.map((t => { let data = t.account.data; return data.program || (Tt("base64" === data[1]), data = W.Buffer.from(data[0], "base64")), { pubkey: new Z(t.pubkey), account: { executable: t.account.executable, owner: new Z(t.account.owner), lamports: t.account.lamports, data: data } } })) }
                                async confirmTransaction(t, e) { let n; try { n = K.decode(t) } catch (e) { throw new Error("signature must be base58 encoded: " + t) }
                                    Tt(64 === n.length, "signature has invalid length"); const r = Date.now(),
                                        o = e || this.commitment; let c, l = null; const f = new Promise(((e, n) => { try { c = this.onSignature(t, ((t, n) => { c = void 0, l = { context: n, value: t }, e() }), o) } catch (t) { n(t) } })); let d = 6e4; switch (o) {
                                        case "processed":
                                        case "recent":
                                        case "single":
                                        case "confirmed":
                                        case "singleGossip":
                                            d = 3e4 } try { await
                                        function(t, e) { let n; const r = new Promise((t => { n = setTimeout((() => t(null)), e) })); return Promise.race([t, r]).then((t => (clearTimeout(n), t))) }(f, d) } finally { c && this.removeSignatureListener(c) } if (null === l) { const e = (Date.now() - r) / 1e3; throw new Error(`Transaction was not confirmed in ${e.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`) } return l }
                                async getClusterNodes() { const t = await this._rpcRequest("getClusterNodes", []),
                                        e = sr(t); if (e.error) throw new Error("failed to get cluster nodes: " + e.error.message); return Tt(void 0 !== e.result), e.result }
                                async getVoteAccounts(t) { const e = this._buildArgs([], t),
                                        n = await this._rpcRequest("getVoteAccounts", e),
                                        r = ur(n); if (r.error) throw new Error("failed to get vote accounts: " + r.error.message); return Tt(void 0 !== r.result), r.result }
                                async getSlot(t) { const e = this._buildArgs([], t),
                                        n = await this._rpcRequest("getSlot", e),
                                        r = ir(n); if (r.error) throw new Error("failed to get slot: " + r.error.message); return Tt(void 0 !== r.result), r.result }
                                async getSlotLeader(t) { const e = this._buildArgs([], t),
                                        n = await this._rpcRequest("getSlotLeader", e),
                                        r = ar(n); if (r.error) throw new Error("failed to get slot leader: " + r.error.message); return Tt(void 0 !== r.result), r.result }
                                async getSignatureStatus(t, e) { const { context: n, value: r } = await this.getSignatureStatuses([t], e); return Tt(1 === r.length), { context: n, value: r[0] } }
                                async getSignatureStatuses(t, e) { const n = [t];
                                    e && n.push(e); const r = await this._rpcRequest("getSignatureStatuses", n),
                                        o = cr(r); if (o.error) throw new Error("failed to get signature status: " + o.error.message); return Tt(void 0 !== o.result), o.result }
                                async getTransactionCount(t) { const e = this._buildArgs([], t),
                                        n = await this._rpcRequest("getTransactionCount", e),
                                        r = lr(n); if (r.error) throw new Error("failed to get transaction count: " + r.error.message); return Tt(void 0 !== r.result), Number(r.result) }
                                async getTotalSupply(t) { const e = this._buildArgs([], t),
                                        n = await this._rpcRequest("getTotalSupply", e),
                                        r = fr(n); if (r.error) throw new Error("faied to get total supply: " + r.error.message); return Tt(void 0 !== r.result), Number(r.result) }
                                async getInflationGovernor(t) { const e = this._buildArgs([], t),
                                        n = await this._rpcRequest("getInflationGovernor", e),
                                        r = _n(n); if (r.error) throw new Error("failed to get inflation: " + r.error.message); return Tt(void 0 !== r.result), mn(r.result) }
                                async getEpochInfo(t) { const e = this._buildArgs([], t),
                                        n = await this._rpcRequest("getEpochInfo", e),
                                        r = En(n); if (r.error) throw new Error("failed to get epoch info: " + r.error.message); return Tt(void 0 !== r.result), gn(r.result) }
                                async getEpochSchedule() { const t = await this._rpcRequest("getEpochSchedule", []),
                                        e = An(t); if (e.error) throw new Error("failed to get epoch schedule: " + e.error.message); return Tt(void 0 !== e.result), yn(e.result) }
                                async getLeaderSchedule() { const t = await this._rpcRequest("getLeaderSchedule", []),
                                        e = On(t); if (e.error) throw new Error("failed to get leader schedule: " + e.error.message); return Tt(void 0 !== e.result), e.result }
                                async getMinimumBalanceForRentExemption(t, e) { const n = this._buildArgs([t], e),
                                        r = await this._rpcRequest("getMinimumBalanceForRentExemption", n),
                                        o = dr(r); return o.error ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : (Tt(void 0 !== o.result), Number(o.result)) }
                                async getRecentBlockhashAndContext(t) { const e = this._buildArgs([], t),
                                        n = await this._rpcRequest("getRecentBlockhash", e),
                                        r = xr(n); if (r.error) throw new Error("failed to get recent blockhash: " + r.error.message); return Tt(void 0 !== r.result), r.result }
                                async getRecentPerformanceSamples(t) { const e = this._buildArgs(t ? [t] : []),
                                        n = await this._rpcRequest("getRecentPerformanceSamples", e),
                                        r = Sr(n); if (r.error) throw new Error("failed to get recent performance samples: " + r.error.message); return Tt(void 0 !== r.result), r.result }
                                async getFeeCalculatorForBlockhash(t, e) { const n = this._buildArgs([t], e),
                                        r = await this._rpcRequest("getFeeCalculatorForBlockhash", n),
                                        o = _r(r); if (o.error) throw new Error("failed to get fee calculator: " + o.error.message);
                                    Tt(void 0 !== o.result); const { context: c, value: l } = o.result; return { context: c, value: l && l.feeCalculator } }
                                async getRecentBlockhash(t) { return await this.getRecentBlockhashAndContext(t).then((t => t.value)).catch((t => { throw new Error("failed to get recent blockhash: " + t) })) }
                                async getVersion() { const t = await this._rpcRequest("getVersion", []),
                                        e = Un(t); if (e.error) throw new Error("failed to get version: " + e.error.message); return Tt(void 0 !== e.result), e.result }
                                async getConfirmedBlock(slot) { const t = await this._rpcRequest("getConfirmedBlock", [slot]),
                                        e = vr(t); if (e.error) throw new Error("failed to get confirmed block: " + e.error.message); const n = e.result; if (Tt(void 0 !== n), !n) throw new Error("Confirmed block " + slot + " not found"); return { blockhash: new Z(n.blockhash).toString(), previousBlockhash: new Z(n.previousBlockhash).toString(), parentSlot: n.parentSlot, transactions: n.transactions.map((t => { const { message: e, signatures: n } = t.transaction; return { transaction: Te.populate(new Oe(e), n), meta: t.meta } })), rewards: n.rewards || [] } }
                                async getConfirmedTransaction(t) { const e = await this._rpcRequest("getConfirmedTransaction", [t]),
                                        { result: n, error: r } = wr(e); if (r) throw new Error("failed to get confirmed transaction: " + r.message); if (Tt(void 0 !== n), null === n) return n; const { message: o, signatures: c } = n.transaction; return { slot: n.slot, transaction: Te.populate(new Oe(o), c), meta: n.meta } }
                                async getParsedConfirmedTransaction(t) { const e = await this._rpcRequest("getConfirmedTransaction", [t, "jsonParsed"]),
                                        { result: n, error: r } = kr(e); if (r) throw new Error("failed to get confirmed transaction: " + r.message); if (Tt(void 0 !== n), null === n) return n;
                                    n.meta.innerInstructions && n.meta.innerInstructions.forEach((t => { t.instructions.forEach((t => { t.programId = new Z(t.programId), t.accounts && (t.accounts = t.accounts.map((t => new Z(t)))) })) })); const { accountKeys: o, instructions: c, recentBlockhash: l } = n.transaction.message; return { slot: n.slot, meta: n.meta, transaction: { signatures: n.transaction.signatures, message: { accountKeys: o.map((t => ({ pubkey: new Z(t.pubkey), signer: t.signer, writable: t.writable }))), instructions: c.map((t => { let e = { programId: new Z(t.programId) }; return "accounts" in t && (e.accounts = t.accounts.map((t => new Z(t)))), {...t, ...e } })), recentBlockhash: l } } } }
                                async getConfirmedSignaturesForAddress(address, t, e) { const n = await this._rpcRequest("getConfirmedSignaturesForAddress", [address.toBase58(), t, e]),
                                        r = Vn(n); if (r.error) throw new Error("failed to get confirmed signatures for address: " + r.error.message); return Tt(void 0 !== r.result), r.result }
                                async getConfirmedSignaturesForAddress2(address, t) { const e = await this._rpcRequest("getConfirmedSignaturesForAddress2", [address.toBase58(), t]),
                                        n = Hn(e); if (n.error) throw new Error("failed to get confirmed signatures for address: " + n.error.message); return Tt(void 0 !== n.result), n.result }
                                async getNonceAndContext(t, e) { const { context: n, value: r } = await this.getAccountInfoAndContext(t, e); let o = null; return null !== r && (o = fn.fromAccountData(r.data)), { context: n, value: o } }
                                async getNonce(t, e) { return await this.getNonceAndContext(t, e).then((t => t.value)).catch((e => { throw new Error("failed to get nonce for account " + t.toBase58() + ": " + e) })) }
                                async requestAirdrop(t, e) { const n = await this._rpcRequest("requestAirdrop", [t.toBase58(), e]),
                                        r = Er(n); if (r.error) throw new Error("airdrop to " + t.toBase58() + " failed: " + r.error.message); return Tt(void 0 !== r.result), r.result }
                                async _recentBlockhash(t) { if (!t) { for (; this._pollingBlockhash;) await dn(100); const t = Date.now() - this._blockhashInfo.lastFetch >= 3e4; if (null !== this._blockhashInfo.recentBlockhash && !t) return this._blockhashInfo.recentBlockhash } return await this._pollNewBlockhash() }
                                async _pollNewBlockhash() { this._pollingBlockhash = !0; try { const t = Date.now(); for (let i = 0; i < 50; i++) { const { blockhash: t } = await this.getRecentBlockhash("finalized"); if (this._blockhashInfo.recentBlockhash != t) return this._blockhashInfo = { recentBlockhash: t, lastFetch: new Date, transactionSignatures: [], simulatedSignatures: [] }, t;
                                            await dn(200) } throw new Error(`Unable to obtain a new blockhash after ${Date.now()-t}ms`) } finally { this._pollingBlockhash = !1 } }
                                async simulateTransaction(t, e) { if (t.nonceInfo && e) t.sign(...e);
                                    else { let n = this._disableBlockhashCaching; for (; t.recentBlockhash = await this._recentBlockhash(n), e;) { if (t.sign(...e), !t.signature) throw new Error("!signature"); const r = t.signature.toString("base64"); if (!this._blockhashInfo.simulatedSignatures.includes(r) && !this._blockhashInfo.transactionSignatures.includes(r)) { this._blockhashInfo.simulatedSignatures.push(r); break }
                                            n = !0 } } const n = t.serializeMessage(),
                                        r = t._serialize(n).toString("base64"),
                                        o = { encoding: "base64", commitment: this.commitment },
                                        c = [r, o];
                                    e && (o.sigVerify = !0); const l = await this._rpcRequest("simulateTransaction", c),
                                        f = Sn(l); if (f.error) throw new Error("failed to simulate transaction: " + f.error.message); return Tt(void 0 !== f.result), Tt(f.result), f.result }
                                async sendTransaction(t, e, n) { if (t.nonceInfo) t.sign(...e);
                                    else { let n = this._disableBlockhashCaching; for (;;) { if (t.recentBlockhash = await this._recentBlockhash(n), t.sign(...e), !t.signature) throw new Error("!signature"); const r = t.signature.toString("base64"); if (!this._blockhashInfo.transactionSignatures.includes(r)) { this._blockhashInfo.transactionSignatures.push(r); break }
                                            n = !0 } } const r = t.serialize(); return await this.sendRawTransaction(r, n) }
                                async validatorExit() { const t = await this._rpcRequest("validatorExit", []),
                                        e = pn("boolean")(t); if (e.error) throw new Error("validator exit failed: " + e.error.message); return Tt(void 0 !== e.result), e.result }
                                async sendRawTransaction(t, e) { const n = F(t).toString("base64"); return await this.sendEncodedTransaction(n, e) }
                                async sendEncodedTransaction(t, e) { const n = { encoding: "base64" },
                                        r = [t, n],
                                        o = e && e.skipPreflight,
                                        c = e && e.preflightCommitment || this.commitment;
                                    o && (n.skipPreflight = o), c && (n.preflightCommitment = c); const l = await this._rpcRequest("sendTransaction", r),
                                        f = Ar(l); if (f.error) { if (f.error.data) { const t = f.error.data.logs; if (t && Array.isArray(t)) { const e = "\n    ",
                                                    n = e + t.join(e);
                                                console.error(f.error.message, n) } } throw new Error("failed to send transaction: " + f.error.message) } return Tt(void 0 !== f.result), Tt(f.result), f.result }
                                _wsOnOpen() { this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval((() => { this._rpcWebSocket.notify("ping").catch((() => {})) }), 5e3), this._updateSubscriptions() }
                                _wsOnError(t) { console.error("ws error:", t.message) }
                                _wsOnClose(code) { clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null, 1e3 !== code ? this._resetSubscriptions() : this._updateSubscriptions() }
                                async _subscribe(sub, t, e) { if (null == sub.subscriptionId) { sub.subscriptionId = "subscribing"; try { const n = await this._rpcWebSocket.call(t, e); "subscribing" === sub.subscriptionId && (sub.subscriptionId = n) } catch (n) { "subscribing" === sub.subscriptionId && (sub.subscriptionId = null), console.error(`${t} error for argument`, e, n.message) } } }
                                async _unsubscribe(sub, t) { const e = sub.subscriptionId; if (null != e && "string" != typeof e) { const n = e; try { await this._rpcWebSocket.call(t, [n]) } catch (e) { console.error(`${t} error:`, e.message) } } }
                                _resetSubscriptions() { Object.values(this._accountChangeSubscriptions).forEach((s => s.subscriptionId = null)), Object.values(this._programAccountChangeSubscriptions).forEach((s => s.subscriptionId = null)), Object.values(this._signatureSubscriptions).forEach((s => s.subscriptionId = null)), Object.values(this._slotSubscriptions).forEach((s => s.subscriptionId = null)), Object.values(this._rootSubscriptions).forEach((s => s.subscriptionId = null)) }
                                _updateSubscriptions() { const t = Object.keys(this._accountChangeSubscriptions).map(Number),
                                        e = Object.keys(this._programAccountChangeSubscriptions).map(Number),
                                        n = Object.keys(this._slotSubscriptions).map(Number),
                                        r = Object.keys(this._signatureSubscriptions).map(Number),
                                        o = Object.keys(this._rootSubscriptions).map(Number); if (0 !== t.length || 0 !== e.length || 0 !== n.length || 0 !== r.length || 0 !== o.length)
                                        if (null !== this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), this._rpcWebSocketConnected) { for (let e of t) { const sub = this._accountChangeSubscriptions[e];
                                                this._subscribe(sub, "accountSubscribe", this._buildArgs([sub.publicKey], sub.commitment, "base64")) } for (let t of e) { const sub = this._programAccountChangeSubscriptions[t];
                                                this._subscribe(sub, "programSubscribe", this._buildArgs([sub.programId], sub.commitment, "base64")) } for (let t of n) { const sub = this._slotSubscriptions[t];
                                                this._subscribe(sub, "slotSubscribe", []) } for (let t of r) { const sub = this._signatureSubscriptions[t];
                                                this._subscribe(sub, "signatureSubscribe", this._buildArgs([sub.signature], sub.commitment)) } for (let t of o) { const sub = this._rootSubscriptions[t];
                                                this._subscribe(sub, "rootSubscribe", []) } } else this._rpcWebSocket.connect();
                                    else this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout((() => { this._rpcWebSocketIdleTimeout = null, this._rpcWebSocket.close() }), 500)) }
                                _wsOnAccountNotification(t) { const e = Zn(t); if (e.error) throw new Error("account notification failed: " + e.error.message);
                                    Tt(void 0 !== e.result); const n = Object.keys(this._accountChangeSubscriptions).map(Number); for (let t of n) { const sub = this._accountChangeSubscriptions[t]; if (sub.subscriptionId === e.subscription) { const { result: t } = e, { value: n, context: r } = t; return Tt("base64" === n.data[1]), sub.callback({ executable: n.executable, owner: new Z(n.owner), lamports: n.lamports, data: W.Buffer.from(n.data[0], "base64") }, r), !0 } } }
                                onAccountChange(t, e, n) { const r = ++this._accountChangeSubscriptionCounter; return this._accountChangeSubscriptions[r] = { publicKey: t.toBase58(), callback: e, commitment: n, subscriptionId: null }, this._updateSubscriptions(), r }
                                async removeAccountChangeListener(t) { if (!this._accountChangeSubscriptions[t]) throw new Error(`Unknown account change id: ${t}`); { const e = this._accountChangeSubscriptions[t];
                                        delete this._accountChangeSubscriptions[t], await this._unsubscribe(e, "accountUnsubscribe"), this._updateSubscriptions() } }
                                _wsOnProgramAccountNotification(t) { const e = Xn(t); if (e.error) throw new Error("program account notification failed: " + e.error.message);
                                    Tt(void 0 !== e.result); const n = Object.keys(this._programAccountChangeSubscriptions).map(Number); for (let t of n) { const sub = this._programAccountChangeSubscriptions[t]; if (sub.subscriptionId === e.subscription) { const { result: t } = e, { value: n, context: r } = t; return Tt("base64" === n.account.data[1]), sub.callback({ accountId: n.pubkey, accountInfo: { executable: n.account.executable, owner: new Z(n.account.owner), lamports: n.account.lamports, data: W.Buffer.from(n.account.data[0], "base64") } }, r), !0 } } }
                                onProgramAccountChange(t, e, n) { const r = ++this._programAccountChangeSubscriptionCounter; return this._programAccountChangeSubscriptions[r] = { programId: t.toBase58(), callback: e, commitment: n, subscriptionId: null }, this._updateSubscriptions(), r }
                                async removeProgramAccountChangeListener(t) { if (!this._programAccountChangeSubscriptions[t]) throw new Error(`Unknown program account change id: ${t}`); { const e = this._programAccountChangeSubscriptions[t];
                                        delete this._programAccountChangeSubscriptions[t], await this._unsubscribe(e, "programUnsubscribe"), this._updateSubscriptions() } }
                                _wsOnSlotNotification(t) { const e = Jn(t); if (e.error) throw new Error("slot notification failed: " + e.error.message);
                                    Tt(void 0 !== e.result); const { parent: n, slot: slot, root: r } = e.result, o = Object.keys(this._slotSubscriptions).map(Number); for (let t of o) { const sub = this._slotSubscriptions[t]; if (sub.subscriptionId === e.subscription) return sub.callback({ parent: n, slot: slot, root: r }), !0 } }
                                onSlotChange(t) { const e = ++this._slotSubscriptionCounter; return this._slotSubscriptions[e] = { callback: t, subscriptionId: null }, this._updateSubscriptions(), e }
                                async removeSlotChangeListener(t) { if (!this._slotSubscriptions[t]) throw new Error(`Unknown slot change id: ${t}`); { const e = this._slotSubscriptions[t];
                                        delete this._slotSubscriptions[t], await this._unsubscribe(e, "slotUnsubscribe"), this._updateSubscriptions() } }
                                _buildArgs(t, e, n, r) { const o = e || this._commitment; if (o || n || r) { let e = {};
                                        n && (e.encoding = n), o && (e.commitment = o), r && (e = Object.assign(e, r)), t.push(e) } return t }
                                _wsOnSignatureNotification(t) { const e = er(t); if (e.error) throw new Error("signature notification failed: " + e.error.message);
                                    Tt(void 0 !== e.result); const n = Object.keys(this._signatureSubscriptions).map(Number); for (let t of n) { const sub = this._signatureSubscriptions[t]; if (sub.subscriptionId === e.subscription) return delete this._signatureSubscriptions[t], this._updateSubscriptions(), void sub.callback(e.result.value, e.result.context) } }
                                onSignature(t, e, n) { const r = ++this._signatureSubscriptionCounter; return this._signatureSubscriptions[r] = { signature: t, callback: e, commitment: n, subscriptionId: null }, this._updateSubscriptions(), r }
                                async removeSignatureListener(t) { if (!this._signatureSubscriptions[t]) throw new Error(`Unknown signature result id: ${t}`); { const e = this._signatureSubscriptions[t];
                                        delete this._signatureSubscriptions[t], await this._unsubscribe(e, "signatureUnsubscribe"), this._updateSubscriptions() } }
                                _wsOnRootNotification(t) { const e = nr(t); if (e.error) throw new Error("root notification failed: " + e.error.message);
                                    Tt(void 0 !== e.result); const n = e.result,
                                        r = Object.keys(this._rootSubscriptions).map(Number); for (let t of r) { const sub = this._rootSubscriptions[t]; if (sub.subscriptionId === e.subscription) return sub.callback(n), !0 } }
                                onRootChange(t) { const e = ++this._rootSubscriptionCounter; return this._rootSubscriptions[e] = { callback: t, subscriptionId: null }, this._updateSubscriptions(), e }
                                async removeRootChangeListener(t) { if (!this._rootSubscriptions[t]) throw new Error(`Unknown root change id: ${t}`); { const e = this._rootSubscriptions[t];
                                        delete this._rootSubscriptions[t], await this._unsubscribe(e, "rootUnsubscribe"), this._updateSubscriptions() } } }
                            async function Mr(t, e, n, r) { const o = r && { skipPreflight: r.skipPreflight, preflightCommitment: r.preflightCommitment || r.commitment },
                                    c = await t.sendTransaction(e, n, o),
                                    l = (await t.confirmTransaction(c, r && r.commitment)).value; if (l.err) throw new Error(`Transaction ${c} failed (${JSON.stringify(l)})`); return c }

                            function Ir(t, e) { const n = t.layout.span >= 0 ? t.layout.span : function(t, e) { let n = 0; return t.layout.fields.forEach((t => { t.span >= 0 ? n += t.span : "function" == typeof t.alloc && (n += t.alloc(e[t.property])) })), n }(t, e),
                                    data = W.Buffer.alloc(n),
                                    r = Object.assign({ instruction: t.index }, e); return t.layout.encode(r, data), data }

                            function Pr(t, e) { let data; try { data = t.layout.decode(e) } catch (t) { throw new Error("invalid instruction; " + t) } if (data.instruction !== t.index) throw new Error(`invalid instruction; instruction index mismatch ${data.instruction} != ${t.index}`); return data }
                            class Tr { static decodeInstructionType(t) { this.checkProgramId(t.programId); const e = ge("instruction").decode(t.data); let n; for (const t of Object.keys(Cr)) Cr[t].index == e && (n = t); if (!n) throw new Error("Instruction type incorrect; not a SystemInstruction"); return n }
                                static decodeCreateAccount(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2); const { lamports: e, space: n, programId: r } = Pr(Cr.Create, t.data); return { fromPubkey: t.keys[0].pubkey, newAccountPubkey: t.keys[1].pubkey, lamports: e, space: n, programId: new Z(r) } }
                                static decodeTransfer(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2); const { lamports: e } = Pr(Cr.Transfer, t.data); return { fromPubkey: t.keys[0].pubkey, toPubkey: t.keys[1].pubkey, lamports: e } }
                                static decodeTransferWithSeed(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3); const { lamports: e, seed: n, programId: r } = Pr(Cr.TransferWithSeed, t.data); return { fromPubkey: t.keys[0].pubkey, basePubkey: t.keys[1].pubkey, toPubkey: t.keys[2].pubkey, lamports: e, seed: n, programId: new Z(r) } }
                                static decodeAllocate(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1); const { space: e } = Pr(Cr.Allocate, t.data); return { accountPubkey: t.keys[0].pubkey, space: e } }
                                static decodeAllocateWithSeed(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1); const { base: base, seed: e, space: n, programId: r } = Pr(Cr.AllocateWithSeed, t.data); return { accountPubkey: t.keys[0].pubkey, basePubkey: new Z(base), seed: e, space: n, programId: new Z(r) } }
                                static decodeAssign(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1); const { programId: e } = Pr(Cr.Assign, t.data); return { accountPubkey: t.keys[0].pubkey, programId: new Z(e) } }
                                static decodeAssignWithSeed(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1); const { base: base, seed: e, programId: n } = Pr(Cr.AssignWithSeed, t.data); return { accountPubkey: t.keys[0].pubkey, basePubkey: new Z(base), seed: e, programId: new Z(n) } }
                                static decodeCreateWithSeed(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2); const { base: base, seed: e, lamports: n, space: r, programId: o } = Pr(Cr.CreateWithSeed, t.data); return { fromPubkey: t.keys[0].pubkey, newAccountPubkey: t.keys[1].pubkey, basePubkey: new Z(base), seed: e, lamports: n, space: r, programId: new Z(o) } }
                                static decodeNonceInitialize(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3); const { authorized: e } = Pr(Cr.InitializeNonceAccount, t.data); return { noncePubkey: t.keys[0].pubkey, authorizedPubkey: new Z(e) } }
                                static decodeNonceAdvance(t) { return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3), Pr(Cr.AdvanceNonceAccount, t.data), { noncePubkey: t.keys[0].pubkey, authorizedPubkey: t.keys[2].pubkey } }
                                static decodeNonceWithdraw(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5); const { lamports: e } = Pr(Cr.WithdrawNonceAccount, t.data); return { noncePubkey: t.keys[0].pubkey, toPubkey: t.keys[1].pubkey, authorizedPubkey: t.keys[4].pubkey, lamports: e } }
                                static decodeNonceAuthorize(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2); const { authorized: e } = Pr(Cr.AuthorizeNonceAccount, t.data); return { noncePubkey: t.keys[0].pubkey, authorizedPubkey: t.keys[1].pubkey, newAuthorizedPubkey: new Z(e) } }
                                static checkProgramId(t) { if (!t.equals(jr.programId)) throw new Error("invalid instruction; programId is not SystemProgram") }
                                static checkKeyLength(t, e) { if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`) } } const Cr = Object.freeze({ Create: { index: 0, layout: we([ge("instruction"), ve("lamports"), ve("space"), Se("programId")]) }, Assign: { index: 1, layout: we([ge("instruction"), Se("programId")]) }, Transfer: { index: 2, layout: we([ge("instruction"), ve("lamports")]) }, CreateWithSeed: { index: 3, layout: we([ge("instruction"), Se("base"), _e("seed"), ve("lamports"), ve("space"), Se("programId")]) }, AdvanceNonceAccount: { index: 4, layout: we([ge("instruction")]) }, WithdrawNonceAccount: { index: 5, layout: we([ge("instruction"), ve("lamports")]) }, InitializeNonceAccount: { index: 6, layout: we([ge("instruction"), Se("authorized")]) }, AuthorizeNonceAccount: { index: 7, layout: we([ge("instruction"), Se("authorized")]) }, Allocate: { index: 8, layout: we([ge("instruction"), ve("space")]) }, AllocateWithSeed: { index: 9, layout: we([ge("instruction"), Se("base"), _e("seed"), ve("space"), Se("programId")]) }, AssignWithSeed: { index: 10, layout: we([ge("instruction"), Se("base"), _e("seed"), Se("programId")]) }, TransferWithSeed: { index: 11, layout: we([ge("instruction"), ve("lamports"), _e("seed"), Se("programId")]) } });
                            class jr { static get programId() { return new Z("11111111111111111111111111111111") }
                                static createAccount(t) { const data = Ir(Cr.Create, { lamports: t.lamports, space: t.space, programId: t.programId.toBuffer() }); return new Pe({ keys: [{ pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 }, { pubkey: t.newAccountPubkey, isSigner: !0, isWritable: !0 }], programId: this.programId, data: data }) }
                                static transfer(t) { let data, e; if (t.basePubkey) { data = Ir(Cr.TransferWithSeed, { lamports: t.lamports, seed: t.seed, programId: t.programId.toBuffer() }), e = [{ pubkey: t.fromPubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }, { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 }] } else { data = Ir(Cr.Transfer, { lamports: t.lamports }), e = [{ pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 }, { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 }] } return new Pe({ keys: e, programId: this.programId, data: data }) }
                                static assign(t) { let data, e; if (t.basePubkey) { data = Ir(Cr.AssignWithSeed, { base: t.basePubkey.toBuffer(), seed: t.seed, programId: t.programId.toBuffer() }), e = [{ pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }] } else { data = Ir(Cr.Assign, { programId: t.programId.toBuffer() }), e = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }] } return new Pe({ keys: e, programId: this.programId, data: data }) }
                                static createAccountWithSeed(t) { const data = Ir(Cr.CreateWithSeed, { base: t.basePubkey.toBuffer(), seed: t.seed, lamports: t.lamports, space: t.space, programId: t.programId.toBuffer() }); let e = [{ pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 }, { pubkey: t.newAccountPubkey, isSigner: !1, isWritable: !0 }]; return t.basePubkey != t.fromPubkey && e.push({ pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }), new Pe({ keys: e, programId: this.programId, data: data }) }
                                static createNonceAccount(t) { const e = new Te;
                                    t.basePubkey && t.seed ? e.add(jr.createAccountWithSeed({ fromPubkey: t.fromPubkey, newAccountPubkey: t.noncePubkey, basePubkey: t.basePubkey, seed: t.seed, lamports: t.lamports, space: ln, programId: this.programId })) : e.add(jr.createAccount({ fromPubkey: t.fromPubkey, newAccountPubkey: t.noncePubkey, lamports: t.lamports, space: ln, programId: this.programId })); const n = { noncePubkey: t.noncePubkey, authorizedPubkey: t.authorizedPubkey }; return e.add(this.nonceInitialize(n)), e }
                                static nonceInitialize(t) { const data = Ir(Cr.InitializeNonceAccount, { authorized: t.authorizedPubkey.toBuffer() }),
                                        e = { keys: [{ pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 }, { pubkey: je, isSigner: !1, isWritable: !1 }, { pubkey: Re, isSigner: !1, isWritable: !1 }], programId: this.programId, data: data }; return new Pe(e) }
                                static nonceAdvance(t) { const data = Ir(Cr.AdvanceNonceAccount),
                                        e = { keys: [{ pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 }, { pubkey: je, isSigner: !1, isWritable: !1 }, { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }; return new Pe(e) }
                                static nonceWithdraw(t) { const data = Ir(Cr.WithdrawNonceAccount, { lamports: t.lamports }); return new Pe({ keys: [{ pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 }, { pubkey: je, isSigner: !1, isWritable: !1 }, { pubkey: Re, isSigner: !1, isWritable: !1 }, { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) }
                                static nonceAuthorize(t) { const data = Ir(Cr.AuthorizeNonceAccount, { authorized: t.newAuthorizedPubkey.toBuffer() }); return new Pe({ keys: [{ pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) }
                                static allocate(t) { let data, e; if (t.basePubkey) { data = Ir(Cr.AllocateWithSeed, { base: t.basePubkey.toBuffer(), seed: t.seed, space: t.space, programId: t.programId.toBuffer() }), e = [{ pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }] } else { data = Ir(Cr.Allocate, { space: t.space }), e = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }] } return new Pe({ keys: e, programId: this.programId, data: data }) } }
                            class Rr { static get chunkSize() { return Ie - 300 }
                                static getMinNumSignatures(t) { return 2 * (Math.ceil(t / Rr.chunkSize) + 1 + 1) }
                                static async load(t, e, n, r, data) {
                                    { const o = await t.getMinimumBalanceForRentExemption(data.length),
                                            c = await t.getAccountInfo(n.publicKey, "confirmed"); let l = null; if (null !== c) { if (c.executable) return console.error("Program load failed, account is already executable"), !1;
                                            c.data.length !== data.length && (l = l || new Te, l.add(jr.allocate({ accountPubkey: n.publicKey, space: data.length }))), c.owner.equals(r) || (l = l || new Te, l.add(jr.assign({ accountPubkey: n.publicKey, programId: r }))), c.lamports < o && (l = l || new Te, l.add(jr.transfer({ fromPubkey: e.publicKey, toPubkey: n.publicKey, lamports: o - c.lamports }))) } else l = (new Te).add(jr.createAccount({ fromPubkey: e.publicKey, newAccountPubkey: n.publicKey, lamports: o > 0 ? o : 1, space: data.length, programId: r }));
                                        null !== l && await Mr(t, l, [e, n], { commitment: "confirmed" }) } const o = we([ge("instruction"), ge("offset"), ge("bytesLength"), ge("bytesLengthPadding"), ke(be("byte"), pe(ge(), -8), "bytes")]),
                                        c = Rr.chunkSize; let l = 0,
                                        f = data,
                                        d = []; for (; f.length > 0;) { const h = f.slice(0, c),
                                            data = W.Buffer.alloc(c + 16);
                                        o.encode({ instruction: 0, offset: l, bytes: h }, data); const m = (new Te).add({ keys: [{ pubkey: n.publicKey, isSigner: !0, isWritable: !0 }], programId: r, data: data }); if (d.push(Mr(t, m, [e, n], { commitment: "confirmed" })), t._rpcEndpoint.includes("solana.com")) { const t = 4;
                                            await dn(1e3 / t) }
                                        l += c, f = f.slice(c) }
                                    await Promise.all(d); { const o = we([ge("instruction")]),
                                            data = W.Buffer.alloc(o.span);
                                        o.encode({ instruction: 1 }, data); const c = (new Te).add({ keys: [{ pubkey: n.publicKey, isSigner: !0, isWritable: !0 }, { pubkey: Re, isSigner: !1, isWritable: !1 }], programId: r, data: data });
                                        await Mr(t, c, [e, n], { commitment: "confirmed" }) } return !0 } } const zr = new Z("BPFLoader2111111111111111111111111111111111");
                            class Br { static getMinNumSignatures(t) { return Rr.getMinNumSignatures(t) }
                                static load(t, e, n, r, o) { return Rr.load(t, e, n, o, r) } } const Nr = new Z("StakeConfig11111111111111111111111111111111");
                            class Lr { constructor(t, e) { o()(this, "staker", void 0), o()(this, "withdrawer", void 0), this.staker = t, this.withdrawer = e } }
                            class Ur { constructor(t, e, n) { o()(this, "unixTimestamp", void 0), o()(this, "epoch", void 0), o()(this, "custodian", void 0), this.unixTimestamp = t, this.epoch = e, this.custodian = n } }
                            class Dr { static decodeInstructionType(t) { this.checkProgramId(t.programId); const e = ge("instruction").decode(t.data); let n; for (const t of Object.keys(Wr)) Wr[t].index == e && (n = t); if (!n) throw new Error("Instruction type incorrect; not a StakeInstruction"); return n }
                                static decodeInitialize(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2); const { authorized: e, lockup: n } = Pr(Wr.Initialize, t.data); return { stakePubkey: t.keys[0].pubkey, authorized: new Lr(new Z(e.staker), new Z(e.withdrawer)), lockup: new Ur(n.unixTimestamp, n.epoch, new Z(n.custodian)) } }
                                static decodeDelegate(t) { return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 6), Pr(Wr.Delegate, t.data), { stakePubkey: t.keys[0].pubkey, votePubkey: t.keys[1].pubkey, authorizedPubkey: t.keys[5].pubkey } }
                                static decodeAuthorize(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3); const { newAuthorized: e, stakeAuthorizationType: n } = Pr(Wr.Authorize, t.data), r = { stakePubkey: t.keys[0].pubkey, authorizedPubkey: t.keys[2].pubkey, newAuthorizedPubkey: new Z(e), stakeAuthorizationType: { index: n } }; return t.keys.length > 3 && (r.custodianPubkey = t.keys[3].pubkey), r }
                                static decodeAuthorizeWithSeed(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2); const { newAuthorized: e, stakeAuthorizationType: n, authoritySeed: r, authorityOwner: o } = Pr(Wr.AuthorizeWithSeed, t.data), c = { stakePubkey: t.keys[0].pubkey, authorityBase: t.keys[1].pubkey, authoritySeed: r, authorityOwner: new Z(o), newAuthorizedPubkey: new Z(e), stakeAuthorizationType: { index: n } }; return t.keys.length > 3 && (c.custodianPubkey = t.keys[3].pubkey), c }
                                static decodeSplit(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3); const { lamports: e } = Pr(Wr.Split, t.data); return { stakePubkey: t.keys[0].pubkey, splitStakePubkey: t.keys[1].pubkey, authorizedPubkey: t.keys[2].pubkey, lamports: e } }
                                static decodeWithdraw(t) { this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5); const { lamports: e } = Pr(Wr.Withdraw, t.data), n = { stakePubkey: t.keys[0].pubkey, toPubkey: t.keys[1].pubkey, authorizedPubkey: t.keys[4].pubkey, lamports: e }; return t.keys.length > 5 && (n.custodianPubkey = t.keys[5].pubkey), n }
                                static decodeDeactivate(t) { return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3), Pr(Wr.Deactivate, t.data), { stakePubkey: t.keys[0].pubkey, authorizedPubkey: t.keys[2].pubkey } }
                                static checkProgramId(t) { if (!t.equals($r.programId)) throw new Error("invalid instruction; programId is not StakeProgram") }
                                static checkKeyLength(t, e) { if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`) } } const Wr = Object.freeze({ Initialize: { index: 0, layout: we([ge("instruction"), ((t = "authorized") => we([Se("staker"), Se("withdrawer")], t))(), ((t = "lockup") => we([ve("unixTimestamp"), ve("epoch"), Se("custodian")], t))()]) }, Authorize: { index: 1, layout: we([ge("instruction"), Se("newAuthorized"), ge("stakeAuthorizationType")]) }, Delegate: { index: 2, layout: we([ge("instruction")]) }, Split: { index: 3, layout: we([ge("instruction"), ve("lamports")]) }, Withdraw: { index: 4, layout: we([ge("instruction"), ve("lamports")]) }, Deactivate: { index: 5, layout: we([ge("instruction")]) }, AuthorizeWithSeed: { index: 8, layout: we([ge("instruction"), Se("newAuthorized"), ge("stakeAuthorizationType"), _e("authoritySeed"), Se("authorityOwner")]) } }),
                                Fr = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
                            class $r { static get programId() { return new Z("Stake11111111111111111111111111111111111111") }
                                static get space() { return 200 }
                                static initialize(t) { const { stakePubkey: e, authorized: n, lockup: r } = t, data = Ir(Wr.Initialize, { authorized: { staker: n.staker.toBuffer(), withdrawer: n.withdrawer.toBuffer() }, lockup: { unixTimestamp: r.unixTimestamp, epoch: r.epoch, custodian: r.custodian.toBuffer() } }), o = { keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: Re, isSigner: !1, isWritable: !1 }], programId: this.programId, data: data }; return new Pe(o) }
                                static createAccountWithSeed(t) { const e = new Te;
                                    e.add(jr.createAccountWithSeed({ fromPubkey: t.fromPubkey, newAccountPubkey: t.stakePubkey, basePubkey: t.basePubkey, seed: t.seed, lamports: t.lamports, space: this.space, programId: this.programId })); const { stakePubkey: n, authorized: r, lockup: o } = t; return e.add(this.initialize({ stakePubkey: n, authorized: r, lockup: o })) }
                                static createAccount(t) { const e = new Te;
                                    e.add(jr.createAccount({ fromPubkey: t.fromPubkey, newAccountPubkey: t.stakePubkey, lamports: t.lamports, space: this.space, programId: this.programId })); const { stakePubkey: n, authorized: r, lockup: o } = t; return e.add(this.initialize({ stakePubkey: n, authorized: r, lockup: o })) }
                                static delegate(t) { const { stakePubkey: e, authorizedPubkey: n, votePubkey: r } = t, data = Ir(Wr.Delegate); return (new Te).add({ keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !1 }, { pubkey: Ce, isSigner: !1, isWritable: !1 }, { pubkey: Be, isSigner: !1, isWritable: !1 }, { pubkey: Nr, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) }
                                static authorize(t) { const { stakePubkey: e, authorizedPubkey: n, newAuthorizedPubkey: r, stakeAuthorizationType: o, custodianPubkey: c } = t, data = Ir(Wr.Authorize, { newAuthorized: r.toBuffer(), stakeAuthorizationType: o.index }), l = [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: Ce, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !0, isWritable: !1 }]; return c && l.push({ pubkey: c, isSigner: !1, isWritable: !1 }), (new Te).add({ keys: l, programId: this.programId, data: data }) }
                                static authorizeWithSeed(t) { const { stakePubkey: e, authorityBase: n, authoritySeed: r, authorityOwner: o, newAuthorizedPubkey: c, stakeAuthorizationType: l, custodianPubkey: f } = t, data = Ir(Wr.AuthorizeWithSeed, { newAuthorized: c.toBuffer(), stakeAuthorizationType: l.index, authoritySeed: r, authorityOwner: o.toBuffer() }), d = [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !0, isWritable: !1 }, { pubkey: Ce, isSigner: !1, isWritable: !1 }]; return f && d.push({ pubkey: f, isSigner: !1, isWritable: !1 }), (new Te).add({ keys: d, programId: this.programId, data: data }) }
                                static split(t) { const { stakePubkey: e, authorizedPubkey: n, splitStakePubkey: r, lamports: o } = t, c = new Te;
                                    c.add(jr.createAccount({ fromPubkey: n, newAccountPubkey: r, lamports: 0, space: this.space, programId: this.programId })); const data = Ir(Wr.Split, { lamports: o }); return c.add({ keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) }
                                static withdraw(t) { const { stakePubkey: e, authorizedPubkey: n, toPubkey: r, lamports: o, custodianPubkey: c } = t, data = Ir(Wr.Withdraw, { lamports: o }), l = [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: Ce, isSigner: !1, isWritable: !1 }, { pubkey: Be, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !0, isWritable: !1 }]; return c && l.push({ pubkey: c, isSigner: !1, isWritable: !1 }), (new Te).add({ keys: l, programId: this.programId, data: data }) }
                                static deactivate(t) { const { stakePubkey: e, authorizedPubkey: n } = t, data = Ir(Wr.Deactivate); return (new Te).add({ keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: Ce, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) } } const { publicKeyCreate: qr, ecdsaSign: Kr } = _.a, Vr = we([be("numSignatures"), me("signatureOffset"), be("signatureInstructionIndex"), me("ethAddressOffset"), be("ethAddressInstructionIndex"), me("messageDataOffset"), me("messageDataSize"), be("messageInstructionIndex"), xe(20, "ethPublicKey"), xe(64, "signature"), be("recoveryId")]);
                            class Hr { static get programId() { return new Z("KeccakSecp256k11111111111111111111111111111") }
                                static createInstructionWithPublicKey(t) { const { publicKey: e, message: n, signature: r, recoveryId: o } = t; let c;
                                    Tt(65 === e.length, "Public key must be 65 bytes"); try { c = function(t) { return W.Buffer.from(E.keccak_256.update(F(t.slice(1))).digest()).slice(-20) }(e) } catch (t) { throw new Error(`Error constructing ethereum public key: ${t}`) } const l = 12 + c.length,
                                        f = l + r.length + 1,
                                        d = W.Buffer.alloc(Vr.span + n.length); return Vr.encode({ numSignatures: 1, signatureOffset: l, signatureInstructionIndex: 0, ethAddressOffset: 12, ethAddressInstructionIndex: 0, messageDataOffset: f, messageDataSize: n.length, messageInstructionIndex: 0, signature: F(r), ethPublicKey: c, recoveryId: o }, d), d.fill(F(n), Vr.span), new Pe({ keys: [], programId: Hr.programId, data: d }) }
                                static createInstructionWithPrivateKey(t) { const { privateKey: e, message: n } = t;
                                    Tt(32 === e.length, "Private key must be 32 bytes"); try { const t = qr(e, !1),
                                            r = W.Buffer.from(E.keccak_256.update(F(n)).digest()),
                                            { signature: o, recid: c } = Kr(r, e); return this.createInstructionWithPublicKey({ publicKey: t, message: n, signature: o, recoveryId: c }) } catch (t) { throw new Error(`Error creating instruction; ${t}`) } } } const Zr = new Z("Va1idator1nfo111111111111111111111111111111"),
                                Gr = Object(k.a)({ name: "string", website: "string?", details: "string?", keybaseUsername: "string?" });
                            class Yr { constructor(t, e) { o()(this, "key", void 0), o()(this, "info", void 0), this.key = t, this.info = e }
                                static fromConfigData(t) { let e = [...t]; if (2 !== Ee(e)) return null; const n = []; for (let i = 0; i < 2; i++) { const t = new Z(e.slice(0, 32));
                                        e = e.slice(32); const r = 1 === e.slice(0, 1)[0];
                                        e = e.slice(1), n.push({ publicKey: t, isSigner: r }) } if (n[0].publicKey.equals(Zr) && n[1].isSigner) { const t = _e().decode(W.Buffer.from(e)),
                                            r = Gr(JSON.parse(t)); return new Yr(n[1].publicKey, r) } return null } } const Xr = new Z("Vote111111111111111111111111111111111111111"),
                                Qr = we([Se("nodePubkey"), Se("authorizedVoterPubkey"), Se("authorizedWithdrawerPubkey"), be("commission"), ye(), ke(we([ye("slot"), ge("confirmationCount")]), pe(ge(), -8), "votes"), be("rootSlotValid"), ye("rootSlot"), ye("epoch"), ye("credits"), ye("lastEpochCredits"), ye(), ke(we([ye("epoch"), ye("credits"), ye("prevCredits")]), pe(ge(), -8), "epochCredits")]);
                            class Jr { constructor() { o()(this, "nodePubkey", void 0), o()(this, "authorizedVoterPubkey", void 0), o()(this, "authorizedWithdrawerPubkey", void 0), o()(this, "commission", void 0), o()(this, "votes", void 0), o()(this, "rootSlot", void 0), o()(this, "epoch", void 0), o()(this, "credits", void 0), o()(this, "lastEpochCredits", void 0), o()(this, "epochCredits", void 0) }
                                static fromAccountData(t) { const e = Qr.decode(F(t), 0); return e.nodePubkey = new Z(e.nodePubkey), e.authorizedVoterPubkey = new Z(e.authorizedVoterPubkey), e.authorizedWithdrawerPubkey = new Z(e.authorizedWithdrawerPubkey), e.rootSlotValid || (e.rootSlot = null), e } }
                            async function to(t, e, n) { const r = n && { skipPreflight: n.skipPreflight, preflightCommitment: n.preflightCommitment || n.commitment },
                                    o = await t.sendRawTransaction(e, r),
                                    c = (await t.confirmTransaction(o, n && n.commitment)).value; if (c.err) throw new Error(`Raw transaction ${o} failed (${JSON.stringify(c)})`); return o } const eo = { http: { devnet: "http://devnet.solana.com", testnet: "http://testnet.solana.com", "mainnet-beta": "http://api.mainnet-beta.solana.com" }, https: { devnet: "https://devnet.solana.com", testnet: "https://testnet.solana.com", "mainnet-beta": "https://api.mainnet-beta.solana.com" } };

                            function no(t, e) { const n = !1 === e ? "http" : "https"; if (!t) return eo[n].devnet; const r = eo[n][t]; if (!r) throw new Error(`Unknown ${n} cluster: ${t}`); return r } const ro = 1e9 }.call(this, n(42)) }, , function(t, e, n) { "use strict";
                    (function(t) { const r = n(15);
                        class o { constructor(span, t) { if (!Number.isInteger(span)) throw new TypeError("span must be an integer");
                                this.span = span, this.property = t }
                            makeDestinationObject() { return {} }
                            decode(b, t) { throw new Error("Layout is abstract") }
                            encode(t, b, e) { throw new Error("Layout is abstract") }
                            getSpan(b, t) { if (0 > this.span) throw new RangeError("indeterminate span"); return this.span }
                            replicate(t) { const e = Object.create(this.constructor.prototype); return Object.assign(e, this), e.property = t, e }
                            fromArray(t) {} }

                        function c(t, e) { return e.property ? t + "[" + e.property + "]" : t }
                        e.Layout = o, e.nameWithProperty = c, e.bindConstructorLayout = function(t, e) { if ("function" != typeof t) throw new TypeError("Class must be constructor"); if (t.hasOwnProperty("layout_")) throw new Error("Class is already bound to a layout"); if (!(e && e instanceof o)) throw new TypeError("layout must be a Layout"); if (e.hasOwnProperty("boundConstructor_")) throw new Error("layout is already bound to a constructor");
                            t.layout_ = e, e.boundConstructor_ = t, e.makeDestinationObject = () => new t, Object.defineProperty(t.prototype, "encode", { value: function(b, t) { return e.encode(this, b, t) }, writable: !0 }), Object.defineProperty(t, "decode", { value: function(b, t) { return e.decode(b, t) }, writable: !0 }) };
                        class l extends o { isCount() { throw new Error("ExternalLayout is abstract") } }
                        class f extends l { constructor(t, e) { if (void 0 === t && (t = 1), !Number.isInteger(t) || 0 >= t) throw new TypeError("elementSpan must be a (positive) integer");
                                super(-1, e), this.elementSpan = t }
                            isCount() { return !0 }
                            decode(b, t) { void 0 === t && (t = 0); const e = b.length - t; return Math.floor(e / this.elementSpan) }
                            encode(t, b, e) { return 0 } }
                        class d extends l { constructor(t, e, n) { if (!(t instanceof o)) throw new TypeError("layout must be a Layout"); if (void 0 === e) e = 0;
                                else if (!Number.isInteger(e)) throw new TypeError("offset must be integer or undefined");
                                super(t.span, n || t.property), this.layout = t, this.offset = e }
                            isCount() { return this.layout instanceof h || this.layout instanceof m }
                            decode(b, t) { return void 0 === t && (t = 0), this.layout.decode(b, t + this.offset) }
                            encode(t, b, e) { return void 0 === e && (e = 0), this.layout.encode(t, b, e + this.offset) } }
                        class h extends o { constructor(span, t) { if (super(span, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes") }
                            decode(b, t) { return void 0 === t && (t = 0), b.readUIntLE(t, this.span) }
                            encode(t, b, e) { return void 0 === e && (e = 0), b.writeUIntLE(t, e, this.span), this.span } }
                        class m extends o { constructor(span, t) { if (super(span, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes") }
                            decode(b, t) { return void 0 === t && (t = 0), b.readUIntBE(t, this.span) }
                            encode(t, b, e) { return void 0 === e && (e = 0), b.writeUIntBE(t, e, this.span), this.span } }
                        class y extends o { constructor(span, t) { if (super(span, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes") }
                            decode(b, t) { return void 0 === t && (t = 0), b.readIntLE(t, this.span) }
                            encode(t, b, e) { return void 0 === e && (e = 0), b.writeIntLE(t, e, this.span), this.span } }
                        class v extends o { constructor(span, t) { if (super(span, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes") }
                            decode(b, t) { return void 0 === t && (t = 0), b.readIntBE(t, this.span) }
                            encode(t, b, e) { return void 0 === e && (e = 0), b.writeIntBE(t, e, this.span), this.span } } const w = Math.pow(2, 32);

                        function k(t) { const e = Math.floor(t / w); return { hi32: e, lo32: t - e * w } }

                        function x(t, e) { return t * w + e }
                        class S extends o { constructor(t) { super(8, t) }
                            decode(b, t) { void 0 === t && (t = 0); const e = b.readUInt32LE(t); return x(b.readUInt32LE(t + 4), e) }
                            encode(t, b, e) { void 0 === e && (e = 0); const n = k(t); return b.writeUInt32LE(n.lo32, e), b.writeUInt32LE(n.hi32, e + 4), 8 } }
                        class _ extends o { constructor(t) { super(8, t) }
                            decode(b, t) { void 0 === t && (t = 0); return x(b.readUInt32BE(t), b.readUInt32BE(t + 4)) }
                            encode(t, b, e) { void 0 === e && (e = 0); const n = k(t); return b.writeUInt32BE(n.hi32, e), b.writeUInt32BE(n.lo32, e + 4), 8 } }
                        class E extends o { constructor(t) { super(8, t) }
                            decode(b, t) { void 0 === t && (t = 0); const e = b.readUInt32LE(t); return x(b.readInt32LE(t + 4), e) }
                            encode(t, b, e) { void 0 === e && (e = 0); const n = k(t); return b.writeUInt32LE(n.lo32, e), b.writeInt32LE(n.hi32, e + 4), 8 } }
                        class A extends o { constructor(t) { super(8, t) }
                            decode(b, t) { void 0 === t && (t = 0); return x(b.readInt32BE(t), b.readUInt32BE(t + 4)) }
                            encode(t, b, e) { void 0 === e && (e = 0); const n = k(t); return b.writeInt32BE(n.hi32, e), b.writeUInt32BE(n.lo32, e + 4), 8 } }
                        class O extends o { constructor(t) { super(4, t) }
                            decode(b, t) { return void 0 === t && (t = 0), b.readFloatLE(t) }
                            encode(t, b, e) { return void 0 === e && (e = 0), b.writeFloatLE(t, e), 4 } }
                        class M extends o { constructor(t) { super(4, t) }
                            decode(b, t) { return void 0 === t && (t = 0), b.readFloatBE(t) }
                            encode(t, b, e) { return void 0 === e && (e = 0), b.writeFloatBE(t, e), 4 } }
                        class I extends o { constructor(t) { super(8, t) }
                            decode(b, t) { return void 0 === t && (t = 0), b.readDoubleLE(t) }
                            encode(t, b, e) { return void 0 === e && (e = 0), b.writeDoubleLE(t, e), 8 } }
                        class P extends o { constructor(t) { super(8, t) }
                            decode(b, t) { return void 0 === t && (t = 0), b.readDoubleBE(t) }
                            encode(t, b, e) { return void 0 === e && (e = 0), b.writeDoubleBE(t, e), 8 } }
                        class T extends o { constructor(t, e, n) { if (!(t instanceof o)) throw new TypeError("elementLayout must be a Layout"); if (!(e instanceof l && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout"); let span = -1;!(e instanceof l) && 0 < t.span && (span = e * t.span), super(span, n), this.elementLayout = t, this.count = e }
                            getSpan(b, t) { if (0 <= this.span) return this.span;
                                void 0 === t && (t = 0); let span = 0,
                                    e = this.count; if (e instanceof l && (e = e.decode(b, t)), 0 < this.elementLayout.span) span = e * this.elementLayout.span;
                                else { let n = 0; for (; n < e;) span += this.elementLayout.getSpan(b, t + span), ++n } return span }
                            decode(b, t) { void 0 === t && (t = 0); const e = []; let i = 0,
                                    n = this.count; for (n instanceof l && (n = n.decode(b, t)); i < n;) e.push(this.elementLayout.decode(b, t)), t += this.elementLayout.getSpan(b, t), i += 1; return e }
                            encode(t, b, e) { void 0 === e && (e = 0); const n = this.elementLayout,
                                    span = t.reduce(((span, t) => span + n.encode(t, b, e + span)), 0); return this.count instanceof l && this.count.encode(t.length, b, e), span } }
                        class C extends o { constructor(t, e, n) { if (!Array.isArray(t) || !t.reduce(((t, e) => t && e instanceof o), !0)) throw new TypeError("fields must be array of Layout instances"); "boolean" == typeof e && void 0 === n && (n = e, e = void 0); for (const e of t)
                                    if (0 > e.span && void 0 === e.property) throw new Error("fields cannot contain unnamed variable-length layout");
                                let span = -1; try { span = t.reduce(((span, t) => span + t.getSpan()), 0) } catch (t) {}
                                super(span, e), this.fields = t, this.decodePrefixes = !!n }
                            getSpan(b, t) { if (0 <= this.span) return this.span;
                                void 0 === t && (t = 0); let span = 0; try { span = this.fields.reduce(((span, e) => { const n = e.getSpan(b, t); return t += n, span + n }), 0) } catch (t) { throw new RangeError("indeterminate span") } return span }
                            decode(b, t) { void 0 === t && (t = 0); const e = this.makeDestinationObject(); for (const n of this.fields)
                                    if (void 0 !== n.property && (e[n.property] = n.decode(b, t)), t += n.getSpan(b, t), this.decodePrefixes && b.length === t) break;
                                return e }
                            encode(t, b, e) { void 0 === e && (e = 0); const n = e; let o = 0,
                                    c = 0; for (const n of this.fields) { let span = n.span; if (c = 0 < span ? span : 0, void 0 === n.property) r(0 < span);
                                    else { const r = t[n.property];
                                        void 0 !== r && (c = n.encode(r, b, e), 0 > span && (span = n.getSpan(b, e))) }
                                    o = e, e += span } return o + c - n }
                            fromArray(t) { const e = this.makeDestinationObject(); for (const n of this.fields) void 0 !== n.property && 0 < t.length && (e[n.property] = t.shift()); return e }
                            layoutFor(t) { if ("string" != typeof t) throw new TypeError("property must be string"); for (const e of this.fields)
                                    if (e.property === t) return e }
                            offsetOf(t) { if ("string" != typeof t) throw new TypeError("property must be string"); let e = 0; for (const n of this.fields) { if (n.property === t) return e;
                                    0 > n.span ? e = -1 : 0 <= e && (e += n.span) } } }
                        class j { constructor(t) { this.property = t }
                            decode() { throw new Error("UnionDiscriminator is abstract") }
                            encode() { throw new Error("UnionDiscriminator is abstract") } }
                        class R extends j { constructor(t, e) { if (!(t instanceof l && t.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
                                super(e || t.property || "variant"), this.layout = t }
                            decode(b, t) { return this.layout.decode(b, t) }
                            encode(t, b, e) { return this.layout.encode(t, b, e) } }
                        class z extends o { constructor(t, e, n) { const r = t instanceof h || t instanceof m; if (r) t = new R(new d(t));
                                else if (t instanceof l && t.isCount()) t = new R(t);
                                else if (!(t instanceof j)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout"); if (void 0 === e && (e = null), !(null === e || e instanceof o)) throw new TypeError("defaultLayout must be null or a Layout"); if (null !== e) { if (0 > e.span) throw new Error("defaultLayout must have constant span");
                                    void 0 === e.property && (e = e.replicate("content")) } let span = -1;
                                e && (span = e.span, 0 <= span && r && (span += t.layout.span)), super(span, n), this.discriminator = t, this.usesPrefixDiscriminator = r, this.defaultLayout = e, this.registry = {}; let c = this.defaultGetSourceVariant.bind(this);
                                this.getSourceVariant = function(t) { return c(t) }, this.configGetSourceVariant = function(t) { c = t.bind(this) } }
                            getSpan(b, t) { if (0 <= this.span) return this.span;
                                void 0 === t && (t = 0); const e = this.getVariant(b, t); if (!e) throw new Error("unable to determine span for unrecognized variant"); return e.getSpan(b, t) }
                            defaultGetSourceVariant(t) { if (t.hasOwnProperty(this.discriminator.property)) { if (this.defaultLayout && t.hasOwnProperty(this.defaultLayout.property)) return; const e = this.registry[t[this.discriminator.property]]; if (e && (!e.layout || t.hasOwnProperty(e.property))) return e } else
                                    for (const e in this.registry) { const n = this.registry[e]; if (t.hasOwnProperty(n.property)) return n }
                                throw new Error("unable to infer src variant") }
                            decode(b, t) { let e;
                                void 0 === t && (t = 0); const n = this.discriminator,
                                    r = n.decode(b, t); let o = this.registry[r]; if (void 0 === o) { let c = 0;
                                    o = this.defaultLayout, this.usesPrefixDiscriminator && (c = n.layout.span), e = this.makeDestinationObject(), e[n.property] = r, e[o.property] = this.defaultLayout.decode(b, t + c) } else e = o.decode(b, t); return e }
                            encode(t, b, e) { void 0 === e && (e = 0); const n = this.getSourceVariant(t); if (void 0 === n) { const n = this.discriminator,
                                        r = this.defaultLayout; let o = 0; return this.usesPrefixDiscriminator && (o = n.layout.span), n.encode(t[n.property], b, e), o + r.encode(t[r.property], b, e + o) } return n.encode(t, b, e) }
                            addVariant(t, e, n) { const r = new B(this, t, e, n); return this.registry[t] = r, r }
                            getVariant(e, n) { let r = e; return e instanceof t && (void 0 === n && (n = 0), r = this.discriminator.decode(e, n)), this.registry[r] } }
                        class B extends o { constructor(t, e, n, r) { if (!(t instanceof z)) throw new TypeError("union must be a Union"); if (!Number.isInteger(e) || 0 > e) throw new TypeError("variant must be a (non-negative) integer"); if ("string" == typeof n && void 0 === r && (r = n, n = null), n) { if (!(n instanceof o)) throw new TypeError("layout must be a Layout"); if (null !== t.defaultLayout && 0 <= n.span && n.span > t.defaultLayout.span) throw new Error("variant span exceeds span of containing union"); if ("string" != typeof r) throw new TypeError("variant must have a String property") } let span = t.span;
                                0 > t.span && (span = n ? n.span : 0, 0 <= span && t.usesPrefixDiscriminator && (span += t.discriminator.layout.span)), super(span, r), this.union = t, this.variant = e, this.layout = n || null }
                            getSpan(b, t) { if (0 <= this.span) return this.span;
                                void 0 === t && (t = 0); let e = 0; return this.union.usesPrefixDiscriminator && (e = this.union.discriminator.layout.span), e + this.layout.getSpan(b, t + e) }
                            decode(b, t) { const e = this.makeDestinationObject(); if (void 0 === t && (t = 0), this !== this.union.getVariant(b, t)) throw new Error("variant mismatch"); let n = 0; return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout ? e[this.property] = this.layout.decode(b, t + n) : this.property ? e[this.property] = !0 : this.union.usesPrefixDiscriminator && (e[this.union.discriminator.property] = this.variant), e }
                            encode(t, b, e) { void 0 === e && (e = 0); let n = 0; if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout && !t.hasOwnProperty(this.property)) throw new TypeError("variant lacks property " + this.property);
                                this.union.discriminator.encode(this.variant, b, e); let span = n; if (this.layout && (this.layout.encode(t[this.property], b, e + n), span += this.layout.getSpan(b, e + n), 0 <= this.union.span && span > this.union.span)) throw new Error("encoded variant overruns containing union"); return span }
                            fromArray(t) { if (this.layout) return this.layout.fromArray(t) } }

                        function N(t) { return 0 > t && (t += 4294967296), t }
                        class L extends o { constructor(t, e, n) { if (!(t instanceof h || t instanceof m)) throw new TypeError("word must be a UInt or UIntBE layout"); if ("string" == typeof e && void 0 === n && (n = e, e = void 0), 4 < t.span) throw new RangeError("word cannot exceed 32 bits");
                                super(t.span, n), this.word = t, this.msb = !!e, this.fields = []; let r = 0;
                                this._packedSetValue = function(t) { return r = N(t), this }, this._packedGetValue = function() { return r } }
                            decode(b, t) { const e = this.makeDestinationObject();
                                void 0 === t && (t = 0); const n = this.word.decode(b, t);
                                this._packedSetValue(n); for (const t of this.fields) void 0 !== t.property && (e[t.property] = t.decode(n)); return e }
                            encode(t, b, e) { void 0 === e && (e = 0); const n = this.word.decode(b, e);
                                this._packedSetValue(n); for (const e of this.fields)
                                    if (void 0 !== e.property) { const n = t[e.property];
                                        void 0 !== n && e.encode(n) }
                                return this.word.encode(this._packedGetValue(), b, e) }
                            addField(t, e) { const n = new U(this, t, e); return this.fields.push(n), n }
                            addBoolean(t) { const e = new D(this, t); return this.fields.push(e), e }
                            fieldFor(t) { if ("string" != typeof t) throw new TypeError("property must be string"); for (const e of this.fields)
                                    if (e.property === t) return e } }
                        class U { constructor(t, e, n) { if (!(t instanceof L)) throw new TypeError("container must be a BitStructure"); if (!Number.isInteger(e) || 0 >= e) throw new TypeError("bits must be positive integer"); const r = 8 * t.span,
                                    o = t.fields.reduce(((t, e) => t + e.bits), 0); if (e + o > r) throw new Error("bits too long for span remainder (" + (r - o) + " of " + r + " remain)");
                                this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, 32 === e && (this.valueMask = 4294967295), this.start = o, this.container.msb && (this.start = r - o - e), this.wordMask = N(this.valueMask << this.start), this.property = n }
                            decode() { return N(this.container._packedGetValue() & this.wordMask) >>> this.start }
                            encode(t) { if (!Number.isInteger(t) || t !== N(t & this.valueMask)) throw new TypeError(c("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask); const e = this.container._packedGetValue(),
                                    n = N(t << this.start);
                                this.container._packedSetValue(N(e & ~this.wordMask) | n) } }
                        class D extends U { constructor(t, e) { super(t, 1, e) }
                            decode(b, t) { return !!U.prototype.decode.call(this, b, t) }
                            encode(t) { return "boolean" == typeof t && (t = +t), U.prototype.encode.call(this, t) } }
                        class W extends o { constructor(t, e) { if (!(t instanceof l && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout"); let span = -1;
                                t instanceof l || (span = t), super(span, e), this.length = t }
                            getSpan(b, t) { let span = this.span; return 0 > span && (span = this.length.decode(b, t)), span }
                            decode(b, t) { void 0 === t && (t = 0); let span = this.span; return 0 > span && (span = this.length.decode(b, t)), b.slice(t, t + span) }
                            encode(e, b, n) { let span = this.length; if (this.length instanceof l && (span = e.length), !(e instanceof t && span === e.length)) throw new TypeError(c("Blob.encode", this) + " requires (length " + span + ") Buffer as src"); if (n + span > b.length) throw new RangeError("encoding overruns Buffer"); return b.write(e.toString("hex"), n, span, "hex"), this.length instanceof l && this.length.encode(span, b, n), span } }
                        class F extends o { constructor(t) { super(-1, t) }
                            getSpan(b, e) { if (!(b instanceof t)) throw new TypeError("b must be a Buffer");
                                void 0 === e && (e = 0); let n = e; for (; n < b.length && 0 !== b[n];) n += 1; return 1 + n - e }
                            decode(b, t, e) { void 0 === t && (t = 0); let span = this.getSpan(b, t); return b.slice(t, t + span - 1).toString("utf-8") }
                            encode(e, b, n) { void 0 === n && (n = 0), "string" != typeof e && (e = e.toString()); const r = new t(e, "utf8"),
                                    span = r.length; if (n + span > b.length) throw new RangeError("encoding overruns Buffer"); return r.copy(b, n), b[n + span] = 0, span + 1 } }
                        class $ extends o { constructor(t, e) { if ("string" == typeof t && void 0 === e && (e = t, t = void 0), void 0 === t) t = -1;
                                else if (!Number.isInteger(t)) throw new TypeError("maxSpan must be an integer");
                                super(-1, e), this.maxSpan = t }
                            getSpan(b, e) { if (!(b instanceof t)) throw new TypeError("b must be a Buffer"); return void 0 === e && (e = 0), b.length - e }
                            decode(b, t, e) { void 0 === t && (t = 0); let span = this.getSpan(b, t); if (0 <= this.maxSpan && this.maxSpan < span) throw new RangeError("text length exceeds maxSpan"); return b.slice(t, t + span).toString("utf-8") }
                            encode(e, b, n) { void 0 === n && (n = 0), "string" != typeof e && (e = e.toString()); const r = new t(e, "utf8"),
                                    span = r.length; if (0 <= this.maxSpan && this.maxSpan < span) throw new RangeError("text length exceeds maxSpan"); if (n + span > b.length) throw new RangeError("encoding overruns Buffer"); return r.copy(b, n), span } }
                        class K extends o { constructor(t, e) { super(0, e), this.value = t }
                            decode(b, t, e) { return this.value }
                            encode(t, b, e) { return 0 } }
                        e.ExternalLayout = l, e.GreedyCount = f, e.OffsetLayout = d, e.UInt = h, e.UIntBE = m, e.Int = y, e.IntBE = v, e.Float = O, e.FloatBE = M, e.Double = I, e.DoubleBE = P, e.Sequence = T, e.Structure = C, e.UnionDiscriminator = j, e.UnionLayoutDiscriminator = R, e.Union = z, e.VariantLayout = B, e.BitStructure = L, e.BitField = U, e.Boolean = D, e.Blob = W, e.CString = F, e.UTF8 = $, e.Constant = K, e.greedy = (t, e) => new f(t, e), e.offset = (t, e, n) => new d(t, e, n), e.u8 = t => new h(1, t), e.u16 = t => new h(2, t), e.u24 = t => new h(3, t), e.u32 = t => new h(4, t), e.u40 = t => new h(5, t), e.u48 = t => new h(6, t), e.nu64 = t => new S(t), e.u16be = t => new m(2, t), e.u24be = t => new m(3, t), e.u32be = t => new m(4, t), e.u40be = t => new m(5, t), e.u48be = t => new m(6, t), e.nu64be = t => new _(t), e.s8 = t => new y(1, t), e.s16 = t => new y(2, t), e.s24 = t => new y(3, t), e.s32 = t => new y(4, t), e.s40 = t => new y(5, t), e.s48 = t => new y(6, t), e.ns64 = t => new E(t), e.s16be = t => new v(2, t), e.s24be = t => new v(3, t), e.s32be = t => new v(4, t), e.s40be = t => new v(5, t), e.s48be = t => new v(6, t), e.ns64be = t => new A(t), e.f32 = t => new O(t), e.f32be = t => new M(t), e.f64 = t => new I(t), e.f64be = t => new P(t), e.struct = (t, e, n) => new C(t, e, n), e.bits = (t, e, n) => new L(t, e, n), e.seq = (t, e, n) => new T(t, e, n), e.union = (t, e, n) => new z(t, e, n), e.unionLayoutDiscriminator = (t, e) => new R(t, e), e.blob = (t, e) => new W(t, e), e.cstr = t => new F(t), e.utf8 = (t, e) => new $(t, e), e.const = (t, e) => new K(t, e) }).call(this, n(12).Buffer) }, , function(t, e, n) { "use strict"; var r, o = this && this.__extends || (r = function(t, b) { return (r = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(t, b) { t.__proto__ = b } || function(t, b) { for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (t[p] = b[p]) })(t, b) }, function(t, b) { if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

                        function e() { this.constructor = t }
                        r(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e) });
                    e.__esModule = !0, e.s16 = e.s8 = e.nu64be = e.u48be = e.u40be = e.u32be = e.u24be = e.u16be = e.nu64 = e.u48 = e.u40 = e.u32 = e.u24 = e.u16 = e.u8 = e.offset = e.greedy = e.Constant = e.UTF8 = e.CString = e.Blob = e.Boolean = e.BitField = e.BitStructure = e.VariantLayout = e.Union = e.UnionLayoutDiscriminator = e.UnionDiscriminator = e.Structure = e.Sequence = e.DoubleBE = e.Double = e.FloatBE = e.Float = e.NearInt64BE = e.NearInt64 = e.NearUInt64BE = e.NearUInt64 = e.IntBE = e.Int = e.UIntBE = e.UInt = e.OffsetLayout = e.GreedyCount = e.ExternalLayout = e.bindConstructorLayout = e.nameWithProperty = e.Layout = e.uint8ArrayToBuffer = e.checkUint8Array = void 0, e.constant = e.utf8 = e.cstr = e.blob = e.unionLayoutDiscriminator = e.union = e.seq = e.bits = e.struct = e.f64be = e.f64 = e.f32be = e.f32 = e.ns64be = e.s48be = e.s40be = e.s32be = e.s24be = e.s16be = e.ns64 = e.s48 = e.s40 = e.s32 = e.s24 = void 0; var c = n(12);

                    function l(b) { if (!(b instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array") }

                    function f(b) { return l(b), c.Buffer.from(b.buffer, b.byteOffset, b.length) }
                    e.checkUint8Array = l, e.uint8ArrayToBuffer = f; var d = function() {
                        function t(span, t) { if (!Number.isInteger(span)) throw new TypeError("span must be an integer");
                            this.span = span, this.property = t } return t.prototype.makeDestinationObject = function() { return {} }, t.prototype.decode = function(b, t) { throw new Error("Layout is abstract") }, t.prototype.encode = function(t, b, e) { throw new Error("Layout is abstract") }, t.prototype.getSpan = function(b, t) { if (0 > this.span) throw new RangeError("indeterminate span"); return this.span }, t.prototype.replicate = function(t) { var e = Object.create(this.constructor.prototype); return Object.assign(e, this), e.property = t, e }, t.prototype.fromArray = function(t) {}, t }();

                    function h(t, e) { return e.property ? t + "[" + e.property + "]" : t }
                    e.Layout = d, e.nameWithProperty = h, e.bindConstructorLayout = function(t, e) { if ("function" != typeof t) throw new TypeError("Class must be constructor"); if (Object.prototype.hasOwnProperty.call(t, "layout_")) throw new Error("Class is already bound to a layout"); if (!(e && e instanceof d)) throw new TypeError("layout must be a Layout"); if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
                        t.layout_ = e, e.boundConstructor_ = t, e.makeDestinationObject = function() { return new t }, Object.defineProperty(t.prototype, "encode", { value: function(b, t) { return e.encode(this, b, t) }, writable: !0 }), Object.defineProperty(t, "decode", { value: function(b, t) { return e.decode(b, t) }, writable: !0 }) }; var m = function(t) {
                        function e() { return null !== t && t.apply(this, arguments) || this } return o(e, t), e.prototype.isCount = function() { throw new Error("ExternalLayout is abstract") }, e }(d);
                    e.ExternalLayout = m; var y = function(t) {
                        function e(e, n) { var r = this; if (void 0 === e && (e = 1), !Number.isInteger(e) || 0 >= e) throw new TypeError("elementSpan must be a (positive) integer"); return (r = t.call(this, -1, n) || this).elementSpan = e, r } return o(e, t), e.prototype.isCount = function() { return !0 }, e.prototype.decode = function(b, t) { l(b), void 0 === t && (t = 0); var e = b.length - t; return Math.floor(e / this.elementSpan) }, e.prototype.encode = function(t, b, e) { return 0 }, e }(m);
                    e.GreedyCount = y; var v = function(t) {
                        function e(e, n, r) { var o = this; if (!(e instanceof d)) throw new TypeError("layout must be a Layout"); if (void 0 === n) n = 0;
                            else if (!Number.isInteger(n)) throw new TypeError("offset must be integer or undefined"); return (o = t.call(this, e.span, r || e.property) || this).layout = e, o.offset = n, o } return o(e, t), e.prototype.isCount = function() { return this.layout instanceof w || this.layout instanceof k }, e.prototype.decode = function(b, t) { return void 0 === t && (t = 0), this.layout.decode(b, t + this.offset) }, e.prototype.encode = function(t, b, e) { return void 0 === e && (e = 0), this.layout.encode(t, b, e + this.offset) }, e }(m);
                    e.OffsetLayout = v; var w = function(t) {
                        function e(span, e) { var n = t.call(this, span, e) || this; if (6 < n.span) throw new RangeError("span must not exceed 6 bytes"); return n } return o(e, t), e.prototype.decode = function(b, t) { return void 0 === t && (t = 0), f(b).readUIntLE(t, this.span) }, e.prototype.encode = function(t, b, e) { return void 0 === e && (e = 0), f(b).writeUIntLE(t, e, this.span), this.span }, e }(d);
                    e.UInt = w; var k = function(t) {
                        function e(span, e) { var n = t.call(this, span, e) || this; if (6 < n.span) throw new RangeError("span must not exceed 6 bytes"); return n } return o(e, t), e.prototype.decode = function(b, t) { return void 0 === t && (t = 0), f(b).readUIntBE(t, this.span) }, e.prototype.encode = function(t, b, e) { return void 0 === e && (e = 0), f(b).writeUIntBE(t, e, this.span), this.span }, e }(d);
                    e.UIntBE = k; var x = function(t) {
                        function e(span, e) { var n = t.call(this, span, e) || this; if (6 < n.span) throw new RangeError("span must not exceed 6 bytes"); return n } return o(e, t), e.prototype.decode = function(b, t) { return void 0 === t && (t = 0), f(b).readIntLE(t, this.span) }, e.prototype.encode = function(t, b, e) { return void 0 === e && (e = 0), f(b).writeIntLE(t, e, this.span), this.span }, e }(d);
                    e.Int = x; var S = function(t) {
                        function e(span, e) { var n = t.call(this, span, e) || this; if (6 < n.span) throw new RangeError("span must not exceed 6 bytes"); return n } return o(e, t), e.prototype.decode = function(b, t) { return void 0 === t && (t = 0), f(b).readIntBE(t, this.span) }, e.prototype.encode = function(t, b, e) { return void 0 === e && (e = 0), f(b).writeIntBE(t, e, this.span), this.span }, e }(d);
                    e.IntBE = S; var _ = Math.pow(2, 32);

                    function E(t) { var e = Math.floor(t / _); return { hi32: e, lo32: t - e * _ } }

                    function A(t, e) { return t * _ + e } var O = function(t) {
                        function e(e) { return t.call(this, 8, e) || this } return o(e, t), e.prototype.decode = function(b, t) { void 0 === t && (t = 0); var e = f(b),
                                n = e.readUInt32LE(t); return A(e.readUInt32LE(t + 4), n) }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0); var n = E(t),
                                r = f(b); return r.writeUInt32LE(n.lo32, e), r.writeUInt32LE(n.hi32, e + 4), 8 }, e }(d);
                    e.NearUInt64 = O; var M = function(t) {
                        function e(e) { return t.call(this, 8, e) || this } return o(e, t), e.prototype.decode = function(b, t) { void 0 === t && (t = 0); var e = f(b); return A(e.readUInt32BE(t), e.readUInt32BE(t + 4)) }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0); var n = E(t),
                                r = f(b); return r.writeUInt32BE(n.hi32, e), r.writeUInt32BE(n.lo32, e + 4), 8 }, e }(d);
                    e.NearUInt64BE = M; var I = function(t) {
                        function e(e) { return t.call(this, 8, e) || this } return o(e, t), e.prototype.decode = function(b, t) { void 0 === t && (t = 0); var e = f(b),
                                n = e.readUInt32LE(t); return A(e.readInt32LE(t + 4), n) }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0); var n = E(t),
                                r = f(b); return r.writeUInt32LE(n.lo32, e), r.writeInt32LE(n.hi32, e + 4), 8 }, e }(d);
                    e.NearInt64 = I; var P = function(t) {
                        function e(e) { return t.call(this, 8, e) || this } return o(e, t), e.prototype.decode = function(b, t) { void 0 === t && (t = 0); var e = f(b); return A(e.readInt32BE(t), e.readUInt32BE(t + 4)) }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0); var n = E(t),
                                r = f(b); return r.writeInt32BE(n.hi32, e), r.writeUInt32BE(n.lo32, e + 4), 8 }, e }(d);
                    e.NearInt64BE = P; var T = function(t) {
                        function e(e) { return t.call(this, 4, e) || this } return o(e, t), e.prototype.decode = function(b, t) { return void 0 === t && (t = 0), f(b).readFloatLE(t) }, e.prototype.encode = function(t, b, e) { return void 0 === e && (e = 0), f(b).writeFloatLE(t, e), 4 }, e }(d);
                    e.Float = T; var C = function(t) {
                        function e(e) { return t.call(this, 4, e) || this } return o(e, t), e.prototype.decode = function(b, t) { return void 0 === t && (t = 0), f(b).readFloatBE(t) }, e.prototype.encode = function(t, b, e) { return void 0 === e && (e = 0), f(b).writeFloatBE(t, e), 4 }, e }(d);
                    e.FloatBE = C; var j = function(t) {
                        function e(e) { return t.call(this, 8, e) || this } return o(e, t), e.prototype.decode = function(b, t) { return void 0 === t && (t = 0), f(b).readDoubleLE(t) }, e.prototype.encode = function(t, b, e) { return void 0 === e && (e = 0), f(b).writeDoubleLE(t, e), 8 }, e }(d);
                    e.Double = j; var R = function(t) {
                        function e(e) { return t.call(this, 8, e) || this } return o(e, t), e.prototype.decode = function(b, t) { return void 0 === t && (t = 0), f(b).readDoubleBE(t) }, e.prototype.encode = function(t, b, e) { return void 0 === e && (e = 0), f(b).writeDoubleBE(t, e), 8 }, e }(d);
                    e.DoubleBE = R; var z = function(t) {
                        function e(e, n, r) { var o = this; if (!(e instanceof d)) throw new TypeError("elementLayout must be a Layout"); if (!(n instanceof m && n.isCount() || Number.isInteger(n) && 0 <= n)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout"); var span = -1; return !(n instanceof m) && 0 < e.span && (span = n * e.span), (o = t.call(this, span, r) || this).elementLayout = e, o.count = n, o } return o(e, t), e.prototype.getSpan = function(b, t) { if (0 <= this.span) return this.span;
                            void 0 === t && (t = 0); var span = 0,
                                e = this.count; if (e instanceof m && (e = e.decode(b, t)), 0 < this.elementLayout.span) span = e * this.elementLayout.span;
                            else
                                for (var n = 0; n < e;) span += this.elementLayout.getSpan(b, t + span), ++n; return span }, e.prototype.decode = function(b, t) { void 0 === t && (t = 0); var e = [],
                                i = 0,
                                n = this.count; for (n instanceof m && (n = n.decode(b, t)); i < n;) e.push(this.elementLayout.decode(b, t)), t += this.elementLayout.getSpan(b, t), i += 1; return e }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0); var n = this.elementLayout,
                                span = t.reduce((function(span, t) { return span + n.encode(t, b, e + span) }), 0); return this.count instanceof m && this.count.encode(t.length, b, e), span }, e }(d);
                    e.Sequence = z; var B = function(t) {
                        function e(e, n, r) { var o = this; if (!Array.isArray(e) || !e.reduce((function(t, e) { return t && e instanceof d }), !0)) throw new TypeError("fields must be array of Layout instances"); "boolean" == typeof n && void 0 === r && (r = n, n = void 0); for (var c = 0, l = e; c < l.length; c++) { var f = l[c]; if (0 > f.span && void 0 === f.property) throw new Error("fields cannot contain unnamed variable-length layout") } var span = -1; try { span = e.reduce((function(span, t) { return span + t.getSpan() }), 0) } catch (t) {} return (o = t.call(this, span, n) || this).fields = e, o.decodePrefixes = !!r, o } return o(e, t), e.prototype.getSpan = function(b, t) { if (0 <= this.span) return this.span;
                            void 0 === t && (t = 0); var span = 0; try { span = this.fields.reduce((function(span, e) { var n = e.getSpan(b, t); return t += n, span + n }), 0) } catch (t) { throw new RangeError("indeterminate span") } return span }, e.prototype.decode = function(b, t) { l(b), void 0 === t && (t = 0); for (var e = this.makeDestinationObject(), n = 0, r = this.fields; n < r.length; n++) { var o = r[n]; if (void 0 !== o.property && (e[o.property] = o.decode(b, t)), t += o.getSpan(b, t), this.decodePrefixes && b.length === t) break } return e }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0); for (var n = e, r = 0, o = 0, c = 0, l = this.fields; c < l.length; c++) { var f = l[c],
                                    span = f.span; if (o = 0 < span ? span : 0, void 0 !== f.property) { var d = t[f.property];
                                    void 0 !== d && (o = f.encode(d, b, e), 0 > span && (span = f.getSpan(b, e))) }
                                r = e, e += span } return r + o - n }, e.prototype.fromArray = function(t) { for (var e = this.makeDestinationObject(), n = 0, r = this.fields; n < r.length; n++) { var o = r[n];
                                void 0 !== o.property && 0 < t.length && (e[o.property] = t.shift()) } return e }, e.prototype.layoutFor = function(t) { if ("string" != typeof t) throw new TypeError("property must be string"); for (var e = 0, n = this.fields; e < n.length; e++) { var r = n[e]; if (r.property === t) return r } }, e.prototype.offsetOf = function(t) { if ("string" != typeof t) throw new TypeError("property must be string"); for (var e = 0, n = 0, r = this.fields; n < r.length; n++) { var o = r[n]; if (o.property === t) return e;
                                0 > o.span ? e = -1 : 0 <= e && (e += o.span) } }, e }(d);
                    e.Structure = B; var N = function() {
                        function t(t) { this.property = t } return t.prototype.decode = function(b, t) { throw new Error("UnionDiscriminator is abstract") }, t.prototype.encode = function(t, b, e) { throw new Error("UnionDiscriminator is abstract") }, t }();
                    e.UnionDiscriminator = N; var L = function(t) {
                        function e(e, n) { var r = this; if (!(e instanceof m && e.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout"); return (r = t.call(this, n || e.property || "variant") || this).layout = e, r } return o(e, t), e.prototype.decode = function(b, t) { return this.layout.decode(b, t) }, e.prototype.encode = function(t, b, e) { return this.layout.encode(t, b, e) }, e }(N);
                    e.UnionLayoutDiscriminator = L; var U = function(t) {
                        function e(e, n, r) { var o, c = this,
                                l = e instanceof w || e instanceof k; if (l) o = new L(new v(e));
                            else if (e instanceof m && e.isCount()) o = new L(e);
                            else { if (!(e instanceof N)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                                o = e } if (void 0 === n && (n = null), !(null === n || n instanceof d)) throw new TypeError("defaultLayout must be null or a Layout"); if (null !== n) { if (0 > n.span) throw new Error("defaultLayout must have constant span");
                                void 0 === n.property && (n = n.replicate("content")) } var span = -1;
                            n && 0 <= (span = n.span) && l && (span += o.layout.span), (c = t.call(this, span, r) || this).discriminator = o, c.usesPrefixDiscriminator = l, c.defaultLayout = n, c.registry = {}; var f = c.defaultGetSourceVariant.bind(c); return c.getSourceVariant = function(t) { return f(t) }, c.configGetSourceVariant = function(t) { f = t.bind(this) }, c } return o(e, t), e.prototype.getSpan = function(b, t) { if (0 <= this.span) return this.span;
                            void 0 === t && (t = 0); var e = this.getVariant(b, t); if (!e) throw new Error("unable to determine span for unrecognized variant"); return e.getSpan(b, t) }, e.prototype.defaultGetSourceVariant = function(t) { if (Object.prototype.hasOwnProperty.call(t, this.discriminator.property)) { if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property)) return; if ((n = this.registry[t[this.discriminator.property]]) && (!n.layout || n.property && Object.prototype.hasOwnProperty.call(t, n.property))) return n } else
                                for (var e in this.registry) { var n; if ((n = this.registry[e]).property && Object.prototype.hasOwnProperty.call(t, n.property)) return n }
                            throw new Error("unable to infer src variant") }, e.prototype.decode = function(b, t) { var e;
                            void 0 === t && (t = 0); var n = this.discriminator,
                                r = n.decode(b, t),
                                o = this.registry[r]; if (void 0 === o) { var c = this.defaultLayout,
                                    l = 0;
                                this.usesPrefixDiscriminator && (l = n.layout.span), (e = this.makeDestinationObject())[n.property] = r, e[c.property] = c.decode(b, t + l) } else e = o.decode(b, t); return e }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0); var n = this.getSourceVariant(t); if (void 0 === n) { var r = this.discriminator,
                                    o = this.defaultLayout,
                                    c = 0; return this.usesPrefixDiscriminator && (c = r.layout.span), r.encode(t[r.property], b, e), c + o.encode(t[o.property], b, e + c) } return n.encode(t, b, e) }, e.prototype.addVariant = function(t, e, n) { var r = new D(this, t, e, n); return this.registry[t] = r, r }, e.prototype.getVariant = function(t, e) { var n; return t instanceof Uint8Array ? (void 0 === e && (e = 0), n = this.discriminator.decode(t, e)) : n = t, this.registry[n] }, e }(d);
                    e.Union = U; var D = function(t) {
                        function e(e, n, r, o) { var c = this; if (!(e instanceof U)) throw new TypeError("union must be a Union"); if (!Number.isInteger(n) || 0 > n) throw new TypeError("variant must be a (non-negative) integer"); if ("string" == typeof r && void 0 === o && (o = r, r = null), r) { if (!(r instanceof d)) throw new TypeError("layout must be a Layout"); if (null !== e.defaultLayout && 0 <= r.span && r.span > e.defaultLayout.span) throw new Error("variant span exceeds span of containing union"); if ("string" != typeof o) throw new TypeError("variant must have a String property") } var span = e.span; return 0 > e.span && 0 <= (span = r ? r.span : 0) && e.usesPrefixDiscriminator && (span += e.discriminator.layout.span), (c = t.call(this, span, o) || this).union = e, c.variant = n, c.layout = r || null, c } return o(e, t), e.prototype.getSpan = function(b, t) { if (0 <= this.span) return this.span;
                            void 0 === t && (t = 0); var e = 0;
                            this.union.usesPrefixDiscriminator && (e = this.union.discriminator.layout.span); var span = 0; return this.layout && (span = this.layout.getSpan(b, t + e)), e + span }, e.prototype.decode = function(b, t) { var e = this.makeDestinationObject(); if (void 0 === t && (t = 0), this !== this.union.getVariant(b, t)) throw new Error("variant mismatch"); var n = 0;
                            this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span); var r = this.property; return this.layout ? e[r] = this.layout.decode(b, t + n) : r ? e[r] = !0 : this.union.usesPrefixDiscriminator && (e[this.union.discriminator.property] = this.variant), e }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0); var n = 0;
                            this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span); var r = this.property; if (this.layout && !Object.prototype.hasOwnProperty.call(t, r)) throw new TypeError("variant lacks property " + r);
                            this.union.discriminator.encode(this.variant, b, e); var span = n; if (this.layout && (this.layout.encode(t[r], b, e + n), span += this.layout.getSpan(b, e + n), 0 <= this.union.span && span > this.union.span)) throw new Error("encoded variant overruns containing union"); return span }, e.prototype.fromArray = function(t) { if (this.layout) return this.layout.fromArray(t) }, e }(d);

                    function W(t) { return 0 > t && (t += 4294967296), t }
                    e.VariantLayout = D; var F = function(t) {
                        function e(e, n, r) { var o = this; if (!(e instanceof w || e instanceof k)) throw new TypeError("word must be a UInt or UIntBE layout"); if ("string" == typeof n && void 0 === r && (r = n, n = !1), 4 < e.span) throw new RangeError("word cannot exceed 32 bits");
                            (o = t.call(this, e.span, r) || this).word = e, o.msb = !!n, o.fields = []; var c = 0; return o._packedSetValue = function(t) { return c = W(t), this }, o._packedGetValue = function() { return c }, o } return o(e, t), e.prototype.decode = function(b, t) { var e = this.makeDestinationObject();
                            void 0 === t && (t = 0); var n = this.word.decode(b, t);
                            this._packedSetValue(n); for (var r = 0, o = this.fields; r < o.length; r++) { var c = o[r];
                                void 0 !== c.property && (e[c.property] = c.decode(n)) } return e }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0); var n = this.word.decode(b, e);
                            this._packedSetValue(n); for (var r = 0, o = this.fields; r < o.length; r++) { var c = o[r]; if (void 0 !== c.property) { var l = t[c.property];
                                    void 0 !== l && c.encode(l) } } return this.word.encode(this._packedGetValue(), b, e) }, e.prototype.addField = function(t, e) { var n = new $(this, t, e); return this.fields.push(n), n }, e.prototype.addBoolean = function(t) { var e = new K(this, t); return this.fields.push(e), e }, e.prototype.fieldFor = function(t) { if ("string" != typeof t) throw new TypeError("property must be string"); for (var e = 0, n = this.fields; e < n.length; e++) { var r = n[e]; if (r.property === t) return r } }, e }(d);
                    e.BitStructure = F; var $ = function() {
                        function t(t, e, n) { if (!(t instanceof F)) throw new TypeError("container must be a BitStructure"); if (!Number.isInteger(e) || 0 >= e) throw new TypeError("bits must be positive integer"); var r = 8 * t.span,
                                o = t.fields.reduce((function(t, e) { return t + e.bits }), 0); if (e + o > r) throw new Error("bits too long for span remainder (" + (r - o) + " of " + r + " remain)");
                            this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, 32 === e && (this.valueMask = 4294967295), this.start = o, this.container.msb && (this.start = r - o - e), this.wordMask = W(this.valueMask << this.start), this.property = n } return t.prototype.decode = function(b, t) { return W(this.container._packedGetValue() & this.wordMask) >>> this.start }, t.prototype.encode = function(t) { if (!Number.isInteger(t) || t !== W(t & this.valueMask)) throw new TypeError(h("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask); var e = this.container._packedGetValue(),
                                n = W(t << this.start);
                            this.container._packedSetValue(W(e & ~this.wordMask) | n) }, t }();
                    e.BitField = $; var K = function(t) {
                        function e(e, n) { return t.call(this, e, 1, n) || this } return o(e, t), e.prototype.decode = function(b, t) { return !!$.prototype.decode.call(this, b, t) }, e.prototype.encode = function(t) { return "boolean" == typeof t && (t = +t), $.prototype.encode.call(this, t) }, e }($);
                    e.Boolean = K; var V = function(t) {
                        function e(e, n) { var r = this; if (!(e instanceof m && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout"); var span = -1; return e instanceof m || (span = e), (r = t.call(this, span, n) || this).length = e, r } return o(e, t), e.prototype.getSpan = function(b, t) { var span = this.span; return 0 > span && (span = this.length.decode(b, t)), span }, e.prototype.decode = function(b, t) { void 0 === t && (t = 0); var span = this.span; return 0 > span && (span = this.length.decode(b, t)), f(b).slice(t, t + span) }, e.prototype.encode = function(t, b, e) { var span = this.length; if (this.length instanceof m && (span = t.length), !(t instanceof Uint8Array && span === t.length)) throw new TypeError(h("Blob.encode", this) + " requires (length " + span + ") Uint8Array as src"); if (e + span > b.length) throw new RangeError("encoding overruns Uint8Array"); var n = f(t); return f(b).write(n.toString("hex"), e, span, "hex"), this.length instanceof m && this.length.encode(span, b, e), span }, e }(d);
                    e.Blob = V; var H = function(t) {
                        function e(e) { return t.call(this, -1, e) || this } return o(e, t), e.prototype.getSpan = function(b, t) { l(b), void 0 === t && (t = 0); for (var e = t; e < b.length && 0 !== b[e];) e += 1; return 1 + e - t }, e.prototype.decode = function(b, t) { void 0 === t && (t = 0); var span = this.getSpan(b, t); return f(b).slice(t, t + span - 1).toString("utf-8") }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0), "string" != typeof t && (t = t.toString()); var n = c.Buffer.from(t, "utf8"),
                                span = n.length; if (e + span > b.length) throw new RangeError("encoding overruns Buffer"); var r = f(b); return n.copy(r, e), r[e + span] = 0, span + 1 }, e }(d);
                    e.CString = H; var Z = function(t) {
                        function e(e, n) { var r = this; if ("string" == typeof e && void 0 === n && (n = e, e = void 0), void 0 === e) e = -1;
                            else if (!Number.isInteger(e)) throw new TypeError("maxSpan must be an integer"); return (r = t.call(this, -1, n) || this).maxSpan = e, r } return o(e, t), e.prototype.getSpan = function(b, t) { return l(b), void 0 === t && (t = 0), b.length - t }, e.prototype.decode = function(b, t) { void 0 === t && (t = 0); var span = this.getSpan(b, t); if (0 <= this.maxSpan && this.maxSpan < span) throw new RangeError("text length exceeds maxSpan"); return f(b).slice(t, t + span).toString("utf-8") }, e.prototype.encode = function(t, b, e) { void 0 === e && (e = 0), "string" != typeof t && (t = t.toString()); var n = c.Buffer.from(t, "utf8"),
                                span = n.length; if (0 <= this.maxSpan && this.maxSpan < span) throw new RangeError("text length exceeds maxSpan"); if (e + span > b.length) throw new RangeError("encoding overruns Buffer"); return n.copy(f(b), e), span }, e }(d);
                    e.UTF8 = Z; var G = function(t) {
                        function e(e, n) { var r = t.call(this, 0, n) || this; return r.value = e, r } return o(e, t), e.prototype.decode = function(b, t) { return this.value }, e.prototype.encode = function(t, b, e) { return 0 }, e }(d);
                    e.Constant = G, e.greedy = function(t, e) { return new y(t, e) }, e.offset = function(t, e, n) { return new v(t, e, n) }, e.u8 = function(t) { return new w(1, t) }, e.u16 = function(t) { return new w(2, t) }, e.u24 = function(t) { return new w(3, t) }, e.u32 = function(t) { return new w(4, t) }, e.u40 = function(t) { return new w(5, t) }, e.u48 = function(t) { return new w(6, t) }, e.nu64 = function(t) { return new O(t) }, e.u16be = function(t) { return new k(2, t) }, e.u24be = function(t) { return new k(3, t) }, e.u32be = function(t) { return new k(4, t) }, e.u40be = function(t) { return new k(5, t) }, e.u48be = function(t) { return new k(6, t) }, e.nu64be = function(t) { return new M(t) }, e.s8 = function(t) { return new x(1, t) }, e.s16 = function(t) { return new x(2, t) }, e.s24 = function(t) { return new x(3, t) }, e.s32 = function(t) { return new x(4, t) }, e.s40 = function(t) { return new x(5, t) }, e.s48 = function(t) { return new x(6, t) }, e.ns64 = function(t) { return new I(t) }, e.s16be = function(t) { return new S(2, t) }, e.s24be = function(t) { return new S(3, t) }, e.s32be = function(t) { return new S(4, t) }, e.s40be = function(t) { return new S(5, t) }, e.s48be = function(t) { return new S(6, t) }, e.ns64be = function(t) { return new P(t) }, e.f32 = function(t) { return new T(t) }, e.f32be = function(t) { return new C(t) }, e.f64 = function(t) { return new j(t) }, e.f64be = function(t) { return new R(t) }, e.struct = function(t, e, n) { return new B(t, e, n) }, e.bits = function(t, e, n) { return new F(t, e, n) }, e.seq = function(t, e, n) { return new z(t, e, n) }, e.union = function(t, e, n) { return new U(t, e, n) }, e.unionLayoutDiscriminator = function(t, e) { return new L(t, e) }, e.blob = function(t, e) { return new V(t, e) }, e.cstr = function(t) { return new H(t) }, e.utf8 = function(t, e) { return new Z(t, e) }, e.constant = function(t, e) { return new G(t, e) } }, , , , , function(t, e, n) { "use strict";
                    (function(t) { var r = n(973),
                            o = n(974),
                            c = n(520);

                        function l() { return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

                        function f(t, e) { if (l() < e) throw new RangeError("Invalid typed array length"); return d.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = d.prototype : (null === t && (t = new d(e)), t.length = e), t }

                        function d(t, e, n) { if (!(d.TYPED_ARRAY_SUPPORT || this instanceof d)) return new d(t, e, n); if ("number" == typeof t) { if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string"); return y(this, t) } return h(this, t, e, n) }

                        function h(t, e, n, r) { if ("number" == typeof e) throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) { if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                                e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                                d.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = d.prototype : t = v(t, e); return t }(t, e, n, r) : "string" == typeof e ? function(t, e, n) { "string" == typeof n && "" !== n || (n = "utf8"); if (!d.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding'); var r = 0 | k(e, n),
                                    o = (t = f(t, r)).write(e, n);
                                o !== r && (t = t.slice(0, o)); return t }(t, e, n) : function(t, e) { if (d.isBuffer(e)) { var n = 0 | w(e.length); return 0 === (t = f(t, n)).length || e.copy(t, 0, 0, n), t } if (e) { if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? f(t, 0) : v(t, e); if ("Buffer" === e.type && c(e.data)) return v(t, e.data) } var r; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(t, e) }

                        function m(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be a number'); if (t < 0) throw new RangeError('"size" argument must not be negative') }

                        function y(t, e) { if (m(e), t = f(t, e < 0 ? 0 : 0 | w(e)), !d.TYPED_ARRAY_SUPPORT)
                                for (var i = 0; i < e; ++i) t[i] = 0; return t }

                        function v(t, e) { var n = e.length < 0 ? 0 : 0 | w(e.length);
                            t = f(t, n); for (var i = 0; i < n; i += 1) t[i] = 255 & e[i]; return t }

                        function w(t) { if (t >= l()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l().toString(16) + " bytes"); return 0 | t }

                        function k(t, e) { if (d.isBuffer(t)) return t.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength; "string" != typeof t && (t = "" + t); var n = t.length; if (0 === n) return 0; for (var r = !1;;) switch (e) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return n;
                                case "utf8":
                                case "utf-8":
                                case void 0:
                                    return G(t).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * n;
                                case "hex":
                                    return n >>> 1;
                                case "base64":
                                    return Y(t).length;
                                default:
                                    if (r) return G(t).length;
                                    e = ("" + e).toLowerCase(), r = !0 } }

                        function x(t, e, n) { var r = !1; if ((void 0 === e || e < 0) && (e = 0), e > this.length) return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return ""; if ((n >>>= 0) <= (e >>>= 0)) return ""; for (t || (t = "utf8");;) switch (t) {
                                case "hex":
                                    return N(this, e, n);
                                case "utf8":
                                case "utf-8":
                                    return j(this, e, n);
                                case "ascii":
                                    return z(this, e, n);
                                case "latin1":
                                case "binary":
                                    return B(this, e, n);
                                case "base64":
                                    return C(this, e, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return L(this, e, n);
                                default:
                                    if (r) throw new TypeError("Unknown encoding: " + t);
                                    t = (t + "").toLowerCase(), r = !0 } }

                        function S(b, t, e) { var i = b[t];
                            b[t] = b[e], b[e] = i }

                        function _(t, e, n, r, o) { if (0 === t.length) return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) { if (o) return -1;
                                n = t.length - 1 } else if (n < 0) { if (!o) return -1;
                                n = 0 } if ("string" == typeof e && (e = d.from(e, r)), d.isBuffer(e)) return 0 === e.length ? -1 : E(t, e, n, r, o); if ("number" == typeof e) return e &= 255, d.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : E(t, [e], n, r, o); throw new TypeError("val must be string, number or Buffer") }

                        function E(t, e, n, r, o) { var i, c = 1,
                                l = t.length,
                                f = e.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) { if (t.length < 2 || e.length < 2) return -1;
                                c = 2, l /= 2, f /= 2, n /= 2 }

                            function d(t, i) { return 1 === c ? t[i] : t.readUInt16BE(i * c) } if (o) { var h = -1; for (i = n; i < l; i++)
                                    if (d(t, i) === d(e, -1 === h ? 0 : i - h)) { if (-1 === h && (h = i), i - h + 1 === f) return h * c } else -1 !== h && (i -= i - h), h = -1 } else
                                for (n + f > l && (n = l - f), i = n; i >= 0; i--) { for (var m = !0, y = 0; y < f; y++)
                                        if (d(t, i + y) !== d(e, y)) { m = !1; break }
                                    if (m) return i }
                            return -1 }

                        function A(t, e, n, r) { n = Number(n) || 0; var o = t.length - n;
                            r ? (r = Number(r)) > o && (r = o) : r = o; var c = e.length; if (c % 2 != 0) throw new TypeError("Invalid hex string");
                            r > c / 2 && (r = c / 2); for (var i = 0; i < r; ++i) { var l = parseInt(e.substr(2 * i, 2), 16); if (isNaN(l)) return i;
                                t[n + i] = l } return i }

                        function O(t, e, n, r) { return X(G(e, t.length - n), t, n, r) }

                        function M(t, e, n, r) { return X(function(t) { for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i)); return e }(e), t, n, r) }

                        function I(t, e, n, r) { return M(t, e, n, r) }

                        function P(t, e, n, r) { return X(Y(e), t, n, r) }

                        function T(t, e, n, r) { return X(function(t, e) { for (var n, r, o, c = [], i = 0; i < t.length && !((e -= 2) < 0); ++i) r = (n = t.charCodeAt(i)) >> 8, o = n % 256, c.push(o), c.push(r); return c }(e, t.length - n), t, n, r) }

                        function C(t, e, n) { return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n)) }

                        function j(t, e, n) { n = Math.min(t.length, n); for (var r = [], i = e; i < n;) { var o, c, l, f, d = t[i],
                                    h = null,
                                    m = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1; if (i + m <= n) switch (m) {
                                    case 1:
                                        d < 128 && (h = d); break;
                                    case 2:
                                        128 == (192 & (o = t[i + 1])) && (f = (31 & d) << 6 | 63 & o) > 127 && (h = f); break;
                                    case 3:
                                        o = t[i + 1], c = t[i + 2], 128 == (192 & o) && 128 == (192 & c) && (f = (15 & d) << 12 | (63 & o) << 6 | 63 & c) > 2047 && (f < 55296 || f > 57343) && (h = f); break;
                                    case 4:
                                        o = t[i + 1], c = t[i + 2], l = t[i + 3], 128 == (192 & o) && 128 == (192 & c) && 128 == (192 & l) && (f = (15 & d) << 18 | (63 & o) << 12 | (63 & c) << 6 | 63 & l) > 65535 && f < 1114112 && (h = f) }
                                null === h ? (h = 65533, m = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), i += m } return function(t) { var e = t.length; if (e <= R) return String.fromCharCode.apply(String, t); var n = "",
                                    i = 0; for (; i < e;) n += String.fromCharCode.apply(String, t.slice(i, i += R)); return n }(r) }
                        e.Buffer = d, e.SlowBuffer = function(t) {+t != t && (t = 0); return d.alloc(+t) }, e.INSPECT_MAX_BYTES = 50, d.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (t) { return !1 } }(), e.kMaxLength = l(), d.poolSize = 8192, d._augment = function(t) { return t.__proto__ = d.prototype, t }, d.from = function(t, e, n) { return h(null, t, e, n) }, d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, { value: null, configurable: !0 })), d.alloc = function(t, e, n) { return function(t, e, n, r) { return m(e), e <= 0 ? f(t, e) : void 0 !== n ? "string" == typeof r ? f(t, e).fill(n, r) : f(t, e).fill(n) : f(t, e) }(null, t, e, n) }, d.allocUnsafe = function(t) { return y(null, t) }, d.allocUnsafeSlow = function(t) { return y(null, t) }, d.isBuffer = function(b) { return !(null == b || !b._isBuffer) }, d.compare = function(a, b) { if (!d.isBuffer(a) || !d.isBuffer(b)) throw new TypeError("Arguments must be Buffers"); if (a === b) return 0; for (var t = a.length, e = b.length, i = 0, n = Math.min(t, e); i < n; ++i)
                                if (a[i] !== b[i]) { t = a[i], e = b[i]; break }
                            return t < e ? -1 : e < t ? 1 : 0 }, d.isEncoding = function(t) { switch (String(t).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "latin1":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return !0;
                                default:
                                    return !1 } }, d.concat = function(t, e) { if (!c(t)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length) return d.alloc(0); var i; if (void 0 === e)
                                for (e = 0, i = 0; i < t.length; ++i) e += t[i].length; var n = d.allocUnsafe(e),
                                r = 0; for (i = 0; i < t.length; ++i) { var o = t[i]; if (!d.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                                o.copy(n, r), r += o.length } return n }, d.byteLength = k, d.prototype._isBuffer = !0, d.prototype.swap16 = function() { var t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var i = 0; i < t; i += 2) S(this, i, i + 1); return this }, d.prototype.swap32 = function() { var t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var i = 0; i < t; i += 4) S(this, i, i + 3), S(this, i + 1, i + 2); return this }, d.prototype.swap64 = function() { var t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var i = 0; i < t; i += 8) S(this, i, i + 7), S(this, i + 1, i + 6), S(this, i + 2, i + 5), S(this, i + 3, i + 4); return this }, d.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? j(this, 0, t) : x.apply(this, arguments) }, d.prototype.equals = function(b) { if (!d.isBuffer(b)) throw new TypeError("Argument must be a Buffer"); return this === b || 0 === d.compare(this, b) }, d.prototype.inspect = function() { var t = "",
                                n = e.INSPECT_MAX_BYTES; return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">" }, d.prototype.compare = function(t, e, n, r, o) { if (!d.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index"); if (r >= o && e >= n) return 0; if (r >= o) return -1; if (e >= n) return 1; if (this === t) return 0; for (var c = (o >>>= 0) - (r >>>= 0), l = (n >>>= 0) - (e >>>= 0), f = Math.min(c, l), h = this.slice(r, o), m = t.slice(e, n), i = 0; i < f; ++i)
                                if (h[i] !== m[i]) { c = h[i], l = m[i]; break }
                            return c < l ? -1 : l < c ? 1 : 0 }, d.prototype.includes = function(t, e, n) { return -1 !== this.indexOf(t, e, n) }, d.prototype.indexOf = function(t, e, n) { return _(this, t, e, n, !0) }, d.prototype.lastIndexOf = function(t, e, n) { return _(this, t, e, n, !1) }, d.prototype.write = function(t, e, n, r) { if (void 0 === e) r = "utf8", n = this.length, e = 0;
                            else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                            else { if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0) } var o = this.length - e; if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                            r || (r = "utf8"); for (var c = !1;;) switch (r) {
                                case "hex":
                                    return A(this, t, e, n);
                                case "utf8":
                                case "utf-8":
                                    return O(this, t, e, n);
                                case "ascii":
                                    return M(this, t, e, n);
                                case "latin1":
                                case "binary":
                                    return I(this, t, e, n);
                                case "base64":
                                    return P(this, t, e, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return T(this, t, e, n);
                                default:
                                    if (c) throw new TypeError("Unknown encoding: " + r);
                                    r = ("" + r).toLowerCase(), c = !0 } }, d.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; var R = 4096;

                        function z(t, e, n) { var r = "";
                            n = Math.min(t.length, n); for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]); return r }

                        function B(t, e, n) { var r = "";
                            n = Math.min(t.length, n); for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]); return r }

                        function N(t, e, n) { var r = t.length;
                            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r); for (var o = "", i = e; i < n; ++i) o += Z(t[i]); return o }

                        function L(t, e, n) { for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o }

                        function U(t, e, n) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + e > n) throw new RangeError("Trying to access beyond buffer length") }

                        function D(t, e, n, r, o, c) { if (!d.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > o || e < c) throw new RangeError('"value" argument is out of bounds'); if (n + r > t.length) throw new RangeError("Index out of range") }

                        function W(t, e, n, r) { e < 0 && (e = 65535 + e + 1); for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i) }

                        function F(t, e, n, r) { e < 0 && (e = 4294967295 + e + 1); for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255 }

                        function $(t, e, n, r, o, c) { if (n + r > t.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

                        function K(t, e, n, r, c) { return c || $(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4 }

                        function V(t, e, n, r, c) { return c || $(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8 }
                        d.prototype.slice = function(t, e) { var n, r = this.length; if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), d.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = d.prototype;
                            else { var o = e - t;
                                n = new d(o, void 0); for (var i = 0; i < o; ++i) n[i] = this[i + t] } return n }, d.prototype.readUIntLE = function(t, e, n) { t |= 0, e |= 0, n || U(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return r }, d.prototype.readUIntBE = function(t, e, n) { t |= 0, e |= 0, n || U(t, e, this.length); for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o; return r }, d.prototype.readUInt8 = function(t, e) { return e || U(t, 1, this.length), this[t] }, d.prototype.readUInt16LE = function(t, e) { return e || U(t, 2, this.length), this[t] | this[t + 1] << 8 }, d.prototype.readUInt16BE = function(t, e) { return e || U(t, 2, this.length), this[t] << 8 | this[t + 1] }, d.prototype.readUInt32LE = function(t, e) { return e || U(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, d.prototype.readUInt32BE = function(t, e) { return e || U(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, d.prototype.readIntLE = function(t, e, n) { t |= 0, e |= 0, n || U(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r }, d.prototype.readIntBE = function(t, e, n) { t |= 0, e |= 0, n || U(t, e, this.length); for (var i = e, r = 1, o = this[t + --i]; i > 0 && (r *= 256);) o += this[t + --i] * r; return o >= (r *= 128) && (o -= Math.pow(2, 8 * e)), o }, d.prototype.readInt8 = function(t, e) { return e || U(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, d.prototype.readInt16LE = function(t, e) { e || U(t, 2, this.length); var n = this[t] | this[t + 1] << 8; return 32768 & n ? 4294901760 | n : n }, d.prototype.readInt16BE = function(t, e) { e || U(t, 2, this.length); var n = this[t + 1] | this[t] << 8; return 32768 & n ? 4294901760 | n : n }, d.prototype.readInt32LE = function(t, e) { return e || U(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, d.prototype.readInt32BE = function(t, e) { return e || U(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, d.prototype.readFloatLE = function(t, e) { return e || U(t, 4, this.length), o.read(this, t, !0, 23, 4) }, d.prototype.readFloatBE = function(t, e) { return e || U(t, 4, this.length), o.read(this, t, !1, 23, 4) }, d.prototype.readDoubleLE = function(t, e) { return e || U(t, 8, this.length), o.read(this, t, !0, 52, 8) }, d.prototype.readDoubleBE = function(t, e) { return e || U(t, 8, this.length), o.read(this, t, !1, 52, 8) }, d.prototype.writeUIntLE = function(t, e, n, r) {
                            (t = +t, e |= 0, n |= 0, r) || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0); var o = 1,
                                i = 0; for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255; return e + n }, d.prototype.writeUIntBE = function(t, e, n, r) {
                            (t = +t, e |= 0, n |= 0, r) || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0); var i = n - 1,
                                o = 1; for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255; return e + n }, d.prototype.writeUInt8 = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 1, 255, 0), d.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1 }, d.prototype.writeUInt16LE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : W(this, t, e, !0), e + 2 }, d.prototype.writeUInt16BE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : W(this, t, e, !1), e + 2 }, d.prototype.writeUInt32LE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : F(this, t, e, !0), e + 4 }, d.prototype.writeUInt32BE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : F(this, t, e, !1), e + 4 }, d.prototype.writeIntLE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
                                D(this, t, e, n, o - 1, -o) } var i = 0,
                                c = 1,
                                sub = 0; for (this[e] = 255 & t; ++i < n && (c *= 256);) t < 0 && 0 === sub && 0 !== this[e + i - 1] && (sub = 1), this[e + i] = (t / c >> 0) - sub & 255; return e + n }, d.prototype.writeIntBE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var o = Math.pow(2, 8 * n - 1);
                                D(this, t, e, n, o - 1, -o) } var i = n - 1,
                                c = 1,
                                sub = 0; for (this[e + i] = 255 & t; --i >= 0 && (c *= 256);) t < 0 && 0 === sub && 0 !== this[e + i + 1] && (sub = 1), this[e + i] = (t / c >> 0) - sub & 255; return e + n }, d.prototype.writeInt8 = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 1, 127, -128), d.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1 }, d.prototype.writeInt16LE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : W(this, t, e, !0), e + 2 }, d.prototype.writeInt16BE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : W(this, t, e, !1), e + 2 }, d.prototype.writeInt32LE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 4, 2147483647, -2147483648), d.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : F(this, t, e, !0), e + 4 }, d.prototype.writeInt32BE = function(t, e, n) { return t = +t, e |= 0, n || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), d.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : F(this, t, e, !1), e + 4 }, d.prototype.writeFloatLE = function(t, e, n) { return K(this, t, e, !0, n) }, d.prototype.writeFloatBE = function(t, e, n) { return K(this, t, e, !1, n) }, d.prototype.writeDoubleLE = function(t, e, n) { return V(this, t, e, !0, n) }, d.prototype.writeDoubleBE = function(t, e, n) { return V(this, t, e, !1, n) }, d.prototype.copy = function(t, e, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0; if (0 === t.length || 0 === this.length) return 0; if (e < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds"); if (r < 0) throw new RangeError("sourceEnd out of bounds");
                            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n); var i, o = r - n; if (this === t && n < e && e < r)
                                for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
                            else if (o < 1e3 || !d.TYPED_ARRAY_SUPPORT)
                                for (i = 0; i < o; ++i) t[i + e] = this[i + n];
                            else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e); return o }, d.prototype.fill = function(t, e, n, r) { if ("string" == typeof t) { if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) { var code = t.charCodeAt(0);
                                    code < 256 && (t = code) } if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string"); if ("string" == typeof r && !d.isEncoding(r)) throw new TypeError("Unknown encoding: " + r) } else "number" == typeof t && (t &= 255); if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index"); if (n <= e) return this; var i; if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                                for (i = e; i < n; ++i) this[i] = t;
                            else { var o = d.isBuffer(t) ? t : G(new d(t, r).toString()),
                                    c = o.length; for (i = 0; i < n - e; ++i) this[i + e] = o[i % c] } return this }; var H = /[^+\/0-9A-Za-z-_]/g;

                        function Z(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

                        function G(t, e) { var n;
                            e = e || 1 / 0; for (var r = t.length, o = null, c = [], i = 0; i < r; ++i) { if ((n = t.charCodeAt(i)) > 55295 && n < 57344) { if (!o) { if (n > 56319) {
                                            (e -= 3) > -1 && c.push(239, 191, 189); continue } if (i + 1 === r) {
                                            (e -= 3) > -1 && c.push(239, 191, 189); continue }
                                        o = n; continue } if (n < 56320) {
                                        (e -= 3) > -1 && c.push(239, 191, 189), o = n; continue }
                                    n = 65536 + (o - 55296 << 10 | n - 56320) } else o && (e -= 3) > -1 && c.push(239, 191, 189); if (o = null, n < 128) { if ((e -= 1) < 0) break;
                                    c.push(n) } else if (n < 2048) { if ((e -= 2) < 0) break;
                                    c.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((e -= 3) < 0) break;
                                    c.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((e -= 4) < 0) break;
                                    c.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return c }

                        function Y(t) { return r.toByteArray(function(t) { if ((t = function(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }(t).replace(H, "")).length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }(t)) }

                        function X(t, e, n, r) { for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i]; return i } }).call(this, n(42)) }, , function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return ge })), n.d(e, "b", (function() { return et })), n.d(e, "c", (function() { return kt })), n.d(e, "d", (function() { return Pt })), n.d(e, "e", (function() { return yt })), n.d(e, "f", (function() { return gt })), n.d(e, "g", (function() { return St })); var r = n(13),
                        o = n.n(r),
                        c = n(47),
                        l = n.n(c),
                        f = n(12),
                        d = n(70),
                        h = n.n(d),
                        m = n(29),
                        y = n.n(m),
                        v = n(135),
                        w = n(293),
                        k = n(7);
                    class x extends TypeError { constructor(t, e) { let n; const { message: r, ...o } = t, { path: path } = t;
                            super(0 === path.length ? r : "At path: " + path.join(".") + " -- " + r), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => { var r; return null != (r = n) ? r : n = [t, ...e()] } } }

                    function S(t) { return "object" == typeof t && null != t }

                    function _(t) { return "string" == typeof t ? JSON.stringify(t) : "" + t }

                    function E(t, e, n, r) { if (!0 === t) return;!1 === t ? t = {} : "string" == typeof t && (t = { message: t }); const { path: path, branch: o } = e, { type: c } = n, { refinement: l, message: f = "Expected a value of type `" + c + "`" + (l ? " with refinement `" + l + "`" : "") + ", but received: `" + _(r) + "`" } = t; return { value: r, type: c, refinement: l, key: path[path.length - 1], path: path, branch: o, ...t, message: f } }

                    function* A(t, e, n, r) { var o;
                        S(o = t) && "function" == typeof o[Symbol.iterator] || (t = [t]); for (const o of t) { const t = E(o, e, n, r);
                            t && (yield t) } }

                    function* O(t, e, n = {}) { const { path: path = [], branch: r = [t], coerce: o = !1, mask: mask = !1 } = n, c = { path: path, branch: r }; if (o && (t = e.coercer(t, c), mask && "type" !== e.type && S(e.schema) && S(t) && !Array.isArray(t)))
                            for (const n in t) void 0 === e.schema[n] && delete t[n]; let l = !0; for (const n of e.validator(t, c)) l = !1, yield [n, void 0]; for (let [n, f, s] of e.entries(t, c)) { const e = O(f, s, { path: void 0 === n ? path : [...path, n], branch: void 0 === n ? r : [...r, f], coerce: o, mask: mask }); for (const r of e) r[0] ? (l = !1, yield [r[0], void 0]) : o && (f = r[1], void 0 === n ? t = f : t instanceof Map ? t.set(n, f) : t instanceof Set ? t.add(f) : S(t) && (t[n] = f)) } if (l)
                            for (const n of e.refiner(t, c)) l = !1, yield [n, void 0];
                        l && (yield [void 0, t]) }
                    class M { constructor(t) { const { type: e, schema: n, validator: r, refiner: o, coercer: c = (t => t), entries: l = function*() {} } = t;
                            this.type = e, this.schema = n, this.entries = l, this.coercer = c, this.validator = r ? (t, e) => A(r(t, e), e, this, t) : () => [], this.refiner = o ? (t, e) => A(o(t, e), e, this, t) : () => [] }
                        assert(t) { return I(t, this) }
                        create(t) { return P(t, this) }
                        is(t) { return T(t, this) }
                        mask(t) { return function(t, e) { const n = C(t, e, { coerce: !0, mask: !0 }); if (n[0]) throw n[0]; return n[1] }(t, this) }
                        validate(t, e = {}) { return C(t, this, e) } }

                    function I(t, e) { const n = C(t, e); if (n[0]) throw n[0] }

                    function P(t, e) { const n = C(t, e, { coerce: !0 }); if (n[0]) throw n[0]; return n[1] }

                    function T(t, e) { return !C(t, e)[0] }

                    function C(t, e, n = {}) { const r = O(t, e, n),
                            o = function(input) { const { done: t, value: e } = input.next(); return t ? void 0 : e }(r); if (o[0]) { return [new x(o[0], (function*() { for (const t of r) t[0] && (yield t[0]) })), void 0] } return [void 0, o[1]] }

                    function j(t, e) { return new M({ type: t, schema: null, validator: e }) }

                    function R(t) { return new M({ type: "array", schema: t, * entries(e) { if (t && Array.isArray(e))
                                    for (const [i, n] of e.entries()) yield [i, n, t] }, coercer: t => Array.isArray(t) ? t.slice() : t, validator: t => Array.isArray(t) || "Expected an array value, but received: " + _(t) }) }

                    function z() { return j("boolean", (t => "boolean" == typeof t)) }

                    function B(t) { return j("instance", (e => e instanceof t || "Expected a `" + t.name + "` instance, but received: " + _(e))) }

                    function N(t) { const e = _(t),
                            n = typeof t; return new M({ type: "literal", schema: "string" === n || "number" === n || "boolean" === n ? t : null, validator: n => n === t || "Expected the literal `" + e + "`, but received: " + _(n) }) }

                    function L() { return j("never", (() => !1)) }

                    function U(t) { return new M({...t, validator: (e, n) => null === e || t.validator(e, n), refiner: (e, n) => null === e || t.refiner(e, n) }) }

                    function D() { return j("number", (t => "number" == typeof t && !isNaN(t) || "Expected a number, but received: " + _(t))) }

                    function W(t) { return new M({...t, validator: (e, n) => void 0 === e || t.validator(e, n), refiner: (e, n) => void 0 === e || t.refiner(e, n) }) }

                    function F() { return j("string", (t => "string" == typeof t || "Expected a string, but received: " + _(t))) }

                    function $(t) { const e = L(); return new M({ type: "tuple", schema: null, * entries(n) { if (Array.isArray(n)) { const r = Math.max(t.length, n.length); for (let i = 0; i < r; i++) yield [i, n[i], t[i] || e] } }, validator: t => Array.isArray(t) || "Expected an array, but received: " + _(t) }) }

                    function K(t) { const e = Object.keys(t); return new M({ type: "type", schema: t, * entries(n) { if (S(n))
                                    for (const r of e) yield [r, n[r], t[r]] }, validator: t => S(t) || "Expected an object, but received: " + _(t) }) }

                    function V(t) { const e = t.map((s => s.type)).join(" | "); return new M({ type: "union", schema: null, validator(n, r) { const o = []; for (const e of t) { const [...t] = O(n, e, r), [c] = t; if (!c[0]) return []; for (const [e] of t) e && o.push(e) } return ["Expected the value to satisfy a union of `" + e + "`, but received: " + _(n), ...o] } }) }

                    function H() { return j("unknown", (() => !0)) }

                    function Z(t, e, n) { return new M({...t, coercer: (r, o) => T(r, e) ? t.coercer(n(r, o), o) : t.coercer(r, o) }) }
                    n(195), n(194); var G = n(171),
                        Y = n.n(G),
                        X = n(199); const Q = t => f.Buffer.isBuffer(t) ? t : t instanceof Uint8Array ? f.Buffer.from(t.buffer, t.byteOffset, t.byteLength) : f.Buffer.from(t);
                    class J { constructor(t) { Object.assign(this, t) }
                        encode() { return f.Buffer.from(Object(w.serialize)(tt, this)) }
                        static decode(data) { return Object(w.deserialize)(tt, this, data) }
                        static decodeUnchecked(data) { return Object(w.deserializeUnchecked)(tt, this, data) } } const tt = new Map;
                    class et extends J { constructor(t) { if (super({}), o()(this, "_bn", void 0), function(t) { return void 0 !== t._bn }(t)) this._bn = t._bn;
                            else { if ("string" == typeof t) { const e = y.a.decode(t); if (32 != e.length) throw new Error("Invalid public key input");
                                    this._bn = new h.a(e) } else this._bn = new h.a(t); if (this._bn.byteLength() > 32) throw new Error("Invalid public key input") } }
                        equals(t) { return this._bn.eq(t._bn) }
                        toBase58() { return y.a.encode(this.toBytes()) }
                        toBytes() { return this.toBuffer() }
                        toBuffer() { const b = this._bn.toArrayLike(f.Buffer); if (32 === b.length) return b; const t = f.Buffer.alloc(32); return b.copy(t, 32 - b.length), t }
                        toString() { return this.toBase58() }
                        static async createWithSeed(t, e, n) { const r = f.Buffer.concat([t.toBuffer(), f.Buffer.from(e), n.toBuffer()]),
                                o = await Object(v.sha256)(new Uint8Array(r)); return new et(f.Buffer.from(o, "hex")) }
                        static async createProgramAddress(t, e) { let n = f.Buffer.alloc(0);
                            t.forEach((function(t) { if (t.length > 32) throw new TypeError("Max seed length exceeded");
                                n = f.Buffer.concat([n, Q(t)]) })), n = f.Buffer.concat([n, e.toBuffer(), f.Buffer.from("ProgramDerivedAddress")]); let r = await Object(v.sha256)(new Uint8Array(n)),
                                o = new h.a(r, 16).toArray(void 0, 32); if (ot(o)) throw new Error("Invalid seeds, address must fall off the curve"); return new et(o) }
                        static async findProgramAddress(t, e) { let address, n = 255; for (; 0 != n;) { try { const r = t.concat(f.Buffer.from([n]));
                                    address = await this.createProgramAddress(r, e) } catch (t) { if (t instanceof TypeError) throw t;
                                    n--; continue } return [address, n] } throw new Error("Unable to find a viable program address nonce") }
                        static isOnCurve(t) { return 1 == ot(t) } }
                    o()(et, "default", new et("11111111111111111111111111111111")), tt.set(et, { kind: "struct", fields: [
                            ["_bn", "u256"]
                        ] }); let nt = l.a.lowlevel;

                    function ot(p) { var t = [nt.gf(), nt.gf(), nt.gf(), nt.gf()],
                            e = nt.gf(),
                            n = nt.gf(),
                            r = nt.gf(),
                            o = nt.gf(),
                            c = nt.gf(),
                            l = nt.gf(),
                            f = nt.gf(); return nt.set25519(t[2], it), nt.unpack25519(t[1], p), nt.S(r, t[1]), nt.M(o, r, nt.D), nt.Z(r, r, t[2]), nt.A(o, t[2], o), nt.S(c, o), nt.S(l, c), nt.M(f, l, c), nt.M(e, f, r), nt.M(e, e, o), nt.pow2523(e, e), nt.M(e, e, r), nt.M(e, e, o), nt.M(e, e, o), nt.M(t[0], e, o), nt.S(n, t[0]), nt.M(n, n, o), st(n, r) && nt.M(t[0], t[0], at), nt.S(n, t[0]), nt.M(n, n, o), st(n, r) ? 0 : 1 } let it = nt.gf([1]),
                        at = nt.gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                    function st(a, b) { var t = new Uint8Array(32),
                            e = new Uint8Array(32); return nt.pack25519(t, a), nt.pack25519(e, b), nt.crypto_verify_32(t, 0, e, 0) }
                    new et("BPFLoader1111111111111111111111111111111111"); const ut = (t = "publicKey") => k.blob(32, t),
                        ct = (t = "string") => { const e = k.struct([k.u32("length"), k.u32("lengthPadding"), k.blob(k.offset(k.u32(), -8), "chars")], t),
                                n = e.decode.bind(e),
                                r = e.encode.bind(e); return e.decode = (t, e) => n(t, e).chars.toString("utf8"), e.encode = (t, e, n) => { const data = { chars: f.Buffer.from(t, "utf8") }; return r(data, e, n) }, e.alloc = t => k.u32().span + k.u32().span + f.Buffer.from(t, "utf8").length, e };

                    function lt(t) { let e = 0,
                            n = 0; for (;;) { let r = t.shift(); if (e |= (127 & r) << 7 * n, n += 1, 0 == (128 & r)) break } return e }

                    function ft(t, e) { let n = e; for (;;) { let e = 127 & n; if (n >>= 7, 0 == n) { t.push(e); break }
                            e |= 128, t.push(e) } }
                    class ht { constructor(t) { o()(this, "header", void 0), o()(this, "accountKeys", void 0), o()(this, "recentBlockhash", void 0), o()(this, "instructions", void 0), this.header = t.header, this.accountKeys = t.accountKeys.map((t => new et(t))), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions }
                        isAccountWritable(t) { return t < this.header.numRequiredSignatures - this.header.numReadonlySignedAccounts || t >= this.header.numRequiredSignatures && t < this.accountKeys.length - this.header.numReadonlyUnsignedAccounts }
                        serialize() { const t = this.accountKeys.length; let e = [];
                            ft(e, t); const n = this.instructions.map((t => { const { accounts: e, programIdIndex: n } = t, data = y.a.decode(t.data); let r = [];
                                ft(r, e.length); let o = []; return ft(o, data.length), { programIdIndex: n, keyIndicesCount: f.Buffer.from(r), keyIndices: f.Buffer.from(e), dataLength: f.Buffer.from(o), data: data } })); let r = [];
                            ft(r, n.length); let o = f.Buffer.alloc(mt);
                            f.Buffer.from(r).copy(o); let c = r.length;
                            n.forEach((t => { const e = k.struct([k.u8("programIdIndex"), k.blob(t.keyIndicesCount.length, "keyIndicesCount"), k.seq(k.u8("keyIndex"), t.keyIndices.length, "keyIndices"), k.blob(t.dataLength.length, "dataLength"), k.seq(k.u8("userdatum"), t.data.length, "data")]).encode(t, o, c);
                                c += e })), o = o.slice(0, c); const l = k.struct([k.blob(1, "numRequiredSignatures"), k.blob(1, "numReadonlySignedAccounts"), k.blob(1, "numReadonlyUnsignedAccounts"), k.blob(e.length, "keyCount"), k.seq(ut("key"), t, "keys"), ut("recentBlockhash")]),
                                d = { numRequiredSignatures: f.Buffer.from([this.header.numRequiredSignatures]), numReadonlySignedAccounts: f.Buffer.from([this.header.numReadonlySignedAccounts]), numReadonlyUnsignedAccounts: f.Buffer.from([this.header.numReadonlyUnsignedAccounts]), keyCount: f.Buffer.from(e), keys: this.accountKeys.map((t => Q(t.toBytes()))), recentBlockhash: y.a.decode(this.recentBlockhash) }; let h = f.Buffer.alloc(2048); const m = l.encode(d, h); return o.copy(h, m), h.slice(0, m + o.length) }
                        static from(t) { let e = [...t]; const n = e.shift(),
                                r = e.shift(),
                                o = e.shift(),
                                c = lt(e); let l = []; for (let i = 0; i < c; i++) { const t = e.slice(0, 32);
                                e = e.slice(32), l.push(y.a.encode(f.Buffer.from(t))) } const d = e.slice(0, 32);
                            e = e.slice(32); const h = lt(e); let m = []; for (let i = 0; i < h; i++) { const t = e.shift(),
                                    n = lt(e),
                                    r = e.slice(0, n);
                                e = e.slice(n); const o = lt(e),
                                    c = e.slice(0, o),
                                    data = y.a.encode(f.Buffer.from(c));
                                e = e.slice(o), m.push({ programIdIndex: t, accounts: r, data: data }) } const v = { header: { numRequiredSignatures: n, numReadonlySignedAccounts: r, numReadonlyUnsignedAccounts: o }, recentBlockhash: y.a.encode(f.Buffer.from(d)), accountKeys: l, instructions: m }; return new ht(v) } }

                    function pt(t, e) { if (!t) throw new Error(e || "Assertion failed") } const bt = f.Buffer.alloc(64).fill(0),
                        mt = 1232;
                    class gt { constructor(t) { o()(this, "keys", void 0), o()(this, "programId", void 0), o()(this, "data", f.Buffer.alloc(0)), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data) } }
                    class yt { get signature() { return this.signatures.length > 0 ? this.signatures[0].signature : null }
                        constructor(t) { o()(this, "signatures", []), o()(this, "feePayer", void 0), o()(this, "instructions", []), o()(this, "recentBlockhash", void 0), o()(this, "nonceInfo", void 0), t && Object.assign(this, t) }
                        add(...t) { if (0 === t.length) throw new Error("No instructions"); return t.forEach((t => { "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new gt(t)) })), this }
                        compileMessage() { const { nonceInfo: t } = this;
                            t && this.instructions[0] != t.nonceInstruction && (this.recentBlockhash = t.nonce, this.instructions.unshift(t.nonceInstruction)); const { recentBlockhash: e } = this; if (!e) throw new Error("Transaction recentBlockhash required"); let n; if (this.instructions.length < 1 && console.warn("No instructions provided"), this.feePayer) n = this.feePayer;
                            else { if (!(this.signatures.length > 0 && this.signatures[0].publicKey)) throw new Error("Transaction fee payer required");
                                n = this.signatures[0].publicKey } for (let i = 0; i < this.instructions.length; i++)
                                if (void 0 === this.instructions[i].programId) throw new Error(`Transaction instruction index ${i} has undefined program id`);
                            const r = [],
                                o = [];
                            this.instructions.forEach((t => { t.keys.forEach((t => { o.push({...t }) })); const e = t.programId.toString();
                                r.includes(e) || r.push(e) })), r.forEach((t => { o.push({ pubkey: new et(t), isSigner: !1, isWritable: !1 }) })), o.sort((function(t, e) { const n = t.isSigner === e.isSigner ? 0 : t.isSigner ? -1 : 1,
                                    r = t.isWritable === e.isWritable ? 0 : t.isWritable ? -1 : 1; return n || r })); const c = [];
                            o.forEach((t => { const e = t.pubkey.toString(),
                                    n = c.findIndex((t => t.pubkey.toString() === e));
                                n > -1 ? c[n].isWritable = c[n].isWritable || t.isWritable : c.push(t) })); const l = c.findIndex((t => t.pubkey.equals(n))); if (l > -1) { const [t] = c.splice(l, 1);
                                t.isSigner = !0, t.isWritable = !0, c.unshift(t) } else c.unshift({ pubkey: n, isSigner: !0, isWritable: !0 }); for (const t of this.signatures) { const e = c.findIndex((e => e.pubkey.equals(t.publicKey))); if (!(e > -1)) throw new Error(`unknown signer: ${t.publicKey.toString()}`);
                                c[e].isSigner || (c[e].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.")) } let f = 0,
                                d = 0,
                                h = 0; const m = [],
                                v = [];
                            c.forEach((({ pubkey: t, isSigner: e, isWritable: n }) => { e ? (m.push(t.toString()), f += 1, n || (d += 1)) : (v.push(t.toString()), n || (h += 1)) })); const w = m.concat(v),
                                k = this.instructions.map((t => { const { data: data, programId: e } = t; return { programIdIndex: w.indexOf(e.toString()), accounts: t.keys.map((meta => w.indexOf(meta.pubkey.toString()))), data: y.a.encode(data) } })); return k.forEach((t => { pt(t.programIdIndex >= 0), t.accounts.forEach((t => pt(t >= 0))) })), new ht({ header: { numRequiredSignatures: f, numReadonlySignedAccounts: d, numReadonlyUnsignedAccounts: h }, accountKeys: w, recentBlockhash: e, instructions: k }) }
                        _compile() { const t = this.compileMessage(),
                                e = t.accountKeys.slice(0, t.header.numRequiredSignatures); if (this.signatures.length === e.length) { if (this.signatures.every(((t, n) => e[n].equals(t.publicKey)))) return t } return this.signatures = e.map((t => ({ signature: null, publicKey: t }))), t }
                        serializeMessage() { return this._compile().serialize() }
                        setSigners(...t) { if (0 === t.length) throw new Error("No signers"); const e = new Set;
                            this.signatures = t.filter((t => { const n = t.toString(); return !e.has(n) && (e.add(n), !0) })).map((t => ({ signature: null, publicKey: t }))) }
                        sign(...t) { if (0 === t.length) throw new Error("No signers"); const e = new Set,
                                n = []; for (const r of t) { const t = r.publicKey.toString();
                                e.has(t) || (e.add(t), n.push(r)) }
                            this.signatures = n.map((t => ({ signature: null, publicKey: t.publicKey }))); const r = this._compile();
                            this._partialSign(r, ...n), this._verifySignatures(r.serialize(), !0) }
                        partialSign(...t) { if (0 === t.length) throw new Error("No signers"); const e = new Set,
                                n = []; for (const r of t) { const t = r.publicKey.toString();
                                e.has(t) || (e.add(t), n.push(r)) } const r = this._compile();
                            this._partialSign(r, ...n) }
                        _partialSign(t, ...e) { const n = t.serialize();
                            e.forEach((t => { const e = l.a.sign.detached(n, t.secretKey);
                                this._addSignature(t.publicKey, Q(e)) })) }
                        addSignature(t, e) { this._compile(), this._addSignature(t, e) }
                        _addSignature(t, e) { pt(64 === e.length); const n = this.signatures.findIndex((e => t.equals(e.publicKey))); if (n < 0) throw new Error(`unknown signer: ${t.toString()}`);
                            this.signatures[n].signature = f.Buffer.from(e) }
                        verifySignatures() { return this._verifySignatures(this.serializeMessage(), !0) }
                        _verifySignatures(t, e) { for (const { signature: n, publicKey: r }
                                of this.signatures)
                                if (null === n) { if (e) return !1 } else if (!l.a.sign.detached.verify(t, n, r.toBuffer())) return !1; return !0 }
                        serialize(t) { const { requireAllSignatures: e, verifySignatures: n } = Object.assign({ requireAllSignatures: !0, verifySignatures: !0 }, t), r = this.serializeMessage(); if (n && !this._verifySignatures(r, e)) throw new Error("Signature verification failed"); return this._serialize(r) }
                        _serialize(t) { const { signatures: e } = this, n = [];
                            ft(n, e.length); const r = n.length + 64 * e.length + t.length,
                                o = f.Buffer.alloc(r); return pt(e.length < 256), f.Buffer.from(n).copy(o, 0), e.forEach((({ signature: t }, e) => { null !== t && (pt(64 === t.length, "signature has invalid length"), f.Buffer.from(t).copy(o, n.length + 64 * e)) })), t.copy(o, n.length + 64 * e.length), pt(o.length <= mt, `Transaction too large: ${o.length} > ${mt}`), o }
                        get keys() { return pt(1 === this.instructions.length), this.instructions[0].keys.map((t => t.pubkey)) }
                        get programId() { return pt(1 === this.instructions.length), this.instructions[0].programId }
                        get data() { return pt(1 === this.instructions.length), this.instructions[0].data }
                        static from(t) { let e = [...t]; const n = lt(e); let r = []; for (let i = 0; i < n; i++) { const t = e.slice(0, 64);
                                e = e.slice(64), r.push(y.a.encode(f.Buffer.from(t))) } return yt.populate(ht.from(e), r) }
                        static populate(t, e) { const n = new yt; return n.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (n.feePayer = t.accountKeys[0]), e.forEach(((e, r) => { const o = { signature: e == y.a.encode(bt) ? null : y.a.decode(e), publicKey: t.accountKeys[r] };
                                n.signatures.push(o) })), t.instructions.forEach((e => { const r = e.accounts.map((e => { const r = t.accountKeys[e]; return { pubkey: r, isSigner: n.signatures.some((t => t.publicKey.toString() === r.toString())), isWritable: t.isAccountWritable(e) } }));
                                n.instructions.push(new gt({ keys: r, programId: t.accountKeys[e.programIdIndex], data: y.a.decode(e.data) })) })), n } } const vt = new et("SysvarC1ock11111111111111111111111111111111"),
                        wt = new et("SysvarRecentB1ockHashes11111111111111111111"),
                        kt = new et("SysvarRent111111111111111111111111111111111"),
                        xt = (new et("SysvarRewards111111111111111111111111111111"), new et("SysvarStakeHistory1111111111111111111111111"));
                    new et("Sysvar1nstructions1111111111111111111111111");
                    async function St(t, e, n, r) { const o = r && { skipPreflight: r.skipPreflight, preflightCommitment: r.preflightCommitment || r.commitment },
                            c = await t.sendTransaction(e, n, o),
                            l = (await t.confirmTransaction(c, r && r.commitment)).value; if (l.err) throw new Error(`Transaction ${c} failed (${JSON.stringify(l)})`); return c }

                    function _t(t) { return new Promise((e => setTimeout(e, t))) }

                    function Et(t, e) { const n = t.layout.span >= 0 ? t.layout.span : function(t, e) { let n = 0; return t.layout.fields.forEach((t => { t.span >= 0 ? n += t.span : "function" == typeof t.alloc && (n += t.alloc(e[t.property])) })), n }(t, e),
                            data = f.Buffer.alloc(n),
                            r = Object.assign({ instruction: t.index }, e); return t.layout.encode(r, data), data } const At = k.nu64("lamportsPerSignature"),
                        Ot = k.struct([k.u32("version"), k.u32("state"), ut("authorizedPubkey"), ut("nonce"), k.struct([At], "feeCalculator")]),
                        Mt = Ot.span; const It = Object.freeze({ Create: { index: 0, layout: k.struct([k.u32("instruction"), k.ns64("lamports"), k.ns64("space"), ut("programId")]) }, Assign: { index: 1, layout: k.struct([k.u32("instruction"), ut("programId")]) }, Transfer: { index: 2, layout: k.struct([k.u32("instruction"), k.ns64("lamports")]) }, CreateWithSeed: { index: 3, layout: k.struct([k.u32("instruction"), ut("base"), ct("seed"), k.ns64("lamports"), k.ns64("space"), ut("programId")]) }, AdvanceNonceAccount: { index: 4, layout: k.struct([k.u32("instruction")]) }, WithdrawNonceAccount: { index: 5, layout: k.struct([k.u32("instruction"), k.ns64("lamports")]) }, InitializeNonceAccount: { index: 6, layout: k.struct([k.u32("instruction"), ut("authorized")]) }, AuthorizeNonceAccount: { index: 7, layout: k.struct([k.u32("instruction"), ut("authorized")]) }, Allocate: { index: 8, layout: k.struct([k.u32("instruction"), k.ns64("space")]) }, AllocateWithSeed: { index: 9, layout: k.struct([k.u32("instruction"), ut("base"), ct("seed"), k.ns64("space"), ut("programId")]) }, AssignWithSeed: { index: 10, layout: k.struct([k.u32("instruction"), ut("base"), ct("seed"), ut("programId")]) }, TransferWithSeed: { index: 11, layout: k.struct([k.u32("instruction"), k.ns64("lamports"), ct("seed"), ut("programId")]) } });
                    class Pt { constructor() {}
                        static createAccount(t) { const data = Et(It.Create, { lamports: t.lamports, space: t.space, programId: Q(t.programId.toBuffer()) }); return new gt({ keys: [{ pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 }, { pubkey: t.newAccountPubkey, isSigner: !0, isWritable: !0 }], programId: this.programId, data: data }) }
                        static transfer(t) { let data, e; if ("basePubkey" in t) { data = Et(It.TransferWithSeed, { lamports: t.lamports, seed: t.seed, programId: Q(t.programId.toBuffer()) }), e = [{ pubkey: t.fromPubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }, { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 }] } else { data = Et(It.Transfer, { lamports: t.lamports }), e = [{ pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 }, { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 }] } return new gt({ keys: e, programId: this.programId, data: data }) }
                        static assign(t) { let data, e; if ("basePubkey" in t) { data = Et(It.AssignWithSeed, { base: Q(t.basePubkey.toBuffer()), seed: t.seed, programId: Q(t.programId.toBuffer()) }), e = [{ pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }] } else { data = Et(It.Assign, { programId: Q(t.programId.toBuffer()) }), e = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }] } return new gt({ keys: e, programId: this.programId, data: data }) }
                        static createAccountWithSeed(t) { const data = Et(It.CreateWithSeed, { base: Q(t.basePubkey.toBuffer()), seed: t.seed, lamports: t.lamports, space: t.space, programId: Q(t.programId.toBuffer()) }); let e = [{ pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 }, { pubkey: t.newAccountPubkey, isSigner: !1, isWritable: !0 }]; return t.basePubkey != t.fromPubkey && e.push({ pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }), new gt({ keys: e, programId: this.programId, data: data }) }
                        static createNonceAccount(t) { const e = new yt; "basePubkey" in t && "seed" in t ? e.add(Pt.createAccountWithSeed({ fromPubkey: t.fromPubkey, newAccountPubkey: t.noncePubkey, basePubkey: t.basePubkey, seed: t.seed, lamports: t.lamports, space: Mt, programId: this.programId })) : e.add(Pt.createAccount({ fromPubkey: t.fromPubkey, newAccountPubkey: t.noncePubkey, lamports: t.lamports, space: Mt, programId: this.programId })); const n = { noncePubkey: t.noncePubkey, authorizedPubkey: t.authorizedPubkey }; return e.add(this.nonceInitialize(n)), e }
                        static nonceInitialize(t) { const data = Et(It.InitializeNonceAccount, { authorized: Q(t.authorizedPubkey.toBuffer()) }),
                                e = { keys: [{ pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 }, { pubkey: wt, isSigner: !1, isWritable: !1 }, { pubkey: kt, isSigner: !1, isWritable: !1 }], programId: this.programId, data: data }; return new gt(e) }
                        static nonceAdvance(t) { const data = Et(It.AdvanceNonceAccount),
                                e = { keys: [{ pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 }, { pubkey: wt, isSigner: !1, isWritable: !1 }, { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }; return new gt(e) }
                        static nonceWithdraw(t) { const data = Et(It.WithdrawNonceAccount, { lamports: t.lamports }); return new gt({ keys: [{ pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 }, { pubkey: wt, isSigner: !1, isWritable: !1 }, { pubkey: kt, isSigner: !1, isWritable: !1 }, { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) }
                        static nonceAuthorize(t) { const data = Et(It.AuthorizeNonceAccount, { authorized: Q(t.newAuthorizedPubkey.toBuffer()) }); return new gt({ keys: [{ pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) }
                        static allocate(t) { let data, e; if ("basePubkey" in t) { data = Et(It.AllocateWithSeed, { base: Q(t.basePubkey.toBuffer()), seed: t.seed, space: t.space, programId: Q(t.programId.toBuffer()) }), e = [{ pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 }, { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }] } else { data = Et(It.Allocate, { space: t.space }), e = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }] } return new gt({ keys: e, programId: this.programId, data: data }) } }
                    o()(Pt, "programId", new et("11111111111111111111111111111111")); const Tt = mt - 300;
                    class Ct { constructor() {}
                        static getMinNumSignatures(t) { return 2 * (Math.ceil(t / Ct.chunkSize) + 1 + 1) }
                        static async load(t, e, n, r, data) {
                            { const o = await t.getMinimumBalanceForRentExemption(data.length),
                                    c = await t.getAccountInfo(n.publicKey, "confirmed"); let l = null; if (null !== c) { if (c.executable) return console.error("Program load failed, account is already executable"), !1;
                                    c.data.length !== data.length && (l = l || new yt, l.add(Pt.allocate({ accountPubkey: n.publicKey, space: data.length }))), c.owner.equals(r) || (l = l || new yt, l.add(Pt.assign({ accountPubkey: n.publicKey, programId: r }))), c.lamports < o && (l = l || new yt, l.add(Pt.transfer({ fromPubkey: e.publicKey, toPubkey: n.publicKey, lamports: o - c.lamports }))) } else l = (new yt).add(Pt.createAccount({ fromPubkey: e.publicKey, newAccountPubkey: n.publicKey, lamports: o > 0 ? o : 1, space: data.length, programId: r }));
                                null !== l && await St(t, l, [e, n], { commitment: "confirmed" }) } const o = k.struct([k.u32("instruction"), k.u32("offset"), k.u32("bytesLength"), k.u32("bytesLengthPadding"), k.seq(k.u8("byte"), k.offset(k.u32(), -8), "bytes")]),
                                c = Ct.chunkSize; let l = 0,
                                d = data,
                                h = []; for (; d.length > 0;) { const m = d.slice(0, c),
                                    data = f.Buffer.alloc(c + 16);
                                o.encode({ instruction: 0, offset: l, bytes: m }, data); const y = (new yt).add({ keys: [{ pubkey: n.publicKey, isSigner: !0, isWritable: !0 }], programId: r, data: data }); if (h.push(St(t, y, [e, n], { commitment: "confirmed" })), t._rpcEndpoint.includes("solana.com")) { const t = 4;
                                    await _t(1e3 / t) }
                                l += c, d = d.slice(c) }
                            await Promise.all(h); { const o = k.struct([k.u32("instruction")]),
                                    data = f.Buffer.alloc(o.span);
                                o.encode({ instruction: 1 }, data); const c = (new yt).add({ keys: [{ pubkey: n.publicKey, isSigner: !0, isWritable: !0 }, { pubkey: kt, isSigner: !1, isWritable: !1 }], programId: r, data: data });
                                await St(t, c, [e, n], { commitment: "confirmed" }) } return !0 } }
                    o()(Ct, "chunkSize", Tt);
                    new et("BPFLoader2111111111111111111111111111111111"); var jt = { exports: {} };! function(t, e) { var n = function() { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if (void 0 !== n) return n; throw new Error("unable to locate global object") }();
                        t.exports = e = n.fetch, n.fetch && (e.default = n.fetch.bind(n)), e.Headers = n.Headers, e.Request = n.Request, e.Response = n.Response }(jt, jt.exports);
                    Error; const Rt = Z(B(et), F(), (t => new et(t))),
                        zt = $([F(), N("base64")]),
                        Bt = Z(B(f.Buffer), zt, (t => f.Buffer.from(t[0], "base64")));

                    function Nt(t) { return V([K({ jsonrpc: N("2.0"), id: F(), result: t }), K({ jsonrpc: N("2.0"), id: F(), error: K({ code: H(), message: F(), data: W(j("any", (() => !0))) }) })]) } const Lt = Nt(H());

                    function Ut(t) { return Z(Nt(t), Lt, (e => "error" in e ? e : {...e, result: P(e.result, t) })) }

                    function Dt(t) { return Ut(K({ context: K({ slot: D() }), value: t })) }

                    function Wt(t) { return K({ context: K({ slot: D() }), value: t }) } const Ft = K({ foundation: D(), foundationTerm: D(), initial: D(), taper: D(), terminal: D() }),
                        $t = (Ut(R(U(K({ epoch: D(), effectiveSlot: D(), amount: D(), postBalance: D() })))), K({ epoch: D(), slotIndex: D(), slotsInEpoch: D(), absoluteSlot: D(), blockHeight: W(D()), transactionCount: W(D()) })),
                        qt = K({ slotsPerEpoch: D(), leaderScheduleSlotOffset: D(), warmup: z(), firstNormalEpoch: D(), firstNormalSlot: D() }),
                        Kt = (Vt = F(), Ht = R(D()), new M({ type: "record", schema: null, * entries(t) { if (S(t))
                                    for (const e in t) { const n = t[e];
                                        yield [e, e, Vt], yield [e, n, Ht] } }, validator: t => S(t) || "Expected an object, but received: " + _(t) })); var Vt, Ht; const Zt = U(V([K({}), F()])),
                        Gt = K({ err: Zt }),
                        Yt = N("receivedSignature");
                    K({ "solana-core": F(), "feature-set": W(D()) }), Dt(K({ err: U(V([K({}), F()])), logs: U(R(F())) }));
                    Ut(Ft), Ut($t), Ut(qt), Ut(Kt), Ut(D()), Dt(K({ total: D(), circulating: D(), nonCirculating: D(), nonCirculatingAccounts: R(Rt) })); const Xt = K({ amount: F(), uiAmount: U(D()), decimals: D(), uiAmountString: W(F()) }),
                        Qt = (Dt(R(K({ address: Rt, amount: F(), uiAmount: U(D()), decimals: D(), uiAmountString: W(F()) }))), Dt(R(K({ pubkey: Rt, account: K({ executable: z(), owner: Rt, lamports: D(), data: Bt, rentEpoch: D() }) }))), K({ program: F(), parsed: H(), space: D() })),
                        Jt = (Dt(R(K({ pubkey: Rt, account: K({ executable: z(), owner: Rt, lamports: D(), data: Qt, rentEpoch: D() }) }))), Dt(R(K({ lamports: D(), address: Rt }))), K({ executable: z(), owner: Rt, lamports: D(), data: Bt, rentEpoch: D() })),
                        te = (K({ pubkey: Rt, account: Jt }), Z(V([B(f.Buffer), Qt]), V([zt, Qt]), (t => Array.isArray(t) ? P(t, Bt) : t))),
                        ee = K({ executable: z(), owner: Rt, lamports: D(), data: te, rentEpoch: D() }),
                        ne = (K({ pubkey: Rt, account: ee }), K({ state: V([N("active"), N("inactive"), N("activating"), N("deactivating")]), active: D(), inactive: D() }), Ut(R(K({ signature: F(), slot: D(), err: Zt, memo: U(F()), blockTime: W(U(D())) }))), Ut(R(K({ signature: F(), slot: D(), err: Zt, memo: U(F()), blockTime: W(U(D())) }))), K({ subscription: D(), result: Wt(Jt) }), K({ pubkey: Rt, account: Jt })),
                        re = (K({ subscription: D(), result: Wt(ne) }), K({ parent: D(), slot: D(), root: D() })),
                        oe = (K({ subscription: D(), result: re }), V([K({ type: V([N("firstShredReceived"), N("completed"), N("optimisticConfirmation"), N("root")]), slot: D(), timestamp: D() }), K({ type: N("createdBank"), parent: D(), slot: D(), timestamp: D() }), K({ type: N("frozen"), slot: D(), timestamp: D(), stats: K({ numTransactionEntries: D(), numSuccessfulTransactions: D(), numFailedTransactions: D(), maxTransactionsPerEntry: D() }) }), K({ type: N("dead"), slot: D(), timestamp: D(), err: F() })])),
                        ie = (K({ subscription: D(), result: oe }), K({ subscription: D(), result: Wt(V([Gt, Yt])) }), K({ subscription: D(), result: D() }), K({ pubkey: F(), gossip: U(F()), tpu: U(F()), rpc: U(F()), version: U(F()) }), K({ votePubkey: F(), nodePubkey: F(), activatedStake: D(), epochVoteAccount: z(), epochCredits: R($([D(), D(), D()])), commission: D(), lastVote: D(), rootSlot: U(D()) })),
                        ae = (Ut(K({ current: R(ie), delinquent: R(ie) })), V([N("processed"), N("confirmed"), N("finalized")])),
                        se = K({ slot: D(), confirmations: U(D()), err: Zt, confirmationStatus: W(ae) }),
                        ue = (Dt(R(U(se))), Ut(D()), K({ signatures: R(F()), message: K({ accountKeys: R(F()), header: K({ numRequiredSignatures: D(), numReadonlySignedAccounts: D(), numReadonlyUnsignedAccounts: D() }), instructions: R(K({ accounts: R(D()), data: F(), programIdIndex: D() })), recentBlockhash: F() }) })),
                        ce = K({ parsed: H(), program: F(), programId: Rt }),
                        le = K({ accounts: R(Rt), data: F(), programId: Rt }),
                        fe = Z(V([le, ce]), V([K({ parsed: H(), program: F(), programId: F() }), K({ accounts: R(F()), data: F(), programId: F() })]), (t => P(t, "accounts" in t ? le : ce))),
                        de = K({ signatures: R(F()), message: K({ accountKeys: R(K({ pubkey: Rt, signer: z(), writable: z() })), instructions: R(fe), recentBlockhash: F() }) }),
                        he = K({ accountIndex: D(), mint: F(), uiTokenAmount: Xt }),
                        pe = K({ err: Zt, fee: D(), innerInstructions: W(U(R(K({ index: D(), instructions: R(K({ accounts: R(D()), data: F(), programIdIndex: D() })) })))), preBalances: R(D()), postBalances: R(D()), logMessages: W(U(R(F()))), preTokenBalances: W(U(R(he))), postTokenBalances: W(U(R(he))) }),
                        be = K({ err: Zt, fee: D(), innerInstructions: W(U(R(K({ index: D(), instructions: R(fe) })))), preBalances: R(D()), postBalances: R(D()), logMessages: W(U(R(F()))), preTokenBalances: W(U(R(he))), postTokenBalances: W(U(R(he))) }),
                        me = (Ut(U(K({ blockhash: F(), previousBlockhash: F(), parentSlot: D(), transactions: R(K({ transaction: ue, meta: U(pe) })), rewards: W(R(K({ pubkey: F(), lamports: D(), postBalance: U(D()), rewardType: U(F()) }))), blockTime: U(D()) }))), Ut(U(K({ blockhash: F(), previousBlockhash: F(), parentSlot: D(), signatures: R(F()), blockTime: U(D()) }))), Ut(U(K({ slot: D(), meta: pe, blockTime: W(U(D())), transaction: ue }))), Ut(U(K({ slot: D(), transaction: de, meta: U(be), blockTime: W(U(D())) }))), Dt(K({ blockhash: F(), feeCalculator: K({ lamportsPerSignature: D() }) })), Ut(R(K({ slot: D(), numTransactions: D(), numSlots: D(), samplePeriodSecs: D() }))), Dt(U(K({ feeCalculator: K({ lamportsPerSignature: D() }) }))), Ut(F()), Ut(F()), K({ err: Zt, logs: R(F()), signature: F() }));
                    K({ result: Wt(me), subscription: D() });
                    class ge { constructor(t) { o()(this, "_keypair", void 0), this._keypair = t || c.sign.keyPair() }
                        static generate() { return new ge(c.sign.keyPair()) }
                        static fromSecretKey(t, e) { const n = c.sign.keyPair.fromSecretKey(t); if (!e || !e.skipValidation) { const t = (new TextEncoder).encode("@solana/web3.js-validation-v1"),
                                    e = c.sign.detached(t, n.secretKey); if (!c.sign.detached.verify(t, e, n.publicKey)) throw new Error("provided secretKey is invalid") } return new ge(n) }
                        static fromSeed(t) { return new ge(c.sign.keyPair.fromSeed(t)) }
                        get publicKey() { return new et(this._keypair.publicKey) }
                        get secretKey() { return this._keypair.secretKey } } const ye = new et("StakeConfig11111111111111111111111111111111");
                    class ve { constructor(t, e, n) { o()(this, "unixTimestamp", void 0), o()(this, "epoch", void 0), o()(this, "custodian", void 0), this.unixTimestamp = t, this.epoch = e, this.custodian = n } }
                    o()(ve, "default", new ve(0, 0, et.default)); const we = Object.freeze({ Initialize: { index: 0, layout: k.struct([k.u32("instruction"), ((t = "authorized") => k.struct([ut("staker"), ut("withdrawer")], t))(), ((t = "lockup") => k.struct([k.ns64("unixTimestamp"), k.ns64("epoch"), ut("custodian")], t))()]) }, Authorize: { index: 1, layout: k.struct([k.u32("instruction"), ut("newAuthorized"), k.u32("stakeAuthorizationType")]) }, Delegate: { index: 2, layout: k.struct([k.u32("instruction")]) }, Split: { index: 3, layout: k.struct([k.u32("instruction"), k.ns64("lamports")]) }, Withdraw: { index: 4, layout: k.struct([k.u32("instruction"), k.ns64("lamports")]) }, Deactivate: { index: 5, layout: k.struct([k.u32("instruction")]) }, AuthorizeWithSeed: { index: 8, layout: k.struct([k.u32("instruction"), ut("newAuthorized"), k.u32("stakeAuthorizationType"), ct("authoritySeed"), ut("authorityOwner")]) } });
                    Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
                    class ke { constructor() {}
                        static initialize(t) { const { stakePubkey: e, authorized: n, lockup: r } = t, o = r || ve.default, data = Et(we.Initialize, { authorized: { staker: Q(n.staker.toBuffer()), withdrawer: Q(n.withdrawer.toBuffer()) }, lockup: { unixTimestamp: o.unixTimestamp, epoch: o.epoch, custodian: Q(o.custodian.toBuffer()) } }), c = { keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: kt, isSigner: !1, isWritable: !1 }], programId: this.programId, data: data }; return new gt(c) }
                        static createAccountWithSeed(t) { const e = new yt;
                            e.add(Pt.createAccountWithSeed({ fromPubkey: t.fromPubkey, newAccountPubkey: t.stakePubkey, basePubkey: t.basePubkey, seed: t.seed, lamports: t.lamports, space: this.space, programId: this.programId })); const { stakePubkey: n, authorized: r, lockup: o } = t; return e.add(this.initialize({ stakePubkey: n, authorized: r, lockup: o })) }
                        static createAccount(t) { const e = new yt;
                            e.add(Pt.createAccount({ fromPubkey: t.fromPubkey, newAccountPubkey: t.stakePubkey, lamports: t.lamports, space: this.space, programId: this.programId })); const { stakePubkey: n, authorized: r, lockup: o } = t; return e.add(this.initialize({ stakePubkey: n, authorized: r, lockup: o })) }
                        static delegate(t) { const { stakePubkey: e, authorizedPubkey: n, votePubkey: r } = t, data = Et(we.Delegate); return (new yt).add({ keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !1 }, { pubkey: vt, isSigner: !1, isWritable: !1 }, { pubkey: xt, isSigner: !1, isWritable: !1 }, { pubkey: ye, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) }
                        static authorize(t) { const { stakePubkey: e, authorizedPubkey: n, newAuthorizedPubkey: r, stakeAuthorizationType: o, custodianPubkey: c } = t, data = Et(we.Authorize, { newAuthorized: Q(r.toBuffer()), stakeAuthorizationType: o.index }), l = [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: vt, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !0, isWritable: !1 }]; return c && l.push({ pubkey: c, isSigner: !1, isWritable: !1 }), (new yt).add({ keys: l, programId: this.programId, data: data }) }
                        static authorizeWithSeed(t) { const { stakePubkey: e, authorityBase: n, authoritySeed: r, authorityOwner: o, newAuthorizedPubkey: c, stakeAuthorizationType: l, custodianPubkey: f } = t, data = Et(we.AuthorizeWithSeed, { newAuthorized: Q(c.toBuffer()), stakeAuthorizationType: l.index, authoritySeed: r, authorityOwner: Q(o.toBuffer()) }), d = [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !0, isWritable: !1 }, { pubkey: vt, isSigner: !1, isWritable: !1 }]; return f && d.push({ pubkey: f, isSigner: !1, isWritable: !1 }), (new yt).add({ keys: d, programId: this.programId, data: data }) }
                        static split(t) { const { stakePubkey: e, authorizedPubkey: n, splitStakePubkey: r, lamports: o } = t, c = new yt;
                            c.add(Pt.createAccount({ fromPubkey: n, newAccountPubkey: r, lamports: 0, space: this.space, programId: this.programId })); const data = Et(we.Split, { lamports: o }); return c.add({ keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) }
                        static withdraw(t) { const { stakePubkey: e, authorizedPubkey: n, toPubkey: r, lamports: o, custodianPubkey: c } = t, data = Et(we.Withdraw, { lamports: o }), l = [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: vt, isSigner: !1, isWritable: !1 }, { pubkey: xt, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !0, isWritable: !1 }]; return c && l.push({ pubkey: c, isSigner: !1, isWritable: !1 }), (new yt).add({ keys: l, programId: this.programId, data: data }) }
                        static deactivate(t) { const { stakePubkey: e, authorizedPubkey: n } = t, data = Et(we.Deactivate); return (new yt).add({ keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }, { pubkey: vt, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !0, isWritable: !1 }], programId: this.programId, data: data }) } }
                    o()(ke, "programId", new et("Stake11111111111111111111111111111111111111")), o()(ke, "space", 200); const { publicKeyCreate: xe, ecdsaSign: Se } = Y.a, _e = k.struct([k.u8("numSignatures"), k.u16("signatureOffset"), k.u8("signatureInstructionIndex"), k.u16("ethAddressOffset"), k.u8("ethAddressInstructionIndex"), k.u16("messageDataOffset"), k.u16("messageDataSize"), k.u8("messageInstructionIndex"), k.blob(20, "ethAddress"), k.blob(64, "signature"), k.u8("recoveryId")]);
                    class Ee { constructor() {}
                        static publicKeyToEthAddress(t) { pt(64 === t.length, `Public key must be 64 bytes but received ${t.length} bytes`); try { return f.Buffer.from(X.keccak_256.update(Q(t)).digest()).slice(-20) } catch (t) { throw new Error(`Error constructing Ethereum address: ${t}`) } }
                        static createInstructionWithPublicKey(t) { const { publicKey: e, message: n, signature: r, recoveryId: o } = t; return Ee.createInstructionWithEthAddress({ ethAddress: Ee.publicKeyToEthAddress(e), message: n, signature: r, recoveryId: o }) }
                        static createInstructionWithEthAddress(t) { const { ethAddress: e, message: n, signature: r, recoveryId: o } = t; let c;
                            c = "string" == typeof e ? e.startsWith("0x") ? f.Buffer.from(e.substr(2), "hex") : f.Buffer.from(e, "hex") : e, pt(20 === c.length, `Address must be 20 bytes but received ${c.length} bytes`); const l = 12 + c.length,
                                d = l + r.length + 1,
                                h = f.Buffer.alloc(_e.span + n.length); return _e.encode({ numSignatures: 1, signatureOffset: l, signatureInstructionIndex: 0, ethAddressOffset: 12, ethAddressInstructionIndex: 0, messageDataOffset: d, messageDataSize: n.length, messageInstructionIndex: 0, signature: Q(r), ethAddress: Q(c), recoveryId: o }, h), h.fill(Q(n), _e.span), new gt({ keys: [], programId: Ee.programId, data: h }) }
                        static createInstructionWithPrivateKey(t) { const { privateKey: e, message: n } = t;
                            pt(32 === e.length, `Private key must be 32 bytes but received ${e.length} bytes`); try { const t = Q(e),
                                    r = xe(t, !1).slice(1),
                                    o = f.Buffer.from(X.keccak_256.update(Q(n)).digest()),
                                    { signature: c, recid: l } = Se(o, t); return this.createInstructionWithPublicKey({ publicKey: r, message: n, signature: c, recoveryId: l }) } catch (t) { throw new Error(`Error creating instruction; ${t}`) } } }
                    o()(Ee, "programId", new et("KeccakSecp256k11111111111111111111111111111"));
                    new et("Va1idator1nfo111111111111111111111111111111"), K({ name: F(), website: W(F()), details: W(F()), keybaseUsername: W(F()) });
                    new et("Vote111111111111111111111111111111111111111"), k.struct([ut("nodePubkey"), ut("authorizedVoterPubkey"), ut("authorizedWithdrawerPubkey"), k.u8("commission"), k.nu64(), k.seq(k.struct([k.nu64("slot"), k.u32("confirmationCount")]), k.offset(k.u32(), -8), "votes"), k.u8("rootSlotValid"), k.nu64("rootSlot"), k.nu64("epoch"), k.nu64("credits"), k.nu64("lastEpochCredits"), k.nu64(), k.seq(k.struct([k.nu64("epoch"), k.nu64("credits"), k.nu64("prevCredits")]), k.offset(k.u32(), -8), "epochCredits")]) }, function(t, e, n) { "use strict";
                    (function(e) { var r = n(484);

                        function o(a, b) { if (a === b) return 0; for (var t = a.length, e = b.length, i = 0, n = Math.min(t, e); i < n; ++i)
                                if (a[i] !== b[i]) { t = a[i], e = b[i]; break }
                            return t < e ? -1 : e < t ? 1 : 0 }

                        function c(b) { return e.Buffer && "function" == typeof e.Buffer.isBuffer ? e.Buffer.isBuffer(b) : !(null == b || !b._isBuffer) } var l = n(1074),
                            f = Object.prototype.hasOwnProperty,
                            d = Array.prototype.slice,
                            h = "foo" === function() {}.name;

                        function m(t) { return Object.prototype.toString.call(t) }

                        function y(t) { return !c(t) && ("function" == typeof e.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer)))) } var v = t.exports = E,
                            w = /\s*function\s+([^\(\s]*)\s*/;

                        function k(t) { if (l.isFunction(t)) { if (h) return t.name; var e = t.toString().match(w); return e && e[1] } }

                        function x(s, t) { return "string" == typeof s ? s.length < t ? s : s.slice(0, t) : s }

                        function S(t) { if (h || !l.isFunction(t)) return l.inspect(t); var e = k(t); return "[Function" + (e ? ": " + e : "") + "]" }

                        function _(t, e, n, r, o) { throw new v.AssertionError({ message: n, actual: t, expected: e, operator: r, stackStartFunction: o }) }

                        function E(t, e) { t || _(t, !0, e, "==", v.ok) }

                        function A(t, e, n, r) { if (t === e) return !0; if (c(t) && c(e)) return 0 === o(t, e); if (l.isDate(t) && l.isDate(e)) return t.getTime() === e.getTime(); if (l.isRegExp(t) && l.isRegExp(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase; if (null !== t && "object" == typeof t || null !== e && "object" == typeof e) { if (y(t) && y(e) && m(t) === m(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === o(new Uint8Array(t.buffer), new Uint8Array(e.buffer)); if (c(t) !== c(e)) return !1; var f = (r = r || { actual: [], expected: [] }).actual.indexOf(t); return -1 !== f && f === r.expected.indexOf(e) || (r.actual.push(t), r.expected.push(e), function(a, b, t, e) { if (null == a || null == b) return !1; if (l.isPrimitive(a) || l.isPrimitive(b)) return a === b; if (t && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return !1; var n = O(a),
                                        r = O(b); if (n && !r || !n && r) return !1; if (n) return A(a = d.call(a), b = d.call(b), t); var o, i, c = P(a),
                                        f = P(b); if (c.length !== f.length) return !1; for (c.sort(), f.sort(), i = c.length - 1; i >= 0; i--)
                                        if (c[i] !== f[i]) return !1;
                                    for (i = c.length - 1; i >= 0; i--)
                                        if (!A(a[o = c[i]], b[o], t, e)) return !1;
                                    return !0 }(t, e, n, r)) } return n ? t === e : t == e }

                        function O(object) { return "[object Arguments]" == Object.prototype.toString.call(object) }

                        function M(t, e) { if (!t || !e) return !1; if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t); try { if (t instanceof e) return !0 } catch (t) {} return !Error.isPrototypeOf(e) && !0 === e.call({}, t) }

                        function I(t, e, n, r) { var o; if ("function" != typeof e) throw new TypeError('"block" argument must be a function'); "string" == typeof n && (r = n, n = null), o = function(t) { var e; try { t() } catch (t) { e = t } return e }(e), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), t && !o && _(o, n, "Missing expected exception" + r); var c = "string" == typeof r,
                                f = !t && o && !n; if ((!t && l.isError(o) && c && M(o, n) || f) && _(o, n, "Got unwanted exception" + r), t && o && n && !M(o, n) || !t && o) throw o }
                        v.AssertionError = function(t) { this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = function(t) { return x(S(t.actual), 128) + " " + t.operator + " " + x(S(t.expected), 128) }(this), this.generatedMessage = !0); var e = t.stackStartFunction || _; if (Error.captureStackTrace) Error.captureStackTrace(this, e);
                            else { var n = new Error; if (n.stack) { var r = n.stack,
                                        o = k(e),
                                        c = r.indexOf("\n" + o); if (c >= 0) { var l = r.indexOf("\n", c + 1);
                                        r = r.substring(l + 1) }
                                    this.stack = r } } }, l.inherits(v.AssertionError, Error), v.fail = _, v.ok = E, v.equal = function(t, e, n) { t != e && _(t, e, n, "==", v.equal) }, v.notEqual = function(t, e, n) { t == e && _(t, e, n, "!=", v.notEqual) }, v.deepEqual = function(t, e, n) { A(t, e, !1) || _(t, e, n, "deepEqual", v.deepEqual) }, v.deepStrictEqual = function(t, e, n) { A(t, e, !0) || _(t, e, n, "deepStrictEqual", v.deepStrictEqual) }, v.notDeepEqual = function(t, e, n) { A(t, e, !1) && _(t, e, n, "notDeepEqual", v.notDeepEqual) }, v.notDeepStrictEqual = function t(e, n, r) { A(e, n, !0) && _(e, n, r, "notDeepStrictEqual", t) }, v.strictEqual = function(t, e, n) { t !== e && _(t, e, n, "===", v.strictEqual) }, v.notStrictEqual = function(t, e, n) { t === e && _(t, e, n, "!==", v.notStrictEqual) }, v.throws = function(t, e, n) { I(!0, t, e, n) }, v.doesNotThrow = function(t, e, n) { I(!1, t, e, n) }, v.ifError = function(t) { if (t) throw t }, v.strict = r((function t(e, n) { e || _(e, !0, n, "==", t) }), v, { equal: v.strictEqual, deepEqual: v.deepStrictEqual, notEqual: v.notStrictEqual, notDeepEqual: v.notDeepStrictEqual }), v.strict.strict = v.strict; var P = Object.keys || function(t) { var e = []; for (var n in t) f.call(t, n) && e.push(n); return e } }).call(this, n(42)) }, , , function(t, e, n) { "use strict";
                    n.d(e, "k", (function() { return w })), n.d(e, "m", (function() { return k })), n.d(e, "l", (function() { return x })), n.d(e, "e", (function() { return S })), n.d(e, "b", (function() { return _ })), n.d(e, "s", (function() { return E })), n.d(e, "g", (function() { return A })), n.d(e, "h", (function() { return O })), n.d(e, "d", (function() { return M })), n.d(e, "r", (function() { return I })), n.d(e, "j", (function() { return P })), n.d(e, "t", (function() { return C })), n.d(e, "o", (function() { return R })), n.d(e, "q", (function() { return z })), n.d(e, "f", (function() { return B })), n.d(e, "c", (function() { return N })), n.d(e, "i", (function() { return L })), n.d(e, "p", (function() { return U })), n.d(e, "a", (function() { return H })), n.d(e, "v", (function() { return Z })), n.d(e, "n", (function() { return G })), n.d(e, "u", (function() { return Y }));
                    n(80), n(49), n(77), n(81), n(53), n(41), n(76); var r = n(57),
                        o = n(9),
                        c = n(34),
                        l = n(28),
                        f = (n(40), n(63), n(111), n(31), n(50), n(89), n(113), n(56), n(59), n(64), n(71), n(177), n(95), n(458), n(330), n(459), n(110), n(217), n(706), n(90), n(123), n(10)),
                        d = n(134);

                    function h(object, t) { var e = Object.keys(object); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(object);
                            t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, n) } return e }

                    function m(t) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? h(Object(source), !0).forEach((function(e) { Object(c.a)(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) })) } return t }

                    function y(t, e) { var n; if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return v(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var i = 0,
                                    r = function() {}; return { s: r, n: function() { return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] } }, e: function(t) { throw t }, f: r } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var o, c = !0,
                            l = !1; return { s: function() { n = t[Symbol.iterator]() }, n: function() { var t = n.next(); return c = t.done, t }, e: function(t) { l = !0, o = t }, f: function() { try { c || null == n.return || n.return() } finally { if (l) throw o } } } }

                    function v(t, e) {
                        (null == e || e > t.length) && (e = t.length); for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]; return n }

                    function w(t) { f.default.config.errorHandler && f.default.config.errorHandler(t) }

                    function k(t) { return t.then((function(t) { return t.default || t })) }

                    function x(t) { return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length }

                    function S(t) { var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = t.$children || [],
                            o = y(r); try { for (o.s(); !(e = o.n()).done;) { var c = e.value;
                                c.$fetch ? n.push(c) : c.$children && S(c, n) } } catch (t) { o.e(t) } finally { o.f() } return n }

                    function _(t, e) { if (e || !t.options.__hasNuxtData) { var n = t.options._originDataFn || t.options.data || function() { return {} };
                            t.options._originDataFn = n, t.options.data = function() { var data = n.call(this, this); return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m(m({}, data), e) }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data) } }

                    function E(t) { return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = f.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t }

                    function A(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components"; return Array.prototype.concat.apply([], t.matched.map((function(t, r) { return Object.keys(t[n]).map((function(o) { return e && e.push(r), t[n][o] })) }))) }

                    function O(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return A(t, e, "instances") }

                    function M(t, e) { return Array.prototype.concat.apply([], t.matched.map((function(t, n) { return Object.keys(t.components).reduce((function(r, o) { return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r }), []) }))) }

                    function I(t, e) { return Promise.all(M(t, function() { var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, c) { return regeneratorRuntime.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("function" != typeof n || n.options) { t.next = 4; break } return t.next = 3, n();
                                        case 3:
                                            n = t.sent;
                                        case 4:
                                            return o.components[c] = n = E(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                                        case 6:
                                        case "end":
                                            return t.stop() } }), t) }))); return function(e, n, r, o) { return t.apply(this, arguments) } }())) }

                    function P(t) { return T.apply(this, arguments) }

                    function T() { return (T = Object(o.a)(regeneratorRuntime.mark((function t(e) { return regeneratorRuntime.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e) { t.next = 2; break } return t.abrupt("return");
                                    case 2:
                                        return t.next = 4, I(e);
                                    case 4:
                                        return t.abrupt("return", m(m({}, e), {}, { meta: A(e).map((function(t, n) { return m(m({}, t.options.meta), (e.matched[n] || {}).meta) })) }));
                                    case 5:
                                    case "end":
                                        return t.stop() } }), t) })))).apply(this, arguments) }

                    function C(t, e) { return j.apply(this, arguments) }

                    function j() { return (j = Object(o.a)(regeneratorRuntime.mark((function t(e, n) { var o, c, f, h; return regeneratorRuntime.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.context || (e.context = { isStatic: !0, isDev: !1, isHMR: !1, app: e, store: e.store, payload: n.payload, error: n.error, base: e.router.options.base, env: {} }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function(t, path, n) { if (t) { e.context._redirected = !0; var o = Object(r.a)(path); if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {}, path = t, o = Object(r.a)(path), t = 302), "object" === o && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(d.d)(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                                e.context.next({ path: path, query: n, status: t }) } }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([P(n.route), P(n.from)]);
                                    case 3:
                                        o = t.sent, c = Object(l.a)(o, 2), f = c[0], h = c[1], n.route && (e.context.route = f), n.from && (e.context.from = h), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                                    case 15:
                                    case "end":
                                        return t.stop() } }), t) })))).apply(this, arguments) }

                    function R(t, e) { return !t.length || e._redirected || e._errored ? Promise.resolve() : z(t[0], e).then((function() { return R(t.slice(1), e) })) }

                    function z(t, e) { var n; return (n = 2 === t.length ? new Promise((function(n) { t(e, (function(t, data) { t && e.error(t), n(data = data || {}) })) })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n) }

                    function B(base, t) { if ("hash" === t) return window.location.hash.replace(/^#\//, "");
                        base = decodeURI(base).slice(0, -1); var path = decodeURI(window.location.pathname);
                        base && path.startsWith(base) && (path = path.slice(base.length)); var e = (path || "/") + window.location.search + window.location.hash; return Object(d.c)(e) }

                    function N(t, e) { return function(t, e) { for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", V(e))); return function(e, r) { for (var path = "", data = e || {}, o = (r || {}).pretty ? W : encodeURIComponent, c = 0; c < t.length; c++) { var l = t[c]; if ("string" != typeof l) { var f = data[l.name || "pathMatch"],
                                            d = void 0; if (null == f) { if (l.optional) { l.partial && (path += l.prefix); continue } throw new TypeError('Expected "' + l.name + '" to be defined') } if (Array.isArray(f)) { if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(f) + "`"); if (0 === f.length) { if (l.optional) continue; throw new TypeError('Expected "' + l.name + '" to not be empty') } for (var h = 0; h < f.length; h++) { if (d = o(f[h]), !n[c].test(d)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(d) + "`");
                                                path += (0 === h ? l.prefix : l.delimiter) + d } } else { if (d = l.asterisk ? F(f) : o(f), !n[c].test(d)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
                                            path += l.prefix + d } } else path += l } return path } }(function(t, e) { var n, r = [],
                                o = 0,
                                c = 0,
                                path = "",
                                l = e && e.delimiter || "/"; for (; null != (n = D.exec(t));) { var f = n[0],
                                    d = n[1],
                                    h = n.index; if (path += t.slice(c, h), c = h + f.length, d) path += d[1];
                                else { var m = t[c],
                                        y = n[2],
                                        v = n[3],
                                        w = n[4],
                                        k = n[5],
                                        x = n[6],
                                        S = n[7];
                                    path && (r.push(path), path = ""); var _ = null != y && null != m && m !== y,
                                        E = "+" === x || "*" === x,
                                        A = "?" === x || "*" === x,
                                        O = n[2] || l,
                                        pattern = w || k;
                                    r.push({ name: v || o++, prefix: y || "", delimiter: O, optional: A, repeat: E, partial: _, asterisk: Boolean(S), pattern: pattern ? K(pattern) : S ? ".*" : "[^" + $(O) + "]+?" }) } }
                            c < t.length && (path += t.substr(c));
                            path && r.push(path); return r }(t, e), e) }

                    function L(t, e) { var n = {},
                            r = m(m({}, t), e); for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0); return n }

                    function U(t) { var e; if (t.message || "string" == typeof t) e = t.message || t;
                        else try { e = JSON.stringify(t, null, 2) } catch (n) { e = "[".concat(t.constructor.name, "]") }
                        return m(m({}, t), {}, { message: e, statusCode: t.statusCode || t.status || t.response && t.response.status || 500 }) }
                    window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) { window.onNuxtReadyCbs.push(t) }; var D = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

                    function W(t, e) { var n = e ? /[?#]/g : /[/?#]/g; return encodeURI(t).replace(n, (function(t) { return "%" + t.charCodeAt(0).toString(16).toUpperCase() })) }

                    function F(t) { return W(t, !0) }

                    function $(t) { return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1") }

                    function K(t) { return t.replace(/([=!:$/()])/g, "\\$1") }

                    function V(t) { return t && t.sensitive ? "" : "i" }

                    function H(t, e, n) { t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n) } var Z = d.b,
                        G = (d.e, d.a);

                    function Y(t) { try { window.history.scrollRestoration = t } catch (t) {} } }, , function(t, e, n) { "use strict";
                    e.__esModule = !0; var r, o = n(738),
                        c = (r = o) && r.__esModule ? r : { default: r };
                    e.default = c.default || function(t) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var e in source) Object.prototype.hasOwnProperty.call(source, e) && (t[e] = source[e]) } return t } }, function(t, e, n) { "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }); var r = l(n(102)),
                        o = l(n(302)),
                        c = n(780);

                    function l(t) { return t && t.__esModule ? t : { default: t } } var f = {get any() { return (0, c.toType)("any", { type: null }) }, get func() { return (0, c.toType)("function", { type: Function }).def(d.func) }, get bool() { return (0, c.toType)("boolean", { type: Boolean }).def(d.bool) }, get string() { return (0, c.toType)("string", { type: String }).def(d.string) }, get number() { return (0, c.toType)("number", { type: Number }).def(d.number) }, get array() { return (0, c.toType)("array", { type: Array }).def(d.array) }, get object() { return (0, c.toType)("object", { type: Object }).def(d.object) }, get integer() { return (0, c.toType)("integer", { type: Number, validator: function(t) { return (0, c.isInteger)(t) } }).def(d.integer) }, get symbol() { return (0, c.toType)("symbol", { type: null, validator: function(t) { return "symbol" === (void 0 === t ? "undefined" : (0, r.default)(t)) } }) }, custom: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "custom validation failed"; if ("function" != typeof t) throw new TypeError("[VueTypes error]: You must provide a function as argument"); return (0, c.toType)(t.name || "<<anonymous function>>", { validator: function() { var n = t.apply(void 0, arguments); return n || (0, c.warn)(this._vueTypes_name + " - " + e), n } }) }, oneOf: function(t) { if (!(0, c.isArray)(t)) throw new TypeError("[VueTypes error]: You must provide an array as argument"); var e = 'oneOf - value should be one of "' + t.join('", "') + '"',
                                    n = t.reduce((function(t, e) { return null != e && -1 === t.indexOf(e.constructor) && t.push(e.constructor), t }), []); return (0, c.toType)("oneOf", { type: n.length > 0 ? n : null, validator: function(n) { var r = -1 !== t.indexOf(n); return r || (0, c.warn)(e), r } }) }, instanceOf: function(t) { return (0, c.toType)("instanceOf", { type: t }) }, oneOfType: function(t) { if (!(0, c.isArray)(t)) throw new TypeError("[VueTypes error]: You must provide an array as argument"); var e = !1,
                                    n = t.reduce((function(t, n) { if ((0, o.default)(n)) { if ("oneOf" === n._vueTypes_name) return t.concat(n.type || []); if (n.type && !(0, c.isFunction)(n.validator)) { if ((0, c.isArray)(n.type)) return t.concat(n.type);
                                                t.push(n.type) } else(0, c.isFunction)(n.validator) && (e = !0); return t } return t.push(n), t }), []); if (!e) return (0, c.toType)("oneOfType", { type: n }).def(void 0); var r = t.map((function(t) { return t && (0, c.isArray)(t.type) ? t.type.map(c.getType) : (0, c.getType)(t) })).reduce((function(t, e) { return t.concat((0, c.isArray)(e) ? e : [e]) }), []).join('", "'); return this.custom((function(e) { var n = t.some((function(t) { return "oneOf" === t._vueTypes_name ? !t.type || (0, c.validateType)(t.type, e, !0) : (0, c.validateType)(t, e, !0) })); return n || (0, c.warn)('oneOfType - value type should be one of "' + r + '"'), n })).def(void 0) }, arrayOf: function(t) { return (0, c.toType)("arrayOf", { type: Array, validator: function(e) { var n = e.every((function(e) { return (0, c.validateType)(t, e) })); return n || (0, c.warn)('arrayOf - value must be an array of "' + (0, c.getType)(t) + '"'), n } }) }, objectOf: function(t) { return (0, c.toType)("objectOf", { type: Object, validator: function(e) { var n = Object.keys(e).every((function(n) { return (0, c.validateType)(t, e[n]) })); return n || (0, c.warn)('objectOf - value must be an object of "' + (0, c.getType)(t) + '"'), n } }) }, shape: function(t) { var e = Object.keys(t),
                                    n = e.filter((function(e) { return t[e] && !0 === t[e].required })),
                                    r = (0, c.toType)("shape", { type: Object, validator: function(r) { var l = this; if (!(0, o.default)(r)) return !1; var f = Object.keys(r); return n.length > 0 && n.some((function(t) { return -1 === f.indexOf(t) })) ? ((0, c.warn)('shape - at least one of required properties "' + n.join('", "') + '" is not present'), !1) : f.every((function(n) { if (-1 === e.indexOf(n)) return !0 === l._vueTypes_isLoose || ((0, c.warn)('shape - object is missing "' + n + '" property'), !1); var o = t[n]; return (0, c.validateType)(o, r[n]) })) } }); return Object.defineProperty(r, "_vueTypes_isLoose", { enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() { return this._vueTypes_isLoose = !0, this }, enumerable: !1 }), r } },
                        d = { func: void 0, bool: void 0, string: void 0, number: void 0, array: void 0, object: void 0, integer: void 0 };
                    Object.defineProperty(f, "sensibleDefaults", { enumerable: !1, set: function(t) {!1 === t ? d = {} : !0 === t ? d = { func: void 0, bool: void 0, string: void 0, number: void 0, array: void 0, object: void 0, integer: void 0 } : (0, o.default)(t) && (d = t) }, get: function() { return d } }), e.default = f }, function(t, e, n) { "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.getAllChildren = e.getAllProps = e.getSlot = e.getSlots = e.camelize = e.isValidElement = e.initDefaultProps = e.parseStyleText = e.getValueByProp = e.getAttrs = e.getKey = e.getPropsData = e.slotHasProp = e.getSlotOptions = e.getComponentFromProp = e.getOptionProps = e.filterProps = e.hasProp = void 0; var r = d(n(102)),
                        o = d(n(420)),
                        c = d(n(20));
                    e.getEvents = function(t) { var e = {};
                        t.componentOptions && t.componentOptions.listeners ? e = t.componentOptions.listeners : t.data && t.data.on && (e = t.data.on); return (0, c.default)({}, e) }, e.getDataEvents = function(t) { var e = {};
                        t.data && t.data.on && (e = t.data.on); return (0, c.default)({}, e) }, e.getListeners = function(t) { return (t.$vnode ? t.$vnode.componentOptions.listeners : t.$listeners) || {} }, e.getClass = function(t) { var data = {};
                        t.data ? data = t.data : t.$vnode && t.$vnode.data && (data = t.$vnode.data); var e = data.class || {},
                            n = data.staticClass,
                            r = {};
                        n && n.split(" ").forEach((function(t) { r[t.trim()] = !0 })), "string" == typeof e ? e.split(" ").forEach((function(t) { r[t.trim()] = !0 })) : Array.isArray(e) ? (0, f.default)(e).split(" ").forEach((function(t) { r[t.trim()] = !0 })) : r = (0, c.default)({}, r, e); return r }, e.getStyle = function(t, e) { var data = {};
                        t.data ? data = t.data : t.$vnode && t.$vnode.data && (data = t.$vnode.data); var style = data.style || data.staticStyle; if ("string" == typeof style) style = y(style, e);
                        else if (e && style) { var n = {}; return Object.keys(style).forEach((function(t) { return n[m(t)] = style[t] })), n } return style }, e.getComponentName = function(t) { return t && (t.Ctor.options.name || t.tag) }, e.isEmptyElement = S, e.isStringElement = function(t) { return !t.tag }, e.filterEmpty = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return t.filter((function(t) { return !S(t) })) }, e.mergeProps = function() { var t = [].slice.call(arguments, 0),
                            e = {}; return t.forEach((function() { var p = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = !0,
                                n = !1,
                                r = void 0; try { for (var f, d = Object.entries(p)[Symbol.iterator](); !(t = (f = d.next()).done); t = !0) { var h = f.value,
                                        m = (0, o.default)(h, 2),
                                        y = m[0],
                                        v = m[1];
                                    e[y] = e[y] || {}, (0, l.default)(v) ? (0, c.default)(e[y], v) : e[y] = v } } catch (t) { n = !0, r = t } finally { try {!t && d.return && d.return() } finally { if (n) throw r } } })), e }; var l = d(n(302)),
                        f = d(n(86));

                    function d(t) { return t && t.__esModule ? t : { default: t } } var h = /-(\w)/g,
                        m = function(t) { return t.replace(h, (function(t, e) { return e ? e.toUpperCase() : "" })) },
                        y = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = arguments[1],
                                n = {},
                                r = /;(?![^(]*\))/g,
                                o = /:(.+)/; return t.split(r).forEach((function(t) { if (t) { var r = t.split(o); if (r.length > 1) { var c = e ? m(r[0].trim()) : r[0].trim();
                                        n[c] = r[1].trim() } } })), n },
                        v = function(t, e) { return e in ((t.$options || {}).propsData || {}) },
                        w = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = {}; return Object.keys(t).forEach((function(r) {
                                (r in e || void 0 !== t[r]) && (n[r] = t[r]) })), n },
                        k = function(t) { return t.data && t.data.scopedSlots || {} },
                        x = function(t) { var e = t.componentOptions; return t.$vnode && (e = t.$vnode.componentOptions), e && e.propsData || {} };

                    function S(t) { return !(t.tag || t.text && "" !== t.text.trim()) }
                    e.hasProp = v, e.filterProps = w, e.getOptionProps = function(t) { if (t.componentOptions) { var e = t.componentOptions,
                                n = e.propsData,
                                r = void 0 === n ? {} : n,
                                l = e.Ctor,
                                f = ((void 0 === l ? {} : l).options || {}).props || {},
                                d = {},
                                h = !0,
                                m = !1,
                                y = void 0; try { for (var v, k = Object.entries(f)[Symbol.iterator](); !(h = (v = k.next()).done); h = !0) { var x = v.value,
                                        S = (0, o.default)(x, 2),
                                        _ = S[0],
                                        E = S[1],
                                        A = E.default;
                                    void 0 !== A && (d[_] = "function" == typeof A && "Function" !== (O = E.type, M = void 0, (M = O && O.toString().match(/^\s*function (\w+)/)) ? M[1] : "") ? A.call(t) : A) } } catch (t) { m = !0, y = t } finally { try {!h && k.return && k.return() } finally { if (m) throw y } } return (0, c.default)({}, d, r) } var O, M, I = t.$options,
                            P = void 0 === I ? {} : I,
                            T = t.$props; return w(void 0 === T ? {} : T, P.propsData) }, e.getComponentFromProp = function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]; if (t.$createElement) { var o = t.$createElement,
                                c = t[e]; return void 0 !== c ? "function" == typeof c && r ? c(o, n) : c : t.$scopedSlots[e] && r && t.$scopedSlots[e](n) || t.$scopedSlots[e] || t.$slots[e] || void 0 } var l = t.context.$createElement,
                            f = x(t)[e]; if (void 0 !== f) return "function" == typeof f && r ? f(l, n) : f; var d = k(t)[e]; if (void 0 !== d) return "function" == typeof d && r ? d(l, n) : d; var h = [],
                            m = t.componentOptions || {}; return (m.children || []).forEach((function(t) { t.data && t.data.slot === e && (t.data.attrs && delete t.data.attrs.slot, "template" === t.tag ? h.push(t.children) : h.push(t)) })), h.length ? h : void 0 }, e.getSlotOptions = function(t) { if (t.fnOptions) return t.fnOptions; var e = t.componentOptions; return t.$vnode && (e = t.$vnode.componentOptions), e && e.Ctor.options || {} }, e.slotHasProp = function(slot, t) { return t in ((slot.componentOptions || {}).propsData || {}) }, e.getPropsData = x, e.getKey = function(t) { var e = t.key; return t.$vnode && (e = t.$vnode.key), e }, e.getAttrs = function(t) { var data = t.data; return t.$vnode && (data = t.$vnode.data), data && data.attrs || {} }, e.getValueByProp = function(t, e) { return x(t)[e] }, e.parseStyleText = y, e.initDefaultProps = function(t, e) { return Object.keys(e).forEach((function(n) { if (!t[n]) throw new Error("not have " + n + " prop");
                            t[n].def && (t[n] = t[n].def(e[n])) })), t }, e.isValidElement = function(element) { return element && "object" === (void 0 === element ? "undefined" : (0, r.default)(element)) && "componentOptions" in element && "context" in element && void 0 !== element.tag }, e.camelize = m, e.getSlots = function(t) { var e = t.componentOptions || {};
                        t.$vnode && (e = t.$vnode.componentOptions || {}); var n = t.children || e.children || [],
                            r = {}; return n.forEach((function(t) { if (!S(t)) { var e = t.data && t.data.slot || "default";
                                r[e] = r[e] || [], r[e].push(t) } })), (0, c.default)({}, r, k(t)) }, e.getSlot = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; return t.$scopedSlots && t.$scopedSlots[e] && t.$scopedSlots[e](n) || t.$slots[e] || [] }, e.getAllProps = function(t) { var data = t.data || {},
                            e = t.componentOptions || {}; return t.$vnode && (data = t.$vnode.data || {}, e = t.$vnode.componentOptions || {}), (0, c.default)({}, data.props, data.attrs, e.propsData) }, e.getAllChildren = function(t) { var e = t.componentOptions || {}; return t.$vnode && (e = t.$vnode.componentOptions || {}), t.children || e.children || [] }, e.default = v }, function(t, e, n) { "use strict";
                    n.d(e, "a", (function() { return r })), n.d(e, "b", (function() { return h })), n.d(e, "c", (function() { return l })), n.d(e, "d", (function() { return o })), n.d(e, "e", (function() { return c }));
                    n(71), n(41), n(56), n(89), n(90), n(123), n(1143), n(156), n(95); var r = function(t, e) { return e },
                        o = function(t, e) { return e },
                        c = function(t, e) { return e },
                        l = function(t) { return {} },
                        f = function t(e, n) { return e[n[0]] ? t(e[n[0]], n.slice(1)) : e },
                        d = function t(e, input, n) { var r = function(t, e) { var n = e.getters,
                                    r = e.state,
                                    o = e.mutations,
                                    c = e.actions,
                                    l = e.namespaced,
                                    d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                                    h = d && l ? "".concat(d, "/") : "",
                                    m = {};
                                Object.keys(n || {}).forEach((function(e) { Object.defineProperty(m, e, { get: function() { return t.getters["".concat(h).concat(e)] } }) })); var y = r ? "function" == typeof r ? r() : r : {}; return Object.keys(y).forEach((function(e) { if (!Object.getOwnPropertyNames(m).includes(e)) { var n = d.split("/");
                                        Object.defineProperty(m, e, { get: function() { return f(t.state, n)[e] } }) } })), Object.keys(o || {}).forEach((function(e) { m[e] = function(n) { return t.commit("".concat(h).concat(e), n) } })), Object.keys(c || {}).forEach((function(e) { m[e] = function(n) { return t.dispatch("".concat(h).concat(e), n) } })), m }(e, input, n); return Object.keys(input.modules || {}).forEach((function(o) { var c = n ? "".concat(n, "/").concat(o) : o;
                                r[o] = t(e, input.modules[o], c) })), r },
                        h = function(pattern) { return function(t) { return d(t, pattern._modules.root._rawModule) } } }, , function(t, e, n) { "use strict";
                    t.exports = function(t) { var e = []; return e.toString = function() { return this.map((function(e) { var content = function(t, e) { var content = t[1] || "",
                                        n = t[3]; if (!n) return content; if (e && "function" == typeof btoa) { var r = (c = n, l = btoa(unescape(encodeURIComponent(JSON.stringify(c)))), data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(data, " */")),
                                            o = n.sources.map((function(source) { return "/*# sourceURL=".concat(n.sourceRoot || "").concat(source, " */") })); return [content].concat(o).concat([r]).join("\n") } var c, l, data; return [content].join("\n") }(e, t); return e[2] ? "@media ".concat(e[2], " {").concat(content, "}") : content })).join("") }, e.i = function(t, n, r) { "string" == typeof t && (t = [
                                [null, t, ""]
                            ]); var o = {}; if (r)
                                for (var i = 0; i < this.length; i++) { var c = this[i][0];
                                    null != c && (o[c] = !0) }
                            for (var l = 0; l < t.length; l++) { var f = [].concat(t[l]);
                                r && o[f[0]] || (n && (f[2] ? f[2] = "".concat(n, " and ").concat(f[2]) : f[2] = n), e.push(f)) } }, e } }, function(t, e, n) { "use strict";

                    function r(t, e) { for (var n = [], r = {}, i = 0; i < e.length; i++) { var o = e[i],
                                c = o[0],
                                l = { id: t + ":" + i, css: o[1], media: o[2], sourceMap: o[3] };
                            r[c] ? r[c].parts.push(l) : n.push(r[c] = { id: c, parts: [l] }) } return n }
                    n.r(e), n.d(e, "default", (function() { return w })); var o = "undefined" != typeof document; if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."); var c = {},
                        head = o && (document.head || document.getElementsByTagName("head")[0]),
                        l = null,
                        f = 0,
                        d = !1,
                        h = function() {},
                        m = null,
                        y = "data-vue-ssr-id",
                        v = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                    function w(t, e, n, o) { d = n, m = o || {}; var l = r(t, e); return k(l),
                            function(e) { for (var n = [], i = 0; i < l.length; i++) { var o = l[i];
                                    (f = c[o.id]).refs--, n.push(f) }
                                e ? k(l = r(t, e)) : l = []; for (i = 0; i < n.length; i++) { var f; if (0 === (f = n[i]).refs) { for (var d = 0; d < f.parts.length; d++) f.parts[d]();
                                        delete c[f.id] } } } }

                    function k(t) { for (var i = 0; i < t.length; i++) { var e = t[i],
                                n = c[e.id]; if (n) { n.refs++; for (var r = 0; r < n.parts.length; r++) n.parts[r](e.parts[r]); for (; r < e.parts.length; r++) n.parts.push(S(e.parts[r]));
                                n.parts.length > e.parts.length && (n.parts.length = e.parts.length) } else { var o = []; for (r = 0; r < e.parts.length; r++) o.push(S(e.parts[r]));
                                c[e.id] = { id: e.id, refs: 1, parts: o } } } }

                    function x() { var t = document.createElement("style"); return t.type = "text/css", head.appendChild(t), t }

                    function S(t) { var e, n, r = document.querySelector("style[" + y + '~="' + t.id + '"]'); if (r) { if (d) return h;
                            r.parentNode.removeChild(r) } if (v) { var o = f++;
                            r = l || (l = x()), e = A.bind(null, r, o, !1), n = A.bind(null, r, o, !0) } else r = x(), e = O.bind(null, r), n = function() { r.parentNode.removeChild(r) }; return e(t),
                            function(r) { if (r) { if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
                                    e(t = r) } else n() } } var _, E = (_ = [], function(t, e) { return _[t] = e, _.filter(Boolean).join("\n") });

                    function A(t, e, n, r) { var o = n ? "" : r.css; if (t.styleSheet) t.styleSheet.cssText = E(e, o);
                        else { var c = document.createTextNode(o),
                                l = t.childNodes;
                            l[e] && t.removeChild(l[e]), l.length ? t.insertBefore(c, l[e]) : t.appendChild(c) } }

                    function O(t, e) { var n = e.css,
                            r = e.media,
                            o = e.sourceMap; if (r && t.setAttribute("media", r), m.ssrId && t.setAttribute(y, e.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
                        else { for (; t.firstChild;) t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(n)) } } }, , , function(t, e, n) { var r = n(1e3);
                    t.exports = r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz") }, function(t, e, n) { "use strict";
                    e.__esModule = !0; var r, o = n(471),
                        c = (r = o) && r.__esModule ? r : { default: r };
                    e.default = function(t, e, n) { return e in t ? (0, c.default)(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } }, , , , , , , function(t, e, n) {! function(t, e, n, r, o, c) { "use strict";

                        function l(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } } var f = l(e),
                            d = l(n);
                        d.default.registerHooks(["beforeRouteEnter", "beforeRouteUpdate", "beforeRouteLeave", "asyncData", "fetch", "fetchOnServer", "head", "key", "layout", "loading", "middleware", "scrollToTop", "transition", "validate", "watchQuery", "meta"]); var h = /\B([A-Z])/g,
                            m = function(t) { return t.replace(h, "-$1").toLowerCase() };

                        function y(t, e) { return function(n, r, o) { r = m(r); var c = o.value;
                                o.value = function() { for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o]; if (!1 !== c.apply(this, n))
                                        if (e) { if ("function" != typeof this[e]) throw new TypeError("must be a method name");
                                            this.$off(t || r, this[e]) } else t ? this.$off(t || r) : this.$off() } } }

                        function v(t) { return n.createDecorator((function(e, n) { var r = m(n); "function" != typeof e.created && (e.created = function() {}); var o = e.created;
                                e.created = function() { o(), void 0 !== e.methods && this.$on(t || r, e.methods[n]) } })) }

                        function w(t) { return n.createDecorator((function(e, n) { var r = m(n); "function" != typeof e.created && (e.created = function() {}); var o = e.created;
                                e.created = function() { o(), void 0 !== e.methods && this.$once(t || r, e.methods[n]) } })) }

                        function k(t) { return function(e, n, r) { var o = r.value;
                                r.value = function() { for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]; if (!1 !== o.apply(this, e)) { if ("function" != typeof this[t]) throw new TypeError("must be a method name");
                                        this.$nextTick(this[t]) } } } }
                        Object.defineProperty(t, "Vue", { enumerable: !0, get: function() { return f.default } }), Object.defineProperty(t, "Component", { enumerable: !0, get: function() { return d.default } }), Object.defineProperty(t, "mixins", { enumerable: !0, get: function() { return n.mixins } }), Object.defineProperty(t, "Module", { enumerable: !0, get: function() { return r.Module } }), Object.defineProperty(t, "MutationAction", { enumerable: !0, get: function() { return r.MutationAction } }), Object.defineProperty(t, "VuexAction", { enumerable: !0, get: function() { return r.Action } }), Object.defineProperty(t, "VuexModule", { enumerable: !0, get: function() { return r.VuexModule } }), Object.defineProperty(t, "VuexMutation", { enumerable: !0, get: function() { return r.Mutation } }), Object.defineProperty(t, "getModule", { enumerable: !0, get: function() { return r.getModule } }), Object.defineProperty(t, "Action", { enumerable: !0, get: function() { return o.Action } }), Object.defineProperty(t, "Getter", { enumerable: !0, get: function() { return o.Getter } }), Object.defineProperty(t, "Mutation", { enumerable: !0, get: function() { return o.Mutation } }), Object.defineProperty(t, "State", { enumerable: !0, get: function() { return o.State } }), Object.defineProperty(t, "namespace", { enumerable: !0, get: function() { return o.namespace } }), Object.defineProperty(t, "Emit", { enumerable: !0, get: function() { return c.Emit } }), Object.defineProperty(t, "Inject", { enumerable: !0, get: function() { return c.Inject } }), Object.defineProperty(t, "InjectReactive", { enumerable: !0, get: function() { return c.InjectReactive } }), Object.defineProperty(t, "Model", { enumerable: !0, get: function() { return c.Model } }), Object.defineProperty(t, "ModelSync", { enumerable: !0, get: function() { return c.ModelSync } }), Object.defineProperty(t, "Prop", { enumerable: !0, get: function() { return c.Prop } }), Object.defineProperty(t, "PropSync", { enumerable: !0, get: function() { return c.PropSync } }), Object.defineProperty(t, "Provide", { enumerable: !0, get: function() { return c.Provide } }), Object.defineProperty(t, "ProvideReactive", { enumerable: !0, get: function() { return c.ProvideReactive } }), Object.defineProperty(t, "Ref", { enumerable: !0, get: function() { return c.Ref } }), Object.defineProperty(t, "VModel", { enumerable: !0, get: function() { return c.VModel } }), Object.defineProperty(t, "Watch", { enumerable: !0, get: function() { return c.Watch } }), t.NextTick = k, t.Off = y, t.On = v, t.Once = w, Object.defineProperty(t, "__esModule", { value: !0 }) }(e, n(10), n(39), n(727), n(1214), n(1213)) }, , function(t, e, n) { "use strict";
                    n.r(e), n.d(e, "createDecorator", (function() { return y })), n.d(e, "mixins", (function() { return v })); var r = n(10);

                    function o(t) { return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

                    function c(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

                    function l(t) { return function(t) { if (Array.isArray(t)) { for (var i = 0, e = new Array(t.length); i < t.length; i++) e[i] = t[i]; return e } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

                    function f() { return "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys }

                    function d(t, e) { h(t, e), Object.getOwnPropertyNames(e.prototype).forEach((function(n) { h(t.prototype, e.prototype, n) })), Object.getOwnPropertyNames(e).forEach((function(n) { h(t, e, n) })) }

                    function h(t, e, n) {
                        (n ? Reflect.getOwnMetadataKeys(e, n) : Reflect.getOwnMetadataKeys(e)).forEach((function(r) { var o = n ? Reflect.getOwnMetadata(r, e, n) : Reflect.getOwnMetadata(r, e);
                            n ? Reflect.defineMetadata(r, o, t, n) : Reflect.defineMetadata(r, o, t) })) } var m = { __proto__: [] }
                    instanceof Array;

                    function y(t) { return function(e, n, r) { var o = "function" == typeof e ? e : e.constructor;
                            o.__decorators__ || (o.__decorators__ = []), "number" != typeof r && (r = void 0), o.__decorators__.push((function(e) { return t(e, n, r) })) } }

                    function v() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return r.default.extend({ mixins: e }) }

                    function w(t, e) { var n = e.prototype._init;
                        e.prototype._init = function() { var e = this,
                                n = Object.getOwnPropertyNames(t); if (t.$options.props)
                                for (var r in t.$options.props) t.hasOwnProperty(r) || n.push(r);
                            n.forEach((function(n) { Object.defineProperty(e, n, { get: function() { return t[n] }, set: function(e) { t[n] = e }, configurable: !0 }) })) }; var data = new e;
                        e.prototype._init = n; var r = {}; return Object.keys(data).forEach((function(t) { void 0 !== data[t] && (r[t] = data[t]) })), r } var k = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];

                    function x(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e.name = e.name || t._componentTag || t.name; var n = t.prototype;
                        Object.getOwnPropertyNames(n).forEach((function(t) { if ("constructor" !== t)
                                if (k.indexOf(t) > -1) e[t] = n[t];
                                else { var r = Object.getOwnPropertyDescriptor(n, t);
                                    void 0 !== r.value ? "function" == typeof r.value ? (e.methods || (e.methods = {}))[t] = r.value : (e.mixins || (e.mixins = [])).push({ data: function() { return c({}, t, r.value) } }) : (r.get || r.set) && ((e.computed || (e.computed = {}))[t] = { get: r.get, set: r.set }) } })), (e.mixins || (e.mixins = [])).push({ data: function() { return w(this, t) } }); var o = t.__decorators__;
                        o && (o.forEach((function(t) { return t(e) })), delete t.__decorators__); var l = Object.getPrototypeOf(t.prototype),
                            h = l instanceof r.default ? l.constructor : r.default,
                            m = h.extend(e); return _(m, t, h), f() && d(m, t), m } var S = { prototype: !0, arguments: !0, callee: !0, caller: !0 };

                    function _(t, e, n) { Object.getOwnPropertyNames(e).forEach((function(r) { if (!S[r]) { var c = Object.getOwnPropertyDescriptor(t, r); if (!c || c.configurable) { var l, f, d = Object.getOwnPropertyDescriptor(e, r); if (!m) { if ("cid" === r) return; var h = Object.getOwnPropertyDescriptor(n, r); if (l = d.value, f = o(l), null != l && ("object" === f || "function" === f) && h && h.value === d.value) return }
                                    0, Object.defineProperty(t, r, d) } } })) }

                    function E(t) { return "function" == typeof t ? x(t) : function(e) { return x(e, t) } }
                    E.registerHooks = function(t) { k.push.apply(k, l(t)) }, e.default = E }, , , , , , , , function(t, e, n) {! function(t) { "use strict"; var e = function(t) { var i, e = new Float64Array(16); if (t)
                                    for (i = 0; i < t.length; i++) e[i] = t[i]; return e },
                            r = function() { throw new Error("no PRNG") },
                            o = new Uint8Array(16),
                            c = new Uint8Array(32);
                        c[0] = 9; var l = e(),
                            f = e([1]),
                            d = e([56129, 1]),
                            h = e([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                            m = e([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                            y = e([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                            v = e([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                            w = e([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                        function k(t, i, e, n) { t[i] = e >> 24 & 255, t[i + 1] = e >> 16 & 255, t[i + 2] = e >> 8 & 255, t[i + 3] = 255 & e, t[i + 4] = n >> 24 & 255, t[i + 5] = n >> 16 & 255, t[i + 6] = n >> 8 & 255, t[i + 7] = 255 & n }

                        function x(t, e, n, r, o) { var i, c = 0; for (i = 0; i < o; i++) c |= t[e + i] ^ n[r + i]; return (1 & c - 1 >>> 8) - 1 }

                        function S(t, e, n, r) { return x(t, e, n, r, 16) }

                        function _(t, e, n, r) { return x(t, e, n, r, 32) }

                        function E(t, e, n, r) {! function(t, p, e, n) { for (var u, r = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, o = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, c = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, l = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, f = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, d = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, h = 255 & p[0] | (255 & p[1]) << 8 | (255 & p[2]) << 16 | (255 & p[3]) << 24, m = 255 & p[4] | (255 & p[5]) << 8 | (255 & p[6]) << 16 | (255 & p[7]) << 24, y = 255 & p[8] | (255 & p[9]) << 8 | (255 & p[10]) << 16 | (255 & p[11]) << 24, v = 255 & p[12] | (255 & p[13]) << 8 | (255 & p[14]) << 16 | (255 & p[15]) << 24, w = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, k = 255 & e[16] | (255 & e[17]) << 8 | (255 & e[18]) << 16 | (255 & e[19]) << 24, x = 255 & e[20] | (255 & e[21]) << 8 | (255 & e[22]) << 16 | (255 & e[23]) << 24, S = 255 & e[24] | (255 & e[25]) << 8 | (255 & e[26]) << 16 | (255 & e[27]) << 24, _ = 255 & e[28] | (255 & e[29]) << 8 | (255 & e[30]) << 16 | (255 & e[31]) << 24, E = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, A = r, O = o, M = c, I = l, P = f, T = d, C = h, j = m, R = y, z = v, B = w, N = k, L = x, U = S, D = _, W = E, i = 0; i < 20; i += 2) A ^= (u = (L ^= (u = (R ^= (u = (P ^= (u = A + L | 0) << 7 | u >>> 25) + A | 0) << 9 | u >>> 23) + P | 0) << 13 | u >>> 19) + R | 0) << 18 | u >>> 14, T ^= (u = (O ^= (u = (U ^= (u = (z ^= (u = T + O | 0) << 7 | u >>> 25) + T | 0) << 9 | u >>> 23) + z | 0) << 13 | u >>> 19) + U | 0) << 18 | u >>> 14, B ^= (u = (C ^= (u = (M ^= (u = (D ^= (u = B + C | 0) << 7 | u >>> 25) + B | 0) << 9 | u >>> 23) + D | 0) << 13 | u >>> 19) + M | 0) << 18 | u >>> 14, W ^= (u = (N ^= (u = (j ^= (u = (I ^= (u = W + N | 0) << 7 | u >>> 25) + W | 0) << 9 | u >>> 23) + I | 0) << 13 | u >>> 19) + j | 0) << 18 | u >>> 14, A ^= (u = (I ^= (u = (M ^= (u = (O ^= (u = A + I | 0) << 7 | u >>> 25) + A | 0) << 9 | u >>> 23) + O | 0) << 13 | u >>> 19) + M | 0) << 18 | u >>> 14, T ^= (u = (P ^= (u = (j ^= (u = (C ^= (u = T + P | 0) << 7 | u >>> 25) + T | 0) << 9 | u >>> 23) + C | 0) << 13 | u >>> 19) + j | 0) << 18 | u >>> 14, B ^= (u = (z ^= (u = (R ^= (u = (N ^= (u = B + z | 0) << 7 | u >>> 25) + B | 0) << 9 | u >>> 23) + N | 0) << 13 | u >>> 19) + R | 0) << 18 | u >>> 14, W ^= (u = (D ^= (u = (U ^= (u = (L ^= (u = W + D | 0) << 7 | u >>> 25) + W | 0) << 9 | u >>> 23) + L | 0) << 13 | u >>> 19) + U | 0) << 18 | u >>> 14;
                                A = A + r | 0, O = O + o | 0, M = M + c | 0, I = I + l | 0, P = P + f | 0, T = T + d | 0, C = C + h | 0, j = j + m | 0, R = R + y | 0, z = z + v | 0, B = B + w | 0, N = N + k | 0, L = L + x | 0, U = U + S | 0, D = D + _ | 0, W = W + E | 0, t[0] = A >>> 0 & 255, t[1] = A >>> 8 & 255, t[2] = A >>> 16 & 255, t[3] = A >>> 24 & 255, t[4] = O >>> 0 & 255, t[5] = O >>> 8 & 255, t[6] = O >>> 16 & 255, t[7] = O >>> 24 & 255, t[8] = M >>> 0 & 255, t[9] = M >>> 8 & 255, t[10] = M >>> 16 & 255, t[11] = M >>> 24 & 255, t[12] = I >>> 0 & 255, t[13] = I >>> 8 & 255, t[14] = I >>> 16 & 255, t[15] = I >>> 24 & 255, t[16] = P >>> 0 & 255, t[17] = P >>> 8 & 255, t[18] = P >>> 16 & 255, t[19] = P >>> 24 & 255, t[20] = T >>> 0 & 255, t[21] = T >>> 8 & 255, t[22] = T >>> 16 & 255, t[23] = T >>> 24 & 255, t[24] = C >>> 0 & 255, t[25] = C >>> 8 & 255, t[26] = C >>> 16 & 255, t[27] = C >>> 24 & 255, t[28] = j >>> 0 & 255, t[29] = j >>> 8 & 255, t[30] = j >>> 16 & 255, t[31] = j >>> 24 & 255, t[32] = R >>> 0 & 255, t[33] = R >>> 8 & 255, t[34] = R >>> 16 & 255, t[35] = R >>> 24 & 255, t[36] = z >>> 0 & 255, t[37] = z >>> 8 & 255, t[38] = z >>> 16 & 255, t[39] = z >>> 24 & 255, t[40] = B >>> 0 & 255, t[41] = B >>> 8 & 255, t[42] = B >>> 16 & 255, t[43] = B >>> 24 & 255, t[44] = N >>> 0 & 255, t[45] = N >>> 8 & 255, t[46] = N >>> 16 & 255, t[47] = N >>> 24 & 255, t[48] = L >>> 0 & 255, t[49] = L >>> 8 & 255, t[50] = L >>> 16 & 255, t[51] = L >>> 24 & 255, t[52] = U >>> 0 & 255, t[53] = U >>> 8 & 255, t[54] = U >>> 16 & 255, t[55] = U >>> 24 & 255, t[56] = D >>> 0 & 255, t[57] = D >>> 8 & 255, t[58] = D >>> 16 & 255, t[59] = D >>> 24 & 255, t[60] = W >>> 0 & 255, t[61] = W >>> 8 & 255, t[62] = W >>> 16 & 255, t[63] = W >>> 24 & 255 }(t, e, n, r) }

                        function A(t, e, n, r) {! function(t, p, e, n) { for (var u, r = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, o = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, c = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, l = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, f = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, d = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, h = 255 & p[0] | (255 & p[1]) << 8 | (255 & p[2]) << 16 | (255 & p[3]) << 24, m = 255 & p[4] | (255 & p[5]) << 8 | (255 & p[6]) << 16 | (255 & p[7]) << 24, y = 255 & p[8] | (255 & p[9]) << 8 | (255 & p[10]) << 16 | (255 & p[11]) << 24, v = 255 & p[12] | (255 & p[13]) << 8 | (255 & p[14]) << 16 | (255 & p[15]) << 24, w = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, k = 255 & e[16] | (255 & e[17]) << 8 | (255 & e[18]) << 16 | (255 & e[19]) << 24, x = 255 & e[20] | (255 & e[21]) << 8 | (255 & e[22]) << 16 | (255 & e[23]) << 24, S = 255 & e[24] | (255 & e[25]) << 8 | (255 & e[26]) << 16 | (255 & e[27]) << 24, _ = 255 & e[28] | (255 & e[29]) << 8 | (255 & e[30]) << 16 | (255 & e[31]) << 24, E = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, i = 0; i < 20; i += 2) r ^= (u = (x ^= (u = (y ^= (u = (f ^= (u = r + x | 0) << 7 | u >>> 25) + r | 0) << 9 | u >>> 23) + f | 0) << 13 | u >>> 19) + y | 0) << 18 | u >>> 14, d ^= (u = (o ^= (u = (S ^= (u = (v ^= (u = d + o | 0) << 7 | u >>> 25) + d | 0) << 9 | u >>> 23) + v | 0) << 13 | u >>> 19) + S | 0) << 18 | u >>> 14, w ^= (u = (h ^= (u = (c ^= (u = (_ ^= (u = w + h | 0) << 7 | u >>> 25) + w | 0) << 9 | u >>> 23) + _ | 0) << 13 | u >>> 19) + c | 0) << 18 | u >>> 14, E ^= (u = (k ^= (u = (m ^= (u = (l ^= (u = E + k | 0) << 7 | u >>> 25) + E | 0) << 9 | u >>> 23) + l | 0) << 13 | u >>> 19) + m | 0) << 18 | u >>> 14, r ^= (u = (l ^= (u = (c ^= (u = (o ^= (u = r + l | 0) << 7 | u >>> 25) + r | 0) << 9 | u >>> 23) + o | 0) << 13 | u >>> 19) + c | 0) << 18 | u >>> 14, d ^= (u = (f ^= (u = (m ^= (u = (h ^= (u = d + f | 0) << 7 | u >>> 25) + d | 0) << 9 | u >>> 23) + h | 0) << 13 | u >>> 19) + m | 0) << 18 | u >>> 14, w ^= (u = (v ^= (u = (y ^= (u = (k ^= (u = w + v | 0) << 7 | u >>> 25) + w | 0) << 9 | u >>> 23) + k | 0) << 13 | u >>> 19) + y | 0) << 18 | u >>> 14, E ^= (u = (_ ^= (u = (S ^= (u = (x ^= (u = E + _ | 0) << 7 | u >>> 25) + E | 0) << 9 | u >>> 23) + x | 0) << 13 | u >>> 19) + S | 0) << 18 | u >>> 14;
                                t[0] = r >>> 0 & 255, t[1] = r >>> 8 & 255, t[2] = r >>> 16 & 255, t[3] = r >>> 24 & 255, t[4] = d >>> 0 & 255, t[5] = d >>> 8 & 255, t[6] = d >>> 16 & 255, t[7] = d >>> 24 & 255, t[8] = w >>> 0 & 255, t[9] = w >>> 8 & 255, t[10] = w >>> 16 & 255, t[11] = w >>> 24 & 255, t[12] = E >>> 0 & 255, t[13] = E >>> 8 & 255, t[14] = E >>> 16 & 255, t[15] = E >>> 24 & 255, t[16] = h >>> 0 & 255, t[17] = h >>> 8 & 255, t[18] = h >>> 16 & 255, t[19] = h >>> 24 & 255, t[20] = m >>> 0 & 255, t[21] = m >>> 8 & 255, t[22] = m >>> 16 & 255, t[23] = m >>> 24 & 255, t[24] = y >>> 0 & 255, t[25] = y >>> 8 & 255, t[26] = y >>> 16 & 255, t[27] = y >>> 24 & 255, t[28] = v >>> 0 & 255, t[29] = v >>> 8 & 255, t[30] = v >>> 16 & 255, t[31] = v >>> 24 & 255 }(t, e, n, r) } var O = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

                        function M(t, e, n, r, b, o, c) { var u, i, l = new Uint8Array(16),
                                f = new Uint8Array(64); for (i = 0; i < 16; i++) l[i] = 0; for (i = 0; i < 8; i++) l[i] = o[i]; for (; b >= 64;) { for (E(f, l, c, O), i = 0; i < 64; i++) t[e + i] = n[r + i] ^ f[i]; for (u = 1, i = 8; i < 16; i++) u = u + (255 & l[i]) | 0, l[i] = 255 & u, u >>>= 8;
                                b -= 64, e += 64, r += 64 } if (b > 0)
                                for (E(f, l, c, O), i = 0; i < b; i++) t[e + i] = n[r + i] ^ f[i]; return 0 }

                        function I(t, e, b, n, r) { var u, i, o = new Uint8Array(16),
                                c = new Uint8Array(64); for (i = 0; i < 16; i++) o[i] = 0; for (i = 0; i < 8; i++) o[i] = n[i]; for (; b >= 64;) { for (E(c, o, r, O), i = 0; i < 64; i++) t[e + i] = c[i]; for (u = 1, i = 8; i < 16; i++) u = u + (255 & o[i]) | 0, o[i] = 255 & u, u >>>= 8;
                                b -= 64, e += 64 } if (b > 0)
                                for (E(c, o, r, O), i = 0; i < b; i++) t[e + i] = c[i]; return 0 }

                        function P(t, e, n, r, o) { var s = new Uint8Array(32);
                            A(s, r, o, O); for (var c = new Uint8Array(8), i = 0; i < 8; i++) c[i] = r[i + 16]; return I(t, e, n, c, s) }

                        function T(t, e, n, r, o, c, l) { var s = new Uint8Array(32);
                            A(s, c, l, O); for (var f = new Uint8Array(8), i = 0; i < 8; i++) f[i] = c[i + 16]; return M(t, e, n, r, o, f, s) } var C = function(t) { var e, n, r, o, c, l, f, d;
                            this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, e = 255 & t[0] | (255 & t[1]) << 8, this.r[0] = 8191 & e, n = 255 & t[2] | (255 & t[3]) << 8, this.r[1] = 8191 & (e >>> 13 | n << 3), r = 255 & t[4] | (255 & t[5]) << 8, this.r[2] = 7939 & (n >>> 10 | r << 6), o = 255 & t[6] | (255 & t[7]) << 8, this.r[3] = 8191 & (r >>> 7 | o << 9), c = 255 & t[8] | (255 & t[9]) << 8, this.r[4] = 255 & (o >>> 4 | c << 12), this.r[5] = c >>> 1 & 8190, l = 255 & t[10] | (255 & t[11]) << 8, this.r[6] = 8191 & (c >>> 14 | l << 2), f = 255 & t[12] | (255 & t[13]) << 8, this.r[7] = 8065 & (l >>> 11 | f << 5), d = 255 & t[14] | (255 & t[15]) << 8, this.r[8] = 8191 & (f >>> 8 | d << 8), this.r[9] = d >>> 5 & 127, this.pad[0] = 255 & t[16] | (255 & t[17]) << 8, this.pad[1] = 255 & t[18] | (255 & t[19]) << 8, this.pad[2] = 255 & t[20] | (255 & t[21]) << 8, this.pad[3] = 255 & t[22] | (255 & t[23]) << 8, this.pad[4] = 255 & t[24] | (255 & t[25]) << 8, this.pad[5] = 255 & t[26] | (255 & t[27]) << 8, this.pad[6] = 255 & t[28] | (255 & t[29]) << 8, this.pad[7] = 255 & t[30] | (255 & t[31]) << 8 };

                        function j(t, e, n, r, o, c) { var s = new C(c); return s.update(n, r, o), s.finish(t, e), 0 }

                        function R(t, e, n, r, o, c) { var l = new Uint8Array(16); return j(l, 0, n, r, o, c), S(t, e, l, 0) }

                        function z(t, e, n, r, o) { var i; if (n < 32) return -1; for (T(t, 0, e, 0, n, r, o), j(t, 16, t, 32, n - 32, t), i = 0; i < 16; i++) t[i] = 0; return 0 }

                        function B(t, e, n, r, o) { var i, c = new Uint8Array(32); if (n < 32) return -1; if (P(c, 0, 32, r, o), 0 !== R(e, 16, e, 32, n - 32, c)) return -1; for (T(t, 0, e, 0, n, r, o), i = 0; i < 32; i++) t[i] = 0; return 0 }

                        function N(t, a) { var i; for (i = 0; i < 16; i++) t[i] = 0 | a[i] }

                        function L(t) { var i, e, n = 1; for (i = 0; i < 16; i++) e = t[i] + n + 65535, n = Math.floor(e / 65536), t[i] = e - 65536 * n;
                            t[0] += n - 1 + 37 * (n - 1) }

                        function U(p, q, b) { for (var t, e = ~(b - 1), i = 0; i < 16; i++) t = e & (p[i] ^ q[i]), p[i] ^= t, q[i] ^= t }

                        function D(t, n) { var i, r, b, o = e(),
                                c = e(); for (i = 0; i < 16; i++) c[i] = n[i]; for (L(c), L(c), L(c), r = 0; r < 2; r++) { for (o[0] = c[0] - 65517, i = 1; i < 15; i++) o[i] = c[i] - 65535 - (o[i - 1] >> 16 & 1), o[i - 1] &= 65535;
                                o[15] = c[15] - 32767 - (o[14] >> 16 & 1), b = o[15] >> 16 & 1, o[14] &= 65535, U(c, o, 1 - b) } for (i = 0; i < 16; i++) t[2 * i] = 255 & c[i], t[2 * i + 1] = c[i] >> 8 }

                        function W(a, b) { var t = new Uint8Array(32),
                                e = new Uint8Array(32); return D(t, a), D(e, b), _(t, 0, e, 0) }

                        function F(a) { var t = new Uint8Array(32); return D(t, a), 1 & t[0] }

                        function $(t, e) { var i; for (i = 0; i < 16; i++) t[i] = e[2 * i] + (e[2 * i + 1] << 8);
                            t[15] &= 32767 }

                        function K(t, a, b) { for (var i = 0; i < 16; i++) t[i] = a[i] + b[i] }

                        function V(t, a, b) { for (var i = 0; i < 16; i++) t[i] = a[i] - b[i] }

                        function H(t, a, b) { var e, n, r = 0,
                                o = 0,
                                c = 0,
                                l = 0,
                                f = 0,
                                d = 0,
                                h = 0,
                                m = 0,
                                y = 0,
                                v = 0,
                                w = 0,
                                k = 0,
                                x = 0,
                                S = 0,
                                _ = 0,
                                E = 0,
                                A = 0,
                                O = 0,
                                M = 0,
                                I = 0,
                                P = 0,
                                T = 0,
                                C = 0,
                                j = 0,
                                R = 0,
                                z = 0,
                                B = 0,
                                N = 0,
                                L = 0,
                                U = 0,
                                D = 0,
                                W = b[0],
                                F = b[1],
                                $ = b[2],
                                K = b[3],
                                V = b[4],
                                H = b[5],
                                Z = b[6],
                                G = b[7],
                                Y = b[8],
                                X = b[9],
                                Q = b[10],
                                J = b[11],
                                tt = b[12],
                                et = b[13],
                                nt = b[14],
                                ot = b[15];
                            r += (e = a[0]) * W, o += e * F, c += e * $, l += e * K, f += e * V, d += e * H, h += e * Z, m += e * G, y += e * Y, v += e * X, w += e * Q, k += e * J, x += e * tt, S += e * et, _ += e * nt, E += e * ot, o += (e = a[1]) * W, c += e * F, l += e * $, f += e * K, d += e * V, h += e * H, m += e * Z, y += e * G, v += e * Y, w += e * X, k += e * Q, x += e * J, S += e * tt, _ += e * et, E += e * nt, A += e * ot, c += (e = a[2]) * W, l += e * F, f += e * $, d += e * K, h += e * V, m += e * H, y += e * Z, v += e * G, w += e * Y, k += e * X, x += e * Q, S += e * J, _ += e * tt, E += e * et, A += e * nt, O += e * ot, l += (e = a[3]) * W, f += e * F, d += e * $, h += e * K, m += e * V, y += e * H, v += e * Z, w += e * G, k += e * Y, x += e * X, S += e * Q, _ += e * J, E += e * tt, A += e * et, O += e * nt, M += e * ot, f += (e = a[4]) * W, d += e * F, h += e * $, m += e * K, y += e * V, v += e * H, w += e * Z, k += e * G, x += e * Y, S += e * X, _ += e * Q, E += e * J, A += e * tt, O += e * et, M += e * nt, I += e * ot, d += (e = a[5]) * W, h += e * F, m += e * $, y += e * K, v += e * V, w += e * H, k += e * Z, x += e * G, S += e * Y, _ += e * X, E += e * Q, A += e * J, O += e * tt, M += e * et, I += e * nt, P += e * ot, h += (e = a[6]) * W, m += e * F, y += e * $, v += e * K, w += e * V, k += e * H, x += e * Z, S += e * G, _ += e * Y, E += e * X, A += e * Q, O += e * J, M += e * tt, I += e * et, P += e * nt, T += e * ot, m += (e = a[7]) * W, y += e * F, v += e * $, w += e * K, k += e * V, x += e * H, S += e * Z, _ += e * G, E += e * Y, A += e * X, O += e * Q, M += e * J, I += e * tt, P += e * et, T += e * nt, C += e * ot, y += (e = a[8]) * W, v += e * F, w += e * $, k += e * K, x += e * V, S += e * H, _ += e * Z, E += e * G, A += e * Y, O += e * X, M += e * Q, I += e * J, P += e * tt, T += e * et, C += e * nt, j += e * ot, v += (e = a[9]) * W, w += e * F, k += e * $, x += e * K, S += e * V, _ += e * H, E += e * Z, A += e * G, O += e * Y, M += e * X, I += e * Q, P += e * J, T += e * tt, C += e * et, j += e * nt, R += e * ot, w += (e = a[10]) * W, k += e * F, x += e * $, S += e * K, _ += e * V, E += e * H, A += e * Z, O += e * G, M += e * Y, I += e * X, P += e * Q, T += e * J, C += e * tt, j += e * et, R += e * nt, z += e * ot, k += (e = a[11]) * W, x += e * F, S += e * $, _ += e * K, E += e * V, A += e * H, O += e * Z, M += e * G, I += e * Y, P += e * X, T += e * Q, C += e * J, j += e * tt, R += e * et, z += e * nt, B += e * ot, x += (e = a[12]) * W, S += e * F, _ += e * $, E += e * K, A += e * V, O += e * H, M += e * Z, I += e * G, P += e * Y, T += e * X, C += e * Q, j += e * J, R += e * tt, z += e * et, B += e * nt, N += e * ot, S += (e = a[13]) * W, _ += e * F, E += e * $, A += e * K, O += e * V, M += e * H, I += e * Z, P += e * G, T += e * Y, C += e * X, j += e * Q, R += e * J, z += e * tt, B += e * et, N += e * nt, L += e * ot, _ += (e = a[14]) * W, E += e * F, A += e * $, O += e * K, M += e * V, I += e * H, P += e * Z, T += e * G, C += e * Y, j += e * X, R += e * Q, z += e * J, B += e * tt, N += e * et, L += e * nt, U += e * ot, E += (e = a[15]) * W, o += 38 * (O += e * $), c += 38 * (M += e * K), l += 38 * (I += e * V), f += 38 * (P += e * H), d += 38 * (T += e * Z), h += 38 * (C += e * G), m += 38 * (j += e * Y), y += 38 * (R += e * X), v += 38 * (z += e * Q), w += 38 * (B += e * J), k += 38 * (N += e * tt), x += 38 * (L += e * et), S += 38 * (U += e * nt), _ += 38 * (D += e * ot), r = (e = (r += 38 * (A += e * F)) + (n = 1) + 65535) - 65536 * (n = Math.floor(e / 65536)), o = (e = o + n + 65535) - 65536 * (n = Math.floor(e / 65536)), c = (e = c + n + 65535) - 65536 * (n = Math.floor(e / 65536)), l = (e = l + n + 65535) - 65536 * (n = Math.floor(e / 65536)), f = (e = f + n + 65535) - 65536 * (n = Math.floor(e / 65536)), d = (e = d + n + 65535) - 65536 * (n = Math.floor(e / 65536)), h = (e = h + n + 65535) - 65536 * (n = Math.floor(e / 65536)), m = (e = m + n + 65535) - 65536 * (n = Math.floor(e / 65536)), y = (e = y + n + 65535) - 65536 * (n = Math.floor(e / 65536)), v = (e = v + n + 65535) - 65536 * (n = Math.floor(e / 65536)), w = (e = w + n + 65535) - 65536 * (n = Math.floor(e / 65536)), k = (e = k + n + 65535) - 65536 * (n = Math.floor(e / 65536)), x = (e = x + n + 65535) - 65536 * (n = Math.floor(e / 65536)), S = (e = S + n + 65535) - 65536 * (n = Math.floor(e / 65536)), _ = (e = _ + n + 65535) - 65536 * (n = Math.floor(e / 65536)), E = (e = E + n + 65535) - 65536 * (n = Math.floor(e / 65536)), r = (e = (r += n - 1 + 37 * (n - 1)) + (n = 1) + 65535) - 65536 * (n = Math.floor(e / 65536)), o = (e = o + n + 65535) - 65536 * (n = Math.floor(e / 65536)), c = (e = c + n + 65535) - 65536 * (n = Math.floor(e / 65536)), l = (e = l + n + 65535) - 65536 * (n = Math.floor(e / 65536)), f = (e = f + n + 65535) - 65536 * (n = Math.floor(e / 65536)), d = (e = d + n + 65535) - 65536 * (n = Math.floor(e / 65536)), h = (e = h + n + 65535) - 65536 * (n = Math.floor(e / 65536)), m = (e = m + n + 65535) - 65536 * (n = Math.floor(e / 65536)), y = (e = y + n + 65535) - 65536 * (n = Math.floor(e / 65536)), v = (e = v + n + 65535) - 65536 * (n = Math.floor(e / 65536)), w = (e = w + n + 65535) - 65536 * (n = Math.floor(e / 65536)), k = (e = k + n + 65535) - 65536 * (n = Math.floor(e / 65536)), x = (e = x + n + 65535) - 65536 * (n = Math.floor(e / 65536)), S = (e = S + n + 65535) - 65536 * (n = Math.floor(e / 65536)), _ = (e = _ + n + 65535) - 65536 * (n = Math.floor(e / 65536)), E = (e = E + n + 65535) - 65536 * (n = Math.floor(e / 65536)), r += n - 1 + 37 * (n - 1), t[0] = r, t[1] = o, t[2] = c, t[3] = l, t[4] = f, t[5] = d, t[6] = h, t[7] = m, t[8] = y, t[9] = v, t[10] = w, t[11] = k, t[12] = x, t[13] = S, t[14] = _, t[15] = E }

                        function Z(t, a) { H(t, a, a) }

                        function G(t, i) { var a, n = e(); for (a = 0; a < 16; a++) n[a] = i[a]; for (a = 253; a >= 0; a--) Z(n, n), 2 !== a && 4 !== a && H(n, n, i); for (a = 0; a < 16; a++) t[a] = n[a] }

                        function Y(t, i) { var a, n = e(); for (a = 0; a < 16; a++) n[a] = i[a]; for (a = 250; a >= 0; a--) Z(n, n), 1 !== a && H(n, n, i); for (a = 0; a < 16; a++) t[a] = n[a] }

                        function X(q, t, p) { var n, i, r = new Uint8Array(32),
                                o = new Float64Array(80),
                                a = e(),
                                b = e(),
                                c = e(),
                                l = e(),
                                f = e(),
                                h = e(); for (i = 0; i < 31; i++) r[i] = t[i]; for (r[31] = 127 & t[31] | 64, r[0] &= 248, $(o, p), i = 0; i < 16; i++) b[i] = o[i], l[i] = a[i] = c[i] = 0; for (a[0] = l[0] = 1, i = 254; i >= 0; --i) U(a, b, n = r[i >>> 3] >>> (7 & i) & 1), U(c, l, n), K(f, a, c), V(a, a, c), K(c, b, l), V(b, b, l), Z(l, f), Z(h, a), H(a, c, a), H(c, b, f), K(f, a, c), V(a, a, c), Z(b, a), V(c, l, h), H(a, c, d), K(a, a, l), H(c, c, a), H(a, l, h), H(l, b, o), Z(b, f), U(a, b, n), U(c, l, n); for (i = 0; i < 16; i++) o[i + 16] = a[i], o[i + 32] = c[i], o[i + 48] = b[i], o[i + 64] = l[i]; var m = o.subarray(32),
                                y = o.subarray(16); return G(m, m), H(y, y, m), D(q, y), 0 }

                        function Q(q, t) { return X(q, t, c) }

                        function J(t, e) { return r(e, 32), Q(t, e) }

                        function tt(t, e, n) { var s = new Uint8Array(32); return X(s, n, e), A(t, o, s, O) }
                        C.prototype.blocks = function(t, e, n) { for (var r, o, c, l, f, d, h, m, y, v, w, k, x, S, _, E, A, O, M, I = this.fin ? 0 : 2048, P = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], T = this.h[7], C = this.h[8], j = this.h[9], R = this.r[0], z = this.r[1], B = this.r[2], N = this.r[3], L = this.r[4], U = this.r[5], D = this.r[6], W = this.r[7], F = this.r[8], $ = this.r[9]; n >= 16;) v = y = 0, v += (P += 8191 & (r = 255 & t[e + 0] | (255 & t[e + 1]) << 8)) * R, v += (h1 += 8191 & (r >>> 13 | (o = 255 & t[e + 2] | (255 & t[e + 3]) << 8) << 3)) * (5 * $), v += (h2 += 8191 & (o >>> 10 | (c = 255 & t[e + 4] | (255 & t[e + 5]) << 8) << 6)) * (5 * F), v += (h3 += 8191 & (c >>> 7 | (l = 255 & t[e + 6] | (255 & t[e + 7]) << 8) << 9)) * (5 * W), y = (v += (h4 += 8191 & (l >>> 4 | (f = 255 & t[e + 8] | (255 & t[e + 9]) << 8) << 12)) * (5 * D)) >>> 13, v &= 8191, v += (h5 += f >>> 1 & 8191) * (5 * U), v += (h6 += 8191 & (f >>> 14 | (d = 255 & t[e + 10] | (255 & t[e + 11]) << 8) << 2)) * (5 * L), v += (T += 8191 & (d >>> 11 | (h = 255 & t[e + 12] | (255 & t[e + 13]) << 8) << 5)) * (5 * N), v += (C += 8191 & (h >>> 8 | (m = 255 & t[e + 14] | (255 & t[e + 15]) << 8) << 8)) * (5 * B), w = y += (v += (j += m >>> 5 | I) * (5 * z)) >>> 13, w += P * z, w += h1 * R, w += h2 * (5 * $), w += h3 * (5 * F), y = (w += h4 * (5 * W)) >>> 13, w &= 8191, w += h5 * (5 * D), w += h6 * (5 * U), w += T * (5 * L), w += C * (5 * N), y += (w += j * (5 * B)) >>> 13, w &= 8191, k = y, k += P * B, k += h1 * z, k += h2 * R, k += h3 * (5 * $), y = (k += h4 * (5 * F)) >>> 13, k &= 8191, k += h5 * (5 * W), k += h6 * (5 * D), k += T * (5 * U), k += C * (5 * L), x = y += (k += j * (5 * N)) >>> 13, x += P * N, x += h1 * B, x += h2 * z, x += h3 * R, y = (x += h4 * (5 * $)) >>> 13, x &= 8191, x += h5 * (5 * F), x += h6 * (5 * W), x += T * (5 * D), x += C * (5 * U), S = y += (x += j * (5 * L)) >>> 13, S += P * L, S += h1 * N, S += h2 * B, S += h3 * z, y = (S += h4 * R) >>> 13, S &= 8191, S += h5 * (5 * $), S += h6 * (5 * F), S += T * (5 * W), S += C * (5 * D), _ = y += (S += j * (5 * U)) >>> 13, _ += P * U, _ += h1 * L, _ += h2 * N, _ += h3 * B, y = (_ += h4 * z) >>> 13, _ &= 8191, _ += h5 * R, _ += h6 * (5 * $), _ += T * (5 * F), _ += C * (5 * W), E = y += (_ += j * (5 * D)) >>> 13, E += P * D, E += h1 * U, E += h2 * L, E += h3 * N, y = (E += h4 * B) >>> 13, E &= 8191, E += h5 * z, E += h6 * R, E += T * (5 * $), E += C * (5 * F), A = y += (E += j * (5 * W)) >>> 13, A += P * W, A += h1 * D, A += h2 * U, A += h3 * L, y = (A += h4 * N) >>> 13, A &= 8191, A += h5 * B, A += h6 * z, A += T * R, A += C * (5 * $), O = y += (A += j * (5 * F)) >>> 13, O += P * F, O += h1 * W, O += h2 * D, O += h3 * U, y = (O += h4 * L) >>> 13, O &= 8191, O += h5 * N, O += h6 * B, O += T * z, O += C * R, M = y += (O += j * (5 * $)) >>> 13, M += P * $, M += h1 * F, M += h2 * W, M += h3 * D, y = (M += h4 * U) >>> 13, M &= 8191, M += h5 * L, M += h6 * N, M += T * B, M += C * z, P = v = 8191 & (y = (y = ((y += (M += j * R) >>> 13) << 2) + y | 0) + (v &= 8191) | 0), h1 = w += y >>>= 13, h2 = k &= 8191, h3 = x &= 8191, h4 = S &= 8191, h5 = _ &= 8191, h6 = E &= 8191, T = A &= 8191, C = O &= 8191, j = M &= 8191, e += 16, n -= 16;
                            this.h[0] = P, this.h[1] = h1, this.h[2] = h2, this.h[3] = h3, this.h[4] = h4, this.h[5] = h5, this.h[6] = h6, this.h[7] = T, this.h[8] = C, this.h[9] = j }, C.prototype.finish = function(t, e) { var n, mask, r, i, g = new Uint16Array(10); if (this.leftover) { for (i = this.leftover, this.buffer[i++] = 1; i < 16; i++) this.buffer[i] = 0;
                                this.fin = 1, this.blocks(this.buffer, 0, 16) } for (n = this.h[1] >>> 13, this.h[1] &= 8191, i = 2; i < 10; i++) this.h[i] += n, n = this.h[i] >>> 13, this.h[i] &= 8191; for (this.h[0] += 5 * n, n = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += n, n = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += n, g[0] = this.h[0] + 5, n = g[0] >>> 13, g[0] &= 8191, i = 1; i < 10; i++) g[i] = this.h[i] + n, n = g[i] >>> 13, g[i] &= 8191; for (g[9] -= 8192, mask = (1 ^ n) - 1, i = 0; i < 10; i++) g[i] &= mask; for (mask = ~mask, i = 0; i < 10; i++) this.h[i] = this.h[i] & mask | g[i]; for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), r = this.h[0] + this.pad[0], this.h[0] = 65535 & r, i = 1; i < 8; i++) r = (this.h[i] + this.pad[i] | 0) + (r >>> 16) | 0, this.h[i] = 65535 & r;
                            t[e + 0] = this.h[0] >>> 0 & 255, t[e + 1] = this.h[0] >>> 8 & 255, t[e + 2] = this.h[1] >>> 0 & 255, t[e + 3] = this.h[1] >>> 8 & 255, t[e + 4] = this.h[2] >>> 0 & 255, t[e + 5] = this.h[2] >>> 8 & 255, t[e + 6] = this.h[3] >>> 0 & 255, t[e + 7] = this.h[3] >>> 8 & 255, t[e + 8] = this.h[4] >>> 0 & 255, t[e + 9] = this.h[4] >>> 8 & 255, t[e + 10] = this.h[5] >>> 0 & 255, t[e + 11] = this.h[5] >>> 8 & 255, t[e + 12] = this.h[6] >>> 0 & 255, t[e + 13] = this.h[6] >>> 8 & 255, t[e + 14] = this.h[7] >>> 0 & 255, t[e + 15] = this.h[7] >>> 8 & 255 }, C.prototype.update = function(t, e, n) { var i, r; if (this.leftover) { for ((r = 16 - this.leftover) > n && (r = n), i = 0; i < r; i++) this.buffer[this.leftover + i] = t[e + i]; if (n -= r, e += r, this.leftover += r, this.leftover < 16) return;
                                this.blocks(this.buffer, 0, 16), this.leftover = 0 } if (n >= 16 && (r = n - n % 16, this.blocks(t, e, r), e += r, n -= r), n) { for (i = 0; i < n; i++) this.buffer[this.leftover + i] = t[e + i];
                                this.leftover += n } }; var et = z,
                            nt = B; var ot = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                        function it(t, e, n, r) { for (var o, c, l, f, d, h, m, y, v, w, k, x, S, _, E, A, th, O, i, M, I, P, a, b, T, C, j = new Int32Array(16), R = new Int32Array(16), z = t[0], B = t[1], N = t[2], L = t[3], U = t[4], D = t[5], W = t[6], F = t[7], $ = e[0], K = e[1], V = e[2], H = e[3], Z = e[4], G = e[5], Y = e[6], X = e[7], Q = 0; r >= 128;) { for (i = 0; i < 16; i++) M = 8 * i + Q, j[i] = n[M + 0] << 24 | n[M + 1] << 16 | n[M + 2] << 8 | n[M + 3], R[i] = n[M + 4] << 24 | n[M + 5] << 16 | n[M + 6] << 8 | n[M + 7]; for (i = 0; i < 80; i++)
                                    if (o = z, c = B, l = N, f = L, d = U, h = D, m = W, F, v = $, w = K, k = V, x = H, S = Z, _ = G, E = Y, X, a = 65535 & (P = X), b = P >>> 16, T = 65535 & (I = F), C = I >>> 16, a += 65535 & (P = (Z >>> 14 | U << 18) ^ (Z >>> 18 | U << 14) ^ (U >>> 9 | Z << 23)), b += P >>> 16, T += 65535 & (I = (U >>> 14 | Z << 18) ^ (U >>> 18 | Z << 14) ^ (Z >>> 9 | U << 23)), C += I >>> 16, a += 65535 & (P = Z & G ^ ~Z & Y), b += P >>> 16, T += 65535 & (I = U & D ^ ~U & W), C += I >>> 16, a += 65535 & (P = ot[2 * i + 1]), b += P >>> 16, T += 65535 & (I = ot[2 * i]), C += I >>> 16, I = j[i % 16], b += (P = R[i % 16]) >>> 16, T += 65535 & I, C += I >>> 16, T += (b += (a += 65535 & P) >>> 16) >>> 16, a = 65535 & (P = O = 65535 & a | b << 16), b = P >>> 16, T = 65535 & (I = th = 65535 & T | (C += T >>> 16) << 16), C = I >>> 16, a += 65535 & (P = ($ >>> 28 | z << 4) ^ (z >>> 2 | $ << 30) ^ (z >>> 7 | $ << 25)), b += P >>> 16, T += 65535 & (I = (z >>> 28 | $ << 4) ^ ($ >>> 2 | z << 30) ^ ($ >>> 7 | z << 25)), C += I >>> 16, b += (P = $ & K ^ $ & V ^ K & V) >>> 16, T += 65535 & (I = z & B ^ z & N ^ B & N), C += I >>> 16, y = 65535 & (T += (b += (a += 65535 & P) >>> 16) >>> 16) | (C += T >>> 16) << 16, A = 65535 & a | b << 16, a = 65535 & (P = x), b = P >>> 16, T = 65535 & (I = f), C = I >>> 16, b += (P = O) >>> 16, T += 65535 & (I = th), C += I >>> 16, B = o, N = c, L = l, U = f = 65535 & (T += (b += (a += 65535 & P) >>> 16) >>> 16) | (C += T >>> 16) << 16, D = d, W = h, F = m, z = y, K = v, V = w, H = k, Z = x = 65535 & a | b << 16, G = S, Y = _, X = E, $ = A, i % 16 == 15)
                                        for (M = 0; M < 16; M++) I = j[M], a = 65535 & (P = R[M]), b = P >>> 16, T = 65535 & I, C = I >>> 16, I = j[(M + 9) % 16], a += 65535 & (P = R[(M + 9) % 16]), b += P >>> 16, T += 65535 & I, C += I >>> 16, th = j[(M + 1) % 16], a += 65535 & (P = ((O = R[(M + 1) % 16]) >>> 1 | th << 31) ^ (O >>> 8 | th << 24) ^ (O >>> 7 | th << 25)), b += P >>> 16, T += 65535 & (I = (th >>> 1 | O << 31) ^ (th >>> 8 | O << 24) ^ th >>> 7), C += I >>> 16, th = j[(M + 14) % 16], b += (P = ((O = R[(M + 14) % 16]) >>> 19 | th << 13) ^ (th >>> 29 | O << 3) ^ (O >>> 6 | th << 26)) >>> 16, T += 65535 & (I = (th >>> 19 | O << 13) ^ (O >>> 29 | th << 3) ^ th >>> 6), C += I >>> 16, C += (T += (b += (a += 65535 & P) >>> 16) >>> 16) >>> 16, j[M] = 65535 & T | C << 16, R[M] = 65535 & a | b << 16;
                                a = 65535 & (P = $), b = P >>> 16, T = 65535 & (I = z), C = I >>> 16, I = t[0], b += (P = e[0]) >>> 16, T += 65535 & I, C += I >>> 16, C += (T += (b += (a += 65535 & P) >>> 16) >>> 16) >>> 16, t[0] = z = 65535 & T | C << 16, e[0] = $ = 65535 & a | b << 16, a = 65535 & (P = K), b = P >>> 16, T = 65535 & (I = B), C = I >>> 16, I = t[1], b += (P = e[1]) >>> 16, T += 65535 & I, C += I >>> 16, C += (T += (b += (a += 65535 & P) >>> 16) >>> 16) >>> 16, t[1] = B = 65535 & T | C << 16, e[1] = K = 65535 & a | b << 16, a = 65535 & (P = V), b = P >>> 16, T = 65535 & (I = N), C = I >>> 16, I = t[2], b += (P = e[2]) >>> 16, T += 65535 & I, C += I >>> 16, C += (T += (b += (a += 65535 & P) >>> 16) >>> 16) >>> 16, t[2] = N = 65535 & T | C << 16, e[2] = V = 65535 & a | b << 16, a = 65535 & (P = H), b = P >>> 16, T = 65535 & (I = L), C = I >>> 16, I = t[3], b += (P = e[3]) >>> 16, T += 65535 & I, C += I >>> 16, C += (T += (b += (a += 65535 & P) >>> 16) >>> 16) >>> 16, t[3] = L = 65535 & T | C << 16, e[3] = H = 65535 & a | b << 16, a = 65535 & (P = Z), b = P >>> 16, T = 65535 & (I = U), C = I >>> 16, I = t[4], b += (P = e[4]) >>> 16, T += 65535 & I, C += I >>> 16, C += (T += (b += (a += 65535 & P) >>> 16) >>> 16) >>> 16, t[4] = U = 65535 & T | C << 16, e[4] = Z = 65535 & a | b << 16, a = 65535 & (P = G), b = P >>> 16, T = 65535 & (I = D), C = I >>> 16, I = t[5], b += (P = e[5]) >>> 16, T += 65535 & I, C += I >>> 16, C += (T += (b += (a += 65535 & P) >>> 16) >>> 16) >>> 16, t[5] = D = 65535 & T | C << 16, e[5] = G = 65535 & a | b << 16, a = 65535 & (P = Y), b = P >>> 16, T = 65535 & (I = W), C = I >>> 16, I = t[6], b += (P = e[6]) >>> 16, T += 65535 & I, C += I >>> 16, C += (T += (b += (a += 65535 & P) >>> 16) >>> 16) >>> 16, t[6] = W = 65535 & T | C << 16, e[6] = Y = 65535 & a | b << 16, a = 65535 & (P = X), b = P >>> 16, T = 65535 & (I = F), C = I >>> 16, I = t[7], b += (P = e[7]) >>> 16, T += 65535 & I, C += I >>> 16, C += (T += (b += (a += 65535 & P) >>> 16) >>> 16) >>> 16, t[7] = F = 65535 & T | C << 16, e[7] = X = 65535 & a | b << 16, Q += 128, r -= 128 } return r }

                        function at(t, e, n) { var i, r = new Int32Array(8),
                                o = new Int32Array(8),
                                c = new Uint8Array(256),
                                b = n; for (r[0] = 1779033703, r[1] = 3144134277, r[2] = 1013904242, r[3] = 2773480762, r[4] = 1359893119, r[5] = 2600822924, r[6] = 528734635, r[7] = 1541459225, o[0] = 4089235720, o[1] = 2227873595, o[2] = 4271175723, o[3] = 1595750129, o[4] = 2917565137, o[5] = 725511199, o[6] = 4215389547, o[7] = 327033209, it(r, o, e, n), n %= 128, i = 0; i < n; i++) c[i] = e[b - n + i]; for (c[n] = 128, c[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0, k(c, n - 8, b / 536870912 | 0, b << 3), it(r, o, c, n), i = 0; i < 8; i++) k(t, 8 * i, r[i], o[i]); return 0 }

                        function st(p, q) { var a = e(),
                                b = e(),
                                t = e(),
                                n = e(),
                                r = e(),
                                o = e(),
                                g = e(),
                                c = e(),
                                l = e();
                            V(a, p[1], p[0]), V(l, q[1], q[0]), H(a, a, l), K(b, p[0], p[1]), K(l, q[0], q[1]), H(b, b, l), H(t, p[3], q[3]), H(t, t, m), H(n, p[2], q[2]), K(n, n, n), V(r, b, a), V(o, n, t), K(g, n, t), K(c, b, a), H(p[0], r, o), H(p[1], c, g), H(p[2], g, o), H(p[3], r, c) }

                        function ut(p, q, b) { var i; for (i = 0; i < 4; i++) U(p[i], q[i], b) }

                        function ct(t, p) { var n = e(),
                                r = e(),
                                o = e();
                            G(o, p[2]), H(n, p[0], o), H(r, p[1], o), D(t, r), t[31] ^= F(n) << 7 }

                        function lt(p, q, s) { var b, i; for (N(p[0], l), N(p[1], f), N(p[2], f), N(p[3], l), i = 255; i >= 0; --i) ut(p, q, b = s[i / 8 | 0] >> (7 & i) & 1), st(q, p), st(p, p), ut(p, q, b) }

                        function ft(p, s) { var q = [e(), e(), e(), e()];
                            N(q[0], y), N(q[1], v), N(q[2], f), H(q[3], y, v), lt(p, q, s) }

                        function ht(t, n, o) { var i, c = new Uint8Array(64),
                                p = [e(), e(), e(), e()]; for (o || r(n, 32), at(c, n, 32), c[0] &= 248, c[31] &= 127, c[31] |= 64, ft(p, c), ct(t, p), i = 0; i < 32; i++) n[i + 32] = t[i]; return 0 } var pt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                        function bt(t, e) { var n, i, r, o; for (i = 63; i >= 32; --i) { for (n = 0, r = i - 32, o = i - 12; r < o; ++r) e[r] += n - 16 * e[i] * pt[r - (i - 32)], n = Math.floor((e[r] + 128) / 256), e[r] -= 256 * n;
                                e[r] += n, e[i] = 0 } for (n = 0, r = 0; r < 32; r++) e[r] += n - (e[31] >> 4) * pt[r], n = e[r] >> 8, e[r] &= 255; for (r = 0; r < 32; r++) e[r] -= n * pt[r]; for (i = 0; i < 32; i++) e[i + 1] += e[i] >> 8, t[i] = 255 & e[i] }

                        function mt(t) { var i, e = new Float64Array(64); for (i = 0; i < 64; i++) e[i] = t[i]; for (i = 0; i < 64; i++) t[i] = 0;
                            bt(t, e) }

                        function gt(t, n, r, o) { var i, c, l = new Uint8Array(64),
                                f = new Uint8Array(64),
                                d = new Uint8Array(64),
                                h = new Float64Array(64),
                                p = [e(), e(), e(), e()];
                            at(l, o, 32), l[0] &= 248, l[31] &= 127, l[31] |= 64; var m = r + 64; for (i = 0; i < r; i++) t[64 + i] = n[i]; for (i = 0; i < 32; i++) t[32 + i] = l[32 + i]; for (at(d, t.subarray(32), r + 32), mt(d), ft(p, d), ct(t, p), i = 32; i < 64; i++) t[i] = o[i]; for (at(f, t, r + 64), mt(f), i = 0; i < 64; i++) h[i] = 0; for (i = 0; i < 32; i++) h[i] = d[i]; for (i = 0; i < 32; i++)
                                for (c = 0; c < 32; c++) h[i + c] += f[i] * l[c]; return bt(t.subarray(32), h), m }

                        function yt(t, n, r, o) { var i, c = new Uint8Array(32),
                                d = new Uint8Array(64),
                                p = [e(), e(), e(), e()],
                                q = [e(), e(), e(), e()]; if (r < 64) return -1; if (function(t, p) { var n = e(),
                                        r = e(),
                                        o = e(),
                                        c = e(),
                                        d = e(),
                                        m = e(),
                                        y = e(); return N(t[2], f), $(t[1], p), Z(o, t[1]), H(c, o, h), V(o, o, t[2]), K(c, t[2], c), Z(d, c), Z(m, d), H(y, m, d), H(n, y, o), H(n, n, c), Y(n, n), H(n, n, o), H(n, n, c), H(n, n, c), H(t[0], n, c), Z(r, t[0]), H(r, r, c), W(r, o) && H(t[0], t[0], w), Z(r, t[0]), H(r, r, c), W(r, o) ? -1 : (F(t[0]) === p[31] >> 7 && V(t[0], l, t[0]), H(t[3], t[0], t[1]), 0) }(q, o)) return -1; for (i = 0; i < r; i++) t[i] = n[i]; for (i = 0; i < 32; i++) t[i + 32] = o[i]; if (at(d, t, r), mt(d), lt(p, q, d), ft(q, n.subarray(32)), st(p, q), ct(c, p), r -= 64, _(n, 0, c, 0)) { for (i = 0; i < r; i++) t[i] = 0; return -1 } for (i = 0; i < r; i++) t[i] = n[i + 64]; return r } var vt = 16,
                            wt = 64,
                            kt = 32,
                            xt = 64;

                        function St(t, e) { if (32 !== t.length) throw new Error("bad key size"); if (24 !== e.length) throw new Error("bad nonce size") }

                        function _t() { for (var i = 0; i < arguments.length; i++)
                                if (!(arguments[i] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array") }

                        function Et(t) { for (var i = 0; i < t.length; i++) t[i] = 0 }
                        t.lowlevel = { crypto_core_hsalsa20: A, crypto_stream_xor: T, crypto_stream: P, crypto_stream_salsa20_xor: M, crypto_stream_salsa20: I, crypto_onetimeauth: j, crypto_onetimeauth_verify: R, crypto_verify_16: S, crypto_verify_32: _, crypto_secretbox: z, crypto_secretbox_open: B, crypto_scalarmult: X, crypto_scalarmult_base: Q, crypto_box_beforenm: tt, crypto_box_afternm: et, crypto_box: function(t, e, n, r, o, c) { var l = new Uint8Array(32); return tt(l, o, c), et(t, e, n, r, l) }, crypto_box_open: function(t, e, n, r, o, c) { var l = new Uint8Array(32); return tt(l, o, c), nt(t, e, n, r, l) }, crypto_box_keypair: J, crypto_hash: at, crypto_sign: gt, crypto_sign_keypair: ht, crypto_sign_open: yt, crypto_secretbox_KEYBYTES: 32, crypto_secretbox_NONCEBYTES: 24, crypto_secretbox_ZEROBYTES: 32, crypto_secretbox_BOXZEROBYTES: vt, crypto_scalarmult_BYTES: 32, crypto_scalarmult_SCALARBYTES: 32, crypto_box_PUBLICKEYBYTES: 32, crypto_box_SECRETKEYBYTES: 32, crypto_box_BEFORENMBYTES: 32, crypto_box_NONCEBYTES: 24, crypto_box_ZEROBYTES: 32, crypto_box_BOXZEROBYTES: 16, crypto_sign_BYTES: wt, crypto_sign_PUBLICKEYBYTES: kt, crypto_sign_SECRETKEYBYTES: xt, crypto_sign_SEEDBYTES: 32, crypto_hash_BYTES: 64, gf: e, D: h, L: pt, pack25519: D, unpack25519: $, M: H, A: K, S: Z, Z: V, pow2523: Y, add: st, set25519: N, modL: bt, scalarmult: lt, scalarbase: ft }, t.randomBytes = function(t) { var b = new Uint8Array(t); return r(b, t), b }, t.secretbox = function(t, e, n) { _t(t, e, n), St(n, e); for (var r = new Uint8Array(32 + t.length), o = new Uint8Array(r.length), i = 0; i < t.length; i++) r[i + 32] = t[i]; return z(o, r, r.length, e, n), o.subarray(vt) }, t.secretbox.open = function(t, e, n) { _t(t, e, n), St(n, e); for (var r = new Uint8Array(vt + t.length), o = new Uint8Array(r.length), i = 0; i < t.length; i++) r[i + vt] = t[i]; return r.length < 32 || 0 !== B(o, r, r.length, e, n) ? null : o.subarray(32) }, t.secretbox.keyLength = 32, t.secretbox.nonceLength = 24, t.secretbox.overheadLength = vt, t.scalarMult = function(t, p) { if (_t(t, p), 32 !== t.length) throw new Error("bad n size"); if (32 !== p.length) throw new Error("bad p size"); var q = new Uint8Array(32); return X(q, t, p), q }, t.scalarMult.base = function(t) { if (_t(t), 32 !== t.length) throw new Error("bad n size"); var q = new Uint8Array(32); return Q(q, t), q }, t.scalarMult.scalarLength = 32, t.scalarMult.groupElementLength = 32, t.box = function(e, n, r, o) { var c = t.box.before(r, o); return t.secretbox(e, n, c) }, t.box.before = function(t, e) { _t(t, e),
                                    function(t, e) { if (32 !== t.length) throw new Error("bad public key size"); if (32 !== e.length) throw new Error("bad secret key size") }(t, e); var n = new Uint8Array(32); return tt(n, t, e), n }, t.box.after = t.secretbox, t.box.open = function(e, n, r, o) { var c = t.box.before(r, o); return t.secretbox.open(e, n, c) }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() { var t = new Uint8Array(32),
                                    e = new Uint8Array(32); return J(t, e), { publicKey: t, secretKey: e } }, t.box.keyPair.fromSecretKey = function(t) { if (_t(t), 32 !== t.length) throw new Error("bad secret key size"); var e = new Uint8Array(32); return Q(e, t), { publicKey: e, secretKey: new Uint8Array(t) } }, t.box.publicKeyLength = 32, t.box.secretKeyLength = 32, t.box.sharedKeyLength = 32, t.box.nonceLength = 24, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(t, e) { if (_t(t, e), e.length !== xt) throw new Error("bad secret key size"); var n = new Uint8Array(wt + t.length); return gt(n, t, t.length, e), n }, t.sign.open = function(t, e) { if (_t(t, e), e.length !== kt) throw new Error("bad public key size"); var n = new Uint8Array(t.length),
                                    r = yt(n, t, t.length, e); if (r < 0) return null; for (var o = new Uint8Array(r), i = 0; i < o.length; i++) o[i] = n[i]; return o }, t.sign.detached = function(e, n) { for (var r = t.sign(e, n), o = new Uint8Array(wt), i = 0; i < o.length; i++) o[i] = r[i]; return o }, t.sign.detached.verify = function(t, e, n) { if (_t(t, e, n), e.length !== wt) throw new Error("bad signature size"); if (n.length !== kt) throw new Error("bad public key size"); var i, r = new Uint8Array(wt + t.length),
                                    o = new Uint8Array(wt + t.length); for (i = 0; i < wt; i++) r[i] = e[i]; for (i = 0; i < t.length; i++) r[i + wt] = t[i]; return yt(o, r, r.length, n) >= 0 }, t.sign.keyPair = function() { var t = new Uint8Array(kt),
                                    e = new Uint8Array(xt); return ht(t, e), { publicKey: t, secretKey: e } }, t.sign.keyPair.fromSecretKey = function(t) { if (_t(t), t.length !== xt) throw new Error("bad secret key size"); for (var e = new Uint8Array(kt), i = 0; i < e.length; i++) e[i] = t[32 + i]; return { publicKey: e, secretKey: new Uint8Array(t) } }, t.sign.keyPair.fromSeed = function(t) { if (_t(t), 32 !== t.length) throw new Error("bad seed size"); for (var e = new Uint8Array(kt), n = new Uint8Array(xt), i = 0; i < 32; i++) n[i] = t[i]; return ht(e, n, !0), { publicKey: e, secretKey: n } }, t.sign.publicKeyLength = kt, t.sign.secretKeyLength = xt, t.sign.seedLength = 32, t.sign.signatureLength = wt, t.hash = function(t) { _t(t); var e = new Uint8Array(64); return at(e, t, t.length), e }, t.hash.hashLength = 64, t.verify = function(t, e) { return _t(t, e), 0 !== t.length && 0 !== e.length && (t.length === e.length && 0 === x(t, 0, e, 0, t.length)) }, t.setPRNG = function(t) { r = t },
                            function() { var e = "undefined" != typeof self ? self.crypto || self.msCrypto : null; if (e && e.getRandomValues) { t.setPRNG((function(t, n) { var i, r = new Uint8Array(n); for (i = 0; i < n; i += 65536) e.getRandomValues(r.subarray(i, i + Math.min(n - i, 65536))); for (i = 0; i < n; i++) t[i] = r[i];
                                        Et(r) })) } else(e = n(964)) && e.randomBytes && t.setPRNG((function(t, n) { var i, r = e.randomBytes(n); for (i = 0; i < n; i++) t[i] = r[i];
                                    Et(r) })) }() }(t.exports ? t.exports : self.nacl = self.nacl || {}) }, function(t, e, n) { "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }); var r = E(n(62)),
                        o = E(n(20)),
                        c = E(n(30)),
                        l = E(n(173)),
                        f = E(n(86)),
                        d = function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e.default = t, e }(n(798)),
                        h = E(n(612)),
                        m = E(n(21)),
                        y = E(n(825)),
                        v = n(826),
                        w = E(n(141)),
                        k = E(n(300)),
                        x = n(828),
                        S = n(22),
                        _ = E(n(75));

                    function E(t) { return t && t.__esModule ? t : { default: t } }
                    h.default.add.apply(h.default, (0, l.default)(Object.keys(d).map((function(t) { return d[t] })))), (0, x.setTwoToneColor)("#1890ff"); var A = { name: "AIcon", props: { tabIndex: m.default.number, type: m.default.string, component: m.default.any, viewBox: m.default.any, spin: m.default.bool.def(!1), rotate: m.default.number, theme: m.default.oneOf(["filled", "outlined", "twoTone"]), twoToneColor: m.default.string, role: m.default.string }, render: function(t) { var e = this; return t(k.default, { attrs: { componentName: "Icon" }, scopedSlots: { default: function(n) { return function(t, e, n) { var l, d = n.$props,
                                                m = n.$slots,
                                                y = (0, S.getListeners)(n),
                                                k = d.type,
                                                x = d.component,
                                                _ = d.viewBox,
                                                E = d.spin,
                                                A = d.theme,
                                                O = d.twoToneColor,
                                                M = d.rotate,
                                                I = d.tabIndex,
                                                P = (0, S.filterEmpty)(m.default);
                                            P = 0 === P.length ? void 0 : P, (0, w.default)(Boolean(k || x || P), "Icon", "Icon should have `type` prop or `component` prop or `children`."); var T = (0, f.default)((l = {}, (0, c.default)(l, "anticon", !0), (0, c.default)(l, "anticon-" + k, !!k), l)),
                                                C = (0, f.default)((0, c.default)({}, "anticon-spin", !!E || "loading" === k)),
                                                j = M ? { msTransform: "rotate(" + M + "deg)", transform: "rotate(" + M + "deg)" } : void 0,
                                                R = { attrs: (0, o.default)({}, v.svgBaseProps, { viewBox: _ }), class: C, style: j };
                                            _ || delete R.attrs.viewBox; var z = I;
                                            void 0 === z && "click" in y && (z = -1); var B = { attrs: { "aria-label": k && e.icon + ": " + k, tabIndex: z }, on: y, class: T, staticClass: "" }; return t("i", B, [function() { if (x) return t(x, R, [P]); if (P) {
                                                    (0, w.default)(Boolean(_) || 1 === P.length && "use" === P[0].tag, "Icon", "Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."); var e = { attrs: (0, o.default)({}, v.svgBaseProps), class: C, style: j }; return t("svg", (0, r.default)([e, { attrs: { viewBox: _ } }]), [P]) } if ("string" == typeof k) { var n = k; if (A) { var c = (0, v.getThemeFromTypeName)(k);
                                                        (0, w.default)(!c || A === c, "Icon", "The icon name '" + k + "' already specify a theme '" + c + "', the 'theme' prop '" + A + "' will be ignored.") } return n = (0, v.withThemeSuffix)((0, v.removeTypeTheme)((0, v.alias)(n)), A || "outlined"), t(h.default, { attrs: { focusable: "false", type: n, primaryColor: O }, class: C, style: j }) } }()]) }(t, n, e) } } }) } };
                    A.createFromIconfontCN = y.default, A.getTwoToneColor = x.getTwoToneColor, A.setTwoToneColor = x.setTwoToneColor, A.install = function(t) { t.use(_.default), t.component(A.name, A) }, e.default = A }, , , function(t, e, n) { "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }); var r = h(n(20)),
                        o = n(341),
                        c = h(o),
                        l = h(n(838)),
                        f = h(n(48)),
                        d = h(n(75));

                    function h(t) { return t && t.__esModule ? t : { default: t } } var m = function(t) { var e = (0, r.default)({ type: "warning", icon: function(t) { return t(f.default, { attrs: { type: "exclamation-circle" } }) }, okCancel: !1 }, t); return (0, l.default)(e) },
                        y = m;
                    c.default.info = function(t) { var e = (0, r.default)({ type: "info", icon: function(t) { return t(f.default, { attrs: { type: "info-circle" } }) }, okCancel: !1 }, t); return (0, l.default)(e) }, c.default.success = function(t) { var e = (0, r.default)({ type: "success", icon: function(t) { return t(f.default, { attrs: { type: "check-circle" } }) }, okCancel: !1 }, t); return (0, l.default)(e) }, c.default.error = function(t) { var e = (0, r.default)({ type: "error", icon: function(t) { return t(f.default, { attrs: { type: "close-circle" } }) }, okCancel: !1 }, t); return (0, l.default)(e) }, c.default.warning = m, c.default.warn = y, c.default.confirm = function(t) { var e = (0, r.default)({ type: "confirm", okCancel: !0 }, t); return (0, l.default)(e) }, c.default.destroyAll = function() { for (; o.destroyFns.length;) { var t = o.destroyFns.pop();
                            t && t() } }, c.default.install = function(t) { t.use(d.default), t.component(c.default.name, c.default) }, e.default = c.default }, function(t, e, n) { "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.ConfigConsumerProps = void 0; var r, o = n(834),
                        c = (r = o) && r.__esModule ? r : { default: r };
                    e.ConfigConsumerProps = { getPrefixCls: function(t, e) { return e || "ant-" + t }, renderEmpty: c.default } }, , , , , , function(t, e, n) { "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }); var r = l(n(173)),
                        o = l(n(20)),
                        c = n(22);

                    function l(t) { return t && t.__esModule ? t : { default: t } }
                    e.default = { methods: { setState: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = arguments[1],
                                    n = "function" == typeof t ? t(this.$data, this.$props) : t; if (this.getDerivedStateFromProps) { var s = this.getDerivedStateFromProps((0, c.getOptionProps)(this), (0, o.default)({}, this.$data, n)); if (null === s) return;
                                    n = (0, o.default)({}, n, s || {}) }(0, o.default)(this.$data, n), this.$forceUpdate(), this.$nextTick((function() { e && e() })) }, __emit: function() { var t = [].slice.call(arguments, 0),
                                    e = t[0],
                                    n = this.$listeners[e]; if (t.length && n)
                                    if (Array.isArray(n))
                                        for (var i = 0, o = n.length; i < o; i++) n[i].apply(n, (0, r.default)(t.slice(1)));
                                    else n.apply(void 0, (0, r.default)(t.slice(1))) } } } }, , , , function(t, e) { var n = /^(attrs|props|on|nativeOn|class|style|hook)$/;

                    function r(a, b) { return function() { a && a.apply(this, arguments), b && b.apply(this, arguments) } }
                    t.exports = function(t) { return t.reduce((function(a, b) { var t, e, o, c, l; for (o in b)
                                if (t = a[o], e = b[o], t && n.test(o))
                                    if ("class" === o && ("string" == typeof t && (l = t, a[o] = t = {}, t[l] = !0), "string" == typeof e && (l = e, b[o] = e = {}, e[l] = !0)), "on" === o || "nativeOn" === o || "hook" === o)
                                        for (c in e) t[c] = r(t[c], e[c]);
                                    else if (Array.isArray(t)) a[o] = t.concat(e);
                            else if (Array.isArray(e)) a[o] = [t].concat(e);
                            else
                                for (c in e) t[c] = e[c];
                            else a[o] = b[o]; return a }), {}) } }, , , function(t, e, n) { "use strict"; var r = n(285),
                        o = "object" == typeof self && self && self.Object === Object && self,
                        c = r.a || o || Function("return this")();
                    e.a = c }, function(t, e, n) { "use strict";
                    n.r(e), n.d(e, "AccountNameRequiredError", (function() { return m })), n.d(e, "AccountNotSupported", (function() { return y })), n.d(e, "AmountRequired", (function() { return v })), n.d(e, "BluetoothRequired", (function() { return w })), n.d(e, "BtcUnmatchedApp", (function() { return k })), n.d(e, "CantOpenDevice", (function() { return x })), n.d(e, "CantScanQRCode", (function() { return Ht })), n.d(e, "CashAddrNotSupported", (function() { return S })), n.d(e, "CurrencyNotSupported", (function() { return _ })), n.d(e, "DBNotReset", (function() { return ie })), n.d(e, "DBWrongPassword", (function() { return oe })), n.d(e, "DeviceAppVerifyNotSupported", (function() { return E })), n.d(e, "DeviceGenuineSocketEarlyClose", (function() { return A })), n.d(e, "DeviceHalted", (function() { return T })), n.d(e, "DeviceInOSUExpected", (function() { return P })), n.d(e, "DeviceNameInvalid", (function() { return C })), n.d(e, "DeviceNotGenuineError", (function() { return O })), n.d(e, "DeviceOnDashboardExpected", (function() { return M })), n.d(e, "DeviceOnDashboardUnexpected", (function() { return I })), n.d(e, "DeviceShouldStayInApp", (function() { return Wt })), n.d(e, "DeviceSocketFail", (function() { return j })), n.d(e, "DeviceSocketNoBulkStatus", (function() { return R })), n.d(e, "DisconnectedDevice", (function() { return z })), n.d(e, "DisconnectedDeviceDuringOperation", (function() { return B })), n.d(e, "ETHAddressNonEIP", (function() { return Vt })), n.d(e, "EnpointConfigError", (function() { return N })), n.d(e, "EthAppPleaseEnableContractData", (function() { return L })), n.d(e, "FeeEstimationFailed", (function() { return U })), n.d(e, "FeeNotLoaded", (function() { return Zt })), n.d(e, "FeeRequired", (function() { return Gt })), n.d(e, "FeeTooHigh", (function() { return Yt })), n.d(e, "FirmwareNotRecognized", (function() { return D })), n.d(e, "FirmwareOrAppUpdateRequired", (function() { return ne })), n.d(e, "GasLessThanEstimate", (function() { return gt })), n.d(e, "GenuineCheckFailed", (function() { return Jt })), n.d(e, "HardResetFail", (function() { return W })), n.d(e, "InvalidAddress", (function() { return $ })), n.d(e, "InvalidAddressBecauseDestinationIsAlsoSource", (function() { return K })), n.d(e, "InvalidXRPTag", (function() { return F })), n.d(e, "LatestMCUInstalledError", (function() { return V })), n.d(e, "LedgerAPI4xx", (function() { return te })), n.d(e, "LedgerAPI5xx", (function() { return ee })), n.d(e, "LedgerAPIError", (function() { return Z })), n.d(e, "LedgerAPIErrorWithMessage", (function() { return G })), n.d(e, "LedgerAPINotAvailable", (function() { return Y })), n.d(e, "MCUNotGenuineToDashboard", (function() { return _t })), n.d(e, "ManagerAppAlreadyInstalledError", (function() { return X })), n.d(e, "ManagerAppDepInstallRequired", (function() { return J })), n.d(e, "ManagerAppDepUninstallRequired", (function() { return tt })), n.d(e, "ManagerAppRelyOnBTCError", (function() { return Q })), n.d(e, "ManagerDeviceLockedError", (function() { return et })), n.d(e, "ManagerFirmwareNotEnoughSpaceError", (function() { return nt })), n.d(e, "ManagerNotEnoughSpaceError", (function() { return ot })), n.d(e, "ManagerUninstallBTCDep", (function() { return it })), n.d(e, "NetworkDown", (function() { return at })), n.d(e, "NoAccessToCamera", (function() { return pt })), n.d(e, "NoAddressesFound", (function() { return st })), n.d(e, "NoDBPathGiven", (function() { return re })), n.d(e, "NotEnoughBalance", (function() { return ut })), n.d(e, "NotEnoughBalanceBecauseDestinationNotCreated", (function() { return ht })), n.d(e, "NotEnoughBalanceInParentAccount", (function() { return lt })), n.d(e, "NotEnoughBalanceToDelegate", (function() { return ct })), n.d(e, "NotEnoughGas", (function() { return bt })), n.d(e, "NotEnoughSpendableBalance", (function() { return ft })), n.d(e, "NotSupportedLegacyAddress", (function() { return mt })), n.d(e, "PairingFailed", (function() { return Qt })), n.d(e, "PasswordIncorrectError", (function() { return vt })), n.d(e, "PasswordsDontMatchError", (function() { return yt })), n.d(e, "RecipientRequired", (function() { return Et })), n.d(e, "RecommendSubAccountsToEmpty", (function() { return wt })), n.d(e, "RecommendUndelegation", (function() { return kt })), n.d(e, "StatusCodes", (function() { return se })), n.d(e, "SyncError", (function() { return Xt })), n.d(e, "TimeoutTagged", (function() { return xt })), n.d(e, "TransportError", (function() { return ae })), n.d(e, "TransportInterfaceNotAvailable", (function() { return Lt })), n.d(e, "TransportOpenUserCancelled", (function() { return Nt })), n.d(e, "TransportRaceCondition", (function() { return Ut })), n.d(e, "TransportStatusError", (function() { return ce })), n.d(e, "TransportWebUSBGestureRequired", (function() { return Dt })), n.d(e, "UnavailableTezosOriginatedAccountReceive", (function() { return At })), n.d(e, "UnavailableTezosOriginatedAccountSend", (function() { return Ot })), n.d(e, "UnexpectedBootloader", (function() { return St })), n.d(e, "UnknownMCU", (function() { return H })), n.d(e, "UpdateFetchFileFail", (function() { return Mt })), n.d(e, "UpdateIncorrectHash", (function() { return It })), n.d(e, "UpdateIncorrectSig", (function() { return Pt })), n.d(e, "UpdateYourApp", (function() { return Tt })), n.d(e, "UserRefusedAddress", (function() { return jt })), n.d(e, "UserRefusedAllowManager", (function() { return zt })), n.d(e, "UserRefusedDeviceNameChange", (function() { return Ct })), n.d(e, "UserRefusedFirmwareUpdate", (function() { return Rt })), n.d(e, "UserRefusedOnDevice", (function() { return Bt })), n.d(e, "WebsocketConnectionError", (function() { return Ft })), n.d(e, "WebsocketConnectionFailed", (function() { return $t })), n.d(e, "WrongAppForCurrency", (function() { return Kt })), n.d(e, "WrongDeviceForAccount", (function() { return qt })), n.d(e, "addCustomErrorDeserializer", (function() { return c })), n.d(e, "createCustomErrorClass", (function() { return l })), n.d(e, "deserializeError", (function() { return f })), n.d(e, "getAltStatusMessage", (function() { return ue })), n.d(e, "serializeError", (function() { return d })); var r = {},
                        o = {},
                        c = function(t, e) { o[t] = e },
                        l = function(t) { var e = function(e, n) { Object.assign(this, n), this.name = t, this.message = e || t, this.stack = (new Error).stack }; return e.prototype = new Error, r[t] = e, e },
                        f = function(object) { if ("object" == typeof object && object) { try { var t = JSON.parse(object.message);
                                    t.message && t.name && (object = t) } catch (t) {} var e = void 0; if ("string" == typeof object.name) { var n = object.name,
                                        c = o[n]; if (c) e = c(object);
                                    else { var d = "Error" === n ? Error : r[n];
                                        d || (console.warn("deserializing an unknown class '" + n + "'"), d = l(n)), e = Object.create(d.prototype); try { for (var h in object) object.hasOwnProperty(h) && (e[h] = object[h]) } catch (t) {} } } else e = new Error(object.message); return !e.stack && Error.captureStackTrace && Error.captureStackTrace(e, f), e } return new Error(String(object)) },
                        d = function(t) { return t ? "object" == typeof t ? h(t, []) : "function" == typeof t ? "[Function: " + (t.name || "anonymous") + "]" : t : t };

                    function h(t, e) { var n = {};
                        e.push(t); for (var r = 0, o = Object.keys(t); r < o.length; r++) { var c = o[r],
                                l = t[c]; "function" != typeof l && (l && "object" == typeof l ? -1 !== e.indexOf(t[c]) ? n[c] = "[Circular]" : n[c] = h(t[c], e.slice(0)) : n[c] = l) } return "string" == typeof t.name && (n.name = t.name), "string" == typeof t.message && (n.message = t.message), "string" == typeof t.stack && (n.stack = t.stack), n } var m = l("AccountNameRequired"),
                        y = l("AccountNotSupported"),
                        v = l("AmountRequired"),
                        w = l("BluetoothRequired"),
                        k = l("BtcUnmatchedApp"),
                        x = l("CantOpenDevice"),
                        S = l("CashAddrNotSupported"),
                        _ = l("CurrencyNotSupported"),
                        E = l("DeviceAppVerifyNotSupported"),
                        A = l("DeviceGenuineSocketEarlyClose"),
                        O = l("DeviceNotGenuine"),
                        M = l("DeviceOnDashboardExpected"),
                        I = l("DeviceOnDashboardUnexpected"),
                        P = l("DeviceInOSUExpected"),
                        T = l("DeviceHalted"),
                        C = l("DeviceNameInvalid"),
                        j = l("DeviceSocketFail"),
                        R = l("DeviceSocketNoBulkStatus"),
                        z = l("DisconnectedDevice"),
                        B = l("DisconnectedDeviceDuringOperation"),
                        N = l("EnpointConfig"),
                        L = l("EthAppPleaseEnableContractData"),
                        U = l("FeeEstimationFailed"),
                        D = l("FirmwareNotRecognized"),
                        W = l("HardResetFail"),
                        F = l("InvalidXRPTag"),
                        $ = l("InvalidAddress"),
                        K = l("InvalidAddressBecauseDestinationIsAlsoSource"),
                        V = l("LatestMCUInstalledError"),
                        H = l("UnknownMCU"),
                        Z = l("LedgerAPIError"),
                        G = l("LedgerAPIErrorWithMessage"),
                        Y = l("LedgerAPINotAvailable"),
                        X = l("ManagerAppAlreadyInstalled"),
                        Q = l("ManagerAppRelyOnBTC"),
                        J = l("ManagerAppDepInstallRequired"),
                        tt = l("ManagerAppDepUninstallRequired"),
                        et = l("ManagerDeviceLocked"),
                        nt = l("ManagerFirmwareNotEnoughSpace"),
                        ot = l("ManagerNotEnoughSpace"),
                        it = l("ManagerUninstallBTCDep"),
                        at = l("NetworkDown"),
                        st = l("NoAddressesFound"),
                        ut = l("NotEnoughBalance"),
                        ct = l("NotEnoughBalanceToDelegate"),
                        lt = l("NotEnoughBalanceInParentAccount"),
                        ft = l("NotEnoughSpendableBalance"),
                        ht = l("NotEnoughBalanceBecauseDestinationNotCreated"),
                        pt = l("NoAccessToCamera"),
                        bt = l("NotEnoughGas"),
                        mt = l("NotSupportedLegacyAddress"),
                        gt = l("GasLessThanEstimate"),
                        yt = l("PasswordsDontMatch"),
                        vt = l("PasswordIncorrect"),
                        wt = l("RecommendSubAccountsToEmpty"),
                        kt = l("RecommendUndelegation"),
                        xt = l("TimeoutTagged"),
                        St = l("UnexpectedBootloader"),
                        _t = l("MCUNotGenuineToDashboard"),
                        Et = l("RecipientRequired"),
                        At = l("UnavailableTezosOriginatedAccountReceive"),
                        Ot = l("UnavailableTezosOriginatedAccountSend"),
                        Mt = l("UpdateFetchFileFail"),
                        It = l("UpdateIncorrectHash"),
                        Pt = l("UpdateIncorrectSig"),
                        Tt = l("UpdateYourApp"),
                        Ct = l("UserRefusedDeviceNameChange"),
                        jt = l("UserRefusedAddress"),
                        Rt = l("UserRefusedFirmwareUpdate"),
                        zt = l("UserRefusedAllowManager"),
                        Bt = l("UserRefusedOnDevice"),
                        Nt = l("TransportOpenUserCancelled"),
                        Lt = l("TransportInterfaceNotAvailable"),
                        Ut = l("TransportRaceCondition"),
                        Dt = l("TransportWebUSBGestureRequired"),
                        Wt = l("DeviceShouldStayInApp"),
                        Ft = l("WebsocketConnectionError"),
                        $t = l("WebsocketConnectionFailed"),
                        qt = l("WrongDeviceForAccount"),
                        Kt = l("WrongAppForCurrency"),
                        Vt = l("ETHAddressNonEIP"),
                        Ht = l("CantScanQRCode"),
                        Zt = l("FeeNotLoaded"),
                        Gt = l("FeeRequired"),
                        Yt = l("FeeTooHigh"),
                        Xt = l("SyncError"),
                        Qt = l("PairingFailed"),
                        Jt = l("GenuineCheckFailed"),
                        te = l("LedgerAPI4xx"),
                        ee = l("LedgerAPI5xx"),
                        ne = l("FirmwareOrAppUpdateRequired"),
                        re = l("NoDBPathGiven"),
                        oe = l("DBWrongPassword"),
                        ie = l("DBNotReset");

                    function ae(t, e) { this.name = "TransportError", this.message = t, this.stack = (new Error).stack, this.id = e }
                    ae.prototype = new Error, c("TransportError", (function(t) { return new ae(t.message, t.id) })); var se = { PIN_REMAINING_ATTEMPTS: 25536, INCORRECT_LENGTH: 26368, MISSING_CRITICAL_PARAMETER: 26624, COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009, SECURITY_STATUS_NOT_SATISFIED: 27010, CONDITIONS_OF_USE_NOT_SATISFIED: 27013, INCORRECT_DATA: 27264, NOT_ENOUGH_MEMORY_SPACE: 27268, REFERENCED_DATA_NOT_FOUND: 27272, FILE_ALREADY_EXISTS: 27273, INCORRECT_P1_P2: 27392, INS_NOT_SUPPORTED: 27904, CLA_NOT_SUPPORTED: 28160, TECHNICAL_PROBLEM: 28416, OK: 36864, MEMORY_PROBLEM: 37440, NO_EF_SELECTED: 37888, INVALID_OFFSET: 37890, FILE_NOT_FOUND: 37892, INCONSISTENT_FILE: 37896, ALGORITHM_NOT_SUPPORTED: 38020, INVALID_KCV: 38021, CODE_NOT_INITIALIZED: 38914, ACCESS_CONDITION_NOT_FULFILLED: 38916, CONTRADICTION_SECRET_CODE_STATUS: 38920, CONTRADICTION_INVALIDATION: 38928, CODE_BLOCKED: 38976, MAX_VALUE_REACHED: 38992, GP_AUTH_FAILED: 25344, LICENSING: 28482, HALTED: 28586 };

                    function ue(code) { switch (code) {
                            case 26368:
                                return "Incorrect length";
                            case 26624:
                                return "Missing critical parameter";
                            case 27010:
                                return "Security not satisfied (dongle locked or have invalid access rights)";
                            case 27013:
                                return "Condition of use not satisfied (denied by the user?)";
                            case 27264:
                                return "Invalid data received";
                            case 27392:
                                return "Invalid parameter received" } if (28416 <= code && code <= 28671) return "Internal error, please report" }

                    function ce(t) { this.name = "TransportStatusError"; var e = Object.keys(se).find((function(e) { return se[e] === t })) || "UNKNOWN_ERROR",
                            n = ue(t) || e,
                            r = t.toString(16);
                        this.message = "Ledger device: " + n + " (0x" + r + ")", this.stack = (new Error).stack, this.statusCode = t, this.statusText = e }
                    ce.prototype = new Error, c("TransportStatusError", (function(t) { return new ce(t.statusCode) })) }, , , , function(t, e, n) {
                    (function(t) {! function(t, e) { "use strict";

                            function r(t, e) { if (!t) throw new Error(e || "Assertion failed") }

                            function o(t, e) { t.super_ = e; var n = function() {};
                                n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t }

                            function c(t, base, e) { if (c.isBN(t)) return t;
                                this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== base && "be" !== base || (e = base, base = 10), this._init(t || 0, base || 10, e || "be")) } var l; "object" == typeof t ? t.exports = c : e.BN = c, c.BN = c, c.wordSize = 26; try { l = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : n(965).Buffer } catch (t) {}

                            function f(t, e) { var n = t.charCodeAt(e); return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : void r(!1, "Invalid character in " + t) }

                            function d(t, e, n) { var r = f(t, n); return n - 1 >= e && (r |= f(t, n - 1) << 4), r }

                            function h(t, e, n, o) { for (var c = 0, b = 0, l = Math.min(t.length, n), i = e; i < l; i++) { var f = t.charCodeAt(i) - 48;
                                    c *= o, b = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f, r(f >= 0 && b < o, "Invalid character"), c += b } return c }

                            function m(t, e) { t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red } if (c.isBN = function(t) { return t instanceof c || null !== t && "object" == typeof t && t.constructor.wordSize === c.wordSize && Array.isArray(t.words) }, c.max = function(t, e) { return t.cmp(e) > 0 ? t : e }, c.min = function(t, e) { return t.cmp(e) < 0 ? t : e }, c.prototype._init = function(t, base, e) { if ("number" == typeof t) return this._initNumber(t, base, e); if ("object" == typeof t) return this._initArray(t, base, e); "hex" === base && (base = 16), r(base === (0 | base) && base >= 2 && base <= 36); var n = 0; "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === base ? this._parseHex(t, n, e) : (this._parseBase(t, base, n), "le" === e && this._initArray(this.toArray(), base, e))) }, c.prototype._initNumber = function(t, base, e) { t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), base, e) }, c.prototype._initArray = function(t, base, e) { if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                                    this.length = Math.ceil(t.length / 3), this.words = new Array(this.length); for (var i = 0; i < this.length; i++) this.words[i] = 0; var n, o, c = 0; if ("be" === e)
                                        for (i = t.length - 1, n = 0; i >= 0; i -= 3) o = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[n] |= o << c & 67108863, this.words[n + 1] = o >>> 26 - c & 67108863, (c += 24) >= 26 && (c -= 26, n++);
                                    else if ("le" === e)
                                        for (i = 0, n = 0; i < t.length; i += 3) o = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[n] |= o << c & 67108863, this.words[n + 1] = o >>> 26 - c & 67108863, (c += 24) >= 26 && (c -= 26, n++); return this._strip() }, c.prototype._parseHex = function(t, e, n) { this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length); for (var i = 0; i < this.length; i++) this.words[i] = 0; var r, o = 0,
                                        c = 0; if ("be" === n)
                                        for (i = t.length - 1; i >= e; i -= 2) r = d(t, e, i) << o, this.words[c] |= 67108863 & r, o >= 18 ? (o -= 18, c += 1, this.words[c] |= r >>> 26) : o += 8;
                                    else
                                        for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) r = d(t, e, i) << o, this.words[c] |= 67108863 & r, o >= 18 ? (o -= 18, c += 1, this.words[c] |= r >>> 26) : o += 8;
                                    this._strip() }, c.prototype._parseBase = function(t, base, e) { this.words = [0], this.length = 1; for (var n = 0, r = 1; r <= 67108863; r *= base) n++;
                                    n--, r = r / base | 0; for (var o = t.length - e, c = o % n, l = Math.min(o, o - c) + e, f = 0, i = e; i < l; i += n) f = h(t, i, i + n, base), this.imuln(r), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f); if (0 !== c) { var d = 1; for (f = h(t, i, t.length, base), i = 0; i < c; i++) d *= base;
                                        this.imuln(d), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f) }
                                    this._strip() }, c.prototype.copy = function(t) { t.words = new Array(this.length); for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                                    t.length = this.length, t.negative = this.negative, t.red = this.red }, c.prototype._move = function(t) { m(t, this) }, c.prototype.clone = function() { var t = new c(null); return this.copy(t), t }, c.prototype._expand = function(t) { for (; this.length < t;) this.words[this.length++] = 0; return this }, c.prototype._strip = function() { for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--; return this._normSign() }, c.prototype._normSign = function() { return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try { c.prototype[Symbol.for("nodejs.util.inspect.custom")] = y } catch (t) { c.prototype.inspect = y } else c.prototype.inspect = y;

                            function y() { return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">" } var v = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                                w = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                                k = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                            c.prototype.toString = function(base, t) { var e; if (t = 0 | t || 1, 16 === (base = base || 10) || "hex" === base) { e = ""; for (var n = 0, o = 0, i = 0; i < this.length; i++) { var c = this.words[i],
                                            l = (16777215 & (c << n | o)).toString(16);
                                        e = 0 !== (o = c >>> 24 - n & 16777215) || i !== this.length - 1 ? v[6 - l.length] + l + e : l + e, (n += 2) >= 26 && (n -= 26, i--) } for (0 !== o && (e = o.toString(16) + e); e.length % t != 0;) e = "0" + e; return 0 !== this.negative && (e = "-" + e), e } if (base === (0 | base) && base >= 2 && base <= 36) { var f = w[base],
                                        d = k[base];
                                    e = ""; var h = this.clone(); for (h.negative = 0; !h.isZero();) { var m = h.modrn(d).toString(base);
                                        e = (h = h.idivn(d)).isZero() ? m + e : v[f - m.length] + m + e } for (this.isZero() && (e = "0" + e); e.length % t != 0;) e = "0" + e; return 0 !== this.negative && (e = "-" + e), e }
                                r(!1, "Base should be between 2 and 36") }, c.prototype.toNumber = function() { var t = this.words[0]; return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t }, c.prototype.toJSON = function() { return this.toString(16, 2) }, l && (c.prototype.toBuffer = function(t, e) { return this.toArrayLike(l, t, e) }), c.prototype.toArray = function(t, e) { return this.toArrayLike(Array, t, e) };

                            function x(t, e, n) { n.negative = e.negative ^ t.negative; var r = t.length + e.length | 0;
                                n.length = r, r = r - 1 | 0; var a = 0 | t.words[0],
                                    b = 0 | e.words[0],
                                    o = a * b,
                                    c = 67108863 & o,
                                    l = o / 67108864 | 0;
                                n.words[0] = c; for (var f = 1; f < r; f++) { for (var d = l >>> 26, h = 67108863 & l, m = Math.min(f, e.length - 1), y = Math.max(0, f - t.length + 1); y <= m; y++) { var i = f - y | 0;
                                        d += (o = (a = 0 | t.words[i]) * (b = 0 | e.words[y]) + h) / 67108864 | 0, h = 67108863 & o }
                                    n.words[f] = 0 | h, l = 0 | d } return 0 !== l ? n.words[f] = 0 | l : n.length--, n._strip() }
                            c.prototype.toArrayLike = function(t, e, n) { this._strip(); var o = this.byteLength(),
                                    c = n || Math.max(1, o);
                                r(o <= c, "byte array longer than desired length"), r(c > 0, "Requested array length <= 0"); var l = function(t, e) { return t.allocUnsafe ? t.allocUnsafe(e) : new t(e) }(t, c); return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](l, o), l }, c.prototype._toArrayLikeLE = function(t, e) { for (var n = 0, r = 0, i = 0, o = 0; i < this.length; i++) { var c = this.words[i] << o | r;
                                    t[n++] = 255 & c, n < t.length && (t[n++] = c >> 8 & 255), n < t.length && (t[n++] = c >> 16 & 255), 6 === o ? (n < t.length && (t[n++] = c >> 24 & 255), r = 0, o = 0) : (r = c >>> 24, o += 2) } if (n < t.length)
                                    for (t[n++] = r; n < t.length;) t[n++] = 0 }, c.prototype._toArrayLikeBE = function(t, e) { for (var n = t.length - 1, r = 0, i = 0, o = 0; i < this.length; i++) { var c = this.words[i] << o | r;
                                    t[n--] = 255 & c, n >= 0 && (t[n--] = c >> 8 & 255), n >= 0 && (t[n--] = c >> 16 & 255), 6 === o ? (n >= 0 && (t[n--] = c >> 24 & 255), r = 0, o = 0) : (r = c >>> 24, o += 2) } if (n >= 0)
                                    for (t[n--] = r; n >= 0;) t[n--] = 0 }, Math.clz32 ? c.prototype._countBits = function(t) { return 32 - Math.clz32(t) } : c.prototype._countBits = function(t) { var e = t,
                                    n = 0; return e >= 4096 && (n += 13, e >>>= 13), e >= 64 && (n += 7, e >>>= 7), e >= 8 && (n += 4, e >>>= 4), e >= 2 && (n += 2, e >>>= 2), n + e }, c.prototype._zeroBits = function(t) { if (0 === t) return 26; var e = t,
                                    n = 0; return 0 == (8191 & e) && (n += 13, e >>>= 13), 0 == (127 & e) && (n += 7, e >>>= 7), 0 == (15 & e) && (n += 4, e >>>= 4), 0 == (3 & e) && (n += 2, e >>>= 2), 0 == (1 & e) && n++, n }, c.prototype.bitLength = function() { var t = this.words[this.length - 1],
                                    e = this._countBits(t); return 26 * (this.length - 1) + e }, c.prototype.zeroBits = function() { if (this.isZero()) return 0; for (var t = 0, i = 0; i < this.length; i++) { var b = this._zeroBits(this.words[i]); if (t += b, 26 !== b) break } return t }, c.prototype.byteLength = function() { return Math.ceil(this.bitLength() / 8) }, c.prototype.toTwos = function(t) { return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone() }, c.prototype.fromTwos = function(t) { return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone() }, c.prototype.isNeg = function() { return 0 !== this.negative }, c.prototype.neg = function() { return this.clone().ineg() }, c.prototype.ineg = function() { return this.isZero() || (this.negative ^= 1), this }, c.prototype.iuor = function(t) { for (; this.length < t.length;) this.words[this.length++] = 0; for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i]; return this._strip() }, c.prototype.ior = function(t) { return r(0 == (this.negative | t.negative)), this.iuor(t) }, c.prototype.or = function(t) { return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this) }, c.prototype.uor = function(t) { return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this) }, c.prototype.iuand = function(t) { var b;
                                b = this.length > t.length ? t : this; for (var i = 0; i < b.length; i++) this.words[i] = this.words[i] & t.words[i]; return this.length = b.length, this._strip() }, c.prototype.iand = function(t) { return r(0 == (this.negative | t.negative)), this.iuand(t) }, c.prototype.and = function(t) { return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this) }, c.prototype.uand = function(t) { return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this) }, c.prototype.iuxor = function(t) { var a, b;
                                this.length > t.length ? (a = this, b = t) : (a = t, b = this); for (var i = 0; i < b.length; i++) this.words[i] = a.words[i] ^ b.words[i]; if (this !== a)
                                    for (; i < a.length; i++) this.words[i] = a.words[i]; return this.length = a.length, this._strip() }, c.prototype.ixor = function(t) { return r(0 == (this.negative | t.negative)), this.iuxor(t) }, c.prototype.xor = function(t) { return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this) }, c.prototype.uxor = function(t) { return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this) }, c.prototype.inotn = function(t) { r("number" == typeof t && t >= 0); var e = 0 | Math.ceil(t / 26),
                                    n = t % 26;
                                this._expand(e), n > 0 && e--; for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i]; return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this._strip() }, c.prototype.notn = function(t) { return this.clone().inotn(t) }, c.prototype.setn = function(t, e) { r("number" == typeof t && t >= 0); var n = t / 26 | 0,
                                    o = t % 26; return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << o : this.words[n] & ~(1 << o), this._strip() }, c.prototype.iadd = function(t) { var e, a, b; if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign(); if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                                this.length > t.length ? (a = this, b = t) : (a = t, b = this); for (var n = 0, i = 0; i < b.length; i++) e = (0 | a.words[i]) + (0 | b.words[i]) + n, this.words[i] = 67108863 & e, n = e >>> 26; for (; 0 !== n && i < a.length; i++) e = (0 | a.words[i]) + n, this.words[i] = 67108863 & e, n = e >>> 26; if (this.length = a.length, 0 !== n) this.words[this.length] = n, this.length++;
                                else if (a !== this)
                                    for (; i < a.length; i++) this.words[i] = a.words[i]; return this }, c.prototype.add = function(t) { var e; return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this) }, c.prototype.isub = function(t) { if (0 !== t.negative) { t.negative = 0; var e = this.iadd(t); return t.negative = 1, e._normSign() } if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign(); var a, b, n = this.cmp(t); if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                                n > 0 ? (a = this, b = t) : (a = t, b = this); for (var r = 0, i = 0; i < b.length; i++) r = (e = (0 | a.words[i]) - (0 | b.words[i]) + r) >> 26, this.words[i] = 67108863 & e; for (; 0 !== r && i < a.length; i++) r = (e = (0 | a.words[i]) + r) >> 26, this.words[i] = 67108863 & e; if (0 === r && i < a.length && a !== this)
                                    for (; i < a.length; i++) this.words[i] = a.words[i]; return this.length = Math.max(this.length, i), a !== this && (this.negative = 1), this._strip() }, c.prototype.sub = function(t) { return this.clone().isub(t) }; var S = function(t, e, n) { var r, o, c, a = t.words,
                                    b = e.words,
                                    l = n.words,
                                    f = 0,
                                    d = 0 | a[0],
                                    h = 8191 & d,
                                    m = d >>> 13,
                                    y = 0 | a[1],
                                    v = 8191 & y,
                                    w = y >>> 13,
                                    k = 0 | a[2],
                                    x = 8191 & k,
                                    S = k >>> 13,
                                    _ = 0 | a[3],
                                    E = 8191 & _,
                                    A = _ >>> 13,
                                    O = 0 | a[4],
                                    M = 8191 & O,
                                    I = O >>> 13,
                                    P = 0 | a[5],
                                    T = 8191 & P,
                                    C = P >>> 13,
                                    j = 0 | a[6],
                                    R = 8191 & j,
                                    z = j >>> 13,
                                    B = 0 | a[7],
                                    N = 8191 & B,
                                    L = B >>> 13,
                                    U = 0 | a[8],
                                    D = 8191 & U,
                                    W = U >>> 13,
                                    F = 0 | a[9],
                                    $ = 8191 & F,
                                    K = F >>> 13,
                                    V = 0 | b[0],
                                    H = 8191 & V,
                                    Z = V >>> 13,
                                    G = 0 | b[1],
                                    Y = 8191 & G,
                                    X = G >>> 13,
                                    Q = 0 | b[2],
                                    J = 8191 & Q,
                                    tt = Q >>> 13,
                                    et = 0 | b[3],
                                    nt = 8191 & et,
                                    ot = et >>> 13,
                                    it = 0 | b[4],
                                    at = 8191 & it,
                                    st = it >>> 13,
                                    ut = 0 | b[5],
                                    ct = 8191 & ut,
                                    lt = ut >>> 13,
                                    ft = 0 | b[6],
                                    ht = 8191 & ft,
                                    pt = ft >>> 13,
                                    bt = 0 | b[7],
                                    mt = 8191 & bt,
                                    gt = bt >>> 13,
                                    yt = 0 | b[8],
                                    vt = 8191 & yt,
                                    wt = yt >>> 13,
                                    kt = 0 | b[9],
                                    xt = 8191 & kt,
                                    St = kt >>> 13;
                                n.negative = t.negative ^ e.negative, n.length = 19; var _t = (f + (r = Math.imul(h, H)) | 0) + ((8191 & (o = (o = Math.imul(h, Z)) + Math.imul(m, H) | 0)) << 13) | 0;
                                f = ((c = Math.imul(m, Z)) + (o >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, r = Math.imul(v, H), o = (o = Math.imul(v, Z)) + Math.imul(w, H) | 0, c = Math.imul(w, Z); var Et = (f + (r = r + Math.imul(h, Y) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(h, X) | 0) + Math.imul(m, Y) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(m, X) | 0) + (o >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, r = Math.imul(x, H), o = (o = Math.imul(x, Z)) + Math.imul(S, H) | 0, c = Math.imul(S, Z), r = r + Math.imul(v, Y) | 0, o = (o = o + Math.imul(v, X) | 0) + Math.imul(w, Y) | 0, c = c + Math.imul(w, X) | 0; var At = (f + (r = r + Math.imul(h, J) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(h, tt) | 0) + Math.imul(m, J) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(m, tt) | 0) + (o >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, r = Math.imul(E, H), o = (o = Math.imul(E, Z)) + Math.imul(A, H) | 0, c = Math.imul(A, Z), r = r + Math.imul(x, Y) | 0, o = (o = o + Math.imul(x, X) | 0) + Math.imul(S, Y) | 0, c = c + Math.imul(S, X) | 0, r = r + Math.imul(v, J) | 0, o = (o = o + Math.imul(v, tt) | 0) + Math.imul(w, J) | 0, c = c + Math.imul(w, tt) | 0; var Ot = (f + (r = r + Math.imul(h, nt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(h, ot) | 0) + Math.imul(m, nt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(m, ot) | 0) + (o >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, r = Math.imul(M, H), o = (o = Math.imul(M, Z)) + Math.imul(I, H) | 0, c = Math.imul(I, Z), r = r + Math.imul(E, Y) | 0, o = (o = o + Math.imul(E, X) | 0) + Math.imul(A, Y) | 0, c = c + Math.imul(A, X) | 0, r = r + Math.imul(x, J) | 0, o = (o = o + Math.imul(x, tt) | 0) + Math.imul(S, J) | 0, c = c + Math.imul(S, tt) | 0, r = r + Math.imul(v, nt) | 0, o = (o = o + Math.imul(v, ot) | 0) + Math.imul(w, nt) | 0, c = c + Math.imul(w, ot) | 0; var Mt = (f + (r = r + Math.imul(h, at) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(h, st) | 0) + Math.imul(m, at) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(m, st) | 0) + (o >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, r = Math.imul(T, H), o = (o = Math.imul(T, Z)) + Math.imul(C, H) | 0, c = Math.imul(C, Z), r = r + Math.imul(M, Y) | 0, o = (o = o + Math.imul(M, X) | 0) + Math.imul(I, Y) | 0, c = c + Math.imul(I, X) | 0, r = r + Math.imul(E, J) | 0, o = (o = o + Math.imul(E, tt) | 0) + Math.imul(A, J) | 0, c = c + Math.imul(A, tt) | 0, r = r + Math.imul(x, nt) | 0, o = (o = o + Math.imul(x, ot) | 0) + Math.imul(S, nt) | 0, c = c + Math.imul(S, ot) | 0, r = r + Math.imul(v, at) | 0, o = (o = o + Math.imul(v, st) | 0) + Math.imul(w, at) | 0, c = c + Math.imul(w, st) | 0; var It = (f + (r = r + Math.imul(h, ct) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(h, lt) | 0) + Math.imul(m, ct) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(m, lt) | 0) + (o >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, r = Math.imul(R, H), o = (o = Math.imul(R, Z)) + Math.imul(z, H) | 0, c = Math.imul(z, Z), r = r + Math.imul(T, Y) | 0, o = (o = o + Math.imul(T, X) | 0) + Math.imul(C, Y) | 0, c = c + Math.imul(C, X) | 0, r = r + Math.imul(M, J) | 0, o = (o = o + Math.imul(M, tt) | 0) + Math.imul(I, J) | 0, c = c + Math.imul(I, tt) | 0, r = r + Math.imul(E, nt) | 0, o = (o = o + Math.imul(E, ot) | 0) + Math.imul(A, nt) | 0, c = c + Math.imul(A, ot) | 0, r = r + Math.imul(x, at) | 0, o = (o = o + Math.imul(x, st) | 0) + Math.imul(S, at) | 0, c = c + Math.imul(S, st) | 0, r = r + Math.imul(v, ct) | 0, o = (o = o + Math.imul(v, lt) | 0) + Math.imul(w, ct) | 0, c = c + Math.imul(w, lt) | 0; var Pt = (f + (r = r + Math.imul(h, ht) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(h, pt) | 0) + Math.imul(m, ht) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(m, pt) | 0) + (o >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, r = Math.imul(N, H), o = (o = Math.imul(N, Z)) + Math.imul(L, H) | 0, c = Math.imul(L, Z), r = r + Math.imul(R, Y) | 0, o = (o = o + Math.imul(R, X) | 0) + Math.imul(z, Y) | 0, c = c + Math.imul(z, X) | 0, r = r + Math.imul(T, J) | 0, o = (o = o + Math.imul(T, tt) | 0) + Math.imul(C, J) | 0, c = c + Math.imul(C, tt) | 0, r = r + Math.imul(M, nt) | 0, o = (o = o + Math.imul(M, ot) | 0) + Math.imul(I, nt) | 0, c = c + Math.imul(I, ot) | 0, r = r + Math.imul(E, at) | 0, o = (o = o + Math.imul(E, st) | 0) + Math.imul(A, at) | 0, c = c + Math.imul(A, st) | 0, r = r + Math.imul(x, ct) | 0, o = (o = o + Math.imul(x, lt) | 0) + Math.imul(S, ct) | 0, c = c + Math.imul(S, lt) | 0, r = r + Math.imul(v, ht) | 0, o = (o = o + Math.imul(v, pt) | 0) + Math.imul(w, ht) | 0, c = c + Math.imul(w, pt) | 0; var Tt = (f + (r = r + Math.imul(h, mt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(h, gt) | 0) + Math.imul(m, mt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(m, gt) | 0) + (o >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, r = Math.imul(D, H), o = (o = Math.imul(D, Z)) + Math.imul(W, H) | 0, c = Math.imul(W, Z), r = r + Math.imul(N, Y) | 0, o = (o = o + Math.imul(N, X) | 0) + Math.imul(L, Y) | 0, c = c + Math.imul(L, X) | 0, r = r + Math.imul(R, J) | 0, o = (o = o + Math.imul(R, tt) | 0) + Math.imul(z, J) | 0, c = c + Math.imul(z, tt) | 0, r = r + Math.imul(T, nt) | 0, o = (o = o + Math.imul(T, ot) | 0) + Math.imul(C, nt) | 0, c = c + Math.imul(C, ot) | 0, r = r + Math.imul(M, at) | 0, o = (o = o + Math.imul(M, st) | 0) + Math.imul(I, at) | 0, c = c + Math.imul(I, st) | 0, r = r + Math.imul(E, ct) | 0, o = (o = o + Math.imul(E, lt) | 0) + Math.imul(A, ct) | 0, c = c + Math.imul(A, lt) | 0, r = r + Math.imul(x, ht) | 0, o = (o = o + Math.imul(x, pt) | 0) + Math.imul(S, ht) | 0, c = c + Math.imul(S, pt) | 0, r = r + Math.imul(v, mt) | 0, o = (o = o + Math.imul(v, gt) | 0) + Math.imul(w, mt) | 0, c = c + Math.imul(w, gt) | 0; var Ct = (f + (r = r + Math.imul(h, vt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(h, wt) | 0) + Math.imul(m, vt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(m, wt) | 0) + (o >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, r = Math.imul($, H), o = (o = Math.imul($, Z)) + Math.imul(K, H) | 0, c = Math.imul(K, Z), r = r + Math.imul(D, Y) | 0, o = (o = o + Math.imul(D, X) | 0) + Math.imul(W, Y) | 0, c = c + Math.imul(W, X) | 0, r = r + Math.imul(N, J) | 0, o = (o = o + Math.imul(N, tt) | 0) + Math.imul(L, J) | 0, c = c + Math.imul(L, tt) | 0, r = r + Math.imul(R, nt) | 0, o = (o = o + Math.imul(R, ot) | 0) + Math.imul(z, nt) | 0, c = c + Math.imul(z, ot) | 0, r = r + Math.imul(T, at) | 0, o = (o = o + Math.imul(T, st) | 0) + Math.imul(C, at) | 0, c = c + Math.imul(C, st) | 0, r = r + Math.imul(M, ct) | 0, o = (o = o + Math.imul(M, lt) | 0) + Math.imul(I, ct) | 0, c = c + Math.imul(I, lt) | 0, r = r + Math.imul(E, ht) | 0, o = (o = o + Math.imul(E, pt) | 0) + Math.imul(A, ht) | 0, c = c + Math.imul(A, pt) | 0, r = r + Math.imul(x, mt) | 0, o = (o = o + Math.imul(x, gt) | 0) + Math.imul(S, mt) | 0, c = c + Math.imul(S, gt) | 0, r = r + Math.imul(v, vt) | 0, o = (o = o + Math.imul(v, wt) | 0) + Math.imul(w, vt) | 0, c = c + Math.imul(w, wt) | 0; var jt = (f + (r = r + Math.imul(h, xt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(h, St) | 0) + Math.imul(m, xt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(m, St) | 0) + (o >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, r = Math.imul($, Y), o = (o = Math.imul($, X)) + Math.imul(K, Y) | 0, c = Math.imul(K, X), r = r + Math.imul(D, J) | 0, o = (o = o + Math.imul(D, tt) | 0) + Math.imul(W, J) | 0, c = c + Math.imul(W, tt) | 0, r = r + Math.imul(N, nt) | 0, o = (o = o + Math.imul(N, ot) | 0) + Math.imul(L, nt) | 0, c = c + Math.imul(L, ot) | 0, r = r + Math.imul(R, at) | 0, o = (o = o + Math.imul(R, st) | 0) + Math.imul(z, at) | 0, c = c + Math.imul(z, st) | 0, r = r + Math.imul(T, ct) | 0, o = (o = o + Math.imul(T, lt) | 0) + Math.imul(C, ct) | 0, c = c + Math.imul(C, lt) | 0, r = r + Math.imul(M, ht) | 0, o = (o = o + Math.imul(M, pt) | 0) + Math.imul(I, ht) | 0, c = c + Math.imul(I, pt) | 0, r = r + Math.imul(E, mt) | 0, o = (o = o + Math.imul(E, gt) | 0) + Math.imul(A, mt) | 0, c = c + Math.imul(A, gt) | 0, r = r + Math.imul(x, vt) | 0, o = (o = o + Math.imul(x, wt) | 0) + Math.imul(S, vt) | 0, c = c + Math.imul(S, wt) | 0; var Rt = (f + (r = r + Math.imul(v, xt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(v, St) | 0) + Math.imul(w, xt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(w, St) | 0) + (o >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, r = Math.imul($, J), o = (o = Math.imul($, tt)) + Math.imul(K, J) | 0, c = Math.imul(K, tt), r = r + Math.imul(D, nt) | 0, o = (o = o + Math.imul(D, ot) | 0) + Math.imul(W, nt) | 0, c = c + Math.imul(W, ot) | 0, r = r + Math.imul(N, at) | 0, o = (o = o + Math.imul(N, st) | 0) + Math.imul(L, at) | 0, c = c + Math.imul(L, st) | 0, r = r + Math.imul(R, ct) | 0, o = (o = o + Math.imul(R, lt) | 0) + Math.imul(z, ct) | 0, c = c + Math.imul(z, lt) | 0, r = r + Math.imul(T, ht) | 0, o = (o = o + Math.imul(T, pt) | 0) + Math.imul(C, ht) | 0, c = c + Math.imul(C, pt) | 0, r = r + Math.imul(M, mt) | 0, o = (o = o + Math.imul(M, gt) | 0) + Math.imul(I, mt) | 0, c = c + Math.imul(I, gt) | 0, r = r + Math.imul(E, vt) | 0, o = (o = o + Math.imul(E, wt) | 0) + Math.imul(A, vt) | 0, c = c + Math.imul(A, wt) | 0; var zt = (f + (r = r + Math.imul(x, xt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(x, St) | 0) + Math.imul(S, xt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(S, St) | 0) + (o >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, r = Math.imul($, nt), o = (o = Math.imul($, ot)) + Math.imul(K, nt) | 0, c = Math.imul(K, ot), r = r + Math.imul(D, at) | 0, o = (o = o + Math.imul(D, st) | 0) + Math.imul(W, at) | 0, c = c + Math.imul(W, st) | 0, r = r + Math.imul(N, ct) | 0, o = (o = o + Math.imul(N, lt) | 0) + Math.imul(L, ct) | 0, c = c + Math.imul(L, lt) | 0, r = r + Math.imul(R, ht) | 0, o = (o = o + Math.imul(R, pt) | 0) + Math.imul(z, ht) | 0, c = c + Math.imul(z, pt) | 0, r = r + Math.imul(T, mt) | 0, o = (o = o + Math.imul(T, gt) | 0) + Math.imul(C, mt) | 0, c = c + Math.imul(C, gt) | 0, r = r + Math.imul(M, vt) | 0, o = (o = o + Math.imul(M, wt) | 0) + Math.imul(I, vt) | 0, c = c + Math.imul(I, wt) | 0; var Bt = (f + (r = r + Math.imul(E, xt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(E, St) | 0) + Math.imul(A, xt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(A, St) | 0) + (o >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, r = Math.imul($, at), o = (o = Math.imul($, st)) + Math.imul(K, at) | 0, c = Math.imul(K, st), r = r + Math.imul(D, ct) | 0, o = (o = o + Math.imul(D, lt) | 0) + Math.imul(W, ct) | 0, c = c + Math.imul(W, lt) | 0, r = r + Math.imul(N, ht) | 0, o = (o = o + Math.imul(N, pt) | 0) + Math.imul(L, ht) | 0, c = c + Math.imul(L, pt) | 0, r = r + Math.imul(R, mt) | 0, o = (o = o + Math.imul(R, gt) | 0) + Math.imul(z, mt) | 0, c = c + Math.imul(z, gt) | 0, r = r + Math.imul(T, vt) | 0, o = (o = o + Math.imul(T, wt) | 0) + Math.imul(C, vt) | 0, c = c + Math.imul(C, wt) | 0; var Nt = (f + (r = r + Math.imul(M, xt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(M, St) | 0) + Math.imul(I, xt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(I, St) | 0) + (o >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, r = Math.imul($, ct), o = (o = Math.imul($, lt)) + Math.imul(K, ct) | 0, c = Math.imul(K, lt), r = r + Math.imul(D, ht) | 0, o = (o = o + Math.imul(D, pt) | 0) + Math.imul(W, ht) | 0, c = c + Math.imul(W, pt) | 0, r = r + Math.imul(N, mt) | 0, o = (o = o + Math.imul(N, gt) | 0) + Math.imul(L, mt) | 0, c = c + Math.imul(L, gt) | 0, r = r + Math.imul(R, vt) | 0, o = (o = o + Math.imul(R, wt) | 0) + Math.imul(z, vt) | 0, c = c + Math.imul(z, wt) | 0; var Lt = (f + (r = r + Math.imul(T, xt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(T, St) | 0) + Math.imul(C, xt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(C, St) | 0) + (o >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, r = Math.imul($, ht), o = (o = Math.imul($, pt)) + Math.imul(K, ht) | 0, c = Math.imul(K, pt), r = r + Math.imul(D, mt) | 0, o = (o = o + Math.imul(D, gt) | 0) + Math.imul(W, mt) | 0, c = c + Math.imul(W, gt) | 0, r = r + Math.imul(N, vt) | 0, o = (o = o + Math.imul(N, wt) | 0) + Math.imul(L, vt) | 0, c = c + Math.imul(L, wt) | 0; var Ut = (f + (r = r + Math.imul(R, xt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(R, St) | 0) + Math.imul(z, xt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(z, St) | 0) + (o >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, r = Math.imul($, mt), o = (o = Math.imul($, gt)) + Math.imul(K, mt) | 0, c = Math.imul(K, gt), r = r + Math.imul(D, vt) | 0, o = (o = o + Math.imul(D, wt) | 0) + Math.imul(W, vt) | 0, c = c + Math.imul(W, wt) | 0; var Dt = (f + (r = r + Math.imul(N, xt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(N, St) | 0) + Math.imul(L, xt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(L, St) | 0) + (o >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, r = Math.imul($, vt), o = (o = Math.imul($, wt)) + Math.imul(K, vt) | 0, c = Math.imul(K, wt); var Wt = (f + (r = r + Math.imul(D, xt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(D, St) | 0) + Math.imul(W, xt) | 0)) << 13) | 0;
                                f = ((c = c + Math.imul(W, St) | 0) + (o >>> 13) | 0) + (Wt >>> 26) | 0, Wt &= 67108863; var Ft = (f + (r = Math.imul($, xt)) | 0) + ((8191 & (o = (o = Math.imul($, St)) + Math.imul(K, xt) | 0)) << 13) | 0; return f = ((c = Math.imul(K, St)) + (o >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, l[0] = _t, l[1] = Et, l[2] = At, l[3] = Ot, l[4] = Mt, l[5] = It, l[6] = Pt, l[7] = Tt, l[8] = Ct, l[9] = jt, l[10] = Rt, l[11] = zt, l[12] = Bt, l[13] = Nt, l[14] = Lt, l[15] = Ut, l[16] = Dt, l[17] = Wt, l[18] = Ft, 0 !== f && (l[19] = f, n.length++), n };

                            function _(t, e, n) { n.negative = e.negative ^ t.negative, n.length = t.length + e.length; for (var r = 0, o = 0, c = 0; c < n.length - 1; c++) { var l = o;
                                    o = 0; for (var f = 67108863 & r, d = Math.min(c, e.length - 1), h = Math.max(0, c - t.length + 1); h <= d; h++) { var i = c - h,
                                            m = (0 | t.words[i]) * (0 | e.words[h]),
                                            y = 67108863 & m;
                                        f = 67108863 & (y = y + f | 0), o += (l = (l = l + (m / 67108864 | 0) | 0) + (y >>> 26) | 0) >>> 26, l &= 67108863 }
                                    n.words[c] = f, r = l, l = o } return 0 !== r ? n.words[c] = r : n.length--, n._strip() }

                            function E(t, e, n) { return _(t, e, n) }

                            function A(t, e) { this.x = t, this.y = e }
                            Math.imul || (S = x), c.prototype.mulTo = function(t, e) { var n = this.length + t.length; return 10 === this.length && 10 === t.length ? S(this, t, e) : n < 63 ? x(this, t, e) : n < 1024 ? _(this, t, e) : E(this, t, e) }, A.prototype.makeRBT = function(t) { for (var e = new Array(t), n = c.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, n, t); return e }, A.prototype.revBin = function(t, e, n) { if (0 === t || t === n - 1) return t; for (var r = 0, i = 0; i < e; i++) r |= (1 & t) << e - i - 1, t >>= 1; return r }, A.prototype.permute = function(t, e, n, r, o, c) { for (var i = 0; i < c; i++) r[i] = e[t[i]], o[i] = n[t[i]] }, A.prototype.transform = function(t, e, n, r, o, c) { this.permute(c, t, e, n, r, o); for (var s = 1; s < o; s <<= 1)
                                    for (var l = s << 1, f = Math.cos(2 * Math.PI / l), d = Math.sin(2 * Math.PI / l), p = 0; p < o; p += l)
                                        for (var h = f, m = d, y = 0; y < s; y++) { var v = n[p + y],
                                                w = r[p + y],
                                                k = n[p + y + s],
                                                x = r[p + y + s],
                                                S = h * k - m * x;
                                            x = h * x + m * k, k = S, n[p + y] = v + k, r[p + y] = w + x, n[p + y + s] = v - k, r[p + y + s] = w - x, y !== l && (S = f * h - d * m, m = f * m + d * h, h = S) } }, A.prototype.guessLen13b = function(t, e) { var n = 1 | Math.max(e, t),
                                    r = 1 & n,
                                    i = 0; for (n = n / 2 | 0; n; n >>>= 1) i++; return 1 << i + 1 + r }, A.prototype.conjugate = function(t, e, n) { if (!(n <= 1))
                                    for (var i = 0; i < n / 2; i++) { var r = t[i];
                                        t[i] = t[n - i - 1], t[n - i - 1] = r, r = e[i], e[i] = -e[n - i - 1], e[n - i - 1] = -r } }, A.prototype.normalize13b = function(t, e) { for (var n = 0, i = 0; i < e / 2; i++) { var r = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + n;
                                    t[i] = 67108863 & r, n = r < 67108864 ? 0 : r / 67108864 | 0 } return t }, A.prototype.convert13b = function(t, e, n, o) { for (var c = 0, i = 0; i < e; i++) c += 0 | t[i], n[2 * i] = 8191 & c, c >>>= 13, n[2 * i + 1] = 8191 & c, c >>>= 13; for (i = 2 * e; i < o; ++i) n[i] = 0;
                                r(0 === c), r(0 == (-8192 & c)) }, A.prototype.stub = function(t) { for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0; return e }, A.prototype.mulp = function(t, e, n) { var r = 2 * this.guessLen13b(t.length, e.length),
                                    o = this.makeRBT(r),
                                    c = this.stub(r),
                                    l = new Array(r),
                                    f = new Array(r),
                                    d = new Array(r),
                                    h = new Array(r),
                                    m = new Array(r),
                                    y = new Array(r),
                                    v = n.words;
                                v.length = r, this.convert13b(t.words, t.length, l, r), this.convert13b(e.words, e.length, h, r), this.transform(l, c, f, d, r, o), this.transform(h, c, m, y, r, o); for (var i = 0; i < r; i++) { var w = f[i] * m[i] - d[i] * y[i];
                                    d[i] = f[i] * y[i] + d[i] * m[i], f[i] = w } return this.conjugate(f, d, r), this.transform(f, d, v, c, r, o), this.conjugate(v, c, r), this.normalize13b(v, r), n.negative = t.negative ^ e.negative, n.length = t.length + e.length, n._strip() }, c.prototype.mul = function(t) { var e = new c(null); return e.words = new Array(this.length + t.length), this.mulTo(t, e) }, c.prototype.mulf = function(t) { var e = new c(null); return e.words = new Array(this.length + t.length), E(this, t, e) }, c.prototype.imul = function(t) { return this.clone().mulTo(t, this) }, c.prototype.imuln = function(t) { var e = t < 0;
                                e && (t = -t), r("number" == typeof t), r(t < 67108864); for (var n = 0, i = 0; i < this.length; i++) { var o = (0 | this.words[i]) * t,
                                        c = (67108863 & o) + (67108863 & n);
                                    n >>= 26, n += o / 67108864 | 0, n += c >>> 26, this.words[i] = 67108863 & c } return 0 !== n && (this.words[i] = n, this.length++), e ? this.ineg() : this }, c.prototype.muln = function(t) { return this.clone().imuln(t) }, c.prototype.sqr = function() { return this.mul(this) }, c.prototype.isqr = function() { return this.imul(this.clone()) }, c.prototype.pow = function(t) { var e = function(t) { for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) { var r = n / 26 | 0,
                                            o = n % 26;
                                        e[n] = t.words[r] >>> o & 1 } return e }(t); if (0 === e.length) return new c(1); for (var n = this, i = 0; i < e.length && 0 === e[i]; i++, n = n.sqr()); if (++i < e.length)
                                    for (var q = n.sqr(); i < e.length; i++, q = q.sqr()) 0 !== e[i] && (n = n.mul(q)); return n }, c.prototype.iushln = function(t) { r("number" == typeof t && t >= 0); var i, e = t % 26,
                                    s = (t - e) / 26,
                                    n = 67108863 >>> 26 - e << 26 - e; if (0 !== e) { var o = 0; for (i = 0; i < this.length; i++) { var c = this.words[i] & n,
                                            l = (0 | this.words[i]) - c << e;
                                        this.words[i] = l | o, o = c >>> 26 - e }
                                    o && (this.words[i] = o, this.length++) } if (0 !== s) { for (i = this.length - 1; i >= 0; i--) this.words[i + s] = this.words[i]; for (i = 0; i < s; i++) this.words[i] = 0;
                                    this.length += s } return this._strip() }, c.prototype.ishln = function(t) { return r(0 === this.negative), this.iushln(t) }, c.prototype.iushrn = function(t, e, n) { var o;
                                r("number" == typeof t && t >= 0), o = e ? (e - e % 26) / 26 : 0; var c = t % 26,
                                    s = Math.min((t - c) / 26, this.length),
                                    mask = 67108863 ^ 67108863 >>> c << c,
                                    l = n; if (o -= s, o = Math.max(0, o), l) { for (var i = 0; i < s; i++) l.words[i] = this.words[i];
                                    l.length = s } if (0 === s);
                                else if (this.length > s)
                                    for (this.length -= s, i = 0; i < this.length; i++) this.words[i] = this.words[i + s];
                                else this.words[0] = 0, this.length = 1; var f = 0; for (i = this.length - 1; i >= 0 && (0 !== f || i >= o); i--) { var d = 0 | this.words[i];
                                    this.words[i] = f << 26 - c | d >>> c, f = d & mask } return l && 0 !== f && (l.words[l.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip() }, c.prototype.ishrn = function(t, e, n) { return r(0 === this.negative), this.iushrn(t, e, n) }, c.prototype.shln = function(t) { return this.clone().ishln(t) }, c.prototype.ushln = function(t) { return this.clone().iushln(t) }, c.prototype.shrn = function(t) { return this.clone().ishrn(t) }, c.prototype.ushrn = function(t) { return this.clone().iushrn(t) }, c.prototype.testn = function(t) { r("number" == typeof t && t >= 0); var e = t % 26,
                                    s = (t - e) / 26,
                                    q = 1 << e; return !(this.length <= s) && !!(this.words[s] & q) }, c.prototype.imaskn = function(t) { r("number" == typeof t && t >= 0); var e = t % 26,
                                    s = (t - e) / 26; if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= s) return this; if (0 !== e && s++, this.length = Math.min(s, this.length), 0 !== e) { var mask = 67108863 ^ 67108863 >>> e << e;
                                    this.words[this.length - 1] &= mask } return this._strip() }, c.prototype.maskn = function(t) { return this.clone().imaskn(t) }, c.prototype.iaddn = function(t) { return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t) }, c.prototype._iaddn = function(t) { this.words[0] += t; for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++; return this.length = Math.max(this.length, i + 1), this }, c.prototype.isubn = function(t) { if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t); if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this; if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                                else
                                    for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1; return this._strip() }, c.prototype.addn = function(t) { return this.clone().iaddn(t) }, c.prototype.subn = function(t) { return this.clone().isubn(t) }, c.prototype.iabs = function() { return this.negative = 0, this }, c.prototype.abs = function() { return this.clone().iabs() }, c.prototype._ishlnsubmul = function(t, e, n) { var i, o, c = t.length + n;
                                this._expand(c); var l = 0; for (i = 0; i < t.length; i++) { o = (0 | this.words[i + n]) + l; var f = (0 | t.words[i]) * e;
                                    l = ((o -= 67108863 & f) >> 26) - (f / 67108864 | 0), this.words[i + n] = 67108863 & o } for (; i < this.length - n; i++) l = (o = (0 | this.words[i + n]) + l) >> 26, this.words[i + n] = 67108863 & o; if (0 === l) return this._strip(); for (r(-1 === l), l = 0, i = 0; i < this.length; i++) l = (o = -(0 | this.words[i]) + l) >> 26, this.words[i] = 67108863 & o; return this.negative = 1, this._strip() }, c.prototype._wordDiv = function(t, e) { var n = (this.length, t.length),
                                    a = this.clone(),
                                    b = t,
                                    r = 0 | b.words[b.length - 1];
                                0 !== (n = 26 - this._countBits(r)) && (b = b.ushln(n), a.iushln(n), r = 0 | b.words[b.length - 1]); var q, o = a.length - b.length; if ("mod" !== e) {
                                    (q = new c(null)).length = o + 1, q.words = new Array(q.length); for (var i = 0; i < q.length; i++) q.words[i] = 0 } var l = a.clone()._ishlnsubmul(b, 1, o);
                                0 === l.negative && (a = l, q && (q.words[o] = 1)); for (var f = o - 1; f >= 0; f--) { var d = 67108864 * (0 | a.words[b.length + f]) + (0 | a.words[b.length + f - 1]); for (d = Math.min(d / r | 0, 67108863), a._ishlnsubmul(b, d, f); 0 !== a.negative;) d--, a.negative = 0, a._ishlnsubmul(b, 1, f), a.isZero() || (a.negative ^= 1);
                                    q && (q.words[f] = d) } return q && q._strip(), a._strip(), "div" !== e && 0 !== n && a.iushrn(n), { div: q || null, mod: a } }, c.prototype.divmod = function(t, e, n) { return r(!t.isZero()), this.isZero() ? { div: new c(0), mod: new c(0) } : 0 !== this.negative && 0 === t.negative ? (l = this.neg().divmod(t, e), "mod" !== e && (div = l.div.neg()), "div" !== e && (o = l.mod.neg(), n && 0 !== o.negative && o.iadd(t)), { div: div, mod: o }) : 0 === this.negative && 0 !== t.negative ? (l = this.divmod(t.neg(), e), "mod" !== e && (div = l.div.neg()), { div: div, mod: l.mod }) : 0 != (this.negative & t.negative) ? (l = this.neg().divmod(t.neg(), e), "div" !== e && (o = l.mod.neg(), n && 0 !== o.negative && o.isub(t)), { div: l.div, mod: o }) : t.length > this.length || this.cmp(t) < 0 ? { div: new c(0), mod: this } : 1 === t.length ? "div" === e ? { div: this.divn(t.words[0]), mod: null } : "mod" === e ? { div: null, mod: new c(this.modrn(t.words[0])) } : { div: this.divn(t.words[0]), mod: new c(this.modrn(t.words[0])) } : this._wordDiv(t, e); var div, o, l }, c.prototype.div = function(t) { return this.divmod(t, "div", !1).div }, c.prototype.mod = function(t) { return this.divmod(t, "mod", !1).mod }, c.prototype.umod = function(t) { return this.divmod(t, "mod", !0).mod }, c.prototype.divRound = function(t) { var e = this.divmod(t); if (e.mod.isZero()) return e.div; var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                                    r = t.ushrn(1),
                                    o = t.andln(1),
                                    c = n.cmp(r); return c < 0 || 1 === o && 0 === c ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1) }, c.prototype.modrn = function(t) { var e = t < 0;
                                e && (t = -t), r(t <= 67108863); for (var p = (1 << 26) % t, n = 0, i = this.length - 1; i >= 0; i--) n = (p * n + (0 | this.words[i])) % t; return e ? -n : n }, c.prototype.modn = function(t) { return this.modrn(t) }, c.prototype.idivn = function(t) { var e = t < 0;
                                e && (t = -t), r(t <= 67108863); for (var n = 0, i = this.length - 1; i >= 0; i--) { var o = (0 | this.words[i]) + 67108864 * n;
                                    this.words[i] = o / t | 0, n = o % t } return this._strip(), e ? this.ineg() : this }, c.prototype.divn = function(t) { return this.clone().idivn(t) }, c.prototype.egcd = function(p) { r(0 === p.negative), r(!p.isZero()); var t = this,
                                    e = p.clone();
                                t = 0 !== t.negative ? t.umod(p) : t.clone(); for (var n = new c(1), o = new c(0), l = new c(0), f = new c(1), g = 0; t.isEven() && e.isEven();) t.iushrn(1), e.iushrn(1), ++g; for (var d = e.clone(), h = t.clone(); !t.isZero();) { for (var i = 0, m = 1; 0 == (t.words[0] & m) && i < 26; ++i, m <<= 1); if (i > 0)
                                        for (t.iushrn(i); i-- > 0;)(n.isOdd() || o.isOdd()) && (n.iadd(d), o.isub(h)), n.iushrn(1), o.iushrn(1); for (var y = 0, v = 1; 0 == (e.words[0] & v) && y < 26; ++y, v <<= 1); if (y > 0)
                                        for (e.iushrn(y); y-- > 0;)(l.isOdd() || f.isOdd()) && (l.iadd(d), f.isub(h)), l.iushrn(1), f.iushrn(1);
                                    t.cmp(e) >= 0 ? (t.isub(e), n.isub(l), o.isub(f)) : (e.isub(t), l.isub(n), f.isub(o)) } return { a: l, b: f, gcd: e.iushln(g) } }, c.prototype._invmp = function(p) { r(0 === p.negative), r(!p.isZero()); var a = this,
                                    b = p.clone();
                                a = 0 !== a.negative ? a.umod(p) : a.clone(); for (var t, e = new c(1), n = new c(0), o = b.clone(); a.cmpn(1) > 0 && b.cmpn(1) > 0;) { for (var i = 0, l = 1; 0 == (a.words[0] & l) && i < 26; ++i, l <<= 1); if (i > 0)
                                        for (a.iushrn(i); i-- > 0;) e.isOdd() && e.iadd(o), e.iushrn(1); for (var f = 0, d = 1; 0 == (b.words[0] & d) && f < 26; ++f, d <<= 1); if (f > 0)
                                        for (b.iushrn(f); f-- > 0;) n.isOdd() && n.iadd(o), n.iushrn(1);
                                    a.cmp(b) >= 0 ? (a.isub(b), e.isub(n)) : (b.isub(a), n.isub(e)) } return (t = 0 === a.cmpn(1) ? e : n).cmpn(0) < 0 && t.iadd(p), t }, c.prototype.gcd = function(t) { if (this.isZero()) return t.abs(); if (t.isZero()) return this.abs(); var a = this.clone(),
                                    b = t.clone();
                                a.negative = 0, b.negative = 0; for (var e = 0; a.isEven() && b.isEven(); e++) a.iushrn(1), b.iushrn(1); for (;;) { for (; a.isEven();) a.iushrn(1); for (; b.isEven();) b.iushrn(1); var n = a.cmp(b); if (n < 0) { var r = a;
                                        a = b, b = r } else if (0 === n || 0 === b.cmpn(1)) break;
                                    a.isub(b) } return b.iushln(e) }, c.prototype.invm = function(t) { return this.egcd(t).a.umod(t) }, c.prototype.isEven = function() { return 0 == (1 & this.words[0]) }, c.prototype.isOdd = function() { return 1 == (1 & this.words[0]) }, c.prototype.andln = function(t) { return this.words[0] & t }, c.prototype.bincn = function(t) { r("number" == typeof t); var e = t % 26,
                                    s = (t - e) / 26,
                                    q = 1 << e; if (this.length <= s) return this._expand(s + 1), this.words[s] |= q, this; for (var n = q, i = s; 0 !== n && i < this.length; i++) { var o = 0 | this.words[i];
                                    n = (o += n) >>> 26, o &= 67108863, this.words[i] = o } return 0 !== n && (this.words[i] = n, this.length++), this }, c.prototype.isZero = function() { return 1 === this.length && 0 === this.words[0] }, c.prototype.cmpn = function(t) { var e, n = t < 0; if (0 !== this.negative && !n) return -1; if (0 === this.negative && n) return 1; if (this._strip(), this.length > 1) e = 1;
                                else { n && (t = -t), r(t <= 67108863, "Number is too big"); var o = 0 | this.words[0];
                                    e = o === t ? 0 : o < t ? -1 : 1 } return 0 !== this.negative ? 0 | -e : e }, c.prototype.cmp = function(t) { if (0 !== this.negative && 0 === t.negative) return -1; if (0 === this.negative && 0 !== t.negative) return 1; var e = this.ucmp(t); return 0 !== this.negative ? 0 | -e : e }, c.prototype.ucmp = function(t) { if (this.length > t.length) return 1; if (this.length < t.length) return -1; for (var e = 0, i = this.length - 1; i >= 0; i--) { var a = 0 | this.words[i],
                                        b = 0 | t.words[i]; if (a !== b) { a < b ? e = -1 : a > b && (e = 1); break } } return e }, c.prototype.gtn = function(t) { return 1 === this.cmpn(t) }, c.prototype.gt = function(t) { return 1 === this.cmp(t) }, c.prototype.gten = function(t) { return this.cmpn(t) >= 0 }, c.prototype.gte = function(t) { return this.cmp(t) >= 0 }, c.prototype.ltn = function(t) { return -1 === this.cmpn(t) }, c.prototype.lt = function(t) { return -1 === this.cmp(t) }, c.prototype.lten = function(t) { return this.cmpn(t) <= 0 }, c.prototype.lte = function(t) { return this.cmp(t) <= 0 }, c.prototype.eqn = function(t) { return 0 === this.cmpn(t) }, c.prototype.eq = function(t) { return 0 === this.cmp(t) }, c.red = function(t) { return new j(t) }, c.prototype.toRed = function(t) { return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t) }, c.prototype.fromRed = function() { return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this) }, c.prototype._forceRed = function(t) { return this.red = t, this }, c.prototype.forceRed = function(t) { return r(!this.red, "Already a number in reduction context"), this._forceRed(t) }, c.prototype.redAdd = function(t) { return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t) }, c.prototype.redIAdd = function(t) { return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t) }, c.prototype.redSub = function(t) { return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t) }, c.prototype.redISub = function(t) { return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t) }, c.prototype.redShl = function(t) { return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t) }, c.prototype.redMul = function(t) { return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t) }, c.prototype.redIMul = function(t) { return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t) }, c.prototype.redSqr = function() { return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this) }, c.prototype.redISqr = function() { return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this) }, c.prototype.redSqrt = function() { return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this) }, c.prototype.redInvm = function() { return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this) }, c.prototype.redNeg = function() { return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this) }, c.prototype.redPow = function(t) { return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t) }; var O = { k256: null, p224: null, p192: null, p25519: null };

                            function M(t, p) { this.name = t, this.p = new c(p, 16), this.n = this.p.bitLength(), this.k = new c(1).iushln(this.n).isub(this.p), this.tmp = this._tmp() }

                            function I() { M.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f") }

                            function P() { M.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001") }

                            function T() { M.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff") }

                            function C() { M.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed") }

                            function j(t) { if ("string" == typeof t) { var e = c._prime(t);
                                    this.m = e.p, this.prime = e } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null }

                            function R(t) { j.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new c(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv) }
                            M.prototype._tmp = function() { var t = new c(null); return t.words = new Array(Math.ceil(this.n / 13)), t }, M.prototype.ireduce = function(t) { var e, n = t;
                                do { this.split(n, this.tmp), e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength() } while (e > this.n); var r = e < this.n ? -1 : n.ucmp(this.p); return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : void 0 !== n.strip ? n.strip() : n._strip(), n }, M.prototype.split = function(input, t) { input.iushrn(this.n, 0, t) }, M.prototype.imulK = function(t) { return t.imul(this.k) }, o(I, M), I.prototype.split = function(input, output) { for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i]; if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1); var e = input.words[9]; for (output.words[output.length++] = e & mask, i = 10; i < input.length; i++) { var n = 0 | input.words[i];
                                    input.words[i - 10] = (n & mask) << 4 | e >>> 22, e = n }
                                e >>>= 22, input.words[i - 10] = e, 0 === e && input.length > 10 ? input.length -= 10 : input.length -= 9 }, I.prototype.imulK = function(t) { t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2; for (var e = 0, i = 0; i < t.length; i++) { var n = 0 | t.words[i];
                                    e += 977 * n, t.words[i] = 67108863 & e, e = 64 * n + (e / 67108864 | 0) } return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t }, o(P, M), o(T, M), o(C, M), C.prototype.imulK = function(t) { for (var e = 0, i = 0; i < t.length; i++) { var n = 19 * (0 | t.words[i]) + e,
                                        r = 67108863 & n;
                                    n >>>= 26, t.words[i] = r, e = n } return 0 !== e && (t.words[t.length++] = e), t }, c._prime = function(t) { if (O[t]) return O[t]; var e; if ("k256" === t) e = new I;
                                else if ("p224" === t) e = new P;
                                else if ("p192" === t) e = new T;
                                else { if ("p25519" !== t) throw new Error("Unknown prime " + t);
                                    e = new C } return O[t] = e, e }, j.prototype._verify1 = function(a) { r(0 === a.negative, "red works only with positives"), r(a.red, "red works only with red numbers") }, j.prototype._verify2 = function(a, b) { r(0 == (a.negative | b.negative), "red works only with positives"), r(a.red && a.red === b.red, "red works only with red numbers") }, j.prototype.imod = function(a) { return this.prime ? this.prime.ireduce(a)._forceRed(this) : (m(a, a.umod(this.m)._forceRed(this)), a) }, j.prototype.neg = function(a) { return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this) }, j.prototype.add = function(a, b) { this._verify2(a, b); var t = a.add(b); return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this) }, j.prototype.iadd = function(a, b) { this._verify2(a, b); var t = a.iadd(b); return t.cmp(this.m) >= 0 && t.isub(this.m), t }, j.prototype.sub = function(a, b) { this._verify2(a, b); var t = a.sub(b); return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this) }, j.prototype.isub = function(a, b) { this._verify2(a, b); var t = a.isub(b); return t.cmpn(0) < 0 && t.iadd(this.m), t }, j.prototype.shl = function(a, t) { return this._verify1(a), this.imod(a.ushln(t)) }, j.prototype.imul = function(a, b) { return this._verify2(a, b), this.imod(a.imul(b)) }, j.prototype.mul = function(a, b) { return this._verify2(a, b), this.imod(a.mul(b)) }, j.prototype.isqr = function(a) { return this.imul(a, a.clone()) }, j.prototype.sqr = function(a) { return this.mul(a, a) }, j.prototype.sqrt = function(a) { if (a.isZero()) return a.clone(); var t = this.m.andln(3); if (r(t % 2 == 1), 3 === t) { var e = this.m.add(new c(1)).iushrn(2); return this.pow(a, e) } for (var q = this.m.subn(1), s = 0; !q.isZero() && 0 === q.andln(1);) s++, q.iushrn(1);
                                r(!q.isZero()); var n = new c(1).toRed(this),
                                    o = n.redNeg(),
                                    l = this.m.subn(1).iushrn(1),
                                    f = this.m.bitLength(); for (f = new c(2 * f * f).toRed(this); 0 !== this.pow(f, l).cmp(o);) f.redIAdd(o); for (var d = this.pow(f, q), h = this.pow(a, q.addn(1).iushrn(1)), m = this.pow(a, q), y = s; 0 !== m.cmp(n);) { for (var v = m, i = 0; 0 !== v.cmp(n); i++) v = v.redSqr();
                                    r(i < y); var b = this.pow(d, new c(1).iushln(y - i - 1));
                                    h = h.redMul(b), d = b.redSqr(), m = m.redMul(d), y = i } return h }, j.prototype.invm = function(a) { var t = a._invmp(this.m); return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t) }, j.prototype.pow = function(a, t) { if (t.isZero()) return new c(1).toRed(this); if (0 === t.cmpn(1)) return a.clone(); var e = new Array(16);
                                e[0] = new c(1).toRed(this), e[1] = a; for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], a); var n = e[0],
                                    r = 0,
                                    o = 0,
                                    l = t.bitLength() % 26; for (0 === l && (l = 26), i = t.length - 1; i >= 0; i--) { for (var f = t.words[i], d = l - 1; d >= 0; d--) { var h = f >> d & 1;
                                        n !== e[0] && (n = this.sqr(n)), 0 !== h || 0 !== r ? (r <<= 1, r |= h, (4 === ++o || 0 === i && 0 === d) && (n = this.mul(n, e[r]), o = 0, r = 0)) : o = 0 }
                                    l = 26 } return n }, j.prototype.convertTo = function(t) { var e = t.umod(this.m); return e === t ? e.clone() : e }, j.prototype.convertFrom = function(t) { var e = t.clone(); return e.red = null, e }, c.mont = function(t) { return new R(t) }, o(R, j), R.prototype.convertTo = function(t) { return this.imod(t.ushln(this.shift)) }, R.prototype.convertFrom = function(t) { var e = this.imod(t.mul(this.rinv)); return e.red = null, e }, R.prototype.imul = function(a, b) { if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a; var t = a.imul(b),
                                    e = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                    u = t.isub(e).iushrn(this.shift),
                                    n = u; return u.cmp(this.m) >= 0 ? n = u.isub(this.m) : u.cmpn(0) < 0 && (n = u.iadd(this.m)), n._forceRed(this) }, R.prototype.mul = function(a, b) { if (a.isZero() || b.isZero()) return new c(0)._forceRed(this); var t = a.mul(b),
                                    e = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                    u = t.isub(e).iushrn(this.shift),
                                    n = u; return u.cmp(this.m) >= 0 ? n = u.isub(this.m) : u.cmpn(0) < 0 && (n = u.iadd(this.m)), n._forceRed(this) }, R.prototype.invm = function(a) { return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this) } }(t, this) }).call(this, n(185)(t)) }, , , function(t, e, n) { var r;! function(o) { "use strict"; var c, l = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                            f = Math.ceil,
                            d = Math.floor,
                            h = "[BigNumber Error] ",
                            m = h + "Number primitive has more than 15 significant digits: ",
                            y = 1e14,
                            v = 14,
                            w = 9007199254740991,
                            k = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                            x = 1e7,
                            S = 1e9;

                        function _(t) { var i = 0 | t; return t > 0 || t === i ? i : i - 1 }

                        function E(a) { for (var s, t, i = 1, e = a.length, n = a[0] + ""; i < e;) { for (s = a[i++] + "", t = v - s.length; t--; s = "0" + s);
                                n += s } for (e = n.length; 48 === n.charCodeAt(--e);); return n.slice(0, e + 1 || 1) }

                        function A(t, e) { var a, b, n = t.c,
                                r = e.c,
                                i = t.s,
                                o = e.s,
                                c = t.e,
                                l = e.e; if (!i || !o) return null; if (a = n && !n[0], b = r && !r[0], a || b) return a ? b ? 0 : -o : i; if (i != o) return i; if (a = i < 0, b = c == l, !n || !r) return b ? 0 : !n ^ a ? 1 : -1; if (!b) return c > l ^ a ? 1 : -1; for (o = (c = n.length) < (l = r.length) ? c : l, i = 0; i < o; i++)
                                if (n[i] != r[i]) return n[i] > r[i] ^ a ? 1 : -1;
                            return c == l ? 0 : c > l ^ a ? 1 : -1 }

                        function O(t, e, n, r) { if (t < e || t > n || t !== d(t)) throw Error(h + (r || "Argument") + ("number" == typeof t ? t < e || t > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t)) }

                        function M(t) { var e = t.c.length - 1; return _(t.e / v) == e && t.c[e] % 2 != 0 }

                        function I(t, e) { return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e }

                        function P(t, e, n) { var r, o; if (e < 0) { for (o = n + "."; ++e; o += n);
                                t = o + t } else if (++e > (r = t.length)) { for (o = n, e -= r; --e; o += n);
                                t += o } else e < r && (t = t.slice(0, e) + "." + t.slice(e)); return t }(c = function t(e) { var div, n, r, o, c, T, C, j, R, z, B = Y.prototype = { constructor: Y, toString: null, valueOf: null },
                                N = new Y(1),
                                L = 20,
                                U = 4,
                                D = -7,
                                W = 21,
                                F = -1e7,
                                $ = 1e7,
                                K = !1,
                                V = 1,
                                H = 0,
                                Z = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: " ", suffix: "" },
                                G = "0123456789abcdefghijklmnopqrstuvwxyz";

                            function Y(t, b) { var e, o, c, f, i, h, y, k, x = this; if (!(x instanceof Y)) return new Y(t, b); if (null == b) { if (t && !0 === t._isBigNumber) return x.s = t.s, void(!t.c || t.e > $ ? x.c = x.e = null : t.e < F ? x.c = [x.e = 0] : (x.e = t.e, x.c = t.c.slice())); if ((h = "number" == typeof t) && 0 * t == 0) { if (x.s = 1 / t < 0 ? (t = -t, -1) : 1, t === ~~t) { for (f = 0, i = t; i >= 10; i /= 10, f++); return void(f > $ ? x.c = x.e = null : (x.e = f, x.c = [t])) }
                                        k = String(t) } else { if (!l.test(k = String(t))) return r(x, k, h);
                                        x.s = 45 == k.charCodeAt(0) ? (k = k.slice(1), -1) : 1 }(f = k.indexOf(".")) > -1 && (k = k.replace(".", "")), (i = k.search(/e/i)) > 0 ? (f < 0 && (f = i), f += +k.slice(i + 1), k = k.substring(0, i)) : f < 0 && (f = k.length) } else { if (O(b, 2, G.length, "Base"), 10 == b) return tt(x = new Y(t), L + x.e + 1, U); if (k = String(t), h = "number" == typeof t) { if (0 * t != 0) return r(x, k, h, b); if (x.s = 1 / t < 0 ? (k = k.slice(1), -1) : 1, Y.DEBUG && k.replace(/^0\.0*|\./, "").length > 15) throw Error(m + t) } else x.s = 45 === k.charCodeAt(0) ? (k = k.slice(1), -1) : 1; for (e = G.slice(0, b), f = i = 0, y = k.length; i < y; i++)
                                        if (e.indexOf(o = k.charAt(i)) < 0) { if ("." == o) { if (i > f) { f = y; continue } } else if (!c && (k == k.toUpperCase() && (k = k.toLowerCase()) || k == k.toLowerCase() && (k = k.toUpperCase()))) { c = !0, i = -1, f = 0; continue } return r(x, String(t), h, b) }
                                    h = !1, (f = (k = n(k, b, 10, x.s)).indexOf(".")) > -1 ? k = k.replace(".", "") : f = k.length } for (i = 0; 48 === k.charCodeAt(i); i++); for (y = k.length; 48 === k.charCodeAt(--y);); if (k = k.slice(i, ++y)) { if (y -= i, h && Y.DEBUG && y > 15 && (t > w || t !== d(t))) throw Error(m + x.s * t); if ((f = f - i - 1) > $) x.c = x.e = null;
                                    else if (f < F) x.c = [x.e = 0];
                                    else { if (x.e = f, x.c = [], i = (f + 1) % v, f < 0 && (i += v), i < y) { for (i && x.c.push(+k.slice(0, i)), y -= v; i < y;) x.c.push(+k.slice(i, i += v));
                                            i = v - (k = k.slice(i)).length } else i -= y; for (; i--; k += "0");
                                        x.c.push(+k) } } else x.c = [x.e = 0] }

                            function X(t, i, e, n) { var r, o, c, l, f; if (null == e ? e = U : O(e, 0, 8), !t.c) return t.toString(); if (r = t.c[0], c = t.e, null == i) f = E(t.c), f = 1 == n || 2 == n && (c <= D || c >= W) ? I(f, c) : P(f, c, "0");
                                else if (o = (t = tt(new Y(t), i, e)).e, l = (f = E(t.c)).length, 1 == n || 2 == n && (i <= o || o <= D)) { for (; l < i; f += "0", l++);
                                    f = I(f, o) } else if (i -= c, f = P(f, o, "0"), o + 1 > l) { if (--i > 0)
                                        for (f += "."; i--; f += "0"); } else if ((i += o - l) > 0)
                                    for (o + 1 == l && (f += "."); i--; f += "0"); return t.s < 0 && r ? "-" + f : f }

                            function Q(t, e) { for (var n, i = 1, r = new Y(t[0]); i < t.length; i++) { if (!(n = new Y(t[i])).s) { r = n; break }
                                    e.call(r, n) && (r = n) } return r }

                            function J(t, e, n) { for (var i = 1, r = e.length; !e[--r]; e.pop()); for (r = e[0]; r >= 10; r /= 10, i++); return (n = i + n * v - 1) > $ ? t.c = t.e = null : n < F ? t.c = [t.e = 0] : (t.e = n, t.c = e), t }

                            function tt(t, e, n, r) { var o, i, c, l, h, m, w, x = t.c,
                                    S = k; if (x) { t: { for (o = 1, l = x[0]; l >= 10; l /= 10, o++); if ((i = e - o) < 0) i += v, c = e, w = (h = x[m = 0]) / S[o - c - 1] % 10 | 0;
                                        else if ((m = f((i + 1) / v)) >= x.length) { if (!r) break t; for (; x.length <= m; x.push(0));
                                            h = w = 0, o = 1, c = (i %= v) - v + 1 } else { for (h = l = x[m], o = 1; l >= 10; l /= 10, o++);
                                            w = (c = (i %= v) - v + o) < 0 ? 0 : h / S[o - c - 1] % 10 | 0 } if (r = r || e < 0 || null != x[m + 1] || (c < 0 ? h : h % S[o - c - 1]), r = n < 4 ? (w || r) && (0 == n || n == (t.s < 0 ? 3 : 2)) : w > 5 || 5 == w && (4 == n || r || 6 == n && (i > 0 ? c > 0 ? h / S[o - c] : 0 : x[m - 1]) % 10 & 1 || n == (t.s < 0 ? 8 : 7)), e < 1 || !x[0]) return x.length = 0, r ? (e -= t.e + 1, x[0] = S[(v - e % v) % v], t.e = -e || 0) : x[0] = t.e = 0, t; if (0 == i ? (x.length = m, l = 1, m--) : (x.length = m + 1, l = S[v - i], x[m] = c > 0 ? d(h / S[o - c] % S[c]) * l : 0), r)
                                            for (;;) { if (0 == m) { for (i = 1, c = x[0]; c >= 10; c /= 10, i++); for (c = x[0] += l, l = 1; c >= 10; c /= 10, l++);
                                                    i != l && (t.e++, x[0] == y && (x[0] = 1)); break } if (x[m] += l, x[m] != y) break;
                                                x[m--] = 0, l = 1 }
                                        for (i = x.length; 0 === x[--i]; x.pop()); }
                                    t.e > $ ? t.c = t.e = null : t.e < F && (t.c = [t.e = 0]) } return t }

                            function et(t) { var e, n = t.e; return null === n ? t.toString() : (e = E(t.c), e = n <= D || n >= W ? I(e, n) : P(e, n, "0"), t.s < 0 ? "-" + e : e) } return Y.clone = t, Y.ROUND_UP = 0, Y.ROUND_DOWN = 1, Y.ROUND_CEIL = 2, Y.ROUND_FLOOR = 3, Y.ROUND_HALF_UP = 4, Y.ROUND_HALF_DOWN = 5, Y.ROUND_HALF_EVEN = 6, Y.ROUND_HALF_CEIL = 7, Y.ROUND_HALF_FLOOR = 8, Y.EUCLID = 9, Y.config = Y.set = function(t) { var p, e; if (null != t) { if ("object" != typeof t) throw Error(h + "Object expected: " + t); if (t.hasOwnProperty(p = "DECIMAL_PLACES") && (O(e = t[p], 0, S, p), L = e), t.hasOwnProperty(p = "ROUNDING_MODE") && (O(e = t[p], 0, 8, p), U = e), t.hasOwnProperty(p = "EXPONENTIAL_AT") && ((e = t[p]) && e.pop ? (O(e[0], -S, 0, p), O(e[1], 0, S, p), D = e[0], W = e[1]) : (O(e, -S, S, p), D = -(W = e < 0 ? -e : e))), t.hasOwnProperty(p = "RANGE"))
                                        if ((e = t[p]) && e.pop) O(e[0], -S, -1, p), O(e[1], 1, S, p), F = e[0], $ = e[1];
                                        else { if (O(e, -S, S, p), !e) throw Error(h + p + " cannot be zero: " + e);
                                            F = -($ = e < 0 ? -e : e) }
                                    if (t.hasOwnProperty(p = "CRYPTO")) { if ((e = t[p]) !== !!e) throw Error(h + p + " not true or false: " + e); if (e) { if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw K = !e, Error(h + "crypto unavailable");
                                            K = e } else K = e } if (t.hasOwnProperty(p = "MODULO_MODE") && (O(e = t[p], 0, 9, p), V = e), t.hasOwnProperty(p = "POW_PRECISION") && (O(e = t[p], 0, S, p), H = e), t.hasOwnProperty(p = "FORMAT")) { if ("object" != typeof(e = t[p])) throw Error(h + p + " not an object: " + e);
                                        Z = e } if (t.hasOwnProperty(p = "ALPHABET")) { if ("string" != typeof(e = t[p]) || /^.?$|[+\-.\s]|(.).*\1/.test(e)) throw Error(h + p + " invalid: " + e);
                                        G = e } } return { DECIMAL_PLACES: L, ROUNDING_MODE: U, EXPONENTIAL_AT: [D, W], RANGE: [F, $], CRYPTO: K, MODULO_MODE: V, POW_PRECISION: H, FORMAT: Z, ALPHABET: G } }, Y.isBigNumber = function(t) { if (!t || !0 !== t._isBigNumber) return !1; if (!Y.DEBUG) return !0; var i, e, n = t.c,
                                    r = t.e,
                                    s = t.s;
                                t: if ("[object Array]" == {}.toString.call(n)) { if ((1 === s || -1 === s) && r >= -S && r <= S && r === d(r)) { if (0 === n[0]) { if (0 === r && 1 === n.length) return !0; break t } if ((i = (r + 1) % v) < 1 && (i += v), String(n[0]).length == i) { for (i = 0; i < n.length; i++)
                                                if ((e = n[i]) < 0 || e >= y || e !== d(e)) break t;
                                            if (0 !== e) return !0 } } } else if (null === n && null === r && (null === s || 1 === s || -1 === s)) return !0; throw Error(h + "Invalid BigNumber: " + t) }, Y.maximum = Y.max = function() { return Q(arguments, B.lt) }, Y.minimum = Y.min = function() { return Q(arguments, B.gt) }, Y.random = (o = 9007199254740992, c = Math.random() * o & 2097151 ? function() { return d(Math.random() * o) } : function() { return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0) }, function(t) { var a, b, e, n, r, i = 0,
                                    o = [],
                                    l = new Y(N); if (null == t ? t = L : O(t, 0, S), n = f(t / v), K)
                                    if (crypto.getRandomValues) { for (a = crypto.getRandomValues(new Uint32Array(n *= 2)); i < n;)(r = 131072 * a[i] + (a[i + 1] >>> 11)) >= 9e15 ? (b = crypto.getRandomValues(new Uint32Array(2)), a[i] = b[0], a[i + 1] = b[1]) : (o.push(r % 1e14), i += 2);
                                        i = n / 2 } else { if (!crypto.randomBytes) throw K = !1, Error(h + "crypto unavailable"); for (a = crypto.randomBytes(n *= 7); i < n;)(r = 281474976710656 * (31 & a[i]) + 1099511627776 * a[i + 1] + 4294967296 * a[i + 2] + 16777216 * a[i + 3] + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6]) >= 9e15 ? crypto.randomBytes(7).copy(a, i) : (o.push(r % 1e14), i += 7);
                                        i = n / 7 }
                                if (!K)
                                    for (; i < n;)(r = c()) < 9e15 && (o[i++] = r % 1e14); for (n = o[--i], t %= v, n && t && (r = k[v - t], o[i] = d(n / r) * r); 0 === o[i]; o.pop(), i--); if (i < 0) o = [e = 0];
                                else { for (e = -1; 0 === o[0]; o.splice(0, 1), e -= v); for (i = 1, r = o[0]; r >= 10; r /= 10, i++);
                                    i < v && (e -= v - i) } return l.e = e, l.c = o, l }), Y.sum = function() { for (var i = 1, t = arguments, e = new Y(t[0]); i < t.length;) e = e.plus(t[i++]); return e }, n = function() { var t = "0123456789";

                                function e(t, e, n, r) { for (var o, c, l = [0], i = 0, f = t.length; i < f;) { for (c = l.length; c--; l[c] *= e); for (l[0] += r.indexOf(t.charAt(i++)), o = 0; o < l.length; o++) l[o] > n - 1 && (null == l[o + 1] && (l[o + 1] = 0), l[o + 1] += l[o] / n | 0, l[o] %= n) } return l.reverse() } return function(n, r, o, c, l) { var f, d, h, m, y, v, w, k, i = n.indexOf("."),
                                        x = L,
                                        S = U; for (i >= 0 && (m = H, H = 0, n = n.replace(".", ""), v = (k = new Y(r)).pow(n.length - i), H = m, k.c = e(P(E(v.c), v.e, "0"), 10, o, t), k.e = k.c.length), h = m = (w = e(n, r, o, l ? (f = G, t) : (f = t, G))).length; 0 == w[--m]; w.pop()); if (!w[0]) return f.charAt(0); if (i < 0 ? --h : (v.c = w, v.e = h, v.s = c, w = (v = div(v, k, x, S, o)).c, y = v.r, h = v.e), i = w[d = h + x + 1], m = o / 2, y = y || d < 0 || null != w[d + 1], y = S < 4 ? (null != i || y) && (0 == S || S == (v.s < 0 ? 3 : 2)) : i > m || i == m && (4 == S || y || 6 == S && 1 & w[d - 1] || S == (v.s < 0 ? 8 : 7)), d < 1 || !w[0]) n = y ? P(f.charAt(1), -x, f.charAt(0)) : f.charAt(0);
                                    else { if (w.length = d, y)
                                            for (--o; ++w[--d] > o;) w[d] = 0, d || (++h, w = [1].concat(w)); for (m = w.length; !w[--m];); for (i = 0, n = ""; i <= m; n += f.charAt(w[i++]));
                                        n = P(n, h, f.charAt(0)) } return n } }(), div = function() {
                                function t(t, e, base) { var n, r, o, c, l = 0,
                                        i = t.length,
                                        f = e % x,
                                        d = e / x | 0; for (t = t.slice(); i--;) l = ((r = f * (o = t[i] % x) + (n = d * o + (c = t[i] / x | 0) * f) % x * x + l) / base | 0) + (n / x | 0) + d * c, t[i] = r % base; return l && (t = [l].concat(t)), t }

                                function e(a, b, t, e) { var i, n; if (t != e) n = t > e ? 1 : -1;
                                    else
                                        for (i = n = 0; i < t; i++)
                                            if (a[i] != b[i]) { n = a[i] > b[i] ? 1 : -1; break } return n }

                                function n(a, b, t, base) { for (var i = 0; t--;) a[t] -= i, i = a[t] < b[t] ? 1 : 0, a[t] = i * base + a[t] - b[t]; for (; !a[0] && a.length > 1; a.splice(0, 1)); } return function(r, o, c, l, base) { var f, h, i, m, w, k, x, q, S, E, A, O, M, I, P, T, C, s = r.s == o.s ? 1 : -1,
                                        j = r.c,
                                        R = o.c; if (!(j && j[0] && R && R[0])) return new Y(r.s && o.s && (j ? !R || j[0] != R[0] : R) ? j && 0 == j[0] || !R ? 0 * s : s / 0 : NaN); for (S = (q = new Y(s)).c = [], s = c + (h = r.e - o.e) + 1, base || (base = y, h = _(r.e / v) - _(o.e / v), s = s / v | 0), i = 0; R[i] == (j[i] || 0); i++); if (R[i] > (j[i] || 0) && h--, s < 0) S.push(1), m = !0;
                                    else { for (I = j.length, T = R.length, i = 0, s += 2, (w = d(base / (R[0] + 1))) > 1 && (R = t(R, w, base), j = t(j, w, base), T = R.length, I = j.length), M = T, A = (E = j.slice(0, T)).length; A < T; E[A++] = 0);
                                        C = R.slice(), C = [0].concat(C), P = R[0], R[1] >= base / 2 && P++;
                                        do { if (w = 0, (f = e(R, E, T, A)) < 0) { if (O = E[0], T != A && (O = O * base + (E[1] || 0)), (w = d(O / P)) > 1)
                                                    for (w >= base && (w = base - 1), x = (k = t(R, w, base)).length, A = E.length; 1 == e(k, E, x, A);) w--, n(k, T < x ? C : R, x, base), x = k.length, f = 1;
                                                else 0 == w && (f = w = 1), x = (k = R.slice()).length; if (x < A && (k = [0].concat(k)), n(E, k, A, base), A = E.length, -1 == f)
                                                    for (; e(R, E, T, A) < 1;) w++, n(E, T < A ? C : R, A, base), A = E.length } else 0 === f && (w++, E = [0]);
                                            S[i++] = w, E[0] ? E[A++] = j[M] || 0 : (E = [j[M]], A = 1) } while ((M++ < I || null != E[0]) && s--);
                                        m = null != E[0], S[0] || S.splice(0, 1) } if (base == y) { for (i = 1, s = S[0]; s >= 10; s /= 10, i++);
                                        tt(q, c + (q.e = i + h * v - 1) + 1, l, m) } else q.e = h, q.r = +m; return q } }(), T = /^(-?)0([xbo])(?=\w[\w.]*$)/i, C = /^([^.]+)\.$/, j = /^\.([^.]+)$/, R = /^-?(Infinity|NaN)$/, z = /^\s*\+(?=[\w.])|^\s+|\s+$/g, r = function(t, e, n, b) { var base, s = n ? e : e.replace(z, ""); if (R.test(s)) t.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                                else { if (!n && (s = s.replace(T, (function(t, e, n) { return base = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, b && b != base ? t : e })), b && (base = b, s = s.replace(C, "$1").replace(j, "0.$1")), e != s)) return new Y(s, base); if (Y.DEBUG) throw Error(h + "Not a" + (b ? " base " + b : "") + " number: " + e);
                                    t.s = null }
                                t.c = t.e = null }, B.absoluteValue = B.abs = function() { var t = new Y(this); return t.s < 0 && (t.s = 1), t }, B.comparedTo = function(t, b) { return A(this, new Y(t, b)) }, B.decimalPlaces = B.dp = function(t, e) { var n, r, o, c = this; if (null != t) return O(t, 0, S), null == e ? e = U : O(e, 0, 8), tt(new Y(c), t + c.e + 1, e); if (!(n = c.c)) return null; if (r = ((o = n.length - 1) - _(this.e / v)) * v, o = n[o])
                                    for (; o % 10 == 0; o /= 10, r--); return r < 0 && (r = 0), r }, B.dividedBy = B.div = function(t, b) { return div(this, new Y(t, b), L, U) }, B.dividedToIntegerBy = B.idiv = function(t, b) { return div(this, new Y(t, b), 0, 1) }, B.exponentiatedBy = B.pow = function(t, e) { var n, r, i, o, c, l, m, y, w = this; if ((t = new Y(t)).c && !t.isInteger()) throw Error(h + "Exponent not an integer: " + et(t)); if (null != e && (e = new Y(e)), c = t.e > 14, !w.c || !w.c[0] || 1 == w.c[0] && !w.e && 1 == w.c.length || !t.c || !t.c[0]) return y = new Y(Math.pow(+et(w), c ? 2 - M(t) : +et(t))), e ? y.mod(e) : y; if (l = t.s < 0, e) { if (e.c ? !e.c[0] : !e.s) return new Y(NaN);
                                    (r = !l && w.isInteger() && e.isInteger()) && (w = w.mod(e)) } else { if (t.e > 9 && (w.e > 0 || w.e < -1 || (0 == w.e ? w.c[0] > 1 || c && w.c[1] >= 24e7 : w.c[0] < 8e13 || c && w.c[0] <= 9999975e7))) return o = w.s < 0 && M(t) ? -0 : 0, w.e > -1 && (o = 1 / o), new Y(l ? 1 / o : o);
                                    H && (o = f(H / v + 2)) } for (c ? (n = new Y(.5), l && (t.s = 1), m = M(t)) : m = (i = Math.abs(+et(t))) % 2, y = new Y(N);;) { if (m) { if (!(y = y.times(w)).c) break;
                                        o ? y.c.length > o && (y.c.length = o) : r && (y = y.mod(e)) } if (i) { if (0 === (i = d(i / 2))) break;
                                        m = i % 2 } else if (tt(t = t.times(n), t.e + 1, 1), t.e > 14) m = M(t);
                                    else { if (0 === (i = +et(t))) break;
                                        m = i % 2 }
                                    w = w.times(w), o ? w.c && w.c.length > o && (w.c.length = o) : r && (w = w.mod(e)) } return r ? y : (l && (y = N.div(y)), e ? y.mod(e) : o ? tt(y, H, U, undefined) : y) }, B.integerValue = function(t) { var e = new Y(this); return null == t ? t = U : O(t, 0, 8), tt(e, e.e + 1, t) }, B.isEqualTo = B.eq = function(t, b) { return 0 === A(this, new Y(t, b)) }, B.isFinite = function() { return !!this.c }, B.isGreaterThan = B.gt = function(t, b) { return A(this, new Y(t, b)) > 0 }, B.isGreaterThanOrEqualTo = B.gte = function(t, b) { return 1 === (b = A(this, new Y(t, b))) || 0 === b }, B.isInteger = function() { return !!this.c && _(this.e / v) > this.c.length - 2 }, B.isLessThan = B.lt = function(t, b) { return A(this, new Y(t, b)) < 0 }, B.isLessThanOrEqualTo = B.lte = function(t, b) { return -1 === (b = A(this, new Y(t, b))) || 0 === b }, B.isNaN = function() { return !this.s }, B.isNegative = function() { return this.s < 0 }, B.isPositive = function() { return this.s > 0 }, B.isZero = function() { return !!this.c && 0 == this.c[0] }, B.minus = function(t, b) { var i, e, n, r, o = this,
                                    a = o.s; if (b = (t = new Y(t, b)).s, !a || !b) return new Y(NaN); if (a != b) return t.s = -b, o.plus(t); var c = o.e / v,
                                    l = t.e / v,
                                    f = o.c,
                                    d = t.c; if (!c || !l) { if (!f || !d) return f ? (t.s = -b, t) : new Y(d ? o : NaN); if (!f[0] || !d[0]) return d[0] ? (t.s = -b, t) : new Y(f[0] ? o : 3 == U ? -0 : 0) } if (c = _(c), l = _(l), f = f.slice(), a = c - l) { for ((r = a < 0) ? (a = -a, n = f) : (l = c, n = d), n.reverse(), b = a; b--; n.push(0));
                                    n.reverse() } else
                                    for (e = (r = (a = f.length) < (b = d.length)) ? a : b, a = b = 0; b < e; b++)
                                        if (f[b] != d[b]) { r = f[b] < d[b]; break } if (r && (n = f, f = d, d = n, t.s = -t.s), (b = (e = d.length) - (i = f.length)) > 0)
                                    for (; b--; f[i++] = 0); for (b = y - 1; e > a;) { if (f[--e] < d[e]) { for (i = e; i && !f[--i]; f[i] = b);--f[i], f[e] += y }
                                    f[e] -= d[e] } for (; 0 == f[0]; f.splice(0, 1), --l); return f[0] ? J(t, f, l) : (t.s = 3 == U ? -1 : 1, t.c = [t.e = 0], t) }, B.modulo = B.mod = function(t, b) { var q, s, e = this; return t = new Y(t, b), !e.c || !t.s || t.c && !t.c[0] ? new Y(NaN) : !t.c || e.c && !e.c[0] ? new Y(e) : (9 == V ? (s = t.s, t.s = 1, q = div(e, t, 0, 3), t.s = s, q.s *= s) : q = div(e, t, 0, V), (t = e.minus(q.times(t))).c[0] || 1 != V || (t.s = e.s), t) }, B.multipliedBy = B.times = function(t, b) { var e, n, i, r, o, c, l, f, d, h, m, w, k, base, S, E = this,
                                    A = E.c,
                                    O = (t = new Y(t, b)).c; if (!(A && O && A[0] && O[0])) return !E.s || !t.s || A && !A[0] && !O || O && !O[0] && !A ? t.c = t.e = t.s = null : (t.s *= E.s, A && O ? (t.c = [0], t.e = 0) : t.c = t.e = null), t; for (n = _(E.e / v) + _(t.e / v), t.s *= E.s, (l = A.length) < (h = O.length) && (k = A, A = O, O = k, i = l, l = h, h = i), i = l + h, k = []; i--; k.push(0)); for (base = y, S = x, i = h; --i >= 0;) { for (e = 0, m = O[i] % S, w = O[i] / S | 0, r = i + (o = l); r > i;) e = ((f = m * (f = A[--o] % S) + (c = w * f + (d = A[o] / S | 0) * m) % S * S + k[r] + e) / base | 0) + (c / S | 0) + w * d, k[r--] = f % base;
                                    k[r] = e } return e ? ++n : k.splice(0, 1), J(t, k, n) }, B.negated = function() { var t = new Y(this); return t.s = -t.s || null, t }, B.plus = function(t, b) { var e, n = this,
                                    a = n.s; if (b = (t = new Y(t, b)).s, !a || !b) return new Y(NaN); if (a != b) return t.s = -b, n.minus(t); var r = n.e / v,
                                    o = t.e / v,
                                    c = n.c,
                                    l = t.c; if (!r || !o) { if (!c || !l) return new Y(a / 0); if (!c[0] || !l[0]) return l[0] ? t : new Y(c[0] ? n : 0 * a) } if (r = _(r), o = _(o), c = c.slice(), a = r - o) { for (a > 0 ? (o = r, e = l) : (a = -a, e = c), e.reverse(); a--; e.push(0));
                                    e.reverse() } for ((a = c.length) - (b = l.length) < 0 && (e = l, l = c, c = e, b = a), a = 0; b;) a = (c[--b] = c[b] + l[b] + a) / y | 0, c[b] = y === c[b] ? 0 : c[b] % y; return a && (c = [a].concat(c), ++o), J(t, c, o) }, B.precision = B.sd = function(t, e) { var n, r, o, c = this; if (null != t && t !== !!t) return O(t, 1, S), null == e ? e = U : O(e, 0, 8), tt(new Y(c), t, e); if (!(n = c.c)) return null; if (r = (o = n.length - 1) * v + 1, o = n[o]) { for (; o % 10 == 0; o /= 10, r--); for (o = n[0]; o >= 10; o /= 10, r++); } return t && c.e + 1 > r && (r = c.e + 1), r }, B.shiftedBy = function(t) { return O(t, -9007199254740991, w), this.times("1e" + t) }, B.squareRoot = B.sqrt = function() { var t, e, n, r, o, c = this,
                                    l = c.c,
                                    s = c.s,
                                    f = c.e,
                                    d = L + 4,
                                    h = new Y("0.5"); if (1 !== s || !l || !l[0]) return new Y(!s || s < 0 && (!l || l[0]) ? NaN : l ? c : 1 / 0); if (0 == (s = Math.sqrt(+et(c))) || s == 1 / 0 ? (((e = E(l)).length + f) % 2 == 0 && (e += "0"), s = Math.sqrt(+e), f = _((f + 1) / 2) - (f < 0 || f % 2), n = new Y(e = s == 1 / 0 ? "5e" + f : (e = s.toExponential()).slice(0, e.indexOf("e") + 1) + f)) : n = new Y(s + ""), n.c[0])
                                    for ((s = (f = n.e) + d) < 3 && (s = 0);;)
                                        if (o = n, n = h.times(o.plus(div(c, o, d, 1))), E(o.c).slice(0, s) === (e = E(n.c)).slice(0, s)) { if (n.e < f && --s, "9999" != (e = e.slice(s - 3, s + 1)) && (r || "4999" != e)) {+e && (+e.slice(1) || "5" != e.charAt(0)) || (tt(n, n.e + L + 2, 1), t = !n.times(n).eq(c)); break } if (!r && (tt(o, o.e + L + 2, 0), o.times(o).eq(c))) { n = o; break }
                                            d += 4, s += 4, r = 1 }
                                return tt(n, n.e + L + 1, U, t) }, B.toExponential = function(t, e) { return null != t && (O(t, 0, S), t++), X(this, t, e, 1) }, B.toFixed = function(t, e) { return null != t && (O(t, 0, S), t = t + this.e + 1), X(this, t, e) }, B.toFormat = function(t, e, n) { var r, o = this; if (null == n) null != t && e && "object" == typeof e ? (n = e, e = null) : t && "object" == typeof t ? (n = t, t = e = null) : n = Z;
                                else if ("object" != typeof n) throw Error(h + "Argument not an object: " + n); if (r = o.toFixed(t, e), o.c) { var i, c = r.split("."),
                                        l = +n.groupSize,
                                        f = +n.secondaryGroupSize,
                                        d = n.groupSeparator || "",
                                        m = c[0],
                                        y = c[1],
                                        v = o.s < 0,
                                        w = v ? m.slice(1) : m,
                                        k = w.length; if (f && (i = l, l = f, f = i, k -= i), l > 0 && k > 0) { for (i = k % l || l, m = w.substr(0, i); i < k; i += l) m += d + w.substr(i, l);
                                        f > 0 && (m += d + w.slice(i)), v && (m = "-" + m) }
                                    r = y ? m + (n.decimalSeparator || "") + ((f = +n.fractionGroupSize) ? y.replace(new RegExp("\\d{" + f + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : y) : m } return (n.prefix || "") + r + (n.suffix || "") }, B.toFraction = function(t) { var e, n, r, o, c, l, f, d, m, q, y, s, w = this,
                                    x = w.c; if (null != t && (!(f = new Y(t)).isInteger() && (f.c || 1 !== f.s) || f.lt(N))) throw Error(h + "Argument " + (f.isInteger() ? "out of range: " : "not an integer: ") + et(f)); if (!x) return new Y(w); for (e = new Y(N), m = n = new Y(N), r = d = new Y(N), s = E(x), c = e.e = s.length - w.e - 1, e.c[0] = k[(l = c % v) < 0 ? v + l : l], t = !t || f.comparedTo(e) > 0 ? c > 0 ? e : m : f, l = $, $ = 1 / 0, f = new Y(s), d.c[0] = 0; q = div(f, e, 0, 1), 1 != (o = n.plus(q.times(r))).comparedTo(t);) n = r, r = o, m = d.plus(q.times(o = m)), d = o, e = f.minus(q.times(o = e)), f = o; return o = div(t.minus(n), r, 0, 1), d = d.plus(o.times(m)), n = n.plus(o.times(r)), d.s = m.s = w.s, y = div(m, r, c *= 2, U).minus(w).abs().comparedTo(div(d, n, c, U).minus(w).abs()) < 1 ? [m, r] : [d, n], $ = l, y }, B.toNumber = function() { return +et(this) }, B.toPrecision = function(t, e) { return null != t && O(t, 1, S), X(this, t, e, 2) }, B.toString = function(b) { var t, e = this,
                                    s = e.s,
                                    r = e.e; return null === r ? s ? (t = "Infinity", s < 0 && (t = "-" + t)) : t = "NaN" : (null == b ? t = r <= D || r >= W ? I(E(e.c), r) : P(E(e.c), r, "0") : 10 === b ? t = P(E((e = tt(new Y(e), L + r + 1, U)).c), e.e, "0") : (O(b, 2, G.length, "Base"), t = n(P(E(e.c), r, "0"), 10, b, s, !0)), s < 0 && e.c[0] && (t = "-" + t)), t }, B.valueOf = B.toJSON = function() { return et(this) }, B._isBigNumber = !0, null != e && Y.set(e), Y }()).default = c.BigNumber = c, void 0 === (r = function() { return c }.call(e, n, e, t)) || (t.exports = r) }() }, function(t, e, n) { "use strict"; var r = n(429); var o = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);); return t },
                        c = n(93),
                        l = function() { try { var t = Object(c.a)(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }(); var f = function(object, t, e) { "__proto__" == t && l ? l(object, t, { configurable: !0, enumerable: !0, value: e, writable: !0 }) : object[t] = e },
                        d = n(279),
                        h = Object.prototype.hasOwnProperty; var m = function(object, t, e) { var n = object[t];
                        h.call(object, t) && Object(d.a)(n, e) && (void 0 !== e || t in object) || f(object, t, e) }; var y = function(source, t, object, e) { var n = !object;
                            object || (object = {}); for (var r = -1, o = t.length; ++r < o;) { var c = t[r],
                                    l = e ? e(object[c], source[c], c, object, source) : void 0;
                                void 0 === l && (l = source[c]), n ? f(object, c, l) : m(object, c, l) } return object },
                        v = n(190); var w = function(object, source) { return object && y(source, Object(v.a)(source), object) },
                        k = n(292),
                        x = n(128),
                        S = n(196); var _ = function(object) { var t = []; if (null != object)
                                for (var e in Object(object)) t.push(e); return t },
                        E = Object.prototype.hasOwnProperty; var A = function(object) { if (!Object(x.a)(object)) return _(object); var t = Object(S.a)(object),
                                e = []; for (var n in object)("constructor" != n || !t && E.call(object, n)) && e.push(n); return e },
                        O = n(282); var M = function(object) { return Object(O.a)(object) ? Object(k.a)(object, !0) : A(object) }; var I = function(object, source) { return object && y(source, M(source), object) },
                        P = n(622); var T = function(source, t) { var e = -1,
                                n = source.length; for (t || (t = Array(n)); ++e < n;) t[e] = source[e]; return t },
                        C = n(197); var j = function(source, object) { return y(source, Object(C.a)(source), object) },
                        R = n(290),
                        z = n(288),
                        B = Object(z.a)(Object.getPrototypeOf, Object),
                        N = n(289),
                        L = Object.getOwnPropertySymbols ? function(object) { for (var t = []; object;) Object(R.a)(t, Object(C.a)(object)), object = B(object); return t } : N.a; var U = function(source, object) { return y(source, L(source), object) },
                        D = n(576),
                        W = n(291); var F = function(object) { return Object(W.a)(object, M, L) },
                        $ = n(192),
                        K = Object.prototype.hasOwnProperty; var V = function(t) { var e = t.length,
                                n = new t.constructor(e); return e && "string" == typeof t[0] && K.call(t, "index") && (n.index = t.index, n.input = t.input), n },
                        H = n(381); var Z = function(t) { var e = new t.constructor(t.byteLength); return new H.a(e).set(new H.a(t)), e }; var G = function(t, e) { var n = e ? Z(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.byteLength) },
                        Y = /\w*$/; var X = function(t) { var e = new t.constructor(t.source, Y.exec(t)); return e.lastIndex = t.lastIndex, e },
                        Q = n(109),
                        J = Q.a ? Q.a.prototype : void 0,
                        tt = J ? J.valueOf : void 0; var et = function(symbol) { return tt ? Object(tt.call(symbol)) : {} }; var nt = function(t, e) { var n = e ? Z(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.length) }; var ot = function(object, t, e) { var n = object.constructor; switch (t) {
                                case "[object ArrayBuffer]":
                                    return Z(object);
                                case "[object Boolean]":
                                case "[object Date]":
                                    return new n(+object);
                                case "[object DataView]":
                                    return G(object, e);
                                case "[object Float32Array]":
                                case "[object Float64Array]":
                                case "[object Int8Array]":
                                case "[object Int16Array]":
                                case "[object Int32Array]":
                                case "[object Uint8Array]":
                                case "[object Uint8ClampedArray]":
                                case "[object Uint16Array]":
                                case "[object Uint32Array]":
                                    return nt(object, e);
                                case "[object Map]":
                                    return new n;
                                case "[object Number]":
                                case "[object String]":
                                    return new n(object);
                                case "[object RegExp]":
                                    return X(object);
                                case "[object Set]":
                                    return new n;
                                case "[object Symbol]":
                                    return et(object) } },
                        it = Object.create,
                        at = function() {
                            function object() {} return function(t) { if (!Object(x.a)(t)) return {}; if (it) return it(t);
                                object.prototype = t; var e = new object; return object.prototype = void 0, e } }(); var st = function(object) { return "function" != typeof object.constructor || Object(S.a)(object) ? {} : at(B(object)) },
                        ut = n(106),
                        ct = n(281),
                        lt = n(107); var ft = function(t) { return Object(lt.a)(t) && "[object Map]" == Object($.a)(t) },
                        ht = n(198),
                        pt = n(136),
                        bt = pt.a && pt.a.isMap,
                        mt = bt ? Object(ht.a)(bt) : ft; var gt = function(t) { return Object(lt.a)(t) && "[object Set]" == Object($.a)(t) },
                        yt = pt.a && pt.a.isSet,
                        vt = yt ? Object(ht.a)(yt) : gt,
                        wt = "[object Arguments]",
                        kt = "[object Function]",
                        xt = "[object Object]",
                        St = {};
                    St[wt] = St["[object Array]"] = St["[object ArrayBuffer]"] = St["[object DataView]"] = St["[object Boolean]"] = St["[object Date]"] = St["[object Float32Array]"] = St["[object Float64Array]"] = St["[object Int8Array]"] = St["[object Int16Array]"] = St["[object Int32Array]"] = St["[object Map]"] = St["[object Number]"] = St[xt] = St["[object RegExp]"] = St["[object Set]"] = St["[object String]"] = St["[object Symbol]"] = St["[object Uint8Array]"] = St["[object Uint8ClampedArray]"] = St["[object Uint16Array]"] = St["[object Uint32Array]"] = !0, St["[object Error]"] = St[kt] = St["[object WeakMap]"] = !1; var _t = function t(e, n, c, l, object, f) { var d, h = 1 & n,
                            y = 2 & n,
                            k = 4 & n; if (c && (d = object ? c(e, l, object, f) : c(e)), void 0 !== d) return d; if (!Object(x.a)(e)) return e; var S = Object(ut.a)(e); if (S) { if (d = V(e), !h) return T(e, d) } else { var _ = Object($.a)(e),
                                E = _ == kt || "[object GeneratorFunction]" == _; if (Object(ct.a)(e)) return Object(P.a)(e, h); if (_ == xt || _ == wt || E && !object) { if (d = y || E ? {} : st(e), !h) return y ? U(e, I(d, e)) : j(e, w(d, e)) } else { if (!St[_]) return object ? e : {};
                                d = ot(e, _, h) } }
                        f || (f = new r.a); var A = f.get(e); if (A) return A;
                        f.set(e, d), vt(e) ? e.forEach((function(r) { d.add(t(r, n, c, r, e, f)) })) : mt(e) && e.forEach((function(r, o) { d.set(o, t(r, n, c, o, e, f)) })); var O = k ? y ? F : D.a : y ? M : v.a,
                            C = S ? void 0 : O(e); return o(C || e, (function(r, o) { C && (r = e[o = r]), m(d, o, t(r, n, c, o, e, f)) })), d };
                    e.a = function(t) { return _t(t, 5) } }, function(t, e, n) { "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }); var r, o = n(829),
                        c = (r = o) && r.__esModule ? r : { default: r }; var base = {};
                    base.install = function(t) { base.Vue = t, t.use(c.default) }, e.default = base }, , , , function(t, e, n) { var content = n(722);
                    content.__esModule && (content = content.default), "string" == typeof content && (content = [
                        [t.i, content, ""]
                    ]), content.locals && (t.exports = content.locals);
                    (0, n(26).default)("a79cf956", content, !0, { sourceMap: !1 }) }, , , , , function(t, e, n) { "use strict"; var r = Object.prototype.hasOwnProperty,
                        o = "~";

                    function c() {}

                    function l(t, e, n) { this.fn = t, this.context = e, this.once = n || !1 }

                    function f(t, e, n, r, c) { if ("function" != typeof n) throw new TypeError("The listener must be a function"); var f = new l(n, r || t, c),
                            d = o ? o + e : e; return t._events[d] ? t._events[d].fn ? t._events[d] = [t._events[d], f] : t._events[d].push(f) : (t._events[d] = f, t._eventsCount++), t }

                    function d(t, e) { 0 == --t._eventsCount ? t._events = new c : delete t._events[e] }

                    function h() { this._events = new c, this._eventsCount = 0 }
                    Object.create && (c.prototype = Object.create(null), (new c).__proto__ || (o = !1)), h.prototype.eventNames = function() { var t, e, n = []; if (0 === this._eventsCount) return n; for (e in t = this._events) r.call(t, e) && n.push(o ? e.slice(1) : e); return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n }, h.prototype.listeners = function(t) { var e = o ? o + t : t,
                            n = this._events[e]; if (!n) return []; if (n.fn) return [n.fn]; for (var i = 0, r = n.length, c = new Array(r); i < r; i++) c[i] = n[i].fn; return c }, h.prototype.listenerCount = function(t) { var e = o ? o + t : t,
                            n = this._events[e]; return n ? n.fn ? 1 : n.length : 0 }, h.prototype.emit = function(t, e, n, r, c, l) { var f = o ? o + t : t; if (!this._events[f]) return !1; var d, i, h = this._events[f],
                            m = arguments.length; if (h.fn) { switch (h.once && this.removeListener(t, h.fn, void 0, !0), m) {
                                case 1:
                                    return h.fn.call(h.context), !0;
                                case 2:
                                    return h.fn.call(h.context, e), !0;
                                case 3:
                                    return h.fn.call(h.context, e, n), !0;
                                case 4:
                                    return h.fn.call(h.context, e, n, r), !0;
                                case 5:
                                    return h.fn.call(h.context, e, n, r, c), !0;
                                case 6:
                                    return h.fn.call(h.context, e, n, r, c, l), !0 } for (i = 1, d = new Array(m - 1); i < m; i++) d[i - 1] = arguments[i];
                            h.fn.apply(h.context, d) } else { var y, v = h.length; for (i = 0; i < v; i++) switch (h[i].once && this.removeListener(t, h[i].fn, void 0, !0), m) {
                                case 1:
                                    h[i].fn.call(h[i].context); break;
                                case 2:
                                    h[i].fn.call(h[i].context, e); break;
                                case 3:
                                    h[i].fn.call(h[i].context, e, n); break;
                                case 4:
                                    h[i].fn.call(h[i].context, e, n, r); break;
                                default:
                                    if (!d)
                                        for (y = 1, d = new Array(m - 1); y < m; y++) d[y - 1] = arguments[y];
                                    h[i].fn.apply(h[i].context, d) } } return !0 }, h.prototype.on = function(t, e, n) { return f(this, t, e, n, !1) }, h.prototype.once = function(t, e, n) { return f(this, t, e, n, !0) }, h.prototype.removeListener = function(t, e, n, r) { var c = o ? o + t : t; if (!this._events[c]) return this; if (!e) return d(this, c), this; var l = this._events[c]; if (l.fn) l.fn !== e || r && !l.once || n && l.context !== n || d(this, c);
                        else { for (var i = 0, f = [], h = l.length; i < h; i++)(l[i].fn !== e || r && !l[i].once || n && l[i].context !== n) && f.push(l[i]);
                            f.length ? this._events[c] = 1 === f.length ? f[0] : f : d(this, c) } return this }, h.prototype.removeAllListeners = function(t) { var e; return t ? (e = o ? o + t : t, this._events[e] && d(this, e)) : (this._events = new c, this._eventsCount = 0), this }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = o, h.EventEmitter = h, t.exports = h }, , function(t, e, n) { var r;! function() { "use strict"; var n = {}.hasOwnProperty;

                        function o() { for (var t = [], i = 0; i < arguments.length; i++) { var e = arguments[i]; if (e) { var r = typeof e; if ("string" === r || "number" === r) t.push(e);
                                    else if (Array.isArray(e)) { if (e.length) { var c = o.apply(null, e);
                                            c && t.push(c) } } else if ("object" === r)
                                        if (e.toString === Object.prototype.toString)
                                            for (var l in e) n.call(e, l) && e[l] && t.push(l);
                                        else t.push(e.toString()) } } return t.join(" ") }
                        t.exports ? (o.default = o, t.exports = o) : void 0 === (r = function() { return o }.apply(e, [])) || (t.exports = r) }() }, function(t, e, n) { "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }); var r = l(n(832)),
                        o = l(n(654)),
                        c = l(n(75));

                    function l(t) { return t && t.__esModule ? t : { default: t } }
                    r.default.Group = o.default, r.default.install = function(t) { t.use(c.default), t.component(r.default.name, r.default), t.component(o.default.name, o.default) }, e.default = r.default }, function(t, e, n) { const r = n(272),
                        { MAX_LENGTH: o, MAX_SAFE_INTEGER: c } = n(271),
                        { re: l, t: f } = n(187),
                        d = n(273),
                        { compareIdentifiers: h } = n(366);
                    class m { constructor(t, e) { if (e = d(e), t instanceof m) { if (t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease) return t;
                                t = t.version } else if ("string" != typeof t) throw new TypeError(`Invalid Version: ${t}`); if (t.length > o) throw new TypeError(`version is longer than ${o} characters`);
                            r("SemVer", t, e), this.options = e, this.loose = !!e.loose, this.includePrerelease = !!e.includePrerelease; const n = t.trim().match(e.loose ? l[f.LOOSE] : l[f.FULL]); if (!n) throw new TypeError(`Invalid Version: ${t}`); if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > c || this.major < 0) throw new TypeError("Invalid major version"); if (this.minor > c || this.minor < 0) throw new TypeError("Invalid minor version"); if (this.patch > c || this.patch < 0) throw new TypeError("Invalid patch version");
                            n[4] ? this.prerelease = n[4].split(".").map((t => { if (/^[0-9]+$/.test(t)) { const e = +t; if (e >= 0 && e < c) return e } return t })) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format() }
                        format() { return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version }
                        toString() { return this.version }
                        compare(t) { if (r("SemVer.compare", this.version, this.options, t), !(t instanceof m)) { if ("string" == typeof t && t === this.version) return 0;
                                t = new m(t, this.options) } return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t) }
                        compareMain(t) { return t instanceof m || (t = new m(t, this.options)), h(this.major, t.major) || h(this.minor, t.minor) || h(this.patch, t.patch) }
                        comparePre(t) { if (t instanceof m || (t = new m(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1; if (!this.prerelease.length && t.prerelease.length) return 1; if (!this.prerelease.length && !t.prerelease.length) return 0; let i = 0;
                            do { const a = this.prerelease[i],
                                    b = t.prerelease[i]; if (r("prerelease compare", i, a, b), void 0 === a && void 0 === b) return 0; if (void 0 === b) return 1; if (void 0 === a) return -1; if (a !== b) return h(a, b) } while (++i) }
                        compareBuild(t) { t instanceof m || (t = new m(t, this.options)); let i = 0;
                            do { const a = this.build[i],
                                    b = t.build[i]; if (r("prerelease compare", i, a, b), void 0 === a && void 0 === b) return 0; if (void 0 === b) return 1; if (void 0 === a) return -1; if (a !== b) return h(a, b) } while (++i) }
                        inc(t, e) { switch (t) {
                                case "premajor":
                                    this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", e); break;
                                case "preminor":
                                    this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", e); break;
                                case "prepatch":
                                    this.prerelease.length = 0, this.inc("patch", e), this.inc("pre", e); break;
                                case "prerelease":
                                    0 === this.prerelease.length && this.inc("patch", e), this.inc("pre", e); break;
                                case "major":
                                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = []; break;
                                case "minor":
                                    0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = []; break;
                                case "patch":
                                    0 === this.prerelease.length && this.patch++, this.prerelease = []; break;
                                case "pre":
                                    if (0 === this.prerelease.length) this.prerelease = [0];
                                    else { let i = this.prerelease.length; for (; --i >= 0;) "number" == typeof this.prerelease[i] && (this.prerelease[i]++, i = -2); - 1 === i && this.prerelease.push(0) }
                                    e && (this.prerelease[0] === e ? isNaN(this.prerelease[1]) && (this.prerelease = [e, 0]) : this.prerelease = [e, 0]); break;
                                default:
                                    throw new Error(`invalid increment argument: ${t}`) } return this.format(), this.raw = this.version, this } }
                    t.exports = m }, , , , , function(t, e, n) { "use strict"; var r, o = n(286),
                        c = n(65).a["__core-js_shared__"],
                        l = (r = /[^.]+$/.exec(c && c.keys && c.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : ""; var f = function(t) { return !!l && l in t },
                        d = n(128),
                        h = n(137),
                        m = /^\[object .+?Constructor\]$/,
                        y = Function.prototype,
                        v = Object.prototype,
                        w = y.toString,
                        k = v.hasOwnProperty,
                        x = RegExp("^" + w.call(k).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"); var S = function(t) { return !(!Object(d.a)(t) || f(t)) && (Object(o.a)(t) ? x : m).test(Object(h.a)(t)) }; var _ = function(object, t) { return null == object ? void 0 : object[t] };
                    e.a = function(object, t) { var e = _(object, t); return S(e) ? e : void 0 } }, , , , , , , function(t, e, n) { "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }); var r = f(n(173)),
                        o = f(n(20));
                    e.cloneVNode = d, e.cloneVNodes = h, e.cloneElement = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments[2],
                            f = t;
                        Array.isArray(t) && (f = (0, c.filterEmpty)(t)[0]); if (!f) return null; var h = d(f, n),
                            m = e.props,
                            y = void 0 === m ? {} : m,
                            v = e.key,
                            w = e.on,
                            k = void 0 === w ? {} : w,
                            x = e.nativeOn,
                            S = void 0 === x ? {} : x,
                            _ = e.children,
                            E = e.directives,
                            A = void 0 === E ? [] : E,
                            data = h.data || {},
                            O = {},
                            style = {},
                            M = e.attrs,
                            I = void 0 === M ? {} : M,
                            P = e.ref,
                            T = e.domProps,
                            C = void 0 === T ? {} : T,
                            j = e.style,
                            R = void 0 === j ? {} : j,
                            z = e.class,
                            B = void 0 === z ? {} : z,
                            N = e.scopedSlots,
                            L = void 0 === N ? {} : N;
                        style = "string" == typeof data.style ? (0, c.parseStyleText)(data.style) : (0, o.default)({}, data.style, style);
                        style = "string" == typeof R ? (0, o.default)({}, style, (0, c.parseStyleText)(style)) : (0, o.default)({}, style, R); "string" == typeof data.class && "" !== data.class.trim() ? data.class.split(" ").forEach((function(t) { O[t.trim()] = !0 })) : Array.isArray(data.class) ? (0, l.default)(data.class).split(" ").forEach((function(t) { O[t.trim()] = !0 })) : O = (0, o.default)({}, data.class, O); "string" == typeof B && "" !== B.trim() ? B.split(" ").forEach((function(t) { O[t.trim()] = !0 })) : O = (0, o.default)({}, O, B);
                        h.data = (0, o.default)({}, data, { style: style, attrs: (0, o.default)({}, data.attrs, I), class: O, domProps: (0, o.default)({}, data.domProps, C), scopedSlots: (0, o.default)({}, data.scopedSlots, L), directives: [].concat((0, r.default)(data.directives || []), (0, r.default)(A)) }), h.componentOptions ? (h.componentOptions.propsData = h.componentOptions.propsData || {}, h.componentOptions.listeners = h.componentOptions.listeners || {}, h.componentOptions.propsData = (0, o.default)({}, h.componentOptions.propsData, y), h.componentOptions.listeners = (0, o.default)({}, h.componentOptions.listeners, k), _ && (h.componentOptions.children = _)) : (_ && (h.children = _), h.data.on = (0, o.default)({}, h.data.on || {}, k));
                        h.data.on = (0, o.default)({}, h.data.on || {}, S), void 0 !== v && (h.key = v, h.data.key = v); "string" == typeof P && (h.data.ref = P); return h }; var c = n(22),
                        l = f(n(86));

                    function f(t) { return t && t.__esModule ? t : { default: t } }

                    function d(t, e) { var n = t.componentOptions,
                            data = t.data,
                            r = {};
                        n && n.listeners && (r = (0, o.default)({}, n.listeners)); var c = {};
                        data && data.on && (c = (0, o.default)({}, data.on)); var l = new t.constructor(t.tag, data ? (0, o.default)({}, data, { on: c }) : data, t.children, t.text, t.elm, t.context, n ? (0, o.default)({}, n, { listeners: r }) : n, t.asyncFactory); return l.ns = t.ns, l.isStatic = t.isStatic, l.key = t.key, l.isComment = t.isComment, l.fnContext = t.fnContext, l.fnOptions = t.fnOptions, l.fnScopeId = t.fnScopeId, l.isCloned = !0, e && (t.children && (l.children = h(t.children, !0)), n && n.children && (n.children = h(n.children, !0))), l }

                    function h(t, e) { for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = d(t[i], e); return r } }, , function(t, e, n) { "use strict";
                    e.__esModule = !0; var r = l(n(750)),
                        o = l(n(760)),
                        c = "function" == typeof o.default && "symbol" == typeof r.default ? function(t) { return typeof t } : function(t) { return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : typeof t };

                    function l(t) { return t && t.__esModule ? t : { default: t } }
                    e.default = "function" == typeof o.default && "symbol" === c(r.default) ? function(t) { return void 0 === t ? "undefined" : c(t) } : function(t) { return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : void 0 === t ? "undefined" : c(t) } }, , function(t, e, n) { "use strict"; var r = e,
                        o = n(133),
                        c = n(167),
                        l = n(521);
                    r.assert = c, r.toArray = l.toArray, r.zero2 = l.zero2, r.toHex = l.toHex, r.encode = l.encode, r.getNAF = function(t, e, n) { var r = new Array(Math.max(t.bitLength(), n) + 1);
                        r.fill(0); for (var o = 1 << e + 1, c = t.clone(), i = 0; i < r.length; i++) { var l, f = c.andln(o - 1);
                            c.isOdd() ? (l = f > (o >> 1) - 1 ? (o >> 1) - f : f, c.isubn(l)) : l = 0, r[i] = l, c.iushrn(1) } return r }, r.getJSF = function(t, e) { var n = [
                            [],
                            []
                        ];
                        t = t.clone(), e = e.clone(); for (var r, o = 0, c = 0; t.cmpn(-o) > 0 || e.cmpn(-c) > 0;) { var l, f, d = t.andln(3) + o & 3,
                                h = e.andln(3) + c & 3;
                            3 === d && (d = -1), 3 === h && (h = -1), l = 0 == (1 & d) ? 0 : 3 !== (r = t.andln(7) + o & 7) && 5 !== r || 2 !== h ? d : -d, n[0].push(l), f = 0 == (1 & h) ? 0 : 3 !== (r = e.andln(7) + c & 7) && 5 !== r || 2 !== d ? h : -h, n[1].push(f), 2 * o === l + 1 && (o = 1 - o), 2 * c === f + 1 && (c = 1 - c), t.iushrn(1), e.iushrn(1) } return n }, r.cachedProperty = function(t, e, n) { var r = "_" + e;
                        t.prototype[e] = function() { return void 0 !== this[r] ? this[r] : this[r] = n.call(this) } }, r.parseBytes = function(t) { return "string" == typeof t ? r.toArray(t, "hex") : t }, r.intFromLE = function(t) { return new o(t, "hex", "le") } }, function(t, e) { "function" == typeof Object.create ? t.exports = function(t, e) { e && (t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })) } : t.exports = function(t, e) { if (e) { t.super_ = e; var n = function() {};
                            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t } } }, function(t, e, n) { "use strict"; var r = Array.isArray;
                    e.a = r }, function(t, e, n) { "use strict";
                    e.a = function(t) { return null != t && "object" == typeof t } }, , function(t, e, n) { "use strict"; var r = n(65).a.Symbol;
                    e.a = r }, , , , , , , , function(t, e, n) { var r = n(478),
                        o = "object" == typeof self && self && self.Object === Object && self,
                        c = r || o || Function("return this")();
                    t.exports = c }, function(t, e, n) { const r = n(88);
                    t.exports = (a, b, t) => new r(a, t).compare(new r(b, t)) }, function(t, e, n) { class r { constructor(t, e) { if (e = c(e), t instanceof r) return t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease ? t : new r(t.raw, e); if (t instanceof l) return this.raw = t.value, this.set = [
                                [t]
                            ], this.format(), this; if (this.options = e, this.loose = !!e.loose, this.includePrerelease = !!e.includePrerelease, this.raw = t, this.set = t.split(/\s*\|\|\s*/).map((t => this.parseRange(t.trim()))).filter((t => t.length)), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${t}`); if (this.set.length > 1) { const t = this.set[0]; if (this.set = this.set.filter((t => !k(t[0]))), 0 === this.set.length) this.set = [t];
                                else if (this.set.length > 1)
                                    for (const t of this.set)
                                        if (1 === t.length && x(t[0])) { this.set = [t]; break } }
                            this.format() }
                        format() { return this.range = this.set.map((t => t.join(" ").trim())).join("||").trim(), this.range }
                        toString() { return this.range }
                        parseRange(t) { t = t.trim(); const e = `parseRange:${Object.keys(this.options).join(",")}:${t}`,
                                n = o.get(e); if (n) return n; const r = this.options.loose,
                                hr = r ? h[m.HYPHENRANGELOOSE] : h[m.HYPHENRANGE];
                            t = t.replace(hr, R(this.options.includePrerelease)), f("hyphen replace", t), t = t.replace(h[m.COMPARATORTRIM], y), f("comparator trim", t, h[m.COMPARATORTRIM]), t = (t = (t = t.replace(h[m.TILDETRIM], v)).replace(h[m.CARETTRIM], w)).split(/\s+/).join(" "); const c = r ? h[m.COMPARATORLOOSE] : h[m.COMPARATOR],
                                d = t.split(" ").map((t => _(t, this.options))).join(" ").split(/\s+/).map((t => j(t, this.options))).filter(this.options.loose ? t => !!t.match(c) : () => !0).map((t => new l(t, this.options))),
                                x = (d.length, new Map); for (const t of d) { if (k(t)) return [t];
                                x.set(t.value, t) }
                            x.size > 1 && x.has("") && x.delete(""); const S = [...x.values()]; return o.set(e, S), S }
                        intersects(t, e) { if (!(t instanceof r)) throw new TypeError("a Range is required"); return this.set.some((n => S(n, e) && t.set.some((t => S(t, e) && n.every((n => t.every((t => n.intersects(t, e))))))))) }
                        test(t) { if (!t) return !1; if ("string" == typeof t) try { t = new d(t, this.options) } catch (t) { return !1 }
                            for (let i = 0; i < this.set.length; i++)
                                if (z(this.set[i], t, this.options)) return !0;
                            return !1 } }
                    t.exports = r; const o = new(n(1119))({ max: 1e3 }),
                        c = n(273),
                        l = n(275),
                        f = n(272),
                        d = n(88),
                        { re: h, t: m, comparatorTrimReplace: y, tildeTrimReplace: v, caretTrimReplace: w } = n(187),
                        k = t => "<0.0.0-0" === t.value,
                        x = t => "" === t.value,
                        S = (t, e) => { let n = !0; const r = t.slice(); let o = r.pop(); for (; n && r.length;) n = r.every((t => o.intersects(t, e))), o = r.pop(); return n },
                        _ = (t, e) => (f("comp", t, e), t = M(t, e), f("caret", t), t = A(t, e), f("tildes", t), t = P(t, e), f("xrange", t), t = C(t, e), f("stars", t), t),
                        E = t => !t || "x" === t.toLowerCase() || "*" === t,
                        A = (t, e) => t.trim().split(/\s+/).map((t => O(t, e))).join(" "),
                        O = (t, e) => { const n = e.loose ? h[m.TILDELOOSE] : h[m.TILDE]; return t.replace(n, ((e, n, r, p, o) => { let c; return f("tilde", t, e, n, r, p, o), E(n) ? c = "" : E(r) ? c = `>=${n}.0.0 <${+n+1}.0.0-0` : E(p) ? c = `>=${n}.${r}.0 <${n}.${+r+1}.0-0` : o ? (f("replaceTilde pr", o), c = `>=${n}.${r}.${p}-${o} <${n}.${+r+1}.0-0`) : c = `>=${n}.${r}.${p} <${n}.${+r+1}.0-0`, f("tilde return", c), c })) },
                        M = (t, e) => t.trim().split(/\s+/).map((t => I(t, e))).join(" "),
                        I = (t, e) => { f("caret", t, e); const n = e.loose ? h[m.CARETLOOSE] : h[m.CARET],
                                r = e.includePrerelease ? "-0" : ""; return t.replace(n, ((e, n, o, p, c) => { let l; return f("caret", t, e, n, o, p, c), E(n) ? l = "" : E(o) ? l = `>=${n}.0.0${r} <${+n+1}.0.0-0` : E(p) ? l = "0" === n ? `>=${n}.${o}.0${r} <${n}.${+o+1}.0-0` : `>=${n}.${o}.0${r} <${+n+1}.0.0-0` : c ? (f("replaceCaret pr", c), l = "0" === n ? "0" === o ? `>=${n}.${o}.${p}-${c} <${n}.${o}.${+p+1}-0` : `>=${n}.${o}.${p}-${c} <${n}.${+o+1}.0-0` : `>=${n}.${o}.${p}-${c} <${+n+1}.0.0-0`) : (f("no pr"), l = "0" === n ? "0" === o ? `>=${n}.${o}.${p}${r} <${n}.${o}.${+p+1}-0` : `>=${n}.${o}.${p}${r} <${n}.${+o+1}.0-0` : `>=${n}.${o}.${p} <${+n+1}.0.0-0`), f("caret return", l), l })) },
                        P = (t, e) => (f("replaceXRanges", t, e), t.split(/\s+/).map((t => T(t, e))).join(" ")),
                        T = (t, e) => { t = t.trim(); const n = e.loose ? h[m.XRANGELOOSE] : h[m.XRANGE]; return t.replace(n, ((n, r, o, c, p, l) => { f("xRange", t, n, r, o, c, p, l); const d = E(o),
                                    h = d || E(c),
                                    m = h || E(p),
                                    y = m; return "=" === r && y && (r = ""), l = e.includePrerelease ? "-0" : "", d ? n = ">" === r || "<" === r ? "<0.0.0-0" : "*" : r && y ? (h && (c = 0), p = 0, ">" === r ? (r = ">=", h ? (o = +o + 1, c = 0, p = 0) : (c = +c + 1, p = 0)) : "<=" === r && (r = "<", h ? o = +o + 1 : c = +c + 1), "<" === r && (l = "-0"), n = `${r+o}.${c}.${p}${l}`) : h ? n = `>=${o}.0.0${l} <${+o+1}.0.0-0` : m && (n = `>=${o}.${c}.0${l} <${o}.${+c+1}.0-0`), f("xRange return", n), n })) },
                        C = (t, e) => (f("replaceStars", t, e), t.trim().replace(h[m.STAR], "")),
                        j = (t, e) => (f("replaceGTE0", t, e), t.trim().replace(h[e.includePrerelease ? m.GTE0PRE : m.GTE0], "")),