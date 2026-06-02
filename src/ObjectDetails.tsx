import type {Obiekt} from "./Obiekt.tsx";
function ObjectDetails(item:Obiekt)
{
    return (
        <>
            <div style={{backgroundColor:"mediumpurple", width:"65%", height:"50%", margin:"20px", display:"flex", flexDirection:"row"}}>
                <img alt={"Blank"} style={{width:"25%", height:"25%"}} src={item.picture}></img>
                {item.name==""? (<p>Kliknij obiekt aby uzyskać więcej informacji!</p>):(<p>{item.name}<br/>{item.type}<br/>{item.space} lat świetlnych</p>)}
            </div>
        </>
    )
}
export default ObjectDetails;
