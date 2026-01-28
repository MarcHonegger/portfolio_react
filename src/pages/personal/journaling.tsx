import React from 'react'
import DetailPageLayout from '../../components/DetailPageLayout'

const Journaling: React.FC = () => {
  return (
    <DetailPageLayout title="Journaling" subtitle="Morning reflections & weekly review" backTo="/personal/journaling">
      <section>
        <h3>Why this matters to me</h3>
        <p>
          Short, regular notes help me turn vague thoughts into small experiments. Mornings are useful because they are calm and set the tone.
        </p>

        <h4>How I do it</h4>
        <ul>
          <li>5–10 minute morning reflections (what I learned, what I try today)</li>
          <li>Weekly review: capture experiments and adjust simple routines</li>
          <li>Keep entries short and action-focused</li>
        </ul>

        <h4>What it gives me</h4>
        <ul>
          <li>Clearer priorities</li>
          <li>Fewer repeated mistakes</li>
          <li>Notes to seed future projects</li>
        </ul>

        <h4>Artifacts</h4>
        <ul>
          <li><a href="#">Notes (placeholder)</a></li>
          <li><a href="#">Templates (placeholder)</a></li>
        </ul>
      </section>
    </DetailPageLayout>
  )
}

export default Journaling
