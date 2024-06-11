import { useState } from "react";
import './App.css'

import { useEffect } from "react";

import WizardHouse from "./components/wizardHouse";

function App() {
  const [wiz, setWiz] = useState([]);

  console.log(wiz);

  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch("https://api.potterdb.com/v1/books");
      if (res.ok) {
        const data = await res.json();
        console.log(data.data);
        setWiz(data.data)
      } else {
        throw new Error("Failed to fetch book");
      }
    };

    getBooks();

  }, []);

  return (
    <div>
      
      <div>
        <div className="book-container">
          {wiz.map((book) => (
            <WizardHouse key={book.title} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
