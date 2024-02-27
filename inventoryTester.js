const http = require('http'); 


const updateInventory = (item, quantity) => {
  const data = JSON.stringify({
    item,
    quantity
  });

  const options = {
    hostname: 'localhost',
    port: 4588, // Make sure this matches the port your microservice is listening on
    path: '/updateInventory',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = http.request(options, res => {
    console.log(`StatusCode: ${res.statusCode}`);

    res.on('data', d => {
      process.stdout.write(d);
    });
  });

  req.on('error', error => {
    console.error(error);
  });

  req.write(data);
  req.end();
};

const runTest = () => {
  console.log('Updating inventory for itemA to 10...');
  updateInventory('itemA', 10);

  // Wait for 2 seconds before the next update
  setTimeout(() => {
    console.log('Updating inventory for itemA to 4...');
    updateInventory('itemA', 4);
  }, 2000);
};

runTest();