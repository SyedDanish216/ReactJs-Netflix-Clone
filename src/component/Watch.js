import "./Watch.css";

export default function Watch()
{
    return(
        <div className="watch">
            <div className="back">
            <i className="fas fa-long-arrow-alt-left mx-2" />
            Home
            </div>
            <video className="video" autoPlay onProgress controls src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" />
            
        </div>
    )
}