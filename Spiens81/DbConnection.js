class Database {
  constructor(dbName = "", DbServerName = "", Type = "") {
    this.dbName = "";
    this.DbServerName = "";
    this.Type = "";
  }
  Connect() {
    console.log(
      `${this.dbName} database with server ${this.DbServerName} is connected successfully...`
    );
  }
}
class DbOperations extends Database {
  constructor(dbName = "", DbServerName = "", Type = "") {
    super(dbName, DbServerName, Type);
  }
    createTable(tableName = '', ...columns) {
        console.log(`${tableName} \n-------------------------`);
        for (const item of columns) {
          console.log(`${Object.keys(item)[0].toString()} | ${Object.values(item)[0].toString()}`);
        }
    }
    executeSP(spName, ...params) {
        var paramString = '';
        for (const value of params) {
             paramString = paramString + value + " , ";
        }
        console.log();
        console.log(`exec ${spName}, ${paramString} `);
    }
}

let createOpr = new DbOperations('MYSQLR-2019', 'INTL4016', 'SQL');
createOpr.createTable('EmpTable', { Id: 'int' }, { Design: 'string' });
createOpr.executeSP("SpName", "spParam1", "spParam2");