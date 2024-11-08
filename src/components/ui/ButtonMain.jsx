/* eslint-disable react/prop-types */
const ButtonMain = ({ clsName, name, icon }) => {
  return (
    <>
      <button className={`ButtonMain ${clsName ? clsName : ""}`}>
        {icon && icon} {name}
      </button>
    </>
  );
};

export default ButtonMain;
