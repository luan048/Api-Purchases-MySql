import { Router } from "express";
import {createProduct, getAllProducts, getProduct, updatePrice, deleteProduct} from '../controllers/productController.js'
import {ProductValidator} from '../middleware/productMiddleware.js'

const routerProduct = Router()
const instanceProductService = new ProductValidator()

routerProduct.post("/createProduct", instanceProductService.createProductValidation, async(req, res) => {
    return await createProduct(req, res)
})

routerProduct.get("/getAllProducts", getAllProducts, async(req, res) => {
    return await getAllProducts(req, res)
})

routerProduct.get("/getProduct/:id", instanceProductService.getProductValidation, async(req, res) => {
    return await getProduct(req, res)
})

routerProduct.put("/newPrice/:id", instanceProductService.updatePriceValidation, async(req, res) => {
    return await updatePrice(req, res)
})

routerProduct.delete("/delProduct/:id", instanceProductService.deleteProductValidation, async(req, res) => {
    return await deleteProduct(req, res)
})

export {routerProduct}