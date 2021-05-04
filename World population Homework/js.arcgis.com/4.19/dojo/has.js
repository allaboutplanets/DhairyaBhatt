//>>built
define(["./global", "require", "module"], function(p, g, e) {
    var a = g.has || function() {};
    if (!a("dojo-has-api")) {
        var l = (g = "undefined" != typeof window && "undefined" != typeof location && "undefined" != typeof document && window.location == location && window.document == document) && document,
            q = l && l.createElement("DiV"),
            c = e.config && e.config() || {};
        a = function(b) {
            return "function" == typeof c[b] ? c[b] = c[b](p, l, q) : c[b]
        };
        a.cache = c;
        a.add = function(b, f, d, h) {
            ("undefined" == typeof c[b] || h) && (c[b] = f);
            return d && a(b)
        };
        a.add("host-browser", g);
        a.add("dom", g)
    }
    a("host-browser") && (a.add("touch", "ontouchstart" in document || "onpointerdown" in document && 0 < navigator.maxTouchPoints || window.navigator.msMaxTouchPoints), a.add("touch-events", "ontouchstart" in document), a.add("pointer-events", "pointerEnabled" in window.navigator ? window.navigator.pointerEnabled : "PointerEvent" in window), a.add("device-width", screen.availWidth || innerWidth), e = document.createElement("form"), a.add("dom-attributes-specified-flag", 0 < e.attributes.length && 40 > e.attributes.length));
    a.clearElement = function(b) {
        b.innerHTML = "";
        return b
    };
    a.normalize = function(b, f) {
        var d = b.match(/[\?:]|[^:\?]*/g),
            h = 0,
            k = function(n) {
                var m = d[h++];
                if (":" == m) return 0;
                if ("?" == d[h++]) {
                    if (!n && a(m)) return k();
                    k(!0);
                    return k(n)
                }
                return m || 0
            };
        return (b = k()) && f(b)
    };
    a.load = function(b, f, d) {
        b ? f([b], d) : d()
    };
    return a
});