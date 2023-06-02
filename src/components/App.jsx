import React from "react";
import contacts from "../contacts";
import Card from "./Cards";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((element) => (
        <Card
          key={element.id}
          name={element.name}
          src={element.imgURL}
          telphone={element.phone}
          email={element.email}
        />
      ))}
    </div>
  );
}

export default App;
