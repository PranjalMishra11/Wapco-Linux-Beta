'use strict'

const path = require('path')
const remote = require('electron').remote
window.remote = remote
let webRoot = path.dirname(__dirname)
window.$ = window.jQuery = require('jquery')
window.controller = require(path.join(webRoot, 'controller.js'))

function show_up() {
	var exec = require('child_process').exec; 
	let pyPath = window.controller.getPythonPath()
  	let pyDir = window.controller.getPythonAppDir()
  	let script = path.join(pyDir, 'upcoming.py')
	var command = pyPath.pythonBin + " " + script + " show"
	exec(command, function (error, stdout, stderr) {
		if (error !== null) {
	        console.log('exec error: ' + error)
	        document.write(error);
	        return;
	    }
	    document.write(stdout);
	});
}

function upd_up() {
	var exec = require('child_process').exec; 
	let pyPath = window.controller.getPythonPath()
  	let pyDir = window.controller.getPythonAppDir()
  	let script = path.join(pyDir, 'upcoming.py')
	var command = pyPath.pythonBin + " " + script + " upd"
	exec(command, function (error, stdout, stderr) {
		if (error !== null) {
	        console.log('exec error: ' + error);
	        return;
	    }
	    document.write(stdout);
	});
}
