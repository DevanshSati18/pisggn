import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-2">Your Organization</h3>
          <p className="text-sm">
            Building knowledge, values, and excellence for the future.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/AboutUs" className="hover:text-white">About Us</Link></li>
            <li><Link href="/Admission" className="hover:text-white">Admission</Link></li>
            <li><Link href="/Academic" className="hover:text-white">Academic</Link></li>
            <li><Link href="/ContactUs" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +91 XXXXX XXXXX</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Your Organization. All rights reserved.
      </div>
    </footer>
  );
}
