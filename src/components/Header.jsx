import globe from "/src/assets/earth.png"

export default function Header(){

    return(
        <header>
            <img src={globe} alt="globe"/>
            <p>my travel journal.</p>
        </header>
    )
}