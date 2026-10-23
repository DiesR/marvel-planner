CREATE TABLE `catalog_candidate` (
	`key` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`tmdb_id` integer NOT NULL,
	`season` integer,
	`title` text NOT NULL,
	`release_date` text,
	`found_at` integer NOT NULL,
	`is_dismissed` integer DEFAULT false NOT NULL
);
