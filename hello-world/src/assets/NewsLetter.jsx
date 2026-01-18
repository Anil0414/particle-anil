import { ActionButton } from "./ActionButton";

export const NewsLetter = () => {
    const handleSubscribe = () => {
        alert("Subscribed to Newsletter!");
    }
    return (<div>
        <h2>Subscribe to our Newsletter</h2>
        <ActionButton text="Subscribe" onClick={handleSubscribe} />
    </div>);
}