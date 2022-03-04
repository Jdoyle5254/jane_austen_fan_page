import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import {bookData} from './data/bookData'
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <h1>Jane Austen Collection</h1>
      <Welcome/>
      <BookList books={bookData} />
    </div>
  );
}

export default App;
