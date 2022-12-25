import { useState } from "react";
import { CrewMember } from "./Crew";

const CrewNavbar = (props: { crew: CrewMember[], setCrewMember: (prevPlanet: any) => void }) => {
    const [selectedMember, setSelectedMember] = useState<string>("Douglas Hurley");

    const setMember = (name: string) => {
        props.setCrewMember(props.crew.find(member => member.name == name));
        setSelectedMember(props.crew.find(member => member.name == name)!.name);
    }

    return (
        <div className="crew-navbar">
            <ul className="crew-navbar__list">
                <li className={`crew-navbar__item ${selectedMember == "Douglas Hurley" ? "active-crew": ""}`} onClick={() => setMember("Douglas Hurley")}></li>
                <li className={`crew-navbar__item ${selectedMember == "Mark Shuttleworth" ? "active-crew": ""}`} onClick={() => setMember("Mark Shuttleworth")}></li>
                <li className={`crew-navbar__item ${selectedMember == "Victor Glover" ? "active-crew": ""}`} onClick={() => setMember("Victor Glover")}></li>
                <li className={`crew-navbar__item ${selectedMember == "Anousheh Ansari" ? "active-crew": ""}`} onClick={() => setMember("Anousheh Ansari")}></li>
            </ul>
        </div>
    );
}

export default CrewNavbar;