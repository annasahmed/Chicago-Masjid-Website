import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { EventsType } from "@/components/home/EventsSection";

// const upcomingEvents = [
// 	{
// 		title: "Youth Quran Competition",
// 		date: "December 28, 2025",
// 		time: "2:00 PM - 6:00 PM",
// 		location: "Main Prayer Hall",
// 		category: "Youth",
// 		description:
// 			"Annual Quran recitation competition for youth ages 7-18. Prizes for all participants.",
// 		featured: true,
// 	},
// 	{
// 		title: "Annual Fundraising Dinner",
// 		date: "January 15, 2026",
// 		time: "6:00 PM - 9:00 PM",
// 		location: "Banquet Hall",
// 		category: "Fundraiser",
// 		description:
// 			"Join us for an evening of community, inspiration, and giving. Guest speakers and dinner included.",
// 		featured: true,
// 	},
// 	{
// 		title: "Sisters' Islamic Studies Circle",
// 		date: "Every Saturday",
// 		time: "10:00 AM - 12:00 PM",
// 		location: "Sisters' Hall",
// 		category: "Weekly",
// 		description:
// 			"Weekly gathering for sisters to study Islamic topics, Quran, and hadith together.",
// 		featured: false,
// 	},
// 	{
// 		title: "New Muslim Support Group",
// 		date: "Every Sunday",
// 		time: "After Dhuhr",
// 		location: "Community Room",
// 		category: "Weekly",
// 		description:
// 			"A supportive space for new Muslims to learn, ask questions, and connect with mentors.",
// 		featured: false,
// 	},
// 	{
// 		title: "Youth Basketball League",
// 		date: "Every Friday",
// 		time: "7:00 PM - 9:00 PM",
// 		location: "Community Center Gym",
// 		category: "Youth",
// 		description:
// 			"Weekly basketball for youth ages 13-18. Building fitness, friendship, and faith.",
// 		featured: false,
// 	},
// 	{
// 		title: "Family Movie Night",
// 		date: "January 5, 2026",
// 		time: "6:30 PM - 9:00 PM",
// 		location: "Community Hall",
// 		category: "Family",
// 		description:
// 			"Family-friendly movie screening with popcorn and refreshments. All ages welcome.",
// 		featured: false,
// 	},
// 	{
// 		title: "Marriage Workshop",
// 		date: "January 20, 2026",
// 		time: "10:00 AM - 4:00 PM",
// 		location: "Conference Room",
// 		category: "Education",
// 		description:
// 			"A day-long workshop for couples on building strong Islamic marriages.",
// 		featured: false,
// 	},
// 	{
// 		title: "Community Health Fair",
// 		date: "February 1, 2026",
// 		time: "9:00 AM - 3:00 PM",
// 		location: "Community Hall",
// 		category: "Health",
// 		description:
// 			"Free health screenings, wellness information, and health resources for the community.",
// 		featured: false,
// 	},
// ];

const upcomingEvents: EventsType[] = [];

const categoryColors: Record<string, string> = {
	Youth: "bg-emerald-light text-primary",
	Fundraiser: "bg-gold/20 text-gold",
	Weekly: "bg-primary/10 text-primary",
	Family: "bg-secondary text-foreground",
	Education: "bg-primary/10 text-primary",
	Health: "bg-emerald-light text-primary",
};

export default function Events() {
	const featuredEvents = upcomingEvents.filter((e) => e.featured);
	const regularEvents = upcomingEvents.filter((e) => !e.featured);

	return (
		<Layout>
			{/* Hero Section */}
			<section className="bg-gradient-hero relative py-32 overflow-hidden">
				<div className="absolute inset-0 pattern-islamic opacity-20" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
						Events & Programs
					</h1>
					<p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
						Join us for worship, learning, and community gatherings throughout
						the year.
					</p>
				</div>
			</section>

			{/* Featured Events */}
			{featuredEvents.length > 0 && (
				<section className="py-20 bg-background">
					<div className="container mx-auto px-4">
						<div className="mb-12">
							<span className="text-gold font-medium text-sm uppercase tracking-wider">
								Don't Miss
							</span>
							<h2 className="font-serif text-3xl font-bold text-foreground mt-3">
								Featured Events
							</h2>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{featuredEvents.map((event) => (
								<div
									key={event.title}
									className="relative bg-card rounded-2xl overflow-hidden border-2 border-gold shadow-elevated">
									<div className="absolute top-4 right-4 px-3 py-1 bg-gold text-accent-foreground text-xs font-medium rounded-full">
										Featured
									</div>
									<div className="p-8">
										<span
											className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
												categoryColors[event.category]
											}`}>
											{event.category}
										</span>
										<h3 className="font-serif text-2xl font-bold text-foreground mb-4">
											{event.title}
										</h3>
										<p className="text-muted-foreground mb-6">
											{event.description}
										</p>
										<div className="space-y-2 text-sm text-muted-foreground mb-6">
											<div className="flex items-center gap-2">
												<Calendar className="w-4 h-4 text-primary" />
												<span>{event.date}</span>
											</div>
											<div className="flex items-center gap-2">
												<Clock className="w-4 h-4 text-primary" />
												<span>{event.time}</span>
											</div>
											<div className="flex items-center gap-2">
												<MapPin className="w-4 h-4 text-primary" />
												<span>{event.location}</span>
											</div>
										</div>
										<Button variant="gold">Register Now</Button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{/* All Events */}
			<section className="py-20 bg-secondary">
				<div className="container mx-auto px-4">
					<div className="mb-12">
						<h2 className="font-serif text-3xl font-bold text-foreground">
							All Events
						</h2>
					</div>

					{regularEvents.length > 0 ? (
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{regularEvents.map((event) => (
								<div
									key={event.title}
									className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300">
									<span
										className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
											categoryColors[event.category]
										}`}>
										{event.category}
									</span>
									<h3 className="font-serif text-lg font-semibold text-foreground mb-3">
										{event.title}
									</h3>
									<p className="text-sm text-muted-foreground mb-4 line-clamp-2">
										{event.description}
									</p>
									<div className="space-y-1 text-sm text-muted-foreground">
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4 text-primary" />
											<span>{event.date}</span>
										</div>
										<div className="flex items-center gap-2">
											<Clock className="w-4 h-4 text-primary" />
											<span>{event.time}</span>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<p className="text-center/ text-lg font-semibold">
							No Events Available Right Now
						</p>
					)}
				</div>
			</section>

			{/* Calendar CTA */}
			<section className="py-16 bg-background">
				<div className="container mx-auto px-4 text-center">
					<Users className="w-12 h-12 text-primary mx-auto mb-4" />
					<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
						Want to Stay Updated?
					</h2>
					<p className="text-muted-foreground mb-6 max-w-md mx-auto">
						Subscribe to our newsletter to receive event updates and
						announcements.
					</p>
					<Button size="lg">Subscribe to Newsletter</Button>
				</div>
			</section>
		</Layout>
	);
}
