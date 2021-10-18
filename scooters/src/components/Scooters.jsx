import Scooter from "./Scooter";


function Scooters({ scooters, deleteScooter }) {
    return (
        <>
            {scooters.map((scooter) => (<Scooter key={scooter.id} scooter={scooter} deleteScooter={deleteScooter} />))}
        </>
    )
}

export default Scooters;