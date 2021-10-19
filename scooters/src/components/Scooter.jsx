import "../App.css";
import logo from "../logo.png"
function Scooter({ scooter }) {

    const d = new Date(scooter.last_use_time);
    let month = "00" + (d.getMonth() + 1);
    month = month.substring(month.length - 2);
    let day = "00" + d.getDate();
    day = day.substring(day.length - 2);
    scooter.last_use_time = `${d.getFullYear()}-${month}-${day}`;

    return (
        <>
            <div className="card">
                <img src={logo} style={{ width: '100px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Paspirtuko registracijos kodas</h5>
                    <p className="card-text" style={{ fontWeight: "bold" }}>{scooter.registration_code}</p>
                    <span className="badge badge-pill badge-secondary m-1 p-2">
                        Paspirtuko paskutinio naudojimo data: {scooter.last_use_time}
                    </span>
                    <span className="badge badge-pill badge-secondary m-1 p-2">
                        Paspirtuko nuvažiuoti kilometrai  {(scooter.total_ride_kilometres)}
                    </span>
                    <span className="badge badge-pill badge-secondary m-1 p-2">
                        Laisvas:  {scooter.is_busy}
                    </span>
                    <div className="form-group mt-3">
                        <button type="button" className="btn btn-danger m-1">
                            Ištrinti
                        </button>
                        <button type="button" className="btn btn-success m-1">
                            Redaguoti duomenis
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Scooter;