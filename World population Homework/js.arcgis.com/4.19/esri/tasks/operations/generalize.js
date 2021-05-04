// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports", "../../core/jsonMap", "../../geometry/support/jsonUtils"], function(c, d, e) {
    const f = new d.JSONMap({
        109006: "centimeters",
        9102: "decimal-degrees",
        109005: "decimeters",
        9002: "feet",
        109009: "inches",
        9036: "kilometers",
        9001: "meters",
        9035: "miles",
        109007: "millimeters",
        109012: "nautical-miles",
        9096: "yards"
    });
    c.generalizeToRESTParameters = function(a) {
        const {
            geometries: b,
            deviationUnit: g,
            maxDeviation: h
        } = a.toJSON();
        a = {
            maxDeviation: h
        };
        b && b.length && (a.geometries = JSON.stringify({
            geometryType: e.getJsonType(b[0]),
            geometries: b
        }), a.sr = JSON.stringify(b[0].spatialReference));
        f.write(g, a, "deviationUnit");
        return a
    };
    Object.defineProperty(c, "__esModule", {
        value: !0
    })
});