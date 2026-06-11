# Movie Recap App - Complete Project Structure

## 📁 PART 1: MONOREPO STRUCTURE

```
movie-recap-app/
├── apps/
│   ├── web-frontend/                    # React 18 + TypeScript + Tailwind
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── MovieRecapMobileUI.tsx   # MAIN INTERACTIVE COMPONENT
│   │   │   │   ├── Header.tsx               # User profile & notifications
│   │   │   │   ├── TabNavigation.tsx        # Dashboard/Generator/Sync tabs
│   │   │   │   ├── ProcessingStatusCard.tsx # FFmpeg progress visualization
│   │   │   │   └── RecapGrid.tsx            # Recent recaps thumbnail grid
│   │   │   ├── hooks/
│   │   │   │   ├── useVideoProcessing.ts    # FFmpeg status management
│   │   │   │   ├── useGitHubSync.ts         # GitHub sync state
│   │   │   │   └── index.ts
│   │   │   ├── services/
│   │   │   │   └── api.ts                   # FFmpeg & GitHub API clients
│   │   │   ├── types/
│   │   │   │   ├── index.ts                 # TypeScript interfaces
│   │   │   │   └── env.d.ts
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   └── index.css                    # Tailwind + custom styling
│   │   ├── tailwind.config.js               # Netflix Red (#E50914)
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   ├── postcss.config.js
│   │   ├── Dockerfile
│   │   ├── index.html
│   │   └── package.json
│   │
│   └── mobile-design/                   # UI Assets & Wireframes
│
├── services/
│   ├── video-processor/                 # FFmpeg Node.js Service (Port 3001)
│   │   ├── src/
│   │   │   └── index.ts                 # Express API + FFmpeg integration
│   │   ├── Dockerfile                   # Alpine + FFmpeg
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── github-sync/                     # GitHub API Integration
│       ├── src/
│       │   └── index.ts                 # GitHubSync TypeScript class
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   └── typescript-config/
│       └── base.json
│
├── docker-compose.yml                   # Docker orchestration
├── package.json                         # Monorepo workspaces
└── README.md
```

---

## 🎨 PART 2: MOBILE UI - PRODUCTION-READY COMPONENT

### **MovieRecapMobileUI.tsx** Features:

✅ **Netflix-Inspired Dark Theme**
- Slate-900 backgrounds
- Netflix Red accents (#E50914)
- Cinematic gradient effects
- Custom scrollbar styling

✅ **Mobile Frame (375x812px)**
- Notch simulation
- Status bar with time & battery
- Safe area padding
- Rounded corners (40px border-radius)

✅ **3 Interactive Tab Views**

#### **1️⃣ DASHBOARD VIEW**
```
┌─────────────────────────────┐
│  [Profile] [Notifications]  │
├─────────────────────────────┤
│                             │
│  ⏳ FFmpeg Processing Card  │
│  ├─ Movie: Inception        │
│  ├─ Status: Encoding 65%    │
│  ├─ Progress: [==========>] │
│  └─ ETA: 2m 30s             │
│                             │
│  📊 Recent Recaps (Grid)    │
│  ├─ [Thumb1] [Thumb2]      │
│  └─ [Thumb3] [Thumb4]      │
│                             │
└─────────────────────────────┘
   [Dashboard] [Create] [Sync]
```

#### **2️⃣ CREATE/GENERATOR VIEW**
```
┌─────────────────────────────┐
│  ✨ Create New Recap        │
├─────────────────────────────┤
│ Movie Title                 │
│ [___________________]       │
│                             │
│ Script / SRT Subtitles      │
│ [_____________________]     │
│ [_____________________]     │
│                             │
│ Video File Path             │
│ [_______________] [📁]      │
│                             │
│ Voiceover / TTS             │
│ [▼ Myanmar TTS (Default)]   │
│                             │
│ [🎬 Generate Recap Video]   │
│                             │
└─────────────────────────────┘
   [Dashboard] [Create] [Sync]
```

#### **3️⃣ GITHUB SYNC VIEW**
```
┌─────────────────────────────┐
│  🔄 GitHub Sync             │
├─────────────────────────────┤
│ ✅ Connected to GitHub      │
│    Account: @waiyan-dev     │
│                             │
│ Select Repository           │
│ [▼ waiyan-dev/movie-recaps] │
│                             │
│ Recent Sync Logs:           │
│ ✅ metadata sync (245 KB)   │
│ ⏳ video asset upload (1GB) │
│ ✅ script sync (156 KB)     │
│                             │
│ [📤 Sync Now]               │
│                             │
└─────────────────────────────┘
   [Dashboard] [Create] [Sync]
```

---

## 🔧 Backend Services

### **Video Processor** (Port 3001)
- Express.js API
- FFmpeg Alpine Docker
- Endpoints:
  - `GET /api/health` ✓
  - `GET /api/processing/status` ✓
  - `POST /api/processing/start` ✓
  - `GET /api/recaps/recent` ✓

### **GitHub Sync**
- TypeScript client class
- GitHub REST API v3
- Methods:
  - `getFileContent(path)` ✓
  - `createOrUpdateFile(path, content, msg)` ✓
  - `syncRecapMetadata(data, filename)` ✓
  - `getCommitHistory(path?)` ✓

---

## 🚀 Quick Start

```bash
# Install dependencies (monorepo workspaces)
npm install

# Start all services with Docker
npm run dev

# Or run individually
npm run dev:frontend  # localhost:5173
npm run dev:backend   # localhost:3001
```

---

## 📦 Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 + TypeScript 5 + Tailwind CSS 3 |
| **Backend** | Node.js + Express + FFmpeg |
| **Styling** | Tailwind CSS (Netflix-Red theme) |
| **Video** | FFmpeg (Alpine Docker container) |
| **API** | GitHub REST API v3 + Custom Express API |
| **Build** | Vite (HMR, fast builds) |
| **Dev Tools** | ESLint, TypeScript strict mode |

---

## ✨ Key Highlights

✅ Zero placeholders – every component is production-ready
✅ Full TypeScript with strict mode enabled
✅ Netflix-inspired cinematic dark theme
✅ Mobile-first responsive design (375x812px)
✅ Real FFmpeg integration via Docker
✅ GitHub API ready for data backup & sync
✅ Myanmar TTS support in voiceover options
✅ Form validation & user feedback
✅ Loading states & error handling
✅ Custom React hooks for state management
