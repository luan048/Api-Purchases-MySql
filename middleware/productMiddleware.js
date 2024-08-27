export class ProductValidator {
    async createProductValidation(req, res, next) {
        const {productname, price} = req.body
        const fields = ["productname", "price"]
        const errors = []

        for(const field of fields) {
            if(!req.body[field]) {
                errors.push(`${errors} está vazio`)
            }
        }

        if(errors.length) {
            return res.status(404).json({errors})
        }

        next()
    }

    async getProductValidation(req, res, next) {
        const {id} = req.params
        const errors = []

        if(!id) {
            errors.push('Id está vazio')
        }

        if(errors.length) {
            return res.status(404).json({errors})
        }

        next()
    }

    async updatePriceValidation(req, res, next) {
        const {id} = req.params
        const {newPrice} = req.body
        const fields = ["newPrice"]
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

    async deleteProductValidation(req, res, next) {
        const {id} = req.params
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