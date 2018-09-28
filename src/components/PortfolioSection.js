import React from 'react'

class PortfolioSection extends React.Component {

    render() {

        const galleryPic = './images/portfolioPic' + this.state.piece + this.state.picture + '.png'

        return (
            <div className='portfolio-section' >

                <h2>Portfolio</h2>

                <div className='content-and-arrows'>
                    <div className='portfolio-arrow right'></div>

                    <div className='portfolio-content'>

                        <h3 className='name-bit'>mayit</h3>

                        <div className='gallery-and-info-bit'>

                            <div className='gallery-bit'>
                                <div className='gallery-pic' >
                                    <img src={galleryPic}/>
                                </div>
                                <div className='gallery-controls'>
                                    <div className={(this.state.picture == 0 && 'selected') + ' gallery-button'} 
                                    onClick={()=>{this.setState({picture:0})}}
                                    ></div>
                                    <div className={(this.state.picture == 1 && 'selected') + ' gallery-button'} 
                                    onClick={()=>{this.setState({picture:1})}}
                                    ></div>
                                    <div className={(this.state.picture == 2 && 'selected') + ' gallery-button'} 
                                    onClick={()=>{this.setState({picture:2})}}        
                                    ></div>
                                </div>
                            </div>

                            <div className='info-bit'>
                                <div className='piece-info' >There are plenty more fish, and regardless, before i learn to dance and be myself regardless of what gender is dancing around me then my attmepts are likely to be blunt swings into a house of cards. So that is good. And i don't feel at all 'guilty' i didnt try it on with anyone. I find that special place and myself and let the world give me what its got to give. Who knows. This ain't perfect and it won't help me forever but it's a good path I'm on. Maybe thats what this period of going out is, not trying to socialize with everyone, but just to be myself and chill in the public eye.</div>
                                <div className='piece-links' >
                                    <a href="">
                                        <div className='link-icon' ></div>
                                        <h6>view code repo</h6>
                                    </a>
                                    <a href="">
                                        <div className='link-icon' ></div>
                                        <h6>visit site on heroku</h6>
                                    </a>
                                    <a href="">
                                        <div className='link-icon' ></div>
                                        <h6>behind the scenes</h6>
                                    </a>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                    <div className='portfolio-arrow'></div>                
                </div>

            </div>
        )
    }

    state = {
        piece: 0,
        picture: 0
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

export default PortfolioSection










