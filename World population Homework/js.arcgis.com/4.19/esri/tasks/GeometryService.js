// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ./Task ../rest/geometryService/areasAndLengths ../rest/geometryService/autoComplete ../rest/geometryService/buffer ../rest/geometryService/convexHull ../rest/geometryService/cut ../rest/geometryService/densify ../rest/geometryService/difference ../rest/geometryService/distance ../rest/geometryService/units ../rest/geometryService/fromGeoCoordinateString ../rest/geometryService/generalize ../rest/geometryService/intersect ../rest/geometryService/labelPoints ../rest/geometryService/lengths ../rest/geometryService/offset ../rest/geometryService/project ../rest/geometryService/relation ../rest/geometryService/reshape ../rest/geometryService/simplify ../rest/geometryService/toGeoCoordinateString ../rest/geometryService/trimExtend ../rest/geometryService/union".split(" "),
    function(k, g, a, L, M, l, N, m, O, P, Q, n, p, q, r, t, u, v, w, x, R, y, z, A, B, C, D, E, F, G, H, I, J, K) {
        a = function(h) {
            function f(b) {
                b = h.call(this, b) || this;
                b.url = null;
                return b
            }
            k._inheritsLoose(f, h);
            var d = f.prototype;
            d.areasAndLengths = function(b, c) {
                return p.areasAndLengths(this.url, b, c)
            };
            d.autoComplete = function(b, c, e) {
                return q.autoComplete(this.url, b, c, e)
            };
            d.buffer = function(b, c) {
                return r.buffer(this.url, b, c)
            };
            d.convexHull = function(b, c) {
                return t.convexHull(this.url, b, c)
            };
            d.cut = function(b, c, e) {
                return u.cut(this.url, b, c, e)
            };
            d.densify =
                function(b, c) {
                    return v.densify(this.url, b, c)
                };
            d.difference = function(b, c, e) {
                return w.difference(this.url, b, c, e)
            };
            d.distance = function(b, c) {
                return x.distance(this.url, b, c)
            };
            d.fromGeoCoordinateString = function(b, c) {
                return y.fromGeoCoordinateString(this.url, b, c)
            };
            d.generalize = function(b, c) {
                return z.generalize(this.url, b, c)
            };
            d.intersect = function(b, c, e) {
                return A.intersect(this.url, b, c, e)
            };
            d.labelPoints = function(b, c) {
                return B.labelPoints(this.url, b, c)
            };
            d.lengths = function(b, c) {
                return C.lengths(this.url, b, c)
            };
            d.offset = function(b, c) {
                return D.offset(this.url, b, c)
            };
            d.project = function(b, c) {
                return E.project(this.url, b, c)
            };
            d.relation = function(b, c) {
                return F.relation(this.url, b, c)
            };
            d.reshape = function(b, c, e) {
                return G.reshape(this.url, b, c, e)
            };
            d.simplify = function(b, c) {
                return H.simplify(this.url, b, c)
            };
            d.toGeoCoordinateString = function(b, c) {
                return I.toGeoCoordinateString(this.url, b, c)
            };
            d.trimExtend = function(b, c) {
                return J.trimExtend(this.url, b, c)
            };
            d.union = function(b, c) {
                return K.union(this.url, b, c)
            };
            return f
        }(n);
        a.UNIT_METER =
            9001;
        a.UNIT_GERMAN_METER = 9031;
        a.UNIT_FOOT = 9002;
        a.UNIT_SURVEY_FOOT = 9003;
        a.UNIT_CLARKE_FOOT = 9005;
        a.UNIT_FATHOM = 9014;
        a.UNIT_NAUTICAL_MILE = 9030;
        a.UNIT_SURVEY_CHAIN = 9033;
        a.UNIT_SURVEY_LINK = 9034;
        a.UNIT_SURVEY_MILE = 9035;
        a.UNIT_KILOMETER = 9036;
        a.UNIT_CLARKE_YARD = 9037;
        a.UNIT_CLARKE_CHAIN = 9038;
        a.UNIT_CLARKE_LINK = 9039;
        a.UNIT_SEARS_YARD = 9040;
        a.UNIT_SEARS_FOOT = 9041;
        a.UNIT_SEARS_CHAIN = 9042;
        a.UNIT_SEARS_LINK = 9043;
        a.UNIT_BENOIT_1895A_YARD = 9050;
        a.UNIT_BENOIT_1895A_FOOT = 9051;
        a.UNIT_BENOIT_1895A_CHAIN = 9052;
        a.UNIT_BENOIT_1895A_LINK =
            9053;
        a.UNIT_BENOIT_1895B_YARD = 9060;
        a.UNIT_BENOIT_1895B_FOOT = 9061;
        a.UNIT_BENOIT_1895B_CHAIN = 9062;
        a.UNIT_BENOIT_1895B_LINK = 9063;
        a.UNIT_INDIAN_FOOT = 9080;
        a.UNIT_INDIAN_1937_FOOT = 9081;
        a.UNIT_INDIAN_1962_FOOT = 9082;
        a.UNIT_INDIAN_1975_FOOT = 9083;
        a.UNIT_INDIAN_YARD = 9084;
        a.UNIT_INDIAN_1937_YARD = 9085;
        a.UNIT_INDIAN_1962_YARD = 9086;
        a.UNIT_INDIAN_1975_YARD = 9087;
        a.UNIT_FOOT_1865 = 9070;
        a.UNIT_RADIAN = 9101;
        a.UNIT_DEGREE = 9102;
        a.UNIT_ARCMINUTE = 9103;
        a.UNIT_ARCSECOND = 9104;
        a.UNIT_GRAD = 9105;
        a.UNIT_GON = 9106;
        a.UNIT_MICRORADIAN =
            9109;
        a.UNIT_ARCMINUTE_CENTESIMAL = 9112;
        a.UNIT_ARCSECOND_CENTESIMAL = 9113;
        a.UNIT_MIL6400 = 9114;
        a.UNIT_BRITISH_1936_FOOT = 9095;
        a.UNIT_GOLDCOAST_FOOT = 9094;
        a.UNIT_INTERNATIONAL_CHAIN = 109003;
        a.UNIT_INTERNATIONAL_LINK = 109004;
        a.UNIT_INTERNATIONAL_YARD = 109001;
        a.UNIT_STATUTE_MILE = 9093;
        a.UNIT_SURVEY_YARD = 109002;
        a.UNIT_50KILOMETER_LENGTH = 109030;
        a.UNIT_150KILOMETER_LENGTH = 109031;
        a.UNIT_DECIMETER = 109005;
        a.UNIT_CENTIMETER = 109006;
        a.UNIT_MILLIMETER = 109007;
        a.UNIT_INTERNATIONAL_INCH = 109008;
        a.UNIT_US_SURVEY_INCH = 109009;
        a.UNIT_INTERNATIONAL_ROD = 109010;
        a.UNIT_US_SURVEY_ROD = 109011;
        a.UNIT_US_NAUTICAL_MILE = 109012;
        a.UNIT_UK_NAUTICAL_MILE = 109013;
        a.UNIT_SQUARE_INCHES = "esriSquareInches";
        a.UNIT_SQUARE_FEET = "esriSquareFeet";
        a.UNIT_SQUARE_YARDS = "esriSquareYards";
        a.UNIT_ACRES = "esriAcres";
        a.UNIT_SQUARE_MILES = "esriSquareMiles";
        a.UNIT_SQUARE_MILLIMETERS = "esriSquareMillimeters";
        a.UNIT_SQUARE_CENTIMETERS = "esriSquareCentimeters";
        a.UNIT_SQUARE_DECIMETERS = "esriSquareDecimeters";
        a.UNIT_SQUARE_METERS = "esriSquareMeters";
        a.UNIT_ARES = "esriAres";
        a.UNIT_HECTARES = "esriHectares";
        a.UNIT_SQUARE_KILOMETERS = "esriSquareKilometers";
        g.__decorate([l.property()], a.prototype, "url", void 0);
        return a = g.__decorate([m.subclass("esri.tasks.GeometryService")], a)
    });