import { PRICE_UNIT, LOTTO_MAX_NUMBER } from './constants/index.js';
import getLotto from './logic/getLotto.js';

const render = (target, result) => {
  let numberHideText = '';
  let numberShowText = '';

  for (let i = 0; i < result.length; i++) {
    numberHideText += `🎟️ `;
    numberShowText += `<div>🎟️ ${result[i][0]} ${result[i][1]} ${result[i][2]} ${result[i][3]} ${result[i][4]} ${result[i][5]}</div>`;
  }

  target.querySelector('.lotto-number-hide').innerHTML = numberHideText;
  target.querySelector('.lotto-number-show').innerHTML = numberShowText;
};

const LottoList = ({ target, input }) => {
  const lottoBoughtCount = input.value / PRICE_UNIT;
  const lottoNumberArray = Array.from(
    { length: LOTTO_MAX_NUMBER },
    (_, index) => index + 1
  );

  const result = getLotto(lottoBoughtCount, lottoNumberArray);

  render(target, result);
};

export default LottoList;