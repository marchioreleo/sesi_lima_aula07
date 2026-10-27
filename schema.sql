drop database if exists db_retrogames;
create database db_retrogames;
use db_retrogames;

create table jogos(
    id int primary key auto_increment,
    titulo varchar(100) not null,
    plataforma varchar(100) not null,
    desenvolvedora varchar(100) not null,
    imagem_url varchar(500) not null,
    preco decimal(10,2) not null
)

insert into jogos (titulo, plataforma, desenvolvedora, imagem_url, preco) values
("Beatles The Game", "Everything", "The Beatles", "https://tse2.mm.bing.net/th/id/OIP.owJ3nPSlGeM-wBY23eS3EAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 0)
("Red Dead Redemption", "Console, PC", "Rockstar Games", "https://viciados.net/wp-content/uploads/2023/09/Red_Dead_Redemption_1_Review_PS4_PlayStation_4_Rockstar_Games_2023.webp", 150)
("Read Dead Redemption 2", "Console, PC", "Rockstar Games", "https://wallpapercave.com/wp/wp2614327.jpg", 250)
