import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from 'react';
export const Hero = () => {

  const { heroid } = useParams();

  const heroe = useMemo(
    () => getHeroById(heroid),
    [heroid]
  );
  const navigate=useNavigate();
  const onBack = () => {
    navigate(-1)
  }
  if (!heroe) {
    return <Navigate to={"/marvel"} />;
  }
  const srcimg = `/assets/heroes/${heroid}.jpg`;

  return (
    <div className="card m-3 ">
      <img src={srcimg}
        className="card-img-top p-10 animate__animated animate__bounceInDown" alt={heroe.superhero}
      />
      <div className="card-body">
        <h5 className="card-title">
          {heroe.superhero}</h5>
        <p className="card-text">
          {heroe.characters}</p>
        <button
          className="btn btn-outline-primary"
          onClick={onBack}
        >Go Back</button>
      </div>
    </div>
  );
};
