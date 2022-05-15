import chai from 'chai';
import { Database } from '../src/index';

const assert: any = chai.assert;

describe('Test Database', () => {
  it('should successfully set key to database', async () => {
    const db = new Database();
    db.set('k', 'v');
  });

  it('should successfully retrieve value from database', async () => {
    const db = new Database();
    db.set('k', 'v');
    assert(db.get('k') === 'v');
  });

  it('should successfully set and retrieve key-value from database with namespace', async () => {
    const db = new Database('namespace');
    db.set('k', 'v');
    assert(db.get('k') === 'v');
  });
});