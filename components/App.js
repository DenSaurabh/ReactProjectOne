import React, { useEffect, useRef, useState } from 'react'
import '../styles/App.css';
import { IgnoreCaseToggle } from './IgnoreCaseToggle';
import { ParagraphInput } from './ParagraphInput';
import { WordInput } from './WordInput';
const App = () => {
  const [paragraph,setparagraph]=useState("")
  const [serchtext,setSerchText]=useState(null)
  const [ingnorecase,setIgnorecase]=useState(false)
  const paraRef=useRef("")
  const serchandRepalace=()=>{
    let regexp=new RegExp(serchtext,ingnorecase ? "ig" :'g')
   const updatedHtml= paragraph.replace(regexp,(word)=>{ return(`<span class="highlighted-txt">${word}</span>`)})
   paraRef.current.innerHTML=updatedHtml
  }
  
  useEffect(()=>{
    if(serchtext!=null){
      serchandRepalace()
    }
     
  },[paragraph,serchtext,ingnorecase])
  
  return (
    <div id="main">
      <ParagraphInput ref={paraRef} changePara={(changedPara)=>{setparagraph(changedPara)}} paradata={paragraph} />
      <WordInput serchwordprops={(serchText)=>{setSerchText(serchText)}} srctxt={serchtext}/>
      <br />
      <IgnoreCaseToggle ingnorecase={setIgnorecase}/>
    </div>
  )
}


export default App;
