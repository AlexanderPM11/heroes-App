import { heroes } from "../data/heroes"

export const getHeroById = (heroid) => {

    return heroes.find(hero => hero.id === heroid);
}