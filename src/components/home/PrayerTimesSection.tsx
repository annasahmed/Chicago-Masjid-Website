import { Button } from "@/components/ui/button";
import { formatHijriDate, getArabicHijriDate } from "@/lib/hijri";
import {
	addDays,
	differenceInDays,
	format,
	startOfDay,
	subDays,
} from "date-fns";
import {
	Calendar,
	ChevronLeft,
	ChevronRight,
	Clock,
	Moon,
	Sun,
	Sunrise,
	Sunset,
} from "lucide-react";
import { useState } from "react";

// Sample prayer times for the week (in a real app, these would come from an API)
const weeklyPrayerTimes: Record<
	string,
	{
		name: string;
		time: string;
		iqama?: string;
		khateeb?: string;
		icon: typeof Sun;
	}[]
> = {};

// Generate prayer times for 7 days (sample data - times would vary in reality)
for (let i = 0; i < 7; i++) {
	const date = addDays(startOfDay(new Date()), i);
	const dateKey = format(date, "yyyy-MM-dd");
	weeklyPrayerTimes[dateKey] = [
		{
			name: "Fajr",
			time: `${5 + Math.floor(i / 3)}:${45 - i * 2} AM`,
			iqama: `${6 + Math.floor(i / 3)}:00 AM`,
			icon: Sunrise,
		},
		// {
		// 	name: "Sunrise",
		// 	time: `${7 + Math.floor(i / 4)}:${15 + i} AM`,
		// 	iqama: "-",
		// 	icon: Sun,
		// },
		{
			name: "Zuhr",
			time: "12:30 PM",
			//  iqama: "1:00 PM",
			icon: Sun,
		},
		{
			name: "Asr",
			time: `${3 + Math.floor(i / 5)}:${45 - i} PM`,
			// iqama: `${4 + Math.floor(i / 5)}:00 PM`,
			icon: Sun,
		},
		{
			name: "Maghrib",
			time: `${5 + Math.floor(i / 3)}:${30 + i * 2} PM`,
			// iqama: `${5 + Math.floor(i / 3)}:${35 + i * 2} PM`,
			icon: Sunset,
		},
		{
			name: "Isha",
			time: `${7 + Math.floor(i / 4)}:${i * 3} PM`,
			iqama: `${7 + Math.floor(i / 4)}:30 PM`,
			icon: Moon,
		},
		{
			name: "Jumma",
			time: "1:30 PM",
			iqama: "1:40 PM",
			khateeb: "Allama Khateeb",
			icon: Sun,
		},
	];
}

