import { database } from "../database/db.js";
import { DataTypes, Sequelize } from "sequelize";

import { ClientModel } from "./clientModel.js";
import { ProductModel } from "./productModel.js";

export const PurchaseModel = database.define("tb_purchase", {
    id:{
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    creatorId:{
        type: DataTypes.UUID,
        references: {
            model: ClientModel,
            key: ClientModel.id
        },
        allowNull: false
    },
    creatorProductId:{
        type: DataTypes.UUID,
        references:{
            model: ProductModel,
            key: ProductModel.id
        },
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})