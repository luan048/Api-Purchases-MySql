import express from "express";

import {routerClient} from './routes/clientRoutes.js'
import {routerProduct} from './routes/productRoutes.js'
import {routerPurchase} from './routes/purchaseRoutes.js'

import {tryToConnect} from './database/db.js'

const server = express()
const port = 3001

server.use(express.json())
server.use(routerClient)
server.use(routerProduct)
server.use(routerPurchase)

server.listen(port, () => {
    tryToConnect()
    console.log('Running on port: ', port)
})