import {PurchaseModel} from '../models/purchaseModel.js'
import { ProductModel } from '../models/productModel.js'
import { ClientModel } from '../models/clientModel.js'

import { database } from '../database/db.js'

export class PurchaseServices{
    async createPurchase(creatorId, creatorProductId, quantity){
        try{
            await database.sync()
            const newPurchase = await PurchaseModel.create({creatorId, creatorProductId, quantity})
            return {
                statusValue: 200,
                message: 'Sucessfully',
                purchaseId: newPurchase.id
            }
        }

        catch(error) {
            console.log('Error on Create Services: ' +error)
            return {
                statusValue: 500,
                message: 'Internal Server Error'
            }
        }
    }

    async deletePurchase(purchaseId, productId, clientId, password) {
        try {
            await database.sync()
            const purchase = await PurchaseModel.findByPk(purchaseId)
            const product = await ProductModel.findByPk(productId)
            const client = await ClientModel.findByPk(clientId)

            if(purchase.creatorId!==clientId || product.creatorProductId!==clientId){return{statusValue: 404, message: "Error, only the creator can delete"}}
            else if (client.password!== password){return {statusValue: 404, message: 'Password Error'}}
            
            await purchase.destroy()

            return {
                statusValue: 200,
                message: 'Deleted Sucessfully'
            }
        }

        catch(error) {
            console.log('Error on Create Services: ' +error)
            return {
                statusValue: 500,
                message: 'Internal Server Error'
            }
        }
    }
}