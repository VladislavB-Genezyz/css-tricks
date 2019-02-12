var fs = require('fs');
var dir = './tmp';
let dirs = [
	'./PSD',
	'./source',
	'./source/fonts',
	'./source/images',
	'./source/js',
	'./source/styles',
	'./source/styles/src',
	'./source/template',
	'./source/template/src'
]

dirs.forEach(function(item,index,arr){
	if (!fs.existsSync(item)){
		fs.mkdirSync(item);
	}

});
// if (!fs.existsSync(dir)){
// 	fs.mkdirSync(dir);
// }
let createFiles = [
	'./source/styles/main.styl',
	'./source/template/index.pug'
];
createFiles.forEach(function(item,index,arr){
	// if (!fs.existsSync(item)){
	// 	fs.mkdirSync(item);
	// }
	fs.openSync(item, 'a');
});
