'use client';
import { FilterOutlined, MoreOutlined, PlusOutlined, UserAddOutlined } from '@ant-design/icons';
import type { CollapseProps, TableProps } from 'antd';
import { Button, Collapse, Table } from 'antd';
import React from 'react';

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
`;

interface DataType {
  key: React.Key;
  taskName: string;
  description: string;
  estimation: string;
  type: number;
  pic: string;
  priority: number;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Task Name',
    dataIndex: 'taskName',
    key: 'taskName',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Estimation',
    dataIndex: 'estimation',
    key: 'estimation',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type:number) => {
      if (type == 1) {
        return <div className='bg-red-300 px-[10px] text-white rounded-lg'>Finance</div>
      } else if (type == 2) {
        return <div className='bg-yellow-300 px-[10px] text-white rounded-lg'>Operation</div>
      } else {
        return <div className='bg-green-300 px-[10px] text-white rounded-lg'>Marketing</div>
      }
    },
  },
  {
    title: 'PIC',
    dataIndex: 'pic',
    key: 'pic',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type:number) => {
      if (type == 1) {
        return <div className='bg-red-700 px-[10px] text-white rounded-lg'>High</div>
      } else if (type == 2) {
        return <div className='bg-yellow-700 px-[10px] text-white rounded-lg'>Medium</div>
      } else {
        return <div className='bg-blue-700 px-[10px] text-white rounded-lg'>Low</div>
      }
    },
  },
  {
    title: '',
    key: 'key',
    render: (value) => {
      return <MoreOutlined />
    },
  },
];


const TaskList: React.FC<{data:DataType[]}> = ({ data }) => {
  return <Table columns={columns} dataSource={data} pagination={false} />
};

export default function Home() {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'New',
      children: <TaskList 
        data = {
          [
            {
              key: '1',
              taskName: 'Document 1',
              description: text,
              estimation: 'Feb 1, 2024 - Feb 28, 2024',
              type: 1,
              pic: 'Agus',
              priority: 3,
            },
            {
              key: '2',
              taskName: 'Document 2',
              description: text,
              estimation: 'Mar 1, 2024 - Mar 28, 2024',
              type: 3,
              pic: 'Dodi',
              priority: 1,
            },
            {
              key: '3',
              taskName: 'Document 3',
              description: text,
              estimation: 'Apr 1, 2024 - Apr 28, 2024',
              type: 2,
              pic: 'Jason',
              priority: 2,
            },
          ]
        } />,
    },
    {
      key: '2',
      label: 'On Progress',
      children: <TaskList 
        data = {
          [
            {
              key: '1',
              taskName: 'Document 1',
              description: text,
              estimation: 'Feb 1, 2024 - Feb 28, 2024',
              type: 1,
              pic: 'Agus',
              priority: 3,
            },
            {
              key: '2',
              taskName: 'Document 2',
              description: text,
              estimation: 'Mar 1, 2024 - Mar 28, 2024',
              type: 3,
              pic: 'Dodi',
              priority: 1,
            },
            {
              key: '3',
              taskName: 'Document 3',
              description: text,
              estimation: 'Apr 1, 2024 - Apr 28, 2024',
              type: 2,
              pic: 'Jason',
              priority: 2,
            },
          ]
        } />,
    },
    {
      key: '3',
      label: 'Finished',
      children: <TaskList 
        data = {
          [
            {
              key: '1',
              taskName: 'Document 1',
              description: text,
              estimation: 'Feb 1, 2024 - Feb 28, 2024',
              type: 1,
              pic: 'Agus',
              priority: 3,
            },
            {
              key: '2',
              taskName: 'Document 2',
              description: text,
              estimation: 'Mar 1, 2024 - Mar 28, 2024',
              type: 3,
              pic: 'Dodi',
              priority: 1,
            },
            {
              key: '3',
              taskName: 'Document 3',
              description: text,
              estimation: 'Apr 1, 2024 - Apr 28, 2024',
              type: 2,
              pic: 'Jason',
              priority: 2,
            },
          ]
        } />,
    },
  ];

  const allKeys = items.map(item => item.key).filter(key => key !== undefined) as string[];

  return (
    <main className="flex-grow m-[20px] bg-white rounded-lg border-[0.1px] border-gray-300">
      <div className="border-b-[0.5px] border-gray-300 p-[20px] mb-[10px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[36px]">Tasma Bank Ina</h1>
          <Button icon={<UserAddOutlined />}>Invite</Button>
        </div>
        <div className="flex items-center justify-end">
          <Button icon={<FilterOutlined />}>Filter</Button>
          <div className="w-[10px]" />
          <Button type="primary" icon={<PlusOutlined />}>New Task</Button>
        </div>
      </div>
      <div className='p-[20px]'>
        {
          items.map((item) => 
            <div className='mb-[20px]'>
              <Collapse items={[item]} defaultActiveKey={allKeys} />
            </div>
          )
        }
      </div>
    </main>
  );
}
