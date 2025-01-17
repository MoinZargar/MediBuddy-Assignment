export interface Booking {
    id: string
    patientName: string
    status: 'confirmed' | 'pending' | 'cancelled'
    date: string
    day: string
    time: string
    serviceType: string
    testCount: number
}