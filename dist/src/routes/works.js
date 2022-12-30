"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const works_1 = require("../controllers/works");
const router = (0, express_1.Router)();
router.get('/', works_1.getWorks);
router.get('/:id', works_1.getWork);
exports.default = router;
