import qrCode from "@/assets/qrcode.png";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Banknote, CreditCard, Heart, Landmark, Repeat } from "lucide-react";

// const donationCategories = [
// 	{
// 		icon: Building,
// 		title: "Masjid Maintenance",
// 		description:
// 			"Help maintain our beautiful masjid and keep it a welcoming space for worship.",
// 		amount: "$15,000",
// 		goal: "$25,000",
// 		color: "bg-primary",
// 	},
// 	{
// 		icon: BookOpen,
// 		title: "Education Programs",
// 		description:
// 			"Support Quran classes, Islamic studies, and youth education programs.",
// 		amount: "$8,500",
// 		goal: "$15,000",
// 		color: "bg-gold",
// 	},
// 	{
// 		icon: Users,
// 		title: "Community Services",
// 		description: "Fund community outreach, counseling, and social services.",
// 		amount: "$12,000",
// 		goal: "$20,000",
// 		color: "bg-emerald-600",
// 	},
// 	{
// 		icon: Utensils,
// 		title: "Food Bank",
// 		description: "Provide meals for those in need within our community.",
// 		amount: "$5,200",
// 		goal: "$10,000",
// 		color: "bg-amber-600",
// 	},
// 	{
// 		icon: GraduationCap,
// 		title: "Scholarship Fund",
// 		description: "Support students pursuing Islamic and academic education.",
// 		amount: "$7,800",
// 		goal: "$15,000",
// 		color: "bg-blue-600",
// 	},
// ];

const paymentMethods = [
	{ icon: CreditCard, label: "Credit/Debit Card" },
	{ icon: Banknote, label: "Bank Transfer" },
	{ icon: Landmark, label: "Zelle" },
];

export default function Donate() {
	return (
		<Layout>
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-hero overflow-hidden">
				<div className="absolute inset-0 pattern-islamic opacity-20" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
						<Heart className="w-4 h-4 text-gold" />
						<span className="text-sm text-primary-foreground/90">
							Support Our Masjid
						</span>
					</div>
					<h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
						Your Generosity Makes a Difference
					</h1>
					<p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
						"The example of those who spend their wealth in the way of Allah is
						like a seed of grain that grows seven ears; in every ear there are a
						hundred grains."
					</p>
					<p className="text-gold font-medium">— Quran 2:261</p>
				</div>
			</section>

			{/* Quick Donate */}
			<section className="py-16 bg-background">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto bg-secondary rounded-2xl p-8 shadow-elevated">
						<h2 className="font-serif text-2xl font-bold text-center mb-8">
							Quick Donation
						</h2>

						{/* Amount Selection */}
						<div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
							{["$25", "$50", "$100", "$250", "$500", "Custom"].map(
								(amount) => (
									<button
										key={amount}
										className="py-3 px-4 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 font-semibold text-foreground transition-all">
										{amount}
									</button>
								),
							)}
						</div>

						{/* Donation Type */}
						<div className="flex justify-center gap-4 mb-8">
							<Button variant="default" size="lg">
								One-Time Gift
							</Button>
							<Button variant="outline" size="lg">
								<Repeat className="w-4 h-4 mr-2" />
								Monthly Giving
							</Button>
						</div>

						{/* Payment Methods */}
						<div className="flex flex-wrap justify-center gap-4 mb-8">
							{paymentMethods.map(({ icon: Icon, label }) => (
								<div
									key={label}
									className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border">
									<Icon className="w-5 h-5 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">{label}</span>
								</div>
							))}
						</div>

						<Button variant="gold" size="lg" className="w-full">
							<Heart className="w-5 h-5 mr-2" />
							Donate Now
						</Button>
					</div>
				</div>
			</section>

			{/* Donation Categories */}
			{/* <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose a Cause
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your donations help sustain our masjid and serve our community. Every contribution, no matter the size, makes a meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationCategories.map((category) => {
              const Icon = category.icon;
              const raised = parseInt(category.amount.replace(/\D/g, ""));
              const goal = parseInt(category.goal.replace(/\D/g, ""));
              const progress = (raised / goal) * 100;

              return (
                <div
                  key={category.title}
                  className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-primary">{category.amount} raised</span>
                      <span className="text-muted-foreground">Goal: {category.goal}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${category.color} rounded-full transition-all duration-500`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Donate to This Cause
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

			{/* Zakat & Sadaqah Info */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12">
						<div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
							<h3 className="font-serif text-2xl font-bold text-foreground mb-4">
								Zakat
							</h3>
							<p className="text-muted-foreground mb-4">
								Zakat is one of the Five Pillars of Islam and is obligatory for
								those who meet the nisab threshold. It purifies your wealth and
								supports those in need.
							</p>
							<ul className="space-y-2 text-sm text-muted-foreground mb-6">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary" />
									2.5% of qualifying wealth annually
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary" />
									Distributed to eligible recipients
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-primary" />
									Tax-deductible contribution
								</li>
							</ul>
							<Button variant="default">Calculate Your Zakat</Button>
						</div>

						<div className="bg-gold/5 rounded-2xl p-8 border border-gold/20">
							<h3 className="font-serif text-2xl font-bold text-foreground mb-4">
								Sadaqah
							</h3>
							<p className="text-muted-foreground mb-4">
								Sadaqah is voluntary charity given out of compassion, love, or
								generosity. It can be given at any time and in any amount.
							</p>
							<ul className="space-y-2 text-sm text-muted-foreground mb-6">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-gold" />
									Any amount, any time
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-gold" />
									Supports various causes
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-gold" />
									Purifies the heart and wealth
								</li>
							</ul>
							<Button variant="gold">Give Sadaqah</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Bank Details */}
			<section className="py-16 bg-secondary">
				<div className="container mx-auto px-4 text-center">
					<h2 className="font-serif text-2xl font-bold text-foreground mb-8">
						Other Ways to Give
					</h2>
					<div>
						<img
							src={qrCode}
							alt="qr-code"
							className="mx-auto w-36 object-contain"
						/>
					</div>

					{/* <div className="max-w-2xl mx-auto bg-background rounded-2xl p-8">
            <h3 className="font-semibold text-lg mb-4">Bank Transfer Details</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left text-sm">
              <div>
                <p className="text-muted-foreground">Bank Name</p>
                <p className="font-medium">First National Bank</p>
              </div>
              <div>
                <p className="text-muted-foreground">Account Name</p>
                <p className="font-medium">Glenbrook</p>
              </div>
              <div>
                <p className="text-muted-foreground">Routing Number</p>
                <p className="font-medium">XXXXXX123</p>
              </div>
              <div>
                <p className="text-muted-foreground">Account Number</p>
                <p className="font-medium">XXXXXXXX4567</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Please include your name and contact information in the memo for tax receipt purposes.
            </p>
          </div> */}
				</div>
			</section>
		</Layout>
	);
}
