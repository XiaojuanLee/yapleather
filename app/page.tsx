import WorkshopCard from "@/components/card/WorkshopCard";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative">
          <img src="/images/homepage.jpg" alt="Banner" className="mx-auto w-full h-96 object-cover"/>
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
          Learn, Craft, and Master Leatherwork
          </p>
        </div>

        <section className="py-10 mx-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl mb-4">Leathercraft Workshops</h2>
            <p className="mb-4">Join our workshops and craft your own unique leather items with expert guidance.</p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <WorkshopCard 
            title="Wristband" 
            image="/images/wristband1.jpeg" 
            difficulty="Beginner"
            price='$20 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="Key Chain" 
            image="/images/keychain_a1.jpeg" 
            difficulty='Intermediate'
            price='$20 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="Key Chain with Photo" 
            image="/images/keychain_d1.jpeg" 
            difficulty='Intermediate'
            price='$40 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="Key Holder" 
            image="/images/keyholder.jpeg" 
            difficulty='Advanced'
            price='$20 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="AirPods" 
            image="/images/airpods_a1.jpeg" 
            difficulty='Advanced'
            price='$28 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="AirTag" 
            image="/images/airtag_a1.jpeg" 
            difficulty='Advanced'
            price='$38 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="Glass Case" 
            image="/images/glasscase1.jpeg" 
            difficulty='Advanced'
            price='$96 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="Ipad Case" 
            image="/images/ipadcase1.jpeg" 
            difficulty='Advanced'
            price='$149 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="Card Holder A" 
            image="/images/cardholder_a1.jpeg" 
            difficulty='Advanced'
            price='$48 CAD'
            // url='cardholderworkshop'
            />
            <WorkshopCard 
            title="Card Holder B" 
            image="/images/cardholder_b1.jpg" 
            difficulty='Advanced'
            price='$53 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="Card Holder C" 
            image="/images/cardholder_c1.jpeg" 
            difficulty='Advanced'
            price='$99 CAD'
            // url='/'
            />
            <WorkshopCard 
            title="Bell" 
            image="/images/bell1.jpeg" 
            difficulty='Advanced'
            price='$33 CAD'
            // url='/'
            />
          </div>
        </section>

      </main>
    </div>
  );
}
