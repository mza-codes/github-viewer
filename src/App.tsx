import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  return (
    <main
      className="bg-gradient-to-tr from-green-300 via-red-300 to-fuchsia-300 flex-col gap-3 
      min-h-screen w-full flex items-center justify-center text-center"
    >
      <Home />
    </main>
  );
}

export default App;
