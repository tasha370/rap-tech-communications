import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Programs from "@/components/home/Programs";

export default function InitiativesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-slate-50 py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <h1 className="text-5xl font-black text-slate-900">
              Our Initiatives
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Explore our technology, digital empowerment and sustainability
              initiatives.
            </p>

          </div>
        </section>

        <Programs />
      </main>

      <Footer />
    </>
  );
}