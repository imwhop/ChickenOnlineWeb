const sql = require("mssql");
require("dotenv").config();

const config = {
  user: "sa",
  password: "",
  server: "localhost", // Thử localhost thay vì NHATANH
  port: 1433,
  database: "ChickenWeb",
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true
  }
};

async function testConnection() {
  try {
    console.log('Testing connection to:', config.server + ':' + config.port);
    console.log('Database:', config.database);
    
    const pool = await sql.connect(config);
    console.log('✅ Connection successful!');
    
    const result = await pool.request().query('SELECT @@SERVERNAME as server_name, DB_NAME() as database_name');
    console.log('Connected to:', result.recordset[0]);
    
    await pool.close();
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

testConnection();