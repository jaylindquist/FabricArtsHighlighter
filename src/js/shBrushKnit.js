/**
 * Crochet SyntaxHighlighter Brush
 * http://nordeastknitter.com
 *
 * @version
 * 1.0.0 (February 6, 2013)
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
		keywords = 'alt approx beg blocking BO cab CC cn  CO cont dec dpn foll g i-cord inc ' +
					'incl inst k k2tog kfb m MB MC m1 mm mult opp oz p p2tog patt patts pfb pm ' +
					'psso rem rep rev RS rnd rnds sc SK2P SSK SSP sl  slp st sts tbl tog WS ' +
					'w&amp;t Wyif Wyib YO';

		var r = SyntaxHighlighter.regexLib;

		this.regexList = [
			{ regex: /\[|\]|\*/gmi,									css: 'constants'},
			{ regex: /\(|\)/gmi, 			   						css: 'constants' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),	css: 'keyword' },
			{ regex: /(k|p|m|c|sl)[0-9]+(r|f|b)?/gmi, 				css: 'keyword'},
			{ regex: /round(s)? [0-9]+( ?- ?[0-9]+)?/gmi,			css: 'color2' },
			{ regex: /row(s)? [0-9]+( ?- ?[0-9]+)?/gmi,				css: 'color2' },
			{ regex: /[0-9]+/gmi,				css: 'value' }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['knit'];

	SyntaxHighlighter.brushes.Knit = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();