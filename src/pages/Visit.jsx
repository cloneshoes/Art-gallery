import PageTransition from "../components/PageTransition";

export default function Visit() {
  return (
    <PageTransition>
      <section className="min-h-screen bg-black text-white pt-32 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl tracking-[0.3em] mb-10">
              VISIT
            </h1>

            <div className="space-y-8 text-sm text-gray-400 leading-relaxed">
              <div>
                <h2 className="text-white tracking-widest mb-2">
                  LOCATION
                </h2>
                <p>
                  12 Digital Avenue<br />
                  Lagos, Nigeria
                </p>
              </div>

              <div>
                <h2 className="text-white tracking-widest mb-2">
                  OPENING HOURS
                </h2>
                <p>
                  Tuesday – Sunday<br />
                  10:00 AM – 6:00 PM
                </p>
              </div>

              <div>
                <h2 className="text-white tracking-widest mb-2">
                  ADMISSION
                </h2>
                <p>
                  Free entry<br />
                  Private tours available on request
                </p>
              </div>

              <button className="mt-8 border border-white px-8 py-4 text-xs tracking-[0.3em] hover:bg-white hover:text-black transition">
                SCHEDULE A VISIT
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1200&q=80"
              alt="Gallery space"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
