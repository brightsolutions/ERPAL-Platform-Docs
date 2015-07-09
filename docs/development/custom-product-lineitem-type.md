~ intro  In some cases...

For our example, let's say we have a t-shirt-shop. And for that shop want to setup a product-type that gives us the option to specify the color and size of the shirts we are shipping.

Therefore we will show you how to create custom product-types and line-item-types, and how to add these new options to the line-items.


## 1. Create a product-type
1. Navigate to: Store » Products » Product types » Add product type
1. Insert a name for your product-type e.g. "T-Shirt"
1. Click the "Save and add fields"-Button at very the end of the form
1. Add two new text-fields named "Color" and "Size"
    - it will be beneficial to adjust the field names to `field_shirt_color` and `field_shirt_size`, to prevent any 
    inconveniences in the future
    - you might as well use taxanomy-terms instead of text-fields, but we'll take the easy path for now
1. Save it


## 2. Add line-item-type
~ explain why we're doing this ~

FYI: These fields will be displayed while adding an item to an order, so you might want to adjust the field-sizes to 
fit your liking.

1. Go to: Store » Configuration » Line item types » Add a product line item type
1. Insert a fitting name, we'll again go with "T-Shirt", as the line-item should accompany out new product-type
1. Add the existing fields `field_shirt_color` and `field_shirt_size` (in our case same as with product-type)
1. Save that line-item-type!


## 3. ~ insert title ~
Next we will reference the product-types in the fresh line-item-types for the order.

1. Navigate to Store » Configuration » Order Settings » Manage fields
1. Edit the "line items" widget-type
1. The widget-type should be set to "Dynamic line item widget"
1. Adjust the "Settings for _T-Shirts_ line item type" (a fieldset within the dynamic line item widget fieldset) 
    1. Select the correct "Product type", in our case - you might have guessed it - "T-Shirt"
    1. Set `commerce_unit_price` to `commerce_price`
    1. Set `field_tshirt_color` to `field_tshirt_color`
    1. And finally `field_pants_size` to `field_pants_size`
1. Hit "Continue" and "Save"

You may want to repeat these steps for your invoices and quotes as well. Their config is located at: Store » 
Configuration » Order types » Invoice / Quote.


## 4. The Final: create a product & check
1. Find your way to: Store » Products » Add a product » Create T-Shirt
   or via the ERPAL Menu "Products" and then the local action (the button on top) "Add a product"
1. As you can see our two new fields are added to the form. Now insert all data.
    Remember the sku-value.
1. Insert the sku into the product-autocomplete-field and select the recently created product
1. Now you should see who the fields adjusted to the different product-type and its fields.

~ summary ~
