import './Home.css';
import VideoCard from './VideoCard';
import { videoData } from './videoData';


function Home() {
    return (
        <section>
            <div className="home" >
            {
              videoData.map( (item,index)=> <VideoCard data={item} /> )
            }
            </div>
        </section>
    );
}

export default Home;