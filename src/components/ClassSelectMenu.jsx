import ClassSelect from "./ClassSelect";
import './ClassSelectMenu.css';

function ClassSelectMenu() {
  return (
    <div className="ClassSelectMenu">
      <ClassSelect class="Scout" />
      <ClassSelect class="Soldier" />
      <ClassSelect class="Pyro" />
      <ClassSelect class="Demo" />
      <ClassSelect class="Heavy" />
      <ClassSelect class="Engi" />
      <ClassSelect class="Medic" />
      <ClassSelect class="Sniper" />
      <ClassSelect class="Spy" />
    </div>
  )
}

export default ClassSelectMenu;