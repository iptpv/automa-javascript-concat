var vow = require('vow'),
    compressor = require('node-minify');

/**
 * собирает js в один файл
 * @param filesIn - массив файлов для сжатия
 * @param fileOut - выходной сжатый файл
 * @returns {Promise}
 */
module.exports =  function (filesIn, fileOut) {
    var defer = vow.defer();
    new compressor.minify({
        type: 'gcc',
        fileIn: filesIn,
        fileOut: fileOut,
        callback: function(err){
            if (err) {
                console.log(err);
            } else {
                defer.resolve();
            }
        }
    });
    return defer.promise();
};