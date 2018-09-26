import React from 'react'

import Icon from './Icon.js'

var saveErrorTimer
var overwrittenTimer


class TitleSection extends React.Component {

    render() {
        
        const infoOpen = ( this.state.openInfos[0] || this.state.openInfos[1] || this.state.openInfos[2] ) ? "info-open" : ""

        return (
            <div className='title-section' >

                <div className={'buffer-1 ' + infoOpen} ></div>

                <div className='name-box' >
                    <h1>Ben Green</h1>
                    {!infoOpen && <h3>Junior Developer and Physics Graduate</h3>}
                </div>

                <div className={'buffer-2 ' + infoOpen} 
                    onClick={()=>{
                        this.setState({openInfos: [false,false,false]})
                    }}
                ></div>

                <div className={'main-info ' + infoOpen} >
                    {this.state.openInfos[0] && (<div>
                    {/* {true && (<div> */}
                        <p>Gandhi
                            What did Gandhi do? What did he do? He went round and met the people he had to meet. Not just any old fools in parks etc. He went to places where he thought he could learn the things he was trying to learn in life. It’s quite amazing. It’s the one of the greatest thing he did for himself. That and following truth and taking care of his body. But the meetings of the ‘important’ people, that is something different, some strange, requesting letters of invatation. Crazy shit, bold to the point of weirdness with a knowledge of his place and his grovelling that let him off the hook. They were probably all extremely complimentary. Greetings sari lardesh, I have seen your name when looking for the most fresh and inavative software makers in Dehli. I then looked at your work and saw how you do things.. blah blah. It would be my pleasure to come for a couple of days to see how those at the top do the thing that i am trying so hard to learn. If there’s any way i could make myself useful i would aswell. I am not looking for money, i am in Dehli for another month and have been reading Gandhi autobiography; it seems he looked for ‘important’ people wherever he was and made arangments to have at least a short meeting with them. He met who was important to him on life journey, and i wish to do the same, and right now, some top programmers and designers are the people who would be most inspirational to me. 
                            So he must of said stuff like that, but less jumbled. My head’s jumbled again, i don’t know what with what. But it sure feels crazy. Dreams of being a popstar. That’s what goes through my head, that i’m the greatest rapper ever and if the world hears this stuff then they will freak. Then i go through another mad thing where i kinda get past that and do it for myself and its crazy good and then that feeds inot the big dreams. 
                            Oh ye.;</p>
                    </div>)}
                </div>

                <div className='headings' >
                    <h4 className={this.state.openInfos[0] ? 'info-open' : '' } id='0' onClick={(e)=>{
                        this.openCloseInfo(e.target.id)
                    }}>Life Story</h4>
                    <h4 className={this.state.openInfos[1] ? 'info-open' : '' } id='1' onClick={(e)=>{
                        this.openCloseInfo(e.target.id)
                    }}>Road of Code</h4>
                    <h4 className={this.state.openInfos[2] ? 'info-open' : '' } id='2' onClick={(e)=>{
                        this.openCloseInfo(e.target.id)
                    }}>Acheicments</h4>
                </div>

            </div>
        )
    }

    state = {
        openInfos : [false, false, false]
    }

    openCloseInfo = (id) => {
        id = parseInt(id)
        if (this.state.openInfos[id]){
            this.setState({openInfos: [false, false, false]})
        }
        else{
            const arr = [false,false,false]
            arr[id] = true
            this.setState({openInfos: arr})
        }
    }

}

export default TitleSection










