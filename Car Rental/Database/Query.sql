create table userbase(  uname varchar(20) not null,
			email varchar(50) not null,
			pass varchar(30) not null,
			primary key(uname));

create table carbase(	carid integer,
			manuf varchar(30),
			model varchar(30),
			fuel_type varchar(10),
			class_type varchar(20),
			max_p integer,
			primary key(carid));

create table booking(	bookid integer,
			uname varchar(20),
			carid integer,
			doj date,
			primary key(bookid),
			foreign key(uname) references userbase,foreign key(carid) references carbase);

insert into userbase values('admin','admin@rentify.com','admin');
insert into userbase values('john','sins.johnny@gmail.com','12345678');

insert into carbase values(101,'Ford','Fiesta','Diesel','Compact',5);
insert into carbase values(102,'Suzuki','Alto','Petrol','Compact',5);
insert into carbase values(103,'Peugeot','207','Diesel','Compact',5);
insert into carbase values(201,'Mazda','6','Petrol','Intermediate',5);
insert into carbase values(301,'Opel','Vivaro','Diesel','Minibus',8);	

insert into booking values(1001,'john',101,'12-10-2016');	

select * from userbase;
select * from carbase;
select * from booking;	
