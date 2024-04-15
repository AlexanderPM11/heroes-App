import { heroes } from "../data/heroes"

export const getHeroByName = (name) => {

    return heroes.find(hero => hero.superhero === name);
}