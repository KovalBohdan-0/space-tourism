import "../styles/Technology.scss";
import data from "../assets/data.json";
import img from "../assets/technology/image-launch-vehicle-portrait.jpg";
import { useEffect, useState } from "react";
import TechnologyNavbar from "./TechnologyNavbar";

export interface TechnologyType {
    name: string;
    description: string;
    images: {
        portrait: string;
        landscape: string;
    }
}

const Technology = () => {
    const technologies: TechnologyType[] = data.technology;
    const [currentTechnology, setCurrentTechnology] = useState<TechnologyType>(technologies[0]);
    const [image, setImage] = useState(img);

    useEffect(() => {
        import(`.${currentTechnology.images.portrait}`).then(value => setImage(value.default)/* @vite-ignore */);
    }, [currentTechnology]);

    return (
        <div className="technology">
            <div className="technology__info">
                <TechnologyNavbar technologies={technologies} setCurrentTechnology={setCurrentTechnology}/>
                <div className="technology__description"> 
                    <h2 className="technology__header title"><span>03</span> Space launch 101</h2>
                    <h4 className="technology__term">The terminology...</h4>
                    <h1 className="technology__name">{currentTechnology.name}</h1>
                    <p className="technology__details details">{currentTechnology.description}</p>
                </div>
                <div className="technology__img">
                    <img src={image} alt="technology img" />
                </div>
            </div>
        </div>
    )
}

export default Technology;