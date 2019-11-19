/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function hereDocProcess(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				result = []
				;
			if (match.here_doc != null)
				result.push(new constructor(match.here_doc, match.index + match[0].indexOf(match.here_doc), 'string'));

			if (match.full_tag != null)
				result.push(new constructor(match.full_tag, match.index, 'preprocessor'));

			if (match.end_tag != null)
				result.push(new constructor(match.end_tag, match.index + match[0].lastIndexOf(match.end_tag), 'preprocessor'));
			return result;
		}
		var keywords =	'if fi then elif else for do done until while break continue case esac function return in eq ne ge le';
		var commands =  'alias apropos awk basename base64 bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot' +
						'cksum clear cmp comm command cp cron crontab crypt csplit cut date dc dd ddrescue declare df ' +
						'diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval ' +
						'exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format ' +
						'free fsck ftp gawk gcc gdb getconf getopts grep groups gzip hash head history hostname id ifconfig ' +
						'import install join kill less let ln local locate logname logout look lpc lpr lprint ' +
						'lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools ' +
						'mv nasm nc ndisasm netstat nice nl nohup nslookup objdump od open op passwd paste pathchk ping popd pr printcap ' +
						'printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice ' +
						'remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown ' +
						'sleep sort source split ssh strace strings su sudo sum symlink sync tail tar tee test time ' +
						'times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias ' +
						'uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir ' +
						'vi watch wc whereis which who whoami Wget xargs xxd yes chsh'
						;

		this.regexList = [
			{ regex: /^#!.*$/gm,											css: 'preprocessor bold' },
			{ regex: /\/[\w-\/]+/gm,										css: 'plain' },
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,		css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,			css: 'string' },		// single quoted strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(commands), 'gm'),			css: 'functions' },		// commands
			{ regex: new XRegExp("(?<full_tag>(&lt;|<){2}(?<tag>\\w+)) .*$(?<here_doc>[\\s\\S]*)(?<end_tag>^\\k<tag>$)",'gm'),	func: hereDocProcess }
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['bash', 'shell', 'sh'];

	SyntaxHighlighter.brushes.Bash = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

/*
     FILE ARCHIVED ON 11:50:54 Apr 19, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:51:42 Nov 19, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 27.162 (3)
  load_resource: 937.562
  exclusion.robots: 0.312
  exclusion.robots.policy: 0.291
  RedisCDXSource: 12.474
  captures_list: 843.126
  PetaboxLoader3.resolve: 879.57 (5)
  PetaboxLoader3.datanode: 824.071 (5)
  LoadShardBlock: 794.54 (3)
  esindex: 0.031
*/