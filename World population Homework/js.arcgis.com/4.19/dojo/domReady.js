//>>built
define(["./global", "./has"], function(p, f) {
    function c(a) {
        d.push(a);
        e && q()
    }

    function q() {
        if (!h) {
            for (h = !0; d.length;) try {
                d.shift()(b)
            } catch (a) {
                console.error(a, "in domReady callback", a.stack)
            }
            h = !1;
            c._onQEmpty()
        }
    }
    var b = document,
        k = {
            loaded: 1,
            complete: 1
        },
        l = "string" != typeof b.readyState,
        e = !!k[b.readyState],
        d = [],
        h;
    c.load = function(a, m, t) {
        c(t)
    };
    c._Q = d;
    c._onQEmpty = function() {};
    l && (b.readyState = "loading");
    if (!e) {
        var g = [],
            n = function(a) {
                a = a || p.event;
                e || "readystatechange" == a.type && !k[b.readyState] || (l && (b.readyState =
                    "complete"), e = 1, q())
            };
        f = function(a, m) {
            a.addEventListener(m, n, !1);
            d.push(function() {
                a.removeEventListener(m, n, !1)
            })
        };
        f(b, "DOMContentLoaded");
        f(p, "load");
        "onreadystatechange" in b ? f(b, "readystatechange") : l || g.push(function() {
            return k[b.readyState]
        });
        if (g.length) {
            var r = function() {
                if (!e) {
                    for (var a = g.length; a--;)
                        if (g[a]()) {
                            n("poller");
                            return
                        }
                    setTimeout(r, 30)
                }
            };
            r()
        }
    }
    return c
});