import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MembershipPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">

            <h1 className="text-5xl font-black text-slate-900">
              Become a Member
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Join Rap-Tech Communications and be part of a community
              advancing technology and digital inclusion.
            </p>

            <button className="mt-10 rounded-full bg-blue-700 px-8 py-4 font-semibold text-white">
              Register Your Interest
            </button>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}