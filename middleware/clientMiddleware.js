export class ClientValidator {
    async createClientValidation(req, res, next) {
        const {clientname, password} = req.body
        const fields = ["clientname", "password"]
        const errors = []

        for(const field of fields) {
            if (!req.body[field]) {
                errors.push(`${field} está vazio`)
            }
        }

        if(errors.length) {
            return res.status(404).json({errors})
        }

        next()
    }

    async getClientValidation(req, res, next) {
        const {id} = req.params
        const errors = []

        if(!id) {
            errors.push('Id vazio')
        }

        if(errors.length) {
            return res.status(404).json({errors})
        }

        next()
    }

    async updatePasswordValidation(req, res, next) {
        const {id} = req.params
        const {newPassword} = req.body
        const fields = ["newPassword"]
        const errors = []

        for(const field of fields) {
            if(!req.body[field]) {
                errors.push(`${field} está vazio`)
            }
        }

        if(errors.length) {
            return res.status(404).json({errors})
        }

        next()
    }

    async deleteClientValidation(req, res, next) {
        const {id} = req.body
        const errors = []

        if(!id) {
            errors.push('Id está vazio')
        }

        if(errors.length) {
            return res.status(404).json({errors})
        }

        next()
    }
}