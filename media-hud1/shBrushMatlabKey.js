/**
 *	Author: Will Schleter
 *	based on: http://www.jamesrohal.com
 */
SyntaxHighlighter.brushes.MatlabKey = function()
{
	var keywords = 'break case catch classdef continue else elseif end for function global if otherwise parfor persistent return spmd switch try while';
	var functions = ' ';

	this.regexList = [
		{ regex: /%.*$/gm,	css: 'comments' }, // one line comments
		{ regex: /\%\{[\s\S]*?\%\}/gm, css: 'comments'}, // multiline comments
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string'},
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }
	];
}

SyntaxHighlighter.brushes.MatlabKey.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.MatlabKey.aliases		= ['matlabkey', 'matlab'];
/*
     FILE ARCHIVED ON 09:39:14 Apr 19, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:51:44 Nov 19, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 78.501
  exclusion.robots: 0.216
  load_resource: 265.787
  RedisCDXSource: 6.805
  PetaboxLoader3.datanode: 135.324 (5)
  esindex: 0.017
  exclusion.robots.policy: 0.201
  LoadShardBlock: 53.971 (3)
  PetaboxLoader3.resolve: 166.146 (2)
  CDXLines.iter: 14.11 (3)
*/