import '../App.css';
import { useEffect, useState, useRef} from  'react'
import Card from './card';
const getData=()=>{
  fetch('assets/json/employees.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  ).then(function(response){
      console.log(response)
      return response.json();
    }).catch((error) => {
      console.log(error)
    });
     
}

function InfiniteScroll() {
   
  const pagelength=5;
  
  let datacache;
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  let index = 4;
    
  const listenScrollEvent = ()=> {
     if (window.innerHeight +Math.round(window.scrollY+20)  >= document.body.offsetHeight){
      index=index+pagelength-1;
      setLoading(true);
      if(datacache){
        setLoading(true);
        setTimeout(()=>{
          
         setPageData(datacache.slice(0, index))
         setLoading(false);
         document.scrollTop = window.scrollY+20;
        },2000);
       
      }
        }
   
    
  };
  
   
  useEffect(() => {
    fetch('assets/json/employees.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => res.json())
      .then((data) => {
        
        datacache=[...data];
        setPageData(datacache.slice(0, index));
        setLoading(false);
        document.addEventListener('scroll', listenScrollEvent);
  
        
  }).catch((error) => {
     
    setLoading(false);
  });
   }, []);
    
  return (
    <div className='App' >
      <h1>Infinte Scrolling</h1>
      <div class="main">
  
   
         {pageData?.map((emp)=><Card title={emp.name} content={emp.bio}></Card>)}
        
    </div>
    {loading && 

<span class="loader"></span>

}
    </div>
  );
}

export default InfiniteScroll;
