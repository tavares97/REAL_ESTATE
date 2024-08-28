import HomePage from "./routes/homepage/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen max-w-[1366px] mx-auto px-9">
      <div>
        <Navbar />
      </div>

      <div className="h-[calc(100vh-100px)] ">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
