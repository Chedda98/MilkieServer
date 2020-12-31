module.exports = (sequelize, DataTypes) => {
  return sequelize.define('MENU_TB', {
    menuName: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    price: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    option: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cafeId: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'cafe',
        key: 'id',
      },
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  })
}