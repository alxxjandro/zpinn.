import { Link } from "react-router-dom";

function Navbtn({ textcontent, route, classN, selected, setSelected }) {
  const handleClick = () => {
    setSelected(textcontent);
  };

  return (
    <>
      <Link to={route}>
        <button
          onClick={handleClick}
          className={
            selected === textcontent ? classN + " " + "selected" : classN
          }
        >
          {textcontent}
        </button>
      </Link>
    </>
  );
}

export default Navbtn;
