import React from 'react'
import { Recap } from '../types'

interface RecapGridProps {
  recaps: Recap[]
}

const RecapGrid: React.FC<RecapGridProps> = ({ recaps }) => {
  const statusColors = {
    completed: 'bg-green-900/30 border-green-600',
    processing: 'bg-yellow-900/30 border-yellow-600',
    failed: 'bg-red-900/30 border-red-600',
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-white px-1">Recent Recaps</h3>
      <div className="grid grid-cols-2 gap-3">
        {recaps.map((recap) => (
          <div key={recap.id} className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden bg-slate-700 aspect-video">
              <img
                src={recap.thumbnail}
                alt={recap.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Status Badge */}
              <div className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-medium border ${statusColors[recap.processingStatus]}`}>
                {recap.processingStatus === 'completed' && '✓'}
                {recap.processingStatus === 'processing' && '⟳'}
                {recap.processingStatus === 'failed' && '✕'}
              </div>
            </div>

            {/* Info */}
            <div className="mt-2">
              <p className="text-xs font-medium text-white truncate group-hover:text-netflix-red transition-colors">
                {recap.title}
              </p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 15a6 6 0 00-6-6 6 6 0 006 6zm0 1h.01M15 13l-3 3m0 0l-3-3m3 3V8m4 0a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                  Docker Local
                </span>
                <span className="text-xs text-slate-400">{recap.createdAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecapGrid
