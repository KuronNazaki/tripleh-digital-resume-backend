"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    time: { type: String, required: true },
    contentRole: { type: String, required: true },
    description: { type: String, required: true }
});
const ExperienceModel = (0, mongoose_1.model)('experiences', schema);
exports.default = ExperienceModel;
