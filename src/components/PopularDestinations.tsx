import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Users } from "lucide-react";
import tajMahalImage from "@/assets/destination-taj-mahal.jpg";
import keralaImage from "@/assets/destination-kerala.jpg";
import rajasthanImage from "@/assets/destination-rajasthan.jpg";
import goaImage from "@/assets/destination-goa.jpg";
import himalayasImage from "@/assets/destination-himalayas.jpg";
import varanasiImage from "@/assets/destination-varanasi.jpg";

const destinations = [
  {
    id: 1,
    title: "Golden Triangle Tour",
    location: "Delhi, Agra & Jaipur",
    image: tajMahalImage,
    price: 25000,
    duration: "6 days",
    rating: 4.9,
    reviews: 324,
    category: "Cultural",
    description: "Experience India's most iconic monuments including the magnificent Taj Mahal and explore royal palaces.",
  },
  {
    id: 2,
    title: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    image: keralaImage,
    price: 18500,
    duration: "4 days",
    rating: 4.8,
    reviews: 256,
    category: "Nature",
    description: "Cruise through serene backwaters on traditional houseboats and enjoy Kerala's natural beauty.",
  },
  {
    id: 3,
    title: "Rajasthan Desert Safari",
    location: "Jaisalmer, Rajasthan",
    image: rajasthanImage,
    price: 22000,
    duration: "5 days",
    rating: 4.7,
    reviews: 189,
    category: "Adventure",
    description: "Experience the magic of Thar Desert with camel safaris and stay in luxury desert camps.",
  },
  {
    id: 4,
    title: "Goa Beach Paradise",
    location: "North & South Goa",
    image: goaImage,
    price: 15000,
    duration: "5 days",
    rating: 4.6,
    reviews: 412,
    category: "Beach",
    description: "Relax on pristine beaches, enjoy water sports, and experience Goa's vibrant nightlife.",
  },
  {
    id: 5,
    title: "Himalayan Adventure",
    location: "Manali, Himachal Pradesh",
    image: himalayasImage,
    price: 28000,
    duration: "7 days",
    rating: 4.9,
    reviews: 167,
    category: "Adventure",
    description: "Trek through spectacular mountain landscapes and experience the majesty of the Himalayas.",
  },
  {
    id: 6,
    title: "Spiritual Varanasi",
    location: "Varanasi, Uttar Pradesh",
    image: varanasiImage,
    price: 12000,
    duration: "3 days",
    rating: 4.8,
    reviews: 298,
    category: "Spiritual",
    description: "Witness ancient rituals on sacred ghats and experience India's spiritual heart.",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved travel experiences, handpicked by our travel experts and rated by thousands of happy travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {destination.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {destination.location}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {destination.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {destination.reviews} reviews
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      ₹{destination.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-muted-foreground ml-1">per person</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;