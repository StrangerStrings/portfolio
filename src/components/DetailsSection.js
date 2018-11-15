import React from 'react'

import Icon from './Icon'

class SkillsSection extends React.Component {

   render() {

       return (
            <div className='details-section' >

                <div className='details-div-1' >
                    <h6>benjclaytongreen@gmail.com</h6>
                    <a href='https://github.com/StrangerStrings' target='_blank' ><h6>github.com/StrangerStrings</h6></a>
                </div>

                <div className='portrait-div' >
                    <img src="./images/myface5.png"/>
                    {/* <div></div> */}
                </div>

                <div className='details-div-2' >
                    <h6>Saltaire, Bradford</h6>
                    <h6>07565341461</h6>
                </div>






                   {/* <div className='details-stripes ds1' >
                        <div className='e' ></div>
                        <div className='f' ></div>
                        <div className='g' ></div>
                   </div> */}


            </div>
       )
   }

}

export default SkillsSection










