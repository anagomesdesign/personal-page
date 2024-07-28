import './button.css';

export default function Button(props:any) {
    const {className, type, title, children} = props;
    return (
        
        <button className='primary' type='button' title={title}>{children}</button>
        
    )
};