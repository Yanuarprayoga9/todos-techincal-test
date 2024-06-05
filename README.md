# TODOLIST APP
## DEPLOYMENT
vercel
link : https://mytodos-gold.vercel.app/


## Run Locally

### Cloning the repository
```shell
git clone https://github.com/Yanuarprayoga9/todos-technical-test.git
```

### open file
```shell
cd  todos-technical-test
```

### Install packages
```shell
npm i
```

### Setup .env file
```shell
# copy .env.example
cp .env.example .env
```
or
```js
# manual setup env
touch .env
DATABASE_URL="postgresql://todos_owner:4Lts5KuqrIPx@ep-spring-water-a15hbzw4.ap-southeast-1.aws.neon.tech/todos?sslmode=require"
```

### Connect to Postgre and generate Prisma
```shell
npx prisma generate
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `lint`          | Starts a lint                            |
