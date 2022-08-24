import { DrawForm, Toggle, WinningInput, InquiryForm } from './components/index.js';

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

const winningNumberArray = [...winningNumberInput, bonusNumberInput];

DrawForm({
  target,
  input: lottoPriceInput,
  form: lottoSheetForm,
  validation: getLottoAvailableQuantity,
  logic: getLottoList,
});

InquiryForm({ form: winningNumberForm, numberInput: winningNumberArray });

Toggle({ target, checkbox: lottoNumberToggleButton });

WinningInput({ numberInput: winningNumberArray });
