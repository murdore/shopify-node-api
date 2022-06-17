import { Session } from './session';
import { SessionStorage } from './session_storage';
import { MemorySessionStorage } from './storage/memory';
import { CustomSessionStorage } from './storage/custom';
import { MySQLSessionStorage } from './storage/mysql';
import { MongoDBSessionStorage } from './storage/mongodb';
import { RedisSessionStorage } from './storage/redis';
import { SQLiteSessionStorage } from './storage/sqlite';
declare const ShopifySession: {
    Session: typeof Session;
    MemorySessionStorage: typeof MemorySessionStorage;
    CustomSessionStorage: typeof CustomSessionStorage;
    MySQLSessionStorage: typeof MySQLSessionStorage;
    MongoDBSessionStorage: typeof MongoDBSessionStorage;
    RedisSessionStorage: typeof RedisSessionStorage;
    SQLiteSessionStorage: typeof SQLiteSessionStorage;
};
export default ShopifySession;
export { Session, SessionStorage, MemorySessionStorage, CustomSessionStorage, MySQLSessionStorage, MongoDBSessionStorage, RedisSessionStorage, SQLiteSessionStorage, };
//# sourceMappingURL=index.d.ts.map