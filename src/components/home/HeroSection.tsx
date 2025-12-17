import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

export function HeroSection() {
	return (
		<section className="relative min-h-[90vh] flex items-center overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-hero" />
			<div className="absolute inset-0 pattern-islamic opacity-30" />

			{/* Decorative Elements */}
			<div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
			<div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-3xl">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
						<span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
						<span className="text-sm text-primary-foreground/90">
							Welcome to our community
						</span>
					</div>

					{/* Heading */}
					<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
						Building Faith,
						<br />
						<span className="text-gradient-gold">Strengthening Humanity</span>
					</h1>

					{/* Description */}
					<p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl animate-fade-up animation-delay-200">
						A welcoming place of worship, learning, and community service. Join
						us in prayer, education, and making a positive impact in our
						community.
					</p>

					{/* CTAs */}
					<div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
						<Button
							variant="hero"
							size="xl"
							asChild>
							<Link to="/about">
								Learn About Us
								<ArrowRight className="w-5 h-5" />
							</Link>
						</Button>
						<Button variant="hero-outline" size="xl" asChild>
							<Link to="/events">
								<Calendar className="w-5 h-5" />
								Upcoming Events
							</Link>
						</Button>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up animation-delay-400">
						{[
							{ value: "25+", label: "Years Serving" },
							{ value: "5000+", label: "Community Members" },
							{ value: "50+", label: "Weekly Programs" },
						].map((stat) => (
							<div key={stat.label}>
								<div className="font-serif text-3xl md:text-4xl font-bold text-gold">
									{stat.value}
								</div>
								<div className="text-sm text-primary-foreground/70 mt-1">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
