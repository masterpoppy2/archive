// Contributed by Travis Whitton
// http://travis-whitton.blogspot.com/2009/06/syntaxhighlighter-for-clojure.html

SyntaxHighlighter.brushes.Clojure = function()
{
	var funcs = ':arglists :doc :file :line :macro :name :ns :private :tag :test new alias alter ' +
				'and apply assert class cond conj count def defmacro defn defstruct deref do '     +
				'doall dorun doseq dosync eval filter finally find first fn gen-class gensym if '  +
				'import inc keys let list loop map ns or print println quote rand recur reduce '   +
				'ref repeat require rest send seq set sort str struct sync take test throw '       +
				'trampoline try type use var vec when while';

	this.regexList = [
			{ regex: new RegExp(';[^\]]+$', 'gm'),                           css: 'comments' },
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
			{ regex: /\[|\]/g,                                               css: 'keyword' },
			{ regex: /'[a-z][A-Za-z0-9_]*/g,                                 css: 'color1' }, // symbols
			{ regex: /:[a-z][A-Za-z0-9_\-]*/g,                               css: 'color2' }, // keywords
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),             css: 'functions' }
	];

	this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
}

SyntaxHighlighter.brushes.Clojure.prototype     = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Clojure.aliases       = ['clojure', 'Clojure', 'clj'];
/*
     FILE ARCHIVED ON 13:54:15 Apr 19, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:51:43 Nov 19, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.217
  captures_list: 106.957
  PetaboxLoader3.resolve: 149.015 (2)
  RedisCDXSource: 0.555
  esindex: 0.014
  load_resource: 210.629
  PetaboxLoader3.datanode: 148.309 (5)
  CDXLines.iter: 13.159 (3)
  exclusion.robots: 0.231
  LoadShardBlock: 89.778 (3)
*/