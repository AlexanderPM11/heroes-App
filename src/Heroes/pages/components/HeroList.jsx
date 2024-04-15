import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";
import { useMemo } from 'react';
// eslint-disable-next-line react/prop-types
export const HeroList = ({ publisher }) => {
    const heroes = 
    useMemo(
        () => getHeroesByPublisher(publisher),
        [publisher]
      );
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 container-list-heroes">
            {
                heroes.map((heroe) => {
                    return (<HeroCard key={heroe.id} hero={heroe}/>)

                })
            }
        </div>
    );
};
