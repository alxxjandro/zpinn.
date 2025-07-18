import { Link } from "react-router-dom";

function IconBtn({ Icon, classN, route, selected, setSelected, textcontent }) {
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
          <Icon />
        </button>
      </Link>
    </>
  );
}

export default IconBtn;
