// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import {body} from "express-validator";

export const ordersValidations = [
    body("userId").isString().withMessage("debe ser un string"),
    body("userId").notEmpty().withMessage("no debe estar vacio"),
    body ("coffee").isString().withMessage("debe ser un string"),
    body ("coffee").notEmpty().withMessage("no debe estar vacio")
]
