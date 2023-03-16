import React from "react";

//va a recibir como parametro a los hijos de este componente
//los hijos son los componentes que se van a renderizar dentro de este componente
//puede recibir compontnetes y anidarlos con nuestra estructura
const Layout = ({ children }) => {
    return (
        <div className="Layout">
        {children}
        </div>
    );
    }

export default Layout;