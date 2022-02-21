import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
    chart: {
        showvalues: "1",
        showpercentintooltip: "0",
        numberprefix: "$",
        enablemultislicing: "1",
        theme: "fusion"
    },
    data: [
        {
            label: "Equity",
            value: "300000"
        },
        {
            label: "Debt",
            value: "230000"
        },
        {
            label: "Bullion",
            value: "180000"
        },
        {
            label: "Real-estate",
            value: "270000"
        },
        {
            label: "Insurance",
            value: "20000"
        }
    ]
};

export default function Chart() {
    return (
        <ReactFusioncharts
            type="pie3d"
            width="50%"
            height="50%"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    );
}
