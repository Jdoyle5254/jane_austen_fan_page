//this component will show how the books are
//displayed on the page
//map over the book list fro book data for them to display
import Book from "./Book";

export default function BookList({books}) {
  

  return (
    <div>
      {books.map((book)=> {
        return <Book book = {book} />
      })}
    </div>
    
  )
}