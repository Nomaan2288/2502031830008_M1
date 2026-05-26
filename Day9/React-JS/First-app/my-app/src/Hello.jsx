
import Component from "./Component"
function Hello(){

    const getName= (yourname) => {
        return yourname;
        }

        function handleClick(){
            alert("Button Was Clicked !")
        }

        const handleInput = (event) => {
            console.clear()
            console.log("value:" , event.target.value)

        }
        const handleMouseOver = (event)=> {console.log("Mouse is Over Text");}
        const handleDoubleClick = (event)=> {console.log("Text Is Double Clicked");}

        const name = "Yahubaba"
        const name1 = "Nomaan"
    return(
<>
<h1 className="test"> Hello From {getName(name)}</h1>
<h1 className="test"> Bye From {getName(name1)}</h1>
<p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Heeloo Showing MouseOver Event and DoubleCClick Event</p>
<button onClick={handleClick}>Click Me</button>
<button onClick={()=> alert("Hello From Inside Function")}>Say Hello</button>
<input type="text" onChange={handleInput} placeholder="Type Something" />
</>

    )

}

export default Hello