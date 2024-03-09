const form = document.querySelector('form');
// this usecase give value from height as page is reload so it contains 0 rather than any value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // this usecases gives you the values when you submit  the value i.e. values are extracted after the submition of form
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const guide = document.querySelector('#guide');

  if (height === '' || height < 0 || isNaN(height) || height === 0) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight) || weight === 0) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
  }
  const res_guide = document.querySelector('#results');
  if (res_guide < 18.6) {
    guide.innerHTML = 'you are underweight';
  } else if (res_guide >= 18.6 && res_guide <= 24.9) {
    guide.innerHTML = 'your height and weight is in normal range';
  } else {
    guide.innerHTML = 'you are now overweight';
  }
});
