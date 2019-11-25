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
const express_1 = __importDefault(require("express"));
const index_1 = require("../index");
const router = express_1.default.Router();
//GET - url: /, stampa tutte le chat
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    index_1.getAllChats().then(res => {
        return res.json(res);
    }).catch(err => {
        return res.status(404).send(`Unexpected error: ${err}`);
    });
}));
//- url: /:id/users, stampa tutti gli utenti di una chat;
router.get('/:id/users', (req, res) => {
    let id = Number(req.params.id);
    let result = index_1.getUsersByChatId(id);
    if (typeof (result) == "object")
        return res.json(result);
    return res.status(404).send("Unexpected error.");
});
//- url: /:id, stampa tutti i dati di una chat;
router.get('/:id', (req, res) => {
    let id = Number(req.params.id);
    res.json(index_1.getInfoByChatId(id));
});
// - url: /:id/messages, stampa tutti i messaggi di una chat:
router.get('/:id/messages', (req, res) => {
    let id = Number(req.params.id);
    res.json(index_1.getMessagesByChatId(id));
    //TODO: filter: ?word="pippo", stampa tutti i messaggi contenenti la parola; 
    //TODO: filter: ?user="id", stampa tutti i messaggi di un determinato utente.
});
//PUT - url: /:id + BODY, modifica una chat dando un id.
router.put('/:id', (req, res) => {
    let id = Number(req.params.id);
    let description = req.body.description;
    let name = req.body.name;
    res.json(index_1.changeInfoByChatId(id, name, description));
});
//POST - url: / + BODY, aggiunge una chat.
router.post('/', (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    let users = req.body.users;
    users = users.split(users, ", ");
    res.json(index_1.addChat(name, description, users));
});
//DELETE - url: /:id, cancella la chat avendo l'id.
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id);
    res.json(index_1.removeChatById(id));
});
exports.default = router;
//# sourceMappingURL=chats.js.map