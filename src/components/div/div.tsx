export default function Div(props:any) {
    const {className, children} = props;
    return (
        <div className={className}>{children}</div>
    )
};