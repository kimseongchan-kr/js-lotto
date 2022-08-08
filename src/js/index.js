import { DrawForm, Toggle } from './components/index.js';

import getLottoList from './lotto/index.js';
import { getLottoAvailableQuantity } from './lotto/validation/index.js';

const lottoList = document.querySelector('.lotto-list');
const listTitleElement = lottoList.querySelector('.lotto-title');
const showListElement = lottoList.querySelector('.lotto-number-show');
const hideListElement = lottoList.querySelector('.lotto-number-hide');

const lottoNumberToggleButton = document.querySelector('.lotto-numbers-toggle-button');

const lottoSheetForm = document.querySelector('.lotto-sheet-form');
const lottoPriceInput = document.querySelector('.lotto-price-input');

const winningNumberForm = document.querySelector('#winning-number-form');

const winningNumberInput = document.querySelectorAll('.winning-number');

const bonusNumberInput = document.querySelector('.bonus-number');

const target = { title: listTitleElement, show: showListElement, hide: hideListElement };

DrawForm({
  target,
  input: lottoPriceInput,
  form: lottoSheetForm,
  validation: getLottoAvailableQuantity,
  logic: getLottoList,
});

Toggle({ target, checkbox: lottoNumberToggleButton });

const winningNumberArray = [...winningNumberInput, bonusNumberInput];

winningNumberForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputTextArray = winningNumberArray
    .map((element) => parseInt(element.value, 10))
    .sort()
    .reduce((previousValue, currentValue) => {
      if (!previousValue) return false;
      return previousValue === currentValue;
    });

  if (!inputTextArray) {
    alert('로또 번호에는 중복된 숫자를 입력할 수 없습니다.');
  }
});

winningNumberInput.forEach((element, index) => {
  element.addEventListener('keyup', (event) => {
    const { keyCode, target } = event;

    if ((keyCode > 47 || keyCode < 58) && target.value.length >= 2) {
      target.value = target.value.slice(0, 2);
      winningNumberArray[index + 1].value = null;
      winningNumberArray[index + 1].focus();
    }
  });
});

bonusNumberInput.addEventListener('keyup', (event) => {
  const { keyCode, target } = event;

  if ((keyCode > 47 || keyCode < 58) && target.value.length >= 2) {
    target.value = target.value.slice(0, 2);
  }
});
