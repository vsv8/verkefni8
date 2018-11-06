const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;
  const itemList = document.querySelector('.items');

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka
  }
  function formHandler(e) {
    e.preventDefault();
    const newItem = document.querySelector('.form__input').value;

    const li = document.createElement('li');
    li.className = 'item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'item__checkbox';
    li.appendChild(checkbox);

    const text = document.createElement('span');
    text.className = 'item__text';
    text.appendChild(document.createTextNode(newItem));
    li.appendChild(text);

    const button = document.createElement('button');
    button.className = 'item__button';
    button.appendChild(document.createTextNode('Eyða'));
    li.appendChild(button);

    itemList.appendChild(li);

    console.log('halló heimur');
  }
  //event handler fyrir það að klára færslu
  for (let item of itemList.querySelectorAll('.item__checkbox')) {
  item.addEventListener('click', finish);
  }
  function finish(e) {
    const span = e.target.nextElementSibling;
    if (e.target.checked) {
      span.style.textDecoration = 'line-through';
    }
    else {
      span.style.textDecoration = 'none';
    }
  }
  // event handler fyrir það að breyta færslu
  itemList.addEventListener('click', edit);
  function edit(e) {
    if(e.target.classList.contains('item__text')) {
      e.target.contentEditable = 'true';
      e.target.style.textDecoration = 'none';
      }
  }

  // event handler fyrir það að klára að breyta færslu
  itemList.addEventListener('keypress', commit);
  function commit(e) {
    const key = e.keyCode;
    if (key == 13) {
      e.target.contentEditable = 'false';
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }
  // event handler til að eyða færslu
  itemList.addEventListener('click', deleteItem);
  function deleteItem(e) {
    if(e.target.classList.contains('item__button')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
