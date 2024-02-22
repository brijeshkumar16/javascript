// Fetch is high priority queue

const fetchGithubDetails = async () => {
  try {
    const res = await fetch('https://api.github.com/users/brijeshkumar16');
    const resResponse = await res.json();
    console.log(resResponse);
  } catch (error) {
    console.log(error);
  }
};

fetchGithubDetails();
