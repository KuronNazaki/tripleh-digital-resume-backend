"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skills_1 = require("../controllers/skills");
const router = (0, express_1.Router)();
router.get('/', skills_1.getSkills);
router.get('/:id', skills_1.getSkill);
exports.default = router;
