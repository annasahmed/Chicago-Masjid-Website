import logo from "@/assets/logo-yellow.png";
import {
	Clock,
	Facebook,
	Instagram,
	MapPin,
	Phone,
	Youtube
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
	return (
		<footer className="bg-primary text-primary-foreground">
			{/* Main Footer */}
			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* About */}
					<div>
						<div className="flex items-center gap-3 mb-6">
							<img
								src={logo}
								alt="logo"
								className="w-16/ h-16 object-contain"
							/>
							{/* <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
								<span className="text-primary-foreground font-serif font-bold text-lg">
									M
								</span>
							</div>
							<div>
								<h3 className="font-serif font-bold text-lg">Masjid Al-Noor</h3>
								<p className="text-xs text-primary-foreground/70">
									Islamic Center
								</p>
							</div> */}
						</div>
						<p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
							Building faith, strengthening humanity. A place of worship,
							learning, and community for all.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
								<Facebook className="w-4 h-4" />
							</a>
							<a
								href="#"
								className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
								<Youtube className="w-4 h-4" />
							</a>
							<a
								href="#"
								className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
								<Instagram className="w-4 h-4" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-serif font-semibold text-lg mb-6">
							Quick Links
						</h4>
						<ul className="space-y-3">
							{[
								{ name: "About Us", href: "/about" },
								{ name: "Prayer Times", href: "/#prayer-times" },
								{ name: "Events", href: "/events" },
								// { name: "Services", href: "/services" },
								{ name: "Contact", href: "/contact" },
							].map((link) => (
								<li key={link.name}>
									<Link
										to={link.href}
										className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="font-serif font-semibold text-lg mb-6">
							Contact Info
						</h4>
						<ul className="space-y-4">
							<li className="flex gap-3">
								<MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
								<span className="text-sm text-primary-foreground/80">
									1000 Elm St, Glenview, IL 60025
								</span>
							</li>
							<li className="flex gap-3">
								<Phone className="w-5 h-5 text-gold shrink-0" />
								<span className="text-sm text-primary-foreground/80">
									+1 (847) 867-4349
								</span>
							</li>
							{/* <li className="flex gap-3">
								<Mail className="w-5 h-5 text-gold shrink-0" />
								<span className="text-sm text-primary-foreground/80">
									info@masjidalnooor.org
								</span>
							</li> */}
							<li className="flex gap-3">
								<Clock className="w-5 h-5 text-gold shrink-0" />
								<span className="text-sm text-primary-foreground/80">
									Open Daily: 5:00 AM - 10:00 PM
								</span>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h4 className="font-serif font-semibold text-lg mb-6">
							Stay Connected
						</h4>
						<p className="text-sm text-primary-foreground/80 mb-4">
							Subscribe to receive updates on events, prayer times, and
							community news.
						</p>
						<form className="space-y-3">
							<input
								type="email"
								placeholder="Your email address"
								className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-gold transition-colors"
							/>
							<button className="w-full px-4 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-colors">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-primary-foreground/10">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-primary-foreground/60">
							&copy; {new Date().getFullYear()} Glenbrook. All rights reserved.
						</p>
						<div className="flex gap-6">
							<Link
								to="/privacy"
								className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
								Terms & Conditions
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
