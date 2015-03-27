---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-02-25 17:54:17
categories: jekyll update
tags: [markdown, jquery, jekyll]
image: "/assets/images/2015/wood-3.jpg"
summary: "从引爆朋友圈的H5小游戏《围住神经猫》，到颠覆传统广告的大众点评H5专题页《我们之间只有一个字》，从2014下半年起，各种H5游戏和专题页纷纷崭露头角。“H5”，这个由HTML5简化而来的词汇，借由微信这个移动社交平台，正在走进更多人的视野。本文聚焦于基于微信传播的H5页面的视觉设计，通过一些案例分析来谈谈设计思路与方法，希望与大家进行交流探讨。"
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

~~~~~ ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
~~~~~

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help

Redcarpet is written with sugar, spice and everything nice
============================================================

[![Build Status](https://travis-ci.org/vmg/redcarpet.svg?branch=master)](https://travis-ci.org/vmg/redcarpet)

从引爆朋友圈的H5小游戏《围住神经猫》，到颠覆传统广告的大众点评H5专题页《我们之间只有一个字》，从2014下半年起，各种H5游戏和专题页纷纷崭露头角。“H5”，这个由HTML5简化而来的词汇，借由微信这个移动社交平台，正在走进更多人的视野。本文聚焦于基于微信传播的H5页面的视觉设计，通过一些案例分析来谈谈设计思路与方法，希望与大家进行交流探讨。

功能与目标
===

1.活动运营型H5专题页主要有以下4大类型
------------

### 首先从功能与设计目标来看， H5专题页主要有以下4大类型：

<p>This is a pragraph. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.</p>

<h1 id="thisisanh1">This is an H1</h1>

<p>Quisque facilisis erat a dui. Nam malesuada ornare dolor. Cras gravida, diam sit amet rhoncus ornare, erat elit consectetuer erat, id egestas pede nibh eget odio. Proin tincidunt, velit vel porta elementum, magna diam molestie sapien, non aliquet massa pede eu diam. Aliquam iaculis. Fusce et ipsum et nulla tristique facilisis.</p>

<h2 id="thisisanh2">This is an H2</h2>

<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.</p>

<h3 id="thisisanh3">This is an H3</h3>

<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.</p>

<h4 id="thisisanh4">This is an H4</h4>

<p>Quisque facilisis erat a dui. Nam malesuada ornare dolor. Cras gravida, diam sit amet rhoncus ornare, erat elit consectetuer erat, id egestas pede nibh eget odio. Proin tincidunt, velit vel porta elementum, magna diam molestie sapien, non aliquet massa pede eu diam. Aliquam iaculis.</p>

<h5 id="thisisanh5">This is an H5</h5>

<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.</p>

<h3 id="quoting">Quoting</h3>

<blockquote>
  <p>In the beginner’s mind there are many possibilities, but in the expert’s mind there are few.</p>
</blockquote>

<h3 id="code">Code</h3>

<pre><code>#header h1 a {
    display: block;
    width: 300px;
    height: 80px;
}</code></pre>

<h3 id="videos">Videos</h3>

<!-- <p><iframe src="https://player.vimeo.com/video/32947304" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/32947304">Passion</a> from <a href="https://vimeo.com/user9474858">Zach Bainter</a> on <a href="https://vimeo.com">Vimeo</a>.</p></p> -->
<div class="featured-video">
  <div class="embed-container">
    <iframe src="//player.vimeo.com/video/32947304" width="720" height="405" frameborder="0" title="Box" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
</div>
<h3 id="images">Images</h3>

<p>Images work too! Already know the URL of the image you want to include in your article? Simply paste it in like this to make it show up:</p>

<p><img src="/assets/images/2015/wood-2.jpg" alt="" /></p>

<h4>Unordered Lists</h4>

<ul>
<li>Donec non tortor in arcu mollis feugiat</li>
<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
<li>Donec id eros eget quam aliquam gravida</li>
<li>Vivamus convallis urna id felis</li>
<li>Nulla porta tempus sapien</li>
</ul>

<h4>Ordered Lists</h4>

<ol>
<li>Donec non tortor in arcu mollis feugiat</li>
<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
<li>Donec id eros eget quam aliquam gravida</li>
<li>Vivamus convallis urna id felis</li>
<li>Nulla porta tempus sapien</li>
</ol>

Redcarpet is a Ruby library for Markdown processing that smells like
butterflies and popcorn.

This library is written by people
---------------------------------

Redcarpet was written by [Vicent Martí](https://github.com/vmg). It is maintained by
[Robin Dupret](https://github.com/robin850) and [Matt Rogers](https://github.com/mattr-).

Redcarpet would not be possible without the [Sundown](https://www.github.com/vmg/sundown)
library and its authors (Natacha Porté, Vicent Martí, and its many awesome contributors).

You can totally install it as a Gem
-----------------------------------

Redcarpet is readily available as a Ruby gem. It will build some native
extensions, but the parser is standalone and requires no installed libraries.
Starting with Redcarpet 3.0, the minimum required Ruby version is 1.9.2 (or Rubinius in 1.9 mode).

    $ [sudo] gem install redcarpet

If you need to use it with Ruby 1.8.7, you will need to stick with 2.3.0:

    $ [sudo] gem install redcarpet -v 2.3.0

The Redcarpet source is available at GitHub:

    $ git clone git://github.com/vmg/redcarpet.git


And it's like *really* simple to use
------------------------------------

The core of the Redcarpet library is the `Redcarpet::Markdown` class. Each
instance of the class is attached to a `Renderer` object; the Markdown class
performs parsing of a document and uses the attached renderer to generate
output.

The `Redcarpet::Markdown` object is encouraged to be instantiated once with the
required settings, and reused between parses.

~~~~~ ruby
# Initializes a Markdown parser
markdown = Redcarpet::Markdown.new(renderer, extensions = {})
~~~~~

Here, the `renderer` variable refers to a renderer object, inheriting
from `Redcarpet::Render::Base`. If the given object has not been
instantiated, the library will do it with default arguments.

Rendering with the `Markdown` object is done through `Markdown#render`.
Unlike in the RedCloth API, the text to render is passed as an argument
and not stored inside the `Markdown` instance, to encourage reusability.
Example:

~~~~~ ruby
markdown.render("This is *bongos*, indeed.")
# => "<p>This is <em>bongos</em>, indeed.</p>"
~~~~~

You can also specify a hash containing the Markdown extensions which the
parser will identify. The following extensions are accepted:

* `:no_intra_emphasis`: do not parse emphasis inside of words.
Strings such as `foo_bar_baz` will not generate `<em>` tags.

* `:tables`: parse tables, PHP-Markdown style.

* `:fenced_code_blocks`: parse fenced code blocks, PHP-Markdown
style. Blocks delimited with 3 or more `~` or backticks will be considered
as code, without the need to be indented. An optional language name may
be added at the end of the opening fence for the code block.

* `:autolink`: parse links even when they are not enclosed in `<>`
characters. Autolinks for the http, https and ftp protocols will be
automatically detected. Email addresses and http links without protocol,
but starting with `www` are also handled.

* `:disable_indented_code_blocks`: do not parse usual markdown
code blocks. Markdown converts text with four spaces at
the front of each line to code blocks. This options
prevents it from doing so. Recommended to use
with `fenced_code_blocks: true`.

* `:strikethrough`: parse strikethrough, PHP-Markdown style.
Two `~` characters mark the start of a strikethrough,
e.g. `this is ~~good~~ bad`.

* `:lax_spacing`: HTML blocks do not require to be surrounded by an
empty line as in the Markdown standard.

* `:space_after_headers`: A space is always required between the hash
at the beginning of a header and its name, e.g. `#this is my header`
would not be a valid header.

* `:superscript`: parse superscripts after the `^` character; contiguous superscripts
are nested together, and complex values can be enclosed in parenthesis, e.g.
`this is the 2^(nd) time`.

* `:underline`: parse underscored emphasis as underlines.
`This is _underlined_ but this is still *italic*`.

* `:highlight`: parse highlights.
`This is ==highlighted==`. It looks like this: `<mark>highlighted</mark>`

* `:quote`: parse quotes.
`This is a "quote"`. It looks like this: `<q>quote</q>`

* `:footnotes`: parse footnotes, PHP-Markdown style. A footnote works very much
like a reference-style link: it consists of a  marker next to the text (e.g.
`This is a sentence.[^1]`) and a footnote definition on its own line anywhere
within the document (e.g. `[^1]: This is a footnote.`).

Example:

~~~ruby
markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true)
 ~~~~~

Darling, I packed you a couple renderers for lunch
--------------------------------------------------

Redcarpet comes with two built-in renderers, `Redcarpet::Render::HTML` and
`Redcarpet::Render::XHTML`, which output HTML and XHTML, respectively. These
renderers are actually implemented in C and hence offer brilliant
performance — several degrees of magnitude faster than other Ruby Markdown
solutions.

All the rendering flags that previously applied only to HTML output have
now been moved to the `Redcarpet::Render::HTML` class, and may be enabled when
instantiating the renderer:

~~~~~ ruby
Redcarpet::Render::HTML.new(render_options = {})
~~~~~

Initializes an HTML renderer. The following flags are available:

* `:filter_html`: do not allow any user-inputted HTML in the output.

* `:no_images`: do not generate any `<img>` tags.

* `:no_links`: do not generate any `<a>` tags.

* `:no_styles`: do not generate any `<style>` tags.

* `:escape_html`: escape any HTML tags. This option has precedence over
`:no_styles`, `:no_links`, `:no_images` and `:filter_html` which means
that any existing tag will be escaped instead of being removed.

* `:safe_links_only`: only generate links for protocols which are considered
safe.

* `:with_toc_data`: add HTML anchors to each header in the output HTML,
to allow linking to each section.

* `:hard_wrap`: insert HTML `<br>` tags inside on paragraphs where the origin
Markdown document had newlines (by default, Markdown ignores these newlines).

* `:xhtml`: output XHTML-conformant tags. This option is always enabled in the
`Render::XHTML` renderer.

* `:prettify`: add prettyprint classes to `<code>` tags for google-code-prettify.

* `:link_attributes`: hash of extra attributes to add to links.

Example:

~~~~~ ruby
renderer = Redcarpet::Render::HTML.new(no_links: true, hard_wrap: true)
~~~~~


The `HTML` renderer has an alternate version, `Redcarpet::Render::HTML_TOC`,
which will output a table of contents in HTML based on the headers of the
Markdown document.

When instantiating this render object, you can optionally pass a `nesting_level`
option which takes an integer and allows you to make it render only headers
until a specific level.

Furthermore, the abstract base class `Redcarpet::Render::Base` can be used
to write a custom renderer purely in Ruby, or extending an existing renderer.
See the following section for more information.


And you can even cook your own
------------------------------

Custom renderers are created by inheriting from an existing renderer. The
built-in renderers, `HTML` and `XHTML` may be extended as such:

~~~~~ ruby
# create a custom renderer that allows highlighting of code blocks
class HTMLwithPygments < Redcarpet::Render::HTML
  def block_code(code, language)
    Pygments.highlight(code, lexer: language)
  end
end

markdown = Redcarpet::Markdown.new(HTMLwithPygments, fenced_code_blocks: true)
~~~~~

But new renderers can also be created from scratch (see `lib/redcarpet/render_man.rb` for
an example implementation of a Manpage renderer)

~~~~~~ ruby
class ManPage < Redcarpet::Render::Base
  # you get the drill -- keep going from here
end
~~~~~

The following instance methods may be implemented by the renderer:

### Block-level calls

If the return value of the method is `nil`, the block will be skipped.
Therefore, make sure that your renderer has at least a `paragraph` method
implemented. If the method for a document element is not implemented, the
block will be skipped.

Example:

~~~~ ruby
class RenderWithoutCode < Redcarpet::Render::HTML
  def block_code(code, language)
    nil
  end
end
~~~~

* block_code(code, language)
* block_quote(quote)
* block_html(raw_html)
* footnotes(content)
* footnote_def(content, number)
* header(text, header_level)
* hrule()
* list(contents, list_type)
* list_item(text, list_type)
* paragraph(text)
* table(header, body)
* table_row(content)
* table_cell(content, alignment)

### Span-level calls

A return value of `nil` will not output any data. If the method for
a document element is not implemented, the contents of the span will
be copied verbatim:

* autolink(link, link_type)
* codespan(code)
* double_emphasis(text)
* emphasis(text)
* image(link, title, alt_text)
* linebreak()
* link(link, title, content)
* raw_html(raw_html)
* triple_emphasis(text)
* strikethrough(text)
* superscript(text)
* underline(text)
* highlight(text)
* quote(text)
* footnote_ref(number)

**Note**: When overriding a renderer's method, be sure to return a HTML
element with a level that matches the level of that method (e.g. return a
block element when overriding a block-level callback). Otherwise, the output
may be unexpected.

### Low level rendering

* entity(text)
* normal_text(text)

### Header of the document

Rendered before any another elements:

* doc_header()

### Footer of the document

Rendered after all the other elements:

* doc_footer()

### Pre/post-process

Special callback: preprocess or postprocess the whole document before
or after the rendering process begins:

* preprocess(full_document)
* postprocess(full_document)

You can look at
["How to extend the Redcarpet 2 Markdown library?"](http://dev.af83.com/2012/02/27/howto-extend-the-redcarpet2-markdown-lib.html)
for some more explanations.

Also, now our Pants are much smarter
------------------------------------

Redcarpet 2 comes with a standalone [SmartyPants](
http://daringfireball.net/projects/smartypants/) implementation. It is fully
compliant with the original implementation. It is the fastest SmartyPants
parser there is, with a difference of several orders of magnitude.

The SmartyPants parser can be found in `Redcarpet::Render::SmartyPants`. It has
been implemented as a module, so it can be used standalone or as a mixin.

When mixed with a Renderer class, it will override the `postprocess` method
to perform SmartyPants replacements once the rendering is complete.

~~~~ ruby
# Mixin
class HTMLWithPants < Redcarpet::Render::HTML
  include Redcarpet::Render::SmartyPants
end

# Standalone
Redcarpet::Render::SmartyPants.render("<p>Oh SmartyPants, you're so crazy...</p>")
~~~~~

SmartyPants works on top of already-rendered HTML, and will ignore replacements
inside the content of HTML tags and inside specific HTML blocks such as
`<code>` or `<pre>`.

What? You really want to mix Markdown renderers?
------------------------------------------------

Redcarpet used to be a drop-in replacement for Redcloth. This is no longer the
case since version 2 -- it now has its own API, but retains the old name. Yes,
that does mean that Redcarpet is not backwards-compatible with the 1.X
versions.

Each renderer has its own API and its own set of extensions: you should choose one
(it doesn't have to be Redcarpet, though that would be great!), write your
software accordingly, and force your users to install it. That's the
only way to have reliable and predictable Markdown output on your program.

Markdown is already ill-specified enough; if you create software that is
renderer-independent, the results will be completely unreliable!

Still, if major forces (let's say, tornadoes or other natural disasters) force you
to keep a Markdown-compatibility layer, Redcarpet also supports this:

~~~~~ ruby
require 'redcarpet/compat'
~~~~~

Requiring the compatibility library will declare a `Markdown` class with the
classical RedCloth API, e.g.

~~~~~ ruby
Markdown.new('this is my text').to_html
~~~~~

This class renders 100% standards compliant Markdown with 0 extensions. Nada.
Don't even try to enable extensions with a compatibility layer, because
that's a maintenance nightmare and won't work.

On a related topic: if your Markdown gem has a `lib/markdown.rb` file that
monkeypatches the Markdown class, you're a terrible human being. Just saying.

Boring legal stuff
------------------

Copyright (c) 2011-2014, Vicent Martí

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
