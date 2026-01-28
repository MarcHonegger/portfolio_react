export function navigate(path: string) {
    if (window.location.pathname + window.location.search !== path) {
        history.pushState(null, '', path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }
    // If path has a hash fragment, try to scroll to it
    try {
        const hashIndex = path.indexOf('#')
        if (hashIndex !== -1) {
            const frag = path.slice(hashIndex + 1)
            // small timeout to let the DOM update if needed
            setTimeout(() => {
                const el = document.getElementById(frag)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 50)
        } else {
            // No hash: always reset scroll to top for detail pages
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
            }, 0)
        }
    } catch {
        // no-op
    }
}

export default navigate
