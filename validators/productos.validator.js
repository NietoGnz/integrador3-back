import { check } from "express-validator";
import productoMiddleware from "../middlewares/productos.middleware.js";

const productoDeleteValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para el borrado'),
    productoMiddleware
]

const productoCreateValidator = [
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es requerido')
        .trim(),
    productoMiddleware
]

const productoUpdateValidator = [
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es requerido')
        .trim(),
    productoMiddleware
]
const productoReadOneValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para lectura'),
    productoMiddleware
]
export default {
    productoCreateValidator,
    productoDeleteValidator,
    productoUpdateValidator,
    productoReadOneValidator
}
