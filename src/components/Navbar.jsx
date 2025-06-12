import React from 'react'

import LOGO from "../assets/images/logo.jpg";
import ProfileInfo from './Cards/ProfileInfo';
import { useNavigate } from 'react-router-dom';

import SearchBar from './Input/SearchBar';
const Navbar = ({ userInfo ,
    searchQuery,
    setSearchQuery,
    onSearchNote, 
    handleClearSearch
 }) => {

    const isToken = localStorage.getItem("token");
    const navigate = useNavigate();

    const onLogout = () =>{
        localStorage.clear();
        navigate("/login");
    };

    const handleSearch= ()=>{
        if(searchQuery){
            onSearchNote(searchQuery);
        }
    };

    const onClearSearch=()=>{
        handleClearSearch();
        setSearchQuery("");
    };
    return(

        <div className= 'w-full bg-white flex items-center justify-between px-10 py-3 drop-shadow sticky top-0 z-10'>
            <img src={LOGO} alt="travel-story" className="h-32 w-auto"/>

            {isToken && userInfo && (
                <>
                <SearchBar
                    value={searchQuery}
                    onChange={({target})=>{
                        setSearchQuery(target.value);
                    }}

                    handleSearch = {handleSearch}
                    onClearSearch = {onClearSearch}
                    />
                <div className ="flex items-center gap-4">
                   <ProfileInfo userInfo = {userInfo} onLogout={onLogout}/>
                   
                </div>
                </>
                
            )}
        </div>
    )
}

export default Navbar