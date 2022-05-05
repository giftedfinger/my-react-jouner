const author ='Stephanie Plum'
import React from 'react';
import ReactDom from 'react-dom';

// css

import './App.css'

const firstBook={
  title: 'Fortune and Glory: Tantalizing Twenty- Seven(Stephanie Plum Book 27) ',
  author:'Stephanie Plum',
  img:"https://m.media-amazon.com/images/I/41RMIavY2cL.jpg"
}


const secondBook={
  img:'https://images-na.ssl-images-amazon.com/images/I/41Q3VqCFCkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',

}



function Booklist(){
  return(
 <section className='booklis'>

      <Book 
            img={firstBook.img}
            title={firstBook.title} 
            author={firstBook.author} 
            />
      <Book  name='olakunle' age={40}/>
     
 </section>

  )
} 




const Book =(props)=>{

  
  return (
    <article className='book'>
      <img src={props.img} alt=''/> 
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
  
    </article>
  )
};



ReactDom.render(
  <Booklist/>,document.getElementById('root')
);