import React from 'react'
import ProjectPageLayout from '../../components/ProjectPageLayout'
import Card from 'react-bootstrap/Card'

const BrewedInsightsLog: React.FC = () => {
  return (
    <ProjectPageLayout title="Brewed Insights Log" summary="A personal knowledge garden and brew log" backTo="/projects/brewed-insights-log" image="/assets/big_profile.jpeg">
      <Card className="mb-4 card-section">
        <Card.Body>
          <h3>Problem</h3>
          <p>Notes, experiments, and ideas often sit in different places and lose context over time.</p>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Approach</h4>
          <ul>
            <li>Keep short, linked notes about readings and experiments</li>
            <li>Record small iterations from tastings and study sessions</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>What I learned</h4>
          <ul>
            <li>Small, consistent notes compound into useful references</li>
            <li>Linking ideas helps surface patterns</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Next steps</h4>
          <ul>
            <li>Curate a few public notes and tasting experiments</li>
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

export default BrewedInsightsLog
