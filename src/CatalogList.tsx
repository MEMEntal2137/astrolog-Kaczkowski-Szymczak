import type {Obiekt} from "./Obiekt";
import {HandleObiektOnCLick} from "./ObjectDetails.tsx";
function CatalogList(Lista:Obiekt[]) {
    return (
        <>
            <div>
        <ul style={{listStyleType:"none"}}>
            {Lista.map((item,index) => (
                <li id="li"
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
                    <div><img onClick={HandleObiektOnCLick(item)} style={{width: 50, height: 50}} src={item.picture} alt={"tak"}/></div>
                    {item.name}<br/>{item.type}<br/>{item.space} Lat świetlnych</li>
            ))}
        </ul>
            </div>
        </>
    )
}

export default CatalogList