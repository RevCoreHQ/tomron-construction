export interface Review {
  id: string;
  quote: string;
  author: string;
  location: string;
  service: string;
  rating: 5;
  date: string;
}

// Real Google reviews only — add more as they come in
export const reviews: Review[] = [
  {
    id: 'r1',
    quote: 'Brendan is very confident, competent and personable. He takes great pride in his work and it really shows in the quality of the finished product. We could not be happier with the results.',
    author: 'Paula A.',
    location: 'Coquitlam, BC',
    service: 'Siding & Cladding',
    rating: 5,
    date: '2025-06',
  },
  {
    id: 'r2',
    quote: 'Outstanding work with excellent workmanship. Brendan listens to your concerns and delivers exactly what was discussed. Very professional from start to finish. Highly recommend Tomron Construction.',
    author: 'Anne C.',
    location: 'Pitt Meadows, BC',
    service: 'Exterior Renovation',
    rating: 5,
    date: '2025-04',
  },
  {
    id: 'r3',
    quote: 'Very professional team. We are thrilled with the excellent workmanship. On time and on budget, they did an extraordinary job on our home. Already recommended them to our neighbours.',
    author: 'Sharon D.',
    location: 'Burnaby, BC',
    service: 'Window Replacement',
    rating: 5,
    date: '2025-02',
  },
];
