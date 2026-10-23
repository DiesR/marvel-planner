CREATE TABLE `title_details_cache` (
	`title_id` text NOT NULL,
	`language` text NOT NULL,
	`data` text NOT NULL,
	`fetched_at` integer NOT NULL,
	PRIMARY KEY(`title_id`, `language`)
);
