import React, { useEffect } from 'react'
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
  subtitle?: string
  backTo?: string
  children?: React.ReactNode
  image?: string
}

const DetailPageLayout: React.FC<Props> = ({ title, subtitle, backTo, children, image }) => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
	}, [])

  return (
    <main>
      <section className="section detail-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <p className="eyebrow">{subtitle}</p>
              <h1>{title}</h1>
            </Col>
            <Col lg={4} className="text-lg-end">
              {backTo && (
                <Button
                  variant="outline-light"
                  href={backTo}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault()
                    // Always return to the landing page but preserve the section.
                    // Map known backTo routes to a landing-page fragment id.
                    const mapToFragment = (path?: string) => {
                      if (!path) return ''
                      const p = path.toLowerCase()
                      // explicit fragment
                      const hashIdx = p.indexOf('#')
                      if (hashIdx !== -1) return p.slice(hashIdx + 1)
                      // focus detail -> last segment
                      if (p.startsWith('/focus/')) {
                        const parts = p.split('/').filter(Boolean)
                        return parts[parts.length - 1]
                      }
                      if (p === '/focus') return 'skills'
                      // personal detail -> use the last path segment if present
                      if (p.startsWith('/personal/')) {
                        const parts = p.split('/').filter(Boolean)
                        return parts[parts.length - 1]
                      }
                      if (p === '/personal') return 'personal'
                      // projects detail -> last segment
                      if (p.startsWith('/projects/')) {
                        const parts = p.split('/').filter(Boolean)
                        return parts[parts.length - 1]
                      }
                      if (p === '/projects') return 'projects'
                      if (p === '/' || p === '/index.html') return 'home'
                      return ''
                    }

                    const frag = mapToFragment(backTo)
                    if (frag) {
                      navigate('/#' + frag)
                    } else {
                      navigate('/')
                    }
                  }}
                >
                  ← Back
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
                {/* Right-side image shown on desktop only */}
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

export default DetailPageLayout
