import "../App.css";
import logo from "../logo.png"
function Scooter({ scooter }) {
    return (
        <>
            <div class="card">
                <img src={logo} style={{width:'100px'}} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">{scooter.registration_code}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )

}

export default Scooter;