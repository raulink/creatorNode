'use strict'
import equipoFactory from '../src/api/equipo/equipo.factory'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let equiposArray = []
    const equipos = await equipoFactory.buildMany('equipo', 100)
    equipos.map(equipoFactory => {
      equiposArray.push(equipoFactory.dataValues)
    })
    equiposArray = equiposArray.map(equipo => { delete equipo.id; return equipo })
    return queryInterface.bulkInsert('equipos', equiposArray, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipos', null, {})
  }
}
