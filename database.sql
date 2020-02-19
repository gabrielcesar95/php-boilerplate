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
	`area` varchar(128) NOT NULL,
	`city` varchar(128) NOT NULL,
	`number` varchar(255) DEFAULT NULL,
	`details` varchar(255) DEFAULT NULL,
	`created_at` timestamp NOT NULL DEFAULT current_timestamp(),
	`updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela php_boilerplate.addresses: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela php_boilerplate.users: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `address_id`, `name`, `email`, `password`, `birth_date`, `photo`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Gabriel Cesar Mello', '95gabrielcesar@gmail.com', '$2y$10$KPYZC5axLBDrHM.L5a1WqeaH17IVt0GiE5ubqhMg3ROvm0RWYnTki', NULL, NULL, '2020-02-19 08:27:04', '2020-02-19 08:35:07');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
