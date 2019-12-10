try {
    var daink = {
        "root": "http:\/\/da-ink.com\/wp-content\/themes\/daink\/",
        "url": {
            "site": "http:\/\/da-ink.com\/",
            "path": "\/tattoos\/",
            "ajax": "http:\/\/da-ink.com\/wp-admin\/admin-ajax.php"
        }
    };
} catch (e) {}
try {
    function FastClick(t, e) {
        function i(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var n;
        e = e || {},
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.targetElement = null,
        this.touchStartX = 0,
        this.touchStartY = 0,
        this.lastTouchIdentifier = 0,
        this.touchBoundary = e.touchBoundary || 10,
        this.layer = t,
        this.tapDelay = e.tapDelay || 200,
        FastClick.notNeeded(t) || (deviceIsAndroid && (t.addEventListener("mouseover", i(this.onMouse, this), !0),
        t.addEventListener("mousedown", i(this.onMouse, this), !0),
        t.addEventListener("mouseup", i(this.onMouse, this), !0)),
        t.addEventListener("click", i(this.onClick, this), !0),
        t.addEventListener("touchstart", i(this.onTouchStart, this), !1),
        t.addEventListener("touchmove", i(this.onTouchMove, this), !1),
        t.addEventListener("touchend", i(this.onTouchEnd, this), !1),
        t.addEventListener("touchcancel", i(this.onTouchCancel, this), !1),
        Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
            var r = Node.prototype.removeEventListener;
            "click" === e ? r.call(t, e, i.hijacked || i, n) : r.call(t, e, i, n)
        }
        ,
        t.addEventListener = function(e, i, n) {
            var r = Node.prototype.addEventListener;
            "click" === e ? r.call(t, e, i.hijacked || (i.hijacked = function(t) {
                t.propagationStopped || i(t)
            }
            ), n) : r.call(t, e, i, n)
        }
        ),
        "function" == typeof t.onclick && (n = t.onclick,
        t.addEventListener("click", function(t) {
            n(t)
        }, !1),
        t.onclick = null))
    }
    function atvImg() {
        function t(t, e, i, n, r, a) {
            var l = o.scrollTop || s.scrollTop
              , u = o.scrollLeft
              , c = e ? t.touches[0].pageX : t.pageX
              , h = e ? t.touches[0].pageY : t.pageY
              , f = i.getBoundingClientRect()
              , p = i.clientWidth || i.offsetWidth || i.scrollWidth
              , d = i.clientHeight || i.offsetHeight || i.scrollHeight
              , m = 70 / p
              , g = .52 - (c - f.left - u) / p
              , v = .52 - (h - f.top - l) / d
              , y = h - f.top - l - d / 2
              , _ = c - f.left - u - p / 2
              , x = (g - _) * (.07 * m)
              , w = (y - v) * (.1 * m)
              , T = "rotateX(" + w + "deg) rotateY(" + x + "deg)"
              , b = Math.atan2(y, _)
              , S = 180 * b / Math.PI - 90;
            0 > S && (S += 360),
            -1 != i.firstChild.className.indexOf(" over") && (T += " scale3d(1.05,1.05,1.05)"),
            i.firstChild.style.transform = T,
            a.style.background = "linear-gradient(" + S + "deg, rgba(0,0,0," + (h - f.top - l) / d * .4 + ") 0%,rgba(0,0,0,0) 100%)",
            a.style.transform = "translateX(" + g * r - .1 + "px) translateY(" + v * r - .1 + "px)";
            for (var C = r, k = 0; r > k; k++)
                n[k].style.transform = "translateX(" + g * C * (2.5 * k / m) + "px) translateY(" + v * r * (2.5 * k / m) + "px)",
                C--
        }
        function e(t, e) {
            e.firstChild.className += " over"
        }
        function i(t, e, i, n, r) {
            var o = e.firstChild;
            o.className = o.className.replace(" over", ""),
            o.style.transform = "",
            r.style.cssText = "";
            for (var s = 0; n > s; s++)
                i[s].style.transform = ""
        }
        var n = document
          , r = n.documentElement
          , o = n.getElementsByTagName("body")[0]
          , s = n.getElementsByTagName("html")[0]
          , a = window
          , l = n.querySelectorAll(".atvImg")
          , u = l.length
          , c = "ontouchstart"in a || navigator.msMaxTouchPoints;
        if (!(0 >= u))
            for (var h = 0; u > h; h++) {
                var f = l[h]
                  , p = f.querySelectorAll(".atvImg-layer")
                  , d = p.length;
                if (!(0 >= d)) {
                    for (; f.firstChild; )
                        f.removeChild(f.firstChild);
                    var m = n.createElement("div")
                      , g = n.createElement("div")
                      , v = n.createElement("div")
                      , y = n.createElement("div")
                      , _ = [];
                    f.id = "atvImg__" + h,
                    m.className = "atvImg-container",
                    g.className = "atvImg-shine",
                    v.className = "atvImg-shadow",
                    y.className = "atvImg-layers";
                    for (var x = 0; d > x; x++) {
                        var w = n.createElement("div")
                          , T = p[x].getAttribute("data-img");
                        w.className = "atvImg-rendered-layer",
                        w.setAttribute("data-layer", x),
                        w.style.backgroundImage = "url(" + T + ")",
                        y.appendChild(w),
                        _.push(w)
                    }
                    m.appendChild(v),
                    m.appendChild(y),
                    m.appendChild(g),
                    f.appendChild(m);
                    var b = f.clientWidth || f.offsetWidth || f.scrollWidth;
                    f.style.transform = "perspective(" + 3 * b + "px)",
                    c ? (a.preventScroll = !1,
                    function(n, r, o, s) {
                        f.addEventListener("touchmove", function(e) {
                            a.preventScroll && e.preventDefault(),
                            t(e, !0, n, r, o, s)
                        }),
                        f.addEventListener("touchstart", function(t) {
                            a.preventScroll = !0,
                            e(t, n)
                        }),
                        f.addEventListener("touchend", function(t) {
                            a.preventScroll = !1,
                            i(t, n, r, o, s)
                        })
                    }(f, _, d, g)) : !function(n, r, o, s) {
                        f.addEventListener("mousemove", function(e) {
                            t(e, !1, n, r, o, s)
                        }),
                        f.addEventListener("mouseenter", function(t) {
                            e(t, n)
                        }),
                        f.addEventListener("mouseleave", function(t) {
                            i(t, n, r, o, s)
                        })
                    }(f, _, d, g)
                }
            }
    }
    function rebuildMasonry() {
        function t() {
            0 == $("#masonry-container").height() ? $(".nothing-found").addClass("show") : $(".nothing-found").removeClass("show")
        }
        $("#masonry-container").hasClass("isotope") && $("#masonry-container").isotope("destroy");
        var e, i, n, r;
        $(".tattoos-wrapper").isotope({
            itemSelector: ".masonry-grid",
            percentPosition: !0,
            originLeft: !0,
            horizontalOrder: !0,
            stagger: 30,
            filter: function() {
                var t = $(this)
                  , o = !e || $(this).attr("data-title").match(e)
                  , s = !i || t.attr("data-category-tattoos").match(i)
                  , a = !n || t.attr("data-artist").match(n)
                  , l = !r || t.attr("data-year").match(r);
                return o && s && a && l
            },
            masonry: {
                columnWidth: ".masonry-grid"
            }
        }).addClass("isotope"),
        $(".tattoos-wrapper").isotope("on", "arrangeComplete", function() {
            scrollTo($("#masonry-container"))
        });
        var o = $("#search-tattoo").keyup(debounce(function() {
            e = new RegExp(o.val(),"gi"),
            $(".tattoos-wrapper").isotope(),
            t()
        }, 200));
        $("#category-tattoos-buttons").on("click", "button", function() {
            i = $(this).attr("data-filter"),
            $(".tattoos-wrapper").isotope(),
            t()
        }),
        $("#artist-buttons").on("click", "button", function() {
            n = $(this).attr("data-filter"),
            $(".tattoos-wrapper").isotope(),
            t()
        }),
        $("#year-buttons").on("click", "button", function() {
            r = $(this).attr("data-filter"),
            $(".tattoos-wrapper").isotope(),
            t()
        }),
        $(".view-grid").click(function() {
            var t = new TimelineMax;
            t.add(TweenMax.to(".masonry-module", .4, {
                height: "350px"
            })).add(TweenMax.to(".trigger-grid", .2, {
                css: {
                    color: "#fff"
                }
            })).add(TweenMax.to(".icon-grid-default", .2, {
                opacity: 1
            }), "=-0.2").add(TweenMax.to(".trigger-masonry", .2, {
                css: {
                    color: "#3C3C3C"
                }
            })).add(TweenMax.to(".icon-masonry-default", .2, {
                opacity: .2
            }), "=-0.2"),
            setTimeout(function() {
                $(".tattoos-wrapper").isotope("layout")
            }, 450)
        }),
        $(".view-masonry").click(function() {
            var t = new TimelineMax;
            t.add(TweenMax.to(".masonry-module", 1, {
                height: "auto",
                immediateRender: !1
            })).add(TweenMax.to(".trigger-grid", .2, {
                css: {
                    color: "#3C3C3C"
                }
            })).add(TweenMax.to(".icon-grid-default", .2, {
                opacity: .2
            }), "=-0.2").add(TweenMax.to(".trigger-masonry", .2, {
                css: {
                    color: "#fff"
                }
            })).add(TweenMax.to(".icon-masonry-default", .2, {
                opacity: 1
            }), "=-0.2"),
            setTimeout(function() {
                $(".tattoos-wrapper").isotope("layout")
            }, 450)
        });
        var s, a;
        $(".news-wrapper").isotope({
            itemSelector: ".masonry-grid",
            percentPosition: !0,
            originLeft: !0,
            horizontalOrder: !0,
            layoutMode: "fitRows",
            filter: function() {
                var t = $(this)
                  , e = !s || t.attr("data-title").match(s)
                  , i = !a || t.attr("data-category").match(a);
                return e && i
            },
            masonry: {
                columnWidth: ".masonry-grid"
            }
        }).addClass("isotope");
        var l = $("#search-news").keyup(debounce(function() {
            s = new RegExp(l.val(),"gi"),
            $(".news-wrapper").isotope(),
            t()
        }, 200));
        $("#category-buttons").on("click", "button", function() {
            a = $(this).attr("data-filter"),
            $(".news-wrapper").isotope(),
            t()
        }),
        $(".hidden-filters").each(function(t, e) {
            var i = $(e);
            i.on("click", "button", function() {
                i.find(".is-checked").removeClass("is-checked"),
                $(this).addClass("is-checked")
            })
        })
    }
    function debounce(t, e) {
        var i;
        return function n() {
            function r() {
                t(),
                i = null
            }
            i && clearTimeout(i),
            i = setTimeout(r, e || 100)
        }
    }
    function escapeRegExp(t) {
        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    !function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return e(t)
        }
        : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        "use strict";
        function i(t, e) {
            e = e || et;
            var i = e.createElement("script");
            i.text = t,
            e.head.appendChild(i).parentNode.removeChild(i)
        }
        function n(t) {
            var e = !!t && "length"in t && t.length
              , i = dt.type(t);
            return "function" !== i && !dt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        function r(t, e, i) {
            return dt.isFunction(e) ? dt.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            }) : e.nodeType ? dt.grep(t, function(t) {
                return t === e !== i
            }) : "string" != typeof e ? dt.grep(t, function(t) {
                return st.call(e, t) > -1 !== i
            }) : St.test(e) ? dt.filter(e, t, i) : (e = dt.filter(e, t),
            dt.grep(t, function(t) {
                return st.call(e, t) > -1 !== i && 1 === t.nodeType
            }))
        }
        function o(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; )
                ;
            return t
        }
        function s(t) {
            var e = {};
            return dt.each(t.match(Mt) || [], function(t, i) {
                e[i] = !0
            }),
            e
        }
        function a(t) {
            return t
        }
        function l(t) {
            throw t
        }
        function u(t, e, i) {
            var n;
            try {
                t && dt.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && dt.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t)
            } catch (t) {
                i.call(void 0, t)
            }
        }
        function c() {
            et.removeEventListener("DOMContentLoaded", c),
            t.removeEventListener("load", c),
            dt.ready()
        }
        function h() {
            this.expando = dt.expando + h.uid++
        }
        function f(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ft.test(t) ? JSON.parse(t) : t)
        }
        function $(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(zt, "-$&").toLowerCase(),
                i = t.getAttribute(n),
                "string" == typeof i) {
                    try {
                        i = f(i)
                    } catch (t) {}
                    Nt.set(t, e, i)
                } else
                    i = void 0;
            return i
        }
        function p(t, e, i, n) {
            var r, o = 1, s = 20, a = n ? function() {
                return n.cur()
            }
            : function() {
                return dt.css(t, e, "")
            }
            , l = a(), u = i && i[3] || (dt.cssNumber[e] ? "" : "px"), c = (dt.cssNumber[e] || "px" !== u && +l) && qt.exec(dt.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3],
                i = i || [],
                c = +l || 1;
                do
                    o = o || ".5",
                    c /= o,
                    dt.style(t, e, c + u);
                while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return i && (c = +c || +l || 0,
            r = i[1] ? c + (i[1] + 1) * i[2] : +i[2],
            n && (n.unit = u,
            n.start = c,
            n.end = r)),
            r
        }
        function d(t) {
            var e, i = t.ownerDocument, n = t.nodeName, r = Ht[n];
            return r ? r : (e = i.body.appendChild(i.createElement(n)),
            r = dt.css(e, "display"),
            e.parentNode.removeChild(e),
            "none" === r && (r = "block"),
            Ht[n] = r,
            r)
        }
        function m(t, e) {
            for (var i, n, r = [], o = 0, s = t.length; o < s; o++)
                n = t[o],
                n.style && (i = n.style.display,
                e ? ("none" === i && (r[o] = Rt.get(n, "display") || null,
                r[o] || (n.style.display = "")),
                "" === n.style.display && Wt(n) && (r[o] = d(n))) : "none" !== i && (r[o] = "none",
                Rt.set(n, "display", i)));
            for (o = 0; o < s; o++)
                null != r[o] && (t[o].style.display = r[o]);
            return t
        }
        function g(t, e) {
            var i;
            return i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
            void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], i) : i
        }
        function v(t, e) {
            for (var i = 0, n = t.length; i < n; i++)
                Rt.set(t[i], "globalEval", !e || Rt.get(e[i], "globalEval"))
        }
        function y(t, e, i, n, r) {
            for (var o, s, a, l, u, c, h = e.createDocumentFragment(), f = [], p = 0, d = t.length; p < d; p++)
                if (o = t[p],
                o || 0 === o)
                    if ("object" === dt.type(o))
                        dt.merge(f, o.nodeType ? [o] : o);
                    else if (Gt.test(o)) {
                        for (s = s || h.appendChild(e.createElement("div")),
                        a = (Yt.exec(o) || ["", ""])[1].toLowerCase(),
                        l = Vt[a] || Vt._default,
                        s.innerHTML = l[1] + dt.htmlPrefilter(o) + l[2],
                        c = l[0]; c--; )
                            s = s.lastChild;
                        dt.merge(f, s.childNodes),
                        s = h.firstChild,
                        s.textContent = ""
                    } else
                        f.push(e.createTextNode(o));
            for (h.textContent = "",
            p = 0; o = f[p++]; )
                if (n && dt.inArray(o, n) > -1)
                    r && r.push(o);
                else if (u = dt.contains(o.ownerDocument, o),
                s = g(h.appendChild(o), "script"),
                u && v(s),
                i)
                    for (c = 0; o = s[c++]; )
                        Ut.test(o.type || "") && i.push(o);
            return h
        }
        function _() {
            return !0
        }
        function x() {
            return !1
        }
        function w() {
            try {
                return et.activeElement
            } catch (t) {}
        }
        function T(t, e, i, n, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i,
                i = void 0);
                for (a in e)
                    T(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == r ? (r = i,
            n = i = void 0) : null == r && ("string" == typeof i ? (r = n,
            n = void 0) : (r = n,
            n = i,
            i = void 0)),
            r === !1)
                r = x;
            else if (!r)
                return t;
            return 1 === o && (s = r,
            r = function(t) {
                return dt().off(t),
                s.apply(this, arguments)
            }
            ,
            r.guid = s.guid || (s.guid = dt.guid++)),
            t.each(function() {
                dt.event.add(this, e, r, n, i)
            })
        }
        function b(t, e) {
            return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
        }
        function S(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
        }
        function C(t) {
            var e = ne.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"),
            t
        }
        function k(t, e) {
            var i, n, r, o, s, a, l, u;
            if (1 === e.nodeType) {
                if (Rt.hasData(t) && (o = Rt.access(t),
                s = Rt.set(e, o),
                u = o.events)) {
                    delete s.handle,
                    s.events = {};
                    for (r in u)
                        for (i = 0,
                        n = u[r].length; i < n; i++)
                            dt.event.add(e, r, u[r][i])
                }
                Nt.hasData(t) && (a = Nt.access(t),
                l = dt.extend({}, a),
                Nt.set(e, l))
            }
        }
        function E(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && Xt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
        function O(t, e, n, r) {
            e = rt.apply([], e);
            var o, s, a, l, u, c, h = 0, f = t.length, p = f - 1, d = e[0], m = dt.isFunction(d);
            if (m || f > 1 && "string" == typeof d && !ft.checkClone && ie.test(d))
                return t.each(function(i) {
                    var o = t.eq(i);
                    m && (e[0] = d.call(this, i, o.html())),
                    O(o, e, n, r)
                });
            if (f && (o = y(e, t[0].ownerDocument, !1, t, r),
            s = o.firstChild,
            1 === o.childNodes.length && (o = s),
            s || r)) {
                for (a = dt.map(g(o, "script"), S),
                l = a.length; h < f; h++)
                    u = o,
                    h !== p && (u = dt.clone(u, !0, !0),
                    l && dt.merge(a, g(u, "script"))),
                    n.call(t[h], u, h);
                if (l)
                    for (c = a[a.length - 1].ownerDocument,
                    dt.map(a, C),
                    h = 0; h < l; h++)
                        u = a[h],
                        Ut.test(u.type || "") && !Rt.access(u, "globalEval") && dt.contains(c, u) && (u.src ? dt._evalUrl && dt._evalUrl(u.src) : i(u.textContent.replace(re, ""), c))
            }
            return t
        }
        function P(t, e, i) {
            for (var n, r = e ? dt.filter(e, t) : t, o = 0; null != (n = r[o]); o++)
                i || 1 !== n.nodeType || dt.cleanData(g(n)),
                n.parentNode && (i && dt.contains(n.ownerDocument, n) && v(g(n, "script")),
                n.parentNode.removeChild(n));
            return t
        }
        function M(t, e, i) {
            var n, r, o, s, a = t.style;
            return i = i || ae(t),
            i && (s = i.getPropertyValue(e) || i[e],
            "" !== s || dt.contains(t.ownerDocument, t) || (s = dt.style(t, e)),
            !ft.pixelMarginRight() && se.test(s) && oe.test(e) && (n = a.width,
            r = a.minWidth,
            o = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = i.width,
            a.width = n,
            a.minWidth = r,
            a.maxWidth = o)),
            void 0 !== s ? s + "" : s
        }
        function A(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }
        function L(t) {
            if (t in fe)
                return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = he.length; i--; )
                if (t = he[i] + e,
                t in fe)
                    return t
        }
        function D(t, e, i) {
            var n = qt.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }
        function I(t, e, i, n, r) {
            var o, s = 0;
            for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2)
                "margin" === i && (s += dt.css(t, i + $t[o], !0, r)),
                n ? ("content" === i && (s -= dt.css(t, "padding" + $t[o], !0, r)),
                "margin" !== i && (s -= dt.css(t, "border" + $t[o] + "Width", !0, r))) : (s += dt.css(t, "padding" + $t[o], !0, r),
                "padding" !== i && (s += dt.css(t, "border" + $t[o] + "Width", !0, r)));
            return s
        }
        function R(t, e, i) {
            var n, r = !0, o = ae(t), s = "border-box" === dt.css(t, "boxSizing", !1, o);
            if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]),
            n <= 0 || null == n) {
                if (n = M(t, e, o),
                (n < 0 || null == n) && (n = t.style[e]),
                se.test(n))
                    return n;
                r = s && (ft.boxSizingReliable() || n === t.style[e]),
                n = parseFloat(n) || 0
            }
            return n + I(t, e, i || (s ? "border" : "content"), r, o) + "px"
        }
        function N(t, e, i, n, r) {
            return new N.prototype.init(t,e,i,n,r)
        }
        function F() {
            de && (t.requestAnimationFrame(F),
            dt.fx.tick())
        }
        function z() {
            return t.setTimeout(function() {
                pe = void 0
            }),
            pe = dt.now()
        }
        function j(t, e) {
            var i, n = 0, r = {
                height: t
            };
            for (e = e ? 1 : 0; n < 4; n += 2 - e)
                i = $t[n],
                r["margin" + i] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t),
            r
        }
        function q(t, e, i) {
            for (var n, r = (H.tweeners[e] || []).concat(H.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (n = r[o].call(i, e, t))
                    return n
        }
        function W(t, e, i) {
            var n, r, o, s, a, l, u, c, h = "width"in e || "height"in e, f = this, p = {}, d = t.style, g = t.nodeType && Wt(t), v = Rt.get(t, "fxshow");
            i.queue || (s = dt._queueHooks(t, "fx"),
            null == s.unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            f.always(function() {
                f.always(function() {
                    s.unqueued--,
                    dt.queue(t, "fx").length || s.empty.fire()
                })
            }));
            for (n in e)
                if (r = e[n],
                me.test(r)) {
                    if (delete e[n],
                    o = o || "toggle" === r,
                    r === (g ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[n])
                            continue;
                        g = !0
                    }
                    p[n] = v && v[n] || dt.style(t, n)
                }
            if (l = !dt.isEmptyObject(e),
            l || !dt.isEmptyObject(p)) {
                h && 1 === t.nodeType && (i.overflow = [d.overflow, d.overflowX, d.overflowY],
                u = v && v.display,
                null == u && (u = Rt.get(t, "display")),
                c = dt.css(t, "display"),
                "none" === c && (u ? c = u : (m([t], !0),
                u = t.style.display || u,
                c = dt.css(t, "display"),
                m([t]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === dt.css(t, "float") && (l || (f.done(function() {
                    d.display = u
                }),
                null == u && (c = d.display,
                u = "none" === c ? "" : c)),
                d.display = "inline-block")),
                i.overflow && (d.overflow = "hidden",
                f.always(function() {
                    d.overflow = i.overflow[0],
                    d.overflowX = i.overflow[1],
                    d.overflowY = i.overflow[2]
                })),
                l = !1;
                for (n in p)
                    l || (v ? "hidden"in v && (g = v.hidden) : v = Rt.access(t, "fxshow", {
                        display: u
                    }),
                    o && (v.hidden = !g),
                    g && m([t], !0),
                    f.done(function() {
                        g || m([t]),
                        Rt.remove(t, "fxshow");
                        for (n in p)
                            dt.style(t, n, p[n])
                    })),
                    l = q(g ? v[n] : 0, n, f),
                    n in v || (v[n] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
            }
        }
        function B(t, e) {
            var i, n, r, o, s;
            for (i in t)
                if (n = dt.camelCase(i),
                r = e[n],
                o = t[i],
                dt.isArray(o) && (r = o[1],
                o = t[i] = o[0]),
                i !== n && (t[n] = o,
                delete t[i]),
                s = dt.cssHooks[n],
                s && "expand"in s) {
                    o = s.expand(o),
                    delete t[n];
                    for (i in o)
                        i in t || (t[i] = o[i],
                        e[i] = r)
                } else
                    e[n] = r
        }
        function H(t, e, i) {
            var n, r, o = 0, s = H.prefilters.length, a = dt.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (r)
                    return !1;
                for (var e = pe || z(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, o = 1 - n, s = 0, l = u.tweens.length; s < l; s++)
                    u.tweens[s].run(o);
                return a.notifyWith(t, [u, o, i]),
                o < 1 && l ? i : (a.resolveWith(t, [u]),
                !1)
            }, u = a.promise({
                elem: t,
                props: dt.extend({}, e),
                opts: dt.extend(!0, {
                    specialEasing: {},
                    easing: dt.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: pe || z(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = dt.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n),
                    n
                },
                stop: function(e) {
                    var i = 0
                      , n = e ? u.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; i < n; i++)
                        u.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]),
                    a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]),
                    this
                }
            }), c = u.props;
            for (B(c, u.opts.specialEasing); o < s; o++)
                if (n = H.prefilters[o].call(u, t, c, u.opts))
                    return dt.isFunction(n.stop) && (dt._queueHooks(u.elem, u.opts.queue).stop = dt.proxy(n.stop, n)),
                    n;
            return dt.map(c, q, u),
            dt.isFunction(u.opts.start) && u.opts.start.call(t, u),
            dt.fx.timer(dt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        function X(t) {
            var e = t.match(Mt) || [];
            return e.join(" ")
        }
        function Y(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        function U(t, e, i, n) {
            var r;
            if (dt.isArray(e))
                dt.each(e, function(e, r) {
                    i || ke.test(t) ? n(t, r) : U(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
                });
            else if (i || "object" !== dt.type(e))
                n(t, e);
            else
                for (r in e)
                    U(t + "[" + r + "]", e[r], i, n)
        }
        function V(t) {
            return function(e, i) {
                "string" != typeof e && (i = e,
                e = "*");
                var n, r = 0, o = e.toLowerCase().match(Mt) || [];
                if (dt.isFunction(i))
                    for (; n = o[r++]; )
                        "+" === n[0] ? (n = n.slice(1) || "*",
                        (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }
        function G(t, e, i, n) {
            function r(a) {
                var l;
                return o[a] = !0,
                dt.each(t[a] || [], function(t, a) {
                    var u = a(e, i, n);
                    return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u),
                    r(u),
                    !1)
                }),
                l
            }
            var o = {}
              , s = t === ze;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }
        function Q(t, e) {
            var i, n, r = dt.ajaxSettings.flatOptions || {};
            for (i in e)
                void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && dt.extend(!0, t, n),
            t
        }
        function Z(t, e, i) {
            for (var n, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                l.shift(),
                void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (r in a)
                    if (a[r] && a[r].test(n)) {
                        l.unshift(r);
                        break
                    }
            if (l[0]in i)
                o = l[0];
            else {
                for (r in i) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            if (o)
                return o !== l[0] && l.unshift(o),
                i[o]
        }
        function J(t, e, i, n) {
            var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters)
                    u[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o; )
                if (t.responseFields[o] && (i[t.responseFields[o]] = e),
                !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                l = o,
                o = c.shift())
                    if ("*" === o)
                        o = l;
                    else if ("*" !== l && l !== o) {
                        if (s = u[l + " " + o] || u["* " + o],
                        !s)
                            for (r in u)
                                if (a = r.split(" "),
                                a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0],
                                    c.unshift(a[1]));
                                    break
                                }
                        if (s !== !0)
                            if (s && t.throws)
                                e = s(e);
                            else
                                try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + o
                                    }
                                }
                    }
            return {
                state: "success",
                data: e
            }
        }
        function K(t) {
            return dt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var tt = []
          , et = t.document
          , it = Object.getPrototypeOf
          , nt = tt.slice
          , rt = tt.concat
          , ot = tt.push
          , st = tt.indexOf
          , at = {}
          , lt = at.toString
          , ut = at.hasOwnProperty
          , ct = ut.toString
          , ht = ct.call(Object)
          , ft = {}
          , pt = "3.1.1"
          , dt = function(t, e) {
            return new dt.fn.init(t,e)
        }
          , mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , gt = /^-ms-/
          , vt = /-([a-z])/g
          , yt = function(t, e) {
            return e.toUpperCase()
        };
        dt.fn = dt.prototype = {
            jquery: pt,
            constructor: dt,
            length: 0,
            toArray: function() {
                return nt.call(this)
            },
            get: function(t) {
                return null == t ? nt.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = dt.merge(this.constructor(), t);
                return e.prevObject = this,
                e
            },
            each: function(t) {
                return dt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(dt.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(nt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length
                  , i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ot,
            sort: tt.sort,
            splice: tt.splice
        },
        dt.extend = dt.fn.extend = function() {
            var t, e, i, n, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s,
            s = arguments[a] || {},
            a++),
            "object" == typeof s || dt.isFunction(s) || (s = {}),
            a === l && (s = this,
            a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        i = s[e],
                        n = t[e],
                        s !== n && (u && n && (dt.isPlainObject(n) || (r = dt.isArray(n))) ? (r ? (r = !1,
                        o = i && dt.isArray(i) ? i : []) : o = i && dt.isPlainObject(i) ? i : {},
                        s[e] = dt.extend(u, o, n)) : void 0 !== n && (s[e] = n));
            return s
        }
        ,
        dt.extend({
            expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === dt.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = dt.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function(t) {
                var e, i;
                return !(!t || "[object Object]" !== lt.call(t) || (e = it(t)) && (i = ut.call(e, "constructor") && e.constructor,
                "function" != typeof i || ct.call(i) !== ht))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                i(t)
            },
            camelCase: function(t) {
                return t.replace(gt, "ms-").replace(vt, yt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, r = 0;
                if (n(t))
                    for (i = t.length; r < i && e.call(t[r], r, t[r]) !== !1; r++)
                        ;
                else
                    for (r in t)
                        if (e.call(t[r], r, t[r]) === !1)
                            break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(mt, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? dt.merge(i, "string" == typeof t ? [t] : t) : ot.call(i, t)),
                i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : st.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; n < i; n++)
                    t[r++] = e[n];
                return t.length = r,
                t
            },
            grep: function(t, e, i) {
                for (var n, r = [], o = 0, s = t.length, a = !i; o < s; o++)
                    n = !e(t[o], o),
                    n !== a && r.push(t[o]);
                return r
            },
            map: function(t, e, i) {
                var r, o, s = 0, a = [];
                if (n(t))
                    for (r = t.length; s < r; s++)
                        o = e(t[s], s, i),
                        null != o && a.push(o);
                else
                    for (s in t)
                        o = e(t[s], s, i),
                        null != o && a.push(o);
                return rt.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                if ("string" == typeof e && (i = t[e],
                e = t,
                t = i),
                dt.isFunction(t))
                    return n = nt.call(arguments, 2),
                    r = function() {
                        return t.apply(e || this, n.concat(nt.call(arguments)))
                    }
                    ,
                    r.guid = t.guid = t.guid || dt.guid++,
                    r
            },
            now: Date.now,
            support: ft
        }),
        "function" == typeof Symbol && (dt.fn[Symbol.iterator] = tt[Symbol.iterator]),
        dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            at["[object " + e + "]"] = e.toLowerCase()
        });
        var _t = function(t) {
            function e(t, e, i, n) {
                var r, o, s, a, l, u, c, f = e && e.ownerDocument, d = e ? e.nodeType : 9;
                if (i = i || [],
                "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                    return i;
                if (!n && ((e ? e.ownerDocument || e : W) !== D && L(e),
                e = e || D,
                R)) {
                    if (11 !== d && (l = yt.exec(t)))
                        if (r = l[1]) {
                            if (9 === d) {
                                if (!(s = e.getElementById(r)))
                                    return i;
                                if (s.id === r)
                                    return i.push(s),
                                    i
                            } else if (f && (s = f.getElementById(r)) && j(e, s) && s.id === r)
                                return i.push(s),
                                i
                        } else {
                            if (l[2])
                                return K.apply(i, e.getElementsByTagName(t)),
                                i;
                            if ((r = l[3]) && T.getElementsByClassName && e.getElementsByClassName)
                                return K.apply(i, e.getElementsByClassName(r)),
                                i
                        }
                    if (T.qsa && !U[t + " "] && (!N || !N.test(t))) {
                        if (1 !== d)
                            f = e,
                            c = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(wt, Tt) : e.setAttribute("id", a = q),
                            u = k(t),
                            o = u.length; o--; )
                                u[o] = "#" + a + " " + p(u[o]);
                            c = u.join(","),
                            f = $.test(t) && h(e.parentNode) || e
                        }
                        if (c)
                            try {
                                return K.apply(i, f.querySelectorAll(c)),
                                i
                            } catch (t) {} finally {
                                a === q && e.removeAttribute("id")
                            }
                    }
                }
                return O(t.replace(lt, "$1"), e, i, n)
            }
            function i() {
                function t(i, n) {
                    return e.push(i + " ") > b.cacheLength && delete t[e.shift()],
                    t[i + " "] = n
                }
                var e = [];
                return t
            }
            function n(t) {
                return t[q] = !0,
                t
            }
            function r(t) {
                var e = D.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                    e = null
                }
            }
            function o(t, e) {
                for (var i = t.split("|"), n = i.length; n--; )
                    b.attrHandle[i[n]] = e
            }
            function s(t, e) {
                var i = e && t
                  , n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n)
                    return n;
                if (i)
                    for (; i = i.nextSibling; )
                        if (i === e)
                            return -1;
                return t ? 1 : -1
            }
            function a(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }
            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }
            function u(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && e.disabled === !1 ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && St(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function c(t) {
                return n(function(e) {
                    return e = +e,
                    n(function(i, n) {
                        for (var r, o = t([], i.length, e), s = o.length; s--; )
                            i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }
            function h(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }
            function f() {}
            function p(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++)
                    n += t[e].value;
                return n
            }
            function d(t, e, i) {
                var n = e.dir
                  , r = e.next
                  , o = r || n
                  , s = i && "parentNode" === o
                  , a = H++;
                return e.first ? function(e, i, r) {
                    for (; e = e[n]; )
                        if (1 === e.nodeType || s)
                            return t(e, i, r);
                    return !1
                }
                : function(e, i, l) {
                    var u, c, h, f = [B, a];
                    if (l) {
                        for (; e = e[n]; )
                            if ((1 === e.nodeType || s) && t(e, i, l))
                                return !0
                    } else
                        for (; e = e[n]; )
                            if (1 === e.nodeType || s)
                                if (h = e[q] || (e[q] = {}),
                                c = h[e.uniqueID] || (h[e.uniqueID] = {}),
                                r && r === e.nodeName.toLowerCase())
                                    e = e[n] || e;
                                else {
                                    if ((u = c[o]) && u[0] === B && u[1] === a)
                                        return f[2] = u[2];
                                    if (c[o] = f,
                                    f[2] = t(e, i, l))
                                        return !0
                                }
                    return !1
                }
            }
            function m(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var r = t.length; r--; )
                        if (!t[r](e, i, n))
                            return !1;
                    return !0
                }
                : t[0]
            }
            function g(t, i, n) {
                for (var r = 0, o = i.length; r < o; r++)
                    e(t, i[r], n);
                return n
            }
            function v(t, e, i, n, r) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
                    (o = t[a]) && (i && !i(o, n, r) || (s.push(o),
                    u && e.push(a)));
                return s
            }
            function y(t, e, i, r, o, s) {
                return r && !r[q] && (r = y(r)),
                o && !o[q] && (o = y(o, s)),
                n(function(n, s, a, l) {
                    var u, c, h, f = [], p = [], d = s.length, m = n || g(e || "*", a.nodeType ? [a] : a, []), y = !t || !n && e ? m : v(m, f, t, a, l), _ = i ? o || (n ? t : d || r) ? [] : s : y;
                    if (i && i(y, _, a, l),
                    r)
                        for (u = v(_, p),
                        r(u, [], a, l),
                        c = u.length; c--; )
                            (h = u[c]) && (_[p[c]] = !(y[p[c]] = h));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (u = [],
                                c = _.length; c--; )
                                    (h = _[c]) && u.push(y[c] = h);
                                o(null, _ = [], u, l)
                            }
                            for (c = _.length; c--; )
                                (h = _[c]) && (u = o ? et(n, h) : f[c]) > -1 && (n[u] = !(s[u] = h))
                        }
                    } else
                        _ = v(_ === s ? _.splice(d, _.length) : _),
                        o ? o(null, s, _, l) : K.apply(s, _)
                })
            }
            function _(t) {
                for (var e, i, n, r = t.length, o = b.relative[t[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = d(function(t) {
                    return t === e
                }, s, !0), u = d(function(t) {
                    return et(e, t) > -1
                }, s, !0), c = [function(t, i, n) {
                    var r = !o && (n || i !== P) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                    return e = null,
                    r
                }
                ]; a < r; a++)
                    if (i = b.relative[t[a].type])
                        c = [d(m(c), i)];
                    else {
                        if (i = b.filter[t[a].type].apply(null, t[a].matches),
                        i[q]) {
                            for (n = ++a; n < r && !b.relative[t[n].type]; n++)
                                ;
                            return y(a > 1 && m(c), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, a < n && _(t.slice(a, n)), n < r && _(t = t.slice(n)), n < r && p(t))
                        }
                        c.push(i)
                    }
                return m(c)
            }
            function x(t, i) {
                var r = i.length > 0
                  , o = t.length > 0
                  , s = function(n, s, a, l, u) {
                    var c, h, f, p = 0, d = "0", m = n && [], g = [], y = P, _ = n || o && b.find.TAG("*", u), x = B += null == y ? 1 : Math.random() || .1, w = _.length;
                    for (u && (P = s === D || s || u); d !== w && null != (c = _[d]); d++) {
                        if (o && c) {
                            for (h = 0,
                            s || c.ownerDocument === D || (L(c),
                            a = !R); f = t[h++]; )
                                if (f(c, s || D, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (B = x)
                        }
                        r && ((c = !f && c) && p--,
                        n && m.push(c))
                    }
                    if (p += d,
                    r && d !== p) {
                        for (h = 0; f = i[h++]; )
                            f(m, g, s, a);
                        if (n) {
                            if (p > 0)
                                for (; d--; )
                                    m[d] || g[d] || (g[d] = Z.call(l));
                            g = v(g)
                        }
                        K.apply(l, g),
                        u && !n && g.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return u && (B = x,
                    P = y),
                    m
                };
                return r ? n(s) : s
            }
            var w, T, b, S, C, k, E, O, P, M, A, L, D, I, R, N, F, z, j, q = "sizzle" + 1 * new Date, W = t.document, B = 0, H = 0, X = i(), Y = i(), U = i(), V = function(t, e) {
                return t === e && (A = !0),
                0
            }, G = {}.hasOwnProperty, Q = [], Z = Q.pop, J = Q.push, K = Q.push, tt = Q.slice, et = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e)
                        return i;
                return -1
            }, it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)", at = new RegExp(nt + "+","g"), lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), ut = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ht = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), ft = new RegExp(st), pt = new RegExp("^" + rt + "$"), dt = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
                bool: new RegExp("^(?:" + it + ")$","i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
            }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _t = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), xt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Tt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, bt = function() {
                L()
            }, St = d(function(t) {
                return t.disabled === !0 && ("form"in t || "label"in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                K.apply(Q = tt.call(W.childNodes), W.childNodes),
                Q[W.childNodes.length].nodeType
            } catch (t) {
                K = {
                    apply: Q.length ? function(t, e) {
                        J.apply(t, tt.call(e))
                    }
                    : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++]; )
                            ;
                        t.length = i - 1
                    }
                }
            }
            T = e.support = {},
            C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }
            ,
            L = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : W;
                return n !== D && 9 === n.nodeType && n.documentElement ? (D = n,
                I = D.documentElement,
                R = !C(D),
                W !== D && (i = D.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", bt, !1) : i.attachEvent && i.attachEvent("onunload", bt)),
                T.attributes = r(function(t) {
                    return t.className = "i",
                    !t.getAttribute("className")
                }),
                T.getElementsByTagName = r(function(t) {
                    return t.appendChild(D.createComment("")),
                    !t.getElementsByTagName("*").length
                }),
                T.getElementsByClassName = vt.test(D.getElementsByClassName),
                T.getById = r(function(t) {
                    return I.appendChild(t).id = q,
                    !D.getElementsByName || !D.getElementsByName(q).length
                }),
                T.getById ? (b.filter.ID = function(t) {
                    var e = t.replace(_t, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                ,
                b.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && R) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }
                ) : (b.filter.ID = function(t) {
                    var e = t.replace(_t, xt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }
                ,
                b.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && R) {
                        var i, n, r, o = e.getElementById(t);
                        if (o) {
                            if (i = o.getAttributeNode("id"),
                            i && i.value === t)
                                return [o];
                            for (r = e.getElementsByName(t),
                            n = 0; o = r[n++]; )
                                if (i = o.getAttributeNode("id"),
                                i && i.value === t)
                                    return [o]
                        }
                        return []
                    }
                }
                ),
                b.find.TAG = T.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : T.qsa ? e.querySelectorAll(t) : void 0
                }
                : function(t, e) {
                    var i, n = [], r = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[r++]; )
                            1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }
                ,
                b.find.CLASS = T.getElementsByClassName && function(t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && R)
                        return e.getElementsByClassName(t)
                }
                ,
                F = [],
                N = [],
                (T.qsa = vt.test(D.querySelectorAll)) && (r(function(t) {
                    I.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + nt + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || N.push("\\[" + nt + "*(?:value|" + it + ")"),
                    t.querySelectorAll("[id~=" + q + "-]").length || N.push("~="),
                    t.querySelectorAll(":checked").length || N.push(":checked"),
                    t.querySelectorAll("a#" + q + "+*").length || N.push(".#.+[+~]")
                }),
                r(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = D.createElement("input");
                    e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length && N.push("name" + nt + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"),
                    I.appendChild(t).disabled = !0,
                    2 !== t.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    N.push(",.*:")
                })),
                (T.matchesSelector = vt.test(z = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(t) {
                    T.disconnectedMatch = z.call(t, "*"),
                    z.call(t, "[s!='']:x"),
                    F.push("!=", st)
                }),
                N = N.length && new RegExp(N.join("|")),
                F = F.length && new RegExp(F.join("|")),
                e = vt.test(I.compareDocumentPosition),
                j = e || vt.test(I.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t
                      , n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                }
                : function(t, e) {
                    if (e)
                        for (; e = e.parentNode; )
                            if (e === t)
                                return !0;
                    return !1
                }
                ,
                V = e ? function(t, e) {
                    if (t === e)
                        return A = !0,
                        0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                    1 & i || !T.sortDetached && e.compareDocumentPosition(t) === i ? t === D || t.ownerDocument === W && j(W, t) ? -1 : e === D || e.ownerDocument === W && j(W, e) ? 1 : M ? et(M, t) - et(M, e) : 0 : 4 & i ? -1 : 1)
                }
                : function(t, e) {
                    if (t === e)
                        return A = !0,
                        0;
                    var i, n = 0, r = t.parentNode, o = e.parentNode, a = [t], l = [e];
                    if (!r || !o)
                        return t === D ? -1 : e === D ? 1 : r ? -1 : o ? 1 : M ? et(M, t) - et(M, e) : 0;
                    if (r === o)
                        return s(t, e);
                    for (i = t; i = i.parentNode; )
                        a.unshift(i);
                    for (i = e; i = i.parentNode; )
                        l.unshift(i);
                    for (; a[n] === l[n]; )
                        n++;
                    return n ? s(a[n], l[n]) : a[n] === W ? -1 : l[n] === W ? 1 : 0
                }
                ,
                D) : D
            }
            ,
            e.matches = function(t, i) {
                return e(t, null, null, i)
            }
            ,
            e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== D && L(t),
                i = i.replace(ht, "='$1']"),
                T.matchesSelector && R && !U[i + " "] && (!F || !F.test(i)) && (!N || !N.test(i)))
                    try {
                        var n = z.call(t, i);
                        if (n || T.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return n
                    } catch (t) {}
                return e(i, D, null, [t]).length > 0
            }
            ,
            e.contains = function(t, e) {
                return (t.ownerDocument || t) !== D && L(t),
                j(t, e)
            }
            ,
            e.attr = function(t, e) {
                (t.ownerDocument || t) !== D && L(t);
                var i = b.attrHandle[e.toLowerCase()]
                  , n = i && G.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
                return void 0 !== n ? n : T.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }
            ,
            e.escape = function(t) {
                return (t + "").replace(wt, Tt)
            }
            ,
            e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            e.uniqueSort = function(t) {
                var e, i = [], n = 0, r = 0;
                if (A = !T.detectDuplicates,
                M = !T.sortStable && t.slice(0),
                t.sort(V),
                A) {
                    for (; e = t[r++]; )
                        e === t[r] && (n = i.push(r));
                    for (; n--; )
                        t.splice(i[n], 1)
                }
                return M = null,
                t
            }
            ,
            S = e.getText = function(t) {
                var e, i = "", n = 0, r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            i += S(t)
                    } else if (3 === r || 4 === r)
                        return t.nodeValue
                } else
                    for (; e = t[n++]; )
                        i += S(e);
                return i
            }
            ,
            b = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: dt,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(_t, xt),
                        t[3] = (t[3] || t[4] || t[5] || "").replace(_t, xt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                        "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                        t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                        t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ft.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                        t[2] = i.slice(0, e)),
                        t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(_t, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        }
                        : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = X[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && X(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === i : !i || (o += "",
                            "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, r) {
                        var o = "nth" !== t.slice(0, 3)
                          , s = "last" !== t.slice(-4)
                          , a = "of-type" === e;
                        return 1 === n && 0 === r ? function(t) {
                            return !!t.parentNode
                        }
                        : function(e, i, l) {
                            var u, c, h, f, p, d, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, _ = !1;
                            if (g) {
                                if (o) {
                                    for (; m; ) {
                                        for (f = e; f = f[m]; )
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                                return !1;
                                        d = m = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [s ? g.firstChild : g.lastChild],
                                s && y) {
                                    for (f = g,
                                    h = f[q] || (f[q] = {}),
                                    c = h[f.uniqueID] || (h[f.uniqueID] = {}),
                                    u = c[t] || [],
                                    p = u[0] === B && u[1],
                                    _ = p && u[2],
                                    f = p && g.childNodes[p]; f = ++p && f && f[m] || (_ = p = 0) || d.pop(); )
                                        if (1 === f.nodeType && ++_ && f === e) {
                                            c[t] = [B, p, _];
                                            break
                                        }
                                } else if (y && (f = e,
                                h = f[q] || (f[q] = {}),
                                c = h[f.uniqueID] || (h[f.uniqueID] = {}),
                                u = c[t] || [],
                                p = u[0] === B && u[1],
                                _ = p),
                                _ === !1)
                                    for (; (f = ++p && f && f[m] || (_ = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++_ || (y && (h = f[q] || (f[q] = {}),
                                    c = h[f.uniqueID] || (h[f.uniqueID] = {}),
                                    c[t] = [B, _]),
                                    f !== e)); )
                                        ;
                                return _ -= r,
                                _ === n || _ % n === 0 && _ / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var r, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[q] ? o(i) : o.length > 1 ? (r = [t, t, "", i],
                        b.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, r = o(t, i), s = r.length; s--; )
                                n = et(t, r[s]),
                                t[n] = !(e[n] = r[s])
                        }) : function(t) {
                            return o(t, 0, r)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = []
                          , i = []
                          , r = E(t.replace(lt, "$1"));
                        return r[q] ? n(function(t, e, i, n) {
                            for (var o, s = r(t, null, n, []), a = t.length; a--; )
                                (o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, n, o) {
                            return e[0] = t,
                            r(e, null, o, i),
                            e[0] = null,
                            !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(_t, xt),
                        function(e) {
                            return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                        }
                    }),
                    lang: n(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t),
                        t = t.replace(_t, xt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return i = i.toLowerCase(),
                                    i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);return !1
                        }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === I
                    },
                    focus: function(t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: u(!1),
                    disabled: u(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !b.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: c(function(t, e) {
                        for (var i = 0; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var i = 1; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    lt: c(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0; )
                            t.push(n);
                        return t
                    }),
                    gt: c(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e; )
                            t.push(n);
                        return t
                    })
                }
            },
            b.pseudos.nth = b.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                b.pseudos[w] = a(w);
            for (w in {
                submit: !0,
                reset: !0
            })
                b.pseudos[w] = l(w);
            return f.prototype = b.filters = b.pseudos,
            b.setFilters = new f,
            k = e.tokenize = function(t, i) {
                var n, r, o, s, a, l, u, c = Y[t + " "];
                if (c)
                    return i ? 0 : c.slice(0);
                for (a = t,
                l = [],
                u = b.preFilter; a; ) {
                    n && !(r = ut.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                    l.push(o = [])),
                    n = !1,
                    (r = ct.exec(a)) && (n = r.shift(),
                    o.push({
                        value: n,
                        type: r[0].replace(lt, " ")
                    }),
                    a = a.slice(n.length));
                    for (s in b.filter)
                        !(r = dt[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(),
                        o.push({
                            value: n,
                            type: s,
                            matches: r
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return i ? a.length : a ? e.error(t) : Y(t, l).slice(0)
            }
            ,
            E = e.compile = function(t, e) {
                var i, n = [], r = [], o = U[t + " "];
                if (!o) {
                    for (e || (e = k(t)),
                    i = e.length; i--; )
                        o = _(e[i]),
                        o[q] ? n.push(o) : r.push(o);
                    o = U(t, x(r, n)),
                    o.selector = t
                }
                return o
            }
            ,
            O = e.select = function(t, e, i, n) {
                var r, o, s, a, l, u = "function" == typeof t && t, c = !n && k(t = u.selector || t);
                if (i = i || [],
                1 === c.length) {
                    if (o = c[0] = c[0].slice(0),
                    o.length > 2 && "ID" === (s = o[0]).type && 9 === e.nodeType && R && b.relative[o[1].type]) {
                        if (e = (b.find.ID(s.matches[0].replace(_t, xt), e) || [])[0],
                        !e)
                            return i;
                        u && (e = e.parentNode),
                        t = t.slice(o.shift().value.length)
                    }
                    for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r],
                    !b.relative[a = s.type]); )
                        if ((l = b.find[a]) && (n = l(s.matches[0].replace(_t, xt), $.test(o[0].type) && h(e.parentNode) || e))) {
                            if (o.splice(r, 1),
                            t = n.length && p(o),
                            !t)
                                return K.apply(i, n),
                                i;
                            break
                        }
                }
                return (u || E(t, c))(n, e, !R, i, !e || $.test(t) && h(e.parentNode) || e),
                i
            }
            ,
            T.sortStable = q.split("").sort(V).join("") === q,
            T.detectDuplicates = !!A,
            L(),
            T.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
            }),
            r(function(t) {
                return t.innerHTML = "<a href='#'></a>",
                "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                if (!i)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }),
            T.attributes && r(function(t) {
                return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue
            }),
            r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(it, function(t, e, i) {
                var n;
                if (!i)
                    return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }),
            e
        }(t);
        dt.find = _t,
        dt.expr = _t.selectors,
        dt.expr[":"] = dt.expr.pseudos,
        dt.uniqueSort = dt.unique = _t.uniqueSort,
        dt.text = _t.getText,
        dt.isXMLDoc = _t.isXML,
        dt.contains = _t.contains,
        dt.escapeSelector = _t.escape;
        var xt = function(t, e, i) {
            for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (r && dt(t).is(i))
                        break;
                    n.push(t)
                }
            return n
        }
          , wt = function(t, e) {
            for (var i = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i
        }
          , Tt = dt.expr.match.needsContext
          , bt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
          , St = /^.[^:#\[\.,]*$/;
        dt.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"),
            1 === e.length && 1 === n.nodeType ? dt.find.matchesSelector(n, t) ? [n] : [] : dt.find.matches(t, dt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }
        ,
        dt.fn.extend({
            find: function(t) {
                var e, i, n = this.length, r = this;
                if ("string" != typeof t)
                    return this.pushStack(dt(t).filter(function() {
                        for (e = 0; e < n; e++)
                            if (dt.contains(r[e], this))
                                return !0
                    }));
                for (i = this.pushStack([]),
                e = 0; e < n; e++)
                    dt.find(t, r[e], i);
                return n > 1 ? dt.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(r(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(r(this, t || [], !0))
            },
            is: function(t) {
                return !!r(this, "string" == typeof t && Tt.test(t) ? dt(t) : t || [], !1).length
            }
        });
        var Ct, kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Et = dt.fn.init = function(t, e, i) {
            var n, r;
            if (!t)
                return this;
            if (i = i || Ct,
            "string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : kt.exec(t),
                !n || !n[1] && e)
                    return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof dt ? e[0] : e,
                    dt.merge(this, dt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : et, !0)),
                    bt.test(n[1]) && dt.isPlainObject(e))
                        for (n in e)
                            dt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return r = et.getElementById(n[2]),
                r && (this[0] = r,
                this.length = 1),
                this
            }
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : dt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(dt) : dt.makeArray(t, this)
        }
        ;
        Et.prototype = dt.fn,
        Ct = dt(et);
        var Ot = /^(?:parents|prev(?:Until|All))/
          , Pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        dt.fn.extend({
            has: function(t) {
                var e = dt(t, this)
                  , i = e.length;
                return this.filter(function() {
                    for (var t = 0; t < i; t++)
                        if (dt.contains(this, e[t]))
                            return !0
                })
            },
            closest: function(t, e) {
                var i, n = 0, r = this.length, o = [], s = "string" != typeof t && dt(t);
                if (!Tt.test(t))
                    for (; n < r; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && dt.find.matchesSelector(i, t))) {
                                o.push(i);
                                break
                            }
                return this.pushStack(o.length > 1 ? dt.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? st.call(dt(t), this[0]) : st.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
        dt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return xt(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return xt(t, "parentNode", i)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return xt(t, "nextSibling")
            },
            prevAll: function(t) {
                return xt(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return xt(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return xt(t, "previousSibling", i)
            },
            siblings: function(t) {
                return wt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return wt(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || dt.merge([], t.childNodes)
            }
        }, function(t, e) {
            dt.fn[t] = function(i, n) {
                var r = dt.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i),
                n && "string" == typeof n && (r = dt.filter(n, r)),
                this.length > 1 && (Pt[t] || dt.uniqueSort(r),
                Ot.test(t) && r.reverse()),
                this.pushStack(r)
            }
        });
        var Mt = /[^\x20\t\r\n\f]+/g;
        dt.Callbacks = function(t) {
            t = "string" == typeof t ? s(t) : dt.extend({}, t);
            var e, i, n, r, o = [], a = [], l = -1, u = function() {
                for (r = t.once,
                n = e = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < o.length; )
                        o[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = o.length,
                        i = !1);
                t.memory || (i = !1),
                e = !1,
                r && (o = i ? [] : "")
            }, c = {
                add: function() {
                    return o && (i && !e && (l = o.length - 1,
                    a.push(i)),
                    function e(i) {
                        dt.each(i, function(i, n) {
                            dt.isFunction(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== dt.type(n) && e(n)
                        })
                    }(arguments),
                    i && !e && u()),
                    this
                },
                remove: function() {
                    return dt.each(arguments, function(t, e) {
                        for (var i; (i = dt.inArray(e, o, i)) > -1; )
                            o.splice(i, 1),
                            i <= l && l--
                    }),
                    this
                },
                has: function(t) {
                    return t ? dt.inArray(t, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []),
                    this
                },
                disable: function() {
                    return r = a = [],
                    o = i = "",
                    this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = a = [],
                    i || e || (o = i = ""),
                    this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, i) {
                    return r || (i = i || [],
                    i = [t, i.slice ? i.slice() : i],
                    a.push(i),
                    e || u()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!n
                }
            };
            return c
        }
        ,
        dt.extend({
            Deferred: function(e) {
                var i = [["notify", "progress", dt.Callbacks("memory"), dt.Callbacks("memory"), 2], ["resolve", "done", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 1, "rejected"]]
                  , n = "pending"
                  , r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(t) {
                        return r.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return dt.Deferred(function(e) {
                            dt.each(i, function(i, n) {
                                var r = dt.isFunction(t[n[4]]) && t[n[4]];
                                o[n[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && dt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, r ? [t] : arguments)
                                })
                            }),
                            t = null
                        }).promise()
                    },
                    then: function(e, n, r) {
                        function o(e, i, n, r) {
                            return function() {
                                var u = this
                                  , c = arguments
                                  , h = function() {
                                    var t, h;
                                    if (!(e < s)) {
                                        if (t = n.apply(u, c),
                                        t === i.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        h = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                        dt.isFunction(h) ? r ? h.call(t, o(s, i, a, r), o(s, i, l, r)) : (s++,
                                        h.call(t, o(s, i, a, r), o(s, i, l, r), o(s, i, a, i.notifyWith))) : (n !== a && (u = void 0,
                                        c = [t]),
                                        (r || i.resolveWith)(u, c))
                                    }
                                }
                                  , f = r ? h : function() {
                                    try {
                                        h()
                                    } catch (t) {
                                        dt.Deferred.exceptionHook && dt.Deferred.exceptionHook(t, f.stackTrace),
                                        e + 1 >= s && (n !== l && (u = void 0,
                                        c = [t]),
                                        i.rejectWith(u, c))
                                    }
                                }
                                ;
                                e ? f() : (dt.Deferred.getStackHook && (f.stackTrace = dt.Deferred.getStackHook()),
                                t.setTimeout(f))
                            }
                        }
                        var s = 0;
                        return dt.Deferred(function(t) {
                            i[0][3].add(o(0, t, dt.isFunction(r) ? r : a, t.notifyWith)),
                            i[1][3].add(o(0, t, dt.isFunction(e) ? e : a)),
                            i[2][3].add(o(0, t, dt.isFunction(n) ? n : l))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? dt.extend(t, r) : r
                    }
                }
                  , o = {};
                return dt.each(i, function(t, e) {
                    var s = e[2]
                      , a = e[5];
                    r[e[1]] = s.add,
                    a && s.add(function() {
                        n = a
                    }, i[3 - t][2].disable, i[0][2].lock),
                    s.add(e[3].fire),
                    o[e[0]] = function() {
                        return o[e[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                    }
                    ,
                    o[e[0] + "With"] = s.fireWith
                }),
                r.promise(o),
                e && e.call(o, o),
                o
            },
            when: function(t) {
                var e = arguments.length
                  , i = e
                  , n = Array(i)
                  , r = nt.call(arguments)
                  , o = dt.Deferred()
                  , s = function(t) {
                    return function(i) {
                        n[t] = this,
                        r[t] = arguments.length > 1 ? nt.call(arguments) : i,
                        --e || o.resolveWith(n, r)
                    }
                };
                if (e <= 1 && (u(t, o.done(s(i)).resolve, o.reject),
                "pending" === o.state() || dt.isFunction(r[i] && r[i].then)))
                    return o.then();
                for (; i--; )
                    u(r[i], s(i), o.reject);
                return o.promise()
            }
        });
        var At = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        dt.Deferred.exceptionHook = function(e, i) {
            t.console && t.console.warn && e && At.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
        }
        ,
        dt.readyException = function(e) {
            t.setTimeout(function() {
                throw e
            })
        }
        ;
        var Lt = dt.Deferred();
        dt.fn.ready = function(t) {
            return Lt.then(t).catch(function(t) {
                dt.readyException(t)
            }),
            this
        }
        ,
        dt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? dt.readyWait++ : dt.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --dt.readyWait : dt.isReady) || (dt.isReady = !0,
                t !== !0 && --dt.readyWait > 0 || Lt.resolveWith(et, [dt]))
            }
        }),
        dt.ready.then = Lt.then,
        "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(dt.ready) : (et.addEventListener("DOMContentLoaded", c),
        t.addEventListener("load", c));
        var Dt = function(t, e, i, n, r, o, s) {
            var a = 0
              , l = t.length
              , u = null == i;
            if ("object" === dt.type(i)) {
                r = !0;
                for (a in i)
                    Dt(t, e, a, i[a], !0, o, s)
            } else if (void 0 !== n && (r = !0,
            dt.isFunction(n) || (s = !0),
            u && (s ? (e.call(t, n),
            e = null) : (u = e,
            e = function(t, e, i) {
                return u.call(dt(t), i)
            }
            )),
            e))
                for (; a < l; a++)
                    e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : u ? e.call(t) : l ? e(t[0], i) : o
        }
          , It = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        h.uid = 1,
        h.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {},
                It(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))),
                e
            },
            set: function(t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e)
                    r[dt.camelCase(e)] = i;
                else
                    for (n in e)
                        r[dt.camelCase(n)] = e[n];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][dt.camelCase(e)]
            },
            access: function(t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i),
                void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        dt.isArray(e) ? e = e.map(dt.camelCase) : (e = dt.camelCase(e),
                        e = e in n ? [e] : e.match(Mt) || []),
                        i = e.length;
                        for (; i--; )
                            delete n[e[i]]
                    }
                    (void 0 === e || dt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !dt.isEmptyObject(e)
            }
        };
        var Rt = new h
          , Nt = new h
          , Ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , zt = /[A-Z]/g;
        dt.extend({
            hasData: function(t) {
                return Nt.hasData(t) || Rt.hasData(t)
            },
            data: function(t, e, i) {
                return Nt.access(t, e, i)
            },
            removeData: function(t, e) {
                Nt.remove(t, e)
            },
            _data: function(t, e, i) {
                return Rt.access(t, e, i)
            },
            _removeData: function(t, e) {
                Rt.remove(t, e)
            }
        }),
        dt.fn.extend({
            data: function(t, e) {
                var i, n, r, o = this[0], s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Nt.get(o),
                    1 === o.nodeType && !Rt.get(o, "hasDataAttrs"))) {
                        for (i = s.length; i--; )
                            s[i] && (n = s[i].name,
                            0 === n.indexOf("data-") && (n = dt.camelCase(n.slice(5)),
                            $(o, n, r[n])));
                        Rt.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    Nt.set(this, t)
                }) : Dt(this, function(e) {
                    var i;
                    if (o && void 0 === e) {
                        if (i = Nt.get(o, t),
                        void 0 !== i)
                            return i;
                        if (i = $(o, t),
                        void 0 !== i)
                            return i
                    } else
                        this.each(function() {
                            Nt.set(this, t, e)
                        })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Nt.remove(this, t)
                })
            }
        }),
        dt.extend({
            queue: function(t, e, i) {
                var n;
                if (t)
                    return e = (e || "fx") + "queue",
                    n = Rt.get(t, e),
                    i && (!n || dt.isArray(i) ? n = Rt.access(t, e, dt.makeArray(i)) : n.push(i)),
                    n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = dt.queue(t, e)
                  , n = i.length
                  , r = i.shift()
                  , o = dt._queueHooks(t, e)
                  , s = function() {
                    dt.dequeue(t, e)
                };
                "inprogress" === r && (r = i.shift(),
                n--),
                r && ("fx" === e && i.unshift("inprogress"),
                delete o.stop,
                r.call(t, s, o)),
                !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return Rt.get(t, i) || Rt.access(t, i, {
                    empty: dt.Callbacks("once memory").add(function() {
                        Rt.remove(t, [e + "queue", i])
                    })
                })
            }
        }),
        dt.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t,
                t = "fx",
                i--),
                arguments.length < i ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = dt.queue(this, t, e);
                    dt._queueHooks(this, t),
                    "fx" === t && "inprogress" !== i[0] && dt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    dt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1, r = dt.Deferred(), o = this, s = this.length, a = function() {
                    --n || r.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t,
                t = void 0),
                t = t || "fx"; s--; )
                    i = Rt.get(o[s], t + "queueHooks"),
                    i && i.empty && (n++,
                    i.empty.add(a));
                return a(),
                r.promise(e)
            }
        });
        var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , qt = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$","i")
          , $t = ["Top", "Right", "Bottom", "Left"]
          , Wt = function(t, e) {
            return t = e || t,
            "none" === t.style.display || "" === t.style.display && dt.contains(t.ownerDocument, t) && "none" === dt.css(t, "display")
        }
          , Bt = function(t, e, i, n) {
            var r, o, s = {};
            for (o in e)
                s[o] = t.style[o],
                t.style[o] = e[o];
            r = i.apply(t, n || []);
            for (o in e)
                t.style[o] = s[o];
            return r
        }
          , Ht = {};
        dt.fn.extend({
            show: function() {
                return m(this, !0)
            },
            hide: function() {
                return m(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Wt(this) ? dt(this).show() : dt(this).hide()
                })
            }
        });
        var Xt = /^(?:checkbox|radio)$/i
          , Yt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , Ut = /^$|\/(?:java|ecma)script/i
          , Vt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Vt.optgroup = Vt.option,
        Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead,
        Vt.th = Vt.td;
        var Gt = /<|&#?\w+;/;
        !function() {
            var t = et.createDocumentFragment()
              , e = t.appendChild(et.createElement("div"))
              , i = et.createElement("input");
            i.setAttribute("type", "radio"),
            i.setAttribute("checked", "checked"),
            i.setAttribute("name", "t"),
            e.appendChild(i),
            ft.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e.innerHTML = "<textarea>x</textarea>",
            ft.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Qt = et.documentElement
          , Zt = /^key/
          , Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , Kt = /^([^.]*)(?:\.(.+)|)/;
        dt.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var o, s, a, l, u, c, h, f, p, d, m, g = Rt.get(t);
                if (g)
                    for (i.handler && (o = i,
                    i = o.handler,
                    r = o.selector),
                    r && dt.find.matchesSelector(Qt, r),
                    i.guid || (i.guid = dt.guid++),
                    (l = g.events) || (l = g.events = {}),
                    (s = g.handle) || (s = g.handle = function(e) {
                        return "undefined" != typeof dt && dt.event.triggered !== e.type ? dt.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    e = (e || "").match(Mt) || [""],
                    u = e.length; u--; )
                        a = Kt.exec(e[u]) || [],
                        p = m = a[1],
                        d = (a[2] || "").split(".").sort(),
                        p && (h = dt.event.special[p] || {},
                        p = (r ? h.delegateType : h.bindType) || p,
                        h = dt.event.special[p] || {},
                        c = dt.extend({
                            type: p,
                            origType: m,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: r,
                            needsContext: r && dt.expr.match.needsContext.test(r),
                            namespace: d.join(".")
                        }, o),
                        (f = l[p]) || (f = l[p] = [],
                        f.delegateCount = 0,
                        h.setup && h.setup.call(t, n, d, s) !== !1 || t.addEventListener && t.addEventListener(p, s)),
                        h.add && (h.add.call(t, c),
                        c.handler.guid || (c.handler.guid = i.guid)),
                        r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                        dt.event.global[p] = !0)
            },
            remove: function(t, e, i, n, r) {
                var o, s, a, l, u, c, h, f, p, d, m, g = Rt.hasData(t) && Rt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(Mt) || [""],
                    u = e.length; u--; )
                        if (a = Kt.exec(e[u]) || [],
                        p = m = a[1],
                        d = (a[2] || "").split(".").sort(),
                        p) {
                            for (h = dt.event.special[p] || {},
                            p = (n ? h.delegateType : h.bindType) || p,
                            f = l[p] || [],
                            a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = o = f.length; o--; )
                                c = f[o],
                                !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (f.splice(o, 1),
                                c.selector && f.delegateCount--,
                                h.remove && h.remove.call(t, c));
                            s && !f.length && (h.teardown && h.teardown.call(t, d, g.handle) !== !1 || dt.removeEvent(t, p, g.handle),
                            delete l[p])
                        } else
                            for (p in l)
                                dt.event.remove(t, p + e[u], i, n, !0);
                    dt.isEmptyObject(l) && Rt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e = dt.event.fix(t), i, n, r, o, s, a, l = new Array(arguments.length), u = (Rt.get(this, "events") || {})[e.type] || [], c = dt.event.special[e.type] || {};
                for (l[0] = e,
                i = 1; i < arguments.length; i++)
                    l[i] = arguments[i];
                if (e.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = dt.event.handlers.call(this, e, u),
                    i = 0; (o = a[i++]) && !e.isPropagationStopped(); )
                        for (e.currentTarget = o.elem,
                        n = 0; (s = o.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                            e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s,
                            e.data = s.data,
                            r = ((dt.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l),
                            void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                            e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, o, s, a = [], l = e.delegateCount, u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || u.disabled !== !0)) {
                            for (o = [],
                            s = {},
                            i = 0; i < l; i++)
                                n = e[i],
                                r = n.selector + " ",
                                void 0 === s[r] && (s[r] = n.needsContext ? dt(r, this).index(u) > -1 : dt.find(r, this, null, [u]).length),
                                s[r] && o.push(n);
                            o.length && a.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return u = this,
                l < e.length && a.push({
                    elem: u,
                    handlers: e.slice(l)
                }),
                a
            },
            addProp: function(t, e) {
                Object.defineProperty(dt.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: dt.isFunction(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[dt.expando] ? t : new dt.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== w() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === w() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && dt.nodeName(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(t) {
                        return dt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        },
        dt.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }
        ,
        dt.Event = function(t, e) {
            return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t,
            this.type = t.type,
            this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? _ : x,
            this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
            this.currentTarget = t.currentTarget,
            this.relatedTarget = t.relatedTarget) : this.type = t,
            e && dt.extend(this, e),
            this.timeStamp = t && t.timeStamp || dt.now(),
            void (this[dt.expando] = !0)) : new dt.Event(t,e)
        }
        ,
        dt.Event.prototype = {
            constructor: dt.Event,
            isDefaultPrevented: x,
            isPropagationStopped: x,
            isImmediatePropagationStopped: x,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = _,
                t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = _,
                t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = _,
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        dt.each({
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
            which: function(t) {
                var e = t.button;
                return null == t.which && Zt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Jt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, dt.event.addProp),
        dt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            dt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this, r = t.relatedTarget, o = t.handleObj;
                    return r && (r === n || dt.contains(n, r)) || (t.type = o.origType,
                    i = o.handler.apply(this, arguments),
                    t.type = e),
                    i
                }
            }
        }),
        dt.fn.extend({
            on: function(t, e, i, n) {
                return T(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return T(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj)
                    return n = t.handleObj,
                    dt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                    this;
                if ("object" == typeof t) {
                    for (r in t)
                        this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e,
                e = void 0),
                i === !1 && (i = x),
                this.each(function() {
                    dt.event.remove(this, t, i, e)
                })
            }
        });
        var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , ee = /<script|<style|<link/i
          , ie = /checked\s*(?:[^=]|=\s*.checked.)/i
          , ne = /^true\/(.*)/
          , re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        dt.extend({
            htmlPrefilter: function(t) {
                return t.replace(te, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, r, o, s, a = t.cloneNode(!0), l = dt.contains(t.ownerDocument, t);
                if (!(ft.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))
                    for (s = g(a),
                    o = g(t),
                    n = 0,
                    r = o.length; n < r; n++)
                        E(o[n], s[n]);
                if (e)
                    if (i)
                        for (o = o || g(t),
                        s = s || g(a),
                        n = 0,
                        r = o.length; n < r; n++)
                            k(o[n], s[n]);
                    else
                        k(t, a);
                return s = g(a, "script"),
                s.length > 0 && v(s, !l && g(t, "script")),
                a
            },
            cleanData: function(t) {
                for (var e, i, n, r = dt.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (It(i)) {
                        if (e = i[Rt.expando]) {
                            if (e.events)
                                for (n in e.events)
                                    r[n] ? dt.event.remove(i, n) : dt.removeEvent(i, n, e.handle);
                            i[Rt.expando] = void 0
                        }
                        i[Nt.expando] && (i[Nt.expando] = void 0)
                    }
            }
        }),
        dt.fn.extend({
            detach: function(t) {
                return P(this, t, !0)
            },
            remove: function(t) {
                return P(this, t)
            },
            text: function(t) {
                return Dt(this, function(t) {
                    return void 0 === t ? dt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return O(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = b(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return O(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = b(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return O(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return O(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (dt.cleanData(g(t, !1)),
                    t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t,
                e = null == e ? t : e,
                this.map(function() {
                    return dt.clone(this, t, e)
                })
            },
            html: function(t) {
                return Dt(this, function(t) {
                    var e = this[0] || {}
                      , i = 0
                      , n = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !ee.test(t) && !Vt[(Yt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = dt.htmlPrefilter(t);
                        try {
                            for (; i < n; i++)
                                e = this[i] || {},
                                1 === e.nodeType && (dt.cleanData(g(e, !1)),
                                e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return O(this, arguments, function(e) {
                    var i = this.parentNode;
                    dt.inArray(this, t) < 0 && (dt.cleanData(g(this)),
                    i && i.replaceChild(e, this))
                }, t)
            }
        }),
        dt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            dt.fn[t] = function(t) {
                for (var i, n = [], r = dt(t), o = r.length - 1, s = 0; s <= o; s++)
                    i = s === o ? this : this.clone(!0),
                    dt(r[s])[e](i),
                    ot.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var oe = /^margin/
          , se = new RegExp("^(" + jt + ")(?!px)[a-z%]+$","i")
          , ae = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t),
            i.getComputedStyle(e)
        };
        !function() {
            function e() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    a.innerHTML = "",
                    Qt.appendChild(s);
                    var e = t.getComputedStyle(a);
                    i = "1%" !== e.top,
                    o = "2px" === e.marginLeft,
                    n = "4px" === e.width,
                    a.style.marginRight = "50%",
                    r = "4px" === e.marginRight,
                    Qt.removeChild(s),
                    a = null
                }
            }
            var i, n, r, o, s = et.createElement("div"), a = et.createElement("div");
            a.style && (a.style.backgroundClip = "content-box",
            a.cloneNode(!0).style.backgroundClip = "",
            ft.clearCloneStyle = "content-box" === a.style.backgroundClip,
            s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            s.appendChild(a),
            dt.extend(ft, {
                pixelPosition: function() {
                    return e(),
                    i
                },
                boxSizingReliable: function() {
                    return e(),
                    n
                },
                pixelMarginRight: function() {
                    return e(),
                    r
                },
                reliableMarginLeft: function() {
                    return e(),
                    o
                }
            }))
        }();
        var le = /^(none|table(?!-c[ea]).+)/
          , ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , ce = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , he = ["Webkit", "Moz", "ms"]
          , fe = et.createElement("div").style;
        dt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = M(t, "opacity");
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
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = dt.camelCase(e), l = t.style;
                    return e = dt.cssProps[a] || (dt.cssProps[a] = L(a) || a),
                    s = dt.cssHooks[e] || dt.cssHooks[a],
                    void 0 === i ? s && "get"in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : (o = typeof i,
                    "string" === o && (r = qt.exec(i)) && r[1] && (i = p(t, e, r),
                    o = "number"),
                    void (null != i && i === i && ("number" === o && (i += r && r[3] || (dt.cssNumber[a] ? "" : "px")),
                    ft.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                    s && "set"in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var r, o, s, a = dt.camelCase(e);
                return e = dt.cssProps[a] || (dt.cssProps[a] = L(a) || a),
                s = dt.cssHooks[e] || dt.cssHooks[a],
                s && "get"in s && (r = s.get(t, !0, i)),
                void 0 === r && (r = M(t, e, n)),
                "normal" === r && e in ce && (r = ce[e]),
                "" === i || i ? (o = parseFloat(r),
                i === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }),
        dt.each(["height", "width"], function(t, e) {
            dt.cssHooks[e] = {
                get: function(t, i, n) {
                    if (i)
                        return !le.test(dt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? R(t, e, n) : Bt(t, ue, function() {
                            return R(t, e, n)
                        })
                },
                set: function(t, i, n) {
                    var r, o = n && ae(t), s = n && I(t, e, n, "border-box" === dt.css(t, "boxSizing", !1, o), o);
                    return s && (r = qt.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i,
                    i = dt.css(t, e)),
                    D(t, i, s)
                }
            }
        }),
        dt.cssHooks.marginLeft = A(ft.reliableMarginLeft, function(t, e) {
            if (e)
                return (parseFloat(M(t, "marginLeft")) || t.getBoundingClientRect().left - Bt(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
        }),
        dt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            dt.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                        r[t + $t[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            },
            oe.test(t) || (dt.cssHooks[t + e].set = D)
        }),
        dt.fn.extend({
            css: function(t, e) {
                return Dt(this, function(t, e, i) {
                    var n, r, o = {}, s = 0;
                    if (dt.isArray(e)) {
                        for (n = ae(t),
                        r = e.length; s < r; s++)
                            o[e[s]] = dt.css(t, e[s], !1, n);
                        return o
                    }
                    return void 0 !== i ? dt.style(t, e, i) : dt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }),
        dt.Tween = N,
        N.prototype = {
            constructor: N,
            init: function(t, e, i, n, r, o) {
                this.elem = t,
                this.prop = i,
                this.easing = r || dt.easing._default,
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = n,
                this.unit = o || (dt.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = N.propHooks[this.prop];
                return t && t.get ? t.get(this) : N.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = N.propHooks[this.prop];
                return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                i && i.set ? i.set(this) : N.propHooks._default.set(this),
                this
            }
        },
        N.prototype.init.prototype = N.prototype,
        N.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""),
                    e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        },
        N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        dt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        },
        dt.fx = N.prototype.init,
        dt.fx.step = {};
        var pe, de, me = /^(?:toggle|show|hide)$/, ge = /queueHooks$/;
        dt.Animation = dt.extend(H, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return p(i.elem, t, qt.exec(e), i),
                    i
                }
                ]
            },
            tweener: function(t, e) {
                dt.isFunction(t) ? (e = t,
                t = ["*"]) : t = t.match(Mt);
                for (var i, n = 0, r = t.length; n < r; n++)
                    i = t[n],
                    H.tweeners[i] = H.tweeners[i] || [],
                    H.tweeners[i].unshift(e)
            },
            prefilters: [W],
            prefilter: function(t, e) {
                e ? H.prefilters.unshift(t) : H.prefilters.push(t)
            }
        }),
        dt.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? dt.extend({}, t) : {
                complete: i || !i && e || dt.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !dt.isFunction(e) && e
            };
            return dt.fx.off || et.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in dt.fx.speeds ? n.duration = dt.fx.speeds[n.duration] : n.duration = dt.fx.speeds._default),
            null != n.queue && n.queue !== !0 || (n.queue = "fx"),
            n.old = n.complete,
            n.complete = function() {
                dt.isFunction(n.old) && n.old.call(this),
                n.queue && dt.dequeue(this, n.queue)
            }
            ,
            n
        }
        ,
        dt.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Wt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var r = dt.isEmptyObject(t)
                  , o = dt.speed(e, i, n)
                  , s = function() {
                    var e = H(this, dt.extend({}, t), o);
                    (r || Rt.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s,
                r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop,
                    e(i)
                };
                return "string" != typeof t && (i = e,
                e = t,
                t = void 0),
                e && t !== !1 && this.queue(t || "fx", []),
                this.each(function() {
                    var e = !0
                      , r = null != t && t + "queueHooks"
                      , o = dt.timers
                      , s = Rt.get(this);
                    if (r)
                        s[r] && s[r].stop && n(s[r]);
                    else
                        for (r in s)
                            s[r] && s[r].stop && ge.test(r) && n(s[r]);
                    for (r = o.length; r--; )
                        o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i),
                        e = !1,
                        o.splice(r, 1));
                    !e && i || dt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"),
                this.each(function() {
                    var e, i = Rt.get(this), n = i[t + "queue"], r = i[t + "queueHooks"], o = dt.timers, s = n ? n.length : 0;
                    for (i.finish = !0,
                    dt.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = o.length; e--; )
                        o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                        o.splice(e, 1));
                    for (e = 0; e < s; e++)
                        n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }),
        dt.each(["toggle", "show", "hide"], function(t, e) {
            var i = dt.fn[e];
            dt.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(j(e, !0), t, n, r)
            }
        }),
        dt.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            dt.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }),
        dt.timers = [],
        dt.fx.tick = function() {
            var t, e = 0, i = dt.timers;
            for (pe = dt.now(); e < i.length; e++)
                t = i[e],
                t() || i[e] !== t || i.splice(e--, 1);
            i.length || dt.fx.stop(),
            pe = void 0
        }
        ,
        dt.fx.timer = function(t) {
            dt.timers.push(t),
            t() ? dt.fx.start() : dt.timers.pop()
        }
        ,
        dt.fx.interval = 13,
        dt.fx.start = function() {
            de || (de = t.requestAnimationFrame ? t.requestAnimationFrame(F) : t.setInterval(dt.fx.tick, dt.fx.interval))
        }
        ,
        dt.fx.stop = function() {
            t.cancelAnimationFrame ? t.cancelAnimationFrame(de) : t.clearInterval(de),
            de = null
        }
        ,
        dt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        dt.fn.delay = function(e, i) {
            return e = dt.fx ? dt.fx.speeds[e] || e : e,
            i = i || "fx",
            this.queue(i, function(i, n) {
                var r = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(r)
                }
            })
        }
        ,
        function() {
            var t = et.createElement("input")
              , e = et.createElement("select")
              , i = e.appendChild(et.createElement("option"));
            t.type = "checkbox",
            ft.checkOn = "" !== t.value,
            ft.optSelected = i.selected,
            t = et.createElement("input"),
            t.value = "t",
            t.type = "radio",
            ft.radioValue = "t" === t.value
        }();
        var ve, ye = dt.expr.attrHandle;
        dt.fn.extend({
            attr: function(t, e) {
                return Dt(this, dt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    dt.removeAttr(this, t)
                })
            }
        }),
        dt.extend({
            attr: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof t.getAttribute ? dt.prop(t, e, i) : (1 === o && dt.isXMLDoc(t) || (r = dt.attrHooks[e.toLowerCase()] || (dt.expr.match.bool.test(e) ? ve : void 0)),
                    void 0 !== i ? null === i ? void dt.removeAttr(t, e) : r && "set"in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""),
                    i) : r && "get"in r && null !== (n = r.get(t, e)) ? n : (n = dt.find.attr(t, e),
                    null == n ? void 0 : n))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ft.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e),
                            i && (t.value = i),
                            e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n = 0, r = e && e.match(Mt);
                if (r && 1 === t.nodeType)
                    for (; i = r[n++]; )
                        t.removeAttribute(i)
            }
        }),
        ve = {
            set: function(t, e, i) {
                return e === !1 ? dt.removeAttr(t, i) : t.setAttribute(i, i),
                i
            }
        },
        dt.each(dt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ye[e] || dt.find.attr;
            ye[e] = function(t, e, n) {
                var r, o, s = e.toLowerCase();
                return n || (o = ye[s],
                ye[s] = r,
                r = null != i(t, e, n) ? s : null,
                ye[s] = o),
                r
            }
        });
        var _e = /^(?:input|select|textarea|button)$/i
          , xe = /^(?:a|area)$/i;
        dt.fn.extend({
            prop: function(t, e) {
                return Dt(this, dt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[dt.propFix[t] || t]
                })
            }
        }),
        dt.extend({
            prop: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && dt.isXMLDoc(t) || (e = dt.propFix[e] || e,
                    r = dt.propHooks[e]),
                    void 0 !== i ? r && "set"in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get"in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = dt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : _e.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        ft.optSelected || (dt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex)
            }
        }),
        dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            dt.propFix[this.toLowerCase()] = this
        }),
        dt.fn.extend({
            addClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (dt.isFunction(t))
                    return this.each(function(e) {
                        dt(this).addClass(t.call(this, e, Y(this)))
                    });
                if ("string" == typeof t && t)
                    for (e = t.match(Mt) || []; i = this[l++]; )
                        if (r = Y(i),
                        n = 1 === i.nodeType && " " + X(r) + " ") {
                            for (s = 0; o = e[s++]; )
                                n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            a = X(n),
                            r !== a && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, o, s, a, l = 0;
                if (dt.isFunction(t))
                    return this.each(function(e) {
                        dt(this).removeClass(t.call(this, e, Y(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Mt) || []; i = this[l++]; )
                        if (r = Y(i),
                        n = 1 === i.nodeType && " " + X(r) + " ") {
                            for (s = 0; o = e[s++]; )
                                for (; n.indexOf(" " + o + " ") > -1; )
                                    n = n.replace(" " + o + " ", " ");
                            a = X(n),
                            r !== a && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function(i) {
                    dt(this).toggleClass(t.call(this, i, Y(this), e), e)
                }) : this.each(function() {
                    var e, n, r, o;
                    if ("string" === i)
                        for (n = 0,
                        r = dt(this),
                        o = t.match(Mt) || []; e = o[n++]; )
                            r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else
                        void 0 !== t && "boolean" !== i || (e = Y(this),
                        e && Rt.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Rt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++]; )
                    if (1 === i.nodeType && (" " + X(Y(i)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
        var we = /\r/g;
        dt.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = dt.isFunction(t),
                this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, dt(this).val()) : t,
                    null == r ? r = "" : "number" == typeof r ? r += "" : dt.isArray(r) && (r = dt.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })),
                    e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()],
                    e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = dt.valHooks[r.type] || dt.valHooks[r.nodeName.toLowerCase()],
                e && "get"in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value,
                "string" == typeof i ? i.replace(we, "") : null == i ? "" : i)) : void 0
            }
        }),
        dt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = dt.find.attr(t, "value");
                        return null != e ? e : X(dt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, n, r = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], l = s ? o + 1 : r.length;
                        for (n = o < 0 ? l : s ? o : 0; n < l; n++)
                            if (i = r[n],
                            (i.selected || n === o) && !i.disabled && (!i.parentNode.disabled || !dt.nodeName(i.parentNode, "optgroup"))) {
                                if (e = dt(i).val(),
                                s)
                                    return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, o = dt.makeArray(e), s = r.length; s--; )
                            n = r[s],
                            (n.selected = dt.inArray(dt.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        dt.each(["radio", "checkbox"], function() {
            dt.valHooks[this] = {
                set: function(t, e) {
                    if (dt.isArray(e))
                        return t.checked = dt.inArray(dt(t).val(), e) > -1
                }
            },
            ft.checkOn || (dt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
            )
        });
        var Te = /^(?:focusinfocus|focusoutblur)$/;
        dt.extend(dt.event, {
            trigger: function(e, i, n, r) {
                var o, s, a, l, u, c, h, f = [n || et], p = ut.call(e, "type") ? e.type : e, d = ut.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = n = n || et,
                3 !== n.nodeType && 8 !== n.nodeType && !Te.test(p + dt.event.triggered) && (p.indexOf(".") > -1 && (d = p.split("."),
                p = d.shift(),
                d.sort()),
                u = p.indexOf(":") < 0 && "on" + p,
                e = e[dt.expando] ? e : new dt.Event(p,"object" == typeof e && e),
                e.isTrigger = r ? 2 : 3,
                e.namespace = d.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = n),
                i = null == i ? [e] : dt.makeArray(i, [e]),
                h = dt.event.special[p] || {},
                r || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                    if (!r && !h.noBubble && !dt.isWindow(n)) {
                        for (l = h.delegateType || p,
                        Te.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                            f.push(s),
                            a = s;
                        a === (n.ownerDocument || et) && f.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); )
                        e.type = o > 1 ? l : h.bindType || p,
                        c = (Rt.get(s, "events") || {})[e.type] && Rt.get(s, "handle"),
                        c && c.apply(s, i),
                        c = u && s[u],
                        c && c.apply && It(s) && (e.result = c.apply(s, i),
                        e.result === !1 && e.preventDefault());
                    return e.type = p,
                    r || e.isDefaultPrevented() || h._default && h._default.apply(f.pop(), i) !== !1 || !It(n) || u && dt.isFunction(n[p]) && !dt.isWindow(n) && (a = n[u],
                    a && (n[u] = null),
                    dt.event.triggered = p,
                    n[p](),
                    dt.event.triggered = void 0,
                    a && (n[u] = a)),
                    e.result
                }
            },
            simulate: function(t, e, i) {
                var n = dt.extend(new dt.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                dt.event.trigger(n, null, e)
            }
        }),
        dt.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    dt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i)
                    return dt.event.trigger(t, e, i, !0)
            }
        }),
        dt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            dt.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }),
        dt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        ft.focusin = "onfocusin"in t,
        ft.focusin || dt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                dt.event.simulate(e, t.target, dt.event.fix(t))
            };
            dt.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this
                      , r = Rt.access(n, e);
                    r || n.addEventListener(t, i, !0),
                    Rt.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this
                      , r = Rt.access(n, e) - 1;
                    r ? Rt.access(n, e, r) : (n.removeEventListener(t, i, !0),
                    Rt.remove(n, e))
                }
            }
        });
        var be = t.location
          , Se = dt.now()
          , Ce = /\?/;
        dt.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e)
                return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e),
            i
        }
        ;
        var ke = /\[\]$/
          , Ee = /\r?\n/g
          , Oe = /^(?:submit|button|image|reset|file)$/i
          , Pe = /^(?:input|select|textarea|keygen)/i;
        dt.param = function(t, e) {
            var i, n = [], r = function(t, e) {
                var i = dt.isFunction(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
            if (dt.isArray(t) || t.jquery && !dt.isPlainObject(t))
                dt.each(t, function() {
                    r(this.name, this.value)
                });
            else
                for (i in t)
                    U(i, t[i], e, r);
            return n.join("&")
        }
        ,
        dt.fn.extend({
            serialize: function() {
                return dt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = dt.prop(this, "elements");
                    return t ? dt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !dt(this).is(":disabled") && Pe.test(this.nodeName) && !Oe.test(t) && (this.checked || !Xt.test(t))
                }).map(function(t, e) {
                    var i = dt(this).val();
                    return null == i ? null : dt.isArray(i) ? dt.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ee, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Ee, "\r\n")
                    }
                }).get()
            }
        });
        var Me = /%20/g
          , Ae = /#.*$/
          , Le = /([?&])_=[^&]*/
          , De = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , Re = /^(?:GET|HEAD)$/
          , Ne = /^\/\//
          , Fe = {}
          , ze = {}
          , je = "*/".concat("*")
          , qe = et.createElement("a");
        qe.href = be.href,
        dt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be.href,
                type: "GET",
                isLocal: Ie.test(be.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": je,
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
                    "text xml": dt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Q(Q(t, dt.ajaxSettings), e) : Q(dt.ajaxSettings, t)
            },
            ajaxPrefilter: V(Fe),
            ajaxTransport: V(ze),
            ajax: function(e, i) {
                function n(e, i, n, a) {
                    var u, f, p, x, w, T = i;
                    c || (c = !0,
                    l && t.clearTimeout(l),
                    r = void 0,
                    s = a || "",
                    b.readyState = e > 0 ? 4 : 0,
                    u = e >= 200 && e < 300 || 304 === e,
                    n && (x = Z(d, b, n)),
                    x = J(d, x, b, u),
                    u ? (d.ifModified && (w = b.getResponseHeader("Last-Modified"),
                    w && (dt.lastModified[o] = w),
                    w = b.getResponseHeader("etag"),
                    w && (dt.etag[o] = w)),
                    204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state,
                    f = x.data,
                    p = x.error,
                    u = !p)) : (p = T,
                    !e && T || (T = "error",
                    e < 0 && (e = 0))),
                    b.status = e,
                    b.statusText = (i || T) + "",
                    u ? v.resolveWith(m, [f, T, b]) : v.rejectWith(m, [b, T, p]),
                    b.statusCode(_),
                    _ = void 0,
                    h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [b, d, u ? f : p]),
                    y.fireWith(m, [b, T]),
                    h && (g.trigger("ajaxComplete", [b, d]),
                    --dt.active || dt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (i = e,
                e = void 0),
                i = i || {};
                var r, o, s, a, l, u, c, h, f, p, d = dt.ajaxSetup({}, i), m = d.context || d, g = d.context && (m.nodeType || m.jquery) ? dt(m) : dt.event, v = dt.Deferred(), y = dt.Callbacks("once memory"), _ = d.statusCode || {}, x = {}, w = {}, T = "canceled", b = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = De.exec(s); )
                                    a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t,
                        x[t] = e),
                        this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (d.mimeType = t),
                        this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c)
                                b.always(t[b.status]);
                            else
                                for (e in t)
                                    _[e] = [_[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || T;
                        return r && r.abort(e),
                        n(0, e),
                        this
                    }
                };
                if (v.promise(b),
                d.url = ((e || d.url || be.href) + "").replace(Ne, be.protocol + "//"),
                d.type = i.method || i.type || d.method || d.type,
                d.dataTypes = (d.dataType || "*").toLowerCase().match(Mt) || [""],
                null == d.crossDomain) {
                    u = et.createElement("a");
                    try {
                        u.href = d.url,
                        u.href = u.href,
                        d.crossDomain = qe.protocol + "//" + qe.host != u.protocol + "//" + u.host
                    } catch (t) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = dt.param(d.data, d.traditional)),
                G(Fe, d, i, b),
                c)
                    return b;
                h = dt.event && d.global,
                h && 0 === dt.active++ && dt.event.trigger("ajaxStart"),
                d.type = d.type.toUpperCase(),
                d.hasContent = !Re.test(d.type),
                o = d.url.replace(Ae, ""),
                d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Me, "+")) : (p = d.url.slice(o.length),
                d.data && (o += (Ce.test(o) ? "&" : "?") + d.data,
                delete d.data),
                d.cache === !1 && (o = o.replace(Le, "$1"),
                p = (Ce.test(o) ? "&" : "?") + "_=" + Se++ + p),
                d.url = o + p),
                d.ifModified && (dt.lastModified[o] && b.setRequestHeader("If-Modified-Since", dt.lastModified[o]),
                dt.etag[o] && b.setRequestHeader("If-None-Match", dt.etag[o])),
                (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && b.setRequestHeader("Content-Type", d.contentType),
                b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + je + "; q=0.01" : "") : d.accepts["*"]);
                for (f in d.headers)
                    b.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (d.beforeSend.call(m, b, d) === !1 || c))
                    return b.abort();
                if (T = "abort",
                y.add(d.complete),
                b.done(d.success),
                b.fail(d.error),
                r = G(ze, d, i, b)) {
                    if (b.readyState = 1,
                    h && g.trigger("ajaxSend", [b, d]),
                    c)
                        return b;
                    d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                        b.abort("timeout")
                    }, d.timeout));
                    try {
                        c = !1,
                        r.send(x, n)
                    } catch (t) {
                        if (c)
                            throw t;
                        n(-1, t)
                    }
                } else
                    n(-1, "No Transport");
                return b
            },
            getJSON: function(t, e, i) {
                return dt.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return dt.get(t, void 0, e, "script")
            }
        }),
        dt.each(["get", "post"], function(t, e) {
            dt[e] = function(t, i, n, r) {
                return dt.isFunction(i) && (r = r || n,
                n = i,
                i = void 0),
                dt.ajax(dt.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, dt.isPlainObject(t) && t))
            }
        }),
        dt._evalUrl = function(t) {
            return dt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        dt.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (dt.isFunction(t) && (t = t.call(this[0])),
                e = dt(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                    return t
                }).append(this)),
                this
            },
            wrapInner: function(t) {
                return dt.isFunction(t) ? this.each(function(e) {
                    dt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = dt(this)
                      , i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = dt.isFunction(t);
                return this.each(function(i) {
                    dt(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    dt(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        dt.expr.pseudos.hidden = function(t) {
            return !dt.expr.pseudos.visible(t)
        }
        ,
        dt.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        ,
        dt.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        }
        ;
        var $e = {
            0: 200,
            1223: 204
        }
          , We = dt.ajaxSettings.xhr();
        ft.cors = !!We && "withCredentials"in We,
        ft.ajax = We = !!We,
        dt.ajaxTransport(function(e) {
            var i, n;
            if (ft.cors || We && !e.crossDomain)
                return {
                    send: function(r, o) {
                        var s, a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (s in e.xhrFields)
                                a[s] = e.xhrFields[s];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                        e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (s in r)
                            a.setRequestHeader(s, r[s]);
                        i = function(t) {
                            return function() {
                                i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                                "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o($e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = i(),
                        n = a.onerror = i("error"),
                        void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                            4 === a.readyState && t.setTimeout(function() {
                                i && n()
                            })
                        }
                        ,
                        i = i("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (t) {
                            if (i)
                                throw t
                        }
                    },
                    abort: function() {
                        i && i()
                    }
                }
        }),
        dt.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }),
        dt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return dt.globalEval(t),
                    t
                }
            }
        }),
        dt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }),
        dt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, r) {
                        e = dt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(),
                            i = null,
                            t && r("error" === t.type ? 404 : 200, t.type)
                        }
                        ),
                        et.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var Be = []
          , He = /(=)\?(?=&|$)|\?\?/;
        dt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Be.pop() || dt.expando + "_" + Se++;
                return this[t] = !0,
                t
            }
        }),
        dt.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, o, s, a = e.jsonp !== !1 && (He.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && He.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(He, "$1" + r) : e.jsonp !== !1 && (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                e.converters["script json"] = function() {
                    return s || dt.error(r + " was not called"),
                    s[0]
                }
                ,
                e.dataTypes[0] = "json",
                o = t[r],
                t[r] = function() {
                    s = arguments
                }
                ,
                n.always(function() {
                    void 0 === o ? dt(t).removeProp(r) : t[r] = o,
                    e[r] && (e.jsonpCallback = i.jsonpCallback,
                    Be.push(r)),
                    s && dt.isFunction(o) && o(s[0]),
                    s = o = void 0
                }),
                "script"
        }),
        ft.createHTMLDocument = function() {
            var t = et.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>",
            2 === t.childNodes.length
        }(),
        dt.parseHTML = function(t, e, i) {
            if ("string" != typeof t)
                return [];
            "boolean" == typeof e && (i = e,
            e = !1);
            var n, r, o;
            return e || (ft.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""),
            n = e.createElement("base"),
            n.href = et.location.href,
            e.head.appendChild(n)) : e = et),
            r = bt.exec(t),
            o = !i && [],
            r ? [e.createElement(r[1])] : (r = y([t], e, o),
            o && o.length && dt(o).remove(),
            dt.merge([], r.childNodes))
        }
        ,
        dt.fn.load = function(t, e, i) {
            var n, r, o, s = this, a = t.indexOf(" ");
            return a > -1 && (n = X(t.slice(a)),
            t = t.slice(0, a)),
            dt.isFunction(e) ? (i = e,
            e = void 0) : e && "object" == typeof e && (r = "POST"),
            s.length > 0 && dt.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments,
                s.html(n ? dt("<div>").append(dt.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                s.each(function() {
                    i.apply(this, o || [t.responseText, e, t])
                })
            }
            ),
            this
        }
        ,
        dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            dt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }),
        dt.expr.pseudos.animated = function(t) {
            return dt.grep(dt.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        dt.offset = {
            setOffset: function(t, e, i) {
                var n, r, o, s, a, l, u, c = dt.css(t, "position"), h = dt(t), f = {};
                "static" === c && (t.style.position = "relative"),
                a = h.offset(),
                o = dt.css(t, "top"),
                l = dt.css(t, "left"),
                u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1,
                u ? (n = h.position(),
                s = n.top,
                r = n.left) : (s = parseFloat(o) || 0,
                r = parseFloat(l) || 0),
                dt.isFunction(e) && (e = e.call(t, i, dt.extend({}, a))),
                null != e.top && (f.top = e.top - a.top + s),
                null != e.left && (f.left = e.left - a.left + r),
                "using"in e ? e.using.call(t, f) : h.css(f)
            }
        },
        dt.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        dt.offset.setOffset(this, t, e)
                    });
                var e, i, n, r, o = this[0];
                return o ? o.getClientRects().length ? (n = o.getBoundingClientRect(),
                n.width || n.height ? (r = o.ownerDocument,
                i = K(r),
                e = r.documentElement,
                {
                    top: n.top + i.pageYOffset - e.clientTop,
                    left: n.left + i.pageXOffset - e.clientLeft
                }) : n) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0], n = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === dt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                    e = this.offset(),
                    dt.nodeName(t[0], "html") || (n = t.offset()),
                    n = {
                        top: n.top + dt.css(t[0], "borderTopWidth", !0),
                        left: n.left + dt.css(t[0], "borderLeftWidth", !0)
                    }),
                    {
                        top: e.top - n.top - dt.css(i, "marginTop", !0),
                        left: e.left - n.left - dt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === dt.css(t, "position"); )
                        t = t.offsetParent;
                    return t || Qt
                })
            }
        }),
        dt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            dt.fn[t] = function(n) {
                return Dt(this, function(t, n, r) {
                    var o = K(t);
                    return void 0 === r ? o ? o[e] : t[n] : void (o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : t[n] = r)
                }, t, n, arguments.length)
            }
        }),
        dt.each(["top", "left"], function(t, e) {
            dt.cssHooks[e] = A(ft.pixelPosition, function(t, i) {
                if (i)
                    return i = M(t, e),
                    se.test(i) ? dt(t).position()[e] + "px" : i
            })
        }),
        dt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            dt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                dt.fn[n] = function(r, o) {
                    var s = arguments.length && (i || "boolean" != typeof r)
                      , a = i || (r === !0 || o === !0 ? "margin" : "border");
                    return Dt(this, function(e, i, r) {
                        var o;
                        return dt.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                        Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? dt.css(e, i, a) : dt.style(e, i, r, a)
                    }, e, s ? r : void 0, s)
                }
            })
        }),
        dt.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }),
        dt.parseJSON = JSON.parse,
        "function" == typeof define && define.amd && define("jquery", [], function() {
            return dt
        });
        var Xe = t.jQuery
          , Ye = t.$;
        return dt.noConflict = function(e) {
            return t.$ === dt && (t.$ = Ye),
            e && t.jQuery === dt && (t.jQuery = Xe),
            dt
        }
        ,
        e || (t.jQuery = t.$ = dt),
        dt
    }),
    !function(t, e, i) {
        function n(t, e) {
            return typeof t === e
        }
        function r() {
            var t, e, i, r, o, s, a;
            for (var l in _)
                if (_.hasOwnProperty(l)) {
                    if (t = [],
                    e = _[l],
                    e.name && (t.push(e.name.toLowerCase()),
                    e.options && e.options.aliases && e.options.aliases.length))
                        for (i = 0; i < e.options.aliases.length; i++)
                            t.push(e.options.aliases[i].toLowerCase());
                    for (r = n(e.fn, "function") ? e.fn() : e.fn,
                    o = 0; o < t.length; o++)
                        s = t[o],
                        a = s.split("."),
                        1 === a.length ? w[a[0]] = r : (!w[a[0]] || w[a[0]]instanceof Boolean || (w[a[0]] = new Boolean(w[a[0]])),
                        w[a[0]][a[1]] = r),
                        y.push((r ? "" : "no-") + a.join("-"))
                }
        }
        function o(t) {
            var e = T.className
              , i = w._config.classPrefix || "";
            if (b && (e = e.baseVal),
            w._config.enableJSClass) {
                var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                e = e.replace(n, "$1" + i + "js$2")
            }
            w._config.enableClasses && (e += " " + i + t.join(" " + i),
            b ? T.className.baseVal = e : T.className = e)
        }
        function s(t) {
            return t.replace(/([a-z])-([a-z])/g, function(t, e, i) {
                return e + i.toUpperCase()
            }).replace(/^-/, "")
        }
        function a(t, e) {
            return !!~("" + t).indexOf(e)
        }
        function l() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : b ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }
        function u(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        function c(t, e, i) {
            var r;
            for (var o in t)
                if (t[o]in e)
                    return i === !1 ? t[o] : (r = e[t[o]],
                    n(r, "function") ? u(r, i || e) : r);
            return !1
        }
        function h(t) {
            return t.replace(/([A-Z])/g, function(t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }
        function f() {
            var t = e.body;
            return t || (t = l(b ? "svg" : "body"),
            t.fake = !0),
            t
        }
        function p(t, i, n, r) {
            var o, s, a, u, c = "modernizr", h = l("div"), p = f();
            if (parseInt(n, 10))
                for (; n--; )
                    a = l("div"),
                    a.id = r ? r[n] : c + (n + 1),
                    h.appendChild(a);
            return o = l("style"),
            o.type = "text/css",
            o.id = "s" + c,
            (p.fake ? p : h).appendChild(o),
            p.appendChild(h),
            o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(e.createTextNode(t)),
            h.id = c,
            p.fake && (p.style.background = "",
            p.style.overflow = "hidden",
            u = T.style.overflow,
            T.style.overflow = "hidden",
            T.appendChild(p)),
            s = i(h, t),
            p.fake ? (p.parentNode.removeChild(p),
            T.style.overflow = u,
            T.offsetHeight) : h.parentNode.removeChild(h),
            !!s
        }
        function d(e, n) {
            var r = e.length;
            if ("CSS"in t && "supports"in t.CSS) {
                for (; r--; )
                    if (t.CSS.supports(h(e[r]), n))
                        return !0;
                return !1
            }
            if ("CSSSupportsRule"in t) {
                for (var o = []; r--; )
                    o.push("(" + h(e[r]) + ":" + n + ")");
                return o = o.join(" or "),
                p("@supports (" + o + ") { #modernizr { position: absolute; } }", function(t) {
                    return "absolute" == getComputedStyle(t, null).position
                })
            }
            return i
        }
        function m(t, e, r, o) {
            function u() {
                h && (delete P.style,
                delete P.modElem)
            }
            if (o = !n(o, "undefined") && o,
            !n(r, "undefined")) {
                var c = d(t, r);
                if (!n(c, "undefined"))
                    return c
            }
            for (var h, f, p, m, g, v = ["modernizr", "tspan", "samp"]; !P.style && v.length; )
                h = !0,
                P.modElem = l(v.shift()),
                P.style = P.modElem.style;
            for (p = t.length,
            f = 0; p > f; f++)
                if (m = t[f],
                g = P.style[m],
                a(m, "-") && (m = s(m)),
                P.style[m] !== i) {
                    if (o || n(r, "undefined"))
                        return u(),
                        "pfx" != e || m;
                    try {
                        P.style[m] = r
                    } catch (t) {}
                    if (P.style[m] != g)
                        return u(),
                        "pfx" != e || m
                }
            return u(),
            !1
        }
        function g(t, e, i, r, o) {
            var s = t.charAt(0).toUpperCase() + t.slice(1)
              , a = (t + " " + C.join(s + " ") + s).split(" ");
            return n(e, "string") || n(e, "undefined") ? m(a, e, r, o) : (a = (t + " " + E.join(s + " ") + s).split(" "),
            c(a, e, i))
        }
        function v(t, e, n) {
            return g(t, i, i, e, n)
        }
        var y = []
          , _ = []
          , x = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(t, e) {
                var i = this;
                setTimeout(function() {
                    e(i[t])
                }, 0)
            },
            addTest: function(t, e, i) {
                _.push({
                    name: t,
                    fn: e,
                    options: i
                })
            },
            addAsyncTest: function(t) {
                _.push({
                    name: null,
                    fn: t
                })
            }
        }
          , w = function() {};
        w.prototype = x,
        w = new w;
        var T = e.documentElement
          , b = "svg" === T.nodeName.toLowerCase()
          , S = "Moz O ms Webkit"
          , C = x._config.usePrefixes ? S.split(" ") : [];
        x._cssomPrefixes = C;
        var k = function(e) {
            var n, r = prefixes.length, o = t.CSSRule;
            if ("undefined" == typeof o)
                return i;
            if (!e)
                return !1;
            if (e = e.replace(/^@/, ""),
            n = e.replace(/-/g, "_").toUpperCase() + "_RULE",
            n in o)
                return "@" + e;
            for (var s = 0; r > s; s++) {
                var a = prefixes[s]
                  , l = a.toUpperCase() + "_" + n;
                if (l in o)
                    return "@-" + a.toLowerCase() + "-" + e
            }
            return !1
        };
        x.atRule = k;
        var E = x._config.usePrefixes ? S.toLowerCase().split(" ") : [];
        x._domPrefixes = E;
        var O = {
            elem: l("modernizr")
        };
        w._q.push(function() {
            delete O.elem
        });
        var P = {
            style: O.elem.style
        };
        w._q.unshift(function() {
            delete P.style
        }),
        x.testAllProps = g,
        x.prefixed = function(t, e, i) {
            return 0 === t.indexOf("@") ? k(t) : (-1 != t.indexOf("-") && (t = s(t)),
            e ? g(t, e, i) : g(t, "pfx"))
        }
        ,
        x.testAllProps = v,
        w.addTest("cssanimations", v("animationName", "a", !0)),
        r(),
        o(y),
        delete x.addTest,
        delete x.addAsyncTest;
        for (var M = 0; M < w._q.length; M++)
            w._q[M]();
        t.Modernizr = w
    }(window, document),
    function() {
        var t, e, i, n, r, o, s, a, l, u, c, h, f, p, d, m, g, v, y, _, x, w, T, b, S, C, k, E, O, P, M, A, L, D, I, R, N, F, z, j, q, W, B, H, X, Y, U, V, G, Q = [].slice, Z = {}.hasOwnProperty, J = function(t, e) {
            function i() {
                this.constructor = t
            }
            for (var n in e)
                Z.call(e, n) && (t[n] = e[n]);
            return i.prototype = e.prototype,
            t.prototype = new i,
            t.__super__ = e.prototype,
            t
        }, $ = [].indexOf || function(t) {
            for (var e = 0, i = this.length; i > e; e++)
                if (e in this && this[e] === t)
                    return e;
            return -1
        }
        ;
        for (x = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        },
        O = function() {
            var t;
            return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
        }
        ,
        M = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
        _ = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
        null == M && (M = function(t) {
            return setTimeout(t, 50)
        }
        ,
        _ = function(t) {
            return clearTimeout(t)
        }
        ),
        L = function(t) {
            var e, i;
            return e = O(),
            (i = function() {
                var n;
                return n = O() - e,
                n >= 33 ? (e = O(),
                t(n, function() {
                    return M(i)
                })) : setTimeout(i, 33 - n)
            }
            )()
        }
        ,
        A = function() {
            var t, e, i;
            return i = arguments[0],
            e = arguments[1],
            t = 3 <= arguments.length ? Q.call(arguments, 2) : [],
            "function" == typeof i[e] ? i[e].apply(i, t) : i[e]
        }
        ,
        w = function() {
            var t, e, i, n, r, o, s;
            for (e = arguments[0],
            n = 2 <= arguments.length ? Q.call(arguments, 1) : [],
            o = 0,
            s = n.length; s > o; o++)
                if (i = n[o])
                    for (t in i)
                        Z.call(i, t) && (r = i[t],
                        null != e[t] && "object" == typeof e[t] && null != r && "object" == typeof r ? w(e[t], r) : e[t] = r);
            return e
        }
        ,
        g = function(t) {
            var e, i, n, r, o;
            for (i = e = 0,
            r = 0,
            o = t.length; o > r; r++)
                n = t[r],
                i += Math.abs(n),
                e++;
            return i / e
        }
        ,
        b = function(t, e) {
            var i, n, r;
            if (null == t && (t = "options"),
            null == e && (e = !0),
            r = document.querySelector("[data-pace-" + t + "]")) {
                if (i = r.getAttribute("data-pace-" + t),
                !e)
                    return i;
                try {
                    return JSON.parse(i)
                } catch (t) {
                    return n = t,
                    "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", n) : void 0
                }
            }
        }
        ,
        s = function() {
            function t() {}
            return t.prototype.on = function(t, e, i, n) {
                var r;
                return null == n && (n = !1),
                null == this.bindings && (this.bindings = {}),
                null == (r = this.bindings)[t] && (r[t] = []),
                this.bindings[t].push({
                    handler: e,
                    ctx: i,
                    once: n
                })
            }
            ,
            t.prototype.once = function(t, e, i) {
                return this.on(t, e, i, !0)
            }
            ,
            t.prototype.off = function(t, e) {
                var i, n, r;
                if (null != (null != (n = this.bindings) ? n[t] : void 0)) {
                    if (null == e)
                        return delete this.bindings[t];
                    for (i = 0,
                    r = []; i < this.bindings[t].length; )
                        r.push(this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : i++);
                    return r
                }
            }
            ,
            t.prototype.trigger = function() {
                var t, e, i, n, r, o, s, a, l;
                if (i = arguments[0],
                t = 2 <= arguments.length ? Q.call(arguments, 1) : [],
                null != (s = this.bindings) ? s[i] : void 0) {
                    for (r = 0,
                    l = []; r < this.bindings[i].length; )
                        a = this.bindings[i][r],
                        n = a.handler,
                        e = a.ctx,
                        o = a.once,
                        n.apply(null != e ? e : this, t),
                        l.push(o ? this.bindings[i].splice(r, 1) : r++);
                    return l
                }
            }
            ,
            t
        }(),
        u = window.Pace || {},
        window.Pace = u,
        w(u, s.prototype),
        P = u.options = w({}, x, window.paceOptions, b()),
        U = ["ajax", "document", "eventLag", "elements"],
        B = 0,
        X = U.length; X > B; B++)
            N = U[B],
            P[N] === !0 && (P[N] = x[N]);
        l = function(t) {
            function e() {
                return V = e.__super__.constructor.apply(this, arguments)
            }
            return J(e, t),
            e
        }(Error),
        e = function() {
            function t() {
                this.progress = 0
            }
            return t.prototype.getElement = function() {
                var t;
                if (null == this.el) {
                    if (t = document.querySelector(P.target),
                    !t)
                        throw new l;
                    this.el = document.createElement("div"),
                    this.el.className = "pace pace-active",
                    document.body.className = document.body.className.replace(/pace-done/g, ""),
                    document.body.className += " pace-running",
                    this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',
                    null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
                }
                return this.el
            }
            ,
            t.prototype.finish = function() {
                var t;
                return t = this.getElement(),
                t.className = t.className.replace("pace-active", ""),
                t.className += " pace-inactive",
                document.body.className = document.body.className.replace("pace-running", ""),
                document.body.className += " pace-done"
            }
            ,
            t.prototype.update = function(t) {
                return this.progress = t,
                this.render()
            }
            ,
            t.prototype.destroy = function() {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (t) {
                    l = t
                }
                return this.el = void 0
            }
            ,
            t.prototype.render = function() {
                var t, e, i, n, r, o, s;
                if (null == document.querySelector(P.target))
                    return !1;
                for (t = this.getElement(),
                n = "translate3d(" + this.progress + "%, 0, 0)",
                s = ["webkitTransform", "msTransform", "transform"],
                r = 0,
                o = s.length; o > r; r++)
                    e = s[r],
                    t.children[0].style[e] = n;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"),
                this.progress >= 100 ? i = "99" : (i = this.progress < 10 ? "0" : "",
                i += 0 | this.progress),
                t.children[0].setAttribute("data-progress", "" + i)),
                this.lastRenderedProgress = this.progress
            }
            ,
            t.prototype.done = function() {
                return this.progress >= 100
            }
            ,
            t
        }(),
        a = function() {
            function t() {
                this.bindings = {}
            }
            return t.prototype.trigger = function(t, e) {
                var i, n, r, o, s;
                if (null != this.bindings[t]) {
                    for (o = this.bindings[t],
                    s = [],
                    n = 0,
                    r = o.length; r > n; n++)
                        i = o[n],
                        s.push(i.call(this, e));
                    return s
                }
            }
            ,
            t.prototype.on = function(t, e) {
                var i;
                return null == (i = this.bindings)[t] && (i[t] = []),
                this.bindings[t].push(e)
            }
            ,
            t
        }(),
        W = window.XMLHttpRequest,
        q = window.XDomainRequest,
        j = window.WebSocket,
        T = function(t, e) {
            var i, n, r;
            r = [];
            for (n in e.prototype)
                try {
                    r.push(null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? Object.defineProperty(t, n, {
                        get: function() {
                            return e.prototype[n]
                        },
                        configurable: !0,
                        enumerable: !0
                    }) : t[n] = e.prototype[n] : void 0)
                } catch (t) {
                    i = t
                }
            return r
        }
        ,
        k = [],
        u.ignore = function() {
            var t, e, i;
            return e = arguments[0],
            t = 2 <= arguments.length ? Q.call(arguments, 1) : [],
            k.unshift("ignore"),
            i = e.apply(null, t),
            k.shift(),
            i
        }
        ,
        u.track = function() {
            var t, e, i;
            return e = arguments[0],
            t = 2 <= arguments.length ? Q.call(arguments, 1) : [],
            k.unshift("track"),
            i = e.apply(null, t),
            k.shift(),
            i
        }
        ,
        R = function(t) {
            var e;
            if (null == t && (t = "GET"),
            "track" === k[0])
                return "force";
            if (!k.length && P.ajax) {
                if ("socket" === t && P.ajax.trackWebSockets)
                    return !0;
                if (e = t.toUpperCase(),
                $.call(P.ajax.trackMethods, e) >= 0)
                    return !0
            }
            return !1
        }
        ,
        c = function(t) {
            function e() {
                var t, i = this;
                e.__super__.constructor.apply(this, arguments),
                t = function(t) {
                    var e;
                    return e = t.open,
                    t.open = function(n, r) {
                        return R(n) && i.trigger("request", {
                            type: n,
                            url: r,
                            request: t
                        }),
                        e.apply(t, arguments)
                    }
                }
                ,
                window.XMLHttpRequest = function(e) {
                    var i;
                    return i = new W(e),
                    t(i),
                    i
                }
                ;
                try {
                    T(window.XMLHttpRequest, W)
                } catch (t) {}
                if (null != q) {
                    window.XDomainRequest = function() {
                        var e;
                        return e = new q,
                        t(e),
                        e
                    }
                    ;
                    try {
                        T(window.XDomainRequest, q)
                    } catch (t) {}
                }
                if (null != j && P.ajax.trackWebSockets) {
                    window.WebSocket = function(t, e) {
                        var n;
                        return n = null != e ? new j(t,e) : new j(t),
                        R("socket") && i.trigger("request", {
                            type: "socket",
                            url: t,
                            protocols: e,
                            request: n
                        }),
                        n
                    }
                    ;
                    try {
                        T(window.WebSocket, j)
                    } catch (t) {}
                }
            }
            return J(e, t),
            e
        }(a),
        H = null,
        S = function() {
            return null == H && (H = new c),
            H
        }
        ,
        I = function(t) {
            var e, i, n, r;
            for (r = P.ajax.ignoreURLs,
            i = 0,
            n = r.length; n > i; i++)
                if (e = r[i],
                "string" == typeof e) {
                    if (-1 !== t.indexOf(e))
                        return !0
                } else if (e.test(t))
                    return !0;
            return !1
        }
        ,
        S().on("request", function(e) {
            var i, n, r, o, s;
            return o = e.type,
            r = e.request,
            s = e.url,
            I(s) ? void 0 : u.running || P.restartOnRequestAfter === !1 && "force" !== R(o) ? void 0 : (n = arguments,
            i = P.restartOnRequestAfter || 0,
            "boolean" == typeof i && (i = 0),
            setTimeout(function() {
                var e, i, s, a, l, c;
                if (e = "socket" === o ? r.readyState < 2 : 0 < (a = r.readyState) && 4 > a) {
                    for (u.restart(),
                    l = u.sources,
                    c = [],
                    i = 0,
                    s = l.length; s > i; i++) {
                        if (N = l[i],
                        N instanceof t) {
                            N.watch.apply(N, n);
                            break
                        }
                        c.push(void 0)
                    }
                    return c
                }
            }, i))
        }),
        t = function() {
            function t() {
                var t = this;
                this.elements = [],
                S().on("request", function() {
                    return t.watch.apply(t, arguments)
                })
            }
            return t.prototype.watch = function(t) {
                var e, i, n, r;
                return n = t.type,
                e = t.request,
                r = t.url,
                I(r) ? void 0 : (i = "socket" === n ? new p(e) : new d(e),
                this.elements.push(i))
            }
            ,
            t
        }(),
        d = function() {
            function t(t) {
                var e, i, n, r, o, s, a = this;
                if (this.progress = 0,
                null != window.ProgressEvent)
                    for (i = null,
                    t.addEventListener("progress", function(t) {
                        return a.progress = t.lengthComputable ? 100 * t.loaded / t.total : a.progress + (100 - a.progress) / 2
                    }, !1),
                    s = ["load", "abort", "timeout", "error"],
                    n = 0,
                    r = s.length; r > n; n++)
                        e = s[n],
                        t.addEventListener(e, function() {
                            return a.progress = 100
                        }, !1);
                else
                    o = t.onreadystatechange,
                    t.onreadystatechange = function() {
                        var e;
                        return 0 === (e = t.readyState) || 4 === e ? a.progress = 100 : 3 === t.readyState && (a.progress = 50),
                        "function" == typeof o ? o.apply(null, arguments) : void 0
                    }
            }
            return t
        }(),
        p = function() {
            function t(t) {
                var e, i, n, r, o = this;
                for (this.progress = 0,
                r = ["error", "open"],
                i = 0,
                n = r.length; n > i; i++)
                    e = r[i],
                    t.addEventListener(e, function() {
                        return o.progress = 100
                    }, !1)
            }
            return t
        }(),
        n = function() {
            function t(t) {
                var e, i, n, o;
                for (null == t && (t = {}),
                this.elements = [],
                null == t.selectors && (t.selectors = []),
                o = t.selectors,
                i = 0,
                n = o.length; n > i; i++)
                    e = o[i],
                    this.elements.push(new r(e))
            }
            return t
        }(),
        r = function() {
            function t(t) {
                this.selector = t,
                this.progress = 0,
                this.check()
            }
            return t.prototype.check = function() {
                var t = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return t.check()
                }, P.elements.checkInterval)
            }
            ,
            t.prototype.done = function() {
                return this.progress = 100
            }
            ,
            t
        }(),
        i = function() {
            function t() {
                var t, e, i = this;
                this.progress = null != (e = this.states[document.readyState]) ? e : 100,
                t = document.onreadystatechange,
                document.onreadystatechange = function() {
                    return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]),
                    "function" == typeof t ? t.apply(null, arguments) : void 0
                }
            }
            return t.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            },
            t
        }(),
        o = function() {
            function t() {
                var t, e, i, n, r, o = this;
                this.progress = 0,
                t = 0,
                r = [],
                n = 0,
                i = O(),
                e = setInterval(function() {
                    var s;
                    return s = O() - i - 50,
                    i = O(),
                    r.push(s),
                    r.length > P.eventLag.sampleCount && r.shift(),
                    t = g(r),
                    ++n >= P.eventLag.minSamples && t < P.eventLag.lagThreshold ? (o.progress = 100,
                    clearInterval(e)) : o.progress = 100 * (3 / (t + 3))
                }, 50)
            }
            return t
        }(),
        f = function() {
            function t(t) {
                this.source = t,
                this.last = this.sinceLastUpdate = 0,
                this.rate = P.initialRate,
                this.catchup = 0,
                this.progress = this.lastProgress = 0,
                null != this.source && (this.progress = A(this.source, "progress"))
            }
            return t.prototype.tick = function(t, e) {
                var i;
                return null == e && (e = A(this.source, "progress")),
                e >= 100 && (this.done = !0),
                e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate),
                this.catchup = (e - this.progress) / P.catchupTime,
                this.sinceLastUpdate = 0,
                this.last = e),
                e > this.progress && (this.progress += this.catchup * t),
                i = 1 - Math.pow(this.progress / 100, P.easeFactor),
                this.progress += i * this.rate * t,
                this.progress = Math.min(this.lastProgress + P.maxProgressPerFrame, this.progress),
                this.progress = Math.max(0, this.progress),
                this.progress = Math.min(100, this.progress),
                this.lastProgress = this.progress,
                this.progress
            }
            ,
            t
        }(),
        F = null,
        D = null,
        v = null,
        z = null,
        m = null,
        y = null,
        u.running = !1,
        C = function() {
            return P.restartOnPushState ? u.restart() : void 0
        }
        ,
        null != window.history.pushState && (Y = window.history.pushState,
        window.history.pushState = function() {
            return C(),
            Y.apply(window.history, arguments)
        }
        ),
        null != window.history.replaceState && (G = window.history.replaceState,
        window.history.replaceState = function() {
            return C(),
            G.apply(window.history, arguments)
        }
        ),
        h = {
            ajax: t,
            elements: n,
            document: i,
            eventLag: o
        },
        (E = function() {
            var t, i, n, r, o, s, a, l;
            for (u.sources = F = [],
            s = ["ajax", "elements", "document", "eventLag"],
            i = 0,
            r = s.length; r > i; i++)
                t = s[i],
                P[t] !== !1 && F.push(new h[t](P[t]));
            for (l = null != (a = P.extraSources) ? a : [],
            n = 0,
            o = l.length; o > n; n++)
                N = l[n],
                F.push(new N(P));
            return u.bar = v = new e,
            D = [],
            z = new f
        }
        )(),
        u.stop = function() {
            return u.trigger("stop"),
            u.running = !1,
            v.destroy(),
            y = !0,
            null != m && ("function" == typeof _ && _(m),
            m = null),
            E()
        }
        ,
        u.restart = function() {
            return u.trigger("restart"),
            u.stop(),
            u.start()
        }
        ,
        u.go = function() {
            var t;
            return u.running = !0,
            v.render(),
            t = O(),
            y = !1,
            m = L(function(e, i) {
                var n, r, o, s, a, l, c, h, p, d, m, g, _, x, w, T;
                for (h = 100 - v.progress,
                r = m = 0,
                o = !0,
                l = g = 0,
                x = F.length; x > g; l = ++g)
                    for (N = F[l],
                    d = null != D[l] ? D[l] : D[l] = [],
                    a = null != (T = N.elements) ? T : [N],
                    c = _ = 0,
                    w = a.length; w > _; c = ++_)
                        s = a[c],
                        p = null != d[c] ? d[c] : d[c] = new f(s),
                        o &= p.done,
                        p.done || (r++,
                        m += p.tick(e));
                return n = m / r,
                v.update(z.tick(e, n)),
                v.done() || o || y ? (v.update(100),
                u.trigger("done"),
                setTimeout(function() {
                    return v.finish(),
                    u.running = !1,
                    u.trigger("hide")
                }, Math.max(P.ghostTime, Math.max(P.minTime - (O() - t), 0)))) : i()
            })
        }
        ,
        u.start = function(t) {
            w(P, t),
            u.running = !0;
            try {
                v.render()
            } catch (t) {
                l = t
            }
            return document.querySelector(".pace") ? (u.trigger("start"),
            u.go()) : setTimeout(u.start, 50)
        }
        ,
        "function" == typeof define && define.amd ? define(["pace"], function() {
            return u
        }) : "object" == typeof exports ? module.exports = u : P.startOnPageLoad && u.start()
    }
    .call(this),
    !function(t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";
        function i(i, o, a) {
            function l(t, e, n) {
                var r, o = "$()." + i + '("' + e + '")';
                return t.each(function(t, l) {
                    var u = a.data(l, i);
                    if (!u)
                        return void s(i + " not initialized. Cannot call methods, i.e. " + o);
                    var c = u[e];
                    if (!c || "_" == e.charAt(0))
                        return void s(o + " is not a valid method");
                    var h = c.apply(u, n);
                    r = void 0 === r ? h : r
                }),
                void 0 !== r ? r : t
            }
            function u(t, e) {
                t.each(function(t, n) {
                    var r = a.data(n, i);
                    r ? (r.option(e),
                    r._init()) : (r = new o(n,e),
                    a.data(n, i, r))
                })
            }
            a = a || e || t.jQuery,
            a && (o.prototype.option || (o.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }
            ),
            a.fn[i] = function(t) {
                if ("string" == typeof t) {
                    var e = r.call(arguments, 1);
                    return l(this, t, e)
                }
                return u(this, t),
                this
            }
            ,
            n(a))
        }
        function n(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var r = Array.prototype.slice
          , o = t.console
          , s = "undefined" == typeof o ? function() {}
        : function(t) {
            o.error(t)
        }
        ;
        return n(e || t.jQuery),
        i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {}
                  , n = i[t] = i[t] || [];
                return n.indexOf(e) == -1 && n.push(e),
                this
            }
        }
        ,
        e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {}
                  , n = i[t] = i[t] || {};
                return n[e] = !0,
                this
            }
        }
        ,
        e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return n != -1 && i.splice(n, 1),
                this
            }
        }
        ,
        e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0
                  , r = i[n];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; r; ) {
                    var s = o && o[r];
                    s && (this.off(t, r),
                    delete o[r]),
                    r.apply(this, e),
                    n += s ? 0 : 1,
                    r = i[n]
                }
                return this
            }
        }
        ,
        t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";
        function t(t) {
            var e = parseFloat(t)
              , i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e
        }
        function e() {}
        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < u; e++) {
                var i = l[e];
                t[i] = 0
            }
            return t
        }
        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
            e
        }
        function r() {
            if (!c) {
                c = !0;
                var e = document.createElement("div");
                e.style.width = "200px",
                e.style.padding = "1px 2px 3px 4px",
                e.style.borderStyle = "solid",
                e.style.borderWidth = "1px 2px 3px 4px",
                e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var r = n(e);
                o.isBoxSizeOuter = s = 200 == t(r.width),
                i.removeChild(e)
            }
        }
        function o(e) {
            if (r(),
            "string" == typeof e && (e = document.querySelector(e)),
            e && "object" == typeof e && e.nodeType) {
                var o = n(e);
                if ("none" == o.display)
                    return i();
                var a = {};
                a.width = e.offsetWidth,
                a.height = e.offsetHeight;
                for (var c = a.isBorderBox = "border-box" == o.boxSizing, h = 0; h < u; h++) {
                    var f = l[h]
                      , p = o[f]
                      , d = parseFloat(p);
                    a[f] = isNaN(d) ? 0 : d
                }
                var m = a.paddingLeft + a.paddingRight
                  , g = a.paddingTop + a.paddingBottom
                  , v = a.marginLeft + a.marginRight
                  , y = a.marginTop + a.marginBottom
                  , _ = a.borderLeftWidth + a.borderRightWidth
                  , x = a.borderTopWidth + a.borderBottomWidth
                  , w = c && s
                  , T = t(o.width);
                T !== !1 && (a.width = T + (w ? 0 : m + _));
                var b = t(o.height);
                return b !== !1 && (a.height = b + (w ? 0 : g + x)),
                a.innerWidth = a.width - (m + _),
                a.innerHeight = a.height - (g + x),
                a.outerWidth = a.width + v,
                a.outerHeight = a.height + y,
                a
            }
        }
        var s, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        }
        , l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], u = l.length, c = !1;
        return o
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches)
                return "matches";
            if (t.matchesSelector)
                return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i]
                  , r = n + "MatchesSelector";
                if (t[r])
                    return r
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        }
        ,
        i.modulo = function(t, e) {
            return (t % e + e) % e
        }
        ,
        i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t))
                e = t;
            else if (t && "object" == typeof t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++)
                    e.push(t[i]);
            else
                e.push(t);
            return e
        }
        ,
        i.removeFrom = function(t, e) {
            var i = t.indexOf(e);
            i != -1 && t.splice(i, 1)
        }
        ,
        i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body; )
                if (t = t.parentNode,
                e(t, i))
                    return t
        }
        ,
        i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }
        ,
        i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }
        ,
        i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var r = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n)
                        return void r.push(t);
                    e(t, n) && r.push(t);
                    for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                        r.push(i[o])
                }
            }),
            r
        }
        ,
        i.debounceMethod = function(t, e, i) {
            var n = t.prototype[e]
              , r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments
                  , o = this;
                this[r] = setTimeout(function() {
                    n.apply(o, e),
                    delete o[r]
                }, i || 100)
            }
        }
        ,
        i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }
        ,
        i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }
        ;
        var n = t.console;
        return i.htmlInit = function(e, r) {
            i.docReady(function() {
                var o = i.toDashed(r)
                  , s = "data-" + o
                  , a = document.querySelectorAll("[" + s + "]")
                  , l = document.querySelectorAll(".js-" + o)
                  , u = i.makeArray(a).concat(i.makeArray(l))
                  , c = s + "-options"
                  , h = t.jQuery;
                u.forEach(function(t) {
                    var i, o = t.getAttribute(s) || t.getAttribute(c);
                    try {
                        i = o && JSON.parse(o)
                    } catch (e) {
                        return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t,i);
                    h && h.data(t, r, a)
                })
            })
        }
        ,
        i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
        t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";
        function i(t) {
            for (var e in t)
                return !1;
            return e = null,
            !0
        }
        function n(t, e) {
            t && (this.element = t,
            this.layout = e,
            this.position = {
                x: 0,
                y: 0
            },
            this._create())
        }
        function r(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var o = document.documentElement.style
          , s = "string" == typeof o.transition ? "transition" : "WebkitTransition"
          , a = "string" == typeof o.transform ? "transform" : "WebkitTransform"
          , l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s]
          , u = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        }
          , c = n.prototype = Object.create(t.prototype);
        c.constructor = n,
        c._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            },
            this.css({
                position: "absolute"
            })
        }
        ,
        c.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }
        ,
        c.getSize = function() {
            this.size = e(this.element)
        }
        ,
        c.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = u[i] || i;
                e[n] = t[i]
            }
        }
        ,
        c.getPosition = function() {
            var t = getComputedStyle(this.element)
              , e = this.layout._getOption("originLeft")
              , i = this.layout._getOption("originTop")
              , n = t[e ? "left" : "right"]
              , r = t[i ? "top" : "bottom"]
              , o = this.layout.size
              , s = n.indexOf("%") != -1 ? parseFloat(n) / 100 * o.width : parseInt(n, 10)
              , a = r.indexOf("%") != -1 ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
            s = isNaN(s) ? 0 : s,
            a = isNaN(a) ? 0 : a,
            s -= e ? o.paddingLeft : o.paddingRight,
            a -= i ? o.paddingTop : o.paddingBottom,
            this.position.x = s,
            this.position.y = a
        }
        ,
        c.layoutPosition = function() {
            var t = this.layout.size
              , e = {}
              , i = this.layout._getOption("originLeft")
              , n = this.layout._getOption("originTop")
              , r = i ? "paddingLeft" : "paddingRight"
              , o = i ? "left" : "right"
              , s = i ? "right" : "left"
              , a = this.position.x + t[r];
            e[o] = this.getXValue(a),
            e[s] = "";
            var l = n ? "paddingTop" : "paddingBottom"
              , u = n ? "top" : "bottom"
              , c = n ? "bottom" : "top"
              , h = this.position.y + t[l];
            e[u] = this.getYValue(h),
            e[c] = "",
            this.css(e),
            this.emitEvent("layout", [this])
        }
        ,
        c.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }
        ,
        c.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }
        ,
        c._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x
              , n = this.position.y
              , r = parseInt(t, 10)
              , o = parseInt(e, 10)
              , s = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e),
            s && !this.isTransitioning)
                return void this.layoutPosition();
            var a = t - i
              , l = e - n
              , u = {};
            u.transform = this.getTranslate(a, l),
            this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }
        ,
        c.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft")
              , n = this.layout._getOption("originTop");
            return t = i ? t : -t,
            e = n ? e : -e,
            "translate3d(" + t + "px, " + e + "px, 0)"
        }
        ,
        c.goTo = function(t, e) {
            this.setPosition(t, e),
            this.layoutPosition()
        }
        ,
        c.moveTo = c._transitionTo,
        c.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10),
            this.position.y = parseInt(e, 10)
        }
        ,
        c._nonTransition = function(t) {
            this.css(t.to),
            t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        }
        ,
        c.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0,
                t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        }
        ;
        var h = "opacity," + r(a);
        c.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t,
                this.css({
                    transitionProperty: h,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }),
                this.element.addEventListener(l, this, !1)
            }
        }
        ,
        c.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }
        ,
        c.onotransitionend = function(t) {
            this.ontransitionend(t)
        }
        ;
        var f = {
            "-webkit-transform": "transform"
        };
        c.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn
                  , n = f[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n],
                i(e.ingProperties) && this.disableTransition(),
                n in e.clean && (this.element.style[t.propertyName] = "",
                delete e.clean[n]),
                n in e.onEnd) {
                    var r = e.onEnd[n];
                    r.call(this),
                    delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }
        ,
        c.disableTransition = function() {
            this.removeTransitionStyles(),
            this.element.removeEventListener(l, this, !1),
            this.isTransitioning = !1
        }
        ,
        c._removeStyles = function(t) {
            var e = {};
            for (var i in t)
                e[i] = "";
            this.css(e)
        }
        ;
        var p = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return c.removeTransitionStyles = function() {
            this.css(p)
        }
        ,
        c.stagger = function(t) {
            t = isNaN(t) ? 0 : t,
            this.staggerDelay = t + "ms"
        }
        ,
        c.removeElem = function() {
            this.element.parentNode.removeChild(this.element),
            this.css({
                display: ""
            }),
            this.emitEvent("remove", [this])
        }
        ,
        c.remove = function() {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }),
            void this.hide()) : void this.removeElem()
        }
        ,
        c.reveal = function() {
            delete this.isHidden,
            this.css({
                display: ""
            });
            var t = this.layout.options
              , e = {}
              , i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd,
            this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }
        ,
        c.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }
        ,
        c.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity)
                return "opacity";
            for (var i in e)
                return i
        }
        ,
        c.hide = function() {
            this.isHidden = !0,
            this.css({
                display: ""
            });
            var t = this.layout.options
              , e = {}
              , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd,
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }
        ,
        c.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }),
            this.emitEvent("hide"))
        }
        ,
        c.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }
        ,
        n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, r, o) {
            return e(t, i, n, r, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, r) {
        "use strict";
        function o(t, e) {
            var i = n.getQueryElement(t);
            if (!i)
                return void (l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i,
            u && (this.$element = u(this.element)),
            this.options = n.extend({}, this.constructor.defaults),
            this.option(e);
            var r = ++h;
            this.element.outlayerGUID = r,
            f[r] = this,
            this._create();
            var o = this._getOption("initLayout");
            o && this.layout()
        }
        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e
        }
        function a(t) {
            if ("number" == typeof t)
                return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/)
              , i = e && e[1]
              , n = e && e[2];
            if (!i.length)
                return 0;
            i = parseFloat(i);
            var r = d[n] || 1;
            return i * r
        }
        var l = t.console
          , u = t.jQuery
          , c = function() {}
          , h = 0
          , f = {};
        o.namespace = "outlayer",
        o.Item = r,
        o.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var p = o.prototype;
        n.extend(p, e.prototype),
        p.option = function(t) {
            n.extend(this.options, t)
        }
        ,
        p._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }
        ,
        o.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        },
        p._create = function() {
            this.reloadItems(),
            this.stamps = [],
            this.stamp(this.options.stamp),
            n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }
        ,
        p.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }
        ,
        p._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0; r < e.length; r++) {
                var o = e[r]
                  , s = new i(o,this);
                n.push(s)
            }
            return n
        }
        ,
        p._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }
        ,
        p.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }
        ,
        p.layout = function() {
            this._resetLayout(),
            this._manageStamps();
            var t = this._getOption("layoutInstant")
              , e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e),
            this._isLayoutInited = !0
        }
        ,
        p._init = p.layout,
        p._resetLayout = function() {
            this.getSize()
        }
        ,
        p.getSize = function() {
            this.size = i(this.element)
        }
        ,
        p._getMeasurement = function(t, e) {
            var n, r = this.options[t];
            r ? ("string" == typeof r ? n = this.element.querySelector(r) : r instanceof HTMLElement && (n = r),
            this[t] = n ? i(n)[e] : r) : this[t] = 0
        }
        ,
        p.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t),
            this._layoutItems(t, e),
            this._postLayout()
        }
        ,
        p._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }
        ,
        p._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t),
            t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t,
                    n.isInstant = e || t.isLayoutInstant,
                    i.push(n)
                }, this),
                this._processLayoutQueue(i)
            }
        }
        ,
        p._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }
        ,
        p._processLayoutQueue = function(t) {
            this.updateStagger(),
            t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }
        ,
        p.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
            this.stagger)
        }
        ,
        p._positionItem = function(t, e, i, n, r) {
            n ? t.goTo(e, i) : (t.stagger(r * this.stagger),
            t.moveTo(e, i))
        }
        ,
        p._postLayout = function() {
            this.resizeContainer()
        }
        ,
        p.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0),
                this._setContainerMeasure(e.height, !1))
            }
        }
        ,
        p._getContainerSize = c,
        p._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                t = Math.max(t, 0),
                this.element.style[e ? "width" : "height"] = t + "px"
            }
        }
        ,
        p._emitCompleteOnItems = function(t, e) {
            function i() {
                r.dispatchEvent(t + "Complete", null, [e])
            }
            function n() {
                s++,
                s == o && i()
            }
            var r = this
              , o = e.length;
            if (!e || !o)
                return void i();
            var s = 0;
            e.forEach(function(e) {
                e.once(t, n)
            })
        }
        ,
        p.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n),
            u)
                if (this.$element = this.$element || u(this.element),
                e) {
                    var r = u.Event(e);
                    r.type = t,
                    this.$element.trigger(r, i)
                } else
                    this.$element.trigger(t, i)
        }
        ,
        p.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }
        ,
        p.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }
        ,
        p.stamp = function(t) {
            t = this._find(t),
            t && (this.stamps = this.stamps.concat(t),
            t.forEach(this.ignore, this))
        }
        ,
        p.unstamp = function(t) {
            t = this._find(t),
            t && t.forEach(function(t) {
                n.removeFrom(this.stamps, t),
                this.unignore(t)
            }, this)
        }
        ,
        p._find = function(t) {
            if (t)
                return "string" == typeof t && (t = this.element.querySelectorAll(t)),
                t = n.makeArray(t)
        }
        ,
        p._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(),
            this.stamps.forEach(this._manageStamp, this))
        }
        ,
        p._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect()
              , e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }
        ,
        p._manageStamp = c,
        p._getElementOffset = function(t) {
            var e = t.getBoundingClientRect()
              , n = this._boundingRect
              , r = i(t)
              , o = {
                left: e.left - n.left - r.marginLeft,
                top: e.top - n.top - r.marginTop,
                right: n.right - e.right - r.marginRight,
                bottom: n.bottom - e.bottom - r.marginBottom
            };
            return o
        }
        ,
        p.handleEvent = n.handleEvent,
        p.bindResize = function() {
            t.addEventListener("resize", this),
            this.isResizeBound = !0
        }
        ,
        p.unbindResize = function() {
            t.removeEventListener("resize", this),
            this.isResizeBound = !1
        }
        ,
        p.onresize = function() {
            this.resize()
        }
        ,
        n.debounceMethod(o, "onresize", 100),
        p.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }
        ,
        p.needsResizeLayout = function() {
            var t = i(this.element)
              , e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }
        ,
        p.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)),
            e
        }
        ,
        p.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0),
            this.reveal(e))
        }
        ,
        p.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(e, !0),
                this.reveal(e),
                this.layoutItems(i)
            }
        }
        ,
        p.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t),
            t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e),
                    t.reveal()
                })
            }
        }
        ,
        p.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t),
            t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e),
                    t.hide()
                })
            }
        }
        ,
        p.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }
        ,
        p.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }
        ,
        p.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t)
                    return i
            }
        }
        ,
        p.getItems = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this),
            e
        }
        ,
        p.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e),
            e && e.length && e.forEach(function(t) {
                t.remove(),
                n.removeFrom(this.items, t)
            }, this)
        }
        ,
        p.destroy = function() {
            var t = this.element.style;
            t.height = "",
            t.position = "",
            t.width = "",
            this.items.forEach(function(t) {
                t.destroy()
            }),
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete f[e],
            delete this.element.outlayerGUID,
            u && u.removeData(this.element, this.constructor.namespace)
        }
        ,
        o.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && f[e]
        }
        ,
        o.create = function(t, e) {
            var i = s(o);
            return i.defaults = n.extend({}, o.defaults),
            n.extend(i.defaults, e),
            i.compatOptions = n.extend({}, o.compatOptions),
            i.namespace = t,
            i.data = o.data,
            i.Item = s(r),
            n.htmlInit(i, t),
            u && u.bridget && u.bridget(t, i),
            i
        }
        ;
        var d = {
            ms: 1,
            s: 1e3
        };
        return o.Item = r,
        o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
        t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype)
          , n = i._create;
        i._create = function() {
            this.id = this.layout.itemGUID++,
            n.call(this),
            this.sortData = {}
        }
        ,
        i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id,
                this.sortData["original-order"] = this.id,
                this.sortData.random = Math.random();
                var t = this.layout.options.getSortData
                  , e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        }
        ;
        var r = i.destroy;
        return i.destroy = function() {
            r.apply(this, arguments),
            this.css({
                display: ""
            })
        }
        ,
        e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
        t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";
        function i(t) {
            this.isotope = t,
            t && (this.options = t.options[this.namespace],
            this.element = t.element,
            this.items = t.filteredItems,
            this.size = t.size)
        }
        var n = i.prototype
          , r = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return r.forEach(function(t) {
            n[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }),
        n.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element)
              , i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }
        ,
        n._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }
        ,
        n.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }
        ,
        n.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }
        ,
        n.getSegmentSize = function(t, e) {
            var i = t + e
              , n = "outer" + e;
            if (this._getMeasurement(i, n),
            !this[i]) {
                var r = this.getFirstItemSize();
                this[i] = r && r[n] || this.isotope.size["inner" + e]
            }
        }
        ,
        n.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }
        ,
        n.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }
        ,
        n.getSize = function() {
            this.isotope.getSize(),
            this.size = this.isotope.size
        }
        ,
        i.modes = {},
        i.create = function(t, e) {
            function r() {
                i.apply(this, arguments)
            }
            return r.prototype = Object.create(n),
            r.prototype.constructor = r,
            e && (r.options = e),
            r.prototype.namespace = t,
            i.modes[t] = r,
            r
        }
        ,
        i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var n = i.prototype;
        return n._resetLayout = function() {
            this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns(),
            this.colYs = [];
            for (var t = 0; t < this.cols; t++)
                this.colYs.push(0);
            this.maxY = 0,
            this.horizontalColIndex = 0
        }
        ,
        n.measureColumns = function() {
            if (this.getContainerWidth(),
            !this.columnWidth) {
                var t = this.items[0]
                  , i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter
              , r = this.containerWidth + this.gutter
              , o = r / n
              , s = n - r % n
              , a = s && s < 1 ? "round" : "floor";
            o = Math[a](o),
            this.cols = Math.max(o, 1)
        }
        ,
        n.getContainerWidth = function() {
            var t = this._getOption("fitWidth")
              , i = t ? this.element.parentNode : this.element
              , n = e(i);
            this.containerWidth = n && n.innerWidth
        }
        ,
        n._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth
              , i = e && e < 1 ? "round" : "ceil"
              , n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", o = this[r](n, t), s = {
                x: this.columnWidth * o.col,
                y: o.y
            }, a = o.y + t.size.outerHeight, l = n + o.col, u = o.col; u < l; u++)
                this.colYs[u] = a;
            return s
        }
        ,
        n._getTopColPosition = function(t) {
            var e = this._getTopColGroup(t)
              , i = Math.min.apply(Math, e);
            return {
                col: e.indexOf(i),
                y: i
            }
        }
        ,
        n._getTopColGroup = function(t) {
            if (t < 2)
                return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++)
                e[n] = this._getColGroupY(n, t);
            return e
        }
        ,
        n._getColGroupY = function(t, e) {
            if (e < 2)
                return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i)
        }
        ,
        n._getHorizontalColPosition = function(t, e) {
            var i = this.horizontalColIndex % this.cols
              , n = t > 1 && i + t > this.cols;
            i = n ? 0 : i;
            var r = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = r ? i + t : this.horizontalColIndex,
            {
                col: i,
                y: this._getColGroupY(i, t)
            }
        }
        ,
        n._manageStamp = function(t) {
            var i = e(t)
              , n = this._getElementOffset(t)
              , r = this._getOption("originLeft")
              , o = r ? n.left : n.right
              , s = o + i.outerWidth
              , a = Math.floor(o / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(s / this.columnWidth);
            l -= s % this.columnWidth ? 0 : 1,
            l = Math.min(this.cols - 1, l);
            for (var u = this._getOption("originTop"), c = (u ? n.top : n.bottom) + i.outerHeight, h = a; h <= l; h++)
                this.colYs[h] = Math.max(c, this.colYs[h])
        }
        ,
        n._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
            t
        }
        ,
        n._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
                t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }
        ,
        n.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(),
            t != this.containerWidth
        }
        ,
        i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry")
          , n = i.prototype
          , r = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
        for (var o in e.prototype)
            r[o] || (n[o] = e.prototype[o]);
        var s = n.measureColumns;
        n.measureColumns = function() {
            this.items = this.isotope.filteredItems,
            s.call(this)
        }
        ;
        var a = n._getOption;
        return n._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }
        ,
        i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows")
          , i = e.prototype;
        return i._resetLayout = function() {
            this.x = 0,
            this.y = 0,
            this.maxY = 0,
            this._getMeasurement("gutter", "outerWidth")
        }
        ,
        i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter
              , i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0,
            this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
            this.x += e,
            n
        }
        ,
        i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }
        ,
        e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
            horizontalAlignment: 0
        })
          , i = e.prototype;
        return i._resetLayout = function() {
            this.y = 0
        }
        ,
        i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
              , i = this.y;
            return this.y += t.size.outerHeight,
            {
                x: e,
                y: i
            }
        }
        ,
        i._getContainerSize = function() {
            return {
                height: this.y
            }
        }
        ,
        e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, r, o, s, a) {
            return e(t, i, n, r, o, s, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, n, r, o, s) {
        function a(t, e) {
            return function(i, n) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r]
                      , s = i.sortData[o]
                      , a = n.sortData[o];
                    if (s > a || s < a) {
                        var l = void 0 !== e[o] ? e[o] : e
                          , u = l ? 1 : -1;
                        return (s > a ? 1 : -1) * u
                    }
                }
                return 0
            }
        }
        var l = t.jQuery
          , u = String.prototype.trim ? function(t) {
            return t.trim()
        }
        : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        }
          , c = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
        c.Item = o,
        c.LayoutMode = s;
        var h = c.prototype;
        h._create = function() {
            this.itemGUID = 0,
            this._sorters = {},
            this._getSorters(),
            e.prototype._create.call(this),
            this.modes = {},
            this.filteredItems = this.items,
            this.sortHistory = ["original-order"];
            for (var t in s.modes)
                this._initLayoutMode(t)
        }
        ,
        h.reloadItems = function() {
            this.itemGUID = 0,
            e.prototype.reloadItems.call(this)
        }
        ,
        h._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                var n = t[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(t),
            t
        }
        ,
        h._initLayoutMode = function(t) {
            var e = s.modes[t]
              , i = this.options[t] || {};
            this.options[t] = e.options ? r.extend(e.options, i) : i,
            this.modes[t] = new e(this)
        }
        ,
        h.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }
        ,
        h._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(this.filteredItems, t),
            this._isLayoutInited = !0
        }
        ,
        h.arrange = function(t) {
            this.option(t),
            this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches,
            this._bindArrangeComplete(),
            this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
            this._sort(),
            this._layout()
        }
        ,
        h._init = h.arrange,
        h._hideReveal = function(t) {
            this.reveal(t.needReveal),
            this.hide(t.needHide)
        }
        ,
        h._getIsInstant = function() {
            var t = this._getOption("layoutInstant")
              , e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e,
            e
        }
        ,
        h._bindArrangeComplete = function() {
            function t() {
                e && i && n && r.dispatchEvent("arrangeComplete", null, [r.filteredItems])
            }
            var e, i, n, r = this;
            this.once("layoutComplete", function() {
                e = !0,
                t()
            }),
            this.once("hideComplete", function() {
                i = !0,
                t()
            }),
            this.once("revealComplete", function() {
                n = !0,
                t()
            })
        }
        ,
        h._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], r = [], o = this._getFilterTest(e), s = 0; s < t.length; s++) {
                var a = t[s];
                if (!a.isIgnored) {
                    var l = o(a);
                    l && i.push(a),
                    l && a.isHidden ? n.push(a) : l || a.isHidden || r.push(a)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: r
            }
        }
        ,
        h._getFilterTest = function(t) {
            return l && this.options.isJQueryFiltering ? function(e) {
                return l(e.element).is(t)
            }
            : "function" == typeof t ? function(e) {
                return t(e.element)
            }
            : function(e) {
                return n(e.element, t)
            }
        }
        ,
        h.updateSortData = function(t) {
            var e;
            t ? (t = r.makeArray(t),
            e = this.getItems(t)) : e = this.items,
            this._getSorters(),
            this._updateItemsSortData(e)
        }
        ,
        h._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = f(i)
            }
        }
        ,
        h._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
                var n = t[i];
                n.updateSortData()
            }
        }
        ;
        var f = function() {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var i = u(t).split(" ")
                  , n = i[0]
                  , r = n.match(/^\[(.+)\]$/)
                  , o = r && r[1]
                  , s = e(o, n)
                  , a = c.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(s(t))
                }
                : function(t) {
                    return t && s(t)
                }
            }
            function e(t, e) {
                return t ? function(e) {
                    return e.getAttribute(t)
                }
                : function(t) {
                    var i = t.querySelector(e);
                    return i && i.textContent
                }
            }
            return t
        }();
        c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        },
        h._sort = function() {
            if (this.options.sortBy) {
                var t = r.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = a(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(e)
            }
        }
        ,
        h._getIsSameSortBy = function(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e])
                    return !1;
            return !0
        }
        ,
        h._mode = function() {
            var t = this.options.layoutMode
              , e = this.modes[t];
            if (!e)
                throw new Error("No layout mode: " + t);
            return e.options = this.options[t],
            e
        }
        ,
        h._resetLayout = function() {
            e.prototype._resetLayout.call(this),
            this._mode()._resetLayout()
        }
        ,
        h._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }
        ,
        h._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }
        ,
        h._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }
        ,
        h.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }
        ,
        h.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }
        ,
        h.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(),
                this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems),
                this.filteredItems = i.concat(this.filteredItems),
                this.items = e.concat(this.items)
            }
        }
        ,
        h._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide),
            this.reveal(e.matches),
            this.layoutItems(e.matches, !0),
            e.matches
        }
        ,
        h.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, r = e.length;
                for (i = 0; i < r; i++)
                    n = e[i],
                    this.element.appendChild(n.element);
                var o = this._filter(e).matches;
                for (i = 0; i < r; i++)
                    e[i].isLayoutInstant = !0;
                for (this.arrange(),
                i = 0; i < r; i++)
                    delete e[i].isLayoutInstant;
                this.reveal(o)
            }
        }
        ;
        var p = h.remove;
        return h.remove = function(t) {
            t = r.makeArray(t);
            var e = this.getItems(t);
            p.call(this, t);
            for (var i = e && e.length, n = 0; i && n < i; n++) {
                var o = e[n];
                r.removeFrom(this.filteredItems, o)
            }
        }
        ,
        h.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = this.items[t];
                e.sortData.random = Math.random()
            }
            this.options.sortBy = "random",
            this._sort(),
            this._layout()
        }
        ,
        h._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.apply(this, e);
            return this.options.transitionDuration = i,
            n
        }
        ,
        h.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element
            })
        }
        ,
        c
    });
    /*!
 * VERSION: 1.19.0
 * DATE: 2016-07-14
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var n = function(t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++]))
                    ;
                return i
            }
              , r = function(t, e, i) {
                var n, r, o = t.cycle;
                for (n in o)
                    r = o[n],
                    t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                delete t.cycle
            }
              , o = function(t, e, n) {
                i.call(this, t, e, n),
                this._cycle = 0,
                this._yoyo = this.vars.yoyo === !0,
                this._repeat = this.vars.repeat || 0,
                this._repeatDelay = this.vars.repeatDelay || 0,
                this._dirty = !0,
                this.render = o.prototype.render
            }
              , s = 1e-10
              , a = i._internals
              , l = a.isSelector
              , u = a.isArray
              , c = o.prototype = i.to({}, .1, {})
              , h = [];
            o.version = "1.19.0",
            c.constructor = o,
            c.kill()._gc = !1,
            o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf,
            o.getTweensOf = i.getTweensOf,
            o.lagSmoothing = i.lagSmoothing,
            o.ticker = i.ticker,
            o.render = i.render,
            c.invalidate = function() {
                return this._yoyo = this.vars.yoyo === !0,
                this._repeat = this.vars.repeat || 0,
                this._repeatDelay = this.vars.repeatDelay || 0,
                this._uncache(!0),
                i.prototype.invalidate.call(this)
            }
            ,
            c.updateTo = function(t, e) {
                var n, r = this.ratio, o = this.vars.immediateRender || t.immediateRender;
                e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
                this._uncache(!1),
                this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                for (n in t)
                    this.vars[n] = t[n];
                if (this._initted || o)
                    if (e)
                        this._initted = !1,
                        o && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1),
                    this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                    this._time / this._duration > .998) {
                        var s = this._totalTime;
                        this.render(0, !0, !1),
                        this._initted = !1,
                        this.render(s, !0, !1)
                    } else if (this._initted = !1,
                    this._init(),
                    this._time > 0 || o)
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u; )
                            a = u.s + u.c,
                            u.c *= l,
                            u.s = a - u.c,
                            u = u._next;
                return this
            }
            ,
            c.render = function(t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, r, o, l, u, c, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._time, m = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime;
                if (t >= p - 1e-7 ? (this._totalTime = p,
                this._cycle = this._repeat,
                this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                this._reversed || (n = !0,
                r = "onComplete",
                i = i || this._timeline.autoRemoveChildren),
                0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (0 > y || 0 >= t && t >= -1e-7 || y === s && "isPause" !== this.data) && y !== t && (i = !0,
                y > s && (r = "onReverseComplete")),
                this._rawPrevTime = f = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== m || 0 === v && y > 0) && (r = "onReverseComplete",
                n = this._reversed),
                0 > t && (this._active = !1,
                0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0),
                this._rawPrevTime = f = !e || t || y === t ? t : s)),
                this._initted || (i = !0)) : (this._totalTime = this._time = t,
                0 !== this._repeat && (l = v + this._repeatDelay,
                this._cycle = this._totalTime / l >> 0,
                0 !== this._cycle && this._cycle === this._totalTime / l && t >= m && this._cycle--,
                this._time = this._totalTime - this._cycle * l,
                this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time),
                this._time > v ? this._time = v : this._time < 0 && (this._time = 0)),
                this._easeType ? (u = this._time / v,
                c = this._easeType,
                h = this._easePower,
                (1 === c || 3 === c && u >= .5) && (u = 1 - u),
                3 === c && (u *= 2),
                1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u),
                1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / v < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / v)),
                d === this._time && !i && g === this._cycle)
                    return void (m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = d,
                        this._totalTime = m,
                        this._rawPrevTime = y,
                        this._cycle = g,
                        a.lazyTweens.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1),
                this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0),
                0 === m && (2 === this._initted && t > 0 && this._init(),
                this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))),
                o = this._firstPT; o; )
                    o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                    o = o._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || (this._totalTime !== m || r) && this._callback("onUpdate")),
                this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[r] && this._callback(r),
                0 === v && this._rawPrevTime === s && f !== s && (this._rawPrevTime = 0))
            }
            ,
            o.to = function(t, e, i) {
                return new o(t,e,i)
            }
            ,
            o.from = function(t, e, i) {
                return i.runBackwards = !0,
                i.immediateRender = 0 != i.immediateRender,
                new o(t,e,i)
            }
            ,
            o.fromTo = function(t, e, i, n) {
                return n.startAt = i,
                n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                new o(t,e,n)
            }
            ,
            o.staggerTo = o.allTo = function(t, e, s, a, c, f, p) {
                a = a || 0;
                var d, m, g, v, y = 0, _ = [], x = function() {
                    s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments),
                    c.apply(p || s.callbackScope || this, f || h)
                }, w = s.cycle, T = s.startAt && s.startAt.cycle;
                for (u(t) || ("string" == typeof t && (t = i.selector(t) || t),
                l(t) && (t = n(t))),
                t = t || [],
                0 > a && (t = n(t),
                t.reverse(),
                a *= -1),
                d = t.length - 1,
                g = 0; d >= g; g++) {
                    m = {};
                    for (v in s)
                        m[v] = s[v];
                    if (w && (r(m, t, g),
                    null != m.duration && (e = m.duration,
                    delete m.duration)),
                    T) {
                        T = m.startAt = {};
                        for (v in s.startAt)
                            T[v] = s.startAt[v];
                        r(m.startAt, t, g)
                    }
                    m.delay = y + (m.delay || 0),
                    g === d && c && (m.onComplete = x),
                    _[g] = new o(t[g],e,m),
                    y += a
                }
                return _
            }
            ,
            o.staggerFrom = o.allFrom = function(t, e, i, n, r, s, a) {
                return i.runBackwards = !0,
                i.immediateRender = 0 != i.immediateRender,
                o.staggerTo(t, e, i, n, r, s, a)
            }
            ,
            o.staggerFromTo = o.allFromTo = function(t, e, i, n, r, s, a, l) {
                return n.startAt = i,
                n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                o.staggerTo(t, e, n, r, s, a, l)
            }
            ,
            o.delayedCall = function(t, e, i, n, r) {
                return new o(e,0,{
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }
            ,
            o.set = function(t, e) {
                return new o(t,0,e)
            }
            ,
            o.isTweening = function(t) {
                return i.getTweensOf(t, !0).length > 0
            }
            ;
            var f = function(t, e) {
                for (var n = [], r = 0, o = t._first; o; )
                    o instanceof i ? n[r++] = o : (e && (n[r++] = o),
                    n = n.concat(f(o, e)),
                    r = n.length),
                    o = o._next;
                return n
            }
              , p = o.getAllTweens = function(e) {
                return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
            }
            ;
            o.killAll = function(t, i, n, r) {
                null == i && (i = !0),
                null == n && (n = !0);
                var o, s, a, l = p(0 != r), u = l.length, c = i && n && r;
                for (a = 0; u > a; a++)
                    s = l[a],
                    (c || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
            }
            ,
            o.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var r, s, c, h, f, p = a.tweenLookup;
                    if ("string" == typeof t && (t = i.selector(t) || t),
                    l(t) && (t = n(t)),
                    u(t))
                        for (h = t.length; --h > -1; )
                            o.killChildTweensOf(t[h], e);
                    else {
                        r = [];
                        for (c in p)
                            for (s = p[c].target.parentNode; s; )
                                s === t && (r = r.concat(p[c].tweens)),
                                s = s.parentNode;
                        for (f = r.length,
                        h = 0; f > h; h++)
                            e && r[h].totalTime(r[h].totalDuration()),
                            r[h]._enabled(!1, !1)
                    }
                }
            }
            ;
            var d = function(t, i, n, r) {
                i = i !== !1,
                n = n !== !1,
                r = r !== !1;
                for (var o, s, a = p(r), l = i && n && r, u = a.length; --u > -1; )
                    s = a[u],
                    (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
            };
            return o.pauseAll = function(t, e, i) {
                d(!0, t, e, i)
            }
            ,
            o.resumeAll = function(t, e, i) {
                d(!1, t, e, i)
            }
            ,
            o.globalTimeScale = function(e) {
                var n = t._rootTimeline
                  , r = i.ticker.time;
                return arguments.length ? (e = e || s,
                n._startTime = r - (r - n._startTime) * n._timeScale / e,
                n = t._rootFramesTimeline,
                r = i.ticker.frame,
                n._startTime = r - (r - n._startTime) * n._timeScale / e,
                n._timeScale = t._rootTimeline._timeScale = e,
                e) : n._timeScale
            }
            ,
            c.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }
            ,
            c.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }
            ,
            c.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e)) : this._time
            }
            ,
            c.duration = function(e) {
                return arguments.length ? t.prototype.duration.call(this, e) : this._duration
            }
            ,
            c.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
                this._dirty = !1),
                this._totalDuration)
            }
            ,
            c.repeat = function(t) {
                return arguments.length ? (this._repeat = t,
                this._uncache(!0)) : this._repeat
            }
            ,
            c.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t,
                this._uncache(!0)) : this._repeatDelay
            }
            ,
            c.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t,
                this) : this._yoyo
            }
            ,
            o
        }, !0),
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var n = function(t) {
                e.call(this, t),
                this._labels = {},
                this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
                this.smoothChildTiming = this.vars.smoothChildTiming === !0,
                this._sortChildren = !0,
                this._onUpdate = this.vars.onUpdate;
                var i, n, r = this.vars;
                for (n in r)
                    i = r[n],
                    l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
            }
              , r = 1e-10
              , o = i._internals
              , s = n._internals = {}
              , a = o.isSelector
              , l = o.isArray
              , u = o.lazyTweens
              , c = o.lazyRender
              , h = _gsScope._gsDefine.globals
              , f = function(t) {
                var e, i = {};
                for (e in t)
                    i[e] = t[e];
                return i
            }
              , p = function(t, e, i) {
                var n, r, o = t.cycle;
                for (n in o)
                    r = o[n],
                    t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                delete t.cycle
            }
              , d = s.pauseCallback = function() {}
              , m = function(t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++]))
                    ;
                return i
            }
              , g = n.prototype = new e;
            return n.version = "1.19.0",
            g.constructor = n,
            g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
            g.to = function(t, e, n, r) {
                var o = n.repeat && h.TweenMax || i;
                return e ? this.add(new o(t,e,n), r) : this.set(t, n, r)
            }
            ,
            g.from = function(t, e, n, r) {
                return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
            }
            ,
            g.fromTo = function(t, e, n, r, o) {
                var s = r.repeat && h.TweenMax || i;
                return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
            }
            ,
            g.staggerTo = function(t, e, r, o, s, l, u, c) {
                var h, d, g = new n({
                    onComplete: l,
                    onCompleteParams: u,
                    callbackScope: c,
                    smoothChildTiming: this.smoothChildTiming
                }), v = r.cycle;
                for ("string" == typeof t && (t = i.selector(t) || t),
                t = t || [],
                a(t) && (t = m(t)),
                o = o || 0,
                0 > o && (t = m(t),
                t.reverse(),
                o *= -1),
                d = 0; d < t.length; d++)
                    h = f(r),
                    h.startAt && (h.startAt = f(h.startAt),
                    h.startAt.cycle && p(h.startAt, t, d)),
                    v && (p(h, t, d),
                    null != h.duration && (e = h.duration,
                    delete h.duration)),
                    g.to(t[d], e, h, d * o);
                return this.add(g, s)
            }
            ,
            g.staggerFrom = function(t, e, i, n, r, o, s, a) {
                return i.immediateRender = 0 != i.immediateRender,
                i.runBackwards = !0,
                this.staggerTo(t, e, i, n, r, o, s, a)
            }
            ,
            g.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
                return n.startAt = i,
                n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                this.staggerTo(t, e, n, r, o, s, a, l)
            }
            ,
            g.call = function(t, e, n, r) {
                return this.add(i.delayedCall(0, t, e, n), r)
            }
            ,
            g.set = function(t, e, n) {
                return n = this._parseTimeOrLabel(n, 0, !0),
                null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
                this.add(new i(t,0,e), n)
            }
            ,
            n.exportRoot = function(t, e) {
                t = t || {},
                null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var r, o, s = new n(t), a = s._timeline;
                for (null == e && (e = !0),
                a._remove(s, !0),
                s._startTime = 0,
                s._rawPrevTime = s._time = s._totalTime = a._time,
                r = a._first; r; )
                    o = r._next,
                    e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay),
                    r = o;
                return a.add(s, 0),
                s
            }
            ,
            g.add = function(r, o, s, a) {
                var u, c, h, f, p, d;
                if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)),
                !(r instanceof t)) {
                    if (r instanceof Array || r && r.push && l(r)) {
                        for (s = s || "normal",
                        a = a || 0,
                        u = o,
                        c = r.length,
                        h = 0; c > h; h++)
                            l(f = r[h]) && (f = new n({
                                tweens: f
                            })),
                            this.add(f, u),
                            "string" != typeof f && "function" != typeof f && ("sequence" === s ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())),
                            u += a;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r)
                        return this.addLabel(r, o);
                    if ("function" != typeof r)
                        throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (e.prototype.add.call(this, r, o),
                (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (p = this,
                    d = p.rawTime() > r._startTime; p._timeline; )
                        d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1),
                        p = p._timeline;
                return this
            }
            ,
            g.remove = function(e) {
                if (e instanceof t) {
                    this._remove(e, !1);
                    var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                    return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                    this
                }
                if (e instanceof Array || e && e.push && l(e)) {
                    for (var n = e.length; --n > -1; )
                        this.remove(e[n]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }
            ,
            g._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var n = this._last;
                return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(),
                this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
                this
            }
            ,
            g.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }
            ,
            g.insert = g.insertMultiple = function(t, e, i, n) {
                return this.add(t, e || 0, i, n)
            }
            ,
            g.appendMultiple = function(t, e, i, n) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }
            ,
            g.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e),
                this
            }
            ,
            g.addPause = function(t, e, n, r) {
                var o = i.delayedCall(0, d, n, r || this);
                return o.vars.onComplete = o.vars.onReverseComplete = e,
                o.data = "isPause",
                this._hasPause = !0,
                this.add(o, t)
            }
            ,
            g.removeLabel = function(t) {
                return delete this._labels[t],
                this
            }
            ,
            g.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }
            ,
            g._parseTimeOrLabel = function(e, i, n, r) {
                var o;
                if (r instanceof t && r.timeline === this)
                    this.remove(r);
                else if (r && (r instanceof Array || r.push && l(r)))
                    for (o = r.length; --o > -1; )
                        r[o]instanceof t && r[o].timeline === this && this.remove(r[o]);
                if ("string" == typeof i)
                    return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                if (i = i || 0,
                "string" != typeof e || !isNaN(e) && null == this._labels[e])
                    null == e && (e = this.duration());
                else {
                    if (o = e.indexOf("="),
                    -1 === o)
                        return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)),
                    e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
                }
                return Number(e) + i
            }
            ,
            g.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }
            ,
            g.stop = function() {
                return this.paused(!0)
            }
            ,
            g.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }
            ,
            g.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }
            ,
            g.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, o, s, a, l, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._time, m = this._startTime, g = this._timeScale, v = this._paused;
                if (t >= p - 1e-7)
                    this._totalTime = this._time = p,
                    this._reversed || this._hasPausedChild() || (o = !0,
                    a = "onComplete",
                    l = !!this._timeline.autoRemoveChildren,
                    0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0,
                    this._rawPrevTime > r && (a = "onReverseComplete"))),
                    this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                    t = p + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0,
                    (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete",
                    o = this._reversed),
                    0 > t)
                        this._active = !1,
                        this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0,
                        a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
                        this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                        0 === t && o)
                            for (n = this._first; n && 0 === n._startTime; )
                                n._duration || (o = !1),
                                n = n._next;
                        t = 0,
                        this._initted || (l = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (t >= d)
                            for (n = this._first; n && n._startTime <= t && !h; )
                                n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n),
                                n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !h; )
                                n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n),
                                n = n._prev;
                        h && (this._time = t = h._startTime,
                        this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== d && this._first || i || l || h) {
                    if (this._initted || (this._initted = !0),
                    this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0),
                    0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
                    f = this._time,
                    f >= d)
                        for (n = this._first; n && (s = n._next,
                        f === this._time && (!this._paused || v)); )
                            (n._active || n._startTime <= f && !n._paused && !n._gc) && (h === n && this.pause(),
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                            n = s;
                    else
                        for (n = this._last; n && (s = n._prev,
                        f === this._time && (!this._paused || v)); ) {
                            if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                if (h === n) {
                                    for (h = n._prev; h && h.endTime() > this._time; )
                                        h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i),
                                        h = h._prev;
                                    h = null,
                                    this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = s
                        }
                    this._onUpdate && (e || (u.length && c(),
                    this._callback("onUpdate"))),
                    a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (u.length && c(),
                    this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    this._active = !1),
                    !e && this.vars[a] && this._callback(a)))
                }
            }
            ,
            g._hasPausedChild = function() {
                for (var t = this._first; t; ) {
                    if (t._paused || t instanceof n && t._hasPausedChild())
                        return !0;
                    t = t._next
                }
                return !1
            }
            ,
            g.getChildren = function(t, e, n, r) {
                r = r || -9999999999;
                for (var o = [], s = this._first, a = 0; s; )
                    s._startTime < r || (s instanceof i ? e !== !1 && (o[a++] = s) : (n !== !1 && (o[a++] = s),
                    t !== !1 && (o = o.concat(s.getChildren(!0, e, n)),
                    a = o.length))),
                    s = s._next;
                return o
            }
            ,
            g.getTweensOf = function(t, e) {
                var n, r, o = this._gc, s = [], a = 0;
                for (o && this._enabled(!0, !0),
                n = i.getTweensOf(t),
                r = n.length; --r > -1; )
                    (n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
                return o && this._enabled(!1, !0),
                s
            }
            ,
            g.recent = function() {
                return this._recent
            }
            ,
            g._contains = function(t) {
                for (var e = t.timeline; e; ) {
                    if (e === this)
                        return !0;
                    e = e.timeline
                }
                return !1
            }
            ,
            g.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var n, r = this._first, o = this._labels; r; )
                    r._startTime >= i && (r._startTime += t),
                    r = r._next;
                if (e)
                    for (n in o)
                        o[n] >= i && (o[n] += t);
                return this._uncache(!0)
            }
            ,
            g._kill = function(t, e) {
                if (!t && !e)
                    return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; )
                    i[n]._kill(t, e) && (r = !0);
                return r
            }
            ,
            g.clear = function(t) {
                var e = this.getChildren(!1, !0, !0)
                  , i = e.length;
                for (this._time = this._totalTime = 0; --i > -1; )
                    e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}),
                this._uncache(!0)
            }
            ,
            g.invalidate = function() {
                for (var e = this._first; e; )
                    e.invalidate(),
                    e = e._next;
                return t.prototype.invalidate.call(this)
            }
            ,
            g._enabled = function(t, i) {
                if (t === this._gc)
                    for (var n = this._first; n; )
                        n._enabled(t, !0),
                        n = n._next;
                return e.prototype._enabled.call(this, t, i)
            }
            ,
            g.totalTime = function(e, i, n) {
                this._forcingPlayhead = !0;
                var r = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1,
                r
            }
            ,
            g.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
                this) : (this._dirty && this.totalDuration(),
                this._duration)
            }
            ,
            g.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, n = 0, r = this._last, o = 999999999999; r; )
                            e = r._prev,
                            r._dirty && r.totalDuration(),
                            r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime,
                            r._startTime < 0 && !r._paused && (n -= r._startTime,
                            this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale),
                            this.shiftChildren(-r._startTime, !1, -9999999999),
                            o = 0),
                            i = r._startTime + r._totalDuration / r._timeScale,
                            i > n && (n = i),
                            r = e;
                        this._duration = this._totalDuration = n,
                        this._dirty = !1
                    }
                    return this._totalDuration
                }
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }
            ,
            g.paused = function(e) {
                if (!e)
                    for (var i = this._first, n = this._time; i; )
                        i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0),
                        i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }
            ,
            g.usesFrames = function() {
                for (var e = this._timeline; e._timeline; )
                    e = e._timeline;
                return e === t._rootFramesTimeline
            }
            ,
            g.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }
            ,
            n
        }, !0),
        _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
            var n = function(e) {
                t.call(this, e),
                this._repeat = this.vars.repeat || 0,
                this._repeatDelay = this.vars.repeatDelay || 0,
                this._cycle = 0,
                this._yoyo = this.vars.yoyo === !0,
                this._dirty = !0
            }
              , r = 1e-10
              , o = e._internals
              , s = o.lazyTweens
              , a = o.lazyRender
              , l = _gsScope._gsDefine.globals
              , u = new i(null,null,1,0)
              , c = n.prototype = new t;
            return c.constructor = n,
            c.kill()._gc = !1,
            n.version = "1.19.0",
            c.invalidate = function() {
                return this._yoyo = this.vars.yoyo === !0,
                this._repeat = this.vars.repeat || 0,
                this._repeatDelay = this.vars.repeatDelay || 0,
                this._uncache(!0),
                t.prototype.invalidate.call(this)
            }
            ,
            c.addCallback = function(t, i, n, r) {
                return this.add(e.delayedCall(0, t, n, r), i)
            }
            ,
            c.removeCallback = function(t, e) {
                if (t)
                    if (null == e)
                        this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1; )
                            i[n]._startTime === r && i[n]._enabled(!1, !1);
                return this
            }
            ,
            c.removePause = function(e) {
                return this.removeCallback(t._internals.pauseCallback, e)
            }
            ,
            c.tweenTo = function(t, i) {
                i = i || {};
                var n, r, o, s = {
                    ease: u,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                }, a = i.repeat && l.TweenMax || e;
                for (r in i)
                    s[r] = i[r];
                return s.time = this._parseTimeOrLabel(t),
                n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001,
                o = new a(this,n,s),
                s.onStart = function() {
                    o.target.paused(!0),
                    o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale),
                    i.onStart && o._callback("onStart")
                }
                ,
                o
            }
            ,
            c.tweenFromTo = function(t, e, i) {
                i = i || {},
                t = this._parseTimeOrLabel(t),
                i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                },
                i.immediateRender = i.immediateRender !== !1;
                var n = this.tweenTo(e, i);
                return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
            }
            ,
            c.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, o, l, u, c, h, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration, m = this._duration, g = this._time, v = this._totalTime, y = this._startTime, _ = this._timeScale, x = this._rawPrevTime, w = this._paused, T = this._cycle;
                if (t >= d - 1e-7)
                    this._locked || (this._totalTime = d,
                    this._cycle = this._repeat),
                    this._reversed || this._hasPausedChild() || (o = !0,
                    u = "onComplete",
                    c = !!this._timeline.autoRemoveChildren,
                    0 === this._duration && (0 >= t && t >= -1e-7 || 0 > x || x === r) && x !== t && this._first && (c = !0,
                    x > r && (u = "onReverseComplete"))),
                    this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                    this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m,
                    t = m + 1e-4);
                else if (1e-7 > t)
                    if (this._locked || (this._totalTime = this._cycle = 0),
                    this._time = 0,
                    (0 !== g || 0 === m && x !== r && (x > 0 || 0 > t && x >= 0) && !this._locked) && (u = "onReverseComplete",
                    o = this._reversed),
                    0 > t)
                        this._active = !1,
                        this._timeline.autoRemoveChildren && this._reversed ? (c = o = !0,
                        u = "onReverseComplete") : x >= 0 && this._first && (c = !0),
                        this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r,
                        0 === t && o)
                            for (n = this._first; n && 0 === n._startTime; )
                                n._duration || (o = !1),
                                n = n._next;
                        t = 0,
                        this._initted || (c = !0)
                    }
                else if (0 === m && 0 > x && (c = !0),
                this._time = this._rawPrevTime = t,
                this._locked || (this._totalTime = t,
                0 !== this._repeat && (h = m + this._repeatDelay,
                this._cycle = this._totalTime / h >> 0,
                0 !== this._cycle && this._cycle === this._totalTime / h && t >= v && this._cycle--,
                this._time = this._totalTime - this._cycle * h,
                this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time),
                this._time > m ? (this._time = m,
                t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)),
                this._hasPause && !this._forcingPlayhead && !e) {
                    if (t = this._time,
                    t >= g)
                        for (n = this._first; n && n._startTime <= t && !f; )
                            n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n),
                            n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !f; )
                            n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n),
                            n = n._prev;
                    f && (this._time = t = f._startTime,
                    this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== T && !this._locked) {
                    var b = this._yoyo && 0 !== (1 & T)
                      , S = b === (this._yoyo && 0 !== (1 & this._cycle))
                      , C = this._totalTime
                      , k = this._cycle
                      , E = this._rawPrevTime
                      , O = this._time;
                    if (this._totalTime = T * m,
                    this._cycle < T ? b = !b : this._totalTime += m,
                    this._time = g,
                    this._rawPrevTime = 0 === m ? x - 1e-4 : x,
                    this._cycle = T,
                    this._locked = !0,
                    g = b ? 0 : m,
                    this.render(g, e, 0 === m),
                    e || this._gc || this.vars.onRepeat && this._callback("onRepeat"),
                    g !== this._time)
                        return;
                    if (S && (g = b ? m + 1e-4 : -1e-4,
                    this.render(g, !0, !1)),
                    this._locked = !1,
                    this._paused && !w)
                        return;
                    this._time = O,
                    this._totalTime = C,
                    this._cycle = k,
                    this._rawPrevTime = E
                }
                if (!(this._time !== g && this._first || i || c || f))
                    return void (v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0),
                0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
                p = this._time,
                p >= g)
                    for (n = this._first; n && (l = n._next,
                    p === this._time && (!this._paused || w)); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = l;
                else
                    for (n = this._last; n && (l = n._prev,
                    p === this._time && (!this._paused || w)); ) {
                        if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                            if (f === n) {
                                for (f = n._prev; f && f.endTime() > this._time; )
                                    f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i),
                                    f = f._prev;
                                f = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = l
                    }
                this._onUpdate && (e || (s.length && a(),
                this._callback("onUpdate"))),
                u && (this._locked || this._gc || (y === this._startTime || _ !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (o && (s.length && a(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[u] && this._callback(u)))
            }
            ,
            c.getActive = function(t, e, i) {
                null == t && (t = !0),
                null == e && (e = !0),
                null == i && (i = !1);
                var n, r, o = [], s = this.getChildren(t, e, i), a = 0, l = s.length;
                for (n = 0; l > n; n++)
                    r = s[n],
                    r.isActive() && (o[a++] = r);
                return o
            }
            ,
            c.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(), n = i.length;
                for (e = 0; n > e; e++)
                    if (i[e].time > t)
                        return i[e].name;
                return null
            }
            ,
            c.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                    if (e[i].time < t)
                        return e[i].name;
                return null
            }
            ,
            c.getLabelsArray = function() {
                var t, e = [], i = 0;
                for (t in this._labels)
                    e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }),
                e
            }
            ,
            c.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }
            ,
            c.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }
            ,
            c.totalDuration = function(e) {
                return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
                this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                this._totalDuration)
            }
            ,
            c.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e)) : this._time
            }
            ,
            c.repeat = function(t) {
                return arguments.length ? (this._repeat = t,
                this._uncache(!0)) : this._repeat
            }
            ,
            c.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t,
                this._uncache(!0)) : this._repeatDelay
            }
            ,
            c.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t,
                this) : this._yoyo
            }
            ,
            c.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }
            ,
            n
        }, !0),
        function() {
            var t = 180 / Math.PI
              , e = []
              , i = []
              , n = []
              , r = {}
              , o = _gsScope._gsDefine.globals
              , s = function(t, e, i, n) {
                i === n && (i = n - (n - e) / 1e6),
                t === e && (e = t + (i - t) / 1e6),
                this.a = t,
                this.b = e,
                this.c = i,
                this.d = n,
                this.da = n - t,
                this.ca = i - t,
                this.ba = e - t
            }
              , a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
              , l = function(t, e, i, n) {
                var r = {
                    a: t
                }
                  , o = {}
                  , s = {}
                  , a = {
                    c: n
                }
                  , l = (t + e) / 2
                  , u = (e + i) / 2
                  , c = (i + n) / 2
                  , h = (l + u) / 2
                  , f = (u + c) / 2
                  , p = (f - h) / 8;
                return r.b = l + (t - l) / 4,
                o.b = h + p,
                r.c = o.a = (r.b + o.b) / 2,
                o.c = s.a = (h + f) / 2,
                s.b = f - p,
                a.b = c + (n - c) / 4,
                s.c = a.a = (s.b + a.b) / 2,
                [r, o, s, a]
            }
              , u = function(t, r, o, s, a) {
                var u, c, h, f, p, d, m, g, v, y, _, x, w, T = t.length - 1, b = 0, S = t[0].a;
                for (u = 0; T > u; u++)
                    p = t[b],
                    c = p.a,
                    h = p.d,
                    f = t[b + 1].d,
                    a ? (_ = e[u],
                    x = i[u],
                    w = (x + _) * r * .25 / (s ? .5 : n[u] || .5),
                    d = h - (h - c) * (s ? .5 * r : 0 !== _ ? w / _ : 0),
                    m = h + (f - h) * (s ? .5 * r : 0 !== x ? w / x : 0),
                    g = h - (d + ((m - d) * (3 * _ / (_ + x) + .5) / 4 || 0))) : (d = h - (h - c) * r * .5,
                    m = h + (f - h) * r * .5,
                    g = h - (d + m) / 2),
                    d += g,
                    m += g,
                    p.c = v = d,
                    0 !== u ? p.b = S : p.b = S = p.a + .6 * (p.c - p.a),
                    p.da = h - c,
                    p.ca = v - c,
                    p.ba = S - c,
                    o ? (y = l(c, S, v, h),
                    t.splice(b, 1, y[0], y[1], y[2], y[3]),
                    b += 4) : b++,
                    S = m;
                p = t[b],
                p.b = S,
                p.c = S + .4 * (p.d - S),
                p.da = p.d - p.a,
                p.ca = p.c - p.a,
                p.ba = S - p.a,
                o && (y = l(p.a, S, p.c, p.d),
                t.splice(b, 1, y[0], y[1], y[2], y[3]))
            }
              , c = function(t, n, r, o) {
                var a, l, u, c, h, f, p = [];
                if (o)
                    for (t = [o].concat(t),
                    l = t.length; --l > -1; )
                        "string" == typeof (f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
                if (a = t.length - 2,
                0 > a)
                    return p[0] = new s(t[0][n],0,0,t[-1 > a ? 0 : 1][n]),
                    p;
                for (l = 0; a > l; l++)
                    u = t[l][n],
                    c = t[l + 1][n],
                    p[l] = new s(u,0,0,c),
                    r && (h = t[l + 2][n],
                    e[l] = (e[l] || 0) + (c - u) * (c - u),
                    i[l] = (i[l] || 0) + (h - c) * (h - c));
                return p[l] = new s(t[l][n],0,0,t[l + 1][n]),
                p
            }
              , h = function(t, o, s, l, h, f) {
                var p, d, m, g, v, y, _, x, w = {}, T = [], b = f || t[0];
                h = "string" == typeof h ? "," + h + "," : a,
                null == o && (o = 1);
                for (d in t[0])
                    T.push(d);
                if (t.length > 1) {
                    for (x = t[t.length - 1],
                    _ = !0,
                    p = T.length; --p > -1; )
                        if (d = T[p],
                        Math.abs(b[d] - x[d]) > .05) {
                            _ = !1;
                            break
                        }
                    _ && (t = t.concat(),
                    f && t.unshift(f),
                    t.push(t[1]),
                    f = t[t.length - 3])
                }
                for (e.length = i.length = n.length = 0,
                p = T.length; --p > -1; )
                    d = T[p],
                    r[d] = -1 !== h.indexOf("," + d + ","),
                    w[d] = c(t, d, r[d], f);
                for (p = e.length; --p > -1; )
                    e[p] = Math.sqrt(e[p]),
                    i[p] = Math.sqrt(i[p]);
                if (!l) {
                    for (p = T.length; --p > -1; )
                        if (r[d])
                            for (m = w[T[p]],
                            y = m.length - 1,
                            g = 0; y > g; g++)
                                v = m[g + 1].da / i[g] + m[g].da / e[g] || 0,
                                n[g] = (n[g] || 0) + v * v;
                    for (p = n.length; --p > -1; )
                        n[p] = Math.sqrt(n[p])
                }
                for (p = T.length,
                g = s ? 4 : 1; --p > -1; )
                    d = T[p],
                    m = w[d],
                    u(m, o, s, l, r[d]),
                    _ && (m.splice(0, g),
                    m.splice(m.length - g, g));
                return w
            }
              , f = function(t, e, i) {
                e = e || "soft";
                var n, r, o, a, l, u, c, h, f, p, d, m = {}, g = "cubic" === e ? 3 : 2, v = "soft" === e, y = [];
                if (v && i && (t = [i].concat(t)),
                null == t || t.length < g + 1)
                    throw "invalid Bezier data";
                for (f in t[0])
                    y.push(f);
                for (u = y.length; --u > -1; ) {
                    for (f = y[u],
                    m[f] = l = [],
                    p = 0,
                    h = t.length,
                    c = 0; h > c; c++)
                        n = null == i ? t[c][f] : "string" == typeof (d = t[c][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d),
                        v && c > 1 && h - 1 > c && (l[p++] = (n + l[p - 2]) / 2),
                        l[p++] = n;
                    for (h = p - g + 1,
                    p = 0,
                    c = 0; h > c; c += g)
                        n = l[c],
                        r = l[c + 1],
                        o = l[c + 2],
                        a = 2 === g ? 0 : l[c + 3],
                        l[p++] = d = 3 === g ? new s(n,r,o,a) : new s(n,(2 * r + n) / 3,(2 * r + o) / 3,o);
                    l.length = p
                }
                return m
            }
              , p = function(t, e, i) {
                for (var n, r, o, s, a, l, u, c, h, f, p, d = 1 / i, m = t.length; --m > -1; )
                    for (f = t[m],
                    o = f.a,
                    s = f.d - o,
                    a = f.c - o,
                    l = f.b - o,
                    n = r = 0,
                    c = 1; i >= c; c++)
                        u = d * c,
                        h = 1 - u,
                        n = r - (r = (u * u * s + 3 * h * (u * a + h * l)) * u),
                        p = m * i + c - 1,
                        e[p] = (e[p] || 0) + n * n
            }
              , d = function(t, e) {
                e = e >> 0 || 6;
                var i, n, r, o, s = [], a = [], l = 0, u = 0, c = e - 1, h = [], f = [];
                for (i in t)
                    p(t[i], s, e);
                for (r = s.length,
                n = 0; r > n; n++)
                    l += Math.sqrt(s[n]),
                    o = n % e,
                    f[o] = l,
                    o === c && (u += l,
                    o = n / e >> 0,
                    h[o] = f,
                    a[o] = u,
                    l = 0,
                    f = []);
                return {
                    length: u,
                    lengths: a,
                    segments: h
                }
            }
              , m = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.7",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t,
                    e instanceof Array && (e = {
                        values: e
                    }),
                    this._func = {},
                    this._mod = {},
                    this._props = [],
                    this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var n, r, o, s, a, l = e.values || [], u = {}, c = l[0], p = e.autoRotate || i.vars.orientToBezier;
                    this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]] : null;
                    for (n in c)
                        this._props.push(n);
                    for (o = this._props.length; --o > -1; )
                        n = this._props[o],
                        this._overwriteProps.push(n),
                        r = this._func[n] = "function" == typeof t[n],
                        u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                        a || u[n] !== l[0][n] && (a = u);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : f(l, e.type, u),
                    this._segCount = this._beziers[n].length,
                    this._timeRes) {
                        var m = d(this._beziers, this._timeRes);
                        this._length = m.length,
                        this._lengths = m.lengths,
                        this._segments = m.segments,
                        this._l1 = this._li = this._s1 = this._si = 0,
                        this._l2 = this._lengths[0],
                        this._curSeg = this._segments[0],
                        this._s2 = this._curSeg[0],
                        this._prec = 1 / this._curSeg.length
                    }
                    if (p = this._autoRotate)
                        for (this._initialRotations = [],
                        p[0]instanceof Array || (this._autoRotate = p = [p]),
                        o = p.length; --o > -1; ) {
                            for (s = 0; 3 > s; s++)
                                n = p[o][s],
                                this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                            n = p[o][2],
                            this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0,
                            this._overwriteProps.push(n)
                        }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0,
                    !0
                },
                set: function(e) {
                    var i, n, r, o, s, a, l, u, c, h, f = this._segCount, p = this._func, d = this._target, m = e !== this._startRatio;
                    if (this._timeRes) {
                        if (c = this._lengths,
                        h = this._curSeg,
                        e *= this._length,
                        r = this._li,
                        e > this._l2 && f - 1 > r) {
                            for (u = f - 1; u > r && (this._l2 = c[++r]) <= e; )
                                ;
                            this._l1 = c[r - 1],
                            this._li = r,
                            this._curSeg = h = this._segments[r],
                            this._s2 = h[this._s1 = this._si = 0]
                        } else if (e < this._l1 && r > 0) {
                            for (; r > 0 && (this._l1 = c[--r]) >= e; )
                                ;
                            0 === r && e < this._l1 ? this._l1 = 0 : r++,
                            this._l2 = c[r],
                            this._li = r,
                            this._curSeg = h = this._segments[r],
                            this._s1 = h[(this._si = h.length - 1) - 1] || 0,
                            this._s2 = h[this._si]
                        }
                        if (i = r,
                        e -= this._l1,
                        r = this._si,
                        e > this._s2 && r < h.length - 1) {
                            for (u = h.length - 1; u > r && (this._s2 = h[++r]) <= e; )
                                ;
                            this._s1 = h[r - 1],
                            this._si = r
                        } else if (e < this._s1 && r > 0) {
                            for (; r > 0 && (this._s1 = h[--r]) >= e; )
                                ;
                            0 === r && e < this._s1 ? this._s1 = 0 : r++,
                            this._s2 = h[r],
                            this._si = r
                        }
                        a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else
                        i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0,
                        a = (e - i * (1 / f)) * f;
                    for (n = 1 - a,
                    r = this._props.length; --r > -1; )
                        o = this._props[r],
                        s = this._beziers[o][i],
                        l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a,
                        this._mod[o] && (l = this._mod[o](l, d)),
                        p[o] ? d[o](l) : d[o] = l;
                    if (this._autoRotate) {
                        var g, v, y, _, x, w, T, b = this._autoRotate;
                        for (r = b.length; --r > -1; )
                            o = b[r][2],
                            w = b[r][3] || 0,
                            T = b[r][4] === !0 ? 1 : t,
                            s = this._beziers[b[r][0]],
                            g = this._beziers[b[r][1]],
                            s && g && (s = s[i],
                            g = g[i],
                            v = s.a + (s.b - s.a) * a,
                            _ = s.b + (s.c - s.b) * a,
                            v += (_ - v) * a,
                            _ += (s.c + (s.d - s.c) * a - _) * a,
                            y = g.a + (g.b - g.a) * a,
                            x = g.b + (g.c - g.b) * a,
                            y += (x - y) * a,
                            x += (g.c + (g.d - g.c) * a - x) * a,
                            l = m ? Math.atan2(x - y, _ - v) * T + w : this._initialRotations[r],
                            this._mod[o] && (l = this._mod[o](l, d)),
                            p[o] ? d[o](l) : d[o] = l)
                    }
                }
            })
              , g = m.prototype;
            m.bezierThrough = h,
            m.cubicToQuadratic = l,
            m._autoCSS = !0,
            m.quadraticToCubic = function(t, e, i) {
                return new s(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
            }
            ,
            m._cssRegister = function() {
                var t = o.CSSPlugin;
                if (t) {
                    var e = t._internals
                      , i = e._parseToProxy
                      , n = e._setPluginRatio
                      , r = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function(t, e, o, s, a, l) {
                            e instanceof Array && (e = {
                                values: e
                            }),
                            l = new m;
                            var u, c, h, f = e.values, p = f.length - 1, d = [], g = {};
                            if (0 > p)
                                return a;
                            for (u = 0; p >= u; u++)
                                h = i(t, f[u], s, a, l, p !== u),
                                d[u] = h.end;
                            for (c in e)
                                g[c] = e[c];
                            return g.values = d,
                            a = new r(t,"bezier",0,0,h.pt,2),
                            a.data = h,
                            a.plugin = l,
                            a.setRatio = n,
                            0 === g.autoRotate && (g.autoRotate = !0),
                            !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate),
                            g.autoRotate = null != h.end.left ? [["left", "top", "rotation", u, !1]] : null != h.end.x && [["x", "y", "rotation", u, !1]]),
                            g.autoRotate && (s._transform || s._enableTransforms(!1),
                            h.autoRotate = s._target._gsTransform,
                            h.proxy.rotation = h.autoRotate.rotation || 0,
                            s._overwriteProps.push("rotation")),
                            l._onInitTween(h.proxy, g, s._tween),
                            a
                        }
                    })
                }
            }
            ,
            g._mod = function(t) {
                for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
                    e = t[i[n]],
                    e && "function" == typeof e && (this._mod[i[n]] = e)
            }
            ,
            g._kill = function(t) {
                var e, i, n = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e],
                        delete this._func[e],
                        i = n.length; --i > -1; )
                            n[i] === e && n.splice(i, 1);
                if (n = this._autoRotate)
                    for (i = n.length; --i > -1; )
                        t[n[i][2]] && n.splice(i, 1);
                return this._super._kill.call(this, t)
            }
        }(),
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, n, r, o, s = function() {
                t.call(this, "css"),
                this._overwriteProps.length = 0,
                this.setRatio = s.prototype.setRatio
            }, a = _gsScope._gsDefine.globals, l = {}, u = s.prototype = new t("css");
            u.constructor = s,
            s.version = "1.19.0",
            s.API = 2,
            s.defaultTransformPerspective = 0,
            s.defaultSkewType = "compensated",
            s.defaultSmoothOrigin = !0,
            u = "px",
            s.suffixMap = {
                top: u,
                right: u,
                bottom: u,
                left: u,
                width: u,
                height: u,
                fontSize: u,
                padding: u,
                margin: u,
                perspective: u,
                lineHeight: ""
            };
            var c, h, f, p, d, m, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g, _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, T = /(?:\d|\-|\+|=|#|\.)*/g, b = /opacity *= *([^)]*)/i, S = /opacity:([^;]*)/i, C = /alpha\(opacity *=.+?\)/i, k = /^(rgb|hsl)/, E = /([A-Z])/g, O = /-([a-z])/gi, P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, M = function(t, e) {
                return e.toUpperCase()
            }, A = /(?:Left|Right|Width)/i, L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, I = /,(?=[^\)]*(?:\(|$))/gi, R = /[\s,\(]/i, N = Math.PI / 180, F = 180 / Math.PI, z = {}, j = document, q = function(t) {
                return j.createElementNS ? j.createElementNS("http://www.w3.org/1999/xhtml", t) : j.createElement(t)
            }, W = q("div"), B = q("img"), H = s._internals = {
                _specialProps: l
            }, X = navigator.userAgent, Y = function() {
                var t = X.indexOf("Android")
                  , e = q("a");
                return f = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || Number(X.substr(t + 8, 1)) > 3),
                d = f && Number(X.substr(X.indexOf("Version/") + 8, 1)) < 6,
                p = -1 !== X.indexOf("Firefox"),
                (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (m = parseFloat(RegExp.$1)),
                !!e && (e.style.cssText = "top:1px;opacity:.55;",
                /^0.55/.test(e.style.opacity))
            }(), U = function(t) {
                return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, V = function(t) {
                window.console && console.log(t)
            }, G = "", Q = "", Z = function(t, e) {
                e = e || W;
                var i, n, r = e.style;
                if (void 0 !== r[t])
                    return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                n = 5; --n > -1 && void 0 === r[i[n] + t]; )
                    ;
                return n >= 0 ? (Q = 3 === n ? "ms" : i[n],
                G = "-" + Q.toLowerCase() + "-",
                Q + t) : null
            }, J = j.defaultView ? j.defaultView.getComputedStyle : function() {}
            , $ = s.getStyle = function(t, e, i, n, r) {
                var o;
                return Y || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || J(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]),
                null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : U(t)
            }
            , K = H.convertToPixels = function(t, i, n, r, o) {
                if ("px" === r || !r)
                    return n;
                if ("auto" === r || !n)
                    return 0;
                var a, l, u, c = A.test(i), h = t, f = W.style, p = 0 > n, d = 1 === n;
                if (p && (n = -n),
                d && (n *= 100),
                "%" === r && -1 !== i.indexOf("border"))
                    a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                else {
                    if (f.cssText = "border:0 solid red;position:" + $(t, "position") + ";line-height:0;",
                    "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r)
                        f[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                    else {
                        if (h = t.parentNode || j.body,
                        l = h._gsCache,
                        u = e.ticker.frame,
                        l && c && l.time === u)
                            return l.width * n / 100;
                        f[c ? "width" : "height"] = n + r
                    }
                    h.appendChild(W),
                    a = parseFloat(W[c ? "offsetWidth" : "offsetHeight"]),
                    h.removeChild(W),
                    c && "%" === r && s.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {},
                    l.time = u,
                    l.width = a / n * 100),
                    0 !== a || o || (a = K(t, i, n, r, !0))
                }
                return d && (a /= 100),
                p ? -a : a
            }
            , tt = H.calculateOffset = function(t, e, i) {
                if ("absolute" !== $(t, "position", i))
                    return 0;
                var n = "left" === e ? "Left" : "Top"
                  , r = $(t, "margin" + n, i);
                return t["offset" + n] - (K(t, e, parseFloat(r), r.replace(T, "")) || 0)
            }
            , et = function(t, e) {
                var i, n, r, o = {};
                if (e = e || J(t, null))
                    if (i = e.length)
                        for (; --i > -1; )
                            r = e[i],
                            (-1 === r.indexOf("-transform") || Ot === r) && (o[r.replace(O, M)] = e.getPropertyValue(r));
                    else
                        for (i in e)
                            (-1 === i.indexOf("Transform") || Et === i) && (o[i] = e[i]);
                else if (e = t.currentStyle || t.style)
                    for (i in e)
                        "string" == typeof i && void 0 === o[i] && (o[i.replace(O, M)] = e[i]);
                return Y || (o.opacity = U(t)),
                n = $t(t, e, !1),
                o.rotation = n.rotation,
                o.skewX = n.skewX,
                o.scaleX = n.scaleX,
                o.scaleY = n.scaleY,
                o.x = n.x,
                o.y = n.y,
                Mt && (o.z = n.z,
                o.rotationX = n.rotationX,
                o.rotationY = n.rotationY,
                o.scaleZ = n.scaleZ),
                o.filters && delete o.filters,
                o
            }, it = function(t, e, i, n, r) {
                var o, s, a, l = {}, u = t.style;
                for (s in i)
                    "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(w, "") ? o : 0 : tt(t, s),
                    void 0 !== u[s] && (a = new vt(u,s,u[s],a)));
                if (n)
                    for (s in n)
                        "className" !== s && (l[s] = n[s]);
                return {
                    difs: l,
                    firstMPT: a
                }
            }, nt = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ot = function(t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase())
                    return (i || J(t))[e] || 0;
                if (t.getBBox && zt(t))
                    return t.getBBox()[e] || 0;
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
                  , r = nt[e]
                  , o = r.length;
                for (i = i || J(t, null); --o > -1; )
                    n -= parseFloat($(t, "padding" + r[o], i, !0)) || 0,
                    n -= parseFloat($(t, "border" + r[o] + "Width", i, !0)) || 0;
                return n
            }, st = function(t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t)
                    return t + " ";
                (null == t || "" === t) && (t = "0 0");
                var i, n = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0], o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                if (n.length > 3 && !e) {
                    for (n = t.split(", ").join(",").split(","),
                    t = [],
                    i = 0; i < n.length; i++)
                        t.push(st(n[i]));
                    return t.join(",")
                }
                return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"),
                ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
                t = r + " " + o + (n.length > 2 ? " " + n[2] : ""),
                e && (e.oxp = -1 !== r.indexOf("%"),
                e.oyp = -1 !== o.indexOf("%"),
                e.oxr = "=" === r.charAt(1),
                e.oyr = "=" === o.charAt(1),
                e.ox = parseFloat(r.replace(w, "")),
                e.oy = parseFloat(o.replace(w, "")),
                e.v = t),
                e || t
            }, at = function(t, e) {
                return "function" == typeof t && (t = t(v, g)),
                "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            }, lt = function(t, e) {
                return "function" == typeof t && (t = t(v, g)),
                null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            }, ut = function(t, e, i, n) {
                var r, o, s, a, l, u = 1e-6;
                return "function" == typeof t && (t = t(v, g)),
                null == t ? a = e : "number" == typeof t ? a = t : (r = 360,
                o = t.split("_"),
                l = "=" === t.charAt(1),
                s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e),
                o.length && (n && (n[i] = e + s),
                -1 !== t.indexOf("short") && (s %= r,
                s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)),
                -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)),
                a = e + s),
                u > a && a > -u && (a = 0),
                a
            }, ct = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ht = function(t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
                255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            }, ft = s.parseColor = function(t, e) {
                var i, n, r, o, s, a, l, u, c, h, f;
                if (t)
                    if ("number" == typeof t)
                        i = [t >> 16, t >> 8 & 255, 255 & t];
                    else {
                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                        ct[t])
                            i = ct[t];
                        else if ("#" === t.charAt(0))
                            4 === t.length && (n = t.charAt(1),
                            r = t.charAt(2),
                            o = t.charAt(3),
                            t = "#" + n + n + r + r + o + o),
                            t = parseInt(t.substr(1), 16),
                            i = [t >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                            if (i = f = t.match(y),
                            e) {
                                if (-1 !== t.indexOf("="))
                                    return t.match(_)
                            } else
                                s = Number(i[0]) % 360 / 360,
                                a = Number(i[1]) / 100,
                                l = Number(i[2]) / 100,
                                r = .5 >= l ? l * (a + 1) : l + a - l * a,
                                n = 2 * l - r,
                                i.length > 3 && (i[3] = Number(t[3])),
                                i[0] = ht(s + 1 / 3, n, r),
                                i[1] = ht(s, n, r),
                                i[2] = ht(s - 1 / 3, n, r);
                        else
                            i = t.match(y) || ct.transparent;
                        i[0] = Number(i[0]),
                        i[1] = Number(i[1]),
                        i[2] = Number(i[2]),
                        i.length > 3 && (i[3] = Number(i[3]))
                    }
                else
                    i = ct.black;
                return e && !f && (n = i[0] / 255,
                r = i[1] / 255,
                o = i[2] / 255,
                u = Math.max(n, r, o),
                c = Math.min(n, r, o),
                l = (u + c) / 2,
                u === c ? s = a = 0 : (h = u - c,
                a = l > .5 ? h / (2 - u - c) : h / (u + c),
                s = u === n ? (r - o) / h + (o > r ? 6 : 0) : u === r ? (o - n) / h + 2 : (n - r) / h + 4,
                s *= 60),
                i[0] = s + .5 | 0,
                i[1] = 100 * a + .5 | 0,
                i[2] = 100 * l + .5 | 0),
                i
            }
            , pt = function(t, e) {
                var i, n, r, o = t.match(dt) || [], s = 0, a = o.length ? "" : t;
                for (i = 0; i < o.length; i++)
                    n = o[i],
                    r = t.substr(s, t.indexOf(n, s) - s),
                    s += r.length + n.length,
                    n = ft(n, e),
                    3 === n.length && n.push(1),
                    a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                return a + t.substr(s)
            }, dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (u in ct)
                dt += "|" + u + "\\b";
            dt = new RegExp(dt + ")","gi"),
            s.colorStringFilter = function(t) {
                var e, i = t[0] + t[1];
                dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
                t[0] = pt(t[0], e),
                t[1] = pt(t[1], e)),
                dt.lastIndex = 0
            }
            ,
            e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
            var mt = function(t, e, i, n) {
                if (null == t)
                    return function(t) {
                        return t
                    }
                    ;
                var r, o = e ? (t.match(dt) || [""])[0] : "", s = t.split(o).join("").match(x) || [], a = t.substr(0, t.indexOf(s[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", u = -1 !== t.indexOf(" ") ? " " : ",", c = s.length, h = c > 0 ? s[0].replace(y, "") : "";
                return c ? r = e ? function(t) {
                    var e, f, p, d;
                    if ("number" == typeof t)
                        t += h;
                    else if (n && I.test(t)) {
                        for (d = t.replace(I, "|").split("|"),
                        p = 0; p < d.length; p++)
                            d[p] = r(d[p]);
                        return d.join(",")
                    }
                    if (e = (t.match(dt) || [o])[0],
                    f = t.split(e).join("").match(x) || [],
                    p = f.length,
                    c > p--)
                        for (; ++p < c; )
                            f[p] = i ? f[(p - 1) / 2 | 0] : s[p];
                    return a + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                }
                : function(t) {
                    var e, o, f;
                    if ("number" == typeof t)
                        t += h;
                    else if (n && I.test(t)) {
                        for (o = t.replace(I, "|").split("|"),
                        f = 0; f < o.length; f++)
                            o[f] = r(o[f]);
                        return o.join(",")
                    }
                    if (e = t.match(x) || [],
                    f = e.length,
                    c > f--)
                        for (; ++f < c; )
                            e[f] = i ? e[(f - 1) / 2 | 0] : s[f];
                    return a + e.join(u) + l
                }
                : function(t) {
                    return t
                }
            }
              , gt = function(t) {
                return t = t.split(","),
                function(e, i, n, r, o, s, a) {
                    var l, u = (i + "").split(" ");
                    for (a = {},
                    l = 0; 4 > l; l++)
                        a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                    return r.parse(e, a, o, s)
                }
            }
              , vt = (H._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT, u = 1e-6; l; )
                    e = a[l.v],
                    l.r ? e = Math.round(e) : u > e && e > -u && (e = 0),
                    l.t[l.p] = e,
                    l = l._next;
                if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation),
                1 === t || 0 === t)
                    for (l = s.firstMPT,
                    o = 1 === t ? "e" : "b"; l; ) {
                        if (i = l.t,
                        i.type) {
                            if (1 === i.type) {
                                for (r = i.xs0 + i.s + i.xs1,
                                n = 1; n < i.l; n++)
                                    r += i["xn" + n] + i["xs" + (n + 1)];
                                i[o] = r
                            }
                        } else
                            i[o] = i.s + i.xs0;
                        l = l._next
                    }
            }
            ,
            function(t, e, i, n, r) {
                this.t = t,
                this.p = e,
                this.v = i,
                this.r = r,
                n && (n._prev = this,
                this._next = n)
            }
            )
              , yt = (H._parseToProxy = function(t, e, i, n, r, o) {
                var s, a, l, u, c, h = n, f = {}, p = {}, d = i._transform, m = z;
                for (i._transform = null,
                z = e,
                n = c = i.parse(t, e, n, r),
                z = m,
                o && (i._transform = d,
                h && (h._prev = null,
                h._prev && (h._prev._next = null))); n && n !== h; ) {
                    if (n.type <= 1 && (a = n.p,
                    p[a] = n.s + n.c,
                    f[a] = n.s,
                    o || (u = new vt(n,"s",a,u,n.r),
                    n.c = 0),
                    1 === n.type))
                        for (s = n.l; --s > 0; )
                            l = "xn" + s,
                            a = n.p + "_" + l,
                            p[a] = n.data[l],
                            f[a] = n[l],
                            o || (u = new vt(n,l,a,u,n.rxp[l]));
                    n = n._next
                }
                return {
                    proxy: f,
                    end: p,
                    firstMPT: u,
                    pt: c
                }
            }
            ,
            H.CSSPropTween = function(t, e, n, r, s, a, l, u, c, h, f) {
                this.t = t,
                this.p = e,
                this.s = n,
                this.c = r,
                this.n = l || e,
                t instanceof yt || o.push(this.n),
                this.r = u,
                this.type = a || 0,
                c && (this.pr = c,
                i = !0),
                this.b = void 0 === h ? n : h,
                this.e = void 0 === f ? n + r : f,
                s && (this._next = s,
                s._prev = this)
            }
            )
              , _t = function(t, e, i, n, r, o) {
                var s = new yt(t,e,i,n - i,r,-1,o);
                return s.b = i,
                s.e = s.xs0 = n,
                s
            }
              , xt = s.parseComplex = function(t, e, i, n, r, o, a, l, u, h) {
                i = i || o || "",
                "function" == typeof n && (n = n(v, g)),
                a = new yt(t,e,0,0,a,h ? 2 : 1,null,!1,l,i,n),
                n += "",
                r && dt.test(n + i) && (n = [i, n],
                s.colorStringFilter(n),
                i = n[0],
                n = n[1]);
                var f, p, d, m, x, w, T, b, S, C, k, E, O, P = i.split(", ").join(",").split(" "), M = n.split(", ").join(",").split(" "), A = P.length, L = c !== !1;
                for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (P = P.join(" ").replace(I, ", ").split(" "),
                M = M.join(" ").replace(I, ", ").split(" "),
                A = P.length),
                A !== M.length && (P = (o || "").split(" "),
                A = P.length),
                a.plugin = u,
                a.setRatio = h,
                dt.lastIndex = 0,
                f = 0; A > f; f++)
                    if (m = P[f],
                    x = M[f],
                    b = parseFloat(m),
                    b || 0 === b)
                        a.appendXtra("", b, at(x, b), x.replace(_, ""), L && -1 !== x.indexOf("px"), !0);
                    else if (r && dt.test(m))
                        E = x.indexOf(")") + 1,
                        E = ")" + (E ? x.substr(E) : ""),
                        O = -1 !== x.indexOf("hsl") && Y,
                        m = ft(m, O),
                        x = ft(x, O),
                        S = m.length + x.length > 6,
                        S && !Y && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                        a.e = a.e.split(M[f]).join("transparent")) : (Y || (S = !1),
                        O ? a.appendXtra(S ? "hsla(" : "hsl(", m[0], at(x[0], m[0]), ",", !1, !0).appendXtra("", m[1], at(x[1], m[1]), "%,", !1).appendXtra("", m[2], at(x[2], m[2]), S ? "%," : "%" + E, !1) : a.appendXtra(S ? "rgba(" : "rgb(", m[0], x[0] - m[0], ",", !0, !0).appendXtra("", m[1], x[1] - m[1], ",", !0).appendXtra("", m[2], x[2] - m[2], S ? "," : E, !0),
                        S && (m = m.length < 4 ? 1 : m[3],
                        a.appendXtra("", m, (x.length < 4 ? 1 : x[3]) - m, E, !1))),
                        dt.lastIndex = 0;
                    else if (w = m.match(y)) {
                        if (T = x.match(_),
                        !T || T.length !== w.length)
                            return a;
                        for (d = 0,
                        p = 0; p < w.length; p++)
                            k = w[p],
                            C = m.indexOf(k, d),
                            a.appendXtra(m.substr(d, C - d), Number(k), at(T[p], k), "", L && "px" === m.substr(C + k.length, 2), 0 === p),
                            d = C + k.length;
                        a["xs" + a.l] += m.substr(d)
                    } else
                        a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
                if (-1 !== n.indexOf("=") && a.data) {
                    for (E = a.xs0 + a.data.s,
                    f = 1; f < a.l; f++)
                        E += a["xs" + f] + a.data["xn" + f];
                    a.e = E + a["xs" + f]
                }
                return a.l || (a.type = -1,
                a.xs0 = a.e),
                a.xfirst || a
            }
              , wt = 9;
            for (u = yt.prototype,
            u.l = u.pr = 0; --wt > 0; )
                u["xn" + wt] = 0,
                u["xs" + wt] = "";
            u.xs0 = "",
            u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null,
            u.appendXtra = function(t, e, i, n, r, o) {
                var s = this
                  , a = s.l;
                return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "",
                i || 0 === a || s.plugin ? (s.l++,
                s.type = s.setRatio ? 2 : 1,
                s["xs" + s.l] = n || "",
                a > 0 ? (s.data["xn" + a] = e + i,
                s.rxp["xn" + a] = r,
                s["xn" + a] = e,
                s.plugin || (s.xfirst = new yt(s,"xn" + a,e,i,s.xfirst || s,0,s.n,r,s.pr),
                s.xfirst.xs0 = 0),
                s) : (s.data = {
                    s: e + i
                },
                s.rxp = {},
                s.s = e,
                s.c = i,
                s.r = r,
                s)) : (s["xs" + a] += e + (n || ""),
                s)
            }
            ;
            var Tt = function(t, e) {
                e = e || {},
                this.p = e.prefix ? Z(t) || t : t,
                l[t] = l[this.p] = this,
                this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi),
                e.parser && (this.parse = e.parser),
                this.clrs = e.color,
                this.multi = e.multi,
                this.keyword = e.keyword,
                this.dflt = e.defaultValue,
                this.pr = e.priority || 0
            }
              , bt = H._registerComplexSpecialProp = function(t, e, i) {
                "object" != typeof e && (e = {
                    parser: i
                });
                var n, r, o = t.split(","), s = e.defaultValue;
                for (i = i || [s],
                n = 0; n < o.length; n++)
                    e.prefix = 0 === n && e.prefix,
                    e.defaultValue = i[n] || s,
                    r = new Tt(o[n],e)
            }
              , St = H._registerPluginProp = function(t) {
                if (!l[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    bt(t, {
                        parser: function(t, i, n, r, o, s, u) {
                            var c = a.com.greensock.plugins[e];
                            return c ? (c._cssRegister(),
                            l[n].parse(t, i, n, r, o, s, u)) : (V("Error: " + e + " js file not loaded."),
                            o)
                        }
                    })
                }
            }
            ;
            u = Tt.prototype,
            u.parseComplex = function(t, e, i, n, r, o) {
                var s, a, l, u, c, h, f = this.keyword;
                if (this.multi && (I.test(i) || I.test(e) ? (a = e.replace(I, "|").split("|"),
                l = i.replace(I, "|").split("|")) : f && (a = [e],
                l = [i])),
                l) {
                    for (u = l.length > a.length ? l.length : a.length,
                    s = 0; u > s; s++)
                        e = a[s] = a[s] || this.dflt,
                        i = l[s] = l[s] || this.dflt,
                        f && (c = e.indexOf(f),
                        h = i.indexOf(f),
                        c !== h && (-1 === h ? a[s] = a[s].split(f).join("") : -1 === c && (a[s] += " " + f)));
                    e = a.join(", "),
                    i = l.join(", ")
                }
                return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
            }
            ,
            u.parse = function(t, e, i, n, o, s, a) {
                return this.parseComplex(t.style, this.format($(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
            }
            ,
            s.registerSpecialProp = function(t, e, i) {
                bt(t, {
                    parser: function(t, n, r, o, s, a, l) {
                        var u = new yt(t,r,0,0,s,2,r,!1,i);
                        return u.plugin = a,
                        u.setRatio = e(t, n, o._tween, r),
                        u
                    },
                    priority: i
                })
            }
            ,
            s.useSVGTransformAttr = f || p;
            var Ct, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Et = Z("transform"), Ot = G + "transform", Pt = Z("transformOrigin"), Mt = null !== Z("perspective"), At = H.Transform = function() {
                this.perspective = parseFloat(s.defaultTransformPerspective) || 0,
                this.force3D = !(s.defaultForce3D === !1 || !Mt) && (s.defaultForce3D || "auto")
            }
            , Lt = window.SVGElement, Dt = function(t, e, i) {
                var n, r = j.createElementNS("http://www.w3.org/2000/svg", t), o = /([a-z])([A-Z])/g;
                for (n in i)
                    r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                return e.appendChild(r),
                r
            }, It = j.documentElement, Rt = function() {
                var t, e, i, n = m || /Android/i.test(X) && !window.chrome;
                return j.createElementNS && !n && (t = Dt("svg", It),
                e = Dt("rect", t, {
                    width: 100,
                    height: 50,
                    x: 100
                }),
                i = e.getBoundingClientRect().width,
                e.style[Pt] = "50% 50%",
                e.style[Et] = "scaleX(0.5)",
                n = i === e.getBoundingClientRect().width && !(p && Mt),
                It.removeChild(t)),
                n
            }(), Nt = function(t, e, i, n, r, o) {
                var a, l, u, c, h, f, p, d, m, g, v, y, _, x, w = t._gsTransform, T = qt(t, !0);
                w && (_ = w.xOrigin,
                x = w.yOrigin),
                (!n || (a = n.split(" ")).length < 2) && (p = t.getBBox(),
                e = st(e).split(" "),
                a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]),
                i.xOrigin = c = parseFloat(a[0]),
                i.yOrigin = h = parseFloat(a[1]),
                n && T !== jt && (f = T[0],
                p = T[1],
                d = T[2],
                m = T[3],
                g = T[4],
                v = T[5],
                y = f * m - p * d,
                l = c * (m / y) + h * (-d / y) + (d * v - m * g) / y,
                u = c * (-p / y) + h * (f / y) - (f * v - p * g) / y,
                c = i.xOrigin = a[0] = l,
                h = i.yOrigin = a[1] = u),
                w && (o && (i.xOffset = w.xOffset,
                i.yOffset = w.yOffset,
                w = i),
                r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (l = c - _,
                u = h - x,
                w.xOffset += l * T[0] + u * T[2] - l,
                w.yOffset += l * T[1] + u * T[3] - u) : w.xOffset = w.yOffset = 0),
                o || t.setAttribute("data-svg-origin", a.join(" "))
            }, Ft = function(t) {
                try {
                    return t.getBBox()
                } catch (t) {}
            }, zt = function(t) {
                return !!(Lt && t.getBBox && t.getCTM && Ft(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
            }, jt = [1, 0, 0, 1, 0, 0], qt = function(t, e) {
                var i, n, r, o, s, a, l = t._gsTransform || new At, u = 1e5, c = t.style;
                if (Et ? n = $(t, Ot, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(L),
                n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
                i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
                i && Et && ((a = "none" === J(t).display) || !t.parentNode) && (a && (o = c.display,
                c.display = "block"),
                t.parentNode || (s = 1,
                It.appendChild(t)),
                n = $(t, Ot, null, !0),
                i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
                o ? c.display = o : a && Xt(c, "display"),
                s && It.removeChild(t)),
                (l.svg || t.getBBox && zt(t)) && (i && -1 !== (c[Et] + "").indexOf("matrix") && (n = c[Et],
                i = 0),
                r = t.getAttribute("transform"),
                i && r && (-1 !== r.indexOf("matrix") ? (n = r,
                i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
                i = 0))),
                i)
                    return jt;
                for (r = (n || "").match(y) || [],
                wt = r.length; --wt > -1; )
                    o = Number(r[wt]),
                    r[wt] = (s = o - (o |= 0)) ? (s * u + (0 > s ? -.5 : .5) | 0) / u + o : o;
                return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
            }, $t = H.getTransform = function(t, i, n, r) {
                if (t._gsTransform && n && !r)
                    return t._gsTransform;
                var o, a, l, u, c, h, f = n ? t._gsTransform || new At : new At, p = f.scaleX < 0, d = 2e-5, m = 1e5, g = Mt ? parseFloat($(t, Pt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0, v = parseFloat(s.defaultTransformPerspective) || 0;
                if (f.svg = !(!t.getBBox || !zt(t)),
                f.svg && (Nt(t, $(t, Pt, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")),
                Ct = s.useSVGTransformAttr || Rt),
                o = qt(t),
                o !== jt) {
                    if (16 === o.length) {
                        var y, _, x, w, T, b = o[0], S = o[1], C = o[2], k = o[3], E = o[4], O = o[5], P = o[6], M = o[7], A = o[8], L = o[9], D = o[10], I = o[12], R = o[13], N = o[14], z = o[11], j = Math.atan2(P, D);
                        f.zOrigin && (N = -f.zOrigin,
                        I = A * N - o[12],
                        R = L * N - o[13],
                        N = D * N + f.zOrigin - o[14]),
                        f.rotationX = j * F,
                        j && (w = Math.cos(-j),
                        T = Math.sin(-j),
                        y = E * w + A * T,
                        _ = O * w + L * T,
                        x = P * w + D * T,
                        A = E * -T + A * w,
                        L = O * -T + L * w,
                        D = P * -T + D * w,
                        z = M * -T + z * w,
                        E = y,
                        O = _,
                        P = x),
                        j = Math.atan2(-C, D),
                        f.rotationY = j * F,
                        j && (w = Math.cos(-j),
                        T = Math.sin(-j),
                        y = b * w - A * T,
                        _ = S * w - L * T,
                        x = C * w - D * T,
                        L = S * T + L * w,
                        D = C * T + D * w,
                        z = k * T + z * w,
                        b = y,
                        S = _,
                        C = x),
                        j = Math.atan2(S, b),
                        f.rotation = j * F,
                        j && (w = Math.cos(-j),
                        T = Math.sin(-j),
                        b = b * w + E * T,
                        _ = S * w + O * T,
                        O = S * -T + O * w,
                        P = C * -T + P * w,
                        S = _),
                        f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0,
                        f.rotationY = 180 - f.rotationY),
                        f.scaleX = (Math.sqrt(b * b + S * S) * m + .5 | 0) / m,
                        f.scaleY = (Math.sqrt(O * O + L * L) * m + .5 | 0) / m,
                        f.scaleZ = (Math.sqrt(P * P + D * D) * m + .5 | 0) / m,
                        f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = E || O ? Math.atan2(E, O) * F + f.rotation : f.skewX || 0,
                        Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1,
                        f.skewX += f.rotation <= 0 ? 180 : -180,
                        f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1,
                        f.skewX += f.skewX <= 0 ? 180 : -180))),
                        f.perspective = z ? 1 / (0 > z ? -z : z) : 0,
                        f.x = I,
                        f.y = R,
                        f.z = N,
                        f.svg && (f.x -= f.xOrigin - (f.xOrigin * b - f.yOrigin * E),
                        f.y -= f.yOrigin - (f.yOrigin * S - f.xOrigin * O))
                    } else if (!Mt || r || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                        var q = o.length >= 6
                          , W = q ? o[0] : 1
                          , B = o[1] || 0
                          , H = o[2] || 0
                          , X = q ? o[3] : 1;
                        f.x = o[4] || 0,
                        f.y = o[5] || 0,
                        l = Math.sqrt(W * W + B * B),
                        u = Math.sqrt(X * X + H * H),
                        c = W || B ? Math.atan2(B, W) * F : f.rotation || 0,
                        h = H || X ? Math.atan2(H, X) * F + c : f.skewX || 0,
                        Math.abs(h) > 90 && Math.abs(h) < 270 && (p ? (l *= -1,
                        h += 0 >= c ? 180 : -180,
                        c += 0 >= c ? 180 : -180) : (u *= -1,
                        h += 0 >= h ? 180 : -180)),
                        f.scaleX = l,
                        f.scaleY = u,
                        f.rotation = c,
                        f.skewX = h,
                        Mt && (f.rotationX = f.rotationY = f.z = 0,
                        f.perspective = v,
                        f.scaleZ = 1),
                        f.svg && (f.x -= f.xOrigin - (f.xOrigin * W + f.yOrigin * H),
                        f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * X))
                    }
                    f.zOrigin = g;
                    for (a in f)
                        f[a] < d && f[a] > -d && (f[a] = 0)
                }
                return n && (t._gsTransform = f,
                f.svg && (Ct && t.style[Et] ? e.delayedCall(.001, function() {
                    Xt(t.style, Et)
                }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function() {
                    t.removeAttribute("transform")
                }))),
                f
            }
            , Wt = function(t) {
                var e, i, n = this.data, r = -n.rotation * N, o = r + n.skewX * N, s = 1e5, a = (Math.cos(r) * n.scaleX * s | 0) / s, l = (Math.sin(r) * n.scaleX * s | 0) / s, u = (Math.sin(o) * -n.scaleY * s | 0) / s, c = (Math.cos(o) * n.scaleY * s | 0) / s, h = this.t.style, f = this.t.currentStyle;
                if (f) {
                    i = l,
                    l = -u,
                    u = -i,
                    e = f.filter,
                    h.filter = "";
                    var p, d, g = this.t.offsetWidth, v = this.t.offsetHeight, y = "absolute" !== f.position, _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c, x = n.x + g * n.xPercent / 100, w = n.y + v * n.yPercent / 100;
                    if (null != n.ox && (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2,
                    d = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2,
                    x += p - (p * a + d * l),
                    w += d - (p * u + d * c)),
                    y ? (p = g / 2,
                    d = v / 2,
                    _ += ", Dx=" + (p - (p * a + d * l) + x) + ", Dy=" + (d - (p * u + d * c) + w) + ")") : _ += ", sizingMethod='auto expand')",
                    -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(D, _) : h.filter = _ + " " + e,
                    (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (y && -1 === _.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")),
                    !y) {
                        var S, C, k, E = 8 > m ? 1 : -1;
                        for (p = n.ieOffsetX || 0,
                        d = n.ieOffsetY || 0,
                        n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + x),
                        n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * g)) / 2 + w),
                        wt = 0; 4 > wt; wt++)
                            C = rt[wt],
                            S = f[C],
                            i = -1 !== S.indexOf("px") ? parseFloat(S) : K(this.t, C, parseFloat(S), S.replace(T, "")) || 0,
                            k = i !== n[C] ? 2 > wt ? -n.ieOffsetX : -n.ieOffsetY : 2 > wt ? p - n.ieOffsetX : d - n.ieOffsetY,
                            h[C] = (n[C] = Math.round(i - k * (0 === wt || 2 === wt ? 1 : E))) + "px"
                    }
                }
            }, Bt = H.set3DTransformRatio = H.setTransformRatio = function(t) {
                var e, i, n, r, o, s, a, l, u, c, h, f, d, m, g, v, y, _, x, w, T, b, S, C = this.data, k = this.t.style, E = C.rotation, O = C.rotationX, P = C.rotationY, M = C.scaleX, A = C.scaleY, L = C.scaleZ, D = C.x, I = C.y, R = C.z, F = C.svg, z = C.perspective, j = C.force3D;
                if (((1 === t || 0 === t) && "auto" === j && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !j) && !R && !z && !P && !O && 1 === L || Ct && F || !Mt)
                    return void (E || C.skewX || F ? (E *= N,
                    b = C.skewX * N,
                    S = 1e5,
                    e = Math.cos(E) * M,
                    r = Math.sin(E) * M,
                    i = Math.sin(E - b) * -A,
                    o = Math.cos(E - b) * A,
                    b && "simple" === C.skewType && (y = Math.tan(b - C.skewY * N),
                    y = Math.sqrt(1 + y * y),
                    i *= y,
                    o *= y,
                    C.skewY && (y = Math.tan(C.skewY * N),
                    y = Math.sqrt(1 + y * y),
                    e *= y,
                    r *= y)),
                    F && (D += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset,
                    I += C.yOrigin - (C.xOrigin * r + C.yOrigin * o) + C.yOffset,
                    Ct && (C.xPercent || C.yPercent) && (m = this.t.getBBox(),
                    D += .01 * C.xPercent * m.width,
                    I += .01 * C.yPercent * m.height),
                    m = 1e-6,
                    m > D && D > -m && (D = 0),
                    m > I && I > -m && (I = 0)),
                    x = (e * S | 0) / S + "," + (r * S | 0) / S + "," + (i * S | 0) / S + "," + (o * S | 0) / S + "," + D + "," + I + ")",
                    F && Ct ? this.t.setAttribute("transform", "matrix(" + x) : k[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + x) : k[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + M + ",0,0," + A + "," + D + "," + I + ")");
                if (p && (m = 1e-4,
                m > M && M > -m && (M = L = 2e-5),
                m > A && A > -m && (A = L = 2e-5),
                !z || C.z || C.rotationX || C.rotationY || (z = 0)),
                E || C.skewX)
                    E *= N,
                    g = e = Math.cos(E),
                    v = r = Math.sin(E),
                    C.skewX && (E -= C.skewX * N,
                    g = Math.cos(E),
                    v = Math.sin(E),
                    "simple" === C.skewType && (y = Math.tan((C.skewX - C.skewY) * N),
                    y = Math.sqrt(1 + y * y),
                    g *= y,
                    v *= y,
                    C.skewY && (y = Math.tan(C.skewY * N),
                    y = Math.sqrt(1 + y * y),
                    e *= y,
                    r *= y))),
                    i = -v,
                    o = g;
                else {
                    if (!(P || O || 1 !== L || z || F))
                        return void (k[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + I + "px," + R + "px)" + (1 !== M || 1 !== A ? " scale(" + M + "," + A + ")" : ""));
                    e = o = 1,
                    i = r = 0
                }
                u = 1,
                n = s = a = l = c = h = 0,
                f = z ? -1 / z : 0,
                d = C.zOrigin,
                m = 1e-6,
                w = ",",
                T = "0",
                E = P * N,
                E && (g = Math.cos(E),
                v = Math.sin(E),
                a = -v,
                c = f * -v,
                n = e * v,
                s = r * v,
                u = g,
                f *= g,
                e *= g,
                r *= g),
                E = O * N,
                E && (g = Math.cos(E),
                v = Math.sin(E),
                y = i * g + n * v,
                _ = o * g + s * v,
                l = u * v,
                h = f * v,
                n = i * -v + n * g,
                s = o * -v + s * g,
                u *= g,
                f *= g,
                i = y,
                o = _),
                1 !== L && (n *= L,
                s *= L,
                u *= L,
                f *= L),
                1 !== A && (i *= A,
                o *= A,
                l *= A,
                h *= A),
                1 !== M && (e *= M,
                r *= M,
                a *= M,
                c *= M),
                (d || F) && (d && (D += n * -d,
                I += s * -d,
                R += u * -d + d),
                F && (D += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset,
                I += C.yOrigin - (C.xOrigin * r + C.yOrigin * o) + C.yOffset),
                m > D && D > -m && (D = T),
                m > I && I > -m && (I = T),
                m > R && R > -m && (R = 0)),
                x = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(",
                x += (m > e && e > -m ? T : e) + w + (m > r && r > -m ? T : r) + w + (m > a && a > -m ? T : a),
                x += w + (m > c && c > -m ? T : c) + w + (m > i && i > -m ? T : i) + w + (m > o && o > -m ? T : o),
                O || P || 1 !== L ? (x += w + (m > l && l > -m ? T : l) + w + (m > h && h > -m ? T : h) + w + (m > n && n > -m ? T : n),
                x += w + (m > s && s > -m ? T : s) + w + (m > u && u > -m ? T : u) + w + (m > f && f > -m ? T : f) + w) : x += ",0,0,0,0,1,0,",
                x += D + w + I + w + R + w + (z ? 1 + -R / z : 1) + ")",
                k[Et] = x
            }
            ;
            u = At.prototype,
            u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0,
            u.scaleX = u.scaleY = u.scaleZ = 1,
            bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, n, o, a, l) {
                    if (n._lastParsedTransform === l)
                        return o;
                    n._lastParsedTransform = l;
                    var u;
                    "function" == typeof l[i] && (u = l[i],
                    l[i] = e);
                    var c, h, f, p, d, m, y, _, x, w = t._gsTransform, T = t.style, b = 1e-6, S = kt.length, C = l, k = {}, E = "transformOrigin", O = $t(t, r, !0, C.parseTransform), P = C.transform && ("function" == typeof C.transform ? C.transform(v, g) : C.transform);
                    if (n._transform = O,
                    P && "string" == typeof P && Et)
                        h = W.style,
                        h[Et] = P,
                        h.display = "block",
                        h.position = "absolute",
                        j.body.appendChild(W),
                        c = $t(W, null, !1),
                        O.svg && (m = O.xOrigin,
                        y = O.yOrigin,
                        c.x -= O.xOffset,
                        c.y -= O.yOffset,
                        (C.transformOrigin || C.svgOrigin) && (P = {},
                        Nt(t, st(C.transformOrigin), P, C.svgOrigin, C.smoothOrigin, !0),
                        m = P.xOrigin,
                        y = P.yOrigin,
                        c.x -= P.xOffset - O.xOffset,
                        c.y -= P.yOffset - O.yOffset),
                        (m || y) && (_ = qt(W, !0),
                        c.x -= m - (m * _[0] + y * _[2]),
                        c.y -= y - (m * _[1] + y * _[3]))),
                        j.body.removeChild(W),
                        c.perspective || (c.perspective = O.perspective),
                        null != C.xPercent && (c.xPercent = lt(C.xPercent, O.xPercent)),
                        null != C.yPercent && (c.yPercent = lt(C.yPercent, O.yPercent));
                    else if ("object" == typeof C) {
                        if (c = {
                            scaleX: lt(null != C.scaleX ? C.scaleX : C.scale, O.scaleX),
                            scaleY: lt(null != C.scaleY ? C.scaleY : C.scale, O.scaleY),
                            scaleZ: lt(C.scaleZ, O.scaleZ),
                            x: lt(C.x, O.x),
                            y: lt(C.y, O.y),
                            z: lt(C.z, O.z),
                            xPercent: lt(C.xPercent, O.xPercent),
                            yPercent: lt(C.yPercent, O.yPercent),
                            perspective: lt(C.transformPerspective, O.perspective)
                        },
                        d = C.directionalRotation,
                        null != d)
                            if ("object" == typeof d)
                                for (h in d)
                                    C[h] = d[h];
                            else
                                C.rotation = d;
                        "string" == typeof C.x && -1 !== C.x.indexOf("%") && (c.x = 0,
                        c.xPercent = lt(C.x, O.xPercent)),
                        "string" == typeof C.y && -1 !== C.y.indexOf("%") && (c.y = 0,
                        c.yPercent = lt(C.y, O.yPercent)),
                        c.rotation = ut("rotation"in C ? C.rotation : "shortRotation"in C ? C.shortRotation + "_short" : "rotationZ"in C ? C.rotationZ : O.rotation - O.skewY, O.rotation - O.skewY, "rotation", k),
                        Mt && (c.rotationX = ut("rotationX"in C ? C.rotationX : "shortRotationX"in C ? C.shortRotationX + "_short" : O.rotationX || 0, O.rotationX, "rotationX", k),
                        c.rotationY = ut("rotationY"in C ? C.rotationY : "shortRotationY"in C ? C.shortRotationY + "_short" : O.rotationY || 0, O.rotationY, "rotationY", k)),
                        c.skewX = ut(C.skewX, O.skewX - O.skewY),
                        (c.skewY = ut(C.skewY, O.skewY)) && (c.skewX += c.skewY,
                        c.rotation += c.skewY)
                    }
                    for (Mt && null != C.force3D && (O.force3D = C.force3D,
                    p = !0),
                    O.skewType = C.skewType || O.skewType || s.defaultSkewType,
                    f = O.force3D || O.z || O.rotationX || O.rotationY || c.z || c.rotationX || c.rotationY || c.perspective,
                    f || null == C.scale || (c.scaleZ = 1); --S > -1; )
                        x = kt[S],
                        P = c[x] - O[x],
                        (P > b || -b > P || null != C[x] || null != z[x]) && (p = !0,
                        o = new yt(O,x,O[x],P,o),
                        x in k && (o.e = k[x]),
                        o.xs0 = 0,
                        o.plugin = a,
                        n._overwriteProps.push(o.n));
                    return P = C.transformOrigin,
                    O.svg && (P || C.svgOrigin) && (m = O.xOffset,
                    y = O.yOffset,
                    Nt(t, st(P), c, C.svgOrigin, C.smoothOrigin),
                    o = _t(O, "xOrigin", (w ? O : c).xOrigin, c.xOrigin, o, E),
                    o = _t(O, "yOrigin", (w ? O : c).yOrigin, c.yOrigin, o, E),
                    (m !== O.xOffset || y !== O.yOffset) && (o = _t(O, "xOffset", w ? m : O.xOffset, O.xOffset, o, E),
                    o = _t(O, "yOffset", w ? y : O.yOffset, O.yOffset, o, E)),
                    P = Ct ? null : "0px 0px"),
                    (P || Mt && f && O.zOrigin) && (Et ? (p = !0,
                    x = Pt,
                    P = (P || $(t, x, r, !1, "50% 50%")) + "",
                    o = new yt(T,x,0,0,o,-1,E),
                    o.b = T[x],
                    o.plugin = a,
                    Mt ? (h = O.zOrigin,
                    P = P.split(" "),
                    O.zOrigin = (P.length > 2 && (0 === h || "0px" !== P[2]) ? parseFloat(P[2]) : h) || 0,
                    o.xs0 = o.e = P[0] + " " + (P[1] || "50%") + " 0px",
                    o = new yt(O,"zOrigin",0,0,o,-1,o.n),
                    o.b = h,
                    o.xs0 = o.e = O.zOrigin) : o.xs0 = o.e = P) : st(P + "", O)),
                    p && (n._transformType = O.svg && Ct || !f && 3 !== this._transformType ? 2 : 3),
                    u && (l[i] = u),
                    o
                },
                prefix: !0
            }),
            bt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }),
            bt("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, o, s, a) {
                    e = this.format(e);
                    var l, u, c, h, f, p, d, m, g, v, y, _, x, w, T, b, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], C = t.style;
                    for (g = parseFloat(t.offsetWidth),
                    v = parseFloat(t.offsetHeight),
                    l = e.split(" "),
                    u = 0; u < S.length; u++)
                        this.p.indexOf("border") && (S[u] = Z(S[u])),
                        f = h = $(t, S[u], r, !1, "0px"),
                        -1 !== f.indexOf(" ") && (h = f.split(" "),
                        f = h[0],
                        h = h[1]),
                        p = c = l[u],
                        d = parseFloat(f),
                        _ = f.substr((d + "").length),
                        x = "=" === p.charAt(1),
                        x ? (m = parseInt(p.charAt(0) + "1", 10),
                        p = p.substr(2),
                        m *= parseFloat(p),
                        y = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p),
                        y = p.substr((m + "").length)),
                        "" === y && (y = n[i] || _),
                        y !== _ && (w = K(t, "borderLeft", d, _),
                        T = K(t, "borderTop", d, _),
                        "%" === y ? (f = w / g * 100 + "%",
                        h = T / v * 100 + "%") : "em" === y ? (b = K(t, "borderLeft", 1, "em"),
                        f = w / b + "em",
                        h = T / b + "em") : (f = w + "px",
                        h = T + "px"),
                        x && (p = parseFloat(f) + m + y,
                        c = parseFloat(h) + m + y)),
                        s = xt(C, S[u], f + " " + h, p + " " + c, !1, "0px", s);
                    return s
                },
                prefix: !0,
                formatter: mt("0px 0px 0px 0px", !1, !0)
            }),
            bt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, o, s) {
                    return xt(t.style, i, this.format($(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o)
                },
                prefix: !0,
                formatter: mt("0px 0px", !1, !0)
            }),
            bt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, n, o, s) {
                    var a, l, u, c, h, f, p = "background-position", d = r || J(t, null), g = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), v = this.format(e);
                    if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (f = $(t, "backgroundImage").replace(P, ""),
                    f && "none" !== f)) {
                        for (a = g.split(" "),
                        l = v.split(" "),
                        B.setAttribute("src", f),
                        u = 2; --u > -1; )
                            g = a[u],
                            c = -1 !== g.indexOf("%"),
                            c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - B.width : t.offsetHeight - B.height,
                            a[u] = c ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
                        g = a.join(" ")
                    }
                    return this.parseComplex(t.style, g, v, o, s)
                },
                formatter: st
            }),
            bt("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(t) {
                    return t += "",
                    st(-1 === t.indexOf(" ") ? t + " " + t : t)
                }
            }),
            bt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }),
            bt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }),
            bt("transformStyle", {
                prefix: !0
            }),
            bt("backfaceVisibility", {
                prefix: !0
            }),
            bt("userSelect", {
                prefix: !0
            }),
            bt("margin", {
                parser: gt("marginTop,marginRight,marginBottom,marginLeft")
            }),
            bt("padding", {
                parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }),
            bt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, n, o, s) {
                    var a, l, u;
                    return 9 > m ? (l = t.currentStyle,
                    u = 8 > m ? " " : ",",
                    a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")",
                    e = this.format(e).split(",").join(u)) : (a = this.format($(t, this.p, r, !1, this.dflt)),
                    e = this.format(e)),
                    this.parseComplex(t.style, a, e, o, s)
                }
            }),
            bt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }),
            bt("autoRound,strictUnits", {
                parser: function(t, e, i, n, r) {
                    return r
                }
            }),
            bt("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, n, o, s) {
                    var a = $(t, "borderTopWidth", r, !1, "0px")
                      , l = this.format(e).split(" ")
                      , u = l[0].replace(T, "");
                    return "px" !== u && (a = parseFloat(a) / K(t, "borderTopWidth", 1, u) + u),
                    this.parseComplex(t.style, this.format(a + " " + $(t, "borderTopStyle", r, !1, "solid") + " " + $(t, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
                }
            }),
            bt("borderWidth", {
                parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }),
            bt("float,cssFloat,styleFloat", {
                parser: function(t, e, i, n, r, o) {
                    var s = t.style
                      , a = "cssFloat"in s ? "cssFloat" : "styleFloat";
                    return new yt(s,a,0,0,r,-1,i,!1,0,s[a],e)
                }
            });
            var Ht = function(t) {
                var e, i = this.t, n = i.filter || $(this.data, "filter") || "", r = this.s + this.c * t | 0;
                100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
                e = !$(this.data, "filter")) : (i.filter = n.replace(C, ""),
                e = !0)),
                e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
                -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r))
            };
            bt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, n, o, s) {
                    var a = parseFloat($(t, "opacity", r, !1, "1"))
                      , l = t.style
                      , u = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                    u && 1 === a && "hidden" === $(t, "visibility", r) && 0 !== e && (a = 0),
                    Y ? o = new yt(l,"opacity",a,e - a,o) : (o = new yt(l,"opacity",100 * a,100 * (e - a),o),
                    o.xn1 = u ? 1 : 0,
                    l.zoom = 1,
                    o.type = 2,
                    o.b = "alpha(opacity=" + o.s + ")",
                    o.e = "alpha(opacity=" + (o.s + o.c) + ")",
                    o.data = t,
                    o.plugin = s,
                    o.setRatio = Ht),
                    u && (o = new yt(l,"visibility",0,0,o,-1,null,!1,0,0 !== a ? "inherit" : "hidden",0 === e ? "hidden" : "inherit"),
                    o.xs0 = "inherit",
                    n._overwriteProps.push(o.n),
                    n._overwriteProps.push(i)),
                    o
                }
            });
            var Xt = function(t, e) {
                e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
                t.removeProperty(e.replace(E, "-$1").toLowerCase())) : t.removeAttribute(e))
            }
              , Yt = function(t) {
                if (this.t._gsClassPT = this,
                1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e; )
                        e.v ? i[e.p] = e.v : Xt(i, e.p),
                        e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else
                    this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
            bt("className", {
                parser: function(t, e, n, o, s, a, l) {
                    var u, c, h, f, p, d = t.getAttribute("class") || "", m = t.style.cssText;
                    if (s = o._classNamePT = new yt(t,n,0,0,s,2),
                    s.setRatio = Yt,
                    s.pr = -11,
                    i = !0,
                    s.b = d,
                    c = et(t, r),
                    h = t._gsClassPT) {
                        for (f = {},
                        p = h.data; p; )
                            f[p.p] = 1,
                            p = p._next;
                        h.setRatio(1)
                    }
                    return t._gsClassPT = s,
                    s.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                    t.setAttribute("class", s.e),
                    u = it(t, c, et(t), l, f),
                    t.setAttribute("class", d),
                    s.data = u.firstMPT,
                    t.style.cssText = m,
                    s = s.xfirst = o.parse(t, u.difs, s, a)
                }
            });
            var Ut = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, r, o, s = this.t.style, a = l.transform.parse;
                    if ("all" === this.e)
                        s.cssText = "",
                        r = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","),
                        n = e.length; --n > -1; )
                            i = e[n],
                            l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pt : l[i].p),
                            Xt(s, i);
                    r && (Xt(s, Et),
                    o = this.t._gsTransform,
                    o && (o.svg && (this.t.removeAttribute("data-svg-origin"),
                    this.t.removeAttribute("transform")),
                    delete this.t._gsTransform))
                }
            };
            for (bt("clearProps", {
                parser: function(t, e, n, r, o) {
                    return o = new yt(t,n,0,0,o,2),
                    o.setRatio = Ut,
                    o.e = e,
                    o.pr = -10,
                    o.data = r._tween,
                    i = !0,
                    o
                }
            }),
            u = "bezier,throwProps,physicsProps,physics2D".split(","),
            wt = u.length; wt--; )
                St(u[wt]);
            u = s.prototype,
            u._firstPT = u._lastParsedTransform = u._transform = null,
            u._onInitTween = function(t, e, a, u) {
                if (!t.nodeType)
                    return !1;
                this._target = g = t,
                this._tween = a,
                this._vars = e,
                v = u,
                c = e.autoRound,
                i = !1,
                n = e.suffixMap || s.suffixMap,
                r = J(t, ""),
                o = this._overwriteProps;
                var p, m, y, _, x, w, T, b, C, k = t.style;
                if (h && "" === k.zIndex && (p = $(t, "zIndex", r),
                ("auto" === p || "" === p) && this._addLazySet(k, "zIndex", 0)),
                "string" == typeof e && (_ = k.cssText,
                p = et(t, r),
                k.cssText = _ + ";" + e,
                p = it(t, p, et(t)).difs,
                !Y && S.test(e) && (p.opacity = parseFloat(RegExp.$1)),
                e = p,
                k.cssText = _),
                e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null),
                this._transformType) {
                    for (C = 3 === this._transformType,
                    Et ? f && (h = !0,
                    "" === k.zIndex && (T = $(t, "zIndex", r),
                    ("auto" === T || "" === T) && this._addLazySet(k, "zIndex", 0)),
                    d && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : k.zoom = 1,
                    y = m; y && y._next; )
                        y = y._next;
                    b = new yt(t,"transform",0,0,null,2),
                    this._linkCSSP(b, null, y),
                    b.setRatio = Et ? Bt : Wt,
                    b.data = this._transform || $t(t, r, !0),
                    b.tween = a,
                    b.pr = -1,
                    o.pop()
                }
                if (i) {
                    for (; m; ) {
                        for (w = m._next,
                        y = _; y && y.pr > m.pr; )
                            y = y._next;
                        (m._prev = y ? y._prev : x) ? m._prev._next = m : _ = m,
                        (m._next = y) ? y._prev = m : x = m,
                        m = w
                    }
                    this._firstPT = _
                }
                return !0
            }
            ,
            u.parse = function(t, e, i, o) {
                var s, a, u, h, f, p, d, m, y, _, x = t.style;
                for (s in e)
                    p = e[s],
                    "function" == typeof p && (p = p(v, g)),
                    a = l[s],
                    a ? i = a.parse(t, p, s, this, i, o, e) : (f = $(t, s, r) + "",
                    y = "string" == typeof p,
                    "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || y && k.test(p) ? (y || (p = ft(p),
                    p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"),
                    i = xt(x, s, f, p, !0, "transparent", i, 0, o)) : y && R.test(p) ? i = xt(x, s, f, p, !0, null, i, 0, o) : (u = parseFloat(f),
                    d = u || 0 === u ? f.substr((u + "").length) : "",
                    ("" === f || "auto" === f) && ("width" === s || "height" === s ? (u = ot(t, s, r),
                    d = "px") : "left" === s || "top" === s ? (u = tt(t, s, r),
                    d = "px") : (u = "opacity" !== s ? 0 : 1,
                    d = "")),
                    _ = y && "=" === p.charAt(1),
                    _ ? (h = parseInt(p.charAt(0) + "1", 10),
                    p = p.substr(2),
                    h *= parseFloat(p),
                    m = p.replace(T, "")) : (h = parseFloat(p),
                    m = y ? p.replace(T, "") : ""),
                    "" === m && (m = s in n ? n[s] : d),
                    p = h || 0 === h ? (_ ? h + u : h) + m : e[s],
                    d !== m && "" !== m && (h || 0 === h) && u && (u = K(t, s, u, d),
                    "%" === m ? (u /= K(t, s, 100, "%") / 100,
                    e.strictUnits !== !0 && (f = u + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? u /= K(t, s, 1, m) : "px" !== m && (h = K(t, s, h, m),
                    m = "px"),
                    _ && (h || 0 === h) && (p = h + u + m)),
                    _ && (h += u),
                    !u && 0 !== u || !h && 0 !== h ? void 0 !== x[s] && (p || p + "" != "NaN" && null != p) ? (i = new yt(x,s,h || u || 0,0,i,-1,s,!1,0,f,p),
                    i.xs0 = "none" !== p || "display" !== s && -1 === s.indexOf("Style") ? p : f) : V("invalid " + s + " tween value: " + e[s]) : (i = new yt(x,s,u,h - u,i,0,s,c !== !1 && ("px" === m || "zIndex" === s),0,f,p),
                    i.xs0 = m))),
                    o && i && !i.plugin && (i.plugin = o);
                return i
            }
            ,
            u.setRatio = function(t) {
                var e, i, n, r = this._firstPT, o = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; r; ) {
                            if (e = r.c * t + r.s,
                            r.r ? e = Math.round(e) : o > e && e > -o && (e = 0),
                            r.type)
                                if (1 === r.type)
                                    if (n = r.l,
                                    2 === n)
                                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === n)
                                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                    else if (4 === n)
                                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                    else if (5 === n)
                                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                    else {
                                        for (i = r.xs0 + e + r.xs1,
                                        n = 1; n < r.l; n++)
                                            i += r["xn" + n] + r["xs" + (n + 1)];
                                        r.t[r.p] = i
                                    }
                                else
                                    -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else
                                r.t[r.p] = e + r.xs0;
                            r = r._next
                        }
                    else
                        for (; r; )
                            2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                            r = r._next;
                else
                    for (; r; ) {
                        if (2 !== r.type)
                            if (r.r && -1 !== r.type)
                                if (e = Math.round(r.s + r.c),
                                r.type) {
                                    if (1 === r.type) {
                                        for (n = r.l,
                                        i = r.xs0 + e + r.xs1,
                                        n = 1; n < r.l; n++)
                                            i += r["xn" + n] + r["xs" + (n + 1)];
                                        r.t[r.p] = i
                                    }
                                } else
                                    r.t[r.p] = e + r.xs0;
                            else
                                r.t[r.p] = r.e;
                        else
                            r.setRatio(t);
                        r = r._next
                    }
            }
            ,
            u._enableTransforms = function(t) {
                this._transform = this._transform || $t(this._target, r, !0),
                this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
            }
            ;
            var Vt = function(t) {
                this.t[this.p] = this.e,
                this.data._linkCSSP(this, this._next, null, !0)
            };
            u._addLazySet = function(t, e, i) {
                var n = this._firstPT = new yt(t,e,0,0,this._firstPT,2);
                n.e = i,
                n.setRatio = Vt,
                n.data = this
            }
            ,
            u._linkCSSP = function(t, e, i, n) {
                return t && (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
                n = !0),
                i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
                t._next = e,
                t._prev = i),
                t
            }
            ,
            u._mod = function(t) {
                for (var e = this._firstPT; e; )
                    "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
                    e = e._next
            }
            ,
            u._kill = function(e) {
                var i, n, r, o = e;
                if (e.autoAlpha || e.alpha) {
                    o = {};
                    for (n in e)
                        o[n] = e[n];
                    o.opacity = 1,
                    o.autoAlpha && (o.visibility = 1)
                }
                for (e.className && (i = this._classNamePT) && (r = i.xfirst,
                r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
                i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                this._classNamePT = null),
                i = this._firstPT; i; )
                    i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e),
                    n = i.plugin),
                    i = i._next;
                return t.prototype._kill.call(this, o)
            }
            ;
            var Gt = function(t, e, i) {
                var n, r, o, s;
                if (t.slice)
                    for (r = t.length; --r > -1; )
                        Gt(t[r], e, i);
                else
                    for (n = t.childNodes,
                    r = n.length; --r > -1; )
                        o = n[r],
                        s = o.type,
                        o.style && (e.push(et(o)),
                        i && i.push(o)),
                        1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Gt(o, e, i)
            };
            return s.cascadeTo = function(t, i, n) {
                var r, o, s, a, l = e.to(t, i, n), u = [l], c = [], h = [], f = [], p = e._internals.reservedProps;
                for (t = l._targets || l.target,
                Gt(t, c, f),
                l.render(i, !0, !0),
                Gt(t, h),
                l.render(0, !0, !0),
                l._enabled(!0),
                r = f.length; --r > -1; )
                    if (o = it(f[r], c[r], h[r]),
                    o.firstMPT) {
                        o = o.difs;
                        for (s in n)
                            p[s] && (o[s] = n[s]);
                        a = {};
                        for (s in o)
                            a[s] = c[r][s];
                        u.push(e.fromTo(f[r], i, a, o))
                    }
                return u
            }
            ,
            t.activate([s]),
            s
        }, !0),
        function() {
            var t = _gsScope._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function(t, e, i) {
                    return this._tween = i,
                    !0
                }
            })
              , e = function(t) {
                for (; t; )
                    t.f || t.blob || (t.m = Math.round),
                    t = t._next
            }
              , i = t.prototype;
            i._onInitAllProps = function() {
                for (var t, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1; )
                    a[o[s]] = Math.round;
                for (s = o.length; --s > -1; )
                    for (t = o[s],
                    i = r._firstPT; i; )
                        n = i._next,
                        i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c),
                        n && (n._prev = i._prev),
                        i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n),
                        i._next = i._prev = null,
                        r._propLookup[t] = l)),
                        i = n;
                return !1
            }
            ,
            i._add = function(t, e, i, n) {
                this._addTween(t, e, i, i + n, e, Math.round),
                this._overwriteProps.push(e)
            }
        }(),
        function() {
            _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.0",
                init: function(t, e, i, n) {
                    var r, o;
                    if ("function" != typeof t.setAttribute)
                        return !1;
                    for (r in e)
                        o = e[r],
                        "function" == typeof o && (o = o(n, t)),
                        this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r),
                        this._overwriteProps.push(r);
                    return !0
                }
            })
        }(),
        _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.0",
            API: 2,
            init: function(t, e, i, n) {
                "object" != typeof e && (e = {
                    rotation: e
                }),
                this.finals = {};
                var r, o, s, a, l, u, c = e.useRadians === !0 ? 2 * Math.PI : 360, h = 1e-6;
                for (r in e)
                    "useRadians" !== r && (a = e[r],
                    "function" == typeof a && (a = a(n, t)),
                    u = (a + "").split("_"),
                    o = u[0],
                    s = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()),
                    a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0,
                    l = a - s,
                    u.length && (o = u.join("_"),
                    -1 !== o.indexOf("short") && (l %= c,
                    l !== l % (c / 2) && (l = 0 > l ? l + c : l - c)),
                    -1 !== o.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)),
                    (l > h || -h > l) && (this._addTween(t, r, s, s + l, r),
                    this._overwriteProps.push(r)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t)
                    this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e; )
                        e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                        e = e._next
            }
        })._autoCSS = !0,
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope, o = r.com.greensock, s = 2 * Math.PI, a = Math.PI / 2, l = o._class, u = function(e, i) {
                var n = l("easing." + e, function() {}, !0)
                  , r = n.prototype = new t;
                return r.constructor = n,
                r.getRatio = i,
                n
            }, c = t.register || function() {}
            , h = function(t, e, i, n, r) {
                var o = l("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new n
                }, !0);
                return c(o, t),
                o
            }, f = function(t, e, i) {
                this.t = t,
                this.v = e,
                i && (this.next = i,
                i.prev = this,
                this.c = i.v - e,
                this.gap = i.t - t)
            }, p = function(e, i) {
                var n = l("easing." + e, function(t) {
                    this._p1 = t || 0 === t ? t : 1.70158,
                    this._p2 = 1.525 * this._p1
                }, !0)
                  , r = n.prototype = new t;
                return r.constructor = n,
                r.getRatio = i,
                r.config = function(t) {
                    return new n(t)
                }
                ,
                n
            }, d = h("Back", p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function(t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), m = l("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7,
                null == t ? t = .7 : t > 1 && (t = 1),
                this._p = 1 !== t ? e : 0,
                this._p1 = (1 - t) / 2,
                this._p2 = t,
                this._p3 = this._p1 + this._p2,
                this._calcEnd = i === !0
            }, !0), g = m.prototype = new t;
            return g.constructor = m,
            g.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }
            ,
            m.ease = new m(.7,.7),
            g.config = m.config = function(t, e, i) {
                return new m(t,e,i)
            }
            ,
            e = l("easing.SteppedEase", function(t) {
                t = t || 1,
                this._p1 = 1 / t,
                this._p2 = t + 1
            }, !0),
            g = e.prototype = new t,
            g.constructor = e,
            g.getRatio = function(t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
                (this._p2 * t >> 0) * this._p1
            }
            ,
            g.config = e.config = function(t) {
                return new e(t)
            }
            ,
            i = l("easing.RoughEase", function(e) {
                e = e || {};
                for (var i, n, r, o, s, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), p = h, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1; )
                    i = d ? Math.random() : 1 / h * p,
                    n = g ? g.getRatio(i) : i,
                    "none" === l ? r = v : "out" === l ? (o = 1 - i,
                    r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i,
                    r = o * o * .5 * v) : (o = 2 * (1 - i),
                    r = o * o * .5 * v),
                    d ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r,
                    m && (n > 1 ? n = 1 : 0 > n && (n = 0)),
                    u[c++] = {
                        x: i,
                        y: n
                    };
                for (u.sort(function(t, e) {
                    return t.x - e.x
                }),
                a = new f(1,1,null),
                p = h; --p > -1; )
                    s = u[p],
                    a = new f(s.x,s.y,a);
                this._prev = new f(0,0,0 !== a.t ? a : a.next)
            }, !0),
            g = i.prototype = new t,
            g.constructor = i,
            g.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t; )
                        e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t; )
                        e = e.prev;
                return this._prev = e,
                e.v + (t - e.t) / e.gap * e.c
            }
            ,
            g.config = function(t) {
                return new i(t)
            }
            ,
            i.ease = new i,
            h("Bounce", u("BounceOut", function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), u("BounceIn", function(t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), u("BounceInOut", function(t) {
                var e = .5 > t;
                return t = e ? 1 - 2 * t : 2 * t - 1,
                t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
                e ? .5 * (1 - t) : .5 * t + .5
            })),
            h("Circ", u("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), u("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), u("CircInOut", function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })),
            n = function(e, i, n) {
                var r = l("easing." + e, function(t, e) {
                    this._p1 = t >= 1 ? t : 1,
                    this._p2 = (e || n) / (1 > t ? t : 1),
                    this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0),
                    this._p2 = s / this._p2
                }, !0)
                  , o = r.prototype = new t;
                return o.constructor = r,
                o.getRatio = i,
                o.config = function(t, e) {
                    return new r(t,e)
                }
                ,
                r
            }
            ,
            h("Elastic", n("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), n("ElasticIn", function(t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
            }, .3), n("ElasticInOut", function(t) {
                return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)),
            h("Expo", u("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), u("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), u("ExpoInOut", function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })),
            h("Sine", u("SineOut", function(t) {
                return Math.sin(t * a)
            }), u("SineIn", function(t) {
                return -Math.cos(t * a) + 1
            }), u("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })),
            l("easing.EaseLookup", {
                find: function(e) {
                    return t.map[e]
                }
            }, !0),
            c(r.SlowMo, "SlowMo", "ease,"),
            c(i, "RoughEase", "ease,"),
            c(e, "SteppedEase", "ease,"),
            d
        }, !0)
    }),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {}
          , n = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!n.TweenLite) {
            var r, o, s, a, l, u = function(t) {
                var e, i = t.split("."), r = n;
                for (e = 0; e < i.length; e++)
                    r[i[e]] = r = r[i[e]] || {};
                return r
            }, c = u("com.greensock"), h = 1e-10, f = function(t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++]))
                    ;
                return i
            }, p = function() {}, d = function() {
                var t = Object.prototype.toString
                  , e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(), m = {}, g = function(r, o, s, a) {
                this.sc = m[r] ? m[r].sc : [],
                m[r] = this,
                this.gsClass = null,
                this.func = s;
                var l = [];
                this.check = function(c) {
                    for (var h, f, p, d, v, y = o.length, _ = y; --y > -1; )
                        (h = m[o[y]] || new g(o[y],[])).gsClass ? (l[y] = h.gsClass,
                        _--) : c && h.sc.push(this);
                    if (0 === _ && s) {
                        if (f = ("com.greensock." + r).split("."),
                        p = f.pop(),
                        d = u(f.join("."))[p] = this.gsClass = s.apply(s, l),
                        a)
                            if (n[p] = i[p] = d,
                            v = "undefined" != typeof module && module.exports,
                            !v && "function" == typeof define && define.amd)
                                define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                    return d
                                });
                            else if (v)
                                if (r === e) {
                                    module.exports = i[e] = d;
                                    for (y in i)
                                        d[y] = i[y]
                                } else
                                    i[e] && (i[e][p] = d);
                        for (y = 0; y < this.sc.length; y++)
                            this.sc[y].check()
                    }
                }
                ,
                this.check(!0)
            }, v = t._gsDefine = function(t, e, i, n) {
                return new g(t,e,i,n)
            }
            , y = c._class = function(t, e, i) {
                return e = e || function() {}
                ,
                v(t, [], function() {
                    return e
                }, i),
                e
            }
            ;
            v.globals = n;
            var _ = [0, 0, 1, 1]
              , x = y("easing.Ease", function(t, e, i, n) {
                this._func = t,
                this._type = i || 0,
                this._power = n || 0,
                this._params = e ? _.concat(e) : _
            }, !0)
              , w = x.map = {}
              , T = x.register = function(t, e, i, n) {
                for (var r, o, s, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; )
                    for (o = l[u],
                    r = n ? y("easing." + o, null, !0) : c.easing[o] || {},
                    s = h.length; --s > -1; )
                        a = h[s],
                        w[o + "." + a] = w[a + o] = r[a] = t.getRatio ? t : t[a] || new t
            }
            ;
            for (s = x.prototype,
            s._calcEnd = !1,
            s.getRatio = function(t) {
                if (this._func)
                    return this._params[0] = t,
                    this._func.apply(null, this._params);
                var e = this._type
                  , i = this._power
                  , n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
                1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }
            ,
            r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
            o = r.length; --o > -1; )
                s = r[o] + ",Power" + o,
                T(new x(null,null,1,o), s, "easeOut", !0),
                T(new x(null,null,2,o), s, "easeIn" + (0 === o ? ",easeNone" : "")),
                T(new x(null,null,3,o), s, "easeInOut");
            w.linear = c.easing.Linear.easeIn,
            w.swing = c.easing.Quad.easeInOut;
            var b = y("events.EventDispatcher", function(t) {
                this._listeners = {},
                this._eventTarget = t || this
            });
            s = b.prototype,
            s.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var o, s, u = this._listeners[t], c = 0;
                for (this !== a || l || a.wake(),
                null == u && (this._listeners[t] = u = []),
                s = u.length; --s > -1; )
                    o = u[s],
                    o.c === e && o.s === i ? u.splice(s, 1) : 0 === c && o.pr < r && (c = s + 1);
                u.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                })
            }
            ,
            s.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1; )
                        if (n[i].c === e)
                            return void n.splice(i, 1)
            }
            ,
            s.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length,
                    e > 1 && (r = r.slice(0)),
                    i = this._eventTarget; --e > -1; )
                        n = r[e],
                        n && (n.up ? n.c.call(n.s || i, {
                            type: t,
                            target: i
                        }) : n.c.call(n.s || i))
            }
            ;
            var S = t.requestAnimationFrame
              , C = t.cancelAnimationFrame
              , k = Date.now || function() {
                return (new Date).getTime()
            }
              , E = k();
            for (r = ["ms", "moz", "webkit", "o"],
            o = r.length; --o > -1 && !S; )
                S = t[r[o] + "RequestAnimationFrame"],
                C = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"];
            y("Ticker", function(t, e) {
                var i, n, r, o, s, u = this, c = k(), f = !(e === !1 || !S) && "auto", d = 500, m = 33, g = "tick", v = function(t) {
                    var e, a, l = k() - E;
                    l > d && (c += l - m),
                    E += l,
                    u.time = (E - c) / 1e3,
                    e = u.time - s,
                    (!i || e > 0 || t === !0) && (u.frame++,
                    s += e + (e >= o ? .004 : o - e),
                    a = !0),
                    t !== !0 && (r = n(v)),
                    a && u.dispatchEvent(g)
                };
                b.call(u),
                u.time = u.frame = 0,
                u.tick = function() {
                    v(!0)
                }
                ,
                u.lagSmoothing = function(t, e) {
                    d = t || 1 / h,
                    m = Math.min(e, d, 0)
                }
                ,
                u.sleep = function() {
                    null != r && (f && C ? C(r) : clearTimeout(r),
                    n = p,
                    r = null,
                    u === a && (l = !1))
                }
                ,
                u.wake = function(t) {
                    null !== r ? u.sleep() : t ? c += -E + (E = k()) : u.frame > 10 && (E = k() - d + 5),
                    n = 0 === i ? p : f && S ? S : function(t) {
                        return setTimeout(t, 1e3 * (s - u.time) + 1 | 0)
                    }
                    ,
                    u === a && (l = !0),
                    v(2)
                }
                ,
                u.fps = function(t) {
                    return arguments.length ? (i = t,
                    o = 1 / (i || 60),
                    s = this.time + o,
                    void u.wake()) : i
                }
                ,
                u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(),
                    f = t,
                    void u.fps(i)) : f
                }
                ,
                u.fps(t),
                setTimeout(function() {
                    "auto" === f && u.frame < 5 && "hidden" !== document.visibilityState && u.useRAF(!1)
                }, 1500)
            }),
            s = c.Ticker.prototype = new c.events.EventDispatcher,
            s.constructor = c.Ticker;
            var O = y("core.Animation", function(t, e) {
                if (this.vars = e = e || {},
                this._duration = this._totalDuration = t || 0,
                this._delay = Number(e.delay) || 0,
                this._timeScale = 1,
                this._active = e.immediateRender === !0,
                this.data = e.data,
                this._reversed = e.reversed === !0,
                V) {
                    l || a.wake();
                    var i = this.vars.useFrames ? U : V;
                    i.add(this, i._time),
                    this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new c.Ticker,
            s = O.prototype,
            s._dirty = s._gc = s._initted = s._paused = !1,
            s._totalTime = s._time = 0,
            s._rawPrevTime = -1,
            s._next = s._last = s._onUpdate = s._timeline = s.timeline = null,
            s._paused = !1;
            var P = function() {
                l && k() - E > 2e3 && a.wake(),
                setTimeout(P, 2e3)
            };
            P(),
            s.play = function(t, e) {
                return null != t && this.seek(t, e),
                this.reversed(!1).paused(!1)
            }
            ,
            s.pause = function(t, e) {
                return null != t && this.seek(t, e),
                this.paused(!0)
            }
            ,
            s.resume = function(t, e) {
                return null != t && this.seek(t, e),
                this.paused(!1)
            }
            ,
            s.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }
            ,
            s.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }
            ,
            s.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
            }
            ,
            s.render = function(t, e, i) {}
            ,
            s.invalidate = function() {
                return this._time = this._totalTime = 0,
                this._initted = this._gc = !1,
                this._rawPrevTime = -1,
                (this._gc || !this.timeline) && this._enabled(!0),
                this
            }
            ,
            s.isActive = function() {
                var t, e = this._timeline, i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }
            ,
            s._enabled = function(t, e) {
                return l || a.wake(),
                this._gc = !t,
                this._active = this.isActive(),
                e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
            }
            ,
            s._kill = function(t, e) {
                return this._enabled(!1, !1)
            }
            ,
            s.kill = function(t, e) {
                return this._kill(t, e),
                this
            }
            ,
            s._uncache = function(t) {
                for (var e = t ? this : this.timeline; e; )
                    e._dirty = !0,
                    e = e.timeline;
                return this
            }
            ,
            s._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1; )
                    "{self}" === t[e] && (i[e] = this);
                return i
            }
            ,
            s._callback = function(t) {
                var e = this.vars
                  , i = e[t]
                  , n = e[t + "Params"]
                  , r = e[t + "Scope"] || e.callbackScope || this
                  , o = n ? n.length : 0;
                switch (o) {
                case 0:
                    i.call(r);
                    break;
                case 1:
                    i.call(r, n[0]);
                    break;
                case 2:
                    i.call(r, n[0], n[1]);
                    break;
                default:
                    i.apply(r, n)
                }
            }
            ,
            s.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length)
                        return r[t];
                    null == e ? delete r[t] : (r[t] = e,
                    r[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                    r[t + "Scope"] = n),
                    "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }
            ,
            s.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
                this._delay = t,
                this) : this._delay
            }
            ,
            s.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t,
                this._uncache(!0),
                this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                this) : (this._dirty = !1,
                this._duration)
            }
            ,
            s.totalDuration = function(t) {
                return this._dirty = !1,
                arguments.length ? this.duration(t) : this._totalDuration
            }
            ,
            s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(),
                this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }
            ,
            s.totalTime = function(t, e, i) {
                if (l || a.wake(),
                !arguments.length)
                    return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()),
                    this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration
                          , r = this._timeline;
                        if (t > n && !i && (t = n),
                        this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale,
                        r._dirty || this._uncache(!1),
                        r._timeline)
                            for (; r._timeline; )
                                r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                                r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1),
                    (this._totalTime !== t || 0 === this._duration) && (I.length && Q(),
                    this.render(t, e, !1),
                    I.length && Q())
                }
                return this
            }
            ,
            s.progress = s.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }
            ,
            s.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t,
                this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                this) : this._startTime
            }
            ,
            s.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }
            ,
            s.timeScale = function(t) {
                if (!arguments.length)
                    return this._timeScale;
                if (t = t || h,
                this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime
                      , i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t,
                this._uncache(!1)
            }
            ,
            s.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t,
                this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                this) : this._reversed
            }
            ,
            s.paused = function(t) {
                if (!arguments.length)
                    return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (l || t || a.wake(),
                e = n.rawTime(),
                i = e - this._pauseTime,
                !t && n.smoothChildTiming && (this._startTime += i,
                this._uncache(!1)),
                this._pauseTime = t ? e : null,
                this._paused = t,
                this._active = this.isActive(),
                !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
                this.render(e, e === this._totalTime, !0))),
                this._gc && !t && this._enabled(!0, !1),
                this
            }
            ;
            var M = y("core.SimpleTimeline", function(t) {
                O.call(this, 0, t),
                this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = M.prototype = new O,
            s.constructor = M,
            s.kill()._gc = !1,
            s._first = s._last = s._recent = null,
            s._sortChildren = !1,
            s.add = s.insert = function(t, e, i, n) {
                var r, o;
                if (t._startTime = Number(e || 0) + t._delay,
                t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                t.timeline && t.timeline._remove(t, !0),
                t.timeline = t._timeline = this,
                t._gc && t._enabled(!0, !0),
                r = this._last,
                this._sortChildren)
                    for (o = t._startTime; r && r._startTime > o; )
                        r = r._prev;
                return r ? (t._next = r._next,
                r._next = t) : (t._next = this._first,
                this._first = t),
                t._next ? t._next._prev = t : this._last = t,
                t._prev = r,
                this._recent = t,
                this._timeline && this._uncache(!0),
                this
            }
            ,
            s._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0),
                t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
                t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
                t._next = t._prev = t.timeline = null,
                t === this._recent && (this._recent = this._last),
                this._timeline && this._uncache(!0)),
                this
            }
            ,
            s.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                    n = r._next,
                    (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                    r = n
            }
            ,
            s.rawTime = function() {
                return l || a.wake(),
                this._totalTime
            }
            ;
            var A = y("TweenLite", function(e, i, n) {
                if (O.call(this, i, n),
                this.render = A.prototype.render,
                null == e)
                    throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : A.selector(e) || e;
                var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? Y[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l],
                (a || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                    for (this._targets = s = f(e),
                    this._propLookup = [],
                    this._siblings = [],
                    r = 0; r < s.length; r++)
                        o = s[r],
                        o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1),
                        this._targets = s = s.concat(f(o))) : (this._siblings[r] = Z(o, this, !1),
                        1 === l && this._siblings[r].length > 1 && $(o, this, null, 1, this._siblings[r])) : (o = s[r--] = A.selector(o),
                        "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                else
                    this._propLookup = {},
                    this._siblings = Z(e, this, !1),
                    1 === l && this._siblings.length > 1 && $(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h,
                this.render(Math.min(0, -this._delay)))
            }, !0)
              , L = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
            }
              , D = function(t, e) {
                var i, n = {};
                for (i in t)
                    X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = t[i],
                    delete t[i]);
                t.css = n
            };
            s = A.prototype = new O,
            s.constructor = A,
            s.kill()._gc = !1,
            s.ratio = 0,
            s._firstPT = s._targets = s._overwrittenProps = s._startAt = null,
            s._notifyPluginsOfEnabled = s._lazy = !1,
            A.version = "1.19.0",
            A.defaultEase = s._ease = new x(null,null,1,1),
            A.defaultOverwrite = "auto",
            A.ticker = a,
            A.autoSleep = 120,
            A.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }
            ,
            A.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (A.selector = i,
                i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            }
            ;
            var I = []
              , R = {}
              , N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
              , F = function(t) {
                for (var e, i = this._firstPT, n = 1e-6; i; )
                    e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s,
                    i.m ? e = i.m(e, this._target || i.t) : n > e && e > -n && (e = 0),
                    i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                    i = i._next
            }
              , z = function(t, e, i, n) {
                var r, o, s, a, l, u, c, h = [t, e], f = 0, p = "", d = 0;
                for (h.start = t,
                i && (i(h),
                t = h[0],
                e = h[1]),
                h.length = 0,
                r = t.match(N) || [],
                o = e.match(N) || [],
                n && (n._next = null,
                n.blob = 1,
                h._firstPT = h._applyPT = n),
                l = o.length,
                a = 0; l > a; a++)
                    c = o[a],
                    u = e.substr(f, e.indexOf(c, f) - f),
                    p += u || !a ? u : ",",
                    f += u.length,
                    d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1),
                    c === r[a] || r.length <= a ? p += c : (p && (h.push(p),
                    p = ""),
                    s = parseFloat(r[a]),
                    h.push(s),
                    h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: s,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
                        f: 0,
                        m: d && 4 > d ? Math.round : 0
                    }),
                    f += c.length;
                return p += e.substr(f),
                p && h.push(p),
                h.setRatio = F,
                h
            }
              , j = function(t, e, i, n, r, o, s, a, l) {
                "function" == typeof n && (n = n(l || 0, t));
                var u, c, h = "get" === i ? t[e] : i, f = typeof t[e], p = "string" == typeof n && "=" === n.charAt(1), d = {
                    t: t,
                    p: e,
                    s: h,
                    f: "function" === f,
                    pg: 0,
                    n: r || e,
                    m: o ? "function" == typeof o ? o : Math.round : 0,
                    pr: 0,
                    c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                };
                return "number" !== f && ("function" === f && "get" === i && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                d.s = h = s ? t[c](s) : t[c]()),
                "string" == typeof h && (s || isNaN(h)) ? (d.fp = s,
                u = z(h, n, a || A.defaultStringFilter, d),
                d = {
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0,
                    m: 0
                }) : p || (d.s = parseFloat(h),
                d.c = parseFloat(n) - d.s || 0)),
                d.c ? ((d._next = this._firstPT) && (d._next._prev = d),
                this._firstPT = d,
                d) : void 0
            }
              , q = A._internals = {
                isArray: d,
                isSelector: L,
                lazyTweens: I,
                blobDif: z
            }
              , W = A._plugins = {}
              , B = q.tweenLookup = {}
              , H = 0
              , X = q.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1
            }
              , Y = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            }
              , U = O._rootFramesTimeline = new M
              , V = O._rootTimeline = new M
              , G = 30
              , Q = q.lazyRender = function() {
                var t, e = I.length;
                for (R = {}; --e > -1; )
                    t = I[e],
                    t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0),
                    t._lazy = !1);
                I.length = 0
            }
            ;
            V._startTime = a.time,
            U._startTime = a.frame,
            V._active = U._active = !0,
            setTimeout(Q, 1),
            O._updateRoot = A.render = function() {
                var t, e, i;
                if (I.length && Q(),
                V.render((a.time - V._startTime) * V._timeScale, !1, !1),
                U.render((a.frame - U._startTime) * U._timeScale, !1, !1),
                I.length && Q(),
                a.frame >= G) {
                    G = a.frame + (parseInt(A.autoSleep, 10) || 120);
                    for (i in B) {
                        for (e = B[i].tweens,
                        t = e.length; --t > -1; )
                            e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete B[i]
                    }
                    if (i = V._first,
                    (!i || i._paused) && A.autoSleep && !U._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused; )
                            i = i._next;
                        i || a.sleep()
                    }
                }
            }
            ,
            a.addEventListener("tick", O._updateRoot);
            var Z = function(t, e, i) {
                var n, r, o = t._gsTweenID;
                if (B[o || (t._gsTweenID = o = "t" + H++)] || (B[o] = {
                    target: t,
                    tweens: []
                }),
                e && (n = B[o].tweens,
                n[r = n.length] = e,
                i))
                    for (; --r > -1; )
                        n[r] === e && n.splice(r, 1);
                return B[o].tweens
            }
              , J = function(t, e, i, n) {
                var r, o, s = t.vars.onOverwrite;
                return s && (r = s(t, e, i, n)),
                s = A.onOverwrite,
                s && (o = s(t, e, i, n)),
                r !== !1 && o !== !1
            }
              , $ = function(t, e, i, n, r) {
                var o, s, a, l;
                if (1 === n || n >= 4) {
                    for (l = r.length,
                    o = 0; l > o; o++)
                        if ((a = r[o]) !== e)
                            a._gc || a._kill(null, t, e) && (s = !0);
                        else if (5 === n)
                            break;
                    return s
                }
                var u, c = e._startTime + h, f = [], p = 0, d = 0 === e._duration;
                for (o = r.length; --o > -1; )
                    (a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || K(e, 0, d),
                    0 === K(a, u, d) && (f[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (f[p++] = a)));
                for (o = p; --o > -1; )
                    if (a = f[o],
                    2 === n && a._kill(i, t, e) && (s = !0),
                    2 !== n || !a._firstPT && a._initted) {
                        if (2 !== n && !J(a, e))
                            continue;
                        a._enabled(!1, !1) && (s = !0)
                    }
                return s
            }
              , K = function(t, e, i) {
                for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline; ) {
                    if (o += n._startTime,
                    r *= n._timeScale,
                    n._paused)
                        return -100;
                    n = n._timeline
                }
                return o /= r,
                o > e ? o - e : i && o === e || !t._initted && 2 * h > o - e ? h : (o += t.totalDuration() / t._timeScale / r) > e + h ? 0 : o - e - h
            };
            s._init = function() {
                var t, e, i, n, r, o, s = this.vars, a = this._overwrittenProps, l = this._duration, u = !!s.immediateRender, c = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0),
                    this._startAt.kill()),
                    r = {};
                    for (n in s.startAt)
                        r[n] = s.startAt[n];
                    if (r.overwrite = !1,
                    r.immediateRender = !0,
                    r.lazy = u && s.lazy !== !1,
                    r.startAt = r.delay = null,
                    this._startAt = A.to(this.target, 0, r),
                    u)
                        if (this._time > 0)
                            this._startAt = null;
                        else if (0 !== l)
                            return
                } else if (s.runBackwards && 0 !== l)
                    if (this._startAt)
                        this._startAt.render(-1, !0),
                        this._startAt.kill(),
                        this._startAt = null;
                    else {
                        0 !== this._time && (u = !1),
                        i = {};
                        for (n in s)
                            X[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0,
                        i.data = "isFromStart",
                        i.lazy = u && s.lazy !== !1,
                        i.immediateRender = u,
                        this._startAt = A.to(this.target, 0, i),
                        u) {
                            if (0 === this._time)
                                return
                        } else
                            this._startAt._init(),
                            this._startAt._enabled(!1),
                            this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c,s.easeParams) : w[c] || A.defaultEase : A.defaultEase,
                s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)),
                this._easeType = this._ease._type,
                this._easePower = this._ease._power,
                this._firstPT = null,
                this._targets)
                    for (o = this._targets.length,
                    t = 0; o > t; t++)
                        this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else
                    e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && A._onPluginEvent("_onInitAllProps", this),
                a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
                s.runBackwards)
                    for (i = this._firstPT; i; )
                        i.s += i.c,
                        i.c = -i.c,
                        i = i._next;
                this._onUpdate = s.onUpdate,
                this._initted = !0
            }
            ,
            s._initProps = function(e, i, n, r, o) {
                var s, a, l, u, c, h;
                if (null == e)
                    return !1;
                R[e._gsTweenID] && Q(),
                this.vars.css || e.style && e !== t && e.nodeType && W.css && this.vars.autoCSS !== !1 && D(this.vars, e);
                for (s in this.vars)
                    if (h = this.vars[s],
                    X[s])
                        h && (h instanceof Array || h.push && d(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                    else if (W[s] && (u = new W[s])._onInitTween(e, this.vars[s], this, o)) {
                        for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: u,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: s,
                            pg: 1,
                            pr: u._priority,
                            m: 0
                        },
                        a = u._overwriteProps.length; --a > -1; )
                            i[u._overwriteProps[a]] = this._firstPT;
                        (u._priority || u._onInitAllProps) && (l = !0),
                        (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0),
                        c._next && (c._next._prev = c)
                    } else
                        i[s] = j.call(this, e, s, "get", h, s, 0, null, this.vars.stringFilter, o);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && $(e, this, i, this._overwrite, n) ? (this._kill(i, e),
                this._initProps(e, i, n, r, o)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0),
                l)
            }
            ,
            s.render = function(t, e, i) {
                var n, r, o, s, a = this._time, l = this._duration, u = this._rawPrevTime;
                if (t >= l - 1e-7)
                    this._totalTime = this._time = l,
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                    this._reversed || (n = !0,
                    r = "onComplete",
                    i = i || this._timeline.autoRemoveChildren),
                    0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                    (0 > u || 0 >= t && t >= -1e-7 || u === h && "isPause" !== this.data) && u !== t && (i = !0,
                    u > h && (r = "onReverseComplete")),
                    this._rawPrevTime = s = !e || t || u === t ? t : h);
                else if (1e-7 > t)
                    this._totalTime = this._time = 0,
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                    (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete",
                    n = this._reversed),
                    0 > t && (this._active = !1,
                    0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== h || "isPause" !== this.data) && (i = !0),
                    this._rawPrevTime = s = !e || t || u === t ? t : h)),
                    this._initted || (i = !0);
                else if (this._totalTime = this._time = t,
                this._easeType) {
                    var c = t / l
                      , f = this._easeType
                      , p = this._easePower;
                    (1 === f || 3 === f && c >= .5) && (c = 1 - c),
                    3 === f && (c *= 2),
                    1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c),
                    1 === f ? this.ratio = 1 - c : 2 === f ? this.ratio = c : .5 > t / l ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                } else
                    this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(),
                        !this._initted || this._gc)
                            return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                            return this._time = this._totalTime = a,
                            this._rawPrevTime = u,
                            I.push(this),
                            void (this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1),
                    this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0),
                    0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                    this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))),
                    o = this._firstPT; o; )
                        o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                        o = o._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i),
                    e || (this._time !== a || n || i) && this._callback("onUpdate")),
                    r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i),
                    n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    this._active = !1),
                    !e && this.vars[r] && this._callback(r),
                    0 === l && this._rawPrevTime === h && s !== h && (this._rawPrevTime = 0))
                }
            }
            ,
            s._kill = function(t, e, i) {
                if ("all" === t && (t = null),
                null == t && (null == e || e === this.target))
                    return this._lazy = !1,
                    this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
                var n, r, o, s, a, l, u, c, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((d(e) || L(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1; )
                        this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1; )
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {},
                                this._overwrittenProps = this._overwrittenProps || [],
                                r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target)
                            return !1;
                        a = this._propLookup,
                        r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a,
                        c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill),
                        i && (A.onOverwrite || this.vars.onOverwrite)) {
                            for (o in u)
                                a[o] && (h || (h = []),
                                h.push(o));
                            if ((h || !t) && !J(this, i, e, h))
                                return !1
                        }
                        for (o in u)
                            (s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s,
                            l = !0),
                            s.pg && s.t._kill(u) && (l = !0),
                            s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next),
                            s._next && (s._next._prev = s._prev),
                            s._next = s._prev = null),
                            delete a[o]),
                            c && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }
            ,
            s.invalidate = function() {
                return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this),
                this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                this._propLookup = this._targets ? {} : [],
                O.prototype.invalidate.call(this),
                this.vars.immediateRender && (this._time = -h,
                this.render(Math.min(0, -this._delay))),
                this
            }
            ,
            s._enabled = function(t, e) {
                if (l || a.wake(),
                t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1; )
                            this._siblings[i] = Z(n[i], this, !0);
                    else
                        this._siblings = Z(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e),
                !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }
            ,
            A.to = function(t, e, i) {
                return new A(t,e,i)
            }
            ,
            A.from = function(t, e, i) {
                return i.runBackwards = !0,
                i.immediateRender = 0 != i.immediateRender,
                new A(t,e,i)
            }
            ,
            A.fromTo = function(t, e, i, n) {
                return n.startAt = i,
                n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                new A(t,e,n)
            }
            ,
            A.delayedCall = function(t, e, i, n, r) {
                return new A(e,0,{
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }
            ,
            A.set = function(t, e) {
                return new A(t,0,e)
            }
            ,
            A.getTweensOf = function(t, e) {
                if (null == t)
                    return [];
                t = "string" != typeof t ? t : A.selector(t) || t;
                var i, n, r, o;
                if ((d(t) || L(t)) && "number" != typeof t[0]) {
                    for (i = t.length,
                    n = []; --i > -1; )
                        n = n.concat(A.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1; )
                        for (o = n[i],
                        r = i; --r > -1; )
                            o === n[r] && n.splice(i, 1)
                } else
                    for (n = Z(t).concat(),
                    i = n.length; --i > -1; )
                        (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }
            ,
            A.killTweensOf = A.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e,
                e = !1);
                for (var n = A.getTweensOf(t, e), r = n.length; --r > -1; )
                    n[r]._kill(i, t)
            }
            ;
            var tt = y("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","),
                this._propName = this._overwriteProps[0],
                this._priority = e || 0,
                this._super = tt.prototype
            }, !0);
            if (s = tt.prototype,
            tt.version = "1.19.0",
            tt.API = 2,
            s._firstPT = null,
            s._addTween = j,
            s.setRatio = F,
            s._kill = function(t) {
                var e, i = this._overwriteProps, n = this._firstPT;
                if (null != t[this._propName])
                    this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1; )
                        null != t[i[e]] && i.splice(e, 1);
                for (; n; )
                    null != t[n.n] && (n._next && (n._next._prev = n._prev),
                    n._prev ? (n._prev._next = n._next,
                    n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                    n = n._next;
                return !1
            }
            ,
            s._mod = s._roundProps = function(t) {
                for (var e, i = this._firstPT; i; )
                    e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")],
                    e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                    i = i._next
            }
            ,
            A._onPluginEvent = function(t, e) {
                var i, n, r, o, s, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a; ) {
                        for (s = a._next,
                        n = r; n && n.pr > a.pr; )
                            n = n._next;
                        (a._prev = n ? n._prev : o) ? a._prev._next = a : r = a,
                        (a._next = n) ? n._prev = a : o = a,
                        a = s
                    }
                    a = e._firstPT = r
                }
                for (; a; )
                    a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                    a = a._next;
                return i
            }
            ,
            tt.activate = function(t) {
                for (var e = t.length; --e > -1; )
                    t[e].API === tt.API && (W[(new t[e])._propName] = t[e]);
                return !0
            }
            ,
            v.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API))
                    throw "illegal plugin definition.";
                var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, o = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_mod",
                    mod: "_mod",
                    initAll: "_onInitAllProps"
                }, s = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                    tt.call(this, i, n),
                    this._overwriteProps = r || []
                }, t.global === !0), a = s.prototype = new tt(i);
                a.constructor = s,
                s.API = t.API;
                for (e in o)
                    "function" == typeof t[e] && (a[o[e]] = t[e]);
                return s.version = t.version,
                tt.activate([s]),
                s
            }
            ,
            r = t._gsQueue) {
                for (o = 0; o < r.length; o++)
                    r[o]();
                for (s in m)
                    m[s].func || t.console.log("GSAP encountered missing dependency: " + s)
            }
            l = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    !function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
    }(this, function() {
        "use strict";
        var t = function() {};
        t.version = "2.0.5",
        window.addEventListener("mousewheel", function() {});
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function(n) {
            var o, s, a = "ScrollMagic.Controller", l = "FORWARD", u = "REVERSE", c = "PAUSED", h = i.defaults, f = this, p = r.extend({}, h, n), d = [], m = !1, g = 0, v = c, y = !0, _ = 0, x = !0, w = function() {
                for (var t in p)
                    h.hasOwnProperty(t) || delete p[t];
                if (p.container = r.get.elements(p.container)[0],
                !p.container)
                    throw a + " init failed.";
                y = p.container === window || p.container === document.body || !document.body.contains(p.container),
                y && (p.container = window),
                _ = S(),
                p.container.addEventListener("resize", O),
                p.container.addEventListener("scroll", O),
                p.refreshInterval = parseInt(p.refreshInterval) || h.refreshInterval,
                T()
            }, T = function() {
                p.refreshInterval > 0 && (s = window.setTimeout(P, p.refreshInterval))
            }, b = function() {
                return p.vertical ? r.get.scrollTop(p.container) : r.get.scrollLeft(p.container)
            }, S = function() {
                return p.vertical ? r.get.height(p.container) : r.get.width(p.container)
            }, C = this._setScrollPos = function(t) {
                p.vertical ? y ? window.scrollTo(r.get.scrollLeft(), t) : p.container.scrollTop = t : y ? window.scrollTo(t, r.get.scrollTop()) : p.container.scrollLeft = t
            }
            , k = function() {
                if (x && m) {
                    var t = r.type.Array(m) ? m : d.slice(0);
                    m = !1;
                    var e = g;
                    g = f.scrollPos();
                    var i = g - e;
                    0 !== i && (v = i > 0 ? l : u),
                    v === u && t.reverse(),
                    t.forEach(function(t) {
                        t.update(!0)
                    })
                }
            }, E = function() {
                o = r.rAF(k)
            }, O = function(t) {
                "resize" == t.type && (_ = S(),
                v = c),
                m !== !0 && (m = !0,
                E())
            }, P = function() {
                if (!y && _ != S()) {
                    var t;
                    try {
                        t = new Event("resize",{
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (e) {
                        t = document.createEvent("Event"),
                        t.initEvent("resize", !1, !1)
                    }
                    p.container.dispatchEvent(t)
                }
                d.forEach(function(t) {
                    t.refresh()
                }),
                T()
            };
            this._options = p;
            var M = function(t) {
                if (t.length <= 1)
                    return t;
                var e = t.slice(0);
                return e.sort(function(t, e) {
                    return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                }),
                e
            };
            return this.addScene = function(e) {
                if (r.type.Array(e))
                    e.forEach(function(t) {
                        f.addScene(t)
                    });
                else if (e instanceof t.Scene)
                    if (e.controller() !== f)
                        e.addTo(f);
                    else if (d.indexOf(e) < 0) {
                        d.push(e),
                        d = M(d),
                        e.on("shift.controller_sort", function() {
                            d = M(d)
                        });
                        for (var i in p.globalSceneOptions)
                            e[i] && e[i].call(e, p.globalSceneOptions[i])
                    }
                return f
            }
            ,
            this.removeScene = function(t) {
                if (r.type.Array(t))
                    t.forEach(function(t) {
                        f.removeScene(t)
                    });
                else {
                    var e = d.indexOf(t);
                    e > -1 && (t.off("shift.controller_sort"),
                    d.splice(e, 1),
                    t.remove())
                }
                return f
            }
            ,
            this.updateScene = function(e, i) {
                return r.type.Array(e) ? e.forEach(function(t) {
                    f.updateScene(t, i)
                }) : i ? e.update(!0) : m !== !0 && e instanceof t.Scene && (m = m || [],
                -1 == m.indexOf(e) && m.push(e),
                m = M(m),
                E()),
                f
            }
            ,
            this.update = function(t) {
                return O({
                    type: "resize"
                }),
                t && k(),
                f
            }
            ,
            this.scrollTo = function(i, n) {
                if (r.type.Number(i))
                    C.call(p.container, i, n);
                else if (i instanceof t.Scene)
                    i.controller() === f && f.scrollTo(i.scrollOffset(), n);
                else if (r.type.Function(i))
                    C = i;
                else {
                    var o = r.get.elements(i)[0];
                    if (o) {
                        for (; o.parentNode.hasAttribute(e); )
                            o = o.parentNode;
                        var s = p.vertical ? "top" : "left"
                          , a = r.get.offset(p.container)
                          , l = r.get.offset(o);
                        y || (a[s] -= f.scrollPos()),
                        f.scrollTo(l[s] - a[s], n)
                    }
                }
                return f
            }
            ,
            this.scrollPos = function(t) {
                return arguments.length ? (r.type.Function(t) && (b = t),
                f) : b.call(f)
            }
            ,
            this.info = function(t) {
                var e = {
                    size: _,
                    vertical: p.vertical,
                    scrollPos: g,
                    scrollDirection: v,
                    container: p.container,
                    isDocument: y
                };
                return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
            }
            ,
            this.loglevel = function() {
                return f
            }
            ,
            this.enabled = function(t) {
                return arguments.length ? (x != t && (x = !!t,
                f.updateScene(d, !0)),
                f) : x
            }
            ,
            this.destroy = function(t) {
                window.clearTimeout(s);
                for (var e = d.length; e--; )
                    d[e].destroy(t);
                return p.container.removeEventListener("resize", O),
                p.container.removeEventListener("scroll", O),
                r.cAF(o),
                null
            }
            ,
            w(),
            f
        }
        ;
        var i = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        t.Controller.addOption = function(t, e) {
            i.defaults[t] = e
        }
        ,
        t.Controller.extend = function(e) {
            var i = this;
            t.Controller = function() {
                return i.apply(this, arguments),
                this.$super = r.extend({}, this),
                e.apply(this, arguments) || this
            }
            ,
            r.extend(t.Controller, i),
            t.Controller.prototype = i.prototype,
            t.Controller.prototype.constructor = t.Controller
        }
        ,
        t.Scene = function(i) {
            var o, s, a = "BEFORE", l = "DURING", u = "AFTER", c = n.defaults, h = this, f = r.extend({}, c, i), p = a, d = 0, m = {
                start: 0,
                end: 0
            }, g = 0, v = !0, y = function() {
                for (var t in f)
                    c.hasOwnProperty(t) || delete f[t];
                for (var e in c)
                    E(e);
                C()
            }, _ = {};
            this.on = function(t, e) {
                return r.type.Function(e) && (t = t.trim().split(" "),
                t.forEach(function(t) {
                    var i = t.split(".")
                      , n = i[0]
                      , r = i[1];
                    "*" != n && (_[n] || (_[n] = []),
                    _[n].push({
                        namespace: r || "",
                        callback: e
                    }))
                })),
                h
            }
            ,
            this.off = function(t, e) {
                return t ? (t = t.trim().split(" "),
                t.forEach(function(t) {
                    var i = t.split(".")
                      , n = i[0]
                      , r = i[1] || ""
                      , o = "*" === n ? Object.keys(_) : [n];
                    o.forEach(function(t) {
                        for (var i = _[t] || [], n = i.length; n--; ) {
                            var o = i[n];
                            !o || r !== o.namespace && "*" !== r || e && e != o.callback || i.splice(n, 1)
                        }
                        i.length || delete _[t]
                    })
                }),
                h) : h
            }
            ,
            this.trigger = function(e, i) {
                if (e) {
                    var n = e.trim().split(".")
                      , r = n[0]
                      , o = n[1]
                      , s = _[r];
                    s && s.forEach(function(e) {
                        o && o !== e.namespace || e.callback.call(h, new t.Event(r,e.namespace,h,i))
                    })
                }
                return h
            }
            ,
            h.on("change.internal", function(t) {
                "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? T() : "reverse" === t.what && h.update())
            }).on("shift.internal", function() {
                x(),
                h.update()
            }),
            this.addTo = function(e) {
                return e instanceof t.Controller && s != e && (s && s.removeScene(h),
                s = e,
                C(),
                w(!0),
                T(!0),
                x(),
                s.info("container").addEventListener("resize", b),
                e.addScene(h),
                h.trigger("add", {
                    controller: s
                }),
                h.update()),
                h
            }
            ,
            this.enabled = function(t) {
                return arguments.length ? (v != t && (v = !!t,
                h.update(!0)),
                h) : v
            }
            ,
            this.remove = function() {
                if (s) {
                    s.info("container").removeEventListener("resize", b);
                    var t = s;
                    s = void 0,
                    t.removeScene(h),
                    h.trigger("remove")
                }
                return h
            }
            ,
            this.destroy = function(t) {
                return h.trigger("destroy", {
                    reset: t
                }),
                h.remove(),
                h.off("*.*"),
                null
            }
            ,
            this.update = function(t) {
                if (s)
                    if (t)
                        if (s.enabled() && v) {
                            var e, i = s.info("scrollPos");
                            e = f.duration > 0 ? (i - m.start) / (m.end - m.start) : i >= m.start ? 1 : 0,
                            h.trigger("update", {
                                startPos: m.start,
                                endPos: m.end,
                                scrollPos: i
                            }),
                            h.progress(e)
                        } else
                            O && p === l && M(!0);
                    else
                        s.updateScene(h, !1);
                return h
            }
            ,
            this.refresh = function() {
                return w(),
                T(),
                h
            }
            ,
            this.progress = function(t) {
                if (arguments.length) {
                    var e = !1
                      , i = p
                      , n = s ? s.info("scrollDirection") : "PAUSED"
                      , r = f.reverse || t >= d;
                    if (0 === f.duration ? (e = d != t,
                    d = 1 > t && r ? 0 : 1,
                    p = 0 === d ? a : l) : 0 > t && p !== a && r ? (d = 0,
                    p = a,
                    e = !0) : t >= 0 && 1 > t && r ? (d = t,
                    p = l,
                    e = !0) : t >= 1 && p !== u ? (d = 1,
                    p = u,
                    e = !0) : p !== l || r || M(),
                    e) {
                        var o = {
                            progress: d,
                            state: p,
                            scrollDirection: n
                        }
                          , c = p != i
                          , m = function(t) {
                            h.trigger(t, o)
                        };
                        c && i !== l && (m("enter"),
                        m(i === a ? "start" : "end")),
                        m("progress"),
                        c && p !== l && (m(p === a ? "start" : "end"),
                        m("leave"))
                    }
                    return h
                }
                return d
            }
            ;
            var x = function() {
                m = {
                    start: g + f.offset
                },
                s && f.triggerElement && (m.start -= s.info("size") * f.triggerHook),
                m.end = m.start + f.duration
            }
              , w = function(t) {
                if (o) {
                    var e = "duration";
                    k(e, o.call(h)) && !t && (h.trigger("change", {
                        what: e,
                        newval: f[e]
                    }),
                    h.trigger("shift", {
                        reason: e
                    }))
                }
            }
              , T = function(t) {
                var i = 0
                  , n = f.triggerElement;
                if (s && n) {
                    for (var o = s.info(), a = r.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(e); )
                        n = n.parentNode;
                    var u = r.get.offset(n);
                    o.isDocument || (a[l] -= s.scrollPos()),
                    i = u[l] - a[l]
                }
                var c = i != g;
                g = i,
                c && !t && h.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            }
              , b = function() {
                f.triggerHook > 0 && h.trigger("shift", {
                    reason: "containerResize"
                })
            }
              , S = r.extend(n.validate, {
                duration: function(t) {
                    if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                        var e = parseFloat(t) / 100;
                        t = function() {
                            return s ? s.info("size") * e : 0
                        }
                    }
                    if (r.type.Function(t)) {
                        o = t;
                        try {
                            t = parseFloat(o())
                        } catch (e) {
                            t = -1
                        }
                    }
                    if (t = parseFloat(t),
                    !r.type.Number(t) || 0 > t)
                        throw o ? (o = void 0,
                        0) : 0;
                    return t
                }
            })
              , C = function(t) {
                t = arguments.length ? [t] : Object.keys(S),
                t.forEach(function(t) {
                    var e;
                    if (S[t])
                        try {
                            e = S[t](f[t])
                        } catch (i) {
                            e = c[t]
                        } finally {
                            f[t] = e
                        }
                })
            }
              , k = function(t, e) {
                var i = !1
                  , n = f[t];
                return f[t] != e && (f[t] = e,
                C(t),
                i = n != f[t]),
                i
            }
              , E = function(t) {
                h[t] || (h[t] = function(e) {
                    return arguments.length ? ("duration" === t && (o = void 0),
                    k(t, e) && (h.trigger("change", {
                        what: t,
                        newval: f[t]
                    }),
                    n.shifts.indexOf(t) > -1 && h.trigger("shift", {
                        reason: t
                    })),
                    h) : f[t]
                }
                )
            };
            this.controller = function() {
                return s
            }
            ,
            this.state = function() {
                return p
            }
            ,
            this.scrollOffset = function() {
                return m.start
            }
            ,
            this.triggerPosition = function() {
                var t = f.offset;
                return s && (t += f.triggerElement ? g : s.info("size") * h.triggerHook()),
                t
            }
            ;
            var O, P;
            h.on("shift.internal", function(t) {
                var e = "duration" === t.reason;
                (p === u && e || p === l && 0 === f.duration) && M(),
                e && A()
            }).on("progress.internal", function() {
                M()
            }).on("add.internal", function() {
                A()
            }).on("destroy.internal", function(t) {
                h.removePin(t.reset)
            });
            var M = function(t) {
                if (O && s) {
                    var e = s.info()
                      , i = P.spacer.firstChild;
                    if (t || p !== l) {
                        var n = {
                            position: P.inFlow ? "relative" : "absolute",
                            top: 0,
                            left: 0
                        }
                          , o = r.css(i, "position") != n.position;
                        P.pushFollowers ? f.duration > 0 && (p === u && 0 === parseFloat(r.css(P.spacer, "padding-top")) ? o = !0 : p === a && 0 === parseFloat(r.css(P.spacer, "padding-bottom")) && (o = !0)) : n[e.vertical ? "top" : "left"] = f.duration * d,
                        r.css(i, n),
                        o && A()
                    } else {
                        "fixed" != r.css(i, "position") && (r.css(i, {
                            position: "fixed"
                        }),
                        A());
                        var c = r.get.offset(P.spacer, !0)
                          , h = f.reverse || 0 === f.duration ? e.scrollPos - m.start : Math.round(d * f.duration * 10) / 10;
                        c[e.vertical ? "top" : "left"] += h,
                        r.css(P.spacer.firstChild, {
                            top: c.top,
                            left: c.left
                        })
                    }
                }
            }
              , A = function() {
                if (O && s && P.inFlow) {
                    var t = p === l
                      , e = s.info("vertical")
                      , i = P.spacer.firstChild
                      , n = r.isMarginCollapseType(r.css(P.spacer, "display"))
                      , o = {};
                    P.relSize.width || P.relSize.autoFullWidth ? t ? r.css(O, {
                        width: r.get.width(P.spacer)
                    }) : r.css(O, {
                        width: "100%"
                    }) : (o["min-width"] = r.get.width(e ? O : i, !0, !0),
                    o.width = t ? o["min-width"] : "auto"),
                    P.relSize.height ? t ? r.css(O, {
                        height: r.get.height(P.spacer) - (P.pushFollowers ? f.duration : 0)
                    }) : r.css(O, {
                        height: "100%"
                    }) : (o["min-height"] = r.get.height(e ? i : O, !0, !n),
                    o.height = t ? o["min-height"] : "auto"),
                    P.pushFollowers && (o["padding" + (e ? "Top" : "Left")] = f.duration * d,
                    o["padding" + (e ? "Bottom" : "Right")] = f.duration * (1 - d)),
                    r.css(P.spacer, o)
                }
            }
              , L = function() {
                s && O && p === l && !s.info("isDocument") && M()
            }
              , D = function() {
                s && O && p === l && ((P.relSize.width || P.relSize.autoFullWidth) && r.get.width(window) != r.get.width(P.spacer.parentNode) || P.relSize.height && r.get.height(window) != r.get.height(P.spacer.parentNode)) && A()
            }
              , I = function(t) {
                s && O && p === l && !s.info("isDocument") && (t.preventDefault(),
                s._setScrollPos(s.info("scrollPos") - ((t.wheelDelta || t[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
            };
            this.setPin = function(t, i) {
                var n = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (i = r.extend({}, n, i),
                t = r.get.elements(t)[0],
                !t)
                    return h;
                if ("fixed" === r.css(t, "position"))
                    return h;
                if (O) {
                    if (O === t)
                        return h;
                    h.removePin()
                }
                O = t;
                var o = O.parentNode.style.display
                  , s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                O.parentNode.style.display = "none";
                var a = "absolute" != r.css(O, "position")
                  , l = r.css(O, s.concat(["display"]))
                  , u = r.css(O, ["width", "height"]);
                O.parentNode.style.display = o,
                !a && i.pushFollowers && (i.pushFollowers = !1);
                var c = O.parentNode.insertBefore(document.createElement("div"), O)
                  , f = r.extend(l, {
                    position: a ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
                if (a || r.extend(f, r.css(O, ["width", "height"])),
                r.css(c, f),
                c.setAttribute(e, ""),
                r.addClass(c, i.spacerClass),
                P = {
                    spacer: c,
                    relSize: {
                        width: "%" === u.width.slice(-1),
                        height: "%" === u.height.slice(-1),
                        autoFullWidth: "auto" === u.width && a && r.isMarginCollapseType(l.display)
                    },
                    pushFollowers: i.pushFollowers,
                    inFlow: a
                },
                !O.___origStyle) {
                    O.___origStyle = {};
                    var p = O.style
                      , d = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    d.forEach(function(t) {
                        O.___origStyle[t] = p[t] || ""
                    })
                }
                return P.relSize.width && r.css(c, {
                    width: u.width
                }),
                P.relSize.height && r.css(c, {
                    height: u.height
                }),
                c.appendChild(O),
                r.css(O, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }),
                (P.relSize.width || P.relSize.autoFullWidth) && r.css(O, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }),
                window.addEventListener("scroll", L),
                window.addEventListener("resize", L),
                window.addEventListener("resize", D),
                O.addEventListener("mousewheel", I),
                O.addEventListener("DOMMouseScroll", I),
                M(),
                h
            }
            ,
            this.removePin = function(t) {
                if (O) {
                    if (p === l && M(!0),
                    t || !s) {
                        var i = P.spacer.firstChild;
                        if (i.hasAttribute(e)) {
                            var n = P.spacer.style
                              , o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {},
                            o.forEach(function(t) {
                                margins[t] = n[t] || ""
                            }),
                            r.css(i, margins)
                        }
                        P.spacer.parentNode.insertBefore(i, P.spacer),
                        P.spacer.parentNode.removeChild(P.spacer),
                        O.parentNode.hasAttribute(e) || (r.css(O, O.___origStyle),
                        delete O.___origStyle)
                    }
                    window.removeEventListener("scroll", L),
                    window.removeEventListener("resize", L),
                    window.removeEventListener("resize", D),
                    O.removeEventListener("mousewheel", I),
                    O.removeEventListener("DOMMouseScroll", I),
                    O = void 0
                }
                return h
            }
            ;
            var R, N = [];
            return h.on("destroy.internal", function(t) {
                h.removeClassToggle(t.reset)
            }),
            this.setClassToggle = function(t, e) {
                var i = r.get.elements(t);
                return 0 !== i.length && r.type.String(e) ? (N.length > 0 && h.removeClassToggle(),
                R = e,
                N = i,
                h.on("enter.internal_class leave.internal_class", function(t) {
                    var e = "enter" === t.type ? r.addClass : r.removeClass;
                    N.forEach(function(t) {
                        e(t, R)
                    })
                }),
                h) : h
            }
            ,
            this.removeClassToggle = function(t) {
                return t && N.forEach(function(t) {
                    r.removeClass(t, R)
                }),
                h.off("start.internal_class end.internal_class"),
                R = void 0,
                N = [],
                h
            }
            ,
            y(),
            h
        }
        ;
        var n = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(t) {
                    if (t = parseFloat(t),
                    !r.type.Number(t))
                        throw 0;
                    return t
                },
                triggerElement: function(t) {
                    if (t = t || void 0) {
                        var e = r.get.elements(t)[0];
                        if (!e)
                            throw 0;
                        t = e
                    }
                    return t
                },
                triggerHook: function(t) {
                    var e = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (r.type.Number(t))
                        t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e))
                            throw 0;
                        t = e[t]
                    }
                    return t
                },
                reverse: function(t) {
                    return !!t
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function(t, e, i, r) {
            t in n.defaults || (n.defaults[t] = e,
            n.validate[t] = i,
            r && n.shifts.push(t))
        }
        ,
        t.Scene.extend = function(e) {
            var i = this;
            t.Scene = function() {
                return i.apply(this, arguments),
                this.$super = r.extend({}, this),
                e.apply(this, arguments) || this
            }
            ,
            r.extend(t.Scene, i),
            t.Scene.prototype = i.prototype,
            t.Scene.prototype.constructor = t.Scene
        }
        ,
        t.Event = function(t, e, i, n) {
            n = n || {};
            for (var r in n)
                this[r] = n[r];
            return this.type = t,
            this.target = this.currentTarget = i,
            this.namespace = e || "",
            this.timeStamp = this.timestamp = Date.now(),
            this
        }
        ;
        var r = t._util = function(t) {
            var e, i = {}, n = function(t) {
                return parseFloat(t) || 0
            }, r = function(e) {
                return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
            }, o = function(e, i, o, s) {
                if (i = i === document ? t : i,
                i === t)
                    s = !1;
                else if (!h.DomElement(i))
                    return 0;
                e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                if (o && s) {
                    var l = r(i);
                    a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                }
                return a
            }, s = function(t) {
                return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) {
                    return t[1].toUpperCase()
                })
            };
            i.extend = function(t) {
                for (t = t || {},
                e = 1; e < arguments.length; e++)
                    if (arguments[e])
                        for (var i in arguments[e])
                            arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                return t
            }
            ,
            i.isMarginCollapseType = function(t) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
            }
            ;
            var a = 0
              , l = ["ms", "moz", "webkit", "o"]
              , u = t.requestAnimationFrame
              , c = t.cancelAnimationFrame;
            for (e = 0; !u && e < l.length; ++e)
                u = t[l[e] + "RequestAnimationFrame"],
                c = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
            u || (u = function(e) {
                var i = (new Date).getTime()
                  , n = Math.max(0, 16 - (i - a))
                  , r = t.setTimeout(function() {
                    e(i + n)
                }, n);
                return a = i + n,
                r
            }
            ),
            c || (c = function(e) {
                t.clearTimeout(e)
            }
            ),
            i.rAF = u.bind(t),
            i.cAF = c.bind(t);
            var h = i.type = function(t) {
                return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            }
            ;
            h.String = function(t) {
                return "string" === h(t)
            }
            ,
            h.Function = function(t) {
                return "function" === h(t)
            }
            ,
            h.Array = function(t) {
                return Array.isArray(t)
            }
            ,
            h.Number = function(t) {
                return !h.Array(t) && t - parseFloat(t) + 1 >= 0
            }
            ,
            h.DomElement = function(t) {
                return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
            }
            ;
            var f = i.get = {};
            return f.elements = function(e) {
                var i = [];
                if (h.String(e))
                    try {
                        e = document.querySelectorAll(e)
                    } catch (t) {
                        return i
                    }
                if ("nodelist" === h(e) || h.Array(e))
                    for (var n = 0, r = i.length = e.length; r > n; n++) {
                        var o = e[n];
                        i[n] = h.DomElement(o) ? o : f.elements(o)
                    }
                else
                    (h.DomElement(e) || e === document || e === t) && (i = [e]);
                return i
            }
            ,
            f.scrollTop = function(e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
            }
            ,
            f.scrollLeft = function(e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
            }
            ,
            f.width = function(t, e, i) {
                return o("width", t, e, i)
            }
            ,
            f.height = function(t, e, i) {
                return o("height", t, e, i)
            }
            ,
            f.offset = function(t, e) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (t && t.getBoundingClientRect) {
                    var n = t.getBoundingClientRect();
                    i.top = n.top,
                    i.left = n.left,
                    e || (i.top += f.scrollTop(),
                    i.left += f.scrollLeft())
                }
                return i
            }
            ,
            i.addClass = function(t, e) {
                e && (t.classList ? t.classList.add(e) : t.className += " " + e)
            }
            ,
            i.removeClass = function(t, e) {
                e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }
            ,
            i.css = function(t, e) {
                if (h.String(e))
                    return r(t)[s(e)];
                if (h.Array(e)) {
                    var i = {}
                      , n = r(t);
                    return e.forEach(function(t) {
                        i[t] = n[s(t)]
                    }),
                    i
                }
                for (var o in e) {
                    var a = e[o];
                    a == parseFloat(a) && (a += "px"),
                    t.style[s(o)] = a
                }
            }
            ,
            i
        }(window || {});
        return t
    }),
    !function(t, e) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"),
        e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
    }(this, function(t, e, i) {
        "use strict";
        t.Scene.addOption("tweenChanges", !1, function(t) {
            return !!t
        }),
        t.Scene.extend(function() {
            var t, n = this;
            n.on("progress.plugin_gsap", function() {
                r()
            }),
            n.on("destroy.plugin_gsap", function(t) {
                n.removeTween(t.reset)
            });
            var r = function() {
                if (t) {
                    var e = n.progress()
                      , i = n.state();
                    t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
                }
            };
            n.setTween = function(o, s, a) {
                var l;
                arguments.length > 1 && (arguments.length < 3 && (a = s,
                s = 1),
                o = e.to(o, s, a));
                try {
                    l = i ? new i({
                        smoothChildTiming: !0
                    }).add(o) : o,
                    l.pause()
                } catch (t) {
                    return n
                }
                return t && n.removeTween(),
                t = l,
                o.repeat && -1 === o.repeat() && (t.repeat(-1),
                t.yoyo(o.yoyo())),
                r(),
                n
            }
            ,
            n.removeTween = function(e) {
                return t && (e && t.progress(0).pause(),
                t.kill(),
                t = void 0),
                n
            }
        })
    });
    var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0
      , deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent)
      , deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent)
      , deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
    FastClick.prototype.needsClick = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (t.disabled)
                return !0;
            break;
        case "input":
            if (deviceIsIOS && "file" === t.type || t.disabled)
                return !0;
            break;
        case "label":
        case "video":
            return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }
    ,
    FastClick.prototype.needsFocus = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !deviceIsAndroid;
        case "input":
            switch (t.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return !1
            }
            return !t.disabled && !t.readOnly;
        default:
            return /\bneedsfocus\b/.test(t.className)
        }
    }
    ,
    FastClick.prototype.sendClick = function(t, e) {
        var i, n;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(),
        n = e.changedTouches[0],
        i = document.createEvent("MouseEvents"),
        i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
        i.forwardedTouchEvent = !0,
        t.dispatchEvent(i)
    }
    ,
    FastClick.prototype.determineEventType = function(t) {
        return deviceIsAndroid && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }
    ,
    FastClick.prototype.focus = function(t) {
        var e;
        deviceIsIOS && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length,
        t.setSelectionRange(e, e)) : t.focus()
    }
    ,
    FastClick.prototype.updateScrollParent = function(t) {
        var e, i;
        if (e = t.fastClickScrollParent,
        !e || !e.contains(t)) {
            i = t;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    e = i,
                    t.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while (i)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }
    ,
    FastClick.prototype.getTargetElementFromEventTarget = function(t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }
    ,
    FastClick.prototype.onTouchStart = function(t) {
        var e, i, n;
        if (t.targetTouches.length > 1)
            return !0;
        if (e = this.getTargetElementFromEventTarget(t.target),
        i = t.targetTouches[0],
        deviceIsIOS) {
            if (n = window.getSelection(),
            n.rangeCount && !n.isCollapsed)
                return !0;
            if (!deviceIsIOS4) {
                if (i.identifier === this.lastTouchIdentifier)
                    return t.preventDefault(),
                    !1;
                this.lastTouchIdentifier = i.identifier,
                this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0,
        this.trackingClickStart = t.timeStamp,
        this.targetElement = e,
        this.touchStartX = i.pageX,
        this.touchStartY = i.pageY,
        t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
        !0
    }
    ,
    FastClick.prototype.touchHasMoved = function(t) {
        var e = t.changedTouches[0]
          , i = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
    }
    ,
    FastClick.prototype.onTouchMove = function(t) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1,
        this.targetElement = null),
        !0)
    }
    ,
    FastClick.prototype.findControl = function(t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }
    ,
    FastClick.prototype.onTouchEnd = function(t) {
        var e, i, n, r, o, s = this.targetElement;
        if (!this.trackingClick)
            return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay)
            return this.cancelNextClick = !0,
            !0;
        if (this.cancelNextClick = !1,
        this.lastClickTime = t.timeStamp,
        i = this.trackingClickStart,
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        deviceIsIOSWithBadTarget && (o = t.changedTouches[0],
        s = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || s,
        s.fastClickScrollParent = this.targetElement.fastClickScrollParent),
        n = s.tagName.toLowerCase(),
        "label" === n) {
            if (e = this.findControl(s)) {
                if (this.focus(s),
                deviceIsAndroid)
                    return !1;
                s = e
            }
        } else if (this.needsFocus(s))
            return t.timeStamp - i > 100 || deviceIsIOS && window.top !== window && "input" === n ? (this.targetElement = null,
            !1) : (this.focus(s),
            this.sendClick(s, t),
            deviceIsIOS4 && "select" === n || (this.targetElement = null,
            t.preventDefault()),
            !1);
        return !(!deviceIsIOS || deviceIsIOS4 || (r = s.fastClickScrollParent,
        !r || r.fastClickLastScrollTop === r.scrollTop)) || (this.needsClick(s) || (t.preventDefault(),
        this.sendClick(s, t)),
        !1)
    }
    ,
    FastClick.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    }
    ,
    FastClick.prototype.onMouse = function(t) {
        return !this.targetElement || (!!t.forwardedTouchEvent || (!(t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick)) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0,
        t.stopPropagation(),
        t.preventDefault(),
        !1)))
    }
    ,
    FastClick.prototype.onClick = function(t) {
        var e;
        return this.trackingClick ? (this.targetElement = null,
        this.trackingClick = !1,
        !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t),
        e || (this.targetElement = null),
        e)
    }
    ,
    FastClick.prototype.destroy = function() {
        var t = this.layer;
        deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0),
        t.removeEventListener("mousedown", this.onMouse, !0),
        t.removeEventListener("mouseup", this.onMouse, !0)),
        t.removeEventListener("click", this.onClick, !0),
        t.removeEventListener("touchstart", this.onTouchStart, !1),
        t.removeEventListener("touchmove", this.onTouchMove, !1),
        t.removeEventListener("touchend", this.onTouchEnd, !1),
        t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }
    ,
    FastClick.notNeeded = function(t) {
        var e, i;
        if ("undefined" == typeof window.ontouchstart)
            return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!deviceIsAndroid)
                return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no"))
                    return !0;
                if (i > 31 && window.innerWidth <= window.screen.width)
                    return !0
            }
        }
        return "none" === t.style.msTouchAction
    }
    ,
    FastClick.attach = function(t, e) {
        return new FastClick(t,e)
    }
    ,
    "undefined" != typeof define && define.amd ? define(function() {
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach,
    module.exports.FastClick = FastClick) : window.FastClick = FastClick,
    document.addEventListener("touchstart", function() {}, !0),
    atvImg();
    /*!
 * VERSION: 0.5.6
 * DATE: 2016-10-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    !function(t) {
        "use strict";
        var e = t.GreenSockGlobals || t
          , i = function(t) {
            var i, n = t.split("."), r = e;
            for (i = 0; i < n.length; i++)
                r[n[i]] = r = r[n[i]] || {};
            return r
        }
          , n = i("com.greensock.utils")
          , r = function(t) {
            var e = t.nodeType
              , i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent)
                    return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling)
                    i += r(t)
            } else if (3 === e || 4 === e)
                return t.nodeValue;
            return i
        }
          , o = document
          , s = o.defaultView ? o.defaultView.getComputedStyle : function() {}
          , a = /([A-Z])/g
          , l = function(t, e, i, n) {
            var r;
            return (i = i || s(t, null)) ? (t = i.getPropertyValue(e.replace(a, "-$1").toLowerCase()),
            r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle,
            r = i[e]),
            n ? r : parseInt(r, 10) || 0
        }
          , u = function(t) {
            return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
        }
          , c = function(t) {
            var e, i, n, r = [], o = t.length;
            for (e = 0; o > e; e++)
                if (i = t[e],
                u(i))
                    for (n = i.length,
                    n = 0; n < i.length; n++)
                        r.push(i[n]);
                else
                    r.push(i);
            return r
        }
          , h = /(?:\r|\n|\t\t)/g
          , f = /(?:\s\s+)/g
          , p = 55296
          , d = 56319
          , m = 56320
          , g = 127462
          , v = 127487
          , y = 127995
          , _ = 127999
          , x = function(t) {
            return (t.charCodeAt(0) - p << 10) + (t.charCodeAt(1) - m) + 65536
        }
          , w = o.all && !o.addEventListener
          , T = " style='position:relative;display:inline-block;" + (w ? "*display:inline;*zoom:1;'" : "'")
          , b = function(t, e) {
            t = t || "";
            var i = -1 !== t.indexOf("++")
              , n = 1;
            return i && (t = t.split("++").join("")),
            function() {
                return "<" + e + T + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
            }
        }
          , S = n.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = S.selector(t)),
            !t)
                throw "cannot split a null element.";
            this.elements = u(t) ? c(t) : [t],
            this.chars = [],
            this.words = [],
            this.lines = [],
            this._originals = [],
            this.vars = e || {},
            this.split(e)
        }
          , C = function(t, e, i) {
            var n = t.nodeType;
            if (1 === n || 9 === n || 11 === n)
                for (t = t.firstChild; t; t = t.nextSibling)
                    C(t, e, i);
            else
                (3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(e).join(i))
        }
          , k = function(t, e) {
            for (var i = e.length; --i > -1; )
                t.push(e[i])
        }
          , E = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , O = function(t, e, i) {
            for (var n; t && t !== e; ) {
                if (n = t._next || t.nextSibling)
                    return n.textContent.charAt(0) === i;
                t = t.parentNode || t._parent
            }
            return !1
        }
          , P = function(t) {
            var e, i, n = E(t.childNodes), r = n.length;
            for (e = 0; r > e; e++)
                i = n[e],
                i._isSplit ? P(i) : (e && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i),
                t.removeChild(i))
        }
          , M = function(t, e, i, n, r, a, u) {
            var c, h, f, p, d, m, g, v, y, _, x, w, T = s(t), b = l(t, "paddingLeft", T), S = -999, E = l(t, "borderBottomWidth", T) + l(t, "borderTopWidth", T), M = l(t, "borderLeftWidth", T) + l(t, "borderRightWidth", T), A = l(t, "paddingTop", T) + l(t, "paddingBottom", T), L = l(t, "paddingLeft", T) + l(t, "paddingRight", T), D = .2 * l(t, "fontSize"), I = l(t, "textAlign", T, !0), R = [], N = [], F = [], z = e.wordDelimiter || " ", j = e.span ? "span" : "div", q = e.type || e.split || "chars,words,lines", W = r && -1 !== q.indexOf("lines") ? [] : null, B = -1 !== q.indexOf("words"), H = -1 !== q.indexOf("chars"), X = "absolute" === e.position || e.absolute === !0, Y = e.linesClass, U = -1 !== (Y || "").indexOf("++");
            for (W && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]),
            U && (Y = Y.split("++").join("")),
            h = t.getElementsByTagName("*"),
            f = h.length,
            d = [],
            c = 0; f > c; c++)
                d[c] = h[c];
            if (W || X)
                for (c = 0; f > c; c++)
                    p = d[c],
                    m = p.parentNode === t,
                    (m || X || H && !B) && (w = p.offsetTop,
                    W && m && Math.abs(w - S) > D && "BR" !== p.nodeName && (g = [],
                    W.push(g),
                    S = w),
                    X && (p._x = p.offsetLeft,
                    p._y = w,
                    p._w = p.offsetWidth,
                    p._h = p.offsetHeight),
                    W && ((p._isSplit && m || !H && m || B && m || !B && p.parentNode.parentNode === t && !p.parentNode._isSplit) && (g.push(p),
                    p._x -= b,
                    O(p, t, z) && (p._wordEnd = !0)),
                    "BR" === p.nodeName && p.nextSibling && "BR" === p.nextSibling.nodeName && W.push([])));
            for (c = 0; f > c; c++)
                p = d[c],
                m = p.parentNode === t,
                "BR" !== p.nodeName ? (X && (y = p.style,
                B || m || (p._x += p.parentNode._x,
                p._y += p.parentNode._y),
                y.left = p._x + "px",
                y.top = p._y + "px",
                y.position = "absolute",
                y.display = "block",
                y.width = p._w + 1 + "px",
                y.height = p._h + "px"),
                !B && H ? p._isSplit ? (p._next = p.nextSibling,
                p.parentNode.appendChild(p)) : p.parentNode._isSplit ? (p._parent = p.parentNode,
                !p.previousSibling && p.firstChild && (p.firstChild._isFirst = !0),
                p._next = p.nextSibling && p.nextSibling._isFirst ? null : p.nextSibling,
                p.parentNode.removeChild(p),
                d.splice(c--, 1),
                f--) : m || (w = !p.nextSibling && O(p.parentNode, t, z),
                p.parentNode._parent && p.parentNode._parent.appendChild(p),
                w && p.parentNode.appendChild(o.createTextNode(" ")),
                e.span && (p.style.display = "inline"),
                R.push(p)) : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML ? N.push(p) : H && !p._isSplit && (e.span && (p.style.display = "inline"),
                R.push(p))) : W || X ? (t.removeChild(p),
                d.splice(c--, 1),
                f--) : B || t.appendChild(p);
            if (W) {
                for (X && (_ = o.createElement(j),
                t.appendChild(_),
                x = _.offsetWidth + "px",
                w = _.offsetParent === t ? 0 : t.offsetLeft,
                t.removeChild(_)),
                y = t.style.cssText,
                t.style.cssText = "display:none;"; t.firstChild; )
                    t.removeChild(t.firstChild);
                for (v = " " === z && (!X || !B && !H),
                c = 0; c < W.length; c++) {
                    for (g = W[c],
                    _ = o.createElement(j),
                    _.style.cssText = "display:block;text-align:" + I + ";position:" + (X ? "absolute;" : "relative;"),
                    Y && (_.className = Y + (U ? c + 1 : "")),
                    F.push(_),
                    f = g.length,
                    h = 0; f > h; h++)
                        "BR" !== g[h].nodeName && (p = g[h],
                        _.appendChild(p),
                        v && p._wordEnd && _.appendChild(o.createTextNode(" ")),
                        X && (0 === h && (_.style.top = p._y + "px",
                        _.style.left = b + w + "px"),
                        p.style.top = "0px",
                        w && (p.style.left = p._x - w + "px")));
                    0 === f ? _.innerHTML = "&nbsp;" : B || H || (P(_),
                    C(_, String.fromCharCode(160), " ")),
                    X && (_.style.width = x,
                    _.style.height = p._h + "px"),
                    t.appendChild(_)
                }
                t.style.cssText = y
            }
            X && (u > t.clientHeight && (t.style.height = u - A + "px",
            t.clientHeight < u && (t.style.height = u + E + "px")),
            a > t.clientWidth && (t.style.width = a - L + "px",
            t.clientWidth < a && (t.style.width = a + M + "px"))),
            k(i, R),
            k(n, N),
            k(r, F)
        }
          , A = function(t, e, i, n) {
            var s, a, l, u, c, m, w, T, b, S = e.span ? "span" : "div", k = e.type || e.split || "chars,words,lines", E = (-1 !== k.indexOf("words"),
            -1 !== k.indexOf("chars")), O = "absolute" === e.position || e.absolute === !0, P = e.wordDelimiter || " ", M = " " !== P ? "" : O ? "&#173; " : " ", A = e.span ? "</span>" : "</div>", L = !0, D = o.createElement("div"), I = t.parentNode;
            for (I.insertBefore(D, t),
            D.textContent = t.nodeValue,
            I.removeChild(t),
            t = D,
            s = r(t),
            w = -1 !== s.indexOf("<"),
            e.reduceWhiteSpace !== !1 && (s = s.replace(f, " ").replace(h, "")),
            w && (s = s.split("<").join("{{LT}}")),
            c = s.length,
            a = (" " === s.charAt(0) ? M : "") + i(),
            l = 0; c > l; l++)
                if (m = s.charAt(l),
                m === P && s.charAt(l - 1) !== P && l) {
                    for (a += L ? A : "",
                    L = !1; s.charAt(l + 1) === P; )
                        a += M,
                        l++;
                    l === c - 1 ? a += M : ")" !== s.charAt(l + 1) && (a += M + i(),
                    L = !0)
                } else
                    "{" === m && "{{LT}}" === s.substr(l, 6) ? (a += E ? n() + "{{LT}}</" + S + ">" : "{{LT}}",
                    l += 5) : m.charCodeAt(0) >= p && m.charCodeAt(0) <= d || s.charCodeAt(l + 1) >= 65024 && s.charCodeAt(l + 1) <= 65039 ? (T = x(s.substr(l, 2)),
                    b = x(s.substr(l + 2, 2)),
                    u = T >= g && v >= T && b >= g && v >= b || b >= y && _ >= b ? 4 : 2,
                    a += E && " " !== m ? n() + s.substr(l, u) + "</" + S + ">" : s.substr(l, u),
                    l += u - 1) : a += E && " " !== m ? n() + m + "</" + S + ">" : m;
            t.outerHTML = a + (L ? A : ""),
            w && C(I, "{{LT}}", "<")
        }
          , L = function(t, e, i, n) {
            var r, o, s = E(t.childNodes), a = s.length, u = "absolute" === e.position || e.absolute === !0;
            if (3 !== t.nodeType || a > 1) {
                for (e.absolute = !1,
                r = 0; a > r; r++)
                    o = s[r],
                    (3 !== o.nodeType || /\S+/.test(o.nodeValue)) && (u && 3 !== o.nodeType && "inline" === l(o, "display", null, !0) && (o.style.display = "inline-block",
                    o.style.position = "relative"),
                    o._isSplit = !0,
                    L(o, e, i, n));
                return e.absolute = u,
                void (t._isSplit = !0)
            }
            A(t, e, i, n)
        }
          , D = S.prototype;
        D.split = function(t) {
            this.isSplit && this.revert(),
            this.vars = t = t || this.vars,
            this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var e, i, n, r = this.elements.length, o = t.span ? "span" : "div", s = ("absolute" === t.position || t.absolute === !0,
            b(t.wordsClass, o)), a = b(t.charsClass, o); --r > -1; )
                n = this.elements[r],
                this._originals[r] = n.innerHTML,
                e = n.clientHeight,
                i = n.clientWidth,
                L(n, t, s, a),
                M(n, t, this.chars, this.words, this.lines, i, e);
            return this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            this.isSplit = !0,
            this
        }
        ,
        D.revert = function() {
            if (!this._originals)
                throw "revert() call wasn't scoped properly.";
            for (var t = this._originals.length; --t > -1; )
                this.elements[t].innerHTML = this._originals[t];
            return this.chars = [],
            this.words = [],
            this.lines = [],
            this.isSplit = !1,
            this
        }
        ,
        S.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (S.selector = i,
            i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }
        ,
        S.version = "0.5.6"
    }(_gsScope),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define([], e) : "undefined" != typeof module && module.exports && (module.exports = e())
    }("SplitText"),
    function(t) {
        "use strict";
        function e(t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }
        function i(t, e) {
            var i = n(t, e) ? o : r;
            i(t, e)
        }
        var n, r, o;
        "classList"in document.documentElement ? (n = function(t, e) {
            return t.classList.contains(e)
        }
        ,
        r = function(t, e) {
            t.classList.add(e)
        }
        ,
        o = function(t, e) {
            t.classList.remove(e)
        }
        ) : (n = function(t, i) {
            return e(i).test(t.className)
        }
        ,
        r = function(t, e) {
            n(t, e) || (t.className = t.className + " " + e)
        }
        ,
        o = function(t, i) {
            t.className = t.className.replace(e(i), " ")
        }
        );
        var s = {
            hasClass: n,
            addClass: r,
            removeClass: o,
            toggleClass: i,
            has: n,
            add: r,
            remove: o,
            toggle: i
        };
        "function" == typeof define && define.amd ? define(s) : t.classie = s
    }(window),
    function(t) {
        "use strict";
        function e(t, e) {
            if (!t)
                return !1;
            for (var i = t.target || t.srcElement || t || !1; i && i != e; )
                i = i.parentNode || !1;
            return i !== !1
        }
        function i(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }
        function n(t, e) {
            this.el = t,
            this.options = i({}, this.options),
            i(this.options, e),
            this._init()
        }
        n.prototype.options = {
            newTab: !0,
            stickyPlaceholder: !0,
            onChange: function(t) {
                return !1
            }
        },
        n.prototype._init = function() {
            var t = this.el.querySelector("option[selected]");
            this.hasDefaultPlaceholder = t && t.disabled,
            this.selectedOpt = t || this.el.querySelector("option"),
            this._createSelectEl(),
            this.selOpts = [].slice.call(this.selEl.querySelectorAll("li[data-option]")),
            this.selOptsCount = this.selOpts.length,
            this.current = this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected")) || -1,
            this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder"),
            this._initEvents()
        }
        ,
        n.prototype._createSelectEl = function() {
            var t = this
              , e = ""
              , i = function(t) {
                var e = ""
                  , i = ""
                  , n = "";
                return !t.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (i += "cs-selected ",
                this.foundSelected = !0),
                t.getAttribute("data-class") && (i += t.getAttribute("data-class")),
                t.getAttribute("data-link") && (n = "data-link=" + t.getAttribute("data-link")),
                "" !== i && (e = 'class="' + i + '" '),
                "<li " + e + n + ' data-option data-value="' + t.value + '"><span>' + t.textContent + "</span></li>"
            };
            [].slice.call(this.el.children).forEach(function(t) {
                if (!t.disabled) {
                    var n = t.tagName.toLowerCase();
                    "option" === n ? e += i(t) : "optgroup" === n && (e += '<li class="cs-optgroup"><span>' + t.label + "</span><ul>",
                    [].slice.call(t.children).forEach(function(t) {
                        e += i(t)
                    }),
                    e += "</ul></li>")
                }
            });
            var n = '<div class="cs-options"><ul>' + e + "</ul></div>";
            this.selEl = document.createElement("div"),
            this.selEl.className = this.el.className,
            this.selEl.tabIndex = this.el.tabIndex,
            this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + n,
            this.el.parentNode.appendChild(this.selEl),
            this.selEl.appendChild(this.el)
        }
        ,
        n.prototype._initEvents = function() {
            var t = this;
            this.selPlaceholder.addEventListener("click", function() {
                t._toggleSelect()
            }),
            this.selOpts.forEach(function(e, i) {
                e.addEventListener("click", function() {
                    t.current = i,
                    t._changeOption(),
                    t._toggleSelect()
                })
            }),
            document.addEventListener("click", function(i) {
                var n = i.target;
                t._isOpen() && n !== t.selEl && !e(n, t.selEl) && t._toggleSelect()
            }),
            this.selEl.addEventListener("keydown", function(e) {
                var i = e.keyCode || e.which;
                switch (i) {
                case 38:
                    e.preventDefault(),
                    t._navigateOpts("prev");
                    break;
                case 40:
                    e.preventDefault(),
                    t._navigateOpts("next");
                    break;
                case 32:
                    e.preventDefault(),
                    t._isOpen() && "undefined" != typeof t.preSelCurrent && t.preSelCurrent !== -1 && t._changeOption(),
                    t._toggleSelect();
                    break;
                case 13:
                    e.preventDefault(),
                    t._isOpen() && "undefined" != typeof t.preSelCurrent && t.preSelCurrent !== -1 && (t._changeOption(),
                    t._toggleSelect());
                    break;
                case 27:
                    e.preventDefault(),
                    t._isOpen() && t._toggleSelect()
                }
            })
        }
        ,
        n.prototype._navigateOpts = function(t) {
            this._isOpen() || this._toggleSelect();
            var e = "undefined" != typeof this.preSelCurrent && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
            ("prev" === t && e > 0 || "next" === t && e < this.selOptsCount - 1) && (this.preSelCurrent = "next" === t ? e + 1 : e - 1,
            this._removeFocus(),
            classie.add(this.selOpts[this.preSelCurrent], "cs-focus"))
        }
        ,
        n.prototype._toggleSelect = function() {
            this._removeFocus(),
            this._isOpen() ? (this.current !== -1 && (this.selPlaceholder.textContent = this.selOpts[this.current].textContent,
            jQuery("#category-buttons").find("." + this.selPlaceholder.textContent.cleanup()).trigger("click"),
            jQuery("#category-tattoos-buttons").find("." + this.selPlaceholder.textContent.cleanup()).trigger("click"),
            jQuery("#year-buttons").find("." + this.selPlaceholder.textContent.cleanup()).trigger("click"),
            jQuery("#artist-buttons").find("." + this.selPlaceholder.textContent.cleanup()).trigger("click")),
            classie.remove(this.selEl, "cs-active")) : (this.hasDefaultPlaceholder && this.options.stickyPlaceholder && (this.selPlaceholder.textContent = this.selectedOpt.textContent),
            classie.add(this.selEl, "cs-active")),
            String.prototype.cleanup = function() {
                return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")
            }
        }
        ,
        n.prototype._changeOption = function() {
            "undefined" != typeof this.preSelCurrent && this.preSelCurrent !== -1 && (this.current = this.preSelCurrent,
            this.preSelCurrent = -1);
            var e = this.selOpts[this.current];
            this.selPlaceholder.textContent = e.textContent,
            this.el.value = e.getAttribute("data-value");
            var i = this.selEl.querySelector("li.cs-selected");
            i && classie.remove(i, "cs-selected"),
            classie.add(e, "cs-selected"),
            e.getAttribute("data-link") && (this.options.newTab ? t.open(e.getAttribute("data-link"), "_blank") : t.location = e.getAttribute("data-link")),
            this.options.onChange(this.el.value)
        }
        ,
        n.prototype._isOpen = function(t) {
            return classie.has(this.selEl, "cs-active")
        }
        ,
        n.prototype._removeFocus = function(t) {
            var e = this.selEl.querySelector("li.cs-focus");
            e && classie.remove(e, "cs-focus")
        }
        ,
        t.SelectFx = n
    }(window),
    function(t, e, i, n, r, o, s) {
        t.GoogleAnalyticsObject = r,
        t[r] = t[r] || function() {
            (t[r].q = t[r].q || []).push(arguments)
        }
        ,
        t[r].l = 1 * new Date,
        o = e.createElement(i),
        s = e.getElementsByTagName(i)[0],
        o.async = 1,
        o.src = n,
        s.parentNode.insertBefore(o, s)
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"),
    ga("create", "UA-40350556-5", "auto"),
    ga("send", "pageview"),
    function() {
        "use strict";
        /**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
        function t(e, n) {
            function r(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var o;
            if (n = n || {},
            this.trackingClick = !1,
            this.trackingClickStart = 0,
            this.targetElement = null,
            this.touchStartX = 0,
            this.touchStartY = 0,
            this.lastTouchIdentifier = 0,
            this.touchBoundary = n.touchBoundary || 10,
            this.layer = e,
            this.tapDelay = n.tapDelay || 200,
            this.tapTimeout = n.tapTimeout || 700,
            !t.notNeeded(e)) {
                for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, u = s.length; l < u; l++)
                    a[s[l]] = r(a[s[l]], a);
                i && (e.addEventListener("mouseover", this.onMouse, !0),
                e.addEventListener("mousedown", this.onMouse, !0),
                e.addEventListener("mouseup", this.onMouse, !0)),
                e.addEventListener("click", this.onClick, !0),
                e.addEventListener("touchstart", this.onTouchStart, !1),
                e.addEventListener("touchmove", this.onTouchMove, !1),
                e.addEventListener("touchend", this.onTouchEnd, !1),
                e.addEventListener("touchcancel", this.onTouchCancel, !1),
                Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, n) {
                    var r = Node.prototype.removeEventListener;
                    "click" === t ? r.call(e, t, i.hijacked || i, n) : r.call(e, t, i, n)
                }
                ,
                e.addEventListener = function(t, i, n) {
                    var r = Node.prototype.addEventListener;
                    "click" === t ? r.call(e, t, i.hijacked || (i.hijacked = function(t) {
                        t.propagationStopped || i(t)
                    }
                    ), n) : r.call(e, t, i, n)
                }
                ),
                "function" == typeof e.onclick && (o = e.onclick,
                e.addEventListener("click", function(t) {
                    o(t)
                }, !1),
                e.onclick = null)
            }
        }
        var e = navigator.userAgent.indexOf("Windows Phone") >= 0
          , i = navigator.userAgent.indexOf("Android") > 0 && !e
          , n = /iP(ad|hone|od)/.test(navigator.userAgent) && !e
          , r = n && /OS 4_\d(_\d)?/.test(navigator.userAgent)
          , o = n && /OS [6-7]_\d/.test(navigator.userAgent)
          , s = navigator.userAgent.indexOf("BB10") > 0;
        t.prototype.needsClick = function(t) {
            switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled)
                    return !0;
                break;
            case "input":
                if (n && "file" === t.type || t.disabled)
                    return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }
        ,
        t.prototype.needsFocus = function(t) {
            switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !i;
            case "input":
                switch (t.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
            }
        }
        ,
        t.prototype.sendClick = function(t, e) {
            var i, n;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(),
            n = e.changedTouches[0],
            i = document.createEvent("MouseEvents"),
            i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
            i.forwardedTouchEvent = !0,
            t.dispatchEvent(i)
        }
        ,
        t.prototype.determineEventType = function(t) {
            return i && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }
        ,
        t.prototype.focus = function(t) {
            var e;
            n && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length,
            t.setSelectionRange(e, e)) : t.focus()
        }
        ,
        t.prototype.updateScrollParent = function(t) {
            var e, i;
            if (e = t.fastClickScrollParent,
            !e || !e.contains(t)) {
                i = t;
                do {
                    if (i.scrollHeight > i.offsetHeight) {
                        e = i,
                        t.fastClickScrollParent = i;
                        break
                    }
                    i = i.parentElement
                } while (i)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }
        ,
        t.prototype.getTargetElementFromEventTarget = function(t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }
        ,
        t.prototype.onTouchStart = function(t) {
            var e, i, o;
            if (t.targetTouches.length > 1)
                return !0;
            if (e = this.getTargetElementFromEventTarget(t.target),
            i = t.targetTouches[0],
            n) {
                if (o = window.getSelection(),
                o.rangeCount && !o.isCollapsed)
                    return !0;
                if (!r) {
                    if (i.identifier && i.identifier === this.lastTouchIdentifier)
                        return t.preventDefault(),
                        !1;
                    this.lastTouchIdentifier = i.identifier,
                    this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0,
            this.trackingClickStart = t.timeStamp,
            this.targetElement = e,
            this.touchStartX = i.pageX,
            this.touchStartY = i.pageY,
            t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
            !0
        }
        ,
        t.prototype.touchHasMoved = function(t) {
            var e = t.changedTouches[0]
              , i = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
        }
        ,
        t.prototype.onTouchMove = function(t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1,
            this.targetElement = null),
            !0)
        }
        ,
        t.prototype.findControl = function(t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }
        ,
        t.prototype.onTouchEnd = function(t) {
            var e, s, a, l, u, c = this.targetElement;
            if (!this.trackingClick)
                return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay)
                return this.cancelNextClick = !0,
                !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout)
                return !0;
            if (this.cancelNextClick = !1,
            this.lastClickTime = t.timeStamp,
            s = this.trackingClickStart,
            this.trackingClick = !1,
            this.trackingClickStart = 0,
            o && (u = t.changedTouches[0],
            c = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || c,
            c.fastClickScrollParent = this.targetElement.fastClickScrollParent),
            a = c.tagName.toLowerCase(),
            "label" === a) {
                if (e = this.findControl(c)) {
                    if (this.focus(c),
                    i)
                        return !1;
                    c = e
                }
            } else if (this.needsFocus(c))
                return t.timeStamp - s > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null,
                !1) : (this.focus(c),
                this.sendClick(c, t),
                n && "select" === a || (this.targetElement = null,
                t.preventDefault()),
                !1);
            return !(!n || r || (l = c.fastClickScrollParent,
            !l || l.fastClickLastScrollTop === l.scrollTop)) || (this.needsClick(c) || (t.preventDefault(),
            this.sendClick(c, t)),
            !1)
        }
        ,
        t.prototype.onTouchCancel = function() {
            this.trackingClick = !1,
            this.targetElement = null
        }
        ,
        t.prototype.onMouse = function(t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0,
            t.stopPropagation(),
            t.preventDefault(),
            !1))))
        }
        ,
        t.prototype.onClick = function(t) {
            var e;
            return this.trackingClick ? (this.targetElement = null,
            this.trackingClick = !1,
            !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t),
            e || (this.targetElement = null),
            e)
        }
        ,
        t.prototype.destroy = function() {
            var t = this.layer;
            i && (t.removeEventListener("mouseover", this.onMouse, !0),
            t.removeEventListener("mousedown", this.onMouse, !0),
            t.removeEventListener("mouseup", this.onMouse, !0)),
            t.removeEventListener("click", this.onClick, !0),
            t.removeEventListener("touchstart", this.onTouchStart, !1),
            t.removeEventListener("touchmove", this.onTouchMove, !1),
            t.removeEventListener("touchend", this.onTouchEnd, !1),
            t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }
        ,
        t.notNeeded = function(t) {
            var e, n, r, o;
            if ("undefined" == typeof window.ontouchstart)
                return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!i)
                    return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (e.content.indexOf("user-scalable=no") !== -1)
                        return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                        return !0
                }
            }
            if (s && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),
            r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                if (e.content.indexOf("user-scalable=no") !== -1)
                    return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1],
            !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"),
            e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        }
        ,
        t.attach = function(e, i) {
            return new t(e,i)
        }
        ,
        "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
            return t
        }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach,
        module.exports.FastClick = t) : window.FastClick = t
    }(),
    !function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {}
                  , n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e),
                this
            }
        }
        ,
        e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {}
                  , n = i[t] = i[t] || {};
                return n[e] = !0,
                this
            }
        }
        ,
        e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1),
                this
            }
        }
        ,
        e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0
                  , r = i[n];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; r; ) {
                    var s = o && o[r];
                    s && (this.off(t, r),
                    delete o[r]),
                    r.apply(this, e),
                    n += s ? 0 : 1,
                    r = i[n]
                }
                return this
            }
        }
        ,
        t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        }
        function n(t) {
            var e = [];
            if (Array.isArray(t))
                e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++)
                    e.push(t[i]);
            else
                e.push(t);
            return e
        }
        function r(t, e, o) {
            return this instanceof r ? ("string" == typeof t && (t = document.querySelectorAll(t)),
            this.elements = n(t),
            this.options = i({}, this.options),
            "function" == typeof e ? o = e : i(this.options, e),
            o && this.on("always", o),
            this.getImages(),
            a && (this.jqDeferred = new a.Deferred),
            void setTimeout(function() {
                this.check()
            }
            .bind(this))) : new r(t,e,o)
        }
        function o(t) {
            this.img = t
        }
        function s(t, e) {
            this.url = t,
            this.element = e,
            this.img = new Image
        }
        var a = t.jQuery
          , l = t.console;
        r.prototype = Object.create(e.prototype),
        r.prototype.options = {},
        r.prototype.getImages = function() {
            this.images = [],
            this.elements.forEach(this.addElementImages, this)
        }
        ,
        r.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t),
            this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && u[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var r = i[n];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var o = t.querySelectorAll(this.options.background);
                    for (n = 0; n < o.length; n++) {
                        var s = o[n];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        }
        ;
        var u = {
            1: !0,
            9: !0,
            11: !0
        };
        return r.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                    var r = n && n[2];
                    r && this.addBackground(r, t),
                    n = i.exec(e.backgroundImage)
                }
        }
        ,
        r.prototype.addImage = function(t) {
            var e = new o(t);
            this.images.push(e)
        }
        ,
        r.prototype.addBackground = function(t, e) {
            var i = new s(t,e);
            this.images.push(i)
        }
        ,
        r.prototype.check = function() {
            function t(t, i, n) {
                setTimeout(function() {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            return this.progressedCount = 0,
            this.hasAnyBroken = !1,
            this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t),
                e.check()
            }) : void this.complete()
        }
        ,
        r.prototype.progress = function(t, e, i) {
            this.progressedCount++,
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
            this.emitEvent("progress", [this, t, e]),
            this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
            this.progressedCount == this.images.length && this.complete(),
            this.options.debug && l && l.log("progress: " + i, t, e)
        }
        ,
        r.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0,
            this.emitEvent(t, [this]),
            this.emitEvent("always", [this]),
            this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }
        ,
        o.prototype = Object.create(e.prototype),
        o.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src))
        }
        ,
        o.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }
        ,
        o.prototype.confirm = function(t, e) {
            this.isLoaded = t,
            this.emitEvent("progress", [this, this.img, e])
        }
        ,
        o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }
        ,
        o.prototype.onload = function() {
            this.confirm(!0, "onload"),
            this.unbindEvents()
        }
        ,
        o.prototype.onerror = function() {
            this.confirm(!1, "onerror"),
            this.unbindEvents()
        }
        ,
        o.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this),
            this.proxyImage.removeEventListener("error", this),
            this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this)
        }
        ,
        s.prototype = Object.create(o.prototype),
        s.prototype.check = function() {
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents())
        }
        ,
        s.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this)
        }
        ,
        s.prototype.confirm = function(t, e) {
            this.isLoaded = t,
            this.emitEvent("progress", [this, this.element, e])
        }
        ,
        r.makeJQueryPlugin = function(e) {
            e = e || t.jQuery,
            e && (a = e,
            a.fn.imagesLoaded = function(t, e) {
                var i = new r(this,t,e);
                return i.jqDeferred.promise(a(this))
            }
            )
        }
        ,
        r.makeJQueryPlugin(),
        r
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function($) {
        var t = Array.prototype.slice
          , e = Array.prototype.splice
          , i = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: !1,
            getWidthFrom: "",
            widthFromWrapper: !0,
            responsiveWidth: !1
        }
          , n = $(window)
          , r = $(document)
          , o = []
          , s = n.height()
          , a = function() {
            for (var t = n.scrollTop(), e = r.height(), i = e - s, a = t > i ? i - t : 0, l = 0, u = o.length; l < u; l++) {
                var c = o[l]
                  , h = c.stickyWrapper.offset().top
                  , f = h - c.topSpacing - a;
                if (c.stickyWrapper.css("height", c.stickyElement.outerHeight()),
                t <= f)
                    null !== c.currentTop && (c.stickyElement.css({
                        width: "",
                        position: "",
                        top: ""
                    }),
                    c.stickyElement.parent().removeClass(c.className),
                    c.stickyElement.trigger("sticky-end", [c]),
                    c.currentTop = null);
                else {
                    var p = e - c.stickyElement.outerHeight() - c.topSpacing - c.bottomSpacing - t - a;
                    if (p < 0 ? p += c.topSpacing : p = c.topSpacing,
                    c.currentTop !== p) {
                        var d;
                        c.getWidthFrom ? d = $(c.getWidthFrom).width() || null : c.widthFromWrapper && (d = c.stickyWrapper.width()),
                        null == d && (d = c.stickyElement.width()),
                        c.stickyElement.css("width", d).css("position", "fixed").css("top", p),
                        c.stickyElement.parent().addClass(c.className),
                        null === c.currentTop ? c.stickyElement.trigger("sticky-start", [c]) : c.stickyElement.trigger("sticky-update", [c]),
                        c.currentTop === c.topSpacing && c.currentTop > p || null === c.currentTop && p < c.topSpacing ? c.stickyElement.trigger("sticky-bottom-reached", [c]) : null !== c.currentTop && p === c.topSpacing && c.currentTop < p && c.stickyElement.trigger("sticky-bottom-unreached", [c]),
                        c.currentTop = p
                    }
                    var m = c.stickyWrapper.parent()
                      , g = c.stickyElement.offset().top + c.stickyElement.outerHeight() >= m.offset().top + m.outerHeight() && c.stickyElement.offset().top <= c.topSpacing;
                    g ? c.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0) : c.stickyElement.css("position", "fixed").css("top", p).css("bottom", "")
                }
            }
        }
          , l = function() {
            s = n.height();
            for (var t = 0, e = o.length; t < e; t++) {
                var i = o[t]
                  , r = null;
                i.getWidthFrom ? i.responsiveWidth && (r = $(i.getWidthFrom).width()) : i.widthFromWrapper && (r = i.stickyWrapper.width()),
                null != r && i.stickyElement.css("width", r)
            }
        }
          , u = {
            init: function(t) {
                var e = $.extend({}, i, t);
                return this.each(function() {
                    var t = $(this)
                      , n = t.attr("id")
                      , r = n ? n + "-" + i.wrapperClassName : i.wrapperClassName
                      , s = $("<div></div>").attr("id", r).addClass(e.wrapperClassName);
                    t.wrapAll(s);
                    var a = t.parent();
                    e.center && a.css({
                        width: t.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }),
                    "right" === t.css("float") && t.css({
                        float: "none"
                    }).parent().css({
                        float: "right"
                    }),
                    e.stickyElement = t,
                    e.stickyWrapper = a,
                    e.currentTop = null,
                    o.push(e),
                    u.setWrapperHeight(this),
                    u.setupChangeListeners(this)
                })
            },
            setWrapperHeight: function(t) {
                var e = $(t)
                  , i = e.parent();
                i && i.css("height", e.outerHeight())
            },
            setupChangeListeners: function(t) {
                if (window.MutationObserver) {
                    var e = new window.MutationObserver(function(e) {
                        (e[0].addedNodes.length || e[0].removedNodes.length) && u.setWrapperHeight(t)
                    }
                    );
                    e.observe(t, {
                        subtree: !0,
                        childList: !0
                    })
                } else
                    t.addEventListener("DOMNodeInserted", function() {
                        u.setWrapperHeight(t)
                    }, !1),
                    t.addEventListener("DOMNodeRemoved", function() {
                        u.setWrapperHeight(t)
                    }, !1)
            },
            update: a,
            unstick: function(t) {
                return this.each(function() {
                    for (var t = this, i = $(t), n = -1, r = o.length; r-- > 0; )
                        o[r].stickyElement.get(0) === t && (e.call(o, r, 1),
                        n = r);
                    n !== -1 && (i.unwrap(),
                    i.css({
                        width: "",
                        position: "",
                        top: "",
                        float: ""
                    }))
                })
            }
        };
        window.addEventListener ? (window.addEventListener("scroll", a, !1),
        window.addEventListener("resize", l, !1)) : window.attachEvent && (window.attachEvent("onscroll", a),
        window.attachEvent("onresize", l)),
        $.fn.sticky = function(e) {
            return u[e] ? u[e].apply(this, t.call(arguments, 1)) : "object" != typeof e && e ? void $.error("Method " + e + " does not exist on jQuery.sticky") : u.init.apply(this, arguments)
        }
        ,
        $.fn.unstick = function(e) {
            return u[e] ? u[e].apply(this, t.call(arguments, 1)) : "object" != typeof e && e ? void $.error("Method " + e + " does not exist on jQuery.sticky") : u.unstick.apply(this, arguments)
        }
        ,
        $(function() {
            setTimeout(a, 0)
        })
    }),
    window.onload = function() {
        setTimeout(function() {
            window.scrollTo(0, 0)
        }, 0)
    }
    ,
    $(document).ready(function() {
        function t(t) {
            location.href = t
        }
        function e() {
            $(document).on("click", "a", function(e) {
                if ("#" === $(this).attr("href") || $(this).hasClass("no-event"))
                    e.preventDefault();
                else if ("_blank" === $(this).attr("target"))
                    window.open($(this).attr("href"), "_blank");
                else {
                    e.preventDefault();
                    var i = new TimelineMax({
                        onComplete: t($(this).attr("href"))
                    });
                    i.add(TweenMax.staggerTo(".cover", .75, {
                        x: "0%",
                        ease: Expo.easeOut
                    }, .25))
                }
            })
        }
        function i() {
            TweenMax.set("h1", {
                opacity: 0
            }),
            TweenMax.set("h2", {
                opacity: 0
            }),
            TweenMax.set("h5", {
                opacity: 0
            }),
            TweenMax.set("h6", {
                opacity: 0
            });
            var t = new TimelineMax({});
            t.add(TweenMax.to(".line-loader-container", .25, {
                opacity: 1
            })).add(TweenMax.staggerTo(".cover", .75, {
                x: "100%",
                ease: Expo.easeOut
            }, .25)).add(TweenMax.to(".line-loader-container", .25, {
                opacity: 0
            }), "=-2").add(TweenMax.to(".massive-typo", 3, {
                opacity: 1,
                scale: 1
            })).add(TweenMax.to(".massive-typo-intro", 3, {
                opacity: 1,
                scale: 1
            }), "=-1").add(TweenMax.staggerTo(".underline", .75, {
                x: 0,
                ease: Expo.easeOut
            }, .25), "=-4").add(TweenMax.to("h1", .1, {
                opacity: 1
            }), "=-3.5").add(TweenMax.to("h2", .1, {
                opacity: 1
            }), "=-3.5").add(TweenMax.to("h6", .1, {
                opacity: 1
            }), "=-3.5").add(TweenMax.staggerTo(".underline", .75, {
                x: "105%",
                ease: Expo.easeOut
            }, .25), "=-3.45").add(TweenMax.to(".vertical-text", .55, {
                opacity: 1,
                rotation: 90,
                ease: Expo.easeOut
            }), "=-3.45").add(TweenMax.staggerTo(".vertical-text-intro-new", .55, {
                opacity: 1,
                rotation: 90,
                ease: Expo.easeOut
            }, .35), "=-3.45").add(TweenMax.to(".image-cover", .75, {
                clip: "rect(0px, 380px, 650px, 0)",
                ease: Expo.easeOut
            }), "=-3.5").add(TweenMax.staggerTo(".image-cover-intro", .75, {
                clip: "rect(0px, 380px, 650px, 0)",
                ease: Expo.easeOut
            }, .12), "=-3.5").add(TweenMax.to(".image", .1, {
                visibility: "visible"
            }), "=-3").add(TweenMax.to(".image-cover", .75, {
                clip: "rect(650px, 380px, 650px, 0)",
                ease: Expo.easeOut
            }), "=-2.9").add(TweenMax.staggerTo(".image-cover-intro", .75, {
                clip: "rect(650px, 380px, 650px, 0)",
                ease: Expo.easeOut
            }, .12), "=-2.9").add(TweenMax.to(".big-stripe", 1, {
                clip: "rect(0px, 600px, 160px, 0)",
                ease: Power4.easeOut
            }), "=-2.7").add(TweenMax.to(".tattoo-cover", 1, {
                y: "100%",
                ease: Power4.easeOut
            }), "=-3.2").add(TweenMax.to(".tattoo-count", 1, {
                clip: "rect(0px, 70px, 70px, 0)",
                ease: Power4.easeOut
            }), "=-1.9").add(TweenMax.staggerTo(".trigger-container", .5, {
                opacity: 1,
                y: 0,
                ease: Power4.easeOut
            }, .12), "=-1.7").add(TweenMax.to(".tattoo-nav", 1, {
                clip: "rect(0, 400px, 70px, -50px)",
                ease: Power4.easeOut
            }), "=-1.5").add(TweenMax.staggerTo(".tattoo-back", .5, {
                opacity: 1,
                y: 0,
                ease: Power4.easeOut
            }, .12), "=-1.3"),
            atvImg(),
            rebuildMasonry(),
            function() {
                [].slice.call(document.querySelectorAll("select.cs-select")).forEach(function(t) {
                    new SelectFx(t)
                })
            }(),
            function() {
                function t(t) {
                    classie.add(t.target.parentNode, "input--filled")
                }
                function e(t) {
                    "" === t.target.value.trim() && classie.remove(t.target.parentNode, "input--filled")
                }
                [].slice.call(document.querySelectorAll("input.input-field")).forEach(function(i) {
                    "" !== i.value.trim() && classie.add(i.parentNode, "input--filled"),
                    i.addEventListener("focus", t),
                    i.addEventListener("blur", e)
                })
            }()
        }
        function n() {
            $("#wrapper-outer") && i()
        }
        function r() {
            $(".hamburger").unbind("click").bind("click", function(t) {
                $(".hamburger").toggleClass("is-active"),
                p.reversed() ? p.play() : p.reverse()
            })
        }
        function o() {
            var t = new TimelineMax({
                repeat: -1
            });
            t.add(TweenMax.to(".line-scroll-down", 0, {
                y: "-100%"
            })).add(TweenMax.to(".line-scroll-down", 1, {
                delay: .5,
                y: "100%",
                ease: Expo.easeOut
            }));
            var e = new TimelineMax({
                repeat: -1
            });
            e.add(TweenMax.to(".line-loader", 0, {
                x: "-200%",
                opacity: 1
            })).add(TweenMax.to(".line-loader", 1, {
                x: "100%",
                opacity: 1,
                ease: Expo.easeOut
            })).add(TweenMax.to(".line-loader", 0, {
                opacity: 1
            })).add(TweenMax.to(".line-loader", 1, {
                x: "-100%",
                opacity: 1,
                ease: Expo.easeOut
            }));
            var i = new ScrollMagic.Controller
              , n = new ScrollMagic.Controller({
                vertical: !1
            });
            if ($("section").each(function() {
                var t = new SplitText($(this, ".split-text-body"),{
                    type: "words"
                })
                  , e = t.words
                  , n = new TimelineMax;
                n.add(TweenMax.to($(this).find(".underline-body"), .75, {
                    x: 0,
                    ease: Expo.easeOut
                })).add(TweenMax.to($(this).find("h3"), .1, {
                    opacity: 1
                })).add(TweenMax.to($(this).find(".underline-body"), .75, {
                    x: "100%",
                    ease: Expo.easeOut
                })).add(TweenMax.staggerFrom($(this).find(e), .8, {
                    opacity: 0,
                    y: "100%",
                    ease: Expo.easeOut
                }, .012), "=-1.2").add(TweenMax.staggerTo($(this).find(".underline-form"), .75, {
                    x: 0,
                    ease: Expo.easeOut
                }, .12), "=-1").add(TweenMax.to($(this).find(".input-form"), .1, {
                    opacity: 1
                }), "=-0.45").add(TweenMax.staggerTo($(this).find(".underline-form"), .75, {
                    x: "100%",
                    ease: Expo.easeOut
                }, .12));
                var r = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: 0,
                    offset: 0
                }).setTween(n).addTo(i)
            }),
            $(".parallax-container").each(function() {
                var t = new TimelineMax;
                t.to($(this).find(".parallax-image"), 1, {
                    y: 0
                });
                var e = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: "100%",
                    offset: "-500%"
                }).addTo(i).setTween(t)
            }),
            $(".filter-bar-container").each(function() {
                var t = new TimelineMax;
                t.to(this, 1, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                }),
                t.to(".view-toggle-container", 1, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                }, "=-1");
                var e = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: 0,
                    offset: -400
                }).addTo(i).setTween(t)
            }),
            $(".news-more").each(function() {
                var t = new TimelineMax;
                t.to(this, 1, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                });
                var e = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: 0,
                    offset: 0
                }).addTo(i).setTween(t)
            }),
            $(".masonry-grid").each(function() {
                var t = new TimelineMax;
                t.add(TweenMax.staggerTo($(this).find(".masonry-module"), .75, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                }, 1));
                var e = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: 0,
                    offset: "-75%"
                }).setTween(t).addTo(i)
            }),
            $(".merch-module").each(function() {
                var t = new TimelineMax;
                t.to(this, 1, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                });
                var e = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: 0,
                    offset: "-125%"
                }).addTo(i).setTween(t)
            }),
            $(".merch-module").on("mouseenter", function() {
                var t = new TimelineMax;
                t.add(TweenMax.to(this, .75, {
                    scale: 1.05,
                    boxShadow: "0px 18px 50px 0px rgba(0,0,0,1)"
                })).add(TweenMax.to($(this).find(".news-arrow"), .75, {
                    x: 35,
                    ease: Expo.easeOut
                }), "=-0.65")
            }).on("mouseleave", function() {
                var t = new TimelineMax;
                t.add(TweenMax.to(this, .75, {
                    scale: 1,
                    boxShadow: "0px 12px 32px 0px rgba(0,0,0,0.25)"
                })).add(TweenMax.to($(this).find(".news-arrow"), .75, {
                    x: 0,
                    ease: Expo.easeOut
                }), "=-0.65")
            }),
            $(".masonry-module").on("mouseenter", function() {
                var t = new TimelineMax;
                t.add(TweenMax.to(this, .75, {
                    scale: 1.05,
                    boxShadow: "0px 18px 50px 0px rgba(0,0,0,1)"
                })).add(TweenMax.to($(this).find(".merch-arrow"), .75, {
                    x: 35,
                    ease: Expo.easeOut
                }), "=-0.65")
            }).on("mouseleave", function() {
                var t = new TimelineMax;
                t.add(TweenMax.to(this, .75, {
                    scale: 1,
                    boxShadow: "0px 12px 32px 0px rgba(0,0,0,0.25)"
                })).add(TweenMax.to($(this).find(".merch-arrow"), .75, {
                    x: 0,
                    ease: Expo.easeOut
                }), "=-0.65")
            }),
            $(".tile").on("mouseover", function() {
                $(this).children(".photo").css({
                    transform: "scale(" + $(this).attr("data-scale") + ")"
                })
            }).on("mouseout", function() {
                $(this).children(".photo").css({
                    transform: "scale(1)"
                })
            }).on("mousemove", function(t) {
                $(this).children(".photo").css({
                    "transform-origin": (t.pageX - $(this).offset().left) / $(this).width() * 100 + "% " + (t.pageY - $(this).offset().top) / $(this).height() * 100 + "%"
                })
            }).each(function() {
                $(this).append('<div class="photo"></div>').children(".photo").css({
                    "background-image": "url(" + $(this).attr("data-image") + ")"
                })
            }),
            $("#intro").length > 0 && document.documentElement.clientWidth > 900) {
                var r = function(t) {
                    var e = t || window.event;
                    return document.body.doScroll ? document.body.doScroll(e.wheelDelta > 0 ? "left" : "right") : (e.wheelDelta || e.detail) > 0 ? document.body.scrollLeft -= 25 : document.body.scrollLeft += 25,
                    !1
                };
                "onmousewheel"in document.body ? document.body.onmousewheel = r : document.body.addEventListener("DOMMouseScroll", r)
            }
            $(".intro-section").each(function() {
                var t = new TimelineMax;
                t.add(TweenMax.staggerTo($(this).find(".underline-intro"), .75, {
                    x: 0,
                    ease: Expo.easeOut
                }, .25)).add(TweenMax.to($(this).find("h5"), .1, {
                    visibility: "visible",
                    opacity: 1
                })).add(TweenMax.staggerTo($(this).find(".underline-intro"), .75, {
                    x: "105%",
                    ease: Expo.easeOut
                }, .25), "=-0.7").add(TweenMax.staggerTo($(this).find(".image-cover-intro-scroll"), .75, {
                    clip: "rect(0px, 380px, 650px, 0)",
                    ease: Expo.easeOut
                }, .12), "=-0.6").add(TweenMax.to($(this).find(".image-intro"), .1, {
                    visibility: "visible"
                }), "=-0.5").add(TweenMax.staggerTo($(this).find(".image-cover-intro-scroll"), .75, {
                    clip: "rect(650px, 380px, 650px, 0)",
                    ease: Expo.easeOut
                }, .12), "=-0.4").add(TweenMax.staggerTo($(this).find(".vertical-text-intro"), .55, {
                    opacity: 1,
                    rotation: 90,
                    ease: Expo.easeOut
                }, .12), "=-0.4");
                var e = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: 0,
                    offset: "-50%"
                }).addTo(n).setTween(t)
            });
            var o = new TimelineMax({
                paused: !0,
                reversed: !0
            })
              , s = new TimelineMax({
                paused: !0,
                reversed: !0
            });
            $(".stripes-trigger").on("mouseenter", function() {
                o = new TimelineMax({
                    paused: !0,
                    reversed: !0
                }),
                o.add(TweenMax.to($(this).find(".intro-stripe-1"), .55, {
                    clip: "rect(0px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                })).add(TweenMax.to($(this).find(".intro-stripe-2"), .55, {
                    clip: "rect(0px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.55").add(TweenMax.to($(this).find(".intro-stripe-3"), .55, {
                    clip: "rect(0px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.55").add(TweenMax.to($(this).find(".intro-stripe-4"), .55, {
                    clip: "rect(0px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.55").add(TweenMax.to($(this).find(".intro-stripe-5"), .55, {
                    clip: "rect(0px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.55").add(TweenMax.to($(this).find(".intro-stripe-6"), .55, {
                    clip: "rect(0px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.55"),
                o.play()
            }).on("mouseleave", function() {
                o.kill(),
                s = new TimelineMax({
                    paused: !0,
                    reversed: !0
                }),
                s.add(TweenMax.to($(this).find(".intro-stripe-1"), .3, {
                    clip: "rect(0px, 400px, 0px, 0)",
                    ease: Expo.easeOut
                })).add(TweenMax.to($(this).find(".intro-stripe-2"), .3, {
                    clip: "rect(800px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.30").add(TweenMax.to($(this).find(".intro-stripe-3"), .3, {
                    clip: "rect(800px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.30").add(TweenMax.to($(this).find(".intro-stripe-4"), .3, {
                    clip: "rect(800px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.30").add(TweenMax.to($(this).find(".intro-stripe-5"), .3, {
                    clip: "rect(800px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.30").add(TweenMax.to($(this).find(".intro-stripe-6"), .3, {
                    clip: "rect(800px, 400px, 800px, 0)",
                    ease: Expo.easeOut
                }), "=-0.30"),
                s.play()
            }),
            $(".reveal-tattoo").hover(function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-tattoo", .75, {
                    clip: "rect(0px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                }))
            }, function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-tattoo", .55, {
                    clip: "rect(650px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                })).add(TweenMax.to(".image-nav-tattoo", 0, {
                    clip: "rect(0px, 260px, 0px, 0px)"
                }))
            }),
            $(".reveal-studio").hover(function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-studio", .75, {
                    clip: "rect(0px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                }))
            }, function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-studio", .55, {
                    clip: "rect(650px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                })).add(TweenMax.to(".image-nav-studio", 0, {
                    clip: "rect(0px, 260px, 0px, 0px)"
                }))
            }),
            $(".reveal-news").hover(function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-news", .75, {
                    clip: "rect(0px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                }))
            }, function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-news", .55, {
                    clip: "rect(650px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                })).add(TweenMax.to(".image-nav-news", 0, {
                    clip: "rect(0px, 260px, 0px, 0px)"
                }))
            }),
            $(".reveal-merch").hover(function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-merch", .75, {
                    clip: "rect(0px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                }))
            }, function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-merch", .55, {
                    clip: "rect(650px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                })).add(TweenMax.to(".image-nav-merch", 0, {
                    clip: "rect(0px, 260px, 0px, 0px)"
                }))
            }),
            $(".reveal-contacts").hover(function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-contacts", .75, {
                    clip: "rect(0px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                }))
            }, function() {
                var t = new TimelineMax({});
                t.add(TweenMax.to(".image-nav-contacts", .55, {
                    clip: "rect(650px, 260px, 650px, 0px)",
                    ease: Expo.easeOut
                })).add(TweenMax.to(".image-nav-contacts", 0, {
                    clip: "rect(0px, 260px, 0px, 0px)"
                }))
            })
        }
        var s = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
          , a = "undefined" != typeof InstallTrigger
          , l = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0
          , u = !!document.documentMode
          , c = !u && !!window.StyleMedia
          , h = !!window.chrome && !!window.chrome.webstore
          , f = (h || s) && !!window.CSS;
        s ? $("html").addClass("browser-opera") : a ? $("html").addClass("browser-firefox") : l ? $("html").addClass("browser-safari") : u ? $("html").addClass("browser-ie") : c ? $("html").addClass("browser-edge") : h ? $("html").addClass("browser-chrome") : f && $("html").addClass("is-blink"),
        $(".filter-bar-container").length > 0 && ($(".filter-bar-container").sticky({
            topSpacing: 0,
            bottomSpacing: $("#footer").outerHeight() + $(".footer-nav").outerHeight() + $(".nav-animation.footer-nav-main").outerHeight()
        }),
        $(window).scroll(function() {
            $(window).scrollTop() + 80 >= $(".filter-bar-container").offset().top ? $(".hamburger-container").addClass("filter-active") : $(".hamburger-container").removeClass("filter-active")
        })),
        $(".news-content, .fix-markup").find("p").addClass("center-text"),
        $("body").hasClass("single-post") && $(".nav-animation").find(".reveal-news").parent().addClass("selected"),
        $("body").hasClass("single-tattoos_post-type") && $(".nav-animation").find(".reveal-tattoo").parent().addClass("selected");
        var p = new TimelineMax({
            paused: !0,
            reversed: !0
        });
        p.add(TweenMax.to("#navigation", .1, {
            display: "block"
        })).add(TweenMax.to("#navigation", .5, {
            x: 0,
            ease: Expo.easeOut
        })).add(TweenMax.staggerTo(".navigation", .5, {
            x: 0,
            ease: Expo.easeOut
        }, .2), "=-0.1").add(TweenMax.to(".nav-logo", .35, {
            x: 0,
            ease: Expo.easeOut
        })).add(TweenMax.staggerTo(".open-nav", .35, {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }, .15), "=-0.25"),
        o(),
        r(),
        n(),
        e()
    }),
    $(function() {
        FastClick.attach(document.body)
    }),
    $(function() {
        var t = $("#contact-form")
          , e = $("#form-messages");
        $(t).submit(function(i) {
            i.preventDefault();
            var n = $(t).serialize();
            $.ajax({
                type: "POST",
                url: $(t).attr("action"),
                data: n
            }).done(function(t) {
                $(e).removeClass("error"),
                $(e).addClass("success"),
                $(e).text(t)
            }).fail(function(t) {
                $(e).removeClass("success"),
                $(e).addClass("error"),
                "" !== t.responseText ? $(e).text(t.responseText) : $(e).text("Oops! An error occured and your message could not be sent.")
            })
        })
    }),
    String.prototype.cleanup = function() {
        return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")
    }
    ;
} catch (e) {}


