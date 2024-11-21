import './card.css';
import { useEffect, useState} from  'react'

 

function Card(props) {
   
   
  return (
  
     <div class="card">
      <span class="title">{props?.title}</span>
      <p class="content">{props?.content}</p>
     </div>
     
    
  );
}

export default Card;
