export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#3b82f6] flex items-center justify-center">
      <div className="text-center text-white px-6">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">Simple Tech Skills</h1>
        <p className="text-xl text-blue-200 mb-8">Agency Website</p>
        <button className="bg-white text-[#0f172a] font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition-colors duration-300 cursor-pointer shadow-lg">
          Get Started
        </button>
      </div>
    </main>
  );
}