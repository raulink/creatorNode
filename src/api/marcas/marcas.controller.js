
import { success, notFound } from '../../services/response'
import models from '../../services/sequelize'
import consoleColors from '../../utils/console_colors'
import { errorHandler } from '../../utils/error_handler'

export const index = async ({ querymen: { query, select, cursor } }, res, next) => {
  try {
    const marcass = await models.marcas.findAll()
    success(res, 200)({ marcass: marcass })
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

export const show = async ({ params }, res, next) => {
  try {
    const s = await models.marcas.findOne({ where: { id: params.id } })
    if (s != null) success(res)({ marcas: s })
    else notFound(res)({})
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

/**
 * This method creates a new marcas by using bodymen and other usefull functions from the response service, check it ;)
 * @param {*} param0 params from the request, getting it with bodymen
 * @param {*} res res object to return to fetcher
 * @param {*} next next function from Express to go through the next middleware on the fetch
 */
export const create = async ({ bodymen: { body } }, res, next) => {
  try {
    const newmarcas = await models.marcas.build(body)
    if (newmarcas) {
      await newmarcas.save()
            if (newmarcas.id) {
                success(res, 200)(newmarcas)
            } else throw 'Cant save the marcas on DB'
        } else throw 'Cant build the marcas model'
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

export const update = async ({ bodymen: { body }, params, marcas }, res, next) => {
  try {
    const s = await models.marcas.update(body, { where: { id: params.id } })
    if (s != null) success(res)({ msj: 'marcas updated', marcas: s })
    // eslint-disable-next-line no-throw-literal
    else throw 'marcas dont exist!'
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

export const destroy = async ({ params }, res, next) => {
  try {
    const s = await models.marcas.findOne({ where: { id: params.id } })
    const deleted = await s.destroy()
    success(res, 200)({ msj: 'marcas deleted', marcas: deleted })
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}
