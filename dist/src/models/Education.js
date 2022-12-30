"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    time: { type: String, required: true },
    address: { type: String, required: true },
});
const EducationModel = (0, mongoose_1.model)('educations', schema);
exports.default = EducationModel;
