import type {Obiekt} from "./Obiekt.tsx";
function ObjectDetails(item:Obiekt)
{
    return (
        <>
            <div className="object-details-box">
                <img alt={"Blank"} style={{width:"80px", height:"80px", borderRadius: "8px", objectFit: "cover"}} src={item.picture}></img>
                <div style={{color: "var(--text-h)"}}>
                    {item.name==""? (<p>Kliknij obiekt aby uzyskać więcej informacji!</p>):(<p>{item.name}<br/>{item.type}<br/>{item.space} lat świetlnych</p>)}
                </div>
            </div>
        </>
    )
}
export default ObjectDetails;

