import React from 'react'

class SkillsSection extends React.Component {

    render() {

        const galleryPic = './images/portfolioPic' + this.state.piece + this.state.picture + '.png'

        return (
            <div className='skills-section' >


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

export default SkillsSection










