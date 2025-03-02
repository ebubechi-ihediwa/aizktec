import UploadData from "./upload-data";
import UsageMonitor from "./usage-monitor";

const DataContent = () => {
    return (
        <>
            <div className="w-full min-h-screen" >
                <div className="w-full " >
                    <h1 className=" text-gray-600 dark:text-white font-semibold text-center text-[28px]" >Data Rights Management</h1>
                </div>
                <div className="w-[100%] md:w-[90%] lg:w-[60%] mx-auto p-4 rounded-lg mt-[40px] dark:bg-[#121116] bg-gray-50  dark:border-[#29282a] border-[0.1px] " >
                    <p className=" text-[13.5px] md:text-[14px] lg:text-[18px] font-medium text-gray-600 dark:text-white  text-center">Upload your data, set permissions, and monitor usage with our advanced<br /> Zero-Knowledge system</p>
                </div>

                <UploadData />
                <UsageMonitor />
            </div>
        </>
    );
}

export default DataContent;