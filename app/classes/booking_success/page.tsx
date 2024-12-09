import { Button } from '@/components/ui/button';
import Link from 'next/link';

function BookingSuccessPage() {
  return (
    <section className="container py-10 text-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold text-green-600">Booking Successful!</h1>
        <p >
          Thank you for booking with us! A confirmation email will be sent to you shortly.
        </p>
        <p >
            If you have any questions about your booking, please feel free to <Link href={'/contact'} className='text-blue-500'>contact us</Link>.
        </p>
        
        <Button>
            <Link href="/">
              Back to Home
            </Link>
        </Button>


        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          
        </div>
      </div>
    </section>
  );
}

export default BookingSuccessPage;
