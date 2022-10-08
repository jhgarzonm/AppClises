import React from "react"
import "./HeaderAppStyle.css"

function HeaderApp() {
return(
<React.Fragment><header className="Header"><button className="IconoMenu"><span class="material-symbols-outlined">
menu
</span></button><img class="logo-empresa"src={"http://www.imcogroup.co/uploads/1/2/4/2/124297412/published/nuevo-logo-imco-pagina.png?1613011667"} alt={"Logotipo"}/>
</header>
</React.Fragment>
)

}

export {HeaderApp}