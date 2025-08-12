import type { Vehicle } from "@/components/VehicleCard";

type VehicleWithImage = Vehicle & { image: string };

function estimatePayment(price: number) {
  // Very rough estimate: 8% APR, 60 months, $2,000 down
  // Monthly = (P * r) / (1 - (1 + r)^-n)
  const principal = Math.max(0, price - 2000);
  const annualRate = 0.08;
  const monthlyRate = annualRate / 12;
  const n = 60;
  const monthly = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  return Math.round(monthly);
}

export const vehicles: VehicleWithImage[] = [
  {
    slug: "2017-toyota-tacoma-trd-off-road",
    year: 2017,
    make: "Toyota",
    model: "Tacoma",
    trim: "TRD Off-Road",
    bodyStyle: "Pickup",
    mileage: 84000,
    price: 30999,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
    fuelType: "Gasoline",
    transmission: "Automatic",
    origin: "Asian",
    paymentPerMonth: estimatePayment(30999),
  },
  {
    slug: "2019-toyota-corolla-se",
    year: 2019,
    make: "Toyota",
    model: "Corolla",
    trim: "SE",
    bodyStyle: "Sedan",
    mileage: 60000,
    price: 18999,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    fuelType: "Gasoline",
    transmission: "Automatic",
    origin: "Asian",
    paymentPerMonth: estimatePayment(18999),
  },
  {
    slug: "2021-ford-escape-sel",
    year: 2021,
    make: "Ford",
    model: "Escape",
    trim: "SEL",
    bodyStyle: "SUV",
    mileage: 65000,
    price: 18999,
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop",
    fuelType: "Gasoline",
    transmission: "Automatic",
    origin: "American",
    paymentPerMonth: estimatePayment(18999),
  },
  {
    slug: "2022-chevrolet-spark-1lt",
    year: 2022,
    make: "Chevrolet",
    model: "Spark",
    trim: "1LT",
    bodyStyle: "Hatchback",
    mileage: 49000,
    price: 16495,
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop",
    fuelType: "Gasoline",
    transmission: "Automatic",
    origin: "American",
    paymentPerMonth: estimatePayment(16495),
  },
  {
    slug: "2013-toyota-rav4-le",
    year: 2013,
    make: "Toyota",
    model: "RAV4",
    trim: "LE",
    bodyStyle: "SUV",
    mileage: 162000,
    price: 12999,
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop",
    fuelType: "Gasoline",
    transmission: "Automatic",
    origin: "Asian",
    paymentPerMonth: estimatePayment(12999),
  },
]; 