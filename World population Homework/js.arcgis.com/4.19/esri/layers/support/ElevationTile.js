// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports"], function(m) {
    let r = function() {
        function n(b, a) {
            this.tile = b;
            a ? (b = this.tile.extent, this.samplerData = {
                pixelData: a.values,
                width: a.width,
                height: a.height,
                safeWidth: .99999999 * (a.width - 1),
                noDataValue: a.noDataValue,
                dx: (a.width - 1) / (b[2] - b[0]),
                dy: (a.width - 1) / (b[3] - b[1]),
                x0: b[0],
                y1: b[3]
            }) : this.samplerData = null
        }
        n.prototype.sample = function(b, a) {
            if (this.samplerData) {
                {
                    var c = this.samplerData;
                    const {
                        safeWidth: g,
                        width: p,
                        pixelData: h,
                        noDataValue: k
                    } = c;
                    a = c.dy * (c.y1 - a);
                    a = 0 > a ? 0 : a > g ? g : a;
                    b = c.dx * (b - c.x0);
                    var l =
                        0 > b ? 0 : b > g ? g : b;
                    b = Math.floor(a);
                    const q = Math.floor(l);
                    var d = b * p + q,
                        e = d + p,
                        f = h[d];
                    c = h[e];
                    d = h[d + 1];
                    e = h[e + 1];
                    f !== k && c !== k && d !== k && e !== k ? (l -= q, f += (d - f) * l, a = f + (c + (e - c) * l - f) * (a - b)) : a = void 0
                }
                return a
            }
        };
        return n
    }();
    m.ElevationTile = r;
    m.default = r;
    Object.defineProperty(m, "__esModule", {
        value: !0
    })
});