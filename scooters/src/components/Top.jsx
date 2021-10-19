import NewScooter from './NewScooter';
import "../App.css";


function Top({ addScooter, sort, scootersCount, rideCount }) {
    return (
        <div className="Top">
            <div class="col-12 col-sm-12 col-md-7"><NewScooter addScooter={addScooter}></NewScooter>
                <div className="container sort">
                    <div className="row">
                        <div className="col">
                            {/* <div className="col-12 col-sm-6 col-md-8"> */}
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "white" }}>Rūšiuoti pagal</h5>
                                <button type="button" className="btn btn-secondary m-1" onClick={() => sort("last_use_time")}>
                                    Paskutinio naudojimo datą
                                </button>
                                <button type="button" className="btn btn-secondary m-1" onClick={() => sort("total_ride_kilometres")}>
                                    Nuvažiuotus kilometrus
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* <div className="col-12 col-sm-6 col-md-8"> */}
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "white" }}>Statistika</h5>
                            <h6 style={{ color: "white" }}>Paspirtukų kiekis: <span style={{ color: "white", fontWeight: 'bold', fontSize: "18px" }}>{scootersCount}</span></h6>
                            <h6 style={{ color: "white" }}>Nuvažiuoti kilometrai:<span style={{ color: "white", fontWeight: 'bold', fontSize: "18px" }}>{rideCount}</span></h6>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Top;