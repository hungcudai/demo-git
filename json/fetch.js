const fetchData = async () => {
    const response = await fetch('http://localhost:3000/posts/1');
    const data = await response.json();
    console.log(data);
  };
  fetchData();

