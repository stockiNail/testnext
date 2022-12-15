import Head from 'next/head'
import Image from 'next/image'
import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend
} from 'chart.js';
import Annotation from 'chartjs-plugin-annotation';
import { Bar } from 'react-chartjs-2';

Chart.register(
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Annotation
);

const data = {
  labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
      label: 'Acquisitions by year',
      data: [10, 20, 15, 25, 22, 30, 28],
    }
  ]
};

const options = {
  animation: true,
  plugins: {
    legend: {
      display: true
    },
    tooltip: {
      enabled: true
    },
    annotation: {
      annotations: {
        box1: {
          type: 'box',
          xMin: 1,
          xMax: 2,
          yMin: 50,
          yMax: 70,
          backgroundColor: 'rgba(255, 99, 132, 0.25)',
        }
      }
    }
  }
}



export default function Home() {
  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  )
}
