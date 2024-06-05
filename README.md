## Run Locally

### Cloning the repository
```shell
git clone https://github.com/Yanuarprayoga9/todos-techincal-test.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```shell
# copy .env.example
cp env.example .env
```
or
```js
# manual setup env
touch .env
DATABASE_URL="postgresql://todos_owner:4Lts5KuqrIPx@ep-spring-water-a15hbzw4.ap-southeast-1.aws.neon.tech/todos?sslmode=require"
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Connect to Postgre and Push Prisma
```shell
npx prisma generate
npx prisma db push
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