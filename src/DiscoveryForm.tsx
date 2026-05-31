import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import type { Obiekt } from "./Obiekt.tsx";

interface DiscoveryFormProps {
    onAddObiekt: (nowyObiekt: Obiekt) => void;
}

function DiscoveryForm({ onAddObiekt }: DiscoveryFormProps) {

    const [name, setName] = useState<string>("");
    const [type, setType] = useState<string>("Planeta");
    const [space, setSpace] = useState<number>(0);
    const [picture, setPicture] = useState<string>("");

    function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleTypeChange(event: ChangeEvent<HTMLInputElement>) {
        setType(event.target.value);
    }

    function handleSpaceChange(event: ChangeEvent<HTMLInputElement>){
        setSpace(Number(event.target.value));
    }

    function handlePictureChange(event: ChangeEvent<HTMLInputElement>){
        setPicture(event.target.value);
    }



    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name.trim() === "" || type.trim() === "") {
            alert("Proszę podać nazwę i typ obiektu!");
            return;
        }




        const nowyObiekt: Obiekt = {
            name,
            type,
            space,
            picture
        };

        onAddObiekt(nowyObiekt);
        setName("");
        setType("");
        setSpace(0);
        setPicture("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: "20px", padding: "30px", border: "1px solid #ccc" }}>
            <h3>Zgłoś anomalię/obiekt</h3>

            <div>
                <label>Nazwa obiektu:</label><br />
                <input type="text" value={name} onChange={handleNameChange} placeholder="np. Jowisz" />
            </div>

            <div>
                <label>Typ:</label><br />
                <input type="text" value={type} onChange={handleTypeChange} placeholder="np. Planeta, Gwiazda" />
            </div>

            <div>
                <label>Odległość (space):</label><br />
                <input type="number" value={space} onChange={handleSpaceChange} />
            </div>

            <div>
                <label>Link do zdjęcia:</label><br />
                <input type="text" value={picture} onChange={handlePictureChange} placeholder="np. https://archeologia.edu.pl/wp-content/uploads/2022/10/Orion-2310277780-PuntaAllen2.jpg" />
            </div>

            <br />
            <button type="submit">Dodaj do Katalogu</button>
        </form>
    );
}

export default DiscoveryForm
