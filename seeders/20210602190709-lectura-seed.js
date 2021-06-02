'use strict'
import lecturaFactory from '../src/api/lectura/lectura.factory'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let lecturasArray = []
    const lecturas = await lecturaFactory.buildMany('lectura', 100)
    lecturas.map(lecturaFactory => {
      lecturasArray.push(lecturaFactory.dataValues)
    })
    lecturasArray = lecturasArray.map(lectura => { delete lectura.id; return lectura })
    return queryInterface.bulkInsert('lecturas', lecturasArray, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('lecturas', null, {})
  }
}
