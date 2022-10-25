const Header = () => {
  return (
    <>
      <header className="w-full fixed top-0 left-0">
        <nav className="mx-auto max-w-6xl flex flex-row justify-between py-6 items-center">
          <a href="/" className="text-2xl text-blue-800 font-bold">
            Heavensent
          </a>
          <div className="flex gap-10 text-slate-900">
            <a href="/">About</a>
            <a href="/">Pricing</a>
            <a href="/">Examples</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
