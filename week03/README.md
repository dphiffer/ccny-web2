## Week 3: Typography and layout
#### [Design for the Web 2](https://github.com/ccny-edm/web2)

This week we are thinking about layout and typography as they apply to building websites. We are going to experiment with some techniques that might allow us to find more appropriate or *less approprate* presentations of a text.

* Reading this week: [Responsive Web Design](http://alistapart.com/article/responsive-web-design) by Ethan Marcotte

### Take a stroll through the garden

We'll start this week by taking some time to find some design inspiration, and also learning from the mistakes of others. Browse the [CSS Zen Garden](http://www.mezzoblue.com/zengarden/alldesigns/) and choose two examples of layout techniques that you find interesting. Use Firebug to pick apart how the layout was achieved. Adjust various CSS properties and see what happens.

You are looking for two layouts: one that you find *effective*, and one that you find *misguided*. Think about why one of them works, and the other doesn't. Is it the aesthetics? Is the text difficult to read? Think about what it is you like or don't like in each case.

### Write about it

Write a short essay about what you like and don't like about two of the designs. Try to explain how the layouts work; what kinds of CSS properties are involved? Be critical, but try to base your opinions on concrete arguments. It's not enough to say that you don't like an approach because it's ugly, instead explain what it is you don't like about it.

### Layout your essay

Make a web page for your essay. It should have a single HTML file and a single CSS file (call them layout.html and layout.css). You can start off with the same boilerplate HTML template we used in the first and second week's assignment. Most of our efforts will go into fine-tuning our CSS. Instead of using the GitHub website, work on files on your local computer. To check your changes, use the 'File &rarr; Open' menu option to open up your page in a web browser.

Use the layout approaches we discussed in class, as well as those you observed in the CSS Zen Garden, to build a layout for your essay. Think about the line length, the spacing between lines, the font size, etc.

Your page should be built mobile first: start with a layout that is meant to work with a narrow screen, and add a media query to accommodate larger screen sizes at a 500px breakpoint. Here is a code snippet that should be helpful for you:

```css
/* Mobile */
#content {
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
}

/* Desktop */
@media screen and (min-width: 500px) {
	
	body {
		text-align: center;
	}

	#content {
		width: 500px;
		margin: 0 auto;
		text-align: left;
	}
	
}
```

### Use `git` to upload your changes

Go to the repository for your website, something like github.com/dphiffer/dphiffer.github.io (but with your username instead of mine). Look for the "Clone URL" on the right hand side of the page. Copy that URL, it should begin with `https://`.

Now use the command line terminal to clone your repository onto your desktop.

```
cd ~/Desktop
git clone https://github.com/dphiffer/dphiffer.github.io.git
```

Copy the files you've been working on into that new folder on your desktop. Now use the following commands to add your new files into the repository. You only need to add them once. From now on, these files are a part of your repository.

```
git add layout.html
git add layout.css
```

Commit the files (the `-m` part is your commit message, an annotation about what you're changing):

```
git commit -m "Adding my layout page"
```

Pull from GitHub in case there are any pending changes:

```
git pull origin master
```

Push your changes up to GitHub:

```
git push origin master
```

That's it! You should see your layout.html page on your site at *username*.github.com/layout.html.
