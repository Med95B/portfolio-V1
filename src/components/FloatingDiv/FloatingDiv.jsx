/* eslint-disable react/prop-types */
import './FloatingDiv.css'


function FloatingDiv({img,txt1,txt2}) {
 
  
  return (
   <div className="FloatingDiv">
    <img src={img} alt="" />
    <span>
        {txt1}
        <br />
        {txt2}
    </span>
   </div>
  )
}

export default FloatingDiv