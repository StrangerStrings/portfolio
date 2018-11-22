import React from 'react'

import Icon from './Icon.js'

var animationTimer


class TitleSection extends React.Component {

    render() {
        
        const infoOpen = ( this.state.openInfos[0] || this.state.openInfos[1] || this.state.openInfos[2] ) ? "info-open" : ""

        const nameRedStyle = this.state.animationOn ? {left: this.state.nameLeft/10 +'rem', top: this.state.nameTop/10+'rem' } : {visibility: 'hidden', left:0, top:0}
        const nameBlueStyle = this.state.animationOn ? {left: -this.state.nameLeft/10 +'rem', top: -this.state.nameTop/10 +'rem' } : {visibility: 'hidden', left:0, top:0}

        return (
            <div className='title-section' >

                <div className={'buffer-1 ' + infoOpen} ></div>
                <div className='name-box' >
                    <div className='name-div' >
                        <h2>Ben Green</h2>
                        <h1 className='name-red' 
                            style={nameRedStyle}
                        >Ben Green</h1>
                        <h1 className='name-blue' 
                            style={nameBlueStyle}                        
                        >Ben Green</h1>
                        <h1
                            onMouseEnter={this.nameAnimation}
                            onMouseLeave={this.stopNameAnimation}
                        >Ben Green</h1>
                    </div>
                    <h4 className={infoOpen} >Junior Developer and Physics Graduate</h4>
                </div>

                <div className={'buffer-2 ' + infoOpen} 
                    onClick={()=>{
                        this.setState({openInfos: [false,false,false]})
                    }}
                ></div>

                <div className={'main-info ' + infoOpen} >
                    {this.state.openInfos[0] && (<div>
                    {/* {true && (<div> */}
                        <p>The truth, as best I remember it.</p>
                        <p>I was a quiet and curious kid, shy but with little fear of the world. I was individualisitc and brave, I thought a thing and then did a thing, often oblivious to what was going on around. Throughout school I could seem disinterested but often got the highest marks. Especially in Maths and science, they seemed quite obvious to me. I also enjoyed the subjects where I could make things. I chose Art, music and design technology for GCSEs where I created things I was proud of. Outside of school I liked exploring the mean streets of Bradford, long walks with my family, playstation, football, guitar and fighting with my brother.</p>
                        <p>I decided to study Physics at university but was quite unsure about it all. I liked working out mind bending problems and the wonder of the unknown but as time passed I grew quite disillusioned with regurgitating facts and plugging in numbers and stopped attending most lectures. In my 3rd year I was on course for a 2:2 or even a 3rd but I worked like a madman for the last two or three months and got all 1sts in my exams, which averaged at a 2:1. It wasn’t the advertized university experience but I certainly developed as a person there and learnt a lot about how to keep myself in the best state for creativity, focus and power. </p>
                        <p>After, I applied for a few engineering graduate programs but without any conviction. I was unsure what I wanted to do. I had considered coding but thought it impenetrably complicated. All this was compounded by my girlfriend’s visa status. We met in university but her English visa ran out 3 months after graduation. This led to 2 years of following her round the world. First to France and then to Australia where her Masters provided a visa. It made it very hard for me to get any kind of career together. I wrote online for money in France then worked hospitality jobs in Australia but the language barrier and then my tempory visa prevented me from securing real, meaty work. This sounds like an excuse but it is a reason for my.. unimpressive employment history. </p>
                        <p> I moved back to England in 2016 and got my life some much needed direction. I began tutoring maths and science and took to it like a fish to fish food. I thought briefly about becoming a teacher but knew I wanted to do something fresher, where I was creating new things. As luck would have it one of my student’s parents was starting a new business and said he’d take me on if I completed a coding challange. It was the push I need and I found out that it was easier than I thought, funner than I thought, and that I was quite good at it. His business never materialised but it set me off on this ever-evolving coding rollercoaster.</p>
                    </div>)}
                    {this.state.openInfos[1] && (<div>
                        <p>I started with C#, where every concept and term was new and needed learning. Then I moved onto html and css, eventually making a resume website for a friend. I ventured into the world of javascript and used jquery to create a interactive onscreen keyboard. This developed into a multi-mode typing game, my first real project. It took many months but was a transformative learning experience.</p>
                        <p>In the gaps, as well as still tutoring, I completed a free code camp course, with tricky algorithm challenges and creating things like a calculaotr and local weather app. I then decided to specialise in react and bought a series of lectures. After just 2 weeks of learning about npm, webpack, components and state, I made a noughts and crosses game and was pleasantly surprised by this new setup's power and usability.</p>
                        <p>I attempted a genetic algorithm app next but failed, then after learning redux I returned and completed it with relative ease. I then made something purely for myself, a meditation and yoga interval timer. My work flow of design, map, code, style and tweak was growing smoother and I got used to the feeling of stress and confusion giving way to satisfaction and pride. After learning some node I deployed this with heroku. I had created something that I use regularly and makes my life that bit better!</p>
                        <p>My latest project has been making this portfolio site which I found fairly simple. Though I still have much to learn I believe I have enough skills to succeed in a junior role and learn as I work. I have never focused so much and so consistenly on anything before and I think and hope I may have found a career I will excel in and enjoy.</p>
                        <p> With this momentum I’ve got then the only way is up. </p>
                    </div>)}
                    {this.state.openInfos[2] && (<div>
                        <ul>
                            <li><p>Earned a 2:1 Physics <a href='https://photos.app.goo.gl/eEM3uXKehf5Y2umt5' target='_blank' >degree</a> from the university of York</p></li>
                            <li><p>Built a customisable interval timer that I actually use</p></li>
                            <li><p>Made a multi-mode typing game</p></li>
                            <li><p>This Youtube <a href='https://www.youtube.com/watch?v=JR7LfPsUEiU&t=954s' target='_blank' >tutorial</a> for a react pie timer</p></li>
                            <li><p>Travelled Europe on my own, shredding fears on the way</p></li>
                            <li><p>Earned a good wage as a self-employed maths tutor</p></li>
                            <li><p>Various creative <a href='https://dropr.com/benclaytongreen' target='_blank' >works</a> </p></li>
                            <li><p>Others: <br/><span>best in school for uk maths challenge, lived in Australia for a year, <br/> made my own fountain, cut my own hair, did a backwards dive, <br/>broke out of my teenage shyness</span></p></li>
                        </ul>
                    </div>)}
                </div>

                <div className='headings' >
                    <h5 className={this.state.openInfos[0] ? 'info-open' : '' } id='0' onClick={(e)=>{
                        this.openCloseInfo(e.target.id)
                    }}>Life Story</h5>
                    <h5 className={this.state.openInfos[1] ? 'info-open' : '' } id='1' onClick={(e)=>{
                        this.openCloseInfo(e.target.id)
                    }}>Coding Journey</h5>
                    <h5 className={this.state.openInfos[2] ? 'info-open' : '' } id='2' onClick={(e)=>{
                        this.openCloseInfo(e.target.id)
                    }}>Achievements</h5>
                </div>

                <div className='title-stripes' >
                    <div className='a' ></div>
                    <div className='b' ></div>
                    <div className='c' ></div>
                    <div className='d' ></div>
                </div>
                
            </div>
        )
    }

    state = {
        openInfos : [false, false, false],
        nameLeft: 0,
        nameTop: 3,
        nameIncrement: 1,
        animationStopping: false,
        animationOn: false
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


    nameAnimation = () => {
        this.setState({
            animationOn: true, 
            animationStopping: false, 
        })
        animationTimer = setInterval( ()=>{
            this.setState((prev)=>({nameLeft: prev.nameLeft + prev.nameIncrement}))
            let x = this.state.nameLeft
            let nameTop = ((x-4)^4)*0.5
            console.log(nameTop)

            this.setState({nameTop})

            if (Math.abs(this.state.nameLeft) > 7 ){
                this.setState((prev)=>({nameIncrement: prev.nameIncrement*-1}))
            }

            if(this.state.animationStopping && Math.abs(this.state.nameLeft) < 2 ){
                console.log('stopping')
                this.setState({animationOn:false})
                clearInterval(animationTimer)
            }

        },150)
    }

    stopNameAnimation = () => {
        console.log('mouseout')
        this.setState({animationStopping: true})
    }

    // componentDidMount(){
    //     this.nameAnimation()
    //     setTimeout( this.stopNameAnimation , 400)
    // }

}

export default TitleSection










