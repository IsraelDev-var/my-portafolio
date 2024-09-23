import { useState } from "react"
import ShowMenu from "./ShowMenu"


const Nav = () => {
    const [isShowMenu, setIsShowMenu] = useState(true)

    const handleShowMenu = ()=> {
        if(isShowMenu){
            setIsShowMenu(false)
            
        }else{
            setIsShowMenu(true)
            
        }
        
    }


return (
    <header className="header  fixed w-[100%]  "  id="header">
            <nav className=" nav__menu flex sticky   p-2 justify-between items-center ">
        {isShowMenu ?
        <a href="#home">
            <div className="flex m-10 gap-2 items-center">
            {/* <div className="bg-black m-[10px] h-[45px]  w-[40px] p-2 flex items-center justify-center  rounded-[100%]">
                <i className="logo text-white ">ivc</i>
                
            </div>  */}
            <span>
                    <h2 className="icon_h2 text-3xl">IVC</h2>
                </span>
            </div>
            
        </a>
            : " "
        }
        

        <div> 
        
        
        { isShowMenu ? <i onClick={handleShowMenu} className='bx m-1 p-2 bx-menu  '></i> :
            <ShowMenu  handleShowMenu={handleShowMenu} />
        }

        </div>

        
    </nav>
    </header>

)
}
export default Nav