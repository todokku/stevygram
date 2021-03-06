"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const chats_1 = __importDefault(require("./routes/chats"));
const main_1 = __importDefault(require("./routes/main"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/', main_1.default);
app.use('/users', users_1.default);
app.use('/chats', chats_1.default);
app.listen(process.env.PORT || 3005, () => console.log('🙌 Server is running!'));
module.exports = app;
//tsc -p prima di pushare
//# sourceMappingURL=app.js.map