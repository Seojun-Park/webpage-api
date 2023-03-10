import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';

export const catsProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('Cat', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
