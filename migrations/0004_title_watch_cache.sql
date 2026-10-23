CREATE TABLE `title_watch_cache` (
	`title_id` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL,
	`fetched_at` integer NOT NULL
);
