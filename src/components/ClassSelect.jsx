import './ClassSelect.css'

function ClassSelect(props) {
  console.log(props.class);
  if(!props.class) {
    throw new Error("No class passed to ClassSelect")
  }

  function onButtonClick(ev) {
    console.log(props.class)
  }

  return <div className={`ClassSelectContainer`}>
    <button className={`${props.class}Select ClassSelect`} onClick={onButtonClick}>
      {props.class}
    </button>
  </div>
}

export default ClassSelect;