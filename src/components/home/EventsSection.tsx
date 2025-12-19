import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// const events = [
// 	{
// 		title: "Weekly Sisters' Halaqa",
// 		date: "Every Saturday",
// 		time: "10:00 AM - 12:00 PM",
// 		location: "Sisters' Hall",
// 		category: "Weekly",
// 		featured: false,
// 	},
// 	{
// 		title: "Youth Quran Competition",
// 		date: "December 28, 2025",
// 		time: "2:00 PM - 6:00 PM",
// 		location: "Main Prayer Hall",
// 		category: "Special Event",
// 		featured: true,
// 	},
// 	{
// 		title: "New Muslim Support Group",
// 		date: "Every Sunday",
// 		time: "After Dhuhr",
// 		location: "Community Room",
// 		category: "Weekly",
// 		featured: false,
// 	},
// 	{
// 		title: "Annual Fundraising Dinner",
// 		date: "January 15, 2026",
// 		time: "6:00 PM - 9:00 PM",
// 		location: "Banquet Hall",
// 		category: "Fundraiser",
// 		featured: true,
// 	},
// ];

export interface EventsType {
	title: string;
	description?: string;
	date: string;
	time: string;
	location: string;
	category: string;
	featured: string;
}

const events: EventsType[] = [];

export function EventsSection() {
	return (
		<section className="py-20 bg-secondary">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
					<div>
						<span className="text-gold font-medium text-sm uppercase tracking-wider">
							Stay Connected
						</span>
						<h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
							Upcoming Events
						</h2>
					</div>
					{events.length > 0 && (
						<Button variant="outline" asChild>
							<Link to="/events">
								View All Events
								<ArrowRight className="w-4 h-4 ml-2" />
							</Link>
						</Button>
					)}
				</div>

				{/* Events Grid */}
				{events.length > 0 ? (
					<div className="grid md:grid-cols-2 gap-6">
						{events.map((event) => (
							<div
								key={event.title}
								className={`relative bg-background rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-elevated ${
									event.featured
										? "border-gold"
										: "border-border hover:border-primary/30"
								}`}>
								{event.featured && (
									<div className="absolute top-4 right-4 px-3 py-1 bg-gold text-accent-foreground text-xs font-medium rounded-full">
										Featured
									</div>
								)}
								<div className="p-6">
									<span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
										{event.category}
									</span>
									<h3 className="font-serif text-xl font-semibold text-foreground mb-4">
										{event.title}
									</h3>
									<div className="space-y-2 text-sm text-muted-foreground">
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
	);
}
