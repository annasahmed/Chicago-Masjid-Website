import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PrayerTimesSection } from "@/components/home/PrayerTimesSection";
// import { ServicesSection } from "@/components/home/ServicesSection";
import { EventsSection } from "@/components/home/EventsSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { DonationSection } from "@/components/home/DonationSection";
import { PillarsOfIslamSection } from "@/components/home/PillarsOfIslamSection";

const Index = () => {
	return (
		<Layout>
			<HeroSection />
			<PrayerTimesSection />
			<AnnouncementsSection />
			<PillarsOfIslamSection />
			{/* <ServicesSection /> */}
			<EventsSection />
			<DonationSection />
		</Layout>
	);
};

export default Index;
