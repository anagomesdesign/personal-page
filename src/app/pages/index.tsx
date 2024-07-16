import './index.css'
import logoAna from '../pages/img/ana-gomes-design-logo.png';
import LineBreak from '../components/lineBreak/lineBreak';
import Link from '../components/link/link';
import Paragraph from '../components/paragraph/paragraph';
import Div from '../components/div/div';
import Img from '../components/img/img';
import H1 from '../components/h1/h1';

export default function Index() {
    return (
        
        <Div className="container">
            
            <Div className="portrait"/>

            <Div className="bio">
                <Img source={logoAna.src} alt={''} style={{ width: '64px'}} />
                <LineBreak/>
                <Div>
                    <H1>Hello, I&apos;m Ana! 👋🏽</H1>
                    
                    <Paragraph>
                        I&apos;m a Brazilian Product Designer currently based in Canada. I have +10 years of experience working with design, user experience and technology. In my spare time, I love playing video games, drinking coffee and exploring the outdoors.

                        <LineBreak/><LineBreak/>

                        Currently, I work as a Senior Product Designer for <Link to={'https://www.spud.ca/'} target={'_blank'}> Spud</Link> and in the past, I worked with companies like <Link to={'https://www.skipthedishes.com/'} target={'_blank'}>SkipTheDishes</Link>, <Link to={'https://winnipeg.ubisoft.com/'} target={'_blank'}>Ubisoft</Link> and  <Link to={'https://www.shopify.com/ca'} target={'_blank'}>Shopify</Link>.

                        <LineBreak/><LineBreak/>

                        To know more about my professional background or contact me, check my <Link to={'https://www.linkedin.com/in/anacsgomes/'} target={'_blank'}>LinkedIn</Link>.
                    </Paragraph>
                </Div>
            </Div>
        </Div>
   
    )
}