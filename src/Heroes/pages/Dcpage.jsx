import { HeroList } from "./components/HeroList";

export const DcPage = () => {
  return (
    <div>
      <h1>Dc Comics</h1>
      <hr />
      <HeroList   publisher={"DC Comics"} />
    </div>
  );
};
