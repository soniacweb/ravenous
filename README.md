# ravenous
### Part of the Codeacademy pro final project

# Objectives and Overview

 Over the next couple of weeks, you’ll build a website called “Ravenous”, a Yelp-like clone.
In total, there will be four parts to this project:
* Creating Static Components
* Passing Information to Components
* Setting the State of Ravenous Components
* Interacting with the Yelp API

In the first installment, you will start by building the first part of Ravenous: *Creating Static Components*.
Here’s a quick overview of how Ravenous should function:
* As a user, I should be able to search for restaurants
* As a user, I should be able to view a list of restaurants returned by the Yelp API
* As a user, I should be able to sort through restaurants using a filter

The four projects will test your knowledge of JavaScript and React, all with the goal of building a Yelp-like clone. 

A few notes before getting started:
In total, there will be four parts to this project:
* Creating Static Components
* Passing Information to Components
* Setting the State of Ravenous Components
* Interacting with the Yelp API

# Technologies
- React (createreactapp)
- JavaScript
- CSS
- Yelp API

### Adding a CCS reset 

By default, create-react-app will generate a sample application. I needed to add a reset.css file to ensure the app is styled the same in every browser.

Using the command line I createed a new file called reset.css in the public/ directory and linked reset.css in the index.html file that’s also located in the public/ directory.

### Creating Business.js
Ravenous will be composed of four different components interacting with each other:

```<Business />
<BusinessList />
<SearchBar />
<App /> (created by default with create-react-app)
```

### Search Bar
The search bar should allow users to search businesses by:

- Best Match
- Highest Rated
- Most Reviewed

To achieve this, I needed to create an object with keys and values that conform to what the API expects to receive (as shown in the documentation). 

### Setting a BusinessList Prop

In app.js, I added a businesses property to the <BusinessList /> component inside of the render() method, and set the property equal to the businesses array. 

``` <BusinessList businesses={businesses} /> ```

When the businesses prop is set in the BusinessList component, there should be some functionality behind it. Specifically, it should iterate through the businesses array I created.

Inside of the BusinessList div in BusinessList.js, I accessed the businesses prop and called the .map() method on it.

Inside of the map() method, I passed a callback function with one parameter called business.

```
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">

{
this.props.businesses.map(business => 
  <Business business={business} />
)
};

</div>
    )
  }
}
```

### Modifying Business.js using Props

```<div className="Business">
      <div className="image-container">
        <img src={this.props.business.imageSrc} alt=''/>
      </div>
      <h2>{this.props.business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{this.props.business.address}</p>
          <p>{this.props.business.state}</p>
          <p>{this.props.business.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>ITALIAN</h3>
          <h3 className="rating">{this.props.business.rating}</h3>
          <p>{this.props.business.reviewCount} reviews</p>
```

### Setting the Search Bar's State

So far, I have passed information from parent components (App) to child components (BusinessList, Business). I needed to complete the third installment for this project objective which is to set state.

Certain components will need to handle changes in their state. For example, the sorting options in the search bar will change (and I’ll need to know their state when communicating with the Yelp API). Likewise for the two input elements `Search Businesses` and `Where`.

Objective: the search bar options will reflect changes in their state when they are clicked, and the “Let’s Go” button will respond to click events.

I created a method which took in an argument (user input) to compare the current state of sorting with. I used a ternary operator to create simply comparison logic- if the user imput matched the state of sort, the CSS class would be active. 

``` //getSortByClass() returns the current CSS class for a sorting option. 
  getSortByClass(sortByOption) {
  return this.state.sortBy === sortByOption ? 'active': '';
  }
```

### A method that sets the state of a sorting option-  proving useful when communicating with the Yelp API in the future.

Inside of `.handleSortByChange()`, I updates the state by calling `.setState()`. I passed in an object to `setState()`. The object sets sortBy to the value of the method’s argument.

```
handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption})   
  }

```

### Set the Class Name of a Sort Option 

I added a className attribute to the <li> element in the `.renderSortByOptions()` method and set it equal to the return value of the getSortByClass() method by passing in sortByOptionValue as the argument.

This will conditionally style each sort by option, displaying to the user which sorting option is currently selected.

```
  renderSortByOptions() {
    ...
    return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>
    ...

```
### Handle a Sorting Option Change (On Click)

