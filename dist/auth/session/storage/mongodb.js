"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBSessionStorage = void 0;
var tslib_1 = require("tslib");
var mongodb = tslib_1.__importStar(require("mongodb"));
var session_utils_1 = require("../session-utils");
var defaultMongoDBSessionStorageOptions = {
    sessionCollectionName: 'shopify_sessions',
};
var MongoDBSessionStorage = /** @class */ (function () {
    function MongoDBSessionStorage(dbUrl, dbName, opts) {
        if (opts === void 0) { opts = {}; }
        this.dbUrl = dbUrl;
        this.dbName = dbName;
        if (typeof this.dbUrl === 'string') {
            this.dbUrl = new URL(this.dbUrl);
        }
        this.options = tslib_1.__assign(tslib_1.__assign({}, defaultMongoDBSessionStorageOptions), opts);
        this.ready = this.init();
    }
    MongoDBSessionStorage.withCredentials = function (host, dbName, username, password, opts) {
        return new MongoDBSessionStorage(new URL("mongodb://".concat(encodeURIComponent(username), ":").concat(encodeURIComponent(password), "@").concat(host, "/")), dbName, opts);
    };
    MongoDBSessionStorage.prototype.storeSession = function (session) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.collection.findOneAndReplace({ id: session.id }, { id: session.id, entries: (0, session_utils_1.sessionEntries)(session) }, {
                                upsert: true,
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MongoDBSessionStorage.prototype.loadSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var rawResult;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.collection.findOne({ id: id })];
                    case 2:
                        rawResult = _a.sent();
                        if (!rawResult)
                            return [2 /*return*/, undefined];
                        return [2 /*return*/, (0, session_utils_1.sessionFromEntries)(rawResult.entries)];
                }
            });
        });
    };
    MongoDBSessionStorage.prototype.deleteSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.collection.deleteOne({ id: id })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MongoDBSessionStorage.prototype.disconnect = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MongoDBSessionStorage.prototype, "collection", {
        get: function () {
            return this.client
                .db(this.dbName)
                .collection(this.options.sessionCollectionName);
        },
        enumerable: false,
        configurable: true
    });
    MongoDBSessionStorage.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.client = new mongodb.MongoClient(this.dbUrl.toString());
                        return [4 /*yield*/, this.client.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.db().command({ ping: 1 })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.createCollection()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MongoDBSessionStorage.prototype.hasSessionCollection = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var collections;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.db().collections()];
                    case 1:
                        collections = _a.sent();
                        return [2 /*return*/, collections
                                .map(function (collection) { return collection.collectionName; })
                                .includes(this.options.sessionCollectionName)];
                }
            });
        });
    };
    MongoDBSessionStorage.prototype.createCollection = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hasSessionCollection;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hasSessionCollection()];
                    case 1:
                        hasSessionCollection = _a.sent();
                        if (!!hasSessionCollection) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.client.db().collection(this.options.sessionCollectionName)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return MongoDBSessionStorage;
}());
exports.MongoDBSessionStorage = MongoDBSessionStorage;
