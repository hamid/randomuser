import {  NavLink,useLocation } from 'react-router-dom';

const LayoutHeader = () => {
    let { pathname } = useLocation();
    console.log(pathname,"pathname");
    return (
        <header className='top-header'>
            <section className='nav-bar'>
                <nav>
                    <ul>
                        <li className={pathname === '/' ? "active" :""}>
                            <NavLink replace={true} key={1} to={"/" }>Home</NavLink>
                        </li>
                        <li className={pathname === '/about' ? "active" : ""}>
                            <NavLink replace={true} key={1} to={"about"}>About us</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}
export default LayoutHeader