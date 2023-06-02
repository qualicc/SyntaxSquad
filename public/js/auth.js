function mn(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Ur} = Object.prototype
  , {getPrototypeOf: xt} = Object
  , Fe = (e=>t=>{
    const n = Ur.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , M = e=>(e = e.toLowerCase(),
t=>Fe(t) === e)
  , Le = e=>t=>typeof t === e
  , {isArray: Y} = Array
  , ce = Le("undefined");
function kr(e) {
    return e !== null && !ce(e) && e.constructor !== null && !ce(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const yn = M("ArrayBuffer");
function Hr(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && yn(e.buffer),
    t
}
const qr = Le("string")
  , T = Le("function")
  , gn = Le("number")
  , Ie = e=>e !== null && typeof e == "object"
  , zr = e=>e === !0 || e === !1
  , Se = e=>{
    if (Fe(e) !== "object")
        return !1;
    const t = xt(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Kr = M("Date")
  , Wr = M("File")
  , Jr = M("Blob")
  , Vr = M("FileList")
  , Gr = e=>Ie(e) && T(e.pipe)
  , Xr = e=>{
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || T(e.append) && ((t = Fe(e)) === "formdata" || t === "object" && T(e.toString) && e.toString() === "[object FormData]"))
}
  , Yr = M("URLSearchParams")
  , Qr = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fe(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, i;
    if (typeof e != "object" && (e = [e]),
    Y(e))
        for (r = 0,
        i = e.length; r < i; r++)
            t.call(null, e[r], r, e);
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , o = s.length;
        let a;
        for (r = 0; r < o; r++)
            a = s[r],
            t.call(null, e[a], a, e)
    }
}
function bn(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, i;
    for (; r-- > 0; )
        if (i = n[r],
        t === i.toLowerCase())
            return i;
    return null
}
const wn = (()=>typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
  , xn = e=>!ce(e) && e !== wn;
function et() {
    const {caseless: e} = xn(this) && this || {}
      , t = {}
      , n = (r,i)=>{
        const s = e && bn(t, i) || i;
        Se(t[s]) && Se(r) ? t[s] = et(t[s], r) : Se(r) ? t[s] = et({}, r) : Y(r) ? t[s] = r.slice() : t[s] = r
    }
    ;
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && fe(arguments[r], n);
    return t
}
const Zr = (e,t,n,{allOwnKeys: r}={})=>(fe(t, (i,s)=>{
    n && T(i) ? e[s] = mn(i, n) : e[s] = i
}
, {
    allOwnKeys: r
}),
e)
  , ei = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , ti = (e,t,n,r)=>{
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , ni = (e,t,n,r)=>{
    let i, s, o;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (i = Object.getOwnPropertyNames(e),
        s = i.length; s-- > 0; )
            o = i[s],
            (!r || r(o, e, t)) && !a[o] && (t[o] = e[o],
            a[o] = !0);
        e = n !== !1 && xt(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , ri = (e,t,n)=>{
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , ii = e=>{
    if (!e)
        return null;
    if (Y(e))
        return e;
    let t = e.length;
    if (!gn(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , si = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && xt(Uint8Array))
  , oi = (e,t)=>{
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
        const s = i.value;
        t.call(e, s[0], s[1])
    }
}
  , ai = (e,t)=>{
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , ci = M("HTMLFormElement")
  , ui = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
    return r.toUpperCase() + i
})
  , Wt = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
  , li = M("RegExp")
  , En = (e,t)=>{
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    fe(n, (i,s)=>{
        t(i, s, e) !== !1 && (r[s] = i)
    }
    ),
    Object.defineProperties(e, r)
}
  , fi = e=>{
    En(e, (t,n)=>{
        if (T(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (T(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , di = (e,t)=>{
    const n = {}
      , r = i=>{
        i.forEach(s=>{
            n[s] = !0
        }
        )
    }
    ;
    return Y(e) ? r(e) : r(String(e).split(t)),
    n
}
  , pi = ()=>{}
  , hi = (e,t)=>(e = +e,
Number.isFinite(e) ? e : t)
  , We = "abcdefghijklmnopqrstuvwxyz"
  , Jt = "0123456789"
  , Sn = {
    DIGIT: Jt,
    ALPHA: We,
    ALPHA_DIGIT: We + We.toUpperCase() + Jt
}
  , _i = (e=16,t=Sn.ALPHA_DIGIT)=>{
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function mi(e) {
    return !!(e && T(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const yi = e=>{
    const t = new Array(10)
      , n = (r,i)=>{
        if (Ie(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[i] = r;
                const s = Y(r) ? [] : {};
                return fe(r, (o,a)=>{
                    const u = n(o, i + 1);
                    !ce(u) && (s[a] = u)
                }
                ),
                t[i] = void 0,
                s
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , gi = M("AsyncFunction")
  , bi = e=>e && (Ie(e) || T(e)) && T(e.then) && T(e.catch)
  , l = {
    isArray: Y,
    isArrayBuffer: yn,
    isBuffer: kr,
    isFormData: Xr,
    isArrayBufferView: Hr,
    isString: qr,
    isNumber: gn,
    isBoolean: zr,
    isObject: Ie,
    isPlainObject: Se,
    isUndefined: ce,
    isDate: Kr,
    isFile: Wr,
    isBlob: Jr,
    isRegExp: li,
    isFunction: T,
    isStream: Gr,
    isURLSearchParams: Yr,
    isTypedArray: si,
    isFileList: Vr,
    forEach: fe,
    merge: et,
    extend: Zr,
    trim: Qr,
    stripBOM: ei,
    inherits: ti,
    toFlatObject: ni,
    kindOf: Fe,
    kindOfTest: M,
    endsWith: ri,
    toArray: ii,
    forEachEntry: oi,
    matchAll: ai,
    isHTMLForm: ci,
    hasOwnProperty: Wt,
    hasOwnProp: Wt,
    reduceDescriptors: En,
    freezeMethods: fi,
    toObjectSet: di,
    toCamelCase: ui,
    noop: pi,
    toFiniteNumber: hi,
    findKey: bn,
    global: wn,
    isContextDefined: xn,
    ALPHABET: Sn,
    generateString: _i,
    isSpecCompliantForm: mi,
    toJSONObject: yi,
    isAsyncFn: gi,
    isThenable: bi
};
function b(e, t, n, r, i) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i)
}
l.inherits(b, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: l.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const An = b.prototype
  , On = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
    On[e] = {
        value: e
    }
}
);
Object.defineProperties(b, On);
Object.defineProperty(An, "isAxiosError", {
    value: !0
});
b.from = (e,t,n,r,i,s)=>{
    const o = Object.create(An);
    return l.toFlatObject(e, o, function(u) {
        return u !== Error.prototype
    }, a=>a !== "isAxiosError"),
    b.call(o, e.message, t, n, r, i),
    o.cause = e,
    o.name = e.name,
    s && Object.assign(o, s),
    o
}
;
const wi = null;
function tt(e) {
    return l.isPlainObject(e) || l.isArray(e)
}
function Rn(e) {
    return l.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Vt(e, t, n) {
    return e ? e.concat(t).map(function(i, s) {
        return i = Rn(i),
        !n && s ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}
function xi(e) {
    return l.isArray(e) && !e.some(tt)
}
const Ei = l.toFlatObject(l, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function De(e, t, n) {
    if (!l.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = l.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(y, h) {
        return !l.isUndefined(h[y])
    });
    const r = n.metaTokens
      , i = n.visitor || f
      , s = n.dots
      , o = n.indexes
      , u = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
    if (!l.isFunction(i))
        throw new TypeError("visitor must be a function");
    function c(p) {
        if (p === null)
            return "";
        if (l.isDate(p))
            return p.toISOString();
        if (!u && l.isBlob(p))
            throw new b("Blob is not supported. Use a Buffer instead.");
        return l.isArrayBuffer(p) || l.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p
    }
    function f(p, y, h) {
        let g = p;
        if (p && !h && typeof p == "object") {
            if (l.endsWith(y, "{}"))
                y = r ? y : y.slice(0, -2),
                p = JSON.stringify(p);
            else if (l.isArray(p) && xi(p) || (l.isFileList(p) || l.endsWith(y, "[]")) && (g = l.toArray(p)))
                return y = Rn(y),
                g.forEach(function(E, v) {
                    !(l.isUndefined(E) || E === null) && t.append(o === !0 ? Vt([y], v, s) : o === null ? y : y + "[]", c(E))
                }),
                !1
        }
        return tt(p) ? !0 : (t.append(Vt(h, y, s), c(p)),
        !1)
    }
    const d = []
      , _ = Object.assign(Ei, {
        defaultVisitor: f,
        convertValue: c,
        isVisitable: tt
    });
    function m(p, y) {
        if (!l.isUndefined(p)) {
            if (d.indexOf(p) !== -1)
                throw Error("Circular reference detected in " + y.join("."));
            d.push(p),
            l.forEach(p, function(g, w) {
                (!(l.isUndefined(g) || g === null) && i.call(t, g, l.isString(w) ? w.trim() : w, y, _)) === !0 && m(g, y ? y.concat(w) : [w])
            }),
            d.pop()
        }
    }
    if (!l.isObject(e))
        throw new TypeError("data must be an object");
    return m(e),
    t
}
function Gt(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function Et(e, t) {
    this._pairs = [],
    e && De(e, this, t)
}
const vn = Et.prototype;
vn.append = function(t, n) {
    this._pairs.push([t, n])
}
;
vn.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Gt)
    }
    : Gt;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
}
;
function Si(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Tn(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Si
      , i = n && n.serialize;
    let s;
    if (i ? s = i(t, n) : s = l.isURLSearchParams(t) ? t.toString() : new Et(t,n).toString(r),
    s) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + s
    }
    return e
}
class Ai {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        l.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Xt = Ai
  , Cn = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Oi = typeof URLSearchParams < "u" ? URLSearchParams : Et
  , Ri = typeof FormData < "u" ? FormData : null
  , vi = typeof Blob < "u" ? Blob : null
  , Ti = (()=>{
    let e;
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}
)()
  , Ci = (()=>typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
  , N = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Oi,
        FormData: Ri,
        Blob: vi
    },
    isStandardBrowserEnv: Ti,
    isStandardBrowserWebWorkerEnv: Ci,
    protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Pi(e, t) {
    return De(e, new N.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, s) {
            return N.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function Ni(e) {
    return l.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
}
function Mi(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const i = n.length;
    let s;
    for (r = 0; r < i; r++)
        s = n[r],
        t[s] = e[s];
    return t
}
function Pn(e) {
    function t(n, r, i, s) {
        let o = n[s++];
        const a = Number.isFinite(+o)
          , u = s >= n.length;
        return o = !o && l.isArray(i) ? i.length : o,
        u ? (l.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r,
        !a) : ((!i[o] || !l.isObject(i[o])) && (i[o] = []),
        t(n, r, i[o], s) && l.isArray(i[o]) && (i[o] = Mi(i[o])),
        !a)
    }
    if (l.isFormData(e) && l.isFunction(e.entries)) {
        const n = {};
        return l.forEachEntry(e, (r,i)=>{
            t(Ni(r), i, n, 0)
        }
        ),
        n
    }
    return null
}
const Fi = {
    "Content-Type": void 0
};
function Li(e, t, n) {
    if (l.isString(e))
        try {
            return (t || JSON.parse)(e),
            l.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const je = {
    transitional: Cn,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , i = r.indexOf("application/json") > -1
          , s = l.isObject(t);
        if (s && l.isHTMLForm(t) && (t = new FormData(t)),
        l.isFormData(t))
            return i && i ? JSON.stringify(Pn(t)) : t;
        if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t))
            return t;
        if (l.isArrayBufferView(t))
            return t.buffer;
        if (l.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (s) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Pi(t, this.formSerializer).toString();
            if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return De(a ? {
                    "files[]": t
                } : t, u && new u, this.formSerializer)
            }
        }
        return s || i ? (n.setContentType("application/json", !1),
        Li(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || je.transitional
          , r = n && n.forcedJSONParsing
          , i = this.responseType === "json";
        if (t && l.isString(t) && (r && !this.responseType || i)) {
            const o = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (o)
                    throw a.name === "SyntaxError" ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: N.classes.FormData,
        Blob: N.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
l.forEach(["delete", "get", "head"], function(t) {
    je.headers[t] = {}
});
l.forEach(["post", "put", "patch"], function(t) {
    je.headers[t] = l.merge(Fi)
});
const St = je
  , Ii = l.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Di = e=>{
    const t = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function(o) {
        i = o.indexOf(":"),
        n = o.substring(0, i).trim().toLowerCase(),
        r = o.substring(i + 1).trim(),
        !(!n || t[n] && Ii[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Yt = Symbol("internals");
function ne(e) {
    return e && String(e).trim().toLowerCase()
}
function Ae(e) {
    return e === !1 || e == null ? e : l.isArray(e) ? e.map(Ae) : String(e)
}
function ji(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const Bi = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Je(e, t, n, r, i) {
    if (l.isFunction(r))
        return r.call(this, t, n);
    if (i && (t = n),
    !!l.isString(t)) {
        if (l.isString(r))
            return t.indexOf(r) !== -1;
        if (l.isRegExp(r))
            return r.test(t)
    }
}
function $i(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,n,r)=>n.toUpperCase() + r)
}
function Ui(e, t) {
    const n = l.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r=>{
        Object.defineProperty(e, r + n, {
            value: function(i, s, o) {
                return this[r].call(this, t, i, s, o)
            },
            configurable: !0
        })
    }
    )
}
class Be {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;
        function s(a, u, c) {
            const f = ne(u);
            if (!f)
                throw new Error("header name must be a non-empty string");
            const d = l.findKey(i, f);
            (!d || i[d] === void 0 || c === !0 || c === void 0 && i[d] !== !1) && (i[d || u] = Ae(a))
        }
        const o = (a,u)=>l.forEach(a, (c,f)=>s(c, f, u));
        return l.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : l.isString(t) && (t = t.trim()) && !Bi(t) ? o(Di(t), n) : t != null && s(n, t, r),
        this
    }
    get(t, n) {
        if (t = ne(t),
        t) {
            const r = l.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n)
                    return i;
                if (n === !0)
                    return ji(i);
                if (l.isFunction(n))
                    return n.call(this, i, r);
                if (l.isRegExp(n))
                    return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = ne(t),
        t) {
            const r = l.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Je(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function s(o) {
            if (o = ne(o),
            o) {
                const a = l.findKey(r, o);
                a && (!n || Je(r, r[a], a, n)) && (delete r[a],
                i = !0)
            }
        }
        return l.isArray(t) ? t.forEach(s) : s(t),
        i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , i = !1;
        for (; r--; ) {
            const s = n[r];
            (!t || Je(this, this[s], s, t, !0)) && (delete this[s],
            i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this
          , r = {};
        return l.forEach(this, (i,s)=>{
            const o = l.findKey(r, s);
            if (o) {
                n[o] = Ae(i),
                delete n[s];
                return
            }
            const a = t ? $i(s) : String(s).trim();
            a !== s && delete n[s],
            n[a] = Ae(i),
            r[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return l.forEach(this, (r,i)=>{
            r != null && r !== !1 && (n[i] = t && l.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t,n])=>t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i=>r.set(i)),
        r
    }
    static accessor(t) {
        const r = (this[Yt] = this[Yt] = {
            accessors: {}
        }).accessors
          , i = this.prototype;
        function s(o) {
            const a = ne(o);
            r[a] || (Ui(i, o),
            r[a] = !0)
        }
        return l.isArray(t) ? t.forEach(s) : s(t),
        this
    }
}
Be.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(Be.prototype);
l.freezeMethods(Be);
const F = Be;
function Ve(e, t) {
    const n = this || St
      , r = t || n
      , i = F.from(r.headers);
    let s = r.data;
    return l.forEach(e, function(a) {
        s = a.call(n, s, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    s
}
function Nn(e) {
    return !!(e && e.__CANCEL__)
}
function de(e, t, n) {
    b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
l.inherits(de, b, {
    __CANCEL__: !0
});
function ki(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new b("Request failed with status code " + n.status,[b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
const Hi = N.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, i, s, o, a) {
            const u = [];
            u.push(n + "=" + encodeURIComponent(r)),
            l.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()),
            l.isString(s) && u.push("path=" + s),
            l.isString(o) && u.push("domain=" + o),
            a === !0 && u.push("secure"),
            document.cookie = u.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();
function qi(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function zi(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Mn(e, t) {
    return e && !qi(t) ? zi(e, t) : t
}
const Ki = N.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function i(s) {
        let o = s;
        return t && (n.setAttribute("href", o),
        o = n.href),
        n.setAttribute("href", o),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = i(window.location.href),
    function(o) {
        const a = l.isString(o) ? i(o) : o;
        return a.protocol === r.protocol && a.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function Wi(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Ji(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let i = 0, s = 0, o;
    return t = t !== void 0 ? t : 1e3,
    function(u) {
        const c = Date.now()
          , f = r[s];
        o || (o = c),
        n[i] = u,
        r[i] = c;
        let d = s
          , _ = 0;
        for (; d !== i; )
            _ += n[d++],
            d = d % e;
        if (i = (i + 1) % e,
        i === s && (s = (s + 1) % e),
        c - o < t)
            return;
        const m = f && c - f;
        return m ? Math.round(_ * 1e3 / m) : void 0
    }
}
function Qt(e, t) {
    let n = 0;
    const r = Ji(50, 250);
    return i=>{
        const s = i.loaded
          , o = i.lengthComputable ? i.total : void 0
          , a = s - n
          , u = r(a)
          , c = s <= o;
        n = s;
        const f = {
            loaded: s,
            total: o,
            progress: o ? s / o : void 0,
            bytes: a,
            rate: u || void 0,
            estimated: u && o && c ? (o - s) / u : void 0,
            event: i
        };
        f[t ? "download" : "upload"] = !0,
        e(f)
    }
}
const Vi = typeof XMLHttpRequest < "u"
  , Gi = Vi && function(e) {
    return new Promise(function(n, r) {
        let i = e.data;
        const s = F.from(e.headers).normalize()
          , o = e.responseType;
        let a;
        function u() {
            e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a)
        }
        l.isFormData(i) && (N.isStandardBrowserEnv || N.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
        let c = new XMLHttpRequest;
        if (e.auth) {
            const m = e.auth.username || ""
              , p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            s.set("Authorization", "Basic " + btoa(m + ":" + p))
        }
        const f = Mn(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Tn(f, e.params, e.paramsSerializer), !0),
        c.timeout = e.timeout;
        function d() {
            if (!c)
                return;
            const m = F.from("getAllResponseHeaders"in c && c.getAllResponseHeaders())
              , y = {
                data: !o || o === "text" || o === "json" ? c.responseText : c.response,
                status: c.status,
                statusText: c.statusText,
                headers: m,
                config: e,
                request: c
            };
            ki(function(g) {
                n(g),
                u()
            }, function(g) {
                r(g),
                u()
            }, y),
            c = null
        }
        if ("onloadend"in c ? c.onloadend = d : c.onreadystatechange = function() {
            !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(d)
        }
        ,
        c.onabort = function() {
            c && (r(new b("Request aborted",b.ECONNABORTED,e,c)),
            c = null)
        }
        ,
        c.onerror = function() {
            r(new b("Network Error",b.ERR_NETWORK,e,c)),
            c = null
        }
        ,
        c.ontimeout = function() {
            let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const y = e.transitional || Cn;
            e.timeoutErrorMessage && (p = e.timeoutErrorMessage),
            r(new b(p,y.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,e,c)),
            c = null
        }
        ,
        N.isStandardBrowserEnv) {
            const m = (e.withCredentials || Ki(f)) && e.xsrfCookieName && Hi.read(e.xsrfCookieName);
            m && s.set(e.xsrfHeaderName, m)
        }
        i === void 0 && s.setContentType(null),
        "setRequestHeader"in c && l.forEach(s.toJSON(), function(p, y) {
            c.setRequestHeader(y, p)
        }),
        l.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials),
        o && o !== "json" && (c.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Qt(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Qt(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (a = m=>{
            c && (r(!m || m.type ? new de(null,e,c) : m),
            c.abort(),
            c = null)
        }
        ,
        e.cancelToken && e.cancelToken.subscribe(a),
        e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const _ = Wi(f);
        if (_ && N.protocols.indexOf(_) === -1) {
            r(new b("Unsupported protocol " + _ + ":",b.ERR_BAD_REQUEST,e));
            return
        }
        c.send(i || null)
    }
    )
}
  , Oe = {
    http: wi,
    xhr: Gi
};
l.forEach(Oe, (e,t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Xi = {
    getAdapter: e=>{
        e = l.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        for (let i = 0; i < t && (n = e[i],
        !(r = l.isString(n) ? Oe[n.toLowerCase()] : n)); i++)
            ;
        if (!r)
            throw r === !1 ? new b(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(l.hasOwnProp(Oe, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!l.isFunction(r))
            throw new TypeError("adapter is not a function");
        return r
    }
    ,
    adapters: Oe
};
function Ge(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new de(null,e)
}
function Zt(e) {
    return Ge(e),
    e.headers = F.from(e.headers),
    e.data = Ve.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Xi.getAdapter(e.adapter || St.adapter)(e).then(function(r) {
        return Ge(e),
        r.data = Ve.call(e, e.transformResponse, r),
        r.headers = F.from(r.headers),
        r
    }, function(r) {
        return Nn(r) || (Ge(e),
        r && r.response && (r.response.data = Ve.call(e, e.transformResponse, r.response),
        r.response.headers = F.from(r.response.headers))),
        Promise.reject(r)
    })
}
const en = e=>e instanceof F ? e.toJSON() : e;
function V(e, t) {
    t = t || {};
    const n = {};
    function r(c, f, d) {
        return l.isPlainObject(c) && l.isPlainObject(f) ? l.merge.call({
            caseless: d
        }, c, f) : l.isPlainObject(f) ? l.merge({}, f) : l.isArray(f) ? f.slice() : f
    }
    function i(c, f, d) {
        if (l.isUndefined(f)) {
            if (!l.isUndefined(c))
                return r(void 0, c, d)
        } else
            return r(c, f, d)
    }
    function s(c, f) {
        if (!l.isUndefined(f))
            return r(void 0, f)
    }
    function o(c, f) {
        if (l.isUndefined(f)) {
            if (!l.isUndefined(c))
                return r(void 0, c)
        } else
            return r(void 0, f)
    }
    function a(c, f, d) {
        if (d in t)
            return r(c, f);
        if (d in e)
            return r(void 0, c)
    }
    const u = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (c,f)=>i(en(c), en(f), !0)
    };
    return l.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
        const d = u[f] || i
          , _ = d(e[f], t[f], f);
        l.isUndefined(_) && d !== a || (n[f] = _)
    }),
    n
}
const Fn = "1.4.0"
  , At = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
    At[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const tn = {};
At.transitional = function(t, n, r) {
    function i(s, o) {
        return "[Axios v" + Fn + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "")
    }
    return (s,o,a)=>{
        if (t === !1)
            throw new b(i(o, " has been removed" + (n ? " in " + n : "")),b.ERR_DEPRECATED);
        return n && !tn[o] && (tn[o] = !0,
        console.warn(i(o, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(s, o, a) : !0
    }
}
;
function Yi(e, t, n) {
    if (typeof e != "object")
        throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const s = r[i]
          , o = t[s];
        if (o) {
            const a = e[s]
              , u = a === void 0 || o(a, s, e);
            if (u !== !0)
                throw new b("option " + s + " must be " + u,b.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new b("Unknown option " + s,b.ERR_BAD_OPTION)
    }
}
const nt = {
    assertOptions: Yi,
    validators: At
}
  , L = nt.validators;
class Ce {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new Xt,
            response: new Xt
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = V(this.defaults, n);
        const {transitional: r, paramsSerializer: i, headers: s} = n;
        r !== void 0 && nt.assertOptions(r, {
            silentJSONParsing: L.transitional(L.boolean),
            forcedJSONParsing: L.transitional(L.boolean),
            clarifyTimeoutError: L.transitional(L.boolean)
        }, !1),
        i != null && (l.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : nt.assertOptions(i, {
            encode: L.function,
            serialize: L.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let o;
        o = s && l.merge(s.common, s[n.method]),
        o && l.forEach(["delete", "get", "head", "post", "put", "patch", "common"], p=>{
            delete s[p]
        }
        ),
        n.headers = F.concat(o, s);
        const a = [];
        let u = !0;
        this.interceptors.request.forEach(function(y) {
            typeof y.runWhen == "function" && y.runWhen(n) === !1 || (u = u && y.synchronous,
            a.unshift(y.fulfilled, y.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(y) {
            c.push(y.fulfilled, y.rejected)
        });
        let f, d = 0, _;
        if (!u) {
            const p = [Zt.bind(this), void 0];
            for (p.unshift.apply(p, a),
            p.push.apply(p, c),
            _ = p.length,
            f = Promise.resolve(n); d < _; )
                f = f.then(p[d++], p[d++]);
            return f
        }
        _ = a.length;
        let m = n;
        for (d = 0; d < _; ) {
            const p = a[d++]
              , y = a[d++];
            try {
                m = p(m)
            } catch (h) {
                y.call(this, h);
                break
            }
        }
        try {
            f = Zt.call(this, m)
        } catch (p) {
            return Promise.reject(p)
        }
        for (d = 0,
        _ = c.length; d < _; )
            f = f.then(c[d++], c[d++]);
        return f
    }
    getUri(t) {
        t = V(this.defaults, t);
        const n = Mn(t.baseURL, t.url);
        return Tn(n, t.params, t.paramsSerializer)
    }
}
l.forEach(["delete", "get", "head", "options"], function(t) {
    Ce.prototype[t] = function(n, r) {
        return this.request(V(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
l.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(s, o, a) {
            return this.request(V(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: o
            }))
        }
    }
    Ce.prototype[t] = n(),
    Ce.prototype[t + "Form"] = n(!0)
});
const Re = Ce;
class Ot {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(s) {
            n = s
        }
        );
        const r = this;
        this.promise.then(i=>{
            if (!r._listeners)
                return;
            let s = r._listeners.length;
            for (; s-- > 0; )
                r._listeners[s](i);
            r._listeners = null
        }
        ),
        this.promise.then = i=>{
            let s;
            const o = new Promise(a=>{
                r.subscribe(a),
                s = a
            }
            ).then(i);
            return o.cancel = function() {
                r.unsubscribe(s)
            }
            ,
            o
        }
        ,
        t(function(s, o, a) {
            r.reason || (r.reason = new de(s,o,a),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Ot(function(i) {
                t = i
            }
            ),
            cancel: t
        }
    }
}
const Qi = Ot;
function Zi(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function es(e) {
    return l.isObject(e) && e.isAxiosError === !0
}
const rt = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(rt).forEach(([e,t])=>{
    rt[t] = e
}
);
const ts = rt;
function Ln(e) {
    const t = new Re(e)
      , n = mn(Re.prototype.request, t);
    return l.extend(n, Re.prototype, t, {
        allOwnKeys: !0
    }),
    l.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(i) {
        return Ln(V(e, i))
    }
    ,
    n
}
const A = Ln(St);
A.Axios = Re;
A.CanceledError = de;
A.CancelToken = Qi;
A.isCancel = Nn;
A.VERSION = Fn;
A.toFormData = De;
A.AxiosError = b;
A.Cancel = A.CanceledError;
A.all = function(t) {
    return Promise.all(t)
}
;
A.spread = Zi;
A.isAxiosError = es;
A.mergeConfig = V;
A.AxiosHeaders = F;
A.formToJSON = e=>Pn(l.isHTMLForm(e) ? new FormData(e) : e);
A.HttpStatusCode = ts;
A.default = A;
const ns = A;
window.axios = ns;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function rs(e, t) {
    const n = Object.create(null)
      , r = e.split(",");
    for (let i = 0; i < r.length; i++)
        n[r[i]] = !0;
    return t ? i=>!!n[i.toLowerCase()] : i=>!!n[i]
}
const is = {}
  , ss = Object.prototype.hasOwnProperty
  , $e = (e,t)=>ss.call(e, t)
  , q = Array.isArray
  , ve = e=>In(e) === "[object Map]"
  , os = e=>typeof e == "string"
  , Rt = e=>typeof e == "symbol"
  , Ue = e=>e !== null && typeof e == "object"
  , as = Object.prototype.toString
  , In = e=>as.call(e)
  , cs = e=>In(e).slice(8, -1)
  , vt = e=>os(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Dn = (e,t)=>e !== t && (e === e || t === t)
  , it = new WeakMap
  , re = [];
let k;
const z = Symbol("")
  , st = Symbol("");
function us(e) {
    return e && e._isEffect === !0
}
function ls(e, t=is) {
    us(e) && (e = e.raw);
    const n = ps(e, t);
    return t.lazy || n(),
    n
}
function fs(e) {
    e.active && (jn(e),
    e.options.onStop && e.options.onStop(),
    e.active = !1)
}
let ds = 0;
function ps(e, t) {
    const n = function() {
        if (!n.active)
            return e();
        if (!re.includes(n)) {
            jn(n);
            try {
                return _s(),
                re.push(n),
                k = n,
                e()
            } finally {
                re.pop(),
                Bn(),
                k = re[re.length - 1]
            }
        }
    };
    return n.id = ds++,
    n.allowRecurse = !!t.allowRecurse,
    n._isEffect = !0,
    n.active = !0,
    n.raw = e,
    n.deps = [],
    n.options = t,
    n
}
function jn(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++)
            t[n].delete(e);
        t.length = 0
    }
}
let G = !0;
const Tt = [];
function hs() {
    Tt.push(G),
    G = !1
}
function _s() {
    Tt.push(G),
    G = !0
}
function Bn() {
    const e = Tt.pop();
    G = e === void 0 ? !0 : e
}
function C(e, t, n) {
    if (!G || k === void 0)
        return;
    let r = it.get(e);
    r || it.set(e, r = new Map);
    let i = r.get(n);
    i || r.set(n, i = new Set),
    i.has(k) || (i.add(k),
    k.deps.push(i))
}
function D(e, t, n, r, i, s) {
    const o = it.get(e);
    if (!o)
        return;
    const a = new Set
      , u = f=>{
        f && f.forEach(d=>{
            (d !== k || d.allowRecurse) && a.add(d)
        }
        )
    }
    ;
    if (t === "clear")
        o.forEach(u);
    else if (n === "length" && q(e))
        o.forEach((f,d)=>{
            (d === "length" || d >= r) && u(f)
        }
        );
    else
        switch (n !== void 0 && u(o.get(n)),
        t) {
        case "add":
            q(e) ? vt(n) && u(o.get("length")) : (u(o.get(z)),
            ve(e) && u(o.get(st)));
            break;
        case "delete":
            q(e) || (u(o.get(z)),
            ve(e) && u(o.get(st)));
            break;
        case "set":
            ve(e) && u(o.get(z));
            break
        }
    const c = f=>{
        f.options.scheduler ? f.options.scheduler(f) : f()
    }
    ;
    a.forEach(c)
}
const ms = rs("__proto__,__v_isRef,__isVue")
  , $n = new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Rt))
  , ys = Un()
  , gs = Un(!0)
  , nn = bs();
function bs() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const r = x(this);
            for (let s = 0, o = this.length; s < o; s++)
                C(r, "get", s + "");
            const i = r[t](...n);
            return i === -1 || i === !1 ? r[t](...n.map(x)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            hs();
            const r = x(this)[t].apply(this, n);
            return Bn(),
            r
        }
    }
    ),
    e
}
function Un(e=!1, t=!1) {
    return function(r, i, s) {
        if (i === "__v_isReactive")
            return !e;
        if (i === "__v_isReadonly")
            return e;
        if (i === "__v_raw" && s === (e ? t ? Is : qn : t ? Ls : Hn).get(r))
            return r;
        const o = q(r);
        if (!e && o && $e(nn, i))
            return Reflect.get(nn, i, s);
        const a = Reflect.get(r, i, s);
        return (Rt(i) ? $n.has(i) : ms(i)) || (e || C(r, "get", i),
        t) ? a : ot(a) ? !o || !vt(i) ? a.value : a : Ue(a) ? e ? zn(a) : Mt(a) : a
    }
}
const ws = xs();
function xs(e=!1) {
    return function(n, r, i, s) {
        let o = n[r];
        if (!e && (i = x(i),
        o = x(o),
        !q(n) && ot(o) && !ot(i)))
            return o.value = i,
            !0;
        const a = q(n) && vt(r) ? Number(r) < n.length : $e(n, r)
          , u = Reflect.set(n, r, i, s);
        return n === x(s) && (a ? Dn(i, o) && D(n, "set", r, i) : D(n, "add", r, i)),
        u
    }
}
function Es(e, t) {
    const n = $e(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && D(e, "delete", t, void 0),
    r
}
function Ss(e, t) {
    const n = Reflect.has(e, t);
    return (!Rt(t) || !$n.has(t)) && C(e, "has", t),
    n
}
function As(e) {
    return C(e, "iterate", q(e) ? "length" : z),
    Reflect.ownKeys(e)
}
const Os = {
    get: ys,
    set: ws,
    deleteProperty: Es,
    has: Ss,
    ownKeys: As
}
  , Rs = {
    get: gs,
    set(e, t) {
        return !0
    },
    deleteProperty(e, t) {
        return !0
    }
}
  , Ct = e=>Ue(e) ? Mt(e) : e
  , Pt = e=>Ue(e) ? zn(e) : e
  , Nt = e=>e
  , ke = e=>Reflect.getPrototypeOf(e);
function ge(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const i = x(e)
      , s = x(t);
    t !== s && !n && C(i, "get", t),
    !n && C(i, "get", s);
    const {has: o} = ke(i)
      , a = r ? Nt : n ? Pt : Ct;
    if (o.call(i, t))
        return a(e.get(t));
    if (o.call(i, s))
        return a(e.get(s));
    e !== i && e.get(t)
}
function be(e, t=!1) {
    const n = this.__v_raw
      , r = x(n)
      , i = x(e);
    return e !== i && !t && C(r, "has", e),
    !t && C(r, "has", i),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function we(e, t=!1) {
    return e = e.__v_raw,
    !t && C(x(e), "iterate", z),
    Reflect.get(e, "size", e)
}
function rn(e) {
    e = x(e);
    const t = x(this);
    return ke(t).has.call(t, e) || (t.add(e),
    D(t, "add", e, e)),
    this
}
function sn(e, t) {
    t = x(t);
    const n = x(this)
      , {has: r, get: i} = ke(n);
    let s = r.call(n, e);
    s || (e = x(e),
    s = r.call(n, e));
    const o = i.call(n, e);
    return n.set(e, t),
    s ? Dn(t, o) && D(n, "set", e, t) : D(n, "add", e, t),
    this
}
function on(e) {
    const t = x(this)
      , {has: n, get: r} = ke(t);
    let i = n.call(t, e);
    i || (e = x(e),
    i = n.call(t, e)),
    r && r.call(t, e);
    const s = t.delete(e);
    return i && D(t, "delete", e, void 0),
    s
}
function an() {
    const e = x(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && D(e, "clear", void 0, void 0),
    n
}
function xe(e, t) {
    return function(r, i) {
        const s = this
          , o = s.__v_raw
          , a = x(o)
          , u = t ? Nt : e ? Pt : Ct;
        return !e && C(a, "iterate", z),
        o.forEach((c,f)=>r.call(i, u(c), u(f), s))
    }
}
function Ee(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , s = x(i)
          , o = ve(s)
          , a = e === "entries" || e === Symbol.iterator && o
          , u = e === "keys" && o
          , c = i[e](...r)
          , f = n ? Nt : t ? Pt : Ct;
        return !t && C(s, "iterate", u ? st : z),
        {
            next() {
                const {value: d, done: _} = c.next();
                return _ ? {
                    value: d,
                    done: _
                } : {
                    value: a ? [f(d[0]), f(d[1])] : f(d),
                    done: _
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function I(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}
function vs() {
    const e = {
        get(s) {
            return ge(this, s)
        },
        get size() {
            return we(this)
        },
        has: be,
        add: rn,
        set: sn,
        delete: on,
        clear: an,
        forEach: xe(!1, !1)
    }
      , t = {
        get(s) {
            return ge(this, s, !1, !0)
        },
        get size() {
            return we(this)
        },
        has: be,
        add: rn,
        set: sn,
        delete: on,
        clear: an,
        forEach: xe(!1, !0)
    }
      , n = {
        get(s) {
            return ge(this, s, !0)
        },
        get size() {
            return we(this, !0)
        },
        has(s) {
            return be.call(this, s, !0)
        },
        add: I("add"),
        set: I("set"),
        delete: I("delete"),
        clear: I("clear"),
        forEach: xe(!0, !1)
    }
      , r = {
        get(s) {
            return ge(this, s, !0, !0)
        },
        get size() {
            return we(this, !0)
        },
        has(s) {
            return be.call(this, s, !0)
        },
        add: I("add"),
        set: I("set"),
        delete: I("delete"),
        clear: I("clear"),
        forEach: xe(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s=>{
        e[s] = Ee(s, !1, !1),
        n[s] = Ee(s, !0, !1),
        t[s] = Ee(s, !1, !0),
        r[s] = Ee(s, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [Ts,Cs,Ps,Ns] = vs();
function kn(e, t) {
    const n = t ? e ? Ns : Ps : e ? Cs : Ts;
    return (r,i,s)=>i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get($e(n, i) && i in r ? n : r, i, s)
}
const Ms = {
    get: kn(!1, !1)
}
  , Fs = {
    get: kn(!0, !1)
}
  , Hn = new WeakMap
  , Ls = new WeakMap
  , qn = new WeakMap
  , Is = new WeakMap;
function Ds(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function js(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Ds(cs(e))
}
function Mt(e) {
    return e && e.__v_isReadonly ? e : Kn(e, !1, Os, Ms, Hn)
}
function zn(e) {
    return Kn(e, !0, Rs, Fs, qn)
}
function Kn(e, t, n, r, i) {
    if (!Ue(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const s = i.get(e);
    if (s)
        return s;
    const o = js(e);
    if (o === 0)
        return e;
    const a = new Proxy(e,o === 2 ? r : n);
    return i.set(e, a),
    a
}
function x(e) {
    return e && x(e.__v_raw) || e
}
function ot(e) {
    return !!(e && e.__v_isRef === !0)
}
var at = !1
  , ct = !1
  , K = []
  , ut = -1;
function Bs(e) {
    $s(e)
}
function $s(e) {
    K.includes(e) || K.push(e),
    Us()
}
function Wn(e) {
    let t = K.indexOf(e);
    t !== -1 && t > ut && K.splice(t, 1)
}
function Us() {
    !ct && !at && (at = !0,
    queueMicrotask(ks))
}
function ks() {
    at = !1,
    ct = !0;
    for (let e = 0; e < K.length; e++)
        K[e](),
        ut = e;
    K.length = 0,
    ut = -1,
    ct = !1
}
var Q, Z, pe, Jn, lt = !0;
function Hs(e) {
    lt = !1,
    e(),
    lt = !0
}
function qs(e) {
    Q = e.reactive,
    pe = e.release,
    Z = t=>e.effect(t, {
        scheduler: n=>{
            lt ? Bs(n) : n()
        }
    }),
    Jn = e.raw
}
function cn(e) {
    Z = e
}
function zs(e) {
    let t = ()=>{}
    ;
    return [r=>{
        let i = Z(r);
        return e._x_effects || (e._x_effects = new Set,
        e._x_runEffects = ()=>{
            e._x_effects.forEach(s=>s())
        }
        ),
        e._x_effects.add(i),
        t = ()=>{
            i !== void 0 && (e._x_effects.delete(i),
            pe(i))
        }
        ,
        i
    }
    , ()=>{
        t()
    }
    ]
}
var Vn = []
  , Gn = []
  , Xn = [];
function Ks(e) {
    Xn.push(e)
}
function Yn(e, t) {
    typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []),
    e._x_cleanups.push(t)) : (t = e,
    Gn.push(t))
}
function Ws(e) {
    Vn.push(e)
}
function Js(e, t, n) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
    e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
    e._x_attributeCleanups[t].push(n)
}
function Qn(e, t) {
    e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach(([n,r])=>{
        (t === void 0 || t.includes(n)) && (r.forEach(i=>i()),
        delete e._x_attributeCleanups[n])
    }
    )
}
var Ft = new MutationObserver(jt)
  , Lt = !1;
function It() {
    Ft.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }),
    Lt = !0
}
function Zn() {
    Vs(),
    Ft.disconnect(),
    Lt = !1
}
var oe = []
  , Xe = !1;
function Vs() {
    oe = oe.concat(Ft.takeRecords()),
    oe.length && !Xe && (Xe = !0,
    queueMicrotask(()=>{
        Gs(),
        Xe = !1
    }
    ))
}
function Gs() {
    jt(oe),
    oe.length = 0
}
function O(e) {
    if (!Lt)
        return e();
    Zn();
    let t = e();
    return It(),
    t
}
var Dt = !1
  , Pe = [];
function Xs() {
    Dt = !0
}
function Ys() {
    Dt = !1,
    jt(Pe),
    Pe = []
}
function jt(e) {
    if (Dt) {
        Pe = Pe.concat(e);
        return
    }
    let t = []
      , n = []
      , r = new Map
      , i = new Map;
    for (let s = 0; s < e.length; s++)
        if (!e[s].target._x_ignoreMutationObserver && (e[s].type === "childList" && (e[s].addedNodes.forEach(o=>o.nodeType === 1 && t.push(o)),
        e[s].removedNodes.forEach(o=>o.nodeType === 1 && n.push(o))),
        e[s].type === "attributes")) {
            let o = e[s].target
              , a = e[s].attributeName
              , u = e[s].oldValue
              , c = ()=>{
                r.has(o) || r.set(o, []),
                r.get(o).push({
                    name: a,
                    value: o.getAttribute(a)
                })
            }
              , f = ()=>{
                i.has(o) || i.set(o, []),
                i.get(o).push(a)
            }
            ;
            o.hasAttribute(a) && u === null ? c() : o.hasAttribute(a) ? (f(),
            c()) : f()
        }
    i.forEach((s,o)=>{
        Qn(o, s)
    }
    ),
    r.forEach((s,o)=>{
        Vn.forEach(a=>a(o, s))
    }
    );
    for (let s of n)
        if (!t.includes(s) && (Gn.forEach(o=>o(s)),
        s._x_cleanups))
            for (; s._x_cleanups.length; )
                s._x_cleanups.pop()();
    t.forEach(s=>{
        s._x_ignoreSelf = !0,
        s._x_ignore = !0
    }
    );
    for (let s of t)
        n.includes(s) || s.isConnected && (delete s._x_ignoreSelf,
        delete s._x_ignore,
        Xn.forEach(o=>o(s)),
        s._x_ignore = !0,
        s._x_ignoreSelf = !0);
    t.forEach(s=>{
        delete s._x_ignoreSelf,
        delete s._x_ignore
    }
    ),
    t = null,
    n = null,
    r = null,
    i = null
}
function er(e) {
    return _e(X(e))
}
function he(e, t, n) {
    return e._x_dataStack = [t, ...X(n || e)],
    ()=>{
        e._x_dataStack = e._x_dataStack.filter(r=>r !== t)
    }
}
function X(e) {
    return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? X(e.host) : e.parentNode ? X(e.parentNode) : []
}
function _e(e) {
    let t = new Proxy({},{
        ownKeys: ()=>Array.from(new Set(e.flatMap(n=>Object.keys(n)))),
        has: (n,r)=>e.some(i=>i.hasOwnProperty(r)),
        get: (n,r)=>(e.find(i=>{
            if (i.hasOwnProperty(r)) {
                let s = Object.getOwnPropertyDescriptor(i, r);
                if (s.get && s.get._x_alreadyBound || s.set && s.set._x_alreadyBound)
                    return !0;
                if ((s.get || s.set) && s.enumerable) {
                    let o = s.get
                      , a = s.set
                      , u = s;
                    o = o && o.bind(t),
                    a = a && a.bind(t),
                    o && (o._x_alreadyBound = !0),
                    a && (a._x_alreadyBound = !0),
                    Object.defineProperty(i, r, {
                        ...u,
                        get: o,
                        set: a
                    })
                }
                return !0
            }
            return !1
        }
        ) || {})[r],
        set: (n,r,i)=>{
            let s = e.find(o=>o.hasOwnProperty(r));
            return s ? s[r] = i : e[e.length - 1][r] = i,
            !0
        }
    });
    return t
}
function tr(e) {
    let t = r=>typeof r == "object" && !Array.isArray(r) && r !== null
      , n = (r,i="")=>{
        Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([s,{value: o, enumerable: a}])=>{
            if (a === !1 || o === void 0)
                return;
            let u = i === "" ? s : `${i}.${s}`;
            typeof o == "object" && o !== null && o._x_interceptor ? r[s] = o.initialize(e, u, s) : t(o) && o !== r && !(o instanceof Element) && n(o, u)
        }
        )
    }
    ;
    return n(e)
}
function nr(e, t=()=>{}
) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(r, i, s) {
            return e(this.initialValue, ()=>Qs(r, i), o=>ft(r, i, o), i, s)
        }
    };
    return t(n),
    r=>{
        if (typeof r == "object" && r !== null && r._x_interceptor) {
            let i = n.initialize.bind(n);
            n.initialize = (s,o,a)=>{
                let u = r.initialize(s, o, a);
                return n.initialValue = u,
                i(s, o, a)
            }
        } else
            n.initialValue = r;
        return n
    }
}
function Qs(e, t) {
    return t.split(".").reduce((n,r)=>n[r], e)
}
function ft(e, t, n) {
    if (typeof t == "string" && (t = t.split(".")),
    t.length === 1)
        e[t[0]] = n;
    else {
        if (t.length === 0)
            throw error;
        return e[t[0]] || (e[t[0]] = {}),
        ft(e[t[0]], t.slice(1), n)
    }
}
var rr = {};
function P(e, t) {
    rr[e] = t
}
function dt(e, t) {
    return Object.entries(rr).forEach(([n,r])=>{
        let i = null;
        function s() {
            if (i)
                return i;
            {
                let[o,a] = cr(t);
                return i = {
                    interceptor: nr,
                    ...o
                },
                Yn(t, a),
                i
            }
        }
        Object.defineProperty(e, `$ ${n}`, {
            get() {
                return r(t, s())
            },
            enumerable: !1
        })
    }
    ),
    e
}
function Zs(e, t, n, ...r) {
    try {
        return n(...r)
    } catch (i) {
        ue(i, e, t)
    }
}
function ue(e, t, n=void 0) {
    Object.assign(e, {
        el: t,
        expression: n
    }),
    console.warn(`Alpine Expression Error: ${e.message}

${n ? 'Expression: "' + n + `"

` : ""}`, t),
    setTimeout(()=>{
        throw e
    }
    , 0)
}
var Te = !0;
function eo(e) {
    let t = Te;
    Te = !1,
    e(),
    Te = t
}
function J(e, t, n={}) {
    let r;
    return R(e, t)(i=>r = i, n),
    r
}
function R(...e) {
    return ir(...e)
}
var ir = sr;
function to(e) {
    ir = e
}
function sr(e, t) {
    let n = {};
    dt(n, e);
    let r = [n, ...X(e)]
      , i = typeof t == "function" ? no(r, t) : io(r, t, e);
    return Zs.bind(null, e, t, i)
}
function no(e, t) {
    return (n=()=>{}
    ,{scope: r={}, params: i=[]}={})=>{
        let s = t.apply(_e([r, ...e]), i);
        Ne(n, s)
    }
}
var Ye = {};
function ro(e, t) {
    if (Ye[e])
        return Ye[e];
    let n = Object.getPrototypeOf(async function() {}).constructor
      , r = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(async()=>{ ${e} })()` : e
      , s = (()=>{
        try {
            return new n(["__self", "scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`)
        } catch (o) {
            return ue(o, t, e),
            Promise.resolve()
        }
    }
    )();
    return Ye[e] = s,
    s
}
function io(e, t, n) {
    let r = ro(t, n);
    return (i=()=>{}
    ,{scope: s={}, params: o=[]}={})=>{
        r.result = void 0,
        r.finished = !1;
        let a = _e([s, ...e]);
        if (typeof r == "function") {
            let u = r(r, a).catch(c=>ue(c, n, t));
            r.finished ? (Ne(i, r.result, a, o, n),
            r.result = void 0) : u.then(c=>{
                Ne(i, c, a, o, n)
            }
            ).catch(c=>ue(c, n, t)).finally(()=>r.result = void 0)
        }
    }
}
function Ne(e, t, n, r, i) {
    if (Te && typeof t == "function") {
        let s = t.apply(n, r);
        s instanceof Promise ? s.then(o=>Ne(e, o, n, r)).catch(o=>ue(o, i, t)) : e(s)
    } else
        typeof t == "object" && t instanceof Promise ? t.then(s=>e(s)) : e(t)
}
var Bt = "x-";
function ee(e="") {
    return Bt + e
}
function so(e) {
    Bt = e
}
var pt = {};
function S(e, t) {
    return pt[e] = t,
    {
        before(n) {
            if (!pt[n]) {
                console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
                return
            }
            const r = H.indexOf(n);
            H.splice(r >= 0 ? r : H.indexOf("DEFAULT"), 0, e)
        }
    }
}
function $t(e, t, n) {
    if (t = Array.from(t),
    e._x_virtualDirectives) {
        let s = Object.entries(e._x_virtualDirectives).map(([a,u])=>({
            name: a,
            value: u
        }))
          , o = or(s);
        s = s.map(a=>o.find(u=>u.name === a.name) ? {
            name: `x-bind:${a.name}`,
            value: `"${a.value}"`
        } : a),
        t = t.concat(s)
    }
    let r = {};
    return t.map(fr((s,o)=>r[s] = o)).filter(pr).map(co(r, n)).sort(uo).map(s=>ao(e, s))
}
function or(e) {
    return Array.from(e).map(fr()).filter(t=>!pr(t))
}
var ht = !1
  , se = new Map
  , ar = Symbol();
function oo(e) {
    ht = !0;
    let t = Symbol();
    ar = t,
    se.set(t, []);
    let n = ()=>{
        for (; se.get(t).length; )
            se.get(t).shift()();
        se.delete(t)
    }
      , r = ()=>{
        ht = !1,
        n()
    }
    ;
    e(n),
    r()
}
function cr(e) {
    let t = []
      , n = a=>t.push(a)
      , [r,i] = zs(e);
    return t.push(i),
    [{
        Alpine: ye,
        effect: r,
        cleanup: n,
        evaluateLater: R.bind(R, e),
        evaluate: J.bind(J, e)
    }, ()=>t.forEach(a=>a())]
}
function ao(e, t) {
    let n = ()=>{}
      , r = pt[t.type] || n
      , [i,s] = cr(e);
    Js(e, t.original, s);
    let o = ()=>{
        e._x_ignore || e._x_ignoreSelf || (r.inline && r.inline(e, t, i),
        r = r.bind(r, e, t, i),
        ht ? se.get(ar).push(r) : r())
    }
    ;
    return o.runCleanups = s,
    o
}
var ur = (e,t)=>({name: n, value: r})=>(n.startsWith(e) && (n = n.replace(e, t)),
{
    name: n,
    value: r
})
  , lr = e=>e;
function fr(e=()=>{}
) {
    return ({name: t, value: n})=>{
        let {name: r, value: i} = dr.reduce((s,o)=>o(s), {
            name: t,
            value: n
        });
        return r !== t && e(r, t),
        {
            name: r,
            value: i
        }
    }
}
var dr = [];
function Ut(e) {
    dr.push(e)
}
function pr({name: e}) {
    return hr().test(e)
}
var hr = ()=>new RegExp(`^${Bt}([^:^.]+)\\b`);
function co(e, t) {
    return ({name: n, value: r})=>{
        let i = n.match(hr())
          , s = n.match(/:([a-zA-Z0-9\-:]+)/)
          , o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
          , a = t || e[n] || n;
        return {
            type: i ? i[1] : null,
            value: s ? s[1] : null,
            modifiers: o.map(u=>u.replace(".", "")),
            expression: r,
            original: a
        }
    }
}
var _t = "DEFAULT"
  , H = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "modelable", "transition", "show", "if", _t, "teleport"];
function uo(e, t) {
    let n = H.indexOf(e.type) === -1 ? _t : e.type
      , r = H.indexOf(t.type) === -1 ? _t : t.type;
    return H.indexOf(n) - H.indexOf(r)
}
function ae(e, t, n={}) {
    e.dispatchEvent(new CustomEvent(t,{
        detail: n,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}
function j(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
        Array.from(e.children).forEach(i=>j(i, t));
        return
    }
    let n = !1;
    if (t(e, ()=>n = !0),
    n)
        return;
    let r = e.firstElementChild;
    for (; r; )
        j(r, t),
        r = r.nextElementSibling
}
function B(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t)
}
var un = !1;
function lo() {
    un && B("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),
    un = !0,
    document.body || B("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
    ae(document, "alpine:init"),
    ae(document, "alpine:initializing"),
    It(),
    Ks(t=>$(t, j)),
    Yn(t=>xr(t)),
    Ws((t,n)=>{
        $t(t, n).forEach(r=>r())
    }
    );
    let e = t=>!He(t.parentElement, !0);
    Array.from(document.querySelectorAll(yr())).filter(e).forEach(t=>{
        $(t)
    }
    ),
    ae(document, "alpine:initialized")
}
var kt = []
  , _r = [];
function mr() {
    return kt.map(e=>e())
}
function yr() {
    return kt.concat(_r).map(e=>e())
}
function gr(e) {
    kt.push(e)
}
function br(e) {
    _r.push(e)
}
function He(e, t=!1) {
    return qe(e, n=>{
        if ((t ? yr() : mr()).some(i=>n.matches(i)))
            return !0
    }
    )
}
function qe(e, t) {
    if (e) {
        if (t(e))
            return e;
        if (e._x_teleportBack && (e = e._x_teleportBack),
        !!e.parentElement)
            return qe(e.parentElement, t)
    }
}
function fo(e) {
    return mr().some(t=>e.matches(t))
}
var wr = [];
function po(e) {
    wr.push(e)
}
function $(e, t=j, n=()=>{}
) {
    oo(()=>{
        t(e, (r,i)=>{
            n(r, i),
            wr.forEach(s=>s(r, i)),
            $t(r, r.attributes).forEach(s=>s()),
            r._x_ignore && i()
        }
        )
    }
    )
}
function xr(e) {
    j(e, t=>Qn(t))
}
var mt = []
  , Ht = !1;
function qt(e=()=>{}
) {
    return queueMicrotask(()=>{
        Ht || setTimeout(()=>{
            yt()
        }
        )
    }
    ),
    new Promise(t=>{
        mt.push(()=>{
            e(),
            t()
        }
        )
    }
    )
}
function yt() {
    for (Ht = !1; mt.length; )
        mt.shift()()
}
function ho() {
    Ht = !0
}
function zt(e, t) {
    return Array.isArray(t) ? ln(e, t.join(" ")) : typeof t == "object" && t !== null ? _o(e, t) : typeof t == "function" ? zt(e, t()) : ln(e, t)
}
function ln(e, t) {
    let n = i=>i.split(" ").filter(s=>!e.classList.contains(s)).filter(Boolean)
      , r = i=>(e.classList.add(...i),
    ()=>{
        e.classList.remove(...i)
    }
    );
    return t = t === !0 ? t = "" : t || "",
    r(n(t))
}
function _o(e, t) {
    let n = a=>a.split(" ").filter(Boolean)
      , r = Object.entries(t).flatMap(([a,u])=>u ? n(a) : !1).filter(Boolean)
      , i = Object.entries(t).flatMap(([a,u])=>u ? !1 : n(a)).filter(Boolean)
      , s = []
      , o = [];
    return i.forEach(a=>{
        e.classList.contains(a) && (e.classList.remove(a),
        o.push(a))
    }
    ),
    r.forEach(a=>{
        e.classList.contains(a) || (e.classList.add(a),
        s.push(a))
    }
    ),
    ()=>{
        o.forEach(a=>e.classList.add(a)),
        s.forEach(a=>e.classList.remove(a))
    }
}
function ze(e, t) {
    return typeof t == "object" && t !== null ? mo(e, t) : yo(e, t)
}
function mo(e, t) {
    let n = {};
    return Object.entries(t).forEach(([r,i])=>{
        n[r] = e.style[r],
        r.startsWith("--") || (r = go(r)),
        e.style.setProperty(r, i)
    }
    ),
    setTimeout(()=>{
        e.style.length === 0 && e.removeAttribute("style")
    }
    ),
    ()=>{
        ze(e, n)
    }
}
function yo(e, t) {
    let n = e.getAttribute("style", t);
    return e.setAttribute("style", t),
    ()=>{
        e.setAttribute("style", n || "")
    }
}
function go(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function gt(e, t=()=>{}
) {
    let n = !1;
    return function() {
        n ? t.apply(this, arguments) : (n = !0,
        e.apply(this, arguments))
    }
}
S("transition", (e,{value: t, modifiers: n, expression: r},{evaluate: i})=>{
    typeof r == "function" && (r = i(r)),
    r !== !1 && (!r || typeof r == "boolean" ? wo(e, n, t) : bo(e, r, t))
}
);
function bo(e, t, n) {
    Er(e, zt, ""),
    {
        enter: i=>{
            e._x_transition.enter.during = i
        }
        ,
        "enter-start": i=>{
            e._x_transition.enter.start = i
        }
        ,
        "enter-end": i=>{
            e._x_transition.enter.end = i
        }
        ,
        leave: i=>{
            e._x_transition.leave.during = i
        }
        ,
        "leave-start": i=>{
            e._x_transition.leave.start = i
        }
        ,
        "leave-end": i=>{
            e._x_transition.leave.end = i
        }
    }[n](t)
}
function wo(e, t, n) {
    Er(e, ze);
    let r = !t.includes("in") && !t.includes("out") && !n
      , i = r || t.includes("in") || ["enter"].includes(n)
      , s = r || t.includes("out") || ["leave"].includes(n);
    t.includes("in") && !r && (t = t.filter((g,w)=>w < t.indexOf("out"))),
    t.includes("out") && !r && (t = t.filter((g,w)=>w > t.indexOf("out")));
    let o = !t.includes("opacity") && !t.includes("scale")
      , a = o || t.includes("opacity")
      , u = o || t.includes("scale")
      , c = a ? 0 : 1
      , f = u ? ie(t, "scale", 95) / 100 : 1
      , d = ie(t, "delay", 0) / 1e3
      , _ = ie(t, "origin", "center")
      , m = "opacity, transform"
      , p = ie(t, "duration", 150) / 1e3
      , y = ie(t, "duration", 75) / 1e3
      , h = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i && (e._x_transition.enter.during = {
        transformOrigin: _,
        transitionDelay: `${d}s`,
        transitionProperty: m,
        transitionDuration: `${p}s`,
        transitionTimingFunction: h
    },
    e._x_transition.enter.start = {
        opacity: c,
        transform: `scale(${f})`
    },
    e._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
    }),
    s && (e._x_transition.leave.during = {
        transformOrigin: _,
        transitionDelay: `${d}s`,
        transitionProperty: m,
        transitionDuration: `${y}s`,
        transitionTimingFunction: h
    },
    e._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
    },
    e._x_transition.leave.end = {
        opacity: c,
        transform: `scale(${f})`
    })
}
function Er(e, t, n={}) {
    e._x_transition || (e._x_transition = {
        enter: {
            during: n,
            start: n,
            end: n
        },
        leave: {
            during: n,
            start: n,
            end: n
        },
        in(r=()=>{}
        , i=()=>{}
        ) {
            bt(e, t, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, r, i)
        },
        out(r=()=>{}
        , i=()=>{}
        ) {
            bt(e, t, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, r, i)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, r) {
    const i = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let s = ()=>i(n);
    if (t) {
        e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : s() : e._x_transition ? e._x_transition.in(n) : s();
        return
    }
    e._x_hidePromise = e._x_transition ? new Promise((o,a)=>{
        e._x_transition.out(()=>{}
        , ()=>o(r)),
        e._x_transitioning.beforeCancel(()=>a({
            isFromCancelledTransition: !0
        }))
    }
    ) : Promise.resolve(r),
    queueMicrotask(()=>{
        let o = Sr(e);
        o ? (o._x_hideChildren || (o._x_hideChildren = []),
        o._x_hideChildren.push(e)) : i(()=>{
            let a = u=>{
                let c = Promise.all([u._x_hidePromise, ...(u._x_hideChildren || []).map(a)]).then(([f])=>f());
                return delete u._x_hidePromise,
                delete u._x_hideChildren,
                c
            }
            ;
            a(e).catch(u=>{
                if (!u.isFromCancelledTransition)
                    throw u
            }
            )
        }
        )
    }
    )
}
;
function Sr(e) {
    let t = e.parentNode;
    if (t)
        return t._x_hidePromise ? t : Sr(t)
}
function bt(e, t, {during: n, start: r, end: i}={}, s=()=>{}
, o=()=>{}
) {
    if (e._x_transitioning && e._x_transitioning.cancel(),
    Object.keys(n).length === 0 && Object.keys(r).length === 0 && Object.keys(i).length === 0) {
        s(),
        o();
        return
    }
    let a, u, c;
    xo(e, {
        start() {
            a = t(e, r)
        },
        during() {
            u = t(e, n)
        },
        before: s,
        end() {
            a(),
            c = t(e, i)
        },
        after: o,
        cleanup() {
            u(),
            c()
        }
    })
}
function xo(e, t) {
    let n, r, i, s = gt(()=>{
        O(()=>{
            n = !0,
            r || t.before(),
            i || (t.end(),
            yt()),
            t.after(),
            e.isConnected && t.cleanup(),
            delete e._x_transitioning
        }
        )
    }
    );
    e._x_transitioning = {
        beforeCancels: [],
        beforeCancel(o) {
            this.beforeCancels.push(o)
        },
        cancel: gt(function() {
            for (; this.beforeCancels.length; )
                this.beforeCancels.shift()();
            s()
        }),
        finish: s
    },
    O(()=>{
        t.start(),
        t.during()
    }
    ),
    ho(),
    requestAnimationFrame(()=>{
        if (n)
            return;
        let o = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3
          , a = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        o === 0 && (o = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
        O(()=>{
            t.before()
        }
        ),
        r = !0,
        requestAnimationFrame(()=>{
            n || (O(()=>{
                t.end()
            }
            ),
            yt(),
            setTimeout(e._x_transitioning.finish, o + a),
            i = !0)
        }
        )
    }
    )
}
function ie(e, t, n) {
    if (e.indexOf(t) === -1)
        return n;
    const r = e[e.indexOf(t) + 1];
    if (!r || t === "scale" && isNaN(r))
        return n;
    if (t === "duration" || t === "delay") {
        let i = r.match(/([0-9]+)ms/);
        if (i)
            return i[1]
    }
    return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r
}
var le = !1;
function me(e, t=()=>{}
) {
    return (...n)=>le ? t(...n) : e(...n)
}
function Eo(e) {
    return (...t)=>le && e(...t)
}
function So(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
    le = !0,
    Oo(()=>{
        Ao(t)
    }
    ),
    le = !1
}
function Ao(e) {
    let t = !1;
    $(e, (r,i)=>{
        j(r, (s,o)=>{
            if (t && fo(s))
                return o();
            t = !0,
            i(s, o)
        }
        )
    }
    )
}
function Oo(e) {
    let t = Z;
    cn((n,r)=>{
        let i = t(n);
        return pe(i),
        ()=>{}
    }
    ),
    e(),
    cn(t)
}
function Ar(e, t, n, r=[]) {
    switch (e._x_bindings || (e._x_bindings = Q({})),
    e._x_bindings[t] = n,
    t = r.includes("camel") ? Fo(t) : t,
    t) {
    case "value":
        Ro(e, n);
        break;
    case "style":
        To(e, n);
        break;
    case "class":
        vo(e, n);
        break;
    case "selected":
    case "checked":
        Co(e, t, n);
        break;
    default:
        Or(e, t, n);
        break
    }
}
function Ro(e, t) {
    if (e.type === "radio")
        e.attributes.value === void 0 && (e.value = t),
        window.fromModel && (e.checked = fn(e.value, t));
    else if (e.type === "checkbox")
        Number.isInteger(t) ? e.value = t : !Number.isInteger(t) && !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some(n=>fn(n, e.value)) : e.checked = !!t;
    else if (e.tagName === "SELECT")
        Mo(e, t);
    else {
        if (e.value === t)
            return;
        e.value = t
    }
}
function vo(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
    e._x_undoAddedClasses = zt(e, t)
}
function To(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
    e._x_undoAddedStyles = ze(e, t)
}
function Co(e, t, n) {
    Or(e, t, n),
    No(e, t, n)
}
function Or(e, t, n) {
    [null, void 0, !1].includes(n) && Lo(t) ? e.removeAttribute(t) : (Rr(t) && (n = t),
    Po(e, t, n))
}
function Po(e, t, n) {
    e.getAttribute(t) != n && e.setAttribute(t, n)
}
function No(e, t, n) {
    e[t] !== n && (e[t] = n)
}
function Mo(e, t) {
    const n = [].concat(t).map(r=>r + "");
    Array.from(e.options).forEach(r=>{
        r.selected = n.includes(r.value)
    }
    )
}
function Fo(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t,n)=>n.toUpperCase())
}
function fn(e, t) {
    return e == t
}
function Rr(e) {
    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
}
function Lo(e) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e)
}
function Io(e, t, n) {
    if (e._x_bindings && e._x_bindings[t] !== void 0)
        return e._x_bindings[t];
    let r = e.getAttribute(t);
    return r === null ? typeof n == "function" ? n() : n : r === "" ? !0 : Rr(t) ? !![t, "true"].includes(r) : r
}
function vr(e, t) {
    var n;
    return function() {
        var r = this
          , i = arguments
          , s = function() {
            n = null,
            e.apply(r, i)
        };
        clearTimeout(n),
        n = setTimeout(s, t)
    }
}
function Tr(e, t) {
    let n;
    return function() {
        let r = this
          , i = arguments;
        n || (e.apply(r, i),
        n = !0,
        setTimeout(()=>n = !1, t))
    }
}
function Do(e) {
    (Array.isArray(e) ? e : [e]).forEach(n=>n(ye))
}
var U = {}
  , dn = !1;
function jo(e, t) {
    if (dn || (U = Q(U),
    dn = !0),
    t === void 0)
        return U[e];
    U[e] = t,
    typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && U[e].init(),
    tr(U[e])
}
function Bo() {
    return U
}
var Cr = {};
function $o(e, t) {
    let n = typeof t != "function" ? ()=>t : t;
    e instanceof Element ? Pr(e, n()) : Cr[e] = n
}
function Uo(e) {
    return Object.entries(Cr).forEach(([t,n])=>{
        Object.defineProperty(e, t, {
            get() {
                return (...r)=>n(...r)
            }
        })
    }
    ),
    e
}
function Pr(e, t, n) {
    let r = [];
    for (; r.length; )
        r.pop()();
    let i = Object.entries(t).map(([o,a])=>({
        name: o,
        value: a
    }))
      , s = or(i);
    i = i.map(o=>s.find(a=>a.name === o.name) ? {
        name: `x-bind:${o.name}`,
        value: `"${o.value}"`
    } : o),
    $t(e, i, n).map(o=>{
        r.push(o.runCleanups),
        o()
    }
    )
}
var Nr = {};
function ko(e, t) {
    Nr[e] = t
}
function Ho(e, t) {
    return Object.entries(Nr).forEach(([n,r])=>{
        Object.defineProperty(e, n, {
            get() {
                return (...i)=>r.bind(t)(...i)
            },
            enumerable: !1
        })
    }
    ),
    e
}
var qo = {
    get reactive() {
        return Q
    },
    get release() {
        return pe
    },
    get effect() {
        return Z
    },
    get raw() {
        return Jn
    },
    version: "3.12.1",
    flushAndStopDeferringMutations: Ys,
    dontAutoEvaluateFunctions: eo,
    disableEffectScheduling: Hs,
    startObservingMutations: It,
    stopObservingMutations: Zn,
    setReactivityEngine: qs,
    closestDataStack: X,
    skipDuringClone: me,
    onlyDuringClone: Eo,
    addRootSelector: gr,
    addInitSelector: br,
    addScopeToNode: he,
    deferMutations: Xs,
    mapAttributes: Ut,
    evaluateLater: R,
    interceptInit: po,
    setEvaluator: to,
    mergeProxies: _e,
    findClosest: qe,
    closestRoot: He,
    destroyTree: xr,
    interceptor: nr,
    transition: bt,
    setStyles: ze,
    mutateDom: O,
    directive: S,
    throttle: Tr,
    debounce: vr,
    evaluate: J,
    initTree: $,
    nextTick: qt,
    prefixed: ee,
    prefix: so,
    plugin: Do,
    magic: P,
    store: jo,
    start: lo,
    clone: So,
    bound: Io,
    $data: er,
    walk: j,
    data: ko,
    bind: $o
}
  , ye = qo;
P("nextTick", ()=>qt);
P("dispatch", e=>ae.bind(ae, e));
P("watch", (e,{evaluateLater: t, effect: n})=>(r,i)=>{
    let s = t(r), o = !0, a, u = n(()=>s(c=>{
        JSON.stringify(c),
        o ? a = c : queueMicrotask(()=>{
            i(c, a),
            a = c
        }
        ),
        o = !1
    }
    ));
    e._x_effects.delete(u)
}
);
P("store", Bo);
P("data", e=>er(e));
P("root", e=>He(e));
P("refs", e=>(e._x_refs_proxy || (e._x_refs_proxy = _e(zo(e))),
e._x_refs_proxy));
function zo(e) {
    let t = []
      , n = e;
    for (; n; )
        n._x_refs && t.push(n._x_refs),
        n = n.parentNode;
    return t
}
var Qe = {};
function Mr(e) {
    return Qe[e] || (Qe[e] = 0),
    ++Qe[e]
}
function Ko(e, t) {
    return qe(e, n=>{
        if (n._x_ids && n._x_ids[t])
            return !0
    }
    )
}
function Wo(e, t) {
    e._x_ids || (e._x_ids = {}),
    e._x_ids[t] || (e._x_ids[t] = Mr(t))
}
P("id", e=>(t,n=null)=>{
    let r = Ko(e, t)
      , i = r ? r._x_ids[t] : Mr(t);
    return n ? `${t}-${i}-${n}` : `${t}-${i}`
}
);
P("el", e=>e);
Fr("Focus", "focus", "focus");
Fr("Persist", "persist", "persist");
function Fr(e, t, n) {
    P(t, r=>B(`You can't use [$ ${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r))
}
function Jo({get: e, set: t}, {get: n, set: r}) {
    let i = !0, s, o, a = Z(()=>{
        let u, c;
        i ? (u = e(),
        r(u),
        c = n(),
        i = !1) : (u = e(),
        c = n(),
        o = JSON.stringify(u),
        JSON.stringify(c),
        o !== s ? (c = n(),
        r(u),
        c = u) : (t(c),
        u = c)),
        s = JSON.stringify(u),
        JSON.stringify(c)
    }
    );
    return ()=>{
        pe(a)
    }
}
S("modelable", (e,{expression: t},{effect: n, evaluateLater: r, cleanup: i})=>{
    let s = r(t)
      , o = ()=>{
        let f;
        return s(d=>f = d),
        f
    }
      , a = r(`${t} = __placeholder`)
      , u = f=>a(()=>{}
    , {
        scope: {
            __placeholder: f
        }
    })
      , c = o();
    u(c),
    queueMicrotask(()=>{
        if (!e._x_model)
            return;
        e._x_removeModelListeners.default();
        let f = e._x_model.get
          , d = e._x_model.set
          , _ = Jo({
            get() {
                return f()
            },
            set(m) {
                d(m)
            }
        }, {
            get() {
                return o()
            },
            set(m) {
                u(m)
            }
        });
        i(_)
    }
    )
}
);
var Vo = document.createElement("div");
S("teleport", (e,{modifiers: t, expression: n},{cleanup: r})=>{
    e.tagName.toLowerCase() !== "template" && B("x-teleport can only be used on a <template> tag", e);
    let i = me(()=>document.querySelector(n), ()=>Vo)();
    i || B(`Cannot find x-teleport element for selector: "${n}"`);
    let s = e.content.cloneNode(!0).firstElementChild;
    e._x_teleport = s,
    s._x_teleportBack = e,
    e._x_forwardEvents && e._x_forwardEvents.forEach(o=>{
        s.addEventListener(o, a=>{
            a.stopPropagation(),
            e.dispatchEvent(new a.constructor(a.type,a))
        }
        )
    }
    ),
    he(s, {}, e),
    O(()=>{
        t.includes("prepend") ? i.parentNode.insertBefore(s, i) : t.includes("append") ? i.parentNode.insertBefore(s, i.nextSibling) : i.appendChild(s),
        $(s),
        s._x_ignore = !0
    }
    ),
    r(()=>s.remove())
}
);
var Lr = ()=>{}
;
Lr.inline = (e,{modifiers: t},{cleanup: n})=>{
    t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0,
    n(()=>{
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
    }
    )
}
;
S("ignore", Lr);
S("effect", (e,{expression: t},{effect: n})=>n(R(e, t)));
function wt(e, t, n, r) {
    let i = e
      , s = u=>r(u)
      , o = {}
      , a = (u,c)=>f=>c(u, f);
    if (n.includes("dot") && (t = Go(t)),
    n.includes("camel") && (t = Xo(t)),
    n.includes("passive") && (o.passive = !0),
    n.includes("capture") && (o.capture = !0),
    n.includes("window") && (i = window),
    n.includes("document") && (i = document),
    n.includes("debounce")) {
        let u = n[n.indexOf("debounce") + 1] || "invalid-wait"
          , c = Me(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
        s = vr(s, c)
    }
    if (n.includes("throttle")) {
        let u = n[n.indexOf("throttle") + 1] || "invalid-wait"
          , c = Me(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
        s = Tr(s, c)
    }
    return n.includes("prevent") && (s = a(s, (u,c)=>{
        c.preventDefault(),
        u(c)
    }
    )),
    n.includes("stop") && (s = a(s, (u,c)=>{
        c.stopPropagation(),
        u(c)
    }
    )),
    n.includes("self") && (s = a(s, (u,c)=>{
        c.target === e && u(c)
    }
    )),
    (n.includes("away") || n.includes("outside")) && (i = document,
    s = a(s, (u,c)=>{
        e.contains(c.target) || c.target.isConnected !== !1 && (e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && u(c))
    }
    )),
    n.includes("once") && (s = a(s, (u,c)=>{
        u(c),
        i.removeEventListener(t, s, o)
    }
    )),
    s = a(s, (u,c)=>{
        Qo(t) && Zo(c, n) || u(c)
    }
    ),
    i.addEventListener(t, s, o),
    ()=>{
        i.removeEventListener(t, s, o)
    }
}
function Go(e) {
    return e.replace(/-/g, ".")
}
function Xo(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t,n)=>n.toUpperCase())
}
function Me(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function Yo(e) {
    return [" ", "_"].includes(e) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}
function Qo(e) {
    return ["keydown", "keyup"].includes(e)
}
function Zo(e, t) {
    let n = t.filter(s=>!["window", "document", "prevent", "stop", "once", "capture"].includes(s));
    if (n.includes("debounce")) {
        let s = n.indexOf("debounce");
        n.splice(s, Me((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (n.includes("throttle")) {
        let s = n.indexOf("throttle");
        n.splice(s, Me((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (n.length === 0 || n.length === 1 && pn(e.key).includes(n[0]))
        return !1;
    const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(s=>n.includes(s));
    return n = n.filter(s=>!i.includes(s)),
    !(i.length > 0 && i.filter(o=>((o === "cmd" || o === "super") && (o = "meta"),
    e[`${o}Key`])).length === i.length && pn(e.key).includes(n[0]))
}
function pn(e) {
    if (!e)
        return [];
    e = Yo(e);
    let t = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "=",
        minus: "-",
        underscore: "_"
    };
    return t[e] = e,
    Object.keys(t).map(n=>{
        if (t[n] === e)
            return n
    }
    ).filter(n=>n)
}
S("model", (e,{modifiers: t, expression: n},{effect: r, cleanup: i})=>{
    let s = e;
    t.includes("parent") && (s = e.parentNode);
    let o = R(s, n), a;
    typeof n == "string" ? a = R(s, `${n} = __placeholder`) : typeof n == "function" && typeof n() == "string" ? a = R(s, `${n()} = __placeholder`) : a = ()=>{}
    ;
    let u = ()=>{
        let _;
        return o(m=>_ = m),
        hn(_) ? _.get() : _
    }
      , c = _=>{
        let m;
        o(p=>m = p),
        hn(m) ? m.set(_) : a(()=>{}
        , {
            scope: {
                __placeholder: _
            }
        })
    }
    ;
    typeof n == "string" && e.type === "radio" && O(()=>{
        e.hasAttribute("name") || e.setAttribute("name", n)
    }
    );
    var f = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
    let d = le ? ()=>{}
    : wt(e, f, t, _=>{
        c(ea(e, t, _, u()))
    }
    );
    if (t.includes("fill") && [null, ""].includes(u()) && e.dispatchEvent(new Event(f,{})),
    e._x_removeModelListeners || (e._x_removeModelListeners = {}),
    e._x_removeModelListeners.default = d,
    i(()=>e._x_removeModelListeners.default()),
    e.form) {
        let _ = wt(e.form, "reset", [], m=>{
            qt(()=>e._x_model && e._x_model.set(e.value))
        }
        );
        i(()=>_())
    }
    e._x_model = {
        get() {
            return u()
        },
        set(_) {
            c(_)
        }
    },
    e._x_forceModelUpdate = _=>{
        _ = _ === void 0 ? u() : _,
        _ === void 0 && typeof n == "string" && n.match(/\./) && (_ = ""),
        window.fromModel = !0,
        O(()=>Ar(e, "value", _)),
        delete window.fromModel
    }
    ,
    r(()=>{
        let _ = u();
        t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(_)
    }
    )
}
);
function ea(e, t, n, r) {
    return O(()=>{
        if (n instanceof CustomEvent && n.detail !== void 0)
            return n.detail ?? n.target.value;
        if (e.type === "checkbox")
            if (Array.isArray(r)) {
                let i = t.includes("number") ? Ze(n.target.value) : n.target.value;
                return n.target.checked ? r.concat([i]) : r.filter(s=>!ta(s, i))
            } else
                return n.target.checked;
        else {
            if (e.tagName.toLowerCase() === "select" && e.multiple)
                return t.includes("number") ? Array.from(n.target.selectedOptions).map(i=>{
                    let s = i.value || i.text;
                    return Ze(s)
                }
                ) : Array.from(n.target.selectedOptions).map(i=>i.value || i.text);
            {
                let i = n.target.value;
                return t.includes("number") ? Ze(i) : t.includes("trim") ? i.trim() : i
            }
        }
    }
    )
}
function Ze(e) {
    let t = e ? parseFloat(e) : null;
    return na(t) ? t : e
}
function ta(e, t) {
    return e == t
}
function na(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function hn(e) {
    return e !== null && typeof e == "object" && typeof e.get == "function" && typeof e.set == "function"
}
S("cloak", e=>queueMicrotask(()=>O(()=>e.removeAttribute(ee("cloak")))));
br(()=>`[${ee("init")}]`);
S("init", me((e,{expression: t},{evaluate: n})=>typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)));
S("text", (e,{expression: t},{effect: n, evaluateLater: r})=>{
    let i = r(t);
    n(()=>{
        i(s=>{
            O(()=>{
                e.textContent = s
            }
            )
        }
        )
    }
    )
}
);
S("html", (e,{expression: t},{effect: n, evaluateLater: r})=>{
    let i = r(t);
    n(()=>{
        i(s=>{
            O(()=>{
                e.innerHTML = s,
                e._x_ignoreSelf = !0,
                $(e),
                delete e._x_ignoreSelf
            }
            )
        }
        )
    }
    )
}
);
Ut(ur(":", lr(ee("bind:"))));
S("bind", (e,{value: t, modifiers: n, expression: r, original: i},{effect: s})=>{
    if (!t) {
        let a = {};
        Uo(a),
        R(e, r)(c=>{
            Pr(e, c, i)
        }
        , {
            scope: a
        });
        return
    }
    if (t === "key")
        return ra(e, r);
    let o = R(e, r);
    s(()=>o(a=>{
        a === void 0 && typeof r == "string" && r.match(/\./) && (a = ""),
        O(()=>Ar(e, t, a, n))
    }
    ))
}
);
function ra(e, t) {
    e._x_keyExpression = t
}
gr(()=>`[${ee("data")}]`);
S("data", me((e,{expression: t},{cleanup: n})=>{
    t = t === "" ? "{}" : t;
    let r = {};
    dt(r, e);
    let i = {};
    Ho(i, r);
    let s = J(e, t, {
        scope: i
    });
    (s === void 0 || s === !0) && (s = {}),
    dt(s, e);
    let o = Q(s);
    tr(o);
    let a = he(e, o);
    o.init && J(e, o.init),
    n(()=>{
        o.destroy && J(e, o.destroy),
        a()
    }
    )
}
));
S("show", (e,{modifiers: t, expression: n},{effect: r})=>{
    let i = R(e, n);
    e._x_doHide || (e._x_doHide = ()=>{
        O(()=>{
            e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0)
        }
        )
    }
    ),
    e._x_doShow || (e._x_doShow = ()=>{
        O(()=>{
            e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display")
        }
        )
    }
    );
    let s = ()=>{
        e._x_doHide(),
        e._x_isShown = !1
    }
    , o = ()=>{
        e._x_doShow(),
        e._x_isShown = !0
    }
    , a = ()=>setTimeout(o), u = gt(d=>d ? o() : s(), d=>{
        typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, d, o, s) : d ? a() : s()
    }
    ), c, f = !0;
    r(()=>i(d=>{
        !f && d === c || (t.includes("immediate") && (d ? a() : s()),
        u(d),
        c = d,
        f = !1)
    }
    ))
}
);
S("for", (e,{expression: t},{effect: n, cleanup: r})=>{
    let i = sa(t)
      , s = R(e, i.items)
      , o = R(e, e._x_keyExpression || "index");
    e._x_prevKeys = [],
    e._x_lookup = {},
    n(()=>ia(e, i, s, o)),
    r(()=>{
        Object.values(e._x_lookup).forEach(a=>a.remove()),
        delete e._x_prevKeys,
        delete e._x_lookup
    }
    )
}
);
function ia(e, t, n, r) {
    let i = o=>typeof o == "object" && !Array.isArray(o)
      , s = e;
    n(o=>{
        oa(o) && o >= 0 && (o = Array.from(Array(o).keys(), h=>h + 1)),
        o === void 0 && (o = []);
        let a = e._x_lookup
          , u = e._x_prevKeys
          , c = []
          , f = [];
        if (i(o))
            o = Object.entries(o).map(([h,g])=>{
                let w = _n(t, g, h, o);
                r(E=>f.push(E), {
                    scope: {
                        index: h,
                        ...w
                    }
                }),
                c.push(w)
            }
            );
        else
            for (let h = 0; h < o.length; h++) {
                let g = _n(t, o[h], h, o);
                r(w=>f.push(w), {
                    scope: {
                        index: h,
                        ...g
                    }
                }),
                c.push(g)
            }
        let d = []
          , _ = []
          , m = []
          , p = [];
        for (let h = 0; h < u.length; h++) {
            let g = u[h];
            f.indexOf(g) === -1 && m.push(g)
        }
        u = u.filter(h=>!m.includes(h));
        let y = "template";
        for (let h = 0; h < f.length; h++) {
            let g = f[h]
              , w = u.indexOf(g);
            if (w === -1)
                u.splice(h, 0, g),
                d.push([y, h]);
            else if (w !== h) {
                let E = u.splice(h, 1)[0]
                  , v = u.splice(w - 1, 1)[0];
                u.splice(h, 0, v),
                u.splice(w, 0, E),
                _.push([E, v])
            } else
                p.push(g);
            y = g
        }
        for (let h = 0; h < m.length; h++) {
            let g = m[h];
            a[g]._x_effects && a[g]._x_effects.forEach(Wn),
            a[g].remove(),
            a[g] = null,
            delete a[g]
        }
        for (let h = 0; h < _.length; h++) {
            let[g,w] = _[h]
              , E = a[g]
              , v = a[w]
              , W = document.createElement("div");
            O(()=>{
                v || B('x-for ":key" is undefined or invalid', s),
                v.after(W),
                E.after(v),
                v._x_currentIfEl && v.after(v._x_currentIfEl),
                W.before(E),
                E._x_currentIfEl && E.after(E._x_currentIfEl),
                W.remove()
            }
            ),
            v._x_refreshXForScope(c[f.indexOf(w)])
        }
        for (let h = 0; h < d.length; h++) {
            let[g,w] = d[h]
              , E = g === "template" ? s : a[g];
            E._x_currentIfEl && (E = E._x_currentIfEl);
            let v = c[w]
              , W = f[w]
              , te = document.importNode(s.content, !0).firstElementChild
              , Kt = Q(v);
            he(te, Kt, s),
            te._x_refreshXForScope = jr=>{
                Object.entries(jr).forEach(([Br,$r])=>{
                    Kt[Br] = $r
                }
                )
            }
            ,
            O(()=>{
                E.after(te),
                $(te)
            }
            ),
            typeof W == "object" && B("x-for key cannot be an object, it must be a string or an integer", s),
            a[W] = te
        }
        for (let h = 0; h < p.length; h++)
            a[p[h]]._x_refreshXForScope(c[f.indexOf(p[h])]);
        s._x_prevKeys = f
    }
    )
}
function sa(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
      , n = /^\s*\(|\)\s*$/g
      , r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
      , i = e.match(r);
    if (!i)
        return;
    let s = {};
    s.items = i[2].trim();
    let o = i[1].replace(n, "").trim()
      , a = o.match(t);
    return a ? (s.item = o.replace(t, "").trim(),
    s.index = a[1].trim(),
    a[2] && (s.collection = a[2].trim())) : s.item = o,
    s
}
function _n(e, t, n, r) {
    let i = {};
    return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(o=>o.trim()).forEach((o,a)=>{
        i[o] = t[a]
    }
    ) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map(o=>o.trim()).forEach(o=>{
        i[o] = t[o]
    }
    ) : i[e.item] = t,
    e.index && (i[e.index] = n),
    e.collection && (i[e.collection] = r),
    i
}
function oa(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function Ir() {}
Ir.inline = (e,{expression: t},{cleanup: n})=>{
    let r = He(e);
    r._x_refs || (r._x_refs = {}),
    r._x_refs[t] = e,
    n(()=>delete r._x_refs[t])
}
;
S("ref", Ir);
S("if", (e,{expression: t},{effect: n, cleanup: r})=>{
    let i = R(e, t)
      , s = ()=>{
        if (e._x_currentIfEl)
            return e._x_currentIfEl;
        let a = e.content.cloneNode(!0).firstElementChild;
        return he(a, {}, e),
        O(()=>{
            e.after(a),
            $(a)
        }
        ),
        e._x_currentIfEl = a,
        e._x_undoIf = ()=>{
            j(a, u=>{
                u._x_effects && u._x_effects.forEach(Wn)
            }
            ),
            a.remove(),
            delete e._x_currentIfEl
        }
        ,
        a
    }
      , o = ()=>{
        e._x_undoIf && (e._x_undoIf(),
        delete e._x_undoIf)
    }
    ;
    n(()=>i(a=>{
        a ? s() : o()
    }
    )),
    r(()=>e._x_undoIf && e._x_undoIf())
}
);
S("id", (e,{expression: t},{evaluate: n})=>{
    n(t).forEach(i=>Wo(e, i))
}
);
Ut(ur("@", lr(ee("on:"))));
S("on", me((e,{value: t, modifiers: n, expression: r},{cleanup: i})=>{
    let s = r ? R(e, r) : ()=>{}
    ;
    e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []),
    e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let o = wt(e, t, n, a=>{
        s(()=>{}
        , {
            scope: {
                $event: a
            },
            params: [a]
        })
    }
    );
    i(()=>o())
}
));
Ke("Collapse", "collapse", "collapse");
Ke("Intersect", "intersect", "intersect");
Ke("Focus", "trap", "focus");
Ke("Mask", "mask", "mask");
function Ke(e, t, n) {
    S(t, r=>B(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r))
}
ye.setEvaluator(sr);
ye.setReactivityEngine({
    reactive: Mt,
    effect: ls,
    release: fs,
    raw: x
});
var aa = ye
  , Dr = aa;
window.Alpine = Dr;
Dr.start();