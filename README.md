Pre.less
=======

A **enjoyable** css framework use less.

### Basic Modules
 * Color
  
 ```
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
 
 ```
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
 
 ```
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
  
 ```
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
  
 ```
 // cross browser min-height mixin
 .min-height(@value);
 
 // cross browser min-width mixin
 .min-width(@value);
 ```
 
 * Text
  
 ```
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
  
 ```
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
  
 ```
 // opacity style
 .opacity(@opacity: 1);
 ```
 
 * Animation
  
 ```
 ```
 
 * Transform
  
 ```
 ```
 
 * Transition
  
 ```
 ```
 
 * Flexbox
  
 ```
 ```
 
 * Column
  
 ```
 ```
 
 * Border
  
 ```
 ```
 
 * Box
  
 ```
 ```
 
 * Gradient
  
 ```
 // linear gradient
 .gradient-horizontal(@startColor: #000, @endColor: #fff);
 .gradient-vertical(@startColor: #000, @endColor: #fff);
 .gradient-directional(@startColor: #000, @endColor: #fff, @deg: 45deg);
 
 // radial gradient
 .gradient-radial()
 
 ```
 

### Component Modules
 * Button
  
 ```
 ```
 
 * Link
  
 ```
 ```
 
 * List
  
 ```
 ```
 
 * Table
  
 ```
 ```
 
 * Form
  
 ```
 ```
 

### Other Modules
 * Reset
 
 ```
 // import reset style, based on [Eric Meyer's reset 2.0](http://meyerweb.com/eric/tools/css/reset/index.html)
 .reset();
 ``` 

 * Sprite
  
 ```
 ```
 
 * Grid
  
 ```
 ```
 


> http://madscript.org
> Copyright (c) 2011  Yuanyan < yuanyan.cao@gmail.com >
