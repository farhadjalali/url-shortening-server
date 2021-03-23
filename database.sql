CREATE SEQUENCE links_id_seq START 1000000;

CREATE TABLE public.links
(
    id integer NOT NULL DEFAULT nextval('links_id_seq'::regclass),
    "longUrl" text COLLATE pg_catalog."default" NOT NULL,
    url text COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp without time zone,
    CONSTRAINT links_pkey PRIMARY KEY (id)
)
