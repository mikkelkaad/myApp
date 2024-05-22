import "../styles/Modal.css";
import {Card} from "./Card";
import placeholder from "./placeholder.png";
import Swal from "sweetalert2";


const validateInput = (name,weight,birthday)=>{
    let isValid = true;
    if(name === "") isValid = false;
    if(weight === "") isValid = false;
    if(birthday === "") isValid = false;
    return isValid;
}


const breedPicker = async (props,i)=>{
    props.pet.breed = props.breeds[i].breed;
    Swal.fire({
        title:"We just need a bit more info about your pet:",
        background:"#ff7f50",
        color:"#000",
        html:`
        <input placeholder="Name" id="petName"  />
        <input placeholder="Weight"id="petWeight" />
        <input placeholder="Birthday" id="petBirthday" type="date"  />
        `,
        preConfirm:async()=>{
            return validateInput(
            document.getElementById('petName').value,
            document.getElementById('petWeight').value,
            document.getElementById('petBirthday').value   
        )
        }
    }).then(async (result)=>{
        if(!result.isConfirmed)return;
        props.pet.name = document.getElementById('petName').value;
        props.pet.weight = document.getElementById('petWeight').value;
        props.pet.birthday = document.getElementById('petBirthday').value;
        
        
        console.log(props.pet);

        const request =  await fetch('http://localhost:8080/pets',
        {method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(props.pet)});
        const response = await request.json();
        let icon = "success";
        if (response.statuscode !== 200){
          icon = "error"
        }
        Swal.fire({
          title:response.status,
          text:response.data.result,
          icon:icon,
          showConfirmButton:false,
          timer:1000
        }).then(()=>{
          window.location.reload();
        });
    })
}

export const BreedsModal = (props)=>{
    let list = props.breeds;
    // for(let i=0;i<props.breeds.length;i++){
    //     list.push(<><Card cardUrl={placeholder} cardAlt={props.breeds[i].breed} func={()=>{breedPicker(props,i)}} /></>);
    // }

    return(
        <div id ={props.modalId} className="modal">
            {    list.map((breed,i)=>{
        return(
            <Card key={i} cardUrl={placeholder} cardAlt={breed.breed} func={()=>{breedPicker(props,i)}} /> 
        )
    })}
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