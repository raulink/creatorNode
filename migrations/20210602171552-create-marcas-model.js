'use strict'

import { marcasAttributes } from '../src/api/marcas/marcas.model'

/**
 * With marcasAttributes we can spread whole attr model config
 */
module.exports = (() => {
  return {
    up: (sequelize, DataTypes) => {
      return sequelize.createTable('marcass', {
        ...marcasAttributes(DataTypes)
      })
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('marcass')
    }
  }
})()
