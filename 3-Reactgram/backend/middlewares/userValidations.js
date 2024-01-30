const { body } = require('express-validator')

const userCreateValidation = () => {
    return [
        body("name")
            .isString().withMessage("The name is required!")
            .isLength({min: 3}).withMessage("The name needs to be at least 3 characters long!"),
        body("email")
            .isString().withMessage("The email is required!")
            .isEmail().withMessage("Insert a valid email!"),
        body("password")
            .isString().withMessage("The password is required!")
            .isLength({min: 5}).withMessage("The password needs to be at least 5 characters long!"),
        body("confirmPassword")
            .isString().withMessage("The confirm is required!")
            .custom((value, {req}) => {
                if(value !== req.body.password) throw new Error("The passwords are not equal!")
                
                return true
            })
    ]
}

const loginValidation = () => {
    return [
        body("email")
            .isString().withMessage("The email is required!")
            .isEmail().withMessage("Insert a valid email!"),
        body("password")
            .isString().withMessage("The password is required!")
    ]
}

const userUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({ min: 3 }).withMessage("The name needs to be at least 3 characters long!"),
        body("password")
            .optional()
            .isLength({ min: 5 }).withMessage("The password needs to be at least 5 characters long!")
    ]
}

module.exports = { userCreateValidation, loginValidation, userUpdateValidation }