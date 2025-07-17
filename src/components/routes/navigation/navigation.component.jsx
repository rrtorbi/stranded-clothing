import { Outlet,Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg'
import './navigation.styles.scss'

const NavigationBar = () => {
    return(
      <>
        <div className="navigation">
            <Link className="logo-container" to={'/'}>
                <CrownLogo />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
            </div>
        </div>
        <Outlet />
      </>
    )
}

export default NavigationBar

