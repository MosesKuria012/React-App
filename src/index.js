import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const firstBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
}
const secondBook = {
  author: 'Laura Dave',
  title: 'The Last Thing He Told Me',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71LyuJP7yUL._AC_UL600_SR600,400_.jpg',
}
const thirdBook = {
  author: 'Bonnie Garmus',
  title: 'Lessons in Chemistry',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg',
}

const Onclick = () => {
  alert('Click to Confirm')
}

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  )
}
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
      <button id="btn" type="button" onClick={Onclick}>
        Next Book
      </button>
    </article>
  )
}

/*
 
inline heading styles 

const Author = () => {
    const inlineHeadingSyles = {
        color = 'black',
        fontSize: '0.76rem';
        marginTop:'0.5rem';
        lineSpacing: 1rem; 
    }
     return <h4 style = {inlineHeadingSyles}> James Clear</h4>
}

 */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
