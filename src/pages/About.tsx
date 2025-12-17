import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, Award, Building } from "lucide-react";

const values = [
	{
		icon: Heart,
		title: "Faith & Devotion",
		description:
			"Nurturing a deep connection with Allah through prayer, learning, and community worship.",
	},
	{
		icon: Users,
		title: "Community Unity",
		description:
			"Building bridges between diverse backgrounds, fostering brotherhood and sisterhood.",
	},
	{
		icon: Award,
		title: "Excellence in Service",
		description:
			"Striving for the highest standards in everything we do for our community.",
	},
];

const milestones = [
	{
		year: "1999",
		title: "Foundation",
		description:
			"Masjid Al-Noor was established by a small group of dedicated community members.",
	},
	{
		year: "2005",
		title: "New Building",
		description:
			"Moved to our current location with expanded facilities for prayer and education.",
	},
	{
		year: "2012",
		title: "Education Center",
		description: "Launched our full-time Islamic school and weekend programs.",
	},
	{
		year: "2020",
		title: "Community Expansion",
		description: "Opened our community center serving over 5,000 families.",
	},
];

export default function About() {
	return (
		<Layout>
			{/* Hero Section */}
			<section className="bg-gradient-hero relative py-32 overflow-hidden">
				<div className="absolute inset-0 pattern-islamic opacity-20" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
						About Our Masjid
					</h1>
					<p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
						A beacon of faith, knowledge, and community service since 1999.
					</p>
				</div>
			</section>

			{/* Our Story */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<span className="text-gold font-medium text-sm uppercase tracking-wider">
								Our Story
							</span>
							<h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
								Building Faith, Strengthening Humanity
							</h2>
							<div className="space-y-4 text-muted-foreground leading-relaxed">
								<p>
									Glenbrook began as a vision shared by a
									small group of Muslim families in 1999. What started as Friday
									prayers in a rented community hall has grown into a thriving
									center serving thousands of families.
								</p>
								<p>
									Over the past 25 years, we have expanded our facilities,
									programs, and outreach to become a comprehensive Islamic
									center that addresses the spiritual, educational, and social
									needs of our diverse community.
								</p>
								<p>
									Today, we continue to uphold our founding principles of
									worship, education, and community service while adapting to
									meet the evolving needs of our growing community.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="bg-secondary rounded-2xl p-8 shadow-elevated">
								<Building className="w-16 h-16 text-primary mb-6" />
								<h3 className="font-serif text-2xl font-bold text-foreground mb-4">
									Our Facilities
								</h3>
								<ul className="space-y-3 text-muted-foreground">
									<li className="flex items-center gap-3">
										<span className="w-2 h-2 rounded-full bg-gold" />
										Main Prayer Hall (capacity: 1,500)
									</li>
									<li className="flex items-center gap-3">
										<span className="w-2 h-2 rounded-full bg-gold" />
										Sisters' Prayer Area
									</li>
									<li className="flex items-center gap-3">
										<span className="w-2 h-2 rounded-full bg-gold" />
										Islamic School & Classrooms
									</li>
									<li className="flex items-center gap-3">
										<span className="w-2 h-2 rounded-full bg-gold" />
										Community Hall & Kitchen
									</li>
									<li className="flex items-center gap-3">
										<span className="w-2 h-2 rounded-full bg-gold" />
										Youth Center & Library
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Vision & Mission */}
			<section className="py-20 bg-secondary">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-background rounded-2xl p-8 border border-border">
							<div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
								<Eye className="w-7 h-7 text-primary-foreground" />
							</div>
							<h3 className="font-serif text-2xl font-bold text-foreground mb-4">
								Our Vision
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								To be a leading Islamic center that inspires spiritual growth,
								promotes Islamic knowledge, and serves as a model of community
								excellence, fostering a generation of Muslims who contribute
								positively to society.
							</p>
						</div>
						<div className="bg-background rounded-2xl p-8 border border-border">
							<div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-6">
								<Target className="w-7 h-7 text-accent-foreground" />
							</div>
							<h3 className="font-serif text-2xl font-bold text-foreground mb-4">
								Our Mission
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								To provide a welcoming environment for worship, education, and
								community engagement, guided by the Quran and Sunnah, serving
								Muslims and fostering understanding with the broader community.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<span className="text-gold font-medium text-sm uppercase tracking-wider">
							What Guides Us
						</span>
						<h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
							Our Core Values
						</h2>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{values.map((value) => {
							const Icon = value.icon;
							return (
								<div key={value.title} className="text-center">
									<div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
										<Icon className="w-8 h-8 text-primary" />
									</div>
									<h3 className="font-serif text-xl font-semibold text-foreground mb-3">
										{value.title}
									</h3>
									<p className="text-muted-foreground">{value.description}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section className="py-20 bg-secondary">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<span className="text-gold font-medium text-sm uppercase tracking-wider">
							Our Journey
						</span>
						<h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
							Key Milestones
						</h2>
					</div>
					<div className="max-w-3xl mx-auto">
						{milestones.map((milestone, index) => (
							<div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
								<div className="flex flex-col items-center">
									<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
										{milestone.year}
									</div>
									{index < milestones.length - 1 && (
										<div className="w-0.5 h-full bg-border mt-2" />
									)}
								</div>
								<div className="flex-1 pb-8">
									<h3 className="font-serif text-xl font-semibold text-foreground mb-2">
										{milestone.title}
									</h3>
									<p className="text-muted-foreground">
										{milestone.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}
