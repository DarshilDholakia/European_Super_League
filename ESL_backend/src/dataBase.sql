--CREATE DATABASE esl;

DROP TABLE player_assignment;
DROP TABLE players;
DROP TABLE users;

CREATE TABLE players (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    player_name character varying(255) NOT NULL,
    player_position character varying(255) NOT NULL,
    player_club character varying(255) NOT NULL,
    price integer NOT NULL,
    goals integer NOT NULL,
    assists integer NOT NULL,
    red_cards integer NOT NULL,
    yellow_cards integer NOT NULL,
    clean_sheets integer NOT NULL,
    points integer NOT NULL
);

CREATE TABLE users (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    team_name character varying(255) NOT NULL,
    total_points integer NOT NULL
);

CREATE TABLE player_assignment (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id integer REFERENCES users(id),
    player_id integer REFERENCES players(id)
);

INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('D De Gea', 'GOALKEEPER','UNITED', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('R Varane', 'DEFENDER', 'UNITED', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('H Maguire', 'DEFENDER', 'UNITED', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('P Pogba', 'MIDFIELDER', 'UNITED', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('B Fernandes', 'MIDFIELDER', 'UNITED', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('C Ronaldo', 'FORWARD', 'UNITED', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('M Rashford', 'FORWARD', 'UNITED', 4, 0, 0, 0, 0, 0, 0);

INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('G Donnarumma', 'GOALKEEPER', 'PSG', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('S Ramos', 'DEFENDER', 'PSG', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('Marquinhos', 'DEFENDER', 'PSG', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('M Verratti', 'MIDFIELDER', 'PSG', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('L Messi', 'MIDFIELDER', 'PSG', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('K Mbappe', 'FORWARD', 'PSG', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('Neymar', 'FORWARD', 'PSG', 5, 0, 0, 0, 0, 0, 0);


INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('Alisson', 'GOALKEEPER', 'LIVERPOOL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('V Van Dijk', 'DEFENDER', 'LIVERPOOL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('T Alexander-Arnold', 'DEFENDER', 'LIVERPOOL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('Fabinho', 'MIDFIELDER', 'LIVERPOOL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('Thiago', 'MIDFIELDER', 'LIVERPOOL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('L Diaz', 'FORWARD', 'LIVERPOOL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('M Salah', 'FORWARD', 'LIVERPOOL', 5, 0, 0, 0, 0, 0, 0);

INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('T Courtois', 'GOALKEEPER', 'REAL_MADRID', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('Marcelo', 'DEFENDER', 'REAL_MADRID', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('D Alaba', 'DEFENDER', 'REAL_MADRID', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('T Kroos', 'MIDFIELDER', 'REAL_MADRID', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('L Modric', 'MIDFIELDER', 'REAL_MADRID', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('V Junior', 'FORWARD', 'REAL_MADRID', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('K Benzema', 'FORWARD', 'REAL_MADRID', 5, 0, 0, 0, 0, 0, 0);


INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('W Szczesny', 'GOALKEEPER', 'JUVENTUS', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('G Chiellini', 'DEFENDER', 'JUVENTUS', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('L Bonucci', 'DEFENDER', 'JUVENTUS', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('P Dybala', 'MIDFIELDER', 'JUVENTUS', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('M Locatelli', 'MIDFIELDER', 'JUVENTUS', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('D Vlahovic', 'FORWARD', 'JUVENTUS', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('A Morata', 'FORWARD', 'JUVENTUS', 5, 0, 0, 0, 0, 0, 0);

INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('Ederson', 'GOALKEEPER', 'CITY', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('R Dias', 'DEFENDER', 'CITY', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('A Laporte', 'DEFENDER', 'CITY', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('K De Bruyne', 'MIDFIELDER', 'CITY', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('B Silva', 'MIDFIELDER', 'CITY', 5, 0 ,0 ,0 , 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('P Foden', 'FORWARD', 'CITY', 5, 0, 0, 0, 0 ,0 , 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('J Grealish', 'FORWARD', 'CITY', 5, 0, 0, 0, 0, 0, 0);


INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('S Handanović', 'GOALKEEPER', 'INTER', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('A Bastoni', 'DEFENDER', 'INTER', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('M Skriniar', 'DEFENDER', 'INTER', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('H Çalhanoglu', 'MIDFIELDER', 'INTER', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('I Perišić', 'MIDFIELDER', 'INTER', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('E Džeko', 'FORWARD', 'INTER', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('L Martínez', 'FORWARD', 'INTER', 5, 0, 0, 0, 0, 0, 0);

INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('L Fabianski','GOALKEEPER','WEST_HAM', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('A Cresswell', 'DEFENDER', 'WEST_HAM', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('K Zouma', 'DEFENDER', 'WEST_HAM', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('D Rice', 'MIDFIELDER', 'WEST_HAM', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('S Benrahma', 'MIDFIELDER', 'WEST_HAM', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('J Bowen', 'FORWARD', 'WEST_HAM', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES('M Antonio', 'FORWARD', 'WEST_HAM', 5, 0, 0, 0, 0, 0, 0);


INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('M Maignan', 'GOALKEEPER', 'MILAN', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('F Tomori', 'DEFENDER', 'MILAN', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('T Hernandez', 'DEFENDER', 'MILAN', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('F Kessie', 'MIDFIELDER', 'MILAN', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('B Diaz', 'MIDFIELDER', 'MILAN', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('O Giroud', 'FORWARD', 'MILAN', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('Z Ibrahimovic', 'FORWARD', 'MILAN', 5, 0, 0, 0, 0, 0, 0);

INSERT INTO players(player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('A Ramsdale', 'GOALKEEPER', 'ARSENAL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players(player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('B White', 'DEFENDER', 'ARSENAL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players(player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('K Tierney', 'DEFENDER', 'ARSENAL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players(player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('T Partey', 'MIDFIELDER', 'ARSENAL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players(player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('M Odegaard', 'MIDFIELDER', 'ARSENAL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players(player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('B Saka', 'FORWARD', 'ARSENAL', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players(player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('G Martinelli', 'FORWARD', 'ARSENAL', 5, 0, 0, 0, 0, 0, 0);


INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('M A Ter Stegan', 'GOALKEEPER','BARCELONA', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('G Pique', 'DEFENDER','BARCELONA', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('J Alba', 'DEFENDER','BARCELONA', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('F De Jong', 'MIDFIELDER','BARCELONA', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('S Busquets', 'MIDFIELDER','BARCELONA', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('F Torres', 'FORWARD','BARCELONA', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('O Dembele', 'FORWARD','BARCELONA', 5, 0, 0, 0, 0, 0, 0);

INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('J Oblak', 'GOALKEEPER','ATLETICO', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('J Gimenez', 'DEFENDER','ATLETICO', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('R Lodi', 'DEFENDER','ATLETICO', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('Koke', 'MIDFIELDER','ATLETICO', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('R De Paul', 'MIDFIELDER','ATLETICO', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('J Felix', 'FORWARD','ATLETICO', 5, 0, 0, 0, 0, 0, 0);
INSERT INTO players (player_name,player_position,player_club,price,goals,assists,red_cards,yellow_cards,clean_sheets,points)
VALUES ('A Griezmann', 'FORWARD','ATLETICO', 5, 0, 0, 0, 0, 0, 0);


INSERT INTO users (email, password, team_name, total_points) VALUES ('darshil@mail.co.uk', 'password', 'ABCDE FC', 0);
INSERT INTO users (email, password, team_name, total_points) VALUES ('adib@mail.co.uk', 'password', 'Obi-Wan Iwobi', 0);
INSERT INTO users (email, password, team_name, total_points) VALUES ('abdi@mail.co.uk', 'password', 'Somali Allstars', 0);
INSERT INTO users (email, password, team_name, total_points) VALUES ('suj@mail.co.uk', 'password', 'Giroud Awakening', 0);
INSERT INTO users (email, password, team_name, total_points) VALUES ('a_a_ron@mail.co.uk', 'password', 'Dunk and Disorderly', 0);
INSERT INTO users (email, password, team_name, total_points) VALUES ('michael@mail.co.uk', 'password', 'The Wizard of Özil', 0);