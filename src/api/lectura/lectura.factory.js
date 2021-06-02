import factory from '../../services/factorygirl'
import models from '../../services/sequelize'
import faker from 'faker'

/**
 * For generating fakers strategies check the API (https://www.npmjs.com/package/faker)
 * Description: Generator use as default follow: 
 *  DataTypes.STRING: faker.lorem.sentence()
 *  DataTypes.INTEGER: faker.random.number()
 *  DataTypes.DATE: Date.now()
 * Rembember that is correct as well to build object with params to change this default
 * by building factory as factory.build('lectura', { some_ttr: some_other_val }, callback)
 *
 */
factory.define('lectura', models.lectura, {
      fkequipo:  () => faker.random.number(),
    fkcatplanUni:  () => faker.random.number()

  ,createdAt: () => new Date(),
  updatedAt: () => new Date()

})

export default factory
