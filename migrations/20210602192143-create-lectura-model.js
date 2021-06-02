'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lectura.models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fkEquipo: {
        type: Sequelize.INTEGER
      },
      fkCatPlanUni: {
        type: Sequelize.INTEGER
      },
      fc_lect: {
        type: Sequelize.DATE
      },
      lect_base: {
        type: Sequelize.INTEGER
      },
      lect: {
        type: Sequelize.INTEGER
      },
      es_ini_mes: {
        type: Sequelize.BOOLEAN
      },
      es_lect_real: {
        type: Sequelize.BOOLEAN
      },
      es_lect_1: {
        type: Sequelize.BOOLEAN
      },
      es_lect_fuera_serv: {
        type: Sequelize.BOOLEAN
      },
      lect_fin_mes: {
        type: Sequelize.INTEGER
      },
      fd: {
        type: Sequelize.STRING
      },
      tipo_origen: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lectura.models');
  }
};