import './App.css'
import { NavBar } from './components/NavBar.tsx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { navigate } from './utils/navigate'

const focusAreas = [
	{
		title: 'Automation with empathy',
		copy: 'I study real banking workflows first, then automate only where it creates calm.',
		href: '/projects/risk-signal-automator',
	},
	{
		title: 'Finance fluency',
		copy: 'Time inside risk and onboarding teams showed me where regulated systems feel clunky.',
		href: '/projects/process-clarity-kit',
	},
	{
		title: 'Mentorship & responsibility',
		copy: 'With Rock Your Life I translate tech ideas into plans that feel achievable.',
		href: '/personal',
	},
	{
		title: 'Brewing ideas',
		copy: 'Coffee and tea rituals help me slow down, notice details, and ship thoughtfully.',
		href: '/projects/brewed-insights-log',
	},
]

const journey = [
	{
		year: '2025',
		title: 'Business Informatics · University of Zurich',
		detail: 'Digging into data-driven decision making, systems engineering, and responsible automation.',
	},
	{
		year: '2024',
		title: 'Banking Automation Intern',
		detail: 'Built prototypes that gather risk signals so analysts focus on judgment, not spreadsheets.',
	},
	{
		year: '2023',
		title: 'Rock Your Life Mentor',
		detail: 'Helped students plan careers, prepare interviews, and stay confident in tech conversations.',
	},
]

const workPieces = [
	{
		title: 'Risk Signal Automator',
		copy: 'A concept that unifies disparate indicators into one clear review board.',
	},
	{
		title: 'Process Clarity Kit',
		copy: 'Documented onboarding flows for finance teams and surfaced high-leverage tweaks.',
	},
	{
		title: 'Brewed Insights Log',
		copy: 'My personal knowledge garden mixing study notes, brewing experiments, and prompts.',
	},
]

const personalGrowth = [
	{ title: 'Movement', copy: 'Strength training, running, and walks to reset my focus.', href: '/personal/sport' },
	{ title: 'Journaling', copy: 'Morning reflections to capture gratitude and track experiments.', href: '/personal/journaling' },
	{ title: 'Coffee & tea', copy: 'Dialing espresso shots, cupping sessions, and sharing tasting notes.', href: '/personal/coffee' },
	{ title: 'Reading', copy: 'Finance, systems thinking, and a steady flow of biographies.', href: '/personal' },
]

