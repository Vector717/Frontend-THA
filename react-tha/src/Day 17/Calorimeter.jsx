
import "./Calorimeter.css";
const Calorie = (props) => {
  return (
    <div className="calorie">
      <h2>{props.food}</h2>
      <h3>{props.cal}</h3>
    </div>
  );
};



const Calorimeter = (props) => {
  return (
    <div className="container">
      <h1>Calorie Chart</h1>
      <div className="calorimeter">
        <Calorie food="Pizza" cal="you have consumed 60 calories today" />
        <Calorie food="Burger" cal="you have consumed 70 calories today" />
        <Calorie food="Sandwich" cal="you have consumed 700 calories today" />
        <Calorie food="Samosa" cal="you have consumed 250 calories today" />
        <Calorie food="Fried rice" cal="you have consumed 100 calories today" />
        <Calorie food="Kachori" cal="you have consumed 200 calories today" />
        <Calorie food="Dosa" cal="you have consumed 170 calories today" />
      </div>
    </div>
  );
};

export default Calorimeter;