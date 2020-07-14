import request from '@/utils/request'

export function fetchCategoryList(query) {
  return request({
    url: '/categories',
    method: 'get',
    params: query
  })
}

export function fetchCategory(id) {
  return request({
    url: '/categories/detail',
    method: 'get',
    params: { id }
  })
}
