export const bookingServices = [
  'Paint Protection Film (PPF)',
  'Window Tint',
  'Window Shield',
  'Ceramic Coating',
  'Detailing Services',
  'Painting',
  'Other'
] as const;

export interface BookingData {
  service: string;
  make: string;
  model: string;
  year: string;
  location: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
}

export const initialBookingData: BookingData = {
  service: '',
  make: '',
  model: '',
  year: '',
  location: 'Shwaikh Industrial',
  date: '',
  time: '',
  name: '',
  phone: '',
  email: ''
};

export function createBookingWhatsAppUrl(data: BookingData) {
  const message = [
    'Hello Rock Shield, I would like to request an appointment.',
    `Service: ${data.service}`,
    `Vehicle: ${data.year} ${data.make} ${data.model}`,
    `Location: ${data.location}`,
    `Preferred date: ${data.date}`,
    `Preferred time: ${data.time}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`
  ].join('\n');

  return `https://wa.me/96560422211?text=${encodeURIComponent(message)}`;
}
