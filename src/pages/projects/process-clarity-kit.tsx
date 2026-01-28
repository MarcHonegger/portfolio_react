import React from 'react'
import ProjectPageLayout from '../../components/ProjectPageLayout'
import Card from 'react-bootstrap/Card'

const ProcessClarityKit: React.FC = () => {
  return (
    <ProjectPageLayout title="Process Clarity Kit" summary="Documenting flows and finding high-leverage tweaks" backTo="/projects/process-clarity-kit" image="/assets/big_profile.jpeg">
      <Card className="mb-4 card-section">
        <Card.Body>
          <h3>Problem</h3>
          <p>Onboarding and regulated processes often hide small inefficiencies that compound over time.</p>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Approach</h4>
          <ul>
            <li>Map current flows with simple diagrams and notes</li>
            <li>Identify quick wins that reduce complexity for newcomers</li>
            <li>Document small decision points explicitly</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>What I learned</h4>
          <ul>
            <li>Clear documentation reduces uncertainty and speeds up onboarding</li>
            <li>Regulated contexts reward conservative, well-communicated changes</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Next steps</h4>
          <ul>
            <li>Package templates and run small pilots with onboarding teams</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Links</h4>
          <ul>
            <li><a href="#">Notes (placeholder)</a></li>
            <li><a href="#">Contact (placeholder)</a></li>
          </ul>
        </Card.Body>
      </Card>
    </ProjectPageLayout>
  )
}

export default ProcessClarityKit
