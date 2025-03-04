"use client"
import { useState } from "react";
import { Button } from "../ui/button";

const UploadData = () => {
    const [file, setFile] = useState<File | null>(null);

    const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFile(files[0]);
        }
    };

    return (
        <>
            <div className="w-full md:w-[90%] lg:w-[60%] mx-auto py-6 px-[32px] rounded-lg mt-[40px] dark:bg-[#121116] bg-gray-50 dark:border-[#29282a] border-[0.1px]">
                <p className="text-[18px] md:text-[20px] lg:text-[24px] font-medium text-gray-600 dark:text-white text-center">
                    Upload Data
                </p>

                <div className="w-full mt-[20px]">
                    <p className="text-[14px] font-semibold lg:text-[18px] text-gray-600 dark:text-white">
                        Upload your data
                    </p>
                    <label htmlFor="file-input">
                        <div className="w-[300px] lg:w-1/2 mt-[20px] rounded-lg p-3 cursor-pointer dark:bg-[#121116] bg-gray-50 border-[#29282a] border-[0.1px]">
                            <p className="text-[12px] lg:text-[14px] cursor-pointer font-medium text-gray-600 dark:text-white">
                                {file ? file.name : "Choose File - No file chosen"}
                            </p>
                        </div>
                        <input type="file" className="hidden" id="file-input" onChange={fileHandler} />
                    </label>

                    <div className="w-full mt-[30px]">
                        <p className="text-[18px] md:text-[20px] lg:text-[24px] font-medium text-gray-600 dark:text-white text-center">
                            Set Permissions
                        </p>

                        <div className="w-full mt-[20px]">
                            <div className="w-full flex items-center justify-center gap-3">
                                <input type="checkbox" className="border-white rounded-lg" />
                                <p className="text-[12px] lg:text-[14px] cursor-pointer font-medium text-gray-600 dark:text-white">
                                    Allow AI processing
                                </p>
                            </div>
                            <div className="w-full flex items-center justify-center gap-3 mt-2">
                                <input type="checkbox" className="border-white rounded-lg" />
                                <p className="text-[12px] lg:text-[14px] cursor-pointer font-medium text-gray-600 dark:text-white">
                                    Allow third-party access
                                </p>
                            </div>

                            <Button className="mx-auto mt-[24px] flex self-center">Save Settings</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadData;
