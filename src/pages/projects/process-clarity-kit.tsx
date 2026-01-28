import React from 'react'
import ProjectPageLayout from '../../components/ProjectPageLayout'

const ProcessClarityKit: React.FC = () => {
  return (
    <ProjectPageLayout title="Process Clarity Kit" summary="Documenting flows and finding high-leverage tweaks" backTo="/projects/process-clarity-kit">
      <section>
        <h3>Problem</h3>
        <p>Onboarding and regulated processes often hide small inefficiencies that compound over time.</p>

        <h4>Approach</h4>
        <ul>
          <li>Map current flows with simple diagrams and notes</li>
          <li>Identify quick wins that reduce complexity for newcomers</li>
          <li>Document small decision points explicitly</li>
        </ul>

        <h4>What I learned</h4>
        <ul>
          <li>Clear documentation reduces uncertainty and speeds up onboarding</li>
          <li>Regulated contexts reward conservative, well-communicated changes</li>
        </ul>

        <h4>Next steps</h4>
        <ul>
          <li>Package templates and run small pilots with onboarding teams</li>
        </ul>

        <h4>Links</h4>
        <ul>
          <li><a href="#">Notes (placeholder)</a></li>
          <li><a href="#">Contact (placeholder)</a></li>
        </ul>
      </section>
    </ProjectPageLayout>
  )
}

export default ProcessClarityKit
