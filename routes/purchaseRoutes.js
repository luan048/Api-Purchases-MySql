import { Router } from "express";
import {createPurchase, deletePurchase} from '../controllers/purchaseController.js'

const routerPurchase = Router()

routerPurchase.post("/createPurchase", async(req, res) => {
    return await createPurchase(req, res)
})

routerPurchase.delete("/delPurchase/:id/:clientId", async(req, res) => {
    return await deletePurchase(req, res)
})

export {routerPurchase}