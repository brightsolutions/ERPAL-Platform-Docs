Changing the menu icon is basically an easy thing to do, all you need is an image and a few lines of css.
For the icon, we suggest to use an 15 by 15px PNG-image with background-transparency, preferable in plain white to 
match the style.


## The CSS-Selector
To have a better access style-wise, we added a theme-function to automatically add a class, based on the 
menu-item-title to each menu-link.
The **class-name** consists of the **hyphenated title in lowercase with special-characters removed**.

For example:

  - the menu-item with the title "Quotes" would have the class-name `quotes`
  - "My new Menu-item" would have `my-new-menu-item`
  - and "neuer Menüeintrag" would result in `neuer-men-eintrag` - note that the "ü" was removed and not replaced.
  
When in doubt, make sure to check the class-name with the developer tools of your favorite browser.


## The Style
Straight to the point:

    .pane-menu-erpal-menu a.<menu-item-class-name>:before {
      content: '';
      background: transparent url('<path-to-your-image>/<icon-filename.png>') no-repeat center center;
      height: 30px;
      width: 15px;
    }
    
Remember to adjust the **path and filename of the image**, as well as the **menu-item-class-name**.


### Where do I add the new style?
In general there are two options: with a (new custom) module or in a sub-theme.


#### ... in a subtheme
As for the sub-theme, please see the documentation on [creating a sub-theme](subtheme.md#21-info-file).


#### ... with a new custom module

1. **create a new module-folder**
  
    The folder should be created inside the `sites/all/modules`-folder. it is considered to be a good practice to 
    collect all custom created modules in a sub-folder named "custom" (so `sites/all/modules/custom`).
    
    the name should be all lowercase, without special characters but underscores, e.g. `my_awesome_module` or 
    `custom_erpal_menu_icons`. Let's stick with the last one as we go.
    
1. **create the .info file**
  
    The .info-file is used to store metadata of modules and also to let Drupal know that the module exists. As we 
    just want to add some css it's going to be a very simple one.
    
    The filename needs to be exactly like the folder-name, in our example `custom_erpal_menu_icons.info`.
  
    And this is the basic content:
  
        name = Custom ERPAL menu-icons
        description = Provides icons for ERPAL-menu-items.
        core = 7.x
        package = ERPAL
        
        stylesheets[all][] = css/erpal-menu-icons.css
        
    As you can see we already specified a dependency for a css-file where we can store the new custom styles.
        
1. **create the .module file**

    In our example we don't want to add any additional logic to the module, but still need the .module file, 
    therefore we create a file names `custom_erpal_menu_icons.module` and add the following lines as we want to stick
    to a good practice.
    
        <?php
        
        /**
         * @file
         * Provide additional styling for the ERPAL menu.
         */



1. **add the styles**
    
    Create a folder called "css" and the style-sheet itself, in our case `erpal-menu-icons.css` and add the styles to
     it.


1. **clear cache**

    Our best friend - `$ drush cc all` or by navigating to [Configuration » Development » Performance » "Clear all caches"](https://www.drupal.org/documentation/clearing-rebuilding-cache)
    
    
1. **finally: enable the module**

    This can eighter be done by using drush (`$ drush en -y <your-modulename>` in our case
    `$ drush en -y custom_erpal_menu_icons`) or by going to the modules section and enabling it manually.
    

For additional information on how to create a module and what you can do with it please have a look at 
[creating modules (7.x) on drupal.org](https://www.drupal.org/developing/modules/7).


## For advanced users
As we use the great [Font Awesome iconset](http://fortawesome.github.io/Font-Awesome) in our ERPAL-theme you have the
 option to just change the glyph-content, to get an icon of your liking.

So let's say you created a new page listing all your freelance-workers and would like to give it the [users-icon](http://fortawesome.github.io/Font-Awesome/icon/users/). Therefore grab the glyph-code and reformat it so that 
you can use it for the css content-property and add the respective style (assuming the link title is "Freelancer"):

    .pane-menu-erpal-menu a.freelancer:before {
      content: '\xf0c0;';
    }

See the [cheat-sheet](http://fortawesome.github.io/Font-Awesome/cheatsheet/) for information of the glyph-codes.