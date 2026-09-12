import banner from "../assets/banner.png"

export default function Banner() {
    return (
        <div className=" flex flex-col gap-10 md:flex-row md:gap-0 items-center justify-between px-2 py-15 max-w-full mb-20">

            <div className="grid grid-cols-1 justify-items-center md:justify-items-start gap-11 md:w-[55%] md:pl-8">
                <h1 className="flex flex-col text-center md:text-start">
                    <span className="font-bold text-slate-950 text-5xl">Build Your Ideal</span>
                    
                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-bold text-5xl">Development Stack</span>
                </h1>

                <p className="font-normal text-slate-700 max-w-sm md:max-w-md text-base leading-relaxed">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>

                <div className="flex gap-8">
                    <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-slate-100 px-4  py-2 rounded-xl">Explore Technologies</button>
                    <button className="border-2 border-slate-100 px-10 py-2  rounded-xl text-slate-950">Learn More</button>
                </div>
            </div>

            <div className="md:w-[40%] flex justify-end">
                <img src={banner} alt="" />
            </div>

        </div>
    )
}
