const INPUT_MAX_LENGTH = 2;
const INPUT_MIN_LENGTH = 0;
const INPUT_EXCESS_LENGTH = 3;
const PASTE_CHECK = 1;

const focusNextInput = (input) => {
  input.focus();
  input.setSelectionRange(0, 2);
};

const WinningInput = ({ numberInput }) => {
  numberInput.forEach((currentInput, index) => {
    const nextInput = numberInput[index + 1];
    const previousInput = numberInput[index - 1];

    currentInput.addEventListener('keydown', (event) => {
      const { target, key } = event;
      const targetValueLength = target.value.length;

      if (key === 'Backspace' && targetValueLength === INPUT_MIN_LENGTH) {
        previousInput.focus();
      }
    });

    currentInput.addEventListener('beforeinput', (event) => {
      const { data } = event;
      const dataLength = data.length;

      if (isNaN(data) || dataLength > PASTE_CHECK) {
        event.preventDefault();
      }
    });

    currentInput.addEventListener('input', (event) => {
      const { target } = event;
      const targetValue = target.value;
      const targetValueLength = targetValue.length;

      if (targetValueLength >= INPUT_MAX_LENGTH) {
        focusNextInput(nextInput);
      }

      if (targetValueLength >= INPUT_EXCESS_LENGTH) {
        currentInput.value = targetValue.slice(0, 2);
      }
    });
  });
};

export default WinningInput;
