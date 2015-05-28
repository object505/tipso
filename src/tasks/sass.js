module.exports = function(grunt, options){
    var projectDev = options.projectDev;
    var projectDir = options.projectDir;

    return {
        options: {
            outputStyle: 'compressed'
        },
        tipso: {
            files: {
                '<%= projectDir %>/tipso.min.css': '<%= projectDev %>/scss/tipso.scss'
            }
        }
    };
};
