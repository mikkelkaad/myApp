import { getJson } from "../getJson"

//TODO: Fix only loading for admins/on page load
const breeds = await getJson("http://localhost:8080/breeds");
console.log(breeds);


export const AdminAnimals = (props)=>{

    return(
        <div>
        <code>Animal data to be loaded...</code>
        </div>
    )

}