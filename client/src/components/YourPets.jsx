import { getJson } from "./getJson"
const pets = await getJson("http://localhost:8080/pets/");
const yourPets = pets?.data?.result || [];

export const YourPets = (props)=>{
    
    return (
    <>    
        <h1><code>Your pets</code></h1>
        {yourPets ? yourPets.map((pet, i) => (
                <div key={i}>
                    <p>Name: {pet.name}</p>
                </div>
            )): <p>Failed to load pets</p>}
    </>
    )
}