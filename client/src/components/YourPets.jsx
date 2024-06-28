import { getJson } from "./getJson"
const pets = await getJson("http://localhost:8080/pets");
const yourPets = pets?.data?.result || [];

const findFood = async ()=>{

    //TODO: params should be read from user input
    const searchParams = {
        energy: {min:0,max:999},
        protein: {min:0,max:999},
        fat: {min:0,max:999},
        fibers: {min:0,max:999},
        ash: {min:0,max:999},
        calcium: {min:0,max:999},
        phosphate: {min:0,max:999},
    }
    const request =  await fetch('http://localhost:8080/findfood',
        {method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(searchParams)});
        const response = await request.json();
        const result = response.data.result;
        console.log(result);
}

export const YourPets = (props)=>{
    return (
    <>    
        <h1><code>Your pets</code></h1>
        <table className="petTable">
            <tbody>

        {yourPets ? yourPets.map((pet, i) => (
            <tr  key={i}>
                <td>
                    {Object.keys(pet).map(key =>
                        <p className="petProps" key={key+pet+pet[key]}>
                            {pet[key]}{key === "weight" ? "kg" : ""}
                            </p>)}
                   <button onClick={()=>{findFood()}}>FIND SUITABLE FOOD</button>
                </td>
            </tr> 
            )): <p>Failed to load pets</p>}
            </tbody>
            </table>
    </>
    )
}