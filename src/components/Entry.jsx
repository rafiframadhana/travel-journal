import locationPin from "/src/assets/location-pin.png"

export default function Entry(props) {

   
    return (
        <article>
            <img className="main-img" src={props.detail.img.src} alt={props.detail.img.alt}></img>

            <div className="detail-container">
                <div className="detail-location">
                    <div>
                        <img src={locationPin}/>
                        <p>{props.detail.country}</p>
                    </div>

                    <a href={props.detail.googleMapsLink} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.detail.title}</h1>
                <p className="text">{props.detail.text}</p>
            </div>
           

        </article>
    )
}