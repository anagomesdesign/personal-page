// Understanding props and children in React

//   - *Every* React Component can receive a `props` argument in its function

//   - The `props` argument is an *Object* that contains all the properties that 
//     will be passed to the component when it's being used.

//   - Being an Object, props can contain multiple attributes, each of which can
//     be accessed by using the dot notation.

// Example: an object called `props` with the following attributes:
//      name
//      age

//  You can access the `name` attribute by using `props.name`
//  You can access the `age` attribute by using `props.age`

//  In React Components, the `props` can also contain a *special* attribute called `children`
//  This attribute contains all the elements that are passed inside the component.

//  Example:
//  <P>Click here</P>
//  In this example, for the P component 
//  the `props.children` attribute will contain the text "Click here"
import './paragraph.css'

export default function Paragraph(props: any) {
    // This component only returns a simple paragraph with no styling
    return(
        <p>{props.children}</p>
    )
}