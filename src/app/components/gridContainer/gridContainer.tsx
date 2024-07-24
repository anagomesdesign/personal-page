import './gridContainer.css'

export default function GridContainer(props:any) {
    const {className, children} = props;
    return (
        <div className="grid-container">{children}</div>
    )
};