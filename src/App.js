import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
function App() {
   const [count,setCount]=useState(0)
   const [repos,setRepos]=useState([])
   useEffect(() => {
    fetch('https://api.github.com/users/owais4321/repos ')
    .then((res)=>res.json())
    .then((results)=>{
      setRepos(results)
      console.log(repos);
    })

  }, []);
  return (
    <div className="App">
      <h3>{count}</h3>
      <button
      onClick={()=>setCount(count+1)}
      >INC</button>
      <ul>
        {repos.map(repo=>{
          return (<li key={repo.id}>{repo.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
