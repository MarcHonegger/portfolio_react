import './App.css'
import { NavBar } from './components/NavBar.tsx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import { navigate } from './utils/navigate'
import { useEffect, useState, useRef } from 'react'

const focusAreas = [
	{
		title: 'Automation',
		copy: 'I like to improve workflows and automate repetitive tasks to save time and energy.',
		href: '/focus/automation-with-empathy',
	},
	{
		title: 'Finance fluency',
		copy: "I'm interested in how banks manage risk, compliance, and customer trust behind the scenes.",
		href: '/focus/finance-fluency',
	},
	{
		title: 'Mentorship & responsibility',
		copy: 'I like to share what I learn and help others navigate growth in tech and life.',
		href: '/focus/mentorship-responsibility',
	},
	{
		title: 'Japan & Korea',
		copy: 'I love these countries and their cultures, and I want to explore them in my life.',
		href: '/focus/brewing-ideas',
	},
]

const workPieces = [
	{
		title: 'Game development for High School thesis',
		copy: 'A small game built as part of my high school thesis work.',
	},
	{
		title: 'This portfolio created with AI',
		copy: 'A personal portfolio built with AI-assisted design and development.',
	},
	{
		title: 'Example project (placeholder)',
		copy: 'Placeholder project for layout testing and spacing.',
	},
	{
		title: 'Example project (placeholder 2)',
		copy: 'Placeholder project for layout testing and spacing.',
	},
	{
		title: 'Example project (placeholder 3)',
		copy: 'Placeholder project for layout testing and spacing.',
	},
	{
		title: 'Example project (placeholder 4)',
		copy: 'Placeholder project for layout testing and spacing.',
	},
]

const projectSlides = [] as Array<typeof workPieces>
for (let i = 0; i < workPieces.length; i += 3) {
	projectSlides.push(workPieces.slice(i, i + 3))
}

const projectSlidesMobile = workPieces

const personalGrowth = [
	{ title: 'Movement', copy: 'Strength training, running, and walks to reset my focus.', href: '/personal/sport' },
	{ title: 'Journaling', copy: 'Morning preparation and evening reflections to capture gratitude and maximum growth.', href: '/personal/journaling' },
	{ title: 'Coffee & tea', copy: 'Breaks are vital for my success and creativity; a good cup of coffee or tea helps me with that.', href: '/personal/coffee' },
	{ title: 'Reading', copy: 'I love reading books to improve my life and a slice of life novel for a quick break.', href: '/personal/reading' },
]

const languages = [
	{ name: 'German', level: 'Fluent' },
	{ name: 'English', level: 'C1' },
	{ name: 'French', level: 'B1' },
	{ name: 'Japanese', level: 'Basics' },
	{ name: 'Korean', level: 'Basics' },
]

