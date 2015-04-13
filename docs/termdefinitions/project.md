(BETA relevant is that we have controlling in projects and that we can set a task to closed which will create a delivery entity so that we can track the deliveries on the project-related order)

A project is a type of a process that results in an individual product. A manufacturing process for example is a process that results mostly in a standard product. There are two different ways how a project can be paid:

- **By the time that is spend:** This means a client wants a result at the end but he wants to be responsible for the projects results and its success. This is the kind of contract we usually have with freelancers. They get paid for the time they spend but not for the result they deliver. It behaves like a contract of employment or a contract of service, as a service provider we may call it service.
- **By result:** The client will only pay if we delivered what we promised and what he ordered. This can be delivered in different milestones. In this case, it is almost the same as ordering a product if it is clearly specified as the customer pays not for the time we spend and the material we need to produce the product but he pays for the properties we ensure and we deliver with the product. This is a typical kind of project we have at BS. It behaves like a contract for work and labor.

Tasks and Projects can reference multiple line-item-budgets (not payment modalities or line items, as we only keep track of deliveries and budgets not payments). Milestones in a project are sold to the customer as separate line items with extra payment modalities each.

- If a task references a budget with unit item it will “deliver” (create output with amount 1) once the task status is set to delivered. 
- If a task references a budget with unit time it will “deliver” (create output entity) everytime a timetracking is added. The corresponding output has the amount equal to the amount of the timetracking.

The output is booked on the line-item-budget and the corresponding payment-modality-budgets. Depending on the payment-modality-budgets (pre- or postpaid) the output is booked on, an invoice-line-item can be generated.