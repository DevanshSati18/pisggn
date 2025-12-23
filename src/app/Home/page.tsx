export default function HomePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Our Website
      </h1>

      <p className="text-gray-700 max-w-2xl">
        This is the homepage built using Next.js, TypeScript, and Tailwind CSS.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/Admission"
          className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
        >
          Admission
        </a>

        <a
          href="/AboutUs"
          className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          About Us
        </a>
      </div>
    </section>
  );
}
