import { api } from './api'

export const apiPost = {
  getLatestPosts: (page = 1, perPage = 20) => api.get('posts', { page, per_page: perPage }),

  getSinglePost: (postId: number) => api.get('posts/' + postId)
}
