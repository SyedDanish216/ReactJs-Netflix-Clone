import { useState } from "react/cjs/react.development"
import "./ListItems.css"
export const ListItems = () => {
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    const [isHovered,setHovered]=useState(false);
    return (
        <div className="listitem" onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
            <img src="https://th.bing.com/th?q=Good+Shows+On+Netflix&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247"
           alt=""

            />
            {isHovered &&(
                <>
                
                <video src={trailer} autoPlay={true} loop />
               
                
            <div className="iteminfo mt-2">
                <div className="icons">
                <i className="fas fa-play mx-2"></i>
                <i className="fas fa-plus mx-2"></i>
                <i className="far fa-thumbs-up mx-2"></i>
                <i className="far fa-thumbs-down mx-2"></i>
               
                </div>
                <div className="itemInfoTop mt-2">
                    <span>1 hour 14 min</span>
                    <span className="limit mx-2">+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    bcudvb cebduc cdbucidhbc ebcuec cbdc egcuegcebc cebcugebucgr crbcuregbcurgb
                </div>
                <div className="genre">
                    <span>Action</span>
                </div>
            </div>
            </>
            )}
        </div>
    )
}
