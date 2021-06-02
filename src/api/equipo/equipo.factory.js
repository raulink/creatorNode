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
 * by building factory as factory.build('equipo', { some_ttr: some_other_val }, callback)
 *
 */
factory.define('equipo', models.equipo, {
      idequpadre:  () => faker.random.number(),
    idequloc:  () => faker.random.number(),
    fkcomentario:  () => faker.random.number(),
    fkcatequtipoequ:  () => faker.random.number(),
    fkproved:  () => faker.random.number(),
    fkcatcc:  () => faker.random.number(),
    fkequplan:  () => faker.random.number(),
    fksistema:  () => faker.random.number(),
    fksubsistema:  () => faker.random.number(),
    fksisprioridad:  () => faker.random.number(),
    fkmodel:  () => faker.random.number(),
    idsisequtipo:  () => faker.random.number(),
    concatena:  () => faker.lorem.sentence(),
    fcarranque:  () => Date.now(),
    idequfueraserv:  () => faker.random.number(),
    localizacion:  () => faker.lorem.sentence(),
    fechacreacion:  () => Date.now(),
    identificadorserie:  () => faker.lorem.sentence(),
    tieneequipos:  () => faker.random.number(),
    rutaidslocalizacion:  () => faker.lorem.sentence(),
    fccompra:  () => Date.now(),
    aniofabricacion:  () => faker.random.number(),
    fkcattipoespecif:  () => faker.random.number(),
    edocordgeog:  () => faker.random.number(),
    latitudindiv:  () => faker.lorem.sentence(),
    longitudindiv:  () => faker.lorem.sentence(),
    latitudhereda:  () => faker.lorem.sentence(),
    longitudhereda:  () => faker.lorem.sentence()

  ,createdAt: () => new Date(),
  updatedAt: () => new Date()

})

export default factory
