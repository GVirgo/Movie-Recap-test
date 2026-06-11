import React, { useState } from 'react'
import { User, Recap } from '../types'
import Header from './Header'
import TabNavigation from './TabNavigation'
import ProcessingStatusCard from './ProcessingStatusCard'
import RecapGrid from './RecapGrid'
import { useVideoProcessing, useGitHubSync } from '../hooks'

const MovieRecapMobileUI: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'generator' | 'sync'>('dashboard')
  const { job } = useVideoProcessing()
  const { repos, syncLogs, selectedRepo, setSelectedRepo, isSyncing, handleSync } = useGitHubSync()
  const [formData, setFormData] = useState({
    movieTitle: '',
    script: '',
    videoPath: '',
    voiceover: 'myanmar-tts',
  })

  const mockUser: User = {
    id: '1',
    username: 'waiyan-dev',
    avatar_url: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    notifications: 3,
  }

  const mockRecaps: Recap[] = [
    {
      id: '1',
      title: 'Inception Summary',
      thumbnail: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=300&fit=crop',
      createdAt: '2 hours ago',
      duration: '3:45',
      processingStatus: 'completed',
      environment: 'docker-local',
    },
    {
      id: '2',
      title: 'Interstellar Recap',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=300&fit=crop',
      createdAt: '5 hours ago',
      duration: '4:12',
      processingStatus: 'completed',
      environment: 'docker-local',
    },
    {
      id: '3',
      title: 'Oppenheimer Scene',
      thumbnail: 'https://images.unsplash.com/photo-1533097610162-1e88e102de26?w=500&h=300&fit=crop',
      createdAt: '1 day ago',
      duration: '2:38',
      processingStatus: 'completed',
      environment: 'docker-local',
    },
    {
      id: '4',
      title: 'The Matrix Cuts',
      thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
      createdAt: '2 days ago',
      duration: '3:22',
      processingStatus: 'completed',
      environment: 'docker-local',
    },
  ]

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerateRecap = () => {
    if (!formData.movieTitle || !formData.script || !formData.videoPath) {
      alert('Please fill in all required fields')
      return
    }
    console.log('Generating recap with:', formData)
    alert(`Recap generation started for "${formData.movieTitle}"!`)
    setFormData({ movieTitle: '', script: '', videoPath: '', voiceover: 'myanmar-tts' })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 p-4">
      {/* Mobile Frame Container (375x812px) */}
      <div className="w-full max-w-[375px] h-[812px] bg-slate-dark rounded-[40px] border-[12px] border-black shadow-2xl overflow-hidden flex flex-col">
        {/* Status Bar Simulation */}
        <div className="bg-black px-6 py-2 flex items-center justify-between text-white text-xs">
          <span>9:41</span>
          <div className="flex gap-1">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-slate-900 overflow-hidden flex flex-col">
          {/* Header */}
          <Header user={mockUser} />

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto bg-slate-900 px-4 py-4 space-y-4">
            {/* DASHBOARD VIEW */}
            {activeTab === 'dashboard' && (
              <>
                <ProcessingStatusCard job={job} />
                <RecapGrid recaps={mockRecaps} />
              </>
            )}

            {/* GENERATOR VIEW */}
            {activeTab === 'generator' && (
              <div className="space-y-4 pb-4">
                <h2 className="text-lg font-bold text-white">Create New Recap</h2>

                {/* Movie Title Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Movie Title *</label>
                  <input
                    type="text"
                    name="movieTitle"
                    value={formData.movieTitle}
                    onChange={handleFormChange}
                    placeholder="e.g., Inception, Interstellar"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:border-netflix-red focus:outline-none focus:ring-2 focus:ring-netflix-red/30 transition-all"
                  />
                </div>

                {/* Script Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Script / SRT Subtitles *</label>
                  <textarea
                    name="script"
                    value={formData.script}
                    onChange={handleFormChange}
                    placeholder="Paste your movie recap script or SRT subtitle data here..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:border-netflix-red focus:outline-none focus:ring-2 focus:ring-netflix-red/30 transition-all resize-none h-32"
                  />
                </div>

                {/* Video File Source Path */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Video File Path *</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="videoPath"
                      value={formData.videoPath}
                      onChange={handleFormChange}
                      placeholder="/storage/videos/movie.mp4"
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:border-netflix-red focus:outline-none focus:ring-2 focus:ring-netflix-red/30 transition-all"
                    />
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors text-sm font-medium">
                      📁 Browse
                    </button>
                  </div>
                </div>

                {/* Voiceover / TTS Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Voiceover / TTS</label>
                  <select
                    name="voiceover"
                    value={formData.voiceover}
                    onChange={handleFormChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:border-netflix-red focus:outline-none focus:ring-2 focus:ring-netflix-red/30 transition-all cursor-pointer"
                  >
                    <option value="myanmar-tts">🇲🇲 Myanmar TTS (Default)</option>
                    <option value="english-tts">🇬🇧 English TTS</option>
                    <option value="no-voiceover">🔇 No Voiceover (Music Only)</option>
                    <option value="custom-audio">🎵 Use Custom Audio Track</option>
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerateRecap}
                  className="w-full bg-gradient-to-r from-netflix-red to-orange-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-netflix-red/50 hover:shadow-orange-600/50 mt-6 flex items-center justify-center gap-2"
                >
                  <span>🎬</span>
                  <span>Generate Recap Video</span>
                </button>
              </div>
            )}

            {/* GITHUB SYNC VIEW */}
            {activeTab === 'sync' && (
              <div className="space-y-4 pb-4">
                <h2 className="text-lg font-bold text-white">GitHub Sync</h2>

                {/* Connection Status */}
                <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/20 border border-green-700 rounded-lg p-4 flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-green-200">Connected to GitHub</p>
                    <p className="text-xs text-green-100 mt-1">Account: @waiyan-dev</p>
                  </div>
                </div>

                {/* Repository Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Select Repository</label>
                  <select
                    value={selectedRepo.id}
                    onChange={(e) => {
                      const repo = repos.find((r) => r.id === Number(e.target.value))
                      if (repo) setSelectedRepo(repo)
                    }}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:border-netflix-red focus:outline-none focus:ring-2 focus:ring-netflix-red/30 transition-all cursor-pointer"
                  >
                    {repos.map((repo) => (
                      <option key={repo.id} value={repo.id}>
                        {repo.full_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sync Logs */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-white">Recent Sync Logs</h3>
                    <span className="text-xs text-slate-400">({syncLogs.length})</span>
                  </div>
                  <div className="space-y-2">
                    {syncLogs.map((log) => (
                      <div
                        key={log.id}
                        className={`bg-slate-800 border rounded-lg p-3 text-xs ${
                          log.status === 'success'
                            ? 'border-green-700 bg-green-900/20'
                            : log.status === 'pending'
                              ? 'border-yellow-700 bg-yellow-900/20'
                              : 'border-red-700 bg-red-900/20'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-lg flex-shrink-0">
                            {log.status === 'success' && '✅'}
                            {log.status === 'pending' && '⏳'}
                            {log.status === 'failed' && '❌'}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-100">{log.message}</p>
                            {log.fileName && (
                              <p className="text-slate-400 mt-1">
                                📄 {log.fileName} ({log.size})
                              </p>
                            )}
                            <p className="text-slate-500 mt-1">🕐 {log.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sync Button */}
                <button
                  onClick={handleSync}
                  disabled={isSyncing}
                  className={`w-full font-bold py-4 px-4 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                    isSyncing
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-netflix-red to-orange-600 hover:from-orange-600 hover:to-red-700 text-white shadow-netflix-red/50 hover:shadow-orange-600/50'
                  }`}
                >
                  <span>{isSyncing ? '🔄' : '📤'}</span>
                  <span>{isSyncing ? 'Syncing...' : 'Sync Now'}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}

export default MovieRecapMobileUI
