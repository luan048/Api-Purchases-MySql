import {database} from '../database/db.js'
import { DataTypes, Sequelize } from 'sequelize'

export const ClientModel = database.define("tb_client", {
    id:{
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    clientname:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})