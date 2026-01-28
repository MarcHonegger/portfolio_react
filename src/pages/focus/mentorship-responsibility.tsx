import React, { useEffect } from 'react'
import DetailPageLayout from '../../components/DetailPageLayout'
import Card from 'react-bootstrap/Card'

const MentorshipResponsibility: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <DetailPageLayout title="Mentorship & responsibility" subtitle="Helping others navigate growth" backTo="/focus/mentorship-responsibility" image="/assets/big_profile.jpeg">
      <Card className="mb-4 card-section">
        <Card.Body>
          <h3>Why this matters to me</h3>
          <p>
            Mentorship keeps me grounded and reminds me to build systems that serve real people, not just metrics.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>How I approach it</h4>
          <ul>
            <li>Listen first, then offer practical next steps</li>
            <li>Translate technical topics into clear language</li>
            <li>Support steady progress over perfection</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>What I’m exploring</h4>
          <ul>
            <li>Simple mentoring frameworks for early‑career students</li>
            <li>Accountability habits that feel human</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4 card-section">
        <Card.Body>
          <h4>Artifacts</h4>
          <ul>
            <li><a href="#">Mentor notes (placeholder)</a></li>
            <li><a href="#">Session templates (placeholder)</a></li>
          </ul>
        </Card.Body>
      </Card>
    </DetailPageLayout>
  )
}

export default MentorshipResponsibility
