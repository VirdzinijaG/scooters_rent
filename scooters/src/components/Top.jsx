import NewScooter from './NewScooter';
import "../App.css";


function Top({ addScooter, sort, scootersCount, rideCount }) {
    return (
        <div className="Top">
            <div class="col-10 col-sm-6 col-md-7"><NewScooter addScooter={addScooter}></NewScooter>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* <div className="col-12 col-sm-6 col-md-8"> */}
                        <div className="card-body">
                            <h5 className="card-title">Rūšiuoti pagal</h5>
                            <button type="button" className="btn btn-info m-1" onClick={() => sort("last_use_time")}>
                                Paskutinio naudojimo datą
                            </button>
                            <button type="button" className="btn btn-info m-1" onClick={() => sort("total_ride_kilometres")}>
                                Nuvažiuotus kilometrus
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* <div className="col-12 col-sm-6 col-md-8"> */}
                    <div className="card-body">
                        <h5 className="card-title">Statistika</h5>
                        <h6>Paspirtukų kiekis: {scootersCount}</h6>
                        <h6>Nuvažiuoti kilometrai: {rideCount} km</h6>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Top;