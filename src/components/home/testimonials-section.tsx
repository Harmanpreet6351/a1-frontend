import Image from "next/image";
import craftCollage from "@/assets/crat-collage.png"



export default function TestimonialsSection() {
  return (
    <div id="testimonials" className="bg-black pt-28 text-white">
      <h1 className="text-center text-[42px] font-bold">Testimonials</h1>
      <div className="flex flex-col px-8 xl:px-52 py-28 gap-24 items-center">
        <Image src={craftCollage} alt="collage" />
        <div>
          <h2 className="text-[24px] font-bold mb-8">Know about us more...</h2>
          <ol>
            <li><strong>Comprehensive Service Range:</strong> We offer a one-stop solution for all your home improvement needs, covering plumbing, electrical work, appliance installation, custom kitchen cabinets, painting, and furniture installation.</li>
            <li><strong>Experienced and Certified Professionals:</strong> Our team consists of highly trained and certified professionals with years of experience in their respective fields, ensuring top-notch service quality.</li>
            <li><strong>Tailored Solutions:</strong> We provide customized solutions that meet your specific requirements, whether it's designing a unique kitchen or selecting the perfect paint colors for your home.</li>
            <li><strong>Quality Craftsmanship:</strong> Our commitment to excellence is reflected in our attention to detail and use of high-quality materials, ensuring durable and aesthetically pleasing results.</li>
            <li><strong>Timely and Reliable Service:</strong> We understand the importance of deadlines and ensure that all projects are completed on time and within budget, without compromising on quality.</li>
            <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We work closely with you throughout the process, providing clear communication and updates at every stage.</li>
            <li><strong>Transparent Pricing:</strong> We offer competitive and transparent pricing with no hidden costs, providing detailed estimates upfront so you know exactly what to expect.</li>
            <li><strong>Innovative Design Solutions:</strong> Our design team stays updated with the latest trends and techniques, offering innovative solutions that enhance the functionality and aesthetic appeal of your space.</li>
            <li><strong>Sustainable Practices:</strong> We are committed to environmentally friendly practices, using sustainable materials and energy-efficient solutions whenever possible.</li>
            <li><strong>Comprehensive Warranty:</strong> We stand by our work with comprehensive warranties, giving you peace of mind that your investment is protected.</li>
            {/* <li><strong>Seamless Project Management:</strong> From the initial consultation to the final walkthrough, we manage every aspect of the project, ensuring a hassle-free experience for our clients.</li>
            <li><strong>Advanced Technology and Tools:</strong> We utilize the latest tools and technology to enhance precision, efficiency, and safety in all our services, delivering superior results with modern solutions.</li>
            <li><strong>Emergency and After-Hours Service:</strong> We understand that some issues can’t wait. That’s why we offer emergency and after-hours services for urgent plumbing and electrical needs, ensuring your home is always safe and functional.</li>
            <li><strong>Safety First Approach:</strong> Safety is paramount in everything we do. Our team follows strict safety protocols to protect your property and our workers, ensuring a safe working environment.</li>
            <li><strong>Strong Industry Reputation:</strong> With a proven track record and numerous satisfied clients, our company has built a strong reputation in the industry for reliability and quality.</li>
            <li><strong>Flexible Scheduling:</strong> We work around your schedule, offering flexible appointment times to minimize disruption to your daily routine.</li>
            <li><strong>End-to-End Service:</strong> We don’t just complete the job and leave; we ensure everything is clean, functional, and meets your expectations before considering the job done.</li>
            <li><strong>Local Expertise:</strong> As a locally operated company, we have a deep understanding of the community’s needs and building codes, allowing us to provide solutions that are both compliant and relevant.</li>
            <li><strong>Long-Term Partnerships:</strong> We aim to build long-term relationships with our clients, offering ongoing maintenance services and support long after the project is completed.</li>
            <li><strong>Client Testimonials and Referrals:</strong> Don’t just take our word for it—our satisfied clients are our best advocates. We proudly share testimonials and have a high rate of repeat customers and referrals.</li> */}
          </ol>
        </div>
      </div>
    </div>
  )
}