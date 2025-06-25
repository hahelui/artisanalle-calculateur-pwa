artisanalle-calculateur/
├── public/                  # Static files
│   ├── icons/               # App icons
│   └── favicon.ico
│
├── src/
│   ├── assets/              # Images, fonts, etc.
│   │
│   ├── components/          # Reusable Vue components
│   │   ├── ui/              # shadcn/ui components
│   │   └── shared/          # Your custom components
│   │
│   ├── db/                  # Dexie.js database setup
│   │   └── index.js         # Database schema and initialization
│   │
│   ├── stores/              # State management (Pinia)
│   │   └── useAppStore.js
│   │
│   ├── views/               # Page components
│   │   ├── HomeView.vue
│   │   └── SettingsView.vue
│   │
│   ├── App.vue              # Root component
│   ├── main.js              # App entry point
│   ├── registerServiceWorker.js
│   └── router.js            # Vue Router
│
├── .env                     # Environment variables
├── index.html
├── vite.config.js           # Vite + PWA config
└── package.json