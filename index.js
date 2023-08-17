const { Pool } = require('pg');
const Cursor = require('pg-cursor');
const assert = require('assert');

const pool = new Pool({
    user: 'zasory',
    host: 'localhost',
    database: 'practica_db',
    password: 'Hakxf2n5$',
    port: 5432,
});

const buscarMayores = async() => {

    try{

        const client = await pool.connect();
        const cursor = client.query(new Cursor("SELECT * FROM estudiantes WHERE edad > '25'"));

        let rows = await cursor.read(2);
        //console.log(row);
        while(rows.length){
            console.table(rows);
            console.log(rows.length);
            console.assert(rows.length == 2);
            rows = await cursor.read(2);
        }

    }catch(error){
        switch(error.code){
            case '42601':
                console.log("\n ERROR! \n Error de Sintaxis\n");
                break;
            case '25P01':
                console.log("\n ERROR! \n Password inválido\n");
                break;
            case '08003':
                console.log("\n ERROR! \n Conexion intexistente\n");
                break;
            case '08006':
                console.log("\n ERROR! \n Conexion falló\n");
                break;
            case '2F002':
                console.log("\n ERROR! \n Sin permisos para modificar\n");
                break;
            case '57P03':
                console.log("\n ERROR! \n Error en la conexion\n");
                break;
            case '42501':
                console.log("\n ERROR! \n Privilegios insuficientes\n");
                break;
            case '42602':
                console.log("\n ERROR! \n Nombre inválido\n");
                break;
            case '42622':
                console.log("\n ERROR! \n Nombre demasiado largo\n");
                break;
            case '42939':
                console.log("\n ERROR! \n Nombre reservado\n");
                break;
            case '42703':
                console.log("\n ERROR! \n Columna indefinida\n");
                break;
            case '42000':
                console.log("\n ERROR! \n Syntaxis error o violacion de acceso\n");
                break;
            case '42P01':
                console.log("\n ERROR! \n Tabla no definida\n");
                break;
            case '42P02':
                console.log("\n ERROR! \n Parametro no definida\n");
                break;
            default:
                console.error(error.stack);
                console.log(error.code);
        }
    }
    finally{
        console.log('Terminado');
    }
}

//buscarMayores();

const buscarEstudiantesDesc = async() => {

    try{

        const client = await pool.connect();
        const cursor = client.query(new Cursor("SELECT * FROM estudiantes ORDER BY apellidos DESC"));

        let rows = await cursor.read(2);
        //console.log(row);
        while(rows.length){
            console.table(rows);
            console.log(rows.length);
            console.assert(rows.length == 2);
            rows = await cursor.read(2);
        }

    }catch(error){
        switch(error.code){
            case '42601':
                console.log("\n ERROR! \n Error de Sintaxis\n");
                break;
            case '25P01':
                console.log("\n ERROR! \n Password inválido\n");
                break;
            case '08003':
                console.log("\n ERROR! \n Conexion intexistente\n");
                break;
            case '08006':
                console.log("\n ERROR! \n Conexion falló\n");
                break;
            case '2F002':
                console.log("\n ERROR! \n Sin permisos para modificar\n");
                break;
            case '57P03':
                console.log("\n ERROR! \n Error en la conexion\n");
                break;
            case '42501':
                console.log("\n ERROR! \n Privilegios insuficientes\n");
                break;
            case '42602':
                console.log("\n ERROR! \n Nombre inválido\n");
                break;
            case '42622':
                console.log("\n ERROR! \n Nombre demasiado largo\n");
                break;
            case '42939':
                console.log("\n ERROR! \n Nombre reservado\n");
                break;
            case '42703':
                console.log("\n ERROR! \n Columna indefinida\n");
                break;
            case '42000':
                console.log("\n ERROR! \n Syntaxis error o violacion de acceso\n");
                break;
            case '42P01':
                console.log("\n ERROR! \n Tabla no definida\n");
                break;
            case '42P02':
                console.log("\n ERROR! \n Parametro no definida\n");
                break;
            default:
                console.error(error.stack);
                console.log(error.code);
        }
    }
    finally{
        console.log('Terminado');
    }
}

//buscarEstudiantesDesc();

const buscarCursosDisponibles = async() => {

    try{

        const client = await pool.connect();
        const cursor = client.query(new Cursor("SELECT * FROM cursos"));

        let rows = await cursor.read(2);
        //console.log(row);
        while(rows.length){
            console.table(rows);
            console.log(rows.length);
            console.assert(rows.length == 2);
            rows = await cursor.read(2);
        }

    }catch(error){
        switch(error.code){
            case '42601':
                console.log("\n ERROR! \n Error de Sintaxis\n");
                break;
            case '25P01':
                console.log("\n ERROR! \n Password inválido\n");
                break;
            case '08003':
                console.log("\n ERROR! \n Conexion intexistente\n");
                break;
            case '08006':
                console.log("\n ERROR! \n Conexion falló\n");
                break;
            case '2F002':
                console.log("\n ERROR! \n Sin permisos para modificar\n");
                break;
            case '57P03':
                console.log("\n ERROR! \n Error en la conexion\n");
                break;
            case '42501':
                console.log("\n ERROR! \n Privilegios insuficientes\n");
                break;
            case '42602':
                console.log("\n ERROR! \n Nombre inválido\n");
                break;
            case '42622':
                console.log("\n ERROR! \n Nombre demasiado largo\n");
                break;
            case '42939':
                console.log("\n ERROR! \n Nombre reservado\n");
                break;
            case '42703':
                console.log("\n ERROR! \n Columna indefinida\n");
                break;
            case '42000':
                console.log("\n ERROR! \n Syntaxis error o violacion de acceso\n");
                break;
            case '42P01':
                console.log("\n ERROR! \n Tabla no definida\n");
                break;
            case '42P02':
                console.log("\n ERROR! \n Parametro no definida\n");
                break;
            default:
                console.error(error.stack);
                console.log(error.code);
        }
    }
    finally{
        console.log('Terminado');
    }
}

buscarCursosDisponibles();

