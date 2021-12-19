export default function Zanimanje (props){
    const {naziv} = props;
    return (
        <span>
            Naziv zanimanja: {naziv}
        </span>
    );
}

Zanimanje.defaultProps = {
    naziv: "Slikar"
}