-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-01-2022 a las 16:47:51
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_hotels`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customer_ratings`
--

CREATE TABLE `customer_ratings` (
  `raiting_id` int(11) NOT NULL,
  `raiting` int(11) NOT NULL,
  `comment_raiting` text COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `id_hotel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `customer_ratings`
--

INSERT INTO `customer_ratings` (`raiting_id`, `raiting`, `comment_raiting`, `id_hotel`) VALUES
(7, 5, 'fsdf', 7),
(8, 3, 'sdfsdf', 8),
(9, 3, 'sdfsdf', 9),
(12, 5, NULL, 34),
(13, 5, NULL, 35),
(14, 4, NULL, 36);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotel`
--

CREATE TABLE `hotel` (
  `id_hotel` int(11) NOT NULL,
  `name_hotel` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `price_hotel` decimal(10,0) NOT NULL,
  `category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `hotel`
--

INSERT INTO `hotel` (`id_hotel`, `name_hotel`, `price_hotel`, `category`) VALUES
(7, 'hilton', '140', 5),
(8, 'trump', '180', 5),
(9, 'trop', '100', 4),
(10, 'cbb', '69', 3),
(11, 'sdsdfsdf', '135', 4),
(19, 'test', '120', 5),
(20, 'test', '120', 5),
(21, 'test', '120', 5),
(22, 'test', '120', 5),
(23, 'test', '120', 5),
(24, 'test', '120', 5),
(25, 'test', '120', 5),
(26, 'test', '120', 5),
(27, 'test', '120', 5),
(28, 'test', '120', 5),
(29, 'test', '120', 5),
(30, 'test', '120', 5),
(31, 'test', '120', 5),
(32, 'test', '120', 5),
(33, 'test', '120', 5),
(34, 'test', '120', 5),
(35, 'test', '120', 5),
(36, 'the office', '300', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `image_hotel`
--

CREATE TABLE `image_hotel` (
  `id_image` int(11) NOT NULL,
  `image` varchar(512) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_hotel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `image_hotel`
--

INSERT INTO `image_hotel` (`id_image`, `image`, `id_hotel`) VALUES
(6, 'hotel1.jpeg', 7),
(7, 'hotel2.jpeg', 8),
(8, 'hotel3.jpeg', 9),
(9, 'hotel1.jpeg', 7),
(10, 'public/fileName-1640234844746.png', 29),
(11, 'fileName-1640235150309.png', 32),
(12, 'fileName-1640235653894.png', 33),
(13, 'fileName-1640235696991.png', 34),
(14, 'fileName-1640238904646.png', 35),
(15, 'fileName-1642517500451.jpg', 36);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `customer_ratings`
--
ALTER TABLE `customer_ratings`
  ADD PRIMARY KEY (`raiting_id`),
  ADD KEY `customer_ratings_FK` (`id_hotel`);

--
-- Indices de la tabla `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`id_hotel`);

--
-- Indices de la tabla `image_hotel`
--
ALTER TABLE `image_hotel`
  ADD PRIMARY KEY (`id_image`),
  ADD KEY `image_hotel_FK` (`id_hotel`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customer_ratings`
--
ALTER TABLE `customer_ratings`
  MODIFY `raiting_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id_hotel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `image_hotel`
--
ALTER TABLE `image_hotel`
  MODIFY `id_image` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `customer_ratings`
--
ALTER TABLE `customer_ratings`
  ADD CONSTRAINT `customer_ratings_FK` FOREIGN KEY (`id_hotel`) REFERENCES `hotel` (`id_hotel`) ON DELETE CASCADE;

--
-- Filtros para la tabla `image_hotel`
--
ALTER TABLE `image_hotel`
  ADD CONSTRAINT `image_hotel_FK` FOREIGN KEY (`id_hotel`) REFERENCES `hotel` (`id_hotel`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