Objective: update the state of a sorting option when it is clicked.

I added an onClick attribute to the <li> element and set it equal to `handleSortByChange.bind()`. Passing in two arguments to .bind(): this and sortByOptionValue.

```
renderSortByOptions() {
    ...
    return <li 
    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}></li>
    });
    }

```

This will allow us to both bind to the current value of this (as we usually do in the constructor()) but also bind the current sortByOptionValue as the first argument to the method call, ensuring the method is called with the appropriate value when clicked.

### Handle a Term or Location Change (input fields)

Added two new methods:

`handleTermChange(e)`
`handleLocationChange(e)`

Both related to events being triggered, therefore both accepted events as an argument. Inside of each method, I updateed the state using setState() and passed in an empty object into each call of setState():

`this.setState({term: e.target.value})`

### Handle a Term or Location Change (onChange)

Using the methods: 


Inside of the return statement of the component’s render() method, add onChange attributes to each `<input>` element:

Set the first attribute to handle term changes.
Set the second attribute to handle location changes.

```
<input placeholder="Search Businesses" onChange={this.handleTermChange} />
<input placeholder="Where?" onChange={this.handleLocationChange} />

```
### searchYelp() in the App Component

In App.js, I added a method called searchYelp() in the class declaration of the App component.

`searchYelp()` accepts three parameters: term, location, and sortBy. These parameters represent the three pieces of information we’ll send to the Yelp API.

In SearchBar.js I added: `handleSearch()` which accepts an event parameter.

Inside of .handleSearch(), i called the passed down .searchYelp() method (located on props), and passed in the current state values of term, location, and sortBy as arguments.

`this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)`

The preventDefault() method was used to prevent the default action of clicking a link from triggering at the end of the method.

### Handle a Search (onClick)


Added visual feedback for the sorting options at the top of the search bar
Set the state of sorting options and input elements
Simulated a search query with the “Let’s Go” button

```
  <div className="SearchBar-submit" onClick={this.handleSearch}>
      <a>Let's Go</a>
    </div>
```

### Retrieve Yelp API v3 Credentials and Storing in Yelp.js

## Using the fetch() browser API to make our requests.

As fetch() is a browser API, older browsers may not support it. To increase the accessibilty of Ravenous to a wider audience of users, I needed to add a fetch() polyfill to support older browsers.
I installed `install the whatwg-fetch` polyfill and added it to your package.json file.

Create an empty object called Yelp. This object will store the functionality needed to interact with the Yelp API. Create a method called search. This is the method we’ll use to retrieve search results from the Yelp API.

Pass in term, location, and sortBy parameters to the method.

Inside of the method, begin the method with a return which will return a promise that will ultimately resolve to our list of businesses. After return begin your chain of calls by calling fetch().

```
const Yelp = {
  search(term, location, sortBy) {
    return fetch()
  }
}
```

To retrieve businesses, you’ll have to hit the /businesses endpoint of the Yelp API. I pass in the following path as the first argument to fetch():

`https://api.yelp.com/v3/businesses/search?term=TERM&location=LOCATION&sort_by=SORT_BY`

Use interpolation to replace TERM, LOCATION, and SORT_BY with the correct variables in the path above

We can bypass this CORS restriction with an API called CORS Anywhere. CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.

Prepend the URL path you passed to the first argument in fetch().

I will needed to convert the returned response to JSON to then be able to effectively utilize the list of businesses from the fetch request.

I chained a call using `then()` to the end of the fetch() method and passed in a callback function. The callback function, taking in `response` as its only parameter, and returning a call to .json() on `response`.

I chained another `.then()` call after the previous to retrieve the list of businesses from the converted JSON response and passed in a callback function that takes one parameter called jsonResponse.
Inside of that callback, I added an if statement that checks to see if jsonResponse has a businesses key (a valid response from the Yelp API).

If it doesn’t, I added a `catch` method to log any potential errors as I don’t want the site to crash trying to render a list of businesses that don’t exist.

## Mapping through the response 


If this key does exists in the JSON response, we should return an array that has all of the business’ properties we’ll need (the ones we previously hard coded, like name, address, city, and more).

In the if statement, iterate through `jsonResponse.businesses` using map().