import type {Obiekt} from "./Obiekt";
function CatalogList(props: { lista: Obiekt[]; clickHandle: (item: Obiekt) => void; }) {
    return (
        <>
            <div>
                <ul style={{listStyleType:"none"}}>
                    {props.lista.map((item: Obiekt, index: number) => (
                        <li
                            onClick={() => props.clickHandle(item)}
                            id="li"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                borderStyle: "outset",
                                borderColor: "rebeccapurple",
                                width: 200,
                                height: 100,
                                margin: 5,
                                backgroundColor: "purple"
                            }}
                            key={index}
                        >
                            <div><img style={{width: 50, height: 50}} src={item.picture} alt={"brak"}/></div>
                            {item.name}<br/>{item.type}<br/>{item.space} Lat świetlnych
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CatalogList;
