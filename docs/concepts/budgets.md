A budget has a quantity available and quantity total and a unit. It is needed to control the time or any other unit of the budgets that we want to control such as EUR or any other currency if we want to control expenses with a budget. The most common use case in projects is to control that not more time is spent in a project than the customer ordered (if he ordered time and not a result) or to control that calculated hours are not exceeded (if the customer ordered a result and we want to keep track of our estimations).

## Output / delivery
The expense on a budget is called output, the connection to the project(or other source) is called resource. Outputs shown to the user are called deliveries. Delivery is only a label for an output.

An output can be split and each split into multiple parts. Each part can be booked on a different Budget.

If an output needs to be booked on multiple budgets (not split) the budget is cloned. A reference is saved to keep both outputs synchronized. (Example: An output needs to be booked on a line-item-budget and needs to be booked on the payment-modality-budgets. This way we can keep track of the total delivery and if an invoice-line-item needs to be created.)

If an output is changed the corresponding line item needs to be adjusted if it is not included in an invoice yet. If the line item is in an invoice already a new line-item with the difference is created. If the outputs value is reduced the new line item may have a negative value to serve as credit. (Also invoices with negative amount may be created from this)