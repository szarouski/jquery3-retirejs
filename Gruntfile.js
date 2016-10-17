module.exports = function(grunt) {
    grunt.initConfig({
        retire: {
            options: {
                verbose: true,
                packageOnly: true,
                //outputFile: './retire-output.json',
                ignorefile: '.retireignore' /** list of files to ignore **/
            },
            bower: ['bower_components/**/*.js'],
        }
    });

    grunt.loadNpmTasks('grunt-retire');

    grunt.registerTask('default', ['retire']);
};