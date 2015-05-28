module.exports = function(grunt, options){
    var projectDev = options.projectDev;

    return {
    	options: {
            jshintrc: '<%= projectDev %>/tasks/config/.jshintrc'
        },
        tipso: ['<%= projectDev %>/js/{,*/,**/}*.js']
    }
};
