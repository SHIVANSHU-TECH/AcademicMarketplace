export default function HeroSection() {
  return (
    <section className="bg-[var(--brand-dark)] text-[var(--brand-light)] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">One-Stop Academic Marketplace</h1>
        <p className="mt-4 text-xl sm:text-2xl text-indigo-200">Projects &amp; Notes under ₹500</p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          Find the perfect project or notes to boost your academic performance. Browse our extensive collection of student-created resources.
        </p>
        <div className="mt-10 flex-wrap gap-4 flex justify-center">
          <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[var(--brand-primary)] text-[var(--brand-light)] text-base font-bold shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
            <span className="truncate">Explore Projects</span>
          </button>
          <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[var(--brand-secondary)] text-[var(--brand-light)] text-base font-bold shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105">
            <span className="truncate">Upload Your Project</span>
          </button>
        </div>
      </div>
    </section>
  );
}