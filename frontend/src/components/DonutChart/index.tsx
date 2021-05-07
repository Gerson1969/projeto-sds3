import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'types/Sale';
import { useEffect, useState } from 'react';

type ChartData = {
    labels: string[],
    series: number[]
}

const DonutChart = () => {

    //FORMA ERRADA
    //a chamada é assincrona e precisa especificar a funçao para rodar quando tiver sucesso
    // neste formato não da tempo dos dados serem apresentados e o grafico é apresentado vazio
    //isso também faz entrar em looping infinito, pois cada vez que setChart exetuta o componente vai reinderizar 
    //e passa por aqui novamente
    //useEffect resolve o problema e só roda novamente quando os dados forem diferentes
    //let chartData: ChartData = { labels: [], series: [] };

    //FORMACERTA
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() =>{
        axios.get(`${BASE_URL}/sales/amount-by-seller`) //qui é crase, não é aspas simples
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
            setChartData({ labels: myLabels, series: mySeries });
        }
        )
    }, [])

    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;