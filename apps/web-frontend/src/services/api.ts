import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const githubClient = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
})

export const videoApi = {
  async getProcessingStatus() {
    return apiClient.get('/api/processing/status')
  },
  async startProcessing(data: any) {
    return apiClient.post('/api/processing/start', data)
  },
  async getRecents() {
    return apiClient.get('/api/recaps/recent')
  },
}

export const githubApi = {
  async getUserRepos(username: string) {
    return githubClient.get(`/users/${username}/repos`)
  },
  async syncData(owner: string, repo: string, data: any) {
    return githubClient.post(`/repos/${owner}/${repo}/contents/data.json`, data)
  },
  async getSyncLogs(owner: string, repo: string) {
    return githubClient.get(`/repos/${owner}/${repo}/commits`)
  },
}
