export const successMessage = (message, data = {}) => {
    return { success: true, message, data };
};

export const errorMessage = (message, errStackTrace = {}) => {
    return {
        success: false,
        error: [
            {
                message,
                errStackTrace,
            },
        ],
    };
};

export const responseError = (res, code, err) => {
    if (typeof err == "object" && typeof err.message != "undefined")
        err = err.message;

    if (typeof code !== "undefined") res.statusCode = code;

    return res.json({ success: false, message: err });
};

export const responseSuccess = (res, code, data) => {
    let dataToSend = { success: true };

    if (typeof data == "object") {
        dataToSend = Object.assign(dataToSend, data); //merge the objects
    }

    if (typeof code !== "undefined") res.statusCode = code;
    return res.json(dataToSend);
};

export const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomId = (length = 10) => {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
};
