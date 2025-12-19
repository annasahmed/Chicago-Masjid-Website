import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// const causes = [
// 	{
// 		icon: Building,
// 		label: "Masjid Maintenance",
// 		amount: "$15,000",
// 		goal: "$25,000",
// 	},
// 	{
// 		icon: BookOpen,
// 		label: "Education Programs",
// 		amount: "$8,500",
// 		goal: "$15,000",
// 	},
// 	{
// 		icon: Users,
// 		label: "Community Services",
// 		amount: "$12,000",
// 		goal: "$20,000",
// 	},
// ];

interface CausesTypes {
	icon: any;
	label: String;
	amount: String;
	goal: String;
}

const causes: CausesTypes[] = [];

export function DonationSection() {
	return (
		<section className="py-20 bg-gradient-hero relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 pattern-islamic opacity-20" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<div>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
							<Heart className="w-4 h-4 text-gold" />
							<span className="text-sm text-primary-foreground/90">
								Support Our Masjid
							</span>
						</div>

						<h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
							Your Generosity Makes a Difference
						</h2>

						<p className="text-primary-foreground/80 leading-relaxed mb-8">
							"The example of those who spend their wealth in the way of Allah
							is like a seed of grain that grows seven ears; in every ear there
							are a hundred grains. Allah multiplies for whom He wills."
							<span className="block mt-2 text-sm text-gold">
								— Quran 2:261
							</span>
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								// variant="gold"
								variant="gold"
								size="lg">
								<Heart className="w-5 h-5 mr-2" />
								Donate Now
							</Button>
							<Button
								// variant="outline"
								variant="hero-outline"
								size="lg">
								Monthly Giving
							</Button>
						</div>
					</div>

					{/* Donation Progress Cards */}
					<div className="space-y-4">
						{causes.map((cause, idx) => {
							const Icon = cause.icon;
							const raised = parseInt(cause.amount.replace(/\D/g, ""));
							const goal = parseInt(cause.goal.replace(/\D/g, ""));
							const progress = (raised / goal) * 100;

							return (
								<div
									key={idx}
									className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center">
											<Icon className="w-6 h-6 text-accent-foreground" />
										</div>
										<div className="flex-1">
											<h4 className="font-semibold text-primary-foreground">
												{cause.label}
											</h4>
											<p className="text-sm text-primary-foreground/70">
												{cause.amount} raised of {cause.goal}
											</p>
										</div>
									</div>
									<div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
										<div
											className="h-full bg-gold rounded-full transition-all duration-500"
											style={{ width: `${progress}%` }}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
