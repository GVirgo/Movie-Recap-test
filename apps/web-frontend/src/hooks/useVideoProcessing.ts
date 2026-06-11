import { useState, useEffect } from 'react'
import { ProcessingJob } from '../types'

const mockProcessingJob: ProcessingJob = {
  id: 'job-001',
  movieTitle: 'Inception - Extended Cut',
  status: 'encoding',
  progress: 65,
  currentStep: 'Encoding final video (H.264 codec)',
  estimatedTimeRemaining: '2 min 30 sec',
}

export const useVideoProcessing = () => {
  const [job, setJob] = useState<ProcessingJob>(mockProcessingJob)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      setJob((prev) => {
        if (prev.progress >= 100) {
          return { ...prev, status: 'completed' }
        }
        return {
          ...prev,
          progress: prev.progress + Math.random() * 5,
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return { job, isLoading }
}
