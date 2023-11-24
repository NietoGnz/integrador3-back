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
    check('precio')
        .notEmpty()
        .withMessage('El precio es requerido')
        .trim(),
    check('stock')
        .notEmpty()
        .withMessage('El stock es requerido')
        .trim(),
    check('marca')
        .notEmpty()
        .withMessage('La marca es requerida')
        .trim(),
    check('categoria')
        .notEmpty()
        .withMessage('La categoria es requerida')
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
