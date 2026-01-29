import React from 'react'
import DetailPageLayout from '../../components/DetailPageLayout'
import Card from 'react-bootstrap/Card'

const FinanceFluency: React.FC = () => {
	return (
		<DetailPageLayout title="Finance fluency" subtitle="Systems that are clear and regulated" backTo="/focus/finance-fluency" image="/assets/big_profile.jpeg">
			<Card className="mb-4 card-section">
				<Card.Body>
					<h3>Why this matters to me</h3>
					<p>
						Finance systems are powerful but often feel opaque. I want them to be clearer for both analysts and customers.
					</p>
				</Card.Body>
			</Card>

			<Card className="mb-4 card-section">
				<Card.Body>
					<h4>How I approach it</h4>
					<ul>
						<li>Learn the regulatory context before changing flows</li>
						<li>Translate complex rules into simple decision points</li>
						<li>Document assumptions so teams can move confidently</li>
					</ul>
				</Card.Body>
			</Card>

			<Card className="mb-4 card-section">
				<Card.Body>
					<h4>What I’m exploring</h4>
					<ul>
						<li>Risk signals that are easy to review</li>
						<li>Onboarding processes that reduce uncertainty</li>
					</ul>
				</Card.Body>
			</Card>

			<Card className="mb-4 card-section">
				<Card.Body>
					<h4>Artifacts</h4>
					<ul>
						<li><a href="#">Flow diagrams (placeholder)</a></li>
						<li><a href="#">Risk notes (placeholder)</a></li>
					</ul>
				</Card.Body>
			</Card>
		</DetailPageLayout>
	)
}

export default FinanceFluency
