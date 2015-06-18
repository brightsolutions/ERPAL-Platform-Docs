Changing the menu icon is basically an easy thing to do, all you need is an image and a few lines of css.
For the icon, we suggest to use an 15 by 15px PNG-image, preferable in plain white to match the style.


### The CSS-Selector
To have a better access style-wise, we added a theme-function to automatically add a class, based on the 
menu-item-title to each menu-link.
The **class-name** consists of the **hyphenated title in lowercase with special-characters removed**.

For example:

  - the menu-item with the title "Quotes" would have the class-name `quotes`
  - "My new Menu-item" would have `my-new-menu-item`
  - and "neuer Menüeintrag" would result in `neuer-men-eintrag` - note that the "ü" was removed and not replaced.
  
When in doubt, make sure to check the class-name with the developer tools of your favorite browser.


### The Style
Straight to the point:

    .pane-menu-erpal-menu a.<menu-item-class-name>:before {
      content: '';
      background: transparent url('<path-to-your-image>/<icon-filename.png>') no-repeat center center;
      height: 30px;
      width: 15px;
    }
    
Remember to adjust the **path and filename of the image**, as well as the **menu-item-class-name**.


### Where do I add the new style?
In general there are two options: 1st with a (new custom) module or 2nd in a sub-theme.

  1. [creating modules (7.x) on drupal.org](https://www.drupal.org/node/1074360)
  1. As for the sub-theme, please see the documentation on
  [creating a sub-theme](subtheme.md#21-info-file).


### For advanced users
As we use the great [Font Awesome iconset](http://fortawesome.github.io/Font-Awesome) in our ERPAL-theme you have the
 option to just change the glyph-content, to get an icon of your liking.

So let's say you created a new page listing all your freelance-workers and would like to give it the [users-icon](http://fortawesome.github.io/Font-Awesome/icon/users/). Therefore grab the glyph-code and reformat it so that 
you can user it for the css content-property and add the respective style:

    .pane-menu-erpal-menu a.freelancer:before {
      content: '\xf0c0;';
    }

See the [cheat-sheet](http://fortawesome.github.io/Font-Awesome/cheatsheet/) for information of the glyph-codes.