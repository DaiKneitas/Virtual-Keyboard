// Keys data array

const data = [
  /* 1st row */
  {
    code: 'Backquote',
    en: '`',
    enShift: '~',
    lt: '`',
    ltShift: '~',
    classes: 'key',
    row: 0,
    place: 0,
  },
  {
    code: 'Digit1',
    en: '1',
    enShift: '!',
    lt: 'ą',
    ltShift: 'Ą',
    row: 0,
    place: 1,
  },
  {
    code: 'Digit2',
    en: '2',
    enShift: '@',
    lt: 'č',
    ltShift: 'Č',
    classes: 'key',
    row: 0,
    place: 2,
  },
  {
    code: 'Digit3',
    en: '3',
    enShift: '#',
    lt: 'ę',
    ltShift: 'Ę',
    classes: 'key',
    row: 0,
    place: 3,
  },
  {
    code: 'Digit4',
    en: '4',
    enShift: '$',
    lt: 'ė',
    ltShift: 'Ė',
    classes: 'key',
    row: 0,
    place: 4,
  },
  {
    code: 'Digit5',
    en: '5',
    enShift: '%',
    lt: 'į',
    ltShift: 'Į',
    classes: 'key',
    row: 0,
    place: 5,
  },
  {
    code: 'Digit6',
    en: '6',
    enShift: '^',
    lt: 'š',
    ltShift: 'Š',
    classes: 'key',
    row: 0,
    place: 6,
  },
  {
    code: 'Digit7',
    en: '7',
    enShift: '&',
    lt: 'ų',
    ltShift: 'Ų',
    classes: 'key',
    row: 0,
    place: 7,
  },
  {
    code: 'Digit8',
    en: '8',
    enShift: '*',
    lt: 'ū',
    ltShift: 'Ū',
    classes: 'key',
    row: 0,
    place: 8,
  },
  {
    code: 'Digit9',
    en: '9',
    enShift: '(',
    lt: '9',
    ltShift: '(',
    classes: 'key',
    row: 0,
    place: 9,
  },
  {
    code: 'Digit0',
    en: '0',
    enShift: ')',
    lt: '0',
    ltShift: ')',
    classes: 'key',
    row: 0,
    place: 10,
  },
  {
    code: 'Minus',
    en: '-',
    enShift: '_',
    lt: '-',
    ltShift: '_',
    classes: 'key',
    row: 0,
    place: 11,
  },
  {
    code: 'Equal',
    en: '=',
    enShift: '+',
    lt: '=',
    ltShift: '+',
    classes: 'key',
    row: 0,
    place: 12,
  },
  {
    code: 'Backspace',
    isSpecial: true,
    name: 'Backspace',
    classes: 'key key-backspace',
    row: 0,
    place: 13,
  },

  /* 2nd row */
  {
    code: 'Tab',
    isSpecial: true,
    name: 'Tab',
    classes: 'key key-tab',
    row: 1,
    place: 0,
  },
  {
    code: 'KeyQ',
    en: 'q',
    enShift: 'Q',
    lt: 'q',
    ltShift: 'Q',
    classes: 'key',
    row: 1,
    place: 1,
  },
  {
    code: 'KeyW',
    en: 'w',
    enShift: 'W',
    lt: 'w',
    ltShift: 'W',
    classes: 'key',
    row: 1,
    place: 2,
  },
  {
    code: 'KeyE',
    en: 'e',
    enShift: 'E',
    lt: 'e',
    ltShift: 'E',
    classes: 'key',
    row: 1,
    place: 3,
  },
  {
    code: 'KeyR',
    en: 'r',
    enShift: 'R',
    lt: 'r',
    ltShift: 'R',
    classes: 'key',
    row: 1,
    place: 4,
  },
  {
    code: 'KeyT',
    en: 't',
    enShift: 'T',
    lt: 't',
    ltShift: 'T',
    classes: 'key',
    row: 1,
    place: 5,
  },
  {
    code: 'KeyY',
    en: 'y',
    enShift: 'Y',
    lt: 'y',
    ltShift: 'Y',
    classes: 'key',
    row: 1,
    place: 6,
  },
  {
    code: 'KeyU',
    en: 'u',
    enShift: 'U',
    lt: 'u',
    ltShift: 'U',
    classes: 'key',
    row: 1,
    place: 7,
  },
  {
    code: 'KeyI',
    en: 'i',
    enShift: 'I',
    lt: 'i',
    ltShift: 'I',
    classes: 'key',
    row: 1,
    place: 8,
  },
  {
    code: 'KeyO',
    en: 'o',
    enShift: 'O',
    lt: 'o',
    ltShift: 'O',
    classes: 'key',
    row: 1,
    place: 9,
  },
  {
    code: 'KeyP',
    en: 'p',
    enShift: 'P',
    lt: 'p',
    ltShift: 'P',
    classes: 'key',
    row: 1,
    place: 10,
  },
  {
    code: 'BracketLeft',
    en: '[',
    enShift: '{',
    lt: '[',
    ltShift: '{',
    classes: 'key',
    row: 1,
    place: 11,
  },
  {
    code: 'BracketRight',
    en: ']',
    enShift: '}',
    lt: ']',
    ltShift: '}',
    classes: 'key',
    row: 1,
    place: 12,
  },
  {
    code: 'Delete',
    isSpecial: true,
    name: 'DEL',
    classes: 'key key-delete',
    row: 1,
    place: 13,
  },

  /* 3rd row */
  {
    code: 'CapsLock',
    isSpecial: true,
    name: 'Caps Lock',
    classes: 'key key-caps',
    row: 2,
    place: 0,
  },
  {
    code: 'KeyA',
    en: 'a',
    enShift: 'A',
    lt: 'a',
    ltShift: 'A',
    classes: 'key',
    row: 2,
    place: 1,
  },
  {
    code: 'KeyS',
    en: 's',
    enShift: 'S',
    lt: 's',
    ltShift: 'S',
    classes: 'key',
    row: 2,
    place: 2,
  },
  {
    code: 'KeyD',
    en: 'd',
    enShift: 'D',
    lt: 'd',
    ltShift: 'D',
    classes: 'key',
    row: 2,
    place: 3,
  },
  {
    code: 'KeyF',
    en: 'f',
    enShift: 'F',
    lt: 'f',
    ltShift: 'F',
    classes: 'key',
    row: 2,
    place: 4,
  },
  {
    code: 'KeyG',
    en: 'g',
    enShift: 'G',
    lt: 'g',
    ltShift: 'G',
    classes: 'key',
    row: 2,
    place: 5,
  },
  {
    code: 'KeyH',
    en: 'h',
    enShift: 'H',
    lt: 'h',
    ltShift: 'H',
    classes: 'key',
    row: 2,
    place: 6,
  },
  {
    code: 'KeyJ',
    en: 'j',
    enShift: 'J',
    lt: 'j',
    ltShift: 'J',
    classes: 'key',
    row: 2,
    place: 7,
  },
  {
    code: 'KeyK',
    en: 'k',
    enShift: 'K',
    lt: 'k',
    ltShift: 'K',
    classes: 'key',
    row: 2,
    place: 8,
  },
  {
    code: 'KeyL',
    en: 'l',
    enShift: 'L',
    lt: 'l',
    ltShift: 'L',
    classes: 'key',
    row: 2,
    place: 9,
  },
  {
    code: 'Semicolon',
    en: ';',
    enShift: ':',
    lt: ';',
    ltShift: ':',
    classes: 'key',
    row: 2,
    place: 10,
  },
  {
    code: 'Quote',
    en: "'",
    enShift: '"',
    lt: "'",
    ltShift: '"',
    classes: 'key',
    row: 2,
    place: 11,
  },
  {
    code: 'Enter',
    isSpecial: true,
    name: 'Enter',
    classes: 'key key-enter',
    row: 2,
    place: 12,
  },

  /* 4th row */
  {
    code: 'ShiftLeft',
    isSpecial: true,
    name: 'Shift',
    classes: 'key key-shift shift-left',
    row: 3,
    place: 0,
  },
  {
    code: 'Backslash',
    en: '\\',
    enShift: '|',
    lt: '\\',
    ltShift: '|',
    classes: 'key',
    row: 3,
    place: 1,
  },
  {
    code: 'KeyZ',
    en: 'z',
    enShift: 'Z',
    lt: 'z',
    ltShift: 'Z',
    classes: 'key',
    row: 3,
    place: 2,
  },
  {
    code: 'KeyX',
    en: 'x',
    enShift: 'X',
    lt: 'x',
    ltShift: 'X',
    classes: 'key',
    row: 3,
    place: 3,
  },
  {
    code: 'KeyC',
    en: 'c',
    enShift: 'C',
    lt: 'c',
    ltShift: 'C',
    classes: 'key',
    row: 3,
    place: 4,
  },
  {
    code: 'KeyV',
    en: 'v',
    enShift: 'V',
    lt: 'v',
    ltShift: 'V',
    classes: 'key',
    row: 3,
    place: 5,
  },
  {
    code: 'KeyB',
    en: 'b',
    enShift: 'B',
    lt: 'b',
    ltShift: 'B',
    classes: 'key',
    row: 3,
    place: 6,
  },
  {
    code: 'KeyN',
    en: 'n',
    enShift: 'N',
    lt: 'n',
    ltShift: 'N',
    classes: 'key',
    row: 3,
    place: 7,
  },
  {
    code: 'KeyM',
    en: 'm',
    enShift: 'M',
    lt: 'm',
    ltShift: 'M',
    classes: 'key',
    row: 3,
    place: 8,
  },
  {
    code: 'Comma',
    en: ',',
    enShift: '<',
    lt: ',',
    ltShift: '<',
    classes: 'key',
    row: 3,
    place: 9,
  },
  {
    code: 'Period',
    en: '.',
    enShift: '>',
    lt: '.',
    ltShift: '>',
    classes: 'key',
    row: 3,
    place: 10,
  },
  {
    code: 'Slash',
    en: '/',
    enShift: '?',
    lt: '/',
    ltShift: '?',
    classes: 'key',
    row: 3,
    place: 11,
  },
  {
    code: 'ArrowUp',
    isSpecial: true,
    name: '▲',
    classes: 'key arrow arrow-up',
    row: 3,
    place: 12,
  },
  {
    code: 'ShiftRight',
    isSpecial: true,
    name: 'Shift',
    classes: 'key key-shift shift-right',
    row: 3,
    place: 13,
  },

  /* 5th row */
  {
    code: 'ControlLeft',
    isSpecial: true,
    name: 'Ctrl',
    classes: 'key key-ctrl ctrl-right',
    row: 4,
    place: 0,
  },
  {
    code: 'Windows',
    isSpecial: true,
    name: 'Win',
    classes: 'key key-win',
    row: 4,
    place: 1,
  },
  {
    code: 'AltLeft',
    isSpecial: true,
    name: 'Alt',
    classes: 'key key-alt alt-left',
    row: 4,
    place: 2,
  },

  {
    code: 'Space',
    isSpecial: true,
    name: 'Space',
    classes: 'key key-space',
    row: 4,
    place: 3,
  },
  {
    code: 'AltRight',
    isSpecial: true,
    name: 'Alt',
    classes: 'key key-alt alt-right',
    row: 4,
    place: 4,
  },
  {
    code: 'ArrowLeft',
    isSpecial: true,
    name: '◄',
    classes: 'key arrow arrow-left',
    row: 4,
    place: 5,
  },
  {
    code: 'ArrowDown',
    isSpecial: true,
    name: '▼',
    classes: 'key arrow arrow-down',
    row: 4,
    place: 6,
  },
  {
    code: 'ArrowRight',
    isSpecial: true,
    name: '►',
    classes: 'key arrow arrow-right',
    row: 4,
    place: 7,
  },
  {
    code: 'ControlRight',
    isSpecial: true,
    name: 'Ctrl',
    classes: 'key key-ctrl ctrl-right',
    row: 4,
    place: 8,
  },
];

