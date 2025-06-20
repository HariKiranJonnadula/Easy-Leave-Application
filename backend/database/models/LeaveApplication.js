const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const LeaveApplication = sequelize.define('LeaveApplication', {
    leave_type: {
        type: DataTypes.ENUM('Sick Leave', 'Casual Leave'),
        allowNull: false,
    },
    leave_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    remark: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected', 'On Hold'),
        defaultValue: 'Pending',
    },
}, {
    timestamps: true,
});

LeaveApplication.belongsTo(User, { foreignKey: 'user_id' });

module.exports = LeaveApplication;
