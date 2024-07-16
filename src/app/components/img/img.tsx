export default function Img (props:any) {
    const {source, alt, style} = props;
    return (
        <img src={source} alt={alt} style={style} />
    )
};