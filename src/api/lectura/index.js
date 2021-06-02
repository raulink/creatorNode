/* eslint-disable camelcase */
import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master, token } from '../../services/passport'
import { index, show, create, update, destroy } from './lectura.controller'
import { lecturaDataSchema } from './lectura.model'

const router = new Router()
const {
        fkequipo,    fkcatplanUni,
} = lecturaDataSchema

/**
 * @api {get} /lecturas Retrieve lecturas
 * @apiName Retrievelecturas
 * @apiGroup lectura
 * @apiPermission admin
 * @apiParam {String} access_token lectura access_token.
 * @apiUse listParams
 * @apiSuccess {Object[]} lecturas List of lecturas.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)



/**
 * @api {get} /lecturas/:id Retrieve lectura
 * @apiName Retrievelectura
 * @apiGroup lectura
 * @apiPermission public
 * @apiSuccess {Object} lectura lectura's data.
 * @apiError 404 lectura not found.
 */
router.get('/:id',
  show)

/**
 * @api {post} /lecturas Create lectura
 * @apiName Createlectura
 * @apiGroup lectura
 * @apiPermission master
 * @apiParam {String} access_token Master access_token.
 * @apiSuccess (Sucess 201) {Object} lectura lectura's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Master access only.
 * @apiError 409 Email already registered.
 */
router.post('/',
  master(),
  body({
      ...lecturaDataSchema
  }),
  create)

/**
 * @api {put} /lecturas/:id Update lectura
 * @apiName Updatelectura
 * @apiGroup lectura
 * @apiPermission lectura
 * @apiParam {String} access_token lectura access_token.
 * @apiSuccess {Object} lectura lectura's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current lectura or admin access only.
 * @apiError 404 lectura not found.
 */
router.put('/:id',
  token({ required: true }),
  body({
      ...lecturaDataSchema
  }),
  update)


/**
 * @api {delete} /lecturas/:id Delete lectura
 * @apiName Deletelectura
 * @apiGroup lectura
 * @apiPermission admin
 * @apiParam {String} access_token lectura access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 401 Admin access only.
 * @apiError 404 lectura not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
