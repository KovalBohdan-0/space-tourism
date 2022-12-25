import { useState } from "react";
import { TechnologyType } from "./Technology";

const TechnologyNavbar = (props: { technologies: TechnologyType[], setCurrentTechnology: (prevPlanet: any) => void }) => {
    const [selectedTechnology, setSelectedTechnology] = useState<string>("Launch vehicle");

    const setMember = (name: string) => {
        props.setCurrentTechnology(props.technologies.find(technology => technology.name == name));
        setSelectedTechnology(props.technologies.find(technology => technology.name == name)!.name);
    }

    return (
        <div className="tech-navbar">
            <ul className="tech-navbar__list">
                <li className={`tech-navbar__item ${selectedTechnology == "Launch vehicle" ? "active-cretech": ""}`} onClick={() => setMember("Launch vehicle")}></li>
                <li className={`tech-navbar__item ${selectedTechnology == "Spaceport" ? "active-tech": ""}`} onClick={() => setMember("Spaceport")}></li>
                <li className={`tech-navbar__item ${selectedTechnology == "Space capsule" ? "active-tech": ""}`} onClick={() => setMember("Space capsule")}></li>
            </ul>
        </div>
    );
}

export default TechnologyNavbar;