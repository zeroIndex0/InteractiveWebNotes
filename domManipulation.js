//
//
//
// domManipulation.js

// Notes:   Just doing some dom manipulation
//          This file requires domManipulation.html and domManipulation.css to be in the
//              same directory.
//          I was taking some notes on studying javascript and the DOM and decited to
//          also implement the notes instead of just thinking about whats happening
//
//          Another thing to note is that while taking these notes, I didn't know anything
//          about ES6 until about the end of the notetaking, which is why you will see some
//          'let' being used at the end.  I haven't decided yet if I should use more ES6
//          or continue with the old since what I'm reading hasnt been updated to ES6
//
//          #3498db     this is a really nice looking blue color

//selection process
var h1 = document.querySelector("#pageHeader");
//I dont know why the console is trowing a fit saying this is null
//its quite clearly NOT null since i can manipulate it!
//and its the ONLY h1 that exists on the page... sheesh
//maybe its running before the HTML loads and thats the issue
//on this machine, its telling me there is no such thing as document
//and i know that is not the case

if(h1 !== null) {
    console.log("h1 has stuff in it! Yet I get 'TypeError: h1 is null [Learn More]'.  What a werid and annoying bug!");
}

//manipulation process
h1.style.color = "pink";


//document.getElementById()
var idTag = document.getElementById("byId");
// console.dir(idTag);  //this line is annoying as it expands automatically in the console
// and i had to close it with every refresh.  I coudn't take that for long 
// and had to comment it out.  Uncomment if you're curious again as to what it looks like
idTag.textContent = "This idtag was changed via JavaScript!";


//document.getElementsByClassName()
var classTags = document.getElementsByClassName("byClass");
//this prints out what looks like an array, there are elements of each tag
//it had a length property and each tag is indexed
//its actually not an array, so you cant use array methods on the tags :/
console.log(classTags);
//It does have a textContent though, so lets try a for loop
//cool, it works
for (var i = 0; i < classTags.length; i++) {
    classTags[i].textContent = "Changed class text via JavaScript!";
}


//document.getElementsByTagName
var tagNames = document.getElementsByTagName("tag");
console.log(tagNames);
for (var i = 0; i < tagNames.length; i++) {
    tagNames[i].textContent = "Changed tag names text via JavaScript";
    console.log(tagNames[i].textContent); //yet, it prints just fine
}


//document.querySelector()   It only reutnrs ONE element, the first one
//can even do something like document.querySelector("li a.special")
//which is the first anchor tags in an li marked special

var qSelector1 = document.querySelector("#querySelectorDemoId");
console.log(qSelector1);    //these are all objects-ish, i think
qSelector1.textContent = "changed selector id via JavaScript";

var qSelector2 = document.querySelector(".querySelectorDemoClass");
console.log(qSelector2);    //these are all objects-ish, i think
qSelector2.textContent = "changed selector class via JavaScript"

//document.querySelectorAll()
var qSelectorAll1 = document.querySelectorAll("#querySelectorAllDemoId");
console.log(qSelectorAll1);
//even though this is an id and can only be one, it will still return
//a list and you have to deal with the index.  So the All means you must
//always keep track of the index no matter how small the object / list? is
qSelectorAll1[0].textContent = "This id text was changed via select all JavaScript.  But it's an id so it's pointless, but it still works";

var qSelectorAll2 = document.querySelectorAll(".querySelectorAllDemoClass");
//if you are looking for a certain index, you can toss it in after the document.blah()[index]
//ex. var qselectorall2 = docuemnt.quersyselectroall(".quesrdeomclass")[index]
console.log(qSelectorAll2);
for (var i = 0; i < qSelectorAll2.length; i++) {
    qSelectorAll2[i].textContent = "This class text was changed via query select all JavaScript.  Mind the index";
}



//changing an elements style
var cElemStyle = document.querySelector("#changeElementsStyle");
cElemStyle.textContent = "It's better to make style changes in css.  You can make a class in css and change it all at once with JavaScript";
// for some reason there is no border attribute or font-size or any others listed in the html notes.  I wonder why?
cElemStyle.style.color = "white";


//adding / removing a class
var addRemoveClass = document.querySelector(".classToBeChanged");
//adding a class
addRemoveClass.textContent = "class has changed by JavaScript to a pre-built class created in css";
//classList is technically NOT an arrary, just something to keep in mind
addRemoveClass.classList.add("addRemoveClasses");
// console.log(addRemoveClass.childNodes[0].textContent);
//currently the element has both classes, the added one and the origianl one
addRemoveClass.classList.remove("classToBeChanged");
//now the original class is removed from the element
//but i could just toggle the class if i were to want to use it later
//the two lines below toggles the newly created class off and then back on so we can see it
//but I feel that toggle should be much better than remove in most cases
//as you might not want to lose full access to its original class
addRemoveClass.classList.toggle("addRemoveClasses");
addRemoveClass.classList.toggle("addRemoveClasses");


//changing the content of a tag
var changeContents = document.querySelectorAll(".textContents");
// console.log(changeContents[1].innerHTML);
changeContents[0].innerHTML = "But <strong>we can</strong> <em>use something called</em> <strong>innerHtml</strong> <em>to write tags into the new text content matching, <strong>if we wanted to</strong>, the old locations</em>"

changeContents[1].innerHTML = "See it's not that bad.  We can also add <strong>everything</strong> else we have learned so far to this text, like this obnoxious class";
changeContents[1].classList.add("addRemoveClasses");


