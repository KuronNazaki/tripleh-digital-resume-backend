"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkill = exports.getSkills = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Skill_1 = __importDefault(require("../models/Skill"));
const getSkills = (request, response) => {
    Skill_1.default.find((error, data) => {
        response.json(data);
        if (error) {
            console.log(error);
        }
    });
};
exports.getSkills = getSkills;
const getSkill = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const skillId = request.params.id;
    console.log('Skill ID:', skillId);
    if (!mongoose_1.default.Types.ObjectId.isValid(skillId)) {
        return false;
    }
    yield Skill_1.default.findById(skillId).exec();
    Skill_1.default.findById(skillId, (error, skill) => {
        response.json(skill);
        if (error) {
            console.log(error);
        }
    });
});
exports.getSkill = getSkill;
