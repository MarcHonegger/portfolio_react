import React from 'react'
import DetailPageLayout from '../../components/DetailPageLayout'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Journaling: React.FC = () => {
  return (
    <DetailPageLayout title="Journaling" subtitle="Morning reflections & weekly review" backTo="/personal/journaling" image="/assets/big_profile.jpeg">
      <Card className="mb-4 card-section">
        <Card.Body>
          <Row className="g-3 align-items-center">
            <Col md={8}>
              <h3>Why this matters to me</h3>
              <p>
                Short, regular notes help me turn vague thoughts into small experiments. Mornings are useful because they are calm and set the tone.
              </p>
            </Col>
            <Col md={4}>
              <Image src="/assets/journaling-why.jpg" alt="Journaling morning notes" rounded fluid />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <Row className="g-3 align-items-center">
            <Col md={8}>
              <h4>How I do it</h4>
              <ul>
                <li>5–10 minute morning reflections (what I learned, what I try today)</li>
                <li>Weekly review: capture experiments and adjust simple routines</li>
                <li>Keep entries short and action-focused</li>
              </ul>
            </Col>
            <Col md={4}>
              <Image src="/assets/journaling-how.jpg" alt="Journaling process" rounded fluid />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <Row className="g-3 align-items-center">
            <Col md={8}>
              <h4>What it gives me</h4>
              <ul>
                <li>Clearer priorities</li>
                <li>Fewer repeated mistakes</li>
                <li>Notes to seed future projects</li>
              </ul>
            </Col>
            <Col md={4}>
              <Image src="/assets/journaling-what.jpg" alt="Journaling outcomes" rounded fluid />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <Row className="g-3 align-items-center">
            <Col md={8}>
              <h4>Artifacts</h4>
              <ul>
                <li><a href="#">Notes (placeholder)</a></li>
                <li><a href="#">Templates (placeholder)</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <Image src="/assets/journaling-artifacts.jpg" alt="Journaling artifacts" rounded fluid />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </DetailPageLayout>
  )
}

export default Journaling
