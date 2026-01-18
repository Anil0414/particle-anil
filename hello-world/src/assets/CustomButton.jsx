export const CustomButton = () => {

    const handleClick = (e) => {
        console.log("Button Clicked!", e.target);
        console.log("click Cordinates:", e.clientX, e.clientY);
        console.log("which mouse button:", e.which);
        alert("Button Clicked!");
    }

    return <button onClick={handleClick}>Click Me!</button>;
};
