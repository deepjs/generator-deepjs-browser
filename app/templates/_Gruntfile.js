module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'http-server': {
			'dev': {
				// the server root directory
				root: './',

				port: 8282,
				host: '127.0.0.1',

				cache: 60, // sec
				showDir: true,
				autoIndex: true,
				defaultExt: 'html',

				//wait or not for the process to finish
				runInBackground: false
			}
		},
		processhtml: {
			dist: {
				files: {
					'dist/index.html': ['index.html']
				}
			}
		},
		requirejs: {
			dist: {
				options: {
					//appDir:".",
					baseUrl: './',
					name: 'app',
					out: './app.min.js',
					enforceDefine: false,
					wrap: true,
					paths: {
						'deepjs': './libs/deepjs',
						'deep-routes': './libs/deep-routes',
						'rql': './libs/rql',
						'deep-jquery': './libs/deep-jquery',
						'deep-browser': './libs/deep-browser',
						'deep-swig': './libs/deep-swig',
						'deep-local-storage': './libs/deep-local-storage',
						'deep-data-bind': './libs/deep-data-bind'
					}
				}
			}
		}/*,
		less: {
		  development: {
		    options: {
		      paths: ["assets/css"]
		    },
		    files: {
		      "path/to/result.css": "path/to/source.less"
		    }
		  },
		  production: {
		    options: {
		      paths: ["assets/css"],
		      cleancss: true,
		      modifyVars: {
		        imgPath: '"http://mycdn.com/path/to/images"',
		        bgColor: 'red'
		      }
		    },
		    files: {
		      "path/to/result.css": "path/to/source.less"
		    }
		  }
		}*/
	});

	//https://github.com/gruntjs/grunt-contrib-less
	/*grunt.loadNpmTasks('grunt-contrib-less');*/

	grunt.loadNpmTasks('grunt-requirejs');
	grunt.loadNpmTasks('grunt-http-server');
	// Default task(s).
	grunt.registerTask('default', ['requirejs']);

	/*grunt.registerTask('default', 'Log some stuff.', function() {
	    grunt.log.write('Logging some stuff...').ok();
	});*/
};