// Keyboard class

class Keyboard {
  constructor(keysArray, view) {
    this.language = this.getLanguage();
    this.keysArray = keysArray;
    this.view = view;

    this.capslockPressed = false;

    this.pressed = [];
    this.createKeyboard();
  }

  createKeyboard() {
    let currentRow;
    this.keysArray.forEach((keyObject) => {
      if (currentRow !== keyObject.row) {
        const row = document.createElement('div');
        row.classList.add('row');
        this.view.append(row);
        currentRow = keyObject.row;
      }
      const button = document.createElement('button');
      button.dataset.keyCode = keyObject.code;
      if (keyObject.classes) button.classList = keyObject.classes;
      button.innerHTML = keyObject.isSpecial
        ? keyObject.name
        : keyObject[this.language];
      this.view.querySelectorAll('.row')[currentRow].append(button);
    });
  }

  setLanguage(language = this.language) {
    localStorage.setItem('language', language);
    return this;
  }

  getLanguage() {
    let currentLang = 'en';
    if (!localStorage.getItem('language')) {
      this.setLanguage(currentLang);
    } else {
      currentLang = localStorage.getItem('language');
    }
    return currentLang;
  }

  switchLanguage() {
    if (this.isPressed('ShiftLeft') && this.isPressed('ControlLeft')) {
      this.language = this.language === 'en' ? 'lt' : 'en';
      this.setLanguage(this.language);
    }
  }

