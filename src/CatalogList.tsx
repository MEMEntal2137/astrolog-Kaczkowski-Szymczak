import type {Obiekt} from "./Obiekt";
function CatalogList(props: { lista: Obiekt[]; clickHandle: (item: Obiekt) => void; }) {
    return (
        <>
            <div style={{ padding: "20px 0", width: "100%" }}>
                <ul className="catalog-grid">
                    {props.lista.map((item: Obiekt, index: number) => (
                        <li
                            onClick={() => props.clickHandle(item)}
                            id="li"
                            className="catalog-item"
                            key={index}
                        >
                            <div><img style={{width: 50, height: 50, borderRadius: "6px"}} src={item.picture} alt={"brak"}/></div>
                            <div style={{fontSize: "14px", lineHeight: "1.3", color: "white"}}>
                                {item.name}<br/>{item.type}<br/>{item.space} lat świetlnych
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CatalogList;
