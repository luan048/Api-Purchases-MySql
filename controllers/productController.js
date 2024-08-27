import { ProductServices } from "../services/productServices.js";

const instanceUsersService = new ProductServices()

export async function createProduct(req, res) {
    const {productname, price} = req.body
    const resultado = await instanceUsersService.createProduct(productname, price)
    return res.status(200).json({resultado})
}

export async function getAllProducts(req, res) {
    const resultado = await instanceUsersService.getAllProducts()
    return res.status(200).json({resultado})
}

export async function getProduct(req, res) {
    const {id} = req.params

    try {
        const resultado = await instanceUsersService.getProduct(id)
        if(resultado.product) {
            return res.status(200).json(resultado)
        }
        else {
            return res.status(500).json({message: 'Product Not Found'})
        }
    }

    catch (error) {
        console.error('Error in GetProduct controller:', error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

export async function updatePrice(req, res) {
    const {id} = req.params
    const {newPrice} = req.body
    await instanceUsersService.updatePrice(id, newPrice)
    return res.status(200).json({message: 'Sucessfully'})
}

export async function deleteProduct(req, res) {
    const {id} = req.params
    await instanceUsersService.deleteProduct(id)
    return res.status(200).json({message: 'Sucessfully'})
}