import { ClientServices } from '../services/clientServices.js'

const instanceUsersService = new ClientServices()

export async function createClient(req, res) {
    const {clientname, password} = req.body
    const resultado = await instanceUsersService.createClient(clientname, password)
    return res.status(200).json({resultado})
}

export async function getAllClients(req, res) {
    const resultado = await instanceUsersService.getAllClients()
    return res.status(200).json({resultado})
}

export async function getClient(req, res) {
    const {id} = req.params
    try {
        const resultado = await instanceUsersService.getClient(id)
        if(resultado.client) {
            return res.status(200).json(resultado)
        }

        else {
            return res.status(404).json({message: 'User not found'})
        }
    }

    catch(error) {
        console.error('Error in getClient controller', error)
        return res.status(500).json({message: 'Error'})
    }
}

export async function updatePassword(req, res) {
    const {id} = req.params
    const {newPassword} = req.body
    await instanceUsersService.updatePassword(id, newPassword)
    return res.status(200).json({message: 'Sucessfully'})
}

export async function deleteClient(req, res) {
    const {id} = req.params
    await instanceUsersService.deleteClient(id)
    return res.status(200).json({message: 'Sucessfully'})
}