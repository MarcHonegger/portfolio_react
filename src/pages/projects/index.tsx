import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DetailPageLayout from '../../components/DetailPageLayout'
import { navigate } from '../../utils/navigate'

const items = [
  { title: 'Risk Signal Automator', copy: 'Unify scattered risk indicators into a single, reviewable board.', href: '/projects/risk-signal-automator' },
  { title: 'Process Clarity Kit', copy: 'Documented onboarding flows and small, high-impact improvements.', href: '/projects/process-clarity-kit' },
  { title: 'Brewed Insights Log', copy: 'Personal knowledge garden mixing notes and brewing experiments.', href: '/projects/brewed-insights-log' },
]

const ProjectsIndex: React.FC = () => {
  return (
    <DetailPageLayout title="Projects" subtitle="Selected notes and prototypes" backTo="/">
      <Row className="g-4">
        {items.map((it) => (
          <Col md={4} key={it.title}>
            <Card className="glass-card personal-card h-100" role="button" onClick={() => navigate(it.href)}>
              <Card.Body>
                <Card.Title>{it.title}</Card.Title>
                <Card.Text>{it.copy}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="link" onClick={() => navigate(it.href)}>
                  Read →
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </DetailPageLayout>
  )
}

export default ProjectsIndex
