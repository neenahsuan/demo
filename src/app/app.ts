
//我們要使用的套件的位置
// { }中的內容，就是我們要使用的套件的名稱

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//@Component這個裡面的內容，是我們的html頁面的是訂檔
//這個設定檔包含了，如果要使用這個頁面的時候她的標籤名稱
//這裡面的imports內容寫的是套件要用的套件
//templateUrl:是寫這個TS對應的HTML檔案
//styleUrl:是寫這個TS對應的SCSS檔案

@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

//export class寫得是這個頁面要寫的TypeScript
//export class後面的名稱 是這個頁面的名稱



export class App {
  protected title = 'demo';


// 貼上的script放在'demo';之後}前

  //新增一個方法 名稱要對應你畫面的名稱
 clickBnt() {
		//{}裡面寫這個方法是要做的事情
		//alert是彈出視窗
	alert("點擊了我~")
	}


;
testTitle: string='我是標題';

testContent: string='內容是我';

imgSrc: string='mouse.png';

showAlert(){
 alert('asd');
}

// 寫一半
// showAlert2(){
//  aleart('Allen');
// }

// showAlert3(){
//  this.showAlert2();
// }




}

