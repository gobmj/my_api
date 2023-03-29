"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/data', async (req, res) => {
    const [jsonPlaceholderResponse, githubResponse] = await Promise.all([
        axios_1.default.get('https://jsonplaceholder.typicode.com/posts'),
        axios_1.default.get('https://api.github.com/users/defunkt')
    ]);
    const data = {
        posts: jsonPlaceholderResponse.data,
        user: githubResponse.data
    };
    res.json(data);
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=server.js.map