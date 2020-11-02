const apiKey = '4tHRicrntnvbrr1C9Qvlris6zjBnsMGd68VF6FP7SPVSnkfOfMCLKi15pq39VXKkfvbXNjztPv6zgVxuPqJk3KIVJ9WivipAV4bTyl5lSZleBU5fxVRf4YHpivqfX3Yx'

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
    //When we make requests to the Yelp API, we have to present a form of identification for the browser. 
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
    ).then (response => response.json()

    ).then(jsonResponse => {
      if (jsonResponse.business) {
        return jsonResponse.business.map()
      
      }.catch (error) {
        return console.log(error)
      }
    }

    )}
}