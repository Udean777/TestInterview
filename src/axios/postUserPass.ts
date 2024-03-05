import api from './interceptor';

// pass username & password into the params, so the value of resData, will be the same value that passed in textinput
async function postUserPass(username: string, password: string) {
  // first, we set the response data
  const resData = {
    username,
    password,
  };

  {
    /* im using try catch block to catch if there's an error,
 and i prefer using try catch because it is more readable  */
  }
  try {
    // make an api post call, and don't forget to add the response body
    const res = await api.post('login', resData);

    // if it's success then console the data
    console.log(res.data);
  } catch (error) {
    // if there's an error, console it too
    console.error(error);
  }
}

export default postUserPass;
