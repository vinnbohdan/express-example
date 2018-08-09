'use strict';  

// Таблица характеристик для конкретного товара (Связана с таблицами подкатегорий и товаров)
module.exports = (sequelize, DataTypes) => {
    var Specification = sequelize.define('Specification', {
        id : { 
          type: DataTypes.INTEGER, 
          autoIncrement: true, 
          primaryKey: true 
        },
        name : {  
             type: DataTypes.STRING,       // название характеристики
             allowNull: false
        }, 
        value : {  
            type: DataTypes.STRING,       // значение характеристики
            allowNull: false
        }, 
        createDate : {
          type: DataTypes.DATE,
          allowNull: false
        },
        modifyDate : {
              type: DataTypes.DATE,
              allowNull: false
            },
        removeDate : {
              type: DataTypes.DATE,
              allowNull: true
            },
        createdBy : {
              type: DataTypes.STRING,
              allowNull:false
            },
        editedBy : {
              type: DataTypes.STRING,
              allowNull: false
            }
    });
  
    // Таблица товаров (Связана с категориями и подкатегориями)
    Specification.associate = function (models) {
        models.Specification.belongsTo(models.Product);
        models.Specification.belongsTo(models.Subcategory);
      };

    return Specification;
  };



