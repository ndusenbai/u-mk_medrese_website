"use strict"

// const animItems = document.querySelectorAll('._anim-item');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);

//     function animOnScroll() {
//         for (let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffSet = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
//                 animItem.classList.add('_active');
//             } else {
//                 animItem.classList.remove('_active');
//             }
//         }
//     }

//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
//     setTimeout(() => {
//         animOnScroll();
//     }, 300);
// }


var lastScrollTop = 500;

window.addEventListener("scroll", function () {
    var st = window.scrollY;

    if (st > lastScrollTop) {
        document.querySelector(".animIng").classList.add("colorized");
    } else {
        document.querySelector(".animIng").classList.remove("colorized");
    }
});

const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (document.getElementById('btnBurg').classList.contains('show')) {
        button.setAttribute("aria-expanded", true);
        document.getElementById("btnBurg").classList.remove("collapsed");
        //document.getElementById("headerNavbar").classList.add("show");
    }

});

$(function () {
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

/*! For license information please see app.js.LICENSE.txt */
!function (e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = e,
        i.c = t,
        i.d = function (e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        },
        i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        i.t = function (e, t) {
            if (1 & t && (e = i(e)), 8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var o in e)
                    i.d(n, o, function (t) {
                        return e[t]
                    }.bind(null, o));
            return n
        },
        i.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return i.d(t, "a", t), t
        },
        i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        i.p = "/",
        i(i.s = 2)
}([function (e, t, i) {
    var n;
    !function (t, i) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? i(t, !0) : function (e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return i(e)
        } : i(t)
    }("undefined" != typeof window ? window : this, (function (i, o) {
        "use strict";
        var r = [],
            s = Object.getPrototypeOf,
            a = r.slice,
            l = r.flat ? function (e) {
                return r.flat.call(e)
            } : function (e) {
                return r.concat.apply([], e)
            },
            d = r.push,
            c = r.indexOf,
            u = {},
            f = u.toString,
            h = u.hasOwnProperty,
            p = h.toString,
            g = p.call(Object),
            m = {},
            v = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            y = function (e) {
                return null != e && e === e.window
            },
            b = i.document,
            w = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
        function _(e, t, i) {
            var n,
                o,
                r = (i = i || b).createElement("script");
            if (r.text = e, t)
                for (n in w)
                    (o = t[n] || t.getAttribute && t.getAttribute(n)) && r.setAttribute(n, o);
            i.head.appendChild(r).parentNode.removeChild(r)
        }
        function k(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[f.call(e)] || "object" : typeof e
        }
        var T = function (e, t) {
            return new T.fn.init(e, t)
        };
        function x(e) {
            var t = !!e && "length" in e && e.length,
                i = k(e);
            return !v(e) && !y(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        T.fn = T.prototype = {
            jquery: "3.5.1",
            constructor: T,
            length: 0,
            toArray: function () {
                return a.call(this)
            },
            get: function (e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function (e) {
                return T.each(this, e)
            },
            map: function (e) {
                return this.pushStack(T.map(this, (function (t, i) {
                    return e.call(t, i, t)
                })))
            },
            slice: function () {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            even: function () {
                return this.pushStack(T.grep(this, (function (e, t) {
                    return (t + 1) % 2
                })))
            },
            odd: function () {
                return this.pushStack(T.grep(this, (function (e, t) {
                    return t % 2
                })))
            },
            eq: function (e) {
                var t = this.length,
                    i = +e + (e < 0 ? t : 0);
                return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: d,
            sort: r.sort,
            splice: r.splice
        },
            T.extend = T.fn.extend = function () {
                var e,
                    t,
                    i,
                    n,
                    o,
                    r,
                    s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    d = !1;
                for ("boolean" == typeof s && (d = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                    if (null != (e = arguments[a]))
                        for (t in e)
                            n = e[t],
                                "__proto__" !== t && s !== n && (d && n && (T.isPlainObject(n) || (o = Array.isArray(n))) ? (i = s[t], r = o && !Array.isArray(i) ? [] : o || T.isPlainObject(i) ? i : {}, o = !1, s[t] = T.extend(d, r, n)) : void 0 !== n && (s[t] = n));
                return s
            },
            T.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () { },
                isPlainObject: function (e) {
                    var t,
                        i;
                    return !(!e || "[object Object]" !== f.call(e)) && (!(t = s(e)) || "function" == typeof (i = h.call(t, "constructor") && t.constructor) && p.call(i) === g)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                globalEval: function (e, t, i) {
                    _(e, {
                        nonce: t && t.nonce
                    }, i)
                },
                each: function (e, t) {
                    var i,
                        n = 0;
                    if (x(e))
                        for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++)
                            ;
                    else
                        for (n in e)
                            if (!1 === t.call(e[n], n, e[n]))
                                break;
                    return e
                },
                makeArray: function (e, t) {
                    var i = t || [];
                    return null != e && (x(Object(e)) ? T.merge(i, "string" == typeof e ? [e] : e) : d.call(i, e)), i
                },
                inArray: function (e, t, i) {
                    return null == t ? -1 : c.call(t, e, i)
                },
                merge: function (e, t) {
                    for (var i = +t.length, n = 0, o = e.length; n < i; n++)
                        e[o++] = t[n];
                    return e.length = o, e
                },
                grep: function (e, t, i) {
                    for (var n = [], o = 0, r = e.length, s = !i; o < r; o++)
                        !t(e[o], o) !== s && n.push(e[o]);
                    return n
                },
                map: function (e, t, i) {
                    var n,
                        o,
                        r = 0,
                        s = [];
                    if (x(e))
                        for (n = e.length; r < n; r++)
                            null != (o = t(e[r], r, i)) && s.push(o);
                    else
                        for (r in e)
                            null != (o = t(e[r], r, i)) && s.push(o);
                    return l(s)
                },
                guid: 1,
                support: m
            }),
            "function" == typeof Symbol && (T.fn[Symbol.iterator] = r[Symbol.iterator]),
            T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                u["[object " + t + "]"] = t.toLowerCase()
            }));
        var C = function (e) {
            var t,
                i,
                n,
                o,
                r,
                s,
                a,
                l,
                d,
                c,
                u,
                f,
                h,
                p,
                g,
                m,
                v,
                y,
                b,
                w = "sizzle" + 1 * new Date,
                _ = e.document,
                k = 0,
                T = 0,
                x = le(),
                C = le(),
                S = le(),
                E = le(),
                D = function (e, t) {
                    return e === t && (u = !0), 0
                },
                A = {}.hasOwnProperty,
                O = [],
                N = O.pop,
                L = O.push,
                j = O.push,
                M = O.slice,
                $ = function (e, t) {
                    for (var i = 0, n = e.length; i < n; i++)
                        if (e[i] === t)
                            return i;
                    return -1
                },
                H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                I = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                q = "\\[" + I + "*(" + P + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + I + "*\\]",
                F = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                B = new RegExp(I + "+", "g"),
                W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                R = new RegExp("^" + I + "*," + I + "*"),
                z = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                V = new RegExp(I + "|>"),
                U = new RegExp(F),
                Y = new RegExp("^" + P + "$"),
                X = {
                    ID: new RegExp("^#(" + P + ")"),
                    CLASS: new RegExp("^\\.(" + P + ")"),
                    TAG: new RegExp("^(" + P + "|[*])"),
                    ATTR: new RegExp("^" + q),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + H + ")$", "i"),
                    needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /HTML$/i,
                K = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
                ie = function (e, t) {
                    var i = "0x" + e.slice(1) - 65536;
                    return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
                },
                ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                oe = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                re = function () {
                    f()
                },
                se = we((function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                j.apply(O = M.call(_.childNodes), _.childNodes),
                    O[_.childNodes.length].nodeType
            } catch (e) {
                j = {
                    apply: O.length ? function (e, t) {
                        L.apply(e, M.call(t))
                    } : function (e, t) {
                        for (var i = e.length, n = 0; e[i++] = t[n++];)
                            ;
                        e.length = i - 1
                    }
                }
            }
            function ae(e, t, n, o) {
                var r,
                    a,
                    d,
                    c,
                    u,
                    p,
                    v,
                    y = t && t.ownerDocument,
                    _ = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _)
                    return n;
                if (!o && (f(t), t = t || h, g)) {
                    if (11 !== _ && (u = Z.exec(e)))
                        if (r = u[1]) {
                            if (9 === _) {
                                if (!(d = t.getElementById(r)))
                                    return n;
                                if (d.id === r)
                                    return n.push(d), n
                            } else if (y && (d = y.getElementById(r)) && b(t, d) && d.id === r)
                                return n.push(d), n
                        } else {
                            if (u[2])
                                return j.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = u[3]) && i.getElementsByClassName && t.getElementsByClassName)
                                return j.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (i.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e, y = t, 1 === _ && (V.test(e) || z.test(e))) {
                            for ((y = ee.test(e) && ve(t.parentNode) || t) === t && i.scope || ((c = t.getAttribute("id")) ? c = c.replace(ne, oe) : t.setAttribute("id", c = w)), a = (p = s(e)).length; a--;)
                                p[a] = (c ? "#" + c : ":scope") + " " + be(p[a]);
                            v = p.join(",")
                        }
                        try {
                            return j.apply(n, y.querySelectorAll(v)), n
                        } catch (t) {
                            E(e, !0)
                        } finally {
                            c === w && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(W, "$1"), t, n, o)
            }
            function le() {
                var e = [];
                return function t(i, o) {
                    return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = o
                }
            }
            function de(e) {
                return e[w] = !0, e
            }
            function ce(e) {
                var t = h.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                        t = null
                }
            }
            function ue(e, t) {
                for (var i = e.split("|"), o = i.length; o--;)
                    n.attrHandle[i[o]] = t
            }
            function fe(e, t) {
                var i = t && e,
                    n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (n)
                    return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === t)
                            return -1;
                return e ? 1 : -1
            }
            function he(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function pe(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === e
                }
            }
            function ge(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }
            function me(e) {
                return de((function (t) {
                    return t = +t, de((function (i, n) {
                        for (var o, r = e([], i.length, t), s = r.length; s--;)
                            i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                    }))
                }))
            }
            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in i = ae.support = {}, r = ae.isXML = function (e) {
                var t = e.namespaceURI,
                    i = (e.ownerDocument || e).documentElement;
                return !Q.test(t || i && i.nodeName || "HTML")
            }, f = ae.setDocument = function (e) {
                var t,
                    o,
                    s = e ? e.ownerDocument || e : _;
                return s != h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !r(h), _ != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), i.scope = ce((function (e) {
                    return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), i.attributes = ce((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), i.getElementsByTagName = ce((function (e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                })), i.getElementsByClassName = J.test(h.getElementsByClassName), i.getById = ce((function (e) {
                    return p.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length
                })), i.getById ? (n.filter.ID = function (e) {
                    var t = e.replace(te, ie);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, n.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function (e) {
                    var t = e.replace(te, ie);
                    return function (e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, n.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var i,
                            n,
                            o,
                            r = t.getElementById(e);
                        if (r) {
                            if ((i = r.getAttributeNode("id")) && i.value === e)
                                return [r];
                            for (o = t.getElementsByName(e), n = 0; r = o[n++];)
                                if ((i = r.getAttributeNode("id")) && i.value === e)
                                    return [r]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var i,
                        n = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = r[o++];)
                            1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, n.find.CLASS = i.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e)
                }, v = [], m = [], (i.qsa = J.test(h.querySelectorAll)) && (ce((function (e) {
                    var t;
                    p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + I + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || m.push("\\[" + I + "*(?:value|" + H + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                        (t = h.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length || m.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"),
                        e.querySelectorAll(":checked").length || m.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        m.push("[\\r\\n\\f]")
                })), ce((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && m.push("name" + I + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                        p.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:")
                }))), (i.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function (e) {
                    i.disconnectedMatch = y.call(e, "*"),
                        y.call(e, "[s!='']:x"),
                        v.push("!=", F)
                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function (e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e)
                                return !0;
                    return !1
                }, D = t ? function (e, t) {
                    if (e === t)
                        return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e == h || e.ownerDocument == _ && b(_, e) ? -1 : t == h || t.ownerDocument == _ && b(_, t) ? 1 : c ? $(c, e) - $(c, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t)
                        return u = !0, 0;
                    var i,
                        n = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r)
                        return e == h ? -1 : t == h ? 1 : o ? -1 : r ? 1 : c ? $(c, e) - $(c, t) : 0;
                    if (o === r)
                        return fe(e, t);
                    for (i = e; i = i.parentNode;)
                        s.unshift(i);
                    for (i = t; i = i.parentNode;)
                        a.unshift(i);
                    for (; s[n] === a[n];)
                        n++;
                    return n ? fe(s[n], a[n]) : s[n] == _ ? -1 : a[n] == _ ? 1 : 0
                }, h) : h
            }, ae.matches = function (e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function (e, t) {
                if (f(e), i.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                    try {
                        var n = y.call(e, t);
                        if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {
                        E(t, !0)
                    }
                return ae(t, h, null, [e]).length > 0
            }, ae.contains = function (e, t) {
                return (e.ownerDocument || e) != h && f(e), b(e, t)
            }, ae.attr = function (e, t) {
                (e.ownerDocument || e) != h && f(e);
                var o = n.attrHandle[t.toLowerCase()],
                    r = o && A.call(n.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== r ? r : i.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ae.escape = function (e) {
                return (e + "").replace(ne, oe)
            }, ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function (e) {
                var t,
                    n = [],
                    o = 0,
                    r = 0;
                if (u = !i.detectDuplicates, c = !i.sortStable && e.slice(0), e.sort(D), u) {
                    for (; t = e[r++];)
                        t === e[r] && (o = n.push(r));
                    for (; o--;)
                        e.splice(n[o], 1)
                }
                return c = null, e
            }, o = ae.getText = function (e) {
                var t,
                    i = "",
                    n = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            i += o(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[n++];)
                        i += o(t);
                return i
            }, (n = ae.selectors = {
                cacheLength: 50,
                createPseudo: de,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t,
                            i = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && U.test(i) && (t = s(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ie).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = x[e + " "];
                        return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && x(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function (e, t, i) {
                        return function (n) {
                            var o = ae.attr(n, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(i) > -1 : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (e, t, i, n, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === n && 0 === o ? function (e) {
                            return !!e.parentNode
                        } : function (t, i, l) {
                            var d,
                                c,
                                u,
                                f,
                                h,
                                p,
                                g = r !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                                return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (b = (h = (d = (c = (u = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (u[f.uniqueID] = {}))[e] || [])[0] === k && d[1]) && d[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            c[e] = [k, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (d = (c = (u = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (u[f.uniqueID] = {}))[e] || [])[0] === k && d[1]), !1 === b)
                                    for (; (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((c = (u = f[w] || (f[w] = {}))[f.uniqueID] || (u[f.uniqueID] = {}))[e] = [k, b]), f !== t));)
                                        ;
                                return (b -= o) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var i,
                            o = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[w] ? o(t) : o.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? de((function (e, i) {
                            for (var n, r = o(e, t), s = r.length; s--;)
                                e[n = $(e, r[s])] = !(i[n] = r[s])
                        })) : function (e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: de((function (e) {
                        var t = [],
                            i = [],
                            n = a(e.replace(W, "$1"));
                        return n[w] ? de((function (e, t, i, o) {
                            for (var r, s = n(e, null, o, []), a = e.length; a--;)
                                (r = s[a]) && (e[a] = !(t[a] = r))
                        })) : function (e, o, r) {
                            return t[0] = e, n(t, null, r, i), t[0] = null, !i.pop()
                        }
                    })),
                    has: de((function (e) {
                        return function (t) {
                            return ae(e, t).length > 0
                        }
                    })),
                    contains: de((function (e) {
                        return e = e.replace(te, ie), function (t) {
                            return (t.textContent || o(t)).indexOf(e) > -1
                        }
                    })),
                    lang: de((function (e) {
                        return Y.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(), function (t) {
                            var i;
                            do {
                                if (i = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    })),
                    target: function (t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === p
                    },
                    focus: function (e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function (e) {
                        return G.test(e.nodeName)
                    },
                    input: function (e) {
                        return K.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me((function () {
                        return [0]
                    })),
                    last: me((function (e, t) {
                        return [t - 1]
                    })),
                    eq: me((function (e, t, i) {
                        return [i < 0 ? i + t : i]
                    })),
                    even: me((function (e, t) {
                        for (var i = 0; i < t; i += 2)
                            e.push(i);
                        return e
                    })),
                    odd: me((function (e, t) {
                        for (var i = 1; i < t; i += 2)
                            e.push(i);
                        return e
                    })),
                    lt: me((function (e, t, i) {
                        for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0;)
                            e.push(n);
                        return e
                    })),
                    gt: me((function (e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;)
                            e.push(n);
                        return e
                    }))
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                n.pseudos[t] = he(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                n.pseudos[t] = pe(t);
            function ye() { }
            function be(e) {
                for (var t = 0, i = e.length, n = ""; t < i; t++)
                    n += e[t].value;
                return n
            }
            function we(e, t, i) {
                var n = t.dir,
                    o = t.next,
                    r = o || n,
                    s = i && "parentNode" === r,
                    a = T++;
                return t.first ? function (t, i, o) {
                    for (; t = t[n];)
                        if (1 === t.nodeType || s)
                            return e(t, i, o);
                    return !1
                } : function (t, i, l) {
                    var d,
                        c,
                        u,
                        f = [k, a];
                    if (l) {
                        for (; t = t[n];)
                            if ((1 === t.nodeType || s) && e(t, i, l))
                                return !0
                    } else
                        for (; t = t[n];)
                            if (1 === t.nodeType || s)
                                if (c = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase())
                                    t = t[n] || t;
                                else {
                                    if ((d = c[r]) && d[0] === k && d[1] === a)
                                        return f[2] = d[2];
                                    if (c[r] = f, f[2] = e(t, i, l))
                                        return !0
                                }
                    return !1
                }
            }
            function _e(e) {
                return e.length > 1 ? function (t, i, n) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, i, n))
                            return !1;
                    return !0
                } : e[0]
            }
            function ke(e, t, i, n, o) {
                for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++)
                    (r = e[a]) && (i && !i(r, n, o) || (s.push(r), d && t.push(a)));
                return s
            }
            function Te(e, t, i, n, o, r) {
                return n && !n[w] && (n = Te(n)), o && !o[w] && (o = Te(o, r)), de((function (r, s, a, l) {
                    var d,
                        c,
                        u,
                        f = [],
                        h = [],
                        p = s.length,
                        g = r || function (e, t, i) {
                            for (var n = 0, o = t.length; n < o; n++)
                                ae(e, t[n], i);
                            return i
                        }(t || "*", a.nodeType ? [a] : a, []),
                        m = !e || !r && t ? g : ke(g, f, e, a, l),
                        v = i ? o || (r ? e : p || n) ? [] : s : m;
                    if (i && i(m, v, a, l), n)
                        for (d = ke(v, h), n(d, [], a, l), c = d.length; c--;)
                            (u = d[c]) && (v[h[c]] = !(m[h[c]] = u));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (d = [], c = v.length; c--;)
                                    (u = v[c]) && d.push(m[c] = u);
                                o(null, v = [], d, l)
                            }
                            for (c = v.length; c--;)
                                (u = v[c]) && (d = o ? $(r, u) : f[c]) > -1 && (r[d] = !(s[d] = u))
                        }
                    } else
                        v = ke(v === s ? v.splice(p, v.length) : v),
                            o ? o(null, s, v, l) : j.apply(s, v)
                }))
            }
            function xe(e) {
                for (var t, i, o, r = e.length, s = n.relative[e[0].type], a = s || n.relative[" "], l = s ? 1 : 0, c = we((function (e) {
                    return e === t
                }), a, !0), u = we((function (e) {
                    return $(t, e) > -1
                }), a, !0), f = [function (e, i, n) {
                    var o = !s && (n || i !== d) || ((t = i).nodeType ? c(e, i, n) : u(e, i, n));
                    return t = null, o
                }]; l < r; l++)
                    if (i = n.relative[e[l].type])
                        f = [we(_e(f), i)];
                    else {
                        if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                            for (o = ++l; o < r && !n.relative[e[o].type]; o++)
                                ;
                            return Te(l > 1 && _e(f), l > 1 && be(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(W, "$1"), i, l < o && xe(e.slice(l, o)), o < r && xe(e = e.slice(o)), o < r && be(e))
                        }
                        f.push(i)
                    }
                return _e(f)
            }
            return ye.prototype = n.filters = n.pseudos, n.setFilters = new ye, s = ae.tokenize = function (e, t) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    d,
                    c = C[e + " "];
                if (c)
                    return t ? 0 : c.slice(0);
                for (a = e, l = [], d = n.preFilter; a;) {
                    for (s in i && !(o = R.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = z.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(W, " ")
                    }), a = a.slice(i.length)), n.filter)
                        !(o = X[s].exec(a)) || d[s] && !(o = d[s](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: s,
                            matches: o
                        }), a = a.slice(i.length));
                    if (!i)
                        break
                }
                return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
            }, a = ae.compile = function (e, t) {
                var i,
                    o = [],
                    r = [],
                    a = S[e + " "];
                if (!a) {
                    for (t || (t = s(e)), i = t.length; i--;)
                        (a = xe(t[i]))[w] ? o.push(a) : r.push(a);
                    (a = S(e, function (e, t) {
                        var i = t.length > 0,
                            o = e.length > 0,
                            r = function (r, s, a, l, c) {
                                var u,
                                    p,
                                    m,
                                    v = 0,
                                    y = "0",
                                    b = r && [],
                                    w = [],
                                    _ = d,
                                    T = r || o && n.find.TAG("*", c),
                                    x = k += null == _ ? 1 : Math.random() || .1,
                                    C = T.length;
                                for (c && (d = s == h || s || c); y !== C && null != (u = T[y]); y++) {
                                    if (o && u) {
                                        for (p = 0, s || u.ownerDocument == h || (f(u), a = !g); m = e[p++];)
                                            if (m(u, s || h, a)) {
                                                l.push(u);
                                                break
                                            }
                                        c && (k = x)
                                    }
                                    i && ((u = !m && u) && v--, r && b.push(u))
                                }
                                if (v += y, i && y !== v) {
                                    for (p = 0; m = t[p++];)
                                        m(b, w, s, a);
                                    if (r) {
                                        if (v > 0)
                                            for (; y--;)
                                                b[y] || w[y] || (w[y] = N.call(l));
                                        w = ke(w)
                                    }
                                    j.apply(l, w),
                                        c && !r && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                }
                                return c && (k = x, d = _), b
                            };
                        return i ? de(r) : r
                    }(r, o))).selector = e
                }
                return a
            }, l = ae.select = function (e, t, i, o) {
                var r,
                    l,
                    d,
                    c,
                    u,
                    f = "function" == typeof e && e,
                    h = !o && s(e = f.selector || e);
                if (i = i || [], 1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (d = l[0]).type && 9 === t.nodeType && g && n.relative[l[1].type]) {
                        if (!(t = (n.find.ID(d.matches[0].replace(te, ie), t) || [])[0]))
                            return i;
                        f && (t = t.parentNode),
                            e = e.slice(l.shift().value.length)
                    }
                    for (r = X.needsContext.test(e) ? 0 : l.length; r-- && (d = l[r], !n.relative[c = d.type]);)
                        if ((u = n.find[c]) && (o = u(d.matches[0].replace(te, ie), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                            if (l.splice(r, 1), !(e = o.length && be(l)))
                                return j.apply(i, o), i;
                            break
                        }
                }
                return (f || a(e, h))(o, t, !g, i, !t || ee.test(e) && ve(t.parentNode) || t), i
            }, i.sortStable = w.split("").sort(D).join("") === w, i.detectDuplicates = !!u, f(), i.sortDetached = ce((function (e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
            })), ce((function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || ue("type|href|height|width", (function (e, t, i) {
                if (!i)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), i.attributes && ce((function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || ue("value", (function (e, t, i) {
                if (!i && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            })), ce((function (e) {
                return null == e.getAttribute("disabled")
            })) || ue(H, (function (e, t, i) {
                var n;
                if (!i)
                    return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            })), ae
        }(i);
        T.find = C,
            T.expr = C.selectors,
            T.expr[":"] = T.expr.pseudos,
            T.uniqueSort = T.unique = C.uniqueSort,
            T.text = C.getText,
            T.isXMLDoc = C.isXML,
            T.contains = C.contains,
            T.escapeSelector = C.escape;
        var S = function (e, t, i) {
            for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && T(e).is(i))
                        break;
                    n.push(e)
                }
            return n
        },
            E = function (e, t) {
                for (var i = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && i.push(e);
                return i
            },
            D = T.expr.match.needsContext;
        function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function N(e, t, i) {
            return v(t) ? T.grep(e, (function (e, n) {
                return !!t.call(e, n, e) !== i
            })) : t.nodeType ? T.grep(e, (function (e) {
                return e === t !== i
            })) : "string" != typeof t ? T.grep(e, (function (e) {
                return c.call(t, e) > -1 !== i
            })) : T.filter(t, e, i)
        }
        T.filter = function (e, t, i) {
            var n = t[0];
            return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? T.find.matchesSelector(n, e) ? [n] : [] : T.find.matches(e, T.grep(t, (function (e) {
                return 1 === e.nodeType
            })))
        },
            T.fn.extend({
                find: function (e) {
                    var t,
                        i,
                        n = this.length,
                        o = this;
                    if ("string" != typeof e)
                        return this.pushStack(T(e).filter((function () {
                            for (t = 0; t < n; t++)
                                if (T.contains(o[t], this))
                                    return !0
                        })));
                    for (i = this.pushStack([]), t = 0; t < n; t++)
                        T.find(e, o[t], i);
                    return n > 1 ? T.uniqueSort(i) : i
                },
                filter: function (e) {
                    return this.pushStack(N(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(N(this, e || [], !0))
                },
                is: function (e) {
                    return !!N(this, "string" == typeof e && D.test(e) ? T(e) : e || [], !1).length
                }
            });
        var L,
            j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function (e, t, i) {
            var n,
                o;
            if (!e)
                return this;
            if (i = i || L, "string" == typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !n[1] && t)
                    return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), O.test(n[1]) && T.isPlainObject(t))
                        for (n in t)
                            v(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return (o = b.getElementById(n[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== i.ready ? i.ready(e) : e(T) : T.makeArray(e, this)
        }).prototype = T.fn,
            L = T(b);
        var M = /^(?:parents|prev(?:Until|All))/,
            $ = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        function H(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;)
                ;
            return e
        }
        T.fn.extend({
            has: function (e) {
                var t = T(e, this),
                    i = t.length;
                return this.filter((function () {
                    for (var e = 0; e < i; e++)
                        if (T.contains(this, t[e]))
                            return !0
                }))
            },
            closest: function (e, t) {
                var i,
                    n = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof e && T(e);
                if (!D.test(e))
                    for (; n < o; n++)
                        for (i = this[n]; i && i !== t; i = i.parentNode)
                            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && T.find.matchesSelector(i, e))) {
                                r.push(i);
                                break
                            }
                return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r)
            },
            index: function (e) {
                return e ? "string" == typeof e ? c.call(T(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
            T.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return S(e, "parentNode")
                },
                parentsUntil: function (e, t, i) {
                    return S(e, "parentNode", i)
                },
                next: function (e) {
                    return H(e, "nextSibling")
                },
                prev: function (e) {
                    return H(e, "previousSibling")
                },
                nextAll: function (e) {
                    return S(e, "nextSibling")
                },
                prevAll: function (e) {
                    return S(e, "previousSibling")
                },
                nextUntil: function (e, t, i) {
                    return S(e, "nextSibling", i)
                },
                prevUntil: function (e, t, i) {
                    return S(e, "previousSibling", i)
                },
                siblings: function (e) {
                    return E((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return E(e.firstChild)
                },
                contents: function (e) {
                    return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
                }
            }, (function (e, t) {
                T.fn[e] = function (i, n) {
                    var o = T.map(this, t, i);
                    return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = T.filter(n, o)), this.length > 1 && ($[e] || T.uniqueSort(o), M.test(e) && o.reverse()), this.pushStack(o)
                }
            }));
        var I = /[^\x20\t\r\n\f]+/g;
        function P(e) {
            return e
        }
        function q(e) {
            throw e
        }
        function F(e, t, i, n) {
            var o;
            try {
                e && v(o = e.promise) ? o.call(e).done(t).fail(i) : e && v(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
            } catch (e) {
                i.apply(void 0, [e])
            }
        }
        T.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return T.each(e.match(I) || [], (function (e, i) {
                    t[i] = !0
                })), t
            }(e) : T.extend({}, e);
            var t,
                i,
                n,
                o,
                r = [],
                s = [],
                a = -1,
                l = function () {
                    for (o = o || e.once, n = t = !0; s.length; a = -1)
                        for (i = s.shift(); ++a < r.length;)
                            !1 === r[a].apply(i[0], i[1]) && e.stopOnFalse && (a = r.length, i = !1);
                    e.memory || (i = !1),
                        t = !1,
                        o && (r = i ? [] : "")
                },
                d = {
                    add: function () {
                        return r && (i && !t && (a = r.length - 1, s.push(i)), function t(i) {
                            T.each(i, (function (i, n) {
                                v(n) ? e.unique && d.has(n) || r.push(n) : n && n.length && "string" !== k(n) && t(n)
                            }))
                        }(arguments), i && !t && l()), this
                    },
                    remove: function () {
                        return T.each(arguments, (function (e, t) {
                            for (var i; (i = T.inArray(t, r, i)) > -1;)
                                r.splice(i, 1),
                                    i <= a && a--
                        })), this
                    },
                    has: function (e) {
                        return e ? T.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function () {
                        return r && (r = []), this
                    },
                    disable: function () {
                        return o = s = [], r = i = "", this
                    },
                    disabled: function () {
                        return !r
                    },
                    lock: function () {
                        return o = s = [], i || t || (r = i = ""), this
                    },
                    locked: function () {
                        return !!o
                    },
                    fireWith: function (e, i) {
                        return o || (i = [e, (i = i || []).slice ? i.slice() : i], s.push(i), t || l()), this
                    },
                    fire: function () {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!n
                    }
                };
            return d
        },
            T.extend({
                Deferred: function (e) {
                    var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
                        n = "pending",
                        o = {
                            state: function () {
                                return n
                            },
                            always: function () {
                                return r.done(arguments).fail(arguments), this
                            },
                            catch: function (e) {
                                return o.then(null, e)
                            },
                            pipe: function () {
                                var e = arguments;
                                return T.Deferred((function (i) {
                                    T.each(t, (function (t, n) {
                                        var o = v(e[n[4]]) && e[n[4]];
                                        r[n[1]]((function () {
                                            var e = o && o.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, o ? [e] : arguments)
                                        }))
                                    })),
                                        e = null
                                })).promise()
                            },
                            then: function (e, n, o) {
                                var r = 0;
                                function s(e, t, n, o) {
                                    return function () {
                                        var a = this,
                                            l = arguments,
                                            d = function () {
                                                var i,
                                                    d;
                                                if (!(e < r)) {
                                                    if ((i = n.apply(a, l)) === t.promise())
                                                        throw new TypeError("Thenable self-resolution");
                                                    d = i && ("object" == typeof i || "function" == typeof i) && i.then,
                                                        v(d) ? o ? d.call(i, s(r, t, P, o), s(r, t, q, o)) : (r++, d.call(i, s(r, t, P, o), s(r, t, q, o), s(r, t, P, t.notifyWith))) : (n !== P && (a = void 0, l = [i]), (o || t.resolveWith)(a, l))
                                                }
                                            },
                                            c = o ? d : function () {
                                                try {
                                                    d()
                                                } catch (i) {
                                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(i, c.stackTrace),
                                                        e + 1 >= r && (n !== q && (a = void 0, l = [i]), t.rejectWith(a, l))
                                                }
                                            };
                                        e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), i.setTimeout(c))
                                    }
                                }
                                return T.Deferred((function (i) {
                                    t[0][3].add(s(0, i, v(o) ? o : P, i.notifyWith)),
                                        t[1][3].add(s(0, i, v(e) ? e : P)),
                                        t[2][3].add(s(0, i, v(n) ? n : q))
                                })).promise()
                            },
                            promise: function (e) {
                                return null != e ? T.extend(e, o) : o
                            }
                        },
                        r = {};
                    return T.each(t, (function (e, i) {
                        var s = i[2],
                            a = i[5];
                        o[i[1]] = s.add,
                            a && s.add((function () {
                                n = a
                            }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                            s.add(i[3].fire),
                            r[i[0]] = function () {
                                return r[i[0] + "With"](this === r ? void 0 : this, arguments), this
                            },
                            r[i[0] + "With"] = s.fireWith
                    })), o.promise(r), e && e.call(r, r), r
                },
                when: function (e) {
                    var t = arguments.length,
                        i = t,
                        n = Array(i),
                        o = a.call(arguments),
                        r = T.Deferred(),
                        s = function (e) {
                            return function (i) {
                                n[e] = this,
                                    o[e] = arguments.length > 1 ? a.call(arguments) : i,
                                    --t || r.resolveWith(n, o)
                            }
                        };
                    if (t <= 1 && (F(e, r.done(s(i)).resolve, r.reject, !t), "pending" === r.state() || v(o[i] && o[i].then)))
                        return r.then();
                    for (; i--;)
                        F(o[i], s(i), r.reject);
                    return r.promise()
                }
            });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function (e, t) {
            i.console && i.console.warn && e && B.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        },
            T.readyException = function (e) {
                i.setTimeout((function () {
                    throw e
                }))
            };
        var W = T.Deferred();
        function R() {
            b.removeEventListener("DOMContentLoaded", R),
                i.removeEventListener("load", R),
                T.ready()
        }
        T.fn.ready = function (e) {
            return W.then(e).catch((function (e) {
                T.readyException(e)
            })), this
        },
            T.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || W.resolveWith(b, [T]))
                }
            }),
            T.ready.then = W.then,
            "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(T.ready) : (b.addEventListener("DOMContentLoaded", R), i.addEventListener("load", R));
        var z = function (e, t, i, n, o, r, s) {
            var a = 0,
                l = e.length,
                d = null == i;
            if ("object" === k(i))
                for (a in o = !0, i)
                    z(e, t, a, i[a], !0, r, s);
            else if (void 0 !== n && (o = !0, v(n) || (s = !0), d && (s ? (t.call(e, n), t = null) : (d = t, t = function (e, t, i) {
                return d.call(T(e), i)
            })), t))
                for (; a < l; a++)
                    t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : d ? t.call(e) : l ? t(e[0], i) : r
        },
            V = /^-ms-/,
            U = /-([a-z])/g;
        function Y(e, t) {
            return t.toUpperCase()
        }
        function X(e) {
            return e.replace(V, "ms-").replace(U, Y)
        }
        var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function K() {
            this.expando = T.expando + K.uid++
        }
        K.uid = 1,
            K.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function (e, t, i) {
                    var n,
                        o = this.cache(e);
                    if ("string" == typeof t)
                        o[X(t)] = i;
                    else
                        for (n in t)
                            o[X(n)] = t[n];
                    return o
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
                },
                access: function (e, t, i) {
                    return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
                },
                remove: function (e, t) {
                    var i,
                        n = e[this.expando];
                    if (void 0 !== n) {
                        if (void 0 !== t) {
                            i = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in n ? [t] : t.match(I) || []).length;
                            for (; i--;)
                                delete n[t[i]]
                        }
                        (void 0 === t || T.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !T.isEmptyObject(t)
                }
            };
        var G = new K,
            J = new K,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;
        function te(e, t, i) {
            var n;
            if (void 0 === i && 1 === e.nodeType)
                if (n = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
                    try {
                        i = function (e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(i)
                    } catch (e) { }
                    J.set(e, t, i)
                } else
                    i = void 0;
            return i
        }
        T.extend({
            hasData: function (e) {
                return J.hasData(e) || G.hasData(e)
            },
            data: function (e, t, i) {
                return J.access(e, t, i)
            },
            removeData: function (e, t) {
                J.remove(e, t)
            },
            _data: function (e, t, i) {
                return G.access(e, t, i)
            },
            _removeData: function (e, t) {
                G.remove(e, t)
            }
        }),
            T.fn.extend({
                data: function (e, t) {
                    var i,
                        n,
                        o,
                        r = this[0],
                        s = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = J.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
                            for (i = s.length; i--;)
                                s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = X(n.slice(5)), te(r, n, o[n]));
                            G.set(r, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each((function () {
                        J.set(this, e)
                    })) : z(this, (function (t) {
                        var i;
                        if (r && void 0 === t)
                            return void 0 !== (i = J.get(r, e)) || void 0 !== (i = te(r, e)) ? i : void 0;
                        this.each((function () {
                            J.set(this, e, t)
                        }))
                    }), null, t, arguments.length > 1, null, !0)
                },
                removeData: function (e) {
                    return this.each((function () {
                        J.remove(this, e)
                    }))
                }
            }),
            T.extend({
                queue: function (e, t, i) {
                    var n;
                    if (e)
                        return t = (t || "fx") + "queue", n = G.get(e, t), i && (!n || Array.isArray(i) ? n = G.access(e, t, T.makeArray(i)) : n.push(i)), n || []
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var i = T.queue(e, t),
                        n = i.length,
                        o = i.shift(),
                        r = T._queueHooks(e, t);
                    "inprogress" === o && (o = i.shift(), n--),
                        o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, (function () {
                            T.dequeue(e, t)
                        }), r)),
                        !n && r && r.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var i = t + "queueHooks";
                    return G.get(e, i) || G.access(e, i, {
                        empty: T.Callbacks("once memory").add((function () {
                            G.remove(e, [t + "queue", i])
                        }))
                    })
                }
            }),
            T.fn.extend({
                queue: function (e, t) {
                    var i = 2;
                    return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? T.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                        var i = T.queue(this, e, t);
                        T._queueHooks(this, e),
                            "fx" === e && "inprogress" !== i[0] && T.dequeue(this, e)
                    }))
                },
                dequeue: function (e) {
                    return this.each((function () {
                        T.dequeue(this, e)
                    }))
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var i,
                        n = 1,
                        o = T.Deferred(),
                        r = this,
                        s = this.length,
                        a = function () {
                            --n || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)
                        (i = G.get(r[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                    return a(), o.promise(t)
                }
            });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ne = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            re = b.documentElement,
            se = function (e) {
                return T.contains(e.ownerDocument, e)
            },
            ae = {
                composed: !0
            };
        re.getRootNode && (se = function (e) {
            return T.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        });
        var le = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === T.css(e, "display")
        };
        function de(e, t, i, n) {
            var o,
                r,
                s = 20,
                a = n ? function () {
                    return n.cur()
                } : function () {
                    return T.css(e, t, "")
                },
                l = a(),
                d = i && i[3] || (T.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (T.cssNumber[t] || "px" !== d && +l) && ne.exec(T.css(e, t));
            if (c && c[3] !== d) {
                for (l /= 2, d = d || c[3], c = +l || 1; s--;)
                    T.style(e, t, c + d),
                        (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                        c /= r;
                c *= 2,
                    T.style(e, t, c + d),
                    i = i || []
            }
            return i && (c = +c || +l || 0, o = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = c, n.end = o)), o
        }
        var ce = {};
        function ue(e) {
            var t,
                i = e.ownerDocument,
                n = e.nodeName,
                o = ce[n];
            return o || (t = i.body.appendChild(i.createElement(n)), o = T.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ce[n] = o, o)
        }
        function fe(e, t) {
            for (var i, n, o = [], r = 0, s = e.length; r < s; r++)
                (n = e[r]).style && (i = n.style.display, t ? ("none" === i && (o[r] = G.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && le(n) && (o[r] = ue(n))) : "none" !== i && (o[r] = "none", G.set(n, "display", i)));
            for (r = 0; r < s; r++)
                null != o[r] && (e[r].style.display = o[r]);
            return e
        }
        T.fn.extend({
            show: function () {
                return fe(this, !0)
            },
            hide: function () {
                return fe(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                    le(this) ? T(this).show() : T(this).hide()
                }))
            }
        });
        var he,
            pe,
            ge = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
        he = b.createDocumentFragment().appendChild(b.createElement("div")),
            (pe = b.createElement("input")).setAttribute("type", "radio"),
            pe.setAttribute("checked", "checked"),
            pe.setAttribute("name", "t"),
            he.appendChild(pe),
            m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked,
            he.innerHTML = "<textarea>x</textarea>",
            m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue,
            he.innerHTML = "<option></option>",
            m.option = !!he.lastChild;
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function be(e, t) {
            var i;
            return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? T.merge([e], i) : i
        }
        function we(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                G.set(e[i], "globalEval", !t || G.get(t[i], "globalEval"))
        }
        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead,
            ye.th = ye.td,
            m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var _e = /<|&#?\w+;/;
        function ke(e, t, i, n, o) {
            for (var r, s, a, l, d, c, u = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
                if ((r = e[h]) || 0 === r)
                    if ("object" === k(r))
                        T.merge(f, r.nodeType ? [r] : r);
                    else if (_e.test(r)) {
                        for (s = s || u.appendChild(t.createElement("div")), a = (me.exec(r) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + T.htmlPrefilter(r) + l[2], c = l[0]; c--;)
                            s = s.lastChild;
                        T.merge(f, s.childNodes),
                            (s = u.firstChild).textContent = ""
                    } else
                        f.push(t.createTextNode(r));
            for (u.textContent = "", h = 0; r = f[h++];)
                if (n && T.inArray(r, n) > -1)
                    o && o.push(r);
                else if (d = se(r), s = be(u.appendChild(r), "script"), d && we(s), i)
                    for (c = 0; r = s[c++];)
                        ve.test(r.type || "") && i.push(r);
            return u
        }
        var Te = /^key/,
            xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ce = /^([^.]*)(?:\.(.+)|)/;
        function Se() {
            return !0
        }
        function Ee() {
            return !1
        }
        function De(e, t) {
            return e === function () {
                try {
                    return b.activeElement
                } catch (e) { }
            }() == ("focus" === t)
        }
        function Ae(e, t, i, n, o, r) {
            var s,
                a;
            if ("object" == typeof t) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), t)
                    Ae(e, a, i, n, t[a], r);
                return e
            }
            if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o)
                o = Ee;
            else if (!o)
                return e;
            return 1 === r && (s = o, (o = function (e) {
                return T().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = T.guid++)), e.each((function () {
                T.event.add(this, t, o, n, i)
            }))
        }
        function Oe(e, t, i) {
            i ? (G.set(e, t, !1), T.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                    var n,
                        o,
                        r = G.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (r.length)
                            (T.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (r = a.call(arguments), G.set(this, t, r), n = i(this, t), this[t](), r !== (o = G.get(this, t)) || n ? G.set(this, t, !1) : o = {}, r !== o)
                            return e.stopImmediatePropagation(), e.preventDefault(), o.value
                    } else
                        r.length && (G.set(this, t, {
                            value: T.event.trigger(T.extend(r[0], T.Event.prototype), r.slice(1), this)
                        }), e.stopImmediatePropagation())
                }
            })) : void 0 === G.get(e, t) && T.event.add(e, t, Se)
        }
        T.event = {
            global: {},
            add: function (e, t, i, n, o) {
                var r,
                    s,
                    a,
                    l,
                    d,
                    c,
                    u,
                    f,
                    h,
                    p,
                    g,
                    m = G.get(e);
                if (Q(e))
                    for (i.handler && (i = (r = i).handler, o = r.selector), o && T.find.matchesSelector(re, o), i.guid || (i.guid = T.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (t) {
                        return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                    }), d = (t = (t || "").match(I) || [""]).length; d--;)
                        h = g = (a = Ce.exec(t[d]) || [])[1],
                            p = (a[2] || "").split(".").sort(),
                            h && (u = T.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = T.event.special[h] || {}, c = T.extend({
                                type: h,
                                origType: g,
                                data: n,
                                handler: i,
                                guid: i.guid,
                                selector: o,
                                needsContext: o && T.expr.match.needsContext.test(o),
                                namespace: p.join(".")
                            }, r), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, p, s) || e.addEventListener && e.addEventListener(h, s)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), T.event.global[h] = !0)
            },
            remove: function (e, t, i, n, o) {
                var r,
                    s,
                    a,
                    l,
                    d,
                    c,
                    u,
                    f,
                    h,
                    p,
                    g,
                    m = G.hasData(e) && G.get(e);
                if (m && (l = m.events)) {
                    for (d = (t = (t || "").match(I) || [""]).length; d--;)
                        if (h = g = (a = Ce.exec(t[d]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                            for (u = T.event.special[h] || {}, f = l[h = (n ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;)
                                c = f[r],
                                    !o && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, u.remove && u.remove.call(e, c));
                            s && !f.length && (u.teardown && !1 !== u.teardown.call(e, p, m.handle) || T.removeEvent(e, h, m.handle), delete l[h])
                        } else
                            for (h in l)
                                T.event.remove(e, h + t[d], i, n, !0);
                    T.isEmptyObject(l) && G.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t,
                    i,
                    n,
                    o,
                    r,
                    s,
                    a = new Array(arguments.length),
                    l = T.event.fix(e),
                    d = (G.get(this, "events") || Object.create(null))[l.type] || [],
                    c = T.event.special[l.type] || {};
                for (a[0] = l, t = 1; t < arguments.length; t++)
                    a[t] = arguments[t];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (s = T.event.handlers.call(this, l, d), t = 0; (o = s[t++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = o.elem, i = 0; (r = o.handlers[i++]) && !l.isImmediatePropagationStopped();)
                            l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (n = ((T.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            },
            handlers: function (e, t) {
                var i,
                    n,
                    o,
                    r,
                    s,
                    a = [],
                    l = t.delegateCount,
                    d = e.target;
                if (l && d.nodeType && !("click" === e.type && e.button >= 1))
                    for (; d !== this; d = d.parentNode || this)
                        if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                            for (r = [], s = {}, i = 0; i < l; i++)
                                void 0 === s[o = (n = t[i]).selector + " "] && (s[o] = n.needsContext ? T(o, this).index(d) > -1 : T.find(o, this, null, [d]).length),
                                    s[o] && r.push(n);
                            r.length && a.push({
                                elem: d,
                                handlers: r
                            })
                        }
                return d = this, l < t.length && a.push({
                    elem: d,
                    handlers: t.slice(l)
                }), a
            },
            addProp: function (e, t) {
                Object.defineProperty(T.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(t) ? function () {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[T.expando] ? e : new T.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function (e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && A(t, "input") && Oe(t, "click", Se), !1
                    },
                    trigger: function (e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && A(t, "input") && Oe(t, "click"), !0
                    },
                    _default: function (e) {
                        var t = e.target;
                        return ge.test(t.type) && t.click && A(t, "input") && G.get(t, "click") || A(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
            T.removeEvent = function (e, t, i) {
                e.removeEventListener && e.removeEventListener(t, i)
            },
            T.Event = function (e, t) {
                if (!(this instanceof T.Event))
                    return new T.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
                    t && T.extend(this, t),
                    this.timeStamp = e && e.timeStamp || Date.now(),
                    this[T.expando] = !0
            },
            T.Event.prototype = {
                constructor: T.Event,
                isDefaultPrevented: Ee,
                isPropagationStopped: Ee,
                isImmediatePropagationStopped: Ee,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Se,
                        e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Se,
                        e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Se,
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation()
                }
            },
            T.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, T.event.addProp),
            T.each({
                focus: "focusin",
                blur: "focusout"
            }, (function (e, t) {
                T.event.special[e] = {
                    setup: function () {
                        return Oe(this, e, De), !1
                    },
                    trigger: function () {
                        return Oe(this, e), !0
                    },
                    delegateType: t
                }
            })),
            T.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function (e, t) {
                T.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var i,
                            n = this,
                            o = e.relatedTarget,
                            r = e.handleObj;
                        return o && (o === n || T.contains(n, o)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
                    }
                }
            })),
            T.fn.extend({
                on: function (e, t, i, n) {
                    return Ae(this, e, t, i, n)
                },
                one: function (e, t, i, n) {
                    return Ae(this, e, t, i, n, 1)
                },
                off: function (e, t, i) {
                    var n,
                        o;
                    if (e && e.preventDefault && e.handleObj)
                        return n = e.handleObj, T(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof e) {
                        for (o in e)
                            this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Ee), this.each((function () {
                        T.event.remove(this, e, i, t)
                    }))
                }
            });
        var Ne = /<script|<style|<link/i,
            Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
            je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Me(e, t) {
            return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
        }
        function $e(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }
        function He(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }
        function Ie(e, t) {
            var i,
                n,
                o,
                r,
                s,
                a;
            if (1 === t.nodeType) {
                if (G.hasData(e) && (a = G.get(e).events))
                    for (o in G.remove(t, "handle events"), a)
                        for (i = 0, n = a[o].length; i < n; i++)
                            T.event.add(t, o, a[o][i]);
                J.hasData(e) && (r = J.access(e), s = T.extend({}, r), J.set(t, s))
            }
        }
        function Pe(e, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && ge.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
        }
        function qe(e, t, i, n) {
            t = l(t);
            var o,
                r,
                s,
                a,
                d,
                c,
                u = 0,
                f = e.length,
                h = f - 1,
                p = t[0],
                g = v(p);
            if (g || f > 1 && "string" == typeof p && !m.checkClone && Le.test(p))
                return e.each((function (o) {
                    var r = e.eq(o);
                    g && (t[0] = p.call(this, o, r.html())),
                        qe(r, t, i, n)
                }));
            if (f && (r = (o = ke(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
                for (a = (s = T.map(be(o, "script"), $e)).length; u < f; u++)
                    d = o,
                        u !== h && (d = T.clone(d, !0, !0), a && T.merge(s, be(d, "script"))),
                        i.call(e[u], d, u);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, T.map(s, He), u = 0; u < a; u++)
                        d = s[u],
                            ve.test(d.type || "") && !G.access(d, "globalEval") && T.contains(c, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? T._evalUrl && !d.noModule && T._evalUrl(d.src, {
                                nonce: d.nonce || d.getAttribute("nonce")
                            }, c) : _(d.textContent.replace(je, ""), d, c))
            }
            return e
        }
        function Fe(e, t, i) {
            for (var n, o = t ? T.filter(t, e) : e, r = 0; null != (n = o[r]); r++)
                i || 1 !== n.nodeType || T.cleanData(be(n)),
                    n.parentNode && (i && se(n) && we(be(n, "script")), n.parentNode.removeChild(n));
            return e
        }
        T.extend({
            htmlPrefilter: function (e) {
                return e
            },
            clone: function (e, t, i) {
                var n,
                    o,
                    r,
                    s,
                    a = e.cloneNode(!0),
                    l = se(e);
                if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                    for (s = be(a), n = 0, o = (r = be(e)).length; n < o; n++)
                        Pe(r[n], s[n]);
                if (t)
                    if (i)
                        for (r = r || be(e), s = s || be(a), n = 0, o = r.length; n < o; n++)
                            Ie(r[n], s[n]);
                    else
                        Ie(e, a);
                return (s = be(a, "script")).length > 0 && we(s, !l && be(e, "script")), a
            },
            cleanData: function (e) {
                for (var t, i, n, o = T.event.special, r = 0; void 0 !== (i = e[r]); r++)
                    if (Q(i)) {
                        if (t = i[G.expando]) {
                            if (t.events)
                                for (n in t.events)
                                    o[n] ? T.event.remove(i, n) : T.removeEvent(i, n, t.handle);
                            i[G.expando] = void 0
                        }
                        i[J.expando] && (i[J.expando] = void 0)
                    }
            }
        }),
            T.fn.extend({
                detach: function (e) {
                    return Fe(this, e, !0)
                },
                remove: function (e) {
                    return Fe(this, e)
                },
                text: function (e) {
                    return z(this, (function (e) {
                        return void 0 === e ? T.text(this) : this.empty().each((function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }))
                    }), null, e, arguments.length)
                },
                append: function () {
                    return qe(this, arguments, (function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
                    }))
                },
                prepend: function () {
                    return qe(this, arguments, (function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Me(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                },
                before: function () {
                    return qe(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                },
                after: function () {
                    return qe(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (T.cleanData(be(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function () {
                        return T.clone(this, e, t)
                    }))
                },
                html: function (e) {
                    return z(this, (function (e) {
                        var t = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !Ne.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = T.htmlPrefilter(e);
                            try {
                                for (; i < n; i++)
                                    1 === (t = this[i] || {}).nodeType && (T.cleanData(be(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) { }
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = [];
                    return qe(this, arguments, (function (t) {
                        var i = this.parentNode;
                        T.inArray(this, e) < 0 && (T.cleanData(be(this)), i && i.replaceChild(t, this))
                    }), e)
                }
            }),
            T.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function (e, t) {
                T.fn[e] = function (e) {
                    for (var i, n = [], o = T(e), r = o.length - 1, s = 0; s <= r; s++)
                        i = s === r ? this : this.clone(!0),
                            T(o[s])[t](i),
                            d.apply(n, i.get());
                    return this.pushStack(n)
                }
            }));
        var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            We = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = i), t.getComputedStyle(e)
            },
            Re = function (e, t, i) {
                var n,
                    o,
                    r = {};
                for (o in t)
                    r[o] = e.style[o],
                        e.style[o] = t[o];
                for (o in n = i.call(e), t)
                    e.style[o] = r[o];
                return n
            },
            ze = new RegExp(oe.join("|"), "i");
        function Ve(e, t, i) {
            var n,
                o,
                r,
                s,
                a = e.style;
            return (i = i || We(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || se(e) || (s = T.style(e, t)), !m.pixelBoxStyles() && Be.test(s) && ze.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }
        function Ue(e, t) {
            return {
                get: function () {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function () {
            function e() {
                if (c) {
                    d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        re.appendChild(d).appendChild(c);
                    var e = i.getComputedStyle(c);
                    n = "1%" !== e.top,
                        l = 12 === t(e.marginLeft),
                        c.style.right = "60%",
                        s = 36 === t(e.right),
                        o = 36 === t(e.width),
                        c.style.position = "absolute",
                        r = 12 === t(c.offsetWidth / 3),
                        re.removeChild(d),
                        c = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var n,
                o,
                r,
                s,
                a,
                l,
                d = b.createElement("div"),
                c = b.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(m, {
                boxSizingReliable: function () {
                    return e(), o
                },
                pixelBoxStyles: function () {
                    return e(), s
                },
                pixelPosition: function () {
                    return e(), n
                },
                reliableMarginLeft: function () {
                    return e(), l
                },
                scrollboxSize: function () {
                    return e(), r
                },
                reliableTrDimensions: function () {
                    var e,
                        t,
                        n,
                        o;
                    return null == a && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), o = i.getComputedStyle(t), a = parseInt(o.height) > 3, re.removeChild(e)), a
                }
            }))
        }();
        var Ye = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Qe = {};
        function Ke(e) {
            var t = T.cssProps[e] || Qe[e];
            return t || (e in Xe ? e : Qe[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), i = Ye.length; i--;)
                    if ((e = Ye[i] + t) in Xe)
                        return e
            }(e) || e)
        }
        var Ge = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Ze = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            et = {
                letterSpacing: "0",
                fontWeight: "400"
            };
        function tt(e, t, i) {
            var n = ne.exec(t);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
        }
        function it(e, t, i, n, o, r) {
            var s = "width" === t ? 1 : 0,
                a = 0,
                l = 0;
            if (i === (n ? "border" : "content"))
                return 0;
            for (; s < 4; s += 2)
                "margin" === i && (l += T.css(e, i + oe[s], !0, o)),
                    n ? ("content" === i && (l -= T.css(e, "padding" + oe[s], !0, o)), "margin" !== i && (l -= T.css(e, "border" + oe[s] + "Width", !0, o))) : (l += T.css(e, "padding" + oe[s], !0, o), "padding" !== i ? l += T.css(e, "border" + oe[s] + "Width", !0, o) : a += T.css(e, "border" + oe[s] + "Width", !0, o));
            return !n && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
        }
        function nt(e, t, i) {
            var n = We(e),
                o = (!m.boxSizingReliable() || i) && "border-box" === T.css(e, "boxSizing", !1, n),
                r = o,
                s = Ve(e, t, n),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Be.test(s)) {
                if (!i)
                    return s;
                s = "auto"
            }
            return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, n)) && e.getClientRects().length && (o = "border-box" === T.css(e, "boxSizing", !1, n), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + it(e, t, i || (o ? "border" : "content"), r, n, s) + "px"
        }
        function ot(e, t, i, n, o) {
            return new ot.prototype.init(e, t, i, n, o)
        }
        T.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var i = Ve(e, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, i, n) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o,
                        r,
                        s,
                        a = X(t),
                        l = Je.test(t),
                        d = e.style;
                    if (l || (t = Ke(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === i)
                        return s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : d[t];
                    "string" === (r = typeof i) && (o = ne.exec(i)) && o[1] && (i = de(e, t, o), r = "number"),
                        null != i && i == i && ("number" !== r || l || (i += o && o[3] || (T.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))
                }
            },
            css: function (e, t, i, n) {
                var o,
                    r,
                    s,
                    a = X(t);
                return Je.test(t) || (t = Ke(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (o = s.get(e, !0, i)), void 0 === o && (o = Ve(e, t, n)), "normal" === o && t in et && (o = et[t]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
            }
        }),
            T.each(["height", "width"], (function (e, t) {
                T.cssHooks[t] = {
                    get: function (e, i, n) {
                        if (i)
                            return !Ge.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, n) : Re(e, Ze, (function () {
                                return nt(e, t, n)
                            }))
                    },
                    set: function (e, i, n) {
                        var o,
                            r = We(e),
                            s = !m.scrollboxSize() && "absolute" === r.position,
                            a = (s || n) && "border-box" === T.css(e, "boxSizing", !1, r),
                            l = n ? it(e, t, n, a, r) : 0;
                        return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - it(e, t, "border", !1, r) - .5)), l && (o = ne.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = T.css(e, t)), tt(0, i, l)
                    }
                }
            })),
            T.cssHooks.marginLeft = Ue(m.reliableMarginLeft, (function (e, t) {
                if (t)
                    return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
                        marginLeft: 0
                    }, (function () {
                        return e.getBoundingClientRect().left
                    }))) + "px"
            })),
            T.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function (e, t) {
                T.cssHooks[e + t] = {
                    expand: function (i) {
                        for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                            o[e + oe[n] + t] = r[n] || r[n - 2] || r[0];
                        return o
                    }
                },
                    "margin" !== e && (T.cssHooks[e + t].set = tt)
            })),
            T.fn.extend({
                css: function (e, t) {
                    return z(this, (function (e, t, i) {
                        var n,
                            o,
                            r = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (n = We(e), o = t.length; s < o; s++)
                                r[t[s]] = T.css(e, t[s], !1, n);
                            return r
                        }
                        return void 0 !== i ? T.style(e, t, i) : T.css(e, t)
                    }), e, t, arguments.length > 1)
                }
            }),
            T.Tween = ot,
            ot.prototype = {
                constructor: ot,
                init: function (e, t, i, n, o, r) {
                    this.elem = e,
                        this.prop = i,
                        this.easing = o || T.easing._default,
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = n,
                        this.unit = r || (T.cssNumber[i] ? "" : "px")
                },
                cur: function () {
                    var e = ot.propHooks[this.prop];
                    return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
                },
                run: function (e) {
                    var t,
                        i = ot.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ot.propHooks._default.set(this), this
                }
            },
            ot.prototype.init.prototype = ot.prototype,
            ot.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function (e) {
                        T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            T.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            T.fx = ot.prototype.init,
            T.fx.step = {};
        var rt,
            st,
            at = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;
        function dt() {
            st && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(dt) : i.setTimeout(dt, T.fx.interval), T.fx.tick())
        }
        function ct() {
            return i.setTimeout((function () {
                rt = void 0
            })), rt = Date.now()
        }
        function ut(e, t) {
            var i,
                n = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; n < 4; n += 2 - t)
                o["margin" + (i = oe[n])] = o["padding" + i] = e;
            return t && (o.opacity = o.width = e), o
        }
        function ft(e, t, i) {
            for (var n, o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (n = o[r].call(i, t, e))
                    return n
        }
        function ht(e, t, i) {
            var n,
                o,
                r = 0,
                s = ht.prefilters.length,
                a = T.Deferred().always((function () {
                    delete l.elem
                })),
                l = function () {
                    if (o)
                        return !1;
                    for (var t = rt || ct(), i = Math.max(0, d.startTime + d.duration - t), n = 1 - (i / d.duration || 0), r = 0, s = d.tweens.length; r < s; r++)
                        d.tweens[r].run(n);
                    return a.notifyWith(e, [d, n, i]), n < 1 && s ? i : (s || a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d]), !1)
                },
                d = a.promise({
                    elem: e,
                    props: T.extend({}, t),
                    opts: T.extend(!0, {
                        specialEasing: {},
                        easing: T.easing._default
                    }, i),
                    originalProperties: t,
                    originalOptions: i,
                    startTime: rt || ct(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (t, i) {
                        var n = T.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(n), n
                    },
                    stop: function (t) {
                        var i = 0,
                            n = t ? d.tweens.length : 0;
                        if (o)
                            return this;
                        for (o = !0; i < n; i++)
                            d.tweens[i].run(1);
                        return t ? (a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d, t])) : a.rejectWith(e, [d, t]), this
                    }
                }),
                c = d.props;
            for (!function (e, t) {
                var i,
                    n,
                    o,
                    r,
                    s;
                for (i in e)
                    if (o = t[n = X(i)], r = e[i], Array.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (s = T.cssHooks[n]) && "expand" in s)
                        for (i in r = s.expand(r), delete e[n], r)
                            i in e || (e[i] = r[i], t[i] = o);
                    else
                        t[n] = o
            }(c, d.opts.specialEasing); r < s; r++)
                if (n = ht.prefilters[r].call(d, e, c, d.opts))
                    return v(n.stop) && (T._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)), n;
            return T.map(c, ft, d), v(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), T.fx.timer(T.extend(l, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d
        }
        T.Animation = T.extend(ht, {
            tweeners: {
                "*": [function (e, t) {
                    var i = this.createTween(e, t);
                    return de(i.elem, e, ne.exec(t), i), i
                }]
            },
            tweener: function (e, t) {
                v(e) ? (t = e, e = ["*"]) : e = e.match(I);
                for (var i, n = 0, o = e.length; n < o; n++)
                    i = e[n],
                        ht.tweeners[i] = ht.tweeners[i] || [],
                        ht.tweeners[i].unshift(t)
            },
            prefilters: [function (e, t, i) {
                var n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    d,
                    c,
                    u = "width" in t || "height" in t,
                    f = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && le(e),
                    m = G.get(e, "fxshow");
                for (n in i.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, f.always((function () {
                    f.always((function () {
                        s.unqueued--,
                            T.queue(e, "fx").length || s.empty.fire()
                    }))
                }))), t)
                    if (o = t[n], at.test(o)) {
                        if (delete t[n], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                            if ("show" !== o || !m || void 0 === m[n])
                                continue;
                            g = !0
                        }
                        h[n] = m && m[n] || T.style(e, n)
                    }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
                    for (n in u && 1 === e.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (d = m && m.display) && (d = G.get(e, "display")), "none" === (c = T.css(e, "display")) && (d ? c = d : (fe([e], !0), d = e.style.display || d, c = T.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != d) && "none" === T.css(e, "float") && (l || (f.done((function () {
                        p.display = d
                    })), null == d && (c = p.display, d = "none" === c ? "" : c)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", f.always((function () {
                        p.overflow = i.overflow[0],
                            p.overflowX = i.overflow[1],
                            p.overflowY = i.overflow[2]
                    }))), l = !1, h)
                        l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(e, "fxshow", {
                            display: d
                        }), r && (m.hidden = !g), g && fe([e], !0), f.done((function () {
                            for (n in g || fe([e]), G.remove(e, "fxshow"), h)
                                T.style(e, n, h[n])
                        }))),
                            l = ft(g ? m[n] : 0, n, f),
                            n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function (e, t) {
                t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
            }
        }),
            T.speed = function (e, t, i) {
                var n = e && "object" == typeof e ? T.extend({}, e) : {
                    complete: i || !i && t || v(e) && e,
                    duration: e,
                    easing: i && t || t && !v(t) && t
                };
                return T.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in T.fx.speeds ? n.duration = T.fx.speeds[n.duration] : n.duration = T.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    v(n.old) && n.old.call(this),
                        n.queue && T.dequeue(this, n.queue)
                }, n
            },
            T.fn.extend({
                fadeTo: function (e, t, i, n) {
                    return this.filter(le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, i, n)
                },
                animate: function (e, t, i, n) {
                    var o = T.isEmptyObject(e),
                        r = T.speed(t, i, n),
                        s = function () {
                            var t = ht(this, T.extend({}, e), r);
                            (o || G.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function (e, t, i) {
                    var n = function (e) {
                        var t = e.stop;
                        delete e.stop,
                            t(i)
                    };
                    return "string" != typeof e && (i = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = T.timers,
                            s = G.get(this);
                        if (o)
                            s[o] && s[o].stop && n(s[o]);
                        else
                            for (o in s)
                                s[o] && s[o].stop && lt.test(o) && n(s[o]);
                        for (o = r.length; o--;)
                            r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i), t = !1, r.splice(o, 1));
                        !t && i || T.dequeue(this, e)
                    }))
                },
                finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each((function () {
                        var t,
                            i = G.get(this),
                            n = i[e + "queue"],
                            o = i[e + "queueHooks"],
                            r = T.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, T.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;)
                            r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < s; t++)
                            n[t] && n[t].finish && n[t].finish.call(this);
                        delete i.finish
                    }))
                }
            }),
            T.each(["toggle", "show", "hide"], (function (e, t) {
                var i = T.fn[t];
                T.fn[t] = function (e, n, o) {
                    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ut(t, !0), e, n, o)
                }
            })),
            T.each({
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function (e, t) {
                T.fn[e] = function (e, i, n) {
                    return this.animate(t, e, i, n)
                }
            })),
            T.timers = [],
            T.fx.tick = function () {
                var e,
                    t = 0,
                    i = T.timers;
                for (rt = Date.now(); t < i.length; t++)
                    (e = i[t])() || i[t] !== e || i.splice(t--, 1);
                i.length || T.fx.stop(),
                    rt = void 0
            },
            T.fx.timer = function (e) {
                T.timers.push(e),
                    T.fx.start()
            },
            T.fx.interval = 13,
            T.fx.start = function () {
                st || (st = !0, dt())
            },
            T.fx.stop = function () {
                st = null
            },
            T.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            T.fn.delay = function (e, t) {
                return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, n) {
                    var o = i.setTimeout(t, e);
                    n.stop = function () {
                        i.clearTimeout(o)
                    }
                }))
            },
            function () {
                var e = b.createElement("input"),
                    t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox",
                    m.checkOn = "" !== e.value,
                    m.optSelected = t.selected,
                    (e = b.createElement("input")).value = "t",
                    e.type = "radio",
                    m.radioValue = "t" === e.value
            }();
        var pt,
            gt = T.expr.attrHandle;
        T.fn.extend({
            attr: function (e, t) {
                return z(this, T.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each((function () {
                    T.removeAttr(this, e)
                }))
            }
        }),
            T.extend({
                attr: function (e, t, i) {
                    var n,
                        o,
                        r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return void 0 === e.getAttribute ? T.prop(e, t, i) : (1 === r && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? pt : void 0)), void 0 !== i ? null === i ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = T.find.attr(e, t)) ? void 0 : n)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!m.radioValue && "radio" === t && A(e, "input")) {
                                var i = e.value;
                                return e.setAttribute("type", t), i && (e.value = i), t
                            }
                        }
                    }
                },
                removeAttr: function (e, t) {
                    var i,
                        n = 0,
                        o = t && t.match(I);
                    if (o && 1 === e.nodeType)
                        for (; i = o[n++];)
                            e.removeAttribute(i)
                }
            }),
            pt = {
                set: function (e, t, i) {
                    return !1 === t ? T.removeAttr(e, i) : e.setAttribute(i, i), i
                }
            },
            T.each(T.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                var i = gt[t] || T.find.attr;
                gt[t] = function (e, t, n) {
                    var o,
                        r,
                        s = t.toLowerCase();
                    return n || (r = gt[s], gt[s] = o, o = null != i(e, t, n) ? s : null, gt[s] = r), o
                }
            }));
        var mt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;
        function yt(e) {
            return (e.match(I) || []).join(" ")
        }
        function bt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function wt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
        }
        T.fn.extend({
            prop: function (e, t) {
                return z(this, T.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return this.each((function () {
                    delete this[T.propFix[e] || e]
                }))
            }
        }),
            T.extend({
                prop: function (e, t, i) {
                    var n,
                        o,
                        r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return 1 === r && T.isXMLDoc(e) || (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = T.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            m.optSelected || (T.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                T.propFix[this.toLowerCase()] = this
            })),
            T.fn.extend({
                addClass: function (e) {
                    var t,
                        i,
                        n,
                        o,
                        r,
                        s,
                        a,
                        l = 0;
                    if (v(e))
                        return this.each((function (t) {
                            T(this).addClass(e.call(this, t, bt(this)))
                        }));
                    if ((t = wt(e)).length)
                        for (; i = this[l++];)
                            if (o = bt(i), n = 1 === i.nodeType && " " + yt(o) + " ") {
                                for (s = 0; r = t[s++];)
                                    n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                o !== (a = yt(n)) && i.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t,
                        i,
                        n,
                        o,
                        r,
                        s,
                        a,
                        l = 0;
                    if (v(e))
                        return this.each((function (t) {
                            T(this).removeClass(e.call(this, t, bt(this)))
                        }));
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ((t = wt(e)).length)
                        for (; i = this[l++];)
                            if (o = bt(i), n = 1 === i.nodeType && " " + yt(o) + " ") {
                                for (s = 0; r = t[s++];)
                                    for (; n.indexOf(" " + r + " ") > -1;)
                                        n = n.replace(" " + r + " ", " ");
                                o !== (a = yt(n)) && i.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var i = typeof e,
                        n = "string" === i || Array.isArray(e);
                    return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function (i) {
                        T(this).toggleClass(e.call(this, i, bt(this), t), t)
                    })) : this.each((function () {
                        var t,
                            o,
                            r,
                            s;
                        if (n)
                            for (o = 0, r = T(this), s = wt(e); t = s[o++];)
                                r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else
                            void 0 !== e && "boolean" !== i || ((t = bt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
                    }))
                },
                hasClass: function (e) {
                    var t,
                        i,
                        n = 0;
                    for (t = " " + e + " "; i = this[n++];)
                        if (1 === i.nodeType && (" " + yt(bt(i)) + " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
        var _t = /\r/g;
        T.fn.extend({
            val: function (e) {
                var t,
                    i,
                    n,
                    o = this[0];
                return arguments.length ? (n = v(e), this.each((function (i) {
                    var o;
                    1 === this.nodeType && (null == (o = n ? e.call(this, i, T(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, (function (e) {
                        return null == e ? "" : e + ""
                    }))), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                }))) : o ? (t = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : "string" == typeof (i = o.value) ? i.replace(_t, "") : null == i ? "" : i : void 0
            }
        }),
            T.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = T.find.attr(e, "value");
                            return null != t ? t : yt(T.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            var t,
                                i,
                                n,
                                o = e.options,
                                r = e.selectedIndex,
                                s = "select-one" === e.type,
                                a = s ? null : [],
                                l = s ? r + 1 : o.length;
                            for (n = r < 0 ? l : s ? r : 0; n < l; n++)
                                if (((i = o[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))) {
                                    if (t = T(i).val(), s)
                                        return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function (e, t) {
                            for (var i, n, o = e.options, r = T.makeArray(t), s = o.length; s--;)
                                ((n = o[s]).selected = T.inArray(T.valHooks.option.get(n), r) > -1) && (i = !0);
                            return i || (e.selectedIndex = -1), r
                        }
                    }
                }
            }),
            T.each(["radio", "checkbox"], (function () {
                T.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t))
                            return e.checked = T.inArray(T(e).val(), t) > -1
                    }
                },
                    m.checkOn || (T.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
            })),
            m.focusin = "onfocusin" in i;
        var kt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
                e.stopPropagation()
            };
        T.extend(T.event, {
            trigger: function (e, t, n, o) {
                var r,
                    s,
                    a,
                    l,
                    d,
                    c,
                    u,
                    f,
                    p = [n || b],
                    g = h.call(e, "type") ? e.type : e,
                    m = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = f = a = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !kt.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), d = g.indexOf(":") < 0 && "on" + g, (e = e[T.expando] ? e : new T.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), u = T.event.special[g] || {}, o || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                    if (!o && !u.noBubble && !y(n)) {
                        for (l = u.delegateType || g, kt.test(l + g) || (s = s.parentNode); s; s = s.parentNode)
                            p.push(s),
                                a = s;
                        a === (n.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || i)
                    }
                    for (r = 0; (s = p[r++]) && !e.isPropagationStopped();)
                        f = s,
                            e.type = r > 1 ? l : u.bindType || g,
                            (c = (G.get(s, "events") || Object.create(null))[e.type] && G.get(s, "handle")) && c.apply(s, t),
                            (c = d && s[d]) && c.apply && Q(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = g, o || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), t) || !Q(n) || d && v(n[g]) && !y(n) && ((a = n[d]) && (n[d] = null), T.event.triggered = g, e.isPropagationStopped() && f.addEventListener(g, Tt), n[g](), e.isPropagationStopped() && f.removeEventListener(g, Tt), T.event.triggered = void 0, a && (n[d] = a)), e.result
                }
            },
            simulate: function (e, t, i) {
                var n = T.extend(new T.Event, i, {
                    type: e,
                    isSimulated: !0
                });
                T.event.trigger(n, null, t)
            }
        }),
            T.fn.extend({
                trigger: function (e, t) {
                    return this.each((function () {
                        T.event.trigger(e, t, this)
                    }))
                },
                triggerHandler: function (e, t) {
                    var i = this[0];
                    if (i)
                        return T.event.trigger(e, t, i, !0)
                }
            }),
            m.focusin || T.each({
                focus: "focusin",
                blur: "focusout"
            }, (function (e, t) {
                var i = function (e) {
                    T.event.simulate(t, e.target, T.event.fix(e))
                };
                T.event.special[t] = {
                    setup: function () {
                        var n = this.ownerDocument || this.document || this,
                            o = G.access(n, t);
                        o || n.addEventListener(e, i, !0),
                            G.access(n, t, (o || 0) + 1)
                    },
                    teardown: function () {
                        var n = this.ownerDocument || this.document || this,
                            o = G.access(n, t) - 1;
                        o ? G.access(n, t, o) : (n.removeEventListener(e, i, !0), G.remove(n, t))
                    }
                }
            }));
        var xt = i.location,
            Ct = {
                guid: Date.now()
            },
            St = /\?/;
        T.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new i.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
        };
        var Et = /\[\]$/,
            Dt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;
        function Nt(e, t, i, n) {
            var o;
            if (Array.isArray(t))
                T.each(t, (function (t, o) {
                    i || Et.test(e) ? n(e, o) : Nt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
                }));
            else if (i || "object" !== k(t))
                n(e, t);
            else
                for (o in t)
                    Nt(e + "[" + o + "]", t[o], i, n)
        }
        T.param = function (e, t) {
            var i,
                n = [],
                o = function (e, t) {
                    var i = v(t) ? t() : t;
                    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (null == e)
                return "";
            if (Array.isArray(e) || e.jquery && !T.isPlainObject(e))
                T.each(e, (function () {
                    o(this.name, this.value)
                }));
            else
                for (i in e)
                    Nt(i, e[i], t, o);
            return n.join("&")
        },
            T.fn.extend({
                serialize: function () {
                    return T.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map((function () {
                        var e = T.prop(this, "elements");
                        return e ? T.makeArray(e) : this
                    })).filter((function () {
                        var e = this.type;
                        return this.name && !T(this).is(":disabled") && Ot.test(this.nodeName) && !At.test(e) && (this.checked || !ge.test(e))
                    })).map((function (e, t) {
                        var i = T(this).val();
                        return null == i ? null : Array.isArray(i) ? T.map(i, (function (e) {
                            return {
                                name: t.name,
                                value: e.replace(Dt, "\r\n")
                            }
                        })) : {
                            name: t.name,
                            value: i.replace(Dt, "\r\n")
                        }
                    })).get()
                }
            });
        var Lt = /%20/g,
            jt = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            Pt = {},
            qt = {},
            Ft = "*/".concat("*"),
            Bt = b.createElement("a");
        function Wt(e) {
            return function (t, i) {
                "string" != typeof t && (i = t, t = "*");
                var n,
                    o = 0,
                    r = t.toLowerCase().match(I) || [];
                if (v(i))
                    for (; n = r[o++];)
                        "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
            }
        }
        function Rt(e, t, i, n) {
            var o = {},
                r = e === qt;
            function s(a) {
                var l;
                return o[a] = !0, T.each(e[a] || [], (function (e, a) {
                    var d = a(t, i, n);
                    return "string" != typeof d || r || o[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d), s(d), !1)
                })), l
            }
            return s(t.dataTypes[0]) || !o["*"] && s("*")
        }
        function zt(e, t) {
            var i,
                n,
                o = T.ajaxSettings.flatOptions || {};
            for (i in t)
                void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && T.extend(!0, e, n), e
        }
        Bt.href = xt.href,
            T.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: xt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ft,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": T.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? zt(zt(e, T.ajaxSettings), t) : zt(T.ajaxSettings, e)
                },
                ajaxPrefilter: Wt(Pt),
                ajaxTransport: Wt(qt),
                ajax: function (e, t) {
                    "object" == typeof e && (t = e, e = void 0),
                        t = t || {};
                    var n,
                        o,
                        r,
                        s,
                        a,
                        l,
                        d,
                        c,
                        u,
                        f,
                        h = T.ajaxSetup({}, t),
                        p = h.context || h,
                        g = h.context && (p.nodeType || p.jquery) ? T(p) : T.event,
                        m = T.Deferred(),
                        v = T.Callbacks("once memory"),
                        y = h.statusCode || {},
                        w = {},
                        _ = {},
                        k = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (d) {
                                    if (!s)
                                        for (s = {}; t = $t.exec(r);)
                                            s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = s[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function () {
                                return d ? r : null
                            },
                            setRequestHeader: function (e, t) {
                                return null == d && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, w[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return null == d && (h.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (d)
                                        x.always(e[x.status]);
                                    else
                                        for (t in e)
                                            y[t] = [y[t], e[t]];
                                return this
                            },
                            abort: function (e) {
                                var t = e || k;
                                return n && n.abort(t), C(0, t), this
                            }
                        };
                    if (m.promise(x), h.url = ((e || h.url || xt.href) + "").replace(It, xt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
                        l = b.createElement("a");
                        try {
                            l.href = h.url,
                                l.href = l.href,
                                h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Rt(Pt, h, t, x), d)
                        return x;
                    for (u in (c = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), o = h.url.replace(jt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (f = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (St.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Mt, "$1"), f = (St.test(o) ? "&" : "?") + "_=" + Ct.guid++ + f), h.url = o + f), h.ifModified && (T.lastModified[o] && x.setRequestHeader("If-Modified-Since", T.lastModified[o]), T.etag[o] && x.setRequestHeader("If-None-Match", T.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]), h.headers)
                        x.setRequestHeader(u, h.headers[u]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(p, x, h) || d))
                        return x.abort();
                    if (k = "abort", v.add(h.complete), x.done(h.success), x.fail(h.error), n = Rt(qt, h, t, x)) {
                        if (x.readyState = 1, c && g.trigger("ajaxSend", [x, h]), d)
                            return x;
                        h.async && h.timeout > 0 && (a = i.setTimeout((function () {
                            x.abort("timeout")
                        }), h.timeout));
                        try {
                            d = !1,
                                n.send(w, C)
                        } catch (e) {
                            if (d)
                                throw e;
                            C(-1, e)
                        }
                    } else
                        C(-1, "No Transport");
                    function C(e, t, s, l) {
                        var u,
                            f,
                            b,
                            w,
                            _,
                            k = t;
                        d || (d = !0, a && i.clearTimeout(a), n = void 0, r = l || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (w = function (e, t, i) {
                            for (var n, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];)
                                l.shift(),
                                    void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (n)
                                for (o in a)
                                    if (a[o] && a[o].test(n)) {
                                        l.unshift(o);
                                        break
                                    }
                            if (l[0] in i)
                                r = l[0];
                            else {
                                for (o in i) {
                                    if (!l[0] || e.converters[o + " " + l[0]]) {
                                        r = o;
                                        break
                                    }
                                    s || (s = o)
                                }
                                r = r || s
                            }
                            if (r)
                                return r !== l[0] && l.unshift(r), i[r]
                        }(h, x, s)), !u && T.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () { }), w = function (e, t, i, n) {
                            var o,
                                r,
                                s,
                                a,
                                l,
                                d = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (s in e.converters)
                                    d[s.toLowerCase()] = e.converters[s];
                            for (r = c.shift(); r;)
                                if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                                    if ("*" === r)
                                        r = l;
                                    else if ("*" !== l && l !== r) {
                                        if (!(s = d[l + " " + r] || d["* " + r]))
                                            for (o in d)
                                                if ((a = o.split(" "))[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
                                                    !0 === s ? s = d[o] : !0 !== d[o] && (r = a[0], c.unshift(a[1]));
                                                    break
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws)
                                                t = s(t);
                                            else
                                                try {
                                                    t = s(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: s ? e : "No conversion from " + l + " to " + r
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(h, w, x, u), u ? (h.ifModified && ((_ = x.getResponseHeader("Last-Modified")) && (T.lastModified[o] = _), (_ = x.getResponseHeader("etag")) && (T.etag[o] = _)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, f = w.data, u = !(b = w.error))) : (b = k, !e && k || (k = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || k) + "", u ? m.resolveWith(p, [f, k, x]) : m.rejectWith(p, [x, k, b]), x.statusCode(y), y = void 0, c && g.trigger(u ? "ajaxSuccess" : "ajaxError", [x, h, u ? f : b]), v.fireWith(p, [x, k]), c && (g.trigger("ajaxComplete", [x, h]), --T.active || T.event.trigger("ajaxStop")))
                    }
                    return x
                },
                getJSON: function (e, t, i) {
                    return T.get(e, t, i, "json")
                },
                getScript: function (e, t) {
                    return T.get(e, void 0, t, "script")
                }
            }),
            T.each(["get", "post"], (function (e, t) {
                T[t] = function (e, i, n, o) {
                    return v(i) && (o = o || n, n = i, i = void 0), T.ajax(T.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: i,
                        success: n
                    }, T.isPlainObject(e) && e))
                }
            })),
            T.ajaxPrefilter((function (e) {
                var t;
                for (t in e.headers)
                    "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            })),
            T._evalUrl = function (e, t, i) {
                return T.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () { }
                    },
                    dataFilter: function (e) {
                        T.globalEval(e, t, i)
                    }
                })
            },
            T.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                        for (var e = this; e.firstElementChild;)
                            e = e.firstElementChild;
                        return e
                    })).append(this)), this
                },
                wrapInner: function (e) {
                    return v(e) ? this.each((function (t) {
                        T(this).wrapInner(e.call(this, t))
                    })) : this.each((function () {
                        var t = T(this),
                            i = t.contents();
                        i.length ? i.wrapAll(e) : t.append(e)
                    }))
                },
                wrap: function (e) {
                    var t = v(e);
                    return this.each((function (i) {
                        T(this).wrapAll(t ? e.call(this, i) : e)
                    }))
                },
                unwrap: function (e) {
                    return this.parent(e).not("body").each((function () {
                        T(this).replaceWith(this.childNodes)
                    })), this
                }
            }),
            T.expr.pseudos.hidden = function (e) {
                return !T.expr.pseudos.visible(e)
            },
            T.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            },
            T.ajaxSettings.xhr = function () {
                try {
                    return new i.XMLHttpRequest
                } catch (e) { }
            };
        var Vt = {
            0: 200,
            1223: 204
        },
            Ut = T.ajaxSettings.xhr();
        m.cors = !!Ut && "withCredentials" in Ut,
            m.ajax = Ut = !!Ut,
            T.ajaxTransport((function (e) {
                var t,
                    n;
                if (m.cors || Ut && !e.crossDomain)
                    return {
                        send: function (o, r) {
                            var s,
                                a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (s in e.xhrFields)
                                    a[s] = e.xhrFields[s];
                            for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)
                                a.setRequestHeader(s, o[s]);
                            t = function (e) {
                                return function () {
                                    t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Vt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders()))
                                }
                            },
                                a.onload = t(),
                                n = a.onerror = a.ontimeout = t("error"),
                                void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                                    4 === a.readyState && i.setTimeout((function () {
                                        t && n()
                                    }))
                                },
                                t = t("abort");
                            try {
                                a.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t)
                                    throw e
                            }
                        },
                        abort: function () {
                            t && t()
                        }
                    }
            })),
            T.ajaxPrefilter((function (e) {
                e.crossDomain && (e.contents.script = !1)
            })),
            T.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return T.globalEval(e), e
                    }
                }
            }),
            T.ajaxPrefilter("script", (function (e) {
                void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET")
            })),
            T.ajaxTransport("script", (function (e) {
                var t,
                    i;
                if (e.crossDomain || e.scriptAttrs)
                    return {
                        send: function (n, o) {
                            t = T("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", i = function (e) {
                                t.remove(),
                                    i = null,
                                    e && o("error" === e.type ? 404 : 200, e.type)
                            }),
                                b.head.appendChild(t[0])
                        },
                        abort: function () {
                            i && i()
                        }
                    }
            }));
        var Yt,
            Xt = [],
            Qt = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Xt.pop() || T.expando + "_" + Ct.guid++;
                return this[e] = !0, e
            }
        }),
            T.ajaxPrefilter("json jsonp", (function (e, t, n) {
                var o,
                    r,
                    s,
                    a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0])
                    return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Qt, "$1" + o) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                        return s || T.error(o + " was not called"), s[0]
                    }, e.dataTypes[0] = "json", r = i[o], i[o] = function () {
                        s = arguments
                    }, n.always((function () {
                        void 0 === r ? T(i).removeProp(o) : i[o] = r,
                            e[o] && (e.jsonpCallback = t.jsonpCallback, Xt.push(o)),
                            s && v(r) && r(s[0]),
                            s = r = void 0
                    })), "script"
            })),
            m.createHTMLDocument = ((Yt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length),
            T.parseHTML = function (e, t, i) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (m.createHTMLDocument ? ((n = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(n)) : t = b), r = !i && [], (o = O.exec(e)) ? [t.createElement(o[1])] : (o = ke([e], t, r), r && r.length && T(r).remove(), T.merge([], o.childNodes)));
                var n,
                    o,
                    r
            },
            T.fn.load = function (e, t, i) {
                var n,
                    o,
                    r,
                    s = this,
                    a = e.indexOf(" ");
                return a > -1 && (n = yt(e.slice(a)), e = e.slice(0, a)), v(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && T.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done((function (e) {
                    r = arguments,
                        s.html(n ? T("<div>").append(T.parseHTML(e)).find(n) : e)
                })).always(i && function (e, t) {
                    s.each((function () {
                        i.apply(this, r || [e.responseText, t, e])
                    }))
                }), this
            },
            T.expr.pseudos.animated = function (e) {
                return T.grep(T.timers, (function (t) {
                    return e === t.elem
                })).length
            },
            T.offset = {
                setOffset: function (e, t, i) {
                    var n,
                        o,
                        r,
                        s,
                        a,
                        l,
                        d = T.css(e, "position"),
                        c = T(e),
                        u = {};
                    "static" === d && (e.style.position = "relative"),
                        a = c.offset(),
                        r = T.css(e, "top"),
                        l = T.css(e, "left"),
                        ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1 ? (s = (n = c.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0),
                        v(t) && (t = t.call(e, i, T.extend({}, a))),
                        null != t.top && (u.top = t.top - a.top + s),
                        null != t.left && (u.left = t.left - a.left + o),
                        "using" in t ? t.using.call(e, u) : ("number" == typeof u.top && (u.top += "px"), "number" == typeof u.left && (u.left += "px"), c.css(u))
                }
            },
            T.fn.extend({
                offset: function (e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each((function (t) {
                            T.offset.setOffset(this, e, t)
                        }));
                    var t,
                        i,
                        n = this[0];
                    return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                        top: t.top + i.pageYOffset,
                        left: t.left + i.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var e,
                            t,
                            i,
                            n = this[0],
                            o = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === T.css(n, "position"))
                            t = n.getBoundingClientRect();
                        else {
                            for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === T.css(e, "position");)
                                e = e.parentNode;
                            e && e !== n && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), o.left += T.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - o.top - T.css(n, "marginTop", !0),
                            left: t.left - o.left - T.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map((function () {
                        for (var e = this.offsetParent; e && "static" === T.css(e, "position");)
                            e = e.offsetParent;
                        return e || re
                    }))
                }
            }),
            T.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function (e, t) {
                var i = "pageYOffset" === t;
                T.fn[e] = function (n) {
                    return z(this, (function (e, n, o) {
                        var r;
                        if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o)
                            return r ? r[t] : e[n];
                        r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : e[n] = o
                    }), e, n, arguments.length)
                }
            })),
            T.each(["top", "left"], (function (e, t) {
                T.cssHooks[t] = Ue(m.pixelPosition, (function (e, i) {
                    if (i)
                        return i = Ve(e, t), Be.test(i) ? T(e).position()[t] + "px" : i
                }))
            })),
            T.each({
                Height: "height",
                Width: "width"
            }, (function (e, t) {
                T.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function (i, n) {
                    T.fn[n] = function (o, r) {
                        var s = arguments.length && (i || "boolean" != typeof o),
                            a = i || (!0 === o || !0 === r ? "margin" : "border");
                        return z(this, (function (t, i, o) {
                            var r;
                            return y(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? T.css(t, i, a) : T.style(t, i, o, a)
                        }), t, s ? o : void 0, s)
                    }
                }))
            })),
            T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                T.fn[t] = function (e) {
                    return this.on(t, e)
                }
            })),
            T.fn.extend({
                bind: function (e, t, i) {
                    return this.on(e, null, t, i)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, i, n) {
                    return this.on(t, e, i, n)
                },
                undelegate: function (e, t, i) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                T.fn[t] = function (e, i) {
                    return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
                }
            }));
        var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        T.proxy = function (e, t) {
            var i,
                n,
                o;
            if ("string" == typeof t && (i = e[t], t = e, e = i), v(e))
                return n = a.call(arguments, 2), (o = function () {
                    return e.apply(t || this, n.concat(a.call(arguments)))
                }).guid = e.guid = e.guid || T.guid++, o
        },
            T.holdReady = function (e) {
                e ? T.readyWait++ : T.ready(!0)
            },
            T.isArray = Array.isArray,
            T.parseJSON = JSON.parse,
            T.nodeName = A,
            T.isFunction = v,
            T.isWindow = y,
            T.camelCase = X,
            T.type = k,
            T.now = Date.now,
            T.isNumeric = function (e) {
                var t = T.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            T.trim = function (e) {
                return null == e ? "" : (e + "").replace(Kt, "")
            },
            void 0 === (n = function () {
                return T
            }.apply(t, [])) || (e.exports = n);
        var Gt = i.jQuery,
            Jt = i.$;
        return T.noConflict = function (e) {
            return i.$ === T && (i.$ = Jt), e && i.jQuery === T && (i.jQuery = Gt), T
        }, void 0 === o && (i.jQuery = i.$ = T), T
    }))
}, function (e, t, i) {
    e.exports = function (e) {
        function t(n) {
            if (i[n])
                return i[n].exports;
            var o = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var i = {};
        return t.m = e, t.c = i, t.p = "dist/", t(0)
    }([function (e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        },
            r = (n(i(1)), i(6)),
            s = n(r),
            a = n(i(7)),
            l = n(i(8)),
            d = n(i(9)),
            c = n(i(10)),
            u = n(i(11)),
            f = n(i(14)),
            h = [],
            p = !1,
            g = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            },
            m = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (p = !0), p)
                    return h = (0, u.default)(h, g), (0, c.default)(h, g.once), h
            },
            v = function () {
                h = (0, f.default)(),
                    m()
            };
        e.exports = {
            init: function (e) {
                g = o(g, e),
                    h = (0, f.default)();
                var t = document.all && !window.atob;
                return function (e) {
                    return !0 === e || "mobile" === e && d.default.mobile() || "phone" === e && d.default.phone() || "tablet" === e && d.default.tablet() || "function" == typeof e && !0 === e()
                }(g.disable) || t ? void h.forEach((function (e, t) {
                    e.node.removeAttribute("data-aos"),
                        e.node.removeAttribute("data-aos-easing"),
                        e.node.removeAttribute("data-aos-duration"),
                        e.node.removeAttribute("data-aos-delay")
                })) : (g.disableMutationObserver || l.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), g.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? m(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, (function () {
                    m(!0)
                })) : document.addEventListener(g.startEvent, (function () {
                    m(!0)
                })), window.addEventListener("resize", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("scroll", (0, s.default)((function () {
                    (0, c.default)(h, g.once)
                }), g.throttleDelay)), g.disableMutationObserver || l.default.ready("[data-aos]", v), h)
            },
            refresh: m,
            refreshHard: v
        }
    }, function (e, t) { }, , , , , function (e, t) {
        (function (t) {
            "use strict";
            function i(e, t, i) {
                function o(t) {
                    var i = f,
                        n = h;
                    return f = h = void 0, y = t, g = e.apply(n, i)
                }
                function s(e) {
                    return y = e, m = setTimeout(d, t), k ? o(e) : g
                }
                function l(e) {
                    var i = e - v;
                    return void 0 === v || i >= t || i < 0 || T && e - y >= p
                }
                function d() {
                    var e = _();
                    return l(e) ? c(e) : void (m = setTimeout(d, function (e) {
                        var i = t - (e - v);
                        return T ? w(i, p - (e - y)) : i
                    }(e)))
                }
                function c(e) {
                    return m = void 0, x && f ? o(e) : (f = h = void 0, g)
                }
                function u() {
                    var e = _(),
                        i = l(e);
                    if (f = arguments, h = this, v = e, i) {
                        if (void 0 === m)
                            return s(v);
                        if (T)
                            return m = setTimeout(d, t), o(v)
                    }
                    return void 0 === m && (m = setTimeout(d, t)), g
                }
                var f,
                    h,
                    p,
                    g,
                    m,
                    v,
                    y = 0,
                    k = !1,
                    T = !1,
                    x = !0;
                if ("function" != typeof e)
                    throw new TypeError(a);
                return t = r(t) || 0, n(i) && (k = !!i.leading, p = (T = "maxWait" in i) ? b(r(i.maxWait) || 0, t) : p, x = "trailing" in i ? !!i.trailing : x), u.cancel = function () {
                    void 0 !== m && clearTimeout(m),
                        y = 0,
                        f = v = h = m = void 0
                }, u.flush = function () {
                    return void 0 === m ? g : c(_())
                }, u
            }
            function n(e) {
                var t = void 0 === e ? "undefined" : s(e);
                return !!e && ("object" == t || "function" == t)
            }
            function o(e) {
                return "symbol" == (void 0 === e ? "undefined" : s(e)) || function (e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : s(e))
                }(e) && y.call(e) == d
            }
            function r(e) {
                if ("number" == typeof e)
                    return e;
                if (o(e))
                    return l;
                if (n(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = n(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(c, "");
                var i = f.test(e);
                return i || h.test(e) ? p(e.slice(2), i ? 2 : 8) : u.test(e) ? l : +e
            }
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
                a = "Expected a function",
                l = NaN,
                d = "[object Symbol]",
                c = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                f = /^0b[01]+$/i,
                h = /^0o[0-7]+$/i,
                p = parseInt,
                g = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
                m = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                v = g || m || Function("return this")(),
                y = Object.prototype.toString,
                b = Math.max,
                w = Math.min,
                _ = function () {
                    return v.Date.now()
                };
            e.exports = function (e, t, o) {
                var r = !0,
                    s = !0;
                if ("function" != typeof e)
                    throw new TypeError(a);
                return n(o) && (r = "leading" in o ? !!o.leading : r, s = "trailing" in o ? !!o.trailing : s), i(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: s
                })
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        (function (t) {
            "use strict";
            function i(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return !!e && ("object" == t || "function" == t)
            }
            function n(e) {
                return "symbol" == (void 0 === e ? "undefined" : r(e)) || function (e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : r(e))
                }(e) && v.call(e) == l
            }
            function o(e) {
                if ("number" == typeof e)
                    return e;
                if (n(e))
                    return a;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(d, "");
                var o = u.test(e);
                return o || f.test(e) ? h(e.slice(2), o ? 2 : 8) : c.test(e) ? a : +e
            }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
                s = "Expected a function",
                a = NaN,
                l = "[object Symbol]",
                d = /^\s+|\s+$/g,
                c = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                h = parseInt,
                p = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                g = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                m = p || g || Function("return this")(),
                v = Object.prototype.toString,
                y = Math.max,
                b = Math.min,
                w = function () {
                    return m.Date.now()
                };
            e.exports = function (e, t, n) {
                function r(t) {
                    var i = f,
                        n = h;
                    return f = h = void 0, _ = t, g = e.apply(n, i)
                }
                function a(e) {
                    return _ = e, m = setTimeout(d, t), k ? r(e) : g
                }
                function l(e) {
                    var i = e - v;
                    return void 0 === v || i >= t || i < 0 || T && e - _ >= p
                }
                function d() {
                    var e = w();
                    return l(e) ? c(e) : void (m = setTimeout(d, function (e) {
                        var i = t - (e - v);
                        return T ? b(i, p - (e - _)) : i
                    }(e)))
                }
                function c(e) {
                    return m = void 0, x && f ? r(e) : (f = h = void 0, g)
                }
                function u() {
                    var e = w(),
                        i = l(e);
                    if (f = arguments, h = this, v = e, i) {
                        if (void 0 === m)
                            return a(v);
                        if (T)
                            return m = setTimeout(d, t), r(v)
                    }
                    return void 0 === m && (m = setTimeout(d, t)), g
                }
                var f,
                    h,
                    p,
                    g,
                    m,
                    v,
                    _ = 0,
                    k = !1,
                    T = !1,
                    x = !0;
                if ("function" != typeof e)
                    throw new TypeError(s);
                return t = o(t) || 0, i(n) && (k = !!n.leading, p = (T = "maxWait" in n) ? y(o(n.maxWait) || 0, t) : p, x = "trailing" in n ? !!n.trailing : x), u.cancel = function () {
                    void 0 !== m && clearTimeout(m),
                        _ = 0,
                        f = v = h = m = void 0
                }, u.flush = function () {
                    return void 0 === m ? g : c(w())
                }, u
            }
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        "use strict";
        function i() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }
        function n(e) {
            e && e.forEach((function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    i = Array.prototype.slice.call(e.removedNodes);
                if (function e(t) {
                    var i = void 0,
                        n = void 0;
                    for (i = 0; i < t.length; i += 1) {
                        if ((n = t[i]).dataset && n.dataset.aos)
                            return !0;
                        if (n.children && e(n.children))
                            return !0
                    }
                    return !1
                }(t.concat(i)))
                    return o()
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function () { };
        t.default = {
            isSupported: function () {
                return !!i()
            },
            ready: function (e, t) {
                var r = window.document,
                    s = new (i())(n);
                o = t,
                    s.observe(r.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    })
            }
        }
    }, function (e, t) {
        "use strict";
        function i() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return n(e, [{
                    key: "phone",
                    value: function () {
                        var e = i();
                        return !(!o.test(e) && !r.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function () {
                        var e = i();
                        return !(!s.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function () {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new l
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e, t) {
                var i = window.pageYOffset,
                    n = window.innerHeight;
                e.forEach((function (e, o) {
                    !function (e, t, i) {
                        var n = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !i && "true" !== n) && e.node.classList.remove("aos-animate")
                    }(e, n + i, t)
                }))
            }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i(12));
        t.default = function (e, t) {
            return e.forEach((function (e, i) {
                e.node.classList.add("aos-init"),
                    e.position = (0, n.default)(e.node, t.offset)
            })), e
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i(13));
        t.default = function (e, t) {
            var i = 0,
                o = 0,
                r = window.innerHeight,
                s = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
            switch (s.offset && !isNaN(s.offset) && (o = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (e = document.querySelectorAll(s.anchor)[0]), i = (0, n.default)(e).top, s.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    i += e.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    i += e.offsetHeight;
                    break;
                case "top-center":
                    i += r / 2;
                    break;
                case "bottom-center":
                    i += r / 2 + e.offsetHeight;
                    break;
                case "center-center":
                    i += r / 2 + e.offsetHeight / 2;
                    break;
                case "top-top":
                    i += r;
                    break;
                case "bottom-top":
                    i += e.offsetHeight + r;
                    break;
                case "center-top":
                    i += e.offsetHeight / 2 + r
            }
            return s.anchorPlacement || s.offset || isNaN(t) || (o = t), i + o
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)
                    t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
                        i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
                        e = e.offsetParent;
                return {
                    top: i,
                    left: t
                }
            }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function (e) {
                    return {
                        node: e
                    }
                }))
            }
    }])
}, function (e, t, i) {
    i(9),
        e.exports = i(10)
}, function (e, t, i) {
    !function (e, t, i) {
        "use strict";
        function n(e) {
            return e && "object" == typeof e && "default" in e ? e : {
                default: e
            }
        }
        var o = n(t),
            r = n(i);
        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
        }
        function a(e, t, i) {
            return t && s(e.prototype, t), i && s(e, i), e
        }
        function l() {
            return (l = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }).apply(this, arguments)
        }
        function d(e) {
            var t = this,
                i = !1;
            return o.default(this).one(c.TRANSITION_END, (function () {
                i = !0
            })), setTimeout((function () {
                i || c.triggerTransitionEnd(t)
            }), e), this
        }
        var c = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var i = e.getAttribute("href");
                    t = i && "#" !== i ? i.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function (e) {
                if (!e)
                    return 0;
                var t = o.default(e).css("transition-duration"),
                    i = o.default(e).css("transition-delay"),
                    n = parseFloat(t),
                    r = parseFloat(i);
                return n || r ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(i))) : 0
            },
            reflow: function (e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function (e) {
                o.default(e).trigger("transitionend")
            },
            supportsTransitionEnd: function () {
                return Boolean("transitionend")
            },
            isElement: function (e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function (e, t, i) {
                for (var n in i)
                    if (Object.prototype.hasOwnProperty.call(i, n)) {
                        var o = i[n],
                            r = t[n],
                            s = r && c.isElement(r) ? "element" : null == (a = r) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(o).test(s))
                            throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + s + '" but expected type "' + o + '".')
                    }
                var a
            },
            findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow)
                    return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
            },
            jQueryDetection: function () {
                if (void 0 === o.default)
                    throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = o.default.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
                    throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        c.jQueryDetection(),
            o.default.fn.emulateTransitionEnd = d,
            o.default.event.special[c.TRANSITION_END] = {
                bindType: "transitionend",
                delegateType: "transitionend",
                handle: function (e) {
                    if (o.default(e.target).is(this))
                        return e.handleObj.handler.apply(this, arguments)
                }
            };
        var u = "alert",
            f = o.default.fn[u],
            h = function () {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)),
                        this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, t.dispose = function () {
                    o.default.removeData(this._element, "bs.alert"),
                        this._element = null
                }, t._getRootElement = function (e) {
                    var t = c.getSelectorFromElement(e),
                        i = !1;
                    return t && (i = document.querySelector(t)), i || (i = o.default(e).closest(".alert")[0]), i
                }, t._triggerCloseEvent = function (e) {
                    var t = o.default.Event("close.bs.alert");
                    return o.default(e).trigger(t), t
                }, t._removeElement = function (e) {
                    var t = this;
                    if (o.default(e).removeClass("show"), o.default(e).hasClass("fade")) {
                        var i = c.getTransitionDurationFromElement(e);
                        o.default(e).one(c.TRANSITION_END, (function (i) {
                            return t._destroyElement(e, i)
                        })).emulateTransitionEnd(i)
                    } else
                        this._destroyElement(e)
                }, t._destroyElement = function (e) {
                    o.default(e).detach().trigger("closed.bs.alert").remove()
                }, e._jQueryInterface = function (t) {
                    return this.each((function () {
                        var i = o.default(this),
                            n = i.data("bs.alert");
                        n || (n = new e(this), i.data("bs.alert", n)),
                            "close" === t && n[t](this)
                    }))
                }, e._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(),
                            e.close(this)
                    }
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }]), e
            }();
        o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h)),
            o.default.fn[u] = h._jQueryInterface,
            o.default.fn[u].Constructor = h,
            o.default.fn[u].noConflict = function () {
                return o.default.fn[u] = f, h._jQueryInterface
            };
        var p = o.default.fn.button,
            g = function () {
                function e(e) {
                    this._element = e,
                        this.shouldAvoidTriggerChange = !1
                }
                var t = e.prototype;
                return t.toggle = function () {
                    var e = !0,
                        t = !0,
                        i = o.default(this._element).closest('[data-toggle="buttons"]')[0];
                    if (i) {
                        var n = this._element.querySelector('input:not([type="hidden"])');
                        if (n) {
                            if ("radio" === n.type)
                                if (n.checked && this._element.classList.contains("active"))
                                    e = !1;
                                else {
                                    var r = i.querySelector(".active");
                                    r && o.default(r).removeClass("active")
                                }
                            e && ("checkbox" !== n.type && "radio" !== n.type || (n.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || o.default(n).trigger("change")),
                                n.focus(),
                                t = !1
                        }
                    }
                    this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && o.default(this._element).toggleClass("active"))
                }, t.dispose = function () {
                    o.default.removeData(this._element, "bs.button"),
                        this._element = null
                }, e._jQueryInterface = function (t, i) {
                    return this.each((function () {
                        var n = o.default(this),
                            r = n.data("bs.button");
                        r || (r = new e(this), n.data("bs.button", r)),
                            r.shouldAvoidTriggerChange = i,
                            "toggle" === t && r[t]()
                    }))
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }]), e
            }();
        o.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var t = e.target,
                i = t;
            if (o.default(t).hasClass("btn") || (t = o.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
                e.preventDefault();
            else {
                var n = t.querySelector('input:not([type="hidden"])');
                if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled")))
                    return void e.preventDefault();
                "INPUT" !== i.tagName && "LABEL" === t.tagName || g._jQueryInterface.call(o.default(t), "toggle", "INPUT" === i.tagName)
            }
        })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var t = o.default(e.target).closest(".btn")[0];
            o.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
        })),
            o.default(window).on("load.bs.button.data-api", (function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, i = e.length; t < i; t++) {
                    var n = e[t],
                        o = n.querySelector('input:not([type="hidden"])');
                    o.checked || o.hasAttribute("checked") ? n.classList.add("active") : n.classList.remove("active")
                }
                for (var r = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
                    var a = e[r];
                    "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
                }
            })),
            o.default.fn.button = g._jQueryInterface,
            o.default.fn.button.Constructor = g,
            o.default.fn.button.noConflict = function () {
                return o.default.fn.button = p, g._jQueryInterface
            };
        var m = "carousel",
            v = ".bs.carousel",
            y = o.default.fn[m],
            b = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            w = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            _ = {
                TOUCH: "touch",
                PEN: "pen"
            },
            k = function () {
                function e(e, t) {
                    this._items = null,
                        this._interval = null,
                        this._activeElement = null,
                        this._isPaused = !1,
                        this._isSliding = !1,
                        this.touchTimeout = null,
                        this.touchStartX = 0,
                        this.touchDeltaX = 0,
                        this._config = this._getConfig(t),
                        this._element = e,
                        this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
                        this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0,
                        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                        this._addEventListeners()
                }
                var t = e.prototype;
                return t.next = function () {
                    this._isSliding || this._slide("next")
                }, t.nextWhenVisible = function () {
                    var e = o.default(this._element);
                    !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
                }, t.prev = function () {
                    this._isSliding || this._slide("prev")
                }, t.pause = function (e) {
                    e || (this._isPaused = !0),
                        this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                }, t.cycle = function (e) {
                    e || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), this._interval = null),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, t.to = function (e) {
                    var t = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var i = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding)
                            o.default(this._element).one("slid.bs.carousel", (function () {
                                return t.to(e)
                            }));
                        else {
                            if (i === e)
                                return this.pause(), void this.cycle();
                            var n = e > i ? "next" : "prev";
                            this._slide(n, this._items[e])
                        }
                }, t.dispose = function () {
                    o.default(this._element).off(v),
                        o.default.removeData(this._element, "bs.carousel"),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                }, t._getConfig = function (e) {
                    return e = l({}, b, e), c.typeCheckConfig(m, e, w), e
                }, t._handleSwipe = function () {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        this.touchDeltaX = 0,
                            t > 0 && this.prev(),
                            t < 0 && this.next()
                    }
                }, t._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", (function (t) {
                        return e._keydown(t)
                    })),
                        "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", (function (t) {
                            return e.pause(t)
                        })).on("mouseleave.bs.carousel", (function (t) {
                            return e.cycle(t)
                        })),
                        this._config.touch && this._addTouchEventListeners()
                }, t._addTouchEventListeners = function () {
                    var e = this;
                    if (this._touchSupported) {
                        var t = function (t) {
                            e._pointerEvent && _[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                            i = function (t) {
                                e._pointerEvent && _[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                                    e._handleSwipe(),
                                    "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function (t) {
                                        return e.cycle(t)
                                    }), 500 + e._config.interval))
                            };
                        o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (e) {
                            return e.preventDefault()
                        })),
                            this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", (function (e) {
                                return t(e)
                            })), o.default(this._element).on("pointerup.bs.carousel", (function (e) {
                                return i(e)
                            })), this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", (function (e) {
                                return t(e)
                            })), o.default(this._element).on("touchmove.bs.carousel", (function (t) {
                                return function (t) {
                                    t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                                }(t)
                            })), o.default(this._element).on("touchend.bs.carousel", (function (e) {
                                return i(e)
                            })))
                    }
                }, t._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName))
                        switch (e.which) {
                            case 37:
                                e.preventDefault(),
                                    this.prev();
                                break;
                            case 39:
                                e.preventDefault(),
                                    this.next()
                        }
                }, t._getItemIndex = function (e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
                }, t._getItemByDirection = function (e, t) {
                    var i = "next" === e,
                        n = "prev" === e,
                        o = this._getItemIndex(t),
                        r = this._items.length - 1;
                    if ((n && 0 === o || i && o === r) && !this._config.wrap)
                        return t;
                    var s = (o + ("prev" === e ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }, t._triggerSlideEvent = function (e, t) {
                    var i = this._getItemIndex(e),
                        n = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        r = o.default.Event("slide.bs.carousel", {
                            relatedTarget: e,
                            direction: t,
                            from: n,
                            to: i
                        });
                    return o.default(this._element).trigger(r), r
                }, t._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        o.default(t).removeClass("active");
                        var i = this._indicatorsElement.children[this._getItemIndex(e)];
                        i && o.default(i).addClass("active")
                    }
                }, t._slide = function (e, t) {
                    var i,
                        n,
                        r,
                        s = this,
                        a = this._element.querySelector(".active.carousel-item"),
                        l = this._getItemIndex(a),
                        d = t || a && this._getItemByDirection(e, a),
                        u = this._getItemIndex(d),
                        f = Boolean(this._interval);
                    if ("next" === e ? (i = "carousel-item-left", n = "carousel-item-next", r = "left") : (i = "carousel-item-right", n = "carousel-item-prev", r = "right"), d && o.default(d).hasClass("active"))
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && a && d) {
                        this._isSliding = !0,
                            f && this.pause(),
                            this._setActiveIndicatorElement(d);
                        var h = o.default.Event("slid.bs.carousel", {
                            relatedTarget: d,
                            direction: r,
                            from: l,
                            to: u
                        });
                        if (o.default(this._element).hasClass("slide")) {
                            o.default(d).addClass(n),
                                c.reflow(d),
                                o.default(a).addClass(i),
                                o.default(d).addClass(i);
                            var p = parseInt(d.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var g = c.getTransitionDurationFromElement(a);
                            o.default(a).one(c.TRANSITION_END, (function () {
                                o.default(d).removeClass(i + " " + n).addClass("active"),
                                    o.default(a).removeClass("active " + n + " " + i),
                                    s._isSliding = !1,
                                    setTimeout((function () {
                                        return o.default(s._element).trigger(h)
                                    }), 0)
                            })).emulateTransitionEnd(g)
                        } else
                            o.default(a).removeClass("active"),
                                o.default(d).addClass("active"),
                                this._isSliding = !1,
                                o.default(this._element).trigger(h);
                        f && this.cycle()
                    }
                }, e._jQueryInterface = function (t) {
                    return this.each((function () {
                        var i = o.default(this).data("bs.carousel"),
                            n = l({}, b, o.default(this).data());
                        "object" == typeof t && (n = l({}, n, t));
                        var r = "string" == typeof t ? t : n.slide;
                        if (i || (i = new e(this, n), o.default(this).data("bs.carousel", i)), "number" == typeof t)
                            i.to(t);
                        else if ("string" == typeof r) {
                            if (void 0 === i[r])
                                throw new TypeError('No method named "' + r + '"');
                            i[r]()
                        } else
                            n.interval && n.ride && (i.pause(), i.cycle())
                    }))
                }, e._dataApiClickHandler = function (t) {
                    var i = c.getSelectorFromElement(this);
                    if (i) {
                        var n = o.default(i)[0];
                        if (n && o.default(n).hasClass("carousel")) {
                            var r = l({}, o.default(n).data(), o.default(this).data()),
                                s = this.getAttribute("data-slide-to");
                            s && (r.interval = !1),
                                e._jQueryInterface.call(o.default(n), r),
                                s && o.default(n).data("bs.carousel").to(s),
                                t.preventDefault()
                        }
                    }
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return b
                    }
                }]), e
            }();
        o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", k._dataApiClickHandler),
            o.default(window).on("load.bs.carousel.data-api", (function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, i = e.length; t < i; t++) {
                    var n = o.default(e[t]);
                    k._jQueryInterface.call(n, n.data())
                }
            })),
            o.default.fn[m] = k._jQueryInterface,
            o.default.fn[m].Constructor = k,
            o.default.fn[m].noConflict = function () {
                return o.default.fn[m] = y, k._jQueryInterface
            };
        var T = "collapse",
            x = o.default.fn[T],
            C = {
                toggle: !0,
                parent: ""
            },
            S = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            E = function () {
                function e(e, t) {
                    this._isTransitioning = !1,
                        this._element = e,
                        this._config = this._getConfig(t),
                        this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var i = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), n = 0, o = i.length; n < o; n++) {
                        var r = i[n],
                            s = c.getSelectorFromElement(r),
                            a = [].slice.call(document.querySelectorAll(s)).filter((function (t) {
                                return t === e
                            }));
                        null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(r))
                    }
                    this._parent = this._config.parent ? this._getParent() : null,
                        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                        this._config.toggle && this.toggle()
                }
                var t = e.prototype;
                return t.toggle = function () {
                    o.default(this._element).hasClass("show") ? this.hide() : this.show()
                }, t.show = function () {
                    var t,
                        i,
                        n = this;
                    if (!(this._isTransitioning || o.default(this._element).hasClass("show") || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (e) {
                        return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains("collapse")
                    }))).length && (t = null), t && (i = o.default(t).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                        var r = o.default.Event("show.bs.collapse");
                        if (o.default(this._element).trigger(r), !r.isDefaultPrevented()) {
                            t && (e._jQueryInterface.call(o.default(t).not(this._selector), "hide"), i || o.default(t).data("bs.collapse", null));
                            var s = this._getDimension();
                            o.default(this._element).removeClass("collapse").addClass("collapsing"),
                                this._element.style[s] = 0,
                                this._triggerArray.length && o.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                l = c.getTransitionDurationFromElement(this._element);
                            o.default(this._element).one(c.TRANSITION_END, (function () {
                                o.default(n._element).removeClass("collapsing").addClass("collapse show"),
                                    n._element.style[s] = "",
                                    n.setTransitioning(!1),
                                    o.default(n._element).trigger("shown.bs.collapse")
                            })).emulateTransitionEnd(l),
                                this._element.style[s] = this._element[a] + "px"
                        }
                    }
                }, t.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && o.default(this._element).hasClass("show")) {
                        var t = o.default.Event("hide.bs.collapse");
                        if (o.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                                c.reflow(this._element),
                                o.default(this._element).addClass("collapsing").removeClass("collapse show");
                            var n = this._triggerArray.length;
                            if (n > 0)
                                for (var r = 0; r < n; r++) {
                                    var s = this._triggerArray[r],
                                        a = c.getSelectorFromElement(s);
                                    null !== a && (o.default([].slice.call(document.querySelectorAll(a))).hasClass("show") || o.default(s).addClass("collapsed").attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0),
                                this._element.style[i] = "";
                            var l = c.getTransitionDurationFromElement(this._element);
                            o.default(this._element).one(c.TRANSITION_END, (function () {
                                e.setTransitioning(!1),
                                    o.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            })).emulateTransitionEnd(l)
                        }
                    }
                }, t.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, t.dispose = function () {
                    o.default.removeData(this._element, "bs.collapse"),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                }, t._getConfig = function (e) {
                    return (e = l({}, C, e)).toggle = Boolean(e.toggle), c.typeCheckConfig(T, e, S), e
                }, t._getDimension = function () {
                    return o.default(this._element).hasClass("width") ? "width" : "height"
                }, t._getParent = function () {
                    var t,
                        i = this;
                    c.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                    var n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        r = [].slice.call(t.querySelectorAll(n));
                    return o.default(r).each((function (t, n) {
                        i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                    })), t
                }, t._addAriaAndCollapsedClass = function (e, t) {
                    var i = o.default(e).hasClass("show");
                    t.length && o.default(t).toggleClass("collapsed", !i).attr("aria-expanded", i)
                }, e._getTargetFromElement = function (e) {
                    var t = c.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, e._jQueryInterface = function (t) {
                    return this.each((function () {
                        var i = o.default(this),
                            n = i.data("bs.collapse"),
                            r = l({}, C, i.data(), "object" == typeof t && t ? t : {});
                        if (!n && r.toggle && "string" == typeof t && /show|hide/.test(t) && (r.toggle = !1), n || (n = new e(this, r), i.data("bs.collapse", n)), "string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    }))
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return C
                    }
                }]), e
            }();
        o.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var t = o.default(this),
                i = c.getSelectorFromElement(this),
                n = [].slice.call(document.querySelectorAll(i));
            o.default(n).each((function () {
                var e = o.default(this),
                    i = e.data("bs.collapse") ? "toggle" : t.data();
                E._jQueryInterface.call(e, i)
            }))
        })),
            o.default.fn[T] = E._jQueryInterface,
            o.default.fn[T].Constructor = E,
            o.default.fn[T].noConflict = function () {
                return o.default.fn[T] = x, E._jQueryInterface
            };
        var D = "dropdown",
            A = o.default.fn[D],
            O = new RegExp("38|40|27"),
            N = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null
            },
            L = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
                popperConfig: "(null|object)"
            },
            j = function () {
                function e(e, t) {
                    this._element = e,
                        this._popper = null,
                        this._config = this._getConfig(t),
                        this._menu = this._getMenuElement(),
                        this._inNavbar = this._detectNavbar(),
                        this._addEventListeners()
                }
                var t = e.prototype;
                return t.toggle = function () {
                    if (!this._element.disabled && !o.default(this._element).hasClass("disabled")) {
                        var t = o.default(this._menu).hasClass("show");
                        e._clearMenus(),
                            t || this.show(!0)
                    }
                }, t.show = function (t) {
                    if (void 0 === t && (t = !1), !(this._element.disabled || o.default(this._element).hasClass("disabled") || o.default(this._menu).hasClass("show"))) {
                        var i = {
                            relatedTarget: this._element
                        },
                            n = o.default.Event("show.bs.dropdown", i),
                            s = e._getParentFromElement(this._element);
                        if (o.default(s).trigger(n), !n.isDefaultPrevented()) {
                            if (!this._inNavbar && t) {
                                if (void 0 === r.default)
                                    throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = s : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary && o.default(s).addClass("position-static"),
                                    this._popper = new r.default(a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === o.default(s).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                o.default(this._menu).toggleClass("show"),
                                o.default(s).toggleClass("show").trigger(o.default.Event("shown.bs.dropdown", i))
                        }
                    }
                }, t.hide = function () {
                    if (!this._element.disabled && !o.default(this._element).hasClass("disabled") && o.default(this._menu).hasClass("show")) {
                        var t = {
                            relatedTarget: this._element
                        },
                            i = o.default.Event("hide.bs.dropdown", t),
                            n = e._getParentFromElement(this._element);
                        o.default(n).trigger(i),
                            i.isDefaultPrevented() || (this._popper && this._popper.destroy(), o.default(this._menu).toggleClass("show"), o.default(n).toggleClass("show").trigger(o.default.Event("hidden.bs.dropdown", t)))
                    }
                }, t.dispose = function () {
                    o.default.removeData(this._element, "bs.dropdown"),
                        o.default(this._element).off(".bs.dropdown"),
                        this._element = null,
                        this._menu = null,
                        null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, t.update = function () {
                    this._inNavbar = this._detectNavbar(),
                        null !== this._popper && this._popper.scheduleUpdate()
                }, t._addEventListeners = function () {
                    var e = this;
                    o.default(this._element).on("click.bs.dropdown", (function (t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            e.toggle()
                    }))
                }, t._getConfig = function (e) {
                    return e = l({}, this.constructor.Default, o.default(this._element).data(), e), c.typeCheckConfig(D, e, this.constructor.DefaultType), e
                }, t._getMenuElement = function () {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(".dropdown-menu"))
                    }
                    return this._menu
                }, t._getPlacement = function () {
                    var e = o.default(this._element.parentNode),
                        t = "bottom-start";
                    return e.hasClass("dropup") ? t = o.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : o.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t
                }, t._detectNavbar = function () {
                    return o.default(this._element).closest(".navbar").length > 0
                }, t._getOffset = function () {
                    var e = this,
                        t = {};
                    return "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                    } : t.offset = this._config.offset, t
                }, t._getPopperConfig = function () {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {
                        enabled: !1
                    }), l({}, e, this._config.popperConfig)
                }, e._jQueryInterface = function (t) {
                    return this.each((function () {
                        var i = o.default(this).data("bs.dropdown");
                        if (i || (i = new e(this, "object" == typeof t ? t : null), o.default(this).data("bs.dropdown", i)), "string" == typeof t) {
                            if (void 0 === i[t])
                                throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    }))
                }, e._clearMenus = function (t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), n = 0, r = i.length; n < r; n++) {
                            var s = e._getParentFromElement(i[n]),
                                a = o.default(i[n]).data("bs.dropdown"),
                                l = {
                                    relatedTarget: i[n]
                                };
                            if (t && "click" === t.type && (l.clickEvent = t), a) {
                                var d = a._menu;
                                if (o.default(s).hasClass("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && o.default.contains(s, t.target))) {
                                    var c = o.default.Event("hide.bs.dropdown", l);
                                    o.default(s).trigger(c),
                                        c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), i[n].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), o.default(d).removeClass("show"), o.default(s).removeClass("show").trigger(o.default.Event("hidden.bs.dropdown", l)))
                                }
                            }
                        }
                }, e._getParentFromElement = function (e) {
                    var t,
                        i = c.getSelectorFromElement(e);
                    return i && (t = document.querySelector(i)), t || e.parentNode
                }, e._dataApiKeydownHandler = function (t) {
                    if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || o.default(t.target).closest(".dropdown-menu").length) : !O.test(t.which)) && !this.disabled && !o.default(this).hasClass("disabled")) {
                        var i = e._getParentFromElement(this),
                            n = o.default(i).hasClass("show");
                        if (n || 27 !== t.which) {
                            if (t.preventDefault(), t.stopPropagation(), !n || 27 === t.which || 32 === t.which)
                                return 27 === t.which && o.default(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void o.default(this).trigger("click");
                            var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (e) {
                                return o.default(e).is(":visible")
                            }));
                            if (0 !== r.length) {
                                var s = r.indexOf(t.target);
                                38 === t.which && s > 0 && s--,
                                    40 === t.which && s < r.length - 1 && s++,
                                    s < 0 && (s = 0),
                                    r[s].focus()
                            }
                        }
                    }
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return N
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return L
                    }
                }]), e
            }();
        o.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", j._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (e) {
            e.preventDefault(),
                e.stopPropagation(),
                j._jQueryInterface.call(o.default(this), "toggle")
        })).on("click.bs.dropdown.data-api", ".dropdown form", (function (e) {
            e.stopPropagation()
        })),
            o.default.fn[D] = j._jQueryInterface,
            o.default.fn[D].Constructor = j,
            o.default.fn[D].noConflict = function () {
                return o.default.fn[D] = A, j._jQueryInterface
            };
        var M = o.default.fn.modal,
            $ = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            H = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            I = function () {
                function e(e, t) {
                    this._config = this._getConfig(t),
                        this._element = e,
                        this._dialog = e.querySelector(".modal-dialog"),
                        this._backdrop = null,
                        this._isShown = !1,
                        this._isBodyOverflowing = !1,
                        this._ignoreBackdropClick = !1,
                        this._isTransitioning = !1,
                        this._scrollbarWidth = 0
                }
                var t = e.prototype;
                return t.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, t.show = function (e) {
                    var t = this;
                    if (!this._isShown && !this._isTransitioning) {
                        o.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var i = o.default.Event("show.bs.modal", {
                            relatedTarget: e
                        });
                        o.default(this._element).trigger(i),
                            this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), o.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (e) {
                                return t.hide(e)
                            })), o.default(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
                                o.default(t._element).one("mouseup.dismiss.bs.modal", (function (e) {
                                    o.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                }))
                            })), this._showBackdrop((function () {
                                return t._showElement(e)
                            })))
                    }
                }, t.hide = function (e) {
                    var t = this;
                    if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                        var i = o.default.Event("hide.bs.modal");
                        if (o.default(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var n = o.default(this._element).hasClass("fade");
                            if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), o.default(document).off("focusin.bs.modal"), o.default(this._element).removeClass("show"), o.default(this._element).off("click.dismiss.bs.modal"), o.default(this._dialog).off("mousedown.dismiss.bs.modal"), n) {
                                var r = c.getTransitionDurationFromElement(this._element);
                                o.default(this._element).one(c.TRANSITION_END, (function (e) {
                                    return t._hideModal(e)
                                })).emulateTransitionEnd(r)
                            } else
                                this._hideModal()
                        }
                    }
                }, t.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (e) {
                        return o.default(e).off(".bs.modal")
                    })),
                        o.default(document).off("focusin.bs.modal"),
                        o.default.removeData(this._element, "bs.modal"),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._isTransitioning = null,
                        this._scrollbarWidth = null
                }, t.handleUpdate = function () {
                    this._adjustDialog()
                }, t._getConfig = function (e) {
                    return e = l({}, $, e), c.typeCheckConfig("modal", e, H), e
                }, t._triggerBackdropTransition = function () {
                    var e = this;
                    if ("static" === this._config.backdrop) {
                        var t = o.default.Event("hidePrevented.bs.modal");
                        if (o.default(this._element).trigger(t), t.isDefaultPrevented())
                            return;
                        var i = this._element.scrollHeight > document.documentElement.clientHeight;
                        i || (this._element.style.overflowY = "hidden"),
                            this._element.classList.add("modal-static");
                        var n = c.getTransitionDurationFromElement(this._dialog);
                        o.default(this._element).off(c.TRANSITION_END),
                            o.default(this._element).one(c.TRANSITION_END, (function () {
                                e._element.classList.remove("modal-static"),
                                    i || o.default(e._element).one(c.TRANSITION_END, (function () {
                                        e._element.style.overflowY = ""
                                    })).emulateTransitionEnd(e._element, n)
                            })).emulateTransitionEnd(n),
                            this._element.focus()
                    } else
                        this.hide()
                }, t._showElement = function (e) {
                    var t = this,
                        i = o.default(this._element).hasClass("fade"),
                        n = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        o.default(this._dialog).hasClass("modal-dialog-scrollable") && n ? n.scrollTop = 0 : this._element.scrollTop = 0,
                        i && c.reflow(this._element),
                        o.default(this._element).addClass("show"),
                        this._config.focus && this._enforceFocus();
                    var r = o.default.Event("shown.bs.modal", {
                        relatedTarget: e
                    }),
                        s = function () {
                            t._config.focus && t._element.focus(),
                                t._isTransitioning = !1,
                                o.default(t._element).trigger(r)
                        };
                    if (i) {
                        var a = c.getTransitionDurationFromElement(this._dialog);
                        o.default(this._dialog).one(c.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else
                        s()
                }, t._enforceFocus = function () {
                    var e = this;
                    o.default(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (t) {
                        document !== t.target && e._element !== t.target && 0 === o.default(e._element).has(t.target).length && e._element.focus()
                    }))
                }, t._setEscapeEvent = function () {
                    var e = this;
                    this._isShown ? o.default(this._element).on("keydown.dismiss.bs.modal", (function (t) {
                        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                    })) : this._isShown || o.default(this._element).off("keydown.dismiss.bs.modal")
                }, t._setResizeEvent = function () {
                    var e = this;
                    this._isShown ? o.default(window).on("resize.bs.modal", (function (t) {
                        return e.handleUpdate(t)
                    })) : o.default(window).off("resize.bs.modal")
                }, t._hideModal = function () {
                    var e = this;
                    this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._isTransitioning = !1,
                        this._showBackdrop((function () {
                            o.default(document.body).removeClass("modal-open"),
                                e._resetAdjustments(),
                                e._resetScrollbar(),
                                o.default(e._element).trigger("hidden.bs.modal")
                        }))
                }, t._removeBackdrop = function () {
                    this._backdrop && (o.default(this._backdrop).remove(), this._backdrop = null)
                }, t._showBackdrop = function (e) {
                    var t = this,
                        i = o.default(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), o.default(this._backdrop).appendTo(document.body), o.default(this._element).on("click.dismiss.bs.modal", (function (e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition()
                        })), i && c.reflow(this._backdrop), o.default(this._backdrop).addClass("show"), !e)
                            return;
                        if (!i)
                            return void e();
                        var n = c.getTransitionDurationFromElement(this._backdrop);
                        o.default(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(n)
                    } else if (!this._isShown && this._backdrop) {
                        o.default(this._backdrop).removeClass("show");
                        var r = function () {
                            t._removeBackdrop(),
                                e && e()
                        };
                        if (o.default(this._element).hasClass("fade")) {
                            var s = c.getTransitionDurationFromElement(this._backdrop);
                            o.default(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
                        } else
                            r()
                    } else
                        e && e()
                }, t._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, t._resetAdjustments = function () {
                    this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                }, t._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                }, t._setScrollbar = function () {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            i = [].slice.call(document.querySelectorAll(".sticky-top"));
                        o.default(t).each((function (t, i) {
                            var n = i.style.paddingRight,
                                r = o.default(i).css("padding-right");
                            o.default(i).data("padding-right", n).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                        })),
                            o.default(i).each((function (t, i) {
                                var n = i.style.marginRight,
                                    r = o.default(i).css("margin-right");
                                o.default(i).data("margin-right", n).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                            }));
                        var n = document.body.style.paddingRight,
                            r = o.default(document.body).css("padding-right");
                        o.default(document.body).data("padding-right", n).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                    }
                    o.default(document.body).addClass("modal-open")
                }, t._resetScrollbar = function () {
                    var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    o.default(e).each((function (e, t) {
                        var i = o.default(t).data("padding-right");
                        o.default(t).removeData("padding-right"),
                            t.style.paddingRight = i || ""
                    }));
                    var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                    o.default(t).each((function (e, t) {
                        var i = o.default(t).data("margin-right");
                        void 0 !== i && o.default(t).css("margin-right", i).removeData("margin-right")
                    }));
                    var i = o.default(document.body).data("padding-right");
                    o.default(document.body).removeData("padding-right"),
                        document.body.style.paddingRight = i || ""
                }, t._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = "modal-scrollbar-measure",
                        document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, e._jQueryInterface = function (t, i) {
                    return this.each((function () {
                        var n = o.default(this).data("bs.modal"),
                            r = l({}, $, o.default(this).data(), "object" == typeof t && t ? t : {});
                        if (n || (n = new e(this, r), o.default(this).data("bs.modal", n)), "string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError('No method named "' + t + '"');
                            n[t](i)
                        } else
                            r.show && n.show(i)
                    }))
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return $
                    }
                }]), e
            }();
        o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (e) {
            var t,
                i = this,
                n = c.getSelectorFromElement(this);
            n && (t = document.querySelector(n));
            var r = o.default(t).data("bs.modal") ? "toggle" : l({}, o.default(t).data(), o.default(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var s = o.default(t).one("show.bs.modal", (function (e) {
                e.isDefaultPrevented() || s.one("hidden.bs.modal", (function () {
                    o.default(i).is(":visible") && i.focus()
                }))
            }));
            I._jQueryInterface.call(o.default(t), r, this)
        })),
            o.default.fn.modal = I._jQueryInterface,
            o.default.fn.modal.Constructor = I,
            o.default.fn.modal.noConflict = function () {
                return o.default.fn.modal = M, I._jQueryInterface
            };
        var P = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            q = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            F = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            B = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
        function W(e, t, i) {
            if (0 === e.length)
                return e;
            if (i && "function" == typeof i)
                return i(e);
            for (var n = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(n.body.querySelectorAll("*")), s = function (e, i) {
                var n = r[e],
                    s = n.nodeName.toLowerCase();
                if (-1 === o.indexOf(n.nodeName.toLowerCase()))
                    return n.parentNode.removeChild(n), "continue";
                var a = [].slice.call(n.attributes),
                    l = [].concat(t["*"] || [], t[s] || []);
                a.forEach((function (e) {
                    (function (e, t) {
                        var i = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(i))
                            return -1 === P.indexOf(i) || Boolean(e.nodeValue.match(F) || e.nodeValue.match(B));
                        for (var n = t.filter((function (e) {
                            return e instanceof RegExp
                        })), o = 0, r = n.length; o < r; o++)
                            if (i.match(n[o]))
                                return !0;
                        return !1
                    })(e, l) || n.removeAttribute(e.nodeName)
                }))
            }, a = 0, l = r.length; a < l; a++)
                s(a);
            return n.body.innerHTML
        }
        var R = "tooltip",
            z = o.default.fn[R],
            V = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            U = ["sanitize", "whiteList", "sanitizeFn"],
            Y = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            },
            X = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            Q = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: q,
                popperConfig: null
            },
            K = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            },
            G = function () {
                function e(e, t) {
                    if (void 0 === r.default)
                        throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0,
                        this._timeout = 0,
                        this._hoverState = "",
                        this._activeTrigger = {},
                        this._popper = null,
                        this.element = e,
                        this.config = this._getConfig(t),
                        this.tip = null,
                        this._setListeners()
                }
                var t = e.prototype;
                return t.enable = function () {
                    this._isEnabled = !0
                }, t.disable = function () {
                    this._isEnabled = !1
                }, t.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, t.toggle = function (e) {
                    if (this._isEnabled)
                        if (e) {
                            var t = this.constructor.DATA_KEY,
                                i = o.default(e.currentTarget).data(t);
                            i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(t, i)),
                                i._activeTrigger.click = !i._activeTrigger.click,
                                i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (o.default(this.getTipElement()).hasClass("show"))
                                return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, t.dispose = function () {
                    clearTimeout(this._timeout),
                        o.default.removeData(this.element, this.constructor.DATA_KEY),
                        o.default(this.element).off(this.constructor.EVENT_KEY),
                        o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                        this.tip && o.default(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        this._activeTrigger = null,
                        this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                }, t.show = function () {
                    var e = this;
                    if ("none" === o.default(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var t = o.default.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        o.default(this.element).trigger(t);
                        var i = c.findShadowRoot(this.element),
                            n = o.default.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !n)
                            return;
                        var s = this.getTipElement(),
                            a = c.getUID(this.constructor.NAME);
                        s.setAttribute("id", a),
                            this.element.setAttribute("aria-describedby", a),
                            this.setContent(),
                            this.config.animation && o.default(s).addClass("fade");
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                            d = this._getAttachment(l);
                        this.addAttachmentClass(d);
                        var u = this._getContainer();
                        o.default(s).data(this.constructor.DATA_KEY, this),
                            o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(s).appendTo(u),
                            o.default(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new r.default(this.element, s, this._getPopperConfig(d)),
                            o.default(s).addClass("show"),
                            "ontouchstart" in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);
                        var f = function () {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            e._hoverState = null,
                                o.default(e.element).trigger(e.constructor.Event.SHOWN),
                                "out" === t && e._leave(null, e)
                        };
                        if (o.default(this.tip).hasClass("fade")) {
                            var h = c.getTransitionDurationFromElement(this.tip);
                            o.default(this.tip).one(c.TRANSITION_END, f).emulateTransitionEnd(h)
                        } else
                            f()
                    }
                }, t.hide = function (e) {
                    var t = this,
                        i = this.getTipElement(),
                        n = o.default.Event(this.constructor.Event.HIDE),
                        r = function () {
                            "show" !== t._hoverState && i.parentNode && i.parentNode.removeChild(i),
                                t._cleanTipClass(),
                                t.element.removeAttribute("aria-describedby"),
                                o.default(t.element).trigger(t.constructor.Event.HIDDEN),
                                null !== t._popper && t._popper.destroy(),
                                e && e()
                        };
                    if (o.default(this.element).trigger(n), !n.isDefaultPrevented()) {
                        if (o.default(i).removeClass("show"), "ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, o.default(this.tip).hasClass("fade")) {
                            var s = c.getTransitionDurationFromElement(i);
                            o.default(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
                        } else
                            r();
                        this._hoverState = ""
                    }
                }, t.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, t.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, t.addAttachmentClass = function (e) {
                    o.default(this.getTipElement()).addClass("bs-tooltip-" + e)
                }, t.getTipElement = function () {
                    return this.tip = this.tip || o.default(this.config.template)[0], this.tip
                }, t.setContent = function () {
                    var e = this.getTipElement();
                    this.setElementContent(o.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
                        o.default(e).removeClass("fade show")
                }, t.setElementContent = function (e, t) {
                    "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = W(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? o.default(t).parent().is(e) || e.empty().append(t) : e.text(o.default(t).text())
                }, t.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, t._getPopperConfig = function (e) {
                    var t = this;
                    return l({}, {
                        placement: e,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }, this.config.popperConfig)
                }, t._getOffset = function () {
                    var e = this,
                        t = {};
                    return "function" == typeof this.config.offset ? t.fn = function (t) {
                        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                    } : t.offset = this.config.offset, t
                }, t._getContainer = function () {
                    return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container)
                }, t._getAttachment = function (e) {
                    return X[e.toUpperCase()]
                }, t._setListeners = function () {
                    var e = this;
                    this.config.trigger.split(" ").forEach((function (t) {
                        if ("click" === t)
                            o.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function (t) {
                                return e.toggle(t)
                            }));
                        else if ("manual" !== t) {
                            var i = "hover" === t ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                n = "hover" === t ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            o.default(e.element).on(i, e.config.selector, (function (t) {
                                return e._enter(t)
                            })).on(n, e.config.selector, (function (t) {
                                return e._leave(t)
                            }))
                        }
                    })),
                        this._hideModalHandler = function () {
                            e.element && e.hide()
                        },
                        o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector ? this.config = l({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                }, t._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, t._enter = function (e, t) {
                    var i = this.constructor.DATA_KEY;
                    (t = t || o.default(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(i, t)),
                        e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
                        o.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function () {
                            "show" === t._hoverState && t.show()
                        }), t.config.delay.show) : t.show())
                }, t._leave = function (e, t) {
                    var i = this.constructor.DATA_KEY;
                    (t = t || o.default(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(i, t)),
                        e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1),
                        t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function () {
                            "out" === t._hoverState && t.hide()
                        }), t.config.delay.hide) : t.hide())
                }, t._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e])
                            return !0;
                    return !1
                }, t._getConfig = function (e) {
                    var t = o.default(this.element).data();
                    return Object.keys(t).forEach((function (e) {
                        -1 !== U.indexOf(e) && delete t[e]
                    })), "number" == typeof (e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(R, e, this.constructor.DefaultType), e.sanitize && (e.template = W(e.template, e.whiteList, e.sanitizeFn)), e
                }, t._getDelegateConfig = function () {
                    var e = {};
                    if (this.config)
                        for (var t in this.config)
                            this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, t._cleanTipClass = function () {
                    var e = o.default(this.getTipElement()),
                        t = e.attr("class").match(V);
                    null !== t && t.length && e.removeClass(t.join(""))
                }, t._handlePopperPlacementChange = function (e) {
                    this.tip = e.instance.popper,
                        this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(e.placement))
                }, t._fixTransition = function () {
                    var e = this.getTipElement(),
                        t = this.config.animation;
                    null === e.getAttribute("x-placement") && (o.default(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                }, e._jQueryInterface = function (t) {
                    return this.each((function () {
                        var i = o.default(this),
                            n = i.data("bs.tooltip"),
                            r = "object" == typeof t && t;
                        if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, r), i.data("bs.tooltip", n)), "string" == typeof t)) {
                            if (void 0 === n[t])
                                throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    }))
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Q
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return R
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return K
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.tooltip"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Y
                    }
                }]), e
            }();
        o.default.fn[R] = G._jQueryInterface,
            o.default.fn[R].Constructor = G,
            o.default.fn[R].noConflict = function () {
                return o.default.fn[R] = z, G._jQueryInterface
            };
        var J = "popover",
            Z = o.default.fn[J],
            ee = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            te = l({}, G.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            ie = l({}, G.DefaultType, {
                content: "(string|element|function)"
            }),
            ne = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            },
            oe = function (e) {
                var t,
                    i;
                function n() {
                    return e.apply(this, arguments) || this
                }
                i = e,
                    (t = n).prototype = Object.create(i.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = i;
                var r = n.prototype;
                return r.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, r.addAttachmentClass = function (e) {
                    o.default(this.getTipElement()).addClass("bs-popover-" + e)
                }, r.getTipElement = function () {
                    return this.tip = this.tip || o.default(this.config.template)[0], this.tip
                }, r.setContent = function () {
                    var e = o.default(this.getTipElement());
                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                    var t = this._getContent();
                    "function" == typeof t && (t = t.call(this.element)),
                        this.setElementContent(e.find(".popover-body"), t),
                        e.removeClass("fade show")
                }, r._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, r._cleanTipClass = function () {
                    var e = o.default(this.getTipElement()),
                        t = e.attr("class").match(ee);
                    null !== t && t.length > 0 && e.removeClass(t.join(""))
                }, n._jQueryInterface = function (e) {
                    return this.each((function () {
                        var t = o.default(this).data("bs.popover"),
                            i = "object" == typeof e ? e : null;
                        if ((t || !/dispose|hide/.test(e)) && (t || (t = new n(this, i), o.default(this).data("bs.popover", t)), "string" == typeof e)) {
                            if (void 0 === t[e])
                                throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    }))
                }, a(n, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return te
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return J
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return ne
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return ie
                    }
                }]), n
            }(G);
        o.default.fn[J] = oe._jQueryInterface,
            o.default.fn[J].Constructor = oe,
            o.default.fn[J].noConflict = function () {
                return o.default.fn[J] = Z, oe._jQueryInterface
            };
        var re = "scrollspy",
            se = o.default.fn[re],
            ae = {
                offset: 10,
                method: "auto",
                target: ""
            },
            le = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            de = function () {
                function e(e, t) {
                    var i = this;
                    this._element = e,
                        this._scrollElement = "BODY" === e.tagName ? window : e,
                        this._config = this._getConfig(t),
                        this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
                        this._offsets = [],
                        this._targets = [],
                        this._activeTarget = null,
                        this._scrollHeight = 0,
                        o.default(this._scrollElement).on("scroll.bs.scrollspy", (function (e) {
                            return i._process(e)
                        })),
                        this.refresh(),
                        this._process()
                }
                var t = e.prototype;
                return t.refresh = function () {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        i = "auto" === this._config.method ? t : this._config.method,
                        n = "position" === i ? this._getScrollTop() : 0;
                    this._offsets = [],
                        this._targets = [],
                        this._scrollHeight = this._getScrollHeight(),
                        [].slice.call(document.querySelectorAll(this._selector)).map((function (e) {
                            var t,
                                r = c.getSelectorFromElement(e);
                            if (r && (t = document.querySelector(r)), t) {
                                var s = t.getBoundingClientRect();
                                if (s.width || s.height)
                                    return [o.default(t)[i]().top + n, r]
                            }
                            return null
                        })).filter((function (e) {
                            return e
                        })).sort((function (e, t) {
                            return e[0] - t[0]
                        })).forEach((function (t) {
                            e._offsets.push(t[0]),
                                e._targets.push(t[1])
                        }))
                }, t.dispose = function () {
                    o.default.removeData(this._element, "bs.scrollspy"),
                        o.default(this._scrollElement).off(".bs.scrollspy"),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                }, t._getConfig = function (e) {
                    if ("string" != typeof (e = l({}, ae, "object" == typeof e && e ? e : {})).target && c.isElement(e.target)) {
                        var t = o.default(e.target).attr("id");
                        t || (t = c.getUID(re), o.default(e.target).attr("id", t)),
                            e.target = "#" + t
                    }
                    return c.typeCheckConfig(re, e, le), e
                }, t._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, t._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, t._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, t._process = function () {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        i = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= i) {
                        var n = this._targets[this._targets.length - 1];
                        this._activeTarget !== n && this._activate(n)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                            return this._activeTarget = null, void this._clear();
                        for (var o = this._offsets.length; o--;)
                            this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }, t._activate = function (e) {
                    this._activeTarget = e,
                        this._clear();
                    var t = this._selector.split(",").map((function (t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    })),
                        i = o.default([].slice.call(document.querySelectorAll(t.join(","))));
                    i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
                        o.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                            relatedTarget: e
                        })
                }, t._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function (e) {
                        return e.classList.contains("active")
                    })).forEach((function (e) {
                        return e.classList.remove("active")
                    }))
                }, e._jQueryInterface = function (t) {
                    return this.each((function () {
                        var i = o.default(this).data("bs.scrollspy");
                        if (i || (i = new e(this, "object" == typeof t && t), o.default(this).data("bs.scrollspy", i)), "string" == typeof t) {
                            if (void 0 === i[t])
                                throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    }))
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ae
                    }
                }]), e
            }();
        o.default(window).on("load.bs.scrollspy.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
                var i = o.default(e[t]);
                de._jQueryInterface.call(i, i.data())
            }
        })),
            o.default.fn[re] = de._jQueryInterface,
            o.default.fn[re].Constructor = de,
            o.default.fn[re].noConflict = function () {
                return o.default.fn[re] = se, de._jQueryInterface
            };
        var ce = o.default.fn.tab,
            ue = function () {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.show = function () {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass("active") || o.default(this._element).hasClass("disabled"))) {
                        var t,
                            i,
                            n = o.default(this._element).closest(".nav, .list-group")[0],
                            r = c.getSelectorFromElement(this._element);
                        if (n) {
                            var s = "UL" === n.nodeName || "OL" === n.nodeName ? "> li > .active" : ".active";
                            i = (i = o.default.makeArray(o.default(n).find(s)))[i.length - 1]
                        }
                        var a = o.default.Event("hide.bs.tab", {
                            relatedTarget: this._element
                        }),
                            l = o.default.Event("show.bs.tab", {
                                relatedTarget: i
                            });
                        if (i && o.default(i).trigger(a), o.default(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                            r && (t = document.querySelector(r)),
                                this._activate(this._element, n);
                            var d = function () {
                                var t = o.default.Event("hidden.bs.tab", {
                                    relatedTarget: e._element
                                }),
                                    n = o.default.Event("shown.bs.tab", {
                                        relatedTarget: i
                                    });
                                o.default(i).trigger(t),
                                    o.default(e._element).trigger(n)
                            };
                            t ? this._activate(t, t.parentNode, d) : d()
                        }
                    }
                }, t.dispose = function () {
                    o.default.removeData(this._element, "bs.tab"),
                        this._element = null
                }, t._activate = function (e, t, i) {
                    var n = this,
                        r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? o.default(t).children(".active") : o.default(t).find("> li > .active"))[0],
                        s = i && r && o.default(r).hasClass("fade"),
                        a = function () {
                            return n._transitionComplete(e, r, i)
                        };
                    if (r && s) {
                        var l = c.getTransitionDurationFromElement(r);
                        o.default(r).removeClass("show").one(c.TRANSITION_END, a).emulateTransitionEnd(l)
                    } else
                        a()
                }, t._transitionComplete = function (e, t, i) {
                    if (t) {
                        o.default(t).removeClass("active");
                        var n = o.default(t.parentNode).find("> .dropdown-menu .active")[0];
                        n && o.default(n).removeClass("active"),
                            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                    }
                    if (o.default(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && o.default(e.parentNode).hasClass("dropdown-menu")) {
                        var r = o.default(e).closest(".dropdown")[0];
                        if (r) {
                            var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                            o.default(s).addClass("active")
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, e._jQueryInterface = function (t) {
                    return this.each((function () {
                        var i = o.default(this),
                            n = i.data("bs.tab");
                        if (n || (n = new e(this), i.data("bs.tab", n)), "string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    }))
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }]), e
            }();
        o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (e) {
            e.preventDefault(),
                ue._jQueryInterface.call(o.default(this), "show")
        })),
            o.default.fn.tab = ue._jQueryInterface,
            o.default.fn.tab.Constructor = ue,
            o.default.fn.tab.noConflict = function () {
                return o.default.fn.tab = ce, ue._jQueryInterface
            };
        var fe = o.default.fn.toast,
            he = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            pe = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            ge = function () {
                function e(e, t) {
                    this._element = e,
                        this._config = this._getConfig(t),
                        this._timeout = null,
                        this._setListeners()
                }
                var t = e.prototype;
                return t.show = function () {
                    var e = this,
                        t = o.default.Event("show.bs.toast");
                    if (o.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                        this._clearTimeout(),
                            this._config.animation && this._element.classList.add("fade");
                        var i = function () {
                            e._element.classList.remove("showing"),
                                e._element.classList.add("show"),
                                o.default(e._element).trigger("shown.bs.toast"),
                                e._config.autohide && (e._timeout = setTimeout((function () {
                                    e.hide()
                                }), e._config.delay))
                        };
                        if (this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                            var n = c.getTransitionDurationFromElement(this._element);
                            o.default(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(n)
                        } else
                            i()
                    }
                }, t.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var e = o.default.Event("hide.bs.toast");
                        o.default(this._element).trigger(e),
                            e.isDefaultPrevented() || this._close()
                    }
                }, t.dispose = function () {
                    this._clearTimeout(),
                        this._element.classList.contains("show") && this._element.classList.remove("show"),
                        o.default(this._element).off("click.dismiss.bs.toast"),
                        o.default.removeData(this._element, "bs.toast"),
                        this._element = null,
                        this._config = null
                }, t._getConfig = function (e) {
                    return e = l({}, pe, o.default(this._element).data(), "object" == typeof e && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e
                }, t._setListeners = function () {
                    var e = this;
                    o.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
                        return e.hide()
                    }))
                }, t._close = function () {
                    var e = this,
                        t = function () {
                            e._element.classList.add("hide"),
                                o.default(e._element).trigger("hidden.bs.toast")
                        };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var i = c.getTransitionDurationFromElement(this._element);
                        o.default(this._element).one(c.TRANSITION_END, t).emulateTransitionEnd(i)
                    } else
                        t()
                }, t._clearTimeout = function () {
                    clearTimeout(this._timeout),
                        this._timeout = null
                }, e._jQueryInterface = function (t) {
                    return this.each((function () {
                        var i = o.default(this),
                            n = i.data("bs.toast");
                        if (n || (n = new e(this, "object" == typeof t && t), i.data("bs.toast", n)), "string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError('No method named "' + t + '"');
                            n[t](this)
                        }
                    }))
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.3"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return he
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return pe
                    }
                }]), e
            }();
        o.default.fn.toast = ge._jQueryInterface,
            o.default.fn.toast.Constructor = ge,
            o.default.fn.toast.noConflict = function () {
                return o.default.fn.toast = fe, ge._jQueryInterface
            },
            e.Alert = h,
            e.Button = g,
            e.Carousel = k,
            e.Collapse = E,
            e.Dropdown = j,
            e.Modal = I,
            e.Popover = oe,
            e.Scrollspy = de,
            e.Tab = ue,
            e.Toast = ge,
            e.Tooltip = G,
            e.Util = c,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
    }(t, i(0), i(4))
}, function (e, t, i) {
    "use strict";
    i.r(t),
        function (e) {
            var i = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                n = function () {
                    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                        if (i && navigator.userAgent.indexOf(e[t]) >= 0)
                            return 1;
                    return 0
                }();
            var o = i && window.Promise ? function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, window.Promise.resolve().then((function () {
                        t = !1,
                            e()
                    })))
                }
            } : function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, setTimeout((function () {
                        t = !1,
                            e()
                    }), n))
                }
            };
            function r(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }
            function s(e, t) {
                if (1 !== e.nodeType)
                    return [];
                var i = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? i[t] : i
            }
            function a(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }
            function l(e) {
                if (!e)
                    return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = s(e),
                    i = t.overflow,
                    n = t.overflowX,
                    o = t.overflowY;
                return /(auto|scroll|overlay)/.test(i + o + n) ? e : l(a(e))
            }
            function d(e) {
                return e && e.referenceNode ? e.referenceNode : e
            }
            var c = i && !(!window.MSInputMethodContext || !document.documentMode),
                u = i && /MSIE 10/.test(navigator.userAgent);
            function f(e) {
                return 11 === e ? c : 10 === e ? u : c || u
            }
            function h(e) {
                if (!e)
                    return document.documentElement;
                for (var t = f(10) ? document.body : null, i = e.offsetParent || null; i === t && e.nextElementSibling;)
                    i = (e = e.nextElementSibling).offsetParent;
                var n = i && i.nodeName;
                return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === s(i, "position") ? h(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
            }
            function p(e) {
                return null !== e.parentNode ? p(e.parentNode) : e
            }
            function g(e, t) {
                if (!(e && e.nodeType && t && t.nodeType))
                    return document.documentElement;
                var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    n = i ? e : t,
                    o = i ? t : e,
                    r = document.createRange();
                r.setStart(n, 0),
                    r.setEnd(o, 0);
                var s,
                    a,
                    l = r.commonAncestorContainer;
                if (e !== l && t !== l || n.contains(o))
                    return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;
                var d = p(e);
                return d.host ? g(d.host, t) : g(e, p(t).host)
            }
            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    i = "top" === t ? "scrollTop" : "scrollLeft",
                    n = e.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var o = e.ownerDocument.documentElement,
                        r = e.ownerDocument.scrollingElement || o;
                    return r[i]
                }
                return e[i]
            }
            function v(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = m(t, "top"),
                    o = m(t, "left"),
                    r = i ? -1 : 1;
                return e.top += n * r, e.bottom += n * r, e.left += o * r, e.right += o * r, e
            }
            function y(e, t) {
                var i = "x" === t ? "Left" : "Top",
                    n = "Left" === i ? "Right" : "Bottom";
                return parseFloat(e["border" + i + "Width"]) + parseFloat(e["border" + n + "Width"])
            }
            function b(e, t, i, n) {
                return Math.max(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], f(10) ? parseInt(i["offset" + e]) + parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }
            function w(e) {
                var t = e.body,
                    i = e.documentElement,
                    n = f(10) && getComputedStyle(i);
                return {
                    height: b("Height", t, i, n),
                    width: b("Width", t, i, n)
                }
            }
            var _ = function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            },
                k = function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function (t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }(),
                T = function (e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                },
                x = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i)
                            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                };
            function C(e) {
                return x({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }
            function S(e) {
                var t = {};
                try {
                    if (f(10)) {
                        t = e.getBoundingClientRect();
                        var i = m(e, "top"),
                            n = m(e, "left");
                        t.top += i,
                            t.left += n,
                            t.bottom += i,
                            t.right += n
                    } else
                        t = e.getBoundingClientRect()
                } catch (e) { }
                var o = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                },
                    r = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
                    a = r.width || e.clientWidth || o.width,
                    l = r.height || e.clientHeight || o.height,
                    d = e.offsetWidth - a,
                    c = e.offsetHeight - l;
                if (d || c) {
                    var u = s(e);
                    d -= y(u, "x"),
                        c -= y(u, "y"),
                        o.width -= d,
                        o.height -= c
                }
                return C(o)
            }
            function E(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = f(10),
                    o = "HTML" === t.nodeName,
                    r = S(e),
                    a = S(t),
                    d = l(e),
                    c = s(t),
                    u = parseFloat(c.borderTopWidth),
                    h = parseFloat(c.borderLeftWidth);
                i && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var p = C({
                    top: r.top - a.top - u,
                    left: r.left - a.left - h,
                    width: r.width,
                    height: r.height
                });
                if (p.marginTop = 0, p.marginLeft = 0, !n && o) {
                    var g = parseFloat(c.marginTop),
                        m = parseFloat(c.marginLeft);
                    p.top -= u - g,
                        p.bottom -= u - g,
                        p.left -= h - m,
                        p.right -= h - m,
                        p.marginTop = g,
                        p.marginLeft = m
                }
                return (n && !i ? t.contains(d) : t === d && "BODY" !== d.nodeName) && (p = v(p, t)), p
            }
            function D(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = e.ownerDocument.documentElement,
                    n = E(e, i),
                    o = Math.max(i.clientWidth, window.innerWidth || 0),
                    r = Math.max(i.clientHeight, window.innerHeight || 0),
                    s = t ? 0 : m(i),
                    a = t ? 0 : m(i, "left"),
                    l = {
                        top: s - n.top + n.marginTop,
                        left: a - n.left + n.marginLeft,
                        width: o,
                        height: r
                    };
                return C(l)
            }
            function A(e) {
                var t = e.nodeName;
                if ("BODY" === t || "HTML" === t)
                    return !1;
                if ("fixed" === s(e, "position"))
                    return !0;
                var i = a(e);
                return !!i && A(i)
            }
            function O(e) {
                if (!e || !e.parentElement || f())
                    return document.documentElement;
                for (var t = e.parentElement; t && "none" === s(t, "transform");)
                    t = t.parentElement;
                return t || document.documentElement
            }
            function N(e, t, i, n) {
                var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    r = {
                        top: 0,
                        left: 0
                    },
                    s = o ? O(e) : g(e, d(t));
                if ("viewport" === n)
                    r = D(s, o);
                else {
                    var c = void 0;
                    "scrollParent" === n ? "BODY" === (c = l(a(t))).nodeName && (c = e.ownerDocument.documentElement) : c = "window" === n ? e.ownerDocument.documentElement : n;
                    var u = E(c, s, o);
                    if ("HTML" !== c.nodeName || A(s))
                        r = u;
                    else {
                        var f = w(e.ownerDocument),
                            h = f.height,
                            p = f.width;
                        r.top += u.top - u.marginTop,
                            r.bottom = h + u.top,
                            r.left += u.left - u.marginLeft,
                            r.right = p + u.left
                    }
                }
                var m = "number" == typeof (i = i || 0);
                return r.left += m ? i : i.left || 0, r.top += m ? i : i.top || 0, r.right -= m ? i : i.right || 0, r.bottom -= m ? i : i.bottom || 0, r
            }
            function L(e) {
                return e.width * e.height
            }
            function j(e, t, i, n, o) {
                var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto"))
                    return e;
                var s = N(i, n, r, o),
                    a = {
                        top: {
                            width: s.width,
                            height: t.top - s.top
                        },
                        right: {
                            width: s.right - t.right,
                            height: s.height
                        },
                        bottom: {
                            width: s.width,
                            height: s.bottom - t.bottom
                        },
                        left: {
                            width: t.left - s.left,
                            height: s.height
                        }
                    },
                    l = Object.keys(a).map((function (e) {
                        return x({
                            key: e
                        }, a[e], {
                            area: L(a[e])
                        })
                    })).sort((function (e, t) {
                        return t.area - e.area
                    })),
                    d = l.filter((function (e) {
                        var t = e.width,
                            n = e.height;
                        return t >= i.clientWidth && n >= i.clientHeight
                    })),
                    c = d.length > 0 ? d[0].key : l[0].key,
                    u = e.split("-")[1];
                return c + (u ? "-" + u : "")
            }
            function M(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    o = n ? O(t) : g(t, d(i));
                return E(i, o, n)
            }
            function $(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    i = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    n = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + n,
                    height: e.offsetHeight + i
                }
            }
            function H(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, (function (e) {
                    return t[e]
                }))
            }
            function I(e, t, i) {
                i = i.split("-")[0];
                var n = $(e),
                    o = {
                        width: n.width,
                        height: n.height
                    },
                    r = -1 !== ["right", "left"].indexOf(i),
                    s = r ? "top" : "left",
                    a = r ? "left" : "top",
                    l = r ? "height" : "width",
                    d = r ? "width" : "height";
                return o[s] = t[s] + t[l] / 2 - n[l] / 2, o[a] = i === a ? t[a] - n[d] : t[H(a)], o
            }
            function P(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }
            function q(e, t, i) {
                return (void 0 === i ? e : e.slice(0, function (e, t, i) {
                    if (Array.prototype.findIndex)
                        return e.findIndex((function (e) {
                            return e[t] === i
                        }));
                    var n = P(e, (function (e) {
                        return e[t] === i
                    }));
                    return e.indexOf(n)
                }(e, "name", i))).forEach((function (e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var i = e.function || e.fn;
                    e.enabled && r(i) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = i(t, e))
                })), t
            }
            function F() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = M(this.state, this.popper, this.reference, this.options.positionFixed),
                        e.placement = j(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        e.originalPlacement = e.placement,
                        e.positionFixed = this.options.positionFixed,
                        e.offsets.popper = I(this.popper, e.offsets.reference, e.placement),
                        e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                        e = q(this.modifiers, e),
                        this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                }
            }
            function B(e, t) {
                return e.some((function (e) {
                    var i = e.name;
                    return e.enabled && i === t
                }))
            }
            function W(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = o ? "" + o + i : e;
                    if (void 0 !== document.body.style[r])
                        return r
                }
                return null
            }
            function R() {
                return this.state.isDestroyed = !0, B(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[W("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }
            function z(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }
            function V(e, t, i, n) {
                i.updateBound = n,
                    z(e).addEventListener("resize", i.updateBound, {
                        passive: !0
                    });
                var o = l(e);
                return function e(t, i, n, o) {
                    var r = "BODY" === t.nodeName,
                        s = r ? t.ownerDocument.defaultView : t;
                    s.addEventListener(i, n, {
                        passive: !0
                    }),
                        r || e(l(s.parentNode), i, n, o),
                        o.push(s)
                }(o, "scroll", i.updateBound, i.scrollParents), i.scrollElement = o, i.eventsEnabled = !0, i
            }
            function U() {
                this.state.eventsEnabled || (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate))
            }
            function Y() {
                var e,
                    t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, z(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
                    e.removeEventListener("scroll", t.updateBound)
                })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
            }
            function X(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }
            function Q(e, t) {
                Object.keys(t).forEach((function (i) {
                    var n = "";
                    -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && X(t[i]) && (n = "px"),
                        e.style[i] = t[i] + n
                }))
            }
            var K = i && /Firefox/i.test(navigator.userAgent);
            function G(e, t, i) {
                var n = P(e, (function (e) {
                    return e.name === t
                })),
                    o = !!n && e.some((function (e) {
                        return e.name === i && e.enabled && e.order < n.order
                    }));
                if (!o) {
                    var r = "`" + t + "`",
                        s = "`" + i + "`";
                    console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
                }
                return o
            }
            var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Z = J.slice(3);
            function ee(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = Z.indexOf(e),
                    n = Z.slice(i + 1).concat(Z.slice(0, i));
                return t ? n.reverse() : n
            }
            var te = "flip",
                ie = "clockwise",
                ne = "counterclockwise";
            function oe(e, t, i, n) {
                var o = [0, 0],
                    r = -1 !== ["right", "left"].indexOf(n),
                    s = e.split(/(\+|\-)/).map((function (e) {
                        return e.trim()
                    })),
                    a = s.indexOf(P(s, (function (e) {
                        return -1 !== e.search(/,|\s/)
                    })));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    d = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return (d = d.map((function (e, n) {
                    var o = (1 === n ? !r : r) ? "height" : "width",
                        s = !1;
                    return e.reduce((function (e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                    }), []).map((function (e) {
                        return function (e, t, i, n) {
                            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                s = o[2];
                            if (!r)
                                return e;
                            if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = i;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = n
                                }
                                return C(a)[t] / 100 * r
                            }
                            if ("vh" === s || "vw" === s) {
                                return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
                            }
                            return r
                        }(e, o, t, i)
                    }))
                }))).forEach((function (e, t) {
                    e.forEach((function (i, n) {
                        X(i) && (o[t] += i * ("-" === e[n - 1] ? -1 : 1))
                    }))
                })), o
            }
            var re = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () { },
                onUpdate: function () { },
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.placement,
                                i = t.split("-")[0],
                                n = t.split("-")[1];
                            if (n) {
                                var o = e.offsets,
                                    r = o.reference,
                                    s = o.popper,
                                    a = -1 !== ["bottom", "top"].indexOf(i),
                                    l = a ? "left" : "top",
                                    d = a ? "width" : "height",
                                    c = {
                                        start: T({}, l, r[l]),
                                        end: T({}, l, r[l] + r[d] - s[d])
                                    };
                                e.offsets.popper = x({}, s, c[n])
                            }
                            return e
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.offset,
                                n = e.placement,
                                o = e.offsets,
                                r = o.popper,
                                s = o.reference,
                                a = n.split("-")[0],
                                l = void 0;
                            return l = X(+i) ? [+i, 0] : oe(i, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.boundariesElement || h(e.instance.popper);
                            e.instance.reference === i && (i = h(i));
                            var n = W("transform"),
                                o = e.instance.popper.style,
                                r = o.top,
                                s = o.left,
                                a = o[n];
                            o.top = "",
                                o.left = "",
                                o[n] = "";
                            var l = N(e.instance.popper, e.instance.reference, t.padding, i, e.positionFixed);
                            o.top = r,
                                o.left = s,
                                o[n] = a,
                                t.boundaries = l;
                            var d = t.priority,
                                c = e.offsets.popper,
                                u = {
                                    primary: function (e) {
                                        var i = c[e];
                                        return c[e] < l[e] && !t.escapeWithReference && (i = Math.max(c[e], l[e])), T({}, e, i)
                                    },
                                    secondary: function (e) {
                                        var i = "right" === e ? "left" : "top",
                                            n = c[i];
                                        return c[e] > l[e] && !t.escapeWithReference && (n = Math.min(c[i], l[e] - ("right" === e ? c.width : c.height))), T({}, i, n)
                                    }
                                };
                            return d.forEach((function (e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                c = x({}, c, u[t](e))
                            })), e.offsets.popper = c, e
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.offsets,
                                i = t.popper,
                                n = t.reference,
                                o = e.placement.split("-")[0],
                                r = Math.floor,
                                s = -1 !== ["top", "bottom"].indexOf(o),
                                a = s ? "right" : "bottom",
                                l = s ? "left" : "top",
                                d = s ? "width" : "height";
                            return i[a] < r(n[l]) && (e.offsets.popper[l] = r(n[l]) - i[d]), i[l] > r(n[a]) && (e.offsets.popper[l] = r(n[a])), e
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (e, t) {
                            var i;
                            if (!G(e.instance.modifiers, "arrow", "keepTogether"))
                                return e;
                            var n = t.element;
                            if ("string" == typeof n) {
                                if (!(n = e.instance.popper.querySelector(n)))
                                    return e
                            } else if (!e.instance.popper.contains(n))
                                return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var o = e.placement.split("-")[0],
                                r = e.offsets,
                                a = r.popper,
                                l = r.reference,
                                d = -1 !== ["left", "right"].indexOf(o),
                                c = d ? "height" : "width",
                                u = d ? "Top" : "Left",
                                f = u.toLowerCase(),
                                h = d ? "left" : "top",
                                p = d ? "bottom" : "right",
                                g = $(n)[c];
                            l[p] - g < a[f] && (e.offsets.popper[f] -= a[f] - (l[p] - g)),
                                l[f] + g > a[p] && (e.offsets.popper[f] += l[f] + g - a[p]),
                                e.offsets.popper = C(e.offsets.popper);
                            var m = l[f] + l[c] / 2 - g / 2,
                                v = s(e.instance.popper),
                                y = parseFloat(v["margin" + u]),
                                b = parseFloat(v["border" + u + "Width"]),
                                w = m - e.offsets.popper[f] - y - b;
                            return w = Math.max(Math.min(a[c] - g, w), 0), e.arrowElement = n, e.offsets.arrow = (T(i = {}, f, Math.round(w)), T(i, h, ""), i), e
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (e, t) {
                            if (B(e.instance.modifiers, "inner"))
                                return e;
                            if (e.flipped && e.placement === e.originalPlacement)
                                return e;
                            var i = N(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                n = e.placement.split("-")[0],
                                o = H(n),
                                r = e.placement.split("-")[1] || "",
                                s = [];
                            switch (t.behavior) {
                                case te:
                                    s = [n, o];
                                    break;
                                case ie:
                                    s = ee(n);
                                    break;
                                case ne:
                                    s = ee(n, !0);
                                    break;
                                default:
                                    s = t.behavior
                            }
                            return s.forEach((function (a, l) {
                                if (n !== a || s.length === l + 1)
                                    return e;
                                n = e.placement.split("-")[0],
                                    o = H(n);
                                var d = e.offsets.popper,
                                    c = e.offsets.reference,
                                    u = Math.floor,
                                    f = "left" === n && u(d.right) > u(c.left) || "right" === n && u(d.left) < u(c.right) || "top" === n && u(d.bottom) > u(c.top) || "bottom" === n && u(d.top) < u(c.bottom),
                                    h = u(d.left) < u(i.left),
                                    p = u(d.right) > u(i.right),
                                    g = u(d.top) < u(i.top),
                                    m = u(d.bottom) > u(i.bottom),
                                    v = "left" === n && h || "right" === n && p || "top" === n && g || "bottom" === n && m,
                                    y = -1 !== ["top", "bottom"].indexOf(n),
                                    b = !!t.flipVariations && (y && "start" === r && h || y && "end" === r && p || !y && "start" === r && g || !y && "end" === r && m),
                                    w = !!t.flipVariationsByContent && (y && "start" === r && p || y && "end" === r && h || !y && "start" === r && m || !y && "end" === r && g),
                                    _ = b || w;
                                (f || v || _) && (e.flipped = !0, (f || v) && (n = s[l + 1]), _ && (r = function (e) {
                                    return "end" === e ? "start" : "start" === e ? "end" : e
                                }(r)), e.placement = n + (r ? "-" + r : ""), e.offsets.popper = x({}, e.offsets.popper, I(e.instance.popper, e.offsets.reference, e.placement)), e = q(e.instance.modifiers, e, "flip"))
                            })), e
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (e) {
                            var t = e.placement,
                                i = t.split("-")[0],
                                n = e.offsets,
                                o = n.popper,
                                r = n.reference,
                                s = -1 !== ["left", "right"].indexOf(i),
                                a = -1 === ["top", "left"].indexOf(i);
                            return o[s ? "left" : "top"] = r[i] - (a ? o[s ? "width" : "height"] : 0), e.placement = H(t), e.offsets.popper = C(o), e
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (e) {
                            if (!G(e.instance.modifiers, "hide", "preventOverflow"))
                                return e;
                            var t = e.offsets.reference,
                                i = P(e.instance.modifiers, (function (e) {
                                    return "preventOverflow" === e.name
                                })).boundaries;
                            if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                                if (!0 === e.hide)
                                    return e;
                                e.hide = !0,
                                    e.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === e.hide)
                                    return e;
                                e.hide = !1,
                                    e.attributes["x-out-of-boundaries"] = !1
                            }
                            return e
                        }
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.x,
                                n = t.y,
                                o = e.offsets.popper,
                                r = P(e.instance.modifiers, (function (e) {
                                    return "applyStyle" === e.name
                                })).gpuAcceleration;
                            void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var s = void 0 !== r ? r : t.gpuAcceleration,
                                a = h(e.instance.popper),
                                l = S(a),
                                d = {
                                    position: o.position
                                },
                                c = function (e, t) {
                                    var i = e.offsets,
                                        n = i.popper,
                                        o = i.reference,
                                        r = Math.round,
                                        s = Math.floor,
                                        a = function (e) {
                                            return e
                                        },
                                        l = r(o.width),
                                        d = r(n.width),
                                        c = -1 !== ["left", "right"].indexOf(e.placement),
                                        u = -1 !== e.placement.indexOf("-"),
                                        f = t ? c || u || l % 2 == d % 2 ? r : s : a,
                                        h = t ? r : a;
                                    return {
                                        left: f(l % 2 == 1 && d % 2 == 1 && !u && t ? n.left - 1 : n.left),
                                        top: h(n.top),
                                        bottom: h(n.bottom),
                                        right: f(n.right)
                                    }
                                }(e, window.devicePixelRatio < 2 || !K),
                                u = "bottom" === i ? "top" : "bottom",
                                f = "right" === n ? "left" : "right",
                                p = W("transform"),
                                g = void 0,
                                m = void 0;
                            if (m = "bottom" === u ? "HTML" === a.nodeName ? -a.clientHeight + c.bottom : -l.height + c.bottom : c.top, g = "right" === f ? "HTML" === a.nodeName ? -a.clientWidth + c.right : -l.width + c.right : c.left, s && p)
                                d[p] = "translate3d(" + g + "px, " + m + "px, 0)",
                                    d[u] = 0,
                                    d[f] = 0,
                                    d.willChange = "transform";
                            else {
                                var v = "bottom" === u ? -1 : 1,
                                    y = "right" === f ? -1 : 1;
                                d[u] = m * v,
                                    d[f] = g * y,
                                    d.willChange = u + ", " + f
                            }
                            var b = {
                                "x-placement": e.placement
                            };
                            return e.attributes = x({}, b, e.attributes), e.styles = x({}, d, e.styles), e.arrowStyles = x({}, e.offsets.arrow, e.arrowStyles), e
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (e) {
                            var t,
                                i;
                            return Q(e.instance.popper, e.styles), t = e.instance.popper, i = e.attributes, Object.keys(i).forEach((function (e) {
                                !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e)
                            })), e.arrowElement && Object.keys(e.arrowStyles).length && Q(e.arrowElement, e.arrowStyles), e
                        },
                        onLoad: function (e, t, i, n, o) {
                            var r = M(o, t, e, i.positionFixed),
                                s = j(i.placement, r, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                            return t.setAttribute("x-placement", s), Q(t, {
                                position: i.positionFixed ? "fixed" : "absolute"
                            }), i
                        },
                        gpuAcceleration: void 0
                    }
                }
            },
                se = function () {
                    function e(t, i) {
                        var n = this,
                            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        _(this, e),
                            this.scheduleUpdate = function () {
                                return requestAnimationFrame(n.update)
                            },
                            this.update = o(this.update.bind(this)),
                            this.options = x({}, e.Defaults, s),
                            this.state = {
                                isDestroyed: !1,
                                isCreated: !1,
                                scrollParents: []
                            },
                            this.reference = t && t.jquery ? t[0] : t,
                            this.popper = i && i.jquery ? i[0] : i,
                            this.options.modifiers = {},
                            Object.keys(x({}, e.Defaults.modifiers, s.modifiers)).forEach((function (t) {
                                n.options.modifiers[t] = x({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                            })),
                            this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
                                return x({
                                    name: e
                                }, n.options.modifiers[e])
                            })).sort((function (e, t) {
                                return e.order - t.order
                            })),
                            this.modifiers.forEach((function (e) {
                                e.enabled && r(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                            })),
                            this.update();
                        var a = this.options.eventsEnabled;
                        a && this.enableEventListeners(),
                            this.state.eventsEnabled = a
                    }
                    return k(e, [{
                        key: "update",
                        value: function () {
                            return F.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return R.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function () {
                            return U.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function () {
                            return Y.call(this)
                        }
                    }]), e
                }();
            se.Utils = ("undefined" != typeof window ? window : e).PopperUtils,
                se.placements = J,
                se.Defaults = re,
                t.default = se
        }.call(this, i(5))
}, function (e, t) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function (e, t, i) {
    var n,
        o,
        r;
    !function (s) {
        "use strict";
        o = [i(0)],
            void 0 === (r = "function" == typeof (n = function (e) {
                var t = window.Slick || {};
                (i = 0, t = function (t, n) {
                    var o,
                        r = this;
                    r.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(t),
                        appendDots: e(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function (t, i) {
                            return e('<button type="button" />').text(i + 1)
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        focusOnChange: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    },
                        r.initials = {
                            animating: !1,
                            dragging: !1,
                            autoPlayTimer: null,
                            currentDirection: 0,
                            currentLeft: null,
                            currentSlide: 0,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            scrolling: !1,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: !1,
                            slideOffset: 0,
                            swipeLeft: null,
                            swiping: !1,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: !1,
                            unslicked: !1
                        },
                        e.extend(r, r.initials),
                        r.activeBreakpoint = null,
                        r.animType = null,
                        r.animProp = null,
                        r.breakpoints = [],
                        r.breakpointSettings = [],
                        r.cssTransitions = !1,
                        r.focussed = !1,
                        r.interrupted = !1,
                        r.hidden = "hidden",
                        r.paused = !0,
                        r.positionProp = null,
                        r.respondTo = null,
                        r.rowCount = 1,
                        r.shouldClick = !0,
                        r.$slider = e(t),
                        r.$slidesCache = null,
                        r.transformType = null,
                        r.transitionType = null,
                        r.visibilityChange = "visibilitychange",
                        r.windowWidth = 0,
                        r.windowTimer = null,
                        o = e(t).data("slick") || {},
                        r.options = e.extend({}, r.defaults, n, o),
                        r.currentSlide = r.options.initialSlide,
                        r.originalSettings = r.options,
                        void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"),
                        r.autoPlay = e.proxy(r.autoPlay, r),
                        r.autoPlayClear = e.proxy(r.autoPlayClear, r),
                        r.autoPlayIterator = e.proxy(r.autoPlayIterator, r),
                        r.changeSlide = e.proxy(r.changeSlide, r),
                        r.clickHandler = e.proxy(r.clickHandler, r),
                        r.selectHandler = e.proxy(r.selectHandler, r),
                        r.setPosition = e.proxy(r.setPosition, r),
                        r.swipeHandler = e.proxy(r.swipeHandler, r),
                        r.dragHandler = e.proxy(r.dragHandler, r),
                        r.keyHandler = e.proxy(r.keyHandler, r),
                        r.instanceUid = i++,
                        r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                        r.registerBreakpoints(),
                        r.init(!0)
                }).prototype.activateADA = function () {
                    this.$slideTrack.find(".slick-active").attr({
                        "aria-hidden": "false"
                    }).find("a, input, button, select").attr({
                        tabindex: "0"
                    })
                },
                    t.prototype.addSlide = t.prototype.slickAdd = function (t, i, n) {
                        var o = this;
                        if ("boolean" == typeof i)
                            n = i,
                                i = null;
                        else if (i < 0 || i >= o.slideCount)
                            return !1;
                        o.unload(),
                            "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack),
                            o.$slides = o.$slideTrack.children(this.options.slide),
                            o.$slideTrack.children(this.options.slide).detach(),
                            o.$slideTrack.append(o.$slides),
                            o.$slides.each((function (t, i) {
                                e(i).attr("data-slick-index", t)
                            })),
                            o.$slidesCache = o.$slides,
                            o.reinit()
                    },
                    t.prototype.animateHeight = function () {
                        var e = this;
                        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                            e.$list.animate({
                                height: t
                            }, e.options.speed)
                        }
                    },
                    t.prototype.animateSlide = function (t, i) {
                        var n = {},
                            o = this;
                        o.animateHeight(),
                            !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
                            !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                                left: t
                            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                                top: t
                            }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                                animStart: o.currentLeft
                            }).animate({
                                animStart: t
                            }, {
                                duration: o.options.speed,
                                easing: o.options.easing,
                                step: function (e) {
                                    e = Math.ceil(e),
                                        !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
                                },
                                complete: function () {
                                    i && i.call()
                                }
                            })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout((function () {
                                o.disableTransition(),
                                    i.call()
                            }), o.options.speed))
                    },
                    t.prototype.getNavTarget = function () {
                        var t = this.options.asNavFor;
                        return t && null !== t && (t = e(t).not(this.$slider)), t
                    },
                    t.prototype.asNavFor = function (t) {
                        var i = this.getNavTarget();
                        null !== i && "object" == typeof i && i.each((function () {
                            var i = e(this).slick("getSlick");
                            i.unslicked || i.slideHandler(t, !0)
                        }))
                    },
                    t.prototype.applyTransition = function (e) {
                        var t = this,
                            i = {};
                        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
                            !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
                    },
                    t.prototype.autoPlay = function () {
                        var e = this;
                        e.autoPlayClear(),
                            e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
                    },
                    t.prototype.autoPlayClear = function () {
                        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
                    },
                    t.prototype.autoPlayIterator = function () {
                        var e = this,
                            t = e.currentSlide + e.options.slidesToScroll;
                        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
                    },
                    t.prototype.buildArrows = function () {
                        var t = this;
                        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                            "aria-disabled": "true",
                            tabindex: "-1"
                        }))
                    },
                    t.prototype.buildDots = function () {
                        var t,
                            i,
                            n = this;
                        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                            for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1)
                                i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
                            n.$dots = i.appendTo(n.options.appendDots),
                                n.$dots.find("li").first().addClass("slick-active")
                        }
                    },
                    t.prototype.buildOut = function () {
                        var t = this;
                        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                            t.slideCount = t.$slides.length,
                            t.$slides.each((function (t, i) {
                                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
                            })),
                            t.$slider.addClass("slick-slider"),
                            t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
                            t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                            t.$slideTrack.css("opacity", 0),
                            !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1),
                            e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                            t.setupInfinite(),
                            t.buildArrows(),
                            t.buildDots(),
                            t.updateDots(),
                            t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                            !0 === t.options.draggable && t.$list.addClass("draggable")
                    },
                    t.prototype.buildRows = function () {
                        var e,
                            t,
                            i,
                            n,
                            o,
                            r,
                            s,
                            a = this;
                        if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
                            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                                var l = document.createElement("div");
                                for (t = 0; t < a.options.rows; t++) {
                                    var d = document.createElement("div");
                                    for (i = 0; i < a.options.slidesPerRow; i++) {
                                        var c = e * s + (t * a.options.slidesPerRow + i);
                                        r.get(c) && d.appendChild(r.get(c))
                                    }
                                    l.appendChild(d)
                                }
                                n.appendChild(l)
                            }
                            a.$slider.empty().append(n),
                                a.$slider.children().children().children().css({
                                    width: 100 / a.options.slidesPerRow + "%",
                                    display: "inline-block"
                                })
                        }
                    },
                    t.prototype.checkResponsive = function (t, i) {
                        var n,
                            o,
                            r,
                            s = this,
                            a = !1,
                            l = s.$slider.width(),
                            d = window.innerWidth || e(window).width();
                        if ("window" === s.respondTo ? r = d : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(d, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                            for (n in o = null, s.breakpoints)
                                s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
                            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o),
                                t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
                        }
                    },
                    t.prototype.changeSlide = function (t, i) {
                        var n,
                            o,
                            r = this,
                            s = e(t.currentTarget);
                        switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                            case "previous":
                                o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n,
                                    r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                                break;
                            case "next":
                                o = 0 === n ? r.options.slidesToScroll : n,
                                    r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                                break;
                            case "index":
                                var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                                r.slideHandler(r.checkNavigable(a), !1, i),
                                    s.children().trigger("focus");
                                break;
                            default:
                                return
                        }
                    },
                    t.prototype.checkNavigable = function (e) {
                        var t,
                            i;
                        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1])
                            e = t[t.length - 1];
                        else
                            for (var n in t) {
                                if (e < t[n]) {
                                    e = i;
                                    break
                                }
                                i = t[n]
                            }
                        return e
                    },
                    t.prototype.cleanUpEvents = function () {
                        var t = this;
                        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
                            t.$slider.off("focus.slick blur.slick"),
                            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                            t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                            t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                            t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                            t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                            t.$list.off("click.slick", t.clickHandler),
                            e(document).off(t.visibilityChange, t.visibility),
                            t.cleanUpSlideEvents(),
                            !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                            !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                            e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                            e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                            e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                            e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
                    },
                    t.prototype.cleanUpSlideEvents = function () {
                        var t = this;
                        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                            t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                    },
                    t.prototype.cleanUpRows = function () {
                        var e,
                            t = this;
                        t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
                    },
                    t.prototype.clickHandler = function (e) {
                        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
                    },
                    t.prototype.destroy = function (t) {
                        var i = this;
                        i.autoPlayClear(),
                            i.touchObject = {},
                            i.cleanUpEvents(),
                            e(".slick-cloned", i.$slider).detach(),
                            i.$dots && i.$dots.remove(),
                            i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
                            i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
                            i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function () {
                                e(this).attr("style", e(this).data("originalStyling"))
                            })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)),
                            i.cleanUpRows(),
                            i.$slider.removeClass("slick-slider"),
                            i.$slider.removeClass("slick-initialized"),
                            i.$slider.removeClass("slick-dotted"),
                            i.unslicked = !0,
                            t || i.$slider.trigger("destroy", [i])
                    },
                    t.prototype.disableTransition = function (e) {
                        var t = this,
                            i = {};
                        i[t.transitionType] = "",
                            !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
                    },
                    t.prototype.fadeSlide = function (e, t) {
                        var i = this;
                        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                            zIndex: i.options.zIndex
                        }), i.$slides.eq(e).animate({
                            opacity: 1
                        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                            opacity: 1,
                            zIndex: i.options.zIndex
                        }), t && setTimeout((function () {
                            i.disableTransition(e),
                                t.call()
                        }), i.options.speed))
                    },
                    t.prototype.fadeSlideOut = function (e) {
                        var t = this;
                        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                            opacity: 0,
                            zIndex: t.options.zIndex - 2
                        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                            opacity: 0,
                            zIndex: t.options.zIndex - 2
                        }))
                    },
                    t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
                        var t = this;
                        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
                    },
                    t.prototype.focusHandler = function () {
                        var t = this;
                        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function (i) {
                            i.stopImmediatePropagation();
                            var n = e(this);
                            setTimeout((function () {
                                t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
                            }), 0)
                        }))
                    },
                    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
                        return this.currentSlide
                    },
                    t.prototype.getDotCount = function () {
                        var e = this,
                            t = 0,
                            i = 0,
                            n = 0;
                        if (!0 === e.options.infinite)
                            if (e.slideCount <= e.options.slidesToShow)
                                ++n;
                            else
                                for (; t < e.slideCount;)
                                    ++n,
                                        t = i + e.options.slidesToScroll,
                                        i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                        else if (!0 === e.options.centerMode)
                            n = e.slideCount;
                        else if (e.options.asNavFor)
                            for (; t < e.slideCount;)
                                ++n,
                                    t = i + e.options.slidesToScroll,
                                    i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                        else
                            n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                        return n - 1
                    },
                    t.prototype.getLeft = function (e) {
                        var t,
                            i,
                            n,
                            o,
                            r = this,
                            s = 0;
                        return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = i * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
                    },
                    t.prototype.getOption = t.prototype.slickGetOption = function (e) {
                        return this.options[e]
                    },
                    t.prototype.getNavigableIndexes = function () {
                        var e,
                            t = this,
                            i = 0,
                            n = 0,
                            o = [];
                        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;)
                            o.push(i),
                                i = n + t.options.slidesToScroll,
                                n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                        return o
                    },
                    t.prototype.getSlick = function () {
                        return this
                    },
                    t.prototype.getSlideCount = function () {
                        var t,
                            i,
                            n = this;
                        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function (o, r) {
                            if (r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * n.swipeLeft)
                                return t = r, !1
                        })), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
                    },
                    t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
                        this.changeSlide({
                            data: {
                                message: "index",
                                index: parseInt(e)
                            }
                        }, t)
                    },
                    t.prototype.init = function (t) {
                        var i = this;
                        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()),
                            t && i.$slider.trigger("init", [i]),
                            !0 === i.options.accessibility && i.initADA(),
                            i.options.autoplay && (i.paused = !1, i.autoPlay())
                    },
                    t.prototype.initADA = function () {
                        var t = this,
                            i = Math.ceil(t.slideCount / t.options.slidesToShow),
                            n = t.getNavigableIndexes().filter((function (e) {
                                return e >= 0 && e < t.slideCount
                            }));
                        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                            "aria-hidden": "true",
                            tabindex: "-1"
                        }).find("a, input, button, select").attr({
                            tabindex: "-1"
                        }),
                            null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function (i) {
                                var o = n.indexOf(i);
                                if (e(this).attr({
                                    role: "tabpanel",
                                    id: "slick-slide" + t.instanceUid + i,
                                    tabindex: -1
                                }), -1 !== o) {
                                    var r = "slick-slide-control" + t.instanceUid + o;
                                    e("#" + r).length && e(this).attr({
                                        "aria-describedby": r
                                    })
                                }
                            })), t.$dots.attr("role", "tablist").find("li").each((function (o) {
                                var r = n[o];
                                e(this).attr({
                                    role: "presentation"
                                }),
                                    e(this).find("button").first().attr({
                                        role: "tab",
                                        id: "slick-slide-control" + t.instanceUid + o,
                                        "aria-controls": "slick-slide" + t.instanceUid + r,
                                        "aria-label": o + 1 + " of " + i,
                                        "aria-selected": null,
                                        tabindex: "-1"
                                    })
                            })).eq(t.currentSlide).find("button").attr({
                                "aria-selected": "true",
                                tabindex: "0"
                            }).end());
                        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)
                            t.options.focusOnChange ? t.$slides.eq(o).attr({
                                tabindex: "0"
                            }) : t.$slides.eq(o).removeAttr("tabindex");
                        t.activateADA()
                    },
                    t.prototype.initArrowEvents = function () {
                        var e = this;
                        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                            message: "previous"
                        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                            message: "next"
                        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
                    },
                    t.prototype.initDotEvents = function () {
                        var t = this;
                        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                            message: "index"
                        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
                            !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                    },
                    t.prototype.initSlideEvents = function () {
                        var t = this;
                        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
                    },
                    t.prototype.initializeEvents = function () {
                        var t = this;
                        t.initArrowEvents(),
                            t.initDotEvents(),
                            t.initSlideEvents(),
                            t.$list.on("touchstart.slick mousedown.slick", {
                                action: "start"
                            }, t.swipeHandler),
                            t.$list.on("touchmove.slick mousemove.slick", {
                                action: "move"
                            }, t.swipeHandler),
                            t.$list.on("touchend.slick mouseup.slick", {
                                action: "end"
                            }, t.swipeHandler),
                            t.$list.on("touchcancel.slick mouseleave.slick", {
                                action: "end"
                            }, t.swipeHandler),
                            t.$list.on("click.slick", t.clickHandler),
                            e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                            !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                            !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                            e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                            e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
                            e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                            e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                            e(t.setPosition)
                    },
                    t.prototype.initUI = function () {
                        var e = this;
                        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()),
                            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
                    },
                    t.prototype.keyHandler = function (e) {
                        var t = this;
                        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                            data: {
                                message: !0 === t.options.rtl ? "next" : "previous"
                            }
                        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                            data: {
                                message: !0 === t.options.rtl ? "previous" : "next"
                            }
                        }))
                    },
                    t.prototype.lazyLoad = function () {
                        var t,
                            i,
                            n,
                            o = this;
                        function r(t) {
                            e("img[data-lazy]", t).each((function () {
                                var t = e(this),
                                    i = e(this).attr("data-lazy"),
                                    n = e(this).attr("data-srcset"),
                                    r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                                    s = document.createElement("img");
                                s.onload = function () {
                                    t.animate({
                                        opacity: 0
                                    }, 100, (function () {
                                        n && (t.attr("srcset", n), r && t.attr("sizes", r)),
                                            t.attr("src", i).animate({
                                                opacity: 1
                                            }, 200, (function () {
                                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                            })),
                                            o.$slider.trigger("lazyLoaded", [o, t, i])
                                    }))
                                },
                                    s.onerror = function () {
                                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                            o.$slider.trigger("lazyLoadError", [o, t, i])
                                    },
                                    s.src = i
                            }))
                        }
                        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (i > 0 && i--, n <= o.slideCount && n++)), t = o.$slider.find(".slick-slide").slice(i, n), "anticipated" === o.options.lazyLoad)
                            for (var s = i - 1, a = n, l = o.$slider.find(".slick-slide"), d = 0; d < o.options.slidesToScroll; d++)
                                s < 0 && (s = o.slideCount - 1),
                                    t = (t = t.add(l.eq(s))).add(l.eq(a)),
                                    s--,
                                    a++;
                        r(t),
                            o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
                    },
                    t.prototype.loadSlider = function () {
                        var e = this;
                        e.setPosition(),
                            e.$slideTrack.css({
                                opacity: 1
                            }),
                            e.$slider.removeClass("slick-loading"),
                            e.initUI(),
                            "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
                    },
                    t.prototype.next = t.prototype.slickNext = function () {
                        this.changeSlide({
                            data: {
                                message: "next"
                            }
                        })
                    },
                    t.prototype.orientationChange = function () {
                        this.checkResponsive(),
                            this.setPosition()
                    },
                    t.prototype.pause = t.prototype.slickPause = function () {
                        this.autoPlayClear(),
                            this.paused = !0
                    },
                    t.prototype.play = t.prototype.slickPlay = function () {
                        var e = this;
                        e.autoPlay(),
                            e.options.autoplay = !0,
                            e.paused = !1,
                            e.focussed = !1,
                            e.interrupted = !1
                    },
                    t.prototype.postSlide = function (t) {
                        var i = this;
                        i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
                    },
                    t.prototype.prev = t.prototype.slickPrev = function () {
                        this.changeSlide({
                            data: {
                                message: "previous"
                            }
                        })
                    },
                    t.prototype.preventDefault = function (e) {
                        e.preventDefault()
                    },
                    t.prototype.progressiveLazyLoad = function (t) {
                        t = t || 1;
                        var i,
                            n,
                            o,
                            r,
                            s,
                            a = this,
                            l = e("img[data-lazy]", a.$slider);
                        l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), r = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
                            o && (i.attr("srcset", o), r && i.attr("sizes", r)),
                                i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                                !0 === a.options.adaptiveHeight && a.setPosition(),
                                a.$slider.trigger("lazyLoaded", [a, i, n]),
                                a.progressiveLazyLoad()
                        }, s.onerror = function () {
                            t < 3 ? setTimeout((function () {
                                a.progressiveLazyLoad(t + 1)
                            }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
                        }, s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
                    },
                    t.prototype.refresh = function (t) {
                        var i,
                            n,
                            o = this;
                        n = o.slideCount - o.options.slidesToShow,
                            !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
                            o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
                            i = o.currentSlide,
                            o.destroy(!0),
                            e.extend(o, o.initials, {
                                currentSlide: i
                            }),
                            o.init(),
                            t || o.changeSlide({
                                data: {
                                    message: "index",
                                    index: i
                                }
                            }, !1)
                    },
                    t.prototype.registerBreakpoints = function () {
                        var t,
                            i,
                            n,
                            o = this,
                            r = o.options.responsive || null;
                        if ("array" === e.type(r) && r.length) {
                            for (t in o.respondTo = o.options.respondTo || "window", r)
                                if (n = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                                    for (i = r[t].breakpoint; n >= 0;)
                                        o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1),
                                            n--;
                                    o.breakpoints.push(i),
                                        o.breakpointSettings[i] = r[t].settings
                                }
                            o.breakpoints.sort((function (e, t) {
                                return o.options.mobileFirst ? e - t : t - e
                            }))
                        }
                    },
                    t.prototype.reinit = function () {
                        var t = this;
                        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
                            t.slideCount = t.$slides.length,
                            t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                            t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                            t.registerBreakpoints(),
                            t.setProps(),
                            t.setupInfinite(),
                            t.buildArrows(),
                            t.updateArrows(),
                            t.initArrowEvents(),
                            t.buildDots(),
                            t.updateDots(),
                            t.initDotEvents(),
                            t.cleanUpSlideEvents(),
                            t.initSlideEvents(),
                            t.checkResponsive(!1, !0),
                            !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                            t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                            t.setPosition(),
                            t.focusHandler(),
                            t.paused = !t.options.autoplay,
                            t.autoPlay(),
                            t.$slider.trigger("reInit", [t])
                    },
                    t.prototype.resize = function () {
                        var t = this;
                        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function () {
                            t.windowWidth = e(window).width(),
                                t.checkResponsive(),
                                t.unslicked || t.setPosition()
                        }), 50))
                    },
                    t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, i) {
                        var n = this;
                        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
                            return !1;
                        n.unload(),
                            !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
                            n.$slides = n.$slideTrack.children(this.options.slide),
                            n.$slideTrack.children(this.options.slide).detach(),
                            n.$slideTrack.append(n.$slides),
                            n.$slidesCache = n.$slides,
                            n.reinit()
                    },
                    t.prototype.setCSS = function (e) {
                        var t,
                            i,
                            n = this,
                            o = {};
                        !0 === n.options.rtl && (e = -e),
                            t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
                            i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px",
                            o[n.positionProp] = e,
                            !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
                    },
                    t.prototype.setDimensions = function () {
                        var e = this;
                        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                            padding: "0px " + e.options.centerPadding
                        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                            padding: e.options.centerPadding + " 0px"
                        })),
                            e.listWidth = e.$list.width(),
                            e.listHeight = e.$list.height(),
                            !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
                    },
                    t.prototype.setFade = function () {
                        var t,
                            i = this;
                        i.$slides.each((function (n, o) {
                            t = i.slideWidth * n * -1,
                                !0 === i.options.rtl ? e(o).css({
                                    position: "relative",
                                    right: t,
                                    top: 0,
                                    zIndex: i.options.zIndex - 2,
                                    opacity: 0
                                }) : e(o).css({
                                    position: "relative",
                                    left: t,
                                    top: 0,
                                    zIndex: i.options.zIndex - 2,
                                    opacity: 0
                                })
                        })),
                            i.$slides.eq(i.currentSlide).css({
                                zIndex: i.options.zIndex - 1,
                                opacity: 1
                            })
                    },
                    t.prototype.setHeight = function () {
                        var e = this;
                        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                            e.$list.css("height", t)
                        }
                    },
                    t.prototype.setOption = t.prototype.slickSetOption = function () {
                        var t,
                            i,
                            n,
                            o,
                            r,
                            s = this,
                            a = !1;
                        if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r)
                            s.options[n] = o;
                        else if ("multiple" === r)
                            e.each(n, (function (e, t) {
                                s.options[e] = t
                            }));
                        else if ("responsive" === r)
                            for (i in o)
                                if ("array" !== e.type(s.options.responsive))
                                    s.options.responsive = [o[i]];
                                else {
                                    for (t = s.options.responsive.length - 1; t >= 0;)
                                        s.options.responsive[t].breakpoint === o[i].breakpoint && s.options.responsive.splice(t, 1),
                                            t--;
                                    s.options.responsive.push(o[i])
                                }
                        a && (s.unload(), s.reinit())
                    },
                    t.prototype.setPosition = function () {
                        var e = this;
                        e.setDimensions(),
                            e.setHeight(),
                            !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
                            e.$slider.trigger("setPosition", [e])
                    },
                    t.prototype.setProps = function () {
                        var e = this,
                            t = document.body.style;
                        e.positionProp = !0 === e.options.vertical ? "top" : "left",
                            "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                            void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
                            e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
                            void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                            void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                            void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                            void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)),
                            void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"),
                            e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
                    },
                    t.prototype.setSlideClasses = function (e) {
                        var t,
                            i,
                            n,
                            o,
                            r = this;
                        if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                            t = Math.floor(r.options.slidesToShow / 2),
                                !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1 + s, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")),
                                r.$slides.eq(e).addClass("slick-center")
                        } else
                            e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
                    },
                    t.prototype.setupInfinite = function () {
                        var t,
                            i,
                            n,
                            o = this;
                        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
                            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1)
                                i = t - 1,
                                    e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                            for (t = 0; t < n + o.slideCount; t += 1)
                                i = t,
                                    e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                            o.$slideTrack.find(".slick-cloned").find("[id]").each((function () {
                                e(this).attr("id", "")
                            }))
                        }
                    },
                    t.prototype.interrupt = function (e) {
                        e || this.autoPlay(),
                            this.interrupted = e
                    },
                    t.prototype.selectHandler = function (t) {
                        var i = this,
                            n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                            o = parseInt(n.attr("data-slick-index"));
                        o || (o = 0),
                            i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
                    },
                    t.prototype.slideHandler = function (e, t, i) {
                        var n,
                            o,
                            r,
                            s,
                            a,
                            l,
                            d = this;
                        if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
                            if (!1 === t && d.asNavFor(e), n = e, a = d.getLeft(n), s = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll))
                                !1 === d.options.fade && (n = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(s, (function () {
                                    d.postSlide(n)
                                })) : d.postSlide(n));
                            else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll))
                                !1 === d.options.fade && (n = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(s, (function () {
                                    d.postSlide(n)
                                })) : d.postSlide(n));
                            else {
                                if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = n < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = (l = d.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade)
                                    return !0 !== i ? (d.fadeSlideOut(r), d.fadeSlide(o, (function () {
                                        d.postSlide(o)
                                    }))) : d.postSlide(o), void d.animateHeight();
                                !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(a, (function () {
                                    d.postSlide(o)
                                })) : d.postSlide(o)
                            }
                    },
                    t.prototype.startLoad = function () {
                        var e = this;
                        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
                            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                            e.$slider.addClass("slick-loading")
                    },
                    t.prototype.swipeDirection = function () {
                        var e,
                            t,
                            i,
                            n,
                            o = this;
                        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 || n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
                    },
                    t.prototype.swipeEnd = function (e) {
                        var t,
                            i,
                            n = this;
                        if (n.dragging = !1, n.swiping = !1, n.scrolling)
                            return n.scrolling = !1, !1;
                        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX)
                            return !1;
                        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                            switch (i = n.swipeDirection()) {
                                case "left":
                                case "down":
                                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                                        n.currentDirection = 0;
                                    break;
                                case "right":
                                case "up":
                                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                                        n.currentDirection = 1
                            }
                            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
                        } else
                            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
                    },
                    t.prototype.swipeHandler = function (e) {
                        var t = this;
                        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
                            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                                case "start":
                                    t.swipeStart(e);
                                    break;
                                case "move":
                                    t.swipeMove(e);
                                    break;
                                case "end":
                                    t.swipeEnd(e)
                            }
                    },
                    t.prototype.swipeMove = function (e) {
                        var t,
                            i,
                            n,
                            o,
                            r,
                            s,
                            a = this;
                        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
                    },
                    t.prototype.swipeStart = function (e) {
                        var t,
                            i = this;
                        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)
                            return i.touchObject = {}, !1;
                        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                            i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
                            i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
                            i.dragging = !0
                    },
                    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
                        var e = this;
                        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
                    },
                    t.prototype.unload = function () {
                        var t = this;
                        e(".slick-cloned", t.$slider).remove(),
                            t.$dots && t.$dots.remove(),
                            t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                            t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                            t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                    },
                    t.prototype.unslick = function (e) {
                        var t = this;
                        t.$slider.trigger("unslick", [t, e]),
                            t.destroy()
                    },
                    t.prototype.updateArrows = function () {
                        var e = this;
                        Math.floor(e.options.slidesToShow / 2),
                            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                    },
                    t.prototype.updateDots = function () {
                        var e = this;
                        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
                    },
                    t.prototype.visibility = function () {
                        var e = this;
                        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
                    },
                    e.fn.slick = function () {
                        var e,
                            i,
                            n = this,
                            o = arguments[0],
                            r = Array.prototype.slice.call(arguments, 1),
                            s = n.length;
                        for (e = 0; e < s; e++)
                            if ("object" == typeof o || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, r), void 0 !== i)
                                return i;
                        return n
                    };
                var i
            }) ? n.apply(t, o) : n) || (e.exports = r)
    }()
}, function (e, t, i) {
    var n,
        o,
        r;
    o = [i(8)],
        void 0 === (r = "function" == typeof (n = function (e) {
            "use strict";
            var t,
                i = (t = e) && t.__esModule ? t : {
                    default: t
                },
                n = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i)
                            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                };
            (function () {
                if ("function" == typeof window.CustomEvent)
                    return !1;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
                }
                e.prototype = window.Event.prototype,
                    window.CustomEvent = e
            })(),
                window.utils = i.default,
                window.lgData = {
                    uid: 0
                },
                window.lgModules = {};
            var o = {
                mode: "lg-slide",
                cssEasing: "ease",
                easing: "linear",
                speed: 600,
                height: "100%",
                width: "100%",
                addClass: "",
                startClass: "lg-start-zoom",
                backdropDuration: 150,
                hideBarsDelay: 6e3,
                useLeft: !1,
                ariaLabelledby: "",
                ariaDescribedby: "",
                closable: !0,
                loop: !0,
                escKey: !0,
                keyPress: !0,
                controls: !0,
                slideEndAnimatoin: !0,
                hideControlOnEnd: !1,
                mousewheel: !1,
                getCaptionFromTitleOrAlt: !0,
                appendSubHtmlTo: ".lg-sub-html",
                subHtmlSelectorRelative: !1,
                preload: 1,
                showAfterLoad: !0,
                selector: "",
                selectWithin: "",
                nextHtml: "",
                prevHtml: "",
                index: !1,
                iframeMaxWidth: "100%",
                download: !0,
                counter: !0,
                appendCounterTo: ".lg-toolbar",
                swipeThreshold: 50,
                enableSwipe: !0,
                enableDrag: !0,
                dynamic: !1,
                dynamicEl: [],
                galleryId: 1,
                supportLegacyBrowser: !0
            };
            function r(e, t) {
                if (this.el = e, this.s = n({}, o, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)
                    throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.items = [], this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children, this.___slide = "", this.outer = "", this.init(), this
            }
            r.prototype.init = function () {
                var e = this;
                e.s.preload > e.items.length && (e.s.preload = e.items.length);
                var t = window.location.hash;
                if (t.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(t.split("&slide=")[1], 10), i.default.addClass(document.body, "lg-from-hash"), i.default.hasClass(document.body, "lg-on") || (i.default.addClass(document.body, "lg-on"), setTimeout((function () {
                    e.build(e.index)
                })))), e.s.dynamic)
                    i.default.trigger(this.el, "onBeforeOpen"),
                        e.index = e.s.index || 0,
                        i.default.hasClass(document.body, "lg-on") || (i.default.addClass(document.body, "lg-on"), setTimeout((function () {
                            e.build(e.index)
                        })));
                else
                    for (var n = 0; n < e.items.length; n++)
                        !function (t) {
                            i.default.on(e.items[t], "click.lgcustom", (function (n) {
                                n.preventDefault(),
                                    i.default.trigger(e.el, "onBeforeOpen"),
                                    e.index = e.s.index || t,
                                    i.default.hasClass(document.body, "lg-on") || (e.build(e.index), i.default.addClass(document.body, "lg-on"))
                            }))
                        }(n)
            },
                r.prototype.build = function (e) {
                    var t = this;
                    for (var n in t.structure(), window.lgModules)
                        t.modules[n] = new window.lgModules[n](t.el);
                    if (t.slide(e, !1, !1), t.s.keyPress && t.keyPress(), t.items.length > 1 && (t.arrow(), setTimeout((function () {
                        t.enableDrag(),
                            t.enableSwipe()
                    }), 50), t.s.mousewheel && t.mousewheel()), t.counter(), t.closeGallery(), i.default.trigger(t.el, "onAfterOpen"), t.s.hideBarsDelay > 0) {
                        var o = setTimeout((function () {
                            i.default.addClass(t.outer, "lg-hide-items")
                        }), t.s.hideBarsDelay);
                        i.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", (function () {
                            clearTimeout(o),
                                i.default.removeClass(t.outer, "lg-hide-items"),
                                clearTimeout(t.hideBartimeout),
                                t.hideBartimeout = setTimeout((function () {
                                    i.default.addClass(t.outer, "lg-hide-items")
                                }), t.s.hideBarsDelay)
                        }))
                    }
                },
                r.prototype.structure = function () {
                    var e,
                        t = "",
                        n = "",
                        o = 0,
                        r = "",
                        s = this;
                    for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), i.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"), o = 0; o < this.items.length; o++)
                        t += '<div class="lg-item"></div>';
                    if (this.s.controls && this.items.length > 1 && (n = '<div class="lg-actions"><button type="button" aria-label="Previous slide" class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button type="button" aria-label="Next slide" class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (r = '<div role="status" aria-live="polite" class="lg-sub-html"></div>'), e = '<div tabindex="-1" aria-modal="true" ' + (this.s.ariaLabelledby ? 'aria-labelledby="' + this.s.ariaLabelledby + '"' : "") + " " + (this.s.ariaDescribedby ? 'aria-describedby="' + this.s.ariaDescribedby + '"' : "") + ' role="dialog" class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + t + '</div><div class="lg-toolbar lg-group"><button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button></div>' + n + r + "</div></div>", document.body.insertAdjacentHTML("beforeend", e), this.outer = document.querySelector(".lg-outer"), this.outer.focus(), this.___slide = this.outer.querySelectorAll(".lg-item"), this.s.useLeft ? (i.default.addClass(this.outer, "lg-use-left"), this.s.mode = "lg-slide") : i.default.addClass(this.outer, "lg-use-css3"), s.setTop(), i.default.on(window, "resize.lg orientationchange.lg", (function () {
                        setTimeout((function () {
                            s.setTop()
                        }), 100)
                    })), i.default.addClass(this.___slide[this.index], "lg-current"), this.doCss() ? i.default.addClass(this.outer, "lg-css3") : (i.default.addClass(this.outer, "lg-css"), this.s.speed = 0), i.default.addClass(this.outer, this.s.mode), this.s.enableDrag && this.items.length > 1 && i.default.addClass(this.outer, "lg-grab"), this.s.showAfterLoad && i.default.addClass(this.outer, "lg-show-after-load"), this.doCss()) {
                        var a = this.outer.querySelector(".lg-inner");
                        i.default.setVendor(a, "TransitionTimingFunction", this.s.cssEasing),
                            i.default.setVendor(a, "TransitionDuration", this.s.speed + "ms")
                    }
                    setTimeout((function () {
                        i.default.addClass(document.querySelector(".lg-backdrop"), "in")
                    })),
                        setTimeout((function () {
                            i.default.addClass(s.outer, "lg-visible")
                        }), this.s.backdropDuration),
                        this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'),
                        this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop
                },
                r.prototype.setTop = function () {
                    if ("100%" !== this.s.height) {
                        var e = window.innerHeight,
                            t = (e - parseInt(this.s.height, 10)) / 2,
                            i = this.outer.querySelector(".lg");
                        e >= parseInt(this.s.height, 10) ? i.style.top = t + "px" : i.style.top = "0px"
                    }
                },
                r.prototype.doCss = function () {
                    return !!function () {
                        var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                            t = document.documentElement,
                            i = 0;
                        for (i = 0; i < e.length; i++)
                            if (e[i] in t.style)
                                return !0
                    }()
                },
                r.prototype.isVideo = function (e, t) {
                    var i;
                    if (i = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html"), !e && i)
                        return {
                            html5: !0
                        };
                    var n = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                        o = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                        r = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                        s = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                    return n ? {
                        youtube: n
                    } : o ? {
                        vimeo: o
                    } : r ? {
                        dailymotion: r
                    } : s ? {
                        vk: s
                    } : void 0
                },
                r.prototype.counter = function () {
                    this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>")
                },
                r.prototype.addHtml = function (e) {
                    var t,
                        n = null;
                    if (this.s.dynamic ? n = this.s.dynamicEl[e].subHtml : (n = (t = this.items[e]).getAttribute("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !n && (n = t.getAttribute("title")) && t.querySelector("img") && (n = t.querySelector("img").getAttribute("alt"))), null != n) {
                        var o = n.substring(0, 1);
                        "." !== o && "#" !== o || (n = this.s.subHtmlSelectorRelative && !this.s.dynamic ? t.querySelector(n).innerHTML : document.querySelector(n).innerHTML)
                    } else
                        n = "";
                    ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = n : this.___slide[e].insertAdjacentHTML("beforeend", n),
                        null != n && ("" === n ? i.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : i.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")),
                        i.default.trigger(this.el, "onAfterAppendSubHtml", {
                            index: e
                        })
                },
                r.prototype.preload = function (e) {
                    var t = 1,
                        i = 1;
                    for (t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++)
                        this.loadContent(e + t, !1, 0);
                    for (i = 1; i <= this.s.preload && !(e - i < 0); i++)
                        this.loadContent(e - i, !1, 0)
                },
                r.prototype.loadContent = function (e, t, n) {
                    var o,
                        r,
                        s,
                        a,
                        l,
                        d,
                        c,
                        u = this,
                        f = !1,
                        h = function (e) {
                            for (var t = [], i = [], n = 0; n < e.length; n++) {
                                var o = e[n].split(" ");
                                "" === o[0] && o.splice(0, 1),
                                    i.push(o[0]),
                                    t.push(o[1])
                            }
                            for (var s = window.innerWidth, a = 0; a < t.length; a++)
                                if (parseInt(t[a], 10) > s) {
                                    r = i[a];
                                    break
                                }
                        };
                    u.s.dynamic ? (u.s.dynamicEl[e].poster && (f = !0, s = u.s.dynamicEl[e].poster), d = u.s.dynamicEl[e].html, r = u.s.dynamicEl[e].src, c = u.s.dynamicEl[e].alt, u.s.dynamicEl[e].responsive && h(u.s.dynamicEl[e].responsive.split(",")), a = u.s.dynamicEl[e].srcset, l = u.s.dynamicEl[e].sizes) : (u.items[e].getAttribute("data-poster") && (f = !0, s = u.items[e].getAttribute("data-poster")), d = u.items[e].getAttribute("data-html"), r = u.items[e].getAttribute("href") || u.items[e].getAttribute("data-src"), c = u.items[e].getAttribute("title"), u.items[e].querySelector("img") && (c = c || u.items[e].querySelector("img").getAttribute("alt")), u.items[e].getAttribute("data-responsive") && h(u.items[e].getAttribute("data-responsive").split(",")), a = u.items[e].getAttribute("data-srcset"), l = u.items[e].getAttribute("data-sizes"));
                    var p = !1;
                    u.s.dynamic ? u.s.dynamicEl[e].iframe && (p = !0) : "true" === u.items[e].getAttribute("data-iframe") && (p = !0);
                    var g = u.isVideo(r, e);
                    if (!i.default.hasClass(u.___slide[e], "lg-loaded")) {
                        if (p)
                            u.___slide[e].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + u.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + r + '"  allowfullscreen="true"></iframe></div></div>');
                        else if (f) {
                            var m = "";
                            m = g && g.youtube ? "lg-has-youtube" : g && g.vimeo ? "lg-has-vimeo" : "lg-has-html5",
                                u.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + m + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + s + '" /></div></div>')
                        } else
                            g ? (u.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'), i.default.trigger(u.el, "hasVideo", {
                                index: e,
                                src: r,
                                html: d
                            })) : (c = c ? 'alt="' + c + '"' : "", u.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" ' + c + ' src="' + r + '" /></div>'));
                        if (i.default.trigger(u.el, "onAferAppendSlide", {
                            index: e
                        }), o = u.___slide[e].querySelector(".lg-object"), l && o.setAttribute("sizes", l), a && (o.setAttribute("srcset", a), this.s.supportLegacyBrowser))
                            try {
                                picturefill({
                                    elements: [o[0]]
                                })
                            } catch (e) {
                                console.warn("If you want srcset to be supported for older browsers, please include picturefil javascript library in your document.")
                            }
                        ".lg-sub-html" !== this.s.appendSubHtmlTo && u.addHtml(e),
                            i.default.addClass(u.___slide[e], "lg-loaded")
                    }
                    i.default.on(u.___slide[e].querySelector(".lg-object"), "load.lg error.lg", (function () {
                        var t = 0;
                        n && !i.default.hasClass(document.body, "lg-from-hash") && (t = n),
                            setTimeout((function () {
                                i.default.addClass(u.___slide[e], "lg-complete"),
                                    i.default.trigger(u.el, "onSlideItemLoad", {
                                        index: e,
                                        delay: n || 0
                                    })
                            }), t)
                    })),
                        g && g.html5 && !f && i.default.addClass(u.___slide[e], "lg-complete"),
                        !0 === t && (i.default.hasClass(u.___slide[e], "lg-complete") ? u.preload(e) : i.default.on(u.___slide[e].querySelector(".lg-object"), "load.lg error.lg", (function () {
                            u.preload(e)
                        })))
                },
                r.prototype.slide = function (e, t, n) {
                    for (var o = 0, r = 0; r < this.___slide.length; r++)
                        if (i.default.hasClass(this.___slide[r], "lg-current")) {
                            o = r;
                            break
                        }
                    var s = this;
                    if (!s.lGalleryOn || o !== e) {
                        var a = this.___slide.length,
                            l = s.lGalleryOn ? this.s.speed : 0,
                            d = !1,
                            c = !1;
                        if (!s.lgBusy) {
                            var u;
                            if (this.s.download && ((u = s.s.dynamic ? !1 !== s.s.dynamicEl[e].downloadUrl && (s.s.dynamicEl[e].downloadUrl || s.s.dynamicEl[e].src) : "false" !== s.items[e].getAttribute("data-download-url") && (s.items[e].getAttribute("data-download-url") || s.items[e].getAttribute("href") || s.items[e].getAttribute("data-src"))) ? (document.getElementById("lg-download").setAttribute("href", u), i.default.removeClass(s.outer, "lg-hide-download")) : i.default.addClass(s.outer, "lg-hide-download")), i.default.trigger(s.el, "onBeforeSlide", {
                                prevIndex: o,
                                index: e,
                                fromTouch: t,
                                fromThumb: n
                            }), s.lgBusy = !0, clearTimeout(s.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout((function () {
                                s.addHtml(e)
                            }), l), this.arrowDisable(e), t) {
                                var f = e - 1,
                                    h = e + 1;
                                (0 === e && o === a - 1 || e === a - 1 && 0 === o) && (h = 0, f = a - 1),
                                    i.default.removeClass(s.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"),
                                    i.default.removeClass(s.outer.querySelector(".lg-current"), "lg-current"),
                                    i.default.removeClass(s.outer.querySelector(".lg-next-slide"), "lg-next-slide"),
                                    i.default.addClass(s.___slide[f], "lg-prev-slide"),
                                    i.default.addClass(s.___slide[h], "lg-next-slide"),
                                    i.default.addClass(s.___slide[e], "lg-current")
                            } else {
                                i.default.addClass(s.outer, "lg-no-trans");
                                for (var p = 0; p < this.___slide.length; p++)
                                    i.default.removeClass(this.___slide[p], "lg-prev-slide"),
                                        i.default.removeClass(this.___slide[p], "lg-next-slide");
                                e < o ? (c = !0, 0 !== e || o !== a - 1 || n || (c = !1, d = !0)) : e > o && (d = !0, e !== a - 1 || 0 !== o || n || (c = !0, d = !1)),
                                    c ? (i.default.addClass(this.___slide[e], "lg-prev-slide"), i.default.addClass(this.___slide[o], "lg-next-slide")) : d && (i.default.addClass(this.___slide[e], "lg-next-slide"), i.default.addClass(this.___slide[o], "lg-prev-slide")),
                                    setTimeout((function () {
                                        i.default.removeClass(s.outer.querySelector(".lg-current"), "lg-current"),
                                            i.default.addClass(s.___slide[e], "lg-current"),
                                            i.default.removeClass(s.outer, "lg-no-trans")
                                    }), 50)
                            }
                            s.lGalleryOn ? (setTimeout((function () {
                                s.loadContent(e, !0, 0)
                            }), this.s.speed + 50), setTimeout((function () {
                                s.lgBusy = !1,
                                    i.default.trigger(s.el, "onAfterSlide", {
                                        prevIndex: o,
                                        index: e,
                                        fromTouch: t,
                                        fromThumb: n
                                    })
                            }), this.s.speed)) : (s.loadContent(e, !0, s.s.backdropDuration), s.lgBusy = !1, i.default.trigger(s.el, "onAfterSlide", {
                                prevIndex: o,
                                index: e,
                                fromTouch: t,
                                fromThumb: n
                            })),
                                s.lGalleryOn = !0,
                                this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1)
                        }
                    }
                },
                r.prototype.goToNextSlide = function (e) {
                    var t = this;
                    t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++, i.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index
                    }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, i.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index
                    }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (i.default.addClass(t.outer, "lg-right-end"), setTimeout((function () {
                        i.default.removeClass(t.outer, "lg-right-end")
                    }), 400)))
                },
                r.prototype.goToPrevSlide = function (e) {
                    var t = this;
                    t.lgBusy || (t.index > 0 ? (t.index--, i.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e
                    }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1, i.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e
                    }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (i.default.addClass(t.outer, "lg-left-end"), setTimeout((function () {
                        i.default.removeClass(t.outer, "lg-left-end")
                    }), 400)))
                },
                r.prototype.keyPress = function () {
                    var e = this;
                    this.items.length > 1 && i.default.on(window, "keyup.lg", (function (t) {
                        e.items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()))
                    })),
                        i.default.on(window, "keydown.lg", (function (t) {
                            !0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), i.default.hasClass(e.outer, "lg-thumb-open") ? i.default.removeClass(e.outer, "lg-thumb-open") : e.destroy())
                        }))
                },
                r.prototype.arrow = function () {
                    var e = this;
                    i.default.on(this.outer.querySelector(".lg-prev"), "click.lg", (function () {
                        e.goToPrevSlide()
                    })),
                        i.default.on(this.outer.querySelector(".lg-next"), "click.lg", (function () {
                            e.goToNextSlide()
                        }))
                },
                r.prototype.arrowDisable = function (e) {
                    if (!this.s.loop && this.s.hideControlOnEnd) {
                        var t = this.outer.querySelector(".lg-next"),
                            n = this.outer.querySelector(".lg-prev");
                        e + 1 < this.___slide.length ? (t.removeAttribute("disabled"), i.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"), i.default.addClass(t, "disabled")),
                            e > 0 ? (n.removeAttribute("disabled"), i.default.removeClass(n, "disabled")) : (n.setAttribute("disabled", "disabled"), i.default.addClass(n, "disabled"))
                    }
                },
                r.prototype.setTranslate = function (e, t, n) {
                    this.s.useLeft ? e.style.left = t : i.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + n + "px, 0px)")
                },
                r.prototype.touchMove = function (e, t) {
                    var n = t - e;
                    Math.abs(n) > 15 && (i.default.addClass(this.outer, "lg-dragging"), this.setTranslate(this.___slide[this.index], n, 0), this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + n, 0), this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + n, 0))
                },
                r.prototype.touchEnd = function (e) {
                    var t = this;
                    "lg-slide" !== t.s.mode && i.default.addClass(t.outer, "lg-slide");
                    for (var n = 0; n < this.___slide.length; n++)
                        i.default.hasClass(this.___slide[n], "lg-current") || i.default.hasClass(this.___slide[n], "lg-prev-slide") || i.default.hasClass(this.___slide[n], "lg-next-slide") || (this.___slide[n].style.opacity = "0");
                    setTimeout((function () {
                        i.default.removeClass(t.outer, "lg-dragging"),
                            e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && i.default.trigger(t.el, "onSlideClick");
                        for (var n = 0; n < t.___slide.length; n++)
                            t.___slide[n].removeAttribute("style")
                    })),
                        setTimeout((function () {
                            i.default.hasClass(t.outer, "lg-dragging") || "lg-slide" === t.s.mode || i.default.removeClass(t.outer, "lg-slide")
                        }), t.s.speed + 100)
                },
                r.prototype.enableSwipe = function () {
                    var e = this,
                        t = 0,
                        n = 0,
                        o = !1;
                    if (e.s.enableSwipe && e.isTouch && e.doCss()) {
                        for (var r = 0; r < e.___slide.length; r++)
                            i.default.on(e.___slide[r], "touchstart.lg", (function (n) {
                                i.default.hasClass(e.outer, "lg-zoomed") || e.lgBusy || (n.preventDefault(), e.manageSwipeClass(), t = n.targetTouches[0].pageX)
                            }));
                        for (var s = 0; s < e.___slide.length; s++)
                            i.default.on(e.___slide[s], "touchmove.lg", (function (r) {
                                i.default.hasClass(e.outer, "lg-zoomed") || (r.preventDefault(), n = r.targetTouches[0].pageX, e.touchMove(t, n), o = !0)
                            }));
                        for (var a = 0; a < e.___slide.length; a++)
                            i.default.on(e.___slide[a], "touchend.lg", (function () {
                                i.default.hasClass(e.outer, "lg-zoomed") || (o ? (o = !1, e.touchEnd(n - t)) : i.default.trigger(e.el, "onSlideClick"))
                            }))
                    }
                },
                r.prototype.enableDrag = function () {
                    var e = this,
                        t = 0,
                        n = 0,
                        o = !1,
                        r = !1;
                    if (e.s.enableDrag && !e.isTouch && e.doCss()) {
                        for (var s = 0; s < e.___slide.length; s++)
                            i.default.on(e.___slide[s], "mousedown.lg", (function (n) {
                                i.default.hasClass(e.outer, "lg-zoomed") || (i.default.hasClass(n.target, "lg-object") || i.default.hasClass(n.target, "lg-video-play")) && (n.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = n.pageX, o = !0, e.outer.scrollLeft += 1, e.outer.scrollLeft -= 1, i.default.removeClass(e.outer, "lg-grab"), i.default.addClass(e.outer, "lg-grabbing"), i.default.trigger(e.el, "onDragstart")))
                            }));
                        i.default.on(window, "mousemove.lg", (function (s) {
                            o && (r = !0, n = s.pageX, e.touchMove(t, n), i.default.trigger(e.el, "onDragmove"))
                        })),
                            i.default.on(window, "mouseup.lg", (function (s) {
                                r ? (r = !1, e.touchEnd(n - t), i.default.trigger(e.el, "onDragend")) : (i.default.hasClass(s.target, "lg-object") || i.default.hasClass(s.target, "lg-video-play")) && i.default.trigger(e.el, "onSlideClick"),
                                    o && (o = !1, i.default.removeClass(e.outer, "lg-grabbing"), i.default.addClass(e.outer, "lg-grab"))
                            }))
                    }
                },
                r.prototype.manageSwipeClass = function () {
                    var e = this.index + 1,
                        t = this.index - 1,
                        n = this.___slide.length;
                    this.s.loop && (0 === this.index ? t = n - 1 : this.index === n - 1 && (e = 0));
                    for (var o = 0; o < this.___slide.length; o++)
                        i.default.removeClass(this.___slide[o], "lg-next-slide"),
                            i.default.removeClass(this.___slide[o], "lg-prev-slide");
                    t > -1 && i.default.addClass(this.___slide[t], "lg-prev-slide"),
                        i.default.addClass(this.___slide[e], "lg-next-slide")
                },
                r.prototype.mousewheel = function () {
                    var e = this;
                    i.default.on(e.outer, "mousewheel.lg", (function (t) {
                        t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
                    }))
                },
                r.prototype.closeGallery = function () {
                    var e = this,
                        t = !1;
                    i.default.on(this.outer.querySelector(".lg-close"), "click.lg", (function () {
                        e.destroy()
                    })),
                        e.s.closable && (i.default.on(e.outer, "mousedown.lg", (function (e) {
                            t = !!(i.default.hasClass(e.target, "lg-outer") || i.default.hasClass(e.target, "lg-item") || i.default.hasClass(e.target, "lg-img-wrap"))
                        })), i.default.on(e.outer, "mouseup.lg", (function (n) {
                            (i.default.hasClass(n.target, "lg-outer") || i.default.hasClass(n.target, "lg-item") || i.default.hasClass(n.target, "lg-img-wrap") && t) && (i.default.hasClass(e.outer, "lg-dragging") || e.destroy())
                        })))
                },
                r.prototype.destroy = function (e) {
                    var t = this;
                    if (e || i.default.trigger(t.el, "onBeforeClose"), document.body.scrollTop = t.prevScrollTop, document.documentElement.scrollTop = t.prevScrollTop, e) {
                        if (!t.s.dynamic)
                            for (var n = 0; n < this.items.length; n++)
                                i.default.off(this.items[n], ".lg"),
                                    i.default.off(this.items[n], ".lgcustom");
                        var o = t.el.getAttribute("lg-uid");
                        delete window.lgData[o],
                            t.el.removeAttribute("lg-uid")
                    }
                    for (var r in i.default.off(this.el, ".lgtm"), window.lgModules)
                        t.modules[r] && t.modules[r].destroy(e);
                    this.lGalleryOn = !1,
                        clearTimeout(t.hideBartimeout),
                        this.hideBartimeout = !1,
                        i.default.off(window, ".lg"),
                        i.default.removeClass(document.body, "lg-on"),
                        i.default.removeClass(document.body, "lg-from-hash"),
                        t.outer && i.default.removeClass(t.outer, "lg-visible"),
                        i.default.removeClass(document.querySelector(".lg-backdrop"), "in"),
                        setTimeout((function () {
                            try {
                                t.outer && t.outer.parentNode.removeChild(t.outer),
                                    document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),
                                    e || i.default.trigger(t.el, "onCloseAfter"),
                                    t.el.focus()
                            } catch (e) { }
                        }), t.s.backdropDuration + 50)
                },
                window.lightGallery = function (e, t) {
                    if (e)
                        try {
                            if (e.getAttribute("lg-uid"))
                                window.lgData[e.getAttribute("lg-uid")].init();
                            else {
                                var i = "lg" + window.lgData.uid++;
                                window.lgData[i] = new r(e, t),
                                    e.setAttribute("lg-uid", i)
                            }
                        } catch (e) {
                            console.error("lightGallery has not initiated properly", e)
                        }
                }
        }) ? n.apply(t, o) : n) || (e.exports = r)
}, function (e, t, i) {
    var n,
        o,
        r;
    o = [t],
        void 0 === (r = "function" == typeof (n = function (e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var t = {
                getAttribute: function (e, t) {
                    return e[t]
                },
                setAttribute: function (e, t, i) {
                    e[t] = i
                },
                wrap: function (e, t) {
                    if (e) {
                        var i = document.createElement("div");
                        i.className = t,
                            e.parentNode.insertBefore(i, e),
                            e.parentNode.removeChild(e),
                            i.appendChild(e)
                    }
                },
                addClass: function (e, t) {
                    e && (e.classList ? e.classList.add(t) : e.className += " " + t)
                },
                removeClass: function (e, t) {
                    e && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                },
                hasClass: function (e, t) {
                    return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
                },
                setVendor: function (e, t, i) {
                    e && (e.style[t.charAt(0).toLowerCase() + t.slice(1)] = i, e.style["webkit" + t] = i, e.style["moz" + t] = i, e.style["ms" + t] = i, e.style["o" + t] = i)
                },
                trigger: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (e) {
                        var n = new CustomEvent(t, {
                            detail: i
                        });
                        e.dispatchEvent(n)
                    }
                },
                Listener: {
                    uid: 0
                },
                on: function (e, i, n) {
                    var o = this;
                    e && i.split(" ").forEach((function (i) {
                        var r = o.getAttribute(e, "lg-event-uid") || "";
                        t.Listener.uid++,
                            r += "&" + t.Listener.uid,
                            o.setAttribute(e, "lg-event-uid", r),
                            t.Listener[i + t.Listener.uid] = n,
                            e.addEventListener(i.split(".")[0], n, !1)
                    }))
                },
                off: function (e, i) {
                    if (e) {
                        var n = this.getAttribute(e, "lg-event-uid");
                        if (n) {
                            n = n.split("&");
                            for (var o = 0; o < n.length; o++)
                                if (n[o]) {
                                    var r = i + n[o];
                                    if ("." === r.substring(0, 1))
                                        for (var s in t.Listener)
                                            t.Listener.hasOwnProperty(s) && s.split(".").indexOf(r.split(".")[1]) > -1 && (e.removeEventListener(s.split(".")[0], t.Listener[s]), this.setAttribute(e, "lg-event-uid", this.getAttribute(e, "lg-event-uid").replace("&" + n[o], "")), delete t.Listener[s]);
                                    else
                                        e.removeEventListener(r.split(".")[0], t.Listener[r]),
                                            this.setAttribute(e, "lg-event-uid", this.getAttribute(e, "lg-event-uid").replace("&" + n[o], "")),
                                            delete t.Listener[r]
                                }
                        }
                    }
                },
                param: function (e) {
                    return Object.keys(e).map((function (t) {
                        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                    })).join("&")
                }
            };
            e.default = t
        }) ? n.apply(t, o) : n) || (e.exports = r)
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(0),
        o = i.n(n),
        r = i(1),
        s = i.n(r);
    function a(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function l(e) {
        return e[e.length - 1]
    }
    function d(e, ...t) {
        return t.forEach(t => {
            e.includes(t) || e.push(t)
        }), e
    }
    function c(e, t) {
        return e ? e.split(t) : []
    }
    function u(e, t, i) {
        return (void 0 === t || e >= t) && (void 0 === i || e <= i)
    }
    function f(e, t, i) {
        return e < t ? t : e > i ? i : e
    }
    function h(e, t, i = {}, n = 0, o = "") {
        o += `<${Object.keys(i).reduce((e, t) => { let o = i[t]; return "function" == typeof o && (o = o(n)), `${e} ${t}="${o}"` }, e)}></${e}>`;
        const r = n + 1;
        return r < t ? h(e, t, i, r, o) : o
    }
    function p(e) {
        return e.replace(/>\s+/g, ">").replace(/\s+</, "<")
    }
    function g(e) {
        return new Date(e).setHours(0, 0, 0, 0)
    }
    function m() {
        return (new Date).setHours(0, 0, 0, 0)
    }
    function v(...e) {
        switch (e.length) {
            case 0:
                return m();
            case 1:
                return g(e[0])
        }
        const t = new Date(0);
        return t.setFullYear(...e), t.setHours(0, 0, 0, 0)
    }
    function y(e, t) {
        const i = new Date(e);
        return i.setDate(i.getDate() + t)
    }
    function b(e, t) {
        const i = new Date(e),
            n = i.getMonth() + t;
        let o = n % 12;
        o < 0 && (o += 12);
        const r = i.setMonth(n);
        return i.getMonth() !== o ? i.setDate(0) : r
    }
    function w(e, t) {
        const i = new Date(e),
            n = i.getMonth(),
            o = i.setFullYear(i.getFullYear() + t);
        return 1 === n && 2 === i.getMonth() ? i.setDate(0) : o
    }
    function _(e, t) {
        return (e - t + 7) % 7
    }
    function k(e, t, i = 0) {
        const n = new Date(e).getDay();
        return y(e, _(t, i) - _(n, i))
    }
    function T(e, t) {
        const i = new Date(e).getFullYear();
        return Math.floor(i / t) * t
    }
    const x = /dd?|DD?|mm?|MM?|yy?(?:yy)?/,
        C = /[\s!-/:-@[-`{-~年月日]+/;
    let S = {};
    const E = {
        y: (e, t) => new Date(e).setFullYear(parseInt(t, 10)),
        m(e, t, i) {
            const n = new Date(e);
            let o = parseInt(t, 10) - 1;
            if (isNaN(o)) {
                if (!t)
                    return NaN;
                const e = t.toLowerCase(),
                    n = t => t.toLowerCase().startsWith(e);
                if (o = i.monthsShort.findIndex(n), o < 0 && (o = i.months.findIndex(n)), o < 0)
                    return NaN
            }
            return n.setMonth(o), n.getMonth() !== function e(t) {
                return t > -1 ? t % 12 : e(t + 12)
            }(o) ? n.setDate(0) : n.getTime()
        },
        d: (e, t) => new Date(e).setDate(parseInt(t, 10))
    },
        D = {
            d: e => e.getDate(),
            dd: e => A(e.getDate(), 2),
            D: (e, t) => t.daysShort[e.getDay()],
            DD: (e, t) => t.days[e.getDay()],
            m: e => e.getMonth() + 1,
            mm: e => A(e.getMonth() + 1, 2),
            M: (e, t) => t.monthsShort[e.getMonth()],
            MM: (e, t) => t.months[e.getMonth()],
            y: e => e.getFullYear(),
            yy: e => A(e.getFullYear(), 2).slice(-2),
            yyyy: e => A(e.getFullYear(), 4)
        };
    function A(e, t) {
        return e.toString().padStart(t, "0")
    }
    function O(e) {
        if ("string" != typeof e)
            throw new Error("Invalid date format.");
        if (e in S)
            return S[e];
        const t = e.split(x),
            i = e.match(new RegExp(x, "g"));
        if (0 === t.length || !i)
            throw new Error("Invalid date format.");
        const n = i.map(e => D[e]),
            o = Object.keys(E).reduce((e, t) => (i.find(e => "D" !== e[0] && e[0].toLowerCase() === t) && e.push(t), e), []);
        return S[e] = {
            parser(e, t) {
                const n = e.split(C).reduce((e, t, n) => {
                    if (t.length > 0 && i[n]) {
                        const o = i[n][0];
                        "M" === o ? e.m = t : "D" !== o && (e[o] = t)
                    }
                    return e
                }, {});
                return o.reduce((e, i) => {
                    const o = E[i](e, n[i], t);
                    return isNaN(o) ? e : o
                }, m())
            },
            formatter: (e, i) => n.reduce((n, o, r) => n + `${t[r]}${o(e, i)}`, "") + l(t)
        }
    }
    function N(e, t, i) {
        if (e instanceof Date || "number" == typeof e) {
            const t = g(e);
            return isNaN(t) ? void 0 : t
        }
        if (e) {
            if ("today" === e)
                return m();
            if (t && t.toValue) {
                const n = t.toValue(e, t, i);
                return isNaN(n) ? void 0 : g(n)
            }
            return O(t).parser(e, i)
        }
    }
    function L(e, t, i) {
        if (isNaN(e) || !e && 0 !== e)
            return "";
        const n = "number" == typeof e ? new Date(e) : e;
        return t.toDisplay ? t.toDisplay(n, t, i) : O(t).formatter(n, i)
    }
    const j = new WeakMap,
        { addEventListener: M, removeEventListener: $ } = EventTarget.prototype;
    function H(e, t) {
        let i = j.get(e);
        i || (i = [], j.set(e, i)),
            t.forEach(e => {
                M.call(...e),
                    i.push(e)
            })
    }
    function I(e) {
        let t = j.get(e);
        t && (t.forEach(e => {
            $.call(...e)
        }), j.delete(e))
    }
    if (!Event.prototype.composedPath) {
        const e = (t, i = []) => {
            let n;
            return i.push(t), t.parentNode ? n = t.parentNode : t.host ? n = t.host : t.defaultView && (n = t.defaultView), n ? e(n, i) : i
        };
        Event.prototype.composedPath = function () {
            return e(this.target)
        }
    }
    function P(e, t) {
        const i = "function" == typeof t ? t : e => e.matches(t);
        return function e(t, i, n, o = 0) {
            const r = t[o];
            return i(r) ? r : r !== n && r.parentElement ? e(t, i, n, o + 1) : void 0
        }(e.composedPath(), i, e.currentTarget)
    }
    const q = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM y"
        }
    };
    var F = {
        autohide: !1,
        beforeShowDay: null,
        beforeShowDecade: null,
        beforeShowMonth: null,
        beforeShowYear: null,
        calendarWeeks: !1,
        clearBtn: !1,
        dateDelimiter: ",",
        datesDisabled: [],
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        defaultViewDate: void 0,
        disableTouchKeyboard: !1,
        format: "mm/dd/yyyy",
        language: "en",
        maxDate: null,
        maxNumberOfDates: 1,
        maxView: 3,
        minDate: null,
        nextArrow: "»",
        orientation: "auto",
        pickLevel: 0,
        prevArrow: "«",
        showDaysOfWeek: !0,
        showOnClick: !0,
        showOnFocus: !0,
        startView: 0,
        title: "",
        todayBtn: !1,
        todayBtnMode: 0,
        todayHighlight: !1,
        updateOnBlur: !0,
        weekStart: 0
    };
    const B = document.createRange();
    function W(e) {
        return B.createContextualFragment(e)
    }
    function R(e) {
        "none" !== e.style.display && (e.style.display && (e.dataset.styleDisplay = e.style.display), e.style.display = "none")
    }
    function z(e) {
        "none" === e.style.display && (e.dataset.styleDisplay ? (e.style.display = e.dataset.styleDisplay, delete e.dataset.styleDisplay) : e.style.display = "")
    }
    function V(e) {
        e.firstChild && (e.removeChild(e.firstChild), V(e))
    }
    const { language: U, format: Y, weekStart: X } = F;
    function Q(e, t) {
        return e.length < 6 && t >= 0 && t < 7 ? d(e, t) : e
    }
    function K(e) {
        return (e + 6) % 7
    }
    function G(e, t, i, n) {
        const o = N(e, t, i);
        return void 0 !== o ? o : n
    }
    function J(e, t, i = 3) {
        const n = parseInt(e, 10);
        return n >= 0 && n <= i ? n : t
    }
    function Z(e, t) {
        const i = Object.assign({}, e),
            n = {},
            o = t.constructor.locales;
        let { format: r, language: s, locale: l, maxDate: c, maxView: u, minDate: f, pickLevel: h, startView: p, weekStart: g } = t.config || {};
        if (i.language) {
            let e;
            if (i.language !== s && (o[i.language] ? e = i.language : (e = i.language.split("-")[0], void 0 === o[e] && (e = !1))), delete i.language, e) {
                s = n.language = e;
                const t = l || o[U];
                l = Object.assign({
                    format: Y,
                    weekStart: X
                }, o[U]),
                    s !== U && Object.assign(l, o[s]),
                    n.locale = l,
                    r === t.format && (r = n.format = l.format),
                    g === t.weekStart && (g = n.weekStart = l.weekStart, n.weekEnd = K(l.weekStart))
            }
        }
        if (i.format) {
            const e = "function" == typeof i.format.toDisplay,
                t = "function" == typeof i.format.toValue,
                o = x.test(i.format);
            (e && t || o) && (r = n.format = i.format),
                delete i.format
        }
        let m = f,
            y = c;
        if (void 0 !== i.minDate && (m = null === i.minDate ? v(0, 0, 1) : G(i.minDate, r, l, m), delete i.minDate), void 0 !== i.maxDate && (y = null === i.maxDate ? void 0 : G(i.maxDate, r, l, y), delete i.maxDate), y < m ? (f = n.minDate = y, c = n.maxDate = m) : (f !== m && (f = n.minDate = m), c !== y && (c = n.maxDate = y)), i.datesDisabled && (n.datesDisabled = i.datesDisabled.reduce((e, t) => {
            const i = N(t, r, l);
            return void 0 !== i ? d(e, i) : e
        }, []), delete i.datesDisabled), void 0 !== i.defaultViewDate) {
            const e = N(i.defaultViewDate, r, l);
            void 0 !== e && (n.defaultViewDate = e),
                delete i.defaultViewDate
        }
        if (void 0 !== i.weekStart) {
            const e = Number(i.weekStart) % 7;
            isNaN(e) || (g = n.weekStart = e, n.weekEnd = K(e)),
                delete i.weekStart
        }
        if (i.daysOfWeekDisabled && (n.daysOfWeekDisabled = i.daysOfWeekDisabled.reduce(Q, []), delete i.daysOfWeekDisabled), i.daysOfWeekHighlighted && (n.daysOfWeekHighlighted = i.daysOfWeekHighlighted.reduce(Q, []), delete i.daysOfWeekHighlighted), void 0 !== i.maxNumberOfDates) {
            const e = parseInt(i.maxNumberOfDates, 10);
            e >= 0 && (n.maxNumberOfDates = e, n.multidate = 1 !== e),
                delete i.maxNumberOfDates
        }
        i.dateDelimiter && (n.dateDelimiter = String(i.dateDelimiter), delete i.dateDelimiter);
        let b = h;
        void 0 !== i.pickLevel && (b = J(i.pickLevel, 2), delete i.pickLevel),
            b !== h && (h = n.pickLevel = b);
        let w = u;
        void 0 !== i.maxView && (w = J(i.maxView, u), delete i.maxView),
            w = h > w ? h : w,
            w !== u && (u = n.maxView = w);
        let _ = p;
        if (void 0 !== i.startView && (_ = J(i.startView, _), delete i.startView), _ < h ? _ = h : _ > u && (_ = u), _ !== p && (n.startView = _), i.prevArrow) {
            const e = W(i.prevArrow);
            e.childNodes.length > 0 && (n.prevArrow = e.childNodes),
                delete i.prevArrow
        }
        if (i.nextArrow) {
            const e = W(i.nextArrow);
            e.childNodes.length > 0 && (n.nextArrow = e.childNodes),
                delete i.nextArrow
        }
        if (void 0 !== i.disableTouchKeyboard && (n.disableTouchKeyboard = "ontouchstart" in document && !!i.disableTouchKeyboard, delete i.disableTouchKeyboard), i.orientation) {
            const e = i.orientation.toLowerCase().split(/\s+/g);
            n.orientation = {
                x: e.find(e => "left" === e || "right" === e) || "auto",
                y: e.find(e => "top" === e || "bottom" === e) || "auto"
            },
                delete i.orientation
        }
        if (void 0 !== i.todayBtnMode) {
            switch (i.todayBtnMode) {
                case 0:
                case 1:
                    n.todayBtnMode = i.todayBtnMode
            }
            delete i.todayBtnMode
        }
        return Object.keys(i).forEach(e => {
            void 0 !== i[e] && a(F, e) && (n[e] = i[e])
        }), n
    }
    var ee = p('<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>');
    var te = p(`<div class="days">\n  <div class="days-of-week">${h("span", 7, { class: "dow" })}</div>\n  <div class="datepicker-grid">${h("span", 42)}</div>\n</div>`);
    var ie = p(`<div class="calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${h("span", 6, { class: "week" })}</div>\n</div>`);
    class ne {
        constructor(e, t) {
            Object.assign(this, t, {
                picker: e,
                element: W('<div class="datepicker-view"></div>').firstChild,
                selected: []
            }),
                this.init(this.picker.datepicker.config)
        }
        init(e) {
            void 0 !== e.pickLevel && (this.isMinView = this.id === e.pickLevel),
                this.setOptions(e),
                this.updateFocus(),
                this.updateSelection()
        }
        performBeforeHook(e, t, i) {
            let n = this.beforeShow(new Date(i));
            switch (typeof n) {
                case "boolean":
                    n = {
                        enabled: n
                    };
                    break;
                case "string":
                    n = {
                        classes: n
                    }
            }
            if (n) {
                if (!1 === n.enabled && (e.classList.add("disabled"), d(this.disabled, t)), n.classes) {
                    const i = n.classes.split(/\s+/);
                    e.classList.add(...i),
                        i.includes("disabled") && d(this.disabled, t)
                }
                n.content && function (e, t) {
                    V(e),
                        t instanceof DocumentFragment ? e.appendChild(t) : "string" == typeof t ? e.appendChild(W(t)) : "function" == typeof t.forEach && t.forEach(t => {
                            e.appendChild(t)
                        })
                }(e, n.content)
            }
        }
    }
    class oe extends ne {
        constructor(e) {
            super(e, {
                id: 0,
                name: "days",
                cellClass: "day"
            })
        }
        init(e, t = !0) {
            if (t) {
                const e = W(te).firstChild;
                this.dow = e.firstChild,
                    this.grid = e.lastChild,
                    this.element.appendChild(e)
            }
            super.init(e)
        }
        setOptions(e) {
            let t;
            if (a(e, "minDate") && (this.minDate = e.minDate), a(e, "maxDate") && (this.maxDate = e.maxDate), e.datesDisabled && (this.datesDisabled = e.datesDisabled), e.daysOfWeekDisabled && (this.daysOfWeekDisabled = e.daysOfWeekDisabled, t = !0), e.daysOfWeekHighlighted && (this.daysOfWeekHighlighted = e.daysOfWeekHighlighted), void 0 !== e.todayHighlight && (this.todayHighlight = e.todayHighlight), void 0 !== e.weekStart && (this.weekStart = e.weekStart, this.weekEnd = e.weekEnd, t = !0), e.locale) {
                const i = this.locale = e.locale;
                this.dayNames = i.daysMin,
                    this.switchLabelFormat = i.titleFormat,
                    t = !0
            }
            if (void 0 !== e.beforeShowDay && (this.beforeShow = "function" == typeof e.beforeShowDay ? e.beforeShowDay : void 0), void 0 !== e.calendarWeeks)
                if (e.calendarWeeks && !this.calendarWeeks) {
                    const e = W(ie).firstChild;
                    this.calendarWeeks = {
                        element: e,
                        dow: e.firstChild,
                        weeks: e.lastChild
                    },
                        this.element.insertBefore(e, this.element.firstChild)
                } else
                    this.calendarWeeks && !e.calendarWeeks && (this.element.removeChild(this.calendarWeeks.element), this.calendarWeeks = null);
            void 0 !== e.showDaysOfWeek && (e.showDaysOfWeek ? (z(this.dow), this.calendarWeeks && z(this.calendarWeeks.dow)) : (R(this.dow), this.calendarWeeks && R(this.calendarWeeks.dow))),
                t && Array.from(this.dow.children).forEach((e, t) => {
                    const i = (this.weekStart + t) % 7;
                    e.textContent = this.dayNames[i],
                        e.className = this.daysOfWeekDisabled.includes(i) ? "dow disabled" : "dow"
                })
        }
        updateFocus() {
            const e = new Date(this.picker.viewDate),
                t = e.getFullYear(),
                i = e.getMonth(),
                n = v(t, i, 1),
                o = k(n, this.weekStart, this.weekStart);
            this.first = n,
                this.last = v(t, i + 1, 0),
                this.start = o,
                this.focused = this.picker.viewDate
        }
        updateSelection() {
            const { dates: e, rangepicker: t } = this.picker.datepicker;
            this.selected = e,
                t && (this.range = t.dates)
        }
        render() {
            this.today = this.todayHighlight ? m() : void 0,
                this.disabled = [...this.datesDisabled];
            const e = L(this.focused, this.switchLabelFormat, this.locale);
            if (this.picker.setViewSwitchLabel(e), this.picker.setPrevBtnDisabled(this.first <= this.minDate), this.picker.setNextBtnDisabled(this.last >= this.maxDate), this.calendarWeeks) {
                const e = k(this.first, 1, 1);
                Array.from(this.calendarWeeks.weeks.children).forEach((t, i) => {
                    t.textContent = function (e) {
                        const t = k(e, 4, 1),
                            i = k(new Date(t).setMonth(0, 4), 4, 1);
                        return Math.round((t - i) / 6048e5) + 1
                    }(y(e, 7 * i))
                })
            }
            Array.from(this.grid.children).forEach((e, t) => {
                const i = e.classList,
                    n = y(this.start, t),
                    o = new Date(n),
                    r = o.getDay();
                if (e.className = "datepicker-cell " + this.cellClass, e.dataset.date = n, e.textContent = o.getDate(), n < this.first ? i.add("prev") : n > this.last && i.add("next"), this.today === n && i.add("today"), (n < this.minDate || n > this.maxDate || this.disabled.includes(n)) && i.add("disabled"), this.daysOfWeekDisabled.includes(r) && (i.add("disabled"), d(this.disabled, n)), this.daysOfWeekHighlighted.includes(r) && i.add("highlighted"), this.range) {
                    const [e, t] = this.range;
                    n > e && n < t && i.add("range"),
                        n === e && i.add("range-start"),
                        n === t && i.add("range-end")
                }
                this.selected.includes(n) && i.add("selected"),
                    n === this.focused && i.add("focused"),
                    this.beforeShow && this.performBeforeHook(e, n, n)
            })
        }
        refresh() {
            const [e, t] = this.range || [];
            this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e => {
                e.classList.remove("range", "range-start", "range-end", "selected", "focused")
            }),
                Array.from(this.grid.children).forEach(i => {
                    const n = Number(i.dataset.date),
                        o = i.classList;
                    n > e && n < t && o.add("range"),
                        n === e && o.add("range-start"),
                        n === t && o.add("range-end"),
                        this.selected.includes(n) && o.add("selected"),
                        n === this.focused && o.add("focused")
                })
        }
        refreshFocus() {
            const e = Math.round((this.focused - this.start) / 864e5);
            this.grid.querySelectorAll(".focused").forEach(e => {
                e.classList.remove("focused")
            }),
                this.grid.children[e].classList.add("focused")
        }
    }
    function re(e, t) {
        if (!e || !e[0] || !e[1])
            return;
        const [[i, n], [o, r]] = e;
        return i > t || o < t ? void 0 : [i === t ? n : -1, o === t ? r : 12]
    }
    class se extends ne {
        constructor(e) {
            super(e, {
                id: 1,
                name: "months",
                cellClass: "month"
            })
        }
        init(e, t = !0) {
            t && (this.grid = this.element, this.element.classList.add("months", "datepicker-grid"), this.grid.appendChild(W(h("span", 12, {
                "data-month": e => e
            })))),
                super.init(e)
        }
        setOptions(e) {
            if (e.locale && (this.monthNames = e.locale.monthsShort), a(e, "minDate"))
                if (void 0 === e.minDate)
                    this.minYear = this.minMonth = this.minDate = void 0;
                else {
                    const t = new Date(e.minDate);
                    this.minYear = t.getFullYear(),
                        this.minMonth = t.getMonth(),
                        this.minDate = t.setDate(1)
                }
            if (a(e, "maxDate"))
                if (void 0 === e.maxDate)
                    this.maxYear = this.maxMonth = this.maxDate = void 0;
                else {
                    const t = new Date(e.maxDate);
                    this.maxYear = t.getFullYear(),
                        this.maxMonth = t.getMonth(),
                        this.maxDate = v(this.maxYear, this.maxMonth + 1, 0)
                }
            void 0 !== e.beforeShowMonth && (this.beforeShow = "function" == typeof e.beforeShowMonth ? e.beforeShowMonth : void 0)
        }
        updateFocus() {
            const e = new Date(this.picker.viewDate);
            this.year = e.getFullYear(),
                this.focused = e.getMonth()
        }
        updateSelection() {
            const { dates: e, rangepicker: t } = this.picker.datepicker;
            this.selected = e.reduce((e, t) => {
                const i = new Date(t),
                    n = i.getFullYear(),
                    o = i.getMonth();
                return void 0 === e[n] ? e[n] = [o] : d(e[n], o), e
            }, {}),
                t && t.dates && (this.range = t.dates.map(e => {
                    const t = new Date(e);
                    return isNaN(t) ? void 0 : [t.getFullYear(), t.getMonth()]
                }))
        }
        render() {
            this.disabled = [],
                this.picker.setViewSwitchLabel(this.year),
                this.picker.setPrevBtnDisabled(this.year <= this.minYear),
                this.picker.setNextBtnDisabled(this.year >= this.maxYear);
            const e = this.selected[this.year] || [],
                t = this.year < this.minYear || this.year > this.maxYear,
                i = this.year === this.minYear,
                n = this.year === this.maxYear,
                o = re(this.range, this.year);
            Array.from(this.grid.children).forEach((r, s) => {
                const a = r.classList,
                    l = v(this.year, s, 1);
                if (r.className = "datepicker-cell " + this.cellClass, this.isMinView && (r.dataset.date = l), r.textContent = this.monthNames[s], (t || i && s < this.minMonth || n && s > this.maxMonth) && a.add("disabled"), o) {
                    const [e, t] = o;
                    s > e && s < t && a.add("range"),
                        s === e && a.add("range-start"),
                        s === t && a.add("range-end")
                }
                e.includes(s) && a.add("selected"),
                    s === this.focused && a.add("focused"),
                    this.beforeShow && this.performBeforeHook(r, s, l)
            })
        }
        refresh() {
            const e = this.selected[this.year] || [],
                [t, i] = re(this.range, this.year) || [];
            this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e => {
                e.classList.remove("range", "range-start", "range-end", "selected", "focused")
            }),
                Array.from(this.grid.children).forEach((n, o) => {
                    const r = n.classList;
                    o > t && o < i && r.add("range"),
                        o === t && r.add("range-start"),
                        o === i && r.add("range-end"),
                        e.includes(o) && r.add("selected"),
                        o === this.focused && r.add("focused")
                })
        }
        refreshFocus() {
            this.grid.querySelectorAll(".focused").forEach(e => {
                e.classList.remove("focused")
            }),
                this.grid.children[this.focused].classList.add("focused")
        }
    }
    class ae extends ne {
        constructor(e, t) {
            super(e, t)
        }
        init(e, t = !0) {
            var i;
            t && (this.navStep = 10 * this.step, this.beforeShowOption = "beforeShow" + (i = this.cellClass, [...i].reduce((e, t, i) => e + (i ? t : t.toUpperCase()), "")), this.grid = this.element, this.element.classList.add(this.name, "datepicker-grid"), this.grid.appendChild(W(h("span", 12)))),
                super.init(e)
        }
        setOptions(e) {
            if (a(e, "minDate") && (void 0 === e.minDate ? this.minYear = this.minDate = void 0 : (this.minYear = T(e.minDate, this.step), this.minDate = v(this.minYear, 0, 1))), a(e, "maxDate") && (void 0 === e.maxDate ? this.maxYear = this.maxDate = void 0 : (this.maxYear = T(e.maxDate, this.step), this.maxDate = v(this.maxYear, 11, 31))), void 0 !== e[this.beforeShowOption]) {
                const t = e[this.beforeShowOption];
                this.beforeShow = "function" == typeof t ? t : void 0
            }
        }
        updateFocus() {
            const e = new Date(this.picker.viewDate),
                t = T(e, this.navStep),
                i = t + 9 * this.step;
            this.first = t,
                this.last = i,
                this.start = t - this.step,
                this.focused = T(e, this.step)
        }
        updateSelection() {
            const { dates: e, rangepicker: t } = this.picker.datepicker;
            this.selected = e.reduce((e, t) => d(e, T(t, this.step)), []),
                t && t.dates && (this.range = t.dates.map(e => {
                    if (void 0 !== e)
                        return T(e, this.step)
                }))
        }
        render() {
            this.disabled = [],
                this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),
                this.picker.setPrevBtnDisabled(this.first <= this.minYear),
                this.picker.setNextBtnDisabled(this.last >= this.maxYear),
                Array.from(this.grid.children).forEach((e, t) => {
                    const i = e.classList,
                        n = this.start + t * this.step,
                        o = v(n, 0, 1);
                    if (e.className = "datepicker-cell " + this.cellClass, this.isMinView && (e.dataset.date = o), e.textContent = e.dataset.year = n, 0 === t ? i.add("prev") : 11 === t && i.add("next"), (n < this.minYear || n > this.maxYear) && i.add("disabled"), this.range) {
                        const [e, t] = this.range;
                        n > e && n < t && i.add("range"),
                            n === e && i.add("range-start"),
                            n === t && i.add("range-end")
                    }
                    this.selected.includes(n) && i.add("selected"),
                        n === this.focused && i.add("focused"),
                        this.beforeShow && this.performBeforeHook(e, n, o)
                })
        }
        refresh() {
            const [e, t] = this.range || [];
            this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e => {
                e.classList.remove("range", "range-start", "range-end", "selected", "focused")
            }),
                Array.from(this.grid.children).forEach(i => {
                    const n = Number(i.textContent),
                        o = i.classList;
                    n > e && n < t && o.add("range"),
                        n === e && o.add("range-start"),
                        n === t && o.add("range-end"),
                        this.selected.includes(n) && o.add("selected"),
                        n === this.focused && o.add("focused")
                })
        }
        refreshFocus() {
            const e = Math.round((this.focused - this.start) / this.step);
            this.grid.querySelectorAll(".focused").forEach(e => {
                e.classList.remove("focused")
            }),
                this.grid.children[e].classList.add("focused")
        }
    }
    function le(e, t) {
        const i = {
            date: e.getDate(),
            viewDate: new Date(e.picker.viewDate),
            viewId: e.picker.currentView.id,
            datepicker: e
        };
        e.element.dispatchEvent(new CustomEvent(t, {
            detail: i
        }))
    }
    function de(e, t) {
        const { minDate: i, maxDate: n } = e.config,
            { currentView: o, viewDate: r } = e.picker;
        let s;
        switch (o.id) {
            case 0:
                s = b(r, t);
                break;
            case 1:
                s = w(r, t);
                break;
            default:
                s = w(r, t * o.navStep)
        }
        s = f(s, i, n),
            e.picker.changeFocus(s).render()
    }
    function ce(e) {
        const t = e.picker.currentView.id;
        t !== e.config.maxView && e.picker.changeView(t + 1).render()
    }
    function ue(e) {
        e.config.updateOnBlur ? e.update({
            autohide: !0
        }) : (e.refresh("input"), e.hide())
    }
    function fe(e, t) {
        const i = e.picker,
            n = new Date(i.viewDate),
            o = i.currentView.id,
            r = 1 === o ? b(n, t - n.getMonth()) : w(n, t - n.getFullYear());
        i.changeFocus(r).changeView(o - 1).render()
    }
    function he(e) {
        const t = e.picker,
            i = m();
        if (1 === e.config.todayBtnMode) {
            if (e.config.autohide)
                return void e.setDate(i);
            e.setDate(i, {
                render: !1
            }),
                t.update()
        }
        t.viewDate !== i && t.changeFocus(i),
            t.changeView(0).render()
    }
    function pe(e) {
        e.setDate({
            clear: !0
        })
    }
    function ge(e) {
        ce(e)
    }
    function me(e) {
        de(e, -1)
    }
    function ve(e) {
        de(e, 1)
    }
    function ye(e, t) {
        const i = P(t, ".datepicker-cell");
        if (!i || i.classList.contains("disabled"))
            return;
        const { id: n, isMinView: o } = e.picker.currentView;
        o ? e.setDate(Number(i.dataset.date)) : fe(e, Number(1 === n ? i.dataset.month : i.dataset.year))
    }
    function be(e) {
        e.inline || e.config.disableTouchKeyboard || e.inputField.focus()
    }
    function we(e, t) {
        if (void 0 !== t.title && (t.title ? (e.controls.title.textContent = t.title, z(e.controls.title)) : (e.controls.title.textContent = "", R(e.controls.title))), t.prevArrow) {
            const i = e.controls.prevBtn;
            V(i),
                t.prevArrow.forEach(e => {
                    i.appendChild(e.cloneNode(!0))
                })
        }
        if (t.nextArrow) {
            const i = e.controls.nextBtn;
            V(i),
                t.nextArrow.forEach(e => {
                    i.appendChild(e.cloneNode(!0))
                })
        }
        if (t.locale && (e.controls.todayBtn.textContent = t.locale.today, e.controls.clearBtn.textContent = t.locale.clear), void 0 !== t.todayBtn && (t.todayBtn ? z(e.controls.todayBtn) : R(e.controls.todayBtn)), a(t, "minDate") || a(t, "maxDate")) {
            const { minDate: t, maxDate: i } = e.datepicker.config;
            e.controls.todayBtn.disabled = !u(m(), t, i)
        }
        void 0 !== t.clearBtn && (t.clearBtn ? z(e.controls.clearBtn) : R(e.controls.clearBtn))
    }
    function _e(e) {
        const { dates: t, config: i } = e;
        return f(t.length > 0 ? l(t) : i.defaultViewDate, i.minDate, i.maxDate)
    }
    function ke(e, t) {
        const i = new Date(e.viewDate),
            n = new Date(t),
            { id: o, year: r, first: s, last: a } = e.currentView,
            l = n.getFullYear();
        switch (e.viewDate = t, l !== i.getFullYear() && le(e.datepicker, "changeYear"), n.getMonth() !== i.getMonth() && le(e.datepicker, "changeMonth"), o) {
            case 0:
                return t < s || t > a;
            case 1:
                return l !== r;
            default:
                return l < s || l > a
        }
    }
    function Te(e) {
        return window.getComputedStyle(e).direction
    }
    class xe {
        constructor(e) {
            this.datepicker = e;
            const t = ee.replace(/%buttonClass%/g, e.config.buttonClass),
                i = this.element = W(t).firstChild,
                [n, o, r] = i.firstChild.children,
                s = n.firstElementChild,
                [a, l, d] = n.lastElementChild.children,
                [c, u] = r.firstChild.children,
                f = {
                    title: s,
                    prevBtn: a,
                    viewSwitch: l,
                    nextBtn: d,
                    todayBtn: c,
                    clearBtn: u
                };
            this.main = o,
                this.controls = f;
            const h = e.inline ? "inline" : "dropdown";
            i.classList.add("datepicker-" + h),
                we(this, e.config),
                this.viewDate = _e(e),
                H(e, [[i, "click", be.bind(null, e), {
                    capture: !0
                }], [o, "click", ye.bind(null, e)], [f.viewSwitch, "click", ge.bind(null, e)], [f.prevBtn, "click", me.bind(null, e)], [f.nextBtn, "click", ve.bind(null, e)], [f.todayBtn, "click", he.bind(null, e)], [f.clearBtn, "click", pe.bind(null, e)]]),
                this.views = [new oe(this), new se(this), new ae(this, {
                    id: 2,
                    name: "years",
                    cellClass: "year",
                    step: 1
                }), new ae(this, {
                    id: 3,
                    name: "decades",
                    cellClass: "decade",
                    step: 10
                })],
                this.currentView = this.views[e.config.startView],
                this.currentView.render(),
                this.main.appendChild(this.currentView.element),
                e.config.container.appendChild(this.element)
        }
        setOptions(e) {
            we(this, e),
                this.views.forEach(t => {
                    t.init(e, !1)
                }),
                this.currentView.render()
        }
        detach() {
            this.datepicker.config.container.removeChild(this.element)
        }
        show() {
            if (this.active)
                return;
            this.element.classList.add("active"),
                this.active = !0;
            const e = this.datepicker;
            if (!e.inline) {
                const t = Te(e.inputField);
                t !== Te(e.config.container) ? this.element.dir = t : this.element.dir && this.element.removeAttribute("dir"),
                    this.place(),
                    e.config.disableTouchKeyboard && e.inputField.blur()
            }
            le(e, "show")
        }
        hide() {
            this.active && (this.datepicker.exitEditMode(), this.element.classList.remove("active"), this.active = !1, le(this.datepicker, "hide"))
        }
        place() {
            const { classList: e, style: t } = this.element,
                { config: i, inputField: n } = this.datepicker,
                o = i.container,
                { width: r, height: s } = this.element.getBoundingClientRect(),
                { left: a, top: l, width: d } = o.getBoundingClientRect(),
                { left: c, top: u, width: f, height: h } = n.getBoundingClientRect();
            let p,
                g,
                m,
                { x: v, y: y } = i.orientation;
            o === document.body ? (p = window.scrollY, g = c + window.scrollX, m = u + p) : (p = o.scrollTop, g = c - a, m = u - l + p),
                "auto" === v && (g < 0 ? (v = "left", g = 10) : v = g + r > d || "rtl" === Te(n) ? "right" : "left"),
                "right" === v && (g -= r - f),
                "auto" === y && (y = m - s < p ? "bottom" : "top"),
                "top" === y ? m -= s : m += h,
                e.remove("datepicker-orient-top", "datepicker-orient-bottom", "datepicker-orient-right", "datepicker-orient-left"),
                e.add("datepicker-orient-" + y, "datepicker-orient-" + v),
                t.top = m ? m + "px" : m,
                t.left = g ? g + "px" : g
        }
        setViewSwitchLabel(e) {
            this.controls.viewSwitch.textContent = e
        }
        setPrevBtnDisabled(e) {
            this.controls.prevBtn.disabled = e
        }
        setNextBtnDisabled(e) {
            this.controls.nextBtn.disabled = e
        }
        changeView(e) {
            const t = this.currentView,
                i = this.views[e];
            return i.id !== t.id && (this.currentView = i, this._renderMethod = "render", le(this.datepicker, "changeView"), this.main.replaceChild(i.element, t.element)), this
        }
        changeFocus(e) {
            return this._renderMethod = ke(this, e) ? "render" : "refreshFocus", this.views.forEach(e => {
                e.updateFocus()
            }), this
        }
        update() {
            const e = _e(this.datepicker);
            return this._renderMethod = ke(this, e) ? "render" : "refresh", this.views.forEach(e => {
                e.updateFocus(),
                    e.updateSelection()
            }), this
        }
        render(e = !0) {
            const t = e && this._renderMethod || "render";
            delete this._renderMethod,
                this.currentView[t]()
        }
    }
    function Ce(e, t, i, n) {
        const o = e.picker,
            r = o.currentView,
            s = r.step || 1;
        let a,
            l,
            d = o.viewDate;
        switch (r.id) {
            case 0:
                d = n ? y(d, 7 * i) : t.ctrlKey || t.metaKey ? w(d, i) : y(d, i),
                    a = y,
                    l = e => r.disabled.includes(e);
                break;
            case 1:
                d = b(d, n ? 4 * i : i),
                    a = b,
                    l = e => {
                        const t = new Date(e),
                            { year: i, disabled: n } = r;
                        return t.getFullYear() === i && n.includes(t.getMonth())
                    };
                break;
            default:
                d = w(d, i * (n ? 4 : 1) * s),
                    a = w,
                    l = e => r.disabled.includes(T(e, s))
        }
        d = function e(t, i, n, o, r, s) {
            if (u(t, r, s)) {
                if (o(t)) {
                    return e(i(t, n), i, n, o, r, s)
                }
                return t
            }
        }(d, a, i < 0 ? -s : s, l, r.minDate, r.maxDate),
            void 0 !== d && o.changeFocus(d).render()
    }
    function Se(e, t) {
        if ("Tab" === t.key)
            return void ue(e);
        const i = e.picker,
            { id: n, isMinView: o } = i.currentView;
        if (i.active)
            if (e.editMode)
                switch (t.key) {
                    case "Escape":
                        i.hide();
                        break;
                    case "Enter":
                        e.exitEditMode({
                            update: !0,
                            autohide: e.config.autohide
                        });
                        break;
                    default:
                        return
                }
            else
                switch (t.key) {
                    case "Escape":
                        i.hide();
                        break;
                    case "ArrowLeft":
                        if (t.ctrlKey || t.metaKey)
                            de(e, -1);
                        else {
                            if (t.shiftKey)
                                return void e.enterEditMode();
                            Ce(e, t, -1, !1)
                        }
                        break;
                    case "ArrowRight":
                        if (t.ctrlKey || t.metaKey)
                            de(e, 1);
                        else {
                            if (t.shiftKey)
                                return void e.enterEditMode();
                            Ce(e, t, 1, !1)
                        }
                        break;
                    case "ArrowUp":
                        if (t.ctrlKey || t.metaKey)
                            ce(e);
                        else {
                            if (t.shiftKey)
                                return void e.enterEditMode();
                            Ce(e, t, -1, !0)
                        }
                        break;
                    case "ArrowDown":
                        if (t.shiftKey && !t.ctrlKey && !t.metaKey)
                            return void e.enterEditMode();
                        Ce(e, t, 1, !0);
                        break;
                    case "Enter":
                        o ? e.setDate(i.viewDate) : i.changeView(n - 1).render();
                        break;
                    case "Backspace":
                    case "Delete":
                        return void e.enterEditMode();
                    default:
                        return void (1 !== t.key.length || t.ctrlKey || t.metaKey || e.enterEditMode())
                }
        else
            switch (t.key) {
                case "ArrowDown":
                case "Escape":
                    i.show();
                    break;
                case "Enter":
                    e.update();
                    break;
                default:
                    return
            }
        t.preventDefault(),
            t.stopPropagation()
    }
    function Ee(e) {
        e.config.showOnFocus && !e._showing && e.show()
    }
    function De(e, t) {
        const i = t.target;
        (e.picker.active || e.config.showOnClick) && (i._active = i === document.activeElement, i._clicking = setTimeout(() => {
            delete i._active,
                delete i._clicking
        }, 2e3))
    }
    function Ae(e, t) {
        const i = t.target;
        i._clicking && (clearTimeout(i._clicking), delete i._clicking, i._active && e.enterEditMode(), delete i._active, e.config.showOnClick && e.show())
    }
    function Oe(e, t) {
        t.clipboardData.types.includes("text/plain") && e.enterEditMode()
    }
    function Ne(e, t) {
        const i = e.element;
        if (i !== document.activeElement)
            return;
        const n = e.picker.element;
        P(t, e => e === i || e === n) || ue(e)
    }
    function Le(e, t) {
        return e.map(e => L(e, t.format, t.locale)).join(t.dateDelimiter)
    }
    function je(e, t, i = !1) {
        const { config: n, dates: o, rangepicker: r } = e;
        if (0 === t.length)
            return i ? [] : void 0;
        const s = r && e === r.datepickers[1];
        let a = t.reduce((e, t) => {
            let i = N(t, n.format, n.locale);
            if (void 0 === i)
                return e;
            if (n.pickLevel > 0) {
                const e = new Date(i);
                i = 1 === n.pickLevel ? s ? e.setMonth(e.getMonth() + 1, 0) : e.setDate(1) : s ? e.setFullYear(e.getFullYear() + 1, 0, 0) : e.setMonth(0, 1)
            }
            return !u(i, n.minDate, n.maxDate) || e.includes(i) || n.datesDisabled.includes(i) || n.daysOfWeekDisabled.includes(new Date(i).getDay()) || e.push(i), e
        }, []);
        return 0 !== a.length ? (n.multidate && !i && (a = a.reduce((e, t) => (o.includes(t) || e.push(t), e), o.filter(e => !a.includes(e)))), n.maxNumberOfDates && a.length > n.maxNumberOfDates ? a.slice(-1 * n.maxNumberOfDates) : a) : void 0
    }
    function Me(e, t = 3, i = !0) {
        const { config: n, picker: o, inputField: r } = e;
        if (2 & t) {
            const e = o.active ? n.pickLevel : n.startView;
            o.update().changeView(e).render(i)
        }
        1 & t && r && (r.value = Le(e.dates, n))
    }
    function $e(e, t, i) {
        let { clear: n, render: o, autohide: r } = i;
        void 0 === o && (o = !0),
            o ? void 0 === r && (r = e.config.autohide) : r = !1;
        const s = je(e, t, n);
        s && (s.toString() !== e.dates.toString() ? (e.dates = s, Me(e, o ? 3 : 1), le(e, "changeDate")) : Me(e, 1), r && e.hide())
    }
    class He {
        constructor(e, t = {}, i) {
            e.datepicker = this,
                this.element = e;
            const n = this.config = Object.assign({
                buttonClass: t.buttonClass && String(t.buttonClass) || "button",
                container: document.body,
                defaultViewDate: m(),
                maxDate: void 0,
                minDate: void 0
            }, Z(F, this));
            this._options = t,
                Object.assign(n, Z(t, this));
            const o = this.inline = "INPUT" !== e.tagName;
            let r,
                s;
            if (o)
                n.container = e,
                    s = c(e.dataset.date, n.dateDelimiter),
                    delete e.dataset.date;
            else {
                const i = t.container ? document.querySelector(t.container) : null;
                i && (n.container = i),
                    r = this.inputField = e,
                    r.classList.add("datepicker-input"),
                    s = c(r.value, n.dateDelimiter)
            }
            if (i) {
                const e = i.inputs.indexOf(r),
                    t = i.datepickers;
                if (e < 0 || e > 1 || !Array.isArray(t))
                    throw Error("Invalid rangepicker object.");
                t[e] = this,
                    Object.defineProperty(this, "rangepicker", {
                        get: () => i
                    })
            }
            this.dates = [];
            const a = je(this, s);
            a && a.length > 0 && (this.dates = a),
                r && (r.value = Le(this.dates, n));
            const l = this.picker = new xe(this);
            if (o)
                this.show();
            else {
                const e = Ne.bind(null, this);
                H(this, [[r, "keydown", Se.bind(null, this)], [r, "focus", Ee.bind(null, this)], [r, "mousedown", De.bind(null, this)], [r, "click", Ae.bind(null, this)], [r, "paste", Oe.bind(null, this)], [document, "mousedown", e], [document, "touchstart", e], [window, "resize", l.place.bind(l)]])
            }
        }
        static formatDate(e, t, i) {
            return L(e, t, i && q[i] || q.en)
        }
        static parseDate(e, t, i) {
            return N(e, t, i && q[i] || q.en)
        }
        static get locales() {
            return q
        }
        get active() {
            return !(!this.picker || !this.picker.active)
        }
        get pickerElement() {
            return this.picker ? this.picker.element : void 0
        }
        setOptions(e) {
            const t = this.picker,
                i = Z(e, this);
            Object.assign(this._options, e),
                Object.assign(this.config, i),
                t.setOptions(i),
                Me(this, 3)
        }
        show() {
            if (this.inputField) {
                if (this.inputField.disabled)
                    return;
                this.inputField !== document.activeElement && (this._showing = !0, this.inputField.focus(), delete this._showing)
            }
            this.picker.show()
        }
        hide() {
            this.inline || (this.picker.hide(), this.picker.update().changeView(this.config.startView).render())
        }
        destroy() {
            return this.hide(), I(this), this.picker.detach(), this.inline || this.inputField.classList.remove("datepicker-input"), delete this.element.datepicker, this
        }
        getDate(e) {
            const t = e ? t => L(t, e, this.config.locale) : e => new Date(e);
            return this.config.multidate ? this.dates.map(t) : this.dates.length > 0 ? t(this.dates[0]) : void 0
        }
        setDate(...e) {
            const t = [...e],
                i = {},
                n = l(e);
            "object" != typeof n || Array.isArray(n) || n instanceof Date || !n || Object.assign(i, t.pop());
            $e(this, Array.isArray(t[0]) ? t[0] : t, i)
        }
        update(e) {
            if (this.inline)
                return;
            const t = {
                clear: !0,
                autohide: !(!e || !e.autohide)
            };
            $e(this, c(this.inputField.value, this.config.dateDelimiter), t)
        }
        refresh(e, t = !1) {
            let i;
            e && "string" != typeof e && (t = e, e = void 0),
                i = "picker" === e ? 2 : "input" === e ? 1 : 3,
                Me(this, i, !t)
        }
        enterEditMode() {
            this.inline || !this.picker.active || this.editMode || (this.editMode = !0, this.inputField.classList.add("in-edit"))
        }
        exitEditMode(e) {
            if (this.inline || !this.editMode)
                return;
            const t = Object.assign({
                update: !1
            }, e);
            delete this.editMode,
                this.inputField.classList.remove("in-edit"),
                t.update && this.update(t)
        }
    }
    function Ie(e) {
        document.documentElement.className = "sz" + e
    }
    function Pe(e) {
        document.body.className = "mode-" + e
    }
    i(3),
        i(6),
        i(7),
        o()((function () {
            var e,
                t,
                i,
                n,
                r;
            s.a.init({
                disable: "mobile"
            }),
                e = localStorage.getItem("bodyMode") || "base",
                t = localStorage.getItem("htmlSz") || 0,
                Pe(e),
                Ie(t),
                o()(".glasses__range").val(t),
                o()(document).on("click", ".header__glasses .dropdown-menu", (function (e) {
                    e.stopPropagation()
                })),
                o()(document).on("input", ".glasses__range", (function (e) {
                    localStorage.setItem("htmlSz", e.target.value),
                        Ie(e.target.value)
                })),
                o()(document).on("click", ".glasses__modes > div", (function (e) {
                    var t = e.target.className.replace("glasses__mode_", "");
                    localStorage.setItem("bodyMode", t),
                        Pe(t)
                })),
                i = o()(window),
                n = i.height(),
                (r = o()(".header")).hasClass("colorizable") && i.on("scroll", (function () {
                    i.scrollTop() > .8 * n ? r.addClass("colorized") : r.removeClass("colorized")
                })),
                function () {
                    var e = o()(window).height();
                    o()(document).on("click", ".hs-masthead__scrolldown", (function () {
                        o()("html, body").stop().animate({
                            scrollTop: e
                        }, 500, "swing")
                    })),
                        o()(".hs-partners__items").slick({
                            arrows: !1,
                            slidesToShow: 8,
                            slidesToScroll: 3,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            responsive: [{
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            }]
                        }),
                        o()(".hs-teachers__items").slick({
                            arrows: !1,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            responsive: [{
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }]
                        }),
                        o()(".hs-useful-sites__items").slick({
                            arrows: !1,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            responsive: [{
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }]
                        })
                }(),
                window.lightGallery(document.getElementById("lightgallery"), {
                    thumbnail: !0
                }),
                function () {
                    if (!o()(".article-quote-slides").length)
                        return;
                    setInterval((function () {
                        var e = o()(".article-quote-slides .article-quote.active");
                        0 == e.length && (e = o()(".article-quote-slides .article-quote:last"));
                        var t = e.next().length ? e.next() : o()(".article-quote-slides .article-quote:first");
                        e.addClass("last-active"),
                            t.css({
                                opacity: 0
                            }).addClass("active").animate({
                                opacity: 1
                            }, 1e3, (function () {
                                e.removeClass("active last-active")
                            }))
                    }), 5e3)
                }(),
                function () {
                    He.locales.ru = {
                        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
                    };
                    var e = document.getElementById("calendar");
                    if (!e)
                        return;
                    var t = o()(e).data("route"),
                        i = new He(e, {
                            buttonClass: "btn",
                            todayHighlight: !0,
                            weekStart: 1,
                            format: "yyyy-mm-dd",
                            datesDisabled: ["2021-03-15"],
                            language: o()("html").attr("lang")
                        });
                    o()(i.element).on("changeDate", (function () {
                        var e = t + i.getDate("yyyy-mm-dd");
                        window.location.href = e
                    }))
                }(),
                o()("#categoryTabsModal").on("show.bs.modal", (function (e) {
                    var t = o()(e.relatedTarget).data("text");
                    o()(this).find(".modal-body").html(t)
                }))
        }))
}, function (e, t) { }]);