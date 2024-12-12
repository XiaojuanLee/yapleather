import EmptyList from '@/components/home/EmptyList';
import { fetchContact } from '@/utils/actions';

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

async function ContactPage() {
  const contactUs = await fetchContact();

  if (contactUs.length === 0) {
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
        <h4 className='capitalize'> Contact : {contactUs.length}</h4>
      </div>

      <Table>
        <TableCaption>A list of all your contact.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Contact Id</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>message</TableHead>
            <TableHead>Created Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contactUs.map((contact) => {
            const { id: contactId, email, message, fullName, createdAt } = contact;

            return (
              <TableRow key={contactId}>
                <TableCell>{contactId}</TableCell>
                <TableCell>{fullName}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell className="break-words whitespace-normal max-w-xs">{message}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default ContactPage;
