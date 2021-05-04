// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports", "../../core/jsonMap", "../../geometry/support/jsonUtils"], function(e, k, f) {
    const l = new k.JSONMap({
        esriGeometryRelationCross: "cross",
        esriGeometryRelationDisjoint: "disjoint",
        esriGeometryRelationIn: "in",
        esriGeometryRelationInteriorIntersection: "interior-intersection",
        esriGeometryRelationIntersection: "intersection",
        esriGeometryRelationLineCoincidence: "line-coincidence",
        esriGeometryRelationLineTouch: "line-touch",
        esriGeometryRelationOverlap: "overlap",
        esriGeometryRelationPointTouch: "point-touch",
        esriGeometryRelationTouch: "touch",
        esriGeometryRelationWithin: "within",
        esriGeometryRelationRelation: "relation"
    });
    e.relationToRESTParameters = function(a) {
        const {
            geometries1: b,
            geometries2: c,
            relation: g,
            relationParameter: h
        } = a.toJSON();
        a = {};
        if (b && b.length) {
            a.geometries1 = JSON.stringify({
                geometryType: f.getJsonType(b[0]),
                geometries: b
            });
            const d = b[0].spatialReference;
            a.sr = d.wkid ? d.wkid : JSON.stringify(d)
        }
        c && 0 < c.length && (a.geometries2 = JSON.stringify({
            geometryType: f.getJsonType(c[0]),
            geometries: c
        }));
        g && (a.relation =
            l.toJSON(g));
        h && (a.relationParam = h);
        return a
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
});