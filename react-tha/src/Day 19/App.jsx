
import Counter from "./Counter";
import "./counter.css";

const Button = () => {
  const n = [1, 2, 3, 4];

  return (
    <div className="counter">
      <div className="buttons-div">
        {n.map((i) => (
          <Counter key={i} />
        ))}
      </div>
    </div>
  );
};

export default Button;