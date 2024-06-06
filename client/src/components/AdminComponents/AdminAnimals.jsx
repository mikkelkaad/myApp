import { getJson } from "../getJson"

//TODO: Fix only loading for admins/on page load
let species = await getJson("http://localhost:8080/species");
let breeds = await getJson("http://localhost:8080/breeds");
let sizes = await getJson("http://localhost:8080/sizes");

const speciesData = species?.data?.result || [];
const breedsData = breeds?.data?.result || [];
const sizesData = sizes?.data?.result || [];


export const AdminAnimals = (props)=>{

    return(
        <>
        <table className="dataTable">
            <thead>
                <tr>
                <th colSpan={2}>SPECIES</th>
                </tr>
                </thead>
            <tbody>
        {speciesData ? speciesData.map((species,i)=>(
                <tr key={i}>
        <td >
            <p>{species.species}</p>
        </td>
        <td>
            {/* TODO: Make these buttons work */}
            <button>UPDATE</button><button>DELETE</button>
        </td>
                </tr>
        )):<code>Animal data to be loaded...</code>}
        <tr>
            <td colSpan={2}><button>CREATE</button></td>
        </tr>
            </tbody>
        </table>


        <table className="dataTable">
            <thead>
                <tr>
                <th colSpan={2}>BREEDS</th>
                </tr>
                </thead>
            <tbody>
        {breedsData ? breedsData.map((breed,i)=>(
            <tr key={i}>
        <td >
            <p>{breed.breed}</p>
        </td>
        <td>
            {/* TODO: Make these buttons work */}
            <button>UPDATE</button><button>DELETE</button>
        </td>
        </tr>
        )):<code>Animal data to be loaded...</code>}

        <tr>
            <td colSpan={2}><button>CREATE</button></td>
        </tr>
            </tbody>
        </table>


        <table className="dataTable">
            <thead>
                <tr>
                <th colSpan={2}>SPECIES</th>
                </tr>
                </thead>
            <tbody>
        {sizesData ? sizesData.map((size,i)=>(
           <tr key={i}> 
        <td >
            <p>{size.size}</p>
        </td>
        <td>
            {/* TODO: Make these buttons work */}
            <button>UPDATE</button><button>DELETE</button>
        </td>

        </tr>
        )):<code>Animal data to be loaded...</code>}
                <tr>
            <td colSpan={2}><button>CREATE</button></td>
        </tr>
            </tbody>
        </table>


        </>
    )

}