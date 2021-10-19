import { useState } from "react";

function NewScooter({ addScooter }) {
    const [code, setCode] = useState('');
    const [useTime, setUseTime] = useState('');
    const [ride, setRide] = useState('');
    const [is_busy, setIsBusy] = useState(1);

    const control = (e, what) => {
        switch (what) {
            case "registration_code":
                setCode(e.target.value);
                break;
            case "last_use_time":
                setUseTime(e.target.value);
                break;
            case "total_ride_kilometres":
                setRide(e.target.value);
                break;
            case "is_busy":
                setIsBusy(1)
        }
    };

    const insert = () => {
        addScooter({
            registration_code: code,
            last_use_time: useTime,
            total_ride_kilometres: ride,
            is_busy: is_busy
        });
        setCode("");
        setUseTime("");
        setRide("");
        setIsBusy(1)
    };

    return (
        <>
            <form>
                <div className="form-row" style={{ marginTop: "50px" }}>
                    <div className="col-sm-3 col-form-label">
                        <input type="text" maxLength="8" onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} onChange={(e) => control(e, "registration_code")} value={code} className="form-control" id="validationDefault01" placeholder="Registracijos numeris" required />
                        <small>Registracijos numeris</small>
                    </div>
                    <div className="col-sm-3 col-form-label">
                        <input type="date" onChange={(e) => control(e, "last_use_time")} value={useTime} className="form-control" id="validationDefault02" placeholder="Pakutinis naudojimo laikas" required />
                        <small>Data</small>
                    </div>
                    <div className="col-sm-3 col-form-label">
                        <input type="number" onChange={(e) => control(e, "total_ride_kilometres")} value={ride} className="form-control" id="validationDefault02" placeholder="Pravažiuoti kilometrai" required />
                        <small>Kilometrai</small>
                    </div>
                    <button className="btn btn-primary m-1" type="submit" style={{ textAlign: "center", height: "45px" }} onClick={insert}>Įvesti naują paspirtuką</button>
                </div>
            </form>
        </>
    )

}

export default NewScooter;