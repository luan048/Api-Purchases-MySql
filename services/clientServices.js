import { ClientModel } from '../models/clientModel.js'
import { database } from '../database/db.js'

export class ClientServices{
    async createClient(clientname, password){
        try{
            await database.sync()
            const newClient = await ClientModel.create({clientname, password})
            return{
                clientId: newClient.id,
                message: 'Created Sucessfully',
                statusValue: 200 
            }
        }

        catch(error){
            console.log('Error on Create Services: ',error)
        }
    }

    async getAllClients() {
        try{
            await database.sync()
            const clients = await ClientModel.findAll()
            return{
                statusValue: 200,
                message: 'Secessfully',
                clients: clients
            }
        }

        catch(error){
            console.log('Error on Get Services: ',error)
        }
    }

    async getClient(id) {
        try{
            const client = await ClientModel.findByPk(id)
            if (client) {
                return {
                    statusValue: 200,
                    message: 'Sucessfully',
                    user: client
                }
            }

            else {
                return {
                    statusValue: 404,
                    message: 'Client Not Found'
                }
            }
        }

        catch(error){
            console.log('Error on Get Services: ',error)
        }
    }

    async updatePassword(id, newPassword) {
        try{
            await database.sync()
            const client = await ClientModel.findByPk(id)
            client.update({password: newPassword})
            return{
                statusValue: 200,
                message: 'Sucessfully'
            }
        }

        catch(error) {
            console.log('Error on Update Services: ',error)
        }
    }

    async deleteClient(id) {
        try{
            await database.sync()
            const client = await ClientModel.findByPk(id)
            client.destroy()
            return {
                statusValue: 200,
                message: 'Sucessfully'
            }
        }

        catch(error) {
            console.log('Error on Delete Services: ',error)
        }
    }
}