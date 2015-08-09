~ intro ~
add timeframes info


## Video
<div data-video="A5rx_UoQXf8"></div>


## Preparation
Download & Enable:

- Modules
    - [Commerce AutoSKU](https://www.drupal.org/project/commerce_autosku) (commerce_autosku)
    - Views UI (views_ui)
    - Cart (commerce_cart)
    - ERPAL Commerce Cart (erpal_commerce_cart)
    - ERPAL Quote Commerce Cart (erpal_quote_commerce_cart)
    - Payment Method Example (commerce_payment_example) [for demo/testing]
    - [ThemeKey](https://www.drupal.org/project/themekey) (themekey)
    - ThemeKey UI (thtmekey_ui)
- Theme
    - [AT Commerce](https://www.drupal.org/project/at_commerce) (at_commerce)

All in one go using drush:

    drush en -y commerce_autosku views_ui commerce_cart erpal_commerce_cart erpal_quote_commerce_cart commerce_payment_example themekey thtmekey_ui at_commerce


## 1. Add Product Display
1. Structure » Content types » Add content type
1. Fields:
    - image » image
    - product » product reference » inline entity form + required


## 2. Configure Product
1. Store » Products » Product types » Product
1. Enable "Automatically Generate SKU" » set pattern » [commerce-product:title]


## 3. Add Products
…


## 4. Create Products-list (view)

### 4.1 Add new view
- show `content` of type [new product type] sorted by `newest first`
- continue & edit
- config
    - format: table
    - (advanced) add relationship: `Content: referenced products`; required
    - add fields
        - Image (thumbnail)
        - Commerce Product: Add to Cart form; `Display a textfield quantity widget on the add to cart form`
    - add content pane
- save


### 4.2 Create new page
- Structure » Pages » Add custom page
- Path: front
- Layout: 2 column
- Content
    - left: user menu
    - right: view pane


## 5. Improvements
1. Enable AT Commerce theme and set as default
1. Add User role
    - People » Permissions » Roles
      - Add role: "Administrator"
    - Assign rule to your user
1. Set ERPAL Theme for Admins
    - Configuration » User interface » ThemeKey
    - add rule: `user role` = "Administrator"; theme: `ERPAL Theme`
1. Add Link "Dashboard" to ERPAL Menu; path: home
1. Create demo user
1. Add logo to AT Commerce Theme
    - Appearance » Settings » AT Commerce Theme
    - Logo image settings
    - uncheck use default
    - upload image
1. Permissions (<a class="seekto">11:05</a>)
    - user permission to view published content
        - view published content for anonymous and authenticated user
        - view any product of any type for anonymous and authenticated user
    - enable checkout button
        - access checkout for authenticated user
    - enable to download own quotes
        - view own orders of any type for authenticated user
1. create invoices page (<a class="seekto">13:56</a>)
    - add new view
        - show `commerce order` of type `order`
        - advanced add context
            - commerce order: uid <--- wrong check group-name (one group above)
            - not available » display "no results found"
            - is available » special validation criteria:
                - validator: user
        - format table
        - fields
            - add commerce order: order pdf
            - remove order id
        - (show quotes)
            - add relationship
                - field_quote » "entity reference: referenced entity"
                - rename to quote
            - add field: "commerce order: quote pdf";
                - select relationship "quote"
        - (show invoice)
            - add relationship
                - field_invoice_order » "entity reference: referencing entity"
                - rename to invoice
            - add field: "commerce order: invoice pdf"
                - select relationship "invoice"
        - add content plane (<a class="seekto">17:15</a>)
            - pane settings: argument input
                - commerce order: uid source » "from context"
                - required context: user edit form » user ID
            - display name "my orders"
        - save
    - create new custom page
        - title & url
        - add contexts: user » logged in user
        - content: add view pane
    - add link to user-menu
1. add payment finished message (<a class="seekto">20:16</a>)
    - store » account settings » completion message
    


## Summary
