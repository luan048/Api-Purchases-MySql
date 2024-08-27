import {PurchaseServices} from '../services/purchaseServices.js'

const instanceUsersService = new PurchaseServices()

export async function createPurchase(req, res) {
    const {creatorId, creatorProductId, quantity} = req.body
    const resultado = await instanceUsersService.createPurchase(creatorId, creatorProductId, quantity)
    return res.status(200).json({resultado})
}

export async function deletePurchase(req, res) {
    const {id: purchaseId, clientId} = req.params
    const resultado = await instanceUsersService.deletePurchase(purchaseId, clientId)
    return res.status(200).json({resultado})
}