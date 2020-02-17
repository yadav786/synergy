import React from 'react'; 

const GraphQlExample = ({ pokemonList }) => {
  console.log('pokemonList === ', pokemonList);
   return (
		   <div>  
		      {  
	     	    pokemonList && pokemonList.pokemons && pokemonList.pokemons.slice(0, 10).map((value, key) => (
              <div>
			          {value.name} 
		          </div>
	          ))
	        }  
	      </div>
      )
 }
 
export default GraphQlExample;