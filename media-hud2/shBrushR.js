/**
 *  Author: Yihui Xie <xie@yihui.name>
 *  URL: http://yihui.name/en/2010/09/syntaxhighlighter-brush-for-the-r-language
 *  License: GPL-2 | GPL-3
 */
SyntaxHighlighter.brushes.R = function()
{
    var keywords = 'if else repeat while function for in next break TRUE FALSE NULL Inf NaN NA NA_integer_ NA_real_ NA_complex_ NA_character_';
    var constants = 'LETTERS letters month.abb month.name pi';
    this.regexList = [
	{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },
	{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },
	{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
	{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },
	{ regex: new RegExp(this.getKeywords(constants), 'gm'),		css: 'constants' },
	{ regex: /[\w._]+[ \t]*(?=\()/gm,				css: 'functions' },
    ];
};
SyntaxHighlighter.brushes.R.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.R.aliases	= ['r', 's', 'splus'];

/*
     FILE ARCHIVED ON 06:56:55 Apr 19, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:51:45 Nov 19, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.18
  captures_list: 277.867
  PetaboxLoader3.resolve: 307.852 (4)
  RedisCDXSource: 1.38
  esindex: 0.015
  load_resource: 284.48
  PetaboxLoader3.datanode: 219.615 (5)
  CDXLines.iter: 14.344 (3)
  exclusion.robots: 0.194
  LoadShardBlock: 258.975 (3)
*/