Pre.less
=======

A **enjoyable** css framework use less.

![Pre](http://farm3.staticflickr.com/2254/2424145945_c8bcca5da6_z.jpg)

## Table of Contents

 1. [Basic Modules](#basic-modules)
 1. [CSS3 Modules](#css3-modules)
 1. [Component Modules](#component-modules)
 1. [Layout Modules](#layout-modules)
 1. [Shim Modules](#shim-modules)
 1. [Util Modules](#util-modules)

### Basic Modules
 * Color
  
```css
 //17 standard color names
 @aqua:		#00FFFF;
 @black:	#000000;
 @blue:		#0000FF;
 @fuchsia:	#FF00FF;
 @gray:		#808080;
 @grey:		@gray;
 @green:	#008000;
 @lime:		#00FF00;
 @maroon:	#800000;
 @navy:		#000080;
 @olive:	#808000;
 @purple:	#800080;
 @red:		#FF0000;
 @silver:	#C0C0C0;
 @teal:		#008080;
 @white:	#FFFFFF;
 @yellow:	#FFFF00;

 //other color names
 @orange:	#FFA500;
 @pink:		#FFC0CB;
 @gold:		#FFD700;
```
 
 * Display
 
```css
 // dispay block
 .block();
 
 // dispay center block
 .block-center();
 
 // dispay inline block
 .block-inline(@align:top);
 .block-inline-float(@align:top, @float:left);
 
 // How To Clear Floats Without Structural Markup[http://www.positioniseverything.net/easyclearing.html]
 .clearfix()
```
 
 * Float 
 
```css
 // set float, left is the default direction  
 .float(@direction: left);
 
 // quick access method
 .float-left();
 .float-right();
 
 // Resets floated elements back to their default of `float: none` and defaults
 // to `display: block` unless you pass `inline` as an argument
 .reset-float(@display: block);
```

 * Font
  
```css
 // sans-serif font family
 .sans-serif(@font-weight: normal, @font-size: 14px, @line-height: 20px ,@font-style: normal);
 
 // serif font family
 .serif(@font-weight: normal, @font-size: 14px, @line-height: 20px, @font-style: normal);
 
 // monospace font family
 .monospace(@font-weight: normal, @font-size: 12px, @line-height: 20px, @font-style: normal);
 
 // css3 @font-face
 .font-face(@font-family, @url);
```
 
 * Min
  
```css
 // cross browser min-height mixin
 .min-height(@value);
 
 // cross browser min-width mixin
 .min-width(@value);
```
 
 * Text
  
```css
 // text shadow
 .text-shadow(@x-offset: 0px, @y-offset: 0px, @blur:1px , @color: #000);
 
 // white space no wrap
 .nowrap();
 
 // text-overflow: clip|ellipsis|string; 
 .text-overflow(@overflow: clip);
 
 // Prevent long urls and text from breaking layouts
 // [originally from perishablepress.com](http://perishablepress.com/press/2010/06/01/wrapping-content/)
 .forcewrap();
```
 
 * Background
  
```css
 // backgroud-attachment: scroll|fixed|inherit
 // background-clip: padding-box|border-box|content-box;
 // background-origin: padding-box|border-box|content-box;
 // background-size: length|percentage|cover|contain;
 .background(@color: transparent, @image: none, @repeat: repeat, @attachment: scroll, @position: 0% 0%, @clip: padding-box, @origin: padding-box, @size: auto);
 
 // translucent background
 .background-translucent(@color: @white, @alpha: 1);
```
 

### CSS3 Modules
 * Opacity
  
```css
 // opacity style
 .opacity(@opacity: 1);
```
 
 * Animation
  
```css
 .animation(@name: none, @duration: 0s, @timing-function: ease, @delay: 0, @iteration-count: 1, @direction: normal);
 .animation-play-state(@state: running);
```
 
 * Transform
  
```css
 // 2D Transform
 .transform(rotateX(75deg) skewX(-15deg));
 .transform-origin( @origin: 50% 50% 0 );
 .transform-style(@style: flat);
 
 // 3D Transform
 .perspective( @depth: null );
 .perspective-origin( @position: 50% 50% );
```
 
 * Transition
  
```css
 .transition(@property: all, @duration: 0s, @timing-function: ease, @delay: 0s);
```
 
 * Flexbox
  
```css
 .box-align(@alignment: stretch);
 .box-direction(@direction: normal);
 .box-flex(@flex: 0);
 .box-flex-group(@group: 1);
 .box-orient(@orientation: horizontal);
 .box-ordinal-group(@group: 1);
 .box-pack(@pack: start);
 
 //.display-box; must be used along with other flexbox mixins
 .display-box()
```
 
 * Column
  
```css
 .column(@column-count: 2, @column-gap: 20px);
```
 
 * Border
  
```css
 // border radius
 .border-radius(@radius: 5px);
 
 // border image
 .border-image( url(border.png) 27 27 27 27 round round );
 
 .border-translucent(@color: @white, @alpha: 1);
```
 
 * Box
  
```css
 .box-sizing(@model: content-box);
 .box-shadow("3px 3px red, -1em 0 0.4em olive");
```
 
 * Gradient
  
```css
 // radial gradient
 .radial-gradient("center, closest-side, #3a3a3a, #1a1a1a");
 
 // linear gradient
 .linear-gradient("-30deg, rgba(255, 255, 255, .7), rgba(255, 255, 255, .4) 50%, rgba(255, 255, 255, 0) 50.1%) no-repeat");
 
  // more linear gradient mixins
 .gradient-horizontal(@startColor: #000, @endColor: #fff);
 .gradient-vertical(@startColor: #000, @endColor: #fff);
 .gradient-directional(@startColor: #000, @endColor: #fff, @deg: 45deg);
 
```
 
  * Mask
  
```css
 // using a Gradient as a Mask
 .mask-gradient( "linear-gradient(black, transparent)" );
 
 // using an Image as a Mask
 .mask-image( url(heartmask.png) );
```

### Component Modules
 * Button
  
```css
 .button(@color: #f5f5f5, @text-color: #fff, @text-shadow: 0 1px 1px rgba(0,0,0,.75), @font-size: 13px, @padding: 9px 15px 10px, @border-radius: 6px);
 
 .button(@white, @black);
```
 
 * Link
  
```css
 // a link that only has an underline when you hover over it
 .link-hover;
 // A link that looks and acts like the text it is contained within
 .link-unstyled;
```
 
 * List
  
```css
 // makes a list inline
 .list-inline;
 
 // makes an inline list delimited with the passed string
 .list-delimited(@separator: ", ");
 
 // Turn off the bullet for an element of a list
 .list-item-no-bullet;
 
 // turns off the bullets for an entire list
 .list-no-bullets;
 
 .list-pretty-bullets(@bullet-icon, @width, @height, @line-height: 18px, @padding: 14px);
 .list-container-horizontal;
 .list-item-horizontal-left(@padding: 4px);
 .list-item-horizontal-right(@padding: 4px);
 .list-horizontal-left(@padding: 4px);
 .list-horizontal-right(@padding: 4px);
```
 
 * Table
  
```css
 .table-outer-borders(@width: 2px, @color: @black);
 .table-inner-borders(@width: 2px, @color: @black);
```
 
 * Form
  
```css
 .form;
 
 .form-borders(
	@unfocused-border-color: #bbbbbb,
	@focus-border-color: #666666,
	@fieldset-border-color: #cccccc
 );
 
 .form-sizes(
    @input-width: 300px,  
    @textarea-width: 390px,  
    @textarea-height: 250px
 );
```
 

### Layout Modules

 * Grid 
  
```css
// Grid example
@grid-column-count: 11;
@grid-column-width: 40px;
@grid-gap-width: 20px;

div.grid {
	.grid-container();
	div.span1 { .grid-columns(1); }
	div.span2 { .grid-columns(2); }
	div.span3 { .grid-columns(3); }
	div.span4 { .grid-columns(4); }
	div.span5 { .grid-columns(5); }
	&.show-grid {
		background-color: @silver;
		height: 200px;
		margin-bottom: 20px;
		div {
			background-color: @grey;
			height: 200px;
			text-align: center;
			.sans-serif(normal,12px,200px);
		}
	}
}
```

### Shim Modules

 * Reset
 
   Based on [Eric Meyer's reset 2.0](http://meyerweb.com/eric/tools/css/reset/index.html)
```css
 // import reset style
 .reset();
``` 
 
 * Normalize
 
   [normalize.css](http://necolas.github.com/normalize.css/) A modern, HTML5-ready alternative to CSS resets 
```css
 // makes browsers render all elements more consistently and in line with modern standards
 .normalize();
```  


### Util Modules
 
 * Sprite 
 
```css

 @sprite-default-size: 32px;
 @sprite-default-margin: 0px;
 @sprite-image-base-path: ".";
 
 a{
 	.twitter{
 		.sprite-img("icons-32.png", 1); 
 	}
 	.facebook{
 		.sprite-img("icons-32png", 2); 
 	}
 }
 
 a{
 	.sprite-background("icons-32.png")
 	.twitter{
 		.sprite-column(1);
 	}
 	.facebook{
 		.sprite-row(2);
 	} 
 }
```

> http://madscript.com
> Copyright (c) 2011-2012  Yuanyan < yuanyan.cao@gmail.com >
