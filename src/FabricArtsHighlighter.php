<?php
/*
Plugin Name: SyntaxHighlighter Evolved: Fabric Arts Brushes
Description: Adds support for the fabirc arts languages to the SyntaxHighlighter Evolved plugin.
Author: Jay Lindquist
Version: 1.0.0
Author URI: http://bitwiseor.com/
*/

//from http://www.viper007bond.com/wordpress-plugins/syntaxhighlighter/adding-a-new-brush-language/
 
// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_crochet_regscript' );
add_action( 'init', 'syntaxhighlighter_knit_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_crochet_addlang' );
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_knit_addlang' );
 
// Register the brush file with WordPress
function syntaxhighlighter_crochet_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-crochet', plugins_url( 'js/shBrushCrochet.js', __FILE__ ), array('syntaxhighlighter-core'), '1.0.0' );
    wp_enqueue_style( 'syntaxhighlighter-brush-crochet-style', plugins_url( 'css/shOutdent.css', __FILE__ ), false, '1.0.0' );
}

// Register the brush file with WordPress
function syntaxhighlighter_knit_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-knit', plugins_url( 'js/shBrushKnit.js', __FILE__ ), array('syntaxhighlighter-core'), '1.0.0' );
    wp_enqueue_style( 'syntaxhighlighter-brush-knit-style', plugins_url( 'css/shOutdent.css', __FILE__ ), false, '1.0.0' );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_crochet_addlang( $brushes ) {
    $brushes['crochet'] = 'crochet';
    return $brushes;
}

function syntaxhighlighter_knit_addlang( $brushes ) {
    $brushes['knit'] = 'knit';
    return $brushes;
}

 
?>