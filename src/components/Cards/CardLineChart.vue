<template>
  <div
    class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg bg-blueGray-700"
  >
    <div class="px-4 py-3 mb-0 bg-transparent rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex-1 flex-grow w-full max-w-full">
          <h6 class="mb-1 text-xs font-semibold uppercase text-blueGray-100">
            Overview
          </h6>
          <h2 class="text-xl font-semibold text-white">
            Sales value
          </h2>
        </div>
      </div>
    </div>
    <div class="flex-auto p-4">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      productionRecords: [],
      loading: true,
      error: null,
      showForm: false,
      salesData  : [
        {
          month: "January",
          sales: 65,
        },
        {
          month: "February",
          sales: 78,
        },
        {
          month: "March",
          sales: 66,
        },
        {
          month: "April",
          sales: 44,
        },
        {
          month: "May",
          sales: 56,
        },
        {
          month: "June",
          sales: 67,
        },
        {
          month: "July",
          sales: 75,
        },
        {
          month: "August",
          sales: 65,
        },
        {
          month: "September",
          sales: 78,
        },
        {
          month: "October",
          sales: 66,
        },
        {
          month: "November",
          sales: 44,
        },
      ]
    };
  },
  mounted: function () {
    console.log(this.salesData.sales)
    this.$nextTick(function () {
      var config = {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: new Date().getFullYear(),
              backgroundColor: "#4c51bf",
              borderColor: "#4c51bf",
              data: [this.salesData.sales],
              fill: false,
            },
            {
              label: new Date().getFullYear() - 1,
              fill: false,
              backgroundColor: "#fff",
              borderColor: "#fff",
              data: [40, 68, 86, 74, 56, 60, 87],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Sales Charts",
            fontColor: "white",
          },
          legend: {
            labels: {
              fontColor: "white",
            },
            align: "end",
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white",
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white",
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "rgba(255, 255, 255, 0.15)",
                  zeroLineColor: "rgba(33, 37, 41, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };
      var ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
    });
  },
};
</script>
