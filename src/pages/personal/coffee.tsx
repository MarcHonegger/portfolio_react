import React from 'react'
import DetailPageLayout from '../../components/DetailPageLayout'

const Coffee: React.FC = () => {
  return (
    <DetailPageLayout title="Coffee & tea" subtitle="Rituals, tasting, and curiosity" backTo="/personal/coffee">
      <section>
        <h3>Why this matters to me</h3>
        <p>
          Rituals around coffee and tea teach patience and attention. Tuning a shot or tasting encourages curiosity and careful note-taking.
        </p>

        <h4>How I do it</h4>
        <ul>
          <li>Short tasting notes after each experiment</li>
          <li>Focus on small adjustments (grind, dose, time)</li>
          <li>Share learnings with friends</li>
        </ul>

        <h4>What it gives me</h4>
        <ul>
          <li>Slower, more deliberate attention</li>
          <li>Quiet pleasure that supports focused work</li>
        </ul>

        <h4>Artifacts</h4>
        <ul>
          <li><a href="#">Brew log (placeholder)</a></li>
        </ul>
      </section>
    </DetailPageLayout>
  )
}

export default Coffee
