import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
