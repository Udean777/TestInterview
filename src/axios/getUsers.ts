import api from './interceptor';

async function getUsers() {
  try {
    // basically create a get request method
    const res = await api.get('users');

    // then return the data so we can show it as an UI
    return res.data.data;
    {/* if the data doesn't have an nested array object, and just an object,
        you don't need the second data */}

  } catch (error) {
    // as usual, console the error
    console.error(error);
  }
}

export default getUsers;
