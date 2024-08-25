import { database } from "../database/db.js";
import { DataTypes, Sequelize } from "sequelize";

const ProductModel = database.define("tb_product", {
    id: {
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    nameproduct: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: false
})

export {ProductModel}