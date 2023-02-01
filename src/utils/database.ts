const bcrypt = require('bcrypt');

export class Database {
    _users: Database.Data[] = [];
    constructor() {
        this._users = [];

        (async () => {
            this._users.push({
                id: 'Alinco8',
                password: await bcrypt.hash('ali0927', 10),
                email: 'ali0207k@gmail.com',
            });
        })();
    }
    async addUser(
        id: Database.Data['id'],
        password: Database.Data['password'],
        email: Database.Data['email']
    ) {
        this._users.push({
            id,
            password: await bcrypt.hash(password, 10),
            email: email || null,
        });
    }
    async findUser(id: Database.Data['id']): Promise<Database.Data | null> {
        console.log(
            'Find',
            id,
            this._users,
            this._users.find(({ id: _id }) => _id === id)
        );
        return this._users.find(({ id: _id }) => _id === id) || null;
    }
    async checkPassword(id: string, password: string) {
        console.log(
            'CHECK PASS',
            password,
            await bcrypt.hash(password, 10),
            this._users
        );
        return (
            (await bcrypt.hash(password, 10)) ===
            (await this.findUser(id)).password
        );
    }
}
