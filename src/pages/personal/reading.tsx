import React from 'react'
import DetailPageLayout from '../../components/DetailPageLayout'
import Card from 'react-bootstrap/Card'

const Reading: React.FC = () => {
	return (
		<DetailPageLayout title="Reading" subtitle="Quiet focus and long-form thinking" backTo="/personal/reading" image="/assets/big_profile.jpeg">
			<Card className="mb-4 card-section">
				<Card.Body>
					<h3>Why this matters to me</h3>
					<p>
						Reading slows me down and gives me time to connect ideas. I lean toward finance, systems thinking, and biographies to learn how people build resilient paths.
					</p>
				</Card.Body>
			</Card>

			<Card className="mb-4 card-section">
				<Card.Body>
					<h4>How I do it</h4>
					<ul>
						<li>Short daily blocks for focused reading</li>
						<li>Notes on frameworks or questions to revisit</li>
						<li>Monthly review of highlights and learnings</li>
					</ul>
				</Card.Body>
			</Card>

			<Card className="mb-4 card-section">
				<Card.Body>
					<h4>What it gives me</h4>
					<ul>
						<li>Clearer language for complex topics</li>
						<li>More patience with long-term systems</li>
						<li>Better questions for projects</li>
					</ul>
				</Card.Body>
			</Card>

			<Card className="mb-4 card-section">
				<Card.Body>
					<h4>Artifacts</h4>
					<ul>
						<li><a href="#">Reading list (placeholder)</a></li>
						<li><a href="#">Notes (placeholder)</a></li>
					</ul>
				</Card.Body>
			</Card>
		</DetailPageLayout>
	)
}

export default Reading
