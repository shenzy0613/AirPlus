var margin = {top: 15, right: 10, bottom: 10, left: 0},
    width = $("#figure1").width() - margin.left - margin.right,
    height = 150 - margin.top - margin.bottom;

drawNewVis("total_data.csv","raw_data.csv");

function drawNewVis(file1,file2){
	d3.csv(file1, function(data) {
	  var datatotal = data.map(function(d) { return [+d["Lowest Price"], d["From"], d["To"], d["Earliest Departure"], d["Latest Arrival"] ]; });

	  var x = d3.time.scale()
	    .domain([new Date(datatotal[0][3]), new Date(datatotal[0][4])])
	    .range([0, width]);

	  var xAxis = d3.svg.axis()
	      .scale(x)
	      .orient("top")
	      .ticks(d3.time.hour, 3)
	      .tickFormat(d3.time.format('%H:%M'));

	  var tip = d3.tip()
	    .attr('class', 'd3-tip')
	    .offset([120, 0])
	    .html(function(d) {
	      var departHours = (new Date(d[4])).getHours();
	      var departMinutes = (new Date(d[4])).getMinutes();
	      var arriveHours = (new Date(d[5])).getHours();
	      var arriveMinutes = (new Date(d[5])).getMinutes();

	      if(departMinutes<10)
	        var departMinutesString = '0' + departMinutes;
	      else
	        var departMinutesString = departMinutes;

	      if(arriveMinutes<10)
	        var arriveMinutesString = '0' + arriveMinutes;
	      else
	        var arriveMinutesString = arriveMinutes;

	      return "Flight Number:&nbsp; <span style='color:yellow;float:right;'>" +  d[0] + "</span><br>"
	              +"Depart time: <span style='color:yellow;float:right;'>" + departHours +":"+departMinutesString + "</span><br>"
	              +"Arrive time: <span style='color:yellow;float:right;'>" + arriveHours +":"+arriveMinutesString + "</span><br>"
	              +"Aircraft type: <span style='color:yellow;float:right;'>" + d[6] + "</span><br>";
	  })

	  var space=[new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400")];

	  var svg = d3.select("#figure1").append("svg")
	      .attr("width", width + margin.left + margin.right)
	      .attr("height", height + margin.top + margin.bottom)
	      .attr("id", "d3-plot")
	      .append("g")
	      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	  svg.call(tip);

	  d3.csv(file2, function(data) {
	    var dataset = data.map(function(d) { return [ d["Flight Number"], +d["Price"], d["From"], d["To"], d["Departure"], d["Arrival"], d["Aircraft Type"] ]; });

	    for(i=0;i<dataset.length;i++) {
	      if ( (new Date(dataset[i][4]).getTime() - space[0].getTime()) > 0 ) {
	        dataset[i][7] = 0;
	        space[0] = new Date((new Date(dataset[i][5])).getTime()+600000);
	      }
	      else if( (new Date(dataset[i][4]).getTime() - space[1].getTime()) > 0 ) {
	        dataset[i][7] = 1;
	        space[1] = new Date((new Date(dataset[i][5])).getTime()+600000);
	      }
	      else if( (new Date(dataset[i][4]).getTime() - space[2].getTime()) > 0 ) {
	        dataset[i][7] = 2;
	        space[2] = new Date((new Date(dataset[i][5])).getTime()+600000);
	      }
	      else if( (new Date(dataset[i][4]).getTime() - space[3].getTime()) > 0 ) {
	        dataset[i][7] = 3;
	        space[3] = new Date((new Date(dataset[i][5])).getTime()+600000);
	      }
	    }

	    svg.selectAll('.chart')
	      .data(dataset)
	      .enter().append('rect')
	      .attr('class', 'bar')
	      .attr('x', function(d) { return x(new Date(d[4])) })
	      .attr('y', function(d) { return margin.top+10+d[7]*30})
	      .attr('height', 25)
	      .attr('width', function(d) {return (x(new Date(d[5]))-x(new Date(d[4])))})
	      .style("fill", function(d) {
	        if(d[1]==datatotal[0][0]){
	          return "#5EB72A";
	        }
	        else 
	          return "#CCCCCC";
	      })
	      .on('mouseover', tip.show)
	      .on('mouseout', tip.hide)
	    svg.selectAll('.chart')
	      .data(dataset)
	      .enter().append('text')
	      .attr({
	          'x': function(d) { return x(new Date(d[4]))+3},
	          'y': function(d) { return margin.top+27+d[7]*30},
	          'class': 'legend-label'
	      })
	      .text(function(d) {return "$"+d[1]});
	    
	    svg.append('g')
	      .attr('class', 'x axis')
	      .attr('transform', 'translate(0, ' +  margin.top + ')')
	      .call(xAxis);
	  });
	});
}



  d3.selectAll(".axis path")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges")

  d3.selectAll(".axis line")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges")