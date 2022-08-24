const LOTTO_MIN_NUMBER = 1;
const LOTTO_MAX_NUMBER = 45;

const validationNumberInput = (previousValue, currentValue) => {
  console.log(previousValue, currentValue);

  if (typeof previousValue === 'string') return previousValue;

  if (currentValue <= LOTTO_MIN_NUMBER || currentValue >= LOTTO_MAX_NUMBER) return 'validate';

  return previousValue === currentValue ? 'duplicate' : currentValue;
};

const InquiryForm = ({ form, numberInput }) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const validationResult = numberInput
      .map((currntInput) => parseInt(currntInput.value, 10))
      .sort()
      .reduce(validationNumberInput);

    if (validationResult === 'duplicate') {
      alert('로또 번호에는 중복된 숫자를 입력할 수 없습니다.');
      return;
    }

    if (validationResult === 'validate') {
      alert('1 ~ 45 사이의 숫자를 입력해주세요.');
      return;
    }
  });
};

export default InquiryForm;
