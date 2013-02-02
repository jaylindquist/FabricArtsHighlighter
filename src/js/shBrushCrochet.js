/**
 * Crochet SyntaxHighlighter Brush
 * http://nordeastknitter.com
 *
 * @version
 * 0.1.0 (January 29, 2013)
 * 
 * @copyright
 * Copyright (C) 2013 Jay Lindquist
 *
 */
;(function()
{
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords = 'approx beg bet BL BP BPdc CC ch cont dc dc2tog dec ' + 
	  					'FL foll FP FPdc FPsc FPtr hdc inc lp lps MC pat pats ' +
	  					'patt rem rep rnd rnds RS sc sc2tog sk Sl st sp sps st ' +
	  					'sts tog tr WS yo round rounds';

		var r = SyntaxHighlighter.regexLib;

		this.regexList = [
			{ regex: /\[|\]|\*/gmi,									css: 'constants'},
			{ regex: /\([0-9]+\)/gmi, 								css: 'value' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),	css: 'keyword' },
			{ regex: /ch-[0-9]+/gmi, 								css: 'keyword'},
			{ regex: /row(s)? [0-9]+( ?- ?[0-9]+)?/gmi,				css: 'color2' }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['crochet'];

	SyntaxHighlighter.brushes.Crochet = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();