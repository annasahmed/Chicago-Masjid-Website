import { Bell, ChevronRight } from "lucide-react";

const announcements = [
  {
    title: "Masjid Hours During Winter",
    date: "Dec 10, 2025",
    content: "Please note that the Masjid will open 30 minutes before Fajr and close 30 minutes after Isha during the winter months.",
    priority: "normal",
  },
  {
    title: "Eid ul-Fitr Celebration",
    date: "Dec 8, 2025",
    content: "Save the date! Eid prayers will be held at 8:00 AM and 9:30 AM in the main hall. Family activities to follow.",
    priority: "high",
  },
  {
    title: "Volunteer Appreciation Day",
    date: "Dec 5, 2025",
    content: "Join us in thanking our dedicated volunteers who make our community programs possible.",
    priority: "normal",
  },
];

export function AnnouncementsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold mb-4">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-medium">Latest Updates</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Announcements
            </h2>
          </div>

          {/* Announcements List */}
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.title}
                className={`bg-card rounded-xl p-6 border transition-all duration-300 hover:shadow-soft cursor-pointer group ${
                  announcement.priority === "high"
                    ? "border-gold bg-gold/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {announcement.priority === "high" && (
                        <span className="px-2 py-0.5 bg-gold text-accent-foreground text-xs font-medium rounded">
                          Important
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">{announcement.date}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {announcement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
