import './portrait.css'

export default function Portrait(props:any) {
    const {className, Children} = props;
    return (
        <div className='portrait'>{Children}</div>
    )
};