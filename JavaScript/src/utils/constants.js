import path from 'path'

const BASE_PROJECT = path.resolve(__dirname, '../..')
const UNKNOWS_URL = path.join(BASE_PROJECT, '/unknows_url');
const ACQUAINTANCES_URL = path.join(BASE_PROJECT, '/acquaintances_url');
const MODELS_URL = path.join(BASE_PROJECT, '/src/mvfy/models');
const CONFIG_URL = path.join(BASE_PROJECT, '/config');
const PORT = process.env.PORT || 3000;

//static
const HTML_STREAMER = {
    URL: path.join(BASE_PROJECT, '/public/streamer.html'),
    URL_TEMP: path.join(BASE_PROJECT, '/public/temp/_streamer.html'),
    PORT_REPLACE: '<<<PORT>>>',
    DOMAIN_REPLACE: '<<<DOMAIN>>>',
    EMIT_REPLACE: '<<<EMIT>>>',
}

//system
const ALLOWED_FEATURES = {
    ALL: "all",
    AGE_AND_GENDER: "ageandgender",
    EXPRESSIONS: "expressions",
};
const TYPE_SYSTEM = {
    OPTIMIZED: "optimized",
    PRECISE: "precise"
};
const TYPE_SERVICE = {
    REMOTE: "remote",
    LOCAL: "local"
}
const ACTION = {
    INIT_SYSTEM: "INIT_SYSTEM",
    SET_DETECTION: "SET_DETECTION",
};
const REQUEST = {
    ERROR: "ERROR",
    GET_MODEL_FEATURES: "GET_MODEL_FEATURES",
    GET_INITIALIZED_SYSTEM: "GET_INITIALIZED_SYSTEM",
    SEND_DETECTION_VALIDATED: "SEND_DETECTION_VALIDATED",
    LOCAL_IMAGE_SEND: "LOCAL_IMAGE_SEND"
};

//time
const DATE_FORMAT = "DD/MM/YYYY"

const DAYS = (quantity) => {
    quantity = Number(quantity)
    if (typeof(quantity) == 'number') {
        return Array(quantity, "days")
    } else {
        throw new TypeError("type of the quantity days is invalid")
    }
}
const WEEKS = (quantity) => {
    quantity = Number(quantity)
    if (typeof(quantity) == 'number') {
        return Array(quantity, "weeks")
    } else {
        throw new TypeError("type of the quantity weeks is invalid")
    }
}

const MONTHS = (quantity) => {
    quantity = Number(quantity)
    if (typeof(quantity) == 'number') {
        return Array(quantity, "months")
    } else {
        throw new TypeError("type of the quantity months is invalid")
    }
}
export {
    UNKNOWS_URL,
    ACQUAINTANCES_URL,
    MODELS_URL,
    CONFIG_URL,
    PORT,
    TYPE_SYSTEM,
    TYPE_SERVICE,
    DATE_FORMAT,
    ALLOWED_FEATURES,
    HTML_STREAMER,
    ACTION,
    REQUEST,
    DAYS,
    WEEKS,
    MONTHS,

}