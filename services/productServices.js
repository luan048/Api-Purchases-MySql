import {ProductModel} from '../models/productModel.js'
import { database } from '../database/db.js'

export class ProductServices{
    async createProduct(productname, price){
        try {
            await database.sync()
            const newProduct = await ProductModel.create({productname, price})
            return {
                statusValue: 200,
                message: 'Sucessfully',
                productId: newProduct.id
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

    async getAllProducts(){
        try{
            await database.sync()
            const products = await ProductModel.findAll()
            return{
                statusValue: 200,
                message: 'Sucessfully',
                products: products
            }
        }

        catch(error) {
            console.log('Error on Get Services' +error)
            return {
                statusValue: 500,
                message: 'Internal Server Error'
            }
        }
    }

    async getProduct(id) {
        try {
            const product = await ProductModel.findByPk(id)
            if (product) {
                return {
                    statusValue: 200,
                    message: 'Successfully',
                    product: product
                }
            } 
            
            else {
                return {
                    statusValue: 404,
                    message: 'User not found'
                }
            }
        } 
        
        catch (error) {
            console.log('Error on Get Services:', error)
            return {
                statusValue: 500,
                message: 'Internal Server Error'
            }
        }
    }

    async updatePrice(id, newPrice) {
        try {
            await database.sync()
            const product = await ProductModel.findByPk(id)
            product.update({price: newPrice})
            return {
                statusValue: 200,
                message: 'Sucessfully'
            }
        }

        catch(error) {
            console.log('Error on Update Services: ' +error)
        }
    }

    async deleteProduct(id) {
        try {
            await database.sync()
            const product = await ProductModel.findByPk(id)
            product.destroy()
            return {
                statusValue: 200,
                message: 'Sucessfully'
            }
        }

        catch(error) {
            console.log('Error on Delete Services: ' +error)
        }
    }
}