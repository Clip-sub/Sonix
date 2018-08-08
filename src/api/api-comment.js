import { api } from './api'

export const apiComment = {
  getLatestComments: (page = 1, perPage = 46) => api.get('comments', { page, per_page: perPage })
}
