import { Link } from "react-router-dom";
import "../styles/Home.scss";

const Home = (props: {setCurrentRoute: (prevCurrentRoute: any) => void}) => {
    return (
        <div className="home">
            <div className="home__info">
                <div className="home__description">
                    <h3 className="title">SO, YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>
                    <p className="details">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <Link className="home__explore" onClick={() => props.setCurrentRoute("destination")} to="/destination">
                    Explore
                </Link>
            </div>
        </div>
    );
}

export default Home;