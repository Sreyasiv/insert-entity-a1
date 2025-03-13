import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookCard from "./components/BookCard";
import Home from "./components/Home";
import AddBook from "./components/AddBook/AddBook";
import books from "./booksData";
import "./Home.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
