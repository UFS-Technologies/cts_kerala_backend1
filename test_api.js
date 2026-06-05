const http = require('http');

const data = JSON.stringify({
  Email: 'satheeshmt@gmail.com',
  Password: '123'
});

const options = {
  hostname: 'localhost',
  port: 3506,
  path: '/Login/Student_Login_Check',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    const json = JSON.parse(body);
    const token = json.token;
    
    if (!token) { console.log('Login failed', json); return; }

    const options2 = {
      hostname: 'localhost',
      port: 3506,
      path: '/Student/Get_Activity_Details/1',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    };
    const req2 = http.request(options2, (res2) => {
      let body2 = '';
      res2.on('data', (chunk) => body2 += chunk);
      res2.on('end', () => {
        console.log('Get_Activity_Details(1):', body2.substring(0, 500));
        
        const options3 = {
          hostname: 'localhost',
          port: 3506,
          path: '/Student/Get_Student_Course_Apply/1',
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token
          }
        };
        const req3 = http.request(options3, (res3) => {
          let body3 = '';
          res3.on('data', (chunk) => body3 += chunk);
          res3.on('end', () => {
             console.log('Get_Student_Course_Apply(1):', body3.substring(0, 500));
          });
        });
        req3.end();
      });
    });
    req2.end();
  });
});
req.write(data);
req.end();
