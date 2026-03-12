import { useEffect, useRef } from "react";
import * as d3 from "d3";

const mock = {
  nodes: [
    { id: "Company X", group: 1 },
    { id: "Promoter A", group: 2 },
    { id: "Company Y", group: 1 },
    { id: "Legal Case", group: 3 }
  ],
  links: [
    { source: "Promoter A", target: "Company X" },
    { source: "Promoter A", target: "Company Y" },
    { source: "Company Y", target: "Legal Case" }
  ]
};

export default function GraphView() {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 520;
    const height = 260;

    const simulation = d3
      .forceSimulation(mock.nodes as any)
      .force("link", d3.forceLink(mock.links as any).id((d: any) => d.id).distance(90))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append("g")
      .attr("stroke", "#CBD5E1")
      .selectAll("line")
      .data(mock.links)
      .enter()
      .append("line")
      .attr("stroke-width", 2);

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(mock.nodes)
      .enter()
      .append("circle")
      .attr("r", 18)
      .attr("fill", (d: any) => (d.group === 1 ? "#0FB98B" : d.group === 2 ? "#FFB454" : "#F25F5C"));

    const label = svg
      .append("g")
      .selectAll("text")
      .data(mock.nodes)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", 4)
      .attr("font-size", 10)
      .attr("fill", "#0B1220")
      .text((d: any) => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
      label.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y + 30);
    });

    return () => {
      simulation.stop();
    };
  }, []);

  return <svg ref={ref} width={520} height={260} />;
}
