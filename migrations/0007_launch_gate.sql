CREATE UNIQUE INDEX `user_name_unique` ON `user` (lower("name"));
--> statement-breakpoint
INSERT OR IGNORE INTO `site_setting` (`key`, `value`, `updated_at`) VALUES ('maintenance', 'on', unixepoch() * 1000);
