// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/maybe ../../core/Error ../../core/promiseUtils ../../geometry/Point ../../geometry/Multipoint ../../geometry/Polyline ../../core/asyncUtils ../../core/unitUtils ../../geometry/support/aaBoundingRect ../../geometry/projection ./ElevationSampler ./ElevationTile".split(" "), function(u, B, y, p, r, C, z, I, J, D, w, t, E, F) {
    function A(m, h) {
        let a = m.lods.length - 1;
        0 < h && (m = m.lods.findIndex(c => c.resolution < h), 0 === m ? a = 0 : 0 < m && (a = m - 1));
        return a
    }
    let G = function() {
            function m() {}
            var h = m.prototype;
            h.queryAll = async function(a, c, b) {
                a = b && b.ignoreInvisibleLayers ? a.filter(e => e.visible) : a.slice();
                if (!a.length) throw new p("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
                var d = v.fromGeometry(c);
                c = !1;
                b && b.returnSampleInfo || (c = !0);
                b = { ...x,
                    ...b,
                    returnSampleInfo: !0
                };
                d = await this.query(a[a.length - 1], d, b);
                a = await this._queryAllContinue(a, d, b);
                a.geometry = a.geometry.export();
                c && delete a.sampleInfo;
                return a
            };
            h.query = async function(a,
                c, b) {
                if (!a) throw new p("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
                if (!c || !(c instanceof v) && "point" !== c.type && "multipoint" !== c.type && "polyline" !== c.type) throw new p("elevation-query:invalid-geometry", "Only point, polyline and multipoint geometries can be used to query elevation");
                var d = { ...x,
                    ...b
                };
                b = new K(a, c.spatialReference, d);
                d = d.signal;
                await a.load({
                    signal: d
                });
                await this._createGeometryDescriptor(b, c, d);
                await this._selectTiles(b, d);
                await this._populateElevationTiles(b,
                    d);
                this._sampleGeometryWithElevation(b);
                return this._createQueryResult(b, d)
            };
            h.createSampler = async function(a, c, b) {
                if (!a) throw new p("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
                if (!c || "extent" !== c.type) throw new p("elevation-query:invalid-extent", "Invalid or undefined extent");
                return this._createSampler(a, c, { ...x,
                    ...b
                })
            };
            h.createSamplerAll = async function(a, c, b) {
                a = b && b.ignoreInvisibleLayers ? a.filter(e => e.visible) : a.slice();
                if (!a.length) throw new p("elevation-query:invalid-layer",
                    "Elevation queries require at least one elevation layer to fetch tiles from");
                if (!c || "extent" !== c.type) throw new p("elevation-query:invalid-extent", "Invalid or undefined extent");
                b = { ...x,
                    ...b,
                    returnSampleInfo: !0
                };
                const d = await this._createSampler(a[a.length - 1], c, b);
                return this._createSamplerAllContinue(a, c, d, b)
            };
            h._createSampler = async function(a, c, b, d) {
                const e = b.signal;
                await a.load({
                    signal: e
                });
                const f = c.spatialReference,
                    g = a.tileInfo.spatialReference;
                f.equals(g) || (await t.initializeProjection([{
                    source: f,
                    dest: g
                }], {
                    signal: e
                }), c = t.project(c, g));
                a = new L(a, c, b, d);
                await this._selectTiles(a, e);
                await this._populateElevationTiles(a, e);
                return new E.MultiTileElevationSampler(a.elevationTiles, a.layer.tileInfo, a.options.noDataValue)
            };
            h._createSamplerAllContinue = async function(a, c, b, d) {
                a.pop();
                if (!a.length) return b;
                var e = b.samplers.map(f => w.fromExtent(f.extent));
                e = await this._createSampler(a[a.length - 1], c, d, e);
                if (0 === e.samplers.length) return b;
                b = b.samplers.concat(e.samplers);
                b = new E.MultiTileElevationSampler(b,
                    d.noDataValue);
                return this._createSamplerAllContinue(a, c, b, d)
            };
            h._queryAllContinue = async function(a, c, b) {
                var d = a.pop();
                const e = c.geometry.coordinates,
                    f = [],
                    g = [];
                for (let l = 0; l < e.length; l++) {
                    const q = c.sampleInfo[l];
                    0 <= q.demResolution ? q.source || (q.source = d) : a.length && (f.push(e[l]), g.push(l))
                }
                if (!a.length || 0 === f.length) return c;
                d = c.geometry.clone(f);
                const k = await this.query(a[a.length - 1], d, b);
                g.forEach((l, q) => {
                    e[l].z = k.geometry.coordinates[q].z;
                    c.sampleInfo[l].demResolution = k.sampleInfo[q].demResolution
                });
                return this._queryAllContinue(a, c, b)
            };
            h._createQueryResult = async function(a, c) {
                c = {
                    geometry: (await a.geometry.project(a.outSpatialReference, c)).export(),
                    noDataValue: a.options.noDataValue
                };
                a.options.returnSampleInfo && (c.sampleInfo = this._extractSampleInfo(a));
                a.geometry.coordinates.forEach(b => {
                    b.tile = null;
                    b.elevationTile = null
                });
                return c
            };
            h._createGeometryDescriptor = async function(a, c, b) {
                const d = a.layer.tileInfo.spatialReference;
                c instanceof v ? b = await c.project(d, b) : (await t.initializeProjection([{
                    source: c.spatialReference,
                    dest: d
                }], {
                    signal: b
                }), b = t.project(c, d));
                if (!b) throw new p("elevation-query:spatial-reference-mismatch", `Cannot query elevation in '${c.spatialReference.wkid}' on an elevation service in '${d.wkid}'`);
                a.geometry = v.fromGeometry(b)
            };
            h._selectTiles = async function(a, c) {
                const b = a.options.demResolution;
                "geometry" === a.type && this._preselectOutsideLayerExtent(a);
                if ("number" === typeof b) this._selectTilesClosestResolution(a);
                else if ("finest-contiguous" === b) await this._selectTilesFinestContiguous(a, c);
                else if ("auto" ===
                    b) await this._selectTilesAuto(a, c);
                else throw new p("elevation-query:invalid-dem-resolution", `Invalid dem resolution value '${b}', expected a number, "finest-contiguous" or "auto"`);
            };
            h._preselectOutsideLayerExtent = function(a) {
                const c = new F.ElevationTile(null);
                c.sample = () => a.options.noDataValue;
                a.outsideExtentTile = c;
                const b = a.layer.fullExtent;
                a.geometry.coordinates.forEach(d => {
                    const e = d.x,
                        f = d.y;
                    if (e < b.xmin || e > b.xmax || f < b.ymin || f > b.ymax) d.elevationTile = c
                })
            };
            h._selectTilesClosestResolution = function(a) {
                const c =
                    this._findNearestDemResolutionLODIndex(a.layer.tileInfo, a.options.demResolution);
                a.selectTilesAtLOD(c)
            };
            h._findNearestDemResolutionLODIndex = function(a, c) {
                var b = D.getMetersPerUnitForSR(a.spatialReference);
                c /= b;
                b = a.lods[0];
                let d = 0;
                for (let e = 1; e < a.lods.length; e++) {
                    const f = a.lods[e];
                    Math.abs(f.resolution - c) < Math.abs(b.resolution - c) && (b = f, d = e)
                }
                return d
            };
            h._selectTilesFinestContiguous = async function(a, c) {
                const b = A(a.layer.tileInfo, a.options.minDemResolution);
                await this._selectTilesFinestContiguousAt(a,
                    b, c)
            };
            h._selectTilesFinestContiguousAt = async function(a, c, b) {
                var d = a.layer;
                a.selectTilesAtLOD(c);
                if (!(0 > c)) {
                    var e = d.tilemapCache;
                    d = a.getTilesToFetch();
                    try {
                        if (e) await r.whenOrAbort(Promise.all(d.map(f => e.fetchAvailability(f.level, f.row, f.col, {
                            signal: b
                        }))), b);
                        else if (await this._populateElevationTiles(a, b), !a.allElevationTilesFetched()) throw a.clearElevationTiles(), new p("elevation-query:has-unavailable-tiles");
                    } catch (f) {
                        r.throwIfAbortError(f), await this._selectTilesFinestContiguousAt(a, c - 1, b)
                    }
                }
            };
            h._populateElevationTiles =
                async function(a, c) {
                    var b = a.getTilesToFetch();
                    const d = {},
                        e = a.options.cache,
                        f = a.options.noDataValue;
                    b = b.map(async g => {
                        const k = `${a.layer.uid}:${g.id}:${f}`;
                        var l = y.isSome(e) ? e.get(k) : null;
                        l = y.isSome(l) ? l : await a.layer.fetchTile(g.level, g.row, g.col, {
                            noDataValue: f,
                            signal: c
                        });
                        y.isSome(e) && e.put(k, l);
                        d[g.id] = new F.ElevationTile(g, l)
                    });
                    await r.whenOrAbort(r.eachAlways(b), c);
                    a.populateElevationTiles(d)
                };
            h._selectTilesAuto = async function(a, c) {
                this._selectTilesAutoFinest(a);
                this._reduceTilesForMaximumRequests(a);
                const b = a.layer.tilemapCache;
                if (!b) return this._selectTilesAutoPrefetchUpsample(a, c);
                const d = {},
                    e = a.getTilesToFetch().map(async f => {
                        const g = {
                                id: null,
                                level: 0,
                                row: 0,
                                col: 0,
                                extent: w.create()
                            },
                            k = await J.result(b.fetchAvailabilityUpsample(f.level, f.row, f.col, g, {
                                signal: c
                            }));
                        !1 === k.ok ? r.throwIfAbortError(k.error) : d[f.id] = g
                    });
                await r.whenOrAbort(Promise.all(e), c);
                a.remapTiles(d)
            };
            h._reduceTilesForMaximumRequests = function(a) {
                const c = a.layer.tileInfo;
                let b = 0;
                const d = {},
                    e = k => {
                        k.id in d ? d[k.id]++ : (d[k.id] = 1, b++)
                    },
                    f = k => {
                        const l = d[k.id];
                        1 === l ? (delete d[k.id], b--) : d[k.id] = l - 1
                    };
                a.forEachTileToFetch(e, f);
                let g = !0;
                for (; g && (g = !1, a.forEachTileToFetch(k => {
                        b <= a.options.maximumAutoTileRequests || (f(k), c.upsampleTile(k) && (g = !0), e(k))
                    }, f), g););
            };
            h._selectTilesAutoFinest = function(a) {
                const c = A(a.layer.tileInfo, a.options.minDemResolution);
                a.selectTilesAtLOD(c, a.options.maximumAutoTileRequests)
            };
            h._selectTilesAutoPrefetchUpsample = async function(a, c) {
                const b = a.layer.tileInfo;
                await this._populateElevationTiles(a, c);
                let d = !1;
                a.forEachTileToFetch((e, f) => {
                    b.upsampleTile(e) ? d = !0 : f()
                });
                d && await this._selectTilesAutoPrefetchUpsample(a, c)
            };
            h._sampleGeometryWithElevation = function(a) {
                a.geometry.coordinates.forEach(c => {
                    var b = c.elevationTile;
                    let d = a.options.noDataValue;
                    b && (b = b.sample(c.x, c.y), void 0 !== b ? d = b : c.elevationTile = null);
                    c.z = d
                })
            };
            h._extractSampleInfo = function(a) {
                const c = a.layer.tileInfo,
                    b = D.getMetersPerUnitForSR(c.spatialReference);
                return a.geometry.coordinates.map(d => {
                    let e = -1;
                    d.elevationTile && d.elevationTile !== a.outsideExtentTile &&
                        (e = c.lodAt(d.elevationTile.tile.level).resolution * b);
                    return {
                        demResolution: e
                    }
                })
            };
            return m
        }(),
        v = function() {
            function m() {}
            var h = m.prototype;
            h.export = function() {
                return this._exporter(this.coordinates, this.spatialReference)
            };
            h.clone = function(a) {
                const c = new m;
                c.geometry = this.geometry;
                c.spatialReference = this.spatialReference;
                c.coordinates = a || this.coordinates.map(b => this._cloneCoordinate(b));
                c._exporter = this._exporter;
                return c
            };
            h.project = async function(a, c) {
                if (this.spatialReference.equals(a)) return this.clone();
                await t.initializeProjection([{
                    source: this.spatialReference,
                    dest: a
                }], {
                    signal: c
                });
                c = new z({
                    spatialReference: this.spatialReference,
                    points: this.coordinates.map(d => [d.x, d.y])
                });
                const b = t.project(c, a);
                if (!b) return null;
                c = this.coordinates.map((d, e) => {
                    d = this._cloneCoordinate(d);
                    e = b.points[e];
                    d.x = e[0];
                    d.y = e[1];
                    return d
                });
                c = this.clone(c);
                c.spatialReference = a;
                return c
            };
            h._cloneCoordinate = function(a) {
                return {
                    x: a.x,
                    y: a.y,
                    z: a.z,
                    m: a.m,
                    tile: null,
                    elevationTile: null
                }
            };
            m.fromGeometry = function(a) {
                const c = new m;
                c.geometry =
                    a;
                c.spatialReference = a.spatialReference;
                if (a instanceof m) c.coordinates = a.coordinates.map(b => c._cloneCoordinate(b)), c._exporter = (b, d) => {
                    b = a.clone(b);
                    b.spatialReference = d;
                    return b
                };
                else switch (a.type) {
                    case "point":
                        {
                            const {
                                hasZ: b,
                                hasM: d
                            } = a;c.coordinates = b && d ? [{
                                x: a.x,
                                y: a.y,
                                z: a.z,
                                m: a.m
                            }] : b ? [{
                                x: a.x,
                                y: a.y,
                                z: a.z
                            }] : d ? [{
                                x: a.x,
                                y: a.y,
                                m: a.m
                            }] : [{
                                x: a.x,
                                y: a.y
                            }];c._exporter = (e, f) => a.hasM ? new C(e[0].x, e[0].y, e[0].z, e[0].m, f) : new C(e[0].x, e[0].y, e[0].z, f);
                            break
                        }
                    case "multipoint":
                        {
                            const {
                                hasZ: b,
                                hasM: d
                            } = a;c.coordinates =
                            b && d ? a.points.map(e => ({
                                x: e[0],
                                y: e[1],
                                z: e[2],
                                m: e[3]
                            })) : b ? a.points.map(e => ({
                                x: e[0],
                                y: e[1],
                                z: e[2]
                            })) : d ? a.points.map(e => ({
                                x: e[0],
                                y: e[1],
                                m: e[2]
                            })) : a.points.map(e => ({
                                x: e[0],
                                y: e[1]
                            }));c._exporter = (e, f) => a.hasM ? new z({
                                points: e.map(g => [g.x, g.y, g.z, g.m]),
                                hasZ: !0,
                                hasM: !0,
                                spatiaReference: f
                            }) : new z(e.map(g => [g.x, g.y, g.z]), f);
                            break
                        }
                    case "polyline":
                        {
                            const b = [],
                                d = [],
                                {
                                    hasZ: e,
                                    hasM: f
                                } = a;
                            let g = 0;
                            for (const k of a.paths)
                                if (d.push([g, g + k.length]), g += k.length, e && f)
                                    for (const l of k) b.push({
                                        x: l[0],
                                        y: l[1],
                                        z: l[2],
                                        m: l[3]
                                    });
                                else if (e)
                                for (const l of k) b.push({
                                    x: l[0],
                                    y: l[1],
                                    z: l[2]
                                });
                            else if (f)
                                for (const l of k) b.push({
                                    x: l[0],
                                    y: l[1],
                                    m: l[2]
                                });
                            else
                                for (const l of k) b.push({
                                    x: l[0],
                                    y: l[1]
                                });c.coordinates = b;c._exporter = (k, l) => {
                                const q = a.hasM ? k.map(n => [n.x, n.y, n.z, n.m]) : k.map(n => [n.x, n.y, n.z]);
                                k = d.map(n => q.slice(n[0], n[1]));
                                return new I({
                                    paths: k,
                                    hasM: a.hasM,
                                    hasZ: !0,
                                    spatialReference: l
                                })
                            }
                        }
                }
                return c
            };
            return m
        }(),
        H = function(m, h) {
            this.layer = m;
            this.options = h
        },
        K = function(m) {
            function h(c, b, d) {
                c = m.call(this, c, d) || this;
                c.outSpatialReference = b;
                c.type = "geometry";
                return c
            }
            B._inheritsLoose(h,
                m);
            var a = h.prototype;
            a.selectTilesAtLOD = function(c) {
                if (0 > c) this.geometry.coordinates.forEach(b => b.tile = null);
                else {
                    const b = this.layer.tileInfo,
                        d = b.lods[c].level;
                    this.geometry.coordinates.forEach(e => {
                        e.tile = b.tileAt(d, e.x, e.y)
                    })
                }
            };
            a.allElevationTilesFetched = function() {
                return !this.geometry.coordinates.some(c => !c.elevationTile)
            };
            a.clearElevationTiles = function() {
                for (const c of this.geometry.coordinates) c.elevationTile !== this.outsideExtentTile && (c.elevationTile = null)
            };
            a.populateElevationTiles = function(c) {
                for (const b of this.geometry.coordinates) !b.elevationTile &&
                    b.tile && (b.elevationTile = c[b.tile.id])
            };
            a.remapTiles = function(c) {
                for (const b of this.geometry.coordinates) b.tile = c[b.tile.id]
            };
            a.getTilesToFetch = function() {
                const c = {},
                    b = [];
                for (const d of this.geometry.coordinates) {
                    const e = d.tile;
                    d.elevationTile || !d.tile || c[e.id] || (c[e.id] = e, b.push(e))
                }
                return b
            };
            a.forEachTileToFetch = function(c) {
                for (const b of this.geometry.coordinates) b.tile && !b.elevationTile && c(b.tile, () => b.tile = null)
            };
            return h
        }(H),
        L = function(m) {
            function h(c, b, d, e) {
                d = m.call(this, c, d) || this;
                d.type =
                    "extent";
                d.elevationTiles = [];
                d.candidateTiles = [];
                d.fetchedCandidates = new Set;
                d.extent = b.intersection(c.fullExtent);
                d.maskExtents = e;
                return d
            }
            B._inheritsLoose(h, m);
            var a = h.prototype;
            a.selectTilesAtLOD = function(c, b) {
                b = this._maximumLodForRequests(b);
                c = Math.min(b, c);
                0 > c ? this.candidateTiles.length = 0 : this._selectCandidateTilesCoveringExtentAt(c)
            };
            a._maximumLodForRequests = function(c) {
                const b = this.layer.tileInfo;
                if (!c) return b.lods.length - 1;
                const d = this.extent;
                for (let e = b.lods.length - 1; 0 <= e; e--) {
                    const f = b.lods[e];
                    if (Math.ceil(d.width / (f.resolution * b.size[0])) * Math.ceil(d.height / (f.resolution * b.size[1])) <= c) return e
                }
                return -1
            };
            a.allElevationTilesFetched = function() {
                return this.candidateTiles.length === this.elevationTiles.length
            };
            a.clearElevationTiles = function() {
                this.elevationTiles.length = 0;
                this.fetchedCandidates.clear()
            };
            a.populateElevationTiles = function(c) {
                for (const b of this.candidateTiles) {
                    const d = c[b.id];
                    d && (this.fetchedCandidates.add(b), this.elevationTiles.push(d))
                }
            };
            a.remapTiles = function(c) {
                this.candidateTiles =
                    this._uniqueNonOverlappingTiles(this.candidateTiles.map(b => c[b.id]))
            };
            a.getTilesToFetch = function() {
                return this.candidateTiles
            };
            a.forEachTileToFetch = function(c, b) {
                const d = this.candidateTiles;
                this.candidateTiles = [];
                d.forEach(e => {
                    if (this.fetchedCandidates.has(e)) b && b(e);
                    else {
                        var f = !1;
                        c(e, () => f = !0);
                        f ? b && b(e) : this.candidateTiles.push(e)
                    }
                });
                this.candidateTiles = this._uniqueNonOverlappingTiles(this.candidateTiles, b)
            };
            a._uniqueNonOverlappingTiles = function(c, b) {
                const d = {},
                    e = [];
                for (const g of c) d[g.id] ? b && b(g) :
                    (d[g.id] = g, e.push(g));
                const f = e.sort((g, k) => g.level - k.level);
                return f.filter((g, k) => {
                    for (let l = 0; l < k; l++)
                        if (w.contains(f[l].extent, g.extent)) return b && b(g), !1;
                    return !0
                })
            };
            a._selectCandidateTilesCoveringExtentAt = function(c) {
                this.candidateTiles.length = 0;
                const b = this.layer.tileInfo;
                var d = b.lods[c],
                    e = this.extent;
                c = b.tileAt(d.level, e.xmin, e.ymin);
                const f = Math.ceil((e.xmax - c.extent[0]) / (d.resolution * b.size[0]));
                d = Math.ceil((e.ymax - c.extent[1]) / (d.resolution * b.size[1]));
                for (e = 0; e < d; e++)
                    for (let g = 0; g < f; g++) {
                        const k = {
                            id: null,
                            level: c.level,
                            row: c.row - e,
                            col: c.col + g
                        };
                        b.updateTileInfo(k);
                        this._tileIsMasked(k) || this.candidateTiles.push(k)
                    }
            };
            a._tileIsMasked = function(c) {
                return this.maskExtents ? this.maskExtents.some(b => w.contains(b, c.extent)) : !1
            };
            return h
        }(H);
    const x = {
        maximumAutoTileRequests: 20,
        noDataValue: 0,
        returnSampleInfo: !1,
        demResolution: "auto",
        minDemResolution: 0
    };
    u.ElevationQuery = G;
    u.GeometryDescriptor = v;
    u.default = G;
    u.getFinestLodIndex = A;
    Object.defineProperty(u, "__esModule", {
        value: !0
    })
});