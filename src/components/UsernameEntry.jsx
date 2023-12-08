import "./UsernameEntry.css";


function UsernameEntry(props) {
  return (
    <form className="usernameForm">
      <label htmlFor="usernameInput"> Username </label>
      <input id="usernameInput" defaultValue="Player" contentEditable="true"></input>
    </form>
  )  
}

export default UsernameEntry;