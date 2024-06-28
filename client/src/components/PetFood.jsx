import { getJson } from "./getJson"

const foodsRaw = await getJson('http://localhost:8080/food');
const foods = foodsRaw?.data?.result || [];

console.log(foods);

export const PetFood = (props)=>{
    return(
        <div className="App">
            <h1><code>Pet Food</code></h1>
            <table className="foodTable">
                <thead>
                    <tr>
                        <th>name</th><th>size</th><th>energy</th><th>protein</th><th>fat</th><th>fibers</th><th>ash</th><th>calcium</th><th>phosphate</th><th>brand</th>
                    </tr>
                </thead>
                    <tbody>
                        {foods.map((food)=> 
                        <tr key={"fooditem_"+food.name}>
                            {Object.keys(food).map((key)=><td key={"fooditem_"+food[key]}>{food[key]}</td>)}
                        </tr>)}
                    </tbody>
            </table>
        </div>
    )
}