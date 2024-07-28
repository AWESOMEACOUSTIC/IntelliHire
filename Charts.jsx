import React from 'react';
import { BarChart } from '@mui/x-charts';
import { withTheme } from '@emotion/react';
import { styled } from '@mui/material/styles';

function MyBarChart() {
  // Sample data for all months (you should replace this with your actual data)
  const dataset = [
    { month: 'Jan', students: 25, },
    { month: 'Feb', students: 32 },
    { month: 'Mar', students: 91 },
    { month: 'Apr', students: 80 },
    { month: 'May', students: 42 },
    { month: 'June', students: 55 },
    { month: 'July', students: 78 },
    { month: 'Aug', students: 69 },
    { month: 'Sept', students: 38 },
    { month: 'Oct', students: 60 },
    { month: 'Nov', students: 55 },
    { month: 'Dec', students: 48 },
  ];

  // Configuration for the bar chart
  const yAxis = [{ scaleType: 'band', dataKey: 'month' }];
  const series = [{ dataKey: 'students', label: 'Candidates Selected', color : '#1e88e5' }];
  const chartSetting = {
    layout: 'horizontal',
    textColor: 'white',
    // Other chart settings here
  };
  const StyledBarChart = styled(BarChart)(({ theme }) => ({
    color: 'white', // Set the text color to white
  }));

  return (
    <div className='featured flex-1 shadow-md p-2 ml-9 border-4 border-[color:var(--Stroke-Color,#EFF0F6)] rounded-3xl border-solid w-[450px] h-[450px]'>
        
        <BarChart
      dataset={dataset}
      yAxis={yAxis}
      series={series}
      {...chartSetting}
      colors={withTheme}
      tex
    />
        
    </div>
  );
};

export default MyBarChart;
