import "../styles/Crew.scss";
import data from "../assets/data.json";
import { useEffect, useState } from "react";
import img from "../assets/crew/image-douglas-hurley.webp";
import CrewNavbar from "./CrewNavbar";

export interface CrewMember {
    name: string;
    role: string;
    bio: string;
    images: {
        png: string;
        webp: string;
    };
}

const Crew = () => {
    const crew: CrewMember[] = data.crew;
    const [currentMember, setCurrentMember] = useState<CrewMember>(crew[0]);
    const [image, setImage] = useState(img);

    useEffect(() => {
        import(`.${currentMember.images.webp}`).then(value => setImage(value.default)/* @vite-ignore */);
    }, [currentMember]);

    return (
        <div className="crew">
            <div className="crew__info">
                <div className="crew__description">
                    <h2 className="crew__header title"><span>02</span> Meet your crew</h2>
                    <h2 className="crew__role">{currentMember.role}</h2>
                    <h1 className="crew__name">{currentMember.name}</h1>
                    <p className="crew__details details">{currentMember.bio}</p>
                    <CrewNavbar crew={crew} setCrewMember={setCurrentMember}/>
                </div>
                <div className="crew__image">
                    <img src={image} alt="Photo of crew member" />
                </div>

            </div>
        </div>
    );
}

export default Crew;