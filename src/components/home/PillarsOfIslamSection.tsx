import { Star, Heart, Coins, Moon, Landmark } from "lucide-react";

const pillars = [
	{
		icon: Star,
		name: "Shahada",
		arabic: "الشهادة",
		title: "Declaration of Faith",
		description:
			"The declaration of faith in one God (Allah) and His messenger Prophet Muhammad (peace be upon him).",
	},
	{
		icon: Heart,
		name: "Salah",
		arabic: "الصلاة",
		title: "Prayer",
		description:
			"The ritual prayer required of every Muslim five times a day throughout their lifetime.",
	},
	{
		icon: Coins,
		name: "Zakat",
		arabic: "الزكاة",
		title: "Almsgiving",
		description:
			"The act of giving a portion of a Muslim's wealth to those in need throughout their lifetime.",
	},
	{
		icon: Moon,
		name: "Sawm",
		arabic: "الصوم",
		title: "Fasting",
		description:
			"The act of fasting during the holy month of Ramadan, abstaining from food, drink and other needs.",
	},
	{
		icon: Landmark,
		name: "Hajj",
		arabic: "الحج",
		title: "Pilgrimage",
		description:
			"The sacred pilgrimage to Mecca required of every Muslim at least once in their lifetime if able.",
	},
];

export function PillarsOfIslamSection() {
	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
						<Star className="w-4 h-4" />
						<span className="text-sm font-medium">Foundation of Faith</span>
					</div>
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
						The Five Pillars of Islam
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						These five pillars form the foundation of Muslim life and are the
						framework of a Muslim's faith and practice.
					</p>
				</div>

				{/* Pillars Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
					{pillars.map((pillar, index) => {
						const Icon = pillar.icon;
						return (
							<div
								key={pillar.name}
								className="group bg-secondary rounded-2xl p-6 text-center hover:bg-primary transition-all duration-300 hover:shadow-elevated"
								style={{ animationDelay: `${index * 100}ms` }}>
								{/* Icon */}
								<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
									<Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
								</div>

								{/* Arabic Name */}
								<p className="font-arabic text-2xl text-gold mb-2">
									{pillar.arabic}
								</p>

								{/* English Name */}
								<h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary-foreground mb-1 transition-colors">
									{pillar.name}
								</h3>

								{/* Title */}
								<p className="text-sm text-primary group-hover:text-gold font-medium mb-3 transition-colors">
									{pillar.title}
								</p>

								{/* Description */}
								<p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors">
									{pillar.description}
								</p>

								{/* Pillar Number */}
								<div className="mt-4 w-8 h-8 mx-auto rounded-full bg-gold/20 group-hover:bg-gold flex items-center justify-center">
									<span className="text-sm font-bold text-gold group-hover:text-accent-foreground transition-colors">
										{index + 1}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
