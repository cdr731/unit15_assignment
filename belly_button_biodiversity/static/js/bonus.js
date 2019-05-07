// Optional gauge chart for
// Belly Button Washing Frequency

function buildGauge(wfreq) {

// Calculate the level based on the washing frequency
var level = (wfreq * 18) + 9;

// Trig to calc meter point
var degrees = 180 - level,
     radius = .5;
var radians = degrees * Math.PI / 180;
var x = radius * Math.cos(radians);
var y = radius * Math.sin(radians);

// Path: may have to change to create a better triangle
var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
     pathX = String(x),
     space = ' ',
     pathY = String(y),
     pathEnd = ' Z';
var path = mainPath.concat(pathX,space,pathY,pathEnd);

var data = [{ type: 'scatter',
   x: [0], y:[0],
    marker: {size: 28, color:'850000'},
    showlegend: false,
    name: 'speed',
    text: level,
    hoverinfo: 'text+name'},
  { values: [50/10, 50/10, 50/10, 50/10, 50/10, 50/10, 
             50/10, 50/10, 50/10, 50/10, 50],
  rotation: 90,
  text: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'],
  textinfo: 'text',
  textposition:'inside',
  marker: {colors:['rgba(201, 119, 121, .5)', 'rgba(199, 147, 117, .5)',
                   'rgba(197, 177, 114, .5)', 'rgba(182, 195, 112, .5)',
                   'rgba(147, 193, 109, .5)', 'rgba(112, 191, 107, .5)',
                   'rgba(105, 189, 133, .5)', 'rgba(102, 187, 164, .5)',
                   'rgba(100, 174, 185, .5)', 'rgba(97, 139, 183, .5)',                   
                   'rgba(255, 255, 255, 0)']},
  labels: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'],
  hoverinfo: 'label',
  hole: .5,
  type: 'pie',
  showlegend: false
}];

var layout = {
  shapes:[{
      type: 'path',
      path: path,
      fillcolor: '850000',
      line: {
        color: '850000'
      }
    }],
  title: '<b>Belly Button Washing Frequency</b><br>Scrubs per Week',
  height: 500,
  width: 500,
  xaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]}
};

Plotly.newPlot("gauge", data, layout);

}
