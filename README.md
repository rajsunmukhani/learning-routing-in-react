1. This is the basic page setup as we have studied in backend for routing.

2. Now, we will at first install a package called *react-router-dom*, using :
    *npm install react-router-dom* or,
    *npm i react-router-dom*

3. Now to make routing active in full application we have to wrap the <App/> function call in main.jsx with the tags as:
                            *<BrowserRouter>
                                <App/>
                            </BrowserRouter>*

4. Now simply update the App.jsx as here to use routes, we have *Routes* named thing which works same as *Switch*. As, in Switch we first wrap everything under switch tag as <switch></switch> similarly here, we wrap it in <Routes></Routes> and under switch we gave the conditions as case 1 or case 2, similarly in routes we give conditions as *<Route/>* as:

<Routes>
    <Route/>
    <Route/>
    <Route/>
</Routes>

this will import its package accordingly from react-router-dom.

5. now as we give conditions in case in switch, we will give condtions in routes as named path : 
        *<Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />*

    This means that if there is '/' route then show 'Home.jsx' file and,
    if there is '/about' route then show About.jsx file and,
    if there is '/users' route then show Users.jsx file.

6. Now for the user, if he tries to enter some different route using website, we will make a default condition as in Switch cases, here it is Wild Card Route, which is * case and this will run a not found page as : 
            *<Route path="*" element={<NotFound />} />*

7. Now, here we see that page is getting refreshed every time we click on any 'a tag' in nav bar, now React is meant to reduce the load on server, and refreshing again and again, gives load on server hence, for that simply update 'a tag' with 'Link tag' and instead of 'href', we will write 'to' tag this will not update the page and still update the data on our web page.


8. Now, let say we want to also show the active page using link on nav bar, or in simple words, we want to highlight the active tag on the nav bar, for that there is a thing called *NavLink* used in the place of *Link* while defining the elements of nav links.

This, *NavLink* basically gives us a pre determined function which helps in getting the active element on the nav bar.To enable it we simply need to use NavLink tag in the place of Link tag in navigation bar.

9. Now as we want to change the stling of active NavLink we just to need apply the condition as folowing : 
    *<NavLink className={(e) => e.isActive ? "text-red-600" : ""} to="/">Home</NavLink>*
This was for tailwind compatibility, and for normal CSS styling, we can do it as : 
    *<NavLink style={(e) => ({fontWeight :  e.isActive ? 700 : 400})} className={(e) => e.isActive ? "text-red-600" : ""} to="/">Home</NavLink>*

10. Now, let us say that there is a form in users page, and on submittion of that form we want user to come back or re-render the user to the home page, for this we will use *useNavigate()* hook.

This hook basically helps in navigating the user to defferent page, without actually refreshing and re rendering the whole page.

To use it, we will simply 

    1. First create a form in user.jsx with any one input and a input:submit
    2. now apply onSubmit event to the form and pass the reference of submitHandler function in it.
    3. Now make the submit handler function, as : 
        *const submitHandler = (e) => {
            e.preventDefault();
            console.log("form submitted");
        };*
    4. Now make a variable and call the useNavigate hook inside it as : 
        *const navigate = useNavigate();*
    5. Now simply use it as : 
            *const submitHandler = (e) => {
                e.preventDefault();
                navigate('/');
            };*

Also, we can use *navigate(-1)* to get user one step back on the link
similarly we can use *navigate(1)* to get user one step forward on link.
also, *navigate(-2)* can be used to get two steps back on the link.
or, we can directly navigate it to a specific route using its link name as we did in our code using *navigate('/')*

11. Now we will arrange the code as per company standard for that just make a folder under src folder named routes and under it make a new file named MainRouter.jsx and under it cut the code of App.jsx under <Routes></Routes> tags and paste it inside the new made file named MainRouter.jsx, and import the necessary components.
