'use strict'

const { omitBy, isNil } = require('lodash')

function getAll({ status, until, after, limit, direction } = {}) {
  const queryParams = omitBy({
    status,
    until,
    after,
    limit,
    direction
  }, isNil)
  return this.httpRequest('/orders', queryParams)
}

function getOne(id) {
  return this.httpRequest('/orders/' + id)
}

function getByClientOrderId(clientOrderId) {
  const queryParams = { client_order_id: clientOrderId }
  return this.httpRequest('/orders:by_client_order_id', queryParams)
}

function post(order) {
  return this.httpRequest('/orders', null, order, 'POST')
}

function cancel(id) {
  return this.httpRequest('/orders/' + id, null, null, 'DELETE')
}

module.exports = {
  getAll,
  getOne,
  getByClientOrderId,
  post,
  cancel,
}
