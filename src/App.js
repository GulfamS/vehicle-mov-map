// import React, {useEffect, useState} from "react"
// import axios from "axios"
// import {GoogleMap, LoadScript, Marker, InfoWindow, Polyline} from "@react-google-maps/api"
import "./App.css"

// const mapContainerStyle={
//   height: '100vh',
//   width: '100vw'
// }

// const center = {
//   lat: 17.385044,
//   lng: 78.486671
// }

const App = () =>{
  // const [vehicalPath, setVehicalPath] = useState([]);
  // const [currentLocation, setCurrentLocation] = useState(center);
  // const [mapCenter, setMapCenter] = useState(center);
  // const [startLocation, setStartLocation] = useState(null);
  // const [endLocation, setEndLocation] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [markerRotation, setMarkerRotation] = useState(0);
  // const [selectedDate, setSelectedDate] = useState('today');
  // const [showInfoWindow, setShowInfoWindow] = useState(false)

  // useEffect(() =>{
  //   const fetchData = async() =>{
  //     try{
  //       const response = await axios.get("http://localhost:5000/vehical-location", {
  //         params: {date: selectedDate}
  //       })
  //       const data = response.data

  //       if(Array.isArray(data) && data.length > 0){
  //         const formatedPath = data.map(coord =>({lat: coord.latitude, lng: coord.longitude}));
  //         setVehicalPath(formatedPath)
  //         setStartLocation(formatedPath[0])
  //         setEndLocation(formatedPath.length-1)
  //         setCurrentLocation(formatedPath[0])
  //         setMapCenter(formatedPath[0])
  //       }
  //       else{
  //         setVehicalPath([])
  //         setCurrentLocation(center)
  //         setStartLocation(null)
  //         setEndLocation(null)
  //         setMapCenter(center)
  //       }
  //     }
  //     catch(error){
  //       console.log(error)
  //     }
  //   }

  //   fetchData()
  // }, [selectedDate])

  // const toggleInfoWindow = () =>{
  //   setShowInfoWindow(!showInfoWindow)
  // }

  return(
    <>
             <div className="map-heading">
                <h1>Vehicle Movement on a Map</h1>
                <div className="map-container">
                  <iframe title="iframe1" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30160.568378051103!2d74.74602177685611!3d19.104538864218586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723185357226!5m2!1sen!2sin"
                   width="600"                     height="450" 
                   allowfullscreen="" 
              referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
         </>
    // <LoadScript apiKey="12f2e63d7bmshb2dbdd4c7619415p1dd412jsnb9b85eeef10c" onLoad={() =>setIsLoaded(true)}> 
    //     {isLoaded && (
    //       <div style={{position: "relative"}}>
    //           <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={mapCenter}>
    //             {startLocation && (
    //               <Marker position={startLocation} icon={{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSduZvFB87cOvLtQGxLzMnXVWZNOdgjCaPAOA&s", scaledSize: new window.google.com.Size(50, 50)

    //               }}
    //               />
    //             )}
    //             {endLocation && (
    //               <Marker position={endLocation} icon={{url: "https://cdn-icons-png.flaticon.com/256/3448/3448339.png", scaledSize: new window.google.com.Size(50, 50)}}
    //               />
    //             )}
    //             {vehicalPath.length > 0 && (
    //               <>
    //                 <Polyline path={vehicalPath} options={{strokeColor: "green", strokeWeight: 5}}/>
    //                 <Marker position={currentLocation} icon={{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm8t8GQAMSOs6a8D59qB1HmFN6ay_Bcx7gQ&s", scaledSize: new window.google.maps.Size(50, 50), rotation: {markerRotation}}}
    //                 />
    //               </>
    //             )}
    //             {showInfoWindow && (
    //               <InfoWindow position={currentLocation} onCloseClick={toggleInfoWindow}></InfoWindow>
    //             )}
    //           </GoogleMap>
    //       </div>
    //     )}
    // </LoadScript>
  )
}



export default App;
