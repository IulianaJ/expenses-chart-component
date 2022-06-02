const myChart = document.getElementById("myChart").getContext("2d");

const chartData = async () => {
  try {
    const response = await fetch("data.json");
    return await response.json();
  } catch (err) {
    console.log("Promise rejected", err);
  }
};

chartData().then((data) => {
  const days = [];
  const amount = [];

  for (let i = 0; i < data.length; i++) {
    days.push(data[i].day);
    amount.push(data[i].amount);
  }

  const barChart = new Chart(myChart, {
    type: "bar",
    data: {
      labels: days,
      datasets: [
        {
          label: "",
          data: amount,
          backgroundColor: [
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(186, 34%, 60%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
          ],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            borderColor: "hsl(33, 100%, 98%)",
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            borderColor: "hsl(33, 100%, 98%)",
          },
        },
      },
    },
  });
});
