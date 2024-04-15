import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroCard } from "./components/HeroCard";
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroByName } from "../helpers/getHeroByName";
export const Search = () => {

  const navigate = useNavigate();
  const { search } = useLocation();

  const { q = "" } = queryString.parse(search)

  const heroes = getHeroByName(q)
  const { searchText, onInputChange } = useForm({
    "searchText": ""
  });

  const onSearchSubimit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
  }
  return (
    <div>
      <h1>Search page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <form onSubmit={onSearchSubimit}>
            <input
              onChange={onInputChange}
              type="text"
              name="searchText"
              placeholder="Searcha a hero"
              className="form-control" />
            <button onClick={onSearchSubimit} className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q.trim().length <= 0 ?
            (<div className="alert alert-primary" style={{display: q.trim().length <= 0 ? "block": "none"}} >
              Searcha a hero
            </div>) :
            (<div className="alert alert-danger" style={{display: (q.trim().length > 0  && (heroes === undefined)) ? "block": "none"}}>
              No hero with <b>{q}</b>
            </div>)
          }


          {
            (heroes != null && <HeroCard hero={heroes} />)
          }



          {/* <HeroCard /> */}
        </div>
      </div>

    </div>
  );
};
