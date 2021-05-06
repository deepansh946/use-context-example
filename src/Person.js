import { useContext } from "react";
import { UserContext } from "./Context";

function Person() {
  const [person, togglePerson] = useContext(UserContext);

  return (
    <div>
      Person: {person.name}
      <button
        onClick={() => {
          togglePerson({ name: "Stuart Little" });
        }}
      >
        Change
      </button>
    </div>
  );
}

export default Person;
