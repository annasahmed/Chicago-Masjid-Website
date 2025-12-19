import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about" },
	// { name: "Services", href: "/services" },
	{ name: "Events", href: "/events" },
	{ name: "Contact", href: "/contact" },
];

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
			<nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-3">
					<img src={logo} alt="logo" className="w-15/ h-15 object-contain" />
					{/* <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
						<span className="text-primary-foreground font-serif font-bold text-lg">
							M
						</span>
					</div>
					<div>
						<h1 className="font-serif font-bold text-xl text-foreground">
							Masjid Al-Noor
						</h1>
						<p className="text-xs text-muted-foreground">Islamic Center</p>
					</div> */}
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden lg:flex items-center gap-8">
					{navigation.map((item) => (
						<Link
							key={item.name}
							to={item.href}
							className={cn(
								"text-sm font-medium transition-colors duration-200 hover:text-primary",
								location.pathname === item.href
									? "text-primary"
									: "text-muted-foreground",
							)}>
							{item.name}
						</Link>
					))}
				</div>

				{/* Desktop CTA */}
				<div className="hidden lg:flex items-center gap-4">
					<a
						href="tel:+1234567890"
						className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
						<Phone className="w-4 h-4" />
						<span>+1 (847) 867-4349</span>
					</a>
					<Link to="/donate">
						<Button variant="gold" size="sm">
							Donate Now
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="lg:hidden p-2"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					{mobileMenuOpen ? (
						<X className="w-6 h-6 text-foreground" />
					) : (
						<Menu className="w-6 h-6 text-foreground" />
					)}
				</button>
			</nav>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="lg:hidden bg-background border-b border-border animate-fade-in">
					<div className="container mx-auto px-4 py-4 space-y-4">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className={cn(
									"block py-2 text-base font-medium transition-colors",
									location.pathname === item.href
										? "text-primary"
										: "text-muted-foreground",
								)}
								onClick={() => setMobileMenuOpen(false)}>
								{item.name}
							</Link>
						))}
						<div className="pt-4 border-t border-border">
							<Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
								<Button variant="gold" className="w-full">
									Donate Now
								</Button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
