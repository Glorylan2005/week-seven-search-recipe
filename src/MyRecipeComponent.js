import checkmark from './checkmark.png';

function MyRecipyComponent({id, label, image, calories, ingredients, cuisineType}) {
    return (
        <div key={id} className='card'>
            
            <div className='box one'>
                <div className="list lab">
                    <h2>{label}</h2>
                </div >

                <div className="list">
                    <img src = {image} alt = "food" className='foodimg'/>
                </div>
            </div>

            <div className='box two'>
                <div className="list">
                <div>
                    <h3>Ingredients:</h3>
                </div >
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>
                                <img src= {checkmark} className="check" alt = "check"/>
                                {ingredient}
                            </li>)
                        )}
                        
                    </ul>
                </div>
                <div className="list">
                    <p>{calories.toFixed()} calories</p>
                </div>

                <div className="list">
                    <h3>Cuisine: {cuisineType}</h3>
                </div >
            </div>
                
        </div>
    )
}
export default MyRecipyComponent;