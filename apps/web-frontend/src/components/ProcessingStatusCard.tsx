import React from 'react'
import { ProcessingJob } from '../types'

interface ProcessingStatusCardProps {
  job: ProcessingJob
}

const ProcessingStatusCard: React.FC<ProcessingStatusCardProps> = ({ job }) => {
  const statusColors = {
    queued: 'bg-slate-700 text-slate-200',
    cutting: 'bg-yellow-900 text-yellow-200',
    merging: 'bg-blue-900 text-blue-200',
    encoding: 'bg-purple-900 text-purple-200',
    completed: 'bg-green-900 text-green-200',
    failed: 'bg-red-900 text-red-200',
  }

  const statusIcons = {
    queued: '⏳',
    cutting: '✂️',
    merging: '🔗',
    encoding: '🎬',
    completed: '✅',
    failed: '❌',
  }

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-slate-700 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-white">{job.movieTitle}</h3>
          <p className="text-xs text-slate-400 mt-1">FFmpeg Video Processing</p>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium ${statusColors[job.status]}`}>
          <span>{statusIcons[job.status]}</span>
          <span>{job.status.charAt(0).toUpperCase() + job.status.slice(1)}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-slate-300 font-medium">{job.currentStep}</p>
          <p className="text-xs text-netflix-red font-bold">{Math.round(job.progress)}%</p>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-netflix-red to-orange-500 h-full rounded-full transition-all duration-500 ease-out shadow-lg shadow-netflix-red/50"
            style={{ width: `${Math.min(job.progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-400">Job ID: {job.id}</span>
        <div className="flex items-center gap-1 text-slate-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.447.894l1.06 1.06a1 1 0 001.414-1.414L10 9.414V6z" clipRule="evenodd" />
          </svg>
          <span>{job.estimatedTimeRemaining}</span>
        </div>
      </div>
    </div>
  )
}

export default ProcessingStatusCard
