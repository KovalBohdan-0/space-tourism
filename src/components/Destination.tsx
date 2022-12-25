import "../styles/Destination.scss";
import PlanetsNavbar from "./PlanetsNavbar";
import data from "../assets/data.json";
import { useEffect, useState } from "react";
import img from "../assets/destination/image-europa.webp";

export interface Planet {
    name: string;
    description: string;
    distance: string;
    travel: string;
    images: {
        png: string;
        webp: string;
    }
}

const Destination = () => {

    const planets: Planet[] = data.destinations;
    const [currentPlanet, setCurrentPlanet] = useState<Planet>(planets[0]);
    const [image, setImage] = useState(img);

    useEffect(() => {
        import(`.${currentPlanet.images.webp}`).then(value => setImage(value.default)/* @vite-ignore */);
    }, [currentPlanet]);

    return (
        <div className="destination">
            <div className="destination__info">
                <div className="destination__img">
                    <h2 className="destination__header title"><span>01</span> Pick your destination</h2>
                    <img src={image} alt="Destination planet" />
                </div>
                <div className="destination__description">
                    <PlanetsNavbar planets={planets} setCurrentPlanet={setCurrentPlanet} />
                    <h1>{currentPlanet.name}</h1>
                    <p className="details">{currentPlanet.description}</p>
                    <div className="distance-travel">
                        <div>
                            <span>AVG. DISTANCE</span>
                            <span className="data">{currentPlanet.distance}</span>
                        </div>
                        <div>
                            <span>Est. travel time</span>
                            <span className="data">{currentPlanet.travel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;