# ****Exercise 1: JavaScript Drum Kit****

![螢幕快照 2022-08-18 下午01.51.44 上午.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d3b47f9e-fb4b-4b6b-ac7c-c424e829439b/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7_2022-08-18_%E4%B8%8B%E5%8D%8801.51.44_%E4%B8%8A%E5%8D%88.png)

### achieve the desired effect(**達到預期的效果**)：

模擬一個打鼓畫面，當使用者按下ASDFGHJKL時，網頁上的字母按鈕會變大變亮且會發出對應的鼓聲

### step breakdown (**步驟分解):**

- 在window上添加鍵盤的 **keydown** 事件

![螢幕快照 2022-08-17 下午17.08.21 下午.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d9bbb9d6-70ae-4725-b637-c3f88bb9d66d/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7_2022-08-17_%E4%B8%8B%E5%8D%8817.08.21_%E4%B8%8B%E5%8D%88.png)

- 找到對應按鈕的DOM 以及 所對應的音樂

![螢幕快照 2022-08-17 下午17.08.51 下午.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/996ee984-c791-4229-801f-056b263355c7/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7_2022-08-17_%E4%B8%8B%E5%8D%8817.08.51_%E4%B8%8B%E5%8D%88.png)

- 發出聲音並製作變大動畫(用css放大圖片)，在字母按鈕的class 增加playing

![螢幕快照 2022-08-17 下午17.09.35 下午.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f540263-aa75-4b14-acf9-176f2b3f97fe/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7_2022-08-17_%E4%B8%8B%E5%8D%8817.09.35_%E4%B8%8B%E5%8D%88.png)

- 解決圖片只放大不縮小

![螢幕快照 2022-08-18 下午00.50.46 上午.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e699f67-576f-408b-996e-aa6076c111a5/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7_2022-08-18_%E4%B8%8B%E5%8D%8800.50.46_%E4%B8%8A%E5%8D%88.png)

![螢幕快照 2022-08-17 下午17.11.34 下午.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7e56b4a1-120a-48e1-998c-8c0a7b1d1889/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7_2022-08-17_%E4%B8%8B%E5%8D%8817.11.34_%E4%B8%8B%E5%8D%88.png)

- 解決音樂無法連續播放

![螢幕快照 2022-08-17 下午18.59.20 下午.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23787755-1f49-407c-887d-a707b0e75f45/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7_2022-08-17_%E4%B8%8B%E5%8D%8818.59.20_%E4%B8%8B%E5%8D%88.png)

### Basic grammar (基礎語法)

### **keydown, keyup 的差異**

先來看看ＭＤＮ的解釋：

<aside>
💡 The **`keydown`**event is fired when a key is pressed.

</aside>

當我們按下鍵盤時，就會觸發 `keydown` 事件

以下是`keydown` 的特性：

- 按下任何按鍵時觸發，包含 ESC 、 ENTER 鍵等等。
- 連續按著按鍵，會連續觸發事件。
- 這時取 input 的值會是輸入前的值

<aside>
💡 The **`keyup`**event is fired when a key is released.

</aside>

當我們按下鍵盤後，離開按鍵時才會觸發`keyup` 事件

以下是`keyup` 的特性：

- 這時取 input 的值會是輸入完的值。

---

