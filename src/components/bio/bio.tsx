import './bio.css';
import logoAna from '@images/ana-gomes-design-logo.png';
import Img from '../img/img';
import LineBreak from '../lineBreak/lineBreak';
import Div from '../div/div';
import H1 from '../h1/h1';
import Paragraph from '../paragraph/paragraph';
import Link from '../link/link';
import Button from '../button/button';


export default function Bio(props:any) {
    const {className, children} = props;
    return (
        <div className='bio'>
            <Img
                source={logoAna.src} 
                alt={''} />
            <LineBreak/>
            <Div>
                <H1>Hello, I&apos;m Ana! 👋🏽</H1>
                <LineBreak/>
                <Paragraph>
                    I&apos;m a Brazilian Product Designer currently based in Canada. I have +10 years of experience working with design, user experience and technology. In my spare time, I love playing video games, drinking coffee and exploring the outdoors.

                    <LineBreak/><LineBreak/>

                    Currently, I work as a Senior Product Designer for <Link to={'https://www.spud.ca/'} target={'_blank'}> Spud</Link> and in the past, I worked with companies like <Link to={'https://www.skipthedishes.com/'} target={'_blank'}>SkipTheDishes</Link>, <Link to={'https://winnipeg.ubisoft.com/'} target={'_blank'}>Ubisoft</Link> and  <Link to={'https://www.shopify.com/ca'} target={'_blank'}>Shopify</Link>.

                    <LineBreak/><LineBreak/>

                    To know more about my professional background or contact me, check my <Link to={'https://www.linkedin.com/in/anacsgomes/'} target={'_blank'}>LinkedIn</Link>.
                </Paragraph>

                <LineBreak/>

                <Button
                    title = "LinkedIn">
                        Let&apos;s Connect!
                </Button>
                
            </Div>
        </div>
    )
};