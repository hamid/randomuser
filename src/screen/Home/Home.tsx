import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import UserCard         from "../../component/user/UserCard";
import RefreshButton    from "../../component/button/RefreshButton/RefreshButton";
import context from '../../context/MainContext';
import './Home.style.scss';

const Home = () => {

    const { t } = useTranslation();
    const contextObj = useContext(context);
    var _self = this;
    
    useEffect(()=>{
        if(!contextObj.loading)
            contextObj.user.getCurrentUser?.();
            
    }, [])
    useEffect(()=>{
        document.addEventListener("keydown", onKeyDown);
        return (() => {
            document.removeEventListener("keydown", onKeyDown, false);
        })
    }, [contextObj])

    const onRefresh = async function(){
        contextObj.user.getCurrentUser?.();

    }
    const onPrevUser = async function(){
        let prev = await contextObj.user.getPrevUser?.();
        if(prev)
        {
            contextObj.user.setActiveUser?.(prev.results[0]);
        }
    }
    const onNextUser = async function(){
        let next = await contextObj.user.getNextUser?.();
        if (next)
        {
            contextObj.user.setActiveUser?.(next.results[0]);
        }
    }


    const onKeyDown = async (event:any)=>{
        if (event.code === "ArrowRight"){
            onNextUser();
        } else if (event.code === "ArrowLeft"){
            onPrevUser();

        } else if (event.code === "Space" || event.code === "Enter"){
            contextObj.user.getCurrentUser?.();
        }
    }

    return (
        <section className="home-holder">
            <UserCard
                user={contextObj.user?.activeUser} 
                loading={contextObj.loading}
            />
            <RefreshButton
                label={t('refresh')}
                disable={contextObj.loading}
                loading={contextObj.loading}
                onClick={onRefresh}
            />

            <div className='help-bar'>
                <p>Use Arrow key to change user</p>
                <p>← to previus user</p>
                <p>→ to next user</p>
                <p>↵ to new user</p>
            </div>
        </section>);
}

export default Home;