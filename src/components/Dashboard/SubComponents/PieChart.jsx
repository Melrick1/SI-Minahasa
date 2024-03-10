import { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

Chart.register(ChartDataLabels);

const PieChart = ({answersLists}) => {
    const [optionCounts, setOptionCounts] = useState({
        'Sangat Setuju': 0,
        'Cukup Setuju': 0,
        'Netral': 0,
        'Kurang Setuju': 0,
        'Tidak Setuju': 0,
    });

    useEffect(() => {
        const answers = [].concat(...answersLists);

        if (answers && answers.length > 0) {
            const counts = answers.reduce((accumulator, count) => {
                accumulator[count] = (accumulator[count] || 0) + 1;
                return accumulator;
            }, {});
            
            //combines prevCounts to a new "counts"
            setOptionCounts(prevCounts => ({
                ...prevCounts,
                ...counts,
            }));
        }
    }, [answersLists]);

    useEffect(() => {
        console.log(optionCounts)
    }, [optionCounts]);

    const data = {
        labels: ['Sangat Setuju', 'Cukup Setuju', 'Netral', 'Kurang Setuju', 'Tidak Setuju'],
        datasets: [{
            label : 'answer',
            data: Object.values(optionCounts),
            backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0'], //['#10a326', '#48bf11', '#ebe302', '#eb910c', '#e31f05']
            borderColor: 'black',
            borderWidth: 1.5,
        }],
    };
    
    const options = {
        indexAxis: 'y',
        scales: {
            x: {
              display: false,
            },
            y: {
                display: false,
                ticks: {font: {
                    size: 16,       
                    weight: 'bold', 
                }}, 
            },
        },
        plugins: {
            legend: { 
                display: true,
                position: 'bottom',
                labels: {
                    color: 'black',
                },
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                font: {
                    size: 16,       
                    weight: 'bold', 
                },
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                    const percentage = ((value / total) * 100).toFixed(2);
                    return percentage > 0 ? `${percentage}%` : '';
                },
                color: 'black',
            }
        },
        layout: {
            padding: 28
        },
    };
    
    return (
        <div className='piechart'>
            <Pie data={data} options={options} />
        </div>
    )
};

export default PieChart;