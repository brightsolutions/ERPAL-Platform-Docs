~ intro ~
add timeframes info


## Video
<div data-video="A5rx_UoQXf8"></div>

Additional steps required, that are not in the video:

- [5.2.1. Set default site template selection rule](#5.2.1-set-default-site-template-selection-rule)


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
    - ThemeKey UI (themekey_ui)
- Themes
    - [Adaptive Theme](https://www.drupal.org/project/adaptivetheme) (adaptivetheme)
    - [AT Commerce](https://www.drupal.org/project/at_commerce) (at_commerce)

All in one go using drush:

    drush en -y commerce_autosku views_ui commerce_cart erpal_commerce_cart erpal_quote_commerce_cart commerce_payment_example themekey themekey_ui adaptivetheme at_commerce


## 1. Add Product Display
(<a class="seekto">0:40</a>)

1. Go to: Structure » Content types » Add content type (/admin/structure/types/add)
1. Name: 'Office Supplies'
1. Save & add fields
1. Manage Fields: (<a class="seekto">0:53</a>)
    - delete: body
    - add image
        1. label: "Image"
        1. machine name (rename to): "field_office_supplies_image"
        1. field type: `Image`
        1. save
        1. save field settings (no changes here)
        1. check `required field`
        1. save settings
    - add product reference
        1. label: "Product"
        1. machine name (rename to): "field_office_supplies_product"
        1. field type: Product reference
        1. widget: `inline entity form - single value`
        1. save
        1. save field settings (no changes here)
        1. check `required field`
        1. save settings


## 2. Configure Product
(<a class="seekto">1:53</a>) Store » Products » Product types » Product (/admin/commerce/products/types/product)

1. Enable `Automatically Generate SKU`
1. Set `Pattern` to "[commerce-product:title]" (Products » Title)
1. Save product type


## 3. Add Products
(<a class="seekto">2:16</a>) Content » Add content » Office Supplies
…


## 4. Create Products-list (view)
(<a class="seekto">3:10</a>)

### 4.1 Add a new view
(<a class="seekto">3:27</a>)

1. Go to: Structure » Views » Add new View (/admin/structure/views/add)
    - View Name: "Shop: Product list"
    - Show `content` of type `Office Supplies` sorted by `newest first`
    - uncheck `create a page`
1. Continue & edit
1. Config (<a class="seekto">3:47</a>)
    - Format: table
    - Fields » Add: `Content Image`; Image style: `Thumbnail`
    - (Advanced) Relationships » Add
        - Check `Content: referenced products`
        - Add and configure relationships
        - Identifier (rename to) "Product"
        - Check "require this relationship"
        - Apply
    - Fields » Add: `Commerce Product: Add to Cart form`; check `Display a textfield quantity widget on the add to cart form`
    - Fields `Content: Title` » `Create a label` set to "Product"
    - Displays » Add » Content pane
        - Set Display name to "Shop: all products"
1. Save

### 4.2 Add a new page
(<a class="seekto">6:10</a>)

1. Go to: Structure » Pages » Add custom page (/admin/structure/pages/add)
1. Basic setup
    - Set `Administrative title` to "Front page"
    - Set `Path` to "front"
    - Check `Make this your site home page`
1. Continue
1. Choose Layout
    - Select `Category` "Columns: 2"
    - Select "Two column"
1. Continue
1. Continue (no changes to the Panel settings)
1. Panel Content (<a class="seekto">6:36</a>)
    - Set `Title type` to "No title" 
    - Left side: Add content » Menus » "User menu"
    - Right side: Add content » View panes » "View: Shop: Product list: Shop: all products"
1. Finish
1. Save


## 5. Improvements
(<a class="seekto">7:11</a>)

### 5.1 Set shop-theme as default
1. Go to Appearence (/admin/appearance)
1. Enable AT Commerce theme and set as default

### 5.2 Set ERPAL theme for administrators
1. <a name="5.2.1-set-default-site-template-selection-rule"></a>**[not in the video]** Set default site template selection rule
    1. Go to: Structure » Sites » Edit site template (/admin/structure/pages/site_template)
    1. Open ERPAL default » Selection rules
    1. Add "Current theme"
        - Set `Themes` to "ERPAL Theme"
    1. Update and save
1. Add User role (<a class="seekto">8:20</a>)
    1. Go to: People » Permissions » Roles (/admin/people/permissions/roles)
    1. Add role: "administrator"
    1. Assign rule to your user
1. Set ERPAL Theme for Admins (<a class="seekto">8:45</a>)
    1. Go to: Configuration » User interface » ThemeKey (/admin/config/user-interface/themekey)
    1. Add new rule
        - Set `user:role` = "administrator"
        - Set `Theme` to "ERPAL Theme"

### 5.3 Miscellaneous
(<a class="seekto">9:15</a>)

1. Add a link "Dashboard" to ERPAL Menu with path: "home"
1. Create demo user
1. Add logo to AT Commerce Theme (<a class="seekto">9:59</a>)
    1. Go to: Appearance » Settings » AT Commerce Theme (/admin/appearance/settings/at_commerce)
    1. Scroll to `Logo image settings`
    1. Uncheck `Use the default logo`
    1. Save configuration
1. Permissions (<a class="seekto">11:00</a>)
    1. Go to: People » Permissions (/admin/people/permissions)
    1. To view products, add permissions:
        - `View published content` for anonymous and authenticated user
        - `View any product of any type` for anonymous and authenticated user
    1. To enable checkout button, add permission:
        - `Access checkout` for authenticated user
    1. To enable to download own quotes, add permission:
        - `View own orders of any type` for authenticated user
        
### 5.4 Create a quotes, orders and invoices page
(<a class="seekto">13:54</a>)

1. Add new view
    1. Go to: Structure » Views » Add new View (/admin/structure/views/add)
        - Show `Commerce Order` of type `Order`
        - Uncheck `Create a page`
    1. Continue & edit
    1. Config (<a class="seekto">14:15</a>)
        - (Advanced) Add contextual filter
            1. Check `Commerce Order: Uid`
            1. Set `When the filter value is not available` to "Display contents of 'No results found'"
            1. At `When the filter value is available or default is provided` check "Specify validation criteria"
                - Set `Validator` to "User"
            1. Apply
        - Set `Format` to "Table"
        - Add field `Commerce Order: Order PDF`
        - Remove field `Commerce Order: Order ID`
        - Add quotes-pdf-link
            1. Add relationship
                - Check `Entity Reference: Referenced Entity` for "field_quote"
                - Rename Identifier to "Quote"
            1. Add field
                - Check `Commerce Order: Quote PDF`
                - Select relationship "Quote"
        - Add invoice-pdf-link
            1. Add relationship
                - Check `entity reference: referencing entity` for "field_invoice_order"
                - Rename Identifier to "Invoice"
            1. Add field
                - Check `Commerce Order: Invoice PDF`
                - Select relationship "Invoice"
        - Add content plane (<a class="seekto">17:15</a>)
            1. (Pane settings) Argument input
                - Set `Commerce Order: Uid source` to "From context"
                - Set `Required context` to "User ID" (Group User)
            1. Change display name to "My orders"
    1. Save
1. Create new custom page (<a class="seekto">17:47</a>)
    1. Go to: Structure » Pages » Add custom page (/admin/structure/pages/add)
    1. Basic setup
        - Set `Title`to "My orders"
        - Set `Path` to "my-orders"
        - Check `Contexts`
    1. Contexts
        1. Add contexts
        1. Select `User`
        1. Set `Enter the context type` to "Logged in user"
    1. Panel content
        1. Add Content View panes » View: My orders
1. Add a links to User-menu
    - Add "My orders" with path: "my-orders"
    - Add "My cart" with path: "cart"
    
### 5.5 Change checkout completion message
(<a class="seekto">20:16</a>)

1. Go to: Store » Configuration » (/admin/commerce/config/checkout)
1. Configure "Completion message" and adjust the message
    
    
### 6 NEW (not in video)


## Summary
