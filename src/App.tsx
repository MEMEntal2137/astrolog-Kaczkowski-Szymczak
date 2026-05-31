import { useState } from 'react'
import './App.css'
import CatalogList from "./CatalogList.tsx";
import DiscoveryForm from "./DiscoveryForm.tsx";
import type {Obiekt} from "./Obiekt.tsx";
const TablicaObiektow: Obiekt[]=[{
  name: "Saturn",
  type: "Planeta",
  space: 100,
  picture: "saturn.png"
},
  {
    name: "Mars",
    type: "Planeta",
    space: 20,
    picture: "mars.png"
  },
  {
    name: "Uran",
    type: "Planeta",
    space: 300,
    picture: "uran.png"
  },
  {
    name: "Ziemia",
    type: "Planeta",
    space: 0,
    picture: "ziemia.png"
  },
  {
    name: "Orion",
    type: "Gwiazda",
    space: 1000,
    picture: "orion.png"
  }];
function App() {
  const [obiekty, setObiekty] = useState<Obiekt[]>(TablicaObiektow);
  return (
    <>
      <DiscoveryForm onAddObiekt={(nowy) => setObiekty([...obiekty, nowy])} />
      {CatalogList(obiekty)} 
    </>
  )
}

export default App
export { TablicaObiektow }