const api = require ('../services/api');

async function ListarProdutos() {
  console.log('dentro do ListarProdutos');
  // const listaProdutos = await api.get(`/produtos`);
  const listaProdutos =
  [
    {
    id: 1,
    nome: "Bola",
    categoria: "esportes",
    descricao: "bola verde",
    preco: "7.50",
    qtd: 0,
    imgURL: "string"
    },
    {
    id: 2,
    nome: "Faca de aço Inoxidina SuperChef",
    categoria: "Cozinha",
    descricao: "Faca de aço inox da marca Inoxidina",
    preco: "89.53",
    qtd: 10,
    imgURL: "https://www.shutterstock.com/image-photo/sharp-not-touch-chefs-kitchen-knife-1281029980"
    },
    {
    id: 3,
    nome: "Gabinete Villagio 3 portas",
    categoria: "Móveis",
    descricao: "Gabinete de cozinha em mdf LarMobilia",
    preco: "1489.53",
    qtd: 18,
    imgURL: "https://www.shutterstock.com/image-photo/dishware-storage-cabinet-open-doors-white-1357562894"
    }
    ]
    ;
  console.log(listaProdutos);
  // return await api.get(`/produtos`);
  return listaProdutos;
}

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'Supermercado Vila Yara - Home' });
      },
      login: (req, res) => {
        res.render('login', { title: 'Supermercado Vila Yara - Login' });
      },
      ajuda: (req, res) => {
        res.render('ajuda', { title: 'Supermercado Vila Yara - Ajuda' });
      },
      carrinho: (req, res) => {
        res.render('carrinho', { title: 'Supermercado Vila Yara - Carrinho' });
      },
      showCadastroUsuario: (req, res) => {
        res.render('cadastroUsuario', { title: 'Supermercado Vila Yara - Cadastro Usuario' });
      },
      criaCadastroUsuario: async (req, res) => {

        //res.send(req.body);
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = bcrypt.hashSync(req.body.senha, 10);
        let telefone = req.body.celular;
        let nick_name = 'teste';

        try {
          console.log('dentro do try')
          let novoUsuario = await Usuario.create({nome, email, senha, telefone, nick_name});
          // return res.status(201).json(novoUsuario);
          console.log('novoUsuario', novoUsuario)
          console.log('vai renderizar a página')
          // let token = jwt.sign(novoUsuario.toJSON(),"deboanalagoa");

          let jwtToken = jwt.sign({
            email: email,
            nome: nome
        }, "deboanalagoa", {
            expiresIn: 300000
        });
          console.log('vai gravar o cookie')
          res.cookie('token', jwtToken, {
            httpOnly: true,
            // secure: true // - for secure, https only cookie
          });
          console.log('gravou o cookie')

          res.render('index');
      } catch (error) {
          // return res.status(409).json({error: 1, msg:"Usuário já cadastrado com este email."});
          console.log('entrou no catch', error)
          res.render('cadastroUsuario', { title: 'Supermercado Vila Yara - Cadastro com erro' });
      }

        // res.render('cadastroUsuario', { title: 'Supermercado Vila Yara - Cadastro Usuario' });
      },
      produtos: async (req, res) => {
        // const {idColecao} = req.params;
        // let produtos =  JSON.stringify(ListarProdutos());
        const produtos =
        [
          {
          id: 1,
          nome: "Bola",
          categoria: "esportes",
          descricao: "bola verde",
          preco: "7.50",
          qtd: 0,
          imgURL: "https://imagepng.org/wp-content/uploads/2017/10/bola-6.png"
          },
          {
          id: 2,
          nome: "Faca de aço Inoxidina SuperChef",
          categoria: "Cozinha",
          descricao: "Faca de aço inox da marca Inoxidina",
          preco: "89.53",
          qtd: 10,
          imgURL: "https://image.shutterstock.com/image-photo/sharp-not-touch-chefs-kitchen-600w-1281029980.jpg"
          },
          {
          id: 3,
          nome: "Gabinete Villagio 3 portas",
          categoria: "Móveis",
          descricao: "Gabinete de cozinha em mdf LarMobilia",
          preco: "1489.53",
          qtd: 18,
          imgURL: "https://image.shutterstock.com/image-photo/dishware-storage-cabinet-open-doors-600w-1357562894.jpg"
          }
          ]
          ;


      console.log('volta do produtos', produtos)
        res.render('produtos', { produtos, title: 'Supermercado Vila Yara - Produtos' });
      }
}