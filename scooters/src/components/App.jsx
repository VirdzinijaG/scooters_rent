import { useState, useEffect } from 'react';
import axios from 'axios';
import Scooters from './Scooters';

function App() {

    const [scooters, setScooters] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [scootersCount, setScootersCount] = useState(0);
    const [rideCount, setRideCount] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3003/scooters").then((response) => {
            setScooters(response.data);
        });
    }, [lastUpdate]);


    // Statistika
    // Visi paspirtukai
    useEffect(() => {
        axios.get('http://localhost:3003/scooters/count')
            .then((response) => {
                setScootersCount(response.data[0].scootersCount);
            })
    }, [lastUpdate])

    // Kilometrai visi
    useEffect(() => {
        axios.get('http://localhost:3003/scooters/ride-count')
            .then((response) => {
                // console.log(response.data);
                setRideCount(response.data[0].total_ride_kilometres);
            })
    }, [lastUpdate])


    const addScooter = (scooter) => {
        axios.post("http://localhost:3003/scooters", scooter).then(() => {
            setLastUpdate(Date.now());
        });
    };

    const deleteScooter = (id) => {
        axios.delete("http://localhost:3003/scooters/" + id).then(() => {
            setLastUpdate(Date.now());
        });
    };


    const editScooter = (id, scooter) => {
        axios.put("http://localhost:3003/scooters/" + id, scooter).then(() => {
            setLastUpdate(Date.now());
        });
    };



    return (
        <>
            <h1 style={{ textAlign: "center", color: "lightgray", fontSize: "100px", textShadow: "1px 0 10px #694b4b" }}>Kolt paspirtukų nuoma</h1>
            <Scooters scooters={scooters}></Scooters>
        </>

    )
}

export default App;