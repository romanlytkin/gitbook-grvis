var fs = require('fs');
var re = /^```dot((.*\n)+?)?```$/im;
var crypto = require('crypto');
var path = require('path');

require('shelljs/global');

var dotPath, mode;

module.exports = {
	hooks: {
		"init": function() {
			dotPath = path.join(this.options.output, 'assets', 'images', 'dot');
			mode = this.options._name;
			mkdir('-p', dotPath);
		}

	,	"page:before": function(page) {
			var content = page.content;

			while((match = re.exec(content))) {
				var rawBlock = match[0];
				var dotBlock = match[1];
				var md5 = crypto.createHash('md5').update(dotBlock).digest('hex');
				var dotFile = path.join(dotPath, md5+'.dot');
				var svgFile = path.join(dotPath, md5+'.svg');

				fs.writeFileSync(dotFile, match[1], 'utf8');
				
				if(0 == exec(['dot -Tsvg', dotFile, '-o', svgFile].join(' ')).code) {
					var svgPath = ('serve' == mode) ? 'assets/images/dot/' : ['file://', dotPath, '/'].join('');
					var svgTag = ['![](', svgPath, md5, '.svg)'].join('');
					
					page.content = content = content.replace(rawBlock, svgTag);
				}
			}
			
			return page;
		},

		"page": function(page) { return page; },
		"page:after": function(page) { return page; }
	}
};
