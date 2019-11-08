const ADD_ARTICLE = "ADD_ARTICLE";    
export const addArticleAction = (payload) => {
   console.log('addArticleAction');
   return { type : ADD_ARTICLE , payload }	 
}      
 
export const getData = () => {
  
    return (dispatch) => {    
	return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
    //console.log(json);     
    dispatch({ type: "DATA_LOADED", payload: json });
	});       
	};
   
	}
 
//getData();   
