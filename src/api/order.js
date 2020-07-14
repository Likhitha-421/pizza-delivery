import request from '@/utils/request'

export function createOrder(data) {
    return request({
        url: '/orders/create',
        method: 'post',
        data
    })
}

export function checkOrder(no) {
  return request({
    url: '/orders/check',
    method: 'get',
    params: { no }
  })
}
