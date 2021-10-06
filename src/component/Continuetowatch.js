import { ListItems } from "./ListItems";
import { useRef } from "react";
import { useState } from "react";

const Continuetowatch = () => {
  const [isMoved,setIsMoved]=useState(false);
  const [slideNumber, setslideNumber] = useState(0);
  const listRef=useRef()
  const handleClick=(direction)=>{
    setIsMoved(true);
    // let distance=listRef.current.getBoundingClientReact()
    let distance=listRef.current.getBoundingClientRect().x-50
   
    if(direction==="left" && slideNumber>0){
      setslideNumber(slideNumber-1);
listRef.current.style.transform=`translateX(${230+distance}px)`
    }
    if(direction==="right" && slideNumber<4)
    {
      setslideNumber(slideNumber+1);
      listRef.current.style.transform=`translateX(${-230+distance}px)`
    }
  }


  return (
    <div className="pt-4 pb-4" style={{position:"relative",backgroundColor:"black"}}>
    <div>
      <div style={{marginLeft:"50px"}}>
        <h3 style={{color:"white"}}>Continue to Watch</h3>
      </div>

      <div style={{ display: "flex", flexDirection: "row"}}>
        <div  style={{display:!isMoved?"none":"flex",width: "50px", border: "1px solid",position:"absolute" ,zIndex:999,height:"120px",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(22,22,22,0.5"}}>
          <i className="fas fa-chevron-left" onClick={()=>handleClick("left")} style={{fontSize:"40px",color:"white",fontWeight:"bold"}}></i>
        </div>
        <div style={{display:"flex",marginLeft:"50px",transform:"translateX(0)",transition:"all 0.5s ease"}} ref={listRef}>
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />

          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
       
          
        </div>

        <div  style={{width: "50px", border: "1px solid",position:"absolute" ,height:"120px",right:0,justifyContent:"center",alignItems:"center",display:"flex",backgroundColor:"rgb(22,22,22,0.5"}}>
          <i className="fas fa-chevron-right" onClick={()=>handleClick("right")} style={{fontSize:"40px",color:"white"}}></i>
        </div>
      </div>
    </div>





{/* 
    <div className="mt-5">
      <div className="container w-100">
        <h3 style={{color:"white"}}>Popular on Netflix</h3>
      </div>

      <div style={{ display: "flex", flexDirection: "row",height:"120px" }}>
        <div  style={{ display:!isMoved2?"none":"flex",width: "50px", border: "1px solid",position:"absolute" ,height:"120px",justifyContent:"center",alignItems:"center",zIndex:999,backgroundColor:"rgb(22,22,22,0.5"}}>
          <i className="fas fa-chevron-left" onClick={()=>handleClick2("left")} style={{fontSize:"40px",color:"white",fontWeight:"bold"}}></i>
        </div>
        <div style={{display:"flex",marginLeft:"50px",transition:"all 0.5s ease"}} ref={listRef2}>
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />

          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          
          
        </div>

        <div  style={{width: "50px", border: "1px solid",position:"absolute" ,height:"120px",right:0,justifyContent:"center",alignItems:"center",display:"flex",backgroundColor:"rgb(22,22,22,0.5"}}>
          <i className="fas fa-chevron-right"  onClick={()=>handleClick2("right")} style={{fontSize:"40px",color:"white"}}></i>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Continuetowatch;
