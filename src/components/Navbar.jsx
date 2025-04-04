import React, { useCallback, useState } from "react";
import CustomButton from "./CustomButton";
import { menu, search } from "../assets";
import { usePrivy } from "@privy-io/react-auth";
import { IconHeartHandshake } from "@tabler/icons-react" ;

const Navbar = () => {

       const {ready , authenticated , login , user , logout} = usePrivy()
       const [ ToggleDrawer, setToggleDrawer]= useState(false) ;
        console.log("user info" , user);
       const handleLoginLogout = useCallback(()=>{
             if(authenticated) {
                logout();
             } else{
                login().then(() => {
                    if(user){
                        console.log(user);
                        //fetch user 
                    }
                })
             }

       } , [authenticated , login , logout , user ])

     return (
       <div className="mb-[35px] flex flex-col-reverse justify-between gap-6 md:flex-row " >
       {/* searchbar */}
        <div className="flex h-[52px] max-w-[458px] flex-row
         rounded-[100px] bg-[#1c1c24] py-2 pl-4 pr-2 lg:flex-1
        ">
        <input
            type="text"
            placeholder="search for records"
            className="flex w-full bg-transparent font-epilogue text-[14px] font-normal text-white outline-none placeholder:text-[#4b5264]"
        />

        <div className="flex h-full w-[72px] cursor-pointer items-center justify-center rounded-[20px] bg-[#4acd8d]">
          <img

            src={search}
            alt="search"
            className="h-[15px] w-[15px] object-contain"
          />
            
        </div>

        </div>

          <div className="hidden flex-row justify-end gap-2 sm:flex">
             <CustomButton
                btnType={'button'}
                title={authenticated ? 'Logout' : 'Login'}
                styles={authenticated ? 'bg-[#1dc071]' : 'bg-[#8c6dfd'}
                handleClick={handleLoginLogout}

              />

            </div>

                <div className="relative flex items-center justify-between sm:hidden">
                    
                    <div className="flex h-[40px] cursor-pointer items-center justify-center ronded-[10px] bg-[#2c2f32]">
                      <IconHeartHandshake size={40} color='#1ec070' className="p-2"/>

                    </div>
                     <img src={menu} alt="menu" 
                      className="h-[34px] w-[34px] cursor-pointer object-contain"
                      onClick={()=>{ setToggleDrawer((prev)=>!prev);
                      }}
                     />

                       <div className={'absolute left-0 right-0 top-[60px] z-10 bg-[#1c1c24] py-4 shadow-secondary'}>

                       </div>
                </div>
                                   
       </div>
    );
};

export default Navbar ;