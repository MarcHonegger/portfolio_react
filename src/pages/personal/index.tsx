import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DetailPageLayout from '../../components/DetailPageLayout'
import { navigate } from '../../utils/navigate'

const items = [
  { title: 'Journaling', copy: 'Morning reflections and simple weekly reviews.', href: '/personal/journaling' },
  { title: 'Sport', copy: 'Strength, running, and consistency over extremes.', href: '/personal/sport' },
  { title: 'Coffee & tea', copy: 'Rituals that slow me down and sharpen curiosity.', href: '/personal/coffee' },
  { title: 'Reading', copy: 'Finance, systems thinking, and a steady flow of biographies.', href: '/personal/reading' },
]

const PersonalIndex: React.FC = () => {
  return (
    <DetailPageLayout title="Personal" subtitle="Life & habits that shape my work" backTo="/">
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

export default PersonalIndex
