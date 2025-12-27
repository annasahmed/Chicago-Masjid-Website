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
								<p>In the name of Allah, the Most Merciful, the Most Kind.</p>
								<p>
									Glenbrook Islamic Centre was founded in 2025 with the sincere
									intention of creating a peaceful place of worship and
									community in Glenview, Illinois. Located at 1000 Elm St,
									Glenview, IL 60025, the centre began as a shared vision to
									provide a welcoming space for prayer, reflection, and
									connection.
								</p>
								<p>
									What started as a humble effort by community members has grown
									into a place where faith is practiced with simplicity and
									sincerity. Glenbrook Islamic Centre is more than a masjid. It
									is a space where hearts find peace, neighbors build bonds, and
									Islamic values are strengthened through togetherness.
								</p>
								<p>
									With regular congregational prayers and the continued support
									of the community, the centre continues to grow with faith at
									its core.
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
							<div className="space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									Our vision is to build a strong, united Muslim community
									rooted in faith, respect, and compassion.
								</p>
								<p className="text-muted-foreground leading-relaxed">
									GLENBROOK aims to be a peaceful center where people come
									closer to Allah while also feeling connected to one another.
									We envision a space that encourages spiritual growth, mutual
									understanding, and a sense of belonging for individuals and
									families in Glenview and surrounding areas.
								</p>
								<p className="text-muted-foreground leading-relaxed">
									Through consistency in prayer and community presence, we
									strive to be a source of light, guidance, and unity.
								</p>
							</div>
						</div>
						<div className="bg-background rounded-2xl p-8 border border-border">
							<div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-6">
								<Target className="w-7 h-7 text-accent-foreground" />
							</div>
							<h3 className="font-serif text-2xl font-bold text-foreground mb-4">
								Our Mission
							</h3>
							<div className="space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									Our mission is to provide a simple, welcoming place for daily
									worship and community connection.
								</p>
								<p className="text-muted-foreground leading-relaxed">
									GLENBROOK is committed to maintaining regular congregational
									prayers, with Namaz Jamaat held two times daily for Fajar and
									Isha. We focus on creating an environment that is calm,
									respectful, and open to all who wish to pray and reflect.
								</p>
								<p className="text-muted-foreground leading-relaxed">
									We aim to serve the local community with sincerity, keeping
									faith at the center while fostering unity, support, and shared
									responsibility.
								</p>
							</div>
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
