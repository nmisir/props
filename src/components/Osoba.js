import {Component} from "react";
import PropTypes from "prop-types";
import Korisnik from "./Korisnik";


export default class Osoba extends Component
{
    
    render(){
        const { name, age, city, subject } = this.props;

        return (
            <div>
                Zovem se {name} i imam {age} godine.
                {
                    (city) && <Korisnik city={city} subject={subject}/>
                }
            </div>
        );
    }
}

Osoba.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string
}