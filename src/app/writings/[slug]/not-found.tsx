import Link
 from "next/link";
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <Link href="/writings" className="text-blue-500 hover:underline">
          Back to All Writings
        </Link>
      </div>
    );
  }