**keyCode: 得到鍵盤所對應到的數字代碼** [https://gist.github.com/tylerbuchea/8011573](https://gist.github.com/tylerbuchea/8011573) 對應表

key:按鍵所表現的值，會跟著輸入法改變。 

code:比較針對按鍵的自身的代碼，例如數字1的按鍵會得到「Digit1」

---

### **CSS Selector**

**CSS selectors** define the elements to which a set of CSS rules apply.

CSS選擇器會定義了一組 CSS 規則被應用在適合的元素。

![螢幕快照 2022-08-17 下午16.50.23 下午.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb282760-ed3b-474c-8f0d-1edd44bf563a/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7_2022-08-17_%E4%B8%8B%E5%8D%8816.50.23_%E4%B8%8B%E5%8D%88.png)

在這裡的意思是：**具有屬性`data-key="65"`的audio標籤.**

****`Template Literal`（鍵盤1左邊按鍵）**在字串前後以`` ``代替`" "`, 通常內部放的東西會被當成字串, 若要插入變數只要以`${變數}`隔開就好。

[CSS selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

---

### **target 跟 currentTarget的差別**

一樣先來看一下ＭＤＮ：

The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.

### 先說一下常用的Event.target

它可以接收事件，以及讓監聽者註冊到上面。DOM元素、document、window物件，是最常見的EventTarget物件。

EventTarget物件中有三個方法:

- `addEventListener`: 在事件對象上加入事件監聽者
- `removeEventListener`: 從事件對象移除事件監聽者
- `dispatchEvent`: 送出事件給所有有訂閱的監聽者

EventListener(事件監聽者)或稱為事件處理函式，可以自動得到事件傳入參數值，以此可以存取得到事件的屬性與方法

<aside>
💡 W3C標準中對於[EventListener](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener)也有定義它是一個介面，作為事件監聽者之用

</aside>

### 那什麼又是Event.**currentTarget**

<aside>
💡 **在W3C標準的定義中，`this`會相等於`event.currentTarget`**

</aside>

永遠會指向目前的事件目標對象

<aside>
💡 ***currentTarget始終是監聽事件者，而target是事件的真正發出者。***

</aside>

---

### Array.from()

The **`Array.from()`**static method creates a new, shallow-copied `Array`instance from an iterable or array-like object.

**`Array.from()`**方法會從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 `Array`
 實體。

<aside>
💡 ***ArrayLike對象不能使用push、map等方法，但具有length的屬性，可以進行更迭的操作。***

</aside>

<aside>
💡 ***利用array.keys()拿出這個陣列的迭代器，就是Iterable***

</aside>

`Array.from(object, mapFunction, thisValue)`

- **object：**
    
    此參數保存將轉換為數組的對象
    
- **mapFunction：**
    
    此參數是可選的，用於調用數組的每個項目。
    
- **thisValue：**
    
    此參數是可選的，它保存要作為 this 傳遞的上下文，以便在執行 mapFunction 時使用。如果傳遞了上下文，那麼每次調用回調函數時都會這樣使用，否則默認使用 undefined。
    
    在原作者的code上是有Array.from()，但此版本沒有。原因是document.querySelectorAll回傳的是 array-like ，因為Array.forEach() 是可以處理 array-like 的，所以在不考慮相容性的狀況可以不使用。
    
    ```
    querySelectorAll
    ```
    
    ```
    .querySelectorAll
    ```
    
    ```
    .querySelectorAll
    ```
    

---

### currentTime

定義：

The currentTime property sets or returns the current position (in seconds) of the audio/video playback.

When setting this property, the playback will jump to the specified position.

Set the currentTime property:

*audio|video*.currentTime="*seconds*"

![螢幕快照 2022-08-17 下午18.59.20 下午.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23787755-1f49-407c-887d-a707b0e75f45/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7_2022-08-17_%E4%B8%8B%E5%8D%8818.59.20_%E4%B8%8B%E5%8D%88.png)

這行程式是說：每次播放聲音前, 將播放進度設定回原點, 然後再播放

[HTML Audio/Video DOM Reference](https://www.w3schools.com/tags/ref_av_dom.asp)

---

### <kbd>＆<audio>

The <kbd> HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.

<kbd>是一個鍵盤輸入的元素，用於表示使用者輸入。他將產生一個行內元素

The **`Audio()`** constructor creates and returns a new `[HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)` which can be either attached to a document for the user to interact with and/or listen to, or can be used offscreen to manage and play audio.

<audio>**構造函數創建並返回一個新的 HTMLAudioElement，它可以附加到文檔以供用戶交互和/或收聽，也可以在屏幕外用於管理和播放音頻。**

- controls 音樂控制設定，這是控制 **播放/暫停和音量** 必要的設定
- autoplay 自動播放

---

### add remove & toggle

兩個有什麼差別呢？

**`classList.toggle("testClass")`**

**如果標籤的Class存在testClass，刪除testClass**

**如果標籤的Class不存在testClass，新增testClass**

以這個 code 來說，不適合使用toggle，因為code會像無窮迴圈一直在那邊開關開關，會無法停止