'use strict'

import { lecturaAttributes } from '../src/api/lectura/lectura.model'

/**
 * With lecturaAttributes we can spread whole attr model config
 */
module.exports = (() => {
  return {
    up: (sequelize, DataTypes) => {
      return sequelize.createTable('lecturas', {
        ...lecturaAttributes(DataTypes)
      })
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('lecturas')
    }
  }
})()
