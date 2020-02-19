-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           10.4.8-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para php_boilerplate
CREATE DATABASE IF NOT EXISTS `php_boilerplate` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `php_boilerplate`;

-- Copiando estrutura para tabela php_boilerplate.addresses
CREATE TABLE IF NOT EXISTS `addresses` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`zip_code` varchar(9) NOT NULL,
	`address` varchar(255) NOT NULL,
	`state` varchar(2) NOT NULL,
	`city` varchar(128) NOT NULL,
	`area` varchar(128) NOT NULL,
	`number` varchar(255) DEFAULT NULL,
	`details` varchar(255) DEFAULT NULL,
	`created_at` timestamp NOT NULL DEFAULT current_timestamp(),
	`updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela php_boilerplate.addresses: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` (`id`, `zip_code`, `address`, `state`, `city`, `area`, `number`, `details`, `created_at`, `updated_at`) VALUES
(1, '13415-040', 'Rua Sérgio Juvenal M. Antunes', 'SP', 'Piracicaba', 'Monte Alegre', '80', '', '2020-02-19 10:51:19', '2020-02-19 13:56:59');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;

-- Copiando estrutura para tabela php_boilerplate.users
CREATE TABLE IF NOT EXISTS `users` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`address_id` int(11) unsigned DEFAULT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`birth_date` date DEFAULT NULL,
	`photo` varchar(255) DEFAULT NULL,
	`created_at` timestamp NOT NULL DEFAULT current_timestamp(),
	`updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`),
	UNIQUE KEY `email` (`email`),
	KEY `FK_users_addresses` (`address_id`),
	FULLTEXT KEY `full_text` (`name`,`email`),
	CONSTRAINT `FK_users_addresses` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela php_boilerplate.users: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `address_id`, `name`, `email`, `password`, `birth_date`, `photo`, `created_at`, `updated_at`) VALUES
(1, 1, 'Gabriel Cesar Mello', '95gabrielcesar@gmail.com', '$2y$10$jqEoCqRKm2sKeKx2rhMQ4eUp3Me0tOVageWFi7RRr.yLP8to4uAUy', '1995-03-02', NULL, '2020-02-19 10:50:21', '2020-02-19 13:57:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
