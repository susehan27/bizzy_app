const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    //convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //email checks 
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};