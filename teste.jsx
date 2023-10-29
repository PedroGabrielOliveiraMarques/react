return(
    <div>
        <h1>ola mundo</h1>
        <button onClick={()=> setCount((prevCount) => prevCount +1)}>
            renderizar
        </button>
        <p>{count}</p>
    </div>
)