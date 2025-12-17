import {
	BookOpen,
	Heart,
	Users,
	Baby,
	GraduationCap,
	Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
	{
		icon: BookOpen,
		title: "Quran Classes",
		description:
			"Learn to recite and understand the Holy Quran with qualified teachers for all age groups.",
	},
	{
		icon: GraduationCap,
		title: "Islamic Education",
		description:
			"Comprehensive Islamic studies programs including Arabic, Fiqh, and Seerah courses.",
	},
	{
		icon: Baby,
		title: "Youth Programs",
		description:
			"Engaging activities and mentorship programs designed for our younger community members.",
	},
	{
		icon: Handshake,
		title: "Marriage Services",
		description:
			"Nikah ceremonies, pre-marital counseling, and marriage facilitation services.",
	},
	{
		icon: Heart,
		title: "Charity & Zakat",
		description:
			"Support those in need through our transparent and efficient charity distribution system.",
	},
	{
		icon: Users,
		title: "Community Support",
		description:
			"Social services including senior care, food assistance, and family counseling.",
	},
];

export function ServicesSection() {
	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<span className="text-gold font-medium text-sm uppercase tracking-wider">
						What We Offer
					</span>
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
						Our Services
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Serving our community with a wide range of religious, educational,
						and social services.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div
								key={service.title}
								className="group bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
								style={{ animationDelay: `${index * 100}ms` }}>
								<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
									<Icon className="w-7 h-7" />
								</div>
								<h3 className="font-serif text-xl font-semibold text-foreground mb-3">
									{service.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{service.description}
								</p>
							</div>
						);
					})}
				</div>

				{/* CTA */}
				<div className="text-center mt-12">
					<Link
						to="/services"
						className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
						View All Services
						<span className="text-xl">→</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
