.
.
.
.

.
# REACT from   3 july , 2025  _____________  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

src __ is most imp folder ,  all the components will be made inside src. 
gitignore __ where the file you do not want to upload . 

1. babel convert     react code _____ to js code (becuase web browser engine understands only js code).  
2. only  1  html file  run on browser ____ connect ____ main.jsx
app.jsx  ____ code aya ___________ main.jsx se
app.jsx ________ called by ___________ Home.jsx , About.jsx , Contact.jsx  (src  me  components) 

#  5 july, 2025.  _____________  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

1.  In index.html file  we link script tag   in which attribute  type = "module"  to enable import export k.w. 
__ import   export   are the part of ES6 

2.   functions ( tradition /  arrow) made in components    export from components to App.jsx 
#   export default About                ( must use  1st letter CAPITAL )  in file name while exp/ imp. 

3.   these fun    are now    import in App.jsx  &    we can change function name also.
#       import About from "./my components/About" 

4.      use components in  App.jsx as a tag   < About />  # use self close tag 

5.  jsx alway return       single_element    so use   <> ... </> 

 return( 
        <>
            <h1>About page</h1>
            <p>here, it is all about jsx files </p>
        </>
    )

#   7 july 2025  _____________   ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ 

# in react we can use CSS in 3 type s inline,  internal and external but here in the form of object . 

App () {
     
     <> 
        <h1 style = { { backgroundColor: "red",  color: "white"} }>  </h1>
     </>
}

# about.jsx 
const About = () => { 
    let mystyle = { 
        backgroundColor: "yellow"
    }

    return( 
        <> 

  #          <h1 align="center" style={mystyle}> About page </h1>
            <p>here, it is all about jsx files </p>
        </>
    )
} 

# image section 

1.  if any image is in public folder then no  need to give path   we can directly access image without path. 
rest is same process   
___ make function 
___ export  it 

___ import in app.jsx file 
___ apply in return with  < Image /> ex. 



# 9 july 2025 _____________  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

# bundler : 
it gives us automatic files no ned to make extra js css  files 

framework : 

node module : project work,   depoendency and packages,  reat projet kis par  depend h 

npm int   __ node module 

app jsx  is by default import in  main jsx  

obj  is used to stroe multi data  .  combimation key value pair  

props act   as object when use in child1.jsx (child component) 

first bracket js   second of  object .  {{... info1}}   

we pass varibles in tags  inside {  var } ,  also objects 



# 10 july 2025   _____________  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

props drilling ; it is used to flow data from parent to  child 1 >>  child2  and so on. 
app .jsx as a attribute, 
child me function me as a parameter  props or destructure 

in < child /> tag as an variable  or atrribute. 

props is cobination of data and parameter 


 # how to get icon in UI components. 

react-icon is used to add icons in UI.  like we do in  CSS

# npm website  here we get all the commands to be install in our system. 



#  ###################################################### _______________________________________________


# hooks : they are normal js function, which is pre-defined in react. 
react is js library,  pre def function in js is hooks.  
diff hooks different works.   
chang in UI : use state Hooks.   

use state hooks return array in the destructure form .  
aray has    variable and function .  
keep it at top of function. 

vari value can be updated by it's function only  ..........

all events will be writeen in camle case   .......

#  to func with event with paraemter or argument we need arrow function.  


use state to change any UI 
here not getelemtent 

use state return array  in which 2  variable and function. 


# 16 july 2025.........  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ 

# useState is import from React 
then use in function   above return 

1.   we can pass any type of value inside use state   like  variabl,  string, object 
use STAte  by default returns an array   
let [ person, setper ]  

use CSS framework in  making   REACT  project.... 

2.  talwent framewrok of css rse .  
talwent cutomise in media queryy 

3.  it has predefi class 
4.  easy for UI  designing.   
5. 
6. all html pro not works here   we have to made it .  
7. 


 # 17 july 2025   ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

ternary operator  with  useSTAte: with  !a   (not opeartor works for both ) on  off  like switch.  




#  ###################################################### ___________________________________________




#  8 july 2025  8 july 2025   8 july 2025     8 july 2025   ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

PROPS : props are called properties and the combination of attributes and parameters ( with the help of which we can sent any data from parent to child). 

attribute pass in (parent)   &    props in (child) parmeter become objects 

