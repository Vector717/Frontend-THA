import "./Chessboard.css"

const Square = (props) => {
    return (
      <div
        className="square"
        style={{
          backgroundColor: `${props.bg}`,
          width: "100%",
          height: "100%",
          border: "1px solid rgb(231, 231, 231)",
          boxSizing: "border-box",
        }}
      />
    );
  };
  const Chessboard = () => {
    let squares = [];
    let x = 0;
    var bgcol = "white";
    var dark = "rgb(0, 0, 0)";
    for (let i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        bgcol = { dark };
      } else {
        bgcol = "white";
      }
      for (let j = 0; j < 8; j++) {
        bgcol = bgcol === "white" ? `${dark}` : "white";
        squares.push(<Square key={x} bg={bgcol} />);
      }
    }
  
    return <div className="chess-board">{squares}</div>;
  };
  
  export default Chessboard;