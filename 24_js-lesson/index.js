// input: obj
// output: undefined
const saveUser = (userData) => {
  console.log(JSON.stringify(userData));
  // input: string, object
  // output: promise;
  const httpPromise = fetch(
    'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }
  );

  httpPromise
    .then((response) => response.json())
    .then((res) => {
      console.log(res);

      alert(JSON.stringify(res));
    });
};

// test data
const user = {
  email: 'sdfghjkl2com',
  userName: 'user1234567',
  password: 'sasas',
};

saveUser(user);
