import Image from "next/image";
import craftCollage from "@/assets/crat-collage.png"



export default function TestimonialsSection() {
  return (
    <div className="bg-black pt-28 text-white">
      <h1 className="text-center text-[42px] font-bold">Testimonials</h1>
      <div className="flex flex-col-reverse md:flex-row px-8 sm:px-52 py-28 gap-24 items-center">
        <div>
          <h2 className="text-[24px] font-bold mb-8">Know about us more...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo nisl a quam fermentum tempor. Nullam faucibus condimentum eleifend. Vestibulum pulvinar malesuada tellus sed pharetra. Donec commodo urna ante, interdum pellentesque risus facilisis eu. Donec sit amet arcu et arcu dapibus bibendum feugiat id mauris. Sed id venenatis metus, vitae laoreet augue. Praesent arcu lacus, pellentesque vitae sapien nec, facilisis gravida sapien. Morbi varius euismod turpis, et sollicitudin tellus consectetur et.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
        <Image src={craftCollage} alt="collage" />
      </div>
    </div>
  )
}