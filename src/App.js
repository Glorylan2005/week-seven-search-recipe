import { useEffect, useState } from 'react';
import './App.css';
import video from './salad.mp4';
import icon from './icon.png';
import MyRecipeComponent from './MyRecipeComponent';

function App() {

  const MY_ID = "4b00a4e1";
  const MY_KEY = "26a68c98a5e4e43bce53553fb7a61c8e";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmit, setWordSubmit] = useState('salad');

  useEffect(()=>{
    const getFetch = async() =>{
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await responce.json();
      console.log(data)
      setMyRecipes(data.hits)
    }
    getFetch();
  },[wordSubmit])

  const myRecepeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmit(mySearch)
  }

  return (
    <div className="App">
      
      <div className="container">      
        <video autoPlay muted loop>      
          <source src={video} type="video/mp4" />      
        </video> 
        <div className='header'>    
        <h1>Find a Recipe</h1> 
        </div>      
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input className='search'
          placeholder='Type ingredient...'
          onChange={myRecepeSearch}
          value = {mySearch}>
          </input>

          <button>
          <img src={icon} alt="icon" className='icon' />
        </button>

        </form>
      </div>

      <div className='cont'>
            {myRecipes.map(element => (
                <MyRecipeComponent 
                id = {element.id}
                label = {element.recipe.label}
                image = {element.recipe.image}
                calories = {element.recipe.calories}
                ingredients = {element.recipe.ingredientLines}
                cuisineType = {element.recipe.cuisineType}
                  />
              ))}
        </div>
      
    </div>
  );
}

export default App;
