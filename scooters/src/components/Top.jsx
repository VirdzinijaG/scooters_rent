import NewScooter from './NewScooter';


function Top({ addScooter, sort, scootersCount, rideCount }) {
    return (
        <>
            <div class="row no-gutters">
                <div class="col-12 col-sm-6 col-md-8"><NewScooter addScooter={addScooter}></NewScooter></div>
                <div class="col-12 col-sm-6 col-md-3">
                    <div className="col">
                        <h5 className="card-title">Rūšiuoti pagal</h5>
                        <button type="button" className="btn btn-info m-1" onClick={() => sort("last_use_time")}>
                            Paskutinio naudojimo datą
                        </button>
                        <button type="button" className="btn btn-info m-1" onClick={() => sort("total_ride_kilometres")}>
                            Nuvažiuotus kilometrus
                        </button>
                    </div>
                    <div class="col-12 col-sm-6 col-md-8">
                        <h5 className="card-title">Statistika</h5>
                        <h6>Paspirtukų kiekis: {scootersCount}</h6>
                        <h6>Nuvažiuoti kilometrai: {rideCount} km</h6>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Top;