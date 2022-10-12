import { useEffect,useState } from 'react';
import './App.css';
import relax from './relax.png'
import education from './education.png'
import cook from './cook.png'
import soc from './soc.png'
import busy from './busy.png'
import char from './char.png'
import music from './music.png'
import hea from './hea.png'
import diy from './diy.png'
import els from './else.png'

function App() {  
    const [activityApi,setActivityApi]=useState('')
    const [img,setImg]=useState('')
    const api=async()=>{
    const response=await fetch('https://www.boredapi.com/api/activity/')
    const data= await response.json()
    setActivityApi(data.activity)
    console.log(data.type)
  if(data.type==='relaxation'){
    setImg(relax)
  }
  else if(data.type==='education'){
    setImg(education)
  }
  else if(data.type==='cooking'){
    setImg(cook)
  }
  else if(data.type==='social'){
    setImg(soc)
  }
  else if(data.type==='diy'){
    setImg(diy)
  }
  else if(data.type==='music'){
    setImg(music)
  }
  else if(data.type==='recreational'){
    setImg(hea)
  }
  else if(data.type==='busywork'){
    setImg(busy)
  }
  else if(data.type==='charity'){
    setImg(char)
  }
  else{
    setImg(els)
  }
}
  useEffect(()=>{
  api()
  },[])

  return (
    <div className="center">
      <h1>Ideas for free time</h1>
      <h2>{activityApi}</h2>
      <div className='height'><img alt='img' src={img}/></div>
      <button onClick={api}>a new idea</button>
    </div>
  );
}

export default App;
