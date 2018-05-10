# IntersectionObserver-loader
Helpful script to lazy-load images.

## Getting Started
Install the script onto your site.
Add a class of "lazyloadimg" to all images and elements with background images you would like to lazy load. 
For image elements replace src with "data-lzimg", the result should look something like this:
```
<img data-lzimg="/dir/someimage.jpg" alt=" " class="lazyloadimg">
```

For CSS background images add a data attribute of "lzbgimg" to the element and remove any CSS rules that apply a background image, the result should look something like this:
```
<div class="lazyloadimg" data-lzbgimg="/dir/someimage.jpg"></div>
```


## Authors
Ryan Dool
