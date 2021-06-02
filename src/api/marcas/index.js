/* eslint-disable camelcase */
import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master, token } from '../../services/passport'
import { index, show, create, update, destroy } from './marcas.controller'
import { marcasDataSchema } from './marcas.model'

const router = new Router()
const {
        name,
} = marcasDataSchema

/**
 * @api {get} /marcass Retrieve marcass
 * @apiName Retrievemarcass
 * @apiGroup marcas
 * @apiPermission admin
 * @apiParam {String} access_token marcas access_token.
 * @apiUse listParams
 * @apiSuccess {Object[]} marcass List of marcass.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)



/**
 * @api {get} /marcass/:id Retrieve marcas
 * @apiName Retrievemarcas
 * @apiGroup marcas
 * @apiPermission public
 * @apiSuccess {Object} marcas marcas's data.
 * @apiError 404 marcas not found.
 */
router.get('/:id',
  show)

/**
 * @api {post} /marcass Create marcas
 * @apiName Createmarcas
 * @apiGroup marcas
 * @apiPermission master
 * @apiParam {String} access_token Master access_token.
 * @apiSuccess (Sucess 201) {Object} marcas marcas's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Master access only.
 * @apiError 409 Email already registered.
 */
router.post('/',
  master(),
  body({
      ...marcasDataSchema
  }),
  create)

/**
 * @api {put} /marcass/:id Update marcas
 * @apiName Updatemarcas
 * @apiGroup marcas
 * @apiPermission marcas
 * @apiParam {String} access_token marcas access_token.
 * @apiSuccess {Object} marcas marcas's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current marcas or admin access only.
 * @apiError 404 marcas not found.
 */
router.put('/:id',
  token({ required: true }),
  body({
      ...marcasDataSchema
  }),
  update)


/**
 * @api {delete} /marcass/:id Delete marcas
 * @apiName Deletemarcas
 * @apiGroup marcas
 * @apiPermission admin
 * @apiParam {String} access_token marcas access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 401 Admin access only.
 * @apiError 404 marcas not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