function App() {
	const [introVisible, setIntroVisible] = useState(false)
	const fadeRefs = useRef<HTMLElement[]>([])

	useEffect(() => {
		const onScroll = () => {
			setIntroVisible(window.scrollY > 40)
		}
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('fade-in-visible')
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.15 }
		)

		fadeRefs.current.forEach((el) => el && observer.observe(el))
		return () => observer.disconnect()
	}, [])

	const registerFadeRef = (el: HTMLElement | null) => {
		if (el && !fadeRefs.current.includes(el)) {
			fadeRefs.current.push(el)
		}
	}

	return (
		<>
			<NavBar />
			<main>
				<section id="home" className="hero-section">
					<Container>
						<Row className="align-items-center g-5">
							<Col lg={7}>
								<h1 className="hero-name">Marc Honegger</h1>
								<p className="lead">
									Business Informatics student exploring automation, finance, and longevity.
								</p>
								<p className="support">Sharing how I think — not selling anything.</p>
								<div className="hero-actions" aria-label="Profile links">
									<Button
										variant="outline-light"
										size="lg"
										href="https://www.linkedin.com/in/marc-honegger/"
										target="_blank"
										rel="noopener noreferrer"
									>
										LinkedIn
									</Button>
									<Button
										variant="outline-light"
										size="lg"
										href="https://github.com/MarcHonegger"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</Button>
								</div>
							</Col>
							<Col lg={5} className="hero-card-col d-flex align-items-center justify-content-center justify-content-lg-end">
								<div className="hero-card">
									<img src="/assets/big_profile.jpeg" alt="Marc portrait" className="profile-img" />
									<h3>Still brewing my path</h3>
									<p>I am improving my life every day by being a student at UZH and working part-time at different companies, energized by good coffee.</p>
									<div className="hero-meta">
										<span>Open to internships & collaborations</span>
										<span>Zurich · remote-friendly</span>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
					<div className="scroll-indicator" aria-hidden="true">
						<span className="scroll-indicator__dot" />
						<span className="scroll-indicator__arrow" />
					</div>
				</section>

				<section id="intro" className={`section intro-section ${introVisible ? 'intro-visible' : ''}`}>
					<Container>
						<Row className="justify-content-center">
							<Col lg={9} className="text-center">
								<p className="intro-callout">
									I care about efficient workflows and the impact they have on our lives.
									<br />
									I believe every role matters — from the barista behind the counter to the engineer building skyscrapers.
									<br />
								</p>
								<blockquote className="intro-quote">
									“Look out for people and people will look out for you.”
									<span className="intro-quote-source">— Sam Walton</span>
								</blockquote>
							</Col>
						</Row>
					</Container>
				</section>

				<section id="skills" className="section fade-in" ref={registerFadeRef}>
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
										<Card id={slug} className="glass-card personal-card h-100" role="button" onClick={() => navigate(item.href)}>
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

				<section id="personal" className="section personal-growth fade-in" ref={registerFadeRef}>
					<Container>
						<Row className="justify-content-center text-center mb-4">
							<Col lg={8}>
								<p className="eyebrow">Personal growth</p>
								<h2>Habits keeping me grounded</h2>
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

				<section id="languages" className="section fade-in" ref={registerFadeRef}>
					<Container>
						<Row className="justify-content-center text-center mb-4">
							<Col lg={8}>
								<p className="eyebrow">Languages</p>
								<h2>How I communicate</h2>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Col lg={10}>
								<div className="languages-grid">
									{languages.map((lang) => (
										<Card key={lang.name} className="language-card">
											<Card.Body>
												<div className="language-name">{lang.name}</div>
												<div className="language-level">{lang.level}</div>
											</Card.Body>
										</Card>
 									))}
 								</div>
 							</Col>
 						</Row>
 					</Container>
 				</section>

				<section id="projects" className="section fade-in" ref={registerFadeRef}>
					<Container>
						<Row className="justify-content-center text-center mb-4">
							<Col lg={8}>
								<p className="eyebrow">Projects</p>
								<h2>Things I&apos;ve built so far</h2>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Col lg={10}>
								{/* Desktop/tablet: 3 projects per slide */}
								<div className="d-none d-md-block">
									<Carousel className="projects-carousel" interval={5000} pause="hover" indicators>
										{projectSlides.map((slide, slideIndex) => (
											<Carousel.Item key={`slide-${slideIndex}`}>
												<Row className="g-4">
													{slide.map((piece) => {
														const slug = piece.title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-')
														return (
															<Col md={4} key={piece.title}>
																<Card
																	id={slug}
																	className="glass-card personal-card project-card h-100"
																	role="button"
																	onClick={() => navigate('/projects/' + slug)}
																>
																	<Card.Body>
																		<Card.Title>{piece.title}</Card.Title>
																		<Card.Text>{piece.copy}</Card.Text>
																	</Card.Body>
																</Card>
															</Col>
														)
													})}
												</Row>
											</Carousel.Item>
										))}
									</Carousel>
								</div>

								{/* Mobile: 1 project per slide */}
								<div className="d-block d-md-none">
									<Carousel className="projects-carousel" interval={5000} pause="hover" indicators>
										{projectSlidesMobile.map((piece) => {
											const slug = piece.title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-')
											return (
												<Carousel.Item key={`mobile-${piece.title}`}>
													<Row className="g-4">
														<Col xs={12}>
															<Card
																id={slug}
																className="glass-card personal-card project-card h-100"
																role="button"
																onClick={() => navigate('/projects/' + slug)}
															>
																<Card.Body>
																	<Card.Title>{piece.title}</Card.Title>
																	<Card.Text>{piece.copy}</Card.Text>
																</Card.Body>
															</Card>
														</Col>
													</Row>
												</Carousel.Item>
											)
										})}
									</Carousel>
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
