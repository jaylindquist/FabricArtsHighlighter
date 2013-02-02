# Fabric Arts Highlighter for SyntaxHighlighter Evolved
Syntax highlighting is commonly used to make programming languages easier to read. When it comes to crochet and knitting patterns online, everyone seems to show patterns differently. Combining syntax highlighting to draw attention to the common language of patterns will make reading and following patterns online easier for crafters everywhere.

Fabric Arts Highlighter is a syntax highlighter for crochet patterns using Alex Gorbatchev's [SyntaxHighlighter][] library.

This project specifically is built to be used with the [SyntaxHighlighter Evolved][] WordPress plugin.

## Requirements
To use with the SyntaxHighlighter library directly, download the appropriate JavaScript files from src/js and follow the instructions on the [SyntaxHighlighter][] website.

To use with WordPress, install the [SyntaxHighlighterEvolved][] plugin and install the Fabric Arts Highlighter plugin from the attahed zip file.

## Usage
Once configured, the Fabric Arts Highlighter will add languages for patterns. The currently supported are listed below:

* crochet

The following example uses the WordPress plugin to create an easy to read crochet pattern:

```
[crochet]
Row 1: Crochet 6 sc into the middle of a magic ring with Aran colored yarn. (6)
Row 2: Inc all the way around (12)
Row 3: [sc, inc]* Repeat * all the way around (18)
Row 4: sc all the way around (18)
Row 5: [sc, dec]* Repeat * all the way around (12)
Row 6: [sc, dec]* Repeat * all the way around (8)
Row 7: sc all the way around (8)
Row 8: [sc, inc]* Repeat * all the way around (12) On the very last stitch of this row, switch colors from Aran to Green. This marks the beginning of the upper body.
Row 9: [sc, inc]* Repeat * all the way around (18)
Rows 10-13: sc all the way around.  On the last sc of Row 12, change colors to Brown. (18)
[/crochet]
```

The above code will result in the following pattern on a WordPress blog:

![Syntax highlighting for crochet patterns][crochet syntax]

## Recommended usage
It is recommended to use version 2.x of SyntaxHighlighter and enable word wrap for the best looking patterns. Included in src/css is a CSS file that allows for outdented patterns that wrap to the next line as in the above screenshot. The CSS file include a style named 'fah-outdent' specifically for this purpose.

To enable the above features in the [SyntaxHighlighter Evolved][] plugin, go to the plugin's settings and select:
* Version 2.x
* Check the option for word wrap
* Add 'fah-outdent' - no quotes - as the optional style.

[SyntaxHighlighter] http://alexgorbatchev.com/SyntaxHighlighter/
[SyntaxHighlighter Evolved] http://wordpress.org/extend/plugins/syntaxhighlighter/
[crochet syntax]: https://github.com/jaylindquist/FabricArtsHighlighter/blob/master/src/resources/images/crochetSyntax.png