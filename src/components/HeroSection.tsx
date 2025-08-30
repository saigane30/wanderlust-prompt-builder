import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, MapPin, Calendar as CalendarIcon, Users, IndianRupee } from "lucide-react";
import { format } from "date-fns";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  const [date, setDate] = useState<Date>();
  const [location, setLocation] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [budget, setBudget] = useState("");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover Your Next
          <span className="text-primary block">Adventure</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
          Explore breathtaking destinations and create unforgettable memories with our curated travel experiences
        </p>

        {/* Search Bar */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Where to?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Date */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  {date ? format(date, "MMM dd, yyyy") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* Travelers */}
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="pl-10 h-12"
                type="number"
                min="1"
              />
            </div>

            {/* Budget */}
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Budget (₹)"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="pl-10 h-12"
                type="number"
              />
            </div>
          </div>

          <Button className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-primary/90">
            <Search className="w-5 h-5 mr-2" />
            Search Tours
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-secondary">10K+</div>
            <div className="text-white/80">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent">4.9</div>
            <div className="text-white/80">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;