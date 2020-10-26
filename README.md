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