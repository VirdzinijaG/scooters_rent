import Scooter from "./Scooter";


function Scooters({ scooters, deleteScooter, editScooter }) {
    return (
        <>
            {scooters.map((scooter) => (<Scooter key={scooter.id} scooter={scooter} deleteScooter={deleteScooter} editScooter={editScooter} />))}
        </>
    )
}

export default Scooters;