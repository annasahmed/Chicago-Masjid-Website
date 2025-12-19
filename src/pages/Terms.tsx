import { Layout } from "@/components/layout/Layout";

export default function Terms() {
	return (
		<Layout>
			{/* Hero Section */}
			<section className="bg-gradient-hero relative py-24 overflow-hidden">
				<div className="absolute inset-0 pattern-islamic opacity-20" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
						Terms & Conditions
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
									Agreement to Terms
								</h2>
								<p>
									By accessing and using the Glenbrook website, you agree to be
									bound by these Terms and Conditions. If you do not agree with
									any part of these terms, please do not use our website.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Use of Website
								</h2>
								<p>
									You agree to use this website only for lawful purposes and in
									a manner that:
								</p>
								<ul className="list-disc pl-6 space-y-2 mt-3">
									<li>Does not violate any applicable laws or regulations</li>
									<li>Does not infringe upon the rights of others</li>
									<li>
										Does not interfere with the proper functioning of the
										website
									</li>
									<li>
										Does not attempt to gain unauthorized access to any systems
									</li>
								</ul>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Intellectual Property
								</h2>
								<p>
									All content on this website, including text, graphics, logos,
									images, and software, is the property of Glenbrook or its
									content suppliers and is protected by intellectual property
									laws. You may not reproduce, distribute, or create derivative
									works without our prior written consent.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Donations
								</h2>
								<p>All donations made through our website are:</p>
								<ul className="list-disc pl-6 space-y-2 mt-3">
									<li>Voluntary and non-refundable</li>
									<li>Used in accordance with our charitable mission</li>
									<li>Tax-deductible to the extent allowed by law</li>
									<li>
										Processed securely through third-party payment processors
									</li>
								</ul>
								<p className="mt-3">
									We will provide donation receipts for your records. Please
									contact us if you need a receipt for tax purposes.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Event Registration
								</h2>
								<p>
									When registering for events through our website, you agree to
									provide accurate information. We reserve the right to cancel
									or modify events as necessary. In case of event cancellation,
									we will make reasonable efforts to notify registered
									participants.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									User Submissions
								</h2>
								<p>
									Any content you submit through our website (including contact
									forms and comments) must be lawful, non-defamatory, and
									respect Islamic values. We reserve the right to remove any
									content that violates these terms.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Disclaimer
								</h2>
								<p>
									This website is provided "as is" without warranties of any
									kind. We do not guarantee the accuracy, completeness, or
									reliability of any content. Prayer times are provided for
									reference and should be verified with local calculations.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Limitation of Liability
								</h2>
								<p>
									Glenbrook shall not be liable for any direct, indirect,
									incidental, or consequential damages arising from your use of
									this website or any services provided through it.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									External Links
								</h2>
								<p>
									Our website may contain links to external websites. We are not
									responsible for the content or practices of these third-party
									sites. Inclusion of any link does not imply endorsement.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Modifications
								</h2>
								<p>
									We reserve the right to modify these Terms and Conditions at
									any time. Changes will be effective immediately upon posting.
									Your continued use of the website constitutes acceptance of
									any modifications.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Governing Law
								</h2>
								<p>
									These Terms and Conditions are governed by the laws of the
									State in which Glenbrook is located. Any disputes shall be
									resolved in the appropriate courts of that jurisdiction.
								</p>
							</div>

							<div>
								<h2 className="font-serif text-2xl font-bold text-foreground mb-4">
									Contact Information
								</h2>
								<p>
									For questions about these Terms and Conditions, please contact
									us at:
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
