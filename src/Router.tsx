import React, { useEffect, useState } from 'react'
import App from './App.tsx'

// Pages (explicit .tsx extensions to satisfy TS resolution)
import PersonalIndex from './pages/personal/index.tsx'
import Journaling from './pages/personal/journaling.tsx'
import Sport from './pages/personal/sport.tsx'
import Coffee from './pages/personal/coffee.tsx'

import ProjectsIndex from './pages/projects/index.tsx'
import RiskSignalAutomator from './pages/projects/risk-signal-automator.tsx'
import ProcessClarityKit from './pages/projects/process-clarity-kit.tsx'
import BrewedInsightsLog from './pages/projects/brewed-insights-log.tsx'

// no direct navigate import here (Router only routes)

const Router: React.FC = () => {
    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
        const onPop = () => setPath(window.location.pathname)
        window.addEventListener('popstate', onPop)
        return () => window.removeEventListener('popstate', onPop)
    }, [])

    // Simple route matching
    switch (path) {
        case '/':
        case '/index.html':
            return <App />

        // Personal
        case '/personal':
            return <PersonalIndex />
        case '/personal/journaling':
            return <Journaling />
        case '/personal/sport':
            return <Sport />
        case '/personal/coffee':
            return <Coffee />

        // Projects
        case '/projects':
            return <ProjectsIndex />
        case '/projects/risk-signal-automator':
            return <RiskSignalAutomator />
        case '/projects/process-clarity-kit':
            return <ProcessClarityKit />
        case '/projects/brewed-insights-log':
            return <BrewedInsightsLog />

        default:
            // Unknown path — render landing page as fallback
            return <App />
    }
}

export default Router
