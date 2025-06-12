CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false
);

INSERT INTO todos (task, completed) VALUES
('Learn Docker', true),
('Containerize a Node.js App', false),
('Use Docker Compose', false);