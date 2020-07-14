import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/items',
    method: 'get',
    params: query
  })
}

export function fetchItem(id) {
  return request({
    url: '/items/detail',
    method: 'get',
    params: { id }
  })
}
