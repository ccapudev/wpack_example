var fs = require("fs");
var path = require("path");

function walk(dir, callback, recursive) {
    console.log("Init walk on : ", dir)
	let files = fs.readdirSync(dir);
    console.log("Files : ", files)
    files.forEach(function(file) {
        var filepath = path.join(dir, file);
        fs.stat(filepath, function(err,stats) {
            if (stats.isDirectory() && recursive) {
                walk(filepath, callback);
            } else if (stats.isFile()) {
                callback(file, stats);
            } else {
                console.log("Omitiendo directorio (no recursivo)");
            }
        });
    });
}

exports.walk = walk;