import { getJson } from "./getJson"
const pets = await getJson("http://localhost:8080/pets/");
const yourPets = pets?.data?.result || [];

export const YourPets = (props)=>{
    
    return (
    <>    
        <h1><code>Your pets</code></h1>
        <table className="dataTable">
            <tbody>

        {yourPets ? yourPets.map((pet, i) => (
            <tr  key={i}>
            <td>
                    {Object.keys(pet).map(key => <p key={key+pet+pet[key]}>{key} : {pet[key]}</p>)}
                <button>FIND SUITABLE FOOD</button>
                </td>
            </tr>
            
           
            )): <p>Failed to load pets</p>}
            </tbody>
            </table>
    </>
    )
}