import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <span className="font-semibold uppercase tracking-widest text-blue-700">
              About Us
            </span>

            <h1 className="mt-5 text-5xl font-black text-slate-900">
              Building Digitally Connected Communities
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Rap-Tech Communications is committed to using technology,
              innovation, and sustainable solutions to empower communities,
              improve digital access, and create opportunities.
            </p>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}