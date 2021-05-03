'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _markRoute = require('./routes/markRoute');

var _markRoute2 = _interopRequireDefault(_markRoute);

var _userRoute = require('./routes/userRoute');

var _userRoute2 = _interopRequireDefault(_userRoute);

var _authRoutes = require('./routes/authRoutes');

var _authRoutes2 = _interopRequireDefault(_authRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const cors = require("cors");
const helmet = require("helmet");

const app = (0, _express2.default)();
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(helmet());
app.use(_express2.default.json({ limit: '50MB' }));
const PORT = process.env.SERVER_PORT;

// connection mongoose
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});

app.use('/', _markRoute2.default);

app.use('/', _userRoute2.default);

app.use('/', _authRoutes2.default);

app.use(_express2.default.static('public'));

var corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
};

app.get('/', cors(corsOptions), (req, res) => res.send(`Serveur sur port ${PORT}`));

app.listen(PORT, () => console.log(`votre serveur est sur le port ${PORT}`));
//# sourceMappingURL=index.js.map