"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const educations_1 = __importDefault(require("./routes/educations"));
const experiences_1 = __importDefault(require("./routes/experiences"));
const works_1 = __importDefault(require("./routes/works"));
const skills_1 = __importDefault(require("./routes/skills"));
const mongoose_1 = __importDefault(require("mongoose"));
const databaseConnection_1 = require("./utils/databaseConnection");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/educations', educations_1.default);
app.use('/experiences', experiences_1.default);
app.use('/works', works_1.default);
app.use('/skills', skills_1.default);
const port = process.env.PORT || 8080;
const databaseUrl = process.env.ENVIRONMENT === 'production'
    ? (0, databaseConnection_1.getDatabaseUrl)(process.env.DB_HOST, process.env.DB_USERNAME, process.env.DB_PASSWORD, process.env.DB_NAME)
    : process.env.DB_HOST_DOCKER;
mongoose_1.default
    .connect(`${databaseUrl}`)
    .then(() => {
    app.listen(port, () => console.log(`Server and database running on port ${port}, http://localhost:${port}`));
})
    .catch((error) => {
    console.log(error);
});
mongoose_1.default.set('strictQuery', false);
module.exports = app;
