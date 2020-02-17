/*!40101 SET @old_character_set_client = @@character_set_client */;
/*!40101 SET @old_character_set_results = @@character_set_results */;
/*!40101 SET @old_collation_connection = @@collation_connection */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @old_foreign_key_checks = @@foreign_key_checks, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @old_sql_mode = @@sql_mode, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @old_sql_notes = @@sql_notes, SQL_NOTES = 0 */;


# Dump da tabela addresses
# ------------------------------------------------------------

DROP TABLE IF EXISTS addresses;

CREATE TABLE addresses (
	id         INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	user_id    INT(11) UNSIGNED          DEFAULT NULL,
	zip_code   VARCHAR(9)       NOT NULL DEFAULT '',
	address    VARCHAR(255)     NOT NULL DEFAULT '',
	number     VARCHAR(255)     NOT NULL DEFAULT '',
	details    VARCHAR(255)              DEFAULT NULL,
	created_at TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP        NULL     DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id),
	KEY addr_user (user_id),
	CONSTRAINT user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE NO ACTION
)
	ENGINE = InnoDB
	DEFAULT CHARSET = utf8;

LOCK TABLES addresses WRITE;
/*!40000 ALTER TABLE addresses
	DISABLE KEYS */;

INSERT INTO
	addresses (id, user_id, zip_code, address, number, details, created_at, updated_at)
VALUES
(1, 1, '13400-560', 'Avenida Independência', '810', 'casa 1', '2018-09-03 16:40:57', '2018-09-16 19:39:59');

/*!40000 ALTER TABLE addresses
	ENABLE KEYS */;
UNLOCK TABLES;

# Dump da tabela users
# ------------------------------------------------------------

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id         INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	name       VARCHAR(255)     NOT NULL DEFAULT '',
	email      VARCHAR(255)     NOT NULL DEFAULT '',
	password   VARCHAR(255)     NOT NULL DEFAULT '',
	birth_date DATE                      DEFAULT NULL,
	photo      VARCHAR(255)              DEFAULT NULL,
	created_at TIMESTAMP        NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP        NULL     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deleted_at TIMESTAMP        NULL     DEFAULT NULL,
	PRIMARY KEY (id),
	UNIQUE KEY email (email),
	FULLTEXT KEY full_text (name, email)
)
	ENGINE = InnoDB
	DEFAULT CHARSET = utf8;

LOCK TABLES users WRITE;
/*!40000 ALTER TABLE users
	DISABLE KEYS */;

INSERT INTO
	users (id, name, email, password, birth_date, photo, created_at, updated_at, deleted_at)
VALUES
(1, 'Gabriel Cesar Mello', '95gabrielcesar@gmail.com', '$2y$10$byfytpDvPVgiLL2ELp2/v.a0Rvp6vbVvuLVtqra1bRlLO/9W2mH7O',
 '1995-03-02', NULL, '2020-02-17 14:00:00', '2020-02-17 14:00:00', NULL);

/*!40000 ALTER TABLE users
	ENABLE KEYS */;
UNLOCK TABLES;

/*!40111 SET SQL_NOTES = @old_sql_notes */;
/*!40101 SET SQL_MODE = @old_sql_mode */;
/*!40014 SET FOREIGN_KEY_CHECKS = @old_foreign_key_checks */;
/*!40101 SET CHARACTER_SET_CLIENT = @old_character_set_client */;
/*!40101 SET CHARACTER_SET_RESULTS = @old_character_set_results */;
/*!40101 SET COLLATION_CONNECTION = @old_collation_connection */;
