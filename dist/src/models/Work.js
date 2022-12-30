"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    time: { type: String, required: true },
    descriptions: [{ type: String, required: true }]
});
const WorkModel = (0, mongoose_1.model)('works', schema);
exports.default = WorkModel;
