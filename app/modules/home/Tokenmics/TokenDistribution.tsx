import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function TokenDistribution({isActive}:any) {
  const colors = ['#5F6A86', '#C305C3', '#A15DF9', '#94D3BC', '#451FDD'];
  const DataList = [
    { value: 1048, name: 'Game Rewards' },
    { value: 735, name: 'Development' },
    { value: 580, name: 'Marketing & Partnerships' },
    { value: 484, name: 'Liquidity Pool' },
    { value: 300, name: 'Team & Advisors' }
  ];
  const option:any = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      show: false,
      top: '5%',
      left: 'center',
      textStyle: {
        color: '#fff',
      },
    },
    series: [
      {
        // name: 'Token Distribution',
        type: 'pie',
        radius: ['15%', '80%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        animation: true,
        itemStyle: {
          borderRadius: 10,
          color: (params:any) => {
            return colors[params.dataIndex]; // 根据数据索引返回对应颜色
          },
        },
        label: {
          show: true,
          position: 'inside',
          color: '#fff',
          formatter: '{c}',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true
        },
        data: DataList
      }
    ]
  };

  return (
    <div className={`gradient-border ${isActive ? 'g-none' : ''}`} >
      <div className='content-gb text-white '>
        <div className="flex">
          <div className='w-full text-[20px] leading-[24px] sm:text-[40px] sm:leading-[48px]'>Token Distribution</div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='w-1/2'>
            {/* 渲染颜色条和名称 */}
            {DataList.map((item, index) => (
              <div key={index} className='flex items-center mb-2'>
                <div
                className='rounded-full sm:w-[20px] sm:h-[20px] w-[10px] h-[10px]'
                  style={{
                    backgroundColor: colors[index],
                    marginRight: '10px',
                  }}
                />
                <span className='sm:ml-[26px] text-[7px] leading-[9px] sm:text-[15px] sm:leading-[18px]'>{item.name}</span>
              </div>
            ))}
          </div>
          <div className='w-1/2'> {/* 调整图表大小 */}
            <ReactECharts option={option} className='!h-[150px] sm:h-[auto]'/>
          </div>
        </div>
      </div>
    </div>
  );
}