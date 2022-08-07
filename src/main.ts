import Utils from './Utils';
import { Chart, ChartConfiguration, ChartData, LineElement, LineController, CategoryScale, LinearScale, PointElement } from 'chart.js'
Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement)

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 }

const data: ChartData = {
  labels: Utils.months({ count: 7 }),
  datasets: [{
    type: 'line',
    data: Utils.numbers(NUMBER_CFG),
    borderColor: Utils.CHART_COLORS.red
  }]
};

const config: ChartConfiguration = {
  type: 'line',
  data
};

const $myChart = document.getElementById('myChart') as HTMLCanvasElement;
if ($myChart) {
  new Chart($myChart, config);
}
