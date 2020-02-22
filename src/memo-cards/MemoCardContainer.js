import MemoCard from "./MemoCard";
import React from "react";

class MemoCardContainer extends React.PureComponent {
    constructor(props) {
        super()


    }

    componentDidMount() {
        const { allPics } = this.props
        this.setState({
            visibility: allPics.map(pic => Object.assign({}, pic, {
                isVisible: false
            }))
        })
    }

    handle() {
        console.log("XOXO")
    }

    toggleCard = (ev) => {
        // this.setState(prevState => ({ isVisible: !prevState.isVisible }));
        // console.log(this.state.isVisible)
        console.log(ev)
        ev.persist()
    };

    render() {
        const {
            allPics
        } = this.props

        return (
            <div>
                {allPics.map(pic => <MemoCard
                    key={pic.realId}
                    onClick={this.toggleCard}
                    realId={pic.realId} imgType={pic.id} imageSrc={pic.url}/>)}
            </div>
        );
    }
}

export default MemoCardContainer