import { Outlet } from "react-router-dom";
import './Main.style.scss';

import ErrorBoundary from "./ErrorBoundary";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

const MainLayout = ()=>{
    return(<main className="main-layout">
        <ErrorBoundary>
            <LayoutHeader />
        </ErrorBoundary>

        <ErrorBoundary>
            <main className='layout-outlet-holder'>
                <Outlet />
            </main>
        </ErrorBoundary>

        <ErrorBoundary>
            <LayoutFooter />
        </ErrorBoundary>
    </main>)
}

export default MainLayout;