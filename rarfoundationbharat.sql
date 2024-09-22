-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 22, 2024 at 05:08 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rarfoundationbharat`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `loginId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `loginId`, `password`, `username`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'brijrajsinhvaghela1212@gmail.com', '$2a$10$M29COsTrDnlKj95q7FwQNuEpe3f0aB6Bis8RH0masQYfChhhV76t2', 'rarfoundation', 'brijrajsinhvaghela1212@gmail.com', '2024-08-31 13:45:48', '2024-08-31 13:45:48'),
(2, 'shrathod515@gmail.com', '$2a$10$jiJHBUuTSn/BrhSi9lEa7OtkdGEfkNr1U3nx4LmnK9cd8PNK24BHm', 'Admin', 'shrathod515@gmail.com', '2024-08-31 15:13:25', '2024-08-31 15:13:25'),
(3, 'Virajvaghela1111@gmail.com', '$2a$10$GWRqe2SpkzypbXO4ZUYyvuJIzH9qcxTPlU4khGlju2cUGaPk3OZhG', 'Virajvaghela', 'Virajvaghela1111@gmail.com', '2024-09-05 18:26:43', '2024-09-05 18:26:43');

-- --------------------------------------------------------

--
-- Table structure for table `bloodgroup`
--

CREATE TABLE `bloodgroup` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bloodgroup`
--

INSERT INTO `bloodgroup` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'A-', '2024-08-11 14:46:43', '2024-08-11 14:46:43'),
(2, 'B+', '2024-08-11 14:46:43', '2024-08-11 14:46:43'),
(3, 'O-', '2024-08-11 14:46:43', '2024-08-11 14:46:43'),
(4, 'AB-', '2024-08-11 14:46:43', '2024-08-11 14:46:43'),
(5, 'B-', '2024-08-11 14:46:43', '2024-08-11 14:46:43'),
(6, 'O+', '2024-08-11 14:46:43', '2024-08-11 14:46:43'),
(7, 'A+', '2024-08-11 14:46:43', '2024-08-11 14:46:43'),
(8, 'AB+', '2024-08-11 14:46:43', '2024-08-11 14:46:43'),
(9, 'None/ખ્યાલ નથી', '2024-08-11 14:46:43', '2024-08-11 14:46:43');

-- --------------------------------------------------------

--
-- Table structure for table `cause`
--

CREATE TABLE `cause` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cause`
--

