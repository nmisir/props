import Zanimanje from "./Zanimanje";

const Korisnik = (props) => {
    const {city, subject} = props;

    return (
        <span>
            <span> Moj rodni grad je {city}.</span>
            <Zanimanje naziv={subject}/>
        </span>
    );
}

export default Korisnik;