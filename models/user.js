module.exports = (sequelize, DataTypes) => {
  return sequelize.define('USER_TB', {
    nickName: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  })
}