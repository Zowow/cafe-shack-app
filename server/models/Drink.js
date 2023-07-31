module.exports = (sequelize, DataTypes) => {
    const Drink = sequelize.define("Drink", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.BLOB("long"),
            allowNull: false,
        }
    });
    return Drink;
}