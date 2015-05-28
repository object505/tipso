module.exports = function(grunt, options){
    var projectDev = options.projectDev;
    var projectDir = options.projectDir;

    return {
		options: {
        },
        tipso: {
            files: [{
                expand: true,
                cwd: '<%= projectDev %>/js/',
                src : 'tipso.js',
                dest: '<%= projectDir %>/',
                ext: '.min.js'
            }]
        }
    };
};
