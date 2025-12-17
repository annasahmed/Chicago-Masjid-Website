import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
	{
		icon: MapPin,
		title: "Address",
		content: "123 Islamic Center Drive\nCity, State 12345",
	},
	{
		icon: Phone,
		title: "Phone",
		content: "(123) 456-7890",
	},
	{
		icon: Mail,
		title: "Email",
		content: "info@masjidalnooor.org",
	},
	{
		icon: Clock,
		title: "Hours",
		content: "Open Daily: 5:00 AM - 10:00 PM\nOffice: Mon-Fri 9 AM - 5 PM",
	},
];

export default function Contact() {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		toast({
			title: "Message Sent!",
			description: "We'll get back to you as soon as possible.",
		});
		setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
	};

	return (
		<Layout>
			{/* Hero Section */}
			<section className="bg-gradient-hero relative py-32 overflow-hidden">
				<div className="absolute inset-0 pattern-islamic opacity-20" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
						Contact Us
					</h1>
					<p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
						We'd love to hear from you. Reach out with any questions or
						inquiries.
					</p>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Info */}
						<div>
							<span className="text-gold font-medium text-sm uppercase tracking-wider">
								Get in Touch
							</span>
							<h2 className="font-serif text-3xl font-bold text-foreground mt-3 mb-8">
								We're Here to Help
							</h2>

							<div className="space-y-6 mb-12">
								{contactInfo.map((info) => {
									const Icon = info.icon;
									return (
										<div key={info.title} className="flex gap-4">
											<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
												<Icon className="w-6 h-6 text-primary" />
											</div>
											<div>
												<h3 className="font-semibold text-foreground mb-1">
													{info.title}
												</h3>
												<p className="text-muted-foreground whitespace-pre-line">
													{info.content}
												</p>
											</div>
										</div>
									);
								})}
							</div>

							{/* Map Placeholder */}
							<div className="bg-secondary rounded-2xl h-64 flex items-center justify-center border border-border">
								<div className="text-center text-muted-foreground">
									<MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
									<p>Interactive Map</p>
									<p className="text-sm">123 Islamic Center Drive</p>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
							<h3 className="font-serif text-2xl font-bold text-foreground mb-6">
								Send Us a Message
							</h3>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-foreground mb-2">
											Your Name *
										</label>
										<input
											type="text"
											required
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
											placeholder="John Doe"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-foreground mb-2">
											Email Address *
										</label>
										<input
											type="email"
											required
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
											placeholder="john@example.com"
										/>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-foreground mb-2">
											Phone Number
										</label>
										<input
											type="tel"
											value={formData.phone}
											onChange={(e) =>
												setFormData({ ...formData, phone: e.target.value })
											}
											className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
											placeholder="(123) 456-7890"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-foreground mb-2">
											Subject *
										</label>
										<select
											required
											value={formData.subject}
											onChange={(e) =>
												setFormData({ ...formData, subject: e.target.value })
											}
											className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
											<option value="">Select a subject</option>
											<option value="general">General Inquiry</option>
											<option value="services">Services</option>
											<option value="events">Events</option>
											<option value="donation">Donation</option>
											<option value="volunteer">Volunteering</option>
											<option value="other">Other</option>
										</select>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-foreground mb-2">
										Message *
									</label>
									<textarea
										required
										rows={5}
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
										placeholder="How can we help you?"
									/>
								</div>

								<Button type="submit" size="lg" className="w-full">
									<Send className="w-5 h-5 mr-2" />
									Send Message
								</Button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
