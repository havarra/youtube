import pgPromise from 'pg-promise';

const pgp = pgPromise({});

const db = pgp({
	user: 'postgres',
	password: '',
	host: 'localhost',
	port: 5432,
	database: 'blog'
});

export default db;