  getButtonInfo(button) {
    return this.keysArray.filter(
      (key) => key.code === button.dataset.keyCode,
    )[0];
  }

  press(code, event) {
    switch (code) {
      case 'CapsLock':
        if (['mousedown', 'keydown'].includes(event)) {
          this.capslockPressed = !this.capslockPressed;
        }
        break;
      default:
        switch (event) {
          case 'keydown':
          case 'mousedown':
            this.addToPressed(code);
            break;
          case 'keyup':
          case 'click':
            this.removeFromPressed(code);
            break;
        }
    }
  }

  addToPressed(code) {
    if (!this.isPressed(code)) {
      this.pressed.push(code);
    }
  }

  removeFromPressed(code) {
    if (this.isPressed(code)) {
      this.pressed.splice(this.pressed.indexOf(code), 1);
    }
  }

  isPressed(keyName) {
    return keyName === 'CapsLock'
      ? this.capslockPressed
      : this.pressed.some((key) => key.includes(keyName));
  }

  updateKeys() {
    const buttons = this.view.querySelectorAll('button');

    buttons.forEach((button) => {
      const {
        code,
        isSpecial,
        [this.language]: text,
      } = this.getButtonInfo(button);
      let updatedText = text;

      if (!isSpecial) {
        if (
          this.isPressed('Shift')
        || (this.isPressed('Shift') && this.isPressed('CapsLock'))
        ) {
          updatedText = this.getButtonInfo(button)[`${this.language}Shift`];
        } else if (this.isPressed('CapsLock')) {
          updatedText = text.toUpperCase();
        }

        document.querySelector(`[data-key-code='${code}']`).innerHTML = updatedText;
      }
    });
  }