function App() {
	// local state removed — not used in the current pages

	return (
		<>
			<NavBar />
			<main>
				<section id="home" className="hero-section">
					<Container>
						<Row className="align-items-center g-5">
							<Col lg={7}>
								<p className="eyebrow">Business Informatics · University of Zurich</p>
								<h1>Marc Honegger</h1>
								<p className="lead">
									Business Informatics student exploring automation, finance, and longevity.
								</p>
								<p className="support">Sharing how I think — not selling anything.</p>
								<div className="hero-actions" aria-label="Primary actions">
									<Button variant="primary" size="lg" onClick={() => navigate('/personal')}>
										See personal
									</Button>
									<Button variant="outline-light" size="lg" onClick={() => navigate('/projects')}>
										Project snapshots
									</Button>
								</div>
							</Col>
							<Col lg={5} className="hero-card-col d-flex align-items-center justify-content-center justify-content-lg-end">
								<div className="hero-card">
									<img src="/assets/big_profile.jpeg" alt="Marc portrait" className="profile-img" />
									<h3>Still brewing my path</h3>
									<p>Automation projects, banking internships, Rock Your Life mentor, and endless espresso tasting notes.</p>
									<div className="hero-meta">
										<span>Open to internships & collaborations</span>
										<span>Zurich · remote-friendly</span>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<section id="intro" className="section intro-section">
					<Container>
						<Row className="justify-content-center">
							<Col lg={9} className="text-center">
								<p className="intro-callout">
									I care about calm operations, transparent banking tools, and the people behind them. This page is a snapshot of what I&apos;ve built so far and how I plan to keep growing.
								</p>
							</Col>
						</Row>
					</Container>
				</section>

				<section id="skills" className="section">
					<Container>
						<Row className="justify-content-center text-center mb-4">
							<Col lg={8}>
								<p className="eyebrow">Focus areas</p>
								<h2>What keeps me curious</h2>
							</Col>
						</Row>
						<Row className="g-4">
							{focusAreas.map((item) => {
								const slug = item.title
									.toLowerCase()
									.replace(/[^\w\s-]/g, '')
									.trim()
									.replace(/\s+/g, '-')
								return (
									<Col md={3} key={item.title}>
										<Card id={slug} className="glass-card personal-card h-100" role="button" onClick={() => navigate(item.href || '/projects')}>
											<Card.Body>
												<Card.Title>{item.title}</Card.Title>
												<Card.Text>{item.copy}</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								)
							})}
						</Row>
					</Container>
				</section>

				<section id="personal" className="section personal-growth">
					<Container>
						<Row className="justify-content-center text-center mb-4">
							<Col lg={8}>
								<p className="eyebrow">Personal growth</p>
								<h2>Habits keeping me grounded</h2>
								<p>Sport, journaling, reading, and coffee rituals that fuel how I show up.</p>
							</Col>
						</Row>
						<Row className="g-4">
							{personalGrowth.map((item) => {
								// derive slug from href if present (/personal/journaling -> journaling)
								let slug = item.title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-')
								if (item.href) {
									const parts = item.href.split('/').filter(Boolean)
									if (parts.length > 1) slug = parts[parts.length - 1]
								}
								return (
									<Col md={3} key={item.title}>
										<Card id={slug} className="glass-card personal-card h-100" role="button" onClick={() => navigate(item.href || '/personal')}>
											<Card.Body>
												<Card.Title>{item.title}</Card.Title>
												<Card.Text>{item.copy}</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								)
							})}
						</Row>
					</Container>
				</section>

				<section id="journey" className="section alt">
					<Container>
						<Row className="justify-content-center text-center mb-4">
							<Col lg={8}>
								<p className="eyebrow">Journey</p>
								<h2>Learning in public</h2>
							</Col>
						</Row>
						<div className="journey-list">
							{journey.map((stop) => (
								<div key={stop.year} className="journey-item">
									<div className="journey-year">{stop.year}</div>
									<div>
										<h3>{stop.title}</h3>
										<p>{stop.detail}</p>
									</div>
								</div>
							))}
						</div>
					</Container>
				</section>

				<section id="projects" className="section">
					<Container>
						<Row className="justify-content-center text-center mb-4">
							<Col lg={8}>
								<p className="eyebrow">Projects</p>
								<h2>Things I&apos;ve built so far</h2>
								<p>These aren&apos;t products—they&apos;re learning moments that shaped my approach.</p>
							</Col>
						</Row>
						<Row className="g-4">
							{workPieces.map((piece) => {
								const slug = piece.title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-')
								return (
									<Col md={4} key={piece.title}>
										<Card id={slug} className="glass-card personal-card project-card h-100" role="button" onClick={() => navigate('/projects/' + slug)}>
											<Card.Body>
												<Card.Title>{piece.title}</Card.Title>
												<Card.Text>{piece.copy}</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								)
							})}
						</Row>
					</Container>
				</section>

				<section id="contact" className="section contact-section">
					<Container>
						<Row className="align-items-center g-4">
							<Col md={7}>
								<p className="eyebrow">Coffee chat</p>
								<h2>Let&apos;s brew ideas and compare notes</h2>
								<p>
									If automation in banking, mentorship, or slow coffee rituals resonate with you, feel free to reach out.
								</p>
								<div className="contact-meta">
									<span>marc.codes@email.com</span>
									<span>@marc_codes</span>
								</div>
							</Col>
							<Col md={5}>
								<div className="contact-card">
									<h3>Reach out</h3>
									<form>
										<input type="text" placeholder="Your name" />
										<input type="email" placeholder="Email" />
										<textarea placeholder="What should we chat about?" rows={3} />
										<Button type="button">Send</Button>
									</form>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</main>
			<footer className="footer-note">
				<Container className="text-center">
					<p>© {new Date().getFullYear()} Marc Honegger · Built with curiosity, coffee, and React</p>
					<div className="footer-links" role="navigation" aria-label="Footer links" style={{ marginTop: '0.5rem' }}>
						{/* Replace the hrefs below with your real profile URLs */}
						<a href="https://www.linkedin.com/in/marc-honegger/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn https://www.linkedin.com/in/marc-honegger/">LinkedIn</a>
						<span style={{ margin: '0 0.5rem' }}>·</span>
						<a href="https://github.com/MarcHonegger" target="_blank" rel="noopener noreferrer" aria-label="GitHub https://github.com/MarcHonegger">GitHub</a>
					</div>
				</Container>
			</footer>
		</>
	)

}

export default App
