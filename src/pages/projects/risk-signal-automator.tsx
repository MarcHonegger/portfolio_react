import React from 'react'
import ProjectPageLayout from '../../components/ProjectPageLayout'
import Card from 'react-bootstrap/Card'

const RiskSignalAutomator: React.FC = () => {
  return (
    <ProjectPageLayout title="Risk Signal Automator" summary="Bringing scattered risk indicators together" backTo="/projects/risk-signal-automator" image="/assets/big_profile.jpeg">
      <Card className="mb-4 card-section">
        <Card.Body>
          <h3>Problem</h3>
          <p>Risk signals live in many places. Analysts spend time collecting data instead of assessing it.</p>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Approach</h4>
          <ul>
            <li>Prototype a unified board that surfaces the most relevant indicators</li>
            <li>Focus on readable signals, not raw logs</li>
            <li>Build small integrations that reduce manual work</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>What I learned</h4>
          <ul>
            <li>Choice of signal and presentation matters more than raw volume</li>
            <li>Small automations can free cognitive bandwidth for humans</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Next steps</h4>
          <ul>
            <li>Gather feedback from analysts and iterate on the board</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Links</h4>
          <ul>
            <li><a href="#">GitHub (placeholder)</a></li>
            <li><a href="#">Contact (placeholder)</a></li>
          </ul>
        </Card.Body>
      </Card>
    </ProjectPageLayout>
  )
}

export default RiskSignalAutomator
