import heroBackground from "@/assets/kitchebn.jpg"


export default function HeroSection() {
  

  return (
    <div id="hero" className="h-screen flex items-center justify-center sm:justify-start" style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), transparent), url(${heroBackground.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
      <div className="bg-black text-white opacity-85 sm:ml-[10rem] p-[2rem] sm:pr-[5rem]">
        <h1 className="hidden">A1 Installations</h1>
        <h2 className="text-[32px] sm:text-[42px] font-bold">"Your Home,<br />Our Expertise<br/>Perfect Every<br />Time."</h2>
        <h3 className="mt-4">"Expert appliance repairs and<br />installations, ensuring your home<br />runs Seamlessly. Trust us for Swift,<br />reliable & Cost effective services<br />every time.”</h3>
        <p className="mt-8">- Team A1</p>
      </div>
    </div>
  )
}