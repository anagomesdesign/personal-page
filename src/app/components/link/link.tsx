// Deconstructing Objects
// When you have an Object in JavaScript, you can access its attributes by using the dot notation.
// Ex: props.name / props.age

// You can also deconstruct the object to access its attributes directly.
// Instead of having to use `props.name` every time,
// you can create a new variable called `name` and assign it the value of `props.name`

// This can be done simply with the following syntax:
// const name = props.name;

// This works, but if you have multiple attributes, you would have to do this for each one.
// Ex: 

//   - object props with the following attributes:
//      name
//      age
//      email
//      address

// const name = props.name;
// const age = props.age;
// const email = props.email;
// const address = props.address;

// This can be simplified with a concept called deconstructing.
// Deconstructing allows you to extract multiple attributes from an object 
// and assign them to variables in a single line.

// The same object can be deconstructed as follows:
// const {name, age, email, address} = props;

// now you can use the variables the same way you would use the attributes


// In the following example, we are deconstructing the `props` object to get these attributes:
// `to`, `target`, and `children`.

// The `to` attribute is used to specify the URL the link will redirect to.
// The `target` attribute is used to specify how the link will be opened.
// The `children` attribute contains all the elements that are passed inside the component.
// as we saw in our P component example.

// IMPORTANT:
// Since we're using plain Javascript syntax, we are just **assuming** that our `props` object 
// will have these attributes.

// As a small exercise, when using this component in another file try and see what happens 
// if you don't pass the `to` attribute.

// As seen previously, the `children` attribute comes from React itself, and contains the elements
// that are passed inside the component.

// The `to` and `target` attributes are custom attributes that we are defining ourselves.
// The naming of these attributes is arbitrary, and you can name them whatever you want.

// While `target` was chosen to match the HTML attribute, 
// `to` was purposely chosen to look different from the `href` attribute.
import './link.css'

export default function Link(props: any) {
    // Deconstructing the props object to get the `to`, `target`, and `children` attributes.
    const {to, target, children} = props;

    // This component returns a link with no styling.
    return (
        <a href={to} target={target}>{children}</a>
    )
}