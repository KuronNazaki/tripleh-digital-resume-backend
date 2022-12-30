"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    skills: {
        name: { type: String, required: true },
        proficiency: { type: String, required: false },
    },
});
const SkillModel = (0, mongoose_1.model)('skills', schema);
exports.default = SkillModel;
