import "./ssstyle.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->
    <h2 class="active"> Cart </h2>
    

    <!-- Icon -->
    <div class="fadeIn first">
      
    </div>

    <!-- Login Form -->
    <div>
        
      <input type="text" id="" class="cart-name" name="" placeholder="Имя">
      <input type="text" id="" class="cart-birthday" name="" placeholder="Дата рождения">
      <input type="text" id="" class="cart-gender" name="" placeholder="Пол">
      <input type="text" id="" class="cart-adress" name="" placeholder="Адрес">
      <input type="text" id="" class="cart-hobby" name="" placeholder="Хобби">
      <button class="cart-create">Создать</button>
        
    </div>
    <!-- Remind Passowrd -->  
  </div>
</div>
`;

// const addName:any = document.querySelector<HTMLInputElement>('.cart-name')

// function longestWord(sentence: string): string {
    
//   sentence.split('').filter(word => .test(word))


//   return "";
// }


function findLongestWord(inputString: string): string {
  const words = inputString.split(" ");
  let longestWord = "";
  
  for (const word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }
  
  return longestWord;
}

function isArmstrong(num: number): boolean {
const numStr = num.toString()
const power = numStr.length

let sum = 0
for (let i = 0; i < numStr.length; i++) {
  sum += Math.pow(parseInt(numStr[i]), power )
  
}

  return num === sum;
}




function isAcceptablePassword(password: string): boolean {
  if (password.length < 6) {
      return false;
  }
 
  return (  /\d/.test(password) && /[A-Z a-z]/.test(password));
}

function correctSentence(text: string): string {
  
  return "";
}

function correctSentence(sentence: string): string {
  if (sentence) {
      return sentence.toLowerCase().replace(/\b\w/, (char) => char.toUpperCase());
  }
  return ""+ ".";
}