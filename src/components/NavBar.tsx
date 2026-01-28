import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { navigate } from '../utils/navigate'

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState<string>('home')
	const [scrolled, setScrolled] = useState<boolean>(false)

	const onUpdateActiveLink = (value: string) => {
		setActiveLink(value)
	}

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	return (
		<Navbar expand="lg" className={`nav-elevated ${scrolled ? 'scrolled' : ''}`} fixed="top">
			<Container>
				<Navbar.Brand href="#home" onClick={() => onUpdateActiveLink('home')}>
					<img src="/assets/profile.jpeg" alt="Marc profile" className="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto align-items-lg-center">
						{[
							{ id: 'home', label: 'Home', path: '/' },
							{ id: 'personal', label: 'Personal', path: '/#skills' },
							{ id: 'journey', label: 'Journey', path: '/#journey' },
							{ id: 'contact', label: 'Contact', path: '/#contact' },
						].map((link) => (
							<Nav.Link
								key={link.id}
								href={link.path}
								className={activeLink === link.id ? 'active navbar-link' : 'navbar-link'}
								onClick={(e: MouseEvent<HTMLAnchorElement>) => {
									e.preventDefault()
									onUpdateActiveLink(link.id)
									navigate(link.path)
								}}
							>
								{link.label}
							</Nav.Link>
						))}
						<Button variant="light" size="sm" className="ms-lg-3" href="/#contact" onClick={(e: MouseEvent<HTMLButtonElement>) => { e.preventDefault(); navigate('/#contact') }}>
							Let&apos;s talk
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}