INSERT INTO `cause` (`id`, `title`, `link`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'Event 3', 'http://example.com/event3', 'causes_3.jpeg', 'Description for event 3', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(4, 'Event 4', 'http://example.com/event4', 'causes_4.jpeg', 'Description for event 4', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(5, 'Event 5', 'http://example.com/event5', 'causes_5.jpeg', 'Description for event 5', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(6, 'Event 6', 'http://example.com/event6', 'causes_6.jpeg', 'Description for event 6', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(7, 'Event 7', 'http://example.com/event7', 'causes_7.jpeg', 'Description for event 7', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(8, 'Event 8', 'http://example.com/event8', 'causes_8.jpeg', 'Description for event 8', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(9, 'Event 9', 'http://example.com/event9', 'causes_9.jpeg', 'Description for event 9', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(10, 'Event 10', 'http://example.com/event10', 'causes_10.jpeg', 'Description for event 10', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(11, 'Event 11', 'https://www', 'causes_11.jpeg', 'Description for event 11', '2024-08-18 07:52:17', '2024-08-31 15:25:25'),
(12, 'Event 12', 'http://example.com/event12', 'causes_12.jpeg', 'Description for event 12', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(13, 'Event 13', 'http://example.com/event13', 'causes_13.jpeg', 'Description for event 13', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(14, 'Event 14', 'http://example.com/event14', 'causes_14.jpeg', 'Description for event 14', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(15, 'Event 15', 'http://example.com/event15', 'causes_15.jpeg', 'Description for event 15', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(16, 'Event 16', 'http://example.com/event16', 'causes_16.jpeg', 'Description for event 16', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(18, 'Event 18', 'http://example.com/event18', 'causes_18.jpeg', 'Description for event 18', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(19, 'Event 19', 'http://example.com/event19', 'causes_19.jpeg', 'Description for event 19', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(20, 'Event 20', 'http://example.com/event20', 'causes_20.jpeg', 'Description for event 20', '2024-08-18 07:52:17', '2024-08-25 23:17:37'),
(25, 'ssd', '', 'slides_15dccc9a-2750-42f4-9251-adcb750e7f28.jpg', 'asda', '2024-09-07 18:02:15', '2024-09-07 18:02:15');

-- --------------------------------------------------------

--
-- Table structure for table `designation`
--

CREATE TABLE `designation` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `designation`
--

INSERT INTO `designation` (`id`, `name`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'JOB / નોકરી', 'job', '2024-08-22 19:36:14', '2024-08-22 19:36:14'),
(2, 'Business / વ્યવસાય', 'business', '2024-08-22 19:36:14', '2024-08-22 19:36:14'),
(3, 'Study / અભ્યાસ', 'study', '2024-08-22 19:36:14', '2024-08-22 19:36:14'),
(4, 'None / કશું નહિ', 'none', '2024-08-22 19:36:14', '2024-08-22 19:36:14'),
(5, 'Doctor / ડોક્ટર', 'doctor', '2024-08-22 19:36:14', '2024-08-22 19:36:14'),
(6, 'Advocate / વકીલ', 'advocate', '2024-08-22 19:36:14', '2024-08-22 19:36:14');

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE `district` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`id`, `name`, `state`, `createdAt`, `updatedAt`) VALUES
(1, 'Valsad', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(2, 'Chhota Udaipur', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(3, 'Narmada', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(4, 'Navsari', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(5, 'Surat District', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(6, 'BanasKatha', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(7, 'Bhavnagar District', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(8, 'Ahmedabad City', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(9, 'Jamnagar City', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(10, 'Amreli', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(11, 'Bhavnagar City', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(12, 'Kheda', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(13, 'Ahmedabad District', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(14, 'Sabarkantha', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(15, 'Rajkot City', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(16, 'Porbandar', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(17, 'Jamnagar District', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(18, 'Junagadh City', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(19, 'Surendra Nagar', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(20, 'Tapi', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(21, 'Dang', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(22, 'Surat City', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(23, 'Vadodara City', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(24, 'Anand', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(25, 'Gandhinagar District', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(26, 'Arvalli', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(27, 'Rajkot District', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(28, 'Morbi', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(29, 'Junagadh District', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(30, 'Gir Somnath', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(31, 'Botad', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(32, 'Mahisagar', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(33, 'Panchmahal', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(34, 'Bharuch', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(35, 'Vadodara District', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(36, 'Gandhinagar', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(37, 'Devbhoomi Dwarka', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(38, 'Dahod', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(39, 'Mehsana', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(40, 'Patan', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37'),
(41, 'Kutchh', 'Gujarat', '2024-08-11 14:47:37', '2024-08-11 14:47:37');

-- --------------------------------------------------------

--
-- Table structure for table `help`
--

CREATE TABLE `help` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `contactNo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` enum('Pending','Resolved') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Pending',
  `resolutionDetails` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `help`
--

INSERT INTO `help` (`id`, `name`, `email`, `description`, `contactNo`, `status`, `resolutionDetails`, `createdAt`, `updatedAt`) VALUES
(2, 'Devraj Gohil Mohanbhai ', 'gohildevraj349@gmail.com', 'I want to start a small business.  But there is no money or capital.  A normal family.  There is no source of money.  I do a small job.But family mate has to do something to move forward in life.  So if you can help.  As a partnership.  You finance.  I will work hard.  If possible.', '8849068868', 'Pending', NULL, '2024-08-31 20:06:04', '2024-08-31 20:06:04'),
(4, 'MS.BARIYA KHUSHBU SUREKHABEN', 'kishanbariya360@gmail.com', 'I hope this message finds you well . I am writing to request financial assistance for Bariya Khushbu a student at Kajivadi prathmik school , Godhra. She has recently suffered severe burns in an accident. \nBariya Khushbu is currently undergoing treatment and rehabilitation, which has placed a significant financial strain on her family. Bariya Khushbu recently treatment for sterling hospital, vadodara . The medical bills are so high and her father died, leaving the family in an extremely difficult financial situation. Khushbu is 50% burn . Please support and help for khushbu she was 13 year old. ', '7046660664', 'Pending', NULL, '2024-09-01 09:10:30', '2024-09-01 09:10:30'),
(5, 'Rohit Barad', 'rohitbarad82108@gmail.com', 'Mari financial conditions weak che atale financial help ni jarur hati to please help kari sko to ana mate hu tamne request karu chu.', '7043882108', 'Pending', NULL, '2024-09-02 17:18:16', '2024-09-02 17:18:16'),
(6, 'Makwana  Sahil', 'makwanaa645@yahoo.com', 'Contact me', '7645365476', 'Pending', NULL, '2024-09-04 07:19:55', '2024-09-04 07:19:55'),
(7, 'Meet makwana', 'makwanameet134@gmail.com', 'rajdip sir pla help my big problem pls contect me 8200587776', '8200587776', 'Pending', NULL, '2024-09-05 10:04:35', '2024-09-05 10:04:35'),
(8, 'Uday parmar ', 'udayparmar2019@gmail.com', 'વર્લ્ડ રેકોર્ડ બનાવવા જય રહ્યો છું \nએટલે રાજદીપ ભાઈ સાથે વાત કરવી છે ', '9316805286', 'Pending', NULL, '2024-09-06 06:24:57', '2024-09-06 06:24:57'),
(9, 'HITESHBHAI RANABHAI BHALGAMIYA ', 'hbhalgamiya@gmail.com', 'Rubru athva call ma vat thai sake evu jamin babat nu kam che', '8866529287', 'Pending', NULL, '2024-09-06 10:00:30', '2024-09-06 10:00:30'),
(10, 'Sarvaiya mahavir ', 'sarvaiyamahavir123@gmail.com', ' For hospital work', '7046925857', 'Pending', NULL, '2024-09-06 10:05:37', '2024-09-06 10:05:37'),
(11, 'Koradiya sagar jayesh BHAi ', 'koradiyasagar60@gmail.com', 'अभी: सूरत में रहते हैं \nपापा को लास्ट 6 मंथ्स पाव की तकलीफ आई हुई है ऑपरेशन करवाया है उंगली काटनी पड़ी थी\nडायबिटीज है और रस्सी हो गई थी पांव में उसकी वजह से ऑपरेशन करवाया था उसमें चार लाख का खर्चा हुआ है\nवो पैसा हमने दूसरे के पास से उधार लिया था को वापस करना था और अभी तक हमारे पास कुछ सेटिंग हुआ नहीं है घर में कमाई कम है और खर्चा ज्यादा हुआ है और रेंट पर रह रहे हैं परिवार के सदस्य :\nजयेश भाई और उनकी वाइफ उनके दो बच्चे और उनकी दो बीवियां और दो बच्चे हैं\nदोनों बच्चे को डायमंड मे जॉब करते हैं\nउसमें एक भाई की 18000 सैलरी है और एक भाई की 20000 सैलरी है\nसैलरी कम होने की वजह से उधार दे नही पा रहे है\nमुझे 2लाख रूपए की हेल्प चाइए थी\n7567406672\nKoradiya sagar jayesh BHAi (jain)', '7567406672', 'Pending', NULL, '2024-09-06 12:24:16', '2024-09-06 12:24:16'),
(12, 'મયુરીબેન મુકેશભાઈ કુંભાર ', 'kumbharmayuri14@gmail.com', 'દવાખાનામાં દર્દી ની સારવાર માટે માદદ ની જરૂર છે દર્દી ને ફેફસા માં ઈમ્ફેક્સન છે ', '9265641485', 'Pending', NULL, '2024-09-07 11:16:15', '2024-09-07 11:16:16');

-- --------------------------------------------------------

--
-- Table structure for table `inquiries`
--

CREATE TABLE `inquiries` (
  `id` int NOT NULL,
  `member_id` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) NOT NULL,
  `inquiry_type` varchar(255) DEFAULT 'CardInquiry',
  `message` text NOT NULL,
  `status` enum('Pending','Resolved','Closed') NOT NULL DEFAULT 'Pending',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `email` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `inquiries`
--

INSERT INTO `inquiries` (`id`, `member_id`, `full_name`, `inquiry_type`, `message`, `status`, `createdAt`, `updatedAt`, `email`, `whatsapp`) VALUES
(1, 'sdsdsdss1111111', 'sdsdssssssssssssssssssss', 'CardInquiry', 'sdsssssssssss', 'Resolved', '2024-09-07 20:14:24', '2024-09-10 16:46:41', 'sss@gmail.com', NULL),
(2, 'asdad', 'assdsa', 'CardInquiry', 'asdsa', 'Closed', '2024-09-07 21:03:00', '2024-09-10 16:46:57', 'aSAs@gmail.com', '1234567789'),
(3, 'abccc', 'sdasasddsfsfsssssssssssss', 'CardInquiry', 'ddsds', 'Pending', '2024-09-10 16:51:46', '2024-09-10 16:51:46', 'admin@gmail.com', '1234567890');

-- --------------------------------------------------------

--
-- Table structure for table `otp`
--

CREATE TABLE `otp` (
  `id` int NOT NULL,
  `adminId` int NOT NULL,
  `otp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `expiresAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `otp`
--

INSERT INTO `otp` (`id`, `adminId`, `otp`, `expiresAt`) VALUES
(1, 1, '873595', '2024-08-31 13:48:18'),
(2, 1, '905319', '2024-08-31 13:48:52'),
(3, 1, '596046', '2024-08-31 13:56:29'),
(22, 2, '630869', '2024-09-07 18:01:12');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240810064531-create-state-table.js'),
('20240810065429-create-bloodgroup.js'),
('20240810065429-create-cause.js'),
('20240810065430-create-district.js'),
('20240810065430-create-slides.js'),
('20240810065431-create-user.js'),
('20240810232628-create-users.js'),
('20240810232706-create-slides.js'),
('20240810232733-create-district.js'),
('20240810232755-create-cause.js'),
('20240810232817-create-bloodgroup.js'),
('20240810232837-create-state-table.js'),
('20240818082418-create-designation.js'),
('20240910163142-update-inquiries.js.js'),
('add-subDistrictId-to-user.js'),
('create-Admin.js'),
('create-bloodgroup.js'),
('create-cause.js'),
('create-designation.js'),
('create-district.js'),
('create-Help.js'),
('create-inquiries.js'),
('create-otp.js'),
('create-slides.js'),
('create-state.js'),
('create-subdistrict.js'),
('create-user.js'),
('update-inquiries.js');

-- --------------------------------------------------------

--
-- Table structure for table `slides`
--

CREATE TABLE `slides` (
  `id` int NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `subtitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slides`
--

INSERT INTO `slides` (`id`, `image`, `title`, `subtitle`, `content`, `createdAt`, `updatedAt`) VALUES
(3, 'slides_ee4e0fa7-7fba-4a25-997e-9fbb3efe38c5.jpg', '1', 'RAR', 'Foundation', '2024-08-31 14:24:00', '2024-08-31 14:24:00'),
(4, 'slides_091f9706-cbef-417a-8e1a-e35b09cce441.jpg', 'RAJDEEPSINH ', 'RAJA', 'RAJA', '2024-08-31 15:06:01', '2024-08-31 15:06:01'),
(7, 'slides_027f4678-3ffe-4f34-b648-bb07f538291f.jpg', 'asdsda', 'sdsad', 'asdasd', '2024-09-07 18:03:14', '2024-09-07 18:03:14');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` enum('active','inactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'active',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`id`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Andhra Pradesh', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(2, 'Punjab', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(3, 'Bihar', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(4, 'Gujarat', 'active', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(5, 'Manipur', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(6, 'Rajasthan', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(7, 'West Bengal', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(8, 'Uttar Pradesh', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(9, 'Chandigarh', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(10, 'Jammu and Kashmir', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(11, 'Kerala', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(12, 'Tamil Nadu', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(13, 'Andaman and Nicobar Islands', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(14, 'Puducherry', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(15, 'Ladakh', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(16, 'Goa', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(17, 'Haryana', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(18, 'Odisha', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(19, 'Lakshadweep', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(20, 'Assam', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(21, 'Jharkhand', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(22, 'Mizoram', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(23, 'Arunachal Pradesh', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(24, 'Chhattisgarh', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(25, 'Maharashtra', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(26, 'Meghalaya', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(27, 'Uttarakhand', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(28, 'Delhi', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(29, 'Madhya Pradesh', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(30, 'Sikkim', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(31, 'Tripura', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(32, 'Telangana', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(33, 'Himachal Pradesh', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(34, 'Karnataka', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(35, 'Nagaland', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05'),
(36, 'Dadra and Nagar Haveli and Daman and Diu', 'inactive', '2024-08-12 18:14:05', '2024-08-12 18:14:05');

-- --------------------------------------------------------

--
-- Table structure for table `subdistrict`
--

CREATE TABLE `subdistrict` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `subdistrict`
--

INSERT INTO `subdistrict` (`id`, `name`, `district`, `createdAt`, `updatedAt`) VALUES
(1, 'Valsad', 'Valsad', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(2, 'Vapi', 'Valsad', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(3, 'Pardi', 'Valsad', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(4, 'Umargam', 'Valsad', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(5, 'Dharampur', 'Valsad', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(6, 'Kaprada', 'Valsad', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(7, 'Chhota Udaipur', 'Chhota Udaipur', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(8, 'Jetpur Pavi', 'Chhota Udaipur', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(9, 'Kavant', 'Chhota Udaipur', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(10, 'Sankheda', 'Chhota Udaipur', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(11, 'Matar', 'Chhota Udaipur', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(12, 'Rajpipla', 'Narmada', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(13, 'Dediapada', 'Narmada', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(14, 'Narmada', 'Narmada', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(15, 'Navsari', 'Navsari', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(16, 'Gandevi', 'Navsari', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(17, 'Jalalpore', 'Navsari', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(18, 'Valsad', 'Navsari', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(19, 'Khergam', 'Navsari', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(20, 'Surat', 'Surat District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(21, 'Bardoli', 'Surat District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(22, 'Kamrej', 'Surat District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(23, 'Mangrol', 'Surat District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(24, 'Olpad', 'Surat District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(25, 'Palsana', 'Surat District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(26, 'Surat (Rural)', 'Surat District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(27, 'Deesa', 'BanasKatha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(28, 'Palanpur', 'BanasKatha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(29, 'Tharad', 'BanasKatha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(30, 'Danta', 'BanasKatha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(31, 'Kankrej', 'BanasKatha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(32, 'Bhavnagar', 'Bhavnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(33, 'Mahuva', 'Bhavnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(34, 'Talaja', 'Bhavnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(35, 'Vallabhipur', 'Bhavnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(36, 'Sihor', 'Bhavnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(37, 'Gariadhar', 'Bhavnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(38, 'Ahmedabad', 'Ahmedabad City', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(39, 'Jamnagar', 'Jamnagar City', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(40, 'Amreli', 'Amreli', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(41, 'Rajula', 'Amreli', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(42, 'Lathi', 'Amreli', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(43, 'Jafrabad', 'Amreli', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(44, 'Babra', 'Amreli', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(45, 'Bhavnagar', 'Bhavnagar City', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(46, 'Nadiad', 'Kheda', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(47, 'Matar', 'Kheda', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(48, 'Kapadvanj', 'Kheda', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(49, 'Mahudha', 'Kheda', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(50, 'Thasra', 'Kheda', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(51, 'Daskroi', 'Ahmedabad District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(52, 'Gandhinagar', 'Ahmedabad District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(53, 'Sanand', 'Ahmedabad District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(54, 'Viramgam', 'Ahmedabad District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(55, 'Himmatnagar', 'Sabarkantha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(56, 'Idar', 'Sabarkantha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(57, 'Prantij', 'Sabarkantha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(58, 'Vadali', 'Sabarkantha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(59, 'Khedbrahma', 'Sabarkantha', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(60, 'Rajkot', 'Rajkot City', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(61, 'Porbandar', 'Porbandar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(62, 'Ranavav', 'Porbandar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(63, 'Kutiyana', 'Porbandar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(64, 'Jamnagar', 'Jamnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(65, 'Kalavad', 'Jamnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(66, 'Lodhika', 'Jamnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(67, 'Upleta', 'Jamnagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(68, 'Junagadh', 'Junagadh City', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(69, 'Surendranagar', 'Surendra Nagar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(70, 'Wadhwan', 'Surendra Nagar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(71, 'Chotila', 'Surendra Nagar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(72, 'Limbdi', 'Surendra Nagar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(73, 'Tapi', 'Tapi', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(74, 'Songadh', 'Tapi', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(75, 'Vyara', 'Tapi', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(76, 'Ahwa', 'Dang', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(77, 'Subir', 'Dang', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(78, 'Surat', 'Surat City', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(79, 'Vadodara', 'Vadodara City', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(80, 'Anand', 'Anand', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(81, 'Borsad', 'Anand', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(82, 'Petlad', 'Anand', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(83, 'Sojitra', 'Anand', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(84, 'Gandhinagar', 'Gandhinagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(85, 'Kalol', 'Gandhinagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(86, 'Mansa', 'Gandhinagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(87, 'Dehgam', 'Gandhinagar District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(88, 'Modasa', 'Arvalli', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(89, 'Bhiloda', 'Arvalli', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(90, 'Talod', 'Arvalli', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(91, 'Rajkot', 'Rajkot District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(92, 'Gondal', 'Rajkot District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(93, 'Jetpur', 'Rajkot District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(94, 'Paddhari', 'Rajkot District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(95, 'Morbi', 'Morbi', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(96, 'Wankaner', 'Morbi', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(97, 'Maliya', 'Morbi', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(98, 'Junagadh', 'Junagadh District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(99, 'Gir Somnath', 'Junagadh District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(100, 'Vanthali', 'Junagadh District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(101, 'Veraval', 'Gir Somnath', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(102, 'Junagadh', 'Gir Somnath', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(103, 'Botad', 'Botad', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(104, 'Gadhada', 'Botad', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(105, 'Barwala', 'Botad', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(106, 'Lunawada', 'Mahisagar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(107, 'Kalol', 'Mahisagar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(108, 'Shehera', 'Mahisagar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(109, 'Godhra', 'Panchmahal', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(110, 'Halol', 'Panchmahal', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(111, 'Jambughoda', 'Panchmahal', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(112, 'Bharuch', 'Bharuch', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(113, 'Ankleshwar', 'Bharuch', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(114, 'Vagra', 'Bharuch', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(115, 'Jhagadia', 'Bharuch', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(116, 'Vadodara', 'Vadodara District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(117, 'Karjan', 'Vadodara District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(118, 'Savli', 'Vadodara District', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(119, 'Gandhinagar', 'Gandhinagar', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(120, 'Dwarka', 'Devbhoomi Dwarka', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(121, 'Khambhalia', 'Devbhoomi Dwarka', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(122, 'Bhanvad', 'Devbhoomi Dwarka', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(123, 'Dahod', 'Dahod', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(124, 'Limkheda', 'Dahod', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(125, 'Garbada', 'Dahod', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(126, 'Mehsana', 'Mehsana', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(127, 'Visnagar', 'Mehsana', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(128, 'Kadi', 'Mehsana', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(129, 'Patan', 'Patan', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(130, 'Siddhpur', 'Patan', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(131, 'Radhanpur', 'Patan', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(132, 'Bhuj', 'Kutchh', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(133, 'Anjar', 'Kutchh', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(134, 'Mandvi', 'Kutchh', '2024-09-15 20:24:29', '2024-09-15 20:24:29'),
(135, 'Nakhatrana', 'Kutchh', '2024-09-15 20:24:29', '2024-09-15 20:24:29');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `registrationId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `activationId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fathername` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `surname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `birthday` datetime NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `stateId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `districtId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `whatsapp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `idProof` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `bloodGroupId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `designation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'inactive',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `subDistrictId` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `registrationId`, `activationId`, `name`, `fathername`, `surname`, `email`, `birthday`, `address`, `stateId`, `districtId`, `whatsapp`, `idProof`, `photo`, `bloodGroupId`, `designation`, `status`, `createdAt`, `updatedAt`, `subDistrictId`) VALUES
(1, '6491', NULL, 'Jatin', 'Hareshbhai ', 'Parmar', 'jatinparmar9669@gmail.com', '1993-03-18 00:00:00', 'Rajkot', 'Gujarat', 'Rajkot District', '9979191216', '6491_1.jpg', '6491_2.jpg', 'AB-', 'business', 'rejected', '2024-08-12 20:54:22', '2024-09-14 17:32:44', ''),
(2, '2744', 'RAR/10005', 'Meet prajapati ', 'Pankaj ', 'Prajapati', 'meetprajapati581@gmail.com', '2024-10-19 00:00:00', 'Fatepura ', 'Gujarat', 'Dahod', '8799157233', '2744_1.jpg', '2744_2.jpg', 'None/ખ્યાલ નથી', 'none', 'active', '2024-08-12 20:54:22', '2024-09-14 17:33:01', ''),
(3, '8327', NULL, 'Raghunathsinh kanubhai', 'Kanubhai ', 'Parmar', 'raghunathsinh0112@gmail.com', '2003-12-01 00:00:00', 'Distric : Anand  taluko: borsad  gam: kankapura,chandanpura', 'Gujarat', 'Anand', '8849513144', '8327_1.jpg', '8327_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(4, '9621', NULL, 'RAVIBHAI ', 'HARJIBHAI ', 'CHUDASMA', 'chudasmaravi2673@gmail.com', '2000-06-10 00:00:00', 'Navagam nana Harjibhai 234 farm area ', 'Gujarat', 'Bhavnagar District', '+919714268271', '9621_1.jpg', '9621_2.jpg', 'None/ખ્યાલ નથી', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(5, '2672', NULL, 'Siddharth', 'nimesh', 'Patel', 'siddharthpatelsp14@gmail.com', '2003-02-02 00:00:00', 'dhansura ', 'Gujarat', 'Arvalli', '+919558409327', '2672_1.jpg', '2672_2.jpg', 'O+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(6, '9909', NULL, 'પારસકુમાર ', 'પ્રફુલભાઈ ', 'વાઢેર ', 'kanovadher326@gmail.com', '2003-04-15 00:00:00', '682 , Muktidham soc. Punagam road Surat ', 'Gujarat', 'Surat City', '+916352418592', '9909_1.jpg', '9909_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(7, '2110', NULL, 'Mehul', 'Dahyabhai ', 'Damor', 'damormehul95@gmail.com', '2001-10-14 00:00:00', 'Godhar (North)', 'Gujarat', 'Mahisagar', '8758096922', '2110_1.jpg', '2110_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(8, '7615', NULL, 'Randhirsinh ', 'Narendrasinh', 'Raj', 'rajrandhirsinh41@gmail.com', '1998-08-01 00:00:00', 'Nano vanto ankhi', 'Gujarat', 'Bharuch', '8153073721', '7615_1.jpg', '7615_2.jpg', 'A+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(9, '3845', NULL, 'Kishu ', 'Mahendrsinh', 'Dabhi', 'dabhikishor5556@gamil.com', '2001-01-26 00:00:00', 'Shera Panchmahal ', 'Gujarat', 'Panchmahal', '9924147446', '3845_1.jpg', '3845_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(10, '4834', NULL, 'Najim khan', 'Nasir Pathan', 'Pathan', 'pathannasirkhan82@gmail.com', '1998-09-30 00:00:00', 'Bardoli Gandhi road achana Nagar', 'Gujarat', 'Surat City', '+1917573064260', '4834_1.jpg', '4834_2.jpg', 'B-', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(11, '8985', NULL, 'Koradia Bhavesh ', 'Dinesh Bhai koradia ', 'Koradia ', 'bhavesh.kordia0089@gmail.com', '1995-08-11 00:00:00', 'Plot no 148/1 sector no 14 Gandhinagar ', 'Gujarat', 'Gandhinagar District', '9664969365', '8985_1.jpg', '8985_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(12, '7222', NULL, 'Harshyam ', 'Dineshbhai ', 'Chavda', 'harshyamchavda@gmail.com', '1994-10-01 00:00:00', 'Seth kotha vala vora ni chali opp D-30 Hospital zulta minara road rajpur gomtipur ', 'Gujarat', 'Ahmedabad City', '9925969982', '7222_1.jpg', '7222_2.jpg', 'A+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(13, '4273', NULL, 'Anurag ', 'Chotelal', 'Yadav', 'yadavankit75031@gmail.com', '2004-09-14 00:00:00', '202 Sukhsagar Apartment triveni society behind G.E.B. Balitha Vapi Valsad', 'Gujarat', 'Valsad', '9913662427', '4273_1.jpg', '4273_2.jpg', 'None/ખ્યાલ નથી', 'none', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(14, '7839', NULL, 'Rajveersinh Rathod ', 'Ranjitsinh Rathod', 'Rathod', 'rajvirrathod2612@gmail.com', '2005-12-26 00:00:00', 'Padar arvalli modasa ', 'Gujarat', 'Arvalli', '9316332597', '7839_1.jpg', '7839_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(15, '2147', NULL, 'Chintan kumar', 'Mahendra sinh', 'Gohil', 'chintangohil125@gmail.com', '2000-06-01 00:00:00', 'At Karoli ', 'Gujarat', 'Panchmahal', '7016795830', '2147_1.jpg', '2147_2.jpg', 'B+', 'none', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(16, '1787', NULL, 'Shaktisinh ', 'Bharatsinh', 'Zala', 'shaktisinhzala5112@gmail.com', '2001-03-22 00:00:00', 'Wankaner ', 'Gujarat', 'Morbi', '9624875468', '1787_1.jpg', '1787_2.jpg', 'None/ખ્યાલ નથી', 'none', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(17, '5093', NULL, 'Donda yug', 'HIMMATBHAI ', 'Donda', 'yugdonda5@gmail.com', '2005-11-05 00:00:00', 'Pithalpur ', 'Gujarat', 'Bhavnagar City', '7283840113', '5093_1.jpg', '5093_2.jpg', 'AB+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(18, '4766', NULL, 'Manav ', 'Rajesh Bhai ', 'Bhut ', 'patelmanav4088@gmail.com', '2009-10-15 00:00:00', 'Kadvani nagar Ram Hospital near k.c road ', 'Gujarat', 'Rajkot City', '7859880815', '4766_1.jpg', '4766_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(19, '7916', NULL, 'Krupal', 'Moghaji bhai', 'Chaudhari', 'krupalchaudhari2004@gmail.com', '2004-07-17 00:00:00', 'At. Khatasana ta. Vadnagar. Dist. Mahesana', 'Gujarat', 'Mehsana', '9313718687', '7916_1.jpg', '7916_2.jpg', 'O+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(20, '5911', NULL, 'JAIMIN ', 'SHILESHBHAI ', 'POPATIYA ', 'jaiminmodi748@gmail.com', '1997-06-28 00:00:00', 'Deesa', 'Gujarat', 'BanasKatha', '7600000782', '5911_1.jpg', '5911_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(21, '1934', NULL, 'Raj Sodha', 'Parvin Bhai ', 'Sodha', 'rajsodha958@gmail.com', '1998-02-17 00:00:00', 'Sahiyar city khanpar Road Jasdan', 'Gujarat', 'Rajkot District', '8734089569', '1934_1.jpg', '1934_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(23, '9323', NULL, 'Hardik', 'Ambalal ', 'Chaudhary ', 'hardikpate812@gmail.com', '1995-09-21 00:00:00', 'At vav post padusan', 'Gujarat', 'Sabarkantha', '9974741388', '9323_1.jpg', '9323_2.jpg', 'None/ખ્યાલ નથી', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(24, '4204', NULL, 'HARSHAD ', 'P', 'GARIYAL ', 'harshadgariyal298@gmail.com', '1997-08-30 00:00:00', 'VASTRAPUR GAM AHMEDABAD ', 'Gujarat', 'Ahmedabad City', '8347389495', '4204_1.jpg', '4204_2.jpg', 'B+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(25, '6376', NULL, 'Anil ', 'Dhirubhai ', 'Parmar ', 'parmaranil306@gmail.com', '1994-01-09 00:00:00', 'Satlpur dhar ', 'Gujarat', 'Junagadh City', '9638031511', '6376_1.jpg', '6376_2.jpg', 'None/ખ્યાલ નથી', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(26, '9615', NULL, 'Mahipalsinh ', 'Balwantsinh', 'Jadeja', 'mahipalsinh9091@gmail.com', '2000-02-20 00:00:00', 'Bhuj', 'Gujarat', 'Kutchh', '9537742020', '9615_1.jpg', '9615_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(27, '2545', NULL, 'Paresh ', 'Shankar Bhai ', 'Khatik ', 'pareshkalal10057@gmail.com', '1989-05-16 00:00:00', 'G/28/329 Shivam appartment nr akhbarnagar nava wadaj ahemdabad ', 'Gujarat', 'Ahmedabad City', '9173856354', '2545_1.jpg', '2545_2.jpg', 'B+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(28, '3283', NULL, 'Jhala Satyarajsinh', 'Sunilsinh', 'Jhala', 'jhalasatyarajsinh@gmail.com', '2024-08-06 00:00:00', 'Dhrangadhra  ', 'Gujarat', 'Surendra Nagar', '8160394770', '3283_1.jpg', '3283_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(29, '2397', NULL, 'Digvijaysinh ', 'Surubha', 'Jadeja', 'dsjadeja1212@gmail.com', '1986-10-16 00:00:00', 'Gam.nevymoda', 'Gujarat', 'Jamnagar District', '9924115433', '2397_1.jpg', '2397_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(30, '3993', NULL, 'Patel smit', 'Patel nareshbhai ', 'Patel', 'smitnpatel1@gmail.com', '2002-09-19 00:00:00', 'B-49 ,Nalanda-2,Malpur road ,Modasa,Arvalli ', 'Gujarat', 'Arvalli', '9316934549', '3993_1.jpg', '3993_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(31, '7496', NULL, 'VISHVARAJSINH ', 'PRAKASHSINH ', 'RATHOD', 'vishvarajsinh.rathod3440@gmail.com', '2024-02-24 00:00:00', 'Village-Jamla ', 'Gujarat', 'Sabarkantha', '8511700408', '7496_1.jpg', '7496_2.jpg', 'None/ખ્યાલ નથી', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(32, '2050', NULL, 'Daksh ', 'Dharmendra Bhai ', 'Patel ', 'dharmpatel2612@gmail.com', '2008-04-06 00:00:00', 'E-202 Aashirvad City ', 'Gujarat', 'Ahmedabad City', '9499500373', '2050_1.jpg', '2050_2.jpg', 'O+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(33, '9926', NULL, 'Dharmeshkumar ', 'Fatesinh ', 'Khant ', 'dharmeshkhant250@gmail.com', '1998-02-23 00:00:00', '23, Radhe Park Society,Vastral Gam,Vastral,Ahemdabad,Gujarat-382418', 'Gujarat', 'Ahmedabad City', '9574605875', '9926_1.jpg', '9926_2.jpg', 'O+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(34, '9718', NULL, 'Janak Thakkar', 'Pradipbhai Thakkar ', 'Thakkar', 'jt8026925@gmail.com', '2000-08-14 00:00:00', 'B/7 sahaj platinum sneh plaza chandkheda ahmedabad ', 'Gujarat', 'Ahmedabad City', '8128886378', '9718_1.jpg', '9718_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(35, '2993', NULL, 'ROHANSINH', 'KESHUBHAI', 'BARAD', 'rohansinhbarad1502@gmail.com', '2004-01-17 00:00:00', 'At.:- Sonpara, Ta.:- Gir Gadhada ', 'Gujarat', 'Gir Somnath', '9316870127', '2993_1.jpg', '2993_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(36, '3553', NULL, 'Satyajit ', 'ManishKumar ', 'Bhatt', 'satutana1134@gmail.com', '1997-11-10 00:00:00', '206 ashtwinayak complex near telephone exchange pase panwadi Bhavnagar pin cord -364001', 'Gujarat', 'Bhavnagar District', '9409190459', '3553_1.jpg', '3553_2.jpg', 'O+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(37, '6022', NULL, 'Kuldipsinh', 'Yogendrasinh', 'Matieda ', 'kuldipmatieda@gmail.com', '1998-11-08 00:00:00', '377 Darbar Faliyu Zanor', 'Gujarat', 'Bharuch', '8488833315', '6022_1.jpg', '6022_2.jpg', 'B+', 'none', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(38, '9123', NULL, 'Bhargav', 'Girishbhai', 'Dhabaliya', 'bhargav.dhabaliya9973@gmail.com', '1995-10-29 00:00:00', '9, Radhakrishna Nagar, Gondal ', 'Gujarat', 'Rajkot City', '9033526567', '9123_1.jpg', '9123_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(39, '2220', NULL, 'RAJENDRASINH', 'JAGATSINH', 'ZALA', 'rajendrajzala75@gmail.com', '1990-10-25 00:00:00', 'AT.KHARANA MUVADA.TA.TALOD.DIST.SABARKANTHA', 'Gujarat', 'Sabarkantha', '9408128475', '2220_1.jpg', '2220_2.jpg', 'B+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(40, '6121', NULL, 'Nimesh ', 'Ghanshyambhai ', 'Patel', '7711999958np@gmail.com', '1998-05-12 00:00:00', 'Nikol Ahmedabad ', 'Gujarat', 'Ahmedabad District', '7711999958', '6121_1.jpg', '6121_2.jpg', 'O+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(41, '1310', NULL, 'Neeta ', 'Nikhli ', 'Ramanuj', 'ramanujnitu@gmail.com', '1985-10-16 00:00:00', 'Adipur', 'Gujarat', 'Kutchh', '9687614411', '1310_1.jpg', '1310_2.jpg', 'O+', 'none', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(42, '5554', NULL, 'Harshad ', 'Nareshbhai ', 'Parmar', 'harshadskparmar@gmail.com', '1986-11-22 00:00:00', 'A1-103 ashraya 9 opp khodiyar temple new ranip', 'Gujarat', 'Ahmedabad City', '8401914847', '5554_1.jpg', '5554_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(43, '2165', NULL, 'Nileshkumar', 'Rangubhai', 'Rathwa', 'rathwachef@gmail.com', '1985-07-10 00:00:00', 'Juna patel Faliya raypur Panvad', 'Gujarat', 'Chhota Udaipur', '9727025369', '2165_1.jpg', '2165_2.jpg', 'O+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(44, '3181', NULL, 'Kuldeepsinh ', 'Bikhabhai', 'Solanki', 'kuldeepsinh1701@gmail.com', '2003-01-17 00:00:00', 'Ahemdabad', 'Gujarat', 'Ahmedabad District', '8156021847', '3181_1.jpg', '3181_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(45, '4324', NULL, 'Bhaveshkumar', 'Narvatbhai ', 'Baria', 'bariabhavesh6565@gmail.com', '2001-10-26 00:00:00', 'Valundi (Mandir Faliyu)', 'Gujarat', 'Dahod', '9726735510', '4324_1.jpg', '4324_2.jpg', 'B+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(46, '5954', NULL, 'JAYPALSINH ', 'SIDDHRAJSINH', 'VIRPURA', 'jvirpura01@gmail.com', '2006-12-23 00:00:00', 'Mahelol', 'Gujarat', 'Panchmahal', '+9428460962', '5954_1.jpg', '5954_2.jpg', 'None/ખ્યાલ નથી', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(47, '3984', NULL, 'Prakash Tailor', 'Paresh bhai', 'Tailor', 'prakashtailor2000@gmail.com', '2000-04-04 00:00:00', 'Deesa', 'Gujarat', 'BanasKatha', '+917778946354', '3984_1.jpg', '3984_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(48, '5907', NULL, 'Bhavin', 'Rajesh ', 'Mehta', 'bhavinmehta840@gmail.com', '2001-11-18 00:00:00', 'B304 suryam pride ', 'Gujarat', 'Ahmedabad City', '9712538149', '5907_1.jpg', '5907_2.jpg', 'B+', 'none', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(49, '6100', NULL, 'DARSHAN KUMAR', 'AMRUTBHAI ', 'NAYAK', 'nayakdarshan000786@gmail.com', '2002-07-28 00:00:00', 'HIMMATNAGAR ', 'Gujarat', 'Sabarkantha', '8849244009', '6100_1.jpg', '6100_2.jpg', 'O+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(50, '4614', NULL, 'Jasmin', 'Kaushikbhai', 'Bhesaniya', 'jasminbhesaniya3010@gmail.com', '2006-10-30 00:00:00', 'Rajkot', 'Gujarat', 'Rajkot City', '6354751542', '4614_1.jpg', '4614_2.jpg', 'O+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(51, '9983', NULL, 'kaushal ', 'parvin bhai', 'vyas', 'id-kaushalpvyas170995@gmail.com', '1995-09-17 00:00:00', 'kosmba surt', 'Gujarat', 'Surat District', '9727446054', '9983_1.jpg', '9983_2.jpg', 'O+', 'none', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(52, '1244', NULL, 'Yogesh ', 'Aambala ', 'Parmar ', 'yogeshparmar820@gmail.com', '1999-05-25 00:00:00', '6/61 vmc flats opp Keya motas chani jakat naka ', 'Gujarat', 'Vadodara City', '8780000103', '1244_1.jpg', '1244_2.jpg', 'A-', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(53, '7985', NULL, 'Jaypal Radohd ', 'Jasmat Bhai', 'Dalit ', 'geetajrathodrathodgeetaj@gmail.com', '2007-06-07 00:00:00', 'Amdavad ', 'Gujarat', 'Surendra Nagar', '+446352221944', '7985_1.jpg', '7985_2.jpg', 'A-', 'none', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(54, '5547', NULL, 'Lode', 'Lopu', 'Hay ho', 'lailemaro@gamil.com', '2024-08-10 00:00:00', 'Aalabda', 'Gujarat', 'Mehsana', '9999988888', '5547_1.jpg', '5547_2.jpg', 'None/ખ્યાલ નથી', 'none', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(55, '9879', NULL, 'Apurva', 'Shaileshbhai', 'Raval', 'apurvasraval@gmail.com', '2000-09-17 00:00:00', 'Porbandar ', 'Gujarat', 'Porbandar', '9313183644', '9879_1.jpg', '9879_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(56, '2400', NULL, 'SHEHEJAD HUSAIN', 'ASLAM LALA BHAI', 'SHAIKH', 'shehzadshaikh1786@gmail.com', '1999-09-01 00:00:00', 'SHAKTI SOCIETY GATE 2 RAMZAN PARK DANILIMDA', 'Gujarat', 'Ahmedabad City', '8488822313', '2400_1.jpg', '2400_2.jpg', 'O+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(57, '6616', NULL, 'Dhairya ', 'Bhavesh ', 'Shah', 'dhairyabhaveshshah28@gmail.com', '2007-07-28 00:00:00', 'F/9 kundan appt P-1 opp Bhalchandra Flat near vasna bus station, Ahmedabad Gujarat 380007', 'Gujarat', 'Ahmedabad City', '9426345489', '6616_1.jpg', '6616_2.jpg', 'O+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(58, '3312', NULL, 'Jatin ', 'Kanubhai ', 'GoHEl ', 'jatin.jatingohel@gmail.com', '1993-10-28 00:00:00', 'Vasad davpura ', 'Gujarat', 'Anand', '8780624959', '3312_1.jpg', '3312_2.jpg', 'O-', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(59, '8512', NULL, 'Jignesh kumar', 'Jayesh Bhai ', 'Parmar', 'jigneshparmar953754@gmail.com', '2006-02-17 00:00:00', 'A-80 Neminath park society kenal near cmc Odhav road Ahmedabad ', 'Gujarat', 'Ahmedabad City', '9081191282', '8512_1.jpg', '8512_2.jpg', 'None/ખ્યાલ નથી', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(60, '3691', NULL, ' rajveersinh ', 'Vijaysinh', 'Rajput ', 'rajputrajveer5524@gmail.com', '2006-10-23 00:00:00', 'Unda faliya ', 'Gujarat', 'Vadodara City', '7874915524', '3691_1.jpg', '3691_2.jpg', 'A+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(61, '8183', NULL, 'Vairtsinh ', 'bahadursinh', 'Solanki ', 'viratsinhsolanki@icloud.com', '2005-09-22 00:00:00', 'Kasumbad', 'Gujarat', 'Anand', '9328243806', '8183_1.jpg', '8183_2.jpg', 'O+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(62, '7464', NULL, 'Balvirsinh ', 'Jitendrasinh ', 'Barad ', 'balvibarad@gmail.com', '2000-06-02 00:00:00', 'Simodara', 'Gujarat', 'Surat District', '8154820324', '7464_1.jpg', '7464_2.jpg', 'B+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(63, '2101', NULL, 'RaNJit RaJPut', 'Laljibhai ', 'Dangodara ', 'ranjitrajputdangodra96@gmail.com', '1996-09-21 00:00:00', 'B-5 Sapna Society, Maruti Chowak, L H Road, Varacha, Surat ', 'Gujarat', 'Surat District', '+919925288300', '2101_1.jpg', '2101_2.jpg', 'A+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(64, '1913', NULL, 'Jigar', 'Govindkumar ', 'Parihar', 'jigarparihar6027@gmail.com', '2005-11-08 00:00:00', 'Bapunagar ', 'Gujarat', 'Ahmedabad City', '7383277793', '1913_1.jpg', '1913_2.jpg', 'O+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(65, '7380', NULL, 'Shaikh sehbaz', 'Abdulrasid', 'Shaikh', 'sehbaz2606@gmail.com', '2000-01-26 00:00:00', 'Balasinor ', 'Gujarat', 'Mahisagar', '7383233703', '7380_1.jpg', '7380_2.jpg', 'O+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(66, '8703', NULL, 'Sikligar ronak ', 'Niliesh bhai', 'Sikligar ', 'ronaksikligar@gmail.com', '1999-04-03 00:00:00', ' Syamkunj society bamroli road near chandan baag', 'Gujarat', 'Panchmahal', '7041929180', '8703_1.jpg', '8703_2.jpg', 'B+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(67, '7995', NULL, 'pruthavisinh', 'Bhartsinh', 'Vaghela ', 'pruthavisinhvaghela05@gmail.com', '2007-08-16 00:00:00', 'NARODAgam Darbar vas', 'Gujarat', 'Ahmedabad City', '7984644416', '7995_1.jpg', '7995_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(68, '1911', NULL, 'Mahendrasinh', 'Naharsinh', 'Kharwad', 'mnrajput6352@gmail.com', '2007-10-01 00:00:00', 'Limbdi ', 'Gujarat', 'Surendra Nagar', '6352689190', '1911_1.jpg', '1911_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(69, '6766', NULL, 'Brijrajsinh', 'Arvindsinh', 'Jadeja', 'scspl.brijraj@gmail.com', '2005-05-11 00:00:00', 'Rajkot', 'Gujarat', 'Rajkot City', '9727073737', '6766_1.jpg', '6766_2.jpg', 'B+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(70, '6984', NULL, 'Sahilkhan', 'Jilubha ', 'Malik (Rathod)', 'maleksahiljilubha111@gmail.com', '2002-09-10 00:00:00', '282 Malik Darbar Vas Near Bus Stop At.Jalisana Ta.Mandal Dist.Ahmedabad ', 'Gujarat', 'Ahmedabad District', '7041629555', '6984_1.jpg', '6984_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(71, '8984', NULL, ' Hasmukh ', 'Pravin bhai ', 'Chavda', 'chasmukh44@gmail.com', '2006-02-11 00:00:00', 'Bambhaniya, kukavav, amreli ', 'Gujarat', 'Amreli', '9313423959', '8984_1.jpg', '8984_2.jpg', 'O+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(72, '3315', NULL, 'Gosai Mithun Gosai mayur', 'Gosai Satish bhai ', 'Gosai ', 'mayurgosai364@gmail.com', '1986-01-01 00:00:00', 'HardBava chauk Pathak padi', 'Gujarat', 'Jamnagar City', '9157512002', '3315_1.jpg', '3315_2.jpg', 'O+', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(73, '3403', NULL, 'Brijrajsinh ', 'Vikramsinh ', 'Vaghela', 'brijeshvaghela70@gmail.com', '1996-01-02 00:00:00', 'Vaghela vas, Dhamasana ', 'Gujarat', 'Gandhinagar District', '8128883388', '3403_1.jpg', '3403_2.jpg', 'O+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(74, '5568', NULL, ' VIJAY ', 'MULUBHAI ', 'BHALGARIYA ', 'bhalgariyavijaysinh90@gmail.com', '2000-06-28 00:00:00', 'Ambecha MALIYA HATINA ', 'Gujarat', 'Junagadh District', '8160987392', '5568_1.jpg', '5568_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(75, '5992', NULL, 'Jayendrasinh Rathod', 'Patubha', 'Rathod ', 'jayendrasinhrathod932@gmail.com', '2004-09-28 00:00:00', 'Vadala plot vistar', 'Gujarat', 'Kutchh', '7043480833', '5992_1.jpg', '5992_2.jpg', 'A+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(76, '6747', NULL, 'Rikeshan', 'Laxman Bhai ', 'Mavar', 'mavarrikeshan63@gamil.com', '1996-05-30 00:00:00', '119-B Jain samrt society Bhurava Godhra panchmahals', 'Gujarat', 'Panchmahal', '9725673467', '6747_1.jpg', '6747_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(77, '8247', NULL, 'Jaydipsinh Rana', 'Jayendrasinh ', 'Rana ', 'jaydipsinhzala786@gmail.com', '2002-06-01 00:00:00', 'Ctm gurukupa School Ahmedabad gujarat ', 'Gujarat', 'Ahmedabad City', '6355117394', '8247_1.jpg', '8247_2.jpg', 'B+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(78, '1407', NULL, 'MEHULSINH ', 'SANJAYSINH ', 'CHAUHAN ', 'chauhanmehulsinh39@gmail.com', '1996-11-05 00:00:00', 'Mahadev vadu faliyu,Adruj', 'Gujarat', 'Anand', '9313022899', '1407_1.jpg', '1407_2.jpg', 'None/ખ્યાલ નથી', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(79, '1375', NULL, 'Meetrajsinh', 'Vikramsinh', 'Jadeja', 'meetubhajadeja5@gamil.com', '2004-12-03 00:00:00', 'Mota vagudad,Dhrol ', 'Gujarat', 'Jamnagar District', '9601393737', '1375_1.jpg', '1375_2.jpg', 'B+', 'study', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(80, '9436', NULL, 'Pranjal', 'Sanjay bhai', 'Mahant', 'pranjalmahant562@gmail.com', '2005-12-23 00:00:00', 'Khantariya', 'Gujarat', 'Vadodara District', '8799069314', '9436_1.jpg', '9436_2.jpg', 'B-', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(81, '8369', NULL, 'Sahaj patel', 'Alpesh Bhai ', 'Patel', 'sahajpatel748@gmail.com', '2003-11-04 00:00:00', 'Lachhars ', 'Gujarat', 'Narmada', '7046498374', '8369_1.jpg', '8369_2.jpg', 'B+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(82, '6537', NULL, 'Rutvik ', 'Mukesh Bhai ', 'Makwana', 'makwanarutvik62@gmail.com', '2004-08-21 00:00:00', 'Parshival para meghdut sinema ni pachal mahuva', 'Gujarat', 'Bhavnagar District', '9428882043', '6537_1.jpg', '6537_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(83, '9694', NULL, 'Baldevsinh', 'Ruturajsinh', 'Rana', 'baldevsinh7@gmail.com', '1995-05-10 00:00:00', 'Ribda ', 'Gujarat', 'Rajkot District', '8507277777', '9694_1.jpg', '9694_2.jpg', 'B+', 'job', 'inactive', '2024-08-12 20:54:22', '2024-08-12 20:54:22', ''),
(86, '7337', 'RAR/10002', 'YUVRAJSINH sdd', 'BHUPENDRASINH', 'GOHIL', 'ybgohil1999@gmail.com', '1999-11-22 00:00:00', 'Bhaktinagar ', 'Gujarat', 'Bhavnagar City', '8200500994', '7337_1.jpg', '7337_2.jpg', 'O+', 'business', 'active', '2024-08-13 06:35:37', '2024-09-10 17:09:03', ''),
(87, '3874', '', 'Jaydip ', 'Rameshbhai', 'Meniya', 'Meniyajaydip345@gmail.com', '2006-12-21 00:00:00', '108 shivshakti sosayti,hadanagar ', 'Gujarat', 'Bhavnagar District', '9054645449', '3874_1.jpg', '3874_2.jpg', 'B+', 'business', 'inactive', '2024-08-13 06:48:57', '2024-08-13 06:48:57', ''),
(88, '6261', 'RAR/10001', 'Nilesh kumar', 'Jagdish Bhai', 'Navik', 'nilesh.kumar7087@gmail.com', '2001-11-15 00:00:00', 'House no 42 hari om nagar vallabh vidya nagar', 'Gujarat', 'Anand', '7087655728', '6261_1.jpg', '6261_2.jpg', 'B+', 'business', 'active', '2024-08-13 06:58:48', '2024-09-11 17:44:59', ''),
(89, '9922', '', 'Apurv', 'Navneetbhai', 'Bhargav', 'apurvbhargav07@gmail.com', '1996-05-16 00:00:00', 'Mansa', 'Gujarat', 'Gandhinagar District', '9104320022', '9922_1.jpg', '9922_2.jpg', 'B+', 'business', 'inactive', '2024-08-13 09:47:07', '2024-08-13 09:47:07', ''),
(90, '9573', '', 'Meet Prajapati', 'Pankaj ', 'Prajapati ', 'Hardikprajapati581@gmail.com', '2024-10-19 00:00:00', 'Fatepura ', 'Gujarat', 'Dahod', '+448799157233', '9573_1.jpg', '9573_2.jpg', 'None/ખ્યાલ નથી', 'none', 'inactive', '2024-08-13 10:35:04', '2024-08-13 10:35:04', ''),
(91, '2890', '', 'Pritesh patel', 'Yashvantbhai ', 'Patel ', 'diwanipritesh@gmail.com', '2000-01-26 00:00:00', 'Gandhinagr sector 28 gidc ', 'Gujarat', 'Gandhinagar District', '9924370655', '2890_1.jpg', '2890_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-13 13:10:41', '2024-08-13 13:10:41', ''),
(92, '4111', '', 'Jaydeep sinh ', 'Natavarsinh ', 'Jadav', 'jaydipsinhjadav58@gmail.com', '2000-06-20 00:00:00', 'Darbargudh Malpur State ', 'Gujarat', 'Arvalli', '8469150201', '4111_1.jpg', '4111_2.jpg', 'B+', 'job', 'inactive', '2024-08-13 14:44:03', '2024-08-13 14:44:03', ''),
(93, '2248', '', 'Krish ', 'Vinodbhai ', 'Patel', 'kvchaudhary795@gmail.com', '2005-06-01 00:00:00', 'At: rellawada,ta:-megharaj , dist:- aravalli ', 'Gujarat', 'Arvalli', '+918141093511', '2248_1.jpg', '2248_2.jpg', 'None/ખ્યાલ નથી', 'study', 'inactive', '2024-08-14 03:01:57', '2024-08-14 03:01:57', ''),
(94, '2002', '', 'Ramesh', 'Bharmal', 'Chaudhari ', 'rameshchaudhari3232@gmail.com', '1994-01-05 00:00:00', 'Vrajvani ta rapar ', 'Gujarat', 'Kutchh', '8780369723', '2002_1.jpg', '2002_2.jpg', 'O+', 'business', 'inactive', '2024-08-14 09:51:49', '2024-08-14 09:51:49', ''),
(95, '6459', '', 'VIRENDRASINH ', 'DEVENDRASINH ', 'SOLANKI ', 'virendrasinhsolanki80@gmail.com', '2006-07-22 00:00:00', 'Ahmedabad', 'Gujarat', 'Ahmedabad City', '7984367788', '6459_1.jpg', '6459_2.jpg', 'None/ખ્યાલ નથી', 'study', 'inactive', '2024-08-14 09:58:46', '2024-08-14 09:58:46', ''),
(96, '2296', '', 'Pushpajsinh jadeja', 'DIGVIJAYSINH Jadeja ', 'Jadeja ', 'jpushpraj3@gmail.com', '2003-08-31 00:00:00', 'Pulen , Kalikund,Dholka’s ', 'Gujarat', 'Ahmedabad District', '9737686047', '2296_1.jpg', '2296_2.jpg', 'A+', 'study', 'inactive', '2024-08-14 13:26:02', '2024-08-14 13:26:02', ''),
(97, '3458', '', 'Jaynil', 'Kalpesh', 'Sheth', 'Jaynilsheth128700@gmail.com', '1999-07-02 00:00:00', 'Ahmedabad ', 'Gujarat', 'Ahmedabad City', '7405559787', '3458_1.jpg', '3458_2.jpg', 'O+', 'business', 'inactive', '2024-08-14 22:35:17', '2024-08-14 22:35:17', ''),
(98, '5089', '', 'Dhruvrajsinh ', 'Shailendrasinh ', 'Zala', 'DhruvrajSinhzala2002@gmail.com', '2002-01-12 00:00:00', 'D-101 dev shikhar residence ganesh chokdi anand ', 'Gujarat', 'Anand', '7567012355', '5089_1.jpg', '5089_2.jpg', 'O+', 'study', 'inactive', '2024-08-15 03:35:46', '2024-08-15 03:35:46', ''),
(99, '9997', '', 'PANCHAL PRUTHVI ', 'RAMESHBHAI ', 'PANCHAL ', 'pruthvipanchal6@gmail.com', '2001-03-10 00:00:00', '66/A SHEREE PRABHUNAGAR SOCIETY ', 'Gujarat', 'Mehsana', '8153916989', '9997_1.jpg', '9997_2.jpg', 'A+', 'job', 'inactive', '2024-08-15 03:48:49', '2024-08-15 03:48:49', ''),
(100, '1096', '', 'BrijrajSinh ', 'HimmatSinh', 'Jadeja', 'Jbrijraj987@gmail.com', '2005-06-06 00:00:00', 'BHUJ ', 'Gujarat', 'Kutchh', '9173507413', '1096_1.jpg', '1096_2.jpg', 'B+', 'business', 'inactive', '2024-08-15 05:45:54', '2024-08-15 05:45:54', ''),
(101, '4705', '', 'Kaninika ', 'Raju', 'Sanyal', 'Kaninikasanyal84@gmail.com', '2002-05-07 00:00:00', 'M_18/205 sahyog Appartment ', 'Gujarat', 'Gandhinagar District', '8866455718', '4705_1.jpg', '4705_2.jpg', 'A+', 'study', 'inactive', '2024-08-16 03:48:52', '2024-08-16 03:48:52', ''),
(102, '6147', '', 'Chauhan Jigneshsinh', 'Chauhan Mangaji', 'Chauhan', 'tj3819823@gmail.com', '2001-12-20 00:00:00', 'Khadalpur', 'Gujarat', 'Mehsana', '+918980200814', '6147_1.jpg', '6147_2.jpg', 'A+', 'job', 'inactive', '2024-08-16 06:07:28', '2024-08-16 06:07:28', ''),
(103, '1837', '', 'Jash', 'Aravindbhai ', 'Savani', 'jash.pvt@gmail.com', '2003-02-01 00:00:00', 'Gadhapur Township, Kathodra Road', 'Gujarat', 'Surat District', '7567600530', '1837_1.jpg', '1837_2.jpg', 'O+', 'business', 'inactive', '2024-08-16 09:36:04', '2024-08-16 09:36:04', ''),
(105, '5514', 'RAR/10003', 'Rajdip', 'Babubhai', 'Baleja', 'balejarajdip@gmail.com', '1997-07-15 00:00:00', 'Near. Swaminarayan Gurukul, Chhaya road, Chhaya', 'Gujarat', 'Porbandar', '9904985322', '5514_1.jpg', '5514_2.jpg', 'B+', 'job', 'active', '2024-08-16 13:48:13', '2024-09-06 19:25:25', ''),
(106, '4669', '', 'Ramde', 'Jivabhai', 'Odedra', 'ramdevodedra49@gmail.com', '1989-11-23 00:00:00', 'Ranavav 2', 'Gujarat', 'Porbandar', '9662701137', '4669_1.jpg', '4669_2.jpg', 'B+', 'job', 'inactive', '2024-08-16 14:16:40', '2024-08-16 14:16:40', ''),
(107, '8232', '', 'Shahid ', 'Suleman', 'Juneja', 'Junejashahid1@gmail.com', '1998-10-24 00:00:00', 'Taibha tawonship near khari nadi road, kodki road ', 'Gujarat', 'Kutchh', '9327831812', '8232_1.jpg', '8232_2.jpg', 'AB+', 'business', 'inactive', '2024-08-17 05:06:49', '2024-08-17 05:06:49', ''),
(108, '1582', '', 'RAHUL', 'SANJAYBHAI ', 'GOHIL', 'rahul17gohil@gmail.com', '1998-11-17 00:00:00', 'ANKLESHWAR', 'Gujarat', 'Narmada', '9157470533', '1582_1.jpg', '1582_2.jpg', 'B+', 'business', 'inactive', '2024-08-18 03:40:06', '2024-08-18 03:40:06', ''),
(109, '8015', '', 'Mahipalsinh', 'Batuksinh', 'Chavda', 'mahipalsinhchavda57@gmail.com', '2005-12-23 00:00:00', 'Koylana', 'Gujarat', 'Junagadh City', '+1916353147050', '8015_1.jpg', '8015_2.jpg', 'B+', 'job', 'inactive', '2024-08-18 04:23:23', '2024-08-18 04:23:23', ''),
(110, '3790', '', 'Divam ', 'Sandipbhai ', 'Joshi', 'divamjoshi111@gmail.com', '2008-11-11 00:00:00', 'Dayapar ', 'Gujarat', 'Kutchh', '8140320111', '3790_1.jpg', '3790_2.jpg', 'A+', 'study', 'inactive', '2024-08-19 07:57:59', '2024-08-19 07:57:59', ''),
(111, '6774', '', 'Poonam ', 'Anilbhai', 'Kamvani', 'tiyakamvani@gmail.com', '1989-09-28 00:00:00', '302, harmony residency A, near pal lake garden, pal surat ', 'Gujarat', 'Surat District', '9724300456', '6774_1.jpg', '6774_2.jpg', 'A+', 'business', 'inactive', '2024-08-19 09:25:57', '2024-08-19 09:25:57', ''),
(112, '2087', '', 'Nadim', 'Minashbhai', 'Vaidh ', 'nadimvaidh5@gmail.com', '1999-05-04 00:00:00', 'Jk hospital rod Dholka ', 'Gujarat', 'Ahmedabad District', '8200827651', '2087_1.jpg', '2087_2.jpg', 'O+', 'business', 'inactive', '2024-08-20 12:33:52', '2024-08-20 12:33:52', ''),
(113, '8749', '', 'satypalsinh ', 'Dhanvirsinh ', 'Gohil', 'satypalsinhgohil01@gmail.com', '2003-08-13 00:00:00', 'Chitravav ', 'Gujarat', 'Bhavnagar City', '9265646643', '8749_1.jpg', '8749_2.jpg', 'None/ખ્યાલ નથી', 'study', 'inactive', '2024-08-20 15:07:49', '2024-08-20 15:07:49', ''),
(114, '1282', '', 'Mahipalsinh', 'Pruthvirajsinhvaghela ', 'Vaghela', 'mahipalsinhvaghela312@gmail.com', '1996-12-03 00:00:00', 'Thara ', 'Gujarat', 'BanasKatha', '+919913456005', '1282_1.jpg', '1282_2.jpg', 'A+', 'business', 'inactive', '2024-08-21 06:13:21', '2024-08-21 06:13:21', ''),
(115, '2937', '', 'ankit', 'hasmukhbhai', 'barot', 'ankitbarot3112@gamil.com', '1991-06-12 00:00:00', 'D/203.sahaj solitrie .new vasna ahmedabad', 'Gujarat', 'Ahmedabad City', '9725331113', '2937_1.jpg', '2937_2.jpg', 'A+', 'job', 'inactive', '2024-08-21 13:02:55', '2024-08-21 13:02:55', ''),
(116, '1975', '', 'Kishan ', 'Bhagwanjibhai', 'Pambhar ', 'kp498291@gmail.com', '1998-08-17 00:00:00', 'Khambha gir ', 'Gujarat', 'Junagadh City', '9316041926', '1975_1.jpg', '1975_2.jpg', 'O+', 'business', 'inactive', '2024-08-21 15:28:43', '2024-08-21 15:28:43', ''),
(117, '3979', '', 'Kishori Manishkumar ', 'Kalsingbhai ', 'Kishori', 'manishkishori447@gmail.com', '2001-12-10 00:00:00', 'Gujarat, Dahod,chhapri ,navu faliyu ', 'Gujarat', 'Dahod', '7016157500', '3979_1.jpg', '3979_2.jpg', 'A+', 'study', 'inactive', '2024-08-21 18:16:23', '2024-08-21 18:16:23', ''),
(118, '1180', '', 'Jainil', 'Natvarbhai', 'Patel', 'jnpatel8599@gmail.com', '1999-05-08 00:00:00', '2/307 dwarka appartment gota', 'Gujarat', 'Ahmedabad City', '8141876012', '1180_1.jpg', '1180_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-22 06:40:46', '2024-08-22 06:40:46', ''),
(119, '1573', '', 'Khushal', 'Bharatbhai', 'Sanchaniya', 'khushalsanchaniya31@gmail.com', '2004-07-31 00:00:00', 'Vinayak society , jamnagar road , khambhalia', 'Gujarat', 'Devbhoomi Dwarka', '9265003876', '1573_1.jpg', '1573_2.jpg', 'B+', 'study', 'inactive', '2024-08-22 08:22:05', '2024-08-22 08:22:05', ''),
(120, '8429', '', 'Kashyap', 'Suresh bhai ', 'Godhani', 'kashyapgodhani22@gmail.com', '1998-07-12 00:00:00', '22,River palace mota varacha', 'Gujarat', 'Surat City', '9979131347', '8429_1.jpg', '8429_2.jpg', 'None/ખ્યાલ નથી', 'business', 'inactive', '2024-08-22 10:47:47', '2024-08-22 10:47:47', ''),
(121, '2582', '', 'Dharmrajsinh ', 'Rajendrasinh ', 'Gohil', 'gohildharmarajsinh0004@gmail.com', '1995-06-15 00:00:00', 'Ranghola ', 'Gujarat', 'Bhavnagar District', '9173404444', '2582_1.jpg', '2582_2.jpg', 'B+', 'business', 'inactive', '2024-08-22 11:39:48', '2024-08-22 11:39:48', ''),
(122, '5186', '', 'Hardik', 'Himatlal ', 'Solanki', 'hrdkslnk@gmail.com', '1998-06-11 00:00:00', '2 shantikunj society ', 'Gujarat', 'Mehsana', '8849172644', '5186_1.jpg', '5186_2.jpg', 'A+', 'JOB / નોકરી', 'inactive', '2024-08-23 15:03:06', '2024-08-23 15:03:06', ''),
(123, '1823', '', 'Sirajudin ', 'Hushen', 'Sherasiya ', 'sirajudinsherasiya627@gmail.com', '1994-11-11 00:00:00', 'Sindhavadar ', 'Gujarat', 'Morbi', '7698686110', '1823_1.jpg', '1823_2.jpg', 'None/ખ્યાલ નથી', 'None / કશું નહિ', 'inactive', '2024-08-25 13:42:22', '2024-08-25 13:42:22', ''),
(124, '7685', '', 'Digvijaysinh Chauhan ', 'Devendrasinh ', 'Chauhan ', 'chauhandigvijay1610@gmail.com', '2002-02-16 00:00:00', 'Odhav Ahmedabad ', 'Gujarat', 'Ahmedabad City', '6355807324', '7685_1.jpg', '7685_2.jpg', 'B+', 'Business / વ્યવસાય', 'inactive', '2024-08-26 16:21:24', '2024-08-26 16:21:24', ''),
(125, '2031', '', 'AJAYKUMAR', 'DINESHBHAI', 'PATEL', 'patelajay.031@gmail.com', '1994-02-18 00:00:00', '984, NAVRANGPURA, NIKORA', 'Gujarat', 'Bharuch', '9558245143', '2031_1.jpg', '2031_2.jpg', 'AB+', 'JOB / નોકરી', 'inactive', '2024-08-26 19:26:02', '2024-08-26 19:26:02', ''),
(126, '2201', '', 'Omkar patel', 'Rakeshkumar', 'Patel', 'patelomkar496@gmail.com', '2006-03-04 00:00:00', '11 ambika nagar society opp omkareshwar mahadev ', 'Gujarat', 'Anand', '8140203334', '2201_1.jpg', '2201_2.jpg', 'B+', 'Study / અભ્યાસ', 'inactive', '2024-08-27 05:19:57', '2024-08-27 05:19:57', ''),
(127, '9568', '', 'Viraj', 'Rameshbhai', 'Patel', 'virajpatel938@gmail.com', '1997-07-03 00:00:00', 'Vadodara', 'Gujarat', 'Vadodara City', '+1 6476297875', '9568_1.jpg', '9568_2.jpg', 'A+', 'Business / વ્યવસાય', 'inactive', '2024-08-27 07:28:11', '2024-08-27 07:28:11', ''),
(128, '3295', 'RAR/10004', ' JAYDEVSINH ', 'RANJITSINH ', 'SARVAIYA ', 'sarvaiyajaydevsinh79@gmail.com', '2003-01-05 00:00:00', 'BHAVNAGAR ', 'Gujarat', 'Bhavnagar District', '9081016019', '3295_1.jpg', '3295_2.jpg', 'A+', 'Business / વ્યવસાય', 'active', '2024-08-27 09:41:40', '2024-09-06 19:25:46', ''),
(129, '8913', '', 'Jinesh ', 'Krupesh Kumar ', 'Patel', 'pateljinesh76@gmail.com', '2001-09-01 00:00:00', 'Bhadra chowk 2 near tower bhadran ', 'Gujarat', 'Anand', '9558491759', '8913_1.jpg', '8913_2.jpg', 'B+', 'Business / વ્યવસાય', 'inactive', '2024-08-27 12:44:25', '2024-08-27 12:44:25', ''),
(130, '3706', '', 'Vivek ', 'Rajeshbhai', 'Dodiya', 'Vivekdodiya9090@gmail.com', '2003-05-04 00:00:00', '\'Dharam bhakti\' shree hari 20 near bapa sitaram chowk mavdi chokdi rajkot', 'Gujarat', 'Rajkot City', '9081681209', '3706_1.jpg', '3706_2.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-08-27 19:58:34', '2024-08-27 19:58:34', ''),
(131, '7319', '', 'Karmarajsinh ', 'Brijrajsinh ', 'Parmar', 'Karmaraj.kp@gmail.com', '1997-06-06 00:00:00', 'A9 CHAITANYA park jitodia road anand', 'Gujarat', 'Anand', '7984110994', '7319_1.jpg', '7319_2.jpg', 'B+', 'Business / વ્યવસાય', 'inactive', '2024-08-28 00:41:25', '2024-08-28 00:41:25', ''),
(132, '7024', '', 'KrushnKumar', 'Siddharajsinh', 'Padhiyar', 'Krushnpadhiyar64@gmail.com', '1999-01-20 00:00:00', '6/153, Near Post Office, Ranjitnagar, Savli ', 'Gujarat', 'Vadodara District', '8511213181', '7024_1.jpg', '7024_2.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-08-28 06:36:28', '2024-08-28 06:36:28', ''),
(133, '2020', '', 'VIVEK KANADIYA ', 'Chandreshbhai kanadiya ', 'Kanadiya ', 'vivekckanadiya23@gmail.com', '2004-04-23 00:00:00', 'Chandresh H Kanadiya  RTO road near Gopallalji Haveli Aadarsh society plot no 748  Prabhubhuvan, Vijayrajnagar, Bhavnagar.', 'Gujarat', 'Bhavnagar District', '9316684248', '2020_1.jpg', '2020_2.jpg', 'A-', 'Study / અભ્યાસ', 'inactive', '2024-08-28 06:57:26', '2024-08-28 06:57:26', ''),
(134, '4904', '', 'Mahesh ', 'Govind bhai', 'Rabari', 'maheshkarotra8899@gmail.com', '2003-07-21 00:00:00', 'Dudhni derini pachad rabari nes', 'Gujarat', 'Surendra Nagar', '9510742325', '4904_1.jpg', '4904_2.jpg', 'None/ખ્યાલ નથી', 'None / કશું નહિ', 'inactive', '2024-08-29 01:06:39', '2024-08-29 01:06:39', ''),
(135, '8277', '', 'Jahnvi ', 'Harmahesh ', 'Vasawada ', 'Jahnvivasawada01@gmail.com', '1992-07-15 00:00:00', 'C 31 satellite center behind mansi complex vastrapur ', 'Gujarat', 'Ahmedabad City', '7600574127', '8277_1.jpg', '8277_2.jpg', 'B+', 'Doctor / ડોક્ટર', 'inactive', '2024-08-29 16:52:58', '2024-08-29 16:52:58', ''),
(136, '7394', '', 'PIYUSH PATEL', 'Mukesh bhai ', 'Patel', 'patelpiyush.3343@gmail.com', '1997-08-07 00:00:00', '43 - VATSALYA BUNGLOWS VESU SURAT', 'Gujarat', 'Surat City', '8469883881', '7394_1.jpg', '7394_2.jpg', 'B+', 'Business / વ્યવસાય', 'inactive', '2024-08-30 01:44:48', '2024-08-30 01:44:48', ''),
(137, '1077', '', 'Nikulkumar ', 'Jethabhai ', 'Vankar', 'nikulr460@gmail.com', '2001-08-01 00:00:00', 'At nadisar ta godhra ', 'Gujarat', 'Panchmahal', '7567093449', '1077_1.jpg', '1077_2.jpg', 'A+', 'None / કશું નહિ', 'inactive', '2024-08-30 11:26:50', '2024-08-30 11:26:50', ''),
(138, '8082', '', 'SMIT ', 'GOPALBHAI ', 'PATOLIYA', 'dwarkadhishenterprise33@gmail.com', '2005-11-13 00:00:00', 'HADMATIYA KHAJURI ', 'Gujarat', 'Junagadh District', '9714432262', '8082_1.jpg', '8082_2.jpg', 'A+', 'Business / વ્યવસાય', 'inactive', '2024-08-30 15:30:31', '2024-08-30 15:30:31', ''),
(139, '2425', '', 'Mayur sinh ', 'Udesh bhai ', 'Parmar', 'sinh02476@gmail.com', '2002-05-20 00:00:00', 'Veraval kodinar highway Prachi ', 'Gujarat', 'Gir Somnath', '+919099180222', '2425_1.jpg', '2425_2.jpg', 'A+', 'JOB / નોકરી', 'inactive', '2024-08-30 15:44:11', '2024-08-30 15:44:11', ''),
(140, '7534', '', 'Jay', 'Pankajbhai ', 'Kubavat ', 'jaykubavat337@gmail.com', '2005-01-11 00:00:00', 'C3 303 Global city sayan road', 'Gujarat', 'Surat City', '8866910450', '7534_1.jpg', '7534_2.jpg', 'B+', 'Study / અભ્યાસ', 'inactive', '2024-08-31 11:37:58', '2024-08-31 11:37:58', ''),
(141, '7942', '', 'Meet ', 'Mana bhai ', 'Nadoda ', 'rajputmeet432@gmail.com', '2003-03-16 00:00:00', 'Vivekananda Nagar hathijan ', 'Gujarat', 'Ahmedabad City', '9664871983', '7942_1.jpg', '7942_2.jpg', 'O+', 'Business / વ્યવસાય', 'inactive', '2024-08-31 11:45:29', '2024-08-31 11:45:29', ''),
(142, '5198', '', 'Jeet', 'Manish', 'Bhatia', 'jeetbhatia6910@gmail.com', '2002-12-08 00:00:00', '180, Mangleshwar Nagar ', 'Gujarat', 'Kutchh', '7359320310', '5198_1.jpg', '5198_2.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-08-31 12:48:20', '2024-08-31 12:48:20', ''),
(143, '7359', '', 'JAYKUMAR ', 'MAHESHBHAI', 'DAVE', 'Jaydave665@gmail.com', '1997-04-03 00:00:00', 'C/2 kailash colony near bharvi tower CTM', 'Gujarat', 'Ahmedabad City', '7874756707', 'idProof_4bf97c61-4a11-4a54-b0fb-5aae1db9c049.jpg', 'photo_c1123a96-0ffd-4eba-b203-5687d4edc120.jpg', 'A+', 'Business / વ્યવસાય', 'inactive', '2024-08-31 14:08:06', '2024-08-31 14:08:06', ''),
(144, '1771', '', ' vimal ', 'Natubhai ', 'Solanki ', 'Solankivimal2865@gmail.com', '2002-05-07 00:00:00', 'Valukad jijinu ', 'Gujarat', 'Bhavnagar District', '9574207069', 'idProof_e41aa48c-431d-4433-887b-6f8e1e234e7b.jpg', 'photo_6c326aff-b7de-48cf-a947-f8f73a83f1df.jpg', 'None/ખ્યાલ નથી', 'None / કશું નહિ', 'inactive', '2024-08-31 14:28:39', '2024-08-31 14:28:39', ''),
(145, '2931', '', 'Yuvrajsinh ', 'Becharsinh ', 'Jadeja', 'yuvrajsinhj152@gmail.com', '2004-02-13 00:00:00', 'Suigam ', 'Gujarat', 'BanasKatha', '6352780404', 'idProof_3f529922-6945-478a-b1c9-352b3aa4b65f.jpg', 'photo_dcf24469-1079-4a8d-8166-317653e2a444.jpg', 'A+', 'JOB / નોકરી', 'inactive', '2024-08-31 14:35:23', '2024-08-31 14:35:23', ''),
(146, '2615', '', 'Daxesh', 'R', 'Chaudhari', 'daxc4@gmail.com', '2000-12-05 00:00:00', 'Mansa', 'Gujarat', 'Gandhinagar', '9662696660', 'idProof_562eb714-cb8f-4d43-9b7a-913125cd7198.jpg', 'photo_ddd888e5-73ed-45c8-9576-7f4efaed8dcf.jpg', 'None/ખ્યાલ નથી', 'None / કશું નહિ', 'inactive', '2024-08-31 14:41:46', '2024-08-31 14:41:46', ''),
(147, '2287', '', 'Meet', 'Suresh Bhai ', 'Baldaniya', 'meetbaladaniya188@gmail.com', '2006-07-27 00:00:00', 'Malsika', 'Gujarat', 'Amreli', '9104822361', 'idProof_6ccca9c9-71e8-4956-bb72-6e4c3668bad6.jpg', 'photo_82f8fa2b-ae19-44bd-b3ca-49f5dd8e8202.jpg', 'A+', 'JOB / નોકરી', 'inactive', '2024-08-31 14:51:33', '2024-08-31 14:51:33', ''),
(148, '3986', '', 'Jay ', 'Dinesh bhai', 'Joshi', 'jaijoshi1432@gmail.com', '2001-03-20 00:00:00', 'Fagvel', 'Gujarat', 'Kheda', '8780213003', 'idProof_9b957323-a0bd-47ed-8ed7-db98408b33cf.jpg', 'photo_79ddf248-9811-4f04-81e7-150ed2fd6305.jpg', 'None/ખ્યાલ નથી', 'None / કશું નહિ', 'inactive', '2024-08-31 15:25:42', '2024-08-31 15:25:42', ''),
(149, '1281', '', 'Parmar Nikhil Lalitbhai', 'Lalitbhai Mavjibhai Parmar', 'Parmar', 'nikhilparmar1255@gmail.com', '2004-08-23 00:00:00', 'N/223 Mehnatpura  Bhudarpura road', 'Gujarat', 'Ahmedabad City', '7434028081', 'idProof_9c5f4dc4-1331-4a97-ac99-c942670469e4.jpg', 'photo_e6f7aa48-fa02-4d91-9451-d28e3b6cb870.jpg', 'None/ખ્યાલ નથી', 'JOB / નોકરી', 'inactive', '2024-08-31 15:57:40', '2024-08-31 15:57:40', ''),
(150, '1620', '', 'Mahesh', 'Ranjitbhai ', 'Dabhi', 'maheshdabhi0305@gmail.com', '2001-12-07 00:00:00', 'Songadh ', 'Gujarat', 'Bhavnagar District', '9510333653', 'idProof_c7abd587-0f5b-4916-b3b9-2deae3198c6c.jpg', 'photo_c4649ae3-4b97-485c-9f83-505fe8e20db4.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-08-31 16:20:51', '2024-08-31 16:20:51', ''),
(151, '3539', '', 'JAYRAJSINH ', 'AJITSINH ', 'RATHOD', 'rjayubha5@gmail.com', '2000-08-13 00:00:00', 'Shakt sanala Morbi ', 'Gujarat', 'Morbi', '7046593852', 'idProof_3bd597df-6cb1-4dec-8402-cf7b81693c83.jpg', 'photo_28e79cb8-e825-4214-9915-759577cfe637.jpg', 'None/ખ્યાલ નથી', 'JOB / નોકરી', 'inactive', '2024-08-31 16:27:23', '2024-08-31 16:27:23', ''),
(152, '3905', '', 'ZAPDIYA PIYUSH ', 'BABUBHAI', 'ZAPDIYA', 'piyushzapdiya313@gmail.com', '1992-06-01 00:00:00', 'AT KHAMBHAL TA BABRA DIS AMRELI ', 'Gujarat', 'Amreli', '9724493618', 'idProof_0946328c-931b-42a8-9350-7c0d775e368b.jpg', 'photo_d2c1a770-161c-4961-8395-d7ecd820c461.jpg', 'A+', 'Business / વ્યવસાય', 'inactive', '2024-08-31 17:02:26', '2024-08-31 17:02:26', ''),
(153, '5241', '', 'Dishant ', 'Jaysukhbhai', 'Dudhat', 'dishantdudhat5@gmail.com', '2003-01-01 00:00:00', '164bhagvati Krupa soc ', 'Gujarat', 'Surat City', '9023747223', 'idProof_c2e51dbf-97b9-4907-b438-31f7ffdcea9d.jpg', 'photo_ee93d1c6-2a3d-4bf7-88b8-4598aa7c6cad.jpg', 'B+', 'Business / વ્યવસાય', 'inactive', '2024-08-31 17:43:22', '2024-08-31 17:43:22', ''),
(154, '2254', '', 'Devarsh ', 'Mehul Bhai ', 'Dholakia', 'ddevarsh78@gmail.com', '1999-12-16 00:00:00', '18/B Greencity navavas madhapar ', 'Gujarat', 'Kutchh', '8488931782', 'idProof_7aeded12-79db-4a64-944c-dd5293410aae.jpg', 'photo_b811d120-0d8b-4153-b4e0-9295783a63b8.jpg', 'A+', 'JOB / નોકરી', 'inactive', '2024-08-31 18:41:39', '2024-08-31 18:41:39', ''),
(155, '7535', '', 'Ridham', 'Kaushikbhai', 'Pithadiya', 'pithadiyaridham@gmail.com', '2003-09-02 00:00:00', 'Shree nagar 5 Sankar main road rajkot', 'Gujarat', 'Rajkot City', '9409750514', 'idProof_2e6f84d0-ccc4-4a96-9fc3-84dacffdbde4.jpg', 'photo_771768e6-e294-490f-9d05-b84c19cc4670.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-08-31 18:49:04', '2024-08-31 18:49:04', ''),
(156, '6886', '', ' Sivrajsinh', 'Ranjitsinh', 'Parmar', 'sivrajsinhparmar63@gmail.com', '2002-08-24 00:00:00', 'KESHOD ', 'Gujarat', 'Junagadh City', '7567716027', 'idProof_6dc0d95c-bcdc-4b59-9b78-75defcf2f0c4.jpg', 'photo_09190d0e-65ab-43b0-9b49-cb4db79cf75a.jpg', 'None/ખ્યાલ નથી', 'None / કશું નહિ', 'inactive', '2024-08-31 18:59:02', '2024-08-31 18:59:02', ''),
(157, '8047', '', 'વૈભવકુમાર ', 'કમલેશભાઈ', 'ચૌહાણ ', 'vc3145001@gmail.com', '2024-05-06 00:00:00', 'મંદિર ફળિયા,ડબગરવાસ,ઝાલોદ', 'Gujarat', 'Dahod', '7383074391', 'idProof_04d24461-5b88-4be1-a456-3f34f9f3c83d.jpg', 'photo_42426e7b-1a20-40eb-91fb-dcfea43719f7.jpg', 'O+', 'JOB / નોકરી', 'inactive', '2024-08-31 19:25:39', '2024-08-31 19:25:39', ''),
(158, '5891', '', 'Rajdeepsinh ', 'Mahavirsinh Jadeja', 'Jadeja', 'rajdeepjadeja616@gmail.com', '2004-10-15 00:00:00', 'Khodiyar colony', 'Gujarat', 'Jamnagar City', '9737696507', 'idProof_e33d6dfc-f42b-4a08-9db9-3ea5d83ffede.jpg', 'photo_24ccdf5a-4ff6-4a1e-8b31-0065bf92e3a6.jpg', 'A+', 'Business / વ્યવસાય', 'inactive', '2024-08-31 19:27:48', '2024-08-31 19:27:48', ''),
(159, '8772', '', 'NIKUNJ', 'JAYANTI BHAI ', 'KANZARIYA', 'nikunjkanjariya252003@gmail.com', '2025-02-25 00:00:00', 'KANKAVATI', 'Gujarat', 'Surendra Nagar', '9662441321', 'idProof_4dc0a972-b6f0-4d3a-9497-245e85131f58.jpg', 'photo_28bf86c6-c385-4595-86e9-397080df3edb.jpg', 'O+', 'Study / અભ્યાસ', 'inactive', '2024-08-31 20:50:44', '2024-08-31 20:50:44', ''),
(160, '6013', '', 'Vivek', 'Bhupendrabhai', 'Patel', 'vivekpatel0306@gmail.com', '2000-06-03 00:00:00', 'D--101 Sai flora ne raspan cross road nikol ', 'Gujarat', 'Ahmedabad City', '9909680306', 'idProof_2c960606-54b2-4c76-8b34-9c5861b885b6.jpg', 'photo_d649d8fc-f98a-4afc-80b0-440fbe37c90a.jpg', 'O+', 'JOB / નોકરી', 'inactive', '2024-08-31 21:00:56', '2024-08-31 21:00:56', ''),
(161, '3090', '', 'Patel Meet Prakashchandra ', 'Prakashchandra ', 'Patel', 'meet35989@gmail.com', '2001-11-09 00:00:00', '54, Bapunagar Society,Vavdi Buzarg, Godhra', 'Gujarat', 'Panchmahal', '9328278061', 'idProof_e8453103-7d85-4762-a148-f2b0b763f1dc.jpg', 'photo_47e0f48a-94db-48a5-aa54-fccc3bea4a63.jpg', 'B+', 'Study / અભ્યાસ', 'inactive', '2024-08-31 21:48:30', '2024-08-31 21:48:30', ''),
(162, '5059', '', 'Dodiya sagar', 'Jesing bhai', 'Dodiya', 'dodiyas551@gmail.com', '2008-06-23 00:00:00', 'Pedhavada, kodinar,gir somanath ', 'Gujarat', 'Gir Somnath', '6354806990', 'idProof_a460e019-338c-4810-a673-74b63fdef584.jpg', 'photo_1f3792e9-bc9f-48c8-97c5-2445865ab783.jpg', 'A+', 'Study / અભ્યાસ', 'inactive', '2024-09-01 01:17:06', '2024-09-01 01:17:06', ''),
(163, '9912', '', 'Jaksh', 'Himmat bhai', 'Barot', 'barotjaksh8@gmail.com', '2007-08-26 00:00:00', 'Ahmedabad ', 'Gujarat', 'Ahmedabad City', '9924853667', 'idProof_e8302257-e688-4df8-bfe1-16d9988687b2.jpg', 'photo_e676f48a-a8b1-495d-994d-8cbcfb24d7bc.jpg', 'None/ખ્યાલ નથી', 'Study / અભ્યાસ', 'inactive', '2024-09-01 01:30:37', '2024-09-01 01:30:37', ''),
(164, '5289', '', 'Piyushsinh', 'Ramaji', 'Vaghela', 'piyushsinhvaghela143@gmail.com', '1997-02-20 00:00:00', 'Vaghela vas Itadara', 'Gujarat', 'Gandhinagar', '7878126632', 'idProof_248fd1dd-e15e-487d-9a02-79f0dd8c1504.jpg', 'photo_a1100550-3a68-483b-8ccb-654bd78cd7b1.jpg', 'None/ખ્યાલ નથી', 'JOB / નોકરી', 'inactive', '2024-09-01 03:52:19', '2024-09-01 03:52:19', ''),
(165, '6892', '', 'Patel Rajan Kumar ', 'Patel Vishnu Bhai ', 'Patel ', 'pr20104102@gmail.com', '2004-12-10 00:00:00', 'Navi Borol AT. PO:- Navi Borol  TA:-Bayad DT:-Arvali ', 'Gujarat', 'Arvalli', '6351309769', 'idProof_20665337-58a7-4d4e-81c5-833503d42ca9.jpg', 'photo_9fb91862-f724-4582-8e15-07185a585a6b.jpg', 'O-', 'Study / અભ્યાસ', 'inactive', '2024-09-01 04:21:46', '2024-09-01 04:21:46', ''),
(166, '8440', '', 'Dhruv ', 'Mansukh bhai', 'Vaishnav ', 'vaishnavdhruv235@gmail.com', '2006-10-01 00:00:00', 'Kathlal ', 'Gujarat', 'Kheda', '9726388240', 'idProof_40506d2c-654b-4a3f-bbb7-80ced2ec2b67.jpg', 'photo_d3372f35-388d-4c17-9022-a40706b263c1.jpg', 'B+', 'Study / અભ્યાસ', 'inactive', '2024-09-01 04:46:30', '2024-09-01 04:46:30', ''),
(167, '6422', '', 'Vishalsinh ', 'Surendrasinh ', 'Vihol', 'vishalsinhbann@gmail.com', '2001-06-02 00:00:00', 'Vadasan ', 'Gujarat', 'Gandhinagar District', '9898784886', 'idProof_6399acba-499c-420f-8f0f-447bb079c148.jpg', 'photo_2020c4c2-98b1-48a8-a6d5-840386ad558d.jpg', 'O+', 'Business / વ્યવસાય', 'inactive', '2024-09-01 05:08:40', '2024-09-01 05:08:40', ''),
(168, '7633', '', 'Dhruv ', 'Mansukhlal ', 'Vaishnav ', 'dhruvvaishnav390@gmail.com', '2006-10-01 00:00:00', 'Kathlal ', 'Gujarat', 'Kheda', '9726388243', 'idProof_05beffce-d336-4b76-be2c-57f72cc55519.jpg', 'photo_18276e0d-fdb1-41ec-8ca8-317bdfb80ca9.jpg', 'B+', 'Study / અભ્યાસ', 'inactive', '2024-09-01 05:09:57', '2024-09-01 05:09:57', '');
INSERT INTO `user` (`id`, `registrationId`, `activationId`, `name`, `fathername`, `surname`, `email`, `birthday`, `address`, `stateId`, `districtId`, `whatsapp`, `idProof`, `photo`, `bloodGroupId`, `designation`, `status`, `createdAt`, `updatedAt`, `subDistrictId`) VALUES
(169, '2078', '', 'ANAND', 'DIPAKBHAI', 'JOSHI', 'aj727643@gmail.com', '2000-08-20 00:00:00', 'D-31/B sardar nagar society, Maktupur ', 'Gujarat', 'Mehsana', '7990162535', 'idProof_76b2cf95-d639-4e64-a949-0b67dfa6cd60.jpg', 'photo_ac7c83c4-1b96-4625-b5df-0208bce313c6.jpg', 'A+', 'Study / અભ્યાસ', 'inactive', '2024-09-01 06:32:10', '2024-09-01 06:32:10', ''),
(170, '6300', '', 'Akshay sinh gohel', 'Punam sinh ', 'Gohel', 'gohelakshay2000@gmail.com', '2024-08-20 00:00:00', 'Sandheli ', 'Gujarat', 'Kheda', '7600596842', 'idProof_4257f0fb-d8f1-4da1-97c4-700966b2fdbe.jpg', 'photo_becc1861-90c8-4903-8e5d-46402c7c3ad7.jpg', 'None/ખ્યાલ નથી', 'Business / વ્યવસાય', 'inactive', '2024-09-01 06:39:43', '2024-09-01 06:39:43', ''),
(171, '9086', '', 'Bharat Parmar', 'Kanubhai', 'bharatparmar817978@gmail.com', 'bharatparmar817978@gmail.com', '2024-06-13 00:00:00', 'Panchmahal', 'Gujarat', 'Panchmahal', '9512894031', 'idProof_40dd8e93-072b-4f48-9cea-799046b65ae0.jpg', 'photo_845e6c63-cee5-4789-95f8-7cc2c7f4a734.jpg', 'None/ખ્યાલ નથી', 'JOB / નોકરી', 'inactive', '2024-09-01 08:16:34', '2024-09-01 08:16:34', ''),
(172, '1338', '', 'Kuldeepsinh', 'Balvantsinh', 'Rathod', 'mysecure001@gmail.com', '2002-01-29 00:00:00', 'Gandhinagar', 'Gujarat', 'Gandhinagar District', '8320480280', 'idProof_225fdc35-02a9-47c2-b8a7-cfe91e11d4dd.jpg', 'photo_0d6ef411-7e97-4ca5-8605-3aa23e90c229.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-09-01 08:48:36', '2024-09-01 08:48:36', ''),
(173, '8398', '', 'Soham ', 'Bharatbhai', 'Vora', 'ilavora123@gmail.com', '2009-01-01 00:00:00', 'Dhoraji', 'Gujarat', 'Rajkot District', '8780184496', 'idProof_27de16a6-1bc5-433b-b58d-c0a5e0362252.jpg', 'photo_eaacbfba-31bc-42b2-bb54-1779c1ea1338.jpg', 'None/ખ્યાલ નથી', 'Study / અભ્યાસ', 'inactive', '2024-09-01 09:28:14', '2024-09-01 09:28:14', ''),
(174, '3945', '', 'દર્શન', 'જયેશભાઈ', 'પરનાળિયા ', 'jashuparnaliya@gmail.com', '2009-12-25 00:00:00', 'કુંભાર વાળા ધોરાજી ', 'Gujarat', 'Rajkot District', '7046664089', 'idProof_fe7ea465-bfc5-45ed-abcb-53a3ab2f5995.jpg', 'photo_813dfdbf-5483-43d9-913c-382fe8556b10.jpg', 'None/ખ્યાલ નથી', 'Study / અભ્યાસ', 'inactive', '2024-09-01 09:49:57', '2024-09-01 09:49:57', ''),
(175, '7036', '', 'દર્શન ', 'જયેશભાઈ ', 'પરનાળિયા ', 'parnaliyadarshan@gmail.com', '2009-12-25 00:00:00', 'કુંભારવાડા ધોરાજી ', 'Gujarat', 'Rajkot District', '9313617744', 'idProof_30375ff4-ef81-4a05-b910-78b861bf99ad.jpg', 'photo_cc9bd09d-c2e7-44da-b839-6c5285f82f24.jpg', 'None/ખ્યાલ નથી', 'Study / અભ્યાસ', 'inactive', '2024-09-01 09:55:22', '2024-09-01 09:55:22', ''),
(176, '6519', '', 'દર્શન', 'જયેશભાઈ', 'પરનાળિયા ', 'princeparnaliya7@gmail.com', '2009-12-25 00:00:00', 'કુંભારવાડા ધોરાજી', 'Gujarat', 'Rajkot District', '9624992237', 'idProof_defd2d46-ad5b-441a-a438-f644eebce9d9.jpg', 'photo_2114bc85-e618-4926-a21b-c200819e8a02.jpg', 'None/ખ્યાલ નથી', 'Study / અભ્યાસ', 'inactive', '2024-09-01 10:12:31', '2024-09-01 10:12:31', ''),
(177, '8461', '', 'Ravirajsinh ', 'Pradipsinh ', 'Jadeja ', 'ravirajsinhjadeja22874@gmail.com', '1997-02-21 00:00:00', 'Parthnagar Street No 1 Dalmill Road Surendranagar ', 'Gujarat', 'Surendra Nagar', '8401909464', 'idProof_9434803e-9103-42c0-a96d-72cb39f122e7.jpg', 'photo_70d5068b-7c82-45eb-bd65-a54be07cef83.jpg', 'O+', 'JOB / નોકરી', 'inactive', '2024-09-01 10:42:49', '2024-09-01 10:42:49', ''),
(178, '6082', '', 'VANRAJKUMAR ', 'HIRABHAI ', 'KOLI', 'rajput131vanraj@gmail.com', '1997-05-10 00:00:00', 'AT TANKA PO MORIYA TA TILAKWADA ', 'Gujarat', 'Narmada', '9924571471', 'idProof_0ed51d62-4971-473a-b857-9f1561d6be51.jpg', 'photo_302dfece-8b21-40cb-844a-d1892fb607ef.jpg', 'A+', 'Business / વ્યવસાય', 'inactive', '2024-09-01 10:43:52', '2024-09-01 10:43:52', ''),
(179, '3804', '', 'Karansinh ', 'Dalpatsinh ', 'Rajput ', 'kdrajput456@gmail.com', '1997-09-25 00:00:00', 'Charup hanumanpuravas', 'Gujarat', 'Patan', '8155971831', 'idProof_62d2e02f-bb54-40d1-9b47-74afacf4e236.jpg', 'photo_f0f2ed7a-e01d-4944-ad6c-0f33fb03e63b.jpg', 'A+', 'JOB / નોકરી', 'inactive', '2024-09-01 10:49:17', '2024-09-01 10:49:17', ''),
(180, '6988', '', 'Harsh', 'Ashwin Bhai', 'Dattani', 'dattani.harsh812@gmail.com', '2006-12-08 00:00:00', 'Jam - khambhalia', 'Gujarat', 'Devbhoomi Dwarka', '9328791917', 'idProof_cf44cfa8-2ca8-4c8d-bd40-286846333812.jpg', 'photo_2682eac7-8475-4b2a-a22c-ef59a8156bb9.jpg', 'None/ખ્યાલ નથી', 'Business / વ્યવસાય', 'inactive', '2024-09-01 11:10:10', '2024-09-01 11:10:10', ''),
(181, '9011', '', 'PRATHAM ', 'MOHANBHAI', 'RAJPUROHIT ', 'prathamrajpurohit196@gmail.com', '2002-06-19 00:00:00', 'Gujarat High court Society Vasant Nagar township Gota Ognaj road A\'bad ', 'Gujarat', 'Ahmedabad City', '9875148628', 'idProof_6648e2b5-71ed-4a1c-9db7-f10bb2ff0477.jpg', 'photo_42299770-2895-473f-bdec-d02a693dc1b6.jpg', 'O+', 'JOB / નોકરી', 'inactive', '2024-09-01 14:08:40', '2024-09-01 14:08:40', ''),
(182, '3493', '', 'Shrvan', 'Gajendrabhai', 'Suthar', 'shrvansuthar42@gmail.com', '2003-10-03 00:00:00', 'Anand', 'Gujarat', 'Anand', '7698580673', 'idProof_23a75e9c-4340-4dba-afb3-9044eb1783ae.jpg', 'photo_a2f74937-83bd-45e9-b744-ad24dfbbc2ab.jpg', 'O-', 'Study / અભ્યાસ', 'inactive', '2024-09-01 16:05:35', '2024-09-01 16:05:35', ''),
(183, '2442', '', 'Gaurav', 'Rajesh bhai', 'Saraiya', 'gauravsaraiya77@gmail.com', '1999-07-04 00:00:00', 'Zuribaug ', 'Gujarat', 'Porbandar', '7359448404', 'idProof_68981a76-e482-4fdb-b99e-ddd4930cfa62.jpg', 'photo_bbbb6d45-82aa-4d5a-975d-c96368af08da.jpg', 'A+', 'Business / વ્યવસાય', 'inactive', '2024-09-03 05:23:34', '2024-09-03 05:23:34', ''),
(184, '1595', '', 'Jayvirsinh ', 'Khodaji ', 'Vaghela ', 'jayveerv7@gmail.com', '2024-12-29 00:00:00', 'Navi shedhavi ', 'Gujarat', 'Mehsana', '9725114761', 'idProof_86f04f9c-ffc1-495f-9cc7-6a3d716d1f7a.jpg', 'photo_7cbea3c4-eba7-4d80-94f6-fc8351b04f51.jpg', 'A+', 'Study / અભ્યાસ', 'inactive', '2024-09-03 05:33:01', '2024-09-03 05:33:01', ''),
(185, '8588', '', 'Rajdip sinh', 'Gambhir sinh', 'Zala', 'rzala0012@gmail.com', '2006-12-16 00:00:00', 'Rupavti', 'Gujarat', 'Surendra Nagar', '9510777000', 'idProof_9515add5-c4ec-45f2-ac3c-fd4226fe5c90.jpg', 'photo_17b3fe58-c463-4b00-9b51-9404d04a3cd7.jpg', 'None/ખ્યાલ નથી', 'Business / વ્યવસાય', 'inactive', '2024-09-03 10:20:43', '2024-09-03 10:20:43', ''),
(186, '7035', '', 'Mohit ', 'Kapilbhai ', 'Bheda', 'mohitahir1303@gmail.com', '2006-03-13 00:00:00', '202,sree soham residency, nearby surbhi-2 residency,nikol, Ahmedabad-382350', 'Gujarat', 'Ahmedabad City', '7861955933', 'idProof_8d75c976-dba2-4d91-ae1b-29e6a592473f.jpg', 'photo_1a801302-3454-4788-8dcc-bbad3693bb7b.jpg', 'None/ખ્યાલ નથી', 'Study / અભ્યાસ', 'inactive', '2024-09-03 13:52:08', '2024-09-03 13:52:08', ''),
(187, '2650', '', 'Rajdeepsinh ', 'Jabbarsinh ', 'Rajput ', 'rajdeepsinh0209@gmail.com', '2000-09-02 00:00:00', 'Mansa', 'Gujarat', 'Gandhinagar District', '9687585445', 'idProof_471e1a38-4247-43b9-93ff-7e83a4c43c6b.jpg', 'photo_bf3a3fc4-89c2-40c5-8b17-c998d121dfc2.jpg', 'None/ખ્યાલ નથી', 'JOB / નોકરી', 'inactive', '2024-09-03 14:47:45', '2024-09-03 14:47:45', ''),
(188, '7145', '', 'સંજય કુમાર', 'જીતેન્દ્ર ભાઈ ', 'વૈશ્યક', 'electricalhasti13@gmail.com', '1995-08-13 00:00:00', 'F 20 parixitlalnagar chandra bhaga bridge juna vadaj', 'Gujarat', 'Ahmedabad City', '6356869118', 'idProof_9c3c52fc-3a87-40d4-bf64-ab7a69c5162f.jpg', 'photo_5ddc1c3e-5c3d-4d0c-a6ce-a44555b58579.jpg', 'None/ખ્યાલ નથી', 'Business / વ્યવસાય', 'inactive', '2024-09-03 15:32:59', '2024-09-03 15:32:59', ''),
(189, '8592', '', 'Kishan', 'Keshubhai ', 'Halari', 'kishankishanprajapati69@gmail.com', '1996-10-11 00:00:00', 'Aastha village madhvan park jyoti cnc opp kalvad roda metoda gidc ', 'Gujarat', 'Rajkot District', '9104880882', 'idProof_f79c23ab-02c9-435f-ae7f-407a96444470.jpg', 'photo_cbf80bc6-e436-4873-a2bf-63698e8fc5d7.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-09-03 17:35:34', '2024-09-03 17:35:34', ''),
(190, '9785', '', 'Kishan ', 'Keshubhai ', 'Halari', 'kishuprjapati4254@gmail.com', '1996-10-11 00:00:00', 'Aastha village madhvan park jyoti cnc opp kalvad roda metoda gidc ', 'Gujarat', 'Rajkot City', '7383880882', 'idProof_80ac9502-591e-45bc-bdb2-e77e5525948a.jpg', 'photo_d981b1ca-51cc-465c-aa14-3d042cb83905.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-09-03 17:48:32', '2024-09-03 17:48:32', ''),
(191, '7752', '', 'Piyush ', 'Ratilal', 'Mistry ', 'Piyushmistry2410@gmail.com', '1992-10-24 00:00:00', '34/374,ellora appartment near tulip bunglows thaltej', 'Gujarat', 'Ahmedabad City', '9904779443', 'idProof_031c1238-e1aa-4a5c-94a6-38737623b3f4.jpg', 'photo_71d90358-667c-4aba-b562-bf02d3a639dd.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-09-04 02:29:25', '2024-09-04 02:29:25', ''),
(192, '3320', '', 'Virajsinh', 'Chhatrasinh', 'Rathod', 'viraj101230@gmail.com', '2000-12-10 00:00:00', '52 maruti Nandan society andada Ankleshwar', 'Gujarat', 'Bharuch', '7227911573', 'idProof_573936d3-673d-40d3-9f78-d6656205ab5d.jpg', 'photo_bd16d5ce-fad0-4bc8-aa4d-5e862d77eaa8.jpg', 'None/ખ્યાલ નથી', 'Business / વ્યવસાય', 'inactive', '2024-09-04 07:14:06', '2024-09-04 07:14:06', ''),
(193, '4360', '', 'Narendra ', 'Ratan ', 'Patel ', 'narendrapatel70979@gmail.com', '2003-09-04 00:00:00', 'શહેરા પંચમહાલ ', 'Gujarat', 'Panchmahal', '9313210293', 'idProof_7d1b59a0-e393-43ed-8631-3d59116e043f.jpg', 'photo_4578d674-1a60-4a52-8c03-d54ce2e22947.jpg', 'B+', 'Study / અભ્યાસ', 'inactive', '2024-09-04 13:54:54', '2024-09-04 13:54:54', ''),
(194, '5373', '', 'Meet ', 'Jayantibhai', 'Makwana', 'makwanameet134@gmail.com', '2006-02-15 00:00:00', 'jay narayan get bus stop near atkot', 'Gujarat', 'Rajkot District', '8200587776', 'idProof_7dfbd199-722d-49dd-951f-13a8c3324112.jpg', 'photo_89421e53-4d24-462d-a03f-fe2e72bb903c.jpg', 'None/ખ્યાલ નથી', 'Business / વ્યવસાય', 'inactive', '2024-09-05 10:11:22', '2024-09-05 10:11:22', ''),
(195, '3605', '', 'JITENDRA', 'P', 'PATEL', 'jitendrapate6081@gmail.com', '2002-06-26 00:00:00', 'KHADI FALIYA RAMESWAR NAGAR SOCITY ', 'Gujarat', 'Panchmahal', '7359186387', 'idProof_ca24ab55-e5a9-459d-b444-1c8501dc608b.jpg', 'photo_4c687c16-8810-4f10-ae31-2029f649ebe3.jpg', 'None/ખ્યાલ નથી', 'JOB / નોકરી', 'inactive', '2024-09-05 10:59:55', '2024-09-05 10:59:55', ''),
(196, '1673', '', 'Rohit ', 'Parvat Bhai ', 'Makvana ', 'rohitmakavana7474@gmail.com', '1999-12-31 00:00:00', 'Dhandhusar BSNL office morla mandir Balot Road ', 'Gujarat', 'Junagadh City', '7818041552', 'idProof_ce48e328-90bb-421e-a9b0-2b724fe9d96e.jpg', 'photo_2daa150c-ba97-4125-9c1b-bbda241fc3b1.jpg', 'AB+', 'Study / અભ્યાસ', 'inactive', '2024-09-05 11:59:38', '2024-09-05 11:59:38', ''),
(197, '8889', '', 'Dhruv  ', 'Dharmendra bhai ', 'Prajapati', 'dhruvprajapati024@gmail.com', '2024-10-01 00:00:00', 'Aslali gam moto prajapati ', 'Gujarat', 'Ahmedabad City', '9510486559', 'idProof_9c5a97a4-2099-4cd9-ac6f-d2656e4f59e2.jpg', 'photo_79880a84-2752-4b5d-b2f5-9e5258e669a1.jpg', 'O+', 'Study / અભ્યાસ', 'inactive', '2024-09-06 09:54:01', '2024-09-06 09:54:01', ''),
(198, '8912', '', 'Hitesh', 'Ranabhai', 'Bhalgamiya ', 'hbhalgamiya@gmail.com', '1990-06-25 00:00:00', '38 shreeram residency chitra bhavnagar', 'Gujarat', 'Bhavnagar City', '8866529287', 'idProof_fb1a75fe-191a-4bb4-a40c-c315a0dcf2d6.jpg', 'photo_20a1f754-1c63-40ea-81c1-717ded9a7202.jpg', 'B+', 'Business / વ્યવસાય', 'inactive', '2024-09-06 09:56:56', '2024-09-06 09:56:56', ''),
(199, '2485', '', 'Vishvarajsinh ', 'Revtubha ', 'Jadeja ', 'jadejavishvarajsinh0008@gmail.com', '2008-12-11 00:00:00', 'Jamnagar moda ', 'Gujarat', 'Jamnagar City', '7624027332', 'idProof_dcc9b143-8f50-4d4b-8aaa-fc359deb35a5.jpg', 'photo_3de573e4-f40b-4dbc-a7e0-5c13a91af336.jpg', 'B+', 'Study / અભ્યાસ', 'inactive', '2024-09-06 11:23:04', '2024-09-06 11:23:04', ''),
(200, '1441', '', 'Ayush ', 'Lalji bhai ', 'Rabari', 'Ayushrabari1101@gmail.com', '2004-01-01 00:00:00', 'Mehelav rabari vas', 'Gujarat', 'Anand', '9265615880', 'idProof_6fe94efc-b9e1-45de-a6d1-bde5807e5a87.jpg', 'photo_22c64873-60fa-4f6f-875e-b270ce06abdb.jpg', 'A+', 'JOB / નોકરી', 'inactive', '2024-09-06 12:31:31', '2024-09-06 12:31:31', ''),
(201, '1204', '', 'Sanjay Kumar ', 'Moti bhai ', 'Darji', 'Darjisanjay8030@gmail.com', '2002-01-05 00:00:00', 'Dhanera', 'Gujarat', 'BanasKatha', '9998184608', 'idProof_4f7ce795-1b39-4866-8f19-2861cbf282ae.jpg', 'photo_e046d354-13cf-424c-b5e6-cf38a5224d1f.jpg', 'AB+', 'Business / વ્યવસાય', 'inactive', '2024-09-06 16:01:56', '2024-09-06 16:01:56', ''),
(202, '5235', '', 'Gautam', 'Kalubhai', 'Dhedhi', 'dhedhigautam1996@gmail.com', '1996-06-12 00:00:00', '131,Santoshi nagar, near marutichowk, LHroad, Surat.', 'Gujarat', 'Surat City', '8155807373', 'idProof_43a88736-4b1c-4707-8bf8-e0965bc570d5.jpg', 'photo_32990fa8-6b4d-4694-8fec-416871b64824.jpg', 'AB+', 'Business / વ્યવસાય', 'inactive', '2024-09-06 17:50:20', '2024-09-06 17:50:20', ''),
(203, '2547', '', 'Darshanbhai sankdecha', 'Dilipbhai', 'Sankdecha', 'Darshansankdecha715@gmail.com', '1999-07-07 00:00:00', 'Sardhar', 'Gujarat', 'Rajkot City', '8866586817', 'idProof_8dd9dbca-f864-42ef-a027-0b7bcf251bf7.jpg', 'photo_bc35ec46-fdcf-46e0-8862-6775839f4334.jpg', 'None/ખ્યાલ નથી', 'Business / વ્યવસાય', 'inactive', '2024-09-06 18:16:49', '2024-09-06 18:16:49', ''),
(204, '6816', '', 'Ravi', 'Mukeshbhai', 'Pipaliya', 'Ravipipaliya28@gmail.com', '1992-11-22 00:00:00', 'Mavdi chokdi  movdi mein rod shreenathji society street 1', 'Gujarat', 'Rajkot City', '8866893078', 'idProof_810d8166-4f90-417b-8b5c-bd6aa8ccaea5.jpg', 'photo_0bcb5dba-30bd-4c7f-bec2-1d9a791c1755.jpg', 'B+', 'Business / વ્યવસાય', 'inactive', '2024-09-06 20:37:05', '2024-09-06 20:37:05', ''),
(205, '5558', '', 'Dhaval', 'Upendrabhai', 'Parmar', 'parmardhaval317@gmail.com', '1993-11-18 00:00:00', 'A-16 Simdadhar Plaza near jantanagar crossing chankyapuri ghatlodiya ahmedabad', 'Gujarat', 'Ahmedabad City', '7698969691', 'idProof_ec7fff19-25e9-4a46-9712-a6194970f1bb.jpg', 'photo_1d2354df-e0fe-4256-a84e-d8f2280b0a72.jpg', 'B+', 'JOB / નોકરી', 'inactive', '2024-09-07 07:34:50', '2024-09-07 07:34:50', ''),
(206, '3755', '', 'Bhadauria tejendra singh ', 'Bhadauria upendra singh', 'Bhadauria ', 'bhadauriatejendra18@gmail.com', '2024-08-05 00:00:00', 'A/7 new gajendra nagar Ajay Ajay tenament vastral', 'Gujarat', 'Ahmedabad City', '8799040664', 'idProof_b13a282d-2a53-417d-b070-1b2232fc8ef6.jpg', 'photo_87da5ccf-d360-4205-b4e2-395465961d18.jpg', 'A+', 'Study / અભ્યાસ', 'inactive', '2024-09-07 09:18:31', '2024-09-07 09:18:31', ''),
(207, '4206', '', 'Hirenkumar', 'Ranchhodbhai', 'Vasava', 'hirenvasava1407@gmail.com', '1999-07-14 00:00:00', 'Kathalal,kathalal chokdi ,Ahemedabad road,Labh banglo, home no b-17', 'Gujarat', 'Kheda', '6356625613', 'idProof_650f030f-d9c1-4e29-a474-1bbc5c98628d.jpg', 'photo_4e8ad7e6-c49f-4ea7-a6ab-89d1e35c9d39.jpg', 'B+', 'Business / વ્યવસાય', 'inactive', '2024-09-07 10:04:17', '2024-09-07 10:04:17', ''),
(208, '2357', '', 'Hardipsinh', 'Shaktisinh', 'Jadeja', 'jadejahardipsinh76@gmail.com', '1996-04-24 00:00:00', 'Kadiya plot housing board colony room no 09 \"ashapura krupa\" ', 'Gujarat', 'Porbandar', '7016576157', 'idProof_9f6beabb-7817-4af9-8793-dd4ddc0ee3a3.jpg', 'photo_04a03c45-2cf1-4cfe-9a41-55c76649ee18.jpg', 'O+', 'JOB / નોકરી', 'inactive', '2024-09-07 10:46:59', '2024-09-07 10:46:59', ''),
(209, '1174', '', 'Vishvjeetsinh ', 'Bharatsinh ', 'Chauhan ', 'vishichauhan090@gmail.com', '2007-07-03 00:00:00', 'Viraniya lunavada ', 'Gujarat', 'Mahisagar', '9638079043', 'idProof_5fddf38b-bfbe-4b7d-b254-dc99c7e3c082.jpg', 'photo_5dc5e373-dfdb-47ef-ae8e-007b1c1d477a.jpg', 'B+', 'Study / અભ્યાસ', 'inactive', '2024-09-07 12:54:21', '2024-09-07 12:54:21', ''),
(210, '2218', '', 'Jayesh', 'Jetha bhai', 'Parmar', 'Parmarjayesh04134@gmail.com', '1997-12-03 00:00:00', 'Bhanvad', 'Gujarat', 'Devbhoomi Dwarka', '9512672089', 'idProof_64febdc9-a469-497f-b4d5-da522471149c.jpg', 'photo_b3cd6f0b-9529-4eed-9d52-bf5d238a7fd4.jpg', 'None/ખ્યાલ નથી', 'JOB / નોકરી', 'inactive', '2024-09-07 15:19:43', '2024-09-07 15:19:43', ''),
(213, '7684', '', 'Sunil Rathod', 'ssdsds', 'sddsd', 'sdsd@gmail.com', '2024-09-27 00:00:00', '20,Bhumipark So. Anil Starch Road Saraspur', 'Gujarat', 'Narmada', '1234567890', 'idProof_e322517d-7d66-4f62-9bf9-e0476993f798.jpg', 'photo_f3eb777c-b32e-4840-8c80-eefd433df84c.jpg', 'B+', 'Business / વ્યવસાય', 'inactive', '2024-09-07 17:40:23', '2024-09-07 17:40:23', ''),
(214, '9824', '', 'Sunil Rathod', 'cssd', 'sddf', 'dddfds@gmail.com', '2024-09-13 00:00:00', '20,Bhumipark So. Anil Starch Road Saraspur', 'Gujarat', 'Surat District', '1234527890', 'idProof_872d31e8-0041-4599-8c86-141b23c5a677.jpg', 'photo_4f07a1f5-bb83-460a-89df-114f5693f5ac.jpg', 'AB+', 'Business / વ્યવસાય', 'inactive', '2024-09-11 17:30:51', '2024-09-11 17:30:51', ''),
(215, '7851', '', 'Sunil', 'Hareshbhai', 'Rathod', 'admin@gmail.com', '2024-09-15 00:00:00', '20,Bhumipark So. Anil Starch Road Saraspur', 'Gujarat', 'Valsad', '85023622351', 'idProof_fb56118f-5365-4975-9ee1-ceddabfb6d1a.jpg', 'photo_f85dc505-4477-4146-9ae2-499351ae2844.jpg', 'A+', 'JOB / નોકરી', 'inactive', '2024-09-15 15:18:26', '2024-09-15 15:18:26', 'Valsad'),
(216, '4874', '', 'dsadsad', 'ssdad', 'sds', 'dsfdfs@gmail.com', '2024-09-27 00:00:00', '20,Bhumipark So. Anil Starch Road Saraspur', 'Gujarat', 'Chhota Udaipur', '1234567878', 'idProof_1bbe99eb-c656-479c-9247-123184eded8b.jpg', 'photo_54983f73-4800-4c20-be3c-61af9a80aef3.jpg', 'AB+', 'Business / વ્યવસાય', 'inactive', '2024-09-15 15:24:26', '2024-09-15 15:24:26', 'Chhota Udaipur'),
(217, 'REG/10001', 'RAR/10006', 'Sunil Rathod', 'SSDS', 'ASDASD', 'ASSDSDSADD@gmail.com', '2024-09-28 00:00:00', '20,Bhumipark So. Anil Starch Road Saraspur', 'Gujarat', 'Chhota Udaipur', '2345678984572', 'idProof_0851fb39-17f9-41d3-94ba-ce8eb76458b7.jpg', 'photo_e83e2305-afb4-4260-8591-c2d1cb648eb5.jpg', 'A+', 'Business / વ્યવસાય', 'active', '2024-09-15 15:32:04', '2024-09-15 15:35:42', 'Jetpur Pavi'),
(218, '12345', 'ACT123', 'John Doe', 'Michael', 'Smith', 'john@example.com', '1970-01-01 00:00:32', '123 Street', '1', '101', '9876543210', 'ID123', 'photo123.jpg', 'O+', 'Manager', 'active', '2024-09-17 19:55:34', '2024-09-17 19:55:34', '1001'),
(219, '12346', 'ACT124', 'Jane Doe', 'Robert', 'White', 'jane@example.com', '1970-01-01 00:00:31', '456 Avenue', '2', '102', '9876543211', 'ID124', 'photo124.jpg', 'A-', 'Developer', 'inactive', '2024-09-17 19:55:34', '2024-09-17 19:55:34', '1002'),
(220, '12347', NULL, 'Bob Brown', 'David', 'Brown', 'bob@example.com', '1970-01-01 00:00:33', '789 Road', '3', '103', '9876543212', 'ID125', 'photo125.jpg', 'B+', 'Analyst', 'active', '2024-09-17 19:55:34', '2024-09-17 19:55:34', '1003'),
(221, '12348', 'ACT126', 'Alice Lee', 'Chris', 'Lee', 'alice@example.com', '1970-01-01 00:00:32', '234 Park', '4', '104', '9876543213', 'ID126', 'photo126.jpg', 'AB+', 'Consultant', 'rejected', '2024-09-17 19:55:34', '2024-09-17 19:55:34', '1004');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `loginId` (`loginId`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `bloodgroup`
--
ALTER TABLE `bloodgroup`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `cause`
--
ALTER TABLE `cause`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD UNIQUE KEY `link` (`link`),
  ADD UNIQUE KEY `image` (`image`),
  ADD UNIQUE KEY `description` (`description`);

--
-- Indexes for table `designation`
--
ALTER TABLE `designation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `value` (`value`);

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `help`
--
ALTER TABLE `help`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inquiries`
--
ALTER TABLE `inquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otp`
--
ALTER TABLE `otp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adminId` (`adminId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `subdistrict`
--
ALTER TABLE `subdistrict`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `registrationId` (`registrationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bloodgroup`
--
ALTER TABLE `bloodgroup`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `cause`
--
ALTER TABLE `cause`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `designation`
--
ALTER TABLE `designation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `district`
--
ALTER TABLE `district`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `help`
--
ALTER TABLE `help`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `inquiries`
--
ALTER TABLE `inquiries`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `otp`
--
ALTER TABLE `otp`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `slides`
--
ALTER TABLE `slides`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `subdistrict`
--
ALTER TABLE `subdistrict`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=266;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `otp`
--
ALTER TABLE `otp`
  ADD CONSTRAINT `Otp_ibfk_1` FOREIGN KEY (`adminId`) REFERENCES `admin` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
