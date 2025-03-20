
const UsageMonitor = () => {
    return (
        <>

            <div className=" w-full md:w-[90%] lg:w-[60%] mx-auto py-6 px-[32px] rounded-lg mt-[40px] dark:bg-[#121116] bg-gray-50 dark:border-[#29282a] border-[0.1px] " >
                <p className=" text-[18px] md:text-[20px] lg:text-[24px] font-medium text-gray-600 dark:text-white  text-center">Usage Monitor</p>


                <div className="w-full mt-[30px]" >
                    <p className=" text-[13px] md:text-[14px] font-medium text-gray-600 dark:text-white text-center" >Your data has been access 3 times in the last 30 daya</p>
                </div>
            </div>
        </>
    );
}

export default UsageMonitor;