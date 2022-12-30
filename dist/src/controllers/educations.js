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
exports.getEducation = exports.getEducations = void 0;
const Education_1 = __importDefault(require("../models/Education"));
const mongoose_1 = __importDefault(require("mongoose"));
const getEducations = (request, response) => {
    Education_1.default.find((error, data) => {
        response.json(data);
        if (error) {
            console.log(error);
        }
    });
};
exports.getEducations = getEducations;
const getEducation = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const educationId = request.params.id;
    console.log('Education ID:', educationId);
    if (!mongoose_1.default.Types.ObjectId.isValid(educationId)) {
        return false;
    }
    yield Education_1.default.findById(educationId).exec();
    Education_1.default.findById(educationId, (error, education) => {
        response.json(education);
        if (error) {
            console.log(error);
        }
    });
});
exports.getEducation = getEducation;
