import './slider.css'
import Card from '../card/card'
import { useRef } from 'react'
const Slider = ()=>{

  const sliderContent = useRef()
  const demo = (e)=>{
    if(e.target.classList.contains("next")){
      sliderContent.current.scrollLeft += 330 
    }
    else{
      sliderContent.current.scrollLeft -= 330
    }
  }

  return(
  <div className='slider'>
    <div className='container'>
      <h4 className='section-head'> find courses</h4>
      <div className='slider-Wraper'>

          <button className='next' onClick={demo}>{">"}</button>
          <button className='prev' onClick={demo}>{"<"}</button>
          <div className="slider-content" ref={sliderContent}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
            
          </div>
      </div>
    </div>
  </div>
 
)}

export default Slider