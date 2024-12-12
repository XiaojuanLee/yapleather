import EmptyList from '@/components/home/EmptyList';
import { fetchBookings } from '@/utils/actions';

import { formatDate } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


async function BookingsPage() {
  const bookings = await fetchBookings();

  if (bookings.length === 0) {
    return (
      <EmptyList
        heading='No bookings to display.'
        message=""
      />
    );
  }

  return (
    <div className='mt-16'>
      <div className='flex justify-between m-2 '>
        <h4 className='capitalize'> Bookings : {bookings.length}</h4>
      </div>

      <Table>
        <TableCaption>A list of all your bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Booking Id</TableHead>
            <TableHead>Workshop Name</TableHead>
            <TableHead>NOP</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Scheduled Date</TableHead>
            <TableHead>Created Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const { id: bookingId, numberOfPeople, fullName, email, phone, scheduledDate, createdAt } = booking;
            const { workshopName } = booking.Workshops;


            return (
              <TableRow key={bookingId}>
                <TableCell>{bookingId}</TableCell>
                <TableCell>{workshopName}</TableCell>
                <TableCell>{numberOfPeople}</TableCell>
                <TableCell>{fullName}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{formatDate(scheduledDate)}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default BookingsPage;
