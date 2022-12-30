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
exports.getWork = exports.getWorks = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Work_1 = __importDefault(require("../models/Work"));
const getWorks = (request, response) => {
    Work_1.default.find((error, data) => {
        response.json(data);
        if (error) {
            console.log(error);
        }
    });
};
exports.getWorks = getWorks;
const getWork = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const workId = request.params.id;
    console.log('Work ID:', workId);
    if (!mongoose_1.default.Types.ObjectId.isValid(workId)) {
        return false;
    }
    yield Work_1.default.findById(workId).exec();
    Work_1.default.findById(workId, (error, work) => {
        response.json(work);
        if (error) {
            console.log(error);
        }
    });
});
exports.getWork = getWork;
