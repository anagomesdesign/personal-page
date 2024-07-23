import './bio.css'

export default function Bio(props:any) {
    const {className, children} = props;
    return (
        <div className='bio'>{children}</div>
    )
};