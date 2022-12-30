"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experiences_1 = require("../controllers/experiences");
const router = (0, express_1.Router)();
router.get('/', experiences_1.getExperiences);
router.get('/:id', experiences_1.getExperience);
exports.default = router;
