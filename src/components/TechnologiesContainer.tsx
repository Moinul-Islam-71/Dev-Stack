export default function TechnologiesContainer() {
  return (
    <div className="px-8">
      <h2 className="text-3xl font-bold">
        Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-transparent bg-clip-text">Technologies</span>
      </h2>

      <p className="text-slate-500 mt-3 mb-6">Pick one technology per category to build your ideal stack.</p>

      <Technologies />

      <CartSection />
    </div>
  )
}
