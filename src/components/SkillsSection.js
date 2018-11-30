 import React from 'react'

 import Icon from './Icon'

class SkillsSection extends React.Component {

    render() {

        return (
            <div className='skills-section' >
                <h2>Skills</h2>

                    <div className='skills-container' >

                        <div className='logo ajax'><Icon name='ajax'/></div>
                        <div className='logo html'><Icon name='html'/></div>
                        <div className='logo cli'><Icon name='cli'/></div>
                        <div className='logo jquery'><Icon name='jquery'/></div>
                        <div className='logo git'><Icon name='git'/></div>
                        <div className='logo node'><Icon name='node'/></div>
                        <div className='logo react'><Icon name='react'/></div>
                        <div className='logo redux'><Icon name='redux'/></div>
                        <div className='logo vscode'><Icon name='vscode'/></div>
                        <div className='logo javascript'><Icon name='javascript'/></div>
                        <div className='logo sass'><Icon name='sass'/></div>
                        <div className='logo adobe'><Icon name='adobe'/></div>
                        <div className='logo chrome'><Icon name='chrome'/></div>
                        <div className='logo csharp'><Icon name='csharp'/></div>
                        <div className='logo responsive'><Icon name='responsive'/></div>

                        <div className='icon creativity' ><Icon name='creativity'/></div>
                        <div className='icon logic' ><Icon name='logic'/></div>
                        <div className='icon communication' ><Icon name='communication'/></div>


                        <div className='skill-name' >
                            <h3 className='ajax' >ajax</h3>
                            <h3 className='html' >html<span>5</span> </h3>
                            <h3 className='cli' ><span>CLI</span></h3>
                            <h3 className='jquery' >jquery</h3>
                            <h3 className='git' >git</h3>
                            <h3 className='node' >node.js</h3>
                            <h3 className='react' >react</h3>
                            <h3 className='redux' >redux</h3>
                            <h3 className='vscode' >vscode</h3>
                            <h3 className='javascript' >javascript</h3>
                            <h3 className='sass' >css/sass</h3>
                            <h3 className='adobe' >adobe suite</h3>
                            <h3 className='chrome' > dev tools</h3>
                            <h3 className='csharp' >c-sharp</h3>
                            <h3 className='responsive' >responsive</h3>
                        </div>

                        <div className='profficiency'>
                            <h4>profficieny</h4>
                            <div className='div1' ></div>
                            <div className='div2' ></div>
                            <div className='div3' ></div>
                            <div className='div4' ></div>
                            <div className='div5' ></div>
                            <div className='div6' ></div>
                            <div className='div7' ></div>
                            <div className='div8' ></div>
                            <div className='div9' ></div>
                            <div className='div10' ></div>
                        </div>

                        <div className='characteristic' >

                            <div className='creativity' >
                                <h3>creativity</h3>
                                <h5>ametuer 'artiste' and thing maker</h5>
                            </div>
                            <div className='logic' >
                                <h3>logic</h3>
                                <h5>naturally gifted problem solver</h5>
                            </div>
                            <div className='communication' >
                                <h3>communication</h3>
                                <h5>maths tutor and world traveller</h5>
                            </div>
                        
                        </div>

                    </div>

            </div>
        )
    }
}

export default SkillsSection










