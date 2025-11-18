CREATE DATABASE IF NOT EXISTS customer_seg;
USE customer_seg;


CREATE TABLE IF NOT EXISTS users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(150) NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
role ENUM('admin','manager') DEFAULT 'manager',
branch VARCHAR(100) DEFAULT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS customers (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(150) NOT NULL,
mobile VARCHAR(20),
email VARCHAR(150),
branch VARCHAR(100) NOT NULL,
tier ENUM('Prime','Gold','Silver') DEFAULT 'Silver',
notes TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS segmentation_history (
id INT AUTO_INCREMENT PRIMARY KEY,
customer_id INT NOT NULL,
old_tier ENUM('Prime','Gold','Silver'),
new_tier ENUM('Prime','Gold','Silver'),
changed_by INT,
changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
FOREIGN KEY (changed_by) REFERENCES users(id) ON DELETE SET NULL
);


-- Insert an admin user (password: Admin@123) - hashed value placeholder
-- Replace with a bcrypt hashed password in production


INSERT IGNORE INTO users (name,email,password,role) VALUES
('Super Admin','admin@example.com','$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36V/1l1JqXb3eG8DqK3v9eK','admin');