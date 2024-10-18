import React, { useState } from "react";
import PaulImg from "../../images/6-1.png";
import ChloeImg from "../../images/2-1.png";
import JuMari from "../../images/Ju-Mari.png";
import TakalaniImg from "../../images/3.png";
import TrustImg from "../../images/4-1.png";
import AmberImg from "../../images/Copy-of-Staff-Web-Photos.png";
import HugoImg from "../../images/7-1.png";
import JJImg from "../../images/5-1.png";
import classes from "../../components/AboutUs.module.css";
const Teamcards = () => {
  const [person, setPerson] = useState([
    {
      title: "Paul Merwe",
      body: "Managing Director",
      img: PaulImg,
      id: 1,
    },
    { title: "Chloë Carzis", body: "Senior Consultant", img: ChloeImg, id: 2 },
    {
      title: "Ju-Mari Bishop",
      body: "Property Bridging Consultant",
      img: JuMari,
      id: 3,
    },
    {
      title: "Takalani Ndou",
      body: "Senior Consultant",
      img: TakalaniImg,
      id: 4,
    },
    {
      title: "Trust Ncube",
      body: "Junior Consultant",
      img: TrustImg,
      id: 5,
    },
    {
      title: "Amber Bird",
      body: "Junior Consultant",
      img: AmberImg,
      id: 6,
    },
    {
      title: "Hugo Luus",
      body: "Business Development Manager",
      img: HugoImg,
      id: 7,
    },
    {
      title: "JJ Grobler",
      body: "Software Developer",
      img: JJImg,
      id: 8,
    },
    {
      title: "Mark Bhunu",
      body: "Junior Software Developer",
      img: "",
      id: 9,
    },
  ]);
  return (
    <div className="row">
      {person.map((person) => (
        <div className=" col-lg-3 col-sm-3 col-md-3">
          <div className="card" style={{ width: "13rem" }}>
            <img src={person.img} class="card-img-top" alt="..." />
          </div>
          <div className={classes.name_block}>
            <h4 className="card-title">{person.title}</h4>
            <p className="card-text">{person.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Teamcards;
