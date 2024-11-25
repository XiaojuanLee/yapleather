
interface WorkshopCardProps {
    image: string;
    title: string;
    difficulty: string; //Difficulty level (e.g., Beginner, Intermediate, Advanced)
    price: string;
  
  }
  
  export default function WorkshopCard({ title, image, difficulty, price }: WorkshopCardProps) {
    return (
      <div className="bg-white shadow-md flex flex-col h-full">
        <img src={image} alt={title} className="mt-4 w-full h-64 object-cover" />
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-600">{difficulty}</p>
            <p className="mt-2 text-gray-600"><span className="font-bold">Price:</span> {price}</p>
          </div>
          {/* <button className="mt-4 px-6 py-2 bg-[#006340] text-white rounded hover:bg-[#5a7853] transition">
            <Link href={url}>Learn More</Link>
          </button>  */}
          </div>
      </div>
    );
  }