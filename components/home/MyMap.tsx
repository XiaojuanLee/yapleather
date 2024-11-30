export default function MyMap() {
    return(
        <section className="py-10 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl mb-4">Our Location</h2>
            <p >In-Person Class</p>
            <p >Please book appointment if visiting studio</p>
            <p className='mb-4'>4 Deerfield Dr, Nepean, ON K2G 3R6</p>
            {/* Embed Google Map */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5607.416881236844!2d-75.75563632392038!3d45.354697471072356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06e0520aa9ab%3A0x7dd630fc03ab4e5e!2s4%20Deerfield%20Dr%2C%20Nepean%2C%20ON%20K2G%203R6!5e0!3m2!1sen!2sca!4v1730420355432!5m2!1sen!2sca"
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy">
              </iframe>

            </div>
            
          </div>
        </section>
    )
}