const search = document.getElementById('search-input');

const getData = () => {
  console.log('Get Data');
};

const debounce = (fun, time) => {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun();
    }, time);
  };
};

search.addEventListener('input', debounce(getData, 1000));
