export interface User {
  id: string
  username: string
  avatar_url: string
  notifications: number
}

export interface Recap {
  id: string
  title: string
  thumbnail: string
  createdAt: string
  duration: string
  processingStatus: 'completed' | 'processing' | 'failed'
  environment: 'docker-local' | 'cloud'
}

export interface ProcessingJob {
  id: string
  movieTitle: string
  status: 'queued' | 'cutting' | 'merging' | 'encoding' | 'completed' | 'failed'
  progress: number
  currentStep: string
  estimatedTimeRemaining: string
}

export interface SyncLog {
  id: string
  timestamp: string
  status: 'success' | 'pending' | 'failed'
  type: 'metadata' | 'video-asset'
  message: string
  fileName?: string
  size?: string
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    avatar_url: string
  }
}
