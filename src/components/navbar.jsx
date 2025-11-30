export default function Navbar() {
  return (
    // <nav className="bg-blue-600 text-white px-6 py-4 text-xl font-semibold">
    //   wardrobe
    // </nav>
     <nav className="bg-blue-300 shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">My Wardrobe</h1>
      <ul className="flex gap-6 text-lg">
        <li className="cursor-pointer hover:text-blue-600">Profile</li>
        <li className="cursor-pointer hover:text-blue-600">About Us</li>
        <li className="cursor-pointer hover:text-blue-600">Cart</li>
      </ul>

    </nav>
  );
}
