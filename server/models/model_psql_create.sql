-- Postgres Data Set Up

-- Executed on: 


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"firstname" varchar(40),
	"lastname" varchar(40),
	"email" varchar(100) NOT NULL UNIQUE, -- make unique
	"passcode" varchar(80) NOT NULL,
	"country" varchar(80),
	"city" varchar(80),
	"state" varchar(2),
	"zip_code" varchar(10),
	"bio" varchar(800),
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);
 
CREATE TABLE public.photos (
  "_id" serial NOT NULL,
  "url" varchar NOT NULL,
  "user_id" bigint NOT NULL,
  CONSTRAINT "photos_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.photos ADD CONSTRAINT "photos_fk_0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");

INSERT INTO public.users(firstname, lastname, email, passcode, country, city, state, zip_code, bio ) VALUES
('Kate', 'Angelopoulos', 'kathawefew@hotmail.com', '!$snyoq89', 'USA', 'Pensacola', 'FL', '32507', 'I am a software developer but not really and I do not belong in this database.'),
('Cyrus', 'Yari', 'alskdjwfnwu@gmail.com', '90sn!oq8e', 'UK', 'London', null, null, 'I like meditation and also reading books by Taleb.'),
('Cassidy', 'Johnson', 'asdvnilite@protonmail.com', '90Mal$sd*2s', 'USA', 'Austin', 'TX', '78721', 'I really enjoying SASS and also losing apple watch competitions.');