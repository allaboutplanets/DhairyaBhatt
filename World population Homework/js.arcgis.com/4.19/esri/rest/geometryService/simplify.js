// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports", "../../core/urlUtils", "../../geometry/support/jsonUtils", "../../request", "./utils"], function(c, f, g, h, d) {
    c.simplify = async function(a, b, k) {
        const e = "string" === typeof a ? f.urlToObject(a) : a;
        a = b[0].spatialReference;
        const l = g.getJsonType(b[0]);
        b = { ...k,
            query: { ...e.query,
                f: "json",
                sr: a.wkid ? a.wkid : JSON.stringify(a),
                geometries: JSON.stringify(d.encodeGeometries(b))
            }
        };
        ({
            data: b
        } = await h(e.path + "/simplify", b));
        return d.decodeGeometries(b.geometries, l, a)
    };
    Object.defineProperty(c, "__esModule", {
        value: !0
    })
});