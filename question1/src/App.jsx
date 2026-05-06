import React from "react"

function App() {
  const [name, setName] = React.useState("")
  return (
    <>
      <input type="text" placeholder="enter your value" value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </>
  );
}

export default App