import React from 'react'

import Icon from './Icon'
import portfolioData from './portfolioData'

class PortfolioSection extends React.Component {

    render() {

        const galleryPic = './images/portfolioPic' + this.state.piece + this.state.picture + '.png'

        return (
            <div className='portfolio-section' >

                <h2>Portfolio</h2>

                <div className='content-and-arrows'>

                    {this.state.piece > 0 
                    ? 
                    <div className='portfolio-arrow left' onClick={()=>{
                        this.setState((prev) => ({piece: prev.piece-1, picture:0}))
                    }}
                    ><Icon name='arrowLeft'/></div>
                    :
                    <div className='portfolio-arrow left'/>
                    }
                    

                    <div className='portfolio-content'>

                        <h3 className='name-bit'>{portfolioData[this.state.piece].title}</h3>

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
                                <div className='piece-info' >
                                    <p>{portfolioData[this.state.piece].text[0]}</p>
                                    <br/>
                                    <p>{portfolioData[this.state.piece].text[1]}</p>
                                </div>
                                <div className='piece-links' >
                                    <a href={portfolioData[this.state.piece].github} target='_blank'>
                                        <div className='link-icon' ><Icon name='github'/></div>
                                        <h6>view code repo</h6>
                                    </a>
                                    { portfolioData[this.state.piece].youtube &&
                                    <a href={portfolioData[this.state.piece].youtube} target='_blank'>
                                        <div className='link-icon' ><Icon name='youtube'/></div>
                                        <h6>behind the scenes</h6>
                                    </a>}
                                    <a href={portfolioData[this.state.piece].heroku} target='_blank'>
                                        <div className='link-icon' ><Icon name='visit'/></div>
                                        <h6>visit site on heroku</h6>
                                    </a>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                    {this.state.piece < portfolioData.length -1
                    ? 
                    <div className='portfolio-arrow right' onClick={()=>{
                        this.setState((prev) => ({piece: prev.piece+1, picture:0}))
                    }}
                    ><Icon name='arrowRight'/></div>
                    :
                    <div className='portfolio-arrow right'/>
                    }              
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










