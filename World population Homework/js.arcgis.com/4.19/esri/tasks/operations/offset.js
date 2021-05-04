// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports", "../../core/jsonMap", "../../geometry/support/jsonUtils"], function(c, d, g) {
    const h = new d.JSONMap({
            esriGeometryOffsetBevelled: "bevelled",
            esriGeometryOffsetMitered: "mitered",
            esriGeometryOffsetRounded: "rounded"
        }),
        k = new d.JSONMap({
            9001: "meters",
            9002: "feet",
            9036: "kilometers",
            9093: "miles",
            109012: "nautical-miles",
            109001: "yards"
        });
    c.offsetToRESTParameters = function(a) {
        const {
            geometries: b,
            bevelRatio: l,
            offsetDistance: m,
            offsetHow: e,
            offsetUnit: f
        } = a.toJSON();
        a = {
            bevelRatio: l,
            offsetDistance: m
        };
        b &&
            b.length && (a.geometries = JSON.stringify({
                geometryType: g.getJsonType(b[0]),
                geometries: b
            }), a.sr = JSON.stringify(b[0].spatialReference));
        e && (a.offsetHow = h.toJSON(e));
        f && (a.offsetUnit = k.toJSON(f));
        return a
    };
    Object.defineProperty(c, "__esModule", {
        value: !0
    })
});