import ApexCharts from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Performance = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'Instagram',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: 'Facebook',
                data: [11, 32, 45, 32, 34, 52, 41],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            toolbar: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            grid: {
                show: false,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z',
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        },
    });
    return (
        <div className='bg-white mx-6 mt-6 rounded-xl font-[Inter]'>
            <div className='flex justify-between items-center px-6 py-4 font-semibold text-lg border-[#EAECF0] border-b'>
                Performance
                <img src='dots.png' alt='' className='h-6' />
            </div>
            <div>
                <div>
                    <div id='chart'>
                        <ReactApexChart
                            options={chartData.options}
                            series={chartData.series}
                            type='area'
                            height={350}
                        />
                    </div>
                    {/* <div id='html-dist'></div> */}
                </div>
            </div>
        </div>
    );
};

export default Performance;
