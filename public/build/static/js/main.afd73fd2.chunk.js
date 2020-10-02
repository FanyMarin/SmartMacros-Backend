(this["webpackJsonpsmartmacros-front"]=this["webpackJsonpsmartmacros-front"]||[]).push([[0],{33:function(e,a,t){e.exports=t(63)},38:function(e,a,t){},44:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),s=t.n(r),m=(t(38),t(6)),c=t(7),i=t(8),o=t(9),u=t(1),d=function(e){var a=e.user,t=e.logout;return l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar-wrapper"},a._id?l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/users/my-info"},"Smart Macros")))):l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/"},"Smart Macros"))),l.a.createElement("div",null,a._id?l.a.createElement("ul",{className:"navbar-right"},l.a.createElement("li",null,l.a.createElement(u.b,{to:"/users/my-info"},"Perfil")),l.a.createElement("li",{onClick:t},"Logout")):l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/login"},"Login"))))))},E=(t(44),t(2)),p=t(11),h=t(12),g=t(14),k=t.n(g),f=Object(n.createContext)(),v=t(3),N=t.n(v),b="https://floating-everglades-70656.herokuapp.com/api";N.a.defaults.withCredentials=!0;var x=function(e){return N.a.post("".concat(b,"/users/login"),e)},C=function(e){return N.a.post("".concat(b,"/users/signup"),e)},y=function(){return N.a.post("".concat(b,"/users/logout"))},j=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={user:{}},e.handleSubmit=function(a){a.preventDefault();var t="/login"===e.props.location.pathname,n=e.context.setUser,l=e.state.user,r=t?x:C,s=e.props.history,m=t?"/users/my-info":"/login";r(l).then((function(e){if(t){var a=e.data.user;localStorage.setItem("user",JSON.stringify(a)),n(a)}s.push(m)})).catch((function(e){k.a.notification({message:"<span uk-icon='icon: close'></span> ".concat(e.response.data.msg),status:"danger",pos:"top-right"})}))},e.handleChange=function(a){var t=e.state.user;t=Object(h.a)({},t,Object(p.a)({},a.target.name,a.target.value)),console.log(t),e.setState({user:t})},e}return Object(c.a)(t,[{key:"render",value:function(){var e="/login"===this.props.location.pathname;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"forms-container"},e?l.a.createElement("div",{className:"signin"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"sign-in-form"},l.a.createElement("h2",{className:"title"},"Iniciar sesi\xf3n"),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{className:"fas fa-user"}),l.a.createElement("input",{onChange:this.handleChange,name:"email",id:"email",required:!0,type:"email",placeholder:"Correo"})),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{className:"fas fa-lock"}),l.a.createElement("input",{onChange:this.handleChange,name:"password",id:"password",required:!0,type:"password",placeholder:"Contrase\xf1a"})),l.a.createElement("input",{type:"submit",value:"Login",className:"btn solid"}))):l.a.createElement("div",{className:"signup"},l.a.createElement("div",{className:"sign-up-form-container"},l.a.createElement("h2",{className:"title"},"Reg\xedstrate"),l.a.createElement("form",{onSubmit:this.handleSubmit,className:"sign-up-form"},l.a.createElement("div",{className:"input-field-signup"},l.a.createElement("i",{className:"fas fa-user"}),l.a.createElement("input",{onChange:this.handleChange,name:"nombre",id:"nombre",type:"text",placeholder:"Nombre",required:!0})),l.a.createElement("div",{className:"input-field-signup"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("input",{onChange:this.handleChange,name:"email",id:"email",type:"email",placeholder:"Correo",required:!0})),l.a.createElement("div",{className:"input-field-signup"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("input",{onChange:this.handleChange,name:"password",id:"password",type:"password",placeholder:"Contrase\xf1a",required:!0})),l.a.createElement("select",{className:"input-field-signup option-text",name:"sexo",id:"sexo",onChange:this.handleChange,required:!0},l.a.createElement("option",{defaultValue:"true"},"Sexo"),l.a.createElement("option",null,"Femenino"),l.a.createElement("option",null,"Masculino")),l.a.createElement("div",{className:"input-field-signup"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("input",{onChange:this.handleChange,name:"edad",id:"edad",type:"number",placeholder:"Edad",required:!0})),l.a.createElement("div",{className:"input-field-signup"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("input",{onChange:this.handleChange,name:"altura_cm",id:"altura_cm",type:"number",placeholder:"Estatura en cm",required:!0})),l.a.createElement("div",{className:"input-field-signup"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("input",{onChange:this.handleChange,name:"peso_kg",id:"peso_kg",type:"number",placeholder:"Peso en kg",required:!0})),l.a.createElement("select",{className:"input-field-signup option-text",name:"nivel_de_actividad",id:"nivel_de_actividad",onChange:this.handleChange,required:!0},l.a.createElement("option",{defaultValue:"true"},"Actividad"),l.a.createElement("option",null,"Bajo"),l.a.createElement("option",null,"Moderado"),l.a.createElement("option",null,"Alto"),l.a.createElement("option",null,"Muy alto"),l.a.createElement("option",null,"Hiperactivo")),l.a.createElement("select",{className:"input-field-signup option-text",name:"objetivo",id:"objetivo",onChange:this.handleChange,required:!0},l.a.createElement("option",{defaultValue:"true"},"Objetivo"),l.a.createElement("option",null,"Perder peso"),l.a.createElement("option",null,"Perder peso lentamente"),l.a.createElement("option",null,"Mantener peso"),l.a.createElement("option",null,"Aumentar masa muscular lentamente"),l.a.createElement("option",null,"Aumentar masa muscular")),l.a.createElement("select",{className:"input-field-signup option-text",name:"numero_de_comidas",id:"numero_de_comidas",onChange:this.handleChange,required:!0},l.a.createElement("option",{defaultValue:"true"},"Comidas"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5")),l.a.createElement("div",{className:"uk-flex-center uk-flex-column"},l.a.createElement("select",{className:"input-field-signup uk-width-1-1 uk-margin-remove-left option-text",name:"tipo_de_dieta",id:"tipo_de_dieta",onChange:this.handleChange,required:!0},l.a.createElement("option",{defaultValue:"true"},"Dieta"),l.a.createElement("option",null,"Est\xe1ndar"),l.a.createElement("option",null,"Equilibrada"),l.a.createElement("option",null,"Baja en grasas"),l.a.createElement("option",null,"Alta en prote\xednas"),l.a.createElement("option",null,"Cetog\xe9nica")),l.a.createElement("button",{type:"submit",className:"btn solid"},"Registrarse")))))),l.a.createElement("div",{className:"panels-container"},e?l.a.createElement("div",{className:"panel left-panel"},l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"\xbfA\xfan no tienes cuenta?"),l.a.createElement("p",{className:"uk-text-justify"},"Calcula tus calor\xedas y registra tu diario de alimentos de forma f\xe1cil y sencilla. \xa1Come lo que quieras! Siempre respetando tus objetivos de carbohidratos, prote\xednas y grasas."),l.a.createElement(u.b,{to:"/signup"},l.a.createElement("button",{className:"btn transparent",id:"sign-up-btn"},"Reg\xedstrate"))),l.a.createElement("img",{src:"../registrarse.svg",className:"image",alt:"registrarse"})):l.a.createElement("div",{className:"panel right-panel"},l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"\xbfTienes una cuenta?"),l.a.createElement("p",null,"\xa1Bienvenido de nuevo!"),l.a.createElement(u.b,{to:"/login"},l.a.createElement("button",{className:"btn transparent",id:"sign-in-btn"},"Iniciar sesi\xf3n"))),l.a.createElement("img",{src:"../login.svg",className:"image",alt:"iniciar sesion"}))))}}]),t}(n.Component);j.contextType=f;var _=j,w=function(){return l.a.createElement("div",{className:"landing"},l.a.createElement("section",{className:"main-landing"},l.a.createElement("div",{className:"main-left"},l.a.createElement("h2",null,"\xa1Smart Macros es tu mejor aliado para aprender a comer! "),l.a.createElement("p",null,"Calcula tus calor\xedas y registra tu diario de alimentos de forma f\xe1cil y sencilla."),l.a.createElement(u.b,{to:"/signup"},l.a.createElement("button",{className:"btn"},"Aprende m\xe1s"))),l.a.createElement("div",{className:"main-right"},l.a.createElement("img",{src:"../aprende.svg",className:"main-img",alt:"Aprende"}))),l.a.createElement("h2",null,"Todo lo que necesitas para un regimen de alimentaci\xf3n saludable e inteligente"),l.a.createElement("section",{className:"landing-grid"},l.a.createElement("div",{className:"column first"},l.a.createElement("h3",null,"Aprende"),l.a.createElement("img",{src:"../aprende.svg",className:"grid-img",alt:"Aprende"}),l.a.createElement("p",null,"Calcula tus necesidades cal\xf3ricas y de macronutrientes")),l.a.createElement("div",{className:"column second"},l.a.createElement("h3",null,"Disfruta"),l.a.createElement("img",{src:"../disfruta.svg",className:"grid-img",alt:"Disfruta"}),l.a.createElement("p",null,"\xa1Come lo que quieras! Siempre respetando tus objetivos nutricionales.")),l.a.createElement("div",{className:"column third"},l.a.createElement("h3",null,"Logra tus metas"),l.a.createElement("img",{src:"../logra_metas.svg",className:"grid-img",alt:"Logra metas"}),l.a.createElement("p",null,"Elige tu objetivo, perder peso, mantenerlo o ganar masa muscular.")),l.a.createElement("div",{className:"column last"},l.a.createElement("h3",null,"Vive sin preocupaciones"),l.a.createElement("img",{src:"../no_worries.svg",className:"grid-img",alt:"Vive sin preocupaciones"}),l.a.createElement("p",null,"Distribuye el porcentaje de calor\xedas de tus comidas."))))},O=function(){return l.a.createElement("div",{className:"uk-flex uk-padding-remove uk-margin-remove"},l.a.createElement("nav",{className:"uk-nav side-navbar-container uk-padding-bottom","uk-navbar":"true","uk-height-viewport":"true"},l.a.createElement("ul",{className:"uk-text-left uk-margin-small-left uk-margin-right uk-padding"},l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/users/my-info"},l.a.createElement("span",{className:"uk-margin-small-right","uk-icon":"icon: user; ratio: 1.1"}),l.a.createElement("span",null,"Perfil"))),l.a.createElement("hr",null),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/registros/mis-registros"},l.a.createElement("span",{className:"uk-margin-small-right","uk-icon":"icon: database; ratio: 1.1"}),l.a.createElement("span",null,"Mis registros"))),l.a.createElement("hr",null),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/alimentos/mis-alimentos"},l.a.createElement("span",{className:"uk-margin-small-right","uk-icon":"icon: list; ratio: 1.1"}),l.a.createElement("span",null,"Mis alimentos"))),l.a.createElement("hr",null),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/alimentos"},l.a.createElement("span",{className:"uk-margin-small-right","uk-icon":"icon: database; ratio: 1.1"}),l.a.createElement("span",null,"Base de alimentos"))),l.a.createElement("hr",null))))},S=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={usuario:{}},e.handleSubmit=function(){},e.handleChange=function(a){var t=e.state.usuario;t=Object(h.a)({},t,Object(p.a)({},a.target.name,a.target.value)),e.setState({usuario:t}),console.log(t)},e}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"uk-section uk-margin-remove uk-padding-remove"},l.a.createElement("div",{className:"uk-container uk-flex uk-flex-between uk-padding-remove uk-margin-remove"},l.a.createElement(O,null),l.a.createElement("img",{className:"form-image",src:"../../user-update.svg",alt:"user update"}),l.a.createElement("div",{className:"uk-width-1-2 form-shadow"},l.a.createElement("h4",{className:" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold"},"Actualizar informaci\xf3n"),l.a.createElement("form",{className:"uk-width-1-1 uk-padding",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"uk-width-1-1 uk-text-left"},l.a.createElement("label",{className:"uk-text-emphasis forms-font uk-margin-left uk-margin-right",htmlFor:"nombre"},"Nombre:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,name:"nombre",className:"uk-input",id:"nombre",type:"text",placeholder:"Nombre..."}))),l.a.createElement("div",{className:"uk-form-horizontal uk-margin"},l.a.createElement("div",{className:"uk-margin uk-text-left "},l.a.createElement("label",{className:"uk-form-label",htmlFor:"sexo"},"Sexo:"),l.a.createElement("div",{className:"uk-form-controls uk-width-1-2"},l.a.createElement("select",{className:"uk-select",id:"sexo",name:"sexo",onChange:this.handleChange},l.a.createElement("option",{defaultValue:"true"},"Sexo"),l.a.createElement("option",null,"Femenino"),l.a.createElement("option",null,"Masculino")))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"nivel_de_actividad"},"Nivel de actividad:"),l.a.createElement("div",{className:"uk-form-controls uk-width-1-2"},l.a.createElement("select",{className:"uk-select",id:"nivel_de_actividad",name:"nivel_de_actividad",onChange:this.handleChange},l.a.createElement("option",{defaultValue:"true"},"Nivel de actividad"),l.a.createElement("option",null,"Bajo"),l.a.createElement("option",null,"Moderado"),l.a.createElement("option",null,"Alto"),l.a.createElement("option",null,"Muy alto"),l.a.createElement("option",null,"Hiperactivo")))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"objetivo"},"Objetivo:"),l.a.createElement("div",{className:"uk-form-controls uk-width-1-2"},l.a.createElement("select",{className:"uk-select",id:"objetivo",name:"objetivo",onChange:this.handleChange},l.a.createElement("option",{defaultValue:"true"},"Objetivo"),l.a.createElement("option",null,"Perder peso"),l.a.createElement("option",null,"Perder peso lentamente"),l.a.createElement("option",null,"Mantener peso"),l.a.createElement("option",null,"Aumentar peso lentamente"),l.a.createElement("option",null,"Aumentar peso")))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"numero_de_comidas"},"N\xfamero de comidas:"),l.a.createElement("div",{className:"uk-form-controls uk-width-1-2"},l.a.createElement("select",{className:"uk-select",id:"numero_de_comidas",name:"numero_de_comidas",onChange:this.handleChange},l.a.createElement("option",{defaultValue:"true"},"N\xfamero de comidas"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5")))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"tipo_de_dieta"},"Tipo de dieta:"),l.a.createElement("div",{className:"uk-form-controls uk-width-1-2"},l.a.createElement("select",{className:"uk-select",id:"tipo_de_dieta",name:"tipo_de_dieta",onChange:this.handleChange},l.a.createElement("option",{defaultValue:"true"},"Tipo de dieta"),l.a.createElement("option",null,"Est\xe1ndar"),l.a.createElement("option",null,"Equilibrada"),l.a.createElement("option",null,"Baja en grasas"),l.a.createElement("option",null,"Alta en prote\xednas"),l.a.createElement("option",null,"Cetog\xe9nica")))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"edad"},"Edad:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,name:"edad",className:"uk-input",id:"edad",type:"number",placeholder:"Edad"}))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"altura_cm"},"Altura:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,name:"altura_cm",className:"uk-input",id:"altura_cm",type:"number",placeholder:"En cm"}))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"peso_kg"},"Peso:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,name:"peso_kg",className:"uk-input",id:"peso_kg",type:"number",placeholder:"En kg"})))),l.a.createElement("button",{className:"ver-mas uk-padding-small uk-light btn"},"Submit")))))}}]),t}(n.Component),A=function(e){var a=e.Nombre,t=e.Porcion,n=e.Unidad_de_medida,r=e.Grasas,s=e.Carbohidratos,m=e.Proteinas,c=e.Calorias_kcal;return l.a.createElement("div",{className:"uk-overflow-auto"},l.a.createElement("table",{className:"uk-table uk-table-middle uk-table-divider"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"uk-table-shrink"}),l.a.createElement("th",{className:"uk-width-small"}),l.a.createElement("th",{className:"uk-table-expand"}),l.a.createElement("th",{className:"uk-table-expand"}),l.a.createElement("th",{className:"uk-table-shrink uk-text-nowrap"}))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{className:"uk-preserve-width uk-border-circle",src:"../comida.svg",width:"100",alt:""})),l.a.createElement("td",{className:"uk-table-link"},a),l.a.createElement("td",{className:"uk-text-truncate"},l.a.createElement("ul",{className:"uk-list uk-list-collapse"},l.a.createElement("li",{className:"uk-text-justify"},"Carbohidratos: ",s," gr"),l.a.createElement("li",{className:"uk-text-justify"},"Proteinas: ",m," gr"),l.a.createElement("li",{className:"uk-text-justify"},"Grasas: ",r," gr"),l.a.createElement("li",{className:"uk-text-justify"},"Calorias ",c," kcal"))),l.a.createElement("td",{className:"uk-text-nowrap uk-text-justify"},"Cantidad: ",t," ",n),l.a.createElement("td",null,l.a.createElement(u.b,{to:""},l.a.createElement("button",{className:"btn"},"Ver")))))),l.a.createElement("hr",null))},M=function(e){return N.a.post("".concat(b,"/alimentos/crear-alimento"),e)},D=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={alimentos:[],misAlimentos:[]},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("".concat(b,"/alimentos/")).then((function(a){var t=a.data.result;e.setState({alimentos:t})})),N.a.get("".concat(b,"/alimentos/mis-alimentos")).then((function(a){var t=a.data.result;e.setState({misAlimentos:t})}))}},{key:"render",value:function(){var e="/alimentos"===this.props.location.pathname;return l.a.createElement("div",null,l.a.createElement("div",{className:"main-wrapper"},l.a.createElement(O,null),l.a.createElement("div",null,e?l.a.createElement("div",{className:"wrapper-alimentos"},l.a.createElement("h4",{className:" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold"},"Lista de alimentos"),this.state.alimentos.length>0?this.state.alimentos.map((function(e,a){return l.a.createElement(A,Object.assign({key:a},e))})):l.a.createElement("div",{className:"food-not-found"},l.a.createElement("div",{className:"uk-alert-primary uk-margin-top","uk-alert":"true"},l.a.createElement("p",null,"No hay alimentos.")))):l.a.createElement("div",{className:"wrapper-alimentos"},l.a.createElement("h4",{className:" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold"},"Lista de alimentos"),this.state.misAlimentos.length>0?this.state.misAlimentos.map((function(e,a){return l.a.createElement(A,Object.assign({key:a},e))})):l.a.createElement("div",{className:"food-not-found"},l.a.createElement("div",{className:"uk-alert-primary uk-margin-top","uk-alert":"true"},l.a.createElement("p",null,"No hay alimentos.")))),l.a.createElement("div",{className:"food-not-found"},l.a.createElement("h4",{className:"forms-title uk-margin-small uk-margin-top"},"\xbfNo encuentras lo que buscas?"," "),l.a.createElement(u.b,{to:"/alimentos/crear-alimento"},l.a.createElement("button",{className:"btn"},"Crear alimento"))))))}}]),t}(n.Component),q=t(31),P=t.n(q),F=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={alimento:{}},e.handleChange=function(a){var t=e.state.alimento;t=Object(h.a)({},t,Object(p.a)({},a.target.name,a.target.value)),e.setState({alimento:t})},e.handleSubmit=function(a){a.preventDefault();var t=e.state.alimento;M(t).then((function(e){P.a.fire({title:"Alimento creado con \xe9xito \ud83c\udf89",text:"Ir a ver detalles",confirmButtonText:"OK"})}))},e}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"uk-section uk-margin-remove uk-padding-remove"},l.a.createElement("div",{className:"uk-container uk-flex uk-flex-between uk-padding-remove uk-margin-remove"},l.a.createElement(O,null),l.a.createElement("img",{className:"form-image",src:"../../alimento.svg",alt:"user update"}),l.a.createElement("div",{className:"uk-width-1-2 form-shadow"},l.a.createElement("h4",{className:" forms-title ver-mas uk-padding-small uk-light uk-text-uppercase uk-text-bold"},"Registrar alimento"),l.a.createElement("form",{className:"uk-width-1-1 uk-padding",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"uk-width-1-1 uk-text-left"},l.a.createElement("label",{className:"uk-text-emphasis forms-font uk-margin-left",htmlFor:"Nombre"},"Nombre:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,className:"uk-input",id:"Nombre",type:"text",name:"Nombre",placeholder:"Nombre..."}))),l.a.createElement("div",{className:"uk-margin uk-width-1-1 uk-text-left uk-margin-remove-bottom"},l.a.createElement("label",{className:"uk-text-emphasis forms-font uk-margin-left",htmlFor:"Descripcion"},"Descripci\xf3n:"),l.a.createElement("div",null,l.a.createElement("textarea",{onChange:this.handleChange,name:"Descripcion",className:"uk-textarea",rows:"5",id:"Descripcion",placeholder:"Descripci\xf3n del alimento (opcional)..."}))),l.a.createElement("div",{className:"uk-margin uk-width-1-1 uk-text-left uk-margin-remove-bottom"},l.a.createElement("label",{className:"uk-text-emphasis forms-font uk-margin-left",htmlFor:"Marca"},"Marca:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,name:"Marca",className:"uk-input",id:"Marca",type:"text",placeholder:"Marca del alimento (opcional)..."}))),l.a.createElement("div",{className:"uk-margin uk-width-1-1 uk-text-left"},l.a.createElement("label",{className:"uk-text-emphasis forms-font uk-margin-left ",htmlFor:"Porcion"},"Cantidad:"),l.a.createElement("div",{className:"uk-grid-small","uk-grid":"true"},l.a.createElement("div",{className:"uk-width-1-2@s"},l.a.createElement("input",{onChange:this.handleChange,name:"Porcion",className:"uk-input",type:"number",placeholder:"Porci\xf3n"})),l.a.createElement("div",{className:"uk-form-controls uk-width-1-2"},l.a.createElement("select",{name:"Unidad_de_medida",className:"uk-select",id:"Unidad_de_medida",onChange:this.handleChange},l.a.createElement("option",{defaultValue:"true"},"Unidad de medida"),l.a.createElement("option",null,"gr"),l.a.createElement("option",null,"ml"))))),l.a.createElement("div",{className:"uk-form-horizontal uk-margin"},l.a.createElement("p",{className:"uk-text-emphasis forms-font"}),l.a.createElement("div",{className:"uk-margin uk-text-left"},"Informaci\xf3n nutricional",l.a.createElement("label",{className:"uk-form-label",htmlFor:"Grasas"},"Grasas:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,name:"Grasas",className:"uk-input",id:"Grasas",type:"number",placeholder:"gr"}))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"Carbohidratos"},"Carbohidratos:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,name:"Carbohidratos",className:"uk-input",id:"Carbohidratos",type:"number",placeholder:"gr"}))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"Proteinas"},"Prote\xednas:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,name:"Proteinas",className:"uk-input",id:"Proteinas",type:"number",placeholder:"gr"}))),l.a.createElement("div",{className:"uk-margin uk-text-left"},l.a.createElement("label",{className:"uk-form-label",htmlFor:"Calorias_kcal"},"Calor\xedas:"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{onChange:this.handleChange,name:"Calorias_kcal",className:"uk-input",id:"Calorias_kcal",type:"number",placeholder:"kcal (opcional)"})))),l.a.createElement("button",{className:"ver-mas uk-padding-small uk-light btn"},"Submit")))))}}]),t}(n.Component),I=function(e){var a=e.nombre,t=e.sexo,n=e.nivel_de_actividad,r=e.objetivo,s=e.numero_de_comidas,m=e.tipo_de_dieta,c=e.edad,i=e.altura_cm,o=e.peso_kg;return l.a.createElement("div",null,l.a.createElement("table",{className:"uk-table uk-table-striped"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"uk-text-justify"},"NOMBRE:"),l.a.createElement("td",{className:"uk-text-justify"},a)),l.a.createElement("tr",null,l.a.createElement("td",{className:"uk-text-justify"},"SEXO:"),l.a.createElement("td",{className:"uk-text-justify"},t)),l.a.createElement("tr",null,l.a.createElement("td",{className:"uk-text-justify"},"NIVEL DE ACTIVIDAD:"),l.a.createElement("td",{className:"uk-text-justify"},n)),l.a.createElement("tr",null,l.a.createElement("td",{className:"uk-text-justify"},"OBJETIVO:"),l.a.createElement("td",{className:"uk-text-justify"},r)),l.a.createElement("tr",null,l.a.createElement("td",{className:"uk-text-justify"},"CANTIDAD DE COMIDAS:"),l.a.createElement("td",{className:"uk-text-justify"},s)),l.a.createElement("tr",null,l.a.createElement("td",{className:"uk-text-justify"},"TIPO DE DIETA:"),l.a.createElement("td",{className:"uk-text-justify"},m)),l.a.createElement("tr",null,l.a.createElement("td",{className:"uk-text-justify"},"EDAD:"),l.a.createElement("td",{className:"uk-text-justify"},c)),l.a.createElement("tr",null,l.a.createElement("td",{className:"uk-text-justify"},"ALTURA:"),l.a.createElement("td",{className:"uk-text-justify"},i)),l.a.createElement("tr",null,l.a.createElement("td",{className:"uk-text-justify"},"PESO:"),l.a.createElement("td",{className:"uk-text-justify"},o)))))},V=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={miInfo:{}},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("".concat(b,"/users/my-info")).then((function(a){var t=a.data.result;e.setState({miInfo:t})}))}},{key:"render",value:function(){var e=this.state.miInfo;return l.a.createElement("div",{className:"uk-flex uk-flex-between"},l.a.createElement(O,null),l.a.createElement("div",{className:"profile-main"},l.a.createElement("div",{className:"uk-padding uk-padding-remove-bottom"},l.a.createElement("h1",{className:"title uk-text-success uk-text-bold"},"Mi perfil")),l.a.createElement("div",null,l.a.createElement("h4",{className:" forms-title ver-mas uk-padding-small uk-margin-small-bottom uk-light uk-text-uppercase uk-text-bold"},"Mi informaci\xf3n"),l.a.createElement("div",{className:"main-my-info"},l.a.createElement(I,{nombre:e.nombre,sexo:e.sexo,nivel_de_actividad:e.nivel_de_actividad,objetivo:e.objetivo,numero_de_comidas:e.numero_de_comidas,tipo_de_dieta:e.tipo_de_dieta,edad:e.edad,altura_cm:e.altura_cm,peso_kg:e.peso_kg}),l.a.createElement("img",{src:"../perfil.svg",className:"uk-width-1-3",alt:"Disfruta"})),l.a.createElement("div",{className:"btn-wrapper"},l.a.createElement(u.b,{to:"/users/actualizar/:id"},l.a.createElement("button",{className:"btn"},"Actualizar"))))))}}]),t}(n.Component),B=function(){return l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/login",component:_}),l.a.createElement(E.a,{exact:!0,path:"/signup",component:_}),l.a.createElement(E.a,{exact:!0,path:"/",component:w}),l.a.createElement(E.a,{exact:!0,path:"/users/my-info",component:V}),l.a.createElement(E.a,{exact:!0,path:"/users/actualizar/:id",component:S}),l.a.createElement(E.a,{exact:!0,path:"/distribucion-macros/mis-resultados",component:function(){return l.a.createElement("h1",null,"Mis resultados")}}),l.a.createElement(E.a,{exact:!0,path:"/registros/mis-registros",component:function(){return l.a.createElement("h1",null,"Mis registros")}}),l.a.createElement(E.a,{exact:!0,path:"/alimentos",component:D}),l.a.createElement(E.a,{exact:!0,path:"/alimentos/mis-alimentos",component:D}),l.a.createElement(E.a,{exact:!0,path:"/alimentos/crear-alimento",component:F}))},T=function(){return l.a.createElement("footer",{className:"footer-wrapper"},l.a.createElement("div",{className:"footer-smart-logo"},l.a.createElement("img",{src:"../manzana.svg",className:"smart-apple",alt:"Smart Macros logo"}),l.a.createElement("h1",null,"Smart Macros")),l.a.createElement("div",{className:"footer-contact-us"},l.a.createElement("ul",{className:"social-links"},l.a.createElement(u.b,{to:"#"},l.a.createElement("li",null,l.a.createElement("img",{src:"../facebook.svg",className:"contact-icons",alt:"facebook"}))),l.a.createElement(u.b,{to:"#"},l.a.createElement("li",null,l.a.createElement("img",{src:"../github.svg",className:"contact-icons",alt:"github"}))),l.a.createElement(u.b,{to:"#"},l.a.createElement("li",null,l.a.createElement("img",{src:"../instagram.svg",className:"contact-icons",alt:"instagram"})))),l.a.createElement("p",null,"By Stephany Mar\xedn N\xe1jera"),l.a.createElement("hr",null)))},L=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={user:JSON.parse(localStorage.getItem("user"))||{}},e.setUser=function(){var a=e.state.user;e.setState({user:a})},e.logout=function(){var a=e.props.history;y().then((function(){localStorage.removeItem("user"),e.setState({user:{}}),a.push("/login")}))},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state,a=this.setUser,t=this.logout;return l.a.createElement(f.Provider,{value:{state:e,setUser:a,logout:t}},l.a.createElement("div",{className:"App"},l.a.createElement(d,{user:e.user,logout:t}),l.a.createElement(B,null),l.a.createElement(T,null)))}}]),t}(n.Component),U=Object(E.f)(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=t(32),G=t.n(z);t(62);k.a.use(G.a);var R=function(){return l.a.createElement(u.a,null,l.a.createElement(U,null))};s.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.afd73fd2.chunk.js.map