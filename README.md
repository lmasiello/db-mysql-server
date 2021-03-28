# DB MYSQL SERVER

<!-- ## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md) -->

## About <a name = "about"></a>

A boilerplate for a MySql Server running with migrations.

<!-- ## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system. -->

### Scripts

Create New Migration
```
npm run db:migration:create --name [name]
```

Run Migration to Last Header
```
npm run db:migration:all
```

Undo Last Migration 
```
npm run db:migration:undo
```

Undo Migration To
```
sequelize-cli db:migrate:undo:all --to [migration-name].js
```


