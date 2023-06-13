-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2023 at 12:46 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `irancell`
--

-- --------------------------------------------------------

--
-- Table structure for table `recommend_packet`
--

CREATE TABLE `recommend_packet` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `off` varchar(50) NOT NULL,
  `price` int(50) NOT NULL,
  `max-date` date NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `recommend_packet`
--

INSERT INTO `recommend_packet` (`id`, `title`, `off`, `price`, `max-date`, `userID`) VALUES
(1, 'بسته اینترنت سه ماهه', '٪20', 130, '1404-07-14', 1),
(2, 'بسته ترکیبی هفته ای', '٪45', 45, '1404-07-12', 1),
(3, 'بسته مکالمه شبانه', '٪15', 50, '1404-04-15', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `buy-date` date NOT NULL,
  `max-date` date NOT NULL,
  `title` varchar(50) NOT NULL,
  `off` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `buy-date`, `max-date`, `title`, `off`, `price`, `userID`) VALUES
(1, '1402-07-01', '1403-07-01', 'بسته اینترنت یک ساله', '٪20', '130.000', 1),
(2, '1402-07-01', '1403-07-01', 'بسته اینترنت یک ساله', '٪20', '130.000', 1),
(3, '1402-07-01', '1403-07-01', 'بسته اینترنت یک ساله', '٪20', '130.000', 1);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(50) NOT NULL,
  `icon` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `max-date` date NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `icon`, `title`, `max-date`, `isActive`) VALUES
(1, 'fa-regular fa-envelope', 'بسته پیامک هفتگی', '1401-06-30', 1),
(3, 'fa-solid fa-wifi', 'بسته اینترنت ماهانه', '1402-07-01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `profile` varchar(100) NOT NULL,
  `charge` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `profile`, `charge`) VALUES
(1, 'هومن', 'موسوی', '/public/img/profile.jpg', '5000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recommend_packet`
--
ALTER TABLE `recommend_packet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recommend_packet`
--
ALTER TABLE `recommend_packet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
