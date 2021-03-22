CREATE SEQUENCE links_id_seq START 1000000;

CREATE TABLE public.links
(
    id integer NOT NULL DEFAULT nextval('links_id_seq'::regclass),
    long_url text COLLATE pg_catalog."default" NOT NULL,
    url text COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp without time zone,
    CONSTRAINT links_pkey PRIMARY KEY (id)
);
