// Throttling in JavaScript

const btn = document.getElementById('button');

const log = () => {
  btn.disabled = false;
  console.log('click on button');
};

const throttling = (fun, time) => {
  return () => {
    btn.disabled = true;
    setTimeout(() => {
      fun();
    }, time);
  };
};

btn.addEventListener('click', throttling(log, 1000));
