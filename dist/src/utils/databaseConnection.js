"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseUrl = void 0;
const getDatabaseUrl = (baseUrl, username, password, database) => {
    if (baseUrl && username && password && database) {
        baseUrl = baseUrl.replace('<username>', username);
        baseUrl = baseUrl.replace('<password>', password);
        baseUrl = baseUrl.replace('<database>', database);
        return baseUrl;
    }
    return '';
};
exports.getDatabaseUrl = getDatabaseUrl;
