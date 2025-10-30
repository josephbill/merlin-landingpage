## MODERN WEB DEVELOPMENT 
Front End : client side of the web app : what your user can see and interact with 
Back End : server scripting of the web app : database infrastructure, server scripts
Middleware service : API's application programming interface : system that allows two or more softwares to communicate with each other 
### DAtA flow 
1. static data : data resides within the project structure of web application
2. dynamic data : 1. database within the connected server / 2. other servers that are not part of the current web app (API service )

Front End(request for data)  ->     directly (frameworks (Django, Flask)) or Middleware service (API)  <-  Backend(respond back to F.E with data request) 
### Coding Languages 
Front End -  a. HTML - hyper text markup language (language for the web) - structure of a web application 
            b.  CSS - cascading stylesheet (language we use to style HTML structure - define the web layouts for our webapp)
            c. JS - add interactivity/ dynamism to a website - DOM - Document Object Model
#### Frameworks - front end 
ReactJS , VueJS , NextJS, 

Back End -  a. Python  - server scripting language - execute operations from the backend 

#### Framework - Backend 

Django - python based framework 

### Version Control 
- reference to how we store and manage our source code projects
- git - software that handles version control 
- github.com - platform that offer GUI for git operations 
- gitlab.com - enterprise level 
- bitbucket.org - attlassian 

### Terminal 
- this is what we use to communicate to our computers , git operations 
- git bash - windows 
- mac  - search the application 'terminal' - cmd + shift + T 
- linux/ubuntu/linux mint - search the application 'terminal' - ctrl + shift + T

- pwd : print working directory 
- ls : list directory / files and other content within the printed directory 
- mkdir : make directory : create folders 
- cd : change directory - navigate inside and outside of folders 
     - cd foldername - navigate inside 
     - cd .. - navigate outside 
- touch : used to create files - touch filename.sth

### How to write HTML 
- We create elements 
- start tag : content : end tag 
<elementName>  start tag
content 
</elementName> end tag 

enclosing tag - some elements can be written 
< elementName />

1. HTML elements 
2. HTML + CSS - Cascading stylesheet 
3. Git operations

### Element types 
1. Inline elements - elements will only occupy as much width space as necessary 
2. Block elements - elements will occupy the entire width of the section

### Attributes
More info/ Meta data about an element 
- styling resource , identification resource , measurements 
- file resource - img, video


### CSS 
- styling resource - for our HTML Elements 
- CSS Grid/ Css Flexbox - for our layout and structuring webpage 

### Css Styling 
- Decide on the type of css to use 
a. inline css : usage of the style(applicable to all html elements) attribute directly on the html element to effect a desired styling 
b. internal css : usage of the style element within the head element to write css syntax inside the html document 
c. external css : writing css in a css file and linking that css file to a html page using the link element 

### Css syntax 
selector {
      styling_property : value_property
}

Selectors 
- element tagname  : style all elements in that html document that use the same name 
- id ::  : identification : styling will only be applied to the element indicated with the selected ID. - id attribute
#idname {
   styling_property : value_property
}
- class : bundling up of styling : styling will be applied to all elements bearing the same class name - class attribute 
.classname {
    styling_property : value_property
}
- Pseudo selectors : specify the element to be styled if its with a group i.e. like a class 


#### GIT COMMANDS 
## configuring terminals to work with git only use this command once 
- git config --global user.name "Yourgithubusername"
- git config --global user.email "Yourgithubemailaddress"
#### When a project is new , these steps are only done once at the beginning of the git  
- git remote add origin repository_link : connects the local git folder to the github platform repository process for the project 
- git init : initializes an empty git folder for version management for your project

#### updates and when project is new after achieving first two steps 
- git status - checks the files that are ready to be saved to github
red :not ready , green: ready 
- git add . - adds the files to git for tracking 
- git commit -m "commit message" - special message tagged to every version update 
- git checkout -b branchname
- git push -u origin branchname - command that will push the work from the local git folder to the repository on github

### CSS Layouts 
- Css GRID 
- Css Flexbox 


                                          navbar

side menu                                 main content                             main content 


                                          footer 

l - r 
12  /  4  = 3 
4 -items

### HTML and Javascript 
- How to write javascript 
   1. Write the code in the javascript file and connect the HTML page 
   2. Write JS in HTML via the script tag element <script></script>


### DOM - Document  Object Model 
- tree structure implementation of your HTML elements for the current page displayed on the broswer
- browsers allow JS to interact with the elements in the tree structure on runtime  

<html>
    <head>
        <title></title>
        <link/>
    </head>
    <body>
        <p>Simple Paragraph</p>
    </body>
</html>

document
     - head - title 
            - link 
     - body - p

     elements - nodes 

JS can manipulate any node within the given tree structure based off an event. 

### Events on the webpage ? 
1. DOMContentLoaded - when all html elements are rendered on the screen

document.addEventListener('event' , action)
the action is represented using functions 
document.addEventListener('event' , function(){
    // executed 
})
element.eventListener('event' , action)

2. Click, onPlay , onDrag , hold , hover , scroll - mouse , 
3. submit - forms - very specific to forms  
4. typing - keyUp event , keyDown - events 


### selecting the elements to be affected by chosen event 
### DOM methods for selection 
1. getElementById()
2. getElementsByTagName()
3. getElementsByClassName()

### from example what is innerHTML 
is an example of an element property 