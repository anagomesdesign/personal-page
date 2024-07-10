import './index.css'
import logoAna from '../pages/img/ana-gomes-design-logo.png';

export default function Index() {
    return (
        
        <div className="container">
            
            <div className="portrait">
                
            </div>

            <div className="bio">
                
                <img src= {logoAna.src} alt="" style={{ width: '64px' }}/>
                
                <div>
                    <h1>Hello, I&apos;m Ana! 👋🏽</h1>
                    
                    <p>
                        
                        I'm a Brazilian Product Designer currently based in Canada. I have +10 years of experience working with design, user experience and technology. In my spare time, I love playing video games, drinking coffee and exploring the outdoors. 
                        <br/><br/>
                        Currently, I work as a Senior Product Designer for <a href="https://www.spud.ca/" target="_blank">Spud</a> and in the past, I worked with companies like <a href="https://www.skipthedishes.com/" target="_blank"> SkipTheDishes</a>, <a href="https://winnipeg.ubisoft.com/" target="_blank">Ubisoft</a> and <a href="https://www.shopify.com/ca" target="_blank">Shopify</a>. 
                        <br/><br/>
                        To know more about my professional background or contact me, check my <a href="https://www.linkedin.com/in/anacsgomes/" target="_blank">LinkedIn</a> page.
                    
                    </p>
                </div>
            </div>
        </div>
   
    )
}