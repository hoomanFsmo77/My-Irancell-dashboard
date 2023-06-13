import Chart from 'chart.js/auto';

const initChart = (labels:number[], data:number[], initElement:HTMLCanvasElement) => {

  const config = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: "#feeeb7",
        //   backgroundColor: "linear-gradient(88.37deg, #FDC816 8.3%, #FDC816 80.84%)",
          borderColor: "#fdc816",
          data: data,
          tension: 0.45,
          fill: true,
          borderWidth: 4,
          pointRadius: 0

        },
      ],
    },
    options: {
      plugins: {
        legend: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  };
  if(initElement){
    // @ts-ignore
    return new Chart(initElement, config as any)
  }
};

export default initChart