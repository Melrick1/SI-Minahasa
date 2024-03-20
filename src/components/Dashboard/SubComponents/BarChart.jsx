import { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

Chart.register(ChartDataLabels);

const BarChart = ({ questionNumber, answersLists }) => {
    const [optionCounts, setOptionCounts] = useState({
        'Sangat Setuju': 2,
        'Cukup Setuju': 4,
        'Netral': 5,
        'Kurang Setuju': 3,
        'Tidak Setuju': 10,
    });

    useEffect(() => {
        const answers = answersLists[questionNumber - 1];

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
        // If at least one count is not zero, it logs
        if (Object.values(optionCounts).some(count => count !== 0)) {
            console.log(`Question-${questionNumber}:`, optionCounts);
        }
    }, [optionCounts]);

    const data = {
        labels: ['Sangat Setuju', 'Cukup Setuju', 'Netral', 'Kurang Setuju', 'Tidak Setuju'],
        datasets: [{
            label : 'answer',
            data: Object.values(optionCounts),
            backgroundColor: '#0096C7',
            borderColor: '#0F4D6E',
            borderWidth: 2,
        }],
    };
    
    const options = {
        indexAxis: 'y',
        scales: {
            x: {
              display: false,
              grid: { display: false }, 
            },
            y: {
                grid: { display: false },
                ticks: {font: {
                    size: 16,       
                    weight: 'bold', 
                }}, 
            },
        },
        plugins: {
            legend: { display: false },
            datalabels: {
                anchor: 'end',
                align: 'end',
                font: {
                    size: 16,       // Set the font size
                    weight: 'bold', // Set the font weight (e.g., 'normal', 'bold')
                },
            }
        },
        aspectRatio: 5/2,
        layout: {
            padding: {
                right: 26, // Adjust top padding for the chart container
            },
        },
    };
    
    return (
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    )
};

export default BarChart;