A standalone product, that can be a variation of a product display, (product dispalys are only needed if we are talking about an online-shop). Only products that are created by a user with the permission to create products can be sold. Every product has an sku to be uniquely identified. Products have fields:

- Attribute fields: Fields with defined list of options. Attribute fields are displayed as select boxes on the product display for the user to select the variation. For example a size field. You create a product with size M and a product with size L. Now in the shop viewing the product display the customer can choose in the select box from those two sizes to select the product he wants to buy. So this field can be “modified” by the customer. In ERPAL backend the user directly selects a specific product, so the field in the line item will be prefilled from this.

- Property fields: These fields are absolutely required for ERPAL (and commerce) to work. For more info see properties list of commerce products. Example: base price. But also fields that inform the user about the product, for example an image, that the customer can not modify.

There are products (for example: T-shirt, color: red, size: m, price: 15€, sku: t-shirt-red-m) and services (website maintenance 100€/h, sku: web_main). The main difference is in the [unit](#unit), usually services are paid by the hour and products by quantity of items.

## Unit
Products have a unit of measurement in which they will be delivered. Units can be for example Hour, day, month when selling a service, item on tshirts, liter on oil, volume on firewood and cm, meter on fabric. When possible the units will be converted, for example a product has a price per meter, but a customer only buys 10cm he actually buys 0,1 meter. ERPAL needs units on every product so it counts as a property field and is automatically added to a new product type on creation.
