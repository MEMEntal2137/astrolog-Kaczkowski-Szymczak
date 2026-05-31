import { useState } from 'react'
import './App.css'
import CatalogList from "./CatalogList.tsx";
import DiscoveryForm from "./DiscoveryForm.tsx";
import type {Obiekt} from "./Obiekt.tsx";
const TablicaObiektow: Obiekt[]=[{
  name: "Saturn",
  type: "Planeta",
  space: 100,
  picture: "https://png.pngtree.com/png-clipart/20241206/original/pngtree-saturn-planet-image-isolated-on-white-background-png-image_17629981.png"
},
  {
    name: "Mars",
    type: "Planeta",
    space: 20,
    picture: "https://png.pngtree.com/png-clipart/20241206/original/pngtree-mars-planet-image-on-white-background-png-image_17629822.png"
  },
  {
    name: "Uran",
    type: "Planeta",
    space: 300,
    picture: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-uranus-planet-illustration-png-image_14525259.png"
  },
  {
    name: "Ziemia",
    type: "Planeta",
    space: 0,
    picture: "https://png.pngtree.com/png-clipart/20250517/original/pngtree-a-interactive-planet-earth-globe-for-world-exploration-on-realistic-png-image_21012711.png"
  },
  {
    name: "Orion",
    type: "Gwiazda",
    space: 1000,
    picture: "https://archeologia.edu.pl/wp-content/uploads/2022/10/Orion-2310277780-PuntaAllen2.jpg"
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