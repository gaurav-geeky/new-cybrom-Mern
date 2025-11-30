# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# context API  25 july, 2025  25 july, 2025    25 july, 2025    25 july, 2025  
to solve prop drilling problem  use  context api 


with help of context api   we flow global data. 
isme paretn to  child data jata hai.  
 ________________________________________________________ 
 3 main thing 

 create  - variable 
provider - variable flow   
consumer -  accept 

to provide data in variable form

usecontext  :  for accepting data which is being provided ( so now we do not need store.consumer )

# to get multiple variable value in  1 componenet using store. consumer 

      {/*   object wala , game wala both */}

      <store.Provider value={{user, game}}>
  
        <Dashboard />
      </store.Provider>

 #    componenet me 
 
___ for use context only ___ 
  let {user, game} = useContext(store) 

   <h1> data from app to dashboard name: __ usecontext__ {user.name} & {user.pass}   </h1>

    <h1> this is game in use context ___ {game} </h1> 


