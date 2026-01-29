import React, { useEffect, useLayoutEffect } from 'react'
import type { MouseEvent } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { navigate } from '../utils/navigate'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

type Props = {
  title: string
  summary?: string
  backTo?: string
  children?: React.ReactNode
  image?: string
}

const ProjectPageLayout: React.FC<Props> = ({ title, summary, backTo, children, image }) => {
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

	useLayoutEffect(() => {
		// Ensure we land at top on project detail pages, even after layout/paint.
		scrollTop()
		const raf = requestAnimationFrame(scrollTop)
		const t = window.setTimeout(scrollTop, 80)
		return () => {
			cancelAnimationFrame(raf)
			clearTimeout(t)
		}
	}, [])

	useEffect(() => {
		const onPageShow = () => scrollTop()
		window.addEventListener('pageshow', onPageShow)
		return () => window.removeEventListener('pageshow', onPageShow)
	}, [])

  return (
    <main className="detail-page">
      <section className="section detail-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <p className="eyebrow">Project</p>
              <h1>{title}</h1>
              {summary && <p className="lead">{summary}</p>}
            </Col>
            <Col lg={4} className="text-lg-end">
              {backTo && (
                <Button
                  variant="outline-light"
                  href={backTo}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault()
                    sessionStorage.setItem('returnHome', '1')
                    const mapToFragment = (path?: string) => {
                      if (!path) return ''
                      const p = path.toLowerCase()
                      const hashIdx = p.indexOf('#')
                      if (hashIdx !== -1) return p.slice(hashIdx + 1)
                      if (p.startsWith('/focus/')) {
                        const parts = p.split('/').filter(Boolean)
                        return parts[parts.length - 1]
                      }
                      if (p === '/focus') return 'skills'
                      if (p.startsWith('/projects/')) {
                        const parts = p.split('/').filter(Boolean)
                        return parts[parts.length - 1]
                      }
                      if (p === '/projects') return 'projects'
                      if (p.startsWith('/personal/')) {
                        const parts = p.split('/').filter(Boolean)
                        return parts[parts.length - 1]
                      }
                      if (p === '/personal') return 'personal'
                      return ''
                    }

                    const frag = mapToFragment(backTo)
                    if (frag) {
                      navigate('/#' + frag)
                    } else {
                      navigate('/projects')
                    }
                  }}
                >
                  ← Back to Projects
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section detail-body">
        <Container>
          <Card className="detail-card p-3">
            <Card.Body>
              <Row className="g-4 align-items-start">
                <Col lg={8}>
                  <div className="detail-content">{children}</div>
                </Col>
                <Col lg={4} className="d-none d-lg-block">
                  {image && (
                    <div className="detail-image-wrap">
                      <Image src={image} alt={`${title} image`} rounded fluid />
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </main>
  )
}

export default ProjectPageLayout
