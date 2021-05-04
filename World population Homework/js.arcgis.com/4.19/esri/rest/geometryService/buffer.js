// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports", "../../geometry/Polygon", "../../geometry", "../../request", "../utils"], function(c, e, n, f, d) {
    c.buffer = async function(b, a, g) {
        b = d.parseUrl(b);
        const h = { ...b.query,
                f: "json",
                ...a.toJSON()
            },
            k = a.outSpatialReference || a.geometries[0].spatialReference;
        a = d.asValidOptions(h, g);
        return f(b.path + "/buffer", a).then(l => (l.data.geometries || []).map(({
            rings: m
        }) => new e({
            spatialReference: k,
            rings: m
        })))
    };
    Object.defineProperty(c, "__esModule", {
        value: !0
    })
});