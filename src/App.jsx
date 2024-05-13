import { useState } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
   const [openFilters, setOpenFilters] = useState(false);
   const handleOpenFilters = (value) => {
      setOpenFilters(value);
   };
   return (
      <main>
         <Header handleOpenFilters={handleOpenFilters} />
         <Movies openFilters={openFilters} handleOpenFilters={handleOpenFilters} />
      </main>
   );
}

export default App;
