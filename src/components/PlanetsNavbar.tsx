import { useState } from "react";
import { Planet } from "./Destination";

const PlanetsNavbar = (props: { planets: Planet[], setCurrentPlanet: (prevPlanet: any) => void }) => {
    const [selectedPlanet, setSelectedPlanet] = useState<string>("moon");

    const setPlanet = (name: string) => {
        props.setCurrentPlanet(props.planets.find(planet => planet.name == name));
        setSelectedPlanet(props.planets.find(planet => planet.name == name)!.name.toLowerCase());
    }


    return (
        <div className="pl-navbar">
            <ul className="pl-navbar__list">
                <li><button className={selectedPlanet == "moon" ? "active" : ""} onClick={() => setPlanet("Moon")}>MOON</button></li>
                <li><button className={selectedPlanet == "mars" ? "active" : ""} onClick={() => setPlanet("Mars")}>MARS</button></li>
                <li><button className={selectedPlanet == "europa" ? "active" : ""} onClick={() => setPlanet("Europa")}>Europa</button></li>
                <li><button className={selectedPlanet == "titan" ? "active" : ""} onClick={() => setPlanet("Titan")}>TITAN</button></li>
            </ul>
        </div>
    )
}

export default PlanetsNavbar;