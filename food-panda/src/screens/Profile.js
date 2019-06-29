import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: null,
            lng: null
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((location) => {
            this.setState({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        });
    }

    render() {
        const { lat, lng } = this.state;

        return (
            <div>
                <Header />
                <h1>Profile</h1>

                <p>Name: {this.props.user.name}</p>
                <p>Age: {this.props.user.age}</p>
                <p><img src={this.props.user.profile_pic} /></p>

                <MyMapComponent
                    isMarkerShown
                    location={{ lat, lng }}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: props.location.lat, lng: props.location.lng }}
    >
        <Marker 
        draggable={true} 
        position={{ lat: props.location.lat, lng: props.location.lng }} 
        onDragEnd={(loc) => {console.log('loc ===>', loc.latLng.lat(), loc.latLng.lng())}}
        />
    </GoogleMap>
))

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(Profile);
