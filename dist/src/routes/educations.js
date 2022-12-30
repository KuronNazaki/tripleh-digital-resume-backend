"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const educations_1 = require("../controllers/educations");
const router = (0, express_1.Router)();
router.get('/', educations_1.getEducations);
router.get('/:id', educations_1.getEducation);
exports.default = router;
