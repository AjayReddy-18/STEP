--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: public; Owner: ajayreddy
--

CREATE TABLE public.category (
    category_id integer NOT NULL,
    name character varying(100)
);


ALTER TABLE public.category OWNER TO ajayreddy;

--
-- Name: category_category_id_seq; Type: SEQUENCE; Schema: public; Owner: ajayreddy
--

CREATE SEQUENCE public.category_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_category_id_seq OWNER TO ajayreddy;

--
-- Name: category_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ajayreddy
--

ALTER SEQUENCE public.category_category_id_seq OWNED BY public.category.category_id;


--
-- Name: customer; Type: TABLE; Schema: public; Owner: ajayreddy
--

CREATE TABLE public.customer (
    customer_id integer NOT NULL,
    first_name character varying(100),
    last_name character varying(100),
    email character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.customer OWNER TO ajayreddy;

--
-- Name: customer_customer_id_seq; Type: SEQUENCE; Schema: public; Owner: ajayreddy
--

CREATE SEQUENCE public.customer_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.customer_customer_id_seq OWNER TO ajayreddy;

--
-- Name: customer_customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ajayreddy
--

ALTER SEQUENCE public.customer_customer_id_seq OWNED BY public.customer.customer_id;


--
-- Name: order_item; Type: TABLE; Schema: public; Owner: ajayreddy
--

CREATE TABLE public.order_item (
    order_item_id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer,
    price numeric(10,2)
);


ALTER TABLE public.order_item OWNER TO ajayreddy;

--
-- Name: order_item_order_item_id_seq; Type: SEQUENCE; Schema: public; Owner: ajayreddy
--

CREATE SEQUENCE public.order_item_order_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.order_item_order_item_id_seq OWNER TO ajayreddy;

--
-- Name: order_item_order_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ajayreddy
--

ALTER SEQUENCE public.order_item_order_item_id_seq OWNED BY public.order_item.order_item_id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: ajayreddy
--

CREATE TABLE public.orders (
    order_id integer NOT NULL,
    customer_id integer,
    order_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    total_amount numeric(10,2)
);


ALTER TABLE public.orders OWNER TO ajayreddy;

--
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: ajayreddy
--

CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orders_order_id_seq OWNER TO ajayreddy;

--
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ajayreddy
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;


--
-- Name: payment; Type: TABLE; Schema: public; Owner: ajayreddy
--

CREATE TABLE public.payment (
    payment_id integer NOT NULL,
    order_id integer,
    payment_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    amount numeric(10,2),
    payment_method character varying(30)
);


ALTER TABLE public.payment OWNER TO ajayreddy;

--
-- Name: payment_payment_id_seq; Type: SEQUENCE; Schema: public; Owner: ajayreddy
--

CREATE SEQUENCE public.payment_payment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payment_payment_id_seq OWNER TO ajayreddy;

--
-- Name: payment_payment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ajayreddy
--

ALTER SEQUENCE public.payment_payment_id_seq OWNED BY public.payment.payment_id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: ajayreddy
--

CREATE TABLE public.product (
    product_id integer NOT NULL,
    price numeric(10,2),
    stock_quantity integer,
    category_id integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.product OWNER TO ajayreddy;

--
-- Name: product_product_id_seq; Type: SEQUENCE; Schema: public; Owner: ajayreddy
--

CREATE SEQUENCE public.product_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_product_id_seq OWNER TO ajayreddy;

--
-- Name: product_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ajayreddy
--

ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;


--
-- Name: category category_id; Type: DEFAULT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.category ALTER COLUMN category_id SET DEFAULT nextval('public.category_category_id_seq'::regclass);


--
-- Name: customer customer_id; Type: DEFAULT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.customer ALTER COLUMN customer_id SET DEFAULT nextval('public.customer_customer_id_seq'::regclass);


--
-- Name: order_item order_item_id; Type: DEFAULT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.order_item ALTER COLUMN order_item_id SET DEFAULT nextval('public.order_item_order_item_id_seq'::regclass);


--
-- Name: orders order_id; Type: DEFAULT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- Name: payment payment_id; Type: DEFAULT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.payment ALTER COLUMN payment_id SET DEFAULT nextval('public.payment_payment_id_seq'::regclass);


--
-- Name: product product_id; Type: DEFAULT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: ajayreddy
--

COPY public.category (category_id, name) FROM stdin;
1	Electronics
2	Clothing
3	Home & Kitchen
4	Books
5	Beauty
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: ajayreddy
--

COPY public.customer (customer_id, first_name, last_name, email, created_at) FROM stdin;
1	John	Doe	john.doe@example.com	2025-02-15 21:51:45.707132
2	Jane	Smith	jane.smith@example.com	2025-02-15 21:51:45.707132
3	Alice	Johnson	alice.johnson@example.com	2025-02-15 21:51:45.707132
4	John	Doe	john.doe123@example.com	2025-02-15 21:51:45.707132
5	Jane	Smith	jane.smith123@example.com	2025-02-15 21:51:45.707132
6	Alice	Johnson	alice.johnson123@example.com	2025-02-15 21:51:45.707132
7	John	Doe	john.doe456@example.com	2025-02-15 21:51:45.707132
\.


--
-- Data for Name: order_item; Type: TABLE DATA; Schema: public; Owner: ajayreddy
--

COPY public.order_item (order_item_id, order_id, product_id, quantity, price) FROM stdin;
1	1	1	1	299.99
2	1	2	1	99.99
3	2	3	2	49.99
4	2	4	1	15.99
5	3	5	4	25.00
6	4	6	2	149.99
7	5	7	1	79.99
8	5	8	2	199.99
9	6	9	3	12.99
10	7	10	5	30.00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: ajayreddy
--

COPY public.orders (order_id, customer_id, order_date, total_amount) FROM stdin;
1	1	2025-02-15 21:52:07.073612	399.99
2	1	2025-02-15 21:52:07.073612	250.00
3	2	2025-02-15 21:52:07.073612	120.00
4	2	2025-02-15 21:52:07.073612	330.00
5	3	2025-02-15 21:52:07.073612	530.00
6	4	2025-02-15 21:52:07.073612	150.00
7	5	2025-02-15 21:52:07.073612	250.00
8	6	2025-02-15 21:52:07.073612	399.99
9	7	2025-02-15 21:52:07.073612	220.00
\.


--
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: ajayreddy
--

COPY public.payment (payment_id, order_id, payment_date, amount, payment_method) FROM stdin;
1	1	2025-02-15 21:52:14.985817	399.99	Credit Card
2	2	2025-02-15 21:52:14.985817	250.00	PayPal
3	3	2025-02-15 21:52:14.985817	120.00	Debit Card
4	4	2025-02-15 21:52:14.985817	330.00	Credit Card
5	5	2025-02-15 21:52:14.985817	530.00	Credit Card
6	6	2025-02-15 21:52:14.985817	150.00	PayPal
7	7	2025-02-15 21:52:14.985817	250.00	Debit Card
8	8	2025-02-15 21:52:14.985817	399.99	Credit Card
9	9	2025-02-15 21:52:14.985817	220.00	Debit Card
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: ajayreddy
--

COPY public.product (product_id, price, stock_quantity, category_id, created_at) FROM stdin;
1	299.99	100	1	2025-02-15 21:52:01.535431
2	99.99	150	2	2025-02-15 21:52:01.535431
3	49.99	200	3	2025-02-15 21:52:01.535431
4	15.99	300	4	2025-02-15 21:52:01.535431
5	25.00	250	5	2025-02-15 21:52:01.535431
6	149.99	120	1	2025-02-15 21:52:01.535431
7	79.99	80	2	2025-02-15 21:52:01.535431
8	199.99	90	3	2025-02-15 21:52:01.535431
9	12.99	110	4	2025-02-15 21:52:01.535431
10	30.00	130	5	2025-02-15 21:52:01.535431
\.


--
-- Name: category_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ajayreddy
--

SELECT pg_catalog.setval('public.category_category_id_seq', 1, false);


--
-- Name: customer_customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ajayreddy
--

SELECT pg_catalog.setval('public.customer_customer_id_seq', 1, false);


--
-- Name: order_item_order_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ajayreddy
--

SELECT pg_catalog.setval('public.order_item_order_item_id_seq', 1, false);


--
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ajayreddy
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 1, false);


--
-- Name: payment_payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ajayreddy
--

SELECT pg_catalog.setval('public.payment_payment_id_seq', 1, false);


--
-- Name: product_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ajayreddy
--

SELECT pg_catalog.setval('public.product_product_id_seq', 1, false);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (category_id);


--
-- Name: customer customer_email_key; Type: CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_email_key UNIQUE (email);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customer_id);


--
-- Name: order_item order_item_pkey; Type: CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_pkey PRIMARY KEY (order_item_id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- Name: payment payment_pkey; Type: CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY (payment_id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (product_id);


--
-- Name: order_item order_item_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);


--
-- Name: order_item order_item_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(product_id);


--
-- Name: orders orders_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id);


--
-- Name: payment payment_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);


--
-- Name: product product_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ajayreddy
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(category_id);


--
-- PostgreSQL database dump complete
--

