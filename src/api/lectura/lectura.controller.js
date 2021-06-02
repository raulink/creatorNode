
import { success, notFound } from '../../services/response'
import models from '../../services/sequelize'
import consoleColors from '../../utils/console_colors'
import { errorHandler } from '../../utils/error_handler'

export const index = async ({ querymen: { query, select, cursor } }, res, next) => {
  try {
    const lecturas = await models.lectura.findAll()
    success(res, 200)({ lecturas: lecturas })
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

export const show = async ({ params }, res, next) => {
  try {
    const s = await models.lectura.findOne({ where: { id: params.id } })
    if (s != null) success(res)({ lectura: s })
    else notFound(res)({})
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

/**
 * This method creates a new lectura by using bodymen and other usefull functions from the response service, check it ;)
 * @param {*} param0 params from the request, getting it with bodymen
 * @param {*} res res object to return to fetcher
 * @param {*} next next function from Express to go through the next middleware on the fetch
 */
export const create = async ({ bodymen: { body } }, res, next) => {
  try {
    const newlectura = await models.lectura.build(body)
    if (newlectura) {
      await newlectura.save()
            if (newlectura.id) {
                success(res, 200)(newlectura)
            } else throw 'Cant save the lectura on DB'
        } else throw 'Cant build the lectura model'
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

export const update = async ({ bodymen: { body }, params, lectura }, res, next) => {
  try {
    const s = await models.lectura.update(body, { where: { id: params.id } })
    if (s != null) success(res)({ msj: 'lectura updated', lectura: s })
    // eslint-disable-next-line no-throw-literal
    else throw 'lectura dont exist!'
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}

export const destroy = async ({ params }, res, next) => {
  try {
    const s = await models.lectura.findOne({ where: { id: params.id } })
    const deleted = await s.destroy()
    success(res, 200)({ msj: 'lectura deleted', lectura: deleted })
  } catch (err) {
    errorHandler(err)
    notFound(res)({ msj: err })
  }
}
