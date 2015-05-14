In this section we want to show how you can easily add comments to any content-type.

For that purpose we already included some styles for a basic comment-setup; all you need to do is some site-building, no biggie.

The final result will look something like this:
[![pre-styled comments](img/development/comments-result-preview.png)](img/development/comments-result.png)



## 1. create a new image style
[![new image style](img/development/comments-image-style-preview.png)](img/development/comments-image-style.png)

1. go to: Configuration » Media » Image styles » Add style
1. name the style something like "Comments Avatar"
1. add effect **Scale and crop**
1. set width and height to **60px**


## 2. enable comments
[![enable comments](img/development/comments-enable-preview.png)](img/development/comments-enable.png)

1. go to: Structure » Content types » your-content-type
1. set **Comment settings** » **Default comment setting for new content** to **Open**

note: already existing content will not have the comments enabled.


## 3. add comments to the content-type-display
[![add comments to display](img/development/comments-add-to-content-type-preview.png)](img/development/comments-add-to-content-type.png)

1. go to: Structure » Content types » your-content-type » manage display
1. select the respective display-mode (e.g. _Full content_)
1. drag the comments into place (for example the _Footer_ region)

note: make sure you got Display Suite UI enabled (`$ drush en -y ds_ui`)


## 4. set the display for the comments
[![sitebuilding 1](img/development/comments-sitebuilding-preview-1.png)](img/development/comments-sitebuilding.png)

[![sitebuilding 2](img/development/comments-sitebuilding-preview-2.png)](img/development/comments-sitebuilding.png)

1. go to: Structure » Content types » your-content-type » comment display » layout
1. select the **ERPAL Comments** layout
1. save
1. drag the fields to match [the given setup](img/development/comments-sitebuilding.png)
1. set the user picture format to **Comments Avatar** (or however you named it in step 1)

note: don't forget the lable-config


## 5. hide subject and author fields
finally: adding the following code to a [custom modules](https://www.drupal.org/node/1074362) **my_module.module** should do the trick:

    <?php
    /**
     * Implements hook_form_comment_form_alter().
     *
     * Removing unneeded fields from comment form.
     */
    function my_module_form_comment_form_alter(&$form, &$form_state) {
      // Remove subject.
      unset($form['subject']);

      // Remove author field for users, when not editing.
      if ($form['is_anonymous']['#value'] == false && arg(2) != 'edit') {
        $form['author']['#access'] = false;
      }

      return $form;
    }

