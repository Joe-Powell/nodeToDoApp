# nodeToDoApp
 To Do Application with node.js express and mongoDB
 
In this poroject the function onloadPage() is created for when the page first loads and gets re-used so there is no repetitive code.
Nothing refreshes the page because we use e.preventDefault() inside the addEventListeners and inside some of the functions we created such as deleteButtonFunction() and applyChanges(). 
then it will fire the onloadPage() function again to spit out the page contents with updated monglDB results.
		

Within the functions  deleteButtonFunction() and applyChanges(), we catch the id through the parameter which was passed through the onclick event in the html.
Next we declare the forms with a querySelectorAll and make a for loop to loop through them all after that.
Then inside the for loop we make an addEventListener and listen for an instance of the submit event on a particular submission of a form.
While still inside the listener, We prevent the page from refreshing and put the id, name ect in variables for the body we will send through.
Then create a body variable that equals an object and put the variables inside there for processing through.
Next we create the fetch while still inside the event listener to send the body through.
Last we invoke the onloadPage() outside of the fetch request but still inside the addEventListener
