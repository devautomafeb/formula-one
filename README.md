# 🏎️ Formula One App

Este projeto reúne **duas aplicações integradas**:  
- **`f1-api/`** → backend Node.js + Express  
- **`f1-client/`** → frontend React + Vite  

O sistema permite gerenciar **carros de Fórmula 1**, exibindo e manipulando dados como **piloto, equipe, ano e motor**, com operações CRUD completas (criar, listar, editar e excluir).

---

## 🚀 Estrutura do Projeto

```
formula-one/
├── f1-api/        # API Express (backend)
│   ├── controllers/
│   ├── routes/
│   └── server.js
│
├── f1-client/     # Aplicação React (frontend)
│   ├── src/
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ 1. Backend – `f1-api`

### 📦 Instalação

```bash
cd f1-api
npm install
```

### ▶️ Execução

```bash
npm start
```

O servidor será iniciado em:

```
http://localhost:3000
```

### 🌐 Rotas Disponíveis

| Método | Endpoint        | Descrição                      |
|:-------|:----------------|:--------------------------------|
| GET    | `/api/cars`     | Lista todos os carros           |
| GET    | `/api/cars/:id` | Retorna um carro específico     |
| POST   | `/api/cars`     | Cria um novo carro              |
| PUT    | `/api/cars/:id` | Atualiza um carro inteiro       |
| PATCH  | `/api/cars/:id` | Atualiza parcialmente um carro  |
| DELETE | `/api/cars/:id` | Remove um carro                 |

### 🧩 Exemplo de Corpo (`POST` / `PUT`)

```json
{
  "driver": "Lando Norris",
  "team": "McLaren",
  "year": 2024,
  "engine": "Mercedes"
}
```

---

## 💻 2. Frontend – `f1-client`

### 📦 Instalação

```bash
cd f1-client
npm install
```

### ▶️ Execução (modo dev)

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

> O front consome a API via variável de ambiente `VITE_API_URL`.

### ⚙️ Configuração do `.env.local`

Na pasta `f1-client`, crie o arquivo:

```
VITE_API_URL=http://localhost:3000
```

---

## 🧠 Tecnologias Utilizadas

### Backend
- Node.js  
- Express  
- CORS  
- ES Modules (`"type": "module"`)

### Frontend
- React (Vite)
- Tailwind CSS
- Fetch API nativa

---

## 🧪 Estrutura de Dados (Carro)

| Campo   | Tipo     | Descrição                  |
|:--------|:----------|:---------------------------|
| `id`     | number  | Identificador do carro      |
| `driver` | string  | Nome do piloto              |
| `team`   | string  | Equipe                      |
| `year`   | number  | Ano da temporada            |
| `engine` | string  | Fabricante do motor         |

---

## 🧰 Scripts Úteis

### Backend (`f1-api`)

| Comando | Descrição |
|----------|------------|
| `npm start` | Executa a API |
| `npm run dev` | (se usar nodemon) executa com recarregamento automático |

### Frontend (`f1-client`)

| Comando | Descrição |
|----------|------------|
| `npm run dev` | Roda o front em modo desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Testa o build localmente |

---

## ☁️ Deploy

### 🌍 Frontend (Netlify ou Vercel)

1. Vá até [Netlify](https://app.netlify.com/start) ou [Vercel](https://vercel.com/new).  
2. Conecte seu repositório `formula-one`.  
3. Escolha o diretório de build:  
   ```
   f1-client
   ```
4. Configure as variáveis de ambiente:
   ```
   VITE_API_URL=https://<url-da-sua-api>
   ```

### ⚙️ Backend (Render ou Railway)

1. Vá até [Render](https://render.com) ou [Railway](https://railway.app).  
2. Crie um novo serviço **Web Service** com o diretório `f1-api`.  
3. Configure o comando de inicialização:
   ```
   node server.js
   ```
4. Após o deploy, copie o link gerado (exemplo):
   ```
   https://f1-api.onrender.com
   ```
5. Atualize o `.env.local` do front com o novo link:

   ```
   VITE_API_URL=https://f1-api.onrender.com
   ```

---

## 🧱 Estrutura Recomendada do Repositório

```
formula-one/
│
├── f1-api/         # Backend (Express)
│   ├── server.js
│   ├── routes/
│   └── controllers/
│
├── f1-client/      # Frontend (Vite + React)
│   ├── src/
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json
```

---

## 🧩 Possíveis Erros e Soluções

### ❌ Erro no Netlify: “No URL found for submodule path 'f1-api'”
➡️ Causa: o `f1-api` foi adicionado como submódulo.  
✅ Solução:
```bash
git rm --cached f1-api
rm -rf f1-api/.git
rm -f .gitmodules
git add f1-api
git commit -m "fix: remover submódulo e incluir f1-api normalmente"
git push
```

### ❌ Erro CORS no Frontend
➡️ Causa: API sem permissão de acesso cruzado.  
✅ Solução: verifique se `app.use(cors())` está ativo no `server.js`.

---

## 👨‍💻 Autor

**Bruno Elyezer Fonseca**  
Engenheiro de Controle e Automação  
📦 GitHub: [@devautomafeb](https://github.com/devautomafeb)

---

## 🏁 Licença

Este projeto está sob a licença **MIT**.  
Sinta-se à vontade para usar, modificar e distribuir.
