import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { Database } from './database';

const database = new Database();

export function setPassport(
    app: import('express').Application,
    passport: typeof import('passport')
) {
    console.log('CHANGED');
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'id',
                passwordField: 'password',
            },
            async (
                id: Database.Data['id'],
                password: Database.Data['password'],
                done
            ) => {
                console.log('CHECK', id, password, await database.findUser(id));
                if (!(await database.findUser(id))) {
                    done(null, false);
                } else if (await database.checkPassword(id, password)) {
                    done(null, false);
                } else {
                    done(null, { id, password });
                }
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
}
