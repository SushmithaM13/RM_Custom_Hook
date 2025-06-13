
const Child=({isVisible, toggleVisibility})=>{
    return(
        <>
        <button onClick={toggleVisibility}>{isVisible ? "Hide Message":"Show Message"}</button>
        {isVisible && (<p>
            "Hello! You have toggled me!"
        </p>)}
        </>
    )
}
export default Child;