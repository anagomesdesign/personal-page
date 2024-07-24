import './h1.css'

export default function H1 (props:any) {
    const {children} = props;
    return (
        <h1>{children}</h1>
    )
};