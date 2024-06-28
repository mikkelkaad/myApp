import "../styles/Slider.css";

export const FoodFilter = ()=>{

    return(
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Energy</th>
                    <th>Protein</th>
                    <th>Fat</th>
                    <th>Fibers</th>
                    <th>Ash</th>
                    <th>Calcium</th>
                    <th>Phosphate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        MAX
                    </th>
                        <td className="slidecontainer">
                        <input type="range" min="1" max="100" className="slider" id="myRange" />
                        
                        </td>
                            <td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
                </tr>
                <tr>
                    <th>
                        MIN
                    </th>
                        <td>
                            <input type="range" min="1" max="100" className="slider" id="myRange2" />
                        </td>
                            <td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
                </tr>
            </tbody>
        </table>
    )

};