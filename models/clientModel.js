import { database } from '../database/db.js';
import { DataTypes, Sequelize } from 'sequelize';

export const ClientModel = database.define("tb_client", {
    id: {
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    username: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
}, {
    timestamps: false
});
