import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
	return (
		<Layout>
			{/* Hero Section */}
			<section className="bg-gradient-hero relative py-24 overflow-hidden">
				<div className="absolute inset-0 pattern-islamic opacity-20" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
						Privacy Policy
					</h1>
					<p className="text-primary-foreground/80">
						Last updated: December 16, 2025
					</p>
				</div>
			</section>

			{/* Content */}
			<section className="py-16 bg-background">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto prose prose-lg">
						<div className="space-y-8 text-muted-foreground">
							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Introduction
								</h2>
								<p>
									Glenbrook ("we," "our," or "us") is committed to protecting
									your privacy. This Privacy Policy explains how we collect,
									use, disclose, and safeguard your information when you visit
									our website or use our services.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Information We Collect
								</h2>
								<p>
									We may collect information about you in various ways,
									including:
								</p>
								<ul className="list-disc pl-6 space-y-2 mt-3">
									<li>
										<strong>Personal Data:</strong> Name, email address, phone
										number, and mailing address when you register for events,
										subscribe to newsletters, or contact us.
									</li>
									<li>
										<strong>Donation Information:</strong> Payment details when
										you make donations (processed securely through third-party
										payment processors).
									</li>
									<li>
										<strong>Usage Data:</strong> Information about how you
										access and use our website, including IP address, browser
										type, and pages visited.
									</li>
								</ul>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									How We Use Your Information
								</h2>
								<p>We use the information we collect to:</p>
								<ul className="list-disc pl-6 space-y-2 mt-3">
									<li>Provide and maintain our services</li>
									<li>
										Send you updates about events, programs, and prayer times
									</li>
									<li>Process donations and provide tax receipts</li>
									<li>Respond to your inquiries and requests</li>
									<li>Improve our website and services</li>
									<li>Comply with legal obligations</li>
								</ul>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Information Sharing
								</h2>
								<p>
									We do not sell, trade, or rent your personal information to
									third parties. We may share your information with trusted
									service providers who assist us in operating our website and
									services, subject to confidentiality agreements.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Data Security
								</h2>
								<p>
									We implement appropriate security measures to protect your
									personal information. However, no method of transmission over
									the internet is 100% secure, and we cannot guarantee absolute
									security.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Your Rights
								</h2>
								<p>You have the right to:</p>
								<ul className="list-disc pl-6 space-y-2 mt-3">
									<li>Access the personal information we hold about you</li>
									<li>Request correction of inaccurate information</li>
									<li>Request deletion of your information</li>
									<li>Opt-out of marketing communications</li>
								</ul>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Cookies
								</h2>
								<p>
									Our website may use cookies to enhance your browsing
									experience. You can set your browser to refuse cookies, but
									this may limit some features of our website.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Children's Privacy
								</h2>
								<p>
									We do not knowingly collect personal information from children
									under 13 without parental consent. If we learn that we have
									collected such information, we will delete it promptly.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Changes to This Policy
								</h2>
								<p>
									We may update this Privacy Policy from time to time. We will
									notify you of any changes by posting the new policy on this
									page and updating the "Last updated" date.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Contact Us
								</h2>
								<p>
									If you have questions about this Privacy Policy, please
									contact us at:
								</p>
								<p className="mt-3">
									{/* <strong>Email:</strong> info@masjidalnooor.org */}
									<br />
									<strong>Phone:</strong> +1 (847)867-4349
									<br />
									<strong>Address:</strong> 1000 Elm St, Glenview, IL 60025
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
