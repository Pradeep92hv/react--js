const Content = () => {
    const handleNameChange = () => {
        const names = ['Pradeep', 'Yanjare', 'Gowda'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleclick= ( ) =>{
        console.log("clicked")
    }

    const handleclick1= (name) =>{
        console.log(`clicked by ${name}`)
    }

    const handleclick2= (e) =>{
        console.log(e.target.innerText)
    }


    return (
        <main>
            <p onClick={(e)=> handleclick2(e)}>
                Hello {handleNameChange()}!
            </p>

            <button onClick={handleclick}>click here</button>

            <button onClick={()=> handleclick1("pradeephv")}>click here</button>

            <button onClick={(e)=> handleclick2(e)}>click here</button>
          
        </main>
    )
}

export default Content