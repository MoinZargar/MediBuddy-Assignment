import { Booking } from '../types/booking';

export const BookingData: Booking[] = [
    {
      id: '1',
      patientName: 'Mr. Suresh Gaikwad',
      status: 'confirmed',
      date: '03 Nov\'22',
      day: 'Wednesday',
      time: '09:30-10:30',
      serviceType: 'Home Sample Collection',
      testCount: 3
    },
    {
      id: '2',
      patientName: 'Mrs. Priya Sharma',
      status: 'confirmed',
      date: '04 Nov\'22',
      day: 'Thursday',
      time: '11:00-12:00',
      serviceType: 'Home Sample Collection',
      testCount: 2
    },
    {
      id: '3',
      patientName: 'Mr. Rahul Patel',
      status: 'confirmed',
      date: '05 Nov\'22',
      day: 'Friday',
      time: '14:00-15:00',
      serviceType: 'Home Sample Collection',
      testCount: 4
    }
  ]