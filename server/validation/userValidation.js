const Joi = require('joi');

exports.validateEmail=(email)=>{
    const schema=Joi.object({
        Email: Joi.string().min(5).max(100).required().email(),
    }).unknown(true);
    return schema.validate(email);
}

exports.validateRegister = (data) => {
    const schema=Joi.object({
        Name: Joi.string().min(5).max(100).required(),
        Email: Joi.string().min(5).max(100).required().email(),
        Password: Joi.string().min(5).max(100).required(),
        UserType: Joi.number().required(),
    })
    return schema.validate(data);
}

exports.validateSignIn = (data) => {
    const schema=Joi.object({
        Email: Joi.string().min(5).max(100).required().email(),
        Password: Joi.string().min(5).max(100).required(),
    })
    return schema.validate(data);
}

exports.validateTechnology = (data) => {
    const schema=Joi.object({
        Name: Joi.string().min(5).max(100).required(),
        Status: Joi.string().min(1).max(50).required(),
        dd: Joi.array().items(Joi.number()).min(1),
        js: Joi.object().keys({name:Joi.string().required(),last: Joi.string()})
    }).unknown(true);
    return schema.validate(data);
}