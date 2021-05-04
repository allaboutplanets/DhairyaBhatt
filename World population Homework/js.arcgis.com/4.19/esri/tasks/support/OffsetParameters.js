// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ../../geometry/support/jsonUtils".split(" "), function(g, d, a, n, h, f, p, k, q, r, t, l, m) {
    a = function(c) {
        function e(b) {
            b = c.call(this, b) || this;
            b.bevelRatio = null;
            b.geometries = null;
            b.offsetDistance = null;
            b.offsetHow = null;
            b.offsetUnit = null;
            return b
        }
        g._inheritsLoose(e, c);
        return e
    }(l.JSONSupport);
    d.__decorate([f.property({
        type: Number,
        json: {
            write: !0
        }
    })], a.prototype, "bevelRatio", void 0);
    d.__decorate([f.property({
        json: {
            read: {
                reader: c => c ? c.map(e => m.fromJSON(e)) : null
            },
            write: {
                writer: (c, e) => {
                    e.geometries = c.map(b => b.toJSON())
                }
            }
        }
    })], a.prototype, "geometries", void 0);
    d.__decorate([f.property({
        type: Number,
        json: {
            write: !0
        }
    })], a.prototype, "offsetDistance", void 0);
    d.__decorate([f.property({
        type: String,
        json: {
            write: !0
        }
    })], a.prototype, "offsetHow", void 0);
    d.__decorate([f.property({
        type: String,
        json: {
            write: !0
        }
    })], a.prototype, "offsetUnit", void 0);
    a = d.__decorate([k.subclass("esri.tasks.support.OffsetParameters")], a);
    a.from = h.ensureType(a);
    return a
});