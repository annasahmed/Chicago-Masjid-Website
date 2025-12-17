import { Layout } from "@/components/layout/Layout";
import {
	BookOpen,
	Heart,
	Users,
	Baby,
	GraduationCap,
	Handshake,
	Home,
	Utensils,
	Stethoscope,
	Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
	{
		icon: BookOpen,
		title: "Quran Classes",
		description:
			"Learn to recite, memorize, and understand the Holy Quran with qualified teachers. Classes available for children, youth, and adults at all levels.",
		features: [
			"Tajweed & Recitation",
			"Hifz Program",
			"Tafseer Studies",
			"Weekend & After-school Options",
		],
	},
	{
		icon: GraduationCap,
		title: "Islamic Education",
		description:
			"Comprehensive Islamic studies programs covering all aspects of our faith and practice.",
		features: [
			"Arabic Language",
			"Fiqh & Islamic Law",
			"Seerah & Islamic History",
			"Aqeedah Studies",
		],
	},
	{
		icon: Baby,
		title: "Youth Programs",
		description:
			"Engaging activities and mentorship designed to develop confident, practicing Muslim youth.",
		features: [
			"Youth Halaqas",
			"Sports & Recreation",
			"Leadership Training",
			"Summer Camps",
		],
	},
	{
		icon: Handshake,
		title: "Marriage Services",
		description:
			"Complete marriage facilitation services to help families through this blessed journey.",
		features: [
			"Nikah Ceremonies",
			"Pre-marital Counseling",
			"Marriage Facilitation",
			"Matrimonial Services",
		],
	},
	{
		icon: Heart,
		title: "Charity & Zakat",
		description:
			"Transparent and efficient distribution of Zakat, Sadaqah, and charitable donations to those in need.",
		features: [
			"Zakat Collection",
			"Food Distribution",
			"Financial Assistance",
			"Emergency Relief",
		],
	},
	{
		icon: Users,
		title: "Senior Services",
		description:
			"Supporting our elderly community members with care, companionship, and practical assistance.",
		features: [
			"Weekly Gatherings",
			"Transportation Assistance",
			"Home Visits",
			"Health Awareness",
		],
	},
	{
		icon: Home,
		title: "New Muslim Support",
		description:
			"Welcoming and supporting those who have embraced Islam with education and community integration.",
		features: [
			"Shahada Services",
			"Mentorship Program",
			"Educational Resources",
			"Community Welcome",
		],
	},
	{
		icon: Utensils,
		title: "Food Pantry",
		description:
			"Providing food assistance to families in need within our community and beyond.",
		features: [
			"Weekly Distribution",
			"Holiday Food Drives",
			"Emergency Assistance",
			"Volunteer Opportunities",
		],
	},
	{
		icon: Stethoscope,
		title: "Health Clinics",
		description:
			"Periodic health screenings and wellness programs for community members.",
		features: [
			"Health Screenings",
			"Mental Health Support",
			"Wellness Workshops",
			"Medical Referrals",
		],
	},
	{
		icon: Scale,
		title: "Legal Aid",
		description:
			"Connecting community members with legal resources and immigration assistance.",
		features: [
			"Legal Consultations",
			"Immigration Help",
			"Know Your Rights",
			"Document Assistance",
		],
	},
];

export default function Services() {
	return (
		<Layout>
			{/* Hero Section */}
			<section className="bg-gradient-hero relative py-32 overflow-hidden">
				<div className="absolute inset-0 pattern-islamic opacity-20" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
						Our Services
					</h1>
					<p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
						Serving our community with comprehensive religious, educational, and
						social services.
					</p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8">
						{services.map((service) => {
							const Icon = service.icon;
							return (
								<div
									key={service.title}
									className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300">
									<div className="flex items-start gap-6">
										<div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
											<Icon className="w-8 h-8 text-primary" />
										</div>
										<div className="flex-1">
											<h3 className="font-serif text-xl font-semibold text-foreground mb-3">
												{service.title}
											</h3>
											<p className="text-muted-foreground text-sm leading-relaxed mb-4">
												{service.description}
											</p>
											<ul className="grid grid-cols-2 gap-2">
												{service.features.map((feature) => (
													<li
														key={feature}
														className="flex items-center gap-2 text-sm text-muted-foreground">
														<span className="w-1.5 h-1.5 rounded-full bg-gold" />
														{feature}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-secondary">
				<div className="container mx-auto px-4 text-center">
					<h2 className="font-serif text-3xl font-bold text-foreground mb-4">
						Need Assistance?
					</h2>
					<p className="text-muted-foreground mb-8 max-w-xl mx-auto">
						Our team is here to help. Contact us to learn more about our
						services or to request assistance.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg">Contact Us</Button>
						<Button variant="outline" size="lg">
							View Schedule
						</Button>
					</div>
				</div>
			</section>
		</Layout>
	);
}
