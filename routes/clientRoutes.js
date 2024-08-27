import { Router } from "express";
import {createClient, getAllClients, getClient, updatePassword, deleteClient} from '../controllers/clientController.js'
import {ClientValidator} from '../middleware/clientMiddleware.js'

const routerClient = Router()
const instanceClientService = new ClientValidator()

routerClient.post("/register-client", instanceClientService.createClientValidation, async(req, res) => {
    return await createClient(req, res)
})

routerClient.get("/", getAllClients, async(req, res) => {
    return await getAllClients(req, res)
})

routerClient.get("/getClient/:id", instanceClientService.getClientValidation, async(req, res) => {
    return await getClient(req, res)
})

routerClient.put("/newPassword/:id", instanceClientService.updatePasswordValidation, async(req, res) => {
    return await updatePassword(req, res)
})

routerClient.delete("/delClient/:id", instanceClientService.deleteClientValidation, async(req, res) => {
    return await deleteClient(req, res)
})

export {routerClient}