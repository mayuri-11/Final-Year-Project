import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import { MdRestaurantMenu } from 'react-icons/md';
import MenuContainer from '../components/menu/MenuContainer';
import CartInfo from '../components/menu/CartInfo';
import CustomerInfo from '../components/menu/CustomerInfo';
import Bill from '../components/menu/Bill';
import { useSelector } from 'react-redux';


const Menu = () => {
    const customerData = useSelector(state => state.customer);

    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
            {/* Left Div */}
            <div className='flex-[3]' >
                {/* Header Section */}
                <div className='flex items-center justify-between px-10 py-4'>
                    <div className='flex items-center gap-4'>
                        <BackButton />
                        <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>
                            Menu
                        </h1>
                    </div>

                    {/* Category/Filter Section */}
                    <div className='flex items-center justify-around gap-4'>
                        <div className="flex items-center gap-4">

                            <div className="flex items-center gap-3 cursor-pointer">
                            <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
                            <div className="flex flex-col items-start">
                                <h1 className="text-md text-[#f5f5f5] font-semibold">{customerData.customerName || "Customer Name"}</h1>
                                <p className="text-xs text-[#ababab] font-medium">{customerData.tableNo || "N/A"}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <MenuContainer/>
                
            </div>

            <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[710px] rounded-lg pt-2 flex flex-col">
                {/* Customer Info */}
                <CustomerInfo />
                <hr className="bg-[#2a2a2a] border-t-1" />

                {/* Cart items (Scrollable area) */}
                <div className="flex-1 overflow-y-auto px-2 scrollbar-hide">
                    <CartInfo />
                </div>

                <hr className="bg-[#2a2a2a] border-t-1" />

                {/* Bill  */}
                
                <div className="bg-[#1a1a1a] sticky bottom-0 pb-3">
                    <Bill />
                </div>
                
            </div>
            <BottomNav />
        </section>
    )
}

export default Menu;