//chaning attributes
var changeAttrATagHref = document.querySelector("a");
//get the attribute name / location
console.log(changeAttrATagHref.getAttribute("href"));
//change the attribute text and link
changeAttrATagHref.textContent = "My Random Code Repository ( cool stuff in there )";
changeAttrATagHref.setAttribute("href", "https://github.com/zeroIndex0/randomCode");

var changeAttrImgTag = document.querySelector("img");
//get the image name / location
console.log(changeAttrImgTag.getAttribute("src"));
//change the image
changeAttrImgTag.setAttribute("src", "Comparison.jpg");



// ====================== NOW WE ARE INTO EVENTS ====================\\

var button = document.querySelector("button");
// If you are going to change the text of an element and there is a tag
// inside that element, you might need to study something else or leave
// it alone altogether, as changing the innerHTML will break any
// eventListener() thats attached to any HTML in that tag!
// ******************* I COULD HAVE USED A SPAN ********************
button.addEventListener("click", function() {
    console.log("You Clicked The Button");  
    var textUnderButton = document.querySelector("#textChangeOnClick");
    if(textUnderButton.innerHTML === "<em>Click the above button</em>") {
        textUnderButton.innerHTML = "<em><strong>You clicked the button</strong></em><ul><li><em>I'm just so gosh darn proud of you for clicking the button <3</em><ul><li>Like, really proud<ul><li>I'm radiating joy</li><li>okay, I'll stop now</li><li>I'm stopping</li><li>I just had to let you know</li><li>that I'm proud of you</li><li>for smashing that button</li><ul><li>Serious, I'm done now</li><li>because now I'm just wasting my time</li></ul><li>all</li></ul><li>most</li></li></ul><li>DONE!!</li></li></ul>";
    } else {
        textUnderButton.innerHTML = "<em>Click the above button</em>";
    }    
    // *************** I COULD HAVE USED A SPAN ********************
    // IMPORTANT THINGS TO REMEMBER IN THIS FAILED ATTEMPT AT CHANGING DATA INSIDE THE INNERHTML
    // AT LEAST WHEN USING AN EVENT LISTENER
    // I really dont understand why this wont work, why it stops button from working at all.... ugh!
    // I just did a work around and changed the li under the button so i didnt have to mess with it
    // I can see there is a real problem when trying to edit any contents that have tags inside them
    // basically always avoid it, it seems
    // let data = document.querySelector("button")
    // if(data.parentNode.innerHTML === "Clicking on a <button>button</button>") {
    //     data.parentNode.innerHTML = "You clicked the <button>button</button>";
    // } else {
    //     data.parentNode.innerHTML = "Clicking on a <button>button</button>";
    // }
    // console.log(button);
    // this = document.querySelector("button");
    // console.log(typeof(this));
});


//hovering over a link - would also work with any other tag id class you want it to work with inside HTML
var hoverLink = document.querySelector("#hoverLinkId");
hoverLink.addEventListener("mouseover", function() {
    hoverLink.style.background = "orange";
    hoverLink.style.color = "yellow";
});
hoverLink.addEventListener("mouseleave", function () {
    hoverLink.style.background = "grey";
    hoverLink.style.color = "blue";
});

var hoverText = document.getElementById("textHoverId");
hoverText.addEventListener("mouseover", function() {
    hoverText.classList.toggle("textHoverClass");
});
hoverText.addEventListener("mouseleave", function() {
    hoverText.classList.toggle("textHoverClass");
});

//changing the h1 from the start of the file here so it's more in line with my notes and
//not so out of place at the top.  I know it's better to put it at the top in terms of
//readabilty, but I feel for note taking, its much better down here with the rest
//sets a random color to the "page title" the first h1 in the page, not the tag title
h1.addEventListener("click", function() {
    let choice = Math.floor(Math.random() * 5) + 1;  //random number between 1 and 5 inclusive
    if(choice === 1) {
        h1.style.color = "pink";
    } else if(choice === 2) {
        h1.style.color = "red";
    } else if(choice === 3) {
        h1.style.color = "orange";
    } else if(choice === 4) {
        h1.style.color = "blue";
    } else {
        h1.style.color = "yellow";
    }
});


//loop though each li in the given class and change its text after its been clicked
var clickedLI = document.getElementsByClassName("clickableLIs");
//I never thought i would say this, but, I really miss integer math
for( let i = 1; i <= clickedLI.length; i++) {
    if(i < Math.round(clickedLI.length / 2)) {
        clickedLI[i-1].addEventListener("click", function () {
            this.textContent = "OUCH, that hurts really bad!";
            console.log(Math.round(clickedLI.length) / 2 + " i: " + i);
        });
    } else if ((i >= Math.round(clickedLI.length / 2)) && (i !== clickedLI.length) && (i !== clickedLI.length-1)) {
        clickedLI[i-1].addEventListener("click", function () {
            this.textContent = "You're mangling up my insides";
            console.log(Math.round(clickedLI.length) / 2 + " i: " + i);
        });
    } else if (i === clickedLI.length-1) {
        clickedLI[i-1].addEventListener("click", function () {
            this.classList.add("painClass");
            this.textContent = "Please... stop clicking me...";
            console.log(Math.round(clickedLI.length) / 2 + " i: " + i);
            console.log("Argh");
        });
    } else {
        clickedLI[i-1].addEventListener("click", function () {
            this.classList.add("painClass");
            this.textContent = "Please, stop, I can't take anymor... beep.. be.. b..";
            console.log(Math.round(clickedLI.length) / 2 + " i: " + i);
        });
    }
}
