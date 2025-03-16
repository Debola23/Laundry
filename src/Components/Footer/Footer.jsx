import Styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {

  

  return (
    <>
     <div className="mt-22">
      <div className={Styles.footer}>
          <div className={Styles.container}>
            <a href="/">
              <img className={Styles.flogo} src="/Images/logoicon.png" alt="River Store Logo" />
            </a>
            <div className={Styles.logoSection}>
              <h1 className={Styles.logo}>Clean</h1>
              <p className={Styles.description}>
                  If you are looking for dry cleanig that treats your clothes with care, 
                  and is on point with delivery then this is the place to be, check the
                  price section and reach out to us                      
              </p>
            </div>
           
            <div className={Styles.linksSection}>
              <h3>Navigation</h3>
              <ul className={Styles.ul}>
                <li><a href="/">Pick Up</a></li>
                <Link className={Styles.link} to="/howitworks">How It Works</Link>
                <Link className={Styles.link} to="/price">Prices & Plans</Link>
                <li><a href="/">More Services</a></li>
                <li><a href="/book">Book</a></li>
              </ul>
            </div>
            
          </div>
          <div className={Styles.bottom}>
            <p>&copy;Clean 2025. All Rights Reserved.</p>
            <ul className={Styles.socialLinks}>
              <li><a href="#facebook">Whatapp</a></li>
              <li><a href="#twitter">Facebook</a></li>
            </ul>
          </div>
      </div>
    </div>
    </>
   
  )
}


