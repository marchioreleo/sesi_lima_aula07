const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_retrogames"
})

db.connect((erro) => {
    if(erro) {
        console.error("Erro ao conectar ao banco de dados:", erro)
    } else {
        console.log("Conectado ao banco de dados")
    }
})

const mostrarJogos = (req, res) => {
    const sql = "SELECT id, jogo, developer, genero, imagem_url, preco FROM jogos"
 
    db.query(sql, (erro, resultados) => {
        if(erro) {
            return res.status(500).send("Erro ao buscar jogos no banco de dados")
        }
        res.send(resultados)
       
    })}

    const novoJogo = (req, res) => {
        const { jogo, developer, genero, imagem_url, preco } = req.body

            if(jogo && developer && genero && imagem_url && preco) {
                const sql = "INSERT INTO jogos (jogo, developer, genero, imagem_url, preco) VALUES (?, ?, ?, ?, ?)"
                const valores = [jogo, developer, genero, imagem_url, preco]

                db.query(sql, valores, (erro, resultados) => {
                    if(erro) {
                        return res.status(500).send("Erro ao inserir jogo no banco de dados")
                    }
                    res.send("Jogo cadastrado com sucesso")
                })
            } else {
                res.status(400).send("Erro: Todos os campos são obrigatórios")
            }
    }

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
   
    const porta = 3000;

    app.get("/listar", mostrarJogos)
    app.post("/cadastrar", novoJogo)

    app.listen(porta, () => {
        console.log(`Servidor rodando na porta http://localhost${porta}`)
    })
