// 1. Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM` como filho da tag `body`;
const addH1 = document.createElement('h1');
addH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(addH1);

// 2. Adicione a tag `main` com a classe `main-content` como filho da tag `body`;
const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

// 3. Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;
const addSectionCenter = document.createElement('section');
addSectionCenter.className = 'center-content';
elementMain.appendChild(addSectionCenter);

// 4. Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
const addParagraph = document.createElement('p');
addParagraph.innerHTML = 'Olá, Mundo!'
addSectionCenter.appendChild(addParagraph);

// 5. Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no passo 2;
const addSectionLeft = document.createElement('section');
addSectionLeft.className = 'left-content';
elementMain.appendChild(addSectionLeft);

// 6. Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;
const addSectionRght = document.createElement('section');
addSectionRght.className = 'right-content';
elementMain.appendChild(addSectionRght);

// 7. Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `section` criado no passo 5;
const addImg = document.createElement('img');
addImg.className = 'small-image';
addImg.src = 'https://picsum.photos/200';
addSectionLeft.appendChild(addImg);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, `um`, `dois`, `três`, ... como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;
const addListUl = document.createElement('ul');
addSectionRght.appendChild(addListUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis','Sete', 'Oito', 'Nove', 'Dez']
for(let index in arrayNumbers){
    const elementLi = document.createElement('li');
    elementLi.innerHTML = arrayNumbers[index];
    addListUl.appendChild(elementLi);
}
// 9. Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.
for (let index = 0; index <= 3; index += 1){
    const addH3 = document.createElement('h3');
    addH3.innerHTML = 'Olá, Mundo! ' + index;
    elementMain.appendChild(addH3);
}
 // Segunda Parte
 // 1.Adicione a classe title na tag h1 criada;
 const title = document.querySelector('h1');
 title.className = 'title';

 // 2.Adicione a classe description nas 3 tags h3 criadas;
 const elementH3 = document.getElementsByTagName('h3');
 for(let index = 0; index < 3; index += 1){
     elementH3[index].className = 'Descripton';
 }
// 3. Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
const sectionLeftContent = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(sectionLeftContent);

// 4. Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;
const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight='auto';

 // 5. Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green'; 

 // 6.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
 ul.lastChild.remove(nove);
 ul.lastChild.remove(dez);

