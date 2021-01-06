
function App() {
  return (
    <div className="flex flex-col">
      <nav className="">
        top nav
      </nav>
      <div className="flex h-screen">
        <nav className="py-8 px-4 bg-blue-50">
          left nav
        </nav>
        <div className="bg-red-100 flex-grow">
          main content
        </div>
      </div>
    </div>
  );
}

export default App;
