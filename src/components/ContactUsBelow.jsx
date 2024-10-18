import classes from "../components/Contact.module.css";
import mapImg from "../images/map-marked-alt.png";
function ContactUsBelow() {
  return (
    <>
      <div className={classes.whiteDiv}>
        <div>
          <h3>Contact Us</h3>
          <p>
            Use the details below to reach us, or alternatively apply for
            bridging finance through the online form
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className=" col-3" style={{ width: "18rem" }}>
                <div className=" container-fluid text-center p-2">
                  <img src={mapImg} class="" width={70} alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-text p-2 m-2">
                    <h5>PRETORIA</h5>
                    <p className="p">
                      75 Durham Rd <br /> Clubview <br /> Centurion <br /> 0046
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className=" col-3" style={{ width: "18rem" }}>
                <div className=" container-fluid text-center p-2">
                  <img src={mapImg} class="" width={70} alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-text p-2 m-2">
                    <h5>GEORGE</h5>
                    <p className="p">
                      126 York Street <br /> George <br /> 6530
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className=" col-3" style={{ width: "18rem" }}>
                <div className=" container-fluid text-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                    className={classes.svg}
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </div>
                <div className="card-body">
                  <div className="card-text p-2 m-2">
                    <h5>WhatsApp</h5>
                    <p className="p">+27 63 068 0075</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className=" col-3" style={{ width: "18rem" }}>
                <div className=" container-fluid text-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-headset"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                  </svg>
                </div>
                <div className="card-body">
                  <div className="card-text p-2 m-2">
                    <h5>Phone</h5>
                    <p className="p">+27 63 068 0075</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className=" col-3" style={{ width: "18rem" }}>
                <div className=" container-fluid text-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-envelope-open"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
                  </svg>
                </div>
                <div className="card-body">
                  <div className="card-text p-2 m-2">
                    <h5>Email</h5>
                    <p className="p">apply@webridge.co.za</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsBelow;
