"use client"
import {
    FileDoneOutlined,
    FileSyncOutlined,
    InboxOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Collapse } from 'antd';
import { useRouter } from 'next/navigation';

export default function SideBar() {
    const router = useRouter();

    const handleClick = (path:string) => {
        router.push(path);
    };
    
    return (
        <div className="w-1/5 min-h-screen max-h-screen p-[20px]">
            <div className="flex items-center bg-white rounded-lg border-[0.1px] border-gray-300 p-[20px] mb-[20px]">
                <div className="w-[50px] h-[50px] bg-black" />
                <div className="ml-4">
                    <p className="text-lg">Agus</p>
                    <p className="text-sm text-gray-400">agus@gmail.com</p>
                </div>
            </div>
            <Collapse defaultActiveKey={['1']} ghost items={[{
                key: '1',
                label: 'Main Menu',
                children: 
                <div>
                    <div 
                        className="flex text-md text-gray-500 rounded-lg hover:bg-gray-200 p-[20px]"
                        onClick={() => handleClick('/new')}
                    >
                        <InboxOutlined className='mr-3' />
                        New
                    </div>
                    <div 
                        className="flex text-md text-gray-500 rounded-lg hover:bg-gray-200 p-[20px]"
                        onClick={() => handleClick('/on-progress')}
                    >
                        <FileSyncOutlined className='mr-3' />
                        On Progress
                    </div>
                    <div 
                        className="flex text-md text-gray-500 rounded-lg hover:bg-gray-200 p-[20px]"
                        onClick={() => handleClick('/finished')}
                    >
                        <FileDoneOutlined className='mr-3' />
                        Finished
                    </div>
                </div>,
            }]} />
            <div className="flex text-sm text-gray-500 rounded-lg hover:bg-gray-200 p-[20px]">
                <UserOutlined className='mr-3' />
                Members
            </div>
            <div className="flex text-sm text-gray-500 rounded-lg hover:bg-gray-200 p-[20px]">
                <SettingOutlined className='mr-3' />
                Settings
            </div>
        </div>
    );
}