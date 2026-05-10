# Atividades POO - TypeScript

## Instalar dependências

Na raiz do projeto:

```bash
npm install
```

Esse comando instalará automaticamente:

* TypeScript
* ts-node
* @types/node
* readline-sync
* @types/readline-sync

---

## Rodar exercícios

Exemplo:

```bash
npx ts-node bim02/atv02/ex01.ts
```

Outro exemplo:

```bash
npx ts-node bim01/atv01/index.ts
```

---

## Rodar menu principal

```bash
npx ts-node main.ts
```

Ou:

```bash
npm start
```

---

## Observações

* Todas as dependências ficam centralizadas na raiz do projeto.
* Não criar `package.json` dentro das atividades.
* Não criar `node_modules` dentro das atividades.
* O arquivo `package-lock.json` guarda as versões exatas das dependências.

---

## Estrutura do projeto

```txt
atividadesPOO/
│
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json
├── main.ts
├── README.md
├── .gitignore
│
├── bim01/
├── bim02/
└── bim03/
```

---

## .gitignore recomendado

```gitignore
node_modules
```

---

## Solução de erros comuns

### Duplicate identifier

Adicionar no final do arquivo:

```ts
export {}
```

---

### Cannot find name 'process'

Verifique se existe no `tsconfig.json`:

```json
"types": ["node"]
```

---

### Cannot find module 'readline-sync'

Instale:

```bash
npm install readline-sync
npm install -D @types/readline-sync
```
