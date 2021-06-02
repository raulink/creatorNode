'use strict'

import { equipoAttributes } from '../src/api/equipo/equipo.model'

/**
 * With equipoAttributes we can spread whole attr model config
 */
module.exports = (() => {
  return {
    up: (sequelize, DataTypes) => {
      return sequelize.createTable('equipos', {
        ...equipoAttributes(DataTypes)
      })
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('equipos')
    }
  }
})()
