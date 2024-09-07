const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        THE <span className="border px-1">PRODUCT</span> PLATFORM
      </div>
      <div className="space-x-6">
        <button className="hover:text-gray-400">Learn</button>
        <button className="hover:text-gray-400">Practice</button>
        <button className="hover:text-gray-400">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
