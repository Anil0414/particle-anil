import { ActionButton } from "./ActionButton"

export const Contact = () => {

    const handlesendMessage = () => {
        alert("Message Sent!");
    }
    return (<div>
        <h2>Contact Us</h2>
        <ActionButton text="Send Message" onClick={handlesendMessage} />
    </div>);
};