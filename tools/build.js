var path = require('path'),
    fs = require('fs'),
    sys = require('sys');

if(parseFloat(process.version.slice(1)) < 0.5){
	require.paths.unshift(path.join(__dirname, '..', 'node_module'));
}

var args = process.argv.slice(1);

var srcArray = fs.readdirSync("../src");

var basicModules=['color', 'display', 'text', 'min', 'font', 'float', 'background'];
var css3Modules=['opacity', 'border', 'box', 'gradient', 'column', 'transform', 'transition', 'animation', 'flexbox', 'mask'];
var componentModules=['button', 'table', 'link', 'list', 'form' ];
var otherModules=['sprite' , 'grid', 'reset','normalize'];

var modules=[];
var SRC_DIR = "../src/";
var MOD_EXT = ".less";
modules = modules.concat(basicModules, css3Modules, componentModules, otherModules);

var output = "../dist/pre.less";
var outputContent = "";

modules.forEach(function(mod){
	var content = fs.readFileSync(SRC_DIR+mod+MOD_EXT,"utf8");
	outputContent+=content.replace(/@import\s+\S*;/g, '');
})


if (output) {
	var fd = fs.openSync(output, "w");
	fs.writeSync(fd, outputContent, 0, "utf8");
} else {
	sys.print(outputContent);
}

console.log("build success!");
