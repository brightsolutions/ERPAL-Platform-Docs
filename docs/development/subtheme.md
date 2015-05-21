## Foreword
The following description of how to create a sub-theme is based on the ["Creating a sub-theme"](https://www
.drupal.org/node/225125) documentation on drupal.org, so make sure to check it out in case you want some deeper 
insight on the subject.

That said, we will not go too much into the details but give you just the basics to let you hit the ground running.

## Getting started
basically there are two easy options to create the subtheme:

1. duplicate the erpal-theme, refactor the themename and set the base-theme dependency (see step #2.1)
1. create the whole shebang by hand

here we want to show you the basic steps on how to create the subtheme by hand, as it also covers all the important 
steps when refactoring the theme-name.


## 1. Create a new theme folder
locate the `sites/all/themes/` folder inside you erpal installation (the themes folder in the root would also do 
fine), and create a new folder for your sub-theme.

Please be aware, that the folder **must start with an alphabetical character and only contain lowercase letters, 
numbers and underscores** (e.g. `my_awesome_subtheme`).

No magic so far.


## 2. Create the basic theme content

### 2.1. .info-file
Your new subtheme needs some additional config, that will be done in the `my_awesome_subtheme.info`-file (or however 
you named your theme). It is important that the file-name resembles the folder-name.

This is what the basic content should look like:

    name = my_awesome_subtheme
    description = This is a sub-theme of ERPAL Theme
    core = 7.x
    base theme = erpal_theme

Again, make sure to adjust the sub-theme-name.

The .info-file is also the place where you can add or exclude stylesheets and javascripts amongst other configuration.


## 3. Clear cache
[Configuration » Development » Performance » "Clear all caches"](https://www.drupal.org/documentation/clearing-rebuilding-cache), you know the deal, right?


## 4. Enable your sub-theme

1. go to: "Appearance"
2. look for your theme in the "Disabled themes" section
3. click on "Enable and set as default"

Now your awesome new theme should be first in the list of "enabled themes" and set as default. Cheers!


<!-- uncomment when theme-info page is finished
## Go pro!
(This is where the magic happens)

As mentioned at the beginning (and you might have already noticed it yourself), our ERPAL theme is a sub-theme of
[Omega 4](https://www.drupal.org/project/omega) (we love that theme!), and you can very easily benefit from its 
awesomeness aka integration of drush, grunt, bower, sass & compass (with bundler), and much more.

So make sure to read on [about the ERPAL theme]() to get deeper knowledge on that subject and our conception on the 
theme.
-->