#  destructure in  parameter to use data
#  in react only   parent to child   data flows   but not reverse

props. 
destructuring
destructure in  parameter. 

export function Child2 ( {contact, city} ) { 

    return ( 
        <> 
            <br />
            <h1 > hey I am Child2 my parent is app.jsx</h1> 

            <h2> my contact is _ {contact}</h2>
            <h2> my city is _ {city}</h2>
        </>
    )
}


#  ###################################################### ___________________________________________

# projects and topics 

state project : tailwind , useState,  
# 17 july, 2025  17 july, 2025  17 july, 2025     ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️


second project   :   css apply  

forth project :  props   exp imp  1 comp to   other comp 

third project  :  make object  , varibale in function  and use  in  return how. 

task color : change bg color with react.  

#  ###################################################### ___________________________________________

# 18 july, 2025     18 july, 2025   18 july, 2025   18 july, 2025   ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

# project  route_pro 
1. router to navigate another page in our componenet. 

2. _____________ 1st intall it . __________ npm install react-router-dom  _____________________-

it's entry in package . json   dependencies me.  ....... 

 # start.. 
Browser Router ->  navigation enable   karega.  (boss) __  it is written in main jsx (  to router the componenets coming to app jsx ) 

routes ->  direction dikhayega.  (manager) __  written in app jsx 

route -> path="index" element = {}.  (employee) konse path pe konsa element render hoga  .  written in app jsx.  

link 

outlet 



 
#  19 july, 2025  19 july, 2025    19 july, 2025      19 july, 2025  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ 

by default index is main page , so always put     <Route  index element={<Home />} />  
# index 
as a path to find  home page  <home />

#  _________________________________________________________

