import { database } from "../database/db.js";
import { DataTypes, Sequelize } from "sequelize";
import { ClientModel } from "./clientModel.js";
import { ProductModel } from "./productModel.js";

const PurchasesModel = database.define("tb_purchases", {
    id:{
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    clientId:{
        type: DataTypes.UUID,
        references:{
            model: ClientModel,
            key: ClientModel.id
        },
        allowNull: false
    },
    productId:{
        type: DataTypes.UUID,
        references:{
            model: ProductModel,
            key: ProductModel.id
        },
        allowNull: false
    },
    quantity:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
})

export {PurchasesModel}