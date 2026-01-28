import React from 'react'
import DetailPageLayout from '../../components/DetailPageLayout'
import Card from 'react-bootstrap/Card'

const AutomationWithEmpathy: React.FC = () => {
  return (
    <DetailPageLayout title="Automation with empathy" subtitle="Process first, automation second" backTo="/focus/automation-with-empathy" image="/assets/big_profile.jpeg">
      <Card className="mb-4 card-section">
        <Card.Body>
          <h3>Why this matters to me</h3>
          <p>
            Automating without understanding people creates friction. I want systems that reduce noise and let teams focus on judgment.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>How I approach it</h4>
          <ul>
            <li>Start with real workflows and observe bottlenecks</li>
            <li>Automate only the parts that remove repetition</li>
            <li>Keep humans in the loop for risk and nuance</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>What I’m exploring</h4>
          <ul>
            <li>Simple automation prototypes for finance teams</li>
            <li>Clear signals over heavy dashboards</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Artifacts</h4>
          <ul>
            <li><a href="#">Workflow notes (placeholder)</a></li>
            <li><a href="#">Prototype sketches (placeholder)</a></li>
          </ul>
        </Card.Body>
      </Card>
    </DetailPageLayout>
  )
}

export default AutomationWithEmpathy
