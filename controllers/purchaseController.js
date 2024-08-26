import {PurchaseServices} from '../services/purchaseServices.js'

const instanceUsersService = new PurchaseServices()

export async function createPurchase(req, res) {
    const {creatorId, creatorProductId, quantity} = req.body
    const resultado = instanceUsersService.createPurchase(creatorId, creatorProductId, quantity)
    return res.status(200).json({resultado})
}

export async function deletePurchase(req, res) {
    const {purchaseId, productId, clientId} = req.params
    const {password} = req.body
    const resultado = instanceUsersService.deletePurchase(purchaseId, productId, clientId, password)
    return res.status(200).json({resultado})
}