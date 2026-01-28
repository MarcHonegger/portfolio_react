import React from 'react'
import DetailPageLayout from '../../components/DetailPageLayout'

const Sport: React.FC = () => {
  return (
    <DetailPageLayout title="Sport" subtitle="Movement as reset" backTo="/personal/sport">
      <section>
        <h3>Why this matters to me</h3>
        <p>
          Consistent movement keeps energy and focus steady. I prefer routines that are sustainable and leave room for recovery.
        </p>

        <h4>How I do it</h4>
        <ul>
          <li>Strength sessions 2–3x per week</li>
          <li>Running or cycling for variety and endurance</li>
          <li>Walks to reset during busy days</li>
        </ul>

        <h4>What it gives me</h4>
        <ul>
          <li>Better focus and stress resilience</li>
          <li>Improved long-term health and energy</li>
        </ul>

        <h4>Artifacts</h4>
        <ul>
          <li><a href="#">Training notes (placeholder)</a></li>
        </ul>
      </section>
    </DetailPageLayout>
  )
}

export default Sport
