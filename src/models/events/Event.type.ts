export type EventT = {
  id: number;
  date: {
    day: string;
    month: string;
  };
  location: {
    city: string;
    country: string;
    address: string;
  };
  priceRange: string;
};
