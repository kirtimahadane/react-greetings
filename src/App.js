


import React, {useState} from 'react'

const App = () => {
const [firstName, setFirstName]= useState("");
const [lastName, setLastName]= useState("");
const [people, setPeople]=useState([]);

const handleSubmit=(e)=>{
  e.preventDefault();
  if(firstName && lastName){
   const person= {firstName, lastName }
   setPeople(poeple=>{
    return [...people, person]
  });
  setFirstName('');
  setLastName('');
  }
  
  
}
  return (
    <>
    <div className="container">
    <h1 class="heading"> React Greetings</h1>
<form className="form" onSubmit={handleSubmit}>
<input type="text"
placeholder="Enter your first Name"
name="firstName"
value={firstName}
onChange={(e)=>setFirstName(e.target.value)}/>
<input type="text"
placeholder="Enter Your last name"
name="lastName"
value={lastName}
onChange={(e)=>setLastName(e.target.value)}/>
<button type="submit" className="btn"> Gen</button>
</form>
    </div>
    
<div className="container-holder" >

  {
    people.slice(0,1).map(person=>{
      return (
     
        <div key={person.index} className="rose-bg" >
           <h1>Hello 👋</h1>
            <h4 className="name">{person.firstName} {person.lastName}</h4>
            <p>Welcome to the world of React!</p>
     
     
          </div>
      )
    })
  }
</div>
   </>
  )
}

export default App


