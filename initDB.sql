create table if not exists product_types(
    type_id INT not null PRIMARY KEY,
    name VARCHAR(255) not null
);

create table if not exists products_list(
    sku VARCHAR(255) not null PRIMARY KEY,
    name VARCHAR(255) not null,
    price DECIMAL(10, 2) not null,
    type_id INT not null,
    type_attribute VARCHAR(255) not null,

    FOREIGN KEY (type_id)
        REFERENCES product_types (type_id)
);

insert into product_types (type_id, name) 
values 
    (1, "dvd"),
    (2, "book"),
    (3, "furniture");
