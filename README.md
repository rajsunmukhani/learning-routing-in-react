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