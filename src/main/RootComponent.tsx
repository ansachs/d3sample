import * as React from 'react'
import * as d3 from 'd3'
import {pie} from "d3-shape";
import {Arc, color, DefaultArcObject, Pie, PieArcDatum, values} from "d3";

const chartContainerId = "chart-container";
const divisionRatio = 2;
const height = 400;
const width = 400;

interface IdataInterface {
    name: string,
    value: number,
}

const data = [{name: "Domestic Equity", value: 174031626},
    {name: "Lifecycle", value: 99734128},
    {name: "Other", value: 30984760},
    {name: "Bond", value: 22434483},
    {name: "International Equity", value: 21063260},
    {name: "Money Market", value: 11963073},
    {name: "Stable Value", value: 6816866},
    {name: "Specialty", value: 5786989},];


export class RootComponent extends React.Component {

    public componentDidMount(): void {
        this.renderChart();
    }

    public renderChart() {


        const pieGenerator = d3.pie<IdataInterface>()
            .sort(null)
            .value((d: IdataInterface) => d.value);

        const slice = pieGenerator(data); //generates data objects with beginning and ending angles

        const arc = d3.arc<any, PieArcDatum<IdataInterface>>()
            .outerRadius(200)
            .innerRadius(100);

        const arcOver = d3.arc().outerRadius(220).innerRadius(120);

        const chart = d3.select("#" + chartContainerId)
            .append("svg")  //append svg element inside #chart
                .attr("width", 400 )    //set width
                .attr("height", 400 )  //set height
            .append("g")
                .attr("transform", "translate(" + (width / divisionRatio) + "," + ((height / divisionRatio) + 30) + ")");

        const boundSvg = chart.selectAll(".arc") //binds data to svg elements, creating one for data value
            .data(slice)
            .enter().append("g")
            .attr("class", "arc");

        const a = boundSvg.append("path")
            .attr("d", arc)
            .attr("fill", d => "hsl(" + Math.random() * 360 + ",100%,50%)")


    }

    public render() {
        return <div id={chartContainerId}>hello</div>
    }
}