import "../App.css";
import logo from "../logo.png";
import { useEffect, useState } from "react"

function Scooter({ scooter, deleteScooter, editScooter, id }) {


    const [useTime, setUseTime] = useState('');
    const [ride, setRide] = useState('');
    const [is_busy, setIsBusy] = useState(0);

    useEffect(() => {
        setUseTime(scooter.last_use_time);
        setRide(scooter.total_ride_kilometres);
        setIsBusy(scooter.is_busy);
    }, [scooter]);

    const control = (e, what) => {
        switch (what) {
            case "last_use_time":
                setUseTime(e.target.value);
                break;
            case "total_ride_kilometres":
                setRide(e.target.value);
                break;
            case "is_busy":
                setIsBusy(e.target.value);
                break;
        }
    };

    const sum = parseFloat(scooter.total_ride_kilometres) + parseFloat(ride)

    const edit = (id) => {
        editScooter(id, {
            last_use_time: useTime,
            total_ride_kilometres: sum,
            is_busy: is_busy,
        });
        setUseTime("");
        setRide("");
        setIsBusy(0);

    };

    const isChecked = () => {
        if (is_busy === 1) {
            setIsBusy(0);
        } else {
            setIsBusy(1);
        }
    };


    if (id === 0) {
        return null;
    }

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
                    <input type="text" onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} className="form-control" style={{ width: "200px", height: "30px", textAlign: "center" }} onChange={(e) => control(e, "last_use_time")} value={useTime} />
                    <small className="form-text text-muted">
                        Įvesti naują datą
                    </small>
                    <span className="badge badge-pill badge-secondary m-1 p-2">
                        Paspirtuko nuvažiuoti kilometrai  {(scooter.total_ride_kilometres)}
                    </span>
                    <input type="text" onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} className="form-control" style={{ textAlign: "center", width: "200px", height: "30px" }} onChange={(e) => control(e, "total_ride_kilometres")} value={ride} />
                    <small className="form-text text-muted">
                        Įvesti pravažiuotus kilometrus
                    </small>
                    <span className="badge badge-pill badge-secondary m-1 p-2">
                        Laisvas:  {scooter.is_busy}
                    </span>
                    <small className="form-text text-muted">Laisvas/Užimtas?</small>
                    <input className="form-control" onChange={isChecked} isChecked={isChecked} type="checkbox" style={{ width: "15px" }} />
                    <div className="form-group mt-3">
                        <button type="button" className="btn btn-danger m-1" onClick={() => deleteScooter(scooter.id)}>
                            Ištrinti
                        </button>
                        <button type="button" className="btn btn-warning" onClick={() => edit(scooter.id)}>
                            Redaguoti duomenis
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scooter;