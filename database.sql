-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : sql104.epizy.com
-- Généré le :  mer. 29 juin 2022 à 08:50
-- Version du serveur :  10.3.27-MariaDB
-- Version de PHP :  7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `epiz_32057965_eg_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `application`
--

CREATE TABLE `application` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `phone` int(11) NOT NULL,
  `country` varchar(50) DEFAULT NULL,
  `level` varchar(50) DEFAULT NULL,
  `domain` varchar(50) NOT NULL,
  `campus` varchar(50) NOT NULL,
  `reg_date` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `application`
--

INSERT INTO `application` (`id`, `name`, `surname`, `email`, `gender`, `phone`, `country`, `level`, `domain`, `campus`, `reg_date`) VALUES
(0, 'Apelete', 'maak', 'adzohonouapelete@gmail.com', 'M', 34567890, '', 'bac', 'energy', 'enc', '2022-06-29 11:32:05');

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `lang` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `name`, `mail`, `lang`) VALUES
(1, 'Adzohonou', 'adzohonoj@gmil.com', 'en');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `application`
--
ALTER TABLE `application`
  ADD UNIQUE KEY `name` (`name`,`email`,`phone`),
  ADD UNIQUE KEY `name_2` (`name`,`email`,`phone`),
  ADD UNIQUE KEY `name_3` (`name`,`email`,`phone`),
  ADD UNIQUE KEY `name_4` (`name`,`email`,`phone`),
  ADD UNIQUE KEY `name_5` (`name`,`email`,`phone`),
  ADD UNIQUE KEY `name_6` (`name`,`email`,`phone`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
