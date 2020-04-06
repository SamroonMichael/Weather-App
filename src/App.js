import React from 'react';
import SeasonDisplay from './SeasonDisplay/SeasonDisplay';
import Loader from './Loader/Loader';   

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            success => this.setState({ lat: success.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        )
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <h1>Error: {this.state.errorMessage}</h1>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        } 

        return <Loader message="Please allow your location" />
    }

    render() {
        return <div>{this.renderContent()}</div>
    }
}

export default App;