1.   #        <Route index element={ < Home />}  />
    to show home page in index   we do not need path  just 
    write  index

    __now  browser will  show  home pg.  as default pg. 
    __if   /home  nothing  becase it is in index 
    /about   then  About 
    __ always put Home  on  index. ( jis pg ko 1st me  ,  index me then  give it's path ) 
    all coponenet will render as URL  

#  _________________________________________________________

<> 
        <nav> 
            <ul> 
                <li> <Link to="/">  Home</Link></li>
                <li> <Link to="/about">  About</Link></li>
                <li> <Link to="/Contact">  Contact</Link></li>
            </ul>
        </nav>

#       <Outlet /> 

        <footer> 
            <h1> this is our footer 1</h1>
            <h1> this is our footer 2</h1>
            <h1> this is our footer 3</h1>
        </footer>
</>   


#  to use  Link   ,  Outlet ,  Routes / Route   WE MUST IMPORT IT  1st.  

# Link tag 
1.  here anchor tag not work but    link tag (not CSS) __ Link (react wala) 
Link  come from react-router-dom. __  <Link to="/about"> About </Link> 
2.  here page do not reload  ( anchor tag reloads) 
3.  we use Link tag &    Routes and <Route /> 




# Layout for  _____ making  fixed__ Nav (header)   &  Footer 

1. here for linking  Index     we use only     /     as a path 
2. we have  change     Home  to   index        because main page of any website is    known by  index 
so to go on   index ______  path ___ " / "  b

3.  every pg has   header & footer  fix   but   elements (mid) change. 


# layout 


<Routes>  
        <!--  here  path="/" element={ <Layout/ > }  means main page will look like      Layout  and  " / "   / is to show main index page.   --> 
    <Route path="/" element={ < Layout /> }>  
    <!-- layout jsx is comp    call in route  -->
          <!--  path  /   because har page pe ye layout chahiye .
          layout element  will   render in it.
          parent root  -->   // parent it has nav footer  


<!--  here child root 
path  ki  jagah index ispe (home)   &      /  har page pe nav & footer 

similarly   /about path ____ -->
                <Route index element={ <Home />}  />            // child
                <Route path="/about" element={ <About />}  />
                <Route path="/contact" element={ <Contact />}  />

<!--  to change all these comp   help__ Outlet   comp --> 
<!--   Outlet  to render child in root.  -->


    </Route> 


</Routes>

#        /      for    nav  &  footer  
# call    Outlet  to render components  jaha Outlet waha component.




# 21 july, 2025.  21 july, 2025.   21 july, 2025.    useEffect_pro    ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ 

#   

#  to call Api  use effect.  
use Effect to call API for getting data. 
we need 1st  jsx  come in browser to not make screen blank then,    get API data. 

useEffect ( call back,  dpencdency) 

#  Use by 3 types 
# due to useEffect that   print  will work multiple time 
1.  without dependency  ________  use effect ( ()=> {} ) 
__  whenever our component render in browser it works each time ,  when do something then also 
___ har ek render pe chalega use Effect (slow down process )   1st time   2 bar due to strict mode,  


(to fast the process     []  empty dependency)
2.  use effect with    empty  dependency______  use Effect ( ()=>{ } ,   []  )   
here dependency is in array format.
___ 1 time run  when our component render on web pag.  



3.  use Effect with dependency ________  (  ()=> {} ,  [var_name] )  
when this var value change    use Effect works.  
___ comp render on browser (due to console_ 1 time , due to strict mode shows 2 times)  +  when variable update.



 . component,  jsx,  css ,   tailwind,  use state,  icon,  event,  routing ,  

hook in react   func in js   
js norfn cint   use in react with help of hook 


# 22 july, 2025.  22 july, 2025.   22 july, 2025.    Form    ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ 

this form is used to get value ( how to print in react ) 

input me se value  ko kaise nikale 
sabse pehle onchange function se event object chalega   __  usme target me  value se ki madad se  ___   input value nikalenge. 
 

#  22 july, 2025    form handling .. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

1.  what we type in input tag ,  we need to handle it (in js we target input then value because there was html pg)   
(in  REACT)   :   form value handle krna aur   kisi cheez me store krke show  krna hai 

at each time   has to get each value   .    so event onchange in input. 

now empty  as we write smt ___  each value will get  using on change {event} ___  in this call function ___  handleInput  ___  make func  above return  ___ 

# instead of making function in EVENT   we can make arrow fun here. 
and pass value there
___   onChange={ (e)=> setAge(e.target.value) }   ___

onchange (event) fire kiya usme fun (handleInput) ____ 

now we want value which is coming should come in function  ( when we fire event  then   it gives       EVENT OBJECT pass hoga ).   

event obj       jis function ko call kia  uske pass jata hai . 

now handle  event obj  with the help of  parameter ___ function handleInput( e ) { } ___ 

now we   print e ,        this functin works  when   input value changes  

now see when we print (e)  in  console it shows diff prototypes   ___ (e ) event obj ___ target (obj) ___ value (obj) ___ .

#  now to store that value  somewhere

use   useState  , ___ use setValue function(of use State) in onChange (event)   ___    then use variable value of useState in   h1 or else tag ___

1.      <label htmlFor=" "> Weight </label>
        <input type="text" onChange={ (e)=> setValue (e.target.value) } />


2.      <h2> data is :  {value}</h2> 

# MULTI FORM HANDLE  react ... ❤️❤️❤️❤️❤️  

here we need pattern 
we need to make  1 use State, 1 function call ho 
1. define use state :  here pass object -- give key name, " " (empty value)  
2.  so now var of useState  hold object 

dynamic value chahiye    so  give dynamic key & value.  
___ key ___  name attribute ___ me pass key ( ye jayega  func me ) 
(because we want to store in object)  

3.   make same event onchange in   both input fields ( only 1 function )

now see we give (e) as a parameter of function   ___ (e ) event obj ___ target (obj) ___ key : value (object ka) ___ . (dynamic value lena ha)

4. ab   EVENT OBJ  jaye function me __________  hold it in parameter (e)
ab yaha pe object me  key: vlaue  dono  ayega toh
e.target.value   ni likhenge 

5. so destructure here. _________     const {name, value } = e.target 
#  name for key    name attribute

6. now form data   ke   data   ko   re-write  krn hai.  
_________  1st  make object ( {  } )   
_________  get prev    values   ...frmdata 
_________  get dynmaic name value     [name]:value  ( [key] ) 
key always come in bracket [ ] 
object has    dot notation ...OBJ   &   bracket notation [key] 


7.  now  onsubmit   event in  whole form 
now funtion   event object    

    function finalsubmit (event) { 
        event.preventDefault() 
        console.log( frmdata)
    } 

#   form submission ko rokne ke liye  prevent default 
data  will be  shown  when we submit  form.  


in jsx go one  to another   LINk  tag 

in function use   navigator  to   go   1 to another page.  
function name anything.   

