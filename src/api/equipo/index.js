/* eslint-disable camelcase */
import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master, token } from '../../services/passport'
import { index, show, create, update, destroy } from './equipo.controller'
import { equipoDataSchema } from './equipo.model'

const router = new Router()
const {
        idequpadre,    idequloc,    fkcomentario,    fkcatequtipoequ,    fkproved,    fkcatcc,    fkequplan,    fksistema,    fksubsistema,    fksisprioridad,    fkmodel,    idsisequtipo,    concatena,    fcarranque,    idequfueraserv,    localizacion,    fechacreacion,    identificadorserie,    tieneequipos,    rutaidslocalizacion,    fccompra,    aniofabricacion,    fkcattipoespecif,    edocordgeog,    latitudindiv,    longitudindiv,    latitudhereda,    longitudhereda,
} = equipoDataSchema

/**
 * @api {get} /equipos Retrieve equipos
 * @apiName Retrieveequipos
 * @apiGroup equipo
 * @apiPermission admin
 * @apiParam {String} access_token equipo access_token.
 * @apiUse listParams
 * @apiSuccess {Object[]} equipos List of equipos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Admin access only.
 */
router.get('/',
  //token({ required: false, roles: ['admin'] }),
  query(),
  index)



/**
 * @api {get} /equipos/:id Retrieve equipo
 * @apiName Retrieveequipo
 * @apiGroup equipo
 * @apiPermission public
 * @apiSuccess {Object} equipo equipo's data.
 * @apiError 404 equipo not found.
 */
router.get('/:id',
  show)

/**
 * @api {post} /equipos Create equipo
 * @apiName Createequipo
 * @apiGroup equipo
 * @apiPermission master
 * @apiParam {String} access_token Master access_token.
 * @apiSuccess (Sucess 201) {Object} equipo equipo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Master access only.
 * @apiError 409 Email already registered.
 */
router.post('/',
  master(),
  body({
      ...equipoDataSchema
  }),
  create)

/**
 * @api {put} /equipos/:id Update equipo
 * @apiName Updateequipo
 * @apiGroup equipo
 * @apiPermission equipo
 * @apiParam {String} access_token equipo access_token.
 * @apiSuccess {Object} equipo equipo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current equipo or admin access only.
 * @apiError 404 equipo not found.
 */
router.put('/:id',
  //token({ required: true }),
  body({
      ...equipoDataSchema
  }),
  update)


/**
 * @api {delete} /equipos/:id Delete equipo
 * @apiName Deleteequipo
 * @apiGroup equipo
 * @apiPermission admin
 * @apiParam {String} access_token equipo access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 401 Admin access only.
 * @apiError 404 equipo not found.
 */
router.delete('/:id',
  //token({ required: true, roles: ['admin'] }),
  destroy)

export default router
