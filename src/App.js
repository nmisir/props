import logo from './logo.svg';
import './App.css';
import Osoba from "./components/Osoba";

export default function App() {
  return (
    <div>
      <Osoba name="Ivo" age="22" city="Zagreb"/>
      <Osoba name="Ana" age="33" city="Split" subject="Ekonomist"/>
      <Osoba name="Pero" age="44"/>
    </div>
  );
}

