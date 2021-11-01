const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const {errorMess:{UNKNOWN_ERROR,ROUTE_NOT_FOUND}} = require('./errors')
const {constants:{PORT, DB_CONNECTION_URL}} = require("./constants")
const {notesRouter} = require('./routes')

const app = express();

app.use(cors());

_mongooseConnector

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',notesRouter );
app.use(_handleErrors);
app.use('*', _notFoundHandler);


app.listen(PORT, () => {
    console.log(`app listen ${PORT} `);
});
function _handleErrors(err, req, res, next) {
    console.log('_+_+_+_', err);
    res
        .status(err.status)
        .json({
            status: err.status,
            message: err.message || UNKNOWN_ERROR.message,
            customCode: err.customCode,
        });
}

function _notFoundHandler(err, req, res, next) {
    console.log('error ========== ', err);
    next({
        message: err.message || ROUTE_NOT_FOUND.message,
        status: err.status || ROUTE_NOT_FOUND.code,
    });
}
function _mongooseConnector() {
    mongoose.connect(DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
}