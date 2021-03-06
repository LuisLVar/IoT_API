CREATE DATABASE ARQUI2;
USE ARQUI2;

CREATE TABLE PESO(
PESOKG FLOAT,
FECHA DATETIME,
LONGITUD FLOAT, 
LATITUD FLOAT
);

SELECT PESOKG, date_format(FECHA, '%d-%m-%Y'), LONGITUD, LATITUD FROM PESO;

select * from PESO;
SELECT * FROM PESO where date_format(FECHA, '%d-%m-%Y') = '09-03-2020';
insert into PESO VALUES(10.5, '2020-3-9 21:25:23', 10, 15);

CREATE TABLE INCLINACION(
INCLINACION FLOAT,
FECHA DATETIME,
LONGITUD FLOAT, 
LATITUD FLOAT
);

INSERT INTO INCLINACION VALUES(10, sysdate(), 100, 150);
SELECT * FROM INCLINACION;

CREATE TABLE AGUA(
AGUA INT1,
FECHA DATETIME,
LONGITUD FLOAT, 
LATITUD FLOAT
);

CREATE TABLE LUZ(
LUZ FLOAT,
FECHA DATETIME,
LONGITUD FLOAT, 
LATITUD FLOAT
);

CREATE TABLE SONIDO(
SONIDO FLOAT,
FECHA DATETIME,
LONGITUD FLOAT, 
LATITUD FLOAT
);

CREATE TABLE ALARMA(
ESTADO int1, -- abierto = 1; cerrado = 0;
FECHA DATETIME,
LONGITUD FLOAT, 
LATITUD FLOAT
);

CREATE TABLE ANTIRROBOS(
ESTADO int1,
FECHA DATETIME,
LONGITUD FLOAT, 
LATITUD FLOAT
);

CREATE TABLE CONTADOR_PASOS(
PASOS int,
FECHA DATETIME,
LONGITUD FLOAT, 
LATITUD FLOAT
);

CREATE TABLE RITMO_CARDIACO(
RITMO int,
FECHA DATETIME,
LONGITUD FLOAT, 
LATITUD FLOAT
);

SHOW TABLES;

