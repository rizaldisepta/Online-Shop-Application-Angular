use training
select * from vw_product

create table #temp
(id int, unitprice money);

insert into #temp
select salesD.id,priceList.unitPrice
from salesM left join salesD on salesM.id=salesD.id
left join customer on salesM.customerId=customer.id
left join product on salesD.productId=product.id
left join priceList on product.id=priceList.productId and priceList.customerTypeId=customer.customerTypeId and product.productUnitId=priceList.productUnitId

update salesD
set unitPrice = #temp.unitprice
from salesD left join #temp on salesD.id = #temp.id

update salesD
set subtotal = qty * unitPrice
use training
select SUM(subtotal) total, salesM.id
from salesM left join salesD on salesM.id=salesD.salesMId
group by salesM.id

create table #temp2
(id int, total money);

insert into #temp2
select salesM.id,salesD.subtotal
from salesM left join salesD on salesM.id=salesD.id
select * from salesM

update salesM
set total = #temp2.total
from salesM left join #temp2 on salesM.id = #temp2.id

update salesM
set total = 

select * from salesD
select * from salesM
select * from salesD




update salesD
set salesD.unitPrice = priceList.unitPrice
from priceList
join salesD on priceList.productId=salesD.productId 


select product.*,priceList.*
from product left join priceList on product.id=priceList.productId

select product.*,priceList.*
from product left join priceList on product.id=priceList.productId