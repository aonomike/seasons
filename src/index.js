import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props){
        super(props);
        //This is the ONLY time we do direct assignment to the state
        this.state = {latitude: null, errorMessage:''};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called set state!!!
                this.setState({latitude: position.coords.latitude})
            },
            err => this.setState({errMessage: err.message}) 
        );
    }
    // react says we have to define render!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err) 
        );
       
        if (this.state.errorMessage && !this.state.latitude){
            return <div>{this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <div>{this.state.latitude}</div>
        }
        return <div>Loading!</div>
            
        };
}

ReactDOM.render(<App/>, document.querySelector("#root"));