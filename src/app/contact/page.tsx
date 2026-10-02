import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="py-32 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 text-center">

            <h1 className="text-5xl font-black text-slate-900">
              Contact Us
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Have questions or want to partner with us? Get in touch.
            </p>

            <div className="mt-10 space-y-4 text-slate-700">
              <p>📍 Arua, Uganda</p>
              <p>📞 +256 791906404</p>
              <p>✉ info@raptech.org</p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}