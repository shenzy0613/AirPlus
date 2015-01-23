// D3 Tutorial Script
var myData = null;

d3.json("data/data.json", function(err, data) {
    if(err){
        console.log("Uh oh! There was an error.");
        console.log(err);
    }
    else{
        console.log("Successfully loaded data!");
        console.log(data);
    }

    myData = data;

    var margin = {top: 20, right: 20, bottom: 30, left: 40};
    var width = 960 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

    var xScale = d3.scale.ordinal()
    	.rangeRoundBands([0, width], .1)
    	.domain(myData.map(function(d) { return d.name; }));

    var yScale = d3.scale.linear()
    	.range([height,0])
    	.domain([0,d3.max(data, function(d) {return d.mpg })]);


    var svg = d3.select('#chart').append("svg")
    	.attr("width", width + margin.left + margin.right)
    	.attr("height", height + margin.top + margin.bottom)
        .append("g")
    	.attr("transform", "translate(" + margin.left + "," + margin.right + ")" );

    svg.selectAll(".bar")
    	.data(data)
    .enter().append("rect")
    	.attr("class", "bar")
    	.attr("x", function(d){ return xScale(d.name) })
    	.attr("width", xScale.rangeBand())
    	.attr("y", function(d){ return yScale(d.mpg) })
    	.attr("height", function(d) { return height-yScale(d.mpg); })
    	.on("mouseenter", function(d) { 
    		var text = "Make: " + d.name + " MPG: " + d.mpg;
    		d3.select("#info").html(text);
    	})
    	.on("mouseleave", function() { d3.select("#info").html(" "); });
});