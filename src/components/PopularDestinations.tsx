import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Users } from "lucide-react";
import mountainsImage from "@/assets/destination-mountains.jpg";
import templeImage from "@/assets/destination-temple.jpg";
import cityImage from "@/assets/destination-city.jpg";

const destinations = [
  {
    id: 1,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    image: mountainsImage,
    price: 207500,
    duration: "7 days",
    rating: 4.9,
    reviews: 156,
    category: "Adventure",
    description: "Experience breathtaking mountain views and thrilling activities in the heart of the Swiss Alps.",
  },
  {
    id: 2,
    title: "Ancient Temples Explorer",
    location: "Cambodia",
    image: templeImage,
    price: 107900,
    duration: "5 days",
    rating: 4.8,
    reviews: 203,
    category: "Cultural",
    description: "Discover mystical ancient temples and immerse yourself in rich cultural heritage.",
  },
  {
    id: 3,
    title: "European City Break",
    location: "Prague",
    image: cityImage,
    price: 74700,
    duration: "4 days",
    rating: 4.7,
    reviews: 89,
    category: "City",
    description: "Explore charming cobblestone streets and stunning medieval architecture.",
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