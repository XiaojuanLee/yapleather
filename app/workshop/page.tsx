import EmptyList from '@/components/home/EmptyList';
import { fetchWorkshops, deleteWorkshopAction } from '@/utils/actions';
import Link from 'next/link';

import { formatCurrency } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';
import { Button } from '@/components/ui/button';

async function WorkshopsPage() {
  const workshops = await fetchWorkshops();

  if (workshops.length === 0) {
    return (
      <EmptyList
        heading='No workshops to display.'
        message="Don't hesitate to create a workshop."
      />
    );
  }

  return (
    <div className='mt-16'>
      <div className='flex justify-between m-2 '>
        <h4 className='capitalize'>Active Workshops : {workshops.length}</h4>
        <Button>
          <Link href='/workshop/create'>Create Workshop</Link>
        </Button>
      </div>

      <Table>
        <TableCaption>A list of all your workshops.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Workshop Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead>Number of Ticket</TableHead>
            <TableHead>Sort</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workshops.map((workshop) => {
            const { id: workshopId, workshopName, price, difficulty, ticket, sort, category } = workshop;
            return (
              <TableRow key={workshopId}>
                <TableCell>
                  <Link
                    href={`/class/${workshopId}`}
                    className='underline text-muted-foreground tracking-wide'
                  >
                    {workshopName}
                  </Link>
                </TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell>{difficulty}</TableCell>
                <TableCell>{ticket}</TableCell>
                <TableCell>{sort}</TableCell>
                <TableCell>{category}</TableCell>
                
                

                <TableCell className='flex items-center gap-x-2'>
                  <Link href={`/workshop/${workshopId}/edit`}>
                    <IconButton actionType='edit'></IconButton>
                  </Link>
                  <DeleteWorkshop workshopId={workshopId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

function DeleteWorkshop({ workshopId }: { workshopId: string }) {
  const deleteWorkshop = deleteWorkshopAction.bind(null, { workshopId } );

  return (
    <FormContainer action={deleteWorkshop}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
}

export default WorkshopsPage;