export function PrayerTimesSection() {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const today = startOfDay(new Date());
	const daysDiff = differenceInDays(startOfDay(selectedDate), today);

	const canGoBack = daysDiff > 0;
	const canGoForward = daysDiff < 6;

	const goToPreviousDay = () => {
		if (canGoBack) {
			setSelectedDate((prev) => subDays(prev, 1));
		}
	};

	const goToNextDay = () => {
		if (canGoForward) {
			setSelectedDate((prev) => addDays(prev, 1));
		}
	};

	const goToToday = () => {
		setSelectedDate(new Date());
	};

	const gregorianDate = format(selectedDate, "EEEE, MMMM d, yyyy");
	const hijriDate = formatHijriDate(selectedDate);
	const arabicHijriDate = getArabicHijriDate(selectedDate);
	const dateKey = format(selectedDate, "yyyy-MM-dd");
	const prayerTimes =
		weeklyPrayerTimes[dateKey] ||
		weeklyPrayerTimes[format(today, "yyyy-MM-dd")];

	const isToday = daysDiff === 0;

	return (
		<section id="prayer-times" className="py-20 bg-secondary pattern-islamic">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
						<Clock className="w-4 h-4" />
						<span className="text-sm font-medium">Daily Prayer Schedule</span>
					</div>
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
						{isToday ? "Today's" : format(selectedDate, "EEEE's")} Prayer Times
					</h2>
				</div>

				{/* Date Display & Navigation */}
				<div className="max-w-2xl mx-auto mb-10">
					<div className="bg-background rounded-2xl p-6 shadow-soft">
						{/* Date Navigation */}
						<div className="flex items-center justify-between mb-4">
							<Button
								variant="gold"
								size="icon"
								onClick={goToPreviousDay}
								disabled={!canGoBack}
								className="disabled:opacity-30">
								<ChevronLeft className="w-5 h-5" />
							</Button>

							<div className="text-center flex-1">
								<p className="text-lg font-semibold text-foreground">
									{gregorianDate}
								</p>
							</div>

							<Button
								variant="gold"
								size="icon"
								onClick={goToNextDay}
								disabled={!canGoForward}
								className="disabled:opacity-30">
								<ChevronRight className="w-5 h-5" />
							</Button>
						</div>

						{/* Hijri Date */}
						<div className="text-center bg-primary/5 rounded-xl p-4 border border-primary/10">
							<div className="flex items-center justify-center gap-2 mb-1">
								<Calendar className="w-4 h-4 text-primary" />
								<span className="text-sm text-muted-foreground">
									Hijri Date
								</span>
							</div>
							<p className="font-arabic text-xl text-gold mb-1">
								{arabicHijriDate}
							</p>
							<p className="text-sm text-foreground font-medium">{hijriDate}</p>
						</div>

						{/* Quick Navigation */}
						{!isToday && (
							<div className="mt-4 text-center">
								<Button variant="outline" size="sm" onClick={goToToday}>
									Back to Today
								</Button>
							</div>
						)}

						{/* Week Navigation Pills */}
						<div className="mt-4 flex justify-center gap-2">
							{Array.from({ length: 7 }).map((_, i) => {
								const date = addDays(today, i);
								const isSelected =
									differenceInDays(
										startOfDay(selectedDate),
										startOfDay(date),
									) === 0;
								return (
									<button
										key={i}
										onClick={() => setSelectedDate(date)}
										className={`w-10 h-10 rounded-full text-xs font-medium transition-all ${
											isSelected
												? "bg-primary text-primary-foreground"
												: "bg-secondary hover:bg-primary/10 text-muted-foreground"
										}`}>
										{format(date, "EEE").charAt(0)}
										<span className="block text-[10px]">
											{format(date, "d")}
										</span>
									</button>
								);
							})}
						</div>
					</div>
				</div>

				{/* Prayer Times Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
					{prayerTimes.map((prayer) => {
						const Icon = prayer.icon;
						return (
							<div
								key={prayer.name}
								className="bg-background rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 group">
								<div className="flex justify-center mb-4">
									<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
										<Icon className="w-6 h-6" />
									</div>
								</div>
								<h3 className="font-serif font-semibold text-lg text-center mb-2">
									{prayer.name}
								</h3>
								<p className="text-2xl font-bold text-primary text-center mb-1">
									{prayer.time}
								</p>
								{prayer.iqama && prayer.iqama !== "-" && (
									<p className="text-xs text-muted-foreground text-center">
										Iqama: {prayer.iqama}
									</p>
								)}
								{prayer.khateeb && (
									<p className="text-xs text-muted-foreground text-center">
										Khateeb: {prayer.khateeb}
									</p>
								)}
							</div>
						);
					})}
				</div>

				{/* Jummah Notice */}
				{/* <div className="mt-8 bg-gold/10 border border-gold/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
							<span className="text-accent-foreground font-serif font-bold text-xl">
								ج
							</span>
						</div>
						<div>
							<h4 className="font-serif font-semibold text-lg">
								Jummah Prayer
							</h4>
							<p className="text-muted-foreground text-sm">Every Friday</p>
						</div>
					</div>
					<div className="text-center md:text-right">
						<p className="text-sm text-muted-foreground">Khutbah: 1:00 PM</p>
						<p className="text-lg font-bold text-primary">Prayer: 1:30 PM</p>
					</div>
				</div> */}
			</div>
		</section>
	);
}
