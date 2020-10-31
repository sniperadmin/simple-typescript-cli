"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repoResponse) {
        this.name = repoResponse.name;
        this.description = repoResponse.description;
    }
    return Repo;
}());
exports.Repo = Repo;
