export function navigate(path: string) {
    const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html'
    const nextIsHome = path === '/' || path === '/index.html'
    if (isHome && !nextIsHome) {
        sessionStorage.setItem('homeScrollY', String(window.scrollY))
        sessionStorage.setItem('restoreHomeScroll', '1')
    }
    const hashIndex = path.indexOf('#')
    if (hashIndex !== -1) {
        sessionStorage.setItem('explicitHashNav', '1')
    } else {
        sessionStorage.removeItem('explicitHashNav')
    }
    if (window.location.pathname + window.location.search !== path) {
        history.pushState(null, '', path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }
    // If path has a hash fragment, try to scroll to it
    try {
        const shouldRestoreHome = nextIsHome && sessionStorage.getItem('restoreHomeScroll') === '1' && sessionStorage.getItem('homeScrollY')
        if (hashIndex !== -1) {
            const frag = path.slice(hashIndex + 1)
            // small timeout to let the DOM update if needed
            setTimeout(() => {
                const el = document.getElementById(frag)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 50)
        } else if (!shouldRestoreHome) {
            // No hash: always reset scroll to top for detail pages
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
            scrollTop()
            const raf = requestAnimationFrame(scrollTop)
            const t = window.setTimeout(scrollTop, 120)
            return () => {
                cancelAnimationFrame(raf)
                clearTimeout(t)
            }
        }
    } catch {
        // no-op
    }
}

export default navigate