  typing(button, text) {
    const data = this.getButtonInfo(button);
    const textField = document.querySelector('.text');
    let cursorPosition = textField.selectionStart;
    let textBeginning = text.slice(0, cursorPosition);
    const textEnding = text.slice(cursorPosition);
    let typed = '';

    if (data.isSpecial) {
      switch (data.code) {
        case 'Backspace':
          textBeginning = textBeginning.slice(0, -1);
          cursorPosition -= 1;
          break;
        case 'Delete':
          textBeginning = textBeginning.slice(0, cursorPosition) + textEnding.slice(1);
          break;
        case 'Tab':
          typed = '\t';
          cursorPosition += 1;
          break;
        case 'Enter':
          typed = '\n';
          cursorPosition += 1;
          break;
        case 'Space':
          typed = ' ';
          cursorPosition += 1;
          break;
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          this.moveCursor(data.code);
          cursorPosition = textField.selectionStart;
          break;
        default:
          typed = '';
      }
    } else {
      const isShiftPressed = this.isPressed('Shift');
      const isCapsLockPressed = this.isPressed('CapsLock');

      typed = data[this.language];

      if (isShiftPressed) {
        typed = data[`${this.language}Shift`];
      } else if (isCapsLockPressed) {
        typed = typed.toUpperCase();
      }

      cursorPosition += 1;
    }

    textField.value = textBeginning + typed + textEnding;
    textField.setSelectionRange(cursorPosition, cursorPosition);
  }

