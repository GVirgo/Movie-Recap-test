import { useState } from 'react'
import { SyncLog, GitHubRepo } from '../types'

const mockRepos: GitHubRepo[] = [
  {
    id: 1,
    name: 'movie-recap-data',
    full_name: 'waiyan-dev/movie-recap-data',
    owner: {
      login: 'waiyan-dev',
      avatar_url: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    },
  },
  {
    id: 2,
    name: 'personal-projects',
    full_name: 'waiyan-dev/personal-projects',
    owner: {
      login: 'waiyan-dev',
      avatar_url: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    },
  },
]

const mockSyncLogs: SyncLog[] = [
  {
    id: '1',
    timestamp: '2024-01-15 14:32:15',
    status: 'success',
    type: 'metadata',
    message: 'Successfully synced movie metadata',
    fileName: 'inception-recap-data.json',
    size: '245 KB',
  },
  {
    id: '2',
    timestamp: '2024-01-15 14:15:42',
    status: 'pending',
    type: 'video-asset',
    message: 'Uploading video asset to GitHub LFS',
    fileName: 'inception-recap.mp4',
    size: '1.2 GB',
  },
  {
    id: '3',
    timestamp: '2024-01-15 13:58:20',
    status: 'success',
    type: 'metadata',
    message: 'Successfully synced subtitles and script',
    fileName: 'inception-script.srt',
    size: '156 KB',
  },
  {
    id: '4',
    timestamp: '2024-01-14 16:45:10',
    status: 'success',
    type: 'metadata',
    message: 'Successfully synced project configuration',
    fileName: 'config.json',
    size: '12 KB',
  },
]

export const useGitHubSync = () => {
  const [repos] = useState<GitHubRepo[]>(mockRepos)
  const [syncLogs] = useState<SyncLog[]>(mockSyncLogs)
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo>(mockRepos[0])
  const [isSyncing, setIsSyncing] = useState(false)

  const handleSync = async () => {
    setIsSyncing(true)
    // Simulate sync operation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSyncing(false)
  }

  return {
    repos,
    syncLogs,
    selectedRepo,
    setSelectedRepo,
    isSyncing,
    handleSync,
  }
}
