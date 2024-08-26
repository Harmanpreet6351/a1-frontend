


export default function AchievementSection() {
  return (
    <div className="flex flex-col gap-8 sm:flex-row justify-evenly p-12 bg-gradient-to-b from-[#10204B] to-[#103088] text-white items-center shadow-2xl">
      <div className="text-center font-bold">
        <h3 className="text-[28px] lg:text-[42px] text-yellow-400">15000+</h3>
        <h4 className="text-[18px] lg:text-[24px]">Families Delighted</h4>
      </div>
      <hr className="bg-white h-[1px] w-full sm:h-[110px] sm:w-[1px]" />
      <div className="font-bold text-[18px] lg:text-[24px] text-center">
        Budget friendly Services at your doorstep
      </div>
      <hr className="bg-white h-[1px] w-full sm:h-[110px] sm:w-[1px]" />
      <div className="text-center font-bold">
        <h3 className="text-[28px] lg:text-[42px] text-yellow-400">25+</h3>
        <h4 className="text-[18px] lg:text-[24px]">Service Locations</h4>
      </div>
    </div>
  )
}