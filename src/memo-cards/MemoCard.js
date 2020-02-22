import React from "react"
import './styles.css'

class MemoCard extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            classes: 'memo-image',
            isVisible: false
        }

    }

    toggleCard = (ev) => {
        // this.setState(prevState => ({ isVisible: !prevState.isVisible }));
        // console.log(this.state.isVisible)
        console.log(ev)
        ev.persist()
    };


    render() {
        const {
            imageSrc,
            imgType,
            realId,
            onClick
        } = this.props

        const { isVisible } = this.state

        return (
            <div className='memo-card'>
                <img src={`${isVisible ? imageSrc : ""}`}
                     className={`${isVisible ? 'memo-image fiszki-animation' : 'memo-image'}`}
                     onClick={onClick}
                />
                type: {imgType}
                realId: {realId}
            </div>
        )
    }
}

export default MemoCard
