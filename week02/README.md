## Week 2: Mobile First
#### [Design for the Web 2](https://github.com/ccny-edm/web2)

In the first week's assignment was mainly intended for me to get a sense for where everyone is coming from. We are going to build up slowly, and use what you've created so far as the seed for what will eventually grow into your porfolio site. Before we continue, we need to ensure what we're starting with is sound, and follows good coding habits.

This week's reading is my guide to [setting up jEdit](http://phiffer.org/writing/configuring-jedit/).

### Make sure it validates

This is always a good starting point. Go to the [HTML5 validator](http://validator.nu/), enter the URL of your web page, and see what kinds of results you get back. There are many ways your page might fail its validation, but if you're confused about the feedback it gives you, just get in touch with me and I'll be able to help you decipher how it wants you to fix your code.

### Use consistent indentation

Making sure your code is consistently indented is an essential habit to get into early on.

```html
<!-- This is messy -->
	<div id="content">
		<p>
Hey, why does this look so <strong>
					complicated?</strong></p>
</div>
```

It's good to separate block elements onto their own lines, and add one additional tab for each nested child element.

```html
<!-- This is easier to read -->
<div id="content">
	<p>Hey, why does this look so <strong>awesome?</strong></p>
</div>
```

The same thing applies to your CSS. Use indentation, and line breaks for readability. I prefer to put each selector and declaration on its own line.

```css
p,
#content,
.text {
	font-family: helvetica, arial, sans-serif;
	font-size: 13px;
	line-height: 18px;
}
```

There are some variations on how you configure your text editor to do tabs—4 space tabs, 2 space tabs, tabs as tabs—it actually doesn't matter too much as long as you use the same tab style consistently.

### Make your HTML look good

This is more stylistic than anything, you can get away with not doing this and most browsers will do the right thing, but it will keep our code looking clean.

```html
<P ID=content>This is fugly HTML.</P>
```

Lowercase your tag names, and always use double quotes around your attribute values.

```html
<p id="content">This is clean looking HTML.</p>
```

### Keep your styles in a separate .css file

There are multiple ways to include CSS rules on your page. The most direct way, that overrides all the other styles, is to styles as an attribute in the HTML. You should never do this.

```html
<!-- Don't do this -->
<p style="font-size: 150%">This text will be bigger.</p>
```

Another way you can include styles, is by adding a `<style>` element to your web page's `<head>`. Sometimes this is necessary, but for the most part you should assume this is a bad idea.

```html
<!DOCTYPE html>
<html>
	<head>
		<style>
		
		/* Don't do this either */
		p {
			font-size: 150%;
		}
		
		</style>
	</head>
```

For now, you should assume that it's always better to keep your styles in a dedicated `style.css` file, and include that using a `<link>` element.

```html
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="styles.css">
	</head>
```

### Add a viewport to your head

The final improvement we will make this week is to define a viewport for our page. This will zoom mobile browsers in closer to make the text more readable.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width">
	</head>
```

Load the page up on a phone to see how this effects your page layout and tweak your CSS accordingly. Make sure your text is readable on a mobile browser.

**Further reading:**

* [Mozilla Developer documentation on the viewport](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)
* [JavaScript Kit on the viewport](http://www.javascriptkit.com/dhtmltutors/cssmediaqueries3.shtml)
