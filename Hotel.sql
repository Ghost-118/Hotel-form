CREATE TABLE hotel_feedback (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT,
    first_time VARCHAR(10),
    choices TEXT[],
    service VARCHAR(20),
    food VARCHAR(20),
    comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 


SELECT * FROM  hotel_feedback;