~ intro ~
add timeframes info


## video


## Preparation
Download & Enable:

- Modules
    - Commerce AutoSKU (commerce_autosku)
    - Views UI (views_ui)
    - Cart (commerce_cart)
    - ERPAL Commerce Cart (erpal_commerce_cart)
    - ERPAL Quote Commerce Cart (erpal_quote_commerce_cart)
    - Payment Method Example (commerce_payment_example) [for demo/testing]
    - ThemeKey (themekey)
    - ThemeKey UI (thtmekey_ui)
- Theme
    - AT Commerce


## Add Product Display
1. Structure » Content types » Add content type
1. Fields:
    - image » image
    - product » product reference » inline entity form + required


## Configure Product
1. Store » Products » Product types » Product
1. enable "Automatically Generate SKU" » set pattern » [commerce-product:title]


## Add Products
…


## Create Products-list (view)
1. add new view
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
1. create new page
    - Structure » Pages » Add custom page
    - Path: front
    - Layout: 2 column
    - Content
        - left: user menu
        - right: view pane


## Improvements
1. enable AT Commerce theme and set as default
1. Add User role
    - People » Permissions » Roles
      - Add role: "Administrator"
    - Assign rule to your user
1. Set ERPAL Theme for Admins
    - Configuration » User interface » ThemeKey
    - add rule: `user role` = "Administrator"; theme: `ERPAL Theme`
1. Add Link "Dashboard" to ERPAL Menu; path: home
1. create demo user
1. add logo to AT Commerce Theme
    - Appearance » Settings » AT Commerce Theme
    - Logo image settings
    - uncheck use default
    - upload image


## Summary