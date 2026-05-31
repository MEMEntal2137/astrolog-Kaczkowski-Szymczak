import type {Obiekt} from "./Obiekt.tsx";
function ObjectDetails(item: Obiekt= {
    name: "",
    type: "",
    space: 0,
    picture: ""
})
{

    const picSrc="https://c8.alamy.com/comp/AKP42K/mature-indian-man-thumbs-up-AKP42K.jpg";
    return (
        <>
            <div style={{backgroundColor:"mediumpurple", width:"65%", height:"50%", margin:"20px", display:"flex", flexDirection:"row"}}>
                <img alt={"Blank"} style={{width:"25%", height:"25%"}} src={picSrc}></img>
                {item.name==""? (<p>Kliknij obiekt aby uzyskać więcej informacji!</p>):(<p>{item.name}<br/>{item.type}<br/>{item.space} lat świetlnych</p>)}
            </div>
        </>
    )


}
export function HandleObiektOnCLick(item:Obiekt):undefined {
    ObjectDetails(item);
}
export default ObjectDetails;
