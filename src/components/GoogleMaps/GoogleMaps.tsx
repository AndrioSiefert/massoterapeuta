import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export const GoogleMaps = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCZSiJN8UJGeGt_jLdHaGnVsDEsQ7Urjuo',
    });

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ height: '400px', width: '100%' }}
            center={{
                lat: -30.853727,
                lng: -51.819837,
            }}
            zoom={15}
        >
            <Marker
                position={{
                    lat: -30.853727,
                    lng: -51.819837,
                }}
                options={{
                    label: {
                        text: 'Eliane Massoterapeuta',
                        color: 'black',
                        fontSize: '16px',
                    },
                }}
            />
        </GoogleMap>
    ) : (
        <></>
    );
};

export default GoogleMaps;
