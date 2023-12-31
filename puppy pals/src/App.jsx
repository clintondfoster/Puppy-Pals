import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'
// import '/.path-to-css.css'

  
  function App() {
    const [puppies, setPuppies] = useState(puppyList);
    const [featPupId, setFeatPupId] = useState(null);
  
    // function handleClick() {
    //   console.log("puppy id: ", puppy.id)
    // }
    const featuredPup = puppies.find((pup)=> pup.id === featPupId)
    console.log(featuredPup)
    return (
      <div className="App">
        {puppies.map((puppy) => (
          <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))}
              {featPupId && (
        <div className="puppyDiv">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
    );
  }
  export default App;
