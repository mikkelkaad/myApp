import "../styles/Modal.css";
import {Card} from "./Card";
import placeholder from "./placeholder.png"

export const BreedsModal = (props)=>{
    let list = [];
    for(let i=0;i<props.breeds.length;i++){
        list.push(<Card cardUrl={placeholder} cardAlt={props.breeds[i].breed} key={props.breeds[i].id} />);
    }
    return(
        <div id ={props.modalId} className="modal">
            {list}
        </div>
    )
}

BreedsModal.show = (modalId)=>{
    
    const modal = document.querySelector(modalId);
    modal.style.display = modal.style.display === "block" ? "none" : "block";

    window.onkeydown = (event)=>{
        if(event.keyCode === 27){
            modal.style.display = "none";
        }
    }

}