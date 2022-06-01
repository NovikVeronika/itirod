'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'This app is designed for everyone ' +
                'who likes to waste time on the internet. ' +
                'Just choose the time you need and work. ' +
                'In the future, you will be more productive.' +
                'You will succeed! Just try it!';
        }

        return e(
            'button',
            { style: {
                    background: "#714444",
                    color: "white",
                    width: "150px",
                    height: "50px",
                    fontFamily: "'Poppins', sans-serif",
                    fontsize:"20px",
                    fontWeight: "lighter",
                    border: "none",
                    letterSpacing:"1px"
                    },
                onClick: () => this.setState({ liked: true }) },

            'about this app'
        );
    }
}

const domContainer = document.querySelector('#about-us-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));