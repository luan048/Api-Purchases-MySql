import { database } from "../database/db.js";
import { DataTypes, Sequelize } from "sequelize";

export const ProductModel = database.define("tb_product", {
    id:{
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    productname:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    price:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
})