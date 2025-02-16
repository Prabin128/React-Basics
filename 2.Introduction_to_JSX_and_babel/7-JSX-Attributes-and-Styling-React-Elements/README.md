# JSX Attriutes annd Styling React elements

Though it works same as adding a class attribute and setting it to heading and implement desired css style in seperate .css file like below:

```js
function App() {

  return (
    <div>
      <h1 class="heading">Top 3 Best Movies</h1>
      <ul>
        <li>MAVRIK</li>
        <li>TOP GUN</li>
        <li>TENET</li>
      </ul>
    </div>
  )
}
```

```css
.heading{
  color: red;
}
```
The above code would work fine if this was a HTML File. But in react, its a JSX File. Although, in this case, it still works, and when applying this heading class style into our ***h1***, it does in fact change the color to red.

``` But the problem is: It throws an error in console as: ```



We can see that there is a warning saying, "Invalid DOM property `class`. Did you mean 'className'?"

React has done some handling behind the scenes so that even writing as a class, it still work, but there are some hectic situations that might get us into trouble.

Hence always remember, even though the code looks like HTML, it's still being rendered down to JavaScript, and in JavaScript the property to access all of the classes that exist on an element is a property called ***className***. 

For more information about property to access all of the classes go through the link below:
``` https://developer.mozilla.org/en-US/docs/Web/API/Element/className ```


Hence, The problem gets solved after using the proper name for the attribute called ***className*** property on an element like below.

```js
function App() {

  return (
    <div>
      <h1 className="heading">Top 3 Best Movies</h1>
      <ul>
        <li>MAVRIK</li>
        <li>TOP GUN</li>
        <li>TENET</li>
      </ul>
    </div>
  )
}
```

```css
.heading{
  color: red;
}
```





In a normal HTMl elements, when we add an attribute in normal HTML, it's not camel-cased like above ***className***, where the first word is lowercase and the next words are capitalized. Rather it is written in all one word. But when we head back to our JSX file the convention that we should follow is to name it like as if it's JavaScript.

For Example:

A list of all the HTML global attributes. 
``` https://www.w3schools.com/tags/ref_standardattributes.asp ```

So these attributes(from the link above) can be used on any HTML element. And one of these is called ***contenteditable***.

In normal HTML, the  contenteditabble is written all one word without camel-cased, but in JSX it should be in camel-cased as VS code automatically suggests for it as :

![Screenshot 2025-02-16 210644](https://github.com/user-attachments/assets/29ed5b03-15e6-416c-9517-2b1c9bfe853e)



***NOTE:***  If we still write it as "contenteditable", it throws warning in console as: 
``` Invalid DOM property `contenteditable`. Did you mean `contentEditable`?  ```


Hence, remember whenever we're writing attributes in HTML to make them camel-cased. Anything that we know of from  HTML attributes, we have to change it to the camel case version. 



But, we can implement the normal CSS as well. For instance we can target the ul element and implement the css style into it as a normal css.



We can also use JavaScript Expressions as the values for the attributes as long as  we include them inside the set of curly braces as below: 

```js
const image2 = 'https://m.media-amazon.com/images/I/91mrVIMAMCL.jpg';
const image3 = 'https://m.media-amazon.com/images/I/91oMmAPaaeL.jpg';
function App() {

  return (
    <div>
      <h1 class="heading">Top 3 Best Movies</h1>
      <img className = "movie-picture" src= {image2} />
      <img className = "movie-picture" src={image3} />
    </div>
  )
}
```