  moveCursor(keyCode) {
    const textarea = document.querySelector('.text');
    const direction = keyCode === 'ArrowLeft' || keyCode === 'ArrowRight'
      ? 'horizontally'
      : keyCode === 'ArrowUp' || keyCode === 'ArrowDown'
        ? 'vertically'
        : null;

    if (!direction) {
      throw new Error('Invalid keyCode');
    }

    const goHorizontally = () => {
      let shifting = textarea.selectionStart;
      shifting += keyCode === 'ArrowLeft' ? -1 : 1;
      textarea.setSelectionRange(shifting, shifting);
    };

    const goVertically = () => {
      let cursorPosition = textarea.selectionEnd;
      const prevLine = textarea.value.lastIndexOf('\n', cursorPosition);
      const nextLine = textarea.value.indexOf('\n', cursorPosition + 1);

      if (nextLine === -1) {
        return;
      }

      cursorPosition += keyCode === 'ArrowUp' ? -prevLine : nextLine;
      textarea.setSelectionRange(cursorPosition, cursorPosition);
    };

    direction === 'horizontally' ? goHorizontally() : goVertically();

    return this;
  }

  activateKeys() {
    const buttons = this.view.querySelectorAll('button');
    buttons.forEach((button) => {
      const keyCode = button.dataset.keyCode;
      const isPressed = this.pressed.includes(keyCode);
      button.classList.toggle('active', isPressed);
    });
    if (this.capslockPressed) {
      const capslockButton = this.view.querySelector(
        '[data-key-code="CapsLock"]',
      );
      capslockButton.classList.add('active');
    }
  }

  changeState(code, type) {
    this.press(code, type);
    this.activateKeys();
    this.switchLanguage();
    this.updateKeys();
  }
}

// Event handlers and initialization

function createTextField() {
  const textField = document.createElement('textarea');
  textField.classList.add('text');
  return textField;
}

function createKeyboardContainer() {
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard');
  return keyboardContainer;
}

function handlePress(event, keyboard, textField) {
  keyboard.changeState(event.target.dataset.keyCode, event.type);
  keyboard.typing(event.target, textField.value);
}

function handleRelease(event, keyboard) {
  const code = event.target.dataset.keyCode || '';
  keyboard.changeState(code, event.type);
}

function handleComputerKey(event, keyboard, textField) {
  event.preventDefault();
  const key = keyboard.view.querySelector(`[data-key-code="${event.code}"]`);
  if (key) {
    keyboard.changeState(event.code, event.type);
    if (event.type === 'keydown') {
      keyboard.typing(key, textField.value);
    }
  }
}

function handleWindowBlur(keyboard) {
  if (keyboard.pressed.includes('CapsLock')) {
    keyboard.pressed = ['CapsLock'];
  } else {
    keyboard.pressed = [];
  }
  keyboard.activateKeys();
}

window.addEventListener('load', () => {
  const message = document.createElement('p');
  message.innerHTML = 'To change the language - press: <strong>left Shift + left Ctrl</strong>. Keyboard was made using Windows OS.';
  document.body.appendChild(message);

  const textField = createTextField();
  document.body.appendChild(textField);

  const keyboardContainer = createKeyboardContainer();
  document.body.appendChild(keyboardContainer);

  const keyboard = new Keyboard(data, keyboardContainer);

  keyboardContainer.addEventListener('mousedown', (event) => {
    if (event.target.tagName === 'BUTTON') {
      handlePress(event, keyboard, textField);
    }
  });

  document.addEventListener('click', (event) => handleRelease(event, keyboard));
  document.addEventListener('keydown', (event) => handleComputerKey(event, keyboard, textField));
  document.addEventListener('keyup', (event) => handleComputerKey(event, keyboard, textField));

  textField.focus();
  textField.addEventListener('blur', () => textField.focus());

  window.addEventListener('blur', () => handleWindowBlur(keyboard));
});
