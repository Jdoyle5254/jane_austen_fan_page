//file shows how to display each book
export default function Book({book}) {
  const { id, title, publishDate, chapters, characters } = book
 
  const charList = characters.map((character, index)=> {
    return (<li key={index}>{character}</li>)
  } )
  
    return (
    <div>
      <h2>Title: {title}</h2>
    <p>Publish Date: {publishDate} \ Chapters: {chapters}</p>
    <p>Charaters: </p>
    {charList}

    </div>
    
  )
}