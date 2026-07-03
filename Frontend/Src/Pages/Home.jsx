import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">FindMate</h1>
      <p className="mt-4">AI Powered Lost & Found System</p>
      <Link to="/report">
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
          Report Item
        </button>
      </Link>
    </div>
  );
}
