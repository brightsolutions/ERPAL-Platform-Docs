Instruction from a customer to buy something from the shop owner. “Something” is exactly defined by the related quote. In general the order behaves like the quote, it just represents a different state the sales process and starts a business. There are two ways to create an order

- from a quote
- from scratch

When creating an order from a quote all information from the quote is copied (duplicated, not referenced) to achieve [audit-proofness](). This includes the line items, the quote creates new line items and copies all information from each quote line item. Once the order is created it should reference the quote and the quote status should be set to “ordered” which prevents the quote to be edited.

When creating an order from scratch it behaves like a quote, products can be “added” by creating line items and copying the information from the products to the line items.

Once the status on the order is set to “accepted by customer” it should not be editable anymore as it serves as a contract documenting the agreement  of purchase ([audit-proof]()).

Quotes and orders (and invoices as well) have different numbers such as quote number, order number and invoice number. These numbers will be generated automatically.
