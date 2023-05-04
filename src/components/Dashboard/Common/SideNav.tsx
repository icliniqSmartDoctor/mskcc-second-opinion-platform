import { Sidebar } from 'flowbite-react'
import * as CONSTANTS from 'constants/DashboardConstants';
import { isLoggedIn } from 'stores/authStore'
import { Cookies } from 'react-cookie'


type SideNavProp = {
    activeMenu:  'home' | 'cases' | 'messages' | 'account';
}

function SideNav({ activeMenu }: SideNavProp) {

    const logout = () => {
        const cookies = new Cookies();
        cookies.remove('session', { path: '/' });
        isLoggedIn.set(false)
    }
    
    return (
        <>
            <Sidebar className='z-0  h-screen pt-24 border-r-2 border-slate-200 !w-32 fixed' aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup  >

                        {CONSTANTS.SIDEMENU.map(data => {
                            return (
                                <Sidebar.Item
                                    href={`/dashboard/${data.title.toLowerCase()}/`}
                                    className={`flex flex-col h-20 pt-4 justify-center hover:bg-blue-100 ${activeMenu.toLowerCase() === data.title.toLowerCase() ? 'bg-blue-100' : ''}`}
                                    id={data.title.toLowerCase()}
                                    key={data.title}
                                >
                                    <div className='flex flex-col items-center '>
                                        <div className={` h-10 w-10 flex items-center justify-center rounded-full ${activeMenu.toLowerCase() === data.title.toLowerCase() ? ' bg-white' : 'bg-gray-200	'}  `}>
                                            <i className={` ${data.icon} ' text-sm '  ${activeMenu.toLowerCase() === data.title.toLowerCase() ? ' text-blue-500' : ''}`}></i>
                                        </div>
                                        <span className='text-sm pt-1'>{data.title}</span>
                                    </div>
                                </Sidebar.Item>
                            )
                        })}


                    </Sidebar.ItemGroup>
                </Sidebar.Items>
                <div className='flex flex-col items-center justify-center absolute bottom-24 left-0 right-0'>
             
                    <i className="text-2xl cursor-pointer fa fa-question-circle"></i>
                    <a href='/login'><i onClick={() => logout()} className="fa fa-sign-out text-xl mt-6 hover:text-red-500 cursor-pointer"></i></a>
                </div>
            </Sidebar>
        </>
    )
}

export default SideNav