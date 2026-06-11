import React from 'react'

interface TabNavigationProps {
  activeTab: 'dashboard' | 'generator' | 'sync'
  onTabChange: (tab: 'dashboard' | 'generator' | 'sync') => void
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: '📊' },
    { id: 'generator' as const, label: 'Create', icon: '✨' },
    { id: 'sync' as const, label: 'Sync', icon: '🔄' },
  ]

  return (
    <nav className="w-full bg-slate-900 border-t border-slate-700 px-1 py-2 flex gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-netflix-red text-white shadow-lg shadow-netflix-red/50'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <span className="text-lg">{tab.icon}</span>
          <span className="text-xs font-medium">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default TabNavigation
