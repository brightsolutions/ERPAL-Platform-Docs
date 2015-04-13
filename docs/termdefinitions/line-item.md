A line item is a piece of information on a Cart/[Quote]()/[Order]()/[Invoice]() (QOI). Each line item is something that is sold to the customer. A line item is created from a product at the moment the product is added to the QOI. A line item inherits the fields from a product, the unit in particular. For the user it seems that he added the product to the QOI but by creating a line item we persist the information of the product at the moment of adding. If a product is changed later it is very important that it must not change the line item in any way. The line items and QOI must support [audit-proof archiving]().

There are two possible ways to achieve persisting information.

- **Method 1: Copying all information from the product to the line item on creation.** This would imply for example color, size and price fields need to be created on the product and on the line item.

- **Method 2: Locking the product once a line item is created.** Once a line item is created it is not allowed to edit the product anymore. The line item always retrieves it's attributes like size, color, price from the locked product.

We prefer and implement **method 1** as this is the more common and safer way.

A line item needs to know about it's base price, [tax]() and amount to calculate it's total price. But also discounts on products need to be able to influence the price. To achieve this a price consists of multiple price components.

A line item can only be referenced in one QOI but QOIs can have multiple line items. A classic 1:M relation. Since QOIs often need to list all line items it is more performant to have a multi reference field on QOIs. It must be possible to check if a line item is referenced in an invoice to list not billed line items (see [revenue]()).

An invoice-line-item is created from a payment modality in an order. For each prepaid payment modality (“due with order”) an invoice-line-item is created on order save. For postpaid (“due with delivery”) payment modalities an invoice-line-item is created when the button “deliver” is clicked or a task status is set to “delivered”.

##  Customizable Line Items
We can offer products that are customizable by the customer. For example a t-shirt where the customer can enter a word that will be printed on the t-shirt, a Gift box where the customer can chose two products placed in the gift box. This information is entered in the “add to cart” form. Once added to the cart the information is saved on the line item, not on the product. So there need to be fields to enter and save the custom information on the line items. This must not be serialized information, for each customization there needs to be a separate field.

##  Payment modality
A payment modality is saved on each line item and describes how much has to be paid when for this payment modality. This is saved on each line item. By default line items have to be paid 100% “on delivery” (postpaid), but it is possible to set payment modalities to “on order” (prepaid). Multiple payment modalities can be created for a single line item. For example „20% on order and 80% on delivery“. Speaking in projects, a payment modality can represent a billable milestones (also called deliveries), speaking in products this can be the different shippings if not all products can be shipped together. And also for a t-shirt we can have a first prepayment due with the order and another payment the t-shirt is received.

##  Keeping overview of deliveries and payment modalities
Every line item has a line-item-budget that keeps track of how much has to be and how much has been delivered in total (e.g. 10 of 50 hours or 2 of 10 t-shirts have been delivered). For each payment modality an extra payment-modality-budget is created to keep track of how much of each payment modality is left. This does not influence the line-item-budget. Payment-modality-budgets, line-item-budget and line item use the same unit.

Once a delivery (output entity) is created with the correct unit for a line item its amount is added to the line-item-budget to keep track of the total deliveries. If multiple payment modalities exist the delivery will be added to one or more payment-modality-budgets as well. First to the prepaid budgets and then to the postpaid budgets. If, while adding the delivery amount to the budget, the budget reaches 100% the rest of the delivery will be added to the next payment-modality-budget in line. The delivery keeps track of which budgets it is has been added to. If the delivery is changed all concerning payment-modality- and line-item-budgets will be adjusted accordingly.

| Time | Delivery | Line-item-budget | Prepaid-budget | Postpaid-budget |
|------|---------:|-----------------:|---------------:|----------------:|
| 0    |        0 |          0 / 100 |         0 / 20 |          0 / 80 |
| 1    |        5 |          5 / 100 |         5 / 20 |          0 / 80 |
| 2    |       30 |         35 / 100 |        20 / 20 |         15 / 80 |
| 3    |      -20 |         15 / 100 |        15 / 20 |          0 / 80 |
| 4    |       85 |        100 / 100 |        20 / 20 |         80 / 80 |
| 5    |      -20 |         80 / 100 |        20 / 20 |         60 / 80 |
