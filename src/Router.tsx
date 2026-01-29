import React, { useEffect, useLayoutEffect, useState } from 'react'
import App from './App.tsx'

// Pages (explicit .tsx extensions to satisfy TS resolution)
import PersonalIndex from './pages/personal/index.tsx'
import Journaling from './pages/personal/journaling.tsx'
import Sport from './pages/personal/sport.tsx'
import Coffee from './pages/personal/coffee.tsx'
import Reading from './pages/personal/reading.tsx'

import ProjectsIndex from './pages/projects/index.tsx'
import RiskSignalAutomator from './pages/projects/risk-signal-automator.tsx'
import ProcessClarityKit from './pages/projects/process-clarity-kit.tsx'
import BrewedInsightsLog from './pages/projects/brewed-insights-log.tsx'

// Focus Pages
import AutomationWithEmpathy from './pages/focus/automation-with-empathy.tsx'
import FinanceFluency from './pages/focus/finance-fluency.tsx'
import MentorshipResponsibility from './pages/focus/mentorship-responsibility.tsx'
import BrewingIdeas from './pages/focus/brewing-ideas.tsx'

// no direct navigate import here (Router only routes)

const Router: React.FC = () => {
    const [path, setPath] = useState(window.location.pathname)

    const scrollTop = () => {
        const root = document.scrollingElement || document.documentElement
        const html = document.documentElement
        const previousBehavior = html.style.scrollBehavior
        html.style.scrollBehavior = 'auto'
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        root.scrollTop = 0
        document.body.scrollTop = 0
        html.style.scrollBehavior = previousBehavior
    }

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual'
        }
    }, [])

    useEffect(() => {
        const onPop = () => setPath(window.location.pathname)
        window.addEventListener('popstate', onPop)
        return () => window.removeEventListener('popstate', onPop)
    }, [])

    useLayoutEffect(() => {
        const isHome = path === '/' || path === '/index.html'
        if (!isHome) {
            scrollTop()
            const t = window.setTimeout(scrollTop, 0)
            return () => clearTimeout(t)
        }
    }, [path])

    useEffect(() => {
        const isHome = path === '/' || path === '/index.html'
        const shouldRestore = sessionStorage.getItem('restoreHomeScroll') === '1'
        const saved = sessionStorage.getItem('homeScrollY')
        const returnHome = sessionStorage.getItem('returnHome') === '1'
        const explicitHashNav = sessionStorage.getItem('explicitHashNav') === '1'

        if (isHome) {
            if (!window.location.hash) {
                if (shouldRestore && returnHome && saved && !explicitHashNav) {
                    const scrollToSaved = () => {
                        const y = Number(saved)
                        const root = document.scrollingElement || document.documentElement
                        window.scrollTo({ top: y, left: 0, behavior: 'auto' })
                        root.scrollTop = y
                        document.body.scrollTop = y
                    }
                    scrollToSaved()
                    const raf = requestAnimationFrame(scrollToSaved)
                    const t = window.setTimeout(scrollToSaved, 80)
                    sessionStorage.removeItem('restoreHomeScroll')
                    sessionStorage.removeItem('returnHome')
                    sessionStorage.removeItem('explicitHashNav')
                    return () => {
                        cancelAnimationFrame(raf)
                        clearTimeout(t)
                    }
                }
                sessionStorage.removeItem('returnHome')
                sessionStorage.removeItem('explicitHashNav')
            }
            return
        }

        sessionStorage.removeItem('returnHome')
        sessionStorage.removeItem('explicitHashNav')
    }, [path])

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
        case '/personal/reading':
            return <Reading />

        // Focus
        case '/focus/automation-with-empathy':
            return <AutomationWithEmpathy />
        case '/focus/finance-fluency':
            return <FinanceFluency />
        case '/focus/mentorship-responsibility':
            return <MentorshipResponsibility />
        case '/focus/brewing-ideas':
            return <BrewingIdeas />

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
