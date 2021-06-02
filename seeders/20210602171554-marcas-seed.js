'use strict'
import marcasFactory from '../src/api/marcas/marcas.factory'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let marcassArray = []
    const marcass = await marcasFactory.buildMany('marcas', 25)
    marcass.map(marcasFactory => {
      marcassArray.push(marcasFactory.dataValues)
    })
    marcassArray = marcassArray.map(marcas => { delete marcas.id; return marcas })
    return queryInterface.bulkInsert('marcass', marcassArray, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('marcass', null, {})
  }
}
