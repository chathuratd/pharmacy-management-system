import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import logo from '../images/logo.png';

import HomeIcon from '@mui/icons-material/Home';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ReorderIcon from '@mui/icons-material/Reorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SalesHistoryIcon from '@mui/icons-material/History';
import NewSaleIcon from '@mui/icons-material/AddShoppingCart';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const [showPosMenu, setShowPosMenu] = useState(false);

    const handleClick = () => {
        logout();
    }

    const togglePosMenu = () => {
        setShowPosMenu(!showPosMenu);
    }

    return (
        <header>


<div className="fixed flex flex-col top-0 left-0 w-64 bg-dark-blue h-full text-white mr-2 px-4 py-1 font-jakarta">
    
    <img src={logo} alt="Logo" className='w-44 py-8 mx-auto'/>
    
    <div className="text-sm border-t-2 pt-6 border-blue-button">
        <Link to="/">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <HomeIcon/>
                <h1 className='ps-1 my-auto'>Home</h1>
            </div>
        </Link>
        <Link to="/inventory">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <RemoveCircleIcon/>
                <h1 className='ps-1 my-auto'>Inventory</h1>
            </div>
        </Link>
        <Link to="/loyalty">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <LoyaltyIcon/>
                <h1 className='ps-1 my-auto'>Loyalty</h1>
            </div>
        </Link>
        <Link to="/reorder">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <ReorderIcon/>
                <h1 className='ps-1 my-auto'>Reorder</h1>
            </div>
        </Link>
        <Link to="/expired">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <AccessTimeIcon/>
                <h1 className='ps-1 my-auto'>Expired Drugs</h1>
            </div>
        </Link>
        <Link to="/abtexpired">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <RemoveCircleIcon/>
                <h1 className='ps-1 my-auto'>About To Expire Drugs</h1>
            </div>
        </Link>
        <Link to="/prescription">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <MedicationOutlinedIcon/>
                <h1 className='ps-1 my-auto'>Prescriptions</h1>
            </div>
        </Link>
        <Link to="/staffReward">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <MedicationOutlinedIcon/>
                <h1 className='ps-1 my-auto'>Handled order Details</h1>
            </div>
        </Link>
        <Link to="/outofstock">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <MedicationOutlinedIcon/>
                <h1 className='ps-1 my-auto'>OutOfStock</h1>
            </div>
        </Link>
        <Link to="/abtoutofstock">
            <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                <MedicationOutlinedIcon/>
                <h1 className='ps-1 my-auto'>AboutToOutOfStock</h1>
            </div>
        </Link>

        {/* //CHAMESHA POS */}
        
        <div className='flex my-3 hover:bg-blue-button hover:shadow-xl hover:transition-all px-3 py-1 rounded-md'>
                        <PointOfSaleIcon onClick={togglePosMenu}  />
                        <div className='ml-2 flex flex-col' style={{ marginTop: '2px'}}>
                            <h1 className='my-auto'>POS</h1>
                            {showPosMenu && (
                                <React.Fragment>
                                    <Link to="/new-sale" className='my-auto'>
                                        <NewSaleIcon style={{ marginRight: '10px'}}/>
                                        New Sale
                                    </Link>
                                    <Link to="/billing" className='my-auto'>
                                        <SalesHistoryIcon style={{ marginRight: '10px'}} />
                                        Sales History
                                    </Link>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
    </div>
    
</div>

<nav className="flex justify-end bg-dark-blue-2 h-10 items-end text-sm">
    {user &&(
    <div>
        <span>{user.email}</span>
        <button onClick={handleClick}>Logout</button>
    </div>
    )}
    
    {!user && (
    <div className='flex my-auto'>
        <div className='bg-login1 hover:bg-login2 hover:text-white mr-2 px-4 py-1 rounded-lg font-jakarta font-semibold cursor-pointer hover:transition-all'><Link to="/login">Login</Link></div>
        <div className='bg-signup1 hover:bg-signup2 hover:text-white mr-2 px-4 py-1 rounded-lg font-jakarta font-semibold cursor-pointer hover:transition-all'><Link to="/signup">Signup</Link></div>   
    </div>
    )}
</nav>
</header>
)
}

export default Navbar;








