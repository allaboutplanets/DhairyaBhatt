// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ../../geometry/support/jsonUtils".split(" "), function(h, e, c, n, k, f, p, l, q, r, t, m, g) {
    c = function(a) {
        function d(b) {
            b = a.call(this, b) || this;
            b.geometries1 = null;
            b.geometries2 = null;
            b.relation = null;
            b.relationParameter = null;
            return b
        }
        h._inheritsLoose(d, a);
        return d
    }(m.JSONSupport);
    e.__decorate([f.property({
        json: {
            read: {
                reader: a => a ? a.map(d => g.fromJSON(d)) : null
            },
            write: {
                writer: (a, d) => {
                    d.geometries1 = a.map(b => b.toJSON())
                }
            }
        }
    })], c.prototype, "geometries1", void 0);
    e.__decorate([f.property({
        json: {
            read: {
                reader: a => a ? a.map(d => g.fromJSON(d)) : null
            },
            write: {
                writer: (a, d) => {
                    d.geometries2 = a.map(b => b.toJSON())
                }
            }
        }
    })], c.prototype, "geometries2", void 0);
    e.__decorate([f.property({
        type: String,
        json: {
            write: !0
        }
    })], c.prototype, "relation", void 0);
    e.__decorate([f.property({
        type: String,
        json: {
            write: !0
        }
    })], c.prototype, "relationParameter", void 0);
    c = e.__decorate([l.subclass("esri.tasks.support.RelationParameters")], c);
    c.from = k.ensureType(c);
    return c
});