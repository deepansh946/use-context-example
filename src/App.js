import { useContext, useState } from "react";
import Person from "./Person";
import { UserContext } from "./Context";

export default function App() {
  const user = useContext(UserContext);

  const [person, togglePerson] = useState(user);

  return (
    <UserContext.Provider value={[person, togglePerson]}>
      <div className="App">hello {user.name}</div>
      <Person />
    </UserContext.Provider>
  );
}
