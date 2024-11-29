import { Session } from "inspector/promises";

export default function Banner() {
    return(
        <section className="relative">
          <img src="/images/homepage.jpg" alt="Banner" className="mx-auto w-full h-96 object-cover"/>
          <p className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black bg-opacity-50">
          {/* Learn, Craft, and Master Leatherwork */}
          Crafted Elegance in Every Stitch
          </p>
        </section>
    )
}