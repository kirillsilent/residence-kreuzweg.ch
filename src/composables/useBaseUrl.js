import { inject } from 'vue'
export function useBaseUrl() {
  return inject('baseUrl', '/')
}
