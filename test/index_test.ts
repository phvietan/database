import chai from 'chai';
import {Database} from '../src/index';

const assert: any = chai.assert;

describe('Test Database', () => {
  it('should set key to database', async () => {
    const db = new Database();
    db.set('k', 'v');
  });

  it('should retrieve value from database', async () => {
    const db = new Database();
    db.set('k', 'v');
    assert(db.get('k') === 'v');
  });

  it('should set and get from database with namespace', async () => {
    const db = new Database('namespace');
    db.set('k', 'v');
    assert(db.get('k') === 'v');
  });

  it('should successfully clear db', async () => {
    const db = new Database('namespace');
    db.set('k', 'v');
    assert(db.get('k') === 'v');
    db.clear();
    assert(db.get('k') === undefined);
  });
});
