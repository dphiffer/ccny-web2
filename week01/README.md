## Week 1: Developer Tools
#### Design for the World Wide Web 2

Before we begin, please fill out the [student survey](https://docs.google.com/forms/d/1lMjTXflX3SHJvwfyvbkKLXRVmN0XgcdPijFT18zVDFg/edit).

The first developer tool we are going to learn about is [GitHub](https://github.com/), a popular code sharing and hosting service. It has quickly become the dominant tool for collaborating with developers, and for distributing open source code. GitHub is also used for [all sorts of stuff](http://www.ted.com/talks/clay_shirky_how_the_internet_will_one_day_transform_government) that has nothing to do with code.

### Build a mobile-friendly web page

The assignment this week is to build a mobile-friendly website. We are going to use GitHub to host it (for free), and start becoming familiar with the conventions of working with a code repository. Your page can be extremely simple, just some basic HTML and CSS. It should include at least one image that you have previously created and uploaded to the internet (if you have never uploaded an image to the internet, use [Flickr](https://flickr.com/) or [Imgur](https://imgur.com) to upload a new one.) The main point this week is to create something very basic, that looks good on a mobile web browser. You don't need to care about desktop or tablet, just mobile.

We have a reading that accompanies this week's assignment: [All you need is publish](https://medium.com/message/this-is-how-we-publish-b050172dcb05)

#### Sign up for GitHub

![All hail Octocat](img/octocat.png)

1. Start by creating a GitHub account at [github.com](https://github.com/).
2. Leave the plan set to "free" and click the green *Finish sign up* button.
3. Check your email, you should have a message with the subject "[GitHub] Please verify your email." Click on the link to verify your email address. (You should make sure to open the link in the same web browser you used to sign up.)
4. On the resulting page, click the *Confirm* button next to your email address.

#### Create a new code repository

1. Now that you're signed in on GitHub, notice on the top-right part of the page it shows a plus sign button next to your username. Click on that and choose *New repository*.
2. In the box that says *Repository name*, enter your username followed by ".github.io". So if your username is "alice" you would enter "alice.github.io". Typing this precisely is important, so double-check it before you continue.
3. Click the green *Create repository* button.
4. On the next page, you'll see a lot of information. You can ignore most of it and just click on the README link, next to the text that says "We recommend every repository include a..."
5. Type in a short description of what you'd like your website to look like, something like "I am building my personal portfolio site here." (Type your description under the `=======================` part, which is a formatting rule from [GitHub-flavored Markdown](https://help.github.com/articles/github-flavored-markdown).)
6. Click on the green *Commit new file* button on the bottom of the page.

#### Hello, World

1. You should be on the GitHub repository page, at a URL that's something like `https://github.com/alice/alice.github.io` (of course, with your username in place of `alice`). Click on the plus button as shown in this screen shot to create a new file:  
  ![Create a new file](img/new_file.jpg)
2. Type `index.html` into the box that says "Name your file."
3. Type in some basic HTML (see this [template](template.html) for a starting point).
4. Click the green *Commit new file* to upload your page.
5. Visit *[your username]*.github.io to see your new page! (If this doesn't work at first, give it a few minutes and see if it appears.)

#### Mobile first

1. Use GitHub to edit the index.html page you just crated. If you click on the filename, you should see a pencil icon to edit the file's contents.
2. Click *Commit changes* when you're ready to test things out.
3. You can add additional files, such as a stylesheet, by clicking the same plus icon you used in the *Hello, World* section above.
4. Continue editing and saving your HTML and CSS until you have something you're happy with.
