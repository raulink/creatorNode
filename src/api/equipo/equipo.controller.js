
import { success, notFound } from '../../services/response'
import models from '../../services/sequelize'
import consoleColors from '../../utils/console_colors'
import { errorHandler } from '../../utils/error_handler'

export const index = async ({ querymen: { query, select, cursor } }, res, next) => {
  try {
    const equipos = await models.equipo.findAll()
    success(res, 200)({ equipos: equipos })
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

export const show = async ({ params }, res, next) => {
  try {
    const s = await models.equipo.findOne({ where: { id: params.id } })
    if (s != null) success(res)({ equipo: s })
    else notFound(res)({})
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

/**
 * This method creates a new equipo by using bodymen and other usefull functions from the response service, check it ;)
 * @param {*} param0 params from the request, getting it with bodymen
 * @param {*} res res object to return to fetcher
 * @param {*} next next function from Express to go through the next middleware on the fetch
 */
export const create = async ({ bodymen: { body } }, res, next) => {
  try {
    const newequipo = await models.equipo.build(body)
    if (newequipo) {
      await newequipo.save()
            if (newequipo.id) {
                success(res, 200)(newequipo)
            } else throw 'Cant save the equipo on DB'
        } else throw 'Cant build the equipo model'
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

export const update = async ({ bodymen: { body }, params, equipo }, res, next) => {
  try {
    const s = await models.equipo.update(body, { where: { id: params.id } })
    if (s != null) success(res)({ msj: 'equipo updated', equipo: s })
    // eslint-disable-next-line no-throw-literal
    else throw 'equipo dont exist!'
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

export const destroy = async ({ params }, res, next) => {
  try {
    const s = await models.equipo.findOne({ where: { id: params.id } })
    const deleted = await s.destroy()
    success(res, 200)({ msj: 'equipo deleted', equipo: deleted })
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}
