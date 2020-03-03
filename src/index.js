async function renderChart() {
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-gnsnapshot-nybbc"
  });

  const chart = sdk.createChart({
    chartId: "d40a8176-caa8-48db-af62-9390599cb281"
    // ,showAttribution: false
    // ,width: 800
    // ,height: 600
  });
  await chart.render(document.getElementById("chart"));

  $("#refresh").on("click", () => {
    chart.refresh();
  });
  $("#country-filter").on("change", e => {
    const country = e.target.value;
    country
      ? chart.setFilter({ "genres": country })
      : chart.setFilter({});
  });
}

renderChart().catch(e => window.alert(e.message));
