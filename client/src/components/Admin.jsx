import { AdminAnimals } from "./AdminComponents/AdminAnimals"
import { AdminFood } from "./AdminComponents/AdminFood"

export const Admin = ()=>{
    return (
        <div className="App">
            <h1>The Admin Page</h1>
            <AdminAnimals />
            <AdminFood />

        </div>
    )
}