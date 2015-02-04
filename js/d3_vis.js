var margin = {top: 15, right: 10, bottom: 10, left: 0},
    width = $("#figure1").width() - margin.left - margin.right,
    height = 260 - margin.top - margin.bottom;

	d3.csv("total_data.csv", function(data) {
	  var datatotal = data.map(function(d) { return [+d["Lowest Price"], d["From"], d["To"], d["Earliest Departure"], d["Latest Arrival"], d["Date"] ]; });

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
	    .offset([145, 0])
	    .html(function(d) {
	      var departHours = (new Date(d[5])).getHours();
	      var departMinutes = (new Date(d[5])).getMinutes();
	      var arriveHours = (new Date(d[6])).getHours();
	      var arriveMinutes = (new Date(d[6])).getMinutes();

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
	              +"Aircraft type: <span style='color:yellow;float:right;'>" + d[7] + "</span><br>"
	              +"Price: <span style='color:yellow;float:right;'>$" + d[2] + "</span><br>";
	  })

	  var space=[new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400"),
	  			 new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400"),
	  			 new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400"),
	  			 new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400"),
	  			 new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400"),
	  			 new Date("2000-01-01T00:00-0400"),new Date("2000-01-01T00:00-0400")];

	  var svg = d3.select("#figure1").append("svg")
	      .attr("width", width + margin.left + margin.right)
	      .attr("height", height + margin.top + margin.bottom)
	      .attr("id", "d3-plot")
	      .append("g")
	      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	  svg.call(tip);

	  

	  d3.csv("raw_data.csv", function(data) {
	    var dataset = data.map(function(d) { return [ d["Flight Number"], d["Date"], +d["Price"], d["From"], d["To"], d["Departure"], d["Arrival"], d["Aircraft Type"] ]; });

	    for(i=0;i<dataset.length;i++) {
	    	if(dataset[i][1] == datatotal[0][5]){
	    		if ( (new Date(dataset[i][5]).getTime() - space[0].getTime()) > 0 ) {
			        dataset[i][8] = 0;
			        space[0] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
			      else if( (new Date(dataset[i][5]).getTime() - space[1].getTime()) > 0 ) {
			        dataset[i][8] = 1;
			        space[1] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
			      else if( (new Date(dataset[i][5]).getTime() - space[2].getTime()) > 0 ) {
			        dataset[i][8] = 2;
			        space[2] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
			      else if( (new Date(dataset[i][5]).getTime() - space[3].getTime()) > 0 ) {
			        dataset[i][8] = 3;
			        space[3] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
	    	}
	    	else if(new Date(dataset[i][5]).getTime() < new Date(datatotal[0][5]).getTime()) {
	    		if ( (new Date(dataset[i][5]).getTime() - space[4].getTime()) > 0 ) {
			        dataset[i][8] = 0;
			        space[4] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
			      else if( (new Date(dataset[i][5]).getTime() - space[5].getTime()) > 0 ) {
			        dataset[i][8] = 1;
			        space[5] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
			      else if( (new Date(dataset[i][5]).getTime() - space[6].getTime()) > 0 ) {
			        dataset[i][8] = 2;
			        space[6] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
			      else if( (new Date(dataset[i][5]).getTime() - space[7].getTime()) > 0 ) {
			        dataset[i][8] = 3;
			        space[7] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
	    	}
	    	else if(new Date(dataset[i][5]).getTime() > new Date(datatotal[0][5]).getTime()) {
	    		if ( (new Date(dataset[i][5]).getTime() - space[8].getTime()) > 0 ) {
			        dataset[i][8] = 0;
			        space[8] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
			      else if( (new Date(dataset[i][5]).getTime() - space[9].getTime()) > 0 ) {
			        dataset[i][8] = 1;
			        space[9] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
			      else if( (new Date(dataset[i][5]).getTime() - space[10].getTime()) > 0 ) {
			        dataset[i][8] = 2;
			        space[10] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
			      else if( (new Date(dataset[i][5]).getTime() - space[11].getTime()) > 0 ) {
			        dataset[i][8] = 3;
			        space[11] = new Date((new Date(dataset[i][6])).getTime()+600000);
			      }
	    	}
	    }

	    console.log(dataset);

	    svg.selectAll('.chart')
	      .data(dataset)
	      .enter().append('rect')
	      .attr('class', 'bar')
	      .attr('x', function(d) { 
			if(d[1] == datatotal[0][5]) 
	      		return x(new Date(d[5])) 
	      	else if (new Date(d[1]).getTime() < new Date(datatotal[0][5]).getTime())
	      		return x(new Date(new Date(d[5]).getTime()+86400000))
	      	else
	      		return x(new Date(new Date(d[5]).getTime()-86400000)) 
	      })	
	      .attr('y', function(d) { 
	      	if(d[1] == datatotal[0][5]) 
	      		return margin.top+10+d[8]*30
	      	else if (new Date(d[1]).getTime() < new Date(datatotal[0][5]).getTime())
	      		return margin.top+120+d[8]*15
	      	else
	      		return margin.top+180+d[8]*15
	      })
	      .attr('height', function(d) { 
			if(d[1] == datatotal[0][5]) 
	      		return 25
	      	else 
	      		return 10
	      })	
	      .attr('width', function(d) {return (x(new Date(d[6]))-x(new Date(d[5])))})
	      .style("fill", function(d) {
	        if(d[2]==datatotal[0][0]){
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
	          'x': function(d) { return x(new Date(d[5]))+3},
	          'y': function(d) { return margin.top+27+d[8]*30},
	          'class': 'legend-label'
	      })
	      .text(function(d) {return "$"+d[2]});
	    
	    svg.append('g')
	      .attr('class', 'x axis')
	      .attr('transform', 'translate(0, ' +  margin.top + ')')
	      .call(xAxis);

	    svg.append("line")
          .attr("x1", 0)
          .attr("y1", 120)
          .attr("x2", width)
          .attr("y2", 120)
          .style("fill", "none")
	      .style("stroke", "#000")
	      .style("shape-rendering", "crispEdges")

	    svg.append("text")
	      .attr("x", 0)
          .attr("y", 135)
          .attr({"font-size":9})
	      .text("Depart 1 day earlier")

	    svg.append("line")
          .attr("x1", 0)
          .attr("y1", 180)
          .attr("x2", width)
          .attr("y2", 180)
          .style("fill", "none")
	      .style("stroke", "#000")
	      .style("shape-rendering", "crispEdges")

	    svg.append("text")
	      .attr("x", 0)
          .attr("y", 195)
          .attr({"font-size":9})
	      .text("Depart 1 day later")
	  });
	});

	d3.selectAll(".axis path")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges")

	d3.selectAll(".axis line")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges")