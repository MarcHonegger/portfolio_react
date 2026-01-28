import React, { useEffect } from 'react'
import DetailPageLayout from '../../components/DetailPageLayout'
import Card from 'react-bootstrap/Card'

const BrewingIdeas: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <DetailPageLayout title="Brewing ideas" subtitle="Small rituals, sharper focus" backTo="/focus/brewing-ideas" image="/assets/big_profile.jpeg">
      <Card className="mb-4 card-section">
        <Card.Body>
          <h3>Why this matters to me</h3>
          <p>
            Coffee and tea rituals help me slow down, pay attention, and think clearly before I build.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>How I approach it</h4>
          <ul>
            <li>Small, repeatable routines</li>
            <li>Notes on taste, temperature, and time</li>
            <li>Share learnings with friends</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>What I’m exploring</h4>
          <ul>
            <li>Dialing espresso with a simpler workflow</li>
            <li>Connecting brewing notes with project ideas</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Artifacts</h4>
          <ul>
            <li><a href="#">Brew log (placeholder)</a></li>
            <li><a href="#">Tasting notes (placeholder)</a></li>
          </ul>
        </Card.Body>
      </Card>
    </DetailPageLayout>
  )
}

export default BrewingIdeas
